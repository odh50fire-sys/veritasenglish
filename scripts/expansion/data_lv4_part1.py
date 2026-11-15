# -*- coding: utf-8 -*-
"""
Level 4 (고교 내신 마스터) Units 9 ~ 14.
"""

LV4_PART1 = [
    # Unit 9: 긴 명사구/절 주어와 거품 빼기 수일치
    {
        "unitNo": 9,
        "unitId": "lv4_u9",
        "legacyUnitNo": 45,
        "title": "긴 명사구/절 주어와 수식어구 거품 빼기 수일치",
        "part": "고교 어법 1등급",
        "targetGrade": "고교 1~2학년 내신",
        "summary": "주어와 동사 사이에 길게 삽입된 전치사구, 관계사절, 분사구 등 수식어구 거품을 걷어내고 진짜 주어 핵(Head)을 찾아 단·복수를 일치시키는 고교 내신 1순위 문법",
        "overview": "고등학교 시험에서는 주어와 동사 사이를 온갖 수식어구로 가로막아 수일치를 헷갈리게 만들어요! 괄호 치기로 수식어구 거품을 시원하게 걷어내고, 문장의 진짜 주인(핵심 명사)을 찾아 단수/복수 동사를 매칭하는 고교 내신 1등급 필살기를 배워봅시다!",
        "keyTakeaways": [
            "진짜 주어 찾기: [진짜 주어] + (전치사구 / 관계사절 / 분사구 / 형용사구) + [본동사]",
            "수식어구 속 복수명사 함정 피하기: The quality of these products (is / are) ➔ 주어는 quality이므로 is!",
            "명사절/동명사구 주어: 단수 취급 (That S + V / To-V / V-ing ➔ 단수동사)"
        ],
        "formulaCards": [
            {
                "name": "수식어구 거품 걷어내기 수일치 공식",
                "formula": "단수 명사 + (전치사구/분사/관계사절) + 단수동사 | 복수 명사 + (...) + 복수동사",
                "examples": [
                    {
                        "en": "The quality of the fresh organic ingredients determines the final taste.",
                        "ko": "신선한 유기농 재료들의 품질이 최종적인 맛을 결정한다.",
                        "point": "ingredients가 복수여도 진짜 주어는 단수명사 The quality이므로 단수동사 determines를 씁니다."
                    },
                    {
                        "en": "The researchers working on the advanced AI technology are very talented.",
                        "ko": "첨단 AI 기술을 연구하는 그 연구원들은 매우 재능이 뛰어나다.",
                        "point": "technology가 단수여도 주어 핵은 The researchers(복수)이므로 복수동사 are를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "The discovery of new ancient tools changes our understanding.",
                    "x": "The discovery of new ancient tools change our understanding.",
                    "comment": "tools의 복수형태에 낚이지 말고 핵심 주어 The discovery(단수)에 맞춰 changes를 써야 합니다."
                },
                "trap": "동사 바로 앞 명사가 복수여도 진짜 주어는 전치사구 앞에 있는 경우가 90%입니다!",
                "quizLink": "고교 내신과 수능 29번에서 가장 높은 빈도로 정답을 가르는 단골 킬러입니다."
            },
            {
                "name": "구와 절 주어의 단수 취급 원칙",
                "formula": "동명사구(V-ing) / to부정사구 / 명사절(That/What S+V) ➔ 무조건 단수동사!",
                "examples": [
                    {
                        "en": "Developing renewable energy sources is essential for the future.",
                        "ko": "재생 가능한 에너지원을 개발하는 것은 미래를 위해 필수적이다.",
                        "point": "energy sources가 복수여도 주어는 동명사 Developing이므로 단수동사 is를 씁니다."
                    },
                    {
                        "en": "What we need most in this critical crisis is mutual trust.",
                        "ko": "이 중대한 위기에서 우리가 가장 필요로 하는 것은 상호 신뢰이다.",
                        "point": "What 명사절 주어는 단수 취급하여 is를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "Collecting antique coins requires great patience.",
                    "x": "Collecting antique coins require great patience.",
                    "comment": "동명사구 주어 Collecting은 단수 취급하므로 requires가 올바릅니다."
                },
                "trap": "명사절(What절) 안에 복수명사가 있어도 절 전체는 하나의 덩어리로서 단수 취급합니다.",
                "quizLink": "동명사 목적어가 복수명사인 구조(Solving difficult math problems is fun)는 내신 대표 문제입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv4_u9_d1",
                "missionTitle": "미션 1: 전치사구 수식 속 핵심 주어 수일치 오류",
                "sentence": "The impact of climate change on coastal cities are becoming severe.",
                "korean": "기후 변화가 해안 도시들에 미치는 영향은 점점 심각해지고 있다.",
                "underlined": ["The impact of", "climate change on", "coastal cities are", "becoming severe"],
                "wrongIndex": 2,
                "correction": "coastal cities is",
                "explanation": "주어 핵은 단수명사인 The impact이므로 coastal cities에 속지 말고 단수동사 is가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 거품 걷어내기 수일치] 출제 연계"
            },
            {
                "id": "lv4_u9_d2",
                "missionTitle": "미션 2: 동명사구 주어의 복수동사 오용 수정",
                "sentence": "Reading books written by various classical authors broaden your horizon.",
                "korean": "다양한 고전 작가들이 쓴 책들을 읽는 것은 당신의 시야를 넓혀준다.",
                "underlined": ["Reading books", "written by various", "classical authors broaden", "your horizon"],
                "wrongIndex": 2,
                "correction": "classical authors broadens",
                "explanation": "주어는 동명사 Reading이므로 3인칭 단수 취급하여 동사원형 broaden 대신 broadens를 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 구와 절 주어 단수 취급] 출제 연계"
            },
            {
                "id": "lv4_u9_d3",
                "missionTitle": "미션 3: 관계사절 수식 복수 주어의 단수동사 오류",
                "sentence": "The volunteers who helped the elderly during the flood was praised.",
                "korean": "홍수 동안 어르신들을 도왔던 자원봉사자들은 칭찬을 받았다.",
                "underlined": ["The volunteers who", "helped the elderly", "during the flood", "was praised"],
                "wrongIndex": 3,
                "correction": "were praised",
                "explanation": "주어가 The volunteers(복수)이므로 관계사절 수식을 건너뛰어 복수동사 were praised가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 거품 걷어내기 수일치] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 알맞은 동사의 형태는?\n\n'The main reason for these environmental problems ______ human activity.'",
                "options": ["are", "is", "were", "being", "have been"],
                "ans": 2,
                "exp": "주어의 핵은 단수명사 The main reason이므로 단수동사 is가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 거품 걷어내기 수일치]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 말로 알맞은 것은?\n\n'Exercising regularly in the morning ______ good for reducing stress.'",
                "options": ["is", "are", "be", "were", "being"],
                "ans": 1,
                "exp": "동명사구 주어(Exercising regularly ~)는 3인칭 단수 취급하므로 is가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 구와 절 주어 단수 취급]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "The box of chocolates is on the table.",
                    "The students who passed the test are happy.",
                    "Learning foreign languages require much time.",
                    "The cause of these accidents remains unknown.",
                    "What he needs right now is a warm meal."
                ],
                "ans": 3,
                "exp": "Learning foreign languages는 동명사 주어이므로 require 대신 단수동사 requires를 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 구와 절 주어 단수 취급]"
            },
            {
                "q": "'이 새로운 백신들을 개발하는 데 든 비용은 엄청났다.'를 영작할 때 빈칸에 알맞은 것은?\n\n'The cost of developing these new vaccines ______ enormous.'",
                "options": ["were", "was", "are", "have been", "being"],
                "ans": 2,
                "exp": "주어의 핵심 명사가 단수명사 The cost이므로 과거 단수동사 was가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 거품 걷어내기 수일치]"
            },
            {
                "q": "다음 밑줄 친 부분 중 어법상 올바른 것은?",
                "options": [
                    "The water in these rivers <u>are</u> polluted.",
                    "To read many good books <u>expand</u> your mind.",
                    "The boys playing with the dog <u>is</u> my brothers.",
                    "The girl with long hair and bright eyes <u>smiles</u> sweetly.",
                    "Making new friends <u>are</u> not always easy."
                ],
                "ans": 4,
                "exp": "4번은 단수 주어 The girl에 맞추어 단수동사 smiles를 바르게 쓴 문장입니다.",
                "conceptRef": "1단계 [공식 1: 거품 걷어내기 수일치]"
            }
        ]
    },

    # Unit 10: 상관접속사와 부분명사 수일치
    {
        "unitNo": 10,
        "unitId": "lv4_u10",
        "legacyUnitNo": 46,
        "title": "상관접속사와 부분명사의 수일치 공식",
        "part": "고교 어법 1등급",
        "targetGrade": "고교 1~2학년 내신",
        "summary": "not only A but also B, either A or B 등 B에 동사를 일치시키는 상관접속사와 part, most, half, percent of 뒤의 명사에 수일치시키는 부분명사 원칙",
        "overview": "단어들이 짝을 지어 다니는 '상관접속사'와 '부분명사(most of, half of 등)'는 동사의 수를 어디에 맞춰야 할지 헷갈리기 쉬워요! B에 맞추는 상관접속사 공식과 of 뒤의 진짜 명사에 맞추는 부분명사 원리를 명쾌하게 정리해 봅시다!",
        "keyTakeaways": [
            "B에 수일치: not only A but also B / either A or B / neither A nor B ➔ B의 수에 일치!",
            "예외 (항상 복수): both A and B ➔ 무조건 복수동사!",
            "부분명사: most / half / some / the rest / percent / fraction of + [명사] ➔ [명사]의 수에 일치!"
        ],
        "formulaCards": [
            {
                "name": "상관접속사의 B 수일치 공식",
                "formula": "not only A but also B = B as well as A ➔ 동사는 'B'에 일치!",
                "examples": [
                    {
                        "en": "Not only the teacher but also the students are excited about the vacation.",
                        "ko": "선생님뿐만 아니라 학생들도 방학에 대해 신나 있다.",
                        "point": "but also 뒤의 B인 the students(복수)에 맞추어 are를 씁니다."
                    },
                    {
                        "en": "Either you or he has to take responsibility for this mistake.",
                        "ko": "너나 그 사람 둘 중 한 명이 이 실수에 대해 책임을 져야 한다.",
                        "point": "either A or B에서 B인 he(3인칭 단수)에 맞추어 has to를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "Both you and I are students.",
                    "x": "Both you and I am students.",
                    "comment": "both A and B는 둘 다를 뜻하므로 무조건 복수동사 are를 써야 합니다."
                },
                "trap": "B as well as A는 A가 아니라 앞에 나오는 'B'에 동사를 일치시킵니다!",
                "quizLink": "Neither he nor I (am / is / are) 형태는 내신 시험의 단골 함정입니다 (B인 I에 맞춰 am)."
            },
            {
                "name": "부분명사 of + 명사 수일치 공식",
                "formula": "most / half / rest / percent / some of + [단수명사 ➔ 단수동사] / [복수명사 ➔ 복수동사]",
                "examples": [
                    {
                        "en": "Most of the fresh milk in the bottle was spoiled by the heat.",
                        "ko": "병 안의 신선한 우유의 대부분이 열기 때문에 상했다.",
                        "point": "the milk가 셀 수 없는 단수명사이므로 Most of 뒤에 단수동사 was를 씁니다."
                    },
                    {
                        "en": "Two thirds of the students have passed the qualification exam.",
                        "ko": "그 학생들의 3분의 2가 자격시험에 합격했다.",
                        "point": "the students가 복수명사이므로 복수동사 have passed를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "Half of the apples are rotten.",
                    "x": "Half of the apples is rotten.",
                    "comment": "of 뒤의 명사인 the apples가 복수이므로 복수동사 are가 맞습니다."
                },
                "trap": "percent나 분수 자체가 단·복수를 결정하는 것이 아니라 of 뒤의 명사가 결정합니다!",
                "quizLink": "고교 어법에서 수일치 문제의 50% 이상이 상관접속사와 부분명사에서 출제됩니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv4_u10_d1",
                "missionTitle": "미션 1: not only A but also B 수일치 오류",
                "sentence": "Not only the players but also the coach were satisfied with the game.",
                "korean": "선수들뿐만 아니라 코치 역시 경기에 만족했다.",
                "underlined": ["Not only the players", "but also the coach", "were satisfied", "with the game"],
                "wrongIndex": 2,
                "correction": "was satisfied",
                "explanation": "not only A but also B에서 동사는 B인 the coach(단수)에 일치시켜야 하므로 was satisfied가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 상관접속사 B 수일치] 출제 연계"
            },
            {
                "id": "lv4_u10_d2",
                "missionTitle": "미션 2: 부분명사 of 뒤 복수명사 단수동사 오류",
                "sentence": "Seventy percent of the participants in this survey was female.",
                "korean": "이 설문조사에 참여한 참가자들의 70퍼센트는 여성이었다.",
                "underlined": ["Seventy percent of", "the participants", "in this survey", "was female"],
                "wrongIndex": 3,
                "correction": "were female",
                "explanation": "percent of 뒤의 명사가 the participants(복수)이므로 동사도 복수형인 were가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 부분명사 수일치] 출제 연계"
            },
            {
                "id": "lv4_u10_d3",
                "missionTitle": "미션 3: either A or B의 B 수일치 오류 수정",
                "sentence": "Either you or Minho have to submit the group assignment today.",
                "korean": "너나 민호 둘 중 한 명이 오늘 조별 과제를 제출해야 한다.",
                "underlined": ["Either you", "or Minho have to", "submit the group", "assignment today"],
                "wrongIndex": 1,
                "correction": "or Minho has to",
                "explanation": "either A or B에서 동사는 B인 Minho(3인칭 단수)에 일치시켜야 하므로 has to가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 상관접속사 B 수일치] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 알맞은 be동사는?\n\n'Neither he nor I ______ interested in computer games.'",
                "options": ["am", "is", "are", "were", "be"],
                "ans": 1,
                "exp": "neither A nor B는 B에 수일치시키므로 B인 I에 맞추어 am이 정답입니다.",
                "conceptRef": "1단계 [공식 1: 상관접속사 B 수일치]"
            },
            {
                "q": "다음 빈칸에 들어갈 알맞은 동사의 형태는?\n\n'Half of the money ______ spent on buying new books.'",
                "options": ["were", "was", "are", "have been", "be"],
                "ans": 2,
                "exp": "the money는 셀 수 없는 단수명사이므로 Half of 뒤에 단수동사 was가 옵니다.",
                "conceptRef": "1단계 [공식 2: 부분명사 수일치]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "Both Jane and Tom like classical music.",
                    "Not only you but also he is responsible for this.",
                    "Most of the water on Earth is salty.",
                    "Two thirds of the students is from Asia.",
                    "Either my sister or my parents are coming."
                ],
                "ans": 4,
                "exp": "of 뒤의 the students가 복수이므로 is가 아니라 복수동사 are가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 부분명사 수일치]"
            },
            {
                "q": "'그뿐만 아니라 너도 그 시험에 합격했다.'를 영작할 때 빈칸에 알맞은 것은?\n\n'You as well as he ______ the exam.'",
                "options": ["have passed", "has passed", "passes", "is passed", "was passing"],
                "ans": 1,
                "exp": "B as well as A는 앞의 'B'인 You에 동사를 일치시키므로 have passed가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 상관접속사 B 수일치]"
            },
            {
                "q": "다음 빈칸에 들어갈 말이 바르게 짝지어진 것은?\n\n- 'Both he and she (is / are) very kind.'\n- 'The rest of the apples (is / are) fresh.'",
                "options": ["is - is", "are - are", "is - are", "are - is", "be - are"],
                "ans": 2,
                "exp": "both A and B는 무조건 복수 are, the apples가 복수이므로 The rest of 뒤에도 are입니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    },

    # Unit 11: 능동태 vs 수동태 심화 판별
    {
        "unitNo": 11,
        "unitId": "lv4_u11",
        "legacyUnitNo": 47,
        "title": "능동태 vs 수동태 심화 판별 (타동사의 목적어 유무)",
        "part": "고교 어법 1등급",
        "targetGrade": "고교 1~2학년 내신",
        "summary": "고교 내신과 모의고사의 단골 킬러인 '동사 자리의 능동 vs 수동' 판별 원리와 4형식/5형식 수동태의 보어 잔존 규칙",
        "overview": "고등학교 시험에서는 밑줄 친 동사가 능동(V)인지 수동(be p.p.)인지를 묻는 문제가 매 시험마다 출제돼요! 타동사 뒤에 목적어가 남아있는지 여부로 능/수동을 판별하는 기술과, 수동태가 되어도 뒤에 명사/형용사 보어가 남는 4형식·5형식 예외를 완벽히 정복해 봅시다!",
        "keyTakeaways": [
            "타동사 능/수동 판별 제1원칙: 뒤에 목적어가 있으면 ➔ 능동태(V) / 목적어가 없으면 ➔ 수동태(be p.p.)",
            "4형식 수동태: 직접목적어가 뒤에 남아있을 수 있음 (She was given a prize.)",
            "5형식 수동태: 목적격보어(명사/형용사/to-V)가 be p.p. 뒤에 그대로 남음 (He was named John.)"
        ],
        "formulaCards": [
            {
                "name": "타동사의 목적어 유무 판별 공식",
                "formula": "타동사 + [목적어 O] ➔ 능동태 | be + p.p. + [목적어 없음(전치사구/부사)] ➔ 수동태",
                "examples": [
                    {
                        "en": "The government released the official report yesterday.",
                        "ko": "정부는 어제 공식 보고서를 발표했다.",
                        "point": "뒤에 목적어 the official report가 있으므로 능동형 released를 씁니다."
                    },
                    {
                        "en": "The official report was released by the government yesterday.",
                        "ko": "그 공식 보고서는 어제 정부에 의해 발표되었다.",
                        "point": "뒤에 목적어가 없고 전치사구(by the government)가 이어지므로 수동태 was released입니다."
                    }
                ],
                "oxCompare": {
                    "o": "The package was delivered safely.",
                    "x": "The package delivered safely.",
                    "comment": "deliver는 타동사인데 뒤에 목적어가 없으므로 수동태 was delivered로 써야 합니다."
                },
                "trap": "주어가 사물이라고 무조건 수동태가 아닙니다! 자동사는 사물 주어여도 능동으로 씁니다.",
                "quizLink": "수능 29번에서 본동사 자리에 능동 vs 수동 선택은 배점 높은 필수 문제입니다."
            },
            {
                "name": "5형식 수동태와 목적격보어 잔존 공식",
                "formula": "주어 + be + p.p. + [형용사/to-V/명사 보어]",
                "examples": [
                    {
                        "en": "He was elected president of the student council by a large majority.",
                        "ko": "그는 압도적인 다수로 학생회 회장에 선출되었다.",
                        "point": "수동태 was elected 뒤에 목적격보어였던 명사 president가 그대로 남아있습니다."
                    },
                    {
                        "en": "All employees were asked to submit their reports on time.",
                        "ko": "모든 직원들은 정시에 보고서를 제출하도록 요청받았다.",
                        "point": "ask + O + to-V의 수동태로 be asked 뒤에 to submit이 그대로 이어집니다."
                    }
                ],
                "oxCompare": {
                    "o": "The door was kept closed.",
                    "x": "The door was kept closely.",
                    "comment": "keep의 목적격보어였던 형용사 closed가 수동태 뒤에 그대로 주격보어로 남아야 합니다."
                },
                "trap": "수동태 뒤에 명사가 있다고 해서 무조건 능동태로 오판하지 않도록 주의하세요 (5형식 명사 보어).",
                "quizLink": "call, name, elect, consider는 수동태 뒤에도 명사 보어가 남는 4대 대표 동사입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv4_u11_d1",
                "missionTitle": "미션 1: 목적어 결여 타동사의 능동형 오용 수정",
                "sentence": "The ancient treasure discovered accidentally by two local farmers.",
                "korean": "그 고대 보물은 두 명의 지역 농부에 의해 우연히 발견되었다.",
                "underlined": ["The ancient treasure", "discovered accidentally", "by two", "local farmers"],
                "wrongIndex": 1,
                "correction": "was discovered accidentally",
                "explanation": "treasure는 발견되는 수동의 대상이고 뒤에 목적어가 없으므로 was discovered가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 목적어 유무 판별] 출제 연계"
            },
            {
                "id": "lv4_u11_d2",
                "missionTitle": "미션 2: 5형식 지각동사 수동태 to부정사 부활 오류",
                "sentence": "The suspicious suspect was seen enter the dark warehouse alone.",
                "korean": "그 의심스러운 용의자가 혼자 어두운 창고로 들어가는 것이 목격되었다.",
                "underlined": ["The suspicious suspect", "was seen enter", "the dark warehouse", "alone"],
                "wrongIndex": 1,
                "correction": "was seen to enter (or was seen entering)",
                "explanation": "지각/사역동사가 수동태가 되면 능동태의 동사원형 보어 앞에 to가 살아나 to enter가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 5형식 수동태] 출제 연계"
            },
            {
                "id": "lv4_u11_d3",
                "missionTitle": "미션 3: 수동태 불가 자동사의 수동태 오용",
                "sentence": "The tragic car accident was happened on the rainy highway yesterday afternoon.",
                "korean": "그 비극적인 자동차 사고는 어제 비 내리는 고속도로에서 일어났다.",
                "underlined": ["The tragic car accident", "was happened on", "the rainy highway", "yesterday afternoon"],
                "wrongIndex": 1,
                "correction": "happened on",
                "explanation": "happen은 목적어를 갖지 않는 완전자동사이므로 수동태 was happened로 쓸 수 없고 happened로 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 목적어 유무 판별] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'The new bridge ______ next month according to the city plan.'",
                "options": ["will complete", "will be completed", "completes", "has completed", "is completing"],
                "ans": 2,
                "exp": "다리가 완공되는 수동의 관계이고 next month가 있으므로 will be completed가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 목적어 유무 판별]"
            },
            {
                "q": "다음 중 어법상 수동태로 쓸 수 없는 문장은?",
                "options": [
                    "They built the castle.",
                    "An unexpected accident occurred.",
                    "She wrote a touching poem.",
                    "He painted the fence green.",
                    "The committee approved the plan."
                ],
                "ans": 2,
                "exp": "occur(발생하다)는 자동사이므로 수동태를 만들 수 없습니다.",
                "conceptRef": "1단계 [공식 1: 목적어 유무 판별]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "He was seen to cross the bridge.",
                    "She was elected president of the club.",
                    "The problem solved easily by the team.",
                    "The room was kept warm all night.",
                    "I was told to wait outside."
                ],
                "ans": 3,
                "exp": "문제가 팀에 의해 해결된 것이므로 was solved easily가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 목적어 유무 판별]"
            },
            {
                "q": "'그는 우리에게 회의에 늦지 말라고 요청받았다.'를 바르게 영작한 것은?",
                "options": [
                    "He was asked not to be late for the meeting.",
                    "He asked not to be late for the meeting.",
                    "He was asked to not be late for the meeting.",
                    "He was asking not to be late for the meeting.",
                    "He had asked not to be late for the meeting."
                ],
                "ans": 1,
                "exp": "수동태 was asked 뒤에 목적격보어 not to be late가 그대로 이어진 1번이 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 5형식 수동태]"
            },
            {
                "q": "다음 괄호 안에서 알맞은 말이 바르게 짝지어진 것은?\n\n- 'The meeting was (delayed / delaying) due to the storm.'\n- 'A strange light (appeared / was appeared) in the sky.'",
                "options": [
                    "delayed - appeared",
                    "delaying - appeared",
                    "delayed - was appeared",
                    "delaying - was appeared",
                    "delays - appeared"
                ],
                "ans": 1,
                "exp": "회의는 연기된 수동 delayed, appear는 자동사이므로 능동 appeared가 정답입니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    },

    # Unit 12: 목적격보어 자리의 분사 판별
    {
        "unitNo": 12,
        "unitId": "lv4_u12",
        "legacyUnitNo": 48,
        "title": "목적격보어 자리의 분사 판별 (V-ing vs p.p.)",
        "part": "준동사의 심화",
        "targetGrade": "고교 1~2학년 내신",
        "summary": "5형식 문장에서 목적어와 목적격보어의 관계가 능동일 때 현재분사(V-ing) vs 수동일 때 과거분사(p.p.)를 선택하는 고교 킬러 공식",
        "overview": "'내 차가 수리되게 했다(have my car repaired)'처럼 목적어가 동작을 스스로 하느냐, 다른 대상에 의해 당하느냐에 따라 목적격보어의 형태가 달라져요! 목적어와 보어 사이에 '주어-동사 관계'를 설정하여 능동(V-ing)과 수동(p.p.)을 1초 만에 판별하는 비법을 배워봅시다!",
        "keyTakeaways": [
            "판별 공식: 목적어와 목적격보어 사이에 be동사를 넣어본다! (O is V-ing vs O is p.p.)",
            "능동 진행: S + see/hear/keep/leave + O + V-ing (목적어가 ~하고 있는 것을)",
            "수동 완료: S + have/get/see/hear + O + p.p. (목적어가 ~되어지게/당하게)"
        ],
        "formulaCards": [
            {
                "name": "사역동사 have/get + 목적어 + p.p. (수동 사역)",
                "formula": "have / get + 목적어(사물/수동대상) + 과거분사(p.p.) (~가 되도록 시키다/당하다)",
                "examples": [
                    {
                        "en": "I had my broken smartphone repaired at the service center.",
                        "ko": "나는 서비스 센터에서 고장 난 내 스마트폰을 수리받았다(수리되게 했다).",
                        "point": "스마트폰(my smartphone)은 수리하는 게 아니라 수리'되는' 것이므로 p.p.인 repaired를 씁니다."
                    },
                    {
                        "en": "She had her expensive leather wallet stolen on the subway.",
                        "ko": "그녀는 지하철에서 비싼 가죽 지갑을 도난당했다.",
                        "point": "지갑이 도난'당한' 피해/수동의 의미이므로 과거분사 stolen을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He had his hair cut yesterday.",
                    "x": "He had his hair cutted yesterday.",
                    "comment": "cut의 과거분사는 불규칙으로 cut-cut-cut입니다."
                },
                "trap": "사역동사라고 무조건 동사원형만 생각하면 큰일 납니다! 목적어가 당하는 관계면 무조건 p.p.입니다.",
                "quizLink": "have my car washed, have my teeth checked는 고교 내신 단골 서술형 표현입니다."
            },
            {
                "name": "지각동사 및 유지동사 뒤의 분사 선택",
                "formula": "지각동사 + O + [능동: 동원/V-ing] vs [수동: p.p.] | keep/leave + O + [V-ing/p.p.]",
                "examples": [
                    {
                        "en": "I heard my name called loudly from the back of the auditorium.",
                        "ko": "나는 강당 뒤편에서 내 이름이 크게 불리는 것을 들었다.",
                        "point": "이름(my name)은 부르는 것이 아니라 '불리는' 수동이므로 과거분사 called를 씁니다."
                    },
                    {
                        "en": "He kept the engine running while waiting in the car.",
                        "ko": "그는 차에서 기다리는 동안 엔진을 계속 켜둔 채로 두었다.",
                        "point": "엔진이 돌아가는 능동 진행이므로 현재분사 running을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "Don't leave the door unlocked.",
                    "x": "Don't leave the door unlocking.",
                    "comment": "문은 잠겨있지 않은 상태로 '남겨지는' 수동이므로 unlocked가 맞습니다."
                },
                "trap": "지각동사 heard 뒤라고 무조건 동사원형 call을 고르면 안 됩니다! 이름은 '불려지는' 것입니다.",
                "quizLink": "heard my name called는 수능과 모의평가에 최소 5회 이상 출제된 전설의 킬러 문항입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv4_u12_d1",
                "missionTitle": "미션 1: 사역동사 수동 목적격보어 동사원형 오용",
                "sentence": "I went to the clinic to have my wisdom tooth pull out.",
                "korean": "나는 사랑니를 뽑기(뽑히도록 하기) 위해 치과에 갔다.",
                "underlined": ["I went to", "the clinic to have", "my wisdom tooth", "pull out"],
                "wrongIndex": 3,
                "correction": "pulled out",
                "explanation": "사랑니(my wisdom tooth)는 뽑혀지는 수동의 대상이므로 pull out이 아니라 과거분사 pulled out이 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 사역동사 수동 목적격보어] 출제 연계"
            },
            {
                "id": "lv4_u12_d2",
                "missionTitle": "미션 2: 지각동사 수동 목적격보어 능동형 오용",
                "sentence": "She was shocked to hear her secret project mentioning on the news.",
                "korean": "그녀는 뉴스에서 자신의 비밀 프로젝트가 언급되는 것을 듣고 충격을 받았다.",
                "underlined": ["She was shocked", "to hear her", "secret project mentioning", "on the news"],
                "wrongIndex": 2,
                "correction": "secret project mentioned",
                "explanation": "비밀 프로젝트는 언급'되는' 수동 관계이므로 mentioning이 아니라 과거분사 mentioned가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 지각동사 수동 분사] 출제 연계"
            },
            {
                "id": "lv4_u12_d3",
                "missionTitle": "미션 3: 유지동사 keep 뒤 목적격보어 수동 오용",
                "sentence": "Don't leave the water ran in the sink while brushing teeth.",
                "korean": "양치하는 동안 싱크대에 물이 계속 흐르도록 내버려 두지 마라.",
                "underlined": ["Don't leave", "the water ran", "in the sink", "while brushing teeth"],
                "wrongIndex": 1,
                "correction": "the water running",
                "explanation": "물이 계속해서 흐르는 능동 진행의 상태이므로 과거분사 ran이 아니라 현재분사 running이 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 지각동사 및 유지동사 뒤 분사] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'I had my bicycle ______ at the repair shop yesterday.'",
                "options": ["repair", "repairing", "repaired", "to repair", "repairs"],
                "ans": 3,
                "exp": "자전거(my bicycle)는 수리'되는' 수동 관계이므로 과거분사 repaired가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 사역동사 수동 목적격보어]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 알맞은 형태는?\n\n'I heard my name ______ in the crowd.'",
                "options": ["call", "calling", "called", "to call", "to be called"],
                "ans": 3,
                "exp": "이름은 불려지는 것이므로 과거분사 called가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 지각동사 수동 분사]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "She kept the baby sleeping peacefully.",
                    "He had his wallet stolen on the bus.",
                    "I saw a falling star in the night sky.",
                    "Don't leave the door locking.",
                    "We watched the game played."
                ],
                "ans": 4,
                "exp": "문은 잠겨있는 수동의 상태이므로 locking이 아니라 locked가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 지각동사 및 유지동사 뒤 분사]"
            },
            {
                "q": "'그는 어제 자신의 컴퓨터를 고치게 했다.'를 바르게 영작한 것은?",
                "options": [
                    "He had his computer fix yesterday.",
                    "He had his computer fixed yesterday.",
                    "He had his computer to fix yesterday.",
                    "He had his computer fixing yesterday.",
                    "He had fixed his computer yesterday."
                ],
                "ans": 2,
                "exp": "had + his computer + fixed(과거분사)가 올바른 수동 사역 구문입니다.",
                "conceptRef": "1단계 [공식 1: 사역동사 수동 목적격보어]"
            },
            {
                "q": "다음 괄호 안에서 알맞은 말이 바르게 짝지어진 것은?\n\n- 'She found the window (broken / breaking).' \n- 'I felt someone (touch / touched) my shoulder.'",
                "options": [
                    "broken - touch",
                    "breaking - touch",
                    "broken - touched",
                    "breaking - touched",
                    "broken - to touch"
                ],
                "ans": 1,
                "exp": "창문은 깨진 수동(broken), 누군가가 어깨를 만지는 것은 능동(touch)입니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    },

    # Unit 13: 전치사 vs 접속사 혼동 어휘
    {
        "unitNo": 13,
        "unitId": "lv4_u13",
        "legacyUnitNo": 49,
        "title": "전치사 vs 접속사 혼동 어휘 판별",
        "part": "품사 및 구문 심화",
        "targetGrade": "고교 1~2학년 내신",
        "summary": "뜻은 같지만 뒤에 명사구가 오느냐(전치사) vs 절(S+V)이 오느냐(접속사)로 갈리는 despite/although, during/while, because of/because 1초 판별법",
        "overview": "'비록 ~일지라도'라는 뜻의 although와 despite, '~동안에'라는 뜻의 while과 during은 한국어 뜻이 똑같아서 가장 헷갈려요! 뒤에 동사가 살아있는 '문장(절)'이 오면 접속사! 동사 없이 '명사(구)'만 오면 전치사라는 품사 판별의 절대 원칙을 마스터해 봅시다!",
        "keyTakeaways": [
            "양보: although / even though + S + V (접속사) vs despite / in spite of + 명사(구) (전치사)",
            "이유: because / since / as + S + V (접속사) vs because of / due to / owing to + 명사(구) (전치사)",
            "시간: while + S + V (접속사) vs during + 특정 기간 명사 (전치사)"
        ],
        "formulaCards": [
            {
                "name": "전치사 vs 접속사 뒤 구조 공식",
                "formula": "접속사 + [주어 + 동사] | 전치사 + [명사 / 대명사 / 동명사(V-ing)]",
                "examples": [
                    {
                        "en": "Although it rained heavily, we thoroughly enjoyed the music festival.",
                        "ko": "비가 심하게 내렸음에도 불구하고, 우리는 음악 축제를 아주 즐겼다.",
                        "point": "뒤에 it rained라는 주어+동사가 왔으므로 접속사 Although를 씁니다."
                    },
                    {
                        "en": "Despite the heavy rain, we thoroughly enjoyed the music festival.",
                        "ko": "폭우에도 불구하고, 우리는 음악 축제를 아주 즐겼다.",
                        "point": "the heavy rain이라는 명사구만 왔으므로 전치사 Despite를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "She smiled despite her sorrow.",
                    "x": "She smiled despite of her sorrow.",
                    "comment": "despite는 단독으로 쓰이는 전치사이며 of를 붙이지 않습니다. (in spite of는 of 필수)"
                },
                "trap": "despite of(X) ➔ despite는 전치사이므로 of를 붙이면 안 됩니다!",
                "quizLink": "빈칸 뒤에 '동사'가 있는지를 찾는 것이 가장 빠르고 정확한 해법입니다."
            },
            {
                "name": "during vs while vs for의 시간 전치사/접속사",
                "formula": "while + S + V (접속사) | during + 이름/행사 명사 | for + 숫자 기간",
                "examples": [
                    {
                        "en": "He fell asleep while he was watching the boring documentary.",
                        "ko": "그는 지루한 다큐멘터리를 보던 중에 잠이 들었다.",
                        "point": "he was watching 절이 왔으므로 접속사 while을 씁니다."
                    },
                    {
                        "en": "I made many great friends during the summer camp.",
                        "ko": "나는 여름 캠프 기간 동안 많은 훌륭한 친구들을 사귀었다.",
                        "point": "summer camp라는 특정 사건/기간 명사이므로 during을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "I have stayed here for three weeks.",
                    "x": "I have stayed here during three weeks.",
                    "comment": "three weeks처럼 숫자가 포함된 기간의 길이에는 during이 아니라 for를 씁니다."
                },
                "trap": "for + 3 days (숫자 기간) vs during the vacation (특정 명칭 기간) 구별 필수!",
                "quizLink": "during / while / for 구별은 수능 모의고사 1번부터 5번 어법 선지에 단골로 등장합니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv4_u13_d1",
                "missionTitle": "미션 1: 절 앞에 전치사 despite 오용 수정",
                "sentence": "Despite the weather was extremely harsh, the climbers reached the peak safely.",
                "korean": "날씨가 극도로 가혹했음에도 불구하고, 등반가들은 정상에 도달했다.",
                "underlined": ["Despite the weather", "was extremely harsh,", "the climbers reached", "the peak safely"],
                "wrongIndex": 0,
                "correction": "Although the weather (or Even though the weather)",
                "explanation": "뒤에 the weather was라는 주어+동사 절이 이어지므로 전치사 Despite 대신 접속사 Although를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 전치사 vs 접속사 구조] 출제 연계"
            },
            {
                "id": "lv4_u13_d2",
                "missionTitle": "미션 2: 명사구 앞에 접속사 because 오용 수정",
                "sentence": "The outdoor concert was canceled because the sudden violent storm.",
                "korean": "야외 콘서트는 갑작스러운 격렬한 폭풍 때문에 취소되었다.",
                "underlined": ["The outdoor concert", "was canceled", "because the sudden", "violent storm"],
                "wrongIndex": 2,
                "correction": "because of the sudden",
                "explanation": "the sudden violent storm은 동사가 없는 명사구이므로 접속사 because 대신 전치사 because of를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 전치사 vs 접속사 구조] 출제 연계"
            },
            {
                "id": "lv4_u13_d3",
                "missionTitle": "미션 3: 숫자 기간 앞에 during 오용 수정",
                "sentence": "My uncle has lived in London during more than ten years.",
                "korean": "우리 삼촌은 런던에서 10년 이상 동안 살아오셨다.",
                "underlined": ["My uncle", "has lived in London", "during more than", "ten years"],
                "wrongIndex": 2,
                "correction": "for more than",
                "explanation": "ten years는 숫자가 포함된 기간의 길이이므로 during이 아니라 for를 써야 합니다.",
                "conceptRef": "1단계 [공식 2: during vs while vs for] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'She went to school ______ she had a high fever.'",
                "options": ["despite", "in spite of", "although", "because of", "during"],
                "ans": 3,
                "exp": "she had a high fever라는 주어+동사 절이 왔으므로 접속사 although가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 전치사 vs 접속사 구조]"
            },
            {
                "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n\n'The flight was delayed ______ the dense morning fog.'",
                "options": ["because", "because of", "since", "as", "while"],
                "ans": 2,
                "exp": "the dense morning fog는 명사구이므로 전치사 because of가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 전치사 vs 접속사 구조]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "I read a book while I was on the train.",
                    "She stayed in Paris for two months.",
                    "He listened to music during he exercised.",
                    "Despite his illness, he completed the work.",
                    "Because of the rain, the game was postponed."
                ],
                "ans": 3,
                "exp": "he exercised는 절이므로 전치사 during 대신 접속사 while을 써야 합니다.",
                "conceptRef": "1단계 [공식 2: during vs while vs for]"
            },
            {
                "q": "'그녀는 많은 어려움에도 불구하고 결코 포기하지 않았다.'를 영작할 때 빈칸에 알맞은 전치사는?\n\n'She never gave up ______ many difficulties.'",
                "options": ["although", "though", "in spite of", "even though", "while"],
                "ans": 3,
                "exp": "many difficulties는 명사구이므로 전치사 in spite of(또는 despite)가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 전치사 vs 접속사 구조]"
            },
            {
                "q": "다음 괄호 안에서 알맞은 말이 바르게 짝지어진 것은?\n\n- 'I fell asleep (during / while) the movie.' \n- 'He succeeded (because / because of) his persistent effort.'",
                "options": [
                    "during - because of",
                    "while - because of",
                    "during - because",
                    "while - because",
                    "for - because of"
                ],
                "ans": 1,
                "exp": "the movie는 명사이므로 during, his persistent effort도 명사구이므로 because of입니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    },

    # Unit 14: 대동사 판별 (be vs do)
    {
        "unitNo": 14,
        "unitId": "lv4_u14",
        "legacyUnitNo": 50,
        "title": "대동사 판별 (be동사 대동사 vs do/does/did 일반동사)",
        "part": "고교 어법 1등급",
        "targetGrade": "고교 1~2학년 내신",
        "summary": "앞서 언급된 동사구의 반복을 피하기 위해 대신 쓰는 대동사의 선택 원리와 비교급/as 구문에서의 도치 대동사",
        "overview": "영어는 똑같은 동사의 반복을 극도로 싫어해요! 그래서 앞에 나온 동사가 be동사면 be동사로, 일반동사면 do/does/did로 대신 받는데, 이를 '대동사'라고 해요! 고교 내신과 수능 29번에서 정답률을 떨어뜨리는 최강의 복병 대동사를 완벽 정복해 봅시다!",
        "keyTakeaways": [
            "앞선 동사가 be동사 / 조동사 ➔ be동사(is/are/was/were) 또는 조동사 그대로 받음",
            "앞선 동사가 일반동사 ➔ do / does / did로 대신 받음",
            "비교급 도치 대동사: A runs faster than B does. = A runs faster than does B."
        ],
        "formulaCards": [
            {
                "name": "앞선 동사 확인을 통한 대동사 선택 공식",
                "formula": "앞이 be동사 ➔ be동사 대동사 | 앞이 일반동사 ➔ do/does/did",
                "examples": [
                    {
                        "en": "He speaks English fluently, and so does his younger brother.",
                        "ko": "그는 영어를 유창하게 구사하며, 그의 남동생도 그러하다.",
                        "point": "앞선 동사 speaks가 일반동사 단수이므로 does로 대신 받았습니다."
                    },
                    {
                        "en": "She was very proud of her daughter, and so were her parents.",
                        "ko": "그녀는 딸을 매우 자랑스러워했고, 그녀의 부모님도 그러했다.",
                        "point": "앞선 동사가 was(be동사)이므로 복수 주어 her parents에 맞춰 were를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He loves music just as I do.",
                    "x": "He loves music just as I am.",
                    "comment": "loves는 일반동사이므로 am이 아니라 do로 받아야 합니다."
                },
                "trap": "앞선 문장의 본동사가 일반동사인데 be동사(is/are)를 써놓은 보기가 단골 오답입니다!",
                "quizLink": "so + 동사 + 주어 (~도 역시 그러하다) 구문에서 대동사 일치는 100% 출제됩니다."
            },
            {
                "name": "비교급 뒤의 대동사와 도치",
                "formula": "S1 + V1 + 비교급 + than + S2 + [대동사] (or than + [대동사] + S2)",
                "examples": [
                    {
                        "en": "Modern computers process data much faster than human brains do.",
                        "ko": "현대 컴퓨터는 인간의 뇌가 처리하는 것보다 훨씬 더 빠르게 데이터를 처리한다.",
                        "point": "일반동사 process를 대신하므로 복수명사 human brains 뒤에 do를 씁니다."
                    },
                    {
                        "en": "She works harder than does any other employee in this company.",
                        "ko": "그녀는 이 회사의 어떤 다른 직원보다 더 열심히 일한다.",
                        "point": "than 뒤에서 주어와 대동사가 도치되어 does any other employee 형태가 되었습니다."
                    }
                ],
                "oxCompare": {
                    "o": "He spends more money than she does.",
                    "x": "He spends more money than she is.",
                    "comment": "spends를 대신하는 대동사이므로 is가 아니라 does가 되어야 합니다."
                },
                "trap": "than 뒤에 도치가 일어나더라도 앞선 동사가 일반동사면 do/does를 써야 합니다.",
                "quizLink": "수능 29번 어법 문제의 밑줄 친 do/does/is는 무조건 앞의 동사를 찾는 문제입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv4_u14_d1",
                "missionTitle": "미션 1: 일반동사 대신 be동사 대동사 오용 수정",
                "sentence": "My brother loves spicy food just as much as I am.",
                "korean": "내 남동생은 내가 그러는 것만큼이나 매운 음식을 아주 좋아한다.",
                "underlined": ["My brother loves", "spicy food just as", "much as", "I am"],
                "wrongIndex": 3,
                "correction": "I do",
                "explanation": "앞선 동사 loves가 일반동사이므로 I am이 아니라 일반동사 대동사 I do가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 대동사 선택 공식] 출제 연계"
            },
            {
                "id": "lv4_u14_d2",
                "missionTitle": "미션 2: be동사 대신 do 대동사 오용 수정",
                "sentence": "She was not surprised at the news, but her parents did.",
                "korean": "그녀는 그 소식에 놀라지 않았지만, 그녀의 부모님은 놀라셨다.",
                "underlined": ["She was not surprised", "at the news,", "but her parents", "did"],
                "wrongIndex": 3,
                "correction": "were",
                "explanation": "앞선 동사가 was surprised(be동사)이므로 did가 아니라 복수 과거 be동사 were가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 대동사 선택 공식] 출제 연계"
            },
            {
                "id": "lv4_u14_d3",
                "missionTitle": "미션 3: 비교급 뒤 대동사 시제 및 수일치 오류",
                "sentence": "Kangaroos jump much higher than a human athlete do.",
                "korean": "캥거루는 인간 운동선수가 뛰는 것보다 훨씬 더 높이 뛴다.",
                "underlined": ["Kangaroos jump", "much higher", "than a human athlete", "do"],
                "wrongIndex": 3,
                "correction": "does",
                "explanation": "비교 대상인 a human athlete가 3인칭 단수이므로 대동사 do 대신 does를 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 비교급 뒤 대동사] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 알맞은 대동사는?\n\n'She plays tennis well, and her brother ______ too.'",
                "options": ["is", "does", "do", "has", "can"],
                "ans": 2,
                "exp": "앞선 동사 plays가 일반동사 단수이므로 does가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 대동사 선택 공식]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 알맞은 말은?\n\n'They were tired after the game, and so ______ I.'",
                "options": ["did", "was", "were", "do", "am"],
                "ans": 2,
                "exp": "앞선 동사가 were(be동사 과거)이고 주어가 I이므로 was가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 대동사 선택 공식]"
            },
            {
                "q": "다음 중 밑줄 친 대동사의 쓰임이 어색한 문장은?",
                "options": [
                    "I don't know the answer, but he does.",
                    "She runs faster than I do.",
                    "He is taller than his brother is.",
                    "They solved the puzzle as quickly as we were.",
                    "I enjoyed the movie just as she did."
                ],
                "ans": 4,
                "exp": "solved는 일반동사 과거형이므로 we were가 아니라 we did가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 대동사 선택 공식]"
            },
            {
                "q": "'그는 내가 일하는 것보다 더 열심히 일한다.'를 영작할 때 빈칸에 알맞은 대동사는?\n\n'He works harder than I ______.'",
                "options": ["am", "do", "does", "did", "have"],
                "ans": 2,
                "exp": "works를 대신하고 주어가 I이므로 대동사 do가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 비교급 뒤 대동사]"
            },
            {
                "q": "다음 대화의 빈칸에 알맞은 대답은?\n\nA: 'Who broke this expensive vase?'\nB: 'Tom ______.'",
                "options": ["is", "did", "was", "does", "has"],
                "ans": 2,
                "exp": "broke(일반동사 과거형)를 대신하여 대답하므로 did가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 대동사 선택 공식]"
            }
        ]
    }
]

print("LV4 part1 loaded: Units 9 to 14")
