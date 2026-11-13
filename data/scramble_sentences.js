/**
 * Veritas English - 서술형 어순 배열 훈련 데이터베이스 (Scramble Sentences DB)
 * [총 86문항 완비]
 * 1. 예비중~중3 내신 핵심 문법 구문 (16문항)
 * 2. 고1 내신 킬러 어순배열 (20문항) - H1
 * 3. 고2 내신 킬러 어순배열 (20문항) - H2
 * 4. 수능 1등급 평가원 통사 구조 어순배열 (30문항) - CSAT
 */

const SCRAMBLE_SENTENCES_DB = [
  {
    "id": "scramble-PRE-1",
    "passageId": "passage-PRE_M1-1",
    "grade": "PRE_M1",
    "title": "단풍의 원리 (광합성과 엽록소)",
    "grammarPoint": "인과 관계 접속사 (Because) & 복수 주어-동사 수치",
    "ko": "가을에는 날이 추워지기 때문에 나무는 음식을 만드는 것을 멈춘다.",
    "en": "In autumn, trees stop making food because the days become colder.",
    "words": [
      "In",
      "autumn,",
      "trees",
      "stop",
      "making",
      "food",
      "because",
      "the",
      "days",
      "become",
      "colder."
    ],
    "distractors": [
      "makes",
      "although"
    ],
    "hint": "In autumn, trees stop ... 로 시작하세요. stop 뒤에는 동명사(-ing)가 옵니다."
  },
  {
    "id": "scramble-PRE-2",
    "passageId": "passage-PRE_M1-2",
    "grade": "PRE_M1",
    "title": "꿀벌의 8자 춤",
    "grammarPoint": "간접의문문 (의문사 + 주어 + 동사) & 수여동사",
    "ko": "그녀는 다른 벌들에게 꽃들이 어디에 있는지 알려주기 위해 특별한 춤을 춘다.",
    "en": "She does a special dance to show other bees where the flowers are.",
    "words": [
      "She",
      "does",
      "a",
      "special",
      "dance",
      "to",
      "show",
      "other",
      "bees",
      "where",
      "the",
      "flowers",
      "are."
    ],
    "distractors": [
      "shows",
      "are the flowers"
    ],
    "hint": "to부정사의 부사적 용법(to show) 뒤에 간접의문문 어순(where + 주어 + 동사)에 유의하세요."
  },
  {
    "id": "scramble-PRE-3",
    "passageId": "passage-PRE_M1-3",
    "grade": "PRE_M1",
    "title": "신비한 오로라",
    "grammarPoint": "수동태 (be + p.p.) & 과거분사 수식",
    "ko": "오로라는 태양에서 오는 작은 입자들에 의해 만들어진다.",
    "en": "Auroras are created by tiny particles coming from the Sun.",
    "words": [
      "Auroras",
      "are",
      "created",
      "by",
      "tiny",
      "particles",
      "coming",
      "from",
      "the",
      "Sun."
    ],
    "distractors": [
      "create",
      "comes"
    ],
    "hint": "수동태(are created by ~)와 명사를 뒤에서 꾸며주는 현재분사(coming from ~)를 조합하세요."
  },
  {
    "id": "scramble-PRE-4",
    "passageId": "passage-PRE_M1-4",
    "grade": "PRE_M1",
    "title": "사막여우의 큰 귀",
    "grammarPoint": "5형식 사역동사 (help + 목적어 + 동사원형/to부정사)",
    "ko": "그들의 커다란 귀는 그들이 뜨거운 사막에서 시원함을 유지하도록 돕는다.",
    "en": "Their large ears help them stay cool in the hot desert.",
    "words": [
      "Their",
      "large",
      "ears",
      "help",
      "them",
      "stay",
      "cool",
      "in",
      "the",
      "hot",
      "desert."
    ],
    "distractors": [
      "stays",
      "hotly"
    ],
    "hint": "help + 목적어(them) + 목적격보어(stay cool) 구조입니다."
  },
  {
    "id": "scramble-PRE-5",
    "passageId": "passage-PRE_M1-5",
    "grade": "PRE_M1",
    "title": "고대 올림픽의 기원",
    "grammarPoint": "명사절 접속사 that & to부정사",
    "ko": "그들은 운동선수들이 최고의 능력을 보여줄 수 있기를 희망했다.",
    "en": "They hoped that the athletes could show their best abilities.",
    "words": [
      "They",
      "hoped",
      "that",
      "the",
      "athletes",
      "could",
      "show",
      "their",
      "best",
      "abilities."
    ],
    "distractors": [
      "shows",
      "to show"
    ],
    "hint": "hoped that 뒤에 완전한 절(주어 + 조동사 + 동사원형)을 완성하세요."
  },
  {
    "id": "scramble-PRE-6",
    "passageId": "passage-PRE_M1-7",
    "grade": "PRE_M1",
    "title": "바닷속 산호초",
    "grammarPoint": "주격 관계대명사 (which / that)",
    "ko": "산호초는 수천 종의 해양 생물들에게 안전한 집을 제공한다.",
    "en": "Coral reefs provide safe homes for thousands of marine animals.",
    "words": [
      "Coral",
      "reefs",
      "provide",
      "safe",
      "homes",
      "for",
      "thousands",
      "of",
      "marine",
      "animals."
    ],
    "distractors": [
      "provides",
      "safely"
    ],
    "hint": "복수 주어 Coral reefs에 수치하는 본동사 provide를 사용하세요."
  },
  {
    "id": "scramble-M1-1",
    "passageId": "passage-M1-1",
    "grade": "M1",
    "title": "인공지능과 미래 직업",
    "grammarPoint": "주격 관계대명사 who & 조동사",
    "ko": "창의적인 사고를 할 수 있는 사람들은 결코 그들의 직업을 잃지 않을 것이다.",
    "en": "People who can think creatively will never lose their jobs.",
    "words": [
      "People",
      "who",
      "can",
      "think",
      "creatively",
      "will",
      "never",
      "lose",
      "their",
      "jobs."
    ],
    "distractors": [
      "which",
      "creative"
    ],
    "hint": "선행사 People 뒤에 주격 관계대명사 who절을 먼저 연결하고 본동사 will never lose를 배치하세요."
  },
  {
    "id": "scramble-M1-2",
    "passageId": "passage-M1-2",
    "grade": "M1",
    "title": "해양 플라스틱 오염",
    "grammarPoint": "가주어-진주어 구문 (It is ~ to부정사)",
    "ko": "미래 세대를 위해 일회용 플라스틱 사용을 줄이는 것은 중요하다.",
    "en": "It is important to reduce using single-use plastic for future generations.",
    "words": [
      "It",
      "is",
      "important",
      "to",
      "reduce",
      "using",
      "single-use",
      "plastic",
      "for",
      "future",
      "generations."
    ],
    "distractors": [
      "That",
      "reduced"
    ],
    "hint": "가주어 It is 형용사 + 진주어 to부정사(to reduce ~) 구조를 구성하세요."
  },
  {
    "id": "scramble-M1-3",
    "passageId": "passage-M1-3",
    "grade": "M1",
    "title": "화성 탐사의 도전 과제",
    "grammarPoint": "목적어 보어 형용사 & 5형식 make",
    "ko": "극심한 추위와 방사선은 인간이 화성에서 사는 것을 어렵게 만든다.",
    "en": "Extreme cold and radiation make it hard for humans to live on Mars.",
    "words": [
      "Extreme",
      "cold",
      "and",
      "radiation",
      "make",
      "it",
      "hard",
      "for",
      "humans",
      "to",
      "live",
      "on",
      "Mars."
    ],
    "distractors": [
      "hardly",
      "makes"
    ],
    "hint": "가목적어 it과 의미상 주어 for humans, 진목적어 to live on Mars 구문을 완성하세요."
  },
  {
    "id": "scramble-M1-4",
    "passageId": "passage-M1-4",
    "grade": "M1",
    "title": "수면과 뇌의 기억 정리",
    "grammarPoint": "동명사 주어 & 단수 동사 취급",
    "ko": "충분한 수면을 취하는 것은 당신의 뇌가 하루 동안 배운 것을 정리하도록 도와준다.",
    "en": "Getting enough sleep helps your brain organize what you learned during the day.",
    "words": [
      "Getting",
      "enough",
      "sleep",
      "helps",
      "your",
      "brain",
      "organize",
      "what",
      "you",
      "learned",
      "during",
      "the",
      "day."
    ],
    "distractors": [
      "help",
      "that"
    ],
    "hint": "동명사 주어 Getting enough sleep 뒤 단수 동사 helps + 관계대명사 what절 조합입니다."
  },
  {
    "id": "scramble-M2-1",
    "passageId": "passage-M2-1",
    "grade": "M2",
    "title": "자율주행차의 윤리적 딜레마",
    "grammarPoint": "의문사 to부정사 & 간접목적어",
    "ko": "엔지니어들은 위급 상황에서 자동차가 어떻게 결정해야 하는지 프로그래밍해야 한다.",
    "en": "Engineers must program how the car should make decisions in an emergency.",
    "words": [
      "Engineers",
      "must",
      "program",
      "how",
      "the",
      "car",
      "should",
      "make",
      "decisions",
      "in",
      "an",
      "emergency."
    ],
    "distractors": [
      "makes",
      "should the car"
    ],
    "hint": "조동사 must program 뒤에 의문사절(how the car should make decisions)을 배치하세요."
  },
  {
    "id": "scramble-M2-2",
    "passageId": "passage-M2-2",
    "grade": "M2",
    "title": "기후 변화와 극단적 기상 현상",
    "grammarPoint": "so ~ that 구문 (너무 ...해서 ~하다)",
    "ko": "기온이 너무 급격하게 상승해서 많은 동물들이 쉽게 적응할 수 없다.",
    "en": "Temperatures are rising so rapidly that many animals cannot adapt easily.",
    "words": [
      "Temperatures",
      "are",
      "rising",
      "so",
      "rapidly",
      "that",
      "many",
      "animals",
      "cannot",
      "adapt",
      "easily."
    ],
    "distractors": [
      "such",
      "easy"
    ],
    "hint": "so + 부사(rapidly) + that절(결과의 부사절) 패턴입니다."
  },
  {
    "id": "scramble-M2-3",
    "passageId": "passage-M2-3",
    "grade": "M2",
    "title": "재생에너지 전환과 기술 혁신",
    "grammarPoint": "수동태 완료형 & 목적을 나타내는 to부정사",
    "ko": "탄소 배출을 줄이기 위해 전 세계적으로 새로운 기술들이 개발되어 왔다.",
    "en": "New technologies have been developed worldwide to reduce carbon emissions.",
    "words": [
      "New",
      "technologies",
      "have",
      "been",
      "developed",
      "worldwide",
      "to",
      "reduce",
      "carbon",
      "emissions."
    ],
    "distractors": [
      "has",
      "developing"
    ],
    "hint": "현재완료 수동태(have been developed)와 목적의 to부정사(to reduce ~)를 활용하세요."
  },
  {
    "id": "scramble-M3-1",
    "passageId": "passage-M3-1",
    "grade": "M3",
    "title": "유전자 편집 기술의 명암",
    "grammarPoint": "not only A but also B & 가정법 / 조건절",
    "ko": "이 기술은 난치병을 치료할 뿐만 아니라 농작물 수확량도 증가시킬 수 있다.",
    "en": "This technology can not only cure incurable diseases but also increase crop yields.",
    "words": [
      "This",
      "technology",
      "can",
      "not",
      "only",
      "cure",
      "incurable",
      "diseases",
      "but",
      "also",
      "increase",
      "crop",
      "yields."
    ],
    "distractors": [
      "cures",
      "increasing"
    ],
    "hint": "상관접속사 not only [동사원형 1] but also [동사원형 2] 병렬구조에 유의하세요."
  },
  {
    "id": "scramble-M3-2",
    "passageId": "passage-M3-2",
    "grade": "M3",
    "title": "우주 쓰레기 수거 기술",
    "grammarPoint": "관계부사 where & 전치사 + 관계대명사",
    "ko": "과학자들은 우주 파편이 지구 궤도를 위협하지 않는 안전한 환경을 만들고자 한다.",
    "en": "Scientists want to create a safe environment where space debris cannot threaten Earth's orbit.",
    "words": [
      "Scientists",
      "want",
      "to",
      "create",
      "a",
      "safe",
      "environment",
      "where",
      "space",
      "debris",
      "cannot",
      "threaten",
      "Earth's",
      "orbit."
    ],
    "distractors": [
      "which",
      "threatening"
    ],
    "hint": "environment 뒤에 완전한 문장을 이끄는 관계부사 where절을 붙여주세요."
  },
  {
    "id": "scramble-M3-3",
    "passageId": "passage-M3-3",
    "grade": "M3",
    "title": "신경가소성과 평생 학습",
    "grammarPoint": "The + 비교급, The + 비교급",
    "ko": "우리가 새로운 지식을 더 많이 배울수록 우리의 뇌는 더 유연해진다.",
    "en": "The more new knowledge we learn, the more flexible our brains become.",
    "words": [
      "The",
      "more",
      "new",
      "knowledge",
      "we",
      "learn,",
      "the",
      "more",
      "flexible",
      "our",
      "brains",
      "become."
    ],
    "distractors": [
      "most",
      "flexibly"
    ],
    "hint": "The + 비교급(The more new knowledge we learn) + the + 비교급(the more flexible our brains become) 공식입니다."
  },
  {
    "id": "scramble-H1-1",
    "passageId": "passage-H1_1-1",
    "grade": "H1",
    "title": "인간 혁신의 원천 (Not A But B)",
    "grammarPoint": "상관접속사 not A but B 병렬 구조 & 3인칭 단수 수일치",
    "ko": "진정한 인간의 혁신은 통계적 계산이 아니라 개인의 취약성과 직관적 공감에서 비롯된다.",
    "en": "True human innovation arises not from statistical calculations but from personal vulnerabilities and intuitive empathy.",
    "words": [
      "True",
      "human",
      "innovation",
      "arises",
      "not",
      "from",
      "statistical",
      "calculations",
      "but",
      "from",
      "personal",
      "vulnerabilities",
      "and",
      "intuitive",
      "empathy."
    ],
    "distractors": [
      "arise",
      "calculating"
    ],
    "hint": "단수 주어(True human innovation)에 일치하는 단수 동사 arises로 시작하며, not from A but from B의 전치사구 병렬에 유의하세요."
  },
  {
    "id": "scramble-H1-2",
    "passageId": "passage-H1_1-2",
    "grade": "H1",
    "title": "스마트폰 청색광과 멜라토닌",
    "grammarPoint": "현재분사 능동 분사구문 & 동명사 목적어",
    "ko": "스마트폰에서 방출되는 인공 청색광은 멜라토닌 생성을 억제하여 수면의 시작을 지연시킨다.",
    "en": "Artificial blue light emitted by smartphones suppresses melatonin production, delaying sleep onset.",
    "words": [
      "Artificial",
      "blue",
      "light",
      "emitted",
      "by",
      "smartphones",
      "suppresses",
      "melatonin",
      "production,",
      "delaying",
      "sleep",
      "onset."
    ],
    "distractors": [
      "delayed",
      "suppress"
    ],
    "hint": "주어(Artificial blue light) 뒤에 과거분사구(emitted by smartphones)를 두고, 연속 결과를 나타내는 능동 분사구문(delaying...)을 완성하세요."
  },
  {
    "id": "scramble-H1-3",
    "passageId": "passage-H1_1-3",
    "grade": "H1",
    "title": "확증 편향과 필터 버블",
    "grammarPoint": "주격 관계대명사 that & 전치사의 목적어",
    "ko": "알고리즘은 우리의 기존 신념을 확인해 주는 정보만을 우선시하여 사회적 양극화를 심화시킨다.",
    "en": "Algorithms prioritize only information that confirms our existing beliefs, deepening social polarization.",
    "words": [
      "Algorithms",
      "prioritize",
      "only",
      "information",
      "that",
      "confirms",
      "our",
      "existing",
      "beliefs,",
      "deepening",
      "social",
      "polarization."
    ],
    "distractors": [
      "confirmed",
      "which"
    ],
    "hint": "선행사 information을 수식하는 주격 관계대명사 절(that confirms our existing beliefs)을 배치하세요."
  },
  {
    "id": "scramble-H1-4",
    "passageId": "passage-H1_1-4",
    "grade": "H1",
    "title": "꿀벌 군집 붕괴의 위험",
    "grammarPoint": "가주어-진주어 구문 (It is imperative to-v)",
    "ko": "전 지구적 식량 안보 붕괴를 예방하기 위해 꽃가루 매개자를 보호하는 것은 필수적이다.",
    "en": "It is imperative to protect pollinators to prevent the collapse of global food security.",
    "words": [
      "It",
      "is",
      "imperative",
      "to",
      "protect",
      "pollinators",
      "to",
      "prevent",
      "the",
      "collapse",
      "of",
      "global",
      "food",
      "security."
    ],
    "distractors": [
      "protecting",
      "collapse of"
    ],
    "hint": "가주어 It으로 시작하여 to protect pollinators를 진주어로 배치하고, 목적을 나타내는 to prevent 절을 연결하세요."
  },
  {
    "id": "scramble-H1-5",
    "passageId": "passage-H1_1-5",
    "grade": "H1",
    "title": "행동경제학과 넛지",
    "grammarPoint": "전치사 instead of + 동명사구 & 5형식 enable + O + to-v",
    "ko": "직접적 강제 대신 선택 설계를 변경하는 것은 사람들이 더 나은 결정을 내릴 수 있도록 돕는다.",
    "en": "Altering choice architecture instead of direct coercion enables people to make better decisions.",
    "words": [
      "Altering",
      "choice",
      "architecture",
      "instead",
      "of",
      "direct",
      "coercion",
      "enables",
      "people",
      "to",
      "make",
      "better",
      "decisions."
    ],
    "distractors": [
      "enable",
      "making"
    ],
    "hint": "동명사 주어 Altering...이 단수이므로 동사는 enables가 되며, 목적격 보어로 to make가 옵니다."
  },
  {
    "id": "scramble-H1-6",
    "passageId": "passage-H1_1-6",
    "grade": "H1",
    "title": "음악 화음의 신경학적 효과",
    "grammarPoint": "부정어 도치 구문 (Not only + 조동사 + S + V)",
    "ko": "음악을 듣는 것은 스트레스를 완화시킬 뿐만 아니라 인지적 회복탄력성을 촉진한다.",
    "en": "Not only does listening to music alleviate stress, but it also promotes cognitive resilience.",
    "words": [
      "Not",
      "only",
      "does",
      "listening",
      "to",
      "music",
      "alleviate",
      "stress,",
      "but",
      "it",
      "also",
      "promotes",
      "cognitive",
      "resilience."
    ],
    "distractors": [
      "do",
      "alleviates"
    ],
    "hint": "부정어 Not only가 문두에 올 때 의문문 어순(does listening to music alleviate)으로 도치되는 규칙에 유의하세요."
  },
  {
    "id": "scramble-H1-7",
    "passageId": "passage-H1_1-7",
    "grade": "H1",
    "title": "플라스틱 재활용의 한계",
    "grammarPoint": "동격 접속사 that & 수동태 be constrained by",
    "ko": "기계적 재활용은 폴리머 사슬의 품질 저하로 인해 본질적으로 제약을 받는다.",
    "en": "Mechanical recycling is inherently constrained by the qualitative degradation of polymer chains.",
    "words": [
      "Mechanical",
      "recycling",
      "is",
      "inherently",
      "constrained",
      "by",
      "the",
      "qualitative",
      "degradation",
      "of",
      "polymer",
      "chains."
    ],
    "distractors": [
      "constraining",
      "constrain"
    ],
    "hint": "수동태 구조(is inherently constrained by) 뒤에 명사구 the qualitative degradation of polymer chains를 완성하세요."
  },
  {
    "id": "scramble-H1-8",
    "passageId": "passage-H1_1-8",
    "grade": "H1",
    "title": "장내 미생물과 면역력",
    "grammarPoint": "비교급 강조 부사 & 5형식 play a role in -ing",
    "ko": "미생물 다양성은 자가면역 질환을 억제하는 데 훨씬 더 결정적인 역할을 수행한다.",
    "en": "Microbial diversity plays a far more critical role in suppressing autoimmune diseases.",
    "words": [
      "Microbial",
      "diversity",
      "plays",
      "a",
      "far",
      "more",
      "critical",
      "role",
      "in",
      "suppressing",
      "autoimmune",
      "diseases."
    ],
    "distractors": [
      "very",
      "suppress"
    ],
    "hint": "비교급 more critical을 강조하기 위해 far를 사용하며, 전치사 in 뒤에 동명사 suppressing을 배치하세요."
  },
  {
    "id": "scramble-H1-9",
    "passageId": "passage-H1_1-9",
    "grade": "H1",
    "title": "고대 건축의 자연 냉방",
    "grammarPoint": "관계부사 where & 전치사 without + 동명사",
    "ko": "페르시아 바람탑은 화석 연료를 소비하지 않고도 차가운 공기를 포착하여 실내로 순환시켰다.",
    "en": "Persian wind catchers captured and circulated cool air into buildings without consuming fossil fuels.",
    "words": [
      "Persian",
      "wind",
      "catchers",
      "captured",
      "and",
      "circulated",
      "cool",
      "air",
      "into",
      "buildings",
      "without",
      "consuming",
      "fossil",
      "fuels."
    ],
    "distractors": [
      "consumed",
      "capturing"
    ],
    "hint": "과거 동사 captured and circulated의 병렬 구조와 without consuming fossil fuels의 부사구를 결합하세요."
  },
  {
    "id": "scramble-H1-10",
    "passageId": "passage-H1_1-10",
    "grade": "H1",
    "title": "습관 형성의 원리",
    "grammarPoint": "목적의 so that 절 & 조동사 can",
    "ko": "뇌는 에너지를 절약하고 인지적 과부하를 줄이기 위해 일상적인 동작을 자동화한다.",
    "en": "The brain automates daily routines so that it can conserve energy and reduce cognitive overload.",
    "words": [
      "The",
      "brain",
      "automates",
      "daily",
      "routines",
      "so",
      "that",
      "it",
      "can",
      "conserve",
      "energy",
      "and",
      "reduce",
      "cognitive",
      "overload."
    ],
    "distractors": [
      "conserving",
      "automated"
    ],
    "hint": "목적 접속사 so that it can conserve energy and reduce cognitive overload의 구조를 주의하세요."
  },
  {
    "id": "scramble-H1-11",
    "passageId": "passage-H1_2-1",
    "grade": "H1",
    "title": "성인기 뇌가소성",
    "grammarPoint": "접속사 Even if & 수동태 can be remodeled",
    "ko": "성인이 된 후에도 두뇌의 시냅스 연결은 의도적인 훈련을 통해 물리적으로 재구성될 수 있다.",
    "en": "Even in adulthood, synaptic connections in the brain can be physically remodeled through deliberate practice.",
    "words": [
      "Even",
      "in",
      "adulthood,",
      "synaptic",
      "connections",
      "in",
      "the",
      "brain",
      "can",
      "be",
      "physically",
      "remodeled",
      "through",
      "deliberate",
      "practice."
    ],
    "distractors": [
      "remodeling",
      "can remodel"
    ],
    "hint": "조동사 수동태 can be physically remodeled 뒤에 수단 전치사구 through deliberate practice를 연결하세요."
  },
  {
    "id": "scramble-H1-12",
    "passageId": "passage-H1_2-2",
    "grade": "H1",
    "title": "애쉬의 동조 실험",
    "grammarPoint": "양보 전치사 Despite + 명사구 & 복수 수일치",
    "ko": "명백한 시각적 증거에도 불구하고, 다수의 참가자들은 집단의 만장일치 의견에 순응했다.",
    "en": "Despite obvious visual evidence, many participants conformed to the unanimous consensus of the group.",
    "words": [
      "Despite",
      "obvious",
      "visual",
      "evidence,",
      "many",
      "participants",
      "conformed",
      "to",
      "the",
      "unanimous",
      "consensus",
      "of",
      "the",
      "group."
    ],
    "distractors": [
      "Although",
      "conforming"
    ],
    "hint": "전치사 Despite 뒤에 명사구 obvious visual evidence를 두고 주절(many participants conformed to...)을 작성하세요."
  },
  {
    "id": "scramble-H1-13",
    "passageId": "passage-H1_2-3",
    "grade": "H1",
    "title": "생체모방 기술의 혁신",
    "grammarPoint": "현재분사 수식 & 타동사 streamline",
    "ko": "상어 피부의 미세 돌기를 모방한 공학자들은 선박의 마찰 저항을 획기적으로 줄였다.",
    "en": "Engineers mimicking shark skin micro-textures dramatically reduced frictional resistance for nautical vessels.",
    "words": [
      "Engineers",
      "mimicking",
      "shark",
      "skin",
      "micro-textures",
      "dramatically",
      "reduced",
      "frictional",
      "resistance",
      "for",
      "nautical",
      "vessels."
    ],
    "distractors": [
      "mimicked",
      "reducing"
    ],
    "hint": "주어 Engineers를 수식하는 현재분사구(mimicking shark skin micro-textures)에 유의하세요."
  },
  {
    "id": "scramble-H1-14",
    "passageId": "passage-H1_2-4",
    "grade": "H1",
    "title": "시간 체감 가속",
    "grammarPoint": "시간/비례 접속사 As + 절 & 비교급 문형",
    "ko": "새로운 경험의 빈도가 감소함에 따라 시간은 나이가 들수록 훨씬 더 빠르게 흐르는 것처럼 보인다.",
    "en": "As the frequency of novel experiences decreases, time appears to accelerate far more rapidly.",
    "words": [
      "As",
      "the",
      "frequency",
      "of",
      "novel",
      "experiences",
      "decreases,",
      "time",
      "appears",
      "to",
      "accelerate",
      "far",
      "more",
      "rapidly."
    ],
    "distractors": [
      "decrease",
      "accelerated"
    ],
    "hint": "단수 주어 the frequency에 일치하는 단수 동사 decreases와 주절 time appears to accelerate...를 결합하세요."
  },
  {
    "id": "scramble-H1-15",
    "passageId": "passage-H1_2-5",
    "grade": "H1",
    "title": "수직 농경 스마트팜",
    "grammarPoint": "전치사구 by utilizing & 동명사 수식",
    "ko": "폐쇄형 수경재배 시스템을 활용함으로써 수직 농장은 물 소비를 최대 95%까지 절감한다.",
    "en": "By utilizing closed-loop hydroponic systems, vertical farms reduce water consumption by up to ninety-five percent.",
    "words": [
      "By",
      "utilizing",
      "closed-loop",
      "hydroponic",
      "systems,",
      "vertical",
      "farms",
      "reduce",
      "water",
      "consumption",
      "by",
      "up",
      "to",
      "ninety-five",
      "percent."
    ],
    "distractors": [
      "utilized",
      "reduction"
    ],
    "hint": "수단 전치사구 By utilizing closed-loop hydroponic systems로 시작하여 주절을 배치하세요."
  },
  {
    "id": "scramble-H1-16",
    "passageId": "passage-H1_2-6",
    "grade": "H1",
    "title": "목격자 증언의 기억 왜곡",
    "grammarPoint": "수동태 be contaminated by & 유도 질문",
    "ko": "인간의 기억은 객관적인 녹화물이 아니며, 유도 신문에 의해 쉽게 오염될 수 있다.",
    "en": "Human memory is not an objective recording and can be easily contaminated by leading questions.",
    "words": [
      "Human",
      "memory",
      "is",
      "not",
      "an",
      "objective",
      "recording",
      "and",
      "can",
      "be",
      "easily",
      "contaminated",
      "by",
      "leading",
      "questions."
    ],
    "distractors": [
      "contaminating",
      "record"
    ],
    "hint": "is not an objective recording 뒤에 and can be easily contaminated by leading questions를 병렬 배치하세요."
  },
  {
    "id": "scramble-H1-17",
    "passageId": "passage-H1_2-7",
    "grade": "H1",
    "title": "심해 해구 생물발광",
    "grammarPoint": "목적의 to부정사 & 상반 대조 접속사 as well as",
    "ko": "심해 생물들은 먹이를 유인할 뿐만 아니라 천적을 은폐하기 위해 생물발광을 방출한다.",
    "en": "Deep-sea creatures emit bioluminescence to lure prey as well as to camouflage against predators.",
    "words": [
      "Deep-sea",
      "creatures",
      "emit",
      "bioluminescence",
      "to",
      "lure",
      "prey",
      "as",
      "well",
      "as",
      "to",
      "camouflage",
      "against",
      "predators."
    ],
    "distractors": [
      "emits",
      "camouflaging"
    ],
    "hint": "as well as 양쪽에 to lure prey와 to camouflage against predators를 병렬 연결하세요."
  },
  {
    "id": "scramble-H1-18",
    "passageId": "passage-H1_2-8",
    "grade": "H1",
    "title": "긱 이코노미의 명암",
    "grammarPoint": "양보 부사절 While + 절 & 박탈하다 deprive A of B",
    "ko": "플랫폼 노동이 일정의 자율성을 부여하지만, 동시에 노동자들에게서 필수적 사회 안전망을 박탈한다.",
    "en": "While platform labor offers scheduling autonomy, it simultaneously deprives workers of essential social safety nets.",
    "words": [
      "While",
      "platform",
      "labor",
      "offers",
      "scheduling",
      "autonomy,",
      "it",
      "simultaneously",
      "deprives",
      "workers",
      "of",
      "essential",
      "social",
      "safety",
      "nets."
    ],
    "distractors": [
      "deprive",
      "offered"
    ],
    "hint": "deprive A of B 구문(deprives workers of essential social safety nets)에 유의하세요."
  },
  {
    "id": "scramble-H1-19",
    "passageId": "passage-H1_2-9",
    "grade": "H1",
    "title": "미술 치료와 비언어적 치유",
    "grammarPoint": "5형식 allow + O + to-v & 목적격 관계대명사",
    "ko": "시각 예술 창작은 환자들이 언어로 표현할 수 없는 심리적 외상을 안전하게 방출하도록 해준다.",
    "en": "Visual art creation allows patients to safely release psychological trauma that they cannot verbalize.",
    "words": [
      "Visual",
      "art",
      "creation",
      "allows",
      "patients",
      "to",
      "safely",
      "release",
      "psychological",
      "trauma",
      "that",
      "they",
      "cannot",
      "verbalize."
    ],
    "distractors": [
      "verbalized",
      "allowing"
    ],
    "hint": "allows patients to safely release... 뒤에 목적격 관계대명사 절 that they cannot verbalize를 결합하세요."
  },
  {
    "id": "scramble-H1-20",
    "passageId": "passage-H1_2-10",
    "grade": "H1",
    "title": "우주 쓰레기 수거 기술",
    "grammarPoint": "조동사 must be developed & 목적의 to prevent",
    "ko": "궤도 내 연쇄 충돌 재앙을 방지하기 위해 능동적인 우주 쓰레기 수거 시스템이 개발되어야 한다.",
    "en": "Active debris removal systems must be developed to prevent catastrophic chain-reaction collisions in orbit.",
    "words": [
      "Active",
      "debris",
      "removal",
      "systems",
      "must",
      "be",
      "developed",
      "to",
      "prevent",
      "catastrophic",
      "chain-reaction",
      "collisions",
      "in",
      "orbit."
    ],
    "distractors": [
      "developing",
      "prevented"
    ],
    "hint": "조동사 수동태 must be developed 뒤에 목적 to prevent catastrophic chain-reaction collisions in orbit을 연결하세요."
  },
  {
    "id": "scramble-H2-1",
    "passageId": "passage-H2_1-1",
    "grade": "H2",
    "title": "도파민 보상 회로와 주의력",
    "grammarPoint": "With + 목적어 + 분사 부대상황 구문",
    "ko": "소셜 미디어 알고리즘이 즉각적 자극을 증폭시키는 상황에서, 깊은 인지적 몰입을 유지하기는 어렵다.",
    "en": "With social media algorithms amplifying instant stimuli, maintaining deep cognitive immersion becomes increasingly difficult.",
    "words": [
      "With",
      "social",
      "media",
      "algorithms",
      "amplifying",
      "instant",
      "stimuli,",
      "maintaining",
      "deep",
      "cognitive",
      "immersion",
      "becomes",
      "increasingly",
      "difficult."
    ],
    "distractors": [
      "amplified",
      "become"
    ],
    "hint": "With + 목적어(social media algorithms) + 현재분사(amplifying instant stimuli) 부대상황 구문으로 시작하세요."
  },
  {
    "id": "scramble-H2-2",
    "passageId": "passage-H2_1-2",
    "grade": "H2",
    "title": "의사결정의 프레이밍 효과",
    "grammarPoint": "간접의문문 의문부사 how + S + V & 타동사 manipulate",
    "ko": "정보가 손실의 관점에서 제시되는지 혹은 이익의 관점에서 제시되는지는 인간의 위험 감수 성향을 조작한다.",
    "en": "How information is framed in terms of losses or gains profoundly manipulates human risk tolerance.",
    "words": [
      "How",
      "information",
      "is",
      "framed",
      "in",
      "terms",
      "of",
      "losses",
      "or",
      "gains",
      "profoundly",
      "manipulates",
      "human",
      "risk",
      "tolerance."
    ],
    "distractors": [
      "manipulate",
      "framing"
    ],
    "hint": "명사절 주어 How information is framed...가 단수 취급되므로 본동사는 manipulates가 됩니다."
  },
  {
    "id": "scramble-H2-3",
    "passageId": "passage-H2_1-3",
    "grade": "H2",
    "title": "후성유전학적 스위치",
    "grammarPoint": "전치사 without + 동명사 alter & 5형식 dictate which genes are expressed",
    "ko": "환경적 요인들은 DNA 염기서열을 변경하지 않고도 어떤 유전자가 발현되는지를 결정할 수 있다.",
    "en": "Environmental factors can dictate which genes are expressed without altering the underlying DNA sequence.",
    "words": [
      "Environmental",
      "factors",
      "can",
      "dictate",
      "which",
      "genes",
      "are",
      "expressed",
      "without",
      "altering",
      "the",
      "underlying",
      "DNA",
      "sequence."
    ],
    "distractors": [
      "altered",
      "is expressed"
    ],
    "hint": "which genes are expressed 간접의문문 절 뒤에 양보 전치사구 without altering the underlying DNA sequence를 배치하세요."
  },
  {
    "id": "scramble-H2-4",
    "passageId": "passage-H2_1-4",
    "grade": "H2",
    "title": "인지부조화와 자기합리화",
    "grammarPoint": "시간 부사절 When + 절 & 사역동사 make + O + 원형부정사",
    "ko": "행동과 내적 가치관이 충돌할 때, 사람들은 심리적 불편함을 해소하기 위해 과거의 믿음을 왜곡한다.",
    "en": "When actions clash with internal values, individuals distort past beliefs to alleviate psychological discomfort.",
    "words": [
      "When",
      "actions",
      "clash",
      "with",
      "internal",
      "values,",
      "individuals",
      "distort",
      "past",
      "beliefs",
      "to",
      "alleviate",
      "psychological",
      "discomfort."
    ],
    "distractors": [
      "distorting",
      "clashed"
    ],
    "hint": "When actions clash with internal values 부사절 뒤에 주절(individuals distort past beliefs to alleviate...)을 완성하세요."
  },
  {
    "id": "scramble-H2-5",
    "passageId": "passage-H2_1-5",
    "grade": "H2",
    "title": "자율주행차의 트롤리 딜레마",
    "grammarPoint": "간접목적어 & 관계대명사 whose + 명사",
    "ko": "엔지니어들은 사고 상황에서 누구의 생명이 우선시되어야 하는지에 관한 윤리적 규칙을 프로그래밍해야 한다.",
    "en": "Engineers must program ethical algorithms determining whose life should be prioritized in unavoidable crashes.",
    "words": [
      "Engineers",
      "must",
      "program",
      "ethical",
      "algorithms",
      "determining",
      "whose",
      "life",
      "should",
      "be",
      "prioritized",
      "in",
      "unavoidable",
      "crashes."
    ],
    "distractors": [
      "prioritizing",
      "who"
    ],
    "hint": "현재분사 determining의 목적어로 의문형용사 whose life should be prioritized... 수동절을 연결하세요."
  },
  {
    "id": "scramble-H2-6",
    "passageId": "passage-H2_1-6",
    "grade": "H2",
    "title": "양자 중첩과 미래 암호학",
    "grammarPoint": "관계대명사 which 선행사 수식 & 동사 threaten",
    "ko": "양자 컴퓨터는 0과 1의 중첩 상태를 연산하여 기존 암호화 체계 전체를 무력화할 위험이 있다.",
    "en": "Quantum computers operate in superpositions of zero and one, threatening to dismantle existing cryptographic architectures.",
    "words": [
      "Quantum",
      "computers",
      "operate",
      "in",
      "superpositions",
      "of",
      "zero",
      "and",
      "one,",
      "threatening",
      "to",
      "dismantle",
      "existing",
      "cryptographic",
      "architectures."
    ],
    "distractors": [
      "threatened",
      "operates"
    ],
    "hint": "연속 결과를 이끄는 능동 분사구문 threatening to dismantle existing cryptographic architectures에 유의하세요."
  },
  {
    "id": "scramble-H2-7",
    "passageId": "passage-H2_1-7",
    "grade": "H2",
    "title": "심리적 회복탄력성과 인지 재구성",
    "grammarPoint": "전치사 by reframing A as B & 동사 emerge",
    "ko": "시련을 파멸이 아닌 성장의 촉매제로 재해석함으로써 개인은 위기로부터 더 강해져서 나타난다.",
    "en": "By reframing adversity as a catalyst for growth, individuals emerge significantly stronger from profound crises.",
    "words": [
      "By",
      "reframing",
      "adversity",
      "as",
      "a",
      "catalyst",
      "for",
      "growth,",
      "individuals",
      "emerge",
      "significantly",
      "stronger",
      "from",
      "profound",
      "crises."
    ],
    "distractors": [
      "emerging",
      "reframed"
    ],
    "hint": "By reframing A as B 수단 전치사구로 시작하여 individuals emerge significantly stronger... 주절을 연결하세요."
  },
  {
    "id": "scramble-H2-8",
    "passageId": "passage-H2_1-8",
    "grade": "H2",
    "title": "스마트 그리드와 분산형 전력",
    "grammarPoint": "to부정사의 형용사적 용법 & 수동태 be balanced",
    "ko": "재생 에너지의 간헐적인 공급은 인공지능 기반 분산형 전력망에 의해 정밀하게 균형이 맞춰져야 한다.",
    "en": "Intermittent supplies from renewable sources must be precisely balanced by AI-driven decentralized grids.",
    "words": [
      "Intermittent",
      "supplies",
      "from",
      "renewable",
      "sources",
      "must",
      "be",
      "precisely",
      "balanced",
      "by",
      "AI-driven",
      "decentralized",
      "grids."
    ],
    "distractors": [
      "balancing",
      "supply"
    ],
    "hint": "복수 주어 Intermittent supplies 뒤에 조동사 수동태 must be precisely balanced by...를 완성하세요."
  },
  {
    "id": "scramble-H2-9",
    "passageId": "passage-H2_1-9",
    "grade": "H2",
    "title": "개념적 은유와 사고의 구조화",
    "grammarPoint": "It is ~ that 강조 구문",
    "ko": "우리가 일상에서 무심코 사용하는 개념적 은유야말로 우리가 세상을 지각하고 행동하는 방식을 구조화한다.",
    "en": "It is the conceptual metaphors we use everyday that profoundly structure how we perceive and act.",
    "words": [
      "It",
      "is",
      "the",
      "conceptual",
      "metaphors",
      "we",
      "use",
      "everyday",
      "that",
      "profoundly",
      "structure",
      "how",
      "we",
      "perceive",
      "and",
      "act."
    ],
    "distractors": [
      "structures",
      "which"
    ],
    "hint": "It is the conceptual metaphors we use everyday that profoundly structure... 강조 구문에 유의하세요."
  },
  {
    "id": "scramble-H2-10",
    "passageId": "passage-H2_1-10",
    "grade": "H2",
    "title": "젠트리피케이션의 역설",
    "grammarPoint": "관계대명사 where 선행사 수식 & 동사 paradoxically drive out",
    "ko": "쇠퇴한 지역의 문화적 부흥은 역설적으로 그 지역에 활력을 불어넣었던 바로 그 원주민들을 내쫓는다.",
    "en": "The cultural revival of abandoned districts paradoxically drives out the very residents who initially revitalized them.",
    "words": [
      "The",
      "cultural",
      "revival",
      "of",
      "abandoned",
      "districts",
      "paradoxically",
      "drives",
      "out",
      "the",
      "very",
      "residents",
      "who",
      "initially",
      "revitalized",
      "them."
    ],
    "distractors": [
      "drive",
      "revitalizing"
    ],
    "hint": "단수 주어 The cultural revival에 맞추어 drives out을 쓰고, the very residents who initially revitalized them으로 수식하세요."
  },
  {
    "id": "scramble-H2-11",
    "passageId": "passage-H2_2-1",
    "grade": "H2",
    "title": "군중의 지혜와 독립성 조건",
    "grammarPoint": "조건 접속사 Only when + S + V & 주절 도치",
    "ko": "개인들이 독립적으로 판단할 때에만 집단 지성은 전문가 개인의 예측 정확도를 능가한다.",
    "en": "Only when individuals make independent judgments does collective intelligence surpass the accuracy of individual experts.",
    "words": [
      "Only",
      "when",
      "individuals",
      "make",
      "independent",
      "judgments",
      "does",
      "collective",
      "intelligence",
      "surpass",
      "the",
      "accuracy",
      "of",
      "individual",
      "experts."
    ],
    "distractors": [
      "do",
      "surpasses"
    ],
    "hint": "Only when 부사절이 문두에 올 때 주절이 does collective intelligence surpass로 도치되는 규칙을 적용하세요."
  },
  {
    "id": "scramble-H2-12",
    "passageId": "passage-H2_2-2",
    "grade": "H2",
    "title": "감정 지능과 위기 리더십",
    "grammarPoint": "현재분사 수식 leaders displaying & 동사 foster",
    "ko": "탁월한 감정 지능을 발휘하는 리더들은 격변의 시기에도 팀원들의 확고한 심리적 안전감을 길러낸다.",
    "en": "Leaders displaying high emotional intelligence foster psychological safety among team members during turbulent times.",
    "words": [
      "Leaders",
      "displaying",
      "high",
      "emotional",
      "intelligence",
      "foster",
      "psychological",
      "safety",
      "among",
      "team",
      "members",
      "during",
      "turbulent",
      "times."
    ],
    "distractors": [
      "fosters",
      "displayed"
    ],
    "hint": "복수 주어 Leaders displaying...에 따른 복수 본동사 foster를 올바르게 배치하세요."
  },
  {
    "id": "scramble-H2-13",
    "passageId": "passage-H2_2-3",
    "grade": "H2",
    "title": "미세플라스틱의 생물농축",
    "grammarPoint": "시간/비례 접속사 As + 절 & 비교급 progressively higher",
    "ko": "미세플라스틱 입자가 먹이사슬 상위로 이동할수록 최상위 포식자의 조직 내 농도는 점진적으로 높아진다.",
    "en": "As microplastics ascend the marine food web, concentrations in apex predators become progressively higher.",
    "words": [
      "As",
      "microplastics",
      "ascend",
      "the",
      "marine",
      "food",
      "web,",
      "concentrations",
      "in",
      "apex",
      "predators",
      "become",
      "progressively",
      "higher."
    ],
    "distractors": [
      "ascends",
      "becoming"
    ],
    "hint": "비례 접속사 As 절 뒤에 concentrations in apex predators become progressively higher를 완성하세요."
  },
  {
    "id": "scramble-H2-14",
    "passageId": "passage-H2_2-4",
    "grade": "H2",
    "title": "선택의 역설과 결정 피로",
    "grammarPoint": "The + 비교급, the + 비교급 구문",
    "ko": "소비자에게 주어지는 선택지가 많아질수록 결정을 내린 후 경험하는 후회는 더 커진다.",
    "en": "The more options consumers are presented with, the greater the post-purchase regret they inevitably experience.",
    "words": [
      "The",
      "more",
      "options",
      "consumers",
      "are",
      "presented",
      "with,",
      "the",
      "greater",
      "the",
      "post-purchase",
      "regret",
      "they",
      "inevitably",
      "experience."
    ],
    "distractors": [
      "The most",
      "greater than"
    ],
    "hint": "The more options S+V ..., the greater the regret S+V ... 더비교급 더비교급 구문을 작성하세요."
  },
  {
    "id": "scramble-H2-15",
    "passageId": "passage-H2_2-5",
    "grade": "H2",
    "title": "사피어-워프 가설과 언어",
    "grammarPoint": "동격 접속사 that & 5형식 shape how people navigate",
    "ko": "언어적 범주가 인간의 공간 인지와 시각적 식별 능력을 결정한다는 가설은 여전히 열띤 논쟁을 촉발한다.",
    "en": "The hypothesis that linguistic categories shape spatial perception continues to trigger heated scientific debates.",
    "words": [
      "The",
      "hypothesis",
      "that",
      "linguistic",
      "categories",
      "shape",
      "spatial",
      "perception",
      "continues",
      "to",
      "trigger",
      "heated",
      "scientific",
      "debates."
    ],
    "distractors": [
      "shapes",
      "continue"
    ],
    "hint": "The hypothesis that linguistic categories shape spatial perception 동격절 뒤에 단수 동사 continues to trigger를 연결하세요."
  },
  {
    "id": "scramble-H2-16",
    "passageId": "passage-H2_2-6",
    "grade": "H2",
    "title": "유전자 편집과 생명 윤리",
    "grammarPoint": "목적격 관계대명사 생략 & 동사 raise ethical concerns",
    "ko": "인간 생식세포 유전자 변형의 영구성은 미래 세대의 동의 없이 그들의 삶을 규정한다는 윤리적 우려를 낳는다.",
    "en": "The permanence of germline editing raises profound concerns about modifying future generations without their consent.",
    "words": [
      "The",
      "permanence",
      "of",
      "germline",
      "editing",
      "raises",
      "profound",
      "concerns",
      "about",
      "modifying",
      "future",
      "generations",
      "without",
      "their",
      "consent."
    ],
    "distractors": [
      "raise",
      "modified"
    ],
    "hint": "단수 주어 The permanence of germline editing 뒤에 단수 동사 raises profound concerns...를 완성하세요."
  },
  {
    "id": "scramble-H2-17",
    "passageId": "passage-H2_2-7",
    "grade": "H2",
    "title": "플라시보 효과의 신경학적 기전",
    "grammarPoint": "동명사 주어 Expecting + 목적어 & 동사 triggers",
    "ko": "치료에 대한 긍정적 결과를 기대하는 것은 뇌에서 실제 엔도르핀 방출을 촉발하여 통증을 줄여준다.",
    "en": "Expecting positive therapeutic outcomes triggers endogenous endorphin release in the brain, mitigating physical pain.",
    "words": [
      "Expecting",
      "positive",
      "therapeutic",
      "outcomes",
      "triggers",
      "endogenous",
      "endorphin",
      "release",
      "in",
      "the",
      "brain,",
      "mitigating",
      "physical",
      "pain."
    ],
    "distractors": [
      "trigger",
      "mitigated"
    ],
    "hint": "동명사 주어 Expecting...에 맞추어 단수 동사 triggers를 쓰고 능동 분사구문 mitigating physical pain을 결합하세요."
  },
  {
    "id": "scramble-H2-18",
    "passageId": "passage-H2_2-8",
    "grade": "H2",
    "title": "죄수의 딜레마와 협력의 진화",
    "grammarPoint": "조건 부사절 Provided that & 동사 outcompete",
    "ko": "상호작용이 반복되는 한, 상호 호혜성을 바탕으로 한 협력 전략은 배신을 일삼는 이기주의를 압도한다.",
    "en": "Provided that interactions are repeated, cooperative reciprocity consistently outcompetes unprovoked defection.",
    "words": [
      "Provided",
      "that",
      "interactions",
      "are",
      "repeated,",
      "cooperative",
      "reciprocity",
      "consistently",
      "outcompetes",
      "unprovoked",
      "defection."
    ],
    "distractors": [
      "outcompete",
      "providing"
    ],
    "hint": "조건 접속사 Provided that interactions are repeated 뒤에 단수 주어 cooperative reciprocity와 outcompetes를 완성하세요."
  },
  {
    "id": "scramble-H2-19",
    "passageId": "passage-H2_2-9",
    "grade": "H2",
    "title": "디지털 인터페이스의 다크 패턴",
    "grammarPoint": "과거분사 수식 designed to & 5형식 coerce users into -ing",
    "ko": "구독 취소를 의도적으로 복잡하게 만든 기만적인 인터페이스는 사용자들이 원치 않는 비용을 결제하도록 유도한다.",
    "en": "Deceptive user interfaces designed to complicate cancellation coerce consumers into paying unwanted recurring fees.",
    "words": [
      "Deceptive",
      "user",
      "interfaces",
      "designed",
      "to",
      "complicate",
      "cancellation",
      "coerce",
      "consumers",
      "into",
      "paying",
      "unwanted",
      "recurring",
      "fees."
    ],
    "distractors": [
      "coerces",
      "designing"
    ],
    "hint": "복수 주어 Deceptive user interfaces 뒤에 designed to complicate cancellation 수식어를 두고 복수 동사 coerce를 배치하세요."
  },
  {
    "id": "scramble-H2-20",
    "passageId": "passage-H2_2-10",
    "grade": "H2",
    "title": "기후 임계점과 비가역적 되먹임",
    "grammarPoint": "혼합가정법 또는 조건부사절 Once + S + V",
    "ko": "영구동토층이 해빙되어 메탄이 방출되면, 지구 온난화는 인간의 통제를 벗어나 자립적인 가속 상태로 진입한다.",
    "en": "Once permafrost thaws and releases methane, climate warming enters an irreversible, self-reinforcing acceleration.",
    "words": [
      "Once",
      "permafrost",
      "thaws",
      "and",
      "releases",
      "methane,",
      "climate",
      "warming",
      "enters",
      "an",
      "irreversible,",
      "self-reinforcing",
      "acceleration."
    ],
    "distractors": [
      "thaw",
      "entering"
    ],
    "hint": "접속사 Once permafrost thaws and releases methane 뒤에 단수 주어 climate warming enters...를 완성하세요."
  },
  {
    "id": "scramble-CSAT-1",
    "passageId": "passage-CSAT_B-1",
    "grade": "CSAT",
    "title": "알고리즘 최적화의 그늘 (함축의미)",
    "grammarPoint": "부정어 도치 & 상관접속사 but rather",
    "ko": "기술 시스템의 극단적 최적화는 안전성을 보장하기는커녕 예기치 못한 교란에 맞서는 시스템의 탄력성을 거세한다.",
    "en": "Extreme technological optimization does not guarantee safety, but rather eradicates systemic resilience against unforeseen disturbances.",
    "words": [
      "Extreme",
      "technological",
      "optimization",
      "does",
      "not",
      "guarantee",
      "safety,",
      "but",
      "rather",
      "eradicates",
      "systemic",
      "resilience",
      "against",
      "unforeseen",
      "disturbances."
    ],
    "distractors": [
      "eradicating",
      "guarantees"
    ],
    "hint": "단수 주어 Extreme technological optimization에 맞추어 does not guarantee safety, but rather eradicates... 대조 구문을 작성하세요."
  },
  {
    "id": "scramble-CSAT-2",
    "passageId": "passage-CSAT_B-2",
    "grade": "CSAT",
    "title": "과학 담화의 구문 일관성 (어법)",
    "grammarPoint": "명사화 구문 Nominalization & 수동태 was constructed",
    "ko": "연구 논문에서 수동태와 명사화의 빈번한 활용은 저자의 주관성을 배제하고 보편적 객관성의 인상을 부여한다.",
    "en": "Frequent deployment of passive constructions and nominalization confers an impression of universal objectivity while sidelining authorial subjectivity.",
    "words": [
      "Frequent",
      "deployment",
      "of",
      "passive",
      "constructions",
      "and",
      "nominalization",
      "confers",
      "an",
      "impression",
      "of",
      "universal",
      "objectivity",
      "while",
      "sidelining",
      "authorial",
      "subjectivity."
    ],
    "distractors": [
      "confer",
      "sidelined"
    ],
    "hint": "단수 주어 Frequent deployment에 맞추어 단수 동사 confers를 쓰고 while sidelining... 분사절을 연결하세요."
  },
  {
    "id": "scramble-CSAT-3",
    "passageId": "passage-CSAT_B-3",
    "grade": "CSAT",
    "title": "주관적 효용과 가치의 탄력성 (어휘)",
    "grammarPoint": "관계대명사 what절 주어 & 동사 reflect",
    "ko": "상품에 매겨지는 가격은 객관적인 생산 투입량이 아니라 소비자가 주관적으로 인지하는 한계 효용을 반영한다.",
    "en": "What determines market price reflects not tangible production expenditures but subjective appraisals of marginal utility.",
    "words": [
      "What",
      "determines",
      "market",
      "price",
      "reflects",
      "not",
      "tangible",
      "production",
      "expenditures",
      "but",
      "subjective",
      "appraisals",
      "of",
      "marginal",
      "utility."
    ],
    "distractors": [
      "reflecting",
      "tangibly"
    ],
    "hint": "관계대명사 명사절 What determines market price가 단수 주어이므로 본동사는 reflects가 됩니다."
  },
  {
    "id": "scramble-CSAT-4",
    "passageId": "passage-CSAT_B-4",
    "grade": "CSAT",
    "title": "문화적 래칫 효과와 지식 전승 (대의파악)",
    "grammarPoint": "전치사 + 관계대명사 within which & 조동사 can build",
    "ko": "문화적 래칫 효과는 각 세대가 선대의 성취를 잃지 않고 수정하여 누적할 수 있는 토대를 제공한다.",
    "en": "The cultural ratchet mechanism furnishes a stable scaffold within which succeeding generations can cumulative modify ancestral discoveries.",
    "words": [
      "The",
      "cultural",
      "ratchet",
      "mechanism",
      "furnishes",
      "a",
      "stable",
      "scaffold",
      "within",
      "which",
      "succeeding",
      "generations",
      "can",
      "cumulative",
      "modify",
      "ancestral",
      "discoveries."
    ],
    "distractors": [
      "furnish",
      "which"
    ],
    "hint": "within which 전치사+관계대명사 뒤에 완전한 문장 succeeding generations can modify...를 배치하세요."
  },
  {
    "id": "scramble-CSAT-5",
    "passageId": "passage-CSAT_B-5",
    "grade": "CSAT",
    "title": "인식론적 중립성의 가면 (함축의미)",
    "grammarPoint": "삽입절 & 형용사구 수식 inextricably tied to",
    "ko": "모든 과학적 데이터는 그것이 아무리 순수해 보일지라도 이미 특정 이론적 전제에 종속되어 있다.",
    "en": "All scientific observation, however immaculate it appears, remains inextricably tied to preexisting conceptual paradigms.",
    "words": [
      "All",
      "scientific",
      "observation,",
      "however",
      "immaculate",
      "it",
      "appears,",
      "remains",
      "inextricably",
      "tied",
      "to",
      "preexisting",
      "conceptual",
      "paradigms."
    ],
    "distractors": [
      "remain",
      "immaculately"
    ],
    "hint": "however immaculate it appears 복합관계부사 양보 삽입절을 주어와 본동사 remains 사이에 위치시키세요."
  },
  {
    "id": "scramble-CSAT-6",
    "passageId": "passage-CSAT_B-6",
    "grade": "CSAT",
    "title": "단일 품종 대량 재배의 취약성 (어휘)",
    "grammarPoint": "현재분사 능동 구문 & 동사 render + O + O.C(형용사)",
    "ko": "농업의 유전적 균일성은 단기 수확량을 끌어올리지만, 작물 전체를 새로운 병원체에 무방비로 노출시킨다.",
    "en": "Genetic uniformity elevates short-term agricultural yields while rendering entire ecosystems exceptionally vulnerable to novel pathogens.",
    "words": [
      "Genetic",
      "uniformity",
      "elevates",
      "short-term",
      "agricultural",
      "yields",
      "while",
      "rendering",
      "entire",
      "ecosystems",
      "exceptionally",
      "vulnerable",
      "to",
      "novel",
      "pathogens."
    ],
    "distractors": [
      "vulnerably",
      "render"
    ],
    "hint": "rendering entire ecosystems vulnerable 5형식 목적격 보어 형용사 vulnerable에 유의하세요."
  },
  {
    "id": "scramble-CSAT-7",
    "passageId": "passage-CSAT_B-7",
    "grade": "CSAT",
    "title": "자연어 체계의 구조적 불완전성 (어법)",
    "grammarPoint": "상관접속사 neither A nor B & 단수 수일치",
    "ko": "자연어의 고유한 맥락 의존성은 완벽한 수학적 형식화도 절대적인 논리적 무결성도 허용하지 않는다.",
    "en": "Inherent contextuality in natural language permits neither absolute mathematical formalization nor unyielding deterministic precision.",
    "words": [
      "Inherent",
      "contextuality",
      "in",
      "natural",
      "language",
      "permits",
      "neither",
      "absolute",
      "mathematical",
      "formalization",
      "nor",
      "unyielding",
      "deterministic",
      "precision."
    ],
    "distractors": [
      "permit",
      "or"
    ],
    "hint": "neither A nor B 상관접속사 구조(neither absolute mathematical formalization nor unyielding...)를 적용하세요."
  },
  {
    "id": "scramble-CSAT-8",
    "passageId": "passage-CSAT_B-8",
    "grade": "CSAT",
    "title": "집단 기억의 가소성 (제목)",
    "grammarPoint": "It is ~ rather than B 구문 & 동사 reshape",
    "ko": "역사적 서사는 과거의 객관적 기록이라기보다는 현재의 정치적 열망에 의해 끊임없이 재구성되는 화석이다.",
    "en": "Historical narrative represents a continuous reconstruction dictated by present political imperatives rather than a static fossil.",
    "words": [
      "Historical",
      "narrative",
      "represents",
      "a",
      "continuous",
      "reconstruction",
      "dictated",
      "by",
      "present",
      "political",
      "imperatives",
      "rather",
      "than",
      "a",
      "static",
      "fossil."
    ],
    "distractors": [
      "dictating",
      "represent"
    ],
    "hint": "과거분사 dictated by present political imperatives rather than a static fossil 수식 구조를 완성하세요."
  },
  {
    "id": "scramble-CSAT-9",
    "passageId": "passage-CSAT_B-9",
    "grade": "CSAT",
    "title": "투명성의 역설과 불신 (함축의미)",
    "grammarPoint": "가주어-진주어 & 동사 breed cynicism",
    "ko": "맥락이 결여된 완전한 정보의 폭로는 조직 구성원 간의 신뢰를 구축하기보다는 방어적 냉소를 낳을 수 있다.",
    "en": "Disclosing unmediated institutional data without interpretive context tends to breed defensive cynicism rather than cultivate mutual trust.",
    "words": [
      "Disclosing",
      "unmediated",
      "institutional",
      "data",
      "without",
      "interpretive",
      "context",
      "tends",
      "to",
      "breed",
      "defensive",
      "cynicism",
      "rather",
      "than",
      "cultivate",
      "mutual",
      "trust."
    ],
    "distractors": [
      "tend",
      "breeding"
    ],
    "hint": "동명사 주어 Disclosing...에 맞추어 단수 동사 tends to breed A rather than cultivate B를 작성하세요."
  },
  {
    "id": "scramble-CSAT-10",
    "passageId": "passage-CSAT_B-10",
    "grade": "CSAT",
    "title": "마찰 없는 UX와 인지적 정체 (어휘)",
    "grammarPoint": "전치사구 By eliminating & 동사 bypass analytical deliberation",
    "ko": "사용자 인터페이스에서 인지적 마찰을 완전히 제거함으로써 플랫폼은 사용자의 분석적 숙고를 우회하도록 유도한다.",
    "en": "By eliminating cognitive friction from digital interfaces, applications induce users to bypass critical deliberation.",
    "words": [
      "By",
      "eliminating",
      "cognitive",
      "friction",
      "from",
      "digital",
      "interfaces,",
      "applications",
      "induce",
      "users",
      "to",
      "bypass",
      "critical",
      "deliberation."
    ],
    "distractors": [
      "bypassing",
      "eliminated"
    ],
    "hint": "5형식 induce users to bypass critical deliberation 구문 구조에 유의하세요."
  },
  {
    "id": "scramble-CSAT-11",
    "passageId": "passage-CSAT_R-1",
    "grade": "CSAT",
    "title": "소극적 수용 능력과 예술 창작 (수능 31번 빈칸)",
    "grammarPoint": "전치사 without + 동명사 reaching for & 동사 reside",
    "ko": "진정한 예술적 독창성은 사실과 이성에 성급히 매달리지 않고 불확실성과 신비를 견뎌내는 능력에 깃들어 있다.",
    "en": "True artistic originality resides in the capacity to sustain uncertainties without any irritable reaching after fact and reason.",
    "words": [
      "True",
      "artistic",
      "originality",
      "resides",
      "in",
      "the",
      "capacity",
      "to",
      "sustain",
      "uncertainties",
      "without",
      "any",
      "irritable",
      "reaching",
      "after",
      "fact",
      "and",
      "reason."
    ],
    "distractors": [
      "reside",
      "sustained"
    ],
    "hint": "단수 주어 True artistic originality에 따른 단수 동사 resides in the capacity to sustain...를 완성하세요."
  },
  {
    "id": "scramble-CSAT-12",
    "passageId": "passage-CSAT_R-2",
    "grade": "CSAT",
    "title": "기생자와 숙주의 공진화 (수능 36번 순서)",
    "grammarPoint": "분사구문 & 동사 compel each other to adapt",
    "ko": "기생자와 숙주는 서로에게 적응 압력을 가하며 어느 한쪽도 결정적 승리를 거두지 못하는 공진화의 군비 경쟁을 지속한다.",
    "en": "Parasites and hosts exert reciprocal selection pressures, maintaining an evolutionary stalemate where neither party secures absolute dominance.",
    "words": [
      "Parasites",
      "and",
      "hosts",
      "exert",
      "reciprocal",
      "selection",
      "pressures,",
      "maintaining",
      "an",
      "evolutionary",
      "stalemate",
      "where",
      "neither",
      "party",
      "secures",
      "absolute",
      "dominance."
    ],
    "distractors": [
      "maintained",
      "exerts"
    ],
    "hint": "maintaining an evolutionary stalemate where neither party secures absolute dominance 관계부사절을 연결하세요."
  },
  {
    "id": "scramble-CSAT-13",
    "passageId": "passage-CSAT_R-3",
    "grade": "CSAT",
    "title": "정보 비대칭과 역선택 (수능 32번 빈칸)",
    "grammarPoint": "시간/조건 부사절 When + 절 & 수동태 are driven out",
    "ko": "구매자가 상품의 실제 품질을 판별할 수 없을 때, 정직한 판매자는 불량품에 의해 시장에서 축출당한다.",
    "en": "When buyers cannot ascertain authentic quality, superior goods are inevitably driven out of the market by inferior lemons.",
    "words": [
      "When",
      "buyers",
      "cannot",
      "ascertain",
      "authentic",
      "quality,",
      "superior",
      "goods",
      "are",
      "inevitably",
      "driven",
      "out",
      "of",
      "the",
      "market",
      "by",
      "inferior",
      "lemons."
    ],
    "distractors": [
      "driving",
      "is driven"
    ],
    "hint": "수동태 are inevitably driven out of the market by inferior lemons에 유의하세요."
  },
  {
    "id": "scramble-CSAT-14",
    "passageId": "passage-CSAT_R-4",
    "grade": "CSAT",
    "title": "천문 관측소의 위도별 분산 (수능 37번 순서)",
    "grammarPoint": "전치사구 Across disparate latitudes & 5형식 enable + O + to monitor",
    "ko": "서로 다른 위도에 천문대를 분산 배치함으로써 과학자들은 지구 자전의 공백 없이 우주 현상을 지속 관측한다.",
    "en": "Distributing astronomical observatories across disparate latitudes enables researchers to continuously monitor cosmic phenomena without rotational interruptions.",
    "words": [
      "Distributing",
      "astronomical",
      "observatories",
      "across",
      "disparate",
      "latitudes",
      "enables",
      "researchers",
      "to",
      "continuously",
      "monitor",
      "cosmic",
      "phenomena",
      "without",
      "rotational",
      "interruptions."
    ],
    "distractors": [
      "enable",
      "monitoring"
    ],
    "hint": "동명사 주어 Distributing...이 단수이므로 본동사는 enables이며 목적격 보어는 to continuously monitor입니다."
  },
  {
    "id": "scramble-CSAT-15",
    "passageId": "passage-CSAT_R-5",
    "grade": "CSAT",
    "title": "설명 깊이의 착각 (수능 31번 빈칸)",
    "grammarPoint": "수동태 are asked to explain & 형용사 보어 become moderate",
    "ko": "복잡한 정책의 구체적 메커니즘을 설명하도록 요구받을 때, 사람들은 자신의 무지를 깨닫고 태도가 온건해진다.",
    "en": "When prompted to articulate causal mechanisms step by step, individuals confront their ignorance and moderate their extreme convictions.",
    "words": [
      "When",
      "prompted",
      "to",
      "articulate",
      "causal",
      "mechanisms",
      "step",
      "by",
      "step,",
      "individuals",
      "confront",
      "their",
      "ignorance",
      "and",
      "moderate",
      "their",
      "extreme",
      "convictions."
    ],
    "distractors": [
      "prompting",
      "moderates"
    ],
    "hint": "접속사가 남아있는 분사구문 When prompted to articulate... 뒤에 주절을 병렬로 연결하세요."
  },
  {
    "id": "scramble-CSAT-16",
    "passageId": "passage-CSAT_R-6",
    "grade": "CSAT",
    "title": "구름 미세물리학과 비평형 (수능 36번 순서)",
    "grammarPoint": "수동태 is governed by & 복합 명사구",
    "ko": "구름 방울의 형성은 단순한 거시적 기압이 아니라 응결핵 표면에서의 열역학적 불균형에 의해 지배된다.",
    "en": "Cloud droplet nucleation is governed not merely by ambient pressure but by microscopic thermodynamic disequilibrium at aerosol interfaces.",
    "words": [
      "Cloud",
      "droplet",
      "nucleation",
      "is",
      "governed",
      "not",
      "merely",
      "by",
      "ambient",
      "pressure",
      "but",
      "by",
      "microscopic",
      "thermodynamic",
      "disequilibrium",
      "at",
      "aerosol",
      "interfaces."
    ],
    "distractors": [
      "governing",
      "govern"
    ],
    "hint": "not merely by A but by B 수동태 병렬 구조(is governed not merely by ambient pressure but by...)를 완성하세요."
  },
  {
    "id": "scramble-CSAT-17",
    "passageId": "passage-CSAT_R-7",
    "grade": "CSAT",
    "title": "암묵지와 성문화의 한계 (수능 32번 빈칸)",
    "grammarPoint": "관계대명사 that defies codification & 동사 reside",
    "ko": "숙련된 장인의 신체화된 감각은 기호적 설명이나 매뉴얼로 환원되기를 거부하는 암묵지에 속한다.",
    "en": "The embodied intuitive expertise of master craftsmen constitutes tacit knowledge that defies exhaustive linguistic codification.",
    "words": [
      "The",
      "embodied",
      "intuitive",
      "expertise",
      "of",
      "master",
      "craftsmen",
      "constitutes",
      "tacit",
      "knowledge",
      "that",
      "defies",
      "exhaustive",
      "linguistic",
      "codification."
    ],
    "distractors": [
      "constitute",
      "defying"
    ],
    "hint": "단수 주어 The embodied intuitive expertise에 일치하는 단수 동사 constitutes와 관계대명사 절을 연결하세요."
  },
  {
    "id": "scramble-CSAT-18",
    "passageId": "passage-CSAT_R-8",
    "grade": "CSAT",
    "title": "민족음악학과 문화적 청각 (수능 37번 순서)",
    "grammarPoint": "Rather than + 동명사구 & 동사 reflect",
    "ko": "음악적 음계는 수학적 물리법칙의 순수한 결과물이 아니라 특정 사회의 의례와 우주관을 반영하는 문화적 구성물이다.",
    "en": "Musical tunings represent cultural artifacts embodying communal cosmologies rather than pure acoustic inevitabilities of physics.",
    "words": [
      "Musical",
      "tunings",
      "represent",
      "cultural",
      "artifacts",
      "embodying",
      "communal",
      "cosmologies",
      "rather",
      "than",
      "pure",
      "acoustic",
      "inevitabilities",
      "of",
      "physics."
    ],
    "distractors": [
      "represented",
      "embody"
    ],
    "hint": "represent cultural artifacts embodying communal cosmologies rather than... 대조 구문에 유의하세요."
  },
  {
    "id": "scramble-CSAT-19",
    "passageId": "passage-CSAT_R-9",
    "grade": "CSAT",
    "title": "쌍곡 할인과 시간적 비합리성 (수능 31번 빈칸)",
    "grammarPoint": "사역동사 make + O + 원형 & 형용사 보어 irrational",
    "ko": "미래의 보상을 기하급수적으로 깎아내리는 쌍곡 할인은 인간이 장기적 이익에 반하는 결정을 내리도록 만든다.",
    "en": "Hyperbolic discounting of distant rewards leads humans to make decisions that subvert their own long-term interests.",
    "words": [
      "Hyperbolic",
      "discounting",
      "of",
      "distant",
      "rewards",
      "leads",
      "humans",
      "to",
      "make",
      "decisions",
      "that",
      "subvert",
      "their",
      "own",
      "long-term",
      "interests."
    ],
    "distractors": [
      "lead",
      "subverting"
    ],
    "hint": "leads humans to make decisions that subvert their own long-term interests 5형식 문형을 완성하세요."
  },
  {
    "id": "scramble-CSAT-20",
    "passageId": "passage-CSAT_R-10",
    "grade": "CSAT",
    "title": "형태학적 절충과 진화 제약 (수능 36번 순서)",
    "grammarPoint": "동명사 주어 Maximizing + 목적어 & 동사 entails",
    "ko": "하나의 해부학적 기관을 극대화하는 것은 다른 필수 기능에 할당될 에너지 자원의 불가피한 희생을 수반한다.",
    "en": "Maximizing one morphological adaptation inevitably entails trade-offs that constrain the optimization of other physiological functions.",
    "words": [
      "Maximizing",
      "one",
      "morphological",
      "adaptation",
      "inevitably",
      "entails",
      "trade-offs",
      "that",
      "constrain",
      "the",
      "optimization",
      "of",
      "other",
      "physiological",
      "functions."
    ],
    "distractors": [
      "entail",
      "constraining"
    ],
    "hint": "동명사 주어 Maximizing...이 단수이므로 본동사는 entails이며, 선행사 trade-offs를 constrain 절이 수식합니다."
  },
  {
    "id": "scramble-CSAT-21",
    "passageId": "passage-CSAT_K-1",
    "grade": "CSAT",
    "title": "인식론적 겸손과 과학적 객관성 (수능 34번 킬러)",
    "grammarPoint": "동사 hinge not on A but on B & 동명사",
    "ko": "과학적 객관성은 불변의 교리를 고수하는 데 있지 않고 오류 가능성을 인정하며 가설을 수정하려는 태도에 달려 있다.",
    "en": "Scientific objectivity hinges not on clinging to immutable dogmas but on embracing fallibility and revising provisional hypotheses.",
    "words": [
      "Scientific",
      "objectivity",
      "hinges",
      "not",
      "on",
      "clinging",
      "to",
      "immutable",
      "dogmas",
      "but",
      "on",
      "embracing",
      "fallibility",
      "and",
      "revising",
      "provisional",
      "hypotheses."
    ],
    "distractors": [
      "hinge",
      "cling"
    ],
    "hint": "hinges not on clinging to A but on embracing B 병렬 전치사구 구조를 완성하세요."
  },
  {
    "id": "scramble-CSAT-22",
    "passageId": "passage-CSAT_K-2",
    "grade": "CSAT",
    "title": "응집물질의 양자 상전이 (수능 38번 킬러)",
    "grammarPoint": "수동태 is driven by & 분사구문 triggering",
    "ko": "절대영도에서의 양자 상전이는 열적 요동이 아니라 순수 양자 요동에 의해 유도되어 물질의 거시적 성질을 급변시킨다.",
    "en": "Quantum phase transitions at absolute zero are driven exclusively by quantum fluctuations, abruptly transforming macroscopic material properties.",
    "words": [
      "Quantum",
      "phase",
      "transitions",
      "at",
      "absolute",
      "zero",
      "are",
      "driven",
      "exclusively",
      "by",
      "quantum",
      "fluctuations,",
      "abruptly",
      "transforming",
      "macroscopic",
      "material",
      "properties."
    ],
    "distractors": [
      "is driven",
      "transformed"
    ],
    "hint": "복수 주어 transitions에 맞추어 are driven...을 쓰고 능동 분사구문 abruptly transforming...을 연결하세요."
  },
  {
    "id": "scramble-CSAT-23",
    "passageId": "passage-CSAT_K-3",
    "grade": "CSAT",
    "title": "해석학적 순환 (수능 33번 킬러)",
    "grammarPoint": "복합관계사절 & 수동태 cannot be comprehended",
    "ko": "텍스트의 부분은 전체 맥락 속에서만 이해될 수 있고, 전체는 개별 부분들의 집적을 통해서만 비로소 조명된다.",
    "en": "An individual textual element cannot be comprehended in isolation, nor can the overarching whole be illuminated without its constituent parts.",
    "words": [
      "An",
      "individual",
      "textual",
      "element",
      "cannot",
      "be",
      "comprehended",
      "in",
      "isolation,",
      "nor",
      "can",
      "the",
      "overarching",
      "whole",
      "be",
      "illuminated",
      "without",
      "its",
      "constituent",
      "parts."
    ],
    "distractors": [
      "comprehending",
      "neither"
    ],
    "hint": "nor 뒤에 조동사 can + 주어 the overarching whole + be illuminated 도치 구조가 이어짐에 주의하세요."
  },
  {
    "id": "scramble-CSAT-24",
    "passageId": "passage-CSAT_K-4",
    "grade": "CSAT",
    "title": "전두엽의 하향식 조절 (수능 39번 킬러)",
    "grammarPoint": "Rather than + 동명사 & 5형식 orchestrate + O + to prioritize",
    "ko": "뇌는 감각 자극을 수동적으로 등록하는 대신, 과거의 맥락에 맞추어 특정 신호를 선택적으로 증폭하도록 감각 피질을 조율한다.",
    "en": "Rather than passively registering sensory inputs, the prefrontal cortex actively modulates sensory cortices to prioritize task-relevant signals.",
    "words": [
      "Rather",
      "than",
      "passively",
      "registering",
      "sensory",
      "inputs,",
      "the",
      "prefrontal",
      "cortex",
      "actively",
      "modulates",
      "sensory",
      "cortices",
      "to",
      "prioritize",
      "task-relevant",
      "signals."
    ],
    "distractors": [
      "registered",
      "modulate"
    ],
    "hint": "Rather than passively registering sensory inputs 전치사구 뒤에 단수 주어 the prefrontal cortex actively modulates...를 연결하세요."
  },
  {
    "id": "scramble-CSAT-25",
    "passageId": "passage-CSAT_K-5",
    "grade": "CSAT",
    "title": "언어적 통약불가능성 (수능 34번 킬러)",
    "grammarPoint": "동격 접속사 that & 5형식 preclude direct comparisons",
    "ko": "서로 다른 패러다임이 동일한 현상을 상호 번역 불가능한 언어로 기술한다는 사실은 이론 간의 직접적 환원을 배제한다.",
    "en": "The incommensurability of competing scientific paradigms precludes direct comparisons between theories that employ mutually untranslatable conceptual frameworks.",
    "words": [
      "The",
      "incommensurability",
      "of",
      "competing",
      "scientific",
      "paradigms",
      "precludes",
      "direct",
      "comparisons",
      "between",
      "theories",
      "that",
      "employ",
      "mutually",
      "untranslatable",
      "conceptual",
      "frameworks."
    ],
    "distractors": [
      "preclude",
      "comparing"
    ],
    "hint": "단수 주어 The incommensurability...에 따른 단수 동사 precludes direct comparisons between theories that employ...를 완성하세요."
  },
  {
    "id": "scramble-CSAT-26",
    "passageId": "passage-CSAT_K-6",
    "grade": "CSAT",
    "title": "비평형 열역학과 소산 구조 (수능 38번 킬러)",
    "grammarPoint": "전치사구 Far from equilibrium & 동사 generate",
    "ko": "열역학적 평형에서 멀리 떨어진 열린계는 지속적으로 엔트로피를 배출함으로써 자발적으로 고도의 질서를 생성한다.",
    "en": "Far from thermodynamic equilibrium, open dissipative structures spontaneously generate sophisticated internal order by continuously expelling entropy.",
    "words": [
      "Far",
      "from",
      "thermodynamic",
      "equilibrium,",
      "open",
      "dissipative",
      "structures",
      "spontaneously",
      "generate",
      "sophisticated",
      "internal",
      "order",
      "by",
      "continuously",
      "expelling",
      "entropy."
    ],
    "distractors": [
      "generates",
      "expelled"
    ],
    "hint": "복수 주어 open dissipative structures에 맞추어 복수 동사 generate를 쓰고 by continuously expelling entropy를 결합하세요."
  },
  {
    "id": "scramble-CSAT-27",
    "passageId": "passage-CSAT_K-7",
    "grade": "CSAT",
    "title": "현상학적 감각질과 설명 간극 (수능 33번 킬러)",
    "grammarPoint": "양보 접속사 No matter how exhaustive & 동사 leaves",
    "ko": "신경 생리학적 설명이 아무리 완벽할지라도, 그것은 물리적 신호가 어떻게 주관적 경험으로 전환되는지를 밝혀내지 못한다.",
    "en": "No matter how exhaustive a neurobiological account may be, it still leaves unbridged the explanatory gap regarding subjective qualia.",
    "words": [
      "No",
      "matter",
      "how",
      "exhaustive",
      "a",
      "neurobiological",
      "account",
      "may",
      "be,",
      "it",
      "still",
      "leaves",
      "unbridged",
      "the",
      "explanatory",
      "gap",
      "regarding",
      "subjective",
      "qualia."
    ],
    "distractors": [
      "exhaustively",
      "leave"
    ],
    "hint": "No matter how exhaustive a neurobiological account may be 양보절 뒤에 leaves unbridged the explanatory gap... 도치 목적어 구조에 유의하세요."
  },
  {
    "id": "scramble-CSAT-28",
    "passageId": "passage-CSAT_K-8",
    "grade": "CSAT",
    "title": "알고리즘 판옵티콘과 민주주의 (수능 39번 킬러)",
    "grammarPoint": "분사구문 & 동사 undermine democratic deliberation",
    "ko": "사용자의 정보 지평을 맞춤형 버블로 파편화함으로써, 알고리즘 통치는 공유된 공론장과 민주적 숙의의 기반을 침식시킨다.",
    "en": "By fragmenting public discourse into hyper-personalized bubbles, algorithmic governance steadily undermines the shared epistemological foundation of democracy.",
    "words": [
      "By",
      "fragmenting",
      "public",
      "discourse",
      "into",
      "hyper-personalized",
      "bubbles,",
      "algorithmic",
      "governance",
      "steadily",
      "undermines",
      "the",
      "shared",
      "epistemological",
      "foundation",
      "of",
      "democracy."
    ],
    "distractors": [
      "undermine",
      "fragmented"
    ],
    "hint": "단수 주어 algorithmic governance에 일치하는 단수 동사 undermines the shared epistemological foundation of democracy를 작성하세요."
  },
  {
    "id": "scramble-CSAT-29",
    "passageId": "passage-CSAT_K-9",
    "grade": "CSAT",
    "title": "칸트의 미적 무사심성 (수능 34번 킬러)",
    "grammarPoint": "Only through A can S + V 도치 구문",
    "ko": "실용적 소유욕을 완전히 내려놓고 순수한 형식 그 자체를 관조할 때에만 초월적인 미적 쾌감이 비로소 발생한다.",
    "en": "Only through disinterested contemplation devoid of possessive desire does the pure transcendental pleasure of aesthetic autonomy arise.",
    "words": [
      "Only",
      "through",
      "disinterested",
      "contemplation",
      "devoid",
      "of",
      "possessive",
      "desire",
      "does",
      "the",
      "pure",
      "transcendental",
      "pleasure",
      "of",
      "aesthetic",
      "autonomy",
      "arise."
    ],
    "distractors": [
      "arises",
      "do"
    ],
    "hint": "Only through... 전치사구가 문두에 올 때 does the pure transcendental pleasure ... arise로 도치되는 어순에 유의하세요."
  },
  {
    "id": "scramble-CSAT-30",
    "passageId": "passage-CSAT_K-10",
    "grade": "CSAT",
    "title": "바흐친의 다성악적 소설관 (수능 38번 킬러)",
    "grammarPoint": "동격 접속사 that & 수동태 is constructed not as A but as B",
    "ko": "바흐친은 소설이 작가의 독백적 지배가 아니라 서로 충돌하는 다층적 음성들의 대화주의적 공존으로 구축된다고 주장했다.",
    "en": "Bakhtin argued that the novel is structured not as a monologic monologue but as a polyphonic interplay of competing social voices.",
    "words": [
      "Bakhtin",
      "argued",
      "that",
      "the",
      "novel",
      "is",
      "structured",
      "not",
      "as",
      "a",
      "monologic",
      "monologue",
      "but",
      "as",
      "a",
      "polyphonic",
      "interplay",
      "of",
      "competing",
      "social",
      "voices."
    ],
    "distractors": [
      "structuring",
      "is structure"
    ],
    "hint": "is structured not as A but as B 상관접속사 병렬 구문(not as a monologic monologue but as a polyphonic interplay of...)을 완성하세요."
  }
];

if (typeof window !== "undefined") {
    window.SCRAMBLE_SENTENCES_DB = SCRAMBLE_SENTENCES_DB;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { SCRAMBLE_SENTENCES_DB };
}
