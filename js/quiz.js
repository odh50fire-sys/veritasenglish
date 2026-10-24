/**
 * Veritas English - 4종 지능형 스마트 퀴즈 엔진
 * 1. 4지선다 객관식 퀴즈 (Multiple Choice)
 * 2. 스펠링 타이핑 퀴즈 (Spelling Challenge)
 * 3. 리스닝 딕테이션 퀴즈 (Listening Dictation)
 * 4. 문맥 예문 완성 퀴즈 (Sentence Cloze)
 */

class QuizEngine {
    constructor() {
        this.currentMode = 'choice'; // 'choice', 'spelling', 'listening', 'cloze'
        this.quizWords = [];
        this.currentIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.userAnswers = [];
        this.isAnswered = false;

        this.initKeyboardShortcuts();
    }

    initKeyboardShortcuts() {
        window.addEventListener('keydown', (e) => {
            const activeTab = document.querySelector('.tab-content:not(.hidden)');
            if (!activeTab || activeTab.id !== 'tab-quiz') return;

            // 입력창에 포커스 있으면 스펠링 폼 제출(Enter) 외 차단
            if (['INPUT'].includes(document.activeElement.tagName)) {
                if (e.key === 'Enter') {
                    this.submitSpellingAnswer();
                }
                return;
            }

            if (this.currentMode === 'choice' && !this.isAnswered) {
                if (['1', '2', '3', '4'].includes(e.key)) {
                    const btn = document.querySelector(`.quiz-opt-btn[data-option="${e.key}"]`);
                    if (btn) btn.click();
                }
            } else if (this.isAnswered && (e.code === 'Space' || e.key === 'Enter')) {
                e.preventDefault();
                this.nextQuestion();
            }
        });
    }

    startQuiz(mode = 'choice', wordPool = null) {
        this.currentMode = mode;
        const allWords = wordPool || window.storage.words || [];

        if (allWords.length < 4) {
            alert('퀴즈를 진행하려면 최소 4개 이상의 단어가 필요합니다. 단어장에 단어를 등록해주세요.');
            return;
        }

        // 오늘 학습한 원어민 데일리 표현이 있으면 퀴즈 덱 앞쪽에 우선 배치
        const dailyExpressions = allWords.filter(w => w.isDailyNative || w.tag === '원어민 데일리');
        const otherWords = allWords.filter(w => !(w.isDailyNative || w.tag === '원어민 데일리')).sort(() => Math.random() - 0.5);
        
        const combined = [...dailyExpressions, ...otherWords];
        // 퀴즈 문제 10개 (단어 수가 적으면 전체) 추출
        this.quizWords = combined.slice(0, Math.min(10, combined.length));
        if (this.quizWords.length > 3) {
            this.quizWords.sort(() => Math.random() - 0.5);
        }

        this.currentIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.maxStreak = 0;
        this.userAnswers = [];
        this.isAnswered = false;

        // UI 모드 탭 활성화 상태 동기화
        document.querySelectorAll('.quiz-mode-btn').forEach(btn => {
            btn.classList.toggle('active-mode', btn.dataset.mode === mode);
        });

        const activeView = document.getElementById('quiz-active-view');
        const compView = document.getElementById('quiz-completion-view');
        if (activeView) activeView.classList.remove('hidden');
        if (compView) compView.classList.add('hidden');

        this.renderQuestion();
    }

