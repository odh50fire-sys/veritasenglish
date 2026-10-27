/**
 * Veritas English - 4종 지능형 스마트 퀴즈 엔진
 * 1. 4지선다 객관식 퀴즈 (Multiple Choice)
 * 2. 스펠링 타이핑 퀴즈 (Spelling Challenge)
 * 3. 리스닝 딕테이션 퀴즈 (Listening Dictation)
 * 4. 문맥 예문 완성 퀴즈 (Sentence Cloze - 순수 영어 문맥 추론)
 * 
 * [고도화 반영]
 * - 취약 단어(오답/어려움 이력) 우선 출제 & 중복 단어 엄격 배제 (Set)
 * - 오늘의 학습 vs 에빙하우스 복습 출제 범위 철저 분리
 * - 문맥 완성 퀴즈에서 한국어 힌트 완전 제거
 * - 퀴즈 완료 시 학습 완료 마킹 및 플래너 달성 체크 연동
 */

class QuizEngine {
    constructor() {
        this.currentMode = 'choice'; // 'choice', 'spelling', 'listening', 'cloze'
        this.currentScope = 'today'; // 'today', 'review', 'weak', 'all'
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

            // 입력창에 포커스 있으면 스펠링/리스닝 제출(Enter) 외 차단
            if (['INPUT'].includes(document.activeElement.tagName)) {
                if (e.key === 'Enter') {
                    if (this.currentMode === 'spelling') this.submitSpellingAnswer();
                    else if (this.currentMode === 'listening') this.submitListeningAnswer();
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

    /**
     * 출제 범위 설정 (오늘의 학습 vs 복습 vs 취약 단어)
     */
    setQuizScope(scope) {
        this.currentScope = scope;
        document.querySelectorAll('.quiz-scope-btn').forEach(btn => {
            btn.classList.toggle('active-subtab', btn.dataset.scope === scope);
        });
        this.startQuiz(this.currentMode, { scope: scope });
    }

    /**
     * 스마트 퀴즈 시작
     */
    startQuiz(mode = 'choice', options = {}) {
        this.currentMode = mode;
        const scope = options.scope || this.currentScope || 'today';
        this.currentScope = scope;

        const allWords = (window.storage.words || []).filter(w => !w.isReadingPassage);
        const today = window.storage.getTodayDateString();

        let candidatePool = [];

        // 요구사항 8: 오늘의 학습이면 반드시 오늘 학습한 단어만, 복습이면 반드시 복습 내용만 출제
        if (options.wordPool && Array.isArray(options.wordPool)) {
            candidatePool = [...options.wordPool];
        } else if (scope === 'today') {
            candidatePool = allWords.filter(w => w.planDate === today);
            if (candidatePool.length < 4) {
                // 오늘 단어가 4개 미만인 경우 친절한 안내 및 전체 단어 활용 옵션 제공
                if (allWords.length >= 4) {
                    const confirmAll = confirm(`오늘(${today}) 배정된 학습 단어가 ${candidatePool.length}개로 퀴즈 최소 문항(4단어)보다 적습니다.\n전체 단어장 중에서 취약 단어 위주로 출제하시겠습니까?`);
                    if (confirmAll) {
                        this.currentScope = 'all';
                        candidatePool = [...allWords];
                    } else {
                        return;
                    }
                } else {
                    alert('퀴즈를 진행하려면 최소 4개 이상의 단어가 필요합니다. 단어장에 단어를 등록해 주세요.');
                    return;
                }
            }
        } else if (scope === 'review') {
            candidatePool = allWords.filter(w => w.nextReviewDate && w.nextReviewDate <= today);
            if (candidatePool.length < 4) {
                alert(`현재 에빙하우스 복습 대상 단어가 ${candidatePool.length}개입니다. 복습할 단어가 4개 이상 누적되었을 때 이용해 주세요.`);
                return;
            }
        } else if (scope === 'weak') {
            candidatePool = window.storage.getWeakWords().filter(w => !w.isReadingPassage);
            if (candidatePool.length < 4) {
                alert('현재 등록된 취약 단어가 4개 미만입니다. 전체 단어 퀴즈를 진행해 보세요.');
                candidatePool = [...allWords];
            }
        } else {
            // 'all'
            candidatePool = [...allWords];
        }

        if (candidatePool.length < 4) {
            alert('퀴즈를 진행하려면 최소 4개 이상의 단어가 필요합니다.');
            return;
        }

        // 요구사항 7: 취약 단어 우선 출제 & 중복 단어 엄격 배제 (Set 기반)
        const weakList = candidatePool.filter(w => (w.failCount && w.failCount > 0) || w.stage === 1 || w.lastRating === 'hard');
        const normalList = candidatePool.filter(w => !weakList.some(item => item.id === w.id));

        // 각 그룹 무작위 셔플
        weakList.sort(() => Math.random() - 0.5);
        normalList.sort(() => Math.random() - 0.5);

        // 취약 단어를 앞쪽에 우선 배치
        const prioritized = [...weakList, ...normalList];

        // 중복 단어 배제
        const seenWords = new Set();
        const uniqueQuizWords = [];
        for (const w of prioritized) {
            const cleanWord = (w.word || '').trim().toLowerCase();
            if (!seenWords.has(cleanWord)) {
                seenWords.add(cleanWord);
                uniqueQuizWords.push(w);
            }
            if (uniqueQuizWords.length >= 10) break;
        }

        this.quizWords = uniqueQuizWords;

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

        // 퀴즈 출제 범위 서브탭 활성화 동기화
        document.querySelectorAll('.quiz-scope-btn').forEach(btn => {
            btn.classList.toggle('active-subtab', btn.dataset.scope === this.currentScope);
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
        const today = window.storage.getTodayDateString();

        // 진행률 및 번호 갱신
        const progressEl = document.getElementById('quiz-progress-bar');
        const numEl = document.getElementById('quiz-num-indicator');
        const scoreEl = document.getElementById('quiz-streak-count');
        const nextBtn = document.getElementById('quiz-next-btn');

        if (progressEl) progressEl.style.width = `${Math.round((num / total) * 100)}%`;
        if (numEl) numEl.textContent = `Question ${num} of ${total}`;
        if (scoreEl) scoreEl.textContent = this.streak;
        if (nextBtn) nextBtn.classList.add('hidden');

        // 요구사항 5: 퀴즈 세션 성격 배지 표시
        const badgeEl = document.getElementById('quiz-session-badge');
        if (badgeEl) {
            if (this.currentScope === 'today') {
                badgeEl.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-900 border border-blue-200 shadow-2xs';
                badgeEl.innerHTML = `<i data-lucide="calendar" class="w-3 h-3 text-blue-700"></i><span>오늘의 학습 퀴즈 (${today})</span>`;
            } else if (this.currentScope === 'review') {
                badgeEl.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200 shadow-2xs';
                badgeEl.innerHTML = `<i data-lucide="refresh-cw" class="w-3 h-3 text-amber-700"></i><span>에빙하우스 복습 퀴즈</span>`;
            } else if (this.currentScope === 'weak') {
                badgeEl.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-100 text-red-900 border border-red-200 shadow-2xs';
                badgeEl.innerHTML = `<i data-lucide="alert-triangle" class="w-3 h-3 text-red-700"></i><span>취약 단어 집중 퀴즈</span>`;
            } else {
                badgeEl.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200';
                badgeEl.innerHTML = `<i data-lucide="sparkles" class="w-3 h-3 text-slate-600"></i><span>전체 종합 퀴즈</span>`;
            }
        }

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
            .filter(w => w.id !== currentWord.id && w.meaning !== currentWord.meaning && !w.isReadingPassage)
            .map(w => w.meaning);

        const distractorPool = [...new Set(allOtherMeanings)].sort(() => Math.random() - 0.5).slice(0, 3);
        const options = [...distractorPool, currentWord.meaning].sort(() => Math.random() - 0.5);

        optionsGrid.innerHTML = '';
        options.forEach((optText, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-opt-btn w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all font-sans font-medium text-slate-800 flex items-center justify-between group shadow-sm cursor-pointer';
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
            const blanks = '_ '.repeat(Math.max(1, currentWord.word.length - 1));
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

        const inputEl = document.getElementById('quiz-listening-input');
        const feedbackEl = document.getElementById('quiz-listening-feedback');

        if (inputEl) {
            inputEl.value = '';
            inputEl.disabled = false;
            setTimeout(() => inputEl.focus(), 100);
        }
        if (feedbackEl) feedbackEl.innerHTML = '';

        if (window.tts) {
            setTimeout(() => window.tts.speak(currentWord.word), 300);
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

    // 4. 문맥 완성 퀴즈 (Cloze) - 능률 VOCA 및 전 교재 문맥 문장 완벽 연동
    renderClozeQuestion(currentWord, container) {
        if (!container) return;
        container.classList.remove('hidden');

        // 스마트 문맥 예문 헬퍼를 통해 대상 단어가 100% 반영된 문장 및 빈칸 데이터 획득
        let sInfo = null;
        if (window.contextSentenceHelper && typeof window.contextSentenceHelper.getOrGenerateSentence === 'function') {
            sInfo = window.contextSentenceHelper.getOrGenerateSentence(currentWord);
        }

        const sentence = sInfo ? sInfo.sentence : (currentWord.example || '');
        const translation = sInfo ? sInfo.translation : (currentWord.exampleMeaning || currentWord.meaning || '');
        const clozeSentence = sInfo ? sInfo.clozeSentence : (sentence ? sentence.replace(new RegExp(`\\b${currentWord.word}\\w*\\b`, 'gi'), '【 ____________ 】') : '【 ____________ 】');
        const matchedWord = (sInfo && sInfo.matchedWord) ? sInfo.matchedWord : currentWord.word;

        const sentenceEl = document.getElementById('quiz-cloze-sentence');
        const transEl = document.getElementById('quiz-cloze-translation');
        const optionsGrid = document.getElementById('quiz-cloze-options-grid');

        if (sentenceEl) {
            sentenceEl.innerHTML = clozeSentence;
        }

        // 문제 풀이 전에는 한국어 번역 힌트를 감추어 순수 문맥 독해 유도 (요구사항 9)
        if (transEl) {
            transEl.textContent = '';
            transEl.classList.add('hidden');
        }

        // 오답 선지 3개 선별 (타 단어장에서 고르게 추출)
        const otherWords = (window.storage && window.storage.words ? window.storage.words : [])
            .filter(w => w.id !== currentWord.id && !w.isReadingPassage && w.word && w.word.toLowerCase() !== currentWord.word.toLowerCase())
            .map(w => w.word);

        let distractors = [...new Set(otherWords)].sort(() => Math.random() - 0.5).slice(0, 3);
        
        // 단어장 단어가 부족할 경우 보충 오답 풀에서 채움
        if (distractors.length < 3 && window.contextSentenceHelper && window.contextSentenceHelper.getDistractors) {
            const more = window.contextSentenceHelper.getDistractors(currentWord.word, 3 - distractors.length);
            distractors = [...distractors, ...more];
        }

        const options = [...distractors, currentWord.word].sort(() => Math.random() - 0.5);

        optionsGrid.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'w-full py-3.5 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-serif font-bold text-base transition-all shadow-sm cursor-pointer hover:border-blue-400 text-center';
            btn.textContent = opt;
            btn.onclick = () => {
                if (this.isAnswered) return;
                this.isAnswered = true;
                const isCorrect = (opt.toLowerCase() === currentWord.word.toLowerCase());
                this.processAnswerResult(isCorrect, currentWord);

                // 모든 선지 버튼 상태 업데이트 (정답은 초록, 내가 고른 오답은 빨강)
                optionsGrid.querySelectorAll('button').forEach(b => {
                    b.disabled = true;
                    if (b.textContent.toLowerCase() === currentWord.word.toLowerCase()) {
                        b.classList.remove('bg-white', 'border-slate-200');
                        b.classList.add('bg-emerald-100', 'border-emerald-500', 'text-emerald-950', 'ring-2', 'ring-emerald-400');
                    } else if (b === btn && !isCorrect) {
                        b.classList.remove('bg-white', 'border-slate-200');
                        b.classList.add('bg-red-100', 'border-red-500', 'text-red-950');
                    }
                });

                // 문장 내 빈칸에 정답 단어 하이라이트 반영
                if (sentenceEl) {
                    sentenceEl.innerHTML = clozeSentence.replace('【 ____________ 】', `<span class="text-blue-900 underline font-black bg-amber-100/90 px-2 py-0.5 rounded shadow-2xs">${matchedWord}</span>`);
                }

                // 문제 풀이 후 문맥 해석 및 어휘 뜻풀이 박스 표시
                if (transEl && translation) {
                    transEl.classList.remove('hidden');
                    transEl.innerHTML = `
                        <div class="mt-3 p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-slate-700 leading-relaxed flex items-start gap-2 shadow-2xs">
                            <i data-lucide="book-open" class="w-4 h-4 text-blue-900 shrink-0 mt-0.5"></i>
                            <div>
                                <span class="font-bold text-blue-950 block mb-0.5">💡 문맥 해석 & 어휘 뜻풀이</span>
                                <span class="text-slate-800">${translation}</span>
                                <span class="text-slate-500 text-[11px] block mt-0.5 font-medium">[${currentWord.word}] : ${currentWord.meaning}</span>
                            </div>
                        </div>
                    `;
                    if (window.lucide) window.lucide.createIcons();
                }

                this.showNextButton();
            };
            optionsGrid.appendChild(btn);
        });
    }

    processAnswerResult(isCorrect, currentWord) {
        this.userAnswers.push({ word: currentWord, isCorrect });

        if (isCorrect) {
            this.score += 10;
            this.streak++;
            if (this.streak > this.maxStreak) this.maxStreak = this.streak;
            window.storage.recordReviewResult(currentWord.id, 'easy');
            window.storage.markWordQuizDone(currentWord.id, true);
        } else {
            this.streak = 0;
            window.storage.recordReviewResult(currentWord.id, 'hard');
            window.storage.markWordQuizDone(currentWord.id, false);
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
        const correctCount = this.userAnswers.filter(a => a.isCorrect).length;
        const accuracy = Math.round((correctCount / Math.max(1, totalQuestions)) * 100);

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

        // 학습 이력 로깅
        const today = window.storage.getTodayDateString();
        window.storage.recordHistoryLog({
            type: 'quiz',
            title: `스마트 퀴즈 (${this.getModeName(this.currentMode)}) 완수`,
            detail: `출제 범위: ${this.getScopeName(this.currentScope)} • 정답률 ${accuracy}% (${correctCount}/${totalQuestions}문항 정답)`,
            score: this.score,
            total: totalQuestions * 10,
            accuracy: accuracy
        });

        // 요구사항 3: 일일 학습 플래너 완료 체크마크 갱신
        window.storage.checkAndMarkDayCompletion(today);
        if (window.plannerEngine && window.plannerEngine.render) {
            window.plannerEngine.render();
        }
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }

        if (accuracy >= 70 && typeof confetti === 'function') {
            confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        }
    }

    getModeName(mode) {
        const map = {
            choice: '객관식 4지선다',
            spelling: '스펠링 타이핑',
            listening: '리스닝 딕테이션',
            cloze: '문맥 완성 퀴즈'
        };
        return map[mode] || mode;
    }

    getScopeName(scope) {
        const map = {
            today: '오늘의 학습 단어',
            review: '에빙하우스 복습 단어',
            weak: '취약 단어 집중',
            all: '전체 단어장'
        };
        return map[scope] || scope;
    }
}

// 전역 인스턴스
window.quizEngine = new QuizEngine();
