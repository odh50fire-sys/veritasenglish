# -*- coding: utf-8 -*-
"""
Clean, authentic, high-yield English examples for Level 1 and Level 2 formula cards.
"""

FC_EXAMPLES_PART1 = {
    # -------------------------------------------------------------
    # LEVEL 1: 중1 문법 완성 (lv1_u1 ~ lv1_u8)
    # -------------------------------------------------------------
    "lv1_u1": [
        # FC0: be동사의 현재형·과거형과 부정문·의문문
        [
            {"en": "She was very happy yesterday, but she is tired today.", "ko": "그녀는 어제 매우 행복했지만, 오늘은 피곤하다.", "point": "yesterday(과거) -> was / today(현재) -> is"},
            {"en": "They were not at school two hours ago.", "ko": "그들은 두 시간 전에 학교에 없었다.", "point": "과거 복수 부정 -> were not (weren't)"},
            {"en": "Are you ready for the final exam?", "ko": "너는 기말시험 준비가 되었니?", "point": "be동사 의문문: Are + 주어(you) ~?"}
        ],
        # FC1: 일반동사의 3인칭 단수 현재형과 과거형 규칙
        [
            {"en": "My father watches TV every evening.", "ko": "나의 아버지는 매일 저녁 TV를 보신다.", "point": "3인칭 단수 주어 My father + watch에 -es -> watches"},
            {"en": "He did not go to the park yesterday.", "ko": "그는 어제 공원에 가지 않았다.", "point": "did not(didn't) 뒤에는 반드시 동사원형 go"},
            {"en": "Did you see the doctor yesterday?", "ko": "너는 어제 의사의 진료를 받았니?", "point": "일반동사 과거 의문문: Did + 주어 + 동사원형 see ~?"}
        ]
    ],
    "lv1_u2": [
        # FC0: 규칙 및 불규칙 명사의 복수형 완전 정복
        [
            {"en": "Three children are playing with their puppies.", "ko": "세 명의 아이들이 강아지들과 놀고 있다.", "point": "child의 불규칙 복수형 children / puppy의 자음+y 복수형 puppies"},
            {"en": "I brushed my teeth after breakfast.", "ko": "나는 아침 식사 후에 이를 닦았다.", "point": "tooth의 불규칙 복수형 teeth"},
            {"en": "The autumn leaves turn beautiful red and yellow.", "ko": "가을 나뭇잎들이 아름다운 붉은색과 노란색으로 변한다.", "point": "leaf(-f로 끝나는 명사)의 복수형 leaves"}
        ],
        # FC1: 인칭대명사의 4대 격변화와 소유대명사
        [
            {"en": "This camera is not mine, but it is hers.", "ko": "이 카메라는 내 것이 아니라 그녀의 것이다.", "point": "mine(= my camera), hers(= her camera) 소유대명사"},
            {"en": "Mr. Brown teaches us English at school.", "ko": "브라운 선생님은 학교에서 우리에게 영어를 가르치신다.", "point": "teaches 뒤의 간접목적어 자리 -> 목적격 us"},
            {"en": "The teacher gave him and me some books.", "ko": "선생님은 그와 나에게 몇 권의 책을 주셨다.", "point": "gave의 목적어 병렬 -> him and me (I 쓰면 오답)"}
        ]
    ],
    "lv1_u3": [
        # FC0: 형용사의 한정적 용법과 서술적 용법(보어)
        [
            {"en": "She bought a delicate antique vase at the auction.", "ko": "그녀는 경매에서 우아한 골동품 꽃병을 샀다.", "point": "명사 vase를 앞에서 직접 수식하는 한정적 용법"},
            {"en": "The peaceful garden remained quiet throughout the morning.", "ko": "평화로운 정원은 아침 내내 조용함을 유지했다.", "point": "2형식 연결동사 remained의 주격 보어로 쓰인 서술적 용법"}
        ],
        # FC1: 형용사와 형태가 같거나 -ly가 붙어 뜻이 변하는 주의 부사
        [
            {"en": "The high speed train runs very fast on the new track.", "ko": "고속 열차는 새 선로 위를 매우 빠르게 달린다.", "point": "fast는 형용사와 부사 형태가 동일 (fastly는 없는 단어)"},
            {"en": "He worked hard all week, so he could hardly open his eyes.", "ko": "그는 한 주 내내 열심히 일해서, 거의 눈을 뜰 수 없었다.", "point": "hard(열심히: 부사) vs hardly(거의 ~않다: 빈도부사)"}
        ]
    ],
    "lv1_u4": [
        # FC0: 일반 의문사 의문문 어순
        [
            {"en": "Where did you buy this stylish jacket yesterday?", "ko": "너는 어제 이 멋진 재킷을 어디에서 샀니?", "point": "의문사(Where) + 조동사(did) + 주어(you) + 동사원형(buy)"},
            {"en": "Why is the baby crying so loudly right now?", "ko": "아기가 지금 왜 이렇게 크게 울고 있니?", "point": "의문사(Why) + be동사(is) + 주어(the baby) + 현재분사(crying)"}
        ],
        # FC1: 의문사가 주어인 경우
        [
            {"en": "Who broke the glass window in the living room?", "ko": "누가 거실 유리창을 깨뜨렸니?", "point": "의문사 Who가 직접 주어이므로 did break가 아니라 broke 바로 연결"},
            {"en": "What happened to your bicycle yesterday afternoon?", "ko": "어제 오후에 네 자전거에 무슨 일이 있었니?", "point": "What이 주어이므로 일반동사 과거형 happened가 바로 연결"}
        ]
    ],
    "lv1_u5": [
        # FC0: 진행형의 기본 형태
        [
            {"en": "They are building a modern bridge over the river.", "ko": "그들은 강 위에 현대적인 다리를 건설하고 있다.", "point": "현재진행형: are(be동사 현재형) + building(V-ing)"},
            {"en": "She was writing an important email when I entered the office.", "ko": "내가 사무실에 들어갔을 때 그녀는 중요한 이메일을 작성하고 있었다.", "point": "과거진행형: was(be동사 과거형) + writing(V-ing)"}
        ],
        # FC1: 진행형 불가 동사 (상태동사)
        [
            {"en": "I know the answer to that difficult question.", "ko": "나는 그 어려운 질문에 대한 답을 알고 있다.", "point": "인식/상태 동사 know는 진행형(am knowing) 불가"},
            {"en": "He resembles his grandfather in many ways.", "ko": "그는 여러 면에서 그의 할아버지를 닮았다.", "point": "상태/유사 동사 resemble은 진행형(is resembling) 불가"}
        ]
    ],
    "lv1_u6": [
        # FC0: 조동사의 기본 원칙
        [
            {"en": "You can speak fluent English after sufficient practice.", "ko": "충분한 연습 후에 너는 유창한 영어를 구사할 수 있다.", "point": "조동사 can 뒤에는 반드시 동사원형 speak"},
            {"en": "We must protect the endangered wildlife in this forest.", "ko": "우리는 이 숲의 멸종 위기 야생동물을 보호해야 한다.", "point": "조동사 must 뒤에는 동사원형 protect 필수"}
        ],
        # FC1: must vs must not vs don't have to
        [
            {"en": "You must not touch the fragile ancient artifacts.", "ko": "너는 깨지기 쉬운 고대 유물들을 만져서는 안 된다.", "point": "must not: 강한 금지 (~해서는 절대 안 된다)"},
            {"en": "You do not have to wear a suit to the casual party.", "ko": "너는 그 캐주얼 파티에 정장을 입고 갈 필요가 없다.", "point": "do not have to: 불필요 (~할 필요가 없다)"}
        ]
    ],
    "lv1_u7": [
        # FC0: 1·2·3형식의 구조
        [
            {"en": "The early morning sun rises in the east.", "ko": "이른 아침 태양은 동쪽에서 뜬다.", "point": "1형식: 주어(The sun) + 완전자동사(rises) + 수식어구"},
            {"en": "The experienced detective inspected the crime scene thoroughly.", "ko": "숙련된 형사는 범죄 현장을 철저하게 조사했다.", "point": "3형식: 주어 + 완전타동사(inspected) + 목적어(the crime scene)"}
        ],
        # FC1: 2형식 감각동사
        [
            {"en": "The fresh bread smells delicious in the bakery.", "ko": "빵집 안에서 갓 구운 빵 냄새가 아주 맛있게 난다.", "point": "감각동사 smells 뒤에 부사 deliciously가 아닌 형용사 delicious 필수"},
            {"en": "Her voice sounded calm despite the unexpected emergency.", "ko": "예기치 못한 비상사태에도 불구하고 그녀의 목소리는 침착하게 들렸다.", "point": "감각동사 sounded 뒤 주격 보어로 형용사 calm 사용"}
        ]
    ],
    "lv1_u8": [
        # FC0: 명령문, and / or
        [
            {"en": "Start early in the morning, and you will arrive before sunset.", "ko": "아침 일찍 출발해라, 그러면 일몰 전에 도착할 것이다.", "point": "명령문, and ~: ~해라, 그러면 ...할 것이다"},
            {"en": "Hurry up now, or you will miss the express train.", "ko": "지금 서둘러라, 그렇지 않으면 급행열차를 놓칠 것이다.", "point": "명령문, or ~: ~해라, 그렇지 않으면 ...할 것이다"}
        ],
        # FC1: 감탄문 공식
        [
            {"en": "What a magnificent view this ancient temple is!", "ko": "이 고대 사원은 참으로 웅장한 경치이구나!", "point": "What + a(n) + 형용사(magnificent) + 명사(view) + 주어 + 동사!"},
            {"en": "How brightly the stars shine in the clear night sky!", "ko": "맑은 밤하늘에 별들이 얼마나 밝게 빛나는가!", "point": "How + 부사(brightly) + 주어(the stars) + 동사(shine)!"}
        ]
    ],

    # -------------------------------------------------------------
    # LEVEL 2: 중2 문법 핵심 (lv2_u1 ~ lv2_u8)
    # -------------------------------------------------------------
    "lv2_u1": [
        # FC0: to부정사의 3대 용법 판별
        [
            {"en": "To read classic literature inspires creative writing.", "ko": "고전문학을 읽는 것은 창의적인 글쓰기에 영감을 준다.", "point": "명사적 용법: 문장의 주어 역할 (~하는 것)"},
            {"en": "I need a quiet library room to study for the exam.", "ko": "나는 시험공부를 할 조용한 도서관 방이 필요하다.", "point": "형용사적 용법: 명사 a quiet library room 수식 (~할)"},
            {"en": "He woke up early to catch the first express train.", "ko": "그는 첫 급행열차를 타기 위해 일찍 일어났다.", "point": "부사적 용법: 목적을 나타냄 (~하기 위하여)"}
        ],
        # FC1: 의문사 + to부정사
        [
            {"en": "She asked the travel guide where to visit in the historic city.", "ko": "그녀는 여행 가이드에게 그 역사 도시에서 어디를 방문해야 할지 물었다.", "point": "where to visit = where she should visit (명사구 역할)"},
            {"en": "The professor explained how to solve the complex equation.", "ko": "교수님은 그 복잡한 방정식을 푸는 방법을 설명하셨다.", "point": "how to solve = how we should solve (방법을 나타내는 목적어)"}
        ]
    ],
    "lv2_u2": [
        # FC0: 목적어 취급 동사 공식
        [
            {"en": "They decided to launch the educational initiative next spring.", "ko": "그들은 내년 봄에 교육 계획을 시작하기로 결정했다.", "point": "decide는 미래지향 동사로 to부정사(to launch)만을 목적어로 취함"},
            {"en": "We enjoyed watching the sunset over the horizon.", "ko": "우리는 지평선 너머로 해가 지는 것을 감상하는 것을 즐겼다.", "point": "enjoy는 동명사(watching)만을 목적어로 취함"}
        ],
        # FC1: remember / forget / stop
        [
            {"en": "Please remember to submit your research paper by Friday.", "ko": "금요일까지 연구 보고서를 제출할 것을 잊지 말고 기억하세요.", "point": "remember + to V: 미래에 해야 할 일"},
            {"en": "I distinctly remember locking the office door before leaving.", "ko": "나는 떠나기 전에 사무실 문을 잠갔던 것을 뚜렷이 기억한다.", "point": "remember + -ing: 과거에 이미 했던 일"},
            {"en": "The tired driver stopped to take a short nap.", "ko": "피곤한 운전자는 짧은 낮잠을 자기 위해 멈추었다.", "point": "stop + to V: ~하기 위해 가던 길을 멈추다"}
        ]
    ],
    "lv2_u3": [
        # FC0: 현재완료 4대 용법 구별 짝꿍 부사
        [
            {"en": "She has just finished writing her graduation thesis.", "ko": "그녀는 방금 졸업 논문 작성을 마쳤다.", "point": "완료: just, already, yet과 결합"},
            {"en": "I have visited that historic museum three times.", "ko": "나는 그 역사 박물관을 세 번 방문해 본 적이 있다.", "point": "경험: ever, never, before, three times 등과 결합"},
            {"en": "They have lived in this coastal town since 2010.", "ko": "그들은 2010년 이래로 이 해안 마을에 살아왔다.", "point": "계속: since, for + 기간과 결합"}
        ],
        # FC1: 과거 특정 시점 부사 결합 금지
        [
            {"en": "The famous scientist discovered the cosmic anomaly two years ago.", "ko": "그 유명한 과학자는 2년 전에 우주 이상 현상을 발견했다.", "point": "two years ago는 명백한 과거 부사이므로 현재완료 대신 단순과거 discovered 사용"},
            {"en": "When did you first meet your current business partner?", "ko": "너는 언제 현재의 사업 파트너를 처음 만났니?", "point": "When 의문문은 특정 시점을 묻기 때문에 현재완료(When have you met) 불가"}
        ]
    ],
    "lv2_u4": [
        # FC0: 수여동사 4형식 ➔ 3형식 전치사 분류
        [
            {"en": "The teacher gave a helpful book to each student.", "ko": "선생님은 각 학생에게 유익한 책 한 권을 주셨다.", "point": "give 계열(give, send, show, teach)은 전치사 to 사용"},
            {"en": "My uncle made a wooden bookshelf for me.", "ko": "삼촌은 나를 위해 원목 책장을 만들어 주셨다.", "point": "make 계열(make, buy, cook, find)은 전치사 for 사용"},
            {"en": "May I ask a personal favor of you?", "ko": "제가 당신에게 개인적인 부탁 하나를 해도 될까요?", "point": "ask 동사는 전치사 of 사용"}
        ],
        # FC1: 감각동사 + like + 명사
        [
            {"en": "The fresh soup tastes rich and savory.", "ko": "신선한 수프는 풍부하고 깊은 맛이 난다.", "point": "감각동사 tastes + 형용사(rich and savory)"},
            {"en": "That towering cloud looks like a giant castle in the sky.", "ko": "저 우뚝 솟은 구름은 하늘의 거대한 성처럼 보인다.", "point": "감각동사 looks + like + 명사(a giant castle)"}
        ]
    ],
    "lv2_u5": [
        # FC0: 원급 비교와 부정
        [
            {"en": "Her latest novel is as compelling as her debut work.", "ko": "그녀의 최신 소설은 그녀의 데뷔작만큼 흥미진진하다.", "point": "as + 원급(compelling) + as: ~만큼 ...한"},
            {"en": "This small battery is not as heavy as the old model.", "ko": "이 소형 배터리는 이전 모델만큼 무겁지 않다.", "point": "not as(so) + 원급 + as: ~만큼 ...하지 않은"}
        ],
        # FC1: 비교급 강조 부사
        [
            {"en": "The new supercomputer processes data much faster than previous systems.", "ko": "새 슈퍼컴퓨터는 이전 시스템들보다 훨씬 더 빠르게 데이터를 처리한다.", "point": "비교급 faster 강조: much, far, even, still, a lot (very는 비교급 수식 불가)"},
            {"en": "This mountain path is far steeper than we anticipated.", "ko": "이 산길은 우리가 예상했던 것보다 훨씬 더 가파르다.", "point": "비교급 steeper를 강조하는 부사 far"}
        ]
    ],
    "lv2_u6": [
        # FC0: used to vs be used to
        [
            {"en": "There used to be a grand opera house on this corner.", "ko": "이 모퉁이에 웅장한 오페라 극장이 하나 있곤 했다.", "point": "used to + 동사원형: 과거의 상태나 규칙적 습관 (~이 있었다 / ~하곤 했다)"},
            {"en": "Solar panels are used to generate eco-friendly electricity.", "ko": "태양광 패널은 친환경 전기를 생산하는 데 사용된다.", "point": "be used to + 동사원형: use의 수동태 (~하는 데 사용되다)"},
            {"en": "She is used to working under intense deadline pressure.", "ko": "그녀는 강한 마감 압박 속에서 일하는 것에 익숙하다.", "point": "be used to + -ing: ~에 익숙하다 (= be accustomed to)"}
        ],
        # FC1: had better와 would rather
        [
            {"en": "You had better take an umbrella because it looks like rain.", "ko": "비가 올 것 같으니 너는 우산을 챙기는 편이 낫겠다.", "point": "had better + 동사원형: ~하는 편이 낫다 (부정: had better not)"},
            {"en": "I would rather stay home than attend that noisy banquet.", "ko": "나는 저 시끄러운 연회에 참석하느니 차라리 집에 머물겠다.", "point": "would rather A than B: B하느니 차라리 A하겠다"}
        ]
    ],
    "lv2_u7": [
        # FC0: 수동태 기본 공식
        [
            {"en": "The historic cathedral was designed by a visionary architect.", "ko": "그 역사적인 대성당은 비전을 가진 한 건축가에 의해 설계되었다.", "point": "주어 + be동사(was) + 과거분사(designed) + by 행위자"},
            {"en": "Modern vaccines are distributed safely across all regions.", "ko": "현대 백신들은 모든 지역에 안전하게 보급된다.", "point": "현재 시제 복수 수동태: are + distributed"}
        ],
        # FC1: 수동태 불가 동사 (자동사)
        [
            {"en": "A severe earthquake occurred near the coastal islands yesterday.", "ko": "어제 해안 섬 근처에서 강한 지진이 발생했다.", "point": "occur는 완전자동사로 목적어가 없으므로 수동태(was occurred) 절대 불가"},
            {"en": "The mysterious footprints disappeared in the fresh snow.", "ko": "그 신비한 발자국들은 새로 내린 눈 속으로 사라졌다.", "point": "disappear는 자동사이므로 수동태(were disappeared) 불가"}
        ]
    ],
    "lv2_u8": [
        # FC0: 시간·조건 부사절의 대원칙
        [
            {"en": "If it rains tomorrow, the outdoor baseball tournament will be postponed.", "ko": "만약 내일 비가 온다면, 야외 야구 토너먼트는 연기될 것이다.", "point": "조건 부사절(If)에서는 내일 일이라도 will rain 대신 현재시제 rains 사용"},
            {"en": "We will start the meeting as soon as the director arrives.", "ko": "우리는 이사님이 도착하자마자 회의를 시작할 것이다.", "point": "시간 부사절(as soon as)에서는 will arrive 대신 현재시제 arrives 사용"}
        ],
        # FC1: if vs unless
        [
            {"en": "You cannot pass the proficiency test unless you practice diligently.", "ko": "부지런히 연습하지 않는다면 너는 숙련도 시험에 통과할 수 없다.", "point": "unless = if not (만약 ~하지 않는다면, 자체에 부정이 포함됨)"},
            {"en": "Do not enter the laboratory unless authorized by the supervisor.", "ko": "관리자의 승인을 받지 않는 한 실험실에 들어가지 마라.", "point": "unless 조건절: 예외적 조건 규정"}
        ]
    ]
}
