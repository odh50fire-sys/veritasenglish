/**
 * Veritas English - 신규 학습자 온보딩 및 레벨테스트 연계 맞춤 로드맵 엔진 (Onboarding Engine)
 * 
 * 1. 첫 방문자 웰컴 모달 (Welcome Modal) - 레벨테스트 즉시 유도
 * 2. 레벨테스트 직후 "다음에 해야 할 일 4대 핵심 미션" (Post-Level Test Next Steps Roadmap)
 * 3. 대시보드 스타터 온보딩 퀘스트 트래커 위젯 (4-Step Starter Quest)
 * 4. 단계별 완료 감지 및 보너스 EXP 수여
 */

class OnboardingEngine {
    constructor() {
        this.storageKey = 'veritas_starter_quest_v1';
        this.welcomeStorageKey = 'veritas_welcome_shown_v1';
        this.status = this.loadQuestStatus();
        this.init();
    }

    init() {
        // 첫 방문 환영 체크 (DOM 로드 후 약간의 지연 후 띄움)
        setTimeout(() => {
            this.checkFirstVisitWelcome();
            this.renderDashboardQuest();
        }, 600);
    }

    /**
     * 퀘스트 상태 로드
     */
    loadQuestStatus() {
        const defaultStatus = {
            levelTest: false,
            vocaExplored: false,
            flashcardFlipped: false,
            readingSolved: false,
            allCompletedBonusClaimed: false,
            dismissed: false,
            flippedCount: 0
        };

        try {
            const raw = localStorage.getItem(this.storageKey);
            if (!raw) return defaultStatus;
            const parsed = JSON.parse(raw);
            return { ...defaultStatus, ...parsed };
        } catch (e) {
            return defaultStatus;
        }
    }

