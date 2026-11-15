# -*- coding: utf-8 -*-
"""
Grammar Clinic Expansion - Level 5 (Part 1: Units 9-14)
Target: 수능 어법 마스터 (CSAT Killer Grammar & 29 Mastery)
Units:
  9: 본동사 vs 준동사 심화: 복합 수식절 속 동사 자리 찾기
  10: 능동분사 vs 수동분사: 감정동사 및 타동사 목적어 유무 판별
  11: 관계사 4파전 (which vs that vs what vs whose)
  12: 전치사+관계대명사 vs 관계부사 vs where/when 뒤 불완전 함정
  13: 대명사 수일치 & 재귀대명사 (it/they, self, one/another)
  14: 형용사 vs 부사 도치 구문 & 감각/상태동사 보어 심화
"""

LV5_PART1 = [
    # -------------------------------------------------------------
    # Unit 9: 본동사 vs 준동사 심화: 복합 수식절 속 동사 자리 찾기
    # -------------------------------------------------------------
    {
        "unitNo": 9,
        "legacyUnitNo": 89,
        "title": "본동사 vs 준동사 심화: 복합 수식절 속 동사 자리 찾기",
        "formulaCards": [
            {
                "formulaId": "lv5_u9_f1",
                "tag": "문장의 본동사 자리 판별 공식 (접속사 개수 + 1 = 동사 개수)",
                "en": "The ancient manuscripts discovered in the hidden cave provide invaluable insights.",
                "ko": "숨겨진 동굴에서 발견된 고대 사본들은 매우 귀중한 통찰을 제공한다.",
                "point": "한 문장의 접속사 개수가 N개이면 본동사는 반드시 N+1개여야 합니다. 분사구(discovered ~ cave)나 관계사절 등 주어를 수식하는 긴 수식어 거품을 괄호로 묶어내면 문장의 진짜 본동사 자리(provide)가 명확하게 보입니다.",
                "oxCompare": "O: The boy reading a book in the library is my cousin. / X: The boy reading a book in the library being my cousin.",
                "trap": "분사(-ing / -ed)나 to부정사는 절대로 문장의 본동사가 될 수 없으며, 본동사 자리에 -ing나 to-v가 오면 수능 29번 1순위 오답입니다.",
                "quizLink": "주어 뒤에 길게 늘어선 수식어구를 괄호로 묶고 문장의 본동사가 존재하는지 반드시 확인하세요."
            },
            {
                "formulaId": "lv5_u9_f2",
                "tag": "준동사 능동/수동과 목적어 유무 판별",
                "en": "Surrounded by hostile forces, the commander decided to retreat immediately.",
                "ko": "적군에 둘러싸인 채, 지휘관은 즉시 후퇴하기로 결심했다.",
                "point": "접속사가 생략된 분사구문에서 주어와의 관계가 수동이면 과거분사(p.p.), 능동이면 현재분사(V-ing)를 씁니다. 타동사 출신 분사 뒤에 목적어(명사)가 없으면 수동분사(p.p.)가 정답일 확률이 매우 높습니다.",
                "oxCompare": "O: Seen from a distance, the rock looks like a lion. / X: Seeing from a distance, the rock looks like a lion.",
                "trap": "의미상 주어를 주절의 주어와 일치시켜 능동/수동 관계를 따져야 합니다.",
                "quizLink": "수능 29번 단골 유형: 분사구문의 태와 본동사 유무의 결합형입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u9_d1",
                "sentence": "The revolutionary theory proposed by the physicist challenging long-standing scientific dogmas.",
                "underlined": ["The revolutionary theory", "proposed by the physicist", "challenging", "long-standing scientific dogmas"],
                "wrongIndex": 2,
                "correction": "challenged",
                "explanation": "문장에 본동사가 없습니다. proposed by the physicist는 theory를 수식하는 과거분사구이므로, challenging을 주어 The revolutionary theory의 본동사인 challenged(또는 challenges)로 고쳐야 온전한 문장이 됩니다.",
                "conceptRef": "lv5_u9_f1"
            },
            {
                "drillId": "lv5_u9_d2",
                "sentence": "Employees participating in the corporate training program having shown remarkable improvement.",
                "underlined": ["Employees", "participating in the corporate training", "program having shown", "remarkable improvement"],
                "wrongIndex": 2,
                "correction": "program have shown",
                "explanation": "participating ~ training program은 주어 Employees를 수식하는 분사구이며 문장의 본동사가 필요하므로, having shown을 현재완료 본동사인 have shown으로 수정해야 합니다.",
                "conceptRef": "lv5_u9_f1"
            },
            {
                "drillId": "lv5_u9_d3",
                "sentence": "Threatened by predatory animals, the mother bird frantically protecting her vulnerable chicks.",
                "underlined": ["Threatened by predatory animals", "the mother bird", "frantically protecting", "her vulnerable chicks"],
                "wrongIndex": 2,
                "correction": "frantically protected",
                "explanation": "Threatened by ~는 분사구문이고 주절의 주어는 the mother bird입니다. 문장에 본동사가 빠져 있으므로 protecting을 본동사 protected(또는 was frantically protecting)로 고쳐야 합니다.",
                "conceptRef": "lv5_u9_f1"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u9_q1",
                "instruction": "다음 문장의 밑줄 친 부분 중 어법상 틀린 것은?",
                "prompt": "The ancient stone structures ① discovered in the dense rainforest ② dated back to the third century and ③ providing compelling evidence of an advanced civilization that once ④ flourished in the region.",
                "options": ["①", "②", "③", "④", "⑤ 없음"],
                "ans": 3,
                "exp": "주어 The ancient stone structures의 본동사로 dated back and provided가 병렬로 연결되어야 합니다. and 뒤에 준동사 providing이 오면 문장의 본동사가 누락되므로 provided로 고쳐야 합니다.",
                "conceptRef": "lv5_u9_f1"
            },
            {
                "qId": "lv5_u9_q2",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "The psychological phenomenon _______ as cognitive dissonance describes the mental discomfort experienced by individuals who hold contradictory beliefs.",
                "options": ["known", "knowing", "is known", "knows", "has known"],
                "ans": 1,
                "exp": "문장의 본동사는 describes입니다. 따라서 주어 The psychological phenomenon을 뒤에서 수식하는 분사가 필요하며, '~로 알려진'의 수동 의미이므로 과거분사 known이 정답입니다.",
                "conceptRef": "lv5_u9_f2"
            },
            {
                "qId": "lv5_u9_q3",
                "instruction": "다음 글의 밑줄 친 부분 중 어법상 어색한 문장을 고르시오.",
                "prompt": "Select the grammatically incorrect sentence.",
                "options": [
                    "Students enrolled in the advanced chemistry class must submit weekly laboratory reports.",
                    "The innovative software designed by our engineers dramatically reduces server latency.",
                    "The architect responsible for the iconic museum receiving an international award yesterday.",
                    "Goods manufactured from recycled plastics are gaining rapid popularity among consumers.",
                    "Having completed the grueling marathon, the runners rested under the shaded tent."
                ],
                "ans": 3,
                "exp": "3번 문장에서 The architect ~ museum은 주어이며, 문장에 본동사가 없습니다. receiving을 과거 본동사 received로 고쳐야 합니다.",
                "conceptRef": "lv5_u9_f1"
            },
            {
                "qId": "lv5_u9_q4",
                "instruction": "다음 문장의 괄호 (A), (B)에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "The traditional folk songs (A) [transmitting / transmitted] through oral traditions across generations (B) [reflect / reflecting] the collective sorrow and resilience of the community.",
                "options": [
                    "transmitting - reflect",
                    "transmitted - reflect",
                    "transmitted - reflecting",
                    "transmitting - reflecting",
                    "transmitting - to reflect"
                ],
                "ans": 2,
                "exp": "(A) 구전 전통을 통해 '전승된' 노래들이므로 수동의 과거분사 transmitted, (B) 주어 The traditional folk songs에 상응하는 본동사가 필요하므로 복수 본동사 reflect가 올바릅니다.",
                "conceptRef": "lv5_u9_f1"
            },
            {
                "qId": "lv5_u9_q5",
                "instruction": "다음 중 문장의 본동사가 바르게 쓰인 것을 고르시오.",
                "prompt": "Choose the sentence where the main verb is correctly used.",
                "options": [
                    "The decision reaching after hours of heated debate satisfying no one.",
                    "The solar panels installed on the roof generating enough electricity for the family.",
                    "The author whose novels captivated millions of readers passed away peacefully.",
                    "The documentary depicting wildlife extinction to be broadcast nationwide tonight.",
                    "Volunteers gathered at the shelter packing relief goods for earthquake victims."
                ],
                "ans": 3,
                "exp": "3번 문장에서 The author (whose ~ readers) passed away peacefully는 주어 The author와 본동사 passed away가 완벽하게 일치합니다. 나머지 선택지는 모두 본동사가 분사(-ing)나 to부정사로 잘못 쓰였습니다.",
                "conceptRef": "lv5_u9_f1"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 10: 능동분사 vs 수동분사: 감정동사 및 타동사 목적어 유무 판별
    # -------------------------------------------------------------
    {
        "unitNo": 10,
        "legacyUnitNo": 90,
        "title": "능동분사 vs 수동분사: 감정동사 및 타동사 목적어 유무 판별",
        "formulaCards": [
            {
                "formulaId": "lv5_u10_f1",
                "tag": "감정유발 동사의 분사 공식 (사물주어 -ing vs 사람주어 -ed)",
                "en": "The astonishing discovery made the scientists feel completely fascinated.",
                "ko": "그 놀라운 발견은 과학자들로 하여금 완전히 매료되도록 만들었다.",
                "point": "감정을 불러일으키는 원인이나 사물은 현재분사(-ing: astonishing, fascinating, exhausting)를 쓰고, 감정을 직접 느끼는 주체(사람)는 과거분사(-ed: astonished, fascinated, exhausted)를 씁니다.",
                "oxCompare": "O: I was bored with the boring movie. / X: I was boring with the bored movie.",
                "trap": "사람 주어라도 다른 사람에게 그 감정을 '일으키는' 주체라면 -ing가 쓰일 수 있으므로 능동적 유발인지 수동적 느낌인지를 문맥으로 정확히 파악해야 합니다.",
                "quizLink": "수능 및 모의고사 어법 단골 출제 포인트입니다."
            },
            {
                "formulaId": "lv5_u10_f2",
                "tag": "일반 타동사의 목적어 유무에 따른 분사 판별",
                "en": "The research conducted by the university analyzed data collected over ten years.",
                "ko": "그 대학에 의해 수행된 연구는 10년에 걸쳐 수집된 자료를 분석했다.",
                "point": "타동사가 분사로 쓰일 때, 목적어가 살아있으면 능동(V-ing), 목적어가 뒤따르지 않고 전치사구나 부사가 이어지면 수동(p.p.)입니다.",
                "oxCompare": "O: She answered all the questions asked by the teacher. / X: She answered all the questions asking by the teacher.",
                "trap": "자동사는 수동태가 불가능하므로 항상 현재분사(remaining, existing, disappearing)만 씁니다.",
                "quizLink": "타동사의 목적어 유무와 자동사의 수동 불가 원칙을 교차 점검하세요."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u10_d1",
                "sentence": "The lecture on theoretical astrophysics was so fascinated that nobody fell asleep.",
                "underlined": ["The lecture", "on theoretical astrophysics", "was so fascinated", "that nobody fell asleep"],
                "wrongIndex": 2,
                "correction": "was so fascinating",
                "explanation": "주어가 '이론 천체물리학 강의(The lecture)'라는 사물이므로 청중에게 매력을 불러일으키는 능동의 감정유발 분사 fascinating을 써야 합니다.",
                "conceptRef": "lv5_u10_f1"
            },
            {
                "drillId": "lv5_u10_d2",
                "sentence": "Artifacts excavating from the tomb shed new light on royal funeral traditions.",
                "underlined": ["Artifacts", "excavating from the tomb", "shed new light on", "royal funeral traditions"],
                "wrongIndex": 1,
                "correction": "excavated from the tomb",
                "explanation": "유물(Artifacts)은 고고학자들에 의해 '발굴되는' 대상이며, 뒤에 목적어가 없고 전치사구(from the tomb)가 이어지므로 과거분사 excavated를 써야 합니다.",
                "conceptRef": "lv5_u10_f2"
            },
            {
                "drillId": "lv5_u10_d3",
                "sentence": "With the global climate dramatically changed, many species face imminent extinction.",
                "underlined": ["With the global climate", "dramatically changed", "many species face", "imminent extinction"],
                "wrongIndex": 1,
                "correction": "dramatically changing",
                "explanation": "기후가 급격하게 '변화하고 있는' 진행 능동의 뉘앙스이며, change는 자동사로 쓰여 기후의 능동적 변화 상태를 나타내므로 changing이 적절합니다.",
                "conceptRef": "lv5_u10_f2"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u10_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "Deeply _______ by the tragic news from the war zone, citizens gathered in the square to pray for peace.",
                "options": ["depressing", "depressed", "depress", "to depress", "depresses"],
                "ans": 2,
                "exp": "시민들(citizens)이 비극적인 소식에 의해 '우울하고 비통한 감정을 느끼게 된' 수동의 관계이므로 과거분사 Depressed가 올바릅니다.",
                "conceptRef": "lv5_u10_f1"
            },
            {
                "qId": "lv5_u10_q2",
                "instruction": "다음 밑줄 친 부분 중 어법상 옳지 않은 것을 고르시오.",
                "prompt": "Choose the grammatically incorrect sentence.",
                "options": [
                    "The magician performed a series of bewildering tricks on stage.",
                    "Exhausted from the long hike, the campers slept soundly in their tents.",
                    "The surprising election result shocked political analysts across the country.",
                    "Visitors were disappointing with the poor quality of the museum exhibition.",
                    "She found the complicated instructions extremely confusing."
                ],
                "ans": 4,
                "exp": "관람객들(Visitors)이 전시의 형편없는 품질에 '실망감을 느낀' 수동의 주체이므로 disappointing이 아니라 disappointed를 써야 합니다.",
                "conceptRef": "lv5_u10_f1"
            },
            {
                "qId": "lv5_u10_q3",
                "instruction": "다음 문장의 빈칸 (A), (B)에 들어갈 말로 가장 적절하게 짝지어진 것은?",
                "prompt": "The legal dispute (A)_______ the patent lasted for five years, leaving all parties financially (B)______.",
                "options": [
                    "surrounding - exhausting",
                    "surrounded - exhausted",
                    "surrounding - exhausted",
                    "surrounded - exhausting",
                    "surrounds - exhausted"
                ],
                "ans": 3,
                "exp": "(A) 뒤에 목적어 the patent가 있으므로 능동의 현재분사 surrounding, (B) 모든 당사자들이 재정적으로 '지치게 된' 감정/상태를 나타내므로 과거분사 exhausted가 맞습니다.",
                "conceptRef": "lv5_u10_f2"
            },
            {
                "qId": "lv5_u10_q4",
                "instruction": "다음 중 어법상 올바른 문장을 고르시오.",
                "prompt": "Select the grammatically correct sentence.",
                "options": [
                    "The remaining problems must be resolved before launching the product.",
                    "The remained problems must be resolved before launching the product.",
                    "The problems remaining by the team must be solved soon.",
                    "Remaining the problems, we should proceed with the schedule.",
                    "The problems were remaining unsolved by them."
                ],
                "ans": 1,
                "exp": "remain은 완전자동사로 수동태 및 과거분사 수식(remained)이 불가능하며, 오직 현재분사 remaining(남아있는)의 형태로만 명사를 수식합니다.",
                "conceptRef": "lv5_u10_f2"
            },
            {
                "qId": "lv5_u10_q5",
                "instruction": "다음 문장의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "The novel ① written by the reclusive author deals with ② disturbing themes of isolation and alienation, leaving readers deeply ③ moved yet ④ questioning about the unresolved moral dilemmas ⑤ presenting in the story.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 5,
                "exp": "이야기 속에서 '제시되는' 도덕적 딜레마라는 수동의 의미이며 뒤에 목적어가 없으므로 presenting을 과거분사 presented로 고쳐야 합니다.",
                "conceptRef": "lv5_u10_f2"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 11: 관계사 4파전 (which vs that vs what vs whose)
    # -------------------------------------------------------------
    {
        "unitNo": 11,
        "legacyUnitNo": 91,
        "title": "관계사 4파전 (which vs that vs what vs whose)",
        "formulaCards": [
            {
                "formulaId": "lv5_u11_f1",
                "tag": "수능 관계사 판별 2단계 필승 알고리즘",
                "en": "She revealed what she discovered during the expedition, which amazed the scholars.",
                "ko": "그녀는 탐험 동안 발견한 것을 밝혔고, 그것은 학자들을 놀라게 했다.",
                "point": "1단계: 앞에 수식할 명사(선행사)가 있는가? (선행사 X ➔ what / 선행사 O ➔ which, that, whose). 2단계: 뒷문장의 완전성 분석! (주어나 목적어가 없으면 which/that, 소유격 명사 결합으로 완전하면 whose, 완전한 문장이면 동격/접속사 that).",
                "oxCompare": "O: This is the book which I was looking for. / X: This is the book what I was looking for.",
                "trap": "콤마(,) 뒤의 계속적 용법이나 전치사 바로 뒤에는 관계대명사 that을 절대 쓸 수 없습니다.",
                "quizLink": "수능 29번 어법에서 가장 출제 빈도가 높은 핵심 공식입니다."
            },
            {
                "formulaId": "lv5_u11_f2",
                "tag": "소유격 관계대명사 whose 완전 구조 판별",
                "en": "We stayed at a historic hotel whose windows overlooked the serene lake.",
                "ko": "우리는 창문이 고요한 호수를 내려다보고 있는 유서 깊은 호텔에 묵었다.",
                "point": "whose 뒤에는 무관사 명사(windows)가 주어나 목적어로 오며, 문장 자체의 필수 성분이 온전히 갖추어진 완전한 문장 구조를 이룹니다.",
                "oxCompare": "O: I met a painter whose works are world-famous. / X: I met a painter which works are world-famous.",
                "trap": "whose 뒤의 명사에는 the나 a 같은 관사가 붙지 않습니다.",
                "quizLink": "which와 whose의 선택은 뒷문장의 완전성(소유격 관계)으로 가릅니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u11_d1",
                "sentence": "The museum displayed ancient artifacts, that had been preserved for millennia in dry sand.",
                "underlined": ["The museum displayed", "ancient artifacts,", "that had been preserved", "for millennia in dry sand"],
                "wrongIndex": 2,
                "correction": "which had been preserved",
                "explanation": "관계대명사 that은 콤마(,) 뒤의 계속적 용법으로 쓰일 수 없으므로 which로 바꾸어야 합니다.",
                "conceptRef": "lv5_u11_f1"
            },
            {
                "drillId": "lv5_u11_d2",
                "sentence": "What astonished the researchers were the conclusion that the hypothesis was totally false.",
                "underlined": ["What astonished", "the researchers", "were the conclusion", "that the hypothesis was totally false"],
                "wrongIndex": 2,
                "correction": "was the conclusion",
                "explanation": "What astonished the researchers는 명사절 주어로 단수 취급하므로 복수 동사 were를 단수 동사 was로 고쳐야 합니다.",
                "conceptRef": "lv5_u11_f1"
            },
            {
                "drillId": "lv5_u11_d3",
                "sentence": "The company hired a security consultant which primary responsibility was safeguarding sensitive data.",
                "underlined": ["The company hired", "a security consultant", "which primary responsibility was", "safeguarding sensitive data"],
                "wrongIndex": 2,
                "correction": "whose primary responsibility was",
                "explanation": "선행사(a security consultant)의 '주요 책임(primary responsibility)'을 연결하는 소유격 관계대명사이므로 which가 아닌 whose를 써야 합니다.",
                "conceptRef": "lv5_u11_f2"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u11_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "The committee rejected the proposal, _______ they believed would cost far too much public money.",
                "options": ["that", "what", "which", "whose", "where"],
                "ans": 3,
                "exp": "콤마(,) 뒤의 계속적 용법이며, they believed는 삽입절이고 뒤에 주어가 없는 불완전한 문장이 이어지므로 관계대명사 which가 정답입니다. that은 계속적 용법에 쓸 수 없습니다.",
                "conceptRef": "lv5_u11_f1"
            },
            {
                "qId": "lv5_u11_q2",
                "instruction": "다음 문장의 빈칸 (A), (B)에 들어갈 말로 알맞게 짝지어진 것은?",
                "prompt": "He delivered (A)_______ was widely considered the most inspiring speech of the summit, (B)_______ themes resonated with delegates worldwide.",
                "options": [
                    "that - which",
                    "what - whose",
                    "which - that",
                    "what - which",
                    "that - whose"
                ],
                "ans": 2,
                "exp": "(A) delivered의 목적어 역할을 하며 선행사가 없고 주어가 빠진 불완전한 절이므로 what, (B) the summit's themes라는 소유 관계를 나타내며 뒤에 완전한 절이 오므로 whose가 정답입니다.",
                "conceptRef": "lv5_u11_f2"
            },
            {
                "qId": "lv5_u11_q3",
                "instruction": "다음 중 밑줄 친 that의 쓰임이 나머지 넷과 다른 것은?",
                "prompt": "Identify the word 'that' with a different grammatical role.",
                "options": [
                    "The fact that greenhouse gases cause global warming is undisputed.",
                    "The claim that artificial intelligence will replace all teachers is exaggerated.",
                    "The evidence that was presented in court proved the defendant's guilt.",
                    "The belief that honesty is the best policy guides his ethical decisions.",
                    "The news that the peace treaty had been signed brought joy to citizens."
                ],
                "ans": 3,
                "exp": "3번의 that은 was presented의 주어가 빠진 주격 관계대명사입니다. 1, 2, 4, 5번은 모두 추상명사 뒤에 완전한 문장이 이어지는 동격의 접속사 that입니다.",
                "conceptRef": "lv5_u11_f1"
            },
            {
                "qId": "lv5_u11_q4",
                "instruction": "다음 문장에서 어법상 틀린 부분을 찾아 바르게 고친 것은?",
                "prompt": "We should focus on what we can achieve today rather than that we lost yesterday.",
                "options": [
                    "what -> that",
                    "can achieve -> could achieve",
                    "rather than -> instead of",
                    "that -> what",
                    "lost -> have lost"
                ],
                "ans": 4,
                "exp": "than 뒤의 절에서도 선행사가 없고 lost의 목적어가 빠진 불완전한 절을 이끌어야 하므로 that을 관계대명사 what으로 고쳐야 병렬이 성립합니다.",
                "conceptRef": "lv5_u11_f1"
            },
            {
                "qId": "lv5_u11_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Neurobiologists investigated the brain mechanisms ① through which emotional memories are formed. They discovered ② that the amygdala plays a central role in prioritizing experiences ③ what evoke strong feelings of fear. Such memories, ④ once encoded, often trigger automatic reactions ⑤ whose purpose is immediate survival.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 3,
                "exp": "선행사 experiences가 존재하므로 선행사를 포함하는 관계대명사 what을 쓸 수 없습니다. 주격 관계대명사 which 또는 that으로 고쳐야 합니다.",
                "conceptRef": "lv5_u11_f1"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 12: 전치사+관계대명사 vs 관계부사 vs where/when 뒤 불완전 함정
    # -------------------------------------------------------------
    {
        "unitNo": 12,
        "legacyUnitNo": 92,
        "title": "전치사+관계대명사 vs 관계부사 vs where/when 뒤 불완전 함정",
        "formulaCards": [
            {
                "formulaId": "lv5_u12_f1",
                "tag": "전치사+관계대명사 = 관계부사 (뒤에 완전한 절)",
                "en": "This is the laboratory in which the groundbreaking vaccine was developed.",
                "ko": "이곳이 그 획기적인 백신이 개발된 연구실이다.",
                "point": "'전치사 + 관계대명사(in which, at which, by which)'와 '관계부사(where, when, why, how)' 뒤에는 주어, 목적어, 보어가 모두 갖추어진 '완전한 절'이 옵니다.",
                "oxCompare": "O: The city where I was born is very peaceful. / X: The city which I was born is very peaceful.",
                "trap": "선행사가 장소(the house, the city)라도 뒷문장에 목적어나 주어가 빠져 있으면 where가 아니라 관계대명사 which/that을 써야 합니다.",
                "quizLink": "장소 선행사 뒤 무조건 where를 고르는 실수를 유발하는 수능의 전형적인 함정입니다."
            },
            {
                "formulaId": "lv5_u12_f2",
                "tag": "전치사의 원래 위치 복원 검증법",
                "en": "The criteria by which the candidates are evaluated must be transparent.",
                "ko": "지원자들을 평가하는 기준은 투명해야 한다.",
                "point": "전치사 + which가 맞는지 확인하려면 관계사절 맨 뒤로 전치사를 옮겨서 선행사와 결합해 보세요 (evaluate the candidates by the criteria ➔ by which 성립).",
                "oxCompare": "O: The pen with which he signed the document was gold. / X: The pen which he signed the document was gold.",
                "trap": "전치사 뒤에는 관계대명사 that이나 who를 쓸 수 없습니다 (in that은 '~라는 점에서'라는 접속사일 때만 예외).",
                "quizLink": "수능 29번에서 전치사 누락 및 관계대명사 vs 관계부사 변별 문항으로 빈출됩니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u12_d1",
                "sentence": "This is the remote island which endangered sea turtles return every summer to lay eggs.",
                "underlined": ["This is the remote island", "which", "endangered sea turtles return", "every summer to lay eggs"],
                "wrongIndex": 1,
                "correction": "where",
                "explanation": "뒷문장(endangered sea turtles return every summer to lay eggs)은 완전전자동사 return을 갖춘 완전한 절입니다. 따라서 불완전한 절을 이끄는 which가 아니라 관계부사 where 또는 to which를 써야 합니다.",
                "conceptRef": "lv5_u12_f1"
            },
            {
                "drillId": "lv5_u12_d2",
                "sentence": "The historic hotel where my grandfather visited sixty years ago has been demolished.",
                "underlined": ["The historic hotel", "where", "my grandfather visited", "sixty years ago"],
                "wrongIndex": 1,
                "correction": "which",
                "explanation": "선행사가 장소 hotel이지만, visit은 타동사이므로 뒤에 목적어가 빠진 불완전한 문장입니다. 따라서 관계부사 where가 아니라 목적격 관계대명사 which(또는 that)를 써야 합니다.",
                "conceptRef": "lv5_u12_f1"
            },
            {
                "drillId": "lv5_u12_d3",
                "sentence": "The precise method which the ancient Egyptians built the pyramids remains an enigma.",
                "underlined": ["The precise method", "which", "the ancient Egyptians built", "the pyramids remains an enigma"],
                "wrongIndex": 1,
                "correction": "by which",
                "explanation": "선행사 The precise method 뒤의 절(the ancient Egyptians built the pyramids)은 주어, 타동사, 목적어가 모두 있는 완전한 절입니다. method 뒤에는 how를 쓰지 못하므로 'by which' 또는 'that'을 써야 합니다.",
                "conceptRef": "lv5_u12_f2"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u12_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "Social media creates virtual spaces _______ individuals can express their identities and connect with peers.",
                "options": ["which", "where", "what", "whom", "whose"],
                "ans": 2,
                "exp": "선행사 virtual spaces 뒤에 'individuals(주어) can express(동사) their identities(목적어)'라는 완전한 절이 이어지므로 장소/공간의 관계부사 where가 적절합니다.",
                "conceptRef": "lv5_u12_f1"
            },
            {
                "qId": "lv5_u12_q2",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Select the grammatically correct sentence.",
                "options": [
                    "This is the cozy cafe where I usually enjoy drinking coffee at.",
                    "The library which we studied for the final exam is closed today.",
                    "The era in which Shakespeare lived produced masterpieces of literature.",
                    "The reason which he resigned from his executive post was unknown.",
                    "She explained the way how she solved the complex algorithm."
                ],
                "ans": 3,
                "exp": "Shakespeare lived in the era 구조에서 전치사 in과 결합한 in which 뒤에 완전한 문장이 이어진 3번이 정답입니다. 1번은 where 뒤에 at이 중복, 2번은 in which/where, 4번은 why/for which, 5번은 the way와 how는 함께 쓸 수 없습니다.",
                "conceptRef": "lv5_u12_f2"
            },
            {
                "qId": "lv5_u12_q3",
                "instruction": "다음 문장의 빈칸에 들어갈 전치사로 알맞은 것은?",
                "prompt": "The telescope _______ which Galileo observed the moons of Jupiter was remarkably crude by modern standards.",
                "options": ["through", "to", "for", "at", "on"],
                "ans": 1,
                "exp": "망원경을 '통하여' 관측한 것이므로 'observe the moons through the telescope'의 관계에서 전치사 through가 관계대명사 which 앞에 오는 것이 가장 적절합니다.",
                "conceptRef": "lv5_u12_f2"
            },
            {
                "qId": "lv5_u12_q4",
                "instruction": "다음 두 문장에서 괄호 안의 어법으로 가장 적절한 것은?",
                "prompt": "• The town [which / where] we visited last winter was buried in deep snow.\n• The town [which / where] we stayed last winter was buried in deep snow.",
                "options": [
                    "which - which",
                    "where - where",
                    "which - where",
                    "where - which",
                    "that - that"
                ],
                "ans": 3,
                "exp": "첫 번째 문장의 visited는 타동사이므로 목적어가 빠져 which, 두 번째 문장의 stayed는 자동사이므로 완전한 절을 이루어 관계부사 where가 올바릅니다.",
                "conceptRef": "lv5_u12_f1"
            },
            {
                "qId": "lv5_u12_q5",
                "instruction": "다음 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Ecosystems establish delicate balances ① in which every native organism plays a vital ecological role. Human activities that alter habitats create conditions ② where invasive species can thrive unchecked. The degree ③ to which native species can adapt to rapid changes often determines ④ whether the entire ecosystem collapses or ⑤ remaining intact.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 5,
                "exp": "whether the entire ecosystem collapses or remains intact에서 접속사 or로 연결된 병렬 구조이므로 동사 collapses와 짝을 이루어 remains로 써야 합니다.",
                "conceptRef": "lv5_u12_f2"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 13: 대명사 수일치 & 재귀대명사 (it/they, self, one/another)
    # -------------------------------------------------------------
    {
        "unitNo": 13,
        "legacyUnitNo": 93,
        "title": "대명사 수일치 & 재귀대명사 (it/they, self, one/another)",
        "formulaCards": [
            {
                "formulaId": "lv5_u13_f1",
                "tag": "대명사의 수일치 (it vs they / that vs those)",
                "en": "Companies must understand their customers and satisfy their diverse needs.",
                "ko": "기업들은 그들의 고객들을 이해하고 그들의 다양한 요구를 충족시켜야 한다.",
                "point": "대명사가 지칭하는 선행 명사를 문맥에서 정확히 찾아 단수(it, its, that)인지 복수(they, their, them, those)인지 일치시켜야 합니다.",
                "oxCompare": "O: Each student must submit their own report. / X: Every students must submit his report.",
                "trap": "대명사와 선행명사 사이에 여러 수식어가 끼어들어 혼동을 일으키는 것이 수능 29번의 전형적인 출제 방식입니다.",
                "quizLink": "해석을 통해 대명사가 정확히 어떤 명사를 대신하고 있는지 반드시 선행사를 지목하세요."
            },
            {
                "formulaId": "lv5_u13_f2",
                "tag": "재귀대명사 (-self)의 재귀적 용법 vs 대명사 목적격",
                "en": "The philosopher believed that a person who cannot forgive himself cannot forgive others.",
                "ko": "그 철학자는 자신을 용서할 수 없는 사람은 타인도 용서할 수 없다고 믿었다.",
                "point": "문장의 주어와 목적어가 동일 인물/사물일 때는 반드시 재귀대명사(-self / -selves)를 써야 합니다. 반면 주어와 목적어가 서로 다를 때는 일반 목적격 대명사(him, her, them)를 씁니다.",
                "oxCompare": "O: He looked at himself in the mirror. / X: He looked at him in the mirror. (동일인일 때)",
                "trap": "to부정사나 분사의 의미상 주어와 목적어가 일치할 때도 재귀대명사를 써야 함에 유의하세요.",
                "quizLink": "주어와 목적어의 동일성 여부 판정은 수능 단골 함정입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u13_d1",
                "sentence": "When a honeybee finds a nectar source, they perform an intricate waggle dance to notify the hive.",
                "underlined": ["When a honeybee", "finds a nectar source", "they perform", "an intricate waggle dance"],
                "wrongIndex": 2,
                "correction": "it performs",
                "explanation": "주어가 단수 명사인 a honeybee이므로 복수 대명사 they 대신 단수 대명사 it을 쓰고 동사도 단수형 performs로 일치시켜야 합니다.",
                "conceptRef": "lv5_u13_f1"
            },
            {
                "drillId": "lv5_u13_d2",
                "sentence": "The ambitious young entrepreneur dedicated him entirely to launching the renewable energy startup.",
                "underlined": ["The ambitious young entrepreneur", "dedicated him entirely", "to launching", "the renewable energy startup"],
                "wrongIndex": 1,
                "correction": "dedicated himself entirely",
                "explanation": "헌신한 주체(The entrepreneur)와 헌신의 대상인 목적어가 동일 인물이므로 목적격 him 대신 재귀대명사 himself를 써야 합니다. (dedicate oneself to)",
                "conceptRef": "lv5_u13_f2"
            },
            {
                "drillId": "lv5_u13_d3",
                "sentence": "The carbon emissions of developing countries are rising faster than that of developed nations.",
                "underlined": ["The carbon emissions", "of developing countries", "are rising faster", "than that of developed nations"],
                "wrongIndex": 3,
                "correction": "than those of developed nations",
                "explanation": "비교 대상이 복수 명사인 The carbon emissions이므로 단수 대명사 that이 아니라 복수 대명사 those of developed nations로 받아야 합니다.",
                "conceptRef": "lv5_u13_f1"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u13_q1",
                "instruction": "다음 문장의 밑줄 친 부분 중 어법상 틀린 것은?",
                "prompt": "Each of the participants ① was requested to bring ② their personal identification card and show ③ it to the security guard before entering the conference hall ④ by himself ⑤ without any companion.",
                "options": ["①", "②", "③", "④", "⑤ 없음"],
                "ans": 5,
                "exp": "현대 영어에서 Each of the participants를 성별 중립적인 their로 받는 것은 어법상 완전히 허용되며, was requested(수일치) 및 it(ID card) 모두 올바르게 쓰였습니다.",
                "conceptRef": "lv5_u13_f1"
            },
            {
                "qId": "lv5_u13_q2",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "During periods of intense stress, organisms produce hormones that help _______ survive threatening situations.",
                "options": ["it", "them", "themselves", "itself", "they"],
                "ans": 2,
                "exp": "help의 목적어는 호르몬(hormones)이 아니라 생명체들(organisms)입니다. help의 주체는 hormones이므로 주어와 목적어가 달라 재귀대명사가 아닌 일반 대명사 복수 목적격 them이 정답입니다.",
                "conceptRef": "lv5_u13_f2"
            },
            {
                "qId": "lv5_u13_q3",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "The brain consumes twenty percent of the body's energy to maintain their function.",
                    "Wolves communicate with each other through howling to defend its territory.",
                    "A mother penguin travels miles across ice to find food for their chick.",
                    "An organization must adapt to environmental shifts if it wishes to survive.",
                    "The company fired several executives because he engaged in financial fraud."
                ],
                "ans": 4,
                "exp": "단수 명사 An organization을 단수 대명사 it과 단수 동사 wishes로 완벽하게 수일치시킨 4번이 올바릅니다. 1번은 its, 2번은 their, 3번은 its, 5번은 they로 고쳐야 합니다.",
                "conceptRef": "lv5_u13_f1"
            },
            {
                "qId": "lv5_u13_q4",
                "instruction": "다음 문장의 괄호 (A), (B)에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "Chameleons alter their skin color not only to camouflage (A) [them / themselves] from predators but also to communicate (B) [its / their] emotional states to rivals.",
                "options": [
                    "them - its",
                    "themselves - their",
                    "themselves - its",
                    "them - their",
                    "their - them"
                ],
                "ans": 2,
                "exp": "(A) 위장하는 주체와 대상이 Chameleons로 동일하므로 themselves, (B) 복수 명사 Chameleons의 소유격이므로 their가 올바릅니다.",
                "conceptRef": "lv5_u13_f2"
            },
            {
                "qId": "lv5_u13_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Language acquisition allows children to express ① themselves and make their desires known to others. As a child acquires vocabulary, ② it begins to understand that words have power. When parents respond attentively to children's questions, they foster cognitive development and help ③ them build confidence in ④ its own communicative abilities ⑤ from an early age.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 4,
                "exp": "아이들(children/them) 자신의 의사소통 능력이므로 단수 소유격 its가 아니라 복수 소유격 their own communicative abilities로 받아야 합니다.",
                "conceptRef": "lv5_u13_f1"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 14: 형용사 vs 부사 도치 구문 & 감각/상태동사 보어 심화
    # -------------------------------------------------------------
    {
        "unitNo": 14,
        "legacyUnitNo": 94,
        "title": "형용사 vs 부사 도치 구문 & 감각/상태동사 보어 심화",
        "formulaCards": [
            {
                "formulaId": "lv5_u14_f1",
                "tag": "보어 자리 형용사 도치 (형용사 보어 + be + 주어)",
                "en": "So intense was the summer heat that the asphalt melted on the highway.",
                "ko": "여름의 열기가 너무나 강렬해서 고속도로의 아스팔트가 녹아내렸다.",
                "point": "'So + 형용사/부사'가 문두로 나가거나 형용사 보어가 문두로 도치될 때, '보어(형용사) + be동사 + 주어'의 도치 구조가 형성됩니다. 주어의 상태를 설명하는 보어 자리이므로 부사가 아닌 형용사를 써야 합니다.",
                "oxCompare": "O: Blessed are those who believe. / X: Blessedly are those who believe.",
                "trap": "도치되었을 때 동사 뒤에 있는 '진짜 주어'를 찾아 수일치를 맞춰야 하며, 보어의 원래 품사가 형용사인지 부사인지 판별해야 합니다.",
                "quizLink": "수능 29번에서 형용사/부사 선택과 도치 수일치가 융합된 고난도 킬러입니다."
            },
            {
                "formulaId": "lv5_u14_f2",
                "tag": "유사보어 및 상태 유지 동사 (remain, stay, turn, prove)",
                "en": "The true identity of the mysterious benefactor remained completely unknown.",
                "ko": "그 신비로운 은인의 진짜 정체는 완전히 알려지지 않은 상태로 남아있었다.",
                "point": "remain, stay, prove, turn, keep 등의 불완전자동사는 뒤에 주어의 상태를 서술하는 주격 보어로 '형용사/분사'를 취합니다. 우리말 해석이 '~하게'로 되더라도 부사를 쓸 수 없습니다.",
                "oxCompare": "O: The patient remained calm during surgery. / X: The patient remained calmly during surgery.",
                "trap": "형용사 보어 앞뒤에 부사가 끼어들어 수식하는 경우(completely unknown, surprisingly calm) 부사와 형용사의 위치 관계를 잘 살펴야 합니다.",
                "quizLink": "고교 내신 및 수능 어법에서 단골로 출제되는 2형식 보어 판정법입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv5_u14_d1",
                "sentence": "Despite fierce criticism from the media, the president remained firmly in his controversial policy.",
                "underlined": ["Despite fierce criticism", "from the media", "the president remained firmly", "in his controversial policy"],
                "wrongIndex": 2,
                "correction": "the president remained firm",
                "explanation": "remain은 2형식 동사로 주격 보어 자리에 형용사를 취하므로 부사 firmly가 아닌 형용사 firm(확고한)을 써야 합니다.",
                "conceptRef": "lv5_u14_f2"
            },
            {
                "drillId": "lv5_u14_d2",
                "sentence": "So quietly was the night that even the rustling of dried leaves sounded deafening.",
                "underlined": ["So quietly was", "the night that", "even the rustling", "sounded deafening"],
                "wrongIndex": 0,
                "correction": "So quiet was",
                "explanation": "원래 문장은 'The night was so quiet that ~'이며 so quiet가 문두로 도치된 구조입니다. be동사 was의 주격 보어 자리이므로 부사 quietly가 아니라 형용사 quiet를 써야 합니다.",
                "conceptRef": "lv5_u14_f1"
            },
            {
                "drillId": "lv5_u14_d3",
                "sentence": "The fresh bread smelled deliciously and attracted hungry customers into the bakery.",
                "underlined": ["The fresh bread", "smelled deliciously", "and attracted hungry customers", "into the bakery"],
                "wrongIndex": 1,
                "correction": "smelled delicious",
                "explanation": "smell은 감각동사이므로 주격 보어로 부사(deliciously)가 아닌 형용사(delicious)가 와야 합니다.",
                "conceptRef": "lv5_u14_f2"
            }
        ],
        "questions": [
            {
                "qId": "lv5_u14_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "So _______ was the damage caused by the earthquake that entire neighborhoods were declared uninhabitable.",
                "options": ["severe", "severely", "severity", "severest", "severeness"],
                "ans": 1,
                "exp": "원래 문장은 'The damage caused by the earthquake was so severe that ~'이며 so + 형용사 보어가 문두로 도치된 구조입니다. be동사 was의 보어이므로 형용사 severe가 올바릅니다.",
                "conceptRef": "lv5_u14_f1"
            },
            {
                "qId": "lv5_u14_q2",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "The milk in the refrigerator turned sourly after two weeks.",
                    "The defense lawyer proved the witness's testimony false.",
                    "The committee considered the new proposal very favorably for the budget.",
                    "The perfume smells too strongly for an office environment.",
                    "She appeared calmly despite the unexpected crisis."
                ],
                "ans": 2,
                "exp": "proved + 목적어(the witness's testimony) + 형용사 목적격보어(false)의 5형식 구조가 완벽합니다. 1번은 sour, 4번은 strong, 5번은 calm이 되어야 합니다.",
                "conceptRef": "lv5_u14_f2"
            },
            {
                "qId": "lv5_u14_q3",
                "instruction": "다음 문장의 괄호 (A), (B)에서 어법에 맞는 표현으로 가장 적절한 것은?",
                "prompt": "The ancient ruins lay (A) [hidden / hiddenly] beneath the jungle canopy, and the air around them felt (B) [mysterious / mysteriously] cold.",
                "options": [
                    "hidden - mysterious",
                    "hidden - mysteriously",
                    "hiddenly - mysterious",
                    "hiddenly - mysteriously",
                    "hiding - mysterious"
                ],
                "ans": 2,
                "exp": "(A) lay는 완전자동사 뒤에 주어의 상태를 설명하는 유사보어(형용사/분사)로 hidden이 오고, (B) cold라는 형용사 보어를 수식하는 부사이므로 mysteriously가 적절합니다.",
                "conceptRef": "lv5_u14_f2"
            },
            {
                "qId": "lv5_u14_q4",
                "instruction": "다음 밑줄 친 부분 중 어법상 틀린 것은?",
                "prompt": "Although the global economy appears ① stable on the surface, underlying financial indicators remain deeply ② concerning to economists who observe market volatility ③ close and anticipate that inflation will persist ④ stubbornly throughout the year.",
                "options": ["①", "②", "③", "④", "없음"],
                "ans": 3,
                "exp": "'시장 변동성을 면밀하게 관찰하는'의 의미로 동사 observe를 수식하는 부사가 필요하므로 형용사 close가 아니라 부사 closely로 고쳐야 합니다.",
                "conceptRef": "lv5_u14_f1"
            },
            {
                "qId": "lv5_u14_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Many modern artists strive to make their creative expressions ① accessible to diverse audiences. When art becomes ② overly complicated, viewers often feel ③ disconnected and alienated. Great artworks, however, manage to stay ④ visually compelling while conveying profound ideas ⑤ clear to observant viewers.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 5,
                "exp": "아이디어를 '명확하게 전달하면서'라는 의미로 동명사 conveying을 수식하는 부사가 필요하므로 형용사 clear 대신 부사 clearly를 써야 합니다.",
                "conceptRef": "lv5_u14_f2"
            }
        ]
    }
]

if __name__ == '__main__':
    print(f"LV5 Part 1 loaded: {len(LV5_PART1)} units")
    for u in LV5_PART1:
        print(f"  Unit {u['unitNo']}: {u['title']} (Drills: {len(u['spottingDrills'])}, Qs: {len(u['questions'])})")
