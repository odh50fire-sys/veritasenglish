/**
 * Veritas English - 10단계 실력 진단 레벨테스트 문제 은행 데이터베이스
 * 레벨 1(Starter) ~ 레벨 10(Veritas Elite) 전 레벨별 4대 핵심 영역(어휘, 문법, 독해, 회화) 총 60문항
 */
const LEVEL_TEST_BANK = [
  {
    "id": "lt-1-1",
    "level": 1,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 단어는?\n\"I read a _______ before going to sleep.\"",
    "options": [
      "book",
      "water",
      "desk",
      "pencil"
    ],
    "answer": 0,
    "explanation": "'잠들기 전에 책(book)을 읽는다'가 가장 자연스럽습니다."
  },
  {
    "id": "lt-1-2",
    "level": 1,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 중 '사과, 바나나, 포도'를 모두 포함하는 단어는?",
    "options": [
      "Animals",
      "Fruits",
      "Colors",
      "Sports"
    ],
    "answer": 1,
    "explanation": "사과, 바나나, 포도는 모두 과일(Fruits)에 속합니다."
  },
  {
    "id": "lt-1-3",
    "level": 1,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "빈칸에 들어갈 be동사로 알맞은 것은?\n\"She _______ a kind teacher.\"",
    "options": [
      "am",
      "are",
      "is",
      "be"
    ],
    "answer": 2,
    "explanation": "주어가 3인칭 단수 대명사 'She'이므로 현재형 be동사는 'is'가 올바릅니다."
  },
  {
    "id": "lt-1-4",
    "level": 1,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 문법적으로 올바른 문장은?",
    "options": [
      "He have two dogs.",
      "They plays soccer.",
      "I like fresh apples.",
      "She do not like milk."
    ],
    "answer": 2,
    "explanation": "'I like fresh apples.'가 주어-동사 수 일치가 맞는 유일한 문장입니다. (He has / They play / She does not)"
  },
  {
    "id": "lt-1-5",
    "level": 1,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Tom has a small white cat. Its name is Snow. Snow likes sleeping by the warm window.",
    "question": "Where does Snow like to sleep?",
    "options": [
      "Under the bed",
      "By the warm window",
      "In the garden",
      "On the table"
    ],
    "answer": 1,
    "explanation": "본문의 마지막 문장 'Snow likes sleeping by the warm window'에서 창가 옆에서 자는 것을 좋아함을 알 수 있습니다."
  },
  {
    "id": "lt-1-6",
    "level": 1,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: How are you doing today?\nB: ________________________",
    "question": "B의 응답으로 가장 알맞은 것은?",
    "options": [
      "I'm pretty good, thanks!",
      "I am twelve years old.",
      "Yes, I do.",
      "Nice to see you yesterday."
    ],
    "answer": 0,
    "explanation": "'How are you doing today?(오늘 어떻게 지내?)'라는 안부 인사에 'I'm pretty good, thanks!(잘 지내, 고마워!)'가 알맞습니다."
  },
  {
    "id": "lt-2-1",
    "level": 2,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 문맥상 빈칸에 알맞은 단어는?\n\"We stayed at a cozy _______ near the beach during our trip.\"",
    "options": [
      "factory",
      "hotel",
      "library",
      "hospital"
    ],
    "answer": 1,
    "explanation": "해변 근처 여행 중 머문 안락한 숙소는 호텔(hotel)입니다."
  },
  {
    "id": "lt-2-2",
    "level": 2,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "단어와 뜻의 연결이 올바르지 않은 것은?",
    "options": [
      "delicious - 맛있는",
      "dangerous - 안전한",
      "expensive - 비싼",
      "comfortable - 편안한"
    ],
    "answer": 1,
    "explanation": "'dangerous'의 뜻은 '위험한'입니다. '안전한'은 safe입니다."
  },
  {
    "id": "lt-2-3",
    "level": 2,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "빈칸에 들어갈 알맞은 과거형 동사는?\n\"Yesterday, Minho _______ his homework after dinner.\"",
    "options": [
      "finish",
      "finishes",
      "finished",
      "finishing"
    ],
    "answer": 2,
    "explanation": "명백한 과거 시점 부사 'Yesterday'가 있으므로 과거형 'finished'를 써야 합니다."
  },
  {
    "id": "lt-2-4",
    "level": 2,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 들어갈 알맞은 조동사는?\n\"It is raining heavily. You _______ take an umbrella.\"",
    "options": [
      "should",
      "cannot",
      "might not",
      "are"
    ],
    "answer": 0,
    "explanation": "비가 많이 오므로 우산을 챙겨야 한다는 권고/충고의 조동사 'should(~해야 한다)'가 알맞습니다."
  },
  {
    "id": "lt-2-5",
    "level": 2,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Last Saturday, Emily visited the city zoo with her brother. She was excited to see the baby elephants playing in the mud pool. They took many memorable photos.",
    "question": "What made Emily excited at the zoo?",
    "options": [
      "Buying animal toys",
      "Eating lunch at the cafe",
      "Watching baby elephants play in the mud",
      "Riding the safari bus"
    ],
    "answer": 2,
    "explanation": "본문에서 'She was excited to see the baby elephants playing in the mud pool'이라고 명시되어 있습니다."
  },
  {
    "id": "lt-2-6",
    "level": 2,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Excuse me, where is the nearest subway station?\nB: ________________________",
    "question": "B의 응답으로 가장 알맞은 것은?",
    "options": [
      "I will buy a subway ticket.",
      "Go straight two blocks and turn left.",
      "The train leaves at six o'clock.",
      "Yes, I like taking the bus."
    ],
    "answer": 1,
    "explanation": "길을 묻는 질문에 대한 적절한 안내는 '두 블록 직진 후 좌회전하세요(Go straight two blocks and turn left)'입니다."
  },
  {
    "id": "lt-3-1",
    "level": 3,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 들어갈 알맞은 단어는?\n\"The museum has a vast _______ of ancient gold coins.\"",
    "options": [
      "pollution",
      "collection",
      "argument",
      "traffic"
    ],
    "answer": 1,
    "explanation": "고대 금화들의 방대한 수집품/소장품을 의미하므로 collection이 가장 적절합니다."
  },
  {
    "id": "lt-3-2",
    "level": 3,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 숙어의 의미로 올바른 것은?\n\"keep in touch\"",
    "options": [
      "손을 맞잡다",
      "연락을 유지하다",
      "약속을 취소하다",
      "비밀을 지키다"
    ],
    "answer": 1,
    "explanation": "'keep in touch'는 '연락하고 지내다, 연락을 유지하다'라는 대표적인 중학 필수 관용구입니다."
  },
  {
    "id": "lt-3-3",
    "level": 3,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "빈칸에 들어갈 알맞은 접속사는?\n\"She was very tired, _______ she finished her science project.\"",
    "options": [
      "because",
      "so",
      "but",
      "if"
    ],
    "answer": 2,
    "explanation": "피곤했지만(원인/상태) 프로젝트를 끝마쳤다는 역접의 관계이므로 'but'이 적절합니다."
  },
  {
    "id": "lt-3-4",
    "level": 3,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "빈칸에 들어갈 동사의 형태로 알맞은 것은?\n\"My little sister enjoys _______ picture books before sleeping.\"",
    "options": [
      "read",
      "to reading",
      "reading",
      "reads"
    ],
    "answer": 2,
    "explanation": "동사 enjoy는 동명사(-ing)만을 목적어로 취하므로 'reading'이 올바릅니다."
  },
  {
    "id": "lt-3-5",
    "level": 3,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Bees play a vital role in our ecosystem. When they travel from flower to flower gathering sweet nectar, they carry pollen. This pollination process enables plants, trees, and vegetables to produce seeds and delicious fruits.",
    "question": "What is the main idea of the passage?",
    "options": [
      "How bees build their honeycombs",
      "The importance of bees in plant pollination",
      "Different types of flowers bees visit",
      "The dangerous predators of honeybees"
    ],
    "answer": 1,
    "explanation": "꿀벌이 꽃가루를 옮기는 수분(pollination) 활동을 통해 식물과 열매가 자라도록 돕는 생태계적 중요성을 설명하는 글입니다."
  },
  {
    "id": "lt-3-6",
    "level": 3,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Can you give me a hand moving this heavy table?\nB: ________________________",
    "question": "B의 알맞은 응답은?",
    "options": [
      "Sure, where do you want to put it?",
      "I already lost my hand.",
      "No, the table is very clean.",
      "Thank you for the delicious meal."
    ],
    "answer": 0,
    "explanation": "'give me a hand(나 좀 도와줄래?)'라는 요청에 'Sure, where do you want to put it?(물론이지, 어디에 두고 싶니?)'가 적절합니다."
  },
  {
    "id": "lt-4-1",
    "level": 4,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "밑줄 친 단어와 의미가 가장 가까운 것은?\n\"He was <curious> about how the clock functioned.\"",
    "options": [
      "inquisitive",
      "bored",
      "angry",
      "careless"
    ],
    "answer": 0,
    "explanation": "'curious(호기심이 많은)'와 가장 가까운 유의어는 'inquisitive(탐구심이 많은, 알고 싶어 하는)'입니다."
  },
  {
    "id": "lt-4-2",
    "level": 4,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 공통으로 들어갈 알맞은 단어는?\n- We need to _______ the date of the meeting.\n- Several factors _______ the regional climate.",
    "options": [
      "determine",
      "destroy",
      "disappear",
      "decorate"
    ],
    "answer": 0,
    "explanation": "'determine'은 '결정하다, 알아내다, 좌우하다'라는 뜻으로 두 문맥에 모두 알맞습니다."
  },
  {
    "id": "lt-4-3",
    "level": 4,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "빈칸에 들어갈 to부정사의 용법으로 알맞은 형태는?\n\"She went to the library _______ for her final history exam.\"",
    "options": [
      "study",
      "to study",
      "studying",
      "studied"
    ],
    "answer": 1,
    "explanation": "'시험공부를 하기 위해 도서관에 갔다'라는 목적을 나타내는 to부정사의 부사적 용법(to study)입니다."
  },
  {
    "id": "lt-4-4",
    "level": 4,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 밑줄 친 부분의 쓰임이 어법상 어색한 것은?",
    "options": [
      "My mother made me <clean> my bedroom.",
      "The teacher asked us <to listen> carefully.",
      "I saw the boy <run> across the street.",
      "He wanted me <go> to the supermarket."
    ],
    "answer": 3,
    "explanation": "동사 want는 목적격 보어로 to부정사를 취하므로 'wanted me to go'가 되어야 합니다."
  },
  {
    "id": "lt-4-5",
    "level": 4,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Plastic pollution has become one of the most pressing environmental issues. Millions of tons of single-use plastics end up in our oceans every year, endangering marine creatures that mistake plastic debris for food. To resolve this, many cities are banning plastic bags and encouraging reusable alternatives.",
    "question": "According to the passage, why are marine animals in danger?",
    "options": [
      "Oceans are becoming too cold for them.",
      "They mistake plastic waste for food.",
      "Fishermen catch too many fish.",
      "Reusables take away their habitats."
    ],
    "answer": 1,
    "explanation": "'endangering marine creatures that mistake plastic debris for food'에서 해양 생물들이 플라스틱 쓰레기를 먹이로 착각하기 때문임을 알 수 있습니다."
  },
  {
    "id": "lt-4-6",
    "level": 4,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Are you ready to order, or do you need a few more minutes?\nB: ________________________",
    "question": "식당에서 손님(B)의 응답으로 가장 알맞은 것은?",
    "options": [
      "We are ready; I'll have the grilled salmon.",
      "Yes, the check please.",
      "No, I don't work here.",
      "The weather is very warm today."
    ],
    "answer": 0,
    "explanation": "주문할 준비가 되었는지 묻는 직원의 질문에 '네, 준비되었습니다. 구운 연어로 할게요(We are ready; I'll have the grilled salmon)'가 자연스럽습니다."
  },
  {
    "id": "lt-5-1",
    "level": 5,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 문맥상 빈칸에 알맞은 단어는?\n\"The detective searched the room thoroughly to find solid _______ of the robbery.\"",
    "options": [
      "evidence",
      "entertainment",
      "recreation",
      "illusion"
    ],
    "answer": 0,
    "explanation": "강도 사건의 확실한 '증거/근거'를 찾기 위해 방을 수색했다는 문맥이므로 evidence가 적절합니다."
  },
  {
    "id": "lt-5-2",
    "level": 5,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 숙어의 의미로 올바른 것은?\n\"put off\"",
    "options": [
      "착용하다",
      "미루다, 연기하다",
      "불을 끄다",
      "칭찬하다"
    ],
    "answer": 1,
    "explanation": "'put off'는 postpone, delay와 동의어로 '미루다, 연기하다'를 뜻합니다."
  },
  {
    "id": "lt-5-3",
    "level": 5,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "빈칸에 들어갈 알맞은 관계대명사는?\n\"The scientist _______ won the Nobel Prize gave an inspiring speech.\"",
    "options": [
      "which",
      "who",
      "whom",
      "whose"
    ],
    "answer": 1,
    "explanation": "선행사가 사람(The scientist)이고 뒤에 주어가 없는 주격 자리이므로 'who'가 올바릅니다."
  },
  {
    "id": "lt-5-4",
    "level": 5,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 능동태 문장을 수동태로 바르게 전환한 것은?\n\"The famous architect designed this library.\"",
    "options": [
      "This library was designed by the famous architect.",
      "This library is designed by the famous architect.",
      "This library designed by the famous architect.",
      "This library has been designed by the famous architect."
    ],
    "answer": 0,
    "explanation": "원문이 과거 시제(designed)이므로 수동태는 'was designed by ~'가 올바릅니다."
  },
  {
    "id": "lt-5-5",
    "level": 5,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Sleep is not merely a passive state of rest; it is an active biological necessity. During deep sleep cycles, our brain consolidates memories learned throughout the day, while clearing cellular waste products. Chronic sleep deprivation severely impairs emotional regulation, focus, and immune function.",
    "question": "What is the primary message of this passage?",
    "options": [
      "Dreaming is the only sign of high brain activity.",
      "Sleep is essential for memory consolidation and physical health.",
      "Exercising before bedtime guarantees deeper sleep.",
      "Adults need less sleep than school students."
    ],
    "answer": 1,
    "explanation": "수면이 기억 통합과 신체적 건강(면역력, 감정 조절)에 필수적인 생물학적 활동임을 강조하고 있습니다."
  },
  {
    "id": "lt-5-6",
    "level": 5,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: I'm really nervous about the school speech contest tomorrow.\nB: ________________________",
    "question": "B의 격려 응답으로 가장 알맞은 것은?",
    "options": [
      "Take it easy! You have practiced so hard, so you'll do great.",
      "You should have memorized the script last month.",
      "I don't care about your contest at all.",
      "Turn off the microphone right now."
    ],
    "answer": 0,
    "explanation": "내일 발표 대회를 앞두고 긴장하는 상대에게 '마음 편히 가져! 열심히 연습했으니 잘 해낼 거야'라고 격려하는 표현이 가장 적절합니다."
  },
  {
    "id": "lt-6-1",
    "level": 6,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 단어는?\n\"The experiment produced results that were completely _______ with our original hypothesis.\"",
    "options": [
      "consistent",
      "hostile",
      "allergic",
      "temporary"
    ],
    "answer": 0,
    "explanation": "'be consistent with(~와 일치하다, 부합하다)'는 가설과 결과가 일치함을 나타낼 때 쓰는 핵심 학술 표현입니다."
  },
  {
    "id": "lt-6-2",
    "level": 6,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 들어갈 연결사로 가장 알맞은 것은?\n\"Solar panels produce clean energy without greenhouse gases; _______, installing them requires high initial capital.\"",
    "options": [
      "however",
      "therefore",
      "furthermore",
      "for instance"
    ],
    "answer": 0,
    "explanation": "앞 문장은 장점(친환경), 뒷 문장은 단점(초기 설치비 부담)을 언급하므로 역접의 연결사 'however'가 적절합니다."
  },
  {
    "id": "lt-6-3",
    "level": 6,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "어법상 빈칸에 들어갈 알맞은 분사 형태는?\n\"_______ by the loud thunder, the small dog hid beneath the sofa.\"",
    "options": [
      "Frighten",
      "Frightening",
      "Frightened",
      "To frighten"
    ],
    "answer": 2,
    "explanation": "주어인 작은 개(the small dog)가 천둥소리에 '겁을 먹은(수동)' 상태이므로 과거분사 'Frightened'로 시작하는 분사구문입니다."
  },
  {
    "id": "lt-6-4",
    "level": 6,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 어법상 올바른 현재완료 문장은?",
    "options": [
      "I have visited Paris two years ago.",
      "She has lived in Seoul since she was born.",
      "When have you bought that smart watch?",
      "They have finished the project yesterday."
    ],
    "answer": 1,
    "explanation": "현재완료는 특정 과거 시점 부사(two years ago, yesterday, when)와 함께 쓸 수 없으며, 'since + 과거시점'과 결합한 'She has lived in Seoul since she was born.'이 정확합니다."
  },
  {
    "id": "lt-6-5",
    "level": 6,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Urban heat islands occur when cities replace natural land cover with dense concentrations of pavement, buildings, and other surfaces that absorb and retain heat. This effect increases energy costs for air conditioning, air pollution levels, and heat-related illnesses. Planting urban trees and creating green rooftops are proven mitigations.",
    "question": "What is an effective way to mitigate urban heat islands according to the text?",
    "options": [
      "Paving more roads with dark asphalt",
      "Planting trees and designing green rooftops",
      "Increasing air conditioning usage in buildings",
      "Constructing taller glass skyscrapers"
    ],
    "answer": 1,
    "explanation": "본문 마지막 문장에서 'Planting urban trees and creating green rooftops are proven mitigations'라고 설명되어 있습니다."
  },
  {
    "id": "lt-6-6",
    "level": 6,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Would you mind if I opened the window for some fresh air?\nB: ________________________",
    "question": "창문을 열어도 괜찮다고 허락할 때 B의 올바른 응답은?",
    "options": [
      "Not at all, go right ahead.",
      "Yes, I mind opening it.",
      "I am very thirsty.",
      "Please close the window right away."
    ],
    "answer": 0,
    "explanation": "'Would you mind ~?(꺼리시나요?)' 질문에 허락할 때는 '전혀 꺼리지 않아요, 어서 여세요(Not at all, go right ahead)'라고 부정으로 답해야 합니다."
  },
  {
    "id": "lt-7-1",
    "level": 7,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 단어는?\n\"Scientists conducted double-blind trials to eliminate experimental _______ and ensure objective results.\"",
    "options": [
      "bias",
      "sympathy",
      "curiosity",
      "harmony"
    ],
    "answer": 0,
    "explanation": "객관적인 결과를 얻기 위해 실험적 '편향/편견(bias)'을 제거했다는 문맥입니다."
  },
  {
    "id": "lt-7-2",
    "level": 7,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 중 '원어민 핵심 구동사'의 의미가 올바르게 짝지어진 것은?",
    "options": [
      "figure out - 알아내다, 이해하다",
      "call off - 방문하다",
      "run into - 탈출하다",
      "look down on - 존경하다"
    ],
    "answer": 0,
    "explanation": "'figure out'은 '알아내다, 이해하다'입니다. (call off는 취소하다, run into는 우연히 마주치다, look down on은 얕보다)"
  },
  {
    "id": "lt-7-3",
    "level": 7,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "가정법 과거 문장으로 빈칸에 들어갈 알맞은 표현은?\n\"If I _______ enough spare time, I would join the volunteer program.\"",
    "options": [
      "have",
      "had",
      "would have",
      "will have"
    ],
    "answer": 1,
    "explanation": "현재 사실에 반대되는 가정을 나타내는 가정법 과거의 조건절은 'If + 주어 + 과거동사(had)' 형태를 취합니다."
  },
  {
    "id": "lt-7-4",
    "level": 7,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "빈칸에 들어갈 알맞은 관계사는?\n\"This historic town is the place _______ the famous treaty was signed.\"",
    "options": [
      "which",
      "where",
      "whom",
      "whose"
    ],
    "answer": 1,
    "explanation": "선행사가 장소(the place)이고 뒤에 완전한 절(the famous treaty was signed)이 이어지므로 관계부사 'where'가 올바릅니다."
  },
  {
    "id": "lt-7-5",
    "level": 7,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Confirmation bias is the human tendency to seek out, interpret, and recall information that confirms preexisting beliefs while disregarding contradictory evidence. In the digital era, social media algorithms exacerbate this phenomenon by creating echo chambers, wherein users are rarely exposed to alternative viewpoints.",
    "question": "What is an 'echo chamber' according to the passage?",
    "options": [
      "A studio designed to maximize sound resonance",
      "An online environment where existing beliefs are reinforced without opposing views",
      "A software that filters out offensive advertisements",
      "A scientific forum debating climate change policies"
    ],
    "answer": 1,
    "explanation": "본문에서 'wherein users are rarely exposed to alternative viewpoints'라고 기술되어 있듯, 상반된 시각 없이 기존 신념만 강화되는 온라인 환경을 뜻합니다."
  },
  {
    "id": "lt-7-6",
    "level": 7,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: We've been debugging this codebase for six hours straight.\nB: I agree, my eyes are burning. Let's call it a day.",
    "question": "위 대화에서 'call it a day'의 의미는?",
    "options": [
      "오늘의 작업을 끝마치다",
      "오늘 하루를 기념일로 지정하다",
      "새로운 회의 일정을 잡다",
      "다른 개발자를 부르다"
    ],
    "answer": 0,
    "explanation": "'call it a day'는 '오늘 하루 일을 여기까지 하고 마무리 짓다'라는 대표적 관용 표현입니다."
  },
  {
    "id": "lt-8-1",
    "level": 8,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 밑줄 친 어원의 의미로 올바른 것은?\n\"The word <perspective> contains the Latin root <spect>.\"",
    "options": [
      "speak (말하다)",
      "see / look (보다)",
      "draw (끌다)",
      "write (쓰다)"
    ],
    "answer": 1,
    "explanation": "어근 'spect'는 '보다, 관찰하다(look, see)'의 의미를 가집니다. (inspect, spectator, respect 등)"
  },
  {
    "id": "lt-8-2",
    "level": 8,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 문맥상 빈칸에 가장 알맞은 어휘는?\n\"The government must formulate a _______ economic strategy that balances growth with environmental preservation.\"",
    "options": [
      "sustainable",
      "temporary",
      "hazardous",
      "monotonous"
    ],
    "answer": 0,
    "explanation": "경제 성장과 환경 보존의 균형을 맞추는 장기적이고 '지속 가능한(sustainable)' 전략이 적절합니다."
  },
  {
    "id": "lt-8-3",
    "level": 8,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 밑줄 친 부분의 어법이 올바른 문장은?",
    "options": [
      "Rarely I have seen such a breathtaking sunset.",
      "Rarely have I seen such a breathtaking sunset.",
      "Rarely I saw such a breathtaking sunset.",
      "Rarely do I saw such a breathtaking sunset."
    ],
    "answer": 1,
    "explanation": "부정 어구(Rarely)가 문두로 도치되면 [조동사 + 주어 + 본동사] 어순이 되므로 'Rarely have I seen'이 맞습니다."
  },
  {
    "id": "lt-8-4",
    "level": 8,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "문맥상 빈칸에 들어갈 가정법 과거완료의 귀결절은?\n\"If we had checked the train timetable in advance, we _______ the express departure.\"",
    "options": [
      "would not miss",
      "would not have missed",
      "will not miss",
      "had not missed"
    ],
    "answer": 1,
    "explanation": "조건절이 과거완료(had checked)이므로 과거 사실과 반대되는 귀결절은 [would have + p.p.]인 'would not have missed'입니다."
  },
  {
    "id": "lt-8-5",
    "level": 8,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Cognitive dissonance is a psychological discomfort felt when someone holds two contradictory beliefs or when behavior clashes with internal values. To diminish this internal friction, individuals often rationalize their conduct rather than alter their underlying habits, prioritizing psychic comfort over objective truth.",
    "question": "What do people typically do to ease cognitive dissonance?",
    "options": [
      "Adopt entirely new habits immediately",
      "Rationalize their actions to regain psychological comfort",
      "Consult clinical psychologists without delay",
      "Embrace the contradictory evidence willingly"
    ],
    "answer": 1,
    "explanation": "'individuals often rationalize their conduct rather than alter their underlying habits, prioritizing psychic comfort'에서 자신의 행동을 합리화함을 알 수 있습니다."
  },
  {
    "id": "lt-8-6",
    "level": 8,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Our competitor just launched a surprise product with lower pricing!\nB: Stay calm. We need to go back to the drawing board and revise our features.",
    "question": "위 대화에서 'go back to the drawing board'가 뜻하는 바는?",
    "options": [
      "도면을 미술관에 전시하다",
      "처음부터 계획을 다시 세우다",
      "경쟁사 제품을 모방하다",
      "프로젝트를 완전히 중단하다"
    ],
    "answer": 1,
    "explanation": "'go back to the drawing board'는 계획이 실패하거나 새 변수가 생겼을 때 '처음부터 다시 계획하다, 원점으로 돌아가다'를 뜻합니다."
  },
  {
    "id": "lt-9-1",
    "level": 9,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 글의 주인공의 심경 변화로 가장 알맞은 것은?\n\"When Clara saw the dense smoke pouring out from her studio, she was <devastated>. However, upon hearing that all her original canvas paintings had already been safely relocated to the gallery, she let out an enormous sigh and felt deeply <relieved>.\"",
    "options": [
      "devastated -> relieved",
      "indifferent -> furious",
      "ecstatic -> anxious",
      "bored -> terrified"
    ],
    "answer": 0,
    "explanation": "작업실의 연기를 보고 망연자실했다가(devastated), 그림이 갤러리로 옮겨졌다는 소식에 안도했다(relieved)는 심경 변화입니다."
  },
  {
    "id": "lt-9-2",
    "level": 9,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 중 다의어 'address'가 '문제를 다루다, 해결하려 노력하다'의 의미로 쓰인 문장은?",
    "options": [
      "Please write your forwarding address on the envelope.",
      "The president will address the nation tonight on television.",
      "The new municipal policy fails to address housing affordability.",
      "He gave a passionate keynote address at the seminar."
    ],
    "answer": 2,
    "explanation": "3번 문장의 'address housing affordability'에서 address는 '주택 문제의 가격 적정성을 다루다/해결하려 하다'라는 뜻의 동사로 쓰였습니다."
  },
  {
    "id": "lt-9-3",
    "level": 9,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 문장의 빈칸에 들어갈 복합관계대명사로 알맞은 것은?\n\"_______ finishes the analytical assignment first will earn the opportunity to lead the research project.\"",
    "options": [
      "Whomever",
      "Whoever",
      "Whatever",
      "Whenever"
    ],
    "answer": 1,
    "explanation": "주어 역할을 하는 명사절을 이끌며 사람을 가리키는 주격 복합관계대명사는 'Whoever'입니다."
  },
  {
    "id": "lt-9-4",
    "level": 9,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 문법적으로 올바른 문장은?",
    "options": [
      "The committee demanded that the chairperson resigns immediately.",
      "The committee demanded that the chairperson resign immediately.",
      "The committee demanded that the chairperson will resign immediately.",
      "The committee demanded that the chairperson resigned immediately."
    ],
    "answer": 1,
    "explanation": "요구/제안/명령/주장 동사(demand) 뒤의 that절에서는 당위성을 나타내므로 [(should) + 동사원형]을 써야 합니다. 따라서 'resign'이 올바릅니다."
  },
  {
    "id": "lt-9-5",
    "level": 9,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "In literature, the classic tragic hero often succumbs not to arbitrary malevolence, but to hamartia—an inherent fatal flaw or profound misjudgment. Whether hubristic pride, unbridled ambition, or catastrophic indecision, this intrinsic defect precipitates their tragic downfall, eliciting both pity and cathartic dread from spectators.",
    "question": "According to the passage, what primarily triggers the downfall of a classic tragic hero?",
    "options": [
      "External villainy beyond their awareness",
      "An inherent fatal flaw or fatal miscalculation",
      "Random economic destitution in society",
      "Complete lack of ambition and cowardice"
    ],
    "answer": 1,
    "explanation": "비극적 영웅의 몰락은 외부의 악의가 아닌 내재된 치명적 결함(inherent fatal flaw or profound misjudgment: hamartia)에 의해 촉발된다고 명시되어 있습니다."
  },
  {
    "id": "lt-9-6",
    "level": 9,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: He claimed he had insider knowledge of the merger, but it sounded completely made up.\nB: Take whatever he says with a grain of salt; he is known for exaggeration.",
    "question": "위 대화에서 'take with a grain of salt'의 의미는?",
    "options": [
      "음식에 소금을 쳐서 먹다",
      "말을 곧이곧대로 믿지 않고 걸러 듣다",
      "비밀을 누설하다",
      "전적으로 신뢰하다"
    ],
    "answer": 1,
    "explanation": "'take ~ with a grain of salt'는 상대방의 말을 에누리해서, 곧이곧대로 믿지 않고 회의적으로 받아들이다를 뜻하는 숙어입니다."
  },
  {
    "id": "lt-10-1",
    "level": 10,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 최고난도 학술 어휘는?\n\"The philosopher argued that moral duties are _______, possessing value in themselves rather than serving instrumental extrinsic utility.\"",
    "options": [
      "intrinsic",
      "ephemeral",
      "superficial",
      "peripheral"
    ],
    "answer": 0,
    "explanation": "외적인 효용(extrinsic utility)에 봉사하는 것이 아니라 본질적 가치(value in themselves)를 지닌다는 대조 문맥이므로 'intrinsic(내재적인, 본질적인)'이 정확합니다."
  },
  {
    "id": "lt-10-2",
    "level": 10,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 문맥상 밑줄 친 단어의 의미와 가장 유사한 것은?\n\"The sudden macroeconomic shock left currency markets remarkably <volatile>.\"",
    "options": [
      "stagnant",
      "unpredictable and erratic",
      "placid and harmonious",
      "impervious"
    ],
    "answer": 1,
    "explanation": "'volatile'은 휘발성의, 급변하는, 변덕스러운 뜻으로 'unpredictable and erratic'과 동의어입니다."
  },
  {
    "id": "lt-10-3",
    "level": 10,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 어법상 가장 자연스럽고 올바른 도치 구문은?",
    "options": [
      "Had the diplomatic negotiations collapsed, catastrophic geopolitical sanctions would have ensued.",
      "If had the diplomatic negotiations collapsed, catastrophic sanctions would ensued.",
      "Should the negotiations collapsed, geopolitical sanctions had ensued.",
      "Were the negotiations had collapsed, sanctions would have ensued."
    ],
    "answer": 0,
    "explanation": "가정법 과거완료 조건절(If the negotiations had collapsed)에서 if가 생략되어 'Had the negotiations collapsed'로 올바르게 도치된 문장입니다."
  },
  {
    "id": "lt-10-4",
    "level": 10,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 문장의 빈칸에 가장 알맞은 전치사구는?\n\"The empirical evidence was insufficient, _______ invalidating the primary working hypothesis.\"",
    "options": [
      "thereby",
      "whereas",
      "although",
      "unless"
    ],
    "answer": 0,
    "explanation": "부사 'thereby'는 분사구문과 결합하여 '그로 인해, 그것에 의해서 (~하면서)'라는 결과를 세련되게 나타냅니다."
  },
  {
    "id": "lt-10-5",
    "level": 10,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Emergent behavior in complex distributed networks underscores the limitation of radical reductionism. When millions of autonomous agents interact under localized heuristic rules—whether neural synapses in the cerebral cortex or algorithmic trading bots in high-frequency financial markets—macroscopic coherent phenomena materialize that cannot be deduced merely from the isolated properties of individual constituent units.",
    "question": "What is the primary philosophical implication articulated in the text?",
    "options": [
      "Complex systems can be completely understood by decomposing them into isolated parts.",
      "Macroscopic emergent behaviors transcend the linear sum of individual constituent elements.",
      "Algorithmic financial markets are intrinsically more chaotic than human brains.",
      "Local heuristic rules are incapable of producing stable patterns."
    ],
    "answer": 1,
    "explanation": "환원주의(reductionism)의 한계를 지적하며, 개별 구성 요소의 성질만으로는 연역할 수 없는 거시적 창발성(emergent behavior transcends isolated properties)을 강조하고 있습니다."
  },
  {
    "id": "lt-10-6",
    "level": 10,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: The board wants us to pivot the entire AI architecture before the Q3 product release.\nB: That sounds like a recipe for disaster; we are biting off more than we can chew.",
    "question": "위 대화에서 'biting off more than we can chew'의 함의는?",
    "options": [
      "식사량을 조절하지 못하고 과식하고 있다",
      "자신의 역량이나 주어진 여건을 넘어선 무리한 일을 벌이고 있다",
      "경쟁사보다 기술적 우위를 점유하고 있다",
      "철저한 위험 관리를 성공적으로 수행하고 있다"
    ],
    "answer": 1,
    "explanation": "'bite off more than one can chew'는 직역하면 '씹을 수 있는 양보다 더 많이 베어 물다'로, '자신의 능력이나 한도를 초과하여 지나치게 무리한 일/부담을 떠맡다'를 뜻합니다."
  }
];

if (typeof window !== 'undefined') {
    window.LEVEL_TEST_BANK = LEVEL_TEST_BANK;
}
