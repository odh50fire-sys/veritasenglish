/**
 * Veritas English - 어시스턴트(Study Copilot) 데이터베이스
 * 1. 전국 시도별 대표 중학교 / 고등학교 검색 데이터셋
 * 2. 출판사별 중·고등 영어 정규 교과서 목록
 * 3. 국내 베스트셀러 시중 영어 교재 100선 카탈로그 (마더텅, 자이스토리, EBS, 쎄듀, 능률, 비상 등)
 */

// 1. 전국 중학교·고등학교 검색 데이터셋 (대표 학교 및 공통 검색 패턴)
const KOREAN_SCHOOLS_DATABASE = [
    // 서울
    { name: "대치중학교", type: "middle", region: "서울 강남구" },
    { name: "도곡중학교", type: "middle", region: "서울 강남구" },
    { name: "역삼중학교", type: "middle", region: "서울 강남구" },
    { name: "단국대학교사범대학부속중학교", type: "middle", region: "서울 강남구" },
    { name: "압구정중학교", type: "middle", region: "서울 강남구" },
    { name: "신사중학교", type: "middle", region: "서울 강남구" },
    { name: "서운중학교", type: "middle", region: "서울 서초구" },
    { name: "원촌중학교", type: "middle", region: "서울 서초구" },
    { name: "반포중학교", type: "middle", region: "서울 서초구" },
    { name: "세화여자중학교", type: "middle", region: "서울 서초구" },
    { name: "목운중학교", type: "middle", region: "서울 양천구" },
    { name: "목일중학교", type: "middle", region: "서울 양천구" },
    { name: "신목중학교", type: "middle", region: "서울 양천구" },
    { name: "월촌중학교", type: "middle", region: "서울 양천구" },
    { name: "잠실중학교", type: "middle", region: "서울 송파구" },
    { name: "송파중학교", type: "middle", region: "서울 송파구" },
    { name: "보성중학교", type: "middle", region: "서울 송파구" },
    { name: "중계중학교", type: "middle", region: "서울 노원구" },
    { name: "을지중학교", type: "middle", region: "서울 노원구" },
    { name: "불암중학교", type: "middle", region: "서울 노원구" },
    { name: "상계중학교", type: "middle", region: "서울 노원구" },
    { name: "휘문고등학교", type: "high", region: "서울 강남구" },
    { name: "중동고등학교", type: "high", region: "서울 강남구" },
    { name: "단국대학교사범대학부속고등학교", type: "high", region: "서울 강남구" },
    { name: "경기고등학교", type: "high", region: "서울 강남구" },
    { name: "숙명여자고등학교", type: "high", region: "서울 강남구" },
    { name: "진선여자고등학교", type: "high", region: "서울 강남구" },
    { name: "서울고등학교", type: "high", region: "서울 서초구" },
    { name: "상문고등학교", type: "high", region: "서울 서초구" },
    { name: "세화고등학교", type: "high", region: "서울 서초구" },
    { name: "현대고등학교", type: "high", region: "서울 강남구" },
    { name: "강서고등학교", type: "high", region: "서울 양천구" },
    { name: "양정고등학교", type: "high", region: "서울 양천구" },
    { name: "목동고등학교", type: "high", region: "서울 양천구" },
    { name: "대원외국어고등학교", type: "high", region: "서울 광진구" },
    { name: "한영외국어고등학교", type: "high", region: "서울 강동구" },
    { name: "명덕외국어고등학교", type: "high", region: "서울 강서구" },
    { name: "하나고등학교", type: "high", region: "서울 은평구" },
    
    // 경기 & 인천
    { name: "내정중학교", type: "middle", region: "경기 성남 분당구" },
    { name: "수내중학교", type: "middle", region: "경기 성남 분당구" },
    { name: "샛별중학교", type: "middle", region: "경기 성남 분당구" },
    { name: "이매중학교", type: "middle", region: "경기 성남 분당구" },
    { name: "정자중학교", type: "middle", region: "경기 성남 분당구" },
    { name: "보평중학교", type: "middle", region: "경기 성남 분당구" },
    { name: "오마중학교", type: "middle", region: "경기 고양 일산서구" },
    { name: "신일중학교", type: "middle", region: "경기 고양 일산서구" },
    { name: "정발중학교", type: "middle", region: "경기 고양 일산동구" },
    { name: "귀인중학교", type: "middle", region: "경기 안양 동안구" },
    { name: "평촌중학교", type: "middle", region: "경기 안양 동안구" },
    { name: "범계중학교", type: "middle", region: "경기 안양 동안구" },
    { name: "송도중학교", type: "middle", region: "인천 연수구" },
    { name: "신송중학교", type: "middle", region: "인천 연수구" },
    { name: "해송중학교", type: "middle", region: "인천 연수구" },
    { name: "낙생고등학교", type: "high", region: "경기 성남 분당구" },
    { name: "서현고등학교", type: "high", region: "경기 성남 분당구" },
    { name: "분당대진고등학교", type: "high", region: "경기 성남 분당구" },
    { name: "백석고등학교", type: "high", region: "경기 고양 일산동구" },
    { name: "안양외국어고등학교", type: "high", region: "경기 안양 만안구" },
    { name: "경기외국어고등학교", type: "high", region: "경기 의왕시" },
    { name: "인천포스코고등학교", type: "high", region: "인천 연수구" },

    // 부산, 대구, 대전, 광주, 울산, 세종 등 주요 광역시
    { name: "해운대중학교", type: "middle", region: "부산 해운대구" },
    { name: "센텀중학교", type: "middle", region: "부산 해운대구" },
    { name: "동도중학교", type: "middle", region: "대구 수성구" },
    { name: "정화중학교", type: "middle", region: "대구 수성구" },
    { name: "문정중학교", type: "middle", region: "대전 서구" },
    { name: "탄방중학교", type: "middle", region: "대전 서구" },
    { name: "봉선중학교", type: "middle", region: "광주 남구" },
    { name: "새롬중학교", type: "middle", region: "세종시" },
    { name: "아름중학교", type: "middle", region: "세종시" },
    { name: "해운대고등학교", type: "high", region: "부산 해운대구" },
    { name: "경신고등학교", type: "high", region: "대구 수성구" },
    { name: "대륜고등학교", type: "high", region: "대구 수성구" },
    { name: "대덕고등학교", type: "high", region: "대전 유성구" },
    { name: "광주서석고등학교", type: "high", region: "광주 남구" },
    { name: "세종고등학교", type: "high", region: "세종시" }
];

