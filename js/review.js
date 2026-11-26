/**
 * Veritas English - 에빙하우스 망각곡선(SRS) 및 라이트너 5단계 복습 관리
 * [방안 1] 주기별 분리 큐 & 🚨 긴급(Overdue) 복습 구출 시스템
 */

class ReviewManager {
    constructor() {
        this.currentViewMode = 'due'; // 'due' | 'weak'
        this.currentBin = 'today';    // 'today' | 'urgent' | 'stage1' | 'stage2' | 'stage3' | 'stage4_5' | 'all'
    }

    render() {
        this.renderStageBoxes();
        this.renderWordList();
    }

    renderStageBoxes() {
        const bins = window.storage ? window.storage.getEbbinghausBins() : null;
        const counts = bins ? bins.counts : { stage1: 0, stage2: 0, stage3: 0, stage4: 0, stage5: 0, totalDueToday: 0, urgentOverdue: 0 };
        const stats = window.storage ? window.storage.getStatistics() : { weakCount: 0 };

        // 1~5단계 카운트 주입
        for (let i = 1; i <= 5; i++) {
            const countEl = document.getElementById(`srs-count-stage-${i}`);
            if (countEl) countEl.textContent = counts[`stage${i}`] || 0;
            
            // 박스 클릭 시 해당 단계 필터링 지원
            const boxEl = countEl ? countEl.closest('div.rounded-xl') : null;
            if (boxEl && !boxEl.dataset.hasClickBound) {
                boxEl.dataset.hasClickBound = 'true';
                boxEl.classList.add('cursor-pointer', 'hover:border-blue-900', 'transition-all');
                boxEl.title = `클릭 시 ${i}단계 단어만 집중 보기`;
                boxEl.onclick = () => {
                    this.switchBin(i >= 4 ? 'stage4_5' : `stage${i}`);
                };
            }
        }

        const masteredBadge = document.getElementById('srs-mastered-total');
        if (masteredBadge) masteredBadge.textContent = counts.stage5 || 0;

        // 서브탭 뱃지 갱신
        const dueCountEl = document.getElementById('srs-due-count-pill');
        if (dueCountEl) {
            if (counts.urgentOverdue > 0) {
                dueCountEl.innerHTML = `${counts.totalDueToday}개 <span class="text-rose-600 font-bold ml-1">(🚨 긴급 ${counts.urgentOverdue}개)</span>`;
            } else {
                dueCountEl.textContent = `${counts.totalDueToday}개 단어`;
            }
        }

        const weakCountEl = document.getElementById('srs-weak-count-pill');
        if (weakCountEl) weakCountEl.textContent = `${stats.weakCount || 0}개 단어`;
    }

    switchView(mode) {
        this.currentViewMode = mode;
        const btnDue = document.getElementById('btn-review-tab-due');
        const btnWeak = document.getElementById('btn-review-tab-weak');

        if (btnDue && btnWeak) {
            btnDue.classList.toggle('active-subtab', mode === 'due');
            btnWeak.classList.toggle('active-subtab', mode === 'weak');
        }

        this.renderWordList();
    }

    switchBin(bin) {
        this.currentViewMode = 'due';
        this.currentBin = bin;

        const btnDue = document.getElementById('btn-review-tab-due');
        const btnWeak = document.getElementById('btn-review-tab-weak');
        if (btnDue && btnWeak) {
            btnDue.classList.add('active-subtab');
            btnWeak.classList.remove('active-subtab');
        }

        this.renderWordList();
    }

