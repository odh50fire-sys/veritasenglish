/**
 * Veritas English - 통합 로컬 데이터 저장소 관리 (Storage Manager)
 * 단어장, 에빙하우스 망각곡선(SRS), 일일 플래너, 사용자 학습 통계, 원어민 데일리 미션 영구 보관
 */

const USERS_REGISTRY_KEY = 'veritas_users_registry_v1';
const LEGACY_STORAGE_KEYS = {
    WORDS: 'veritas_words_v1',
    SETTINGS: 'veritas_settings_v1',
    PLANS: 'veritas_plans_v1',
    BOOKMARKS: 'veritas_bookmarks_v1',
    HISTORY: 'veritas_history_v1',
    DAILY_MISSIONS: 'veritas_daily_missions_v1',
    READING_RECORDS: 'veritas_reading_records_v1',
    USER_PROFILE: 'veritas_user_profile_v1',
    WRONG_ANSWERS: 'veritas_wrong_answers_v1',
    MOCK_EXAMS: 'veritas_mock_exams_v1',
    CUSTOM_COLLECTIONS: 'veritas_custom_collections_v1',
    CUSTOM_WORDS: 'veritas_custom_words_v1'
};

const STORAGE_KEYS = new Proxy({}, {
    get(target, prop) {
        if (typeof window !== 'undefined' && window.storage && typeof window.storage.getStorageKey === 'function') {
            return window.storage.getStorageKey(prop);
        }
        return LEGACY_STORAGE_KEYS[prop] || `veritas_${String(prop).toLowerCase()}_v1`;
    }
});

// 에빙하우스 망각곡선 기반 라이트너 5단계 복습 간격 (일 단위)
const SRS_INTERVALS = {
    1: 1,   // 1단계: 1일 후 (당일 학습 후 다음 날 복습)
    2: 3,   // 2단계: 3일 후
    3: 7,   // 3단계: 7일 후 (1주일)
    4: 14,  // 4단계: 14일 후 (2주일)
    5: 30   // 5단계: 30일 후 (장기기억 마스터 완료)
};

/**
 * 전역 품사 표준화 헬퍼 (POS Helper)
 * 영문 약어(n., v., phr.v. 등)와 한국어 태그를 통합하여 표준 [명], [동], [형], [부], [숙] 뱃지 제공
 */
window.posHelper = {
    standardizePos(posStr = '', word = '', meaning = '') {
        const rawPos = String(posStr || '').trim().toLowerCase();
        const rawMeaning = String(meaning || '').trim();
        const cleanWord = String(word || '').trim();

        // 1. 숙어 (Phrasal verb / Idiom / 2단어 이상 공백 포함) 우선 판별
        if (
            rawPos.includes('phr') || 
            rawPos.includes('idiom') || 
            rawPos.includes('phrase') || 
            rawPos.includes('colloc') || 
            rawPos.includes('숙어') || 
            rawPos.includes('[숙]') ||
            rawMeaning.includes('[숙]') ||
            (cleanWord.includes(' ') && !cleanWord.startsWith('the ') && !cleanWord.startsWith('a '))
        ) {
            return '[숙]';
        }

        // 2. 복합 품사 (예: n./v., v./n., a./n.)
        if (rawPos.includes('n.') && rawPos.includes('v.')) {
            return rawPos.indexOf('n.') < rawPos.indexOf('v.') ? '[명/동]' : '[동/명]';
        }
        if (rawPos.includes('a.') && rawPos.includes('n.')) {
            return rawPos.indexOf('a.') < rawPos.indexOf('n.') ? '[형/명]' : '[명/형]';
        }
        if (rawPos.includes('a.') && rawPos.includes('v.')) {
            return '[형/동]';
        }

        // 3. 한국어 대괄호 품사 태그 매칭
        if (rawPos.includes('[명]') || rawMeaning.includes('[명]')) return '[명]';
        if (rawPos.includes('[동]') || rawMeaning.includes('[동]')) return '[동]';
        if (rawPos.includes('[형]') || rawMeaning.includes('[형]')) return '[형]';
        if (rawPos.includes('[부]') || rawMeaning.includes('[부]')) return '[부]';
        if (rawPos.includes('[접]') || rawMeaning.includes('[접]')) return '[접]';
        if (rawPos.includes('[전]') || rawMeaning.includes('[전]')) return '[전]';
        if (rawPos.includes('[대]') || rawMeaning.includes('[대]')) return '[대]';
        if (rawPos.includes('[감]') || rawMeaning.includes('[감]')) return '[감]';

        // 4. 영문 약어 매칭
        if (rawPos === 'n.' || rawPos === 'noun' || rawPos === 'n') return '[명]';
        if (rawPos === 'v.' || rawPos === 'verb' || rawPos === 'v') return '[동]';
        if (rawPos === 'a.' || rawPos === 'adj.' || rawPos === 'adj' || rawPos === 'adjective' || rawPos === 'a') return '[형]';
        if (rawPos === 'ad.' || rawPos === 'adv.' || rawPos === 'adv' || rawPos === 'adverb') return '[부]';
        if (rawPos === 'conj.' || rawPos === 'conj') return '[접]';
        if (rawPos === 'prep.' || rawPos === 'prep') return '[전]';
        if (rawPos === 'pron.' || rawPos === 'pron') return '[대]';
        if (rawPos === 'interj.') return '[감]';

        // 5. 형태소 기반 휴리스틱 추정 (단어 접미사 검사)
        const lowerWord = cleanWord.toLowerCase();
        if (lowerWord.length >= 4) {
            if (lowerWord.endsWith('ly')) return '[부]';
            if (lowerWord.endsWith('tion') || lowerWord.endsWith('ment') || lowerWord.endsWith('ness') || lowerWord.endsWith('ity') || lowerWord.endsWith('ance') || lowerWord.endsWith('ence') || lowerWord.endsWith('ship')) return '[명]';
            if (lowerWord.endsWith('ful') || lowerWord.endsWith('less') || lowerWord.endsWith('able') || lowerWord.endsWith('ible') || lowerWord.endsWith('ous') || lowerWord.endsWith('ive') || lowerWord.endsWith('ic')) return '[형]';
            if (lowerWord.endsWith('ize') || lowerWord.endsWith('ise') || lowerWord.endsWith('ate') || lowerWord.endsWith('en') || lowerWord.endsWith('ify')) return '[동]';
        }

        // 기본값: 뜻에서 한국어 서술어 종결어미 추정
        if (rawMeaning.endsWith('다') || rawMeaning.endsWith('하다') || rawMeaning.endsWith('되다')) return '[동]';
        if (rawMeaning.endsWith('한') || rawMeaning.endsWith('적') || rawMeaning.endsWith('운') || rawMeaning.endsWith('인')) return '[형]';
        if (rawMeaning.endsWith('게') || rawMeaning.endsWith('히') || rawMeaning.endsWith('로')) return '[부]';

        return '[명]';
    },

    getBadgeColor(stdPos) {
        if (stdPos === '[명]') return 'bg-blue-50 text-blue-800 border-blue-200';
        if (stdPos === '[동]') return 'bg-emerald-50 text-emerald-800 border-emerald-200';
        if (stdPos === '[형]') return 'bg-amber-50 text-amber-800 border-amber-200';
        if (stdPos === '[부]') return 'bg-slate-100 text-slate-700 border-slate-300';
        if (stdPos === '[숙]' || stdPos.includes('숙')) return 'bg-purple-100 text-purple-900 border-purple-300 font-black shadow-2xs';
        return 'bg-slate-50 text-slate-700 border-slate-200';
    },

    renderPosBadge(posStr = '', word = '', meaning = '') {
        const stdPos = this.standardizePos(posStr, word, meaning);
        const color = this.getBadgeColor(stdPos);
        return `<span class="inline-flex items-center text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${color} shrink-0">${stdPos}</span>`;
    }
};


const ACADEMIC_LEVELS = {
    1: {
        level: 1,
        name: 'Starter',
        nameKo: '스타터',
        subTitle: '기초 입문',
        badge: 'Lv.1 Starter',
        color: 'text-emerald-400',
        borderColor: 'border-emerald-400/40',
        badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
        description: '알파벳 파닉스 완성 및 초등 기초 어휘/단문 학습 단계',
        targetGrade: '초등 기초 / 파닉스 완성',
        recommendedVocas: ['curated-travel-air'],
        recommendedPassageSemester: '예비중'
    },
    2: {
        level: 2,
        name: 'Explorer',
        nameKo: '익스플로러',
        subTitle: '기초 다지기',
        badge: 'Lv.2 Explorer',
        color: 'text-teal-400',
        borderColor: 'border-teal-400/40',
        badgeBg: 'bg-teal-500/20 text-teal-300 border-teal-400/30',
        description: '기본 일상 및 여행 생존 어휘, Be동사/일반동사 현재/과거 기본 문장',
        targetGrade: '초등 심화 / 예비중 입문',
        recommendedVocas: ['curated-travel-hotel', 'curated-travel-dining'],
        recommendedPassageSemester: '예비중'
    },
    3: {
        level: 3,
        name: 'Pioneer',
        nameKo: '파이오니어',
        subTitle: '중학 입문',
        badge: 'Lv.3 Pioneer',
        color: 'text-sky-400',
        borderColor: 'border-sky-400/40',
        badgeBg: 'bg-sky-500/20 text-sky-300 border-sky-400/30',
        description: '중1-1 교과서 필수 어휘, 조동사 및 기본 접속사 활용 단문/복문',
        targetGrade: '중학교 1-1 내신 수준',
        recommendedVocas: ['curated-m1-1', 'curated-travel-transit'],
        recommendedPassageSemester: '중 1-1'
    },
    4: {
        level: 4,
        name: 'Navigator',
        nameKo: '내비게이터',
        subTitle: '중학 도약',
        badge: 'Lv.4 Navigator',
        color: 'text-blue-400',
        borderColor: 'border-blue-400/40',
        badgeBg: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
        description: '중1-2 표준 내신, To부정사 & 동명사 기초, 일상 회화 대화문 완성',
        targetGrade: '중학교 1-2 내신 수준',
        recommendedVocas: ['curated-m1-2', 'curated-travel-emerge'],
        recommendedPassageSemester: '중 1-2'
    },
    5: {
        level: 5,
        name: 'Challenger',
        nameKo: '챌린저',
        subTitle: '중학 핵심',
        badge: 'Lv.5 Challenger',
        color: 'text-indigo-400',
        borderColor: 'border-indigo-400/40',
        badgeBg: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30',
        description: '중2-1 핵심 내신, 수동태 & 관계대명사, 중학 교과서 필수 숙어',
        targetGrade: '중학교 2-1 내신 수준',
        recommendedVocas: ['curated-m2-1', 'curated-m-idioms'],
        recommendedPassageSemester: '중 2-1'
    },
    6: {
        level: 6,
        name: 'Strategist',
        nameKo: '스트래티지스트',
        subTitle: '중학 심화',
        badge: 'Lv.6 Strategist',
        color: 'text-violet-400',
        borderColor: 'border-violet-400/40',
        badgeBg: 'bg-violet-500/20 text-violet-300 border-violet-400/30',
        description: '중2-2 심화 내신, 현재완료 & 분사구문, 미국 교과서 학술 Step 1',
        targetGrade: '중학교 2-2 내신 수준',
        recommendedVocas: ['curated-m2-2', 'curated-us-elem'],
        recommendedPassageSemester: '중 2-2'
    },
    7: {
        level: 7,
        name: 'Master',
        nameKo: '마스터',
        subTitle: '중학 완성',
        badge: 'Lv.7 Master',
        color: 'text-purple-400',
        borderColor: 'border-purple-400/40',
        badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
        description: '중3-1 고난도 내신, 능률 VOCA 중등 고난도, 실전 구동사 마스터',
        targetGrade: '중학교 3-1 고난도 내신',
        recommendedVocas: ['neungryul2025', 'curated-m3-1', 'curated-phrasal'],
        recommendedPassageSemester: '중 3-1'
    },
    8: {
        level: 8,
        name: 'Innovator',
        nameKo: '이노베이터',
        subTitle: '고등 연계',
        badge: 'Lv.8 Innovator',
        color: 'text-amber-400',
        borderColor: 'border-amber-400/40',
        badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
        description: '능률 VOCA 어원편, 중3-2 킬러/고등 연계, 미국 교과서 Step 2',
        targetGrade: '중 3-2 킬러 및 예비고1 모의고사',
        recommendedVocas: ['neungryul_etym_2025', 'curated-m3-2', 'curated-us-mid1'],
        recommendedPassageSemester: '중 3-2'
    },
    9: {
        level: 9,
        name: 'Leader',
        nameKo: '리더',
        subTitle: '고등 1~2등급',
        badge: 'Lv.9 Leader',
        color: 'text-rose-400',
        borderColor: 'border-rose-400/40',
        badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-400/30',
        description: '수능 1등급 킬러 다의어, 원어민 감정·심경·성격, 영미 명작 문학 & 슬랭',
        targetGrade: '고1~고2 전국연합 학력평가 1~2등급',
        recommendedVocas: ['curated-killer', 'curated-emotions', 'curated-literature', 'curated-slang'],
        recommendedPassageSemester: '중 3-2'
    },
    10: {
        level: 10,
        name: 'Veritas Elite',
        nameKo: '베리타스 엘리트',
        subTitle: '원어민 마스터',
        badge: 'Lv.10 Veritas Elite',
        color: 'text-amber-300',
        borderColor: 'border-amber-400/50',
        badgeBg: 'bg-gradient-to-r from-amber-500/30 via-yellow-400/30 to-amber-500/30 text-amber-200 border-amber-400/50 shadow-sm',
        description: '수능 1등급 만점, 미국 교과서 Tier 2 심화, 최신 시사 뉴스 & AI 테크 보카',
        targetGrade: '고3 수능 만점 및 최고급 비문학 학술',
        recommendedVocas: ['curated-us-mid2', 'curated-tech'],
        recommendedPassageSemester: '중 3-2'
    }
};

