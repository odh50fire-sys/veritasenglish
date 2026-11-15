# -*- coding: utf-8 -*-
"""
Level 2 (중2 문법) Units 9 ~ 14.
"""

LV2_PART1 = [
    # Unit 9: 현재완료 완료·결과 용법
    {
        "unitNo": 9,
        "unitId": "lv2_u9",
        "legacyUnitNo": 21,
        "title": "현재완료 기본 개념과 완료·결과 용법",
        "part": "시제의 심화",
        "targetGrade": "중2 내신 대비",
        "summary": "과거의 동작이 현재까지 영향을 미치는 have/has p.p.의 개념과 막 끝마침(just, already, yet) 및 가버림(have gone to)의 판별",
        "overview": "단순 과거는 옛날에 끝난 일이지만, '현재완료(have/has + p.p.)'는 과거의 일이 지금 현재와 끈끈하게 연결되어 있음을 나타내요! '방금 숙제 다 끝냈어(완료)'와 '그녀는 미국으로 가버려서 지금 여기 없어(결과)'의 핵심 문맥을 익혀봅시다!",
        "keyTakeaways": [
            "형태: 주어 + have / has + 과거분사(p.p.)",
            "완료 용법: just (방금), already (이미/벌써), yet (아직/벌써)와 결합",
            "★결과 용법: have gone to (~로 가버리고 없다: 1·2인칭 주어 불가) vs have lost (~를 잃어버려서 지금 없다)"
        ],
        "formulaCards": [
            {
                "name": "현재완료의 '완료' 용법 (just / already / yet)",
                "formula": "have/has + just / already + p.p. | haven't/hasn't + p.p. ~ yet",
                "examples": [
                    {
                        "en": "I have just finished my science project report.",
                        "ko": "나는 방금 나의 과학 프로젝트 보고서를 막 끝마쳤다.",
                        "point": "just(방금)와 함께 쓰여 동작이 막 완료되었음을 나타냅니다."
                    },
                    {
                        "en": "She has not cleaned her bedroom yet this morning.",
                        "ko": "그녀는 오늘 아침 아직 자신의 침실을 청소하지 않았다.",
                        "point": "부정문에서 yet은 '아직 ~하지 못했다'라는 완료의 의미를 가집니다."
                    }
                ],
                "oxCompare": {
                    "o": "He has already left for the airport.",
                    "x": "He has already leave for the airport.",
                    "comment": "have/has 뒤에는 반드시 과거분사(p.p.)인 left를 써야 합니다."
                },
                "trap": "already는 긍정문, yet은 부정문과 의문문에 주로 쓰입니다.",
                "quizLink": "Have you finished your lunch yet?처럼 의문문의 yet은 '벌써'로 해석됩니다."
            },
            {
                "name": "현재완료의 '결과' 용법과 have gone to",
                "formula": "have gone to (~로 가버려서 지금 여기 없다) vs have been to (~에 가본 적 있다)",
                "examples": [
                    {
                        "en": "Minho has gone to Paris, so he is not in Seoul now.",
                        "ko": "민호는 파리로 가버려서 지금 서울에 없다.",
                        "point": "과거에 파리로 떠나서 그 결과 지금 여기에 없음을 나타내는 결과 용법입니다."
                    },
                    {
                        "en": "I have lost my house key, and I cannot open the door.",
                        "ko": "나는 집 열쇠를 잃어버려서 지금 문을 열 수가 없다.",
                        "point": "과거에 잃어버린 상태가 현재까지 지속되고 있음을 나타냅니다."
                    }
                ],
                "oxCompare": {
                    "o": "She has gone to London.",
                    "x": "I have gone to London.",
                    "comment": "have gone to는 '가버리고 여기에 없다'는 뜻이므로 말하는 사람(I)이나 듣는 사람(You)을 주어로 쓸 수 없습니다."
                },
                "trap": "I have gone to Paris(X) ➔ 내가 파리에 가버렸는데 여기서 말할 수 없으므로 비문입니다!",
                "quizLink": "have gone to는 무조건 3인칭(He/She/They) 주어에만 쓸 수 있습니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u9_d1",
                "missionTitle": "미션 1: have gone to의 1인칭 주어 비문 오류",
                "sentence": "I have gone to New York last year, so I am here now.",
                "korean": "나는 작년에 뉴욕에 다녀왔기 때문에 지금 여기에 있다.",
                "underlined": ["I have gone to", "New York", "last year,", "so I am here now"],
                "wrongIndex": 0,
                "correction": "I went to (or I have been to)",
                "explanation": "1인칭 I는 have gone to(~로 가버리고 없다)의 주어가 될 수 없으며, 다녀온 경험은 have been to를 씁니다.",
                "conceptRef": "1단계 [공식 2: 결과 용법과 have gone to] 출제 연계"
            },
            {
                "id": "lv2_u9_d2",
                "missionTitle": "미션 2: 현재완료 뒤 과거분사(p.p.) 형태 오류",
                "sentence": "The train has already leave the central station on time.",
                "korean": "기차는 이미 정시에 중앙역을 떠났다.",
                "underlined": ["The train", "has already leave", "the central station", "on time"],
                "wrongIndex": 1,
                "correction": "has already left",
                "explanation": "현재완료 has 뒤에는 동사원형이 아니라 leave의 과거분사인 left가 와야 합니다.",
                "conceptRef": "1단계 [공식 1: 완료 용법] 출제 연계"
            },
            {
                "id": "lv2_u9_d3",
                "missionTitle": "미션 3: 3인칭 단수 have/has 수일치 오류",
                "sentence": "My older sister have just finished washing the dishes.",
                "korean": "내 누나는 방금 설거지를 막 끝마쳤다.",
                "underlined": ["My older sister", "have just finished", "washing", "the dishes"],
                "wrongIndex": 1,
                "correction": "has just finished",
                "explanation": "주어가 My older sister(3인칭 단수)이므로 have가 아니라 has just finished가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 완료 용법] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 알맞은 말은?\n\n'He ______ already eaten his breakfast.'",
                "options": ["have", "has", "is", "did", "was"],
                "ans": 2,
                "exp": "주어가 3인칭 단수 He이므로 has already eaten이 정답입니다.",
                "conceptRef": "1단계 [공식 1: 완료 용법]"
            },
            {
                "q": "다음 중 밑줄 친 현재완료의 용법이 '결과'에 해당하는 것은?",
                "options": [
                    "I have just finished my homework.",
                    "She has gone to America.",
                    "I have seen that movie twice.",
                    "He has lived here for ten years.",
                    "Have you read this book yet?"
                ],
                "ans": 2,
                "exp": "She has gone to America(그녀는 미국으로 가버리고 없다)가 전형적인 '결과' 용법입니다.",
                "conceptRef": "1단계 [공식 2: 결과 용법과 have gone to]"
            },
            {
                "q": "다음 중 어법상 올바르지 않은 문장은?",
                "options": [
                    "She has already left.",
                    "I have gone to Canada.",
                    "They have lost their keys.",
                    "Have you finished your work yet?",
                    "He has just arrived."
                ],
                "ans": 2,
                "exp": "have gone to(~로 가버리고 없다)는 말하는 사람인 1인칭 I를 주어로 쓸 수 없습니다.",
                "conceptRef": "1단계 [공식 2: 결과 용법과 have gone to]"
            },
            {
                "q": "'그는 아직 숙제를 시작하지 않았다.'를 바르게 영작한 것은?",
                "options": [
                    "He has not started his homework yet.",
                    "He has started his homework yet.",
                    "He has already not started his homework.",
                    "He is not started his homework yet.",
                    "He hasn't starting his homework yet."
                ],
                "ans": 1,
                "exp": "부정문에서 '아직 ~하지 못했다'는 haven't/hasn't p.p. ~ yet 구조입니다.",
                "conceptRef": "1단계 [공식 1: 완료 용법]"
            },
            {
                "q": "다음 대화의 빈칸에 알맞은 것은?\n\nA: 'Where is Tom?'\nB: 'He is not here. He ______ to the supermarket.'",
                "options": ["has gone", "has been", "went to been", "is gone to", "was been"],
                "ans": 1,
                "exp": "지금 여기에 없고 마트에 가버렸다는 맥락이므로 has gone이 정답입니다.",
                "conceptRef": "1단계 [공식 2: 결과 용법과 have gone to]"
            }
        ]
    },

    # Unit 10: 현재완료 경험·계속 용법과 과거시제 구별
    {
        "unitNo": 10,
        "unitId": "lv1_u10",
        "legacyUnitNo": 22,
        "title": "현재완료 경험·계속 용법과 과거시제 구별",
        "part": "시제의 심화",
        "targetGrade": "중2 내신 대비",
        "summary": "경험(ever, never, before)과 계속(for, since)을 나타내는 현재완료와 명백한 과거 부사(ago, yesterday)와의 공존 불가 규칙",
        "overview": "'파리에 가본 적 있니?(경험)'와 '10년 동안 여기서 살아왔어(계속)'는 현재완료의 가장 대표적인 쓰임이에요! 특히 yesterday, ago, when처럼 명백한 과거를 나타내는 말은 현재완료와 절대 함께 쓸 수 없다는 내신 최고 빈출 함정을 파헤쳐 봅시다!",
        "keyTakeaways": [
            "경험 용법: ever, never, before, once, twice (~해 본 적이 있다/없다)",
            "계속 용법: for + 기간 (~동안) / since + 시작 시점 (~이래로 지금까지)",
            "★명백한 과거 부사(yesterday, ago, last night, in 2020, when)는 현재완료와 절대 결합 불가!"
        ],
        "formulaCards": [
            {
                "name": "경험과 계속의 짝꿍 어휘 공식",
                "formula": "경험: ever / never / before / ~ times | 계속: for + 기간 / since + 시작점",
                "examples": [
                    {
                        "en": "Have you ever seen a wild kangaroo in Australia?",
                        "ko": "너는 호주에서 야생 캥거루를 본 적이 있니?",
                        "point": "ever와 함께 쓰여 과거부터 지금까지의 '경험'을 묻습니다."
                    },
                    {
                        "en": "We have lived in this apartment for ten years.",
                        "ko": "우리는 이 아파트에서 10년 동안 계속 살아오고 있다.",
                        "point": "for + 기간(ten years)과 결합하여 '계속' 살고 있음을 나타냅니다."
                    }
                ],
                "oxCompare": {
                    "o": "She has studied ballet since 2018.",
                    "x": "She has studied ballet for 2018.",
                    "comment": "2018년은 시작 시점이므로 for가 아니라 since를 써야 합니다."
                },
                "trap": "for 뒤에는 숫자 기간(for 3 years), since 뒤에는 특정 연도나 과거 시점(since last year)이 옵니다.",
                "quizLink": "have been to는 경험(~에 가본 적 있다), have gone to는 결과(~로 가버렸다)입니다."
            },
            {
                "name": "현재완료와 과거시제의 공존 불가 법칙",
                "formula": "have p.p. + [yesterday / ago / last / when] ➔ (X) 무조건 단순 과거시제!",
                "examples": [
                    {
                        "en": "I bought this warm jacket two days ago.",
                        "ko": "나는 이 따뜻한 재킷을 이틀 전에 샀다.",
                        "point": "ago는 명백한 과거 부사이므로 현재완료가 아닌 단순과거 bought를 씁니다."
                    },
                    {
                        "en": "When did you meet your new homeroom teacher?",
                        "ko": "너는 언제 새 담임선생님을 만났니?",
                        "point": "시점을 묻는 의문사 When은 현재완료와 함께 쓸 수 없고 과거의문문으로 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He visited his grandparents yesterday.",
                    "x": "He has visited his grandparents yesterday.",
                    "comment": "yesterday는 명백한 과거 시점이므로 현재완료 has visited와 함께 쓸 수 없습니다."
                },
                "trap": "When have you met him?(X) ➔ When did you meet him?(O) 내신 서술형 1순위!",
                "quizLink": "명백한 과거 표시 부사가 보이면 무조건 '단순 과거형' 동사를 골라야 합니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u10_d1",
                "missionTitle": "미션 1: 명백한 과거 부사 ago와 현재완료 오류",
                "sentence": "My uncle has bought this sports car three years ago.",
                "korean": "우리 삼촌은 3년 전에 이 스포츠카를 구입하셨다.",
                "underlined": ["My uncle", "has bought", "this sports car", "three years ago"],
                "wrongIndex": 1,
                "correction": "bought",
                "explanation": "ago는 명백한 과거 시점을 나타내므로 현재완료 has bought 대신 단순과거 bought를 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 공존 불가 법칙] 출제 연계"
            },
            {
                "id": "lv2_u10_d2",
                "missionTitle": "미션 2: since 뒤 기간 전치사 for 혼동 수정",
                "sentence": "She has played the violin since five years in the orchestra.",
                "korean": "그녀는 오케스트라에서 5년 동안 바이올린을 연주해 왔다.",
                "underlined": ["She has played", "the violin", "since five years", "in the orchestra"],
                "wrongIndex": 2,
                "correction": "for five years",
                "explanation": "five years는 기간의 길이이므로 시작 시점을 나타내는 since 대신 for를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 짝꿍 어휘 공식] 출제 연계"
            },
            {
                "id": "lv2_u10_d3",
                "missionTitle": "미션 3: 의문사 When과 현재완료 의문문 오류",
                "sentence": "Tell me, when have you arrived at the airport last night?",
                "korean": "너는 어젯밤 언제 공항에 도착했니?",
                "underlined": ["Tell me,", "when have you arrived", "at the airport", "last night?"],
                "wrongIndex": 0,
                "correction": "When did you arrive",
                "explanation": "구체적 시점을 묻는 의문사 When과 last night은 현재완료와 쓸 수 없으므로 When did you arrive가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 공존 불가 법칙] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 중 현재완료와 함께 쓸 수 없는 단어는?",
                "options": ["since", "for", "already", "yesterday", "ever"],
                "ans": 4,
                "exp": "yesterday는 명백한 과거 시점을 나타내는 부사이므로 현재완료와 함께 쓸 수 없습니다.",
                "conceptRef": "1단계 [공식 2: 공존 불가 법칙]"
            },
            {
                "q": "다음 빈칸에 알맞은 전치사는?\n\n'I have known him ______ 2015.'",
                "options": ["for", "since", "in", "during", "at"],
                "ans": 2,
                "exp": "2015년이라는 과거의 시작 시점이 왔으므로 since(~이래로)가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 짝꿍 어휘 공식]"
            },
            {
                "q": "다음 밑줄 친 현재완료의 용법이 '경험'에 해당하는 것은?",
                "options": [
                    "I have lived here since I was born.",
                    "She has been sick for three days.",
                    "I have been to Paris twice.",
                    "He has just arrived at the station.",
                    "They have lost their keys."
                ],
                "ans": 3,
                "exp": "twice(두 번)와 결합한 I have been to Paris twice(가본 적이 있다)가 경험 용법입니다.",
                "conceptRef": "1단계 [공식 1: 짝꿍 어휘 공식]"
            },
            {
                "q": "다음 중 어법상 올바른 문장은?",
                "options": [
                    "I have seen him yesterday.",
                    "When have you finished the work?",
                    "She has lived in Seoul for five years.",
                    "We have met three days ago.",
                    "He has called me last night."
                ],
                "ans": 3,
                "exp": "3번은 for five years와 결합한 올바른 현재완료 계속 용법입니다. 나머지는 모두 명백한 과거 부사(yesterday, when, ago, last night) 오류입니다.",
                "conceptRef": "1단계 [공식 2: 공존 불가 법칙]"
            },
            {
                "q": "'너는 비행기를 타 본 적이 있니?'를 바르게 영작한 것은?",
                "options": [
                    "Did you ever flown in an airplane?",
                    "Have you ever flown in an airplane?",
                    "Were you ever fly in an airplane?",
                    "Have you ever fly in an airplane?",
                    "Do you ever flew in an airplane?"
                ],
                "ans": 2,
                "exp": "경험을 묻는 의문문은 Have you ever + p.p.(flown) 구조입니다.",
                "conceptRef": "1단계 [공식 1: 짝꿍 어휘 공식]"
            }
        ]
    },

    # Unit 11: 5형식 목적격보어 to부정사 취하는 동사
    {
        "unitNo": 11,
        "unitId": "lv2_u11",
        "legacyUnitNo": 23,
        "title": "5형식 목적격보어로 to부정사를 취하는 동사",
        "part": "문장의 형식 심화",
        "targetGrade": "중2 내신 대비",
        "summary": "주어 + 동사 + 목적어 + to-V 구조로 목적어의 미래 행동을 요구·권유하는 핵심 동사군(want, ask, tell, allow, advise)",
        "overview": "'선생님은 우리에게 조용히 하라고 말씀하셨다'처럼 목적어가 어떤 행동을 하도록 시키거나 부탁할 때, 목적격보어 자리에 to부정사를 쓰는 동사들이에요! 중2 내신 서술형과 객관식에서 출제율 1위인 5형식 to부정사 구조를 완벽 정복해 봅시다!",
        "keyTakeaways": [
            "5형식 어순: 주어 + 동사 + 목적어 + to-V (목적어가 ~하도록 …하다)",
            "목적격보어로 to-V를 취하는 동사군: want, ask, tell, order, allow, advise, expect",
            "부정: 목적어 + not to-V (not의 위치는 반드시 to 바로 앞!)"
        ],
        "formulaCards": [
            {
                "name": "5형식 to부정사 목적격보어 공식",
                "formula": "S + want / ask / tell / allow / advise + O + to-V",
                "examples": [
                    {
                        "en": "My doctor advised me to exercise regularly every morning.",
                        "ko": "나의 의사는 나에게 매일 아침 규칙적으로 운동하라고 조언했다.",
                        "point": "advise + 목적어(me) + 목적격보어(to exercise) 구조입니다."
                    },
                    {
                        "en": "The teacher told the noisy students to be quiet.",
                        "ko": "선생님께서는 시끄러운 학생들에게 조용히 하라고 말씀하셨다.",
                        "point": "tell + 목적어 + to be quiet 구조입니다."
                    }
                ],
                "oxCompare": {
                    "o": "She wants me to clean the room.",
                    "x": "She wants me clean the room.",
                    "comment": "want는 목적격보어로 동사원형이 아니라 반드시 to부정사(to clean)를 취합니다."
                },
                "trap": "사역동사(make/have/let)와 달리 want, ask, tell 등은 무조건 to를 붙여야 합니다.",
                "quizLink": "ask/tell/want + O + to-V는 중2 교과서 전 단원 필수 핵심 문법입니다."
            },
            {
                "name": "목적격보어 to부정사의 부정 (not to-V)",
                "formula": "주어 + 동사 + 목적어 + not to-V (목적어에게 ~하지 말라고 …하다)",
                "examples": [
                    {
                        "en": "My mother told me not to stay up late playing computer games.",
                        "ko": "어머니께서는 나에게 컴퓨터 게임을 하며 늦게까지 깨어있지 말라고 말씀하셨다.",
                        "point": "부정어 not은 반드시 to부정사 바로 앞(not to stay)에 위치합니다."
                    },
                    {
                        "en": "He asked us not to make any noise in the hospital room.",
                        "ko": "그는 우리에게 병실에서 소음을 내지 말아 달라고 부탁했다.",
                        "point": "ask + 목적어 + not to-V 구조입니다."
                    }
                ],
                "oxCompare": {
                    "o": "The police officer ordered him not to run.",
                    "x": "The police officer ordered him to not run.",
                    "comment": "to not run보다 준동사 바로 앞에 not을 둔 not to run이 문법적으로 올바른 표준 형태입니다."
                },
                "trap": "didn't tell me to V와 told me not to V는 의미가 완전히 다릅니다!",
                "quizLink": "내신 시험에서 not의 위치(to not V vs not to V)를 묻는 함정에 주의하세요."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u11_d1",
                "missionTitle": "미션 1: 목적격보어 to부정사 누락 오류 수정",
                "sentence": "My parents want me become a successful computer scientist.",
                "korean": "부모님께서는 내가 성공한 컴퓨터 과학자가 되기를 원하신다.",
                "underlined": ["My parents", "want me", "become a successful", "computer scientist"],
                "wrongIndex": 2,
                "correction": "to become a successful",
                "explanation": "want는 목적격보어로 to부정사를 취하므로 become이 아니라 to become이 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 5형식 to부정사 목적격보어] 출제 연계"
            },
            {
                "id": "lv2_u11_d2",
                "missionTitle": "미션 2: to부정사 부정어 not의 위치 오류",
                "sentence": "The teacher told us to not touch the chemical liquids.",
                "korean": "선생님께서는 우리에게 화학 액체를 만지지 말라고 말씀하셨다.",
                "underlined": ["The teacher", "told us", "to not touch", "the chemical liquids"],
                "wrongIndex": 2,
                "correction": "not to touch",
                "explanation": "to부정사의 부정어 not은 to 바로 앞에 와야 하므로 not to touch로 써야 합니다.",
                "conceptRef": "1단계 [공식 2: to부정사의 부정] 출제 연계"
            },
            {
                "id": "lv2_u11_d3",
                "missionTitle": "미션 3: allow의 목적격보어 -ing 오류 수정",
                "sentence": "The museum does not allow visitors taking photos inside.",
                "korean": "그 박물관은 관람객들이 내부에서 사진 찍는 것을 허락하지 않는다.",
                "underlined": ["The museum", "does not allow", "visitors taking photos", "inside"],
                "wrongIndex": 2,
                "correction": "visitors to take photos",
                "explanation": "allow는 목적격보어로 -ing가 아니라 to부정사를 취하므로 to take photos가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 5형식 to부정사 목적격보어] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'My mother asked me ______ the dishes.'",
                "options": ["wash", "washing", "to wash", "washed", "washes"],
                "ans": 3,
                "exp": "ask + 목적어 + to-V 구조이므로 to wash가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 5형식 to부정사 목적격보어]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "She told me to wait here.",
                    "He wants his son to be a doctor.",
                    "The doctor advised him to stop smoking.",
                    "My father allowed me go to the concert.",
                    "They expected us to win the game."
                ],
                "ans": 4,
                "exp": "allow는 목적격보어로 to부정사를 취하므로 go 대신 to go가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 5형식 to부정사 목적격보어]"
            },
            {
                "q": "'선생님은 그들에게 복도에서 뛰지 말라고 말씀하셨다.'를 바르게 영작한 것은?",
                "options": [
                    "The teacher told them to not run in the hallway.",
                    "The teacher told them not to run in the hallway.",
                    "The teacher told them don't run in the hallway.",
                    "The teacher told them not running in the hallway.",
                    "The teacher didn't tell them to run in the hallway."
                ],
                "ans": 2,
                "exp": "told + 목적어 + not to-V 어순이므로 not to run이 올바릅니다.",
                "conceptRef": "1단계 [공식 2: to부정사의 부정]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 수 없는 동사는?\n\n'He ______ me to finish the work.'",
                "options": ["wanted", "told", "asked", "made", "advised"],
                "ans": 4,
                "exp": "made는 사역동사이므로 목적격보어로 to부정사가 아닌 동사원형을 취해야 합니다.",
                "conceptRef": "1단계 [공식 1: 5형식 to부정사 목적격보어]"
            },
            {
                "q": "다음 괄호 안에서 알맞은 말이 바르게 짝지어진 것은?\n\n- 'She wants me (help / to help) her.'\n- 'Dad told me (not to / to not) eat too much candy.'",
                "options": [
                    "help - not to",
                    "to help - not to",
                    "to help - to not",
                    "help - to not",
                    "to help - don't"
                ],
                "ans": 2,
                "exp": "want는 to help, 부정은 not to가 정답입니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    },

    # Unit 12: 5형식 사역동사와 지각동사
    {
        "unitNo": 12,
        "unitId": "lv2_u12",
        "legacyUnitNo": 24,
        "title": "5형식 사역동사와 지각동사 (목적격보어 원형·분사)",
        "part": "문장의 형식 심화",
        "targetGrade": "중2 내신 대비",
        "summary": "사역동사(make, have, let) 뒤의 동사원형 목적격보어와 지각동사(see, hear, feel) 뒤의 동사원형/현재분사(-ing) 출제 공식",
        "overview": "'엄마가 내게 방 청소를 시키셨다'처럼 남에게 행동을 시키는 사역동사(make, have, let)와 감각으로 느끼는 지각동사(see, hear)는 목적격보어 자리에 to를 쓰지 않고 '동사원형'이나 '-ing'를 써요! 중등 어법의 절대 강자 사역·지각동사를 정복해 봅시다!",
        "keyTakeaways": [
            "사역동사(make, have, let) + 목적어 + 동사원형 (to 쓰면 절대 안 됨!)",
            "지각동사(see, hear, watch, feel, listen to) + 목적어 + 동사원형 또는 V-ing (생생한 진행 강조)",
            "준사역동사 help: 목적격보어로 동사원형 또는 to부정사 둘 다 가능!"
        ],
        "formulaCards": [
            {
                "name": "사역동사의 목적격보어 (동사원형)",
                "formula": "make / have / let + 목적어 + 동사원형 (목적어에게 ~하게 시키다/허락하다)",
                "examples": [
                    {
                        "en": "My strict mother made me clean my dirty room alone.",
                        "ko": "나의 엄격한 어머니는 나에게 더러운 방을 혼자 청소하게 시키셨다.",
                        "point": "사역동사 made 뒤에 목적어 me, 그리고 목적격보어로 동사원형 clean을 씁니다."
                    },
                    {
                        "en": "The coach let the tired players take a short break.",
                        "ko": "코치는 지친 선수들이 짧은 휴식을 취하도록 허락해 주었다.",
                        "point": "사역동사 let 뒤에 목적격보어로 동사원형 take를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He made me laugh so hard.",
                    "x": "He made me to laugh so hard.",
                    "comment": "사역동사 make 뒤의 목적격보어에는 to를 붙이지 않고 동사원형 laugh를 씁니다."
                },
                "trap": "준사역동사 help는 목적격보어로 동사원형과 to부정사 둘 다 올 수 있습니다 (help me clean / to clean).",
                "quizLink": "사역동사 3총사(make/have/let) 뒤에 to-V가 나오면 0.1초 만에 오답으로 솎아내세요!"
            },
            {
                "name": "지각동사의 목적격보어 (동사원형 or V-ing)",
                "formula": "see / hear / watch / feel + 목적어 + 동사원형 또는 V-ing",
                "examples": [
                    {
                        "en": "I saw a beautiful bird singing brightly in the tall tree.",
                        "ko": "나는 키 큰 나무에서 아름다운 새가 밝게 노래하고 있는 것을 보았다.",
                        "point": "지각동사 saw 뒤에 목적어가 노래하는 동작을 강조하기 위해 singing을 썼습니다."
                    },
                    {
                        "en": "We heard someone knock on the front door late at night.",
                        "ko": "우리는 늦은 밤에 누군가가 현관문을 두드리는 것을 들었다.",
                        "point": "지각동사 heard 뒤에 목적격보어로 동사원형 knock을 썼습니다."
                    }
                ],
                "oxCompare": {
                    "o": "I felt the building shake.",
                    "x": "I felt the building to shake.",
                    "comment": "지각동사 felt 뒤에는 to shake가 아니라 동사원형 shake 또는 shaking을 써야 합니다."
                },
                "trap": "지각동사 뒤에는 to부정사를 절대 쓸 수 없습니다! 오직 동사원형이나 -ing만 가능합니다.",
                "quizLink": "동사원형은 동작 전체의 사실, -ing는 그 순간 생생하게 진행 중인 동작을 강조합니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u12_d1",
                "missionTitle": "미션 1: 사역동사 make 뒤 to부정사 오용 수정",
                "sentence": "The funny movie made all the audience to laugh aloud in the theater.",
                "korean": "그 재미있는 영화는 모든 관객들이 크게 웃게 만들었다.",
                "underlined": ["The funny movie", "made all the audience", "to laugh aloud", "in the theater"],
                "wrongIndex": 2,
                "correction": "laugh aloud",
                "explanation": "made는 사역동사이므로 목적격보어로 to부정사가 아닌 동사원형 laugh를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 사역동사의 목적격보어] 출제 연계"
            },
            {
                "id": "lv2_u12_d2",
                "missionTitle": "미션 2: 지각동사 hear 뒤 to부정사 오용 수정",
                "sentence": "I heard someone to scream in the dark street last night.",
                "korean": "나는 어젯밤 어두운 거리에서 누군가가 비명을 지르는 것을 들었다.",
                "underlined": ["I heard", "someone to scream", "in the dark street", "last night"],
                "wrongIndex": 1,
                "correction": "someone scream (or screaming)",
                "explanation": "지각동사 heard 뒤에는 to scream이 올 수 없으며, 동사원형 scream 또는 분사 screaming을 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 지각동사의 목적격보어] 출제 연계"
            },
            {
                "id": "lv2_u12_d3",
                "missionTitle": "미션 3: 사역동사 let 뒤 -ing 오용 수정",
                "sentence": "My parents never let me going out alone after nine.",
                "korean": "부모님께서는 내가 9시 이후에 혼자 외출하는 것을 결코 허락하지 않으신다.",
                "underlined": ["My parents", "never let me", "going out alone", "after nine"],
                "wrongIndex": 2,
                "correction": "go out alone",
                "explanation": "사역동사 let의 목적격보어로는 -ing가 아니라 동사원형 go가 와야 합니다.",
                "conceptRef": "1단계 [공식 1: 사역동사의 목적격보어] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'My father had me ______ the family car.'",
                "options": ["wash", "to wash", "washing", "washed", "washes"],
                "ans": 1,
                "exp": "사역동사 had의 목적격보어로는 동사원형 wash가 옵니다.",
                "conceptRef": "1단계 [공식 1: 사역동사의 목적격보어]"
            },
            {
                "q": "다음 빈칸에 들어갈 수 없는 것은?\n\n'I saw him ______ across the street.'",
                "options": ["cross", "crossing", "to cross", "run", "running"],
                "ans": 3,
                "exp": "지각동사 saw 뒤에는 to부정사(to cross)를 절대 쓸 수 없습니다.",
                "conceptRef": "1단계 [공식 2: 지각동사의 목적격보어]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "She made her brother cry.",
                    "He heard the phone ringing.",
                    "They let us enter the hall.",
                    "I helped him to carry the box.",
                    "Mom made me to wash the dishes."
                ],
                "ans": 5,
                "exp": "made는 사역동사이므로 to wash가 아니라 동사원형 wash가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 사역동사의 목적격보어]"
            },
            {
                "q": "'그는 내가 숙제하는 것을 도와주었다.'를 영작할 때 빈칸에 들어갈 수 있는 것으로 짝지어진 것은?\n\n'He helped me ______ my homework.'",
                "options": [
                    "do - to do",
                    "do - doing",
                    "to do - doing",
                    "doing - done",
                    "to do - did"
                ],
                "ans": 1,
                "exp": "준사역동사 help는 목적격보어로 동사원형(do)과 to부정사(to do)를 둘 다 취할 수 있습니다.",
                "conceptRef": "1단계 [공식 1: 사역동사의 목적격보어]"
            },
            {
                "q": "다음 문장의 빈칸에 알맞은 형태는?\n\n'We watched the sun ______ slowly behind the mountain.'",
                "options": ["to rise", "rising", "rised", "to rising", "rose"],
                "ans": 2,
                "exp": "지각동사 watched 뒤에는 동사원형 rise 또는 현재분사 rising이 올 수 있습니다.",
                "conceptRef": "1단계 [공식 2: 지각동사의 목적격보어]"
            }
        ]
    },

    # Unit 13: 수동태 기본 형태와 시제
    {
        "unitNo": 13,
        "unitId": "lv2_u13",
        "legacyUnitNo": 25,
        "title": "수동태 기본 형태와 행위자 by의 생략",
        "part": "태의 심화",
        "targetGrade": "중2 내신 대비",
        "summary": "주어가 동작을 당하는 'be + p.p. (+ by 행위자)'의 구조와 능동태를 수동태로 바꾸는 3단계 변환 공식",
        "overview": "'누군가 창문을 깼다(능동태)'보다 '창문이 깨졌다(수동태)'처럼 당한 대상에 초점을 맞출 때 수동태를 써요! be동사 + 과거분사(p.p.)의 기본 형태와 행위자가 일반인이거나 불분명할 때 by + 행위자를 생략하는 원리를 배워봅시다!",
        "keyTakeaways": [
            "수동태 기본 형태: 주어 + be동사 + 과거분사(p.p.) + by 행위자 (~에 의해 …되어지다)",
            "시제 일치: 현재 am/are/is + p.p. | 과거 was/were + p.p.",
            "by + 행위자 생략: 행위자가 일반인(people), 불분명하거나 중요하지 않을 때"
        ],
        "formulaCards": [
            {
                "name": "능동태 ➔ 수동태 3단계 전환 공식",
                "formula": "1. 목적어 ➔ 새 주어 | 2. 동사 ➔ be + p.p. (시제/수일치) | 3. 주어 ➔ by + 목적격",
                "examples": [
                    {
                        "en": "Romeo and Juliet was written by William Shakespeare.",
                        "ko": "'로미오와 줄리엣'은 윌리엄 셰익스피어에 의해 쓰였다.",
                        "point": "과거시제 단수 be동사 was + write의 과거분사 written 구조입니다."
                    },
                    {
                        "en": "Many delicious cookies are baked by my grandmother every Sunday.",
                        "ko": "매주 일요일마다 우리 할머니에 의해 많은 맛있는 쿠키가 구워진다.",
                        "point": "복수 주어 Many cookies에 맞추어 are baked를 썼습니다."
                    }
                ],
                "oxCompare": {
                    "o": "The window was broken by Tom.",
                    "x": "The window was broke by Tom.",
                    "comment": "be동사 뒤에는 과거형 broke가 아니라 반드시 과거분사(p.p.)인 broken을 써야 합니다."
                },
                "trap": "수동태의 be동사는 새 주어의 인칭/수와 원래 능동태 문장의 '시제'에 맞춰야 합니다.",
                "quizLink": "수동태 전환 문제는 중2 내신 서술형의 단골 1순위 주관식 문제입니다."
            },
            {
                "name": "행위자(by + 목적격)의 생략",
                "formula": "행위자가 막연한 일반인(by people), 알 수 없음, 중요치 않을 때 생략",
                "examples": [
                    {
                        "en": "English is spoken widely in many countries around the world.",
                        "ko": "영어는 전 세계 많은 나라에서 널리 사용된다.",
                        "point": "영어를 쓰는 행위자는 일반 대중(by people)이므로 생략되었습니다."
                    },
                    {
                        "en": "This historic bridge was built in 1950 during the war.",
                        "ko": "이 역사적인 다리는 전쟁 중인 1950년에 건설되었다.",
                        "point": "건설한 구체적 행위자보다 다리가 지어졌다는 사실이 중요하므로 by를 생략합니다."
                    }
                ],
                "oxCompare": {
                    "o": "My bicycle was stolen last night.",
                    "x": "My bicycle was stolen by someone last night.",
                    "comment": "도둑이 누구인지 알 수 없으므로 by someone은 생략하는 것이 훨씬 자연스럽습니다."
                },
                "trap": "능동태의 목적어가 없는 1형식, 2형식 자동사는 수동태를 만들 수 없습니다!",
                "quizLink": "happen, appear, disappear 등 자동사는 수동태 불가 동사로 시험에 자주 나옵니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u13_d1",
                "missionTitle": "미션 1: 수동태 과거분사(p.p.) 형태 오류",
                "sentence": "The famous poem was wrote by a young soldier in the war.",
                "korean": "그 유명한 시는 전쟁 중 한 젊은 군인에 의해 쓰였다.",
                "underlined": ["The famous poem", "was wrote by", "a young soldier", "in the war"],
                "wrongIndex": 1,
                "correction": "was written by",
                "explanation": "수동태는 be + p.p.이므로 wrote가 아니라 과거분사 written이 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 능동태 ➔ 수동태 3단계 전환] 출제 연계"
            },
            {
                "id": "lv2_u13_d2",
                "missionTitle": "미션 2: 수동태 be동사 복수 수일치 오류",
                "sentence": "These ancient pyramids was built thousands of years ago in Egypt.",
                "korean": "이 고대 피라미드들은 수천 년 전 이집트에서 건설되었다.",
                "underlined": ["These ancient pyramids", "was built", "thousands of years ago", "in Egypt"],
                "wrongIndex": 1,
                "correction": "were built",
                "explanation": "주어가 These ancient pyramids로 복수이므로 was가 아니라 were built가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 능동태 ➔ 수동태 3단계 전환] 출제 연계"
            },
            {
                "id": "lv2_u13_d3",
                "missionTitle": "미션 3: 행위자 목적격 전치사 누락 오류",
                "sentence": "The dirty room was thoroughly cleaned him yesterday afternoon.",
                "korean": "그 더러운 방은 어제 오후 그에 의해 철저하게 청소되었다.",
                "underlined": ["The dirty room", "was thoroughly", "cleaned him", "yesterday afternoon"],
                "wrongIndex": 2,
                "correction": "cleaned by him",
                "explanation": "행위자를 나타낼 때는 전치사 by를 써서 cleaned by him이 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 능동태 ➔ 수동태 3단계 전환] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 문장을 수동태로 바르게 전환한 것은?\n\n'Tom broke the window yesterday.'",
                "options": [
                    "The window was broken by Tom yesterday.",
                    "The window broke by Tom yesterday.",
                    "The window was break by Tom yesterday.",
                    "The window is broken by Tom yesterday.",
                    "The window were broken by Tom yesterday."
                ],
                "ans": 1,
                "exp": "과거시제 broke와 단수 주어 The window에 맞춘 was broken by Tom이 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 능동태 ➔ 수동태 3단계 전환]"
            },
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'Spanish ______ by many people in South America.'",
                "options": ["speaks", "is spoken", "is speaking", "spoke", "was speak"],
                "ans": 2,
                "exp": "스페인어가 사람들에 의해 사용되는 수동의 의미이므로 is spoken이 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 능동태 ➔ 수동태 3단계 전환]"
            },
            {
                "q": "다음 중 밑줄 친 'by + 행위자'를 생략할 수 있는 것은?",
                "options": [
                    "The Harry Potter books were written <u>by J.K. Rowling</u>.",
                    "This portrait was painted <u>by Leonardo da Vinci</u>.",
                    "Cars are made in this factory <u>by people</u>.",
                    "The phone was invented <u>by Alexander Graham Bell</u>.",
                    "The song was composed <u>by Mozart</u>."
                ],
                "ans": 3,
                "exp": "by people처럼 행위자가 막연한 일반인일 때는 생략하는 것이 자연스럽습니다.",
                "conceptRef": "1단계 [공식 2: 행위자의 생략]"
            },
            {
                "q": "다음 중 어법상 수동태로 쓸 수 없는 동사는?",
                "options": ["make", "break", "happen", "clean", "build"],
                "ans": 3,
                "exp": "happen(일어나다, 발생하다)은 목적어가 없는 자동사이므로 수동태를 만들 수 없습니다.",
                "conceptRef": "1단계 [공식 2: 행위자의 생략]"
            },
            {
                "q": "'이 집은 100년 전에 지어졌다.'를 바르게 영작한 것은?",
                "options": [
                    "This house built 100 years ago.",
                    "This house was built 100 years ago.",
                    "This house were built 100 years ago.",
                    "This house is built 100 years ago.",
                    "This house was build 100 years ago."
                ],
                "ans": 2,
                "exp": "과거시제 단수 수동태는 was built입니다.",
                "conceptRef": "1단계 [공식 1: 능동태 ➔ 수동태 3단계 전환]"
            }
        ]
    },

    # Unit 14: 조동사가 있는 수동태와 부정문/의문문
    {
        "unitNo": 14,
        "unitId": "lv2_u14",
        "legacyUnitNo": 26,
        "title": "조동사가 있는 수동태와 부정문/의문문",
        "part": "태의 심화",
        "targetGrade": "중2 내신 대비",
        "summary": "can/must/will + be p.p. 형태의 조동사 수동태와 be not p.p., Is/Was S + p.p.?의 의문문 구조",
        "overview": "조동사(can, must, will, should)가 들어있는 문장을 수동태로 바꿀 때는 '조동사 + be + p.p.'라는 공식이 적용돼요! 조동사 뒤에는 무조건 동사원형 be를 고정한다는 규칙과, 수동태 부정문/의문문 만드는 법을 배워봅시다!",
        "keyTakeaways": [
            "조동사 수동태: 주어 + 조동사 + be + 과거분사(p.p.) (can be done, must be finished)",
            "수동태 부정문: 주어 + be동사 + not + 과거분사(p.p.) (was not broken)",
            "수동태 의문문: be동사 + 주어 + 과거분사(p.p.) ~? (Was this bridge built in 1950?)"
        ],
        "formulaCards": [
            {
                "name": "조동사가 있는 수동태 공식",
                "formula": "주어 + can / must / will / should + be + p.p.",
                "examples": [
                    {
                        "en": "This difficult math problem can be solved by students easily.",
                        "ko": "이 어려운 수학 문제는 학생들에 의해 쉽게 풀릴 수 있다.",
                        "point": "can 뒤에 동사원형 be + p.p.(solved)를 썼습니다."
                    },
                    {
                        "en": "The final assignment must be submitted before Friday afternoon.",
                        "ko": "최종 과제는 금요일 오후 전에 반드시 제출되어야 한다.",
                        "point": "must be submitted 구조입니다."
                    }
                ],
                "oxCompare": {
                    "o": "The garbage will be recycled.",
                    "x": "The garbage will is recycled.",
                    "comment": "조동사 will 뒤에는 is가 아니라 동사원형 be를 써야 합니다."
                },
                "trap": "조동사 뒤의 be를 am/are/is로 바꾸는 실수를 가장 많이 합니다. 무조건 'be'입니다!",
                "quizLink": "조동사 + be + p.p.는 수능 어법에서도 문장의 수동 의미를 판별하는 단골 공식입니다."
            },
            {
                "name": "수동태의 부정문과 의문문",
                "formula": "부정: be + not + p.p. | 의문: Be동사 + 주어 + p.p. ~?",
                "examples": [
                    {
                        "en": "The secret code was not discovered by the enemy soldiers.",
                        "ko": "그 비밀 암호는 적군 병사들에 의해 발견되지 않았다.",
                        "point": "be동사 바로 뒤에 not을 붙여 수동태 부정문을 만듭니다."
                    },
                    {
                        "en": "Was this classic novel written by Charles Dickens?",
                        "ko": "이 고전 소설은 찰스 디킨스에 의해 쓰였나요?",
                        "point": "be동사 Was가 문장 맨 앞으로 나와 의문문을 만듭니다."
                    }
                ],
                "oxCompare": {
                    "o": "Was the window broken by the wind?",
                    "x": "Did the window broken by the wind?",
                    "comment": "수동태 의문문은 Did가 아니라 be동사 Was/Were로 시작해야 합니다."
                },
                "trap": "수동태 의문문에 일반동사 조동사 Did나 Do를 쓰면 절대 안 됩니다!",
                "quizLink": "Was the letter sent? ➔ Yes, it was. / No, it wasn't로 대답합니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u14_d1",
                "missionTitle": "미션 1: 조동사 수동태 be동사 형태 오류",
                "sentence": "The important meeting will is held in the main conference room.",
                "korean": "그 중요한 회의는 본관 회의실에서 열릴 것이다.",
                "underlined": ["The important meeting", "will is held", "in the main", "conference room"],
                "wrongIndex": 1,
                "correction": "will be held",
                "explanation": "조동사 will 뒤에는 is가 아니라 동사원형 be를 써서 will be held가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 조동사가 있는 수동태] 출제 연계"
            },
            {
                "id": "lv2_u14_d2",
                "missionTitle": "미션 2: 수동태 의문문 조동사 Did 오용 수정",
                "sentence": "Did this beautiful wooden house built by your grandfather?",
                "korean": "이 아름다운 통나무집은 너의 할아버지에 의해 지어졌니?",
                "underlined": ["Did this beautiful", "wooden house", "built by", "your grandfather?"],
                "wrongIndex": 0,
                "correction": "Was this beautiful",
                "explanation": "수동태 의문문은 Did가 아니라 be동사 과거형 Was로 시작해야 합니다.",
                "conceptRef": "1단계 [공식 2: 수동태 부정문과 의문문] 출제 연계"
            },
            {
                "id": "lv2_u14_d3",
                "missionTitle": "미션 3: 조동사 수동태 과거분사 형태 오류",
                "sentence": "The rules must be obey by all students in this academy.",
                "korean": "규칙은 이 학원의 모든 학생들에 의해 반드시 준수되어야 한다.",
                "underlined": ["The rules", "must be obey", "by all students", "in this academy"],
                "wrongIndex": 1,
                "correction": "must be obeyed",
                "explanation": "수동태이므로 obey가 아니라 과거분사 obeyed가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 조동사가 있는 수동태] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'The work must ______ by tomorrow afternoon.'",
                "options": ["finish", "finished", "be finished", "is finished", "being finished"],
                "ans": 3,
                "exp": "조동사 must 뒤의 수동태는 must be + p.p. 형태이므로 be finished가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 조동사가 있는 수동태]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 말로 알맞은 것은?\n\n'______ this cake made by your sister?'",
                "options": ["Did", "Was", "Does", "Has", "Had"],
                "ans": 2,
                "exp": "수동태 의문문이므로 be동사 Was this cake made ~?가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 수동태 부정문과 의문문]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "The concert will be held next week.",
                    "The problem cannot be solved easily.",
                    "The door was not locked last night.",
                    "Did the window broken by Tom?",
                    "Were you invited to the party?"
                ],
                "ans": 4,
                "exp": "수동태 의문문에는 Did를 쓸 수 없으며 Was the window broken으로 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 수동태 부정문과 의문문]"
            },
            {
                "q": "'이 책은 모든 학생들에게 읽혀야 한다.'를 바르게 영작한 것은?",
                "options": [
                    "This book should read by all students.",
                    "This book should be read by all students.",
                    "This book should is read by all students.",
                    "This book should be readed by all students.",
                    "This book should being read by all students."
                ],
                "ans": 2,
                "exp": "should be read(read의 p.p.는 발음만 [red]이고 철자는 read)가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 조동사가 있는 수동태]"
            },
            {
                "q": "다음 대화의 빈칸에 알맞은 대답은?\n\nA: 'Was the thief caught by the police?'\nB: 'Yes, ______.'",
                "options": ["he was", "he did", "he is", "it was", "they were"],
                "ans": 1,
                "exp": "Was the thief ~? 질문에 대한 긍정 대답은 Yes, he was.입니다.",
                "conceptRef": "1단계 [공식 2: 수동태 부정문과 의문문]"
            }
        ]
    }
]

print("LV2 part1 loaded: Units 9 to 14")
