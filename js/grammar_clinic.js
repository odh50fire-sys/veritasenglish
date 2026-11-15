/**
 * Veritas English - 영문법 클리닉 엔진 (Grammar Clinic Engine)
 * 5대 레벨 40단원 체계: 개념 공식 마스터 -> 밑줄 어법 클리닉 -> 실전 5제 퀴즈
 */

class GrammarClinicEngine {
    constructor() {
        this.data = window.GRAMMAR_CLINIC_BANK || [];
        this.currentTrack = 'regular'; // 'regular' (정규 5단계) | 'special' (테마 4대 특강)
        this.currentLevelCode = 'lv1';
        this.searchQuery = '';
        
        // 활성화된 단원 학습 상태
        this.activeUnit = null;
        this.activeStep = 1; // 1: 개념 마스터, 2: 밑줄 어법, 3: 실전 퀴즈
        this.spottingSolved = false;
        this.spottingSolvedMap = { 0: false, 1: false, 2: false };
        
        // 퀴즈 진행 상태
        this.quizAnswers = [null, null, null, null, null];
        this.quizSubmitted = false;
        this.quizScore = 0;

        // 초기화 여부 플래그
        this.isInitialized = false;
    }

    init() {
        if (!this.data || this.data.length === 0) {
            this.data = window.GRAMMAR_CLINIC_BANK || [];
        }

        // 사용자의 진단 레벨 자동 감지 및 중1~수능 단계별 추천 매핑
        if (!this.isInitialized) {
            const userLvl = window.storage ? window.storage.getAcademicLevel() : 3;
            let mappedCode = 'lv1';
            if (userLvl <= 3) {
                // Lv.1 Starter, Lv.2 Explorer, Lv.3 Pioneer (중1-1) -> 중1 문법 (lv1)
                mappedCode = 'lv1';
            } else if (userLvl <= 5) {
                // Lv.4 Navigator (중1-2), Lv.5 Challenger (중2-1) -> 중2 문법 (lv2)
                mappedCode = 'lv2';
            } else if (userLvl <= 7) {
                // Lv.6 Strategist (중2-2), Lv.7 Master (중3-1) -> 중3 문법 (lv3)
                mappedCode = 'lv3';
            } else if (userLvl === 8) {
                // Lv.8 Innovator (고1~고2 내신) -> 고교 내신 (lv4)
                mappedCode = 'lv4';
            } else {
                // Lv.9 Leader, Lv.10 Veritas Elite (수능 1등급) -> 수능 킬러 (lv5)
                mappedCode = 'lv5';
            }
            this.currentLevelCode = mappedCode;
            this.isInitialized = true;
        }

        this.render();
    }

    // ------------------------------------------------------------------------
    // 로컬 스토리지 진척도 관리
    // ------------------------------------------------------------------------
    getStorageKey() {
        const userId = window.storage && window.storage.currentProfileId ? window.storage.currentProfileId : 'default';
        return `veritas_grammar_progress_${userId}`;
    }

    getProgressMap() {
        try {
            const raw = localStorage.getItem(this.getStorageKey());
            return raw ? JSON.parse(raw) : {};
        } catch (e) {
            console.error('Failed to parse grammar progress:', e);
            return {};
        }
    }

    findUnit(unitRef, levelCode = null) {
        if (unitRef === null || unitRef === undefined || unitRef === '') return null;
        const refStr = String(unitRef).trim();
        const refNum = Number(unitRef);

        // 1. Direct match by unitId with levelCode filter (if provided)
        for (const lvl of this.data) {
            if (levelCode && lvl.levelCode !== levelCode) continue;
            const u = (lvl.units || []).find(x => x.unitId === refStr);
            if (u) return { unit: u, level: lvl };
        }

        // 2. If levelCode is provided, match by unitNo or unitId or legacyUnitNo
        if (levelCode) {
            const lvl = this.data.find(l => l.levelCode === levelCode);
            if (lvl) {
                const u = (lvl.units || []).find(x => x.unitNo === refNum || x.unitId === refStr || (!isNaN(refNum) && x.legacyUnitNo === refNum));
                if (u) return { unit: u, level: lvl };
            }
        }

        // 3. Match by unitId across all levels
        for (const lvl of this.data) {
            const u = (lvl.units || []).find(x => x.unitId === refStr);
            if (u) return { unit: u, level: lvl };
        }

        // 4. Match by legacyUnitNo (e.g. 9 -> lv2 Unit 1, 101 -> sp_terms Unit 1)
        if (!isNaN(refNum)) {
            for (const lvl of this.data) {
                const u = (lvl.units || []).find(x => x.legacyUnitNo === refNum);
                if (u) return { unit: u, level: lvl };
            }
        }

        // 5. Match by unitNo in currentLevelCode
        if (this.currentLevelCode && !isNaN(refNum)) {
            const lvl = this.data.find(l => l.levelCode === this.currentLevelCode);
            if (lvl) {
                const u = (lvl.units || []).find(x => x.unitNo === refNum);
                if (u) return { unit: u, level: lvl };
            }
        }

        // 6. Fallback: first match by unitNo
        if (!isNaN(refNum)) {
            for (const lvl of this.data) {
                const u = (lvl.units || []).find(x => x.unitNo === refNum);
                if (u) return { unit: u, level: lvl };
            }
        }

        return null;
    }

    getUnitProgress(unitRef, levelCode = null) {
        const map = this.getProgressMap();
        if (!map) return null;
        if (map[unitRef]) return map[unitRef];

        const found = this.findUnit(unitRef, levelCode);
        if (found) {
            const u = found.unit;
            if (u.unitId && map[u.unitId]) return map[u.unitId];
            if (u.legacyUnitNo && map[u.legacyUnitNo]) return map[u.legacyUnitNo];
            const compKey = `${found.level.levelCode}_${u.unitNo}`;
            if (map[compKey]) return map[compKey];
        }
        return null;
    }

    saveUnitProgress(unitRef, resultData, levelCode = null) {
        try {
            const map = this.getProgressMap();
            const found = this.findUnit(unitRef, levelCode);
            const primaryKey = found && found.unit.unitId ? found.unit.unitId : String(unitRef);
            
            map[primaryKey] = {
                ...(map[primaryKey] || {}),
                ...resultData,
                unitId: primaryKey,
                updatedAt: new Date().toISOString()
            };
            if (found && found.unit.legacyUnitNo) {
                map[found.unit.legacyUnitNo] = map[primaryKey];
            }
            localStorage.setItem(this.getStorageKey(), JSON.stringify(map));
            this.renderStatsOnly();
        } catch (e) {
            console.error('Failed to save grammar progress:', e);
        }
    }

    getLevelStats(levelCode) {
        const levelObj = this.data.find(lvl => lvl.levelCode === levelCode);
        if (!levelObj) return { total: 0, completed: 0, avgScore: 0, percentage: 0 };

        const progressMap = this.getProgressMap();
        const units = levelObj.units || [];
        let completed = 0;
        let totalScore = 0;

        units.forEach(u => {
            const prog = this.getUnitProgress(u.unitId || u.unitNo, levelCode);
            if (prog && prog.completed) {
                completed++;
                totalScore += (prog.score || 0);
            }
        });

        const total = units.length;
        const avgScore = completed > 0 ? Math.round((totalScore / (completed * 5)) * 100) : 0;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

        return { total, completed, avgScore, percentage };
    }

