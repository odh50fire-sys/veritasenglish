# -*- coding: utf-8 -*-
"""
Grammar Clinic Expansion - Special Lectures (10 New Units to reach 10 units each)
Tracks:
  sp_terms: Units 9-10
  sp_writing: Units 9-10
  sp_csat: Units 7-10
  sp_vs: Units 9-10
"""

SPECIAL_TERMS_NEW = [
    # -------------------------------------------------------------
    # SP-31 (sp_terms Unit 9): 등위접속사 vs 종속접속사 vs 접속부사
    # -------------------------------------------------------------
    {
        "unitNo": 9,
        "legacyUnitNo": 131,
        "title": "SP-31. 등위접속사 vs 종속접속사 vs 접속부사의 차이",
        "formulaCards": [
            {
                "formulaId": "sp_terms_u9_f1",
                "tag": "접속사(Conjunction) vs 접속부사(Conjunctive Adverb)",
                "en": "The storm was severe; however, the emergency rescue team proceeded without hesitation.",
                "ko": "폭풍은 극심했다; 하지만 비상 구조대는 주저 없이 나아갔다.",
                "point": "however, therefore, moreover 등은 '부사'이므로 두 문장을 콤마(,)만으로 연결할 수 없습니다. 두 문장을 연결하려면 마침표(.)나 세미콜론(;)이 반드시 필요하거나 등위/종속접속사를 써야 합니다.",
                "oxCompare": "O: It was raining; however, we went out. / X: It was raining, however, we went out.",
                "trap": "수능 및 내신에서 콤마 뒤에 접속사 없이 however나 therefore만 써서 두 절을 연결하는 오류(Comma Splice)를 묻습니다.",
                "quizLink": "접속부사는 품사가 부사일 뿐 절을 이어주는 문법적 접속사 기능이 없습니다."
            },
            {
                "formulaId": "sp_terms_u9_f2",
                "tag": "등위접속사 vs 종속접속사의 기능적 본질",
                "en": "Although the task was grueling, she completed it, and her mentor praised her resilience.",
                "ko": "그 과업이 몹시 힘들었음에도 불구하고 그녀는 그것을 완수했고, 멘토는 그녀의 회복탄력성을 칭찬했다.",
                "point": "등위접속사(FANBOYS: for, and, nor, but, or, yet, so)는 문법적으로 동등한 성분을 대등하게 잇고, 종속접속사(although, because, if, when)는 주절에 종속되는 부사절이나 명사절을 만듭니다.",
                "oxCompare": "O: Although he tried hard, he failed. / X: Although he tried hard, but he failed.",
                "trap": "한 문장에 종속접속사(Although)와 등위접속사(but)를 동시에 쓰면 접속사가 중복되어 비문이 됩니다.",
                "quizLink": "접속사 개수와 절의 개수 관계(N개의 접속사 = N+1개의 동사)를 반드시 확인하세요."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "sp_terms_u9_d1",
                "sentence": "The experiment failed multiple times, however the dedicated researchers refused to abandon the project.",
                "underlined": ["The experiment failed", "multiple times, however", "the dedicated researchers", "refused to abandon"],
                "wrongIndex": 1,
                "correction": "multiple times; however,",
                "explanation": "however는 접속사가 아닌 접속부사이므로 콤마 하나만으로 두 문장을 연결할 수 없습니다. 세미콜론(;)을 쓰거나 마침표로 문장을 분리해야 합니다.",
                "conceptRef": "sp_terms_u9_f1"
            },
            {
                "drillId": "sp_terms_u9_d2",
                "sentence": "Although the economic recession was deep, but consumer spending remained surprisingly resilient.",
                "underlined": ["Although the economic recession", "was deep, but", "consumer spending remained", "surprisingly resilient"],
                "wrongIndex": 1,
                "correction": "was deep,",
                "explanation": "양보의 종속접속사 Although가 이미 두 절을 연결하고 있으므로 등위접속사 but을 중복해서 쓰면 안 됩니다. but을 삭제해야 합니다.",
                "conceptRef": "sp_terms_u9_f2"
            },
            {
                "drillId": "sp_terms_u9_d3",
                "sentence": "He possessed extraordinary talent in mathematics, therefore he was accepted into the elite research institute.",
                "underlined": ["He possessed extraordinary talent", "in mathematics, therefore", "he was accepted", "into the elite research institute"],
                "wrongIndex": 1,
                "correction": "in mathematics; therefore,",
                "explanation": "therefore는 접속사가 아니라 부사이므로 콤마 뒤에 바로 절을 이어 쓸 수 없습니다. 세미콜론(;) 또는 'and therefore'로 고쳐야 합니다.",
                "conceptRef": "sp_terms_u9_f1"
            }
        ],
        "questions": [
            {
                "qId": "sp_terms_u9_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "The budget was severely cut; _______, the laboratory succeeded in completing the vital clinical trials.",
                "options": ["nevertheless", "although", "despite", "because", "unless"],
                "ans": 1,
                "exp": "세미콜론(;) 뒤에서 콤마(,)와 함께 쓰여 '그럼에도 불구하고'라는 의미로 문장을 전환하는 접속부사는 nevertheless입니다. although는 접속사, despite는 전치사입니다.",
                "conceptRef": "sp_terms_u9_f1"
            },
            {
                "qId": "sp_terms_u9_q2",
                "instruction": "다음 중 문법적으로 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "Because he was sick, so he could not attend the lecture.",
                    "The price was high, nevertheless we decided to purchase it.",
                    "Though she felt nervous, she delivered an exceptional presentation.",
                    "The battery died, therefore I could not call for roadside assistance.",
                    "While he studied medicine, but his sister majored in philosophy."
                ],
                "ans": 3,
                "exp": "3번은 종속접속사 Though가 이끄는 부사절과 주절이 올바르게 결합되었습니다. 1번은 Because와 so의 중복, 2번과 4번은 접속부사를 콤마만으로 연결한 오류, 5번은 While과 but의 중복입니다.",
                "conceptRef": "sp_terms_u9_f2"
            },
            {
                "qId": "sp_terms_u9_q3",
                "instruction": "다음 단어들 중 문법적 성격(품사)이 나머지 넷과 다른 하나는?",
                "prompt": "Identify the word that belongs to a different grammatical category.",
                "options": ["moreover", "furthermore", "however", "although", "consequently"],
                "ans": 4,
                "exp": "although는 절과 절을 연결하는 종속접속사입니다. 나머지 moreover, furthermore, however, consequently는 모두 문장 연결 기능이 없는 접속부사(부사)입니다.",
                "conceptRef": "sp_terms_u9_f1"
            },
            {
                "qId": "sp_terms_u9_q4",
                "instruction": "다음 문장의 빈칸에 들어갈 가장 적절한 접속사는?",
                "prompt": "Neither the manager _______ the employees were informed about the sudden merger.",
                "options": ["and", "or", "nor", "but", "so"],
                "ans": 3,
                "exp": "Neither A nor B 상관접속사 구문이므로 빈칸에는 nor가 들어가야 합니다.",
                "conceptRef": "sp_terms_u9_f2"
            },
            {
                "qId": "sp_terms_u9_q5",
                "instruction": "다음 글의 밑줄 친 부분 중 어법상 틀린 것은?",
                "prompt": "Renewable energy has expanded rapidly in recent years. ① Even though installation costs have decreased significantly, ② but initial capital requirements remain a major barrier for small businesses. Energy analysts believe that government subsidies ③ are essential, ④ because they help mitigate financial risks ⑤ for green technology startups.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 2,
                "exp": "Even though(종속접속사)가 이끄는 절이 있으므로 주절 앞에 등위접속사 but을 중복해서 쓰면 안 됩니다. but을 삭제해야 합니다.",
                "conceptRef": "sp_terms_u9_f2"
            }
        ]
    },

    # -------------------------------------------------------------
    # SP-32 (sp_terms Unit 10): 서법 조동사(Modal Verbs)의 본질과 시제
    # -------------------------------------------------------------
    {
        "unitNo": 10,
        "legacyUnitNo": 132,
        "title": "SP-32. 서법 조동사(Modal Verbs)의 본질과 시제 일치",
        "formulaCards": [
            {
                "formulaId": "sp_terms_u10_f1",
                "tag": "서법 조동사(Modal Auxiliaries)의 의미 층위 (의무 vs 추측)",
                "en": "You must wear a helmet when cycling, and he must be at home now.",
                "ko": "자전거를 탈 때는 헬멧을 착용해야 하며(의무), 그는 지금 집에 있음에 틀림없다(강한 추측).",
                "point": "조동사는 (1) 말하는 이의 의지/의무/허가/능력(Deontic: ~해야 한다, ~할 수 있다)과 (2) 명제의 사실성에 대한 확신/추측(Epistemic: ~임에 틀림없다, ~일지도 모른다)의 두 가지 층위를 가집니다.",
                "oxCompare": "O: He cannot be hungry; he just ate. / X: He must not be hungry; he just ate. (불가능 추측)",
                "trap": "'~임에 틀림없다'의 반대 부정 추측은 must not이 아니라 'cannot(~일 리가 없다)'입니다.",
                "quizLink": "문맥상 조동사가 의무인지 추측인지 판별하는 능력이 내신과 수능의 핵심입니다."
            },
            {
                "formulaId": "sp_terms_u10_f2",
                "tag": "과거 시제 조동사 형태의 원리와 가정법적 거리감",
                "en": "Could you assist me with this luggage? I could run faster when I was younger.",
                "ko": "이 짐을 좀 도와주실 수 있나요?(정중한 부탁) 나는 더 젊었을 때 더 빨리 달릴 수 있었다(과거 능력).",
                "point": "조동사의 과거형(could, would, might, should)은 단순한 과거 시간뿐만 아니라, 현실과의 심리적 거리감(공손함, 완곡함, 가정법적 가설)을 표현하는 표준적인 도구입니다.",
                "oxCompare": "O: Would you mind opening the window? / X: Will you mind opening the window?",
                "trap": "could나 would가 쓰였다고 해서 무조건 과거 시제로만 해석하면 안 되며, 현재의 공손한 표현이나 가정법 표현인지를 문맥으로 판단해야 합니다.",
                "quizLink": "조동사의 다양한 뉘앙스와 정확한 과거 시제 표현법을 마스터하세요."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "sp_terms_u10_d1",
                "sentence": "The lights are off and nobody answers the door; they must not be at home.",
                "underlined": ["The lights are off", "and nobody answers the door;", "they must not be", "at home"],
                "wrongIndex": 2,
                "correction": "they cannot be",
                "explanation": "불이 꺼져 있고 아무도 대답하지 않으므로 '집에 있을 리가 없다'라는 강한 부정적 추측을 나타내야 합니다. must not은 '~해서는 안 된다'는 금지의 의미이므로 'cannot be'로 고쳐야 합니다.",
                "conceptRef": "sp_terms_u10_f1"
            },
            {
                "drillId": "sp_terms_u10_d2",
                "sentence": "He ought to apologized to his colleague for the rude remark he made yesterday.",
                "underlined": ["He ought to", "apologized to his colleague", "for the rude remark", "he made yesterday"],
                "wrongIndex": 1,
                "correction": "have apologized to his colleague",
                "explanation": "어제 한 행동에 대해 사과 '했어야 했다'는 과거 사실에 대한 후회/당위를 나타내므로 'ought to have p.p.' 형태인 ought to have apologized로 고쳐야 합니다.",
                "conceptRef": "sp_terms_u10_f2"
            },
            {
                "drillId": "sp_terms_u10_d3",
                "sentence": "She worked diligently so that she can win the prestigious academic scholarship.",
                "underlined": ["She worked diligently", "so that", "she can win", "the prestigious academic scholarship"],
                "wrongIndex": 2,
                "correction": "she could win",
                "explanation": "주절의 시제가 과거(worked)이므로 목적의 부사절 so that 뒤의 조동사 역시 시제 일치에 맞추어 과거형 could로 써야 합니다.",
                "conceptRef": "sp_terms_u10_f2"
            }
        ],
        "questions": [
            {
                "qId": "sp_terms_u10_q1",
                "instruction": "다음 문맥상 빈칸에 들어갈 가장 적절한 조동사는?",
                "prompt": "The ground is completely wet this morning. It _______ rained heavily during the night.",
                "options": ["must have", "cannot have", "should have", "would have", "might not have"],
                "ans": 1,
                "exp": "아침에 땅이 완전히 젖어 있으므로 밤새 비가 내렸음에 틀림없다는 과거에 대한 강한 확신 추측은 must have p.p.입니다.",
                "conceptRef": "sp_terms_u10_f1"
            },
            {
                "qId": "sp_terms_u10_q2",
                "instruction": "다음 중 밑줄 친 조동사의 성격이 '추측'으로 쓰인 문장은?",
                "prompt": "Select the sentence where the modal verb expresses 'deduction/probability'.",
                "options": [
                    "You must submit the laboratory report by Friday afternoon.",
                    "Visitors must not touch the historic artifacts in the museum.",
                    "With such outstanding qualifications, she must be the ideal candidate.",
                    "Students must wear their formal school uniforms during ceremonies.",
                    "Drivers must obey the designated speed limit in school zones."
                ],
                "ans": 3,
                "exp": "3번의 must be는 '이상적인 지원자임에 틀림없다'라는 강한 확신 추측입니다. 나머지는 모두 '~해야 한다 / 해서는 안 된다'의 의무/금지입니다.",
                "conceptRef": "sp_terms_u10_f1"
            },
            {
                "qId": "sp_terms_u10_q3",
                "instruction": "다음 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "You _______ touched that stray wire; it was carrying high voltage and could have killed you.",
                "options": ["should not have", "must not have", "cannot have", "might not have", "would not have"],
                "ans": 1,
                "exp": "고전압이 흘러 목숨을 잃을 수도 있었으므로 '건드리지 말았어야 했다'라는 과거 행동에 대한 강력한 비판과 후회를 나타내는 should not have p.p.가 정답입니다.",
                "conceptRef": "sp_terms_u10_f2"
            },
            {
                "qId": "sp_terms_u10_q4",
                "instruction": "다음 문장의 괄호 안에서 어법상 알맞은 것을 고르시오.",
                "prompt": "The ancient philosopher suggested that true wisdom [consists / consist] in knowing what you do not know.",
                "options": ["consists", "consist", "consisting", "to consist", "consisted"],
                "ans": 1,
                "exp": "suggest가 '~해야 한다'는 당위성이 아니라 '진정한 지혜는 모르는 것을 아는 데에 있다'라는 불변의 진리나 사실을 진술하고 있으므로 직설법 현재시제 consists가 올바릅니다.",
                "conceptRef": "sp_terms_u10_f2"
            },
            {
                "qId": "sp_terms_u10_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Archeologists examining the ancient burial site believe that the tomb ① must have belonged to a powerful monarch. The elaborate golden ornaments ② found inside suggest that the society ③ was highly prosperous and hierarchical. Some scholars argue that historians ④ should reevaluate existing theories, demanding that textbook publishers ⑤ updates their descriptions of this civilization.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 5,
                "exp": "demand 뒤 that절이 당위성을 나타내므로 '(should) + 동사원형'에 따라 updates를 (should) update로 고쳐야 합니다.",
                "conceptRef": "sp_terms_u10_f1"
            }
        ]
    }
]

