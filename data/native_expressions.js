/**
 * Veritas English - 원어민 실전 표현 & 뉘앙스 라이브러리 데이터
 * 1. 뉘앙스 마스터 (Nuance Distinction)
 * 2. 실전 콜로케이션 (Natural Collocations)
 * 3. 핵심 구동사 & 이디엄 (Phrasal Verbs & Idioms)
 * 4. 상황별 실전 다이얼로그 (Real-world Dialogues)
 */

const NATIVE_EXPRESSIONS = [
    // ------------------------------------------------------------------------
    // [1] 뉘앙스 마스터 (Nuance Distinction)
    // ------------------------------------------------------------------------
    {
        id: "nuance-1",
        category: "nuance",
        title: "Look vs. See vs. Watch",
        summary: "시선이 닿는 방식과 주의 집중도에 따른 결정적 차이",
        comparison: [
            {
                term: "See",
                meaning: "눈이 있어서 자연스럽게 보이다 (의도 없음)",
                tip: "시야에 들어오는 무의식적 시각 반응",
                example: "I saw a shooting star last night."
            },
            {
                term: "Look",
                meaning: "의도를 가지고 특정 방향을 쳐다보다",
                tip: "방향성이 핵심 (보통 look at과 함께 사용)",
                example: "Look at the whiteboard, please."
            },
            {
                term: "Watch",
                meaning: "움직이는 대상을 시간 들여 주의 깊게 지켜보다",
                tip: "영화, 스포츠, 아이들의 행동 관찰에 필수",
                example: "We watched the soccer finals together."
            }
        ],
        nativeTip: "💡 팁: 영화관(Cinema)에 갈 때는 'I'm going to see a movie', 집에서 TV나 넷플릭스를 볼 때는 'I'm watching a movie'를 더 자주 씁니다.",
        audioText: "See is natural vision, look is directing your eyes, and watch is observing motion over time."
    },
    {
        id: "nuance-2",
        category: "nuance",
        title: "Hear vs. Listen",
        summary: "소리가 들리는 것과 귀 기울여 듣는 것의 차이",
        comparison: [
            {
                term: "Hear",
                meaning: "귀가 열려 있어 소리가 저절로 들리다 (수동적)",
                tip: "의지와 상관없이 감지되는 청각",
                example: "Did you hear that strange noise outside?"
            },
            {
                term: "Listen",
                meaning: "의식적으로 집중해서 귀 기울여 듣다 (능동적)",
                tip: "대상의 내용에 집중할 때 (listen to)",
                example: "Listen carefully to the professor's instructions."
            }
        ],
        nativeTip: "💡 원어민 표현: 'Are you hearing me?'는 소리가 물리적으로 들리냐는 뜻이고, 'Are you listening to me?'는 내 말에 집중하고 있냐(경청)는 뜻입니다.",
        audioText: "Hear is passive perception, while listen is active attention."
    },
    {
        id: "nuance-3",
        category: "nuance",
        title: "Say vs. Tell vs. Speak vs. Talk",
        summary: "‘말하다’ 4형제의 어법과 문맥 차이 완벽 정복",
        comparison: [
            {
                term: "Say",
                meaning: "말한 ‘내용(Words)’ 그 자체에 초점",
                tip: "Say something / Say that S+V (듣는 사람이 뒤에 바로 오지 않음)",
                example: "What did he say to you?"
            },
            {
                term: "Tell",
                meaning: "정보나 지시를 ‘듣는 사람(Person)’에게 전달",
                tip: "Tell + 사람 + 내용 (Tell me the truth)",
                example: "She told her son a bedtime story."
            },
            {
                term: "Speak",
                meaning: "일방적인 발표, 공적 발언, 또는 구사 언어",
                tip: "Speak English / Speak at the conference",
                example: "Dr. Evans will speak at the commencement ceremony."
            },
            {
                term: "Talk",
                meaning: "양방향 대화(Conversing)나 잡담",
                tip: "Talk with / Talk about (상호 교류의 느낌)",
                example: "Let's talk over a cup of coffee."
            }
        ],
        nativeTip: "💡 규칙 암기: 'Tell me'(O), 'Say me'(X). Tell 뒤에는 반드시 대상(사람)이 바로 옵니다.",
        audioText: "Say focuses on words, tell needs a listener, speak is formal or linguistic, and talk is conversational."
    },
    {
        id: "nuance-4",
        category: "nuance",
        title: "Economic vs. Economical",
        summary: "비슷해 보이지만 뜻이 완전히 다른 형용사",
        comparison: [
            {
                term: "Economic",
                meaning: "경제의, 경제학에 관련된",
                tip: "국가 경제, 경제 정책, 경제 성장 등",
                example: "The country is experiencing rapid economic growth."
            },
            {
                term: "Economical",
                meaning: "알뜰한, 경제적인(절약되는), 가성비 좋은",
                tip: "Frugal, cost-effective, 돈/자원을 아끼는",
                example: "A hybrid car is very economical on fuel."
            }
        ],
        nativeTip: "💡 구별법: -al이 붙은 economical은 '알뜰한(al-tteul)'의 첫 글자 '알'을 연상하면 절대 헷갈리지 않습니다!",
        audioText: "Economic relates to the economy, while economical means thrifty or cost-effective."
    },
    {
        id: "nuance-5",
        category: "nuance",
        title: "Empathy vs. Sympathy",
        summary: "공감과 동정, 마음을 나누는 깊이의 차이",
        comparison: [
            {
                term: "Empathy",
                meaning: "감정이입, 상대방의 입장이 되어 느끼는 깊은 공감",
                tip: "‘I feel with you’ (상대의 신발을 신어보는 것)",
                example: "Great leaders possess high empathy toward their team members."
            },
            {
                term: "Sympathy",
                meaning: "동정, 연민, 안타깝게 여기는 마음",
                tip: "‘I feel for you’ (한 걸음 떨어져서 안타까워함)",
                example: "I express my deepest sympathy for your tragic loss."
            }
        ],
        nativeTip: "💡 영재 학술 팁: Empathy(감정이입)는 내면으로(em=in) 들어가는 것이고, Sympathy는 함께(sym=together) 아파해주는 것입니다.",
        audioText: "Empathy is feeling with someone, while sympathy is feeling for someone."
    },

    // ------------------------------------------------------------------------
    // [2] 실전 콜로케이션 (Natural Collocations)
    // ------------------------------------------------------------------------
    {
        id: "colloc-1",
        category: "collocation",
        title: "Take into account",
        summary: "‘~을 고려하다, 참작하다’ (Consider의 고품격 표현)",
        explanation: "의사결정 시 여러 변수나 상황을 계산에 넣는다는 뜻으로 아카데믹 라이팅과 비즈니스에서 필수입니다.",
        collocationPair: "take [something] into account = consider [something]",
        exampleEn: "We must take all unexpected variables into account before launching.",
        exampleKo: "우리는 출시하기 전에 모든 예상치 못한 변수들을 고려해야만 합니다.",
        nativeTip: "💡 동의어: take into consideration. 'I didn't take that into account'(그건 미처 계산에 못 넣었네) 형태로 일상에서도 자주 쓰입니다.",
        audioText: "We must take all unexpected variables into account before launching."
    },
    {
        id: "colloc-2",
        category: "collocation",
        title: "Make an effort",
        summary: "‘노력하다’ (do effort는 콩글리시!)",
        explanation: "영어에서는 노력(effort)을 do가 아니라 반드시 make와 짝지어 씁니다.",
        collocationPair: "make an effort / make every effort (전력을 다하다)",
        exampleEn: "Every student made a conscious effort to improve their academic focus.",
        exampleKo: "모든 학생들은 학업 집중도를 높이기 위해 의식적인 노력을 기울였다.",
        nativeTip: "💡 주의: 'I did a lot of effort'(X) -> 'I made a lot of effort'(O).",
        audioText: "Every student made a conscious effort to improve their academic focus."
    },
    {
        id: "colloc-3",
        category: "collocation",
        title: "Strike a balance",
        summary: "‘균형을 유지하다, 절충안을 찾다’",
        explanation: "양 극단 사이에서 적절한 균형점을 딱 찾아 맞춘다는 세련된 표현입니다.",
        collocationPair: "strike a balance between A and B",
        exampleEn: "Scholars must strike a balance between rigorous study and adequate rest.",
        exampleKo: "학자들은 엄격한 연구와 적절한 휴식 사이에서 균형을 잡아야 한다.",
        nativeTip: "💡 일상 응용: 'Work-life balance'(워라밸)를 잡는다고 할 때 항상 'strike a work-life balance'라고 말합니다.",
        audioText: "Scholars must strike a balance between rigorous study and adequate rest."
    },
    {
        id: "colloc-4",
        category: "collocation",
        title: "Bear in mind",
        summary: "‘명심하다, 마음에 새겨두다’",
        explanation: "Keep in mind와 같으며, 좀 더 진중하고 학구적인 뉘앙스를 풍깁니다.",
        collocationPair: "bear [something] in mind / bear in mind that S+V",
        exampleEn: "Bear in mind that consistency is far more powerful than sporadic intensity.",
        exampleKo: "어쩌다 한 번 쏟는 열정보다 꾸준함이 훨씬 강력하다는 점을 명심하라.",
        nativeTip: "💡 Bear는 '곰'이라는 명사 외에도 '품다, 지탱하다'라는 뜻의 동사로 쓰입니다.",
        audioText: "Bear in mind that consistency is far more powerful than sporadic intensity."
    },
    {
        id: "colloc-5",
        category: "collocation",
        title: "Catch someone off guard",
        summary: "‘허를 찌르다, 불시에 당황하게 만들다’",
        explanation: "경계(guard)를 푼 상태에서 깜짝 놀라게 하거나 예상치 못한 질문을 던졌을 때 씁니다.",
        collocationPair: "catch [someone] off guard",
        exampleEn: "His incisive question caught the entire panel off guard.",
        exampleKo: "그의 날카로운 질문은 패널 전체의 허를 찔렀다.",
        nativeTip: "💡 회화 꿀팁: 'You caught me off guard!' (아이 깜짝이야! 미처 생각 못 했어!)",
        audioText: "His incisive question caught the entire panel off guard."
    },
    {
        id: "colloc-6",
        category: "collocation",
        title: "Come to terms with",
        summary: "‘(힘든 현실을) 받아들이다, 감내하다’",
        explanation: "처음에는 받아들이기 힘들었던 결과나 사실을 타협하고 인정하는 성숙한 태도를 나타냅니다.",
        collocationPair: "come to terms with [reality/loss/fact]",
        exampleEn: "She finally came to terms with the setback and began studying again.",
        exampleKo: "그녀는 마침내 좌절을 받아들이고 다시 공부를 시작했다.",
        nativeTip: "💡 시험 및 에세이 단골: accept의 심도 있는 대체 표현입니다.",
        audioText: "She finally came to terms with the setback and began studying again."
    },
    {
        id: "colloc-7",
        category: "collocation",
        title: "Pay attention to",
        summary: "‘~에 주의를 기울이다, 주목하다’",
        explanation: "give attention보다 훨씬 원어민스럽고 자연스러운 필수 연어 결합입니다.",
        collocationPair: "pay attention to [details / speaker]",
        exampleEn: "Always pay close attention to nuances in context when reading.",
        exampleKo: "독해할 때는 언제나 문맥 속 미묘한 뉘앙스에 세심한 주의를 기울여라.",
        nativeTip: "💡 'Pay'는 돈을 지불하는 것뿐 아니라 관심, 경의, 방문을 쏟을 때도 씁니다.",
        audioText: "Always pay close attention to nuances in context when reading."
    },
    {
        id: "colloc-8",
        category: "collocation",
        title: "Draw the line",
        summary: "‘선을 긋다, 한계를 정하다’",
        explanation: "용납할 수 있는 범위와 그렇지 않은 한계점(limit)을 명확히 구분할 때 씁니다.",
        collocationPair: "draw the line at [something]",
        exampleEn: "I love intellectual debates, but I draw the line at personal insults.",
        exampleKo: "나는 지적 토론을 좋아하지만, 인신공격에는 단호하게 선을 긋는다.",
        nativeTip: "💡 'Where do you draw the line?' (당신의 기준은 어디까지인가요?)",
        audioText: "I love intellectual debates, but I draw the line at personal insults."
    },

    // ------------------------------------------------------------------------
    // [3] 핵심 구동사 & 이디엄 (Phrasal Verbs & Idioms)
    // ------------------------------------------------------------------------
    {
        id: "idiom-1",
        category: "idiom",
        title: "Call it a day",
        summary: "‘오늘 하루는 여기까지 하고 마무리하다’",
        explanation: "학습이나 업무를 끝내고 퇴근하거나 쉴 때 원어민들이 매일 쓰는 가장 대표적인 표현입니다.",
        origin: "1800년대 노동자들이 정해진 일과를 채웠다고 선언하며 일을 끝내던 관용구에서 유래.",
        exampleEn: "We have accomplished all our daily goals, so let's call it a day.",
        exampleKo: "오늘의 일일 목표를 모두 완수했으니, 오늘은 여기까지 하죠.",
        nativeTip: "💡 평생 쓰는 표현: 밤샘 공부하다가 친구에게 'I'm exhausted. Let's call it a day.'라고 말해보세요.",
        audioText: "We have accomplished all our daily goals, so let's call it a day."
    },
    {
        id: "idiom-2",
        category: "idiom",
        title: "Hit the nail on the head",
        summary: "‘정곡을 찌르다, 정확하게 짚어내다’",
        explanation: "못의 머리를 망치로 정확하게 내리치는 그림에서 온 표현으로, 핵심을 정확히 꿰뚫었을 때 감탄하며 씁니다.",
        exampleEn: "Your analysis regarding the study habit hits the nail on the head.",
        exampleKo: "학습 습관에 대한 당신의 분석은 정확하게 정곡을 찔렀습니다.",
        nativeTip: "💡 원어민 리액션: 상대방이 명쾌한 핵심을 말했을 때 'You hit the nail on the head!' 또는 'Exactly!'라고 맞받아치세요.",
        audioText: "Your analysis regarding the study habit hits the nail on the head."
    },
    {
        id: "idiom-3",
        category: "idiom",
        title: "Cut corners",
        summary: "‘원칙을 건너뛰고 대충 때우다, 지름길을 택해 부실하게 하다’",
        explanation: "모퉁이를 제대로 돌지 않고 질러가다가 품질을 떨어뜨리는 행동을 비판할 때 씁니다.",
        exampleEn: "Never cut corners when memorizing fundamental concepts.",
        exampleKo: "기초 개념을 암기할 때는 결코 편법을 쓰거나 대충 넘어가선 안 된다.",
        nativeTip: "💡 아카데믹 조언: 'Don't cut corners on safety/quality'처럼 전치사 on과 자주 쓰입니다.",
        audioText: "Never cut corners when memorizing fundamental concepts."
    },
    {
        id: "idiom-4",
        category: "idiom",
        title: "Bite the bullet",
        summary: "‘이를 악물고 울며 겨자 먹기로 해내다’",
        explanation: "마취제가 없던 과거 군대에서 부상병에게 납 탄환(bullet)을 물리고 수술했던 고통을 참아내는 유래에서 비롯되었습니다.",
        exampleEn: "I dread waking up early, but I must bite the bullet for the exam.",
        exampleKo: "일찍 일어나는 게 정말 싫지만 시험을 위해 이를 악물고 해내야 한다.",
        nativeTip: "💡 어감: 피할 수 없는 힘든 과제를 당당히 직면하고 견뎌낼 때 사용합니다.",
        audioText: "I dread waking up early, but I must bite the bullet for the exam."
    },
    {
        id: "idiom-5",
        category: "idiom",
        title: "Burn the midnight oil",
        summary: "‘밤늦게까지 등불을 켜고 열공/야근하다’",
        explanation: "전기가 없던 시절 기름 램프(oil lamp)를 켜두고 밤새도록 책을 읽던 학자들의 모습에서 유래했습니다.",
        exampleEn: "Scholars are burning the midnight oil in preparation for finals.",
        exampleKo: "학도들은 기말고사를 대비해 밤늦게까지 불을 밝히며 공부하고 있다.",
        nativeTip: "💡 수험생 필수 표현: 'pull an all-nighter'(밤을 새우다)와 유사하지만 훨씬 고풍스럽고 학구적인 표현입니다.",
        audioText: "Scholars are burning the midnight oil in preparation for finals."
    },
    {
        id: "idiom-6",
        category: "idiom",
        title: "Under the weather",
        summary: "‘몸 컨디션이 찌뿌둥하고 안 좋다’",
        explanation: "악천후(weather)를 만난 선원들이 뱃멀미로 갑판 아래(under)로 내려가 쉬던 유래에서 비롯되었습니다.",
        exampleEn: "I feel a bit under the weather today, so I will take a light review.",
        exampleKo: "오늘 몸이 좀 으슬으슬해서 가볍게 복습만 진행하려 합니다.",
        nativeTip: "💡 심각한 질병이 아니라 가벼운 감기 기운이나 피로로 컨디션이 저하되었을 때 자주 씁니다.",
        audioText: "I feel a bit under the weather today, so I will take a light review."
    },
    {
        id: "idiom-7",
        category: "idiom",
        title: "See eye to eye",
        summary: "‘(시선과 뜻이 일치하여) 완전히 의견을 같이하다’",
        explanation: "두 사람의 눈높이가 일치한다는 뜻으로, 서로 동의하고 합의를 이룰 때 씁니다.",
        exampleEn: "My study partner and I see eye to eye on almost every topic.",
        exampleKo: "내 스터디 파트너와 나는 거의 모든 주제에 대해 뜻이 완벽히 일치한다.",
        nativeTip: "💡 부정문으로도 많이 쓰입니다: 'We don't always see eye to eye.' (우리가 늘 의견이 일치하는 것은 아니다)",
        audioText: "My study partner and I see eye to eye on almost every topic."
    },
    {
        id: "idiom-8",
        category: "idiom",
        title: "Piece of cake",
        summary: "‘식은 죽 먹기, 누워서 떡 먹기’",
        explanation: "달콤하고 부드러운 케이크를 먹는 것처럼 아주 쉽고 수월한 일을 비유합니다.",
        exampleEn: "Once you master the SRS rhythm, memorizing words becomes a piece of cake.",
        exampleKo: "SRS 복습 리듬을 마스터하고 나면, 단어 암기는 식은 죽 먹기가 된다.",
        nativeTip: "💡 유의어: 'walk in the park', 'child's play'.",
        audioText: "Once you master the SRS rhythm, memorizing words becomes a piece of cake."
    },

    // ------------------------------------------------------------------------
    // [4] 상황별 실전 다이얼로그 (Real-world Dialogues)
    // ------------------------------------------------------------------------
    {
        id: "dialogue-1",
        category: "dialogue",
        title: "아카데미 스터디 그룹 (Study Group Discussion)",
        summary: "학술 토론 및 의견 조율 시 유용한 표현",
        speakers: [
            { speaker: "Minho", text: "I'm having a hard time grasping this quantum physics hypothesis." },
            { speaker: "Sarah", text: "Don't fret! Let's break it down into smaller, digestible chunks." },
            { speaker: "Minho", text: "That sounds like a feasible plan. Shall we start from the premises?" },
            { speaker: "Sarah", text: "Precisely. Let's take our time and connect the dots step by step." }
        ],
        keyExpressions: [
            "have a hard time ~ing : ~하는 데 애를 먹다",
            "break it down : 잘게 쪼개어 분석하다",
            "digestible chunks : 소화하기 쉬운 덩어리",
            "connect the dots : 흩어진 단서들을 연결해 이해하다"
        ],
        audioText: "Don't fret! Let's break it down into smaller, digestible chunks."
    },
    {
        id: "dialogue-2",
        category: "dialogue",
        title: "글로벌 프로젝트 회의 (Project Milestones)",
        summary: "비즈니스 및 협업 시 마감 기한과 진행 상황 점검",
        speakers: [
            { speaker: "Alex", text: "Are we still on track to meet our deadline by Friday?" },
            { speaker: "Chloe", text: "Yes, we are ahead of schedule on data collection, but review takes time." },
            { speaker: "Alex", text: "Fair enough. Let's make sure we don't cut corners on verification." },
            { speaker: "Chloe", text: "Agreed. Quality is non-negotiable for our team." }
        ],
        keyExpressions: [
            "on track : 순조롭게 진행 중인",
            "ahead of schedule : 일정보다 앞선",
            "fair enough : 일리 있는 말이다, 납득할 만하다",
            "non-negotiable : 타협할 수 없는, 절대적인"
        ],
        audioText: "Are we still on track to meet our deadline by Friday? Agreed. Quality is non-negotiable."
    }
];

