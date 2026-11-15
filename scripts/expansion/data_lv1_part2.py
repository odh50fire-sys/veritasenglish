# -*- coding: utf-8 -*-
"""
Level 1 (중1 문법) Units 15 ~ 20.
"""

LV1_PART2 = [
    # Unit 15: 비교급과 최상급 규칙/불규칙
    {
        "unitNo": 15,
        "unitId": "lv1_u15",
        "legacyUnitNo": 15,
        "title": "비교급과 최상급 규칙/불규칙 변화",
        "part": "비교 구문",
        "targetGrade": "중1 내신 대비",
        "summary": "둘 중 더 우월함을 나타내는 비교급(-er/more ~ than)과 셋 이상 중 최고를 나타내는 최상급(the -est/most)의 형태와 불규칙 변화",
        "overview": "'형보다 키가 더 커', '우리 반에서 가장 빨라'처럼 대상을 비교할 때 쓰는 비교급과 최상급이에요! -er/-est를 붙이는 규칙과 more/most를 붙이는 긴 단어, 그리고 good-better-best 같은 특별한 불규칙 변화를 완벽히 마스터해 봅시다!",
        "keyTakeaways": [
            "비교급: 형용사/부사-er + than (~보다 더 …한) | 3음절 이상: more + 원급 + than",
            "최상급: the + 형용사/부사-est (가장 …한) | 3음절 이상: the most + 원급",
            "불규칙 변화: good/well ➔ better ➔ best | bad/ill ➔ worse ➔ worst | many/much ➔ more ➔ most"
        ],
        "formulaCards": [
            {
                "name": "비교급과 최상급 기본 공식",
                "formula": "비교급 + than (~보다 더 …한) | the + 최상급 + in/of (가장 …한)",
                "examples": [
                    {
                        "en": "Mount Everest is higher than any other mountain in the world.",
                        "ko": "에베레스트산은 세계의 어떤 다른 산보다도 더 높다.",
                        "point": "비교급 higher 뒤에는 기준을 나타내는 than이 옵니다."
                    },
                    {
                        "en": "She is the smartest student in our elementary school class.",
                        "ko": "그녀는 우리 초등학교 학급에서 가장 똑똑한 학생이다.",
                        "point": "최상급 smartest 앞에는 정관사 the가 반드시 붙습니다."
                    }
                ],
                "oxCompare": {
                    "o": "He is more careful than his brother.",
                    "x": "He is carefuller than his brother.",
                    "comment": "careful처럼 2음절 이상의 긴 단어는 more careful로 씁니다."
                },
                "trap": "최상급 뒤의 범위가 장소/단수명사이면 in, 구성원/복수명사이면 of를 씁니다.",
                "quizLink": "than 뒤에는 비교 대상이 오며, the + 최상급은 유일무이한 최고를 나타냅니다."
            },
            {
                "name": "시험 단골 불규칙 비교급·최상급",
                "formula": "good/well ➔ better ➔ best | bad ➔ worse ➔ worst",
                "examples": [
                    {
                        "en": "His English speaking skills are much better than mine.",
                        "ko": "그의 영어 말하기 실력은 내 실력보다 훨씬 더 좋다.",
                        "point": "good의 비교급은 gooder가 아니라 better입니다."
                    },
                    {
                        "en": "This is the worst storm that hit our town this year.",
                        "ko": "이것은 올해 우리 마을을 강타한 최악의 폭풍이다.",
                        "point": "bad의 최상급은 worst입니다."
                    }
                ],
                "oxCompare": {
                    "o": "Health is better than wealth.",
                    "x": "Health is gooder than wealth.",
                    "comment": "good의 비교급은 불규칙 형태인 better입니다."
                },
                "trap": "비교급을 강조할 때는 very가 아니라 much, even, still, far, a lot을 씁니다.",
                "quizLink": "very better (X) ➔ much better (O)는 내신 객관식 1순위 오답 판별 공식입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u15_d1",
                "missionTitle": "미션 1: 최상급 정관사 the 누락 오류 수정",
                "sentence": "Jupiter is largest planet in our entire solar system.",
                "korean": "목성은 우리 전체 태양계에서 가장 큰 행성이다.",
                "underlined": ["Jupiter is", "largest planet", "in our entire", "solar system"],
                "wrongIndex": 1,
                "correction": "the largest planet",
                "explanation": "형용사의 최상급 앞에는 정관사 the가 필수적이므로 the largest planet이 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 비교급과 최상급 기본] 출제 연계"
            },
            {
                "id": "lv1_u15_d2",
                "missionTitle": "미션 2: 불규칙 비교급 어형 오류 수정",
                "sentence": "My math score was gooder than my science score on the midterm.",
                "korean": "중간고사에서 내 수학 점수는 과학 점수보다 더 좋았다.",
                "underlined": ["My math score", "was gooder than", "my science score", "on the midterm"],
                "wrongIndex": 1,
                "correction": "was better than",
                "explanation": "good의 비교급은 gooder가 아니라 불규칙 형태인 better입니다.",
                "conceptRef": "1단계 [공식 2: 시험 단골 불규칙] 출제 연계"
            },
            {
                "id": "lv1_u15_d3",
                "missionTitle": "미션 3: 비교급 강조 부사 very 오용 수정",
                "sentence": "The weather today is very warmer than it was yesterday.",
                "korean": "오늘 날씨는 어제 날씨보다 훨씬 더 따뜻하다.",
                "underlined": ["The weather today", "is very warmer", "than it was", "yesterday"],
                "wrongIndex": 1,
                "correction": "is much warmer",
                "explanation": "비교급 warmer 앞에는 very를 쓸 수 없으며, much, even, still, far 등으로 강조해야 합니다.",
                "conceptRef": "1단계 [공식 2: 시험 단골 불규칙] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 중 비교급-최상급 변화가 올바른 것은?",
                "options": [
                    "happy - more happy - most happy",
                    "fast - faster - fastest",
                    "good - gooder - goodest",
                    "difficult - difficulter - difficultest",
                    "bad - bader - badest"
                ],
                "ans": 2,
                "exp": "fast의 비교급-최상급은 faster - fastest가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 비교급과 최상급 기본]"
            },
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'Seoul is ______ than Busan.'",
                "options": ["big", "biger", "bigger", "biggest", "more big"],
                "ans": 3,
                "exp": "big은 단모음+단자음이므로 g를 덧붙인 bigger than이 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 비교급과 최상급 기본]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 알맞은 말은?\n\n'He is ______ runner of the five boys.'",
                "options": ["fastest", "the fastest", "faster", "more fast", "the faster"],
                "ans": 2,
                "exp": "5명 중에서 가장 빠른 주자이므로 정관사 the + 최상급 the fastest가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 비교급과 최상급 기본]"
            },
            {
                "q": "다음 밑줄 친 부분 중 비교급을 강조하는 말로 알맞지 않은 것은?\n\n'This car is ______ faster than that one.'",
                "options": ["much", "even", "still", "far", "very"],
                "ans": 5,
                "exp": "비교급은 very로 수식할 수 없으며 much, even, still, far, a lot으로 수식합니다.",
                "conceptRef": "1단계 [공식 2: 시험 단골 불규칙]"
            },
            {
                "q": "'이 영화는 저 영화보다 더 흥미진진하다.'를 바르게 영작한 것은?",
                "options": [
                    "This movie is interestinger than that one.",
                    "This movie is more interesting than that one.",
                    "This movie is most interesting than that one.",
                    "This movie is as interesting than that one.",
                    "This movie is very interesting than that one."
                ],
                "ans": 2,
                "exp": "interesting은 3음절 이상이므로 more interesting than이 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 비교급과 최상급 기본]"
            }
        ]
    },

    # Unit 16: 시간의 접속사 when, before, after, while
    {
        "unitNo": 16,
        "unitId": "lv1_u16",
        "legacyUnitNo": 16,
        "title": "시간의 접속사 when, before, after, while",
        "part": "접속사의 확장",
        "targetGrade": "중1 내신 대비",
        "summary": "시간의 흐름과 순서를 나타내는 부사절 접속사 when(~할 때), before(~하기 전에), after(~한 후에), while(~하는 동안에)의 활용",
        "overview": "'내가 집에 왔을 때', '밥 먹기 전에'처럼 어떤 일이 일어난 시간적 배경을 설명해 주는 부사절 접속사들이에요! 주절과 부사절의 위치에 따른 콤마(,) 사용법과 중등 내신 핵심 어순 규칙을 배워봅시다!",
        "keyTakeaways": [
            "when: ~할 때 | while: ~하는 동안에 (주로 진행형과 결합)",
            "before: ~하기 전에 | after: ~한 후에",
            "접속사절이 문장 앞에 오면 콤마(,)를 찍는다 (When S + V, S + V)"
        ],
        "formulaCards": [
            {
                "name": "시간 접속사의 위치와 콤마 공식",
                "formula": "접속사 + S + V, S + V (콤마 필수) | S + V + 접속사 + S + V (콤마 없음)",
                "examples": [
                    {
                        "en": "When I arrived home, my mother was cooking dinner.",
                        "ko": "내가 집에 도착했을 때, 어머니는 저녁을 요리하고 계셨다.",
                        "point": "부사절(When I arrived home)이 앞에 오면 뒤에 콤마(,)를 찍습니다."
                    },
                    {
                        "en": "Please wash your hands before you eat your lunch.",
                        "ko": "점심을 먹기 전에 손을 깨끗이 씻으렴.",
                        "point": "before 절이 주절 뒤에 올 때는 콤마를 찍지 않습니다."
                    }
                ],
                "oxCompare": {
                    "o": "After I finished my homework, I went to bed.",
                    "x": "After I finished my homework I went to bed.",
                    "comment": "접속사절이 주절보다 먼저 나올 때는 콤마(,)로 두 절을 명확히 구분해야 합니다."
                },
                "trap": "while 뒤에는 주로 진행형(was/were V-ing)이 와서 긴 동작을 나타냅니다.",
                "quizLink": "when, before, after 뒤에는 반드시 '주어 + 동사'를 갖춘 완전한 절이 옵니다."
            },
            {
                "name": "while의 진행 의미와 when의 순간 의미",
                "formula": "while + S + be V-ing (~하는 동안에) vs when + S + 과거동사 (~했을 때)",
                "examples": [
                    {
                        "en": "The telephone rang loudly while I was taking a shower.",
                        "ko": "내가 샤워를 하고 있던 동안에 전화벨이 시끄럽게 울렸다.",
                        "point": "샤워라는 지속적인 동작 동안에 일어난 일이므로 while + 진행형을 씁니다."
                    },
                    {
                        "en": "I was very surprised when I saw the huge bear.",
                        "ko": "내가 거대한 곰을 보았을 때 나는 몹시 놀랐다.",
                        "point": "곰을 본 순간적인 사건에는 when을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He fell asleep while he was reading a book.",
                    "x": "He fell asleep before he was reading a book.",
                    "comment": "책을 읽고 있는 '도중에' 잠이 들었으므로 while이 문맥상 자연스럽습니다."
                },
                "trap": "while은 전치사 during과 뜻이 같지만, during 뒤에는 명사구, while 뒤에는 '주어+동사'가 옵니다.",
                "quizLink": "while + S + V vs during + 명사구는 중·고등 시험 전 단원 공통 킬러입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u16_d1",
                "missionTitle": "미션 1: 시간 접속사절 콤마 누락 오류 수정",
                "sentence": "When the school bell rang all students rushed out to the playground.",
                "korean": "학교 종이 울렸을 때 모든 학생이 운동장으로 뛰어나갔다.",
                "underlined": ["When the school bell rang", "all students", "rushed out", "to the playground"],
                "wrongIndex": 0,
                "correction": "When the school bell rang,",
                "explanation": "부사절이 문두에 올 때는 주절과 구분하기 위해 반드시 절 끝에 콤마(,)를 찍어야 합니다.",
                "conceptRef": "1단계 [공식 1: 시간 접속사의 위치와 콤마] 출제 연계"
            },
            {
                "id": "lv1_u16_d2",
                "missionTitle": "미션 2: 시간 접속사 절 vs 전치사 혼동",
                "sentence": "I listened to my favorite songs during I was cleaning my room.",
                "korean": "나는 내 방을 청소하는 동안 좋아하는 노래들을 들었다.",
                "underlined": ["I listened to", "my favorite songs", "during I was cleaning", "my room"],
                "wrongIndex": 2,
                "correction": "while I was cleaning",
                "explanation": "뒤에 주어+동사(I was cleaning)를 갖춘 절이 오므로 전치사 during 대신 접속사 while을 써야 합니다.",
                "conceptRef": "1단계 [공식 2: while과 when의 차이] 출제 연계"
            },
            {
                "id": "lv1_u16_d3",
                "missionTitle": "미션 3: 시간 순서 접속사 after vs before 혼동",
                "sentence": "Brush your teeth after you eat meals, not before you eat.",
                "korean": "식사하기 전에 닦지 말고 식사한 후에 이를 닦아라.",
                "underlined": ["Brush your teeth", "after you eat meals,", "not before", "you eat"],
                "wrongIndex": 1, # Wait, this sentence is correct! Let's make an error in underlined:
                "correction": "after you eat meals,"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 접속사로 가장 알맞은 것은?\n\n'Turn off the light ______ you leave the room.'",
                "options": ["before", "after", "while", "during", "because"],
                "ans": 1,
                "exp": "방을 떠나기 '전에' 불을 끄라는 문맥이므로 before가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 시간 접속사의 위치와 콤마]"
            },
            {
                "q": "다음 빈칸에 들어갈 접속사로 알맞은 것은?\n\n'Someone knocked on the door ______ I was cooking dinner.'",
                "options": ["during", "while", "before", "after", "since"],
                "ans": 2,
                "exp": "뒤에 주어+진행형 동사(I was cooking)가 오므로 접속사 while이 정답입니다.",
                "conceptRef": "1단계 [공식 2: while과 when의 차이]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "When I was young, I lived in Daegu.",
                    "She went to bed after she finished her work.",
                    "I listened to the radio while I was walking.",
                    "Don't talk during you are eating food.",
                    "Wash your hands before you eat."
                ],
                "ans": 4,
                "exp": "you are eating은 주어+동사 절이므로 전치사 during 대신 접속사 while을 써야 합니다.",
                "conceptRef": "1단계 [공식 2: while과 when의 차이]"
            },
            {
                "q": "'내가 그를 만났을 때, 그는 활짝 웃고 있었다.'를 바르게 영작한 것은?",
                "options": [
                    "When I met him, he was smiling brightly.",
                    "When I meet him, he was smiling brightly.",
                    "While I met him, he is smiling brightly.",
                    "Before I met him, he was smiling brightly.",
                    "When I met him he was smiling brightly."
                ],
                "ans": 1,
                "exp": "과거시제 met과 콤마(,)가 바르게 들어간 When I met him, he was smiling brightly가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 시간 접속사의 위치와 콤마]"
            },
            {
                "q": "다음 괄호 안에서 알맞은 접속사가 차례대로 짝지어진 것은?\n\n- 'Clean your desk (before / after) you start studying.'\n- 'I felt happy (when / while) I received the letter.'",
                "options": ["before - when", "after - when", "before - while", "after - while", "while - when"],
                "ans": 1,
                "exp": "공부를 시작하기 전에(before), 편지를 받았을 때(when)가 문맥상 자연스럽습니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    }
]

# Fix drill 3 for Unit 16
LV1_PART2[1]["spottingDrills"][2] = {
    "id": "lv1_u16_d3",
    "missionTitle": "미션 3: 시간 순서 접속사 after vs before 혼동",
    "sentence": "You must wash your hands after you eat dinner with dirty hands.",
    "korean": "더러운 손으로 저녁을 먹기 전에 손을 씻어야 한다.",
    "underlined": ["You must wash", "your hands after", "you eat dinner", "with dirty hands"],
    "wrongIndex": 1,
    "correction": "your hands before",
    "explanation": "식사를 하기 전에 손을 씻어야 하므로 after 대신 before를 써야 합니다.",
    "conceptRef": "1단계 [공식 1: 시간 접속사의 위치와 콤마] 출제 연계"
}

print("LV1 part2 loaded: Units 15 & 16")
