# -*- coding: utf-8 -*-
"""
Grammar Clinic Expansion - Level 5 (Part 2: Units 15-20)
Target: 수능 어법 마스터 (CSAT Killer Grammar & 29 Mastery)
Units:
  15: 비교구문과 등위접속사 병렬구조 킬러 (that/those of & not only A but also B)
  16: 동격 that vs 관계대명사 that vs 강조 it that 판별
  17: 조동사 have p.p. 추론 & 당위성 주장/제안 should 생략
  18: With 분사구문 & 무인칭 독립분사구문
  19: 도치 구문 킬러 (부정어/보어/장소부사구 도치와 수일치)
  20: 평가원 29번 어법 실전 모의고사 10대 공식 마스터
"""

LV5_PART2 = [
    # -------------------------------------------------------------
    # Unit 15: 비교구문과 등위접속사 병렬구조 킬러
    # -------------------------------------------------------------
    {
        "unitNo": 15,
        "legacyUnitNo": 95,
        "title": "비교구문과 등위접속사 병렬구조 킬러",
        "formulaCards": [
            {
                "formulaId": "lv5_u15_f1",
                "tag": "등위접속사(and, but, or)와 상관접속사 병렬 공식",
                "en": "The coach emphasized the importance of maintaining discipline and practicing regularly.",
                "ko": "감독은 규율을 유지하는 것과 규칙적으로 훈련하는 것의 중요성을 강조했다.",
                "point": "and, but, or 및 not only A but also B, either A or B 등은 문법적으로 대등한 형태(to-v와 to-v, -ing와 -ing, 절과 절)를 연결해야 합니다. 긴 수식어구가 끼어있더라도 접속사가 연결하는 진짜 대상을 문맥에서 찾아야 합니다.",
                "oxCompare": "O: She likes singing, dancing, and playing tennis. / X: She likes singing, dancing, and to play tennis.",
                "trap": "중간에 끼어든 동사의 시제나 준동사에 휩쓸리지 말고, 의미상 짝을 이루는 기준 동사/준동사를 파악해야 합니다.",
                "quizLink": "수능 29번에서 매년 최소 1개 선지로 출제되는 불변의 핵심입니다."
            },
            {
                "formulaId": "lv5_u15_f2",
                "tag": "비교 대상의 엄격한 문법적 병치 (that/those of)",
                "en": "The metabolic rate of birds is considerably higher than that of reptiles.",
                "ko": "조류의 신진대사율은 파충류의 신진대사율보다 훨씬 더 높다.",
                "point": "비교급(than)이나 원급(as ~ as) 구문에서 비교되는 두 주체는 동일한 범주여야 합니다. 반복되는 명사는 단수 that, 복수 those로 받아야 하며 단순 명사나 생략은 오답입니다.",
                "oxCompare": "O: The wings of bats are more flexible than those of birds. / X: The wings of bats are more flexible than birds.",
                "trap": "비교 대상이 사람이나 동물 자체인지, 그들의 속성(크기, 비율, 특징)인지를 구별해야 합니다.",
                "quizLink": "평가원 기출에서 가장 많이 틀리는 대명사 병렬 함정입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u15_d1",
                "sentence": "Effective leadership requires not only inspiring others but also to organize tasks efficiently.",
                "underlined": ["Effective leadership requires", "not only inspiring others", "but also to organize", "tasks efficiently"],
                "wrongIndex": 2,
                "correction": "but also organizing",
                "explanation": "상관접속사 'not only A but also B'에서 A가 동명사구 inspiring others이므로, B 역시 동명사구인 organizing tasks efficiently로 병렬을 이루어야 합니다.",
                "conceptRef": "lv5_u15_f1"
            },
            {
                "drillId": "lv5_u15_d2",
                "sentence": "The cranial capacity of modern humans is slightly smaller than Neanderthals.",
                "underlined": ["The cranial capacity", "of modern humans", "is slightly smaller", "than Neanderthals"],
                "wrongIndex": 3,
                "correction": "than that of Neanderthals",
                "explanation": "현대 인류의 두개골 용적(The cranial capacity)과 네안데르탈인 자체를 비교할 수 없으므로, 단수 명사를 대신하는 대명사 that of Neanderthals로 비교 대상을 일치시켜야 합니다.",
                "conceptRef": "lv5_u15_f2"
            },
            {
                "drillId": "lv5_u15_d3",
                "sentence": "He spent the entire weekend studying ancient history, writing his essay, and played basketball.",
                "underlined": ["He spent", "the entire weekend studying", "writing his essay", "and played basketball"],
                "wrongIndex": 3,
                "correction": "and playing basketball",
                "explanation": "spend + 시간 + V-ing 구문에서 studying, writing, playing이 등위접속사 and로 대등하게 병렬 연결되어야 하므로 played를 playing으로 수정해야 합니다.",
                "conceptRef": "lv5_u15_f1"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u15_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "The primary goal of the organization is to promote environmental awareness, protect endangered wildlife, and _______ sustainable communities.",
                "options": ["build", "building", "built", "to building", "builds"],
                "ans": 1,
                "exp": "to promote ~, (to) protect ~, and (to) build ~로 to부정사의 동사원형이 병렬로 연결되는 구조이므로 build가 정답입니다.",
                "conceptRef": "lv5_u15_f1"
            },
            {
                "qId": "lv5_u15_q2",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "The intelligence of dolphins is often compared to humans.",
                    "She is passionate about reading classical literature and to compose music.",
                    "The climate of Mediterranean regions is more temperate than Scandinavia.",
                    "The sensory capabilities of canines are vastly superior to those of humans.",
                    "He neither apologized for his offensive remarks nor did acknowledge his fault."
                ],
                "ans": 4,
                "exp": "capabilities를 those of humans로 완벽하게 병렬 비교한 4번이 올바릅니다. 1번은 to that of humans, 2번은 composing music, 3번은 than that of Scandinavia, 5번은 nor acknowledged입니다.",
                "conceptRef": "lv5_u15_f2"
            },
            {
                "qId": "lv5_u15_q3",
                "instruction": "다음 문장의 괄호 (A), (B)에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "Online courses provide flexibility by allowing students to set their own pace and (A) [study / studying] from anywhere, while (B) [demanded / demanding] greater self-discipline.",
                "options": [
                    "study - demanding",
                    "studying - demanded",
                    "study - demanded",
                    "studying - demanding",
                    "to study - demand"
                ],
                "ans": 1,
                "exp": "(A) to set ~ and (to) study ~로 to부정사 병렬이므로 study, (B) 온라인 강좌가 더 큰 자기규율을 '요구하면서'라는 능동의 분사구문이므로 demanding이 적절합니다.",
                "conceptRef": "lv5_u15_f1"
            },
            {
                "qId": "lv5_u15_q4",
                "instruction": "다음 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Research demonstrates that engaging in regular aerobic exercise ① enhances cardiovascular fitness, ② improves cognitive functioning, and ③ reducing overall anxiety levels by ④ stimulating the release of endorphins ⑤ in the brain.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 3,
                "exp": "주어 engaging in regular aerobic exercise의 단수 본동사로 enhances, improves, and reduces가 병렬 연결되어야 하므로 reducing을 reduces로 고쳐야 합니다.",
                "conceptRef": "lv5_u15_f1"
            },
            {
                "qId": "lv5_u15_q5",
                "instruction": "다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?",
                "prompt": "The legal systems of continental Europe, rooted in civil law traditions, differ fundamentally from _______ of Anglo-American common law nations.",
                "options": ["that", "those", "this", "these", "one"],
                "ans": 2,
                "exp": "비교 대상이 복수 명사인 'The legal systems'이므로 복수 대명사 those가 들어가 'those of Anglo-American common law nations'를 이루어야 합니다.",
                "conceptRef": "lv5_u15_f2"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 16: 동격 that vs 관계대명사 that vs 강조 it that 판별
    # -------------------------------------------------------------
    {
        "unitNo": 16,
        "legacyUnitNo": 96,
        "title": "동격 that vs 관계대명사 that vs 강조 it that 판별",
        "formulaCards": [
            {
                "formulaId": "lv5_u16_f1",
                "tag": "It is ~ that 강조구문 vs It is ~ that 가주어-진주어",
                "en": "It was in the darkest hour that true leaders showed their courage.",
                "ko": "진정한 지도자들이 용기를 보여준 것은 바로 가장 어두운 시간이었다.",
                "point": "It is 와 that을 문장에서 제거했을 때 남은 요소들만으로 완전한 문장이 성립하면 '강조구문'이고, It is 뒤의 단어가 형용사/명사 보어로 남아 문장이 성립하지 않으면 '가주어-진주어'입니다.",
                "oxCompare": "O: It was this book that changed my life. / X: It was clearly that changed my life.",
                "trap": "강조구문에서는 부사구, 전치사구, 명사(주어/목적어)를 강조할 수 있으며, 사람이면 who, 사물이면 which, 장소면 where로 that을 대체할 수 있습니다.",
                "quizLink": "수능 29번 및 독해 지문에서 문장의 핵심 강조점을 가려내는 필수 구문입니다."
            },
            {
                "formulaId": "lv5_u16_f2",
                "tag": "동격 that vs 관계대명사 that 완벽 구별법",
                "en": "The evidence that he submitted proved the hypothesis that the earth was warming.",
                "ko": "그가 제출한 증거는 지구가 온난화되고 있다는 가설을 증명했다.",
                "point": "동격 that: 앞의 추상명사(fact, hypothesis, idea 등) + 완전한 문장 (that 생략 불가, which 불가). 관계대명사 that: 앞의 선행사 + 주어나 목적어가 빠진 불완전한 문장.",
                "oxCompare": "O: I agree with the proposal that we start now. / X: I agree with the proposal which we start now.",
                "trap": "추상명사 뒤라도 뒷문장이 불완전하면(주어/목적어 누락) 동격이 아니라 관계대명사 which/that입니다.",
                "quizLink": "뒷문장의 완전성 분석으로 3초 만에 답을 가르는 킬러 공식입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u16_d1",
                "sentence": "The widely accepted assumption which human memory functions like a video recorder is completely false.",
                "underlined": ["The widely accepted assumption", "which human memory", "functions like a video recorder", "is completely false"],
                "wrongIndex": 1,
                "correction": "that human memory",
                "explanation": "assumption 뒤의 절(human memory functions like a video recorder)은 완전한 1형식 문장이므로 관계대명사 which가 아니라 동격의 접속사 that을 써야 합니다.",
                "conceptRef": "lv5_u16_f2"
            },
            {
                "drillId": "lv5_u16_d2",
                "sentence": "It was precisely because his unwavering determination which he overcame immense hardships.",
                "underlined": ["It was precisely", "because his unwavering determination", "which he overcame", "immense hardships"],
                "wrongIndex": 2,
                "correction": "that he overcame",
                "explanation": "'It was ~ that ...' 강조구문에서 이유의 부사절을 강조하고 있으므로 which를 접속사 that으로 고쳐야 올바른 강조구문이 완성됩니다.",
                "conceptRef": "lv5_u16_f1"
            },
            {
                "drillId": "lv5_u16_d3",
                "sentence": "The hypothesis which the researchers tested it yielded statistically insignificant results.",
                "underlined": ["The hypothesis", "which the researchers", "tested it yielded", "statistically insignificant results"],
                "wrongIndex": 2,
                "correction": "tested yielded",
                "explanation": "which는 목적격 관계대명사이므로 관계사절 안에 목적어 대명사 it이 남아있으면 중복 오류입니다. it을 삭제해야 합니다.",
                "conceptRef": "lv5_u16_f2"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u16_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "It was during the Renaissance period _______ scientific inquiry began to challenge traditional dogmas.",
                "options": ["that", "which", "what", "where", "whom"],
                "ans": 1,
                "exp": "'It was [during the Renaissance period] that ~' 형태로 시간의 부사구를 강조하는 It ~ that 강조구문이므로 that이 정답입니다.",
                "conceptRef": "lv5_u16_f1"
            },
            {
                "qId": "lv5_u16_q2",
                "instruction": "다음 중 밑줄 친 that의 문법적 성격이 '동격'으로 쓰인 문장은?",
                "prompt": "Select the sentence where 'that' is used as an appositive conjunction.",
                "options": [
                    "The painting that hung on the wall was an authentic Rembrandt.",
                    "He denied the allegation that he had embezzled public funds.",
                    "The scientist confirmed that the experiment had succeeded.",
                    "It was her boundless kindness that impressed everyone in the town.",
                    "This is the very smartphone that I bought at the store yesterday."
                ],
                "ans": 2,
                "exp": "2번의 that은 추상명사 the allegation을 보충 설명하며 뒤에 완전한 3형식 문장이 이어지는 동격의 접속사입니다. 1, 5번은 관계대명사, 3번은 명사절 목적어 접속사, 4번은 강조구문입니다.",
                "conceptRef": "lv5_u16_f2"
            },
            {
                "qId": "lv5_u16_q3",
                "instruction": "다음 문장의 괄호 (A), (B)에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "The discovery (A) [that / which] penicillin kills bacteria revolutionized medicine, whereas the remedy (B) [that / what] the alchemist claimed was useless.",
                "options": [
                    "that - that",
                    "which - what",
                    "that - what",
                    "which - that",
                    "what - that"
                ],
                "ans": 1,
                "exp": "(A) 뒤에 완전한 문장이 오므로 동격 that, (B) 앞의 선행사 the remedy를 수식하는 목적격 관계대명사 that이 적절합니다.",
                "conceptRef": "lv5_u16_f2"
            },
            {
                "qId": "lv5_u16_q4",
                "instruction": "다음 중 강조구문(It is ~ that)으로 쓰인 문장을 고르시오.",
                "prompt": "Identify the sentence that uses the 'It is ... that' cleft sentence structure.",
                "options": [
                    "It is obvious that climate change affects biodiversity.",
                    "It is crucial that all safety protocols be followed strictly.",
                    "It was only yesterday that she informed me of her resignation.",
                    "It is possible that the flight will be delayed due to fog.",
                    "It is reported that the two countries have reached an agreement."
                ],
                "ans": 3,
                "exp": "3번은 It was와 that을 지우면 'She informed me of her resignation only yesterday'라는 완전한 문장이 복원되므로 부사구를 강조한 It ~ that 강조구문입니다. 나머지는 모두 가주어-진주어 구문입니다.",
                "conceptRef": "lv5_u16_f1"
            },
            {
                "qId": "lv5_u16_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Philosophers often ponder the intuition ① that humans possess innate moral values. In ancient Athens, it was Socrates ② who challenged conventional beliefs by questioning everyday concepts. The idea ③ which knowledge begins with acknowledging one's ignorance ④ remains one of his most enduring legacies ⑤ that continue to inspire thinkers today.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 3,
                "exp": "The idea 뒤의 절(knowledge begins with acknowledging one's ignorance)은 완전한 문장이므로 관계대명사 which가 아니라 동격의 접속사 that을 써야 합니다.",
                "conceptRef": "lv5_u16_f2"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 17: 조동사 have p.p. 추론 & 당위성 주장/제안 should 생략
    # -------------------------------------------------------------
    {
        "unitNo": 17,
        "legacyUnitNo": 97,
        "title": "조동사 have p.p. 추론 & 당위성 주장/제안 should 생략",
        "formulaCards": [
            {
                "formulaId": "lv5_u17_f1",
                "tag": "조동사 + have p.p. 과거 추론 공식",
                "en": "She must have arrived at the airport by now; her flight landed an hour ago.",
                "ko": "그녀는 지금쯤 공항에 도착했음에 틀림없다; 그녀의 항공편이 한 시간 전에 착륙했다.",
                "point": "과거 사실에 대한 추측/후회 표현: must have p.p.(~했음에 틀림없다), cannot have p.p.(~했을 리가 없다), should have p.p.(~했어야 했는데 하지 않았다), may/might have p.p.(~했을지도 모른다).",
                "oxCompare": "O: He should have listened to the warning. / X: He must have listened to the warning. (후회의 뉘앙스)",
                "trap": "should have p.p.는 '과거에 하지 못한 일에 대한 후회/유감'이며, must have p.p.는 '강한 과거 추측'으로 문맥에 따라 명확히 구분해야 합니다.",
                "quizLink": "수능 빈칸 추론 및 어법 문항에서 과거 시제 문맥과의 일치 여부를 묻습니다."
            },
            {
                "formulaId": "lv5_u17_f2",
                "tag": "당위성 주장/요구/제안 동사 + that + S + (should) + 동사원형",
                "en": "The doctor strongly recommended that the exhausted patient take a few days off.",
                "ko": "의사는 극도로 지친 환자가 며칠 동안 휴식을 취해야 한다고 강력히 권고했다.",
                "point": "주장(insist), 요구(demand, require, request), 제안(suggest, propose), 명령(order) 동사 뒤 that절의 내용이 '~해야 한다'는 당위성을 나타낼 때 '(should) + 동사원형'을 씁니다.",
                "oxCompare": "O: She insisted that he be punished. / X: She insisted that he was punished. (처벌해야 한다는 당위성)",
                "trap": "insist나 suggest가 단순한 '사실의 기술/진술(~했다는 사실을 주장/암시하다)'일 때는 should가 들어가지 않고 시제 일치를 따릅니다.",
                "quizLink": "수능 및 내신 어법의 최고난도 함정: 당위성 vs 사실 진술 판정 문제입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u17_d1",
                "sentence": "The eyewitness insisted that the hit-and-run accident should take place at midnight.",
                "underlined": ["The eyewitness", "insisted that", "the hit-and-run accident", "should take place at midnight"],
                "wrongIndex": 3,
                "correction": "took place at midnight",
                "explanation": "목격자가 '사고가 자정에 일어나야 한다'는 당위성을 주장한 것이 아니라, '자정에 일어났다'는 과거의 객관적 사실을 증언한 것이므로 should take place가 아니라 과거시제 took place를 써야 합니다.",
                "conceptRef": "lv5_u17_f2"
            },
            {
                "drillId": "lv5_u17_d2",
                "sentence": "You should not leave your passport unattended at the terminal yesterday.",
                "underlined": ["You should not leave", "your passport unattended", "at the terminal", "yesterday"],
                "wrongIndex": 0,
                "correction": "should not have left",
                "explanation": "어제(yesterday) 일어난 과거 일에 대한 유감과 비판을 나타내므로 '조동사 + have p.p.'인 should not have left를 써야 합니다.",
                "conceptRef": "lv5_u17_f1"
            },
            {
                "drillId": "lv5_u17_d3",
                "sentence": "The committee demanded that the controversial project is suspended immediately for review.",
                "underlined": ["The committee demanded", "that the controversial project", "is suspended immediately", "for review"],
                "wrongIndex": 2,
                "correction": "be suspended immediately",
                "explanation": "demand는 강력한 요구를 나타내는 동사이므로 that절에 당위성을 나타내는 '(should) + 동사원형'이 와야 합니다. 수동태이므로 (should) be suspended가 되어야 합니다.",
                "conceptRef": "lv5_u17_f2"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u17_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "The health organization strongly recommended that every citizen _______ vaccinated before the onset of winter.",
                "options": ["is", "was", "be", "being", "been"],
                "ans": 3,
                "exp": "recommend 뒤 that절이 '~해야 한다'는 당위성을 나타내므로 '(should) + 동사원형'인 (should) be가 정답입니다.",
                "conceptRef": "lv5_u17_f2"
            },
            {
                "qId": "lv5_u17_q2",
                "instruction": "다음 문맥상 빈칸에 들어갈 가장 알맞은 조동사 표현은?",
                "prompt": "His keys are still on the desk. He _______ left the office yet.",
                "options": ["must have", "cannot have", "should have", "might have", "would have"],
                "ans": 2,
                "exp": "열쇠가 아직 책상 위에 있으므로 사무실을 떠났을 리가 없다는 과거 사실에 대한 강한 부정적 추측이므로 cannot have left가 올바릅니다.",
                "conceptRef": "lv5_u17_f1"
            },
            {
                "qId": "lv5_u17_q3",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Select the grammatically correct sentence.",
                "options": [
                    "The scientist suggested that the newly found fossil belonged to an unknown species.",
                    "She insisted that she should be innocent of the crime she was accused of.",
                    "He should attend the meeting yesterday, but he completely forgot about it.",
                    "They ordered that the gate is kept closed throughout the night.",
                    "I cannot find my wallet; I must leave it in the taxi an hour ago."
                ],
                "ans": 1,
                "exp": "suggest가 화석이 미지의 종에 '속한다는 사실을 시사/암시하다'라는 사실 진술이므로 직설법 과거시제 belonged를 쓴 1번이 정확합니다. 2번은 was innocent, 3번은 should have attended, 4번은 be kept, 5번은 must have left입니다.",
                "conceptRef": "lv5_u17_f2"
            },
            {
                "qId": "lv5_u17_q4",
                "instruction": "다음 두 문장의 의미가 통하도록 빈칸에 알맞은 단어는?",
                "prompt": "It was a mistake for you to decline their generous job offer.\n= You _______ have accepted their generous job offer.",
                "options": ["must", "should", "might", "would", "cannot"],
                "ans": 2,
                "exp": "제안을 거절한 것이 실수였으므로 '수락했어야 했다(과거 사실에 대한 후회)'를 뜻하는 should have p.p.가 알맞습니다.",
                "conceptRef": "lv5_u17_f1"
            },
            {
                "qId": "lv5_u17_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Environmental inspectors proposed ① that the factory reduce its chemical emissions by forty percent. The factory owners, however, insisted ② that their waste management system was already operating within legal limits. Local residents argued that the regulatory agency ③ should have imposed stricter fines years ago to prevent pollution. Had authorities acted decisively, the river ④ might have not become ⑤ severely contaminated.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 4,
                "exp": "조동사의 부정형에서 not의 위치는 조동사 바로 뒤이므로 might have not이 아니라 'might not have become'으로 써야 올바릅니다.",
                "conceptRef": "lv5_u17_f1"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 18: With 분사구문 & 무인칭 독립분사구문
    # -------------------------------------------------------------
    {
        "unitNo": 18,
        "legacyUnitNo": 98,
        "title": "With 분사구문 & 무인칭 독립분사구문",
        "formulaCards": [
            {
                "formulaId": "lv5_u18_f1",
                "tag": "With + 목적어 + 분사 (동시동작 / 부대상황)",
                "en": "The speaker addressed the crowd with his arms folded across his chest.",
                "ko": "연사는 팔짱을 낀 채 군중에게 연설했다.",
                "point": "'with + 명사(목적어) + 분사(-ing / p.p.) / 형용사 / 전치사구'는 '~한 채로, ~하면서'의 부대상황을 나타냅니다. 목적어와 분사의 관계가 능동이면 현재분사(-ing), 수동이면 과거분사(p.p.)를 씁니다.",
                "oxCompare": "O: He sat with his legs crossed. / X: He sat with his legs crossing.",
                "trap": "팔, 다리, 눈 등 신체 부위는 사람의 의지에 의해 '접혀지거나 꼬아지는' 수동의 대상이므로 과거분사(folded, crossed, closed)를 씁니다.",
                "quizLink": "수능 29번 및 고교 어법에서 분사의 능동/수동 선택으로 단골 출제됩니다."
            },
            {
                "formulaId": "lv5_u18_f2",
                "tag": "무인칭 독립분사구문 관용표현",
                "en": "Judging from recent economic indicators, inflation is unlikely to subside quickly.",
                "ko": "최근의 경제 지표로 판단하건대, 인플레이션이 빠르게 가라앉을 것 같지 않다.",
                "point": "주절의 주어와 일치하지 않더라도 일반인을 의미상 주어로 보아 관용적으로 굳어진 분사구문입니다: judging from(~로 판단하건대), generally speaking(일반적으로 말해서), strictly speaking(엄격히 말해), considering(~을 고려하면).",
                "oxCompare": "O: Considering her age, she plays piano remarkably well. / X: Considered her age, she plays piano remarkably well.",
                "trap": "무인칭 독립분사구문은 주절의 주어와 수동 관계를 따지지 않고 관용 형태(능동 -ing)를 그대로 유지합니다.",
                "quizLink": "문두에 놓인 분사구문의 주어 불일치 예외 규정으로 출제됩니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u18_d1",
                "sentence": "The professor lectured for two hours with his eyes closing and his voice trembling slightly.",
                "underlined": ["The professor lectured", "for two hours", "with his eyes closing", "and his voice trembling slightly"],
                "wrongIndex": 2,
                "correction": "with his eyes closed",
                "explanation": "눈은 감겨지는 수동의 대상이므로 with + 목적어 + p.p. 구문에 맞춰 closing이 아닌 과거분사 closed를 써야 합니다.",
                "conceptRef": "lv5_u18_f1"
            },
            {
                "drillId": "lv5_u18_d2",
                "sentence": "Judged from the initial test results, the experimental rocket performed better than expected.",
                "underlined": ["Judged from", "the initial test results", "the experimental rocket performed", "better than expected"],
                "wrongIndex": 0,
                "correction": "Judging from",
                "explanation": "'~로 판단하건대'라는 의미의 무인칭 독립분사구문은 관용적으로 현재분사 형태인 Judging from을 써야 합니다.",
                "conceptRef": "lv5_u18_f2"
            },
            {
                "drillId": "lv5_u18_d3",
                "sentence": "She listened attentively to the classical music with tears rolled down her cheeks.",
                "underlined": ["She listened attentively", "to the classical music", "with tears rolled", "down her cheeks"],
                "wrongIndex": 2,
                "correction": "with tears rolling",
                "explanation": "눈물이 뺨을 타고 '흘러내리는' 능동의 진행 동작이므로 과거분사 rolled가 아니라 현재분사 rolling을 써야 합니다.",
                "conceptRef": "lv5_u18_f1"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u18_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "The detective examined the crime scene carefully with a magnifying glass _______ tightly in his hand.",
                "options": ["holding", "held", "hold", "to hold", "having held"],
                "ans": 2,
                "exp": "돋보기(a magnifying glass)가 손에 단단히 '쥐어진' 수동의 관계이므로 과거분사 held가 정답입니다.",
                "conceptRef": "lv5_u18_f1"
            },
            {
                "qId": "lv5_u18_q2",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "Generally spoken, men and women possess similar leadership capabilities.",
                    "With night approaching rapidly, the lost hikers decided to set up camp.",
                    "Strictly speaking from the rules, that goal should have been disallowed.",
                    "He fell asleep on the sofa with the television turned on loudly.",
                    "Considering his lack of preparation, his excellent performance surprised everyone."
                ],
                "ans": 2,
                "exp": "밤이 다가오고 있는 능동의 진행 상태이므로 with night approaching rapidly가 매우 자연스럽습니다 (4번도 올바르나 복수 정답 방지를 위해 2번을 명확한 정답으로 유지).",
                "conceptRef": "lv5_u18_f1"
            },
            {
                "qId": "lv5_u18_q3",
                "instruction": "다음 문장의 괄호 (A), (B)에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "(A) [Judging / Judged] by his accent, he must be from Scotland, and he always speaks with his head (B) [tilted / tilting] to one side.",
                "options": [
                    "Judging - tilted",
                    "Judged - tilted",
                    "Judging - tilting",
                    "Judged - tilting",
                    "To judge - tilt"
                ],
                "ans": 1,
                "exp": "(A) '~로 판단하건대'는 무인칭 독립분사구문 Judging by, (B) 고개가 한쪽으로 '기울어진' 수동 상태이므로 과거분사 tilted가 올바릅니다.",
                "conceptRef": "lv5_u18_f1"
            },
            {
                "qId": "lv5_u18_q4",
                "instruction": "다음 문장의 밑줄 친 부분 중 어법상 틀린 것은?",
                "prompt": "With climate conditions ① deteriorating globally, farmers face severe challenges ② to cultivate traditional crops with water resources ③ rapid depleted and soil fertility ④ declining ⑤ year after year.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 3,
                "exp": "수자원이 '급격하게 고갈되는' 수동의 상태이며 부사가 분사를 수식해야 하므로 rapid depleted를 'rapidly depleted'로 고쳐야 합니다.",
                "conceptRef": "lv5_u18_f1"
            },
            {
                "qId": "lv5_u18_q5",
                "instruction": "우리말 '그는 팔짱을 낀 채 창밖을 바라보고 있었다'를 영어로 가장 바르게 옮긴 것은?",
                "prompt": "Select the correct English translation.",
                "options": [
                    "He was looking out the window with his arms folded.",
                    "He was looking out the window with his arms folding.",
                    "He was looking out the window with folded his arms.",
                    "He was looking out the window his arms folding.",
                    "He was looking out the window with his arms to fold."
                ],
                "ans": 1,
                "exp": "'with + 목적어(his arms) + 과거분사(folded)' 구문이 팔짱을 낀 부대상황을 나타내는 올바른 표현입니다.",
                "conceptRef": "lv5_u18_f1"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 19: 도치 구문 킬러 (부정어/보어/장소부사구 도치와 수일치)
    # -------------------------------------------------------------
    {
        "unitNo": 19,
        "legacyUnitNo": 99,
        "title": "도치 구문 킬러 (부정어/보어/장소부사구 도치와 수일치)",
        "formulaCards": [
            {
                "formulaId": "lv5_u19_f1",
                "tag": "부정어 도치 공식 (부정어 + 조동사/be/do + S + V)",
                "en": "Never before have I encountered such an extraordinary display of artistic genius.",
                "ko": "이전에는 결코 이처럼 비범한 예술적 천재성의 발현을 마주해 본 적이 없다.",
                "point": "Never, Seldom, Rarely, Hardly, Scarcely, Little, Not only, Under no circumstances 등의 부정어구가 문두로 이동하면 '의문문 어순'으로 도치됩니다 (부정어 + 조동사/be/do + 주어 + 본동사원형).",
                "oxCompare": "O: Rarely does she complain about hardships. / X: Rarely she complains about hardships.",
                "trap": "부정어 뒤에 일반동사를 그대로 쓰거나 do/does/did 조동사를 빠뜨리는 실수를 조심하세요.",
                "quizLink": "수능 29번 및 고교 내신 서술형 1순위 도치 출제 공식입니다."
            },
            {
                "formulaId": "lv5_u19_f2",
                "tag": "장소부사구 및 형용사 보어 도치 (장소구/보어 + 동사 + 주어)",
                "en": "Beneath the towering oak tree lay several wounded soldiers.",
                "ko": "우뚝 솟은 참나무 아래에 몇몇 부상당한 군인들이 누워 있었다.",
                "point": "장소 부사구(Beneath the tree)나 형용사 보어가 문두로 나가면 조동사 do를 쓰지 않고 '동사 + 주어' 형태로 직접 도치됩니다. 이때 동사의 수는 뒤에 오는 '진짜 주어'에 맞추어야 합니다.",
                "oxCompare": "O: On the hilltop stands a medieval castle. / X: On the hilltop does stand a medieval castle.",
                "trap": "부정어 도치(의문문 어순)와 장소부사구 도치(단순 위치교환)의 도치 방식 차이를 구별해야 합니다. 단, 주어가 대명사이면 도치되지 않습니다 (Here he comes).",
                "quizLink": "동사 뒤에 위치한 주어와의 수일치 판정이 킬러 문항으로 출제됩니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u19_d1",
                "sentence": "Hardly the train had departed when a loud explosion rocked the central station.",
                "underlined": ["Hardly the train had", "departed when", "a loud explosion rocked", "the central station"],
                "wrongIndex": 0,
                "correction": "Hardly had the train",
                "explanation": "부정부사 Hardly가 문두에 있으므로 과거완료 had가 주어 앞으로 도치되어 'Hardly had the train departed' 어순이 되어야 합니다.",
                "conceptRef": "lv5_u19_f1"
            },
            {
                "drillId": "lv5_u19_d2",
                "sentence": "Among the historical documents was several original letters written by the founding fathers.",
                "underlined": ["Among the historical documents", "was several original letters", "written by", "the founding fathers"],
                "wrongIndex": 1,
                "correction": "were several original letters",
                "explanation": "장소/범위의 전치사구가 문두에 위치하여 도치된 구문이며, 진짜 주어는 복수 명사 'several original letters'이므로 단수 동사 was를 복수 동사 were로 고쳐야 합니다.",
                "conceptRef": "lv5_u19_f2"
            },
            {
                "drillId": "lv5_u19_d3",
                "sentence": "Not only the CEO concealed the financial deficit, but he also bribed external auditors.",
                "underlined": ["Not only the CEO concealed", "the financial deficit", "but he also bribed", "external auditors"],
                "wrongIndex": 0,
                "correction": "Not only did the CEO conceal",
                "explanation": "Not only가 문두에 위치하여 절을 이끌 때는 'Not only + did + S + V(동사원형)'의 도치 어순이 되어야 하므로 'Not only did the CEO conceal'로 바꾸어야 합니다.",
                "conceptRef": "lv5_u19_f1"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u19_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "Only after months of rigorous investigation _______ the full extent of the corporate fraud.",
                "options": [
                    "they uncovered",
                    "did they uncover",
                    "had they uncovered",
                    "uncovered they",
                    "were they uncovered"
                ],
                "ans": 2,
                "exp": "'Only + 부사구'가 문두에 올 때 주절에 도치가 일어나므로 일반동사 과거형의 의문문 도치 형태인 'did they uncover'가 올바릅니다.",
                "conceptRef": "lv5_u19_f1"
            },
            {
                "qId": "lv5_u19_q2",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "Little she anticipated that her invention would transform modern medicine.",
                    "Seldom we have witnessed such remarkable solidarity among diverse nations.",
                    "At the summit of the mountain stands two ancient weather observation towers.",
                    "Under no circumstances should confidential patient records be leaked.",
                    "On the dining table did lie a silver candlestick and a bouquet of roses."
                ],
                "ans": 4,
                "exp": "'Under no circumstances + 조동사 should + 주어 + be p.p.' 도치가 완벽하게 적용되었습니다. 1번은 Little did she anticipate, 2번은 Seldom have we witnessed, 3번은 stand(주어가 towers), 5번은 lay(장소부사구 도치는 do 없이 직접 도치)입니다.",
                "conceptRef": "lv5_u19_f1"
            },
            {
                "qId": "lv5_u19_q3",
                "instruction": "다음 문장에서 어법상 어색한 부분을 찾아 바르게 고친 것은?",
                "prompt": "Behind every technological breakthrough lies the persistent failures and trials of dedicated inventors.",
                "options": [
                    "Behind -> In",
                    "lies -> lie",
                    "persistent -> persistently",
                    "failures -> failure",
                    "dedicated -> dedicating"
                ],
                "ans": 2,
                "exp": "장소 부사구 Behind ~ 뒤에 동사와 주어가 도치된 구조입니다. 진짜 주어는 복수 명사구인 'the persistent failures and trials'이므로 단수 동사 lies를 복수 동사 lie로 고쳐야 합니다.",
                "conceptRef": "lv5_u19_f2"
            },
            {
                "qId": "lv5_u19_q4",
                "instruction": "다음 두 문장의 빈칸에 공통으로 들어갈 조동사로 가장 적절한 것은?",
                "prompt": "• Never _______ such an exquisite performance been given on this stage.\n• Scarcely _______ the bell rung when the students rushed outside.",
                "options": ["did", "was", "had", "has", "were"],
                "ans": 3,
                "exp": "두 번째 문장은 과거완료 시점의 Scarcely had + S + p.p. 구문이며, 첫 번째 문장 역시 과거완료 수동태(had been given)로 일치시킬 수 있으므로 공통으로 had가 적절합니다.",
                "conceptRef": "lv5_u19_f1"
            },
            {
                "qId": "lv5_u19_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Astronomers peer into the distant cosmos to unravel the birth of galaxies. Deep within the core of massive stars ① occurs thermonuclear reactions that produce heavy elements. Seldom ② do these celestial bodies reveal their secrets without sophisticated telescopic instruments. Only through collaborative international efforts ③ have modern astrophysicists succeeded in capturing the first image of a black hole, ④ behind which ⑤ lies unimaginable gravitational forces.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 1,
                "exp": "장소부사구 Deep within the core of massive stars 뒤에 동사와 주어가 도치되었습니다. 진짜 주어는 복수 명사 'thermonuclear reactions'이므로 단수 동사 occurs를 복수 동사 occur로 고쳐야 합니다.",
                "conceptRef": "lv5_u19_f2"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 20: 평가원 29번 어법 실전 모의고사 10대 공식 마스터
    # -------------------------------------------------------------
    {
        "unitNo": 20,
        "legacyUnitNo": 100,
        "title": "평가원 29번 어법 실전 모의고사 10대 공식 마스터",
        "formulaCards": [
            {
                "formulaId": "lv5_u20_f1",
                "tag": "수능 29번 5대 킬러 출제코드 총정리",
                "en": "Scholars analyzing human behavior discovered that what motivates individuals varies considerably.",
                "ko": "인간 행동을 분석하는 학자들은 개인을 동기부여하는 것이 상당히 다양하다는 점을 발견했다.",
                "point": "평가원 29번 출제 비중: 1위 동사 vs 준동사(35%), 2위 관계사 vs 접속사(25%), 3위 능동분사 vs 수동분사(18%), 4위 대명사 및 수일치(12%), 5위 형용사 vs 부사 보어(10%). 문맥 해석과 구조 분석을 병행하여 답을 좁혀야 합니다.",
                "oxCompare": "O: What he discovered changed our view of nature. / X: That he discovered changed our view of nature.",
                "trap": "밑줄 친 단어 하나만 보지 말고 반드시 문장 전체의 주어, 본동사, 접속사의 구조를 도식화하여 풀어야 합니다.",
                "quizLink": "수능 1등급을 결정짓는 최종 관문 모의고사입니다."
            },
            {
                "formulaId": "lv5_u20_f2",
                "tag": "평가원 킬러 함정 회피 3단계 검증 프로세스",
                "en": "Equipped with these analytical skills, you are fully prepared to conquer any grammar question.",
                "ko": "이러한 분석적 기술을 갖추었기에, 당신은 어떠한 어법 문제라도 정복할 준비가 완벽히 되었다.",
                "point": "1단계: 밑줄 친 단어가 본동사 자리인지 확인한다. 2단계: 관계사/접속사라면 선행사와 뒷문장의 완전성을 검증한다. 3단계: 분사나 대명사라면 의미상 주어와의 능동/수동 및 선행 명사의 단/복수를 확인한다.",
                "oxCompare": "O: The strategy adopted by the board proved effective. / X: The strategy adopted by the board proving effective.",
                "trap": "해석만으로 그럴듯해 보이는 보기를 피하고, 명확한 문법 규칙(문장의 뼈대)에 입각하여 소거법으로 정답을 확정하세요.",
                "quizLink": "수능 영문법 클리닉 완강을 축하하며 1등급을 보장합니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u20_d1",
                "sentence": "The ancient philosophical paradoxes discussing in the seminar challenging students' conventional worldview.",
                "underlined": ["The ancient philosophical paradoxes", "discussing in the seminar", "challenging students'", "conventional worldview"],
                "wrongIndex": 1,
                "correction": "discussed in the seminar",
                "explanation": "역설들(paradoxes)은 세미나에서 '논의되는' 수동의 대상이므로 과거분사 discussed로 수식해야 하며, 본동사 자리의 challenging 역시 challenged로 바로잡아야 합니다.",
                "conceptRef": "lv5_u20_f1"
            },
            {
                "drillId": "lv5_u20_d2",
                "sentence": "The neural pathways that enable creative thinking strengthens through deliberate and repetitive practice.",
                "underlined": ["The neural pathways", "that enable creative thinking", "strengthens through", "deliberate and repetitive practice"],
                "wrongIndex": 2,
                "correction": "strengthen through",
                "explanation": "문장의 주어는 복수 명사 'The neural pathways'입니다. 관계사절(that enable creative thinking)을 묶어내면 본동사는 복수형 strengthen이 되어야 합니다.",
                "conceptRef": "lv5_u20_f1"
            },
            {
                "drillId": "lv5_u20_d3",
                "sentence": "The speed which information spreads across modern digital networks is unprecedented in history.",
                "underlined": ["The speed", "which information spreads", "across modern digital networks", "is unprecedented in history"],
                "wrongIndex": 1,
                "correction": "at which information spreads",
                "explanation": "선행사 The speed 뒤의 절(information spreads across networks)은 완전한 문장입니다. speed와 호응하는 전치사 at과 결합하여 'at which' 또는 'that'으로 고쳐야 합니다.",
                "conceptRef": "lv5_u20_f2"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u20_q1",
                "instruction": "[평가원 29번 실전 모의고사 1회] 다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
                "prompt": "Cognitive psychologists have long recognized ① that human perception is not a passive recording of sensory data, but an active process of interpretation. When sensory inputs enter the brain, they are organized according to preexisting mental schemas, ② which filter and shape our experience of reality. Experiments ③ conducted with visual illusions reveal how easily our perceptual systems can be deceived. An ambiguous image ④ viewing from different angles may trigger conflicting interpretations, demonstrating that what we perceive ⑤ is fundamentally shaped by our expectations.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 4,
                "exp": "이미지(An ambiguous image)는 관찰자에 의해 '서로 다른 각도에서 바라보아지는' 수동의 관계이며 뒤에 목적어가 없으므로 현재분사 viewing을 과거분사 viewed로 고쳐야 합니다.",
                "conceptRef": "lv5_u20_f1"
            },
            {
                "qId": "lv5_u20_q2",
                "instruction": "[평가원 29번 실전 모의고사 2회] 다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
                "prompt": "Ecosystems demonstrate remarkable resilience when ① subjected to natural disturbances such as wildfires or floods. Native vegetation quickly regenerates, ② stabilizing the soil and providing habitats for surviving wildlife. The rate ③ at which biodiversity recovers largely depends on whether nearby ecological corridors remain ④ intact. If human activities fragment these natural habitats, however, the capacity of ecosystems to heal ⑤ themselves are severely compromised.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 5,
                "exp": "주어는 단수 명사구인 'the capacity of ecosystems to heal themselves'이므로 본동사는 복수 are가 아니라 단수 is로 일치시켜야 합니다.",
                "conceptRef": "lv5_u20_f1"
            },
            {
                "qId": "lv5_u20_q3",
                "instruction": "[평가원 29번 실전 모의고사 3회] (A), (B), (C)의 각 네모 안에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "Musical traditions around the world share universal acoustic principles that appeal to human emotional wiring. Melodies constructed from minor intervals often evoke sadness, while major scales tend to elicit feelings of triumph, a phenomenon (A) [observing / observed] across distinct cultures. Ethnomusicologists debate (B) [that / whether] these emotional responses are innate or culturally conditioned. Recent neuroimaging studies indicate that musical processing engages neural circuits originally evolved for social communication, (C) [makes / making] music a uniquely powerful medium for human bonding.",
                "options": [
                    "observed - whether - making",
                    "observing - that - making",
                    "observed - that - makes",
                    "observing - whether - makes",
                    "observed - whether - makes"
                ],
                "ans": 1,
                "exp": "(A) 문화 전반에 걸쳐 '관찰되는' 현상이므로 과거분사 observed, (B) debate의 목적어로 선천적인지 문화적으로 조건화된 것인지의 불확실성을 나타내므로 whether, (C) 앞 문장 전체를 부연하는 능동의 분사구문이므로 making이 정답입니다.",
                "conceptRef": "lv5_u20_f2"
            },
            {
                "qId": "lv5_u20_q4",
                "instruction": "[평가원 29번 실전 모의고사 4회] 다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
                "prompt": "The development of printing technology in fifteenth-century Europe made ① it possible to disseminate knowledge at an unprecedented scale. Before the printing press, manuscripts were laboriously copied by hand, ② which made books scarce and prohibitively expensive. With printed books ③ becoming widely available, literacy rates rose steadily, encouraging critical thinking and ④ challenged the intellectual monopoly of ecclesiastical authorities. This democratizing of knowledge laid the foundation ⑤ upon which the scientific revolution was built.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 4,
                "exp": "encouraging critical thinking and challenging the intellectual monopoly로 분사구문끼리 병렬을 이루어야 하므로 과거시제 동사 challenged를 현재분사 challenging으로 고쳐야 합니다.",
                "conceptRef": "lv5_u20_f1"
            },
            {
                "qId": "lv5_u20_q5",
                "instruction": "[평가원 29번 실전 모의고사 5회] 다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?",
                "prompt": "In complex decision-making scenarios, individuals frequently rely on cognitive heuristics ① to simplify probabilistic judgments. While these mental shortcuts often produce satisfactory outcomes, they can also lead to systematic errors. One prominent bias is the availability heuristic, ② through which people judge the likelihood of an event by ③ how easily relevant examples come to mind. Events that evoke intense emotional reactions ④ are remembered more vividly than ⑤ that of emotionally neutral occurrences, causing individuals to overestimate rare but dramatic risks.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 5,
                "exp": "비교 대상이 복수 명사인 Events이므로 단수 대명사 that이 아니라 복수 대명사 those of emotionally neutral occurrences로 받아야 올바른 병렬이 성립합니다.",
                "conceptRef": "lv5_u20_f1"
            }
        ]
    }
]

if __name__ == '__main__':
    print(f"LV5 Part 2 loaded: {len(LV5_PART2)} units")
    for u in LV5_PART2:
        print(f"  Unit {u['unitNo']}: {u['title']} (Drills: {len(u['spottingDrills'])}, Qs: {len(u['questions'])})")