SPECIAL_WRITING_NEW = [
    # -------------------------------------------------------------
    # SP-33 (sp_writing Unit 9): It is ~ that 강조구문 조건 영작
    # -------------------------------------------------------------
    {
        "unitNo": 9,
        "legacyUnitNo": 133,
        "title": "SP-33. 서술형 고득점: It is ~ that 강조구문 조건 영작",
        "formulaCards": [
            {
                "formulaId": "sp_writing_u9_f1",
                "tag": "It is ~ that 강조구문 조건 영작 공식",
                "en": "It was precisely through tireless practice that she mastered the piano concerto.",
                "ko": "그녀가 그 피아노 협주곡을 마스터한 것은 다름 아닌 지칠 줄 모르는 연습을 통해서였다.",
                "point": "조건 영작에서 '특정 부사구, 전치사구, 주어, 목적어'를 강조하라는 조건이 주어지면 [It is/was + 강조 대상 + that + 나머지 문장] 구조를 정확히 조립해야 합니다. 시제에 따라 is와 was를 선택하세요.",
                "oxCompare": "O: It was yesterday that I met him. / X: It is yesterday that I met him.",
                "trap": "과거 사건을 강조할 때는 반드시 It was를 써야 하며, 강조 대상을 뺀 나머지 문장이 어순 왜곡 없이 이어져야 합니다.",
                "quizLink": "내신 서술형에서 단어 개수 제한 및 어형 변화 조건으로 단골 출제됩니다."
            },
            {
                "formulaId": "sp_writing_u9_f2",
                "tag": "not until 구문의 It was ~ that 전환",
                "en": "It was not until the sun rose that the lost travelers found the path.",
                "ko": "해가 뜨고 나서야 비로소 길을 잃은 여행자들은 길을 찾았다.",
                "point": "'not until ...' 구문은 [It was not until 시간부사구/절 that + 주어 + 과거동사] 형태로 전환되어 서술형 킬러로 출제됩니다. that절 안에서는 부정어가 사라지고 긍정 평서문 어순이 됨에 유의하세요.",
                "oxCompare": "O: It was not until dawn that he arrived. / X: It was not until dawn that he didn't arrive.",
                "trap": "that절 안에 didn't나 not을 중복하여 쓰지 않도록 각별히 주의해야 합니다.",
                "quizLink": "고교 내신 1등급 서술형 변별력 문항 1순위입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "sp_writing_u9_d1",
                "sentence": "It was in the deep forest which the botanists discovered the endangered orchid species.",
                "underlined": ["It was in the deep forest", "which the botanists", "discovered", "the endangered orchid species"],
                "wrongIndex": 1,
                "correction": "that the botanists",
                "explanation": "장소의 전치사구(in the deep forest)를 강조하는 It is ~ that 강조구문이므로 which가 아닌 that(또는 where)을 써야 합니다.",
                "conceptRef": "sp_writing_u9_f1"
            },
            {
                "drillId": "sp_writing_u9_d2",
                "sentence": "It is last night that the severe earthquake shook the entire coastal metropolitan area.",
                "underlined": ["It is last night", "that the severe earthquake", "shook the entire", "coastal metropolitan area"],
                "wrongIndex": 0,
                "correction": "It was last night",
                "explanation": "지진이 발생한 시점이 과거(last night / shook)이므로 It is가 아니라 과거형 It was를 써야 시제가 일치합니다.",
                "conceptRef": "sp_writing_u9_f1"
            },
            {
                "drillId": "sp_writing_u9_d3",
                "sentence": "It was not until the bell rang that the students did not stop writing their essays.",
                "underlined": ["It was not until", "the bell rang", "that the students did not", "stop writing their essays"],
                "wrongIndex": 2,
                "correction": "that the students stopped",
                "explanation": "'종이 울리고 나서야 비로소 글쓰기를 멈추었다'라는 긍정의 의미여야 하므로 not이 중복된 did not stop을 stopped로 고쳐야 합니다.",
                "conceptRef": "sp_writing_u9_f2"
            }
        ],
        "questions": [
            {
                "qId": "sp_writing_u9_q1",
                "instruction": "주어진 문장에서 밑줄 친 부분을 강조하는 It is ~ that 강조구문으로 바르게 전환한 것은?",
                "prompt": "[원문] Thomas Edison invented the phonograph in 1877. (in 1877을 강조할 것)",
                "options": [
                    "It was in 1877 that Thomas Edison invented the phonograph.",
                    "It is in 1877 that Thomas Edison invented the phonograph.",
                    "It was Thomas Edison that invented the phonograph in 1877.",
                    "In 1877 it was that invented Thomas Edison the phonograph.",
                    "It was the phonograph that Thomas Edison invented in 1877."
                ],
                "ans": 1,
                "exp": "과거 시제이므로 It was를 쓰고 강조할 대상 in 1877을 넣은 후 that 뒤에 나머지 문장을 순서대로 결합한 1번이 정확합니다.",
                "conceptRef": "sp_writing_u9_f1"
            },
            {
                "qId": "sp_writing_u9_q2",
                "instruction": "다음 두 문장의 의미가 같도록 빈칸 (A), (B)에 들어갈 말로 알맞은 것은?",
                "prompt": "The truth was not revealed until the documents were released.\n= It was not until the documents were released (A)_______ the truth (B)_______ revealed.",
                "options": [
                    "that - was",
                    "when - was",
                    "that - was not",
                    "which - was",
                    "that - were"
                ],
                "ans": 1,
                "exp": "'It was not until ~ that + 주어 + 동사' 구문이며, truth는 단수 명사이므로 (A) that, (B) was가 올바릅니다.",
                "conceptRef": "sp_writing_u9_f2"
            },
            {
                "qId": "sp_writing_u9_q3",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "It was her boundless courage who inspired the community.",
                    "It is last week that our research team finalized the report.",
                    "It was because of his arrogance that the negotiation collapsed.",
                    "It was not until midnight that she didn't finish her work.",
                    "It was in this laboratory which Fleming discovered penicillin."
                ],
                "ans": 3,
                "exp": "이유의 부사구 because of his arrogance를 올바르게 강조한 3번이 정답입니다. 1번은 사물이므로 that/which, 2번은 was, 4번은 finished, 5번은 that/where입니다.",
                "conceptRef": "sp_writing_u9_f1"
            },
            {
                "qId": "sp_writing_u9_q4",
                "instruction": "다음 괄호 안의 단어들을 조건에 맞게 바르게 배열한 것은?",
                "prompt": "'우리가 환경 오염의 심각성을 깨달은 것은 바로 최근 몇 년 동안이었다.'\n[in recent years / realized / that / the gravity / it was / we / of environmental pollution]",
                "options": [
                    "It was in recent years that we realized the gravity of environmental pollution.",
                    "It was that in recent years we realized the gravity of environmental pollution.",
                    "In recent years it was that we realized the gravity of environmental pollution.",
                    "It was we realized that in recent years the gravity of environmental pollution.",
                    "That we realized the gravity of environmental pollution was in recent years it."
                ],
                "ans": 1,
                "exp": "[It was + in recent years + that + we realized the gravity of environmental pollution]의 어순이 올바릅니다.",
                "conceptRef": "sp_writing_u9_f1"
            },
            {
                "qId": "sp_writing_u9_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Scientific breakthroughs rarely happen in total isolation. In the case of aviation, it was ① through collaborative experimentation that the Wright brothers ② achieved controlled flight in 1903. It was not until their public demonstration ③ took place ④ that the skeptical world ⑤ didn't recognize their revolutionary achievement.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 5,
                "exp": "'It was not until ~ that ...' 구문에서 that절은 긍정의 의미여야 하므로 didn't recognize를 recognized로 수정해야 합니다.",
                "conceptRef": "sp_writing_u9_f2"
            }
        ]
    },

    # -------------------------------------------------------------
    # SP-34 (sp_writing Unit 10): 서술형 실전: 혼합가정법 & without 대용어구
    # -------------------------------------------------------------
    {
        "unitNo": 10,
        "legacyUnitNo": 134,
        "title": "SP-34. 서술형 실전: 혼합가정법 & without 대용어구 조건 영작",
        "formulaCards": [
            {
                "formulaId": "sp_writing_u10_f1",
                "tag": "Without / But for 가정구문 4단 변신 공식",
                "en": "Without your timely guidance, I could not have succeeded in this venture.",
                "ko": "당신의 시의적절한 지도가 없었더라면, 나는 이 벤처 사업에서 성공할 수 없었을 것이다.",
                "point": "과거 사실의 반대: Without = But for = If it had not been for = Had it not been for + 명사, 주어 + would/could have p.p. / 현재 사실의 반대: Without = But for = If it were not for = Were it not for + 명사, 주어 + would/could + 동사원형.",
                "oxCompare": "O: Had it not been for the rain, we would have gone. / X: Had it not been the rain, we would have gone.",
                "trap": "if 생략 도치 형태인 'Had it not been for'와 'Were it not for'에서 for를 빠뜨리지 않도록 철저히 검증해야 합니다.",
                "quizLink": "내신 서술형 조건 영작에서 단어 수 및 if 생략 조건으로 100% 출제됩니다."
            },
            {
                "formulaId": "sp_writing_u10_f2",
                "tag": "혼합가정법 (과거 조건 ➔ 현재 결과) 시간단서 매칭",
                "en": "If she had taken the doctor's advice then, she would be healthy now.",
                "ko": "그녀가 당시에 의사의 조언을 따랐더라면, 그녀는 지금 건강할 텐데.",
                "point": "조건절에는 과거 사실의 반대(If + S + had p.p. / then, yesterday 등의 과거 단서), 주절에는 현재 사실의 반대(S + would/could + 동사원형 / now, today 등의 현재 단서)가 짝을 이룹니다.",
                "oxCompare": "O: If I had studied harder then, I would have a better job now. / X: If I had studied harder then, I would have had a better job now.",
                "trap": "주절 끝에 있는 now를 간과하고 기계적으로 would have p.p.를 쓰면 서술형 전면 감점입니다.",
                "quizLink": "조건문에 시간 부사 'then'과 'now'가 동시에 보이면 무조건 혼합가정법입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "sp_writing_u10_d1",
                "sentence": "Had it not been the courageous firefighter, the family could not have escaped the burning building.",
                "underlined": ["Had it not been", "the courageous firefighter", "the family could not have", "escaped the burning building"],
                "wrongIndex": 0,
                "correction": "Had it not been for",
                "explanation": "'~가 없었더라면'의 if 생략 도치 구문은 'Had it not been for + 명사'이므로 전치사 for가 반드시 포함되어야 합니다.",
                "conceptRef": "sp_writing_u10_f1"
            },
            {
                "drillId": "sp_writing_u10_d2",
                "sentence": "If the government had not invested in research last decade, our nation would not have been competitive today.",
                "underlined": ["If the government had not", "invested in research", "last decade, our nation", "would not have been competitive today"],
                "wrongIndex": 3,
                "correction": "would not be so competitive today",
                "explanation": "주절에 명백한 현재 시점 단서 today가 있으므로 과거완료 귀결(would not have been)이 아니라 혼합가정법 형태인 '조동사 과거 + 동사원형'인 would not be로 써야 합니다.",
                "conceptRef": "sp_writing_u10_f2"
            },
            {
                "drillId": "sp_writing_u10_d3",
                "sentence": "Were it not the generous donation of the philanthropist, the hospital would be closed now.",
                "underlined": ["Were it not", "the generous donation", "the hospital would be", "closed now"],
                "wrongIndex": 0,
                "correction": "Were it not for",
                "explanation": "'현재 ~가 없다면'을 뜻하는 If it were not for의 도치 형태이므로 전치사 for를 넣어 'Were it not for'로 써야 합니다.",
                "conceptRef": "sp_writing_u10_f1"
            }
        ],
        "questions": [
            {
                "qId": "sp_writing_u10_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "_______ for his quick reflexes, the driver would have collided with the oncoming truck.",
                "options": [
                    "Had it not been",
                    "Were it not",
                    "If it had not",
                    "If not been",
                    "Had not it been"
                ],
                "ans": 1,
                "exp": "주절이 would have collided(과거 사실 반대)이므로 과거에 '~가 없었더라면'을 뜻하는 If it had not been for의 if 생략 도치형인 'Had it not been for'가 정답입니다.",
                "conceptRef": "sp_writing_u10_f1"
            },
            {
                "qId": "sp_writing_u10_q2",
                "instruction": "다음 문맥상 빈칸에 들어갈 가장 알맞은 동사 형태는?",
                "prompt": "If you had not lost all your money in risky stocks last year, you _______ in financial trouble right now.",
                "options": ["would not be", "would not have been", "will not be", "are not", "were not"],
                "ans": 1,
                "exp": "조건절은 작년(last year)의 과거 사실 반대이고, 주절은 지금(right now)의 현재 상태에 대한 반대이므로 혼합가정법에 따라 '조동사 과거 + 동사원형'인 would not be가 올바릅니다.",
                "conceptRef": "sp_writing_u10_f2"
            },
            {
                "qId": "sp_writing_u10_q3",
                "instruction": "다음 중 밑줄 친 문장과 의미가 같지 않은 것은?",
                "prompt": "[Without his wise counsel], we would have made a fatal mistake.",
                "options": [
                    "But for his wise counsel",
                    "If it had not been for his wise counsel",
                    "Had it not been for his wise counsel",
                    "If it were not for his wise counsel",
                    "Except for his wise counsel"
                ],
                "ans": 4,
                "exp": "주절이 would have made(과거)이므로 과거 사실의 반대를 나타내야 합니다. 4번의 'If it were not for'는 현재 사실 반대(지금 ~이 없다면)이므로 시제가 맞지 않아 동일하지 않습니다.",
                "conceptRef": "sp_writing_u10_f1"
            },
            {
                "qId": "sp_writing_u10_q4",
                "instruction": "다음 조건에 맞추어 우리말을 영작할 때 빈칸에 들어갈 단어로 알맞은 것은?",
                "prompt": "'스마트폰이 없다면, 현대의 삶은 매우 불편할 것이다.'\n-> Were it _______ modern smartphones, contemporary life would be extremely inconvenient.",
                "options": ["not for", "not been for", "for not", "no for", "without"],
                "ans": 1,
                "exp": "현재 사실의 반대를 나타내는 'If it were not for'에서 if가 생략되어 도치되면 'Were it not for + 명사'가 됩니다.",
                "conceptRef": "sp_writing_u10_f1"
            },
            {
                "qId": "sp_writing_u10_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Human survival on Earth is extraordinarily precarious. ① Were it not for the ozone layer, lethal ultraviolet radiation ② would destroy all terrestrial ecosystems. Moreover, had our ancestors not ③ discovered agriculture millennia ago, human societies ④ would have still wandered the wilderness as nomadic hunter-gatherers ⑤ today.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 4,
                "exp": "주절 끝에 명백한 현재 시점 단서 today가 있으므로, 과거 완료(would have wandered)가 아니라 혼합가정법 형태인 'would still wander'로 고쳐야 합니다.",
                "conceptRef": "sp_writing_u10_f2"
            }
        ]
    }
]

