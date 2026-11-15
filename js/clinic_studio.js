/**
 * VERITAS ENGLISH - 3대 부교재 완권 출판 스튜디오 엔진 (ClinicStudioEngine)
 * - 📗 [문법 Clinic] • 📘 [독해 Clinic] • 📙 [쓰기 Clinic]
 * - [본교재] vs [정답 및 해설 (문제 답안지 & 풀이)] 완벽 분리
 * - [교재 전체 (완권)] 메인 보기 & 인쇄 + [개별 단원] 선택 지원
 * - 초안의 풍부하고 완성도 높은 원문 콘텐츠 100% 완전 복원 (개념, 20제 6대 유형, 킬러 서술형, 오답노트 전 문항)
 * - 독립된 [교재 목차 (Table of Contents)] 및 [3회독 스터디 플래너] 전용 페이지 탑재
 * - 엄격한 A4 시트(210mm x 297mm) 페이지 구별(Pagination) 조판으로 내용 잘림 100% 방지
 */

(function (window) {
    'use strict';

    function escapeHtml(str) {
        if (str === null || str === undefined) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    // 권별 테마 메타정보
    const THEME_META = {
        lv0: {
            titleKo: '초등 기초 영문법',
            subKo: '품사 & 기초 어순 완성편',
            themeName: 'Sky & Mint',
            primaryHex: '#0284c7',
            accentHex: '#0ea5e9',
            badgeClass: 'bg-sky-100 text-sky-800 border-sky-300'
        },
        lv1: {
            titleKo: '중등 내신 입문 [중1]',
            subKo: '문장의 5형식 & 기초 시제 완성편',
            themeName: 'Emerald & Pine',
            primaryHex: '#059669',
            accentHex: '#10b981',
            badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300'
        },
        lv2: {
            titleKo: '중등 내신 완성 [중2]',
            subKo: 'to부정사·현재완료·수동태 완성편',
            themeName: 'Indigo & Royal',
            primaryHex: '#4f46e5',
            accentHex: '#6366f1',
            badgeClass: 'bg-indigo-100 text-indigo-800 border-indigo-300'
        },
        lv3: {
            titleKo: '중등 내신 심화 [중3]',
            subKo: '분사구문·가정법·관계부사 심화편',
            themeName: 'Deep Blue & Navy',
            primaryHex: '#2563eb',
            accentHex: '#1d4ed8',
            badgeClass: 'bg-blue-100 text-blue-800 border-blue-300'
        },
        lv4: {
            titleKo: '고교 내신 마스터 [고1·2]',
            subKo: '어법 수일치·준동사·도치 마스터편',
            themeName: 'Crimson & Rose',
            primaryHex: '#e11d48',
            accentHex: '#be123c',
            badgeClass: 'bg-rose-100 text-rose-800 border-rose-300'
        },
        lv5: {
            titleKo: '수능 1등급 킬러 [고3·수능]',
            subKo: '평가원 29번 어법 & 고난도 구문편',
            themeName: 'Imperial Gold',
            primaryHex: '#d97706',
            accentHex: '#b45309',
            badgeClass: 'bg-amber-100 text-amber-900 border-amber-300'
        },
        sp_terms: {
            titleKo: '문법 용어 개념 특강',
            subKo: '품사와 문장성분 1:1 직결 독해편',
            themeName: 'Royal Purple',
            primaryHex: '#7c3aed',
            accentHex: '#8b5cf6',
            badgeClass: 'bg-purple-100 text-purple-900 border-purple-300'
        },
        sp_writing: {
            titleKo: '서술형 핵심 구문 특강',
            subKo: '내신 서술형 단골 구문 정복편',
            themeName: 'Royal Purple',
            primaryHex: '#7c3aed',
            accentHex: '#8b5cf6',
            badgeClass: 'bg-purple-100 text-purple-900 border-purple-300'
        },
        sp_csat: {
            titleKo: '수능 29번 킬러 특강',
            subKo: '평가원 10개년 출제 공식 TOP 10',
            themeName: 'Royal Purple',
            primaryHex: '#7c3aed',
            accentHex: '#8b5cf6',
            badgeClass: 'bg-purple-100 text-purple-900 border-purple-300'
        },
        sp_vs: {
            titleKo: '혼동 문법 VS 특강',
            subKo: '헷갈리는 문법 대조 클리닉편',
            themeName: 'Royal Purple',
            primaryHex: '#7c3aed',
            accentHex: '#8b5cf6',
            badgeClass: 'bg-purple-100 text-purple-900 border-purple-300'
        }
    };

    class ClinicStudioEngine {
        constructor() {
            this.currentMode = 'grammar'; // 'grammar' | 'reading' | 'writing'
            this.currentLevelCode = 'lv1';
            this.currentUnitNo = 1;
            this.currentScope = 'all'; // 'all' (교재 전체 완권) | 'single' (개별 단원)
            this.viewRole = 'main';    // 'main' (본교재) | 'answers' (정답 및 해설 - 문제 답안지 & 풀이)
            this.initialized = false;
        }

        init() {
            if (this.initialized) return;
            this.bindEvents();
            this.initialized = true;
        }

        bindEvents() {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    const modal = document.getElementById('modal-clinic-studio');
                    if (modal && !modal.classList.contains('hidden')) {
                        this.close();
                    }
                }
            });
        }

        getGrammarData() {
            return window.GRAMMAR_STUDIO_EXT_DATA || [];
        }

        getReadingData() {
            return window.READING_CLINIC_DATA || [];
        }

        getWritingData() {
            return window.WRITING_CLINIC_DATA || [];
        }

        open(mode = 'grammar', levelCode = 'lv1', unitNo = 1, scope = 'all', role = 'main') {
            this.init();
            this.currentMode = mode || 'grammar';
            this.currentLevelCode = levelCode || 'lv1';
            this.currentUnitNo = parseInt(unitNo, 10) || 1;
            this.currentScope = scope || 'all'; // 메인 기본값: 교재 전체 완권
            this.viewRole = role || 'main';     // 기본값: 본교재

            const modal = document.getElementById('modal-clinic-studio');
            if (modal) {
                modal.classList.remove('hidden');
                document.body.classList.add('overflow-hidden');
            }

            this.render();
        }

        close() {
            const modal = document.getElementById('modal-clinic-studio');
            if (modal) {
                modal.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }
        }

        setMode(mode) {
            this.currentMode = mode;
            this.render();
        }

        setLevel(levelCode) {
            this.currentLevelCode = levelCode;
            this.currentUnitNo = 1;
            this.render();
        }

        setUnit(unitNo) {
            this.currentUnitNo = parseInt(unitNo, 10) || 1;
            this.render();
        }

        setScope(scope) {
            this.currentScope = scope;
            this.render();
        }

        setRole(role) {
            this.viewRole = role;
            this.render();
        }

        printPaper() {
            window.print();
        }

        getCurrentDataBank() {
            if (this.currentMode === 'grammar') return this.getGrammarData();
            if (this.currentMode === 'reading') return this.getReadingData();
            if (this.currentMode === 'writing') return this.getWritingData();
            return [];
        }

        getModeMeta() {
            if (this.currentMode === 'grammar') {
                return {
                    nameKo: '문법 Clinic',
                    enTitle: 'VERITAS GRAMMAR CLINIC',
                    codePrefix: 'GC',
                    desc: '4대 실전 개념 & 20제 6대 유형 & 킬러 서술형 집중 훈련 워크북'
                };
            }
            if (this.currentMode === 'reading') {
                return {
                    nameKo: '독해 Clinic',
                    enTitle: 'VERITAS READING CLINIC',
                    codePrefix: 'RC',
                    desc: '문법 스포트라이트 & WPM 실전 지문 & 독해 3제 & 어법 2제 연계 워크북'
                };
            }
            return {
                nameKo: '쓰기 Clinic',
                enTitle: 'VERITAS WRITING CLINIC',
                codePrefix: 'WC',
                desc: '조건 영작 6제 & 직결 영작 6제 & 기출 킬러 3제 & 루브릭 전문 워크북'
            };
        }

        render() {
            const container = document.getElementById('clinic-studio-content');
            if (!container) return;

            const allLevels = this.getCurrentDataBank();
            const levelObj = allLevels.find(l => l.levelCode === this.currentLevelCode) || allLevels[0];
            if (!levelObj) {
                container.innerHTML = `<div class="p-8 text-center text-slate-500 font-serif">데이터를 불러오는 중입니다...</div>`;
                return;
            }

            // 1. 툴바 렌더링
            this.renderToolbar(levelObj, allLevels);

            // 2. 본문 렌더링
            const isAnswers = (this.viewRole === 'answers');
            let fullHtml = '';

            if (this.currentScope === 'all') {
                fullHtml = this.renderFullBook(levelObj, isAnswers);
            } else {
                fullHtml = this.renderSingleUnitView(levelObj, this.currentUnitNo, isAnswers);
            }

            container.innerHTML = fullHtml;
            if (window.lucide) window.lucide.createIcons();
        }

        renderToolbar(level, allLevels) {
            const toolbar = document.getElementById('clinic-studio-toolbar');
            if (!toolbar) return;

            const isAnswers = (this.viewRole === 'answers');

            toolbar.innerHTML = `
                <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 w-full">
                    <!-- 1열: 3대 교재 모드 탭 & 코스/레벨 선택 -->
                    <div class="flex flex-wrap items-center gap-2 sm:gap-3">
                        <div class="inline-flex p-1 rounded-2xl bg-slate-900 shadow-inner">
                            <button type="button" onclick="window.clinicStudioEngine.setMode('grammar')" 
                                class="px-3.5 py-1.5 rounded-xl font-serif text-xs font-bold transition-all ${this.currentMode === 'grammar' ? 'bg-emerald-500 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
                                📗 문법 Clinic
                            </button>
                            <button type="button" onclick="window.clinicStudioEngine.setMode('reading')" 
                                class="px-3.5 py-1.5 rounded-xl font-serif text-xs font-bold transition-all ${this.currentMode === 'reading' ? 'bg-blue-500 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
                                📘 독해 Clinic
                            </button>
                            <button type="button" onclick="window.clinicStudioEngine.setMode('writing')" 
                                class="px-3.5 py-1.5 rounded-xl font-serif text-xs font-bold transition-all ${this.currentMode === 'writing' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
                                📙 쓰기 Clinic
                            </button>
                        </div>

                        <!-- 교재 권차 셀렉터 -->
                        <select onchange="window.clinicStudioEngine.setLevel(this.value)" class="text-xs font-serif font-bold py-1.5 px-3 rounded-xl border border-slate-300 bg-white text-slate-800 shadow-2xs focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                            ${allLevels.map(l => `
                                <option value="${l.levelCode}" ${l.levelCode === this.currentLevelCode ? 'selected' : ''}>
                                    ${l.isSpecial ? '🎓 ' + l.levelName : '📚 ' + l.levelName} (${(l.units || []).length}단원)
                                </option>
                            `).join('')}
                        </select>
                    </div>

                    <!-- 2열: [교재 전체 완권 vs 개별 단원] & [본교재 vs 답안지] & 인쇄 -->
                    <div class="flex flex-wrap items-center gap-2.5">
                        <!-- 범위 셀렉터: 전체 단원(기본/메인) vs 단원별 -->
                        <div class="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
                            <button type="button" onclick="window.clinicStudioEngine.setScope('all')" 
                                class="px-3 py-1 rounded-lg text-xs font-serif font-bold transition-all ${this.currentScope === 'all' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                                📖 교재 전체 (20단원 완권)
                            </button>
                            <button type="button" onclick="window.clinicStudioEngine.setScope('single')" 
                                class="px-3 py-1 rounded-lg text-xs font-serif font-bold transition-all ${this.currentScope === 'single' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'}">
                                📄 단원별 보기
                            </button>
                        </div>

                        ${this.currentScope === 'single' ? `
                            <select onchange="window.clinicStudioEngine.setUnit(this.value)" class="text-xs font-serif font-bold py-1 px-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 shadow-2xs">
                                ${(level.units || []).map(u => `
                                    <option value="${u.unitNo}" ${u.unitNo === this.currentUnitNo ? 'selected' : ''}>
                                        Unit ${u.unitNo}. ${u.title.length > 14 ? u.title.substring(0, 14) + '...' : u.title}
                                    </option>
                                `).join('')}
                            </select>
                        ` : ''}

                        <!-- 교재 성격: 본교재 vs 정답 및 해설 -->
                        <div class="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
                            <button type="button" onclick="window.clinicStudioEngine.setRole('main')" 
                                class="px-3 py-1 rounded-lg text-xs font-serif font-bold transition-all ${!isAnswers ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                                📘 본교재
                            </button>
                            <button type="button" onclick="window.clinicStudioEngine.setRole('answers')" 
                                class="px-3 py-1 rounded-lg text-xs font-serif font-bold transition-all ${isAnswers ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
                                📝 정답 및 해설 (문제 답안지 &amp; 풀이)
                            </button>
                        </div>

                        <!-- 인쇄 버튼 -->
                        <button type="button" onclick="window.clinicStudioEngine.printPaper()" 
                            class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer">
                            <i data-lucide="printer" class="w-3.5 h-3.5 text-emerald-400"></i>
                            <span>${this.currentScope === 'all' ? '교재 전체 A4 인쇄' : '현재 단원 A4 인쇄'}</span>
                        </button>

                        <!-- 닫기 버튼 -->
                        <button type="button" onclick="window.clinicStudioEngine.close()" 
                            class="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors">
                            <i data-lucide="x" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            `;
        }

        // ======================================================================
        // [완권 출판 모드] 교재 전체 렌더러
        // ======================================================================
        renderFullBook(level, isAnswers) {
            const units = level.units || [];
            let sheetsHtml = '';

            // Sheet 1: 정규 앞표지 (Front Cover)
            sheetsHtml += this.renderCoverSheet(level, isAnswers);

            // Sheet 2: 교재 특징 및 100% 활용 가이드 (How to Study)
            sheetsHtml += this.renderHowToUseSheet(level, isAnswers);

            // Sheet 3: [교재 목차 (Table of Contents)] 전용 페이지
            sheetsHtml += this.renderDedicatedTocSheet(level, isAnswers);

            // Sheet 4: 본교재는 [3회독 스터디 플래너], 답안지는 [20단원 빠른 정답표]
            if (!isAnswers) {
                sheetsHtml += this.renderPlannerSheet(level);
            } else {
                sheetsHtml += this.renderQuickAnswerSheet(level);
            }

            // Sheet 5 ~: 20개 단원 순차 조판 (단원별 A4 시트 완결)
            units.forEach((u, uIdx) => {
                sheetsHtml += this.renderUnitSheets(level, u, isAnswers, uIdx + 1);
            });

            // Sheet Last: 뒷표지 (Back Cover)
            sheetsHtml += this.renderBackCoverSheet(level, isAnswers);

            return `
                <div class="clinic-book-container flex flex-col items-center">
                    ${sheetsHtml}
                </div>
            `;
        }

        // ======================================================================
        // [개별 단원 모드] 단원별 보기 렌더러
        // ======================================================================
        renderSingleUnitView(level, unitNo, isAnswers) {
            const unit = (level.units || []).find(u => u.unitNo === unitNo) || (level.units || [])[0];
            if (!unit) return `<div class="p-8 text-center text-slate-500">단원 데이터를 찾을 수 없습니다.</div>`;

            return `
                <div class="clinic-book-container flex flex-col items-center">
                    ${this.renderUnitSheets(level, unit, isAnswers, unit.unitNo)}
                </div>
            `;
        }

        // ======================================================================
        // 1. 앞표지 시트 (Front Cover Sheet)
        // ======================================================================
        renderCoverSheet(level, isAnswers) {
            const meta = THEME_META[level.levelCode] || THEME_META['lv1'];
            const modeMeta = this.getModeMeta();

            return `
                <div class="clinic-a4-sheet justify-between border-4 border-slate-900 bg-white p-12 text-slate-900 shadow-2xl relative overflow-hidden">
                    <div class="absolute inset-3 border border-slate-400 pointer-events-none"></div>
                    <div class="absolute inset-4 border border-dashed border-slate-300 pointer-events-none"></div>

                    <!-- 표지 상단 헤더부 -->
                    <div class="relative z-10 space-y-4 pt-4">
                        <div class="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                            <div class="flex items-center gap-2">
                                <span class="w-8 h-8 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center text-base font-black">V</span>
                                <div>
                                    <div class="font-serif font-black tracking-widest text-xs text-slate-900 uppercase">VERITAS SCHOLARS' ACADEMY</div>
                                    <div class="text-[10px] font-mono text-slate-500">Academic English Excellence Series</div>
                                </div>
                            </div>
                            <span class="px-3 py-1 rounded-full border border-slate-900 font-mono text-[11px] font-bold tracking-wider">2026 EDITION</span>
                        </div>

                        <!-- 답안지일 경우 눈에 띄는 굵직한 배지 표시 -->
                        ${isAnswers ? `
                            <div class="py-2.5 px-4 rounded-2xl bg-rose-600 text-white font-serif font-black text-center text-sm sm:text-base tracking-widest shadow-md">
                                ★ [정답 및 해설 (문제 답안지 &amp; 풀이)] ★
                            </div>
                        ` : `
                            <div class="py-1 px-3 rounded-full bg-slate-100 text-slate-700 font-mono text-xs font-semibold inline-block">
                                2022 개정 교육과정 반영 • 전국 중·고교 내신 및 수능 1등급 대비
                            </div>
                        `}
                    </div>

                    <!-- 표지 중앙 타이틀부 -->
                    <div class="relative z-10 my-auto text-center space-y-6 py-10">
                        <div class="space-y-2">
                            <div class="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-emerald-800 uppercase">
                                ${modeMeta.enTitle}
                            </div>
                            <h1 class="font-serif font-black text-4xl sm:text-5xl text-slate-950 tracking-tight leading-none">
                                ${modeMeta.nameKo}
                            </h1>
                            <div class="text-xl sm:text-2xl font-serif font-bold text-slate-700 pt-2">
                                ${level.isSpecial ? level.levelName : '제' + (level.levelCode.replace('lv', '')) + '권. ' + meta.titleKo}
                            </div>
                            <p class="text-xs sm:text-sm text-slate-500 font-sans max-w-md mx-auto pt-1">
                                ${meta.subKo} • 총 ${(level.units || []).length}단원 완결 마스터편
                            </p>
                        </div>

                        <div class="w-16 h-1 bg-slate-900 mx-auto rounded-full"></div>

                        <!-- 3대 클리닉 트릴로지 심볼 -->
                        <div class="inline-flex items-center gap-4 px-6 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-600">
                            <span>문법 (Grammar)</span>
                            <span>•</span>
                            <span>독해 (Reading)</span>
                            <span>•</span>
                            <span>쓰기 (Writing)</span>
                        </div>
                    </div>

                    <!-- 표지 하단 사용자 기재란 및 발행처 -->
                    <div class="relative z-10 space-y-6 pb-2">
                        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-4 text-xs font-serif">
                            <div>
                                <span class="text-slate-400 text-[11px] block font-mono">School / Grade</span>
                                <span class="text-slate-800 font-bold">학교: _________________ 학년: ____</span>
                            </div>
                            <div>
                                <span class="text-slate-400 text-[11px] block font-mono">Student Name</span>
                                <span class="text-slate-800 font-bold">이름: _________________</span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-200">
                            <span>VERITAS SCHOLARS' PRESS</span>
                            <span>All Rights Reserved &copy; 2026</span>
                        </div>
                    </div>
                </div>
            `;
        }

        // ======================================================================
        // 2. 교재 구성 및 100% 활용 가이드 시트 (How to Study Sheet)
        // ======================================================================
        renderHowToUseSheet(level, isAnswers) {
            const modeMeta = this.getModeMeta();

            return `
                <div class="clinic-a4-sheet justify-between border border-slate-300 bg-white p-10 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-3 flex items-end justify-between">
                        <div>
                            <div class="text-[10px] font-mono text-emerald-800 font-bold">STRUCTURE &amp; METHODOLOGY</div>
                            <h2 class="text-xl font-serif font-black text-slate-900">교재 구성 및 100% 마스터 가이드</h2>
                        </div>
                        <span class="text-xs font-mono text-slate-400">Page 02</span>
                    </div>

                    <div class="space-y-6 my-auto text-xs leading-relaxed font-sans">
                        <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                            <h3 class="font-serif font-bold text-sm text-emerald-950 flex items-center gap-2">
                                <i data-lucide="award" class="w-4 h-4 text-emerald-600"></i>
                                <span>『${modeMeta.nameKo}』의 핵심 교육 설계 원칙</span>
                            </h3>
                            <p class="text-slate-700 text-xs">
                                억지스러운 이론적 틀을 지양하고, 실제 내신 서술형 및 수능 29번 어법에서 요구하는 정확한 개념과 실전 적용 훈련을 결합하여 최소 시간 투자로 최대 학습 성취를 달성하도록 설계되었습니다.
                            </p>
                        </div>

                        ${this.currentMode === 'grammar' ? `
                            <div class="space-y-3">
                                <h4 class="font-serif font-bold text-slate-900 text-xs border-b border-slate-200 pb-1">유닛별 5대 입체 섹션 구성</h4>
                                <div class="grid grid-cols-1 gap-2.5">
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-emerald-800 font-serif">Section 1. 자연스러운 4대 실전 개념 체계</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">핵심 문법 맵(Core Map) ➔ 공식 & 1:1 대조 예문 ➔ 실전 뉘앙스/짝꿍 ➔ 내신·수능 빈출 함정 탈출 노트</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-slate-800 font-serif">Section 2. 기초 체력 빌드업 드릴 (10문항)</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">개념 즉시 점검 OX 5문항 + 문맥 동사/단어 형태 변화 5문항</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-blue-800 font-serif">Section 3. 실전 문법 적용 파이널 (20문항 6대 유형)</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">양자택일(4) + 5밑줄 어법(3) + 조건 어형변화(4) + 5지선다(5) + 문장전환(2) + 어순배열(2)</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-rose-800 font-serif">Section 4. 고난도 킬러 서술형 (3문항)</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">학교별 기출 빈출 조건 영작 및 부분 점수 감점 방지 루브릭 적용</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-slate-800 font-serif">Section 5. 복습 & 오답 클리닉 리플렉션 노트</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">핵심 키워드 자가 체크리스트 및 오답 원인 기록</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${this.currentMode === 'reading' ? `
                            <div class="space-y-3">
                                <h4 class="font-serif font-bold text-slate-900 text-xs border-b border-slate-200 pb-1">유닛별 4단계 독해 워크아웃 구성</h4>
                                <div class="grid grid-cols-1 gap-2.5">
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-blue-800 font-serif">Stage 1. 지문 속 핵심 문법 스포트라이트</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">지문에 등장하는 문법 대표 문장 2개와 [S, V, O, C] 문장 성분 도식화</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-slate-800 font-serif">Stage 2. 실전 독해 지문 & 어휘 각주</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">권장 읽기 타이머(WPM)와 지문 하단 Footnote 핵심 어휘 풀이</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-emerald-800 font-serif">Stage 3. 실전 독해 평가 3문항</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">Q1. 대의 파악(주제/제목) + Q2. 세부 내용 일치 + Q3. 문맥 논리 추론</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-rose-800 font-serif">Stage 4. 지문 기반 실전 어법 2문항</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">지문 밑줄 어법 판단 1문항 + 지문 내용 바탕 문장 변형 서술형 1문항</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${this.currentMode === 'writing' ? `
                            <div class="space-y-3">
                                <h4 class="font-serif font-bold text-slate-900 text-xs border-b border-slate-200 pb-1">유닛별 3단계 집중 영작 훈련 구성</h4>
                                <div class="grid grid-cols-1 gap-2.5">
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-amber-800 font-serif">Step 1. 힌트 어휘 제공 조건 영작 (6문항)</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">필수 단어를 반드시 포함하여 정확한 문법 구조로 완성하는 영작 훈련</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-slate-800 font-serif">Step 2. 우리말 해석 직결 완성 영작 (6문항)</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">단어 힌트 없이 우리말 의미를 완전한 영어 문장으로 자율 영작하는 훈련</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                                        <strong class="text-rose-800 font-serif">Step 3. 학교 기출 변형 킬러 서술형 (3문항) & 감점 방지 루브릭</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">복합 상황 조건 영작 및 수일치/시제 감점 방지 채점 기준표</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                    </div>

                    <div class="border-t border-slate-200 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>VERITAS ENGLISH CLINIC SERIES</span>
                        <span>02</span>
                    </div>
                </div>
            `;
        }

        // ======================================================================
        // 3. [교재 목차 (Table of Contents)] 전용 독립 시트
        // ======================================================================
        renderDedicatedTocSheet(level, isAnswers) {
            const units = level.units || [];
            const modeMeta = this.getModeMeta();

            // 4개 파트로 그룹화 (각 5단원씩)
            const parts = [
                { title: 'PART 1. 기본 품사 & 문장의 기초 골격', slice: units.slice(0, 5) },
                { title: 'PART 2. 동사의 시제와 서법 & 조동사', slice: units.slice(5, 10) },
                { title: 'PART 3. 준동사와 문장의 구조 심화', slice: units.slice(10, 15) },
                { title: 'PART 4. 연결사와 구문 마스터 & 고난도 특수구문', slice: units.slice(15, 20) }
            ];

            return `
                <div class="clinic-a4-sheet justify-between border border-slate-300 bg-white p-10 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-3 flex items-end justify-between">
                        <div>
                            <div class="text-[10px] font-mono text-emerald-800 font-bold uppercase">${modeMeta.enTitle}</div>
                            <h2 class="text-xl font-serif font-black text-slate-900">교재 목차 (Table of Contents)</h2>
                        </div>
                        <span class="text-xs font-mono text-slate-400">Page 03</span>
                    </div>

                    <!-- 목차 본문 (4대 파트 분류) -->
                    <div class="my-auto space-y-4 font-sans text-xs">
                        ${parts.map((p, pIdx) => `
                            <div class="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                                <div class="font-serif font-bold text-slate-900 text-xs border-b border-slate-200 pb-1 flex items-center justify-between">
                                    <span class="flex items-center gap-1.5 text-emerald-900">
                                        <span class="w-4 h-4 rounded bg-emerald-600 text-white flex items-center justify-center text-[10px] font-mono font-bold">${pIdx + 1}</span>
                                        <span>${p.title}</span>
                                    </span>
                                    <span class="text-[10px] font-mono text-slate-400">Units ${pIdx * 5 + 1} ~ ${pIdx * 5 + p.slice.length}</span>
                                </div>
                                <div class="space-y-1 pt-0.5">
                                    ${p.slice.map(u => `
                                        <div class="flex items-center justify-between text-[11px] hover:text-emerald-800 py-0.5">
                                            <span class="font-medium text-slate-800 flex items-center gap-2">
                                                <span class="font-mono text-slate-400 w-6">${u.unitNo < 10 ? '0' + u.unitNo : u.unitNo}</span>
                                                <span class="truncate max-w-[320px]">${escapeHtml(u.title)}</span>
                                            </span>
                                            <span class="font-mono text-slate-400 text-[10px]">p. ${(u.unitNo - 1) * 3 + 5}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="border-t border-slate-200 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>VERITAS ENGLISH CLINIC SERIES</span>
                        <span>03</span>
                    </div>
                </div>
            `;
        }

        // ======================================================================
        // 4. [3회독 스터디 플래너 (Study Tracker)] 시트 (본교재 전용)
        // ======================================================================
        renderPlannerSheet(level) {
            const units = level.units || [];

            return `
                <div class="clinic-a4-sheet justify-between border border-slate-300 bg-white p-10 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-3 flex items-end justify-between">
                        <div>
                            <div class="text-[10px] font-mono text-emerald-800 font-bold">STUDY TRACKER &amp; PLANNER</div>
                            <h2 class="text-xl font-serif font-black text-slate-900">3회독 진도 체크리스트 &amp; 성취도 기록표</h2>
                        </div>
                        <span class="text-xs font-mono text-slate-400">Page 04</span>
                    </div>

                    <div class="my-auto overflow-hidden">
                        <table class="w-full text-left border-collapse text-[11px]">
                            <thead>
                                <tr class="bg-slate-900 text-white font-serif">
                                    <th class="p-2 w-14 text-center font-mono">단원</th>
                                    <th class="p-2">단원명 (Unit Title)</th>
                                    <th class="p-2 w-20 text-center font-mono">1회독</th>
                                    <th class="p-2 w-20 text-center font-mono">2회독</th>
                                    <th class="p-2 w-16 text-center font-mono">오답정복</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 font-sans">
                                ${units.map(u => `
                                    <tr class="hover:bg-slate-50">
                                        <td class="p-1.5 text-center font-mono font-bold text-slate-700">${u.unitNo < 10 ? 'U0' + u.unitNo : 'U' + u.unitNo}</td>
                                        <td class="p-1.5 font-medium text-slate-900 truncate max-w-[260px]">${escapeHtml(u.title)}</td>
                                        <td class="p-1.5 text-center text-slate-400 font-mono">[   /   ]</td>
                                        <td class="p-1.5 text-center text-slate-400 font-mono">[   /   ]</td>
                                        <td class="p-1.5 text-center text-slate-400 font-mono">□</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <div class="border-t border-slate-200 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>VERITAS ENGLISH CLINIC SERIES</span>
                        <span>04</span>
                    </div>
                </div>
            `;
        }

        // ======================================================================
        // 5. [빠른 정답표 (Quick Key Matrix)] 시트 (답안지 전용)
        // ======================================================================
        renderQuickAnswerSheet(level) {
            const units = level.units || [];

            return `
                <div class="clinic-a4-sheet justify-between border border-slate-300 bg-white p-10 text-slate-900 shadow-md">
                    <div class="border-b-2 border-rose-600 pb-3 flex items-end justify-between">
                        <div>
                            <div class="text-[10px] font-mono text-rose-600 font-bold">QUICK ANSWER MATRIX</div>
                            <h2 class="text-xl font-serif font-black text-slate-900">전체 단원 빠른 정답표 (Quick Key)</h2>
                        </div>
                        <span class="text-xs font-mono text-rose-600 font-bold">[정답편] Page 03</span>
                    </div>

                    <div class="my-auto overflow-hidden">
                        <table class="w-full text-left border-collapse text-[10px]">
                            <thead>
                                <tr class="bg-rose-700 text-white font-serif">
                                    <th class="p-1.5 w-12 text-center font-mono">단원</th>
                                    <th class="p-1.5">핵심 정답 요약 (Quick Answers)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 font-mono">
                                ${units.map(u => {
                                    let summaryAns = '';
                                    if (this.currentMode === 'grammar') {
                                        const s3 = u.section3 || [];
                                        summaryAns = s3.slice(0, 10).map((q, i) => `Q${i+1}:${q.ans !== undefined ? (typeof q.ans === 'number' ? q.ans + 1 : q.ans) : (q.ansIdx || '답')}`).join(' | ');
                                    } else if (this.currentMode === 'reading') {
                                        const comp = u.stage3_comprehension || [];
                                        summaryAns = comp.map(q => `Q${q.qNo}:${q.ans + 1}번`).join(' | ');
                                    } else {
                                        const s1 = u.step1_conditioned || [];
                                        summaryAns = s1.slice(0, 3).map((q, i) => `[${i+1}] 조건영작 완료`).join(' | ');
                                    }
                                    return `
                                        <tr class="hover:bg-rose-50/50">
                                            <td class="p-1.5 text-center font-bold text-rose-900">U${u.unitNo < 10 ? '0' + u.unitNo : u.unitNo}</td>
                                            <td class="p-1.5 text-slate-700 truncate max-w-[400px]">${escapeHtml(summaryAns)}</td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>

                    <div class="border-t border-slate-200 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>VERITAS ENGLISH ANSWER KEY</span>
                        <span>03</span>
                    </div>
                </div>
            `;
        }

        // ======================================================================
        // 6. 단원별 A4 정밀 시트 렌더러 (초안 내용 100% 완전 복원)
        // ======================================================================
        renderUnitSheets(level, unit, isAnswers, pageSeq) {
            if (this.currentMode === 'grammar') {
                return this.renderGrammarUnitSheets(level, unit, isAnswers, pageSeq);
            }
            if (this.currentMode === 'reading') {
                return this.renderReadingUnitSheets(level, unit, isAnswers, pageSeq);
            }
            return this.renderWritingUnitSheets(level, unit, isAnswers, pageSeq);
        }

        // ----------------------------------------------------------------------
        // [문법 Clinic] 단원별 완벽한 3시트 A4 조판 (초안 100% 복원)
        // ----------------------------------------------------------------------
        renderGrammarUnitSheets(level, unit, isAnswers, pageSeq) {
            const sec1 = unit.section1 || {};
            const coreMap = sec1.coreMap || {};
            const dualExs = sec1.dualExamples || [];
            const nuance = sec1.nuanceCollocations || [];
            const sec2 = unit.section2 || [];
            const sec3 = unit.section3 || [];
            const sec4 = unit.section4 || [];
            const sec5 = unit.section5 || {};

            // Sheet 1: Unit Header + Section 1 (4대 실전 개념 체계 완제품) + Section 2 (기초 체력 드릴 10문항 전체)
            const sheet1 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <!-- 유닛 헤더 -->
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-emerald-800 font-bold uppercase">UNIT ${unit.unitNo < 10 ? '0' + unit.unitNo : unit.unitNo} • ${escapeHtml(level.levelName)}</div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950">${escapeHtml(unit.title)}</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">정답 및 풀이</span>` : `<span>Score: _____ / 100</span>`}
                        </div>
                    </div>

                    <!-- [Section 1] 자연스러운 4대 실전 개념 체계 (초안 완전 복원) -->
                    <div class="space-y-3 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-200 my-2 text-xs">
                        <div class="flex items-center gap-2 border-b border-emerald-200 pb-1.5">
                            <span class="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold font-mono">1</span>
                            <h4 class="font-serif font-bold text-xs sm:text-sm text-emerald-950">심화 개념 마스터 &amp; 공식 시크릿 노트</h4>
                        </div>

                        <!-- 1. Core Grammar Map -->
                        <div class="bg-white p-3 rounded-xl border border-emerald-100 shadow-2xs space-y-1.5">
                            <div class="text-[11px] font-bold text-emerald-900 flex items-center gap-1">
                                <i data-lucide="compass" class="w-3.5 h-3.5 text-emerald-600"></i>
                                <span>1. Core Grammar Map (핵심 문법 맵)</span>
                            </div>
                            <p class="text-[11px] text-slate-700 leading-snug font-sans">${escapeHtml(coreMap.overview || '')}</p>
                            ${(coreMap.formulaBoxes || []).map(fb => `
                                <div class="p-2 bg-slate-900 text-emerald-300 font-mono text-[11px] rounded-lg border border-emerald-500/20 my-1">
                                    <div class="font-bold text-white">${escapeHtml(fb.name)}</div>
                                    <div class="text-emerald-400">📐 ${escapeHtml(fb.formula)}</div>
                                    ${fb.desc ? `<div class="text-slate-300 text-[10px] font-sans mt-0.5">💡 ${escapeHtml(fb.desc)}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>

                        <!-- 2. Formula & Dual Examples with OX Comparison -->
                        <div class="bg-white p-3 rounded-xl border border-emerald-100 shadow-2xs space-y-1.5">
                            <div class="text-[11px] font-bold text-emerald-900 flex items-center gap-1">
                                <i data-lucide="split" class="w-3.5 h-3.5 text-indigo-600"></i>
                                <span>2. Formula &amp; Dual Examples (공식 &amp; 1:1 대조 예문)</span>
                            </div>
                            <div class="grid grid-cols-2 gap-2 text-[10px]">
                                ${dualExs.map(de => `
                                    <div class="p-2 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                                        <div class="font-bold text-slate-800">${escapeHtml(de.title)}</div>
                                        ${(de.examples || []).map(ex => `
                                            <div class="text-slate-900 font-serif">▸ ${escapeHtml(ex.en)}</div>
                                            <div class="text-[9px] text-slate-500">${escapeHtml(ex.ko)}</div>
                                        `).join('')}
                                        ${(de.oxCompare || []).map(ox => `
                                            <div class="pt-0.5 text-[9px] border-t border-slate-200">
                                                <span class="text-emerald-700 font-bold">⭕ ${escapeHtml(ox.correct)}</span><br/>
                                                <span class="text-rose-600 line-through">❌ ${escapeHtml(ox.wrong)}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- 3. Real Nuance & 4. Trap Alert -->
                        <div class="grid grid-cols-2 gap-2 text-[10px]">
                            <div class="bg-white p-2.5 rounded-xl border border-emerald-100 shadow-2xs">
                                <strong class="text-emerald-900 font-bold block mb-1">3. Real Nuance &amp; Collocations</strong>
                                ${nuance.map(n => `<p class="text-slate-700 text-[10px] leading-tight">• ${escapeHtml(n.point)}</p>`).join('')}
                            </div>
                            <div class="bg-white p-2.5 rounded-xl border border-emerald-100 shadow-2xs">
                                <strong class="text-rose-900 font-bold block mb-1">4. Exam Core &amp; Trap Alert</strong>
                                ${nuance.map(n => `<p class="text-rose-900 text-[10px] leading-tight">⚠️ ${escapeHtml(n.collocation)}</p>`).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- [Section 2] 기초 체력 빌드업 드릴 (10문항 전체 수록!) -->
                    <div class="space-y-2 my-auto text-xs">
                        <div class="flex items-center justify-between border-b border-slate-800 pb-1">
                            <span class="font-serif font-bold text-slate-900">[Section 2] 기초 체력 빌드업 드릴 (10문항)</span>
                            <span class="text-[10px] font-mono text-slate-500">각 2점 • 총 20점</span>
                        </div>
                        <div class="grid grid-cols-2 gap-2 text-[10px]">
                            ${sec2.map((d, idx) => `
                                <div class="p-2 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                                    <div class="font-bold text-slate-700 flex justify-between">
                                        <span>[0${idx+1}] ${escapeHtml(d.q)}</span>
                                        ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">${escapeHtml(d.answer)}</span>` : ''}
                                    </div>
                                    <div class="font-serif text-slate-900 truncate bg-white p-1 rounded border border-slate-100">${escapeHtml(d.sentence)}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Unit ${unit.unitNo} Sheet 1</span>
                        <span>Page ${(unit.unitNo - 1) * 3 + 5}</span>
                    </div>
                </div>
            `;

            // Sheet 2: Section 3 실전 문법 적용 파이널 Part 1 (Type 1 양자택일 4문항 + Type 2 5밑줄 3문항 + Type 3 어형변화 4문항)
            const sheet2 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-emerald-800 font-bold uppercase">SECTION 3 • ACTUAL PRACTICE (PART 1)</div>
                            <h3 class="text-sm font-serif font-bold text-slate-950">실전 문법 적용 파이널 (Part 1. Q01 ~ Q11)</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="text-rose-600 font-bold">[정답 및 풀이]</span>` : `<span>2단 정밀 조판</span>`}
                        </div>
                    </div>

                    <!-- 2단 컬럼 배치: Q1 ~ Q11 전 문항 완전 수록 -->
                    <div class="grid grid-cols-2 gap-3.5 my-auto text-xs">
                        <!-- 좌측: Type 1 (Q1~Q4) + Type 2 (Q5~Q6) -->
                        <div class="space-y-2.5">
                            <div class="font-serif font-bold text-slate-900 text-[11px] border-b border-slate-200 pb-0.5">Type 1. 1:1 맞짱 양자택일 (Q01~Q04)</div>
                            ${sec3.slice(0, 4).map(q => `
                                <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-1">
                                    <div class="flex justify-between font-bold text-slate-800">
                                        <span>[0${q.qNo}] ${escapeHtml(q.type)}</span>
                                        ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">정답: ${escapeHtml(q.options[q.ans])}</span>` : ''}
                                    </div>
                                    <p class="text-slate-800">${escapeHtml(q.stem)}</p>
                                    <div class="font-serif text-slate-900 bg-white p-1.5 rounded border border-slate-100">${escapeHtml(q.sentence)}</div>
                                </div>
                            `).join('')}

                            <div class="font-serif font-bold text-slate-900 text-[11px] border-b border-slate-200 pb-0.5 pt-1">Type 2. 5밑줄 어법 진단 및 수정</div>
                            ${sec3.slice(4, 6).map(q => `
                                <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-1">
                                    <div class="flex justify-between font-bold text-slate-800">
                                        <span>[0${q.qNo}] ${escapeHtml(q.type)}</span>
                                        ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">${q.ansIdx}번 (${q.correctWord})</span>` : ''}
                                    </div>
                                    <p class="text-slate-800 leading-tight">${escapeHtml(q.stem)}</p>
                                    <div class="font-serif text-slate-900 bg-white p-1 rounded border border-slate-100">${escapeHtml(q.sentence)}</div>
                                </div>
                            `).join('')}
                        </div>

                        <!-- 우측: Type 2 (Q7) + Type 3 조건부 어형변화 (Q8~Q11) -->
                        <div class="space-y-2.5">
                            ${sec3.slice(6, 7).map(q => `
                                <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-1">
                                    <div class="flex justify-between font-bold text-slate-800">
                                        <span>[0${q.qNo}] ${escapeHtml(q.type)}</span>
                                        ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">${q.ansIdx}번 (${q.correctWord})</span>` : ''}
                                    </div>
                                    <p class="text-slate-800 leading-tight">${escapeHtml(q.stem)}</p>
                                    <div class="font-serif text-slate-900 bg-white p-1 rounded border border-slate-100">${escapeHtml(q.sentence)}</div>
                                </div>
                            `).join('')}

                            <div class="font-serif font-bold text-slate-900 text-[11px] border-b border-slate-200 pb-0.5 pt-1">Type 3. 조건부 빈칸 어형 변화 (Q08~Q11)</div>
                            ${sec3.slice(7, 11).map(q => `
                                <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-1">
                                    <div class="flex justify-between font-bold text-slate-800">
                                        <span>[${q.qNo < 10 ? '0' + q.qNo : q.qNo}] ${escapeHtml(q.type)}</span>
                                        ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">정답: ${escapeHtml(q.ans)}</span>` : ''}
                                    </div>
                                    <p class="text-slate-800 leading-tight">${escapeHtml(q.stem)}</p>
                                    <div class="font-serif text-slate-900 bg-white p-1.5 rounded border border-slate-100">${escapeHtml(q.sentence)}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Unit ${unit.unitNo} Sheet 2</span>
                        <span>Page ${(unit.unitNo - 1) * 3 + 6}</span>
                    </div>
                </div>
            `;

            // Sheet 3: Section 3 Part 2 (Type 4~6) + Section 4 (킬러 3제) + Section 5 (오답노트)
            const sheet3 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-emerald-800 font-bold uppercase">SECTION 3 (PART 2) &amp; SECTION 4 &amp; 5</div>
                            <h3 class="text-sm font-serif font-bold text-slate-950">5지선다 &amp; 서술형 전환 &amp; 킬러 서술형 &amp; 오답노트</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="text-rose-600 font-bold">[상세 해설 &amp; 루브릭]</span>` : `<span>완결편</span>`}
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3.5 my-auto text-xs">
                        <!-- 좌측: Type 4 (5지선다 Q12~Q16) -->
                        <div class="space-y-2.5">
                            <div class="font-serif font-bold text-slate-900 text-[11px] border-b border-slate-200 pb-0.5">Type 4. 실전 수능·내신 5지선다 (Q12~Q16)</div>
                            ${sec3.slice(11, 16).map(q => `
                                <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-1">
                                    <div class="flex justify-between font-bold text-slate-800">
                                        <span>[${q.qNo}] 5지선다 객관식</span>
                                        ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">${q.ans + 1}번</span>` : ''}
                                    </div>
                                    <p class="text-slate-800 leading-tight">${escapeHtml(q.stem)}</p>
                                    <div class="space-y-0.5 font-serif pt-0.5">
                                        ${(q.options || []).map((opt, oIdx) => `
                                            <div class="truncate ${isAnswers && q.ans === oIdx ? 'text-emerald-800 font-bold' : 'text-slate-600'}">
                                                ${oIdx + 1}) ${escapeHtml(opt)}
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        <!-- 우측: Type 5 & 6 + Section 4 (킬러 3제) + Section 5 -->
                        <div class="space-y-2.5">
                            <div class="font-serif font-bold text-slate-900 text-[11px] border-b border-slate-200 pb-0.5">Type 5 &amp; 6. 문장 전환 &amp; 조건 영작</div>
                            ${sec3.slice(16, 20).map(q => `
                                <div class="p-2 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-0.5">
                                    <div class="flex justify-between font-bold text-slate-800">
                                        <span>[${q.qNo}] ${escapeHtml(q.type)}</span>
                                        ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">${escapeHtml(q.ans)}</span>` : ''}
                                    </div>
                                    <p class="text-slate-800 leading-tight">${escapeHtml(q.stem)}</p>
                                    ${q.korean ? `<div class="text-indigo-950 font-sans text-[9px]">[우리말]: ${escapeHtml(q.korean)}</div>` : ''}
                                </div>
                            `).join('')}

                            <!-- Section 4. 고난도 킬러 서술형 (3문항 전체) -->
                            <div class="p-2.5 rounded-xl bg-rose-50/70 border border-rose-200 text-[10px] space-y-1.5">
                                <div class="font-bold text-rose-950 font-serif flex justify-between">
                                    <span>[Section 4] 고난도 킬러 서술형 (3제)</span>
                                    <span class="font-mono text-rose-700">각 5점</span>
                                </div>
                                ${sec4.map((k, i) => `
                                    <div class="border-t border-rose-100 pt-1 space-y-0.5">
                                        <div class="font-bold text-slate-800">[킬러 0${i+1}] ${escapeHtml(k.korean)}</div>
                                        ${isAnswers ? `
                                            <div class="text-emerald-800 font-serif font-bold">👉 ${escapeHtml(k.modelAnswer)}</div>
                                        ` : `
                                            <div class="h-5 border border-dashed border-rose-300 rounded bg-white text-slate-300 p-0.5">답안: ________________________________</div>
                                        `}
                                    </div>
                                `).join('')}
                            </div>

                            <!-- Section 5. 복습 & 오답노트 -->
                            <div class="p-2.5 rounded-xl bg-slate-900 text-white text-[10px] space-y-1">
                                <div class="font-serif font-bold text-amber-300">Section 5. My Error Note</div>
                                <div class="text-slate-300 text-[9px] leading-tight">${escapeHtml(sec5.reflectionPrompt || '오답 원인과 핵심 공식을 기록하세요.')}</div>
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Unit ${unit.unitNo} Sheet 3</span>
                        <span>Page ${(unit.unitNo - 1) * 3 + 7}</span>
                    </div>
                </div>
            `;

            return sheet1 + sheet2 + sheet3;
        }

        // ----------------------------------------------------------------------
        // [독해 Clinic] 단원별 완벽한 2시트 A4 조판 (초안 100% 복원)
        // ----------------------------------------------------------------------
        renderReadingUnitSheets(level, unit, isAnswers, pageSeq) {
            const spList = unit.stage1_spotlight || [];
            const passage = unit.stage2_passage || {};
            const compList = unit.stage3_comprehension || [];
            const gramList = unit.stage4_grammar || [];
            const tg = unit.teacherGuide || {};

            // Sheet 1: 문법 스포트라이트 + 실전 지문 본문 + Footnote 어휘 각주
            const sheet1 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-blue-800 font-bold uppercase">READING CLINIC • UNIT ${unit.unitNo < 10 ? '0' + unit.unitNo : unit.unitNo}</div>
                            <h3 class="text-base font-serif font-black text-slate-950">${escapeHtml(unit.passageTitle || unit.title)}</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            Target: ${passage.targetTimeSec || 60}s (${passage.wordCount || 100}w)
                        </div>
                    </div>

                    <!-- Stage 1. 지문 속 문법 스포트라이트 -->
                    <div class="p-3 rounded-2xl bg-blue-50/60 border border-blue-200 my-2 text-xs space-y-1.5">
                        <div class="font-serif font-bold text-blue-950 flex items-center gap-1.5 text-xs">
                            <span class="w-4 h-4 rounded bg-blue-600 text-white flex items-center justify-center text-[10px]">1</span>
                            <span>Stage 1. 지문 속 핵심 문법 스포트라이트 (Grammar Spotlight)</span>
                        </div>
                        ${spList.map(sp => `
                            <div class="p-2.5 rounded-xl bg-white border border-blue-100 text-[11px] space-y-0.5">
                                <div class="font-serif font-bold text-blue-950">${escapeHtml(sp.en)}</div>
                                <div class="text-slate-500 text-[10px]">${escapeHtml(sp.ko)}</div>
                                <div class="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded inline-block mt-0.5">
                                    구조: ${escapeHtml(sp.syntax)} • ${escapeHtml(sp.point)}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Stage 2. 실전 독해 지문 (Authentic Passage) -->
                    <div class="my-auto space-y-3">
                        <div class="font-serif font-bold text-slate-900 text-xs border-b border-slate-200 pb-1 flex justify-between">
                            <span>Stage 2. Authentic Reading Passage</span>
                            <span class="text-[10px] font-mono text-slate-400">Timer: ${passage.targetTimeSec || 60} sec</span>
                        </div>
                        <div class="font-serif text-xs text-slate-800 leading-relaxed text-justify space-y-2.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                            ${(passage.text || '').split('\n\n').map(p => `<p>${escapeHtml(p)}</p>`).join('')}
                        </div>

                        <!-- Footnote 어휘 각주 -->
                        ${(passage.footnoteVocab || []).length > 0 ? `
                            <div class="p-2.5 rounded-xl bg-white border border-slate-200 text-[10px] grid grid-cols-3 gap-1">
                                ${(passage.footnoteVocab || []).map(v => `
                                    <div><strong class="text-blue-900 font-serif">${escapeHtml(v.word)}</strong>: ${escapeHtml(v.meaning)}</div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>

                    <div class="border-t border-slate-200 pt-1 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Reading Unit ${unit.unitNo} Sheet 1</span>
                        <span>Page ${(unit.unitNo - 1) * 2 + 5}</span>
                    </div>
                </div>
            `;

            // Sheet 2: Stage 3 독해 3문항 + Stage 4 어법 2문항 + 답안지일 때 지문 전문 해석
            const sheet2 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-blue-800 font-bold uppercase">COMPREHENSION &amp; APPLIED GRAMMAR</div>
                            <h3 class="text-sm font-serif font-bold text-slate-950">실전 독해 평가 3문항 &amp; 지문 어법 2문항</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="text-rose-600 font-bold">[정답 및 상세 해석]</span>` : `<span>Score: _____ / 100</span>`}
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3.5 my-auto text-xs">
                        <!-- 좌측: 독해 3문항 -->
                        <div class="space-y-2.5">
                            <div class="font-serif font-bold text-slate-900 text-[11px] border-b border-slate-200 pb-0.5">Stage 3. 실전 독해 평가 (3문항)</div>
                            ${compList.map(q => `
                                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-1">
                                    <div class="flex justify-between font-bold text-slate-800">
                                        <span>[Q${q.qNo}] ${escapeHtml(q.type)}</span>
                                        ${isAnswers ? `<span class="text-blue-800 font-mono font-bold">${q.ans + 1}번</span>` : ''}
                                    </div>
                                    <p class="text-slate-900 leading-snug">${escapeHtml(q.q)}</p>
                                    <div class="space-y-0.5 font-serif pt-1">
                                        ${(q.options || []).map((opt, oIdx) => `
                                            <div class="truncate ${isAnswers && q.ans === oIdx ? 'text-blue-700 font-bold' : 'text-slate-600'}">
                                                ${oIdx + 1}) ${escapeHtml(opt)}
                                            </div>
                                        `).join('')}
                                    </div>
                                    ${isAnswers && q.explanation ? `
                                        <div class="p-1.5 rounded bg-blue-50/50 text-[9px] text-blue-950 font-sans mt-0.5">
                                            💡 ${escapeHtml(q.explanation)}
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>

                        <!-- 우측: 어법 2문항 + 지문 전문 해석 -->
                        <div class="space-y-2.5">
                            <div class="font-serif font-bold text-slate-900 text-[11px] border-b border-slate-200 pb-0.5">Stage 4. 지문 기반 실전 어법 (2문항)</div>
                            ${gramList.map(q => `
                                <div class="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200 text-[10px] space-y-1">
                                    <div class="flex justify-between font-bold text-slate-800">
                                        <span>[Q${q.qNo}] ${escapeHtml(q.type)}</span>
                                        ${isAnswers ? `<span class="text-emerald-800 font-mono font-bold">${escapeHtml(q.ans)}</span>` : ''}
                                    </div>
                                    <p class="text-slate-900 leading-snug">${escapeHtml(q.q)}</p>
                                    ${q.targetSentence ? `<div class="p-1.5 rounded bg-white font-serif text-[10px] border border-slate-100">${escapeHtml(q.targetSentence)}</div>` : ''}
                                    ${q.targetTemplate ? `<div class="p-1.5 rounded bg-white font-serif text-[10px] border border-slate-100">${escapeHtml(q.targetTemplate)}</div>` : ''}
                                    ${!isAnswers ? `<div class="h-6 border border-dashed border-emerald-300 rounded bg-white text-slate-300 p-0.5 text-[9px]">서술형 정답란: ____________________</div>` : ''}
                                </div>
                            `).join('')}

                            ${isAnswers && tg.translation ? `
                                <div class="p-3 rounded-xl bg-indigo-50/70 border border-indigo-200 text-[10px] text-indigo-950 space-y-1">
                                    <div class="font-bold font-serif">📖 지문 전문 해석 (Teacher's Guide)</div>
                                    <div class="text-slate-700 leading-relaxed max-h-44 overflow-hidden text-[9px]">${escapeHtml(tg.translation)}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Reading Unit ${unit.unitNo} Sheet 2</span>
                        <span>Page ${(unit.unitNo - 1) * 2 + 6}</span>
                    </div>
                </div>
            `;

            return sheet1 + sheet2;
        }

        // ----------------------------------------------------------------------
        // [쓰기 Clinic] 단원별 완벽한 2시트 A4 조판 (초안 100% 복원)
        // ----------------------------------------------------------------------
        renderWritingUnitSheets(level, unit, isAnswers, pageSeq) {
            const step1 = unit.step1_conditioned || [];
            const step2 = unit.step2_direct || [];
            const step3 = unit.step3_killer || [];
            const rubric = unit.rubricSummary || {};

            // Sheet 1: Step 1 조건 영작 (6문항 전체) + Step 2 직결 영작 (6문항 전체)
            const sheet1 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-amber-800 font-bold uppercase">WRITING CLINIC • UNIT ${unit.unitNo < 10 ? '0' + unit.unitNo : unit.unitNo}</div>
                            <h3 class="text-base font-serif font-black text-slate-950">${escapeHtml(unit.title)} 서술형 집중 영작</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="text-rose-600 font-bold">[영작 모범 답안]</span>` : `<span>Step 1 &amp; Step 2 (총 12제)</span>`}
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3.5 my-auto text-xs">
                        <!-- Step 1. 힌트 어휘 조건 영작 (6문항 전체!) -->
                        <div class="space-y-2">
                            <div class="font-serif font-bold text-amber-900 text-[11px] border-b border-amber-200 pb-0.5">Step 1. 힌트 어휘 조건 영작 (6문항)</div>
                            ${step1.map(q => `
                                <div class="p-2.5 rounded-xl bg-amber-50/40 border border-amber-200 text-[10px] space-y-1">
                                    <div class="font-bold text-slate-800">${escapeHtml(q.stem)}</div>
                                    <div class="text-slate-900 font-sans">${escapeHtml(q.korean)}</div>
                                    <div class="text-amber-900 font-mono text-[9px]">[제시어]: ${(q.mandatoryWords || []).join(', ')}</div>
                                    ${isAnswers ? `
                                        <div class="text-emerald-800 font-serif font-bold">👉 ${escapeHtml(q.modelAnswer)}</div>
                                    ` : `
                                        <div class="h-5 border border-dashed border-amber-300 rounded bg-white text-slate-300 p-0.5">영작: ________________________</div>
                                    `}
                                </div>
                            `).join('')}
                        </div>

                        <!-- Step 2. 우리말 해석 직결 완성 영작 (6문항 전체!) -->
                        <div class="space-y-2">
                            <div class="font-serif font-bold text-slate-900 text-[11px] border-b border-slate-200 pb-0.5">Step 2. 우리말 해석 직결 완성 영작 (6문항)</div>
                            ${step2.map(q => `
                                <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[10px] space-y-1">
                                    <div class="font-bold text-slate-800">${escapeHtml(q.stem)}</div>
                                    <div class="text-slate-900 font-sans">${escapeHtml(q.koreanPrompt)}</div>
                                    ${isAnswers ? `
                                        <div class="text-emerald-800 font-serif font-bold">👉 ${escapeHtml(q.modelAnswer)}</div>
                                    ` : `
                                        <div class="h-5 border border-dashed border-slate-300 rounded bg-white text-slate-300 p-0.5">영작: ________________________</div>
                                    `}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Writing Unit ${unit.unitNo} Sheet 1</span>
                        <span>Page ${(unit.unitNo - 1) * 2 + 5}</span>
                    </div>
                </div>
            `;

            // Sheet 2: Step 3 학교 기출 변형 킬러 서술형 (3문항 전체) + 루브릭 요약표
            const sheet2 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-rose-800 font-bold uppercase">KILLER ESSAY TEST &amp; RUBRIC</div>
                            <h3 class="text-sm font-serif font-bold text-slate-950">학교 기출 변형 킬러 서술형 &amp; 감점 방지 루브릭</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="text-rose-600 font-bold">[채점 기준표 수록]</span>` : `<span>Step 3 Killer</span>`}
                        </div>
                    </div>

                    <div class="space-y-3.5 my-auto text-xs">
                        <!-- Step 3 기출 킬러 3문항 전체 수록! -->
                        <div class="space-y-2.5">
                            ${step3.map((q, idx) => `
                                <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1.5 text-[11px]">
                                    <div class="font-bold text-slate-900 font-serif">[킬러 문항 ${idx + 1}] ${escapeHtml(q.stem)}</div>
                                    <div class="p-2 rounded-lg bg-slate-50 text-slate-800 font-sans">
                                        <strong>[상황 제시]:</strong> ${escapeHtml(q.situation)}
                                    </div>
                                    <div class="text-[10px] text-rose-900 bg-rose-50/50 p-2 rounded border border-rose-100">
                                        <strong>[필수 작성 조건]:</strong> ${(q.conditions || []).join(' | ')}
                                    </div>
                                    ${isAnswers ? `
                                        <div class="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950">
                                            <div class="font-serif font-bold text-xs">👉 모범 답안: ${escapeHtml(q.modelAnswer)}</div>
                                            <div class="text-[10px] text-slate-500 mt-0.5">채점: ${Object.entries(q.rubric || {}).map(([k, v]) => `${k}(${v}점)`).join(', ')}</div>
                                        </div>
                                    ` : `
                                        <div class="h-12 border border-dashed border-slate-300 rounded-lg bg-slate-50 p-2 text-slate-300 text-[10px]">
                                            서술형 답안 작성란: __________________________________________________
                                        </div>
                                    `}
                                </div>
                            `).join('')}
                        </div>

                        <!-- 감점 방지 루브릭 요약표 -->
                        <div class="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                            <div class="text-[11px] font-bold text-rose-400 font-mono">⚠️ 내신 서술형 감점 방지 절대 루브릭 (Scoring Rubric)</div>
                            <div class="grid grid-cols-3 gap-2 text-[10px]">
                                ${(rubric.deductionPoints || []).slice(0, 3).map(dp => `
                                    <div class="p-2 rounded-xl bg-white/10 text-slate-300 flex justify-between">
                                        <span>${escapeHtml(dp.item)}</span>
                                        <strong class="text-rose-400 font-mono">${escapeHtml(dp.deduction)}</strong>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Writing Unit ${unit.unitNo} Sheet 2</span>
                        <span>Page ${(unit.unitNo - 1) * 2 + 6}</span>
                    </div>
                </div>
            `;

            return sheet1 + sheet2;
        }

        // ======================================================================
        // 7. 뒷표지 시트 (Back Cover Sheet)
        // ======================================================================
        renderBackCoverSheet(level, isAnswers) {
            return `
                <div class="clinic-a4-sheet justify-between border-4 border-slate-900 bg-slate-900 p-12 text-white shadow-2xl relative overflow-hidden">
                    <div class="absolute inset-3 border border-slate-700 pointer-events-none"></div>

                    <div class="relative z-10 text-center space-y-2 pt-6">
                        <div class="font-mono text-xs text-amber-400 tracking-widest uppercase">VERITAS ENGLISH ACADEMY</div>
                        <h2 class="font-serif font-black text-2xl text-white">클리닉 3종 부교재 트릴로지 로드맵</h2>
                    </div>

                    <div class="relative z-10 space-y-4 my-auto max-w-md mx-auto text-xs font-sans">
                        <div class="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                            <strong class="text-emerald-400 font-serif">1. 문법 Clinic (Grammar Studio)</strong>
                            <p class="text-slate-300 text-[11px]">개념 ➔ 기초 ➔ 실전 20제 ➔ 킬러 서술형의 완전한 문법 완성</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                            <strong class="text-blue-400 font-serif">2. 독해 Clinic (Reading Studio)</strong>
                            <p class="text-slate-300 text-[11px]">문법을 지문에서 확인하는 실전 독해 3제 + 어법 2제 연계</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                            <strong class="text-amber-400 font-serif">3. 쓰기 Clinic (Writing Studio)</strong>
                            <p class="text-slate-300 text-[11px]">조건 영작 + 직결 영작 + 기출 킬러 서술형으로 내신 1등급 정복</p>
                        </div>
                    </div>

                    <div class="relative z-10 text-center space-y-3 pb-4">
                        <div class="inline-block p-2 bg-white rounded-xl text-slate-900 font-mono text-[10px] tracking-widest">
                            ISBN 979-11-92384-${level.levelCode === 'lv1' ? '101' : '202'}-0 (Set)
                        </div>
                        <div class="text-[10px] font-mono text-slate-400">
                            Printed in Korea &bull; Veritas Scholars' Academy Press
                        </div>
                    </div>
                </div>
            `;
        }
    }

    window.clinicStudioEngine = new ClinicStudioEngine();

})(window);
