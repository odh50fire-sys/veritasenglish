/**
 * Veritas English - 서술형 어순 배열 훈련 엔진 (Word Scramble Engine)
 * 중등 내신 핵심 문법 구문 및 70개 독해 지문 연계 서술형 어순배열 훈련
 */

class ScrambleEngine {
    constructor() {
        this.sentences = typeof SCRAMBLE_SENTENCES_DB !== 'undefined' ? SCRAMBLE_SENTENCES_DB : [];
        this.currentIndex = 0;
        this.currentFilter = 'all'; // 'all', 'PRE_M1', 'M1', 'M2', 'M3'
        this.filteredList = [...this.sentences];

        this.currentSentence = null;
        this.availableChips = []; // [{ id, text, isDistractor }]
        this.selectedChips = [];  // [{ id, text, isDistractor }]

        this.attempts = 0;
        this.isSubmitted = false;
        this.isCorrect = false;

        this.init();
    }

    init() {
        this.applyFilter('all');
    }

    applyFilter(filterGrade = 'all') {
        this.currentFilter = filterGrade;
        if (filterGrade === 'all') {
            this.filteredList = [...this.sentences];
        } else {
            this.filteredList = this.sentences.filter(s => s.grade === filterGrade);
        }
        this.currentIndex = 0;
        if (this.filteredList.length > 0) {
            this.loadSentence(this.filteredList[0].id);
        }
    }

    openModal(specificIdOrPassageId = null) {
        const modal = document.getElementById('modal-scramble-training');
        if (!modal) return;
        modal.classList.remove('hidden');

        if (specificIdOrPassageId) {
            const found = this.sentences.find(s => s.id === specificIdOrPassageId || s.passageId === specificIdOrPassageId);
            if (found) {
                this.loadSentence(found.id);
            } else {
                this.loadSentence(this.filteredList[0]?.id);
            }
        } else {
            this.loadSentence(this.filteredList[this.currentIndex]?.id);
        }

        if (window.lucide) window.lucide.createIcons();
    }

    closeModal() {
        const modal = document.getElementById('modal-scramble-training');
        if (modal) modal.classList.add('hidden');
    }

    loadSentence(sentenceId) {
        let sentence = this.sentences.find(s => s.id === sentenceId);
        if (!sentence && this.filteredList.length > 0) {
            sentence = this.filteredList[0];
        }
        if (!sentence) return;

        this.currentSentence = sentence;
        this.attempts = 0;
        this.isSubmitted = false;
        this.isCorrect = false;
        this.selectedChips = [];

        // 단어 칩 준비 (원래 단어 + 함정 단어 셔플)
        const chips = [];
        sentence.words.forEach((w, idx) => {
            chips.push({ id: `word-${idx}-${Date.now()}`, text: w, isDistractor: false });
        });

        if (Array.isArray(sentence.distractors)) {
            sentence.distractors.forEach((dw, idx) => {
                chips.push({ id: `dist-${idx}-${Date.now()}`, text: dw, isDistractor: true });
            });
        }

        // Fisher-Yates 셔플
        for (let i = chips.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [chips[i], chips[j]] = [chips[j], chips[i]];
        }
        this.availableChips = chips;

        this.render();
    }

    render() {
        const titleEl = document.getElementById('scramble-title');
        const badgeEl = document.getElementById('scramble-grade-badge');
        const grammarEl = document.getElementById('scramble-grammar-point');
        const koEl = document.getElementById('scramble-ko-meaning');
        const countEl = document.getElementById('scramble-progress-count');
        const feedbackEl = document.getElementById('scramble-feedback-area');
        const hintBox = document.getElementById('scramble-hint-box');

        if (!this.currentSentence) return;

        if (titleEl) titleEl.textContent = this.currentSentence.title;
        if (badgeEl) {
            const gradeMap = { PRE_M1: '예비중', M1: '중1 내신', M2: '중2 내신', M3: '중3 내신' };
            badgeEl.textContent = gradeMap[this.currentSentence.grade] || this.currentSentence.grade;
        }
        if (grammarEl) grammarEl.textContent = `핵심 문법: ${this.currentSentence.grammarPoint}`;
        if (koEl) koEl.textContent = `"${this.currentSentence.ko}"`;

        const curIdx = this.filteredList.findIndex(s => s.id === this.currentSentence.id) + 1;
        if (countEl) countEl.textContent = `${curIdx || 1} / ${this.filteredList.length}`;

        if (feedbackEl) {
            feedbackEl.innerHTML = '';
            feedbackEl.classList.add('hidden');
        }
        if (hintBox) hintBox.classList.add('hidden');

        this.renderSelectedSlot();
        this.renderAvailablePool();

        const submitBtn = document.getElementById('btn-scramble-submit');
        const nextBtn = document.getElementById('btn-scramble-next');
        if (submitBtn) {
            submitBtn.classList.remove('hidden');
            submitBtn.disabled = this.selectedChips.length === 0;
        }
        if (nextBtn) nextBtn.classList.add('hidden');

        if (window.lucide) window.lucide.createIcons();
    }