    renderQuestion() {
        if (this.currentIndex >= this.quizWords.length) {
            this.finishQuiz();
            return;
        }

        this.isAnswered = false;
        const currentWord = this.quizWords[this.currentIndex];
        const total = this.quizWords.length;
        const num = this.currentIndex + 1;

        // 진행률 및 번호 갱신
        const progressEl = document.getElementById('quiz-progress-bar');
        const numEl = document.getElementById('quiz-num-indicator');
        const scoreEl = document.getElementById('quiz-streak-count');
        const nextBtn = document.getElementById('quiz-next-btn');

        if (progressEl) progressEl.style.width = `${Math.round((num / total) * 100)}%`;
        if (numEl) numEl.textContent = `Question ${num} of ${total}`;
        if (scoreEl) scoreEl.textContent = this.streak;
        if (nextBtn) nextBtn.classList.add('hidden');

        // 각 퀴즈 모드별 컨테이너 토글
        const choiceContainer = document.getElementById('quiz-choice-container');
        const spellingContainer = document.getElementById('quiz-spelling-container');
        const listeningContainer = document.getElementById('quiz-listening-container');
        const clozeContainer = document.getElementById('quiz-cloze-container');

        if (choiceContainer) choiceContainer.classList.add('hidden');
        if (spellingContainer) spellingContainer.classList.add('hidden');
        if (listeningContainer) listeningContainer.classList.add('hidden');
        if (clozeContainer) clozeContainer.classList.add('hidden');

        if (this.currentMode === 'choice') {
            this.renderChoiceQuestion(currentWord, choiceContainer);
        } else if (this.currentMode === 'spelling') {
            this.renderSpellingQuestion(currentWord, spellingContainer);
        } else if (this.currentMode === 'listening') {
            this.renderListeningQuestion(currentWord, listeningContainer);
        } else if (this.currentMode === 'cloze') {
            this.renderClozeQuestion(currentWord, clozeContainer);
        }

        if (window.lucide) window.lucide.createIcons();
    }

    // 1. 객관식 4지선다
    renderChoiceQuestion(currentWord, container) {
        if (!container) return;
        container.classList.remove('hidden');

        const promptWord = document.getElementById('quiz-choice-prompt-word');
        const promptPos = document.getElementById('quiz-choice-prompt-pos');
        const optionsGrid = document.getElementById('quiz-choice-options-grid');

        if (promptWord) promptWord.textContent = currentWord.word;
        if (promptPos) promptPos.textContent = currentWord.partOfSpeech || 'n.';

        // 오답 보기 3개 무작위 선별
        const allOtherMeanings = window.storage.words
            .filter(w => w.id !== currentWord.id && w.meaning !== currentWord.meaning)
            .map(w => w.meaning);

        const distractorPool = [...new Set(allOtherMeanings)].sort(() => Math.random() - 0.5).slice(0, 3);
        const options = [...distractorPool, currentWord.meaning].sort(() => Math.random() - 0.5);

        optionsGrid.innerHTML = '';
        options.forEach((optText, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-opt-btn w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all font-sans font-medium text-slate-800 flex items-center justify-between group shadow-sm';
            btn.dataset.option = String(idx + 1);
            btn.dataset.value = optText;
            btn.innerHTML = `
                <div class="flex items-center gap-3">
                    <span class="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-blue-100 text-slate-600 group-hover:text-blue-900 font-mono text-xs flex items-center justify-center font-bold">
                        ${idx + 1}
                    </span>
                    <span class="text-base">${optText}</span>
                </div>
                <div class="opt-status-icon"></div>
            `;
            btn.onclick = () => this.handleChoiceSelection(btn, optText, currentWord.meaning, currentWord);
            optionsGrid.appendChild(btn);
        });
    }

