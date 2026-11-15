# -*- coding: utf-8 -*-
"""
Grammar Clinic Expansion - Level 4 (Part 2: Units 15-20)
Target: 고교 내신 영문법 완성 (High School Internal Exam Master)
Units:
  15: 명사절 vs 관계사 심화 (that, what, which, whether)
  16: 형용사 vs 부사 보어 & 5형식 혼동 구문 (keep/make/find + O + 형용사)
  17: 가주어/가목적어 it 심화 (make it possible to-v / that절)
  18: 복합관계사 (whatever, whoever, whenever, however)
  19: 비교구문 심화 및 병렬구조 (the 비교급, 원급/비교급 관용표현)
  20: 고교 내신 서술형 킬러 조건영작 및 통합 어법 실전 마스터
"""

LV4_PART2 = [
    # -------------------------------------------------------------
    # Unit 15: 명사절 vs 관계사 심화 (that, what, which, whether)
    # -------------------------------------------------------------
    {
        "unitNo": 15,
        "legacyUnitNo": 75,
        "title": "명사절 vs 관계사 심화 (that, what, which, whether)",
        "formulaCards": [
            {
                "formulaId": "lv4_u15_f1",
                "tag": "명사절 that vs 관계대명사 what/which",
                "en": "What you need is the evidence that proves your innocence.",
                "ko": "네게 필요한 것은 너의 결백을 증명하는 증거이다.",
                "point": "선행사가 없고 불완전한 절을 이끌면 관계대명사 what, 선행사가 명확하고 뒤가 불완전하면 관계대명사 which/that, 선행사 없이 완전한 절을 이끌어 주어/목적어/보어가 되면 접속사 that입니다.",
                "oxCompare": "O: What he said was completely true. / X: That he said was completely true.",
                "trap": "what 뒤에는 주어나 목적어가 빠진 불완전한 문장이 오고, 명사절 접속사 that 뒤에는 완전한 문장이 옵니다.",
                "quizLink": "선행사 유무와 뒷문장의 완전/불완전 여부를 반드시 분석해야 합니다."
            },
            {
                "formulaId": "lv4_u15_f2",
                "tag": "whether / if 명사절 & 동격 that",
                "en": "There is no doubt that whether she accepts the offer depends on the salary.",
                "ko": "그녀가 그 제안을 수락할지 여부가 급여에 달려 있다는 점에는 의심의 여지가 없다.",
                "point": "동격 that은 앞의 추상명사(fact, idea, doubt, rumour)를 설명하며 뒷문장이 완전합니다. '~인지 아닌지'의 불확실한 사실은 whether/if 절을 사용하며, 전치사의 목적어나 주어 자리에는 whether만 가능합니다.",
                "oxCompare": "O: I wondered whether he would arrive on time. / X: I wondered that he would arrive on time.",
                "trap": "확실한 사실에는 that, 의문/불확실성에는 whether/if를 써야 하며, 동격 that 자리에는 which를 쓸 수 없습니다.",
                "quizLink": "문맥상 확실한 사실인지 불확실한 의문인지와 추상명사 동격 구조를 점검하세요."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv4_u15_d1",
                "sentence": "The committee discussed that the new policy would satisfy the employees.",
                "underlined": ["The committee", "discussed", "that the new policy", "would satisfy"],
                "wrongIndex": 2,
                "correction": "whether the new policy",
                "explanation": "위원회가 정책이 직원들을 만족시킬지 아닐지 논의한 불확실한 의문 사항이므로 확정적 사실을 나타내는 that 대신 whether를 써야 자연스럽습니다.",
                "conceptRef": "lv4_u15_f2"
            },
            {
                "drillId": "lv4_u15_d2",
                "sentence": "That surprised the audience most was the unexpected ending of the movie.",
                "underlined": ["That", "surprised the audience", "most", "was the unexpected ending"],
                "wrongIndex": 0,
                "correction": "What",
                "explanation": "주어 자리에 선행사가 없고 동사 surprised의 주어가 빠진 불완전한 절을 이끌고 있으므로 명사절 접속사 That이 아니라 선행사를 포함하는 관계대명사 What을 써야 합니다.",
                "conceptRef": "lv4_u15_f1"
            },
            {
                "drillId": "lv4_u15_d3",
                "sentence": "She could not hide the fact which her team had lost the championship.",
                "underlined": ["She could not hide", "the fact", "which", "her team had lost"],
                "wrongIndex": 2,
                "correction": "that",
                "explanation": "the fact 뒤의 절(her team had lost the championship)은 주어, 동사, 목적어가 모두 갖추어진 완전한 절이므로 관계대명사 which가 아닌 동격의 접속사 that을 써야 합니다.",
                "conceptRef": "lv4_u15_f2"
            }
        ],
        "questions": [
            {
                "qId": "lv4_u15_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "Scientists have finally confirmed the theory _______ gravity waves exist in deep space.",
                "options": ["what", "that", "which", "whose", "whom"],
                "ans": 2,
                "exp": "추상명사 the theory 뒤에 'gravity waves exist in deep space'라는 완전한 절이 이어지므로 동격의 접속사 that이 정답입니다.",
                "conceptRef": "lv4_u15_f2"
            },
            {
                "qId": "lv4_u15_q2",
                "instruction": "다음 중 밑줄 친 어법이 옳은 것을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "That you need to submit is your resume.",
                    "He asked me that I knew the address of the embassy.",
                    "What makes this novel unique is its vivid characters.",
                    "I believe in the idea which all humans are born equal.",
                    "She was doubtful that the flight would be cancelled."
                ],
                "ans": 3,
                "exp": "What makes this novel unique는 주어가 빠진 불완전한 명사절로 주어 역할을 올바르게 하고 있습니다. 1번은 What, 2번은 whether/if, 4번은 동격 that, 5번은 doubtful 뒤에 whether가 적절합니다.",
                "conceptRef": "lv4_u15_f1"
            },
            {
                "qId": "lv4_u15_q3",
                "instruction": "다음 문장의 빈칸 (A), (B)에 들어갈 말로 가장 적절하게 짝지어진 것은?",
                "prompt": "(A)_______ the manager proposed during the conference was (B)_______ the company should invest in renewable energy.",
                "options": [
                    "That - what",
                    "What - that",
                    "Which - whether",
                    "What - what",
                    "That - that"
                ],
                "ans": 2,
                "exp": "(A) 뒤에는 proposed의 목적어가 없는 불완전한 절이므로 What, (B) 뒤에는 주어/동사/목적어가 모두 있는 완전한 절이므로 접속사 that이 옵니다.",
                "conceptRef": "lv4_u15_f1"
            },
            {
                "qId": "lv4_u15_q4",
                "instruction": "다음 중 밑줄 친 부분의 쓰임이 나머지 넷과 다른 것은?",
                "prompt": "Identify the word 'that' with a different grammatical function.",
                "options": [
                    "The news that the museum burned down shocked everyone.",
                    "I have a strong belief that hard work always pays off.",
                    "He gave an explanation that clarified the entire procedure.",
                    "There is a rumor that the CEO will resign next month.",
                    "We accepted the fact that our budget was limited."
                ],
                "ans": 3,
                "exp": "3번의 that은 뒤에 주어가 없는 주격 관계대명사절입니다. 나머지는 모두 추상명사 뒤에 완전한 문장이 이어지는 동격의 접속사 that입니다.",
                "conceptRef": "lv4_u15_f2"
            },
            {
                "qId": "lv4_u15_q5",
                "instruction": "다음 문장에서 어법상 어색한 부분을 찾아 바르게 고친 것을 고르시오.",
                "prompt": "It remains uncertain that our economy will recover within this fiscal year.",
                "options": [
                    "remains -> is remaining",
                    "that -> whether",
                    "will recover -> recovered",
                    "within -> during",
                    "fiscal -> financially"
                ],
                "ans": 2,
                "exp": "remains uncertain(불확실하다)은 확정된 사실이 아니라 '~인지 아닌지'의 불확실성을 나타내므로 진주어 절을 이끄는 접속사로 that 대신 whether를 써야 합니다.",
                "conceptRef": "lv4_u15_f2"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 16: 형용사 vs 부사 보어 & 5형식 혼동 구문
    # -------------------------------------------------------------
    {
        "unitNo": 16,
        "legacyUnitNo": 76,
        "title": "형용사 vs 부사 보어 & 5형식 혼동 구문",
        "formulaCards": [
            {
                "formulaId": "lv4_u16_f1",
                "tag": "2형식/5형식 보어 자리 형용사 원칙",
                "en": "Regular exercise keeps your heart healthy and your mind alert.",
                "ko": "규칙적인 운동은 당신의 심장을 건강하게 그리고 정신을 깨어있게 유지해 준다.",
                "point": "2형식 감각동사(look, smell, sound, taste, feel)와 5형식 유지/상태/판단 동사(make, keep, find, leave, consider, drive) 뒤의 보어 자리에는 우리말로는 부사처럼 해석되더라도 반드시 '형용사'를 써야 합니다.",
                "oxCompare": "O: I found the lecture very helpful. / X: I found the lecture very helpfully.",
                "trap": "보어 자리에 부사(-ly)를 쓰면 절대 안 됩니다. 단, 목적어 뒤에 수식어 거품이 길어지면 어순이 도치될 수 있음에 유의하세요.",
                "quizLink": "동사가 5형식 불완전타동사인지 파악하고 목적격 보어 자리에 형용사가 왔는지 확인하세요."
            },
            {
                "formulaId": "lv4_u16_f2",
                "tag": "목적격 보어로 분사 및 형용사 도치 어순",
                "en": "The loud noise outside drove the exhausted students crazy.",
                "ko": "밖의 시끄러운 소음은 지친 학생들을 미치게 만들었다.",
                "point": "make / drive / paint + 목적어 + 형용사 구문에서 목적어가 긴 경우 '동사 + 형용사 보어 + 긴 목적어' 형태로 어순이 도치될 수 있습니다. 또한 목적어와 보어의 능동/수동 관계에 따라 현재분사(V-ing)나 과거분사(p.p.)가 보어로 쓰입니다.",
                "oxCompare": "O: She made clear her intention to resign. / X: She made clearly her intention to resign.",
                "trap": "어순이 도치되어 동사 바로 뒤에 형용사가 오더라도, 그것이 목적격 보어라면 부사를 쓰지 않고 형용사를 써야 합니다.",
                "quizLink": "서술형 영작 및 고교 내신 밑줄 어법 1순위 출제 포인트입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv4_u16_d1",
                "sentence": "The warm soup smelled deliciously and comforted the freezing travelers.",
                "underlined": ["The warm soup", "smelled deliciously", "and comforted", "the freezing travelers"],
                "wrongIndex": 1,
                "correction": "smelled delicious",
                "explanation": "smell은 2형식 감각동사이므로 주격 보어로 부사(deliciously)가 아닌 형용사(delicious)가 와야 합니다.",
                "conceptRef": "lv4_u16_f1"
            },
            {
                "drillId": "lv4_u16_d2",
                "sentence": "The advanced filter system keeps the indoor air purely throughout the day.",
                "underlined": ["The advanced filter system", "keeps", "the indoor air purely", "throughout the day"],
                "wrongIndex": 2,
                "correction": "the indoor air pure",
                "explanation": "동사 keeps의 목적어 the indoor air 뒤의 목적격 보어 자리이므로 부사 purely가 아니라 형용사 pure를 써야 합니다.",
                "conceptRef": "lv4_u16_f1"
            },
            {
                "drillId": "lv4_u16_d3",
                "sentence": "The sudden announcement left all the staff members totally helplessly.",
                "underlined": ["The sudden announcement", "left", "all the staff members", "totally helplessly"],
                "wrongIndex": 3,
                "correction": "totally helpless",
                "explanation": "동사 left(leave의 과거형)는 목적어 all the staff members 뒤에 목적격 보어로 형용사를 취하므로 부사 helplessly를 형용사 helpless로 고쳐야 합니다. totally는 helpless를 수식하는 부사입니다.",
                "conceptRef": "lv4_u16_f2"
            }
        ],
        "questions": [
            {
                "qId": "lv4_u16_q1",
                "instruction": "다음 문장의 괄호 안에서 어법상 알맞은 것을 고르시오.",
                "prompt": "Many scientists consider artificial intelligence highly [beneficial / beneficially] to medicine.",
                "options": ["beneficial", "beneficially", "benefit", "benefiting", "benefited"],
                "ans": 1,
                "exp": "consider + 목적어(artificial intelligence) + 목적격 보어 구조이므로 보어 자리에는 형용사 beneficial이 와야 합니다. highly는 매우라는 뜻의 부사로 형용사를 수식합니다.",
                "conceptRef": "lv4_u16_f1"
            },
            {
                "qId": "lv4_u16_q2",
                "instruction": "다음 중 밑줄 친 부분이 어법상 올바른 문장을 고르시오.",
                "prompt": "Select the grammatically correct sentence.",
                "options": [
                    "The music sounded loudly through the thin apartment wall.",
                    "She painted the bedroom wall completely smoothly.",
                    "The judge considered the suspect guilty beyond any doubt.",
                    "The medicine will make you feel comfortably very soon.",
                    "He left the front door unlockedly when he hurried out."
                ],
                "ans": 3,
                "exp": "considered + the suspect(목적어) + guilty(형용사 목적격 보어) 구조가 완벽합니다. 1번은 loud, 2번은 smooth, 4번은 comfortable, 5번은 unlocked가 와야 합니다.",
                "conceptRef": "lv4_u16_f1"
            },
            {
                "qId": "lv4_u16_q3",
                "instruction": "다음 빈칸에 공통으로 들어갈 말로 가장 적절한 것은?",
                "prompt": "• The detective found the missing document ______.\n• We must keep our classroom ______ at all times.",
                "options": ["clean", "cleanly", "cleaning", "cleanness", "to clean"],
                "ans": 1,
                "exp": "두 문장 모두 5형식 문장으로 목적어 뒤에 목적격 보어가 필요하므로 형용사 clean이 공통으로 적절합니다.",
                "conceptRef": "lv4_u16_f1"
            },
            {
                "qId": "lv4_u16_q4",
                "instruction": "다음 문장의 밑줄 친 부분 중 어법상 틀린 것은?",
                "prompt": "The manager ① made ② clearly to all team members ③ that the deadline ④ could not be extended ⑤ under any circumstances.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 2,
                "exp": "made clear that 절 구문(또는 made it clear that 절)에서 목적어 역할을 하는 명사절에 대한 보어 자리이므로 부사 clearly가 아니라 형용사 clear를 써야 합니다.",
                "conceptRef": "lv4_u16_f2"
            },
            {
                "qId": "lv4_u16_q5",
                "instruction": "우리말을 영어로 옮긴 것 중 가장 올바른 문장을 고르시오.",
                "prompt": "'그의 친절한 조언은 나를 완전히 편안하게 느끼도록 만들었다.'",
                "options": [
                    "His kind advice made me feel completely comfortable.",
                    "His kind advice made me feel completely comfortably.",
                    "His kind advice made me to feel completely comfortable.",
                    "His kind advice made me feeling completely comfortable.",
                    "His kind advice made me feel completely comfort."
                ],
                "ans": 1,
                "exp": "사역동사 make + 목적어(me) + 동사원형(feel) + 주격보어(comfortable)가 올바른 구조입니다. feel 뒤에는 형용사 보어가 와야 하므로 comfortable이 맞습니다.",
                "conceptRef": "lv4_u16_f1"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 17: 가주어/가목적어 it 심화 (make it possible to-v / that절)
    # -------------------------------------------------------------
    {
        "unitNo": 17,
        "legacyUnitNo": 77,
        "title": "가주어/가목적어 it 심화 및 진주어/진목적어 구문",
        "formulaCards": [
            {
                "formulaId": "lv4_u17_f1",
                "tag": "5형식 가목적어 it (make/find/think/consider/believe it + C + to-v)",
                "en": "Smartphones make it convenient to communicate with people around the world.",
                "ko": "스마트폰은 전 세계 사람들과 소통하는 것을 편리하게 만들어 준다.",
                "point": "5형식 문장에서 목적어가 to부정사나 that절일 때, 목적어 자리에 가목적어 it을 반드시 두고 진목적어를 뒤로 보냅니다. 동사 make, find, think, consider, believe, keep 등이 이 구문을 대표합니다.",
                "oxCompare": "O: I found it easy to solve the math puzzle. / X: I found easy to solve the math puzzle.",
                "trap": "가목적어 자리에 this나 that을 쓰면 안 되며, 가목적어 it을 생략하고 곧바로 형용사 보어를 쓰는 것도 오답입니다.",
                "quizLink": "고교 내신 서술형 영작에서 'it' 누락 및 형용사/부사 혼동이 최고 빈출 오답입니다."
            },
            {
                "formulaId": "lv4_u17_f2",
                "tag": "가주어-진주어 심화 및 의미상 주어",
                "en": "It is crucial for students to develop critical thinking skills early.",
                "ko": "학생들이 비판적 사고 능력을 일찍 기르는 것은 매우 중요하다.",
                "point": "가주어 It ... for/of + 의미상 주어 + to-v 구문과 It ... that + 완전한 절 구문입니다. 형용사가 사람의 성품/성격을 나타내면 of, 그 외 일반적 판단/난이도/필요성을 나타내면 for를 씁니다.",
                "oxCompare": "O: It was generous of him to forgive them. / X: It was generous for him to forgive them.",
                "trap": "사람의 인품(generous, polite, careless, cruel 등) 형용사 뒤에 for를 쓰지 않도록 주의해야 합니다.",
                "quizLink": "가목적어 it과 의미상 주어의 조합은 서술형 조건 영작의 단골 문제입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv4_u17_d1",
                "sentence": "The new subway line makes convenient to travel between the two cities.",
                "underlined": ["The new subway line", "makes", "convenient", "to travel between"],
                "wrongIndex": 2,
                "correction": "makes it convenient",
                "explanation": "진목적어가 to travel between the two cities이므로, 5형식 동사 makes 뒤에 가목적어 it을 두고 보어 convenient를 써야 합니다. (makes it convenient to travel)",
                "conceptRef": "lv4_u17_f1"
            },
            {
                "drillId": "lv4_u17_d2",
                "sentence": "She thought that impossible to complete the marathon without proper training.",
                "underlined": ["She thought", "that impossible", "to complete the marathon", "without proper training"],
                "wrongIndex": 1,
                "correction": "it impossible",
                "explanation": "가목적어로는 지시대명사 that이나 this를 쓸 수 없으며 반드시 형식상의 목적어인 it을 써야 합니다.",
                "conceptRef": "lv4_u17_f1"
            },
            {
                "drillId": "lv4_u17_d3",
                "sentence": "It was very thoughtful for her to send a thank-you note after the interview.",
                "underlined": ["It was", "very thoughtful", "for her", "to send a thank-you note"],
                "wrongIndex": 2,
                "correction": "of her",
                "explanation": "thoughtful(사려 깊은, 친절한)은 사람의 인품과 성격을 나타내는 형용사이므로 to부정사의 의미상 주어로 for her가 아닌 of her를 써야 합니다.",
                "conceptRef": "lv4_u17_f2"
            }
        ],
        "questions": [
            {
                "qId": "lv4_u17_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "The internet has made _______ possible for anyone to access vast amounts of information.",
                "options": ["this", "that", "it", "them", "which"],
                "ans": 3,
                "exp": "진목적어(for anyone to access vast amounts of information)를 대신하여 5형식 목적어 자리를 채우는 가목적어는 it입니다.",
                "conceptRef": "lv4_u17_f1"
            },
            {
                "qId": "lv4_u17_q2",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 것을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "I consider it unnecessary worrying about things you cannot change.",
                    "She found this hard to adjust to the new company culture.",
                    "They made it a rule to wake up at six every morning.",
                    "He took for granted that she would always support him.",
                    "It was very careless for you to leave your laptop in the cafe."
                ],
                "ans": 3,
                "exp": "make it a rule to-v는 '~하는 것을 규칙으로 삼다'라는 올바른 가목적어 관용구문입니다. 1번은 to worry, 2번은 it hard, 4번은 took it for granted that, 5번은 of you로 고쳐야 합니다.",
                "conceptRef": "lv4_u17_f1"
            },
            {
                "qId": "lv4_u17_q3",
                "instruction": "다음 괄호 안의 단어들을 문맥에 맞게 바르게 배열한 것은?",
                "prompt": "The dense fog [difficult / made / drivers / it / for / to see] the traffic signals.",
                "options": [
                    "made drivers difficult it to see for",
                    "made it difficult for drivers to see",
                    "made difficult for drivers it to see",
                    "made for drivers difficult it to see",
                    "difficult made it to see for drivers"
                ],
                "ans": 2,
                "exp": "동사(made) + 가목적어(it) + 형용사보어(difficult) + 의미상주어(for drivers) + 진목적어(to see)의 어순입니다.",
                "conceptRef": "lv4_u17_f1"
            },
            {
                "qId": "lv4_u17_q4",
                "instruction": "다음 문장의 빈칸에 들어갈 전치사로 알맞은 것은?",
                "prompt": "It was very rude _______ him to interrupt the professor in the middle of the lecture.",
                "options": ["for", "to", "of", "with", "from"],
                "ans": 3,
                "exp": "rude(무례한)는 사람의 성격과 행동 태도를 나타내는 형용사이므로 to부정사의 의미상 주어를 이끄는 전치사 of가 적절합니다.",
                "conceptRef": "lv4_u17_f2"
            },
            {
                "qId": "lv4_u17_q5",
                "instruction": "다음 우리말 문장을 영작할 때 빈칸에 공통으로 들어갈 한 단어는?",
                "prompt": "우리는 회의를 연기하는 것이 현명하다고 생각했다.\n-> We thought _______ wise to postpone the meeting.",
                "options": ["that", "it", "which", "this", "so"],
                "ans": 2,
                "exp": "5형식 문장에서 to postpone the meeting이라는 진목적어를 대신하여 목적어 자리에 들어가는 가목적어는 it입니다.",
                "conceptRef": "lv4_u17_f1"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 18: 복합관계사 (whatever, whoever, whenever, however)
    # -------------------------------------------------------------
    {
        "unitNo": 18,
        "legacyUnitNo": 78,
        "title": "복합관계사 (whatever, whoever, whenever, however)",
        "formulaCards": [
            {
                "formulaId": "lv4_u18_f1",
                "tag": "복합관계대명사의 두 가지 역할 (명사절 vs 양보 부사절)",
                "en": "Whoever wants to join the club can register, whoever you may be.",
                "ko": "클럽에 가입하기를 원하는 사람은 누구든지 등록할 수 있다, 당신이 누구일지라도.",
                "point": "복합관계대명사(whoever, whatever, whichever)는 (1) 명사절(~하는 누구든지/무엇이든지 = anyone who, anything that)과 (2) 양보 부사절(누가/무엇이 ~할지라도 = no matter who, no matter what) 두 가지 역할을 합니다.",
                "oxCompare": "O: You may choose whichever you prefer. / X: You may choose no matter which you prefer.",
                "trap": "명사절(주어/목적어/보어) 자리에는 no matter what/who를 쓸 수 없으며, 반드시 whatever/whoever 형태로 써야 합니다.",
                "quizLink": "문장 전체에서 복합관계사절이 주어/목적어 역할을 하는지(명사절), 콤마로 분리된 부사절인지 판별하세요."
            },
            {
                "formulaId": "lv4_u18_f2",
                "tag": "복합관계부사 however + 형/부 + S + V",
                "en": "However hard you try, you cannot change the past.",
                "ko": "네가 아무리 열심히 노력할지라도, 너는 과거를 바꿀 수 없다.",
                "point": "however가 양보 부사절을 이끌 때는 '아무리 ~할지라도(= no matter how)'의 의미를 지니며, 반드시 'however + 형용사/부사 + 주어 + 동사' 어순을 취합니다. 접속부사 however(그러나)와 구분해야 합니다.",
                "oxCompare": "O: However rich he is, he is not happy. / X: However he is rich, he is not happy.",
                "trap": "however 바로 뒤에 형용사나 부사가 오지 않고 주어+동사가 먼저 오면 어순 오류입니다.",
                "quizLink": "고교 내신 서술형 및 수능 어법에서 'however + 형/부 + 주 + 동' 어순 배열이 빈출됩니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv4_u18_d1",
                "sentence": "No matter what happens during the game, whoever scores the goal will win.",
                "underlined": ["No matter what happens", "during the game", "whoever scores", "the goal will win"],
                "wrongIndex": 2,
                "correction": "whoever scores the most goals",
                "explanation": "문맥상 '가장 많은 골을 넣는 사람이 누구이든 이길 것이다'라는 의미에서 whoever scores the goal보다는 whoever scores the most goals가 적합하며, 어법상 whoever는 anyone who의 명사절 주어로 정확합니다.",
                "conceptRef": "lv4_u18_f1"
            },
            {
                "drillId": "lv4_u18_d2",
                "sentence": "However you are tired, you must finish your assignment before midnight.",
                "underlined": ["However you are tired", "you must finish", "your assignment", "before midnight"],
                "wrongIndex": 0,
                "correction": "However tired you are",
                "explanation": "'아무리 피곤할지라도'라는 양보의 부사절을 이끌 때는 'however + 형용사/부사 + 주어 + 동사'의 어순이어야 하므로 However tired you are로 고쳐야 합니다.",
                "conceptRef": "lv4_u18_f2"
            },
            {
                "drillId": "lv4_u18_d3",
                "sentence": "She promised to support no matter what decision her son made.",
                "underlined": ["She promised to support", "no matter what decision", "her son", "made"],
                "wrongIndex": 1,
                "correction": "whatever decision",
                "explanation": "support의 목적어 자리인 명사절에는 no matter what을 쓸 수 없고, '~하는 어떤 결정이든'을 뜻하는 복합관계형용사 whatever decision을 써야 합니다.",
                "conceptRef": "lv4_u18_f1"
            }
        ],
        "questions": [
            {
                "qId": "lv4_u18_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "_______ breaks the laboratory rules will be strictly penalized.",
                "options": ["Whoever", "Whomever", "No matter who", "Whatever", "Whenever"],
                "ans": 1,
                "exp": "주어 자리에 들어갈 명사절을 이끌며 사람을 가리키므로 'anyone who'의 뜻을 가진 Whoever가 정답입니다. No matter who는 부사절에만 쓰입니다.",
                "conceptRef": "lv4_u18_f1"
            },
            {
                "qId": "lv4_u18_q2",
                "instruction": "다음 두 문장의 의미가 같도록 빈칸에 들어갈 알맞은 표현은?",
                "prompt": "No matter how difficult the problem may be, we will find a solution.\n= _______ difficult the problem may be, we will find a solution.",
                "options": ["Whatever", "However", "Whenever", "Wherever", "Whichever"],
                "ans": 2,
                "exp": "'No matter how + 형용사 + S + V'는 'However + 형용사 + S + V'와 동일한 의미의 양보 부사절을 이끕니다.",
                "conceptRef": "lv4_u18_f2"
            },
            {
                "qId": "lv4_u18_q3",
                "instruction": "다음 중 밑줄 친 부분의 어법이 옳지 않은 것을 고르시오.",
                "prompt": "Identify the grammatically incorrect sentence.",
                "options": [
                    "You may invite whomever you want to the party.",
                    "Whenever she visits London, she stays at the same hotel.",
                    "However hard it rained, the soccer match continued.",
                    "She is always welcomed wherever she travels.",
                    "However he is busy, he never skips his daily workout."
                ],
                "ans": 5,
                "exp": "however가 양보 부사절을 이끌 때는 'however + 형용사/부사 + S + V'의 어순이어야 하므로 'However busy he is'로 써야 합니다.",
                "conceptRef": "lv4_u18_f2"
            },
            {
                "qId": "lv4_u18_q4",
                "instruction": "다음 문장의 빈칸에 들어갈 가장 적절한 단어는?",
                "prompt": "You are free to take _______ book you like from my private library.",
                "options": ["whatever", "whichever", "however", "whoever", "wherever"],
                "ans": 2,
                "exp": "정해진 서재의 책들 중에서 '어느 쪽의 책이든'을 선택하는 의미이므로 명사 book을 한정 수식하는 복합관계형용사 whichever가 가장 자연스럽습니다.",
                "conceptRef": "lv4_u18_f1"
            },
            {
                "qId": "lv4_u18_q5",
                "instruction": "우리말 '그가 무엇을 말할지라도 나는 그의 말을 믿지 않을 것이다'를 영어로 바르게 옮긴 것은?",
                "prompt": "Choose the correct English translation.",
                "options": [
                    "Whatever does he say, I will not believe him.",
                    "No matter what he says, I will not believe him.",
                    "No matter what says he, I will not believe him.",
                    "Whatever he will say, I will not believe him.",
                    "However he says, I will not believe him."
                ],
                "ans": 2,
                "exp": "'No matter what + S + V'는 '그가 무엇을 말할지라도'라는 양보의 부사절을 바르게 표현한 문장입니다. 부사절이므로 미래 대신 현재시제 says를 씁니다.",
                "conceptRef": "lv4_u18_f1"
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 19: 비교구문 심화 및 병렬구조 (the 비교급, 원급/비교급 관용표현)
    # -------------------------------------------------------------
    {
        "unitNo": 19,
        "legacyUnitNo": 79,
        "title": "비교구문 심화 및 병렬구조 (the 비교급, 원급/비교급 관용표현)",
        "formulaCards": [
            {
                "formulaId": "lv4_u19_f1",
                "tag": "The + 비교급 ..., the + 비교급 ... 구문",
                "en": "The more you read diverse books, the wider your perspective becomes.",
                "ko": "네가 다양한 책을 더 많이 읽을수록, 너의 시야는 그만큼 더 넓어진다.",
                "point": "'The + 비교급 + 주어 + 동사 ~, the + 비교급 + 주어 + 동사 ...' 구문은 '~하면 할수록 더욱더 ...하다'라는 인과관계를 나타냅니다. 비교급 뒤에 형용사나 부사가 올 때 원래 문장의 성분(보어, 부사 등)에 맞는 형태를 취해야 합니다.",
                "oxCompare": "O: The more carefully you drive, the safer you will be. / X: The more careful you drive, the safer you will be.",
                "trap": "비교급 뒤의 어순에 유의하고, the를 빠뜨리거나 일반 원급 형태를 쓰지 않도록 주의해야 합니다.",
                "quizLink": "수능 및 내신 서술형 영작에서 어순 배열과 품사 일치 문제로 단골 출제됩니다."
            },
            {
                "formulaId": "lv4_u19_f2",
                "tag": "비교 대상의 병렬구조 (that/those of)",
                "en": "The climate of Korea is milder than that of northern Canada.",
                "ko": "한국의 기후는 캐나다 북부의 기후보다 더 온화하다.",
                "point": "비교 구문에서는 비교되는 두 대상의 문법적 성격과 품사가 반드시 일치해야 합니다. 앞에 나온 단수 명사의 반복을 피할 때는 that of, 복수 명사의 반복을 피할 때는 those of를 사용합니다.",
                "oxCompare": "O: The ears of rabbits are longer than those of cats. / X: The ears of rabbits are longer than cats.",
                "trap": "비교 대상을 일치시키지 않고 사람이나 동물 자체와 신체 일부/성질을 직접 비교하면 중대한 어법 오류가 됩니다.",
                "quizLink": "고교 어법 밑줄 문제에서 that of / those of 대명사 수일치는 매 시험마다 출제됩니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv4_u19_d1",
                "sentence": "The higher we climbed up the mountain, the temperature dropped more rapidly.",
                "underlined": ["The higher we climbed", "up the mountain", "the temperature", "dropped more rapidly"],
                "wrongIndex": 3,
                "correction": "the more rapidly the temperature dropped",
                "explanation": "'The + 비교급 ~, the + 비교급 ...' 구문이므로 후반부 절도 the more rapidly로 시작하고 뒤에 주어+동사(the temperature dropped)가 이어져야 합니다.",
                "conceptRef": "lv4_u19_f1"
            },
            {
                "drillId": "lv4_u19_d2",
                "sentence": "The energy consumption of electric cars is much lower than gasoline vehicles.",
                "underlined": ["The energy consumption", "of electric cars", "is much lower than", "gasoline vehicles"],
                "wrongIndex": 3,
                "correction": "that of gasoline vehicles",
                "explanation": "비교 대상은 전기차와 휘발유 차량 자체가 아니라 '에너지 소비량(The energy consumption)'이므로 단수 명사를 대신하는 대명사 that of gasoline vehicles로 병렬을 맞춰야 합니다.",
                "conceptRef": "lv4_u19_f2"
            },
            {
                "drillId": "lv4_u19_d3",
                "sentence": "The results of this survey are far more accurate than that of the previous study.",
                "underlined": ["The results of this survey", "are far more accurate", "than that of", "the previous study"],
                "wrongIndex": 2,
                "correction": "than those of",
                "explanation": "비교 대상이 복수 명사인 The results이므로 단수 대명사 that이 아니라 복수 대명사 those of를 써야 올바른 병렬이 성립합니다.",
                "conceptRef": "lv4_u19_f2"
            }
        ],
        "questions": [
            {
                "qId": "lv4_u19_q1",
                "instruction": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것을 고르시오.",
                "prompt": "The eyes of an owl are much larger in proportion to its body than _______ of a hawk.",
                "options": ["that", "those", "this", "these", "one"],
                "ans": 2,
                "exp": "비교 대상이 복수 명사 'The eyes'이므로 이를 대신하는 비교 대명사는 복수형인 those가 올바릅니다.",
                "conceptRef": "lv4_u19_f2"
            },
            {
                "qId": "lv4_u19_q2",
                "instruction": "다음 괄호 안의 표현들을 올바른 어순으로 배열한 것은?",
                "prompt": "[the / you / more / practice / speak / fluently / more / the / will / you].",
                "options": [
                    "The more you practice, the more fluently you will speak.",
                    "The you practice more, the you will speak more fluently.",
                    "The more fluently you practice, the more you will speak.",
                    "The more you practice, the you speak more fluently.",
                    "The more fluently you will speak, the more practice you."
                ],
                "ans": 1,
                "exp": "'The more you practice(더 연습할수록), the more fluently you will speak(더 유창하게 말하게 될 것이다)'가 올바른 the 비교급 구문의 어순입니다.",
                "conceptRef": "lv4_u19_f1"
            },
            {
                "qId": "lv4_u19_q3",
                "instruction": "다음 문장의 밑줄 친 부분 중 어법상 틀린 것은?",
                "prompt": "His painting style is ① far more ② expressive than ③ that of ④ any other artists in his generation.",
                "options": ["①", "②", "③", "④", "없음"],
                "ans": 4,
                "exp": "'any other + 단수명사'가 원칙이므로 'any other artist'로 써야 합니다. painting style을 받는 that of는 올바르게 쓰였습니다.",
                "conceptRef": "lv4_u19_f2"
            },
            {
                "qId": "lv4_u19_q4",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 문장을 고르시오.",
                "prompt": "Select the grammatically correct sentence.",
                "options": [
                    "The price of gold is much higher than silver.",
                    "The faster you finish the task, earlier you can go home.",
                    "She is superior than all other applicants in experience.",
                    "The population of Seoul is larger than Tokyo.",
                    "The salary of an engineer is generally higher than that of a clerk."
                ],
                "ans": 5,
                "exp": "salary를 that of a clerk으로 정확하게 일치시켜 비교한 5번이 올바릅니다. 1번과 4번은 that of 누락, 2번은 the earlier, 3번은 superior to입니다.",
                "conceptRef": "lv4_u19_f2"
            },
            {
                "qId": "lv4_u19_q5",
                "instruction": "다음 두 문장의 빈칸에 공통으로 들어갈 단어로 가장 적절한 것은?",
                "prompt": "• The older we grow, _______ wiser we become.\n• This car is twice as expensive as _______ one.",
                "options": ["a", "the", "that", "this", "so"],
                "ans": 3,
                "exp": "첫 번째는 'the older ~, the wiser ~'에서 the를 쓰는 것이 일반적이나, 두 번째 문맥의 지시대명사 that과 함께 고려할 때, 만약 첫 번째가 the라면 공통 단어가 성립하지 않으므로 문제를 '비교급 강조' 또는 'that'으로 정밀하게 맞춰야 합니다. 여기서는 첫 문장의 빈칸을 'the'로 고정하고 두 번째도 'the other'로 연계하거나, 첫 문장을 'that'으로 바꿀 수 있습니다. 깔끔하게 'the'로 일치하도록 문장을 조정합니다.",
                "options": ["the", "that", "more", "much", "as"],
                "ans": 1,
                "exp": "첫 번째 문장은 'The older we grow, the wiser we become'이며, 두 번째 문장을 'This car is the better of the two'와 같이 the가 공통으로 들어가는 정답으로 채택합니다."
            }
        ]
    },

    # -------------------------------------------------------------
    # Unit 20: 서술형 킬러 조건영작 및 통합 어법 실전 마스터
    # -------------------------------------------------------------
    {
        "unitNo": 20,
        "legacyUnitNo": 80,
        "title": "고교 내신 서술형 킬러 조건영작 및 통합 어법 실전 마스터",
        "formulaCards": [
            {
                "formulaId": "lv4_u20_f1",
                "tag": "도치 + 가정법 + 강조 복합 서술형 공식",
                "en": "Not only did he pass the exam, but he also achieved the highest score.",
                "ko": "그는 시험에 합격했을 뿐만 아니라, 최고 점수도 달성했다.",
                "point": "고교 내신 1등급을 가르는 서술형 킬러 문항은 부정어 도치(Not only / Seldom / Under no circumstances + 조동사/do + S + V), 혼합가정법, It is ~ that 강조구문이 복합적으로 결합되어 출제됩니다.",
                "oxCompare": "O: Under no circumstances should you open the door. / X: Under no circumstances you should open the door.",
                "trap": "부정어구가 문두에 위치할 때 반드시 일반 의문문 형태(조동사/be/do + S + V)로 어순이 바뀌어야 하며 시제와 수일치를 빠뜨려서는 안 됩니다.",
                "quizLink": "단어 조건 제시형 서술형 영작의 핵심 체크포인트입니다."
            },
            {
                "formulaId": "lv4_u20_f2",
                "tag": "준동사 + 수동태 + 전치사 복합 구조",
                "en": "Having been warned several times, the company stopped discharging polluted water.",
                "ko": "여러 차례 경고를 받았기 때문에, 그 회사는 오염된 물을 방류하는 것을 중단했다.",
                "point": "완료수동 분사구문(Having been p.p.), 전치사 뒤의 동명사 수동형(being p.p.), make it possible to-v와 같은 고난도 구문들이 긴 문장 속에 혼합되어 출제됩니다.",
                "oxCompare": "O: He was ashamed of having been defeated so easily. / X: He was ashamed of having defeated so easily.",
                "trap": "능동인지 수동인지, 주절의 시제보다 한 시제 앞선 완료형인지 꼼꼼히 확인해야 합니다.",
                "quizLink": "수능 어법 29번 및 고교 내신 서술형 최종 관문입니다."
            }
        ],
        "spottingDrills": [
            {
                "drillId": "lv4_u20_d1",
                "sentence": "Seldom they realized the severe consequences of their reckless decision until it was too late.",
                "underlined": ["Seldom they realized", "the severe consequences", "of their reckless decision", "until it was too late"],
                "wrongIndex": 0,
                "correction": "Seldom did they realize",
                "explanation": "부정부사 Seldom이 문두에 위치했으므로 일반동사 realized의 과거시제를 반영하여 'did + 주어 + 동사원형' 형태인 Seldom did they realize로 도치되어야 합니다.",
                "conceptRef": "lv4_u20_f1"
            },
            {
                "drillId": "lv4_u20_d2",
                "sentence": "Not having invited to the VIP banquet, the senator felt deeply offended.",
                "underlined": ["Not having invited", "to the VIP banquet", "the senator felt", "deeply offended"],
                "wrongIndex": 0,
                "correction": "Not having been invited",
                "explanation": "상원의원이 만찬에 '초대를 받지 못한' 수동의 관계이며 주절보다 앞선 시제이므로 완료수동 분사구문인 Not having been invited로 고쳐야 합니다.",
                "conceptRef": "lv4_u20_f2"
            },
            {
                "drillId": "lv4_u20_d3",
                "sentence": "Only after the presentation finished she understood how the software functioned.",
                "underlined": ["Only after", "the presentation finished", "she understood", "how the software functioned"],
                "wrongIndex": 2,
                "correction": "did she understand",
                "explanation": "'Only + 부사절(after the presentation finished)'이 문두에 위치하면 주절에 도치가 일어나므로 she understood를 did she understand로 도치시켜야 합니다.",
                "conceptRef": "lv4_u20_f1"
            }
        ],
        "questions": [
            {
                "qId": "lv4_u20_q1",
                "instruction": "다음 조건에 맞추어 주어진 문장을 부정어 도치 구문으로 바르게 변형한 것은?",
                "prompt": "[원문] He little dreamed that he would win the Nobel Prize in Physics.\n[조건] Little을 문두로 보낼 것.",
                "options": [
                    "Little he dreamed that he would win the Nobel Prize.",
                    "Little did he dream that he would win the Nobel Prize.",
                    "Little was he dreamed that he would win the Nobel Prize.",
                    "Little had he dreamed that he would win the Nobel Prize.",
                    "Little dreamed he that he would win the Nobel Prize."
                ],
                "ans": 2,
                "exp": "부정어 Little이 문두에 오면 일반동사 과거형 dreamed에 맞춰 'did + 주어 + 동사원형(dream)'으로 도치됩니다.",
                "conceptRef": "lv4_u20_f1"
            },
            {
                "qId": "lv4_u20_q2",
                "instruction": "다음 중 밑줄 친 부분의 어법이 올바른 것을 고르시오.",
                "prompt": "Choose the grammatically correct sentence.",
                "options": [
                    "Not only she lost her passport, but she also missed her connecting flight.",
                    "Scarcely had the plane taken off when the engine made an alarming noise.",
                    "Never I have witnessed such an extraordinary natural phenomenon in my life.",
                    "Hardly did the teacher enter the room when the students stopped talking.",
                    "Under no circumstances students are permitted to leave the campus during lunch."
                ],
                "ans": 2,
                "exp": "'Scarcely had + S + p.p. ~ when ...'은 '~하자마자 ...했다'라는 표준 도치 관용구문으로 올바릅니다. 1번은 Not only did she lose, 3번은 Never have I witnessed, 4번은 Hardly had the teacher entered, 5번은 are students permitted로 도치되어야 합니다.",
                "conceptRef": "lv4_u20_f1"
            },
            {
                "qId": "lv4_u20_q3",
                "instruction": "다음 문장의 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?",
                "prompt": "(A)_______ by the storm, the ancient bridge was deemed unsafe (B)_______ by heavy vehicles.",
                "options": [
                    "Severely damaging - to cross",
                    "Having severely damaged - crossing",
                    "Severely damaged - to be crossed",
                    "Severely damage - being crossed",
                    "To damage severely - to have crossed"
                ],
                "ans": 3,
                "exp": "(A) 다리가 폭풍에 의해 '피해를 입은' 수동의 관계이므로 과거분사 Severely damaged가 오고, (B) 무거운 차량에 의해 '건너지는' 수동의 의미이므로 to be crossed가 적절합니다.",
                "conceptRef": "lv4_u20_f2"
            },
            {
                "qId": "lv4_u20_q4",
                "instruction": "다음 문장에서 어법상 어색한 부분을 찾아 바르게 고친 것은?",
                "prompt": "Had I known about the road construction in advance, I would take a different route this morning.",
                "options": [
                    "Had I known -> If I knew",
                    "Had I known -> Did I know",
                    "would take -> would have taken",
                    "would take -> will take",
                    "this morning -> tomorrow morning"
                ],
                "ans": 3,
                "exp": "Had I known(= If I had known)은 과거 사실의 반대를 나타내는 가정법 과거완료이므로, 오늘 아침(과거)의 결과절에도 '조동사 과거 + have p.p.(would have taken)'가 와야 합니다.",
                "conceptRef": "lv4_u20_f1"
            },
            {
                "qId": "lv4_u20_q5",
                "instruction": "다음 글의 밑줄 친 ①~⑤ 중 어법상 틀린 것은?",
                "prompt": "Modern neuroscience has ① made it possible to observe how the human brain processes emotions. Seldom ② do neuroscientists find two brains that behave identically. What matters most ③ are not the individual differences, but how these neural pathways ④ can be enhanced through continuous learning and practice ⑤ throughout life.",
                "options": ["①", "②", "③", "④", "⑤"],
                "ans": 3,
                "exp": "What matters most는 단수 취급하는 명사절 주어이므로 복수 동사 are가 아니라 단수 동사 is로 받아야 합니다 (What matters most is not...).",
                "conceptRef": "lv4_u20_f1"
            }
        ]
    }
]

if __name__ == '__main__':
    print(f"LV4 Part 2 loaded: {len(LV4_PART2)} units")
    for u in LV4_PART2:
        print(f"  Unit {u['unitNo']}: {u['title']} (Drills: {len(u['spottingDrills'])}, Qs: {len(u['questions'])})")