// ============================================================================
// [전용 데일리 풀] 하단 기본 목록(NATIVE_EXPRESSIONS)을 제외한 매일 새로운 추천 전용 풀
// 매일 다른 콜로케이션 1개 + 핵심 구동사/슬랭 1개가 중복 없이 새롭게 배정됩니다.
// ============================================================================
const DAILY_EXCLUSIVE_POOL = [
    // --- 실전 콜로케이션 (Daily Exclusive Collocations) ---
    {
        id: "daily-colloc-1",
        category: "collocation",
        title: "Bridge the gap",
        summary: "‘격차를 줄이다, 간극을 메우다’",
        explanation: "이론과 실전, 혹은 서로 다른 두 집단 사이의 차이(gap)에 다리를 놓아 연결한다는 고급 연어입니다.",
        collocationPair: "bridge the gap between A and B",
        exampleEn: "This program is designed to bridge the gap between theory and practice.",
        exampleKo: "이 프로그램은 이론과 실전 사이의 간극을 메우기 위해 설계되었습니다.",
        nativeTip: "💡 학술 에세이 및 프레젠테이션에서 해결책을 제시할 때 가장 사랑받는 표현입니다.",
        audioText: "This program is designed to bridge the gap between theory and practice."
    },
    {
        id: "daily-colloc-2",
        category: "collocation",
        title: "Jump to conclusions",
        summary: "‘성급하게 결론을 내리다, 단정 짓다’",
        explanation: "충분한 근거 없이 섣불리 판단할 때 쓰며, 주로 부정문이나 경고문에서 함께 쓰입니다.",
        collocationPair: "jump to conclusions / leap to conclusions",
        exampleEn: "Let's not jump to conclusions before we examine all the evidence.",
        exampleKo: "모든 증거를 검토하기 전에 성급하게 결론짓지 맙시다.",
        nativeTip: "💡 회화 표현: 'Don't jump to conclusions!' (너무 앞서나가지 마! 섣불리 단정하지 마!)",
        audioText: "Let's not jump to conclusions before we examine all the evidence."
    },
    {
        id: "daily-colloc-3",
        category: "collocation",
        title: "Shed light on",
        summary: "‘~을 밝히다, 규명하다, 새로운 단서를 주다’",
        explanation: "어두워서 잘 모르던 문제에 빛(light)을 비추어 명확히 이해하게 만든다는 지적인 표현입니다.",
        collocationPair: "shed light on [a mystery / problem / issue]",
        exampleEn: "Recent discoveries have shed new light on how human memory works.",
        exampleKo: "최근의 발견들은 인간의 기억이 어떻게 작동하는지 새로운 실마리를 밝혀주었다.",
        nativeTip: "💡 논문, 뉴스, 독해 지문에서 'explain'이나 'reveal' 대신 압도적으로 자주 등장합니다.",
        audioText: "Recent discoveries have shed new light on how human memory works."
    },
    {
        id: "daily-colloc-4",
        category: "collocation",
        title: "Take for granted",
        summary: "‘당연하게 여기다 (고마운 줄 모르다)’",
        explanation: "늘 곁에 있는 것이나 혜택을 당연히 주어지는 것으로 여겨 가치를 잊을 때 씁니다.",
        collocationPair: "take [something/someone] for granted",
        exampleEn: "We often take clean water and electricity for granted until they are gone.",
        exampleKo: "우리는 깨끗한 물과 전기가 사라지기 전까지는 종종 그것들을 당연하게 여긴다.",
        nativeTip: "💡 'Don't take my kindness for granted.' (내 친절을 당연한 권리로 생각하지 마.)",
        audioText: "We often take clean water and electricity for granted until they are gone."
    },
    {
        id: "daily-colloc-5",
        category: "collocation",
        title: "Pave the way for",
        summary: "‘~을 위한 길을 닦다, 토대를 마련하다’",
        explanation: "도로를 포장하듯(pave), 미래의 혁신이나 성공이 일어날 수 있도록 기반을 닦는다는 뜻입니다.",
        collocationPair: "pave the way for [future innovation / change]",
        exampleEn: "Early pioneers paved the way for modern artificial intelligence.",
        exampleKo: "초기 개척자들이 현대 인공지능을 위한 토대를 마련했다.",
        nativeTip: "💡 역사적 사건이나 선구적인 업적을 설명할 때 원어민들이 애용하는 콜로케이션입니다.",
        audioText: "Early pioneers paved the way for modern artificial intelligence."
    },
    {
        id: "daily-colloc-6",
        category: "collocation",
        title: "Raise awareness of",
        summary: "‘~에 대한 인식을 높이다, 경각심을 일깨우다’",
        explanation: "사람들이 잘 모르거나 무관심했던 주제의 중요성을 널리 알릴 때 쓰는 필수 연어입니다.",
        collocationPair: "raise public awareness of [an issue]",
        exampleEn: "The campaign aims to raise awareness of climate change among students.",
        exampleKo: "그 캠페인은 학생들 사이에서 기후 변화에 대한 인식을 높이는 것을 목표로 한다.",
        nativeTip: "💡 'increase knowledge'보다 훨씬 자연스러운 원어민 표준 콜로케이션입니다.",
        audioText: "The campaign aims to raise awareness of climate change among students."
    },
    {
        id: "daily-colloc-7",
        category: "collocation",
        title: "Meet the criteria",
        summary: "‘기준을 충족하다, 자격 요건에 부합하다’",
        explanation: "단순히 match나 fit을 쓰는 것보다 훨씬 정교하고 격식 있는 표현입니다.",
        collocationPair: "meet / satisfy / fulfill the criteria",
        exampleEn: "Only candidates who meet all the strict criteria will be admitted.",
        exampleKo: "엄격한 기준을 모두 충족하는 지원자만 입학이 허가될 것이다.",
        nativeTip: "💡 주의: criteria는 복수형이며, 단수형은 criterion입니다.",
        audioText: "Only candidates who meet all the strict criteria will be admitted."
    },
    {
        id: "daily-colloc-8",
        category: "collocation",
        title: "Pose a threat to",
        summary: "‘~에 위협이 되다, 위험을 초래하다’",
        explanation: "위협(threat)이나 위험(risk), 도전(challenge)을 가할 때는 동사 'pose'가 짝꿍으로 쓰입니다.",
        collocationPair: "pose a threat / risk / challenge to",
        exampleEn: "Sleep deprivation poses a serious threat to cognitive performance.",
        exampleKo: "수면 부족은 인지 수행 능력에 심각한 위협을 초래한다.",
        nativeTip: "💡 'make a threat'는 말로 협박한다는 뜻이고, 존재 자체가 위험이 될 때는 'pose a threat'를 씁니다.",
        audioText: "Sleep deprivation poses a serious threat to cognitive performance."
    },
    {
        id: "daily-colloc-9",
        category: "collocation",
        title: "Break the ice",
        summary: "‘어색한 분위기를 깨다, 말문을 트다’",
        explanation: "처음 만난 자리의 얼어붙은(ice) 공기를 깨뜨려 편안한 대화를 시작하게 만든다는 뜻입니다.",
        collocationPair: "break the ice with a light joke",
        exampleEn: "The professor told a humorous story to break the ice on the first day.",
        exampleKo: "교수님은 첫날 어색한 분위기를 깨기 위해 유머러스한 이야기를 들려주셨다.",
        nativeTip: "💡 오리엔테이션 게임이나 첫인사 활동을 영어로 'Ice-breaker'라고 부릅니다.",
        audioText: "The professor told a humorous story to break the ice on the first day."
    },
    {
        id: "daily-colloc-10",
        category: "collocation",
        title: "Give credit to",
        summary: "‘~의 공로를 인정하다, 칭찬을 돌리다’",
        explanation: "성공이나 아이디어의 공(credit)을 마땅히 받아야 할 사람에게 돌릴 때 씁니다.",
        collocationPair: "give credit to [someone] / take credit for",
        exampleEn: "We must give full credit to the research assistants for their dedication.",
        exampleKo: "우리는 연구 조교들의 헌신에 대해 마땅히 모든 공로를 인정해야 한다.",
        nativeTip: "💡 'Gotta give you credit!' (와, 이건 너 진짜 인정해줘야겠다!)",
        audioText: "We must give full credit to the research assistants for their dedication."
    },
    {
        id: "daily-colloc-11",
        category: "collocation",
        title: "Have Second Thoughts",
        summary: "‘다시 생각해보고 망설이다, 마음이 바뀌다’",
        explanation: "이미 결정을 내린 뒤에 '이러면 안 되나?' 하고 의구심이 들어 재고할 때 씁니다.",
        collocationPair: "have second thoughts about [decision]",
        exampleEn: "I accepted the offer, but now I'm having second thoughts about moving abroad.",
        exampleKo: "제안을 수락하긴 했는데, 지금 해외로 이주하는 것에 대해 다시 망설여지고 있다.",
        nativeTip: "💡 'On second thought'(다시 생각해 보니)라는 연결어로도 매우 자주 쓰입니다.",
        audioText: "I accepted the offer, but now I'm having second thoughts about moving abroad."
    },
    {
        id: "daily-colloc-12",
        category: "collocation",
        title: "Play devil's advocate",
        summary: "‘(토론을 위해) 일부러 반대 입장을 취하다’",
        explanation: "실제로는 동의하더라도 논리의 허점을 점검하기 위해 짐짓 반대편 질문을 던질 때 씁니다.",
        collocationPair: "play devil's advocate in a debate",
        exampleEn: "Let me play devil's advocate for a moment to test our hypothesis.",
        exampleKo: "우리 가설을 검증하기 위해 제가 잠시 일부러 반대 입장에서 질문해 보겠습니다.",
        nativeTip: "💡 상대방 기분을 상하게 하지 않고 날카로운 반론을 제기할 수 있는 최고의 학술/비즈니스 화법입니다.",
        audioText: "Let me play devil's advocate for a moment to test our hypothesis."
    },
    {
        id: "daily-colloc-13",
        category: "collocation",
        title: "Go hand in hand",
        summary: "‘밀접하게 연관되다, 늘 함께 따라다니다’",
        explanation: "두 사람이 손을 잡고 걸어가듯, 두 가지 현상이 떼려야 뗄 수 없이 함께 일어날 때 씁니다.",
        collocationPair: "A and B go hand in hand (with)",
        exampleEn: "Deep curiosity and academic excellence always go hand in hand.",
        exampleKo: "깊은 호기심과 학문적 탁월함은 언제나 밀접하게 함께 간다.",
        nativeTip: "💡 에세이에서 두 개념의 상관관계를 강조할 때 'closely related' 대신 쓰면 점수가 올라갑니다.",
        audioText: "Deep curiosity and academic excellence always go hand in hand."
    },
    {
        id: "daily-colloc-14",
        category: "collocation",
        title: "Food for thought",
        summary: "‘깊이 생각해 볼 거리, 시사점’",
        explanation: "몸을 위한 음식이 아니라, 머리와 지성을 자극하는 진지한 생각거리를 뜻합니다.",
        collocationPair: "give [someone] food for thought",
        exampleEn: "Her lecture on bioethics gave the audience plenty of food for thought.",
        exampleKo: "생명윤리에 관한 그녀의 강연은 청중들에게 깊이 생각해 볼 거리를 많이 던져주었다.",
        nativeTip: "💡 좋은 조언을 들었을 때 'That's good food for thought. Thanks!'라고 답해보세요.",
        audioText: "Her lecture on bioethics gave the audience plenty of food for thought."
    },
    {
        id: "daily-colloc-15",
        category: "collocation",
        title: "Pull some strings",
        summary: "‘인맥이나 영향력을 동원해 뒤에서 힘을 쓰다’",
        explanation: "꼭두각시 인형의 줄(strings)을 당기듯, 보이지 않는 인맥을 활용해 일을 성사시킬 때 씁니다.",
        collocationPair: "pull strings to get [something] done",
        exampleEn: "He managed to get the rare archive access by pulling a few strings.",
        exampleKo: "그는 인맥을 조금 동원해서 그 희귀 기록보관소 열람 권한을 가까스로 얻어냈다.",
        nativeTip: "💡 부정적인 청탁뿐 아니라 '아는 사람 통해 부탁해보다'라는 일상적 의미로도 널리 쓰입니다.",
        audioText: "He managed to get the rare archive access by pulling a few strings."
    },

    // --- 핵심 구동사 & 슬랭 (Daily Exclusive Phrasal Verbs & Slang) ---
    {
        id: "daily-idiom-1",
        category: "idiom",
        title: "Brush up on",
        summary: "‘(잊어가던 실력·지식을) 다시 가다듬다, 복습하다’",
        explanation: "먼지가 쌓인 물건을 솔(brush)로 털어내어 반짝이게 만들듯, 예전에 배운 내용을 빠르게 복습할 때 씁니다.",
        collocationPair: "brush up on [English / math / skills]",
        exampleEn: "I need to brush up on my English vocabulary before the international camp.",
        exampleKo: "국제 캠프에 가기 전에 내 영어 어휘 실력을 다시 가다듬어야(복습해야) 한다.",
        nativeTip: "💡 'review'보다 훨씬 생동감 넘치는 원어민 구동사 1순위입니다.",
        audioText: "I need to brush up on my English vocabulary before the international camp."
    },
    {
        id: "daily-idiom-2",
        category: "idiom",
        title: "Wrap up",
        summary: "‘(회의·수업·작업을) 깔끔하게 마무리하다’",
        explanation: "선물 포장지를 감싸서 묶듯(wrap up), 진행하던 일을 잘 정리하여 끝낼 때 매일 쓰는 구동사입니다.",
        collocationPair: "wrap up the meeting / wrap it up",
        exampleEn: "Let's wrap up today's study session and review the key takeaways.",
        exampleKo: "오늘의 스터디 세션을 마무리하고 핵심 요점들을 복습해 봅시다.",
        nativeTip: "💡 발표나 영상 마지막에 'To wrap up...' (마무리하자면...)으로 쓰면 아주 세련됩니다.",
        audioText: "Let's wrap up today's study session and review the key takeaways."
    },
    {
        id: "daily-idiom-3",
        category: "idiom",
        title: "Figure out",
        summary: "‘(고민 끝에 해답·원인을) 알아내다, 해결하다, 이해하다’",
        explanation: "단순히 알고 있는 상태(know)가 아니라, 머리를 써서 복잡한 문제를 풀거나 파악해내는 과정입니다.",
        collocationPair: "figure out how to + V / figure it out",
        exampleEn: "Scientists are still trying to figure out the exact cause of the phenomenon.",
        exampleKo: "과학자들은 여전히 그 현상의 정확한 원인을 규명하려고 노력 중이다.",
        nativeTip: "💡 원어민이 하루에 최소 3번 이상 쓰는 초핵심 구동사: 'Don't worry, we'll figure it out!' (걱정 마, 우리가 해결 방법을 찾아낼 거야!)",
        audioText: "Scientists are still trying to figure out the exact cause of the phenomenon."
    },
    {
        id: "daily-idiom-4",
        category: "idiom",
        title: "narrow down",
        summary: "‘(후보나 선택지의 범위를) 압축하다, 좁히다’",
        explanation: "많은 가능성 중에서 불필요한 것을 소거하고 핵심 몇 개로 줄여나갈 때 씁니다.",
        collocationPair: "narrow down the options / list",
        exampleEn: "We narrowed down the research topics to three promising candidates.",
        exampleKo: "우리는 연구 주제를 유망한 후보 세 가지로 압축했다.",
        nativeTip: "💡 객관식 시험에서 오답을 지우고 보기 2개로 좁힐 때도 'I narrowed it down to two choices'라고 합니다.",
        audioText: "We narrowed down the research topics to three promising candidates."
    },
    {
        id: "daily-idiom-5",
        category: "idiom",
        title: "Boil down to",
        summary: "‘결국 ~로 귀결되다, 핵심은 ~이다’",
        explanation: "수프를 오래 끓이면(boil down) 수분이 날아가고 진한 농축액만 남듯, 복잡한 사안의 본질을 짚을 때 씁니다.",
        collocationPair: "it all boils down to [core factor]",
        exampleEn: "Success in language learning ultimately boils down to daily consistency.",
        exampleKo: "언어 학습의 성공은 결국 매일의 꾸준함으로 귀결된다.",
        nativeTip: "💡 결론 문장에서 'In short' 대신 'It all boils down to...'를 쓰면 원어민다운 설득력이 생깁니다.",
        audioText: "Success in language learning ultimately boils down to daily consistency."
    },
    {
        id: "daily-idiom-6",
        category: "idiom",
        title: "Follow through",
        summary: "‘계획한 일을 끝까지 완수하다, 용두사미로 끝내지 않다’",
        explanation: "야구나 골프에서 공을 친 뒤에도 스윙 동작을 끝까지 이어가는 것에서 유래한 멋진 구동사입니다.",
        collocationPair: "follow through on [a promise / plan]",
        exampleEn: "Making a study plan is easy, but following through requires discipline.",
        exampleKo: "학습 계획을 세우는 것은 쉽지만, 그것을 끝까지 실행해 내는 데는 자제력이 필요하다.",
        nativeTip: "💡 시작만 하고 끝을 못 맺는 사람에게 'You need to follow through!'라고 조언합니다.",
        audioText: "Making a study plan is easy, but following through requires discipline."
    },
    {
        id: "daily-idiom-7",
        category: "idiom",
        title: "Rule out",
        summary: "‘(가능성·용의자 등을) 배제하다, 제외하다’",
        explanation: "자를 대고 줄(rule)을 그어 명단에서 지워버리듯, 불가능한 선택지를 확실히 제외할 때 씁니다.",
        collocationPair: "rule out the possibility of",
        exampleEn: "The researchers could not rule out the possibility of experimental error.",
        exampleKo: "연구진은 실험 오차의 가능성을 배제할 수 없었다.",
        nativeTip: "💡 의학 드라마, 추리물, 과학 논문에서 단골로 등장하는 필수 구동사입니다.",
        audioText: "The researchers could not rule out the possibility of experimental error."
    },
    {
        id: "daily-idiom-8",
        category: "idiom",
        title: "Sink in",
        summary: "‘(놀라운 소식·깊은 뜻이) 서서히 실감 나다, 마음속에 와닿다’",
        explanation: "물이 스펀지에 스며들듯(sink in), 처음엔 얼떨떨했던 사실이나 지식이 머릿속에 완전히 이해될 때 씁니다.",
        collocationPair: "let the news / lesson sink in",
        exampleEn: "It took a few moments for the magnitude of the discovery to sink in.",
        exampleKo: "그 발견의 거대한 중요성이 온전히 실감 나는 데는 약간의 시간이 걸렸다.",
        nativeTip: "💡 강연자가 중요한 말을 한 뒤 잠시 멈추며 'Let that sink in.' (이 말을 깊이 곱씹어 보세요)이라고 자주 말합니다.",
        audioText: "It took a few moments for the magnitude of the discovery to sink in."
    },
    {
        id: "daily-idiom-9",
        category: "idiom",
        title: "Pan out",
        summary: "‘(계획·일이) 잘 풀리다, 좋은 결과를 내다’",
        explanation: "사금을 채취할 때 냄비(pan)로 모래를 걸러내어 결국 금이 나오는지 확인하던 것에서 유래했습니다.",
        collocationPair: "see how things pan out",
        exampleEn: "Our initial experiment didn't pan out as expected, so we revised the model.",
        exampleKo: "우리의 초기 실험이 예상대로 잘 풀리지 않아서 모델을 수정했다.",
        nativeTip: "💡 'work out'과 비슷하지만, 결과를 지켜본다는 뉘앙스가 더 살아있는 세련된 구동사입니다.",
        audioText: "Our initial experiment didn't pan out as expected, so we revised the model."
    },
    {
        id: "daily-idiom-10",
        category: "idiom",
        title: "Touch base",
        summary: "‘잠깐 연락해서 진행 상황을 공유하다, 안부를 확인하다’",
        explanation: "야구 주자가 베이스(base)를 밟고 지나가듯, 팀원이나 친구와 짧게 연락해 싱크를 맞출 때 씁니다.",
        collocationPair: "touch base with [someone]",
        exampleEn: "I just wanted to touch base with you regarding next week's presentation.",
        exampleKo: "다음 주 발표 건과 관련해서 진행 상황을 잠깐 확인차 연락드렸습니다.",
        nativeTip: "💡 미국 대학생과 직장인들이 이메일 첫 줄에 가장 많이 쓰는 표현입니다.",
        audioText: "I just wanted to touch base with you regarding next week's presentation."
    },
    {
        id: "daily-idiom-11",
        category: "idiom",
        title: "Play it by ear",
        summary: "‘상황 봐서 즉흥적으로 대처하다 (미리 정하지 않다)’",
        explanation: "악보 없이 귀(ear)로만 듣고 연주하듯, 빡빡한 계획 대신 현장 상황에 맞춰 유연하게 행동한다는 뜻입니다.",
        collocationPair: "let's just play it by ear",
        exampleEn: "We don't know when the seminar will end, so let's play it by ear for dinner.",
        exampleKo: "세미나가 언제 끝날지 모르니 저녁 식사는 상황 봐서 정합시다.",
        nativeTip: "💡 약속이나 여행 일정을 유동적으로 잡을 때 원어민들이 입에 달고 사는 표현입니다.",
        audioText: "We don't know when the seminar will end, so let's play it by ear for dinner."
    },
    {
        id: "daily-idiom-12",
        category: "idiom",
        title: "Keep tabs on",
        summary: "‘~을 주의 깊게 지켜보다, 기록하며 관리하다’",
        explanation: "파일 폴더에 탭(tab)을 붙여 추적하듯, 지출이나 진행 상황을 놓치지 않고 계속 체크할 때 씁니다.",
        collocationPair: "keep close tabs on [progress / expenses]",
        exampleEn: "Smart learners keep close tabs on their weak vocabulary items.",
        exampleKo: "현명한 학습자는 자신의 취약 단어 항목들을 면밀히 체크하며 관리한다.",
        nativeTip: "💡 'monitor'나 'track'을 일상 회화에서 가장 자연스럽게 바꾼 표현입니다.",
        audioText: "Smart learners keep close tabs on their weak vocabulary items."
    },
    {
        id: "daily-idiom-13",
        category: "idiom",
        title: "Iron out",
        summary: "‘(문제·이견·세부 오류를) 매끄럽게 해결하다, 조율하다’",
        explanation: "다리미(iron)로 옷의 구김살을 펴듯, 프로젝트 막바지의 자잘한 문제나 이견을 말끔히 없앨 때 씁니다.",
        collocationPair: "iron out the details / bugs / differences",
        exampleEn: "We still have a few minor issues to iron out before the final submission.",
        exampleKo: "최종 제출 전에 매끄럽게 다듬어야 할 사소한 문제들이 아직 몇 가지 남아 있다.",
        nativeTip: "💡 코딩 버그 수정이나 팀원 간 의견 조율 상황에 찰떡같이 어울립니다.",
        audioText: "We still have a few minor issues to iron out before the final submission."
    },
    {
        id: "daily-idiom-14",
        category: "idiom",
        title: "Zone out",
        summary: "‘멍때리다, 깜빡 집중력을 잃고 딴생각하다’",
        explanation: "피곤하거나 지루할 때 정신이 현재 구역(zone) 밖으로 빠져나가 멍해지는 현상을 뜻하는 슬랭/구동사입니다.",
        collocationPair: "completely zone out during a lecture",
        exampleEn: "I was so sleep-deprived that I zoned out for ten minutes during class.",
        exampleKo: "잠이 너무 부족해서 수업 중에 10분 동안 완전히 멍을 때렸다.",
        nativeTip: "💡 반대말은 'Lock in' 또는 'Zone in' (초집중 모드에 들어가다)입니다!",
        audioText: "I was so sleep-deprived that I zoned out for ten minutes during class."
    },
    {
        id: "daily-idiom-15",
        category: "idiom",
        title: "Ace",
        summary: "‘(시험·면접 등을) 완벽하게 해내다, 만점 받다’",
        explanation: "명사 '에이스'를 동사로 활용하여 시험이나 발표에서 최고 성적을 거두었을 때 쓰는 경쾌한 슬랭입니다.",
        collocationPair: "ace the exam / ace the interview",
        exampleEn: "Thanks to spaced repetition, she aced the vocabulary proficiency test.",
        exampleKo: "간격 반복 학습 덕분에 그녀는 어휘 능력 시험을 완벽하게 만점 받았다.",
        nativeTip: "💡 시험 보러 가는 친구에게 'You're gonna ace it!' (너 무조건 대박 날 거야!)라고 응원해 주세요.",
        audioText: "Thanks to spaced repetition, she aced the vocabulary proficiency test."
    }
];