    handleChoiceSelection(buttonEl, selectedValue, correctValue, currentWord) {
        if (this.isAnswered) return;
        this.isAnswered = true;

        const isCorrect = (selectedValue === correctValue);
        this.processAnswerResult(isCorrect, currentWord);

        // 정답 및 오답 시각 표시
        document.querySelectorAll('.quiz-opt-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.value === correctValue) {
                btn.classList.add('border-emerald-600', 'bg-emerald-50', 'text-emerald-950');
                btn.querySelector('.opt-status-icon').innerHTML = '<i data-lucide="check-circle" class="w-5 h-5 text-emerald-600"></i>';
            } else if (btn === buttonEl && !isCorrect) {
                btn.classList.add('border-red-600', 'bg-red-50', 'text-red-950');
                btn.querySelector('.opt-status-icon').innerHTML = '<i data-lucide="x-circle" class="w-5 h-5 text-red-600"></i>';
            }
        });

        if (window.lucide) window.lucide.createIcons();
        this.showNextButton();
    }

    // 2. 스펠링 타이핑
    renderSpellingQuestion(currentWord, container) {
        if (!container) return;
        container.classList.remove('hidden');

        const meaningEl = document.getElementById('quiz-spelling-meaning');
        const hintEl = document.getElementById('quiz-spelling-hint');
        const inputEl = document.getElementById('quiz-spelling-input');
        const feedbackEl = document.getElementById('quiz-spelling-feedback');

        if (meaningEl) meaningEl.textContent = currentWord.meaning;
        if (hintEl) {
            const firstLetter = currentWord.word.charAt(0);
            const blanks = '_ '.repeat(currentWord.word.length - 1);
            hintEl.textContent = `힌트: ${firstLetter} ${blanks} (${currentWord.word.length}글자)`;
        }
        if (inputEl) {
            inputEl.value = '';
            inputEl.disabled = false;
            inputEl.classList.remove('border-red-500', 'border-emerald-500');
            setTimeout(() => inputEl.focus(), 100);
        }
        if (feedbackEl) feedbackEl.innerHTML = '';
    }

    submitSpellingAnswer() {
        if (this.isAnswered) return;
        const inputEl = document.getElementById('quiz-spelling-input');
        const feedbackEl = document.getElementById('quiz-spelling-feedback');
        if (!inputEl) return;

        const userText = inputEl.value.trim().toLowerCase();
        if (!userText) return;

        this.isAnswered = true;
        inputEl.disabled = true;
        const currentWord = this.quizWords[this.currentIndex];
        const isCorrect = (userText === currentWord.word.toLowerCase());

        this.processAnswerResult(isCorrect, currentWord);

        if (isCorrect) {
            inputEl.classList.add('border-emerald-500', 'bg-emerald-50');
            if (feedbackEl) {
                feedbackEl.innerHTML = `<span class="text-emerald-700 font-bold flex items-center justify-center gap-1.5"><i data-lucide="check" class="w-4 h-4"></i> 정답입니다! 완벽한 철자입니다.</span>`;
            }
        } else {
            inputEl.classList.add('border-red-500', 'bg-red-50');
            if (feedbackEl) {
                feedbackEl.innerHTML = `<span class="text-red-700 font-bold flex items-center justify-center gap-1.5"><i data-lucide="alert-circle" class="w-4 h-4"></i> 오답입니다! 정답: <strong>${currentWord.word}</strong></span>`;
            }
        }

        if (window.lucide) window.lucide.createIcons();
        this.showNextButton();
    }

    // 3. 리스닝 딕테이션
    renderListeningQuestion(currentWord, container) {
        if (!container) return;
        container.classList.remove('hidden');

        const listenInput = document.getElementById('quiz-listening-input');
        const listenFeedback = document.getElementById('quiz-listening-feedback');

        if (listenInput) {
            listenInput.value = '';
            listenInput.disabled = false;
            setTimeout(() => listenInput.focus(), 150);
        }
        if (listenFeedback) listenFeedback.innerHTML = '';

        // 자동으로 소리 재생
        if (window.tts) {
            setTimeout(() => {
                window.tts.speak(currentWord.word);
            }, 300);
        }
    }

    submitListeningAnswer() {
        if (this.isAnswered) return;
        const inputEl = document.getElementById('quiz-listening-input');
        const feedbackEl = document.getElementById('quiz-listening-feedback');
        if (!inputEl) return;

        const userText = inputEl.value.trim().toLowerCase();
        if (!userText) return;

        this.isAnswered = true;
        inputEl.disabled = true;
        const currentWord = this.quizWords[this.currentIndex];
        const isCorrect = (userText === currentWord.word.toLowerCase());

        this.processAnswerResult(isCorrect, currentWord);

        if (isCorrect) {
            if (feedbackEl) {
                feedbackEl.innerHTML = `<div class="text-emerald-700 font-bold">정답입니다! [${currentWord.word} : ${currentWord.meaning}]</div>`;
            }
        } else {
            if (feedbackEl) {
                feedbackEl.innerHTML = `<div class="text-red-700 font-bold">오답! 들린 단어는 <strong>${currentWord.word}</strong> (${currentWord.meaning}) 입니다.</div>`;
            }
        }

        this.showNextButton();
    }

    // 4. 문맥 완성 퀴즈 (Cloze)
    renderClozeQuestion(currentWord, container) {
        if (!container) return;
        container.classList.remove('hidden');

        let sentence = currentWord.example || `The teacher asked us to understand the meaning of ______ clearly.`;
        const regex = new RegExp(`\\b${currentWord.word}\\w*\\b`, 'gi');
        const clozeSentence = sentence.replace(regex, '【 ____________ 】');

        const sentenceEl = document.getElementById('quiz-cloze-sentence');
        const transEl = document.getElementById('quiz-cloze-translation');
        const optionsGrid = document.getElementById('quiz-cloze-options-grid');

        if (sentenceEl) sentenceEl.innerHTML = clozeSentence;
        if (transEl) transEl.textContent = currentWord.exampleMeaning || `우리말 뜻: ${currentWord.meaning}`;

        const otherWords = window.storage.words
            .filter(w => w.id !== currentWord.id)
            .map(w => w.word);
        const distractors = [...new Set(otherWords)].sort(() => Math.random() - 0.5).slice(0, 3);
        const options = [...distractors, currentWord.word].sort(() => Math.random() - 0.5);

        optionsGrid.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'w-full py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-serif font-bold text-base transition-all shadow-sm';
            btn.textContent = opt;
            btn.onclick = () => {
                if (this.isAnswered) return;
                this.isAnswered = true;
                const isCorrect = (opt.toLowerCase() === currentWord.word.toLowerCase());
                this.processAnswerResult(isCorrect, currentWord);

                btn.classList.add(isCorrect ? 'bg-emerald-100' : 'bg-red-100');
                sentenceEl.innerHTML = sentence.replace(regex, `<span class="text-blue-900 underline font-bold">${currentWord.word}</span>`);
                this.showNextButton();
            };
            optionsGrid.appendChild(btn);
        });
    }

    processAnswerResult(isCorrect, currentWord) {
        if (isCorrect) {
            this.score += 10;
            this.streak++;
            if (this.streak > this.maxStreak) this.maxStreak = this.streak;
            window.storage.recordReviewResult(currentWord.id, 'easy');
        } else {
            this.streak = 0;
            window.storage.recordReviewResult(currentWord.id, 'hard');
        }

        const streakEl = document.getElementById('quiz-streak-count');
        if (streakEl) streakEl.textContent = this.streak;
    }

    showNextButton() {
        const nextBtn = document.getElementById('quiz-next-btn');
        if (nextBtn) {
            nextBtn.classList.remove('hidden');
            nextBtn.focus();
        }
    }

    nextQuestion() {
        this.currentIndex++;
        this.renderQuestion();
    }

    finishQuiz() {
        const activeView = document.getElementById('quiz-active-view');
        const compView = document.getElementById('quiz-completion-view');

        if (activeView) activeView.classList.add('hidden');
        if (compView) compView.classList.remove('hidden');

        const totalQuestions = this.quizWords.length;
        const correctCount = Math.round(this.score / 10);
        const accuracy = Math.round((correctCount / totalQuestions) * 100);

        const scoreEl = document.getElementById('quiz-final-score');
        const accuracyEl = document.getElementById('quiz-final-accuracy');
        const streakEl = document.getElementById('quiz-final-max-streak');
        const titleEl = document.getElementById('quiz-grade-title');

        if (scoreEl) scoreEl.textContent = this.score;
        if (accuracyEl) accuracyEl.textContent = `${accuracy}% (${correctCount}/${totalQuestions})`;
        if (streakEl) streakEl.textContent = this.maxStreak;

        if (titleEl) {
            if (accuracy >= 90) {
                titleEl.textContent = '🏆 영재 명예의 전당 (Summa Cum Laude)';
            } else if (accuracy >= 70) {
                titleEl.textContent = '🎓 우수 학도 (Magna Cum Laude)';
            } else {
                titleEl.textContent = '📖 성실한 탐구자 (Scholar in Progress)';
            }
        }

        if (accuracy >= 70 && typeof confetti === 'function') {
            confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        }
    }
}

// 전역 인스턴스
window.quizEngine = new QuizEngine();