    renderSelectedSlot() {
        const slotEl = document.getElementById('scramble-selected-slot');
        if (!slotEl) return;

        if (this.selectedChips.length === 0) {
            slotEl.innerHTML = `
                <div class="h-24 flex items-center justify-center text-slate-400 text-sm italic border-2 border-dashed border-slate-200 rounded-xl w-full">
                    아래 단어 블록을 클릭하여 올바른 순서로 문장을 완성하세요.
                </div>
            `;
            return;
        }

        slotEl.innerHTML = `
            <div class="flex flex-wrap items-center gap-2 min-h-24 p-3 bg-white border border-blue-200 rounded-xl shadow-inner w-full">
                ${this.selectedChips.map((chip, idx) => `
                    <button type="button" onclick="window.scrambleEngine.returnChip(${idx})" 
                        class="px-3 py-1.5 rounded-lg bg-blue-900 text-white font-mono text-sm font-semibold shadow-xs hover:bg-rose-600 transition-all cursor-pointer flex items-center gap-1 group active:scale-95 animate-in fade-in zoom-in-95 duration-150">
                        <span>${chip.text}</span>
                        <i data-lucide="x" class="w-3 h-3 text-blue-300 group-hover:text-white"></i>
                    </button>
                `).join('')}
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
    }

    renderAvailablePool() {
        const poolEl = document.getElementById('scramble-available-pool');
        if (!poolEl) return;

        if (this.availableChips.length === 0) {
            poolEl.innerHTML = `<div class="text-xs text-slate-400 py-3">모든 단어 블록이 조립되었습니다. [정답 확인]을 눌러주세요.</div>`;
            return;
        }

        poolEl.innerHTML = `
            <div class="flex flex-wrap items-center gap-2 p-2">
                ${this.availableChips.map((chip, idx) => `
                    <button type="button" onclick="window.scrambleEngine.selectChip(${idx})" 
                        class="px-3 py-2 rounded-xl bg-slate-100 hover:bg-blue-100 text-slate-800 hover:text-blue-900 font-mono text-sm font-medium border border-slate-200 hover:border-blue-300 shadow-2xs transition-all cursor-pointer active:scale-95">
                        ${chip.text}
                    </button>
                `).join('')}
            </div>
        `;
    }

    selectChip(chipIndex) {
        if (this.isSubmitted && this.isCorrect) return;
        const chip = this.availableChips.splice(chipIndex, 1)[0];
        if (chip) {
            this.selectedChips.push(chip);
            this.renderSelectedSlot();
            this.renderAvailablePool();

            const submitBtn = document.getElementById('btn-scramble-submit');
            if (submitBtn) submitBtn.disabled = this.selectedChips.length === 0;
        }
    }

    returnChip(chipIndex) {
        if (this.isSubmitted && this.isCorrect) return;
        const chip = this.selectedChips.splice(chipIndex, 1)[0];
        if (chip) {
            this.availableChips.push(chip);
            this.renderSelectedSlot();
            this.renderAvailablePool();

            const submitBtn = document.getElementById('btn-scramble-submit');
            if (submitBtn) submitBtn.disabled = this.selectedChips.length === 0;
        }
    }

    clearSelected() {
        if (this.isSubmitted && this.isCorrect) return;
        this.availableChips = [...this.availableChips, ...this.selectedChips];
        this.selectedChips = [];
        this.renderSelectedSlot();
        this.renderAvailablePool();

        const submitBtn = document.getElementById('btn-scramble-submit');
        if (submitBtn) submitBtn.disabled = true;
    }

    showHint() {
        const hintBox = document.getElementById('scramble-hint-box');
        const hintText = document.getElementById('scramble-hint-text');
        if (hintBox && hintText && this.currentSentence) {
            hintText.textContent = this.currentSentence.hint || `첫 단어는 '${this.currentSentence.words[0]}' 입니다.`;
            hintBox.classList.remove('hidden');
        }
    }

    checkAnswer() {
        if (!this.currentSentence || this.selectedChips.length === 0) return;
        this.attempts++;

        const userWords = this.selectedChips.map(c => c.text);
        const targetWords = this.currentSentence.words;

        // 비교: 구두점/대소문자 정밀 비교
        const isMatched = userWords.length === targetWords.length &&
            userWords.every((w, idx) => w === targetWords[idx]);

        const feedbackEl = document.getElementById('scramble-feedback-area');
        const submitBtn = document.getElementById('btn-scramble-submit');
        const nextBtn = document.getElementById('btn-scramble-next');

        if (isMatched) {
            this.isCorrect = true;
            this.isSubmitted = true;

            const isOneShot = (this.attempts === 1);
            if (window.storage && typeof window.storage.recordScrambleCompletion === 'function') {
                window.storage.recordScrambleCompletion(this.currentSentence.id, isOneShot);
            }

            if (typeof confetti === 'function') {
                confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
            }

            if (feedbackEl) {
                feedbackEl.classList.remove('hidden');
                feedbackEl.innerHTML = `
                    <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start justify-between gap-3 animate-in fade-in duration-200">
                        <div>
                            <div class="flex items-center gap-2 font-bold text-sm text-emerald-800 mb-1">
                                <i data-lucide="check-circle-2" class="w-5 h-5 text-emerald-600"></i>
                                <span>정답입니다! 완벽한 서술형 영작입니다. (${isOneShot ? '🎯 원샷 성공! +20 EXP' : '✓ +15 EXP'})</span>
                            </div>
                            <div class="font-serif text-base font-semibold text-slate-900 mt-1">
                                "${this.currentSentence.en}"
                            </div>
                            <div class="text-xs text-slate-500 mt-1">
                                ${this.currentSentence.grammarPoint}
                            </div>
                        </div>
                        <div class="flex items-center gap-1 shrink-0">
                            <button type="button" onclick="window.scrambleEngine.playAudio('en-US')" class="px-2.5 py-1.5 rounded-lg bg-white border border-emerald-300 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 flex items-center gap-1 shadow-2xs">
                                <span>🇺🇸 미국식</span>
                            </button>
                            <button type="button" onclick="window.scrambleEngine.playAudio('en-GB')" class="px-2.5 py-1.5 rounded-lg bg-white border border-emerald-300 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 flex items-center gap-1 shadow-2xs">
                                <span>🇬🇧 영국식</span>
                            </button>
                        </div>
                    </div>
                `;
            }

            if (submitBtn) submitBtn.classList.add('hidden');
            if (nextBtn) {
                nextBtn.classList.remove('hidden');
                nextBtn.focus();
            }

            // 자동 음성 재생 (여성 원어민)
            this.playAudio('en-US');

        } else {
            // 오답 처리
            this.isCorrect = false;

            // 스마트 오답노트에 자동 등록
            if (window.storage && typeof window.storage.recordWrongAnswer === 'function') {
                window.storage.recordWrongAnswer({
                    sourceType: 'scramble',
                    passageId: this.currentSentence.passageId,
                    passageTitle: this.currentSentence.title,
                    questionText: `[서술형 어순배열] ${this.currentSentence.ko}`,
                    userChoice: userWords.join(' '),
                    correctChoice: targetWords.join(' '),
                    explanation: `${this.currentSentence.grammarPoint} / 힌트: ${this.currentSentence.hint || ''}`
                });
            }

            if (feedbackEl) {
                feedbackEl.classList.remove('hidden');
                feedbackEl.innerHTML = `
                    <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 animate-in fade-in duration-200">
                        <div class="flex items-center gap-2 font-bold text-sm text-rose-800 mb-1">
                            <i data-lucide="alert-circle" class="w-5 h-5 text-rose-600"></i>
                            <span>단어의 어순이 일치하지 않습니다. 다시 시도해보세요!</span>
                        </div>
                        <p class="text-xs text-rose-700 mt-1">
                            문법 포인트: <strong>${this.currentSentence.grammarPoint}</strong><br>
                            ${this.currentSentence.hint || ''}
                        </p>
                    </div>
                `;
            }
        }

        if (window.lucide) window.lucide.createIcons();
    }

    playAudio(accent = 'en-US') {
        if (!this.currentSentence || !window.tts) return;
        window.tts.speak(this.currentSentence.en, accent);
    }

    nextSentence() {
        const curIdx = this.filteredList.findIndex(s => s.id === this.currentSentence.id);
        if (curIdx < this.filteredList.length - 1) {
            this.loadSentence(this.filteredList[curIdx + 1].id);
        } else {
            alert('🎉 현재 카테고리의 모든 어순배열 훈련 문장을 마스터했습니다!');
            this.loadSentence(this.filteredList[0].id);
        }
    }
}

// 전역 인스턴스
window.scrambleEngine = new ScrambleEngine();