/**
 * ID로 원어민 표현 찾기 (하단 기본 목록 + 데일리 전용 풀 통합 검색)
 */
function findNativeExpressionById(id) {
    return DAILY_EXCLUSIVE_POOL.find(e => e.id === id) || NATIVE_EXPRESSIONS.find(e => e.id === id) || null;
}

/**
 * 특정 날짜(YYYY-MM-DD) 및 오프셋(추가 학습 회차) 기준
 * 하단 고정 목록을 제외한 'DAILY_EXCLUSIVE_POOL'에서 매일 새로운 콜로케이션 1개 + 구동사/슬랭 1개 추출
 * @param {string} dateStr 날짜 문자열 (기본: 오늘 날짜)
 * @param {number} extraOffset 같은 날 '새로운 표현 더 보기' 클릭 시 증가하는 오프셋
 * @param {Array<string>} completedIds 이미 완료한 표현 ID 배열 (미완료 표현 우선 추천용)
 */
function getDailyExpressions(dateStr, extraOffset = 0, completedIds = []) {
    const target = dateStr || (new Date().toISOString().slice(0, 10));

    // YYYY-MM-DD를 기준 일수(Epoch DayNumber)로 변환해 날마다 1씩 순차 증가 보장 (연속적인 날에 절대 같은 표현이 안 나오도록)
    const parts = target.split('-').map(Number);
    const utcDays = Math.floor(Date.UTC(parts[0], (parts[1] || 1) - 1, parts[2] || 1) / 86400000);
    const stepIndex = Math.abs(utcDays + extraOffset);

    const collocations = DAILY_EXCLUSIVE_POOL.filter(e => e.category === 'collocation');
    const idioms = DAILY_EXCLUSIVE_POOL.filter(e => e.category === 'idiom');

    // 만약 extraOffset > 0 이거나 미학습 표현을 우선 순환하고 싶을 때 자연스럽게 다음 인덱스로 이동
    let collocIdx = stepIndex % collocations.length;
    let idiomIdx = stepIndex % idioms.length;

    // 이미 과거에 완료한 표현이고 아직 안 본 표현이 남아있다면 안 본 표현을 우선 배정 (오늘 이미 완료한 건 유지)
    if (Array.isArray(completedIds) && completedIds.length > 0) {
        for (let i = 0; i < collocations.length; i++) {
            const candidate = collocations[(collocIdx + i) % collocations.length];
            if (!completedIds.includes(candidate.id)) {
                collocIdx = (collocIdx + i) % collocations.length;
                break;
            }
        }
        for (let i = 0; i < idioms.length; i++) {
            const candidate = idioms[(idiomIdx + i) % idioms.length];
            if (!completedIds.includes(candidate.id)) {
                idiomIdx = (idiomIdx + i) % idioms.length;
                break;
            }
        }
    }

    return {
        date: target,
        dayNumber: stepIndex,
        totalPoolSize: DAILY_EXCLUSIVE_POOL.length,
        collocation: collocations[collocIdx],
        idiom: idioms[idiomIdx]
    };
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { NATIVE_EXPRESSIONS, DAILY_EXCLUSIVE_POOL, findNativeExpressionById, getDailyExpressions };
}
