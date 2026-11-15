# -*- coding: utf-8 -*-
"""
Builder script for Level 0: 초등 기초 품사 & 기본 문법 (8 units).
Contains 16 formula cards with clean English examples,
24 spotting drills (3 per unit),
and 40 practice quiz questions (5 per unit).
"""

LEVEL_0_DATA = {
    "level": 0,
    "levelCode": "lv0",
    "levelName": "초등 기초 문법",
    "category": "초등 기초",
    "targetGrade": "초등 고학년 및 입문",
    "badge": "Lv.0 초등 기초",
    "color": "sky",
    "themeColor": "#0284c7",
    "desc": "영문법의 첫걸음! 명사·대명사·be동사·일반동사 기초와 기본 문장 구조를 완벽 정복 (8단원)",
    "units": [
        # -------------------------------------------------------------
        # UNIT 1: 명사와 관사 (a/an/the와 셀 수 있는 명사)
        # -------------------------------------------------------------
        {
            "unitNo": 1,
            "unitId": "lv0_u1",
            "legacyUnitNo": 201,
            "title": "명사와 관사 (a/an/the와 셀 수 있는 명사)",
            "part": "품사의 기초",
            "targetGrade": "초등 기초 / 입문",
            "summary": "사람과 사물의 이름인 명사의 개념과 셀 수 있는 명사 앞 a/an/the의 올바른 쓰임",
            "overview": "우리 주변의 모든 사람, 동물, 사물, 장소에는 고유한 이름이 있어요. 이것을 문법에서는 '명사(Noun)'라고 불러요! 하나뿐인 명사 앞에는 a나 an을 붙이고, 특정한 대상을 가리킬 때는 the를 붙여요. 첫소리 발음에 따라 a와 an을 고르는 재미있는 규칙을 배워봐요!",
            "keyTakeaways": [
                "자음 소리로 시작하는 명사 앞에는 a (a book, a cat, a dog)",
                "모음(a, e, i, o, u) 소리로 시작하는 명사 앞에는 an (an apple, an egg, an umbrella)",
                "대화하는 너와 내가 서로 이미 알고 있거나 세상에 하나뿐인 대상 앞에는 the (the sun, the teacher)"
            ],
            "formulaCards": [
                {
                    "name": "셀 수 있는 명사와 관사 a / an 규칙",
                    "desc": "하나의 사물을 나타낼 때 명사 앞에 붙이는 관사입니다. 글자가 아닌 첫소리 발음이 모음(아/에/이/오/우)이면 an, 자음이면 a를 씁니다.",
                    "formula": "a + 자음 소리 명사 (a book) / an + 모음 소리 명사 (an apple)",
                    "rules": [
                        {"title": "자음 소리 앞", "detail": "a book, a pencil, a desk, a student, a banana"},
                        {"title": "모음 소리 앞", "detail": "an apple, an elephant, an orange, an umbrella, an ice cream"},
                        {"title": "발음 주의 단어", "detail": "an hour (h가 묵음이라 모음 소리 [아워]) / a university (유 발음은 자음 취급)"}
                    ],
                    "examples": [
                        {"en": "I have a cute puppy and an orange cat.", "ko": "나는 귀여운 강아지 한 마리와 주황색 고양이 한 마리를 기르고 있다.", "point": "puppy(자음 소리) 앞에는 a, orange(모음 소리) 앞에는 an"},
                        {"en": "She eats an apple and a banana every morning.", "ko": "그녀는 매일 아침 사과 한 개와 바나나 한 개를 먹는다.", "point": "apple 앞에는 an, banana 앞에는 a"}
                    ],
                    "oxCompare": [
                        {"correct": "She bought an umbrella yesterday.", "wrong": "She bought a umbrella yesterday.", "reason": "umbrella는 모음 소리 [어]로 시작하므로 an을 써야 합니다."},
                        {"correct": "He needs an hour to finish the homework.", "wrong": "He needs a hour to finish the homework.", "reason": "hour의 첫 글자 h는 묵음이어서 모음 소리 [아워]로 발음되므로 an을 씁니다."}
                    ],
                    "trap": "알파벳 글자가 아니라 '첫소리 발음'을 듣고 a와 an을 결정해야 해요! a hour (X) -> an hour (O)",
                    "quizLink": "3단계 퀴즈 직결"
                },
                {
                    "name": "특정한 대상을 가리키는 the의 마법",
                    "desc": "이미 앞에서 말했거나, 듣는 사람과 말하는 사람이 서로 무엇인지 알고 있는 특정한 대상, 혹은 세상에 단 하나뿐인 것 앞에는 the를 씁니다.",
                    "formula": "the + 특정한 대상 / 세상에 하나뿐인 유일한 명사",
                    "rules": [
                        {"title": "앞에서 말한 명사 재언급", "detail": "I saw a dog. The dog was very friendly."},
                        {"title": "세상에 유일한 것", "detail": "the sun (태양), the moon (달), the sky (하늘), the earth (지구)"},
                        {"title": "서로 알고 있는 것", "detail": "Open the door, please. (어떤 문인지 알고 있음)"}
                    ],
                    "examples": [
                        {"en": "Look at the moon shining brightly in the night sky.", "ko": "밤하늘에 밝게 빛나고 있는 저 달을 보아라.", "point": "세상에 하나뿐인 moon과 sky 앞에는 the 필수"},
                        {"en": "I met a friendly boy, and the boy helped me find my way.", "ko": "나는 친절한 한 소년을 만났고, 그 소년은 내가 길을 찾는 것을 도와주었다.", "point": "앞에 나온 a boy를 다시 가리키므로 the boy 사용"}
                    ],
                    "oxCompare": [
                        {"correct": "The sun rises in the east.", "wrong": "A sun rises in the east.", "reason": "태양은 세상에 하나뿐인 유일한 천체이므로 a 대신 the를 씁니다."},
                        {"correct": "Please close the window.", "wrong": "Please close an window.", "reason": "서로 알고 있는 특정한 창문을 가리키므로 the를 써야 합니다."}
                    ],
                    "trap": "식사(breakfast, lunch, dinner)나 운동 경기(soccer, baseball) 이름 앞에는 the나 a를 붙이지 않아요! play the soccer (X) -> play soccer (O)",
                    "quizLink": "3단계 퀴즈 직결"
                }
            ],
            "spottingDrills": [
                {
                    "id": "drill_1",
                    "sentence": "My little brother wants to buy a umbrella because it is raining outside.",
                    "underlined": ["wants", "to buy", "a umbrella", "raining"],
                    "wrongIndex": 2,
                    "correction": "an umbrella",
                    "explanation": "umbrella는 모음 소리로 시작하는 명사이므로 부정관사 a 대신 an을 써야 합니다.",
                    "conceptRef": "1단계 [공식 1: 셀 수 있는 명사와 관사 a / an 규칙] 출제 연계",
                    "korean": "나의 남동생은 밖에 비가 오고 있기 때문에 우산 하나를 사고 싶어 한다."
                },
                {
                    "id": "drill_2",
                    "sentence": "Every morning, the sun rises and a moon disappears from the blue sky.",
                    "underlined": ["the sun", "rises", "a moon", "disappears"],
                    "wrongIndex": 2,
                    "correction": "the moon",
                    "explanation": "달(moon)은 하늘에 하나뿐인 유일한 천체이므로 a moon이 아니라 the moon으로 표현해야 합니다.",
                    "conceptRef": "1단계 [공식 2: 특정한 대상을 가리키는 the의 마법] 출제 연계",
                    "korean": "매일 아침, 태양이 떠오르고 달은 푸른 하늘에서 사라진다."
                },
                {
                    "id": "drill_3",
                    "sentence": "She waited for a hour at the bus stop, but the bus did not come.",
                    "underlined": ["waited for", "a hour", "at the bus", "did not come"],
                    "wrongIndex": 1,
                    "correction": "an hour",
                    "explanation": "hour의 첫 글자 h는 소리가 나지 않는 묵음이므로 모음 소리로 시작하여 a hour가 아닌 an hour로 고쳐야 합니다.",
                    "conceptRef": "1단계 [공식 1: 셀 수 있는 명사와 관사 a / an 규칙] 출제 연계",
                    "korean": "그녀는 버스 정류장에서 한 시간 동안 기다렸지만, 버스는 오지 않았다."
                }
            ],
            "questions": [
                {
                    "q": "다음 중 밑줄 친 관사의 쓰임이 어법상 가장 올바른 것은?",
                    "options": [
                        "I want to eat a orange after dinner.",
                        "He saw an elephant at the zoo.",
                        "She is reading a interesting story.",
                        "They live in an small village.",
                        "I need a eraser to fix my mistake."
                    ],
                    "ans": 1,
                    "exp": "elephant는 모음 소리로 시작하므로 an elephant가 올바릅니다. (1: an orange, 3: an interesting, 4: a small, 5: an eraser)",
                    "conceptRef": "1단계 [공식 1: 셀 수 있는 명사와 관사 a / an 규칙] 출제 연계"
                },
                {
                    "q": "다음 빈칸에 들어갈 관사로 가장 알맞은 것은?\nLook up at _____ sky! _____ stars are shining brightly tonight.",
                    "options": ["a - A", "an - The", "the - The", "a - The", "the - A"],
                    "ans": 2,
                    "exp": "하늘(sky)은 세상에 하나뿐이므로 the sky, 밤하늘의 특정한 별들을 가리키므로 The stars가 올바릅니다.",
                    "conceptRef": "1단계 [공식 2: 특정한 대상을 가리키는 the의 마법] 출제 연계"
                },
                {
                    "q": "다음 중 빈칸에 부정관사 'an'이 들어갈 수 없는 것은?",
                    "options": [
                        "She drew _____ apple on paper.",
                        "He waited for _____ hour.",
                        "I bought _____ new backpack yesterday.",
                        "Do you have _____ umbrella?",
                        "This is _____ egg salad."
                    ],
                    "ans": 2,
                    "exp": "new backpack은 자음 소리 [ㄴ]으로 시작하므로 an이 아니라 a new backpack을 써야 합니다.",
                    "conceptRef": "1단계 [공식 1: 셀 수 있는 명사와 관사 a / an 규칙] 출제 연계"
                },
                {
                    "q": "다음 대화의 빈칸에 들어갈 말로 가장 알맞은 것은?\nA: What do you usually do on Sundays?\nB: I usually play _____ with my friends at the playground.",
                    "options": ["the soccer", "a soccer", "soccer", "an soccer", "the soccers"],
                    "ans": 2,
                    "exp": "축구(soccer)와 같은 운동 경기 이름 앞에는 관사(a/an/the)를 붙이지 않으므로 soccer가 올바릅니다.",
                    "conceptRef": "1단계 [공식 2: 특정한 대상을 가리키는 the의 마법] 출제 연계"
                },
                {
                    "q": "다음 문장에서 어법상 틀린 부분을 찾아 바르게 고친 것은?\n[문장] Yesterday I saw a kitten. A kitten was climbing a tree.",
                    "options": [
                        "Yesterday -> Tomorrow",
                        "a kitten -> an kitten",
                        "A kitten -> The kitten",
                        "was climbing -> were climbing",
                        "a tree -> an tree"
                    ],
                    "ans": 2,
                    "exp": "앞 문장에서 이미 언급된 'a kitten'을 두 번째 문장에서 다시 가리키고 있으므로 'The kitten'으로 바꾸어야 합니다.",
                    "conceptRef": "1단계 [공식 2: 특정한 대상을 가리키는 the의 마법] 출제 연계"
                }
            ]
        },

        # -------------------------------------------------------------
        # UNIT 2: 대명사의 첫걸음 (인칭대명사 주격 & 소유격)
        # -------------------------------------------------------------
        {
            "unitNo": 2,
            "unitId": "lv0_u2",
            "legacyUnitNo": 202,
            "title": "대명사의 첫걸음 (인칭대명사 주격 & 소유격)",
            "part": "품사의 기초",
            "targetGrade": "초등 기초 / 입문",
            "summary": "사람과 사물을 대신 부르는 인칭대명사의 주격(은/는/이/가)과 소유격(~의) 기초 정복",
            "overview": "친구 이름이나 물건 이름을 매번 똑같이 부르면 문장이 길고 어색해져요. 그래서 명사 대신 부르는 '대명사(Pronoun)'가 생겨났어요! 문장의 주인공인 주격(I, You, He, She, We, They)과 주인을 나타내는 소유격(my, your, his, her, our, their)을 짝지어 배워봐요!",
            "keyTakeaways": [
                "문장의 주인공 역할을 하는 주격: I(나), You(너/너희), He(그), She(그녀), It(그것), We(우리), They(그들)",
                "뒤에 명사가 와서 주인(~의)을 나타내는 소유격: my(나의), your(너의), his(그의), her(그녀의), our(우리의), their(그들의)",
                "소유격 뒤에는 반드시 이름(명사)이 함께 와요 (my room, her dog)"
            ],
            "formulaCards": [
                {
                    "name": "문장의 주인공 주격 대명사",
                    "desc": "문장의 맨 앞에서 동작을 하거나 상태의 주인공이 되는 대명사입니다. 우리말의 '은/는/이/가'에 해당합니다.",
                    "formula": "주격 대명사(I, You, He, She, It, We, They) + 동사",
                    "rules": [
                        {"title": "1인칭", "detail": "I (나는) / We (우리는)"},
                        {"title": "2인칭", "detail": "You (너는 / 너희들은)"},
                        {"title": "3인칭", "detail": "He (그는), She (그녀는), It (그것은) / They (그들은, 그것들은)"}
                    ],
                    "examples": [
                        {"en": "She plays badminton with her brother every Saturday.", "ko": "그녀는 매주 토요일에 남동생과 배드민턴을 친다.", "point": "문장의 주어 자리에 3인칭 여성 단수 주격 She 사용"},
                        {"en": "They are studying hard for the science quiz.", "ko": "그들은 과학 퀴즈를 위해 열심히 공부하고 있다.", "point": "복수 주어 자리에 주격 They 사용"}
                    ],
                    "oxCompare": [
                        {"correct": "She is my favorite English teacher.", "wrong": "Her is my favorite English teacher.", "reason": "문장의 주어 자리에는 소유격 Her가 아니라 주격 She를 써야 합니다."},
                        {"correct": "Tom and I went to the library.", "wrong": "Tom and me went to the library.", "reason": "주어 자리이므로 목적격 me가 아니라 주격 I를 씁니다."}
                    ],
                    "trap": "'나와 톰'이라고 할 때는 I and Tom이 아니라 Tom and I라고 상대방을 먼저 말하는 것이 영어의 예의예요!",
                    "quizLink": "3단계 퀴즈 직결"
                },
                {
                    "name": "누구의 것인지 알려주는 소유격 대명사",
                    "desc": "사물이나 사람의 주인(~의)을 나타내며, 반드시 뒤에 꾸며주는 명사와 함께 씁니다.",
                    "formula": "소유격(my, your, his, her, its, our, their) + 명사",
                    "rules": [
                        {"title": "단수 소유격", "detail": "my (나의), your (너의), his (그의), her (그녀의), its (그것의)"},
                        {"title": "복수 소유격", "detail": "our (우리의), your (너희들의), their (그들의)"},
                        {"title": "주의: it's vs its", "detail": "it's = it is의 줄임말 / its = 그것의 (소유격)"}
                    ],
                    "examples": [
                        {"en": "He washed his hands and brushed his teeth.", "ko": "그는 자신의 손을 씻고 이를 닦았다.", "point": "주어 He에 호응하는 남성 소유격 his 사용"},
                        {"en": "Our classroom is bright, clean, and spacious.", "ko": "우리의 교실은 밝고 깨끗하며 넓다.", "point": "1인칭 복수 소유격 Our + 명사 classroom"}
                    ],
                    "oxCompare": [
                        {"correct": "This is my pencil case.", "wrong": "This is me pencil case.", "reason": "명사 pencil case 앞에는 목적격 me가 아니라 소유격 my를 써야 합니다."},
                        {"correct": "The puppy wagged its tail happily.", "wrong": "The puppy wagged it's tail happily.", "reason": "'그것의' 소유격은 어포스트로피 없이 its입니다. (it's = it is)"}
                    ],
                    "trap": "소유격 뒤에는 반드시 명사가 붙어야 해요! This pencil is my. (X) -> This is my pencil. (O)",
                    "quizLink": "3단계 퀴즈 직결"
                }
            ],
            "spottingDrills": [
                {
                    "id": "drill_1",
                    "sentence": "Her is a smart student, and everyone in the classroom likes her.",
                    "underlined": ["Her", "smart student", "everyone", "likes her"],
                    "wrongIndex": 0,
                    "correction": "She",
                    "explanation": "문장의 주어 자리이므로 소유격/목적격 Her 대신 주격 인칭대명사 She를 써야 합니다.",
                    "conceptRef": "1단계 [공식 1: 문장의 주인공 주격 대명사] 출제 연계",
                    "korean": "그녀는 똑똑한 학생이며, 교실의 모든 사람이 그녀를 좋아한다."
                },
                {
                    "id": "drill_2",
                    "sentence": "Tom cleaned me room yesterday because I was feeling very sick.",
                    "underlined": ["cleaned", "me room", "yesterday", "very sick"],
                    "wrongIndex": 1,
                    "correction": "my room",
                    "explanation": "명사 room 앞에는 '나의'라는 소유를 나타내는 소유격 대명사 my를 써야 합니다.",
                    "conceptRef": "1단계 [공식 2: 누구의 것인지 알려주는 소유격 대명사] 출제 연계",
                    "korean": "내가 몸이 많이 아팠기 때문에 톰이 어제 나의 방을 청소해 주었다."
                },
                {
                    "id": "drill_3",
                    "sentence": "The friendly cat drank all the warm milk and licked it's little paws.",
                    "underlined": ["friendly cat", "drank", "warm milk", "it's little paws"],
                    "wrongIndex": 3,
                    "correction": "its little paws",
                    "explanation": "'그것의'라는 소유격을 나타낼 때는 it is의 줄임말인 it's가 아니라 its를 써야 합니다.",
                    "conceptRef": "1단계 [공식 2: 누구의 것인지 알려주는 소유격 대명사] 출제 연계",
                    "korean": "그 친절한 고양이는 따뜻한 우유를 다 마시고 자신의 작은 발을 핥았다."
                }
            ],
            "questions": [
                {
                    "q": "다음 빈칸에 들어갈 인칭대명사로 가장 알맞은 것은?\nJenny is my classmate. _____ always helps other students with homework.",
                    "options": ["Him", "Her", "She", "They", "His"],
                    "ans": 2,
                    "exp": "Jenny는 단수 여성이며 문장의 주어 자리이므로 주격 대명사 She가 알맞습니다.",
                    "conceptRef": "1단계 [공식 1: 문장의 주인공 주격 대명사] 출제 연계"
                },
                {
                    "q": "다음 중 밑줄 친 대명사의 쓰임이 어법상 올바른 것은?",
                    "options": [
                        "Him is my older brother.",
                        "This is me new bicycle.",
                        "They live in a beautiful house.",
                        "Us love our sweet grandmother.",
                        "Her plays the piano very well."
                    ],
                    "ans": 2,
                    "exp": "주어 자리에 복수 주격 They가 올바르게 쓰였습니다. (1: He, 2: my, 4: We, 5: She)",
                    "conceptRef": "1단계 [공식 1: 문장의 주인공 주격 대명사] 출제 연계"
                },
                {
                    "q": "다음 짝지어진 주격과 소유격의 연결이 바르지 않은 것은?",
                    "options": [
                        "I - my",
                        "you - your",
                        "he - his",
                        "she - her",
                        "we - they"
                    ],
                    "ans": 4,
                    "exp": "we(우리)의 소유격은 our입니다. they는 '그들'의 주격입니다.",
                    "conceptRef": "1단계 [공식 2: 누구의 것인지 알려주는 소유격 대명사] 출제 연계"
                },
                {
                    "q": "다음 문장의 빈칸에 들어갈 말로 가장 알맞은 것은?\nThe little bird built a warm nest for _____ hungry babies.",
                    "options": ["it", "it's", "its", "their", "them"],
                    "ans": 2,
                    "exp": "The little bird(그 작은 새)의 소유격을 나타내므로 어포스트로피 없는 its가 정답입니다.",
                    "conceptRef": "1단계 [공식 2: 누구의 것인지 알려주는 소유격 대명사] 출제 연계"
                },
                {
                    "q": "다음 중 밑줄 친 부분이 어법상 어색한 것은?",
                    "options": [
                        "My father drives his blue car to work.",
                        "The girls are playing with their dolls.",
                        "Mike and me are good tennis partners.",
                        "Our school has a spacious playground.",
                        "She brushes her teeth every morning."
                    ],
                    "ans": 2,
                    "exp": "문장의 주어 자리이므로 목적격 me가 아니라 주격 I를 써서 'Mike and I'가 되어야 합니다.",
                    "conceptRef": "1단계 [공식 1: 문장의 주인공 주격 대명사] 출제 연계"
                }
            ]
        },

        # -------------------------------------------------------------
        # UNIT 3: be동사 현재형 (am/are/is의 짝꿍 찾기)
        # -------------------------------------------------------------
        {
            "unitNo": 3,
            "unitId": "lv0_u3",
            "legacyUnitNo": 203,
            "title": "be동사 현재형 (am/are/is의 짝꿍 찾기)",
            "part": "동사의 기초",
            "targetGrade": "초등 기초 / 입문",
            "summary": "~이다, ~에 있다를 나타내는 be동사 현재형 am, are, is의 짝꿍 규칙과 줄임말",
            "overview": "영어에서 가장 중요하고 자주 쓰이는 동사가 바로 'be동사'예요! be동사는 우리말로 '~이다' 또는 '~에 있다'라는 뜻을 가져요. 주어가 누구냐에 따라 am, are, is 세 쌍둥이 중 딱 맞는 짝꿍이 정해져 있답니다. 완벽한 짝꿍을 찾아볼까요?",
            "keyTakeaways": [
                "주어가 I일 때는 오직 am (I am -> I'm)",
                "주어가 You, We, They나 복수명사일 때는 are (You're, We're, They're)",
                "주어가 He, She, It이나 한 사람/사물일 때는 is (He's, She's, It's)"
            ],
            "formulaCards": [
                {
                    "name": "am, are, is의 주어 짝꿍 공식",
                    "desc": "be동사의 현재형은 주어의 인칭과 수에 따라 am, are, is의 세 가지 형태로 변신합니다.",
                    "formula": "I am / You·We·They are / He·She·It is",
                    "rules": [
                        {"title": "I (1인칭 단수)", "detail": "I am a student. (나는 학생이다.)"},
                        {"title": "You / We / They (2인칭 & 복수)", "detail": "You are kind. / We are friends. / The boys are tall."},
                        {"title": "He / She / It (3인칭 단수)", "detail": "He is my dad. / She is happy. / The cat is under the table."}
                    ],
                    "examples": [
                        {"en": "I am proud of my younger sister.", "ko": "나는 나의 여동생이 자랑스럽다.", "point": "주어가 I이므로 be동사 am 사용"},
                        {"en": "They are in the school library right now.", "ko": "그들은 지금 학교 도서관에 있다.", "point": "주어가 복수명사/대명사 They이므로 are 사용"}
                    ],
                    "oxCompare": [
                        {"correct": "My mother is very kind to everyone.", "wrong": "My mother are very kind to everyone.", "reason": "My mother는 3인칭 단수이므로 are가 아니라 is를 써야 합니다."},
                        {"correct": "You and I are good friends.", "wrong": "You and I am good friends.", "reason": "주어가 'You and I'로 두 사람(복수)이므로 am이 아니라 are를 씁니다."}
                    ],
                    "trap": "'You and I' 뒤에는 I 바로 옆이라서 am을 쓰기 쉬워요! 하지만 둘이 합쳐 '우리(복수)'이므로 반드시 are를 써야 해요!",
                    "quizLink": "3단계 퀴즈 직결"
                },
                {
                    "name": "be동사의 줄임말과 의미 (~이다 / ~에 있다)",
                    "desc": "일상 대화에서는 be동사를 주어와 합쳐 짧게 줄여 씁니다. 뒤에 명사/형용사가 오면 '~이다', 장소가 오면 '~에 있다'로 해석합니다.",
                    "formula": "I'm / You're / He's / She's / It's / We're / They're",
                    "rules": [
                        {"title": "단수 줄임말", "detail": "I am -> I'm / You are -> You're / He is -> He's / She is -> She's / It is -> It's"},
                        {"title": "복수 줄임말", "detail": "We are -> We're / They are -> They're"},
                        {"title": "2가지 뜻", "detail": "He is a doctor. (의사이다) vs He is in Seoul. (서울에 있다)"}
                    ],
                    "examples": [
                        {"en": "We're excited about the upcoming school picnic.", "ko": "우리는 다가오는 학교 소풍에 매우 신이 난다.", "point": "We are의 줄임말 We're + 형용사 excited (~한 상태이다)"},
                        {"en": "The yellow birds are in the tall tree.", "ko": "노란 새들이 키 큰 나무 안에 있다.", "point": "are + 장소 전치사구 in the tree (~에 있다)"}
                    ],
                    "oxCompare": [
                        {"correct": "It's a sunny and warm morning.", "wrong": "Its a sunny and warm morning.", "reason": "'It is'의 줄임말에는 반드시 어포스트로피(')를 찍어 It's로 써야 합니다."},
                        {"correct": "They're playing in the playground.", "wrong": "Their playing in the playground.", "reason": "'그들은 ~이다'는 They are의 줄임말 They're를 써야 합니다."}
                    ],
                    "trap": "Their(그들의: 소유격)와 They're(They are의 줄임말)는 발음이 같아서 시험에 단골로 출제돼요! 철자를 꼭 확인하세요!",
                    "quizLink": "3단계 퀴즈 직결"
                }
            ],
            "spottingDrills": [
                {
                    "id": "drill_1",
                    "sentence": "My little cousin are very cute and everyone loves to play with him.",
                    "underlined": ["cousin are", "very cute", "everyone", "loves to play"],
                    "wrongIndex": 0,
                    "correction": "cousin is",
                    "explanation": "주어 My little cousin은 3인칭 단수이므로 be동사 are 대신 is를 써야 합니다.",
                    "conceptRef": "1단계 [공식 1: am, are, is의 주어 짝꿍 공식] 출제 연계",
                    "korean": "나의 어린 사촌은 매우 귀여워서 모든 사람이 그와 놀아주는 것을 좋아한다."
                },
                {
                    "id": "drill_2",
                    "sentence": "You and I am best friends in this classroom.",
                    "underlined": ["You and I", "am", "best friends", "in this classroom"],
                    "wrongIndex": 1,
                    "correction": "are",
                    "explanation": "주어가 'You and I'로 두 명(복수)이므로 I 뒤라도 am이 아닌 are를 써야 합니다.",
                    "conceptRef": "1단계 [공식 1: am, are, is의 주어 짝꿍 공식] 출제 연계",
                    "korean": "너와 나는 이 교실에서 가장 친한 단짝 친구이다."
                },
                {
                    "id": "drill_3",
                    "sentence": "Their very happy today because tomorrow is a national holiday.",
                    "underlined": ["Their", "very happy", "because", "is a national"],
                    "wrongIndex": 0,
                    "correction": "They're",
                    "explanation": "'그들은 ~이다'라는 뜻의 주어+be동사 자리이므로 소유격 Their 대신 They're(They are)를 써야 합니다.",
                    "conceptRef": "1단계 [공식 2: be동사의 줄임말과 의미 (~이다 / ~에 있다)] 출제 연계",
                    "korean": "내일이 국경일이기 때문에 그들은 오늘 매우 행복하다."
                }
            ],
            "questions": [
                {
                    "q": "다음 빈칸에 들어갈 be동사로 가장 알맞은 것은?\nMy parents _____ very proud of my hard work.",
                    "options": ["am", "is", "are", "be", "was"],
                    "ans": 2,
                    "exp": "주어 My parents는 복수명사(부모님 두 분)이므로 현재형 be동사 are가 알맞습니다.",
                    "conceptRef": "1단계 [공식 1: am, are, is의 주어 짝꿍 공식] 출제 연계"
                },
                {
                    "q": "다음 중 주어와 be동사의 짝꿍이 올바른 문장은?",
                    "options": [
                        "I is a fifth grade student.",
                        "She are a talented singer.",
                        "We is in the science lab.",
                        "The dog is under the big table.",
                        "You am very fast at running."
                    ],
                    "ans": 3,
                    "exp": "The dog(3인칭 단수) + is가 올바른 짝꿍입니다. (1: I am, 2: She is, 3: We are, 5: You are)",
                    "conceptRef": "1단계 [공식 1: am, are, is의 주어 짝꿍 공식] 출제 연계"
                },
                {
                    "q": "다음 중 줄임말의 연결이 바르지 않은 것은?",
                    "options": [
                        "I am -> I'm",
                        "He is -> He's",
                        "We are -> We're",
                        "They are -> Their",
                        "It is -> It's"
                    ],
                    "ans": 3,
                    "exp": "They are의 줄임말은 They're입니다. Their는 '그들의'라는 뜻의 소유격입니다.",
                    "conceptRef": "1단계 [공식 2: be동사의 줄임말과 의미 (~이다 / ~에 있다)] 출제 연계"
                },
                {
                    "q": "다음 문장의 빈칸에 들어갈 말로 가장 알맞은 것은?\nPeter and I _____ in the same soccer club.",
                    "options": ["am", "is", "are", "be", "has"],
                    "ans": 2,
                    "exp": "'Peter and I'는 두 명으로 '우리(We)'에 해당하므로 복수 be동사 are를 써야 합니다.",
                    "conceptRef": "1단계 [공식 1: am, are, is의 주어 짝꿍 공식] 출제 연계"
                },
                {
                    "q": "다음 두 문장에서 be동사 is의 의미를 순서대로 바르게 짝지은 것은?\n(A) My uncle is a kind police officer.\n(B) The key is on the dining table.",
                    "options": [
                        "~이다 - ~이다",
                        "~에 있다 - ~이다",
                        "~이다 - ~에 있다",
                        "~에 있다 - ~에 있다",
                        "~을 하다 - ~이다"
                    ],
                    "ans": 2,
                    "exp": "(A)의 is는 뒤에 직업 명사가 와서 '~이다', (B)의 is는 뒤에 장소 전치사구가 와서 '~에 있다'의 의미입니다.",
                    "conceptRef": "1단계 [공식 2: be동사의 줄임말과 의미 (~이다 / ~에 있다)] 출제 연계"
                }
            ]
        },

        # -------------------------------------------------------------
        # UNIT 4: be동사의 부정문과 의문문 (not 위치 & Yes/No 대답)
        # -------------------------------------------------------------
        {
            "unitNo": 4,
            "unitId": "lv0_u4",
            "legacyUnitNo": 204,
            "title": "be동사의 부정문과 의문문 (not 위치 & Yes/No 대답)",
            "part": "동사의 기초",
            "targetGrade": "초등 기초 / 입문",
            "summary": "be동사 뒤 not을 붙이는 부정문 공식과 주어-동사 자리를 바꾸는 의문문 및 대답",
            "overview": "'~가 아니다'라고 말하고 싶을 때는 be동사 뒤에 not만 쏙 붙이면 부정문이 돼요! 또 궁금한 것을 물어볼 때는 주어와 be동사의 자리를 퐁당 바꿔주면 멋진 의문문이 완성돼요. 질문에 대해 Yes와 No로 자신 있게 대답하는 법도 함께 익혀봐요!",
            "keyTakeaways": [
                "부정문: be동사 바로 뒤에 not을 붙여요 (is not -> isn't / are not -> aren't)",
                "의문문: be동사와 주어의 자리를 바꿔요 (You are -> Are you ~? / He is -> Is he ~?)",
                "Yes/No 대답: 묻는 be동사와 인칭대명사로 알맞게 받아쳐요 (Are you ~? -> Yes, I am. / No, I'm not.)"
            ],
            "formulaCards": [
                {
                    "name": "be동사의 부정문: not은 be동사 바로 뒤!",
                    "desc": "be동사 문장을 부정할 때는 be동사 뒤에 not을 넣습니다. 줄임말로 aren't, isn't를 많이 쓰지만, am not은 줄여서 amn't로 쓰지 않습니다.",
                    "formula": "주어 + am / are / is + not ~",
                    "rules": [
                        {"title": "am not", "detail": "I am not tired. (줄임말 amn't는 없음! I'm not으로 줄임)"},
                        {"title": "are not", "detail": "are not -> aren't (We aren't busy. / They aren't at school.)"},
                        {"title": "is not", "detail": "is not -> isn't (He isn't hungry. / It isn't cold today.)"}
                    ],
                    "examples": [
                        {"en": "She is not angry with her younger brother.", "ko": "그녀는 남동생에게 화나지 않았다.", "point": "be동사 is 바로 뒤에 not 배치 (줄여서 She isn't 가능)"},
                        {"en": "We are not ready to go outside yet.", "ko": "우리는 아직 밖으로 나갈 준비가 되지 않았다.", "point": "are not의 부정문 구조 (줄여서 We aren't)"}
                    ],
                    "oxCompare": [
                        {"correct": "He is not a basketball player.", "wrong": "He not is a basketball player.", "reason": "not은 be동사 앞이 아니라 반드시 be동사 바로 뒤에 와야 합니다."},
                        {"correct": "I am not sleepy right now.", "wrong": "I amn't sleepy right now.", "reason": "am not은 amn't로 줄여 쓸 수 없으며 I'm not으로 씁니다."}
                    ],
                    "trap": "일반동사처럼 don't나 doesn't를 be동사 앞에 붙이면 절대 안 돼요! He doesn't is a teacher (X) -> He is not a teacher (O)",
                    "quizLink": "3단계 퀴즈 직결"
                },
                {
                    "name": "be동사의 의문문과 Yes/No 대답",
                    "desc": "주어와 be동사의 자리를 바꾸고 문장 끝에 물음표(?)를 붙입니다. 대답할 때도 물어본 be동사를 활용합니다.",
                    "formula": "Am / Are / Is + 주어 ~? ➔ Yes, 주어 + be동사. / No, 주어 + be동사 + not.",
                    "rules": [
                        {"title": "Are you ~?", "detail": "Yes, I am. / No, I'm not. (You로 물으면 I로 대답)"},
                        {"title": "Is he/she ~?", "detail": "Yes, he is. / No, he isn't. / Yes, she is. / No, she isn't."},
                        {"title": "Are they ~?", "detail": "Yes, they are. / No, they aren't."}
                    ],
                    "examples": [
                        {"en": "Are you excited about the upcoming school festival?", "ko": "너는 다가오는 학교 축제에 신이 나니?", "point": "You are의 어순을 뒤집어 Are you ~? 의문문 구성"},
                        {"en": "Is your father at home right now?", "ko": "너의 아버지께서는 지금 집에 계시니?", "point": "단수 주어 your father에 맞추어 Is를 문두에 배치"}
                    ],
                    "oxCompare": [
                        {"correct": "Are you hungry? - Yes, I am.", "wrong": "Are you hungry? - Yes, I'm.", "reason": "Yes 긍정 단답 대답에서는 'Yes, I'm'처럼 줄여 쓸 수 없습니다."},
                        {"correct": "Is she your sister? - No, she isn't.", "wrong": "Is she your sister? - No, she not.", "reason": "No 부정 대답에서는 be동사와 not을 함께 써야 합니다."}
                    ],
                    "trap": "긍정 대답인 Yes 뒤에서는 줄임말을 쓸 수 없어요! Yes, I'm (X) -> Yes, I am (O) / Yes, he's (X) -> Yes, he is (O)",
                    "quizLink": "3단계 퀴즈 직결"
                }
            ],
            "spottingDrills": [
                {
                    "id": "drill_1",
                    "sentence": "My grandfather not is tired after walking in the quiet park.",
                    "underlined": ["grandfather", "not is", "tired after", "walking in"],
                    "wrongIndex": 1,
                    "correction": "is not",
                    "explanation": "be동사의 부정문에서 not은 be동사 앞이 아니라 반드시 be동사 바로 뒤(is not 또는 isn't)에 위치해야 합니다.",
                    "conceptRef": "1단계 [공식 1: be동사의 부정문: not은 be동사 바로 뒤!] 출제 연계",
                    "korean": "나의 할아버지께서는 조용한 공원을 산책하신 후에 피곤하지 않으시다."
                },
                {
                    "id": "drill_2",
                    "sentence": "Is your older brothers playing soccer in the school field right now?",
                    "underlined": ["Is", "older brothers", "playing soccer", "right now"],
                    "wrongIndex": 0,
                    "correction": "Are",
                    "explanation": "주어 your older brothers가 복수명사이므로 단수 be동사 Is가 아닌 Are로 시작해야 합니다.",
                    "conceptRef": "1단계 [공식 2: be동사의 의문문과 Yes/No 대답] 출제 연계",
                    "korean": "너의 형들은 지금 학교 운동장에서 축구를 하고 있니?"
                },
                {
                    "id": "drill_3",
                    "sentence": "Are you ready for the final exam? Yes, I'm ready to take it.",
                    "underlined": ["Are you ready", "final exam", "Yes, I'm", "ready to take"],
                    "wrongIndex": 2,
                    "correction": "Yes, I am",
                    "explanation": "Yes로 시작하는 긍정 단답 대답에서는 'Yes, I am'과 같이 축약하지 않고 온전한 형태로 대답해야 자연스럽습니다.",
                    "conceptRef": "1단계 [공식 2: be동사의 의문문과 Yes/No 대답] 출제 연계",
                    "korean": "너는 기말시험 준비가 되었니? 응, 나는 시험을 치를 준비가 되었어."
                }
            ],
            "questions": [
                {
                    "q": "다음 문장의 빈칸에 들어갈 말로 가장 알맞은 것은?\nTony _____ at school today because he has a bad cold.",
                    "options": ["is not", "not is", "does not", "are not", "not are"],
                    "ans": 0,
                    "exp": "Tony는 3인칭 단수이며 be동사의 부정문은 be동사 뒤에 not이 오므로 is not이 알맞습니다.",
                    "conceptRef": "1단계 [공식 1: be동사의 부정문: not은 be동사 바로 뒤!] 출제 연계"
                },
                {
                    "q": "다음 대화의 빈칸에 들어갈 말로 가장 알맞은 것은?\nA: Are you and Sally hungry?\nB: No, _____.",
                    "options": [
                        "I am not",
                        "we aren't",
                        "she isn't",
                        "they aren't",
                        "you aren't"
                    ],
                    "ans": 1,
                    "exp": "'you and Sally'는 '너희들'이므로 대답할 때는 '우리(we)'로 받아 No, we aren't라고 해야 합니다.",
                    "conceptRef": "1단계 [공식 2: be동사의 의문문과 Yes/No 대답] 출제 연계"
                },
                {
                    "q": "다음 평서문을 의문문으로 바르게 바꾼 것은?\n[평서문] The movie is very interesting.",
                    "options": [
                        "Does the movie very interesting?",
                        "Is the movie very interesting?",
                        "The movie is very interesting?",
                        "Are the movie very interesting?",
                        "Is very interesting the movie?"
                    ],
                    "ans": 1,
                    "exp": "be동사 is와 주어 The movie의 자리를 바꾸어 'Is the movie very interesting?'이 됩니다.",
                    "conceptRef": "1단계 [공식 2: be동사의 의문문과 Yes/No 대답] 출제 연계"
                },
                {
                    "q": "다음 중 어법상 올바른 대답을 고른 것은?\nA: Is your mother a doctor?\nB: ____________________",
                    "options": [
                        "Yes, she's.",
                        "No, she not.",
                        "Yes, she is.",
                        "No, she is.",
                        "Yes, he is."
                    ],
                    "ans": 2,
                    "exp": "mother는 여성이므로 she로 받으며, 긍정 단답에서는 축약하지 않고 'Yes, she is.'로 대답합니다.",
                    "conceptRef": "1단계 [공식 2: be동사의 의문문과 Yes/No 대답] 출제 연계"
                },
                {
                    "q": "다음 중 밑줄 친 부분의 어법이 어색한 문장은?",
                    "options": [
                        "They aren't in the classroom.",
                        "I amn't tired at all.",
                        "She isn't my sister.",
                        "We are not late for class.",
                        "It is not cold outside."
                    ],
                    "ans": 1,
                    "exp": "am not의 줄임말 amn't는 영어에 존재하지 않으므로 'I am not' 또는 'I'm not'으로 써야 합니다.",
                    "conceptRef": "1단계 [공식 1: be동사의 부정문: not은 be동사 바로 뒤!] 출제 연계"
                }
            ]
        },

        # -------------------------------------------------------------
        # UNIT 5: 일반동사 현재형 (동사원형과 3인칭 단수 -s/-es)
        # -------------------------------------------------------------
        {
            "unitNo": 5,
            "unitId": "lv0_u5",
            "legacyUnitNo": 205,
            "title": "일반동사 현재형 (동사원형과 3인칭 단수 -s/-es)",
            "part": "동사의 기초",
            "targetGrade": "초등 기초 / 입문",
            "summary": "동작을 나타내는 일반동사의 기본형과 3인칭 단수 주어 뒤 -s/-es 붙이기 규칙",
            "overview": "먹다(eat), 뛰다(run), 좋아하다(like)처럼 사람이나 동물의 움직임과 마음을 나타내는 단어를 '일반동사'라고 해요. 주어가 I, You나 여러 명일 때는 원래 모양 그대로 쓰지만, 'He, She, It' 같은 3인칭 단수 친구가 오면 동사 끝에 -s나 -es를 붙여주는 특별한 변신을 한답니다!",
            "keyTakeaways": [
                "주어가 I, You, We, They, 복수명사일 때는 동사원형 (I like cats. / We play soccer.)",
                "주어가 He, She, It, 한 사람일 때는 동사원형 + -s / -es (He likes cats. / She watches TV.)",
                "불규칙 변신: have의 3인칭 단수형은 has!"
            ],
            "formulaCards": [
                {
                    "name": "일반동사의 현재형과 주어에 따른 형태",
                    "desc": "평소의 습관이나 사실을 말할 때 일반동사의 현재형을 씁니다. 주어가 3인칭 단수일 때만 동사 끝에 -s를 붙입니다.",
                    "formula": "I / You / We / They + 동사원형 ➔ He / She / It + 동사원형-s/-es",
                    "rules": [
                        {"title": "동사원형을 쓰는 주어", "detail": "I read books. / You run fast. / They play games."},
                        {"title": "3인칭 단수 주어", "detail": "He, She, It, My mom, The boy, Minho 등 혼자인 주어"},
                        {"title": "기본 규칙", "detail": "대부분의 동사는 끝에 -s만 붙임 (plays, likes, eats, reads)"}
                    ],
                    "examples": [
                        {"en": "We eat fresh fruit after dinner every day.", "ko": "우리는 매일 저녁 식사 후에 신선한 과일을 먹는다.", "point": "주어가 1인칭 복수 We이므로 동사원형 eat 사용"},
                        {"en": "My sister sings lovely songs in the shower.", "ko": "나의 여동생은 샤워할 때 사랑스러운 노래를 부른다.", "point": "주어 My sister가 3인칭 단수이므로 동사에 -s를 붙여 sings"}
                    ],
                    "oxCompare": [
                        {"correct": "She likes sweet chocolate ice cream.", "wrong": "She like sweet chocolate ice cream.", "reason": "주어 She가 3인칭 단수이므로 동사 like 뒤에 -s를 붙여야 합니다."},
                        {"correct": "They live in a quiet apartment.", "wrong": "They lives in a quiet apartment.", "reason": "주어 They는 복수이므로 -s를 붙이지 않고 동사원형 live를 씁니다."}
                    ],
                    "trap": "명사의 복수형 -s(books, dogs)와 동사의 3인칭 단수 -s(runs, plays)를 헷갈리지 마세요! 주어가 혼자일 때 동사에 -s를 붙여요!",
                    "quizLink": "3단계 퀴즈 직결"
                },
                {
                    "name": "3인칭 단수 -es / -ies / has 불규칙 규칙",
                    "desc": "동사의 끝 글자에 따라 -es나 -ies를 붙이는 특별한 철자 규칙입니다.",
                    "formula": "-s, -sh, -ch, -x, -o ➔ + -es / 자음 + y ➔ y를 i로 고치고 + -es / have ➔ has",
                    "rules": [
                        {"title": "-s, -sh, -ch, -x, -o", "detail": "watches, washes, passes, fixes, goes, does"},
                        {"title": "자음 + y", "detail": "study -> studies / fly -> flies / cry -> cries (모음+y는 그냥 -s: play -> plays)"},
                        {"title": "불규칙 have", "detail": "have의 3인칭 단수형은 haves가 아니라 has!"}
                    ],
                    "examples": [
                        {"en": "He watches interesting science documentaries every weekend.", "ko": "그는 주말마다 흥미로운 과학 다큐멘터리를 시청한다.", "point": "watch가 -ch로 끝나므로 3인칭 단수에서 -es를 붙여 watches"},
                        {"en": "The baby cries when he is hungry.", "ko": "그 아기는 배가 고플 때 운다.", "point": "cry(자음+y)에서 y를 i로 고치고 -es -> cries"}
                    ],
                    "oxCompare": [
                        {"correct": "My mother goes to the market on Sundays.", "wrong": "My mother gos to the market on Sundays.", "reason": "go는 -o로 끝나므로 -es를 붙여 goes로 써야 합니다."},
                        {"correct": "He has a cute little puppy.", "wrong": "He haves a cute little puppy.", "reason": "have의 3인칭 단수형은 haves가 아니라 불규칙 has입니다."}
                    ],
                    "trap": "play는 모음(a)+y이므로 plaies가 아니라 그냥 plays예요! 자음+y일 때만 i로 바꾼다는 점을 꼭 기억하세요!",
                    "quizLink": "3단계 퀴즈 직결"
                }
            ],
            "spottingDrills": [
                {
                    "id": "drill_1",
                    "sentence": "My older sister like sweet strawberries and fresh apples very much.",
                    "underlined": ["My older sister", "like", "sweet strawberries", "very much"],
                    "wrongIndex": 1,
                    "correction": "likes",
                    "explanation": "주어 My older sister가 3인칭 단수이므로 일반동사 like 뒤에 -s를 붙여 likes로 써야 합니다.",
                    "conceptRef": "1단계 [공식 1: 일반동사의 현재형과 주어에 따른 형태] 출제 연계",
                    "korean": "나의 누나는 달콤한 딸기와 신선한 사과를 매우 좋아한다."
                },
                {
                    "id": "drill_2",
                    "sentence": "He watchs funny animation movies on the tablet every Saturday afternoon.",
                    "underlined": ["He", "watchs", "animation movies", "every Saturday"],
                    "wrongIndex": 1,
                    "correction": "watches",
                    "explanation": "watch는 -ch로 끝나는 동사이므로 3인칭 단수 주어 뒤에서 -s가 아닌 -es를 붙여 watches로 고쳐야 합니다.",
                    "conceptRef": "1단계 [공식 2: 3인칭 단수 -es / -ies / has 불규칙 규칙] 출제 연계",
                    "korean": "그는 매주 토요일 오후마다 태블릿으로 재미있는 애니메이션 영화를 본다."
                },
                {
                    "id": "drill_3",
                    "sentence": "She studys mathematics hard every evening to prepare for the test.",
                    "underlined": ["She", "studys", "hard every", "to prepare"],
                    "wrongIndex": 1,
                    "correction": "studies",
                    "explanation": "study는 [자음 d + y]로 끝나는 동사이므로 y를 i로 고치고 -es를 붙여 studies로 써야 올바릅니다.",
                    "conceptRef": "1단계 [공식 2: 3인칭 단수 -es / -ies / has 불규칙 규칙] 출제 연계",
                    "korean": "그녀는 시험을 준비하기 위해 매일 저녁 열심히 수학을 공부한다."
                }
            ],
            "questions": [
                {
                    "q": "다음 중 주어와 일반동사의 연결이 어법상 가장 올바른 것은?",
                    "options": [
                        "He walk to school every morning.",
                        "My father drive a red car.",
                        "They plays soccer after class.",
                        "She reads books in the library.",
                        "I likes chocolate cookies."
                    ],
                    "ans": 3,
                    "exp": "주어 She(3인칭 단수) 뒤에 동사 reads(-s)가 올바르게 쓰였습니다. (1: walks, 2: drives, 3: play, 5: like)",
                    "conceptRef": "1단계 [공식 1: 일반동사의 현재형과 주어에 따른 형태] 출제 연계"
                },
                {
                    "q": "다음 동사 중 3인칭 단수형으로 바꿀 때 '-es'를 붙이는 동사가 아닌 것은?",
                    "options": ["teach", "wash", "fix", "go", "make"],
                    "ans": 4,
                    "exp": "make는 -e로 끝나므로 그냥 -s만 붙여 makes가 됩니다. 나머지는 모두 -es를 붙입니다 (teaches, washes, fixes, goes).",
                    "conceptRef": "1단계 [공식 2: 3인칭 단수 -es / -ies / has 불규칙 규칙] 출제 연계"
                },
                {
                    "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\nTony _____ two cute pet rabbits at home.",
                    "options": ["have", "has", "haves", "is having", "having"],
                    "ans": 1,
                    "exp": "Tony는 3인칭 단수이므로 have의 불규칙 3인칭 단수형인 has가 정답입니다.",
                    "conceptRef": "1단계 [공식 2: 3인칭 단수 -es / -ies / has 불규칙 규칙] 출제 연계"
                },
                {
                    "q": "다음 중 동사의 3인칭 단수 변화가 바르지 않은 것은?",
                    "options": [
                        "play -> plays",
                        "study -> studies",
                        "cry -> crys",
                        "pass -> passes",
                        "do -> does"
                    ],
                    "ans": 2,
                    "exp": "cry는 자음(r)+y이므로 y를 i로 고치고 -es를 붙여 cries가 되어야 합니다.",
                    "conceptRef": "1단계 [공식 2: 3인칭 단수 -es / -ies / has 불규칙 규칙] 출제 연계"
                },
                {
                    "q": "다음 문장의 빈칸에 알맞은 말을 차례대로 짝지은 것은?\n(A) We _____ tennis every weekend.\n(B) Minho _____ tennis very well.",
                    "options": [
                        "play - play",
                        "plays - play",
                        "play - plays",
                        "plays - plays",
                        "playing - plays"
                    ],
                    "ans": 2,
                    "exp": "(A)의 We는 복수이므로 동사원형 play, (B)의 Minho는 3인칭 단수이므로 plays가 알맞습니다.",
                    "conceptRef": "1단계 [공식 1: 일반동사의 현재형과 주어에 따른 형태] 출제 연계"
                }
            ]
        },

        # -------------------------------------------------------------
        # UNIT 6: 일반동사의 부정문과 의문문 (don't/doesn't & Do/Does)
        # -------------------------------------------------------------
        {
            "unitNo": 6,
            "unitId": "lv0_u6",
            "legacyUnitNo": 206,
            "title": "일반동사의 부정문과 의문문 (don't/doesn't & Do/Does)",
            "part": "동사의 기초",
            "targetGrade": "초등 기초 / 입문",
            "summary": "조동사 do/does 도우미를 활용한 부정문(don't/doesn't)과 의문문 공식 및 동사원형 법칙",
            "overview": "일반동사는 be동사와 달리 혼자서 not을 붙이거나 주어 앞으로 나갈 수 없어요! 그래서 'do'와 'does'라는 든든한 도우미 조동사를 불러온답니다. 도우미가 등장하면 진짜 동사는 홀가분하게 '동사원형'으로 돌아간다는 마법의 법칙을 꼭 기억해요!",
            "keyTakeaways": [
                "I, You, We, They 뒤에는 don't + 동사원형 (I don't like milk.)",
                "He, She, It 뒤에는 doesn't + 동사원형 (He doesn't like milk. -s 탈락!)",
                "의문문은 Do / Does로 시작하고 동사는 반드시 원형! (Does she play soccer?)"
            ],
            "formulaCards": [
                {
                    "name": "일반동사의 부정문: don't / doesn't + 동사원형",
                    "desc": "일반동사 앞에 don't(do not) 또는 doesn't(does not)를 붙입니다. 도우미가 -s를 가져갔으므로 뒤에는 반드시 동사원형이 옵니다.",
                    "formula": "주어 + don't / doesn't + 동사원형",
                    "rules": [
                        {"title": "don't + 동사원형", "detail": "I / You / We / They don't play tennis."},
                        {"title": "doesn't + 동사원형", "detail": "He / She / It doesn't play tennis. (plays 쓰면 절대 안 됨!)"},
                        {"title": "have의 부정", "detail": "doesn't have (doesn't has는 틀림)"}
                    ],
                    "examples": [
                        {"en": "I do not drink coffee before going to bed.", "ko": "나는 잠자리에 들기 전에 커피를 마시지 않는다.", "point": "주어가 I이므로 do not(don't) + 동사원형 drink"},
                        {"en": "She does not live in this neighborhood anymore.", "ko": "그녀는 더 이상 이 동네에 살지 않는다.", "point": "주어 She 뒤에 does not(doesn't) + 동사원형 live (-s 탈락)"}
                    ],
                    "oxCompare": [
                        {"correct": "She doesn't like spicy food.", "wrong": "She doesn't likes spicy food.", "reason": "doesn't 뒤에는 반드시 동사원형(like)이 와야 하므로 -s를 붙이지 않습니다."},
                        {"correct": "He doesn't have a bicycle.", "wrong": "He doesn't has a bicycle.", "reason": "doesn't 뒤에는 동사원형 have를 써야 합니다."}
                    ],
                    "trap": "doesn't 뒤에 습관적으로 -s를 붙이면 시험에서 가장 많이 감점돼요! doesn't 뒤는 무조건 동사원형!",
                    "quizLink": "3단계 퀴즈 직결"
                },
                {
                    "name": "Do / Does 의문문과 Yes/No 대답",
                    "desc": "문장 맨 앞에 Do나 Does를 쓰고, 동사는 원형으로 바꿉니다. 대답할 때도 do나 does로 받습니다.",
                    "formula": "Do / Does + 주어 + 동사원형 ~? ➔ Yes, 주어 do/does. / No, 주어 don't/doesn't.",
                    "rules": [
                        {"title": "Do you ~?", "detail": "Yes, I do. / No, I don't."},
                        {"title": "Does he/she ~?", "detail": "Yes, he does. / No, he doesn't. (Does he speak English?)"},
                        {"title": "Do they ~?", "detail": "Yes, they do. / No, they don't."}
                    ],
                    "examples": [
                        {"en": "Do you understand the main idea of this story?", "ko": "너는 이 이야기의 중심 생각을 이해하니?", "point": "주어가 you이므로 Do로 시작하고 동사원형 understand 사용"},
                        {"en": "Does your brother play the guitar in the school band?", "ko": "너의 남동생은 학교 밴드에서 기타를 치니?", "point": "3인칭 단수 brother이므로 Does로 시작하고 동사원형 play 사용"}
                    ],
                    "oxCompare": [
                        {"correct": "Does she speak French well?", "wrong": "Does she speaks French well?", "reason": "Does가 이미 앞에 나왔으므로 speak에 -s를 덧붙이지 않습니다."},
                        {"correct": "Do you like apples? - Yes, I do.", "wrong": "Do you like apples? - Yes, I like.", "reason": "일반동사 의문문에는 동사 like 대신 조동사 do로 대답합니다."}
                    ],
                    "trap": "일반동사 의문문에 be동사로 대답하면 안 돼요! Do you like pizza? - Yes, I am. (X) -> Yes, I do. (O)",
                    "quizLink": "3단계 퀴즈 직결"
                }
            ],
            "spottingDrills": [
                {
                    "id": "drill_1",
                    "sentence": "My younger sister doesn't likes spicy food, so she always eats mild soup.",
                    "underlined": ["sister", "doesn't likes", "spicy food", "eats mild soup"],
                    "wrongIndex": 1,
                    "correction": "doesn't like",
                    "explanation": "조동사 doesn't 뒤에는 반드시 일반동사의 원형(like)을 써야 하므로 -s를 삭제해야 합니다.",
                    "conceptRef": "1단계 [공식 1: 일반동사의 부정문: don't / doesn't + 동사원형] 출제 연계",
                    "korean": "나의 여동생은 매운 음식을 좋아하지 않아서 항상 순한 수프를 먹는다."
                },
                {
                    "id": "drill_2",
                    "sentence": "Does he plays the violin very well in the city youth orchestra?",
                    "underlined": ["Does", "he plays", "the violin", "very well"],
                    "wrongIndex": 1,
                    "correction": "he play",
                    "explanation": "의문문 조동사 Does가 이미 쓰였으므로 주어 뒤의 동사는 원형인 play로 써야 합니다.",
                    "conceptRef": "1단계 [공식 2: Do / Does 의문문과 Yes/No 대답] 출제 연계",
                    "korean": "그는 시립 청소년 오케스트라에서 바이올린을 아주 잘 연주하니?"
                },
                {
                    "id": "drill_3",
                    "sentence": "My pet cat don't drink cold water when the weather is chilly.",
                    "underlined": ["pet cat", "don't drink", "cold water", "is chilly"],
                    "wrongIndex": 1,
                    "correction": "doesn't drink",
                    "explanation": "주어 My pet cat은 3인칭 단수이므로 부정 조동사 don't 대신 doesn't를 써야 합니다.",
                    "conceptRef": "1단계 [공식 1: 일반동사의 부정문: don't / doesn't + 동사원형] 출제 연계",
                    "korean": "나의 애완 고양이는 날씨가 쌀쌀할 때 찬물을 마시지 않는다."
                }
            ],
            "questions": [
                {
                    "q": "다음 문장의 빈칸에 들어갈 말로 가장 알맞은 것은?\nTom _____ like horror movies at all.",
                    "options": ["isn't", "aren't", "don't", "doesn't", "not"],
                    "ans": 3,
                    "exp": "주어 Tom은 3인칭 단수이며 일반동사 like를 부정해야 하므로 doesn't가 알맞습니다.",
                    "conceptRef": "1단계 [공식 1: 일반동사의 부정문: don't / doesn't + 동사원형] 출제 연계"
                },
                {
                    "q": "다음 대화의 빈칸에 들어갈 말로 가장 알맞은 것은?\nA: Does your sister play the piano?\nB: No, _____.",
                    "options": [
                        "she isn't",
                        "she don't",
                        "she doesn't",
                        "she not",
                        "she hasn't"
                    ],
                    "ans": 2,
                    "exp": "Does로 물었으므로 No 뒤에는 'No, she doesn't.'로 대답해야 합니다.",
                    "conceptRef": "1단계 [공식 2: Do / Does 의문문과 Yes/No 대답] 출제 연계"
                },
                {
                    "q": "다음 평서문을 부정문으로 바르게 고친 것은?\n[평서문] He washes his hands before meals.",
                    "options": [
                        "He doesn't washes his hands before meals.",
                        "He isn't wash his hands before meals.",
                        "He doesn't wash his hands before meals.",
                        "He don't wash his hands before meals.",
                        "He not washes his hands before meals."
                    ],
                    "ans": 2,
                    "exp": "He는 3인칭 단수이므로 doesn't를 쓰고 동사원형 wash로 돌아와야 합니다.",
                    "conceptRef": "1단계 [공식 1: 일반동사의 부정문: don't / doesn't + 동사원형] 출제 연계"
                },
                {
                    "q": "다음 중 어법상 틀린 문장은?",
                    "options": [
                        "Do you live in Seoul?",
                        "Does he has a pet dog?",
                        "We don't know the answer.",
                        "She doesn't watch television.",
                        "Do they play baseball on Sundays?"
                    ],
                    "ans": 1,
                    "exp": "Does 뒤에는 반드시 동사원형을 써야 하므로 has가 아니라 have로 고쳐야 합니다.",
                    "conceptRef": "1단계 [공식 2: Do / Does 의문문과 Yes/No 대답] 출제 연계"
                },
                {
                    "q": "다음 대화 중 질문과 대답의 짝이 올바른 것은?",
                    "options": [
                        "A: Do you like dogs? - B: Yes, I am.",
                        "A: Are you hungry? - B: Yes, I do.",
                        "A: Does she speak English? - B: Yes, she does.",
                        "A: Does he swim well? - B: No, he don't.",
                        "A: Do they have books? - B: No, they doesn't."
                    ],
                    "ans": 2,
                    "exp": "Does she ~? 질문에 조동사 does를 맞추어 'Yes, she does.'로 대답한 3번이 올바릅니다.",
                    "conceptRef": "1단계 [공식 2: Do / Does 의문문과 Yes/No 대답] 출제 연계"
                }
            ]
        },

        # -------------------------------------------------------------
        # UNIT 7: 형용사와 부사 기초 (예쁜 모양 & 씩씩한 움직임)
        # -------------------------------------------------------------
        {
            "unitNo": 7,
            "unitId": "lv0_u7",
            "legacyUnitNo": 207,
            "title": "형용사와 부사 기초 (예쁜 모양 & 씩씩한 움직임)",
            "part": "품사의 기초",
            "targetGrade": "초등 기초 / 입문",
            "summary": "명사를 꾸며주는 형용사와 동사를 꾸며주는 부사의 기초 구별 및 형용사+-ly 규칙",
            "overview": "문장을 알록달록 풍성하게 꾸며주는 마법 같은 두 친구를 만나요! '어떤(명사)'인지를 알려주는 형용사(pretty, tall, sweet)와, '어떻게(동사)' 행동하는지를 알려주는 부사(fast, happily, slowly)의 차이점을 배우면 영어 표현이 훨씬 다채로워진답니다!",
            "keyTakeaways": [
                "형용사: 명사의 모양, 색깔, 성질을 꾸며줘요 (~한, ~의 모양 / a kind teacher)",
                "부사: 동사의 움직임이나 정도를 꾸며줘요 (~하게, ~히 / run fast, sing loudly)",
                "형용사 끝에 -ly를 붙이면 부사가 돼요 (quick -> quickly / slow -> slowly)"
            ],
            "formulaCards": [
                {
                    "name": "명사의 짝꿍 형용사 (명사 앞 수식 & be동사 뒤 보어)",
                    "desc": "형용사는 사물이나 사람의 모양, 색, 성질을 나타냅니다. 명사 바로 앞에서 꾸며주거나 be동사 뒤에서 주어의 상태를 설명합니다.",
                    "formula": "형용사 + 명사 (a smart boy) / be동사 + 형용사 (He is smart)",
                    "rules": [
                        {"title": "명사 앞 수식", "detail": "a cute puppy, cold water, delicious pizza, blue sky"},
                        {"title": "be동사 뒤 상태 설명", "detail": "The room is quiet. / I am hungry. / She is happy."},
                        {"title": "감각동사 뒤", "detail": "look happy, sound good, smell sweet"}
                    ],
                    "examples": [
                        {"en": "She adopted a gentle and playful puppy yesterday.", "ko": "그녀는 어제 온순하고 장난기 많은 강아지 한 마리를 입양했다.", "point": "gentle과 playful이 명사 puppy를 앞에서 수식"},
                        {"en": "The weather is warm and sunny this afternoon.", "ko": "오늘 오후 날씨는 따뜻하고 화창하다.", "point": "be동사 is 뒤에서 주어 weather의 상태를 설명하는 형용사 warm, sunny"}
                    ],
                    "oxCompare": [
                        {"correct": "She is a beautiful singer.", "wrong": "She is a beautifully singer.", "reason": "명사 singer를 꾸며주는 자리는 부사가 아닌 형용사 beautiful을 써야 합니다."},
                        {"correct": "The soup tastes delicious.", "wrong": "The soup tastes deliciously.", "reason": "감각동사 taste 뒤에는 부사가 아닌 형용사 delicious가 옵니다."}
                    ],
                    "trap": "우리말 해석이 '~하게'로 되더라도 be동사나 감각동사 뒤에는 부사가 아닌 형용사를 써야 해요! looks happily (X) -> looks happy (O)",
                    "quizLink": "3단계 퀴즈 직결"
                },
                {
                    "name": "동사의 짝꿍 부사 (형용사 + -ly)",
                    "desc": "동사가 '어떻게' 일어나는지 방법을 설명하는 말입니다. 대부분의 형용사에 -ly를 붙여 만듭니다.",
                    "formula": "동사 + 부사 (run quickly) / 형용사 + -ly = 부사",
                    "rules": [
                        {"title": "기본 규칙", "detail": "quick -> quickly (빠르게) / slow -> slowly (느리게) / quiet -> quietly (조용히)"},
                        {"title": "자음 + y", "detail": "y를 i로 고치고 + -ly: happy -> happily / easy -> easily"},
                        {"title": "모양이 같은 부사", "detail": "fast (빠른/빨리), hard (단단한/열심히), early (이른/일찍)"}
                    ],
                    "examples": [
                        {"en": "The students listened to the teacher attentively.", "ko": "학생들은 선생님의 말씀을 주의 깊게 들었다.", "point": "부사 attentively가 동사 listened to를 수식"},
                        {"en": "Cheetahs can run very fast in the wild.", "ko": "치타는 야생에서 매우 빠르게 달릴 수 있다.", "point": "fast는 형용사와 부사의 형태가 같음 (fastly는 없는 단어)"}
                    ],
                    "oxCompare": [
                        {"correct": "He solved the math puzzle easily.", "wrong": "He solved the math puzzle easy.", "reason": "동사 solved를 꾸며주는 자리이므로 형용사 easy가 아닌 부사 easily를 씁니다."},
                        {"correct": "The horse runs very fast.", "wrong": "The horse runs very fastly.", "reason": "fast는 그 자체로 부사이므로 fastly라는 단어는 쓰지 않습니다."}
                    ],
                    "trap": "fastly는 없는 단어예요! fast는 '빠른'도 되고 '빨리'도 되는 다재다능한 단어랍니다!",
                    "quizLink": "3단계 퀴즈 직결"
                }
            ],
            "spottingDrills": [
                {
                    "id": "drill_1",
                    "sentence": "The swift cheetah runs very slow when it is resting under the shade.",
                    "underlined": ["swift cheetah", "runs very slow", "when it", "resting under"],
                    "wrongIndex": 1,
                    "correction": "runs very slowly",
                    "explanation": "동사 runs를 수식하여 '느리게 달린다'는 동작의 상태를 나타내야 하므로 형용사 slow 대신 부사 slowly를 써야 합니다.",
                    "conceptRef": "1단계 [공식 2: 동사의 짝꿍 부사 (형용사 + -ly)] 출제 연계",
                    "korean": "그 빠른 치타도 그늘 아래에서 쉴 때는 아주 느리게 달린다."
                },
                {
                    "id": "drill_2",
                    "sentence": "She is a beautifully girl with a bright smile on her face.",
                    "underlined": ["beautifully girl", "with a", "bright smile", "her face"],
                    "wrongIndex": 0,
                    "correction": "beautiful girl",
                    "explanation": "명사 girl을 앞에서 수식해야 하므로 부사 beautifully 대신 형용사 beautiful을 써야 합니다.",
                    "conceptRef": "1단계 [공식 1: 명사의 짝꿍 형용사] 출제 연계",
                    "korean": "그녀는 얼굴에 밝은 미소를 띤 아름다운 소녀이다."
                },
                {
                    "id": "drill_3",
                    "sentence": "The bright student solved the complicated puzzle very easy yesterday.",
                    "underlined": ["bright student", "solved the", "complicated puzzle", "very easy"],
                    "wrongIndex": 3,
                    "correction": "very easily",
                    "explanation": "동사 solved를 꾸며 '쉽게 해결했다'라는 의미를 나타내야 하므로 형용사 easy 대신 부사 easily를 써야 합니다.",
                    "conceptRef": "1단계 [공식 2: 동사의 짝꿍 부사 (형용사 + -ly)] 출제 연계",
                    "korean": "그 똑똑한 학생은 어제 복잡한 퍼즐을 매우 쉽게 풀었다."
                }
            ],
            "questions": [
                {
                    "q": "다음 문장의 빈칸에 들어갈 말로 가장 알맞은 것은?\nThe turtle walks very _____ on the beach.",
                    "options": ["slow", "slowly", "quick", "slowness", "slower"],
                    "ans": 1,
                    "exp": "동사 walks를 꾸며 '느리게 걷는다'를 나타내야 하므로 부사 slowly가 정답입니다.",
                    "conceptRef": "1단계 [공식 2: 동사의 짝꿍 부사 (형용사 + -ly)] 출제 연계"
                },
                {
                    "q": "다음 중 형용사와 부사의 연결이 바르지 않은 것은?",
                    "options": [
                        "kind -> kindly",
                        "quick -> quickly",
                        "happy -> happily",
                        "fast -> fastly",
                        "quiet -> quietly"
                    ],
                    "ans": 3,
                    "exp": "fast의 부사형은 fastly가 아니라 그대로 fast입니다.",
                    "conceptRef": "1단계 [공식 2: 동사의 짝꿍 부사 (형용사 + -ly)] 출제 연계"
                },
                {
                    "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\nThis fresh apple pie smells _____.",
                    "options": ["sweet", "sweetly", "sweetness", "sweeter", "very sweetly"],
                    "ans": 0,
                    "exp": "감각동사 smell 뒤에는 상태를 설명하는 형용사 보어 sweet이 와야 합니다.",
                    "conceptRef": "1단계 [공식 1: 명사의 짝꿍 형용사] 출제 연계"
                },
                {
                    "q": "다음 중 밑줄 친 단어의 품사가 '부사'인 문장은?",
                    "options": [
                        "She has a blue dress.",
                        "The little boy laughed loudly.",
                        "He is a kind person.",
                        "The tea is very hot.",
                        "This is a quiet library."
                    ],
                    "ans": 1,
                    "exp": "loudly는 동사 laughed를 꾸며주는 부사입니다. 나머지는 모두 명사를 수식하거나 보어로 쓰인 형용사입니다.",
                    "conceptRef": "1단계 [공식 2: 동사의 짝꿍 부사 (형용사 + -ly)] 출제 연계"
                },
                {
                    "q": "다음 중 어법상 올바른 문장은?",
                    "options": [
                        "He speaks English fluent.",
                        "She sang a song beautiful.",
                        "They study very hard for the test.",
                        "The dog barks very loud.",
                        "He drives a car careful."
                    ],
                    "ans": 2,
                    "exp": "hard는 '열심히'라는 뜻의 부사로 올바르게 쓰였습니다. (1: fluently, 2: beautifully, 4: loudly, 5: carefully)",
                    "conceptRef": "1단계 [공식 2: 동사의 짝꿍 부사 (형용사 + -ly)] 출제 연계"
                }
            ]
        },

        # -------------------------------------------------------------
        # UNIT 8: 기초 전치사와 기본 문장 완성 (장소·시간 in/on/at)
        # -------------------------------------------------------------
        {
            "unitNo": 8,
            "unitId": "lv0_u8",
            "legacyUnitNo": 208,
            "title": "기초 전치사와 기본 문장 완성 (장소·시간 in/on/at)",
            "part": "문장의 기초",
            "targetGrade": "초등 기초 / 입문",
            "summary": "장소와 시간을 나타내는 대표 전치사 in/on/at의 구별과 영어 기본 문장 어순 완성",
            "overview": "명사 앞(前)에 놓인다(置)고 해서 이름 붙은 '전치사(Preposition)'를 만나요! 특히 장소와 시간을 콕 집어 알려주는 in, on, at 삼총사는 크기와 범위에 따라 쓰임이 달라져요. 배운 품사들을 모아 [누가 + 하다 + 무엇을 + 어디서 + 언제] 멋진 영어 문장 어순을 완성해 봐요!",
            "keyTakeaways": [
                "장소 전치사: at (좁은 장소·점) < on (표면 위) < in (넓은 공간·내부)",
                "시간 전치사: at (시각: at 7:00) < on (날짜·요일: on Sunday) < in (월·계절·연도: in May)",
                "영어 문장의 황금 어순: [주어 + 동사 + 목적어 + 장소 + 시간]"
            ],
            "formulaCards": [
                {
                    "name": "장소의 in, on, at, under 공간 삼총사",
                    "desc": "위치와 장소를 나타내는 대표 전치사입니다. 좁은 지점은 at, 표면 접촉은 on, 공간 내부는 in을 씁니다.",
                    "formula": "at (특정 지점) / on (표면 접촉) / in (넓은 장소·공간 속)",
                    "rules": [
                        {"title": "at (점)", "detail": "at the bus stop, at the station, at home, at school"},
                        {"title": "on (선/면)", "detail": "on the desk, on the wall, on the second floor"},
                        {"title": "in (입체 공간/도시)", "detail": "in the box, in the room, in Seoul, in Korea"},
                        {"title": "under (아래)", "detail": "under the tree, under the bed"}
                    ],
                    "examples": [
                        {"en": "The yellow notebook is on the wooden desk.", "ko": "노란 공책은 원목 책상 위에 놓여 있다.", "point": "책상 표면에 접촉해 있으므로 전치사 on 사용"},
                        {"en": "We met our teacher at the library entrance.", "ko": "우리는 도서관 입구에서 선생님을 만났다.", "point": "특정 지점을 나타내므로 전치사 at 사용"}
                    ],
                    "oxCompare": [
                        {"correct": "My uncle lives in New York.", "wrong": "My uncle lives at New York.", "reason": "도시나 국가처럼 넓은 공간 앞에는 at 대신 in을 씁니다."},
                        {"correct": "The cat is sleeping under the chair.", "wrong": "The cat is sleeping on under the chair.", "reason": "전치사는 겹쳐 쓰지 않고 under 하나만 써야 합니다."}
                    ],
                    "trap": "집(home)이나 학교(school) 앞에는 좁은 지점의 개념으로 at을 많이 써요! at home, at school",
                    "quizLink": "3단계 퀴즈 직결"
                },
                {
                    "name": "시간의 at, on, in과 기본 문장 어순",
                    "desc": "시간의 단위에 따라 전치사가 결정됩니다. 짧은 시각은 at, 하루 단위(날짜/요일)는 on, 긴 시간(월/연도)은 in을 씁니다.",
                    "formula": "at + 시각 / on + 요일·날짜 / in + 월·계절·연도",
                    "rules": [
                        {"title": "at (시각)", "detail": "at 7 o'clock, at noon, at night"},
                        {"title": "on (특정 요일·날)", "detail": "on Monday, on May 5th, on my birthday, on Christmas Day"},
                        {"title": "in (월·계절·연도)", "detail": "in July, in winter, in 2026, in the morning"},
                        {"title": "문장 어순", "detail": "[주어 + 동사 + 목적어] + [장소] + [시간]"}
                    ],
                    "examples": [
                        {"en": "School starts at nine o'clock in the morning.", "ko": "학교는 아침 9시에 시작한다.", "point": "구체적 시각 앞에는 at nine o'clock, 하루 중 시간대 앞에는 in the morning"},
                        {"en": "We play soccer in the park on Saturday afternoons.", "ko": "우리는 토요일 오후마다 공원에서 축구를 한다.", "point": "요일 앞에는 on, 장소(in the park) + 시간(on Saturday) 어순 배치"}
                    ],
                    "oxCompare": [
                        {"correct": "My birthday is on August 15th.", "wrong": "My birthday is in August 15th.", "reason": "구체적인 날짜가 포함된 하루 단위 앞에는 in이 아니라 on을 씁니다."},
                        {"correct": "We wake up early in the morning.", "wrong": "We wake up early at the morning.", "reason": "in the morning은 관용적으로 in을 쓰는 표현입니다."}
                    ],
                    "trap": "월만 있으면 in July이지만, 날짜가 붙으면 on July 7th로 on을 써야 해요! 날짜가 대장!",
                    "quizLink": "3단계 퀴즈 직결"
                }
            ],
            "spottingDrills": [
                {
                    "id": "drill_1",
                    "sentence": "My family eats delicious dinner in seven o'clock every evening.",
                    "underlined": ["family eats", "dinner in", "seven o'clock", "every evening"],
                    "wrongIndex": 1,
                    "correction": "dinner at",
                    "explanation": "구체적인 시각(seven o'clock) 앞에는 전치사 in이 아니라 at을 써야 합니다.",
                    "conceptRef": "1단계 [공식 2: 시간의 at, on, in과 기본 문장 어순] 출제 연계",
                    "korean": "나의 가족은 매일 저녁 7시에 맛있는 저녁 식사를 한다."
                },
                {
                    "id": "drill_2",
                    "sentence": "My birthday party will be held at Friday afternoon with many friends.",
                    "underlined": ["birthday party", "will be held", "at Friday", "many friends"],
                    "wrongIndex": 2,
                    "correction": "on Friday",
                    "explanation": "특정 요일(Friday)을 나타낼 때는 전치사 at이 아니라 on을 써야 올바릅니다.",
                    "conceptRef": "1단계 [공식 2: 시간의 at, on, in과 기본 문장 어순] 출제 연계",
                    "korean": "나의 생일 파티는 많은 친구들과 함께 금요일 오후에 열릴 것이다."
                },
                {
                    "id": "drill_3",
                    "sentence": "The lazy kitten is sleeping peacefully at the soft sofa in the living room.",
                    "underlined": ["lazy kitten", "sleeping peacefully", "at the soft sofa", "living room"],
                    "wrongIndex": 2,
                    "correction": "on the soft sofa",
                    "explanation": "소파 표면 위에 누워 자는 것이므로 특정 지점을 나타내는 at 대신 표면 접촉 전치사 on을 써야 합니다.",
                    "conceptRef": "1단계 [공식 1: 장소의 in, on, at, under 공간 삼총사] 출제 연계",
                    "korean": "게으른 새끼 고양이는 거실의 푹신한 소파 위에서 평화롭게 자고 있다."
                }
            ],
            "questions": [
                {
                    "q": "다음 빈칸에 들어갈 전치사로 가장 알맞은 것은?\nMy brother was born _____ May 5th, 2015.",
                    "options": ["at", "in", "on", "to", "for"],
                    "ans": 2,
                    "exp": "구체적인 날짜(5월 5일)를 나타낼 때는 요일과 날짜에 쓰는 전치사 on이 정답입니다.",
                    "conceptRef": "1단계 [공식 2: 시간의 at, on, in과 기본 문장 어순] 출제 연계"
                },
                {
                    "q": "다음 중 장소 전치사의 쓰임이 어색한 문장은?",
                    "options": [
                        "The apples are in the basket.",
                        "The picture is on the wall.",
                        "My sister is at home.",
                        "They live at London.",
                        "The dog is under the tree."
                    ],
                    "ans": 3,
                    "exp": "런던(London)과 같은 대도시 앞에는 at 대신 넓은 장소를 나타내는 in을 써야 합니다 (in London).",
                    "conceptRef": "1단계 [공식 1: 장소의 in, on, at, under 공간 삼총사] 출제 연계"
                },
                {
                    "q": "다음 빈칸 (A)와 (B)에 들어갈 전치사가 바르게 짝지어진 것은?\n• The train arrives (A)_____ 3:30 p.m.\n• We go skiing (B)_____ winter.",
                    "options": [
                        "at - in",
                        "on - in",
                        "in - at",
                        "at - on",
                        "on - at"
                    ],
                    "ans": 0,
                    "exp": "시각 앞에는 at 3:30, 계절 앞에는 in winter를 씁니다.",
                    "conceptRef": "1단계 [공식 2: 시간의 at, on, in과 기본 문장 어순] 출제 연계"
                },
                {
                    "q": "주어진 단어들을 올바른 영어 어순으로 바르게 배열한 것은?\n[단어] soccer / in the park / we / played / yesterday",
                    "options": [
                        "We soccer played in the park yesterday.",
                        "We played soccer in the park yesterday.",
                        "Yesterday played soccer we in the park.",
                        "We played in the park soccer yesterday.",
                        "Soccer we played yesterday in the park."
                    ],
                    "ans": 1,
                    "exp": "영어의 기본 문장 어순은 [주어(We) + 동사(played) + 목적어(soccer) + 장소(in the park) + 시간(yesterday)]입니다.",
                    "conceptRef": "1단계 [공식 2: 시간의 at, on, in과 기본 문장 어순] 출제 연계"
                },
                {
                    "q": "다음 중 밑줄 친 전치사의 쓰임이 올바른 문장은?",
                    "options": [
                        "I usually wake up on 7:00 a.m.",
                        "Christmas is in December 25th.",
                        "Leaves turn red at autumn.",
                        "She was born in 2012.",
                        "See you at Monday!"
                    ],
                    "ans": 3,
                    "exp": "연도 앞에는 전치사 in을 쓰는 것이 맞습니다 (in 2012). (1: at 7:00, 2: on December 25th, 3: in autumn, 5: on Monday)",
                    "conceptRef": "1단계 [공식 2: 시간의 at, on, in과 기본 문장 어순] 출제 연계"
                }
            ]
        }
    ]
}

if __name__ == '__main__':
    print(f"Loaded Level 0 with {len(LEVEL_0_DATA['units'])} units successfully!")
