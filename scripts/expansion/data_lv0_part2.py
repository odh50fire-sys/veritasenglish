# -*- coding: utf-8 -*-
"""
Level 0 (초등 기초 품사 & 기본 문법) Units 9 ~ 20.
Curriculum:
  Unit 9: 명사의 복수형 규칙 (-s, -es, -ies, 불규칙)
  Unit 10: 지시대명사 this / that / these / those
  Unit 11: 의문사 1 - Who, What, Which (누구, 무엇, 어느 것)
  Unit 12: 의문사 2 - Where, When (어디서, 언제)
  Unit 13: 의문사 3 - Why, How (왜, 어떻게/얼마나)
  Unit 14: 조동사 can과 may (능력, 가능, 허가)
  Unit 15: be동사 과거형 was와 were (짝꿍과 과거시제)
  Unit 16: 일반동사 과거형 규칙 변화 (-ed, -d, -ied)
  Unit 17: 현재진행형 (be + V-ing, ~하는 중이다)
  Unit 18: There is / There are (~이 있다 구문)
  Unit 19: 명령문과 감탄문 (Don't / Let's / What a / How)
  Unit 20: 기초 접속사 and, but, so, because (문장 연결하기)
"""

from data_lv0_part1 import LV0_EXPANSION_UNITS as PART1

