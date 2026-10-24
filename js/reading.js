/**
 * Veritas English - 중등 전용 내신 독해 & 비문학/소설 마스터 엔진 (Reading & Exam Engine)
 * 중1, 중2, 중3 학년별 20개 (학기별 10개씩) 총 6개 학기 단원, 60개 실전 지문 완비
 * 
 * 1. 단원(Semester Unit)별 선택 및 학년 필터 (중 1-1 ~ 중 3-2)
 * 2. 단원 전체(10지문) 학습 계획표 자동 배정 등록 / 일괄 삭제 연동
 * 3. 고난도 지문 뷰어 (문장 번호, TTS 발음, 한 줄 해석 토글, 읽기 타이머)
 * 4. 실전 중등 내신 4대 유형 문제 풀이 (어법 오류, 빈칸 추론, 내용 일치, 서술형 조건 영작)
 * 5. 지문 속 고난도 어휘 -> 단어장/사전 및 플래너 원클릭 연동
 * 6. 자동 채점, 서술형 키워드 판별 및 내신 출제 포인트 해설 리포트
 */

class ReadingEngine {
    constructor() {
        this.units = typeof READING_UNITS !== 'undefined' ? READING_UNITS : [];
        this.passages = typeof READING_PASSAGES !== 'undefined' ? READING_PASSAGES : [];
        
        this.currentGradeFilter = 'all'; // 'all', '중1', '중2', '중3'
        this.currentUnitId = this.units[0]?.unitId || 'unit-m1-1';
        this.currentPassageId = null;
        this.categoryFilter = 'all'; // 'all', 'nonfiction', 'fiction'

        // 리더 상태
        this.showTranslation = false;
        this.readingTimerSeconds = 0;
        this.timerInterval = null;
        this.isTimerRunning = false;

        // 시험 상태
        this.userAnswers = {}; // { [questionId]: optionIndex or text }
        this.examSubmitted = false;
        this.examScore = 0;
        this.totalPoints = 0;

        // 초기 지문 설정
        const initialUnitPassages = this.passages.filter(p => p.unitId === this.currentUnitId);
        if (initialUnitPassages.length > 0) {
            this.currentPassageId = initialUnitPassages[0].id;
        }

        this.initEventListeners();
    }

    initEventListeners() {
        // 단축키 또는 이벤트 바인딩
    }

    render() {
        this.renderUnitSelector();
        this.renderUnitBanner();
        this.renderPassageSelector();
        this.renderActivePassage();
    }

    getCurrentUnit() {
        return this.units.find(u => u.unitId === this.currentUnitId) || this.units[0];
    }

    getCurrentPassage() {
        let p = this.passages.find(item => item.id === this.currentPassageId);
        if (!p) {
            const unitPassages = this.passages.filter(item => item.unitId === this.currentUnitId);
            p = unitPassages[0] || this.passages[0];
            if (p) this.currentPassageId = p.id;
        }
        return p;
    }

    /**
     * 상단 학년 필터 및 단원(Unit) 선택 드롭다운 렌더링
     */
    renderUnitSelector() {
        const selectEl = document.getElementById('reading-unit-select');
        if (!selectEl) return;

        const filteredUnits = this.units.filter(u => {
            if (this.currentGradeFilter !== 'all' && u.grade !== this.currentGradeFilter) return false;
            return true;
        });

        selectEl.innerHTML = filteredUnits.map(u => `
            <option value="${u.unitId}" ${u.unitId === this.currentUnitId ? 'selected' : ''}>
                ${u.unitTitle} (${u.grade} ${u.semester} • 10지문)
            </option>
        `).join('');

        // 만약 필터로 인해 현재 단원이 목록에 없으면 첫 단원으로 변경
        if (filteredUnits.length > 0 && !filteredUnits.some(u => u.unitId === this.currentUnitId)) {
            this.selectUnit(filteredUnits[0].unitId);
        }
    }

