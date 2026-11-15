# -*- coding: utf-8 -*-
"""
Level 3 (중3 문법) Units 13 ~ 20.
Unit 13: 복합관계사와 양보구문 (whoever, whatever, wherever, whenever)
Unit 14: 가정법 과거 (현재 사실의 반대)
Unit 15: 가정법 과거완료 (과거 사실의 반대)
Unit 16: I wish / as if 가정법
Unit 17: 분사구문 기본 전환 (능동 V-ing)
Unit 18: 분사구문의 주의할 용법 (완료, 수동, 접속사 보존)
Unit 19: 강조구문 (It is ~ that 강조 vs 가주어-진주어)
Unit 20: 도치 구문 (부정어 도치 & 장소부사구 도치)
"""

LV3_PART2 = [
    # Unit 13: 복합관계사와 양보구문
    {
        "unitNo": 13,
        "unitId": "lv3_u13",
        "legacyUnitNo": 37,
        "title": "복합관계사와 양보구문 (whoever, whatever, wherever, whenever)",
        "part": "관계사의 심화",
        "targetGrade": "중3 내신 대비",
        "summary": "관계대명사/관계부사에 -ever를 붙여 '명사절(~하는 누구든지)'과 '양보 부사절(비록 ~일지라도)'로 쓰이는 복합관계사",
        "overview": "who나 what 뒤에 -ever가 붙으면 '누구든지', '무엇이든지'라는 넓은 의미를 갖게 돼요! 문장에서 주어나 목적어로 쓰이는 명사절과, '비록 ~할지라도(no matter what)'라는 양보 부사절의 두 얼굴을 가진 복합관계사를 정복해 봅시다!",
        "keyTakeaways": [
            "복합관계대명사: whoever (= anyone who), whatever (= anything that), whichever",
            "복합관계부사: whenever (= at any time when), wherever (= at any place where), however (+ 형/부 = no matter how)",
            "양보 부사절 전환: no matter who / no matter what / no matter where / no matter how"
        ],
        "formulaCards": [
            {
                "name": "명사절 vs 양보 부사절 판별 공식",
                "formula": "명사절(주·목·보): anyone who / anything that | 부사절(콤마 동반): no matter who/what",
                "examples": [
                    {
                        "en": "Whoever wants to join the book club is warmly welcome.",
                        "ko": "독서 클럽에 가입하기를 원하는 사람은 누구든지 따뜻하게 환영받는다.",
                        "point": "문장의 주어로 쓰였으므로 anyone who의 의미를 갖는 명사절입니다."
                    },
                    {
                        "en": "Whatever happens tomorrow, I will always support you.",
                        "ko": "내일 무슨 일이 일어나더라도, 나는 언제나 너를 응원할 것이다.",
                        "point": "no matter what의 뜻을 가진 양보 부사절입니다."
                    }
                ],
                "oxCompare": {
                    "o": "You can choose whichever you like.",
                    "x": "You can choose no matter which you like.",
                    "comment": "choose의 목적어 자리인 명사절에는 no matter which를 쓸 수 없고 whichever(= anything that)를 써야 합니다."
                },
                "trap": "no matter what/who는 오직 콤마(,)를 동반한 '부사절'에만 쓸 수 있습니다!",
                "quizLink": "문장의 주어/목적어 자리에 쓰였는지, 콤마로 분리된 부사절인지 확인하세요."
            },
            {
                "name": "however + 형용사/부사 어순 공식",
                "formula": "however + 형용사/부사 + S + V = no matter how + 형/부 (아무리 ~할지라도)",
                "examples": [
                    {
                        "en": "However difficult the task is, we will never give up.",
                        "ko": "그 과제가 아무리 어려울지라도, 우리는 결코 포기하지 않을 것이다.",
                        "point": "however 바로 뒤에 형용사 difficult가 끌려 나온 어순입니다."
                    },
                    {
                        "en": "You can visit our library whenever you want.",
                        "ko": "너는 원할 때면 언제든지 우리 도서관을 방문해도 좋다.",
                        "point": "at any time when의 의미를 갖는 복합관계부사 whenever입니다."
                    }
                ],
                "oxCompare": {
                    "o": "However hard he tried, he couldn't solve it.",
                    "x": "However he tried hard, he couldn't solve it.",
                    "comment": "however 뒤에 바로 부사 hard가 붙어야 올바른 양보 구문 어순입니다."
                },
                "trap": "however 뒤에 주어+동사를 먼저 쓰고 형용사/부사를 뒤로 보내면 100% 오답입니다.",
                "quizLink": "however + 형용사/부사 어순은 고등 내신과 수능 서술형 단골 영작 문제입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u13_d1",
                "missionTitle": "미션 1: however 어순 배열 오류 수정",
                "sentence": "However the question is difficult, she will solve it alone.",
                "korean": "그 문제가 아무리 어려울지라도, 그녀는 그것을 혼자 힘으로 풀 것이다.",
                "underlined": ["However the question", "is difficult,", "she will solve", "it alone"],
                "wrongIndex": 0,
                "correction": "However difficult the question",
                "explanation": "however 뒤에는 형용사 difficult가 바로 끌려 나와 However difficult the question is가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: however + 형용사/부사 어순] 출제 연계"
            },
            {
                "id": "lv3_u13_d2",
                "missionTitle": "미션 2: 명사절 목적어 자리에 no matter what 오용",
                "sentence": "You can eat no matter what you like at the buffet.",
                "korean": "너는 뷔페에서 네가 좋아하는 것은 무엇이든지 먹을 수 있다.",
                "underlined": ["You can eat", "no matter what", "you like", "at the buffet"],
                "wrongIndex": 1,
                "correction": "whatever",
                "explanation": "eat의 목적어 역할을 하는 명사절 자리이므로 no matter what 대신 whatever를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 명사절 vs 양보 부사절] 출제 연계"
            },
            {
                "id": "lv3_u13_d3",
                "missionTitle": "미션 3: 복합관계대명사 주어절 단수 수일치 오류",
                "sentence": "Whoever breaks the school rules are punished strictly.",
                "korean": "교칙을 어기는 사람은 누구든지 엄격하게 처벌받는다.",
                "underlined": ["Whoever breaks", "the school rules", "are punished", "strictly"],
                "wrongIndex": 2,
                "correction": "is punished",
                "explanation": "Whoever 절은 단수 취급하므로 are punished가 아니라 is punished가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 명사절 vs 양보 부사절] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'______ comes first will get the prize.'",
                "options": ["Whoever", "Whatever", "Whenever", "Wherever", "However"],
                "ans": 1,
                "exp": "'먼저 오는 사람은 누구든지'라는 사람 주어절이므로 Whoever(= Anyone who)가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 명사절 vs 양보 부사절]"
            },
            {
                "q": "다음 문장의 밑줄 친 부분과 바꿔 쓸 수 있는 것은?\n\n'<u>Whatever</u> happens, I will stay with you.'",
                "options": ["Anything that", "No matter what", "No matter who", "Anyone who", "No matter how"],
                "ans": 2,
                "exp": "콤마로 분리된 양보 부사절이므로 No matter what과 같습니다.",
                "conceptRef": "1단계 [공식 1: 명사절 vs 양보 부사절]"
            },
            {
                "q": "다음 괄호 안의 단어를 어법에 맞게 바르게 배열한 것은?\n\n'______ (he, rich, is, however), he is not happy.'",
                "options": [
                    "However he is rich",
                    "However rich he is",
                    "Rich however he is",
                    "However he rich is",
                    "He is however rich"
                ],
                "ans": 2,
                "exp": "however + 형용사 + 주어 + 동사이므로 However rich he is가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: however + 형용사/부사 어순]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "Whenever you call me, I will answer.",
                    "You may go wherever you want.",
                    "However tired she was, she smiled.",
                    "You can take no matter what you want.",
                    "Whatever you do, do your best."
                ],
                "ans": 4,
                "exp": "take의 목적어 자리에는 no matter what이 아니라 whatever를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 명사절 vs 양보 부사절]"
            },
            {
                "q": "'네가 아무리 빨리 달릴지라도, 너는 그 버스를 잡을 수 없다.'를 바르게 영작한 것은?",
                "options": [
                    "However fast you run, you cannot catch the bus.",
                    "However you run fast, you cannot catch the bus.",
                    "No matter you run fast, you cannot catch the bus.",
                    "Whatever fast you run, you cannot catch the bus.",
                    "Wherever fast you run, you cannot catch the bus."
                ],
                "ans": 1,
                "exp": "However + 부사(fast) + 주어 + 동사 어순인 1번이 올바릅니다.",
                "conceptRef": "1단계 [공식 2: however + 형용사/부사 어순]"
            }
        ]
    },

    # Unit 14: 가정법 과거
    {
        "unitNo": 14,
        "unitId": "lv3_u14",
        "legacyUnitNo": 38,
        "title": "가정법 과거 (현재 사실의 반대)",
        "part": "가정법의 기초",
        "targetGrade": "중3 내신 대비",
        "summary": "현재 사실과 반대되는 상상이나 실현 불가능한 소망을 나타내는 If + 주어 + 과거동사, 주어 + 조동사과거 + 동원 공식",
        "overview": "'내가 만약 새라면 너에게 날아갈 텐데'처럼 지금 현재 불가능한 일을 상상할 때 '가정법 과거'를 써요! 이름은 '과거'지만 해석은 무조건 '현재(~라면, ~할 텐데)'로 한다는 점과, be동사는 인칭 상관없이 were를 쓴다는 시험 필수 원칙을 배워봅시다!",
        "keyTakeaways": [
            "가정법 과거 공식: If + 주어 + 과거동사(be동사는 were), 주어 + would/could/might + 동사원형",
            "해석: '만약 지금 ~라면, (지금) …할 텐데' (★현재 사실의 반대!)",
            "직설법 전환: As + 주어 + 현재동사 (긍정 ➔ 부정, 부정 ➔ 긍정 반대 변환)"
        ],
        "formulaCards": [
            {
                "name": "가정법 과거의 형태와 be동사 were",
                "formula": "If + S + 과거동사(were), S + would/could/should/might + 동사원형",
                "examples": [
                    {
                        "en": "If I were a bird, I could fly to you across the ocean.",
                        "ko": "내가 만약 새라면, 바다를 건너 너에게 날아갈 수 있을 텐데.",
                        "point": "주어가 I여도 가정법에서는 was 대신 were를 쓰는 것이 전통적 표준 규칙입니다."
                    },
                    {
                        "en": "If he had enough money, he would buy that sports car.",
                        "ko": "만약 그가 충분한 돈이 있다면, 저 스포츠카를 살 텐데.",
                        "point": "현재 돈이 없어서 살 수 없음을 가정법 과거(had ~ would buy)로 나타냈습니다."
                    }
                ],
                "oxCompare": {
                    "o": "If I had wings, I would fly.",
                    "x": "If I have wings, I would fly.",
                    "comment": "주절에 would fly가 있으므로 If절의 동사도 과거형 had가 되어야 시제가 맞습니다."
                },
                "trap": "가정법 과거는 이름만 과거일 뿐, '현재 사실'을 반대로 상상하는 표현입니다!",
                "quizLink": "If S + were, S + would 동원은 영문법 시험에서 가장 출제 빈도가 높은 공식입니다."
            },
            {
                "name": "가정법 과거 ➔ 직설법 현재 전환 공식",
                "formula": "If S + were/과거동사 ➔ As S + am not / don't + 동원 (부호 반대!)",
                "examples": [
                    {
                        "en": "If she knew his telephone number, she would call him right now.",
                        "ko": "만약 그녀가 그의 전화번호를 안다면, 지금 당장 그에게 전화할 텐데.",
                        "point": "가정법 과거 문장입니다."
                    },
                    {
                        "en": "As she doesn't know his phone number, she cannot call him.",
                        "ko": "그녀는 그의 전화번호를 알지 못하기 때문에, 그에게 전화할 수 없다.",
                        "point": "직설법 현재 시제로 전환할 때는 긍정이 부정(doesn't know)으로 바뀝니다."
                    }
                ],
                "oxCompare": {
                    "o": "As I am not rich, I cannot buy the mansion.",
                    "x": "As I was not rich, I could not buy the mansion.",
                    "comment": "가정법 과거는 현재 사실을 말하는 것이므로 직설법 시제는 '현재(am not/cannot)'입니다."
                },
                "trap": "직설법으로 바꿀 때 시제를 과거로 쓰면 100% 감점당합니다!",
                "quizLink": "가정법 ➔ 직설법 서술형 전환은 중3 지필고사 배점 5점짜리 단골 문항입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u14_d1",
                "missionTitle": "미션 1: 가정법 과거 주절 조동사 현재형 오류",
                "sentence": "If I had a private spaceship, I will travel to Mars.",
                "korean": "만약 내게 개인 우주선이 있다면, 화성으로 여행을 갈 텐데.",
                "underlined": ["If I had", "a private spaceship,", "I will travel", "to Mars"],
                "wrongIndex": 2,
                "correction": "I would travel",
                "explanation": "가정법 과거의 주절에는 조동사의 과거형(would, could)이 와야 하므로 will 대신 would를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거 공식] 출제 연계"
            },
            {
                "id": "lv3_u14_d2",
                "missionTitle": "미션 2: 가정법 if절 현재동사 혼동 수정",
                "sentence": "If she knows his address, she could send him a letter.",
                "korean": "만약 그녀가 그의 주소를 안다면, 그에게 편지를 보낼 수 있을 텐데.",
                "underlined": ["If she knows", "his address,", "she could send", "him a letter"],
                "wrongIndex": 0,
                "correction": "If she knew",
                "explanation": "주절에 could send가 있으므로 가정법 과거 If절의 동사도 과거형 knew가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거 공식] 출제 연계"
            },
            {
                "id": "lv3_u14_d3",
                "missionTitle": "미션 3: 가정법 과거 be동사 was 규정 수정",
                "sentence": "If I was you, I would take that golden opportunity immediately.",
                "korean": "내가 만약 너라면, 나는 당장 그 황금 같은 기회를 잡을 텐데.",
                "underlined": ["If I was you,", "I would take", "that golden opportunity", "immediately"],
                "wrongIndex": 0,
                "correction": "If I were you,",
                "explanation": "가정법 과거에서 be동사는 인칭에 상관없이 were를 쓰는 것이 표준 문법입니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거 공식] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'If I ______ wings, I could fly in the sky.'",
                "options": ["have", "had", "will have", "having", "am having"],
                "ans": 2,
                "exp": "주절에 could fly가 있으므로 가정법 과거 If절의 동사는 과거형 had가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거 공식]"
            },
            {
                "q": "다음 빈칸에 들어갈 알맞은 조동사는?\n\n'If she were here, she ______ help us with this task.'",
                "options": ["will", "would", "can", "may", "shall"],
                "ans": 2,
                "exp": "가정법 과거의 주절에는 조동사의 과거형 would가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거 공식]"
            },
            {
                "q": "'If I were not busy, I could help you.'와 의미가 같은 직설법 문장은?",
                "options": [
                    "As I was busy, I couldn't help you.",
                    "As I am busy, I cannot help you.",
                    "As I am not busy, I can help you.",
                    "Because I were busy, I couldn't help you.",
                    "If I am busy, I cannot help you."
                ],
                "ans": 2,
                "exp": "가정법 과거는 현재 사실의 반대이므로 '현재(am busy) 바빠서 도와줄 수 없다(cannot help)'인 2번이 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 직설법 전환]"
            },
            {
                "q": "다음 중 어법상 올바른 가정법 문장은?",
                "options": [
                    "If it rains tomorrow, I would stay home.",
                    "If I knew the answer, I will tell you.",
                    "If she were rich, she could buy the mansion.",
                    "If he had time, he can join us.",
                    "If they are here, they would enjoy the party."
                ],
                "ans": 3,
                "exp": "If she were rich, she could buy the mansion은 If S + were, S + could 동원으로 완벽합니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거 공식]"
            },
            {
                "q": "'내가 그의 전화번호를 안다면, 그에게 전화할 텐데.'를 바르게 영작한 것은?",
                "options": [
                    "If I know his number, I will call him.",
                    "If I knew his number, I would call him.",
                    "If I had known his number, I would call him.",
                    "If I knew his number, I will call him.",
                    "If I know his number, I would call him."
                ],
                "ans": 2,
                "exp": "If I knew his number, I would call him이 올바른 가정법 과거 영작입니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거 공식]"
            }
        ]
    }
]

print("LV3 part2 loaded: Units 13 & 14")
