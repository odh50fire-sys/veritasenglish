# -*- coding: utf-8 -*-
"""
Level 1 (중1 문법) Units 9 ~ 14.
"""

LV1_PART1 = [
    # Unit 9: 과거진행형과 진행형 불가 동사
    {
        "unitNo": 9,
        "unitId": "lv1_u9",
        "legacyUnitNo": 9,
        "title": "과거진행형과 진행형 불가 상태동사",
        "part": "시제의 확장",
        "targetGrade": "중1 내신 대비",
        "summary": "과거의 특정 시점에 진행 중이던 동작(was/were + V-ing)과 감정·소유를 나타내어 진행형을 쓰지 않는 동사",
        "overview": "'어제 그 시간에 나 공부하던 중이었어'처럼 과거의 한 시점에 계속되고 있던 동작을 나타낼 때는 was/were + V-ing를 써요. 반면 like나 have처럼 상태를 나타내는 동사는 진행형을 쓸 수 없다는 중1 시험 필수 함정을 마스터해 봅시다!",
        "keyTakeaways": [
            "과거진행형: 주어 + was / were + 동사원형-ing (과거에 ~하고 있던 중이었다)",
            "부정문: was/were not + V-ing | 의문문: Was/Were + 주어 + V-ing?",
            "진행형 불가 동사: 상태/소유(have, belong), 감정(like, love, hate), 인식(know, want)"
        ],
        "formulaCards": [
            {
                "name": "과거진행형 기본 공식",
                "formula": "주어 + was/were + V-ing (그때 ~하고 있던 중이었다)",
                "examples": [
                    {
                        "en": "I was studying English at seven o'clock yesterday evening.",
                        "ko": "나는 어제 저녁 7시에 영어를 공부하고 있던 중이었다.",
                        "point": "과거의 구체적 시점(at seven o'clock yesterday)에 진행 중인 동작은 was studying입니다."
                    },
                    {
                        "en": "They were playing basketball on the school court when it began to rain.",
                        "ko": "비가 내리기 시작했을 때 그들은 학교 코트에서 농구를 하고 있던 중이었다.",
                        "point": "과거의 다른 사건이 일어났을 때 진행 중이던 일에 were playing을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "She was listening to music then.",
                    "x": "She is listening to music then.",
                    "comment": "과거 시점인 then(그때)이 있으므로 is가 아니라 was를 써야 합니다."
                },
                "trap": "have가 '먹다'나 '시간을 보내다'의 동작 의미일 때는 진행형이 가능합니다 (having lunch).",
                "quizLink": "단순 과거는 완료된 사실, 과거진행형은 '그 순간 진행 중이었던 생생한 동작'을 강조합니다."
            },
            {
                "name": "진행형으로 쓸 수 없는 상태동사",
                "formula": "소유(have), 감정(like/love), 인지(know/want) ➔ 진행형 불가",
                "examples": [
                    {
                        "en": "She has a cute white puppy in her house.",
                        "ko": "그녀는 집에 귀여운 흰색 강아지 한 마리를 가지고 있다(키운다).",
                        "point": "소유를 나타내는 have는 진행형(is having)으로 쓰지 않고 현재형 has를 씁니다."
                    },
                    {
                        "en": "I know the answer to this difficult math question.",
                        "ko": "나는 이 어려운 수학 질문의 답을 알고 있다.",
                        "point": "know는 인지 상태를 나타내므로 I am knowing으로 쓰지 않습니다."
                    }
                ],
                "oxCompare": {
                    "o": "He likes classical music very much.",
                    "x": "He is liking classical music very much.",
                    "comment": "like는 감정 상태를 나타내므로 진행형을 쓰지 않습니다."
                },
                "trap": "I am having breakfast처럼 '먹다'의 뜻일 때는 진행형이 완벽히 가능합니다.",
                "quizLink": "내신 시험에서 have/know/like 뒤에 -ing를 붙여놓은 보기는 대표적인 오답 함정입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u9_d1",
                "missionTitle": "미션 1: 상태동사 소유 have의 진행형 불가 오류",
                "sentence": "My uncle is having three luxury cars in his garage.",
                "korean": "우리 삼촌은 차고에 세 대의 고급 승용차를 소유하고 계신다.",
                "underlined": ["My uncle", "is having", "three luxury cars", "in his garage"],
                "wrongIndex": 1,
                "correction": "has",
                "explanation": "소유를 나타내는 have는 진행형을 쓸 수 없으므로 3인칭 단수 현재형 has로 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 진행형 불가 상태동사] 출제 연계"
            },
            {
                "id": "lv1_u9_d2",
                "missionTitle": "미션 2: 과거 특정 시점 진행형 be동사 수일치",
                "sentence": "We was watching a movie when the power went out.",
                "korean": "정전이 되었을 때 우리는 영화를 보고 있던 중이었다.",
                "underlined": ["We was watching", "a movie", "when the power", "went out"],
                "wrongIndex": 0,
                "correction": "We were watching",
                "explanation": "복수 주어 We에 맞는 과거 be동사는 was가 아니라 were가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 과거진행형 기본 공식] 출제 연계"
            },
            {
                "id": "lv1_u9_d3",
                "missionTitle": "미션 3: 인지동사 know의 진행형 오류 수정",
                "sentence": "I am knowing his secret telephone number already.",
                "korean": "나는 이미 그의 비밀 전화번호를 알고 있는 상태이다.",
                "underlined": ["I am knowing", "his secret", "telephone number", "already"],
                "wrongIndex": 0,
                "correction": "I know",
                "explanation": "know는 인지 상태를 나타내는 동사로 진행형을 쓰지 않으므로 I know로 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 진행형 불가 상태동사] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 알맞은 말은?\n\n'What ______ you doing at eight last night?'",
                "options": ["was", "were", "did", "are", "do"],
                "ans": 2,
                "exp": "last night과 doing이 있고 주어가 you이므로 과거진행형 were you doing이 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 과거진행형 기본 공식]"
            },
            {
                "q": "다음 중 어법상 진행형으로 쓸 수 없는 문장은?",
                "options": [
                    "She is eating an apple.",
                    "They are running in the park.",
                    "I am wanting a cup of warm tea.",
                    "He is writing a letter.",
                    "We are singing a song."
                ],
                "ans": 3,
                "exp": "want는 바람/상태를 나타내는 동사이므로 진행형(am wanting)으로 쓸 수 없고 I want로 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 진행형 불가 상태동사]"
            },
            {
                "q": "다음 괄호 안의 단어를 문맥에 맞게 알맞은 형태로 바꾼 것은?\n\n'When I called him, he (sleep) on the sofa.'",
                "options": ["slept", "was sleeping", "is sleeping", "sleeps", "were sleeping"],
                "ans": 2,
                "exp": "전화했을 때 자고 있던 중이었으므로 과거진행형 was sleeping이 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 과거진행형 기본 공식]"
            },
            {
                "q": "다음 밑줄 친 부분 중 어법상 올바른 것은?",
                "options": [
                    "She is loving cats very much.",
                    "He is having lunch with his friends.",
                    "They are knowing the teacher's name.",
                    "I am having a big bicycle.",
                    "We are liking this pizza."
                ],
                "ans": 2,
                "exp": "having lunch에서 have는 '먹다'라는 구체적 동작을 뜻하므로 진행형이 완벽히 가능합니다.",
                "conceptRef": "1단계 [공식 2: 진행형 불가 상태동사]"
            },
            {
                "q": "'그는 어제 5시에 바이올린을 연습하고 있지 않았다.'를 바르게 영작한 것은?",
                "options": [
                    "He was not practicing the violin at five yesterday.",
                    "He did not practicing the violin at five yesterday.",
                    "He is not practicing the violin at five yesterday.",
                    "He were not practicing the violin at five yesterday.",
                    "He not practicing the violin at five yesterday."
                ],
                "ans": 1,
                "exp": "과거진행형의 부정문은 was/were not + V-ing이므로 He was not practicing이 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 과거진행형 기본 공식]"
            }
        ]
    },

    # Unit 10: 미래 시제 will과 be going to
    {
        "unitNo": 10,
        "unitId": "lv1_u10",
        "legacyUnitNo": 10,
        "title": "미래 시제 will과 be going to",
        "part": "시제의 확장",
        "targetGrade": "중1 내신 대비",
        "summary": "앞으로 일어날 미래의 일과 예정된 계획을 나타내는 will과 be going to의 형태 및 뉘앙스 차이",
        "overview": "미래의 일을 표현하는 대표적인 두 가지 방식이 있어요. 말하는 순간 즉흥적으로 결정한 의지나 예측은 will! 사전에 미리 계획하고 준비해 둔 예정은 be going to를 씁니다. 두 표현의 형태와 부정/의문문을 완벽히 정복해 봅시다!",
        "keyTakeaways": [
            "will + 동사원형: 즉흥적 결심, 미래에 대한 막연한 예측 (~할 것이다)",
            "be going to + 동사원형: 이미 계획된 일, 눈앞의 징조에 따른 확신 (~할 예정이다)",
            "부정: will not (won't) + 동원 / be not going to + 동원"
        ],
        "formulaCards": [
            {
                "name": "조동사 will의 쓰임과 규칙",
                "formula": "주어 + will + 동사원형 | 부정: will not (won't) + 동사원형",
                "examples": [
                    {
                        "en": "I will help you with your heavy luggage right now.",
                        "ko": "내가 지금 당장 너의 무거운 짐을 도와줄게.",
                        "point": "말하는 순간 즉흥적으로 돕겠다고 결심할 때는 will을 씁니다."
                    },
                    {
                        "en": "It will rain tomorrow morning according to the weather report.",
                        "ko": "일기예보에 따르면 내일 아침에 비가 올 것이다.",
                        "point": "미래에 대한 일반적 예측에 will rain을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He will come to the party tonight.",
                    "x": "He will comes to the party tonight.",
                    "comment": "조동사 will 뒤에는 주어의 인칭과 상관없이 무조건 동사원형 come을 씁니다."
                },
                "trap": "will의 줄임말 부정은 willn't가 아니라 won't입니다.",
                "quizLink": "Will you ~?는 '너 ~해 줄래?'라는 정중한 요청 표현으로도 쓰입니다."
            },
            {
                "name": "be going to의 계획된 미래",
                "formula": "주어 + am/are/is + going to + 동사원형 (~할 예정이다)",
                "examples": [
                    {
                        "en": "We are going to visit our grandparents in Busan this weekend.",
                        "ko": "우리는 이번 주말에 부산에 계신 조부모님을 방문할 예정이다.",
                        "point": "이미 사전에 계획된 주말 일정에는 are going to visit을 씁니다."
                    },
                    {
                        "en": "Look at those dark clouds; it is going to rain soon.",
                        "ko": "저 먹구름을 봐; 곧 비가 쏟아질 것 같아.",
                        "point": "눈앞에 분명한 징조(dark clouds)가 있을 때는 be going to를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "She is going to buy a new laptop tomorrow.",
                    "x": "She is going to buying a new laptop tomorrow.",
                    "comment": "be going to 뒤에는 -ing가 아니라 반드시 동사원형 buy를 써야 합니다."
                },
                "trap": "be going to a place(장소로 가다)와 be going to + 동사원형(~할 예정이다)을 구별하세요.",
                "quizLink": "be going to의 be동사는 주어에 따라 am, are, is로 바뀝니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u10_d1",
                "missionTitle": "미션 1: 조동사 will 뒤 동사원형 원칙 오류",
                "sentence": "My uncle will visits us from Canada next month.",
                "korean": "우리 삼촌은 다음 달에 캐나다에서 우리를 방문하실 것이다.",
                "underlined": ["My uncle", "will visits us", "from Canada", "next month"],
                "wrongIndex": 1,
                "correction": "will visit us",
                "explanation": "조동사 will 뒤에는 3인칭 단수 주어여도 동사원형인 visit을 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 조동사 will의 쓰임] 출제 연계"
            },
            {
                "id": "lv1_u10_d2",
                "missionTitle": "미션 2: be going to 뒤 동사원형 형태 수정",
                "sentence": "They are going to holding a birthday party this Saturday.",
                "korean": "그들은 이번 주 토요일에 생일 파티를 열 예정이다.",
                "underlined": ["They are", "going to holding", "a birthday party", "this Saturday"],
                "wrongIndex": 1,
                "correction": "going to hold",
                "explanation": "be going to 뒤에는 -ing 형태가 아닌 동사원형 hold가 와야 합니다.",
                "conceptRef": "1단계 [공식 2: be going to의 계획된 미래] 출제 연계"
            },
            {
                "id": "lv1_u10_d3",
                "missionTitle": "미션 3: be going to의 be동사 수일치 오류",
                "sentence": "Tom and Minho is going to study for the science test tonight.",
                "korean": "톰과 민호는 오늘 밤 과학 시험공부를 할 예정이다.",
                "underlined": ["Tom and Minho is", "going to study", "for the science test", "tonight"],
                "wrongIndex": 0,
                "correction": "Tom and Minho are",
                "explanation": "주어가 Tom and Minho로 복수이므로 is가 아니라 are going to가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: be going to의 계획된 미래] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'I think it ______ sunny tomorrow.'",
                "options": ["will is", "will be", "is will", "will being", "was"],
                "ans": 2,
                "exp": "조동사 will 뒤에는 be동사의 원형인 be가 와야 합니다.",
                "conceptRef": "1단계 [공식 1: 조동사 will의 쓰임]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "I will call you later.",
                    "She is going to bake cookies.",
                    "We won't go to school tomorrow.",
                    "They are going to playing tennis.",
                    "Are you going to join us?"
                ],
                "ans": 4,
                "exp": "be going to 뒤에는 동사원형이 와야 하므로 playing 대신 play가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: be going to의 계획된 미래]"
            },
            {
                "q": "'우리는 내일 아침 일찍 출발할 예정이다.'를 바르게 영작한 것은?",
                "options": [
                    "We will to leave early tomorrow morning.",
                    "We are going to leave early tomorrow morning.",
                    "We is going to leave early tomorrow morning.",
                    "We are going to leaving early tomorrow morning.",
                    "We won't leave early tomorrow morning."
                ],
                "ans": 2,
                "exp": "복수 주어 We + are going to + 동사원형 leave가 올바른 구조입니다.",
                "conceptRef": "1단계 [공식 2: be going to의 계획된 미래]"
            },
            {
                "q": "다음 대화의 빈칸에 알맞은 대답은?\n\nA: 'Will you come to my house this evening?'\nB: 'Yes, ______.'",
                "options": ["I do", "I will", "I am", "I won't", "you will"],
                "ans": 2,
                "exp": "Will you ~? 질문에 대한 긍정 대답은 Yes, I will.입니다.",
                "conceptRef": "1단계 [공식 1: 조동사 will의 쓰임]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 말이 차례대로 바르게 짝지어진 것은?\n\n- 'I ______ not go to the movie.'\n- 'She ______ going to read a book.'",
                "options": ["will - is", "is - will", "will - are", "are - is", "do - does"],
                "ans": 1,
                "exp": "첫 번째는 will not go, 두 번째는 She is going to read가 알맞습니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    },

    # Unit 11: 2형식 감각동사 + 형용사 보어
    {
        "unitNo": 11,
        "unitId": "lv1_u11",
        "legacyUnitNo": 11,
        "title": "2형식 감각동사 + 형용사 보어",
        "part": "문장의 형식",
        "targetGrade": "중1 내신 대비",
        "summary": "오감을 나타내는 감각동사(look, sound, smell, taste, feel) 뒤에 부사가 아닌 형용사가 보어로 오는 핵심 내신 포인트",
        "overview": "'행복하게 보인다'라고 해석되지만 영어로는 happily가 아니라 happy를 써야 해요! 오감(시각·청각·후각·미각·촉각)을 나타내는 감각동사 뒤에는 주어의 상태를 설명하는 '형용사 보어'가 온다는 중1 내신 1순위 출제 공식을 마스터해 봅시다!",
        "keyTakeaways": [
            "감각동사 5총사: look(~하게 보이다), sound(~하게 들리다), smell(~한 냄새가 나다), taste(~한 맛이 나다), feel(~하게 느껴지다)",
            "★감각동사 + 형용사 (우리말 해석은 '~하게'이지만 부사(-ly)는 절대 금지!)",
            "감각동사 + like + 명사 (~처럼 보이다/들리다/느껴지다)"
        ],
        "formulaCards": [
            {
                "name": "감각동사 + 형용사 보어 공식",
                "formula": "주어 + look / sound / smell / taste / feel + 형용사",
                "examples": [
                    {
                        "en": "You look very happy today in your new school uniform.",
                        "ko": "너는 오늘 새 교복을 입고 매우 행복해 보인다.",
                        "point": "우리말로는 '행복하게'로 해석되지만 보어 자리이므로 형용사 happy를 씁니다."
                    },
                    {
                        "en": "This fresh strawberry cake tastes really sweet.",
                        "ko": "이 신선한 딸기 케이크는 정말 달콤한 맛이 난다.",
                        "point": "taste 뒤에는 형용사 sweet가 보어로 옵니다."
                    }
                ],
                "oxCompare": {
                    "o": "The music sounds beautiful.",
                    "x": "The music sounds beautifully.",
                    "comment": "sound는 2형식 감각동사이므로 부사 beautifully가 아니라 형용사 beautiful을 써야 합니다."
                },
                "trap": "우리말 해석에 낚여서 sweetly, beautifully, happily 같은 부사를 고르지 마세요!",
                "quizLink": "중1 지필고사에서 가장 오답률이 높은 전형적인 '형용사 vs 부사' 함정입니다."
            },
            {
                "name": "감각동사 + like + 명사 공식",
                "formula": "주어 + 감각동사 + like + 명사 (~처럼 보이다/들리다)",
                "examples": [
                    {
                        "en": "That strange cloud in the sky looks like an elephant.",
                        "ko": "하늘에 있는 저 이상한 구름은 코끼리처럼 보인다.",
                        "point": "뒤에 명사(an elephant)가 올 때는 전치사 like를 반드시 함께 써야 합니다."
                    },
                    {
                        "en": "Your wonderful plan sounds like a great idea.",
                        "ko": "너의 멋진 계획은 훌륭한 아이디어처럼 들린다.",
                        "point": "명사구 a great idea 앞에는 sounds like를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "It smells like fresh bread.",
                    "x": "It smells fresh bread.",
                    "comment": "bread는 명사이므로 like 없이 쓰면 틀리고 smells like bread로 써야 합니다."
                },
                "trap": "형용사가 올 때는 like 없이 바로 쓰고, 명사가 올 때만 like를 붙입니다.",
                "quizLink": "looks happy (형용사) vs looks like an angel (명사)을 명확히 대조하세요."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u11_d1",
                "missionTitle": "미션 1: 감각동사 뒤 부사 오용 오류 수정",
                "sentence": "The warm soup smells deliciously in the kitchen.",
                "korean": "따뜻한 수프가 주방에서 맛있는 냄새를 풍기고 있다.",
                "underlined": ["The warm soup", "smells deliciously", "in", "the kitchen"],
                "wrongIndex": 1,
                "correction": "smells delicious",
                "explanation": "smell은 2형식 감각동사이므로 부사 deliciously가 아니라 형용사 delicious가 보어로 와야 합니다.",
                "conceptRef": "1단계 [공식 1: 감각동사 + 형용사 보어] 출제 연계"
            },
            {
                "id": "lv1_u11_d2",
                "missionTitle": "미션 2: 감각동사 뒤 명사 수식 전치사 like 누락",
                "sentence": "That barking dog over there looks a wolf in the dark.",
                "korean": "저쪽에서 짖고 있는 저 개는 늑대처럼 보인다.",
                "underlined": ["That barking dog", "over there", "looks a wolf", "in the dark"],
                "wrongIndex": 2,
                "correction": "looks like a wolf",
                "explanation": "뒤에 명사 a wolf가 왔으므로 look 단독이 아니라 looks like a wolf로 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 감각동사 + like + 명사] 출제 연계"
            },
            {
                "id": "lv1_u11_d3",
                "missionTitle": "미션 3: 청각 감각동사 뒤 부사 오용 수정",
                "sentence": "Her piano playing sounds beautifully to everyone in the hall.",
                "korean": "그녀의 피아노 연주는 홀 안의 모든 사람에게 아름답게 들린다.",
                "underlined": ["Her piano playing", "sounds beautifully", "to everyone", "in the hall"],
                "wrongIndex": 1,
                "correction": "sounds beautiful",
                "explanation": "감각동사 sound 뒤에는 부사가 아닌 형용사 보어 beautiful이 와야 합니다.",
                "conceptRef": "1단계 [공식 1: 감각동사 + 형용사 보어] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'The lemon tastes very ______.'",
                "options": ["sourly", "sour", "sourness", "soured", "souring"],
                "ans": 2,
                "exp": "taste는 감각동사이므로 형용사 보어 sour가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 감각동사 + 형용사 보어]"
            },
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'This blanket feels very ______.'",
                "options": ["softly", "soft", "softness", "soften", "softerly"],
                "ans": 2,
                "exp": "feel 뒤에는 형용사 보어가 와야 하므로 soft가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 감각동사 + 형용사 보어]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "You look tired today.",
                    "This song sounds nicely.",
                    "The cookies smell sweet.",
                    "It looks like snow.",
                    "I feel comfortable in this room."
                ],
                "ans": 2,
                "exp": "sound 뒤에는 부사 nicely가 아니라 형용사 nice를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 감각동사 + 형용사 보어]"
            },
            {
                "q": "'그의 제안은 좋은 생각처럼 들린다.'를 바르게 영작한 것은?",
                "options": [
                    "His suggestion sounds good idea.",
                    "His suggestion sounds like a good idea.",
                    "His suggestion sounds well a good idea.",
                    "His suggestion sounds nicely like a good idea.",
                    "His suggestion sounds like well idea."
                ],
                "ans": 2,
                "exp": "뒤에 명사구 a good idea가 오므로 sounds like a good idea가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 감각동사 + like + 명사]"
            },
            {
                "q": "다음 괄호 안에서 알맞은 말이 바르게 짝지어진 것은?\n\n- 'She looks (sad / sadly) today.'\n- 'That cloud looks (like a dog / a dog).'",
                "options": [
                    "sad - like a dog",
                    "sadly - like a dog",
                    "sad - a dog",
                    "sadly - a dog",
                    "sad - as a dog"
                ],
                "ans": 1,
                "exp": "첫 번째는 형용사 sad, 두 번째는 명사 앞 like a dog가 올바릅니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    },

    # Unit 12: 4형식 수여동사와 3형식 전환
    {
        "unitNo": 12,
        "unitId": "lv1_u12",
        "legacyUnitNo": 12,
        "title": "4형식 수여동사와 3형식 전환 (to / for / of)",
        "part": "문장의 형식",
        "targetGrade": "중1 내신 대비",
        "summary": "간접목적어(~에게)와 직접목적어(~을)를 갖는 4형식 문장을 전치사 to, for, of를 사용하여 3형식으로 전환하는 핵심 내신 공식",
        "overview": "'~에게 ~을 주다'라는 뜻의 수여동사는 목적어를 두 개(간접목적어+직접목적어) 가져요! 이를 3형식(주어+동사+목적어)으로 바꿀 때 동사의 종류에 따라 전치사 to, for, of 중 알맞은 짝꿍을 고르는 중1 내신 단골 킬러를 정복해 봅시다!",
        "keyTakeaways": [
            "4형식 어순: 주어 + 동사 + 간접목적어(~에게) + 직접목적어(~을)",
            "3형식 전환: 주어 + 동사 + 직접목적어(~을) + [전치사] + 간접목적어(~에게)",
            "동사별 전치사: to(give, send, show, teach) / for(make, buy, cook, get) / of(ask)"
        ],
        "formulaCards": [
            {
                "name": "4형식 ➔ 3형식 전치사 분류 공식",
                "formula": "to (방향 전달) vs for (정성/노력 수고) vs of (ask)",
                "examples": [
                    {
                        "en": "My grandmother gave me a beautiful birthday present.",
                        "ko": "우리 할머니는 나에게 아름다운 생일 선물을 주셨다.",
                        "point": "4형식(gave + me + a present) 문장입니다."
                    },
                    {
                        "en": "My grandmother gave a beautiful birthday present to me.",
                        "ko": "우리 할머니는 나에게 아름다운 생일 선물을 주셨다.",
                        "point": "give는 3형식 전환 시 전치사 to를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "Mom made a delicious cake for us.",
                    "x": "Mom made a delicious cake to us.",
                    "comment": "make, buy, cook처럼 정성과 수고가 들어가는 동사는 to가 아니라 for를 씁니다."
                },
                "trap": "make, buy, cook, get, build는 무조건 for를 쓰는 '정성 동사'로 암기하세요!",
                "quizLink": "ask는 3형식 전환 시 오직 전치사 of만 취합니다 (ask a favor of you)."
            },
            {
                "name": "전치사 for를 쓰는 주요 수여동사 (MBC 골프)",
                "formula": "M(make) B(buy) C(cook) G(get) F(find) ➔ for",
                "examples": [
                    {
                        "en": "He bought a pretty ribbon for his younger sister.",
                        "ko": "그는 여동생을 위해 예쁜 리본을 사 주었다.",
                        "point": "buy는 3형식 전환 시 전치사 for를 씁니다."
                    },
                    {
                        "en": "Can I ask a big favor of you today?",
                        "ko": "제가 오늘 당신에게 큰 부탁 하나를 해도 될까요?",
                        "point": "ask는 전치사 of를 취합니다."
                    }
                ],
                "oxCompare": {
                    "o": "Dad cooked tasty pasta for the whole family.",
                    "x": "Dad cooked tasty pasta to the whole family.",
                    "comment": "cook은 요리하는 정성이 들어가므로 전치사 for를 씁니다."
                },
                "trap": "간접목적어와 직접목적어의 순서를 바꾸지 않고 전치사만 불필요하게 끼워 넣으면 오답입니다.",
                "quizLink": "4형식에서 3형식으로 전환할 때 전치사 선택 문제는 내신 100% 출제 문항입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u12_d1",
                "missionTitle": "미션 1: 수여동사 make의 3형식 전치사 오류",
                "sentence": "She made a warm sweater to her little brother last winter.",
                "korean": "그녀는 지난겨울 남동생에게 따뜻한 스웨터를 만들어 주었다.",
                "underlined": ["She made", "a warm sweater", "to her little brother", "last winter"],
                "wrongIndex": 2,
                "correction": "for her little brother",
                "explanation": "make는 정성을 들여 만들어 주는 동사이므로 3형식 전환 시 to가 아니라 for를 씁니다.",
                "conceptRef": "1단계 [공식 1 & 2: 전치사 분류] 출제 연계"
            },
            {
                "id": "lv1_u12_d2",
                "missionTitle": "미션 2: 수여동사 ask의 3형식 전치사 오류",
                "sentence": "May I ask a personal question to the new teacher in the office?",
                "korean": "새로 오신 선생님께 개인적인 질문 하나를 드려도 될까요?",
                "underlined": ["May I ask", "a personal question", "to the new teacher", "in the office?"],
                "wrongIndex": 2,
                "correction": "of the new teacher?",
                "explanation": "ask는 3형식 전환 시 전치사 to 대신 of를 취합니다.",
                "conceptRef": "1단계 [공식 1: 전치사 분류] 출제 연계"
            },
            {
                "id": "lv1_u12_d3",
                "missionTitle": "미션 3: 4형식 어순 혼동 오류 수정",
                "sentence": "The teacher gave to us the difficult math homework.",
                "korean": "선생님께서는 우리에게 어려운 수학 숙제를 주셨다.",
                "underlined": ["The teacher", "gave to us", "the difficult", "math homework"],
                "wrongIndex": 1,
                "correction": "gave us",
                "explanation": "4형식 어순(동사 + 간목 + 직목)에서는 간접목적어 앞에 전치사를 쓰지 않으므로 gave us가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 4형식 기본 어순] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 문장을 3형식으로 바르게 전환한 것은?\n\n'My father bought me a new bike.'",
                "options": [
                    "My father bought a new bike to me.",
                    "My father bought a new bike for me.",
                    "My father bought a new bike of me.",
                    "My father bought for me a new bike.",
                    "My father bought to me a new bike."
                ],
                "ans": 2,
                "exp": "buy는 3형식 전환 시 전치사 for를 씁니다.",
                "conceptRef": "1단계 [공식 2: 전치사 for를 쓰는 수여동사]"
            },
            {
                "q": "다음 중 3형식 전환 시 전치사 'to'를 쓰는 동사가 아닌 것은?",
                "options": ["give", "send", "show", "cook", "tell"],
                "ans": 4,
                "exp": "cook은 정성을 나타내는 동사로 전치사 for를 씁니다.",
                "conceptRef": "1단계 [공식 1 & 2: 전치사 분류]"
            },
            {
                "q": "다음 빈칸에 들어갈 전치사가 바르게 짝지어진 것은?\n\n- 'She sent a postcard ______ her friend.'\n- 'He asked a favor ______ me.'",
                "options": ["to - for", "for - of", "to - of", "of - to", "for - to"],
                "ans": 3,
                "exp": "send는 to, ask는 of를 취합니다.",
                "conceptRef": "1단계 [공식 1: 전치사 분류]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "He gave me some water.",
                    "She made a cake for her mom.",
                    "I bought a comic book to my brother.",
                    "Can you show your picture to me?",
                    "They asked a question of the guide."
                ],
                "ans": 3,
                "exp": "buy는 to가 아니라 for를 써야 하므로 for my brother가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 전치사 for를 쓰는 수여동사]"
            },
            {
                "q": "'선생님은 우리에게 영어를 가르쳐 주신다.'를 3형식으로 영작할 때 알맞은 것은?",
                "options": [
                    "The teacher teaches English for us.",
                    "The teacher teaches English to us.",
                    "The teacher teaches English of us.",
                    "The teacher teaches to us English.",
                    "The teacher teaches for us English."
                ],
                "ans": 2,
                "exp": "teach는 전달을 나타내는 동사이므로 3형식 전환 시 전치사 to를 씁니다.",
                "conceptRef": "1단계 [공식 1: 전치사 분류]"
            }
        ]
    },

    # Unit 13: 조동사 must, have to, should
    {
        "unitNo": 13,
        "unitId": "lv1_u13",
        "legacyUnitNo": 13,
        "title": "조동사 must, have to, should (의무, 필요, 조언)",
        "part": "조동사의 확장",
        "targetGrade": "중1 내신 대비",
        "summary": "강한 의무를 나타내는 must와 have to, 부드러운 충고의 should 및 금지(must not)와 불필요(don't have to)의 핵심 차이",
        "overview": "'너 숙제 꼭 해야 해!', '너 병원에 가보는 게 좋겠어'처럼 의무나 충고를 할 때 쓰는 조동사들이에요. 특히 '~해서는 안 된다(금지)'인 must not과 '~할 필요가 없다(불필요)'인 don't have to의 의미 차이는 내신 시험 100% 출제 포인트입니다!",
        "keyTakeaways": [
            "must / have to: ~해야 한다 (강한 의무/필요) | 3인칭 단수: has to",
            "★부정의 차이: must not (~해서는 안 된다: 금지) vs don't have to (~할 필요가 없다: 불필요)",
            "should: ~하는 것이 좋다 (도덕적 의무 / 부드러운 조언)"
        ],
        "formulaCards": [
            {
                "name": "must와 have to의 긍정 및 과거형",
                "formula": "must = have to + 동원 (~해야 한다) | 과거형: had to (~해야 했다)",
                "examples": [
                    {
                        "en": "You must wear a safety helmet when riding a bicycle.",
                        "ko": "너는 자전거를 탈 때 안전 헬멧을 착용해야 한다.",
                        "point": "법적·강제적 의무에는 must + 동사원형을 씁니다."
                    },
                    {
                        "en": "She had to finish the report yesterday before five.",
                        "ko": "그녀는 어제 5시 전에 보고서를 끝내야만 했다.",
                        "point": "must는 과거형이 없으므로 과거의 의무는 had to를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He has to wake up early on weekdays.",
                    "x": "He have to wake up early on weekdays.",
                    "comment": "주어가 3인칭 단수 He이므로 have to가 아니라 has to를 써야 합니다."
                },
                "trap": "must의 과거형으로 musted를 쓰면 절대 안 됩니다! 반드시 had to를 써야 합니다.",
                "quizLink": "have to의 의문문은 Do you have to ~? / Does he have to ~?로 만듭니다."
            },
            {
                "name": "금지(must not) vs 불필요(don't have to)",
                "formula": "must not (~해서는 안 된다) ≠ don't / doesn't have to (~할 필요가 없다)",
                "examples": [
                    {
                        "en": "You must not touch this dangerous electric wire.",
                        "ko": "너는 이 위험한 전선을 만져서는 절대 안 된다.",
                        "point": "절대 해서는 안 되는 강력한 금지에는 must not을 씁니다."
                    },
                    {
                        "en": "Tomorrow is Sunday, so you don't have to wake up early.",
                        "ko": "내일은 일요일이므로 너는 일찍 일어날 필요가 없다.",
                        "point": "~할 필요가 없다는 불필요에는 don't have to (= don't need to)를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "You don't have to bring lunch; food is free.",
                    "x": "You must not bring lunch; food is free.",
                    "comment": "음식이 무료이므로 도시락을 싸 올 필요가 없다는 의미에는 don't have to를 써야 자연스럽습니다."
                },
                "trap": "must와 have to는 긍정일 땐 의미가 같지만, 부정일 땐 완전히 다른 뜻이 됩니다!",
                "quizLink": "don't have to = don't need to = need not은 중등 내신 단골 전환 공식입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u13_d1",
                "missionTitle": "미션 1: 3인칭 단수 have to 일치 오류",
                "sentence": "My older sister have to clean her bedroom every weekend.",
                "korean": "내 누나는 주말마다 자신의 침실을 청소해야 한다.",
                "underlined": ["My older sister", "have to clean", "her bedroom", "every weekend"],
                "wrongIndex": 1,
                "correction": "has to clean",
                "explanation": "주어가 My older sister(3인칭 단수)이므로 have to가 아니라 has to가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: must와 have to] 출제 연계"
            },
            {
                "id": "lv1_u13_d2",
                "missionTitle": "미션 2: 금지 문맥에서 don't have to 오용 수정",
                "sentence": "You don't have to run inside the hospital because patients are resting.",
                "korean": "환자들이 쉬고 있으므로 너는 병원 안에서 뛰어서는 안 된다.",
                "underlined": ["You don't have to run", "inside the hospital", "because", "patients are resting"],
                "wrongIndex": 0,
                "correction": "You must not run",
                "explanation": "병원에서 뛰지 말라는 강력한 금지이므로 don't have to(할 필요 없다) 대신 must not(해서는 안 된다)을 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 금지 vs 불필요] 출제 연계"
            },
            {
                "id": "lv1_u13_d3",
                "missionTitle": "미션 3: must 과거형 오류 수정",
                "sentence": "I musted stay at home all day yesterday because of the heavy rain.",
                "korean": "폭우 때문에 나는 어제 하루 종일 집에 머물러야만 했다.",
                "underlined": ["I musted stay", "at home", "all day yesterday", "because of the heavy rain"],
                "wrongIndex": 0,
                "correction": "I had to stay",
                "explanation": "must는 과거형이 없으므로 과거의 의무를 나타낼 때는 had to로 써야 합니다.",
                "conceptRef": "1단계 [공식 1: must와 have to] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 문장의 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'You ______ quiet in the examination room.'",
                "options": ["must be", "must to be", "have to being", "should being", "must not"],
                "ans": 1,
                "exp": "조동사 must 뒤에는 동사원형 be가 와야 하므로 must be가 정답입니다.",
                "conceptRef": "1단계 [공식 1: must와 have to]"
            },
            {
                "q": "다음 빈칸에 들어갈 말이 나머지 넷과 뜻이 다른 하나는?\n\n'Today is a holiday, so you ______ go to school.'",
                "options": ["don't have to", "don't need to", "need not", "must not", "do not have to"],
                "ans": 4,
                "exp": "must not은 '해서는 안 된다(금지)'이고, 나머지는 모두 '~할 필요가 없다(불필요)'입니다.",
                "conceptRef": "1단계 [공식 2: 금지 vs 불필요]"
            },
            {
                "q": "다음 밑줄 친 부분의 쓰임이 어법상 어색한 문장은?",
                "options": [
                    "She has to study hard for the math test.",
                    "You should see a doctor soon.",
                    "We had to walk home yesterday.",
                    "He musts be careful on the slippery ice.",
                    "You don't have to worry about me."
                ],
                "ans": 4,
                "exp": "조동사 must에는 주어가 3인칭 단수여도 -s를 붙이지 않습니다 (must be).",
                "conceptRef": "1단계 [공식 1: must와 have to]"
            },
            {
                "q": "'너는 도서관에서 큰 소리로 말해서는 안 된다.'를 바르게 영작한 것은?",
                "options": [
                    "You don't have to speak loudly in the library.",
                    "You must not speak loudly in the library.",
                    "You should speaking loudly in the library.",
                    "You must not to speak loudly in the library.",
                    "You have not to speak loudly in the library."
                ],
                "ans": 2,
                "exp": "강한 금지를 나타낼 때는 must not + 동사원형 speak가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 금지 vs 불필요]"
            },
            {
                "q": "다음 괄호 안에서 알맞은 말이 바르게 짝지어진 것은?\n\n- 'Tom (have to / has to) wash his hands.'\n- 'Yesterday, we (must / had to) run fast.'",
                "options": [
                    "have to - must",
                    "has to - had to",
                    "has to - must",
                    "have to - had to",
                    "has to - musted"
                ],
                "ans": 2,
                "exp": "Tom은 3인칭 단수이므로 has to, 어제(과거)의 의무는 had to가 정답입니다.",
                "conceptRef": "1단계 [공식 1: must와 have to]"
            }
        ]
    },

    # Unit 14: 형용사와 부사의 원급 비교
    {
        "unitNo": 14,
        "unitId": "lv1_u14",
        "legacyUnitNo": 14,
        "title": "형용사와 부사의 원급 비교 (as ~ as)",
        "part": "비교 구문",
        "targetGrade": "중1 내신 대비",
        "summary": "둘의 정도가 서로 같음을 나타내는 as + 원급 + as 구문과 부정형 not as/so + 원급 + as의 쓰임",
        "overview": "'민호는 지수만큼 키가 커', '비행기는 기차만큼 빠르지 않아'처럼 두 대상을 동등하게 비교할 때는 'as ~ as'를 써요! as와 as 사이에는 반드시 원래 형태인 '원급'만 들어간다는 비교 구문의 황금률을 배워봅시다!",
        "keyTakeaways": [
            "긍정: as + 형용사/부사의 원급 + as (~만큼 …한/하게)",
            "부정: not as / not so + 원급 + as (~만큼 …하지 않은)",
            "★as ~ as 사이에는 비교급(-er/more)이나 최상급이 절대 들어갈 수 없음!"
        ],
        "formulaCards": [
            {
                "name": "원급 비교 as ~ as 기본 공식",
                "formula": "A + 동사 + as + 원급 + as + B (A는 B만큼 …하다)",
                "examples": [
                    {
                        "en": "My sister is as tall as my mother now.",
                        "ko": "내 여동생은 이제 우리 엄마만큼 키가 크다.",
                        "point": "as와 as 사이에 형용사의 원급 tall을 썼습니다."
                    },
                    {
                        "en": "He can run as fast as a professional athlete.",
                        "ko": "그는 프로 운동선수만큼이나 빠르게 달릴 수 있다.",
                        "point": "run을 꾸미는 부사의 원급 fast를 as 사이에 썼습니다."
                    }
                ],
                "oxCompare": {
                    "o": "This book is as interesting as that movie.",
                    "x": "This book is as more interesting as that movie.",
                    "comment": "as ~ as 사이에는 비교급 more interesting이 아니라 원급 interesting이 들어가야 합니다."
                },
                "trap": "as ~ as 사이에 taller, faster 같은 비교급을 넣어놓은 오답 함정을 조심하세요.",
                "quizLink": "형용사가 들어갈지 부사가 들어갈지는 문장의 본동사(be동사 vs 일반동사)가 결정합니다."
            },
            {
                "name": "원급 비교의 부정 (not as/so ~ as)",
                "formula": "A + 동사 + not as / so + 원급 + as + B (A는 B만큼 …하지 않다)",
                "examples": [
                    {
                        "en": "English is not as difficult as advanced calculus.",
                        "ko": "영어는 고급 미적분만큼 어렵지는 않다.",
                        "point": "부정문에서는 not as difficult as 구조를 씁니다."
                    },
                    {
                        "en": "Today is not so cold as yesterday was.",
                        "ko": "오늘은 어제만큼 춥지는 않다.",
                        "point": "부정문에서는 앞의 as 대신 so를 쓸 수도 있습니다 (not so cold as)."
                    }
                ],
                "oxCompare": {
                    "o": "Tom is not as old as Sam.",
                    "x": "Tom is not so older as Sam.",
                    "comment": "부정형에서도 반드시 원급 old를 써야 합니다."
                },
                "trap": "A is not as tall as B는 결국 'B가 A보다 더 크다(B is taller than A)'는 뜻입니다.",
                "quizLink": "as ~ as possible = as ~ as 주어 can은 '가능한 한 ~하게'라는 관용표현입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u14_d1",
                "missionTitle": "미션 1: 원급 비교 사이 비교급 오용 수정",
                "sentence": "This puzzle is as easier as the one we solved yesterday.",
                "korean": "이 퍼즐은 우리가 어제 풀었던 것만큼 쉽다.",
                "underlined": ["This puzzle", "is as easier as", "the one", "we solved yesterday"],
                "wrongIndex": 1,
                "correction": "is as easy as",
                "explanation": "as ~ as 사이에는 비교급 easier가 아니라 원급 easy가 와야 합니다.",
                "conceptRef": "1단계 [공식 1: 원급 비교 기본 공식] 출제 연계"
            },
            {
                "id": "lv1_u14_d2",
                "missionTitle": "미션 2: 부정 원급 비교 형태 오류 수정",
                "sentence": "The silver watch is not as more expensive as the gold one in the store.",
                "korean": "그 은시계는 금시계만큼 비싸지는 않다.",
                "underlined": ["The silver watch", "is not as more expensive as", "the gold", "one in the store"],
                "wrongIndex": 1,
                "correction": "is not as expensive as",
                "explanation": "not as ~ as 구문에서도 비교급 more expensive가 아닌 원급 expensive를 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 원급 비교의 부정] 출제 연계"
            },
            {
                "id": "lv1_u14_d3",
                "missionTitle": "미션 3: 형용사 vs 부사 원급 품사 판별 오류",
                "sentence": "She plays the violin as beautiful as a famous musician.",
                "korean": "그녀는 유명한 음악가만큼이나 아름답게 바이올린을 연주한다.",
                "underlined": ["She plays", "the violin", "as beautiful as", "a famous musician"],
                "wrongIndex": 2,
                "correction": "as beautifully as",
                "explanation": "동사 plays를 수식하는 자리이므로 형용사 beautiful이 아니라 부사의 원급 beautifully가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 원급 비교 기본 공식] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'My dog is as ______ as your cat.'",
                "options": ["cuter", "cutest", "cute", "more cute", "cutely"],
                "ans": 3,
                "exp": "as와 as 사이에는 형용사의 원래 형태인 원급 cute가 와야 합니다.",
                "conceptRef": "1단계 [공식 1: 원급 비교 기본 공식]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어법상 어색한 문장은?",
                "options": [
                    "He is as tall as his father.",
                    "She speaks English as well as a native speaker.",
                    "This room is as bigger as that room.",
                    "Today is not as cold as yesterday.",
                    "I will run as fast as possible."
                ],
                "ans": 3,
                "exp": "as ~ as 사이에는 비교급 bigger가 올 수 없으므로 big으로 고쳐야 합니다.",
                "conceptRef": "1단계 [공식 1: 원급 비교 기본 공식]"
            },
            {
                "q": "'이 상자는 저 상자만큼 무겁지 않다.'를 바르게 영작한 것은?",
                "options": [
                    "This box is not as heavy as that one.",
                    "This box is not so heavier as that one.",
                    "This box is as not heavy as that one.",
                    "This box is not as more heavy as that one.",
                    "This box is as heavier as that one."
                ],
                "ans": 1,
                "exp": "부정의 원급 비교는 not as + 원급(heavy) + as 구조입니다.",
                "conceptRef": "1단계 [공식 2: 원급 비교의 부정]"
            },
            {
                "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n\n'Please come home as early as ______.'",
                "options": ["possible", "more", "can you", "possibility", "most"],
                "ans": 1,
                "exp": "'가능한 한 일찍'은 as early as possible 관용 표현을 씁니다.",
                "conceptRef": "1단계 [공식 2: 원급 비교의 부정]"
            },
            {
                "q": "'Jane is not as tall as Mary.'와 의미가 같은 문장은?",
                "options": [
                    "Jane is taller than Mary.",
                    "Mary is taller than Jane.",
                    "Jane is as tall as Mary.",
                    "Mary is shorter than Jane.",
                    "Jane and Mary are the same height."
                ],
                "ans": 2,
                "exp": "Jane이 Mary만큼 크지 않다는 것은 Mary가 Jane보다 더 크다(Mary is taller than Jane)는 뜻입니다.",
                "conceptRef": "1단계 [공식 2: 원급 비교의 부정]"
            }
        ]
    }
]

print("LV1 part1 loaded: 6 units")
