/**
 * Veritas English - 메인 애플리케이션 제어 (Main App Controller)
 * 8대 모듈 탭 라우팅, 대시보드 위젯 동기화, 맞춤 바로가기 2개 및 단기/장기 목표 트래커 관리
 */

const SHORTCUT_TARGETS = {
    reading: {
        id: 'reading',
        name: '중등 내신 독해 & 비문학',
        defaultLabel: '중·고등 내신 독해 & 비문학 풀기 →',
        icon: 'graduation-cap',
        btnClass: 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-serif font-bold text-xs shadow-sm',
        iconColor: 'text-slate-900',
        tab: 'reading'
    },
    dictionary: {
        id: 'dictionary',
        name: '영단어 사전',
        defaultLabel: '영단어 사전 열기',
        icon: 'book-open-check',
        btnClass: 'bg-white/15 hover:bg-white/25 text-white border border-white/20 font-serif font-bold text-xs',
        iconColor: 'text-amber-300',
        tab: 'dictionary'
    },
    ocr: {
        id: 'ocr',
        name: '교재 OCR & 테마 단어장',
        defaultLabel: '교재 단어 등록 & 테마 단어장',
        icon: 'camera',
        btnClass: 'bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-bold text-xs shadow-sm',
        iconColor: 'text-white',
        tab: 'ocr'
    },
    flashcards: {
        id: 'flashcards',
        name: '3D 플립 플래시카드',
        defaultLabel: '3D 플래시카드 암기 학습',
        icon: 'layers',
        btnClass: 'bg-indigo-600 hover:bg-indigo-500 text-white font-serif font-bold text-xs shadow-sm',
        iconColor: 'text-indigo-200',
        tab: 'flashcards'
    },
    quiz: {
        id: 'quiz',
        name: '스마트 퀴즈',
        defaultLabel: '실전 내신·수능 스마트 퀴즈',
        icon: 'award',
        btnClass: 'bg-blue-600 hover:bg-blue-500 text-white font-serif font-bold text-xs shadow-sm',
        iconColor: 'text-white',
        tab: 'quiz'
    },
    review: {
        id: 'review',
        name: '에빙하우스 망각곡선 복습',
        defaultLabel: '에빙하우스 5단계 복습 시작',
        icon: 'repeat',
        btnClass: 'bg-teal-600 hover:bg-teal-500 text-white font-serif font-bold text-xs shadow-sm',
        iconColor: 'text-teal-200',
        tab: 'review'
    },
    expressions: {
        id: 'expressions',
        name: '원어민 실전 표현 LAB',
        defaultLabel: '원어민 실전 표현 LAB',
        icon: 'sparkles',
        btnClass: 'bg-purple-600 hover:bg-purple-500 text-white font-serif font-bold text-xs shadow-sm',
        iconColor: 'text-purple-200',
        tab: 'expressions'
    },
    planner: {
        id: 'planner',
        name: '학습 플래너 & 캘린더',
        defaultLabel: '학습 플래너 & 캘린더 확인',
        icon: 'calendar',
        btnClass: 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 font-serif font-bold text-xs',
        iconColor: 'text-amber-300',
        tab: 'planner'
    }
};

const GOAL_PRESETS = {
    short: [
        {
            id: 'st_week_100',
            title: '이번 주 테마 어휘 100단어 완독',
            targetDays: 7,
            targetCount: 100,
            targetType: 'words',
            desc: '7일 동안 매일 14~15개 어휘를 꾸준히 학습하여 100단어 완독 (단기 스프린트)'
        },
        {
            id: 'st_reading_10',
            title: '3일 집중 중등 내신 독해 10지문 정복',
            targetDays: 3,
            targetCount: 10,
            targetType: 'passages',
            desc: '3일간 1개 학기 내신 지문 10편을 풀고 서술형까지 마스터'
        },
        {
            id: 'st_streak_7',
            title: '7일 연속 출석 및 일일 목표 달성',
            targetDays: 7,
            targetCount: 70,
            targetType: 'words',
            desc: '일주일 동안 하루도 빠짐없이 10단어 이상 복습하고 학습 스트릭 달성'
        },
        {
            id: 'st_custom',
            title: '사용자 지정 단기 스프린트',
            targetDays: 7,
            targetCount: 50,
            targetType: 'words',
            desc: '스스로 목표 일수와 학습량을 지정하는 맞춤형 집중 목표'
        }
    ],
    long: [
        {
            id: 'lt_neungryul_etym_30',
            title: '능률 VOCA 어원편 중등 30일 완강',
            targetDays: 30,
            targetCount: 765,
            targetType: 'words',
            desc: '어원(접두사·어근·접미사) 원리 중등 필수 765단어를 30일 만에 마스터'
        },
        {
            id: 'lt_neungryul_40',
            title: '능률 VOCA 중등 고난도 40일 완강',
            targetDays: 40,
            targetCount: 1200,
            targetType: 'words',
            desc: '중등 최고난도 1,200단어를 40일 만에 마스터하는 정통 코스'
        },
        {
            id: 'lt_reading_60',
            title: '중등 6개 학기 내신 독해 60선 완전 정복',
            targetDays: 60,
            targetCount: 60,
            targetType: 'passages',
            desc: '중1-1부터 중3-2까지 전 학년 내신 기출 60편 및 240문항 완강'
        },
        {
            id: 'lt_curated_1000',
            title: '10대 테마 단어장 1,000단어 마스터',
            targetDays: 50,
            targetCount: 1000,
            targetType: 'words',
            desc: '수능 킬러 다의어 + 중등 내신 6개 학기 + 실전 테마 1,000단어'
        },
        {
            id: 'lt_srs_master_500',
            title: '에빙하우스 5단계 장기기억 500단어 졸업',
            targetDays: 60,
            targetCount: 500,
            targetType: 'mastered',
            desc: '망각곡선 30일 주기까지 통과한 완전 영구 기억 500단어 달성'
        },
        {
            id: 'lt_custom',
            title: '사용자 지정 장기 로드맵 & D-Day',
            targetDays: 60,
            targetCount: 500,
            targetType: 'words',
            desc: '시험 D-Day 및 장기 목표량을 직접 설정하는 로드맵'
        }
    ]
};


class AppController {
    constructor() {
        this.currentTab = 'dashboard';
        this.init();
    }

