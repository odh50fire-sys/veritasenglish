/**
 * Veritas English - 베리타스 영단어 사전 엔진 (Veritas Lexicon)
 * 1. 실시간 검색 (영단어 철자 + 한글 뜻)
 * 2. A-Z 알파벳 색인 네비게이터
 * 3. 출처(능률 VOCA 2025 / 교재 OCR / 데일리 표현 / 직접 등록) 및 상태(취약/복습/마스터/북마크) 다차원 필터링
 * 4. "단어 까먹었을 때" 원클릭 망각곡선 1단계 재등록 (SRS 복습 큐 승격)
 * 5. 카드 뷰 & 컴팩트 테이블 뷰 토글 지원
 */

class DictionaryEngine {
    constructor() {
        this.searchQuery = '';
        this.selectedAlphabet = 'ALL'; // 'ALL' or 'A' ~ 'Z'
        this.sourceFilter = 'ALL'; // 'ALL', 'neungryul', 'ocr', 'daily', 'custom'
        this.neungryulDayFilter = 'ALL'; // 'ALL' or 'DAY 01' ~ 'DAY 40'
        this.statusFilter = 'ALL'; // 'ALL', 'weak', 'due', 'mastered', 'starred'
        this.sortBy = 'alpha'; // 'alpha', 'recent', 'weak', 'stage'
        this.viewMode = 'card'; // 'card' or 'table'

        this.initEventListeners();
    }

