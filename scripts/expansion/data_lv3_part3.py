# -*- coding: utf-8 -*-
"""
Level 3 (중3 문법) Units 15 ~ 20.
Unit 15: 가정법 과거완료 (과거 사실의 반대)
Unit 16: I wish / as if 가정법
Unit 17: 분사구문 기본 전환 (능동 V-ing)
Unit 18: 분사구문의 주의할 용법 (완료, 수동, 접속사 보존)
Unit 19: 강조구문 (It is ~ that 강조 vs 가주어-진주어)
Unit 20: 도치 구문 (부정어 도치 & 장소부사구 도치)
"""

LV3_PART3 = [
    # Unit 15: 가정법 과거완료
    {
        "unitNo": 15,
        "unitId": "lv3_u15",
        "legacyUnitNo": 39,
        "title": "가정법 과거완료 (과거 사실의 반대)",
        "part": "가정법의 심화",
        "targetGrade": "중3 내신 대비",
        "summary": "과거에 이미 일어난 사실을 반대로 가정하여 후회나 아쉬움을 나타내는 If + had p.p., would/could + have p.p. 공식",
        "overview": "'그때 열심히 공부했더라면 시험에 합격했을 텐데'처럼 이미 지나간 과거의 일에 대한 짙은 후회와 아쉬움을 표현할 때는 '가정법 과거완료'를 써요! If절의 had p.p.와 주절의 would have p.p. 짝맞추기는 내신과 수능 모두에서 가장 사랑받는 핵심 공식입니다!",
        "keyTakeaways": [
            "가정법 과거완료 공식: If + 주어 + had p.p., 주어 + would/could/might + have p.p.",
            "해석: '만약 (그때) ~했더라면, …했을 텐데' (★과거 사실의 반대!)",
            "직설법 과거 전환: As + 주어 + 과거동사 (과거에 ~하지 않았기 때문에 …하지 못했다)"
        ],
        "formulaCards": [
            {
                "name": "가정법 과거완료 형태 짝맞추기 공식",
                "formula": "If + S + had p.p. , S + would/could/should/might + have p.p.",
                "examples": [
                    {
                        "en": "If I had studied harder for the exam, I could have entered that university.",
                        "ko": "내가 그 시험을 위해 더 열심히 공부했더라면, 그 대학교에 입학할 수 있었을 텐데.",
                        "point": "If절의 had studied와 주절의 could have entered가 완벽히 호응합니다."
                    },
                    {
                        "en": "If she had taken the express train, she would have arrived on time.",
                        "ko": "만약 그녀가 급행열차를 탔더라면, 정시에 도착했을 텐데.",
                        "point": "과거에 급행열차를 타지 않아서 늦었다는 사실을 반대로 가정한 문장입니다."
                    }
                ],
                "oxCompare": {
                    "o": "If he had known the truth, he would have told me.",
                    "x": "If he had known the truth, he would tell me.",
                    "comment": "If절이 had known(과거완료)이므로 주절도 would tell이 아니라 would have told가 되어야 합니다."
                },
                "trap": "If절의 had p.p.와 주절의 would have p.p.의 시제 균형을 맞추는 것이 핵심입니다.",
                "quizLink": "가정법 과거완료와 혼합가정법(If had p.p. ~ now would V)을 구별하는 문제가 고난도로 출제됩니다."
            },
            {
                "name": "가정법 과거완료 ➔ 직설법 과거 전환 공식",
                "formula": "If had p.p. ➔ As + 단순과거 부정 (부호 반대 + 단순과거 시제)",
                "examples": [
                    {
                        "en": "If it had not rained yesterday, we would have gone on a picnic.",
                        "ko": "만약 어제 비가 내리지 않았더라면, 우리는 소풍을 갔을 텐데.",
                        "point": "가정법 과거완료 문장입니다."
                    },
                    {
                        "en": "As it rained yesterday, we did not go on a picnic.",
                        "ko": "어제 비가 내렸기 때문에, 우리는 소풍을 가지 못했다.",
                        "point": "직설법 과거(rained / did not go)로 사실 그대로 전환했습니다."
                    }
                ],
                "oxCompare": {
                    "o": "As I didn't have money, I couldn't buy the ticket.",
                    "x": "As I hadn't money, I couldn't buy the ticket.",
                    "comment": "일반동사 have의 과거 부정문은 didn't have입니다."
                },
                "trap": "가정법 과거완료를 직설법으로 바꿀 때 시제는 대과거(had p.p.)가 아니라 '단순과거'입니다!",
                "quizLink": "서술형 시험에서 As 절의 시제를 과거로 쓰지 않고 현재로 쓰면 큰 감점을 받습니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u15_d1",
                "missionTitle": "미션 1: 가정법 과거완료 주절 시제 불일치 수정",
                "sentence": "If I had set the alarm clock, I would not wake up late this morning.",
                "korean": "만약 내가 알람 시계를 맞춰 두었더라면, 오늘 아침 늦게 깨지 않았을 텐데.",
                "underlined": ["If I had set", "the alarm clock,", "I would not wake up late", "this morning"],
                "wrongIndex": 2,
                "correction": "I would not have woken up late",
                "explanation": "If절이 had set(과거완료)이므로 주절도 would not have woken up(would have p.p.)이 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거완료 형태] 출제 연계"
            },
            {
                "id": "lv3_u15_d2",
                "missionTitle": "미션 2: If절 과거완료 조동사 have 누락 오류",
                "sentence": "If they had left earlier, they could arrived before the movie began.",
                "korean": "그들이 더 일찍 출발했더라면, 영화가 시작하기 전에 도착할 수 있었을 텐데.",
                "underlined": ["If they had left", "earlier, they could", "arrived before", "the movie began"],
                "wrongIndex": 1,
                "correction": "earlier, they could have",
                "explanation": "조동사 과거형 뒤에는 have p.p.가 와야 하므로 could arrived가 아니라 could have arrived가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거완료 형태] 출제 연계"
            },
            {
                "id": "lv3_u15_d3",
                "missionTitle": "미션 3: 가정법 If절 과거완료 어형 오류 수정",
                "sentence": "If she listened to her parents' advice, she would have succeeded.",
                "korean": "만약 그녀가 부모님의 조언을 들었더라면, 그녀는 성공했을 텐데.",
                "underlined": ["If she listened", "to her parents' advice,", "she would have", "succeeded"],
                "wrongIndex": 0,
                "correction": "If she had listened",
                "explanation": "주절이 would have succeeded이므로 과거 사실의 반대를 나타내는 If절은 had listened가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거완료 형태] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'If I ______ your phone number, I would have called you.'",
                "options": ["know", "knew", "had known", "have known", "knowing"],
                "ans": 3,
                "exp": "주절에 would have called가 있으므로 If절은 과거완료 had known이 알맞습니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거완료 형태]"
            },
            {
                "q": "다음 빈칸에 들어갈 알맞은 조동사 형태는?\n\n'If he had run faster, he ______ the morning train.'",
                "options": ["could catch", "could have caught", "can catch", "caught", "will catch"],
                "ans": 2,
                "exp": "If절이 had run이므로 주절은 could have caught(could have p.p.)가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거완료 형태]"
            },
            {
                "q": "'If I had had an umbrella, I wouldn't have been wet.'와 의미가 같은 직설법 문장은?",
                "options": [
                    "As I had an umbrella, I wasn't wet.",
                    "As I didn't have an umbrella, I was wet.",
                    "As I don't have an umbrella, I am wet.",
                    "Because I hadn't an umbrella, I was wet.",
                    "If I don't have an umbrella, I am wet."
                ],
                "ans": 2,
                "exp": "가정법 과거완료는 과거 사실의 반대이므로 '우산이 없었기 때문에 젖었다(didn't have, was wet)'인 2번이 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 직설법 과거 전환]"
            },
            {
                "q": "다음 중 어법상 올바른 문장은?",
                "options": [
                    "If I had known it, I would tell you.",
                    "If he were there, he would have helped us.",
                    "If she had practiced hard, she could have won.",
                    "If you arrived earlier, you could have met him.",
                    "If it had rained, we will cancel the match."
                ],
                "ans": 3,
                "exp": "If she had practiced hard, she could have won은 had p.p. ~ could have p.p.로 완벽한 호응을 이룹니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거완료 형태]"
            },
            {
                "q": "'네가 나를 도와주었더라면, 나는 그 일을 끝마칠 수 있었을 텐데.'를 바르게 영작한 것은?",
                "options": [
                    "If you helped me, I could finish the work.",
                    "If you had helped me, I could have finished the work.",
                    "If you had helped me, I could finish the work.",
                    "If you helped me, I could have finished the work.",
                    "If you have helped me, I would finish the work."
                ],
                "ans": 2,
                "exp": "If you had helped me, I could have finished the work가 올바른 가정법 과거완료 영작입니다.",
                "conceptRef": "1단계 [공식 1: 가정법 과거완료 형태]"
            }
        ]
    },

    # Unit 16: I wish / as if 가정법
    {
        "unitNo": 16,
        "unitId": "lv3_u16",
        "legacyUnitNo": 40,
        "title": "I wish 가정법과 as if 가정법",
        "part": "가정법의 심화",
        "targetGrade": "중3 내신 대비",
        "summary": "현재/과거의 아쉬운 소망을 나타내는 I wish + 가정법과 '마치 ~인 것처럼'을 나타내는 as if + 가정법",
        "overview": "'아, 내가 지금 피아노를 칠 줄 안다면 얼마나 좋을까!(I wish)', '그는 마치 자기가 왕인 것처럼 행동해(as if)'처럼 특별한 가정법 구문들이에요! 주절 시점과 일치하면 과거동사, 주절 시점보다 앞선 일이면 had p.p.를 쓴다는 2대 원리를 마스터해 봅시다!",
        "keyTakeaways": [
            "I wish + 과거동사: 지금 ~라면 좋을 텐데 (현재 소망) = I am sorry that + 현재부정",
            "I wish + had p.p.: 그때 ~했더라면 좋았을 텐데 (과거 소망) = I am sorry that + 과거부정",
            "as if (as though) + 가정법: 마치 ~인/였던 것처럼 (직설법 사실 반대)"
        ],
        "formulaCards": [
            {
                "name": "I wish 가정법의 두 가지 시제 공식",
                "formula": "I wish + S + 과거동사 (현재 소망) | I wish + S + had p.p. (과거 소망)",
                "examples": [
                    {
                        "en": "I wish I were taller so that I could play basketball better.",
                        "ko": "내가 키가 더 크다면 농구를 더 잘할 수 있을 텐데 좋을 텐데.",
                        "point": "현재 키가 크지 않은 아쉬움을 나타내어 I wish + were를 썼습니다."
                    },
                    {
                        "en": "I wish I had listened to my mother's warm advice then.",
                        "ko": "그때 어머니의 다정한 조언을 들었더라면 좋았을 텐데.",
                        "point": "과거에 조언을 듣지 않은 후회를 나타내어 had listened를 썼습니다."
                    }
                ],
                "oxCompare": {
                    "o": "I wish I could speak French well.",
                    "x": "I wish I can speak French well.",
                    "comment": "I wish 뒤에는 직설법 can이 아니라 가정법 과거형 could를 써야 합니다."
                },
                "trap": "I wish 가정법은 유감의 직설법 'I am sorry that ~'으로 전환할 수 있습니다.",
                "quizLink": "I am sorry that I am not rich ➔ I wish I were rich로의 전환은 필수 출제 문제입니다."
            },
            {
                "name": "as if 가정법의 시제 공식",
                "formula": "as if + S + 과거동사 (주절과 같은 시점 반대) | as if + S + had p.p. (주절보다 앞선 시점)",
                "examples": [
                    {
                        "en": "He talks as if he knew everything about the secret project.",
                        "ko": "그는 마치 그 비밀 프로젝트에 대해 모든 것을 알고 있는 것처럼 말한다.",
                        "point": "말하는 현재 시점에 사실은 잘 모르면서 아는 것처럼 굴므로 과거동사 knew를 씁니다."
                    },
                    {
                        "en": "She acts as if she had seen the scary ghost yesterday.",
                        "ko": "그녀는 마치 어제 무서운 유령을 보았던 것처럼 행동한다.",
                        "point": "행동하는 현재보다 앞선 과거의 일(yesterday)을 가정하므로 had seen을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He talks as if he were rich.",
                    "x": "He talks as if he is rich.",
                    "comment": "사실은 부자가 아니라는 반대 가정이므로 is가 아니라 were를 써야 합니다."
                },
                "trap": "as if = as though는 상호 교환이 가능한 완벽한 동의어입니다.",
                "quizLink": "as if 뒤의 be동사 역시 was 대신 were를 쓰는 것이 규정입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u16_d1",
                "missionTitle": "미션 1: I wish 뒤 직설법 현재동사 오용 수정",
                "sentence": "I wish I can fly in the blue sky like a free bird.",
                "korean": "내가 자유로운 새처럼 파란 하늘을 날 수 있다면 좋을 텐데.",
                "underlined": ["I wish", "I can fly", "in the blue sky", "like a free bird"],
                "wrongIndex": 1,
                "correction": "I could fly",
                "explanation": "I wish 가정법 뒤에는 현재동사 can이 올 수 없고 가정법 과거형 could를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: I wish 가정법] 출제 연계"
            },
            {
                "id": "lv3_u16_d2",
                "missionTitle": "미션 2: as if 가정법 be동사 was 오류 수정",
                "sentence": "The arrogant boy behaves as if he was the smartest student in school.",
                "korean": "그 오만한 소년은 마치 자기가 학교에서 가장 똑똑한 학생인 것처럼 행동한다.",
                "underlined": ["The arrogant boy", "behaves as if", "he was the smartest", "student in school"],
                "wrongIndex": 2,
                "correction": "he were the smartest",
                "explanation": "as if 가정법에서 be동사는 인칭에 상관없이 were를 쓰는 것이 올바릅니다.",
                "conceptRef": "1단계 [공식 2: as if 가정법] 출제 연계"
            },
            {
                "id": "lv3_u16_d3",
                "missionTitle": "미션 3: 과거 사건에 대한 I wish 가정법 시제 오류",
                "sentence": "I failed the test yesterday; I wish I studied harder last week.",
                "korean": "나는 어제 시험에 떨어졌다; 지난주에 더 열심히 공부했더라면 좋았을 텐데.",
                "underlined": ["I failed the test", "yesterday; I wish", "I studied harder", "last week"],
                "wrongIndex": 2,
                "correction": "I had studied harder",
                "explanation": "지난주(과거)에 공부하지 않은 것에 대한 후회이므로 과거완료 had studied를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: I wish 가정법] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'I wish I ______ more free time these days.'",
                "options": ["have", "had", "will have", "having", "am having"],
                "ans": 2,
                "exp": "현재 여유 시간이 없음을 아쉬워하는 현재 소망이므로 가정법 과거 had가 알맞습니다.",
                "conceptRef": "1단계 [공식 1: I wish 가정법]"
            },
            {
                "q": "다음 빈칸에 들어갈 알맞은 것은?\n\n'He treats me as if I ______ a little child.'",
                "options": ["am", "were", "was be", "will be", "be"],
                "ans": 2,
                "exp": "as if 가정법에서 be동사는 were를 씁니다.",
                "conceptRef": "1단계 [공식 2: as if 가정법]"
            },
            {
                "q": "'I am sorry that I didn't see the musical.'과 같은 의미의 문장은?",
                "options": [
                    "I wish I saw the musical.",
                    "I wish I had seen the musical.",
                    "I wish I see the musical.",
                    "I wish I could see the musical.",
                    "I wish I have seen the musical."
                ],
                "ans": 2,
                "exp": "과거에 보지 못한 것을 후회하므로 I wish + had p.p.(had seen)인 2번이 올바릅니다.",
                "conceptRef": "1단계 [공식 1: I wish 가정법]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "I wish I knew the answer.",
                    "He talks as if he knew everything.",
                    "She acts as if she were a queen.",
                    "I wish I can speak English fluently.",
                    "I wish I had been there with you."
                ],
                "ans": 4,
                "exp": "I wish can이 아니라 가정법 과거형 could를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: I wish 가정법]"
            },
            {
                "q": "'그는 마치 그 사고를 직접 보았던 것처럼 말한다.'를 바르게 영작한 것은?",
                "options": [
                    "He talks as if he saw the accident.",
                    "He talks as if he had seen the accident.",
                    "He talks as if he has seen the accident.",
                    "He talks as if he sees the accident.",
                    "He talks as if he will see the accident."
                ],
                "ans": 2,
                "exp": "말하는 현재보다 더 앞선 과거의 일이므로 as if he had seen the accident가 가장 정확합니다.",
                "conceptRef": "1단계 [공식 2: as if 가정법]"
            }
        ]
    },

    # Unit 17: 분사구문 기본 전환
    {
        "unitNo": 17,
        "unitId": "lv3_u17",
        "legacyUnitNo": 41,
        "title": "분사구문 기본 전환 (능동 V-ing)",
        "part": "분사의 심화",
        "targetGrade": "중3 내신 대비",
        "summary": "접속사 부사절을 간결하게 줄여 분사(V-ing)로 시작하는 분사구문의 3단계 전환 공식과 시간·이유·동시동작의 해석법",
        "overview": "'When I walked along the street'을 'Walking along the street'로 짧고 세련되게 압축하는 마법, 바로 '분사구문'이에요! 접속사 생략 ➔ 주어 생략 ➔ 동사원형에 -ing 붙이기의 3단계 기본 공식과, 문맥에 따라 시간, 이유, 조건, 동시동작으로 해석하는 법을 배워봅시다!",
        "keyTakeaways": [
            "분사구문 만드는 3단계: 1. 접속사 생략 ➔ 2. 주어 일치 시 생략 ➔ 3. 동사원형 + -ing",
            "해석 5대 공식: 시간(~할 때), 이유(~해서/때문에), 동시동작(~하면서), 조건(~한다면), 양보(~하지만)",
            "★분사구문의 주어는 문장 전체의 '주절 주어'와 반드시 같아야 함!"
        ],
        "formulaCards": [
            {
                "name": "분사구문 만드는 3단계 기본 공식",
                "formula": "1. 접속사 삭제 ➔ 2. 주절 주어와 같으면 삭제 ➔ 3. 동사 ➔ V-ing (능동)",
                "examples": [
                    {
                        "en": "Arriving at the station, I found that my train had already left.",
                        "ko": "역에 도착했을 때, 나는 기차가 이미 떠났다는 것을 알게 되었다.",
                        "point": "When I arrived at the station에서 접속사와 주어를 생략하고 Arriving으로 전환했습니다."
                    },
                    {
                        "en": "Feeling very tired, she went to bed earlier than usual.",
                        "ko": "매우 피곤했기 때문에, 그녀는 평소보다 일찍 잠자리에 들었다.",
                        "point": "Because she felt very tired에서 Feeling으로 전환된 이유의 분사구문입니다."
                    }
                ],
                "oxCompare": {
                    "o": "Hearing the loud noise, he turned around.",
                    "x": "Heard the loud noise, he turned around.",
                    "comment": "그가 소리를 들은 '능동' 관계이므로 과거분사 Heard가 아니라 현재분사 Hearing을 써야 합니다."
                },
                "trap": "주절의 주어가 동작을 '직접 하는 능동'이면 V-ing, '당하는 수동'이면 p.p.입니다.",
                "quizLink": "부사절 ➔ 분사구문, 분사구문 ➔ 부사절 양방향 변환은 내신 단골 주관식입니다."
            },
            {
                "name": "동시동작과 연속동작의 분사구문",
                "formula": "S + V ~, V-ing (동시동작: ~하면서) | S + V ~, and + V (연속동작)",
                "examples": [
                    {
                        "en": "She sat on the comfortable bench, listening to pop music.",
                        "ko": "그녀는 팝송을 들으면서 편안한 벤치에 앉아 있었다.",
                        "point": "벤치에 앉아 있으면서 동시에 음악을 듣고 있는 동시동작(~하면서)입니다."
                    },
                    {
                        "en": "Smiling brightly, the teacher welcomed the new students.",
                        "ko": "환하게 미소 지으면서, 선생님께서는 신입생들을 맞이하셨다.",
                        "point": "미소 짓는 행동과 맞이하는 행동이 동시에 일어남을 나타냅니다."
                    }
                ],
                "oxCompare": {
                    "o": "He walked down the street, waving his hand.",
                    "x": "He walked down the street, waved his hand.",
                    "comment": "접속사 and 없이 동사 두 개를 콤마로 연결할 수 없으므로 waving 분사구문으로 써야 합니다."
                },
                "trap": "접속사가 없는데 동사원형이나 과거형 동사를 콤마 뒤에 나열하면 문법적 오류입니다.",
                "quizLink": "콤마 뒤의 V-ing는 독해 지문에서 90% 이상 '~하면서'로 매끄럽게 해석됩니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u17_d1",
                "missionTitle": "미션 1: 능동 분사구문 과거동사 오용 수정",
                "sentence": "Saw the police car in the rearview mirror, he slowed down his speed.",
                "korean": "룸미러로 경찰차를 보았을 때, 그는 속도를 늦추었다.",
                "underlined": ["Saw the police car", "in the rearview mirror,", "he slowed down", "his speed"],
                "wrongIndex": 0,
                "correction": "Seeing the police car",
                "explanation": "주어 he가 경찰차를 직접 본 능동 동작이므로 Saw가 아니라 현재분사 Seeing이 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 분사구문 3단계 공식] 출제 연계"
            },
            {
                "id": "lv3_u17_d2",
                "missionTitle": "미션 2: 접속사 없는 동사 중복 연결 오류 수정",
                "sentence": "She walked along the riverbank, listened to her favorite classical music.",
                "korean": "그녀는 가장 좋아하는 클래식 음악을 들으면서 강둑을 따라 걸었다.",
                "underlined": ["She walked along", "the riverbank,", "listened to her favorite", "classical music"],
                "wrongIndex": 2,
                "correction": "listening to her favorite",
                "explanation": "접속사 and가 없으므로 동사 listened 대신 동시동작의 분사구문 listening을 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 동시동작 분사구문] 출제 연계"
            },
            {
                "id": "lv3_u17_d3",
                "missionTitle": "미션 3: 이유 분사구문 단순 동사원형 시작 오류",
                "sentence": "Have no extra money, he could not buy the expensive concert ticket.",
                "korean": "여분의 돈이 없었기 때문에, 그는 비싼 콘서트 티켓을 살 수 없었다.",
                "underlined": ["Have no extra money,", "he could not buy", "the expensive", "concert ticket"],
                "wrongIndex": 0,
                "correction": "Having no extra money,",
                "explanation": "분사구문은 동사원형이 아니라 현재분사 Having으로 시작해야 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 분사구문 3단계 공식] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 부사절을 분사구문으로 바르게 바꾼 것은?\n\n'Because I felt tired, I took a nap.'",
                "options": [
                    "Feel tired, I took a nap.",
                    "Feeling tired, I took a nap.",
                    "Felt tired, I took a nap.",
                    "To feel tired, I took a nap.",
                    "Having felt tired, I took a nap."
                ],
                "ans": 2,
                "exp": "접속사 Because와 주어 I를 생략하고 felt를 현재분사 Feeling으로 바꾼 2번이 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 분사구문 3단계 공식]"
            },
            {
                "q": "다음 분사구문을 부사절로 바르게 복원한 것은?\n\n'Walking along the street, I met an old friend.'",
                "options": [
                    "When I walked along the street, I met an old friend.",
                    "Because I walked along the street, I met an old friend.",
                    "Although I walked along the street, I met an old friend.",
                    "If I walked along the street, I met an old friend.",
                    "Before I walked along the street, I met an old friend."
                ],
                "ans": 1,
                "exp": "거리를 걷고 있을 때 만났다는 시간(~할 때)의 문맥이므로 When I walked가 가장 자연스럽습니다.",
                "conceptRef": "1단계 [공식 1: 분사구문 3단계 공식]"
            },
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'The baby fell asleep, ______ her mother's soft hand.'",
                "options": ["hold", "held", "holding", "to hold", "holds"],
                "ans": 3,
                "exp": "엄마의 손을 잡은 채로 잠이 들었다는 동시동작의 분사구문이므로 holding이 정답입니다.",
                "conceptRef": "1단계 [공식 2: 동시동작 분사구문]"
            },
            {
                "q": "다음 중 밑줄 친 분사구문의 의미가 '이유(~때문에)'로 해석되는 것은?",
                "options": [
                    "<u>Arriving</u> at the airport, he called his mom.",
                    "<u>Being</u> sick in bed, she couldn't attend the meeting.",
                    "<u>Turning</u> to the right, you will see the bank.",
                    "<u>Living</u> next door, I rarely see him.",
                    "He sat on the chair, <u>reading</u> a magazine."
                ],
                "ans": 2,
                "exp": "아파서 누워 있었기 때문에 참석하지 못했다는 2번이 이유의 분사구문입니다.",
                "conceptRef": "1단계 [공식 1: 분사구문 3단계 공식]"
            },
            {
                "q": "다음 중 어법상 올바른 문장은?",
                "options": [
                    "Opened the door, he entered the room.",
                    "Singing loudly, the crowd cheered for him.",
                    "Felt hungry, she ate a sandwich.",
                    "Know the answer, he raised his hand.",
                    "To see the dog, he ran away."
                ],
                "ans": 2,
                "exp": "2번은 주어와 분사구문의 능동 호응이 자연스러운 올바른 문장입니다. (Opening, Feeling, Knowing)",
                "conceptRef": "1단계 [공식 1: 분사구문 3단계 공식]"
            }
        ]
    },

    # Unit 18: 분사구문의 주의할 용법
    {
        "unitNo": 18,
        "unitId": "lv3_u18",
        "legacyUnitNo": 42,
        "title": "분사구문의 주의할 용법 (완료, 수동, 접속사 보존)",
        "part": "분사의 심화",
        "targetGrade": "중3 내신 대비",
        "summary": "주절보다 앞선 시점을 나타내는 완료분사구문(Having p.p.), (Being) p.p. 형태의 수동분사구문, 의미 명확성을 위해 접속사를 남겨둔 분사구문",
        "overview": "기본 분사구문에서 한 걸음 더 나아간 고급 분사구문이에요! 주절의 일보다 더 먼저 일어난 일을 강조하는 'Having + p.p.(완료분사구문)', 수동태에서 being이 생략되어 과거분사만 남는 '수동분사구문', 그리고 의미를 분명히 하기 위해 접속사를 그대로 살려두는 기법을 정복해 봅시다!",
        "keyTakeaways": [
            "완료분사구문: Having + p.p. (주절의 시제보다 '더 앞선 과거'의 일)",
            "수동분사구문: (Being / Having been) + p.p. ➔ p.p.만 남음 (주어가 당하는 수동 관계)",
            "접속사를 남겨둔 분사구문: 의미를 분명하게 밝히기 위해 접속사를 생략하지 않음 (While walking, When asked)"
        ],
        "formulaCards": [
            {
                "name": "완료분사구문 Having + p.p. 공식",
                "formula": "Having + p.p. ~, 주어 + 과거동사 (부사절 시제가 주절보다 하나 더 과거!)",
                "examples": [
                    {
                        "en": "Having finished all my homework, I went out to play soccer.",
                        "ko": "숙제를 다 끝마쳤기 때문에, 나는 축구를 하러 밖으로 나갔다.",
                        "point": "나간 과거(went)보다 숙제를 끝마친 것(had finished)이 앞서므로 Having finished를 씁니다."
                    },
                    {
                        "en": "Having seen the movie before, I didn't want to watch it again.",
                        "ko": "이전에 그 영화를 본 적이 있었기 때문에, 나는 그것을 다시 보고 싶지 않았다.",
                        "point": "과거 이전에 본 경험이므로 Having seen을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "Having lost his key, he couldn't open the door.",
                    "x": "Losing his key, he couldn't open the door.",
                    "comment": "열쇠를 잃어버린 것이 문을 못 여는 것보다 명백히 앞선 사건이므로 Having lost가 훨씬 정확합니다."
                },
                "trap": "부사절 시제가 대과거이고 주절 시제가 과거일 때는 단순 V-ing가 아니라 Having p.p.입니다!",
                "quizLink": "완료분사구문은 고등 내신 어법 객관식과 서술형 영작의 최빈출 킬러 문제입니다."
            },
            {
                "name": "수동분사구문과 (Being)의 생략",
                "formula": "(Being) + 과거분사(p.p.) ~ ➔ 주절 주어와의 관계가 '수동'일 때",
                "examples": [
                    {
                        "en": "Written in plain English, this book is very easy to read.",
                        "ko": "쉬운 영어로 쓰였기 때문에, 이 책은 읽기가 매우 쉽다.",
                        "point": "책이 '쓰여진(written)' 수동 관계이므로 Being written에서 Being이 생략되고 Written만 남았습니다."
                    },
                    {
                        "en": "Seen from a distance, the big rock looks like a human face.",
                        "ko": "멀리서 보아졌을 때, 그 큰 바위는 사람의 얼굴처럼 보인다.",
                        "point": "바위가 '보여지는' 수동 관계이므로 Seeing이 아니라 과거분사 Seen을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "Shocked by the news, she couldn't say a word.",
                    "x": "Shocking by the news, she couldn't say a word.",
                    "comment": "그녀가 소식에 의해 충격을 '받은' 수동이므로 Shocked가 맞습니다."
                },
                "trap": "주절의 주어(the rock, this book)를 분사 앞에 주어로 넣고 능동인지 수동인지 따져보세요!",
                "quizLink": "수동분사구문은 V-ing냐 p.p.냐를 묻는 평가원 수능 어법 1순위 출제 문제입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u18_d1",
                "missionTitle": "미션 1: 수동 관계 분사구문 능동 현재분사 오용",
                "sentence": "Praising by his teacher, the shy boy gained great confidence.",
                "korean": "선생님께 칭찬을 받았기 때문에, 그 수줍은 소년은 큰 자신감을 얻었다.",
                "underlined": ["Praising by", "his teacher,", "the shy boy gained", "great confidence"],
                "wrongIndex": 0,
                "correction": "Praised by (or Being praised by)",
                "explanation": "소년이 칭찬을 '받은' 수동의 관계이므로 Praising이 아니라 과거분사 Praised가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 수동분사구문] 출제 연계"
            },
            {
                "id": "lv3_u18_d2",
                "missionTitle": "미션 2: 시제 앞선 사건의 단순분사구문 오류",
                "sentence": "Lost his wallet yesterday, he had to borrow some money from his friend.",
                "korean": "어제 지갑을 잃어버렸기 때문에, 그는 친구에게 돈을 빌려야만 했다.",
                "underlined": ["Lost his wallet yesterday,", "he had to borrow", "some money", "from his friend"],
                "wrongIndex": 0,
                "correction": "Having lost his wallet yesterday,",
                "explanation": "돈을 빌린 것보다 지갑을 잃어버린 사건이 더 앞서며 능동이므로 완료분사구문 Having lost를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 완료분사구문] 출제 연계"
            },
            {
                "id": "lv3_u18_d3",
                "missionTitle": "미션 3: 접속사 보존 분사구문 형태 오류",
                "sentence": "While walked along the quiet beach, she found a shiny pearl shell.",
                "korean": "조용한 해변을 따라 걷는 동안, 그녀는 반짝이는 진주조개를 발견했다.",
                "underlined": ["While walked along", "the quiet beach,", "she found", "a shiny pearl shell"],
                "wrongIndex": 0,
                "correction": "While walking along",
                "explanation": "접속사를 남겨둔 분사구문에서는 동사원형이나 과거형이 아닌 분사(walking)가 와야 합니다.",
                "conceptRef": "1단계 [공식 2: 접속사 보존 분사구문] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'______ from a distance, the island looked like a floating turtle.'",
                "options": ["Seeing", "Seen", "Saw", "To see", "See"],
                "ans": 2,
                "exp": "섬(the island)이 멀리서 '보여지는' 수동 관계이므로 과거분사 Seen이 알맞습니다.",
                "conceptRef": "1단계 [공식 2: 수동분사구문]"
            },
            {
                "q": "다음 부사절을 완료분사구문으로 바르게 전환한 것은?\n\n'As I had finished my homework, I could go to bed early.'",
                "options": [
                    "Finishing my homework, I could go to bed early.",
                    "Finished my homework, I could go to bed early.",
                    "Having finished my homework, I could go to bed early.",
                    "To finish my homework, I could go to bed early.",
                    "Having been finished my homework, I could go to bed early."
                ],
                "ans": 3,
                "exp": "주절 시제(could go)보다 앞선 대과거(had finished)이므로 Having finished가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 완료분사구문]"
            },
            {
                "q": "다음 중 밑줄 친 분사구문의 형태가 어법상 어색한 것은?",
                "options": [
                    "<u>Written</u> in haste, the letter had some typos.",
                    "<u>Having eaten</u> dinner, I went for a walk.",
                    "<u>Told</u> the news, she burst into tears.",
                    "<u>Shocking</u> by the loud crash, they ran outside.",
                    "While <u>waiting</u> for the bus, I read a book."
                ],
                "ans": 4,
                "exp": "그들이 굉음에 의해 충격을 '받은' 것이므로 Shocking이 아니라 과거분사 Shocked가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 수동분사구문]"
            },
            {
                "q": "'이 약은 물과 함께 복용되면, 효과가 매우 좋다.'를 바르게 영작한 것은?",
                "options": [
                    "Taking with water, this medicine works well.",
                    "Taken with water, this medicine works well.",
                    "Took with water, this medicine works well.",
                    "To take with water, this medicine works well.",
                    "Having taken with water, this medicine works well."
                ],
                "ans": 2,
                "exp": "약이 복용되는 수동 관계이므로 Taken with water가 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 수동분사구문]"
            },
            {
                "q": "다음 괄호 안에서 알맞은 말이 바르게 짝지어진 것은?\n\n- '(Born / Bearing) in Seoul, he loves the city.'\n- '(Having lost / Losing) his passport, he couldn't leave the country.'",
                "options": [
                    "Born - Having lost",
                    "Bearing - Having lost",
                    "Born - Losing",
                    "Bearing - Losing",
                    "Born - Lost"
                ],
                "ans": 1,
                "exp": "태어난 것은 수동 Born, 여권을 먼저 잃어버린 것은 완료분사구문 Having lost입니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    },

    # Unit 19: 강조구문 (It is ~ that)
    {
        "unitNo": 19,
        "unitId": "lv3_u19",
        "legacyUnitNo": 43,
        "title": "강조구문 (It is ~ that 강조 vs 가주어-진주어 구별)",
        "part": "특수 구문",
        "targetGrade": "중3 내신 대비",
        "summary": "주어, 목적어, 부사구를 문두로 끌어내어 강조하는 It is ... that ~ 구문과 가주어-진주어 구문의 명쾌한 1초 판별법",
        "overview": "'어제 파티에서 지수를 만난 건 바로 민호였어!'처럼 문장의 특정 성분을 콕 집어 강렬하게 강조할 때 'It is ~ that 강조구문'을 써요! It is와 that을 지웠을 때 완전한 문장이 되는지 여부로 가주어-진주어 구문과 1초 만에 구별하는 비법을 배워봅시다!",
        "keyTakeaways": [
            "강조구문 공식: It is/was + [강조할 말(주어/목적어/부사구)] + that + [나머지 문장]",
            "강조 대상: 주어, 목적어, 시간·장소 부사구 (★동사는 do/does/did로 따로 강조!)",
            "★판별법: It is와 that을 지웠을 때 문장이 '완전하게 복원'되면 강조구문, 불완전하면 가주어-진주어!"
        ],
        "formulaCards": [
            {
                "name": "It is ~ that 강조구문의 기본 구조",
                "formula": "It is/was + 강조 대상(주어/목적어/부사구) + that + 나머지",
                "examples": [
                    {
                        "en": "It was in the park that I met my best friend yesterday.",
                        "ko": "내가 어제 가장 친한 친구를 만났던 곳은 바로 그 공원에서였다.",
                        "point": "장소 부사구 in the park를 It was와 that 사이에 넣어 강조했습니다."
                    },
                    {
                        "en": "It is Tom that wants to become the school president.",
                        "ko": "전교 회장이 되기를 원하는 사람은 바로 톰이다.",
                        "point": "주어 Tom을 강조하고 있으며, 사람이므로 that 대신 who를 쓸 수도 있습니다."
                    }
                ],
                "oxCompare": {
                    "o": "It was yesterday that he called me.",
                    "x": "It was yesterday which he called me.",
                    "comment": "시간 부사를 강조할 때 관계대명사 which를 쓰면 안 되며 that이나 when을 써야 합니다."
                },
                "trap": "동사를 강조할 때는 It is that을 쓰지 않고 'do / does / did + 동사원형'을 씁니다!",
                "quizLink": "I do love you(정말 사랑해), He did break it(진짜 깼어) 동사 강조도 함께 출제됩니다."
            },
            {
                "name": "강조구문 vs 가주어-진주어 구별 판별법",
                "formula": "It is와 that을 삭제 ➔ [문장 성립: 강조구문] vs [성립 불가(보어/형용사 남음): 가주어-진주어]",
                "examples": [
                    {
                        "en": "It is true that he is an honest boy.",
                        "ko": "그가 정직한 소년이라는 것은 사실이다.",
                        "point": "It is와 that을 빼면 'true he is an honest boy'로 문장이 성립하지 않으므로 가주어-진주어입니다."
                    },
                    {
                        "en": "It was Minho that broke the expensive vase.",
                        "ko": "비싼 꽃병을 깬 사람은 바로 민호였다.",
                        "point": "It was와 that을 빼면 'Minho broke the expensive vase'로 완벽한 문장이 되므로 강조구문입니다."
                    }
                ],
                "oxCompare": {
                    "o": "It is important that you arrive on time. (가주어-진주어)",
                    "x": "It is on time that you arrive important. (비문)",
                    "comment": "important 같은 형용사 보어가 It is 뒤에 오면 99% 가주어-진주어 구문입니다."
                },
                "trap": "It is 뒤에 '형용사'가 오면 가주어-진주어, '명사나 부사구'가 오면 강조구문입니다!",
                "quizLink": "중3 내신에서 밑줄 친 It ~ that의 쓰임이 다른 하나를 고르는 문제는 100% 빈출 문항입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u19_d1",
                "missionTitle": "미션 1: 과거 사실 강조구문 be동사 시제 불일치",
                "sentence": "It is yesterday that my father bought me a new laptop.",
                "korean": "아버지께서 내게 새 노트북을 사주신 것은 바로 어제였다.",
                "underlined": ["It is yesterday", "that my father", "bought me", "a new laptop"],
                "wrongIndex": 0,
                "correction": "It was yesterday",
                "explanation": "문장의 시제가 과거(bought, yesterday)이므로 It is가 아니라 It was yesterday가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 강조구문 기본 구조] 출제 연계"
            },
            {
                "id": "lv3_u19_d2",
                "missionTitle": "미션 2: 동사 강조 자리 It is that 오용 수정",
                "sentence": "I it was met him at the station yesterday morning.",
                "korean": "나는 어제 아침 역에서 그를 정말로 만났다.",
                "underlined": ["I it was met", "him at the station", "yesterday", "morning"],
                "wrongIndex": 0,
                "correction": "I did meet",
                "explanation": "일반동사를 강조할 때는 It is that을 쓰지 않고 조동사 did + 동사원형 did meet을 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 강조구문 기본 구조] 출제 연계"
            },
            {
                "id": "lv3_u19_d3",
                "missionTitle": "미션 3: 주어 강조 후 뒷문장 수일치 오류 수정",
                "sentence": "It is these students that wants to participate in the contest.",
                "korean": "대회에 참가하기를 원하는 사람들은 바로 이 학생들이다.",
                "underlined": ["It is these students", "that wants", "to participate in", "the contest"],
                "wrongIndex": 1,
                "correction": "that want",
                "explanation": "강조된 주어가 these students(복수)이므로 that 뒤의 동사도 복수형 want가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 강조구문 기본 구조] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 문장에서 'Tom'을 강조하는 It is ~ that 강조구문으로 바르게 바꾼 것은?\n\n'Tom broke the window yesterday.'",
                "options": [
                    "It was yesterday that Tom broke the window.",
                    "It was Tom that broke the window yesterday.",
                    "It was the window that Tom broke yesterday.",
                    "Tom did break the window yesterday.",
                    "It is Tom that broke the window yesterday."
                ],
                "ans": 2,
                "exp": "과거시제에 맞추어 주어 Tom을 강조한 It was Tom that broke the window yesterday가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 강조구문 기본 구조]"
            },
            {
                "q": "다음 중 밑줄 친 'It ~ that'의 쓰임이 강조구문인 것은?",
                "options": [
                    "It is certain that he will succeed.",
                    "It is natural that she was angry.",
                    "It is true that honesty is important.",
                    "It was in Seoul that I met her.",
                    "It is necessary that we leave now."
                ],
                "ans": 4,
                "exp": "4번은 부사구 in Seoul을 강조한 강조구문입니다. (It was와 that을 빼면 'I met her in Seoul' 성립)",
                "conceptRef": "1단계 [공식 2: 강조구문 vs 가주어-진주어]"
            },
            {
                "q": "다음 밑줄 친 동사를 강조하는 표현으로 알맞은 것은?\n\n'She <u>solved</u> the problem alone.'",
                "options": ["did solve", "does solve", "do solve", "did solved", "was solved"],
                "ans": 1,
                "exp": "과거형 일반동사의 강조는 did + 동사원형 did solve입니다.",
                "conceptRef": "1단계 [공식 1: 강조구문 기본 구조]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "It was Jane that called me last night.",
                    "It was on Sunday that we went hiking.",
                    "It is important that you be careful.",
                    "It is yesterday that I bought this book.",
                    "I do hope to see you again."
                ],
                "ans": 4,
                "exp": "bought, yesterday가 과거시제이므로 It is가 아니라 It was yesterday가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 강조구문 기본 구조]"
            },
            {
                "q": "'그 시험에 합격한 사람은 바로 민지였다.'를 바르게 영작한 것은?",
                "options": [
                    "It is Minji that passed the exam.",
                    "It was Minji that passed the exam.",
                    "It was Minji which passed the exam.",
                    "It did Minji pass the exam.",
                    "It was passed the exam that Minji."
                ],
                "ans": 2,
                "exp": "과거시제와 주어 Minji를 올바르게 강조한 2번이 정답입니다.",
                "conceptRef": "1단계 [공식 1: 강조구문 기본 구조]"
            }
        ]
    },

    # Unit 20: 도치 구문
    {
        "unitNo": 20,
        "unitId": "lv3_u20",
        "legacyUnitNo": 44,
        "title": "도치 구문 (부정어 도치 & 장소부사구 도치)",
        "part": "특수 구문",
        "targetGrade": "중3 내신 대비",
        "summary": "부정어(never, little, hardly)가 문두로 올 때의 의문문 어순 도치(조동사+S+V)와 장소부사구 문두 도치(장소부사구+동사+주어)",
        "overview": "'결코 나는 그런 짓을 하지 않았다!'처럼 문장의 어순(주어+동사)을 뒤집어 동사를 주어 앞으로 보내는 것을 '도치'라고 해요! 부정어가 앞에 오면 의문문처럼 '조동사 + 주어 + 동사원형'이 되고, 장소부사구가 앞에 오면 '동사 + 주어'가 바로 바뀌는 고등 연계 1등 킬러를 마스터해 봅시다!",
        "keyTakeaways": [
            "부정어 도치: 부정어(Never, Little, Rarely, Seldom, Hardly) + [조동사/be/do] + 주어 + 동사원형",
            "장소부사구 도치: 장소부사구 + 동사 + 주어 (주어가 대명사일 땐 도치하지 않음: Here you are!)",
            "★일반동사의 부정어 도치는 do / does / did를 빌려와 의문문 어순으로 만든다!"
        ],
        "formulaCards": [
            {
                "name": "부정어 문두 도치 공식 (의문문 어순)",
                "formula": "Never / Little / Hardly / Seldom + [do/does/did or be or 조동사] + S + V",
                "examples": [
                    {
                        "en": "Never did I imagine that he would become a famous movie star.",
                        "ko": "그가 유명한 영화배우가 될 것이라고는 나는 결코 상상하지 못했다.",
                        "point": "부정어 Never가 문두로 나가면서 일반동사 imagined 대신 did I imagine 어순이 되었습니다."
                    },
                    {
                        "en": "Little did she know about the surprising secret party.",
                        "ko": "그녀는 그 놀라운 비밀 파티에 대해 거의 알지 못했다.",
                        "point": "부정어 Little 뒤에 did she know 의문문 어순이 완성되었습니다."
                    }
                ],
                "oxCompare": {
                    "o": "Rarely does he eat fast food.",
                    "x": "Rarely he eats fast food.",
                    "comment": "부정어 Rarely가 문두에 오면 반드시 does he eat으로 도치해야 합니다."
                },
                "trap": "부정어 도치에서 일반동사를 그대로 주어 앞으로 보내면(Never imagined I) 틀립니다!",
                "quizLink": "부정어 문두 도치는 고교 내신 서술형과 수능 29번 어법의 최고난도 킬러입니다."
            },
            {
                "name": "장소·방향 부사구 문두 도치 공식",
                "formula": "장소부사구 + 동사 + 명사주어 (단, 대명사 주어는 도치 안 됨: 부사구 + S + V)",
                "examples": [
                    {
                        "en": "Under the big oak tree sat an old wise man.",
                        "ko": "큰 떡갈나무 아래에 한 지혜로운 노인이 앉아 있었다.",
                        "point": "장소부사구(Under the big oak tree) 뒤에 동사 sat + 주어 an old man이 도치되었습니다."
                    },
                    {
                        "en": "Here comes the school bus down the street!",
                        "ko": "거리 저편에서 통학버스가 온다!",
                        "point": "부사 Here 뒤에 동사 comes + 주어 the school bus입니다."
                    }
                ],
                "oxCompare": {
                    "o": "Here you are.",
                    "x": "Here are you.",
                    "comment": "주어가 대명사(you, it)일 때는 장소부사구가 앞에 와도 도치하지 않고 정상 어순을 씁니다."
                },
                "trap": "Here it comes(O) vs Here comes it(X)! 대명사 주어 예외를 꼭 기억하세요.",
                "quizLink": "장소부사구 도치에서는 뒤에 나오는 주어의 단·복수에 맞춰 동사의 수를 일치시킵니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv3_u20_d1",
                "missionTitle": "미션 1: 부정어 문두 도치 미수행 오류 수정",
                "sentence": "Never I have seen such a breathtaking sunset in my entire life.",
                "korean": "평생토록 나는 이렇게 숨 막히게 아름다운 일몰을 결코 본 적이 없다.",
                "underlined": ["Never I have seen", "such a breathtaking", "sunset in", "my entire life"],
                "wrongIndex": 0,
                "correction": "Never have I seen",
                "explanation": "부정어 Never가 문두에 왔으므로 have I seen으로 조동사가 주어 앞으로 도치되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 부정어 문두 도치] 출제 연계"
            },
            {
                "id": "lv3_u20_d2",
                "missionTitle": "미션 2: 일반동사 부정어 도치 조동사 do 누락",
                "sentence": "Little she knew that her friends were preparing a surprise party.",
                "korean": "그녀의 친구들이 깜짝 파티를 준비하고 있다는 것을 그녀는 거의 알지 못했다.",
                "underlined": ["Little she knew", "that her friends", "were preparing", "a surprise party"],
                "wrongIndex": 0,
                "correction": "Little did she know",
                "explanation": "부정어 Little이 문두에 왔으므로 일반동사 과거형을 대신하는 did she know로 도치되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 부정어 문두 도치] 출제 연계"
            },
            {
                "id": "lv3_u20_d3",
                "missionTitle": "미션 3: 대명사 주어 장소부사구 불필요한 도치",
                "sentence": "When the teacher asked for the textbook, here gave he it to her politely.",
                "korean": "선생님께서 교과서를 요청하셨을 때, 그는 그녀에게 그것을 건넸다.",
                "underlined": ["When the teacher asked", "for the textbook,", "here gave he it", "to her politely"],
                "wrongIndex": 2,
                "correction": "here he gave it",
                "explanation": "주어가 대명사 he일 때는 장소부사구 뒤에서 도치하지 않고 '부사 + 주어 + 동사' 어순을 유지해야 합니다.",
                "conceptRef": "1단계 [공식 2: 장소부사구 도치] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 어순으로 가장 알맞은 것은?\n\n'Never ______ such a beautiful aurora before.'",
                "options": ["I had seen", "had I seen", "I saw", "did I saw", "I have saw"],
                "ans": 2,
                "exp": "부정어 Never가 문두에 왔으므로 조동사+주어+p.p.인 had I seen이 올바른 도치 어순입니다.",
                "conceptRef": "1단계 [공식 1: 부정어 문두 도치]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 말로 알맞은 것은?\n\n'Seldom ______ he complain about his difficult situation.'",
                "options": ["does", "is", "do", "did", "was"],
                "ans": 1,
                "exp": "주어가 3인칭 단수 he이고 현재시제이므로 Seldom does he complain이 정답입니다.",
                "conceptRef": "1단계 [공식 1: 부정어 문두 도치]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "Little did I dream of winning the prize.",
                    "Here comes the bus.",
                    "On the hill stands an old church.",
                    "Here comes he at last.",
                    "Never will I forget your kindness."
                ],
                "ans": 4,
                "exp": "주어가 대명사 he일 때는 도치하지 않고 Here he comes로 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 장소부사구 도치]"
            },
            {
                "q": "'언덕 위에 하얀 집 한 채가 서 있다.'를 장소부사구 도치 구문으로 바르게 영작한 것은?",
                "options": [
                    "On the hill stands a white house.",
                    "On the hill a white house stands.",
                    "On the hill does a white house stand.",
                    "Stands on the hill a white house.",
                    "A white house on the hill stands."
                ],
                "ans": 1,
                "exp": "장소부사구(On the hill) + 동사(stands) + 명사주어(a white house)인 1번이 올바릅니다.",
                "conceptRef": "1단계 [공식 2: 장소부사구 도치]"
            },
            {
                "q": "'I little dreamed that I would see her again.'을 Little을 문두로 하여 바르게 도치한 것은?",
                "options": [
                    "Little I dreamed that I would see her again.",
                    "Little did I dream that I would see her again.",
                    "Little dreamed I that I would see her again.",
                    "Little I did dream that I would see her again.",
                    "Little do I dream that I would see her again."
                ],
                "ans": 2,
                "exp": "일반동사 과거형 dreamed의 부정어 도치는 Little did I dream ~입니다.",
                "conceptRef": "1단계 [공식 1: 부정어 문두 도치]"
            }
        ]
    }
]

print("LV3 part3 loaded: Units 15 to 20")