LV0_PART2 = [
    # Unit 13: 의문사 3 - Why, How
    {
        "unitNo": 13,
        "unitId": "lv0_u13",
        "legacyUnitNo": 213,
        "title": "의문사 3 - Why, How (왜, 어떻게/얼마나)",
        "part": "의문문의 기초",
        "targetGrade": "초등 기초 / 입문",
        "summary": "이유를 묻는 Why(대답 Because)와 방법·상태·정도를 묻는 How(How old/many/much)의 쓰임",
        "overview": "이유가 궁금할 땐 Why로 묻고 대답은 Because(~때문에)로 시작해요. 방법이나 수단, 몸 상태, 나이와 수량을 물을 땐 How를 씁니다. How many, How much 등 유용한 짝꿍 표현도 함께 배워봅시다!",
        "keyTakeaways": [
            "Why: 이유를 물을 때 ➔ 대답은 Because ~ (~때문에)",
            "How: 방법이나 상태를 물을 때 (How are you? 기분/건강 어떠니?)",
            "How + 형용사/부사: 정도를 물을 때 (How old 나이, How many 개수, How much 가격)"
        ],
        "formulaCards": [
            {
                "name": "이유를 묻는 Why와 Because 대답",
                "formula": "Why + be동사/do/does + 주어 ~? ➔ Because + 주어 + 동사 ~",
                "examples": [
                    {
                        "en": "Why are you so happy today in school?",
                        "ko": "너는 오늘 학교에서 왜 그렇게 행복하니?",
                        "point": "상태의 이유를 물을 때는 Why are you 형용사 어순을 씁니다."
                    },
                    {
                        "en": "Because today is my little sister's birthday.",
                        "ko": "왜냐하면 오늘이 내 여동생의 생일이기 때문입니다.",
                        "point": "Why 의문문에 대한 이유를 설명할 때는 Because로 시작합니다."
                    }
                ],
                "oxCompare": {
                    "o": "Why do you study English hard?",
                    "x": "Why you study English hard?",
                    "comment": "일반동사 의문문이므로 주어 you 앞에 조동사 do가 반드시 들어가야 합니다."
                },
                "trap": "Why로 물었을 때 Yes나 No로 대답하면 어색합니다. 반드시 이유를 말해야 합니다.",
                "quizLink": "Why 질문 ➔ Because 답변은 영어 시험의 단골 연결 공식입니다."
            },
            {
                "name": "방법과 정도를 묻는 How 표현들",
                "formula": "How do you ~?(방법) | How old(나이) | How many + 복수명사(개수)",
                "examples": [
                    {
                        "en": "How do you go to school every morning?",
                        "ko": "너는 매일 아침 학교에 어떻게 가니?",
                        "point": "교통수단이나 이동 방법을 물을 때는 How do you go 어순입니다."
                    },
                    {
                        "en": "How many apples do you have in the basket?",
                        "ko": "너는 바구니 안에 몇 개의 사과를 가지고 있니?",
                        "point": "셀 수 있는 명사의 개수를 물을 때는 How many + 복수명사를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "How old is your younger brother?",
                    "x": "How many is your younger brother?",
                    "comment": "나이를 물을 때는 How old를 써야 올바릅니다."
                },
                "trap": "가격을 물을 때는 How many가 아니라 셀 수 없는 개념인 How much를 씁니다.",
                "quizLink": "How old(나이), How tall(키), How many(개수), How much(가격/양)를 구별하세요."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u13_d1",
                "missionTitle": "미션 1: 이유를 묻는 의문사 오류 수정",
                "sentence": "Who are you late for the morning class today?",
                "korean": "너는 오늘 왜 아침 수업에 늦었니?",
                "underlined": ["Who are", "you late", "for the morning class", "today"],
                "wrongIndex": 0,
                "correction": "Why are",
                "explanation": "지각한 이유를 묻고 있으므로 인물을 묻는 Who 대신 이유를 묻는 Why를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 이유를 묻는 Why] 출제 연계"
            },
            {
                "id": "lv0_u13_d2",
                "missionTitle": "미션 2: 개수를 묻는 How 표현 명사 수일치",
                "sentence": "How many pencil do you have in your pencil case?",
                "korean": "너는 필통 안에 몇 자루의 연필을 가지고 있니?",
                "underlined": ["How many pencil", "do you have", "in your", "pencil case"],
                "wrongIndex": 0,
                "correction": "How many pencils",
                "explanation": "How many 뒤에는 셀 수 있는 명사의 복수형이 와야 하므로 pencils가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: How 표현들] 출제 연계"
            },
            {
                "id": "lv0_u13_d3",
                "missionTitle": "미션 3: 가격을 묻는 How 표현 오류 수정",
                "sentence": "How many is this cute teddy bear in the shop?",
                "korean": "가게에 있는 이 귀여운 곰 인형은 얼마인가요?",
                "underlined": ["How many is", "this cute", "teddy bear", "in the shop"],
                "wrongIndex": 0,
                "correction": "How much is",
                "explanation": "물건의 가격을 물을 때는 How many가 아니라 How much를 씁니다.",
                "conceptRef": "1단계 [공식 2: How 표현들] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 대화의 빈칸에 알맞은 의문사는?\n\nA: '______ are you crying?'\nB: 'Because I lost my favorite toy.'",
                "options": ["What", "When", "Why", "Where", "Who"],
                "ans": 3,
                "exp": "대답이 Because로 시작하여 이유를 말하고 있으므로 이유를 묻는 Why가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 이유를 묻는 Why]"
            },
            {
                "q": "상대방의 나이를 물어볼 때 쓰는 가장 알맞은 표현은?",
                "options": ["How tall are you?", "How many are you?", "How old are you?", "How much are you?", "How long are you?"],
                "ans": 3,
                "exp": "나이를 물을 때는 How old are you?를 사용합니다.",
                "conceptRef": "1단계 [공식 2: How 표현들]"
            },
            {
                "q": "다음 빈칸에 공통으로 들어갈 의문사는?\n\n- '______ do you make this delicious cookie?'\n- '______ is the weather today?'",
                "options": ["Why", "How", "What", "Which", "Where"],
                "ans": 2,
                "exp": "방법(만드는 방법)과 날씨의 상태를 물을 때는 How가 알맞습니다.",
                "conceptRef": "1단계 [공식 2: How 표현들]"
            },
            {
                "q": "'너는 형제가 몇 명 있니?'를 영작할 때 빈칸에 알맞은 것은?\n\n'How ______ brothers do you have?'",
                "options": ["much", "many", "old", "often", "long"],
                "ans": 2,
                "exp": "셀 수 있는 명사 brothers의 수를 물으므로 How many가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: How 표현들]"
            },
            {
                "q": "다음 중 질문과 대답의 연결이 어법상 어색한 것은?",
                "options": [
                    "Why is he tired? - Because he ran fast.",
                    "How do you come here? - By bus.",
                    "How much is the cap? - It is ten dollars.",
                    "Why do you like dogs? - Yes, I like them.",
                    "How old is your sister? - She is ten years old."
                ],
                "ans": 4,
                "exp": "Why do you like dogs?는 이유를 묻는 의문문이므로 Yes/No로 대답할 수 없습니다.",
                "conceptRef": "1단계 [공식 1: 이유를 묻는 Why]"
            }
        ]
    },

    # Unit 14: 조동사 can과 may
    {
        "unitNo": 14,
        "unitId": "lv0_u14",
        "legacyUnitNo": 214,
        "title": "조동사 can과 may (능력, 가능, 허가)",
        "part": "조동사의 첫걸음",
        "targetGrade": "초등 기초 / 입문",
        "summary": "~할 수 있다(능력)의 can과 ~해도 좋다(허가)의 may의 의미 및 뒤에 동사원형이 오는 기본 원칙",
        "overview": "동사 앞에 붙어서 '할 수 있다'나 '해도 된다'처럼 특별한 뜻을 더해주는 도우미를 '조동사'라고 해요! 조동사 뒤에는 주어의 인칭에 상관없이 언제나 동사원형이 온다는 절대 법칙을 기억해 봅시다!",
        "keyTakeaways": [
            "can: ~할 수 있다 (능력/가능) / can't: ~할 수 없다 (부정)",
            "may: ~해도 좋다 (허가) / ~일지도 모른다 (추측)",
            "★조동사 뒤에는 무조건 '동사원형' (can plays -> can play)"
        ],
        "formulaCards": [
            {
                "name": "조동사 can의 쓰임과 절대 원칙",
                "formula": "주어 + can + 동사원형 | 부정: cannot / can't + 동사원형",
                "examples": [
                    {
                        "en": "She can swim very fast across the swimming pool.",
                        "ko": "그녀는 수영장을 가로질러 매우 빠르게 수영할 수 있다.",
                        "point": "주어가 3인칭 단수 she여도 can 뒤에는 동사원형 swim을 씁니다."
                    },
                    {
                        "en": "I cannot speak French very well yet.",
                        "ko": "나는 아직 프랑스어를 그리 잘 말할 수는 없다.",
                        "point": "can의 부정은 cannot 또는 줄임말 can't + 동사원형입니다."
                    }
                ],
                "oxCompare": {
                    "o": "He can play the piano well.",
                    "x": "He can plays the piano well.",
                    "comment": "조동사 can 뒤에는 주어와 상관없이 무조건 동사원형(play)을 써야 합니다."
                },
                "trap": "can 뒤에 to부정사(can to swim)나 -ing(can swimming)를 쓰면 틀립니다.",
                "quizLink": "Can you ~? 의문문에 대한 대답은 'Yes, I can.' 또는 'No, I can't.'입니다."
            },
            {
                "name": "조동사 may의 허가 표현",
                "formula": "May I + 동사원형 ~? (제가 ~해도 될까요?) | 주어 + may + 동사원형",
                "examples": [
                    {
                        "en": "May I open the window in this classroom?",
                        "ko": "제가 이 교실의 창문을 열어도 될까요?",
                        "point": "공손하게 허가를 구할 때 May I + 동사원형을 씁니다."
                    },
                    {
                        "en": "You may go home early after finishing your work.",
                        "ko": "너는 일을 마친 후에 집에 일찍 가도 좋다.",
                        "point": "상대방에게 허가를 내줄 때 You may + 동사원형을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "May I use your pencil for a moment?",
                    "x": "May I to use your pencil for a moment?",
                    "comment": "may 뒤에 to부정사를 쓰지 않고 바로 동사원형 use를 씁니다."
                },
                "trap": "May I ~?에 대한 거절은 'No, you may not.' 또는 'No, you can't.'로 답합니다.",
                "quizLink": "May I ~?는 Can I ~?보다 더 정중하고 공손한 허가의 표현입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u14_d1",
                "missionTitle": "미션 1: 조동사 뒤 동사원형 원칙 오류 수정",
                "sentence": "My little brother can rides a bicycle without training wheels.",
                "korean": "내 남동생은 보조바퀴 없이 자전거를 탈 수 있다.",
                "underlined": ["My little brother", "can rides", "a bicycle", "without training wheels"],
                "wrongIndex": 1,
                "correction": "can ride",
                "explanation": "조동사 can 뒤에는 3인칭 단수 주어여도 동사원형인 ride를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 조동사 can의 절대 원칙] 출제 연계"
            },
            {
                "id": "lv0_u14_d2",
                "missionTitle": "미션 2: 조동사 의문문 동사 형태 수정",
                "sentence": "Can you playing the guitar with the school band?",
                "korean": "너는 학교 밴드와 함께 기타를 연주할 수 있니?",
                "underlined": ["Can you", "playing", "the guitar with", "the school band"],
                "wrongIndex": 1,
                "correction": "play",
                "explanation": "조동사 Can 의문문에서 주어 뒤에는 -ing 형태가 아닌 동사원형 play가 와야 합니다.",
                "conceptRef": "1단계 [공식 1: 조동사 can의 절대 원칙] 출제 연계"
            },
            {
                "id": "lv0_u14_d3",
                "missionTitle": "미션 3: 허가 조동사 may 뒤 to부정사 오류",
                "sentence": "May I to ask a question about the science project?",
                "korean": "과학 과제에 대해 질문을 하나 해도 될까요?",
                "underlined": ["May I", "to ask", "a question about", "the science project"],
                "wrongIndex": 1,
                "correction": "ask",
                "explanation": "조동사 May 뒤에는 to ask가 아니라 동사원형 ask가 바로 와야 합니다.",
                "conceptRef": "1단계 [공식 2: 조동사 may의 허가 표현] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'He is only four years old, but he can ______ English.'",
                "options": ["speaks", "speaking", "speak", "to speak", "spoke"],
                "ans": 3,
                "exp": "조동사 can 뒤에는 항상 동사원형이 오므로 speak가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 조동사 can의 절대 원칙]"
            },
            {
                "q": "공손하게 허락을 구할 때 빈칸에 알맞은 조동사는?\n\n'______ I come in and sit down here?'",
                "options": ["Do", "Are", "May", "Am", "Is"],
                "ans": 3,
                "exp": "'제가 ~해도 될까요?'라는 공손한 허락을 구할 때는 May I ~?를 씁니다.",
                "conceptRef": "1단계 [공식 2: 조동사 may의 허가 표현]"
            },
            {
                "q": "다음 중 어법상 올바른 문장은?",
                "options": [
                    "She cans dance very well.",
                    "They can running fast.",
                    "I can make a toy car.",
                    "He can to jump high.",
                    "We cannot plays soccer."
                ],
                "ans": 3,
                "exp": "I can make a toy car는 조동사 can + 동사원형 make로 완벽합니다. (can dance, can run, can jump, cannot play)",
                "conceptRef": "1단계 [공식 1: 조동사 can의 절대 원칙]"
            },
            {
                "q": "대화의 빈칸에 알맞은 대답은?\n\nA: 'Can you swim across the river?'\nB: 'No, ______.'",
                "options": ["I do", "I don't", "I cannot", "I am not", "I may not"],
                "ans": 3,
                "exp": "Can you ~? 질문에 대한 부정의 대답은 No, I cannot(can't)입니다.",
                "conceptRef": "1단계 [공식 1: 조동사 can의 절대 원칙]"
            },
            {
                "q": "'너는 지금 이 만화책을 읽어도 좋다.'를 바르게 영작한 것은?",
                "options": [
                    "You may read this comic book now.",
                    "You may to read this comic book now.",
                    "You may reading this comic book now.",
                    "You can reads this comic book now.",
                    "You may are read this comic book now."
                ],
                "ans": 1,
                "exp": "허가를 나타내는 조동사 may 뒤에 동사원형 read가 온 문장이 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 조동사 may의 허가 표현]"
            }
        ]
    },

    # Unit 15: be동사 과거형 was와 were
    {
        "unitNo": 15,
        "unitId": "lv0_u15",
        "legacyUnitNo": 215,
        "title": "be동사 과거형 was와 were (짝꿍과 과거시제)",
        "part": "과거시제의 기초",
        "targetGrade": "초등 기초 / 입문",
        "summary": "과거의 상태를 나타내는 am/is의 과거형 was, are의 과거형 were의 인칭별 짝꿍과 부정문/의문문",
        "overview": "어제, 지난주처럼 이미 지난 과거의 일이나 상태를 말할 때는 be동사의 과거형을 써요. am과 is는 was로 변신! are는 were로 변신합니다. 과거를 나타내는 짝꿍 시간 표현들과 함께 마스터해 봅시다!",
        "keyTakeaways": [
            "am / is ➔ was (I was, He was, She was, It was)",
            "are ➔ were (You were, We were, They were)",
            "부정문: was not (wasn't) / were not (weren't) | 과거 표현: yesterday, last night, then"
        ],
        "formulaCards": [
            {
                "name": "be동사 과거형 짝꿍 공식",
                "formula": "I / He / She / It ➔ was | You / We / They ➔ were",
                "examples": [
                    {
                        "en": "I was very tired after the soccer match yesterday.",
                        "ko": "나는 어제 축구 시합이 끝난 후에 매우 피곤했다.",
                        "point": "1인칭 I의 과거형은 was이며, 어제를 뜻하는 yesterday와 함께 쓰입니다."
                    },
                    {
                        "en": "They were at the amusement park last Saturday.",
                        "ko": "그들은 지난주 토요일에 놀이공원에 있었다.",
                        "point": "복수 주어 They의 과거형은 were입니다."
                    }
                ],
                "oxCompare": {
                    "o": "He was a cute baby five years ago.",
                    "x": "He were a cute baby five years ago.",
                    "comment": "3인칭 단수 주어 He의 과거형은 were가 아니라 was입니다."
                },
                "trap": "You는 한 사람(너)이든 여러 사람(너희들)이든 무조건 were를 씁니다.",
                "quizLink": "yesterday, ago, last night 같은 단어가 보이면 be동사를 was/were로 바꿔야 합니다."
            },
            {
                "name": "be동사 과거형의 부정문과 의문문",
                "formula": "부정: 주어 + was/were + not | 의문: Was/Were + 주어 ~?",
                "examples": [
                    {
                        "en": "The weather was not cold during our family trip.",
                        "ko": "가족 여행 동안 날씨는 춥지 않았다.",
                        "point": "was 뒤에 not을 붙여 과거의 부정(~가 아니었다)을 만듭니다."
                    },
                    {
                        "en": "Were you busy with your science homework yesterday?",
                        "ko": "너는 어제 과학 숙제로 바빴니?",
                        "point": "과거 의문문은 Were you ~? 어순으로 시작합니다."
                    }
                ],
                "oxCompare": {
                    "o": "We were not late for school this morning.",
                    "x": "We did not be late for school this morning.",
                    "comment": "be동사 과거형의 부정은 did not이 아니라 were not(weren't)입니다."
                },
                "trap": "Were you ~?로 물었을 때 긍정 대답은 'Yes, I was.'이고 부정은 'No, I wasn't.'입니다.",
                "quizLink": "질문은 Were you였지만 대답하는 주어가 I이므로 was로 바뀌는 점에 주의하세요."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u15_d1",
                "missionTitle": "미션 1: 과거 be동사 단수 주어 수일치",
                "sentence": "My sister were sick in bed all day yesterday.",
                "korean": "내 여동생은 어제 하루 종일 아파서 누워 있었다.",
                "underlined": ["My sister were", "sick in bed", "all day", "yesterday"],
                "wrongIndex": 0,
                "correction": "My sister was",
                "explanation": "주어 My sister는 3인칭 단수이므로 과거형 be동사는 were가 아니라 was여야 합니다.",
                "conceptRef": "1단계 [공식 1: be동사 과거형 짝꿍] 출제 연계"
            },
            {
                "id": "lv0_u15_d2",
                "missionTitle": "미션 2: 과거 be동사 복수 주어 수일치",
                "sentence": "We was very happy to see our old friends last week.",
                "korean": "우리는 지난주에 옛 친구들을 만나서 매우 행복했다.",
                "underlined": ["We was", "very happy", "to see our old friends", "last week"],
                "wrongIndex": 0,
                "correction": "We were",
                "explanation": "복수 주어 We에 맞는 be동사 과거형은 was가 아니라 were입니다.",
                "conceptRef": "1단계 [공식 1: be동사 과거형 짝꿍] 출제 연계"
            },
            {
                "id": "lv0_u15_d3",
                "missionTitle": "미션 3: 과거 시제 부사와 현재 be동사 오류",
                "sentence": "Tom and Jerry is good friends when they were young.",
                "korean": "톰과 제리는 그들이 어렸을 때 좋은 친구들이었다.",
                "underlined": ["Tom and Jerry is", "good friends", "when they", "were young"],
                "wrongIndex": 0,
                "correction": "Tom and Jerry were",
                "explanation": "과거를 나타내는 when they were young 절이 있으므로 주절의 be동사도 과거 복수형인 were가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: be동사 과거형 짝꿍] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 알맞은 be동사는?\n\n'I ______ in Seoul three days ago.'",
                "options": ["am", "are", "is", "was", "were"],
                "ans": 4,
                "exp": "과거 부사 ago가 있고 주어가 1인칭 I이므로 was가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: be동사 과거형 짝꿍]"
            },
            {
                "q": "다음 빈칸에 들어갈 알맞은 be동사는?\n\n'They ______ not at home last night.'",
                "options": ["was", "were", "is", "are", "be"],
                "ans": 2,
                "exp": "주어가 복수 They이고 last night이 있으므로 were가 정답입니다.",
                "conceptRef": "1단계 [공식 1: be동사 과거형 짝꿍]"
            },
            {
                "q": "다음 대화의 빈칸에 알맞은 대답은?\n\nA: 'Were you at the library yesterday?'\nB: 'Yes, ______.'",
                "options": ["I were", "you were", "I was", "you was", "I am"],
                "ans": 3,
                "exp": "Were you ~?로 물었을 때 대답은 Yes, I was.입니다.",
                "conceptRef": "1단계 [공식 2: be동사 과거형 부정문과 의문문]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어법상 어색한 것은?",
                "options": [
                    "It was sunny yesterday.",
                    "You were kind to me.",
                    "She were angry at her brother.",
                    "We were excited about the game.",
                    "The dog was under the chair."
                ],
                "ans": 3,
                "exp": "She는 3인칭 단수이므로 were가 아니라 was angry여야 합니다.",
                "conceptRef": "1단계 [공식 1: be동사 과거형 짝꿍]"
            },
            {
                "q": "'어제 그 영화는 재미있었니?'를 바르게 영작한 것은?",
                "options": [
                    "Was the movie interesting yesterday?",
                    "Were the movie interesting yesterday?",
                    "Is the movie interesting yesterday?",
                    "Did the movie interesting yesterday?",
                    "The movie was interesting yesterday?"
                ],
                "ans": 1,
                "exp": "단수 주어 the movie의 과거 의문문은 Was the movie ~?입니다.",
                "conceptRef": "1단계 [공식 2: be동사 과거형 부정문과 의문문]"
            }
        ]
    }
]

print(f"Loaded LV0 part1 ({len(PART1)}) + part2 ({len(LV0_PART2)}) = {len(PART1) + len(LV0_PART2)} units")
