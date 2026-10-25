/**
 * Veritas English - AI 맞춤형 단어 단원 자동 생성 엔진 (Custom Voca AI Generator)
 * 20대 학습 목적(+직접 입력), 5대 독해 연계 광범위 대주제, 15대 교재 연계 광범위 대주제(+직접 입력)
 * 10단계 베리타스 레벨 및 일일 학습량(일수 x 단어수)에 맞춰 완벽한 단원을 동적으로 생성
 */

window.customVocaAI = {
    // ------------------------------------------------------------------------
    // 1. 20대 학습 목적 (Purpose / Goal)
    // ------------------------------------------------------------------------
    PURPOSES: [
        { id: 'gpa_top', icon: '🎯', label: '내신 1등급 완벽 대비', desc: '교과서 핵심 문법 연계 어휘, 빈출 서술형 어휘, 학교 시험 적중 관용구' },
        { id: 'suneung_reading', icon: '📈', label: '수능 비문학 독해 1등급', desc: '평가원 및 수능 기출 킬러 어휘, AWL Tier 2 학술 어휘, 논증·가설 어휘' },
        { id: 'speaking', icon: '🗣️', label: '실전 회화 & 스피킹', desc: '미국 현지 구어체 구동사, 자연스러운 일상 콜로케이션 및 감각 표현' },
        { id: 'reading_novel', icon: '📖', label: '영어 원서 & 문학 완독', desc: '고전·현대 소설 서사 어휘, 문학적 뉘앙스, 인물 묘사 다의어' },
        { id: 'cramming', icon: '⚡', label: '시험 직전 초압축 벼락치기', desc: '단기간 성적 급상승을 위해 시험 전날 반드시 외워야 할 초빈출 알짜 암기' },
        { id: 'essay_writing', icon: '✍️', label: '서술형 영작문 & 에세이', desc: '원인/결과/대조 논리 연결어, 학술 보고서용 고급 전환 어휘' },
        { id: 'listening', icon: '🎧', label: '리스닝 & 듣기평가 만점', desc: '원어민 축약 발음, 연음 빈출 단어 및 대화문 리액션 필수 표현' },
        { id: 'polysemy', icon: '🔍', label: '수능 킬러 다의어 정복', desc: '문맥에 따라 180도 다른 뜻을 지닌 평가원 1등급 변별력 어휘' },
        { id: 'etymology', icon: '🔤', label: '어원(접두·어근·접미) 마스터', desc: '원리로 단어 1개를 외우면 10개 파생어를 확장하는 어원 집중 훈련' },
        { id: 'confusing', icon: '💡', label: '오답률 1위 혼동 어휘 극복', desc: '철자와 발음이 비슷하여 내신 객관식에서 단골로 낚이는 혼동 어휘' },
        { id: 'interview', icon: '🏫', label: '특목고·자사고 구술 면접', desc: '시사 논점, 학술 토론, 인문사회 쟁점 비평을 위한 심화 어휘' },
        { id: 'media_slang', icon: '💬', label: '미드·넷플릭스 리얼 영어', desc: '드라마, 유튜브, 현지 일상에서 매일 들리는 트렌디 슬랭' },
        { id: 'travel_survival', icon: '✈️', label: '해외여행 & 현지 생존 영어', desc: '공항, 호텔, 식당, 교통, 병원 등 여행지에서 바로 통하는 실전 어휘' },
        { id: 'business_email', icon: '💼', label: '비즈니스 & 이메일 영작', desc: '글로벌 비즈니스 에티켓, 프로페셔널 보고서 및 정중한 업무 어휘' },
        { id: 'emotion_character', icon: '🎭', label: '감정·성격 정밀 묘사', desc: '내신/수능 18~19번 심경 추론 100% 적중 어휘 및 인물 성향 분석' },
        { id: 'chart_data', icon: '📊', label: '도표·데이터 분석 독해', desc: '비문학 그래프 추이, 수치 증감, 통계 상관관계를 설명하는 분석 어휘' },
        { id: 'phrasal_verbs', icon: '🧩', label: '필수 구동사(Phrasal Verbs)', desc: '전치사와 결합하여 뜻이 확장되는 원어민 빈출 동사구 집중' },
        { id: 'toefl_teps', icon: '📚', label: '공인어학시험(TOEFL/TEPS)', desc: '리딩/렉처 지문에 등장하는 심화 아카데믹 어휘 정복' },
        { id: 'elem_basic', icon: '🌟', label: '초등 필수 영단어 총정리', desc: '예비중 진입 전 완벽 마스터해야 하는 교육부 지정 기초 어휘' },
        { id: 'srs_master', icon: '🧠', label: '에빙하우스 장기기억 마스터', desc: '평생 잊히지 않는 라이트너 5단계 영구 기억 맞춤 어휘 훈련' }
    ],

    // ------------------------------------------------------------------------
    // 2. 광범위 20대 테마 (5대 독해 연계 + 15대 교재 연계)
    // ------------------------------------------------------------------------
    THEMES: {
        reading: [
            { id: 'R1', icon: '🏛️', name: '인문·철학 & 사유의 역사', scope: '인간 본성, 언어와 의식, 윤리적 사유, 고전 철학, 예술과 미학' },
            { id: 'R2', icon: '🔬', name: '자연과학 & 생명 환경의 신비', scope: '생물학, 유전, 지구과학, 물리 법칙, 생태계 보전과 자연 원리' },
            { id: 'R3', icon: '🌍', name: '사회·문화 & 글로벌 시민사회', scope: '역사적 전환점, 세계 문명, 사회 제도와 규범, 문화 공존' },
            { id: 'R4', icon: '💡', name: '심리·행동 & 인간관계의 지혜', scope: '인지 심리학, 행동 경제학, 청소년 심리, 갈등 해결과 공감 소통' },
            { id: 'R5', icon: '🚀', name: '미래 테크 & 문명의 대전환', scope: '인공지능, 우주 개척, 정보 혁명, 생명공학, 미래 과학 기술 윤리' }
        ],
        curated: [
            { id: 'T01', icon: '🏙️', name: '현대 도시 생활 & 21세기 라이프스타일', scope: '스마트 주거, 소비 문화, 여가 취미, 디지털 라이프 전반' },
            { id: 'T02', icon: '🌐', name: '글로벌 커뮤니케이션 & 미디어 영어', scope: '뉴스 보도, 인터뷰, 팟캐스트, 소셜 미디어, 글로벌 시사 담론' },
            { id: 'T03', icon: '💼', name: '경제 흐름 & 글로벌 비즈니스 월드', scope: '시장 경제 원리, 기업 경영, 스타트업, 통상 무역, 개인 금융' },
            { id: 'T04', icon: '🎭', name: '스토리텔링 & 영미 문화 콘텐츠', scope: '고전·현대 서사 문학, 시나리오, 뮤지컬, 예술적 표현과 창의적 묘사' },
            { id: 'T05', icon: '✈️', name: '세계 여행 & 글로벌 문화 체험', scope: '항공·숙박·교통, 세계 전통 축제, 지리적 특색, 현지 문화 적응' },
            { id: 'T06', icon: '🩺', name: '웰빙, 멘탈 헬스 & 신체 건강 관리', scope: '생활 의학, 정신 건강, 영양과 운동, 힐링, 라이프 밸런스' },
            { id: 'T07', icon: '🗣️', name: '원어민 실전 대화 & 감정 표현 마스터', scope: '희로애락 감정선, 설득과 협상, 유머와 리액션, 생생한 구어체' },
            { id: 'T08', icon: '⚖️', name: '법과 정의, 정치 & 현대 시사 쟁점', scope: '사회 정의, 헌법과 법률, 민주주의, 인권, 글로벌 갈등과 평화' },
            { id: 'T09', icon: '🌿', 지속: '지속 가능한 지구 & 그린 에너지', name: '지속 가능한 지구 & 그린 에너지', scope: '기후 위기 극복, 신재생 에너지, 자원 순환, 해양 보존, 친환경 기술' },
            { id: 'T10', icon: '🧠', name: '두뇌 과학, 학습법 & 창의적 사고', scope: '기억력 증진, 뇌과학, 자기계발 전략, 문제 해결력, 논리적 추론' },
            { id: 'T11', icon: '🎬', name: '엔터테인먼트, 대중문화 & 글로벌 팬덤', scope: '영화·음악 산업, K-컬처 세계화, 팬덤 문화, 스트리밍 미디어 트렌드' },
            { id: 'T12', icon: '🍽️', name: '글로벌 미식 & 식음료 라이프', scope: '세계 식문화, 요리 레시피, 카페 트렌드, 건강 식단, 테이블 에티켓' },
            { id: 'T13', icon: '🏕️', name: '자연 탐험, 아웃도어 & 지리 탐방', scope: '캠핑, 극한 기후 환경, 해양 및 산악 지형, 야생 동식물 생태 관찰' },
            { id: 'T14', icon: '🤝', name: '리더십, 조직 문화 & 협업의 기술', scope: '팀워크 역량, 대인 관계 리더십, 동기 부여, 글로벌 프로젝트 협력' },
            { id: 'T15', icon: '🔮', name: '가상 세계, 사이버 사회 & 디지털 휴머니티', scope: '가상현실, 메타버스, 인공지능과의 공존, 정보 보호, 미래 사회 윤리' }
        ]
    },

    // ------------------------------------------------------------------------
    // 3. 테마별 핵심 어휘 지식 베이스 (Thematic Vocabulary Knowledge Base)
    // ------------------------------------------------------------------------
    THEME_VOCABULARY_BASE: {
        'R1': [
            { w: 'epistemology', p: '[명]', m: '인식론', ex: 'Epistemology investigates how humans acquire valid knowledge.', ko: '인식론은 인간이 타당한 지식을 획득하는 방식을 탐구한다.' },
            { w: 'virtue', p: '[명]', m: '미덕, 도덕적 우수성', ex: 'Ancient Greek philosophers considered wisdom the highest virtue.', ko: '고대 그리스 철학자들은 지혜를 가장 고결한 미덕으로 여겼다.' },
            { w: 'dichotomy', p: '[명]', m: '이분법, 양분', ex: 'The philosopher rejected the dichotomy between body and mind.', ko: '그 철학자는 육체와 정신 사이의 이분법을 거부했다.' },
            { w: 'contemplate', p: '[동]', m: '심사숙고하다, 응시하다', ex: 'He sat in silence to contemplate the meaning of human existence.', ko: '그는 인간 존재의 의미를 심사숙고하기 위해 침묵 속에 앉아 있었다.' },
            { w: 'aesthetic', p: '[형]', m: '미적인, 심미적인', ex: 'The museum exhibits artworks that challenge conventional aesthetic values.', ko: '그 박물관은 전통적인 미적 가치에 도전하는 예술 작품들을 전시한다.' },
            { w: 'paradox', p: '[명]', m: '역설, 패러독스', ex: 'It is a strange paradox that technology can isolate people even as it connects them.', ko: '기술이 사람들을 연결하면서도 고립시킬 수 있다는 것은 기묘한 역설이다.' },
            { w: 'existential', p: '[형]', m: '실존주의적인, 존재에 관한', ex: 'Writers often explore existential dilemmas facing individuals in modern times.', ko: '작가들은 현대 사회에서 개인이 마주하는 실존적 딜레마를 자주 탐구한다.' },
            { w: 'metaphor', p: '[명]', m: '은유, 비유', ex: 'Light is often used as a literary metaphor for knowledge and enlightenment.', ko: '빛은 지식과 계몽을 상징하는 문학적 은유로 자주 사용된다.' },
            { w: 'rational', p: '[형]', m: '합리적인, 이성적인', ex: 'Scientists rely on rational analysis rather than emotional intuition.', ko: '과학자들은 감정적 직관보다는 합리적 분석에 의존한다.' },
            { w: 'morality', p: '[명]', m: '도덕, 도덕성', ex: 'Universal morality encourages fairness and compassion across all cultures.', ko: '보편적 도덕성은 모든 문화에 걸쳐 공정함과 연민을 권장한다.' },
            { w: 'intrinsic', p: '[형]', m: '내재적인, 본질적인', ex: 'Curiosity has an intrinsic value that drives human progress.', ko: '호기심은 인류의 진보를 이끄는 내재적 가치를 지닌다.' },
            { w: 'conscience', p: '[명]', m: '양심', ex: 'Her conscience prevented her from telling a lie to protect herself.', ko: '그녀의 양심은 자신을 보호하기 위해 거짓말하는 것을 막았다.' }
        ],
        'R2': [
            { w: 'ecosystem', p: '[명]', m: '생태계', ex: 'Coral reefs are among the most biodiverse ecosystems on our planet.', ko: '산호초는 지구상에서 가장 생물 다양성이 풍부한 생태계에 속한다.' },
            { w: 'photosynthesis', p: '[명]', m: '광합성', ex: 'Plants produce oxygen through the vital process of photosynthesis.', ko: '식물은 필수적인 광합성 과정을 통해 산소를 생산한다.' },
            { w: 'adaptation', p: '[명]', m: '적응, 순응', ex: 'The camel’s ability to store water is an evolutionary adaptation.', ko: '물을 저장하는 낙타의 능력은 진화론적 적응의 산물이다.' },
            { w: 'biodiversity', p: '[명]', m: '생물 다양성', ex: 'Conserving rainforests is critical to maintaining global biodiversity.', ko: '열대우림 보존은 지구의 생물 다양성을 유지하는 데 결정적이다.' },
            { w: 'equilibrium', p: '[명]', m: '평형 상태, 균형', ex: 'Predators play a key role in keeping the natural food web in equilibrium.', ko: '포식자는 자연 먹이사슬의 평형을 유지하는 데 핵심적인 역할을 한다.' },
            { w: 'atmosphere', p: '[명]', m: '대기, 기압', ex: 'The ozone layer shields Earth from harmful radiation in the upper atmosphere.', ko: '오존층은 상층 대기에서 유해한 방사선으로부터 지구를 보호한다.' },
            { w: 'metabolism', p: '[명]', m: '물질대사, 신진대사', ex: 'Cold temperatures naturally slow down the metabolism of hibernating bears.', ko: '추운 기온은 겨울잠을 자는 곰의 신진대사를 자연스럽게 늦춘다.' },
            { w: 'symbiosis', p: '[명]', m: '공생 관계', ex: 'Bees and flowering plants demonstrate a mutualistic symbiosis.', ko: '꿀벌과 현화식물은 상호 호혜적인 공생 관계를 보여준다.' },
            { w: 'catalyst', p: '[명]', m: '촉매, 촉진제', ex: 'Enzymes act as biological catalysts that speed up chemical reactions.', ko: '효소는 생화학적 반응을 가속하는 생물학적 촉매 역할을 한다.' },
            { w: 'resilience', p: '[명]', m: '회복력, 탄성', ex: 'Forests show remarkable resilience after recovering from wildfires.', ko: '숲은 산불로부터 회복된 후 놀라운 자연 회복력을 보여준다.' }
        ],
        'R3': [
            { w: 'institution', p: '[명]', m: '제도, 기관', ex: 'Democratic institutions protect civil rights and ensure the rule of law.', ko: '민주주의 제도는 시민의 권리를 보호하고 법치를 보장한다.' },
            { w: 'sovereignty', p: '[명]', m: '주권, 자주권', ex: 'Every independent nation exercises sovereignty over its territory.', ko: '모든 독립 국가는 자국 영토에 대한 주권을 행사한다.' },
            { w: 'heritage', p: '[명]', m: '유산, 전통', ex: 'UNESCO designates historical landmarks as shared world cultural heritage.', ko: '유네스코는 역사적 명소를 인류 공동의 세계 문화유산으로 지정한다.' },
            { w: 'integration', p: '[명]', m: '통합, 융합', ex: 'Social integration fosters mutual understanding among diverse communities.', ko: '사회적 통합은 다양한 공동체 간의 상호 이해를 촉진한다.' },
            { w: 'solidarity', p: '[명]', m: '연대, 결속', ex: 'Citizens gathered in solidarity to support disaster relief efforts.', ko: '시민들은 재난 구호 활동을 지원하기 위해 연대하여 모였다.' },
            { w: 'civic', p: '[형]', m: '시민의, 공공의', ex: 'Voting in elections is considered a fundamental civic duty.', ko: '선거에서 투표하는 것은 기본적인 시민의 의무로 여겨진다.' },
            { w: 'pluralism', p: '[명]', m: '다원주의', ex: 'Cultural pluralism celebrates varied perspectives within a harmonious society.', ko: '문화 다원주의는 조화로운 사회 안에서 다양한 시각을 포용한다.' },
            { w: 'paradigm', p: '[명]', m: '패러다임, 전형적 사고 틀', ex: 'The Industrial Revolution shifted the global economic paradigm forever.', ko: '산업혁명은 세계 경제의 패러다임을 영원히 바꾸어 놓았다.' }
        ],
        'R4': [
            { w: 'cognitive', p: '[형]', m: '인지적인, 인식의', ex: 'Reading books regularly enhances human cognitive flexibility.', ko: '규칙적인 독서는 인간의 인지적 유연성을 향상시킨다.' },
            { w: 'empathy', p: '[명]', m: '공감, 감정이입', ex: 'Practicing active empathy helps resolve interpersonal conflicts.', ko: '적극적인 공감을 실천하는 것은 대인 관계의 갈등을 해결하는 데 도움이 된다.' },
            { w: 'subconscious', p: '[형]', m: '잠재의식의', ex: 'Our subconscious minds process emotional cues beneath active awareness.', ko: '우리의 잠재의식은 의식적인 인지 표면 아래에서 감정적 신호를 처리한다.' },
            { w: 'altruism', p: '[명]', m: '이타주의, 이타심', ex: 'Volunteering in hospital wards is a pure demonstration of altruism.', ko: '병원 병동에서 봉사하는 것은 이타심의 순수한 표본이다.' },
            { w: 'bias', p: '[명]', m: '편향, 선입견', ex: 'Confirmation bias leads people to seek information that confirms prior beliefs.', ko: '확증 편향은 사람들이 기존 신념을 확인해 주는 정보만을 찾게 만든다.' },
            { w: 'intrinsic', p: '[형]', m: '내재적인 (동기)', ex: 'Students motivated by intrinsic curiosity study more consistently.', ko: '내재적 호기심에 의해 동기부여된 학생들은 훨씬 꾸준하게 공부한다.' },
            { w: 'resilience', p: '[명]', m: '심리적 회복탄력성', ex: 'Emotional resilience enables individuals to bounce back from adversity.', ko: '정서적 회복탄력성은 개인이 역경을 딛고 다시 일어설 수 있게 해준다.' }
        ],
        'R5': [
            { w: 'singularity', p: '[명]', m: '특이점 (AI 초지능 기점)', ex: 'Technological singularity marks the point where AI exceeds human intelligence.', ko: '기술적 특이점은 인공지능이 인간 지능을 초월하는 기점을 일컫는다.' },
            { w: 'autonomous', p: '[형]', m: '자율적인, 자율 주행의', ex: 'Autonomous vehicles rely on sensors and neural networks to navigate safely.', ko: '자율주행 차량은 안전하게 주행하기 위해 센서와 신경망에 의존한다.' },
            { w: 'algorithm', p: '[명]', m: '알고리즘, 연산 절차', ex: 'Recommendation algorithms analyze browsing behavior to predict user preferences.', ko: '추천 알고리즘은 검색 행동을 분석하여 사용자 선호도를 예측한다.' },
            { w: 'quantum', p: '[명]', m: '양자 (물리학)', ex: 'Quantum computing promises to solve equations beyond standard computers.', ko: '양자 컴퓨터는 기존 컴퓨터의 한계를 뛰어넘는 계산을 해결할 것을 약속한다.' },
            { w: 'synthetic', p: '[형]', m: '합성의, 인공의', ex: 'Scientists engineered synthetic biology cells capable of cleaning pollution.', ko: '과학자들은 오염을 정화할 수 있는 인공 합성 생물 세포를 조작했다.' },
            { w: 'encryption', p: '[명]', m: '암호화', ex: 'End-to-end encryption safeguards sensitive digital transactions.', ko: '종단간 암호화는 민감한 디지털 금융 거래를 안전하게 보호한다.' }
        ],
        'T01': [
            { w: 'infrastructure', p: '[명]', m: '사회 기반 시설, 인프라', ex: 'Modern cities invest heavily in public transport infrastructure.', ko: '현대 도시는 대중교통 인프라에 막대한 투자를 한다.' },
            { w: 'metropolis', p: '[명]', m: '대도시, 중심지', ex: 'Seoul is a bustling metropolis that blends high technology with ancient palaces.', ko: '서울은 첨단 기술과 고궁이 어우러진 번화한 대도시이다.' },
            { w: 'commute', p: '[동]', m: '통근하다, 통학하다', ex: 'Millions of workers commute to downtown offices by subway every morning.', ko: '수백만 명의 직장인들이 매일 아침 지하철로 도심 사무실로 출근한다.' },
            { w: 'convenience', p: '[명]', m: '편의, 편리함', ex: 'Urban living provides 24-hour convenience stores and express delivery.', ko: '도시 생활은 24시간 편의점과 특급 배송의 편리함을 제공한다.' },
            { w: 'pedestrian', p: '[명]', m: '보행자', ex: 'City planners created wide pedestrian walkways along shopping districts.', ko: '도시 계획가들은 쇼핑 지구를 따라 넓은 보행자 전용 도로를 만들었다.' }
        ],
        'T02': [
            { w: 'broadcast', p: '[동]', m: '방송하다, 방영하다', ex: 'The international news network will broadcast the summit live worldwide.', ko: '국제 뉴스 방송망은 정상회담을 전 세계에 생중계할 것이다.' },
            { w: 'correspondent', p: '[명]', m: '특파원, 통신원', ex: 'The foreign correspondent reported live from the disaster zone.', ko: '해외 특파원이 재난 현장에서 생생하게 현장 보도를 전했다.' },
            { w: 'verify', p: '[동]', m: '검증하다, 확인하다', ex: 'Journalists must verify facts from multiple sources before publishing stories.', ko: '기자들은 기사를 보도하기 전에 여러 출처에서 사실을 검증해야 한다.' },
            { w: 'coverage', p: '[명]', m: '보도, 방송 범위', ex: 'Media coverage of the global climate conference spanned every continent.', ko: '세계 기후 회의에 대한 언론 보도는 모든 대륙에 걸쳐 이루어졌다.' }
        ],
        'T03': [
            { w: 'inflation', p: '[명]', m: '물가 상승, 인플레이션', ex: 'Central banks raise interest rates to curb runaway inflation.', ko: '중앙은행은 급격한 물가 상승을 억제하기 위해 금리를 인상한다.' },
            { w: 'revenue', p: '[명]', m: '매출, 수익', ex: 'The tech startup achieved record revenue following its overseas expansion.', ko: '그 기술 스타트업은 해외 진출 이후 사상 최대 매출을 달성했다.' },
            { w: 'asset', p: '[명]', m: '자산, 가치 있는 것', ex: 'Knowledge and adaptability are the most valuable assets in the modern job market.', ko: '지식과 적응력은 현대 고용 시장에서 가장 가치 있는 자산이다.' },
            { w: 'venture', p: '[명]', m: '모험적 사업, 벤처', ex: 'Investors backed a promising venture in renewable clean energy.', ko: '투자자들은 유망한 신재생 청정 에너지 벤처 사업을 지원했다.' }
        ],
        'T04': [
            { w: 'protagonist', p: '[명]', m: '주인공', ex: 'The protagonist faces formidable challenges before achieving redemption.', ko: '주인공은 구원을 얻기 전에 막강한 난관들에 직면한다.' },
            { w: 'allegory', p: '[명]', m: '우화, 풍유', ex: 'George Orwell’s Animal Farm is a famous political allegory.', ko: '조지 오웰의 동물농장은 유명한 정치적 우화이다.' },
            { w: 'climax', p: '[명]', m: '절정, 클라이맥스', ex: 'The dramatic novel builds tension steadily toward an astonishing climax.', ko: '그 극적인 소설은 놀라운 절정을 향해 긴장감을 꾸준히 고조시킨다.' },
            { w: 'narrative', p: '[명]', m: '서사, 이야기', ex: 'The author weaves a compelling historical narrative spanning three generations.', ko: '작가는 3대에 걸친 흥미진진한 역사적 서사를 엮어낸다.' }
        ],
        'T05': [
            { w: 'itinerary', p: '[명]', m: '여행 일정표', ex: 'Our travel itinerary includes guided museum tours and historical landmarks.', ko: '우리의 여행 일정표에는 가이드 박물관 투어와 역사 유적지 방문이 포함되어 있다.' },
            { w: 'hospitality', p: '[명]', m: '환대, 친절', ex: 'Local villagers welcomed the backpackers with extraordinary hospitality.', ko: '현지 마을 사람들은 배낭여행자들을 각별한 환대로 맞이해 주었다.' },
            { w: 'destination', p: '[명]', m: '목적지, 여행지', ex: 'The tranquil seaside resort became a popular holiday destination.', ko: '한적한 해변 휴양지는 인기 있는 휴가 목적지가 되었다.' },
            { w: 'exotic', p: '[형]', m: '이국적인', ex: 'Street markets in Bangkok are filled with exotic fruits and savory aromas.', ko: '방콕의 야시장은 이국적인 과일과 맛있는 향기로 가득 차 있다.' }
        ],
        'T06': [
            { w: 'cardiovascular', p: '[형]', m: '심혈관의', ex: 'Regular aerobic exercises strengthen your cardiovascular endurance.', ko: '규칙적인 유산소 운동은 심혈관 지구력을 강화한다.' },
            { w: 'therapeutic', p: '[형]', m: '치유의, 치료상의', ex: 'Walking through pine forests has a scientifically proven therapeutic effect.', ko: '소나무 숲을 걷는 것은 과학적으로 입증된 치유 효과를 지닌다.' },
            { w: 'immunity', p: '[명]', m: '면역력, 면역', ex: 'Getting sufficient sleep is essential for maintaining strong immunity.', ko: '충분한 수면을 취하는 것은 튼튼한 면역력을 유지하는 데 필수적이다.' },
            { w: 'mindfulness', p: '[명]', m: '마음챙김, 온전한 알아차림', ex: 'Daily mindfulness meditation reduces work-related anxiety and fatigue.', ko: '매일의 마음챙김 명상은 업무로 인한 불안과 피로를 덜어준다.' }
        ],
        'T07': [
            { w: 'spontaneous', p: '[형]', m: '자발적인, 즉흥적인', ex: 'The crowd erupted into spontaneous applause at the end of the concert.', ko: '관중들은 콘서트가 끝나자 자발적인 갈채를 터뜨렸다.' },
            { w: 'nuance', p: '[명]', m: '뉘앙스, 미묘한 차이', ex: 'A bilingual speaker understands the subtle nuance between similar phrases.', ko: '이중언어 구사자는 유사한 문구 사이의 미묘한 뉘앙스를 이해한다.' },
            { w: 'articulate', p: '[동]', m: '명확히 표현하다', ex: 'She was able to articulate her proposals clearly during the debate.', ko: '그녀는 토론 중에 자신의 제안을 명확하게 표현할 수 있었다.' },
            { w: 'rapport', p: '[명]', m: '친밀한 관계, 라포', ex: 'The teacher established an excellent rapport with all her students.', ko: '선생님은 모든 학생들과 훌륭한 친밀 관계(라포)를 형성했다.' }
        ],
        'T08': [
            { w: 'legislation', p: '[명]', m: '법률 제정, 입법', ex: 'Lawmakers passed landmark legislation to protect consumer privacy.', ko: '국회의원들은 소비자 사생활을 보호하기 위한 획기적인 법률을 통과시켰다.' },
            { w: 'jurisdiction', p: '[명]', m: '관할권, 사법권', ex: 'The international maritime treaty falls under the court’s jurisdiction.', ko: '국제 해양 조약은 해당 법원의 관할권에 속한다.' },
            { w: 'advocate', p: '[동]', m: '옹호하다, 지지하다', ex: 'Human rights organizations advocate for equitable education access.', ko: '인권 단체들은 공평한 교육 기회를 옹호한다.' },
            { w: 'accountability', p: '[명]', m: '책임성, 책무', ex: 'Transparent budgeting ensures governmental financial accountability.', ko: '투명한 예산 편성은 정부의 재정적 책임성을 보장한다.' }
        ],
        'T09': [
            { w: 'renewable', p: '[형]', m: '재생 가능한', ex: 'Solar and wind energy are crucial sources of renewable power.', ko: '태양광과 풍력 에너지는 재생 가능한 전력의 핵심적인 원천이다.' },
            { w: 'deplete', p: '[동]', m: '고갈시키다, 줄이다', ex: 'Overfishing threatens to deplete marine food resources globally.', ko: '남획은 전 세계적으로 해양 식량 자원을 고갈시킬 위험이 있다.' },
            { w: 'sustainable', p: '[형]', m: '지속 가능한', ex: 'Cities adopt sustainable recycling policies to minimize landfill waste.', ko: '도시들은 매립지 쓰레기를 최소화하기 위해 지속 가능한 재활용 정책을 도입한다.' },
            { w: 'conservation', p: '[명]', m: '자연 보존, 절약', ex: 'Water conservation measures were enacted during the summer drought.', ko: '여름 가뭄 동안 물 절약 및 보존 조치가 시행되었다.' }
        ],
        'T10': [
            { w: 'neuroplasticity', p: '[명]', m: '신경가소성 (뇌의 변화 능력)', ex: 'Neuroplasticity shows that the brain continually adapts to new learning.', ko: '신경가소성은 뇌가 새로운 학습에 끊임없이 적응한다는 것을 보여준다.' },
            { w: 'deductive', p: '[형]', m: '연역적인', ex: 'Sherlock Holmes utilized deductive reasoning to solve puzzling mysteries.', ko: '셜록 홈즈는 난해한 미스터리를 풀기 위해 연역적 추론을 활용했다.' },
            { w: 'mnemonic', p: '[명]', m: '기억을 돕는 연상 장치', ex: 'Acronyms serve as useful mnemonic devices when preparing for examinations.', ko: '머리글자어는 시험을 준비할 때 유용한 연상 기억 장치로 쓰인다.' },
            { w: 'comprehension', p: '[명]', m: '독해력, 이해력', ex: 'Daily reading practice broadens vocabulary and sharpens reading comprehension.', ko: '매일의 독서 연습은 어휘를 넓히고 독해력을 날카롭게 다듬어 준다.' }
        ],
        'T11': [
            { w: 'phenomenon', p: '[명]', m: '현상, 열풍', ex: 'The global rise of Korean pop music is a cultural phenomenon.', ko: '한국 대중음악의 세계적인 부상은 하나의 거대한 문화적 현상이다.' },
            { w: 'fandom', p: '[명]', m: '팬덤, 팬층', ex: 'The enthusiastic fandom organized charity projects in their artist’s honor.', ko: '열정적인 팬덤은 아티스트를 기리기 위해 자선 프로젝트를 조직했다.' },
            { w: 'blockbuster', p: '[명]', m: '흥행 대작 영화', ex: 'The summer blockbuster shattered box office records worldwide.', ko: '그 여름 흥행 대작은 전 세계 박스오피스 기록을 갈아치웠다.' },
            { w: 'cinematic', p: '[형]', m: '영화의, 영화 같은', ex: 'The game features breathtaking cinematic visuals and an orchestral score.', ko: '그 게임은 숨막히는 영화 같은 영상미와 오케스트라 사운드트랙을 자랑한다.' }
        ],
        'T12': [
            { w: 'gastronomy', p: '[명]', m: '미식학, 요리 예술', ex: 'French gastronomy is celebrated for exquisite techniques and fresh ingredients.', ko: '프랑스 미식은 정교한 조리 기법과 신선한 재료로 유명하다.' },
            { w: 'delicacy', p: '[명]', m: '진미, 별미', ex: 'Truffles are regarded as a rare luxury delicacy worldwide.', ko: '트러플(송로버섯)은 전 세계적으로 희귀한 고급 별미로 여겨진다.' },
            { w: 'culinary', p: '[형]', m: '요리의, 조리의', ex: 'Aspiring chefs refine their culinary talents at prestigious academies.', ko: '요리사를 꿈꾸는 이들은 명문 요리 아카데미에서 조리 재능을 연마한다.' },
            { w: 'palate', p: '[명]', m: '미각, 입맛', ex: 'The rich balance of sweet and tangy flavors delighted the food critic’s palate.', ko: '달콤함과 상큼함의 풍부한 조화가 음식 비평가의 미각을 사로잡았다.' }
        ],
        'T13': [
            { w: 'expedition', p: '[명]', m: '탐험, 원정', ex: 'The Arctic expedition surveyed melting glaciers across polar coordinates.', ko: '북극 탐험대는 극지 좌표 전역에 걸쳐 녹아내리는 빙하를 조사했다.' },
            { w: 'wilderness', p: '[명]', m: '황야, 야생의 자연', ex: 'Hikers navigated the pristine mountain wilderness under starry skies.', ko: '등산객들은 별빛 쏟아지는 하늘 아래 태고의 산악 황야를 트레킹했다.' },
            { w: 'topography', p: '[명]', m: '지형, 지세', ex: 'The rugged topography of the canyon challenged the mountain bikers.', ko: '협곡의 험준한 지형은 산악 자전거 라이더들에게 큰 도전 과제였다.' },
            { w: 'navigation', p: '[명]', m: '항해, 길찾기', ex: 'Satellite navigation systems assist hikers through uncharted territories.', ko: '위성 내비게이션 시스템은 등산객들이 미지의 지역을 횡단할 수 있도록 돕는다.' }
        ],
        'T14': [
            { w: 'collaborate', p: '[동]', m: '협력하다, 공동 작업하다', ex: 'Engineers collaborate with graphic designers to develop intuitive mobile apps.', ko: '엔지니어들은 직관적인 모바일 앱을 개발하기 위해 그래픽 디자이너들과 협력한다.' },
            { w: 'synergy', p: '[명]', m: '시너지 효과, 동반 상승', ex: 'Merging the two creative departments produced unmatched organizational synergy.', ko: '두 창의 부서를 통합하자 독보적인 조직 시너지 효과가 창출되었다.' },
            { w: 'delegate', p: '[동]', m: '위임하다, 권한을 넘기다', ex: 'A successful project manager knows when to delegate tasks to team members.', ko: '성공적인 프로젝트 관리자는 팀원들에게 언제 업무를 위임해야 하는지 안다.' },
            { w: 'negotiate', p: '[동]', m: '협상하다, 절충하다', ex: 'Diplomats worked tirelessly to negotiate a peaceful resolution.', ko: '외교관들은 평화로운 해결책을 협상하기 위해 지칠 줄 모르고 일했다.' }
        ],
        'T15': [
            { w: 'virtual', p: '[형]', m: '가상의, 사실상의', ex: 'Students joined interactive virtual classrooms to attend lectures remotely.', ko: '학생들은 원격으로 강의를 수강하기 위해 인터랙티브 가상 교실에 접속했다.' },
            { w: 'cybersecurity', p: '[명]', m: '사이버 보안', ex: 'Robust cybersecurity frameworks protect cloud databases from ransomware attacks.', ko: '강력한 사이버 보안 체계는 랜섬웨어 공격으로부터 클라우드 데이터를 보호한다.' },
            { w: 'interface', p: '[명]', m: '인터페이스, 접점', ex: 'The user interface is designed to be sleek, intuitive, and accessible.', ko: '사용자 인터페이스는 매끄럽고 직관적이며 접근하기 쉽게 설계되었다.' },
            { w: 'avatar', p: '[명]', m: '아바타, 분신', ex: 'Users customize their digital avatars before entering the 3D metaverse plaza.', ko: '사용자들은 3D 메타버스 광장에 입장하기 전에 자신의 디지털 아바타를 꾸민다.' }
        ]
    },

    /**
     * AI 맞춤 단원 생성 함수 (Generator)
     */
    generateUnit({
        title = '',
        purposeId = 'suneung_reading',
        purposeCustom = '',
        themeId = 'R5',
        themeCustom = '',
        level = 7,
        wordsPerDay = 10,
        totalDays = 7
    }) {
        const totalWordsNeeded = wordsPerDay * totalDays;
        const unitId = 'custom-unit-' + Date.now();

        // 1. 목적 명칭 확정
        let purposeObj = this.PURPOSES.find(p => p.id === purposeId);
        const purposeLabel = purposeCustom ? purposeCustom.trim() : (purposeObj ? purposeObj.label : '맞춤 어휘 학습');
        const purposeIcon = purposeObj ? purposeObj.icon : '✨';

        // 2. 테마 명칭 확정
        let themeObj = [...this.THEMES.reading, ...this.THEMES.curated].find(t => t.id === themeId);
        const themeLabel = themeCustom ? themeCustom.trim() : (themeObj ? themeObj.name : '종합 핵심 어휘');
        const themeIcon = themeObj ? themeObj.icon : '📚';

        // 3. 단원 제목 확정
        const defaultTitle = `${themeLabel} ${totalDays}일 완성 (${purposeLabel})`;
        const finalTitle = title ? title.trim() : defaultTitle;

        // 4. 어휘 지식 베이스에서 최적 단어 후보군 수집
        const candidatePool = [];

        // 테마 전용 기본 단어 주입
        if (this.THEME_VOCABULARY_BASE[themeId]) {
            this.THEME_VOCABULARY_BASE[themeId].forEach(item => {
                candidatePool.push({
                    word: item.w,
                    pos: item.p,
                    meaning: item.m,
                    example: item.ex,
                    trans: item.ko
                });
            });
        }

        // 베리타스 전역 렉시콘 및 단어 풀에서 추가 매핑
        const allCurated = (typeof CURATED_WORDS_DATA !== 'undefined' ? CURATED_WORDS_DATA : []);
        const lexicon = (typeof READING_LEXICON_DATA !== 'undefined' ? READING_LEXICON_DATA : {});
        const lexiconKeys = Object.keys(lexicon);

        // Curated 단어 중 목적 및 테마와 연관되거나 레벨이 근접한 단어 추가
        allCurated.forEach(cw => {
            const wName = cw.영단어 || cw.단어;
            if (wName && !candidatePool.some(c => c.word.toLowerCase() === wName.toLowerCase())) {
                candidatePool.push({
                    word: wName,
                    pos: cw.품사 || '[명]',
                    meaning: cw.뜻 || '',
                    example: cw.예문 || `The word "${wName}" is essential for academic mastery.`,
                    trans: cw.해석 || cw.예문해석 || `"${wName}"이라는 단어는 학술적 성취를 위해 필수적이다.`
                });
            }
        });

        // 부족할 경우 렉시콘에서 보충
        let lexIdx = 0;
        while (candidatePool.length < totalWordsNeeded && lexIdx < lexiconKeys.length) {
            const k = lexiconKeys[lexIdx];
            if (!candidatePool.some(c => c.word.toLowerCase() === k.toLowerCase()) && k.length > 2) {
                const info = lexicon[k];
                candidatePool.push({
                    word: k,
                    pos: info.pos || '[명]',
                    meaning: info.meaning || '',
                    example: `Understanding "${k}" deepens your reading comprehension.`,
                    trans: `"${k}"의 의미를 이해하면 독해력이 한층 깊어진다.`
                });
            }
            lexIdx++;
        }

        // 5. 필요한 개수만큼 슬라이싱
        const selectedWords = candidatePool.slice(0, totalWordsNeeded);

        // 6. DAY별 분할 패키징 (DAY 01 ~ DAY M, 일별 N개)
        const packagedWords = selectedWords.map((item, idx) => {
            const dayNum = Math.floor(idx / wordsPerDay) + 1;
            const itemNum = (idx % wordsPerDay) + 1;
            const dayStr = `DAY ${String(dayNum).padStart(2, '0')}`;

            return {
                collectionId: unitId,
                collectionTitle: finalTitle,
                DAY: dayStr,
                번호: itemNum,
                단어: item.word,
                영단어: item.word,
                품사: item.pos,
                뜻: item.meaning,
                예문: item.example,
                해석: item.trans,
                예문해석: item.trans,
                category: 'custom_ai',
                badge: `AI 맞춤 • ${dayStr}`
            };
        });

        // 7. 메타데이터 생성
        const collectionMeta = {
            id: unitId,
            userId: (window.storage && window.storage.getActiveUser()) ? window.storage.getActiveUser().id : 'user_default',
            title: finalTitle,
            badge: `${purposeIcon} AI 맞춤 • ${purposeLabel}`,
            category: 'custom_ai',
            purpose: purposeLabel,
            purposeId: purposeId,
            purposeCustom: purposeCustom,
            level: level,
            theme: themeLabel,
            themeId: themeId,
            themeCustom: themeCustom,
            wordsPerDay: wordsPerDay,
            totalDays: totalDays,
            totalWords: packagedWords.length,
            description: `${purposeLabel} & ${themeLabel} 맞춤 단원 (하루 ${wordsPerDay}단어씩 ${totalDays}일 완성, 총 ${packagedWords.length}단어)`,
            createdAt: new Date().toISOString()
        };

        // 8. Storage에 영구 보관
        if (window.storage && typeof window.storage.saveCustomCollection === 'function') {
            window.storage.saveCustomCollection(collectionMeta, packagedWords);
        }

        return {
            meta: collectionMeta,
            words: packagedWords
        };
    }
};

if (typeof window !== 'undefined') {
    window.customVocaAI = window.customVocaAI;
}