    // ------------------------------------------------------------------------
    // 메인 UI 렌더링
    // ------------------------------------------------------------------------
    render() {
        const container = document.getElementById('grammar-clinic-app-container');
        if (!container) return;

        const regularLevels = this.data.filter(lvl => !lvl.isSpecial);
        const specialCourses = this.data.filter(lvl => lvl.isSpecial);
        const activeList = this.currentTrack === 'special' ? specialCourses : regularLevels;

        let currentLvlObj = this.data.find(lvl => lvl.levelCode === this.currentLevelCode);
        if (!currentLvlObj) {
            currentLvlObj = activeList[0] || this.data[0];
            this.currentLevelCode = currentLvlObj.levelCode;
        }

        const stats = this.getLevelStats(this.currentLevelCode);
        const userLvl = window.storage ? window.storage.getAcademicLevel() : 3;

        let recommendedCode = 'lv1';
        if (userLvl <= 3) recommendedCode = 'lv1';
        else if (userLvl <= 5) recommendedCode = 'lv2';
        else if (userLvl <= 7) recommendedCode = 'lv3';
        else if (userLvl === 8) recommendedCode = 'lv4';
        else recommendedCode = 'lv5';

        const recommendedLvlObj = this.data.find(lvl => lvl.levelCode === recommendedCode) || this.data[0];

        container.innerHTML = `
            <!-- 상단 헤더 & 설명 -->
            <div class="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-emerald-500/20">
                <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div class="space-y-2">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-serif font-bold">
                            <span>📗 VERITAS GRAMMAR CLINIC</span>
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>정규 5단계(40단원) + 테마 4대 특강(30단원) 총 70단원</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white flex items-center gap-2">
                            <span>영문법 3단계 처방 클리닉 &amp; 테마 특강</span>
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                            개념 공식 암기(<span class="text-emerald-300 font-semibold">1단계</span>) ➔ 밑줄 오류 즉각 진단(<span class="text-emerald-300 font-semibold">2단계</span>) ➔ 실전 5제 출제 공식 마스터(<span class="text-emerald-300 font-semibold">3단계</span>)로 수능 29번 어법과 중·고교 서술형을 100% 정복합니다.
                        </p>
                    </div>

                    <!-- 전체 진척 요약 카드 -->
                    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 shrink-0 min-w-[240px] flex flex-col gap-2">
                        <div class="flex items-center justify-between text-xs text-slate-300">
                            <span>현재 코스 달성도</span>
                            <span class="font-bold text-emerald-400 font-mono text-sm">${stats.completed} / ${stats.total} 단원 (${stats.percentage}%)</span>
                        </div>
                        <div class="w-full bg-black/40 h-2.5 rounded-full overflow-hidden">
                            <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500" style="width: ${stats.percentage}%"></div>
                        </div>
                        <div class="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-white/5">
                            <span>평균 정답률: <strong class="text-white font-mono">${stats.avgScore}%</strong></span>
                            <span>추천: <strong class="text-emerald-300 font-serif">${recommendedLvlObj.badge}</strong></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 정규 과정 vs 테마 특강 트랙 전환 탭 -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-2">
                <div class="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-serif font-bold">
                    <button type="button" 
                        onclick="window.grammarClinicEngine.switchTrack('regular')"
                        class="px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                            this.currentTrack === 'regular' 
                                ? 'bg-slate-900 text-white shadow-xs' 
                                : 'text-slate-600 hover:text-slate-900'
                        }">
                        <i data-lucide="book-open" class="w-4 h-4 text-emerald-400"></i>
                        <span>📚 학년별 정규 과정 (5단계 • 40단원)</span>
                    </button>
                    <button type="button" 
                        onclick="window.grammarClinicEngine.switchTrack('special')"
                        class="px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                            this.currentTrack === 'special' 
                                ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-xs' 
                                : 'text-slate-600 hover:text-slate-900'
                        }">
                        <i data-lucide="sparkles" class="w-4 h-4 text-amber-200"></i>
                        <span>🎓 테마별 문법 특강 (4대 코스 • 30단원)</span>
                    </button>
                </div>

                <div class="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                    <span class="inline-block w-2 h-2 rounded-full ${this.currentTrack === 'special' ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}"></span>
                    <span>${this.currentTrack === 'special' ? '문법 용어 ➔ 서술형 ➔ 수능 29번 ➔ 혼동 문법 4대 집중 코스' : '중1 기초부터 수능 1등급까지 학년별 정규 로드맵'}</span>
                </div>
            </div>

            <!-- 선택된 트랙에 따른 레벨/코스 탭 바 -->
            <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1">
                ${activeList.map(lvl => {
                    const isActive = lvl.levelCode === this.currentLevelCode;
                    const isRecommended = lvl.levelCode === recommendedCode && !lvl.isSpecial;
                    const lvlStat = this.getLevelStats(lvl.levelCode);
                    return `
                        <button type="button" 
                            onclick="window.grammarClinicEngine.switchLevel('${lvl.levelCode}')"
                            class="group relative flex-1 min-w-[160px] p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                                isActive 
                                    ? (lvl.isSpecial 
                                        ? 'bg-white border-amber-500 shadow-md ring-2 ring-amber-500/20' 
                                        : 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20')
                                    : 'bg-slate-50/80 hover:bg-white border-slate-200 hover:border-slate-300'
                            }">
                            ${isRecommended ? `
                                <span class="absolute -top-2 right-2 px-2 py-0.5 rounded-full bg-sky-600 text-white font-mono text-[9px] font-bold shadow-xs">
                                    추천 레벨
                                </span>
                            ` : ''}
                            <div class="flex items-center justify-between mb-1">
                                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold font-mono ${
                                    isActive 
                                        ? (lvl.isSpecial ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-emerald-100 text-emerald-800') 
                                        : 'bg-slate-200 text-slate-600 group-hover:bg-slate-300'
                                }">
                                    ${lvl.badge}
                                </span>
                                <span class="text-[11px] font-mono font-bold ${isActive ? (lvl.isSpecial ? 'text-amber-700' : 'text-emerald-700') : 'text-slate-400'}">
                                    ${lvlStat.completed}/${lvlStat.total} 완료
                                </span>
                            </div>
                            <div class="font-serif font-bold text-xs sm:text-sm text-slate-900 truncate">
                                ${lvl.levelName}
                            </div>
                            <div class="text-[10px] text-slate-500 truncate mt-0.5">
                                ${lvl.targetGrade}
                            </div>
                        </button>
                    `;
                }).join('')}
            </div>

            <!-- 현재 선택된 레벨 정보 & 검색/필터 바 -->
            <div class="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl ${currentLvlObj.isSpecial ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-700'} flex items-center justify-center font-serif font-bold text-sm shadow-xs shrink-0">
                            ${currentLvlObj.isSpecial ? '★' : 'Lv.' + currentLvlObj.level}
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <h3 class="font-serif font-bold text-base sm:text-lg text-slate-900">${currentLvlObj.levelName}</h3>
                                <span class="px-2 py-0.5 rounded-full text-xs font-bold ${currentLvlObj.isSpecial ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-slate-100 text-slate-700 border border-slate-200'}">
                                    ${currentLvlObj.targetGrade}
                                </span>
                            </div>
                            <p class="text-xs text-slate-500 mt-0.5">${currentLvlObj.desc}</p>
                        </div>
                    </div>

                    <!-- 레벨 일괄 플래너 배정 버튼 & 검색 인풋 -->
                    <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                        <button type="button" 
                            onclick="window.grammarClinicEngine.openLevelBatchScheduleModal('${currentLvlObj.levelCode}')"
                            class="px-3 py-2 rounded-xl ${currentLvlObj.isSpecial ? 'bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950' : 'bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950'} font-serif font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                            title="이 코스의 전 단원을 플래너에 일괄 배정">
                            <i data-lucide="calendar-range" class="w-4 h-4 ${currentLvlObj.isSpecial ? 'text-amber-700' : 'text-emerald-700'}"></i>
                            <span>📅 ${currentLvlObj.badge} ${(currentLvlObj.units || []).length}단원 플래너 배정</span>
                        </button>
                        
                        <div class="relative w-full sm:w-64">
                            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"></i>
                            <input type="text" 
                                id="grammar-search-input"
                                value="${this.searchQuery}"
                                placeholder="문법 개념/단원 검색..."
                                oninput="window.grammarClinicEngine.handleSearch(this.value)"
                                class="w-full pl-9 pr-8 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-xs text-slate-800 placeholder-slate-400 transition-all outline-hidden">
                            ${this.searchQuery ? `
                                <button type="button" onclick="window.grammarClinicEngine.handleSearch('')" class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                    <i data-lucide="x" class="w-3.5 h-3.5"></i>
                                </button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>

            <!-- 단원 카드 그리드 -->
            <div id="grammar-unit-card-grid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                ${this.renderUnitCards(currentLvlObj)}
            </div>
        `;

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    renderStatsOnly() {
        const stats = this.getLevelStats(this.currentLevelCode);
        const currentLvlObj = this.data.find(lvl => lvl.levelCode === this.currentLevelCode);
        if (currentLvlObj) {
            const grid = document.getElementById('grammar-unit-card-grid');
            if (grid) {
                grid.innerHTML = this.renderUnitCards(currentLvlObj);
                if (window.lucide) window.lucide.createIcons();
            }
        }
    }

    // ------------------------------------------------------------------------
    // 단원 카드 렌더링
    // ------------------------------------------------------------------------
    renderUnitCards(currentLvlObj) {
        let units = currentLvlObj.units || [];

        // 검색어 필터링 (검색 시 전체 40단원에서 검색)
        if (this.searchQuery && this.searchQuery.trim().length > 0) {
            const q = this.searchQuery.trim().toLowerCase();
            const allUnitsWithLvl = [];
            this.data.forEach(lvl => {
                lvl.units.forEach(u => {
                    if (
                        u.title.toLowerCase().includes(q) ||
                        u.part.toLowerCase().includes(q) ||
                        u.summary.toLowerCase().includes(q) ||
                        (u.formulaCards && u.formulaCards.some(fc => fc.name.toLowerCase().includes(q) || fc.formula.toLowerCase().includes(q)))
                    ) {
                        allUnitsWithLvl.push({ ...u, parentLevel: lvl });
                    }
                });
            });

            if (allUnitsWithLvl.length === 0) {
                return `
                    <div class="col-span-full py-16 text-center bg-white rounded-2xl border border-slate-200">
                        <div class="w-12 h-12 mx-auto rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xl mb-3">
                            <i data-lucide="search-x" class="w-6 h-6"></i>
                        </div>
                        <h4 class="font-serif font-bold text-base text-slate-800">'${this.searchQuery}'에 대한 검색 결과가 없습니다.</h4>
                        <p class="text-xs text-slate-500 mt-1">다른 문법 키워드(예: to부정사, 관계대명사, 수일치, 도치 등)로 검색해 보세요.</p>
                        <button type="button" onclick="window.grammarClinicEngine.handleSearch('')" class="mt-3 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors">
                            검색 초기화
                        </button>
                    </div>
                `;
            }

            return allUnitsWithLvl.map(u => this.buildUnitCardHtml(u, u.parentLevel)).join('');
        }

        return units.map(u => this.buildUnitCardHtml(u, currentLvlObj)).join('');
    }

    buildUnitCardHtml(unit, levelObj) {
        const prog = this.getUnitProgress(unit.unitId || unit.unitNo, levelObj.levelCode);
        const isCompleted = prog && prog.completed;
        const score = prog ? prog.score : 0;
        const stars = prog ? prog.stars : 0;

        const scheduled = window.storage ? window.storage.getScheduledGrammarUnit(unit.unitId || unit.unitNo, levelObj.levelCode) : null;
        let scheduledBadge = '';
        if (scheduled && scheduled.planDate) {
            scheduledBadge = `
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-amber-100 text-amber-900 border border-amber-300" title="학습 플래너 배정일: ${scheduled.planDate}">
                    📅 ${scheduled.planDate.slice(5)} 계획
                </span>
            `;
        }

        let starHtml = '';
        if (isCompleted) {
            starHtml = `
                <div class="flex items-center gap-0.5 text-amber-400 text-xs">
                    ${'★'.repeat(stars)}${'☆'.repeat(3 - stars)}
                    <span class="font-mono font-bold ml-1 text-slate-700">${score}/5</span>
                </div>
            `;
        }

        const unitBadgeLabel = levelObj.isSpecial ? `특강 ${unit.unitNo}강` : `Unit ${unit.unitNo}`;

        return `
            <div class="bg-white rounded-2xl border ${isCompleted ? 'border-emerald-300 ring-1 ring-emerald-200/50' : 'border-slate-200'} p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-200 group">
                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2">
                        <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[10px] font-bold">
                            ${unitBadgeLabel}
                        </span>
                        <div class="flex items-center gap-1.5">
                            ${scheduledBadge}
                            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                isCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                            }">
                                ${isCompleted ? '완료' : '학습 전'}
                            </span>
                        </div>
                    </div>

                    <div>
                        <div class="text-[11px] font-semibold text-emerald-700 flex items-center gap-1 mb-1">
                            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            ${unit.part}
                        </div>
                        <h4 class="font-serif font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                            ${unit.title}
                        </h4>
                        <p class="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                            ${unit.summary}
                        </p>
                    </div>

                    <!-- 공식 카드 미리보기 태그 -->
                    <div class="flex flex-wrap gap-1 pt-1">
                        ${(unit.formulaCards || []).slice(0, 2).map(fc => `
                            <span class="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] text-slate-600 truncate max-w-[130px]">
                                💡 ${fc.name}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <!-- 하단 액션 & 점수 -->
                <div class="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                        ${starHtml || `<span class="text-[11px] text-slate-400 font-sans">실전 5문항 + 클리닉</span>`}
                    </div>
                    <div class="flex items-center gap-1.5">
                        <button type="button" 
                            onclick="window.grammarClinicEngine.openScheduleModal('${unit.unitId || unit.unitNo}', '${levelObj.levelCode}')"
                            class="px-2.5 py-1.5 rounded-xl border border-emerald-300 hover:border-emerald-600 bg-emerald-50/70 hover:bg-emerald-100 text-emerald-950 font-serif font-bold text-xs shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                            title="학습 플래너에 일정 등록">
                            <i data-lucide="calendar-plus" class="w-3.5 h-3.5 text-emerald-700"></i>
                            <span>계획 등록</span>
                        </button>
                        <button type="button" 
                            onclick="window.grammarClinicEngine.openClinicModal('${unit.unitId || unit.unitNo}', '${levelObj.levelCode}')"
                            class="px-3 py-1.5 rounded-xl ${
                                isCompleted 
                                    ? 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800' 
                                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            } font-serif font-bold text-xs shadow-xs transition-all flex items-center gap-1 cursor-pointer">
                            <span>${isCompleted ? '재도전' : '입장'}</span>
                            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // ------------------------------------------------------------------------
    // 레벨 전환 및 검색 핸들러
    // ------------------------------------------------------------------------
    switchLevel(levelCode) {
        this.currentLevelCode = levelCode;
        const lvl = this.data.find(l => l.levelCode === levelCode);
        if (lvl && lvl.isSpecial) {
            this.currentTrack = 'special';
        } else if (lvl) {
            this.currentTrack = 'regular';
        }
        this.searchQuery = '';
        this.render();
    }

    switchTrack(track) {
        this.currentTrack = track;
        if (track === 'special') {
            const specialLevels = this.data.filter(lvl => lvl.isSpecial);
            if (!specialLevels.some(lvl => lvl.levelCode === this.currentLevelCode)) {
                this.currentLevelCode = specialLevels[0] ? specialLevels[0].levelCode : 'sp_terms';
            }
        } else {
            const regularLevels = this.data.filter(lvl => !lvl.isSpecial);
            if (!regularLevels.some(lvl => lvl.levelCode === this.currentLevelCode)) {
                this.currentLevelCode = regularLevels[0] ? regularLevels[0].levelCode : 'lv1';
            }
        }
        this.searchQuery = '';
        this.render();
    }

    handleSearch(val) {
        this.searchQuery = val;
        const grid = document.getElementById('grammar-unit-card-grid');
        const currentLvlObj = this.data.find(lvl => lvl.levelCode === this.currentLevelCode) || this.data[0];
        if (grid) {
            grid.innerHTML = this.renderUnitCards(currentLvlObj);
            if (window.lucide) window.lucide.createIcons();
        }
    }

    // ------------------------------------------------------------------------
    // 단원 클리닉 모달 열기 & 3단계 제어
    // ------------------------------------------------------------------------
    openClinicModal(unitRef, levelCode = null) {
        const found = this.findUnit(unitRef, levelCode);
        if (!found) return;

        const { unit: foundUnit, level: foundLevel } = found;
        this.activeUnit = { ...foundUnit, levelInfo: foundLevel };
        this.currentLevelCode = foundLevel.levelCode;
        this.currentTrack = foundLevel.isSpecial ? 'special' : 'regular';
        this.activeStep = 1;
        this.spottingSolved = false;
        this.spottingSolvedMap = { 0: false, 1: false, 2: false };
        this.quizAnswers = [null, null, null, null, null];
        this.quizSubmitted = false;
        this.quizScore = 0;

        const modal = document.getElementById('modal-grammar-clinic');
        if (modal) {
            modal.classList.remove('hidden');
            this.renderModalContent();
        }
    }

    closeClinicModal() {
        const modal = document.getElementById('modal-grammar-clinic');
        if (modal) {
            modal.classList.add('hidden');
        }
        this.activeUnit = null;
        this.renderStatsOnly();
        if (window.app && typeof window.app.renderTodayLearningBox === 'function') {
            window.app.renderTodayLearningBox();
        }
    }

    setStep(stepNo) {
        this.activeStep = stepNo;
        this.renderModalContent();
    }

    renderModalContent() {
        const unit = this.activeUnit;
        if (!unit) return;

        const headerTitle = document.getElementById('grammar-modal-title');
        const headerBadge = document.getElementById('grammar-modal-level-badge');
        const schedBadge = document.getElementById('grammar-modal-scheduled-badge');
        const bodyContainer = document.getElementById('grammar-modal-body');

        const unitLabel = unit.levelInfo && unit.levelInfo.isSpecial ? `특강 ${unit.unitNo}강` : `Unit ${unit.unitNo}`;
        const levelBadge = unit.levelInfo ? `[${unit.levelInfo.badge}] ` : '';
        if (headerTitle) headerTitle.textContent = `${levelBadge}${unitLabel}. ${unit.title}`;
        if (headerBadge) {
            headerBadge.textContent = `${unit.levelInfo ? unit.levelInfo.badge : ''} • ${unit.part}`;
        }
        if (schedBadge) {
            const scheduled = window.storage ? window.storage.getScheduledGrammarUnit(unit.unitId || unit.unitNo, unit.levelInfo ? unit.levelInfo.levelCode : null) : null;
            if (scheduled && scheduled.planDate) {
                schedBadge.textContent = `📅 ${scheduled.planDate} 플래너 배정됨`;
                schedBadge.classList.remove('hidden');
            } else {
                schedBadge.classList.add('hidden');
            }
        }

        // 스텝 네비게이션 탭 상태 동기화
        [1, 2, 3].forEach(step => {
            const stepBtn = document.getElementById(`grammar-step-btn-${step}`);
            if (stepBtn) {
                const isActive = this.activeStep === step;
                stepBtn.className = `flex-1 py-2 sm:py-2.5 px-2 rounded-xl text-xs sm:text-sm font-serif font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isActive 
                        ? 'bg-slate-900 text-white shadow-xs' 
                        : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`;
            }
        });

        if (!bodyContainer) return;

        if (this.activeStep === 1) {
            bodyContainer.innerHTML = this.renderStep1Concept();
        } else if (this.activeStep === 2) {
            bodyContainer.innerHTML = this.renderStep2Spotting();
        } else if (this.activeStep === 3) {
            bodyContainer.innerHTML = this.renderStep3Quiz();
        }

        if (window.lucide) window.lucide.createIcons();
    }

    // ------------------------------------------------------------------------
    // STEP 1: 개념 공식 마스터 (Concept Master)
    // ------------------------------------------------------------------------
    renderStep1Concept() {
        const unit = this.activeUnit;
        const formulaCards = unit.formulaCards || [];
        const overview = unit.overview || unit.summary || '';
        const takeaways = unit.keyTakeaways || [];

        return `
            <div class="space-y-6 animate-in fade-in duration-200">
                <!-- 상단 학습 목표 및 개요 배너 -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200/90 shadow-2xs space-y-3">
                    <div class="flex items-start gap-3">
                        <div class="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                            <i data-lucide="book-open" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-mono text-[10px] font-bold">1단계 개념 마스터 • ${unit.levelInfo && unit.levelInfo.isSpecial ? '특강 ' + unit.unitNo + '강' : 'Unit ' + unit.unitNo}</span>
                                <h4 class="font-serif font-bold text-base text-emerald-950">${unit.title}</h4>
                            </div>
                            <p class="text-xs sm:text-sm text-emerald-900/90 mt-1 leading-relaxed font-sans">${overview}</p>
                        </div>
                    </div>

                    ${takeaways.length > 0 ? `
                        <div class="pt-3 border-t border-emerald-200/70">
                            <div class="text-[11px] font-bold text-emerald-900 mb-1.5 flex items-center gap-1.5">
                                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-700"></i>
                                <span>오늘 반드시 잡아야 할 3대 절대 법칙</span>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                ${takeaways.map((tw, idx) => `
                                    <div class="p-2.5 rounded-xl bg-white/80 border border-emerald-200 text-xs text-slate-800 flex items-start gap-2 shadow-2xs">
                                        <span class="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">${idx + 1}</span>
                                        <span class="leading-relaxed font-medium">${tw}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>

                <!-- 공식 카드 목록 -->
                <div class="space-y-6">
                    ${formulaCards.map((fc, idx) => {
                        const rules = fc.rules || [];
                        const examples = fc.examples || [];
                        const oxList = fc.oxCompare || [];

                        return `
                            <div class="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4 hover:border-emerald-300 transition-all">
                                <!-- 카드 헤더 -->
                                <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                                    <div class="flex items-center gap-2.5">
                                        <span class="w-7 h-7 rounded-xl bg-slate-900 text-emerald-300 flex items-center justify-center text-xs font-mono font-bold shadow-2xs">
                                            0${idx + 1}
                                        </span>
                                        <h5 class="font-serif font-black text-base sm:text-lg text-slate-900">${fc.name}</h5>
                                    </div>
                                    ${fc.quizLink ? `
                                        <span class="px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-teal-800 text-[11px] font-mono font-bold flex items-center gap-1">
                                            <i data-lucide="target" class="w-3 h-3 text-teal-600"></i>
                                            <span>3단계 퀴즈 직결</span>
                                        </span>
                                    ` : ''}
                                </div>

                                <!-- 1. 개념 상세 설명 -->
                                ${fc.desc ? `
                                    <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                                        <div class="text-[11px] font-bold text-slate-500 mb-1 flex items-center gap-1">
                                            <i data-lucide="help-circle" class="w-3.5 h-3.5 text-indigo-600"></i>
                                            <span>개념 원리 이해하기</span>
                                        </div>
                                        ${fc.desc}
                                    </div>
                                ` : ''}

                                <!-- 2. 핵심 문형 공식 박스 -->
                                <div class="p-4 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs sm:text-sm font-bold tracking-wide border border-emerald-500/30 flex items-center justify-between shadow-xs">
                                    <div class="flex items-center gap-2">
                                        <span class="text-base">📐</span>
                                        <span class="whitespace-pre-line">${fc.formula}</span>
                                    </div>
                                </div>

                                <!-- 3. 세부 규칙 및 형태 변화표 -->
                                ${rules.length > 0 ? `
                                    <div class="space-y-1.5 pt-1">
                                        <div class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                            <i data-lucide="layers" class="w-3.5 h-3.5 text-emerald-600"></i>
                                            <span>형태 변화 및 세부 적용 규칙</span>
                                        </div>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            ${rules.map(r => `
                                                <div class="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200 text-xs text-slate-800 flex flex-col gap-0.5">
                                                    <span class="font-bold text-[11px] text-emerald-800 font-mono">▸ ${r.title}</span>
                                                    <span class="text-slate-600 leading-relaxed">${r.detail}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}

                                <!-- 4. 대표 실전 예문 및 해석 -->
                                <div class="space-y-2 pt-1">
                                    <div class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                        <i data-lucide="message-square" class="w-3.5 h-3.5 text-blue-600"></i>
                                        <span>대표 실전 예문 & 해석</span>
                                    </div>
                                    ${(examples.length > 0 ? examples : [{ en: fc.example, ko: '핵심 적용 예문', point: '' }]).map(exItem => `
                                        <div class="p-3 rounded-xl bg-indigo-50/40 border border-indigo-100 flex items-start justify-between gap-3">
                                            <div class="text-xs sm:text-sm text-slate-800 space-y-1 min-w-0">
                                                <div class="font-serif font-bold text-indigo-950">${exItem.en}</div>
                                                ${exItem.ko ? `<div class="text-xs text-slate-500 font-sans">${exItem.ko}</div>` : ''}
                                                ${exItem.point ? `<div class="text-[11px] font-mono text-emerald-700 font-semibold">💡 ${exItem.point}</div>` : ''}
                                            </div>
                                            <button type="button" 
                                                onclick="window.ttsEngine && window.ttsEngine.speak('${(exItem.en || '').replace(/'/g, "\\'")}')" 
                                                class="p-2 rounded-lg bg-white hover:bg-indigo-100 text-indigo-700 transition-colors shrink-0 shadow-2xs border border-indigo-200" 
                                                title="원어민 발음 듣기">
                                                <i data-lucide="volume-2" class="w-4 h-4"></i>
                                            </button>
                                        </div>
                                    `).join('')}
                                </div>

                                <!-- 5. 시험 단골 O vs X 비교 클리닉 -->
                                ${oxList.length > 0 ? `
                                    <div class="space-y-2 pt-1">
                                        <div class="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                            <i data-lucide="check-square" class="w-3.5 h-3.5 text-amber-600"></i>
                                            <span>시험 단골 ⭕ vs ❌ 실전 비교 클리닉</span>
                                        </div>
                                        <div class="space-y-1.5">
                                            ${oxList.map(ox => `
                                                <div class="p-3 rounded-xl bg-amber-50/40 border border-amber-200/80 text-xs space-y-1">
                                                    <div class="flex items-center gap-2 text-emerald-800 font-bold">
                                                        <span class="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">O</span>
                                                        <span class="font-serif">${ox.correct}</span>
                                                    </div>
                                                    <div class="flex items-center gap-2 text-rose-700 font-semibold">
                                                        <span class="w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]">X</span>
                                                        <span class="font-serif line-through">${ox.wrong}</span>
                                                    </div>
                                                    <div class="text-[11px] text-slate-600 font-sans pt-0.5 pl-6">
                                                        👉 ${ox.reason}
                                                    </div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}

                                <!-- 6. 출제자의 함정 및 서술형 감점 팁 -->
                                ${fc.trap ? `
                                    <div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 text-xs text-rose-950 flex items-start gap-2.5">
                                        <i data-lucide="alert-triangle" class="w-4 h-4 text-rose-600 shrink-0 mt-0.5"></i>
                                        <div class="leading-relaxed">
                                            <strong class="font-bold text-rose-900">내신·수능 출제자의 함정:</strong> ${fc.trap}
                                        </div>
                                    </div>
                                ` : ''}

                                <!-- 7. 3단계 퀴즈 출제 연계 알림 -->
                                ${fc.quizLink ? `
                                    <div class="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-[11px] text-teal-900 flex items-center gap-2 font-mono">
                                        <i data-lucide="sparkles" class="w-3.5 h-3.5 text-teal-600 shrink-0"></i>
                                        <span>${fc.quizLink}</span>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- 하단 버튼: 스텝 2로 이동 -->
                <div class="pt-4 flex items-center justify-between">
                    <span class="text-xs text-slate-500 font-serif">공식과 예문을 완벽히 숙지했다면 2단계 어법 클리닉으로 이동하세요.</span>
                    <button type="button" 
                        onclick="window.grammarClinicEngine.setStep(2)"
                        class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-serif font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95">
                        <span>개념 완료! 2단계 [밑줄 오류 찾기] 도전</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // ------------------------------------------------------------------------
    // STEP 2: 밑줄 어법 클리닉 (Error Spotting Clinic - 3대 실전 미션)
    // ------------------------------------------------------------------------
    renderStep2Spotting() {
        const unit = this.activeUnit;
        const drills = unit.spottingDrills || [];

        if (!drills || drills.length === 0) {
            return `
                <div class="py-12 text-center">
                    <p class="text-sm text-slate-500">등록된 밑줄 어법 문제가 없습니다.</p>
                    <button type="button" onclick="window.grammarClinicEngine.setStep(3)" class="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">3단계 실전 퀴즈로 바로가기</button>
                </div>
            `;
        }

        if (!this.spottingSolvedMap) {
            this.spottingSolvedMap = { 0: false, 1: false, 2: false };
        }

        const solvedCount = Object.values(this.spottingSolvedMap).filter(Boolean).length;
        const canProceed = solvedCount >= 1;

        return `
            <div class="space-y-6 animate-in fade-in duration-200">
                <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-start justify-between gap-3">
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-sm">
                            <i data-lucide="search" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h4 class="font-serif font-bold text-sm text-indigo-950">2단계 밑줄 어법 클리닉 (3대 실전 미션)</h4>
                            <p class="text-xs text-indigo-800 mt-0.5">다음 3개의 내신·수능 실전 문장에서 어법상 <strong class="underline decoration-indigo-500 decoration-2">틀린 부분 하나</strong>를 클릭하여 즉시 진단하고 수정 처방을 확인하세요.</p>
                        </div>
                    </div>
                    <div class="shrink-0 px-3 py-1 rounded-xl bg-indigo-600 text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-xs">
                        <span>해결:</span>
                        <span id="spotting-progress-count" class="text-amber-300 text-sm">${solvedCount} / ${drills.length}</span>
                    </div>
                </div>

                <!-- 3대 미션 카드 리스트 -->
                <div class="space-y-6">
                    ${drills.map((drill, dIdx) => {
                        const isSolved = Boolean(this.spottingSolvedMap[dIdx]);
                        const feedbackContainerId = (dIdx === 0) ? 'spotting-feedback-container' : `spotting-feedback-container-${dIdx}`;
                        return `
                            <div class="bg-white rounded-2xl border ${isSolved ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200'} p-5 sm:p-6 shadow-xs space-y-4 transition-all" id="drill-card-${dIdx}">
                                <div class="flex items-center justify-between flex-wrap gap-2">
                                    <div class="flex items-center gap-2">
                                        <span class="px-2.5 py-1 rounded-lg ${isSolved ? 'bg-emerald-600 text-white' : 'bg-indigo-100 text-indigo-700'} font-serif font-bold text-xs">
                                            미션 ${dIdx + 1}
                                        </span>
                                        <span class="text-xs font-serif font-bold text-slate-700">
                                            ${dIdx === 0 ? '[어법 클리닉 기본]' : (dIdx === 1 ? '[내신·수능 실전 1]' : '[내신·수능 심화 2]')}
                                        </span>
                                    </div>
                                    ${drill.conceptRef ? `
                                        <span class="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-medium flex items-center gap-1">
                                            <i data-lucide="sparkles" class="w-3 h-3 text-amber-500"></i>
                                            ${drill.conceptRef}
                                        </span>
                                    ` : ''}
                                </div>

                                <!-- 밑줄 선택 문장 영역 (인라인 렌더링) -->
                                <div class="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white font-serif text-base sm:text-lg leading-loose tracking-wide border border-slate-800 shadow-inner">
                                    <div class="leading-loose sm:leading-loose">
                                        ${this.renderSpottingSentenceInline(drill, isSolved, dIdx)}
                                    </div>
                                </div>

                                ${drill.korean ? `
                                    <div class="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-500 flex items-center gap-2">
                                        <span class="font-bold text-slate-600 shrink-0">[해석]</span>
                                        <span>${drill.korean}</span>
                                    </div>
                                ` : ''}

                                <!-- 피드백 메시지 컨테이너 -->
                                <div id="${feedbackContainerId}" ${dIdx === 0 ? 'data-drill-idx="0"' : ''}>
                                    ${isSolved ? this.renderSpottingSolvedFeedback(drill) : `
                                        <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                                            <i data-lucide="info" class="w-4 h-4 text-slate-400 shrink-0"></i>
                                            <span>틀렸다고 생각되는 밑줄 번호를 클릭하세요. 정답 여부와 수정 공식이 즉시 공개됩니다.</span>
                                        </div>
                                    `}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- 하단 네비게이션 -->
                <div class="pt-4 flex items-center justify-between">
                    <button type="button" 
                        onclick="window.grammarClinicEngine.setStep(1)"
                        class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-serif font-semibold text-xs transition-colors flex items-center gap-1.5">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i>
                        <span>1단계 개념 다시보기</span>
                    </button>

                    <button type="button" 
                        id="spotting-next-step-btn"
                        onclick="window.grammarClinicEngine.setStep(3)"
                        class="px-5 py-2.5 rounded-xl ${
                            canProceed ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md cursor-pointer' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        } font-serif font-bold text-sm transition-all flex items-center gap-2">
                        <span>3단계 [실전 5제 퀴즈] 도전</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * 밑줄 어법 문장 인라인 렌더링
     * - 완전한 원문 문장(sentence)의 어순과 맥락을 100% 보존
     * - 밑줄 대상 어구 4개를 문장 내 정확한 위치에 번호 배지(①, ②, ③, ④)와 밑줄 버튼으로 인라인 삽입
     */
    renderSpottingSentenceInline(drill, isSolved, dIdx = 0) {
        const sentence = drill.sentence || '';
        const underlined = drill.underlined || [];
        const wrongIdx = drill.wrongIndex;

        let html = '';
        let curIdx = 0;

        for (let i = 0; i < underlined.length; i++) {
            const target = underlined[i];
            const pos = sentence.indexOf(target, curIdx);
            if (pos === -1) {
                continue;
            }

            // 앞선 일반 문장 텍스트
            const beforeText = sentence.slice(curIdx, pos);
            if (beforeText) {
                html += `<span>${beforeText}</span>`;
            }

            // 인라인 번호 밑줄 버튼
            const isTargetWrong = (i === wrongIdx);
            const isHighlight = isSolved && isTargetWrong;
            const btnId = (dIdx === 0) ? `spot-btn-${i}` : `spot-btn-${dIdx}-${i}`;

            html += `
                <button type="button"
                    id="${btnId}"
                    onclick="window.grammarClinicEngine.checkSpotting(${dIdx}, ${i}, ${wrongIdx})"
                    class="inline-flex items-center gap-1 mx-1 my-0.5 px-2.5 py-0.5 rounded-lg border-2 font-mono font-semibold transition-all cursor-pointer select-none align-middle ${
                        isHighlight
                            ? 'border-emerald-400 bg-emerald-500/25 text-emerald-300 ring-2 ring-emerald-400/50 shadow-sm'
                            : 'border-slate-600 hover:border-amber-400 hover:bg-amber-400/10 text-slate-100'
                    }">
                    <span class="text-xs px-1.5 py-0.2 rounded bg-slate-800 text-amber-300 font-bold">
                        ${i + 1}
                    </span>
                    <span class="underline decoration-2 underline-offset-4 decoration-amber-400/80">${target}</span>
                </button>
            `;

            curIdx = pos + target.length;
        }

        // 남은 뒷부분 문장 텍스트
        const afterText = sentence.slice(curIdx);
        if (afterText) {
            html += `<span>${afterText}</span>`;
        }

        return html || sentence;
    }

    checkSpotting(a, b, c) {
        let drillIdx = 0;
        let clickedIdx = 0;
        let wrongIdx = 0;
        if (c !== undefined) {
            drillIdx = a;
            clickedIdx = b;
            wrongIdx = c;
        } else {
            drillIdx = 0;
            clickedIdx = a;
            wrongIdx = b;
        }

        if (!this.spottingSolvedMap) {
            this.spottingSolvedMap = { 0: false, 1: false, 2: false };
        }

        const unit = this.activeUnit;
        const drills = unit.spottingDrills || [];
        const drill = drills[drillIdx] || drills[0];

        const feedbackContainer = (drillIdx === 0)
            ? (document.getElementById('spotting-feedback-container') || document.getElementById('spotting-feedback-container-0'))
            : document.getElementById(`spotting-feedback-container-${drillIdx}`);
        const nextBtn = document.getElementById('spotting-next-step-btn');

        if (clickedIdx === wrongIdx) {
            // 정답!
            this.spottingSolvedMap[drillIdx] = true;
            const solvedCount = Object.values(this.spottingSolvedMap).filter(Boolean).length;
            if (solvedCount === drills.length) {
                this.spottingSolved = true;
            }

            if (window.confetti) {
                window.confetti({ 
                    particleCount: (solvedCount === drills.length) ? 60 : 30, 
                    spread: 60, 
                    origin: { y: 0.6 } 
                });
            }

            if (feedbackContainer) {
                feedbackContainer.innerHTML = this.renderSpottingSolvedFeedback(drill);
            }

            // 버튼 스타일 업데이트
            const btnId = (drillIdx === 0) ? `spot-btn-${clickedIdx}` : `spot-btn-${drillIdx}-${clickedIdx}`;
            const correctBtn = document.getElementById(btnId);
            if (correctBtn) {
                correctBtn.className = 'inline-flex items-center gap-1 mx-1 my-0.5 px-2.5 py-0.5 rounded-lg border-2 border-emerald-400 bg-emerald-500/25 text-emerald-300 ring-2 ring-emerald-400/50 font-mono font-semibold cursor-pointer align-middle shadow-sm';
            }

            // 미션 카드 테두리 업데이트
            const card = document.getElementById(`drill-card-${drillIdx}`);
            if (card) {
                card.className = 'bg-white rounded-2xl border border-emerald-300 bg-emerald-50/20 p-5 sm:p-6 shadow-xs space-y-4 transition-all';
            }

            // 진행률 배지 업데이트
            const progressBadge = document.getElementById('spotting-progress-count');
            if (progressBadge) {
                progressBadge.textContent = `${solvedCount} / ${drills.length}`;
            }

            // 다음 단계 버튼 활성화
            if (nextBtn && solvedCount >= 1) {
                nextBtn.className = 'px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-md font-serif font-bold text-sm transition-all flex items-center gap-2 cursor-pointer';
                nextBtn.removeAttribute('disabled');
            }
            if (window.lucide) window.lucide.createIcons();
        } else {
            // 오답 클릭
            if (feedbackContainer) {
                feedbackContainer.innerHTML = `
                    <div class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-2.5 animate-in fade-in duration-150">
                        <i data-lucide="alert-circle" class="w-4 h-4 text-rose-600 shrink-0 mt-0.5"></i>
                        <div>
                            <strong class="font-bold text-rose-950">오답입니다:</strong> [${clickedIdx + 1}번] '${drill.underlined[clickedIdx]}'은(는) 올바른 어법입니다. 문장의 주어-동사 수일치, 시제, 또는 구문 공식을 다시 확인하세요!
                        </div>
                    </div>
                `;
                if (window.lucide) window.lucide.createIcons();
            }
        }
    }

    renderSpottingSolvedFeedback(drill) {
        return `
            <div class="p-5 rounded-2xl bg-emerald-50 border border-emerald-300 space-y-3 animate-in fade-in duration-200">
                <div class="flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center gap-2 text-emerald-800 font-serif font-bold text-sm">
                        <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600"></i>
                        <span>정답입니다! 밑줄 오류를 완벽하게 진단했습니다.</span>
                    </div>
                    ${drill.conceptRef ? `
                        <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium">
                            ${drill.conceptRef}
                        </span>
                    ` : ''}
                </div>

                <div class="p-3 rounded-xl bg-white border border-emerald-200 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                    <span class="text-rose-600 line-through font-mono font-bold">${drill.underlined[drill.wrongIndex]}</span>
                    <i data-lucide="arrow-right" class="w-4 h-4 text-emerald-600"></i>
                    <span class="text-emerald-700 font-mono font-bold text-base underline decoration-2">${drill.correction}</span>
                </div>

                <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <strong class="text-emerald-900 font-semibold mr-1">[클리닉 처방]:</strong>
                    ${drill.explanation}
                </p>
            </div>
        `;
    }

    // ------------------------------------------------------------------------
    // STEP 3: 실전 5문항 퀴즈 (Practice Quiz)
    // ------------------------------------------------------------------------
    renderStep3Quiz() {
        const unit = this.activeUnit;
        const questions = unit.questions || [];
        const isSubmitted = this.quizSubmitted;

        return `
            <div class="space-y-6 animate-in fade-in duration-200">
                <div class="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex items-start justify-between gap-4">
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 text-sm">
                            <i data-lucide="award" class="w-4 h-4"></i>
                        </div>
                        <div>
                            <h4 class="font-serif font-bold text-sm text-teal-950">단원 실전 5제 테스트</h4>
                            <p class="text-xs text-teal-800 mt-0.5">실제 내신·수능형 객관식 5문항을 풀고 즉각적인 오답 분석과 피드백을 확인하세요.</p>
                        </div>
                    </div>
                    ${isSubmitted ? `
                        <div class="shrink-0 px-3 py-1 rounded-xl bg-slate-900 text-white font-mono font-bold text-xs flex items-center gap-1.5 shadow-xs">
                            <span>점수:</span>
                            <span class="text-emerald-400 text-sm">${this.quizScore} / 5</span>
                        </div>
                    ` : ''}
                </div>

                <!-- 5문항 리스트 -->
                <div class="space-y-6">
                    ${questions.map((qItem, qIdx) => {
                        const userAns = this.quizAnswers[qIdx];
                        const isCorrect = isSubmitted && userAns === qItem.ans;
                        const isWrong = isSubmitted && userAns !== qItem.ans;

                        return `
                            <div class="bg-white rounded-2xl border ${
                                isSubmitted 
                                    ? (isCorrect ? 'border-emerald-300 bg-emerald-50/10' : 'border-rose-300 bg-rose-50/10') 
                                    : 'border-slate-200'
                            } p-5 sm:p-6 shadow-xs space-y-4">
                                <!-- 문항 헤더 -->
                                <div class="flex items-start justify-between gap-3">
                                    <div class="flex items-start gap-2.5 min-w-0">
                                        <span class="w-6 h-6 rounded-lg ${
                                            isSubmitted 
                                                ? (isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white') 
                                                : 'bg-slate-900 text-white'
                                        } flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                                            Q${qIdx + 1}
                                        </span>
                                        <div class="space-y-1 min-w-0">
                                            <div class="flex items-center gap-1.5 flex-wrap">
                                                <span class="px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-mono font-bold inline-flex items-center gap-1">
                                                    <i data-lucide="sparkle" class="w-3 h-3 text-emerald-600"></i>
                                                    <span>${qItem.conceptRef || '1단계 학습 개념 연계'}</span>
                                                </span>
                                            </div>
                                            <h5 class="font-serif font-bold text-sm sm:text-base text-slate-900 whitespace-pre-line leading-relaxed">
                                                ${qItem.q}
                                            </h5>
                                        </div>
                                    </div>
                                    ${isSubmitted ? `
                                        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold shrink-0 ${
                                            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                        }">
                                            ${isCorrect ? '정답' : '오답'}
                                        </span>
                                    ` : ''}
                                </div>

                                <!-- 보기 5개 (라디오 버튼) -->
                                <div class="space-y-2 pt-1">
                                    ${qItem.options.map((opt, optIdx) => {
                                        const isSelected = userAns === optIdx;
                                        const isThisTheCorrectAnswer = isSubmitted && optIdx === qItem.ans;
                                        const isThisWrongChoice = isSubmitted && isSelected && !isCorrect;

                                        let optClass = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800';
                                        if (isSelected && !isSubmitted) {
                                            optClass = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-500/20';
                                        } else if (isThisTheCorrectAnswer) {
                                            optClass = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                                        } else if (isThisWrongChoice) {
                                            optClass = 'bg-rose-100 border-rose-500 text-rose-950 line-through';
                                        }

                                        return `
                                            <button type="button" 
                                                ${isSubmitted ? 'disabled' : `onclick="window.grammarClinicEngine.selectQuizOption(${qIdx}, ${optIdx})"`}
                                                class="w-full text-left p-3 rounded-xl border transition-all text-xs sm:text-sm flex items-center justify-between gap-3 ${optClass} ${isSubmitted ? 'cursor-default' : 'cursor-pointer'}">
                                                <div class="flex items-center gap-2.5 min-w-0">
                                                    <span class="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-mono shrink-0 font-bold">
                                                        ${optIdx + 1}
                                                    </span>
                                                    <span class="truncate">${opt}</span>
                                                </div>
                                                ${isThisTheCorrectAnswer ? `
                                                    <i data-lucide="check" class="w-4 h-4 text-emerald-700 shrink-0"></i>
                                                ` : (isThisWrongChoice ? `
                                                    <i data-lucide="x" class="w-4 h-4 text-rose-600 shrink-0"></i>
                                                ` : '')}
                                            </button>
                                        `;
                                    }).join('')}
                                </div>

                                <!-- 제출 후 해설 박스 -->
                                ${isSubmitted ? `
                                    <div class="p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-slate-700 space-y-1 animate-in fade-in duration-200">
                                        <div class="font-bold text-slate-900 flex items-center gap-1.5">
                                            <i data-lucide="check-circle" class="w-3.5 h-3.5 text-emerald-600"></i>
                                            <span>정답: ${qItem.ans + 1}번 (${qItem.options[qItem.ans]})</span>
                                        </div>
                                        <p class="leading-relaxed mt-1 text-slate-600">${qItem.exp}</p>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    })}
                </div>

                <!-- 제출 버튼 또는 완료 요약 배너 -->
                <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button type="button" 
                        onclick="window.grammarClinicEngine.setStep(2)"
                        class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-serif font-semibold text-xs transition-colors flex items-center gap-1.5">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i>
                        <span>2단계 밑줄 어법 다시보기</span>
                    </button>

                    ${!isSubmitted ? `
                        <button type="button" 
                            onclick="window.grammarClinicEngine.submitQuiz()"
                            class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-serif font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer">
                            <i data-lucide="check-check" class="w-4 h-4"></i>
                            <span>5문항 채점 및 결과 확인</span>
                        </button>
                    ` : `
                        <div class="flex flex-wrap items-center gap-2">
                            <button type="button" 
                                onclick="window.grammarClinicEngine.openScheduleModalFromClinic()"
                                class="px-4 py-2 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 font-serif font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
                                title="이 단원을 플래너 일정에 등록">
                                <i data-lucide="calendar-plus" class="w-3.5 h-3.5 text-emerald-700"></i>
                                <span>📅 플래너 계획 등록</span>
                            </button>
                            <button type="button" 
                                onclick="window.grammarClinicEngine.retryQuiz()"
                                class="px-4 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-serif font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer">
                                <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                                <span>다시 풀기</span>
                            </button>
                            <button type="button" 
                                onclick="window.grammarClinicEngine.closeClinicModal()"
                                class="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer">
                                <span>단원 목록으로 돌아가기</span>
                                <i data-lucide="check" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                    `}
                </div>
            </div>
        `;
    }

    selectQuizOption(qIdx, optIdx) {
        if (this.quizSubmitted) return;
        this.quizAnswers[qIdx] = optIdx;
        this.renderModalContent();
    }

    submitQuiz() {
        const unit = this.activeUnit;
        const questions = unit.questions || [];

        // 미선택 문항 확인
        const unselectedIdx = this.quizAnswers.findIndex(ans => ans === null);
        if (unselectedIdx !== -1) {
            alert(`${unselectedIdx + 1}번 문항의 정답을 선택해 주세요.`);
            return;
        }

        // 채점 및 오답노트 자동 등록
        let score = 0;
        questions.forEach((qItem, idx) => {
            const userAns = this.quizAnswers[idx];
            if (userAns === qItem.ans) {
                score++;
            } else {
                // 오답노트에 자동 등록
                if (window.storage && typeof window.storage.recordWrongAnswer === 'function') {
                    const unitLabel = unit.levelInfo && unit.levelInfo.isSpecial ? `특강 ${unit.unitNo}강` : `Unit ${unit.unitNo}`;
                    window.storage.recordWrongAnswer({
                        sourceType: 'grammar',
                        passageId: `grammar_unit_${unit.unitId || unit.unitNo}`,
                        passageTitle: `${unit.levelInfo ? `[${unit.levelInfo.badge}] ` : ''}${unitLabel}. ${unit.title}`,
                        questionText: qItem.q,
                        userChoice: qItem.options[userAns] || '',
                        correctChoice: qItem.options[qItem.ans] || '',
                        explanation: qItem.exp || '',
                        options: qItem.options,
                        correctIndex: qItem.ans
                    });
                }
            }
        });

        this.quizSubmitted = true;
        this.quizScore = score;

        // 별점 계산 (5점: 3스타, 4점: 2스타, 1~3점: 1스타)
        let stars = 1;
        if (score === 5) stars = 3;
        else if (score >= 4) stars = 2;

        // 경험치(EXP) 보너스 지급
        const expAwarded = score === 5 ? 50 : (score >= 3 ? 30 : 15);
        if (window.storage && typeof window.storage.addExp === 'function') {
            const unitLabel = unit.levelInfo && unit.levelInfo.isSpecial ? `특강 ${unit.unitNo}강` : `Unit ${unit.unitNo}`;
            window.storage.addExp(expAwarded, `문법 클리닉 ${unit.levelInfo ? `[${unit.levelInfo.badge}] ` : ''}${unitLabel} 완료`);
        }

        // 진척도 저장
        this.saveUnitProgress(unit.unitId || unit.unitNo, {
            completed: true,
            score: score,
            stars: stars,
            completedAt: new Date().toISOString()
        }, unit.levelInfo ? unit.levelInfo.levelCode : null);

        // 축하 폭죽 효과 (4점 이상)
        if (score >= 4 && window.confetti) {
            window.confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
        }

        if (window.app && typeof window.app.renderTodayLearningBox === 'function') {
            window.app.renderTodayLearningBox();
        }
        if (window.plannerEngine && typeof window.plannerEngine.render === 'function') {
            window.plannerEngine.render();
        }

        this.renderModalContent();
    }

    retryQuiz() {
        this.quizAnswers = [null, null, null, null, null];
        this.quizSubmitted = false;
        this.quizScore = 0;
        this.renderModalContent();
    }

    // ------------------------------------------------------------------------
    // 문법 클리닉 단원 플래너 배정 기능 (Planner Scheduling)
    // ------------------------------------------------------------------------
    openScheduleModal(unitRef = null, levelCode = null) {
        this.scheduleMode = 'single';
        const found = unitRef ? this.findUnit(unitRef, levelCode) : (this.activeUnit ? { unit: this.activeUnit, level: this.activeUnit.levelInfo } : null);
        this.scheduleTargetUnitId = found ? found.unit.unitId : (this.data[0]?.units[0]?.unitId || 'lv1_u1');
        this.scheduleTargetUnitNo = found ? found.unit.unitNo : 1;
        this.scheduleTargetLevelCode = found ? found.level.levelCode : (this.currentLevelCode || 'lv1');
        this.populateScheduleModal();
        this.setScheduleMode('single');
        const modal = document.getElementById('modal-grammar-schedule');
        if (modal) modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    openLevelBatchScheduleModal(levelCode = null) {
        this.scheduleMode = 'batch';
        this.scheduleTargetLevelCode = levelCode || this.currentLevelCode || 'lv1';
        this.populateScheduleModal();
        this.setScheduleMode('batch');
        const modal = document.getElementById('modal-grammar-schedule');
        if (modal) modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    openScheduleModalFromClinic() {
        if (!this.activeUnit) return;
        this.openScheduleModal(this.activeUnit.unitId || this.activeUnit.unitNo, this.activeUnit.levelInfo ? this.activeUnit.levelInfo.levelCode : null);
    }

    openScheduleModalForDate(dateStr) {
        this.openScheduleModal(null);
        const singleDateInput = document.getElementById('grammar-sched-single-date');
        if (singleDateInput && dateStr) {
            singleDateInput.value = dateStr;
        }
    }

    openPlannerScheduleModal() {
        const selectedDate = (window.plannerEngine && window.plannerEngine.selectedDateStr) 
            ? window.plannerEngine.selectedDateStr 
            : (window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10));
        this.openScheduleModal(null);
        const singleDateInput = document.getElementById('grammar-sched-single-date');
        if (singleDateInput && selectedDate) {
            singleDateInput.value = selectedDate;
        }
    }

    closeScheduleModal() {
        const modal = document.getElementById('modal-grammar-schedule');
        if (modal) modal.classList.add('hidden');
    }

    setScheduleMode(mode) {
        this.scheduleMode = mode;
        const singleBtn = document.getElementById('grammar-sched-tab-single');
        const batchBtn = document.getElementById('grammar-sched-tab-batch');
        const singleArea = document.getElementById('grammar-sched-single-area');
        const batchArea = document.getElementById('grammar-sched-batch-area');

        if (mode === 'single') {
            if (singleBtn) singleBtn.className = 'flex-1 py-2 rounded-lg bg-white text-slate-900 shadow-2xs transition-all cursor-pointer';
            if (batchBtn) batchBtn.className = 'flex-1 py-2 rounded-lg text-slate-500 hover:text-slate-900 transition-all cursor-pointer';
            if (singleArea) singleArea.classList.remove('hidden');
            if (batchArea) batchArea.classList.add('hidden');
        } else {
            if (singleBtn) singleBtn.className = 'flex-1 py-2 rounded-lg text-slate-500 hover:text-slate-900 transition-all cursor-pointer';
            if (batchBtn) batchBtn.className = 'flex-1 py-2 rounded-lg bg-white text-slate-900 shadow-2xs transition-all cursor-pointer';
            if (singleArea) singleArea.classList.add('hidden');
            if (batchArea) batchArea.classList.remove('hidden');
            this.updateBatchSchedulePreview();
        }
        if (window.lucide) window.lucide.createIcons();
    }

    populateScheduleModal() {
        // 단일 단원 모드 드롭다운
        const unitSelect = document.getElementById('grammar-sched-unit-select');
        if (unitSelect) {
            const options = [];
            this.data.forEach(lvl => {
                const groupTitle = lvl.isSpecial ? `🎓 [특강] ${lvl.badge} - ${lvl.levelName}` : `📚 [정규] ${lvl.badge} (${lvl.levelName})`;
                options.push(`<optgroup label="${groupTitle}">`);
                (lvl.units || []).forEach(u => {
                    const unitLabel = lvl.isSpecial ? `특강 ${u.unitNo}강. ${u.title}` : `Unit ${u.unitNo}. ${u.title}`;
                    const isSelected = (u.unitId && u.unitId === this.scheduleTargetUnitId) || (Number(u.legacyUnitNo) === Number(this.scheduleTargetUnitNo));
                    options.push(`<option value="${u.unitId || u.unitNo}" ${isSelected ? 'selected' : ''}>[${lvl.badge}] ${unitLabel} (${u.part})</option>`);
                });
                options.push(`</optgroup>`);
            });
            unitSelect.innerHTML = options.join('');
        }

        const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
        const defaultDate = (window.plannerEngine && window.plannerEngine.selectedDateStr) 
            ? window.plannerEngine.selectedDateStr 
            : todayStr;
        const singleDateInput = document.getElementById('grammar-sched-single-date');
        if (singleDateInput) {
            singleDateInput.value = defaultDate;
        }

        // 레벨 일괄 모드
        const levelSelect = document.getElementById('grammar-sched-level-select');
        if (levelSelect) {
            levelSelect.innerHTML = this.data.map(lvl => `
                <option value="${lvl.levelCode}" ${lvl.levelCode === this.scheduleTargetLevelCode ? 'selected' : ''}>
                    ${lvl.isSpecial ? '🎓 [특강] ' : '📚 [정규] '}${lvl.badge} - ${lvl.levelName} (${lvl.targetGrade} • ${(lvl.units || []).length}단원)
                </option>
            `).join('');
        }

        const batchDateInput = document.getElementById('grammar-sched-batch-start-date');
        if (batchDateInput && !batchDateInput.value) {
            batchDateInput.value = todayStr;
        }

        this.onScheduleLevelChanged(this.scheduleTargetLevelCode);
        this.setScheduleMode(this.scheduleMode);
    }

    setQuickDate(offsetDays) {
        const d = new Date();
        d.setDate(d.getDate() + offsetDays);
        const dateStr = d.toISOString().slice(0, 10);
        const singleDateInput = document.getElementById('grammar-sched-single-date');
        if (singleDateInput) singleDateInput.value = dateStr;
    }

    onScheduleLevelChanged(levelCode) {
        this.scheduleTargetLevelCode = levelCode;
        const lvl = this.data.find(l => l.levelCode === levelCode) || this.data[0];
        const startSelect = document.getElementById('grammar-sched-start-unit-select');
        if (startSelect && lvl) {
            const totalUnits = (lvl.units || []).length;
            startSelect.innerHTML = (lvl.units || []).map((u, idx) => {
                const label = lvl.isSpecial ? `특강 ${u.unitNo}강. ${u.title}` : `Unit ${u.unitNo}. ${u.title}`;
                return `
                    <option value="${idx}">
                        ${label} (${idx + 1}회차부터 총 ${totalUnits - idx}단원 배정)
                    </option>
                `;
            }).join('');
        }
        this.updateBatchSchedulePreview();
    }

    setBatchScheduleDaysPreset(preset) {
        const presets = {
            all: [0, 1, 2, 3, 4, 5, 6],
            weekdays: [1, 2, 3, 4, 5],
            mwf: [1, 3, 5],
            tt: [2, 4],
            weekend: [6, 0]
        };
        const active = presets[preset] || presets.all;
        document.querySelectorAll('.grammar-batch-day-check').forEach(cb => {
            cb.checked = active.includes(Number(cb.value));
        });

        document.querySelectorAll('.grammar-batch-preset').forEach(btn => {
            const isMatch = btn.dataset.preset === preset;
            btn.className = `grammar-batch-preset px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
                isMatch ? 'bg-emerald-700 text-white border-emerald-700 shadow-2xs' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
            }`;
        });

        this.updateBatchSchedulePreview();
    }

    getBatchScheduleSelectedDays() {
        const checked = [];
        document.querySelectorAll('.grammar-batch-day-check:checked').forEach(cb => {
            checked.push(Number(cb.value));
        });
        return checked;
    }

    updateBatchSchedulePreview() {
        const lvl = this.data.find(l => l.levelCode === this.scheduleTargetLevelCode) || this.data[0];
        const startSelect = document.getElementById('grammar-sched-start-unit-select');
        const startIdx = startSelect ? Number(startSelect.value) : 0;
        const totalUnits = Math.max(1, (lvl.units || []).length - startIdx);
        const startDateInput = document.getElementById('grammar-sched-batch-start-date');
        const startDate = (startDateInput && startDateInput.value) ? startDateInput.value : new Date().toISOString().slice(0, 10);
        const selectedDays = this.getBatchScheduleSelectedDays();

        const countEl = document.getElementById('grammar-sched-preview-count');
        const datesEl = document.getElementById('grammar-sched-preview-dates');

        if (selectedDays.length === 0) {
            if (countEl) countEl.textContent = '0회차 (요일 선택 필요)';
            if (datesEl) datesEl.textContent = '학습할 요일을 최소 1개 이상 선택해 주세요.';
            return;
        }

        if (window.storage && typeof window.storage.calculateScheduledDates === 'function') {
            const dates = window.storage.calculateScheduledDates(startDate, totalUnits, selectedDays);
            if (countEl) countEl.textContent = `총 ${dates.length}회차 배정`;
            if (datesEl) datesEl.textContent = `${dates[0] || startDate} ~ ${dates[dates.length - 1] || startDate}`;
        }
    }

    executeScheduleRegistration() {
        if (!window.storage) return;

        if (this.scheduleMode === 'single') {
            const unitSelect = document.getElementById('grammar-sched-unit-select');
            const dateInput = document.getElementById('grammar-sched-single-date');
            const unitRef = unitSelect ? unitSelect.value : (this.scheduleTargetUnitId || this.scheduleTargetUnitNo);
            const targetDate = (dateInput && dateInput.value) ? dateInput.value : window.storage.getTodayDateString();

            const res = window.storage.registerGrammarUnit(unitRef, targetDate);
            if (!res) {
                alert('단원 등록에 실패했습니다. 단원 정보를 확인해 주세요.');
                return;
            }

            if (window.confetti) {
                window.confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
            }

            const unitPrefix = res.isSpecial ? `특강 ${res.unitNo}강` : `Unit ${res.unitNo}`;
            alert(`🎉 [${res.levelBadge}] ${unitPrefix}. ${res.unitTitle} 일정이\n${res.planDate} 학습 플래너에 성공적으로 등록되었습니다!`);
            this.closeScheduleModal();

            if (window.plannerEngine) {
                window.plannerEngine.render();
            }
            if (window.app && window.app.renderDashboard) {
                window.app.renderDashboard();
            }
            this.renderStatsOnly();
            if (this.activeUnit) {
                this.renderModalContent();
            }
        } else {
            const levelSelect = document.getElementById('grammar-sched-level-select');
            const startSelect = document.getElementById('grammar-sched-start-unit-select');
            const dateInput = document.getElementById('grammar-sched-batch-start-date');

            const levelCode = levelSelect ? levelSelect.value : this.scheduleTargetLevelCode;
            const startIdx = startSelect ? Number(startSelect.value) : 0;
            const startDate = (dateInput && dateInput.value) ? dateInput.value : window.storage.getTodayDateString();
            const selectedDays = this.getBatchScheduleSelectedDays();

            if (selectedDays.length === 0) {
                alert('학습을 진행할 요일을 최소 1개 이상 선택해 주세요.');
                return;
            }

            const res = window.storage.registerGrammarLevel(levelCode, startDate, selectedDays, startIdx);
            if (!res) {
                alert('레벨 일괄 배정에 실패했습니다.');
                return;
            }

            if (window.confetti) {
                window.confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
            }

            alert(`🎉 [${res.levelName}] 총 ${res.totalUnits}개 단원이 플래너에 성공적으로 배정되었습니다!\n\n` +
                  `• 배정 기간: ${res.startDate} ~ ${res.endDate}\n` +
                  `• 지정 요일에 맞추어 플래너 캘린더에 편성되었습니다.`);

            this.closeScheduleModal();

            if (window.plannerEngine) {
                window.plannerEngine.render();
            }
            if (window.app && window.app.renderDashboard) {
                window.app.renderDashboard();
            }
            this.renderStatsOnly();
            if (this.activeUnit) {
                this.renderModalContent();
            }
        }
    }
}

// 전역 인스턴스 등록
window.grammarClinicEngine = new GrammarClinicEngine();