    init() {
        try { this.handleIncomingIntroUser(); } catch (e) { console.error('Error in handleIncomingIntroUser:', e); }
        try { this.initNavigation(); } catch (e) { console.error('Error in initNavigation:', e); }
        try { this.initDashboardWidgets(); } catch (e) { console.error('Error in initDashboardWidgets:', e); }
        try { this.initModals(); } catch (e) { console.error('Error in initModals:', e); }
        try { this.switchTab('dashboard'); } catch (e) { console.error('Error in switchTab:', e); }

        // 첫 진입 시 Lucide 아이콘 활성화
                if (window.achievements) {
            window.achievements.renderHeaderCapsule();
        }
        try { this.updateHeaderUserInfo(); } catch (e) { console.error('Error in updateHeaderUserInfo:', e); }
        try { this.updateHeaderAcademicLevelBadge(); } catch (e) { console.error('Error in updateHeaderAcademicLevelBadge:', e); }
        if (window.wrongNote) {
            window.wrongNote.renderStats();
        }
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    /**
     * intro.html 소개 페이지에서 넘어온 신규 사용자 쿼리 파라미터 처리
     */
    handleIncomingIntroUser() {
        try {
            const params = new URLSearchParams(window.location.search);
            const userParam = params.get('user');
            const fromParam = params.get('from');

            if (userParam && window.storage) {
                const targetName = decodeURIComponent(userParam).trim();
                const existingUser = window.storage.userRegistry && 
                                     Array.isArray(window.storage.userRegistry.users) && 
                                     window.storage.userRegistry.users.find(u => u.username === targetName);
                if (existingUser) {
                    window.storage.switchUser(existingUser.id);
                } else if (typeof window.storage.createUser === 'function') {
                    window.storage.createUser({ username: targetName, avatar: '🎓', grade: '중등' });
                }

                // 환영 축하 confetti 실행
                if (typeof confetti === 'function') {
                    setTimeout(() => {
                        try {
                            confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
                        } catch(e) {}
                    }, 400);
                }
            }

            // URL 파라미터 정리
            if (userParam || fromParam) {
                const cleanUrl = window.location.pathname + window.location.hash;
                window.history.replaceState({}, document.title, cleanUrl);
            }
        } catch (e) {
            console.warn('handleIncomingIntroUser error:', e);
        }
    }

    
    /**
     * 상단 헤더 및 대시보드의 실력 진단 학술 레벨 배지 갱신
     */
    updateHeaderAcademicLevelBadge() {
        if (!window.storage || typeof window.storage.getAcademicLevel !== 'function') return;
        const lvl = window.storage.getAcademicLevel();
        const info = window.storage.getLevelInfo(lvl);
        if (!info) return;

        const headerBadgeEl = document.getElementById('header-academic-level-badge');
        if (headerBadgeEl) {
            headerBadgeEl.textContent = info.badge;
        }

        const pillEl = document.getElementById('dash-academic-level-badge-pill');
        if (pillEl) {
            pillEl.textContent = `현재: ${info.badge} (${info.nameKo})`;
        }

        // 대시보드 데일리 위젯 재렌더링
        if (typeof this.initDashboardDailyWidget === 'function') {
            this.initDashboardDailyWidget();
        }
    }

    /**
     * 상단 헤더 사용자 정보 갱신
     */
    updateHeaderUserInfo() {
        if (!window.storage || typeof window.storage.getActiveUser !== 'function') return;
        const user = window.storage.getActiveUser();
        if (!user) return;

        const avatarEl = document.getElementById('header-user-avatar');
        if (avatarEl) {
            avatarEl.textContent = user.avatar || '🎓';
        }

        const nameEl = document.getElementById('header-user-name');
        if (nameEl) {
            nameEl.textContent = user.username || '기본 사용자';
        }

        const dashNameEl = document.getElementById('dash-student-name');
        if (dashNameEl) {
            dashNameEl.textContent = user.username || '영재 학도';
        }
    }

    /**
     * 사용자 전환 시 앱 전체 뷰 즉시 새로고침
     */
    refreshAllViews() {
        this.updateHeaderUserInfo();
        this.updateHeaderAcademicLevelBadge();
        if (window.achievements && typeof window.achievements.renderHeaderCapsule === 'function') {
            window.achievements.renderHeaderCapsule();
        }
        if (window.wrongNote && typeof window.wrongNote.renderStats === 'function') {
            window.wrongNote.renderStats();
        }
        if (this.currentTab === 'dashboard') {
            this.renderDashboard();
        } else {
            this.switchTab(this.currentTab);
        }
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    // ------------------------------------------------------------------------
    // 다중 사용자(아이디) 모달 제어 로직
    // ------------------------------------------------------------------------
    openUserModal() {
        const modal = document.getElementById('modal-user-switcher');
        if (!modal) return;
        this.renderUserModal();
        modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    closeUserModal() {
        const modal = document.getElementById('modal-user-switcher');
        if (modal) modal.classList.add('hidden');
    }

    renderUserModal() {
        const container = document.getElementById('user-switcher-modal-body');
        if (!container || !window.storage) return;

        const activeUser = window.storage.getActiveUser();
        const allUsers = window.storage.getAllUsers();
        const activeLevel = window.storage.getAcademicLevel ? window.storage.getAcademicLevel() : 3;
        const levelInfo = window.storage.getLevelInfo ? window.storage.getLevelInfo(activeLevel) : null;
        const wordCount = window.storage.words ? window.storage.words.length : 0;

        let html = '';

        // 1. 현재 활성 학습자 카드
        if (activeUser) {
            html += `
            <div class="rounded-2xl p-5 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white border-2 border-blue-400/40 shadow-md">
                <div class="flex items-center justify-between mb-3">
                    <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-bold border border-emerald-400/30 flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> 현재 사용 중인 아이디
                    </span>
                    <button type="button" onclick="window.app.openUserEditModal('${activeUser.id}')" class="text-xs text-blue-200 hover:text-white underline font-medium cursor-pointer">
                        ✏️ 정보 수정
                    </button>
                </div>
                <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-3xl flex items-center justify-center shrink-0 shadow-inner">
                        ${activeUser.avatar || '🎓'}
                    </div>
                    <div class="min-w-0 flex-1">
                        <div class="flex items-center gap-2">
                            <h4 class="font-serif font-black text-xl text-white truncate">${activeUser.username}</h4>
                            <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-white/15 text-white/90 border border-white/20">
                                ${activeUser.grade || '중등'}
                            </span>
                        </div>
                        <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 mt-1.5 font-sans">
                            <span>🎯 레벨: <strong class="text-amber-300">${levelInfo ? levelInfo.badge : 'Lv.' + activeLevel}</strong></span>
                            <span>📚 등록 단어: <strong class="text-white">${wordCount}개</strong></span>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }

        // 2. 다른 학습자 목록
        html += `
        <div>
            <div class="flex items-center justify-between mb-3">
                <h4 class="font-serif font-bold text-sm text-slate-800">
                    전체 등록된 학습자 목록 <span class="text-blue-900 font-mono">(${allUsers.length}명)</span>
                </h4>
                <span class="text-xs text-slate-400">원클릭으로 즉시 전환됩니다</span>
            </div>
            <div class="space-y-2.5">
        `;

        allUsers.forEach(u => {
            const isActive = (activeUser && u.id === activeUser.id);
            let uWordCount = 0;
            if (isActive) {
                uWordCount = wordCount;
            } else {
                try {
                    const rawW = localStorage.getItem(`veritas_${u.id}_words_v1`);
                    if (rawW) uWordCount = JSON.parse(rawW).length;
                } catch(e) {}
            }

            html += `
            <div class="p-4 rounded-xl border ${isActive ? 'border-blue-500/50 bg-blue-50/50' : 'border-slate-200 bg-white hover:border-slate-300'} transition-all flex items-center justify-between gap-3 shadow-2xs">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-xl ${isActive ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-800'} text-xl flex items-center justify-center shrink-0">
                        ${u.avatar || '🎓'}
                    </div>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2">
                            <span class="font-serif font-bold text-sm text-slate-900 truncate">${u.username}</span>
                            <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                                ${u.grade || '중등'}
                            </span>
                            ${isActive ? '<span class="text-[10px] font-bold text-blue-900 bg-blue-100 px-1.5 py-0.5 rounded">현재</span>' : ''}
                        </div>
                        <div class="text-xs text-slate-500 mt-0.5 flex items-center gap-3">
                            <span>단어: <strong>${uWordCount}개</strong></span>
                            <span>가입: ${u.createdAt ? u.createdAt.slice(0, 10) : '-'}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2 shrink-0">
                    ${isActive ? `
                        <button type="button" onclick="window.app.openUserEditModal('${u.id}')" class="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-medium cursor-pointer">
                            수정
                        </button>
                    ` : `
                        <button type="button" onclick="window.app.switchUser('${u.id}')" class="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs shadow-xs transition-colors cursor-pointer">
                            전환하기
                        </button>
                        <button type="button" onclick="window.app.openUserEditModal('${u.id}')" class="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer" title="수정">
                            <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
                        </button>
                        ${allUsers.length > 1 ? `
                            <button type="button" onclick="window.app.deleteUser('${u.id}', '${u.username}')" class="p-1.5 rounded-lg border border-red-200 hover:bg-red-50 text-red-500 hover:text-red-700 cursor-pointer" title="삭제">
                                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                            </button>
                        ` : ''}
                    `}
                </div>
            </div>
            `;
        });

        html += `
            </div>
        </div>
        `;

        container.innerHTML = html;
        if (window.lucide) window.lucide.createIcons();
    }

    openUserCreateModal() {
        const modal = document.getElementById('modal-user-create');
        if (!modal) return;
        this.initAvatarPicker('create-user-avatar-picker', 'create-user-avatar-value', '🎓');
        const nameInp = document.getElementById('create-user-name-input');
        if (nameInp) nameInp.value = '';
        modal.classList.remove('hidden');
        if (nameInp) nameInp.focus();
    }

    closeUserCreateModal() {
        const modal = document.getElementById('modal-user-create');
        if (modal) modal.classList.add('hidden');
    }

    initAvatarPicker(containerId, inputId, selectedAvatar) {
        const container = document.getElementById(containerId);
        const hiddenInput = document.getElementById(inputId);
        if (!container || !hiddenInput) return;

        const avatars = ['🎓', '🦁', '🐯', '🚀', '📚', '💡', '🌟', '🦊', '🦉', '🎯', '⚡', '🍀'];
        hiddenInput.value = selectedAvatar || avatars[0];

        container.innerHTML = avatars.map(emoji => {
            const isSel = (emoji === hiddenInput.value);
            return `
            <button type="button" class="w-10 h-10 rounded-xl text-xl flex items-center justify-center border transition-all cursor-pointer ${
                isSel ? 'border-blue-900 bg-blue-50 ring-2 ring-blue-900 scale-105' : 'border-slate-200 bg-white hover:bg-slate-50'
            }" onclick="window.app.selectAvatar('${containerId}', '${inputId}', '${emoji}')">
                ${emoji}
            </button>
            `;
        }).join('');
    }

    selectAvatar(containerId, inputId, emoji) {
        const hiddenInput = document.getElementById(inputId);
        if (hiddenInput) hiddenInput.value = emoji;
        this.initAvatarPicker(containerId, inputId, emoji);
    }

    handleCreateUserSubmit(event) {
        event.preventDefault();
        const nameInput = document.getElementById('create-user-name-input');
        const gradeSelect = document.getElementById('create-user-grade-select');
        const avatarInput = document.getElementById('create-user-avatar-value');
        const seedCheckbox = document.getElementById('create-user-seed-checkbox');

        const username = nameInput ? nameInput.value.trim() : '';
        if (!username) {
            alert('학습자 아이디(이름)를 입력해 주세요.');
            return;
        }

        const grade = gradeSelect ? gradeSelect.value : '중등';
        const avatar = avatarInput ? avatarInput.value : '🎓';
        const seedSample = seedCheckbox ? seedCheckbox.checked : true;

        try {
            const newUser = window.storage.createUser({
                username,
                avatar,
                grade,
                seedSample
            });

            this.closeUserCreateModal();
            this.closeUserModal();
            this.refreshAllViews();
            alert(`🎉 [${newUser.username}] 학습자 아이디가 등록되어 바로 시작합니다!`);
        } catch(err) {
            console.error('Failed to create user:', err);
            alert('학습자 등록 중 오류가 발생했습니다: ' + err.message);
        }
    }

    openUserEditModal(userId) {
        const user = window.storage.getAllUsers().find(u => u.id === userId);
        if (!user) return;

        const modal = document.getElementById('modal-user-edit');
        if (!modal) return;

        document.getElementById('edit-user-id-input').value = user.id;
        document.getElementById('edit-user-name-input').value = user.username;
        document.getElementById('edit-user-grade-select').value = user.grade || '중등';
        this.initAvatarPicker('edit-user-avatar-picker', 'edit-user-avatar-value', user.avatar || '🎓');

        modal.classList.remove('hidden');
    }

    closeUserEditModal() {
        const modal = document.getElementById('modal-user-edit');
        if (modal) modal.classList.add('hidden');
    }

    handleEditUserSubmit(event) {
        event.preventDefault();
        const userId = document.getElementById('edit-user-id-input').value;
        const name = document.getElementById('edit-user-name-input').value.trim();
        const grade = document.getElementById('edit-user-grade-select').value;
        const avatar = document.getElementById('edit-user-avatar-value').value;

        if (!name) {
            alert('아이디(이름)를 입력해 주세요.');
            return;
        }

        try {
            window.storage.updateUser(userId, {
                username: name,
                grade,
                avatar
            });

            this.closeUserEditModal();
            this.renderUserModal();
            this.refreshAllViews();
            alert('학습자 정보가 성공적으로 수정되었습니다.');
        } catch(err) {
            console.error('Failed to update user:', err);
            alert('수정 중 오류가 발생했습니다: ' + err.message);
        }
    }

    switchUser(userId) {
        try {
            const user = window.storage.switchUser(userId);
            if (user) {
                this.closeUserModal();
                this.refreshAllViews();
                alert(`✨ [${user.username}] 님으로 학습 데이터가 전환되었습니다!`);
            }
        } catch(err) {
            console.error('Failed to switch user:', err);
            alert('사용자 전환 중 오류가 발생했습니다: ' + err.message);
        }
    }

    deleteUser(userId, username) {
        if (!confirm(`정말로 [${username}] 학습자 아이디와 모든 학습 데이터(단어장, 레벨테스트, 플래너)를 영구 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`)) {
            return;
        }

        try {
            window.storage.deleteUser(userId);
            this.renderUserModal();
            this.refreshAllViews();
            alert(`[${username}] 학습자 아이디가 삭제되었습니다.`);
        } catch(err) {
            console.error('Failed to delete user:', err);
            alert('삭제 실패: ' + err.message);
        }
    }

    initNavigation() {
        document.querySelectorAll('.nav-tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabName = btn.dataset.tab;
                this.switchTab(tabName);
            });
        });

        // 대시보드 내 바로가기 카드 클릭 지원
        document.querySelectorAll('[data-goto-tab]').forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.gotoTab;
                this.switchTab(target);
            });
        });
    }

    switchTab(tabName) {
        if (tabName === 'wrong') {
            this.switchTab('review');
            this.switchReviewSubTab('wrong');
            return;
        }
        if (tabName === 'exam') {
            this.switchTab('reading');
            this.switchReadingSubTab('exam');
            return;
        }
        this.currentTab = tabName;

        // 탭 버튼 active 클래스 토글
        document.querySelectorAll('.nav-tab-btn').forEach(btn => {
            const isActive = (btn.dataset.tab === tabName);
            btn.classList.toggle('active-nav-tab', isActive);
            btn.classList.toggle('text-blue-900', isActive);
            btn.classList.toggle('border-blue-900', isActive);
            btn.classList.toggle('text-slate-600', !isActive);
        });

        // 탭 컨텐츠 표시/숨김
        document.querySelectorAll('.tab-content').forEach(section => {
            section.classList.toggle('hidden', section.id !== `tab-${tabName}`);
        });

        // 각 탭별 엔진 렌더러 호출
        if (tabName === 'dashboard') {
            this.renderDashboard();
        } else if (tabName === 'flashcards') {
            window.flashcardEngine.loadDeck(window.flashcardEngine.currentFilter || 'today');
        } else if (tabName === 'quiz') {
            window.quizEngine.startQuiz(window.quizEngine.currentMode || 'choice', { scope: window.quizEngine.currentScope || 'today' });
        } else if (tabName === 'review') {
            this.switchReviewSubTab(this.currentReviewSubTab || 'srs');
            if (window.heatmapEngine) {
                window.heatmapEngine.render();
            }
        } else if (tabName === 'expressions') {
            window.nativeExpressionsEngine.render();
        } else if (tabName === 'dictionary') {
            window.dictionaryEngine.render();
        } else if (tabName === 'reading') {
            this.switchReadingSubTab(this.currentReadingSubTab || 'passages');
        } else if (tabName === 'planner') {
            if (window.plannerEngine) {
                window.plannerEngine.currentDayBookFilter = 'all';
                window.plannerEngine.render();
            }
        } else if (tabName === 'ocr') {
            // OCR 탭 진입 시 날짜 기본값 자동 설정
            const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
            const dateInput = document.getElementById('ocr-target-date');
            if (dateInput && !dateInput.value) {
                dateInput.value = todayStr;
            }
            const neungryulDateInput = document.getElementById('neungryul-day-target-date');
            if (neungryulDateInput && !neungryulDateInput.value) {
                neungryulDateInput.value = todayStr;
            }
            // 능률 VOCA DAY별 테이블 및 등록 현황 안전 렌더링
            if (window.ocrEngine && window.ocrEngine.renderNeungryulVocaSection) {
                try {
                    window.ocrEngine.renderNeungryulVocaSection();
                } catch (ocrErr) {
                    console.error('Error rendering OCR section:', ocrErr);
                }
            }
        }

        // 탭 전환 시 새로 노출된 Lucide 아이콘 즉시 렌더링
        if (window.lucide) {
            try {
                window.lucide.createIcons();
            } catch (iconErr) {
                console.error('Error refreshing Lucide icons:', iconErr);
            }
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    switchReviewSubTab(mode = 'srs') {
        this.currentReviewSubTab = mode;
        const srsView = document.getElementById('subview-review-srs');
        const wrongView = document.getElementById('subview-review-wrong');
        const srsBtn = document.getElementById('btn-subtab-review-srs');
        const wrongBtn = document.getElementById('btn-subtab-review-wrong');

        if (srsView) srsView.classList.toggle('hidden', mode !== 'srs');
        if (wrongView) wrongView.classList.toggle('hidden', mode !== 'wrong');

        const activeCls = 'px-4 py-2 rounded-xl bg-slate-900 text-white font-serif font-bold text-xs shadow-xs flex items-center gap-1.5 transition-all cursor-pointer';
        const inactiveCls = 'px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-serif font-semibold text-xs border border-slate-200 flex items-center gap-1.5 transition-all cursor-pointer';

        if (srsBtn) srsBtn.className = (mode === 'srs') ? activeCls : inactiveCls;
        if (wrongBtn) wrongBtn.className = (mode === 'wrong') ? activeCls : inactiveCls;

        if (mode === 'srs' && window.reviewManager) {
            window.reviewManager.render();
        } else if (mode === 'wrong' && window.wrongNote) {
            window.wrongNote.render();
        }
        if (window.lucide) window.lucide.createIcons();
    }

    switchReadingSubTab(mode = 'passages') {
        this.currentReadingSubTab = mode;
        const passView = document.getElementById('subview-reading-passages');
        const scramView = document.getElementById('subview-reading-scramble');
        const examView = document.getElementById('subview-reading-exam');

        const passBtn = document.getElementById('btn-subtab-reading-passages');
        const scramBtn = document.getElementById('btn-subtab-reading-scramble');
        const examBtn = document.getElementById('btn-subtab-reading-exam');

        if (passView) passView.classList.toggle('hidden', mode !== 'passages');
        if (scramView) scramView.classList.toggle('hidden', mode !== 'scramble');
        if (examView) examView.classList.toggle('hidden', mode !== 'exam');

        const activeCls = 'px-4 py-2 rounded-xl bg-slate-900 text-white font-serif font-bold text-xs shadow-xs flex items-center gap-1.5 transition-all cursor-pointer';
        const inactiveCls = 'px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-serif font-semibold text-xs border border-slate-200 flex items-center gap-1.5 transition-all cursor-pointer';

        if (passBtn) passBtn.className = (mode === 'passages') ? activeCls : inactiveCls;
        if (scramBtn) scramBtn.className = (mode === 'scramble') ? activeCls : inactiveCls;
        if (examBtn) examBtn.className = (mode === 'exam') ? activeCls : inactiveCls;

        if (mode === 'passages' && window.readingEngine) {
            window.readingEngine.render();
        } else if (mode === 'scramble' && window.scrambleEngine) {
            window.scrambleEngine.render();
        } else if (mode === 'exam' && window.examStudio) {
            window.examStudio.render();
        }
        if (window.lucide) window.lucide.createIcons();
    }

    initDashboardWidgets() {
        this.renderDashboard();
    }

    renderDashboard() {
        try {
            if (window.assistantEngine && typeof window.assistantEngine.renderSchoolDDayBanner === 'function') {
                try {
                    window.assistantEngine.renderSchoolDDayBanner();
                } catch (bErr) {
                    console.error('Error rendering school D-Day banner:', bErr);
                }
            }

            const stats = window.storage ? window.storage.getStatistics() : { total: 0, mastered: 0, dueCount: 0, weakCount: 0 };
            const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
            const todayWords = window.storage ? window.storage.getWordsByDate(todayStr).filter(w => !w.isReadingPassage && ((w.flashcardDone && w.quizDone) || w.studyCompleted)).length : 0;
            const target = (window.storage && window.storage.settings && window.storage.settings.dailyTarget) || 15;

            // 헤더 학생 이름
            const nameEl = document.getElementById('dash-student-name');
            if (nameEl) nameEl.textContent = (window.storage && window.storage.settings && window.storage.settings.studentName) || '영재 학도';

            // 카드 수치 반영
            const totalWordsEl = document.getElementById('dash-total-words');
            const masteredWordsEl = document.getElementById('dash-mastered-words');
            const dueWordsEl = document.getElementById('dash-due-words');
            const weakWordsEl = document.getElementById('dash-weak-words');

            if (totalWordsEl) totalWordsEl.textContent = stats.total;
            if (masteredWordsEl) masteredWordsEl.textContent = stats.mastered;
            if (dueWordsEl) dueWordsEl.textContent = stats.dueCount;
            if (weakWordsEl) weakWordsEl.textContent = stats.weakCount;

            // 레벨테스트 배너 6개월 라이프사이클 동기화
            if (window.levelTestEngine && typeof window.levelTestEngine.updateDashboardBannerVisibility === 'function') {
                try { window.levelTestEngine.updateDashboardBannerVisibility(); } catch (e) { console.error('Error updating level test banner:', e); }
            }

            // 환영 배너 직하단 '오늘의 학습' 통합 브리핑 박스 렌더링
            try { this.renderTodayLearningBox(todayStr); } catch (e) { console.error('Error in renderTodayLearningBox:', e); }

            // 맞춤 바로가기 2개 렌더링
            try { this.renderHeroShortcuts(); } catch (e) { console.error('Error in renderHeroShortcuts:', e); }

            // 단기 vs 장기 학업 목표 트래커 렌더링
            try { this.renderGoalTracker(); } catch (e) { console.error('Error in renderGoalTracker:', e); }

            // 오늘 하루 미니 학습량 게이지 갱신
            const progressPct = Math.min(100, Math.round((todayWords / target) * 100));
            const progBar = document.getElementById('dash-today-progress-bar');
            const progText = document.getElementById('dash-today-progress-text');
            if (progBar) progBar.style.width = `${progressPct}%`;
            if (progText) progText.textContent = `${todayWords} / ${target} 단어 완수 (${progressPct}%)`;

            // 오늘의 원어민 데일리 미션 위젯 렌더링
            try { this.renderDashboardDailyNativeWidget(todayStr); } catch (e) { console.error('Error in renderDashboardDailyNativeWidget:', e); }

            // 오늘의 추천 복습 미리보기 단어 3개
            const previewContainer = document.getElementById('dash-due-preview-list');
            if (previewContainer && window.storage) {
                const dueWords = window.storage.getDueReviewWords().slice(0, 3);
                previewContainer.innerHTML = '';

                if (dueWords.length === 0) {
                    previewContainer.innerHTML = `
                        <div class="py-4 text-center text-slate-400 text-sm">
                            오늘 예정된 복습 단어가 모두 완료되었습니다!
                        </div>
                    `;
                } else {
                    dueWords.forEach(w => {
                        const row = document.createElement('div');
                        row.className = 'py-2 px-3 rounded-lg bg-slate-50 flex items-center justify-between';
                        row.innerHTML = `
                            <div class="flex items-center gap-2">
                                <span class="font-serif font-bold text-slate-900">${w.word}</span>
                                <span class="text-xs text-slate-500 font-mono">${w.partOfSpeech || 'n.'}</span>
                            </div>
                            <span class="text-xs text-slate-700">${w.meaning}</span>
                        `;
                        previewContainer.appendChild(row);
                    });
                }
            }
            // 업적 & 티어 카드 렌더링 및 오답 카운터 갱신
            if (window.achievements) {
                window.achievements.renderDashboardCard();
                window.achievements.renderHeaderCapsule();
            }
            const unresolvedCountEl = document.getElementById('dash-wrong-unresolved-count');
            if (unresolvedCountEl && window.storage) {
                unresolvedCountEl.textContent = window.storage.getUnresolvedWrongAnswers().length;
            }
            if (window.wrongNote) {
                window.wrongNote.renderStats();
            }

            // 에빙하우스 망각곡선 365일 잔디 히트맵 & 미래 복습 예측 타임라인 렌더링
            if (window.heatmapEngine && window.heatmapEngine.render) {
                try {
                    window.heatmapEngine.render();
                } catch (heatErr) {
                    console.error('Error rendering Ebbinghaus Heatmap:', heatErr);
                }
            }
        } catch (e) {
            console.error('Critical error in renderDashboard:', e);
        } finally {
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }
    }

    /**
     * 특정 단어장 그룹의 오늘 단어만 워크맨 오디오북으로 재생
     */
    playVocaGroupWalkman(groupKey) {
        const group = this.todayVocaGroupsMap && this.todayVocaGroupsMap[groupKey];
        if (!group || !window.audiobookPlayer) return;

        const targetWords = group.newWords.length > 0 ? group.newWords : group.words;
        window.audiobookPlayer.setPlaylist(targetWords, `${group.bookTitle} (${group.dayLabel})`);
    }

    /**
     * 특정 단어장 그룹의 오늘 단어로 플래시카드 학습 시작
     */
    startVocaGroupStudy(groupKey) {
        const group = this.todayVocaGroupsMap && this.todayVocaGroupsMap[groupKey];
        this.switchTab('flashcards');
        if (window.flashcardEngine && typeof window.flashcardEngine.loadDeck === 'function') {
            if (group && group.words && group.words.length > 0) {
                window.flashcardEngine.loadDeck('today', group.words);
            } else {
                window.flashcardEngine.loadDeck('today');
            }
        }
    }

    /**
     * 오늘 독해 지문 바로 읽기 (독해 탭 연동)
     */
    startReadingPassage(passageId) {
        if (window.readingEngine && typeof window.readingEngine.selectPassage === 'function') {
            window.readingEngine.selectPassage(passageId);
        }
        this.switchTab('reading');
    }

    /**
     * 홈 대시보드: 환영 배너 직하단 '오늘의 학습' 동적 브리핑 박스 렌더링
     * - 실제 오늘 계획된 단어장 및 독해 지문만 100% 동적으로 렌더링
     * - 단어장만 있으면 단어장 카드만, 독해만 있으면 독해 카드만 표시
     * - 여러 개(단어장 2개 이상 또는 독해 2편 이상) 학습 시 개별 카드 동적 생성
     * - 오늘 학습 과제가 없을 시 가짜 카드를 띄우지 않고 깔끔한 휴식/일정 등록 안내 상태 제공
     */
    renderTodayLearningBox(todayStr) {
        const container = document.getElementById('dash-today-learning-container');
        if (!container) return;

        todayStr = todayStr || (window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10));

        // 오늘 날짜(todayStr)에 실제로 배정된 과제 추출
        const todayItems = (window.storage && typeof window.storage.getWordsByDate === 'function')
            ? window.storage.getWordsByDate(todayStr)
            : ((window.storage && window.storage.words) ? window.storage.words.filter(w => w.planDate === todayStr) : []);

        const vocabWords = todayItems.filter(w => !w.isReadingPassage);
        const readingWords = todayItems.filter(w => w.isReadingPassage);
        const externalTasks = (window.storage && typeof window.storage.getTodayExternalTasks === 'function')
            ? window.storage.getTodayExternalTasks(todayStr)
            : [];

        // 1. 단어장 그룹화 (교재 및 DAY 단위)
        const groupsMap = {};
        this.todayVocaGroupsMap = {};

        vocabWords.forEach(w => {
            let groupKey = '';
            let bookTitle = '';
            let dayLabel = '';

            if (w.isReadingVocab) {
                groupKey = `reading_vocab_${w.readingUnitId || 'r'}`;
                bookTitle = `${w.tag ? w.tag.replace(' [어휘]', '').replace(' [독해]', '') : '내신 독해'} 연계 어휘`;
                dayLabel = '오늘 지문 어휘';
            } else if (w.curatedCollectionId) {
                groupKey = `curated_${w.curatedCollectionId}_${w.curatedDay || 'ALL'}`;
                bookTitle = w.curatedCollectionTitle || w.tag || '부교재 테마 단어장';
                dayLabel = w.curatedDay || '';
            } else if (w.neungryulDay) {
                groupKey = `neungryul_${w.neungryulDay}`;
                bookTitle = '능률 VOCA 어원편';
                dayLabel = w.neungryulDay;
            } else if (w.bookId) {
                groupKey = `book_${w.bookId}_${w.day || w.tag || 'ALL'}`;
                bookTitle = w.bookTitle || w.tag || '등록 단어장';
                dayLabel = w.day || (w.tag ? (w.tag.match(/DAY\s*\d+/i) || [])[0] : '') || '';
            } else if (w.tag) {
                const dayMatch = w.tag.match(/DAY\s*\d+/i);
                const cleanTitle = w.tag.replace(/\[?DAY\s*\d+\]?/i, '').replace(/\[|\]/g, '').trim() || '사용자 단어장';
                dayLabel = dayMatch ? dayMatch[0] : '';
                groupKey = `tag_${cleanTitle}_${dayLabel}`;
                bookTitle = cleanTitle;
            } else {
                groupKey = 'custom_voca';
                bookTitle = '개인 맞춤 단어장';
                dayLabel = '오늘 학습';
            }

            if (!dayLabel) {
                dayLabel = '오늘 학습';
            }

            if (!groupsMap[groupKey]) {
                groupsMap[groupKey] = {
                    key: groupKey,
                    bookTitle,
                    dayLabel,
                    words: [],
                    newWords: []
                };
            }

            groupsMap[groupKey].words.push(w);
            if (!w.stage || w.stage === 0) {
                groupsMap[groupKey].newWords.push(w);
            }
        });

        this.todayVocaGroupsMap = groupsMap;
        const vocabGroups = Object.values(groupsMap);

        // 2. 독해 지문 목록 추출
        const passagesPool = (typeof READING_PASSAGES !== 'undefined') ? READING_PASSAGES : (window.READING_PASSAGES || []);
        const seenPassageIds = new Set();
        const readingPassages = [];

        readingWords.forEach(w => {
            const pId = w.readingPassageId || w.passageId || w.id;
            if (!pId || seenPassageIds.has(pId)) return;
            seenPassageIds.add(pId);

            const passage = passagesPool.find(p => p.id === pId);
            const unitTitle = passage ? (passage.unitTitle || '중학 내신 독해 마스터') : (w.tag ? w.tag.replace(' [어휘]', '').replace(' [독해]', '') : '중등 내신 독해');
            const title = passage ? passage.title : (w.word || w.title || 'Academic Reading Passage');
            const koreanTitle = passage ? (passage.koreanTitle || '') : (w.meaning || '');
            const learningGoal = passage ? (passage.summary || '문맥 추론과 핵심 구문 분석을 통한 내신 만점 대비') : (w.example || '지문 핵심 문장 분석과 실전 문항 풀이를 진행합니다.');
            const badge = passage ? `${passage.estimatedTime || '3분'} • ${passage.wordCount || 50}단어` : '3분 • 50단어';
            const isDone = (window.storage && window.storage.readingRecords && window.storage.readingRecords[pId]?.score !== undefined) || w.studyCompleted;

            readingPassages.push({
                id: pId,
                unitTitle,
                title,
                koreanTitle,
                learningGoal,
                badge,
                isDone
            });
        });

        // 3. 오늘 배정된 학습이 전혀 없는 경우: 가짜 카드를 띄우지 않고 친절한 빈 상태(Empty State) 표시
        if (vocabGroups.length === 0 && readingPassages.length === 0 && externalTasks.length === 0) {
            const allPlanWords = (window.storage && window.storage.words || []).filter(w => !String(w.id || '').startsWith('sample-') && w.planDate);
            const scheduledDates = Array.from(new Set(allPlanWords.map(w => w.planDate))).sort();
            const futureDates = scheduledDates.filter(d => d > todayStr);

            let nearestNoticeHtml = '';
            if (futureDates.length > 0) {
                const nextDate = futureDates[0];
                const wordsOnNext = allPlanWords.filter(w => w.planDate === nextDate);
                const sampleItem = wordsOnNext[0];
                const planName = sampleItem.curatedCollectionTitle || sampleItem.bookTitle || sampleItem.tag || '학습 일정';
                nearestNoticeHtml = `
                    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono font-bold">
                        <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        <span>다음 학습 예정일: ${nextDate} (${planName} • ${wordsOnNext.length}개 과제)</span>
                    </div>
                `;
            }

            container.innerHTML = `
                <div class="rounded-3xl bg-white border border-slate-200/90 shadow-xs p-6 sm:p-8 text-center space-y-4">
                    <div class="w-14 h-14 mx-auto rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl shadow-2xs">
                        📅
                    </div>
                    <div class="max-w-md mx-auto">
                        <h3 class="font-serif font-black text-lg text-slate-900">
                            오늘(${todayStr}) 계획된 학습 과제가 없습니다
                        </h3>
                        <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                            학습 플래너에서 단어장과 내신 독해 지문 일정을 배정하거나,<br class="hidden sm:inline"/>
                            시중 교재/학원 과제를 등록하여 매일 공부 루틴을 관리해 보세요.
                        </p>
                    </div>

                    ${nearestNoticeHtml}

                    <div class="flex flex-wrap items-center justify-center gap-2.5 pt-2">
                        <button type="button" onclick="window.assistantEngine && window.assistantEngine.openExternalStudyModal()" class="px-4 py-2.5 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-950 font-serif font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer">
                            <i data-lucide="book-marked" class="w-4 h-4 text-amber-700"></i>
                            <span>시중 교재 / 학원 과제 배정</span>
                        </button>
                        <button type="button" onclick="window.app && window.app.switchTab('planner')" class="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer">
                            <i data-lucide="calendar" class="w-4 h-4 text-amber-300"></i>
                            <span>학습 플래너에서 일정 배정하기</span>
                        </button>
                        <button type="button" onclick="window.app && window.app.switchTab('ocr')" class="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-serif font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer">
                            <i data-lucide="book-plus" class="w-4 h-4 text-blue-600"></i>
                            <span>교재 등록 / 단어장 선택</span>
                        </button>
                        <button type="button" onclick="window.app && window.app.switchTab('reading')" class="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-serif font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer">
                            <i data-lucide="graduation-cap" class="w-4 h-4 text-emerald-600"></i>
                            <span>중·고등 내신 독해 단원 보기</span>
                        </button>
                    </div>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        // 4. 외부 교재 카드, 독해 카드, 단어장 카드 HTML 빌드 (외부 교재 & 독해 최우선 상단 배치)
        const externalCardsArr = [];
        externalTasks.forEach(task => {
            const progressPercent = task.totalUnits > 0 ? Math.min(100, Math.round((task.currentProgress / task.totalUnits) * 100)) : 0;
            const catLabels = {
                grammar: '문법/어법',
                reading: '독해/구문',
                sat: '수능/EBS',
                school_task: '학교 내신',
                academy: '학원/인강',
                book: '시중 교재'
            };
            const catLabel = catLabels[task.category] || '시중 교재';

            externalCardsArr.push(`
                <div class="rounded-2xl border ${task.isDone ? 'border-emerald-300 bg-gradient-to-br from-white to-emerald-50/40 ring-emerald-500/20' : 'border-amber-300/80 bg-gradient-to-br from-white to-amber-50/40 ring-amber-500/20'} p-5 shadow-xs relative flex flex-col justify-between hover:shadow-sm transition-all ring-1">
                    <div>
                        <!-- 카드 상단: 교재명 & 오늘의 분량 -->
                        <div class="flex items-start justify-between gap-3 mb-3">
                            <div class="flex items-center gap-3">
                                <div class="w-11 h-11 rounded-xl ${task.isDone ? 'bg-emerald-100 text-emerald-900 border-emerald-200' : 'bg-amber-100 text-amber-900 border-amber-200'} border flex items-center justify-center text-xl font-bold shrink-0 shadow-xs">
                                    ${task.coverEmoji || '📖'}
                                </div>
                                <div>
                                    <div class="flex items-center gap-2 mb-0.5">
                                        <span class="px-2 py-0.5 rounded-md ${task.isDone ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-900'} font-mono text-[10px] font-bold">
                                            ${catLabel}
                                        </span>
                                        <span class="text-[11px] font-bold text-slate-500">${task.publisher}</span>
                                        ${task.isDone ? `<span class="px-1.5 py-0.2 rounded-full bg-emerald-200 text-emerald-900 text-[10px] font-bold">✓ 오늘 완료됨</span>` : ''}
                                    </div>
                                    <h3 class="font-serif font-black text-base sm:text-lg text-slate-900 line-clamp-1" title="${task.title}">
                                        ${task.title}
                                    </h3>
                                    <div class="text-xs font-mono font-bold text-indigo-700 mt-0.5">
                                        오늘 할 일: <span class="px-2 py-0.5 rounded bg-indigo-50 border border-indigo-200">${task.range}</span>
                                    </div>
                                </div>
                            </div>
                            <span class="px-2.5 py-1 rounded-lg ${task.isDone ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-amber-50 text-amber-800 border-amber-200'} font-mono text-[11px] font-bold border shrink-0">
                                누적 ${task.currentProgress} / ${task.totalUnits} ${task.unitType}
                            </span>
                        </div>

                        <!-- 누적 진도 프로그레스 바 -->
                        <div class="mt-3 pt-3 border-t border-slate-100">
                            <div class="flex items-center justify-between text-[11px] mb-1">
                                <span class="text-slate-500 font-medium">전체 누적 완강률</span>
                                <span class="font-mono font-bold text-slate-700">${progressPercent}%</span>
                            </div>
                            <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-amber-500 to-emerald-600 rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
                            </div>
                        </div>
                    </div>

                    <!-- 원클릭 완료 체크 버튼 -->
                    <div class="mt-4 pt-3 border-t border-slate-100">
                        <button type="button" onclick="window.assistantEngine && window.assistantEngine.toggleTodayTask('${task.studyId}', '${todayStr}')" class="w-full py-2.5 px-4 rounded-xl ${task.isDone ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-slate-900 hover:bg-slate-800 text-white'} font-serif font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer active:scale-95">
                            <i data-lucide="${task.isDone ? 'check-circle-2' : 'circle'}" class="w-4 h-4 ${task.isDone ? 'text-white' : 'text-amber-300'}"></i>
                            <span>${task.isDone ? '오늘 학습 완료됨 (클릭 시 미완료로 변경)' : '오늘 분량 학습 완료 체크하기 (원클릭)'}</span>
                        </button>
                    </div>
                </div>
            `);
        });

        // 독해 카드 빌드
        const readingCardsArr = [];
        readingPassages.forEach(reading => {
            readingCardsArr.push(`
                <div class="rounded-2xl border border-emerald-300/80 bg-gradient-to-br from-white to-emerald-50/40 p-5 shadow-xs relative flex flex-col justify-between hover:border-emerald-400 hover:shadow-sm transition-all ring-1 ring-emerald-500/20">
                    <div>
                        <!-- 카드 상단: 독해 단원 & 지문 제목 -->
                        <div class="flex items-start justify-between gap-3 mb-3">
                            <div class="flex items-center gap-3">
                                <div class="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-200 flex items-center justify-center text-xl font-bold shrink-0 shadow-xs">
                                    🎓
                                </div>
                                <div>
                                    <div class="flex items-center gap-2 mb-0.5">
                                        <span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">오늘의 독해</span>
                                        <span class="text-[11px] font-bold text-slate-500 line-clamp-1">${reading.unitTitle}</span>
                                        ${reading.isDone ? `<span class="px-1.5 py-0.2 rounded-full bg-emerald-200 text-emerald-900 text-[10px] font-bold">✓ 완료</span>` : ''}
                                    </div>
                                    <h3 class="font-serif font-black text-base sm:text-lg text-slate-900 line-clamp-1" title="${reading.title}">
                                        ${reading.title}
                                    </h3>
                                    ${reading.koreanTitle ? `<p class="text-xs text-slate-500 font-sans mt-0.5 line-clamp-1">${reading.koreanTitle}</p>` : ''}
                                </div>
                            </div>
                            <span class="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-mono text-[11px] font-bold border border-emerald-200 shrink-0">
                                ${reading.badge}
                            </span>
                        </div>

                        <!-- 지문 독해 핵심 학습 목표 -->
                        <div class="mt-4 pt-3 border-t border-slate-100">
                            <div class="p-3 rounded-xl bg-white/80 border border-emerald-100 shadow-2xs">
                                <div class="text-[11px] font-bold text-emerald-800 mb-1 flex items-center gap-1.5">
                                    <i data-lucide="target" class="w-3.5 h-3.5 text-emerald-600"></i>
                                    <span>지문 독해 핵심 학습 목표</span>
                                </div>
                                <p class="text-xs text-slate-600 font-sans leading-relaxed line-clamp-2">
                                    ${reading.learningGoal}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- 독해 바로 시작하기 버튼 -->
                    <button type="button" onclick="window.app && window.app.startReadingPassage('${reading.id}')" class="w-full mt-5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-serif font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer">
                        <span>독해 지문 읽기 & 실전 문제 풀기</span>
                        <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            `);
        });

        const vocabCardsArr = [];
        vocabGroups.forEach(group => {
            const keyWords = (group.newWords.length > 0 ? group.newWords : group.words).slice(0, 4).map(w => w.word);
            const chipsHtml = keyWords.map(kw => `
                <span class="inline-flex items-center px-2 py-0.5 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-900 font-serif font-bold text-xs shadow-2xs">
                    ${kw}
                </span>
            `).join('');

            const isGroupDone = group.words.length > 0 && group.words.every(w => (w.flashcardDone && w.quizDone) || w.studyCompleted);

            vocabCardsArr.push(`
                <div class="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/30 p-5 shadow-xs relative flex flex-col justify-between hover:border-indigo-300 hover:shadow-sm transition-all">
                    <div>
                        <!-- 카드 상단: 단어장 명칭 및 [🎧 워크맨] 버튼 (해당 단어장 전용) -->
                        <div class="flex items-start justify-between gap-3 mb-3">
                            <div class="flex items-center gap-3">
                                <div class="w-11 h-11 rounded-xl bg-blue-100/70 text-blue-900 border border-blue-200 flex items-center justify-center text-xl font-bold shrink-0 shadow-xs">
                                    📘
                                </div>
                                <div>
                                    <div class="flex items-center gap-2 mb-0.5">
                                        <span class="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 font-mono text-[10px] font-bold">오늘의 단어장</span>
                                        <span class="text-[11px] font-mono font-bold text-slate-500">${group.dayLabel}</span>
                                        ${isGroupDone ? `<span class="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">완료</span>` : ''}
                                    </div>
                                    <h3 class="font-serif font-black text-base sm:text-lg text-slate-900 line-clamp-1" title="${group.bookTitle}">
                                        ${group.bookTitle}
                                    </h3>
                                </div>
                            </div>
                            <!-- 해당 단어장 전용 워크맨 버튼 -->
                            <button type="button" onclick="window.app && window.app.playVocaGroupWalkman('${group.key}')" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-indigo-200 bg-indigo-50/90 hover:bg-indigo-100 text-indigo-900 text-xs font-serif font-bold transition-all shadow-xs cursor-pointer active:scale-95 shrink-0" title="[${group.bookTitle} ${group.dayLabel}] 단어만 워크맨으로 청취">
                                <i data-lucide="headphones" class="w-3.5 h-3.5 text-indigo-600 animate-pulse"></i>
                                <span class="whitespace-nowrap">🎧 워크맨</span>
                            </button>
                        </div>

                        <!-- 주요 단어 칩 & 개수 -->
                        <div class="mt-4 pt-3 border-t border-slate-100">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-[11px] font-bold text-slate-500">주요 학습 단어</span>
                                <span class="text-xs font-bold text-indigo-600 font-mono">총 ${group.words.length}단어 학습</span>
                            </div>
                            <div class="flex flex-wrap gap-1.5">
                                ${chipsHtml}
                            </div>
                        </div>
                    </div>

                    <!-- 단어장 바로 들어가기 버튼 -->
                    <button type="button" onclick="window.app && window.app.startVocaGroupStudy('${group.key}')" class="w-full mt-5 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer">
                        <span>단어장 바로 들어가기</span>
                        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            `);
        });

        const cardsHtmlArr = [...externalCardsArr, ...readingCardsArr, ...vocabCardsArr];

        // 5. 그리드 컬럼 계산: 1개면 1열, 2개면 2열, 3개 이상이면 반응형 다열
        const totalCards = cardsHtmlArr.length;
        let gridClass = 'grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5';
        if (totalCards === 1) {
            gridClass = 'grid grid-cols-1 gap-4 max-w-2xl';
        } else if (totalCards >= 3) {
            gridClass = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5';
        }

        const totalVocabCount = vocabWords.length;
        const summaryParts = [];
        if (externalTasks.length > 0) summaryParts.push(`외부 교재/과제 ${externalTasks.length}건`);
        if (readingPassages.length > 0) summaryParts.push(`독해 ${readingPassages.length}편`);
        if (vocabGroups.length > 0) summaryParts.push(`단어장 ${vocabGroups.length}개 (${totalVocabCount}단어)`);
        const summaryBadge = summaryParts.join(' • ');

        container.innerHTML = `
            <div class="rounded-3xl bg-white border border-slate-200/90 shadow-xs p-5 sm:p-6 space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <h2 class="font-serif font-black text-lg text-slate-900 tracking-tight">오늘의 학습</h2>
                        <span class="text-xs text-slate-400 font-mono hidden sm:inline">${todayStr} (Today)</span>
                        <span class="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px] font-bold border border-slate-200">
                            ${summaryBadge}
                        </span>
                    </div>
                    <div class="flex items-center gap-2">
                        ${vocabGroups.length > 1 ? `
                            <button type="button" onclick="window.audiobookPlayer && window.audiobookPlayer.playTodayNewWords()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-900 text-xs font-serif font-bold transition-all shadow-xs cursor-pointer active:scale-95" title="오늘 학습할 모든 단어장을 한꺼번에 워크맨으로 청취">
                                <i data-lucide="headphones" class="w-3.5 h-3.5 text-indigo-600 animate-pulse"></i>
                                <span>🎧 오늘 전체 단어 (${totalVocabCount}개)</span>
                            </button>
                        ` : ''}
                        <button type="button" onclick="window.app && window.app.switchTab('planner')" class="text-xs text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1 cursor-pointer transition-colors" title="학습 플래너 캘린더 바로가기">
                            <span>학습 플래너 일정 보기</span>
                            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>

                <div class="${gridClass}">
                    ${cardsHtmlArr.join('')}
                </div>
            </div>
        `;

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    /**
     * 대시보드 내 "오늘의 원어민 데일리 미션 (콜로케이션 1개 + 핵심 구동사 1개)" 렌더링
     */
    renderDashboardDailyNativeWidget(todayStr) {
        const widgetContainer = document.getElementById('dash-daily-missions-widget');
        if (!widgetContainer || typeof getDailyExpressions === 'undefined') return;

        const offset = window.storage.getDailySetOffset(todayStr);
        const pastCompletedIds = window.storage.getPastCompletedDailyIds(todayStr);
        const userLvl = window.storage ? window.storage.getAcademicLevel() : 3;
        const daily = getDailyExpressions(todayStr, offset, pastCompletedIds, userLvl);
        const colloc = daily.collocation;
        const idiom = daily.idiom;

        const isCollocDone = window.storage.isDailyMissionCompleted(todayStr, colloc.id);
        const isIdiomDone = window.storage.isDailyMissionCompleted(todayStr, idiom.id);
        const doneCount = (isCollocDone ? 1 : 0) + (isIdiomDone ? 1 : 0);

        widgetContainer.innerHTML = `
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center border border-amber-400/30">
                        <i data-lucide="sparkles" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <div class="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
                            Daily Exclusive Native • ${todayStr} (Set #${offset + 1})
                        </div>
                        <h3 class="font-serif font-bold text-lg text-white">
                            하루 2개로 완성하는 원어민 실전 표현
                        </h3>
                    </div>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <button id="dash-btn-next-daily-set" class="text-xs px-2.5 py-1 rounded-full bg-indigo-500/30 hover:bg-indigo-500/50 border border-indigo-400/40 text-indigo-100 font-semibold flex items-center gap-1 transition-all cursor-pointer">
                        <i data-lucide="refresh-cw" class="w-3 h-3 text-amber-300"></i> 새로운 2개 더 보기
                    </button>
                    <span class="text-xs font-mono px-3 py-1 rounded-full ${
                        doneCount === 2 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-white/10 text-slate-300'
                    } font-bold flex items-center gap-1.5">
                        <i data-lucide="${doneCount === 2 ? 'check-check' : 'target'}" class="w-3.5 h-3.5"></i>
                        미션 완료: ${doneCount} / 2
                    </span>
                    <button class="text-xs text-amber-300 hover:underline font-semibold" onclick="window.app.switchTab('expressions')">
                        상세 학습 →
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <!-- 1. 오늘의 실전 콜로케이션 -->
                <div class="p-4 rounded-xl bg-white/5 border ${isCollocDone ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-white/10'} flex flex-col justify-between space-y-3">
                    <div>
                        <div class="flex items-center justify-between text-xs">
                            <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-200 font-bold uppercase">
                                Daily Collocation
                            </span>
                            <button class="dash-audio-btn text-slate-300 hover:text-white p-1" data-audio="${colloc.audioText || colloc.title}" title="발음 듣기">
                                <i data-lucide="volume-2" class="w-4 h-4"></i>
                            </button>
                        </div>
                        <div class="font-serif font-bold text-base text-white mt-1.5">${colloc.title}</div>
                        <div class="text-xs text-amber-300 mt-0.5">${colloc.summary}</div>
                        <div class="text-[11px] text-slate-300 italic mt-1 font-serif">"${colloc.exampleEn}"</div>
                    </div>

                    <div>
                        ${isCollocDone ? `
                            <div class="w-full py-2 px-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5">
                                <i data-lucide="check" class="w-3.5 h-3.5"></i> 오늘 퀴즈·복습 등록 완료
                            </div>
                        ` : `
                            <button class="dash-complete-daily-btn w-full py-2 px-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-serif font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer" data-id="${colloc.id}">
                                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> 학습 완료 & 퀴즈·복습에 등록
                            </button>
                        `}
                    </div>
                </div>

                <!-- 2. 오늘의 핵심 구동사 -->
                <div class="p-4 rounded-xl bg-white/5 border ${isIdiomDone ? 'border-emerald-500/40 bg-emerald-950/20' : 'border-white/10'} flex flex-col justify-between space-y-3">
                    <div>
                        <div class="flex items-center justify-between text-xs">
                            <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-200 font-bold uppercase">
                                Daily Phrasal Verb & Slang
                            </span>
                            <button class="dash-audio-btn text-slate-300 hover:text-white p-1" data-audio="${idiom.audioText || idiom.title}" title="발음 듣기">
                                <i data-lucide="volume-2" class="w-4 h-4"></i>
                            </button>
                        </div>
                        <div class="font-serif font-bold text-base text-white mt-1.5">${idiom.title}</div>
                        <div class="text-xs text-emerald-300 mt-0.5">${idiom.summary}</div>
                        <div class="text-[11px] text-slate-300 italic mt-1 font-serif">"${idiom.exampleEn}"</div>
                    </div>

                    <div>
                        ${isIdiomDone ? `
                            <div class="w-full py-2 px-3 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5">
                                <i data-lucide="check" class="w-3.5 h-3.5"></i> 오늘 퀴즈·복습 등록 완료
                            </div>
                        ` : `
                            <button class="dash-complete-daily-btn w-full py-2 px-3 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-serif font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer" data-id="${idiom.id}">
                                <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> 학습 완료 & 퀴즈·복습에 등록
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;

        // 새로운 2개 더 보기 바인딩
        const nextSetBtn = widgetContainer.querySelector('#dash-btn-next-daily-set');
        if (nextSetBtn) {
            nextSetBtn.onclick = () => {
                window.storage.nextDailyExpressionSet(todayStr);
                this.renderDashboard();
                if (window.nativeExpressionsEngine) {
                    window.nativeExpressionsEngine.renderDailyMissions();
                }
            };
        }

        // 발음 재생 바인딩
        widgetContainer.querySelectorAll('.dash-audio-btn').forEach(btn => {
            btn.onclick = () => window.tts && window.tts.speak(btn.dataset.audio);
        });

        // 대시보드 미션 완료 버튼 바인딩
        widgetContainer.querySelectorAll('.dash-complete-daily-btn').forEach(btn => {
            btn.onclick = () => {
                const id = btn.dataset.id;
                const item = (typeof findNativeExpressionById === 'function')
                    ? findNativeExpressionById(id)
                    : NATIVE_EXPRESSIONS.find(e => e.id === id);
                if (item) {
                    window.nativeExpressionsEngine.completeDailyMission(item, todayStr);
                }
            };
        });
    }

    /**
     * 메인 환영 배너 내부 맞춤 바로가기 2개 동적 렌더링
     */
    renderHeroShortcuts() {
        const container = document.getElementById('dash-custom-shortcuts-container');
        if (!container || !window.storage) return;

        const shortcuts = window.storage.getCustomShortcuts() || {
            slot1: { key: 'reading', label: '중·고등 내신 독해 & 비문학 풀기 →' },
            slot2: { key: 'dictionary', label: '영단어 사전 열기' }
        };
        const targets = (typeof SHORTCUT_TARGETS !== 'undefined') ? SHORTCUT_TARGETS : {};
        const defaultReading = {
            tab: 'reading', icon: 'graduation-cap', defaultLabel: '중·고등 내신 독해 & 비문학 풀기 →', btnClass: 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-serif font-bold text-xs shadow-sm', iconColor: 'text-slate-900'
        };
        const defaultDict = {
            tab: 'dictionary', icon: 'book-open-check', defaultLabel: '영단어 사전 열기', btnClass: 'bg-white/15 hover:bg-white/25 text-white border border-white/20 font-serif font-bold text-xs', iconColor: 'text-amber-300'
        };

        const slot1Conf = targets[shortcuts.slot1?.key] || targets.reading || defaultReading;
        const slot2Conf = targets[shortcuts.slot2?.key] || targets.dictionary || defaultDict;

        const label1 = shortcuts.slot1?.label || slot1Conf.defaultLabel;
        const label2 = shortcuts.slot2?.label || slot2Conf.defaultLabel;

        container.innerHTML = `
            <button class="px-4 py-2 rounded-xl ${slot1Conf.btnClass} flex items-center gap-1.5 transition-all cursor-pointer active:scale-95" onclick="window.app.switchTab('${slot1Conf.tab}')">
                <i data-lucide="${slot1Conf.icon}" class="w-4 h-4 ${slot1Conf.iconColor}"></i>
                <span>${label1}</span>
            </button>
            <button class="px-4 py-2 rounded-xl ${slot2Conf.btnClass} flex items-center gap-1.5 transition-all cursor-pointer active:scale-95" onclick="window.app.switchTab('${slot2Conf.tab}')">
                <i data-lucide="${slot2Conf.icon}" class="w-4 h-4 ${slot2Conf.iconColor}"></i>
                <span>${label2}</span>
            </button>
        `;
        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 단기 vs 장기 학업 목표 트래커 위젯 렌더링
     */
    renderGoalTracker() {
        if (!window.storage) return;
        const activeInfo = window.storage.getActiveGoal() || { mode: 'short', goal: null };
        const mode = activeInfo.mode || 'short';
        const goal = activeInfo.goal || {
            title: '이번 주 테마 어휘 100단어 완독',
            targetDays: 7,
            targetCount: 100,
            targetType: 'words',
            startDate: window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10)
        };
        const progress = window.storage.getGoalProgress(goal) || { current: 0, target: 100, pct: 0, daysLeft: 7, totalDays: 7, isExpired: false, dailyPace: 15, daysPassed: 0, startDate: '' };

        // Subtabs toggle UI update
        const shortBtn = document.getElementById('btn-goal-mode-short');
        const longBtn = document.getElementById('btn-goal-mode-long');
        if (shortBtn && longBtn) {
            if (mode === 'short') {
                shortBtn.className = 'px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 bg-white text-blue-950 shadow-xs';
                shortBtn.innerHTML = '<i data-lucide="zap" class="w-3.5 h-3.5 text-amber-500"></i><span>단기 집중</span>';
                longBtn.className = 'px-2.5 py-1 rounded-lg text-slate-500 hover:text-slate-900 transition-all cursor-pointer flex items-center gap-1.5';
                longBtn.innerHTML = '<i data-lucide="milestone" class="w-3.5 h-3.5 text-slate-400"></i><span>장기 로드맵</span>';
            } else {
                longBtn.className = 'px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 bg-white text-blue-950 shadow-xs';
                longBtn.innerHTML = '<i data-lucide="milestone" class="w-3.5 h-3.5 text-blue-900"></i><span>장기 로드맵</span>';
                shortBtn.className = 'px-2.5 py-1 rounded-lg text-slate-500 hover:text-slate-900 transition-all cursor-pointer flex items-center gap-1.5';
                shortBtn.innerHTML = '<i data-lucide="zap" class="w-3.5 h-3.5 text-slate-400"></i><span>단기 집중</span>';
            }
        }

        // D-Day Badge
        const ddayBadge = document.getElementById('dash-goal-dday-badge');
        if (ddayBadge) {
            if (progress.isExpired) {
                ddayBadge.textContent = '기간 만료 (목표 재설정)';
                ddayBadge.className = 'text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-900 border border-red-300';
            } else {
                ddayBadge.textContent = `D-${progress.daysLeft}일 남음`;
                ddayBadge.className = mode === 'short'
                    ? 'text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300'
                    : 'text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 border border-blue-300';
            }
        }

        // Tag & Title
        const modeTag = document.getElementById('dash-goal-mode-tag');
        if (modeTag) {
            modeTag.textContent = mode === 'short' ? '단기' : '장기';
            modeTag.className = mode === 'short'
                ? 'text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 font-semibold'
                : 'text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-100 text-blue-900 font-semibold';
        }
        const titleText = document.getElementById('dash-goal-title-text');
        if (titleText) {
            titleText.textContent = goal.title || '학습 목표';
        }

        // Progress text & Bar
        const unitLabel = goal.targetType === 'passages' ? '지문' : (goal.targetType === 'mastered' ? '단어 졸업' : '단어');
        const progressText = document.getElementById('dash-goal-progress-text');
        if (progressText) {
            progressText.textContent = `${progress.current} / ${progress.target}${unitLabel} (${progress.pct}%)`;
        }
        const progressBar = document.getElementById('dash-goal-progress-bar');
        if (progressBar) {
            progressBar.style.width = `${progress.pct}%`;
        }

        // Coach tip & date range
        const coachText = document.getElementById('dash-goal-coach-text');
        if (coachText) {
            if (progress.pct >= 100) {
                coachText.textContent = '축하합니다! 설정한 학업 목표를 100% 달성하였습니다! 🎉';
            } else if (progress.isExpired) {
                coachText.textContent = '목표 기간이 만료되었습니다. [목표 설정]을 눌러 새로운 목표를 시작해보세요!';
            } else {
                coachText.textContent = `오늘 약 ${progress.dailyPace}${unitLabel}을 추가로 완료하면 기한 내 완주할 수 있습니다!`;
            }
        }
        const dateRangeEl = document.getElementById('dash-goal-date-range');
        if (dateRangeEl) {
            dateRangeEl.textContent = `${progress.startDate} 시작 (총 ${progress.totalDays}일 코스, ${progress.daysPassed}일차)`;
        }

        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 대시보드에서 단기/장기 목표 탭 전환
     */
    switchGoalMode(mode) {
        if (!window.storage) return;
        window.storage.setActiveGoalMode(mode);
        this.renderGoalTracker();
    }

    /**
     * 바로가기 설정 모달 열기
     */
    openShortcutSettingsModal() {
        const modal = document.getElementById('modal-shortcut-settings');
        if (!modal || !window.storage) return;

        const shortcuts = window.storage.getCustomShortcuts();
        const slot1Select = document.getElementById('shortcut-slot1-select');
        const slot1Label = document.getElementById('shortcut-slot1-label');
        const slot2Select = document.getElementById('shortcut-slot2-select');
        const slot2Label = document.getElementById('shortcut-slot2-label');

        if (slot1Select) slot1Select.value = shortcuts.slot1?.key || 'reading';
        if (slot1Label) slot1Label.value = shortcuts.slot1?.label || SHORTCUT_TARGETS.reading.defaultLabel;
        if (slot2Select) slot2Select.value = shortcuts.slot2?.key || 'dictionary';
        if (slot2Label) slot2Label.value = shortcuts.slot2?.label || SHORTCUT_TARGETS.dictionary.defaultLabel;

        modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 바로가기 설정 저장
     */
    saveShortcutSettings() {
        if (!window.storage) return;
        const slot1Key = document.getElementById('shortcut-slot1-select')?.value || 'reading';
        const slot1Label = document.getElementById('shortcut-slot1-label')?.value.trim() || SHORTCUT_TARGETS[slot1Key]?.defaultLabel;
        const slot2Key = document.getElementById('shortcut-slot2-select')?.value || 'dictionary';
        const slot2Label = document.getElementById('shortcut-slot2-label')?.value.trim() || SHORTCUT_TARGETS[slot2Key]?.defaultLabel;

        window.storage.saveCustomShortcuts(
            { key: slot1Key, label: slot1Label },
            { key: slot2Key, label: slot2Label }
        );

        document.getElementById('modal-shortcut-settings')?.classList.add('hidden');
        this.renderHeroShortcuts();
        alert('메인 화면 맞춤 바로가기 2개가 성공적으로 저장되었습니다!');
    }

    /**
     * 바로가기 기본값 복원
     */
    resetShortcutSettings() {
        if (!confirm('바로가기 설정을 기본값(중등 내신 독해 + 영단어 사전)으로 복원하시겠습니까?')) return;
        window.storage.saveCustomShortcuts(
            { key: 'reading', label: SHORTCUT_TARGETS.reading.defaultLabel },
            { key: 'dictionary', label: SHORTCUT_TARGETS.dictionary.defaultLabel }
        );
        document.getElementById('modal-shortcut-settings')?.classList.add('hidden');
        this.renderHeroShortcuts();
    }

    /**
     * 학업 목표 설정 모달 열기
     */
    openGoalSettingsModal() {
        const modal = document.getElementById('modal-goal-settings');
        if (!modal || !window.storage) return;

        const activeInfo = window.storage.getActiveGoal();
        this.modalActiveGoalMode = activeInfo.mode; // 'short' or 'long'
        this.syncGoalModalUI();
        modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 모달 내부 단기 vs 장기 서브탭 전환
     */
    switchModalGoalTab(mode) {
        this.modalActiveGoalMode = mode;
        this.syncGoalModalUI();
    }

    /**
     * 모달 폼 UI 동기화
     */
    syncGoalModalUI() {
        const mode = this.modalActiveGoalMode || 'short';
        const tabShort = document.getElementById('modal-goal-tab-short');
        const tabLong = document.getElementById('modal-goal-tab-long');

        if (tabShort && tabLong) {
            if (mode === 'short') {
                tabShort.className = 'py-2 rounded-lg text-xs font-serif font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer bg-white text-blue-950 shadow-xs';
                tabLong.className = 'py-2 rounded-lg text-xs font-serif font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer text-slate-500 hover:text-slate-900';
            } else {
                tabLong.className = 'py-2 rounded-lg text-xs font-serif font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer bg-white text-blue-950 shadow-xs';
                tabShort.className = 'py-2 rounded-lg text-xs font-serif font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer text-slate-500 hover:text-slate-900';
            }
        }

        // 프리셋 드롭다운 채우기
        const presets = GOAL_PRESETS[mode] || [];
        const presetSelect = document.getElementById('goal-preset-select');
        if (presetSelect) {
            presetSelect.innerHTML = presets.map(p => `
                <option value="${p.id}">${p.title} (${p.targetDays}일 / ${p.targetCount}${p.targetType === 'passages' ? '지문' : '단어'})</option>
            `).join('');
        }

        // 해당 모드의 저장된 목표 불러오기
        const allGoals = window.storage.getLearningGoals();
        const currentGoal = mode === 'long' ? allGoals.longTerm : allGoals.shortTerm;

        if (currentGoal) {
            if (presetSelect && currentGoal.presetId) {
                presetSelect.value = currentGoal.presetId;
            }
            const titleInput = document.getElementById('goal-input-title');
            const daysInput = document.getElementById('goal-input-days');
            const countInput = document.getElementById('goal-input-count');
            const typeInput = document.getElementById('goal-input-type');
            const dateInput = document.getElementById('goal-input-start-date');

            if (titleInput) titleInput.value = currentGoal.title || '';
            if (daysInput) daysInput.value = currentGoal.targetDays || 7;
            if (countInput) countInput.value = currentGoal.targetCount || 100;
            if (typeInput) typeInput.value = currentGoal.targetType || 'words';
            if (dateInput) dateInput.value = currentGoal.startDate || window.storage.getTodayDateString();

            const curPreset = presets.find(p => p.id === currentGoal.presetId) || presets[0];
            if (curPreset) {
                const descTitle = document.getElementById('goal-preset-desc-title');
                const descText = document.getElementById('goal-preset-desc-text');
                if (descTitle) descTitle.textContent = curPreset.title;
                if (descText) descText.textContent = curPreset.desc;
            }
        }

        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 모달 내 프리셋 변경 이벤트
     */
    onGoalPresetChanged(presetId) {
        const mode = this.modalActiveGoalMode || 'short';
        const presets = GOAL_PRESETS[mode] || [];
        const found = presets.find(p => p.id === presetId);
        if (!found) return;

        const descTitle = document.getElementById('goal-preset-desc-title');
        const descText = document.getElementById('goal-preset-desc-text');
        if (descTitle) descTitle.textContent = found.title;
        if (descText) descText.textContent = found.desc;

        if (found.id !== 'st_custom' && found.id !== 'lt_custom') {
            const titleInput = document.getElementById('goal-input-title');
            const daysInput = document.getElementById('goal-input-days');
            const countInput = document.getElementById('goal-input-count');
            const typeInput = document.getElementById('goal-input-type');

            if (titleInput) titleInput.value = found.title;
            if (daysInput) daysInput.value = found.targetDays;
            if (countInput) countInput.value = found.targetCount;
            if (typeInput) typeInput.value = found.targetType;
        }
    }

    /**
     * 목표 설정 저장
     */
    saveGoalSettings() {
        if (!window.storage) return;
        const mode = this.modalActiveGoalMode || 'short';
        const presetId = document.getElementById('goal-preset-select')?.value || (mode === 'short' ? 'st_week_100' : 'lt_neungryul_40');
        const title = document.getElementById('goal-input-title')?.value.trim() || '학습 목표';
        const targetDays = parseInt(document.getElementById('goal-input-days')?.value) || 7;
        const targetCount = parseInt(document.getElementById('goal-input-count')?.value) || 100;
        const targetType = document.getElementById('goal-input-type')?.value || 'words';
        const startDate = document.getElementById('goal-input-start-date')?.value || window.storage.getTodayDateString();

        const goalData = {
            presetId,
            title,
            targetDays,
            targetCount,
            targetType,
            startDate
        };

        window.storage.saveLearningGoal(mode, goalData);
        window.storage.setActiveGoalMode(mode);

        document.getElementById('modal-goal-settings')?.classList.add('hidden');
        this.renderGoalTracker();
        alert(`${mode === 'short' ? '⚡ 단기간 집중 목표' : '🏛️ 장기간 로드맵 목표'}가 성공적으로 설정 및 활성화되었습니다!`);
    }

    initModals() {
        // 1. 단어 직접 추가 모달
        const addModal = document.getElementById('modal-add-word');
        const openAddBtn = document.getElementById('btn-open-add-word');
        const closeAddBtn = document.getElementById('btn-close-add-word');
        const submitAddBtn = document.getElementById('btn-submit-add-word');

        if (openAddBtn && addModal) {
            openAddBtn.onclick = () => addModal.classList.remove('hidden');
        }
        if (closeAddBtn && addModal) {
            closeAddBtn.onclick = () => addModal.classList.add('hidden');
        }
        if (submitAddBtn && addModal) {
            submitAddBtn.onclick = () => {
                const wordInput = document.getElementById('add-modal-word');
                const meaningInput = document.getElementById('add-modal-meaning');
                const posSelect = document.getElementById('add-modal-pos');
                const exampleInput = document.getElementById('add-modal-example');
                const exMeaningInput = document.getElementById('add-modal-example-meaning');
                const tagInput = document.getElementById('add-modal-tag');

                if (!wordInput.value.trim() || !meaningInput.value.trim()) {
                    alert('영단어와 한글 의미를 입력해주세요.');
                    return;
                }

                window.storage.addWord({
                    word: wordInput.value.trim(),
                    meaning: meaningInput.value.trim(),
                    partOfSpeech: posSelect.value,
                    example: exampleInput.value.trim(),
                    exampleMeaning: exMeaningInput.value.trim(),
                    tag: tagInput.value.trim() || '직접 등록'
                });

                alert(`[${wordInput.value.trim()}] 단어가 성공적으로 등록되었습니다.`);
                wordInput.value = '';
                meaningInput.value = '';
                exampleInput.value = '';
                exMeaningInput.value = '';
                addModal.classList.add('hidden');
                this.renderDashboard();
            };
        }

        // 2. 설정 모달 (음성, 목표량, 백업)
        const settingsModal = document.getElementById('modal-settings');
        const openSettingsBtn = document.getElementById('btn-open-settings');
        const closeSettingsBtn = document.getElementById('btn-close-settings');
        const saveSettingsBtn = document.getElementById('btn-save-settings');

        if (openSettingsBtn && settingsModal) {
            openSettingsBtn.onclick = () => {
                document.getElementById('set-student-name').value = window.storage.settings.studentName;
                document.getElementById('set-daily-target').value = window.storage.settings.dailyTarget;
                document.getElementById('set-voice-accent').value = window.storage.settings.audioAccent;
                document.getElementById('set-voice-rate').value = window.storage.settings.audioRate;
                settingsModal.classList.remove('hidden');
            };
        }
        if (closeSettingsBtn && settingsModal) {
            closeSettingsBtn.onclick = () => settingsModal.classList.add('hidden');
        }
        if (saveSettingsBtn && settingsModal) {
            saveSettingsBtn.onclick = () => {
                window.storage.settings.studentName = document.getElementById('set-student-name').value.trim() || '영재 학도';
                window.storage.settings.dailyTarget = parseInt(document.getElementById('set-daily-target').value) || 15;
                window.storage.settings.audioAccent = document.getElementById('set-voice-accent').value;
                window.storage.settings.audioRate = parseFloat(document.getElementById('set-voice-rate').value) || 1.0;

                window.storage.saveSettings();
                if (window.tts) {
                    window.tts.setLanguage(window.storage.settings.audioAccent);
                    window.tts.setRate(window.storage.settings.audioRate);
                }

                alert('학습 환경설정이 저장되었습니다.');
                settingsModal.classList.add('hidden');
                this.renderDashboard();
            };
        }

        // 바로가기 설정 모달 이벤트 바인딩
        const openShortcutModalBtn = document.getElementById('btn-open-shortcut-settings');
        const closeShortcutModalBtn = document.getElementById('btn-close-shortcut-settings');
        const saveShortcutModalBtn = document.getElementById('btn-save-shortcut-settings');
        const resetShortcutsBtn = document.getElementById('btn-reset-shortcuts');
        const slot1Select = document.getElementById('shortcut-slot1-select');
        const slot2Select = document.getElementById('shortcut-slot2-select');

        if (openShortcutModalBtn) {
            openShortcutModalBtn.onclick = () => this.openShortcutSettingsModal();
        }
        if (closeShortcutModalBtn) {
            closeShortcutModalBtn.onclick = () => document.getElementById('modal-shortcut-settings')?.classList.add('hidden');
        }
        if (saveShortcutModalBtn) {
            saveShortcutModalBtn.onclick = () => this.saveShortcutSettings();
        }
        if (resetShortcutsBtn) {
            resetShortcutsBtn.onclick = () => this.resetShortcutSettings();
        }
        if (slot1Select) {
            slot1Select.onchange = (e) => {
                const conf = SHORTCUT_TARGETS[e.target.value];
                const labelInput = document.getElementById('shortcut-slot1-label');
                if (conf && labelInput) labelInput.value = conf.defaultLabel;
            };
        }
        if (slot2Select) {
            slot2Select.onchange = (e) => {
                const conf = SHORTCUT_TARGETS[e.target.value];
                const labelInput = document.getElementById('shortcut-slot2-label');
                if (conf && labelInput) labelInput.value = conf.defaultLabel;
            };
        }

        // 학업 목표 설정 모달 이벤트 바인딩
        const openGoalModalBtn = document.getElementById('btn-open-goal-settings');
        const closeGoalModalBtn = document.getElementById('btn-close-goal-settings');
        const saveGoalModalBtn = document.getElementById('btn-save-goal-settings');
        const goalPresetSelect = document.getElementById('goal-preset-select');

        if (openGoalModalBtn) {
            openGoalModalBtn.onclick = () => this.openGoalSettingsModal();
        }
        if (closeGoalModalBtn) {
            closeGoalModalBtn.onclick = () => document.getElementById('modal-goal-settings')?.classList.add('hidden');
        }
        if (saveGoalModalBtn) {
            saveGoalModalBtn.onclick = () => this.saveGoalSettings();
        }
        if (goalPresetSelect) {
            goalPresetSelect.onchange = (e) => this.onGoalPresetChanged(e.target.value);
        }

        // 백업 내보내기 & 불러오기
        const exportBtn = document.getElementById('btn-export-backup');
        const importBtn = document.getElementById('btn-import-backup');
        const importFileInput = document.getElementById('import-file-input');

        if (exportBtn) {
            exportBtn.onclick = () => window.storage.exportBackup();
        }
        if (importBtn && importFileInput) {
            importBtn.onclick = () => importFileInput.click();
            importFileInput.onchange = (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (evt) => {
                    const success = window.storage.importBackup(evt.target.result);
                    if (success) {
                        alert('데이터 복원이 완료되었습니다!');
                        location.reload();
                    } else {
                        alert('올바른 백업 JSON 파일이 아닙니다.');
                    }
                };
                reader.readAsText(file);
            };
        }
    }

    // ------------------------------------------------------------------------
    // 스마트 학습 계획 일괄 배정 모달 (요일 선택 & 시작 소단원/DAY 지정)
    // ------------------------------------------------------------------------

    openReadingBatchPlanModal(unit = null, allowUnitSelect = false) {
        if (!unit) {
            unit = window.readingEngine ? window.readingEngine.getCurrentUnit() : null;
        }
        const units = window.READING_UNITS || (typeof READING_UNITS !== 'undefined' ? READING_UNITS : []);
        if (!unit && units.length > 0) {
            unit = units[0];
        }
        if (!unit) return;

        const passages = window.READING_PASSAGES || (typeof READING_PASSAGES !== 'undefined' ? READING_PASSAGES : []);
        const unitPassages = passages.filter(p => p.unitId === unit.unitId);

        this.currentBatchPlanConfig = {
            type: 'reading',
            targetId: unit.unitId,
            unitTitle: unit.unitTitle,
            items: unitPassages,
            fromTab: this.currentTab
        };

        const modal = document.getElementById('modal-batch-plan');
        const modalTitle = document.getElementById('batch-plan-modal-title');
        const modalDesc = document.getElementById('batch-plan-modal-desc');
        const targetName = document.getElementById('batch-plan-target-name');
        const unitSelect = document.getElementById('batch-plan-unit-select');
        const totalItemsBadge = document.getElementById('batch-plan-total-items-badge');
        const startDateInput = document.getElementById('batch-plan-start-date');
        const startSubunitSelect = document.getElementById('batch-plan-start-subunit');

        if (modalTitle) modalTitle.textContent = `${unit.unitTitle} 계획표 배정`;
        if (modalDesc) modalDesc.textContent = '학습 요일(주기)과 시작 소단원을 지정하여 맞춤형 플래너를 생성합니다.';
        if (targetName) targetName.textContent = unit.unitTitle;
        if (totalItemsBadge) totalItemsBadge.textContent = `총 ${unitPassages.length}개 지문`;

        // 단원 선택 드롭다운 채우기 및 노출
        if (unitSelect) {
            unitSelect.classList.remove('hidden');
            unitSelect.innerHTML = units.map(u => `
                <option value="${u.unitId}" ${u.unitId === unit.unitId ? 'selected' : ''}>
                    ${u.unitTitle} (${u.grade} ${u.semester} • 10지문)
                </option>
            `).join('');
        }

        const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
        if (startDateInput) startDateInput.value = todayStr;

        if (startSubunitSelect) {
            startSubunitSelect.innerHTML = unitPassages.map((p, idx) => `
                <option value="${idx}">
                    ${idx + 1}번 지문부터 (${p.title.slice(0, 20)}...) • 총 ${unitPassages.length - idx}편
                </option>
            `).join('');
        }

        const wordsSection = document.getElementById('batch-plan-words-per-day-section');
        if (wordsSection) wordsSection.classList.add('hidden');
        const plusSection = document.getElementById('batch-plan-plus-option-section');
        if (plusSection) plusSection.classList.add('hidden');

        this.setBatchPlanDaysPreset('all');
        if (modal) modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    onBatchPlanUnitSelectChanged(unitId) {
        const units = window.READING_UNITS || (typeof READING_UNITS !== 'undefined' ? READING_UNITS : []);
        const targetUnit = units.find(u => u.unitId === unitId);
        if (targetUnit) {
            this.openReadingBatchPlanModal(targetUnit, true);
            if (window.readingEngine) {
                window.readingEngine.selectUnit(unitId);
            }
        }
    }

    openVocaBatchPlanModal(book = null) {
        if (!book) {
            book = window.ocrEngine ? window.ocrEngine.getCurrentBookInfo() : null;
        }
        if (!book) return;

        const unitSelect = document.getElementById('batch-plan-unit-select');
        if (unitSelect) unitSelect.classList.add('hidden');

        const dataPool = book.dataPool || [];
        const uniqueDays = Array.from(new Set(dataPool.map(r => r.DAY))).sort();

        this.currentBatchPlanConfig = {
            type: 'voca',
            bookId: book.id,
            bookTitle: book.title,
            isNeungryul: book.isNeungryul,
            isNeungryulEtym: book.isNeungryulEtym,
            items: uniqueDays,
            rawPool: dataPool,
            dataPool: dataPool,
            totalWords: dataPool.length,
            wordsPerDay: 'default',
            includePlus: true,
            fromTab: this.currentTab
        };

        const wordsSection = document.getElementById('batch-plan-words-per-day-section');
        if (wordsSection) wordsSection.classList.remove('hidden');

        const plusSection = document.getElementById('batch-plan-plus-option-section');
        const plusCheck = document.getElementById('batch-plan-include-plus-check');
        const plusDesc = document.getElementById('batch-plan-plus-desc');
        const isChallenger = String(book.id || '').startsWith('challenger-');

        if (plusSection) {
            if (isChallenger) {
                plusSection.classList.remove('hidden');
                if (plusCheck) plusCheck.checked = true;
                if (plusDesc) {
                    if (book.id === 'challenger-1') {
                        plusDesc.textContent = '기본 40일(729단어) + DAY PLUS(21단어) = 총 750단어 완강 코스로 배정됩니다.';
                    } else if (book.id === 'challenger-2') {
                        plusDesc.textContent = '기본 40일(866단어) + PLUS 01~02(34단어) = 총 900단어 완강 코스로 배정됩니다.';
                    } else if (book.id === 'challenger-3') {
                        plusDesc.textContent = '기본 40일(783단어) + DAY PLUS(17단어) = 총 800단어 완강 코스로 배정됩니다.';
                    }
                }
            } else {
                plusSection.classList.add('hidden');
            }
        }

        const modal = document.getElementById('modal-batch-plan');
        const modalTitle = document.getElementById('batch-plan-modal-title');
        const modalDesc = document.getElementById('batch-plan-modal-desc');
        const targetName = document.getElementById('batch-plan-target-name');
        const totalItemsBadge = document.getElementById('batch-plan-total-items-badge');
        const startDateInput = document.getElementById('batch-plan-start-date');
        const startSubunitSelect = document.getElementById('batch-plan-start-subunit');

        if (modalTitle) modalTitle.textContent = `${book.title} 계획표 배정`;
        if (modalDesc) modalDesc.textContent = '학습 요일(주기)과 시작 DAY를 지정하여 맞춤형 플래너를 생성합니다.';
        if (targetName) targetName.textContent = book.title;
        if (totalItemsBadge) totalItemsBadge.textContent = `총 ${uniqueDays.length} DAYs`;

        const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
        if (startDateInput) startDateInput.value = todayStr;

        this.setBatchPlanWordsPreset('default');
        this.setBatchPlanDaysPreset('all');
        if (modal) modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    closeBatchPlanModal() {
        const modal = document.getElementById('modal-batch-plan');
        if (modal) modal.classList.add('hidden');
    }

    onBatchPlanPlusToggleChanged() {
        if (!this.currentBatchPlanConfig) return;
        const conf = this.currentBatchPlanConfig;
        const plusCheck = document.getElementById('batch-plan-include-plus-check');
        const includePlus = plusCheck ? plusCheck.checked : true;

        let activePool = conf.rawPool || conf.dataPool || [];
        if (!conf.rawPool) conf.rawPool = activePool;

        if (!includePlus) {
            activePool = conf.rawPool.filter(r => !r.isBooster);
        } else {
            activePool = conf.rawPool;
        }

        const uniqueDays = Array.from(new Set(activePool.map(r => r.DAY))).sort();
        conf.dataPool = activePool;
        conf.totalWords = activePool.length;
        conf.items = uniqueDays;
        conf.includePlus = includePlus;

        const totalItemsBadge = document.getElementById('batch-plan-total-items-badge');
        if (totalItemsBadge) {
            totalItemsBadge.textContent = `총 ${uniqueDays.length} DAYs (${activePool.length}단어)`;
        }

        this.setBatchPlanWordsPreset(conf.wordsPerDay || 'default');
    }

    setBatchPlanWordsPreset(wordsVal) {
        if (!this.currentBatchPlanConfig) return;
        this.currentBatchPlanConfig.wordsPerDay = wordsVal;

        document.querySelectorAll('.batch-words-preset-btn').forEach(btn => {
            const isMatch = (btn.dataset.words === String(wordsVal));
            btn.className = `batch-words-preset-btn px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                isMatch ? 'bg-blue-900 text-white border-blue-900 shadow-xs' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`;
        });

        const infoEl = document.getElementById('batch-plan-words-per-day-info');
        if (infoEl) {
            const totalWords = this.currentBatchPlanConfig.totalWords || 0;
            if (wordsVal === 'default') {
                const totalDays = (this.currentBatchPlanConfig.items || []).length || 1;
                const avg = Math.round(totalWords / totalDays);
                infoEl.textContent = `교재 기본값 (표준: ${avg}단어/DAY, 총 ${totalWords}단어)`;
            } else {
                const wpd = Number(wordsVal);
                const chunksCount = Math.ceil(totalWords / wpd);
                infoEl.textContent = `맞춤 설정: 하루 ${wpd}단어씩 • 총 ${chunksCount}회 코스 (${totalWords}단어 100% 보존)`;
            }
        }

        this.updateBatchPlanStartSubunitOptions();
        this.updateBatchPlanPreview();
    }

    updateBatchPlanStartSubunitOptions() {
        const startSubunitSelect = document.getElementById('batch-plan-start-subunit');
        if (!startSubunitSelect || !this.currentBatchPlanConfig) return;
        const conf = this.currentBatchPlanConfig;

        if (conf.type === 'reading') return;

        const totalWords = conf.totalWords || 0;
        const wordsVal = conf.wordsPerDay || 'default';

        if (wordsVal === 'default') {
            const uniqueDays = conf.items || [];
            startSubunitSelect.innerHTML = uniqueDays.map((d, idx) => `
                <option value="${idx}">
                    ${d}부터 시작 • 총 ${uniqueDays.length - idx}일 코스
                </option>
            `).join('');
        } else {
            const wpd = Number(wordsVal);
            const totalChunks = Math.ceil(totalWords / wpd);
            const options = [];
            for (let i = 0; i < totalChunks; i++) {
                const startNum = i * wpd + 1;
                const endNum = Math.min((i + 1) * wpd, totalWords);
                const remaining = totalChunks - i;
                options.push(`
                    <option value="${i}">
                        ${i + 1}회차 (${startNum}~${endNum}번)부터 시작 • 총 ${remaining}회 완강 코스
                    </option>
                `);
            }
            startSubunitSelect.innerHTML = options.join('');
        }
    }

    setBatchPlanDaysPreset(presetName) {
        const daysMap = {
            all: [1, 2, 3, 4, 5, 6, 0],
            mwf: [1, 3, 5],
            tt: [2, 4],
            tts: [2, 4, 6],
            weekdays: [1, 2, 3, 4, 5],
            weekend: [6, 0]
        };

        const activeDays = daysMap[presetName] || daysMap.all;
        document.querySelectorAll('.batch-day-check').forEach(cb => {
            const val = Number(cb.value);
            cb.checked = activeDays.includes(val);
        });

        // 상단 드롭다운 값 동기화
        const quickSelect = document.getElementById('batch-plan-quick-pattern-select');
        if (quickSelect) {
            quickSelect.value = (daysMap[presetName]) ? presetName : 'custom';
        }

        // 프리셋 버튼 활성화 스타일 동기화
        document.querySelectorAll('.batch-plan-preset-btn').forEach(btn => {
            const isMatch = (btn.dataset.preset === presetName);
            btn.className = `batch-plan-preset-btn px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                isMatch ? 'bg-blue-900 text-white border-blue-900 shadow-xs' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`;
        });

        this.updateBatchPlanPreview();
    }

    onBatchPlanQuickPatternChanged(patternVal) {
        if (patternVal === 'custom') {
            // 직접 선택 모드: 프리셋 하이라이트만 해제하고 현재 체크박스 상태 유지
            document.querySelectorAll('.batch-plan-preset-btn').forEach(btn => {
                btn.className = 'batch-plan-preset-btn px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer bg-white text-slate-600 border-slate-200 hover:bg-slate-100';
            });
            this.updateBatchPlanPreview();
            return;
        }
        this.setBatchPlanDaysPreset(patternVal);
    }

    clearAllBatchPlanDays() {
        document.querySelectorAll('.batch-day-check').forEach(cb => {
            cb.checked = false;
        });
        const quickSelect = document.getElementById('batch-plan-quick-pattern-select');
        if (quickSelect) quickSelect.value = 'custom';
        document.querySelectorAll('.batch-plan-preset-btn').forEach(btn => {
            btn.className = 'batch-plan-preset-btn px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer bg-white text-slate-600 border-slate-200 hover:bg-slate-100';
        });
        this.updateBatchPlanPreview();
    }

    selectAllBatchPlanDays() {
        this.setBatchPlanDaysPreset('all');
    }

    onBatchPlanDayCheckboxChanged() {
        const checkedDays = this.getSelectedBatchPlanDays();
        const quickSelect = document.getElementById('batch-plan-quick-pattern-select');

        // 체크 상태가 특정 프리셋과 일치하는지 확인
        const daysMap = {
            all: [1, 2, 3, 4, 5, 6, 0],
            mwf: [1, 3, 5],
            tt: [2, 4],
            tts: [2, 4, 6],
            weekdays: [1, 2, 3, 4, 5],
            weekend: [6, 0]
        };

        let matchedPreset = 'custom';
        for (const [key, arr] of Object.entries(daysMap)) {
            if (arr.length === checkedDays.length && arr.every(d => checkedDays.includes(d))) {
                matchedPreset = key;
                break;
            }
        }

        if (quickSelect) quickSelect.value = matchedPreset;

        document.querySelectorAll('.batch-plan-preset-btn').forEach(btn => {
            const isMatch = (btn.dataset.preset === matchedPreset);
            btn.className = `batch-plan-preset-btn px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                isMatch ? 'bg-blue-900 text-white border-blue-900 shadow-xs' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`;
        });

        this.updateBatchPlanPreview();
    }

    getSelectedBatchPlanDays() {
        const checked = [];
        document.querySelectorAll('.batch-day-check:checked').forEach(cb => {
            checked.push(Number(cb.value));
        });
        return checked;
    }

    updateBatchPlanPreview() {
        if (!this.currentBatchPlanConfig || !window.storage) return;

        const startDateInput = document.getElementById('batch-plan-start-date');
        const startSubunitSelect = document.getElementById('batch-plan-start-subunit');
        const previewCount = document.getElementById('batch-plan-preview-count');
        const previewDates = document.getElementById('batch-plan-preview-dates');
        const previewDesc = document.getElementById('batch-plan-preview-desc');

        const startDate = (startDateInput && startDateInput.value) ? startDateInput.value : window.storage.getTodayDateString();
        const startIdx = startSubunitSelect ? Number(startSubunitSelect.value) : 0;
        const conf = this.currentBatchPlanConfig;
        const totalItems = conf.items || [];
        const totalWords = conf.totalWords || totalItems.length;
        const wordsVal = conf.wordsPerDay || 'default';

        let totalSessionsCount = totalItems.length;
        let wpd = 0;
        if (conf.type === 'voca' && wordsVal !== 'default') {
            wpd = Number(wordsVal);
            totalSessionsCount = Math.ceil(totalWords / wpd);
        }

        const remainingCount = Math.max(1, totalSessionsCount - startIdx);
        const selectedDays = this.getSelectedBatchPlanDays();

        if (selectedDays.length === 0) {
            if (previewCount) previewCount.textContent = '0회차 (요일 미선택)';
            if (previewDates) previewDates.textContent = '학습할 요일을 최소 1개 이상 선택해 주세요.';
            if (previewDesc) previewDesc.textContent = '요일 체크박스를 선택하시면 자동으로 일정이 계산됩니다.';
            return;
        }

        const scheduledDates = window.storage.calculateScheduledDates(startDate, remainingCount, selectedDays);

        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        const startD = new Date(scheduledDates[0] || startDate);
        const endD = new Date(scheduledDates[scheduledDates.length - 1] || startDate);

        const startDayStr = `${scheduledDates[0]} (${dayNames[startD.getDay()]})`;
        const endDayStr = `${scheduledDates[scheduledDates.length - 1]} (${dayNames[endD.getDay()]})`;

        const selectedDayLabels = selectedDays.map(d => dayNames[d]).join('·');

        if (conf.type === 'voca' && wordsVal !== 'default') {
            const remainder = totalWords % wpd;
            if (previewCount) previewCount.textContent = `총 ${scheduledDates.length}회차 배정 (하루 ${wpd}단어씩)`;
            if (previewDates) previewDates.textContent = `${startDayStr} ~ ${endDayStr}`;
            if (previewDesc) {
                if (remainder === 0) {
                    previewDesc.textContent = `선택 요일: [${selectedDayLabels}] 매회 정확히 ${wpd}단어씩 배정되어 총 ${totalWords}단어가 100% 완전 편성됩니다.`;
                } else {
                    previewDesc.textContent = `선택 요일: [${selectedDayLabels}] 매회 ${wpd}단어씩 배정되며, 마지막 날은 잔여 ${remainder}단어가 모두 배정되어 전체 ${totalWords}단어가 단 1개도 빠짐없이 보존됩니다.`;
                }
            }
        } else {
            if (previewCount) previewCount.textContent = `총 ${scheduledDates.length}회차 배정 (교재 표준 DAY)`;
            if (previewDates) previewDates.textContent = `${startDayStr} ~ ${endDayStr}`;
            if (previewDesc) {
                previewDesc.textContent = `선택 요일: [${selectedDayLabels}] 매주 지정 요일에 하루 1회차(교재 DAY)씩 자동 배정됩니다.`;
            }
        }
    }

    executeBatchPlanRegistration() {
        if (!this.currentBatchPlanConfig || !window.storage) return;

        const startDateInput = document.getElementById('batch-plan-start-date');
        const startSubunitSelect = document.getElementById('batch-plan-start-subunit');

        const startDate = (startDateInput && startDateInput.value) ? startDateInput.value : window.storage.getTodayDateString();
        const startIdx = startSubunitSelect ? Number(startSubunitSelect.value) : 0;
        const selectedDays = this.getSelectedBatchPlanDays();

        if (selectedDays.length === 0) {
            alert('학습을 진행할 요일을 최소 1개 이상 선택해 주세요.');
            return;
        }

        const conf = this.currentBatchPlanConfig;

        // 다른 교재 중복 등록 검사 및 플랜 충돌 방지 로직 (요구사항 4)
        const allPlanWords = (window.storage.words || []).filter(w => !String(w.id || '').startsWith('sample-') && w.planDate);
        let hasOtherPlans = false;
        if (conf.type === 'voca') {
            hasOtherPlans = allPlanWords.some(w => {
                if (w.isReadingPassage) return false;
                if (conf.isNeungryul && !w.isNeungryul2025) return true;
                if (conf.isNeungryulEtym && !(w.isNeungryulEtym || w.isNeungryulEtym2025)) return true;
                if (!conf.isNeungryul && !conf.isNeungryulEtym && w.curatedCollectionId && w.curatedCollectionId !== conf.bookId) return true;
                return false;
            });
        } else if (conf.type === 'reading') {
            hasOtherPlans = allPlanWords.some(w => w.isReadingPassage && w.readingUnitId !== conf.targetId);
        }

        if (hasOtherPlans) {
            const replaceChoice = confirm(
                `💡 [교재 등록 안내]\n플래너에 이미 다른 교재의 학습 계획이 등록되어 있습니다.\n\n` +
                `• [확인]: 기존의 다른 교재 계획을 모두 깔끔하게 정리하고, 이번 [${conf.bookTitle || conf.targetTitle || '새 교재'}]로 새롭게 시작합니다. (권장: 플랜 중복 방지)\n` +
                `• [취소]: 기존 다른 교재 계획을 유지한 채 함께 병행하여 등록합니다.`
            );
            if (replaceChoice) {
                // 기존 다른 계획 정리
                if (conf.type === 'voca') {
                    window.storage.words = window.storage.words.filter(w => w.isReadingPassage || String(w.id || '').startsWith('sample-'));
                } else if (conf.type === 'reading') {
                    window.storage.words = window.storage.words.filter(w => !w.isReadingPassage || String(w.id || '').startsWith('sample-'));
                }
                window.storage.saveWords();
            }
        }

        let result = null;

        if (conf.type === 'reading') {
            result = window.storage.registerReadingUnit(conf.targetId, startDate, selectedDays, startIdx);
            
            if (typeof confetti === 'function') {
                confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
            }

            alert(`🎉 [${result.unitTitle}] 독해 학습 계획이 플래너에 배정되었습니다!\n\n` +
                  `• 시작 소단원: ${result.startPassageIndex + 1}번 지문 (${result.startPassageTitle.slice(0, 18)}...)\n` +
                  `• 총 배정 지문: ${result.addedPassages}편\n` +
                  `• 배정 기간: ${result.startDate} ~ ${result.endDate}\n` +
                  `• 지정 요일에 맞추어 플래너에 성공적으로 등록되었습니다.`);

            if (window.readingEngine) window.readingEngine.renderUnitBanner();
        } else if (conf.type === 'voca') {
            const wpd = conf.wordsPerDay || 'default';
            if (conf.isNeungryul) {
                result = window.storage.registerAllNeungryulDays(startDate, selectedDays, startIdx, wpd);
            } else if (conf.isNeungryulEtym) {
                result = window.storage.registerAllNeungryulEtymDays(startDate, selectedDays, startIdx, wpd);
            } else {
                result = window.storage.registerAllCuratedDays(conf.bookId, startDate, selectedDays, startIdx, wpd, (conf.includePlus !== undefined ? conf.includePlus : true));
            }

            if (typeof confetti === 'function') {
                confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
            }

            const wpdLabel = (conf.wordsPerDay && conf.wordsPerDay !== 'default') ? `하루 ${conf.wordsPerDay}단어 맞춤 코스` : '교재 기본 권장(표준)';
            alert(`🎉 [${conf.bookTitle}] 단어 학습 계획이 플래너에 배정되었습니다!\n\n` +
                  `• 1회 학습량: ${wpdLabel}\n` +
                  `• 시작 회차: ${result.startDayName}\n` +
                  `• 총 배정 회차: ${result.totalDays}회차 (총 ${result.addedCount}단어 100% 보존)\n` +
                  `• 배정 기간: ${result.startDate} ~ ${result.endDate}\n` +
                  `• 지정 요일에 맞추어 플래너에 성공적으로 등록되었습니다.`);

            if (window.ocrEngine) window.ocrEngine.renderNeungryulVocaSection();
        }

        this.closeBatchPlanModal();

        const originTab = (conf && conf.fromTab) || this.currentTab;

        if (window.plannerEngine) {
            window.plannerEngine.currentDayBookFilter = 'all';
            const todayStr = window.storage.getTodayDateString();
            const todayWords = window.storage.getWordsByDate(todayStr).filter(w => !String(w.id || '').startsWith('sample-'));
            const targetFocusDate = (todayWords.length > 0) ? todayStr : (result && result.startDate ? result.startDate : todayStr);
            window.plannerEngine.selectedDateStr = targetFocusDate;
            const [fy, fm] = targetFocusDate.split('-').map(Number);
            if (fy && fm) {
                window.plannerEngine.currentYear = fy;
                window.plannerEngine.currentMonth = fm - 1;
            }
            window.plannerEngine.render();
        }
        if (this.renderDashboard) this.renderDashboard();

        if (originTab === 'planner') {
            this.switchTab('planner');
        } else {
            const jumpToPlanner = confirm('📅 학습 일정이 성공적으로 배정되었습니다!\n\n지금 [학습 플래너]로 바로 이동하여 배정된 캘린더와 상세 과제를 확인하시겠습니까?');
            if (jumpToPlanner) {
                this.switchTab('planner');
            }
        }
    }

}

// DOMContentLoaded 또는 readyState에 맞춰 안전하게 구동
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new AppController();
    });
} else {
    window.app = new AppController();
}
