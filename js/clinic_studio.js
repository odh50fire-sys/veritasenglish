/**
 * VERITAS ENGLISH - 3대 부교재 스튜디오 엔진 (ClinicStudioEngine)
 * - 📗 [문법 Clinic]: Section 1(4대 실전 개념) ~ Section 5(20문항 6대 유형 + 킬러 서술형)
 * - 📘 [독해 Clinic]: Stage 1(문법 스포트라이트) ~ Stage 4(실전 지문 + 독해 3제 + 문법 2제)
 * - 📙 [쓰기 Clinic]: Step 1(조건 영작 6제) ~ Step 3(직결 영작 6제 + 기출 킬러 서술형 3제)
 * - 학생용(문제지) / 교사용(지도서/해설지) 듀얼 인쇄 및 인터랙티브 웹 학습 완벽 지원
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

    // 테마 컬러 맵핑
    const THEME_COLORS = {
        lv0: { name: 'Sky & Mint', primary: 'sky-600', badge: 'bg-sky-100 text-sky-800 border-sky-300', accent: 'sky-500', hex: '#0284c7' },
        lv1: { name: 'Emerald & Pine', primary: 'emerald-600', badge: 'bg-emerald-100 text-emerald-800 border-emerald-300', accent: 'emerald-500', hex: '#059669' },
        lv2: { name: 'Indigo & Royal', primary: 'indigo-600', badge: 'bg-indigo-100 text-indigo-800 border-indigo-300', accent: 'indigo-500', hex: '#4f46e5' },
        lv3: { name: 'Deep Blue & Navy', primary: 'blue-600', badge: 'bg-blue-100 text-blue-800 border-blue-300', accent: 'blue-500', hex: '#2563eb' },
        lv4: { name: 'Crimson & Rose', primary: 'rose-600', badge: 'bg-rose-100 text-rose-800 border-rose-300', accent: 'rose-500', hex: '#e11d48' },
        lv5: { name: 'Imperial Gold', primary: 'amber-600', badge: 'bg-amber-100 text-amber-900 border-amber-300', accent: 'amber-500', hex: '#d97706' },
        sp_terms: { name: 'Royal Purple', primary: 'purple-600', badge: 'bg-purple-100 text-purple-900 border-purple-300', accent: 'purple-500', hex: '#7c3aed' },
        sp_writing: { name: 'Royal Purple', primary: 'purple-600', badge: 'bg-purple-100 text-purple-900 border-purple-300', accent: 'purple-500', hex: '#7c3aed' },
        sp_csat: { name: 'Royal Purple', primary: 'purple-600', badge: 'bg-purple-100 text-purple-900 border-purple-300', accent: 'purple-500', hex: '#7c3aed' },
        sp_vs: { name: 'Royal Purple', primary: 'purple-600', badge: 'bg-purple-100 text-purple-900 border-purple-300', accent: 'purple-500', hex: '#7c3aed' }
    };

    class ClinicStudioEngine {
        constructor() {
            this.currentMode = 'grammar'; // 'grammar' | 'reading' | 'writing'
            this.currentLevelCode = 'lv1';
            this.currentUnitNo = 1;
            this.viewRole = 'student'; // 'student' (문제지) | 'teacher' (지도서/해설지)
            this.showAnswers = false;
            this.initialized = false;
        }

        init() {
            if (this.initialized) return;
            this.bindEvents();
            this.initialized = true;
        }

        bindEvents() {
            // 키보드 단축키 (ESC로 닫기)
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

        open(mode = 'grammar', levelCode = 'lv1', unitNo = 1, role = 'student') {
            this.init();
            this.currentMode = mode || 'grammar';
            this.currentLevelCode = levelCode || 'lv1';
            this.currentUnitNo = parseInt(unitNo, 10) || 1;
            this.viewRole = role || 'student';
            this.showAnswers = (this.viewRole === 'teacher');

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

        setRole(role) {
            this.viewRole = role;
            this.showAnswers = (role === 'teacher');
            this.render();
        }

        toggleAnswers() {
            this.showAnswers = !this.showAnswers;
            this.render();
        }

        printPaper() {
            window.print();
        }

        getCurrentUnitData() {
            let dataBank = [];
            if (this.currentMode === 'grammar') dataBank = this.getGrammarData();
            else if (this.currentMode === 'reading') dataBank = this.getReadingData();
            else if (this.currentMode === 'writing') dataBank = this.getWritingData();

            const levelObj = dataBank.find(l => l.levelCode === this.currentLevelCode) || dataBank[0];
            if (!levelObj) return { level: null, unit: null };

            const unit = (levelObj.units || []).find(u => u.unitNo === this.currentUnitNo) || (levelObj.units || [])[0];
            return { level: levelObj, unit: unit, allLevels: dataBank };
        }

        render() {
            const container = document.getElementById('clinic-studio-content');
            if (!container) return;

            const { level, unit, allLevels } = this.getCurrentUnitData();
            if (!level || !unit) {
                container.innerHTML = `<div class="p-8 text-center text-slate-500">데이터를 불러오는 중입니다...</div>`;
                return;
            }

            // 상단 네비게이션 툴바 갱신
            this.renderToolbar(level, unit, allLevels);

            // 본문 렌더링
            let bodyHtml = '';
            if (this.currentMode === 'grammar') {
                bodyHtml = this.renderGrammarStudio(level, unit);
            } else if (this.currentMode === 'reading') {
                bodyHtml = this.renderReadingStudio(level, unit);
            } else if (this.currentMode === 'writing') {
                bodyHtml = this.renderWritingStudio(level, unit);
            }

            container.innerHTML = bodyHtml;
            if (window.lucide) window.lucide.createIcons();
        }

        renderToolbar(level, unit, allLevels) {
            const toolbar = document.getElementById('clinic-studio-toolbar');
            if (!toolbar) return;

            const theme = THEME_COLORS[this.currentLevelCode] || THEME_COLORS['lv1'];

            toolbar.innerHTML = `
                <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 w-full">
                    <!-- 좌측: 3대 교재 모드 탭 & 교재명 -->
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

                        <!-- 교재 및 레벨 셀렉터 -->
                        <div class="flex items-center gap-2">
                            <select onchange="window.clinicStudioEngine.setLevel(this.value)" class="text-xs font-serif font-bold py-1.5 px-3 rounded-xl border border-slate-300 bg-white text-slate-800 shadow-2xs focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                                ${allLevels.map(l => `
                                    <option value="${l.levelCode}" ${l.levelCode === this.currentLevelCode ? 'selected' : ''}>
                                        ${l.isSpecial ? '🎓 ' + l.levelName : '📚 ' + l.levelName}
                                    </option>
                                `).join('')}
                            </select>

                            <select onchange="window.clinicStudioEngine.setUnit(this.value)" class="text-xs font-serif font-bold py-1.5 px-3 rounded-xl border border-slate-300 bg-white text-slate-800 shadow-2xs focus:ring-2 focus:ring-emerald-500 focus:outline-none">
                                ${(level.units || []).map(u => `
                                    <option value="${u.unitNo}" ${u.unitNo === this.currentUnitNo ? 'selected' : ''}>
                                        ${level.isSpecial ? u.unitNo + '강. ' : 'Unit ' + u.unitNo + '. '} ${u.title.length > 16 ? u.title.substring(0, 16) + '...' : u.title}
                                    </option>
                                `).join('')}
                            </select>
                        </div>
                    </div>

                    <!-- 우측: 모드 토글 (학생용/교사용) & 인쇄 버튼 & 닫기 -->
                    <div class="flex items-center gap-2.5">
                        <!-- 학생용 / 교사용 모드 전환 -->
                        <div class="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
                            <button type="button" onclick="window.clinicStudioEngine.setRole('student')" 
                                class="px-3 py-1 rounded-lg text-xs font-serif font-bold transition-all ${this.viewRole === 'student' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-800'}">
                                🧑‍🎓 학생용 (문제지)
                            </button>
                            <button type="button" onclick="window.clinicStudioEngine.setRole('teacher')" 
                                class="px-3 py-1 rounded-lg text-xs font-serif font-bold transition-all ${this.viewRole === 'teacher' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-slate-500 hover:text-slate-800'}">
                                👨‍🏫 교사용 (지도서)
                            </button>
                        </div>

                        <!-- 인쇄 버튼 -->
                        <button type="button" onclick="window.clinicStudioEngine.printPaper()" 
                            class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-xs flex items-center gap-1.5 shadow-xs transition-all cursor-pointer" title="현재 부교재를 A4 출판 규격으로 인쇄 (PDF 저장 가능)">
                            <i data-lucide="printer" class="w-3.5 h-3.5 text-emerald-400"></i>
                            <span>A4 인쇄</span>
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
        // 1. 문법 Clinic 스튜디오 뷰어 렌더러
        // ======================================================================
        renderGrammarStudio(level, unit) {
            const sec1 = unit.section1 || {};
            const coreMap = sec1.coreMap || {};
            const dualExs = sec1.dualExamples || [];
            const nuance = sec1.nuanceCollocations || [];
            const sec2 = unit.section2 || [];
            const sec3 = unit.section3 || [];
            const sec4 = unit.section4 || [];
            const sec5 = unit.section5 || {};
            const isTeacher = this.viewRole === 'teacher';

            return `
                <div class="clinic-paper max-w-5xl mx-auto space-y-8 print:space-y-6 print:m-0 print:p-0">
                    <!-- 표제부 헤더 -->
                    <div class="border-b-2 border-slate-900 pb-4 flex items-end justify-between">
                        <div>
                            <div class="text-[11px] font-mono font-bold text-emerald-800 tracking-wider">VERITAS ENGLISH GRAMMAR CLINIC • ${level.levelName.toUpperCase()}</div>
                            <h2 class="text-2xl sm:text-3xl font-serif font-black text-slate-900 mt-1">
                                ${level.isSpecial ? '제' + unit.unitNo + '강.' : 'Unit ' + unit.unitNo + '.'} ${escapeHtml(unit.title)}
                            </h2>
                        </div>
                        <div class="text-right text-xs font-mono text-slate-500">
                            <div>Score: _______ / 100</div>
                            <div>Name: _________________</div>
                        </div>
                    </div>

                    <!-- [Section 1] 자연스러운 4대 실전 개념 체계 -->
                    <div class="space-y-4 bg-emerald-50/50 p-6 rounded-3xl border border-emerald-200">
                        <div class="flex items-center gap-2 border-b border-emerald-200 pb-2">
                            <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold font-mono">1</span>
                            <h3 class="font-serif font-bold text-base sm:text-lg text-emerald-950">심화 개념 마스터 &amp; 공식 시크릿 노트</h3>
                        </div>

                        <!-- 1. Core Grammar Map -->
                        <div class="bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs space-y-2">
                            <div class="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                                <i data-lucide="compass" class="w-4 h-4 text-emerald-600"></i>
                                <span>1. Core Grammar Map (핵심 문법 맵)</span>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">${escapeHtml(coreMap.overview || '')}</p>
                            ${(coreMap.formulaBoxes || []).map(fb => `
                                <div class="p-3 bg-slate-900 text-emerald-300 font-mono text-xs rounded-xl border border-emerald-500/20 my-2">
                                    <div class="font-bold text-white mb-0.5">${escapeHtml(fb.name)}</div>
                                    <div class="text-emerald-400">📐 ${escapeHtml(fb.formula)}</div>
                                    ${fb.desc ? `<div class="text-slate-300 text-[11px] font-sans mt-1">💡 ${escapeHtml(fb.desc)}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>

                        <!-- 2. Formula & Dual Examples -->
                        <div class="bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs space-y-2">
                            <div class="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                                <i data-lucide="split" class="w-4 h-4 text-indigo-600"></i>
                                <span>2. Formula &amp; Dual Examples (공식 &amp; 1:1 대조 예문)</span>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                ${dualExs.map(de => `
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                                        <div class="font-bold text-slate-800">${escapeHtml(de.title)}</div>
                                        ${(de.examples || []).map(ex => `
                                            <div class="text-slate-900 font-serif">▸ ${escapeHtml(ex.en)}</div>
                                            <div class="text-[11px] text-slate-500">${escapeHtml(ex.ko)}</div>
                                        `).join('')}
                                        ${(de.oxCompare || []).map(ox => `
                                            <div class="pt-1 text-[11px] border-t border-slate-200">
                                                <span class="text-emerald-700 font-bold">⭕ ${escapeHtml(ox.correct)}</span><br/>
                                                <span class="text-rose-600 line-through">❌ ${escapeHtml(ox.wrong)}</span>
                                                ${ox.reason ? `<div class="text-slate-500">👉 ${escapeHtml(ox.reason)}</div>` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- 3. Real Nuance & Exam Core -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div class="bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs space-y-1.5">
                                <div class="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                                    <i data-lucide="zap" class="w-4 h-4 text-amber-500"></i>
                                    <span>3. Real Nuance &amp; Collocations (실전 쓰임)</span>
                                </div>
                                ${nuance.map(n => `
                                    <p class="text-xs text-slate-700 leading-relaxed font-sans">• ${escapeHtml(n.point)}</p>
                                `).join('')}
                            </div>
                            <div class="bg-white p-4 rounded-2xl border border-emerald-100 shadow-2xs space-y-1.5">
                                <div class="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                                    <i data-lucide="alert-octagon" class="w-4 h-4 text-rose-500"></i>
                                    <span>4. Exam Core &amp; Trap Alert (출제 함정)</span>
                                </div>
                                ${nuance.map(n => `
                                    <p class="text-xs text-rose-900 leading-relaxed font-sans">⚠️ ${escapeHtml(n.collocation)}</p>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- [Section 2] 기초 체력 빌드업 드릴 (10문항) -->
                    <div class="space-y-4">
                        <div class="flex items-center justify-between border-b-2 border-slate-800 pb-2">
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold font-mono">2</span>
                                <h3 class="font-serif font-black text-base sm:text-lg text-slate-900">기초 체력 빌드업 드릴 (10문항)</h3>
                            </div>
                            <span class="text-xs font-mono text-slate-500">각 2점 • 총 20점</span>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            ${sec2.map((d, idx) => `
                                <div class="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
                                    <div class="flex items-center justify-between font-bold text-slate-700">
                                        <span>[0${idx + 1}] ${escapeHtml(d.q)}</span>
                                        ${isTeacher ? `<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono">정답: ${escapeHtml(d.answer)}</span>` : ''}
                                    </div>
                                    <div class="font-serif text-slate-900 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                                        ${escapeHtml(d.sentence)}
                                    </div>
                                    ${isTeacher && d.explanation ? `
                                        <div class="text-[11px] text-emerald-700 bg-emerald-50/50 p-2 rounded-lg font-sans">
                                            💡 ${escapeHtml(d.explanation)}
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- [Section 3] 실전 문법 적용 파이널 (20문항 6대 유형) -->
                    <div class="space-y-4 pt-4 border-t-2 border-slate-800">
                        <div class="flex items-center justify-between border-b-2 border-slate-800 pb-2">
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold font-mono">3</span>
                                <h3 class="font-serif font-black text-base sm:text-lg text-slate-900">실전 문법 적용 파이널 (20문항 6대 유형)</h3>
                            </div>
                            <span class="text-xs font-mono text-slate-500">각 3점 • 총 60점</span>
                        </div>

                        <!-- 2단 컬럼 그리드 배치 (신문/시험지 스타일) -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${sec3.map(q => `
                                <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2.5 text-xs flex flex-col justify-between">
                                    <div class="space-y-2">
                                        <div class="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-100 pb-1.5">
                                            <span class="font-bold text-slate-900">[${q.qNo < 10 ? '0' + q.qNo : q.qNo}] ${escapeHtml(q.type)}</span>
                                            ${isTeacher ? `<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold font-mono">정답: ${q.ans !== undefined ? (typeof q.ans === 'number' ? q.ans + 1 + '번' : q.ans) : (q.ansIdx ? q.ansIdx + '번 (' + q.correctWord + ')' : '')}</span>` : ''}
                                        </div>
                                        <p class="font-medium text-slate-800 leading-relaxed font-sans">${escapeHtml(q.stem)}</p>

                                        ${q.sentence ? `
                                            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200/80 font-serif text-slate-900 leading-relaxed">
                                                ${escapeHtml(q.sentence)}
                                            </div>
                                        ` : ''}

                                        ${q.options ? `
                                            <div class="space-y-1 pt-1 font-serif">
                                                ${q.options.map((opt, oIdx) => `
                                                    <div class="flex items-center gap-2 p-1.5 rounded-lg ${isTeacher && q.ans === oIdx ? 'bg-emerald-50 font-bold text-emerald-900 border border-emerald-200' : 'hover:bg-slate-50'}">
                                                        <span class="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[10px] shrink-0 font-mono">${oIdx + 1}</span>
                                                        <span>${escapeHtml(opt)}</span>
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}

                                        ${q.korean ? `
                                            <div class="p-2.5 bg-indigo-50/50 rounded-xl text-indigo-950 font-sans">
                                                <span class="font-bold">[우리말]:</span> ${escapeHtml(q.korean)}
                                            </div>
                                        ` : ''}
                                        ${q.words ? `
                                            <div class="p-2 bg-slate-100 rounded-lg text-slate-700 font-mono text-[11px]">
                                                [보기]: ${q.words.map(w => escapeHtml(w)).join(' / ')}
                                            </div>
                                        ` : ''}
                                    </div>

                                    ${isTeacher && q.explanation ? `
                                        <div class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-[11px] font-sans mt-2">
                                            💡 <strong>해설:</strong> ${escapeHtml(q.explanation)}
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- [Section 4] 고난도 킬러 서술형 (3문항) -->
                    <div class="space-y-4 pt-4 border-t-2 border-slate-800">
                        <div class="flex items-center justify-between border-b-2 border-slate-800 pb-2">
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs font-bold font-mono">4</span>
                                <h3 class="font-serif font-black text-base sm:text-lg text-slate-900">고난도 킬러 서술형 (3문항)</h3>
                            </div>
                            <span class="text-xs font-mono text-slate-500">각 5점 • 총 15점</span>
                        </div>
                        <div class="space-y-3">
                            ${sec4.map(k => `
                                <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 text-xs">
                                    <div class="font-bold text-slate-900 flex items-center justify-between">
                                        <span>${escapeHtml(k.stem)}</span>
                                        ${isTeacher ? `<span class="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">서술형 모범답안</span>` : ''}
                                    </div>
                                    <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 font-sans text-slate-800">
                                        ${escapeHtml(k.korean)}
                                    </div>
                                    <div class="p-2.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-950 space-y-1">
                                        <div class="font-bold text-[11px]">📋 필수 작성 조건:</div>
                                        ${(k.conditions || []).map(c => `<div class="text-[11px]">• ${escapeHtml(c)}</div>`).join('')}
                                    </div>
                                    ${isTeacher ? `
                                        <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1.5">
                                            <div class="font-bold font-serif text-sm">모범 답안: ${escapeHtml(k.modelAnswer)}</div>
                                            <div class="text-[11px] text-slate-600 font-sans">
                                                <strong>채점 기준표:</strong> ${Object.entries(k.rubric || {}).map(([k, v]) => `${k} (${v}점)`).join(' | ')}
                                            </div>
                                        </div>
                                    ` : `
                                        <div class="h-14 border border-dashed border-slate-300 rounded-xl bg-slate-50/50 p-2 text-slate-400 font-mono text-[11px]">
                                            답안 작성란: __________________________________________________________________
                                        </div>
                                    `}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- [Section 5] 복습 & 오답 클리닉 리플렉션 노트 -->
                    <div class="p-6 rounded-3xl bg-slate-900 text-white space-y-4">
                        <div class="flex items-center gap-2">
                            <span class="w-6 h-6 rounded-lg bg-emerald-500 text-slate-900 flex items-center justify-center text-xs font-bold font-mono">5</span>
                            <h3 class="font-serif font-bold text-base sm:text-lg text-white">복습 &amp; 오답 클리닉 리플렉션 노트</h3>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                            <div class="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
                                <div class="font-bold text-emerald-400">🔑 오늘 학습 핵심 키워드 자가진단</div>
                                ${(sec5.coreKeywords || []).map(kw => `<div class="flex items-center gap-2"><span>[  ]</span> <span>${escapeHtml(kw)}</span></div>`).join('')}
                            </div>
                            <div class="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
                                <div class="font-bold text-amber-300">📝 My Error Note (오답 원인 분석)</div>
                                <div class="text-slate-300 text-[11px] leading-relaxed">
                                    ${escapeHtml(sec5.reflectionPrompt || '틀린 문제의 번호와 이유를 간략히 기록하세요.')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ======================================================================
        // 2. 독해 Clinic 스튜디오 뷰어 렌더러 (4-Stage Workflow)
        // ======================================================================
        renderReadingStudio(level, unit) {
            const spList = unit.stage1_spotlight || [];
            const passage = unit.stage2_passage || {};
            const compList = unit.stage3_comprehension || [];
            const gramList = unit.stage4_grammar || [];
            const tg = unit.teacherGuide || {};
            const isTeacher = this.viewRole === 'teacher';

            return `
                <div class="clinic-paper max-w-5xl mx-auto space-y-8 print:space-y-6 print:m-0 print:p-0">
                    <!-- 표제부 헤더 -->
                    <div class="border-b-2 border-slate-900 pb-4 flex items-end justify-between">
                        <div>
                            <div class="text-[11px] font-mono font-bold text-blue-800 tracking-wider">VERITAS ENGLISH READING CLINIC • ${level.levelName.toUpperCase()}</div>
                            <h2 class="text-2xl sm:text-3xl font-serif font-black text-slate-900 mt-1">
                                ${escapeHtml(unit.passageTitle || unit.title)}
                            </h2>
                        </div>
                        <div class="text-right text-xs font-mono text-slate-500">
                            <div>Target Time: ${passage.targetTimeSec || 60}s (${passage.wordCount || 100} words)</div>
                            <div>Score: _______ / 100</div>
                        </div>
                    </div>

                    <!-- 좌우 2단 배치 또는 입체 워크아웃 -->
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <!-- 좌측 컬럼 (Stage 1 & Stage 2 지문) -->
                        <div class="lg:col-span-7 space-y-6">
                            <!-- Stage 1. 지문 속 문법 스포트라이트 -->
                            <div class="p-5 rounded-3xl bg-blue-50/60 border border-blue-200 space-y-3">
                                <div class="flex items-center gap-2 pb-2 border-b border-blue-200">
                                    <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold font-mono">1</span>
                                    <h4 class="font-serif font-bold text-sm text-blue-950">지문 속 핵심 문법 스포트라이트 (Grammar Spotlight)</h4>
                                </div>
                                <div class="space-y-2.5">
                                    ${spList.map(sp => `
                                        <div class="p-3 rounded-2xl bg-white border border-blue-100 shadow-2xs text-xs space-y-1">
                                            <div class="font-serif font-bold text-blue-950">${escapeHtml(sp.en)}</div>
                                            <div class="text-slate-500 font-sans text-[11px]">${escapeHtml(sp.ko)}</div>
                                            <div class="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded inline-block mt-1">
                                                구조: ${escapeHtml(sp.syntax)} • ${escapeHtml(sp.point)}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Stage 2. 실전 독해 지문 (Passage) -->
                            <div class="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-4">
                                <div class="flex items-center justify-between pb-2 border-b border-slate-100">
                                    <div class="flex items-center gap-2">
                                        <span class="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold font-mono">2</span>
                                        <h4 class="font-serif font-bold text-base text-slate-900">실전 독해 지문 (Passage)</h4>
                                    </div>
                                    <div class="flex items-center gap-2 text-xs font-mono text-slate-500">
                                        <i data-lucide="timer" class="w-4 h-4 text-blue-600"></i>
                                        <span>권장 읽기 시간: ${passage.targetTimeSec || 60}초</span>
                                    </div>
                                </div>

                                <!-- 지문 본문 -->
                                <div class="font-serif text-sm text-slate-800 leading-loose space-y-3 tracking-normal text-justify">
                                    ${(passage.text || '').split('\n\n').map(p => `
                                        <p class="p-1">${escapeHtml(p)}</p>
                                    `).join('')}
                                </div>

                                <!-- Footnote 어휘 각주 -->
                                ${(passage.footnoteVocab || []).length > 0 ? `
                                    <div class="pt-3 border-t border-slate-100">
                                        <div class="text-[11px] font-bold text-slate-500 mb-1.5 font-mono">📌 Footnote Vocabulary (지문 어휘 각주)</div>
                                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
                                            ${(passage.footnoteVocab || []).map(v => `
                                                <div class="p-1.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-1.5">
                                                    <span class="font-bold text-blue-900 font-serif">${escapeHtml(v.word)}</span>
                                                    <span class="text-slate-500 truncate">${escapeHtml(v.meaning)}</span>
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                ` : ''}

                                ${isTeacher && tg.translation ? `
                                    <div class="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-xs text-indigo-950 space-y-1.5 mt-4">
                                        <div class="font-bold font-serif">📖 지문 전문 해석 및 해설 (Teacher's Guide)</div>
                                        <div class="whitespace-pre-line font-sans leading-relaxed text-slate-700">${escapeHtml(tg.translation)}</div>
                                    </div>
                                ` : ''}
                            </div>
                        </div>

                        <!-- 우측 컬럼 (Stage 3 & Stage 4 문제부) -->
                        <div class="lg:col-span-5 space-y-6">
                            <!-- Stage 3. 실전 독해 평가 3문항 -->
                            <div class="space-y-4">
                                <div class="flex items-center gap-2 pb-2 border-b-2 border-slate-800">
                                    <span class="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold font-mono">3</span>
                                    <h4 class="font-serif font-black text-sm text-slate-900">실전 독해 평가 3문항 (Comprehension)</h4>
                                </div>
                                <div class="space-y-3">
                                    ${compList.map(q => `
                                        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
                                            <div class="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-100 pb-1">
                                                <span class="font-bold text-slate-800">[Q${q.qNo}] ${escapeHtml(q.type)}</span>
                                                ${isTeacher ? `<span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold font-mono">정답: ${q.ans + 1}번</span>` : ''}
                                            </div>
                                            <p class="font-medium text-slate-900">${escapeHtml(q.q)}</p>
                                            <div class="space-y-1 pt-1 font-serif">
                                                ${(q.options || []).map((opt, oIdx) => `
                                                    <div class="flex items-start gap-1.5 p-1 rounded-lg ${isTeacher && q.ans === oIdx ? 'bg-blue-50 font-bold text-blue-900 border border-blue-200' : 'hover:bg-slate-50'}">
                                                        <span class="w-3.5 h-3.5 rounded-full border border-slate-300 flex items-center justify-center text-[9px] shrink-0 font-mono mt-0.5">${oIdx + 1}</span>
                                                        <span class="text-[11px] leading-snug">${escapeHtml(opt)}</span>
                                                    </div>
                                                `).join('')}
                                            </div>
                                            ${isTeacher && q.explanation ? `
                                                <div class="p-2 rounded-xl bg-blue-50/60 border border-blue-100 text-[10px] text-blue-950 font-sans mt-1">
                                                    💡 ${escapeHtml(q.explanation)}
                                                </div>
                                            ` : ''}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Stage 4. 지문 기반 실전 어법 2문항 -->
                            <div class="space-y-4 pt-2">
                                <div class="flex items-center gap-2 pb-2 border-b-2 border-slate-800">
                                    <span class="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold font-mono">4</span>
                                    <h4 class="font-serif font-black text-sm text-slate-900">지문 기반 실전 어법 적용 2문항 (Applied Grammar)</h4>
                                </div>
                                <div class="space-y-3">
                                    ${gramList.map(q => `
                                        <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
                                            <div class="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-100 pb-1">
                                                <span class="font-bold text-slate-800">[Q${q.qNo}] ${escapeHtml(q.type)}</span>
                                                ${isTeacher ? `<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold font-mono">정답: ${escapeHtml(q.ans)}</span>` : ''}
                                            </div>
                                            <p class="font-medium text-slate-900">${escapeHtml(q.q)}</p>
                                            ${q.targetSentence ? `<div class="p-2 rounded-lg bg-slate-50 font-serif text-[11px]">${escapeHtml(q.targetSentence)}</div>` : ''}
                                            ${q.targetTemplate ? `<div class="p-2 rounded-lg bg-slate-50 font-serif text-[11px]">${escapeHtml(q.targetTemplate)}</div>` : ''}
                                            ${isTeacher && q.explanation ? `
                                                <div class="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-[10px] text-emerald-950 font-sans mt-1">
                                                    💡 ${escapeHtml(q.explanation)}
                                                </div>
                                            ` : `
                                                <div class="h-10 border border-dashed border-slate-300 rounded-lg bg-slate-50 p-1.5 text-slate-400 text-[10px]">
                                                    서술형 정답 기재란: _________________________________________
                                                </div>
                                            `}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // ======================================================================
        // 3. 쓰기 Clinic 스튜디오 뷰어 렌더러 (3-Step Writing Workout)
        // ======================================================================
        renderWritingStudio(level, unit) {
            const step1 = unit.step1_conditioned || [];
            const step2 = unit.step2_direct || [];
            const step3 = unit.step3_killer || [];
            const rubric = unit.rubricSummary || {};
            const isTeacher = this.viewRole === 'teacher';

            return `
                <div class="clinic-paper max-w-5xl mx-auto space-y-8 print:space-y-6 print:m-0 print:p-0">
                    <!-- 표제부 헤더 -->
                    <div class="border-b-2 border-slate-900 pb-4 flex items-end justify-between">
                        <div>
                            <div class="text-[11px] font-mono font-bold text-amber-800 tracking-wider">VERITAS ENGLISH WRITING CLINIC • ${level.levelName.toUpperCase()}</div>
                            <h2 class="text-2xl sm:text-3xl font-serif font-black text-slate-900 mt-1">
                                ${level.isSpecial ? '제' + unit.unitNo + '강.' : 'Unit ' + unit.unitNo + '.'} ${escapeHtml(unit.title)} 서술형 집중 영작
                            </h2>
                        </div>
                        <div class="text-right text-xs font-mono text-slate-500">
                            <div>Total Questions: 15 Questions</div>
                            <div>Score: _______ / 100</div>
                        </div>
                    </div>

                    <!-- Step 1. 힌트 어휘 제공 조건 영작 (6문항) -->
                    <div class="space-y-4">
                        <div class="flex items-center justify-between border-b-2 border-slate-800 pb-2">
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center text-xs font-bold font-mono">1</span>
                                <h3 class="font-serif font-black text-base text-slate-900">Step 1. 힌트 어휘 조건 영작 (Conditioned Writing - 6문항)</h3>
                            </div>
                            <span class="text-xs font-mono text-slate-500">각 5점 • 총 30점</span>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            ${step1.map(q => `
                                <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
                                    <div class="flex items-center justify-between text-[11px] text-slate-500">
                                        <span class="font-bold text-slate-800">${escapeHtml(q.stem)}</span>
                                        ${isTeacher ? `<span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono font-bold">모범답안</span>` : ''}
                                    </div>
                                    <div class="p-2.5 rounded-xl bg-slate-50 font-sans text-slate-900">
                                        ${escapeHtml(q.korean)}
                                    </div>
                                    <div class="p-2 rounded-lg bg-amber-50 text-amber-900 font-mono text-[11px]">
                                        [필수 제시 단어]: ${(q.mandatoryWords || []).join(', ')}
                                    </div>
                                    ${isTeacher ? `
                                        <div class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-serif font-bold text-sm">
                                            👉 ${escapeHtml(q.modelAnswer)}
                                            <div class="text-[10px] font-sans font-normal text-emerald-800 mt-1">${escapeHtml(q.explanation)}</div>
                                        </div>
                                    ` : `
                                        <div class="h-12 border border-dashed border-slate-300 rounded-xl bg-slate-50 p-2 text-slate-400 text-[11px]">
                                            답안: ____________________________________________________________________
                                        </div>
                                    `}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Step 2. 우리말 해석 직결 완성 영작 (6문항) -->
                    <div class="space-y-4 pt-4 border-t-2 border-slate-800">
                        <div class="flex items-center justify-between border-b-2 border-slate-800 pb-2">
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold font-mono">2</span>
                                <h3 class="font-serif font-black text-base text-slate-900">Step 2. 우리말 해석 직결 완성 영작 (Direct Writing - 6문항)</h3>
                            </div>
                            <span class="text-xs font-mono text-slate-500">각 6점 • 총 36점</span>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                            ${step2.map(q => `
                                <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs">
                                    <div class="flex items-center justify-between text-[11px] text-slate-500">
                                        <span class="font-bold text-slate-800">${escapeHtml(q.stem)}</span>
                                        ${isTeacher ? `<span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono font-bold">모범답안</span>` : ''}
                                    </div>
                                    <div class="p-2.5 rounded-xl bg-slate-50 font-sans text-slate-900">
                                        ${escapeHtml(q.koreanPrompt)}
                                    </div>
                                    <div class="text-[10px] font-mono text-indigo-700">
                                        [목표 문법]: ${escapeHtml(q.grammarTag)}
                                    </div>
                                    ${isTeacher ? `
                                        <div class="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-serif font-bold text-sm">
                                            👉 ${escapeHtml(q.modelAnswer)}
                                            <div class="text-[10px] font-sans font-normal text-emerald-800 mt-1">${escapeHtml(q.explanation)}</div>
                                        </div>
                                    ` : `
                                        <div class="h-12 border border-dashed border-slate-300 rounded-xl bg-slate-50 p-2 text-slate-400 text-[11px]">
                                            답안: ____________________________________________________________________
                                        </div>
                                    `}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Step 3. 학교 기출 변형 킬러 서술형 (3문항) & 감점 방지 루브릭 -->
                    <div class="space-y-4 pt-4 border-t-2 border-slate-800">
                        <div class="flex items-center justify-between border-b-2 border-slate-800 pb-2">
                            <div class="flex items-center gap-2">
                                <span class="w-6 h-6 rounded-lg bg-rose-600 text-white flex items-center justify-center text-xs font-bold font-mono">3</span>
                                <h3 class="font-serif font-black text-base text-slate-900">Step 3. 학교 기출 변형 킬러 서술형 (Exam Killer - 3문항)</h3>
                            </div>
                            <span class="text-xs font-mono text-slate-500">각 8점 • 총 24점</span>
                        </div>
                        <div class="space-y-3">
                            ${step3.map(q => `
                                <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3 text-xs">
                                    <div class="font-bold text-slate-900">${escapeHtml(q.stem)}</div>
                                    <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-sans">
                                        <strong>[상황 제시]:</strong> ${escapeHtml(q.situation)}
                                    </div>
                                    <div class="p-2.5 bg-rose-50 rounded-xl border border-rose-200 text-rose-950 space-y-1">
                                        <div class="font-bold text-[11px]">📋 필수 작성 조건:</div>
                                        ${(q.conditions || []).map(c => `<div class="text-[11px]">• ${escapeHtml(c)}</div>`).join('')}
                                    </div>
                                    ${isTeacher ? `
                                        <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                                            <div class="font-bold font-serif text-sm">모범 답안: ${escapeHtml(q.modelAnswer)}</div>
                                            <div class="text-[11px] text-slate-600 font-sans">
                                                <strong>채점 기준:</strong> ${Object.entries(q.rubric || {}).map(([k, v]) => `${k} (${v}점)`).join(' | ')}
                                            </div>
                                        </div>
                                    ` : `
                                        <div class="h-16 border border-dashed border-slate-300 rounded-xl bg-slate-50 p-2 text-slate-400 text-[11px]">
                                            답안 작성란: __________________________________________________________________
                                        </div>
                                    `}
                                </div>
                            `).join('')}
                        </div>

                        <!-- 감점 방지 루브릭 요약표 -->
                        <div class="p-5 rounded-3xl bg-slate-900 text-white space-y-3 mt-6">
                            <div class="text-xs font-bold text-rose-400 flex items-center gap-1.5 font-mono">
                                <i data-lucide="shield-alert" class="w-4 h-4"></i>
                                <span>내신 서술형 0점 방지 절대 루브릭 (Scoring Rubric)</span>
                            </div>
                            <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px]">
                                ${(rubric.deductionPoints || []).map(dp => `
                                    <div class="p-2 rounded-xl bg-white/10 border border-white/10 space-y-0.5">
                                        <div class="text-slate-300">${escapeHtml(dp.item)}</div>
                                        <div class="font-bold text-rose-400 font-mono">${escapeHtml(dp.deduction)}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    }

    window.clinicStudioEngine = new ClinicStudioEngine();

})(window);
