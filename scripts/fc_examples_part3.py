# -*- coding: utf-8 -*-
"""
Clean, authentic, high-yield English examples for Level 5 and Course 101 formula cards.
"""

FC_EXAMPLES_PART3 = {
    # -------------------------------------------------------------
    # LEVEL 5: 수능 킬러 어법 (lv5_u1 ~ lv5_u8)
    # -------------------------------------------------------------
    "lv5_u1": [
        # FC0: 본동사 찾기 3단계 검증법
        [
            {"en": "The profound impact of digital algorithms on cognitive development remains a contentious topic.", "ko": "디지털 알고리즘이 인지 발달에 미치는 심오한 영향은 여전히 논쟁적인 주제로 남아 있다.", "point": "수식어구(of digital algorithms on cognitive development)를 제외한 핵심 주어 impact의 본동사는 remains"},
            {"en": "Ancient manuscripts preserved in subterranean vaults display remarkable endurance.", "ko": "지하 금고에 보존된 고대 필사본들은 놀라운 내구성을 보여준다.", "point": "preserved는 분사 수식어구이며 문장의 진짜 본동사는 display"}
        ],
        # FC1: 동사 수 = 접속사 수 + 1
        [
            {"en": "He walked into the conference room and sat down beside his colleagues.", "ko": "그는 회의실로 걸어 들어가 동료들 곁에 앉았다.", "point": "접속사 and 1개 -> 본동사 walked, sat 2개 성립"},
            {"en": "Because economic factors fluctuated wildly, the central bank raised interest rates.", "ko": "경제 요인들이 심하게 요동쳤기 때문에 중앙은행은 금리를 인상했다.", "point": "종속접속사 Because 1개 -> 동사 fluctuated, raised 2개 구성"}
        ]
    ],
    "lv5_u2": [
        # FC0: 대동사 판별 2단계 원칙
        [
            {"en": "Modern neural networks do not process information in the exact same manner as the human brain does.", "ko": "현대 신경망은 인간의 뇌가 처리하는 것과 완전히 동일한 방식으로 정보를 처리하지는 않는다.", "point": "일반동사구(processes information)를 대신하므로 be동사가 아닌 does 사용"},
            {"en": "The quarterly economic indicators were far more volatile than they currently are.", "ko": "분기 경제 지표들은 현재 그러한 것보다 훨씬 더 불안정했다.", "point": "앞 절의 서술어가 be동사이므로 뒤 절에서도 대동사 are 사용"}
        ],
        # FC1: So + 동사 + 주어 / Neither + 동사 + 주어
        [
            {"en": "She enjoys exploring ancient historical ruins, and so do her fellow archaeologists.", "ko": "그녀는 고대 역사 유적지를 탐험하는 것을 즐기며, 그녀의 동료 고고학자들도 그러하다.", "point": "긍정 동의: [So + 일반동사 대동사 do + 복수 주어 her fellow archaeologists]"},
            {"en": "The manager did not approve the budget proposal, and neither did the board of directors.", "ko": "관리자는 예산안을 승인하지 않았으며, 이사회도 마찬가지로 승인하지 않았다.", "point": "부정 동의: [Neither + 과거 대동사 did + 주어 the board of directors]"}
        ]
    ],
    "lv5_u3": [
        # FC0: 수능 어법 만점 완전도 매트릭스
        [
            {"en": "The committee deliberated on whether the proposed space exploration mission could be funded.", "ko": "위원회는 제안된 우주 탐사 임무에 자금이 지원될 수 있는지 여부를 논의했다.", "point": "전치사 on의 목적어절이 주어와 수동태 동사를 갖춘 완전한 문장이므로 whether 사용"},
            {"en": "Solar efficiency has rapidly evolved to a stage where it exceeds traditional fossil fuel power.", "ko": "태양광 발전 효율은 전통 화석 연료의 발전을 능가하는 단계까지 빠르게 진화했다.", "point": "선행사 a stage 뒤의 절이 완전하므로 관계대명사 which가 아닌 관계부사 where 사용"}
        ],
        # FC1: 자동사 + 전치사 주의
        [
            {"en": "This is the relaxing ambient music which I listened to during my study sessions.", "ko": "이것은 내가 공부하는 동안 들었던 편안한 배경 음악이다.", "point": "listened to 뒤의 목적어가 빠진 불완전절 -> 목적격 관계대명사 which"},
            {"en": "This is the relaxing ambient music to which I listened during my study sessions.", "ko": "이것은 내가 공부하는 동안 들었던 편안한 배경 음악이다.", "point": "전치사 to가 관계사 앞으로 이동(to which)하여 뒤 절은 완전한 구조"}
        ]
    ],
    "lv5_u4": [
        # FC0: 등위접속사의 병렬 구조 공식
        [
            {"en": "The committee decided to postpone the symposium and reevaluate the entire budget.", "ko": "위원회는 심포지엄을 연기하고 전체 예산을 재평가하기로 결정했다.", "point": "등위접속사 and가 to postpone과 (to) reevaluate의 동사원형 병렬 연결"},
            {"en": "The novel is remarkable for its rich prose and innovative narrative structure.", "ko": "그 소설은 풍부한 산문과 혁신적인 서사 구조로 주목할 만하다.", "point": "전치사 for의 목적어 명사구 2개가 and로 대등하게 병렬 연결"}
        ],
        # FC1: 상관접속사의 병렬
        [
            {"en": "Effective leadership requires not only inspiring team members but also allocating resources wisely.", "ko": "효과적인 리더십은 팀원들에게 영감을 주는 것뿐만 아니라 자원을 현명하게 배분하는 것을 요구한다.", "point": "not only 동명사(inspiring) but also 동명사(allocating) 문법적 형태 일치"},
            {"en": "The experimental drug proved to be neither toxic nor ineffective during the clinical trial.", "ko": "그 실험 약물은 임상 시험 동안 독성이 있지도 효과가 없지도 않은 것으로 판명되었다.", "point": "neither 형용사(toxic) nor 형용사(ineffective) 품사 병치"}
        ]
    ],
    "lv5_u5": [
        # FC0: 5형식 목적격보어 형용사 킬러 (수능 단골)
        [
            {"en": "The advanced soundproofing material makes the vehicle cabin extremely quiet.", "ko": "첨단 방음재는 차량 실내를 극도로 조용하게 만들어 준다.", "point": "makes(동사) + cabin(목적어) + quiet(목적격 보어로 형용사 필수, 부사 quietly 불가)"},
            {"en": "Regular aerobic exercise helps people keep their cardiovascular systems healthy.", "ko": "규칙적인 유산소 운동은 사람들이 심혈관계를 건강하게 유지하도록 돕는다.", "point": "keep(동사) + cardiovascular systems(목적어) + healthy(형용사 보어)"}
        ],
        # FC1: 형용사와 부사의 수식 대상
        [
            {"en": "The team launched a remarkably successful marketing campaign across social media.", "ko": "그 팀은 소셜 미디어 전반에 걸쳐 놀라울 정도로 성공적인 마케팅 캠페인을 개시했다.", "point": "부사 remarkably가 뒤의 형용사 successful을 수식하고, successful이 명사 campaign을 수식"},
            {"en": "The injured passenger seemed comfortable during the medical evacuation.", "ko": "부상당한 승객은 의료 이송 도중 편안해 보였다.", "point": "2형식 감각/상태동사 seemed의 주격 보어 자리이므로 부사가 아닌 형용사 comfortable 사용"}
        ]
    ],
    "lv5_u6": [
        # FC0: 비교 구문에서의 that of / those of
        [
            {"en": "The linguistic structures of indigenous languages are as intricate as those of modern tongues.", "ko": "토착 언어들의 언어학적 구조는 현대 언어들의 구조만큼이나 복잡하다.", "point": "비교 대상이 복수명사 The linguistic structures이므로 that이 아닌 those 사용"},
            {"en": "The average salary in metropolitan areas is higher than that in rural districts.", "ko": "대도시 지역의 평균 급여는 농촌 지역의 평균 급여보다 더 높다.", "point": "단수명사 The average salary를 대신하는 대명사 that 사용"}
        ],
        # FC1: 재귀대명사의 재귀용법 vs 강조용법
        [
            {"en": "Individuals who isolate themselves from community support suffer higher stress levels.", "ko": "공동체의 지원으로부터 자기 자신을 고립시키는 개인들은 더 높은 스트레스 수준을 겪는다.", "point": "isolate의 주어 who(individuals)와 목적어가 같으므로 재귀대명사 themselves 필수 (생략 불가)"},
            {"en": "The lead author herself verified all experimental calculations before publication.", "ko": "수석 저자 자신이 논문 발표 전에 모든 실험 계산을 직접 검증했다.", "point": "주어 The lead author를 강조하는 용법 (생략 가능)"}
        ]
    ],
    "lv5_u7": [
        # FC0: 수능 빈출 전치사 vs 접속사 쌍
        [
            {"en": "While the scientific crew was collecting marine samples, unusual weather arose.", "ko": "과학 탐사대가 해양 표본을 채취하고 있는 동안에, 기상 이변이 일어났다.", "point": "뒤에 주어와 동사를 갖춘 절이 오므로 전치사 During 대신 접속사 While 사용"},
            {"en": "The space flight was postponed because unfavorable upper atmospheric winds persisted.", "ko": "불리한 상층 대기풍이 지속되었기 때문에 우주 비행은 연기되었다.", "point": "뒤에 주어와 동사가 오는 절이므로 because of 대신 접속사 because 사용"}
        ],
        # FC1: for vs during
        [
            {"en": "She worked abroad at the international research institute for three years.", "ko": "그녀는 해외의 국제 연구소에서 3년 동안 일했다.", "point": "for + 구체적인 숫자 기간 (three years)"},
            {"en": "Spectators took numerous photos during the annual cultural festival.", "ko": "관람객들은 연례 문화 축제 기간 동안 수많은 사진을 찍었다.", "point": "during + 특정 행사나 사건의 명사 (the festival)"}
        ]
    ],
    "lv5_u8": [
        # FC0: 수능 29번 3대 킬러 유형
        [
            {"en": "The behavioral mechanism through which migratory birds navigate across continents remains a mystery.", "ko": "철새들이 대륙을 가로질러 길을 찾는 행동학적 메커니즘은 여전히 미스터리로 남아 있다.", "point": "관계사절(through which...) 거품을 빼고 주어 mechanism에 대한 본동사 remains 판별"},
            {"en": "Psychologists view memory not as a static recording but as an active reconstructive process.", "ko": "심리학자들은 기억을 정적인 기록물이 아니라 능동적인 재구성 과정으로 바라본다.", "point": "not A but B 구문과 형용사-명사의 자연스러운 어순 결합"}
        ],
        # FC1: 수능 어법 1등급 30초 검증 팁
        [
            {"en": "A prominent biologist investigating deep sea hydrothermal vents discovered a new crustacean species.", "ko": "심해 열수구를 조사하던 한 저명한 생물학자가 새로운 갑각류 종을 발견했다.", "point": "주어(biologist) + 수식어 분사구(investigating...) + 본동사(discovered)의 3단 구조 분석"},
            {"en": "The innovative solar cells developed by the research institute convert sunlight into usable electricity efficiently.", "ko": "그 연구소에 의해 개발된 혁신적인 태양전지는 햇빛을 사용 가능한 전기로 효율적으로 변환한다.", "point": "수동 분사구(developed by...) 거품 제거 후 본동사 convert의 수일치 확인"}
        ]
    ],

    # -------------------------------------------------------------
    # COURSE 101: 영문법 필수 용어 뽀개기 (sp_terms_u1 ~ sp_terms_u8)
    # -------------------------------------------------------------
    "sp_terms_u1": [
        # FC0: 품사(8품사)는 '배우', 문장 성분은 '배역'
        [
            {"en": "The passionate actor delivered an unforgettable monologue on stage.", "ko": "그 열정적인 배우는 무대 위에서 잊을 수 없는 독백을 전했다.", "point": "The actor(품사: 명사)가 문장에서 주어 역할을 수행"},
            {"en": "The audience admired the celebrated actor with standing applause.", "ko": "관객들은 기립박수를 보내며 그 유명한 배우에게 감탄했다.", "point": "the celebrated actor(품사: 명사)가 admired의 목적어 역할을 수행"}
        ],
        # FC1: 문장 성분의 4대 뼈대 (주/동/목/보)
        [
            {"en": "She made him happy with her thoughtful encouragement.", "ko": "그녀는 사려 깊은 격려로 그를 행복하게 만들어 주었다.", "point": "주어(She) + 동사(made) + 목적어(him) + 보어(happy)"},
            {"en": "The members elected him chairperson of the executive committee.", "ko": "회원들은 그를 집행위원회 의장으로 선출했다.", "point": "목적어 him의 신분을 보충 설명하는 목적격 보어 chairperson"}
        ]
    ],
    "sp_terms_u2": [
        # FC0: 자동사(Vi) vs 타동사(Vt)의 판별법
        [
            {"en": "Migratory birds fly south every autumn without getting lost.", "ko": "철새들은 매년 가을 길을 잃지 않고 남쪽으로 날아간다.", "point": "fly: 목적어가 필요 없는 완전자동사 (1형식)"},
            {"en": "Astronomers discovered an Earth-sized exoplanet orbiting a distant star.", "ko": "천문학자들은 먼 별을 공전하는 지구 크기의 외계 행성을 발견했다.", "point": "discovered: 뒤에 목적어(an Earth-sized exoplanet)가 반드시 필요한 타동사"}
        ],
        # FC1: 1~5형식의 탄생 비밀
        [
            {"en": "The little child gave his grandmother a delicate origami flower.", "ko": "어린아이는 할머니께 정교한 종이접기 꽃을 드렸다.", "point": "4형식: 간접목적어(his grandmother) + 직접목적어(a delicate origami flower)"},
            {"en": "The unexpected discovery proved the historical theory correct.", "ko": "그 예기치 못한 발견은 그 역사적 이론이 옳다는 것을 증명했다.", "point": "5형식: 목적어(the historical theory) + 목적격 보어(correct)"}
        ]
    ],
    "sp_terms_u3": [
        # FC0: 보어(Complement) = '보충 설명해 주는 말'
        [
            {"en": "She became a world-renowned pediatric neurosurgeon after years of study.", "ko": "그녀는 수년간의 연구 끝에 세계적으로 유명한 소아 신경외과 의사가 되었다.", "point": "명사 주격 보어: 주어 She의 정체와 직업을 보충 설명 (She = neurosurgeon)"},
            {"en": "The exhausted marathon runners remained cheerful despite the relentless rain.", "ko": "지친 마라톤 선수들은 가차 없는 비에도 불구하고 여전히 밝은 표정을 유지했다.", "point": "형용사 주격 보어: 주어 runners의 감정/기분 상태를 보충 설명"}
        ],
        # FC1: 감각동사 뒤에는 반드시 형용사 보어!
        [
            {"en": "The freshly baked apple pie smelled sweet throughout the kitchen.", "ko": "갓 구운 사과파이 냄새가 부엌 전체에 달콤하게 풍겼다.", "point": "감각동사 smelled 뒤에는 부사 sweetly가 아닌 형용사 sweet 필수"},
            {"en": "The velvet fabric feels remarkably smooth to the touch.", "ko": "그 벨벳 원단은 손으로 만졌을 때 놀라울 정도로 부드럽게 느껴진다.", "point": "감각동사 feels 뒤에 형용사 보어 smooth 사용"}
        ]
    ],
    "sp_terms_u4": [
        # FC0: 준동사(Verbal) = '동사에 준하지만 다른 품사로 변신한 것'
        [
            {"en": "To master advanced astrophysics requires decades of dedicated scholarship.", "ko": "첨단 천체물리학을 마스터하는 것은 수십 년간의 헌신적인 학문 연구를 필요로 한다.", "point": "to부정사(To master): 동사 master가 명사적 주어 역할로 변신"},
            {"en": "Solving complex mathematical riddles brings him immense personal satisfaction.", "ko": "복잡한 수학적 수수께끼를 푸는 것은 그에게 커다란 개인적 만족감을 안겨준다.", "point": "동명사(Solving): 동사가 명사 역할을 하며 목적어(riddles)를 동반"}
        ],
        # FC1: 준동사 3형제의 품사 요약표
        [
            {"en": "Swimming in cold ocean water strengthens your cardiovascular endurance.", "ko": "차가운 바닷물에서 수영하는 것은 심혈관 지구력을 강화해 준다.", "point": "동명사(명사 역할): 문장의 주어 자리"},
            {"en": "The sleeping baby smiled peacefully in the gentle crib.", "ko": "잠든 아기는 아늑한 아기 침대에서 평화롭게 미소 지었다.", "point": "현재분사(형용사 역할): 명사 baby를 수식"}
        ]
    ],
    "sp_terms_u5": [
        # FC0: '관계대명사' = 접속사(문장 연결) + 대명사(명사 대신)
        [
            {"en": "I met a gifted violinist who speaks four languages with natural fluency.", "ko": "나는 4개 국어를 모국어처럼 자연스럽고 유창하게 구사하는 재능 있는 바이올리니스트를 만났다.", "point": "who = and he/she (두 문장을 이어주는 접속사이자 주어를 대신하는 주격 관계대명사)"},
            {"en": "The museum displays ancient jewelry which royal families wore centuries ago.", "ko": "그 박물관은 수세기 전 왕실 가문들이 착용했던 고대 장신구들을 전시하고 있다.", "point": "which = and it/them (접속사 + 목적어 대명사 역할 결합)"}
        ],
        # FC1: 관계대명사절은 형용사절이다!
        [
            {"en": "The modern electric vehicle which was designed in Germany achieved top safety ratings.", "ko": "독일에서 설계된 그 현대적인 전기차는 최고 안전 등급을 획득했다.", "point": "which절 전체가 선행 명사 vehicle을 꾸며주는 거대한 형용사절"},
            {"en": "Students who cultivate consistent daily study habits achieve remarkable academic progress.", "ko": "꾸준한 일일 공부 습관을 기르는 학생들은 눈부신 학업적 진전을 이룬다.", "point": "who절이 선행사 Students를 형용사처럼 수식"}
        ]
    ],
    "sp_terms_u6": [
        # FC0: 수동태는 '당하는 녀석'을 주인공으로 세우는 문법
        [
            {"en": "The revolutionary concept car was unveiled by the chief engineer yesterday.", "ko": "그 혁신적인 콘셉트카는 어제 수석 수석 엔지니어에 의해 베일을 벗었다.", "point": "능동태의 목적어 car가 주어로 이동하여 [was unveiled by ...] 형태로 표현"},
            {"en": "Magnificent Renaissance masterpieces were carefully restored by museum conservators.", "ko": "웅장한 르네상스 걸작들은 박물관 복원 전문가들에 의해 세심하게 복원되었다.", "point": "복수 주어 masterpieces에 대한 과거 수동태 were restored"}
        ],
        # FC1: 왜 be동사 + p.p. 형태일까?
        [
            {"en": "The library door is locked every night at ten o'clock.", "ko": "도서관 문은 매일 밤 10시에 잠긴다.", "point": "is(현재 상태) + locked(잠긴 완료 상태): 잠긴 상태에 도달함을 나타냄"},
            {"en": "The ancient manuscripts are preserved in temperature-controlled vaults.", "ko": "고대 필사본들은 온도가 조절되는 금고 안에 보존되어 있다.", "point": "are + preserved: 보존된 상태를 유지하고 있음을 표현"}
        ]
    ],
    "sp_terms_u7": [
        # FC0: 구(Phrase) vs 절(Clause)의 결정적 차이
        [
            {"en": "Despite the severe winter storm, the delivery drivers completed their routes.", "ko": "혹독한 겨울 폭풍에도 불구하고 배달 기사들은 노선을 완수했다.", "point": "Despite the severe winter storm: 주어와 동사가 없는 전치사구(Phrase)"},
            {"en": "Although the winter storm was severe, the delivery drivers completed their routes.", "ko": "겨울 폭풍이 혹독했음에도 불구하고 배달 기사들은 노선을 완수했다.", "point": "Although the winter storm was severe: 주어와 동사를 갖춘 부사절(Clause)"}
        ],
        # FC1: 주절(Independent) vs 종속절(Dependent)
        [
            {"en": "When the conductor raised his baton, the symphony orchestra began to play.", "ko": "지휘자가 지휘봉을 들어 올렸을 때, 교향악단은 연주를 시작했다.", "point": "When...baton: 혼자 설 수 없는 종속절 / the orchestra...play: 스스로 문장이 되는 주절"},
            {"en": "Because fossil fuel reserves are depleting, nations must develop renewable energy sources.", "ko": "화석 연료 매장량이 고갈되고 있기 때문에, 국가들은 신재생 에너지원을 개발해야 한다.", "point": "종속 부사절(Because...)과 독립된 완전한 주절(nations must...)"}
        ]
    ],
    "sp_terms_u8": [
        # FC0: 한정적(Attributive) vs 서술적(Predicative)의 어원
        [
            {"en": "The dedicated marine biologist observed the sleeping otter gently.", "ko": "헌신적인 해양 생물학자는 잠든 수달을 조심스럽게 관찰했다.", "point": "한정적 용법: 형용사 sleeping이 명사 otter를 앞에서 직접 수식"},
            {"en": "The tired child was fast asleep in his mother's arms.", "ko": "지친 아이는 어머니의 품 안에서 깊이 잠들어 있었다.", "point": "서술적 용법: a-로 시작하는 형용사 asleep은 명사 수식 불가, be동사의 보어로만 쓰임"}
        ],
        # FC1: 관계대명사의 한정용법 vs 계속적 용법(콤마)
        [
            {"en": "He has two daughters who became successful aerospace engineers.", "ko": "그에게는 성공한 항공우주 엔지니어가 된 두 딸이 있다.", "point": "한정적 용법: 딸들 중 항공우주 엔지니어가 된 딸이 둘 있다는 의미 (다른 딸이 더 있을 수 있음)"},
            {"en": "He has two daughters, who became successful aerospace engineers.", "ko": "그에게는 딸이 둘 있는데, 그 둘 다 성공한 항공우주 엔지니어가 되었다.", "point": "계속적 용법(콤마): 딸은 오직 둘뿐이며 부가적으로 그들의 성공을 설명함"}
        ]
    ]
}