// 2. 출판사별 중·고등 정규 영어 교과서 목록
const KOREAN_TEXTBOOK_PUBLISHERS = {
    middle: [
        { id: "tb_m_donga_yoon", publisher: "동아출판", author: "윤정미", title: "동아(윤정미)" },
        { id: "tb_m_donga_lee", publisher: "동아출판", author: "이병민", title: "동아(이병민)" },
        { id: "tb_m_chunjae_lee", publisher: "천재교육", author: "이재영", title: "천재(이재영)" },
        { id: "tb_m_chunjae_jung", publisher: "천재교육", author: "정사열", title: "천재(정사열)" },
        { id: "tb_m_ybm_song", publisher: "YBM", author: "송미정", title: "YBM(송미정)" },
        { id: "tb_m_ybm_park", publisher: "YBM", author: "박준언", title: "YBM(박준언)" },
        { id: "tb_m_miraen_choi", publisher: "미래엔", author: "최연희", title: "미래엔(최연희)" },
        { id: "tb_m_visang_kim", publisher: "비상교육", author: "김진완", title: "비상(김진완)" },
        { id: "tb_m_ne_kim", publisher: "NE능률", author: "김성곤", title: "능률(김성곤)" },
        { id: "tb_m_ne_yang", publisher: "NE능률", author: "양현권", title: "능률(양현권)" },
        { id: "tb_m_jihak_shin", publisher: "지학사", author: "신정현", title: "지학사(신정현)" }
    ],
    high: [
        { id: "tb_h_ne_kim", publisher: "NE능률", author: "김성곤", title: "능률(김성곤) 공통영어 / 영어I·II" },
        { id: "tb_h_ne_yang", publisher: "NE능률", author: "양현권", title: "능률(양현권) 영어I·II" },
        { id: "tb_h_ybm_park", publisher: "YBM", author: "박준언", title: "YBM(박준언) 영어I·II" },
        { id: "tb_h_ybm_han", publisher: "YBM", author: "한상호", title: "YBM(한상호) 영어I·II" },
        { id: "tb_h_chunjae_lee", publisher: "천재교육", author: "이재영", title: "천재(이재영) 영어I·II" },
        { id: "tb_h_visang_hong", publisher: "비상교육", author: "홍민표", title: "비상(홍민표) 영어I·II" },
        { id: "tb_h_donga_kwon", publisher: "동아출판", author: "권혁승", title: "동아(권혁승) 영어I·II" },
        { id: "tb_h_miraen_choi", publisher: "미래엔", author: "최연희", title: "미래엔(최연희) 영어I·II" },
        { id: "tb_h_ebs_olimpus", publisher: "EBS", author: "EBS기획", title: "EBS 올림포스 영어독해" },
        { id: "tb_h_ebs_csat_special", publisher: "EBS", author: "EBS수능연계", title: "EBS 수능특강 영어 / 영어독해연습" }
    ]
};

