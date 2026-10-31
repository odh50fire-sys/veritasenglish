/**
 * Veritas English - 차세대 지능형 실력 진단 레벨테스트 엔진 (Level Test Engine v2.0)
 * 
 * 주요 기능:
 * 1. AI 스마트 적응형 진단 (CAT: Computerized Adaptive Testing - 15문항 속성 정밀 진단)
 * 2. 표준 진단 (10문항 / 20문항 / 30문항 균형 진단)
 * 3. 200문항 대규모 문제 은행 풀 (어휘, 문법, 독해, 실전 회화, 리스닝 청해)
 * 4. 순수 리스닝(Listening) 전용 청해 평가 UI (음원 전용 재생 & 지문 감춤 모드)
 * 5. 시험 응시 편의 기능: 문항 북마크(Flag), 하단 OMR 퀵 네비게이터, 키보드 단축키(1~4, 화살표)
 * 6. 전 문항 상세 해설 & 오답 복습 모달 (틀린 문제만 필터링, 스크립트 다시 듣기)
 * 7. AI 취약점 정밀 클리닉 처방전 및 공식 진단 성적표 인쇄(Print) 지원
 */

class LevelTestEngine {
    constructor() {
        this.mode = 'adaptive'; // 'adaptive' | 10 | 20 | 30
        this.isAdaptive = true;
        this.questionCount = 15;
        this.questions = [];
        this.currentIndex = 0;
        this.userAnswers = [];
        this.flaggedQuestions = new Set();
        this.listeningPlayCounts = {};
        this.questionTimes = [];
        this.timerSeconds = 0;
        this.timerInterval = null;
        this.isFinished = false;
        this.currentView = 'select'; // 'select' | 'test' | 'result'
        this.lastResult = null;
        this.reviewFilter = 'all'; // 'all' | 'wrong'
        this.keyboardBound = false;

        // 적응형 진단 상태
        this.adaptiveCurrentLevel = 3;
        this.consecutiveCorrect = 0;
        this.consecutiveWrong = 0;
        this.usedQuestionIds = new Set();
        this.adaptiveCategorySeq = ['voca', 'grammar', 'reading', 'conversation', 'listening'];

        this.initKeyboardEvents();
    }

    /**
     * 키보드 단축키 초기화 (1~4번 답안 선택, 방향키 이동, Flag 토글)
     */
    initKeyboardEvents() {
        if (this.keyboardBound) return;
        this.keyboardBound = true;

        window.addEventListener('keydown', (e) => {
            const modal = document.getElementById('modal-level-test');
            if (!modal || modal.classList.contains('hidden') || this.currentView !== 'test' || this.isFinished) {
                return;
            }

            // 입력 폼에 포커스가 있을 때는 무시
            if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

            // 1~4 키로 보기 선택
            if (['1', '2', '3', '4'].includes(e.key)) {
                e.preventDefault();
                const optIdx = parseInt(e.key, 10) - 1;
                this.selectOption(optIdx);
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prevQuestion();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                this.nextQuestion();
            } else if (e.key.toLowerCase() === 'f') {
                e.preventDefault();
                this.toggleFlag(this.currentIndex);
            }
        });
    }

    /**
     * 레벨테스트 모달 열기
     */
    openModal(mode = null) {
        const modal = document.getElementById('modal-level-test');
        if (!modal) return;

        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');

        if (mode === 'adaptive' || [10, 20, 30].includes(Number(mode))) {
            this.startTest(mode);
        } else {
            this.showModeSelection();
        }
    }

