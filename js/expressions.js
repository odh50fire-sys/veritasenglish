/**
 * Veritas English - 원어민 실전 표현 & 뉘앙스 라이브러리 엔진
 * 1. 매일 자동으로 실전 콜로케이션 1개 + 핵심 구동사/슬랭 1개 추천 데일리 미션
 * 2. 원클릭 학습 완료 -> 스마트 퀴즈 & 에빙하우스 망각곡선 복습(SRS) 자동 등록
 * 3. 뉘앙스 비교, 실전 콜로케이션, 구동사/이디엄, 대화문 인터랙션 및 북마크 지원
 */

class NativeExpressionsEngine {
    constructor() {
        this.currentCategory = 'all'; // 'all', 'nuance', 'collocation', 'idiom', 'dialogue', 'bookmark'
        this.searchQuery = '';
        this.selectedDailyDate = null; // null이면 오늘 날짜 기준
    }

    getActiveDailyDate() {
        return this.selectedDailyDate || window.storage.getTodayDateString();
    }

    changeDailyDate(daysDelta) {
        const current = this.getActiveDailyDate();
        this.selectedDailyDate = window.storage.addDays(current, daysDelta);
        this.renderDailyMissions();
    }

    resetToToday() {
        this.selectedDailyDate = window.storage.getTodayDateString();
        this.renderDailyMissions();
    }

    loadNextDailySet() {
        const dateStr = this.getActiveDailyDate();
        window.storage.nextDailyExpressionSet(dateStr);
        this.renderDailyMissions();
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }

    render() {
        this.renderDailyMissions();
        this.renderExpressionList();
    }

