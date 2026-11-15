# -*- coding: utf-8 -*-
"""
Level 1 (중1 문법) Units 17 ~ 20.
Unit 17: to부정사의 명사적 용법 (주어, 목적어, 보어)
Unit 18: to부정사의 형용사적 용법 (~할 명사 수식, 전치사 수반 명사)
Unit 19: 동명사의 기초 (주어/목적어로 쓰이는 V-ing, 전치사의 목적어)
Unit 20: 재귀대명사 (-self, 재귀적 용법 vs 강조적 용법)
"""

LV1_PART3 = [
    # Unit 17: to부정사의 명사적 용법
    {
        "unitNo": 17,
        "unitId": "lv1_u17",
        "legacyUnitNo": 17,
        "title": "to부정사의 명사적 용법 (주어, 목적어, 보어)",
        "part": "준동사의 기초",
        "targetGrade": "중1 내신 대비",
        "summary": "동사가 명사로 변신하여 '~하는 것, ~하기'로 해석되며 문장의 주어, 목적어, 보어로 쓰이는 원리",
        "overview": "동사 앞에 to를 붙이면 더 이상 동사가 아니라 '명사'처럼 문장의 주어, 목적어, 보어 자리에 쏙 들어갈 수 있어요! 'to-V는 단수 취급한다'는 수일치 규칙과 want, hope 등 to부정사만을 목적어로 취하는 단짝 동사들을 마스터해 봅시다!",
        "keyTakeaways": [
            "명사적 용법: '~하는 것, ~하기'로 해석",
            "주어 역할: To learn English is fun. (★to부정사 주어는 3인칭 단수 취급 -> is)",
            "목적어 역할: to부정사만 취하는 동사 (want, hope, wish, plan, decide, promise + to-V)"
        ],
        "formulaCards": [
            {
                "name": "to부정사의 주어와 보어 역할",
                "formula": "To-V + 단수동사 (주어) | S + be동사 + to-V (보어)",
                "examples": [
                    {
                        "en": "To read books every day makes your mind rich and wise.",
                        "ko": "매일 책을 읽는 것은 당신의 마음을 풍요롭고 지혜롭게 만든다.",
                        "point": "to부정사구(To read books)가 주어일 때는 단수 취급하여 makes를 씁니다."
                    },
                    {
                        "en": "My dream is to become a famous game developer.",
                        "ko": "나의 꿈은 유명한 게임 개발자가 되는 것이다.",
                        "point": "be동사 뒤에서 주어를 보충 설명하는 주격보어로 쓰인 to become입니다."
                    }
                ],
                "oxCompare": {
                    "o": "To exercise regularly is good for your health.",
                    "x": "To exercise regularly are good for your health.",
                    "comment": "to부정사 주어는 하나의 동작 단위이므로 복수 are가 아니라 단수 is를 씁니다."
                },
                "trap": "To read books처럼 to 뒤에 복수명사가 있어도 주어는 To read이므로 단수 취급합니다.",
                "quizLink": "to부정사 주어가 너무 길어지면 뒤로 보내고 가주어 It을 쓰는 It ~ to 구문으로 발전합니다."
            },
            {
                "name": "to부정사를 목적어로 취하는 동사군",
                "formula": "want / hope / decide / plan / promise / expect + to-V",
                "examples": [
                    {
                        "en": "I decided to study harder for the upcoming final exam.",
                        "ko": "나는 다가오는 기말고사를 위해 더 열심히 공부하기로 결심했다.",
                        "point": "decide는 목적어로 to부정사(to study)만을 취합니다."
                    },
                    {
                        "en": "She hopes to travel around the world with her family.",
                        "ko": "그녀는 가족과 함께 세계를 여행하기를 희망한다.",
                        "point": "hope 뒤에는 to travel이 목적어로 옵니다."
                    }
                ],
                "oxCompare": {
                    "o": "He promised to meet me at the library.",
                    "x": "He promised meeting me at the library.",
                    "comment": "promise는 동명사가 아니라 to부정사를 목적어로 취하는 동사입니다."
                },
                "trap": "미래지향적인 의미(소망, 계획, 결심, 약속)를 담은 동사들은 대부분 to부정사를 좋아합니다.",
                "quizLink": "want to, hope to, decide to, plan to는 중1 내신 암기 1순위 관용구입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u17_d1",
                "missionTitle": "미션 1: to부정사 주어의 동사 수일치 오류",
                "sentence": "To play soccer with good friends are very exciting.",
                "korean": "좋은 친구들과 축구를 하는 것은 매우 신난다.",
                "underlined": ["To play soccer", "with good friends", "are very", "exciting"],
                "wrongIndex": 2,
                "correction": "is very",
                "explanation": "to부정사구(To play soccer)는 3인칭 단수 취급하므로 are가 아니라 is가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: to부정사의 주어와 보어] 출제 연계"
            },
            {
                "id": "lv1_u17_d2",
                "missionTitle": "미션 2: decide의 목적어 형태 오류 수정",
                "sentence": "She decided buying a new winter jacket at the department store.",
                "korean": "그녀는 백화점에서 새 겨울 재킷을 사기로 결정했다.",
                "underlined": ["She decided", "buying a new", "winter jacket", "at the department store"],
                "wrongIndex": 1,
                "correction": "to buy a new",
                "explanation": "decide는 동명사가 아니라 to부정사를 목적어로 취하므로 to buy가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: to부정사 목적어 동사군] 출제 연계"
            },
            {
                "id": "lv1_u17_d3",
                "missionTitle": "미션 3: hope의 목적어 형태 오류 수정",
                "sentence": "They hope visiting the famous space museum next summer.",
                "korean": "그들은 내년 여름에 유명한 우주 박물관을 방문하기를 희망한다.",
                "underlined": ["They hope", "visiting", "the famous space museum", "next summer"],
                "wrongIndex": 1,
                "correction": "to visit",
                "explanation": "hope는 목적어로 to부정사를 취하므로 visiting이 아니라 to visit으로 써야 합니다.",
                "conceptRef": "1단계 [공식 2: to부정사 목적어 동사군] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'I want ______ a famous doctor in the future.'",
                "options": ["become", "becoming", "to become", "became", "becomes"],
                "ans": 3,
                "exp": "want는 목적어로 to부정사를 취하므로 to become이 정답입니다.",
                "conceptRef": "1단계 [공식 2: to부정사 목적어 동사군]"
            },
            {
                "q": "다음 문장의 빈칸에 알맞은 be동사는?\n\n'To learn foreign languages ______ not easy.'",
                "options": ["are", "is", "am", "were", "be"],
                "ans": 2,
                "exp": "to부정사 주어는 단수 취급하므로 is가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: to부정사의 주어와 보어]"
            },
            {
                "q": "다음 중 밑줄 친 to부정사의 용법이 나머지 넷과 다른 하나는?",
                "options": [
                    "To see is to believe.",
                    "She decided to buy the red dress.",
                    "His hobby is to collect old coins.",
                    "I have many books to read.",
                    "I hope to see you again soon."
                ],
                "ans": 4,
                "exp": "4번은 명사 books를 꾸며주는 '형용사적 용법'이고, 나머지는 모두 주어/목적어/보어로 쓰인 '명사적 용법'입니다.",
                "conceptRef": "1단계 [공식 1: to부정사의 주어와 보어]"
            },
            {
                "q": "다음 중 목적어로 to부정사만을 취하는 동사로 짝지어진 것은?",
                "options": [
                    "enjoy, finish",
                    "want, decide, hope",
                    "stop, mind",
                    "give, send",
                    "look, sound"
                ],
                "ans": 2,
                "exp": "want, decide, hope는 to부정사만을 목적어로 취하는 대표적 동사들입니다.",
                "conceptRef": "1단계 [공식 2: to부정사 목적어 동사군]"
            },
            {
                "q": "'내 계획은 이번 주말에 방을 청소하는 것이다.'를 바르게 영작한 것은?",
                "options": [
                    "My plan is to clean my room this weekend.",
                    "My plan to clean is my room this weekend.",
                    "My plan is clean my room this weekend.",
                    "My plan is for clean my room this weekend.",
                    "My plan are to clean my room this weekend."
                ],
                "ans": 1,
                "exp": "주격보어로 쓰인 to clean이 들어간 1번이 올바른 문장입니다.",
                "conceptRef": "1단계 [공식 1: to부정사의 주어와 보어]"
            }
        ]
    },

    # Unit 18: to부정사의 형용사적 용법
    {
        "unitNo": 18,
        "unitId": "lv1_u18",
        "legacyUnitNo": 18,
        "title": "to부정사의 형용사적 용법 (~할 명사 수식)",
        "part": "준동사의 기초",
        "targetGrade": "중1 내신 대비",
        "summary": "명사 뒤에서 후치 수식하여 '~할, ~하는'으로 해석되는 to부정사와 끝에 전치사를 반드시 붙여야 하는 핵심 내신 킬러",
        "overview": "형용사처럼 명사를 꾸며주는 to부정사예요! 우리말과 달리 영어는 긴 수식어구를 명사 '뒤'에 붙여요 (something to drink 마실 것). 특히 write with, sit on처럼 명사와 어울리는 전치사를 빠뜨리지 않는 고난도 출제 공식을 마스터해 봅시다!",
        "keyTakeaways": [
            "형용사적 용법: 명사 + to-V (뒤에서 명사를 수식하여 '~할, ~하는'으로 해석)",
            "-thing / -one / -body + 형용사 + to-V (something cold to drink)",
            "★전치사 필수 구문: a chair to sit on, a pen to write with, a friend to talk to"
        ],
        "formulaCards": [
            {
                "name": "명사 후치 수식과 -thing 어순 공식",
                "formula": "명사 + to-V (~할 명사) | -thing + 형용사 + to-V",
                "examples": [
                    {
                        "en": "I have a lot of homework to finish before midnight.",
                        "ko": "나는 자정 전에 끝마쳐야 할 많은 숙제를 가지고 있다.",
                        "point": "homework 뒤에서 to finish가 숙제를 수식합니다."
                    },
                    {
                        "en": "Do you want something cold to drink on this hot afternoon?",
                        "ko": "이 더운 오후에 무언가 시원하게 마실 것을 원하니?",
                        "point": "-thing 뒤에 형용사 cold가 오고 그 뒤에 to drink가 붙는 어순입니다."
                    }
                ],
                "oxCompare": {
                    "o": "Give me something warm to eat.",
                    "x": "Give me to eat something warm.",
                    "comment": "-thing 단어는 '명사 + 형용사 + to-V' 어순이 철칙입니다."
                },
                "trap": "something to drink cold (X) ➔ something cold to drink (O) 어순 시험 1순위!",
                "quizLink": "형용사와 to부정사가 동시에 -thing을 꾸밀 때는 형용사가 먼저, to-V가 나중입니다."
            },
            {
                "name": "전치사가 꼭 필요한 to부정사 공식",
                "formula": "명사 + to-V + 전치사 (동사 + 전치사 + 명사 연결 검증)",
                "examples": [
                    {
                        "en": "He brought a comfortable chair to sit on in the garden.",
                        "ko": "그는 정원에서 앉을 편안한 의자 하나를 가져왔다.",
                        "point": "sit on the chair이므로 전치사 on이 반드시 있어야 합니다."
                    },
                    {
                        "en": "She needs a black pen to write with on the paper.",
                        "ko": "그녀는 종이 위에 쓸 검은색 펜 하나를 필요로 한다.",
                        "point": "write with a pen이므로 도구를 나타내는 전치사 with가 필수적입니다."
                    }
                ],
                "oxCompare": {
                    "o": "I need a house to live in.",
                    "x": "I need a house to live.",
                    "comment": "live in a house이므로 전치사 in을 빠뜨리면 비문이 됩니다."
                },
                "trap": "sit a chair(X) ➔ sit on a chair(O)! 전치사를 생략하는 순간 오답이 됩니다.",
                "quizLink": "to-V 뒤의 전치사 유무는 수식받는 명사를 동사 뒤로 보내보면 바로 판별할 수 있습니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u18_d1",
                "missionTitle": "미션 1: to부정사 뒤 필수 전치사 on 누락 오류",
                "sentence": "There are no empty chairs to sit in the crowded waiting room.",
                "korean": "혼잡한 대기실에는 앉을 빈 의자가 하나도 없다.",
                "underlined": ["There are", "no empty chairs", "to sit", "in the crowded waiting room"],
                "wrongIndex": 2,
                "correction": "to sit on",
                "explanation": "의자 위에 앉는 것이므로 sit on the chair에서 유래한 전치사 on이 반드시 들어가야 합니다.",
                "conceptRef": "1단계 [공식 2: 전치사가 꼭 필요한 to부정사] 출제 연계"
            },
            {
                "id": "lv1_u18_d2",
                "missionTitle": "미션 2: to부정사 필수 전치사 with 누락 오류",
                "sentence": "Please lend me a pencil to write during the English exam.",
                "korean": "영어 시험 동안에 쓸 연필 한 자루만 빌려주세요.",
                "underlined": ["Please lend me", "a pencil to write", "during", "the English exam"],
                "wrongIndex": 1,
                "correction": "a pencil to write with",
                "explanation": "연필을 가지고 쓰는 도구의 개념이므로 write with a pencil에서 with가 필수입니다.",
                "conceptRef": "1단계 [공식 2: 전치사가 꼭 필요한 to부정사] 출제 연계"
            },
            {
                "id": "lv1_u18_d3",
                "missionTitle": "미션 3: -thing 수식어 어순 배열 오류 수정",
                "sentence": "I want to drink something cold on this hot summer afternoon.",
                "korean": "나는 이 더운 여름 오후에 시원한 마실 것을 원한다.",
                "underlined": ["I want", "to drink something cold", "on this hot", "summer afternoon"],
                "wrongIndex": 1,
                "correction": "something cold to drink",
                "explanation": "-thing 대명사는 형용사 + to부정사 순서로 수식받으므로 something cold to drink가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 명사 후치 수식과 -thing 어순] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말이 바르게 짝지어진 것은?\n\n'I have no friends to play ______.'",
                "options": ["in", "on", "with", "at", "for"],
                "ans": 3,
                "exp": "친구와 함께 노는 것이므로 play with friends에서 유래하여 with가 알맞습니다.",
                "conceptRef": "1단계 [공식 2: 전치사가 꼭 필요한 to부정사]"
            },
            {
                "q": "다음 빈칸에 들어갈 단어들의 올바른 순서는?\n\n'I am very hungry. Give me ______.'",
                "options": [
                    "to eat warm something",
                    "something to eat warm",
                    "something warm to eat",
                    "warm something to eat",
                    "warm to eat something"
                ],
                "ans": 3,
                "exp": "-thing + 형용사 + to-V 어순이므로 something warm to eat가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 명사 후치 수식과 -thing 어순]"
            },
            {
                "q": "다음 중 밑줄 친 부분에 전치사가 필요한 문장은?",
                "options": [
                    "I have a lot of books to read.",
                    "She needs a piece of paper to write on.",
                    "There are many places to visit.",
                    "I bought some food to eat.",
                    "He has no homework to do."
                ],
                "ans": 2,
                "exp": "종이 위에 글을 쓰는 것이므로 write on a piece of paper에서 on이 필요합니다.",
                "conceptRef": "1단계 [공식 2: 전치사가 꼭 필요한 to부정사]"
            },
            {
                "q": "'그는 살 집이 필요하다.'를 바르게 영작한 것은?",
                "options": [
                    "He needs a house to live.",
                    "He needs a house to live in.",
                    "He needs to live in a house.",
                    "He needs a house living in.",
                    "He needs a house to living."
                ],
                "ans": 2,
                "exp": "live in a house이므로 a house to live in이 올바른 형용사적 용법입니다.",
                "conceptRef": "1단계 [공식 2: 전치사가 꼭 필요한 to부정사]"
            },
            {
                "q": "다음 밑줄 친 to부정사의 쓰임이 <보기>와 같은 것은?\n\n<보기> 'She has no time <u>to watch</u> television.'",
                "options": [
                    "To swim in the river is fun.",
                    "I want to become a teacher.",
                    "He bought some flowers to give his mom.",
                    "Give me some water to drink.",
                    "My dream is to travel to space."
                ],
                "ans": 4,
                "exp": "<보기>는 time을 꾸며주는 형용사적 용법입니다. 4번의 to drink도 water를 꾸며주는 형용사적 용법입니다.",
                "conceptRef": "1단계 [공식 1: 명사 후치 수식]"
            }
        ]
    },

    # Unit 19: 동명사의 기초
    {
        "unitNo": 19,
        "unitId": "lv1_u19",
        "legacyUnitNo": 19,
        "title": "동명사의 기초 (주어, 목적어, 전치사의 목적어)",
        "part": "준동사의 기초",
        "targetGrade": "중1 내신 대비",
        "summary": "동사원형에 -ing를 붙여 명사 역할을 하는 동명사의 주·목·보 기능과 동명사만을 목적어로 취하는 메가패스 동사군",
        "overview": "동사 뒤에 -ing를 붙이면 '~하는 것, ~하기'라는 명사로 탈바꿈해요! to부정사처럼 주어, 목적어, 보어로 쓰이며, 특히 전치사 뒤에는 to부정사가 못 오고 오직 동명사만 올 수 있다는 절대 법칙과 enjoy, finish 등 동명사 전용 단짝 동사들을 배워봅시다!",
        "keyTakeaways": [
            "동명사: 동사원형 + -ing (~하는 것, ~하기)",
            "★전치사 뒤에는 무조건 동명사! (전치사의 목적어: of/in/about/for + V-ing)",
            "동명사만 취하는 동사군: enjoy, finish, stop, give up, mind, avoid"
        ],
        "formulaCards": [
            {
                "name": "동명사의 기본 역할과 전치사의 목적어",
                "formula": "V-ing + 단수동사 (주어) | 전치사 + V-ing (전치사의 목적어)",
                "examples": [
                    {
                        "en": "Listening to classical music helps me relax after studying.",
                        "ko": "클래식 음악을 듣는 것은 공부한 후 긴장을 푸는 데 도움을 준다.",
                        "point": "동명사구(Listening to ~)가 주어이므로 단수동사 helps를 씁니다."
                    },
                    {
                        "en": "Thank you very much for inviting me to your birthday party.",
                        "ko": "너의 생일 파티에 나를 초대해 주어서 정말 고마워.",
                        "point": "전치사 for 뒤에는 to invite가 올 수 없고 동명사 inviting이 와야 합니다."
                    }
                ],
                "oxCompare": {
                    "o": "She is good at speaking English.",
                    "x": "She is good at to speak English.",
                    "comment": "전치사 at 뒤에는 to부정사를 쓸 수 없으며 반드시 동명사 speaking을 써야 합니다."
                },
                "trap": "전치사 뒤에는 to-V가 절대 올 수 없고 오직 동명사(-ing)만 올 수 있습니다!",
                "quizLink": "be good at -ing, be afraid of -ing, thank you for -ing는 시험 단골 전치사구입니다."
            },
            {
                "name": "동명사만을 목적어로 취하는 메가패스 동사",
                "formula": "enjoy / finish / mind / give up / avoid / stop + V-ing",
                "examples": [
                    {
                        "en": "I really enjoy playing computer games with my friends.",
                        "ko": "나는 친구들과 컴퓨터 게임을 하는 것을 정말 즐긴다.",
                        "point": "enjoy는 목적어로 to부정사가 아닌 동명사 playing을 취합니다."
                    },
                    {
                        "en": "He finished cleaning his bedroom before his parents came.",
                        "ko": "그는 부모님이 오시기 전에 침실 청소하는 것을 끝마쳤다.",
                        "point": "finish는 동명사 cleaning만을 목적어로 취합니다."
                    }
                ],
                "oxCompare": {
                    "o": "She finished doing her math homework.",
                    "x": "She finished to do her math homework.",
                    "comment": "finish는 to부정사를 목적어로 취할 수 없고 동명사만 취합니다."
                },
                "trap": "과거나 현재의 경험, 일의 중단/마무리를 나타내는 동사들은 동명사를 좋아합니다.",
                "quizLink": "enjoy -ing, finish -ing, give up -ing, stop -ing는 1초 만에 풀어야 하는 필수 짝꿍입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u19_d1",
                "missionTitle": "미션 1: 전치사 뒤 to부정사 오용 수정",
                "sentence": "My little brother is very interested in to learn Spanish.",
                "korean": "내 남동생은 스페인어를 배우는 것에 매우 관심이 많다.",
                "underlined": ["My little brother", "is very", "interested in", "to learn Spanish"],
                "wrongIndex": 3,
                "correction": "learning Spanish",
                "explanation": "전치사 in 뒤에는 to부정사가 올 수 없으므로 동명사 learning으로 고쳐야 합니다.",
                "conceptRef": "1단계 [공식 1: 전치사의 목적어] 출제 연계"
            },
            {
                "id": "lv1_u19_d2",
                "missionTitle": "미션 2: enjoy의 목적어 형태 오류 수정",
                "sentence": "We enjoyed to walk along the sandy beach at sunset.",
                "korean": "우리는 일몰 때 모래사장을 따라 산책하는 것을 즐겼다.",
                "underlined": ["We enjoyed", "to walk", "along the sandy beach", "at sunset"],
                "wrongIndex": 1,
                "correction": "walking",
                "explanation": "enjoy는 목적어로 to부정사가 아닌 동명사를 취하므로 walking이 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 동명사만 취하는 동사] 출제 연계"
            },
            {
                "id": "lv1_u19_d3",
                "missionTitle": "미션 3: 동명사 주어의 동사 수일치 오류",
                "sentence": "Making paper airplanes are a fun activity for children.",
                "korean": "종이비행기를 만드는 것은 어린이들에게 재미있는 활동이다.",
                "underlined": ["Making paper airplanes", "are a fun", "activity", "for children"],
                "wrongIndex": 1,
                "correction": "is a fun",
                "explanation": "airplanes가 복수여도 주어는 동명사 Making이므로 단수동사 is를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 동명사의 기본 역할] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'She finished ______ the dishes after dinner.'",
                "options": ["wash", "washing", "to wash", "washed", "washes"],
                "ans": 2,
                "exp": "finish는 동명사만을 목적어로 취하므로 washing이 정답입니다.",
                "conceptRef": "1단계 [공식 2: 동명사만 취하는 동사]"
            },
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'Thank you for ______ me with this problem.'",
                "options": ["help", "to help", "helping", "helped", "helps"],
                "ans": 3,
                "exp": "전치사 for 뒤에는 동명사가 와야 하므로 helping이 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 전치사의 목적어]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "I enjoy listening to music.",
                    "She gave up smoking.",
                    "He decided meeting her tomorrow.",
                    "Playing games is exciting.",
                    "He is afraid of failing the test."
                ],
                "ans": 3,
                "exp": "decide는 동명사가 아니라 to부정사를 목적어로 취하므로 to meet이 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 동명사만 취하는 동사]"
            },
            {
                "q": "'그는 피아노 연주를 매우 잘한다.'를 바르게 영작한 것은?",
                "options": [
                    "He is good at to play the piano.",
                    "He is good at play the piano.",
                    "He is good at playing the piano.",
                    "He is good at played the piano.",
                    "He is good for play the piano."
                ],
                "ans": 3,
                "exp": "be good at 뒤에는 전치사의 목적어로 동명사 playing the piano가 옵니다.",
                "conceptRef": "1단계 [공식 1: 전치사의 목적어]"
            },
            {
                "q": "다음 밑줄 친 '-ing'의 쓰임이 나머지 넷과 다른 하나는?",
                "options": [
                    "<u>Cooking</u> is my mother's hobby.",
                    "I enjoy <u>reading</u> books.",
                    "He is <u>sleeping</u> in his room now.",
                    "She is good at <u>drawing</u> pictures.",
                    "<u>Eating</u> breakfast is important."
                ],
                "ans": 3,
                "exp": "3번의 sleeping은 현재진행형의 '현재분사'이고, 나머지는 모두 주어/목적어로 쓰인 '동명사'입니다.",
                "conceptRef": "1단계 [공식 1: 동명사의 기본 역할]"
            }
        ]
    },

    # Unit 20: 재귀대명사 (-self)
    {
        "unitNo": 20,
        "unitId": "lv1_u20",
        "legacyUnitNo": 20,
        "title": "재귀대명사 (-self, 재귀적 용법 vs 강조적 용법)",
        "part": "대명사의 확장",
        "targetGrade": "중1 내신 대비",
        "summary": "주어와 목적어가 같을 때 쓰는 재귀대명사의 형태와 생략 불가능한 재귀적 용법 vs 생략 가능한 강조적 용법의 판별",
        "overview": "'그는 거울 속 자신을 보았다'처럼 어떤 행동의 결과가 다시 자기 자신에게 돌아올 때 쓰는 말이 '재귀대명사(-self)'예요! 문장의 필수 목적어로 쓰여 생략할 수 없는 '재귀적 용법'과, 단순히 뜻을 강조해서 생략해도 문장이 완벽한 '강조적 용법'을 칼같이 구별해 봅시다!",
        "keyTakeaways": [
            "형태: 단수 -self (myself, yourself, himself, herself, itself) / 복수 -selves (ourselves, yourselves, themselves)",
            "재귀적 용법: 주어 = 목적어 (생략 불가! 예: He looked at himself.)",
            "강조적 용법: 주어/목적어를 직접 강조 (생략 가능! 예: I made it myself.)"
        ],
        "formulaCards": [
            {
                "name": "재귀적 용법 vs 강조적 용법 판별 공식",
                "formula": "동사/전치사의 목적어 ➔ 재귀적(생략 불가) | 주어/목적어 뒤 ➔ 강조적(생략 가능)",
                "examples": [
                    {
                        "en": "The little boy introduced himself to the new classmates.",
                        "ko": "그 어린 소년은 새로운 반 친구들에게 자기 자신을 소개했다.",
                        "point": "introduced의 필수 목적어이므로 생략할 수 없는 재귀적 용법입니다."
                    },
                    {
                        "en": "I built this wooden birdhouse myself without any help.",
                        "ko": "나는 아무런 도움 없이 이 나무 새집을 내 스스로 직접 만들었다.",
                        "point": "myself를 생략해도 문장이 완전하므로 주어 I를 강조하는 강조적 용법입니다."
                    }
                ],
                "oxCompare": {
                    "o": "He loves himself.",
                    "x": "He loves him.",
                    "comment": "자신을 사랑하는 것이므로 주어 He와 동일 인물이면 him이 아니라 himself를 써야 합니다."
                },
                "trap": "손가락으로 재귀대명사를 가렸을 때 문장이 말이 되면 강조, 불완전하면 재귀적 용법입니다!",
                "quizLink": "중1 내신에서 밑줄 친 myself/himself의 용법이 다른 것을 고르는 문제는 100% 출제됩니다."
            },
            {
                "name": "전치사와 결합한 재귀대명사 관용표현",
                "formula": "by oneself(혼자서) | for oneself(스스로) | help oneself to(마음껏 먹다)",
                "examples": [
                    {
                        "en": "She solved the difficult puzzle all by herself.",
                        "ko": "그녀는 그 어려운 퍼즐을 온전히 혼자 힘으로 풀었다.",
                        "point": "by oneself는 alone(혼자서)과 같은 뜻의 관용구입니다."
                    },
                    {
                        "en": "Please help yourselves to the fresh cookies on the table.",
                        "ko": "탁자 위에 있는 신선한 쿠키를 마음껏 드세요.",
                        "point": "help oneself to는 '음식을 마음껏 먹다'라는 숙어입니다."
                    }
                ],
                "oxCompare": {
                    "o": "Enjoy yourself at the party!",
                    "x": "Enjoy you at the party!",
                    "comment": "즐거운 시간을 보내라는 표현은 enjoy yourself입니다."
                },
                "trap": "복수 주어(You/They/We)일 때는 -self가 아니라 -selves로 써야 합니다.",
                "quizLink": "by oneself = on one's own(혼자 힘으로)도 함께 알아두면 시험에서 유리합니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv1_u20_d1",
                "missionTitle": "미션 1: 주어와 목적어 일치 시 대명사 오류",
                "sentence": "Tom looked at him in the mirror and smiled brightly.",
                "korean": "톰은 거울 속의 자기 자신을 쳐다보며 환하게 미소 지었다.",
                "underlined": ["Tom looked", "at him", "in the mirror", "and smiled brightly"],
                "wrongIndex": 1,
                "correction": "at himself",
                "explanation": "주어 Tom이 거울 속 자기 자신을 보는 것이므로 him이 아니라 재귀대명사 himself가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 재귀적 용법 판별] 출제 연계"
            },
            {
                "id": "lv1_u20_d2",
                "missionTitle": "미션 2: 복수 재귀대명사 철자 오류 수정",
                "sentence": "The students cleaned the entire classroom by theirself yesterday afternoon.",
                "korean": "학생들은 교실 전체를 그들 스스로 청소했다.",
                "underlined": ["The students cleaned", "the entire classroom", "by theirself", "yesterday afternoon"],
                "wrongIndex": 2,
                "correction": "by themselves",
                "explanation": "The students는 복수이므로 theirself가 아니라 themselves로 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 관용표현과 복수형] 출제 연계"
            },
            {
                "id": "lv1_u20_d3",
                "missionTitle": "미션 3: 1인칭 단수 재귀대명사 형태 오류",
                "sentence": "I made this delicious chocolate cake meself yesterday.",
                "korean": "나는 어제 이 맛있는 초콜릿 케이크를 내 스스로 직접 만들었다.",
                "underlined": ["I made", "this delicious", "chocolate cake meself", "yesterday"],
                "wrongIndex": 2,
                "correction": "chocolate cake myself",
                "explanation": "1인칭 I의 재귀대명사는 meself가 아니라 myself입니다.",
                "conceptRef": "1단계 [공식 1: 재귀적 vs 강조적 용법] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 알맞은 재귀대명사는?\n\n'She looked at ______ in the clear water.'",
                "options": ["her", "herself", "hers", "she", "himself"],
                "ans": 2,
                "exp": "주어 She가 자기 자신을 보는 것이므로 재귀대명사 herself가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 재귀적 vs 강조적 용법]"
            },
            {
                "q": "다음 밑줄 친 재귀대명사 중 생략할 수 있는 것은?",
                "options": [
                    "He hurt <u>himself</u> during the soccer game.",
                    "I introduced <u>myself</u> to the teacher.",
                    "She lives by <u>herself</u> in a small apartment.",
                    "I baked this bread <u>myself</u>.",
                    "You should take care of <u>yourself</u>."
                ],
                "ans": 4,
                "exp": "4번의 myself는 문장의 목적어가 아니라 단순히 주어를 강조하기 위해 덧붙인 강조적 용법이므로 생략 가능합니다.",
                "conceptRef": "1단계 [공식 1: 재귀적 vs 강조적 용법]"
            },
            {
                "q": "다음 빈칸에 들어갈 말이 알맞게 짝지어진 것은?\n\n'They finished the science project all by ______.'",
                "options": ["themself", "themselves", "theirselves", "himself", "herself"],
                "ans": 2,
                "exp": "They의 올바른 복수 재귀대명사는 themselves입니다.",
                "conceptRef": "1단계 [공식 2: 관용표현과 복수형]"
            },
            {
                "q": "'파티에서 즐거운 시간을 보내라!'를 바르게 영작한 것은?",
                "options": [
                    "Enjoy you at the party!",
                    "Enjoy yourself at the party!",
                    "Enjoy your at the party!",
                    "Enjoy yours at the party!",
                    "Enjoy by yourself at the party!"
                ],
                "ans": 2,
                "exp": "즐거운 시간을 보내라는 표현은 enjoy yourself입니다.",
                "conceptRef": "1단계 [공식 2: 관용표현]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어법상 어색한 문장은?",
                "options": [
                    "He did it by himself.",
                    "We enjoyed ourselves at the concert.",
                    "Help yourself to some juice.",
                    "They looked at theirselves in the photo.",
                    "She taught herself how to play guitar."
                ],
                "ans": 4,
                "exp": "theirselves라는 단어는 없으며, themselves로 표기해야 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 관용표현과 복수형]"
            }
        ]
    }
]

print("LV1 part3 loaded: Units 17 to 20")