    /**
     * 레벨테스트 모달 닫기
     */
    closeModal(force = false) {
        if (!force && !this.isFinished && this.currentView === 'test') {
            if (!confirm('레벨테스트가 아직 진행 중입니다. 지금 종료하시겠습니까? (진행 내용은 저장되지 않습니다.)')) {
                return;
            }
        }
        this.stopTimer();
        const modal = document.getElementById('modal-level-test');
        if (modal) modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    /**
     * 모드 선택 화면 (적응형 15문항 / 10문항 / 20문항 / 30문항)
     */
    showModeSelection() {
        this.stopTimer();
        this.currentView = 'select';
        this.isFinished = false;

        const currentLvl = window.storage ? window.storage.getAcademicLevel() : 3;
        const currentInfo = window.storage ? window.storage.getLevelInfo(currentLvl) : null;
        const history = (window.storage && window.storage.userProfile && window.storage.userProfile.levelTestHistory) || [];
        const lastRecord = history.length > 0 ? history[0] : null;

        const container = document.getElementById('level-test-container');
        if (!container) return;

        container.innerHTML = `
            <div class="p-6 sm:p-8">
                <!-- 상단 헤더 -->
                <div class="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 text-blue-950 flex items-center justify-center shadow-md font-black text-xl">
                            🎯
                        </div>
                        <div>
                            <span class="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 font-mono text-[11px] font-bold border border-blue-200 mb-1">
                                Veritas Adaptive Diagnostic System 2.0
                            </span>
                            <h2 class="font-serif font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
                                실력 진단 레벨테스트
                            </h2>
                        </div>
                    </div>
                    <button class="w-9 h-9 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors" onclick="window.levelTestEngine.closeModal()" title="닫기">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>
                </div>

                <!-- 현재 내 레벨 카드 -->
                <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-blue-900/50 shadow-md">
                    <div class="flex items-center gap-4">
                        <div class="px-4 py-2.5 rounded-xl border ${currentInfo ? currentInfo.borderColor : 'border-sky-400'} bg-white/10 text-center shrink-0">
                            <span class="block text-[10px] text-slate-300 font-mono font-bold uppercase tracking-wider">Current Level</span>
                            <span class="font-serif font-black text-lg sm:text-xl text-amber-300">
                                ${currentInfo ? currentInfo.badge : 'Lv.3 Pioneer'}
                            </span>
                        </div>
                        <div>
                            <h3 class="font-serif font-bold text-base sm:text-lg text-white">
                                ${currentInfo ? currentInfo.nameKo : '파이오니어'} (${currentInfo ? currentInfo.subTitle : '중학 입문'})
                            </h3>
                            <p class="text-xs text-slate-300 line-clamp-1 mt-0.5">
                                ${currentInfo ? currentInfo.description : '체계적인 진단으로 나의 강점과 보완점을 파악하세요.'}
                            </p>
                        </div>
                    </div>
                    ${lastRecord ? `
                        <div class="text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 shrink-0">
                            최근 응시: <strong class="text-amber-300 font-mono">${lastRecord.date}</strong> (${lastRecord.questionCount}문항, 점수: ${lastRecord.score}점)
                        </div>
                    ` : ''}
                </div>

                <!-- 모드 선택 헤더 -->
                <div class="mb-4">
                    <h3 class="font-serif font-bold text-sm text-slate-800 mb-1 flex items-center gap-2">
                        <i data-lucide="sparkles" class="w-4 h-4 text-blue-900"></i>
                        진단 방식을 선택해 주세요
                    </h3>
                    <p class="text-xs text-slate-500">
                        200문항 규모의 정밀 문제은행 풀에서 어휘, 문법, 독해, 실전 회화, 청해 5대 핵심 영역을 정밀 진단합니다.
                    </p>
                </div>

                <!-- 진단 모드 카드 그리드 (4종) -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <!-- [1] AI 스마트 적응형 진단 (15문항) - RECOMMENDED -->
                    <div class="p-5 rounded-2xl border-2 border-blue-600 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 relative shadow-md hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between" onclick="window.levelTestEngine.startTest('adaptive')">
                        <div class="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-blue-900 text-amber-300 font-mono text-[10px] font-bold tracking-wider shadow flex items-center gap-1">
                            <i data-lucide="zap" class="w-3 h-3 text-amber-300"></i>
                            AI ADAPTIVE RECOMMENDED
                        </div>
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-900 font-mono text-xs font-bold border border-blue-300 flex items-center gap-1.5">
                                    <span class="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
                                    AI 스마트 적응형 (CAT)
                                </span>
                                <span class="text-xs font-medium text-slate-500 flex items-center gap-1">
                                    <i data-lucide="clock" class="w-3.5 h-3.5 text-blue-900"></i> 약 7~8분
                                </span>
                            </div>
                            <h4 class="font-serif font-black text-xl text-blue-950 mb-1">
                                15문항 스마트 적응형 진단
                            </h4>
                            <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                학생의 응답 패턴에 따라 <strong>실시간으로 난이도가 동적 조절</strong>되어, 최소 문항으로 가장 정확한 실력 임계 레벨(Convergence Level)을 짚어냅니다.
                            </p>
                        </div>
                        <button class="w-full py-2.5 rounded-xl bg-blue-900 group-hover:bg-blue-800 text-amber-300 font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow">
                            <span>스마트 적응형 진단 시작</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-amber-300"></i>
                        </button>
                    </div>

                    <!-- [2] 20문항 표준 정밀 진단 -->
                    <div class="p-5 rounded-2xl border-2 border-slate-200 hover:border-indigo-500 bg-white hover:bg-indigo-50/20 transition-all cursor-pointer group flex flex-col justify-between" onclick="window.levelTestEngine.startTest(20)">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 font-mono text-xs font-bold border border-indigo-200">
                                    Standard Diagnostic
                                </span>
                                <span class="text-xs font-medium text-slate-500 flex items-center gap-1">
                                    <i data-lucide="clock" class="w-3.5 h-3.5"></i> 약 10분
                                </span>
                            </div>
                            <h4 class="font-serif font-black text-xl text-slate-900 group-hover:text-indigo-950 mb-1">
                                20문항 표준 진단
                            </h4>
                            <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                전 레벨의 난이도를 균등하게 고루 배치하여, 어휘·문법·독해·회화·청해 5대 영역의 균형 잡힌 성취도를 종합 평가합니다.
                            </p>
                        </div>
                        <button class="w-full py-2.5 rounded-xl bg-slate-100 group-hover:bg-indigo-900 text-slate-700 group-hover:text-white font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                            <span>20문항 표준 진단 시작</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>

                    <!-- [3] 10문항 쾌속 스캔 -->
                    <div class="p-5 rounded-2xl border-2 border-slate-200 hover:border-emerald-600 bg-white hover:bg-emerald-50/20 transition-all cursor-pointer group flex flex-col justify-between" onclick="window.levelTestEngine.startTest(10)">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-mono text-xs font-bold border border-emerald-200">
                                    Quick Scan
                                </span>
                                <span class="text-xs font-medium text-slate-400 flex items-center gap-1">
                                    <i data-lucide="clock" class="w-3.5 h-3.5"></i> 약 4분
                                </span>
                            </div>
                            <h4 class="font-serif font-black text-lg text-slate-900 group-hover:text-emerald-950 mb-1">
                                10문항 쾌속 진단
                            </h4>
                            <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                핵심 분기점 문항으로 나의 현재 대략적인 실력 위치를 빠르게 체크합니다.
                            </p>
                        </div>
                        <button class="w-full py-2 rounded-xl bg-slate-100 group-hover:bg-emerald-700 text-slate-700 group-hover:text-white font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                            <span>10문항 시작</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>

                    <!-- [4] 30문항 마스터 종합 진단 -->
                    <div class="p-5 rounded-2xl border-2 border-slate-200 hover:border-purple-600 bg-white hover:bg-purple-50/20 transition-all cursor-pointer group flex flex-col justify-between" onclick="window.levelTestEngine.startTest(30)">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 font-mono text-xs font-bold border border-purple-200">
                                    Master Comprehensive
                                </span>
                                <span class="text-xs font-medium text-slate-400 flex items-center gap-1">
                                    <i data-lucide="clock" class="w-3.5 h-3.5"></i> 약 15분
                                </span>
                            </div>
                            <h4 class="font-serif font-black text-lg text-slate-900 group-hover:text-purple-950 mb-1">
                                30문항 심층 진단
                            </h4>
                            <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                10개 전 레벨의 세밀한 난이도 변별과 영역별 강점/약점 분석까지 완벽하게 제공하는 마스터 리포트입니다.
                            </p>
                        </div>
                        <button class="w-full py-2 rounded-xl bg-slate-100 group-hover:bg-purple-900 text-slate-700 group-hover:text-white font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                            <span>30문항 시작</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>

                <!-- 혜택 안내 바 -->
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs flex flex-wrap items-center justify-between gap-3">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">🎁</span>
                        <span>테스트 완료 시 <strong>+150 EXP 경험치</strong>가 지급되며 베리타스 티어에 즉시 반영됩니다.</span>
                    </div>
                    <span class="text-slate-400 text-[11px]">* 응시 중 키보드 단축키(1~4번, 좌우 방향키, F키 북마크)를 지원합니다.</span>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 레벨테스트 시작
     * @param {'adaptive'|10|20|30} mode 
     */
    startTest(mode = 'adaptive') {
        this.mode = mode;
        this.currentIndex = 0;
        this.timerSeconds = 0;
        this.isFinished = false;
        this.currentView = 'test';
        this.flaggedQuestions.clear();
        this.listeningPlayCounts = {};
        this.usedQuestionIds.clear();

        if (mode === 'adaptive') {
            this.isAdaptive = true;
            this.questionCount = 15;
            const userLvl = window.storage ? window.storage.getAcademicLevel() : 3;
            this.adaptiveCurrentLevel = Math.max(1, Math.min(10, userLvl || 3));
            this.consecutiveCorrect = 0;
            this.consecutiveWrong = 0;
            this.questions = [];
            this.userAnswers = [];
            // 첫 적응형 문제 추출
            const firstQ = this.pickNextAdaptiveQuestion(0);
            if (firstQ) {
                this.questions.push(firstQ);
                this.userAnswers.push(null);
            }
        } else {
            this.isAdaptive = false;
            this.questionCount = Number(mode);
            this.questions = this.pickStandardQuestions(this.questionCount);
            this.userAnswers = new Array(this.questions.length).fill(null);
        }

        this.startTimer();
        this.renderQuestion();
    }

    /**
     * 표준 모드(10/20/30) 균형 문제 추출
     */
    pickStandardQuestions(count) {
        const bank = window.LEVEL_TEST_BANK || [];
        if (bank.length === 0) return [];

        const levelBuckets = {};
        for (let l = 1; l <= 10; l++) {
            levelBuckets[l] = bank.filter(q => q.level === l);
        }

        const picked = [];
        const perLevelCount = Math.floor(count / 10);

        for (let l = 1; l <= 10; l++) {
            const bucket = [...(levelBuckets[l] || [])];
            bucket.sort(() => Math.random() - 0.5);
            picked.push(...bucket.slice(0, perLevelCount));
        }

        if (picked.length < count) {
            const remaining = bank.filter(q => !picked.some(p => p.id === q.id));
            remaining.sort(() => Math.random() - 0.5);
            picked.push(...remaining.slice(0, count - picked.length));
        }

        // 전체 순서를 자연스럽게 셔플 (초반부터 후반까지 난이도가 점진 상승하도록 정렬 후 약간의 셔플)
        picked.sort((a, b) => a.level - b.level || (Math.random() - 0.5));
        return picked;
    }

    /**
     * CAT 적응형 다음 문제 추출
     */
    pickNextAdaptiveQuestion(targetIdx) {
        const bank = window.LEVEL_TEST_BANK || [];
        if (bank.length === 0) return null;

        // 카테고리 로테이션
        const targetCategory = this.adaptiveCategorySeq[targetIdx % this.adaptiveCategorySeq.length];
        const targetLevel = this.adaptiveCurrentLevel;

        // 1차 검색: 정확한 타깃 레벨 & 타깃 카테고리 & 미사용
        let candidates = bank.filter(q => q.level === targetLevel && q.category === targetCategory && !this.usedQuestionIds.has(q.id));

        // 2차 검색: 타깃 레벨의 다른 카테고리 & 미사용
        if (candidates.length === 0) {
            candidates = bank.filter(q => q.level === targetLevel && !this.usedQuestionIds.has(q.id));
        }

        // 3차 검색: 인접 레벨 (±1)
        if (candidates.length === 0) {
            candidates = bank.filter(q => Math.abs(q.level - targetLevel) <= 1 && !this.usedQuestionIds.has(q.id));
        }

        // 4차 검색: 미사용 전체
        if (candidates.length === 0) {
            candidates = bank.filter(q => !this.usedQuestionIds.has(q.id));
        }

        if (candidates.length === 0) return null;

        const picked = candidates[Math.floor(Math.random() * candidates.length)];
        this.usedQuestionIds.add(picked.id);
        return picked;
    }

    /**
     * 적응형 난이도 업데이트 로직
     */
    updateAdaptiveLevelOnAnswer(qIndex) {
        const q = this.questions[qIndex];
        const ans = this.userAnswers[qIndex];
        if (!q || ans === null) return;

        const isCorrect = (ans === q.answer);
        if (isCorrect) {
            this.consecutiveWrong = 0;
            this.consecutiveCorrect++;
            // 연속 2개 정답 시 2단계 도약, 아니면 1단계 상승
            const step = (this.consecutiveCorrect >= 2) ? 2 : 1;
            this.adaptiveCurrentLevel = Math.min(10, this.adaptiveCurrentLevel + step);
        } else {
            this.consecutiveCorrect = 0;
            this.consecutiveWrong++;
            // 연속 2개 오답 시 2단계 하향, 아니면 1단계 하향
            const step = (this.consecutiveWrong >= 2) ? 2 : 1;
            this.adaptiveCurrentLevel = Math.max(1, this.adaptiveCurrentLevel - step);
        }
    }

    startTimer() {
        this.stopTimer();
        this.timerInterval = setInterval(() => {
            this.timerSeconds++;
            const timerEl = document.getElementById('level-test-timer-display');
            if (timerEl) {
                const mins = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
                const secs = String(this.timerSeconds % 60).padStart(2, '0');
                timerEl.textContent = `${mins}:${secs}`;
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    /**
     * 문장 및 지문 렌더링 서식 처리
     */
    formatContent(text) {
        if (!text) return '';
        let str = String(text);
        str = str.replace(/<(?!\/?(?:u|span|b|i|strong|em)\b)([a-zA-Z0-9_\s\-]+)>/g, '<u>$1</u>');
        const uStyle = 'text-decoration: underline 3px solid #2563eb !important; text-underline-offset: 4px !important; border-bottom: 2.5px solid #2563eb; font-weight: 800; color: #1e3a8a; background-color: rgba(239, 246, 255, 0.85); padding: 1px 5px; border-radius: 4px; display: inline;';
        str = str.replace(/<u>([\s\S]*?)<\/u>/gi, `<u class="underline font-black text-blue-900 border-b-2 border-blue-600 bg-blue-50/80 px-1 py-0.5 rounded-sm" style="${uStyle}">$1</u>`);
        return str;
    }

    isEnglishQuestion(text) {
        if (!text) return false;
        return /"[A-Za-z\s_,.!?'-]+"/.test(text) || /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(text);
    }

    speakCurrentPassage() {
        const q = this.questions[this.currentIndex];
        if (q && q.passage) {
            this.speakText(q.passage);
        }
    }

    speakCurrentQuestion() {
        const q = this.questions[this.currentIndex];
        if (!q || !q.question) return;
        const match = q.question.match(/"([^"]+)"/);
        const target = match ? match[1] : q.question;
        this.speakText(target);
    }

    /**
     * 리스닝 청해 음원 재생
     */
    playListeningAudio() {
        const q = this.questions[this.currentIndex];
        if (!q || !q.audioScript) return;

        this.listeningPlayCounts[q.id] = (this.listeningPlayCounts[q.id] || 0) + 1;
        this.speakText(q.audioScript);

        const countEl = document.getElementById('listening-play-count');
        if (countEl) {
            countEl.textContent = `${this.listeningPlayCounts[q.id]}회 재생`;
        }
    }

    speakText(text) {
        if (!text || !window.tts) return;
        const clean = text
            .replace(/<[^>]+>/g, '')
            .replace(/_+/g, 'blank')
            .replace(/A:\s*/g, '')
            .replace(/B:\s*/g, '')
            .trim();
        window.tts.speak(clean);
    }

    toggleFlag(index) {
        if (this.flaggedQuestions.has(index)) {
            this.flaggedQuestions.delete(index);
        } else {
            this.flaggedQuestions.add(index);
        }
        this.renderQuestion();
    }

    /**
     * 문제 렌더링
     */
    renderQuestion() {
        const container = document.getElementById('level-test-container');
        if (!container || this.questions.length === 0) return;

        const q = this.questions[this.currentIndex];
        const selectedChoice = this.userAnswers[this.currentIndex];
        const progressPct = Math.round(((this.currentIndex + 1) / this.questionCount) * 100);
        const isFlagged = this.flaggedQuestions.has(this.currentIndex);

        const mins = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
        const secs = String(this.timerSeconds % 60).padStart(2, '0');

        const categoryBadges = {
            voca: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            grammar: 'bg-indigo-50 text-indigo-700 border-indigo-200',
            reading: 'bg-amber-50 text-amber-800 border-amber-200',
            conversation: 'bg-purple-50 text-purple-700 border-purple-200',
            listening: 'bg-sky-50 text-sky-800 border-sky-300'
        };
        const catBadgeClass = categoryBadges[q.category] || 'bg-slate-100 text-slate-700 border-slate-200';

        container.innerHTML = `
            <div class="p-6 sm:p-8">
                <!-- 상단 네비게이션 & 타이머 & 북마크 -->
                <div class="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                    <div class="flex items-center gap-2.5">
                        <button class="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-serif font-bold text-slate-600 transition-colors flex items-center gap-1" onclick="window.levelTestEngine.showModeSelection()">
                            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
                            모드 선택
                        </button>
                        <span class="font-mono text-xs font-bold text-slate-500">
                            문항 <strong class="text-blue-900 text-sm">${this.currentIndex + 1}</strong> / ${this.questionCount}
                        </span>
                        ${this.isAdaptive ? `
                            <span class="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-mono text-[10px] font-bold border border-blue-200">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                                AI 스마트 적응형
                            </span>
                        ` : ''}
                    </div>

                    <div class="flex items-center gap-2">
                        <!-- 검토 표시(Flag) 버튼 -->
                        <button class="px-2.5 py-1.5 rounded-lg border text-xs font-serif font-bold flex items-center gap-1 transition-all ${
                            isFlagged 
                                ? 'border-amber-400 bg-amber-50 text-amber-800 shadow-xs' 
                                : 'border-slate-200 hover:bg-slate-50 text-slate-500'
                        }" onclick="window.levelTestEngine.toggleFlag(${this.currentIndex})" title="단축키: F (다시 확인할 문제 북마크)">
                            <i data-lucide="flag" class="w-3.5 h-3.5 ${isFlagged ? 'fill-amber-500 text-amber-600' : ''}"></i>
                            <span class="hidden sm:inline">${isFlagged ? '검토 표시됨' : '검토 표시'}</span>
                        </button>

                        <!-- 타이머 -->
                        <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-bold">
                            <i data-lucide="clock" class="w-3.5 h-3.5 text-blue-900"></i>
                            <span id="level-test-timer-display">${mins}:${secs}</span>
                        </div>

                        <!-- 닫기 버튼 -->
                        <button class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors" onclick="window.levelTestEngine.closeModal()" title="테스트 중단">
                            <i data-lucide="x" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>

                <!-- 진행도 바 -->
                <div class="w-full bg-slate-100 rounded-full h-1.5 mb-5 overflow-hidden">
                    <div class="bg-gradient-to-r from-blue-900 via-indigo-600 to-amber-400 h-1.5 rounded-full transition-all duration-300" style="width: ${progressPct}%;"></div>
                </div>

                <!-- 단축키 안내 팁 바 (데스크톱 전용) -->
                <div class="hidden sm:flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 mb-5">
                    <span>💡 빠른 단축키: <kbd class="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-slate-700 font-bold">1~4</kbd> 보기 선택 · <kbd class="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-slate-700 font-bold">←</kbd> <kbd class="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-slate-700 font-bold">→</kbd> 이전/다음 · <kbd class="px-1.5 py-0.5 bg-white border border-slate-300 rounded text-slate-700 font-bold">F</kbd> 북마크</span>
                    <span>난이도: <strong>Lv.${q.level}</strong></span>
                </div>

                <!-- 문제 메타 배지 -->
                <div class="flex flex-wrap items-center gap-2 mb-3">
                    <span class="px-2.5 py-0.5 rounded-md font-mono text-[11px] font-bold border ${catBadgeClass}">
                        ${q.categoryKo}
                    </span>
                    <span class="px-2.5 py-0.5 rounded-md font-mono text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                        난이도 Lv.${q.level}
                    </span>
                    ${q.isListening ? `
                        <span class="px-2.5 py-0.5 rounded-md font-mono text-[11px] font-bold bg-sky-100 text-sky-800 border border-sky-300 flex items-center gap-1">
                            <i data-lucide="headphones" class="w-3 h-3"></i>
                            오디오 청해 전용
                        </span>
                    ` : ''}
                </div>

                <!-- 청해(Listening) 전용 오디오 박스 -->
                ${q.isListening ? `
                    <div class="p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border-2 border-sky-200 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                        <div class="flex items-center gap-3.5">
                            <div class="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md shrink-0">
                                <i data-lucide="headphones" class="w-6 h-6"></i>
                            </div>
                            <div>
                                <h4 class="font-serif font-black text-sm text-sky-950">
                                    리스닝 음원 듣기 평가
                                </h4>
                                <p class="text-xs text-sky-700">
                                    아래 버튼을 눌러 들려주는 음원을 잘 듣고 알맞은 답을 고르세요.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 w-full sm:w-auto">
                            <button type="button" class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-serif font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer" onclick="window.levelTestEngine.playListeningAudio()">
                                <i data-lucide="volume-2" class="w-4 h-4"></i>
                                <span>음원 듣기 재생</span>
                            </button>
                            <span id="listening-play-count" class="text-xs font-mono text-sky-800 bg-white/70 px-2.5 py-1 rounded-lg border border-sky-200 shrink-0">
                                ${this.listeningPlayCounts[q.id] ? `${this.listeningPlayCounts[q.id]}회 재생` : '미재생'}
                            </span>
                        </div>
                    </div>
                ` : ''}

                <!-- 일반 독해/대화 지문 (passage) -->
                ${q.passage && !q.isListening ? `
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 font-serif text-slate-800 text-sm leading-relaxed mb-5 select-text relative group shadow-xs">
                        <div class="flex items-start justify-between gap-3">
                            <div class="flex-1 whitespace-pre-line leading-relaxed">
                                ${this.formatContent(q.passage)}
                            </div>
                            <button type="button" class="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-blue-50 text-slate-500 hover:text-blue-900 transition-all shrink-0 cursor-pointer shadow-xs" onclick="window.levelTestEngine.speakCurrentPassage()" title="지문 원어민 발음 듣기">
                                <i data-lucide="volume-2" class="w-4 h-4"></i>
                            </button>
                        </div>
                    </div>
                ` : ''}

                <!-- 문제 발문 -->
                <div class="flex items-start justify-between gap-3 mb-5">
                    <h3 class="font-serif font-black text-base sm:text-lg text-slate-900 leading-snug whitespace-pre-line flex-1">
                        ${this.formatContent(q.question)}
                    </h3>
                    ${this.isEnglishQuestion(q.question) ? `
                        <button type="button" class="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-blue-50 text-slate-500 hover:text-blue-900 transition-all shrink-0 cursor-pointer shadow-xs mt-0.5" onclick="window.levelTestEngine.speakCurrentQuestion()" title="영문장 발음 듣기">
                            <i data-lucide="volume-2" class="w-4 h-4"></i>
                        </button>
                    ` : ''}
                </div>

                <!-- 4지선다 옵션 리스트 -->
                <div class="space-y-3 mb-6">
                    ${q.options.map((opt, idx) => {
                        const isSelected = (selectedChoice === idx);
                        const numIcon = ['①', '②', '③', '④'][idx] || `${idx + 1}.`;
                        return `
                            <button class="w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 cursor-pointer ${
                                isSelected 
                                    ? 'border-blue-900 bg-blue-50 text-blue-950 font-bold shadow-sm' 
                                    : 'border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800'
                            }" onclick="window.levelTestEngine.selectOption(${idx})">
                                <div class="flex items-center gap-2 shrink-0 pt-0.5">
                                    <span class="w-6 h-6 rounded-lg flex items-center justify-center font-mono text-xs ${
                                        isSelected ? 'bg-blue-900 text-white font-black' : 'bg-slate-100 text-slate-500'
                                    }">
                                        ${idx + 1}
                                    </span>
                                </div>
                                <span class="text-sm font-serif leading-relaxed flex-1">
                                    ${this.formatContent(opt)}
                                </span>
                            </button>
                        `;
                    }).join('')}
                </div>

                <!-- 하단 OMR 빠른 네비게이션 스트립 -->
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 mb-6">
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[11px] font-serif font-bold text-slate-600 flex items-center gap-1">
                            <i data-lucide="layout-grid" class="w-3.5 h-3.5 text-blue-900"></i>
                            OMR 빠른 문항 이동
                        </span>
                        <span class="text-[10px] font-mono text-slate-400">
                            완료: ${this.userAnswers.filter(a => a !== null).length} / ${this.questionCount}
                        </span>
                    </div>
                    <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                        ${Array.from({ length: this.questionCount }, (_, i) => {
                            const isCurrent = (i === this.currentIndex);
                            const hasAnswer = (this.userAnswers[i] !== null && this.userAnswers[i] !== undefined);
                            const flagged = this.flaggedQuestions.has(i);
                            const exists = (i < this.questions.length);

                            let chipClass = 'bg-white border-slate-200 text-slate-400';
                            if (!exists) {
                                chipClass = 'bg-slate-100 border-slate-200 text-slate-300 opacity-50 cursor-not-allowed';
                            } else if (isCurrent) {
                                chipClass = 'border-blue-900 ring-2 ring-blue-600/30 font-black ' + (hasAnswer ? 'bg-blue-900 text-white' : 'bg-blue-50 text-blue-900');
                            } else if (hasAnswer) {
                                chipClass = 'bg-blue-900 text-white border-blue-900 font-bold';
                            } else {
                                chipClass = 'bg-white border-slate-300 text-slate-600 hover:border-slate-400';
                            }

                            return `
                                <button type="button" class="w-8 h-8 rounded-lg border text-xs font-mono shrink-0 flex items-center justify-center relative transition-all ${chipClass}" 
                                    ${exists ? `onclick="window.levelTestEngine.jumpToQuestion(${i})"` : 'disabled'}>
                                    ${i + 1}
                                    ${flagged ? '<span class="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white"></span>' : ''}
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- 하단 이전 / 다음 / 완료 제어 바 -->
                <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button class="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 font-serif font-bold text-xs transition-colors flex items-center gap-1.5 ${this.currentIndex === 0 ? 'opacity-40 pointer-events-none' : ''}" onclick="window.levelTestEngine.prevQuestion()">
                        <i data-lucide="chevron-left" class="w-4 h-4"></i>
                        <span>이전 문제</span>
                    </button>

                    <div class="flex items-center gap-2">
                        ${this.currentIndex < this.questionCount - 1 ? `
                            <button class="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs transition-colors flex items-center gap-1.5 shadow" onclick="window.levelTestEngine.nextQuestion()">
                                <span>다음 문제</span>
                                <i data-lucide="chevron-right" class="w-4 h-4"></i>
                            </button>
                        ` : `
                            <button class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-serif font-bold text-xs transition-all flex items-center gap-1.5 shadow-md" onclick="window.levelTestEngine.finishTest()">
                                <i data-lucide="check-circle" class="w-4 h-4"></i>
                                <span>진단 완료 및 결과 보기</span>
                            </button>
                        `}
                    </div>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 보기 선택
     */
    selectOption(optIdx) {
        this.userAnswers[this.currentIndex] = optIdx;
        this.renderQuestion();
    }

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
        }
    }

    nextQuestion() {
        if (this.userAnswers[this.currentIndex] === null) {
            // 미답 상태에서도 다음으로 갈 수 있음 (사용자 자유)
        }

        // 적응형 모드이고 다음 문제가 아직 생성되지 않은 경우 동적 추출
        if (this.isAdaptive && this.currentIndex === this.questions.length - 1) {
            if (this.currentIndex < this.questionCount - 1) {
                this.updateAdaptiveLevelOnAnswer(this.currentIndex);
                const nextQ = this.pickNextAdaptiveQuestion(this.currentIndex + 1);
                if (nextQ) {
                    this.questions.push(nextQ);
                    this.userAnswers.push(null);
                }
            }
        }

        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
        } else if (this.currentIndex === this.questionCount - 1) {
            this.finishTest();
        }
    }

    jumpToQuestion(index) {
        if (index >= 0 && index < this.questions.length) {
            this.currentIndex = index;
            this.renderQuestion();
        }
    }

    /**
     * 시험 완료 및 정밀 레벨 판정 알고리즘 (CAT & Weighted Scoring)
     */
    finishTest() {
        const unansweredCount = this.userAnswers.filter(a => a === null).length;
        if (unansweredCount > 0) {
            if (!confirm(`아직 풀지 않은 문제가 ${unansweredCount}문항 있습니다. 그대로 진단을 완료하시겠습니까?`)) {
                return;
            }
        }

        this.stopTimer();
        this.isFinished = true;
        this.currentView = 'result';

        let correctCount = 0;
        const categoryCorrect = { voca: 0, grammar: 0, reading: 0, conversation: 0, listening: 0 };
        const categoryTotal = { voca: 0, grammar: 0, reading: 0, conversation: 0, listening: 0 };
        const levelResults = {};

        for (let l = 1; l <= 10; l++) {
            levelResults[l] = { total: 0, correct: 0 };
        }

        let totalWeightedPoints = 0;
        let maxWeightedPoints = 0;

        this.questions.forEach((q, idx) => {
            const userChoice = this.userAnswers[idx];
            const isCorrect = (userChoice === q.answer);

            const cat = q.category || 'voca';
            categoryTotal[cat] = (categoryTotal[cat] || 0) + 1;

            const weight = q.level; // 난이도 가중치
            maxWeightedPoints += weight;

            if (isCorrect) {
                correctCount++;
                categoryCorrect[cat] = (categoryCorrect[cat] || 0) + 1;
                totalWeightedPoints += weight;
            }

            if (levelResults[q.level]) {
                levelResults[q.level].total++;
                if (isCorrect) levelResults[q.level].correct++;
            }
        });

        const totalQuestions = this.questions.length;
        const accuracyPct = Math.round((correctCount / totalQuestions) * 100);
        const score = Math.round((correctCount / totalQuestions) * 100);

        // 영역별 성취도 (%)
        const categoryScores = {
            voca: categoryTotal.voca > 0 ? Math.round((categoryCorrect.voca / categoryTotal.voca) * 100) : 0,
            grammar: categoryTotal.grammar > 0 ? Math.round((categoryCorrect.grammar / categoryTotal.grammar) * 100) : 0,
            reading: categoryTotal.reading > 0 ? Math.round((categoryCorrect.reading / categoryTotal.reading) * 100) : 0,
            conversation: categoryTotal.conversation > 0 ? Math.round((categoryCorrect.conversation / categoryTotal.conversation) * 100) : 0,
            listening: categoryTotal.listening > 0 ? Math.round((categoryCorrect.listening / categoryTotal.listening) * 100) : 0
        };

        let assignedLevel = 1;

        if (this.isAdaptive) {
            // 적응형 판정 알고리즘:
            // 후반부(최근 5문항) 도달 난이도 + 정답 문항 난이도 가중치 결합
            const lastQuestions = this.questions.slice(-5);
            const lastCorrectQuestions = lastQuestions.filter((q, idx) => {
                const globalIdx = this.questions.length - 5 + idx;
                return this.userAnswers[globalIdx] === q.answer;
            });

            const lastLevels = lastQuestions.map(q => q.level);
            const avgLastLevel = lastLevels.reduce((a, b) => a + b, 0) / (lastLevels.length || 1);
            const maxLevelReached = Math.max(...this.questions.map(q => q.level));

            // 가중 평균 계산
            let rawAdaptiveLvl = (avgLastLevel * 0.6) + (this.adaptiveCurrentLevel * 0.4);
            if (accuracyPct >= 80) rawAdaptiveLvl += 0.5;
            if (accuracyPct < 40) rawAdaptiveLvl -= 0.5;

            assignedLevel = Math.max(1, Math.min(10, Math.round(rawAdaptiveLvl)));
        } else {
            // 표준 모드 난이도 가중 판정
            const weightedRatio = maxWeightedPoints > 0 ? (totalWeightedPoints / maxWeightedPoints) : (accuracyPct / 100);
            const finalWeightedPct = (weightedRatio * 0.7) + ((accuracyPct / 100) * 0.3);

            if (finalWeightedPct >= 0.90) assignedLevel = 10;
            else if (finalWeightedPct >= 0.80) assignedLevel = 9;
            else if (finalWeightedPct >= 0.70) assignedLevel = 8;
            else if (finalWeightedPct >= 0.60) assignedLevel = 7;
            else if (finalWeightedPct >= 0.50) assignedLevel = 6;
            else if (finalWeightedPct >= 0.40) assignedLevel = 5;
            else if (finalWeightedPct >= 0.30) assignedLevel = 4;
            else if (finalWeightedPct >= 0.20) assignedLevel = 3;
            else if (finalWeightedPct >= 0.10) assignedLevel = 2;
            else assignedLevel = 1;
        }

        // 결과 저장 및 보상 지급 (+150 EXP)
        let saveRes = null;
        if (window.storage && typeof window.storage.saveLevelTestResult === 'function') {
            saveRes = window.storage.saveLevelTestResult({
                questionCount: this.questionCount,
                score,
                correctCount,
                level: assignedLevel,
                categoryScores,
                isAdaptive: this.isAdaptive
            });
        }

        this.lastResult = {
            assignedLevel,
            score,
            correctCount,
            totalQuestions,
            accuracyPct,
            categoryScores,
            timeSeconds: this.timerSeconds,
            isAdaptive: this.isAdaptive,
            saveRes
        };

        this.renderResultReport(this.lastResult);

        // 온보딩: 레벨테스트 완료 후 맞춤 로드맵 모달 자동 표시
        if (window.onboardingEngine && typeof window.onboardingEngine.showPostLevelTestRoadmap === 'function') {
            setTimeout(() => window.onboardingEngine.showPostLevelTestRoadmap(assignedLevel), 900);
        }
    }

    /**
     * AI 취약점 처방전 메시지 생성
     */
    generateDiagnosticPrescription(result) {
        const catMap = {
            voca: { name: '어휘력 (Vocabulary)', advice: '문맥 속 어휘 활용과 파생어 학습에 집중할 것을 권장합니다.' },
            grammar: { name: '문법·구문 (Grammar)', advice: '핵심 문장 구조(관계사, 수동태, 시제 수일치) 기초를 재정비하세요.' },
            reading: { name: '독해력 (Reading)', advice: '긴 문장의 주어-동사 끊어 읽기와 핵심 대의 파악 훈련이 필요합니다.' },
            conversation: { name: '실전 회화 (Dialogue)', advice: '원어민 구어 관용구와 상황별 리액션 표현을 반복 섀도잉하세요.' },
            listening: { name: '리스닝 청해 (Listening)', advice: '원어민 연음 법칙 및 핵심 키워드 청취 딕테이션 훈련을 권장합니다.' }
        };

        // 최저 점수 영역 찾기
        let lowestCat = 'voca';
        let lowestScore = 999;
        Object.entries(result.categoryScores).forEach(([cat, sc]) => {
            if (sc < lowestScore) {
                lowestScore = sc;
                lowestCat = cat;
            }
        });

        const target = catMap[lowestCat] || catMap.voca;
        return {
            categoryName: target.name,
            score: lowestScore,
            advice: target.advice
        };
    }

    /**
     * 진단 결과 종합 리포트 화면
     */
    renderResultReport(result) {
        const container = document.getElementById('level-test-container');
        if (!container) return;

        const info = window.storage ? window.storage.getLevelInfo(result.assignedLevel) : null;
        const mins = String(Math.floor(result.timeSeconds / 60)).padStart(2, '0');
        const secs = String(result.timeSeconds % 60).padStart(2, '0');
        const prescription = this.generateDiagnosticPrescription(result);

        container.innerHTML = `
            <div id="print-report-card" class="p-6 sm:p-8">
                <!-- 상단 헤더 -->
                <div class="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                    <div>
                        <span class="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-mono text-[11px] font-bold border border-emerald-200 mb-1">
                            ${result.isAdaptive ? 'AI Adaptive Diagnostic Verified' : 'Standard Assessment Completed'}
                        </span>
                        <h2 class="font-serif font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
                            실력 진단 리포트 & 맞춤 학습 처방전
                        </h2>
                    </div>
                    <div class="flex items-center gap-2">
                        <!-- 성적표 인쇄 버튼 -->
                        <button class="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 font-serif font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs" onclick="window.levelTestEngine.printReportCard()" title="공식 성적표 인쇄 및 PDF 저장">
                            <i data-lucide="printer" class="w-4 h-4 text-blue-900"></i>
                            <span class="hidden sm:inline">성적표 인쇄/저장</span>
                        </button>
                        <button class="w-9 h-9 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors" onclick="window.levelTestEngine.closeModal()" title="닫기">
                            <i data-lucide="x" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>

                <!-- 최종 획득 레벨 대형 배너 -->
                <div class="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-2 ${info ? info.borderColor : 'border-amber-400'} shadow-xl mb-6 relative overflow-hidden">
                    <div class="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-amber-400/10 blur-2xl pointer-events-none"></div>

                    <div class="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                        <div class="text-center md:text-left">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-mono text-xs font-bold border border-amber-400/30 mb-2">
                                <i data-lucide="award" class="w-3.5 h-3.5"></i>
                                Veritas 공인 진단 결과 ${result.isAdaptive ? '(AI CAT 모드)' : ''}
                            </span>
                            <div class="flex flex-wrap items-baseline gap-2.5 mb-2 justify-center md:justify-start">
                                <span class="font-serif font-black text-3xl sm:text-4xl ${info ? info.color : 'text-amber-300'}">
                                    ${info ? info.badge : `Lv.${result.assignedLevel}`}
                                </span>
                                <span class="font-serif font-bold text-xl sm:text-2xl text-white">
                                    ${info ? info.nameKo : ''}
                                </span>
                                <span class="text-sm font-serif text-slate-300">
                                    (${info ? info.subTitle : ''})
                                </span>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                                ${info ? info.description : ''}
                            </p>
                            <div class="mt-3 flex flex-wrap items-center gap-2 justify-center md:justify-start text-xs font-mono text-slate-300">
                                <span class="bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">학업 기준: ${info ? info.targetGrade : ''}</span>
                                <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-400/30 font-bold">+150 EXP 획득! 🎁</span>
                            </div>
                        </div>

                        <!-- 우측 성적 요약 카드 -->
                        <div class="p-4 rounded-2xl bg-white/10 border border-white/15 text-center min-w-[200px] shrink-0">
                            <span class="block text-[11px] font-mono text-slate-300 mb-1">Total Score</span>
                            <span class="font-serif font-black text-4xl text-amber-300 block mb-1">
                                ${result.score}점
                            </span>
                            <div class="text-xs font-mono text-slate-300 space-y-0.5">
                                <div>정답수: <strong class="text-white">${result.correctCount} / ${result.totalQuestions}</strong> (${result.accuracyPct}%)</div>
                                <div>소요 시간: <strong class="text-white">${mins}분 ${secs}초</strong></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AI 취약점 정밀 클리닉 처방전 카드 -->
                <div class="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 mb-6">
                    <div class="flex items-center gap-2.5 mb-2">
                        <span class="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold shadow-xs">
                            🩺
                        </span>
                        <div>
                            <h3 class="font-serif font-black text-sm text-amber-950">
                                AI 집중 보완 취약점 클리닉 처방
                            </h3>
                            <p class="text-xs text-amber-800">
                                진단 결과 <strong>${prescription.categoryName}</strong> 영역 (성취도 ${prescription.score}%)에서 가장 높은 개선 가능성이 확인되었습니다.
                            </p>
                        </div>
                    </div>
                    <div class="p-3 bg-white rounded-xl border border-amber-200 text-xs text-slate-700 font-serif leading-relaxed mt-2 flex items-start gap-2">
                        <i data-lucide="check-circle" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
                        <span>${prescription.advice}</span>
                    </div>
                </div>

                <!-- 5대 영역별 역량 분석 바 (청해 포함) -->
                <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                    <h3 class="font-serif font-bold text-sm text-slate-800 mb-3 flex items-center gap-2">
                        <i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-900"></i>
                        5대 핵심 역량 진단 분석 (어휘 · 문법 · 독해 · 회화 · 청해)
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                        ${[
                            { key: 'voca', label: '어휘력 (Voca)', score: result.categoryScores.voca, color: 'bg-emerald-500' },
                            { key: 'grammar', label: '문법·구문 (Grammar)', score: result.categoryScores.grammar, color: 'bg-indigo-500' },
                            { key: 'reading', label: '독해력 (Reading)', score: result.categoryScores.reading, color: 'bg-amber-500' },
                            { key: 'conversation', label: '실전 회화 (Dialogue)', score: result.categoryScores.conversation, color: 'bg-purple-500' },
                            { key: 'listening', label: '리스닝 청해 (Audio)', score: result.categoryScores.listening, color: 'bg-sky-500' }
                        ].map(c => `
                            <div class="p-3 bg-white rounded-xl border border-slate-200">
                                <div class="flex items-center justify-between text-xs mb-1.5">
                                    <span class="font-serif font-bold text-slate-700 text-[11px] truncate">${c.label}</span>
                                    <span class="font-mono font-bold text-slate-900">${c.score}%</span>
                                </div>
                                <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                    <div class="${c.color} h-2 rounded-full transition-all duration-500" style="width: ${c.score}%;"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- 내 레벨에 맞춘 원클릭 추천 학습 카드 -->
                <div class="p-5 rounded-2xl bg-blue-50/50 border border-blue-200 mb-6">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="font-serif font-bold text-sm text-blue-950 flex items-center gap-2">
                            <i data-lucide="compass" class="w-4 h-4 text-blue-900"></i>
                            ${info ? info.badge : ''} 맞춤 추천 학습 코스
                        </h3>
                        <span class="text-[11px] text-blue-800 font-mono font-bold">진단 레벨 맞춤 자동 연동됨</span>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <!-- 추천 영단어 교재 -->
                        <div class="p-4 rounded-xl bg-white border border-blue-100 flex flex-col justify-between">
                            <div>
                                <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-mono text-[10px] font-bold">추천 영단어 교재</span>
                                <h4 class="font-serif font-bold text-sm text-slate-900 mt-2 mb-1">
                                    ${this.getCollectionTitle(info ? info.recommendedVocas[0] : null)}
                                </h4>
                                <p class="text-xs text-slate-500 mb-3">
                                    현재 실력에서 어휘력을 한 단계 끌어올리는 최적의 단원입니다.
                                </p>
                            </div>
                            <button class="w-full py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1" onclick="window.levelTestEngine.goToVoca('${info ? info.recommendedVocas[0] : ''}')">
                                <span>단어장 바로가기</span>
                                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>

                        <!-- 추천 독해 지문 -->
                        <div class="p-4 rounded-xl bg-white border border-blue-100 flex flex-col justify-between">
                            <div>
                                <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[10px] font-bold">추천 내신 독해</span>
                                <h4 class="font-serif font-bold text-sm text-slate-900 mt-2 mb-1">
                                    ${info ? info.recommendedPassageSemester : '중 1-1'} 독해 지문 세트
                                </h4>
                                <p class="text-xs text-slate-500 mb-3">
                                    문맥 이해와 서술형 영작 실력을 탄탄히 다져주는 추천 독해입니다.
                                </p>
                            </div>
                            <button class="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-300 font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1" onclick="window.levelTestEngine.goToReading('${info ? info.recommendedPassageSemester : ''}')">
                                <span>독해 지문 바로가기</span>
                                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>

                        <!-- 맞춤 원어민 표현 2개 즉시 추천 -->
                        <div class="p-4 rounded-xl bg-white border border-blue-100 flex flex-col justify-between">
                            <div>
                                <span class="px-2 py-0.5 rounded bg-purple-100 text-purple-900 font-mono text-[10px] font-bold">맞춤 원어민 회화</span>
                                <h4 class="font-serif font-bold text-sm text-slate-900 mt-2 mb-1">
                                    Lv.${result.assignedLevel} 맞춤 데일리 표현 2개
                                </h4>
                                <p class="text-xs text-slate-500 mb-3">
                                    원어민 표현 추천이 나의 진단 레벨에 맞추어 자동 최적화되었습니다.
                                </p>
                            </div>
                            <button class="w-full py-2 rounded-lg bg-indigo-900 hover:bg-indigo-800 text-white font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1" onclick="window.levelTestEngine.goToExpressions()">
                                <span>원어민 회화 바로가기</span>
                                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 문항별 상세 해설 & 오답 리뷰 섹션 -->
                <div class="mb-6 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                    <div class="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
                        <div class="flex items-center gap-2">
                            <i data-lucide="file-check" class="w-5 h-5 text-blue-900"></i>
                            <h4 class="font-serif font-black text-sm text-slate-900">
                                전 문항 상세 해설 & 오답 복습 (총 ${result.totalQuestions}문항)
                            </h4>
                        </div>

                        <!-- 필터 버튼 탭 -->
                        <div class="flex items-center gap-1 bg-slate-200/70 p-1 rounded-xl text-xs font-serif font-bold">
                            <button type="button" class="px-3 py-1 rounded-lg transition-colors ${this.reviewFilter === 'all' ? 'bg-white text-blue-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'}" onclick="window.levelTestEngine.setReviewFilter('all')">
                                전체 문항 (${this.questions.length})
                            </button>
                            <button type="button" class="px-3 py-1 rounded-lg transition-colors ${this.reviewFilter === 'wrong' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}" onclick="window.levelTestEngine.setReviewFilter('wrong')">
                                ✗ 틀린 문제만 (${this.questions.length - result.correctCount})
                            </button>
                        </div>
                    </div>

                    <!-- 문제별 리뷰 리스트 -->
                    <div id="level-test-review-items" class="p-4 sm:p-5 space-y-4 max-h-[450px] overflow-y-auto">
                        ${this.renderReviewItems()}
                    </div>
                </div>

                <!-- 하단 액션 버튼 -->
                <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                    <button class="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-serif font-bold text-xs transition-colors flex items-center gap-1.5" onclick="window.levelTestEngine.showModeSelection()">
                        <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                        <span>다른 모드로 다시 테스트</span>
                    </button>
                    <button class="px-6 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs transition-colors flex items-center gap-1.5 shadow" onclick="window.levelTestEngine.closeModal()">
                        <i data-lucide="check" class="w-4 h-4 text-amber-300"></i>
                        <span>확인 및 맞춤 학습 시작</span>
                    </button>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }

    setReviewFilter(filter) {
        this.reviewFilter = filter;
        const container = document.getElementById('level-test-review-items');
        if (container) {
            container.innerHTML = this.renderReviewItems();
            if (window.lucide) window.lucide.createIcons();
        }
    }

    renderReviewItems() {
        return this.questions.map((q, qIdx) => {
            const userAns = this.userAnswers[qIdx];
            const isCorrect = (userAns === q.answer);

            if (this.reviewFilter === 'wrong' && isCorrect) {
                return '';
            }

            return `
                <div class="p-4 rounded-xl border ${isCorrect ? 'border-emerald-200 bg-emerald-50/20' : 'border-rose-200 bg-rose-50/20'} space-y-2.5">
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-xs ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
                                ${qIdx + 1}
                            </span>
                            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white border border-slate-200 text-slate-600">
                                ${q.categoryKo} • Lv.${q.level}
                            </span>
                            ${q.isListening ? `
                                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-100 border border-sky-300 text-sky-800">
                                    청해 음원
                                </span>
                            ` : ''}
                        </div>
                        <span class="text-xs font-serif font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-600'}">
                            ${isCorrect ? '✓ 정답' : '✗ 오답'}
                        </span>
                    </div>

                    <!-- 청해 스크립트 또는 독해 지문 -->
                    ${q.isListening && q.audioScript ? `
                        <div class="p-3 rounded-lg bg-sky-50/80 border border-sky-200 text-xs text-sky-950 font-serif leading-relaxed">
                            <div class="flex items-center justify-between mb-1.5">
                                <span class="font-mono font-bold text-[10px] text-sky-700 flex items-center gap-1">
                                    <i data-lucide="headphones" class="w-3 h-3"></i>
                                    [청해 오디오 스크립트 전문]
                                </span>
                                <button type="button" class="px-2 py-0.5 rounded bg-white text-sky-800 border border-sky-300 hover:bg-sky-100 text-[10px] font-bold flex items-center gap-1" onclick="window.levelTestEngine.speakText('${q.audioScript.replace(/'/g, "\\'")}')">
                                    <i data-lucide="volume-2" class="w-3 h-3"></i> 다시 듣기
                                </button>
                            </div>
                            <p class="italic text-slate-800 whitespace-pre-line">${this.formatContent(q.audioScript)}</p>
                        </div>
                    ` : ''}

                    ${q.passage && !q.isListening ? `
                        <div class="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-serif leading-relaxed whitespace-pre-line">
                            ${this.formatContent(q.passage)}
                        </div>
                    ` : ''}

                    <h5 class="font-serif font-bold text-xs sm:text-sm text-slate-900 leading-snug whitespace-pre-line">
                        ${this.formatContent(q.question)}
                    </h5>

                    <!-- 보기 4지선다 결과 -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-serif">
                        ${q.options.map((opt, optIdx) => {
                            const isThisCorrect = (optIdx === q.answer);
                            const isThisUser = (optIdx === userAns);
                            let badge = '';
                            let bgClass = 'bg-white border-slate-200 text-slate-700';
                            if (isThisCorrect) {
                                bgClass = 'bg-emerald-100/70 border-emerald-300 text-emerald-950 font-bold';
                                badge = '<span class="text-[10px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-mono ml-auto">정답</span>';
                            } else if (isThisUser) {
                                bgClass = 'bg-rose-100/70 border-rose-300 text-rose-950 line-through';
                                badge = '<span class="text-[10px] bg-rose-600 text-white px-1.5 py-0.2 rounded font-mono ml-auto">내 선택</span>';
                            }
                            const numIcon = ['①', '②', '③', '④'][optIdx] || `${optIdx + 1}.`;
                            return `
                                <div class="p-2 rounded-lg border flex items-center gap-1.5 ${bgClass}">
                                    <span class="font-mono text-[11px] shrink-0">${numIcon}</span>
                                    <span class="truncate">${this.formatContent(opt)}</span>
                                    ${badge}
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <!-- 해설 박스 -->
                    <div class="p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-slate-700 font-serif">
                        <strong class="text-blue-900 font-bold">💡 해설:</strong> ${this.formatContent(q.explanation)}
                    </div>
                </div>
            `;
        }).join('');
    }

    /**
     * 성적표 인쇄 (Print Report Card)
     */
    printReportCard() {
        window.print();
    }

    getCollectionTitle(colId) {
        if (!colId) return '추천 단어장';
        if (colId === 'neungryul2025') return '능률 VOCA 중등 고난도 (Lv.7)';
        if (colId === 'neungryul_etym_2025') return '능률 VOCA 어원편 중등 (Lv.8)';
        const cols = window.CURATED_COLLECTIONS || [];
        const found = cols.find(c => c.id === colId);
        return found ? found.title : colId;
    }

    goToVoca(colId) {
        this.closeModal();
        if (window.app && typeof window.app.switchTab === 'function') {
            window.app.switchTab('ocr');
        }
        if (colId && window.ocrEngine && typeof window.ocrEngine.selectVocaBook === 'function') {
            setTimeout(() => {
                window.ocrEngine.selectVocaBook(colId);
            }, 100);
        }
    }

    goToReading(semester) {
        this.closeModal();
        if (window.app && typeof window.app.switchTab === 'function') {
            window.app.switchTab('reading');
        }
    }

    goToExpressions() {
        this.closeModal();
        if (window.app && typeof window.app.switchTab === 'function') {
            window.app.switchTab('expressions');
        }
    }
}

// 전역 인스턴스 등록
window.levelTestEngine = new LevelTestEngine();