    renderWordList() {
        const container = document.getElementById('srs-word-list-container');
        if (!container) return;

        container.innerHTML = '';

        if (this.currentViewMode === 'weak') {
            this.renderWeakWords(container);
            return;
        }

        // [방안 1 핵심] 에빙하우스 주기별 분리 큐 렌더링
        const bins = window.storage ? window.storage.getEbbinghausBins() : { counts: {}, todayDue: [], overdue: [] };
        const counts = bins.counts;

        // 1. 주기별 필터 칩 바 (Filter Bar) 주입
        const filterBar = document.createElement('div');
        filterBar.className = 'flex items-center gap-1.5 flex-wrap pb-3.5 mb-2 border-b border-slate-100 text-xs font-semibold';

        const filterChips = [
            { key: 'today', label: '⚡ 오늘 정규 복습', count: counts.totalDueToday, color: 'blue' },
            { key: 'urgent', label: '🚨 긴급 복습', count: counts.urgentOverdue, color: 'rose', isUrgent: true },
            { key: 'stage1', label: '🌱 1일 주기 (어제)', count: counts.stage1, color: 'indigo' },
            { key: 'stage2', label: '🌿 3일 주기', count: counts.stage2, color: 'blue' },
            { key: 'stage3', label: '🌳 7일 주기', count: counts.stage3, color: 'purple' },
            { key: 'stage4_5', label: '🏆 14/30일 주기', count: counts.stage4 + counts.stage5, color: 'emerald' },
            { key: 'all', label: '전체 목록', count: counts.totalDueToday + counts.urgentOverdue, color: 'slate' }
        ];

        filterBar.innerHTML = filterChips.map(c => {
            const isActive = (this.currentBin === c.key);
            const isUrgentActive = c.isUrgent && c.count > 0;
            return `
                <button type="button" onclick="window.reviewManager.switchBin('${c.key}')" class="px-3 py-1.5 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive 
                        ? (c.isUrgent ? 'bg-rose-600 border-rose-600 text-white shadow-xs' : 'bg-slate-900 border-slate-900 text-white shadow-xs')
                        : (isUrgentActive 
                            ? 'bg-rose-50 hover:bg-rose-100 border-rose-300 text-rose-800 animate-pulse font-bold'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700')
                }">
                    <span>${c.label}</span>
                    <span class="px-1.5 py-0.2 rounded-full font-mono text-[10px] font-bold ${
                        isActive ? 'bg-white/20 text-white' : (isUrgentActive ? 'bg-rose-200 text-rose-950' : 'bg-slate-100 text-slate-600')
                    }">${c.count}</span>
                </button>
            `;
        }).join('');

        container.appendChild(filterBar);

        // 2. 선택된 주기의 단어들 추출
        const words = window.storage.getDueReviewWords(this.currentBin);

        if (words.length === 0) {
            const emptyMsg = this.currentBin === 'urgent' 
                ? '현재 밀린 긴급 복습 단어가 없습니다! 성실한 학습 훌륭합니다. 👏'
                : (this.currentBin === 'today' 
                    ? '오늘 예정된 정규 복습 단어가 모두 완료되었습니다! 🎉'
                    : '이 주기(Stage)에 해당하는 복습 단어가 없습니다.');

            const emptyCard = document.createElement('div');
            emptyCard.className = 'py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200';
            emptyCard.innerHTML = `
                <i data-lucide="check-check" class="w-10 h-10 mx-auto text-emerald-500 mb-2"></i>
                <p class="font-serif font-bold text-slate-700 text-lg">${emptyMsg}</p>
                <p class="text-xs text-slate-500 mt-1">에빙하우스 주기에 따라 다음 복습 날짜에 자동으로 호출됩니다.</p>
            `;
            container.appendChild(emptyCard);
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        // 3. 단어 카드 리스트 주입
        const listWrap = document.createElement('div');
        listWrap.className = 'space-y-3';

        words.forEach(word => {
            const card = document.createElement('div');
            card.className = `p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs ${
                word.isOverdue 
                    ? 'bg-rose-50/30 border-rose-200 hover:border-rose-400' 
                    : 'bg-white border-slate-200 hover:border-blue-900'
            }`;

            // 주기 뱃지 구성
            let cycleBadgeHtml = '';
            if (word.isOverdue) {
                cycleBadgeHtml = `
                    <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-rose-100 text-rose-800 border border-rose-300 flex items-center gap-1">
                        <span>🚨</span> 긴급 (D+${word.overdueDays || 1}일 경과)
                    </span>
                `;
            } else {
                const stageMap = {
                    1: { name: '🌱 1일 주기', cls: 'bg-blue-100 text-blue-900 border-blue-200' },
                    2: { name: '🌿 3일 주기', cls: 'bg-indigo-100 text-indigo-900 border-indigo-200' },
                    3: { name: '🌳 7일 주기', cls: 'bg-purple-100 text-purple-900 border-purple-200' },
                    4: { name: '🔮 14일 주기', cls: 'bg-purple-100 text-purple-900 border-purple-200' },
                    5: { name: '🏆 30일 마스터', cls: 'bg-emerald-100 text-emerald-900 border-emerald-200' }
                };
                const sInfo = stageMap[word.stage || 1] || stageMap[1];
                cycleBadgeHtml = `
                    <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold ${sInfo.cls} border">
                        ${sInfo.name}
                    </span>
                `;
            }

            card.innerHTML = `
                <div class="flex items-start sm:items-center gap-3.5 min-w-0">
                    <button type="button" class="srs-speak-btn p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-900 transition-colors shrink-0 cursor-pointer" data-word="${word.word}" title="발음 듣기">
                        <i data-lucide="volume-2" class="w-5 h-5"></i>
                    </button>
                    <div class="min-w-0">
                        <div class="flex items-center gap-2 flex-wrap">
                            <span class="font-serif font-black text-lg text-slate-900 tracking-tight">${word.word}</span>
                            <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">${word.partOfSpeech || 'n.'}</span>
                            ${cycleBadgeHtml}
                            <span class="text-[10px] font-mono text-slate-400">
                                복습일: ${word.nextReviewDate || '오늘'}
                            </span>
                        </div>
                        <div class="text-sm font-sans font-bold text-slate-700 mt-1">${word.meaning || word.koreanMeaning || word.definition || ''}</div>
                        ${word.example ? `<div class="text-xs text-slate-500 italic mt-0.5 font-serif line-clamp-1">"${word.example}"</div>` : ''}
                    </div>
                </div>
                <div class="flex items-center gap-2 shrink-0 self-end sm:self-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <button type="button" class="srs-quick-test-btn px-3 py-1.5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-xs font-bold text-slate-700 hover:text-emerald-900 transition-colors cursor-pointer" data-id="${word.id}" data-action="easy">
                        암기 통과 (다음 주기로 ➔)
                    </button>
                    <button type="button" class="srs-quick-test-btn px-3 py-1.5 rounded-xl border border-red-200 bg-red-50 hover:bg-red-100 text-xs font-bold text-red-700 transition-colors cursor-pointer" data-id="${word.id}" data-action="hard">
                        재학습 (1단계 리셋)
                    </button>
                </div>
            `;
            listWrap.appendChild(card);
        });

        container.appendChild(listWrap);

        // 이벤트 바인딩
        container.querySelectorAll('.srs-speak-btn').forEach(btn => {
            btn.onclick = () => {
                if (window.tts) window.tts.speak(btn.dataset.word);
            };
        });

        container.querySelectorAll('.srs-quick-test-btn').forEach(btn => {
            btn.onclick = () => {
                const id = btn.dataset.id;
                const action = btn.dataset.action;
                window.storage.recordReviewResult(id, action);
                this.render();
                if (window.onboardingEngine) window.onboardingEngine.completeQuestStep('readingSolved');
            };
        });

        if (window.lucide) window.lucide.createIcons();
    }

    renderWeakWords(container) {
        const words = window.storage.getWeakWords();
        if (words.length === 0) {
            container.innerHTML = `
                <div class="py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
                    <i data-lucide="check-check" class="w-10 h-10 mx-auto text-emerald-500 mb-2"></i>
                    <p class="font-serif font-bold text-slate-700 text-lg">현재 등록된 취약 단어가 없습니다. 훌륭합니다!</p>
                    <p class="text-sm text-slate-500 mt-1">문제를 풀다 틀린 단어가 생기면 자동으로 오답노트에 수집됩니다.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        const listWrap = document.createElement('div');
        listWrap.className = 'space-y-3';

        words.forEach(word => {
            const card = document.createElement('div');
            card.className = 'bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-900 transition-all flex items-center justify-between shadow-xs';
            card.innerHTML = `
                <div class="flex items-center gap-3.5">
                    <button class="srs-speak-btn p-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-900 transition-colors" data-word="${word.word}" title="발음 듣기">
                        <i data-lucide="volume-2" class="w-5 h-5"></i>
                    </button>
                    <div>
                        <div class="flex items-center gap-2">
                            <span class="font-serif font-black text-lg text-slate-900">${word.word}</span>
                            <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">${word.partOfSpeech || 'n.'}</span>
                            <span class="text-xs font-mono px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">
                                오답 ${word.wrongCount || 1}회
                            </span>
                        </div>
                        <div class="text-sm font-sans font-bold text-slate-700 mt-0.5">${word.meaning || word.koreanMeaning || word.definition || ''}</div>
                        ${word.example ? `<div class="text-xs text-slate-400 italic mt-0.5 font-serif">"${word.example}"</div>` : ''}
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button class="srs-quick-test-btn px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-emerald-50 text-xs font-bold text-slate-700 transition-colors" data-id="${word.id}" data-action="easy">
                        취약 탈출 (+1)
                    </button>
                    <button class="srs-quick-test-btn px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 hover:bg-red-100 text-xs font-bold text-red-700 transition-colors" data-id="${word.id}" data-action="hard">
                        재학습
                    </button>
                </div>
            `;
            listWrap.appendChild(card);
        });

        container.appendChild(listWrap);

        container.querySelectorAll('.srs-speak-btn').forEach(btn => {
            btn.onclick = () => {
                if (window.tts) window.tts.speak(btn.dataset.word);
            };
        });

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

    startTargetedReview(modeOrBin) {
        let targetWords = [];
        if (this.currentViewMode === 'weak') {
            targetWords = window.storage.getWeakWords();
        } else {
            const bin = modeOrBin || this.currentBin || 'today';
            targetWords = window.storage.getDueReviewWords(bin);
        }

        if (targetWords.length === 0) {
            alert('현재 선택된 주기에 복습할 단어가 없습니다.');
            return;
        }

        if (window.app && window.app.switchTab) {
            window.app.switchTab('flashcards');
        }
        if (window.flashcardEngine) {
            window.flashcardEngine.loadDeck(this.currentViewMode === 'weak' ? 'weak' : 'review', targetWords);
        }
    }
}

// 전역 인스턴스 초기화
window.reviewManager = new ReviewManager();