if (typeof window !== 'undefined') {
    window.ACADEMIC_LEVELS = ACADEMIC_LEVELS;
}

class StorageManager {
    constructor() {
        this.initUserRegistry();
        this.resetState();
        this.loadAll();
    }

    resetState() {
        this.words = [];
        this.settings = {
            dailyTarget: 15,
            audioAccent: 'en-US',
            audioRate: 0.95,
            autoAudio: true,
            theme: 'light',
            studentName: '영재 학도',
            customShortcuts: {
                slot1: { key: 'reading', label: '중·고등 내신 독해 & 비문학 풀기 →' },
                slot2: { key: 'dictionary', label: '영단어 사전 열기' }
            },
            learningGoals: {
                activeMode: 'short',
                shortTerm: {
                    presetId: 'st_week_100',
                    title: '이번 주 테마 어휘 100단어 완독',
                    targetDays: 7,
                    targetCount: 100,
                    startDate: this.getTodayDateString(),
                    targetType: 'words'
                },
                longTerm: {
                    presetId: 'lt_neungryul_40',
                    title: '능률 VOCA 중등 고난도 40일 완강',
                    targetDays: 40,
                    targetCount: 1200,
                    startDate: this.getTodayDateString(),
                    targetType: 'words'
                }
            }
        };
        this.plans = {}; // { 'YYYY-MM-DD': { restDay: false, memo: '', isDone: false } }
        this.bookmarks = []; // native expression ids
        this.history = []; // [{ date: 'YYYY-MM-DD', learnedCount: 15, quizScore: 90 }]
        this.dailyMissions = {}; // { 'YYYY-MM-DD': { [exprId]: true } }
        this.readingRecords = {}; // { [passageId]: { score: 100, timestamp: 123456789 } }
        this.userProfile = {
            name: '영재 학도',
            exp: 0,
            tier: 'bronze',
            badges: [],
            streak: 1,
            academicLevel: 3,
            levelTestHistory: [],
            lastActiveDate: this.getTodayDateString(),
            completedScrambles: []
        };
        this.wrongAnswers = []; // [{ id, sourceType, passageId, questionText, userChoice, correctChoice, explanation, date, isResolved, wrongCount }]
        this.mockExams = []; // [{ id, title, grade, score, totalQuestions, correctCount, timeSpentSec, date }]
        this.customCollections = []; // 사용자 맞춤 AI 생성 단어장 메타데이터 [{ id, title, badge, category, purpose, level, theme, wordsPerDay, totalDays, totalWords, description, createdAt }]
        this.customWords = []; // 사용자 맞춤 AI 생성 단어 데이터 [{ collectionId, collectionTitle, DAY, 번호, 단어, 영단어, 품사, 뜻, 예문, 해석, 예문해석, category, badge }]
    }

    // ------------------------------------------------------------------------
    // 다중 사용자(아이디) 프로필 및 레지스트리 관리 (Multi-User Profile Manager)
    // ------------------------------------------------------------------------
    initUserRegistry() {
        try {
            const raw = localStorage.getItem(USERS_REGISTRY_KEY);
            if (raw) {
                this.userRegistry = JSON.parse(raw);
                if (!this.userRegistry.users || !Array.isArray(this.userRegistry.users) || this.userRegistry.users.length === 0) {
                    this.userRegistry = this.createDefaultRegistry();
                    this.saveUserRegistry();
                }
            } else {
                this.userRegistry = this.createDefaultRegistry();
                this.saveUserRegistry();
                // 기존 레거시 데이터가 있으면 user_default로 안전하게 마이그레이션
                this.migrateLegacyDataToUser('user_default');
            }

            // activeUserId 유효성 확인
            const activeUser = this.userRegistry.users.find(u => u.id === this.userRegistry.activeUserId);
            if (!activeUser) {
                this.userRegistry.activeUserId = this.userRegistry.users[0].id;
                this.saveUserRegistry();
            }
        } catch (e) {
            console.error('Failed to init user registry:', e);
            this.userRegistry = this.createDefaultRegistry();
        }
    }

    createDefaultRegistry() {
        return {
            activeUserId: 'user_default',
            users: [
                {
                    id: 'user_default',
                    username: '기본 사용자',
                    avatar: '🎓',
                    grade: '중등 통합',
                    createdAt: new Date().toISOString(),
                    lastActiveAt: new Date().toISOString()
                }
            ]
        };
    }

    migrateLegacyDataToUser(targetUserId) {
        try {
            Object.keys(LEGACY_STORAGE_KEYS).forEach(k => {
                const legKey = LEGACY_STORAGE_KEYS[k];
                const oldVal = localStorage.getItem(legKey);
                if (oldVal !== null) {
                    const newKey = `veritas_${targetUserId}_${k.toLowerCase()}_v1`;
                    if (localStorage.getItem(newKey) === null) {
                        localStorage.setItem(newKey, oldVal);
                    }
                }
            });
        } catch (e) {
            console.error('Migration error:', e);
        }
    }

    saveUserRegistry() {
        try {
            localStorage.setItem(USERS_REGISTRY_KEY, JSON.stringify(this.userRegistry));
        } catch (e) {
            console.error('Failed to save user registry:', e);
        }
    }

    getStorageKey(type) {
        const userId = (this.userRegistry && this.userRegistry.activeUserId) || 'user_default';
        return `veritas_${userId}_${String(type).toLowerCase()}_v1`;
    }

    getActiveUser() {
        if (!this.userRegistry || !this.userRegistry.users) return null;
        return this.userRegistry.users.find(u => u.id === this.userRegistry.activeUserId) || this.userRegistry.users[0];
    }

    getAllUsers() {
        if (!this.userRegistry || !this.userRegistry.users) return [];
        return [...this.userRegistry.users];
    }

    createUser({ username, avatar = '🎓', grade = '중등', seedSample = true }) {
        const trimmedName = String(username || '').trim() || `학습자 ${this.userRegistry.users.length + 1}`;
        const newId = 'user_' + Date.now();
        const newUser = {
            id: newId,
            username: trimmedName,
            avatar: avatar || '🎓',
            grade: grade || '중등',
            createdAt: new Date().toISOString(),
            lastActiveAt: new Date().toISOString()
        };

        this.userRegistry.users.push(newUser);
        this.saveUserRegistry();

        // 새 사용자로 즉시 전환
        this.switchUser(newId, { seedSample });
        return newUser;
    }