    /**
     * 퀘스트 상태 저장
     */
    saveQuestStatus() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.status));
        } catch (e) {}
    }

    /**
     * 첫 방문 환영 모달 체크
     */
    checkFirstVisitWelcome() {
        const welcomeShown = localStorage.getItem(this.welcomeStorageKey);
        const hasHistory = window.storage && window.storage.userProfile && 
                           Array.isArray(window.storage.userProfile.levelTestHistory) && 
                           window.storage.userProfile.levelTestHistory.length > 0;

        // 아직 레벨테스트를 본 적이 없고 웰컴 모달을 보지 않은 경우 웰컴 모달 표시
        if (!welcomeShown && !hasHistory) {
            this.openWelcomeModal();
            localStorage.setItem(this.welcomeStorageKey, 'true');
        }
    }

    /**
     * 첫 방문 환영 웰컴 모달 열기
     */
    openWelcomeModal() {
        const modal = document.getElementById('modal-onboarding-welcome');
        if (!modal) return;
        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    closeWelcomeModal() {
        const modal = document.getElementById('modal-onboarding-welcome');
        if (modal) modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    /**
     * 웰컴 모달에서 레벨테스트 바로 시작
     */
    startLevelTestFromWelcome() {
        this.closeWelcomeModal();
        if (window.levelTestEngine && typeof window.levelTestEngine.openModal === 'function') {
            window.levelTestEngine.openModal('adaptive');
        }
    }

    /**
     * 퀘스트 단계 완료 처리
     */
    completeQuestStep(stepKey, amount = 1) {
        if (!this.status) return;

        if (stepKey === 'flashcardFlipped') {
            this.status.flippedCount = (this.status.flippedCount || 0) + amount;
            if (this.status.flippedCount >= 5 && !this.status.flashcardFlipped) {
                this.status.flashcardFlipped = true;
                this.grantStepExp(50, '스타터 퀘스트: 플래시카드 5단어 암기 완료');
            }
        } else if (!this.status[stepKey]) {
            this.status[stepKey] = true;
            if (stepKey === 'levelTest') {
                // 레벨테스트 완료 시 EXP는 levelTestEngine에서 150 지급됨
            } else if (stepKey === 'vocaExplored') {
                this.grantStepExp(50, '스타터 퀘스트: 내 레벨 추천 단어장 열람');
            } else if (stepKey === 'readingSolved') {
                this.grantStepExp(100, '스타터 퀘스트: 추천 내신 독해 지문 풀이 완료');
            }
        }

        // 전체 완료 체크
        if (this.status.levelTest && this.status.vocaExplored && this.status.flashcardFlipped && this.status.readingSolved && !this.status.allCompletedBonusClaimed) {
            this.status.allCompletedBonusClaimed = true;
            this.grantStepExp(200, '🎉 스타터 온보딩 퀘스트 전체 올클리어 보너스!');
            if (typeof confetti === 'function') {
                try { confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); } catch(e) {}
            }
        }

        this.saveQuestStatus();
        this.renderDashboardQuest();
    }

    grantStepExp(exp, reason) {
        if (window.storage && typeof window.storage.addExp === 'function') {
            window.storage.addExp(exp, reason);
            window.storage.saveUserProfile();
            if (window.achievements && typeof window.achievements.renderHeaderCapsule === 'function') {
                window.achievements.renderHeaderCapsule();
            }
        }
    }

    /**
     * 대시보드 스타터 퀘스트 위젯 렌더링
     */
    renderDashboardQuest() {
        const container = document.getElementById('dashboard-starter-quest-container');
        if (!container) return;

        // 만약 사용자가 숨겼다면 렌더링 안 함
        if (this.status.dismissed) {
            container.innerHTML = `
                <div class="flex items-center justify-between p-3 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-blue-900">
                    <span class="flex items-center gap-1.5 font-serif font-bold">
                        <i data-lucide="compass" class="w-4 h-4 text-blue-700"></i>
                        신규 학습자 스타터 온보딩 로드맵이 접혀있습니다.
                    </span>
                    <button type="button" class="underline font-bold text-blue-800 hover:text-blue-950 cursor-pointer" onclick="window.onboardingEngine.toggleDismiss(false)">
                        다시 열기
                    </button>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        // 이미 레벨테스트 기록이 있는지 스토리지와 동기화
        const hasHistory = window.storage && window.storage.userProfile && 
                           Array.isArray(window.storage.userProfile.levelTestHistory) && 
                           window.storage.userProfile.levelTestHistory.length > 0;
        if (hasHistory) {
            this.status.levelTest = true;
        }

        const currentLvl = window.storage ? window.storage.getAcademicLevel() : 3;
        const info = window.storage ? window.storage.getLevelInfo(currentLvl) : null;

        const steps = [
            {
                key: 'levelTest',
                num: 1,
                title: '실력 진단 레벨테스트 응시',
                desc: this.status.levelTest 
                    ? `완료! 내 레벨: <strong class="text-amber-600 font-mono">${info ? info.badge : 'Lv.' + currentLvl}</strong>` 
                    : '10단계 중 나의 정확한 실력 위치를 파악하고 맞춤 코스 받기',
                exp: '+150 EXP',
                done: this.status.levelTest,
                actionText: this.status.levelTest ? '다시 진단하기' : '지금 진단하기',
                actionFn: "window.levelTestEngine && window.levelTestEngine.openModal('adaptive')"
            },
            {
                key: 'vocaExplored',
                num: 2,
                title: '내 레벨 추천 교재 단어장 열람',
                desc: `추천 교재: <strong class="text-blue-900 font-mono">${info ? this.getVocaBookName(info.recommendedVocas[0]) : '중등 필수 단어장'}</strong> 둘러보기`,
                exp: '+50 EXP',
                done: this.status.vocaExplored,
                actionText: '단어장 열기',
                actionFn: `window.onboardingEngine.goToRecommendedVoca('${info ? info.recommendedVocas[0] : ''}')`
            },
            {
                key: 'flashcardFlipped',
                num: 3,
                title: '3D 플립 플래시카드 5단어 넘기기',
                desc: `에빙하우스 망각곡선 기반 단어 암기 훈련 체험 (${this.status.flippedCount || 0}/5단어)`,
                exp: '+50 EXP',
                done: this.status.flashcardFlipped,
                actionText: '플래시카드 가기',
                actionFn: "window.onboardingEngine.goToFlashcards()"
            },
            {
                key: 'readingSolved',
                num: 4,
                title: '추천 내신 독해 지문 1편 풀기',
                desc: `추천 학기: <strong class="text-amber-800 font-mono">${info ? info.recommendedPassageSemester : '중 1-1'}</strong> 내신 지문 독해 및 서술형 도전`,
                exp: '+100 EXP',
                done: this.status.readingSolved,
                actionText: '독해 지문 풀기',
                actionFn: "window.onboardingEngine.goToReading()"
            }
        ];

        const completedCount = steps.filter(s => s.done).length;
        const progressPct = Math.round((completedCount / steps.length) * 100);
        const isAllDone = (completedCount === steps.length);

        container.innerHTML = `
            <div class="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white border-2 ${isAllDone ? 'border-emerald-400/50' : 'border-amber-400/40'} shadow-xl relative overflow-hidden">
                <!-- 배경 장식 글로우 -->
                <div class="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"></div>

                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 relative z-10">
                    <div class="flex items-center gap-3.5">
                        <div class="w-12 h-12 rounded-2xl ${isAllDone ? 'bg-emerald-500' : 'bg-gradient-to-tr from-amber-400 to-amber-200 text-blue-950'} flex items-center justify-center font-black text-2xl shadow-md shrink-0">
                            ${isAllDone ? '🏆' : '🚀'}
                        </div>
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="px-2.5 py-0.5 rounded-full ${isAllDone ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30' : 'bg-amber-400/20 text-amber-300 border-amber-400/30'} font-mono text-[11px] font-bold border">
                                    ${isAllDone ? 'ALL QUESTS CLEARED' : 'BEGINNER ROADMAP'}
                                </span>
                                <span class="text-xs font-mono text-slate-300">
                                    달성도: <strong class="text-white">${completedCount} / 4</strong> (${progressPct}%)
                                </span>
                            </div>
                            <h3 class="font-serif font-black text-lg sm:text-xl text-white">
                                ${isAllDone ? '🎉 축하합니다! 스타터 온보딩 퀘스트 올클리어!' : '신규 학습자 필수 코스: 4-Step 스타터 퀘스트'}
                            </h3>
                            <p class="text-xs text-slate-300 mt-0.5">
                                ${isAllDone ? 'Veritas English의 핵심 학습 루틴을 마스터하셨습니다. 매일 꾸준한 복습으로 영재 티어를 높여보세요!' : '레벨테스트 후 아래 4가지 단계를 차례대로 완료하고 총 +450 EXP 보너스를 획득하세요.'}
                            </p>
                        </div>
                    </div>

                    <div class="flex items-center gap-2 self-end sm:self-auto shrink-0">
                        ${isAllDone ? `
                            <span class="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-bold flex items-center gap-1.5">
                                <i data-lucide="award" class="w-4 h-4 text-emerald-400"></i>
                                스타터 마스터 완료 (+200 EXP 지급됨)
                            </span>
                        ` : ''}
                        <button type="button" class="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer text-xs" onclick="window.onboardingEngine.toggleDismiss(true)" title="위젯 접기">
                            <i data-lucide="x" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>

                <!-- 프로그레스 바 -->
                <div class="w-full bg-white/10 rounded-full h-2 mb-6 overflow-hidden relative z-10">
                    <div class="bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-300 h-2 rounded-full transition-all duration-500" style="width: ${progressPct}%;"></div>
                </div>

                <!-- 4단계 카드 그리드 -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 relative z-10">
                    ${steps.map(s => `
                        <div class="p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                            s.done 
                                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100' 
                                : 'bg-white/10 border-white/15 hover:border-amber-400/50 text-white'
                        }">
                            <div>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="w-6 h-6 rounded-lg flex items-center justify-center font-mono font-black text-xs ${
                                        s.done ? 'bg-emerald-500 text-white' : 'bg-white/20 text-amber-300'
                                    }">
                                        ${s.done ? '✓' : s.num}
                                    </span>
                                    <span class="text-[10px] font-mono px-2 py-0.5 rounded-md ${s.done ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-400/20 text-amber-300'} font-bold">
                                        ${s.exp}
                                    </span>
                                </div>
                                <h4 class="font-serif font-bold text-sm ${s.done ? 'text-emerald-200' : 'text-white'} mb-1">
                                    ${s.title}
                                </h4>
                                <p class="text-xs ${s.done ? 'text-emerald-300/80' : 'text-slate-300'} leading-relaxed mb-4">
                                    ${s.desc}
                                </p>
                            </div>
                            <button type="button" class="w-full py-2 rounded-xl font-serif font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer ${
                                s.done 
                                    ? 'bg-emerald-800/50 hover:bg-emerald-800 text-emerald-200 border border-emerald-600/30' 
                                    : 'bg-amber-400 hover:bg-amber-300 text-blue-950 shadow-sm'
                            }" onclick="${s.actionFn}">
                                <span>${s.actionText}</span>
                                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }

    toggleDismiss(isDismissed) {
        this.status.dismissed = isDismissed;
        this.saveQuestStatus();
        this.renderDashboardQuest();
    }

    /**
     * 레벨테스트 직후 "다음에 할 일 맞춤 로드맵" 전용 모달 열기
     */
    showPostLevelTestRoadmap(assignedLevel) {
        // 1단계 레벨테스트 완료 반영
        this.completeQuestStep('levelTest');

        const modal = document.getElementById('modal-post-leveltest-roadmap');
        if (!modal) return;

        const info = window.storage ? window.storage.getLevelInfo(assignedLevel) : null;
        const vocaTitle = info ? this.getVocaBookName(info.recommendedVocas[0]) : '중등 추천 단어장';
        const semester = info ? info.recommendedPassageSemester : '중 1-1';

        const body = document.getElementById('post-leveltest-roadmap-body');
        if (body) {
            body.innerHTML = `
                <!-- 레벨 축하 헤더 카드 -->
                <div class="rounded-2xl p-5 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white border-2 border-amber-400 shadow-md mb-6 flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-amber-400 text-blue-950 flex items-center justify-center font-black text-2xl shadow-inner shrink-0">
                        🎯
                    </div>
                    <div>
                        <span class="inline-block px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono text-[10px] font-bold border border-amber-400/30 mb-1">
                            Diagnostic Completed
                        </span>
                        <h3 class="font-serif font-black text-xl text-white">
                            회원님의 진단 레벨: <span class="text-amber-300">${info ? info.badge : 'Lv.' + assignedLevel} ${info ? info.nameKo : ''}</span>
                        </h3>
                        <p class="text-xs text-slate-300 mt-0.5">
                            현재 실력 위치를 확인하셨습니다! 이제 아래 3가지 맞춤 추천 코스로 오늘 바로 학습을 시작하세요.
                        </p>
                    </div>
                </div>

                <!-- 3대 추천 액션 카드 -->
                <div class="space-y-3.5 mb-6">
                    <!-- 액션 1: 맞춤 단어장 -->
                    <div class="p-4 sm:p-5 rounded-2xl border-2 border-blue-200 bg-blue-50/40 hover:bg-blue-50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div class="flex items-start gap-3.5">
                            <span class="w-8 h-8 rounded-xl bg-blue-900 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                                1
                            </span>
                            <div>
                                <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-mono text-[10px] font-bold">1단계 필수 추천</span>
                                <h4 class="font-serif font-black text-base text-blue-950 mt-1 mb-0.5">
                                    ${vocaTitle} 단어장 열기
                                </h4>
                                <p class="text-xs text-slate-600">
                                    Lv.${assignedLevel} 실력에 맞춘 필수 영단어를 확인하고 오늘 암기할 단어로 지정하세요.
                                </p>
                            </div>
                        </div>
                        <button type="button" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-sm cursor-pointer" onclick="window.onboardingEngine.goToRecommendedVoca('${info ? info.recommendedVocas[0] : ''}')">
                            <span>단어장 바로가기</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>

                    <!-- 액션 2: 3D 플래시카드 -->
                    <div class="p-4 sm:p-5 rounded-2xl border-2 border-indigo-200 bg-indigo-50/40 hover:bg-indigo-50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div class="flex items-start gap-3.5">
                            <span class="w-8 h-8 rounded-xl bg-indigo-900 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                                2
                            </span>
                            <div>
                                <span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 font-mono text-[10px] font-bold">2단계 암기 훈련</span>
                                <h4 class="font-serif font-black text-base text-indigo-950 mt-1 mb-0.5">
                                    3D 플립 플래시카드로 5개 단어 즉시 넘기기
                                </h4>
                                <p class="text-xs text-slate-600">
                                    원어민 발음(TTS)을 들으며 카드를 뒤집어 장기기억으로 전환하는 암기를 체험하세요.
                                </p>
                            </div>
                        </div>
                        <button type="button" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-sm cursor-pointer" onclick="window.onboardingEngine.goToFlashcards()">
                            <span>플래시카드 시작</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>

                    <!-- 액션 3: 맞춤 독해 지문 -->
                    <div class="p-4 sm:p-5 rounded-2xl border-2 border-amber-200 bg-amber-50/40 hover:bg-amber-50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div class="flex items-start gap-3.5">
                            <span class="w-8 h-8 rounded-xl bg-amber-800 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                                3
                            </span>
                            <div>
                                <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[10px] font-bold">3단계 실전 독해</span>
                                <h4 class="font-serif font-black text-base text-amber-950 mt-1 mb-0.5">
                                    ${semester} 내신 독해 지문 1편 풀기
                                </h4>
                                <p class="text-xs text-slate-600">
                                    지문 직독직해와 객관식/서술형 문제를 풀며 첫 독해 완료 경험치를 획득하세요.
                                </p>
                            </div>
                        </div>
                        <button type="button" class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-sm cursor-pointer" onclick="window.onboardingEngine.goToReading('${semester}')">
                            <span>독해 지문 바로 풀기</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>

                <!-- 하단 플래너 팁 안내 바 -->
                <div class="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 text-xs flex items-center justify-between gap-3">
                    <span class="flex items-center gap-1.5">
                        <i data-lucide="calendar" class="w-4 h-4 text-blue-900"></i>
                        매일 15분 학습 루틴을 만들고 싶다면? <strong>학습 플래너</strong>에서 일일 목표를 설정해보세요.
                    </span>
                    <button type="button" class="underline font-bold text-blue-900 hover:text-blue-950 cursor-pointer shrink-0" onclick="window.onboardingEngine.goToPlanner()">
                        플래너 열기 →
                    </button>
                </div>
            `;
        }

        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    closePostLevelTestRoadmap() {
        const modal = document.getElementById('modal-post-leveltest-roadmap');
        if (modal) modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    // ------------------------------------------------------------------------
    // 네비게이션 바로가기 헬퍼들
    // ------------------------------------------------------------------------
    goToRecommendedVoca(colId) {
        this.closePostLevelTestRoadmap();
        this.closeWelcomeModal();
        if (window.levelTestEngine) window.levelTestEngine.closeModal(true);

        this.completeQuestStep('vocaExplored');

        if (window.app && typeof window.app.switchTab === 'function') {
            window.app.switchTab('ocr');
        }
        if (colId && window.ocrEngine && typeof window.ocrEngine.selectVocaBook === 'function') {
            setTimeout(() => {
                window.ocrEngine.selectVocaBook(colId);
            }, 150);
        }
    }

    goToFlashcards() {
        this.closePostLevelTestRoadmap();
        this.closeWelcomeModal();
        if (window.levelTestEngine) window.levelTestEngine.closeModal(true);

        if (window.app && typeof window.app.switchTab === 'function') {
            window.app.switchTab('flashcards');
        }
    }

    goToReading(semester) {
        this.closePostLevelTestRoadmap();
        this.closeWelcomeModal();
        if (window.levelTestEngine) window.levelTestEngine.closeModal(true);

        if (window.app && typeof window.app.switchTab === 'function') {
            window.app.switchTab('reading');
        }
    }

    goToPlanner() {
        this.closePostLevelTestRoadmap();
        this.closeWelcomeModal();
        if (window.levelTestEngine) window.levelTestEngine.closeModal(true);

        if (window.app && typeof window.app.switchTab === 'function') {
            window.app.switchTab('planner');
        }
    }

    getVocaBookName(colId) {
        if (!colId) return '중등 추천 단어장';
        if (colId === 'neungryul2025') return '능률 VOCA 중등 고난도 (Lv.7)';
        if (colId === 'neungryul_etym_2025') return '능률 VOCA 어원편 중등 (Lv.8)';
        const cols = window.CURATED_COLLECTIONS || [];
        const found = cols.find(c => c.id === colId);
        return found ? found.title : colId;
    }
}

// 전역 인스턴스 등록
window.onboardingEngine = new OnboardingEngine();
