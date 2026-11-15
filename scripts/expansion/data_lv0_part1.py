# -*- coding: utf-8 -*-
"""
Level 0 (초등 기초 품사 & 기본 문법) Units 9 ~ 20.
Complete, high-yield grammar clinic units with formulas, drills, and quizzes.
"""

LV0_EXPANSION_UNITS = [
    # Unit 9: 명사의 복수형 규칙
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

    # Unit 10: 지시대명사 this / that / these / those
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
    },

    # Unit 11: 의문사 1 - Who, What, Which
    {
        "unitNo": 11,
        "unitId": "lv0_u11",
        "legacyUnitNo": 211,
        "title": "의문사 1 - Who, What, Which (누구, 무엇, 어느 것)",
        "part": "의문문의 기초",
        "targetGrade": "초등 기초 / 입문",
        "summary": "사람을 물을 때 Who, 사물이나 정보를 물을 때 What, 선택할 때 Which의 기본 쓰임과 의문문 어순",
        "overview": "궁금한 대상이 사람일 때는 Who, 사물이나 이름·직업일 때는 What, 정해진 것 중 하나를 고를 때는 Which를 문장 맨 앞에 써요. 의문사 뒤에 be동사나 do/does가 오는 어순을 배워봅시다!",
        "keyTakeaways": [
            "Who: 사람을 물을 때 (Who is he? 그는 누구니?)",
            "What: 사물이나 이름, 직업 등을 물을 때 (What is this? 이것은 무엇이니?)",
            "Which: 범위가 정해진 것 중 선택할 때 (Which do you like better? 둘 중 어느 것이 더 좋니?)"
        ],
        "formulaCards": [
            {
                "name": "Who와 What의 기본 의문문",
                "formula": "Who + be동사 / What + be동사 / What do you ~?",
                "examples": [
                    {
                        "en": "Who is that pretty girl in the pink dress?",
                        "ko": "분홍색 드레스를 입은 저 예쁜 소녀는 누구니?",
                        "point": "사람의 신원이나 관계를 물을 때는 Who를 씁니다."
                    },
                    {
                        "en": "What do you want for your birthday dinner?",
                        "ko": "너는 생일 저녁 식사로 무엇을 원하니?",
                        "point": "사물이나 대상을 물을 때는 의문사 What으로 시작합니다."
                    }
                ],
                "oxCompare": {
                    "o": "Who is your English teacher?",
                    "x": "What is your English teacher?",
                    "comment": "선생님은 사람이므로 직업 자체를 묻는 경우가 아니라면 인물을 물을 때 Who를 씁니다."
                },
                "trap": "의문사가 있는 의문문은 Yes나 No로 대답하지 않고 구체적인 사실로 대답합니다.",
                "quizLink": "Who is that? ➔ She is my sister. (Yes/No 대답 불가)"
            },
            {
                "name": "선택 의문사 Which의 쓰임",
                "formula": "Which + 명사 + do/does + S + 동사원형? | Which do you like, A or B?",
                "examples": [
                    {
                        "en": "Which season do you like better, spring or autumn?",
                        "ko": "봄과 가을 중 너는 어느 계절을 더 좋아하니?",
                        "point": "둘 중 하나를 선택할 때는 Which + 명사 어순을 씁니다."
                    },
                    {
                        "en": "Which is your backpack, the black one or the blue one?",
                        "ko": "검은 것과 파란 것 중 어느 것이 너의 배낭이니?",
                        "point": "Which 뒤에 바로 be동사가 와서 선택 대상을 물을 수 있습니다."
                    }
                ],
                "oxCompare": {
                    "o": "Which color do you prefer, red or yellow?",
                    "x": "What color do you prefer, red or yellow?",
                    "comment": "보기(red or yellow)가 명확히 주어졌을 때는 What보다 Which가 훨씬 자연스럽습니다."
                },
                "trap": "선택 대상이 정해져 있을 때는 범위가 좁은 Which를 쓰는 것이 원칙입니다.",
                "quizLink": "A or B 형태의 선택지가 주어지면 Which가 정답일 확률이 매우 높습니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u11_d1",
                "missionTitle": "미션 1: 사람을 묻는 의문사 오류 수정",
                "sentence": "What is that boy running across the playground?",
                "korean": "운동장을 가로질러 달리고 있는 저 소년은 누구니?",
                "underlined": ["What is", "that boy", "running across", "the playground"],
                "wrongIndex": 0,
                "correction": "Who is",
                "explanation": "소년(that boy)은 사람이므로 사물을 묻는 What 대신 인물을 묻는 Who를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: Who와 What의 기본 의문문] 출제 연계"
            },
            {
                "id": "lv0_u11_d2",
                "missionTitle": "미션 2: 선택 상황에서의 의문사 오류 수정",
                "sentence": "Who color do you like better, green or blue?",
                "korean": "초록색과 파란색 중 너는 어느 색깔을 더 좋아하니?",
                "underlined": ["Who color", "do you like", "better", "green or blue"],
                "wrongIndex": 0,
                "correction": "Which color",
                "explanation": "초록색과 파란색 중 선택하는 상황이므로 Who 대신 Which를 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 선택 의문사 Which] 출제 연계"
            },
            {
                "id": "lv0_u11_d3",
                "missionTitle": "미션 3: 의문사 의문문 동사 수일치 오류 수정",
                "sentence": "What are your father's favorite hobby these days?",
                "korean": "요즘 너의 아버지께서 가장 좋아하시는 취미는 무엇이니?",
                "underlined": ["What are", "your father's", "favorite hobby", "these days"],
                "wrongIndex": 0,
                "correction": "What is",
                "explanation": "주어가 단수 명사 favorite hobby이므로 be동사는 are가 아니라 is가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: Who와 What의 기본 의문문] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 대화의 빈칸에 들어갈 가장 알맞은 의문사는?\n\nA: '______ is your best friend in this school?'\nB: 'Minji is my best friend.'",
                "options": ["What", "Who", "Where", "When", "Why"],
                "ans": 2,
                "exp": "대답이 사람(Minji)이므로 사람의 신원을 묻는 Who가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: Who와 What의 기본 의문문]"
            },
            {
                "q": "다음 두 대상 중 하나를 고르는 의문문에 알맞은 의문사는?\n\n'______ bag is yours, the brown one or the black one?'",
                "options": ["Who", "What", "Which", "Where", "How"],
                "ans": 3,
                "exp": "둘 중 어느 것인지를 선택하여 물을 때는 Which를 씁니다.",
                "conceptRef": "1단계 [공식 2: 선택 의문사 Which]"
            },
            {
                "q": "다음 중 질문과 대답의 연결이 어법상 어색한 것은?",
                "options": [
                    "What is this? - It is an apple.",
                    "Who is that woman? - She is my aunt.",
                    "Which animal do you like? - I like dogs.",
                    "What is your name? - Yes, I am Tom.",
                    "Who made this cake? - My mother made it."
                ],
                "ans": 4,
                "exp": "What is your name? 같은 의문사 의문문에는 Yes/No로 대답할 수 없습니다.",
                "conceptRef": "1단계 [공식 1: Who와 What의 기본 의문문]"
            },
            {
                "q": "'너는 상자 안에 무엇을 가지고 있니?'를 바르게 영작한 것은?",
                "options": [
                    "What you have in the box?",
                    "What do you have in the box?",
                    "Who do you have in the box?",
                    "Which have you in the box?",
                    "What does you have in the box?"
                ],
                "ans": 2,
                "exp": "일반동사 have의 의문문은 의문사 What + do + 주어 you + 동사원형 have 어순입니다.",
                "conceptRef": "1단계 [공식 1: Who와 What의 기본 의문문]"
            },
            {
                "q": "다음 빈칸에 들어갈 말이 바르게 짝지어진 것은?\n\n- '______ is your favorite subject, English or math?'\n- '______ is knocking on the front door?'",
                "options": ["What - Who", "Which - Who", "Who - Which", "Which - What", "What - Which"],
                "ans": 2,
                "exp": "첫 번째는 선택이므로 Which, 두 번째는 사람을 묻는 것이므로 Who가 알맞습니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    },

    # Unit 12: 의문사 2 - Where, When
    {
        "unitNo": 12,
        "unitId": "lv0_u12",
        "legacyUnitNo": 212,
        "title": "의문사 2 - Where, When (어디서, 언제)",
        "part": "의문문의 기초",
        "targetGrade": "초등 기초 / 입문",
        "summary": "장소를 물을 때 Where, 시간을 물을 때 When의 쓰임과 be동사/일반동사 의문문 결합",
        "overview": "위치나 장소가 궁금할 때는 Where(어디에), 시간이나 날짜, 요일이 궁금할 때는 When(언제)을 써요. 일상생활에서 가장 많이 쓰는 두 의문사의 형태와 대답을 정복해 봅시다!",
        "keyTakeaways": [
            "Where: 장소나 위치를 물을 때 (Where is my bag? 내 가방 어디 있니?)",
            "When: 시간, 날짜, 요일을 물을 때 (When is your birthday? 네 생일 언제니?)",
            "대답 시 전치사구 활용 (in the room, at 7 o'clock, on Sunday)"
        ],
        "formulaCards": [
            {
                "name": "장소를 묻는 Where 의문문",
                "formula": "Where + be동사 + 주어? | Where + do/does + 주어 + 동사원형?",
                "examples": [
                    {
                        "en": "Where is my English dictionary on the bookshelf?",
                        "ko": "책장에 꽂혀 있던 내 영어 사전은 어디에 있니?",
                        "point": "위치를 물을 때는 Where is + 단수명사 어순을 씁니다."
                    },
                    {
                        "en": "Where do you live with your grandparents?",
                        "ko": "너는 조부모님과 함께 어디에 살고 있니?",
                        "point": "일반동사 live의 위치를 물을 때는 Where do you live 어순입니다."
                    }
                ],
                "oxCompare": {
                    "o": "Where are my clean socks?",
                    "x": "Where is my clean socks?",
                    "comment": "socks는 복수명사이므로 Where 뒤에 is가 아니라 are를 써야 합니다."
                },
                "trap": "Where are you from?은 '너는 어디 출신이니?'를 묻는 고향/국적 질문입니다.",
                "quizLink": "Where 질문에 대한 대답은 주로 in, on, at, under 등의 장소 전치사로 표현합니다."
            },
            {
                "name": "시간을 묻는 When 의문문",
                "formula": "When + be동사 + 주어? | When + do/does + 주어 + 동사원형?",
                "examples": [
                    {
                        "en": "When is the school festival this semester?",
                        "ko": "이번 학기 학교 축제는 언제니?",
                        "point": "행사나 일정의 날짜를 물을 때는 When is를 씁니다."
                    },
                    {
                        "en": "When do you usually wake up in the morning?",
                        "ko": "너는 아침에 보통 몇 시에(언제) 일어나니?",
                        "point": "일반동사 wake up의 동작 시간을 물을 때는 When do you wake up을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "When does the train arrive at the station?",
                    "x": "When do the train arrive at the station?",
                    "comment": "the train은 3인칭 단수이므로 조동사 do가 아니라 does를 써야 합니다."
                },
                "trap": "몇 시인지 정확한 시각을 물을 때는 When 대신 What time을 쓰기도 합니다.",
                "quizLink": "When에 대한 대답에는 on Friday, at 3 p.m., in May 등 시간 표현이 옵니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv0_u12_d1",
                "missionTitle": "미션 1: 장소 의문문 의문사 혼동 수정",
                "sentence": "When is my pet dog sleeping right now?",
                "korean": "내 애완견은 지금 어디에서 자고 있니?",
                "underlined": ["When is", "my pet dog", "sleeping", "right now"],
                "wrongIndex": 0,
                "correction": "Where is",
                "explanation": "개가 자고 있는 장소를 묻는 맥락이므로 시간을 묻는 When 대신 Where를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 장소를 묻는 Where] 출제 연계"
            },
            {
                "id": "lv0_u12_d2",
                "missionTitle": "미션 2: 시간 의문문 3인칭 단수 조동사 오류",
                "sentence": "When do your brother start his homework every day?",
                "korean": "너의 남동생은 매일 언제 숙제를 시작하니?",
                "underlined": ["When do", "your brother", "start his homework", "every day"],
                "wrongIndex": 0,
                "correction": "When does",
                "explanation": "your brother는 3인칭 단수 주어이므로 일반동사 의문문 조동사로 do 대신 does를 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 시간을 묻는 When] 출제 연계"
            },
            {
                "id": "lv0_u12_d3",
                "missionTitle": "미션 3: 복수 주어의 Where be동사 수일치",
                "sentence": "Where is the new glasses on the study desk?",
                "korean": "공부 책상 위에 있는 새 안경은 어디에 있니?",
                "underlined": ["Where is", "the new glasses", "on", "the study desk"],
                "wrongIndex": 0,
                "correction": "Where are",
                "explanation": "glasses는 항상 복수로 쓰이는 명사이므로 be동사는 is가 아니라 are가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 장소를 묻는 Where] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 대화의 빈칸에 알맞은 의문사는?\n\nA: '______ do you go after school?'\nB: 'I go to the library.'",
                "options": ["When", "Who", "Where", "What", "Why"],
                "ans": 3,
                "exp": "대답이 장소(to the library)이므로 장소를 묻는 Where가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 장소를 묻는 Where]"
            },
            {
                "q": "다음 대화의 빈칸에 알맞은 의문사는?\n\nA: '______ does the movie start?'\nB: 'It starts at seven o'clock.'",
                "options": ["Where", "When", "Who", "Which", "What"],
                "ans": 2,
                "exp": "시간(at seven o'clock)을 나타내는 대답이므로 시간을 묻는 When이 알맞습니다.",
                "conceptRef": "1단계 [공식 2: 시간을 묻는 When]"
            },
            {
                "q": "다음 중 어법상 올바른 문장은?",
                "options": [
                    "Where does you live?",
                    "When do the train leave?",
                    "Where are my keys?",
                    "When is they going home?",
                    "Where do she work?"
                ],
                "ans": 3,
                "exp": "my keys는 복수 주어이므로 Where are my keys?가 완벽한 문장입니다. (do you, does the train, are they, does she)",
                "conceptRef": "1단계 [공식 1: 장소를 묻는 Where]"
            },
            {
                "q": "'너의 생일은 언제니?'를 영어로 바르게 옮긴 것은?",
                "options": [
                    "Where is your birthday?",
                    "When is your birthday?",
                    "When are your birthday?",
                    "What is your birthday when?",
                    "Who is your birthday?"
                ],
                "ans": 2,
                "exp": "날짜를 물을 때는 When is your birthday?가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 시간을 묻는 When]"
            },
            {
                "q": "다음 빈칸에 들어갈 말이 차례대로 짝지어진 것은?\n\n- '______ is your cat?' - 'It is under the bed.'\n- '______ is the piano concert?' - 'It is on Sunday.'",
                "options": ["When - Where", "Where - When", "Who - When", "Where - Who", "When - What"],
                "ans": 2,
                "exp": "첫 번째는 장소(under the bed)이므로 Where, 두 번째는 요일(on Sunday)이므로 When이 알맞습니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    }
]