    /**
     * 오늘의 원어민 데일리 미션 2종 렌더링
     * - 하단 기본 목록(NATIVE_EXPRESSIONS)을 제외한 전용 풀(DAILY_EXCLUSIVE_POOL)에서 매일 새로운 2개 추천
     * - 날짜별 이동 및 '새로운 표현 2개 더 뽑기' 완벽 지원
     */
    renderDailyMissions() {
        const container = document.getElementById('daily-missions-section');
        if (!container) return;

        const todayStr = window.storage.getTodayDateString();
        const activeDateStr = this.getActiveDailyDate();
        const isToday = (activeDateStr === todayStr);

        const offset = window.storage.getDailySetOffset(activeDateStr);
        const pastCompletedIds = window.storage.getPastCompletedDailyIds(activeDateStr);
        const userLvl = window.storage ? window.storage.getAcademicLevel() : 3;
        const daily = getDailyExpressions(activeDateStr, offset, pastCompletedIds, userLvl);

        const colloc = daily.collocation;
        const idiom = daily.idiom;

        const isCollocDone = window.storage.isDailyMissionCompleted(activeDateStr, colloc.id);
        const isIdiomDone = window.storage.isDailyMissionCompleted(activeDateStr, idiom.id);
        const totalMasteredDaily = window.storage.getTotalCompletedDailyCount();

        container.innerHTML = `
            <div class="rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-7 border border-slate-800 shadow-md">
                <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
                    <div>
                        <div class="flex flex-wrap items-center gap-2 mb-2">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-mono text-xs font-bold border border-amber-400/30">
                                <i data-lucide="calendar-days" class="w-3.5 h-3.5"></i>
                                <span>${activeDateStr} ${isToday ? '(오늘)' : ''} 데일리 전용 신규 추천</span>
                            </span>
                            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-200 font-mono text-[11px]">
                                하단 기본 목록 제외 • 매일 새로운 표현 배정 (Set #${offset + 1})
                            </span>
                        </div>
                        <h2 class="font-serif font-black text-xl sm:text-2xl text-white">
                            하루 2개로 완성하는 원어민 실전 표현
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-300 mt-1">
                            아래 아카이브에 없는 <strong>새로운 전용 표현이 매일 자동 업데이트</strong>됩니다. 학습 완료를 누르면 <strong>스마트 퀴즈</strong>와 <strong>망각곡선 복습(SRS)</strong>에 즉시 등록됩니다.
                        </p>
                    </div>

                    <!-- 날짜 탐색 & 새로운 표현 추천 컨트롤 -->
                    <div class="flex flex-wrap items-center gap-2 self-start lg:self-auto shrink-0">
                        <div class="inline-flex items-center bg-white/10 rounded-xl p-1 border border-white/10">
                            <button id="btn-daily-prev-day" class="px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-slate-200 text-xs font-medium flex items-center gap-1 transition-colors" title="전날 표현 보기">
                                <i data-lucide="chevron-left" class="w-3.5 h-3.5"></i> 어제
                            </button>
                            <button id="btn-daily-today" class="px-2.5 py-1.5 rounded-lg ${isToday ? 'bg-amber-400 text-slate-950 font-bold' : 'hover:bg-white/10 text-slate-200'} text-xs transition-colors">
                                오늘
                            </button>
                            <button id="btn-daily-next-day" class="px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-slate-200 text-xs font-medium flex items-center gap-1 transition-colors" title="다음날 표현 미리보기">
                                내일 <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>

                        <button id="btn-daily-next-set" class="px-3.5 py-2 rounded-xl bg-indigo-500/30 hover:bg-indigo-500/50 border border-indigo-400/40 text-indigo-100 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer" title="다른 새로운 표현 2개 즉시 뽑기">
                            <i data-lucide="refresh-cw" class="w-3.5 h-3.5 text-amber-300"></i>
                            <span>새로운 2개 더 추천받기</span>
                        </button>

                        <span class="text-xs font-mono px-3 py-2 rounded-xl ${
                            (isCollocDone && isIdiomDone) ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-white/10 text-slate-300'
                        } font-bold flex items-center gap-1.5">
                            <i data-lucide="${(isCollocDone && isIdiomDone) ? 'check-circle-2' : 'target'}" class="w-4 h-4"></i>
                            현재 세트: ${(isCollocDone ? 1 : 0) + (isIdiomDone ? 1 : 0)}/2 (누적 ${totalMasteredDaily}개 마스터)
                        </span>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <!-- 1. 오늘의 실전 콜로케이션 -->
                    <div class="p-5 rounded-xl bg-white/10 backdrop-blur-xs border ${
                        isCollocDone ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-white/10'
                    } flex flex-col justify-between space-y-4">
                        <div>
                            <div class="flex items-center justify-between">
                                <span class="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                                    Daily Collocation (실전 연어)
                                </span>
                                <button class="daily-audio-btn text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors" data-audio="${colloc.audioText || colloc.title}" title="원어민 발음 듣기">
                                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                                </button>
                            </div>
                            <h3 class="font-serif font-black text-xl text-white mt-2">${colloc.title}</h3>
                            <div class="text-amber-300 font-semibold text-xs mt-0.5">${colloc.summary}</div>
                            <p class="text-xs text-slate-300 mt-2 leading-relaxed">${colloc.explanation || ''}</p>
                            
                            <div class="p-3 bg-black/25 rounded-lg mt-3 text-xs leading-relaxed space-y-1 border border-white/5">
                                <div class="text-indigo-200 font-mono text-[11px] font-semibold">📌 패턴: ${colloc.collocationPair || colloc.title}</div>
                                <div class="text-slate-100 font-serif italic mt-1">"${this.renderInteractiveSentenceTokens(colloc.exampleEn, colloc.exampleKo)}"</div>
                                <div class="text-slate-400 text-[11px]">${colloc.exampleKo}</div>
                            </div>

                            ${colloc.nativeTip ? `
                                <div class="text-[11px] text-amber-200/90 bg-amber-500/10 border border-amber-400/20 rounded-lg px-3 py-2 mt-2.5">
                                    ${colloc.nativeTip}
                                </div>
                            ` : ''}
                        </div>

                        <div class="pt-2">
                            ${isCollocDone ? `
                                <div class="w-full py-2.5 px-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5">
                                    <i data-lucide="check-circle" class="w-4 h-4"></i>
                                    <span>학습 완료 (스마트 퀴즈·망각곡선 복습 등록됨)</span>
                                </div>
                            ` : `
                                <button class="btn-complete-daily w-full py-2.5 px-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-serif font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-98 cursor-pointer" data-id="${colloc.id}" data-type="colloc">
                                    <i data-lucide="sparkles" class="w-4 h-4"></i>
                                    <span>학습 완료 & 퀴즈·복습에 등록하기</span>
                                </button>
                            `}
                        </div>
                    </div>

                    <!-- 2. 오늘의 핵심 구동사 & 슬랭 -->
                    <div class="p-5 rounded-xl bg-white/10 backdrop-blur-xs border ${
                        isIdiomDone ? 'border-emerald-500/50 bg-emerald-950/20' : 'border-white/10'
                    } flex flex-col justify-between space-y-4">
                        <div>
                            <div class="flex items-center justify-between">
                                <span class="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-emerald-500/30 text-emerald-200 border border-emerald-400/30">
                                    Daily Phrasal Verb & Slang (구동사·슬랭)
                                </span>
                                <button class="daily-audio-btn text-slate-300 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors" data-audio="${idiom.audioText || idiom.title}" title="원어민 발음 듣기">
                                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                                </button>
                            </div>
                            <h3 class="font-serif font-black text-xl text-white mt-2">${idiom.title}</h3>
                            <div class="text-emerald-300 font-semibold text-xs mt-0.5">${idiom.summary}</div>
                            <p class="text-xs text-slate-300 mt-2 leading-relaxed">${idiom.explanation || ''}</p>
                            
                            <div class="p-3 bg-black/25 rounded-lg mt-3 text-xs leading-relaxed space-y-1 border border-white/5">
                                <div class="text-emerald-200 font-mono text-[11px] font-semibold">📌 패턴: ${idiom.collocationPair || idiom.title}</div>
                                <div class="text-slate-100 font-serif italic mt-1">"${this.renderInteractiveSentenceTokens(idiom.exampleEn, idiom.exampleKo)}"</div>
                                <div class="text-slate-400 text-[11px]">${idiom.exampleKo}</div>
                            </div>

                            ${idiom.nativeTip ? `
                                <div class="text-[11px] text-emerald-200/90 bg-emerald-500/10 border border-emerald-400/20 rounded-lg px-3 py-2 mt-2.5">
                                    ${idiom.nativeTip}
                                </div>
                            ` : ''}
                        </div>

                        <div class="pt-2">
                            ${isIdiomDone ? `
                                <div class="w-full py-2.5 px-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5">
                                    <i data-lucide="check-circle" class="w-4 h-4"></i>
                                    <span>학습 완료 (스마트 퀴즈·망각곡선 복습 등록됨)</span>
                                </div>
                            ` : `
                                <button class="btn-complete-daily w-full py-2.5 px-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-serif font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-98 cursor-pointer" data-id="${idiom.id}" data-type="idiom">
                                    <i data-lucide="sparkles" class="w-4 h-4"></i>
                                    <span>학습 완료 & 퀴즈·복습에 등록하기</span>
                                </button>
                            `}
                        </div>
                    </div>
                </div>
            </div>
        `;

        // 날짜 변경 및 다음 추천 세트 버튼 바인딩
        const prevBtn = container.querySelector('#btn-daily-prev-day');
        const todayBtn = container.querySelector('#btn-daily-today');
        const nextBtn = container.querySelector('#btn-daily-next-day');
        const nextSetBtn = container.querySelector('#btn-daily-next-set');

        if (prevBtn) prevBtn.onclick = () => this.changeDailyDate(-1);
        if (todayBtn) todayBtn.onclick = () => this.resetToToday();
        if (nextBtn) nextBtn.onclick = () => this.changeDailyDate(1);
        if (nextSetBtn) nextSetBtn.onclick = () => this.loadNextDailySet();

        // 데일리 오디오 재생 바인딩
        container.querySelectorAll('.daily-audio-btn').forEach(btn => {
            btn.onclick = () => window.tts && window.tts.speak(btn.dataset.audio);
        });

        // 학습 완료 버튼 바인딩 (전용 데일리 풀 + 기본 풀 모두 검색)
        container.querySelectorAll('.btn-complete-daily').forEach(btn => {
            btn.onclick = () => {
                const id = btn.dataset.id;
                const item = (typeof findNativeExpressionById === 'function')
                    ? findNativeExpressionById(id)
                    : NATIVE_EXPRESSIONS.find(e => e.id === id);
                if (item) {
                    this.completeDailyMission(item, activeDateStr);
                }
            };
        });

        if (window.lucide) window.lucide.createIcons();
    }

