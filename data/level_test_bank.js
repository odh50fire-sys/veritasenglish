/**
 * Veritas English - 10단계 실력 진단 레벨테스트 문제 은행 데이터베이스 (Item Bank)
 * 레벨 1(Starter) ~ 레벨 10(Veritas Elite) 전 레벨별 5대 핵심 영역(어휘, 문법, 독해, 회화, 리스닝 청해)
 * 각 레벨당 20문항 엄선 (총 200문항 대규모 확충 풀)
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
    "id": "lt-1-7",
    "level": 1,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 중 '색깔(Color)'을 나타내는 단어는?",
    "options": [
      "Yellow",
      "Chair",
      "Tiger",
      "Winter"
    ],
    "answer": 0,
    "explanation": "Yellow는 '노란색'을 뜻하는 색깔 단어입니다. (Chair: 의자, Tiger: 호랑이, Winter: 겨울)"
  },
  {
    "id": "lt-1-8",
    "level": 1,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 단어의 알맞은 한국어 뜻은?\n\"happy\"",
    "options": [
      "슬픈",
      "행복한",
      "화난",
      "배고픈"
    ],
    "answer": 1,
    "explanation": "'happy'는 '행복한, 기쁜'이라는 뜻입니다."
  },
  {
    "id": "lt-1-9",
    "level": 1,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "빈칸에 알맞은 단어는?\n\"Birds can _______ in the sky.\"",
    "options": [
      "swim",
      "fly",
      "cook",
      "read"
    ],
    "answer": 1,
    "explanation": "'새들은 하늘을 날(fly) 수 있다'가 가장 자연스럽습니다."
  },
  {
    "id": "lt-1-10",
    "level": 1,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 알맞은 단어는?\n\"They _______ students.\"",
    "options": [
      "am",
      "is",
      "are",
      "be"
    ],
    "answer": 2,
    "explanation": "주어 'They'는 복수 인칭대명사이므로 be동사 'are'가 올바릅니다."
  },
  {
    "id": "lt-1-11",
    "level": 1,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 '사과 하나'를 바르게 표현한 것은?",
    "options": [
      "a apple",
      "an apple",
      "apple a",
      "two apple"
    ],
    "answer": 1,
    "explanation": "모음 발음([æ])으로 시작하는 단어 앞에는 부정관사 'an'을 씁니다."
  },
  {
    "id": "lt-1-12",
    "level": 1,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 올바른 부정문은?",
    "options": [
      "I not like cats.",
      "I do not like cats.",
      "I am not like cats.",
      "I does not like cats."
    ],
    "answer": 1,
    "explanation": "일반동사 'like'의 1인칭 현재 부정문은 'do not + 동사원형' 형태인 'I do not like cats.'가 맞습니다."
  },
  {
    "id": "lt-1-13",
    "level": 1,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "My name is Minho. I am nine years old. I like playing with my puppy, Max. Max has brown ears and runs very fast.",
    "question": "What is true about Max?",
    "options": [
      "He is nine years old.",
      "He has black ears.",
      "He runs very fast.",
      "He does not like Minho."
    ],
    "answer": 2,
    "explanation": "지문에서 'Max has brown ears and runs very fast'라고 언급되어 있습니다."
  },
  {
    "id": "lt-1-14",
    "level": 1,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Today is Sunday. The sun is shining brightly. Jane goes to the park with her mom. She eats sweet ice cream there.",
    "question": "Where does Jane go on Sunday?",
    "options": [
      "To school",
      "To the library",
      "To the park",
      "To the hospital"
    ],
    "answer": 2,
    "explanation": "'Jane goes to the park with her mom'에서 공원에 갔음을 알 수 있습니다."
  },
  {
    "id": "lt-1-15",
    "level": 1,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Look at the big tree. There are three red birds in the tree. They sing lovely songs every morning.",
    "question": "How many birds are in the tree?",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "answer": 1,
    "explanation": "'There are three red birds in the tree'라고 분명하게 나와 있습니다."
  },
  {
    "id": "lt-1-16",
    "level": 1,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Peter puts on his warm coat and boots. White snow is falling from the sky. He wants to make a big snowman.",
    "question": "What is Peter planning to make?",
    "options": [
      "A snowman",
      "A toy car",
      "A cake",
      "A paper plane"
    ],
    "answer": 0,
    "explanation": "'He wants to make a big snowman'에서 눈사람을 만들고 싶어함을 알 수 있습니다."
  },
  {
    "id": "lt-1-17",
    "level": 1,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: What is your favorite color?\nB: ________________________",
    "question": "B의 알맞은 응답은?",
    "options": [
      "I like blue.",
      "I have a pen.",
      "It is 3 o'clock.",
      "No, I don't."
    ],
    "answer": 0,
    "explanation": "가장 좋아하는 색을 묻는 질문이므로 'I like blue.(파란색을 좋아해)'가 정답입니다."
  },
  {
    "id": "lt-1-18",
    "level": 1,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Thank you so much for your help!\nB: ________________________",
    "question": "감사의 인사에 대한 알맞은 화답은?",
    "options": [
      "You're welcome!",
      "I am sorry.",
      "Good night.",
      "See you yesterday."
    ],
    "answer": 0,
    "explanation": "'Thank you'에 대한 자연스러운 응답은 'You're welcome!(천만에요!)'입니다."
  },
  {
    "id": "lt-1-19",
    "level": 1,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Good morning, class. Please open your English books to page ten.",
    "question": "[청해] 들려주는 안내를 듣고, 학생들에게 펼치라고 한 책의 페이지를 고르세요.",
    "options": [
      "5페이지",
      "10페이지",
      "15페이지",
      "20페이지"
    ],
    "answer": 1,
    "explanation": "음원에서 'open your English books to page ten(10페이지를 펴세요)'이라고 하였습니다."
  },
  {
    "id": "lt-1-20",
    "level": 1,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Boy: Where is my pencil case? Girl: It is on the desk, right next to your notebook.",
    "question": "[청해] 대화를 듣고 필통의 위치로 알맞은 곳을 고르세요.",
    "options": [
      "책상 위, 공책 바로 옆",
      "가방 안쪽 주머니",
      "의자 밑 바닥",
      "선생님 교탁 서랍"
    ],
    "answer": 0,
    "explanation": "여학생이 'It is on the desk, right next to your notebook(책상 위, 공책 바로 옆에 있어)'이라고 말했습니다."
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
    "id": "lt-2-7",
    "level": 2,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 반의어는?\n\"This box is heavy, but that box is _______.\"",
    "options": [
      "dark",
      "light",
      "loud",
      "slow"
    ],
    "answer": 1,
    "explanation": "'heavy(무거운)'의 반대말은 'light(가벼운)'입니다."
  },
  {
    "id": "lt-2-8",
    "level": 2,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 중 '병원에서 아픈 사람을 치료하는 사람'을 뜻하는 단어는?",
    "options": [
      "Pilot",
      "Doctor",
      "Chef",
      "Farmer"
    ],
    "answer": 1,
    "explanation": "의사는 'Doctor'입니다. (Pilot: 조종사, Chef: 요리사, Farmer: 농부)"
  },
  {
    "id": "lt-2-9",
    "level": 2,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "빈칸에 알맞은 단어는?\n\"Please _______ the door when you leave the room.\"",
    "options": [
      "close",
      "swim",
      "sleep",
      "sing"
    ],
    "answer": 0,
    "explanation": "'방을 나갈 때 문을 닫아주세요(close the door)'가 자연스럽습니다."
  },
  {
    "id": "lt-2-10",
    "level": 2,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 알맞은 과거형 동사는?\n\"Yesterday, we _______ soccer after school.\"",
    "options": [
      "play",
      "played",
      "playing",
      "plays"
    ],
    "answer": 1,
    "explanation": "'Yesterday'라는 명백한 과거 시제 부사가 있으므로 규칙 과거형인 'played'가 올바릅니다."
  },
  {
    "id": "lt-2-11",
    "level": 2,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 복수형 명사가 올바르게 짝지어진 것은?",
    "options": [
      "box - boxs",
      "child - children",
      "foot - foots",
      "baby - babys"
    ],
    "answer": 1,
    "explanation": "child의 불규칙 복수형은 'children'입니다. (boxes, feet, babies가 올바름)"
  },
  {
    "id": "lt-2-12",
    "level": 2,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 알맞은 의문사는?\n\"_______ is your birthday?\"\n\"It is on May 5th.\"",
    "options": [
      "Where",
      "When",
      "Why",
      "Who"
    ],
    "answer": 1,
    "explanation": "날짜(시간)를 묻는 의문사는 'When(언제)'입니다."
  },
  {
    "id": "lt-2-13",
    "level": 2,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Dolphins are smart sea animals. They live in warm waters and communicate with squeaks and clicks. They can jump high out of the water.",
    "question": "How do dolphins communicate?",
    "options": [
      "By writing symbols",
      "With squeaks and clicks",
      "By changing body colors",
      "With loud barking"
    ],
    "answer": 1,
    "explanation": "지문에서 'communicate with squeaks and clicks'라고 명시되어 있습니다."
  },
  {
    "id": "lt-2-14",
    "level": 2,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Amy loves gardening. Every spring, she plants tomato and carrot seeds in her backyard. She waters them every morning so they grow tall and healthy.",
    "question": "Why does Amy water the seeds every morning?",
    "options": [
      "To keep bugs away",
      "To sell them at the market",
      "So they grow tall and healthy",
      "To wash off the soil"
    ],
    "answer": 2,
    "explanation": "'so they grow tall and healthy(크고 건강하게 자라도록)' 물을 준다고 나와 있습니다."
  },
  {
    "id": "lt-2-15",
    "level": 2,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "The library is a quiet place where people read books and study. You must turn off your phone and speak in a whisper.",
    "question": "What must you do in the library?",
    "options": [
      "Speak loudly",
      "Eat delicious snacks",
      "Turn off your phone",
      "Run fast around tables"
    ],
    "answer": 2,
    "explanation": "'You must turn off your phone(휴대전화를 꺼야 한다)'이 규칙으로 제시되어 있습니다."
  },
  {
    "id": "lt-2-16",
    "level": 2,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Bears eat a lot of food in autumn, such as fish and berries. During the cold winter, they sleep in deep caves for several months.",
    "question": "When do bears sleep in deep caves?",
    "options": [
      "During spring",
      "During summer",
      "During winter",
      "Every night only"
    ],
    "answer": 2,
    "explanation": "'During the cold winter, they sleep in deep caves'라고 되어 있습니다."
  },
  {
    "id": "lt-2-17",
    "level": 2,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Can I borrow your eraser for a minute?\nB: ________________________",
    "question": "지우개를 빌려주는 호의적인 응답으로 가장 알맞은 것은?",
    "options": [
      "Sure, here you are.",
      "No, you aren't.",
      "I don't know my name.",
      "You are right."
    ],
    "answer": 0,
    "explanation": "빌려달라는 요청에 흔쾌히 건넬 때 'Sure, here you are.(물론이지, 여기 있어)'가 알맞습니다."
  },
  {
    "id": "lt-2-18",
    "level": 2,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Let's ride bicycles together this afternoon!\nB: ________________________",
    "question": "자전거를 타자는 제안에 동의하는 표현은?",
    "options": [
      "Sounds great! Let's meet at 2.",
      "I didn't eat dinner.",
      "He is ten years old.",
      "I lost my bicycle yesterday, so let's ride it."
    ],
    "answer": 0,
    "explanation": "제안에 호응할 때 'Sounds great!(좋아, 멋지다!)'가 가장 자연스럽습니다."
  },
  {
    "id": "lt-2-19",
    "level": 2,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Girl: What time does the movie start? Boy: It starts at quarter past three, so we have thirty minutes left.",
    "question": "[청해] 영화가 시작하는 정확한 시각을 고르세요.",
    "options": [
      "2시 45분",
      "3시 15분",
      "3시 30분",
      "3시 45분"
    ],
    "answer": 1,
    "explanation": "'quarter past three'는 3시 15분을 의미합니다."
  },
  {
    "id": "lt-2-20",
    "level": 2,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Weather reporter: Tomorrow will be very windy and rainy. Don't forget to take a sturdy umbrella with you.",
    "question": "[청해] 일기예보에서 내일 외출할 때 챙기라고 권장한 물건은?",
    "options": [
      "선글라스",
      "튼튼한 우산",
      "두꺼운 장갑",
      "수영복"
    ],
    "answer": 1,
    "explanation": "기상 캐스터가 'take a sturdy umbrella with you(튼튼한 우산을 챙기세요)'라고 안내했습니다."
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
    "question": "다음 밑줄 친 숙어의 의미로 올바른 것은?\n\"<u>keep in touch</u>\"",
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
    "id": "lt-3-7",
    "level": 3,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 단어는?\n\"The concert was so _______ that everyone stood up and cheered.\"",
    "options": [
      "boring",
      "exciting",
      "silent",
      "tired"
    ],
    "answer": 1,
    "explanation": "모두가 일어나 환호했으므로 'exciting(흥미진진한, 신나는)'이 알맞습니다."
  },
  {
    "id": "lt-3-8",
    "level": 3,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 단어의 영영 풀이에 해당하는 것은?\n\"a person whose job is to put out fires and rescue people\"",
    "options": [
      "Police officer",
      "Firefighter",
      "Teacher",
      "Engineer"
    ],
    "answer": 1,
    "explanation": "불을 끄고 사람을 구조하는 직업은 'Firefighter(소방관)'입니다."
  },
  {
    "id": "lt-3-9",
    "level": 3,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "빈칸에 들어갈 가장 알맞은 전치사는?\n\"I was born _______ July 14th, 2012.\"",
    "options": [
      "at",
      "in",
      "on",
      "by"
    ],
    "answer": 2,
    "explanation": "구체적인 특정한 날짜(Day/Date) 앞에는 전치사 'on'을 씁니다."
  },
  {
    "id": "lt-3-10",
    "level": 3,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 들어갈 알맞은 조동사는?\n\"You look very tired. You _______ go to bed early tonight.\"",
    "options": [
      "should",
      "cannot",
      "might not",
      "won't"
    ],
    "answer": 0,
    "explanation": "상대방에게 조언이나 권유를 나타낼 때는 'should(~하는 것이 좋겠다)'가 적절합니다."
  },
  {
    "id": "lt-3-11",
    "level": 3,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 비교급 문장이 어법상 올바른 것은?",
    "options": [
      "An elephant is more big than a horse.",
      "An elephant is bigger than a horse.",
      "An elephant is big than a horse.",
      "An elephant is more bigger than a horse."
    ],
    "answer": 1,
    "explanation": "big은 단모음+단자음 형용사이므로 g를 겹치고 er을 붙인 'bigger'가 올바른 비교급입니다."
  },
  {
    "id": "lt-3-12",
    "level": 3,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "빈칸에 들어갈 알맞은 접속사는?\n\"I stayed at home _______ it was raining heavily outside.\"",
    "options": [
      "so",
      "because",
      "although",
      "but"
    ],
    "answer": 1,
    "explanation": "비가 심하게 내렸기 때문에 집에 머물렀으므로 원인/이유를 나타내는 'because'가 올바릅니다."
  },
  {
    "id": "lt-3-13",
    "level": 3,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Recycling is important for protecting the Earth. When we recycle plastic bottles and cans, we save natural energy and reduce harmful waste in landfills.",
    "question": "According to the passage, why should we recycle plastic and cans?",
    "options": [
      "To make bottles heavier",
      "To save energy and reduce waste",
      "To build taller buildings",
      "To buy new clothes cheaply"
    ],
    "answer": 1,
    "explanation": "지문에서 'we save natural energy and reduce harmful waste'라고 명시되어 있습니다."
  },
  {
    "id": "lt-3-14",
    "level": 3,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Honeybees visit thousands of flowers every day. While collecting sweet nectar, they carry pollen from flower to flower, which helps plants produce delicious fruits.",
    "question": "How do honeybees help plants produce fruits?",
    "options": [
      "By eating leaves",
      "By carrying pollen between flowers",
      "By drinking all water",
      "By scaring away birds"
    ],
    "answer": 1,
    "explanation": "'they carry pollen from flower to flower, which helps plants produce fruits'에서 확인할 수 있습니다."
  },
  {
    "id": "lt-3-15",
    "level": 3,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Mount Everest is the highest mountain above sea level on Earth. Many brave climbers try to reach the peak each year, facing freezing temperatures and thin air.",
    "question": "What challenges do climbers face on Mount Everest?",
    "options": [
      "Warm weather and heavy rain",
      "Freezing temperatures and thin air",
      "Deep oceans and big sharks",
      "Crowded modern shopping malls"
    ],
    "answer": 1,
    "explanation": "등반가들이 겪는 난관으로 'freezing temperatures and thin air(살을 에는 추위와 희박한 공기)'가 언급됩니다."
  },
  {
    "id": "lt-3-16",
    "level": 3,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "In Korea, people celebrate Chuseok in autumn. Families gather together, make delicious songpyeon, and give thanks to ancestors for the rich harvest.",
    "question": "What do families do during Chuseok according to the passage?",
    "options": [
      "Travel abroad alone",
      "Make songpyeon and give thanks",
      "Plant new seeds in fields",
      "Go swimming in the ocean"
    ],
    "answer": 1,
    "explanation": "'make delicious songpyeon, and give thanks to ancestors'라고 언급되어 있습니다."
  },
  {
    "id": "lt-3-17",
    "level": 3,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: How often do you practice playing the violin?\nB: ________________________",
    "question": "빈도(frequency)를 묻는 질문에 알맞은 대답은?",
    "options": [
      "I practice twice a week.",
      "I like pop music.",
      "It costs thirty dollars.",
      "In the music room."
    ],
    "answer": 0,
    "explanation": "'How often(~얼마나 자주)'에 대한 응답으로 'twice a week(일주일에 두 번)'이 알맞습니다."
  },
  {
    "id": "lt-3-18",
    "level": 3,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: I have a severe stomachache.\nB: ________________________",
    "question": "상대방의 통증 호소에 대한 적절한 위로와 권고는?",
    "options": [
      "Congratulations on your success!",
      "You should see a doctor right away.",
      "Never mind, I am happy.",
      "That sounds like fun!"
    ],
    "answer": 1,
    "explanation": "복통을 앓는 상대에게 'You should see a doctor right away.(당장 병원에 가보는 게 좋겠어)'가 올바릅니다."
  },
  {
    "id": "lt-3-19",
    "level": 3,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Clerk: Can I help you find something? Customer: Yes, I am looking for a blue shirt in medium size. Clerk: Follow me, they are on sale on this rack.",
    "question": "[청해] 손님이 찾고 있는 옷의 색상과 사이즈는?",
    "options": [
      "파란색 셔츠 / M(Medium)",
      "빨간색 셔츠 / L(Large)",
      "검은색 코트 / S(Small)",
      "흰색 바지 / M(Medium)"
    ],
    "answer": 0,
    "explanation": "손님이 'a blue shirt in medium size'를 찾는다고 말했습니다."
  },
  {
    "id": "lt-3-20",
    "level": 3,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Announcement: Attention passengers on flight 204 to Tokyo. The departure gate has changed from Gate 12 to Gate 18.",
    "question": "[청해] 도쿄행 204편의 변경된 탑승 게이트 번호는?",
    "options": [
      "12번 게이트",
      "14번 게이트",
      "18번 게이트",
      "24번 게이트"
    ],
    "answer": 2,
    "explanation": "게이트가 'changed from Gate 12 to Gate 18'로 변경되었다고 공지했습니다."
  },
  {
    "id": "lt-4-1",
    "level": 4,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 밑줄 친 단어의 의미와 가장 가까운 것은?\n\"He was <u>curious</u> about how the antique clock worked.\"",
    "options": [
      "inquisitive",
      "bored",
      "angry",
      "careless"
    ],
    "answer": 0,
    "explanation": "'curious(호기심이 많은, 알고 싶어 하는)'와 의미가 가장 가까운 유의어는 'inquisitive(탐구적인, 호기심 많은)'입니다."
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
      "My mother made me <u>clean</u> my bedroom.",
      "The teacher asked us <u>to listen</u> carefully.",
      "I saw the boy <u>run</u> across the street.",
      "He wanted me <u>go</u> to the supermarket."
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
    "id": "lt-4-7",
    "level": 4,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 단어는?\n\"Regular exercise has many beneficial _______ on mental health.\"",
    "options": [
      "effects",
      "passports",
      "accidents",
      "climates"
    ],
    "answer": 0,
    "explanation": "'beneficial effects on mental health(정신 건강에 미치는 유익한 효과/영향)'가 가장 자연스럽습니다."
  },
  {
    "id": "lt-4-8",
    "level": 4,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 단어와 의미가 가장 가까운 것은?\n\"ancient\"",
    "options": [
      "modern",
      "very old",
      "cheap",
      "dangerous"
    ],
    "answer": 1,
    "explanation": "'ancient'는 '고대의, 아주 오래된(very old)'이라는 의미입니다."
  },
  {
    "id": "lt-4-9",
    "level": 4,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "빈칸에 알맞은 단어는?\n\"The teacher asked students to _______ their opinions politely.\"",
    "options": [
      "express",
      "destroy",
      "melt",
      "spill"
    ],
    "answer": 0,
    "explanation": "'자신의 의견을 정중하게 표현하다(express)'가 문맥상 알맞습니다."
  },
  {
    "id": "lt-4-10",
    "level": 4,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 밑줄 친 to부정사의 용법이 '명사적 용법'인 것은?",
    "options": [
      "She came here <u>to study</u> English.",
      "I want <u>to travel</u> around Europe.",
      "Give me something <u>to drink</u>.",
      "He grew up <u>to be</u> a famous scientist."
    ],
    "answer": 1,
    "explanation": "'want'의 목적어로 쓰인 'to travel'은 명사적 용법입니다. (1번 목적 부사적, 3번 형용사적, 4번 결과 부사적)"
  },
  {
    "id": "lt-4-11",
    "level": 4,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 알맞은 것은?\n\"I am looking forward to _______ you in person soon.\"",
    "options": [
      "meet",
      "meeting",
      "met",
      "have met"
    ],
    "answer": 1,
    "explanation": "'look forward to -ing'에서 to는 전치사이므로 뒤에 동명사 'meeting'이 와야 합니다."
  },
  {
    "id": "lt-4-12",
    "level": 4,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 문장의 빈칸에 알맞은 관계대명사는?\n\"This is the talented girl _______ won first prize in the speech contest.\"",
    "options": [
      "which",
      "who",
      "whom",
      "whose"
    ],
    "answer": 1,
    "explanation": "선행사가 사람('the talented girl')이고 주어 역할을 하므로 주격 관계대명사 'who'가 알맞습니다."
  },
  {
    "id": "lt-4-13",
    "level": 4,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Urban rooftop gardens have gained worldwide popularity. They not only lower building temperatures during hot summers by absorbing sunlight, but they also provide fresh organic vegetables for local city residents.",
    "question": "What is one benefit of rooftop gardens mentioned in the passage?",
    "options": [
      "They increase building heating costs.",
      "They absorb sunlight to cool buildings.",
      "They attract wild predators.",
      "They replace all supermarkets."
    ],
    "answer": 1,
    "explanation": "지문에서 햇빛을 흡수하여 여름철 건물 온도를 낮춰준다고 명시되어 있습니다."
  },
  {
    "id": "lt-4-14",
    "level": 4,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Many young people find it hard to wake up early because their circadian rhythms naturally shift forward during adolescence. This biological change makes them feel sleepy later at night and alert later in the morning.",
    "question": "Why do adolescents struggle with waking up early according to the text?",
    "options": [
      "Because they dislike going to school",
      "Due to a natural forward shift in circadian rhythms",
      "Because they eat heavy breakfasts",
      "Due to extreme lack of physical exercise"
    ],
    "answer": 1,
    "explanation": "청소년기에는 일주기 생체 리듬이 자연스럽게 늦춰지기 때문(circadian rhythms shift forward)이라고 설명합니다."
  },
  {
    "id": "lt-4-15",
    "level": 4,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "The invention of the printing press by Johannes Gutenberg around 1440 revolutionized society. Books, which had been copied by hand and owned only by the wealthy, became affordable and widely accessible to ordinary citizens.",
    "question": "What was the main social impact of Gutenberg's invention?",
    "options": [
      "Books became affordable and accessible to regular people.",
      "Hand-copying books became more popular than before.",
      "The cost of paper increased dramatically.",
      "Libraries were completely replaced by universities."
    ],
    "answer": 0,
    "explanation": "인쇄술 발명으로 일반 시민들도 책을 저렴하고 폭넓게 접할 수 있게 되었습니다."
  },
  {
    "id": "lt-4-16",
    "level": 4,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Camouflage is an evolutionary adaptation that helps animals survive. Chameleons can change their skin color to blend in with surrounding branches, making it difficult for hungry predators to spot them.",
    "question": "How does camouflage protect animals like chameleons?",
    "options": [
      "It increases their body weight.",
      "It makes them invisible to predators by blending with the environment.",
      "It enables them to run twice as fast.",
      "It produces a toxic smell."
    ],
    "answer": 1,
    "explanation": "주변 환경과 색을 섞어(blend in) 포식자가 알아보기 어렵게 만듭니다."
  },
  {
    "id": "lt-4-17",
    "level": 4,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Would you mind moving your bag to the rack above?\nB: ________________________",
    "question": "정중한 요청을 수락하며 가방을 치워주는 알맞은 표현은?",
    "options": [
      "Not at all, I'll move it right away.",
      "Yes, I would love to mind.",
      "No, you cannot sit here.",
      "I don't have any money."
    ],
    "answer": 0,
    "explanation": "'Would you mind -ing?(~해 주시겠습니까?)'에 수락할 때는 'Not at all.(전혀 꺼리지 않아요, 그럴게요)'로 답합니다."
  },
  {
    "id": "lt-4-18",
    "level": 4,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: How was the science exhibition you visited last Saturday?\nB: ________________________",
    "question": "전시회 소감을 묻는 질문에 알맞은 대답은?",
    "options": [
      "It was fascinating and full of hands-on experiments.",
      "I visited my grandparents instead.",
      "It will start at ten o'clock next week.",
      "I bought three pencils."
    ],
    "answer": 0,
    "explanation": "'fascinating and full of hands-on experiments(매우 흥미롭고 직접 해보는 실험이 가득했다)'가 가장 적절한 소감입니다."
  },
  {
    "id": "lt-4-19",
    "level": 4,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Tour Guide: Welcome aboard the harbor cruise. Life jackets are located directly beneath each seat. Please remain seated while the boat is in motion.",
    "question": "[청해] 안내 방송에서 구명조끼의 위치로 안내된 곳은?",
    "options": [
      "각 좌석의 바로 아래",
      "선박 뒤쪽 캐비닛",
      "선장실 앞 복도",
      "2층 갑판 입구"
    ],
    "answer": 0,
    "explanation": "'Life jackets are located directly beneath each seat(구명조끼는 각 좌석 바로 아래에 있습니다)'라고 안내했습니다."
  },
  {
    "id": "lt-4-20",
    "level": 4,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Man: Excuse me, does this bus stop at City Hall? Driver: No, you took the wrong line. You need to get off at the next stop and transfer to green bus number 12.",
    "question": "[청해] 버스 기사가 승객에게 권고한 올바른 행동은?",
    "options": [
      "종점까지 계속 타고 가기",
      "다음 정류장에서 내려 초록색 12번 버스로 환승하기",
      "지하철역으로 걸어가기",
      "요금을 두 배로 추가 지불하기"
    ],
    "answer": 1,
    "explanation": "'get off at the next stop and transfer to green bus number 12'라고 명확히 지시했습니다."
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
    "question": "다음 밑줄 친 숙어의 의미로 올바른 것은?\n\"<u>put off</u>\"",
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
    "id": "lt-5-7",
    "level": 5,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 단어는?\n\"The new policy was designed to _______ the gap between rich and poor communities.\"",
    "options": [
      "narrow",
      "multiply",
      "delay",
      "ignore"
    ],
    "answer": 0,
    "explanation": "'격차를 좁히다'라는 표현은 'narrow the gap'입니다."
  },
  {
    "id": "lt-5-8",
    "level": 5,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 단어의 반의어로 가장 적절한 것은?\n\"compulsory\"",
    "options": [
      "mandatory",
      "optional",
      "strict",
      "urgent"
    ],
    "answer": 1,
    "explanation": "'compulsory(의무적인, 강제적인)'의 반의어는 'optional(선택적인)'입니다."
  },
  {
    "id": "lt-5-9",
    "level": 5,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "빈칸에 알맞은 단어는?\n\"She showed great _______ in overcoming her physical illness.\"",
    "options": [
      "courage",
      "pollution",
      "flavor",
      "shadow"
    ],
    "answer": 0,
    "explanation": "'질병을 극복하는 데 큰 용기(courage)를 보였다'가 알맞습니다."
  },
  {
    "id": "lt-5-10",
    "level": 5,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 수동태 문장이 어법상 올바른 것은?",
    "options": [
      "The bridge was built in 1985.",
      "The bridge built in 1985 by someone.",
      "The bridge was building in 1985.",
      "The bridge is builded in 1985."
    ],
    "answer": 0,
    "explanation": "과거 수동태는 'was/were + 과거분사(p.p.)' 형태인 'was built'가 올바릅니다."
  },
  {
    "id": "lt-5-11",
    "level": 5,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 들어갈 수 없는 비교급 강조 부사는?\n\"This problem is _______ more difficult than I expected.\"",
    "options": [
      "much",
      "even",
      "far",
      "very"
    ],
    "answer": 3,
    "explanation": "비교급 앞에는 'very'를 쓸 수 없으며, much, even, far, still, a lot 등으로 강조합니다."
  },
  {
    "id": "lt-5-12",
    "level": 5,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 알맞은 현재완료 형태는?\n\"She _______ in Seoul since she was a little child.\"",
    "options": [
      "lived",
      "has lived",
      "is living",
      "will live"
    ],
    "answer": 1,
    "explanation": "과거 시점부터 지금까지 계속됨을 나타내는 'since ~' 절이 있으므로 현재완료 계속 용법 'has lived'가 올바릅니다."
  },
  {
    "id": "lt-5-13",
    "level": 5,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Plastic pollution in oceans poses a severe hazard to marine ecosystems. Microplastics, which result from the breakdown of larger consumer plastics, are ingested by plankton and small fish, ultimately moving up the trophic food chain to humans.",
    "question": "How do microplastics enter the human food chain according to the text?",
    "options": [
      "Through airborne dust storms",
      "By contaminating tap water only",
      "By being consumed by marine organisms that humans eventually eat",
      "Through volcanic eruptions"
    ],
    "answer": 2,
    "explanation": "해양 생물이 미세플라스틱을 섭취하고 먹이사슬을 통해 인간에게 도달한다고 설명합니다."
  },
  {
    "id": "lt-5-14",
    "level": 5,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "The placebo effect occurs when a patient experiences genuine physical improvement after receiving an inactive substance, such as a sugar pill, simply because they strongly believe they are receiving real treatment.",
    "question": "What is the primary cause of the placebo effect?",
    "options": [
      "Potent chemical compounds in sugar pills",
      "The patient's psychological belief in receiving effective treatment",
      "Frequent physical exercise during medication",
      "Genetic mutations in white blood cells"
    ],
    "answer": 1,
    "explanation": "환자가 효과적인 치료를 받고 있다는 심리적 믿음(psychological belief)이 유발 원인입니다."
  },
  {
    "id": "lt-5-15",
    "level": 5,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Sleep deprivation does more than just make you irritable; it profoundly disrupts memory consolidation. During deep sleep stages, the brain reorganizes and strengthens synaptic connections formed throughout the day.",
    "question": "Why is deep sleep essential for cognitive performance?",
    "options": [
      "It burns excess calories accumulated during the day.",
      "It consolidates memory and reinforces neural synaptic connections.",
      "It reduces blood pressure permanently.",
      "It eliminates the need for dreaming."
    ],
    "answer": 1,
    "explanation": "기억을 공고화하고 시냅스 연결을 강화하기 때문입니다."
  },
  {
    "id": "lt-5-16",
    "level": 5,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Renewable energy sources like solar and wind power generate electricity without emitting greenhouse gases during operation. However, energy storage remains a critical challenge due to intermittency when the sun is hidden or wind stops.",
    "question": "What is described as a major drawback of solar and wind energy?",
    "options": [
      "They produce toxic radioactive waste.",
      "Energy storage challenges due to weather-dependent intermittency.",
      "They can only be installed in polar regions.",
      "They consume more fossil fuels than coal plants."
    ],
    "answer": 1,
    "explanation": "날씨에 따른 간헐성(intermittency)과 에너지 저장의 한계가 주요 난제로 언급됩니다."
  },
  {
    "id": "lt-5-17",
    "level": 5,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: I'm really nervous about tomorrow's presentation.\nB: Take a deep breath. ________________________",
    "question": "불안해하는 상대를 안심시키고 용기를 북돋는 표현은?",
    "options": [
      "You've prepared thoroughly, so you will do great!",
      "You should probably give up now.",
      "I knew you would make mistakes.",
      "Why did you choose that topic?"
    ],
    "answer": 0,
    "explanation": "'철저히 준비했으니 잘해낼 거야!(You've prepared thoroughly...)'가 격려의 말로 가장 적합합니다."
  },
  {
    "id": "lt-5-18",
    "level": 5,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Can we reschedule our project meeting to Friday afternoon?\nB: ________________________",
    "question": "일정 변경에 긍정적으로 동의하는 응답은?",
    "options": [
      "Friday afternoon works perfectly for me.",
      "I don't like Friday at all.",
      "We already finished the project last month.",
      "Where is your office?"
    ],
    "answer": 0,
    "explanation": "'Friday afternoon works perfectly for me.(금요일 오후 아주 좋아)'가 일정 수락으로 가장 자연스럽습니다."
  },
  {
    "id": "lt-5-19",
    "level": 5,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Librarian: Keep in mind that overdue books incur a penalty fee of fifty cents per day. You can easily renew your loan on our university website before midnight.",
    "question": "[청해] 연체된 도서에 대한 안내 내용으로 일치하는 것은?",
    "options": [
      "하루당 50센트의 연체료가 부과된다.",
      "온라인 연장은 주말에만 가능하다.",
      "연체 시 즉시 회원 자격이 영구 정지된다.",
      "최대 3개월까지 수수료 없이 연장할 수 있다."
    ],
    "answer": 0,
    "explanation": "'incur a penalty fee of fifty cents per day(하루당 50센트 연체료 부과)'라고 명시했습니다."
  },
  {
    "id": "lt-5-20",
    "level": 5,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Doctor: The test results show your iron levels are somewhat low. I recommend taking this dietary supplement and adding leafy spinach to your daily meals.",
    "question": "[청해] 의사가 환자에게 진단한 상태와 추천 처방은?",
    "options": [
      "비타민 과다 / 육류 위주 식단",
      "철분 수치 부족 / 보충제 복용 및 시금치 섭취 권장",
      "혈압 상승 / 즉각적인 수술 권장",
      "시력 저하 / 정밀 안과 검진 권장"
    ],
    "answer": 1,
    "explanation": "'iron levels are somewhat low(철분 부족)'와 'taking this dietary supplement and adding leafy spinach'를 처방했습니다."
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
    "id": "lt-6-7",
    "level": 6,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 단어는?\n\"The scientist gathered conclusive _______ to substantiate her groundbreaking hypothesis.\"",
    "options": [
      "evidence",
      "rumor",
      "obstacle",
      "hesitation"
    ],
    "answer": 0,
    "explanation": "'가설을 입증하기 위해 결정적인 증거(conclusive evidence)를 수집했다'가 가장 적절합니다."
  },
  {
    "id": "lt-6-8",
    "level": 6,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 문맥상 밑줄 친 단어의 유의어는?\n\"The board decided to <u>postpone</u> the annual shareholder conference.\"",
    "options": [
      "cancel",
      "put off",
      "accelerate",
      "conduct"
    ],
    "answer": 1,
    "explanation": "'postpone'은 '연기하다, 미루다'라는 뜻으로 'put off'와 동의어입니다."
  },
  {
    "id": "lt-6-9",
    "level": 6,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "빈칸에 알맞은 단어는?\n\"Due to rapid technological changes, several traditional jobs are in danger of _______.\"",
    "options": [
      "extinction",
      "promotion",
      "celebration",
      "consumption"
    ],
    "answer": 0,
    "explanation": "'in danger of extinction(사라질/멸종할 위기에 처한)'이 문맥상 적합합니다."
  },
  {
    "id": "lt-6-10",
    "level": 6,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 알맞은 관계부사는?\n\"This is the historic laboratory _______ Alexander Fleming discovered penicillin.\"",
    "options": [
      "which",
      "where",
      "when",
      "why"
    ],
    "answer": 1,
    "explanation": "선행사가 장소('the historic laboratory')이고 뒤 문장이 완전하므로 관계부사 'where'가 올바릅니다."
  },
  {
    "id": "lt-6-11",
    "level": 6,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 문장의 분사구문 변환으로 알맞은 것은?\n\"As she felt exhausted after the marathon, she fell asleep instantly.\"",
    "options": [
      "Feeling exhausted after the marathon, she fell asleep instantly.",
      "Felt exhausted after the marathon, she fell asleep instantly.",
      "Having exhausted after the marathon, she fell asleep instantly.",
      "To feel exhausted after the marathon, she fell asleep instantly."
    ],
    "answer": 0,
    "explanation": "능동 분사구문으로 접속사와 주어를 생략하고 동사원형에 -ing를 붙인 'Feeling exhausted ~'가 올바릅니다."
  },
  {
    "id": "lt-6-12",
    "level": 6,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 어법상 어색한 문장은?",
    "options": [
      "I found it difficult to master calculus in one semester.",
      "She suggested that we take a brief intermission.",
      "Neither the teacher nor the students was informed.",
      "The more you read, the broader your perspective becomes."
    ],
    "answer": 2,
    "explanation": "'Neither A nor B' 구문에서 동사의 수는 B(the students)에 일치시켜야 하므로 'was'가 아닌 'were informed'여야 합니다."
  },
  {
    "id": "lt-6-13",
    "level": 6,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Confirmation bias is a pervasive psychological tendency where individuals actively search for, interpret, and recall information in a manner that confirms their preexisting beliefs, while simultaneously disregarding contradictory empirical evidence.",
    "question": "According to the passage, what characterizes confirmation bias?",
    "options": [
      "Evaluating all opposing perspectives with strict neutrality",
      "Favoring information that reinforces preconceived convictions while ignoring contradictions",
      "Making statistical decisions based solely on mathematical logic",
      "Constantly changing opinions whenever new evidence surfaces"
    ],
    "answer": 1,
    "explanation": "자신의 기존 신념을 지지하는 정보만 선호하고 모순되는 증거는 무시하는 편향입니다."
  },
  {
    "id": "lt-6-14",
    "level": 6,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "The rapid expansion of artificial intelligence in algorithmic decision-making has ignited debates regarding inherent algorithmic bias. Because AI models are trained on historical datasets compiled by humans, they inevitably risk codifying and magnifying historical social inequities.",
    "question": "Why do AI algorithms carry the risk of social bias?",
    "options": [
      "Because computers have inherent emotional prejudices",
      "Because training datasets reflect historical human biases and inequalities",
      "Because software developers intentionally code discriminatory formulas",
      "Because algorithms cannot process numerical statistical data"
    ],
    "answer": 1,
    "explanation": "훈련 데이터셋 자체가 인간이 만든 과거의 편향과 불평등을 담고 있기 때문입니다."
  },
  {
    "id": "lt-6-15",
    "level": 6,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Ecosystem resilience refers to the capacity of a natural ecosystem to absorb environmental disturbances, such as forest fires or severe droughts, and subsequently reorganize while undergoing change so as to retain fundamentally the same function, structure, and feedbacks.",
    "question": "What is the primary defining feature of ecosystem resilience?",
    "options": [
      "Total immunity from any environmental disturbance",
      "The capacity to recover and maintain fundamental functions following severe disruptions",
      "The rapid multiplication of predatory animal species",
      "Permanent transformation into an entirely distinct habitat"
    ],
    "answer": 1,
    "explanation": "심각한 교란 후에도 본래의 기능과 구조를 유지하며 회복하는 능력을 의미합니다."
  },
  {
    "id": "lt-6-16",
    "level": 6,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Monetary policy implemented by central banks primarily aims to stabilize currency values and manage macroeconomic inflation. By adjusting interest rates, monetary authorities influence borrowing costs for both commercial banks and everyday consumers.",
    "question": "How do central banks influence economic borrowing costs?",
    "options": [
      "By regulating retail store product prices directly",
      "By adjusting benchmark interest rates",
      "By printing unlimited paper currency for the public",
      "By abolishing commercial banking systems entirely"
    ],
    "answer": 1,
    "explanation": "기준 금리(benchmark interest rates) 조정을 통해 차입 비용에 영향을 미칩니다."
  },
  {
    "id": "lt-6-17",
    "level": 6,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: We need to finalize the quarterly budget proposal by 5 PM.\nB: Let's ________________________ so that we don't miss the deadline.",
    "question": "지체 없이 즉시 본론에 착수하자는 관용 표현으로 가장 알맞은 것은?",
    "options": [
      "get straight down to business",
      "beat around the bush",
      "call it a day right now",
      "cry over spilled milk"
    ],
    "answer": 0,
    "explanation": "'get straight down to business'는 '본격적으로 일/본론에 착수하다'라는 실전 비즈니스 표현입니다."
  },
  {
    "id": "lt-6-18",
    "level": 6,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: The client rejected our initial design draft without any constructive feedback.\nB: I know it's frustrating, but ________________________.",
    "question": "상대의 낙담을 위로하고 다음 단계로 나아가자는 격려 표현은?",
    "options": [
      "back to the drawing board; let's brainstorm new concepts",
      "we should immediately resign from the company",
      "I told you your design was completely useless",
      "let's never speak to that client again"
    ],
    "answer": 0,
    "explanation": "'back to the drawing board(원점으로 돌아가 다시 새롭게 구상해보자)'가 합리적인 격려이자 대안입니다."
  },
  {
    "id": "lt-6-19",
    "level": 6,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Professor: Notice that the Renaissance was not merely a cultural revival of classical antiquity, but fundamentally a profound epistemological paradigm shift toward empirical observation and secular humanism.",
    "question": "[청해] 교수가 설명한 르네상스의 본질적 특성으로 가장 부합하는 것은?",
    "options": [
      "고대 유물의 단순한 물리적 복원에 국한되었다.",
      "경험적 관찰과 세속적 인본주의로의 심오한 인식론적 패러다임 전환이었다.",
      "종교적 교리에만 절대적으로 의존하는 신학 운동이었다.",
      "모든 과학적 탐구를 전면 중단시킨 시기였다."
    ],
    "answer": 1,
    "explanation": "'epistemological paradigm shift toward empirical observation and secular humanism'이라고 설명했습니다."
  },
  {
    "id": "lt-6-20",
    "level": 6,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Podcast Host: While remote work eliminates commuting stress, prolonged social isolation can subtly degrade team cohesion and spontaneous brainstorming over time.",
    "question": "[청해] 팟캐스트 진행자가 지적한 원격 근무의 잠재적 부작용은?",
    "options": [
      "출퇴근 스트레스의 급격한 증가",
      "장기적인 사회적 고립으로 인한 팀 결속력 및 자발적 아이디어 회의의 저하",
      "모든 직원의 급여 대폭 삭감",
      "네트워크 인프라의 전면적 붕괴"
    ],
    "answer": 1,
    "explanation": "장기적 사회적 고립이 팀 결속력과 즉흥적 브레인스토밍을 저하시킨다고 지적했습니다."
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
    "passage": "A: We've been debugging this codebase for six hours straight.\nB: I agree, my eyes are burning. Let's <u>call it a day</u>.",
    "question": "위 대화의 밑줄 친 'call it a day'의 의미는?",
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
    "id": "lt-7-7",
    "level": 7,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 문맥상 가장 알맞은 어휘는?\n\"The CEO's ambiguous remarks only served to _______ public skepticism regarding the merger.\"",
    "options": [
      "exacerbate",
      "mitigate",
      "alleviate",
      "extinguish"
    ],
    "answer": 0,
    "explanation": "'애매모호한 발언이 회의론을 더욱 악화(exacerbate)시켰다'가 자연스럽습니다. (mitigate/alleviate: 완화하다)"
  },
  {
    "id": "lt-7-8",
    "level": 7,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 중 밑줄 친 단어와 의미가 가장 가까운 것은?\n\"The project was hampered by a <u>scarcity</u> of specialized engineers.\"",
    "options": [
      "dearth",
      "surplus",
      "wealth",
      "diversity"
    ],
    "answer": 0,
    "explanation": "'scarcity'는 '부족, 결핍'을 뜻하며 유의어는 'dearth'입니다. (surplus: 잉여, 초과)"
  },
  {
    "id": "lt-7-9",
    "level": 7,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "빈칸에 알맞은 단어는?\n\"She exhibited remarkable _______ in maintaining composure during the political crisis.\"",
    "options": [
      "fortitude",
      "fragility",
      "reluctance",
      "indolence"
    ],
    "answer": 0,
    "explanation": "'위기 속에서도 침착함을 유지하는 놀라운 불굴의 용기/의연함(fortitude)'이 문맥상 적합합니다."
  },
  {
    "id": "lt-7-10",
    "level": 7,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 알맞은 표현은?\n\"Had he consulted his academic advisor earlier, he _______ such a costly mistake.\"",
    "options": [
      "would not make",
      "would not have made",
      "did not make",
      "will not make"
    ],
    "answer": 1,
    "explanation": "가정법 과거완료의 도치 구문(If he had consulted -> Had he consulted)이므로 귀결절은 'would have p.p.'가 와야 합니다."
  },
  {
    "id": "lt-7-11",
    "level": 7,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 어법상 올바른 문장은?",
    "options": [
      "Hardly had she entered the auditorium when the keynote lecture began.",
      "Hardly she had entered the auditorium than the keynote lecture began.",
      "No sooner had she entered the auditorium when the keynote lecture began.",
      "Scarcely she entered the auditorium before the keynote lecture began."
    ],
    "answer": 0,
    "explanation": "'Hardly + had + S + p.p. ~ when/before ...' 구문이 어법에 부합합니다. ('No sooner'는 than과 호응)"
  },
  {
    "id": "lt-7-12",
    "level": 7,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 들어갈 알맞은 관계사는?\n\"He failed to provide any empirical data, _______ cast serious doubt on his claims.\"",
    "options": [
      "which",
      "that",
      "what",
      "where"
    ],
    "answer": 0,
    "explanation": "앞 문장 전체를 선행사로 받는 계속적 용법의 관계대명사는 'which'만 가능합니다 (that 불가)."
  },
  {
    "id": "lt-7-13",
    "level": 7,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Technological leapfrogging occurs when developing economies bypass intermediate, obsolete stages of infrastructure development to adopt cutting-edge innovations directly, as demonstrated by the rapid transition directly from cash economies to mobile payments without developing widespread traditional credit card systems.",
    "question": "What is the defining mechanism of technological leapfrogging?",
    "options": [
      "Slowly replicating every historical developmental phase of advanced nations",
      "Skipping inferior legacy systems to immediately integrate advanced technologies",
      "Eliminating digital payment infrastructure completely",
      "Relying entirely on foreign physical manufacturing imports"
    ],
    "answer": 1,
    "explanation": "구식 과도기 인프라를 건너뛰고 최신 기술로 직행하는 현상입니다."
  },
  {
    "id": "lt-7-14",
    "level": 7,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "In behavioral economics, hyperbolic discounting describes the human cognitive bias to value immediate, short-term gratifications disproportionately higher than delayed long-term rewards, a mechanism that fundamentally drives both chronic procrastination and systemic under-saving for retirement.",
    "question": "What behavior is directly catalyzed by hyperbolic discounting?",
    "options": [
      "Uncompromising long-term investment discipline",
      "Valuing future security over instantaneous gratification",
      "Procrastination and prioritizing immediate rewards over future benefits",
      "A complete immunity to emotional marketing stimuli"
    ],
    "answer": 2,
    "explanation": "지연된 보상보다 즉각적 만족을 과도하게 선호하여 미루기(procrastination)와 저축 부족을 초래합니다."
  },
  {
    "id": "lt-7-15",
    "level": 7,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "The concept of linguistic relativity posits that the structural idiosyncrasies of a spoken language profoundly shape and constrain the cognitive modes through which its speakers conceptualize temporal, spatial, and social reality.",
    "question": "What core hypothesis does linguistic relativity advance?",
    "options": [
      "Language structure influences and shapes its speakers' worldview and cognition.",
      "All human languages possess identical grammatical frameworks.",
      "Thought is completely autonomous from vocabulary and syntax.",
      "Written language always precedes oral communication historically."
    ],
    "answer": 0,
    "explanation": "언어 구조가 화자의 사고방식과 현실 인식에 영향을 미친다는 가설입니다."
  },
  {
    "id": "lt-7-16",
    "level": 7,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Ocean acidification, spurred by elevated atmospheric carbon dioxide absorption, lowers seawater pH levels. This reduction severely inhibits marine calcifying organisms, such as pteropods and reef-building corals, from synthesizing calcium carbonate shells.",
    "question": "What is the primary ecological hazard of ocean acidification discussed?",
    "options": [
      "Accelerated calcification of coral reefs",
      "Impeded shell synthesis among calcifying marine organisms",
      "A dramatic decrease in oceanic water temperature",
      "Excessive proliferation of freshwater micro-algae"
    ],
    "answer": 1,
    "explanation": "석회화 해양 생물이 탄산칼슘 껍질을 형성하는 것을 심각하게 저해합니다."
  },
  {
    "id": "lt-7-17",
    "level": 7,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Our competitors just launched a counter-campaign that blindsided us.\nB: We can't afford to panic; let's ________________________.",
    "question": "상황을 예의주시하며 냉정하게 기회를 엿보자는 실전 표현은?",
    "options": [
      "play our cards close to our chest and wait for their next move",
      "throw in the towel immediately",
      "spill the beans to the press right now",
      "burn our bridges with all our investors"
    ],
    "answer": 0,
    "explanation": "'play one's cards close to one's chest'는 패를 숨기고 신중하게 대처함을 뜻합니다."
  },
  {
    "id": "lt-7-18",
    "level": 7,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Do you think the regional economic forecast is overly optimistic?\nB: Absolutely; I'd take those governmental projections with ________________________.",
    "question": "'그 전망치를 곧이곧대로 믿지 않고 의심해보다/가려듣다'라는 관용구는?",
    "options": [
      "a grain of salt",
      "a piece of cake",
      "a drop in the ocean",
      "a blessing in disguise"
    ],
    "answer": 0,
    "explanation": "'take ~ with a grain of salt'는 '에누리해서/가려 듣다, 곧이곧대로 믿지 않다'라는 뜻입니다."
  },
  {
    "id": "lt-7-19",
    "level": 7,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Economics Lecturer: Stagflation presents an acute policy dilemma because conventional fiscal stimulus that tackles stagnant growth inevitably fuels rampant inflation, while monetary tightening risks deepening the industrial recession.",
    "question": "[청해] 강연자가 설명한 스태그플레이션(Stagflation)의 딜레마로 가장 적절한 것은?",
    "options": [
      "성장 진작을 위한 재정 확장은 인플레이션을 부추기고, 긴축은 경기 침체를 심화시키는 딜레마",
      "금리를 낮추면 즉시 국가 부채가 전액 소멸되는 현상",
      "수출과 수입이 동시에 역사적 최고치를 갱신하는 호황 국면",
      "제조업 생산성이 서비스업 생산성을 완전히 압도하는 상황"
    ],
    "answer": 0,
    "explanation": "성장을 위한 부양책은 인플레이션을 유발하고 긴축은 침체를 심화시키는 딜레마를 설명했습니다."
  },
  {
    "id": "lt-7-20",
    "level": 7,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Neurologist: Cognitive reserve explains why individuals with comparable neuropathological damage from Alzheimer's disease exhibit vastly disparate clinical symptoms, bolstered largely by lifelong intellectual stimulation.",
    "question": "[청해] 신경학자가 설명한 인지 비축분(Cognitive reserve)의 역할은?",
    "options": [
      "뇌 손상이 발생하지 않도록 물리적 외상을 차단한다.",
      "평생에 걸친 지적 자극을 통해 동일한 뇌 병변 속에서도 임상 증상 발현에 개인차를 만들어낸다.",
      "수면 시간을 하루 2시간 이내로 단축시켜 준다.",
      "유전적 알츠하이머 유전자를 체내에서 영구 제거한다."
    ],
    "answer": 1,
    "explanation": "평생의 지적 자극이 뇌 병변에 대한 저항력/임상 증상 발현 차이를 만든다고 설명했습니다."
  },
  {
    "id": "lt-8-1",
    "level": 8,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 밑줄 친 라틴어 어원의 의미로 올바른 것은?\n\"The word 'perspective' contains the Latin root <u>spect</u>.\"",
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
    "question": "다음 중 어법상 올바른 도치 문장은?",
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
    "passage": "A: Our competitor just launched a surprise product with lower pricing!\nB: Stay calm. We need to <u>go back to the drawing board</u> and revise our features.",
    "question": "위 대화의 밑줄 친 'go back to the drawing board'가 뜻하는 바는?",
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
    "id": "lt-8-7",
    "level": 8,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 단어는?\n\"The diplomatic treaty was so _______ that both warring nations interpreted key clauses in conflicting ways.\"",
    "options": [
      "equivocal",
      "indisputable",
      "unambiguous",
      "transparent"
    ],
    "answer": 0,
    "explanation": "'equivocal(모호한, 다의적인)'이 문맥상 적절합니다. (indisputable/unambiguous: 명백한)"
  },
  {
    "id": "lt-8-8",
    "level": 8,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 중 밑줄 친 단어와 의미가 가장 먼(반의어) 것은?\n\"The community was known for its <u>ephemeral</u> cultural festivals.\"",
    "options": [
      "perpetual",
      "transient",
      "fleeting",
      "momentary"
    ],
    "answer": 0,
    "explanation": "'ephemeral'은 '덧없는, 일시적인' 뜻이므로 반의어는 'perpetual(영구적인)'입니다."
  },
  {
    "id": "lt-8-9",
    "level": 8,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "빈칸에 알맞은 단어는?\n\"The sudden macroeconomic shock caused a _______ collapse of fragile speculative credit markets.\"",
    "options": [
      "precipitous",
      "gradual",
      "negligible",
      "deliberate"
    ],
    "answer": 0,
    "explanation": "'급작스러운 충격이 투기적 신용 시장의 가파른/급격한 붕괴(precipitous collapse)를 초래했다'가 적합합니다."
  },
  {
    "id": "lt-8-10",
    "level": 8,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 문장의 빈칸에 들어갈 알맞은 어형은?\n\"Only after the forensic audit was officially concluded _______ the full extent of the systemic embezzlement.\"",
    "options": [
      "did the executives realize",
      "the executives realized",
      "have the executives realized",
      "the executives did realize"
    ],
    "answer": 0,
    "explanation": "'Only + 부사구/부사절'이 문두에 오면 주어-동사 도치가 일어나 조동사 did + 주어 + 동사원형 형태가 됩니다."
  },
  {
    "id": "lt-8-11",
    "level": 8,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 어법상 틀린 부분을 포함한 문장은?",
    "options": [
      "The committee insisted that every member submits a written statement.",
      "She demands that the confidential dossier remain sealed.",
      "It is imperative that he be notified immediately.",
      "We requested that the proposed amendments not be dismissed without discussion."
    ],
    "answer": 0,
    "explanation": "주장/요구 동사 insist의 목적어 that절에는 당위성을 나타내어 '(should) + 동사원형'을 써야 하므로 'submits'가 아닌 'submit'이어야 합니다."
  },
  {
    "id": "lt-8-12",
    "level": 8,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 알맞은 복합관계대명사는?\n\"The scholarship will be granted to _______ demonstrates the most innovative thesis defense.\"",
    "options": [
      "whoever",
      "whomever",
      "whichever",
      "whatever"
    ],
    "answer": 0,
    "explanation": "전치사 to 뒤의 명사절 내에서 동사 'demonstrates'의 주어 역할을 해야 하므로 주격 복합관계대명사 'whoever'가 맞습니다."
  },
  {
    "id": "lt-8-13",
    "level": 8,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "The tragedy of the commons formalizes a socioeconomic dilemma wherein individual consumers, acting independently and rationally according to perceived self-interest, collectively deplete or spoil a shared unowned resource, despite acknowledging that such depletion is contrary to the long-term common good.",
    "question": "What fundamental tension underlies the tragedy of the commons?",
    "options": [
      "Government over-regulation versus individual privacy",
      "Individual rational self-interest versus collective long-term preservation",
      "Excessive private ownership versus strict communist distribution",
      "Rapid technological automation versus human artisan labor"
    ],
    "answer": 1,
    "explanation": "개인의 합리적 이기심과 공동체의 장기적 보존 사이의 모순/갈등입니다."
  },
  {
    "id": "lt-8-14",
    "level": 8,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Epigenetic mechanisms modify gene expression patterns dynamically without altering the underlying hereditary nucleotide DNA sequences. Environmental stressors, dietary habits, and psychological trauma can leave molecular tags that selectively silence or activate specific genetic pathways across generations.",
    "question": "What is unique about epigenetic modifications according to the passage?",
    "options": [
      "They permanently alter the nucleotide DNA sequence.",
      "They regulate gene expression without modifying the underlying DNA sequence.",
      "They are entirely invulnerable to environmental stressors.",
      "They occur exclusively in non-mammalian organisms."
    ],
    "answer": 1,
    "explanation": "기저 DNA 염기서열 변화 없이 유전자 발현 패턴을 조절한다는 점입니다."
  },
  {
    "id": "lt-8-15",
    "level": 8,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Heuristic problem-solving strategies trade strict mathematical optimality and exhaustive precision for cognitive speed and practical efficiency, functioning as indispensable mental shortcuts in volatile real-world environments characterized by severe information asymmetry.",
    "question": "Why do humans rely on heuristics according to the text?",
    "options": [
      "To achieve mathematically infallible perfection in all calculations",
      "To make swift, practical decisions despite informational limitations and time constraints",
      "Because logical deliberation is evolutionarily impossible",
      "To deliberately increase cognitive confusion and bias"
    ],
    "answer": 1,
    "explanation": "정보의 제약과 시간 압박 속에서 신속하고 실용적인 결정을 내리기 위한 지름길입니다."
  },
  {
    "id": "lt-8-16",
    "level": 8,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Creative destruction, conceptualized by Joseph Schumpeter, describes the incessant process of industrial mutation that incessantly revolutionizes economic structures from within, perpetually destroying obsolete commercial incumbents while generating innovative consumer industries.",
    "question": "According to Schumpeter, how does creative destruction operate?",
    "options": [
      "By perpetually sustaining obsolete monopolistic conglomerates",
      "By dismantling outdated commercial frameworks to birth innovative economic entities",
      "By prohibiting technological innovation through legislative tariffs",
      "By eliminating all free-market competition through state planning"
    ],
    "answer": 1,
    "explanation": "구시대적 상업 구조를 해체하고 새로운 혁신적 경제 주체를 끊임없이 창출합니다."
  },
  {
    "id": "lt-8-17",
    "level": 8,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: We are facing fierce pushback from several key stakeholders on this restructuring.\nB: I know, but we have already crossed the Rubicon; there's ________________________.",
    "question": "'이미 돌이킬 수 없는 결정을 내렸으니 뒤로 물러설 수 없다'는 관용 표현은?",
    "options": [
      "no turning back now",
      "a needle in a haystack",
      "a storm in a teacup",
      "no point in celebrating"
    ],
    "answer": 0,
    "explanation": "'crossed the Rubicon(루비콘 강을 건넜다)'과 호응하여 'no turning back now(이제 뒤로 물러설 수 없다)'가 알맞습니다."
  },
  {
    "id": "lt-8-18",
    "level": 8,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Should we commit all our capital to this unproven biotechnology startup?\nB: Absolutely not; let's not ________________________.",
    "question": "모든 자원을 한곳에 위험하게 올인하지 말자는 표현은?",
    "options": [
      "put all our eggs in one basket",
      "bark up the wrong tree",
      "judge a book by its cover",
      "let sleeping dogs lie"
    ],
    "answer": 0,
    "explanation": "'put all our eggs in one basket'은 한 바구니에 모든 달걀을 담는 위험한 분산 투자 부재를 경계하는 표현입니다."
  },
  {
    "id": "lt-8-19",
    "level": 8,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Philosopher: Consider that the Ship of Theseus paradox probes the metaphysics of identity: if every wooden plank is gradually substituted over decades, does the resultant vessel maintain numerical identity with the original?",
    "question": "[청해] 테세우스의 배 역설이 탐구하는 철학적 핵심 질문은 무엇인가?",
    "options": [
      "고대 항해술의 경제적 수지타산",
      "부품이 전부 교체되었을 때 대상의 존재론적 동일성이 유지되는가의 문제",
      "목재 선박의 최적 방수 화학 처리법",
      "선원들의 계급 체계 및 지휘 통솔권의 정당성"
    ],
    "answer": 1,
    "explanation": "모든 부품이 교체되었을 때 본래 사물과의 동일성(metaphysics of identity) 유지 여부를 묻고 있습니다."
  },
  {
    "id": "lt-8-20",
    "level": 8,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Tech Analyst: Quantum supremacy does not imply that quantum architectures will displace classical silicon chips for mundane tasks; rather, it indicates exponential speedup in specialized, highly parallelized linear algebra algorithms.",
    "question": "[청해] 기술 분석가가 설명한 양자 우위(Quantum supremacy)의 진정한 의미는?",
    "options": [
      "모든 일상 업무에서 실리콘 칩을 완전히 대체한다는 뜻이다.",
      "특정 선형대수 알고리즘 등 고도로 병렬화된 전문 연산 영역에서의 기하급수적 연산 속도 향상을 의미한다.",
      "양자 컴퓨터가 인간의 모든 의식과 감정을 완벽히 복제했음을 뜻한다.",
      "더 이상 전력 공급 없이도 영구 가동되는 프로세서의 개발을 뜻한다."
    ],
    "answer": 1,
    "explanation": "특정 전문 연산 영역에서의 지수적 연산 가속을 뜻한다고 명시했습니다."
  },
  {
    "id": "lt-9-1",
    "level": 9,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 글의 주인공의 심경 변화로 가장 알맞은 것은?\n\"When Clara saw the dense smoke pouring out from her studio, she was <u>devastated</u>. However, upon hearing that all her original canvas paintings had already been safely relocated to the gallery, she let out an enormous sigh and felt deeply <u>relieved</u>.\"",
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
      "Please write your forwarding <u>address</u> on the envelope.",
      "The president will <u>address</u> the nation tonight on television.",
      "The new municipal policy fails to <u>address</u> housing affordability.",
      "He gave a passionate keynote <u>address</u> at the seminar."
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
    "passage": "A: He claimed he had insider knowledge of the merger, but it sounded completely made up.\nB: Take whatever he says <u>with a grain of salt</u>; he is known for exaggeration.",
    "question": "위 대화의 밑줄 친 'take with a grain of salt'의 의미는?",
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
    "id": "lt-9-7",
    "level": 9,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 단어는?\n\"The philosopher’s dense metaphysical treatises are notorious for their impenetrable _______.\"",
    "options": [
      "opacity",
      "transparency",
      "lucidity",
      "candor"
    ],
    "answer": 0,
    "explanation": "'철학자의 형이상학 논문은 난해한 불투명성/이해하기 어려움(opacity)으로 악명 높다'가 알맞습니다. (lucidity/transparency: 명료함)"
  },
  {
    "id": "lt-9-8",
    "level": 9,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 중 밑줄 친 단어와 의미가 가장 가까운 것은?\n\"He was an <u>ubiquitous</u> presence throughout the contemporary art renaissance.\"",
    "options": [
      "omnipresent",
      "scarce",
      "intermittent",
      "peripheral"
    ],
    "answer": 0,
    "explanation": "'ubiquitous'는 '어디에나 존재하는' 뜻으로 'omnipresent'와 동의어입니다."
  },
  {
    "id": "lt-9-9",
    "level": 9,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "빈칸에 알맞은 단어는?\n\"The new constitutional amendment seeks to _______ arbitrary executive privileges.\"",
    "options": [
      "curtail",
      "augment",
      "proliferate",
      "champion"
    ],
    "answer": 0,
    "explanation": "'독단적인 행정부 특권을 축소/제한(curtail)하고자 한다'가 자연스럽습니다."
  },
  {
    "id": "lt-9-10",
    "level": 9,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 문장의 빈칸에 들어갈 어형으로 어법상 올바른 것은?\n\"So intricate _______ that even seasoned cryptographers struggled for months to decipher it.\"",
    "options": [
      "was the cipher",
      "the cipher was",
      "did the cipher",
      "the cipher did"
    ],
    "answer": 0,
    "explanation": "'So + 형용사/부사'가 강조를 위해 문두로 도치되면 '동사 + 주어' 어순이 되므로 'was the cipher'가 맞습니다."
  },
  {
    "id": "lt-9-11",
    "level": 9,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 문법적으로 올바른 문장은?",
    "options": [
      "Scarcely had the treaty been ratified when hostilities erupted along the demarcation line.",
      "Scarcely had the treaty been ratified than hostilities erupted along the demarcation line.",
      "Scarcely did the treaty ratify when hostilities erupted along the demarcation line.",
      "Scarcely the treaty had been ratified before hostilities erupted along the demarcation line."
    ],
    "answer": 0,
    "explanation": "'Scarcely + had + S + p.p. ~ when ...' 구문이 완벽하게 성립합니다."
  },
  {
    "id": "lt-9-12",
    "level": 9,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 알맞은 것은?\n\"The theorem holds true under theoretical laboratory conditions, _______ real-world atmospheric turbulence is negligible.\"",
    "options": [
      "provided that",
      "lest",
      "for fear that",
      "in case of"
    ],
    "answer": 0,
    "explanation": "'~라는 조건 하에, 만약 ~라면'의 의미를 지닌 조건 접속사구는 'provided that'입니다."
  },
  {
    "id": "lt-9-13",
    "level": 9,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Epistemic injustice occurs when an individual’s credibility as a knower is systematically deflated due to pernicious social prejudices, denying marginalized interlocutors equal epistemic authority within scholarly discourse.",
    "question": "What is the hallmark of testimonial epistemic injustice?",
    "options": [
      "Equitable distribution of scientific funding across institutions",
      "The systematic devaluation of a speaker's epistemic credibility driven by societal prejudice",
      "The complete elimination of subjective bias in academic peer review",
      "Rigorous empirical validation of minority perspectives"
    ],
    "answer": 1,
    "explanation": "사회적 편견으로 인해 화자의 증언/지식적 신뢰성이 부당하게 폄하되는 현상입니다."
  },
  {
    "id": "lt-9-14",
    "level": 9,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Path dependency asserts that early contingent historical choices—often economically arbitrary—impose self-reinforcing systemic constraints that channel subsequent institutional trajectories, rendering structural divergence prohibitively costly even when demonstrably superior alternatives emerge.",
    "question": "Why do path-dependent systems resist transitioning to superior alternatives?",
    "options": [
      "Superior alternatives are universally banned by international treaties.",
      "Self-reinforcing mechanisms and switching costs lock in legacy architectures.",
      "Institutions possess zero collective historical memory.",
      "Technological obsolescence occurs instantaneously without inertia."
    ],
    "answer": 1,
    "explanation": "자기 강화적 메커니즘과 막대한 전환 비용이 기존 레거시 체제에 묶어두기 때문입니다."
  },
  {
    "id": "lt-9-15",
    "level": 9,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "The Jevons paradox demonstrates that technological advancements that amplify the efficiency with which a natural resource is utilized paradoxically increase, rather than abate, aggregate consumption of that resource due to falling operational costs and market expansion.",
    "question": "What paradoxical outcome does the Jevons paradox articulate?",
    "options": [
      "Efficiency gains directly precipitate a surge in overall resource consumption.",
      "Stricter conservation policies invariably double industrial extraction costs.",
      "Technological obsolescence terminates natural resource depletion permanently.",
      "Market monopolies guarantee equitable resource dispersion across classes."
    ],
    "answer": 0,
    "explanation": "자원 이용 효율 향상이 가격 인하와 시장 확대를 불러와 총소비량을 오히려 증가시킨다는 역설입니다."
  },
  {
    "id": "lt-9-16",
    "level": 9,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Algorithmic opacity and the 'black box' phenomenon in deep neural networks pose profound jurisprudential dilemmas. When predictive risk-assessment tools generate non-interpretable conclusions regarding human liberties, they threaten foundational doctrines of due process and administrative accountability.",
    "question": "What legal peril stems from deep learning black-box models?",
    "options": [
      "Absolute transparency in judicial decision-making",
      "Compromised due process caused by non-interpretable automated prognostications",
      "The complete elimination of criminal recidivism",
      "Universal consensus regarding statutory interpretations"
    ],
    "answer": 1,
    "explanation": "설명/해석 불가능한 예측으로 인해 적법 절차와 행정적 책임 원칙이 침해된다는 점입니다."
  },
  {
    "id": "lt-9-17",
    "level": 9,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: The board dismissed our comprehensive restructuring plan without deliberation.\nB: Don't lose heart; we must ________________________ and regroup.",
    "question": "어려움에 굴하지 않고 결연히 인내하며 버티자는 고급 숙어는?",
    "options": [
      "bite the bullet",
      "cut corners",
      "miss the boat",
      "let the cat out of the bag"
    ],
    "answer": 0,
    "explanation": "'bite the bullet'은 '이를 악물고 고통/역경을 견뎌내다'라는 의미의 실전 관용구입니다."
  },
  {
    "id": "lt-9-18",
    "level": 9,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: His keynote address sounded grand, but did it offer any concrete policy solutions?\nB: Hardly; it was merely ________________________.",
    "question": "'실속이나 구체적 내용 없이 겉만 번지르르한 수사/연기'를 뜻하는 표현은?",
    "options": [
      "smoke and mirrors",
      "food for thought",
      "the tip of the iceberg",
      "a bolt from the blue"
    ],
    "answer": 0,
    "explanation": "'smoke and mirrors'는 '실체 없는 눈속임, 허상, 겉치레 수사'를 뜻합니다."
  },
  {
    "id": "lt-9-19",
    "level": 9,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Bioethicist: Germline gene editing fundamentally differs from somatic gene therapy because the genetic alterations propagate irreversibly across subsequent generations, posing profound ontological questions regarding human evolutionary agency.",
    "question": "[청해] 생명윤리학자가 강조한 생식세포 유전자 교정(Germline gene editing)의 본질적 위험성은?",
    "options": [
      "당대 환자 1인에게만 국한되어 유전되지 않는다는 점",
      "유전자 변형이 비가역적으로 미래 세대 전체에 영구 전파된다는 점",
      "치료 비용이 일반 감기약보다 저렴하다는 점",
      "인간의 자연 수명을 20세 이하로 제한한다는 점"
    ],
    "answer": 1,
    "explanation": "유전적 변경이 다음 세대로 영구적/비가역적으로 대물림된다는 점을 지적했습니다."
  },
  {
    "id": "lt-9-20",
    "level": 9,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Economic Historian: The Great Divergence between Western Europe and East Asia during the eighteenth century was not rooted in civilizational institutional superiority, but largely hinged on fortuitous geographical access to coal deposits and New World resources.",
    "question": "[청해] 경제사학자가 제시한 18세기 동서양 '대분기(Great Divergence)'의 주된 요인은?",
    "options": [
      "특정 문명의 절대적 제도적 우월성",
      "석탄 매장지 및 신대륙 자원에 대한 지리적 행운과 접근성",
      "아시아 국가들의 대규모 자발적 쇄국 정책",
      "동양의 문자 체계가 가진 기술적 결함"
    ],
    "answer": 1,
    "explanation": "석탄 매장지와 신대륙 자원에 대한 지리적 접근의 행운(fortuitous geographical access)에 기인했다고 설명했습니다."
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
    "question": "다음 문맥상 밑줄 친 단어의 의미와 가장 유사한 것은?\n\"The sudden macroeconomic shock left currency markets remarkably <u>volatile</u>.\"",
    "options": [
      "stagnant",
      "erratic",
      "placid",
      "impervious"
    ],
    "answer": 1,
    "explanation": "'volatile'은 휘발성의, 급변하는, 변덕스러운 뜻으로 'erratic(불규칙한, 급변하는)'과 동의어입니다."
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
    "passage": "A: The board wants us to pivot the entire AI architecture before the Q3 product release.\nB: That sounds like a recipe for disaster; we are <u>biting off more than we can chew</u>.",
    "question": "위 대화의 밑줄 친 'biting off more than we can chew'의 의미는?",
    "options": [
      "식사량을 조절하지 못하고 과식하고 있다",
      "자신의 역량이나 주어진 여건을 넘어선 무리한 일을 벌이고 있다",
      "경쟁사보다 기술적 우위를 점유하고 있다",
      "철저한 위험 관리를 성공적으로 수행하고 있다"
    ],
    "answer": 1,
    "explanation": "'bite off more than one can chew'는 직역하면 '씹을 수 있는 양보다 더 많이 베어 물다'로, '자신의 능력이나 한도를 초과하여 지나치게 무리한 일/부담을 떠맡다'를 뜻합니다."
  },
  {
    "id": "lt-10-7",
    "level": 10,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 빈칸에 알맞은 최고난도 학술 어휘는?\n\"The author's polemical critique is filled with _______ diatribes directed against orthodox macroeconomic doctrine.\"",
    "options": [
      "vitriolic",
      "salubrious",
      "magnanimous",
      "benign"
    ],
    "answer": 0,
    "explanation": "'vitriolic'은 '독설에 찬, 신랄한'이라는 의미입니다. (salubrious: 유익한, magnanimous: 도량이 넓은)"
  },
  {
    "id": "lt-10-8",
    "level": 10,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "다음 중 밑줄 친 단어와 의미가 가장 가까운 것은?\n\"The committee issued an <u>ineluctable</u> verdict that silenced all judicial dissent.\"",
    "options": [
      "inescapable",
      "debatable",
      "tentative",
      "specious"
    ],
    "answer": 0,
    "explanation": "'ineluctable'은 '피할 수 없는, 불가피한'을 뜻하며 'inescapable'과 동의어입니다."
  },
  {
    "id": "lt-10-9",
    "level": 10,
    "category": "voca",
    "categoryKo": "어휘",
    "question": "빈칸에 알맞은 단어는?\n\"The subtle, almost _______ distinction between epistemic justification and mere belief puzzled philosophers for centuries.\"",
    "options": [
      "imperceptible",
      "flagrant",
      "blatant",
      "palpable"
    ],
    "answer": 0,
    "explanation": "'눈에 보이지 않을 정도로 미세한(imperceptible)' 구분이 문맥상 알맞습니다."
  },
  {
    "id": "lt-10-10",
    "level": 10,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 문장의 빈칸에 들어갈 가장 격조 높은 연결어구는?\n\"The hypothesis remains unproven; _______, empirical simulations suggest remarkable explanatory coherence.\"",
    "options": [
      "notwithstanding",
      "nonetheless",
      "conversely",
      "moreover"
    ],
    "answer": 1,
    "explanation": "'가설은 아직 입증되지 않았으나, 그럼에도 불구하고(nonetheless) 시뮬레이션은 높은 설명적 일관성을 보인다'가 적합합니다."
  },
  {
    "id": "lt-10-11",
    "level": 10,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 중 고전적 가정법(Subjunctive) 구문으로서 어법상 가장 적절한 것은?",
    "options": [
      "Be that as it may, we must proceed with caution.",
      "Be it as that may, we must proceed with caution.",
      "Is that as it may, we must proceed with caution.",
      "That be as it may, we must proceed with caution."
    ],
    "answer": 0,
    "explanation": "'Be that as it may'는 '비록 그것이 사실일지라도, 그렇다 하더라도'라는 정형화된 양보 가정법 관용구입니다."
  },
  {
    "id": "lt-10-12",
    "level": 10,
    "category": "grammar",
    "categoryKo": "문법/구문",
    "question": "다음 빈칸에 알맞은 분사구문 연결은?\n\"The quantum entanglement collapsed, _______ all correlated spin data across the detectors.\"",
    "options": [
      "thereby synchronizing",
      "whereas synchronized",
      "although to synchronize",
      "unless synchronizing"
    ],
    "answer": 0,
    "explanation": "'thereby + -ing'는 '그로 인해 ~하면서'라는 결과적 부대상황을 나타내는 격조 높은 표현입니다."
  },
  {
    "id": "lt-10-13",
    "level": 10,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Dialectical naturalism conceptualizes ecological evolution not as a relentless Darwinian zero-sum contest of selfish individuals, but as an emergent teleological unfolding characterized by mutualism, symposia, and increasingly complex degrees of subjective self-determination across biomes.",
    "question": "What is the foundational ontological premise of dialectical naturalism in this context?",
    "options": [
      "Nature operates strictly under mechanistic, zero-sum predatory dynamics.",
      "Evolution is an emergent process manifesting mutualism and expanding subjective agency.",
      "Biodiversity decreases monotonically through technological intervention.",
      "Genetic mutations are exclusively deterministic and teleologically fixed by external design."
    ],
    "answer": 1,
    "explanation": "진화가 제로섬 투쟁이 아니라 상호부조(mutualism)와 주체적 자율성의 확장으로 창발한다는 관점입니다."
  },
  {
    "id": "lt-10-14",
    "level": 10,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Deconstruction, as inaugurated by Jacques Derrida, interrogates logocentrism by demonstrating that binary oppositions—such as speech/writing, presence/absence, and nature/culture—are neither symmetrical nor ontologically pure, but intrinsically fractured by différance and internal aporias.",
    "question": "What does Derridean deconstruction reveal about conceptual binaries?",
    "options": [
      "They represent transcendent, inviolable structural truths of the universe.",
      "They are hierarchically unstable and internally fractured by textual aporias.",
      "They can be synthesized into an infallible Hegelian totality.",
      "They originate entirely from numerical mathematical principles."
    ],
    "answer": 1,
    "explanation": "개념적 이분법이 위계적으로 불안정하고 텍스트 내부의 아포리아(난제)에 의해 균열되어 있음을 드러냅니다."
  },
  {
    "id": "lt-10-15",
    "level": 10,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "In quantum field theory, the vacuum state is far from an inert void of nothingness; rather, it constitutes a seething cauldron of zero-point quantum fluctuations wherein virtual particle-antiparticle pairs spontaneously materialize and annihilate across Planck-scale temporal intervals.",
    "question": "According to quantum field theory, what defines the nature of the quantum vacuum?",
    "options": [
      "An entirely static, immutable void devoid of all physical phenomena",
      "A dynamic matrix of persistent zero-point fluctuations and fleeting virtual particle pairs",
      "A classical Newtonian space containing indestructible ether",
      "A gravitational singularity where quantum mechanics ceases to operate"
    ],
    "answer": 1,
    "explanation": "완전한 무가 아니라 영점 양자 요동과 가상 입자쌍이 요동치는 동적 매트릭스입니다."
  },
  {
    "id": "lt-10-16",
    "level": 10,
    "category": "reading",
    "categoryKo": "독해",
    "passage": "Baudrillard's theory of simulacra articulates the progression wherein signs detach from physical referents to generate hyperreality—a condition where simulated representations supplant the real so comprehensively that the distinction between authentic provenance and artificial copy is definitively dissolved.",
    "question": "What defines the condition of hyperreality articulated by Baudrillard?",
    "options": [
      "A state where digital models completely obscure and replace any underlying physical reality",
      "An era where artistic copies are legally banned to preserve historical artifacts",
      "The complete resurgence of pre-industrial authentic craftsmanship",
      "A society governed purely by direct sensory encounters with nature"
    ],
    "answer": 0,
    "explanation": "시뮬레이션된 표상이 실재를 대체하여 원본과 복제의 구분이 완전히 소멸된 상태입니다."
  },
  {
    "id": "lt-10-17",
    "level": 10,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: The regulatory commission has summoned our entire executive suite for deposition.\nB: We must ensure our testimony is watertight; they will be going over every document with ________________________.",
    "question": "'극도로 철저하고 샅샅이 뒤져가며 조사하다'라는 격식 관용구는?",
    "options": [
      "a fine-tooth comb",
      "an open mind",
      "a silver spoon",
      "a chip on their shoulder"
    ],
    "answer": 0,
    "explanation": "'go over with a fine-tooth comb'는 '빗질하듯 샅샅이, 극도로 정밀하게 조사하다'라는 뜻입니다."
  },
  {
    "id": "lt-10-18",
    "level": 10,
    "category": "conversation",
    "categoryKo": "실전 회화",
    "passage": "A: Several junior partners are attempting a hostile coup against the managing director.\nB: It's pure madness; they are radically ________________________.",
    "question": "'자신의 처지를 망각하고 분수를 넘어서는 위험한 행동을 하다'라는 고급 표현은?",
    "options": [
      "overplaying their hand",
      "holding all the aces",
      "sweeping it under the carpet",
      "skating on thin ice with zero fear"
    ],
    "answer": 0,
    "explanation": "'overplay one's hand'는 '자신의 패나 역량을 과대평가하여 무리수를 두다'라는 뜻입니다."
  },
  {
    "id": "lt-10-19",
    "level": 10,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Theoretical Physicist: The holographic principle posits that the entire information entropy of a three-dimensional bulk volume can be rigorously encoded upon its lower-dimensional cosmological boundary, implying our perceived spacetime reality might be an emergent boundary projection.",
    "question": "[청해] 이론물리학자가 설명한 홀로그래피 원리(Holographic principle)의 함의는?",
    "options": [
      "3차원 공간의 모든 정보 엔트로피가 2차원 경계면에 완벽히 부호화될 수 있으며, 시공간이 경계면의 창발적 투영일 수 있다는 점",
      "빛의 속도가 매년 5%씩 점진적으로 감속하고 있다는 증거",
      "블랙홀 내부에서는 양자역학 법칙이 완전히 무효화된다는 점",
      "우주의 모든 별이 하나의 거대한 다이아몬드 결정체로 이루어져 있다는 학설"
    ],
    "answer": 0,
    "explanation": "3차원 부피의 정보 엔트로피가 저차원 경계면에 부호화된다는 점을 설명했습니다."
  },
  {
    "id": "lt-10-20",
    "level": 10,
    "category": "listening",
    "categoryKo": "리스닝 청해",
    "isListening": true,
    "audioScript": "Listen carefully: Constitutional Scholar: The doctrine of nondelegation is invoked to preserve the horizontal separation of powers, forbidding the legislature from abdicating its core statutory policymaking discretion to unelected administrative agencies under overly indeterminate guidance.",
    "question": "[청해] 헌법학자가 설명한 비위임 원칙(Nondelegation doctrine)의 근본적 취지는?",
    "options": [
      "입법부가 모호한 기준하에 본질적 정책 결정 재량을 선출되지 않은 행정기관에 무분별하게 위임하는 것을 금지하여 수평적 권력분립을 수호하는 것",
      "행정부의 모든 관료를 국민 투표로 매달 재선출하도록 의무화하는 것",
      "사법부의 위헌법률심사권을 완전히 폐지하고 국회에 독점권을 부여하는 것",
      "지방 자치단체의 조례 제정권을 중앙정부로 강제 흡수하는 것"
    ],
    "answer": 0,
    "explanation": "입법부의 본질적 입법 재량을 행정기관에 포괄 위임하는 것을 금지하여 권력분립을 지키는 취지입니다."
  }
];

if (typeof window !== 'undefined') {
    window.LEVEL_TEST_BANK = LEVEL_TEST_BANK;
}
