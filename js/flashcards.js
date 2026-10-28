/**
 * Veritas English - 3D 플립 플래시카드 & SRS 복습 평가 엔진
 * 1. 키보드 단축키, TTS 음성 연동, 에빙하우스 단계 승급/강등 처리
 * 2. 양방향 뒤집기 모드 (영어->한국어, 한국어->영어)
 * 3. 학습 성격 배지 표시 (오늘의 학습 vs 복습 n단계)
 * 4. 완료 후 취약 단어 모아보기 & 반대 모드로 뒤집어 재학습
 */

class FlashcardEngine {
    constructor() {
        this.deck = [];
        this.currentIndex = 0;
        this.isFlipped = false;
        this.currentFilter = 'today'; // 'today', 'review', 'weak', 'all'
        this.flipMode = 'eng-to-kor'; // 'eng-to-kor' | 'kor-to-eng'
        this.sessionHardWords = [];
        this.sessionInitialDeck = [];
        this.reviewedSession = {
            total: 0,
            easy: 0,
            good: 0,
            hard: 0
        };

        this.initKeyboardShortcuts();
    }

    initKeyboardShortcuts() {
        window.addEventListener('keydown', (e) => {
            const activeTab = document.querySelector('.tab-content:not(.hidden)');
            if (!activeTab || activeTab.id !== 'tab-flashcards') return;

            if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

            if (e.code === 'Space') {
                e.preventDefault();
                this.flipCard();
            } else if (e.code === 'ArrowLeft' || e.key === '1') {
                e.preventDefault();
                this.rateCard('hard');
            } else if (e.code === 'ArrowDown' || e.key === '2') {
                e.preventDefault();
                this.rateCard('good');
            } else if (e.code === 'ArrowRight' || e.key === '3') {
                e.preventDefault();
                this.rateCard('easy');
            } else if (e.code === 'KeyP') {
                e.preventDefault();
                this.playAudio();
            } else if (e.code === 'KeyM') {
                e.preventDefault();
                this.toggleFlipMode();
            }
        });
    }

    /**
     * 뒤집기 모드 설정 (영어-한국어 ↔ 한국어-영어)
     */
    setFlipMode(mode) {
        this.flipMode = mode;
        const engBtn = document.getElementById('btn-fc-mode-eng');
        const korBtn = document.getElementById('btn-fc-mode-kor');

        if (engBtn && korBtn) {
            if (mode === 'eng-to-kor') {
                engBtn.className = 'px-3 py-1.5 rounded-lg font-bold bg-white text-blue-900 shadow-2xs border border-blue-200 transition-all cursor-pointer';
                korBtn.className = 'px-3 py-1.5 rounded-lg text-slate-600 hover:text-blue-900 transition-all cursor-pointer';
            } else {
                korBtn.className = 'px-3 py-1.5 rounded-lg font-bold bg-white text-blue-900 shadow-2xs border border-blue-200 transition-all cursor-pointer';
                engBtn.className = 'px-3 py-1.5 rounded-lg text-slate-600 hover:text-blue-900 transition-all cursor-pointer';
            }
        }

        this.isFlipped = false;
        const cardElement = document.getElementById('flashcard-flipper');
        if (cardElement) cardElement.classList.remove('is-flipped');
        this.renderCard();
    }

    toggleFlipMode() {
        this.setFlipMode(this.flipMode === 'eng-to-kor' ? 'kor-to-eng' : 'eng-to-kor');
    }