    completeDailyMission(item, targetDateStr = null) {
        window.storage.registerDailyNativeExpression(item, targetDateStr);
        this.render();

        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 90,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        alert(`🎉 [${item.title}] 학습이 완료되었습니다!\n\n오늘의 단어로 등록되어 '스마트 퀴즈'와 '망각곡선 복습 큐(SRS 1단계)'에 자동 배정되었습니다.`);
    }

    renderExpressionList() {
        const container = document.getElementById('native-expressions-list');
        if (!container) return;

        let items = typeof NATIVE_EXPRESSIONS !== 'undefined' ? NATIVE_EXPRESSIONS : [];

        // 카테고리 필터
        if (this.currentCategory === 'bookmark') {
            const bookmarks = window.storage.bookmarks || [];
            items = items.filter(it => bookmarks.includes(it.id));
        } else if (this.currentCategory !== 'all') {
            items = items.filter(it => it.category === this.currentCategory);
        }

        // 검색어 필터
        if (this.searchQuery.trim()) {
            const q = this.searchQuery.toLowerCase();
            items = items.filter(it => {
                return (it.title && it.title.toLowerCase().includes(q)) ||
                       (it.summary && it.summary.toLowerCase().includes(q)) ||
                       (it.nativeTip && it.nativeTip.toLowerCase().includes(q));
            });
        }

        container.innerHTML = '';

        if (items.length === 0) {
            container.innerHTML = `
                <div class="col-span-full py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
                    <i data-lucide="compass" class="w-10 h-10 mx-auto text-slate-400 mb-2"></i>
                    <p class="font-serif font-bold text-slate-700 text-lg">해당 조건에 맞는 원어민 표현이 없습니다.</p>
                    <p class="text-sm text-slate-500 mt-1">다른 검색어나 카테고리를 선택해보세요.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-blue-900 transition-all p-6 flex flex-col justify-between';

            const isBookmarked = (window.storage.bookmarks || []).includes(item.id);

            let contentHtml = '';

            // 1. 뉘앙스 비교 카드
            if (item.category === 'nuance') {
                contentHtml = `
                    <div class="space-y-3 my-4">
                        ${item.comparison.map(c => `
                            <div class="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                                <div class="flex items-center justify-between">
                                    <span class="font-serif font-bold text-blue-950 text-base">${c.term}</span>
                                    <span class="text-xs text-slate-500 font-mono">${c.tip}</span>
                                </div>
                                <div class="text-sm text-slate-700 font-medium mt-1">${c.meaning}</div>
                                <div class="text-xs text-slate-500 italic mt-1 font-serif">"${this.renderInteractiveSentenceTokens(c.example, c.meaning)}"</div>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
            // 2. 실전 콜로케이션 / 이디엄
            else if (item.category === 'collocation' || item.category === 'idiom') {
                contentHtml = `
                    <div class="my-4 space-y-3">
                        <div class="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                            <span class="text-xs font-mono font-bold text-blue-900 uppercase">Collocation Pattern</span>
                            <div class="font-serif font-bold text-slate-900 mt-1">${item.collocationPair || item.title}</div>
                            <div class="text-sm text-slate-700 mt-1">${item.explanation}</div>
                        </div>
                        <div class="p-3 bg-slate-50 rounded-xl">
                            <div class="text-sm font-serif text-slate-900 font-medium">"${this.renderInteractiveSentenceTokens(item.exampleEn, item.exampleKo)}"</div>
                            <div class="text-xs text-slate-500 mt-1">${item.exampleKo}</div>
                        </div>
                    </div>
                `;
            }
            // 3. 다이얼로그
            else if (item.category === 'dialogue') {
                contentHtml = `
                    <div class="my-4 space-y-2 bg-slate-50 p-4 rounded-xl">
                        ${item.speakers.map(s => `
                            <div class="text-xs leading-relaxed">
                                <strong class="font-bold text-slate-900 font-serif">${s.speaker}:</strong> 
                                <span class="text-slate-700">"${this.renderInteractiveSentenceTokens(s.text, '')}"</span>
                            </div>
                        `).join('')}
                    </div>
                `;
            }

            card.innerHTML = `
                <div>
                    <div class="flex items-start justify-between">
                        <div>
                            <span class="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase tracking-wider ${
                                item.category === 'nuance' ? 'bg-amber-100 text-amber-900' :
                                item.category === 'collocation' ? 'bg-indigo-100 text-indigo-900' :
                                item.category === 'idiom' ? 'bg-emerald-100 text-emerald-900' :
                                'bg-purple-100 text-purple-900'
                            }">
                                ${item.category}
                            </span>
                            <h3 class="font-serif font-bold text-xl text-slate-900 mt-1.5">${item.title}</h3>
                            <p class="text-xs text-slate-500 mt-0.5">${item.summary}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <button class="native-audio-btn p-2 rounded-lg text-slate-400 hover:text-blue-900 hover:bg-slate-100 transition-colors" data-audio="${item.audioText || item.title}" title="발음 듣기">
                                <i data-lucide="volume-2" class="w-4 h-4"></i>
                            </button>
                            <button class="native-bookmark-btn p-2 rounded-lg transition-colors ${isBookmarked ? 'text-amber-500' : 'text-slate-300 hover:text-amber-500'}" data-id="${item.id}" title="북마크">
                                <i data-lucide="bookmark" class="w-4 h-4 ${isBookmarked ? 'fill-current' : ''}"></i>
                            </button>
                        </div>
                    </div>

                    ${contentHtml}

                    ${item.nativeTip ? `
                        <div class="text-xs text-amber-900 bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/50 mt-2">
                            ${item.nativeTip}
                        </div>
                    ` : ''}
                </div>

                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button class="add-to-vocab-btn text-xs font-semibold text-blue-900 hover:underline flex items-center gap-1" data-id="${item.id}">
                        <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i> 퀴즈/복습 큐에 등록하기
                    </button>
                    <span class="text-[10px] text-slate-400 font-mono">Academic Expression Lab</span>
                </div>
            `;

            container.appendChild(card);
        });

        // 이벤트 바인딩
        container.querySelectorAll('.native-audio-btn').forEach(btn => {
            btn.onclick = () => {
                if (window.tts) window.tts.speak(btn.dataset.audio);
            };
        });

        container.querySelectorAll('.native-bookmark-btn').forEach(btn => {
            btn.onclick = () => {
                window.storage.toggleBookmark(btn.dataset.id);
                this.render();
            };
        });

        container.querySelectorAll('.add-to-vocab-btn').forEach(btn => {
            btn.onclick = () => {
                const id = btn.dataset.id;
                const item = NATIVE_EXPRESSIONS.find(e => e.id === id);
                if (item) {
                    this.completeDailyMission(item);
                }
            };
        });

        if (window.lucide) window.lucide.createIcons();
    }

    setCategory(cat) {
        this.currentCategory = cat;
        document.querySelectorAll('.expr-cat-btn').forEach(btn => {
            btn.classList.toggle('active-cat', btn.dataset.category === cat);
        });
        this.render();
    }

    setSearch(query) {
        this.searchQuery = query;
        this.render();
    }

    /**
     * 원어민 회화 예문의 영단어들을 클릭 가능한 인터랙티브 토큰으로 분할 렌더링
     */
    renderInteractiveSentenceTokens(sentenceText, sentenceKo = '') {
        if (!sentenceText) return '';
        const tokens = sentenceText.split(/(\s+|[.,!?;:"'()\[\]]+)/);
        const encodedKo = encodeURIComponent(sentenceKo || '');
        const encodedEn = encodeURIComponent(sentenceText || '');
        return tokens.map(token => {
            const clean = token.replace(/[^a-zA-Z\-]/g, '').trim();
            if (clean.length > 0 && /^[a-zA-Z]/.test(clean)) {
                return `<span class="reading-word-token hover:bg-amber-200 hover:text-blue-950 rounded px-0.5 cursor-pointer transition-colors underline decoration-dotted decoration-slate-400 hover:decoration-blue-900" onclick="window.nativeExpressionsEngine.inspectExampleWord('${clean.replace(/'/g, "\\'")}', '${encodedEn}', '${encodedKo}')" title="단어 뜻 보기 및 사전 추가">${token}</span>`;
            }
            return token;
        }).join('');
    }

    /**
     * 예문 단어 클릭 시 내신 독해의 Word Inspector 팝오버를 연결 오픈
     */
    inspectExampleWord(cleanWord, encodedEn, encodedKo) {
        const sentenceEn = decodeURIComponent(encodedEn || '');
        const sentenceKo = decodeURIComponent(encodedKo || '');
        if (window.readingEngine && window.readingEngine.openWordInspector) {
            window.readingEngine.openWordInspector(cleanWord, sentenceEn, sentenceKo);
        }
    }
}

// 전역 인스턴스
window.nativeExpressionsEngine = new NativeExpressionsEngine();
window.expressionsEngine = window.nativeExpressionsEngine;
