/**
 * Veritas English - 원어민 실전 표현 & 뉘앙스 라이브러리 엔진 (v3.0)
 * 8대 전문 시리즈 카탈로그, 80개 단원 그리드, 4단계 몰입형 스튜디오 파이프라인
 */

class NativeExpressionsEngine {
    constructor() {
        this.currentCategory = 'all'; // 'all', 'nuance', 'collocation', 'idiom', 'dialogue', 'bookmark', or series
        this.searchQuery = '';
        this.activeSeriesId = 'series-daily'; // 기본 선택 시리즈
        this.selectedDailyDate = null;
        this.selectedDailySeriesFilter = 'all'; // 데일리 추천용 시리즈 필터

        // 4단계 스튜디오 상태
        this.currentUnit = null;
        this.currentStudioStep = 1; // 1, 2, 3, 4
        this.studioState = {
            step3Chips: {},       // { exprId: selectedChunk }
            step4QuizAnswers: {}, // { exprId: selectedOptionIndex }
            step4WritingShow: {}  // { exprId: boolean }
        };

        // 즐겨찾기 북마크 초기화
        this.bookmarks = [];
        try {
            const raw = localStorage.getItem('veritas_native_bookmarks');
            this.bookmarks = raw ? JSON.parse(raw) : [];
        } catch (e) {
            this.bookmarks = [];
        }
    }

    saveBookmarks() {
        try {
            localStorage.setItem('veritas_native_bookmarks', JSON.stringify(this.bookmarks));
        } catch (e) {
            console.error('Failed to save native bookmarks:', e);
        }
    }

    isBookmarked(id) {
        return this.bookmarks.includes(id);
    }

    toggleBookmark(id, event) {
        if (event) event.stopPropagation();
        const idx = this.bookmarks.indexOf(id);
        if (idx !== -1) {
            this.bookmarks.splice(idx, 1);
        } else {
            this.bookmarks.push(id);
        }
        this.saveBookmarks();
        this.renderExpressionList();
        if (this.currentCategory === 'bookmark') {
            this.renderExpressionList();
        }
    }

