/**
 * Veritas English - 에빙하우스 망각곡선(SRS) 및 라이트너 5단계 복습 관리
 */

class ReviewManager {
    constructor() {
        this.currentViewMode = 'due'; // 'due' or 'weak'
    }

    render() {
        this.renderStageBoxes();
        this.renderWordList(this.currentViewMode);
    }

    renderStageBoxes() {
        const stats = window.storage.getStatistics();
        const stages = stats.stages;

        for (let i = 1; i <= 5; i++) {
            const countEl = document.getElementById(`srs-count-stage-${i}`);
            if (countEl) countEl.textContent = stages[i] || 0;
        }

        const masteredBadge = document.getElementById('srs-mastered-total');
        if (masteredBadge) masteredBadge.textContent = stages[5] || 0;

        const dueCountEl = document.getElementById('srs-due-count-pill');
        if (dueCountEl) dueCountEl.textContent = `${stats.dueCount}개 단어`;

        const weakCountEl = document.getElementById('srs-weak-count-pill');
        if (weakCountEl) weakCountEl.textContent = `${stats.weakCount}개 단어`;
    }

    switchView(mode) {
        this.currentViewMode = mode;
        const btnDue = document.getElementById('btn-review-tab-due');
        const btnWeak = document.getElementById('btn-review-tab-weak');

        if (btnDue && btnWeak) {
            btnDue.classList.toggle('active-subtab', mode === 'due');
            btnWeak.classList.toggle('active-subtab', mode === 'weak');
        }

        this.renderWordList(mode);
    }

    renderWordList(mode) {
        const container = document.getElementById('srs-word-list-container');
        if (!container) return;

        let words = [];
        if (mode === 'due') {
            words = window.storage.getDueReviewWords();
        } else {
            words = window.storage.getWeakWords();
        }

        container.innerHTML = '';

        if (words.length === 0) {
            container.innerHTML = `
                <div class="py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
                    <i data-lucide="check-check" class="w-10 h-10 mx-auto text-emerald-500 mb-2"></i>
                    <p class="font-serif font-bold text-slate-700 text-lg">
                        ${mode === 'due' ? '오늘 예정된 복습 단어가 모두 완료되었습니다!' : '현재 등록된 취약 단어가 없습니다. 훌륭합니다!'}
                    </p>
                    <p class="text-sm text-slate-500 mt-1">지속적인 반복 학습으로 장기기억을 완성해보세요.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        words.forEach(word => {
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-900 transition-all flex items-center justify-between shadow-xs';
            card.innerHTML = `
                <div class="flex items-center gap-4">
                    <button class="srs-speak-btn p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-900 transition-colors" data-word="${word.word}" title="발음 듣기">
                        <i data-lucide="volume-2" class="w-5 h-5"></i>
                    </button>
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-serif font-bold text-lg text-slate-900">${word.word}</span>
                            <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">${word.partOfSpeech || 'n.'}</span>
                            <span class="text-xs px-2 py-0.5 rounded ${word.stage >= 4 ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'} font-medium">
                                SRS ${word.stage || 1}단계
                            </span>
                        </div>
                        <div class="text-sm text-slate-600 mt-0.5">${word.meaning}</div>
                        ${word.example ? `<div class="text-xs text-slate-400 italic mt-1 font-serif">"${word.example}"</div>` : ''}
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button class="srs-quick-test-btn px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-medium text-slate-700 transition-colors" data-id="${word.id}" data-action="easy">
                        암기 완료 (+1)
                    </button>
                    <button class="srs-quick-test-btn px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 text-xs font-medium text-red-700 transition-colors" data-id="${word.id}" data-action="hard">
                        재학습
                    </button>
                </div>
            `;
            container.appendChild(card);
        });

        // 발음 버튼 이벤트 바인딩
        container.querySelectorAll('.srs-speak-btn').forEach(btn => {
            btn.onclick = () => {
                if (window.tts) window.tts.speak(btn.dataset.word);
            };
        });

        // 퀵 암기 판정 버튼 이벤트 바인딩
        container.querySelectorAll('.srs-quick-test-btn').forEach(btn => {
            btn.onclick = () => {
                const id = btn.dataset.id;
                const action = btn.dataset.action;
                window.storage.recordReviewResult(id, action);
                this.render();
            };
        });

        if (window.lucide) window.lucide.createIcons();
    }

    startTargetedReview(mode) {
        const targetMode = mode || this.currentViewMode || 'due';
        let targetWords = [];
        if (targetMode === 'due') {
            targetWords = window.storage.getDueReviewWords();
        } else {
            targetWords = window.storage.getWeakWords();
            if (targetWords.length === 0) {
                targetWords = window.storage.getDueReviewWords();
            }
        }
        if (window.app && window.app.switchTab) {
            window.app.switchTab('flashcards');
        }
        if (window.flashcardEngine) {
            window.flashcardEngine.loadDeck(targetMode === 'due' ? 'review' : 'weak', targetWords.length > 0 ? targetWords : null);
        }
    }
}

// 전역 인스턴스
window.reviewManager = new ReviewManager();