    /**
     * 선택된 단원 상세 정보 배너 및 계획표 등록 상태 렌더링
     */
    renderUnitBanner() {
        const unit = this.getCurrentUnit();
        if (!unit) return;

        const titleEl = document.getElementById('reading-unit-banner-title');
        const descEl = document.getElementById('reading-unit-banner-desc');
        const statusBadgeEl = document.getElementById('reading-unit-status-badge');
        const deleteBtn = document.getElementById('btn-delete-reading-unit-plan');

        if (titleEl) titleEl.textContent = unit.unitTitle;
        if (descEl) descEl.textContent = `${unit.description} (총 10개 지문, 실전 내신 40문항)`;

        // 계획표 등록 여부 확인
        if (window.storage && statusBadgeEl) {
            const statusMap = window.storage.getReadingUnitStatusMap();
            const status = statusMap[unit.unitId];

            if (status && status.isRegistered) {
                statusBadgeEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-900 border border-emerald-300';
                statusBadgeEl.innerHTML = `
                    <i data-lucide="calendar-check" class="w-3.5 h-3.5 text-emerald-700"></i>
                    <span>계획표 배정 완료: ${status.startDate} ~ ${status.endDate} (${status.passageCount}편 배정)</span>
                `;
                if (deleteBtn) deleteBtn.classList.remove('hidden');
            } else {
                statusBadgeEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-200 text-slate-700 border border-slate-300';
                statusBadgeEl.innerHTML = `
                    <i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-500"></i>
                    <span>계획표 미배정 (원클릭 단원 등록 가능)</span>
                `;
                if (deleteBtn) deleteBtn.classList.add('hidden');
            }
        }

        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 단원 내 지문 선택기 렌더링
     */
    renderPassageSelector() {
        const selectEl = document.getElementById('reading-passage-select');
        if (!selectEl) return;

        // 현재 단원에 속한 지문들
        let unitPassages = this.passages.filter(p => p.unitId === this.currentUnitId);

        if (this.categoryFilter !== 'all') {
            unitPassages = unitPassages.filter(p => p.category === this.categoryFilter);
        }

        selectEl.innerHTML = unitPassages.map((p, idx) => `
            <option value="${p.id}" ${p.id === this.currentPassageId ? 'selected' : ''}>
                [${p.category === 'fiction' ? '📖 소설' : '🔬 비문학'}] ${idx + 1}. ${p.title} (${p.koreanTitle})
            </option>
        `).join('');

        if (unitPassages.length > 0 && !unitPassages.some(p => p.id === this.currentPassageId)) {
            this.currentPassageId = unitPassages[0].id;
        }
    }

    selectUnit(unitId) {
        if (!unitId) return;
        this.currentUnitId = unitId;
        const unitPassages = this.passages.filter(p => p.unitId === unitId);
        if (unitPassages.length > 0) {
            this.currentPassageId = unitPassages[0].id;
        }
        this.resetExamState();
        this.renderUnitBanner();
        this.renderPassageSelector();
        this.renderActivePassage();
    }

    setGradeFilter(grade) {
        this.currentGradeFilter = grade;
        document.querySelectorAll('.reading-grade-btn').forEach(btn => {
            btn.classList.toggle('active-subtab', btn.dataset.grade === grade);
        });
        this.renderUnitSelector();
        this.renderUnitBanner();
        this.renderPassageSelector();
        this.renderActivePassage();
    }

    selectPassage(passageId) {
        if (!passageId) return;
        this.currentPassageId = passageId;
        const p = this.passages.find(item => item.id === passageId);
        if (p && p.unitId !== this.currentUnitId) {
            this.currentUnitId = p.unitId;
            const unitSelect = document.getElementById('reading-unit-select');
            if (unitSelect) unitSelect.value = p.unitId;
            this.renderUnitBanner();
        }
        this.resetExamState();
        this.renderPassageSelector();
        this.renderActivePassage();
    }

    setCategoryFilter(category) {
        this.categoryFilter = category;
        document.querySelectorAll('.reading-cat-btn').forEach(btn => {
            btn.classList.toggle('active-subtab', btn.dataset.category === category);
        });
        this.renderPassageSelector();
        this.renderActivePassage();
    }

    /**
     * 현재 선택된 지문 본문(좌측) 및 실전 내신 시험(우측) 렌더링
     */
    renderActivePassage() {
        const passage = this.getCurrentPassage();
        if (!passage) return;

        // 메타 정보 렌더링
        const badgeEl = document.getElementById('reading-meta-badge');
        const titleEl = document.getElementById('reading-meta-title');
        const koTitleEl = document.getElementById('reading-meta-kotitle');
        const wordCountEl = document.getElementById('reading-meta-words');
        const estTimeEl = document.getElementById('reading-meta-esttime');
        const summaryEl = document.getElementById('reading-meta-summary');

        if (badgeEl) badgeEl.textContent = `${passage.unitTitle} • ${passage.categoryLabel.split('•')[0].trim()} • ${passage.levelLabel}`;
        if (titleEl) titleEl.textContent = passage.title;
        if (koTitleEl) koTitleEl.textContent = passage.koreanTitle;
        if (wordCountEl) wordCountEl.textContent = `${passage.wordCount}단어`;
        if (estTimeEl) estTimeEl.textContent = `권장 ${passage.estimatedTime}`;
        if (summaryEl) summaryEl.textContent = passage.summary;

        // 좌측 지문 문장별 렌더링
        const textContainer = document.getElementById('reading-passage-text-container');
        if (textContainer) {
            textContainer.innerHTML = passage.sentences.map(s => `
                <div class="reading-sentence-row group p-2.5 rounded-xl transition-colors hover:bg-blue-50/50">
                    <div class="flex items-start gap-2.5">
                        <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-mono text-[11px] font-bold shrink-0 mt-0.5 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                            ${s.num}
                        </span>
                        <div class="flex-1 space-y-1">
                            <p class="font-serif text-slate-900 text-sm sm:text-base leading-relaxed tracking-wide select-text">
                                ${s.en}
                            </p>
                            <p class="reading-ko-text text-xs text-slate-500 font-medium ${this.showTranslation ? '' : 'hidden'}">
                                ${s.ko}
                            </p>
                        </div>
                        <button class="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-blue-900 transition-opacity cursor-pointer shrink-0" onclick="window.tts && window.tts.speak('${s.en.replace(/'/g, "\\'")}')" title="이 문장만 듣기">
                            <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // 지문 속 핵심 어휘 목록 렌더링
        const vocabContainer = document.getElementById('reading-passage-key-vocab');
        if (vocabContainer && passage.keyVocabulary) {
            vocabContainer.innerHTML = passage.keyVocabulary.map(v => `
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs cursor-pointer" onclick="window.tts && window.tts.speak('${v.word.replace(/'/g, "\\'")}')" title="클릭하여 발음 청취">
                    <span class="font-serif font-black text-slate-900">${v.word}</span>
                    <span class="text-[10px] font-mono text-slate-500 font-bold">${v.partOfSpeech}</span>
                    <span class="text-slate-700 text-[11px]">${v.meaning}</span>
                </div>
            `).join('');
        }

        // 우측 실전 내신 문제 렌더링
        this.renderQuestions(passage);

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    /**
     * 우측 내신 문제 목록 렌더링
     */
    renderQuestions(passage) {
        const container = document.getElementById('reading-questions-container');
        if (!container) return;

        const questions = passage.questions || [];

        container.innerHTML = questions.map((q, idx) => {
            const userAnswer = this.userAnswers[q.id];
            const isSubmitted = this.examSubmitted;
            const isCorrect = isSubmitted ? this.checkAnswer(q, userAnswer) : null;

            let questionBodyHtml = '';

            // 서술형 문제인 경우
            if (q.type === 'subjective') {
                questionBodyHtml = `
                    <div class="space-y-3 mt-3">
                        <textarea id="ans-input-${q.id}" rows="3" class="w-full p-3 text-xs sm:text-sm font-serif bg-slate-50 border ${
                            isSubmitted ? (isCorrect ? 'border-emerald-500 bg-emerald-50/20' : 'border-red-400 bg-red-50/20') : 'border-slate-200'
                        } rounded-xl outline-none focus:border-blue-900 focus:bg-white transition-all" placeholder="조건에 맞추어 영문장을 완성하여 입력하세요..." ${isSubmitted ? 'disabled' : ''} oninput="window.readingEngine.setUserAnswer('${q.id}', this.value)">${userAnswer || ''}</textarea>
                        
                        ${isSubmitted ? `
                            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                                <div class="font-bold text-slate-800 flex items-center gap-1">
                                    <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600"></i>
                                    <span>모범 답안:</span>
                                </div>
                                <div class="font-serif italic text-blue-950 font-bold">${q.sampleAnswer}</div>
                                <div class="text-slate-600 text-[11px] mt-1">${q.explanation}</div>
                            </div>
                        ` : ''}
                    </div>
                `;
            } 
            // 객관식 문제인 경우
            else {
                questionBodyHtml = `
                    <div class="space-y-2 mt-3">
                        ${q.options.map((opt, optIdx) => {
                            const isSelected = (userAnswer === optIdx);
                            const isAnswer = (optIdx === q.correctIndex);
                            let optClass = 'border-slate-200 bg-white hover:border-slate-300';

                            if (isSubmitted) {
                                if (isAnswer) {
                                    optClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-500';
                                } else if (isSelected && !isAnswer) {
                                    optClass = 'border-red-400 bg-red-50 text-red-900 line-through';
                                }
                            } else if (isSelected) {
                                optClass = 'border-blue-900 bg-blue-50/60 text-blue-950 font-bold ring-1 ring-blue-900';
                            }

                            return `
                                <button class="w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${optClass}" onclick="window.readingEngine.setUserAnswer('${q.id}', ${optIdx})" ${isSubmitted ? 'disabled' : ''}>
                                    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-mono text-xs font-bold shrink-0 mt-0.5">
                                        ${optIdx + 1}
                                    </span>
                                    <span class="leading-relaxed">${opt}</span>
                                </button>
                            `;
                        }).join('')}

                        ${isSubmitted ? `
                            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-1 mt-2">
                                <strong class="text-blue-900 font-bold">💡 내신 출제 포인트 & 정답 해설:</strong>
                                <div>${q.explanation}</div>
                            </div>
                        ` : ''}
                    </div>
                `;
            }

            return `
                <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div class="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
                        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                            q.type === 'grammar' ? 'bg-indigo-100 text-indigo-900' :
                            q.type === 'blank' ? 'bg-amber-100 text-amber-900' :
                            q.type === 'subjective' ? 'bg-red-100 text-red-900' :
                            'bg-emerald-100 text-emerald-900'
                        }">
                            Question ${idx + 1} • ${q.typeLabel}
                        </span>

                        ${isSubmitted ? `
                            <span class="text-xs font-bold font-mono px-2 py-0.5 rounded ${
                                isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                            }">
                                ${isCorrect ? '✓ 정답' : '✗ 오답'}
                            </span>
                        ` : ''}
                    </div>

                    <h4 class="font-bold text-slate-900 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                        ${q.questionText}
                    </h4>

                    ${q.passageWithUnderline ? `
                        <div class="p-3 rounded-xl bg-slate-50 text-xs font-serif leading-relaxed text-slate-800 border border-slate-200 my-2">
                            ${q.passageWithUnderline}
                        </div>
                    ` : ''}

                    ${q.passageWithBlank ? `
                        <div class="p-3 rounded-xl bg-slate-50 text-xs font-serif leading-relaxed text-slate-800 border border-slate-200 my-2">
                            ${q.passageWithBlank}
                        </div>
                    ` : ''}

                    ${questionBodyHtml}
                </div>
            `;
        }).join('');

        // 하단 시험 제출 / 다시 풀기 버튼 제어
        const submitBtn = document.getElementById('btn-submit-reading-exam');
        const retakeBtn = document.getElementById('btn-retake-reading-exam');
        const scoreBanner = document.getElementById('reading-exam-score-banner');

        if (submitBtn) submitBtn.classList.toggle('hidden', this.examSubmitted);
        if (retakeBtn) retakeBtn.classList.toggle('hidden', !this.examSubmitted);
        if (scoreBanner) {
            scoreBanner.classList.toggle('hidden', !this.examSubmitted);
            if (this.examSubmitted) {
                const scoreText = document.getElementById('reading-score-text');
                const scoreFeedback = document.getElementById('reading-score-feedback');
                if (scoreText) scoreText.textContent = `${this.examScore} / 100점`;
                if (scoreFeedback) {
                    if (this.examScore >= 90) {
                        scoreFeedback.textContent = '🎉 중등 내신 1등급 최상위권 완성! 완벽한 구문 독해력입니다.';
                    } else if (this.examScore >= 70) {
                        scoreFeedback.textContent = '👍 우수합니다! 어법 및 서술형 해설을 다시 한번 복습하세요.';
                    } else {
                        scoreFeedback.textContent = '💡 지문의 핵심 어법과 주제문을 다시 정독하고 오답을 복습해 보세요.';
                    }
                }
            }
        }
    }

    /**
     * 답안 선택 및 입력 처리
     */
    setUserAnswer(questionId, answer) {
        if (this.examSubmitted) return;
        this.userAnswers[questionId] = answer;
        const passage = this.getCurrentPassage();
        this.renderQuestions(passage);
    }

    /**
     * 정답 채점 로직
     */
    checkAnswer(question, userAnswer) {
        if (question.type === 'subjective') {
            if (!userAnswer || typeof userAnswer !== 'string') return false;
            const cleanUser = userAnswer.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
            const keywords = question.keywords || [];
            const matched = keywords.filter(kw => cleanUser.includes(kw.toLowerCase()));
            return matched.length >= Math.ceil(keywords.length * 0.7);
        } else {
            return userAnswer === question.correctIndex;
        }
    }

    /**
     * 시험 제출 및 채점 실행
     */
    submitExam() {
        const passage = this.getCurrentPassage();
        const questions = passage.questions || [];

        const answeredCount = Object.keys(this.userAnswers).length;
        if (answeredCount < questions.length) {
            if (!confirm(`아직 풀지 않은 문항이 있습니다 (${answeredCount}/${questions.length} 완료). 그대로 제출하시겠습니까?`)) {
                return;
            }
        }

        let correctCount = 0;
        questions.forEach(q => {
            const ans = this.userAnswers[q.id];
            if (this.checkAnswer(q, ans)) {
                correctCount++;
            }
        });

        this.examSubmitted = true;
        this.examScore = Math.round((correctCount / questions.length) * 100);

        // 학습 기록 영구 저장 (학업 목표 트래커 연동)
        if (window.storage && window.storage.recordReadingPassageResult && passage) {
            window.storage.recordReadingPassageResult(passage.id, this.examScore, passage.title);
            if (window.app && window.app.renderDashboard) window.app.renderDashboard();
            if (window.plannerEngine && window.plannerEngine.render) window.plannerEngine.render();
        }

        this.renderActivePassage();

        if (this.examScore >= 70 && typeof confetti === 'function') {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        const scoreBanner = document.getElementById('reading-exam-score-banner');
        if (scoreBanner) {
            scoreBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    /**
     * 시험 다시 풀기 초기화
     */
    resetExamState() {
        this.userAnswers = {};
        this.examSubmitted = false;
        this.examScore = 0;
    }

    /**
     * 한 줄 해석 전체 토글
     */
    toggleTranslation() {
        this.showTranslation = !this.showTranslation;
        const btn = document.getElementById('btn-toggle-reading-ko');
        if (btn) {
            btn.innerHTML = this.showTranslation ? 
                '<i data-lucide="eye-off" class="w-3.5 h-3.5"></i> 한 줄 해석 숨기기' : 
                '<i data-lucide="eye" class="w-3.5 h-3.5"></i> 한 줄 해석 전체 보기';
        }
        document.querySelectorAll('.reading-ko-text').forEach(el => {
            el.classList.toggle('hidden', !this.showTranslation);
        });
        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 전체 지문 원어민 TTS 낭독
     */
    speakEntirePassage() {
        const passage = this.getCurrentPassage();
        if (!passage || !window.tts) return;
        const fullText = passage.sentences.map(s => s.en).join(' ');
        window.tts.speak(fullText);
    }

    /**
     * 지문 속 고난도 어휘 전체를 단어장/사전 및 플래너에 원클릭 등록
     */
    registerPassageWordsToVocab() {
        const passage = this.getCurrentPassage();
        if (!passage || !passage.keyVocabulary || passage.keyVocabulary.length === 0) return;

        const todayStr = window.storage.getTodayDateString();
        const items = passage.keyVocabulary.map(v => ({
            word: v.word,
            partOfSpeech: v.partOfSpeech,
            meaning: v.meaning,
            example: passage.sentences[0]?.en || '',
            exampleMeaning: passage.sentences[0]?.ko || ''
        }));

        const added = window.storage.addBulkWords(items, todayStr, `${passage.unitTitle} [${passage.title.slice(0, 12)}...]`, 'middle');

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.6 }
            });
        }

        alert(`📚 [${passage.title}] 지문 속 핵심 어휘 ${added.length}개가 단어장과 사전, 오늘의 플래너에 성공적으로 등록되었습니다!`);

        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }

    /**
     * 현재 선택된 단원 전체(10개 지문)를 학습 계획표에 배정 등록
     */
    registerCurrentUnitToPlanner() {
        const unit = this.getCurrentUnit();
        if (!unit || !window.storage) return;

        // 스마트 일괄 계획 배정 모달 오픈 (요일 선택 및 시작 소단원 지정 지원)
        if (window.app && window.app.openReadingBatchPlanModal) {
            window.app.openReadingBatchPlanModal(unit);
            return;
        }

        const today = window.storage.getTodayDateString();
        const dateInput = prompt(
            `[${unit.unitTitle}] 10개 지문을 매일 1지문씩 학습 계획표에 배정합니다.\n\n학습 시작일을 입력하세요 (YYYY-MM-DD):`,
            today
        );

        if (!dateInput) return;

        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(dateInput.trim())) {
            alert('날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식으로 입력해주세요.');
            return;
        }

        const res = window.storage.registerReadingUnit(unit.unitId, dateInput.trim());

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 70,
                spread: 60,
                origin: { y: 0.6 }
            });
        }

        alert(`🎉 [${res.unitTitle}] 단원이 학습 계획표에 성공적으로 등록되었습니다!\n\n• 배정 지문: ${res.addedPassages}개 지문\n• 배정 기간: ${res.startDate} ~ ${res.endDate} (1일 1지문)\n• 학습 플래너 캘린더에서 매일의 독해 과제를 확인하세요!`);

        this.renderUnitBanner();

        if (window.plannerEngine) {
            window.plannerEngine.render();
        }
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }

    /**
     * 현재 선택된 단원 전체 계획 삭제
     */
    deleteCurrentUnitFromPlanner() {
        const unit = this.getCurrentUnit();
        if (!unit || !window.storage) return;

        if (!confirm(`정말로 [${unit.unitTitle}]의 학습 계획을 플래너에서 일괄 삭제하시겠습니까?`)) {
            return;
        }

        const deleted = window.storage.deleteReadingUnit(unit.unitId);
        alert(`🗑️ [${unit.unitTitle}] 관련 학습 과제 총 ${deleted}건이 플래너에서 삭제되었습니다.`);

        this.renderUnitBanner();

        if (window.plannerEngine) {
            window.plannerEngine.render();
        }
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }
}

// 전역 인스턴스
window.readingEngine = new ReadingEngine();
