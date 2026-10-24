/**
 * Veritas English - 3D 플립 플래시카드 & SRS 복습 평가 엔진
 * 키보드 단축키, TTS 음성 연동, 에빙하우스 단계 승급/강등 처리
 */

class FlashcardEngine {
    constructor() {
        this.deck = [];
        this.currentIndex = 0;
        this.isFlipped = false;
        this.currentFilter = 'all'; // 'all', 'today', 'weak'
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
            // 플래시카드 탭이 활성화되어 있을 때만 반응
            const activeTab = document.querySelector('.tab-content:not(.hidden)');
            if (!activeTab || activeTab.id !== 'tab-flashcards') return;

            // 모달 또는 입력창에 포커스가 있으면 무시
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
            }
        });
    }

    /**
     * 필터링에 맞춰 덱 로드
     */
    loadDeck(filter = 'all') {
        this.currentFilter = filter;
        const allWords = window.storage.words || [];

        if (filter === 'today') {
            const today = window.storage.getTodayDateString();
            this.deck = allWords.filter(w => w.planDate === today || (w.nextReviewDate && w.nextReviewDate <= today));
        } else if (filter === 'weak') {
            this.deck = window.storage.getWeakWords();
        } else {
            this.deck = [...allWords];
        }

        // 덱 셔플
        this.shuffleDeck();
        this.currentIndex = 0;
        this.isFlipped = false;
        this.reviewedSession = { total: 0, easy: 0, good: 0, hard: 0 };

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
            this.reviewedSession.total++;
            this.reviewedSession[rating]++;
        }

        // 다음 카드로 전진
        this.currentIndex++;
        this.isFlipped = false;

        const cardElement = document.getElementById('flashcard-flipper');
        if (cardElement) cardElement.classList.remove('is-flipped');

        if (this.currentIndex >= this.deck.length) {
            this.renderCompletionScreen();
        } else {
            // 부드러운 전환 효과
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

        // 진행률 바 업데이트
        const progressPct = Math.round((current / total) * 100);
        const progressBar = document.getElementById('fc-progress-bar');
        const countText = document.getElementById('fc-counter-text');
        if (progressBar) progressBar.style.width = `${progressPct}%`;
        if (countText) countText.textContent = `${current} / ${total}`;

        // 카드 앞면 데이터
        const wordEl = document.getElementById('fc-word');
        const posEl = document.getElementById('fc-pos');
        const tagEl = document.getElementById('fc-tag');
        const stageEl = document.getElementById('fc-stage-badge');

        if (wordEl) wordEl.textContent = word.word;
        if (posEl) posEl.textContent = word.partOfSpeech || 'n.';
        if (tagEl) tagEl.textContent = word.tag || '기본';
        if (stageEl) {
            stageEl.textContent = `SRS ${word.stage || 1}단계`;
            stageEl.className = `text-xs font-serif font-bold px-2 py-0.5 rounded border ${
                word.stage >= 4 ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                word.stage >= 2 ? 'bg-blue-50 text-blue-800 border-blue-200' :
                'bg-slate-100 text-slate-700 border-slate-200'
            }`;
        }

        // 카드 뒷면 데이터
        const meaningEl = document.getElementById('fc-meaning');
        const exampleEl = document.getElementById('fc-example');
        const exampleMeaningEl = document.getElementById('fc-example-meaning');
        const exampleWrap = document.getElementById('fc-example-wrap');

        if (meaningEl) meaningEl.textContent = word.meaning;
        if (word.example && word.example.trim()) {
            if (exampleWrap) exampleWrap.classList.remove('hidden');
            if (exampleEl) exampleEl.textContent = word.example;
            if (exampleMeaningEl) exampleMeaningEl.textContent = word.exampleMeaning || '';
        } else {
            if (exampleWrap) exampleWrap.classList.add('hidden');
        }

        // 자동 오디오 재생 설정 확인
        if (window.storage.settings.autoAudio && window.tts) {
            setTimeout(() => {
                this.playAudio();
            }, 200);
        }

        // Lucide 아이콘 갱신
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
}

// 전역 인스턴스
window.flashcardEngine = new FlashcardEngine();
