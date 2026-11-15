# -*- coding: utf-8 -*-
"""
Curated Drill 2 and Drill 3 for Course 102 (8 units), Course 103 (6 units), Course 104 (8 units).
Total 22 units * 2 = 44 drills.
"""

DRILLS_EXTRA_PART4 = {
    # -------------------------------------------------------------
    # COURSE 102: 서술형 영작 치트키 (sp_writing_u1 ~ sp_writing_u8)
    # -------------------------------------------------------------
    "sp_writing_u1": [
        {
            "id": "drill_2",
            "sentence": "The ambitious team decided pursuing the renewable energy initiative despite harsh economic headwinds.",
            "underlined": ["ambitious team", "decided", "pursuing", "harsh economic"],
            "wrongIndex": 2,
            "correction": "to pursue",
            "explanation": "동사 decide는 미래지향적 결정을 나타내므로 목적어로 동명사가 아닌 to부정사(to pursue)만을 취합니다.",
            "conceptRef": "1단계 [SP-09 핵심: to부정사 목적어 필수 동사군 영작 공식] 출제 연계",
            "korean": "그 야심 찬 팀은 가혹한 경제적 역풍에도 불구하고 신재생 에너지 계획을 추진하기로 결정했다."
        },
        {
            "id": "drill_3",
            "sentence": "The senior engineer recommended to calibrate the pressure sensors before commencing thermal testing.",
            "underlined": ["senior engineer", "recommended", "to calibrate", "commencing"],
            "wrongIndex": 2,
            "correction": "calibrating",
            "explanation": "recommend는 목적어로 to부정사가 아닌 동명사를 취하거나 'recommend that S (should) V' 구문을 취해야 하므로 to calibrate를 calibrating으로 고쳐야 합니다.",
            "conceptRef": "1단계 [SP-09 핵심: 동명사 목적어 필수 동사군 서술형 체크] 출제 연계",
            "korean": "수석 엔지니어는 열 시험을 시작하기 전에 압력 센서를 교정할 것을 권고했다."
        }
    ],
    "sp_writing_u2": [
        {
            "id": "drill_2",
            "sentence": "The international convention center that the delegate delivered the keynote speech was magnificently renovated.",
            "underlined": ["convention center", "that", "delivered the keynote", "magnificently"],
            "wrongIndex": 1,
            "correction": "where",
            "explanation": "뒤따르는 절이 주어(the delegate), 동사(delivered), 목적어(the keynote speech)를 모두 갖춘 완전한 문장이므로 선행사(장소)를 수식할 때 관계대명사 that이 아닌 관계부사 where(또는 in which)를 써야 합니다.",
            "conceptRef": "1단계 [SP-10 핵심: 관계대명사 vs 관계부사 서술형 영작 구별법] 출제 연계",
            "korean": "그 대표가 기조 연설을 했던 국제 컨벤션 센터는 웅장하게 개조되었다."
        },
        {
            "id": "drill_3",
            "sentence": "This is the rare historical document which authentic origin historians have argued about it for centuries.",
            "underlined": ["historical document", "which", "historians have argued", "about it"],
            "wrongIndex": 3,
            "correction": "about",
            "explanation": "관계대명사 which가 전치사 about의 목적어 역할을 이미 수행하고 있으므로, 절 끝에 목적어 대명사 it을 중복 표기하면 서술형 감점이 되므로 it을 삭제해야 합니다.",
            "conceptRef": "1단계 [SP-10 핵심: 관계사절 내 중복 대명사 서술형 감점 방어] 출제 연계",
            "korean": "이것은 역사가들이 수세기 동안 그 진짜 기원에 대해 논쟁해 온 희귀한 역사 문서이다."
        }
    ],
    "sp_writing_u3": [
        {
            "id": "drill_2",
            "sentence": "Finished his exhaustive laboratory experiments, the graduate student prepared his thesis draft for publication.",
            "underlined": ["Finished", "laboratory experiments", "prepared", "for publication"],
            "wrongIndex": 0,
            "correction": "Having finished",
            "explanation": "실험을 마친 시점이 논문 초안을 준비한 시점보다 앞선 완료 시제이므로, 단순 과거분사 Finished가 아니라 완료분사구문 Having finished를 써야 합니다.",
            "conceptRef": "1단계 [SP-11 핵심: 주절보다 앞선 시제의 완료분사구문(Having p.p.) 영작] 출제 연계",
            "korean": "철저한 실험실 연구를 마친 후, 대학원생은 출판을 위해 학위 논문 초안을 작성했다."
        },
        {
            "id": "drill_3",
            "sentence": "Walking along the misty coastal cliffs, a sudden flash of lightning startled the cautious hikers.",
            "underlined": ["Walking along", "misty coastal", "sudden flash", "startled"],
            "wrongIndex": 0,
            "correction": "While the cautious hikers were walking along",
            "explanation": "분사구문의 의미상 주어는 주절의 주어(a sudden flash of lightning)와 일치해야 하는데, 번개가 절벽을 걸을 수 없으므로(현수분사 오류), 행위자를 밝혀주는 부사절로 고치거나 주절 주어를 등산객으로 변경해야 합니다.",
            "conceptRef": "1단계 [SP-11 핵심: 서술형 단골 현수분사(Dangling Participle) 방어] 출제 연계",
            "korean": "안개 낀 해안 절벽을 따라 걷고 있을 때, 갑작스러운 번개가 조심스러운 등산객들을 놀라게 했다."
        }
    ],
    "sp_writing_u4": [
        {
            "id": "drill_2",
            "sentence": "Had the meteorologists forecasted the storm accurately, the seaside villagers would evacuated earlier.",
            "underlined": ["Had the meteorologists", "forecasted", "seaside villagers", "would evacuated"],
            "wrongIndex": 3,
            "correction": "would have evacuated",
            "explanation": "조건절이 Had S p.p.(가정법 과거완료)이므로 주절의 동사 형태 역시 [조동사 과거형 + have p.p.]인 would have evacuated가 되어야 합니다.",
            "conceptRef": "1단계 [SP-12 핵심: if 생략 도치 가정법 과거완료 주절 일치 공식] 출제 연계",
            "korean": "기상학자들이 폭풍을 정확하게 예보했더라면, 해변 마을 주민들은 더 일찍 대피했을 것이다."
        },
        {
            "id": "drill_3",
            "sentence": "Were the government to invest heavily in public transport, traffic congestion will decrease noticeably.",
            "underlined": ["Were the government", "to invest heavily", "traffic congestion", "will decrease"],
            "wrongIndex": 3,
            "correction": "would decrease",
            "explanation": "조건절에 [Were + 주어 + to부정사] 도치가 쓰인 미래 가정법이므로 주절에는 조동사 현재형 will이 아닌 과거형 would(또는 could)를 써야 합니다.",
            "conceptRef": "1단계 [SP-12 핵심: Were to 도치 가정법 주절 조동사 시제 일치] 출제 연계",
            "korean": "정부가 대중교통에 대대적으로 투자한다면, 교통 체증은 눈에 띄게 감소할 것이다."
        }
    ],
    "sp_writing_u5": [
        {
            "id": "drill_2",
            "sentence": "The mathematical proof was too intricate that undergraduate students could not grasp its underlying logic.",
            "underlined": ["mathematical proof", "too intricate", "that", "underlying logic"],
            "wrongIndex": 1,
            "correction": "so intricate",
            "explanation": "뒤에 결과를 나타내는 'that + 완전한 절'이 이어지므로 too가 아니라 so와 호응하는 'so ~ that 구문'으로 써야 합니다.",
            "conceptRef": "1단계 [SP-13 핵심: so ~ that ... can't 구문과 too ~ to 부정사 변환 공식] 출제 연계",
            "korean": "그 수학적 증명은 너무 복잡해서 학부생들이 그 근본 논리를 파악할 수 없었다."
        },
        {
            "id": "drill_3",
            "sentence": "The heavy suitcase was so heavy that the fragile child could not lift it up without assistance.",
            "underlined": ["heavy suitcase", "so heavy", "fragile child", "lift it up"],
            "wrongIndex": 1,
            "correction": "too heavy for the fragile child to lift",
            "explanation": "too ~ to 구문으로 변환할 때 목적어 it의 생략 여부와 의미상 주어(for + 목적격) 표기를 철저히 확인해야 합니다.",
            "conceptRef": "1단계 [SP-13 핵심: so that can't vs too to 변환 시 대명사 목적어 생략 법칙] 출제 연계",
            "korean": "그 무거운 여행가방은 너무 무거워서 연약한 아이가 도움 없이 들어 올릴 수 없었다."
        }
    ],
    "sp_writing_u6": [
        {
            "id": "drill_2",
            "sentence": "The strict drill instructor made all recruits to run ten miles across the rugged mountain terrain.",
            "underlined": ["strict drill", "made", "recruits", "to run"],
            "wrongIndex": 3,
            "correction": "run",
            "explanation": "사역동사 make는 능동 관계의 목적격 보어로 to부정사가 아닌 동사원형(run)을 취합니다.",
            "conceptRef": "1단계 [SP-14 핵심: 5형식 사역동사(make/have/let) 목적격 보어 원형부정사] 출제 연계",
            "korean": "엄격한 훈련 교관은 모든 신병들에게 험준한 산악 지형 10마일을 달리도록 만들었다."
        },
        {
            "id": "drill_3",
            "sentence": "The biology teacher observed the tiny amoeba moving under the microscope and had her students to sketch its cellular structure.",
            "underlined": ["observed", "moving under", "had her students", "to sketch"],
            "wrongIndex": 3,
            "correction": "sketch",
            "explanation": "사역동사 had의 목적격 보어 자리이므로 to부정사 to sketch가 아니라 동사원형 sketch를 써야 합니다.",
            "conceptRef": "1단계 [SP-14 핵심: 5형식 사역동사 목적격 보어 동사원형 서술형 체크] 출제 연계",
            "korean": "생물 선생님은 작은 아메바가 현미경 아래에서 움직이는 것을 관찰하고 학생들에게 그 세포 구조를 그리게 했다."
        }
    ],
    "sp_writing_u7": [
        {
            "id": "drill_2",
            "sentence": "Not until the late eighteenth century humanity realized the fundamental laws governing planetary motion.",
            "underlined": ["Not until", "eighteenth century", "humanity realized", "governing planetary"],
            "wrongIndex": 2,
            "correction": "did humanity realize",
            "explanation": "'Not until ~' 부정어구가 문두에 강조되어 나왔으므로 주어-동사가 도치되어 [조동사 did + 주어 + 동사원형] 어순인 'did humanity realize'가 되어야 합니다.",
            "conceptRef": "1단계 [SP-15 핵심: Not until 도치 서술형 영작 공식] 출제 연계",
            "korean": "18세기 후반이 되어서야 인류는 행성 운동을 지배하는 근본 법칙을 깨달았다."
        },
        {
            "id": "drill_3",
            "sentence": "Seldom the dedicated researchers left the laboratory before midnight while conducting crucial vaccine trials.",
            "underlined": ["Seldom", "researchers left", "before midnight", "conducting crucial"],
            "wrongIndex": 1,
            "correction": "did the dedicated researchers leave",
            "explanation": "부정어 Seldom이 문두에 강조되어 나왔으므로 주어-동사가 도치되어 [조동사 did + 주어 + 동사원형] 어순인 'did the dedicated researchers leave'가 되어야 합니다.",
            "conceptRef": "1단계 [SP-15 핵심: Seldom/Rarely 부정어 도치 서술형 영작] 출제 연계",
            "korean": "헌신적인 연구원들은 중요한 백신 임상 시험을 진행하는 동안 자정 전에 연구실을 떠나는 법이 거의 없었다."
        }
    ],
    "sp_writing_u8": [
        {
            "id": "drill_2",
            "sentence": "Each of the dedicated research assistants have submitted their monthly laboratory report on time.",
            "underlined": ["Each of the", "research assistants", "have submitted", "on time"],
            "wrongIndex": 2,
            "correction": "has submitted",
            "explanation": "'Each of + 복수명사' 구문의 핵심 주어는 단수 대명사 Each이므로 동사를 복수 have가 아닌 단수 has submitted로 써야 합니다.",
            "conceptRef": "1단계 [SP-16 핵심: 서술형 감점 1위 단수/복수 수일치 실수 클리닉] 출제 연계",
            "korean": "헌신적인 연구 보조원들 각각은 월간 실험 보고서를 제시간에 제출했다."
        },
        {
            "id": "drill_3",
            "sentence": "The museum curator preserves priceless artifacts despite they are severely vulnerable to humidity fluctuations.",
            "underlined": ["preserves priceless", "artifacts", "despite", "severely vulnerable"],
            "wrongIndex": 2,
            "correction": "although",
            "explanation": "뒤에 주어(they)와 동사(are)를 갖춘 완전한 절이 오므로 전치사 despite 대신 양보 접속사 although나 even though를 써야 합니다.",
            "conceptRef": "1단계 [SP-16 핵심: 서술형 품사 혼동(접속사 vs 전치사) 감점 방어] 출제 연계",
            "korean": "박물관 큐레이터는 매우 귀중한 유물들이 습도 변동에 심각하게 취약함에도 불구하고 그것들을 보존한다."
        }
    ],

    # -------------------------------------------------------------
    # COURSE 103: 수능 어법 킬러 6대 공식 (sp_csat_u1 ~ sp_csat_u6)
    # -------------------------------------------------------------
    "sp_csat_u1": [
        {
            "id": "drill_2",
            "sentence": "The rapid advancement of artificial intelligence technologies creating unprecedented challenges for modern legal frameworks.",
            "underlined": ["rapid advancement", "artificial intelligence", "creating", "legal frameworks"],
            "wrongIndex": 2,
            "correction": "creates",
            "explanation": "문장의 주어는 'The rapid advancement'이며 절 안에 본동사가 존재하지 않으므로 준동사 creating을 단수 본동사 creates(또는 is creating)로 고쳐야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 1순위: 동사 vs 준동사 판별] 출제 연계",
            "korean": "인공지능 기술의 급격한 발전은 현대 법적 체계에 전례 없는 도전과제들을 만들어내고 있다."
        },
        {
            "id": "drill_3",
            "sentence": "Architects specializing in eco-friendly urban development incorporating solar panels to reduce communal electricity costs.",
            "underlined": ["Architects", "urban development", "incorporating", "to reduce"],
            "wrongIndex": 2,
            "correction": "incorporated",
            "explanation": "specializing in...는 주어 Architects를 수식하는 분사구이므로 문장 전체의 본동사가 필요합니다. 따라서 준동사인 incorporating을 과거시제 본동사인 incorporated(또는 incorporate)로 고쳐야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 1순위: 주어 수식 거품 속 본동사 자리 판별] 출제 연계",
            "korean": "친환경 도시 개발을 전공하는 건축가들은 공동 전기 요금을 절감하기 위해 태양광 패널을 도입했다."
        }
    ],
    "sp_csat_u2": [
        {
            "id": "drill_2",
            "sentence": "The committee reached a unanimous consensus what the proposed infrastructure project should be postponed.",
            "underlined": ["reached a unanimous", "consensus", "what", "should be postponed"],
            "wrongIndex": 2,
            "correction": "that",
            "explanation": "뒤따르는 절이 완전한 수동태 문장이며 앞의 추상명사 consensus와 의미상 동격을 이루므로 불완전문사를 이끄는 what이 아니라 동격 접속사 that을 써야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 2순위: that vs what vs which 끝장 판별법] 출제 연계",
            "korean": "위원회는 제안된 사회기반시설 프로젝트를 연기해야 한다는 만장일치의 합의에 도달했다."
        },
        {
            "id": "drill_3",
            "sentence": "Marine biologists investigated the unique coral species what thrives in extreme hydrothermal ocean vents.",
            "underlined": ["Marine biologists", "coral species", "what", "extreme hydrothermal"],
            "wrongIndex": 2,
            "correction": "that",
            "explanation": "선행사(coral species)가 명확히 존재하므로 선행사를 포함하는 관계대명사 what 대신 관계대명사 that 또는 which를 써야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 2순위: 선행사 유무에 따른 what vs that 판별] 출제 연계",
            "korean": "해양 생물학자들은 극한의 심해 열수구에서 번성하는 독특한 산호 종들을 조사했다."
        }
    ],
    "sp_csat_u3": [
        {
            "id": "drill_2",
            "sentence": "The ancient stone monuments discovering by archaeologists last winter provided invaluable historical insights.",
            "underlined": ["stone monuments", "discovering by", "archaeologists", "provided invaluable"],
            "wrongIndex": 1,
            "correction": "discovered by",
            "explanation": "고대 석조 기념물이 고고학자들에 의해 '발견된' 수동의 관계이므로 현재분사 discovering 대신 과거분사 discovered를 써야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 3순위: 능동(V-ing) vs 수동(p.p.) 태 판별] 출제 연계",
            "korean": "지난겨울 고고학자들에 의해 발견된 고대 석조 기념물들은 매우 귀중한 역사적 통찰을 제공했다."
        },
        {
            "id": "drill_3",
            "sentence": "Fascinating by the intricate patterns on the butterfly wings, the little boy observed them intently.",
            "underlined": ["Fascinating by", "intricate patterns", "butterfly wings", "observed them"],
            "wrongIndex": 0,
            "correction": "Fascinated by",
            "explanation": "주어 the little boy가 나비 날개의 복잡한 무늬에 의해 '매료된' 감정을 느끼는 수동 관계이므로 Fascinating을 Fascinated로 고쳐야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 3순위: 분사구문 감정동사의 능수동 판별] 출제 연계",
            "korean": "나비 날개의 복잡한 무늬에 매료되어, 그 어린 소년은 그것들을 열심히 관찰했다."
        }
    ],
    "sp_csat_u4": [
        {
            "id": "drill_2",
            "sentence": "Global manufacturing corporations frequently relocate their production facilities to countries where labor costs are lower than that of domestic markets.",
            "underlined": ["manufacturing corporations", "relocate their", "labor costs", "that"],
            "wrongIndex": 3,
            "correction": "those",
            "explanation": "비교 대상이 복수명사인 labor costs(인건비들)이므로 단수 대명사 that 대신 복수 대명사 those를 써야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 4순위: 대명사 수일치 that vs those 비교 공식] 출제 연계",
            "korean": "글로벌 제조 기업들은 인건비가 국내 시장의 인건비보다 더 저렴한 국가들로 생산 시설을 자주 이전한다."
        },
        {
            "id": "drill_3",
            "sentence": "When predators approach their nesting sites, mother birds deliberately fake injury to distract it from their chicks.",
            "underlined": ["nesting sites", "deliberately", "fake injury", "it"],
            "wrongIndex": 3,
            "correction": "them",
            "explanation": "지칭하는 대상이 복수명사인 predators(포식자들)이므로 단수 목적격 it 대신 복수 목적격 them을 써야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 4순위: 지칭 대명사 it vs them 수일치] 출제 연계",
            "korean": "포식자들이 둥지 터에 접근할 때, 어미 새들은 새끼들로부터 포식자들의 주의를 딴 데로 돌리기 위해 의도적으로 부상을 가장한다."
        }
    ],
    "sp_csat_u5": [
        {
            "id": "drill_2",
            "sentence": "The delicate chemical solution tasted bitterly, indicating severe contamination from the faulty glass container.",
            "underlined": ["delicate chemical", "tasted", "bitterly", "severe contamination"],
            "wrongIndex": 2,
            "correction": "bitter",
            "explanation": "taste는 주격 보어를 취하는 2형식 감각동사이므로 부사 bitterly 대신 형용사 bitter를 써야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 5순위: 2형식 감각동사 형용사 보어 공식] 출제 연계",
            "korean": "그 섬세한 화학 용액은 쓴맛이 났는데, 이는 결함이 있는 유리 용기로부터의 심각한 오염을 나타냈다."
        },
        {
            "id": "drill_3",
            "sentence": "Advanced optical microscopes allow laboratory scientists to observe living cellular structures extreme clearly.",
            "underlined": ["allow", "laboratory scientists", "living cellular", "extreme"],
            "wrongIndex": 3,
            "correction": "extremely",
            "explanation": "부사 clearly를 수식하는 자리이므로 형용사 extreme 대신 부사 extremely를 써야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 5순위: 부사의 형용사/부사 수식 원칙] 출제 연계",
            "korean": "첨단 광학 현미경은 실험실 과학자들이 살아있는 세포 구조를 극도로 명확하게 관찰할 수 있도록 해준다."
        }
    ],
    "sp_csat_u6": [
        {
            "id": "drill_2",
            "sentence": "Effective corporate mentors guide inexperienced interns, offer constructive feedback, and demonstrating professional ethics daily.",
            "underlined": ["guide inexperienced", "offer constructive", "and", "demonstrating"],
            "wrongIndex": 3,
            "correction": "demonstrate",
            "explanation": "등위접속사 and가 3인칭 복수 현재시제 동사들(guide, offer)을 병렬 연결하고 있으므로 demonstrating을 동사원형 형태인 demonstrate로 맞춰야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 6순위: 등위접속사 술어 동사 병렬 일치] 출제 연계",
            "korean": "유능한 기업 멘토들은 미숙한 인턴들을 지도하고, 건설적인 피드백을 제공하며, 매일 전문적인 직업윤리를 보여준다."
        },
        {
            "id": "drill_3",
            "sentence": "The investigative journalist preferred publishing her expos in an independent magazine rather than to submit it to state media.",
            "underlined": ["investigative journalist", "publishing", "independent magazine", "to submit"],
            "wrongIndex": 3,
            "correction": "submitting",
            "explanation": "rather than 앞의 목적어가 동명사구 publishing...이므로 병렬 구조를 이루기 위해 to submit 역시 동명사인 submitting으로 통일해야 합니다.",
            "conceptRef": "1단계 [수능 어법 킬러 6순위: 비교 접속사(rather than) 준동사 병치] 출제 연계",
            "korean": "그 탐사보도 기자는 자신의 폭로 기사를 국영 언론에 제출하기보다 독립 잡지에 게재하는 것을 선호했다."
        }
    ],

    # -------------------------------------------------------------
    # COURSE 104: 헷갈리는 문법 쌍둥이 vs (sp_vs_u1 ~ sp_vs_u8)
    # -------------------------------------------------------------
    "sp_vs_u1": [
        {
            "id": "drill_2",
            "sentence": "The physician advised the patient to stop to smoke immediately to prevent further respiratory complications.",
            "underlined": ["advised the patient", "to stop", "to smoke", "further respiratory"],
            "wrongIndex": 2,
            "correction": "smoking",
            "explanation": "stop to smoke는 '담배를 피우기 위해 멈추다'라는 뜻이 되며, 문맥상 '흡연을 중단하다'라는 뜻이어야 하므로 동명사 smoking을 목적어로 써야 합니다.",
            "conceptRef": "1단계 [SP-23 핵심: stop to V(~하기 위해 멈추다) vs stop V-ing(~하는 것을 멈추다)] 출제 연계",
            "korean": "의사는 추가적인 호흡기 합병증을 예방하기 위해 환자에게 즉시 금연할 것을 조언했다."
        },
        {
            "id": "drill_3",
            "sentence": "Please remember bringing your official passport and visa documents when you arrive at the embassy tomorrow.",
            "underlined": ["remember", "bringing", "official passport", "arrive at"],
            "wrongIndex": 1,
            "correction": "to bring",
            "explanation": "내일 대사관에 도착할 때 서류를 가져와야 할 미래의 할 일을 의미하므로 remember의 목적어로 동명사가 아닌 to부정사 to bring을 써야 합니다.",
            "conceptRef": "1단계 [SP-23 핵심: remember/forget + to V(미래) vs -ing(과거) 판별] 출제 연계",
            "korean": "내일 대사관에 도착하실 때 공식 여권과 비자 서류를 가져오는 것을 잊지 말고 기억하세요."
        }
    ],
    "sp_vs_u2": [
        {
            "id": "drill_2",
            "sentence": "The prominent astrophysicist has discovered the unprecedented cosmic anomaly two years ago during a lunar survey.",
            "underlined": ["astrophysicist", "has discovered", "cosmic anomaly", "two years ago"],
            "wrongIndex": 1,
            "correction": "discovered",
            "explanation": "명백한 과거 시점을 나타내는 부사구 'two years ago'가 있으므로 현재완료 has discovered 대신 단순과거 discovered를 써야 합니다.",
            "conceptRef": "1단계 [SP-24 핵심: 명백한 과거 시점 부사구와 현재완료 동석 불가 공식] 출제 연계",
            "korean": "그 저명한 천체물리학자는 2년 전 달 탐사 중에 전례 없는 우주 이상 현상을 발견했다."
        },
        {
            "id": "drill_3",
            "sentence": "Environmental researchers investigated atmospheric carbon dioxide concentrations since the Industrial Revolution began.",
            "underlined": ["investigated", "carbon dioxide", "concentrations", "since the Industrial"],
            "wrongIndex": 0,
            "correction": "have investigated",
            "explanation": "과거 특정 시점부터 현재까지 이어짐을 나타내는 'since + 과거 시점' 부사절이 있으므로 단순과거 대신 현재완료 have investigated를 써야 합니다.",
            "conceptRef": "1단계 [SP-24 핵심: since 부사절과 현재완료의 결합 원칙] 출제 연계",
            "korean": "환경 연구원들은 산업혁명이 시작된 이래로 대기 중 이산화탄소 농도를 조사해 왔다."
        }
    ],
    "sp_vs_u3": [
        {
            "id": "drill_2",
            "sentence": "The widespread belief what excessive social media usage harms adolescent mental health is supported by clinical studies.",
            "underlined": ["widespread belief", "what", "social media", "is supported"],
            "wrongIndex": 1,
            "correction": "that",
            "explanation": "belief 뒤의 절이 완전한 문장이며 belief의 구체적 내용을 설명하는 동격절이므로 what 대신 동격 접속사 that을 써야 합니다.",
            "conceptRef": "1단계 [SP-25 핵심: 동격 that vs 관계대명사 that vs 접속사 that 판별] 출제 연계",
            "korean": "과도한 소셜 미디어 사용이 청소년의 정신 건강을 해친다는 널리 퍼진 믿음은 임상 연구들에 의해 뒷받침된다."
        },
        {
            "id": "drill_3",
            "sentence": "The ancient artifact that museum visitors admired yesterday it was discovered in a secluded desert valley.",
            "underlined": ["artifact that", "museum visitors", "yesterday it", "was discovered"],
            "wrongIndex": 2,
            "correction": "yesterday",
            "explanation": "관계대명사 that이 이끄는 절이 artifact를 수식하고 있으므로 문장의 주어는 The ancient artifact입니다. 주어 뒤에 대명사 it을 중복해서 쓰면 안 되므로 it을 삭제해야 합니다.",
            "conceptRef": "1단계 [SP-25 핵심: 관계사 수식 주어 뒤 대명사 중복 방지] 출제 연계",
            "korean": "어제 박물관 관람객들이 감탄했던 그 고대 유물은 외딴 사막 계곡에서 발견되었다."
        }
    ],
    "sp_vs_u4": [
        {
            "id": "drill_2",
            "sentence": "Solar energy systems are used to generating electricity for remote polar research stations.",
            "underlined": ["energy systems", "are used to", "generating", "electricity for"],
            "wrongIndex": 2,
            "correction": "generate",
            "explanation": "태양광 발전 시스템이 전기를 생산하는 데 '사용된다'는 수동/목적의 의미이므로 be used to 뒤에 동명사가 아닌 동사원형 generate를 써야 합니다.",
            "conceptRef": "1단계 [SP-26 핵심: used to V vs be used to V vs be used to V-ing 삼총사] 출제 연계",
            "korean": "태양광 에너지 시스템은 외딴 극지 연구소를 위해 전기를 생산하는 데 사용된다."
        },
        {
            "id": "drill_3",
            "sentence": "The experienced deep sea diver is used to endure extreme underwater pressure during salvage operations.",
            "underlined": ["sea diver", "is used to", "endure", "underwater pressure"],
            "wrongIndex": 2,
            "correction": "enduring",
            "explanation": "심해 잠수부가 극심한 수압을 견디는 것에 '익숙하다'는 의미이므로 [be used to + -ing(명사)] 구문으로 enduring을 써야 합니다.",
            "conceptRef": "1단계 [SP-26 핵심: ~에 익숙하다(be used to -ing) 실전 영작] 출제 연계",
            "korean": "숙련된 심해 잠수부는 인양 작업 동안 극심한 수중 압력을 견디는 것에 익숙하다."
        }
    ],
    "sp_vs_u5": [
        {
            "id": "drill_2",
            "sentence": "After working tirelessly in the garden all afternoon, the weary farmer laid down on the grass to rest.",
            "underlined": ["tirelessly", "all afternoon", "laid", "on the grass"],
            "wrongIndex": 2,
            "correction": "lay",
            "explanation": "주어가 스스로 '누웠다'는 의미이므로 자동사 lie의 과거형 lay를 써야 합니다. laid는 타동사 lay(~을 놓다/눕히다)의 과거형이므로 어법상 틀립니다.",
            "conceptRef": "1단계 [SP-27 핵심: 자동사 lie(눕다) vs 타동사 lay(놓다) 3단 변화 끝장] 출제 연계",
            "korean": "오후 내내 정원에서 쉼 없이 일한 후 지친 농부는 휴식을 취하기 위해 잔디밭에 누웠다."
        },
        {
            "id": "drill_3",
            "sentence": "The careful librarian lied the rare illuminated manuscript gently upon the velvet reading cushion.",
            "underlined": ["careful librarian", "lied", "illuminated manuscript", "upon the velvet"],
            "wrongIndex": 1,
            "correction": "laid",
            "explanation": "귀중한 필사본을 벨벳 쿠션 위에 '놓았다'라는 타동사 의미이므로 타동사 lay의 과거형인 laid를 써야 합니다. lied는 '거짓말했다'는 뜻입니다.",
            "conceptRef": "1단계 [SP-27 핵심: 타동사 lay의 과거/과거분사 laid vs lied 구별] 출제 연계",
            "korean": "조심스러운 사서는 벨벳 독서용 쿠션 위에 희귀한 채색 필사본을 부드럽게 올려놓았다."
        }
    ],
    "sp_vs_u6": [
        {
            "id": "drill_2",
            "sentence": "It was precisely the dedicated researchers whom discovered the novel vaccine during the pandemic.",
            "underlined": ["precisely", "dedicated researchers", "whom", "discovered the novel"],
            "wrongIndex": 2,
            "correction": "who",
            "explanation": "It ~ that 강조구문에서 주어 the dedicated researchers가 강조되었으므로 강조절 내에서 주어 역할을 할 수 있도록 목적격 whom 대신 주격 who(또는 that)를 써야 합니다.",
            "conceptRef": "1단계 [SP-28 핵심: It ~ that 강조구문 vs 가주어/진주어 구문 판별] 출제 연계",
            "korean": "팬데믹 동안 새로운 백신을 발견한 것은 바로 그 헌신적인 연구원들이었다."
        },
        {
            "id": "drill_3",
            "sentence": "The ambitious company found that imperative to modernize their digital security protocols immediately.",
            "underlined": ["ambitious company", "found", "that imperative", "to modernize"],
            "wrongIndex": 2,
            "correction": "it imperative",
            "explanation": "5형식 문장에서 진목적어가 뒤따르는 to부정사구(to modernize...)이므로, 가목적어 자리에는 that이 아니라 반드시 it을 써야 합니다.",
            "conceptRef": "1단계 [SP-28 핵심: 5형식 가목적어 it vs 진목적어 to부정사/that절] 출제 연계",
            "korean": "그 야심 찬 기업은 디지털 보안 프로토콜을 즉시 현대화하는 것이 필수적임을 알게 되었다."
        }
    ],
    "sp_vs_u7": [
        {
            "id": "drill_2",
            "sentence": "Although the severe financial crisis, the international conglomerate managed to maintain its manufacturing operations.",
            "underlined": ["Although", "financial crisis", "managed to", "manufacturing operations"],
            "wrongIndex": 0,
            "correction": "Despite",
            "explanation": "뒤에 주어와 동사를 갖춘 절이 아니라 명사구(the severe financial crisis)가 오므로 접속사 Although 대신 전치사 Despite(또는 In spite of)를 써야 합니다.",
            "conceptRef": "1단계 [SP-29 핵심: 접속사 vs 전치사 뒤따르는 문장 구조 판별 공식] 출제 연계",
            "korean": "심각한 금융 위기에도 불구하고 그 다국적 대기업은 제조 사업을 간신히 유지했다."
        },
        {
            "id": "drill_3",
            "sentence": "The outdoor music festival was abruptly postponed due to severe thunderstorms were approaching the coast.",
            "underlined": ["music festival", "abruptly postponed", "due to", "were approaching"],
            "wrongIndex": 2,
            "correction": "because",
            "explanation": "뒤에 주어(severe thunderstorms)와 동사(were approaching)를 갖춘 절이 이어지므로 전치사구 due to 대신 접속사 because(또는 as/since)를 써야 합니다.",
            "conceptRef": "1단계 [SP-29 핵심: because vs because of / due to 서술형 구별] 출제 연계",
            "korean": "심각한 뇌우가 해안으로 접근하고 있었기 때문에 야외 음악 축제는 갑작스럽게 연기되었다."
        }
    ],
    "sp_vs_u8": [
        {
            "id": "drill_2",
            "sentence": "None of the brilliant innovations in the tech industry is necessarily harmful to human society.",
            "underlined": ["None of", "innovations", "is necessarily", "harmful to"],
            "wrongIndex": 0,
            "correction": "Not all",
            "explanation": "문맥상 '모든 혁신이 반드시 인간 사회에 해로운 것은 아니다'라는 부분부정의 의미이므로 완전부정 None 대신 'Not all of the brilliant innovations'로 표현해야 자연스럽습니다.",
            "conceptRef": "1단계 [SP-30 핵심: 부분부정(not all, not every) vs 완전부정(none, neither) 구별] 출제 연계",
            "korean": "기술 산업의 훌륭한 혁신들이 모두 반드시 인간 사회에 해로운 것은 아니다."
        },
        {
            "id": "drill_3",
            "sentence": "The experimental vaccine was neither safe nor effectively during the initial phases of clinical trials.",
            "underlined": ["experimental vaccine", "neither", "safe nor", "effectively"],
            "wrongIndex": 3,
            "correction": "effective",
            "explanation": "상관접속사 neither A nor B 구문에서 be동사 was의 주격 보어로 형용사 safe가 쓰였으므로 병렬 구조를 이루기 위해 effectively 역시 형용사인 effective로 써야 합니다.",
            "conceptRef": "1단계 [SP-30 핵심: neither A nor B 상관접속사 품사 병치] 출제 연계",
            "korean": "그 실험 백신은 초기 임상 시험 단계 동안 안전하지도 효과적이지도 않았다."
        }
    ]
}
