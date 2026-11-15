/**
 * Veritas English - 영문법 클리닉 엔진 (Grammar Clinic Engine)
 * 5대 레벨 40단원 체계: 개념 공식 마스터 -> 밑줄 어법 클리닉 -> 실전 5제 퀴즈
 */

class GrammarClinicEngine {
    constructor() {
        this.data = window.GRAMMAR_CLINIC_BANK || [];
        this.currentLevelCode = 'lv1';
        this.searchQuery = '';
        
        // 활성화된 단원 학습 상태
        this.activeUnit = null;
        this.activeStep = 1; // 1: 개념 마스터, 2: 밑줄 어법, 3: 실전 퀴즈
        this.spottingSolved = false;
        
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

    getUnitProgress(unitNo) {
        const map = this.getProgressMap();
        return map[unitNo] || null;
    }

    saveUnitProgress(unitNo, resultData) {
        try {
            const map = this.getProgressMap();
            map[unitNo] = {
                ...(map[unitNo] || {}),
                ...resultData,
                updatedAt: new Date().toISOString()
            };
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
            const prog = progressMap[u.unitNo];
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

        const currentLvlObj = this.data.find(lvl => lvl.levelCode === this.currentLevelCode) || this.data[0];
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
                            <span>중1~수능 학년별 5단계 40단원 완성</span>
                        </div>
                        <h2 class="text-2xl sm:text-3xl font-serif font-black tracking-tight text-white flex items-center gap-2">
                            <span>영문법 3단계 처방 클리닉</span>
                        </h2>
                        <p class="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                            개념 공식 암기(<span class="text-emerald-300 font-semibold">1단계</span>) ➔ 밑줄 오류 즉각 진단(<span class="text-emerald-300 font-semibold">2단계</span>) ➔ 실전 5제 출제 공식 마스터(<span class="text-emerald-300 font-semibold">3단계</span>)로 수능 29번 어법과 중·고교 서술형을 100% 정복합니다.
                        </p>
                    </div>

                    <!-- 전체 진척 요약 카드 -->
                    <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 shrink-0 min-w-[240px] flex flex-col gap-2">
                        <div class="flex items-center justify-between text-xs text-slate-300">
                            <span>현재 레벨 달성도</span>
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

            <!-- 5대 레벨 선택 탭 바 -->
            <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1">
                ${this.data.map(lvl => {
                    const isActive = lvl.levelCode === this.currentLevelCode;
                    const isRecommended = lvl.levelCode === recommendedCode;
                    const lvlStat = this.getLevelStats(lvl.levelCode);
                    return `
                        <button type="button" 
                            onclick="window.grammarClinicEngine.switchLevel('${lvl.levelCode}')"
                            class="group relative flex-1 min-w-[155px] p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                                isActive 
                                    ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20' 
                                    : 'bg-slate-50/80 hover:bg-white border-slate-200 hover:border-slate-300'
                            }">
                            ${isRecommended ? `
                                <span class="absolute -top-2 right-2 px-2 py-0.5 rounded-full bg-sky-600 text-white font-mono text-[9px] font-bold shadow-xs">
                                    추천 레벨
                                </span>
                            ` : ''}
                            <div class="flex items-center justify-between mb-1">
                                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold font-mono ${
                                    isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600 group-hover:bg-slate-300'
                                }">
                                    ${lvl.badge}
                                </span>
                                <span class="text-[11px] font-mono font-bold ${isActive ? 'text-emerald-700' : 'text-slate-400'}">
                                    ${lvlStat.completed}/8 완료
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
                        <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-serif font-bold text-base shadow-xs shrink-0">
                            Lv.${currentLvlObj.level}
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <h3 class="font-serif font-bold text-base sm:text-lg text-slate-900">${currentLvlObj.levelName}</h3>
                                <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
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
                            class="px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 font-serif font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                            title="이 레벨의 8개 전 단원을 플래너에 일괄 배정">
                            <i data-lucide="calendar-range" class="w-4 h-4 text-emerald-700"></i>
                            <span>📅 Lv.${currentLvlObj.level} 8단원 플래너 배정</span>
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
        const prog = this.getUnitProgress(unit.unitNo);
        const isCompleted = prog && prog.completed;
        const score = prog ? prog.score : 0;
        const stars = prog ? prog.stars : 0;

        const scheduled = window.storage ? window.storage.getScheduledGrammarUnit(unit.unitNo) : null;
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

        return `
            <div class="bg-white rounded-2xl border ${isCompleted ? 'border-emerald-300 ring-1 ring-emerald-200/50' : 'border-slate-200'} p-5 flex flex-col justify-between hover:shadow-lg transition-all duration-200 group">
                <div class="space-y-3">
                    <div class="flex items-center justify-between gap-2">
                        <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[10px] font-bold">
                            Unit ${unit.unitNo}
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
                            onclick="window.grammarClinicEngine.openScheduleModal(${unit.unitNo})"
                            class="px-2.5 py-1.5 rounded-xl border border-emerald-300 hover:border-emerald-600 bg-emerald-50/70 hover:bg-emerald-100 text-emerald-950 font-serif font-bold text-xs shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                            title="학습 플래너에 일정 등록">
                            <i data-lucide="calendar-plus" class="w-3.5 h-3.5 text-emerald-700"></i>
                            <span>계획 등록</span>
                        </button>
                        <button type="button" 
                            onclick="window.grammarClinicEngine.openClinicModal(${unit.unitNo})"
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
    openClinicModal(unitNo) {
        // Find unit across all levels
        let foundUnit = null;
        let foundLevel = null;
        for (const lvl of this.data) {
            const u = lvl.units.find(x => x.unitNo === unitNo);
            if (u) {
                foundUnit = u;
                foundLevel = lvl;
                break;
            }
        }
        if (!foundUnit) return;

        this.activeUnit = { ...foundUnit, levelInfo: foundLevel };
        this.activeStep = 1;
        this.spottingSolved = false;
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

        if (headerTitle) headerTitle.textContent = `Unit ${unit.unitNo}. ${unit.title}`;
        if (headerBadge) {
            headerBadge.textContent = `${unit.levelInfo ? unit.levelInfo.badge : ''} • ${unit.part}`;
        }
        if (schedBadge) {
            const scheduled = window.storage ? window.storage.getScheduledGrammarUnit(unit.unitNo) : null;
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

        return `
            <div class="space-y-6 animate-in fade-in duration-200">
                <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                    <div class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 text-sm">
                        <i data-lucide="book-open" class="w-4 h-4"></i>
                    </div>
                    <div>
                        <h4 class="font-serif font-bold text-sm text-emerald-950">핵심 문법 공식 & 출제 패턴</h4>
                        <p class="text-xs text-emerald-800 mt-0.5">${unit.summary}</p>
                    </div>
                </div>

                <!-- 공식 카드 목록 -->
                <div class="space-y-5">
                    ${formulaCards.map((fc, idx) => `
                        <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3.5">
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-mono font-bold">
                                    ${idx + 1}
                                </span>
                                <h5 class="font-serif font-bold text-base text-slate-900">${fc.name}</h5>
                            </div>

                            <!-- 핵심 공식 박스 -->
                            <div class="p-3.5 rounded-xl bg-slate-900 text-emerald-300 font-mono text-xs sm:text-sm font-semibold tracking-wide border border-emerald-500/30 flex items-center justify-between">
                                <span>📐 ${fc.formula}</span>
                            </div>

                            <!-- 대표 예문 -->
                            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                                <div class="text-xs sm:text-sm text-slate-800 font-medium">
                                    <strong class="text-slate-500 font-normal mr-1.5">[예문]</strong>
                                    ${fc.example}
                                </div>
                                <button type="button" 
                                    onclick="window.ttsEngine && window.ttsEngine.speak('${fc.example.replace(/'/g, "\\'")}')" 
                                    class="p-2 rounded-lg bg-white hover:bg-slate-200 text-slate-600 transition-colors shrink-0 shadow-2xs" 
                                    title="원어민 발음 듣기">
                                    <i data-lucide="volume-2" class="w-4 h-4"></i>
                                </button>
                            </div>

                            <!-- 출제자의 함정 -->
                            ${fc.trap ? `
                                <div class="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                                    <i data-lucide="alert-triangle" class="w-4 h-4 text-amber-600 shrink-0 mt-0.5"></i>
                                    <div>
                                        <strong class="font-bold text-amber-950">출제자의 함정:</strong> ${fc.trap}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>

                <!-- 하단 버튼: 스텝 2로 이동 -->
                <div class="pt-4 flex justify-end">
                    <button type="button" 
                        onclick="window.grammarClinicEngine.setStep(2)"
                        class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-serif font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer">
                        <span>개념 완료! 2단계 [밑줄 오류 찾기] 도전</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // ------------------------------------------------------------------------
    // STEP 2: 밑줄 어법 클리닉 (Error Spotting Clinic)
    // ------------------------------------------------------------------------
    renderStep2Spotting() {
        const unit = this.activeUnit;
        const drills = unit.spottingDrills || [];
        const drill = drills[0];

        if (!drill) {
            return `
                <div class="py-12 text-center">
                    <p class="text-sm text-slate-500">등록된 밑줄 어법 문제가 없습니다.</p>
                    <button type="button" onclick="window.grammarClinicEngine.setStep(3)" class="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">3단계 실전 퀴즈로 바로가기</button>
                </div>
            `;
        }

        const isSolved = this.spottingSolved;

        return `
            <div class="space-y-6 animate-in fade-in duration-200">
                <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-start gap-3">
                    <div class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 text-sm">
                        <i data-lucide="search" class="w-4 h-4"></i>
                    </div>
                    <div>
                        <h4 class="font-serif font-bold text-sm text-indigo-950">밑줄 어법 클리닉 미션</h4>
                        <p class="text-xs text-indigo-800 mt-0.5">다음 문장에서 어법상 <strong class="underline decoration-indigo-500 decoration-2">틀린 부분 하나</strong>를 클릭하여 즉시 진단하고 수정하세요.</p>
                    </div>
                </div>

                <!-- 문제 카드 -->
                <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
                    <div class="text-xs font-serif font-bold text-slate-500">
                        [수능·내신 킬러 어법 처방전]
                    </div>

                    <!-- 밑줄 선택 문장 영역 -->
                    <div class="p-6 rounded-2xl bg-slate-900 text-white font-serif text-base sm:text-lg leading-loose tracking-wide">
                        <p class="flex flex-wrap items-center gap-y-3 gap-x-2">
                            ${drill.underlined.map((word, idx) => `
                                <button type="button" 
                                    id="spot-btn-${idx}"
                                    onclick="window.grammarClinicEngine.checkSpotting(${idx}, ${drill.wrongIndex})"
                                    class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border-2 transition-all font-mono font-medium cursor-pointer ${
                                        isSolved && idx === drill.wrongIndex
                                            ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300 ring-2 ring-emerald-400/50'
                                            : 'border-slate-600 hover:border-amber-400 hover:bg-amber-400/10 text-slate-100'
                                    }">
                                    <span class="text-xs px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-bold">
                                        ${idx + 1}
                                    </span>
                                    <span class="underline decoration-1 underline-offset-4">${word}</span>
                                </button>
                            `).join(' ')}
                        </p>
                    </div>

                    <!-- 피드백 메시지 컨테이너 -->
                    <div id="spotting-feedback-container">
                        ${isSolved ? this.renderSpottingSolvedFeedback(drill) : `
                            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                                <i data-lucide="info" class="w-4 h-4 text-slate-400 shrink-0"></i>
                                <span>틀렸다고 생각되는 밑줄 번호를 클릭하세요. 정답 여부와 수정 공식이 즉시 공개됩니다.</span>
                            </div>
                        `}
                    </div>
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
                            isSolved ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        } font-serif font-bold text-sm transition-all flex items-center gap-2">
                        <span>3단계 [실전 5제 퀴즈] 도전</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;
    }

    checkSpotting(clickedIdx, wrongIdx) {
        const feedbackContainer = document.getElementById('spotting-feedback-container');
        const nextBtn = document.getElementById('spotting-next-step-btn');
        const drill = this.activeUnit.spottingDrills[0];

        if (clickedIdx === wrongIdx) {
            // 정답!
            this.spottingSolved = true;
            if (window.confetti) {
                window.confetti({ particleCount: 30, spread: 60, origin: { y: 0.6 } });
            }
            if (feedbackContainer) {
                feedbackContainer.innerHTML = this.renderSpottingSolvedFeedback(drill);
            }
            // 버튼 스타일 업데이트
            const correctBtn = document.getElementById(`spot-btn-${clickedIdx}`);
            if (correctBtn) {
                correctBtn.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border-2 border-emerald-400 bg-emerald-500/20 text-emerald-300 ring-2 ring-emerald-400/50 font-mono font-medium cursor-pointer';
            }
            if (nextBtn) {
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
                            <strong class="font-bold text-rose-950">오답입니다:</strong> [${clickedIdx + 1}번] '${drill.underlined[clickedIdx]}'은(는) 올바른 어법입니다. 주어-동사의 수일치, 시제 또는 품사 연결을 다시 확인하세요!
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
                <div class="flex items-center gap-2 text-emerald-800 font-serif font-bold text-sm">
                    <i data-lucide="check-circle" class="w-5 h-5 text-emerald-600"></i>
                    <span>정답입니다! 밑줄 오류를 완벽하게 진단했습니다.</span>
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
                                    <div class="flex items-start gap-2.5">
                                        <span class="w-6 h-6 rounded-lg ${
                                            isSubmitted 
                                                ? (isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white') 
                                                : 'bg-slate-900 text-white'
                                        } flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                                            Q${qIdx + 1}
                                        </span>
                                        <h5 class="font-serif font-bold text-sm sm:text-base text-slate-900 whitespace-pre-line leading-relaxed">
                                            ${qItem.q}
                                        </h5>
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
                    window.storage.recordWrongAnswer({
                        sourceType: 'grammar',
                        passageId: `grammar_unit_${unit.unitNo}`,
                        passageTitle: `Lv.${unit.levelInfo ? unit.levelInfo.level : ''} Unit ${unit.unitNo}. ${unit.title}`,
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
            window.storage.addExp(expAwarded, `문법 클리닉 Unit ${unit.unitNo} 완료`);
        }

        // 진척도 저장
        this.saveUnitProgress(unit.unitNo, {
            completed: true,
            score: score,
            stars: stars,
            completedAt: new Date().toISOString()
        });

        // 축하 폭죽 효과 (4점 이상)
        if (score >= 4 && window.confetti) {
            window.confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
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
    openScheduleModal(unitNo = null) {
        this.scheduleMode = 'single';
        this.scheduleTargetUnitNo = unitNo ? Number(unitNo) : (this.activeUnit ? this.activeUnit.unitNo : 1);
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
        this.openScheduleModal(this.activeUnit.unitNo);
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
                options.push(`<optgroup label="${lvl.badge} (${lvl.levelName})">`);
                (lvl.units || []).forEach(u => {
                    options.push(`<option value="${u.unitNo}" ${Number(u.unitNo) === Number(this.scheduleTargetUnitNo) ? 'selected' : ''}>Unit ${u.unitNo}. ${u.title} [${u.part}]</option>`);
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
                    ${lvl.badge} - ${lvl.levelName} (${lvl.targetGrade} • 8단원)
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
            startSelect.innerHTML = (lvl.units || []).map((u, idx) => `
                <option value="${idx}">
                    Unit ${u.unitNo}. ${u.title} (${idx + 1}회차부터 총 ${8 - idx}단원 배정)
                </option>
            `).join('');
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
            const unitNo = unitSelect ? Number(unitSelect.value) : this.scheduleTargetUnitNo;
            const targetDate = (dateInput && dateInput.value) ? dateInput.value : window.storage.getTodayDateString();

            const res = window.storage.registerGrammarUnit(unitNo, targetDate);
            if (!res) {
                alert('단원 등록에 실패했습니다. 단원 정보를 확인해 주세요.');
                return;
            }

            if (window.confetti) {
                window.confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
            }

            alert(`🎉 [Unit ${res.unitNo}. ${res.unitTitle}] 일정이\n${res.planDate} 학습 플래너에 성공적으로 등록되었습니다!`);
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