// 3. 국내 베스트셀러 시중 영어 교재 100선 카탈로그 (마더텅, 자이스토리, EBS, 쎄듀, 능률, 비상 등)
const POPULAR_ENGLISH_TEXTBOOKS = [
    // [문법/어법 베스트셀러]
    {
        id: "book_mother_3800_m1",
        title: "마더텅 중학영문법 3800제 1학년",
        publisher: "마더텅",
        category: "grammar",
        gradeTag: "중1",
        totalUnits: 14,
        unitType: "chapter",
        defaultDaily: 1,
        totalPages: 360,
        coverEmoji: "📘",
        desc: "전국 중학교 최다 채택 1위 영문법 문제집, 14개 챕터 구성"
    },
    {
        id: "book_mother_3800_m2",
        title: "마더텅 중학영문법 3800제 2학년",
        publisher: "마더텅",
        category: "grammar",
        gradeTag: "중2",
        totalUnits: 16,
        unitType: "chapter",
        defaultDaily: 1,
        totalPages: 412,
        coverEmoji: "📘",
        desc: "중2 내신 필수 문법 총정리 및 서술형 대비 3800제"
    },
    {
        id: "book_mother_3800_m3",
        title: "마더텅 중학영문법 3800제 3학년",
        publisher: "마더텅",
        category: "grammar",
        gradeTag: "중3",
        totalUnits: 16,
        unitType: "chapter",
        defaultDaily: 1,
        totalPages: 440,
        coverEmoji: "📘",
        desc: "중3 내신 만점 및 고등 영어 연계 핵심 영문법 마스터"
    },
    {
        id: "book_cedu_grammar_end_start",
        title: "어법끝 Start (실전 어법 기초)",
        publisher: "쎄듀(CEDU)",
        category: "grammar",
        gradeTag: "예비고·고1",
        totalUnits: 25,
        unitType: "unit",
        defaultDaily: 1,
        totalPages: 240,
        coverEmoji: "📗",
        desc: "수능 및 고등 내신 어법 문제의 원리를 꿰뚫는 필수 기본서"
    },
    {
        id: "book_cedu_grammar_end_master",
        title: "어법끝 실전 마스터 (수능 1등급)",
        publisher: "쎄듀(CEDU)",
        category: "grammar",
        gradeTag: "고2·고3",
        totalUnits: 30,
        unitType: "unit",
        defaultDaily: 1,
        totalPages: 280,
        coverEmoji: "📗",
        desc: "평가원 및 수능 어법 킬러 문항 100% 정복 실전 대비서"
    },
    {
        id: "book_ne_grammar_zone_basic",
        title: "그래머존 Grammar Zone 기본편",
        publisher: "NE능률",
        category: "grammar",
        gradeTag: "중3·고1",
        totalUnits: 40,
        unitType: "unit",
        defaultDaily: 1,
        totalPages: 320,
        coverEmoji: "📙",
        desc: "체계적인 문법 개념 학습과 풍부한 예문으로 문법 완성"
    },

    // [구문/독해 베스트셀러]
    {
        id: "book_cedu_1001_basic",
        title: "천일문 기본편 (Basic 1001 Sentences)",
        publisher: "쎄듀(CEDU)",
        category: "reading",
        gradeTag: "중3·고1",
        totalUnits: 100,
        unitType: "unit",
        defaultDaily: 3,
        totalPages: 310,
        coverEmoji: "📕",
        desc: "대한민국 대표 구문 독해 기본서, 1001개 필수 예문 해석 훈련"
    },
    {
        id: "book_cedu_1001_core",
        title: "천일문 핵심편 (Core 500 Sentences)",
        publisher: "쎄듀(CEDU)",
        category: "reading",
        gradeTag: "고1·고2",
        totalUnits: 50,
        unitType: "unit",
        defaultDaily: 2,
        totalPages: 260,
        coverEmoji: "📕",
        desc: "고난도 수능 및 모의고사 빈출 구문 집중 훈련서"
    },
    {
        id: "book_cedu_1001_master",
        title: "천일문 완성편 (Master 500 Sentences)",
        publisher: "쎄듀(CEDU)",
        category: "reading",
        gradeTag: "고2·고3",
        totalUnits: 50,
        unitType: "unit",
        defaultDaily: 2,
        totalPages: 290,
        coverEmoji: "📕",
        desc: "수능 1등급 및 최상위권 복합 구문 완벽 정복"
    },
    {
        id: "book_xystory_reading_basic",
        title: "자이스토리 영어 독해 기본",
        publisher: "수경출판사",
        category: "reading",
        gradeTag: "고1",
        totalUnits: 18,
        unitType: "chapter",
        defaultDaily: 1,
        totalPages: 384,
        coverEmoji: "📑",
        desc: "고1 전국연합 학력평가 기출 유형별 독해 마스터"
    },
    {
        id: "book_xystory_reading_complete",
        title: "자이스토리 영어 독해 완성",
        publisher: "수경출판사",
        category: "reading",
        gradeTag: "고2",
        totalUnits: 20,
        unitType: "chapter",
        defaultDaily: 1,
        totalPages: 420,
        coverEmoji: "📑",
        desc: "고2 학력평가 기출 완벽 분석 및 고난도 빈칸/순서 정복"
    },
    {
        id: "book_xystory_reading_sat",
        title: "자이스토리 수능 영어 독해 실전",
        publisher: "수경출판사",
        category: "reading",
        gradeTag: "고3·N수",
        totalUnits: 22,
        unitType: "chapter",
        defaultDaily: 1,
        totalPages: 480,
        coverEmoji: "📑",
        desc: "수능 및 6/9월 평가원 기출 전 문항 완벽 수록 및 킬러 해법"
    },
    {
        id: "book_ne_fast_reading_basic",
        title: "빠른독해 바른독해 기초조사편",
        publisher: "NE능률",
        category: "reading",
        gradeTag: "예비고·고1",
        totalUnits: 16,
        unitType: "chapter",
        defaultDaily: 1,
        totalPages: 216,
        coverEmoji: "📖",
        desc: "빠바 대표 구문 독해 시리즈, 수능 독해의 기초를 다지는 코스"
    },
    {
        id: "book_ne_fast_reading_syntax",
        title: "빠른독해 바른독해 구문독해편",
        publisher: "NE능률",
        category: "reading",
        gradeTag: "고1·고2",
        totalUnits: 16,
        unitType: "chapter",
        defaultDaily: 1,
        totalPages: 232,
        coverEmoji: "📖",
        desc: "독해에 바로 적용되는 핵심 구문 16개 테마 총정리"
    },
    {
        id: "book_visang_readers_bank_5",
        title: "리더스 뱅크 Level 5 (중2~중3)",
        publisher: "비상교육",
        category: "reading",
        gradeTag: "중등",
        totalUnits: 30,
        unitType: "unit",
        defaultDaily: 1,
        totalPages: 160,
        coverEmoji: "📚",
        desc: "흥미로운 최신 시사/문화 지문으로 중학 내신 독해 완성"
    },
    {
        id: "book_visang_readers_bank_6",
        title: "리더스 뱅크 Level 6 (중3~예비고)",
        publisher: "비상교육",
        category: "reading",
        gradeTag: "중3·예비고",
        totalUnits: 30,
        unitType: "unit",
        defaultDaily: 1,
        totalPages: 168,
        coverEmoji: "📚",
        desc: "중등 최상위권 및 고등 입문 수준의 영어 독해력 빌드업"
    },

    // [EBS 수능 연계 시리즈]
    {
        id: "book_ebs_csat_special_2026",
        title: "EBS 수능특강 영어 (2026 수능 연계)",
        publisher: "한국교육방송공사(EBS)",
        category: "sat",
        gradeTag: "고3·N수",
        totalUnits: 30,
        unitType: "강",
        defaultDaily: 1,
        totalPages: 288,
        coverEmoji: "🎓",
        desc: "수능 연계 출제 1순위 대표 교재, 유형편 + 테스트편"
    },
    {
        id: "book_ebs_csat_reading_2026",
        title: "EBS 수능특강 영어독해연습 (2026 연계)",
        publisher: "한국교육방송공사(EBS)",
        category: "sat",
        gradeTag: "고3·N수",
        totalUnits: 12,
        unitType: "강",
        defaultDaily: 1,
        totalPages: 264,
        coverEmoji: "🎓",
        desc: "수능 킬러/준킬러 지문 대비 심화 영어 독해 연습 교재"
    },
    {
        id: "book_ebs_csat_complete_2026",
        title: "EBS 수능완성 영어 (2026 수능 연계)",
        publisher: "한국교육방송공사(EBS)",
        category: "sat",
        gradeTag: "고3·N수",
        totalUnits: 20,
        unitType: "강",
        defaultDaily: 1,
        totalPages: 240,
        coverEmoji: "🎓",
        desc: "실전 모의고사 5회분 수록, 수능 직전 최종 실전 마무리"
    },

    // [중등 내신 기출 및 서술형]
    {
        id: "book_100_100_middle_eng",
        title: "백발백중 중등 영어 기출문제집",
        publisher: "원앤원",
        category: "school_task",
        gradeTag: "중1~중3",
        totalUnits: 8,
        unitType: "과",
        defaultDaily: 1,
        totalPages: 200,
        coverEmoji: "💯",
        desc: "전국 중학교 기출 족보 및 서술형 100% 대비 내신 특화서"
    },
    {
        id: "book_internal_exam_custom",
        title: "학교 영어 유인물 / 학습지 / 서술형 프린트",
        publisher: "내 학교",
        category: "school_task",
        gradeTag: "전학년",
        totalUnits: 10,
        unitType: "회차",
        defaultDaily: 1,
        totalPages: 40,
        coverEmoji: "📝",
        desc: "학교 선생님이 직접 배부한 본문 빈칸/어법 프린트 과제"
    },
    {
        id: "book_academy_task_custom",
        title: "영어 학원 과제 / 모의고사 오답노트",
        publisher: "영어 학원",
        category: "academy",
        gradeTag: "전학년",
        totalUnits: 12,
        unitType: "회차",
        defaultDaily: 1,
        totalPages: 50,
        coverEmoji: "🏫",
        desc: "학원 주간 숙제, 단어 테스트, 기출 모의고사 오답 풀이"
    }
];

// 전역 공개
window.KOREAN_SCHOOLS_DATABASE = KOREAN_SCHOOLS_DATABASE;
window.KOREAN_TEXTBOOK_PUBLISHERS = KOREAN_TEXTBOOK_PUBLISHERS;
window.POPULAR_ENGLISH_TEXTBOOKS = POPULAR_ENGLISH_TEXTBOOKS;
