# -*- coding: utf-8 -*-
"""
Level 3 (중3 문법) Units 9 ~ 14.
"""

LV3_PART1 = [
    # Unit 9: 과거완료 had + p.p.
    {
        "unitNo": 9,
        "unitId": "lv3_u9",
        "legacyUnitNo": 33,
        "title": "과거완료 had + p.p. (대과거와 과거 이전의 기준)",
        "part": "시제의 완성",
        "targetGrade": "중3 내신 대비",
        "summary": "과거의 특정 시점보다 더 이전에 일어난 일(대과거)과 과거까지 이어진 완료·경험·계속·결과를 나타내는 had + p.p.",
        "overview": "'내가 역에 도착했을 때 기차는 이미 떠나버렸어'처럼 과거보다 더 옛날에 먼저 일어난 일을 나타낼 때 '대과거/과거완료(had + p.p.)'를 써요! 두 과거 사건 중 어느 쪽이 먼저 일어났는지를 시각적으로 명확하게 밝혀주는 고급 시제 공식을 정복해 봅시다!",
        "keyTakeaways": [
            "형태: 주어 + had + 과거분사(p.p.)",
            "대과거: 과거의 특정 사건보다 '더 먼저' 일어난 일 (The train had already left when I arrived.)",
            "과거완료 4대 용법: 과거 이전부터 과거 기준 시점까지의 완료, 경험, 계속, 결과"
        ],
        "formulaCards": [
            {
                "name": "대과거(더 이른 과거)와 과거의 시점 비교 공식",
                "formula": "had + p.p. (대과거: 먼저 일어남) ➔ 과거동사 (과거: 나중에 일어남)",
                "examples": [
                    {
                        "en": "When I arrived at the cinema, the movie had already started.",
                        "ko": "내가 영화관에 도착했을 때, 영화는 이미 시작된 상태였다.",
                        "point": "도착한 과거(arrived)보다 영화가 시작한 시점이 더 먼저이므로 had started를 씁니다."
                    },
                    {
                        "en": "He lost the silver watch that his grandfather had given him.",
                        "ko": "그는 할아버지께서 자신에게 주셨던 은시계를 잃어버렸다.",
                        "point": "시계를 잃어버린 과거(lost)보다 할아버지가 주신 것이 먼저이므로 had given입니다."
                    }
                ],
                "oxCompare": {
                    "o": "She had finished dinner before I came home.",
                    "x": "She has finished dinner before I came home.",
                    "comment": "과거 시점(came home) 이전의 일이므로 현재완료 has finished가 아니라 과거완료 had finished를 써야 합니다."
                },
                "trap": "과거완료는 문장 속에 반드시 비교할 수 있는 '과거 기준 시점'이 존재해야 합니다.",
                "quizLink": "lost the watch that he (bought / had bought) 형태는 중3 내신 단골 1순위입니다."
            },
            {
                "name": "before / after 접속사와 과거완료",
                "formula": "시간 전후 관계가 명확할 땐 단순 과거도 가능하나, 강조 시 had p.p. 사용",
                "examples": [
                    {
                        "en": "He had worked at the bank for ten years before he moved to Seoul.",
                        "ko": "그는 서울로 이사하기 전에 그 은행에서 10년 동안 일했었다.",
                        "point": "과거 시점(moved) 이전까지 10년 동안 일한 계속적 상태에 had worked를 씁니다."
                    },
                    {
                        "en": "She realized that she had left her umbrella on the subway.",
                        "ko": "그녀는 자신이 지하철에 우산을 두고 내렸다는 사실을 깨달았다.",
                        "point": "깨달은 과거(realized)보다 우산을 두고 내린 것(had left)이 더 먼저 일어났습니다."
                    }
                ],
                "oxCompare": {
                    "o": "I knew him well because I had seen him before.",
                    "x": "I knew him well because I saw him before.",
                    "comment": "알고 있던 과거(knew) 이전에 본 경험이므로 had seen이 훨씬 정확한 시제 표현입니다."
                },
                "trap": "과거완료 진행형(had been V-ing)은 대과거부터 과거까지 계속되던 동작을 나타냅니다.",
                "quizLink": "선후 관계가 있는 두 문장을 결합할 때 먼저 일어난 쪽에 had p.p.를 붙이세요."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u9_d1",
                "missionTitle": "미션 1: 대과거 사건의 현재완료 오용 수정",
                "sentence": "When we reached the airport, the flight has already departed ten minutes ago.",
                "korean": "우리가 공항에 도착했을 때, 항공편은 이미 출발해 버린 뒤였다.",
                "underlined": ["When we reached", "the airport,", "the flight has already", "departed ten minutes ago"],
                "wrongIndex": 2,
                "correction": "the flight had already",
                "explanation": "도착한 과거 시점(reached)보다 출발이 먼저 일어났으므로 has가 아니라 had already departed가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 대과거 공식] 출제 연계"
            },
            {
                "id": "lv3_u9_d2",
                "missionTitle": "미션 2: 분실 시점보다 앞선 구매 시점의 시제 오류",
                "sentence": "Tom lost the smartphone that his parents bought for his birthday.",
                "korean": "톰은 부모님께서 생일 선물로 사주셨던 스마트폰을 잃어버렸다.",
                "underlined": ["Tom lost", "the smartphone", "that his parents bought", "for his birthday"],
                "wrongIndex": 2,
                "correction": "that his parents had bought",
                "explanation": "스마트폰을 잃어버린 과거(lost)보다 부모님이 사주신 시점이 더 앞서므로 had bought로 표현해야 합니다.",
                "conceptRef": "1단계 [공식 1: 대과거 공식] 출제 연계"
            },
            {
                "id": "lv3_u9_d3",
                "missionTitle": "미션 3: 깨달은 시점과 망각 시점의 대과거 불일치",
                "sentence": "She realized that she forgot her homework notebook at home.",
                "korean": "그녀는 자신이 숙제 공책을 집에 두고 왔다는 것을 깨달았다.",
                "underlined": ["She realized", "that she forgot", "her homework notebook", "at home"],
                "wrongIndex": 1,
                "correction": "that she had forgotten",
                "explanation": "깨달은 과거(realized)보다 공책을 잊고 두고 온 일이 먼저 일어났으므로 had forgotten이 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 선후 관계 시제] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 알맞은 시제는?\n\n'The train ______ when I got to the platform.'",
                "options": ["leaves", "has left", "had left", "was leave", "will leave"],
                "ans": 3,
                "exp": "내가 도착한 과거(got)보다 기차가 떠난 것이 먼저이므로 과거완료 had left가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 대과거 공식]"
            },
            {
                "q": "다음 두 사건 중 먼저 일어난 일(대과거)에 밑줄 친 문장은?",
                "options": [
                    "I <u>lost</u> the ring that he had given me.",
                    "She said that she <u>had visited</u> Paris.",
                    "When I woke up, the sun <u>rose</u>.",
                    "He went home after he <u>finished</u> the work.",
                    "The teacher entered the room and <u>smiled</u>."
                ],
                "ans": 2,
                "exp": "말한 과거(said)보다 파리를 방문했던 대과거 사건인 had visited가 먼저 일어난 일입니다.",
                "conceptRef": "1단계 [공식 1: 대과거 공식]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "She had lived in London before she moved to New York.",
                    "I couldn't enter the house because I had lost my key.",
                    "He said that he has finished the project yesterday.",
                    "The game had already started when we arrived.",
                    "They had known each other for ten years before they married."
                ],
                "ans": 3,
                "exp": "과거 시점 said의 종속절에서 이전의 일을 나타낼 때는 has가 아니라 had finished를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 대과거 공식]"
            },
            {
                "q": "'내가 그를 보았을 때, 그는 3일 동안 아무것도 먹지 못한 상태였다.'를 바르게 영작한 것은?",
                "options": [
                    "When I saw him, he has eaten nothing for three days.",
                    "When I saw him, he had eaten nothing for three days.",
                    "When I saw him, he ate nothing for three days.",
                    "When I saw him, he had nothing eaten for three days.",
                    "When I saw him, he was eaten nothing for three days."
                ],
                "ans": 2,
                "exp": "과거 시점 saw 이전 3일 동안 먹지 못한 상태이므로 과거완료 had eaten nothing이 정답입니다.",
                "conceptRef": "1단계 [공식 2: 선후 관계 시제]"
            },
            {
                "q": "다음 빈칸에 알맞은 동사의 형태는?\n\n'I realized that I ______ my wallet on the bus.'",
                "options": ["leave", "have left", "had left", "am leaving", "leaves"],
                "ans": 3,
                "exp": "지갑을 두고 내린 것이 깨달은 것보다 먼저 일어난 대과거이므로 had left가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 선후 관계 시제]"
            }
        ]
    },

    # Unit 10: 관계부사 where, when, why, how
    {
        "unitNo": 10,
        "unitId": "lv3_u10",
        "legacyUnitNo": 34,
        "title": "관계부사 where, when, why, how와 선행사",
        "part": "관계사의 심화",
        "targetGrade": "중3 내신 대비",
        "summary": "접속사 + 부사 역할을 하여 '전치사 + 관계대명사'를 대신하는 관계부사의 종류와 완전한 문장 구조 및 the way how의 병치 불가 규칙",
        "overview": "관계대명사 뒤에는 주어나 목적어가 빠진 불완전한 문장이 오지만, '관계부사' 뒤에는 모든 성분이 꽉 찬 '완전한 문장'이 와요! 특히 the way와 how는 절대로 둘이 나란히 함께 쓸 수 없다는 내신 서술형 킬러 규칙을 완벽 정복해 봅시다!",
        "keyTakeaways": [
            "관계부사: 접속사 + 부사 = 전치사 + 관계대명사 (뒤에 '완전한 문장' 수반!)",
            "종류: 장소(where) / 시간(when) / 이유(why) / 방법(how)",
            "★the way와 how는 둘 중 하나만 써야 함! (the way how는 100% 오답!)"
        ],
        "formulaCards": [
            {
                "name": "관계부사의 종류와 완전한 절 공식",
                "formula": "선행사(장소/시간/이유) + where/when/why + 완전한 문장 (S + V + O)",
                "examples": [
                    {
                        "en": "This is the peaceful town where I spent my childhood.",
                        "ko": "이곳은 내가 어린 시절을 보냈던 평화로운 마을이다.",
                        "point": "선행사 the town(장소) 뒤에 주어(I)+동사(spent)+목적어(my childhood)를 갖춘 완전한 절이 옵니다."
                    },
                    {
                        "en": "I will never forget the day when I first met my best friend.",
                        "ko": "나는 내 가장 친한 친구를 처음 만났던 그 날을 결코 잊지 못할 것이다.",
                        "point": "선행사 the day(시간) 뒤에 완전한 문장을 이끄는 관계부사 when이 왔습니다."
                    }
                ],
                "oxCompare": {
                    "o": "This is the house where he lives.",
                    "x": "This is the house which he lives.",
                    "comment": "he lives는 목적어가 필요 없는 완전한 절이므로 which가 아니라 where(= in which)를 써야 합니다."
                },
                "trap": "선행사가 장소라고 무조건 where를 고르면 안 됩니다! 뒤 문장이 불완전하면 which입니다.",
                "quizLink": "관계대명사 뒤는 불완전(주어/목적어 탈락), 관계부사 뒤는 '완전한 문장'입니다."
            },
            {
                "name": "the way와 how의 절대 병치 불가 공식",
                "formula": "the way (O) | how (O) | the way how (X 무조건 오답!)",
                "examples": [
                    {
                        "en": "This is how she solved the complicated math problem.",
                        "ko": "이것이 그녀가 그 복잡한 수학 문제를 풀었던 방법이다.",
                        "point": "how 단독으로 쓰여 방법을 나타냅니다."
                    },
                    {
                        "en": "I really like the way he speaks politely to everyone.",
                        "ko": "나는 그가 모든 사람에게 공손하게 말하는 그 방식을 정말 좋아한다.",
                        "point": "the way 단독으로 쓰여 방법을 수식합니다."
                    }
                ],
                "oxCompare": {
                    "o": "Tell me the way you made this cake.",
                    "x": "Tell me the way how you made this cake.",
                    "comment": "the way와 how는 절대로 함께 나란히 쓸 수 없습니다."
                },
                "trap": "the way in which나 the way that은 문법적으로 완벽히 가능합니다.",
                "quizLink": "the way how가 보기에 보이면 뒤도 돌아보지 말고 오답으로 체크하세요."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u10_d1",
                "missionTitle": "미션 1: the way how 동시 사용 오류 수정",
                "sentence": "Nobody knows the way how the ancient magicians performed the trick.",
                "korean": "그 고대 마술사들이 어떻게 그 속임수를 공연했는지 그 방식을 아무도 모른다.",
                "underlined": ["Nobody knows", "the way how", "the ancient magicians", "performed the trick"],
                "wrongIndex": 1,
                "correction": "the way (or how)",
                "explanation": "the way와 how는 나란히 함께 쓸 수 없으므로 둘 중 하나를 삭제해야 합니다.",
                "conceptRef": "1단계 [공식 2: the way와 how 병치 불가] 출제 연계"
            },
            {
                "id": "lv3_u10_d2",
                "missionTitle": "미션 2: 완전한 절 앞 관계대명사 오용 수정",
                "sentence": "This is the quiet library which students study hard for exams.",
                "korean": "이곳은 학생들이 시험을 위해 열심히 공부하는 조용한 도서관이다.",
                "underlined": ["This is", "the quiet library", "which students study", "hard for exams"],
                "wrongIndex": 2,
                "correction": "where students study",
                "explanation": "뒤에 주어+동사+부사를 갖춘 완전한 절이 오므로 관계대명사 which 대신 관계부사 where를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 관계부사의 종류와 완전한 절] 출제 연계"
            },
            {
                "id": "lv3_u10_d3",
                "missionTitle": "미션 3: 이유 선행사 뒤 관계부사 오용 수정",
                "sentence": "Can you tell me the reason where you were absent yesterday afternoon?",
                "korean": "네가 어제 결석했던 이유를 나에게 말해줄 수 있니?",
                "underlined": ["Can you tell me", "the reason where", "you were absent", "yesterday afternoon?"],
                "wrongIndex": 1,
                "correction": "the reason why",
                "explanation": "선행사가 the reason(이유)이므로 관계부사는 where가 아니라 why가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 관계부사의 종류와 완전한 절] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 알맞은 관계부사는?\n\n'Friday is the day ______ we have art class.'",
                "options": ["where", "when", "why", "how", "which"],
                "ans": 2,
                "exp": "선행사가 the day(시간)이고 뒤 문장이 완전하므로 관계부사 when이 정답입니다.",
                "conceptRef": "1단계 [공식 1: 관계부사의 종류와 완전한 절]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "This is the park where I run every morning.",
                    "Tell me the reason why you are so upset.",
                    "I don't like the way how he talks to me.",
                    "Spring is the season when flowers bloom.",
                    "This is the way I solved the puzzle."
                ],
                "ans": 3,
                "exp": "the way와 how는 함께 쓸 수 없으므로 the way how he talks는 비문입니다.",
                "conceptRef": "1단계 [공식 2: the way와 how 병치 불가]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 수 있는 것으로 짝지어진 것은?\n\n'This is the bakery ______ I bought this bread.'",
                "options": [
                    "where - in which",
                    "which - in which",
                    "where - that",
                    "when - where",
                    "which - where"
                ],
                "ans": 1,
                "exp": "장소의 관계부사 where는 전치사 + 관계대명사인 in which로 바꿔 쓸 수 있습니다.",
                "conceptRef": "1단계 [공식 1: 관계부사의 종류와 완전한 절]"
            },
            {
                "q": "다음 중 관계부사 why가 들어가기에 가장 알맞은 선행사는?",
                "options": ["the house", "the reason", "the time", "the park", "the city"],
                "ans": 2,
                "exp": "why는 이유의 선행사 the reason과 결합합니다.",
                "conceptRef": "1단계 [공식 1: 관계부사의 종류와 완전한 절]"
            },
            {
                "q": "'이것이 그가 그 기계를 고친 방식이다.'를 바르게 영작한 것은?",
                "options": [
                    "This is the way how he fixed the machine.",
                    "This is how he fixed the machine.",
                    "This is the way which he fixed the machine.",
                    "This is how the way he fixed the machine.",
                    "This is where he fixed the machine."
                ],
                "ans": 2,
                "exp": "the way how는 불가하므로 how 단독으로 쓴 2번이 올바른 영작입니다.",
                "conceptRef": "1단계 [공식 2: the way와 how 병치 불가]"
            }
        ]
    },

    # Unit 11: 관계대명사의 계속적 용법 (, who / , which)
    {
        "unitNo": 11,
        "unitId": "lv3_u11",
        "legacyUnitNo": 35,
        "title": "관계대명사의 계속적 용법 (, who / , which)",
        "part": "관계사의 심화",
        "targetGrade": "중3 내신 대비",
        "summary": "콤마(,) 뒤에 쓰여 앞선 명사나 앞 문장 전체를 부가 설명하는 계속적 용법과 that/what 사용 불가 규칙",
        "overview": "관계대명사 앞에 쉼표(,)가 붙으면 해석 순서가 달라져요! 앞 명사를 한정하여 수식하는 것이 아니라, 문장을 앞에서부터 순서대로 쭉 이어서 부가 설명(접속사+대명사)합니다. 특히 계속적 용법에서는 that과 what을 절대로 쓸 수 없다는 내신 필수 규칙을 배워봅시다!",
        "keyTakeaways": [
            "계속적 용법: 선행사, who / which (앞에서 뒤로 순차 해석 = and/but + he/she/it)",
            "★앞 문장 전체를 선행사로 받는 which: He said he was rich, which was a lie.",
            "★콤마 뒤에는 that과 what을 절대로 쓸 수 없음! (, that ➔ 100% 오답!)"
        ],
        "formulaCards": [
            {
                "name": "계속적 용법의 의미와 순차 해석 공식",
                "formula": "선행사, who / which ~ = 접속사(and/but) + 인칭대명사",
                "examples": [
                    {
                        "en": "I met Minho yesterday, who gave me an interesting comic book.",
                        "ko": "나는 어제 민호를 만났는데, 그는 나에게 재미있는 만화책 한 권을 주었다.",
                        "point": ", who는 and he(그런데 그는)로 바꾸어 순차적으로 자연스럽게 해석합니다."
                    },
                    {
                        "en": "She gave me a pretty necklace, which was made of pure gold.",
                        "ko": "그녀는 나에게 예쁜 목걸이를 주었는데, 그것은 순금으로 만들어진 것이었다.",
                        "point": ", which는 and it(그런데 그것은)으로 바꾸어 해석할 수 있습니다."
                    }
                ],
                "oxCompare": {
                    "o": "He invited Mary, who was his cousin.",
                    "x": "He invited Mary, that was his cousin.",
                    "comment": "콤마(,) 뒤의 계속적 용법에는 관계대명사 that을 절대 쓸 수 없습니다."
                },
                "trap": "고유명사(인명, 지명) 뒤에서는 한정할 대상이 없으므로 반드시 계속적 용법(콤마)을 씁니다.",
                "quizLink": "콤마 + that, 콤마 + what은 시험지에서 보자마자 오답으로 걸러내야 하는 0초 킬러입니다."
            },
            {
                "name": "앞 문장 전체나 일부를 받는 , which",
                "formula": "앞 문장(S + V ~), which + 단수동사 (그리고 그것은 ~이다)",
                "examples": [
                    {
                        "en": "He told everyone that he won first prize, which was not true.",
                        "ko": "그는 자신이 1등 상을 탔다고 모두에게 말했는데, 그것은 사실이 아니었다.",
                        "point": "which는 앞의 특정 명사가 아니라 '1등 상을 탔다고 말한 앞 문장 내용 전체'를 받습니다."
                    },
                    {
                        "en": "She suddenly broke her promise, which disappointed all of us.",
                        "ko": "그녀는 갑작스럽게 약속을 깼고, 그것이 우리 모두를 실망시켰다.",
                        "point": "약속을 깬 앞 문장 사실 전체를 선행사로 받는 계속적 용법의 which입니다."
                    }
                ],
                "oxCompare": {
                    "o": "He failed the exam, which made his mother sad.",
                    "x": "He failed the exam, what made his mother sad.",
                    "comment": "앞 문장 전체를 받는 계속적 관계대명사는 오직 which만 가능하며 what은 쓸 수 없습니다."
                },
                "trap": "앞 문장 전체를 선행사로 받을 때 which 뒤의 동사는 무조건 '단수 취급(is/was/-s)'합니다!",
                "quizLink": ", which was / , which made는 고등 내신과 모의고사 독해에서 가장 빈출되는 구문입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u11_d1",
                "missionTitle": "미션 1: 콤마 뒤 관계대명사 that 오용 수정",
                "sentence": "I bought a vintage leather jacket in London, that was very expensive and rare.",
                "korean": "나는 런던에서 빈티지 가죽 재킷을 샀는데, 그것은 매우 비쌌다.",
                "underlined": ["I bought", "a vintage leather jacket in London,", "that was very", "expensive and rare"],
                "wrongIndex": 2,
                "correction": "which was very",
                "explanation": "콤마(,) 뒤의 계속적 용법에는 관계대명사 that을 쓸 수 없으므로 which was로 고쳐야 합니다.",
                "conceptRef": "1단계 [공식 1: 계속적 용법과 that 불가] 출제 연계"
            },
            {
                "id": "lv3_u11_d2",
                "missionTitle": "미션 2: 앞 문장 수식 계속적 용법 what 오용",
                "sentence": "He passed the difficult entrance exam, what surprised all his classmates.",
                "korean": "그는 어려운 입학시험에 합격했는데, 그것은 그의 모든 반 친구들을 놀라게 했다.",
                "underlined": ["He passed", "the difficult entrance exam,", "what surprised", "all his classmates"],
                "wrongIndex": 2,
                "correction": "which surprised",
                "explanation": "앞 문장 전체를 선행사로 받아 부가 설명하는 계속적 관계대명사는 what이 아니라 which여야 합니다.",
                "conceptRef": "1단계 [공식 2: 앞 문장 전체를 받는 which] 출제 연계"
            },
            {
                "id": "lv3_u11_d3",
                "missionTitle": "미션 3: 사람 선행사 계속적 용법 which 오용",
                "sentence": "I met my old English teacher Mr. Smith, which gave me some great advice.",
                "korean": "나는 옛 영어 선생님인 스미스 선생님을 만났는데, 그분은 내게 훌륭한 조언을 해 주셨다.",
                "underlined": ["I met my old English teacher", "Mr. Smith,", "which gave me", "some great advice"],
                "wrongIndex": 2,
                "correction": "who gave me",
                "explanation": "선행사가 Mr. Smith(사람)이므로 사물에 쓰는 which 대신 who를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 계속적 용법의 의미와 해석] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 수 없는 것은?\n\n'She has a son, ______ became a famous pianist.'",
                "options": ["who", "that", "and he", "whom", "which"],
                "ans": 2,
                "exp": "콤마 뒤의 계속적 용법에는 관계대명사 that을 절대 쓸 수 없습니다.",
                "conceptRef": "1단계 [공식 1: 계속적 용법과 that 불가]"
            },
            {
                "q": "다음 문장의 밑줄 친 부분을 두 단어로 바꿔 쓸 때 가장 알맞은 것은?\n\n'I called Tom, <u>who</u> didn't answer the phone.'",
                "options": ["and he", "but he", "and him", "so he", "because he"],
                "ans": 2,
                "exp": "전화를 걸었지만 받지 않았다는 대조의 맥락이므로 but he가 가장 자연스럽습니다.",
                "conceptRef": "1단계 [공식 1: 계속적 용법의 의미와 해석]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "He said he was sick, which was a lie.",
                    "I like Paris, which is the capital of France.",
                    "She gave me a ring, that was made of silver.",
                    "We visited Rome, where we saw many ruins.",
                    "He works hard, which makes him successful."
                ],
                "ans": 3,
                "exp": "콤마(,) 뒤에는 that을 쓸 수 없으므로 which was made of silver가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 계속적 용법과 that 불가]"
            },
            {
                "q": "'그는 약속을 잊어버렸는데, 그것이 나를 화나게 만들었다.'를 바르게 영작한 것은?",
                "options": [
                    "He forgot the promise, what made me angry.",
                    "He forgot the promise, which made me angry.",
                    "He forgot the promise, that made me angry.",
                    "He forgot the promise which it made me angry.",
                    "He forgot the promise, who made me angry."
                ],
                "ans": 2,
                "exp": "앞 문장 전체를 선행사로 받는 계속적 관계대명사는 , which입니다.",
                "conceptRef": "1단계 [공식 2: 앞 문장 전체를 받는 which]"
            },
            {
                "q": "다음 중 밑줄 친 ', which'의 선행사로 알맞은 것은?\n\n'The weather was extremely hot and humid, <u>which</u> prevented us from going out.'",
                "options": ["The weather", "extremely hot", "humid", "날씨가 극도로 덥고 습했다는 앞 문장 전체", "going out"],
                "ans": 4,
                "exp": "우리가 나가는 것을 막은 것은 날씨가 극도로 덥고 습했다는 앞 문장 전체의 상황입니다.",
                "conceptRef": "1단계 [공식 2: 앞 문장 전체를 받는 which]"
            }
        ]
    },

    # Unit 12: 관계대명사 what vs 접속사 that
    {
        "unitNo": 12,
        "unitId": "lv3_u12",
        "legacyUnitNo": 36,
        "title": "관계대명사 what과 명사절 접속사 that 구별법",
        "part": "관계사의 심화",
        "targetGrade": "중3 내신 대비",
        "summary": "선행사를 자체에 포함하여 '~하는 것'으로 해석되는 what(뒤에 불완전)과 목적어/보어 절을 이끄는 접속사 that(뒤에 완전)의 1초 판별법",
        "overview": "중3부터 수능까지 어법 시험에서 가장 많이 출제되는 1등 공식, 'what vs that'의 맞장 승부예요! 둘 다 명사절로 쓰이지만, what 뒤에는 주어나 목적어가 빠진 '불완전한 문장'이 오고, 접속사 that 뒤에는 모든 성분을 갖춘 '완전한 문장'이 온다는 절대 법칙을 파헤쳐 봅시다!",
        "keyTakeaways": [
            "관계대명사 what: the thing which/that (~하는 것) ➔ 앞에 선행사 없고 뒤 문장 '불완전'!",
            "명사절 접속사 that: ~라는 것 ➔ 앞에 선행사 없고 뒤 문장 '완전'!",
            "관계대명사 that: ~하는 ➔ 앞에 '선행사 명사'가 반드시 있고 뒤 문장 불완전!"
        ],
        "formulaCards": [
            {
                "name": "관계대명사 what의 3대 특징",
                "formula": "선행사 없음 + what + 불완전한 문장 (주어/목적어 탈락) = 명사절",
                "examples": [
                    {
                        "en": "What he said at the meeting surprised everyone in the room.",
                        "ko": "그가 회의에서 말했던 것은 방 안의 모든 사람들을 놀라게 했다.",
                        "point": "said의 목적어가 빠진 불완전한 절을 이끌며 문장 전체의 주어(What he said) 역할을 합니다."
                    },
                    {
                        "en": "This is exactly what I wanted to buy for my birthday.",
                        "ko": "이것이 바로 내가 생일 선물로 사고 싶었던 것이다.",
                        "point": "to buy의 목적어가 없는 불완전한 절을 이끄는 보어 역할의 what입니다."
                    }
                ],
                "oxCompare": {
                    "o": "I don't understand what you mean.",
                    "x": "I don't understand that you mean.",
                    "comment": "mean 뒤에 목적어가 빠져 있으므로 완전한 절을 이끄는 접속사 that이 아니라 what을 써야 합니다."
                },
                "trap": "what 앞에 선행사 명사(the book what I read)를 쓰면 100% 비문입니다!",
                "quizLink": "what = the thing which이므로 이미 선행사를 품고 있어 앞에 다른 명사가 오지 않습니다."
            },
            {
                "name": "what vs that 1초 판별 알고리즘",
                "formula": "선행사 확인 ➔ [있음: 관대 that/which] | [없음 ➔ 뒤가 완전: 접속사 that / 뒤가 불완전: what]",
                "examples": [
                    {
                        "en": "I know that she is an honest and hardworking student.",
                        "ko": "나는 그녀가 정직하고 근면한 학생이라는 것을 알고 있다.",
                        "point": "know 뒤에 선행사가 없고, 뒷문장이 완전하므로 명사절 접속사 that입니다."
                    },
                    {
                        "en": "I don't believe what he said yesterday about the incident.",
                        "ko": "나는 그 사건에 대해 그가 어제 말했던 것을 믿지 않는다.",
                        "point": "believe 뒤에 선행사가 없고, said의 목적어가 없는 불완전한 절이므로 what입니다."
                    }
                ],
                "oxCompare": {
                    "o": "He told me that he was innocent.",
                    "x": "He told me what he was innocent.",
                    "comment": "he was innocent는 주어+be동사+보어를 갖춘 완전한 문장이므로 접속사 that을 써야 합니다."
                },
                "trap": "문장의 겉모습만 보지 말고 동사 뒤 목적어나 전치사 뒤 목적어가 비어있는지 꼭 확인하세요!",
                "quizLink": "수능 29번 어법 문제의 약 30%가 바로 이 what vs that 구별 공식에서 출제됩니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u12_d1",
                "missionTitle": "미션 1: 불완전한 절 앞 접속사 that 오용 수정",
                "sentence": "She could not believe that her best friend told her yesterday afternoon.",
                "korean": "그녀는 그녀의 가장 친한 친구가 어제 자신에게 말했던 것을 믿을 수 없었다.",
                "underlined": ["She could not believe", "that her best friend", "told her", "yesterday afternoon"],
                "wrongIndex": 1,
                "correction": "what her best friend",
                "explanation": "told her 뒤에 직접목적어가 빠진 불완전한 절이므로 접속사 that 대신 관계대명사 what을 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 관계대명사 what의 3대 특징] 출제 연계"
            },
            {
                "id": "lv3_u12_d2",
                "missionTitle": "미션 2: 완전한 절 앞 관계대명사 what 오용 수정",
                "sentence": "The science teacher taught us what the earth goes around the sun.",
                "korean": "과학 선생님께서는 지구가 태양 주위를 돈다는 것을 우리에게 가르쳐 주셨다.",
                "underlined": ["The science teacher", "taught us", "what the earth goes", "around the sun"],
                "wrongIndex": 2,
                "correction": "that the earth goes",
                "explanation": "뒤에 주어+동사+수식어를 갖춘 완전한 문장이 오므로 what 대신 명사절 접속사 that을 써야 합니다.",
                "conceptRef": "1단계 [공식 2: what vs that 판별 알고리즘] 출제 연계"
            },
            {
                "id": "lv3_u12_d3",
                "missionTitle": "미션 3: 선행사 명사 뒤 관계대명사 what 오용",
                "sentence": "This is the very gift what I wanted to receive from my parents.",
                "korean": "이것이 바로 내가 부모님으로부터 받기를 원했던 선물이다.",
                "underlined": ["This is", "the very gift", "what I wanted", "to receive from my parents"],
                "wrongIndex": 2,
                "correction": "that I wanted (or which I wanted)",
                "explanation": "앞에 the very gift라는 명확한 선행사가 있으므로 선행사를 포함하는 what을 쓸 수 없고 that을 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 관계대명사 what의 3대 특징] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'______ makes me happy is playing the piano.'",
                "options": ["That", "What", "Which", "Who", "Where"],
                "ans": 2,
                "exp": "선행사가 없고 makes의 주어가 빠진 불완전한 절을 이끌어 주어 역할을 하므로 What이 정답입니다.",
                "conceptRef": "1단계 [공식 1: 관계대명사 what의 3대 특징]"
            },
            {
                "q": "다음 빈칸에 들어갈 말이 바르게 짝지어진 것은?\n\n- 'I think ______ honesty is the best policy.'\n- 'Show me ______ you have in your bag.'",
                "options": ["that - that", "that - what", "what - that", "what - what", "which - that"],
                "ans": 2,
                "exp": "첫 번째는 완전한 절이므로 접속사 that, 두 번째는 have의 목적어가 없으므로 what입니다.",
                "conceptRef": "1단계 [공식 2: what vs that 판별 알고리즘]"
            },
            {
                "q": "다음 중 밑줄 친 'that'의 성격이 나머지 넷과 다른 하나는?",
                "options": [
                    "I know <u>that</u> he is a kind doctor.",
                    "She told me <u>that</u> she passed the test.",
                    "The news <u>that</u> he won made us happy.",
                    "This is the book <u>that</u> I bought yesterday.",
                    "He said <u>that</u> it was raining hard."
                ],
                "ans": 4,
                "exp": "4번은 앞에 book이라는 선행사가 있고 bought의 목적어가 빠진 '관계대명사 that'이고, 나머지는 '접속사 that'입니다.",
                "conceptRef": "1단계 [공식 2: what vs that 판별 알고리즘]"
            },
            {
                "q": "다음 중 어법상 올바른 문장은?",
                "options": [
                    "This is the thing what I lost.",
                    "I cannot believe that you said.",
                    "What he told me was a complete surprise.",
                    "The teacher knows what the boy is honest.",
                    "Listen to that she is saying."
                ],
                "ans": 3,
                "exp": "What he told me was a complete surprise(그가 내게 말했던 것은 완전한 놀라움이었다)는 what 주어절로 완벽한 문장입니다.",
                "conceptRef": "1단계 [공식 1: 관계대명사 what의 3대 특징]"
            },
            {
                "q": "'네가 가장 필요로 하는 것은 충분한 휴식이다.'를 바르게 영작한 것은?",
                "options": [
                    "That you need most is enough rest.",
                    "What you need most is enough rest.",
                    "Which you need most is enough rest.",
                    "What do you need most is enough rest.",
                    "The thing what you need is enough rest."
                ],
                "ans": 2,
                "exp": "need의 목적어가 없는 절을 이끌어 명사절 주어를 만드는 What you need most is enough rest가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 관계대명사 what의 3대 특징]"
            }
        ]
    }
]

print("LV3 part1 loaded: Units 9 to 12")