    getActiveDailyDate() {
        return this.selectedDailyDate || (window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10));
    }

    changeDailyDate(daysDelta) {
        const current = this.getActiveDailyDate();
        this.selectedDailyDate = window.storage.addDays(current, daysDelta);
        this.renderDailyMissions();
    }

    resetToToday() {
        this.selectedDailyDate = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
        this.renderDailyMissions();
    }

    loadNextDailySet() {
        const dateStr = this.getActiveDailyDate();
        if (window.storage && window.storage.nextDailyExpressionSet) {
            window.storage.nextDailyExpressionSet(dateStr);
        }
        this.renderDailyMissions();
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }

    setDailySeriesFilter(seriesId) {
        this.selectedDailySeriesFilter = seriesId || 'all';
        this.renderDailyMissions();
    }

    selectSeries(seriesId) {
        if (!seriesId) return;
        this.activeSeriesId = seriesId;
        this.renderSeriesDeck();
        this.renderUnitsGrid();
        this.renderExpressionList();
    }

    setCategory(category) {
        this.currentCategory = category;
        document.querySelectorAll('.expr-cat-btn').forEach(btn => {
            if (btn.getAttribute('data-category') === category) {
                btn.classList.add('active-cat');
                btn.classList.remove('text-slate-700', 'bg-transparent');
            } else {
                btn.classList.remove('active-cat');
                btn.classList.add('text-slate-700');
            }
        });
        this.renderExpressionList();
    }

    setSearch(query) {
        this.searchQuery = (query || '').trim().toLowerCase();
        this.renderExpressionList();
    }

    render() {
        this.renderDailyMissions();
        this.renderSeriesDeck();
        this.renderUnitsGrid();
        this.renderExpressionList();
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    /**
     * 1. 8대 전문 시리즈 카탈로그 덱 렌더링
     */
    renderSeriesDeck() {
        const container = document.getElementById('native-series-deck');
        if (!container) return;

        const catalog = window.NATIVE_SERIES_CATALOG || [];
        const units = window.NATIVE_UNITS_DATA || [];
        let totalCompletedAll = 0;

        const cardsHtml = catalog.map(series => {
            const seriesUnits = units.filter(u => u.seriesId === series.id);
            const totalUnits = seriesUnits.length || series.totalUnits || 10;
            const completedCount = window.storage && window.storage.getSeriesCompletedUnitsCount
                ? window.storage.getSeriesCompletedUnitsCount(series.id)
                : 0;
            totalCompletedAll += completedCount;
            const pct = Math.round((completedCount / totalUnits) * 100);
            const isActive = (series.id === this.activeSeriesId);

            return `
                <div onclick="window.nativeExpressionsEngine.selectSeries('${series.id}')"
                     class="group relative p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                         isActive
                             ? 'bg-blue-50/70 border-blue-900 ring-2 ring-blue-900/20 shadow-md'
                             : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-2xs'
                     }">
                    <div class="flex items-start justify-between gap-1.5 mb-2">
                        <span class="text-2xl">${series.icon || '📚'}</span>
                        <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                            isActive ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-700'
                        }">
                            ${series.badge || '시리즈'}
                        </span>
                    </div>

                    <div class="space-y-1">
                        <div class="text-[11px] font-mono font-bold text-slate-400">Series ${series.seriesNumber}</div>
                        <h4 class="font-serif font-black text-xs sm:text-sm text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-1">
                            ${series.titleKo}
                        </h4>
                        <p class="text-[10px] text-slate-500 line-clamp-1">
                            ${series.titleEn}
                        </p>
                    </div>

                    <div class="mt-3 pt-2 border-t border-slate-100 flex flex-col gap-1.5">
                        <div class="flex items-center justify-between text-[10px] font-mono">
                            <span class="text-slate-400">${series.levelRange}</span>
                            <span class="font-bold ${pct === 100 ? 'text-emerald-700 font-black' : 'text-slate-600'}">
                                ${completedCount}/${totalUnits} 완독 (${pct}%)
                            </span>
                        </div>
                        <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div class="h-full ${pct === 100 ? 'bg-emerald-500' : 'bg-blue-900'} transition-all duration-300" style="width: ${pct}%"></div>
                        </div>
                        <div class="pt-1.5 flex items-center justify-between">
                            <span class="text-[10px] font-mono text-slate-400">총 ${totalUnits}개 단원</span>
                            <button type="button" onclick="event.stopPropagation(); window.nativeExpressionsEngine && window.nativeExpressionsEngine.openSeriesPlannerModal('${series.id}')" class="px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 text-[11px] font-bold font-serif flex items-center gap-1 transition-colors cursor-pointer">
                                <span>📅 플래너 배정</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = cardsHtml;

        // 전체 진도율 업데이트
        const progressEl = document.getElementById('series-deck-overall-progress');
        if (progressEl) {
            const totalUnitsCount = units.length || 80;
            const overallPct = Math.round((totalCompletedAll / totalUnitsCount) * 100);
            progressEl.innerHTML = `총 80개 단원 중 <strong class="text-blue-900">${totalCompletedAll}개</strong> 완독 (${overallPct}%)`;
        }
    }

    /**
     * 2. 선택된 시리즈의 10개 단원 카드 그리드 렌더링
     */
    renderUnitsGrid() {
        const container = document.getElementById('native-series-units-grid');
        if (!container) return;

        const catalog = window.NATIVE_SERIES_CATALOG || [];
        const activeSeries = catalog.find(s => s.id === this.activeSeriesId) || catalog[0];
        const allUnits = window.NATIVE_UNITS_DATA || [];
        const seriesUnits = allUnits.filter(u => u.seriesId === (activeSeries ? activeSeries.id : 'series-daily'));

        // 상단 시리즈 헤더 갱신
        const badgeEl = document.getElementById('active-series-badge');
        const titleEl = document.getElementById('active-series-title');
        const descEl = document.getElementById('active-series-desc');
        const progressBadgeEl = document.getElementById('active-series-progress-badge');

        if (activeSeries && badgeEl) {
            badgeEl.innerText = `Series ${activeSeries.seriesNumber} • ${activeSeries.badge}`;
            titleEl.innerText = `${activeSeries.icon} ${activeSeries.titleKo} (${activeSeries.titleEn})`;
            descEl.innerText = activeSeries.desc;

            const completed = window.storage && window.storage.getSeriesCompletedUnitsCount
                ? window.storage.getSeriesCompletedUnitsCount(activeSeries.id)
                : 0;
            progressBadgeEl.innerHTML = `<span class="text-slate-500">진도:</span> <strong class="text-blue-900">${completed}</strong> / ${seriesUnits.length} 단원 완독`;
        }

        if (seriesUnits.length === 0) {
            container.innerHTML = `
                <div class="col-span-full py-8 text-center text-slate-400 text-xs">
                    이 시리즈에 등록된 단원이 없습니다.
                </div>
            `;
            return;
        }

        const cardsHtml = seriesUnits.map(unit => {
            const isDone = window.storage && window.storage.isNativeUnitCompleted
                ? window.storage.isNativeUnitCompleted(unit.unitId)
                : false;

            const exprPills = (unit.expressions || []).map(e => `
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-mono hover:border-blue-900 transition-colors">
                    <span class="text-amber-500 text-[10px]">✨</span> ${e.title}
                </span>
            `).join('');

            return `
                <div class="group relative bg-white p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                    isDone
                        ? 'border-emerald-200 bg-emerald-50/20 shadow-xs'
                        : 'border-slate-200 hover:border-blue-900 hover:shadow-md'
                }">
                    <div>
                        <div class="flex items-center justify-between gap-2 mb-2">
                            <div class="flex items-center gap-2">
                                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-black ${
                                    isDone ? 'bg-emerald-100 text-emerald-900' : 'bg-slate-100 text-slate-800'
                                }">
                                    Unit ${unit.unitNumber}
                                </span>
                                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-50 text-amber-900 border border-amber-200">
                                    Lv.${unit.recommendedLevel || 3}
                                </span>
                            </div>
                            ${
                                isDone
                                    ? `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-serif font-bold">
                                           <span>✅</span> 완독 마스터
                                       </span>`
                                    : `<span class="text-[11px] font-mono text-slate-400">4단계 학습</span>`
                            }
                        </div>

                        <h4 class="font-serif font-black text-base text-slate-900 group-hover:text-blue-900 transition-colors">
                            ${unit.titleKo}
                        </h4>
                        <div class="text-xs text-slate-500 font-mono mt-0.5">
                            ${unit.titleEn}
                        </div>

                        <p class="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                            ${unit.summary}
                        </p>

                        <!-- 핵심 4개 표현 태그 덱 -->
                        <div class="mt-3 pt-3 border-t border-slate-100">
                            <div class="text-[10px] font-mono font-bold text-slate-400 mb-1.5">단원 핵심 표현 4선</div>
                            <div class="flex flex-wrap gap-1.5">
                                ${exprPills}
                            </div>
                        </div>
                    </div>

                    <!-- 액션 버튼 바 -->
                    <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <span class="text-[11px] text-slate-400">
                            ${isDone ? '에빙하우스 SRS 복습 큐 등록됨' : '4단계 스튜디오 파이프라인'}
                        </span>
                        <button type="button"
                                onclick="window.nativeExpressionsEngine.openUnitStudio('${unit.unitId}')"
                                class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-serif font-bold transition-all cursor-pointer shadow-xs ${
                                    isDone
                                        ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300'
                                        : 'bg-blue-900 hover:bg-blue-800 text-white'
                                }">
                            <span>${isDone ? '🔄 복습 스튜디오' : '🚀 4단계 스튜디오'}</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = cardsHtml;
        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 3. 데일리 미션 렌더링 (320개 마스터 풀 + 시리즈 필터 지원)
     */
    renderDailyMissions() {
        const container = document.getElementById('daily-missions-section');
        if (!container) return;

        const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
        const activeDateStr = this.getActiveDailyDate();
        const isToday = (activeDateStr === todayStr);

        const offset = window.storage ? window.storage.getDailySetOffset(activeDateStr) : 0;
        const pastCompletedIds = window.storage ? window.storage.getPastCompletedDailyIds(activeDateStr) : [];
        const userLvl = window.storage ? window.storage.getAcademicLevel() : 3;

        // 320개 마스터 풀에서 2개 추출
        const daily = this.getMasterDailyExpressions(activeDateStr, offset, pastCompletedIds, userLvl, this.selectedDailySeriesFilter);
        const expr1 = daily.expr1;
        const expr2 = daily.expr2;

        const isExpr1Done = window.storage && window.storage.isDailyMissionCompleted(activeDateStr, expr1.id);
        const isExpr2Done = window.storage && window.storage.isDailyMissionCompleted(activeDateStr, expr2.id);
        const totalMasteredDaily = window.storage ? window.storage.getTotalCompletedDailyCount() : 0;

        const seriesCatalog = window.NATIVE_SERIES_CATALOG || [];
        const seriesFilterOptions = `
            <option value="all" ${this.selectedDailySeriesFilter === 'all' ? 'selected' : ''}>🌐 전체 시리즈 통합 추천</option>
            ${seriesCatalog.map(s => `
                <option value="${s.id}" ${this.selectedDailySeriesFilter === s.id ? 'selected' : ''}>${s.icon} ${s.titleKo}</option>
            `).join('')}
        `;

        container.innerHTML = `
            <div class="rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-7 border border-slate-800 shadow-md">
                <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
                    <div>
                        <div class="flex flex-wrap items-center gap-2 mb-2">
                            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-mono text-xs font-bold border border-amber-400/30">
                                <i data-lucide="calendar-days" class="w-3.5 h-3.5"></i>
                                <span>${activeDateStr} ${isToday ? '(오늘)' : ''} 320선 데일리 추천</span>
                            </span>
                            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-200 font-mono text-[11px]">
                                총 160일 무중복 순환 (Set #${offset + 1})
                            </span>
                        </div>
                        <h2 class="font-serif font-black text-xl sm:text-2xl text-white">
                            하루 2개로 완성하는 원어민 실전 표현 & 뉘앙스
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-300 mt-1">
                            80개 단원 320개 표현 중 매일 새로운 2개를 추천합니다. <strong>[스튜디오 바로가기]</strong>를 누르면 해당 단원의 4단계 파이프라인으로 직행합니다.
                        </p>
                    </div>

                    <!-- 컨트롤 바: 시리즈 필터 & 날짜 이동 -->
                    <div class="flex flex-wrap items-center gap-2 self-start lg:self-auto shrink-0">
                        <select onchange="window.nativeExpressionsEngine.setDailySeriesFilter(this.value)"
                                class="bg-white/10 text-white text-xs px-3 py-1.5 rounded-xl border border-white/20 outline-none focus:border-amber-400 cursor-pointer">
                            ${seriesFilterOptions}
                        </select>
                        <div class="inline-flex items-center bg-white/10 rounded-xl p-1 border border-white/10">
                            <button onclick="window.nativeExpressionsEngine.changeDailyDate(-1)" class="px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-slate-200 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer" title="전날 표현">
                                <i data-lucide="chevron-left" class="w-3.5 h-3.5"></i> 어제
                            </button>
                            <button onclick="window.nativeExpressionsEngine.resetToToday()" class="px-2.5 py-1.5 rounded-lg ${isToday ? 'bg-amber-400 text-slate-950 font-bold' : 'hover:bg-white/10 text-slate-200'} text-xs transition-colors cursor-pointer">
                                오늘
                            </button>
                            <button onclick="window.nativeExpressionsEngine.changeDailyDate(1)" class="px-2.5 py-1.5 rounded-lg hover:bg-white/10 text-slate-200 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer" title="다음날 표현">
                                내일 <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                        <button onclick="window.nativeExpressionsEngine.loadNextDailySet()" class="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-serif font-bold text-xs flex items-center gap-1 transition-all shadow-sm cursor-pointer" title="현재 날짜에 다른 표현 2개 즉시 추천">
                            <i data-lucide="shuffle" class="w-3.5 h-3.5"></i> 2개 더 뽑기
                        </button>
                    </div>
                </div>

                <!-- 2개 데일리 카드 그리드 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                    ${this.renderDailyCard(expr1, isExpr1Done, activeDateStr, '첫 번째 추천')}
                    ${this.renderDailyCard(expr2, isExpr2Done, activeDateStr, '두 번째 추천')}
                </div>

                <!-- 하단 완료 카운터 안내 바 -->
                <div class="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2">
                    <div class="flex items-center gap-2">
                        <i data-lucide="trophy" class="w-4 h-4 text-amber-400"></i>
                        <span>지금까지 학습 완료한 누적 표현: <strong class="text-amber-300 font-mono text-sm">${totalMasteredDaily}개</strong></span>
                    </div>
                    <span class="text-slate-400">학습 완료 시 에빙하우스 망각곡선 1일·3일·7일·30일 주기 복습 큐에 자동 등록됩니다.</span>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }

    renderDailyCard(expr, isDone, activeDateStr, label) {
        if (!expr) return '';
        const isBm = this.isBookmarked(expr.id);
        const seriesTitle = expr.seriesTitleKo || '원어민 실전 표현';
        const unitTitle = expr.unitTitleKo || `Unit ${expr.unitNumber || 1}`;

        return `
            <div class="rounded-xl p-5 border transition-all ${
                isDone
                    ? 'bg-emerald-950/40 border-emerald-500/40'
                    : 'bg-white/5 border-white/10 hover:border-amber-400/50'
            } flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between gap-2 mb-2">
                        <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                            ${label} • ${expr.category || 'expression'}
                        </span>
                        <div class="flex items-center gap-2">
                            <span class="text-[11px] font-mono text-slate-400">Lv.${expr.level || 3}</span>
                            <button onclick="window.nativeExpressionsEngine.toggleBookmark('${expr.id}', event)"
                                    class="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer text-xs" title="북마크 토글">
                                ${isBm ? '⭐' : '☆'}
                            </button>
                        </div>
                    </div>

                    <div class="flex items-baseline gap-2 flex-wrap">
                        <h3 class="font-serif font-black text-xl text-white">
                            ${expr.title}
                        </h3>
                        <span class="text-xs text-amber-300 font-medium">
                            ${expr.koreanMeaning || expr.summary || ''}
                        </span>
                    </div>

                    <!-- 소속 단원 배너 -->
                    <div class="mt-2 text-[11px] font-mono text-slate-300 bg-black/30 px-2.5 py-1 rounded-md border border-white/5 flex items-center justify-between">
                        <span class="truncate">📂 ${seriesTitle} • ${unitTitle}</span>
                        ${expr.unitId ? `
                            <button onclick="window.nativeExpressionsEngine.openUnitStudio('${expr.unitId}')" class="text-amber-300 hover:underline shrink-0 ml-2 cursor-pointer font-bold">
                                단원 스튜디오 →
                            </button>
                        ` : ''}
                    </div>

                    <!-- 직역 vs 원어민 대비 박스 -->
                    ${expr.awkwardVsNative ? `
                        <div class="mt-3 p-3 rounded-lg bg-black/40 border border-white/5 space-y-1.5 text-xs">
                            <div class="flex items-start gap-1.5">
                                <span class="text-rose-400 font-bold shrink-0">❌ 직역:</span>
                                <span class="text-slate-300 italic">"${expr.awkwardVsNative.awkward}"</span>
                            </div>
                            <div class="flex items-start gap-1.5">
                                <span class="text-emerald-400 font-bold shrink-0">✨ 원어민:</span>
                                <span class="text-white font-medium">"${expr.awkwardVsNative.native}"</span>
                            </div>
                            <div class="text-[11px] text-amber-200/90 pt-1 border-t border-white/5">
                                💡 ${expr.awkwardVsNative.reason}
                            </div>
                        </div>
                    ` : ''}

                    <!-- 오디오 문장 & 쉐도잉 -->
                    ${expr.audioSentence ? `
                        <div class="mt-3 p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between gap-2">
                            <div class="text-xs text-slate-200 italic font-serif">
                                "${this.renderInteractiveSentenceTokens(expr.audioSentence, expr.koreanMeaning)}"
                            </div>
                            <button onclick="window.tts.speak('${expr.audioSentence.replace(/'/g, "\\'")}')"
                                    class="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 cursor-pointer" title="음성 재생">
                                🔊
                            </button>
                        </div>
                    ` : ''}
                </div>

                <!-- 하단 액션 버튼 -->
                <div class="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                    <span class="text-[11px] text-slate-400">
                        ${isDone ? '✅ 학습 완료됨 (복습 큐 등록)' : '미학습 상태'}
                    </span>
                    <div class="flex items-center gap-2">
                        ${expr.unitId ? `
                            <button onclick="window.nativeExpressionsEngine.openUnitStudio('${expr.unitId}')"
                                    class="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-serif font-bold transition-all cursor-pointer">
                                4단계 스튜디오
                            </button>
                        ` : ''}
                        <button onclick="window.nativeExpressionsEngine.completeDailyMission('${expr.id}', '${activeDateStr}')"
                                class="px-3.5 py-1.5 rounded-lg text-xs font-serif font-bold transition-all cursor-pointer shadow-xs ${
                                    isDone
                                        ? 'bg-emerald-500/30 text-emerald-300 border border-emerald-400/40 hover:bg-emerald-500/40'
                                        : 'bg-amber-400 hover:bg-amber-300 text-slate-950 font-black'
                                }">
                            ${isDone ? '완료 취소' : '학습 완료 & 복습 등록'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    completeDailyMission(exprId, dateStr) {
        const d = dateStr || this.getActiveDailyDate();
        const map = window.NATIVE_EXPRESSIONS_MAP || {};
        let expr = map[exprId];
        if (!expr && window.NATIVE_EXPRESSIONS_MASTER_BANK) {
            expr = window.NATIVE_EXPRESSIONS_MASTER_BANK.find(e => e.id === exprId);
        }
        if (!expr && typeof findNativeExpressionById === 'function') {
            expr = findNativeExpressionById(exprId);
        }

        const isDone = window.storage.isDailyMissionCompleted(d, exprId);

        if (isDone) {
            if (window.storage.dailyMissions[d]) {
                delete window.storage.dailyMissions[d][exprId];
                window.storage.saveDailyMissions();
            }
        } else {
            if (expr && window.storage.registerDailyNativeExpression) {
                window.storage.registerDailyNativeExpression(expr, d);
            }
        }

        this.renderDailyMissions();
        this.renderUnitsGrid();
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }

    /**
     * 320개 마스터 풀에서 2개 추출하는 고도화 알고리즘
     */
    getMasterDailyExpressions(dateStr, extraOffset = 0, completedIds = [], userLevel = null, seriesFilter = 'all') {
        const bank = window.NATIVE_EXPRESSIONS_MASTER_BANK || [];
        if (bank.length === 0) {
            return { expr1: null, expr2: null };
        }

        let pool = bank;
        if (seriesFilter && seriesFilter !== 'all') {
            pool = bank.filter(e => e.seriesId === seriesFilter);
            if (pool.length === 0) pool = bank;
        }

        // YYYY-MM-DD를 고유 일련번호로 변환
        const parts = (dateStr || new Date().toISOString().slice(0, 10)).split('-').map(Number);
        const utcDays = Math.floor(Date.UTC(parts[0], (parts[1] || 1) - 1, parts[2] || 1) / 86400000);
        const baseIndex = Math.abs(utcDays * 2 + extraOffset * 2);

        // 완료되지 않은 후보 우선
        let uncompleted = pool.filter(e => !completedIds.includes(e.id));
        if (uncompleted.length < 2) uncompleted = pool;

        const idx1 = baseIndex % uncompleted.length;
        const idx2 = (baseIndex + 1) % uncompleted.length;

        let expr1 = uncompleted[idx1];
        let expr2 = uncompleted[idx2];
        if (expr1.id === expr2.id && uncompleted.length > 1) {
            expr2 = uncompleted[(idx2 + 1) % uncompleted.length];
        }

        return { expr1, expr2 };
    }

    // =========================================================================
    // 4단계 몰입형 러닝 스튜디오 모달 구현 (Studio Engine)
    // =========================================================================

    openUnitStudio(unitId) {
        const allUnits = window.NATIVE_UNITS_DATA || [];
        const unit = allUnits.find(u => u.unitId === unitId);
        if (!unit) {
            alert('단원 데이터를 찾을 수 없습니다.');
            return;
        }

        this.currentUnit = unit;
        this.currentStudioStep = 1;
        this.studioState = {
            step3Chips: {},
            step4QuizAnswers: {},
            step4WritingShow: {}
        };

        const modal = document.getElementById('modal-expression-studio');
        if (!modal) return;

        // 헤더 메타데이터 세팅
        const catalog = window.NATIVE_SERIES_CATALOG || [];
        const series = catalog.find(s => s.id === unit.seriesId);

        const seriesBadgeEl = document.getElementById('studio-series-badge');
        const unitBadgeEl = document.getElementById('studio-unit-badge');
        const titleEl = document.getElementById('studio-unit-title');
        const iconEl = document.getElementById('studio-header-icon');

        if (seriesBadgeEl) seriesBadgeEl.innerText = series ? series.titleKo : '원어민 시리즈';
        if (unitBadgeEl) unitBadgeEl.innerText = `Unit ${unit.unitNumber}`;
        if (titleEl) titleEl.innerText = `${unit.titleKo} (${unit.titleEn})`;
        if (iconEl && series) iconEl.innerText = series.icon || '✨';

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        this.renderStudioStep();
    }

    closeUnitStudio() {
        const modal = document.getElementById('modal-expression-studio');
        if (modal) {
            modal.classList.add('hidden');
        }
        document.body.style.overflow = '';
        this.renderUnitsGrid();
        this.renderSeriesDeck();
    }

    goToStudioStep(step) {
        if (step < 1) step = 1;
        if (step > 4) step = 4;
        this.currentStudioStep = step;
        this.renderStudioStep();
    }

    prevStudioStep() {
        if (this.currentStudioStep > 1) {
            this.goToStudioStep(this.currentStudioStep - 1);
        }
    }

    nextStudioStep() {
        if (this.currentStudioStep < 4) {
            this.goToStudioStep(this.currentStudioStep + 1);
        } else {
            this.completeUnit();
        }
    }

    completeUnit() {
        if (!this.currentUnit) return;
        if (window.storage && window.storage.markNativeUnitCompleted) {
            window.storage.markNativeUnitCompleted(this.currentUnit.unitId, this.currentUnit);
        }

        // 완독 축하 알림
        alert(`🎉 축하합니다!\n[Unit ${this.currentUnit.unitNumber}: ${this.currentUnit.titleKo}] 4단계 파이프라인을 성공적으로 완독하셨습니다!\n\n단원 내 4개 핵심 표현이 에빙하우스 망각곡선 복습 큐(1일/3일/7일/30일)에 자동 등록되었습니다.`);

        this.closeUnitStudio();
        this.render();
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }

    renderStudioStep() {
        const bodyEl = document.getElementById('expression-studio-body');
        const prevBtn = document.getElementById('studio-prev-step-btn');
        const nextBtn = document.getElementById('studio-next-step-btn');
        const indicatorEl = document.getElementById('studio-step-indicator');
        if (!bodyEl || !this.currentUnit) return;

        // 스텝퍼 활성화 상태 업데이트
        document.querySelectorAll('.expr-studio-step-btn').forEach(btn => {
            const step = Number(btn.getAttribute('data-step'));
            if (step === this.currentStudioStep) {
                btn.className = 'expr-studio-step-btn px-2.5 py-1 rounded-lg border font-bold bg-amber-400 text-slate-950 border-amber-300 transition-all cursor-pointer shadow-xs';
            } else if (step < this.currentStudioStep) {
                btn.className = 'expr-studio-step-btn px-2.5 py-1 rounded-lg border text-emerald-300 border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/40 transition-all cursor-pointer';
            } else {
                btn.className = 'expr-studio-step-btn px-2.5 py-1 rounded-lg border text-slate-300 border-slate-700 hover:bg-slate-700/50 transition-all cursor-pointer';
            }
        });

        document.querySelectorAll('.expr-studio-mob-step').forEach(btn => {
            const step = Number(btn.getAttribute('data-step'));
            if (step === this.currentStudioStep) {
                btn.className = 'expr-studio-mob-step px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold';
            } else {
                btn.className = 'expr-studio-mob-step px-2 py-0.5 rounded text-slate-300';
            }
        });

        // 이전/다음 버튼 제어
        if (prevBtn) {
            prevBtn.disabled = (this.currentStudioStep === 1);
        }
        if (nextBtn) {
            if (this.currentStudioStep === 4) {
                nextBtn.innerHTML = '🏆 단원 완독 & 복습 등록';
                nextBtn.className = 'px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-serif font-black transition-all shadow-md cursor-pointer animate-pulse';
            } else {
                nextBtn.innerHTML = `Step ${this.currentStudioStep + 1} 단계로 →`;
                nextBtn.className = 'px-5 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-serif font-bold transition-all shadow-sm cursor-pointer';
            }
        }
        if (indicatorEl) {
            const stepNames = [
                '1단계: 뉘앙스 탐구 & 쉐도잉',
                '2단계: 리얼 다이얼로그 티키타카',
                '3단계: 1초 반응 스피킹 & 빈칸 슬롯팅',
                '4단계: 뉘앙스 배틀 퀴즈 & 영작 클리닉'
            ];
            indicatorEl.innerHTML = `<span class="text-blue-900 font-bold">${stepNames[this.currentStudioStep - 1]}</span> (Step ${this.currentStudioStep}/4)`;
        }

        // 스텝별 콘텐츠 렌더링
        switch (this.currentStudioStep) {
            case 1:
                bodyEl.innerHTML = this.renderStep1Nuance();
                break;
            case 2:
                bodyEl.innerHTML = this.renderStep2Dialogue();
                break;
            case 3:
                bodyEl.innerHTML = this.renderStep3Reaction();
                break;
            case 4:
                bodyEl.innerHTML = this.renderStep4QuizWriting();
                break;
        }

        bodyEl.scrollTop = 0;
        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * Step 1: 뉘앙스 탐구 & 오디오 쉐도잉
     */
    renderStep1Nuance() {
        const exprs = this.currentUnit.expressions || [];
        return `
            <div class="max-w-4xl mx-auto space-y-6">
                <div class="p-4 bg-blue-50 border border-blue-200 rounded-2xl flex items-start gap-3">
                    <span class="text-xl">💡</span>
                    <div>
                        <h4 class="font-serif font-black text-sm text-blue-950">Step 1. 직역 vs 원어민 뉘앙스 & 오디오 쉐도잉</h4>
                        <p class="text-xs text-blue-900/80 mt-0.5 leading-relaxed">
                            한국인들이 자주 실수하는 어색한 직역 표현과 원어민의 자연스러운 실전 표현의 1인치 차이를 비교 탐구하고, 고음질 오디오로 발음과 억양을 쉐도잉하세요.
                        </p>
                    </div>
                </div>

                <div class="space-y-6">
                    ${exprs.map((expr, idx) => `
                        <div class="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
                            <div class="flex items-start justify-between gap-3">
                                <div class="flex items-center gap-2 flex-wrap">
                                    <span class="w-6 h-6 rounded-full bg-blue-900 text-white text-xs font-mono font-bold flex items-center justify-center">
                                        ${idx + 1}
                                    </span>
                                    <h3 class="font-serif font-black text-xl text-slate-900">
                                        ${expr.title}
                                    </h3>
                                    <span class="text-sm font-medium text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                                        ${expr.koreanMeaning}
                                    </span>
                                </div>
                                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700">
                                    Lv.${expr.level || 3} • ${expr.category}
                                </span>
                            </div>

                            <!-- 직역 vs 원어민 비교 박스 -->
                            ${expr.awkwardVsNative ? `
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                                    <div class="p-2.5 rounded-lg bg-rose-50 border border-rose-200">
                                        <div class="font-bold text-rose-800 flex items-center gap-1 mb-1">
                                            <span>❌</span> 한국식 직역 / 어색한 표현
                                        </div>
                                        <div class="text-slate-800 italic">"${expr.awkwardVsNative.awkward}"</div>
                                    </div>
                                    <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                                        <div class="font-bold text-emerald-800 flex items-center gap-1 mb-1">
                                            <span>✨</span> 원어민 뉘앙스 실전 표현
                                        </div>
                                        <div class="text-slate-900 font-semibold">"${expr.awkwardVsNative.native}"</div>
                                    </div>
                                    <div class="col-span-full pt-2 border-t border-slate-200 text-slate-700 leading-relaxed text-[11px]">
                                        <strong>💡 뉘앙스 비결:</strong> ${expr.awkwardVsNative.reason}
                                    </div>
                                </div>
                            ` : ''}

                            <!-- 심층 해설 & 실전 연어 -->
                            <div class="space-y-2 text-xs">
                                <p class="text-slate-700 leading-relaxed">
                                    <strong>📖 상세 해설:</strong> ${expr.explanation}
                                </p>
                                ${expr.collocation ? `
                                    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-800 font-mono text-[11px]">
                                        <span class="text-amber-600 font-bold">자주 쓰이는 짝꿍 연어:</span> ${expr.collocation}
                                    </div>
                                ` : ''}
                            </div>

                            <!-- 오디오 문장 & 쉐도잉 플레이어 -->
                            ${expr.audioSentence ? `
                                <div class="p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between gap-3">
                                    <div class="min-w-0">
                                        <div class="text-[10px] font-mono text-amber-300 font-bold mb-0.5">AUDIO SHADOWING PRACTICE</div>
                                        <div class="text-sm font-serif italic text-slate-100">
                                            "${expr.audioSentence}"
                                        </div>
                                    </div>
                                    <button onclick="window.tts.speak('${expr.audioSentence.replace(/'/g, "\\'")}')"
                                            class="px-3 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-serif font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer shadow-sm">
                                        <span>🔊</span> 들으며 따라하기
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Step 2: 리얼 다이얼로그 티키타카
     */
    renderStep2Dialogue() {
        const exprs = this.currentUnit.expressions || [];
        return `
            <div class="max-w-4xl mx-auto space-y-6">
                <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3">
                    <span class="text-xl">💬</span>
                    <div>
                        <h4 class="font-serif font-black text-sm text-emerald-950">Step 2. 리얼 다이얼로그 티키타카 롤플레잉</h4>
                        <p class="text-xs text-emerald-900/80 mt-0.5 leading-relaxed">
                            원어민들이 실제 일상과 비즈니스 상황에서 주고받는 생생한 2턴 롤플레잉 대화문입니다. 화자의 억양을 들으며 A/B 파트너 대화를 완성해 보세요.
                        </p>
                    </div>
                </div>

                <div class="space-y-6">
                    ${exprs.map((expr, idx) => {
                        const turns = expr.dialogue || [];
                        return `
                            <div class="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
                                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                                    <div class="flex items-center gap-2">
                                        <span class="w-6 h-6 rounded-full bg-emerald-700 text-white text-xs font-mono font-bold flex items-center justify-center">
                                            ${idx + 1}
                                        </span>
                                        <h4 class="font-serif font-black text-base text-slate-900">
                                            실전 대화 속 [${expr.title}]
                                        </h4>
                                    </div>
                                    <span class="text-xs text-slate-400 font-mono">${expr.koreanMeaning}</span>
                                </div>

                                <div class="space-y-3">
                                    ${turns.map((turn, tIdx) => {
                                        const isSpeakerA = (tIdx % 2 === 0);
                                        return `
                                            <div class="flex items-start gap-3 ${isSpeakerA ? '' : 'flex-row-reverse'}">
                                                <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                                                    isSpeakerA ? 'bg-blue-100 text-blue-900' : 'bg-amber-100 text-amber-900'
                                                }">
                                                    ${turn.speaker ? turn.speaker[0] : (isSpeakerA ? 'A' : 'B')}
                                                </div>
                                                <div class="max-w-[85%] rounded-2xl p-3.5 text-xs ${
                                                    isSpeakerA
                                                        ? 'bg-slate-100 text-slate-900 rounded-tl-none'
                                                        : 'bg-blue-900 text-white rounded-tr-none'
                                                }">
                                                    <div class="font-mono text-[10px] opacity-70 mb-1">
                                                        ${turn.speaker || (isSpeakerA ? 'Speaker A' : 'Speaker B')}
                                                    </div>
                                                    <div class="font-serif text-sm leading-relaxed">
                                                        "${turn.textEn}"
                                                    </div>
                                                    <div class="text-[11px] opacity-80 mt-1">
                                                        ${turn.textKo}
                                                    </div>
                                                    <div class="mt-2 pt-2 border-t border-black/10 flex justify-end">
                                                        <button onclick="window.tts.speak('${turn.textEn.replace(/'/g, "\\'")}')"
                                                                class="px-2 py-1 rounded bg-black/10 hover:bg-black/20 text-[10px] flex items-center gap-1 cursor-pointer">
                                                            <span>🔊</span> 듣기
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Step 3: 1초 반응 스피킹 & 빈칸 슬롯팅
     */
    renderStep3Reaction() {
        const exprs = this.currentUnit.expressions || [];
        return `
            <div class="max-w-4xl mx-auto space-y-6">
                <div class="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3">
                    <span class="text-xl">⚡</span>
                    <div>
                        <h4 class="font-serif font-black text-sm text-amber-950">Step 3. 1초 반응 스피킹 & 단어 칩 슬롯팅</h4>
                        <p class="text-xs text-amber-900/80 mt-0.5 leading-relaxed">
                            원어민은 특정 상황이 닥쳤을 때 생각할 틈 없이 1초 만에 반사적으로 표현을 뱉어냅니다. 상황 프롬프트를 보고 빈칸 슬롯에 올바른 단어 칩을 클릭해 완성해 보세요.
                        </p>
                    </div>
                </div>

                <div class="space-y-6">
                    ${exprs.map((expr, idx) => {
                        const r = expr.instantReaction;
                        if (!r) return '';
                        const selected = this.studioState.step3Chips[expr.id];
                        const isAnswered = !!selected;
                        const isCorrect = (selected === r.correctChunk);

                        const templateHtml = r.template.replace('[ ? ]', `
                            <span class="inline-flex items-center min-w-[100px] px-3 py-1 mx-1 rounded-lg border-2 border-dashed font-black text-sm transition-all ${
                                !isAnswered
                                    ? 'border-amber-400 bg-amber-50 text-amber-900'
                                    : isCorrect
                                        ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                                        : 'border-rose-500 bg-rose-50 text-rose-800'
                            }">
                                ${selected || '[ 빈칸 클릭 ]'}
                            </span>
                        `);

                        return `
                            <div class="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
                                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                                    <div class="flex items-center gap-2">
                                        <span class="w-6 h-6 rounded-full bg-amber-500 text-slate-950 text-xs font-mono font-bold flex items-center justify-center">
                                            ${idx + 1}
                                        </span>
                                        <h4 class="font-serif font-black text-base text-slate-900">
                                            1초 반응 트레이닝: [${expr.title}]
                                        </h4>
                                    </div>
                                    <span class="text-xs font-mono text-slate-400">${expr.koreanMeaning}</span>
                                </div>

                                <!-- 상황 프롬프트 카드 -->
                                <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                                    <div class="text-[11px] font-mono font-bold text-slate-400 mb-1">🎯 실전 돌발 상황</div>
                                    <div class="text-xs sm:text-sm font-semibold text-slate-800">
                                        ${r.situationPrompt}
                                    </div>
                                </div>

                                <!-- 슬롯 템플릿 문장 -->
                                <div class="p-4 rounded-xl bg-slate-900 text-white font-serif text-sm sm:text-base leading-relaxed flex items-center justify-between gap-3">
                                    <div>${templateHtml}</div>
                                    ${isAnswered && isCorrect ? `
                                        <button onclick="window.tts.speak('${r.template.replace('[ ? ]', r.correctChunk).replace(/'/g, "\\'")}')"
                                                class="px-2.5 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs shrink-0 cursor-pointer">
                                            🔊 발음 듣기
                                        </button>
                                    ` : ''}
                                </div>

                                <!-- 단어 칩 풀 -->
                                <div>
                                    <div class="text-[11px] font-mono text-slate-400 mb-2">아래 단어 칩 중 알맞은 표현을 클릭하세요:</div>
                                    <div class="flex flex-wrap gap-2">
                                        ${(r.pool || []).map(chip => {
                                            const isThisSelected = (selected === chip);
                                            return `
                                                <button type="button"
                                                        onclick="window.nativeExpressionsEngine.selectReactionChip('${expr.id}', '${chip.replace(/'/g, "\\'")}')"
                                                        class="px-3.5 py-2 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                                                            isThisSelected
                                                                ? isCorrect
                                                                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                                                                    : 'bg-rose-600 text-white border-rose-600'
                                                                : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200 hover:border-slate-300'
                                                        }">
                                                    ${chip}
                                                </button>
                                            `;
                                        }).join('')}
                                        ${isAnswered ? `
                                            <button type="button"
                                                    onclick="window.nativeExpressionsEngine.resetReactionChip('${expr.id}')"
                                                    class="px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-slate-600 underline cursor-pointer">
                                                다시 풀기
                                            </button>
                                        ` : ''}
                                    </div>
                                </div>

                                <!-- 정답 피드백 -->
                                ${isAnswered ? `
                                    <div class="p-3 rounded-xl text-xs ${
                                        isCorrect
                                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold'
                                            : 'bg-rose-50 border border-rose-200 text-rose-900'
                                    }">
                                        ${isCorrect
                                            ? '🎉 완벽합니다! 원어민처럼 1초 만에 상황에 맞는 표현을 완성했습니다.'
                                            : `❌ 아쉽습니다! 정답은 <strong>"${r.correctChunk}"</strong> 입니다. 다시 칩을 선택해 보세요.`}
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    selectReactionChip(exprId, chunk) {
        this.studioState.step3Chips[exprId] = chunk;
        this.renderStudioStep();
    }

    resetReactionChip(exprId) {
        delete this.studioState.step3Chips[exprId];
        this.renderStudioStep();
    }

    /**
     * Step 4: 뉘앙스 배틀 퀴즈 & 영작 클리닉
     */
    renderStep4QuizWriting() {
        const exprs = this.currentUnit.expressions || [];
        return `
            <div class="max-w-4xl mx-auto space-y-6">
                <div class="p-4 bg-purple-50 border border-purple-200 rounded-2xl flex items-start gap-3">
                    <span class="text-xl">✍️</span>
                    <div>
                        <h4 class="font-serif font-black text-sm text-purple-950">Step 4. 뉘앙스 배틀 퀴즈 & 조건부 영작 클리닉</h4>
                        <p class="text-xs text-purple-900/80 mt-0.5 leading-relaxed">
                            정확한 뉘앙스를 구별하는 객관식 퀴즈와 실제 문장을 완성하는 서술형 조건부 영작 클리닉입니다. 완독 후 에빙하우스 망각곡선 복습 큐에 등록됩니다.
                        </p>
                    </div>
                </div>

                <div class="space-y-6">
                    ${exprs.map((expr, idx) => {
                        const q = expr.quiz;
                        const w = expr.writingClinic;
                        const selectedOpt = this.studioState.step4QuizAnswers[expr.id];
                        const isQuizAnswered = (typeof selectedOpt === 'number');
                        const isQuizCorrect = isQuizAnswered && (selectedOpt === q.answer);
                        const isWritingShown = !!this.studioState.step4WritingShow[expr.id];

                        return `
                            <div class="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-5">
                                <div class="flex items-center justify-between pb-3 border-b border-slate-100">
                                    <div class="flex items-center gap-2">
                                        <span class="w-6 h-6 rounded-full bg-purple-900 text-white text-xs font-mono font-bold flex items-center justify-center">
                                            ${idx + 1}
                                        </span>
                                        <h4 class="font-serif font-black text-base text-slate-900">
                                            클리닉: [${expr.title}]
                                        </h4>
                                    </div>
                                    <span class="text-xs font-mono text-slate-400">${expr.koreanMeaning}</span>
                                </div>

                                <!-- Part A: 객관식 뉘앙스 퀴즈 -->
                                ${q ? `
                                    <div class="space-y-3">
                                        <div class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                            <span class="px-2 py-0.5 rounded bg-purple-100 text-purple-900 text-[10px] font-mono">Q1 객관식</span>
                                            <span>${q.question}</span>
                                        </div>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            ${(q.options || []).map((opt, optIdx) => {
                                                const isThis = (selectedOpt === optIdx);
                                                let btnStyle = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';
                                                if (isQuizAnswered) {
                                                    if (optIdx === q.answer) {
                                                        btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                                                    } else if (isThis) {
                                                        btnStyle = 'bg-rose-100 border-rose-400 text-rose-950';
                                                    }
                                                }
                                                return `
                                                    <button type="button"
                                                            onclick="window.nativeExpressionsEngine.selectQuizOption('${expr.id}', ${optIdx})"
                                                            class="p-2.5 rounded-xl text-xs font-serif text-left border transition-all cursor-pointer ${btnStyle}">
                                                        ${optIdx + 1}. ${opt}
                                                    </button>
                                                `;
                                            }).join('')}
                                        </div>
                                        ${isQuizAnswered ? `
                                            <div class="p-3 rounded-xl text-xs ${isQuizCorrect ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}">
                                                <strong>${isQuizCorrect ? '정답입니다!' : '오답입니다!'}</strong> ${q.explanation}
                                            </div>
                                        ` : ''}
                                    </div>
                                ` : ''}

                                <!-- Part B: 조건부 서술형 영작 클리닉 -->
                                ${w ? `
                                    <div class="pt-4 border-t border-slate-100 space-y-3">
                                        <div class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                            <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-mono">Q2 조건부 영작</span>
                                            <span>${w.promptKo}</span>
                                        </div>

                                        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                                            <span class="font-bold text-amber-800">📌 필수 활용 조건:</span> ${w.condition}
                                        </div>

                                        <textarea placeholder="조건 표현을 활용하여 영어 문장을 직접 작성해 보세요..."
                                                  class="w-full p-3 text-xs bg-white border border-slate-300 rounded-xl outline-none focus:border-blue-900 h-20 resize-none font-serif"></textarea>

                                        <div class="flex items-center justify-between">
                                            <button type="button"
                                                    onclick="window.nativeExpressionsEngine.toggleWritingAnswer('${expr.id}')"
                                                    class="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-serif font-bold transition-all cursor-pointer">
                                                ${isWritingShown ? '모범답안 접기 ▲' : '모범답안 & 힌트 확인 ▼'}
                                            </button>
                                            <span class="text-[11px] text-slate-400">힌트: ${w.hint}</span>
                                        </div>

                                        ${isWritingShown ? `
                                            <div class="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs space-y-1 animate-in fade-in">
                                                <div class="font-bold text-blue-950 flex items-center justify-between">
                                                    <span>✨ 모범답안:</span>
                                                    <button onclick="window.tts.speak('${w.modelAnswer.replace(/'/g, "\\'")}')" class="text-blue-900 hover:underline cursor-pointer">
                                                        🔊 발음 듣기
                                                    </button>
                                                </div>
                                                <div class="font-serif text-sm font-semibold text-slate-900">
                                                    "${w.modelAnswer}"
                                                </div>
                                            </div>
                                        ` : ''}
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }

    selectQuizOption(exprId, optIdx) {
        this.studioState.step4QuizAnswers[exprId] = optIdx;
        this.renderStudioStep();
    }

    toggleWritingAnswer(exprId) {
        this.studioState.step4WritingShow[exprId] = !this.studioState.step4WritingShow[exprId];
        this.renderStudioStep();
    }

    // =========================================================================
    // 4. 하단 개별 표현 아카이브 리스트 렌더링
    // =========================================================================

    renderExpressionList() {
        const container = document.getElementById('native-expressions-list');
        if (!container) return;

        const bank = window.NATIVE_EXPRESSIONS_MASTER_BANK || [];
        let filtered = bank;

        // 카테고리 필터
        if (this.currentCategory === 'bookmark') {
            filtered = filtered.filter(e => this.isBookmarked(e.id));
        } else if (this.currentCategory !== 'all') {
            filtered = filtered.filter(e => e.category === this.currentCategory);
        }

        // 검색어 필터
        if (this.searchQuery) {
            filtered = filtered.filter(e => {
                const title = (e.title || '').toLowerCase();
                const meaning = (e.koreanMeaning || e.summary || '').toLowerCase();
                const reason = (e.awkwardVsNative?.reason || '').toLowerCase();
                const series = (e.seriesTitleKo || '').toLowerCase();
                return title.includes(this.searchQuery) || meaning.includes(this.searchQuery) || reason.includes(this.searchQuery) || series.includes(this.searchQuery);
            });
        }

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="col-span-full py-12 text-center text-slate-400 space-y-2">
                    <div class="text-3xl">🔍</div>
                    <div class="text-sm font-bold text-slate-600">검색 조건에 일치하는 표현이 없습니다.</div>
                    <div class="text-xs text-slate-400">다른 키워드로 검색하거나 카테고리 필터를 '전체 보기'로 전환해 보세요.</div>
                </div>
            `;
            return;
        }

        // 처음 30개만 우선 렌더링 (스크롤 성능 최적화)
        const displayList = filtered.slice(0, 40);

        const cardsHtml = displayList.map(expr => {
            const isBm = this.isBookmarked(expr.id);
            return `
                <div class="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-900 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between">
                    <div>
                        <div class="flex items-start justify-between gap-2 mb-2">
                            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-700">
                                ${expr.seriesTitleKo || '원어민 표현'} • Lv.${expr.level || 3}
                            </span>
                            <button onclick="window.nativeExpressionsEngine.toggleBookmark('${expr.id}', event)"
                                    class="text-slate-400 hover:text-amber-400 transition-colors cursor-pointer text-sm" title="북마크 토글">
                                ${isBm ? '⭐' : '☆'}
                            </button>
                        </div>

                        <h4 class="font-serif font-black text-lg text-slate-900">
                            ${expr.title}
                        </h4>
                        <div class="text-xs font-semibold text-amber-700 mt-0.5">
                            ${expr.koreanMeaning || expr.summary || ''}
                        </div>

                        ${expr.awkwardVsNative ? `
                            <div class="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                                <div class="text-rose-700">❌ 직역: "${expr.awkwardVsNative.awkward}"</div>
                                <div class="text-emerald-700 font-semibold">✨ 원어민: "${expr.awkwardVsNative.native}"</div>
                                <div class="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                                    💡 ${expr.awkwardVsNative.reason}
                                </div>
                            </div>
                        ` : ''}

                        ${expr.audioSentence ? `
                            <div class="mt-3 text-xs text-slate-600 font-serif italic flex items-center justify-between gap-2 bg-slate-50 p-2 rounded-lg">
                                <span>"${this.renderInteractiveSentenceTokens(expr.audioSentence, expr.koreanMeaning)}"</span>
                                <button onclick="window.tts.speak('${expr.audioSentence.replace(/'/g, "\\'")}')" class="text-slate-500 hover:text-blue-900 cursor-pointer">
                                    🔊
                                </button>
                            </div>
                        ` : ''}
                    </div>

                    ${expr.unitId ? `
                        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span class="text-[11px] text-slate-400 font-mono">${expr.unitTitleKo || 'Unit Studio'}</span>
                            <button onclick="window.nativeExpressionsEngine.openUnitStudio('${expr.unitId}')"
                                    class="text-xs font-serif font-bold text-blue-900 hover:underline cursor-pointer">
                                해당 단원 4단계 스튜디오 →
                            </button>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');

        container.innerHTML = cardsHtml;
    }

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

    inspectExampleWord(cleanWord, encodedEn, encodedKo) {
        const sentenceEn = decodeURIComponent(encodedEn || '');
        const sentenceKo = decodeURIComponent(encodedKo || '');
        if (window.readingEngine && window.readingEngine.openWordInspector) {
            window.readingEngine.openWordInspector(cleanWord, sentenceEn, sentenceKo);
        }
    }

    // ========================================================================
    // 원어민 시리즈 플래너 모달 (Native Series Planner Modal)
    // ========================================================================
    openSeriesPlannerModal(seriesId = null) {
        const catalog = window.NATIVE_SERIES_CATALOG || [];
        if (!seriesId) {
            seriesId = this.activeSeriesId || catalog[0]?.id || 'series-daily';
        }
        this._plannerSeriesId = seriesId;

        const modal = document.getElementById('modal-native-series-planner');
        if (!modal) return;

        // 시리즈 셀렉트 드롭다운 채우기
        const select = document.getElementById('native-planner-series-select');
        const allUnits = window.NATIVE_UNITS_DATA || [];
        if (select) {
            select.innerHTML = catalog.map(s => {
                const sUnits = allUnits.filter(u => u.seriesId === s.id);
                return `<option value="${s.id}" ${s.id === seriesId ? 'selected' : ''}>[Series ${s.seriesNumber}] ${s.titleKo} (${sUnits.length || 10}단원)</option>`;
            }).join('');
        }

        this.syncPlannerSeriesInfo(seriesId);

        // 시작일 기본값 오늘
        const dateInput = document.getElementById('native-planner-start-date');
        const today = window.storage?.getTodayDateString ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
        if (dateInput) {
            dateInput.value = today;
            dateInput.min = today;
            dateInput.onchange = () => this.updateSeriesPlannerPreview();
        }

        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        this.updateSeriesPlannerPreview();
        if (window.lucide) window.lucide.createIcons();
    }

    onPlannerSeriesSelectChange(seriesId) {
        this._plannerSeriesId = seriesId;
        this.syncPlannerSeriesInfo(seriesId);
        this.updateSeriesPlannerPreview();
    }

    syncPlannerSeriesInfo(seriesId) {
        const catalog = window.NATIVE_SERIES_CATALOG || [];
        const series = catalog.find(s => s.id === seriesId);
        if (!series) return;
        const allUnits = window.NATIVE_UNITS_DATA || [];
        const seriesUnits = allUnits.filter(u => u.seriesId === seriesId).sort((a, b) => a.unitNumber - b.unitNumber);

        const subtitleEl = document.getElementById('native-planner-series-subtitle');
        const badgeEl = document.getElementById('native-planner-series-badge');
        const countEl = document.getElementById('native-planner-series-count');
        const titleEl = document.getElementById('native-planner-series-title');
        const descEl = document.getElementById('native-planner-series-desc');

        if (subtitleEl) subtitleEl.textContent = `시리즈 전 단원(${seriesUnits.length}단원)을 캘린더 플래너에 날짜별로 일괄 배정합니다.`;
        if (badgeEl) badgeEl.textContent = `Series ${series.seriesNumber} • ${series.badge || '전문 시리즈'}`;
        if (countEl) countEl.textContent = `총 ${seriesUnits.length}개 단원 (${seriesUnits.length * 4}개 표현)`;
        if (titleEl) titleEl.textContent = `${series.icon || '💬'} ${series.titleKo} (${series.titleEn})`;
        if (descEl) descEl.textContent = series.desc || '';
    }

    closeSeriesPlannerModal() {
        const modal = document.getElementById('modal-native-series-planner');
        if (modal) modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    updateSeriesPlannerPreview() {
        if (!this._plannerSeriesId) return;
        const seriesId = this._plannerSeriesId;
        const allUnits = window.NATIVE_UNITS_DATA || [];
        const seriesUnits = allUnits.filter(u => u.seriesId === seriesId).sort((a, b) => a.unitNumber - b.unitNumber);
        const dateInput = document.getElementById('native-planner-start-date');
        const startDate = (dateInput && dateInput.value) ? dateInput.value : (window.storage?.getTodayDateString() || new Date().toISOString().slice(0, 10));

        const paceRadio = document.querySelector('input[name="native-planner-pace"]:checked');
        const pace = paceRadio ? paceRadio.value : 'daily';

        const dates = [];
        const [y, m, d] = startDate.split('-').map(Number);
        let cursor = new Date(y, m - 1, d);
        let safetyCounter = 0;
        while (dates.length < seriesUnits.length && safetyCounter < 1000) {
            safetyCounter++;
            const curYear = cursor.getFullYear();
            const curMonth = String(cursor.getMonth() + 1).padStart(2, '0');
            const curDate = String(cursor.getDate()).padStart(2, '0');
            const curStr = `${curYear}-${curMonth}-${curDate}`;
            const isRest = window.storage?.isRestDay ? window.storage.isRestDay(curStr) : false;

            if (!isRest) {
                dates.push(curStr);
                cursor.setDate(cursor.getDate() + (pace === 'alternate' ? 2 : 1));
            } else {
                cursor.setDate(cursor.getDate() + 1);
            }
        }

        const rangeEl = document.getElementById('native-planner-date-range');
        if (rangeEl && dates.length > 0) {
            rangeEl.textContent = `${dates[0]} ~ ${dates[dates.length - 1]} (${dates.length}회차)`;
        }

        const previewContainer = document.getElementById('native-planner-schedule-preview');
        if (previewContainer) {
            previewContainer.innerHTML = seriesUnits.map((unit, idx) => {
                const planDate = dates[idx] || startDate;
                return `
                    <div class="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                        <div class="flex items-center gap-2 min-w-0">
                            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-900 shrink-0">
                                Unit ${unit.unitNumber}
                            </span>
                            <span class="font-bold text-slate-800 truncate text-xs">
                                ${unit.titleKo}
                            </span>
                        </div>
                        <span class="text-[11px] font-mono text-slate-500 shrink-0 ml-2">
                            📅 ${planDate}
                        </span>
                    </div>
                `;
            }).join('');
        }
    }

    submitSeriesPlanner() {
        if (!this._plannerSeriesId) return;
        const seriesId = this._plannerSeriesId;
        const catalog = window.NATIVE_SERIES_CATALOG || [];
        const series = catalog.find(s => s.id === seriesId);
        const dateInput = document.getElementById('native-planner-start-date');
        const startDate = (dateInput && dateInput.value) ? dateInput.value : null;

        const paceRadio = document.querySelector('input[name="native-planner-pace"]:checked');
        const pace = paceRadio ? paceRadio.value : 'daily';

        if (!window.storage || !window.storage.registerNativeSeries) {
            alert('플래너 저장소 모듈을 찾을 수 없습니다.');
            return;
        }

        const res = window.storage.registerNativeSeries(seriesId, startDate, pace);
        this.closeSeriesPlannerModal();

        // 플래너 렌더링 갱신
        if (window.planner) {
            if (window.planner.renderActivePlans) window.planner.renderActivePlans();
            if (window.planner.renderCalendar) window.planner.renderCalendar();
            if (window.planner.renderMonthlyHeatmap) window.planner.renderMonthlyHeatmap();
            if (window.planner.renderSelectedDateDetail) window.planner.renderSelectedDateDetail();
        }

        // 축하 메시지
        alert(`🎉 [${series ? series.titleKo : '원어민 시리즈'}] 전 단원(${res.addedUnits}개 단원)이 플래너에 성공적으로 배정되었습니다!
기간: ${res.startDate} ~ ${res.endDate}
학습 플래너 캘린더에서 매일의 원어민 실전 표현 퀘스트를 확인하세요.`);
    }
}

// 전역 인스턴스 초기화
window.nativeExpressionsEngine = new NativeExpressionsEngine();
window.expressionsEngine = window.nativeExpressionsEngine;
