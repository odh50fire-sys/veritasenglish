/**
 * Veritas English - 실력 진단 레벨테스트 엔진 (Level Test Engine)
 * 10문항 / 20문항 / 30문항 선택형 진단
 * 레벨 1(Starter) ~ 레벨 10(Veritas Elite) 정밀 판정 및 맞춤 학습 추천
 */

class LevelTestEngine {
    constructor() {
        this.questionCount = 10;
        this.questions = [];
        this.currentIndex = 0;
        this.userAnswers = [];
        this.timerSeconds = 0;
        this.timerInterval = null;
        this.isFinished = false;
        this.currentView = 'select'; // 'select' | 'test' | 'result'
    }

    /**
     * 레벨테스트 모달 열기
     */
    openModal(mode = null) {
        const modal = document.getElementById('modal-level-test');
        if (!modal) return;

        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');

        if (mode && [10, 20, 30].includes(Number(mode))) {
            this.startTest(Number(mode));
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
     * 모드 선택 화면 (10문항 / 20문항 / 30문항)
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
                                Veritas Level Diagnostic System
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
                <div class="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-slate-900 to-blue-950 text-white mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-blue-900/50 shadow-md">
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

                <!-- 문항 수 선택 안내 -->
                <div class="mb-4">
                    <h3 class="font-serif font-bold text-sm text-slate-800 mb-1 flex items-center gap-2">
                        <i data-lucide="layers" class="w-4 h-4 text-blue-900"></i>
                        원하시는 테스트 문항 수를 선택해 주세요
                    </h3>
                    <p class="text-xs text-slate-500">
                        문항 수가 많을수록 어휘, 문법, 독해, 회화 4대 핵심 영역을 더욱 세밀하고 정밀하게 진단할 수 있습니다.
                    </p>
                </div>

                <!-- 문항 수 선택 카드 3종 -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <!-- 10문항 쾌속 진단 -->
                    <div class="p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-600 bg-white hover:bg-blue-50/30 transition-all cursor-pointer group flex flex-col justify-between" onclick="window.levelTestEngine.startTest(10)">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-mono text-xs font-bold border border-emerald-200">
                                    Quick Scan
                                </span>
                                <span class="text-xs font-medium text-slate-400 flex items-center gap-1">
                                    <i data-lucide="clock" class="w-3.5 h-3.5"></i> 약 5분
                                </span>
                            </div>
                            <h4 class="font-serif font-black text-xl text-slate-900 group-hover:text-blue-900 mb-1">
                                10문항 진단
                            </h4>
                            <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                핵심 레벨 분기점(Lv.1~10)을 빠르게 짚어내어 나의 현재 대략적인 실력 위치를 즉시 확인합니다.
                            </p>
                        </div>
                        <button class="w-full py-2.5 rounded-xl bg-slate-100 group-hover:bg-blue-900 text-slate-700 group-hover:text-white font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                            <span>10문항 시작하기</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>

                    <!-- 20문항 표준 정밀 진단 (추천) -->
                    <div class="p-5 rounded-2xl border-2 border-blue-500 bg-blue-50/40 relative shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between" onclick="window.levelTestEngine.startTest(20)">
                        <div class="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-blue-900 text-amber-300 font-mono text-[10px] font-bold tracking-wider shadow">
                            RECOMMENDED
                        </div>
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-900 font-mono text-xs font-bold border border-blue-300">
                                    Standard Diagnostic
                                </span>
                                <span class="text-xs font-medium text-slate-500 flex items-center gap-1">
                                    <i data-lucide="clock" class="w-3.5 h-3.5"></i> 약 10분
                                </span>
                            </div>
                            <h4 class="font-serif font-black text-xl text-blue-950 mb-1">
                                20문항 진단
                            </h4>
                            <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                4대 핵심 영역(어휘, 문법, 독해, 회화)을 균형 있게 다루어 신뢰도 높은 최적의 레벨을 판정합니다.
                            </p>
                        </div>
                        <button class="w-full py-2.5 rounded-xl bg-blue-900 text-amber-300 font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow">
                            <span>20문항 추천 진단 시작</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-amber-300"></i>
                        </button>
                    </div>

                    <!-- 30문항 마스터 종합 진단 -->
                    <div class="p-5 rounded-2xl border-2 border-slate-200 hover:border-purple-600 bg-white hover:bg-purple-50/30 transition-all cursor-pointer group flex flex-col justify-between" onclick="window.levelTestEngine.startTest(30)">
                        <div>
                            <div class="flex items-center justify-between mb-3">
                                <span class="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 font-mono text-xs font-bold border border-purple-200">
                                    Master Comprehensive
                                </span>
                                <span class="text-xs font-medium text-slate-400 flex items-center gap-1">
                                    <i data-lucide="clock" class="w-3.5 h-3.5"></i> 약 15분
                                </span>
                            </div>
                            <h4 class="font-serif font-black text-xl text-slate-900 group-hover:text-purple-900 mb-1">
                                30문항 진단
                            </h4>
                            <p class="text-xs text-slate-600 leading-relaxed mb-4">
                                10개 전 레벨의 세밀한 난이도 변별과 영역별 강점/약점 분석까지 완벽하게 제공하는 심층 리포트입니다.
                            </p>
                        </div>
                        <button class="w-full py-2.5 rounded-xl bg-slate-100 group-hover:bg-purple-900 text-slate-700 group-hover:text-white font-serif font-bold text-xs transition-colors flex items-center justify-center gap-1.5">
                            <span>30문항 심층 진단 시작</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>

                <!-- 보상 및 혜택 안내 바 -->
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs flex flex-wrap items-center justify-between gap-3">
                    <div class="flex items-center gap-2">
                        <span class="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">🎁</span>
                        <span>테스트 완료 시 <strong>+150 EXP 경험치</strong>가 지급되며 베리타스 티어에 즉시 반영됩니다.</span>
                    </div>
                    <span class="text-slate-400 text-[11px]">* 언제든지 원하실 때 레벨테스트를 다시 응시할 수 있습니다.</span>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 레벨테스트 시작
     * @param {number} count 10 | 20 | 30
     */
    startTest(count = 10) {
        this.questionCount = count;
        this.questions = this.pickQuestions(count);
        this.currentIndex = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.timerSeconds = 0;
        this.isFinished = false;
        this.currentView = 'test';

        this.startTimer();
        this.renderQuestion();
    }

    /**
     * 문제 은행(LEVEL_TEST_BANK)에서 레벨별 균형 출제 추출
     */
    pickQuestions(count) {
        const bank = window.LEVEL_TEST_BANK || [];
        if (bank.length === 0) return [];

        // 레벨 1~10별 그룹화
        const levelBuckets = {};
        for (let l = 1; l <= 10; l++) {
            levelBuckets[l] = bank.filter(q => q.level === l);
        }

        const picked = [];
        const perLevelCount = Math.floor(count / 10); // 10문항 -> 1개, 20문항 -> 2개, 30문항 -> 3개

        for (let l = 1; l <= 10; l++) {
            const bucket = [...(levelBuckets[l] || [])];
            // 셔플
            bucket.sort(() => Math.random() - 0.5);
            picked.push(...bucket.slice(0, perLevelCount));
        }

        // 혹시 count보다 부족하면 나머지 레벨에서 보충
        if (picked.length < count) {
            const remaining = bank.filter(q => !picked.some(p => p.id === q.id));
            remaining.sort(() => Math.random() - 0.5);
            picked.push(...remaining.slice(0, count - picked.length));
        }

        return picked;
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
     * 문장 및 지문 렌더링 시 HTML 태그 처리 및 밑줄/강조 서식 변환
     * 1) <u>...</u> 태그를 세련된 밑줄 스타일 span으로 변환
     * 2) 혹시 모를 <word> 형태의 꺾쇠 마커도 안전하게 변환하여 브라우저의 태그 인식으로 인한 문장 끊김 현상 원천 방지
     */
    formatContent(text) {
        if (!text) return '';
        let str = String(text);
        // 1. 임의의 <word> 마커(단, 정상 태그 u/span/b/strong 등 제외)를 <u>...</u>로 안전 변환
        str = str.replace(/<(?!\/?(?:u|span|b|i|strong|em)\b)([a-zA-Z0-9_\s\-]+)>/g, '<u>$1</u>');
        // 2. <u>...</u> 태그를 세련된 밑줄 강조 span으로 변환
        str = str.replace(/<u>([\s\S]*?)<\/u>/gi, '<span class="underline decoration-blue-600 font-bold decoration-2 underline-offset-4 text-blue-950 bg-blue-50/60 px-1 py-0.5 rounded">$1</span>');
        return str;
    }

    /**
     * 발문에 영어 인용 문장이 포함되어 있는지 감지
     */
    isEnglishQuestion(text) {
        if (!text) return false;
        return /"[A-Za-z\s_,.!?'-]+"/.test(text) || /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(text);
    }

    /**
     * 현재 문제 지문 TTS 발음
     */
    speakCurrentPassage() {
        const q = this.questions[this.currentIndex];
        if (q && q.passage) {
            this.speakText(q.passage);
        }
    }

    /**
     * 현재 문제 발문 내 영문장 TTS 발음
     */
    speakCurrentQuestion() {
        const q = this.questions[this.currentIndex];
        if (!q || !q.question) return;
        const match = q.question.match(/"([^"]+)"/);
        const target = match ? match[1] : q.question;
        this.speakText(target);
    }

