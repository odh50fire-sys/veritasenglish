# -*- coding: utf-8 -*-
"""
Level 0 (초등 기초 품사 & 기본 문법) Units 9 ~ 20 expansion data generator.
"""

LV0_UNITS_9_TO_20 = [
    # Unit 9
    {
        "unitNo": 9,
        "unitId": "lv0_u9",
        "legacyUnitNo": 209,
        "title": "명사의 복수형 규칙 (-s, -es, -ies와 불규칙)",
        "part": "명사의 확장",
        "targetGrade": "초등 기초 / 입문",
        "summary": "하나가 아닌 둘 이상일 때 명사 뒤에 -s, -es를 붙이는 규칙과 자음+y의 -ies, 불규칙 변화",
        "overview": "명사가 둘 이상(복수)일 때는 단어 뒤에 -s나 -es를 붙여요. 끝나는 알파벳 소리에 따라 규칙이 달라지며, man/men이나 foot/feet처럼 형태가 완전히 바뀌는 특별한 불규칙 명사들도 함께 배워봅시다!",
        "keyTakeaways": [
            "대부분의 명사 뒤에는 -s (books, desks, apples)",
            "-s, -x, -ch, -sh로 끝나는 명사 뒤에는 -es (boxes, buses, dishes, watches)",
            "자음 + y로 끝나는 명사는 y를 i로 고치고 -es (babies, cities) / 불규칙 (child -> children, tooth -> teeth)"
        ],
        "formulaCards": [
            {
                "name": "복수형 규칙 변화 공식 (-s, -es, -ies)",
                "formula": "대부분 + -s | -s/-x/-ch/-sh + -es | 자음+y ➔ -ies",
                "examples": [
                    {
                        "en": "The little boy has two colorful boxes on the desk.",
                        "ko": "그 어린 소년은 책상 위에 두 개의 알록달록한 상자를 가지고 있다.",
                        "point": "-x로 끝나는 box 뒤에는 -es를 붙여 boxes가 됩니다."
                    },
                    {
                        "en": "Three cute babies are sleeping in the warm room.",
                        "ko": "세 명의 귀여운 아기들이 따뜻한 방에서 자고 있다.",
                        "point": "자음+y(baby)로 끝나는 명사는 y를 i로 고치고 -es를 붙입니다."
                    }
                ],
                "oxCompare": {
                    "o": "He washed three white dishes.",
                    "x": "He washed three white dishs.",
                    "comment": "-sh로 끝나는 dish 뒤에는 -s가 아니라 -es를 붙여야 올바릅니다."
                },
                "trap": "모음+y인 toy, boy는 y를 고치지 않고 그냥 -s만 붙입니다 (toys, boys).",
                "quizLink": "box, watch처럼 발음이 강한 소리로 끝나면 -es를 붙여 발음을 부드럽게 만듭니다."
            },
            {
                "name": "특별한 불규칙 복수형 명사",
                "formula": "man ➔ men | child ➔ children | tooth ➔ teeth | foot ➔ feet",
                "examples": [
                    {
                        "en": "Many children are playing soccer in the green park.",
                        "ko": "많은 아이들이 초록빛 공원에서 축구를 하고 있다.",
                        "point": "child의 복수형은 childs가 아니라 children입니다."
                    },
                    {
                        "en": "You must brush your teeth every morning and night.",
                        "ko": "너는 매일 아침과 밤에 이를 닦아야 한다.",
                        "point": "tooth의 복수형은 teeth입니다."
                    }
                ],
                "oxCompare": {
                    "o": "Two men are waiting outside the door.",
                    "x": "Two mans are waiting outside the door.",
                    "comment": "man의 복수형은 -s를 붙이지 않고 모음이 바뀐 men입니다."
                },
                "trap": "sheep, deer, fish는 단수와 복수의 형태가 똑같습니다 (one sheep, two sheep).",
                "quizLink": "불규칙 복수형은 -s가 붙지 않아도 이미 여러 개를 의미하므로 복수 취급합니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u9_d1",
                "missionTitle": "미션 1: 명사의 규칙 복수형 어미 식별",
                "sentence": "My uncle owns two big bus and three small cars.",
                "korean": "우리 삼촌은 두 대의 큰 버스와 세 대의 작은 승용차를 가지고 계신다.",
                "underlined": ["My uncle", "owns", "two big bus", "three small cars"],
                "wrongIndex": 2,
                "correction": "two big buses",
                "explanation": "-s로 끝나는 명사 bus의 복수형은 -es를 붙인 buses가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 복수형 규칙 변화] 출제 연계"
            },
            {
                "id": "lv0_u9_d2",
                "missionTitle": "미션 2: 자음+y 복수형 어형 변화 오류 수정",
                "sentence": "She took care of two small babys during the busy afternoon.",
                "korean": "그녀는 바쁜 오후 동안 두 명의 어린 아기들을 돌보았다.",
                "underlined": ["She took care of", "two small babys", "during", "the busy afternoon"],
                "wrongIndex": 1,
                "correction": "two small babies",
                "explanation": "자음+y로 끝나는 baby는 y를 i로 고치고 -es를 붙여 babies로 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 복수형 규칙 변화] 출제 연계"
            },
            {
                "id": "lv0_u9_d3",
                "missionTitle": "미션 3: 불규칙 복수형 명사 형태 수정",
                "sentence": "The five childs are singing English songs together on the stage.",
                "korean": "그 다섯 명의 아이들은 무대 위에서 함께 영어 노래를 부르고 있다.",
                "underlined": ["The five childs", "are singing", "English songs together", "on the stage"],
                "wrongIndex": 0,
                "correction": "The five children",
                "explanation": "child의 올바른 복수형은 불규칙 형태인 children입니다.",
                "conceptRef": "1단계 [공식 2: 특별한 불규칙 복수형] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 중 명사의 복수형 연결이 어법상 올바른 것은?",
                "options": ["box - boxs", "city - citys", "watch - watches", "man - mans", "dish - dishs"],
                "ans": 3,
                "exp": "-ch로 끝나는 watch의 복수형은 watches가 올바릅니다. (boxes, cities, men, dishes)",
                "conceptRef": "1단계 [공식 1: 복수형 규칙 변화]"
            },
            {
                "q": "다음 괄호 안에 들어갈 단어로 가장 알맞은 것은?\n\n'Look at those two ______ in the library.'",
                "options": ["womans", "woman", "women", "womens", "womanses"],
                "ans": 3,
                "exp": "two 뒤에는 복수명사가 와야 하며, woman의 올바른 불규칙 복수형은 women입니다.",
                "conceptRef": "1단계 [공식 2: 특별한 불규칙 복수형]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 알맞은 복수형은?\n\n'He brushed his ______ before going to sleep.'",
                "options": ["tooth", "teeths", "tooths", "teeth", "toothes"],
                "ans": 4,
                "exp": "tooth의 복수형은 teeth입니다.",
                "conceptRef": "1단계 [공식 2: 특별한 불규칙 복수형]"
            },
            {
                "q": "다음 중 복수형 규칙 변화가 잘못된 단어는?",
                "options": ["tomatoes", "babies", "toys", "potatos", "dishes"],
                "ans": 4,
                "exp": "potato의 복수형은 -es를 붙여 potatoes로 표기해야 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 복수형 규칙 변화]"
            },
            {
                "q": "다음 밑줄 친 부분 중 어법상 어색한 것은?\n\n'There are many (1)<u>people</u> and (2)<u>sheeps</u> on (3)<u>the</u> big (4)<u>green</u> (5)<u>farm</u>.'",
                "options": ["people", "sheeps", "the", "green", "farm"],
                "ans": 2,
                "exp": "sheep은 단수와 복수의 형태가 같은 단수·복수 동형 명사이므로 sheeps가 아니라 sheep이어야 합니다.",
                "conceptRef": "1단계 [공식 2: 특별한 불규칙 복수형]"
            }
        ]
    },
    # Unit 10
    {
        "unitNo": 10,
        "unitId": "lv0_u10",
        "legacyUnitNo": 210,
        "title": "지시대명사 this / that / these / those",
        "part": "대명사의 기초",
        "targetGrade": "초등 기초 / 입문",
        "summary": "가까이 있는 것(this/these)과 멀리 있는 것(that/those)을 가리키는 지시대명사의 단수와 복수 쓰임",
        "overview": "손으로 대상을 콕 집어 가리킬 때 쓰는 말을 '지시대명사'라고 해요. 말하는 사람과 가까운 하나는 this, 여러 개는 these! 멀리 있는 하나는 that, 여러 개는 those를 씁니다. 거리와 수에 맞게 쓰는 법을 배워봅시다!",
        "keyTakeaways": [
            "가까운 대상: 단수 this (이것) / 복수 these (이것들)",
            "멀리 있는 대상: 단수 that (저것/그것) / 복수 those (저것들/그것들)",
            "this/that + 단수동사(is) vs these/those + 복수동사(are)"
        ],
        "formulaCards": [
            {
                "name": "지시대명사의 거리와 수 규칙",
                "formula": "가까움: this(단수) / these(복수) | 멂: that(단수) / those(복수)",
                "examples": [
                    {
                        "en": "This is my new bicycle near the garden fence.",
                        "ko": "이것은 정원 울타리 근처에 있는 내 새 자전거이다.",
                        "point": "가까이 있는 단수 대상에는 This is를 씁니다."
                    },
                    {
                        "en": "Those are bright stars shining in the dark night sky.",
                        "ko": "저것들은 어두운 밤하늘에서 빛나고 있는 밝은 별들이다.",
                        "point": "멀리 있는 복수 대상에는 Those are를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "These are my favorite storybooks.",
                    "x": "This are my favorite storybooks.",
                    "comment": "복수명사 storybooks 앞에는 This가 아니라 복수형 These를 써야 합니다."
                },
                "trap": "this book처럼 뒤에 명사가 바로 붙으면 지시대명사가 아니라 지시형용사로 쓰인 것입니다.",
                "quizLink": "this/that은 is와 짝꿍, these/those는 are와 짝꿍입니다."
            },
            {
                "name": "전화 통화 및 사람 소개에서의 this / that",
                "formula": "전화: This is ~(저는 ~예요) / Is that ~(그쪽은 ~인가요?)",
                "examples": [
                    {
                        "en": "Hello, this is Minho speaking on the telephone.",
                        "ko": "여보세요, 전화하고 있는 저는 민호입니다.",
                        "point": "전화 통화에서 자신을 밝힐 때는 I am이 아니라 This is를 씁니다."
                    },
                    {
                        "en": "Who is that boy standing over there across the road?",
                        "ko": "길 건너 저편에 서 있는 저 소년은 누구니?",
                        "point": "저만치 멀리 서 있는 대상에게는 that boy를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "Mom, this is my best friend Jenny.",
                    "x": "Mom, she is my best friend Jenny.",
                    "comment": "옆에 있는 친구를 소개할 때는 'This is ~' 표현을 씁니다."
                },
                "trap": "전화 통화에서 상대방을 물을 때는 Are you ~? 대신 Is that ~?를 씁니다.",
                "quizLink": "거리 개념뿐만 아니라 대화 속 관용적 표현에서도 this와 that이 널리 쓰입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u10_d1",
                "missionTitle": "미션 1: 지시대명사 복수형 수일치 오류 수정",
                "sentence": "This are my favorite flowers from the garden.",
                "korean": "이것들은 정원에서 가져온 내가 가장 좋아하는 꽃들이다.",
                "underlined": ["This are", "my favorite", "flowers from", "the garden"],
                "wrongIndex": 0,
                "correction": "These are",
                "explanation": "복수동사 are와 복수명사 flowers 앞에는 This가 아니라 복수 지시대명사 These를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 지시대명사의 거리와 수] 출제 연계"
            },
            {
                "id": "lv0_u10_d2",
                "missionTitle": "미션 2: 먼 거리 복수 지시대명사 수일치",
                "sentence": "Look at that tall trees on the hill.",
                "korean": "언덕 위에 있는 저 키 큰 나무들을 보아라.",
                "underlined": ["Look at", "that tall trees", "on", "the hill"],
                "wrongIndex": 1,
                "correction": "those tall trees",
                "explanation": "trees는 복수명사이므로 단수 that 대신 복수 지시형용사 those를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 지시대명사의 거리와 수] 출제 연계"
            },
            {
                "id": "lv0_u10_d3",
                "missionTitle": "미션 3: 단수 지시대명사와 동사 일치",
                "sentence": "Those is the red pencil box on the table.",
                "korean": "저것은 탁자 위에 있는 빨간 필통이다.",
                "underlined": ["Those is", "the red", "pencil box", "on the table"],
                "wrongIndex": 0,
                "correction": "That is",
                "explanation": "단수 명사 pencil box와 단수 동사 is에 맞추어 Those 대신 That을 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 지시대명사의 거리와 수] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'______ are my new shoes.'",
                "options": ["This", "That", "These", "It", "She"],
                "ans": 3,
                "exp": "복수동사 are와 복수명사 shoes 앞에는 복수 지시대명사 These가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 지시대명사의 거리와 수]"
            },
            {
                "q": "전화 통화에서 자신을 소개할 때 쓰는 올바른 표현은?\n\n'Hello, ______ is Tom speaking.'",
                "options": ["I", "me", "this", "that", "it"],
                "ans": 3,
                "exp": "전화상으로 '저는 ~입니다'라고 할 때는 관용적으로 'This is ~'를 사용합니다.",
                "conceptRef": "1단계 [공식 2: 전화 통화 및 사람 소개]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "This is a cute puppy.",
                    "That is an old building.",
                    "These are fresh apples.",
                    "Those is flying birds.",
                    "That car is very fast."
                ],
                "ans": 4,
                "exp": "flying birds는 복수이므로 'Those is'가 아니라 'Those are'로 써야 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 지시대명사의 거리와 수]"
            },
            {
                "q": "다음 괄호 안의 말이 차례대로 바르게 짝지어진 것은?\n\n'(This / These) cap is mine, and (that / those) socks are yours.'",
                "options": ["This - that", "This - those", "These - that", "These - those", "This - this"],
                "ans": 2,
                "exp": "단수 cap 앞에는 This, 복수 socks 앞에는 those가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 지시대명사의 거리와 수]"
            },
            {
                "q": "'저쪽에 있는 저 소년은 누구니?'를 영작할 때 빈칸에 알맞은 것은?\n\n'Who is ______ boy over there?'",
                "options": ["these", "this", "that", "those", "they"],
                "ans": 3,
                "exp": "저쪽에 있는(over there) 단수 명사 boy 앞에는 that이 와야 합니다.",
                "conceptRef": "1단계 [공식 1: 지시대명사의 거리와 수]"
            }
        ]
    }
]

print("expansion_lv0 part 1 loaded")