    initEventListeners() {
        // 검색창 실시간 타이핑 이벤트 바인딩
        document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('dict-search-input');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    this.searchQuery = e.target.value.trim().toLowerCase();
                    this.renderWordList();
                });
            }
        });
    }

    render() {
        this.renderAlphabetBar();
        this.renderSourceFilters();
        this.renderWordList();
    }

    /**
     * A-Z 알파벳 점프 인덱스 바 렌더링
     */
    renderAlphabetBar() {
        const container = document.getElementById('dict-alphabet-bar');
        if (!container) return;

        const alphabets = ['ALL', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];

        container.innerHTML = alphabets.map(letter => {
            const isSelected = (this.selectedAlphabet === letter);
            return `
                <button class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    isSelected ? 'bg-blue-900 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }" onclick="window.dictionaryEngine.selectAlphabet('${letter}')">
                    ${letter}
                </button>
            `;
        }).join('');
    }

    /**
     * 출처 및 능률 VOCA DAY 필터 옵션 동기화
     */
    renderSourceFilters() {
        const neungryulDayContainer = document.getElementById('dict-neungryul-day-filter-wrap');
        const neungryulDaySelect = document.getElementById('dict-neungryul-day-select');

        // 능률 VOCA 선택 시에만 세부 DAY 필터 노출
        if (neungryulDayContainer) {
            neungryulDayContainer.classList.toggle('hidden', this.sourceFilter !== 'neungryul');
        }

        if (neungryulDaySelect && neungryulDaySelect.options.length <= 1) {
            const dataPool = window.NEUNGRYUL_VOCA_2025_DATA || [];
            const uniqueDays = Array.from(new Set(dataPool.map(r => r.DAY))).sort();
            uniqueDays.forEach(d => {
                const opt = document.createElement('option');
                opt.value = d;
                opt.textContent = d;
                neungryulDaySelect.appendChild(opt);
            });
        }
    }

    /**
     * 조건에 맞는 단어 목록 필터링 및 정렬
     */
    getFilteredWords() {
        const allWords = window.storage.words || [];
        const today = window.storage.getTodayDateString();

        return allWords.filter(word => {
            // 1. 검색어 필터 (영단어 철자 또는 한글 뜻)
            if (this.searchQuery) {
                const w = word.word.toLowerCase();
                const m = (word.meaning || '').toLowerCase();
                const ex = (word.example || '').toLowerCase();
                if (!w.includes(this.searchQuery) && !m.includes(this.searchQuery) && !ex.includes(this.searchQuery)) {
                    return false;
                }
            }

            // 2. 알파벳 인덱스 필터
            if (this.selectedAlphabet !== 'ALL') {
                const firstChar = word.word.trim().charAt(0).toUpperCase();
                if (firstChar !== this.selectedAlphabet) {
                    return false;
                }
            }

            // 3. 출처 필터
            if (this.sourceFilter === 'curated') {
                if (!word.isCuratedVoca) return false;
            } else if (this.sourceFilter === 'neungryul') {
                if (!word.isNeungryul2025 && !word.isNeungryulEtym2025) return false;
                if (this.neungryulDayFilter !== 'ALL' && word.neungryulDay !== this.neungryulDayFilter) {
                    return false;
                }
            } else if (this.sourceFilter === 'ocr') {
                if (word.isNeungryul2025 || word.isNeungryulEtym2025 || word.isDailyNative || word.isCuratedVoca) return false;
                if (!word.tag || (!word.tag.includes('교재') && !word.tag.includes('OCR'))) return false;
            } else if (this.sourceFilter === 'daily') {
                if (!word.isDailyNative && word.tag !== '원어민 데일리') return false;
            } else if (this.sourceFilter === 'custom') {
                if (word.isNeungryul2025 || word.isNeungryulEtym2025 || word.isDailyNative || word.isCuratedVoca) return false;
                if (word.tag && (word.tag.includes('교재') || word.tag.includes('OCR'))) return false;
            }

            // 4. 학습 상태 필터
            if (this.statusFilter === 'weak') {
                if (!word.isWeak && (word.wrongCount === 0 || word.wrongCount < word.correctCount)) return false;
            } else if (this.statusFilter === 'due') {
                if (word.nextReviewDate && word.nextReviewDate > today) return false;
            } else if (this.statusFilter === 'mastered') {
                if ((word.stage || 1) < 5) return false;
            } else if (this.statusFilter === 'starred') {
                if (!word.starred) return false;
            }

            return true;
        }).sort((a, b) => {
            // 정렬
            if (this.sortBy === 'alpha') {
                return a.word.localeCompare(b.word);
            } else if (this.sortBy === 'recent') {
                return (b.createdAt || 0) - (a.createdAt || 0);
            } else if (this.sortBy === 'weak') {
                return (b.wrongCount || 0) - (a.wrongCount || 0);
            } else if (this.sortBy === 'stage') {
                return (a.stage || 1) - (b.stage || 1);
            }
            return 0;
        });
    }

    /**
     * 단어 목록 렌더링 (카드 뷰 or 테이블 뷰)
     */
    renderWordList() {
        const words = this.getFilteredWords();
        const countSpan = document.getElementById('dict-result-count');
        const container = document.getElementById('dict-word-container');
        if (!container) return;

        if (countSpan) {
            countSpan.textContent = words.length;
        }

        container.innerHTML = '';

        if (words.length === 0) {
            container.innerHTML = `
                <div class="py-16 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200 col-span-full">
                    <i data-lucide="search-x" class="w-12 h-12 mx-auto text-slate-300 mb-2"></i>
                    <p class="font-serif font-bold text-slate-700 text-lg">조건에 일치하는 등록 단어가 없습니다.</p>
                    <p class="text-xs text-slate-500 mt-1">검색어를 지우거나 알파벳/출처 필터를 '전체'로 변경해 보세요.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        if (this.viewMode === 'card') {
            container.className = 'grid grid-cols-1 md:grid-cols-2 gap-4';
            words.forEach(word => {
                container.appendChild(this.createWordCardElement(word));
            });
        } else {
            container.className = 'w-full';
            container.appendChild(this.createWordTableElement(words));
        }

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    /**
     * 카드형 사전 단어 요소 생성
     */
    createWordCardElement(w) {
        const card = document.createElement('div');
        const isMastered = (w.stage || 1) === 5;
        const isWeak = w.isWeak || (w.wrongCount > 0 && w.wrongCount >= w.correctCount);

        card.className = `p-5 rounded-2xl bg-white border transition-all flex flex-col justify-between shadow-2xs hover:shadow-xs ${
            isWeak ? 'border-amber-300 bg-amber-50/15' :
            isMastered ? 'border-emerald-300 bg-emerald-50/10' :
            'border-slate-200 hover:border-blue-900'
        }`;

        let sourceBadge = '';
        if (w.isNeungryul2025) {
            sourceBadge = `<span class="px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[10px] font-mono font-bold">능률 고난도 ${w.neungryulDay || ''}</span>`;
        } else if (w.isNeungryulEtym2025) {
            sourceBadge = `<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-mono font-bold">능률 어원편 ${w.neungryulDay || ''}</span>`;
        } else if (w.isDailyNative || w.tag === '원어민 데일리') {
            sourceBadge = `<span class="px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 text-[10px] font-mono font-bold">원어민 데일리</span>`;
        } else if (w.tag) {
            sourceBadge = `<span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono">${w.tag}</span>`;
        }

        card.innerHTML = `
            <div>
                <div class="flex items-start justify-between gap-2">
                    <div class="flex flex-wrap items-center gap-1.5">
                        ${sourceBadge}
                        <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                            isMastered ? 'bg-emerald-100 text-emerald-800' :
                            isWeak ? 'bg-amber-100 text-amber-900' :
                            'bg-slate-100 text-slate-700'
                        }">
                            Stage ${w.stage || 1}
                        </span>
                        ${isWeak ? '<span class="text-[10px] text-amber-700 font-bold flex items-center gap-0.5"><i data-lucide="alert-triangle" class="w-3 h-3"></i> 취약</span>' : ''}
                    </div>

                    <div class="flex items-center gap-1">
                        <button class="p-1.5 text-slate-400 hover:text-amber-500 transition-colors cursor-pointer" onclick="window.dictionaryEngine.toggleStar('${w.id}')" title="중요 단어 북마크">
                            <i data-lucide="star" class="w-4 h-4 ${w.starred ? 'fill-amber-400 text-amber-500' : ''}"></i>
                        </button>
                        <button class="p-1.5 text-slate-400 hover:text-blue-900 transition-colors cursor-pointer" onclick="window.tts && window.tts.speak('${w.word}')" title="원어민 발음">
                            <i data-lucide="volume-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>

                <div class="mt-2.5">
                    <div class="flex items-baseline gap-2">
                        <h4 class="font-serif font-black text-xl text-slate-900 tracking-wide">${w.word}</h4>
                        ${window.posHelper ? window.posHelper.renderPosBadge(w.partOfSpeech, w.word, w.meaning) : `<span class="font-mono text-xs text-slate-500 font-bold">${w.partOfSpeech || 'n.'}</span>`}
                    </div>
                    <div class="text-sm font-semibold text-slate-800 mt-1 leading-snug">${w.meaning}</div>

                    ${w.example ? `
                        <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-100 mt-3 text-xs space-y-0.5">
                            <div class="font-serif italic text-slate-800">"${w.example}"</div>
                            ${w.exampleMeaning ? `<div class="text-slate-500 text-[11px]">${w.exampleMeaning}</div>` : ''}
                        </div>
                    ` : ''}

                    ${w.memo ? `
                        <div class="mt-2 text-xs text-indigo-900 bg-indigo-50/70 p-2 rounded-lg border border-indigo-100 flex items-start gap-1">
                            <span class="font-bold shrink-0">💡 메모:</span>
                            <span>${w.memo}</span>
                        </div>
                    ` : ''}
                </div>
            </div>

            <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div class="text-[11px] text-slate-400 font-mono">
                    복습: ${w.reviewCount || 0}회 (정답 ${w.correctCount || 0} / 오답 ${w.wrongCount || 0})
                </div>

                <div class="flex items-center gap-1.5">
                    <button class="px-2 py-1 text-[11px] text-slate-500 hover:text-blue-900 hover:bg-slate-100 rounded transition-colors cursor-pointer" onclick="window.dictionaryEngine.promptMemo('${w.id}')">
                        메모 작성
                    </button>
                    <!-- 까먹음! 원클릭 복습 큐 등록 버튼 -->
                    <button class="px-2.5 py-1 rounded-lg bg-amber-400/90 hover:bg-amber-400 text-slate-950 font-serif font-bold text-[11px] shadow-2xs transition-all flex items-center gap-1 cursor-pointer active:scale-95" onclick="window.dictionaryEngine.markAsForgotten('${w.id}')" title="이 단어를 까먹었을 때 클릭하여 오늘 복습 큐로 승격">
                        <i data-lucide="zap" class="w-3 h-3 text-red-700"></i>
                        <span>까먹음! 다시 외우기</span>
                    </button>
                </div>
            </div>
        `;

        return card;
    }

    /**
     * 밀도 높은 컴팩트 테이블 뷰 생성
     */
    createWordTableElement(words) {
        const wrap = document.createElement('div');
        wrap.className = 'overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs';

        wrap.innerHTML = `
            <table class="w-full text-left text-sm text-slate-700 border-collapse">
                <thead class="bg-slate-100 text-xs font-serif font-bold text-slate-700 uppercase border-b border-slate-200">
                    <tr>
                        <th class="py-3 px-3 text-center w-12">⭐</th>
                        <th class="py-3 px-4 w-1/4">영단어</th>
                        <th class="py-3 px-3 w-16 text-center">품사</th>
                        <th class="py-3 px-4">의미</th>
                        <th class="py-3 px-3 w-28 text-center">출처 / 단계</th>
                        <th class="py-3 px-4 text-center w-36">망각 복구</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                    ${words.map(w => {
                        const isWeak = w.isWeak || (w.wrongCount > 0 && w.wrongCount >= w.correctCount);
                        return `
                            <tr class="hover:bg-slate-50/70 transition-colors">
                                <td class="py-2.5 px-3 text-center">
                                    <button class="text-slate-300 hover:text-amber-500 cursor-pointer" onclick="window.dictionaryEngine.toggleStar('${w.id}')">
                                        <i data-lucide="star" class="w-4 h-4 ${w.starred ? 'fill-amber-400 text-amber-500' : ''}"></i>
                                    </button>
                                </td>
                                <td class="py-2.5 px-4 font-serif font-black text-slate-900">
                                    <div class="flex items-center gap-1.5">
                                        <span>${w.word}</span>
                                        <button class="text-slate-400 hover:text-blue-900 p-0.5 cursor-pointer" onclick="window.tts && window.tts.speak('${w.word}')">
                                            <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                                        </button>
                                    </div>
                                </td>
                                <td class="py-2.5 px-3 text-center text-xs font-bold">${window.posHelper ? window.posHelper.renderPosBadge(w.partOfSpeech, w.word, w.meaning) : (w.partOfSpeech || 'n.')}</td>
                                <td class="py-2.5 px-4 text-xs font-medium text-slate-800">${w.meaning}</td>
                                <td class="py-2.5 px-3 text-center text-[11px] font-mono">
                                    <span class="px-2 py-0.5 rounded ${isWeak ? 'bg-amber-100 text-amber-900 font-bold' : 'bg-slate-100 text-slate-600'}">
                                        Stage ${w.stage || 1}
                                    </span>
                                </td>
                                <td class="py-2.5 px-4 text-center">
                                    <button class="px-2 py-1 rounded bg-amber-400/90 hover:bg-amber-400 text-slate-950 font-serif font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-1 mx-auto" onclick="window.dictionaryEngine.markAsForgotten('${w.id}')">
                                        <i data-lucide="zap" class="w-3 h-3 text-red-700"></i> 까먹음!
                                    </button>
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;

        return wrap;
    }

    /**
     * "단어 까먹었을 때" 원클릭 복습 등록 실행
     */
    markAsForgotten(wordId) {
        const word = window.storage.markWordAsForgotten(wordId);
        if (!word) return;

        this.renderWordList();

        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
        if (window.reviewManager && window.reviewManager.render) {
            window.reviewManager.render();
        }

        alert(`⚡ [${word.word}] 단어가 망각곡선 1단계(Stage 1)로 재배정되었습니다!\n오늘의 복습 큐와 스마트 퀴즈 1순위에 즉시 등록되었습니다.`);
    }

    /**
     * A-Z 알파벳 필터 선택
     */
    selectAlphabet(letter) {
        this.selectedAlphabet = letter;
        this.renderAlphabetBar();
        this.renderWordList();
    }

    /**
     * 출처 필터 변경
     */
    setSourceFilter(source) {
        this.sourceFilter = source;
        this.renderSourceFilters();
        this.renderWordList();
    }

    setNeungryulDayFilter(day) {
        this.neungryulDayFilter = day;
        this.renderWordList();
    }

    /**
     * 상태 필터 변경
     */
    setStatusFilter(status) {
        this.statusFilter = status;
        document.querySelectorAll('.dict-status-btn').forEach(btn => {
            btn.classList.toggle('active-subtab', btn.dataset.status === status);
        });
        this.renderWordList();
    }

    /**
     * 정렬 기준 변경
     */
    setSortBy(sort) {
        this.sortBy = sort;
        this.renderWordList();
    }

    /**
     * 뷰 모드 토글 (카드 vs 테이블)
     */
    setViewMode(mode) {
        this.viewMode = mode;
        const btnCard = document.getElementById('btn-dict-view-card');
        const btnTable = document.getElementById('btn-dict-view-table');
        if (btnCard && btnTable) {
            btnCard.classList.toggle('active-subtab', mode === 'card');
            btnTable.classList.toggle('active-subtab', mode === 'table');
        }
        this.renderWordList();
    }

    /**
     * 북마크 토글
     */
    toggleStar(wordId) {
        window.storage.toggleWordStar(wordId);
        this.renderWordList();
    }

    /**
     * 메모 작성 프롬프트
     */
    promptMemo(wordId) {
        const word = (window.storage.words || []).find(w => w.id === wordId);
        if (!word) return;

        const current = word.memo || '';
        const memo = prompt(`[${word.word}] 나만의 연상 암기 팁/메모를 입력하세요:`, current);
        if (memo !== null) {
            window.storage.setWordMemo(wordId, memo);
            this.renderWordList();
        }
    }
}

// 전역 인스턴스 생성
window.dictionaryEngine = new DictionaryEngine();