/**
 * Veritas English - 서술형 어순 배열 훈련 데이터베이스 (Scramble Sentences DB)
 * 중등 내신 70개 독해 지문 속 핵심 문법 문장 및 서술형 기출 빈출 구문
 */
const SCRAMBLE_SENTENCES_DB = [
    // [예비중 입문 독해] 핵심 서술형 문장
    {
        id: "scramble-PRE-1",
        passageId: "passage-PRE_M1-1",
        grade: "PRE_M1",
        title: "단풍의 원리 (광합성과 엽록소)",
        grammarPoint: "인과 관계 접속사 (Because) & 복수 주어-동사 수치",
        ko: "가을에는 날이 추워지기 때문에 나무는 음식을 만드는 것을 멈춘다.",
        en: "In autumn, trees stop making food because the days become colder.",
        words: ["In", "autumn,", "trees", "stop", "making", "food", "because", "the", "days", "become", "colder."],
        distractors: ["makes", "although"],
        hint: "In autumn, trees stop ... 로 시작하세요. stop 뒤에는 동명사(-ing)가 옵니다."
    },
    {
        id: "scramble-PRE-2",
        passageId: "passage-PRE_M1-2",
        grade: "PRE_M1",
        title: "꿀벌의 8자 춤",
        grammarPoint: "간접의문문 (의문사 + 주어 + 동사) & 수여동사",
        ko: "그녀는 다른 벌들에게 꽃들이 어디에 있는지 알려주기 위해 특별한 춤을 춘다.",
        en: "She does a special dance to show other bees where the flowers are.",
        words: ["She", "does", "a", "special", "dance", "to", "show", "other", "bees", "where", "the", "flowers", "are."],
        distractors: ["shows", "are the flowers"],
        hint: "to부정사의 부사적 용법(to show) 뒤에 간접의문문 어순(where + 주어 + 동사)에 유의하세요."
    },
    {
        id: "scramble-PRE-3",
        passageId: "passage-PRE_M1-3",
        grade: "PRE_M1",
        title: "신비한 오로라",
        grammarPoint: "수동태 (be + p.p.) & 과거분사 수식",
        ko: "오로라는 태양에서 오는 작은 입자들에 의해 만들어진다.",
        en: "Auroras are created by tiny particles coming from the Sun.",
        words: ["Auroras", "are", "created", "by", "tiny", "particles", "coming", "from", "the", "Sun."],
        distractors: ["create", "comes"],
        hint: "수동태(are created by ~)와 명사를 뒤에서 꾸며주는 현재분사(coming from ~)를 조합하세요."
    },
    {
        id: "scramble-PRE-4",
        passageId: "passage-PRE_M1-4",
        grade: "PRE_M1",
        title: "사막여우의 큰 귀",
        grammarPoint: "5형식 사역동사 (help + 목적어 + 동사원형/to부정사)",
        ko: "그들의 커다란 귀는 그들이 뜨거운 사막에서 시원함을 유지하도록 돕는다.",
        en: "Their large ears help them stay cool in the hot desert.",
        words: ["Their", "large", "ears", "help", "them", "stay", "cool", "in", "the", "hot", "desert."],
        distractors: ["stays", "hotly"],
        hint: "help + 목적어(them) + 목적격보어(stay cool) 구조입니다."
    },
    {
        id: "scramble-PRE-5",
        passageId: "passage-PRE_M1-5",
        grade: "PRE_M1",
        title: "고대 올림픽의 기원",
        grammarPoint: "명사절 접속사 that & to부정사",
        ko: "그들은 운동선수들이 최고의 능력을 보여줄 수 있기를 희망했다.",
        en: "They hoped that the athletes could show their best abilities.",
        words: ["They", "hoped", "that", "the", "athletes", "could", "show", "their", "best", "abilities."],
        distractors: ["shows", "to show"],
        hint: "hoped that 뒤에 완전한 절(주어 + 조동사 + 동사원형)을 완성하세요."
    },
    {
        id: "scramble-PRE-6",
        passageId: "passage-PRE_M1-7",
        grade: "PRE_M1",
        title: "바닷속 산호초",
        grammarPoint: "주격 관계대명사 (which / that)",
        ko: "산호초는 수천 종의 해양 생물들에게 안전한 집을 제공한다.",
        en: "Coral reefs provide safe homes for thousands of marine animals.",
        words: ["Coral", "reefs", "provide", "safe", "homes", "for", "thousands", "of", "marine", "animals."],
        distractors: ["provides", "safely"],
        hint: "복수 주어 Coral reefs에 수치하는 본동사 provide를 사용하세요."
    },

    // [중1 내신 독해] 핵심 서술형 문장
    {
        id: "scramble-M1-1",
        passageId: "passage-M1-1",
        grade: "M1",
        title: "인공지능과 미래 직업",
        grammarPoint: "주격 관계대명사 who & 조동사",
        ko: "창의적인 사고를 할 수 있는 사람들은 결코 그들의 직업을 잃지 않을 것이다.",
        en: "People who can think creatively will never lose their jobs.",
        words: ["People", "who", "can", "think", "creatively", "will", "never", "lose", "their", "jobs."],
        distractors: ["which", "creative"],
        hint: "선행사 People 뒤에 주격 관계대명사 who절을 먼저 연결하고 본동사 will never lose를 배치하세요."
    },
    {
        id: "scramble-M1-2",
        passageId: "passage-M1-2",
        grade: "M1",
        title: "해양 플라스틱 오염",
        grammarPoint: "가주어-진주어 구문 (It is ~ to부정사)",
        ko: "미래 세대를 위해 일회용 플라스틱 사용을 줄이는 것은 중요하다.",
        en: "It is important to reduce using single-use plastic for future generations.",
        words: ["It", "is", "important", "to", "reduce", "using", "single-use", "plastic", "for", "future", "generations."],
        distractors: ["That", "reduced"],
        hint: "가주어 It is 형용사 + 진주어 to부정사(to reduce ~) 구조를 구성하세요."
    },
    {
        id: "scramble-M1-3",
        passageId: "passage-M1-3",
        grade: "M1",
        title: "화성 탐사의 도전 과제",
        grammarPoint: "목적어 보어 형용사 & 5형식 make",
        ko: "극심한 추위와 방사선은 인간이 화성에서 사는 것을 어렵게 만든다.",
        en: "Extreme cold and radiation make it hard for humans to live on Mars.",
        words: ["Extreme", "cold", "and", "radiation", "make", "it", "hard", "for", "humans", "to", "live", "on", "Mars."],
        distractors: ["hardly", "makes"],
        hint: "가목적어 it과 의미상 주어 for humans, 진목적어 to live on Mars 구문을 완성하세요."
    },
    {
        id: "scramble-M1-4",
        passageId: "passage-M1-4",
        grade: "M1",
        title: "수면과 뇌의 기억 정리",
        grammarPoint: "동명사 주어 & 단수 동사 취급",
        ko: "충분한 수면을 취하는 것은 당신의 뇌가 하루 동안 배운 것을 정리하도록 도와준다.",
        en: "Getting enough sleep helps your brain organize what you learned during the day.",
        words: ["Getting", "enough", "sleep", "helps", "your", "brain", "organize", "what", "you", "learned", "during", "the", "day."],
        distractors: ["help", "that"],
        hint: "동명사 주어 Getting enough sleep 뒤 단수 동사 helps + 관계대명사 what절 조합입니다."
    },

    // [중2 내신 독해] 핵심 서술형 문장
    {
        id: "scramble-M2-1",
        passageId: "passage-M2-1",
        grade: "M2",
        title: "자율주행차의 윤리적 딜레마",
        grammarPoint: "의문사 to부정사 & 간접목적어",
        ko: "엔지니어들은 위급 상황에서 자동차가 어떻게 결정해야 하는지 프로그래밍해야 한다.",
        en: "Engineers must program how the car should make decisions in an emergency.",
        words: ["Engineers", "must", "program", "how", "the", "car", "should", "make", "decisions", "in", "an", "emergency."],
        distractors: ["makes", "should the car"],
        hint: "조동사 must program 뒤에 의문사절(how the car should make decisions)을 배치하세요."
    },
    {
        id: "scramble-M2-2",
        passageId: "passage-M2-2",
        grade: "M2",
        title: "기후 변화와 극단적 기상 현상",
        grammarPoint: "so ~ that 구문 (너무 ...해서 ~하다)",
        ko: "기온이 너무 급격하게 상승해서 많은 동물들이 쉽게 적응할 수 없다.",
        en: "Temperatures are rising so rapidly that many animals cannot adapt easily.",
        words: ["Temperatures", "are", "rising", "so", "rapidly", "that", "many", "animals", "cannot", "adapt", "easily."],
        distractors: ["such", "easy"],
        hint: "so + 부사(rapidly) + that절(결과의 부사절) 패턴입니다."
    },
    {
        id: "scramble-M2-3",
        passageId: "passage-M2-3",
        grade: "M2",
        title: "재생에너지 전환과 기술 혁신",
        grammarPoint: "수동태 완료형 & 목적을 나타내는 to부정사",
        ko: "탄소 배출을 줄이기 위해 전 세계적으로 새로운 기술들이 개발되어 왔다.",
        en: "New technologies have been developed worldwide to reduce carbon emissions.",
        words: ["New", "technologies", "have", "been", "developed", "worldwide", "to", "reduce", "carbon", "emissions."],
        distractors: ["has", "developing"],
        hint: "현재완료 수동태(have been developed)와 목적의 to부정사(to reduce ~)를 활용하세요."
    },

    // [중3 내신 독해] 핵심 서술형 문장
    {
        id: "scramble-M3-1",
        passageId: "passage-M3-1",
        grade: "M3",
        title: "유전자 편집 기술의 명암",
        grammarPoint: "not only A but also B & 가정법 / 조건절",
        ko: "이 기술은 난치병을 치료할 뿐만 아니라 농작물 수확량도 증가시킬 수 있다.",
        en: "This technology can not only cure incurable diseases but also increase crop yields.",
        words: ["This", "technology", "can", "not", "only", "cure", "incurable", "diseases", "but", "also", "increase", "crop", "yields."],
        distractors: ["cures", "increasing"],
        hint: "상관접속사 not only [동사원형 1] but also [동사원형 2] 병렬구조에 유의하세요."
    },
    {
        id: "scramble-M3-2",
        passageId: "passage-M3-2",
        grade: "M3",
        title: "우주 쓰레기 수거 기술",
        grammarPoint: "관계부사 where & 전치사 + 관계대명사",
        ko: "과학자들은 우주 파편이 지구 궤도를 위협하지 않는 안전한 환경을 만들고자 한다.",
        en: "Scientists want to create a safe environment where space debris cannot threaten Earth's orbit.",
        words: ["Scientists", "want", "to", "create", "a", "safe", "environment", "where", "space", "debris", "cannot", "threaten", "Earth's", "orbit."],
        distractors: ["which", "threatening"],
        hint: "environment 뒤에 완전한 문장을 이끄는 관계부사 where절을 붙여주세요."
    },
    {
        id: "scramble-M3-3",
        passageId: "passage-M3-3",
        grade: "M3",
        title: "신경가소성과 평생 학습",
        grammarPoint: "The + 비교급, The + 비교급",
        ko: "우리가 새로운 지식을 더 많이 배울수록 우리의 뇌는 더 유연해진다.",
        en: "The more new knowledge we learn, the more flexible our brains become.",
        words: ["The", "more", "new", "knowledge", "we", "learn,", "the", "more", "flexible", "our", "brains", "become."],
        distractors: ["most", "flexibly"],
        hint: "The + 비교급(The more new knowledge we learn) + the + 비교급(the more flexible our brains become) 공식입니다."
    }
];

if (typeof window !== 'undefined') {
    window.SCRAMBLE_SENTENCES_DB = SCRAMBLE_SENTENCES_DB;
}
