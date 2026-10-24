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
        try { this.initNavigation(); } catch (e) { console.error('Error in initNavigation:', e); }
        try { this.initDashboardWidgets(); } catch (e) { console.error('Error in initDashboardWidgets:', e); }
        try { this.initModals(); } catch (e) { console.error('Error in initModals:', e); }
        try { this.switchTab('dashboard'); } catch (e) { console.error('Error in switchTab:', e); }

        // 첫 진입 시 Lucide 아이콘 활성화
        if (window.lucide) {
            window.lucide.createIcons();
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
            window.reviewManager.render();
        } else if (tabName === 'expressions') {
            window.nativeExpressionsEngine.render();
        } else if (tabName === 'dictionary') {
            window.dictionaryEngine.render();
        } else if (tabName === 'reading') {
            window.readingEngine.render();
        } else if (tabName === 'planner') {
            window.plannerEngine.render();
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

    initDashboardWidgets() {
        this.renderDashboard();
    }

    renderDashboard() {
        try {
            const stats = window.storage ? window.storage.getStatistics() : { total: 0, mastered: 0, dueCount: 0, weakCount: 0 };
            const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
            const todayWords = window.storage ? window.storage.getWordsByDate(todayStr).length : 0;
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

            // 맞춤 바로가기 2개 렌더링
            try { this.renderHeroShortcuts(); } catch (e) { console.error('Error in renderHeroShortcuts:', e); }

            // 단기 vs 장기 학업 목표 트래커 렌더링
            try { this.renderGoalTracker(); } catch (e) { console.error('Error in renderGoalTracker:', e); }

            // 오늘 하루 미니 학습량 게이지 갱신
            const progressPct = Math.min(100, Math.round((todayWords / target) * 100));
            const progBar = document.getElementById('dash-today-progress-bar');
            const progText = document.getElementById('dash-today-progress-text');
            if (progBar) progBar.style.width = `${progressPct}%`;
            if (progText) progText.textContent = `${todayWords} / ${target} 단어 (${progressPct}%)`;

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
        } catch (e) {
            console.error('Critical error in renderDashboard:', e);
        } finally {
            if (window.lucide) {
                window.lucide.createIcons();
            }
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
        const daily = getDailyExpressions(todayStr, offset, pastCompletedIds);
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

    openReadingBatchPlanModal(unit = null) {
        if (!unit) {
            unit = window.readingEngine ? window.readingEngine.getCurrentUnit() : null;
        }
        if (!unit) return;

        const passages = window.READING_PASSAGES || (typeof READING_PASSAGES !== 'undefined' ? READING_PASSAGES : []);
        const unitPassages = passages.filter(p => p.unitId === unit.unitId);

        this.currentBatchPlanConfig = {
            type: 'reading',
            targetId: unit.unitId,
            unitTitle: unit.unitTitle,
            items: unitPassages
        };

        const modal = document.getElementById('modal-batch-plan');
        const modalTitle = document.getElementById('batch-plan-modal-title');
        const modalDesc = document.getElementById('batch-plan-modal-desc');
        const targetName = document.getElementById('batch-plan-target-name');
        const totalItemsBadge = document.getElementById('batch-plan-total-items-badge');
        const startDateInput = document.getElementById('batch-plan-start-date');
        const startSubunitSelect = document.getElementById('batch-plan-start-subunit');

        if (modalTitle) modalTitle.textContent = `${unit.unitTitle} 계획표 배정`;
        if (modalDesc) modalDesc.textContent = '학습 요일(주기)과 시작 소단원을 지정하여 맞춤형 플래너를 생성합니다.';
        if (targetName) targetName.textContent = unit.unitTitle;
        if (totalItemsBadge) totalItemsBadge.textContent = `총 ${unitPassages.length}개 지문`;

        const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
        if (startDateInput) startDateInput.value = todayStr;

        if (startSubunitSelect) {
            startSubunitSelect.innerHTML = unitPassages.map((p, idx) => `
                <option value="${idx}">
                    ${idx + 1}번 지문부터 (${p.title.slice(0, 20)}...) • 총 ${unitPassages.length - idx}편
                </option>
            `).join('');
        }

        this.setBatchPlanDaysPreset('all');
        if (modal) modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    openVocaBatchPlanModal(book = null) {
        if (!book) {
            book = window.ocrEngine ? window.ocrEngine.getCurrentBookInfo() : null;
        }
        if (!book) return;

        const dataPool = book.dataPool || [];
        const uniqueDays = Array.from(new Set(dataPool.map(r => r.DAY))).sort();

        this.currentBatchPlanConfig = {
            type: 'voca',
            bookId: book.id,
            bookTitle: book.title,
            isNeungryul: book.isNeungryul,
            isNeungryulEtym: book.isNeungryulEtym,
            items: uniqueDays
        };

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

        if (startSubunitSelect) {
            startSubunitSelect.innerHTML = uniqueDays.map((d, idx) => `
                <option value="${idx}">
                    ${d}부터 시작 • 총 ${uniqueDays.length - idx}일 코스
                </option>
            `).join('');
        }

        this.setBatchPlanDaysPreset('all');
        if (modal) modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    closeBatchPlanModal() {
        const modal = document.getElementById('modal-batch-plan');
        if (modal) modal.classList.add('hidden');
    }

    setBatchPlanDaysPreset(presetName) {
        const daysMap = {
            all: [1, 2, 3, 4, 5, 6, 0],
            mwf: [1, 3, 5],
            tts: [2, 4, 6],
            weekdays: [1, 2, 3, 4, 5],
            weekend: [6, 0]
        };

        const activeDays = daysMap[presetName] || daysMap.all;
        document.querySelectorAll('.batch-day-check').forEach(cb => {
            const val = Number(cb.value);
            cb.checked = activeDays.includes(val);
        });

        document.querySelectorAll('.batch-plan-preset-btn').forEach(btn => {
            const isMatch = (btn.dataset.preset === presetName);
            btn.className = `batch-plan-preset-btn px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                isMatch ? 'bg-blue-900 text-white border-blue-900 shadow-xs' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`;
        });

        this.updateBatchPlanPreview();
    }

    onBatchPlanDayCheckboxChanged() {
        document.querySelectorAll('.batch-plan-preset-btn').forEach(btn => {
            btn.className = 'batch-plan-preset-btn px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer bg-white text-slate-600 border-slate-200 hover:bg-slate-100';
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
        const totalItems = this.currentBatchPlanConfig.items || [];
        const remainingCount = Math.max(1, totalItems.length - startIdx);
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

        if (previewCount) previewCount.textContent = `총 ${scheduledDates.length}회차 배정`;
        if (previewDates) previewDates.textContent = `${startDayStr} ~ ${endDayStr}`;
        if (previewDesc) {
            previewDesc.textContent = `선택 요일: [${selectedDayLabels}] 매주 지정 요일에 하루 1회차씩 자동 배정됩니다.`;
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
            if (conf.isNeungryul) {
                result = window.storage.registerAllNeungryulDays(startDate, selectedDays, startIdx);
            } else if (conf.isNeungryulEtym) {
                result = window.storage.registerAllNeungryulEtymDays(startDate, selectedDays, startIdx);
            } else {
                result = window.storage.registerAllCuratedDays(conf.bookId, startDate, selectedDays, startIdx);
            }

            if (typeof confetti === 'function') {
                confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
            }

            alert(`🎉 [${conf.bookTitle}] 단어 학습 계획이 플래너에 배정되었습니다!\n\n` +
                  `• 시작 DAY: ${result.startDayName}\n` +
                  `• 총 배정 일수: ${result.totalDays} DAYs (총 ${result.addedCount}단어)\n` +
                  `• 배정 기간: ${result.startDate} ~ ${result.endDate}\n` +
                  `• 지정 요일에 맞추어 플래너에 성공적으로 등록되었습니다.`);

            if (window.ocrEngine) window.ocrEngine.renderNeungryulVocaSection();
        }

        this.closeBatchPlanModal();

        if (window.plannerEngine) window.plannerEngine.render();
        if (this.renderDashboard) this.renderDashboard();
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