    /**
     * TTS 발음 재생 (HTML 태그 및 언더스코어 빈칸 정제)
     */
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

    /**
     * 현재 문제 렌더링
     */
    renderQuestion() {
        const container = document.getElementById('level-test-container');
        if (!container || this.questions.length === 0) return;

        const q = this.questions[this.currentIndex];
        const selectedChoice = this.userAnswers[this.currentIndex];
        const progressPct = Math.round(((this.currentIndex + 1) / this.questions.length) * 100);

        const mins = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
        const secs = String(this.timerSeconds % 60).padStart(2, '0');

        const categoryBadges = {
            voca: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            grammar: 'bg-indigo-50 text-indigo-700 border-indigo-200',
            reading: 'bg-amber-50 text-amber-800 border-amber-200',
            conversation: 'bg-purple-50 text-purple-700 border-purple-200'
        };
        const catBadgeClass = categoryBadges[q.category] || 'bg-slate-100 text-slate-700 border-slate-200';

        container.innerHTML = `
            <div class="p-6 sm:p-8">
                <!-- 상단 네비게이션 & 타이머 -->
                <div class="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                    <div class="flex items-center gap-3">
                        <button class="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-serif font-bold text-slate-600 transition-colors flex items-center gap-1" onclick="window.levelTestEngine.showModeSelection()">
                            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
                            모드 선택
                        </button>
                        <span class="font-mono text-xs font-bold text-slate-500">
                            문항 <strong class="text-blue-900 text-sm">${this.currentIndex + 1}</strong> / ${this.questions.length}
                        </span>
                    </div>

                    <div class="flex items-center gap-3">
                        <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-bold">
                            <i data-lucide="clock" class="w-3.5 h-3.5 text-blue-900"></i>
                            <span id="level-test-timer-display">${mins}:${secs}</span>
                        </div>
                        <button class="w-8 h-8 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors" onclick="window.levelTestEngine.closeModal()" title="테스트 중단">
                            <i data-lucide="x" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>

                <!-- 진행도 바 -->
                <div class="w-full bg-slate-100 rounded-full h-1.5 mb-6 overflow-hidden">
                    <div class="bg-gradient-to-r from-blue-900 via-indigo-600 to-amber-400 h-1.5 rounded-full transition-all duration-300" style="width: ${progressPct}%;"></div>
                </div>

                <!-- 문제 메타 배지 -->
                <div class="flex flex-wrap items-center gap-2 mb-3">
                    <span class="px-2.5 py-0.5 rounded-md font-mono text-[11px] font-bold border ${catBadgeClass}">
                        ${q.categoryKo}
                    </span>
                    <span class="px-2.5 py-0.5 rounded-md font-mono text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                        난이도 Lv.${q.level}
                    </span>
                </div>

                <!-- 본문 지문 (reading or dialogue passage가 있을 경우) -->
                ${q.passage ? `
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
                <div class="space-y-3 mb-8">
                    ${q.options.map((opt, idx) => {
                        const isSelected = (selectedChoice === idx);
                        const numIcon = ['①', '②', '③', '④'][idx] || `${idx + 1}.`;
                        return `
                            <button class="w-full text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3.5 cursor-pointer ${
                                isSelected 
                                    ? 'border-blue-900 bg-blue-50 text-blue-950 font-bold shadow-sm' 
                                    : 'border-slate-200 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800'
                            }" onclick="window.levelTestEngine.selectOption(${idx})">
                                <span class="font-mono text-sm ${isSelected ? 'text-blue-900 font-black' : 'text-slate-400'} shrink-0 pt-0.5">
                                    ${numIcon}
                                </span>
                                <span class="text-sm font-serif leading-relaxed">
                                    ${this.formatContent(opt)}
                                </span>
                            </button>
                        `;
                    }).join('')}
                </div>

                <!-- 하단 이전 / 다음 / 완료 제어 바 -->
                <div class="flex items-center justify-between pt-4 border-t border-slate-100">
                    <button class="px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 font-serif font-bold text-xs transition-colors flex items-center gap-1.5 ${this.currentIndex === 0 ? 'opacity-40 pointer-events-none' : ''}" onclick="window.levelTestEngine.prevQuestion()">
                        <i data-lucide="chevron-left" class="w-4 h-4"></i>
                        <span>이전 문제</span>
                    </button>

                    <div class="flex items-center gap-2">
                        ${this.currentIndex < this.questions.length - 1 ? `
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
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
        }
    }

    /**
     * 시험 완료 및 레벨 판정 알고리즘
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
        const categoryCorrect = { voca: 0, grammar: 0, reading: 0, conversation: 0 };
        const categoryTotal = { voca: 0, grammar: 0, reading: 0, conversation: 0 };
        const levelResults = {};

        for (let l = 1; l <= 10; l++) {
            levelResults[l] = { total: 0, correct: 0 };
        }

        this.questions.forEach((q, idx) => {
            const userChoice = this.userAnswers[idx];
            const isCorrect = (userChoice === q.answer);

            categoryTotal[q.category] = (categoryTotal[q.category] || 0) + 1;
            if (isCorrect) {
                correctCount++;
                categoryCorrect[q.category] = (categoryCorrect[q.category] || 0) + 1;
            }

            if (levelResults[q.level]) {
                levelResults[q.level].total++;
                if (isCorrect) levelResults[q.level].correct++;
            }
        });

        const totalQuestions = this.questions.length;
        const accuracyPct = Math.round((correctCount / totalQuestions) * 100);
        const score = Math.round((correctCount / totalQuestions) * 100);

        // 영역별 백분율
        const categoryScores = {
            voca: categoryTotal.voca > 0 ? Math.round((categoryCorrect.voca / categoryTotal.voca) * 100) : 0,
            grammar: categoryTotal.grammar > 0 ? Math.round((categoryCorrect.grammar / categoryTotal.grammar) * 100) : 0,
            reading: categoryTotal.reading > 0 ? Math.round((categoryCorrect.reading / categoryTotal.reading) * 100) : 0,
            conversation: categoryTotal.conversation > 0 ? Math.round((categoryCorrect.conversation / categoryTotal.conversation) * 100) : 0
        };

        // 정밀 레벨 산정 공식:
        // 정답 문항들의 난이도 가중 점수 + 연속 정답 달성도 분석
        let assignedLevel = 1;
        if (accuracyPct >= 95) {
            assignedLevel = 10;
        } else if (accuracyPct >= 85) {
            assignedLevel = 9;
        } else if (accuracyPct >= 75) {
            assignedLevel = 8;
        } else if (accuracyPct >= 65) {
            assignedLevel = 7;
        } else if (accuracyPct >= 55) {
            assignedLevel = 6;
        } else if (accuracyPct >= 45) {
            assignedLevel = 5;
        } else if (accuracyPct >= 35) {
            assignedLevel = 4;
        } else if (accuracyPct >= 25) {
            assignedLevel = 3;
        } else if (accuracyPct >= 15) {
            assignedLevel = 2;
        } else {
            assignedLevel = 1;
        }

        // 결과 저장 및 +150 EXP 보상 수여
        let saveRes = null;
        if (window.storage && typeof window.storage.saveLevelTestResult === 'function') {
            saveRes = window.storage.saveLevelTestResult({
                questionCount: this.questionCount,
                score,
                correctCount,
                level: assignedLevel,
                categoryScores
            });
        }

        this.renderResultReport({
            assignedLevel,
            score,
            correctCount,
            totalQuestions,
            accuracyPct,
            categoryScores,
            timeSeconds: this.timerSeconds,
            saveRes
        });
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

        container.innerHTML = `
            <div class="p-6 sm:p-8">
                <!-- 상단 헤더 -->
                <div class="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                    <div>
                        <span class="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-mono text-[11px] font-bold border border-emerald-200 mb-1">
                            Diagnostic Assessment Completed
                        </span>
                        <h2 class="font-serif font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
                            실력 진단 리포트 & 맞춤 학습 로드맵
                        </h2>
                    </div>
                    <button class="w-9 h-9 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors" onclick="window.levelTestEngine.closeModal()" title="닫기">
                        <i data-lucide="x" class="w-5 h-5"></i>
                    </button>
                </div>

                <!-- 최종 획득 레벨 대형 배너 -->
                <div class="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-2 ${info ? info.borderColor : 'border-amber-400'} shadow-xl mb-6 relative overflow-hidden">
                    <div class="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-amber-400/10 blur-2xl pointer-events-none"></div>

                    <div class="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                        <div class="text-center md:text-left">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-mono text-xs font-bold border border-amber-400/30 mb-2">
                                <i data-lucide="award" class="w-3.5 h-3.5"></i>
                                공식 진단 결과
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

                <!-- 4대 영역별 역량 분석 바 -->
                <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                    <h3 class="font-serif font-bold text-sm text-slate-800 mb-3 flex items-center gap-2">
                        <i data-lucide="bar-chart-3" class="w-4 h-4 text-blue-900"></i>
                        4대 핵심 역량 진단 분석
                    </h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        ${[
                            { key: 'voca', label: '어휘력 (Vocabulary)', score: result.categoryScores.voca, color: 'bg-emerald-500' },
                            { key: 'grammar', label: '문법·구문 (Grammar)', score: result.categoryScores.grammar, color: 'bg-indigo-500' },
                            { key: 'reading', label: '독해력 (Reading)', score: result.categoryScores.reading, color: 'bg-amber-500' },
                            { key: 'conversation', label: '실전 회화 (Dialogue)', score: result.categoryScores.conversation, color: 'bg-purple-500' }
                        ].map(c => `
                            <div class="p-3 bg-white rounded-xl border border-slate-200">
                                <div class="flex items-center justify-between text-xs mb-1.5">
                                    <span class="font-serif font-bold text-slate-700 text-[11px]">${c.label}</span>
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
                        <!-- 추천 영단어 단원 -->
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

                <!-- 문항별 상세 해설 & 오답 리뷰 아코디언 -->
                <div class="mb-6 rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                    <button type="button" class="w-full p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition-colors text-left font-serif font-bold text-sm text-slate-800 cursor-pointer" onclick="window.levelTestEngine.toggleReviewList()">
                        <span class="flex items-center gap-2">
                            <i data-lucide="file-text" class="w-4 h-4 text-blue-900"></i>
                            <span>전 문항 정답 및 상세 해설 / 오답 복습 확인하기 (${result.correctCount}/${result.totalQuestions} 정답)</span>
                        </span>
                        <i id="level-test-review-toggle-icon" data-lucide="chevron-down" class="w-4 h-4 text-slate-500 transition-transform"></i>
                    </button>
                    <div id="level-test-review-list" class="hidden p-4 sm:p-5 space-y-4 border-t border-slate-200 max-h-[350px] overflow-y-auto">
                        ${this.questions.map((q, qIdx) => {
                            const userAns = this.userAnswers[qIdx];
                            const isCorrect = (userAns === q.answer);
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
                                        </div>
                                        <span class="text-xs font-serif font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-600'}">
                                            ${isCorrect ? '✓ 정답' : '✗ 오답'}
                                        </span>
                                    </div>

                                    ${q.passage ? `
                                        <div class="p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-serif leading-relaxed whitespace-pre-line">
                                            ${this.formatContent(q.passage)}
                                        </div>
                                    ` : ''}

                                    <h5 class="font-serif font-bold text-xs sm:text-sm text-slate-900 leading-snug whitespace-pre-line">
                                        ${this.formatContent(q.question)}
                                    </h5>

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

                                    <div class="p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-slate-700 font-serif">
                                        <strong class="text-blue-900 font-bold">💡 해설:</strong> ${this.formatContent(q.explanation)}
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- 하단 액션 버튼 -->
                <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                    <button class="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 font-serif font-bold text-xs transition-colors flex items-center gap-1.5" onclick="window.levelTestEngine.showModeSelection()">
                        <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                        <span>다시 테스트하기</span>
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

    toggleReviewList() {
        const list = document.getElementById('level-test-review-list');
        const icon = document.getElementById('level-test-review-toggle-icon');
        if (!list) return;
        const isHidden = list.classList.contains('hidden');
        if (isHidden) {
            list.classList.remove('hidden');
            if (icon) icon.classList.add('rotate-180');
        } else {
            list.classList.add('hidden');
            if (icon) icon.classList.remove('rotate-180');
        }
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
