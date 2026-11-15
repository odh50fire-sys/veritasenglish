# -*- coding: utf-8 -*-
"""
Level 0 Units 16 ~ 20.
Unit 16: 일반동사 과거형 규칙 변화 (-ed, -d, -ied)
Unit 17: 현재진행형 (be + V-ing, ~하는 중이다)
Unit 18: There is / There are (~이 있다 구문)
Unit 19: 명령문과 감탄문 (Don't / Let's / What a / How)
Unit 20: 기초 접속사 and, but, so, because (문장 연결하기)
"""

LV0_PART3 = [
    # Unit 16: 일반동사 과거형 규칙 변화
    {
        "unitNo": 16,
        "unitId": "lv0_u16",
        "legacyUnitNo": 216,
        "title": "일반동사 과거형 규칙 변화 (-ed, -d, -ied)",
        "part": "과거시제의 기초",
        "targetGrade": "초등 기초 / 입문",
        "summary": "동사원형 뒤에 -ed, -d를 붙여 과거의 동작을 나타내는 규칙과 불규칙 과거형 맛보기",
        "overview": "일반동사로 과거의 동작이나 사건을 말할 때는 동사 뒤에 -ed를 붙여요! -e로 끝나면 -d만, 자음+y로 끝나면 y를 i로 고치고 -ed를 붙입니다. 어제 일어난 일을 영어로 술술 말하는 비결을 배워봅시다!",
        "keyTakeaways": [
            "대부분의 동사: 동사원형 + -ed (play -> played, watch -> watched)",
            "-e로 끝나는 동사: + -d (love -> loved, live -> lived)",
            "자음 + y로 끝나는 동사: y를 i로 고치고 + -ed (study -> studied, cry -> cried)"
        ],
        "formulaCards": [
            {
                "name": "일반동사 과거형 규칙 변화 3공식",
                "formula": "대부분 + -ed | -e 끝 + -d | 자음+y ➔ -ied",
                "examples": [
                    {
                        "en": "We played board games in the living room yesterday.",
                        "ko": "우리는 어제 거실에서 보드게임을 했다.",
                        "point": "play의 과거형은 -ed를 붙인 played입니다."
                    },
                    {
                        "en": "Minho studied English very hard for the test last night.",
                        "ko": "민호는 어젯밤 시험을 위해 영어를 매우 열심히 공부했다.",
                        "point": "study처럼 자음+y로 끝나는 동사는 y를 i로 고치고 -ed를 붙여 studied가 됩니다."
                    }
                ],
                "oxCompare": {
                    "o": "She walked to the park with her mom.",
                    "x": "She walkd to the park with her mom.",
                    "comment": "walk의 과거형은 -ed를 정확히 붙인 walked입니다."
                },
                "trap": "과거시제에서는 주어가 3인칭 단수(he/she)여도 동사에 -s를 붙이지 않고 -ed만 붙입니다.",
                "quizLink": "yesterday, last year, two days ago 같은 과거 부사는 -ed와 단짝 친구입니다."
            },
            {
                "name": "자주 쓰이는 주요 불규칙 과거형 맛보기",
                "formula": "go ➔ went | have ➔ had | see ➔ saw | make ➔ made",
                "examples": [
                    {
                        "en": "My family went to the beach during the summer vacation.",
                        "ko": "우리 가족은 여름 방학 동안 해변에 갔다.",
                        "point": "go의 과거형은 goed가 아니라 불규칙 형태인 went입니다."
                    },
                    {
                        "en": "I had delicious pancakes for breakfast this morning.",
                        "ko": "나는 오늘 아침 식사로 맛있는 팬케이크를 먹었다.",
                        "point": "have의 과거형은 had입니다."
                    }
                ],
                "oxCompare": {
                    "o": "He saw a shooting star in the night sky.",
                    "x": "He seed a shooting star in the night sky.",
                    "comment": "see의 과거형은 seed가 아니라 saw입니다."
                },
                "trap": "불규칙 동사는 -ed를 붙이지 않으므로 단어 자체를 꼭 외워두어야 합니다.",
                "quizLink": "go-went, see-saw, have-had, make-made는 가장 자주 나오는 4대 불규칙 동사입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u16_d1",
                "missionTitle": "미션 1: 자음+y 과거형 어형 변화 오류",
                "sentence": "The baby cryed loudly because she was very hungry.",
                "korean": "그 아기는 매우 배가 고팠기 때문에 큰 소리로 울었다.",
                "underlined": ["The baby", "cryed loudly", "because", "she was very hungry"],
                "wrongIndex": 1,
                "correction": "cried loudly",
                "explanation": "자음+y로 끝나는 cry는 y를 i로 고치고 -ed를 붙여 cried로 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 규칙 변화 3공식] 출제 연계"
            },
            {
                "id": "lv0_u16_d2",
                "missionTitle": "미션 2: 불규칙 과거형 동사 형태 오류",
                "sentence": "We goed to the science museum by subway yesterday.",
                "korean": "우리는 어제 지하철을 타고 국립과학관에 갔다.",
                "underlined": ["We goed", "to the science museum", "by subway", "yesterday"],
                "wrongIndex": 0,
                "correction": "We went",
                "explanation": "go의 올바른 과거형은 goed가 아니라 불규칙 형태인 went입니다.",
                "conceptRef": "1단계 [공식 2: 주요 불규칙 과거형] 출제 연계"
            },
            {
                "id": "lv0_u16_d3",
                "missionTitle": "미션 3: 과거 시제에서 3인칭 단수 -s 혼동",
                "sentence": "She cleaned her room and washess her hands yesterday.",
                "korean": "그녀는 어제 방을 청소하고 손을 씻었다.",
                "underlined": ["She cleaned", "her room", "and washess", "her hands yesterday"],
                "wrongIndex": 2,
                "correction": "and washed",
                "explanation": "어제 일어난 과거의 일이므로 washess가 아니라 과거형 washed가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 규칙 변화 3공식] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 중 동사의 과거형이 바르게 연결된 것은?",
                "options": ["study - studyed", "live - lived", "stop - stoped", "cry - cryed", "play - plaid"],
                "ans": 2,
                "exp": "-e로 끝나는 live는 -d만 붙여 lived가 되는 것이 올바릅니다. (studied, stopped, cried, played)",
                "conceptRef": "1단계 [공식 1: 규칙 변화 3공식]"
            },
            {
                "q": "다음 빈칸에 들어갈 알맞은 말은?\n\n'They ______ a movie together yesterday.'",
                "options": ["watch", "watches", "watched", "watching", "to watch"],
                "ans": 3,
                "exp": "yesterday가 있으므로 일반동사의 과거형 watched가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 규칙 변화 3공식]"
            },
            {
                "q": "다음 중 불규칙 과거형의 짝이 바르지 않은 것은?",
                "options": ["go - went", "have - had", "see - saw", "make - maked", "come - came"],
                "ans": 4,
                "exp": "make의 올바른 과거형은 made입니다.",
                "conceptRef": "1단계 [공식 2: 주요 불규칙 과거형]"
            },
            {
                "q": "'그는 어제 맛있는 피자를 만들었다.'를 영작할 때 빈칸에 알맞은 단어는?\n\n'He ______ delicious pizza yesterday.'",
                "options": ["makes", "making", "made", "maked", "make"],
                "ans": 3,
                "exp": "과거를 나타내므로 make의 과거형 made가 정답입니다.",
                "conceptRef": "1단계 [공식 2: 주요 불규칙 과거형]"
            },
            {
                "q": "다음 밑줄 친 부분 중 어법상 어색한 것은?\n\n'I (1)<u>visited</u> my grandparents and (2)<u>seed</u> many (3)<u>farm</u> animals (4)<u>with</u> my (5)<u>cousin</u>.'",
                "options": ["visited", "seed", "farm", "with", "cousin"],
                "ans": 2,
                "exp": "see의 과거형은 seed가 아니라 saw여야 합니다.",
                "conceptRef": "1단계 [공식 2: 주요 불규칙 과거형]"
            }
        ]
    },

    # Unit 17: 현재진행형 (be + V-ing)
    {
        "unitNo": 17,
        "unitId": "lv0_u17",
        "legacyUnitNo": 217,
        "title": "현재진행형 (be + V-ing, ~하는 중이다)",
        "part": "진행형의 기초",
        "targetGrade": "초등 기초 / 입문",
        "summary": "지금 이 순간 일어나고 있는 동작을 나타내는 be동사 + 동사-ing의 형태와 만드는 규칙",
        "overview": "'지금 나 밥 먹고 있어', '친구와 달리는 중이야'처럼 바로 지금 하고 있는 생생한 동작을 나타낼 때는 현재진행형을 써요. be동사(am/are/is)와 동사-ing를 결합하는 마법 같은 규칙을 배워봅시다!",
        "keyTakeaways": [
            "형태: 주어 + am / are / is + 동사원형-ing (~하는 중이다)",
            "-ing 만드는 법: 대부분 + -ing (eating), -e로 끝나면 e 빼고 + -ing (writing)",
            "단모음+단자음: 마지막 자음 한 번 더 쓰고 + -ing (running, swimming)"
        ],
        "formulaCards": [
            {
                "name": "현재진행형 기본 공식과 짝꿍",
                "formula": "주어 + am/are/is + 동사원형-ing (지금 ~하고 있다)",
                "examples": [
                    {
                        "en": "I am reading an exciting storybook in my room now.",
                        "ko": "나는 지금 내 방에서 신나는 동화책을 읽고 있는 중이다.",
                        "point": "1인칭 I에 맞는 be동사 am과 read 뒤에 -ing를 붙였습니다."
                    },
                    {
                        "en": "The children are playing soccer in the green park.",
                        "ko": "아이들이 초록빛 공원에서 축구를 하고 있는 중이다.",
                        "point": "복수 주어 children 뒤에 are playing을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "She is watching television now.",
                    "x": "She watching television now.",
                    "comment": "진행형에서 be동사(is)를 빼먹고 동사-ing만 쓰면 문장이 완성되지 않습니다."
                },
                "trap": "be동사 없이 동사-ing만 쓰거나, be동사 뒤에 동사원형(She is watch)을 쓰면 틀립니다.",
                "quizLink": "now, right now, Look! 같은 단어는 현재진행형의 대표적인 단짝 신호입니다."
            },
            {
                "name": "-ing 만드는 스펠링 규칙",
                "formula": "e 탈락 + -ing (making) | 단모음+단자음 ➔ 자음 추가 + -ing (running)",
                "examples": [
                    {
                        "en": "He is writing a sweet birthday letter to his mom.",
                        "ko": "그는 엄마에게 다정한 생일 편지를 쓰고 있는 중이다.",
                        "point": "write처럼 -e로 끝나는 동사는 e를 빼고 -ing를 붙여 writing이 됩니다."
                    },
                    {
                        "en": "The fast runners are running towards the finish line.",
                        "ko": "빠른 주자들이 결승선을 향해 달리고 있는 중이다.",
                        "point": "run은 단모음+단자음이므로 n을 한 번 더 쓰고 -ing를 붙입니다."
                    }
                ],
                "oxCompare": {
                    "o": "They are swimming in the clear river.",
                    "x": "They are swiming in the clear river.",
                    "comment": "swim은 m을 한 번 더 쓴 swimming이 올바른 철자입니다."
                },
                "trap": "see처럼 -ee로 끝나는 동사는 e를 빼지 않고 그냥 seeing으로 씁니다.",
                "quizLink": "run-running, swim-swimming, sit-sitting, stop-stopping 자음 중복을 꼭 외우세요."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u17_d1",
                "missionTitle": "미션 1: 진행형 be동사 누락 오류 수정",
                "sentence": "Look! The white bird flying high in the blue sky.",
                "korean": "봐! 흰 새가 파란 하늘 높이 날아가고 있어.",
                "underlined": ["Look!", "The white bird", "flying high", "in the blue sky"],
                "wrongIndex": 2,
                "correction": "is flying high",
                "explanation": "현재진행형은 be동사 + V-ing 구조이므로 단수 주어 뒤에 is flying이 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 현재진행형 기본 공식] 출제 연계"
            },
            {
                "id": "lv0_u17_d2",
                "missionTitle": "미션 2: 단모음+단자음 -ing 철자 오류 수정",
                "sentence": "My little puppy is runing across the living room carpet.",
                "korean": "내 어린 강아지가 거실 카펫을 가로질러 달리고 있다.",
                "underlined": ["My little puppy", "is runing", "across the", "living room carpet"],
                "wrongIndex": 1,
                "correction": "is running",
                "explanation": "run은 단모음+단자음 단어이므로 n을 한 번 더 써서 running으로 표기해야 합니다.",
                "conceptRef": "1단계 [공식 2: -ing 만드는 스펠링 규칙] 출제 연계"
            },
            {
                "id": "lv0_u17_d3",
                "missionTitle": "미션 3: -e 탈락 -ing 철자 오류 수정",
                "sentence": "Mom is makeing delicious cookies in the warm kitchen.",
                "korean": "엄마는 따뜻한 주방에서 맛있는 쿠키를 만들고 계신다.",
                "underlined": ["Mom is", "makeing delicious cookies", "in the", "warm kitchen"],
                "wrongIndex": 1,
                "correction": "making delicious cookies",
                "explanation": "make처럼 -e로 끝나는 동사는 e를 없애고 -ing를 붙여 making으로 써야 합니다.",
                "conceptRef": "1단계 [공식 2: -ing 만드는 스펠링 규칙] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 중 동사에 -ing를 붙인 형태가 올바른 것은?",
                "options": ["make - makeing", "run - runing", "swim - swimming", "write - writeing", "sit - siting"],
                "ans": 3,
                "exp": "swim은 단모음+단자음이므로 자음 m을 한 번 더 쓰고 -ing를 붙인 swimming이 올바릅니다.",
                "conceptRef": "1단계 [공식 2: -ing 만드는 스펠링 규칙]"
            },
            {
                "q": "다음 빈칸에 들어갈 알맞은 말은?\n\n'Listen! The birds ______ in the trees.'",
                "options": ["sing", "singing", "is singing", "are singing", "sang"],
                "ans": 4,
                "exp": "The birds는 복수 주어이므로 be동사 are + singing이 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 현재진행형 기본 공식]"
            },
            {
                "q": "다음 문장의 빈칸에 알맞은 것은?\n\n'I ______ my homework right now.'",
                "options": ["do", "am doing", "is doing", "are doing", "doing"],
                "ans": 2,
                "exp": "주어가 I이고 right now(지금 당장)가 있으므로 am doing이 정답입니다.",
                "conceptRef": "1단계 [공식 1: 현재진행형 기본 공식]"
            },
            {
                "q": "'그녀는 지금 음악을 듣고 있는 중이다.'를 바르게 영작한 것은?",
                "options": [
                    "She listening to music now.",
                    "She is listening to music now.",
                    "She are listening to music now.",
                    "She is listen to music now.",
                    "She listens music now."
                ],
                "ans": 2,
                "exp": "현재진행형은 be동사 + V-ing이므로 She is listening to music now가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 현재진행형 기본 공식]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "He is taking a shower.",
                    "We are having lunch.",
                    "They are danceing happily.",
                    "The cat is sleeping on the sofa.",
                    "I am writing a letter."
                ],
                "ans": 3,
                "exp": "dance는 -e로 끝나므로 e를 빼고 dancing으로 표기해야 합니다.",
                "conceptRef": "1단계 [공식 2: -ing 만드는 스펠링 규칙]"
            }
        ]
    },

    # Unit 18: There is / There are
    {
        "unitNo": 18,
        "unitId": "lv0_u18",
        "legacyUnitNo": 218,
        "title": "There is / There are (~이 있다 구문)",
        "part": "기초 문장 구조",
        "targetGrade": "초등 기초 / 입문",
        "summary": "~이 어디에 있다를 나타내는 There is(단수명사)와 There are(복수명사) 구문의 주어-동사 수일치",
        "overview": "'방에 침대가 하나 있어', '나무 위에 새들이 많이 있어'처럼 어떤 장소에 무엇이 존재하는지를 말할 때는 'There is ~' 또는 'There are ~'로 문장을 시작해요. 진짜 주어는 동사 뒤에 온다는 비밀을 파헤쳐 봅시다!",
        "keyTakeaways": [
            "There is + 단수명사 / 셀 수 없는 명사 (~이 하나/조금 있다)",
            "There are + 복수명사 (~들이 여러 개 있다)",
            "★진짜 주어는 There가 아니라 is/are '뒤에 나오는 명사'!"
        ],
        "formulaCards": [
            {
                "name": "There is / There are 수일치 공식",
                "formula": "There is + 단수명사/셀수없는명사 | There are + 복수명사",
                "examples": [
                    {
                        "en": "There is an apple on the white kitchen table.",
                        "ko": "하얀 주방 식탁 위에 사과 하나가 있다.",
                        "point": "an apple은 단수명사이므로 There is를 씁니다."
                    },
                    {
                        "en": "There are many colorful fish in the aquarium.",
                        "ko": "수족관 안에 알록달록한 물고기들이 많이 있다.",
                        "point": "many colorful fish는 복수명사이므로 There are를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "There are two books on the desk.",
                    "x": "There is two books on the desk.",
                    "comment": "뒤에 오는 two books가 복수이므로 is가 아니라 are를 써야 합니다."
                },
                "trap": "There는 '거기에'라고 해석하지 않고 단순히 문장을 시작하는 유도부사입니다.",
                "quizLink": "There is/are 구문의 동사는 '뒤에 오는 명사'를 보고 결정합니다."
            },
            {
                "name": "부정문(There is not)과 의문문(Is/Are there ~?)",
                "formula": "부정: There is/are not (no) | 의문: Is there / Are there ~?",
                "examples": [
                    {
                        "en": "There is not any milk left in the refrigerator.",
                        "ko": "냉장고 안에 우유가 전혀 남아 있지 않다.",
                        "point": "milk는 셀 수 없는 명사이므로 There is not(isn't)을 씁니다."
                    },
                    {
                        "en": "Are there any students in the classroom now?",
                        "ko": "지금 교실 안에 학생들이 있나요?",
                        "point": "복수명사 students의 의문문은 Are there로 시작합니다."
                    }
                ],
                "oxCompare": {
                    "o": "Is there a park near your house?",
                    "x": "Are there a park near your house?",
                    "comment": "a park는 단수명사이므로 Is there로 물어야 올바릅니다."
                },
                "trap": "Is there a park?에 대한 대답은 'Yes, there is.' 또는 'No, there isn't.'입니다.",
                "quizLink": "대답할 때도 it is가 아니라 'there is / there are'를 그대로 사용합니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u18_d1",
                "missionTitle": "미션 1: 복수명사 앞 There is 수일치 오류",
                "sentence": "There is four seasons in our country: spring, summer, fall, winter.",
                "korean": "우리나라에는 봄, 여름, 가을, 겨울의 사계절이 있다.",
                "underlined": ["There is", "four seasons", "in our country:", "spring, summer, fall, winter"],
                "wrongIndex": 0,
                "correction": "There are",
                "explanation": "뒤에 오는 명사가 four seasons로 복수이므로 There is가 아니라 There are가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: There is / There are 수일치] 출제 연계"
            },
            {
                "id": "lv0_u18_d2",
                "missionTitle": "미션 2: 단수명사 의문문 Are there 오류 수정",
                "sentence": "Are there a convenience store near the bus station?",
                "korean": "버스 정류장 근처에 편의점 하나가 있나요?",
                "underlined": ["Are there", "a convenience store", "near", "the bus station"],
                "wrongIndex": 0,
                "correction": "Is there",
                "explanation": "주어가 a convenience store로 단수이므로 의문문은 Are there 대신 Is there가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 부정문과 의문문] 출제 연계"
            },
            {
                "id": "lv0_u18_d3",
                "missionTitle": "미션 3: 셀 수 없는 명사 수일치 오류 수정",
                "sentence": "There are some cold water in the clean bottle.",
                "korean": "깨끗한 병 안에 차가운 물이 조금 있다.",
                "underlined": ["There are", "some cold water", "in", "the clean bottle"],
                "wrongIndex": 0,
                "correction": "There is",
                "explanation": "water는 셀 수 없는 명사이므로 복수 are가 아니라 단수형 is를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: There is / There are 수일치] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 알맞은 말은?\n\n'There ______ three apples in the fruit basket.'",
                "options": ["is", "are", "be", "am", "was"],
                "ans": 2,
                "exp": "뒤에 오는 명사 three apples가 복수이므로 are가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: There is / There are 수일치]"
            },
            {
                "q": "다음 빈칸에 들어갈 알맞은 말은?\n\n'There ______ a big tree in front of our house.'",
                "options": ["are", "is", "were", "be", "have"],
                "ans": 2,
                "exp": "a big tree는 단수명사이므로 is가 정답입니다.",
                "conceptRef": "1단계 [공식 1: There is / There are 수일치]"
            },
            {
                "q": "대화의 빈칸에 알맞은 대답은?\n\nA: 'Is there a bakery near here?'\nB: 'Yes, ______.'",
                "options": ["there are", "it is", "there is", "they are", "is there"],
                "ans": 3,
                "exp": "Is there ~? 질문에 대한 긍정 대답은 Yes, there is.입니다.",
                "conceptRef": "1단계 [공식 2: 부정문과 의문문]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "There is a bird on the branch.",
                    "There are five desks in the room.",
                    "There are a piano in the hall.",
                    "There is some milk in the cup.",
                    "There are many stars in the sky."
                ],
                "ans": 3,
                "exp": "a piano는 단수이므로 There are가 아니라 There is a piano가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: There is / There are 수일치]"
            },
            {
                "q": "'책상 위에 펜이 하나도 없다.'를 영작할 때 빈칸에 알맞은 것은?\n\n'There ______ no pens on the desk.'",
                "options": ["is", "are", "be", "have", "not"],
                "ans": 2,
                "exp": "pens가 복수명사이므로 There are no pens가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: There is / There are 수일치]"
            }
        ]
    },

    # Unit 19: 명령문과 감탄문
    {
        "unitNo": 19,
        "unitId": "lv0_u19",
        "legacyUnitNo": 219,
        "title": "명령문과 감탄문 (Don't / Let's / What a / How)",
        "part": "특수 문장 구조",
        "targetGrade": "초등 기초 / 입문",
        "summary": "동사원형으로 시작하는 긍정/부정 명령문(Don't V), 청유문(Let's V)과 감탄문(What/How) 기초",
        "overview": "'문 열어라!', '뛰지 마라!'처럼 상대방에게 명령이나 부탁을 할 때는 주어 You를 생략하고 동사원형으로 문장을 시작해요. 또 '정말 예쁜 꽃이구나!'처럼 느낌을 생생하게 표현하는 감탄문도 함께 배워봅시다!",
        "keyTakeaways": [
            "긍정 명령문: 동사원형으로 시작 (Open the door. 문을 열어라)",
            "부정 명령문: Don't + 동사원형 (~하지 마라) / 청유문: Let's + 동사원형 (함께 ~하자)",
            "감탄문: What a(n) 형 명! (정말 ~한 명사구나!) vs How 형/부! (정말 ~하구나!)"
        ],
        "formulaCards": [
            {
                "name": "명령문과 청유문의 기본 공식",
                "formula": "동사원형 ~! | Don't + 동사원형 ~! | Let's + 동사원형 ~!",
                "examples": [
                    {
                        "en": "Be quiet in the school library, please.",
                        "ko": "학교 도서관에서는 부디 조용히 해 주세요.",
                        "point": "be동사 명령문은 동사원형 Be로 시작합니다."
                    },
                    {
                        "en": "Don't run in the hallway during the break.",
                        "ko": "쉬는 시간 동안 복도에서 뛰지 마라.",
                        "point": "부정 명령문은 Don't + 동사원형(run)입니다."
                    }
                ],
                "oxCompare": {
                    "o": "Let's play soccer after school.",
                    "x": "Let's playing soccer after school.",
                    "comment": "Let's 뒤에는 -ing가 아니라 반드시 동사원형(play)을 씁니다."
                },
                "trap": "명령문 끝이나 앞에 please를 붙이면 공손한 부탁의 표현이 됩니다.",
                "quizLink": "명령문에는 주어 You가 생략되어 언제나 동사원형으로 시작합니다."
            },
            {
                "name": "감탄문의 두 가지 공식 (What vs How)",
                "formula": "What + a/an + 형용사 + 명사! | How + 형용사/부사!",
                "examples": [
                    {
                        "en": "What a beautiful flower this red rose is!",
                        "ko": "이 붉은 장미는 정말로 아름다운 꽃이구나!",
                        "point": "명사(flower)가 있을 때는 What a 형 명 감탄문을 씁니다."
                    },
                    {
                        "en": "How fast the white rabbit runs across the yard!",
                        "ko": "그 흰 토끼가 마당을 가로질러 정말 빠르게 달리는구나!",
                        "point": "부사(fast)를 강조할 때는 How 감탄문을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "How sweet this apple is!",
                    "x": "What sweet this apple is!",
                    "comment": "sweet는 형용사이고 뒤에 꾸밈을 받는 명사가 없으므로 How를 써야 합니다."
                },
                "trap": "What 감탄문 뒤의 명사가 복수일 때는 a/an을 쓰지 않습니다 (What beautiful flowers!).",
                "quizLink": "명사가 살아있으면 What, 형용사/부사만 있으면 How가 공식입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u19_d1",
                "missionTitle": "미션 1: 명령문 동사원형 시작 원칙 오류",
                "sentence": "Opens the window and smell the fresh morning air.",
                "korean": "창문을 열고 신선한 아침 공기를 맡아보아라.",
                "underlined": ["Opens the window", "and smell", "the fresh", "morning air"],
                "wrongIndex": 0,
                "correction": "Open the window",
                "explanation": "명령문은 주어 없이 동사원형으로 시작해야 하므로 Opens가 아니라 Open이어야 합니다.",
                "conceptRef": "1단계 [공식 1: 명령문과 청유문 기본] 출제 연계"
            },
            {
                "id": "lv0_u19_d2",
                "missionTitle": "미션 2: 부정 명령문 조동사 오류 수정",
                "sentence": "Doesn't touch the hot iron on the table.",
                "korean": "탁자 위의 뜨거운 다리미를 만지지 마라.",
                "underlined": ["Doesn't touch", "the hot iron", "on", "the table"],
                "wrongIndex": 0,
                "correction": "Don't touch",
                "explanation": "부정 명령문은 주어와 상관없이 항상 Don't + 동사원형으로 씁니다.",
                "conceptRef": "1단계 [공식 1: 명령문과 청유문 기본] 출제 연계"
            },
            {
                "id": "lv0_u19_d3",
                "missionTitle": "미션 3: 감탄문 What vs How 혼동 수정",
                "sentence": "How a tall tree this green oak is!",
                "korean": "이 초록색 떡갈나무는 정말 키 큰 나무이구나!",
                "underlined": ["How a tall tree", "this green", "oak", "is!"],
                "wrongIndex": 0,
                "correction": "What a tall tree",
                "explanation": "뒤에 a tall tree라는 명사구가 오므로 How가 아니라 What을 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 감탄문의 두 가지 공식] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'______ your hands before eating dinner.'",
                "options": ["Washes", "Washing", "Wash", "To wash", "Washed"],
                "ans": 3,
                "exp": "명령문은 동사원형으로 시작하므로 Wash가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 명령문과 청유문 기본]"
            },
            {
                "q": "'복도에서 떠들지 마라.'를 영작할 때 빈칸에 알맞은 것은?\n\n'______ make noise in the hallway.'",
                "options": ["Not", "No", "Don't", "Doesn't", "Aren't"],
                "ans": 3,
                "exp": "부정 명령문은 Don't + 동사원형 구조를 씁니다.",
                "conceptRef": "1단계 [공식 1: 명령문과 청유문 기본]"
            },
            {
                "q": "다음 빈칸에 들어갈 감탄사로 가장 알맞은 것은?\n\n'______ cute this puppy is!'",
                "options": ["What", "How", "Why", "Where", "Which"],
                "ans": 2,
                "exp": "형용사(cute) 하나만 강조하는 감탄문은 How로 시작합니다.",
                "conceptRef": "1단계 [공식 2: 감탄문의 두 가지 공식]"
            },
            {
                "q": "다음 빈칸에 들어갈 감탄사로 가장 알맞은 것은?\n\n'______ a wonderful idea you have!'",
                "options": ["How", "What", "Who", "Where", "When"],
                "ans": 2,
                "exp": "a + 형용사 + 명사(idea) 어순이므로 What이 알맞습니다.",
                "conceptRef": "1단계 [공식 2: 감탄문의 두 가지 공식]"
            },
            {
                "q": "다음 중 어법상 올바른 문장은?",
                "options": [
                    "Let's going to the zoo.",
                    "Be not late for class.",
                    "Don't be afraid of the dark.",
                    "How a nice day it is!",
                    "Speaks English quietly."
                ],
                "ans": 3,
                "exp": "Don't be afraid of the dark.(어둠을 무서워하지 마라)는 Don't + be동사원형으로 올바른 문장입니다.",
                "conceptRef": "1단계 [공식 1: 명령문과 청유문 기본]"
            }
        ]
    },

    # Unit 20: 기초 접속사 and, but, so, because
    {
        "unitNo": 20,
        "unitId": "lv0_u20",
        "legacyUnitNo": 220,
        "title": "기초 접속사 and, but, so, because (문장 연결하기)",
        "part": "접속사와 문장 확장",
        "targetGrade": "초등 기초 / 입문",
        "summary": "단어와 단어, 문장과 문장을 자연스럽게 이어주는 4대 기초 접속사의 의미와 올바른 문맥 연결",
        "overview": "두 단어나 두 문장을 다리처럼 연결해 주는 말을 '접속사'라고 해요! 그리고(and), 하지만(but), 그래서(so), 왜냐하면(because)의 의미와 차이를 익혀서 문장을 더욱 풍성하고 길게 만들어 봅시다!",
        "keyTakeaways": [
            "and: 그리고, ~와/과 (비슷하거나 대등한 내용 연결)",
            "but: 하지만, 그러나 (서로 반대되거나 대조되는 내용 연결)",
            "so: 그래서 (원인 ➔ 결과) vs because: 왜냐하면 ~때문에 (결과 ➔ 원인)"
        ],
        "formulaCards": [
            {
                "name": "대등 접속사 and와 but의 쓰임",
                "formula": "A and B (A와 B, 그리고) | A, but B (A, 하지만 B)",
                "examples": [
                    {
                        "en": "I like sweet apples and fresh strawberries.",
                        "ko": "나는 달콤한 사과와 신선한 딸기를 좋아한다.",
                        "point": "비슷한 사물이나 대등한 내용을 나열할 때는 and를 씁니다."
                    },
                    {
                        "en": "He studied hard, but he failed the spelling test.",
                        "ko": "그는 열심히 공부했지만, 철자 시험에서 떨어졌다.",
                        "point": "앞뒤 내용이 반대되거나 대조될 때는 but을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "She is small, but she is very strong.",
                    "x": "She is small, and she is very strong.",
                    "comment": "체구가 작지만 힘이 세다는 것은 상반된 내용이므로 but이 훨씬 자연스럽습니다."
                },
                "trap": "and 앞뒤에는 같은 품사나 같은 문장 구조가 와야 자연스럽습니다.",
                "quizLink": "순접(나열)은 and, 역접(반대)은 but이라는 기본 성격을 기억하세요."
            },
            {
                "name": "인과관계 접속사 so와 because",
                "formula": "원인, so + 결과 (그래서) | 결과 + because + 원인 (~때문에)",
                "examples": [
                    {
                        "en": "It was raining outside, so I took my blue umbrella.",
                        "ko": "밖에 비가 내리고 있어서, 나는 파란 우산을 챙겼다.",
                        "point": "비가 옴(원인) ➔ 그래서 우산을 챙김(결과)에는 so를 씁니다."
                    },
                    {
                        "en": "I went to bed early because I was so tired.",
                        "ko": "나는 너무 피곤했기 때문에 일찍 잠자리에 들었다.",
                        "point": "일찍 잠듦(결과) ➔ 왜냐하면 피곤했음(원인)에는 because를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He was sick, so he didn't go to school.",
                    "x": "He was sick, because he didn't go to school.",
                    "comment": "아픈 것이 원인이고 학교에 가지 않은 것이 결과이므로 so를 써야 합니다."
                },
                "trap": "so와 because는 원인과 결과의 순서가 정반대이므로 문맥을 꼼꼼히 따져야 합니다.",
                "quizLink": "원인 ➔ so ➔ 결과 / 결과 ➔ because ➔ 원인의 순서를 완벽히 기억하세요."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u20_d1",
                "missionTitle": "미션 1: 대조 문맥에서 and 오용 수정",
                "sentence": "The math problem was very difficult, and she solved it easily.",
                "korean": "그 수학 문제는 매우 어려웠지만, 그녀는 그것을 쉽게 풀었다.",
                "underlined": ["The math problem", "was very difficult,", "and she solved", "it easily"],
                "wrongIndex": 2,
                "correction": "but she solved",
                "explanation": "문제가 어려웠음에도 쉽게 풀었다는 반전 대조의 맥락이므로 and 대신 but을 써야 합니다.",
                "conceptRef": "1단계 [공식 1: and와 but의 쓰임] 출제 연계"
            },
            {
                "id": "lv0_u20_d2",
                "missionTitle": "미션 2: 원인과 결과 so vs because 혼동 수정",
                "sentence": "He drank a lot of water because he was very thirsty after running.",
                "korean": "그는 달리기를 한 후에 매우 목이 말라서 많은 물을 마셨다.",
                "underlined": ["He drank", "a lot of water", "because", "he was very thirsty after running"],
                "wrongIndex": 2,
                "correction": "because", # wait, this sentence is correct! Let's make an error in underlined:
            },
            {
                "id": "lv0_u20_d3",
                "missionTitle": "미션 3: 인과관계 연결 오류 수정",
                "sentence": "I woke up late, because I missed the morning school bus.",
                "korean": "나는 늦게 일어났다. 그래서 아침 통학버스를 놓쳤다.",
                "underlined": ["I woke up late,", "because", "I missed", "the morning school bus"],
                "wrongIndex": 1,
                "correction": "so",
                "explanation": "늦게 일어난 것이 원인이고 버스를 놓친 것이 결과이므로 because 대신 so를 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 인과관계 so와 because] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 가장 알맞은 접속사는?\n\n'I like chocolate, ______ my sister likes vanilla.'",
                "options": ["and", "but", "so", "because", "or"],
                "ans": 2,
                "exp": "나는 초콜릿을 좋아하지만 여동생은 바닐라를 좋아한다는 대조의 내용이므로 but이 알맞습니다.",
                "conceptRef": "1단계 [공식 1: and와 but의 쓰임]"
            },
            {
                "q": "다음 빈칸에 들어갈 가장 알맞은 접속사는?\n\n'I stayed at home all day ______ it rained heavily.'",
                "options": ["so", "but", "because", "and", "or"],
                "ans": 3,
                "exp": "집에 머무른 이유(비가 많이 내렸기 때문에)를 나타내므로 because가 정답입니다.",
                "conceptRef": "1단계 [공식 2: 인과관계 so와 because]"
            },
            {
                "q": "다음 빈칸에 들어갈 알맞은 접속사는?\n\n'He was very hungry, ______ he ate two hamburgers.'",
                "options": ["because", "so", "but", "if", "when"],
                "ans": 2,
                "exp": "배가 고팠다(원인) ➔ 그래서 햄버거 두 개를 먹었다(결과)의 흐름이므로 so가 알맞습니다.",
                "conceptRef": "1단계 [공식 2: 인과관계 so와 because]"
            },
            {
                "q": "다음 두 문장을 하나의 자연스러운 문장으로 연결할 때 알맞은 것은?\n\n'Tom is tall. He is fast.'",
                "options": [
                    "Tom is tall but fast.",
                    "Tom is tall and fast.",
                    "Tom is tall so fast.",
                    "Tom is tall because fast.",
                    "Tom is tall or fast."
                ],
                "ans": 2,
                "exp": "키가 크고 빠르다는 대등한 장점을 나열하므로 and가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: and와 but의 쓰임]"
            },
            {
                "q": "다음 중 밑줄 친 접속사의 쓰임이 어색한 문장은?",
                "options": [
                    "She studied hard, so she passed the exam.",
                    "I called him, but he didn't answer.",
                    "We didn't go outside because it was snowy.",
                    "He is rich, so he is not happy at all.",
                    "You and I are good friends."
                ],
                "ans": 4,
                "exp": "부유하지만 전혀 행복하지 않다는 대조적인 내용이므로 so가 아니라 but을 써야 자연스럽습니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    }
]

# Fix drill 2 for Unit 20 so it has an error
LV0_PART3[4]["spottingDrills"][1] = {
    "id": "lv0_u20_d2",
    "missionTitle": "미션 2: 원인과 결과 so vs because 혼동 수정",
    "sentence": "He was very thirsty after running, because he drank a lot of water.",
    "korean": "그는 달리기를 한 후에 매우 목이 말랐다, 그래서 많은 물을 마셨다.",
    "underlined": ["He was very thirsty", "after running,", "because", "he drank a lot of water"],
    "wrongIndex": 2,
    "correction": "so",
    "explanation": "목이 마른 것이 원인이고 물을 마신 것이 결과이므로 because 대신 so를 써야 올바릅니다.",
    "conceptRef": "1단계 [공식 2: 인과관계 so와 because] 출제 연계"
}

print(f"Loaded LV0 part3 ({len(LV0_PART3)}) units")