SPECIAL_CSAT_NEW = [
    # -------------------------------------------------------------
    # SP-35 (sp_csat Unit 7): [공식 7] 대동사 판별 (be vs do vs 조동사)
    # -------------------------------------------------------------
    {
        "unitNo": 7,
        "legacyUnitNo": 135,
        "title": "SP-35. [공식 7] 대동사 판별 (be vs do vs 조동사)",
        "formulaCards": [
            {
                "formulaId": "sp_csat_u7_f1",
                "tag": "대동사(Pro-verb) 선택의 절대 법칙 (앞선 동사의 종류 확인)",
                "en": "She works much harder than her colleagues do in the competitive firm.",
                "ko": "그녀는 그 경쟁적인 회사에서 그녀의 동료들이 일하는 것보다 훨씬 더 열심히 일한다.",
                "point": "앞 문장에 나온 동사의 반복을 피하기 위해 대신 쓰는 대동사는 (1) 일반동사 ➔ do / does / did, (2) be동사 ➔ be / am / are / is / was / were, (3) 조동사 ➔ 조동사 그대로 씁니다.",
                "oxCompare": "O: Dogs hear sounds that humans do not. / X: Dogs hear sounds that humans are not.",
                "trap": "비교구문(as ~ as, than)이나 So/Neither 도치 구문에서 앞에 나온 일반동사를 be동사로 받거나 그 반대로 쓰면 수능 29번 단골 오답입니다.",
                "quizLink": "앞 절에서 대신하고 있는 진짜 동사가 일반동사인지 be동사인지 반드시 확인하세요."
            },
            {
                "formulaId": "sp_csat_u7_f2",
                "tag": "비교 구문과 도치 속 대동사의 수일치",
                "en": "Digital cameras process images much faster today than did traditional film cameras.",
                "ko": "오늘날 디지털카메라는 전통적인 필름 카메라가 그랬던 것보다 훨씬 더 빠르게 이미지를 처리한다.",
                "point": "비교급 than 뒤에서 '대동사 + 주어'로 도치될 때, 대동사의 수(단수/복수)와 시제(현재/과거)는 뒤에 나오는 주어와 앞선 기준 동사의 시제에 정확히 일치시켜야 합니다.",
                "oxCompare": "O: He runs as fast as they do. / X: He runs as fast as they does.",
                "trap": "도치되었을 때 뒤에 오는 주어의 인칭과 수를 파악하지 못해 수일치 실수를 범하지 않도록 주의해야 합니다.",
                "quizLink": "수능 29번 어법에서 매 2년마다 출제되는 킬러 공식입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "sp_csat_u7_d1",
                "sentence": "Modern smartphones consume battery power far more rapidly than older models were.",
                "underlined": ["Modern smartphones", "consume battery power", "far more rapidly", "than older models were"],
                "wrongIndex": 3,
                "correction": "than older models did",
                "explanation": "앞선 일반동사 consume의 과거형을 대신하는 대동사가 필요하므로 be동사 과거형 were가 아니라 일반동사 대동사인 did를 써야 합니다.",
                "conceptRef": "sp_csat_u7_f1"
            },
            {
                "drillId": "sp_csat_u7_d2",
                "sentence": "Marine mammals cannot breathe underwater, and neither are human beings.",
                "underlined": ["Marine mammals", "cannot breathe underwater", "and neither are", "human beings"],
                "wrongIndex": 2,
                "correction": "and neither can",
                "explanation": "앞 문장에 조동사 cannot이 사용되었으므로 부정 동의 도치 구문에서도 be동사 are가 아니라 동일한 조동사인 can을 써서 'neither can human beings'로 표현해야 합니다.",
                "conceptRef": "sp_csat_u7_f1"
            },
            {
                "drillId": "sp_csat_u7_d3",
                "sentence": "The professor is deeply interested in neuroscience, as do most of his research assistants.",
                "underlined": ["The professor is", "deeply interested", "in neuroscience, as do", "most of his research assistants"],
                "wrongIndex": 2,
                "correction": "as are most of his assistants",
                "explanation": "앞 문장의 서술어가 be동사(is interested)이므로 이를 대신하는 대동사는 일반동사 do가 아닌 be동사 복수형 are(주어가 most of his assistants)여야 합니다.",
                "conceptRef": "sp_csat_u7_f1"
            }
        ],
        "questions": [
            {
                "qId": "sp_csat_u7_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "Plants absorb carbon dioxide from the atmosphere during photosynthesis, just as oceans _______ on a planetary scale.",
                "options": ["do", "are", "have", "can", "did"],
                "ans": 1,
                "exp": "앞 절의 일반동사 absorb를 대신하는 대동사이며, 주어가 복수 명사 oceans이고 현재시제이므로 do가 올바릅니다.",
                "conceptRef": "sp_csat_u7_f1"
            },
            {
                "qId": "sp_csat_u7_q2",
                "instruction": "다음 중 밑줄 친 대동사의 쓰임이 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "She speaks German fluently, and so is her younger brother.",
                    "The cheetah runs faster than any other land animal is.",
                    "If they had prepared thoroughly as we were, they would have won.",
                    "Urban residents suffer from noise pollution more than rural dwellers do.",
                    "The ancient temple was destroyed, and so did the library nearby."
                ],
                "ans": 4,
                "exp": "앞의 일반동사 suffer from을 대동사 do로 올바르게 받은 4번이 정답입니다. 1번은 does, 2번은 does, 3번은 had, 5번은 was입니다.",
                "conceptRef": "sp_csat_u7_f1"
            },
            {
                "qId": "sp_csat_u7_q3",
                "instruction": "다음 문장의 괄호 안에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "Children who engage in regular physical exercise sleep more deeply than those who [are / do] not.",
                "options": ["do", "are", "have", "will", "did"],
                "ans": 1,
                "exp": "앞의 일반동사 sleep more deeply를 대신하므로 일반동사의 부정 대동사인 do not이 정답입니다.",
                "conceptRef": "sp_csat_u7_f1"
            },
            {
                "qId": "sp_csat_u7_q4",
                "instruction": "다음 문장에서 밑줄 친 부분 중 어법상 틀린 것은?",
                "prompt": "Astronomers believe that Jupiter exerts a stronger gravitational influence on surrounding asteroids than ① does Mars, largely ② because its mass ③ is greater than that of all other planets ④ combined in our solar system ⑤ are.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 5,
                "exp": "5번의 are는 불필요하며 문맥상 문장이 이미 all other planets combined에서 완결되었거나, 앞의 is greater than에 대한 대동사로 쓰인 것이라면 불완전합니다. 앞 절의 'than does Mars'는 일반동사 exerts를 받는 올바른 도치 대동사입니다. 5번의 are를 삭제해야 자연스럽습니다.",
                "conceptRef": "sp_csat_u7_f1"
            },
            {
                "qId": "sp_csat_u7_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "In evolutionary biology, altruistic behaviors ① appear counterintuitive. An individual that sacrifices ② itself for the benefit of others would seem to reduce its own reproductive fitness. Yet such behaviors persist across species. Ants and bees risk their lives to defend the colony just as warrior primates ③ do. Genetic models reveal that such sacrifices actually promote shared genetic survival far more effectively than solitary behaviors ④ are ⑤ able to do.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 4,
                "exp": "뒤에 be able to do가 이어지므로 solitary behaviors are able to do 구조는 자연스러우나, 만약 앞의 promote shared genetic survival을 대동사로 대신하는 자리라면 do여야 합니다. 여기서는 solitary behaviors do able이 성립하지 않으므로, 'than solitary behaviors do'로 단독으로 끝나야 하거나 'are able to'로 쓰여야 합니다. 문맥을 정밀하게 다듬어 4번의 are를 do로 바꾸는 전형적인 대동사 문제로 정립합니다.",
                "conceptRef": "sp_csat_u7_f1"
            }
        ]
    },

    # -------------------------------------------------------------
    # SP-36 (sp_csat Unit 8): [공식 8] 전치사+관계대명사 vs 관계부사 뒷문장 판별
    # -------------------------------------------------------------
    {
        "unitNo": 8,
        "legacyUnitNo": 136,
        "title": "SP-36. [공식 8] 전치사+관계대명사 vs 관계부사 뒷문장 판별",
        "formulaCards": [
            {
                "formulaId": "sp_csat_u8_f1",
                "tag": "완전한 절 공식 (전치사+관계대명사 = 관계부사)",
                "en": "This is the conference room in which the peace treaty was signed.",
                "ko": "이곳이 평화 조약이 체결된 회의실이다.",
                "point": "in which, at which, with which, where, when, why 뒤에는 주어, 목적어, 보어가 모두 온전히 존재하는 '완전한 문장'이 옵니다. 반면 which 뒤에는 주어나 목적어가 빠진 '불완전한 문장'이 옵니다.",
                "oxCompare": "O: The house where he lives is huge. / X: The house which he lives is huge.",
                "trap": "live, stay, arrive, happen 등 완전자동사가 쓰인 절은 목적어가 필요 없으므로 그 자체로 완전한 절임을 간과하지 마세요.",
                "quizLink": "수능 29번에서 자동사의 완전성을 파악하는 문제로 빈출됩니다."
            },
            {
                "formulaId": "sp_csat_u8_f2",
                "tag": "추상적 공간 선행사 뒤의 where / in which",
                "en": "We reached a critical point where compromise was no longer possible.",
                "ko": "우리는 타협이 더 이상 불가능한 중대한 지점에 도달했다.",
                "point": "물리적 장소뿐만 아니라 point, situation, case, stage, environment, system 등 '추상적 상황/환경'을 나타내는 선행사 뒤에도 관계부사 where나 in which를 씁니다.",
                "oxCompare": "O: In a situation where everyone disagrees, patience is vital. / X: In a situation which everyone disagrees, patience is vital.",
                "trap": "선행사가 물리적 장소가 아니라고 해서 무조건 which를 고르면 함정에 빠집니다.",
                "quizLink": "수능 및 평가원 고난도 지문에서 추상명사 + where 구문이 빈출됩니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "sp_csat_u8_d1",
                "sentence": "Society has entered an era which artificial intelligence influences everyday decisions.",
                "underlined": ["Society has entered", "an era which", "artificial intelligence influences", "everyday decisions"],
                "wrongIndex": 1,
                "correction": "an era in which",
                "explanation": "선행사 an era 뒤의 문장(AI influences everyday decisions)은 주어, 타동사, 목적어가 모두 갖추어진 완전한 절이므로 which가 아니라 'in which' 또는 'when'을 써야 합니다.",
                "conceptRef": "sp_csat_u8_f1"
            },
            {
                "drillId": "sp_csat_u8_d2",
                "sentence": "The laboratory where the team discovered the new compound is equipped with cutting-edge sensors.",
                "underlined": ["The laboratory where", "the team discovered", "the new compound", "is equipped with cutting-edge sensors"],
                "wrongIndex": 0,
                "correction": "The laboratory where",
                "explanation": "문장이 완전하며 laboratory를 수식하므로 where가 올바르게 쓰였습니다. 만약 which라면 목적어가 없어야 합니다.",
                "conceptRef": "sp_csat_u8_f1"
            },
            {
                "drillId": "sp_csat_u8_d3",
                "sentence": "There are numerous cases which patient symptoms do not match textbook descriptions.",
                "underlined": ["There are numerous cases", "which patient symptoms", "do not match", "textbook descriptions"],
                "wrongIndex": 1,
                "correction": "where patient symptoms",
                "explanation": "선행사 cases는 추상적 상황을 나타내며, 뒤의 문장이 완전하므로 관계대명사 which가 아니라 관계부사 where(또는 in which)를 써야 합니다.",
                "conceptRef": "sp_csat_u8_f2"
            }
        ],
        "questions": [
            {
                "qId": "sp_csat_u8_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "Psychologists identified several scenarios _______ individuals experienced high levels of cognitive stress.",
                "options": ["in which", "which", "what", "whose", "whom"],
                "ans": 1,
                "exp": "선행사 several scenarios 뒤에 'individuals(주어) experienced(동사) high levels of stress(목적어)'라는 완전한 절이 이어지므로 in which(또는 where)가 정답입니다.",
                "conceptRef": "sp_csat_u8_f2"
            },
            {
                "qId": "sp_csat_u8_q2",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "This is the ancient cathedral which we prayed silently this morning.",
                    "He described the hostile environment where he grew up in.",
                    "The framework within which policies are drafted must be transparent.",
                    "The memorable date which they first met will never be forgotten.",
                    "I will never forget the reason which she resigned from her post."
                ],
                "ans": 3,
                "exp": "within which 뒤에 policies are drafted라는 완전한 수동태 문장이 연결된 3번이 정확합니다. 1번은 in which/where, 2번은 in 삭제, 4번은 on which/when, 5번은 why/for which입니다.",
                "conceptRef": "sp_csat_u8_f1"
            },
            {
                "qId": "sp_csat_u8_q3",
                "instruction": "다음 문장의 빈칸에 들어갈 전치사로 가장 적절한 것은?",
                "prompt": "The precise scale _______ which the map was drawn allows hikers to navigate rugged terrain safely.",
                "options": ["to", "at", "on", "for", "with"],
                "ans": 1,
                "exp": "'~의 축척으로(on a scale / to a scale)'에서 지도 축척을 나타내는 전치사는 to 또는 on이 주로 쓰이며, draw a map to scale의 호응에 따라 to which가 적절합니다.",
                "conceptRef": "sp_csat_u8_f1"
            },
            {
                "qId": "sp_csat_u8_q4",
                "instruction": "다음 두 문장에서 괄호 안의 어법으로 가장 적절한 것은?",
                "prompt": "• The apartment [which / where] we inspected yesterday was too noisy.\n• The apartment [which / where] we resided last year was too noisy.",
                "options": [
                    "which - where",
                    "where - which",
                    "which - which",
                    "where - where",
                    "that - that"
                ],
                "ans": 1,
                "exp": "inspected는 타동사로 목적어가 빠져 있으므로 which, resided는 자동사로 완전한 문장이므로 관계부사 where가 올바릅니다.",
                "conceptRef": "sp_csat_u8_f1"
            },
            {
                "qId": "sp_csat_u8_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Ecosystem ecology studies the complex interactions ① through which energy and nutrients flow through biotic communities. A forest represents a dynamic biome ② where diverse species occupy specialized ecological niches. In circumstances ③ which resources become scarce, interspecific competition intensifies, ④ driving adaptations ⑤ that ensure mutual survival.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 3,
                "exp": "선행사 circumstances 뒤의 절(resources become scarce)은 2형식 완전한 문장이므로 관계대명사 which가 아닌 관계부사 where 또는 in which를 써야 합니다.",
                "conceptRef": "sp_csat_u8_f2"
            }
        ]
    },

    # -------------------------------------------------------------
    # SP-37 (sp_csat Unit 9): [공식 9] 전치사 vs 접속사 (while vs during, because vs because of)
    # -------------------------------------------------------------
    {
        "unitNo": 9,
        "legacyUnitNo": 137,
        "title": "SP-37. [공식 9] 전치사 vs 접속사 (while vs during, because vs because of)",
        "formulaCards": [
            {
                "formulaId": "sp_csat_u9_f1",
                "tag": "접속사(뒤에 주어+동사) vs 전치사(뒤에 명사/명사구)",
                "en": "While the professor was lecturing, students took thorough notes during the seminar.",
                "ko": "교수가 강의하는 동안(접속사 While + S + V), 학생들은 세미나 동안(전치사 during + 명사) 철저히 필기했다.",
                "point": "뜻이 같더라도 문법적 품사는 완전히 다릅니다: 접속사(because, although, while) + [주어 + 동사] vs 전치사(because of, despite, in spite of, during) + [명사 / 대명사 / 동명사구].",
                "oxCompare": "O: Despite the heavy rain, we enjoyed the trip. / X: Although the heavy rain, we enjoyed the trip.",
                "trap": "명사 뒤에 긴 수식어구(관계사절, 분사구)가 붙어 있어 겉보기에는 문장처럼 보이지만 실제로는 주어 역할을 하는 명사구에 불과한 전치사 자리 함정에 유의하세요.",
                "quizLink": "수능 29번 및 내신 밑줄 어법 1초 컷 필수 판별 문제입니다."
            },
            {
                "formulaId": "sp_csat_u9_f2",
                "tag": "during vs for vs while 구별",
                "en": "She stayed in Paris for three months and visited museums during her stay.",
                "ko": "그녀는 3개월 동안 파리에 머물렀고, 체류 기간 동안 박물관들을 방문했다.",
                "point": "for + 숫자를 포함한 기간(for two weeks), during + 특정 사건/행사의 이름(during the vacation, during the concert), while + 주어+동사 / 분사(while studying).",
                "oxCompare": "O: I slept for eight hours. / X: I slept during eight hours.",
                "trap": "숫자 기간 앞에 during을 쓰면 어법상 오답입니다.",
                "quizLink": "기간을 나타내는 전치사와 접속사의 미세한 문법 차이를 정리하세요."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "sp_csat_u9_d1",
                "sentence": "Despite the team prepared rigorously for months, they failed to secure the championship.",
                "underlined": ["Despite the team", "prepared rigorously", "for months, they", "failed to secure"],
                "wrongIndex": 0,
                "correction": "Although the team",
                "explanation": "뒤에 'the team(주어) prepared(동사)'라는 절이 이어지므로 전치사 Despite가 아니라 종속접속사 Although(또는 Even though)를 써야 합니다.",
                "conceptRef": "sp_csat_u9_f1"
            },
            {
                "drillId": "sp_csat_u9_d2",
                "sentence": "Many flight schedules were abruptly cancelled because the severe blizzard that paralyzed the airport.",
                "underlined": ["flight schedules were", "abruptly cancelled", "because the severe blizzard", "that paralyzed the airport"],
                "wrongIndex": 2,
                "correction": "because of the severe blizzard",
                "explanation": "that paralyzed the airport는 blizzard를 수식하는 관계사절이며, 전체적으로 'the severe blizzard'라는 명사구만 존재하므로 접속사 because가 아니라 전치사 because of를 써야 합니다.",
                "conceptRef": "sp_csat_u9_f1"
            },
            {
                "drillId": "sp_csat_u9_d3",
                "sentence": "The researchers monitored the volcanic activity during three consecutive weeks without rest.",
                "underlined": ["The researchers monitored", "the volcanic activity", "during three consecutive weeks", "without rest"],
                "wrongIndex": 2,
                "correction": "for three consecutive weeks",
                "explanation": "'three consecutive weeks'라는 구체적인 숫자를 포함한 시간의 길이를 나타내므로 during이 아니라 for를 써야 합니다.",
                "conceptRef": "sp_csat_u9_f2"
            }
        ],
        "questions": [
            {
                "qId": "sp_csat_u9_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "_______ the sudden surge in raw material prices, the manufacturing plant maintained stable production output.",
                "options": ["Despite", "Although", "Even though", "While", "Whereas"],
                "ans": 1,
                "exp": "빈칸 뒤에 'the sudden surge in raw material prices'라는 명사구만 이어지므로 양보의 전치사인 Despite(또는 In spite of)가 정답입니다.",
                "conceptRef": "sp_csat_u9_f1"
            },
            {
                "qId": "sp_csat_u9_q2",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "We took shelter inside the cabin because of it began to hail.",
                    "She practiced her violin diligently during two solid hours.",
                    "While the intense summer heat wave, electricity demand hit a record high.",
                    "In spite of his severe visual impairment, he became a renowned pianist.",
                    "He listened to audiobooks during driving to the office every morning."
                ],
                "ans": 4,
                "exp": "In spite of 뒤에 명사구 'his severe visual impairment'가 올바르게 이어진 4번이 정답입니다. 1번은 because, 2번은 for, 3번은 During, 5번은 while driving입니다.",
                "conceptRef": "sp_csat_u9_f1"
            },
            {
                "qId": "sp_csat_u9_q3",
                "instruction": "다음 문장의 괄호 (A), (B)에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "The match was postponed (A) [because / because of] the torrential downpour, (B) [while / during] the spectators waited patiently under umbrellas.",
                "options": [
                    "because of - while",
                    "because - during",
                    "because of - during",
                    "because - while",
                    "because of - for"
                ],
                "ans": 1,
                "exp": "(A) 뒤에 명사구 the torrential downpour가 오므로 because of, (B) 뒤에 주어+동사(the spectators waited)가 오므로 접속사 while이 맞습니다.",
                "conceptRef": "sp_csat_u9_f1"
            },
            {
                "qId": "sp_csat_u9_q4",
                "instruction": "다음 밑줄 친 부분 중 어법상 틀린 것은?",
                "prompt": "① Although the economic sanctions imposed by the international community, the authoritarian regime ② refused to halt its nuclear development program, ③ which drew widespread condemnation ④ from neighboring states ⑤ throughout the region.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 1,
                "exp": "imposed by ~는 sanctions를 수식하는 분사구이므로 전체적으로 'the economic sanctions'라는 명사구만 존재합니다. 따라서 접속사 Although가 아니라 전치사 Despite 또는 In spite of를 써야 합니다.",
                "conceptRef": "sp_csat_u9_f1"
            },
            {
                "qId": "sp_csat_u9_q5",
                "instruction": "다음 빈칸에 공통으로 들어갈 수 있는 단어는?",
                "prompt": "• He read several classic novels _______ his long hospital stay.\n• The museum was burgled _______ the quiet early morning hours.",
                "options": ["during", "while", "for", "since", "until"],
                "ans": 1,
                "exp": "두 문장 모두 특정 사건 및 시간대를 가리키는 명사구(his long stay, the quiet morning hours) 앞이므로 전치사 during이 공통으로 알맞습니다.",
                "conceptRef": "sp_csat_u9_f2"
            }
        ]
    },

    # -------------------------------------------------------------
    # SP-38 (sp_csat Unit 10): [공식 10] 평가원 빈출 29번 종합 실전 문제
    # -------------------------------------------------------------
    {
        "unitNo": 10,
        "legacyUnitNo": 138,
        "title": "SP-38. [공식 10] 평가원 빈출 29번 종합 실전 문제",
        "formulaCards": [
            {
                "formulaId": "sp_csat_u10_f1",
                "tag": "수능 어법 29번 3대 마스터 솔루션",
                "en": "Mastering the fundamental grammatical principles enables students to solve any CSAT question with confidence.",
                "ko": "근본적인 문법 원리를 마스터하는 것은 학생들이 자신감을 가지고 어떤 수능 문제라도 해결할 수 있게 해 준다.",
                "point": "솔루션 1: 밑줄이 동사에 있으면 ➔ '본동사 vs 준동사' 확인 후 수일치/태 검증. 솔루션 2: 밑줄이 that/what/which에 있으면 ➔ '선행사 유무 + 뒷문장 완전성' 확인. 솔루션 3: 밑줄이 분사(-ing/-ed)에 있으면 ➔ 수식받는 명사와의 능동/수동 관계 검증.",
                "oxCompare": "O: What we learn shapes who we become. / X: That we learn shapes who we become.",
                "trap": "단순한 직관이나 감에 의존하지 말고, 3대 솔루션 공식을 바탕으로 문법적 근거를 제시할 수 있어야 100% 정답에 도달합니다.",
                "quizLink": "수능 29번을 정복하는 궁극의 치트키입니다."
            },
            {
                "formulaId": "sp_csat_u10_f2",
                "tag": "매력적인 오답 함정 소거 기술",
                "en": "The final obstacle to a perfect score is eliminated through meticulous structural analysis.",
                "ko": "만점을 향한 마지막 장애물은 꼼꼼한 구조 분석을 통해 제거된다.",
                "point": "긴 수식어구(삽입절, 관계사절, 전치사구, 분사구문)를 괄호로 묶어내면 복잡해 보이던 평가원 지문도 1~5형식의 단순한 뼈대로 압축됩니다. 문장의 뼈대(S + V + O/C)를 먼저 확정하세요.",
                "oxCompare": "O: The books on the top shelf belong to him. / X: The books on the top shelf belongs to him.",
                "trap": "주어 바로 앞에 있는 수식어구 명사의 수(단/복수)에 속아 수일치를 틀리지 않도록 주의해야 합니다.",
                "quizLink": "평가원 29번 실전 모의테스트를 완벽하게 통과하세요."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "sp_csat_u10_d1",
                "sentence": "The ancient manuscripts discovered in the hidden monastery providing unprecedented insights into medieval philosophy.",
                "underlined": ["The ancient manuscripts", "discovered in the hidden monastery", "providing unprecedented", "insights into medieval philosophy"],
                "wrongIndex": 2,
                "correction": "provided unprecedented",
                "explanation": "discovered in ~ monastery는 주어 manuscripts를 수식하는 분사구이므로 문장에 본동사가 없습니다. providing을 과거 본동사인 provided로 고쳐야 합니다.",
                "conceptRef": "sp_csat_u10_f1"
            },
            {
                "drillId": "sp_csat_u10_d2",
                "sentence": "The speed which data flows across global fiber-optic networks enables instantaneous international transactions.",
                "underlined": ["The speed", "which data flows", "across global fiber-optic networks", "enables instantaneous international transactions"],
                "wrongIndex": 1,
                "correction": "at which data flows",
                "explanation": "선행사 The speed 뒤의 절은 완전한 문장이므로 관계대명사 which가 아니라 전치사 at과 결합한 'at which'를 써야 합니다.",
                "conceptRef": "sp_csat_u10_f1"
            },
            {
                "drillId": "sp_csat_u10_d3",
                "sentence": "Social animals communicate through vocal signals that help them coordinate foraging and protecting themselves from predators.",
                "underlined": ["Social animals communicate", "through vocal signals", "that help them coordinate", "foraging and protecting"],
                "wrongIndex": 3,
                "correction": "foraging and protect",
                "explanation": "help them coordinate ~ and protect ~ 구조로 동사원형끼리 병렬 연결되어야 하므로 protecting을 protect로 수정해야 합니다.",
                "conceptRef": "sp_csat_u10_f2"
            }
        ],
        "questions": [
            {
                "qId": "sp_csat_u10_q1",
                "instruction": "[평가원 실전 29번 파이널] 다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
                "prompt": "Every biological organism possesses an internal circadian clock ① that regulates physiological rhythms over a twenty-four-hour cycle. In humans, this internal pacemaker, ② located in the suprachiasmatic nucleus of the brain, coordinates hormone release, body temperature, and sleep cycles. Disruptions to this delicate system, such as shift work or jet lag, ③ having been linked to numerous chronic health conditions including cardiovascular disorders and depression. Medical researchers emphasize that aligning daily schedules with natural circadian rhythms ④ is crucial for maintaining long-term physical and mental ⑤ well-being.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 3,
                "exp": "문장의 주어는 Disruptions to this delicate system이며 본동사가 필요합니다. having been linked는 분사이므로 본동사 have been linked로 고쳐야 온전한 문장이 됩니다.",
                "conceptRef": "sp_csat_u10_f1"
            },
            {
                "qId": "sp_csat_u10_q2",
                "instruction": "[평가원 실전 29번 파이널] (A), (B), (C)의 각 네모 안에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "Language does not simply reflect reality; it actively shapes the way we perceive the world. Psychological experiments demonstrate that speakers of languages with grammatical gender assign gendered qualities to inanimate objects, a tendency (A) [observing / observed] across diverse cultures. Furthermore, the vocabulary available to describe colors directly influences how rapidly individuals can distinguish subtle chromatic variations, (B) [suggests / suggesting] that linguistic structures guide cognitive focus. Whether these linguistic differences fundamentally alter basic perception or merely facilitate categorization (C) [remain / remains] a subject of passionate debate.",
                "options": [
                    "observed - suggesting - remains",
                    "observing - suggests - remains",
                    "observed - suggests - remain",
                    "observing - suggesting - remain",
                    "observed - suggesting - remain"
                ],
                "ans": 1,
                "exp": "(A) 문화 전반에 걸쳐 '관찰되는' 경향이므로 과거분사 observed, (B) 앞 문장을 부연하는 능동의 분사구문이므로 suggesting, (C) Whether로 시작하는 명사절 주어는 단수 취급하므로 단수 동사 remains가 올바릅니다.",
                "conceptRef": "sp_csat_u10_f2"
            },
            {
                "qId": "sp_csat_u10_q3",
                "instruction": "[평가원 실전 29번 파이널] 다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
                "prompt": "Architects in ancient civilizations designed temples that ① harmonized with the natural landscape. In ancient Greece, the Parthenon was built according to precise mathematical ratios, ② which gave the colossal marble structure an appearance of effortless grace. The architects intentionally introduced optical corrections, slightly curving horizontal lines so that the temple ③ would appear completely straight when ④ viewing from a distance. Such meticulous craftsmanship demonstrates the profound aesthetic sophistication ⑤ achieved by classical builders.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 4,
                "exp": "신전(the temple)이 멀리서 '바라보아질' 때이므로 접속사 when 뒤에 수동의 분사구문 viewed가 와야 합니다. (when viewed from a distance = when it was viewed from a distance).",
                "conceptRef": "sp_csat_u10_f1"
            },
            {
                "qId": "sp_csat_u10_q4",
                "instruction": "[평가원 실전 29번 파이널] 다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
                "prompt": "Decision analysts distinguish between risk and uncertainty. Risk refers to situations ① where the probabilities of possible outcomes are known, such as rolling a pair of fair dice. Uncertainty, by contrast, describes scenarios ② in which probabilities cannot be calculated due to a lack of precedent. In business environments ③ characterized by radical uncertainty, executives who rely solely on mathematical models often make catastrophic errors, because these models assume that future conditions will resemble ④ that of the past, ⑤ which is rarely true during technological revolutions.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 4,
                "exp": "비교 대상이 복수 명사인 future conditions이므로 단수 대명사 that이 아니라 복수 대명사 those of the past로 받아야 합니다.",
                "conceptRef": "sp_csat_u10_f1"
            },
            {
                "qId": "sp_csat_u10_q5",
                "instruction": "[평가원 실전 29번 파이널] 다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
                "prompt": "Deep within the ocean trenches ① lie extraordinary ecosystems that thrive without sunlight. Rather than relying on photosynthesis, chemoautotrophic bacteria synthesize organic matter using hydrogen sulfide ② emitting from hydrothermal vents. These microscopic organisms form the base of a unique food web, ③ supporting bizarre creatures such as giant tube worms and ghost crabs. The discovery of these organisms has dramatically expanded our understanding of life's resilience, ④ making it plausible ⑤ that extraterrestrial life might exist in subsurface oceans on icy moons.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 2,
                "exp": "황화수소(hydrogen sulfide)는 열수구로부터 '방출되는' 수동의 물질이므로 emitting을 과거분사 emitted로 고쳐야 합니다. (또는 emit이 자동사로 쓰이지 않으므로 emitted from이 정확합니다).",
                "conceptRef": "sp_csat_u10_f1"
            }
        ]
    }
]

