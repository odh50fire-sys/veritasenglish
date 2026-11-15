# -*- coding: utf-8 -*-
"""
Curated Drill 2 and Drill 3 for Level 5 (8 units) and Course 101 (8 units).
Total 16 units * 2 = 32 drills.
"""

DRILLS_EXTRA_PART3 = {
    # -------------------------------------------------------------
    # LEVEL 5: 수능 킬러 어법 (lv5_u1 ~ lv5_u8)
    # -------------------------------------------------------------
    "lv5_u1": [
        {
            "id": "drill_2",
            "sentence": "The profound impact of digital algorithms on cognitive development remaining a contentious topic among psychologists.",
            "underlined": ["profound impact", "cognitive development", "remaining", "contentious topic"],
            "wrongIndex": 2,
            "correction": "remains",
            "explanation": "문장의 주어는 'The profound impact'이며 문장 전체에 접속사나 본동사가 없으므로, 현재분사 remaining을 단수 본동사 remains로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 1: 문장의 1주어 1본동사 필수 법칙] 출제 연계",
            "korean": "디지털 알고리즘이 인지 발달에 미치는 심오한 영향은 심리학자들 사이에서 여전히 논쟁적인 주제로 남아 있다."
        },
        {
            "id": "drill_3",
            "sentence": "Ancient manuscripts preserved in subterranean vaults displaying remarkable endurance against chemical degradation.",
            "underlined": ["preserved in", "subterranean vaults", "displaying", "chemical degradation"],
            "wrongIndex": 2,
            "correction": "display",
            "explanation": "preserved in subterranean vaults는 주어 Ancient manuscripts를 후치수식하는 분사구이므로, 문장의 본동사 자리인 displaying을 복수 동사 display로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 2: 수식어구 거품 제거 후 본동사 판별] 출제 연계",
            "korean": "지하 금고에 보존된 고대 필사본들은 화학적 분해에 대해 놀라운 내구성을 보여준다."
        }
    ],
    "lv5_u2": [
        {
            "id": "drill_2",
            "sentence": "Modern neural networks do not process sensory information in the exact same manner as the human brain is.",
            "underlined": ["process", "sensory information", "exact same", "is"],
            "wrongIndex": 3,
            "correction": "does",
            "explanation": "앞의 일반동사구(process sensory information...)를 대신하는 대동사 자리이므로 be동사 is가 아니라 3인칭 단수 일반동사 대동사인 does를 써야 합니다.",
            "conceptRef": "1단계 [공식 1: 일반동사 대동사 do/does/did vs be동사 대동사] 출제 연계",
            "korean": "현대 신경망은 인간의 뇌가 처리하는 것과 정확히 동일한 방식으로 감각 정보를 처리하지는 않는다."
        },
        {
            "id": "drill_3",
            "sentence": "The economic indicators were far more volatile last quarter than they currently do under stable monetary policies.",
            "underlined": ["economic indicators", "far more volatile", "than", "do"],
            "wrongIndex": 3,
            "correction": "are",
            "explanation": "비교 구문에서 앞 절의 서술어가 be동사(were volatile)이므로, 뒤 절의 대동사 역시 일반동사 do가 아니라 현재시제 복수 be동사인 are를 써야 합니다.",
            "conceptRef": "1단계 [공식 2: 비교급/as 구문 대동사 일치 법칙] 출제 연계",
            "korean": "지난 분기의 경제 지표들은 안정적인 통화 정책 하에 현재 그러한 것보다 훨씬 더 불안정했다."
        }
    ],
    "lv5_u3": [
        {
            "id": "drill_2",
            "sentence": "The scientific committee deliberated carefully on what the newly discovered planet could sustain organic life.",
            "underlined": ["deliberated carefully", "what", "newly discovered", "sustain organic life"],
            "wrongIndex": 1,
            "correction": "whether",
            "explanation": "전치사 on의 목적어절이 주어(the newly discovered planet), 동사(could sustain), 목적어(organic life)를 모두 갖춘 완전한 문장이므로, 불완전절을 이끄는 관계대명사/의문대명사 what 대신 접속사 whether(혹은 if)를 써야 합니다.",
            "conceptRef": "1단계 [공식 1: 뒷문장 완전도(완전문 vs 불완전문) 판별 공식] 출제 연계",
            "korean": "과학 위원회는 새로 발견된 행성이 유기적 생명체를 유지할 수 있는지 여부에 대해 신중하게 논의했다."
        },
        {
            "id": "drill_3",
            "sentence": "Renewable energy technologies have evolved rapidly to a stage which solar efficiency exceeds traditional fossil fuels.",
            "underlined": ["evolved rapidly", "stage", "which", "exceeds"],
            "wrongIndex": 2,
            "correction": "where",
            "explanation": "선행사 stage 뒤의 절이 주어(solar efficiency), 타동사(exceeds), 목적어(traditional fossil fuels)를 모두 갖춘 완전한 절이므로 관계대명사 which가 아닌 관계부사 where(또는 at which)를 써야 합니다.",
            "conceptRef": "1단계 [공식 2: 관계대명사 vs 관계부사(전치사+관계대명사) 판정] 출제 연계",
            "korean": "신재생 에너지 기술은 태양광 효율이 전통 화석 연료를 능가하는 단계까지 빠르게 발전했다."
        }
    ],
    "lv5_u4": [
        {
            "id": "drill_2",
            "sentence": "Effective leadership requires not only inspiring team members with clear visions but also to allocate strategic resources efficiently.",
            "underlined": ["inspiring", "team members", "to allocate", "efficiently"],
            "wrongIndex": 2,
            "correction": "allocating",
            "explanation": "상관접속사 not only A but also B 구문에서 A(inspiring...)가 동명사구이므로 병렬 구조를 이루기 위해 to allocate 역시 동명사 allocating으로 맞춰야 합니다.",
            "conceptRef": "1단계 [공식 1: 상관접속사(not only A but also B) 구조적 병치] 출제 연계",
            "korean": "효과적인 리더십은 명확한 비전으로 팀원들에게 영감을 주는 것뿐만 아니라 전략적 자원을 효율적으로 배분하는 것을 요구한다."
        },
        {
            "id": "drill_3",
            "sentence": "The committee decided to postpone the scheduled symposium and reevaluating the entire budget proposal.",
            "underlined": ["decided", "to postpone", "symposium", "reevaluating"],
            "wrongIndex": 3,
            "correction": "reevaluate",
            "explanation": "등위접속사 and가 to부정사의 목적어 병렬(to postpone ... and [to] reevaluate)을 연결하고 있으므로 reevaluating을 원형 reevaluate(혹은 to reevaluate)로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 2: 등위접속사 준동사 병렬 일치 원칙] 출제 연계",
            "korean": "위원회는 예정된 심포지엄을 연기하고 전체 예산안을 재평가하기로 결정했다."
        }
    ],
    "lv5_u5": [
        {
            "id": "drill_2",
            "sentence": "The revolutionary acoustic dampening material makes the cabin of the electric vehicle extreme quiet at high speeds.",
            "underlined": ["makes", "electric vehicle", "extreme", "at high speeds"],
            "wrongIndex": 2,
            "correction": "extremely",
            "explanation": "5형식 문장에서 목적격 보어로 형용사 quiet가 쓰였으며, extreme은 이 형용사 quiet를 수식해야 하므로 부사 extremely로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 1: 5형식 목적격 보어 vs 부사의 형용사 수식] 출제 연계",
            "korean": "그 혁신적인 방음재는 고속 주행 시 전기차의 실내를 극도로 조용하게 만들어 준다."
        },
        {
            "id": "drill_3",
            "sentence": "Although the patient seemed comfortably during the physical examination, the physician ordered comprehensive scans.",
            "underlined": ["seemed", "comfortably", "physical examination", "comprehensive"],
            "wrongIndex": 1,
            "correction": "comfortable",
            "explanation": "seem은 주격 보어를 필요로 하는 2형식 불완전자동사이므로 보어 자리에 부사 comfortably 대신 형용사 comfortable을 써야 합니다.",
            "conceptRef": "1단계 [공식 2: 2형식 감각/상태동사의 형용사 보어 필수 원칙] 출제 연계",
            "korean": "비록 환자가 신체 검사 동안 편안해 보였지만, 의사는 종합 정밀 검사를 지시했다."
        }
    ],
    "lv5_u6": [
        {
            "id": "drill_2",
            "sentence": "The linguistic structures of indigenous American languages are as structurally intricate as that of Indo-European languages.",
            "underlined": ["linguistic structures", "indigenous", "as structurally", "that"],
            "wrongIndex": 3,
            "correction": "those",
            "explanation": "비교 대상이 복수명사구인 'The linguistic structures'이므로 단수 대명사 that 대신 복수 대명사 those를 써야 합니다.",
            "conceptRef": "1단계 [공식 1: 비교 대상의 명사 대명사 일치 (that vs those)] 출제 연계",
            "korean": "아메리카 원주민 언어들의 언어학적 구조는 인도유럽어족 언어들의 언어 구조만큼이나 구조적으로 복잡하다."
        },
        {
            "id": "drill_3",
            "sentence": "Sociologists argue that individuals who isolate them from communal activities suffer higher stress levels.",
            "underlined": ["argue", "who isolate", "them", "suffer higher"],
            "wrongIndex": 2,
            "correction": "themselves",
            "explanation": "관계사절 내부에서 주어인 who(선행사 individuals)와 동사 isolate의 목적어가 동일 인물이므로 목적어 자리에 them 대신 재귀대명사 themselves를 써야 합니다.",
            "conceptRef": "1단계 [공식 2: 주어와 목적어 일치 시 재귀대명사 필수 법칙] 출제 연계",
            "korean": "사회학자들은 자기 자신을 공동체 활동으로부터 고립시키는 개인들이 더 높은 스트레스 수준을 겪는다고 주장한다."
        }
    ],
    "lv5_u7": [
        {
            "id": "drill_2",
            "sentence": "During the innovative quantum experiment was underway, unexpected magnetic anomalies were detected by sensors.",
            "underlined": ["During", "was underway", "magnetic anomalies", "were detected"],
            "wrongIndex": 0,
            "correction": "While",
            "explanation": "뒤에 주어(the innovative quantum experiment)와 동사(was)를 갖춘 완전한 절이 이어지므로 전치사 During 대신 접속사 While을 써야 합니다.",
            "conceptRef": "1단계 [공식 1: 전치사 vs 접속사 구별 공식 (명사구 vs 주어+동사)] 출제 연계",
            "korean": "혁신적인 양자 실험이 진행되는 동안 센서에 의해 예기치 못한 자기 이상 현상이 감지되었다."
        },
        {
            "id": "drill_3",
            "sentence": "The interstellar exploration project was suspended indefinitely because of budgetary constraints were severely tightened.",
            "underlined": ["exploration project", "suspended indefinitely", "because of", "were severely tightened"],
            "wrongIndex": 2,
            "correction": "because",
            "explanation": "뒤에 주어(budgetary constraints)와 수동태 동사(were severely tightened)가 이끄는 절이 오므로 전치사구 because of 대신 접속사 because를 써야 합니다.",
            "conceptRef": "1단계 [공식 2: because vs because of 구별 출제 공식] 출제 연계",
            "korean": "예산 제약이 심각하게 강화되었기 때문에 항성 간 탐사 프로젝트는 무기한 중단되었다."
        }
    ],
    "lv5_u8": [
        {
            "id": "drill_2",
            "sentence": "The behavioral mechanism through which migratory birds navigate across continents remaining largely a mystery.",
            "underlined": ["migratory birds", "navigate across", "remaining", "largely a mystery"],
            "wrongIndex": 2,
            "correction": "remains",
            "explanation": "전치사+관계대명사절(through which...)은 수식어구이므로, 전체 문장의 주어 'The behavioral mechanism'에 호응하는 본동사로 remaining을 단수동사 remains로 고쳐야 합니다.",
            "conceptRef": "1단계 [수능 29번 어법 공식 1: 수식어 거품 속 본동사 자리] 출제 연계",
            "korean": "철새들이 대륙을 건너 길을 찾는 행동학적 메커니즘은 여전히 대체로 수수께끼로 남아 있다."
        },
        {
            "id": "drill_3",
            "sentence": "In modern cognitive psychology, memory is viewed not as a static recording but as an active process reconstructive.",
            "underlined": ["is viewed", "not as", "recording", "reconstructive"],
            "wrongIndex": 3,
            "correction": "reconstructive process",
            "explanation": "단일 형용사 reconstructive는 명사 process 앞에서 한정 수식해야 하거나, 'a reconstructive process' 어순으로 배치해야 자연스럽습니다.",
            "conceptRef": "1단계 [수능 29번 어법 공식 5: 형용사/명사 어순과 보어 판정] 출제 연계",
            "korean": "현대 인지심리학에서 기억은 정적인 기록이 아니라 능동적인 재구성 과정으로 간주된다."
        }
    ],

    # -------------------------------------------------------------
    # COURSE 101: 영문법 필수 용어 뽀개기 (sp_terms_u1 ~ sp_terms_u8)
    # -------------------------------------------------------------
    "sp_terms_u1": [
        {
            "id": "drill_2",
            "sentence": "Her remarkably performance on the cello mesmerized the audience gathered at the grand theater.",
            "underlined": ["remarkably", "on the cello", "mesmerized", "gathered at"],
            "wrongIndex": 0,
            "correction": "remarkable",
            "explanation": "명사 performance를 수식하는 자리이므로 부사 remarkably가 아닌 형용사 remarkable을 써야 합니다.",
            "conceptRef": "1단계 [SP-01 핵심: 품사(단어의 본질)와 문장 성분(문장 내 역할)] 출제 연계",
            "korean": "첼로로 선보인 그녀의 놀라운 연주는 대극장에 모인 청중들을 매료시켰다."
        },
        {
            "id": "drill_3",
            "sentence": "The ambitious architect designed the community center thoughtful to accommodate elderly residents.",
            "underlined": ["ambitious architect", "community center", "thoughtful", "to accommodate"],
            "wrongIndex": 2,
            "correction": "thoughtfully",
            "explanation": "타동사 designed를 수식하는 문장 성분(부사어) 자리이므로 형용사 thoughtful 대신 부사 thoughtfully를 써야 합니다.",
            "conceptRef": "1단계 [SP-01 핵심: 수식어 품사 판정 (동사/형용사 수식 부사)] 출제 연계",
            "korean": "야심 찬 건축가는 노인 주민들을 수용할 수 있도록 배려 깊게 커뮤니티 센터를 설계했다."
        }
    ],
    "sp_terms_u2": [
        {
            "id": "drill_2",
            "sentence": "The sudden announcement of the tax hike resulted many unexpected street protests throughout the capital.",
            "underlined": ["sudden announcement", "resulted", "unexpected", "throughout the capital"],
            "wrongIndex": 1,
            "correction": "resulted in",
            "explanation": "result는 목적어를 바로 취할 수 없는 자동사이므로, 결과를 이끌 때는 전치사 in을 함께 써서 'resulted in'으로 고쳐야 합니다.",
            "conceptRef": "1단계 [SP-02 핵심: 자동사 vs 타동사의 본질과 전치사 필수 여부] 출제 연계",
            "korean": "갑작스러운 증세 발표는 수도 전역에서 수많은 예기치 못한 거리 시위를 초래했다."
        },
        {
            "id": "drill_3",
            "sentence": "The delegate will discuss about the international trade treaty during tomorrow's plenary session.",
            "underlined": ["delegate", "discuss about", "international trade", "plenary session"],
            "wrongIndex": 1,
            "correction": "discuss",
            "explanation": "discuss는 완전타동사이므로 전치사 about 없이 목적어(the international trade treaty)를 직접 취해야 합니다.",
            "conceptRef": "1단계 [SP-02 핵심: 전치사를 취하지 않는 완전타동사 혼동 방지] 출제 연계",
            "korean": "그 대표는 내일 총회 세션 동안 국제 무역 조약에 관해 논의할 것이다."
        }
    ],
    "sp_terms_u3": [
        {
            "id": "drill_2",
            "sentence": "The intense heat during midsummer made the fresh milk sourly within a few hours.",
            "underlined": ["intense heat", "made", "fresh milk", "sourly"],
            "wrongIndex": 3,
            "correction": "sour",
            "explanation": "5형식 문장에서 목적어 the fresh milk의 상태를 보충 설명하는 목적격 보어 자리이므로 부사 sourly가 아닌 형용사 sour를 써야 합니다.",
            "conceptRef": "1단계 [SP-03 핵심: 보어(Complement) 자리 형용사 필수 원칙] 출제 연계",
            "korean": "한여름의 강렬한 열기는 신선한 우유를 몇 시간 만에 시어지게 만들었다."
        },
        {
            "id": "drill_3",
            "sentence": "Despite numerous hardships, the determined traveler remained cheerfully throughout the arduous expedition.",
            "underlined": ["numerous hardships", "remained", "cheerfully", "arduous expedition"],
            "wrongIndex": 2,
            "correction": "cheerful",
            "explanation": "remain은 2형식 연결동사로 주어의 상태를 설명하는 주격 보어를 취하므로 부사 cheerfully가 아니라 형용사 cheerful을 써야 합니다.",
            "conceptRef": "1단계 [SP-03 핵심: 2형식 주격 보어와 5형식 목적격 보어의 공통점] 출제 연계",
            "korean": "수많은 역경에도 불구하고 단호한 여행자는 고된 원정 내내 쾌활함을 유지했다."
        }
    ],
    "sp_terms_u4": [
        {
            "id": "drill_2",
            "sentence": "Understand the genetic code allows biochemists to synthesize targeted medicines for rare diseases.",
            "underlined": ["Understand", "allows", "synthesize", "targeted medicines"],
            "wrongIndex": 0,
            "correction": "Understanding",
            "explanation": "문장의 주어 자리에 동사원형 Understand를 그대로 쓸 수 없으므로, 동사를 명사 역할로 바꾼 준동사(동명사 Understanding 또는 to부정사 To understand)로 고쳐야 합니다.",
            "conceptRef": "1단계 [SP-04 핵심: 동사를 명사/형용사/부사로 탈바꿈하는 준동사의 원리] 출제 연계",
            "korean": "유전 부호를 이해하는 것은 생화학자들로 하여금 희귀 질환을 위한 표적 치료제를 합성할 수 있게 해준다."
        },
        {
            "id": "drill_3",
            "sentence": "The wildlife sanctuary operates several specialized stations to monitoring endangered migratory bird populations.",
            "underlined": ["wildlife sanctuary", "specialized stations", "to monitoring", "migratory bird"],
            "wrongIndex": 2,
            "correction": "to monitor",
            "explanation": "목적(~하기 위하여)을 나타내는 부사적 용법의 준동사이므로 to 부정사 뒤에는 동명사(-ing)가 아닌 동사원형 monitor를 써야 합니다.",
            "conceptRef": "1단계 [SP-04 핵심: 준동사 형태와 기능 구별] 출제 연계",
            "korean": "야생동물 보호구역은 멸종 위기에 처한 철새 개체군을 모니터링하기 위해 몇 군데의 특화된 관측소를 운영한다."
        }
    ],
    "sp_terms_u5": [
        {
            "id": "drill_2",
            "sentence": "The ancient philosopher wrote manuscripts who philosophical inquiries continue to shape modern Western thought.",
            "underlined": ["ancient philosopher", "manuscripts", "who", "continue to shape"],
            "wrongIndex": 2,
            "correction": "whose",
            "explanation": "선행사 manuscripts와 뒤따르는 명사 philosophical inquiries 사이의 소유 관계('필사본의 철학적 탐구')를 나타내야 하므로 주격 who 대신 소유격 관계대명사 whose를 써야 합니다.",
            "conceptRef": "1단계 [SP-05 핵심: 관계대명사의 본질 = 접속사 + 대명사] 출제 연계",
            "korean": "그 고대 철학자는 자신의 철학적 질문들이 현대 서양 사상을 계속해서 형성하고 있는 원고들을 저술했다."
        },
        {
            "id": "drill_3",
            "sentence": "The museum exhibits rare artifacts which the lead archaeologist discovered them in deep Egyptian tombs.",
            "underlined": ["rare artifacts", "which", "lead archaeologist", "discovered them"],
            "wrongIndex": 3,
            "correction": "discovered",
            "explanation": "목적격 관계대명사 which가 이미 선행사 rare artifacts를 대신하고 있으므로, 관계사절 내에서 목적어 대명사 them을 중복해서 쓰면 안 됩니다.",
            "conceptRef": "1단계 [SP-05 핵심: 관계대명사절 내의 대명사 중복 삭제 원칙] 출제 연계",
            "korean": "그 박물관은 수석 고고학자가 깊은 이집트 무덤에서 발견했던 희귀한 유물들을 전시하고 있다."
        }
    ],
    "sp_terms_u6": [
        {
            "id": "drill_2",
            "sentence": "The legendary medieval castle was destroyed completely during the siege and never restored by anyone.",
            "underlined": ["medieval castle", "was destroyed", "during the siege", "restored"],
            "wrongIndex": 3,
            "correction": "was restored",
            "explanation": "성과 성을 복원하는 행위의 관계는 수동이므로, was destroyed와 병렬을 이루어 수동태 'was never restored'(또는 be restored) 형태로 표현해야 합니다.",
            "conceptRef": "1단계 [SP-06 핵심: 능동태 vs 수동태의 행위자-대상 시점 차이] 출제 연계",
            "korean": "그 전설적인 중세 성은 공성전 동안 완전히 파괴되었으며 어느 누구에 의해서도 결코 복구되지 않았다."
        },
        {
            "id": "drill_3",
            "sentence": "Severe geological faults were occurred beneath the mountain range after the monumental tectonic earthquake.",
            "underlined": ["Severe geological", "were occurred", "beneath the mountain", "tectonic earthquake"],
            "wrongIndex": 1,
            "correction": "occurred",
            "explanation": "occur는 목적어를 갖지 않는 완전자동사이므로 수동태(be occurred)로 쓸 수 없으며 능동형 occurred로 써야 합니다.",
            "conceptRef": "1단계 [SP-06 핵심: 자동사의 수동태 불가 원칙] 출제 연계",
            "korean": "기념비적인 판구조 지진이 일어난 후 산맥 아래에서 심각한 지질 단층들이 발생했다."
        }
    ],
    "sp_terms_u7": [
        {
            "id": "drill_2",
            "sentence": "Despite the team conducted comprehensive trials, unexpected battery drainage issues persisted in the prototype.",
            "underlined": ["Despite", "conducted", "comprehensive trials", "persisted in"],
            "wrongIndex": 0,
            "correction": "Although",
            "explanation": "뒤에 주어(the team)와 동사(conducted)를 갖춘 절(Clause)이 이어지므로 전치사 Despite 대신 접속사 Although(또는 Even though)를 써야 합니다.",
            "conceptRef": "1단계 [SP-07 핵심: 구(Phrase)와 절(Clause)의 결정적 차이] 출제 연계",
            "korean": "팀이 종합적인 시험을 수행했음에도 불구하고, 시제품에서 예기치 못한 배터리 소모 문제가 지속되었다."
        },
        {
            "id": "drill_3",
            "sentence": "Because of they lacked sufficient experimental funding, the university lab had to cancel the field expedition.",
            "underlined": ["Because of", "lacked", "experimental funding", "cancel the field"],
            "wrongIndex": 0,
            "correction": "Because",
            "explanation": "they lacked...는 주어와 동사를 갖춘 절이므로, 구를 이끄는 전치사구 Because of 대신 절을 이끄는 접속사 Because를 써야 합니다.",
            "conceptRef": "1단계 [SP-07 핵심: 전치사구 뒤 명사구 vs 접속사 뒤 주어+동사 절] 출제 연계",
            "korean": "그들은 충분한 실험 자금이 부족했기 때문에, 대학 연구소는 현장 탐사를 취소해야만 했다."
        }
    ],
    "sp_terms_u8": [
        {
            "id": "drill_2",
            "sentence": "The child felt very asleep during the gentle bedtime lullaby sung by his loving mother.",
            "underlined": ["child felt", "asleep", "during the gentle", "sung by"],
            "wrongIndex": 1,
            "correction": "sleepy",
            "explanation": "very는 서술형 형용사 asleep(잠든 상태의)을 직접 수식할 수 없으며, '졸린' 느낌을 나타내는 한정/서술 가능한 형용사 sleepy를 쓰는 것이 올바릅니다.",
            "conceptRef": "1단계 [SP-08 핵심: 한정적 용법 vs 서술적 용법 (a- 접두사 형용사 규칙)] 출제 연계",
            "korean": "아이는 자애로운 어머니가 불러주는 부드러운 자장가를 듣는 동안 매우 졸림을 느꼈다."
        },
        {
            "id": "drill_3",
            "sentence": "An alike situation occurred in a neighboring province just two months after the volcanic eruption.",
            "underlined": ["An alike", "occurred", "neighboring province", "volcanic eruption"],
            "wrongIndex": 0,
            "correction": "A similar",
            "explanation": "alike는 명사를 앞에서 직접 수식(한정적 용법)할 수 없는 서술적 형용사이므로, 명사 situation을 수식할 때는 한정 형용사 similar를 써야 합니다.",
            "conceptRef": "1단계 [SP-08 핵심: 서술적 용법 전용 형용사의 명사 앞 한정 수식 불가] 출제 연계",
            "korean": "화산 폭발이 있은 지 불과 두 달 만에 인접한 주에서 유사한 상황이 발생했다."
        }
    ]
}
