/**
 * VERITAS ENGLISH - 3대 부교재 완권 출판 스튜디오 엔진 (ClinicStudioEngine)
 * - 📗 [문법 Clinic] • 📘 [독해 Clinic] • 📙 [쓰기 Clinic]
 * - [본교재] vs [정답 및 해설 (문제 답안지 & 풀이)] 완벽 분리
 * - [교재 전체 (완권)] 메인 기본 보기 & 인쇄 + [개별 단원] 선택 지원
 * - [교재 목차 (Table of Contents)] 파트별 상세 안내 및 학습 목표 탑재
 * - [A4 4페이지 완결 조판]: 개념 전용면(Sheet 1) / 기초 드릴 & 실전 Part 1(Sheet 2) / 실전 Part 2(Sheet 3) / 킬러 서술형 & 오답노트(Sheet 4)
 * - 밋밋함을 완전히 탈피한 출판 교재급 프리미엄 비주얼 디자인 (시그니처 컬러, 리본 배지, 듀얼톤 카드, 모눈 오답노트)
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

    // 권별 시그니처 비주얼 & 컬러 테마
    const THEME_META = {
        lv0: {
            titleKo: '초등 기초 영문법',
            subKo: '품사 & 기초 어순 완성편',
            themeName: 'Sky & Mint',
            primaryHex: '#0284c7',
            secondaryHex: '#0369a1',
            accentHex: '#0ea5e9',
            lightBg: '#f0f9ff',
            badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
            headerBg: 'from-sky-900 via-slate-900 to-sky-950',
            accentBorder: 'border-sky-500'
        },
        lv1: {
            titleKo: '중등 내신 입문 [중1]',
            subKo: '문장의 5형식 & 기초 시제 완성편',
            themeName: 'Emerald & Forest',
            primaryHex: '#059669',
            secondaryHex: '#047857',
            accentHex: '#10b981',
            lightBg: '#ecfdf5',
            badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
            headerBg: 'from-emerald-950 via-slate-900 to-emerald-900',
            accentBorder: 'border-emerald-500'
        },
        lv2: {
            titleKo: '중등 내신 완성 [중2]',
            subKo: 'to부정사·현재완료·수동태 완성편',
            themeName: 'Indigo & Royal',
            primaryHex: '#4f46e5',
            secondaryHex: '#4338ca',
            accentHex: '#6366f1',
            lightBg: '#eef2ff',
            badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300',
            headerBg: 'from-indigo-950 via-slate-900 to-indigo-900',
            accentBorder: 'border-indigo-500'
        },
        lv3: {
            titleKo: '중등 내신 심화 [중3]',
            subKo: '분사구문·가정법·관계부사 심화편',
            themeName: 'Classic Blue & Navy',
            primaryHex: '#2563eb',
            secondaryHex: '#1d4ed8',
            accentHex: '#3b82f6',
            lightBg: '#eff6ff',
            badgeBg: 'bg-blue-100 text-blue-900 border-blue-300',
            headerBg: 'from-blue-950 via-slate-900 to-slate-950',
            accentBorder: 'border-blue-500'
        },
        lv4: {
            titleKo: '고교 내신 마스터 [고1·2]',
            subKo: '어법 수일치·준동사·도치 마스터편',
            themeName: 'Crimson & Bordeaux',
            primaryHex: '#e11d48',
            secondaryHex: '#be123c',
            accentHex: '#f43f5e',
            lightBg: '#fff1f2',
            badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
            headerBg: 'from-rose-950 via-slate-900 to-rose-900',
            accentBorder: 'border-rose-500'
        },
        lv5: {
            titleKo: '수능 1등급 킬러 [고3·수능]',
            subKo: '평가원 29번 어법 & 고난도 구문편',
            themeName: 'Imperial Amber & Obsidian',
            primaryHex: '#d97706',
            secondaryHex: '#b45309',
            accentHex: '#f59e0b',
            lightBg: '#fffbeb',
            badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
            headerBg: 'from-amber-950 via-slate-900 to-stone-950',
            accentBorder: 'border-amber-500'
        },
        sp_terms: {
            titleKo: '문법 용어 개념 특강',
            subKo: '품사와 문장성분 1:1 직결 독해편',
            themeName: 'Royal Purple',
            primaryHex: '#7c3aed',
            secondaryHex: '#6d28d9',
            accentHex: '#8b5cf6',
            lightBg: '#f5f3ff',
            badgeBg: 'bg-purple-100 text-purple-900 border-purple-300',
            headerBg: 'from-purple-950 via-slate-900 to-purple-900',
            accentBorder: 'border-purple-500'
        },
        sp_writing: {
            titleKo: '서술형 핵심 구문 특강',
            subKo: '내신 서술형 단골 구문 정복편',
            themeName: 'Royal Purple',
            primaryHex: '#7c3aed',
            secondaryHex: '#6d28d9',
            accentHex: '#8b5cf6',
            lightBg: '#f5f3ff',
            badgeBg: 'bg-purple-100 text-purple-900 border-purple-300',
            headerBg: 'from-purple-950 via-slate-900 to-purple-900',
            accentBorder: 'border-purple-500'
        },
        sp_csat: {
            titleKo: '수능 29번 킬러 특강',
            subKo: '평가원 10개년 출제 공식 TOP 10',
            themeName: 'Royal Purple',
            primaryHex: '#7c3aed',
            secondaryHex: '#6d28d9',
            accentHex: '#8b5cf6',
            lightBg: '#f5f3ff',
            badgeBg: 'bg-purple-100 text-purple-900 border-purple-300',
            headerBg: 'from-purple-950 via-slate-900 to-purple-900',
            accentBorder: 'border-purple-500'
        },
        sp_vs: {
            titleKo: '혼동 문법 VS 특강',
            subKo: '헷갈리는 문법 대조 클리닉편',
            themeName: 'Royal Purple',
            primaryHex: '#7c3aed',
            secondaryHex: '#6d28d9',
            accentHex: '#8b5cf6',
            lightBg: '#f5f3ff',
            badgeBg: 'bg-purple-100 text-purple-900 border-purple-300',
            headerBg: 'from-purple-950 via-slate-900 to-purple-900',
            accentBorder: 'border-purple-500'
        },
        syntax_p1: {
            titleKo: '상관접속사 & 전치사적 관용구문',
            subKo: 'B as well as A & When it comes to 완벽 정복편',
            themeName: 'Teal & Emerald',
            primaryHex: '#0d9488',
            secondaryHex: '#0f766e',
            accentHex: '#14b8a6',
            lightBg: '#f0fdfa',
            badgeBg: 'bg-teal-100 text-teal-900 border-teal-300',
            headerBg: 'from-teal-950 via-slate-900 to-teal-900',
            accentBorder: 'border-teal-500'
        },
        syntax_p2: {
            titleKo: '인과·결과·비교·정도 구문',
            subKo: 'so~that, too~to, the 비교급 the 비교급 마스터편',
            themeName: 'Indigo & Royal Blue',
            primaryHex: '#4f46e5',
            secondaryHex: '#4338ca',
            accentHex: '#6366f1',
            lightBg: '#eef2ff',
            badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300',
            headerBg: 'from-indigo-950 via-slate-900 to-indigo-900',
            accentBorder: 'border-indigo-500'
        },
        syntax_p3: {
            titleKo: '가주어·가목적어 & 강조·도치 구문',
            subKo: 'It is ~ that 강조, 5형식 it, 부정어 도치 완성편',
            themeName: 'Rose & Crimson',
            primaryHex: '#e11d48',
            secondaryHex: '#be123c',
            accentHex: '#f43f5e',
            lightBg: '#fff1f2',
            badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
            headerBg: 'from-rose-950 via-slate-900 to-rose-900',
            accentBorder: 'border-rose-500'
        },
        theme_t1: {
            titleKo: '시제·조동사·가정법 뉘앙스 정복',
            subKo: '현재완료 vs 과거, 조동사+have p.p., 가정법 특강편',
            themeName: 'Amber & Bronze',
            primaryHex: '#d97706',
            secondaryHex: '#b45309',
            accentHex: '#f59e0b',
            lightBg: '#fffbeb',
            badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
            headerBg: 'from-amber-950 via-slate-900 to-amber-900',
            accentBorder: 'border-amber-500'
        },
        theme_t2: {
            titleKo: '준동사 삼국지 & 능동·수동 판별',
            subKo: 'to-v vs -ing 목적어, 분사구문 태 판별 마스터편',
            themeName: 'Sky & Cyan',
            primaryHex: '#0284c7',
            secondaryHex: '#0369a1',
            accentHex: '#0ea5e9',
            lightBg: '#f0fdfa',
            badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
            headerBg: 'from-sky-950 via-slate-900 to-sky-900',
            accentBorder: 'border-sky-500'
        },
        theme_t3: {
            titleKo: '관계사·접속사 & 수능 어법 킬러',
            subKo: 'that vs what 3초 판별, 관계사 vs 관계부사, 수일치편',
            themeName: 'Purple & Violet',
            primaryHex: '#7c3aed',
            secondaryHex: '#6d28d9',
            accentHex: '#8b5cf6',
            lightBg: '#f5f3ff',
            badgeBg: 'bg-purple-100 text-purple-900 border-purple-300',
            headerBg: 'from-purple-950 via-slate-900 to-purple-900',
            accentBorder: 'border-purple-500'
        }
    };

    // 파트별 명확한 단원 구성 및 학습 목표
    const LEVEL_PARTS_INFO = {
        syntax_p1: [
            { no: 'PART 1', title: '상관접속사의 수일치와 전치사적 관용표현', goal: 'B as well as A, either/neither, both/not A but B, When it comes to', range: [1, 5] },
            { no: 'PART 2', title: '학술 전치사구와 양보·대안·원인 표현', goal: 'Despite vs Although, On behalf of, Instead of, Apart from, Due to', range: [6, 10] }
        ],
        syntax_p2: [
            { no: 'PART 1', title: '인과와 목적 & 정도 구문 핵심 공식', goal: 'so~that vs such~that, so that can, too~to, enough to, the비교급 the비교급', range: [1, 5] },
            { no: 'PART 2', title: '고난도 비교 관용 표현과 시간 도치', goal: 'as as possible, cannot too, no sooner than, all the more, no more than', range: [6, 10] }
        ],
        syntax_p3: [
            { no: 'PART 1', title: '가주어·가목적어와 시간·비용 특수구문', goal: 'for/of to-v, It is 형 that, 5형식 make it 형 to-v, It takes 시간 to-v', range: [1, 5] },
            { no: 'PART 2', title: '강조구문과 부정어/장소부사 도치 마스터', goal: 'It is that 강조 vs 가주어, 부정어 도치, 장소 도치, 독립분사구문', range: [6, 10] }
        ],
        theme_t1: [
            { no: 'PART 1', title: '시제의 타임라인과 조동사 뉘앙스 정복', goal: '과거 vs 현재완료, 현재완료 4대 용법, had p.p., 조동사+have p.p.', range: [1, 5] },
            { no: 'PART 2', title: '당위성 동사와 가정법 킬러 공식', goal: 'should 동원, 가정법 과거/과거완료, 혼합가정법, I wish/as if, Without/But for', range: [6, 10] }
        ],
        theme_t2: [
            { no: 'PART 1', title: 'to부정사 vs 동명사 목적어 삼국지', goal: 'to-v vs -ing 취하는 동사, 둘 다 취하는 동사, 부사적 용법, 동명사 관용구', range: [1, 5] },
            { no: 'PART 2', title: '분사의 명사수식과 분사구문 능동/수동', goal: '전치사 to, -ing vs p.p. 수식, 감정분사, 분사구문 태, with+O+OC, 수동태 to부활', range: [6, 10] }
        ],
        theme_t3: [
            { no: 'PART 1', title: '관계사와 접속사 판별 3초 킬러 공식', goal: 'that vs what, 계속적 용법, 관계사 vs 관계부사, 전치사+관계대명사', range: [1, 5] },
            { no: 'PART 2', title: '복합관계사와 수능 빈출 1순위 수일치', goal: '복합관계사, 주어-동사 수일치, 부분표현 수일치, 병렬구조, that/those 대명사', range: [6, 10] }
        ],
        lv0: [
            { no: 'PART 1', title: '명사와 관사 & 인칭대명사의 기초', goal: 'a/an/the 관사와 명사의 단·복수, 인칭대명사 주격·소유격 및 be동사 현재형 완성', range: [1, 5] },
            { no: 'PART 2', title: '일반동사의 현재형과 형용사·부사', goal: '3인칭 단수 -s/-es 규칙, don\'t/doesn\'t 부정문 및 형용사·부사의 꾸밈 원리', range: [6, 10] },
            { no: 'PART 3', title: '의문사 의문문과 조동사 & 과거시제', goal: '6하원칙 의문사(Who/What/Where/When/Why/How), can/may 및 be동사 과거형', range: [11, 15] },
            { no: 'PART 4', title: '진행형과 특수구문 & 문장 연결', goal: '현재진행형(be+ing), There is/are 유도부사, 명령문/감탄문 및 기초 접속사', range: [16, 20] }
        ],
        lv1: [
            { no: 'PART 1', title: '문장의 기초 골격과 시제의 시작', goal: 'be동사/일반동사 과거형, 명사/대명사 격변화 및 의문사 의문문 구조 판별', range: [1, 5] },
            { no: 'PART 2', title: '조동사와 문장의 기본 형식 (1~3형식)', goal: 'can/may/must/should의 뉘앙스, 문장 성분(S, V, O) 및 미래시제 will/be going to', range: [6, 10] },
            { no: 'PART 3', title: '2형식 감각동사와 4형식 & 비교 구문', goal: '감각동사+형용사 보어, 수여동사(to/for/of 전환), must/have to 및 원급·비교급', range: [11, 15] },
            { no: 'PART 4', title: '준동사의 기초와 연결사 마스터', goal: '시간 접속사(when/after), to부정사 명사적/형용사적 용법, 동명사 및 재귀대명사', range: [16, 20] }
        ],
        lv2: [
            { no: 'PART 1', title: '준동사 3대 용법과 현재완료 시제', goal: 'to부정사의 명사·형용사·부사적 용법, 동명사 목적어, 현재완료 4대 용법', range: [1, 5] },
            { no: 'PART 2', title: '조동사 심화와 수동태의 기초', goal: 'used to/would like to, 수동태 기본(be+p.p. by), 부사절 접속사 및 완료시제', range: [6, 10] },
            { no: 'PART 3', title: '5형식 목적격보어와 수동태의 확장', goal: 'to부정사 취하는 5형식 동사, 사역·지각동사, 조동사 수동태 및 관용 수동태', range: [11, 15] },
            { no: 'PART 4', title: '관계대명사와 부사절 접속사 총정리', goal: '주격/목적격/소유격 관계사, that 특별용법, 생략 규칙 및 부사절 접속사 완성', range: [16, 20] }
        ],
        lv3: [
            { no: 'PART 1', title: '5형식 심화와 관계사의 본질', goal: '사역/지각동사 원형보어, 관계대명사 격변화, that vs what 및 관계부사 완성', range: [1, 5] },
            { no: 'PART 2', title: '분사와 분사구문 & 가정법 기초', goal: '감정 유발/느낌 분사, 분사구문 능동 전환, 가정법 과거 및 대과거/과거완료', range: [6, 10] },
            { no: 'PART 3', title: '관계사 심화와 복합관계사 구문', goal: '관계대명사 계속적 용법, what vs that 심층 판별, 복합관계사 및 가정법 과거완료', range: [11, 15] },
            { no: 'PART 4', title: '특수 분사구문과 시제일치·화법', goal: 'I wish/as if 가정법, 완료/수동 분사구문, 간접의문문 어순 및 시제일치 화법', range: [16, 20] }
        ],
        lv4: [
            { no: 'PART 1', title: '고교 내신 어법 1순위: 수일치와 태', goal: '주어-동사 수일치, 능동태 vs 수동태 심화, 준동사 시제/태, that vs what, 가목적어', range: [1, 5] },
            { no: 'PART 2', title: '준동사·관계사 고난도와 병렬 구조', goal: '상관접속사 병렬, 분사구문 심화, 관계대명사 vs 관계부사, 조동사+have p.p.', range: [6, 10] },
            { no: 'PART 3', title: '특수구문과 비교 구문 심화 마스터', goal: '도치 구문, 강조 it is ~ that, 형용사 vs 부사, the비교급 the비교급, 명사절 접속사', range: [11, 15] },
            { no: 'PART 4', title: '수능·내신 복합 킬러 서술형 어법', goal: '5형식 목적격보어 형용사, 가목적어 it, 복합관계부사, 비교대상 일치, 부정어 도치', range: [16, 20] }
        ],
        lv5: [
            { no: 'PART 1', title: '평가원 29번 핵심 코드: 동사 vs 준동사', goal: '본동사 자리 판별, that vs what vs which 끝장 구별, 능동 vs 수동 태 판별', range: [1, 5] },
            { no: 'PART 2', title: '구조적 함정 탈출과 관계사 구문', goal: '대명사 수일치, 형용사 vs 부사, 병렬 구조 낚시 탈출, 대동사, 전치사+관계사', range: [6, 10] },
            { no: 'PART 3', title: '고난도 분사구문과 특수 도치 공식', goal: '독립분사구문 with+O+OC, 부정어/장소부사구 도치, It is~that 강조, 가정법 도치', range: [11, 15] },
            { no: 'PART 4', title: '수능 1등급 변별력 킬러 실전 모의', goal: '복합관계사, 부분부정, 무생물주어 구문, 평가원 빈출 29번 어법 실전 마스터', range: [16, 20] }
        ]
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
            const raw = window.GRAMMAR_STUDIO_EXT_DATA || [];
            const deduped = [];
            const seen = new Set();
            raw.forEach(item => {
                if (!seen.has(item.levelCode)) {
                    seen.add(item.levelCode);
                    deduped.push(item);
                }
            });
            if (window.GRAMMAR_SYNTAX_THEME_EXT_DATA && Array.isArray(window.GRAMMAR_SYNTAX_THEME_EXT_DATA)) {
                window.GRAMMAR_SYNTAX_THEME_EXT_DATA.forEach(extItem => {
                    if (!seen.has(extItem.levelCode)) {
                        seen.add(extItem.levelCode);
                        deduped.push(extItem);
                    }
                });
            }
            return deduped;
        }

        getReadingData() {
            const raw = window.READING_CLINIC_DATA || [];
            const deduped = [];
            const seen = new Set();
            raw.forEach(item => {
                if (!seen.has(item.levelCode)) {
                    seen.add(item.levelCode);
                    deduped.push(item);
                }
            });
            if (window.GRAMMAR_SYNTAX_THEME_READING_DATA && Array.isArray(window.GRAMMAR_SYNTAX_THEME_READING_DATA)) {
                window.GRAMMAR_SYNTAX_THEME_READING_DATA.forEach(extItem => {
                    if (!seen.has(extItem.levelCode)) {
                        seen.add(extItem.levelCode);
                        deduped.push(extItem);
                    }
                });
            }
            return deduped;
        }

        getWritingData() {
            const raw = window.WRITING_CLINIC_DATA || [];
            const deduped = [];
            const seen = new Set();
            raw.forEach(item => {
                if (!seen.has(item.levelCode)) {
                    seen.add(item.levelCode);
                    deduped.push(item);
                }
            });
            if (window.GRAMMAR_SYNTAX_THEME_WRITING_DATA && Array.isArray(window.GRAMMAR_SYNTAX_THEME_WRITING_DATA)) {
                window.GRAMMAR_SYNTAX_THEME_WRITING_DATA.forEach(extItem => {
                    if (!seen.has(extItem.levelCode)) {
                        seen.add(extItem.levelCode);
                        deduped.push(extItem);
                    }
                });
            }
            return deduped;
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
            const bank = this.getCurrentDataBank();
            if (!bank.some(l => l.levelCode === this.currentLevelCode)) {
                this.currentLevelCode = bank[0] ? bank[0].levelCode : 'lv1';
            }
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

        getPartForUnit(levelCode, unitNo) {
            const parts = LEVEL_PARTS_INFO[levelCode] || [
                { no: 'PART 1', title: '기본 핵심 문법', goal: '단원 핵심 공식 습득', range: [1, 5] },
                { no: 'PART 2', title: '발전 문법 구문', goal: '문장 적용 및 확장', range: [6, 10] },
                { no: 'PART 3', title: '심화 문법 완성', goal: '어법 오류 판별', range: [11, 15] },
                { no: 'PART 4', title: '실전 기출 마스터', goal: '실전 서술형 정복', range: [16, 20] }
            ];
            for (const p of parts) {
                if (unitNo >= p.range[0] && unitNo <= p.range[1]) {
                    return p;
                }
            }
            return parts[0];
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
                            ${allLevels.map(l => {
                                let prefix = '📚 ';
                                if (l.levelCode && (l.levelCode.startsWith('syntax_') || l.levelCode.startsWith('theme_'))) {
                                    prefix = '🌟 ';
                                } else if (l.isSpecial) {
                                    prefix = '🎓 ';
                                }
                                return `
                                <option value="${l.levelCode}" ${l.levelCode === this.currentLevelCode ? 'selected' : ''}>
                                    ${prefix + l.levelName} (${(l.units || []).length}단원)
                                </option>
                                `;
                            }).join('')}
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

            // Sheet 3: [교재 목차 (Table of Contents)] 파트별 상세 안내 전용 페이지
            sheetsHtml += this.renderDedicatedTocSheet(level, isAnswers);

            // Sheet 4: 본교재는 [3회독 스터디 플래너], 답안지는 [20단원 빠른 정답표]
            if (!isAnswers) {
                sheetsHtml += this.renderPlannerSheet(level);
            } else {
                sheetsHtml += this.renderQuickAnswerSheet(level);
            }

            // Sheet 5 ~: 20개 단원 순차 조판 (단원별 A4 시트 완결 조판)
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
        // 1. 앞표지 시트 (Front Cover Sheet) - 프리미엄 아카데믹 스타일
        // ======================================================================
        renderCoverSheet(level, isAnswers) {
            const meta = THEME_META[level.levelCode] || THEME_META['lv1'];
            const modeMeta = this.getModeMeta();

            return `
                <div class="clinic-a4-sheet justify-between border-8 border-slate-900 bg-white p-14 text-slate-900 shadow-2xl relative overflow-hidden">
                    <!-- 정교한 골드 & 슬레이트 아카데믹 듀얼 프레임 -->
                    <div class="absolute inset-3 border-2 border-amber-600/60 pointer-events-none"></div>
                    <div class="absolute inset-5 border border-dashed border-slate-400 pointer-events-none"></div>

                    <!-- 코너 아카데믹 장식 -->
                    <div class="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-slate-900"></div>
                    <div class="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-slate-900"></div>
                    <div class="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-slate-900"></div>
                    <div class="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-slate-900"></div>

                    <!-- 표지 상단 헤더 -->
                    <div class="relative z-10 space-y-4 pt-2">
                        <div class="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                            <div class="flex items-center gap-2.5">
                                <div class="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center text-xl font-black shadow-md border border-slate-800">
                                    <i data-lucide="shield" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <div class="font-serif font-black tracking-widest text-xs text-slate-900 uppercase">VERITAS SCHOLARS' ACADEMY</div>
                                    <div class="text-[10px] font-mono text-slate-500">Premium Standard Curriculum Series</div>
                                </div>
                            </div>
                            <span class="px-3.5 py-1 rounded-full border-2 border-slate-900 font-mono text-[11px] font-bold tracking-widest bg-slate-50">2026 EDITION</span>
                        </div>

                        <!-- 답안지 vs 본교재 표지 배지 -->
                        ${isAnswers ? `
                            <div class="py-3 px-6 rounded-2xl bg-gradient-to-r from-rose-700 via-rose-600 to-rose-700 text-white font-serif font-black text-center text-base sm:text-lg tracking-widest shadow-lg border border-rose-800">
                                ★ [정답 및 해설 (문제 답안지 &amp; 풀이)] ★
                            </div>
                        ` : `
                            <div class="flex items-center gap-2">
                                <span class="px-3 py-1 rounded-lg bg-slate-900 text-emerald-300 font-mono text-xs font-bold tracking-wider">OFFICIAL WORKBOOK</span>
                                <span class="text-xs text-slate-500 font-sans font-medium">전국 중·고교 내신 및 수능 1등급 대비 교재</span>
                            </div>
                        `}
                    </div>

                    <!-- 표지 중앙 타이틀부 (강력한 시각적 위계) -->
                    <div class="relative z-10 my-auto text-center space-y-7 py-8">
                        <div class="space-y-3">
                            <div class="font-mono text-xs sm:text-sm font-black tracking-[0.3em] uppercase" style="color: ${meta.primaryHex};">
                                ${modeMeta.enTitle}
                            </div>
                            <h1 class="font-serif font-black text-5xl sm:text-6xl text-slate-950 tracking-tight leading-none drop-shadow-xs">
                                ${modeMeta.nameKo}
                            </h1>
                            <div class="text-2xl sm:text-3xl font-serif font-bold text-slate-800 pt-2 flex items-center justify-center gap-2">
                                <span class="w-8 h-0.5 bg-slate-400"></span>
                                <span>${level.isSpecial ? level.levelName : '제' + (level.levelCode.replace('lv', '')) + '권. ' + meta.titleKo}</span>
                                <span class="w-8 h-0.5 bg-slate-400"></span>
                            </div>
                            <p class="text-xs sm:text-sm text-slate-600 font-sans max-w-lg mx-auto pt-1 leading-relaxed">
                                ${meta.subKo} • 총 ${(level.units || []).length}개 소단원 완전 정복 마스터북
                            </p>
                        </div>

                        <!-- 3대 클리닉 트릴로지 심볼 박스 -->
                        <div class="inline-flex items-center gap-6 px-8 py-3 rounded-2xl bg-slate-50 border-2 border-slate-200 text-xs font-mono font-bold text-slate-700 shadow-2xs">
                            <span class="${this.currentMode === 'grammar' ? 'text-emerald-700 font-black' : ''}">📗 문법 (Grammar)</span>
                            <span class="text-slate-300">|</span>
                            <span class="${this.currentMode === 'reading' ? 'text-blue-700 font-black' : ''}">📘 독해 (Reading)</span>
                            <span class="text-slate-300">|</span>
                            <span class="${this.currentMode === 'writing' ? 'text-amber-700 font-black' : ''}">📙 쓰기 (Writing)</span>
                        </div>
                    </div>

                    <!-- 표지 하단 사용자 기재란 및 발행처 -->
                    <div class="relative z-10 space-y-6 pb-2">
                        <div class="p-5 rounded-2xl bg-slate-50 border-2 border-slate-200 grid grid-cols-2 gap-6 text-xs font-serif">
                            <div>
                                <span class="text-slate-400 text-[10px] block font-mono font-bold tracking-wider">AFFILIATION &amp; GRADE</span>
                                <span class="text-slate-900 font-bold text-sm">학교: _________________ 학년: ____</span>
                            </div>
                            <div>
                                <span class="text-slate-400 text-[10px] block font-mono font-bold tracking-wider">STUDENT'S NAME</span>
                                <span class="text-slate-900 font-bold text-sm">이름: _________________</span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t-2 border-slate-900">
                            <span class="font-bold tracking-wider">VERITAS SCHOLARS' PRESS</span>
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
            const meta = THEME_META[level.levelCode] || THEME_META['lv1'];

            return `
                <div class="clinic-a4-sheet justify-between border border-slate-300 bg-white p-10 text-slate-900 shadow-md">
                    <!-- 상단 헤더 -->
                    <div class="border-b-2 border-slate-900 pb-3 flex items-end justify-between">
                        <div>
                            <div class="text-[10px] font-mono text-emerald-800 font-bold tracking-widest uppercase">STRUCTURE &amp; METHODOLOGY</div>
                            <h2 class="text-xl font-serif font-black text-slate-900">교재 구성 및 100% 마스터 가이드</h2>
                        </div>
                        <span class="text-xs font-mono text-slate-400 font-bold">Page 02</span>
                    </div>

                    <!-- 본문: 학습 구성도 -->
                    <div class="space-y-6 my-auto text-xs leading-relaxed font-sans">
                        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                            <h3 class="font-serif font-bold text-sm text-slate-950 flex items-center gap-2">
                                <i data-lucide="award" class="w-4 h-4 text-emerald-600"></i>
                                <span>『${modeMeta.nameKo}』의 핵심 교육 설계 원칙</span>
                            </h3>
                            <p class="text-slate-700 text-xs">
                                억지스러운 이론적 틀을 지양하고, 실제 내신 서술형 및 수능 29번 어법에서 요구하는 정확한 개념과 실전 적용 훈련을 결합하여 최소 시간 투자로 최대 학습 성취를 달성하도록 설계되었습니다.
                            </p>
                        </div>

                        ${this.currentMode === 'grammar' ? `
                            <div class="space-y-3">
                                <h4 class="font-serif font-bold text-slate-900 text-xs border-b border-slate-200 pb-1">유닛별 5페이지 완결 조판 체계 (총 5 Sheets)</h4>
                                <div class="grid grid-cols-1 gap-2.5">
                                    <div class="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
                                        <strong class="text-emerald-900 font-serif">[Sheet 1] Core Map &amp; 3초 공식 + 1:1 대조 예문</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">개념 작동 원리 ➔ 14pt 볼드 시크릿 공식 ➔ 정문(O) vs 비문(X) 1:1 대조 예문 비비드 카드</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-teal-50/60 border border-teal-200">
                                        <strong class="text-teal-900 font-serif">[Sheet 2] 뉘앙스/함정 탈출 노트 &amp; 기초 체력 빌드업 드릴 (10제)</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">실전 뉘앙스/연어 &amp; 빈출 함정 탈출 꿀팁 + 개념 즉시 점검 OX 5제 + 문맥 형태 변화 5제 (12.5pt 시원한 조판)</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-blue-50/60 border border-blue-200">
                                        <strong class="text-blue-900 font-serif">[Sheet 3] 실전 문법 적용 파이널 Part 1 (Q01 ~ Q10)</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">양자택일 4제 + 5밑줄 어법 3제 + 조건 어형변화 3제 (2열 10문항 큼직한 선지 배치)</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-indigo-50/60 border border-indigo-200">
                                        <strong class="text-indigo-900 font-serif">[Sheet 4] 실전 문법 적용 파이널 Part 2 (Q11 ~ Q20)</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">조건 어형변화 1제 + 수능형 5지선다 5제 + 문장전환 2제 + 어순배열 2제 (2열 10문항 여유 조판)</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-rose-50/60 border border-rose-200">
                                        <strong class="text-rose-900 font-serif">[Sheet 5] 기출 킬러 서술형 (3제) &amp; 복습/오답 리플렉션 노트</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">학교별 기출 킬러 서술형 3제 (넉넉한 4줄 손글씨 작성란) + 오답 원인 분석 모눈 노트</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${this.currentMode === 'reading' ? `
                            <div class="space-y-3">
                                <h4 class="font-serif font-bold text-slate-900 text-xs border-b border-slate-200 pb-1">유닛별 3페이지 완결 독해 체계 (총 3 Sheets)</h4>
                                <div class="grid grid-cols-1 gap-2.5">
                                    <div class="p-3 rounded-xl bg-blue-50/60 border border-blue-200">
                                        <strong class="text-blue-900 font-serif">[Sheet 1] 문법 스포트라이트 + 13pt 실전 지문 &amp; 각주</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">지문 속 핵심 문법 [S,V,O,C] 도식화 + 13pt Serif 원문 지문(형광펜 하이라이트) + 하단 어휘 Footnote</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
                                        <strong class="text-emerald-900 font-serif">[Sheet 2] 실전 독해 평가 3문항 (주제·일치·추론)</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">Q1. 대의 파악 + Q2. 세부 내용 일치 + Q3. 문맥 논리 추론 (시원시원한 큼직한 보기 박스)</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-purple-50/60 border border-purple-200">
                                        <strong class="text-purple-900 font-serif">[Sheet 3] 지문 속 어법 2제 &amp; 구문 직독직해 워크스페이스</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">지문 밑줄 어법 판단 1제 + 문장 변형 서술형 1제 + 핵심 구문 직독직해 슬래시 훈련란</p>
                                    </div>
                                </div>
                            </div>
                        ` : ''}

                        ${this.currentMode === 'writing' ? `
                            <div class="space-y-3">
                                <h4 class="font-serif font-bold text-slate-900 text-xs border-b border-slate-200 pb-1">유닛별 3페이지 완결 영작 체계 (총 3 Sheets)</h4>
                                <div class="grid grid-cols-1 gap-2.5">
                                    <div class="p-3 rounded-xl bg-amber-50/60 border border-amber-200">
                                        <strong class="text-amber-900 font-serif">[Sheet 1] 힌트 어휘 조건 영작 (6문항)</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">필수 단어 및 문법 조건 배지 + 문항당 3줄 여유로운 손글씨 작성 가이드라인</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-blue-50/60 border border-blue-200">
                                        <strong class="text-blue-900 font-serif">[Sheet 2] 우리말 해석 직결 완성 영작 (6문항)</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">우리말 의미 분석 단계별 어순 힌트 + 문항당 3줄 여유로운 손글씨 작성 가이드라인</p>
                                    </div>
                                    <div class="p-3 rounded-xl bg-rose-50/60 border border-rose-200">
                                        <strong class="text-rose-900 font-serif">[Sheet 3] 기출 변형 킬러 서술형 (3제) &amp; 감점 방지 루브릭</strong>
                                        <p class="text-slate-600 text-[11px] mt-0.5">복합 상황 킬러 서술형 (넉넉한 4줄 쓰기칸) + 수일치·시제 감점 방지 절대 채점 기준표</p>
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
        // 3. [교재 목차 (Table of Contents)] 파트별 상세 안내 전용 독립 시트
        // ======================================================================
        renderDedicatedTocSheet(level, isAnswers) {
            const units = level.units || [];
            const modeMeta = this.getModeMeta();
            const meta = THEME_META[level.levelCode] || THEME_META['lv1'];
            const parts = LEVEL_PARTS_INFO[level.levelCode] || [
                { no: 'PART 1', title: '기본 핵심 문법', goal: '기본 공식 습득', range: [1, 5] },
                { no: 'PART 2', title: '발전 문법 구문', goal: '문장 적용 및 확장', range: [6, 10] },
                { no: 'PART 3', title: '심화 문법 완성', goal: '어법 오류 판별', range: [11, 15] },
                { no: 'PART 4', title: '실전 기출 마스터', goal: '실전 서술형 정복', range: [16, 20] }
            ];

            return `
                <div class="clinic-a4-sheet justify-between border border-slate-300 bg-white p-10 text-slate-900 shadow-md">
                    <!-- 상단 헤더 -->
                    <div class="border-b-2 border-slate-900 pb-3 flex items-end justify-between">
                        <div>
                            <div class="text-[10px] font-mono text-emerald-800 font-bold uppercase tracking-wider">${modeMeta.enTitle}</div>
                            <h2 class="text-xl font-serif font-black text-slate-900">교재 목차 (Table of Contents)</h2>
                        </div>
                        <span class="text-xs font-mono text-slate-400 font-bold">Page 03</span>
                    </div>

                    <!-- 목차 본문: 파트별 상세 학습 목표 & 단원 리스트 -->
                    <div class="my-auto space-y-4 font-sans text-xs">
                        ${parts.map((p, pIdx) => {
                            const partUnits = units.filter(u => u.unitNo >= p.range[0] && u.unitNo <= p.range[1]);
                            return `
                                <div class="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200 shadow-2xs space-y-2">
                                    <div class="border-b border-slate-200 pb-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                        <div class="flex items-center gap-2">
                                            <span class="px-2 py-0.5 rounded-md bg-slate-900 text-white font-mono text-[10px] font-bold tracking-wider">${p.no}</span>
                                            <h3 class="font-serif font-bold text-slate-950 text-xs sm:text-sm">${p.title}</h3>
                                        </div>
                                        <span class="text-[10px] font-mono text-slate-500 font-medium">Units ${p.range[0]} ~ ${p.range[1]}</span>
                                    </div>
                                    
                                    <!-- 파트별 학습 완성 목표 배너 -->
                                    <div class="p-2 rounded-xl bg-white border border-slate-200/80 text-[10px] text-slate-600 flex items-center gap-1.5">
                                        <i data-lucide="target" class="w-3.5 h-3.5 text-emerald-600 shrink-0"></i>
                                        <span><strong>학습 목표:</strong> ${p.goal}</span>
                                    </div>

                                    <!-- 단원 리스트 -->
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-0.5 text-[11px]">
                                        ${partUnits.map(u => `
                                            <div class="flex items-center justify-between hover:text-emerald-800 py-0.5 border-b border-dashed border-slate-100">
                                                <span class="font-medium text-slate-800 truncate max-w-[200px] flex items-center gap-1.5">
                                                    <span class="font-mono text-slate-400 text-[10px]">U${u.unitNo < 10 ? '0' + u.unitNo : u.unitNo}</span>
                                                    <span class="truncate">${escapeHtml(u.title)}</span>
                                                </span>
                                                <span class="font-mono text-slate-400 text-[10px] shrink-0">p. ${(u.unitNo - 1) * (this.currentMode === 'grammar' ? 5 : 3) + 5}~${(u.unitNo - 1) * (this.currentMode === 'grammar' ? 5 : 3) + 5 + (this.currentMode === 'grammar' ? 4 : 2)}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                        }).join('')}
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
                            <div class="text-[10px] font-mono text-emerald-800 font-bold tracking-widest uppercase">STUDY TRACKER &amp; PLANNER</div>
                            <h2 class="text-xl font-serif font-black text-slate-900">3회독 진도 체크리스트 &amp; 성취도 기록표</h2>
                        </div>
                        <span class="text-xs font-mono text-slate-400 font-bold">Page 04</span>
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
                            <div class="text-[10px] font-mono text-rose-600 font-bold uppercase tracking-wider">QUICK ANSWER MATRIX</div>
                            <h2 class="text-xl font-serif font-black text-slate-900">전체 단원 빠른 정답표 (Quick Key)</h2>
                        </div>
                        <span class="text-xs font-mono text-rose-600 font-bold">[정답편] Page 04</span>
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
                                        summaryAns = s1.slice(0, 3).map((q, i) => `[${i+1}] 영작완료`).join(' | ');
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
                        <span>04</span>
                    </div>
                </div>
            `;
        }

        // ====================================================================        // ======================================================================
        // 6. 단원별 A4 정밀 시트 렌더러 (초안 내용 100% 완전 복원 & 넉넉한 장수 분배)
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
        // [문법 Clinic] 단원별 완벽한 5페이지 A4 조판 (개념 분할 + 10제 드릴 + 실전 20제 + 킬러/오답)
        // ----------------------------------------------------------------------
        renderGrammarUnitSheets(level, unit, isAnswers, pageSeq) {
            const meta = THEME_META[level.levelCode] || THEME_META['lv1'];
            const partInfo = this.getPartForUnit(level.levelCode, unit.unitNo);
            const sec1 = unit.section1 || {};
            const coreMap = sec1.coreMap || {};
            const dualExs = sec1.dualExamples || [];

            // 실전 뉘앙스 & 빈출 함정 데이터 안전 정규화
            let nuance = sec1.nuanceCollocations || [];
            if (!nuance.length && coreMap.formulaBoxes && coreMap.formulaBoxes[0]) {
                const fb = coreMap.formulaBoxes[0];
                const rules = fb.rules || [];
                nuance = [
                    {
                        point: rules[0] ? `${rules[0].title}: ${rules[0].detail}` : (coreMap.takeaways ? coreMap.takeaways[0] : fb.desc || '핵심 구문 공식 활용법'),
                        collocation: rules[1] ? `${rules[1].title} 주의!` : (coreMap.takeaways ? coreMap.takeaways[1] : '수일치 및 어순 주의')
                    },
                    {
                        point: rules[2] ? `${rules[2].title}: ${rules[2].detail}` : (coreMap.takeaways ? coreMap.takeaways[2] : '실전 기출 빈출 포인트'),
                        collocation: fb.formula ? `공식 암기: ${fb.formula}` : '오답 함정 감별'
                    }
                ];
            }

            // Section 2 (기초 체력 빌드업 드릴 10제) 안전 정규화 (배열 및 객체 포맷 완벽 호환)
            let sec2 = [];
            const rawSec2 = unit.section2 || [];
            if (Array.isArray(rawSec2)) {
                sec2 = rawSec2;
            } else if (rawSec2 && typeof rawSec2 === 'object') {
                const oxDrills = rawSec2.oxDrills || [];
                oxDrills.forEach(d => {
                    sec2.push({
                        q: '다음 문장이 어법상 올바르면 O, 틀리면 X를 표시하시오.',
                        sentence: d.sent || '',
                        answer: d.ans || 'O',
                        explanation: d.exp || ''
                    });
                });
                const transformDrills = rawSec2.transformDrills || [];
                transformDrills.forEach(d => {
                    sec2.push({
                        q: '다음 문장의 괄호 안 단어를 문맥에 맞게 변형하여 완성하시오.',
                        sentence: d.sent || '',
                        answer: d.ans || '',
                        explanation: d.exp || ''
                    });
                });
            }

            // Section 3 (실전 20제) 안전 정규화
            let sec3 = [];
            const rawSec3 = unit.section3 || [];
            if (Array.isArray(rawSec3)) {
                sec3 = rawSec3;
            } else if (rawSec3 && typeof rawSec3 === 'object') {
                const qList = rawSec3.questions || [];
                qList.forEach((q, idx) => {
                    sec3.push({
                        qNo: q.no || (idx + 1),
                        type: q.type || '실전 문법',
                        stem: q.question || q.title || '다음 문맥에서 올바른 형태를 고르시오.',
                        sentence: q.text || '',
                        options: Array.isArray(q.options) ? q.options : [],
                        ans: q.ans !== undefined ? q.ans : 0,
                        exp: q.exp || ''
                    });
                });
            }

            // Section 4 (킬러 서술형 3제) 안전 정규화
            let sec4 = [];
            const rawSec4 = unit.section4 || [];
            if (Array.isArray(rawSec4)) {
                sec4 = rawSec4;
            } else if (rawSec4 && typeof rawSec4 === 'object') {
                const dqList = rawSec4.descriptiveQuestions || [];
                dqList.forEach((dq, idx) => {
                    const condStr = dq.cond || '';
                    const conditions = condStr.split('\n').map(c => c.trim()).filter(Boolean);
                    sec4.push({
                        type: dq.title || `조건 영작 0${idx+1}`,
                        stem: dq.question || '',
                        situation: dq.title || '',
                        conditions: conditions.length ? conditions : ['조건을 준수하여 영작할 것'],
                        modelAnswer: dq.modelAns || '',
                        rubric: dq.point || '핵심 구문 활용 및 어법 수일치 확인'
                    });
                });
            }

            const sec5 = unit.section5 || {};
            const basePage = (unit.unitNo - 1) * 5 + 5;

            // Sheet 1: [개념 마스터 Part 1] Core Grammar Map & 3초 공식 + 1:1 대조 예문 (비비드 카드)
            const sheet1 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="px-2 py-0.5 rounded bg-slate-900 text-white font-mono text-[9px] font-bold">${partInfo.no}</span>
                                <span class="text-[10px] font-mono font-bold uppercase" style="color: ${meta.primaryHex};">${partInfo.title}</span>
                            </div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950 mt-0.5">
                                Unit ${unit.unitNo < 10 ? '0' + unit.unitNo : unit.unitNo}. ${escapeHtml(unit.title)}
                            </h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">정답 및 해설</span>` : `<span class="font-bold text-slate-700">[개념 마스터 Part 1] Sheet 1</span>`}
                        </div>
                    </div>

                    <div class="my-auto space-y-4 font-sans">
                        <!-- 1. Core Grammar Map & 시크릿 공식 -->
                        <div class="p-4 rounded-2xl border-2 shadow-2xs space-y-2.5" style="background-color: ${meta.lightBg}; border-color: ${meta.primaryHex}40;">
                            <div class="flex items-center justify-between border-b pb-1.5" style="border-color: ${meta.primaryHex}30;">
                                <div class="text-xs sm:text-sm font-bold flex items-center gap-1.5" style="color: ${meta.secondaryHex};">
                                    <i data-lucide="compass" class="w-4 h-4"></i>
                                    <span>1. Core Grammar Map (핵심 문법 맵 &amp; 작동 원리)</span>
                                </div>
                                <span class="px-2 py-0.5 rounded-full bg-white font-mono text-[10px] font-bold text-slate-700 border border-slate-200">POINT 01</span>
                            </div>
                            <p class="text-xs sm:text-[13px] text-slate-800 leading-relaxed">${escapeHtml(coreMap.overview || '')}</p>
                            
                            <!-- 큼직한 공식 박스 -->
                            ${(coreMap.formulaBoxes || []).map(fb => `
                                <div class="p-3.5 bg-slate-900 text-emerald-300 font-mono rounded-xl border border-emerald-500/40 my-2 shadow-inner">
                                    <div class="font-bold text-white text-xs mb-1 flex items-center gap-2">
                                        <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                                        <span class="text-amber-300 font-serif">${escapeHtml(fb.name)}</span>
                                    </div>
                                    <div class="text-emerald-400 text-sm sm:text-base font-black pl-3 py-0.5">📐 ${escapeHtml(fb.formula)}</div>
                                    ${fb.desc ? `<div class="text-slate-300 text-xs font-sans mt-1 pl-3">💡 ${escapeHtml(fb.desc)}</div>` : ''}
                                </div>
                            `).join('')}
                        </div>

                        <!-- 2. Dual Examples & OX Comparison Clinic (1:1 대조 예문 큼직한 듀얼 카드) -->
                        <div class="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-2xs space-y-3">
                            <div class="text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-between border-b border-slate-100 pb-1.5">
                                <span class="flex items-center gap-1.5">
                                    <i data-lucide="split" class="w-4 h-4 text-indigo-600"></i>
                                    <span>2. Formula &amp; Dual Examples (공식 &amp; 1:1 대조 예문)</span>
                                </span>
                                <span class="text-[10px] font-mono text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">정문 vs 비문 1:1 대조</span>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                ${dualExs.map(de => `
                                    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                                        <div class="font-serif font-bold text-slate-950 text-xs sm:text-sm border-b border-slate-200 pb-1">${escapeHtml(de.title)}</div>
                                        ${(de.examples || []).map(ex => `
                                            <div class="text-slate-900 font-serif font-bold text-xs sm:text-[13px] leading-snug">▸ ${escapeHtml(ex.en)}</div>
                                            <div class="text-xs text-slate-600 font-sans pl-3">${escapeHtml(ex.ko)}</div>
                                        `).join('')}
                                        ${(de.oxCompare || []).map(ox => `
                                            <div class="pt-2 mt-1.5 border-t border-slate-200 space-y-1">
                                                <div class="text-emerald-800 bg-emerald-50/80 p-1.5 rounded-lg border border-emerald-200 font-bold text-xs flex items-start gap-1.5">
                                                    <span class="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">O</span>
                                                    <span>${escapeHtml(ox.correct)}</span>
                                                </div>
                                                <div class="text-rose-700 bg-rose-50/80 p-1.5 rounded-lg border border-rose-200 line-through text-xs flex items-start gap-1.5">
                                                    <span class="w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5">X</span>
                                                    <span>${escapeHtml(ox.wrong)}</span>
                                                </div>
                                                ${ox.reason ? `<div class="text-[11px] text-slate-600 pl-2 font-medium">💡 ${escapeHtml(ox.reason)}</div>` : ''}
                                            </div>
                                        `).join('')}
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- 3초 개념 마스터 팁 배너 -->
                        <div class="p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-sky-500/10 border border-emerald-300 flex items-center gap-2.5 text-xs">
                            <span class="text-base">⚡</span>
                            <span class="font-bold text-slate-900">Grammar Master Key:</span>
                            <span class="text-slate-700">문장의 뼈대(주어·동사)를 먼저 확정하고, 연결 어미 및 준동사 수식 관계를 1초 만에 식별하세요!</span>
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Unit ${unit.unitNo} Sheet 1 (개념 마스터 Part 1)</span>
                        <span>Page ${basePage}</span>
                    </div>
                </div>
            `;

            // Sheet 2: [개념 Part 2 & 기초 드릴 10제] 뉘앙스/함정 탈출 노트 & 기초 체력 빌드업 드릴 (10제 12.5pt 큼직한 배치)
            const sheet2 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono font-bold uppercase" style="color: ${meta.primaryHex};">SECTION 1-B &amp; SECTION 2</div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950">실전 뉘앙스/함정 &amp; 기초 체력 빌드업 드릴</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">정답 및 해설</span>` : `<span class="font-bold text-slate-700">[개념 Part 2 &amp; 기초 드릴] Sheet 2</span>`}
                        </div>
                    </div>

                    <div class="my-auto space-y-4 font-sans">
                        <!-- 실전 뉘앙스 & 빈출 함정 탈출 노트 -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div class="p-3.5 rounded-2xl bg-amber-50/80 border-2 border-amber-300 shadow-2xs space-y-1.5">
                                <div class="font-bold text-amber-950 flex items-center gap-1.5 text-xs sm:text-sm border-b border-amber-200 pb-1">
                                    <i data-lucide="zap" class="w-4 h-4 text-amber-600"></i>
                                    <span>3. Real Nuance &amp; Collocations (실전 쓰임/짝꿍)</span>
                                </div>
                                ${nuance.map(n => `<p class="text-slate-800 text-xs sm:text-[12.5px] leading-relaxed">• ${escapeHtml(n.point)}</p>`).join('')}
                            </div>
                            <div class="p-3.5 rounded-2xl bg-rose-50/80 border-2 border-rose-300 shadow-2xs space-y-1.5">
                                <div class="font-bold text-rose-950 flex items-center gap-1.5 text-xs sm:text-sm border-b border-rose-200 pb-1">
                                    <i data-lucide="alert-octagon" class="w-4 h-4 text-rose-600"></i>
                                    <span>4. Exam Core &amp; Trap Alert (내신·수능 빈출 함정)</span>
                                </div>
                                ${nuance.map(n => `<p class="text-rose-950 text-xs sm:text-[12.5px] leading-relaxed font-medium">⚠️ ${escapeHtml(n.collocation)}</p>`).join('')}
                            </div>
                        </div>

                        <!-- [Section 2] 기초 체력 빌드업 드릴 (10문항 시원시원한 12.5pt 폰트와 넉넉한 여백) -->
                        <div class="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-2xs space-y-3">
                            <div class="flex items-center justify-between border-b border-slate-200 pb-1.5">
                                <div class="font-serif font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                                    <span class="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center text-[10px] font-mono font-bold">2</span>
                                    <span>기초 체력 빌드업 드릴 (총 10문항)</span>
                                </div>
                                <span class="text-[10px] font-mono text-teal-800 font-bold bg-teal-50 px-2 py-0.5 rounded border border-teal-200">각 2점 • 총 20점</span>
                            </div>

                            <!-- 10문항 2열 시원한 조판 (좌: OX 5문항 / 우: 형태변화 5문항) -->
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                <!-- 좌측: Part A 개념 즉시 점검 OX (5문항) -->
                                <div class="space-y-2">
                                    <div class="font-serif font-bold text-teal-900 text-xs border-b border-teal-100 pb-1">
                                        Part A. 개념 즉시 점검 O / X (01 ~ 05)
                                    </div>
                                    ${sec2.slice(0, 5).map((d, idx) => `
                                        <div class="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-1">
                                            <div class="font-bold text-slate-800 flex justify-between text-xs">
                                                <span>[0${idx+1}] ${escapeHtml(d.q)}</span>
                                                ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">정답: ${escapeHtml(d.answer)}</span>` : `<span class="font-mono text-slate-400">[ O / X ]</span>`}
                                            </div>
                                            <div class="font-serif text-slate-900 bg-white p-2 rounded-lg border border-slate-100 text-xs sm:text-[12.5px] leading-snug">${escapeHtml(d.sentence)}</div>
                                        </div>
                                    `).join('')}
                                </div>

                                <!-- 우측: Part B 문맥 형태 변화 (5문항) -->
                                <div class="space-y-2">
                                    <div class="font-serif font-bold text-indigo-900 text-xs border-b border-indigo-100 pb-1">
                                        Part B. 문맥 속 단어 형태 변화 (06 ~ 10)
                                    </div>
                                    ${sec2.slice(5, 10).map((d, idx) => `
                                        <div class="p-2.5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-1">
                                            <div class="font-bold text-slate-800 flex justify-between text-xs">
                                                <span>[0${idx+6}] ${escapeHtml(d.q)}</span>
                                                ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">정답: ${escapeHtml(d.answer)}</span>` : `<span class="font-mono text-slate-400">형태완성</span>`}
                                            </div>
                                            <div class="font-serif text-slate-900 bg-white p-2 rounded-lg border border-slate-100 text-xs sm:text-[12.5px] leading-snug">${escapeHtml(d.sentence)}</div>
                                            ${!isAnswers ? `<div class="text-[10px] text-slate-400 pt-0.5">정답: ____________________</div>` : ''}
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Unit ${unit.unitNo} Sheet 2 (개념 Part 2 &amp; 기초 드릴)</span>
                        <span>Page ${basePage + 1}</span>
                    </div>
                </div>
            `;

            // Sheet 3: [Section 3 - Part 1] 실전 문법 적용 파이널 (Q01 ~ Q10: 10제 2열 시원한 선지)
            const sheet3 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono font-bold uppercase text-blue-700">SECTION 3 (PART 1) • APPLIED PRACTICE</div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950">실전 문법 적용 파이널 (Part 1. Q01 ~ Q10)</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">정답 및 해설</span>` : `<span class="font-bold text-slate-700">[실전 파이널 Part 1] Sheet 3</span>`}
                        </div>
                    </div>

                    <div class="my-auto space-y-3 font-sans">
                        <!-- 상단 공략법 배너 -->
                        <div class="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs">
                            <span class="font-bold text-blue-950 flex items-center gap-1.5">
                                <i data-lucide="target" class="w-4 h-4 text-blue-600"></i>
                                <span>Part 1 공략: 1:1 양자택일(4제) &amp; 5밑줄 어법(3제) &amp; 빈칸 어형변화(3제)</span>
                            </span>
                            <span class="text-[10px] font-mono text-blue-700 font-bold">총 10문항 • 각 3점</span>
                        </div>

                        <!-- 10문항 2열 그리드 (좌 5문항: Q01~Q05 / 우 5문항: Q06~Q10) -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <!-- 좌측 열: Q01 ~ Q05 -->
                            <div class="space-y-2.5">
                                ${sec3.slice(0, 5).map(q => `
                                    <div class="p-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs space-y-1.5 shadow-2xs">
                                        <div class="flex justify-between font-bold text-slate-800">
                                            <span class="text-blue-900 font-serif">[${q.qNo < 10 ? '0' + q.qNo : q.qNo}] ${escapeHtml(q.type || '실전 문법')}</span>
                                            ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">${q.ans !== undefined ? (typeof q.ans === 'number' && q.options ? escapeHtml(q.options[q.ans]) : escapeHtml(String(q.ans))) : escapeHtml(q.correctWord || '정답')}</span>` : `<span class="text-[10px] text-slate-400 font-mono">3점</span>`}
                                        </div>
                                        <p class="text-slate-800 text-xs leading-snug">${escapeHtml(q.stem)}</p>
                                        <div class="font-serif text-slate-900 bg-white p-2 rounded-lg border border-slate-100 text-xs sm:text-[12.5px] leading-snug">${escapeHtml(q.sentence)}</div>
                                        ${q.options && q.options.length > 0 ? `
                                            <div class="flex flex-wrap gap-1.5 pt-1 text-[11px] font-serif text-slate-700">
                                                ${q.options.map((opt, oIdx) => `
                                                    <span class="px-2 py-0.5 rounded border ${isAnswers && q.ans === oIdx ? 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold' : 'bg-white border-slate-200'}">
                                                        ${oIdx + 1}) ${escapeHtml(opt)}
                                                    </span>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                `).join('')}
                            </div>

                            <!-- 우측 열: Q06 ~ Q10 -->
                            <div class="space-y-2.5">
                                ${sec3.slice(5, 10).map(q => `
                                    <div class="p-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs space-y-1.5 shadow-2xs">
                                        <div class="flex justify-between font-bold text-slate-800">
                                            <span class="text-blue-900 font-serif">[${q.qNo < 10 ? '0' + q.qNo : q.qNo}] ${escapeHtml(q.type || '실전 문법')}</span>
                                            ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">${q.ans !== undefined ? (typeof q.ans === 'number' && q.options ? escapeHtml(q.options[q.ans]) : escapeHtml(String(q.ans))) : (q.ansIdx ? q.ansIdx + '번 (' + escapeHtml(q.correctWord || '') + ')' : '정답')}</span>` : `<span class="text-[10px] text-slate-400 font-mono">3점</span>`}
                                        </div>
                                        <p class="text-slate-800 text-xs leading-snug">${escapeHtml(q.stem)}</p>
                                        <div class="font-serif text-slate-900 bg-white p-2 rounded-lg border border-slate-100 text-xs sm:text-[12.5px] leading-snug">${escapeHtml(q.sentence)}</div>
                                        ${q.options && q.options.length > 0 ? `
                                            <div class="flex flex-wrap gap-1.5 pt-1 text-[11px] font-serif text-slate-700">
                                                ${q.options.map((opt, oIdx) => `
                                                    <span class="px-2 py-0.5 rounded border ${isAnswers && q.ans === oIdx ? 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold' : 'bg-white border-slate-200'}">
                                                        ${oIdx + 1}) ${escapeHtml(opt)}
                                                    </span>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Unit ${unit.unitNo} Sheet 3 (실전 문법 Part 1)</span>
                        <span>Page ${basePage + 2}</span>
                    </div>
                </div>
            `;

            // Sheet 4: [Section 3 - Part 2] 실전 문법 적용 파이널 (Q11 ~ Q20: 10제 2열 여유 조판)
            const sheet4 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono font-bold uppercase text-indigo-700">SECTION 3 (PART 2) • FINAL PRACTICE</div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950">실전 문법 적용 파이널 (Part 2. Q11 ~ Q20)</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">정답 및 해설</span>` : `<span class="font-bold text-slate-700">[실전 파이널 Part 2] Sheet 4</span>`}
                        </div>
                    </div>

                    <div class="my-auto space-y-3 font-sans">
                        <!-- 상단 공략법 배너 -->
                        <div class="p-2.5 rounded-xl bg-indigo-50/80 border border-indigo-200 flex items-center justify-between text-xs">
                            <span class="font-bold text-indigo-950 flex items-center gap-1.5">
                                <i data-lucide="award" class="w-4 h-4 text-indigo-600"></i>
                                <span>Part 2 공략: 5지선다 수능형(5제) &amp; 문장전환(2제) &amp; 어순배열(2제)</span>
                            </span>
                            <span class="text-[10px] font-mono text-indigo-700 font-bold">총 10문항 • 각 3점</span>
                        </div>

                        <!-- 10문항 2열 그리드 (좌 5문항: Q11~Q15 / 우 5문항: Q16~Q20) -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <!-- 좌측 열: Q11 ~ Q15 -->
                            <div class="space-y-2.5">
                                ${sec3.slice(10, 15).map(q => `
                                    <div class="p-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs space-y-1.5 shadow-2xs">
                                        <div class="flex justify-between font-bold text-slate-800">
                                            <span class="text-indigo-900 font-serif">[${q.qNo}] ${escapeHtml(q.type || '실전 5지선다')}</span>
                                            ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">${q.ans !== undefined ? (typeof q.ans === 'number' ? q.ans + 1 + '번' : escapeHtml(String(q.ans))) : '정답'}</span>` : `<span class="text-[10px] text-slate-400 font-mono">3점</span>`}
                                        </div>
                                        <p class="text-slate-800 text-xs leading-snug">${escapeHtml(q.stem)}</p>
                                        ${q.sentence ? `<div class="font-serif text-slate-900 bg-white p-2 rounded-lg border border-slate-100 text-xs sm:text-[12.5px] leading-snug">${escapeHtml(q.sentence)}</div>` : ''}
                                        ${q.options && q.options.length > 0 ? `
                                            <div class="space-y-1 pt-1 font-serif text-[11px] text-slate-700">
                                                ${q.options.map((opt, oIdx) => `
                                                    <div class="p-1 rounded ${isAnswers && q.ans === oIdx ? 'bg-emerald-100 text-emerald-950 font-bold border border-emerald-300' : ''}">
                                                        ${oIdx + 1}) ${escapeHtml(opt)}
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                    </div>
                                `).join('')}
                            </div>

                            <!-- 우측 열: Q16 ~ Q20 -->
                            <div class="space-y-2.5">
                                ${sec3.slice(15, 20).map(q => `
                                    <div class="p-3 rounded-xl bg-slate-50/70 border border-slate-200 text-xs space-y-1.5 shadow-2xs">
                                        <div class="flex justify-between font-bold text-slate-800">
                                            <span class="text-indigo-900 font-serif">[${q.qNo}] ${escapeHtml(q.type || '실전 문법')}</span>
                                            ${isAnswers ? `<span class="text-emerald-700 font-mono font-bold">${q.ans !== undefined ? (typeof q.ans === 'number' ? q.ans + 1 + '번' : escapeHtml(String(q.ans))) : (q.ansIdx ? q.ansIdx + '번' : '정답')}</span>` : `<span class="text-[10px] text-slate-400 font-mono">3점</span>`}
                                        </div>
                                        <p class="text-slate-800 text-xs leading-snug">${escapeHtml(q.stem)}</p>
                                        ${q.sentence ? `<div class="font-serif text-slate-900 bg-white p-2 rounded-lg border border-slate-100 text-xs sm:text-[12.5px] leading-snug">${escapeHtml(q.sentence)}</div>` : ''}
                                        ${q.options && q.options.length > 0 ? `
                                            <div class="space-y-1 pt-1 font-serif text-[11px] text-slate-700">
                                                ${q.options.map((opt, oIdx) => `
                                                    <div class="p-1 rounded ${isAnswers && q.ans === oIdx ? 'bg-emerald-100 text-emerald-950 font-bold border border-emerald-300' : ''}">
                                                        ${oIdx + 1}) ${escapeHtml(opt)}
                                                    </div>
                                                `).join('')}
                                            </div>
                                        ` : ''}
                                        ${!isAnswers && !q.options ? `
                                            <div class="h-6 border-b-2 border-dashed border-slate-300 pt-1 text-slate-300 text-[10px]">답안: </div>
                                        ` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Unit ${unit.unitNo} Sheet 4 (실전 문법 Part 2)</span>
                        <span>Page ${basePage + 3}</span>
                    </div>
                </div>
            `;

            // Sheet 5: [Section 4 & 5] 기출 킬러 서술형 (3제 넉넉한 4줄 쓰기칸) + 복습·오답 리플렉션 노트
            const sheet5 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-rose-800 font-bold uppercase tracking-wider">SECTION 4 &amp; 5 • ESSAY &amp; REFLECTION</div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950">고난도 킬러 서술형 &amp; 오답 리플렉션 노트</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">정답 및 해설</span>` : `<span class="font-bold text-slate-700">[킬러 서술형 &amp; 오답노트] Sheet 5</span>`}
                        </div>
                    </div>

                    <div class="my-auto space-y-4 font-sans">
                        <!-- [Section 4] 고난도 킬러 서술형 (3문항 전체) -->
                        <div class="space-y-3">
                            <div class="flex items-center justify-between border-b border-rose-200 pb-1">
                                <div class="font-serif font-bold text-rose-950 text-xs sm:text-sm flex items-center gap-1.5">
                                    <i data-lucide="flame" class="w-4 h-4 text-rose-600"></i>
                                    <span>학교 기출 변형 킬러 서술형 (3문항 • 각 5점)</span>
                                </div>
                                <span class="text-[10px] font-mono text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">부분 점수 감점 방지 루브릭</span>
                            </div>

                            ${sec4.map((q, idx) => `
                                <div class="p-3.5 rounded-2xl bg-white border-2 border-rose-200 shadow-2xs space-y-2 text-xs">
                                    <div class="flex justify-between items-center font-bold text-slate-950 text-xs sm:text-sm">
                                        <span class="text-rose-950 font-serif">[킬러 문항 0${idx+1}] ${escapeHtml(q.type || '조건 영작')}</span>
                                        <span class="font-mono text-rose-700 text-xs">5점</span>
                                    </div>
                                    <p class="text-slate-900 leading-snug font-medium text-xs sm:text-[12.5px]">${escapeHtml(q.stem)}</p>
                                    <div class="p-2.5 rounded-xl bg-slate-50 text-slate-800 font-sans text-xs">
                                        <strong>[상황 제시]:</strong> ${escapeHtml(q.situation || '')}
                                    </div>
                                    <div class="text-xs text-rose-950 bg-rose-50/80 p-2 rounded-xl border border-rose-200 font-medium">
                                        <strong>[필수 작성 조건]:</strong> ${(q.conditions || []).join(' | ')}
                                    </div>
                                    ${isAnswers ? `
                                        <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                                            <div class="font-serif font-bold text-xs sm:text-sm">👉 모범 답안: ${escapeHtml(q.modelAnswer)}</div>
                                            <div class="text-[11px] text-slate-600">💡 채점 기준: ${escapeHtml(q.rubric || '')}</div>
                                        </div>
                                    ` : `
                                        <div class="pt-1 space-y-1.5">
                                            <div class="writing-ruled-line"></div>
                                            <div class="writing-ruled-line"></div>
                                            <div class="writing-ruled-line"></div>
                                        </div>
                                    `}
                                </div>
                            `).join('')}
                        </div>

                        <!-- [Section 5] 복습 & 오답 클리닉 리플렉션 노트 -->
                        <div class="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-300 shadow-2xs space-y-2">
                            <div class="flex items-center justify-between border-b border-slate-200 pb-1 text-xs font-bold text-slate-900">
                                <span class="flex items-center gap-1.5">
                                    <i data-lucide="edit-3" class="w-4 h-4 text-emerald-600"></i>
                                    <span>Section 5. 복습 &amp; 오답 클리닉 리플렉션 노트 (Self-Diagnosis)</span>
                                </span>
                                <span class="text-[10px] font-mono text-slate-500">Error Analysis &amp; Goal</span>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                <div class="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1">
                                    <strong class="text-slate-800 text-[11px]">📌 내가 틀린 문제 번호 &amp; 헷갈린 문법 포인트:</strong>
                                    <div class="h-10 border-b border-dashed border-slate-300"></div>
                                </div>
                                <div class="p-2.5 rounded-xl bg-white border border-slate-200 space-y-1">
                                    <strong class="text-slate-800 text-[11px]">🎯 다음 시험 재발 방지 3초 마스터 다짐:</strong>
                                    <div class="h-10 border-b border-dashed border-slate-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Unit ${unit.unitNo} Sheet 5 (킬러 서술형 &amp; 오답노트)</span>
                        <span>Page ${basePage + 4}</span>
                    </div>
                </div>
            `;

            return sheet1 + sheet2 + sheet3 + sheet4 + sheet5;
        }

        // ----------------------------------------------------------------------
        // [독해 Clinic] 단원별 3시트 A4 조판 (지문 전용면 + 실전 3제 + 어법 2제 & 구문 워크스페이스)
        // ----------------------------------------------------------------------
        renderReadingUnitSheets(level, unit, isAnswers, pageSeq) {
            const meta = THEME_META[level.levelCode] || THEME_META['lv1'];
            const partInfo = this.getPartForUnit(level.levelCode, unit.unitNo);
            const spList = unit.stage1_spotlight || [];
            const passage = unit.stage2_passage || {};
            const compList = unit.stage3_comprehension || [];
            const gramList = unit.stage4_grammar || [];
            const tg = unit.teacherGuide || {};
            const basePage = (unit.unitNo - 1) * 3 + 5;

            // Sheet 1: 문법 스포트라이트 + 실전 독해 지문 (13pt serif, 1.85 행간) + Footnote 각주
            const sheet1 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="px-2 py-0.5 rounded bg-blue-900 text-white font-mono text-[9px] font-bold">${partInfo.no}</span>
                                <span class="text-[10px] font-mono font-bold uppercase text-blue-700">${partInfo.title}</span>
                            </div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950 mt-0.5">
                                Unit ${unit.unitNo < 10 ? '0' + unit.unitNo : unit.unitNo}. ${escapeHtml(unit.passageTitle || unit.title)}
                            </h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            Target: ${passage.targetTimeSec || 60}s (${passage.wordCount || 100} words) • <span class="font-bold text-slate-700">Sheet 1</span>
                        </div>
                    </div>

                    <div class="my-auto space-y-4 font-sans">
                        <!-- Stage 1. 지문 속 문법 스포트라이트 -->
                        <div class="p-3.5 rounded-2xl bg-blue-50/80 border-2 border-blue-200 text-xs space-y-2">
                            <div class="font-serif font-bold text-blue-950 flex items-center justify-between text-xs sm:text-sm">
                                <span class="flex items-center gap-1.5">
                                    <span class="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center text-[10px] font-mono font-bold">1</span>
                                    <span>Stage 1. 지문 속 핵심 문법 스포트라이트 (Grammar Spotlight)</span>
                                </span>
                                <span class="text-[10px] font-mono text-blue-700 font-bold">[S, V, O, C] 문장 성분 도식화</span>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                ${spList.map(sp => `
                                    <div class="p-3 rounded-xl bg-white border border-blue-100 text-xs space-y-1 shadow-2xs">
                                        <div class="font-serif font-bold text-blue-950 text-xs sm:text-[13px]">${escapeHtml(sp.en)}</div>
                                        <div class="text-slate-600 text-xs font-sans">${escapeHtml(sp.ko)}</div>
                                        <div class="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded inline-block mt-0.5 border border-emerald-200">
                                            구조: ${escapeHtml(sp.syntax)} • ${escapeHtml(sp.point)}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Stage 2. 실전 독해 지문 (Authentic Passage - 13pt serif, 1.85 행간, 형광펜 구문) -->
                        <div class="p-4 rounded-2xl bg-white border-2 border-slate-200 shadow-2xs space-y-3">
                            <div class="font-serif font-bold text-slate-900 text-xs border-b border-slate-200 pb-1.5 flex justify-between items-center">
                                <span class="flex items-center gap-1.5 text-xs sm:text-sm">
                                    <span class="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center text-[10px] font-mono font-bold">2</span>
                                    <span>Stage 2. Authentic Reading Passage</span>
                                </span>
                                <span class="text-xs font-mono text-blue-600 font-bold">권장 리딩 타이머: ${passage.targetTimeSec || 60}초</span>
                            </div>
                            <div class="font-serif text-xs sm:text-[13.5px] text-slate-900 leading-relaxed text-justify space-y-3 p-4 bg-slate-50/70 rounded-xl border border-slate-200">
                                ${(passage.text || '').split('\n\n').map(p => `<p class="leading-[1.85]">${escapeHtml(p)}</p>`).join('')}
                            </div>

                            <!-- Footnote 어휘 각주 -->
                            ${(passage.footnoteVocab || []).length > 0 ? `
                                <div class="p-3 rounded-xl bg-white border border-slate-200 text-xs grid grid-cols-3 gap-2">
                                    ${(passage.footnoteVocab || []).map(v => `
                                        <div><strong class="text-blue-900 font-serif">${escapeHtml(v.word)}</strong>: <span class="text-slate-600">${escapeHtml(v.meaning)}</span></div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Reading Unit ${unit.unitNo} Sheet 1 (지문 &amp; 어휘)</span>
                        <span>Page ${basePage}</span>
                    </div>
                </div>
            `;

            // Sheet 2: Stage 3 독해 3문항 (주제·일치·추론 큼직한 보기 박스)
            const sheet2 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-blue-800 font-bold uppercase">STAGE 3 • READING COMPREHENSION</div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950">실전 독해 평가 3문항 (주제·일치·추론)</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">정답 및 해설</span>` : `<span class="font-bold text-slate-700">Sheet 2</span>`}
                        </div>
                    </div>

                    <div class="my-auto space-y-4 font-sans text-xs">
                        <div class="space-y-3.5">
                            ${compList.map(q => `
                                <div class="p-4 rounded-2xl bg-white border-2 border-slate-200 text-xs space-y-2 shadow-2xs">
                                    <div class="flex justify-between items-center font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-100 pb-1">
                                        <span class="text-blue-900 font-serif">[Q0${q.qNo}] ${escapeHtml(q.type)}</span>
                                        ${isAnswers ? `<span class="text-blue-800 font-mono font-bold bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">${q.ans + 1}번</span>` : `<span class="text-slate-400 font-mono text-[10px]">배점: 30점</span>`}
                                    </div>
                                    <p class="text-slate-950 leading-snug font-medium text-xs sm:text-[13px]">${escapeHtml(q.q)}</p>
                                    <div class="space-y-1.5 font-serif pt-1">
                                        ${(q.options || []).map((opt, oIdx) => `
                                            <div class="p-2 rounded-xl border text-xs sm:text-[12.5px] transition-all ${isAnswers && q.ans === oIdx ? 'text-blue-900 font-bold bg-blue-50 border-blue-300' : 'text-slate-700 bg-slate-50/60 border-slate-200'}">
                                                <span class="font-bold mr-1.5">${oIdx + 1})</span> ${escapeHtml(opt)}
                                            </div>
                                        `).join('')}
                                    </div>
                                    ${isAnswers && q.explanation ? `
                                        <div class="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 font-sans mt-2">
                                            💡 <strong>해설:</strong> ${escapeHtml(q.explanation)}
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Reading Unit ${unit.unitNo} Sheet 2 (독해 평가 3제)</span>
                        <span>Page ${basePage + 1}</span>
                    </div>
                </div>
            `;

            // Sheet 3: Stage 4 어법 2문항 + 지문 속 핵심 구문 직독직해 워크스페이스
            const sheet3 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-emerald-800 font-bold uppercase">STAGE 4 &amp; SYNTAX CLINIC</div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950">지문 속 실전 어법 &amp; 구문 직독직해 워크스페이스</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">정답 및 해설</span>` : `<span class="font-bold text-slate-700">Sheet 3</span>`}
                        </div>
                    </div>

                    <div class="my-auto space-y-4 font-sans text-xs">
                        <!-- Stage 4. 지문 기반 실전 어법 2문항 -->
                        <div class="space-y-3">
                            <div class="font-serif font-bold text-emerald-950 text-xs sm:text-sm border-b border-emerald-200 pb-1 flex justify-between">
                                <span>Stage 4. 지문 기반 실전 어법 (2문항)</span>
                                <span class="text-[10px] font-mono text-emerald-700 font-bold">배점: 각 5점</span>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                ${gramList.map(q => `
                                    <div class="p-3.5 rounded-2xl bg-emerald-50/50 border border-emerald-200 text-xs space-y-2 shadow-2xs">
                                        <div class="flex justify-between font-bold text-slate-900">
                                            <span class="text-emerald-900 font-serif">[Q0${q.qNo}] ${escapeHtml(q.type)}</span>
                                            ${isAnswers ? `<span class="text-emerald-800 font-mono font-bold bg-white px-2 py-0.5 rounded border border-emerald-200">${escapeHtml(q.ans)}</span>` : ''}
                                        </div>
                                        <p class="text-slate-900 leading-snug font-medium text-xs sm:text-[12.5px]">${escapeHtml(q.q)}</p>
                                        ${q.targetSentence ? `<div class="p-2.5 rounded-xl bg-white font-serif text-xs border border-slate-200 leading-relaxed">${escapeHtml(q.targetSentence)}</div>` : ''}
                                        ${q.targetTemplate ? `<div class="p-2.5 rounded-xl bg-white font-serif text-xs border border-slate-200 leading-relaxed">${escapeHtml(q.targetTemplate)}</div>` : ''}
                                        ${!isAnswers ? `<div class="h-8 border border-dashed border-emerald-300 rounded-xl bg-white text-slate-300 p-2 text-xs">정답: ____________________</div>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- Syntax & Chunking Analysis: 지문 핵심 구문 직독직해 워크스페이스 -->
                        <div class="p-4 rounded-2xl bg-slate-50/90 border border-slate-200 shadow-2xs space-y-2.5">
                            <div class="font-serif font-bold text-slate-900 text-xs sm:text-sm border-b border-slate-200 pb-1 flex items-center justify-between">
                                <span class="flex items-center gap-1.5">
                                    <i data-lucide="git-commit" class="w-4 h-4 text-indigo-600"></i>
                                    <span>Syntax &amp; Chunking Clinic (지문 핵심 구문 직독직해 훈련)</span>
                                </span>
                                <span class="text-[10px] font-mono text-slate-500">구문 슬래시 / 해석 쓰기</span>
                            </div>
                            <div class="space-y-2 text-xs">
                                <div class="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                                    <div class="font-serif font-bold text-slate-900 text-xs sm:text-[13px]">
                                        ${spList[0] ? escapeHtml(spList[0].en) : '지문 핵심 문장을 성분별로 슬래시(/)하여 분석해 보세요.'}
                                    </div>
                                    <div class="writing-ruled-line mt-1"></div>
                                </div>
                                <div class="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                                    <div class="font-serif font-bold text-slate-900 text-xs sm:text-[13px]">
                                        ${spList[1] ? escapeHtml(spList[1].en) : '지문의 어법 포인트가 포함된 구문을 자연스럽게 해석해 보세요.'}
                                    </div>
                                    <div class="writing-ruled-line mt-1"></div>
                                </div>
                            </div>

                            ${isAnswers && tg.translation ? `
                                <div class="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200 text-xs text-indigo-950 space-y-1 shadow-2xs mt-2">
                                    <div class="font-bold font-serif text-xs">📖 지문 전문 해석 (Teacher's Guide)</div>
                                    <div class="text-slate-700 leading-relaxed text-xs">${escapeHtml(tg.translation)}</div>
                                </div>
                            ` : ''}
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Reading Unit ${unit.unitNo} Sheet 3 (어법 &amp; 구문 클리닉)</span>
                        <span>Page ${basePage + 2}</span>
                    </div>
                </div>
            `;

            return sheet1 + sheet2 + sheet3;
        }

        // ----------------------------------------------------------------------
        // [쓰기 Clinic] 단원별 3시트 A4 조판 (Step 1 6제 + Step 2 6제 + Step 3 3제 & 루브릭)
        // ----------------------------------------------------------------------
        renderWritingUnitSheets(level, unit, isAnswers, pageSeq) {
            const meta = THEME_META[level.levelCode] || THEME_META['lv1'];
            const partInfo = this.getPartForUnit(level.levelCode, unit.unitNo);
            const step1 = unit.step1_conditioned || [];
            const step2 = unit.step2_direct || [];
            const step3 = unit.step3_killer || [];
            const rubric = unit.rubricSummary || {};
            const basePage = (unit.unitNo - 1) * 3 + 5;

            // Sheet 1: Step 1 조건 제시형 집중 영작 (6문항 - 큼직한 조건 배지 & 3줄 작성란)
            const sheet1 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="px-2 py-0.5 rounded bg-amber-900 text-white font-mono text-[9px] font-bold">${partInfo.no}</span>
                                <span class="text-[10px] font-mono font-bold uppercase text-amber-700">${partInfo.title}</span>
                            </div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950 mt-0.5">
                                Unit ${unit.unitNo < 10 ? '0' + unit.unitNo : unit.unitNo}. ${escapeHtml(unit.title)} 서술형 집중 영작
                            </h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">영작 모범 답안</span>` : `<span class="font-bold text-slate-700">Step 1 영작 (Sheet 1)</span>`}
                        </div>
                    </div>

                    <div class="my-auto space-y-3 font-sans text-xs">
                        <div class="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-center justify-between text-xs">
                            <span class="font-bold text-amber-950 flex items-center gap-1.5">
                                <i data-lucide="edit-2" class="w-4 h-4 text-amber-600"></i>
                                <span>Step 1. 힌트 어휘 제공 조건 영작 (총 6문항 • 문법 구조 정확도 훈련)</span>
                            </span>
                            <span class="text-[10px] font-mono text-amber-700 font-bold">각 5점 • 총 30점</span>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            ${step1.map((q, idx) => `
                                <div class="p-3 rounded-2xl bg-white border-2 border-amber-200/80 shadow-2xs space-y-2 text-xs">
                                    <div class="font-bold text-slate-900 flex justify-between text-xs sm:text-[13px]">
                                        <span class="text-amber-950 font-serif">[0${idx+1}] ${escapeHtml(q.stem)}</span>
                                        <span class="text-amber-700 font-mono text-[10px]">5점</span>
                                    </div>
                                    <div class="text-slate-950 font-sans text-xs sm:text-[12.5px] font-medium">[우리말]: ${escapeHtml(q.korean)}</div>
                                    <div class="text-amber-950 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200 font-mono text-[11px]">
                                        [제시어]: ${(q.mandatoryWords || []).join(', ')}
                                    </div>
                                    ${isAnswers ? `
                                        <div class="text-emerald-900 font-serif font-bold text-xs sm:text-[12.5px] bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                                            👉 ${escapeHtml(q.modelAnswer)}
                                        </div>
                                    ` : `
                                        <div class="pt-1 space-y-1">
                                            <div class="writing-ruled-line"></div>
                                            <div class="writing-ruled-line"></div>
                                        </div>
                                    `}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Writing Unit ${unit.unitNo} Sheet 1 (조건 제시 영작)</span>
                        <span>Page ${basePage}</span>
                    </div>
                </div>
            `;

            // Sheet 2: Step 2 우리말 해석 직결 완성 영작 (6문항 - 단계별 어순 힌트 & 3줄 작성란)
            const sheet2 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-blue-800 font-bold uppercase">STEP 2 • DIRECT WRITING</div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950">우리말 해석 직결 완성 영작 (6문항)</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">영작 모범 답안</span>` : `<span class="font-bold text-slate-700">Step 2 영작 (Sheet 2)</span>`}
                        </div>
                    </div>

                    <div class="my-auto space-y-3 font-sans text-xs">
                        <div class="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between text-xs">
                            <span class="font-bold text-blue-950 flex items-center gap-1.5">
                                <i data-lucide="pen-tool" class="w-4 h-4 text-blue-600"></i>
                                <span>Step 2. 우리말 직결 완성 영작 (총 6문항 • 자율 문장 구성력 훈련)</span>
                            </span>
                            <span class="text-[10px] font-mono text-blue-700 font-bold">각 6점 • 총 36점</span>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            ${step2.map((q, idx) => `
                                <div class="p-3 rounded-2xl bg-white border-2 border-blue-200/80 shadow-2xs space-y-2 text-xs">
                                    <div class="font-bold text-slate-900 flex justify-between text-xs sm:text-[13px]">
                                        <span class="text-blue-950 font-serif">[0${idx+1}] ${escapeHtml(q.stem)}</span>
                                        <span class="text-blue-700 font-mono text-[10px]">6점</span>
                                    </div>
                                    <div class="text-slate-950 font-sans text-xs sm:text-[12.5px] font-medium leading-snug">${escapeHtml(q.koreanPrompt)}</div>
                                    ${isAnswers ? `
                                        <div class="text-emerald-900 font-serif font-bold text-xs sm:text-[12.5px] bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                                            👉 ${escapeHtml(q.modelAnswer)}
                                        </div>
                                    ` : `
                                        <div class="pt-1 space-y-1">
                                            <div class="writing-ruled-line"></div>
                                            <div class="writing-ruled-line"></div>
                                        </div>
                                    `}
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Writing Unit ${unit.unitNo} Sheet 2 (우리말 직결 영작)</span>
                        <span>Page ${basePage + 1}</span>
                    </div>
                </div>
            `;

            // Sheet 3: Step 3 학교 기출 변형 킬러 서술형 (3문항) & 감점 방지 루브릭
            const sheet3 = `
                <div class="clinic-a4-sheet border border-slate-300 bg-white p-8 text-slate-900 shadow-md">
                    <div class="border-b-2 border-slate-900 pb-2.5 flex items-end justify-between shrink-0">
                        <div>
                            <div class="text-[10px] font-mono text-rose-800 font-bold uppercase tracking-wider">KILLER ESSAY &amp; SCORING RUBRIC</div>
                            <h3 class="text-base sm:text-lg font-serif font-black text-slate-950">학교 기출 변형 킬러 서술형 &amp; 감점 방지 루브릭</h3>
                        </div>
                        <div class="text-right text-[10px] font-mono text-slate-500">
                            ${isAnswers ? `<span class="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 font-bold font-mono">채점 기준표 수록</span>` : `<span class="font-bold text-slate-700">Step 3 킬러 (Sheet 3)</span>`}
                        </div>
                    </div>

                    <div class="space-y-4 my-auto font-sans text-xs">
                        <div class="space-y-3">
                            ${step3.map((q, idx) => `
                                <div class="p-3.5 rounded-2xl bg-white border-2 border-slate-200 shadow-2xs space-y-2 text-xs">
                                    <div class="font-bold text-slate-950 font-serif flex justify-between text-xs sm:text-sm">
                                        <span>[킬러 문항 0${idx + 1}] ${escapeHtml(q.stem)}</span>
                                        <span class="font-mono text-rose-700 text-xs">8점</span>
                                    </div>
                                    <div class="p-2.5 rounded-xl bg-slate-50 text-slate-800 font-sans text-xs sm:text-[12.5px] leading-snug">
                                        <strong>[상황 제시]:</strong> ${escapeHtml(q.situation)}
                                    </div>
                                    <div class="text-xs text-rose-950 bg-rose-50/80 p-2 rounded-xl border border-rose-200 font-medium">
                                        <strong>[필수 작성 조건]:</strong> ${(q.conditions || []).join(' | ')}
                                    </div>
                                    ${isAnswers ? `
                                        <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
                                            <div class="font-serif font-bold text-xs sm:text-sm">👉 모범 답안: ${escapeHtml(q.modelAnswer)}</div>
                                            <div class="text-[11px] text-slate-600">채점 루브릭: ${Object.entries(q.rubric || {}).map(([k, v]) => `${k} (${v}점)`).join(' | ')}</div>
                                        </div>
                                    ` : `
                                        <div class="pt-1 space-y-1.5">
                                            <div class="writing-ruled-line"></div>
                                            <div class="writing-ruled-line"></div>
                                            <div class="writing-ruled-line"></div>
                                        </div>
                                    `}
                                </div>
                            `).join('')}
                        </div>

                        <!-- 감점 방지 루브릭 요약표 (풀컬러 배지) -->
                        <div class="p-4 rounded-2xl bg-slate-900 text-white space-y-2.5 shadow-2xs">
                            <div class="text-xs font-bold text-rose-400 font-mono flex items-center justify-between">
                                <span class="flex items-center gap-1.5">
                                    <i data-lucide="shield-alert" class="w-4 h-4"></i>
                                    <span>내신 서술형 감점 방지 절대 루브릭 (Scoring Rubric)</span>
                                </span>
                                <span class="text-[10px] text-slate-400 font-sans">감점 주의 체크리스트</span>
                            </div>
                            <div class="grid grid-cols-3 gap-2.5 text-xs">
                                ${(rubric.deductionPoints || []).slice(0, 3).map(dp => `
                                    <div class="p-2.5 rounded-xl bg-white/10 text-slate-300 flex justify-between items-center text-xs">
                                        <span>${escapeHtml(dp.item)}</span>
                                        <strong class="text-rose-400 font-mono">${escapeHtml(dp.deduction)}</strong>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="border-t border-slate-200 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400 shrink-0">
                        <span>Writing Unit ${unit.unitNo} Sheet 3 (킬러 서술형 &amp; 루브릭)</span>
                        <span>Page ${basePage + 2}</span>
                    </div>
                </div>
            `;

            return sheet1 + sheet2 + sheet3;
        }

        // ======================================================================
        // 7. 뒷표지 시트 (Back Cover Sheet)
        // ======================================================================
        renderBackCoverSheet(level, isAnswers) {
            return `
                <div class="clinic-a4-sheet justify-between border-8 border-slate-900 bg-slate-900 p-14 text-white shadow-2xl relative overflow-hidden">
                    <div class="absolute inset-3 border-2 border-slate-700 pointer-events-none"></div>

                    <div class="relative z-10 text-center space-y-3 pt-6">
                        <div class="font-mono text-xs text-amber-400 tracking-[0.3em] uppercase">VERITAS ENGLISH ACADEMY</div>
                        <h2 class="font-serif font-black text-3xl text-white">클리닉 3종 부교재 트릴로지 로드맵</h2>
                        <p class="text-xs text-slate-400 max-w-sm mx-auto">개념에서 실전 독해, 내신 서술형 영작까지 빈틈없이 연결되는 3단 완성 시스템</p>
                    </div>

                    <div class="relative z-10 space-y-4 my-auto max-w-md mx-auto text-xs font-sans">
                        <div class="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                            <strong class="text-emerald-400 font-serif text-sm">1. 문법 Clinic (Grammar Studio)</strong>
                            <p class="text-slate-300 text-xs">개념 ➔ 기초 ➔ 실전 20제 ➔ 킬러 서술형의 완전한 문법 완성</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                            <strong class="text-blue-400 font-serif text-sm">2. 독해 Clinic (Reading Studio)</strong>
                            <p class="text-slate-300 text-xs">문법을 지문에서 확인하는 실전 독해 3제 + 어법 2제 연계</p>
                        </div>
                        <div class="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                            <strong class="text-amber-400 font-serif text-sm">3. 쓰기 Clinic (Writing Studio)</strong>
                            <p class="text-slate-300 text-xs">조건 영작 + 직결 영작 + 기출 킬러 서술형으로 내신 1등급 정복</p>
                        </div>
                    </div>

                    <div class="relative z-10 text-center space-y-3 pb-4">
                        <div class="inline-block p-2.5 bg-white rounded-xl text-slate-900 font-mono text-xs tracking-widest font-bold">
                            ISBN 979-11-92384-${level.levelCode === 'lv1' ? '101' : '202'}-0 (Set)
                        </div>
                        <div class="text-[11px] font-mono text-slate-400">
                            Printed in Korea &bull; Veritas Scholars' Academy Press
                        </div>
                    </div>
                </div>
            `;
        }
    }

    window.clinicStudioEngine = new ClinicStudioEngine();

})(window);