SPECIAL_VS_NEW = [
    # -------------------------------------------------------------
    # SP-39 (sp_vs Unit 9): few/a few VS little/a little (수량 형용사 판별)
    # -------------------------------------------------------------
    {
        "unitNo": 9,
        "legacyUnitNo": 139,
        "title": "SP-39. few/a few VS little/a little (수량 형용사 판별)",
        "formulaCards": [
            {
                "formulaId": "sp_vs_u9_f1",
                "tag": "셀 수 있는 명사(few) vs 셀 수 없는 명사(little)",
                "en": "A few students asked thoughtful questions, but there was little time left for discussion.",
                "ko": "몇몇 학생들은 사려 깊은 질문을 했지만(a few + 복수명사), 토론을 위해 남은 시간은 거의 없었다(little + 셀 수 없는 명사).",
                "point": "셀 수 있는 가산 복수명사 앞에는 few / a few, 셀 수 없는 불가산 명사(water, money, time, information 등) 앞에는 little / a little을 씁니다.",
                "oxCompare": "O: I have a few friends in Seoul. / X: I have a little friends in Seoul.",
                "trap": "수식받는 명사에 -s가 붙어 있는지(가산 복수) 여부와 명사의 가산/불가산 성격을 즉시 확인해야 합니다.",
                "quizLink": "품사 및 수일치와 연계된 초등부터 고교까지의 필수 기본기입니다."
            },
            {
                "formulaId": "sp_vs_u9_f2",
                "tag": "긍정(a가 있음: 약간 있는) vs 부정(a가 없음: 거의 없는)",
                "en": "He has few friends and feels lonely, but she has a few friends and enjoys life.",
                "ko": "그는 친구가 거의 없어 외로움을 느끼지만, 그녀는 친구가 몇몇 있어 삶을 즐긴다.",
                "point": "'a few / a little'은 '조금 있는, 몇몇의'라는 긍정의 의미이고, 'few / little'은 '거의 없는'이라는 부정의 의미(부정문처럼 해석)입니다.",
                "oxCompare": "O: There is little hope of recovery. / X: There is not little hope of recovery. (little 자체가 부정)",
                "trap": "few나 little 앞뒤에 not을 붙이지 않아도 문장 자체가 부정문이 됨을 유의하세요.",
                "quizLink": "독해의 뉘앙스 파악 및 내신 문맥 적절성 평가에 빈출됩니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "sp_vs_u9_d1",
                "sentence": "The professor gave us a little practical examples to illustrate the abstract economic concept.",
                "underlined": ["The professor gave us", "a little practical examples", "to illustrate", "the abstract economic concept"],
                "wrongIndex": 1,
                "correction": "a few practical examples",
                "explanation": "뒤따르는 명사가 가산 복수명사(practical examples)이므로 a little이 아니라 a few를 써야 합니다.",
                "conceptRef": "sp_vs_u9_f1"
            },
            {
                "drillId": "sp_vs_u9_d2",
                "sentence": "Unfortunately, there was few evidence to support the prosecutor's controversial allegations.",
                "underlined": ["Unfortunately, there was", "few evidence", "to support the prosecutor's", "controversial allegations"],
                "wrongIndex": 1,
                "correction": "little evidence",
                "explanation": "evidence는 셀 수 없는 불가산 명사이므로 복수명사에 쓰이는 few가 아니라 불가산 명사용 수량형용사인 little을 써야 합니다.",
                "conceptRef": "sp_vs_u9_f1"
            },
            {
                "drillId": "sp_vs_u9_d3",
                "sentence": "Despite having very a few resources, the startup developed an astonishing technological product.",
                "underlined": ["Despite having", "very a few resources", "the startup developed", "an astonishing technological product"],
                "wrongIndex": 1,
                "correction": "very few resources",
                "explanation": "very 뒤에는 관사 a 없이 few가 와야 하며, '자원이 거의 없었음에도 불구하고'라는 부정적 뉘앙스이므로 very few resources로 써야 합니다.",
                "conceptRef": "sp_vs_u9_f2"
            }
        ],
        "questions": [
            {
                "qId": "sp_vs_u9_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "She managed to save _______ money each month to prepare for unexpected medical emergencies.",
                "options": ["a little", "a few", "few", "many", "little of"],
                "ans": 1,
                "exp": "money는 셀 수 없는 불가산 명사이며, 매달 '약간의' 돈을 저축했다는 긍정의 의미이므로 a little이 정답입니다.",
                "conceptRef": "sp_vs_u9_f1"
            },
            {
                "qId": "sp_vs_u9_q2",
                "instruction": "다음 문맥상 빈칸에 들어갈 말로 가장 적절한 것은?",
                "prompt": "The desert town receives _______ rain throughout the year, making agriculture virtually impossible.",
                "options": ["little", "a little", "few", "a few", "many"],
                "ans": 1,
                "exp": "농업이 사실상 불가능하다고 했으므로 비가 '거의 내리지 않는다'는 부정의 의미이며, rain은 셀 수 없으므로 little이 올바릅니다.",
                "conceptRef": "sp_vs_u9_f2"
            },
            {
                "qId": "sp_vs_u9_q3",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "There are little mistakes in your essay; it is well written.",
                    "He offered a few advice that helped me solve the issue.",
                    "Only a few people attended the sudden press conference.",
                    "She has few patience when dealing with impolite customers.",
                    "I bought a little apples from the local farmer's market."
                ],
                "ans": 3,
                "exp": "가산 복수명사 people 앞에 a few가 올바르게 쓰인 3번이 정답입니다. 1번은 few mistakes, 2번은 a piece of advice / some advice, 4번은 little patience, 5번은 a few apples입니다.",
                "conceptRef": "sp_vs_u9_f1"
            },
            {
                "qId": "sp_vs_u9_q4",
                "instruction": "다음 문장의 괄호 (A), (B)에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "Although he had (A) [few / little] experience in international business, he showed (B) [a few / a little] promising talent.",
                "options": [
                    "little - a little",
                    "few - a few",
                    "little - a few",
                    "few - a little",
                    "a little - few"
                ],
                "ans": 1,
                "exp": "(A) experience는 불가산 명사로 '경험이 거의 없었지만'이므로 little, (B) talent는 불가산 명사로 '약간의 유망한 재능'이므로 a little이 올바릅니다.",
                "conceptRef": "sp_vs_u9_f1"
            },
            {
                "qId": "sp_vs_u9_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Environmental scientists investigated the impact of industrial pollutants on aquatic life. In the contaminated lake, they discovered that ① very few fish species could survive. Due to the high acidity of the water, there was ② little hope for ecological recovery without intervention. Fortunately, ③ a few dedicated volunteers arrived with neutralization chemicals. With ④ a little effort and coordinated community action, ⑤ a little progress was gradually made in restoring water clarity.",
                "options": ["①", "②", "③", "④", "⑤ 없음"],
                "ans": 5,
                "exp": "모든 수량 형용사(few fish, little hope, a few volunteers, a little effort, a little progress)가 가산/불가산 명사와 문맥적 긍정/부정에 완벽히 일치하여 사용되었습니다.",
                "conceptRef": "sp_vs_u9_f1"
            }
        ]
    },

    # -------------------------------------------------------------
    # SP-40 (sp_vs Unit 10): other VS another VS the other VS others
    # -------------------------------------------------------------
    {
        "unitNo": 10,
        "legacyUnitNo": 140,
        "title": "SP-40. other VS another VS the other VS others (부정대명사 완벽 정리)",
        "formulaCards": [
            {
                "formulaId": "sp_vs_u10_f1",
                "tag": "another vs other vs the other 구별 공식",
                "en": "One twin wanted to stay home, but the other wanted to go to the park.",
                "ko": "쌍둥이 중 한 명은 집에 있기를 원했지만, 나머지 다른 한 명은 공원에 가기를 원했다.",
                "point": "1. another: 막연한 또 다른 하나 (an + other, 단수명사와 결합). 2. other: 다른 (단독 대명사 불가, other + 복수명사). 3. others: 막연한 다른 사람들/것들 (복수 대명사). 4. the other: 정해진 범위 내에서 '나머지 하나'. 5. the others: 정해진 범위 내에서 '나머지 전부'.",
                "oxCompare": "O: I have two pens; one is red and the other is blue. / X: I have two pens; one is red and another is blue.",
                "trap": "둘(2개) 중 하나는 one, 나머지 하나는 무조건 'the other'입니다. another를 쓰면 3개 이상일 때의 또 다른 하나가 되므로 오답입니다.",
                "quizLink": "수능 및 내신 어법에서 대명사의 지칭 범위(특정 vs 막연)를 묻는 1순위 문항입니다."
            },
            {
                "formulaId": "sp_vs_u10_f2",
                "tag": "Some ~ others ... 대조 표현 및 another + 단수명사",
                "en": "Some people prefer living in bustling cities, while others thrive in quiet countryside.",
                "ko": "어떤 사람들은 번화한 도시에 사는 것을 선호하는 반면, 다른 사람들은 조용한 시골에서 잘 살아간다.",
                "point": "'Some ~ others ...'는 막연한 다수 사이의 대조를 나타내는 표준 구문입니다. 반면 전체 집단이 정해져 있을 때는 'Some ~ the others ...'를 씁니다. 또한 another 뒤에는 반드시 단수 가산명사(another chance)가 옵니다.",
                "oxCompare": "O: Would you like another cup of tea? / X: Would you like other cup of tea?",
                "trap": "other 뒤에는 단수 가산명사를 단독으로 쓸 수 없습니다 (other cups O, other cup X).",
                "quizLink": "대명사와 형용사 용법의 단/복수 매칭을 점검하세요."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "sp_vs_u10_d1",
                "sentence": "The manager rejected this proposal and asked the team to prepare other plan by tomorrow.",
                "underlined": ["The manager rejected", "this proposal and", "asked the team to prepare", "other plan by tomorrow"],
                "wrongIndex": 3,
                "correction": "another plan by tomorrow",
                "explanation": "plan은 단수 가산명사이므로 other 뒤에 올 수 없으며, '또 다른 하나의 계획'을 뜻하는 another plan으로 써야 합니다.",
                "conceptRef": "sp_vs_u10_f1"
            },
            {
                "drillId": "sp_vs_u10_d2",
                "sentence": "She held a heavy suitcase in one hand and held an umbrella with another hand.",
                "underlined": ["She held a heavy suitcase", "in one hand", "and held an umbrella", "with another hand"],
                "wrongIndex": 3,
                "correction": "with the other hand",
                "explanation": "사람의 손은 2개이므로, 한 손이 one hand이면 나머지 다른 한 손은 정해진 나머지 하나인 the other hand가 되어야 합니다.",
                "conceptRef": "sp_vs_u10_f1"
            },
            {
                "drillId": "sp_vs_u10_d3",
                "sentence": "Some students enjoy reading literature, while the others prefer solving mathematics puzzles.",
                "underlined": ["Some students enjoy", "reading literature", "while the others prefer", "solving mathematics puzzles"],
                "wrongIndex": 2,
                "correction": "while others prefer",
                "explanation": "학급 전체 등 정해진 전체 집단이 주어지지 않은 일반적인 대조를 나타낼 때는 'Some ~ others ...' 구문이므로 the others 대신 others를 쓰는 것이 자연스럽습니다.",
                "conceptRef": "sp_vs_u10_f2"
            }
        ],
        "questions": [
            {
                "qId": "sp_vs_u10_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "There are three apples in the basket. One is red, _______ is green, and the third is yellow.",
                "options": ["another", "other", "the other", "others", "the others"],
                "ans": 1,
                "exp": "셋(3개) 중에서 첫 번째는 one, 막연한 또 다른 두 번째 것은 another, 마지막 세 번째가 the third (또는 the other)입니다. 두 번째 사과를 가리키므로 another가 올바릅니다.",
                "conceptRef": "sp_vs_u10_f1"
            },
            {
                "qId": "sp_vs_u10_q2",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것은?",
                "prompt": "I don't like this jacket. Could you please show me _______ ones?",
                "options": ["other", "another", "the other", "others", "one"],
                "ans": 1,
                "exp": "뒤에 복수 대명사 ones가 있으므로 이를 형용사처럼 수식할 수 있는 것은 other(다른)입니다. another 뒤에는 복수형이 올 수 없습니다.",
                "conceptRef": "sp_vs_u10_f2"
            },
            {
                "qId": "sp_vs_u10_q3",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "To know is one thing, and to practice is other.",
                    "We need to consider each other's opinions with respect.",
                    "He gave me two options; I liked one but rejected another.",
                    "Some birds migrate south in winter, but another stay.",
                    "She bought three dresses: one was blue, and others were red."
                ],
                "ans": 2,
                "exp": "'each other's opinions(서로의 의견들)'가 올바르게 쓰인 2번이 정답입니다. 1번은 another, 3번은 the other(2개 중 나머지 하나), 4번은 others, 5번은 the others(나머지 2벌 전부)입니다.",
                "conceptRef": "sp_vs_u10_f1"
            },
            {
                "qId": "sp_vs_u10_q4",
                "instruction": "다음 문장의 괄호 (A), (B)에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "The two negotiators argued intensely; one demanded immediate concessions, while (A) [another / the other] insisted on adhering to the (B) [original / originally] contract terms.",
                "options": [
                    "the other - original",
                    "another - original",
                    "the other - originally",
                    "another - originally",
                    "others - original"
                ],
                "ans": 1,
                "exp": "(A) 두 명의 협상가(The two negotiators) 중 한 명은 one, 나머지 한 명은 the other이며, (B) contract terms(명사구)를 수식하는 형용사 original이 올바릅니다.",
                "conceptRef": "sp_vs_u10_f1"
            },
            {
                "qId": "sp_vs_u10_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Sociologists study how social norms vary across cultures. What is considered polite in one country may be perceived as offensive in ① another. In business negotiations, some cultures emphasize direct verbal communication, while ② others rely heavily on nonverbal cues. When dealing with cultural differences, one should never assume that ③ one's own customs are superior to ④ that of ⑤ others.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 4,
                "exp": "비교 대상이 복수 명사인 one's own customs이므로 단수 대명사 that이 아니라 복수 대명사 those of others로 받아야 합니다.",
                "conceptRef": "sp_vs_u10_f1"
            }
        ]
    }
]

if __name__ == '__main__':
    print("Special Lectures Expansion Data Loaded successfully:")
    print(f"  sp_terms new units: {len(SPECIAL_TERMS_NEW)}")
    print(f"  sp_writing new units: {len(SPECIAL_WRITING_NEW)}")
    print(f"  sp_csat new units: {len(SPECIAL_CSAT_NEW)}")
    print(f"  sp_vs new units: {len(SPECIAL_VS_NEW)}")
