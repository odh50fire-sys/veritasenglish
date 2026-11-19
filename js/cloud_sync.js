/**
 * Veritas English - PC-모바일 기기 간 실시간 클라우드 자동 동기화 모듈 (Cloud Sync Manager)
 * 
 * 구글 Firebase Realtime Database를 활용하여 무과금(100% 무료)으로
 * 여러 기기(PC, 태블릿, 모바일) 간 모든 학습자 프로필 및 학습 데이터를 실시간 자동 동기화합니다.
 */

(function () {
    'use strict';

    const CONFIG_STORAGE_KEY = 'veritas_cloud_sync_config';
    const DEVICE_ID_KEY = 'veritas_device_id';

    class CloudSyncManager {
        constructor() {
            this.config = this.loadConfig();
            this.deviceId = this.getOrCreateDeviceId();
            this.isInitialized = false;
            this.isConnected = false;
            this.firebaseApp = null;
            this.database = null;
            this.syncRef = null;
            this.debounceTimer = null;
            this.isSyncing = false;
            this.lastLocalModifiedTime = 0;
            this.isApplyingRemote = false;

            // DOM 준비 후 초기화
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.init());
            } else {
                this.init();
            }
        }

        // --------------------------------------------------------------------
        // 설정 로드 및 디바이스 ID 관리
        // --------------------------------------------------------------------
        loadConfig() {
            try {
                const raw = localStorage.getItem(CONFIG_STORAGE_KEY);
                if (raw) {
                    return JSON.parse(raw);
                }
            } catch (e) {
                console.error('[CloudSync] Failed to parse config:', e);
            }
            return {
                enabled: false,
                autoSync: true,
                syncKey: 'veritas-default-room',
                firebaseConfig: null,
                lastSyncedAt: null
            };
        }

        saveConfig() {
            try {
                localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(this.config));
            } catch (e) {
                console.error('[CloudSync] Failed to save config:', e);
            }
        }

        getOrCreateDeviceId() {
            let devId = localStorage.getItem(DEVICE_ID_KEY);
            if (!devId) {
                const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
                const platform = isMobile ? 'mobile' : 'pc';
                devId = `dev_${platform}_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`;
                localStorage.setItem(DEVICE_ID_KEY, devId);
            }
            return devId;
        }

        // --------------------------------------------------------------------
        // 초기화 루틴
        // --------------------------------------------------------------------
        init() {
            // 1. 모바일 원클릭 URL 해시 파싱 확인 (#cloud_sync_setup=...)
            this.checkUrlHashSetup();

            // 2. 모달 및 헤더 이벤트 바인딩
            this.bindUIEvents();

            // 3. Firebase SDK 가용성 확인 후 연결
            if (this.config.enabled && this.config.firebaseConfig) {
                this.startFirebaseConnection();
            } else {
                this.updateUIStatus('idle', '클라우드 미연동 (로컬 전용)');
            }

            // 4. 페이지 종료 직전 미완료 동기화 즉시 플러시
            window.addEventListener('beforeunload', () => {
                if (this.debounceTimer && this.isConnected) {
                    this.pushDataToCloud(true);
                }
            });

            // 5. 탭 복귀 시 자동 최신 상태 체크
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'visible' && this.isConnected && this.syncRef) {
                    this.checkAndPullLatest();
                }
            });
        }

        // --------------------------------------------------------------------
        // 모바일 원클릭 연동 해시 파싱 (#cloud_sync_setup=...)
        // --------------------------------------------------------------------
        checkUrlHashSetup() {
            try {
                const hash = window.location.hash || '';
                const match = hash.match(/#cloud_sync_setup=([A-Za-z0-9+/=]+)/);
                if (match && match[1]) {
                    const decoded = decodeURIComponent(escape(atob(match[1])));
                    const setupData = JSON.parse(decoded);
                    if (setupData && setupData.firebaseConfig) {
                        this.config.enabled = true;
                        this.config.autoSync = setupData.autoSync !== false;
                        this.config.syncKey = setupData.syncKey || 'veritas-default-room';
                        this.config.firebaseConfig = setupData.firebaseConfig;
                        this.saveConfig();

                        // URL 해시 정리 (주소창 깔끔하게 유지)
                        try {
                            history.replaceState(null, '', window.location.pathname + window.location.search);
                        } catch (e) {}

                        setTimeout(() => {
                            this.showToast('🎉 PC와 실시간 연동이 완료되었습니다! 클라우드 데이터를 동기화합니다.');
                        }, 800);
                    }
                }
            } catch (e) {
                console.error('[CloudSync] Failed to parse URL hash setup:', e);
            }
        }

        // --------------------------------------------------------------------
        // Firebase 연결 시작
        // --------------------------------------------------------------------
        startFirebaseConnection() {
            if (typeof firebase === 'undefined') {
                console.warn('[CloudSync] Firebase SDK not loaded.');
                this.updateUIStatus('error', 'Firebase SDK 로드 실패');
                return;
            }

            try {
                const fbConfig = this.config.firebaseConfig;
                if (!fbConfig || !fbConfig.apiKey) {
                    this.updateUIStatus('idle', '연동 설정 필요');
                    return;
                }

                // databaseURL 자동 보정 (사용자가 누락한 경우)
                if (!fbConfig.databaseURL && fbConfig.projectId) {
                    fbConfig.databaseURL = `https://${fbConfig.projectId}-default-rtdb.firebaseio.com`;
                }

                // 앱 초기화 (이름 명시로 중복 방지)
                const appName = 'VeritasEnglishSync';
                const existingApp = firebase.apps.find(a => a.name === appName);
                if (existingApp) {
                    this.firebaseApp = existingApp;
                } else {
                    this.firebaseApp = firebase.initializeApp(fbConfig, appName);
                }

                this.database = this.firebaseApp.database();
                const safeKey = this.sanitizeSyncKey(this.config.syncKey || 'veritas-default-room');
                this.syncRef = this.database.ref(`veritas_sync/${safeKey}`);

                this.isConnected = true;
                this.isInitialized = true;
                this.updateUIStatus('syncing', '클라우드 데이터 확인 중...');

                // 1. 초기 1회 클라우드 데이터 가져오기 & 병합
                this.checkAndPullLatest(() => {
                    this.updateUIStatus('connected', '실시간 동기화 준비 완료');
                    // 2. 실시간 원격 변경 리스너 등록
                    this.attachLiveListener();
                });

            } catch (e) {
                console.error('[CloudSync] Firebase init failed:', e);
                this.updateUIStatus('error', '클라우드 연결 실패 (' + (e.message || '오류') + ')');
                this.isConnected = false;
            }
        }

        sanitizeSyncKey(key) {
            return String(key || 'default')
                .trim()
                .replace(/[.#$[\]/]/g, '_');
        }

        // --------------------------------------------------------------------
        // 실시간 원격 변경 리스너 (다른 기기에서 수정 시 즉각 감지)
        // --------------------------------------------------------------------
        attachLiveListener() {
            if (!this.syncRef) return;

            this.syncRef.on('value', (snapshot) => {
                const val = snapshot.val();
                if (!val || !val.data) return;

                // 내 자신이 업로드한 데이터면 무시
                if (val.updatedByDevice === this.deviceId) {
                    return;
                }

                // 원격 데이터가 더 최신인 경우 자동 반영
                const remoteTime = Number(val.lastUpdated) || 0;
                if (remoteTime > this.lastLocalModifiedTime) {
                    console.log('[CloudSync] Inbound remote update detected from', val.updatedByPlatform, remoteTime);
                    this.applyRemoteData(val);
                }
            }, (err) => {
                console.error('[CloudSync] Realtime listener error:', err);
                this.updateUIStatus('error', '실시간 연결 오류');
            });
        }

        // --------------------------------------------------------------------
        // 원격 데이터 로컬 스토리지에 적용 & UI 갱신
        // --------------------------------------------------------------------
        applyRemoteData(remotePayload) {
            if (!remotePayload || !remotePayload.data || typeof remotePayload.data !== 'object') return;

            this.isApplyingRemote = true;
            this.updateUIStatus('syncing', '새로운 학습 이력 동기화 중...');

            try {
                let changeCount = 0;
                Object.keys(remotePayload.data).forEach(key => {
                    if (!key.startsWith('veritas_')) return;
                    if (key === CONFIG_STORAGE_KEY || key === DEVICE_ID_KEY) return;

                    const rawRemoteVal = remotePayload.data[key];
                    const serialized = typeof rawRemoteVal === 'string' ? rawRemoteVal : JSON.stringify(rawRemoteVal);
                    const currentVal = localStorage.getItem(key);

                    if (currentVal !== serialized) {
                        localStorage.setItem(key, serialized);
                        changeCount++;
                    }
                });

                this.lastLocalModifiedTime = Number(remotePayload.lastUpdated) || Date.now();
                this.config.lastSyncedAt = new Date().toISOString();
                this.saveConfig();

                if (changeCount > 0) {
                    // 스토리지 메모리 데이터 재로드
                    if (window.storage) {
                        if (typeof window.storage.initUserRegistry === 'function') {
                            window.storage.initUserRegistry();
                        }
                        if (typeof window.storage.loadAll === 'function') {
                            window.storage.loadAll();
                        }
                    }

                    // 전체 화면 뷰 및 헤더 배지 자동 새로고침
                    if (window.app) {
                        if (typeof window.app.refreshAllViews === 'function') {
                            window.app.refreshAllViews();
                        } else {
                            if (typeof window.app.updateHeaderUserBadge === 'function') window.app.updateHeaderUserBadge();
                            if (typeof window.app.updateHeaderAcademicLevelBadge === 'function') window.app.updateHeaderAcademicLevelBadge();
                        }
                    }

                    // 전역 커스텀 이벤트 발행 (각 탭/모듈이 스스로 다시 렌더링하도록 유도)
                    window.dispatchEvent(new CustomEvent('veritas:cloud-synced', {
                        detail: {
                            updatedBy: remotePayload.updatedByPlatform || '다른 기기',
                            timestamp: this.lastLocalModifiedTime
                        }
                    }));

                    const sourceName = remotePayload.updatedByPlatform ? `[${remotePayload.updatedByPlatform}]` : '다른 기기';
                    this.showToast(`🔄 ${sourceName}의 최신 학습 이력이 실시간 반영되었습니다!`);
                }

                this.updateUIStatus('connected', '실시간 동기화 완료');
            } catch (e) {
                console.error('[CloudSync] Error applying remote data:', e);
                this.updateUIStatus('error', '동기화 데이터 반영 실패');
            } finally {
                setTimeout(() => {
                    this.isApplyingRemote = false;
                }, 500);
            }
        }

        // --------------------------------------------------------------------
        // 로컬 데이터 수집
        // --------------------------------------------------------------------
        collectLocalPayload() {
            const data = {};
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (k && k.startsWith('veritas_')) {
                    if (k === CONFIG_STORAGE_KEY || k === DEVICE_ID_KEY) continue;
                    try {
                        data[k] = JSON.parse(localStorage.getItem(k));
                    } catch (e) {
                        data[k] = localStorage.getItem(k);
                    }
                }
            }

            const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
            const now = Date.now();
            this.lastLocalModifiedTime = now;

            return {
                version: 1,
                lastUpdated: now,
                lastUpdatedIso: new Date(now).toISOString(),
                updatedByDevice: this.deviceId,
                updatedByPlatform: isMobile ? '스마트폰' : 'PC 브라우저',
                data: data
            };
        }

        // --------------------------------------------------------------------
        // 클라우드로 데이터 전송 (Auto-Sync 또는 수동 업로드)
        // --------------------------------------------------------------------
        pushDataToCloud(isImmediate = false) {
            if (!this.isConnected || !this.syncRef) {
                if (isImmediate) this.showToast('⚠️ 클라우드에 연결되어 있지 않습니다. 설정을 먼저 확인해 주세요.');
                return;
            }

            if (this.isApplyingRemote) {
                // 원격 데이터 적용 중 발생하는 내부 저장은 클라우드로 다시 되돌려 보내지 않음 (루프 방지)
                return;
            }

            if (this.debounceTimer) {
                clearTimeout(this.debounceTimer);
                this.debounceTimer = null;
            }

            this.updateUIStatus('syncing', '클라우드에 안전하게 저장 중...');
            const payload = this.collectLocalPayload();

            this.syncRef.set(payload)
                .then(() => {
                    this.config.lastSyncedAt = new Date().toISOString();
                    this.saveConfig();
                    this.updateUIStatus('connected', '실시간 동기화 완료');
                    if (isImmediate) {
                        this.showToast('☁️ 모든 학습 데이터가 클라우드에 성공적으로 백업되었습니다!');
                    }
                })
                .catch((err) => {
                    console.error('[CloudSync] Push error:', err);
                    this.updateUIStatus('error', '클라우드 저장 실패 (' + (err.message || '오류') + ')');
                });
        }

        // --------------------------------------------------------------------
        // 데이터 업데이트 감지 훅 (storage.save* 호출 시 트리거)
        // --------------------------------------------------------------------
        onDataChanged(source = 'generic') {
            if (!this.config.enabled || !this.config.autoSync || !this.isConnected) return;
            if (this.isApplyingRemote) return;

            this.updateUIStatus('syncing', '학습 내용 변경 감지, 자동 저장 대기...');

            // 디바운스 (1.5초 안정화 후 자동 업로드)
            if (this.debounceTimer) clearTimeout(this.debounceTimer);
            this.debounceTimer = setTimeout(() => {
                this.pushDataToCloud(false);
            }, 1500);
        }

        // --------------------------------------------------------------------
        // 원격 최신 데이터 1회 확인 및 풀(Pull)
        // --------------------------------------------------------------------
        checkAndPullLatest(callback) {
            if (!this.syncRef) {
                if (callback) callback();
                return;
            }

            this.syncRef.once('value')
                .then((snapshot) => {
                    const val = snapshot.val();
                    if (val && val.data) {
                        const remoteTime = Number(val.lastUpdated) || 0;
                        // 로컬보다 원격이 더 새롭거나, 로컬이 거의 빈 상태일 때 적용
                        const localHasData = localStorage.getItem('veritas_users_registry_v1') !== null;
                        if (!localHasData || remoteTime >= this.lastLocalModifiedTime) {
                            this.applyRemoteData(val);
                        }
                    } else {
                        // 클라우드에 아무 데이터도 없다면 현재 로컬 데이터를 최초 1회 자동 업로드
                        console.log('[CloudSync] Cloud is empty. Initializing with local data.');
                        this.pushDataToCloud(false);
                    }
                    if (callback) callback();
                })
                .catch((err) => {
                    console.error('[CloudSync] Pull error:', err);
                    this.updateUIStatus('error', '클라우드 데이터 조회 실패');
                    if (callback) callback();
                });
        }

        // --------------------------------------------------------------------
        // 초보자 친화적 Firebase Config 파서
        // --------------------------------------------------------------------
        parseFirebaseInput(inputStr) {
            if (!inputStr || typeof inputStr !== 'string') return null;
            const str = inputStr.trim();

            // 1. 순수 JSON 파싱 시도
            try {
                const parsed = JSON.parse(str);
                if (parsed && (parsed.apiKey || parsed.projectId)) {
                    return parsed;
                }
            } catch (e) {}

            // 2. JS 객체/정규식 파싱 시도 (const firebaseConfig = { ... })
            const config = {};
            const keys = ['apiKey', 'authDomain', 'databaseURL', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
            
            keys.forEach(k => {
                const regex = new RegExp(`${k}\\s*:\\s*["']([^"']+)["']`, 'i');
                const match = str.match(regex);
                if (match && match[1]) {
                    config[k] = match[1].trim();
                }
            });

            if (config.apiKey && config.projectId) {
                if (!config.databaseURL) {
                    config.databaseURL = `https://${config.projectId}-default-rtdb.firebaseio.com`;
                }
                return config;
            }

            return null;
        }

        // --------------------------------------------------------------------
        // 모바일 원클릭 공유 링크 생성
        // --------------------------------------------------------------------
        generateMobileShareLink() {
            if (!this.config.firebaseConfig) return null;

            const payload = {
                syncKey: this.config.syncKey,
                autoSync: this.config.autoSync,
                firebaseConfig: this.config.firebaseConfig
            };

            const jsonStr = JSON.stringify(payload);
            const base64 = btoa(unescape(encodeURIComponent(jsonStr)));
            const currentUrl = window.location.origin + window.location.pathname;
            return `${currentUrl}#cloud_sync_setup=${base64}`;
        }

        // --------------------------------------------------------------------
        // UI 상태 표시 및 이벤트 바인딩
        // --------------------------------------------------------------------
        updateUIStatus(state, descText) {
            const dot = document.getElementById('cloud-sync-status-dot');
            const text = document.getElementById('cloud-sync-status-text');
            const modalDot = document.getElementById('cloud-sync-dot');
            const modalDesc = document.getElementById('cloud-sync-status-desc');
            const modalBadge = document.getElementById('modal-sync-status-badge');
            const lastTimeEl = document.getElementById('cloud-sync-last-time');
            const connectedActions = document.getElementById('cloud-sync-connected-actions');
            const disconnectBtn = document.getElementById('btn-cloud-sync-disconnect');

            let dotClass = 'bg-slate-400';
            let badgeClass = 'bg-slate-100 text-slate-600 border-slate-200';
            let badgeText = '미연동';

            if (state === 'connected') {
                dotClass = 'bg-emerald-500';
                badgeClass = 'bg-emerald-50 text-emerald-800 border-emerald-300';
                badgeText = '실시간 연동 중';
                if (connectedActions) connectedActions.classList.remove('hidden');
                if (disconnectBtn) disconnectBtn.classList.remove('hidden');
            } else if (state === 'syncing') {
                dotClass = 'bg-amber-400 animate-pulse';
                badgeClass = 'bg-amber-50 text-amber-800 border-amber-300';
                badgeText = '동기화 중...';
            } else if (state === 'error') {
                dotClass = 'bg-rose-500';
                badgeClass = 'bg-rose-50 text-rose-800 border-rose-300';
                badgeText = '연결 오류';
                if (disconnectBtn) disconnectBtn.classList.remove('hidden');
            } else {
                if (connectedActions) connectedActions.classList.add('hidden');
                if (disconnectBtn) disconnectBtn.classList.add('hidden');
            }

            if (dot) dot.className = `w-2 h-2 rounded-full ${dotClass}`;
            if (modalDot) modalDot.className = `w-2.5 h-2.5 rounded-full ${dotClass}`;
            if (text) text.innerText = state === 'connected' ? '실시간 연동' : '동기화';
            if (modalDesc) modalDesc.innerText = descText || '';
            if (modalBadge) {
                modalBadge.className = `px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${badgeClass}`;
                modalBadge.innerText = badgeText;
            }

            if (lastTimeEl) {
                if (this.config.lastSyncedAt) {
                    const d = new Date(this.config.lastSyncedAt);
                    lastTimeEl.innerText = `최근 동기화: ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
                } else {
                    lastTimeEl.innerText = '-';
                }
            }
        }

        bindUIEvents() {
            // 1. 모달 열기/닫기
            const openBtns = [
                document.getElementById('header-cloud-sync-btn'),
                document.getElementById('btn-open-cloud-sync')
            ];
            openBtns.forEach(btn => {
                if (btn) btn.addEventListener('click', () => this.openModal());
            });

            // 2. 가이드 토글
            const guideBtn = document.getElementById('btn-toggle-sync-guide');
            const guideBox = document.getElementById('cloud-sync-guide-box');
            if (guideBtn && guideBox) {
                guideBtn.addEventListener('click', () => {
                    guideBox.classList.toggle('hidden');
                });
            }

            // 3. 설정 저장 버튼
            const saveBtn = document.getElementById('btn-cloud-sync-save');
            if (saveBtn) {
                saveBtn.addEventListener('click', () => this.handleSaveModalSettings());
            }

            // 4. 모바일 링크 복사 버튼
            const copyMobileBtn = document.getElementById('btn-copy-mobile-sync-link');
            if (copyMobileBtn) {
                copyMobileBtn.addEventListener('click', () => {
                    const link = this.generateMobileShareLink();
                    if (link) {
                        navigator.clipboard.writeText(link).then(() => {
                            this.showToast('📋 모바일 원클릭 연동 링크가 복사되었습니다! 카카오톡에 붙여넣어 보세요.');
                        }).catch(() => {
                            prompt('아래 링크를 복사하여 모바일에서 열어주세요:', link);
                        });
                    }
                });
            }

            // 5. 수동 업로드 / 다운로드
            const pushBtn = document.getElementById('btn-manual-cloud-push');
            if (pushBtn) {
                pushBtn.addEventListener('click', () => this.pushDataToCloud(true));
            }

            const pullBtn = document.getElementById('btn-manual-cloud-pull');
            if (pullBtn) {
                pullBtn.addEventListener('click', () => {
                    this.updateUIStatus('syncing', '최신 데이터 불러오는 중...');
                    this.checkAndPullLatest(() => {
                        this.showToast('📥 클라우드 최신 데이터를 로컬로 성공적으로 가져왔습니다!');
                    });
                });
            }

            // 6. 연동 해제
            const disconnectBtn = document.getElementById('btn-cloud-sync-disconnect');
            if (disconnectBtn) {
                disconnectBtn.addEventListener('click', () => {
                    if (confirm('클라우드 연동을 해제하시겠습니까? (로컬의 학습 데이터는 삭제되지 않습니다.)')) {
                        this.config.enabled = false;
                        this.config.firebaseConfig = null;
                        this.saveConfig();
                        if (this.syncRef) this.syncRef.off();
                        this.isConnected = false;
                        this.updateUIStatus('idle', '클라우드 미연동 (로컬 전용)');
                        this.showToast('클라우드 연동이 해제되었습니다.');
                        this.closeModal();
                    }
                });
            }

            // 7. 자동 동기화 토글
            const autoToggle = document.getElementById('cloud-sync-auto-toggle');
            if (autoToggle) {
                autoToggle.checked = this.config.autoSync !== false;
                autoToggle.addEventListener('change', (e) => {
                    this.config.autoSync = e.target.checked;
                    this.saveConfig();
                    this.showToast(`학습 시 자동 동기화가 ${this.config.autoSync ? '활성화' : '일시정지'}되었습니다.`);
                });
            }
        }

        openModal() {
            const modal = document.getElementById('modal-cloud-sync');
            if (!modal) return;

            const roomInput = document.getElementById('cloud-sync-room-input');
            const textarea = document.getElementById('cloud-sync-config-textarea');
            const autoToggle = document.getElementById('cloud-sync-auto-toggle');

            if (roomInput) {
                roomInput.value = this.config.syncKey || `veritas-${Math.floor(1000 + Math.random() * 9000)}`;
            }
            if (autoToggle) autoToggle.checked = this.config.autoSync !== false;
            if (textarea && this.config.firebaseConfig) {
                textarea.value = JSON.stringify(this.config.firebaseConfig, null, 2);
            }

            modal.classList.remove('hidden');
            if (window.lucide) window.lucide.createIcons();
        }

        closeModal() {
            const modal = document.getElementById('modal-cloud-sync');
            if (modal) modal.classList.add('hidden');
        }

        handleSaveModalSettings() {
            const roomInput = document.getElementById('cloud-sync-room-input');
            const textarea = document.getElementById('cloud-sync-config-textarea');

            const syncKey = (roomInput && roomInput.value.trim()) || 'veritas-default-room';
            const rawConfig = (textarea && textarea.value.trim()) || '';

            if (!rawConfig) {
                alert('Firebase Config 코드를 붙여넣어 주세요.');
                return;
            }

            const parsedConfig = this.parseFirebaseInput(rawConfig);
            if (!parsedConfig || !parsedConfig.apiKey) {
                alert('Firebase Config 형식을 올바르게 인식하지 못했습니다.\n구글 콘솔에서 복사한 코드 전체를 그대로 붙여넣어 주세요.');
                return;
            }

            this.config.enabled = true;
            this.config.syncKey = syncKey;
            this.config.firebaseConfig = parsedConfig;
            this.saveConfig();

            this.closeModal();
            this.showToast('⚙️ 클라우드 설정을 저장했습니다. 연결을 시작합니다...');

            // 기존 리스너 해제 후 재연결
            if (this.syncRef) this.syncRef.off();
            this.startFirebaseConnection();
        }

        showToast(message) {
            const container = document.getElementById('global-toast-container') || document.body;
            const toast = document.createElement('div');
            toast.className = 'px-4 py-3 rounded-2xl bg-slate-900/95 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 border border-slate-700 pointer-events-auto animate-in slide-in-from-bottom-5 duration-200 z-[9999]';
            toast.innerHTML = `
                <i data-lucide="cloud-lightning" class="w-4 h-4 text-sky-400 shrink-0"></i>
                <span>${message}</span>
            `;
            container.appendChild(toast);
            if (window.lucide) window.lucide.createIcons();

            setTimeout(() => {
                toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
                setTimeout(() => toast.remove(), 350);
            }, 3000);
        }
    }

    // 전역 싱글톤 인스턴스 노출
    window.cloudSync = new CloudSyncManager();

    // --------------------------------------------------------------------
    // 전역 로컬스토리지 쓰기 자동 감지 인터셉터 (Event-driven On-Update Auto Sync)
    // --------------------------------------------------------------------
    try {
        const rawSetItem = localStorage.setItem;
        localStorage.setItem = function (key, value) {
            rawSetItem.apply(this, arguments);
            if (
                typeof key === 'string' &&
                key.startsWith('veritas_') &&
                key !== CONFIG_STORAGE_KEY &&
                key !== DEVICE_ID_KEY
            ) {
                if (window.cloudSync && typeof window.cloudSync.onDataChanged === 'function') {
                    window.cloudSync.onDataChanged(key);
                }
            }
        };

        const rawRemoveItem = localStorage.removeItem;
        localStorage.removeItem = function (key) {
            rawRemoveItem.apply(this, arguments);
            if (
                typeof key === 'string' &&
                key.startsWith('veritas_') &&
                key !== CONFIG_STORAGE_KEY &&
                key !== DEVICE_ID_KEY
            ) {
                if (window.cloudSync && typeof window.cloudSync.onDataChanged === 'function') {
                    window.cloudSync.onDataChanged(key);
                }
            }
        };
    } catch (e) {
        console.warn('[CloudSync] Storage interceptor attach failed:', e);
    }

})();