    /**
     * 필터링에 맞춰 덱 로드
     */
    loadDeck(filter = 'today', customList = null) {
        this.currentFilter = filter;
        const allWords = window.storage.words || [];
        const today = window.storage.getTodayDateString();

        if (customList && Array.isArray(customList)) {
            this.deck = [...customList];
        } else if (filter === 'today') {
            // 오늘 배정된 신규 단어 우선
            this.deck = allWords.filter(w => !w.isReadingPassage && w.planDate === today);
            // 만약 오늘 배정 단어가 없으면 복습 대상까지 포함
            if (this.deck.length === 0) {
                this.deck = allWords.filter(w => !w.isReadingPassage && (w.planDate === today || (w.nextReviewDate && w.nextReviewDate <= today)));
            }
        } else if (filter === 'review') {
            // 에빙하우스 복습 대상만
            this.deck = allWords.filter(w => !w.isReadingPassage && w.nextReviewDate && w.nextReviewDate <= today);
        } else if (filter === 'weak') {
            this.deck = window.storage.getWeakWords().filter(w => !w.isReadingPassage);
        } else {
            this.deck = allWords.filter(w => !w.isReadingPassage);
        }

        // 덱 셔플
        this.shuffleDeck();
        this.currentIndex = 0;
        this.isFlipped = false;
        this.sessionHardWords = [];
        this.sessionInitialDeck = [...this.deck];
        this.reviewedSession = { total: 0, easy: 0, good: 0, hard: 0 };

        // 서브탭 스타일 업데이트
        document.querySelectorAll('.fc-filter-btn').forEach(btn => {
            btn.classList.toggle('active-subtab', btn.dataset.filter === filter);
        });

        this.renderCard();
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    flipCard() {
        if (this.deck.length === 0) return;
        const cardElement = document.getElementById('flashcard-flipper');
        if (!cardElement) return;

        this.isFlipped = !this.isFlipped;
        if (this.isFlipped) {
            cardElement.classList.add('is-flipped');
            // 한국어->영어 모드일 때 카드를 뒤집으면 영어 오디오 자동 재생
            if (this.flipMode === 'kor-to-eng' && window.storage.settings.autoAudio) {
                setTimeout(() => this.playAudio(), 200);
            }
        } else {
            cardElement.classList.remove('is-flipped');
        }
    }

    playAudio() {
        const currentWord = this.deck[this.currentIndex];
        if (currentWord && window.tts) {
            const speakerIcon = document.getElementById('fc-speaker-icon');
            if (speakerIcon) speakerIcon.classList.add('text-amber-500', 'animate-pulse');
            window.tts.speak(
                currentWord.word,
                null,
                () => {
                    if (speakerIcon) speakerIcon.classList.remove('text-amber-500', 'animate-pulse');
                }
            );
        }
    }

    playExampleAudio() {
        const currentWord = this.deck[this.currentIndex];
        if (currentWord && currentWord.example && window.tts) {
            window.tts.speak(currentWord.example);
        }
    }

    rateCard(rating) {
        if (this.deck.length === 0) return;

        const currentWord = this.deck[this.currentIndex];
        if (currentWord) {
            window.storage.recordReviewResult(currentWord.id, rating);
            window.storage.markWordFlashcardDone(currentWord.id, rating);
            this.reviewedSession.total++;
            this.reviewedSession[rating]++;
            if (rating === 'hard') {
                if (!this.sessionHardWords.some(w => w.id === currentWord.id)) {
                    this.sessionHardWords.push(currentWord);
                }
            }
        }

        // 다음 카드로 전진
        this.currentIndex++;
        this.isFlipped = false;

        const cardElement = document.getElementById('flashcard-flipper');
        if (cardElement) cardElement.classList.remove('is-flipped');

        if (this.currentIndex >= this.deck.length) {
            this.renderCompletionScreen();
        } else {
            setTimeout(() => {
                this.renderCard();
            }, 150);
        }
    }

    renderCard() {
        const container = document.getElementById('flashcard-active-view');
        const emptyView = document.getElementById('flashcard-empty-view');
        const compView = document.getElementById('flashcard-completion-view');

        if (compView) compView.classList.add('hidden');

        if (this.deck.length === 0) {
            if (container) container.classList.add('hidden');
            if (emptyView) emptyView.classList.remove('hidden');
            return;
        }

        if (container) container.classList.remove('hidden');
        if (emptyView) emptyView.classList.add('hidden');

        const word = this.deck[this.currentIndex];
        const total = this.deck.length;
        const current = this.currentIndex + 1;
        const today = window.storage.getTodayDateString();

        // 진행률 바 업데이트
        const progressPct = Math.round((current / total) * 100);
        const progressBar = document.getElementById('fc-progress-bar');
        const countText = document.getElementById('fc-counter-text');
        if (progressBar) progressBar.style.width = `${progressPct}%`;
        if (countText) countText.textContent = `${current} / ${total}`;

        // 요구사항 5: 학습 성격 배지 업데이트 (오늘의 학습 vs 복습 몇단계)
        const sessionBadgeEl = document.getElementById('fc-session-badge');
        if (sessionBadgeEl) {
            if (word.planDate === today) {
                sessionBadgeEl.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-900 border border-blue-200 shadow-2xs';
                sessionBadgeEl.innerHTML = `<i data-lucide="calendar" class="w-3 h-3 text-blue-700"></i><span>오늘의 학습 (${today})</span>`;
            } else if (word.nextReviewDate && word.nextReviewDate <= today) {
                sessionBadgeEl.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200 shadow-2xs';
                sessionBadgeEl.innerHTML = `<i data-lucide="refresh-cw" class="w-3 h-3 text-amber-700"></i><span>복습 (${word.stage || 1}단계)</span>`;
            } else {
                sessionBadgeEl.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200';
                sessionBadgeEl.innerHTML = `<i data-lucide="book-open" class="w-3 h-3 text-slate-600"></i><span>단어 학습</span>`;
            }
        }

        // 카드 앞/뒷면 엘리먼트
        const stageEl = document.getElementById('fc-stage-badge');
        const tagEl = document.getElementById('fc-tag');
        const wordEl = document.getElementById('fc-word');
        const posEl = document.getElementById('fc-pos');
        const audioBtn = document.getElementById('btn-fc-audio');
        const flipGuideText = document.getElementById('fc-flip-guide-text');

        const meaningEl = document.getElementById('fc-meaning');
        const exampleEl = document.getElementById('fc-example');
        const exampleMeaningEl = document.getElementById('fc-example-meaning');
        const exampleWrap = document.getElementById('fc-example-wrap');

        if (stageEl) {
            stageEl.textContent = `SRS ${word.stage || 1}단계`;
            stageEl.className = `text-xs font-serif font-bold px-2 py-0.5 rounded border ${
                word.stage >= 4 ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                word.stage >= 2 ? 'bg-blue-50 text-blue-800 border-blue-200' :
                'bg-slate-100 text-slate-700 border-slate-200'
            }`;
        }
        if (tagEl) tagEl.textContent = word.neungryulDay || word.tag || '기본';

        // 요구사항 4: 영어-한국어 ↔ 한국어-영어 양방향 렌더링
        const stdPos = window.posHelper ? window.posHelper.standardizePos(word.partOfSpeech, word.word, word.meaning) : (word.partOfSpeech || '[명]');
        if (posEl) {
            posEl.textContent = stdPos;
            if (window.posHelper) {
                posEl.className = `px-2 py-0.5 rounded-md font-mono text-xs font-bold border transition-all ${window.posHelper.getBadgeColor(stdPos)}`;
            }
        }

        if (this.flipMode === 'eng-to-kor') {
            // 앞면: 영어 단어
            if (wordEl) wordEl.textContent = word.word;
            if (audioBtn) audioBtn.classList.remove('hidden');
            if (flipGuideText) flipGuideText.textContent = '클릭 또는 스페이스바로 우리말 뜻 확인';

            // 뒷면: 한국어 뜻 & 예문
            if (meaningEl) meaningEl.textContent = word.meaning;
        } else {
            // 앞면: 한국어 뜻 (영단어를 떠올리는 챌린지 모드)
            if (wordEl) wordEl.textContent = word.meaning;
            if (audioBtn) audioBtn.classList.add('hidden'); // 영어 스포일 방지
            if (flipGuideText) flipGuideText.textContent = '클릭 또는 스페이스바로 영단어 확인';

            // 뒷면: 영단어 & 스펠링 & 예문
            if (meaningEl) {
                meaningEl.innerHTML = `
                    <div class="flex items-center justify-center gap-3">
                        <span class="text-blue-950 font-serif font-black text-3xl sm:text-4xl">${word.word}</span>
                        <button class="p-2 rounded-full bg-blue-100 text-blue-900 hover:bg-blue-200 cursor-pointer" onclick="event.stopPropagation(); window.flashcardEngine.playAudio();" title="발음 듣기">
                            <i data-lucide="volume-2" class="w-5 h-5"></i>
                        </button>
                    </div>
                `;
            }
        }

        // 예문 공통 렌더링
        if (word.example && word.example.trim()) {
            if (exampleWrap) exampleWrap.classList.remove('hidden');
            if (exampleEl) exampleEl.textContent = word.example;
            if (exampleMeaningEl) exampleMeaningEl.textContent = word.exampleMeaning || '';
        } else {
            if (exampleWrap) exampleWrap.classList.add('hidden');
        }

        // 뉘앙스 & 문화 유래 팁 렌더링
        const nuanceWrap = document.getElementById('fc-nuance-wrap');
        const nuanceText = document.getElementById('fc-nuance-text');
        if (word.nuanceTip && word.nuanceTip.trim()) {
            if (nuanceWrap) nuanceWrap.classList.remove('hidden');
            if (nuanceText) nuanceText.textContent = word.nuanceTip;
        } else {
            if (nuanceWrap) nuanceWrap.classList.add('hidden');
        }

        // 자동 오디오 재생 (영어-한국어 모드일 때만 앞면에서 재생)
        if (this.flipMode === 'eng-to-kor' && window.storage.settings.autoAudio && window.tts) {
            setTimeout(() => {
                this.playAudio();
            }, 200);
        }

        if (window.lucide) window.lucide.createIcons();
    }

    renderCompletionScreen() {
        const container = document.getElementById('flashcard-active-view');
        const compView = document.getElementById('flashcard-completion-view');

        if (container) container.classList.add('hidden');
        if (compView) {
            compView.classList.remove('hidden');

            document.getElementById('fc-summary-total').textContent = this.reviewedSession.total;
            document.getElementById('fc-summary-easy').textContent = this.reviewedSession.easy;
            document.getElementById('fc-summary-good').textContent = this.reviewedSession.good;
            document.getElementById('fc-summary-hard').textContent = this.reviewedSession.hard;

            // 전체 학습 단어 플래시카드 완료 마킹
            this.sessionInitialDeck.forEach(w => {
                window.storage.markWordFlashcardDone(w.id);
            });

            // 학습 이력(History) 자동 기록
            const today = window.storage.getTodayDateString();
            window.storage.recordHistoryLog({
                type: 'flashcard',
                title: `플래시카드 완수 (${this.flipMode === 'eng-to-kor' ? '영어➔한국어' : '한국어➔영어'})`,
                detail: `총 ${this.reviewedSession.total}단어 학습 • 완벽암기 ${this.reviewedSession.easy}, 보통 ${this.reviewedSession.good}, 취약 ${this.reviewedSession.hard}`,
                total: this.reviewedSession.total,
                score: this.reviewedSession.easy + this.reviewedSession.good,
                accuracy: Math.round(((this.reviewedSession.easy + this.reviewedSession.good) / Math.max(1, this.reviewedSession.total)) * 100)
            });

            // 같은 단원에서 스마트 퀴즈를 이미 풀었던 단원이면 플래시카드 완료 즉시 전체 학습 완료 동기화
            if (window.storage && typeof window.storage.syncUnitCompletionForFlashcardWords === 'function') {
                window.storage.syncUnitCompletionForFlashcardWords(this.sessionInitialDeck);
            }

            // 요구사항 3: 일자별 플래너 완료 체크 업데이트
            window.storage.checkAndMarkDayCompletion(today);
            if (window.plannerEngine && window.plannerEngine.render) {
                window.plannerEngine.render();
            }

            // 요구사항 6: 취약 단어 보기 & 반대 모드로 뒤집기 버튼 상태 갱신
            const weakBtn = document.getElementById('btn-fc-review-weak');
            const switchModeBtn = document.getElementById('btn-fc-switch-flip-mode');

            if (weakBtn) {
                const weakCount = this.sessionHardWords.length;
                if (weakCount > 0) {
                    weakBtn.classList.remove('hidden');
                    weakBtn.innerHTML = `<i data-lucide="alert-triangle" class="w-4 h-4 text-red-600"></i><span>취약 단어 모아보기 (${weakCount}개)</span>`;
                    weakBtn.onclick = () => this.reviewWeakWordsFromSession();
                } else {
                    weakBtn.classList.remove('hidden');
                    weakBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-600"></i><span>취약 단어 없음 (완벽!)</span>`;
                    weakBtn.onclick = () => alert('이번 세션에서 취약 단어가 발생하지 않았습니다! 모든 단어를 훌륭히 마스터하셨습니다.');
                }
            }

            if (switchModeBtn) {
                if (this.flipMode === 'eng-to-kor') {
                    switchModeBtn.innerHTML = `<i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-900"></i><span>한국어-영어 뒤집어서 다시 학습</span>`;
                    switchModeBtn.onclick = () => {
                        this.setFlipMode('kor-to-eng');
                        this.loadDeck(this.currentFilter, this.sessionInitialDeck);
                    };
                } else {
                    switchModeBtn.innerHTML = `<i data-lucide="rotate-ccw" class="w-4 h-4 text-blue-900"></i><span>영어-한국어로 뒤집어서 다시 학습</span>`;
                    switchModeBtn.onclick = () => {
                        this.setFlipMode('eng-to-kor');
                        this.loadDeck(this.currentFilter, this.sessionInitialDeck);
                    };
                }
            }

            if (window.lucide) window.lucide.createIcons();

            // 콘페티 축하 효과
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }
    }

    /**
     * 이번 세션에서 어려웠던 단어들만 모아서 재학습
     */
    reviewWeakWordsFromSession() {
        if (this.sessionHardWords.length === 0) {
            alert('이번 세션에서 취약 단어로 표시된 단어가 없습니다.');
            return;
        }
        this.loadDeck('weak', this.sessionHardWords);
    }
}

// 전역 인스턴스
window.flashcardEngine = new FlashcardEngine();