    switchUser(targetUserId, options = {}) {
        const targetUser = this.userRegistry.users.find(u => u.id === targetUserId);
        if (!targetUser) {
            console.error('User not found:', targetUserId);
            return null;
        }

        // 현재 사용자 데이터 우선 안전 보관
        this.saveAll();

        // 활성 사용자 ID 갱신
        this.userRegistry.activeUserId = targetUserId;
        targetUser.lastActiveAt = new Date().toISOString();
        this.saveUserRegistry();

        // 상태 초기화 및 해당 사용자 데이터 로드
        this.resetState();
        this.loadAll();

        // 새 사용자이고 seedSample 옵션이 켜져 있는데 단어장이 비어있다면 샘플 주입
        if (options.seedSample && this.words.length === 0) {
            this.seedSampleWords();
        }

        // 사용자 설정의 studentName 동기화
        if (targetUser.username && this.settings.studentName !== targetUser.username) {
            this.settings.studentName = targetUser.username;
            this.saveSettings();
        }

        // 이벤트 디스패치
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('veritas:user-switched', {
                detail: { user: targetUser }
            }));
        }

        return targetUser;
    }

    updateUser(userId, { username, avatar, grade }) {
        const user = this.userRegistry.users.find(u => u.id === userId);
        if (!user) return null;
        if (username !== undefined) user.username = String(username).trim();
        if (avatar !== undefined) user.avatar = avatar;
        if (grade !== undefined) user.grade = grade;
        this.saveUserRegistry();

        if (userId === this.userRegistry.activeUserId && username) {
            this.settings.studentName = username;
            this.saveSettings();
        }
        return user;
    }

    deleteUser(userId) {
        if (!this.userRegistry.users || this.userRegistry.users.length <= 1) {
            throw new Error('최소 한 명의 학습자 아이디는 유지되어야 합니다.');
        }

        const idx = this.userRegistry.users.findIndex(u => u.id === userId);
        if (idx === -1) return false;

        // 로컬스토리지에서 해당 사용자의 모든 데이터 삭제
        const prefix = `veritas_${userId}_`;
        try {
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const k = localStorage.key(i);
                if (k && k.startsWith(prefix)) {
                    keysToRemove.push(k);
                }
            }
            keysToRemove.forEach(k => localStorage.removeItem(k));
        } catch (e) {
            console.error('Error clearing user keys:', e);
        }

        // 목록에서 제거
        this.userRegistry.users.splice(idx, 1);

        // 만약 삭제한 사용자가 현재 활성 사용자였다면 첫 번째 사용자로 자동 전환
        if (this.userRegistry.activeUserId === userId) {
            const nextUser = this.userRegistry.users[0];
            this.userRegistry.activeUserId = nextUser.id;
            this.saveUserRegistry();
            this.resetState();
            this.loadAll();
        } else {
            this.saveUserRegistry();
        }

        return true;
    }

    saveAll() {
        this.saveWords();
        this.saveSettings();
        this.savePlans();
        this.saveBookmarks();
        this.saveHistory();
        this.saveDailyMissions();
        this.saveReadingRecords();
        this.saveUserProfile();
        this.saveWrongAnswers();
        this.saveMockExams();
        this.saveCustomCollections();
        this.saveCustomWords();
    }

    loadAll() {
        try {
            const rawWords = localStorage.getItem(STORAGE_KEYS.WORDS);
            if (rawWords) {
                this.words = JSON.parse(rawWords);
                // 기존 등록 단어 중 예문이 비어있거나 구버전 정적 오류 문장인 경우 자동 보강
                if (window.contextSentenceHelper && Array.isArray(this.words)) {
                    this.words.forEach(w => {
                        if ((!w.example || !w.example.trim() || w.example.includes('meaning of ______ clearly')) && !w.isReadingPassage && w.word) {
                            const sInfo = window.contextSentenceHelper.getOrGenerateSentence(w);
                            if (sInfo && sInfo.sentence) {
                                w.example = sInfo.sentence;
                                w.exampleMeaning = sInfo.translation;
                            }
                        }
                    });
                }
            } else {
                // 초기 진입 시 샘플 단어 자동 주입
                this.seedSampleWords();
            }

            const rawSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
            if (rawSettings) {
                this.settings = { ...this.settings, ...JSON.parse(rawSettings) };
            }

            const rawPlans = localStorage.getItem(STORAGE_KEYS.PLANS);
            if (rawPlans) {
                this.plans = JSON.parse(rawPlans);
            }

            const rawBookmarks = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
            if (rawBookmarks) {
                this.bookmarks = JSON.parse(rawBookmarks);
            }

            const rawHistory = localStorage.getItem(STORAGE_KEYS.HISTORY);
            if (rawHistory) {
                this.history = JSON.parse(rawHistory);
            }

            const rawMissions = localStorage.getItem(STORAGE_KEYS.DAILY_MISSIONS);
            if (rawMissions) {
                this.dailyMissions = JSON.parse(rawMissions);
            }

            const rawReadingRecords = localStorage.getItem(STORAGE_KEYS.READING_RECORDS);
            if (rawReadingRecords) {
                this.readingRecords = JSON.parse(rawReadingRecords);
            } else {
                this.readingRecords = {};
            }

            const rawProfile = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
            if (rawProfile) {
                this.userProfile = { ...this.userProfile, ...JSON.parse(rawProfile) };
            }

            const rawWrongAnswers = localStorage.getItem(STORAGE_KEYS.WRONG_ANSWERS);
            if (rawWrongAnswers) {
                this.wrongAnswers = JSON.parse(rawWrongAnswers);
            }

            const rawMockExams = localStorage.getItem(STORAGE_KEYS.MOCK_EXAMS);
            if (rawMockExams) {
                this.mockExams = JSON.parse(rawMockExams);
            }

            const rawCustomColls = localStorage.getItem(STORAGE_KEYS.CUSTOM_COLLECTIONS);
            this.customCollections = rawCustomColls ? JSON.parse(rawCustomColls) : [];

            const rawCustomWords = localStorage.getItem(STORAGE_KEYS.CUSTOM_WORDS);
            this.customWords = rawCustomWords ? JSON.parse(rawCustomWords) : [];

            // 출석(Streak) 일자 갱신 검사
            this.updateDailyStreak();

            // 맞춤 바로가기 기본값 보장
            if (!this.settings.customShortcuts || !this.settings.customShortcuts.slot1 || !this.settings.customShortcuts.slot2) {
                this.settings.customShortcuts = {
                    slot1: { key: 'reading', label: '중·고등 내신 독해 & 비문학 풀기 →' },
                    slot2: { key: 'dictionary', label: '영단어 사전 열기' }
                };
            }

            // 단기/장기 학업 목표 기본값 보장
            if (!this.settings.learningGoals || !this.settings.learningGoals.shortTerm || !this.settings.learningGoals.longTerm) {
                const today = this.getTodayDateString();
                this.settings.learningGoals = {
                    activeMode: (this.settings.learningGoals && this.settings.learningGoals.activeMode) || 'short',
                    shortTerm: (this.settings.learningGoals && this.settings.learningGoals.shortTerm) || {
                        presetId: 'st_week_100',
                        title: '이번 주 테마 어휘 100단어 완독',
                        targetDays: 7,
                        targetCount: 100,
                        startDate: today,
                        targetType: 'words'
                    },
                    longTerm: (this.settings.learningGoals && this.settings.learningGoals.longTerm) || {
                        presetId: 'lt_neungryul_40',
                        title: '능률 VOCA 중등 고난도 40일 완강',
                        targetDays: 40,
                        targetCount: 1200,
                        startDate: today,
                        targetType: 'words'
                    }
                };
            }
        } catch (e) {
            console.error('Failed to load storage data:', e);
        }
    }

    seedSampleWords() {
        if (typeof SAMPLE_WORDS !== 'undefined' && Array.isArray(SAMPLE_WORDS)) {
            const today = this.getTodayDateString();
            this.words = SAMPLE_WORDS.map((item, index) => {
                const nextDate = this.addDays(today, item.stage ? SRS_INTERVALS[item.stage] || 1 : 1);
                return {
                    id: 'sample-' + (index + 1) + '-' + Date.now(),
                    word: item.word,
                    meaning: item.meaning,
                    partOfSpeech: item.partOfSpeech || 'n.',
                    example: item.example || '',
                    exampleMeaning: item.exampleMeaning || '',
                    level: item.level || 'middle',
                    tag: item.tag || '기본 단어',
                    planDate: today,
                    createdAt: Date.now() - (index * 86400000),
                    stage: item.stage || 1,
                    nextReviewDate: nextDate,
                    lastReviewed: item.stage > 1 ? Date.now() - 86400000 : null,
                    reviewCount: item.reviewCount || 0,
                    correctCount: item.correctCount || 0,
                    wrongCount: item.wrongCount || 0,
                    isWeak: item.isWeak || false
                };
            });
            this.saveWords();
        }
    }

    saveWords() {
        try {
            localStorage.setItem(STORAGE_KEYS.WORDS, JSON.stringify(this.words));
        } catch (e) {
            console.error('Failed to save words:', e);
        }
    }

    saveSettings() {
        try {
            localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(this.settings));
        } catch (e) {
            console.error('Failed to save settings:', e);
        }
    }

    saveReadingRecords() {
        try {
            localStorage.setItem(STORAGE_KEYS.READING_RECORDS, JSON.stringify(this.readingRecords));
        } catch (e) {
            console.error('Failed to save reading records:', e);
        }
    }

    saveUserProfile() {
        try {
            localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(this.userProfile));
        } catch (e) {
            console.error('Failed to save user profile:', e);
        }
    }

    saveWrongAnswers() {
        try {
            localStorage.setItem(STORAGE_KEYS.WRONG_ANSWERS, JSON.stringify(this.wrongAnswers));
        } catch (e) {
            console.error('Failed to save wrong answers:', e);
        }
    }

    saveMockExams() {
        try {
            localStorage.setItem(STORAGE_KEYS.MOCK_EXAMS, JSON.stringify(this.mockExams));
        } catch (e) {
            console.error('Failed to save mock exams:', e);
        }
    }

    // ------------------------------------------------------------------------
    // AI 맞춤 생성 단어장(Custom Vocabulary Units) 관리
    // ------------------------------------------------------------------------
    getCustomCollections() {
        return this.customCollections || [];
    }

    getCustomWords() {
        return this.customWords || [];
    }

    saveCustomCollections() {
        try {
            localStorage.setItem(STORAGE_KEYS.CUSTOM_COLLECTIONS, JSON.stringify(this.customCollections));
        } catch (e) {
            console.error('Failed to save custom collections:', e);
        }
    }

    saveCustomWords() {
        try {
            localStorage.setItem(STORAGE_KEYS.CUSTOM_WORDS, JSON.stringify(this.customWords));
        } catch (e) {
            console.error('Failed to save custom words:', e);
        }
    }

    saveCustomCollection(collectionMeta, wordsArray) {
        if (!collectionMeta || !collectionMeta.id) return false;
        if (!this.customCollections) this.customCollections = [];
        const existingIdx = this.customCollections.findIndex(c => c.id === collectionMeta.id);
        if (existingIdx !== -1) {
            this.customCollections[existingIdx] = collectionMeta;
        } else {
            this.customCollections.unshift(collectionMeta);
        }
        this.saveCustomCollections();

        if (!this.customWords) this.customWords = [];
        this.customWords = this.customWords.filter(w => w.collectionId !== collectionMeta.id);
        if (Array.isArray(wordsArray)) {
            this.customWords.push(...wordsArray);
        }
        this.saveCustomWords();
        return true;
    }

    deleteCustomCollection(collectionId) {
        if (!collectionId) return false;
        if (this.customCollections) {
            this.customCollections = this.customCollections.filter(c => c.id !== collectionId);
            this.saveCustomCollections();
        }
        if (this.customWords) {
            this.customWords = this.customWords.filter(w => w.collectionId !== collectionId);
            this.saveCustomWords();
        }
        if (this.words) {
            this.words = this.words.filter(w => w.curatedCollectionId !== collectionId);
            this.saveWords();
        }
        return true;
    }

    // ------------------------------------------------------------------------
    // 티어 & 경험치(EXP) & 뱃지 시스템
    // ------------------------------------------------------------------------
    calculateTier(exp) {
        if (exp >= 12000) return { key: 'master', name: 'Grand Veritas Master', rank: 6, min: 12000, next: null, color: 'text-amber-500', bg: 'bg-gradient-to-r from-amber-500 to-yellow-300' };
        if (exp >= 7000) return { key: 'diamond', name: 'Diamond Fellow', rank: 5, min: 7000, next: 12000, color: 'text-cyan-400', bg: 'bg-cyan-500' };
        if (exp >= 3500) return { key: 'platinum', name: 'Platinum Scholar', rank: 4, min: 3500, next: 7000, color: 'text-emerald-400', bg: 'bg-emerald-600' };
        if (exp >= 1500) return { key: 'gold', name: 'Gold Scholar', rank: 3, min: 1500, next: 3500, color: 'text-amber-400', bg: 'bg-amber-500' };
        if (exp >= 500) return { key: 'silver', name: 'Silver Scholar', rank: 2, min: 500, next: 1500, color: 'text-slate-300', bg: 'bg-slate-400' };
        return { key: 'bronze', name: 'Bronze Scholar', rank: 1, min: 0, next: 500, color: 'text-amber-700', bg: 'bg-amber-700' };
    }

    getCurrentTier() {
        return this.calculateTier(this.userProfile.exp || 0);
    }

    /**
     * 현재 사용자의 진단 학술 레벨 (1 ~ 10, 기본값 3)
     */
    getAcademicLevel() {
        const lvl = Number(this.userProfile && this.userProfile.academicLevel);
        return (lvl >= 1 && lvl <= 10) ? lvl : 3;
    }

    /**
     * 레벨 번호(1~10)에 따른 메타데이터 반환
     */
    getLevelInfo(levelNum = null) {
        const lvl = levelNum !== null ? Number(levelNum) : this.getAcademicLevel();
        const validLvl = (lvl >= 1 && lvl <= 10) ? lvl : 3;
        return ACADEMIC_LEVELS[validLvl] || ACADEMIC_LEVELS[3];
    }

    /**
     * 학술 레벨 수동 지정 및 저장
     */
    setAcademicLevel(levelNum) {
        const lvl = Math.min(10, Math.max(1, Number(levelNum) || 3));
        this.userProfile.academicLevel = lvl;
        this.saveUserProfile();
        return this.getLevelInfo(lvl);
    }

    /**
     * 레벨테스트 결과 저장 및 +150 EXP 보상 지급
     */
    saveLevelTestResult({ questionCount = 10, score = 0, correctCount = 0, level = 3, categoryScores = {} }) {
        const assignedLevel = Math.min(10, Math.max(1, Number(level) || 3));
        this.userProfile.academicLevel = assignedLevel;
        if (!Array.isArray(this.userProfile.levelTestHistory)) {
            this.userProfile.levelTestHistory = [];
        }
        const record = {
            id: `lt-${Date.now()}`,
            date: this.getTodayDateString(),
            timestamp: Date.now(),
            questionCount,
            score,
            correctCount,
            level: assignedLevel,
            categoryScores
        };
        this.userProfile.levelTestHistory.unshift(record);
        
        // 보상 EXP 150 지급
        const expResult = this.addExp(150, '실력 진단 레벨테스트 완료');
        this.saveUserProfile();

        // 메인 헤더 및 배너 UI 갱신 이벤트
        if (window.app && typeof window.app.updateHeaderAcademicLevelBadge === 'function') {
            window.app.updateHeaderAcademicLevelBadge();
        }

        return {
            record,
            levelInfo: this.getLevelInfo(assignedLevel),
            expGained: expResult.gained
        };
    }

    addExp(amount, reason = '') {
        if (!amount || amount <= 0) return { gained: 0, newExp: this.userProfile.exp };
        const prevTier = this.getCurrentTier();
        this.userProfile.exp = (this.userProfile.exp || 0) + amount;
        const newTier = this.getCurrentTier();
        const tierChanged = prevTier.key !== newTier.key && newTier.rank > prevTier.rank;
        if (tierChanged) {
            this.userProfile.tier = newTier.key;
        }
        
        // 뱃지 검사
        const unlockedBadges = this.checkAndUnlockBadges();
        this.saveUserProfile();

        if (window.achievements && typeof window.achievements.renderHeaderCapsule === 'function') {
            window.achievements.renderHeaderCapsule();
        }

        if (window.readingEngine && typeof window.readingEngine.showToast === 'function') {
            window.readingEngine.showToast(`✨ +${amount} EXP 획득! (${reason || '학습 완료'})`);
        }

        return {
            gained: amount,
            newExp: this.userProfile.exp,
            tierChanged,
            newTier,
            unlockedBadges
        };
    }

    updateDailyStreak() {
        const today = this.getTodayDateString();
        const lastDate = this.userProfile.lastActiveDate;
        if (!lastDate) {
            this.userProfile.streak = 1;
            this.userProfile.lastActiveDate = today;
            this.saveUserProfile();
            return;
        }
        if (lastDate === today) {
            return; // 오늘 이미 출석 반영됨
        }
        const yesterday = this.addDays(today, -1);
        if (lastDate === yesterday) {
            this.userProfile.streak = (this.userProfile.streak || 0) + 1;
        } else {
            this.userProfile.streak = 1; // 연속 끊김
        }
        this.userProfile.lastActiveDate = today;
        this.saveUserProfile();
        this.addExp(20, '매일 출석 보너스');
    }

    checkAndUnlockBadges() {
        if (!this.userProfile.badges) this.userProfile.badges = [];
        const currentBadges = new Set(this.userProfile.badges);
        const newUnlocked = [];

        const BADGE_RULES = [
            { id: 'streak_3', name: '작심삼일 탈출', desc: '3일 연속 학습 달성', exp: 100, check: () => (this.userProfile.streak || 0) >= 3 },
            { id: 'streak_7', name: '성실의 미덕', desc: '7일 연속 학습 달성', exp: 150, check: () => (this.userProfile.streak || 0) >= 7 },
            { id: 'streak_30', name: '불굴의 학도', desc: '30일 연속 학습 달성', exp: 300, check: () => (this.userProfile.streak || 0) >= 30 },
            { id: 'voca_50', name: '어휘 탐험가', desc: '단어 50개 마스터 (플래시카드+퀴즈)', exp: 100, check: () => this.words.filter(w => (w.flashcardDone && w.quizDone) || w.studyCompleted).length >= 50 },
            { id: 'voca_200', name: '보카 마스터', desc: '단어 200개 마스터', exp: 200, check: () => this.words.filter(w => (w.flashcardDone && w.quizDone) || w.studyCompleted).length >= 200 },
            { id: 'voca_500', name: '걸어다니는 사전', desc: '단어 500개 마스터', exp: 300, check: () => this.words.filter(w => (w.flashcardDone && w.quizDone) || w.studyCompleted).length >= 500 },
            { id: 'reading_100_1', name: '첫 만점의 기쁨', desc: '내신 독해 100점 1회 달성', exp: 100, check: () => Object.values(this.readingRecords || {}).filter(r => r.score === 100).length >= 1 },
            { id: 'reading_100_5', name: '독해 우등생', desc: '내신 독해 100점 5회 달성', exp: 200, check: () => Object.values(this.readingRecords || {}).filter(r => r.score === 100).length >= 5 },
            { id: 'reading_100_20', name: '독해 지존', desc: '내신 독해 100점 20회 달성', exp: 300, check: () => Object.values(this.readingRecords || {}).filter(r => r.score === 100).length >= 20 },
            { id: 'scramble_5', name: '구문의 시작', desc: '서술형 어순배열 5문장 성공', exp: 100, check: () => (this.userProfile.completedScrambles || []).length >= 5 },
            { id: 'scramble_20', name: '서술형 마스터', desc: '서술형 어순배열 20문장 성공', exp: 200, check: () => (this.userProfile.completedScrambles || []).length >= 20 },
            { id: 'wrong_5', name: '오답 청소기', desc: '오답노트 5문제 극복 완료', exp: 100, check: () => (this.wrongAnswers || []).filter(w => w.isResolved).length >= 5 },
            { id: 'wrong_20', name: '약점 제로', desc: '오답노트 20문제 극복 완료', exp: 200, check: () => (this.wrongAnswers || []).filter(w => w.isResolved).length >= 20 },
            { id: 'exam_1', name: '실전 첫걸음', desc: '내신 모의고사 1회 완주', exp: 100, check: () => (this.mockExams || []).length >= 1 },
            { id: 'exam_5', name: '시험의 고수', desc: '내신 모의고사 5회 완주', exp: 200, check: () => (this.mockExams || []).length >= 5 },
            { id: 'tier_silver', name: '정진하는 학도', desc: '실버 학도(500 EXP) 등극', exp: 150, check: () => (this.userProfile.exp || 0) >= 500 }
        ];

        BADGE_RULES.forEach(badge => {
            if (!currentBadges.has(badge.id) && badge.check()) {
                currentBadges.add(badge.id);
                this.userProfile.badges.push(badge.id);
                newUnlocked.push(badge);
                // 뱃지 해금 보너스 경험치 지급 (순환 방지 위해 직접 합산)
                this.userProfile.exp = (this.userProfile.exp || 0) + badge.exp;
            }
        });

        if (newUnlocked.length > 0) {
            this.saveUserProfile();
            if (window.achievements && typeof window.achievements.triggerBadgeCelebration === 'function') {
                window.achievements.triggerBadgeCelebration(newUnlocked[0]);
            }
        }
        return newUnlocked;
    }

    // ------------------------------------------------------------------------
    // 스마트 오답노트 관리
    // ------------------------------------------------------------------------
    recordWrongAnswer(wrongData) {
        if (!wrongData || !wrongData.questionText) return;
        if (!this.wrongAnswers) this.wrongAnswers = [];
        
        // 기존 동일 문제 여부 확인
        const existing = this.wrongAnswers.find(w => w.questionText === wrongData.questionText);
        if (existing) {
            existing.wrongCount = (existing.wrongCount || 1) + 1;
            existing.userChoice = wrongData.userChoice || existing.userChoice;
            existing.date = this.getTodayDateString();
            existing.isResolved = false; // 재오답 발생 시 미해결 상태 복귀
        } else {
            this.wrongAnswers.unshift({
                id: 'wa-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
                sourceType: wrongData.sourceType || 'reading', // 'quiz' | 'reading' | 'scramble' | 'exam'
                passageId: wrongData.passageId || '',
                passageTitle: wrongData.passageTitle || '',
                questionText: wrongData.questionText,
                userChoice: wrongData.userChoice || '',
                correctChoice: wrongData.correctChoice || '',
                explanation: wrongData.explanation || '',
                options: wrongData.options || [],
                correctIndex: wrongData.correctIndex ?? null,
                date: this.getTodayDateString(),
                isResolved: false,
                wrongCount: 1
            });
        }
        this.saveWrongAnswers();
        if (window.wrongNote && typeof window.wrongNote.render === 'function') {
            window.wrongNote.render();
        }
    }

    resolveWrongAnswer(id) {
        if (!this.wrongAnswers) return false;
        const item = this.wrongAnswers.find(w => w.id === id);
        if (item && !item.isResolved) {
            item.isResolved = true;
            item.resolvedAt = this.getTodayDateString();
            this.saveWrongAnswers();
            this.addExp(15, '오답 극복 보너스');
            this.checkAndUnlockBadges();
            if (window.wrongNote && typeof window.wrongNote.render === 'function') {
                window.wrongNote.render();
            }
            return true;
        }
        return false;
    }

    getUnresolvedWrongAnswers(filterType = 'all') {
        if (!this.wrongAnswers) return [];
        return this.wrongAnswers.filter(w => {
            if (w.isResolved) return false;
            if (filterType === 'all') return true;
            return w.sourceType === filterType;
        });
    }

    // ------------------------------------------------------------------------
    // 서술형 어순배열 완수 기록
    // ------------------------------------------------------------------------
    recordScrambleCompletion(scrambleId, isOneShot = true) {
        if (!this.userProfile.completedScrambles) {
            this.userProfile.completedScrambles = [];
        }
        const isFirstTime = !this.userProfile.completedScrambles.includes(scrambleId);
        if (isFirstTime) {
            this.userProfile.completedScrambles.push(scrambleId);
        }
        const expGain = 15 + (isOneShot ? 5 : 0);
        this.addExp(expGain, isOneShot ? '어순 배열 원샷 정답' : '어순 배열 완성');
        this.checkAndUnlockBadges();
        this.saveUserProfile();
        return { isFirstTime, expGain };
    }

    // ------------------------------------------------------------------------
    // 내신 실전 모의고사 기록
    // ------------------------------------------------------------------------
    recordMockExamResult(examData) {
        if (!this.mockExams) this.mockExams = [];
        const record = {
            id: 'exam-' + Date.now(),
            title: examData.title || '내신 실전 모의고사',
            grade: examData.grade || 'all',
            score: examData.score || 0,
            totalQuestions: examData.totalQuestions || 20,
            correctCount: examData.correctCount || 0,
            timeSpentSec: examData.timeSpentSec || 0,
            date: this.getTodayDateString()
        };
        this.mockExams.unshift(record);
        this.saveMockExams();

        // EXP 계산: 20문항 이상이면 1.5배 보너스
        const baseScore = record.score;
        const expGain = record.totalQuestions >= 20 ? Math.round(baseScore * 1.5) : baseScore;
        this.addExp(expGain, `내신 모의고사 완주 (${baseScore}점)`);
        this.checkAndUnlockBadges();

        return record;
    }

    // ------------------------------------------------------------------------
    // 맞춤형 메인 바로가기 2개 관리
    // ------------------------------------------------------------------------
    getCustomShortcuts() {
        if (!this.settings.customShortcuts || !this.settings.customShortcuts.slot1 || !this.settings.customShortcuts.slot2) {
            this.settings.customShortcuts = {
                slot1: { key: 'reading', label: '중·고등 내신 독해 & 비문학 풀기 →' },
                slot2: { key: 'dictionary', label: '영단어 사전 열기' }
            };
        }
        return this.settings.customShortcuts;
    }

    saveCustomShortcuts(slot1, slot2) {
        this.settings.customShortcuts = {
            slot1: {
                key: slot1.key || 'reading',
                label: slot1.label || '중·고등 내신 독해 & 비문학 풀기 →'
            },
            slot2: {
                key: slot2.key || 'dictionary',
                label: slot2.label || '영단어 사전 열기'
            }
        };
        this.saveSettings();
        return this.settings.customShortcuts;
    }

    // ------------------------------------------------------------------------
    // 단기 & 장기 학업 목표 관리
    // ------------------------------------------------------------------------
    getLearningGoals() {
        if (!this.settings.learningGoals) {
            const today = this.getTodayDateString();
            this.settings.learningGoals = {
                activeMode: 'short',
                shortTerm: {
                    presetId: 'st_week_100',
                    title: '이번 주 테마 어휘 100단어 완독',
                    targetDays: 7,
                    targetCount: 100,
                    startDate: today,
                    targetType: 'words'
                },
                longTerm: {
                    presetId: 'lt_neungryul_40',
                    title: '능률 VOCA 중등 고난도 40일 완강',
                    targetDays: 40,
                    targetCount: 1200,
                    startDate: today,
                    targetType: 'words'
                }
            };
        }
        return this.settings.learningGoals;
    }

    getActiveGoal() {
        const goals = this.getLearningGoals();
        const mode = goals.activeMode === 'long' ? 'longTerm' : 'shortTerm';
        return {
            mode: goals.activeMode,
            goal: goals[mode]
        };
    }

    setActiveGoalMode(mode) {
        if (!this.settings.learningGoals) this.getLearningGoals();
        this.settings.learningGoals.activeMode = (mode === 'long') ? 'long' : 'short';
        this.saveSettings();
        return this.settings.learningGoals.activeMode;
    }

    saveLearningGoal(mode, goalData) {
        if (!this.settings.learningGoals) this.getLearningGoals();
        const key = mode === 'long' ? 'longTerm' : 'shortTerm';
        this.settings.learningGoals[key] = {
            ...this.settings.learningGoals[key],
            ...goalData
        };
        this.saveSettings();
        return this.settings.learningGoals[key];
    }

    getGoalProgress(goal) {
        if (!goal) return { current: 0, target: 100, pct: 0, daysLeft: 0, totalDays: 7, isExpired: false, dailyPace: 0, daysPassed: 0, startDate: this.getTodayDateString() };

        const target = parseInt(goal.targetCount) || 100;
        const totalDays = parseInt(goal.targetDays) || 7;
        const startDate = goal.startDate || this.getTodayDateString();

        const start = new Date(startDate);
        const today = new Date(this.getTodayDateString());
        const diffTime = today.getTime() - start.getTime();
        const daysPassed = Math.max(0, Math.floor(diffTime / (1000 * 60 * 60 * 24)));
        const daysLeft = Math.max(0, totalDays - daysPassed);
        const isExpired = daysPassed > totalDays;

        let current = 0;
        if (goal.targetType === 'passages') {
            const records = this.readingRecords || {};
            // 요구사항 1: 독해는 지문을 읽고 실전문제를 풀어 채점 완료된 지문만 카운트
            current = Object.values(records).filter(r => r && typeof r.score === 'number').length;
        } else if (goal.targetType === 'mastered') {
            current = this.words.filter(w => !w.isReadingPassage && (w.stage || 1) >= 5).length;
        } else {
            // 요구사항 1: 단어는 단순 등록이 아니라 플래시카드-스마트퀴즈를 완료했거나 학습된 단어만 카운트
            current = this.words.filter(w => {
                if (w.isReadingPassage) return false;
                return (w.flashcardDone && w.quizDone) || w.studyCompleted === true || (w.stage && w.stage >= 2);
            }).length;
        }

        const pct = Math.min(100, Math.round((current / target) * 100));
        const remainingCount = Math.max(0, target - current);
        const dailyPace = daysLeft > 0 ? Math.ceil(remainingCount / daysLeft) : remainingCount;

        return {
            current,
            target,
            pct,
            daysPassed,
            daysLeft,
            totalDays,
            isExpired,
            dailyPace,
            startDate
        };
    }

    /**
     * 단어 플래시카드 학습 완료 마킹
     */
    markWordFlashcardDone(wordId, rating = 'good') {
        const w = this.words.find(item => item.id === wordId);
        if (!w) return null;
        w.flashcardDone = true;
        w.lastRating = rating;
        if (w.quizDone) {
            w.studyCompleted = true;
            w.completedAt = Date.now();
        }
        this.saveWords();
        return w;
    }

    /**
     * 단어 스마트 퀴즈 학습 완료 마킹
     */
    markWordQuizDone(wordId, isCorrect = true) {
        const w = this.words.find(item => item.id === wordId);
        if (!w) return null;
        w.quizDone = true;
        if (isCorrect && w.flashcardDone) {
            w.studyCompleted = true;
            w.completedAt = Date.now();
        }
        this.saveWords();
        return w;
    }

    /**
     * 일자별 학습 플래너 완료 체크 상태 검증 및 업데이트 (플래시카드+퀴즈 모두 완료 시 ✓ 부여)
     */
    checkAndMarkDayCompletion(dateStr) {
        if (!dateStr) dateStr = this.getTodayDateString();
        if (!this.plans[dateStr]) {
            this.plans[dateStr] = { restDay: false, memo: '', isDone: false };
        }
        const dayWords = this.getWordsByDate(dateStr).filter(w => !w.isReadingPassage);
        const dayPassages = this.getWordsByDate(dateStr).filter(w => w.isReadingPassage);

        const hasAnyItems = dayWords.length > 0 || dayPassages.length > 0;
        if (!hasAnyItems) return false;

        const wordsCompleted = dayWords.length === 0 || dayWords.every(w => (w.flashcardDone && w.quizDone) || w.studyCompleted);
        const passagesCompleted = dayPassages.length === 0 || dayPassages.every(p => {
            const r = this.readingRecords && this.readingRecords[p.readingPassageId];
            return (r && typeof r.score === 'number') || p.studyCompleted;
        });

        const allCompleted = wordsCompleted && passagesCompleted;

        this.plans[dateStr].flashcardDone = dayWords.some(w => w.flashcardDone);
        this.plans[dateStr].quizDone = dayWords.some(w => w.quizDone);
        this.plans[dateStr].isDone = allCompleted;
        if (allCompleted) {
            this.plans[dateStr].completedAt = this.plans[dateStr].completedAt || Date.now();
        }
        this.savePlans();
        return allCompleted;
    }

    /**
     * 학습 이력 로깅 (히스토리)
     */
    recordHistoryLog({ type, title, detail, score = null, total = null, accuracy = null }) {
        if (!this.history || !Array.isArray(this.history)) this.history = [];
        const now = new Date();
        const logItem = {
            id: 'hist_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
            timestamp: now.getTime(),
            date: this.getTodayDateString(),
            timeStr: now.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
            type, // 'flashcard', 'quiz', 'reading'
            title: title || '학습 세션',
            detail: detail || '',
            score,
            total,
            accuracy: accuracy !== null ? accuracy : (score !== null && total ? Math.round((score / total) * 100) : null)
        };
        this.history.unshift(logItem);
        if (this.history.length > 500) this.history = this.history.slice(0, 500);
        this.saveHistory();
        return logItem;
    }

    getHistoryLogs(filterType = 'all') {
        if (!this.history || !Array.isArray(this.history)) return [];
        if (filterType === 'all') return this.history;
        if (filterType === 'voca') return this.history.filter(h => h.type === 'flashcard' || h.type === 'quiz');
        if (filterType === 'reading') return this.history.filter(h => h.type === 'reading');
        return this.history.filter(h => h.type === filterType);
    }

    recordReadingPassageResult(passageId, score, passageTitle = '') {
        if (!this.readingRecords) this.readingRecords = {};
        this.readingRecords[passageId] = {
            score: score,
            timestamp: Date.now(),
            date: this.getTodayDateString(),
            isPassed: score >= 70,
            passageTitle: passageTitle
        };
        this.saveReadingRecords();

        // 계획표에 등록된 독해 항목도 완료 마킹
        const plannedItem = this.words.find(w => w.readingPassageId === passageId && w.isReadingPassage);
        if (plannedItem) {
            plannedItem.studyCompleted = true;
            plannedItem.completedAt = Date.now();
            this.saveWords();
            if (plannedItem.planDate) {
                this.checkAndMarkDayCompletion(plannedItem.planDate);
            }
        }

        // 학습 이력에 기록
        this.recordHistoryLog({
            type: 'reading',
            title: passageTitle ? `중등 내신 독해: ${passageTitle}` : '중등 내신 독해 실전 시험',
            detail: `실전 문항 풀이 완료 • 획득 점수: ${score}점 (${score >= 80 ? '우수' : '보통'})`,
            score: score,
            total: 100,
            accuracy: score
        });

        return this.readingRecords[passageId];
    }

    getReadingPassageCount() {
        return Object.keys(this.readingRecords || {}).length;
    }



    savePlans() {
        try {
            localStorage.setItem(STORAGE_KEYS.PLANS, JSON.stringify(this.plans));
        } catch (e) {
            console.error('Failed to save plans:', e);
        }
    }

    saveBookmarks() {
        try {
            localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(this.bookmarks));
        } catch (e) {
            console.error('Failed to save bookmarks:', e);
        }
    }

    saveHistory() {
        try {
            localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(this.history));
        } catch (e) {
            console.error('Failed to save history:', e);
        }
    }

    saveDailyMissions() {
        try {
            localStorage.setItem(STORAGE_KEYS.DAILY_MISSIONS, JSON.stringify(this.dailyMissions));
        } catch (e) {
            console.error('Failed to save daily missions:', e);
        }
    }

    // ------------------------------------------------------------------------
    // 원어민 데일리 미션 (Daily Native Mission) 등록 및 관리
    // ------------------------------------------------------------------------

    /**
     * 원어민 데일리 표현을 학습 완료하고 단어장 / 플래너 / 퀴즈 / 복습에 등록
     * @param {Object} expression 원어민 표현 객체 (콜로케이션 또는 구동사)
     */
    registerDailyNativeExpression(expression, targetDateStr = null) {
        if (!expression) return null;
        const today = this.getTodayDateString();
        const missionDate = targetDateStr || today;

        // 1. 데일리 미션 완료 기록
        if (!this.dailyMissions[missionDate]) {
            this.dailyMissions[missionDate] = {};
        }
        this.dailyMissions[missionDate][expression.id] = true;
        this.saveDailyMissions();

        // 2. 단어장 내 중복 확인 (이미 등록된 경우 오늘 복습 큐로 승격)
        const existingIndex = this.words.findIndex(
            w => w.word.toLowerCase() === expression.title.toLowerCase() || w.id === `expr-${expression.id}`
        );

        let targetWord;
        if (existingIndex !== -1) {
            targetWord = this.words[existingIndex];
            targetWord.planDate = today;
            targetWord.nextReviewDate = today;
            targetWord.lastReviewed = Date.now();
            targetWord.isDailyNative = true;
        } else {
            targetWord = {
                id: `expr-${expression.id}`,
                word: expression.title,
                meaning: expression.summary,
                partOfSpeech: expression.category === 'collocation' ? 'colloc.' : 'idiom',
                example: expression.exampleEn || expression.comparison?.[0]?.example || '',
                exampleMeaning: expression.exampleKo || '',
                level: 'high',
                tag: '원어민 데일리',
                planDate: today,
                createdAt: Date.now(),
                stage: 1, // 에빙하우스 1단계 등록
                nextReviewDate: today,
                lastReviewed: Date.now(),
                reviewCount: 1,
                correctCount: 1,
                wrongCount: 0,
                isWeak: false,
                isDailyNative: true
            };
            this.words.unshift(targetWord);
        }

        this.saveWords();
        return targetWord;
    }

    /**
     * 특정 날짜에 해당 표현을 학습 완료했는지 확인 (날짜 무관 전체 완료 여부도 함께 지원)
     */
    isDailyMissionCompleted(dateStr, exprId) {
        const d = dateStr || this.getTodayDateString();
        if (this.dailyMissions[d] && this.dailyMissions[d][exprId]) {
            return true;
        }
        return false;
    }

    /**
     * 특정 날짜 이전에 이미 학습 완료한 표현 ID 목록 반환 (매일 중복 없는 새 표현 추천용)
     */
    getPastCompletedDailyIds(currentDateStr) {
        const target = currentDateStr || this.getTodayDateString();
        const completed = new Set();
        Object.keys(this.dailyMissions).forEach(dateKey => {
            if (dateKey !== target && this.dailyMissions[dateKey]) {
                Object.keys(this.dailyMissions[dateKey]).forEach(id => {
                    if (id !== '_offset' && this.dailyMissions[dateKey][id] === true) {
                        completed.add(id);
                    }
                });
            }
        });
        return Array.from(completed);
    }

    /**
     * 해당 날짜의 데일리 추천 세트 오프셋 조회 및 다음 세트로 전환
     */
    getDailySetOffset(dateStr) {
        const d = dateStr || this.getTodayDateString();
        return (this.dailyMissions[d] && typeof this.dailyMissions[d]._offset === 'number')
            ? this.dailyMissions[d]._offset
            : 0;
    }

    nextDailyExpressionSet(dateStr) {
        const d = dateStr || this.getTodayDateString();
        if (!this.dailyMissions[d]) {
            this.dailyMissions[d] = {};
        }
        this.dailyMissions[d]._offset = (this.dailyMissions[d]._offset || 0) + 1;
        this.saveDailyMissions();
        return this.dailyMissions[d]._offset;
    }

    /**
     * 지금까지 학습 완료한 데일리 전용 표현 총 누적 개수
     */
    getTotalCompletedDailyCount() {
        const completed = new Set();
        Object.keys(this.dailyMissions).forEach(dateKey => {
            const map = this.dailyMissions[dateKey];
            if (map) {
                Object.keys(map).forEach(id => {
                    if (id !== '_offset' && map[id] === true) {
                        completed.add(id);
                    }
                });
            }
        });
        return completed.size;
    }

    // ------------------------------------------------------------------------
    // 단어 관리 (CRUD)
    // ------------------------------------------------------------------------

    addWord(wordObj) {
        const today = this.getTodayDateString();
        const newWord = {
            id: 'word-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
            word: wordObj.word.trim(),
            meaning: wordObj.meaning.trim(),
            partOfSpeech: window.posHelper ? window.posHelper.standardizePos(wordObj.partOfSpeech, wordObj.word, wordObj.meaning) : (wordObj.partOfSpeech || '[명]'),
            example: wordObj.example ? wordObj.example.trim() : '',
            exampleMeaning: wordObj.exampleMeaning ? wordObj.exampleMeaning.trim() : '',
            level: wordObj.level || 'middle',
            tag: wordObj.tag || '교재 단어',
            planDate: wordObj.planDate || today,
            createdAt: Date.now(),
            stage: 1,
            nextReviewDate: today,
            lastReviewed: null,
            reviewCount: 0,
            correctCount: 0,
            wrongCount: 0,
            isWeak: false
        };

        this.words.unshift(newWord);
        this.saveWords();
        return newWord;
    }

    addBulkWords(wordList, defaultPlanDate, defaultTag, defaultLevel) {
        const today = this.getTodayDateString();
        const planDate = defaultPlanDate || today;

        const newItems = wordList.map((item, idx) => ({
            id: 'word-' + Date.now() + '-' + idx + '-' + Math.random().toString(36).substr(2, 4),
            word: item.word.trim(),
            meaning: item.meaning.trim(),
            partOfSpeech: window.posHelper ? window.posHelper.standardizePos(item.partOfSpeech, item.word, item.meaning) : (item.partOfSpeech || '[명]'),
            example: item.example ? item.example.trim() : '',
            exampleMeaning: item.exampleMeaning ? item.exampleMeaning.trim() : '',
            level: item.level || defaultLevel || 'middle',
            tag: item.tag || defaultTag || '교재 캡처',
            planDate: planDate,
            createdAt: Date.now(),
            stage: 1,
            nextReviewDate: planDate,
            lastReviewed: null,
            reviewCount: 0,
            correctCount: 0,
            wrongCount: 0,
            isWeak: false
        }));

        this.words = [...newItems, ...this.words];
        this.saveWords();
        return newItems;
    }

    /**
     * 뜻 문자열(예: "[형] 질투하는, 시기하는")에서 표준 한국어 품사를 추출하는 헬퍼
     */
    extractPosFromMeaning(meaningStr, word = '') {
        return window.posHelper ? window.posHelper.standardizePos('', word, meaningStr) : '[명]';
    }

    /**
     * 능률 VOCA 중등 고난도 특정 DAY (예: "DAY 01") 단어를 지정한 날짜(planDateStr)의 계획표에 일괄 등록
     * @param {string} dayStr 예: "DAY 01"
     * @param {string} planDateStr 계획표 배정 일자 (YYYY-MM-DD)
     */
    registerNeungryulByDay(dayStr, planDateStr = null) {
        const dataPool = window.NEUNGRYUL_VOCA_2025_DATA || (typeof NEUNGRYUL_VOCA_2025_DATA !== 'undefined' ? NEUNGRYUL_VOCA_2025_DATA : []);
        const dayRows = dataPool.filter(r => r.DAY === dayStr);
        if (dayRows.length === 0) {
            return { addedCount: 0, day: dayStr, planDate: '' };
        }

        const targetDate = planDateStr || this.getTodayDateString();

        // 이미 해당 DAY가 등록되어 있다면 기존 항목을 제거하고 새 날짜로 갱신 등록
        this.words = this.words.filter(w => !(w.isNeungryul2025 && w.neungryulDay === dayStr));

        const newItems = dayRows.map(row => {
            const word = String(row['영단어'] || row['단어'] || '').trim();
            const meaning = String(row['뜻'] || '').trim();
            const pos = this.extractPosFromMeaning(meaning, word);
            const sInfo = (window.contextSentenceHelper && typeof window.contextSentenceHelper.getOrGenerateSentence === 'function')
                ? window.contextSentenceHelper.getOrGenerateSentence(word, meaning, pos)
                : null;
            return {
                id: `neungryul2025-${dayStr.replace(/\s+/g, '')}-${row['번호']}`,
                word: word,
                meaning: meaning,
                partOfSpeech: pos,
                example: sInfo ? sInfo.sentence : '',
                exampleMeaning: sInfo ? sInfo.translation : '',
                level: 'high',
                tag: `능률VOCA [2025] ${dayStr}`,
                neungryulDay: dayStr,
                neungryulNum: row['번호'],
                planDate: targetDate,
                createdAt: Date.now(),
                stage: 1,
                nextReviewDate: targetDate,
                lastReviewed: null,
                reviewCount: 0,
                correctCount: 0,
                wrongCount: 0,
                isWeak: false,
                isNeungryul2025: true
            };
        });

        this.words = [...newItems, ...this.words];
        this.saveWords();

        return {
            addedCount: newItems.length,
            day: dayStr,
            planDate: targetDate
        };
    }

    /**
     * 능률 VOCA 중등 고난도 특정 DAY (예: "DAY 01") 계획표에서 한꺼번에 삭제
     * @param {string} dayStr 예: "DAY 01"
     */
    deleteNeungryulByDay(dayStr) {
        const beforeCount = this.words.length;
        this.words = this.words.filter(w => {
            if (w.neungryulDay === dayStr) return false;
            if (w.tag && w.tag.includes(dayStr) && w.isNeungryul2025) return false;
            return true;
        });
        const deletedCount = beforeCount - this.words.length;
        if (deletedCount > 0) {
            this.saveWords();
        }
        return deletedCount;
    }

    /**
     * 능률 VOCA 중등 고난도 전체 단어 (DAY 01 ~ DAY 40, 1,200단어)를 시작일부터 하루 1 DAY씩 자동 배정 등록
     * @param {string} startDateStr 시작 일자 (YYYY-MM-DD)
     */
    registerAllNeungryulDays(startDateStr = null, selectedDaysOfWeek = null, startDayIndex = 0) {
        const dataPool = window.NEUNGRYUL_VOCA_2025_DATA || (typeof NEUNGRYUL_VOCA_2025_DATA !== 'undefined' ? NEUNGRYUL_VOCA_2025_DATA : []);
        if (dataPool.length === 0) {
            return { addedCount: 0, totalDays: 0, startDate: '', endDate: '' };
        }

        const start = startDateStr || this.getTodayDateString();
        const allUniqueDays = Array.from(new Set(dataPool.map(r => r.DAY))).sort();
        const targetDays = allUniqueDays.slice(Math.max(0, startDayIndex));

        // 기존 능률 VOCA 고난도 단어 계획 전체 삭제
        this.words = this.words.filter(w => !w.isNeungryul2025);

        const scheduledDates = this.calculateScheduledDates(start, targetDays.length, selectedDaysOfWeek);
        const allNewItems = [];

        targetDays.forEach((dayStr, idx) => {
            const planDate = scheduledDates[idx] || start;
            const rows = dataPool.filter(r => r.DAY === dayStr);
            rows.forEach(row => {
                allNewItems.push({
                    id: `neungryul2025-${dayStr.replace(/\s+/g, '')}-${row['번호']}`,
                    word: String(row['영단어']).trim(),
                    meaning: String(row['뜻']).trim(),
                    partOfSpeech: this.extractPosFromMeaning(String(row['뜻']), String(row['영단어'])),
                    example: '',
                    exampleMeaning: '',
                    level: 'high',
                    tag: `능률VOCA [고난도] ${dayStr}`,
                    neungryulDay: dayStr,
                    neungryulNum: row['번호'],
                    planDate: planDate,
                    createdAt: Date.now(),
                    stage: 1,
                    nextReviewDate: planDate,
                    lastReviewed: null,
                    reviewCount: 0,
                    correctCount: 0,
                    wrongCount: 0,
                    isWeak: false,
                    isNeungryul2025: true
                });
            });
        });

        this.words = [...allNewItems, ...this.words];
        this.saveWords();

        return {
            addedCount: allNewItems.length,
            totalDays: targetDays.length,
            startDayName: targetDays[0] || 'DAY 01',
            startDate: scheduledDates[0] || start,
            endDate: scheduledDates[scheduledDates.length - 1] || start
        };
    }
    /**
     * 등록된 능률 VOCA 중등 고난도 전체 계획 일괄 삭제
     */
    deleteAllNeungryulDays() {
        const beforeCount = this.words.length;
        this.words = this.words.filter(w => !w.isNeungryul2025);
        const deletedCount = beforeCount - this.words.length;
        if (deletedCount > 0) {
            this.saveWords();
        }
        return deletedCount;
    }

    /**
     * 능률 VOCA 어원편 중등 특정 DAY 단어를 지정한 날짜의 계획표에 등록
     */
    registerNeungryulEtymByDay(dayStr, planDateStr = null) {
        const dataPool = window.NEUNGRYUL_VOCA_ETYM_2025_DATA || (typeof NEUNGRYUL_VOCA_ETYM_2025_DATA !== 'undefined' ? NEUNGRYUL_VOCA_ETYM_2025_DATA : []);
        const dayRows = dataPool.filter(r => r.DAY === dayStr);
        if (dayRows.length === 0) {
            return { addedCount: 0, day: dayStr, planDate: '' };
        }

        const targetDate = planDateStr || this.getTodayDateString();

        // 기존 해당 DAY 단어 정리 후 갱신 등록
        this.words = this.words.filter(w => !(w.isNeungryulEtym2025 && w.neungryulDay === dayStr));

        const newItems = dayRows.map(row => {
            const word = String(row['영단어'] || row['단어'] || '').trim();
            const meaning = String(row['뜻'] || '').trim();
            const pos = this.extractPosFromMeaning(meaning, word);
            const sInfo = (window.contextSentenceHelper && typeof window.contextSentenceHelper.getOrGenerateSentence === 'function')
                ? window.contextSentenceHelper.getOrGenerateSentence(word, meaning, pos)
                : null;
            return {
                id: `neungryul-etym-${dayStr.replace(/\s+/g, '')}-${row['번호']}`,
                word: word,
                meaning: meaning,
                partOfSpeech: pos,
                example: sInfo ? sInfo.sentence : '',
                exampleMeaning: sInfo ? sInfo.translation : '',
                level: 'middle',
                tag: `능률VOCA [어원편] ${dayStr}`,
                neungryulDay: dayStr,
                neungryulNum: row['번호'],
                planDate: targetDate,
                createdAt: Date.now(),
                stage: 1,
                nextReviewDate: targetDate,
                lastReviewed: null,
                reviewCount: 0,
                correctCount: 0,
                wrongCount: 0,
                isWeak: false,
                isNeungryulEtym2025: true
            };
        });

        this.words = [...newItems, ...this.words];
        this.saveWords();

        return {
            addedCount: newItems.length,
            day: dayStr,
            planDate: targetDate
        };
    }

    /**
     * 능률 VOCA 어원편 중등 특정 DAY 계획표에서 삭제
     */
    deleteNeungryulEtymByDay(dayStr) {
        const beforeCount = this.words.length;
        this.words = this.words.filter(w => {
            if (w.neungryulDay === dayStr && w.isNeungryulEtym2025) return false;
            if (w.tag && w.tag.includes(dayStr) && w.isNeungryulEtym2025) return false;
            return true;
        });
        const deletedCount = beforeCount - this.words.length;
        if (deletedCount > 0) {
            this.saveWords();
        }
        return deletedCount;
    }

    /**
     * 능률 VOCA 어원편 중등 전체 단어 (DAY 01 ~ DAY 30, 765단어)를 시작일부터 하루 1 DAY씩 배정 등록
     */
    registerAllNeungryulEtymDays(startDateStr = null, selectedDaysOfWeek = null, startDayIndex = 0) {
        const dataPool = window.NEUNGRYUL_VOCA_ETYM_2025_DATA || (typeof NEUNGRYUL_VOCA_ETYM_2025_DATA !== 'undefined' ? NEUNGRYUL_VOCA_ETYM_2025_DATA : []);
        if (dataPool.length === 0) {
            return { addedCount: 0, totalDays: 0, startDate: '', endDate: '' };
        }

        const start = startDateStr || this.getTodayDateString();
        const allUniqueDays = Array.from(new Set(dataPool.map(r => r.DAY))).sort();
        const targetDays = allUniqueDays.slice(Math.max(0, startDayIndex));

        // 기존 능률 VOCA 어원편 단어 계획 전체 삭제
        this.words = this.words.filter(w => !w.isNeungryulEtym2025);

        const scheduledDates = this.calculateScheduledDates(start, targetDays.length, selectedDaysOfWeek);
        const allNewItems = [];

        targetDays.forEach((dayStr, idx) => {
            const planDate = scheduledDates[idx] || start;
            const rows = dataPool.filter(r => r.DAY === dayStr);
            rows.forEach(row => {
                allNewItems.push({
                    id: `neungryul-etym-${dayStr.replace(/\s+/g, '')}-${row['번호']}`,
                    word: String(row['영단어']).trim(),
                    meaning: String(row['뜻']).trim(),
                    partOfSpeech: this.extractPosFromMeaning(String(row['뜻']), String(row['영단어'])),
                    example: '',
                    exampleMeaning: '',
                    level: 'middle',
                    tag: `능률VOCA [어원편] ${dayStr}`,
                    neungryulDay: dayStr,
                    neungryulNum: row['번호'],
                    planDate: planDate,
                    createdAt: Date.now(),
                    stage: 1,
                    nextReviewDate: planDate,
                    lastReviewed: null,
                    reviewCount: 0,
                    correctCount: 0,
                    wrongCount: 0,
                    isWeak: false,
                    isNeungryulEtym2025: true
                });
            });
        });

        this.words = [...allNewItems, ...this.words];
        this.saveWords();

        return {
            addedCount: allNewItems.length,
            totalDays: targetDays.length,
            startDayName: targetDays[0] || 'DAY 01',
            startDate: scheduledDates[0] || start,
            endDate: scheduledDates[scheduledDates.length - 1] || start
        };
    }
    /**
     * 능률 VOCA 어원편 중등 전체 계획 일괄 삭제
     */
    deleteAllNeungryulEtymDays() {
        const beforeCount = this.words.length;
        this.words = this.words.filter(w => !w.isNeungryulEtym2025);
        const deletedCount = beforeCount - this.words.length;
        if (deletedCount > 0) {
            this.saveWords();
        }
        return deletedCount;
    }

    /**
     * 능률 VOCA 어원편 중등 DAY별 등록 상태 맵
     */
    getNeungryulEtymDayStatusMap() {
        const map = {};
        this.words.forEach(w => {
            if (w.isNeungryulEtym2025 && w.neungryulDay) {
                if (!map[w.neungryulDay]) {
                    map[w.neungryulDay] = { count: 0, planDate: w.planDate };
                }
                map[w.neungryulDay].count++;
            }
        });
        return map;
    }

    /**
     * 능률 VOCA 어원편 중등 등록 상태 요약
     */
    getNeungryulEtymStatus() {
        const items = this.words.filter(w => w.isNeungryulEtym2025);
        if (items.length === 0) {
            return { isRegistered: false, count: 0, totalDays: 0, registeredDays: [], startDate: '', endDate: '' };
        }
        const dates = Array.from(new Set(items.map(w => w.planDate))).sort();
        const days = Array.from(new Set(items.map(w => w.neungryulDay))).sort();
        return {
            isRegistered: true,
            count: items.length,
            totalDays: days.length,
            registeredDays: days,
            startDate: dates[0] || '',
            endDate: dates[dates.length - 1] || ''
        };
    }

    /**
     * DAY별 현재 계획표 등록 상태 맵 반환
     * 예: { "DAY 01": { count: 30, planDate: "2026-10-24" }, ... }
     */
    getNeungryulDayStatusMap() {
        const map = {};
        this.words.forEach(w => {
            if (w.isNeungryul2025 && w.neungryulDay) {
                if (!map[w.neungryulDay]) {
                    map[w.neungryulDay] = { count: 0, planDate: w.planDate };
                }
                map[w.neungryulDay].count++;
            }
        });
        return map;
    }

    /**
     * 능률 VOCA 중등 고난도가 현재 등록되어 있는지 여부 및 요약 정보 반환
     */
    getNeungryul2025Status() {
        const items = this.words.filter(w => w.isNeungryul2025);
        if (items.length === 0) {
            return { isRegistered: false, count: 0, totalDays: 0, registeredDays: [], startDate: '', endDate: '' };
        }
        const dates = Array.from(new Set(items.map(w => w.planDate))).sort();
        const registeredDays = Array.from(new Set(items.map(w => w.neungryulDay).filter(Boolean))).sort();
        return {
            isRegistered: true,
            count: items.length,
            totalDays: registeredDays.length,
            registeredDays,
            startDate: dates[0] || '',
            endDate: dates[dates.length - 1] || ''
        };
    }

    /**
     * 테마 단어장 특정 DAY 계획표 등록
     */
    registerCuratedByDay(collectionId, dayStr, planDateStr = null) {
        let pool = window.CURATED_WORDS_DATA || (typeof CURATED_WORDS_DATA !== 'undefined' ? CURATED_WORDS_DATA : []);
        if (this.customWords && this.customWords.length > 0) {
            pool = pool.concat(this.customWords);
        }
        const dayRows = pool.filter(r => r.collectionId === collectionId && r.DAY === dayStr);
        if (dayRows.length === 0) {
            return { addedCount: 0, day: dayStr, planDate: '' };
        }

        const targetDate = planDateStr || this.getTodayDateString();

        // 기존 동일 컬렉션 & DAY 삭제 후 갱신
        this.words = this.words.filter(w => !(w.curatedCollectionId === collectionId && w.curatedDay === dayStr));

        const newItems = dayRows.map(row => ({
            id: `curated-${collectionId}-${dayStr.replace(/\s+/g, '')}-${row['번호']}`,
            word: String(row['영단어']).trim(),
            meaning: String(row['뜻']).trim(),
            partOfSpeech: window.posHelper ? window.posHelper.standardizePos(row['품사'], row['영단어'], row['뜻']) : (row['품사'] || '[명]'),
            example: row['예문'] || '',
            exampleMeaning: row['예문해석'] || '',
            level: row['category'] === 'middle' ? 'middle' : 'high',
            tag: `${row['collectionTitle']} ${dayStr}`,
            curatedCollectionId: collectionId,
            curatedCollectionTitle: row['collectionTitle'],
            curatedDay: dayStr,
            curatedNum: row['번호'],
            planDate: targetDate,
            createdAt: Date.now(),
            stage: 1,
            nextReviewDate: targetDate,
            lastReviewed: null,
            reviewCount: 0,
            correctCount: 0,
            wrongCount: 0,
            isWeak: false,
            isCuratedVoca: true
        }));

        this.words = [...newItems, ...this.words];
        this.saveWords();

        return {
            addedCount: newItems.length,
            collectionTitle: dayRows[0]?.collectionTitle || '',
            day: dayStr,
            planDate: targetDate
        };
    }

    /**
     * 테마 단어장 특정 DAY 계획표에서 삭제
     */
    deleteCuratedByDay(collectionId, dayStr) {
        const beforeCount = this.words.length;
        this.words = this.words.filter(w => !(w.curatedCollectionId === collectionId && w.curatedDay === dayStr));
        const deletedCount = beforeCount - this.words.length;
        if (deletedCount > 0) {
            this.saveWords();
        }
        return deletedCount;
    }

    /**
     * 테마 단어장 전체(5개 DAY)를 시작일부터 하루 1 DAY씩 배정 등록
     */
    registerAllCuratedDays(collectionId, startDateStr = null, selectedDaysOfWeek = null, startDayIndex = 0) {
        let pool = window.CURATED_WORDS_DATA || (typeof CURATED_WORDS_DATA !== 'undefined' ? CURATED_WORDS_DATA : []);
        if (this.customWords && this.customWords.length > 0) {
            pool = pool.concat(this.customWords);
        }
        const colRows = pool.filter(r => r.collectionId === collectionId);
        if (colRows.length === 0) {
            return { addedCount: 0, totalDays: 0, collectionTitle: '', startDate: '', endDate: '' };
        }

        const start = startDateStr || this.getTodayDateString();
        const allUniqueDays = Array.from(new Set(colRows.map(r => r.DAY))).sort();
        const targetDays = allUniqueDays.slice(Math.max(0, startDayIndex));

        // 기존 해당 테마 계획 전체 삭제 후 재등록
        this.words = this.words.filter(w => w.curatedCollectionId !== collectionId);

        const scheduledDates = this.calculateScheduledDates(start, targetDays.length, selectedDaysOfWeek);
        const allNewItems = [];

        targetDays.forEach((dayStr, idx) => {
            const planDate = scheduledDates[idx] || start;
            const rows = colRows.filter(r => r.DAY === dayStr);
            rows.forEach(row => {
                allNewItems.push({
                    id: `curated-${collectionId}-${dayStr.replace(/\s+/g, '')}-${row['번호']}`,
                    word: String(row['영단어']).trim(),
                    meaning: String(row['뜻']).trim(),
                    partOfSpeech: window.posHelper ? window.posHelper.standardizePos(row['품사'], row['영단어'], row['뜻']) : (row['품사'] || '[명]'),
                    example: row['예문'] || '',
                    exampleMeaning: row['예문해석'] || '',
                    level: row['level'] || 'middle',
                    tag: `${row['collectionTitle']} ${dayStr}`,
                    curatedCollectionId: collectionId,
                    curatedCollectionTitle: row['collectionTitle'],
                    curatedDay: dayStr,
                    curatedNum: row['번호'],
                    planDate: planDate,
                    createdAt: Date.now(),
                    stage: 1,
                    nextReviewDate: planDate,
                    lastReviewed: null,
                    reviewCount: 0,
                    correctCount: 0,
                    wrongCount: 0,
                    isWeak: false,
                    isCuratedVoca: true
                });
            });
        });

        this.words = [...allNewItems, ...this.words];
        this.saveWords();

        return {
            addedCount: allNewItems.length,
            totalDays: targetDays.length,
            startDayName: targetDays[0] || 'DAY 01',
            collectionTitle: colRows[0]?.collectionTitle || '',
            startDate: scheduledDates[0] || start,
            endDate: scheduledDates[scheduledDates.length - 1] || start
        };
    }
    /**
     * 특정 테마 단어장 전체 계획 일괄 삭제
     */
    deleteAllCuratedDays(collectionId) {
        const beforeCount = this.words.length;
        this.words = this.words.filter(w => w.curatedCollectionId !== collectionId);
        const deletedCount = beforeCount - this.words.length;
        if (deletedCount > 0) {
            this.saveWords();
        }
        return deletedCount;
    }

    /**
     * 특정 테마 단어장의 DAY별 계획표 등록 상태 맵 반환
     */
    getCuratedDayStatusMap(collectionId) {
        const map = {};
        this.words.forEach(w => {
            if (w.curatedCollectionId === collectionId && w.curatedDay) {
                if (!map[w.curatedDay]) {
                    map[w.curatedDay] = { count: 0, planDate: w.planDate };
                }
                map[w.curatedDay].count++;
            }
        });
        return map;
    }

    /**
     * 특정 테마 단어장의 종합 등록 현황 반환
     */
    getCuratedCollectionStatus(collectionId) {
        const items = this.words.filter(w => w.curatedCollectionId === collectionId);
        if (items.length === 0) {
            return { isRegistered: false, count: 0, totalDays: 0, registeredDays: [], startDate: '', endDate: '' };
        }
        const dates = Array.from(new Set(items.map(w => w.planDate))).sort();
        const registeredDays = Array.from(new Set(items.map(w => w.curatedDay).filter(Boolean))).sort();
        return {
            isRegistered: true,
            count: items.length,
            totalDays: registeredDays.length,
            registeredDays,
            startDate: dates[0] || '',
            endDate: dates[dates.length - 1] || ''
        };
    }


    /**
     * 중등 내신 독해 단원 (예: 'unit-m1-1', 10개 지문)을 시작일부터 하루 1편씩 학습 계획표에 배정 등록
     * @param {string} unitId 단원 ID (예: 'unit-m1-1')
     * @param {string} startDateStr 시작 일자 (YYYY-MM-DD)
     */
    registerReadingUnit(unitId, startDateStr = null, selectedDaysOfWeek = null, startPassageIndex = 0) {
        const units = window.READING_UNITS || (typeof READING_UNITS !== 'undefined' ? READING_UNITS : []);
        const passages = window.READING_PASSAGES || (typeof READING_PASSAGES !== 'undefined' ? READING_PASSAGES : []);
        const targetUnit = units.find(u => u.unitId === unitId);
        const unitPassages = passages.filter(p => p.unitId === unitId);

        if (!targetUnit || unitPassages.length === 0) {
            return { addedPassages: 0, addedTotalItems: 0, unitTitle: '', startDate: '', endDate: '' };
        }

        const start = startDateStr || this.getTodayDateString();
        const targetPassages = unitPassages.slice(Math.max(0, startPassageIndex));

        // 기존 해당 단원 계획 삭제 후 재등록
        this.words = this.words.filter(w => !(w.readingUnitId === unitId));

        const scheduledDates = this.calculateScheduledDates(start, targetPassages.length, selectedDaysOfWeek);
        const newItems = [];

        targetPassages.forEach((p, idx) => {
            const planDate = scheduledDates[idx] || start;

            // 1. 지문 자체를 독해 과제로 계획표에 등록
            newItems.push({
                id: `reading-task-${p.id}`,
                word: p.title,
                meaning: `[내신독해] ${p.koreanTitle} (${p.categoryLabel})`,
                partOfSpeech: '독해',
                example: p.summary,
                exampleMeaning: `권장시간: ${p.estimatedTime} | ${p.wordCount}단어 | 실전 내신 4문항 포함`,
                level: (targetUnit.grade === '예비중' || targetUnit.grade === '중1' || targetUnit.grade === '중2') ? 'middle' : 'high',
                tag: `${targetUnit.unitTitle}`,
                isReadingPassage: true,
                readingUnitId: targetUnit.unitId,
                readingPassageId: p.id,
                passageTitle: p.title,
                passageKoTitle: p.koreanTitle,
                planDate: planDate,
                createdAt: Date.now(),
                stage: 1,
                nextReviewDate: planDate,
                lastReviewed: null,
                reviewCount: 0,
                correctCount: 0,
                wrongCount: 0,
                isWeak: false
            });

            // 2. 지문 속 핵심 어휘들도 함께 단어 학습에 포함
            if (p.keyVocabulary && Array.isArray(p.keyVocabulary)) {
                p.keyVocabulary.forEach(v => {
                    newItems.push({
                        id: `reading-vocab-${p.id}-${v.word.replace(/\s+/g, '')}`,
                        word: v.word,
                        meaning: v.meaning,
                        partOfSpeech: v.partOfSpeech || 'n.',
                        example: p.sentences[0]?.en || '',
                        exampleMeaning: p.sentences[0]?.ko || '',
                        level: (targetUnit.grade === '예비중' || targetUnit.grade === '중1' || targetUnit.grade === '중2') ? 'middle' : 'high',
                        tag: `${targetUnit.unitTitle} [어휘]`,
                        isReadingVocab: true,
                        readingUnitId: targetUnit.unitId,
                        readingPassageId: p.id,
                        planDate: planDate,
                        createdAt: Date.now(),
                        stage: 1,
                        nextReviewDate: planDate,
                        lastReviewed: null,
                        reviewCount: 0,
                        correctCount: 0,
                        wrongCount: 0,
                        isWeak: false
                    });
                });
            }
        });

        this.words = [...newItems, ...this.words];
        this.saveWords();

        return {
            addedPassages: targetPassages.length,
            addedTotalItems: newItems.length,
            unitTitle: targetUnit.unitTitle,
            startPassageIndex: startPassageIndex,
            startPassageTitle: targetPassages[0]?.title || '',
            startDate: scheduledDates[0] || start,
            endDate: scheduledDates[scheduledDates.length - 1] || start
        };
    }
    /**
     * 특정 중등 독해 단원 계획표에서 일괄 삭제
     * @param {string} unitId
     */
    deleteReadingUnit(unitId) {
        const beforeCount = this.words.length;
        this.words = this.words.filter(w => {
            if (w.readingUnitId === unitId) return false;
            return true;
        });
        const deletedCount = beforeCount - this.words.length;
        if (deletedCount > 0) {
            this.saveWords();
        }
        return deletedCount;
    }

    /**
     * 모든 독해 단원의 계획표 등록 현황 조회
     */
    getReadingUnitStatusMap() {
        const units = window.READING_UNITS || (typeof READING_UNITS !== 'undefined' ? READING_UNITS : []);
        const map = {};
        units.forEach(u => {
            const items = this.words.filter(w => w.readingUnitId === u.unitId);
            const passages = items.filter(w => w.isReadingPassage);
            if (passages.length > 0) {
                const dates = Array.from(new Set(passages.map(w => w.planDate))).sort();
                map[u.unitId] = {
                    isRegistered: true,
                    passageCount: passages.length,
                    totalItemsCount: items.length,
                    startDate: dates[0] || '',
                    endDate: dates[dates.length - 1] || ''
                };
            } else {
                map[u.unitId] = {
                    isRegistered: false,
                    passageCount: 0,
                    totalItemsCount: 0,
                    startDate: '',
                    endDate: ''
                };
            }
        });
        return map;
    }

    updateWord(id, updatedFields) {
        const index = this.words.findIndex(w => w.id === id);
        if (index !== -1) {
            this.words[index] = { ...this.words[index], ...updatedFields };
            this.saveWords();
            return this.words[index];
        }
        return null;
    }

    deleteWord(id) {
        this.words = this.words.filter(w => w.id !== id);
        this.saveWords();
    }

    // ------------------------------------------------------------------------
    // 에빙하우스 망각곡선 (SRS) 복습 엔진
    // ------------------------------------------------------------------------

    /**
     * 단어 복습 평가 기록 (알아요 / 애매해요 / 몰라요)
     */
    recordReviewResult(id, rating) {
        const word = this.words.find(w => w.id === id);
        if (!word) return null;

        const today = this.getTodayDateString();
        word.lastReviewed = Date.now();
        word.reviewCount = (word.reviewCount || 0) + 1;

        if (rating === 'easy') {
            word.correctCount = (word.correctCount || 0) + 1;
            word.stage = Math.min(5, (word.stage || 1) + 1);
            if (word.correctCount >= 2 && word.stage >= 3) {
                word.isWeak = false;
            }
        } else if (rating === 'good') {
            word.correctCount = (word.correctCount || 0) + 1;
        } else {
            word.wrongCount = (word.wrongCount || 0) + 1;
            word.stage = 1;
            word.isWeak = true;
        }

        const daysToAdd = SRS_INTERVALS[word.stage] || 1;
        word.nextReviewDate = this.addDays(today, daysToAdd);

        this.saveWords();
        return word;
    }

    getDueReviewWords() {
        const today = this.getTodayDateString();
        return this.words.filter(w => {
            if (!w.nextReviewDate) return true;
            return w.nextReviewDate <= today;
        });
    }

    getWeakWords() {
        return this.words.filter(w => w.isWeak || (w.wrongCount > 0 && w.wrongCount >= w.correctCount));
    }

    /**
     * [단어사전 연동] "단어 까먹었을 때" 원클릭 스마트 복습 복구
     * 망각곡선 1단계(Stage 1)로 리셋하고 오늘의 복습 큐 및 퀴즈 1순위에 즉시 배정
     */
    markWordAsForgotten(id) {
        const word = this.words.find(w => w.id === id);
        if (!word) return null;

        const today = this.getTodayDateString();
        word.stage = 1;
        word.isWeak = true;
        word.wrongCount = (word.wrongCount || 0) + 1;
        word.lastForgotten = Date.now();
        word.nextReviewDate = today; // 오늘 복습 큐에 즉시 배정
        word.planDate = today;

        this.saveWords();
        return word;
    }

    /**
     * 단어 암기 메모(Mnemonics) 저장
     */
    setWordMemo(id, memoText) {
        const word = this.words.find(w => w.id === id);
        if (!word) return null;

        word.memo = (memoText || '').trim();
        this.saveWords();
        return word;
    }

    /**
     * 단어 북마크(중요 단어) 토글
     */
    toggleWordStar(id) {
        const word = this.words.find(w => w.id === id);
        if (!word) return false;

        word.starred = !word.starred;
        this.saveWords();
        return word.starred;
    }

    // ------------------------------------------------------------------------
    // 플래너 및 일정 관리 (Planner Management)
    // ------------------------------------------------------------------------

    getWordsByDate(dateStr) {
        return this.words.filter(w => w.planDate === dateStr);
    }

    moveWordsToDate(wordIds, targetDateStr) {
        let count = 0;
        this.words.forEach(w => {
            if (wordIds.includes(w.id)) {
                w.planDate = targetDateStr;
                count++;
            }
        });
        if (count > 0) {
            this.saveWords();
        }
        return count;
    }

    setRestDay(dateStr, isRest) {
        if (!this.plans[dateStr]) {
            this.plans[dateStr] = {};
        }
        this.plans[dateStr].restDay = isRest;

        if (isRest) {
            const nextDay = this.addDays(dateStr, 1);
            const scheduledWords = this.getWordsByDate(dateStr);
            scheduledWords.forEach(w => {
                w.planDate = nextDay;
            });
        }

        this.savePlans();
        this.saveWords();
    }

    isRestDay(dateStr) {
        return !!(this.plans[dateStr] && this.plans[dateStr].restDay);
    }

    toggleBookmark(expressionId) {
        const idx = this.bookmarks.indexOf(expressionId);
        if (idx !== -1) {
            this.bookmarks.splice(idx, 1);
        } else {
            this.bookmarks.push(expressionId);
        }
        this.saveBookmarks();
        return this.bookmarks.includes(expressionId);
    }

    getStatistics() {
        const total = this.words.length;
        const stages = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        let totalCorrect = 0;
        let totalReviews = 0;

        this.words.forEach(w => {
            const s = w.stage || 1;
            stages[s] = (stages[s] || 0) + 1;
            totalCorrect += (w.correctCount || 0);
            totalReviews += (w.reviewCount || 0);
        });

        const mastered = stages[5];
        const weakCount = this.getWeakWords().length;
        const dueCount = this.getDueReviewWords().length;
        const accuracy = totalReviews > 0 ? Math.round((totalCorrect / totalReviews) * 100) : 0;

        return {
            total,
            stages,
            mastered,
            weakCount,
            dueCount,
            accuracy,
            dailyTarget: this.settings.dailyTarget
        };
    }

    exportBackup() {
        const data = {
            exportDate: new Date().toISOString(),
            words: this.words,
            settings: this.settings,
            plans: this.plans,
            bookmarks: this.bookmarks,
            history: this.history,
            dailyMissions: this.dailyMissions,
            readingRecords: this.readingRecords
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `veritas_english_backup_${this.getTodayDateString()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    importBackup(jsonString) {
        try {
            const parsed = JSON.parse(jsonString);
            if (parsed.words && Array.isArray(parsed.words)) {
                this.words = parsed.words;
                if (parsed.settings) this.settings = parsed.settings;
                if (parsed.plans) this.plans = parsed.plans;
                if (parsed.bookmarks) this.bookmarks = parsed.bookmarks;
                if (parsed.history) this.history = parsed.history;
                if (parsed.dailyMissions) this.dailyMissions = parsed.dailyMissions;
                if (parsed.readingRecords) this.readingRecords = parsed.readingRecords;

                this.saveWords();
                this.saveReadingRecords();
                this.saveSettings();
                this.savePlans();
                this.saveBookmarks();
                this.saveHistory();
                this.saveDailyMissions();
                return true;
            }
        } catch (e) {
            console.error('Import error:', e);
        }
        return false;
    }

    // ------------------------------------------------------------------------
    // 유틸리티 함수
    // ------------------------------------------------------------------------
    getTodayDateString() {
        const d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    /**
     * 요일 선택 및 휴일 체크를 반영한 날짜 리스트 계산
     * @param {string} startDateStr 시작일 (YYYY-MM-DD)
     * @param {number} totalItemsCount 배정할 항목 수 (DAY 수 또는 지문 수)
     * @param {Array<number>|null} selectedDaysOfWeek 선택된 요일 배열 [0..6] (0:일, 1:월, ..., 6:토). null이거나 7개면 매일매일
     * @returns {Array<string>} 배정된 일자 배열 (YYYY-MM-DD)
     */
    calculateScheduledDates(startDateStr, totalItemsCount, selectedDaysOfWeek = null) {
        if (!totalItemsCount || totalItemsCount <= 0) return [];
        const startStr = startDateStr || this.getTodayDateString();
        const hasDayFilter = Array.isArray(selectedDaysOfWeek) && selectedDaysOfWeek.length > 0 && selectedDaysOfWeek.length < 7;
        const dates = [];
        
        const [y, m, d] = startStr.split('-').map(Number);
        let cursor = new Date(y, m - 1, d);

        let safetyCounter = 0;
        while (dates.length < totalItemsCount && safetyCounter < 1000) {
            safetyCounter++;
            const dayOfWeek = cursor.getDay();
            const curYear = cursor.getFullYear();
            const curMonth = String(cursor.getMonth() + 1).padStart(2, '0');
            const curDate = String(cursor.getDate()).padStart(2, '0');
            const curStr = `${curYear}-${curMonth}-${curDate}`;

            const isAllowedDay = !hasDayFilter || selectedDaysOfWeek.includes(dayOfWeek);
            const isRest = this.isRestDay(curStr);

            if (isAllowedDay && !isRest) {
                dates.push(curStr);
            }
            cursor.setDate(cursor.getDate() + 1);
        }
        return dates;
    }

    addDays(dateStr, days) {
        const [y, m, d] = dateStr.split('-').map(Number);
        const date = new Date(y, m - 1, d);
        date.setDate(date.getDate() + days);
        const resYear = date.getFullYear();
        const resMonth = String(date.getMonth() + 1).padStart(2, '0');
        const resDay = String(date.getDate()).padStart(2, '0');
        return `${resYear}-${resMonth}-${resDay}`;
    }
}

// 전역 인스턴스
window.storage = new StorageManager();
