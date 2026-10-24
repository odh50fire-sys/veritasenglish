/**
 * Veritas English - 중등 내신 대비 시험지 생성기 및 실전 모의고사 엔진 (Exam Studio)
 * 학년별 맞춤 모의고사 생성(10/20/25제), 실전 CBT 타이머 & OMR 카드 풀이, A4 시험지 인쇄
 */

class ExamStudioEngine {
    constructor() {
        this.currentExam = null; // { id, title, grade, questions: [], timeLimitSec: 2700 }
        this.userAnswers = {};   // { [qIndex]: selectedOption }
        this.timerSeconds = 0;
        this.timerInterval = null;
        this.isSubmitted = false;
        this.examResult = null;  // { score, gradeLevel, correctCount, wrongCount }
        this.examHistory = [];
    }

    render() {
        this.renderHistory();
        this.renderWizardDefaults();
    }

    renderWizardDefaults() {
        // 기본값 세팅
    }

    renderHistory() {
        const container = document.getElementById('exam-history-list');
        if (!container || !window.storage) return;

        const history = window.storage.mockExams || [];
        if (history.length === 0) {
            container.innerHTML = `
                <div class="p-8 text-center bg-white rounded-2xl border border-slate-200">
                    <p class="text-xs text-slate-400">아직 응시한 모의고사가 없습니다. 아래에서 첫 모의고사를 생성해보세요!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = history.slice(0, 5).map(item => `
            <div class="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 shadow-2xs">
                <div>
                    <div class="flex items-center gap-2">
                        <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[10px] font-bold font-mono">${item.grade || '통합'}</span>
                        <h4 class="font-serif font-bold text-sm text-slate-900">${item.title}</h4>
                    </div>
                    <div class="text-xs text-slate-500 mt-0.5">
                        ${item.date} • ${item.totalQuestions}문항 중 ${item.correctCount || 0}문제 정답
                    </div>
                </div>
                <div class="text-right shrink-0">
                    <div class="font-mono font-black text-xl ${item.score >= 90 ? 'text-emerald-600' : item.score >= 80 ? 'text-blue-900' : 'text-slate-800'}">
                        ${item.score}점
                    </div>
                    <div class="text-[10px] font-bold ${item.score >= 90 ? 'text-emerald-600' : 'text-slate-400'}">
                        ${item.score >= 90 ? 'A 등급' : item.score >= 80 ? 'B 등급' : 'C 등급 이하'}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // ------------------------------------------------------------------------
    // 모의고사 시험지 자동 생성기 (Synthesizer)
    // ------------------------------------------------------------------------
    generateExam() {
        const gradeSelect = document.getElementById('exam-gen-grade');
        const countSelect = document.getElementById('exam-gen-count');
        const timeSelect = document.getElementById('exam-gen-time');

        const selectedGrade = gradeSelect ? gradeSelect.value : 'all';
        const questionCount = countSelect ? parseInt(countSelect.value, 10) : 20;
        const timeLimitMinutes = timeSelect ? parseInt(timeSelect.value, 10) : 45;

        // 지문 풀 필터링
        let passagePool = typeof READING_PASSAGES !== 'undefined' ? [...READING_PASSAGES] : [];
        if (selectedGrade !== 'all') {
            const gradeMap = {
                'PRE_M1': '예비중',
                'M1': '중1',
                'M2': '중2',
                'M3': '중3'
            };
            const targetGrade = gradeMap[selectedGrade] || selectedGrade;
            passagePool = passagePool.filter(p => p.grade === targetGrade);
        }

        if (passagePool.length === 0) {
            passagePool = typeof READING_PASSAGES !== 'undefined' ? [...READING_PASSAGES] : [];
        }

        // 지문 셔플
        passagePool.sort(() => Math.random() - 0.5);

        // 문항 추출
        const questions = [];
        let pIndex = 0;

        while (questions.length < questionCount && pIndex < passagePool.length) {
            const p = passagePool[pIndex];
            if (p.questions && p.questions.length > 0) {
                // 지문당 1~2문제 추출
                const qShuffled = [...p.questions].sort(() => Math.random() - 0.5);
                const pickCount = Math.min(2, questionCount - questions.length, qShuffled.length);
                for (let i = 0; i < pickCount; i++) {
                    const originalQ = qShuffled[i];
                    questions.push({
                        qNum: questions.length + 1,
                        passageId: p.id,
                        passageTitle: p.title,
                        passageGrade: p.grade,
                        passageText: p.sentences.map(s => s.en).join(' '),
                        questionText: originalQ.question,
                        typeLabel: originalQ.typeLabel || '객관식',
                        options: originalQ.options || [],
                        correctIndex: originalQ.correctIndex ?? 0,
                        explanation: originalQ.explanation || ''
                    });
                }
            }
            pIndex++;
        }

        // 시험지 객체 구축
        const gradeTitleMap = {
            'PRE_M1': '예비중 (초6~중1 입문)',
            'M1': '중1 내신 성취도',
            'M2': '중2 중간·기말고사 대비',
            'M3': '중3 최상위 내신 완성',
            'all': '중등 전학년 실전'
        };

        this.currentExam = {
            id: 'mock-' + Date.now(),
            title: `2026학년도 ${gradeTitleMap[selectedGrade] || '중등 내신'} 실전 모의고사 (${questions.length}문항)`,
            grade: selectedGrade,
            questionCount: questions.length,
            timeLimitSec: timeLimitMinutes * 60,
            questions
        };

        this.userAnswers = {};
        this.isSubmitted = false;
        this.examResult = null;

        // 시험 시작 화면 전환
        this.startCBTMode();
    }

    // ------------------------------------------------------------------------
    // 실전 CBT 응시 모드
    // ------------------------------------------------------------------------
    startCBTMode() {
        const setupView = document.getElementById('exam-setup-view');
        const cbtView = document.getElementById('exam-cbt-view');
        const resultView = document.getElementById('exam-result-view');

        if (setupView) setupView.classList.add('hidden');
        if (resultView) resultView.classList.add('hidden');
        if (cbtView) cbtView.classList.remove('hidden');

        // 타이머 시작
        this.timerSeconds = this.currentExam.timeLimitSec;
        this.startTimer();

        // 렌더링
        this.renderCBTScreen();
    }

    startTimer() {
        clearInterval(this.timerInterval);
        const timerEl = document.getElementById('exam-timer-display');
        
        const updateTimer = () => {
            if (this.currentExam.timeLimitSec === 0) {
                if (timerEl) timerEl.textContent = '무제한';
                return;
            }
            if (this.timerSeconds <= 0) {
                clearInterval(this.timerInterval);
                alert('⏰ 시험 시간이 종료되었습니다! 답안이 자동으로 제출됩니다.');
                this.submitExam(true);
                return;
            }
            const mins = Math.floor(this.timerSeconds / 60);
            const secs = this.timerSeconds % 60;
            if (timerEl) {
                timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
                if (this.timerSeconds <= 300) {
                    timerEl.classList.add('text-rose-600', 'animate-pulse');
                } else {
                    timerEl.classList.remove('text-rose-600', 'animate-pulse');
                }
            }
            this.timerSeconds--;
        };

        updateTimer();
        this.timerInterval = setInterval(updateTimer, 1000);
    }

    renderCBTScreen() {
        const titleEl = document.getElementById('exam-cbt-title');
        const questionsContainer = document.getElementById('exam-cbt-questions-container');
        const omrContainer = document.getElementById('exam-omr-grid');

        if (!this.currentExam) return;

        if (titleEl) titleEl.textContent = this.currentExam.title;

        // 문제 리스트 렌더링
        if (questionsContainer) {
            questionsContainer.innerHTML = this.currentExam.questions.map((q, idx) => `
                <div id="exam-q-box-${idx}" class="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3 scroll-mt-24">
                    <div class="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                        <span class="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold font-mono">
                            문항 ${q.qNum}
                        </span>
                        <span class="text-slate-400 font-serif">[${q.passageTitle}]</span>
                    </div>

                    <!-- 지문 박스 -->
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-100 font-serif text-sm leading-relaxed text-slate-800 max-h-48 overflow-y-auto">
                        ${q.passageText}
                    </div>

                    <!-- 질문 문구 -->
                    <h3 class="font-serif font-bold text-base text-slate-900 leading-snug">
                        ${q.questionText}
                    </h3>

                    <!-- 5지선다 버튼 -->
                    <div class="grid grid-cols-1 gap-2 pt-1">
                        ${q.options.map((opt, optIdx) => `
                            <button type="button" onclick="window.examStudio.selectOption(${idx}, ${optIdx})"
                                id="btn-opt-${idx}-${optIdx}"
                                class="exam-opt-btn w-full text-left p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-slate-800 text-xs sm:text-sm font-medium transition-all flex items-center gap-2.5">
                                <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-700 font-mono text-xs flex items-center justify-center font-bold shrink-0">
                                    ${optIdx + 1}
                                </span>
                                <span>${opt}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        // OMR 답안 마킹 카드 렌더링
        if (omrContainer) {
            omrContainer.innerHTML = this.currentExam.questions.map((q, idx) => `
                <div class="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-slate-50 text-xs border-b border-slate-100">
                    <span class="font-mono font-bold text-slate-500 w-6">${q.qNum}</span>
                    <div class="flex items-center gap-1.5">
                        ${[0, 1, 2, 3, 4].map(optIdx => `
                            <button type="button" onclick="window.examStudio.selectOption(${idx}, ${optIdx})"
                                id="omr-${idx}-${optIdx}"
                                class="w-6 h-6 rounded-full border border-slate-300 font-mono text-[11px] font-bold text-slate-600 hover:bg-blue-100 flex items-center justify-center transition-all cursor-pointer">
                                ${optIdx + 1}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        if (window.lucide) window.lucide.createIcons();
    }

    selectOption(qIndex, optIndex) {
        if (this.isSubmitted) return;
        this.userAnswers[qIndex] = optIndex;

        // OMR 마킹 시각화 갱신
        for (let i = 0; i < 5; i++) {
            const omrBtn = document.getElementById(`omr-${qIndex}-${i}`);
            if (omrBtn) {
                if (i === optIndex) {
                    omrBtn.className = 'w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-[11px] font-bold flex items-center justify-center shadow-xs';
                } else {
                    omrBtn.className = 'w-6 h-6 rounded-full border border-slate-300 font-mono text-[11px] font-bold text-slate-600 hover:bg-blue-100 flex items-center justify-center transition-all cursor-pointer';
                }
            }
            const optBtn = document.getElementById(`btn-opt-${qIndex}-${i}`);
            if (optBtn) {
                if (i === optIndex) {
                    optBtn.className = 'exam-opt-btn w-full text-left p-3 rounded-xl border-2 border-blue-900 bg-blue-50/70 text-blue-950 text-xs sm:text-sm font-bold shadow-xs flex items-center gap-2.5';
                } else {
                    optBtn.className = 'exam-opt-btn w-full text-left p-3 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 text-slate-800 text-xs sm:text-sm font-medium transition-all flex items-center gap-2.5';
                }
            }
        }

        // 풀이 진행 카운트 갱신
        const answeredCount = Object.keys(this.userAnswers).length;
        const total = this.currentExam.questions.length;
        const progressEl = document.getElementById('exam-cbt-progress');
        if (progressEl) progressEl.textContent = `${answeredCount} / ${total} 완료`;
    }

    submitExam(force = false) {
        if (this.isSubmitted) return;
        const total = this.currentExam.questions.length;
        const answeredCount = Object.keys(this.userAnswers).length;

        if (!force && answeredCount < total) {
            if (!confirm(`아직 풀지 않은 문제가 있습니다 (${answeredCount}/${total} 완료).\n정말 이대로 답안을 제출하시겠습니까?`)) {
                return;
            }
        }

        clearInterval(this.timerInterval);
        this.isSubmitted = true;

        // 채점
        let correctCount = 0;
        this.currentExam.questions.forEach((q, idx) => {
            const userChoice = this.userAnswers[idx];
            const isCorrect = (userChoice === q.correctIndex);
            if (isCorrect) {
                correctCount++;
            } else {
                // 오답노트에 자동 등록
                if (window.storage?.recordWrongAnswer) {
                    window.storage.recordWrongAnswer({
                        sourceType: 'exam',
                        passageId: q.passageId,
                        passageTitle: q.passageTitle,
                        questionText: `[모의고사 Q${q.qNum}] ${q.questionText}`,
                        userChoice: typeof userChoice === 'number' && q.options[userChoice] ? q.options[userChoice] : '미응답',
                        correctChoice: q.options[q.correctIndex] || '',
                        explanation: q.explanation || '',
                        options: q.options,
                        correctIndex: q.correctIndex
                    });
                }
            }
        });

        const score = Math.round((correctCount / total) * 100);
        let gradeLevel = 'E';
        if (score >= 90) gradeLevel = 'A';
        else if (score >= 80) gradeLevel = 'B';
        else if (score >= 70) gradeLevel = 'C';
        else if (score >= 60) gradeLevel = 'D';

        const timeSpentSec = this.currentExam.timeLimitSec - this.timerSeconds;

        this.examResult = {
            score,
            gradeLevel,
            correctCount,
            wrongCount: total - correctCount,
            total,
            timeSpentSec
        };

        // 저장소에 시험 성적 등록
        if (window.storage?.recordMockExamResult) {
            window.storage.recordMockExamResult({
                title: this.currentExam.title,
                grade: this.currentExam.grade,
                score,
                totalQuestions: total,
                correctCount,
                timeSpentSec
            });
        }

        if (score >= 80 && typeof confetti === 'function') {
            confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
        }

        this.renderResultView();
    }

    renderResultView() {
        const cbtView = document.getElementById('exam-cbt-view');
        const resultView = document.getElementById('exam-result-view');

        if (cbtView) cbtView.classList.add('hidden');
        if (resultView) resultView.classList.remove('hidden');

        const scoreEl = document.getElementById('exam-res-score');
        const gradeEl = document.getElementById('exam-res-grade');
        const titleEl = document.getElementById('exam-res-title');
        const correctEl = document.getElementById('exam-res-correct');
        const wrongEl = document.getElementById('exam-res-wrong');
        const timeEl = document.getElementById('exam-res-time');
        const analysisList = document.getElementById('exam-res-analysis-list');

        if (!this.examResult) return;

        if (scoreEl) scoreEl.textContent = this.examResult.score;
        if (gradeEl) gradeEl.textContent = `성취도 ${this.examResult.gradeLevel} 등급`;
        if (titleEl) titleEl.textContent = this.currentExam.title;
        if (correctEl) correctEl.textContent = `${this.examResult.correctCount}문항`;
        if (wrongEl) wrongEl.textContent = `${this.examResult.wrongCount}문항`;
        
        const mins = Math.floor(this.examResult.timeSpentSec / 60);
        const secs = this.examResult.timeSpentSec % 60;
        if (timeEl) timeEl.textContent = `${mins}분 ${secs}초`;

        if (analysisList) {
            analysisList.innerHTML = this.currentExam.questions.map((q, idx) => {
                const userChoice = this.userAnswers[idx];
                const isCorrect = (userChoice === q.correctIndex);

                return `
                    <div class="p-4 rounded-xl border ${isCorrect ? 'bg-emerald-50/20 border-emerald-200' : 'bg-rose-50/20 border-rose-200'} text-xs">
                        <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                            <span class="font-bold font-mono">Q${q.qNum}. [${q.typeLabel}]</span>
                            <span class="font-bold ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}">
                                ${isCorrect ? '✓ 정답 (100점)' : '✕ 오답 (오답노트 등록)'}
                            </span>
                        </div>
                        <p class="font-serif font-bold text-slate-900 mt-2 text-sm">${q.questionText}</p>
                        <div class="mt-2 space-y-1">
                            <div>내 답: <strong class="${isCorrect ? 'text-emerald-800' : 'text-rose-800'}">${typeof userChoice === 'number' ? `${userChoice + 1}번 (${q.options[userChoice]})` : '미응답'}</strong></div>
                            ${!isCorrect ? `<div>정답: <strong class="text-emerald-800">${q.correctIndex + 1}번 (${q.options[q.correctIndex]})</strong></div>` : ''}
                        </div>
                        ${q.explanation ? `
                            <div class="mt-2 p-2 rounded bg-slate-100 text-slate-700 leading-relaxed font-sans">
                                <strong>해설:</strong> ${q.explanation}
                            </div>
                        ` : ''}
                    </div>
                `;
            }).join('');
        }

        if (window.lucide) window.lucide.createIcons();
    }

    exitToSetup() {
        const setupView = document.getElementById('exam-setup-view');
        const cbtView = document.getElementById('exam-cbt-view');
        const resultView = document.getElementById('exam-result-view');

        if (setupView) setupView.classList.remove('hidden');
        if (cbtView) cbtView.classList.add('hidden');
        if (resultView) resultView.classList.add('hidden');

        this.renderHistory();
    }

    // ------------------------------------------------------------------------
    // A4 종이 시험지 인쇄 지원 (Printable Worksheet Mode)
    // ------------------------------------------------------------------------
    printExamPaper() {
        if (!this.currentExam) {
            alert('인쇄할 시험지가 생성되지 않았습니다.');
            return;
        }

        // 인쇄용 컨테이너에 HTML 주입
        let printArea = document.getElementById('exam-print-area');
        if (!printArea) {
            printArea = document.createElement('div');
            printArea.id = 'exam-print-area';
            printArea.className = 'hidden print:block font-serif text-slate-900';
            document.body.appendChild(printArea);
        }

        printArea.innerHTML = `
            <div class="p-8 max-w-4xl mx-auto space-y-6">
                <!-- 학교 시험지 헤더 -->
                <div class="border-b-2 border-slate-900 pb-4 text-center">
                    <div class="text-xs font-mono tracking-widest text-slate-500 uppercase">Veritas Scholars' Academy • Middle School English</div>
                    <h1 class="text-2xl font-black mt-1 text-slate-900">${this.currentExam.title}</h1>
                    <div class="mt-3 flex items-center justify-between text-xs border border-slate-400 p-2">
                        <span>과목: <strong>영어 (내신 대비)</strong></span>
                        <span>제한시간: <strong>${Math.floor(this.currentExam.timeLimitSec / 60)}분</strong></span>
                        <span>학번 / 성명: ____________________</span>
                    </div>
                </div>

                <!-- 문항 리스트 (2단 분할 스타일) -->
                <div class="space-y-6">
                    ${this.currentExam.questions.map(q => `
                        <div class="space-y-2 break-inside-avoid pb-4 border-b border-slate-200">
                            <div class="flex items-start gap-2">
                                <span class="font-bold text-sm">[${q.qNum}]</span>
                                <div>
                                    <div class="font-bold text-sm text-slate-900">${q.questionText}</div>
                                    <div class="mt-1.5 p-3 bg-slate-50 border border-slate-200 text-xs leading-relaxed">
                                        ${q.passageText}
                                    </div>
                                    <div class="mt-2 grid grid-cols-1 gap-1 text-xs">
                                        ${q.options.map((opt, oIdx) => `
                                            <div>${['①', '②', '③', '④', '⑤'][oIdx]} ${opt}</div>
                                        `).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- 정답 및 해설지 (페이지 분리) -->
                <div class="break-before-page pt-8 border-t-2 border-dashed border-slate-400">
                    <h2 class="text-lg font-black text-center mb-4">[ 정답 및 상세 해설지 ]</h2>
                    <div class="grid grid-cols-1 gap-3 text-xs">
                        ${this.currentExam.questions.map(q => `
                            <div class="p-2 border border-slate-200">
                                <strong class="text-sm font-bold">[Q${q.qNum}] 정답: ${['①', '②', '③', '④', '⑤'][q.correctIndex]}</strong>
                                <p class="mt-1 text-slate-700">${q.explanation || '핵심 문맥 및 어법 해설'}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        window.print();
    }
}

// 전역 인스턴스
window.examStudio = new ExamStudioEngine();
