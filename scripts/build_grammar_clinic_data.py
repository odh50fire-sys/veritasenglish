import json

# Define the full 40-unit curriculum
def generate_grammar_data():
    levels = [
        {
            "level": 1,
            "levelCode": "lv1",
            "levelName": "중학 기초 문법",
            "targetGrade": "초등 5·6 ~ 중1",
            "badge": "Lv.1 Starter",
            "color": "emerald",
            "themeColor": "#059669",
            "desc": "be동사와 일반동사, 시제, 명사·대명사의 격, 기본 문장 구조를 완벽하게 다지는 입문 코스",
            "units": [
                {
                    "unitNo": 1,
                    "title": "be동사와 일반동사의 현재·과거형",
                    "part": "동사의 기초",
                    "targetGrade": "중1 기초",
                    "summary": "be동사(am/are/is/was/were)와 일반동사의 3인칭 단수(-s/-es) 및 과거형 규칙",
                    "formulaCards": [
                        {"name": "be동사의 형태와 부정문", "formula": "주어 + be동사 (현재: am/are/is, 과거: was/were) + not", "example": "She was happy yesterday. They are not my classmates.", "trap": "be동사 문장에 don't/doesn't를 쓰거나, 일반동사 문장에 isn't를 쓰지 않도록 주의!"},
                        {"name": "일반동사 3인칭 단수 현재형", "formula": "3인칭 단수 주어(He, She, It) + 동사원형-(e)s", "example": "My brother plays soccer every weekend.", "trap": "조동사 뒤나 부정문/의문문의 does 뒤에는 반드시 동사원형이 옴!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_01",
                            "sentence": "My uncle [live / lives] in London and he teach English at school.",
                            "underlined": ["live", "in London", "he", "teach"],
                            "wrongIndex": 3,
                            "correction": "teaches",
                            "explanation": "주어 he는 3인칭 단수 현재이므로 동사 teach에 -es를 붙여 teaches로 고쳐야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 밑줄 친 동사의 쓰임이 어법상 올바른 것은?", "options": ["She don't like spicy food.", "My father watches TV every evening.", "They was very busy yesterday.", "He play baseball on Sundays.", "Does she has a bicycle?"], "ans": 1, "exp": "3인칭 단수 주어 My father 뒤에 watches가 올바르게 쓰였습니다. (1: doesn't, 3: were, 4: plays, 5: have)"},
                        {"q": "빈칸에 들어갈 말로 가장 적절한 것은?\n'Tom and Jerry ________ in the library two hours ago.'", "options": ["is", "are", "was", "were", "been"], "ans": 3, "exp": "주어가 복수(Tom and Jerry)이고 과거 시점 부사구(two hours ago)가 있으므로 were가 정답입니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'My sister ________ her homework before dinner yesterday.'", "options": ["finish", "finishes", "finished", "is finishing", "will finish"], "ans": 2, "exp": "yesterday는 명백한 과거 시점이므로 과거형 finished가 적절합니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["Are you ready for school?", "He didn't went to the park.", "They played tennis last Saturday.", "Where does your sister work?", "I am not tired right now."], "ans": 1, "exp": "과거 부정문 did not(didn't) 뒤에는 동사원형이 와야 하므로 went -> go로 고쳐야 합니다."},
                        {"q": "빈칸에 공통으로 들어갈 말은?\n'________ you see the doctor yesterday?' / '________ he play soccer last night?'", "options": ["Do", "Does", "Did", "Are", "Were"], "ans": 2, "exp": "과거 시점의 일반동사 의문문이므로 조동사 Did가 공통으로 들어갑니다."}
                    ]
                },
                {
                    "unitNo": 2,
                    "title": "명사의 복수형과 대명사의 격변화",
                    "part": "명사와 대명사",
                    "targetGrade": "중1 기초",
                    "summary": "규칙·불규칙 명사 복수형과 인칭대명사의 주격, 소유격, 목적격, 소유대명사",
                    "formulaCards": [
                        {"name": "불규칙 명사 복수형", "formula": "man->men, child->children, tooth->teeth, foot->feet, mouse->mice", "example": "Three children are playing with their puppies.", "trap": "childs, feets처럼 불규칙 복수형에 다시 -s를 덧붙이는 오류 주의!"},
                        {"name": "인칭대명사의 격변화", "formula": "주격(I) - 소유격(my) - 목적격(me) - 소유대명사(mine)", "example": "She gave me her book, but this pencil is mine.", "trap": "소유격(my, your) 뒤에는 명사가 필요하지만, 소유대명사(mine, yours)는 단독으로 쓰임!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_02",
                            "sentence": "The teacher gave him and [I / me] some books, but they were [her / hers].",
                            "underlined": ["gave", "him and I", "some books", "hers"],
                            "wrongIndex": 1,
                            "correction": "him and me",
                            "explanation": "동사 gave의 목적어 자리이므로 목적격인 him and me를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 명사의 복수형이 잘못 짝지어진 것은?", "options": ["box - boxes", "baby - babies", "leaf - leaves", "child - childs", "foot - feet"], "ans": 3, "exp": "child의 복수형은 불규칙 변화인 children입니다."},
                        {"q": "빈칸에 들어갈 대명사의 형태가 순서대로 알맞은 것은?\n'This camera is not ________. It is ________.'", "options": ["my - her", "mine - hers", "me - she", "mine - her", "my - hers"], "ans": 1, "exp": "단독으로 쓰이는 소유대명사 mine(나의 것), hers(그녀의 것)가 와야 합니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 어색한 것은?", "options": ["Look at those beautiful birds.", "I brushed my tooths this morning.", "Three men entered the room.", "She bought two pairs of shoes.", "The leaves turn red in autumn."], "ans": 1, "exp": "tooth의 복수형은 teeth입니다."},
                        {"q": "빈칸에 들어갈 알맞은 말은?\n'Mr. Brown teaches ________ English at school.'", "options": ["we", "our", "us", "ours", "ourselves"], "ans": 2, "exp": "수여동사 teaches 뒤의 간접목적어 자리이므로 목적격 us가 정답입니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'I love my dog, and its eyes ________ so bright.'", "options": ["is", "are", "was", "am", "be"], "ans": 1, "exp": "주어 its eyes는 복수 명사이므로 복수 동사 are가 와야 합니다."}
                    ]
                },
                {
                    "unitNo": 3,
                    "title": "형용사와 부사의 기본 쓰임",
                    "part": "품사와 수식어",
                    "targetGrade": "중1 기초",
                    "summary": "명사를 수식·보충하는 형용사와 동사·문장을 꾸며주는 부사의 구별",
                    "formulaCards": [
                        {"name": "형용사의 한정과 서술", "formula": "명사 앞/뒤 수식 or be/감각동사 뒤 주격보어", "example": "a smart boy / The food tastes delicious.", "trap": "-thing 대명사(something, anything)는 형용사가 뒤에서 수식! (something cold)"},
                        {"name": "형용사와 부사의 형태", "formula": "형용사 + -ly -> 부사 (slow -> slowly, easy -> easily)", "example": "He runs fast. She arrived late.", "trap": "fast, hard, late, early는 형용사와 부사의 형태가 같음! hardly는 '거의 ~않다'라는 부정 부사."}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_03",
                            "sentence": "The train arrived very [lately / late], so I could [hard / hardly] catch the bus.",
                            "underlined": ["train", "lately", "so", "hardly"],
                            "wrongIndex": 1,
                            "correction": "late",
                            "explanation": "'늦게'라는 뜻의 부사는 late입니다. lately는 '최근에'라는 뜻이므로 문맥에 맞지 않습니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'I want to drink something ________ because it is too hot.'", "options": ["cold", "coldly", "hot", "hotly", "warm"], "ans": 0, "exp": "-thing으로 끝나는 명사는 형용사가 뒤에서 수식하므로 cold가 정답입니다."},
                        {"q": "다음 중 밑줄 친 단어의 품사가 부사인 것은?", "options": ["He is a fast runner.", "She arrived early this morning.", "They live in a friendly neighborhood.", "It was a lovely day.", "He gave me a lonely look."], "ans": 1, "exp": "2번의 early는 동사 arrived를 수식하는 부사입니다. (friendly, lovely, lonely는 명사+-ly로 형성된 형용사)"},
                        {"q": "다음 문장의 빈칸에 들어갈 알맞은 말은?\n'He worked ________, but he could ________ finish the task in time.'", "options": ["hard - hard", "hardly - hard", "hard - hardly", "hardly - hardly", "hardly - late"], "ans": 2, "exp": "'열심히 일했다'는 worked hard, '거의 ~할 수 없었다'는 hardly finish가 적절합니다."},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["She sings very good.", "The flowers smell sweetly.", "He speaks English fluent.", "Drive careful on the snow.", "They arrived safely at home."], "ans": 4, "exp": "동사 arrived를 수식하는 부사 safely가 올바릅니다. (1: well, 2: sweet, 3: fluently, 4: carefully)"},
                        {"q": "다음 빈칸에 공통으로 들어갈 수 있는 단어는?\n'He is a ________ learner.' / 'She runs ________.'", "options": ["fast", "quick", "deep", "hard", "early"], "ans": 0, "exp": "형용사와 부사 형태가 동일한 fast가 명사 수식(fast learner)과 동사 수식(runs fast)에 모두 들어갑니다."}
                    ]
                },
                {
                    "unitNo": 4,
                    "title": "의문사 의문문 (Who, What, When, Where, Why, How)",
                    "part": "문장의 종류",
                    "targetGrade": "중1 기초",
                    "summary": "구체적인 정보를 묻는 의문사 의문문의 어순과 의문사가 주어인 특수 어순",
                    "formulaCards": [
                        {"name": "일반 의문사 의문문 어순", "formula": "의문사 + be동사/조동사/do(does/did) + 주어 + 동사원형...?", "example": "Where do you live? When did she arrive?", "trap": "Yes/No로 대답할 수 없으며, 시제에 맞게 do/does/did를 일치시켜야 함!"},
                        {"name": "의문사가 주어인 경우", "formula": "의문사(주어) + 동사 + 목적어...?", "example": "Who broke the window? What happened yesterday?", "trap": "의문사 자체가 주어일 때는 do/does/did 조동사를 쓰지 않고 바로 동사가 옴!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_04",
                            "sentence": "[How / What] did you go to the museum yesterday? I took the subway.",
                            "underlined": ["How", "did", "to the", "took"],
                            "wrongIndex": 0,
                            "correction": "How",
                            "explanation": "교통수단이나 방법을 묻고 있으므로 의문사 How가 적절합니다."
                        }
                    ],
                    "questions": [
                        {"q": "대화의 빈칸에 알맞은 의문사는?\nA: '________ broke the flower vase?'\nB: 'My younger brother did.'", "options": ["What", "Who", "Where", "When", "Why"], "ans": 1, "exp": "행위의 주체(사람)를 묻고 있으므로 주어 역할을 하는 의문대명사 Who가 알맞습니다."},
                        {"q": "대화의 빈칸에 알맞은 말은?\nA: '________ is the library from here?'\nB: 'It takes about 10 minutes on foot.'", "options": ["How long", "How far", "How often", "How much", "How old"], "ans": 1, "exp": "거리나 도보 소요 시간을 묻고 있으므로 How far가 적절합니다."},
                        {"q": "다음 중 어법상 올바른 의문문은?", "options": ["Where did you went yesterday?", "What do you doing now?", "Why is she crying?", "When does they eat dinner?", "Who did break the chair?"], "ans": 2, "exp": "현재진행형 의문사 의문문 Why is she crying?이 올바릅니다. (1: go, 2: are you doing, 4: do they, 5: Who broke)"},
                        {"q": "대화의 빈칸에 가장 알맞은 것은?\nA: '________ do you take the bus to school?'\nB: 'Twice a week.'", "options": ["How often", "How long", "How much", "How far", "How many"], "ans": 0, "exp": "빈도('일주일에 두 번')를 묻는 질문이므로 How often이 알맞습니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 전치사는?\n'What is this table made ________?'", "options": ["in", "of", "to", "for", "with"], "ans": 1, "exp": "재료를 나타내는 be made of 구문이므로 of가 정답입니다."}
                    ]
                },
                {
                    "unitNo": 5,
                    "title": "현재진행형과 과거진행형",
                    "part": "시제",
                    "targetGrade": "중1 기초",
                    "summary": "지금 진행 중인 동작(be + -ing)과 진행형으로 쓸 수 없는 상태 동사",
                    "formulaCards": [
                        {"name": "진행형의 기본 형태", "formula": "am/are/is + 동사원형-ing (현재진행) / was/were + -ing (과거진행)", "example": "He is writing an email now. They were sleeping at midnight.", "trap": "단모음+단자음일 때 마지막 자음 중복! (run -> running, swim -> swimming)"},
                        {"name": "진행형 불가 동사 (상태동사)", "formula": "소유(have, belong), 감정(like, love), 인지(know, understand), 감각(hear)", "example": "I have two dogs (o) / I am having two dogs (x)", "trap": "have가 '먹다, 시간을 보내다'의 동작 의미일 때는 진행형 가능! (I am having lunch)"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_05",
                            "sentence": "Listen! The baby [cries / is crying] in the next room right now.",
                            "underlined": ["Listen", "is crying", "in the", "right now"],
                            "wrongIndex": 1,
                            "correction": "is crying",
                            "explanation": "Listen!과 right now는 현재 진행 중인 동작을 나타내므로 현재진행형 is crying이 올바릅니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 동사의 -ing 형태가 잘못 연결된 것은?", "options": ["make - making", "run - running", "lie - lying", "stop - stoping", "study - studying"], "ans": 3, "exp": "단모음+단자음으로 끝나는 1음절 단어 stop은 자음을 하나 더 쓰고 -ing를 붙여 stopping이 되어야 합니다."},
                        {"q": "다음 중 어법상 어색한 문장은?", "options": ["I am listening to music.", "She is knowing the answer.", "They were playing soccer.", "We are having a good time.", "He was washing his car."], "ans": 1, "exp": "know는 상태나 인지를 나타내는 동사로 진행형을 쓸 수 없으므로 She knows the answer가 되어야 합니다."},
                        {"q": "빈칸에 들어갈 알맞은 시제는?\n'When I called him yesterday, he ________ dinner with his family.'", "options": ["is having", "was having", "has", "had have", "will have"], "ans": 1, "exp": "과거 특정 시점(When I called him)에 진행 중이었던 동작이므로 과거진행형 was having이 정답입니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'Look at the birds! They ________ high in the sky.'", "options": ["fly", "are flying", "were flying", "is flying", "flew"], "ans": 1, "exp": "Look!은 지금 눈앞에서 벌어지는 동작을 가리키며 복수 주어(They)이므로 are flying이 적절합니다."},
                        {"q": "다음 중 'have'의 쓰임이 올바르지 않은 것은?", "options": ["I am having breakfast now.", "She has a lot of friends.", "He is having a big car.", "They are having fun.", "We have English class on Mondays."], "ans": 2, "exp": "'소유하다'의 의미일 때는 진행형을 쓸 수 없으므로 He has a big car가 되어야 합니다."}
                    ]
                },
                {
                    "unitNo": 6,
                    "title": "기본 조동사 (can, may, must, should)",
                    "part": "조동사",
                    "targetGrade": "중1 기초",
                    "summary": "능력, 허가, 의무, 충고를 나타내는 기본 조동사의 쓰임과 동사원형 원칙",
                    "formulaCards": [
                        {"name": "조동사의 기본 원칙", "formula": "조동사 + 동사원형 (3인칭 단수 -s 불가, 조동사 연속 2개 사용 불가)", "example": "She can speak French. You must be quiet here.", "trap": "She can speaks (x) -> She can speak (o), will can (x) -> will be able to (o)"},
                        {"name": "must vs must not vs don't have to", "formula": "must(강한 의무) / must not(금지: ~해선 안 된다) / don't have to(~할 필요가 없다)", "example": "You must not touch this. You don't have to hurry.", "trap": "must not은 금지, don't have to는 불필요로 의미가 완전히 다름!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_06",
                            "sentence": "You [must not / don't have to] bring an umbrella. It is not going to rain today.",
                            "underlined": ["must not", "bring", "is not", "to rain"],
                            "wrongIndex": 0,
                            "correction": "don't have to",
                            "explanation": "비가 오지 않을 것이므로 우산을 '가져올 필요가 없다'는 뜻인 don't have to가 자연스럽습니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 밑줄 친 조동사의 의미가 '허가'를 나타내는 것은?", "options": ["You may borrow my pencil.", "It may rain this afternoon.", "She can play the violin very well.", "We must wear a seatbelt.", "You should see a dentist."], "ans": 0, "exp": "1번의 may는 '~해도 좋다'라는 허가의 의미입니다. (2번은 약한 추측, 3번은 능력, 4번은 의무, 5번은 충고)"},
                        {"q": "다음 문장의 빈칸에 알맞은 형태는?\n'He ________ speak three languages when he was ten years old.'", "options": ["can", "could", "may", "must", "should"], "ans": 1, "exp": "과거 시점(when he was ten)의 능력을 나타내므로 can의 과거형인 could가 알맞습니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["You should wash your hands.", "She will can swim next month.", "May I ask you a question?", "He doesn't have to get up early.", "Must I finish this homework today?"], "ans": 1, "exp": "조동사는 연속해서 두 개를 쓸 수 없으므로 will can -> will be able to로 고쳐야 합니다."},
                        {"q": "다음 빈칸에 알맞은 것은?\n'Museum rules say that visitors ________ touch the paintings.'", "options": ["don't have to", "must not", "should", "can", "might"], "ans": 1, "exp": "박물관 규칙상 미술품을 만지는 것은 금지이므로 must not이 올바릅니다."},
                        {"q": "밑줄 친 부분의 뜻이 '~할 필요가 없다'인 것은?", "options": ["You must not park here.", "He cannot be telling the truth.", "You don't have to do it alone.", "She should not eat too much salt.", "May not enter without permission."], "ans": 2, "exp": "don't have to는 '~할 필요가 없다'는 불필요를 나타냅니다."}
                    ]
                },
                {
                    "unitNo": 7,
                    "title": "문장의 기본 형태 (1·2·3형식 집중)",
                    "part": "문장 구조",
                    "targetGrade": "중1 기초",
                    "summary": "주어(S), 동사(V), 목적어(O), 보어(C)의 개념과 1·2·3형식 문장 분석",
                    "formulaCards": [
                        {"name": "1·2·3형식의 구조", "formula": "1형식(S+V) / 2형식(S+V+SC: 주격보어) / 3형식(S+V+O: 목적어)", "example": "The sun rises. (1) / She became a doctor. (2) / I bought a bike. (3)", "trap": "전치사구는 수식어(M)이므로 문장 형식 성분에 포함되지 않음! (He lives in Seoul - 1형식)"},
                        {"name": "2형식 감각동사", "formula": "look, sound, smell, taste, feel + 형용사", "example": "This soup tastes delicious. You look tired.", "trap": "우리말로는 '달콤하게'로 해석되어 sweetly를 쓰고 싶지만 보어 자리이므로 sweet(형용사)을 쓴다."}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_07",
                            "sentence": "The pizza smells [deliciously / delicious] and the music sounds [good / well].",
                            "underlined": ["smells", "deliciously", "music", "good"],
                            "wrongIndex": 1,
                            "correction": "delicious",
                            "explanation": "감각동사 smell 뒤에는 주격보어로 형용사 delicious가 와야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 문장의 형식이 2형식인 것은?", "options": ["Birds fly in the sky.", "My sister became a lawyer.", "He read an interesting book.", "They arrived at the station.", "I sent an email."], "ans": 1, "exp": "My sister(S) became(V) a lawyer(SC)는 주격보어를 가진 2형식 문장입니다."},
                        {"q": "다음 빈칸에 들어갈 수 없는 단어는?\n'The coffee smells ________.'", "options": ["sweet", "nice", "fresh", "great", "strongly"], "ans": 4, "exp": "감각동사 smells 뒤에는 형용사 보어가 와야 하므로 부사 strongly는 올 수 없습니다."},
                        {"q": "다음 문장의 밑줄 친 부분의 문장 성분은?\n'We enjoyed [the delicious dinner] together.'", "options": ["주어(S)", "동사(V)", "목적어(O)", "주격보어(SC)", "목적격보어(OC)"], "ans": 2, "exp": "동사 enjoyed의 대상을 나타내므로 목적어(O)입니다."},
                        {"q": "다음 중 1형식 문장인 것은?", "options": ["She lives in New York.", "He made a wooden desk.", "My mom looks happy.", "They called him a hero.", "I like fresh fruit."], "ans": 0, "exp": "She(S) lives(V) 뒤의 in New York은 전치사 수식어구(M)이므로 완전자동사를 사용한 1형식 문장입니다."},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["Your voice sounds sweetly.", "He seems sadly today.", "The food tasted badly.", "She felt happy at the news.", "It looks like nicely."], "ans": 3, "exp": "감각동사 felt 뒤에 형용사 보어 happy가 올바르게 쓰였습니다."}
                    ]
                },
                {
                    "unitNo": 8,
                    "title": "기본 접속사와 명령문·감탄문",
                    "part": "문장의 연결",
                    "targetGrade": "중1 기초",
                    "summary": "등위접속사(and, but, or, so), 명령문 + and/or, 감탄문(What a / How)",
                    "formulaCards": [
                        {"name": "명령문, and / or", "formula": "명령문, and ~ (~해라, 그러면 ...) / 명령문, or ~ (~해라, 그렇지 않으면 ...)", "example": "Hurry up, and you will catch the train. Hurry up, or you will be late.", "trap": "or는 '그렇지 않으면(otherwise)'의 경고 의미!"},
                        {"name": "감탄문 공식", "formula": "What + a/an + 형용사 + 명사 (+ 주어 + 동사)! / How + 형용사/부사 (+ 주어 + 동사)!", "example": "What a pretty girl she is! / How fast he runs!", "trap": "명사가 있으면 What, 순수 형용사/부사만 있으면 How!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_08",
                            "sentence": "[What / How] an amazing view this is! [How / What] beautiful the mountains are!",
                            "underlined": ["How an", "amazing view", "How beautiful", "are"],
                            "wrongIndex": 0,
                            "correction": "What an",
                            "explanation": "명사(amazing view)가 포함된 감탄문이므로 What a(an) + 형용사 + 명사 어순이어야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "빈칸에 들어갈 알맞은 접속사는?\n'Put on your coat, ________ you will catch a cold.'", "options": ["and", "or", "so", "but", "because"], "ans": 1, "exp": "'코트를 입어라, 그렇지 않으면 감기에 걸릴 것이다'이므로 or가 알맞습니다."},
                        {"q": "다음 중 감탄문의 형태가 어법상 올바른 것은?", "options": ["How a cute puppy it is!", "What fast he can run!", "What an exciting game it was!", "How tall boys they are!", "What beautifully she dances!"], "ans": 2, "exp": "What + an + 형용사(exciting) + 명사(game) + 주어(it) + 동사(was)!가 완벽합니다."},
                        {"q": "빈칸에 들어갈 말로 가장 적절한 것은?\n'________ delicious this cake is!'", "options": ["What", "How", "What a", "How a", "So"], "ans": 1, "exp": "형용사(delicious) + 주어(this cake) + 동사(is) 어순이므로 How가 알맞습니다."},
                        {"q": "대화의 빈칸에 알맞은 접속사는?\n'He was very tired, ________ he went to bed early.'", "options": ["and", "but", "so", "or", "for"], "ans": 2, "exp": "원인과 결과를 연결하는 '그래서'의 의미이므로 so가 알맞습니다."},
                        {"q": "다음 두 문장을 한 문장으로 바꿀 때 알맞은 것은?\n'Start now, and you will not miss the flight.'", "options": ["If you start now, you will miss the flight.", "If you don't start now, you will catch the flight.", "Unless you start now, you will not miss the flight.", "If you start now, you will catch the flight.", "Start now, or you will catch the flight."], "ans": 3, "exp": "'지금 출발해라, 그러면 비행기를 놓치지 않을 것이다'는 '지금 출발하면 비행기를 탈 수 있을 것이다'와 같습니다."}
                    ]
                }
            ]
        },
        {
            "level": 2,
            "levelCode": "lv2",
            "levelName": "중학 핵심 문법",
            "targetGrade": "중2 과정",
            "badge": "Lv.2 Explorer",
            "color": "blue",
            "themeColor": "#2563eb",
            "desc": "to부정사, 동명사, 현재완료 4대 용법, 수동태 기초 및 비교 구문 등 중2 내신 핵심 문법 완성",
            "units": [
                {
                    "unitNo": 9,
                    "title": "to부정사의 명사적·형용사적·부사적 용법",
                    "part": "준동사",
                    "targetGrade": "중2 필수",
                    "summary": "to부정사의 3대 용법 판별과 목적·결과·원인·형용사 수식의 다양한 부사적 쓰임",
                    "formulaCards": [
                        {"name": "to부정사의 3대 용법 판별", "formula": "명사적(~하기/것: 주·목·보) / 형용사적(~할: 명사수식) / 부사적(~하기 위해, 해서: 목적/감정원인)", "example": "To read books is fun. (명사) / I have no books to read. (형용사) / I went to buy books. (부사)", "trap": "형용사적 용법에서 전치사가 필요한 경우 주의! (a chair to sit on, a friend to talk with)"},
                        {"name": "의문사 + to부정사", "formula": "what/how/where/when + to부정사 = 명사구", "example": "I don't know what to do next. (= what I should do)", "trap": "why + to부정사는 영어에 존재하지 않음!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_09",
                            "sentence": "He gave me a piece of paper to write [on / with], but I had no pen to write [with / on].",
                            "underlined": ["gave me", "paper to write on", "had no", "pen to write with"],
                            "wrongIndex": 1,
                            "correction": "paper to write on",
                            "explanation": "종이 '위에' 쓰는 것이므로 write on, 펜을 '가지고' 쓰는 것이므로 write with가 올바른 전치사 결합입니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 밑줄 친 to부정사의 용법이 나머지와 다른 것은?", "options": ["I want [to be] a scientist.", "She decided [to study] abroad.", "He has a lot of homework [to do].", "They promised [to help] us.", "[To learn] English is important."], "ans": 2, "exp": "3번은 명사 homework를 뒤에서 수식하는 형용사적 용법입니다. 나머지는 모두 목적어나 주어로 쓰인 명사적 용법입니다."},
                        {"q": "다음 밑줄 친 부분의 쓰임이 '목적(~하기 위해)'을 나타내는 것은?", "options": ["He grew up to be a famous doctor.", "I am glad to see you again.", "She went to the library to borrow books.", "He must be crazy to say such a thing.", "The book is easy to understand."], "ans": 2, "exp": "3번은 도서관에 간 목적(~하기 위해)을 나타냅니다. (1번은 결과, 2번은 감정의 원인, 4번은 판단의 근거, 5번은 형용사 수식)"},
                        {"q": "다음 중 전치사의 쓰임이 잘못된 문장은?", "options": ["I need a chair to sit on.", "She has no friends to talk with.", "He bought a house to live in.", "Give me a pen to write with.", "I want a piece of paper to write."], "ans": 4, "exp": "종이 '위에' 쓰는 것이므로 to write on으로 전치사 on이 반드시 있어야 합니다."},
                        {"q": "다음 문장과 의미가 같은 것은?\n'I don't know where I should go.'", "options": ["I don't know where to go.", "I don't know how to go.", "I don't know what to go.", "I don't know when to go.", "I don't know why to go."], "ans": 0, "exp": "'where I should go'는 '의문사 + to부정사'인 'where to go'로 바꿔 쓸 수 있습니다."},
                        {"q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'My father promised ________ me a new bicycle.'", "options": ["buying", "to buy", "buy", "bought", "to buying"], "ans": 1, "exp": "동사 promise는 미래 지향적 동사이므로 to부정사(to buy)만을 목적어로 취합니다."}
                    ]
                },
                {
                    "unitNo": 10,
                    "title": "동명사의 역할과 to부정사 구별 동사",
                    "part": "준동사",
                    "targetGrade": "중2 필수",
                    "summary": "동명사의 주·목·보 역할, 동명사만/to부정사만 취하는 동사, 둘 다 취하며 의미가 달라지는 동사",
                    "formulaCards": [
                        {"name": "목적어 취급 동사 공식", "formula": "to부정사만: want, hope, wish, decide, plan, promise / 동명사만: enjoy, finish, avoid, mind, practice, give up", "example": "I enjoy playing tennis. / I want to play tennis.", "trap": "enjoy to play (x), decide playing (x)"},
                        {"name": "remember / forget / stop", "formula": "remember/forget + to부정사(미래: ~할 것을) / + -ing(과거: ~했던 것을) / stop to V(~하기 위해 멈추다) / stop -ing(~하던 것을 멈추다)", "example": "Remember to lock the door. / I remember meeting her.", "trap": "stop to smoke(담배를 피우기 위해 가던 길을 멈추다) vs stop smoking(금연하다)"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_10",
                            "sentence": "Don't forget [locking / to lock] the front door when you leave the house.",
                            "underlined": ["Don't forget", "locking", "front door", "when you leave"],
                            "wrongIndex": 1,
                            "correction": "to lock",
                            "explanation": "앞으로 집을 나갈 때 문을 잠글 것을 잊지 말라는 미래의 일이므로 to lock이 올바릅니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 동명사(-ing)만 들어갈 수 있는 동사는?", "options": ["hope", "decide", "finish", "promise", "plan"], "ans": 2, "exp": "finish는 동명사만을 목적어로 취하는 대표적인 동사입니다. (hope, decide, promise, plan은 to부정사)"},
                        {"q": "다음 두 문장의 의미가 서로 다른 것은?", "options": ["He stopped to smoke. / He stopped smoking.", "I started to cry. / I started crying.", "She likes to swim. / She likes swimming.", "They began to dance. / They began dancing.", "He continued to work. / He continued working."], "ans": 0, "exp": "stop to smoke는 '담배를 피우기 위해 멈추다'이고, stop smoking은 '담배 피우기를 중단하다(금연하다)'이므로 의미가 완전히 다릅니다."},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I remember ________ him last year, but I forgot ________ his name.'", "options": ["meeting - asking", "to meet - to ask", "meeting - to ask", "to meet - asking", "meet - ask"], "ans": 2, "exp": "작년에 만났던 과거 사실은 meeting, 이름을 물어보는 것을 깜빡했다는 것은 to ask가 알맞습니다."},
                        {"q": "다음 중 밑줄 친 부분의 쓰임이 어법상 어색한 것은?", "options": ["She enjoys listening to music.", "Would you mind closing the window?", "He gave up to solve the puzzle.", "I practiced speaking English.", "They avoided answering my question."], "ans": 2, "exp": "give up은 동명사를 목적어로 취하므로 to solve -> solving으로 고쳐야 합니다."},
                        {"q": "다음 중 밑줄 친 -ing가 '동명사'로 쓰인 것은?", "options": ["Look at the sleeping baby.", "She is reading a book now.", "My hobby is collecting coins.", "The crying child stopped.", "A rolling stone gathers no moss."], "ans": 2, "exp": "3번의 collecting은 문장의 보어로 쓰인 동명사입니다. 나머지는 모두 명사를 수식하거나 진행형을 만드는 현재분사입니다."}
                    ]
                },
                {
                    "unitNo": 11,
                    "title": "현재완료 시제 (완료, 경험, 계속, 결과)",
                    "part": "시제",
                    "targetGrade": "중2 필수",
                    "summary": "have/has + p.p.의 구조와 4대 용법(완료·경험·계속·결과) 및 과거시점 부사 결합 금지 원칙",
                    "formulaCards": [
                        {"name": "현재완료 4대 용법 구별 짝꿍 부사", "formula": "완료(just, already, yet) / 경험(ever, never, before, once) / 계속(for + 기간, since + 시작시점) / 결과(have gone to: 가고 없다, have lost)", "example": "I have lived here for 5 years. She has gone to Paris.", "trap": "have been to(~에 가본 적 있다: 경험) vs have gone to(~에 가버렸다: 결과)"},
                        {"name": "과거 특정 시점 부사 결합 금지", "formula": "yesterday, ago, last ~, in + 연도, when 의문문과는 현재완료 불가 (단순과거 사용)", "example": "I have met him yesterday. (x) -> I met him yesterday. (o)", "trap": "When have you arrived? (x) -> When did you arrive? (o)"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_11",
                            "sentence": "My uncle [has moved / moved] to Canada two years ago and he still lives there.",
                            "underlined": ["has moved", "to Canada", "two years ago", "still lives"],
                            "wrongIndex": 0,
                            "correction": "moved",
                            "explanation": "two years ago는 명백한 과거 시점 부사이므로 현재완료 has moved 대신 단순과거 moved를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 밑줄 친 현재완료의 용법이 '경험'인 것은?", "options": ["I have just finished my lunch.", "She has lived in Seoul since 2015.", "Have you ever seen a kangaroo?", "He has lost his smartphone.", "They have already left for the airport."], "ans": 2, "exp": "ever, never, before 등과 함께 쓰여 '~해본 적이 있다'를 나타내는 3번이 '경험'입니다. (1: 완료, 2: 계속, 4: 결과, 5: 완료)"},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["I have known her for ten years.", "She has gone to London yesterday.", "They have been to Japan twice.", "He hasn't done his homework yet.", "We have studied English since 2020."], "ans": 1, "exp": "yesterday는 명백한 과거 시점이므로 현재완료 has gone과 함께 쓸 수 없고 went to London yesterday가 되어야 합니다."},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞게 짝지어진 것은?\n'I have lived here ________ ten years, ________ my family moved from Busan.'", "options": ["for - since", "since - for", "for - for", "since - since", "during - since"], "ans": 0, "exp": "숫자 기간(ten years) 앞에는 for, 과거 시점의 절 앞에는 since가 알맞습니다."},
                        {"q": "대화의 밑줄 친 부분의 의미로 가장 적절한 것은?\nA: 'Where is Mike?'\nB: 'He [has gone to] the bookstore.'", "options": ["서점에 가본 적이 있다", "서점에 방금 도착했다", "서점에 가서 지금 여기에 없다", "서점에 가기를 좋아한다", "서점에서 돌아왔다"], "ans": 2, "exp": "have/has gone to는 '결과' 용법으로 '~로 가버려서 지금 여기에 없다'는 뜻입니다."},
                        {"q": "다음 중 어법상 올바른 의문문은?", "options": ["When have you bought this laptop?", "When did you buy this laptop?", "When have you buy this laptop?", "When do you bought this laptop?", "Since when did you buy this laptop?"], "ans": 1, "exp": "When 의문문은 특정 시점을 묻기 때문에 현재완료와 함께 쓸 수 없으며 단순과거 When did you buy~가 올바릅니다."}
                    ]
                },
                {
                    "unitNo": 12,
                    "title": "감각동사(2형식)와 수여동사(4형식 ➔ 3형식 전환)",
                    "part": "문장 구조",
                    "targetGrade": "중2 필수",
                    "summary": "감각동사 뒤 형용사 보어, 4형식(S+V+IO+DO) 수여동사의 3형식 전치사(to, for, of) 전환",
                    "formulaCards": [
                        {"name": "수여동사 4형식 ➔ 3형식 전치사 분류", "formula": "to: give, send, tell, show, lend / for: make, buy, cook, get, find / of: ask", "example": "She made me a cake. -> She made a cake for me.", "trap": "make, buy, cook류는 정성이 들어가므로 전치사 for를 씀!"},
                        {"name": "감각동사 + like + 명사", "formula": "look/sound/smell/taste/feel + 형용사 OR + like + 명사", "example": "It looks nice. (형용사) / It looks like a doll. (명사)", "trap": "looks like nice (x) -> look 뒤에 명사가 오려면 반드시 like 필요!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_12",
                            "sentence": "My mom made a delicious birthday cake [to / for] me yesterday.",
                            "underlined": ["made", "birthday cake", "to me", "yesterday"],
                            "wrongIndex": 2,
                            "correction": "for me",
                            "explanation": "동사 make는 4형식에서 3형식으로 전환할 때 간접목적어 앞에 전치사 for를 취합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장을 3형식으로 바꿀 때 빈칸에 들어갈 전치사는?\n'My grandmother made me a warm sweater.'\n➔ 'My grandmother made a warm sweater ________ me.'", "options": ["to", "for", "of", "at", "with"], "ans": 1, "exp": "make, buy, cook 등은 3형식 전환 시 전치사 for를 씁니다."},
                        {"q": "다음 중 4형식을 3형식으로 전환할 때 전치사 'to'를 쓰는 동사는?", "options": ["buy", "make", "cook", "give", "get"], "ans": 3, "exp": "give, send, tell, show 등은 전치사 to를 씁니다. (buy, make, cook, get은 for)"},
                        {"q": "다음 문장의 빈칸에 들어갈 전치사는?\n'May I ask a favor ________ you?'", "options": ["to", "for", "of", "from", "with"], "ans": 2, "exp": "ask는 3형식 전환 시 간접목적어 앞에 전치사 of를 씁니다."},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["The baby looks like cute.", "He sounded very angrily.", "She felt sadly about the news.", "This song sounds like an old ballad.", "The medicine tasted sweetly."], "ans": 3, "exp": "sound like 뒤에 명사구 an old ballad가 올바르게 연결되었습니다. (1: like 삭제, 2: angry, 3: sad, 5: sweet)"},
                        {"q": "다음 두 문장의 의미가 같도록 빈칸에 알맞은 말을 쓰시오.\n'I sent him an email yesterday.'\n= 'I sent an email ________ ________ yesterday.'", "options": ["for him", "to him", "of him", "with him", "at him"], "ans": 1, "exp": "동사 send는 3형식 전환 시 전치사 to를 취하므로 to him이 알맞습니다."}
                    ]
                },
                {
                    "unitNo": 13,
                    "title": "비교 구문 (원급, 비교급, 최상급)",
                    "part": "형용사와 부사",
                    "targetGrade": "중2 필수",
                    "summary": "as ~ as 원급 비교, 비교급 + than, the + 최상급 + in/of 및 불규칙 비교급 변화",
                    "formulaCards": [
                        {"name": "원급 비교와 부정", "formula": "as + 원급(형용사/부사) + as / not as[so] + 원급 + as", "example": "He is as tall as his father. She is not so old as I thought.", "trap": "as와 as 사이에는 반드시 '원급'만 와야 함! (as taller as - x)"},
                        {"name": "비교급 강조 부사", "formula": "much, even, still, far, a lot + 비교급 (훨씬)", "example": "This phone is much better than that one.", "trap": "very는 비교급을 절대 수식할 수 없음! (very better - x)"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_13",
                            "sentence": "This puzzle is [very / much] more difficult than the one we solved yesterday.",
                            "underlined": ["puzzle", "very", "more difficult", "than"],
                            "wrongIndex": 1,
                            "correction": "much (또는 even, still, far, a lot)",
                            "explanation": "비교급 more difficult를 수식하는 비교급 강조 부사는 much, even, still, far, a lot이어야 하며 very는 쓸 수 없습니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 비교급을 강조하는 말로 빈칸에 들어갈 수 없는 것은?\n'This movie is ________ more interesting than that one.'", "options": ["much", "even", "still", "very", "far"], "ans": 3, "exp": "very는 원급만을 수식할 수 있으며 비교급을 수식할 수 없습니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'Tom runs as ________ as his coach.'", "options": ["faster", "fastest", "fast", "fastly", "more fast"], "ans": 2, "exp": "as ~ as 사이에는 형용사나 부사의 '원급'이 와야 하므로 fast가 정답입니다."},
                        {"q": "다음 중 형용사·부사의 비교급-최상급 변화가 잘못된 것은?", "options": ["good - better - best", "bad - worse - worst", "many - more - most", "little - less - least", "fast - more fast - fastest"], "ans": 4, "exp": "fast의 비교급은 faster입니다."},
                        {"q": "다음 문장과 의미가 같은 것은?\n'She is taller than any other girl in her class.'", "options": ["She is the tallest girl in her class.", "She is as tall as all girls in her class.", "Other girls are taller than her.", "She is not so tall as other girls.", "No other girl is shorter than her."], "ans": 0, "exp": "'비교급 + than any other + 단수명사'는 '가장 ~하다'는 최상급의 의미를 나타냅니다."},
                        {"q": "다음 빈칸에 알맞은 전치사는?\n'Mount Everest is the highest mountain ________ the world.'", "options": ["of", "in", "at", "on", "from"], "ans": 1, "exp": "장소나 집단을 나타내는 단수명사 앞의 최상급 범위에는 전치사 in을 씁니다. (복수명사에는 of)"}
                    ]
                },
                {
                    "unitNo": 14,
                    "title": "조동사 심화 (have to, used to, would like to)",
                    "part": "조동사",
                    "targetGrade": "중2 필수",
                    "summary": "have to의 시제별 변화, used to(~하곤 했다 vs 과거의 상태), would like to 및 had better",
                    "formulaCards": [
                        {"name": "used to vs be used to", "formula": "used to + V원형(~하곤 했다) / be used to + V원형(~하는 데 사용되다) / be used to + -ing(~에 익숙하다)", "example": "I used to play the piano. / Wood is used to make paper. / I am used to getting up early.", "trap": "수능과 내신에서 가장 많이 출제되는 3대 used to 혼동 유형!"},
                        {"name": "had better와 would rather", "formula": "had better + 동사원형 (~하는 게 낫다) / had better not + 동사원형", "example": "You had better leave now. You had better not stay up late.", "trap": "had better not의 위치! not had better (x)"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_14",
                            "sentence": "There [used to be / used to being] a big bookstore on the corner of the street.",
                            "underlined": ["There", "used to being", "bookstore", "on the corner"],
                            "wrongIndex": 1,
                            "correction": "used to be",
                            "explanation": "'과거에 ~이 있었다'라는 과거의 상태를 나타낼 때는 used to 뒤에 동사원형 be가 와야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장의 밑줄 친 부분의 의미는?\n'There [used to be] a large pine tree in front of my house.'", "options": ["큰 소나무가 있는 데 사용된다", "큰 소나무가 있는 것에 익숙하다", "과거에 큰 소나무가 있었다", "큰 소나무가 있어야만 한다", "큰 소나무가 있을지도 모른다"], "ans": 2, "exp": "used to be는 '과거에 ~이 있었다(지금은 없다)'는 과거의 상태를 나타냅니다."},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["You had not better go out in this storm.", "You had better not go out in this storm.", "You better had not go out in this storm.", "You not had better go out in this storm.", "You had better don't go out in this storm."], "ans": 1, "exp": "had better의 부정형은 had better not + 동사원형입니다."},
                        {"q": "빈칸에 들어갈 알맞은 형태는?\n'She is used to ________ in front of a large audience.'", "options": ["speak", "spoke", "speaking", "spoken", "be spoken"], "ans": 2, "exp": "be used to -ing는 '~하는 것에 익숙하다'는 뜻이므로 동명사 speaking이 와야 합니다."},
                        {"q": "대화의 빈칸에 알맞은 것은?\nA: 'Would you like ________ some coffee?'\nB: 'Yes, please.'", "options": ["drink", "to drink", "drinking", "drank", "drinks"], "ans": 1, "exp": "would like to + 동사원형은 '~하고 싶다'라는 공손한 표현입니다."},
                        {"q": "다음 두 문장이 같은 의미가 되도록 빈칸에 알맞은 말을 고르시오.\n'He must submit the report today.'\n= 'He ________ to submit the report today.'", "options": ["has", "have", "had", "will", "is"], "ans": 0, "exp": "주어가 3인칭 단수(He)이므로 must의 대용 표현으로 has to가 알맞습니다."}
                    ]
                },
                {
                    "unitNo": 15,
                    "title": "수동태의 기본 개념 (be + p.p. by ~)",
                    "part": "태(Voice)",
                    "targetGrade": "중2 필수",
                    "summary": "능동태를 수동태로 전환하는 원리, 시제별 수동태, 행위자 by의 생략",
                    "formulaCards": [
                        {"name": "수동태 기본 공식", "formula": "주어 + be동사 + 과거분사(p.p.) + (by + 행위자)", "example": "The telephone was invented by Bell. (능동: Bell invented the telephone.)", "trap": "수동태의 시제와 수는 be동사(is, are, was, were)가 표현함!"},
                        {"name": "수동태 불가 동사 (자동사)", "formula": "appear, disappear, happen, occur, consist of, belong to", "example": "The accident was happened. (x) -> The accident happened. (o)", "trap": "자동사는 목적어가 없으므로 수동태 자체가 불가능함!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_15",
                            "sentence": "The tragic car accident was [happened / happened] on the highway last night.",
                            "underlined": ["accident", "was happened", "on the highway", "last night"],
                            "wrongIndex": 1,
                            "correction": "happened",
                            "explanation": "happen은 완전자동사이므로 수동태(was happened)로 쓸 수 없으며 능동형 happened로 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 능동태 문장을 수동태로 올바르게 바꾼 것은?\n'Shakespeare wrote Hamlet.'", "options": ["Hamlet is written by Shakespeare.", "Hamlet was wrote by Shakespeare.", "Hamlet was written by Shakespeare.", "Hamlet were written by Shakespeare.", "Hamlet wrote by Shakespeare."], "ans": 2, "exp": "과거 시제이면서 단수 주어이므로 be동사 was + p.p. written by가 올바릅니다."},
                        {"q": "다음 중 수동태로 바꿀 수 없는 동사는?", "options": ["build", "write", "disappear", "invent", "clean"], "ans": 2, "exp": "disappear(사라지다)는 목적어가 없는 완전자동사이므로 수동태를 만들 수 없습니다."},
                        {"q": "다음 빈칸에 들어갈 알맞은 말은?\n'Many bridges in this city ________ in the 1990s.'", "options": ["build", "built", "were built", "was built", "are built"], "ans": 2, "exp": "주어 Many bridges는 복수이고 1990년대(과거)에 지어졌으므로 were built가 정답입니다."},
                        {"q": "다음 중 by 이외의 전치사를 쓰는 수동태로 잘못 짝지어진 것은?", "options": ["be surprised at", "be interested in", "be covered with", "be satisfied of", "be filled with"], "ans": 3, "exp": "'~에 만족하다'는 be satisfied with를 씁니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 전치사는?\n'The ground was covered ________ white snow.'", "options": ["at", "with", "in", "by", "of"], "ans": 1, "exp": "'~로 덮여 있다'는 be covered with를 사용합니다."}
                    ]
                },
                {
                    "unitNo": 16,
                    "title": "접속사 (시간, 이유, 조건 if, 양보 although)",
                    "part": "문장의 연결",
                    "targetGrade": "중2 필수",
                    "summary": "부사절 접속사(when, while, because, if, although)와 시간·조건 부사절의 현재 시제 원칙",
                    "formulaCards": [
                        {"name": "시간·조건 부사절의 대원칙", "formula": "시간(when, while, after)이나 조건(if, unless) 부사절에서는 '미래시제 대신 현재시제' 사용!", "example": "If it rains tomorrow, we will stay home. (If it will rain - x)", "trap": "주절은 미래(will stay)를 쓰지만, if절 안에서는 반드시 현재형(rains)을 써야 함!"},
                        {"name": "if vs unless", "formula": "unless = if ~ not (~하지 않는다면)", "example": "Unless you hurry, you will be late. (= If you don't hurry, ...)", "trap": "unless 절 안에는 이미 부정의 의미가 있으므로 not을 또 쓰면 안 됨!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_16",
                            "sentence": "If it [will rain / rains] tomorrow, the baseball game will be canceled.",
                            "underlined": ["If it", "will rain", "tomorrow", "will be canceled"],
                            "wrongIndex": 1,
                            "correction": "rains",
                            "explanation": "조건을 나타내는 부사절(If절)에서는 미래의 일이라도 미래시제(will rain) 대신 현재시제(rains)를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 동사의 형태로 올바른 것은?\n'We will go on a picnic if the weather ________ fine tomorrow.'", "options": ["will be", "is", "was", "be", "being"], "ans": 1, "exp": "조건의 부사절에서는 내일(tomorrow)의 일이라도 현재시제 is를 써야 합니다."},
                        {"q": "다음 두 문장을 한 문장으로 연결할 때 빈칸에 알맞은 접속사는?\n'It was raining heavily. He went out for a walk.'\n➔ '________ it was raining heavily, he went out for a walk.'", "options": ["Because", "Although", "Since", "If", "While"], "ans": 1, "exp": "'비가 쏟아졌음에도 불구하고 산책을 나갔다'는 상반된 내용(양보)이므로 Although가 알맞습니다."},
                        {"q": "다음 문장과 의미가 같은 것은?\n'Unless you study hard, you will not pass the exam.'", "options": ["If you study hard, you will not pass the exam.", "If you don't study hard, you will pass the exam.", "If you don't study hard, you will not pass the exam.", "If you study hard, you will pass the exam.", "When you study hard, you will not pass the exam."], "ans": 2, "exp": "unless는 if ... not과 같으므로 'If you don't study hard, you will not pass the exam.'이 정답입니다."},
                        {"q": "다음 중 어법상 어색한 문장은?", "options": ["I will call you when I arrive at the hotel.", "She was listening to music while she was jogging.", "Because he was sick, he couldn't take the test.", "Please wait here until he will come back.", "Although he is rich, he lives simply."], "ans": 3, "exp": "시간의 부사절 until 뒤에는 미래시제 will come 대신 현재시제 comes를 써야 합니다."},
                        {"q": "다음 빈칸에 공통으로 들어갈 수 있는 접속사는?\n'________ she was tired, she smiled.' / '________ it was cold, we swam.'", "options": ["Because", "Though", "Since", "If", "As"], "ans": 1, "exp": "비록 ~일지라도의 양보를 나타내는 Though(Although)가 알맞습니다."}
                    ]
                }
            ]
        },
        {
            "level": 3,
            "levelCode": "lv3",
            "levelName": "중학 완성 & 내신 심화",
            "targetGrade": "중3 과정",
            "badge": "Lv.3 Pioneer",
            "color": "indigo",
            "themeColor": "#4f46e5",
            "desc": "5형식 사역·지각동사, 관계대명사/관계부사, 분사구문, 가정법 과거 등 중3 내신 고득점 및 고등 연계 문법",
            "units": [
                {
                    "unitNo": 17,
                    "title": "5형식 목적격보어 (사역동사 & 지각동사)",
                    "part": "문장 구조",
                    "targetGrade": "중3 완성",
                    "summary": "사역동사(make/have/let), 지각동사(see/hear/watch/feel), help/get의 목적격보어 형태 완벽 정리",
                    "formulaCards": [
                        {"name": "사역동사와 지각동사의 목적격보어", "formula": "사역동사(make, have, let) + 목적어 + 동사원형 / 지각동사(see, hear, feel) + 목적어 + 동사원형 or 현재분사(-ing)", "example": "She made him clean the room. / I heard someone singing.", "trap": "목적어와 보어의 관계가 수동이면 사역/지각 상관없이 무조건 과거분사(p.p.)! (I had my hair cut.)"},
                        {"name": "to부정사를 목적격보어로 취하는 일반 5형식 동사", "formula": "want, tell, order, ask, allow, expect, advise + 목적어 + to부정사", "example": "My mom told me to clean my room. He asked me to help him.", "trap": "사역/지각동사가 아닌 일반 5형식 동사는 목적격보어 자리에 반드시 to부정사가 옴!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_17",
                            "sentence": "The teacher made all students to [write / writing] an essay, but she allowed us [to take / take] a break.",
                            "underlined": ["made", "to write", "essay", "to take"],
                            "wrongIndex": 1,
                            "correction": "write",
                            "explanation": "사역동사 make 뒤의 목적격보어는 동사원형(write)이어야 하며 to부정사를 쓸 수 없습니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 동사의 형태로 올바른 것은?\n'My father let me ________ his car yesterday.'", "options": ["drive", "to drive", "driving", "drove", "driven"], "ans": 0, "exp": "사역동사 let 뒤의 목적격보어는 동사원형(drive)입니다."},
                        {"q": "다음 중 밑줄 친 부분의 어법이 틀린 것은?", "options": ["I saw him crossing the street.", "She heard her name called from behind.", "My doctor advised me to eat less sugar.", "He helped me to carry the heavy box.", "The teacher made us to memorize the poem."], "ans": 4, "exp": "사역동사 made 뒤의 목적격보어는 동사원형이므로 to memorize -> memorize로 고쳐야 합니다."},
                        {"q": "빈칸에 들어갈 알맞은 형태는?\n'I had my smartphone ________ yesterday because the screen broke.'", "options": ["repair", "to repair", "repaired", "repairing", "repairs"], "ans": 2, "exp": "스마트폰이 '수리되는' 수동 관계이므로 과거분사 repaired가 와야 합니다."},
                        {"q": "다음 중 목적격보어로 to부정사만을 취하는 동사는?", "options": ["make", "have", "let", "see", "allow"], "ans": 4, "exp": "allow는 목적격보어로 to부정사를 취합니다. (make, have, let은 동사원형, see는 동사원형/현재분사)"},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'We watched the sun ________ over the horizon.'", "options": ["rise", "rose", "to rise", "risen", "rises"], "ans": 0, "exp": "지각동사 watch 뒤의 목적격보어는 동사원형(rise) 또는 현재분사(rising)입니다."}
                    ]
                },
                {
                    "unitNo": 18,
                    "title": "관계대명사의 격 (주격, 목적격, 소유격 whose)",
                    "part": "관계사",
                    "targetGrade": "중3 완성",
                    "summary": "선행사(사람/사물)에 따른 who, which, that의 격별 쓰임과 소유격 whose, 목적격 생략",
                    "formulaCards": [
                        {"name": "관계대명사의 격 판별", "formula": "주격: 선행사 + who/which/that + 동사 / 목적격: 선행사 + who(m)/which/that + S + V / 소유격: 선행사 + whose + 명사", "example": "The girl who won the race is Jane. / A dog whose tail is short.", "trap": "주격 관계대명사 뒤의 동사는 선행사의 인칭과 수에 일치시켜야 함!"},
                        {"name": "목적격 관계대명사의 생략", "formula": "타동사의 목적어나 전치사의 목적어로 쓰인 관계대명사는 단독 생략 가능", "example": "The movie (which) I watched yesterday was exciting.", "trap": "전치사가 관계대명사 바로 앞에 있을 때는 생략 불가! (the house in which I live)"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_18",
                            "sentence": "I met a boy [who / whose] father is a famous astronaut in NASA.",
                            "underlined": ["met", "who", "father is", "famous"],
                            "wrongIndex": 1,
                            "correction": "whose",
                            "explanation": "뒤에 무관사 명사 father가 이어지며 '그 소년의 아버지는'이라는 소유 관계이므로 소유격 관계대명사 whose가 올바릅니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 알맞은 관계대명사는?\n'The man ________ is talking to my father is our English teacher.'", "options": ["who", "which", "whose", "whom", "what"], "ans": 0, "exp": "선행사가 사람(The man)이고 뒤에 동사 is가 이어지는 주어 자리이므로 주격 who가 정답입니다."},
                        {"q": "다음 두 문장을 한 문장으로 알맞게 연결한 것은?\n'I have a friend. Her father is a pilot.'", "options": ["I have a friend who father is a pilot.", "I have a friend which father is a pilot.", "I have a friend whose father is a pilot.", "I have a friend whom father is a pilot.", "I have a friend that father is a pilot."], "ans": 2, "exp": "소유격 Her를 대신하므로 소유격 관계대명사 whose가 쓰여야 합니다."},
                        {"q": "다음 중 밑줄 친 관계대명사를 생략할 수 있는 것은?", "options": ["The student [who] answered the question was smart.", "The book [which] is on the desk is mine.", "The girl [whom] I met at the station was kind.", "He has a sister [who] plays the cello.", "This is the car [which] runs fastest."], "ans": 2, "exp": "동사 met의 목적어로 쓰인 목적격 관계대명사 whom은 단독으로 생략할 수 있습니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["The cookies that my mom baked are sweet.", "Look at the boy and his dog that are running.", "I know the reason which he was absent.", "The house whose roof is red is mine.", "This is the phone which I lost yesterday."], "ans": 2, "exp": "선행사가 이유(the reason)이므로 관계부사 why 또는 for which가 와야 합니다."},
                        {"q": "빈칸에 들어갈 말로 알맞은 것은?\n'The books ________ are on the top shelf belong to my sister.'", "options": ["who", "which", "whose", "what", "whom"], "ans": 1, "exp": "선행사가 사물(The books)이고 주격이므로 which 또는 that이 알맞습니다."}
                    ]
                },
                {
                    "unitNo": 19,
                    "title": "관계대명사 that vs what 완벽 구별",
                    "part": "관계사",
                    "targetGrade": "중3 완성",
                    "summary": "선행사를 포함하는 관계대명사 what(= the thing which)과 선행사가 필요한 that의 구조적 판별",
                    "formulaCards": [
                        {"name": "what vs that 구별 공식 (수능·내신 1위 빈출)", "formula": "what: 선행사 없음 + 뒷문장 불완전 (주어나 목적어 없음) / that: 선행사 명사 있음 + 뒷문장 불완전", "example": "Show me what you bought. (선행사x, 불완전) / Show me the book that you bought. (선행사o, 불완전)", "trap": "명사절 접속사 that은 선행사 없고 뒷문장이 '완전'함!"},
                        {"name": "that만을 쓰는 경우", "formula": "최상급, 서수, the only, the very, -thing 대명사, 사람+동물이 선행사일 때", "example": "This is the only thing that I want.", "trap": "전치사 뒤나 계속적 용법(콤마 뒤)에는 that 사용 불가! (, that - x / in that은 '~라는 점에서'라는 부사절)"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_19",
                            "sentence": "This is [that / what] I have been looking for all day long.",
                            "underlined": ["This is", "that", "looking for", "all day"],
                            "wrongIndex": 1,
                            "correction": "what",
                            "explanation": "앞에 선행사 명사가 없고, looking for의 목적어가 빠진 불완전한 절이므로 선행사를 포함한 관계대명사 what이 와야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'I cannot understand ________ she is saying right now.'", "options": ["that", "what", "which", "who", "where"], "ans": 1, "exp": "앞에 선행사 명사가 없고 saying의 목적어가 없는 불완전한 절이므로 what이 정답입니다."},
                        {"q": "다음 중 밑줄 친 'that'의 쓰임이 나머지와 다른 것은?", "options": ["The fact [that] she survived is a miracle.", "I like the bag [that] you bought.", "The boy [that] is dancing is my cousin.", "This is the song [that] won first place.", "The movie [that] we watched was boring."], "ans": 0, "exp": "1번은 완벽한 문장을 이끄는 동격의 접속사 that입니다. 나머지는 모두 불완전한 절을 이끄는 관계대명사 that입니다."},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'Do you know the girl ________ is singing? / That is ________ I really want.'", "options": ["that - that", "that - what", "what - that", "what - what", "which - which"], "ans": 1, "exp": "첫 번째는 선행사 the girl을 수식하는 주격 관계대명사 that, 두 번째는 선행사가 없는 목적격 what이 알맞습니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["This is what I learned today.", "What he said made me happy.", "The thing what I need is love.", "I told him that I was busy.", "All that glitters is not gold."], "ans": 2, "exp": "what은 이미 the thing which를 포함하고 있으므로 The thing what은 중복 오류입니다. The thing that 또는 What으로 고쳐야 합니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'She gave me ________ little money she had.'", "options": ["what", "that", "which", "whom", "where"], "ans": 0, "exp": "'what little + 명사'는 '비록 적지만 ~한 전부'를 뜻하는 관용적 관계형용사 표현입니다."}
                    ]
                },
                {
                    "unitNo": 20,
                    "title": "관계부사 (where, when, why, how)",
                    "part": "관계사",
                    "targetGrade": "중3 완성",
                    "summary": "장소, 시간, 이유, 방법의 관계부사와 '전치사 + 관계대명사' 전환, the way how의 병기 불가",
                    "formulaCards": [
                        {"name": "관계부사 = 전치사 + 관계대명사", "formula": "where (= in/at which) / when (= in/on/at which) / why (= for which) / how (= in which)", "example": "This is the house where I was born. (= in which I was born)", "trap": "관계대명사 뒤는 불완전한 문장이지만, 관계부사 뒤는 '완전한 문장'이 옴!"},
                        {"name": "the way how의 병기 금지", "formula": "the way와 how는 절대로 나란히 쓸 수 없음! the way만 쓰거나, how만 쓰거나, the way in which/that으로 씀", "example": "This is the way how he solved it. (x) -> This is the way he solved it. (o)", "trap": "중·고등 내신 시험 단골 출제 1위 함정!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_20",
                            "sentence": "Tell me [the way how / how] you managed to pass the difficult exam.",
                            "underlined": ["Tell me", "the way how", "managed", "to pass"],
                            "wrongIndex": 1,
                            "correction": "the way 또는 how (둘 중 하나만)",
                            "explanation": "the way와 how는 절대로 함께 쓸 수 없으므로 the way만 쓰거나 how만 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["This is the village where my grandmother lives.", "I remember the day when we first met.", "Can you tell me the reason why you were late?", "Show me the way how you made this cake.", "I don't know the reason why she is crying."], "ans": 3, "exp": "the way와 how는 함께 쓸 수 없으므로 Show me the way you made~ 또는 Show me how you made~로 써야 합니다."},
                        {"q": "빈칸에 들어갈 알맞은 관계부사는?\n'Spring is the season ________ flowers bloom.'", "options": ["where", "when", "why", "how", "which"], "ans": 1, "exp": "선행사가 시간(the season)이고 뒤에 완전한 절이 오므로 when이 정답입니다."},
                        {"q": "다음 두 문장을 한 문장으로 바꿀 때 빈칸에 알맞은 것은?\n'This is the hotel. We stayed at the hotel last summer.'\n➔ 'This is the hotel ________ we stayed last summer.'", "options": ["which", "where", "when", "why", "whom"], "ans": 1, "exp": "at the hotel은 장소 부사구이므로 관계부사 where 또는 at which로 바꿀 수 있습니다."},
                        {"q": "다음 중 밑줄 친 부분의 쓰임이 어법상 올바른 것은?", "options": ["This is the hospital which I was born.", "Do you know the time where the train leaves?", "I like the way how she speaks.", "The reason for which he resigned is unknown.", "This is the park what we used to play."], "ans": 3, "exp": "for which는 관계부사 why와 같으므로 완전한 문장을 이끌어 올바릅니다. (1: where/in which, 2: when, 3: how 삭제, 5: where)"},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'The city ________ he visited was big. / The city ________ he lived was big.'", "options": ["where - which", "which - where", "where - where", "which - which", "that - which"], "ans": 1, "exp": "visited는 목적어가 필요한 타동사이므로 불완전한 절을 이끄는 which, lived는 완전한 절이므로 부사구 역할을 하는 where가 알맞습니다."}
                    ]
                },
                {
                    "unitNo": 21,
                    "title": "현재분사와 과거분사 (감정동사의 분사)",
                    "part": "준동사",
                    "targetGrade": "중3 완성",
                    "summary": "능동·진행의 현재분사(-ing) vs 수동·완료의 과거분사(p.p.), 감정을 유발하는 -ing vs 감정을 느끼는 p.p.",
                    "formulaCards": [
                        {"name": "분사의 형용사적 수식", "formula": "명사 앞/뒤에서 수식: 수식받는 명사와의 관계가 능동이면 -ing, 수동이면 p.p.", "example": "the sleeping baby / a broken window / the boy running in the park", "trap": "수식받는 명사가 챕터, 규칙 등 사물이면 p.p. 형태가 많음!"},
                        {"name": "감정유발 동사의 분사 공식", "formula": "사물이 주어/수식대상이면 -ing (감정 유발) / 사람이 주어/수식대상이면 p.p. (감정 느낌)", "example": "The movie was boring. / I was bored with the movie.", "trap": "I am interesting in science. (x) -> I am interested in science. (o)"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_21",
                            "sentence": "The news about the accident was deeply [shocked / shocking] to everyone.",
                            "underlined": ["news", "accident", "deeply", "shocked"],
                            "wrongIndex": 3,
                            "correction": "shocking",
                            "explanation": "주어가 사물(The news)이고 충격을 '주는' 능동의 감정 유발이므로 shocking이 올바릅니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'All the students were ________ by the ________ test results.'", "options": ["disappointing - disappointed", "disappointed - disappointing", "disappointed - disappointed", "disappointing - disappointing", "disappoint - disappointed"], "ans": 1, "exp": "학생들은 실망을 느낀 것이므로 disappointed, 시험 결과는 실망을 주는 것이므로 disappointing입니다."},
                        {"q": "다음 중 밑줄 친 분사의 쓰임이 어색한 것은?", "options": ["I heard someone knocking at the door.", "The girl standing by the window is Sue.", "He bought a used car yesterday.", "The fallen leaves covered the street.", "She was exciting about the trip."], "ans": 4, "exp": "사람(She)이 흥분을 느낀 것이므로 excited가 되어야 합니다."},
                        {"q": "빈칸에 들어갈 분사의 형태가 순서대로 알맞은 것은?\n'The dog ________ the ball is cute. / The window ________ by Tom was fixed.'", "options": ["chasing - broken", "chased - broken", "chasing - breaking", "chased - breaking", "chase - break"], "ans": 0, "exp": "공을 쫓는 능동이므로 chasing, 톰에 의해 깨진 수동이므로 broken입니다."},
                        {"q": "다음 중 짝지어진 두 단어의 관계가 어법상 어색한 것은?", "options": ["exciting game", "confused student", "surprising news", "bored movie", "tiring work"], "ans": 3, "exp": "영화는 지루함을 느끼는 것이 아니라 지루하게 만드는 것이므로 boring movie가 되어야 합니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'He sat on the bench, ________ to music.'", "options": ["listen", "listened", "listening", "to listen", "listens"], "ans": 2, "exp": "그가 음악을 '들으면서' 앉아 있는 능동의 동시동작 분사구문이므로 listening이 올바릅니다."}
                    ]
                },
                {
                    "unitNo": 22,
                    "title": "분사구문의 기본과 전환",
                    "part": "준동사",
                    "targetGrade": "중3 완성",
                    "summary": "부사절(접속사+S+V)을 분사구문(V-ing)으로 줄이는 공식과 부정형(not + V-ing)",
                    "formulaCards": [
                        {"name": "분사구문 만들기 3단계", "formula": "1) 접속사 생략 ➔ 2) 주절과 같은 주어 생략 ➔ 3) 동사원형에 -ing 붙이기", "example": "As I felt tired, I went to bed early. ➔ Feeling tired, I went to bed early.", "trap": "부사절의 주어와 주절의 주어가 다르면 분사 앞에 주어를 남겨둬야 함 (독립분사구문)!"},
                        {"name": "분사구문의 부정", "formula": "Not[Never] + V-ing (분사 바로 앞에 not 배치)", "example": "As I didn't know his address, ... ➔ Not knowing his address, ...", "trap": "Knowing not his address (x) -> 반드시 분사 앞에 Not!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_22",
                            "sentence": "[Knowing not / Not knowing] what to say, she just remained silent.",
                            "underlined": ["Knowing not", "what to say", "remained", "silent"],
                            "wrongIndex": 0,
                            "correction": "Not knowing",
                            "explanation": "분사구문의 부정어 Not/Never는 반드시 분사(-ing) 바로 앞에 위치해야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 부사절을 분사구문으로 올바르게 바꾼 것은?\n'Because she felt hungry, she ordered a pizza.'", "options": ["Felt hungry, she ordered a pizza.", "Feeling hungry, she ordered a pizza.", "She feeling hungry, ordered a pizza.", "To feel hungry, she ordered a pizza.", "Having hungry, she ordered a pizza."], "ans": 1, "exp": "접속사 Because 생략, 주어 she 생략, felt를 동사원형+ing인 Feeling으로 바꾼 2번이 올바릅니다."},
                        {"q": "다음 분사구문이 나타내는 의미로 가장 적절한 것은?\n'Turning to the left, you will find the city hall.'", "options": ["시간 (~할 때)", "이유 (~때문에)", "조건 (만약 ~한다면)", "양보 (비록 ~일지라도)", "동시동작 (~하면서)"], "ans": 2, "exp": "'왼쪽으로 돌면 시청을 발견할 것이다'라는 조건(If you turn to the left)을 나타냅니다."},
                        {"q": "다음 중 분사구문의 부정형이 올바른 것은?", "options": ["Not having breakfast, I was very hungry.", "Having not breakfast, I was very hungry.", "Don't having breakfast, I was very hungry.", "Didn't have breakfast, I was very hungry.", "No having breakfast, I was very hungry."], "ans": 0, "exp": "분사구문의 부정은 분사 바로 앞에 Not을 붙여 Not having...으로 씁니다."},
                        {"q": "다음 중 어법상 어색한 분사구문은?", "options": ["Arriving at the station, he called his mom.", "Being sunny, we decided to go hiking.", "Seeing the police officer, the thief ran away.", "Opening the door, she found a gift box.", "Listening to the radio, he washed the dishes."], "ans": 1, "exp": "날씨를 나타내는 비인칭 주어 it과 주절의 주어 we가 다르므로 It being sunny...로 주어 It을 남겨야 합니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'________ by the teacher, the boy stopped crying.'", "options": ["Praising", "Praised", "Praise", "To praise", "Having praised"], "ans": 1, "exp": "선생님에 의해 칭찬을 '받은' 수동의 관계이므로 (Being) Praised가 올바릅니다."}
                    ]
                },
                {
                    "unitNo": 23,
                    "title": "가정법 과거와 I wish / as if 가정법",
                    "part": "가정법",
                    "targetGrade": "중3 완성",
                    "summary": "현재 사실의 반대를 상상하는 가정법 과거(If + 과거동사, S + would + 동원)와 직설법 전환",
                    "formulaCards": [
                        {"name": "가정법 과거 공식", "formula": "If + 주어 + 과거동사(be동사는 were), 주어 + would/could/should/might + 동사원형", "example": "If I had wings, I could fly to you. (지금 날개가 없어서 날아갈 수 없다)", "trap": "가정법 과거는 형태는 과거지만 해석은 '현재'로 함!"},
                        {"name": "I wish / as if 가정법", "formula": "I wish + 주어 + 과거동사 (~라면 좋을 텐데) / as if + 주어 + 과거동사 (마치 ~인 것처럼)", "example": "I wish I were rich. / He talks as if he knew everything.", "trap": "as if 뒤에 과거동사가 오면 주절 시점과 같은 시점의 반대를 나타냄!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_23",
                            "sentence": "If I [was / were] you, I would [take / took] the advice immediately.",
                            "underlined": ["was", "would", "take", "immediately"],
                            "wrongIndex": 0,
                            "correction": "were",
                            "explanation": "가정법 과거에서 be동사는 인칭에 상관없이 were를 쓰는 것이 표준 원칙입니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 동사의 형태로 올바른 것은?\n'If I ________ enough time now, I would travel around Europe.'", "options": ["have", "had", "have had", "will have", "would have"], "ans": 1, "exp": "현재 사실의 반대를 가정하는 가정법 과거이므로 If절의 동사는 과거형 had가 와야 합니다."},
                        {"q": "다음 문장과 직설법 의미가 같은 것은?\n'If she studied hard, she could pass the test.'", "options": ["As she studies hard, she passes the test.", "As she doesn't study hard, she cannot pass the test.", "Because she studied hard, she could pass the test.", "If she doesn't study hard, she can pass the test.", "She studied hard, so she passed the test."], "ans": 1, "exp": "가정법 과거는 현재 사실의 반대이므로 '현재 열심히 공부하지 않아서 합격할 수 없다'는 현재 직설법 2번이 알맞습니다."},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I wish I ________ taller. / He acts as if he ________ my boss.'", "options": ["am - is", "was - was", "were - were", "have been - was", "will be - is"], "ans": 2, "exp": "현재 사실의 유감이나 반대이므로 가정법 과거 were가 각각 들어갑니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["If I were a bird, I would fly.", "If he had money, he could buy the car.", "I wish it were sunny today.", "If she knew the truth, she will tell us.", "He talks as if he were a genius."], "ans": 3, "exp": "가정법 과거 주절에는 조동사의 과거형(would/could)이 와야 하므로 will tell -> would tell로 고쳐야 합니다."},
                        {"q": "다음 빈칸에 알맞은 조동사는?\n'If you helped me, I ________ finish the project on time.'", "options": ["will", "could", "can", "may", "must"], "ans": 1, "exp": "가정법 과거 주절에는 would, could, might 등의 과거 조동사가 와야 하므로 could가 정답입니다."}
                    ]
                },
                {
                    "unitNo": 24,
                    "title": "간접의문문과 일치·화법",
                    "part": "문장의 결합",
                    "targetGrade": "중3 완성",
                    "summary": "의문사 + 주어 + 동사(의·주·동) 평서문 어순과 주절 동사가 think/believe일 때 의문사 전치",
                    "formulaCards": [
                        {"name": "간접의문문의 기본 어순", "formula": "의문사 + 주어 + 동사 (의문사가 없으면 if/whether + 주어 + 동사)", "example": "Do you know who she is? / I wonder if she is coming.", "trap": "Who is she?의 직접의문문 어순을 그대로 넣지 않도록 주의!"},
                        {"name": "생각·추측 동사일 때 의문사 전치", "formula": "think, believe, guess, suppose, imagine이 주절 동사이면 의문사가 문장 맨 앞으로 이동!", "example": "Do you think who he is? (x) ➔ Who do you think he is? (o)", "trap": "Yes/No 대답이 불가능하기 때문에 의문사가 맨 앞으로 나감!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_24",
                            "sentence": "[Do you think what / What do you think] we should do to protect the environment?",
                            "underlined": ["Do you think what", "we should do", "to protect", "environment"],
                            "wrongIndex": 0,
                            "correction": "What do you think",
                            "explanation": "주절 동사가 think이므로 간접의문문의 의문사 What이 문장의 맨 앞으로 나가야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 두 문장을 간접의문문으로 바르게 결합한 것은?\n'Can you tell me?' + 'Where does she live?'", "options": ["Can you tell me where does she live?", "Can you tell me where she lives?", "Can you tell me where she lived?", "Where can you tell me she lives?", "Can you tell me where did she live?"], "ans": 1, "exp": "의문사(where) + 주어(she) + 동사(lives)의 평서문 어순이 올바릅니다."},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["Do you think what he wants?", "What do you think he wants?", "What do you think does he want?", "Do you believe where is she?", "Where do you believe is she?"], "ans": 1, "exp": "think 동사로 인해 의문사 What이 맨 앞으로 가고 뒤는 평서문 어순(he wants)이 된 2번이 완벽합니다."},
                        {"q": "빈칸에 들어갈 말로 알맞은 것은?\n'I don't know ________ he will come to the party or not.'", "options": ["that", "whether", "what", "which", "where"], "ans": 1, "exp": "or not과 호응하며 '~인지 아닌지'를 묻는 명사절 접속사는 whether가 알맞습니다."},
                        {"q": "다음 중 어법상 어색한 문장은?", "options": ["Tell me what happened yesterday.", "I wonder how old she is.", "Do you know when the train arrives?", "Please ask him why was he late.", "I want to know if this seat is taken."], "ans": 3, "exp": "간접의문문은 평서문 어순이므로 why was he late -> why he was late가 되어야 합니다."},
                        {"q": "다음 두 문장을 합칠 때 빈칸에 알맞은 것은?\n'Do you know?' + 'Who is that boy?'\n➔ 'Do you know ________?'", "options": ["who that boy is", "who is that boy", "that boy is who", "whom is that boy", "who that boy was"], "ans": 0, "exp": "의문사(who) + 주어(that boy) + 동사(is) 어순인 who that boy is가 정답입니다."}
                    ]
                }
            ]
        },
        {
            "level": 4,
            "levelCode": "lv4",
            "levelName": "고교 내신 & 공통영어",
            "targetGrade": "고1~고2 과정",
            "badge": "Lv.4 Challenger",
            "color": "amber",
            "themeColor": "#d97706",
            "desc": "주어-동사 수일치, 능수동태 심화, 준동사 완료시제, with 분사구문, 복합관계사, 도치 구문 등 고등 1등급 어법",
            "units": [
                {
                    "unitNo": 25,
                    "title": "주어-동사 수일치 (수식어구 거품 빼기)",
                    "part": "일치(Agreement)",
                    "targetGrade": "고1 필수",
                    "summary": "전치사구, 분사구, 관계사절 등 주어와 동사 사이를 가로막는 수식어구를 발라내고 진짜 주어 찾기",
                    "formulaCards": [
                        {"name": "수식어구 거품 빼기 공식", "formula": "주어 + [전치사구 / 관계사절 / 분사구 / 형용사구] + 진짜 동사", "example": "The quality of these organic apples is (o) / are (x) very high.", "trap": "동사 바로 앞의 복수 명사(apples)에 현혹되지 말고 핵심 명사(The quality)를 볼 것!"},
                        {"name": "부분 표현의 수일치", "formula": "most / some / half / the rest / 분수 / percent + of + 명사 ➔ of 뒤의 명사에 수일치", "example": "Most of the water is polluted. / Most of the students are diligent.", "trap": "부분 표현 자체는 단복수가 없으므로 of 뒤의 명사가 단수면 단수, 복수면 복수!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_25",
                            "sentence": "The discovery of new treatments for these rare diseases [have / has] saved many lives.",
                            "underlined": ["discovery", "new treatments", "rare diseases", "have saved"],
                            "wrongIndex": 3,
                            "correction": "has saved",
                            "explanation": "문장의 핵심 주어는 단수 명사인 The discovery이므로 복수 have saved가 아닌 단수 동사 has saved가 와야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 동사의 형태로 올바른 것은?\n'The number of students who attend the lecture ________ increasing.'", "options": ["is", "are", "were", "have been", "be"], "ans": 0, "exp": "'The number of(~의 수)'는 단수 취급하므로 is가 정답입니다. ('A number of(많은)'는 복수 취급)"},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["Each of the members have a voting right.", "Every boy and girl were excited.", "One of the most famous painters were Van Gogh.", "Two-thirds of the Earth's surface is covered with water.", "A lot of trash were found on the beach."], "ans": 3, "exp": "Two-thirds of 뒤의 the Earth's surface가 셀 수 없는 단수 명사이므로 is가 올바릅니다. (1: has, 2: was, 3: was, 5: was)"},
                        {"q": "다음 문장의 밑줄 친 부분 중 어법상 틀린 것은?\n'The benefits of exercising regularly [outweighs] any potential risk.'", "options": ["benefits", "exercising regularly", "outweighs", "potential", "risk"], "ans": 2, "exp": "주어가 복수 명사 The benefits이므로 3인칭 단수형 outweighs가 아닌 복수 동사 outweigh가 되어야 합니다."},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'A number of books ________ donated. / The number of books ________ small.'", "options": ["was - was", "were - were", "were - was", "was - were", "are - are"], "ans": 2, "exp": "A number of는 '많은(=many)' 뜻으로 복수 취급(were), The number of는 '~의 수'라는 단수 취급(was)입니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'Not only the students but also the teacher ________ delighted at the news.'", "options": ["was", "were", "are", "have been", "be"], "ans": 0, "exp": "'Not only A but also B'는 B(the teacher: 3인칭 단수)에 수를 일치시키므로 was가 정답입니다."}
                    ]
                },
                {
                    "unitNo": 26,
                    "title": "능동태 vs 수동태 심화 (4·5형식 수동태)",
                    "part": "태(Voice)",
                    "targetGrade": "고1 필수",
                    "summary": "간접목적어와 직접목적어를 활용한 4형식 수동태, 지각/사역동사의 수동태 시 to부정사 부활",
                    "formulaCards": [
                        {"name": "사역·지각동사 수동태 시 to부정사 부활 공식", "formula": "능동: S + make/see + O + V원형 ➔ 수동: O + be made/seen + to V원형!", "example": "He made me study. ➔ I was made to study by him.", "trap": "능동태에서는 동사원형이었던 목적격보어가 수동태가 되면 반드시 to부정사로 바뀜!"},
                        {"name": "수여동사 4형식 수동태", "formula": "직접목적어가 주어로 올 때: DO + be p.p. + to/for/of + IO", "example": "A prize was given to her. (for her - x)", "trap": "give류는 to, make/buy류는 수동태에서 직접목적어만 주어로 쓸 수 있음!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_26",
                            "sentence": "He was seen [enter / to enter] the building late at night by several witnesses.",
                            "underlined": ["was seen", "enter", "the building", "by several"],
                            "wrongIndex": 1,
                            "correction": "to enter",
                            "explanation": "지각동사의 수동태(be seen) 뒤에서는 능동태의 동사원형 목적격보어가 to부정사(to enter)로 환원되어야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 능동태 문장을 수동태로 바르게 전환한 것은?\n'They made him confess the crime.'", "options": ["He was made confess the crime.", "He was made to confess the crime.", "He was made confessing the crime.", "He made to confess the crime.", "He was make to confess the crime."], "ans": 1, "exp": "사역동사 make의 수동태는 be made to 동사원형이므로 He was made to confess~가 올바릅니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["She was given a beautiful necklace.", "The baby was named Oliver by his parents.", "He was elected president by the citizens.", "She was heard to sing a song.", "The thief was seen run away from the bank."], "ans": 4, "exp": "지각동사의 수동태 뒤에는 to run 또는 running이 와야 합니다."},
                        {"q": "빈칸에 들어갈 알맞은 형태는?\n'Children must be taught ________ respect for others.'", "options": ["show", "showing", "to show", "shown", "showed"], "ans": 2, "exp": "teach의 수동태 뒤에 목적격보어로 to show가 올바르게 연결됩니다."},
                        {"q": "다음 중 수동태 문장이 어색한 것은?", "options": ["The letter was sent to him.", "A new computer was bought for her.", "A difficult question was asked of him.", "A delicious cake was made to me.", "The secret was revealed to everyone."], "ans": 3, "exp": "make는 3형식 및 수동태 전환 시 전치사 for를 쓰므로 for me가 되어야 합니다."},
                        {"q": "다음 빈칸에 알맞은 전치사는?\n'The truth will be known ________ everybody soon.'", "options": ["to", "by", "for", "with", "at"], "ans": 0, "exp": "'~에게 알려지다'는 be known to를 씁니다."}
                    ]
                },
                {
                    "unitNo": 27,
                    "title": "준동사의 시제와 수동태 (완료부정사 & 완료동명사)",
                    "part": "준동사",
                    "targetGrade": "고1 필수",
                    "summary": "주절 시점보다 앞선 때를 나타내는 to have p.p. / having p.p.와 준동사 수동태",
                    "formulaCards": [
                        {"name": "완료부정사와 완료동명사 공식", "formula": "to have p.p. / having p.p. = 주절의 시제보다 한 시제 앞선 사건", "example": "He seems to have been rich in the past. (= It seems that he was rich.)", "trap": "to be rich는 현재 부자인 것처럼 보이는 것이고, to have been rich는 과거에 부자였던 것!"},
                        {"name": "준동사의 수동태", "formula": "to be p.p. / being p.p. (완료수동: to have been p.p. / having been p.p.)", "example": "I don't like being treated like a child.", "trap": "행위를 당하는 대상이면 준동사도 반드시 수동형을 써야 함!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_27",
                            "sentence": "The politician denied [having accepted / to accept] the illegal funds last year.",
                            "underlined": ["politician", "denied", "having accepted", "last year"],
                            "wrongIndex": 2,
                            "correction": "having accepted (올바름: 부인한 것(과거)보다 자금을 받은 것(대과거)이 앞섬)",
                            "explanation": "deny는 동명사를 취하며 주절 시제보다 앞선 과거 행위이므로 완료동명사 having accepted가 정확합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장과 의미가 같은 것은?\n'She seems to have lost her wallet.'", "options": ["It seems that she loses her wallet.", "It seems that she lost her wallet.", "It seemed that she lost her wallet.", "It seemed that she has lost her wallet.", "It seems that she will lose her wallet."], "ans": 1, "exp": "주절의 시제가 현재(seems)이고 완료부정사(to have lost)가 쓰였으므로 종속절은 과거 시제(lost)가 됩니다."},
                        {"q": "다음 빈칸에 들어갈 형태로 가장 적절한 것은?\n'He was ashamed of ________ foolish mistakes in public.'", "options": ["make", "making", "having made", "to make", "to have made"], "ans": 2, "exp": "전치사 of 뒤이므로 동명사가 와야 하며, 부끄러워했던 시점(was)보다 실수를 저지른 것이 앞서므로 완료동명사 having made가 알맞습니다."},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["No one likes being laughing at.", "No one likes being laughed at.", "No one likes to laugh at.", "No one likes laughing at.", "No one likes been laughed at."], "ans": 1, "exp": "'놀림을 받는 것'이므로 수동형 동명사 being laughed at이 올바릅니다."},
                        {"q": "다음 빈칸에 알맞은 형태는?\n'The ancient castle is said ________ built in the 14th century.'", "options": ["to be", "to have been", "being", "having been", "to had been"], "ans": 1, "exp": "현재 전해지는 것(is said)보다 14세기에 지어진 것(과거)이 앞서고 수동이므로 완료수동부정사 to have been built가 정답입니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'I appreciate ________ invited to your wedding.'", "options": ["being", "having", "to be", "to have", "be"], "ans": 0, "exp": "결혼식에 초대 '받은' 수동이므로 being invited가 알맞습니다."}
                    ]
                },
                {
                    "unitNo": 28,
                    "title": "with 분사구문과 독립분사구문",
                    "part": "준동사",
                    "targetGrade": "고1 필수",
                    "summary": "with + 명사 + 분사(동시동작/부대상황: ~한 채로)와 의미상 주어가 다른 독립분사구문",
                    "formulaCards": [
                        {"name": "with + 명사 + 분사(-ing / p.p.)", "formula": "명사와 분사의 관계가 능동이면 -ing, 수동이면 p.p.", "example": "with his arms folded (팔짱을 낀 채: 수동) / with tears running down (눈물을 흘리며: 능동)", "trap": "다리를 꼰 채(with his legs crossed), 입을 꽉 다문 채(with his mouth closed)는 모두 p.p.!"},
                        {"name": "독립분사구문의 관용표현", "formula": "frankly speaking(솔직히 말해서), strictly speaking(엄격히 말해), judging from(~로 판단하건대)", "example": "Judging from his accent, he must be from Australia.", "trap": "인칭주어와 무관하게 독립적으로 쓰이는 비인칭 독립분사구문!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_28",
                            "sentence": "She was listening to the teacher with her legs [crossing / crossed] and arms [folding / folded].",
                            "underlined": ["was listening", "with her legs", "crossed", "folded"],
                            "wrongIndex": 2,
                            "correction": "crossed (올바름: 다리가 꼬여진 상태이므로 p.p.)",
                            "explanation": "다리나 팔은 사람에 의해 포개어지는 신체 부위이므로 수동의 p.p. 형태(crossed, folded)가 쓰여야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 형태로 알맞은 것은?\n'He sat on the sofa with his eyes ________.'", "options": ["close", "closed", "closing", "closely", "to close"], "ans": 1, "exp": "눈은 감겨지는 대상이므로 수동의 과거분사 closed가 정답입니다."},
                        {"q": "다음 중 밑줄 친 분사의 쓰임이 어색한 것은?", "options": ["She fell asleep with the radio turned on.", "He stood there with his arms folded.", "She was speaking with her heart beating fast.", "He walked along the street with his hands in his pockets.", "She was reading a book with the candle blowing out."], "ans": 4, "exp": "촛불이 바람에 꺼진 것은 수동이므로 with the candle blown out이 되어야 합니다."},
                        {"q": "다음 빈칸에 들어갈 알맞은 말은?\n'________ from his appearance, he seems to be an athlete.'", "options": ["Judge", "Judged", "Judging", "To judge", "Judgment"], "ans": 2, "exp": "'~로 판단하건대'라는 관용적 독립분사구문은 Judging from을 씁니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'Weather ________, we will go on a picnic this Saturday.'", "options": ["permit", "permitting", "permitted", "to permit", "permission"], "ans": 1, "exp": "'날씨가 허락한다면'이라는 관용적 독립분사구문은 Weather permitting입니다."},
                        {"q": "밑줄 친 부분의 뜻으로 알맞은 것은?\n'[Strictly speaking], tomatoes are fruits, not vegetables.'", "options": ["솔직히 말해서", "엄격히 말해서", "일반적으로 말해서", "말할 필요도 없이", "간단히 말해서"], "ans": 1, "exp": "Strictly speaking은 '엄격히 말해서'라는 뜻의 독립분사구문입니다."}
                    ]
                },
                {
                    "unitNo": 29,
                    "title": "명사절 접속사 (that vs what vs if/whether)",
                    "part": "절과 접속사",
                    "targetGrade": "고1 필수",
                    "summary": "확실한 사실(that) vs 불확실한 의문(if/whether) vs 불완전한 선행사포함(what)",
                    "formulaCards": [
                        {"name": "that vs what vs whether 명사절 3대 공식", "formula": "that: 완전한 절 + 확실한 사실 / what: 불완전한 절 + 선행사 없음 / whether: 완전한 절 + 불확실성(~인지 아닌지)", "example": "I know that he is honest. / I wonder whether he is honest. / This is what I want.", "trap": "doubt, wonder, not sure 뒤에는 that이 아니라 if/whether를 씀!"},
                        {"name": "if절의 제약", "formula": "if는 오직 타동사의 목적어절로만 쓰이며, 주어나 전치사의 목적어, or not 직후에는 whether만 가능", "example": "Whether he comes or not is important. (If he comes or not - x)", "trap": "전치사 뒤: about whether (o) / about if (x)"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_29",
                            "sentence": "I am not sure [that / whether] the flight will be delayed due to the snow.",
                            "underlined": ["am not sure", "whether", "will be delayed", "due to"],
                            "wrongIndex": 0,
                            "correction": "whether (올바름)",
                            "explanation": "not sure는 불확실성을 나타내므로 확실한 사실을 이끄는 that 대신 whether가 올바릅니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'The problem is ________ we don't have enough budget.'", "options": ["what", "that", "whether", "which", "if"], "ans": 1, "exp": "뒤에 완벽한 3형식 문장이 이어지고 보어 역할을 하는 확실한 사실이므로 that이 알맞습니다."},
                        {"q": "다음 중 if를 쓸 수 없고 'whether'만 써야 하는 자리는?", "options": ["I wonder ________ she likes flowers.", "He asked me ________ I had a car.", "It depends on ________ you will accept the offer.", "She doesn't know ________ he will come.", "Can you tell me ________ this is true?"], "ans": 2, "exp": "전치사(on)의 목적어 자리에는 if를 쓸 수 없고 whether만 올 수 있습니다."},
                        {"q": "다음 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I believe ________ he will succeed. / I don't know ________ he will succeed.'", "options": ["that - whether", "whether - that", "what - that", "that - what", "which - that"], "ans": 0, "exp": "확신(believe)에는 that, 불확실(don't know)에는 whether가 적절합니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["Whether it rains or not doesn't matter.", "If he will come is uncertain.", "I have no doubt that he is innocent.", "She asked if I was ready.", "The question is whether we can trust him."], "ans": 1, "exp": "문장의 주어 자리에는 if절을 쓸 수 없으며 반드시 Whether절을 써야 합니다."},
                        {"q": "빈칸에 들어갈 말로 알맞은 것은?\n'Scientists discovered ________ causes the rare disease.'", "options": ["that", "what", "whether", "if", "where"], "ans": 1, "exp": "causes의 주어가 빠진 불완전한 절이므로 관계대명사이자 의문대명사인 what이 적절합니다."}
                    ]
                },
                {
                    "unitNo": 30,
                    "title": "복합관계사 (whatever, whenever, wherever, however)",
                    "part": "관계사",
                    "targetGrade": "고1 필수",
                    "summary": "복합관계대명사의 명사절/양보부사절 쓰임과 복합관계부사의 시간/장소/양보(however + 형/부) 공식",
                    "formulaCards": [
                        {"name": "however + 형용사/부사 + 주어 + 동사", "formula": "however = no matter how (아무리 ~할지라도)", "example": "However hard you try, you cannot change the past.", "trap": "however 뒤에 형용사나 부사가 바로 붙어야 함! (However you try hard - x)"},
                        {"name": "whatever / whoever", "formula": "명사절(anything that / anyone who) vs 양보부사절(no matter what / no matter who)", "example": "Whatever you do matters. (명사절) / Whatever happens, stay calm. (양보절)", "trap": "문장 내에서 주어/목적어로 쓰이면 명사절, 콤마로 분리되면 양보부사절!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_30",
                            "sentence": "[However / How] difficult the problem may seem, there is always a solution.",
                            "underlined": ["However", "difficult", "may seem", "there is"],
                            "wrongIndex": 0,
                            "correction": "However (올바름)",
                            "explanation": "'아무리 어려울지라도'라는 양보의 의미로 형용사 difficult를 수식하므로 However가 올바릅니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것은?\n'________ tired she was, she continued working on her paper.'", "options": ["Whatever", "Whenever", "However", "Wherever", "Whichever"], "ans": 2, "exp": "형용사 tired를 수식하며 '아무리 피곤할지라도'라는 양보를 나타내므로 However(= No matter how)가 정답입니다."},
                        {"q": "다음 문장과 의미가 같은 것은?\n'You may invite whoever you like to the party.'", "options": ["anyone who you like", "no matter who you like", "everyone who likes you", "someone whom you like", "nobody who you like"], "ans": 0, "exp": "타동사 invite의 목적어로 쓰인 명사절 whoever는 anyone who(m)과 같습니다."},
                        {"q": "다음 빈칸에 알맞은 것은?\n'You can sit ________ you want in this empty classroom.'", "options": ["wherever", "whatever", "however", "whichever", "whoever"], "ans": 0, "exp": "'네가 원하는 어느 곳이든(= at any place where)'의 의미이므로 wherever가 알맞습니다."},
                        {"q": "다음 중 밑줄 친 부분의 쓰임이 어색한 것은?", "options": ["Whatever happens, I will support you.", "However rich he is, he is not happy.", "Whenever I see her, she is smiling.", "However he ran fast, he missed the bus.", "Whoever breaks the rule must be punished."], "ans": 3, "exp": "however 뒤에는 형용사나 부사가 바로 붙어야 하므로 However fast he ran이 되어야 합니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'________ decision you make, I will respect it.'", "options": ["Whatever", "Whichever", "However", "Whenever", "Whoever"], "ans": 0, "exp": "명사 decision을 수식하는 복합관계형용사 Whatever(또는 Whichever)가 알맞습니다."}
                    ]
                },
                {
                    "unitNo": 31,
                    "title": "가정법 과거완료와 혼합가정법",
                    "part": "가정법",
                    "targetGrade": "고1 필수",
                    "summary": "과거 사실의 반대(If + had p.p., S + would have p.p.)와 과거의 원인이 현재에 영향을 주는 혼합가정법",
                    "formulaCards": [
                        {"name": "가정법 과거완료 공식", "formula": "If + 주어 + had p.p., 주어 + would/could/should/might + have p.p.", "example": "If I had known your number, I would have called you. (번호를 몰라서 전화 못 했다)", "trap": "과거 사실을 반대로 가정하므로 해석은 '과거'로 함!"},
                        {"name": "혼합가정법 (수능 단골 출제)", "formula": "If + had p.p. (과거에 ~했더라면), 주어 + would + 동사원형 + now (지금 ~할 텐데)", "example": "If he had taken my advice then, he would be successful now.", "trap": "주절 끝에 now, today 같은 '현재 시점 부사'가 힌트로 주어짐!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_31",
                            "sentence": "If you had studied harder in high school, you would [have been / be] a university student now.",
                            "underlined": ["had studied", "would", "be", "now"],
                            "wrongIndex": 2,
                            "correction": "be (혼합가정법: 과거 원인 ➔ 현재 결과 now)",
                            "explanation": "주절 끝에 now가 있으므로 과거완료(would have been)가 아닌 현재의 상태를 나타내는 would be가 올바른 혼합가정법입니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 알맞은 형태는?\n'If we ________ an umbrella yesterday, we wouldn't have gotten wet.'", "options": ["bring", "brought", "had brought", "have brought", "would bring"], "ans": 2, "exp": "주절이 wouldn't have gotten(가정법 과거완료)이고 어제(yesterday)의 일이므로 had brought가 정답입니다."},
                        {"q": "다음 문장과 직설법 의미가 같은 것은?\n'If I had had breakfast this morning, I would not be hungry now.'", "options": ["As I had breakfast, I am not hungry now.", "As I didn't have breakfast, I am hungry now.", "Because I didn't have breakfast, I was hungry.", "I had breakfast, so I am hungry now.", "Unless I had breakfast, I would be hungry."], "ans": 1, "exp": "혼합가정법이므로 '오늘 아침을 먹지 않아서(과거), 지금 배가 고프다(현재)'라는 2번이 알맞습니다."},
                        {"q": "다음 중 어법상 올바른 가정법 문장은?", "options": ["If he had asked me, I would help him.", "If she took the train, she would have arrived earlier.", "If I had known the answer, I would have told you.", "If you were there, you could see the concert.", "If it hadn't rained, we would go hiking yesterday."], "ans": 2, "exp": "If절의 had known과 주절의 would have told가 완벽하게 일치하는 가정법 과거완료입니다."},
                        {"q": "다음 문장에서 If가 생략되었을 때의 올바른 어순은?\n'If I had realized the danger, I would have run away.'", "options": ["Had I realized the danger", "Did I realize the danger", "Have I realized the danger", "Were I realized the danger", "I had realized the danger"], "ans": 0, "exp": "가정법에서 If가 생략되면 조동사 had가 주어 앞으로 도치되어 'Had I realized...'가 됩니다."},
                        {"q": "빈칸에 들어갈 말로 알맞은 것은?\n'Without your help, I ________ failed in the exam.'", "options": ["will have", "would have", "would", "had", "have"], "ans": 1, "exp": "'당신의 도움이 없었더라면 실패했을 것이다'라는 과거 사실 반대이므로 would have failed가 적절합니다."}
                    ]
                },
                {
                    "unitNo": 32,
                    "title": "도치 구문 (부정어 도치 & 장소부사구 도치)",
                    "part": "특수 구문",
                    "targetGrade": "고1 필수",
                    "summary": "부정어(Never, Seldom, Little, Hardly) 강조 시 의문문 어순 도치, 장소부사구 강조 시 V+S 도치",
                    "formulaCards": [
                        {"name": "부정어 도치 공식 (수능 1순위)", "formula": "부정어(Never, Hardly, Rarely, Seldom, Little, Not only) + 조동사/do/be + 주어 + 동사원형", "example": "Little did I dream that I would win. / Never have I seen such a sight.", "trap": "일반동사일 때는 반드시 do/does/did를 주어 앞으로 끄집어내야 함!"},
                        {"name": "장소·방향 부사구 도치", "formula": "장소부사구 + 1형식 동사 + 명사 주어", "example": "Under the tree sat an old man. (대명사 주어일 때는 도치 안 됨: Under the tree he sat.)", "trap": "주어가 대명사(he, they)이면 어순이 바뀌지 않음!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_32",
                            "sentence": "Rarely [she complains / does she complain] about her difficult working conditions.",
                            "underlined": ["Rarely", "does she complain", "about her", "conditions"],
                            "wrongIndex": 1,
                            "correction": "does she complain (올바름: 부정어 도치)",
                            "explanation": "부정부사 Rarely가 문두에 위치하므로 '조동사(does) + 주어(she) + 동사원형(complain)'의 도치 어순이어야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장의 빈칸에 들어갈 형태로 올바른 것은?\n'Never ________ such a breathtaking sunset in my life.'", "options": ["I have seen", "have I seen", "did I saw", "I saw", "saw I"], "ans": 1, "exp": "부정어 Never가 문두에 왔으므로 완료 조동사 have가 주어 앞으로 도치된 have I seen이 정답입니다."},
                        {"q": "다음 중 어법상 어색한 문장은?", "options": ["Little did she know about the secret.", "Hardly had I arrived when the phone rang.", "Under the bridge a river flows.", "Seldom he visits his hometown.", "Only then did I understand his intention."], "ans": 3, "exp": "부정부사 Seldom이 문두에 왔으므로 일반동사 visits의 조동사 does가 도치되어 Seldom does he visit~이 되어야 합니다."},
                        {"q": "다음 문장을 도치 구문으로 바르게 고친 것은?\n'I little dreamed of meeting her here.'", "options": ["Little dreamed I of meeting her here.", "Little I dreamed of meeting her here.", "Little did I dream of meeting her here.", "Little was I dreaming of meeting her here.", "Little do I dream of meeting her here."], "ans": 2, "exp": "Little + did + 주어(I) + 동사원형(dream)의 도치 어순이 정확합니다."},
                        {"q": "다음 중 주어가 대명사일 때 도치가 일어나지 않는 규칙에 부합하는 것은?", "options": ["Here comes the bus.", "Here comes it.", "Here it comes.", "There goes the train.", "Down fell the leaves."], "ans": 2, "exp": "주어가 대명사(it)일 때는 '부사 + 주어 + 동사' 어순을 유지하므로 Here it comes가 맞습니다. (Here comes it은 틀림)"},
                        {"q": "빈칸에 들어갈 알맞은 형태는?\n'Not only ________ the guitar, but he also composes songs.'", "options": ["he plays", "does he play", "is he playing", "he is play", "did he played"], "ans": 1, "exp": "Not only 부정어가 문두에 왔으므로 does he play로 도치되어야 합니다."}
                    ]
                }
            ]
        },
        {
            "level": 5,
            "levelCode": "lv5",
            "levelName": "수능 1등급 킬러 어법",
            "targetGrade": "고2~고3·수능 파이널",
            "badge": "Lv.5 Master",
            "color": "rose",
            "themeColor": "#e11d48",
            "desc": "수능 29번 어법 10대 빈출 공식: 본동사 vs 준동사, 대동사 do/be, 완전도 판별, 병렬 구조, 형용사/부사 등 킬러 문항 정복",
            "units": [
                {
                    "unitNo": 33,
                    "title": "동사 vs 준동사 판별 (문장의 본동사 찾기)",
                    "part": "수능 킬러",
                    "targetGrade": "고2~고3 수능",
                    "summary": "수능 어법 출제율 1위: 한 문장에는 반드시 하나의 본동사가 존재해야 하며, 접속사 수 = 동사 수 - 1",
                    "formulaCards": [
                        {"name": "본동사 찾기 3단계 검증법", "formula": "1) 문장 전체의 접속사/관계사 개수 세기 ➔ 2) 수식어구(괄호 묶기) ➔ 3) 진짜 동사 자리인지 준동사 자리인지 판별", "example": "The people [living in this area] are (o) / being (x) exposed to noise.", "trap": "문장에 본동사가 없는데 -ing나 to V를 밑줄 쳐놓고 낚는 것이 평가원 1위 패턴!"},
                        {"name": "동사 수 = 접속사 수 + 1", "formula": "접속사가 없으면 문장에 본동사는 오직 1개만 허용!", "example": "He walked into the room and sat down. (접속사 1개 -> 동사 2개)", "trap": "분사(-ing, p.p.)는 동사가 아니라 형용사이므로 본동사 역할을 할 수 없음!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_33",
                            "sentence": "The ability to accurately recognize and respond to the emotions of others [being / is] essential for leadership.",
                            "underlined": ["accurately recognize", "respond to", "others", "being"],
                            "wrongIndex": 3,
                            "correction": "is",
                            "explanation": "문장의 주어는 The ability이고, to recognize and respond는 수식어구입니다. 문장 전체에 본동사가 없으므로 being을 본동사 is로 고쳐야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 밑줄 친 부분이 어법상 올바른 것은?", "options": ["The man standing by the gate looking tired.", "Scientists studying deep sea creatures discovering new species.", "The evidence presented during the trial was convincing.", "Students participating in the competition to win awards.", "The factory producing electronic parts closed last year being repaired."], "ans": 2, "exp": "3번은 주어 The evidence 뒤에 presented~ 수식어가 오고 본동사 was가 올바르게 위치합니다. (1: looking -> looked/was, 2: discovering -> discovered, 4: to win -> won, 5: being -> was)"},
                        {"q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'The traditional methods used by indigenous people ________ sustainable solutions today.'", "options": ["providing", "provide", "to provide", "being provided", "provided by"], "ans": 1, "exp": "주어가 The traditional methods이고 used by~는 수식 분사이므로 문장의 본동사 자리(복수)인 provide가 와야 합니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'Plants [absorbing] sunlight through their leaves [convert] it into chemical energy, [storing] it in the form of sugars, which [fuels] their growth.'", "options": ["absorbing", "convert", "storing", "fuels", "sugars"], "ans": 3, "exp": "선행사가 복수명사 sugars이므로 관계사절의 동사는 복수형 fuel이 되어야 합니다."},
                        {"q": "빈칸에 들어갈 수 없는 것은?\n'The researcher found that the participants ________ more focused during morning hours.'", "options": ["were", "became", "appeared", "felt", "being"], "ans": 4, "exp": "that 명사절 안의 주어 the participants 뒤에는 본동사가 와야 하므로 준동사 being은 들어갈 수 없습니다."},
                        {"q": "다음 문장의 어법 오류를 바르게 고친 것은?\n'A system developed without user feedback failing to meet market demands.'", "options": ["developed -> developing", "without -> with", "failing -> fails", "meet -> meeting", "demands -> demanded"], "ans": 2, "exp": "문장 전체에 본동사가 없으므로 failing을 3인칭 단수 본동사 fails로 고쳐야 합니다."}
                    ]
                },
                {
                    "unitNo": 34,
                    "title": "수능 빈출: 대동사 (do vs be) 판정",
                    "part": "수능 킬러",
                    "targetGrade": "고2~고3 수능",
                    "summary": "앞서 언급된 동사구를 대신 받는 do/does/did vs be동사(am/is/are/was/were)의 엄격한 판별",
                    "formulaCards": [
                        {"name": "대동사 판별 2단계 원칙", "formula": "1) 대신 받는 앞선 동사가 일반동사이면 ➔ do / does / did 사용\n2) 앞선 동사가 be동사/조동사이면 ➔ be / 조동사 그대로 사용", "example": "He runs faster than I do. (runs 대신) / She is happier than she was. (was happy 대신)", "trap": "as / than 뒤의 도치 구문에서 do vs be 밑줄 문제는 평가원 단골 킬러!"},
                        {"name": "So + 동사 + 주어 / Neither + 동사 + 주어", "formula": "~도 또한 그렇다 / ~도 또한 그렇지 않다 (앞 문장의 동사 종류에 따라 do or be 결정)", "example": "I like jazz. - So do I. / I am tired. - So am I.", "trap": "Neither do I vs Neither am I!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_34",
                            "sentence": "Modern humans spend much less energy gathering food than our ancestors [were / did].",
                            "underlined": ["spend", "gathering", "than", "were"],
                            "wrongIndex": 3,
                            "correction": "did",
                            "explanation": "대신 받는 앞선 동사가 일반동사 spend이므로 과거 시점의 대동사 did(= spent)를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 대동사로 가장 적절한 것은?\n'She understands quantum physics much better than her classmates ________.'", "options": ["are", "do", "did", "have", "were"], "ans": 1, "exp": "일반동사 understands를 대신 받고 주어가 복수(her classmates)이므로 do가 정답입니다."},
                        {"q": "다음 대화의 빈칸에 알맞은 것은?\nA: 'I was really impressed by the performance.'\nB: 'So ________ I.'", "options": ["did", "was", "am", "do", "have"], "ans": 1, "exp": "앞 문장의 동사가 be동사(was)이므로 be동사를 받아 So was I가 알맞습니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 어색한 것은?", "options": ["He doesn't eat meat, and neither do I.", "She works harder than anyone else does.", "The climate here is much milder than it was in my hometown.", "They reacted more quickly than we were.", "Some students learned faster than others did."], "ans": 3, "exp": "일반동사 reacted를 대신 받으므로 were가 아닌 did로 고쳐야 합니다."},
                        {"q": "빈칸에 들어갈 말로 알맞은 것은?\n'Electric cars produce far fewer emissions than traditional gasoline vehicles ________.'", "options": ["do", "are", "have", "will", "did"], "ans": 0, "exp": "일반동사 produce를 대신 받으며 현재 복수이므로 do가 알맞습니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 알맞은 말은?\n'If you believe in your dreams as passionately as they ________, you will succeed.'", "options": ["are", "do", "did", "were", "have"], "ans": 1, "exp": "일반동사 believe in을 대신 받으므로 do가 정답입니다."}
                    ]
                },
                {
                    "unitNo": 35,
                    "title": "관계사 vs 접속사 뒷문장 완전도 킬러",
                    "part": "수능 킬러",
                    "targetGrade": "고2~고3 수능",
                    "summary": "that, which, what, where, whether의 뒷문장 완전/불완전 여부와 선행사 유무에 따른 수능 공식",
                    "formulaCards": [
                        {"name": "수능 어법 만점 완전도 매트릭스", "formula": "1) 선행사 O + 불완전 ➔ 관계대명사 (which, who, that)\n2) 선행사 O + 완전 ➔ 관계부사 (where, when, why) or 동격 that\n3) 선행사 X + 불완전 ➔ 관계대명사 what\n4) 선행사 X + 완전 ➔ 명사절 that or whether", "example": "The rumor that he resigned is true. (동격: 완전) / The rumor that I heard is true. (관계사: 불완전)", "trap": "동격의 that 뒤는 완전한 문장이 오므로 which로 절대 바꿀 수 없음!"},
                        {"name": "자동사 + 전치사 주의", "formula": "listen to, rely on, wait for 등 전치사가 문장 끝에 남아있으면 불완전한 문장!", "example": "the music which I listened to (불완전) / the music to which I listened (완전)", "trap": "전치사가 뒤에 남아있으면 관계대명사, 전치사가 관계사 앞으로 이동하면 완전한 구조!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_35",
                            "sentence": "The environment [which / in which] children grow up plays a crucial role in their development.",
                            "underlined": ["environment", "which", "grow up", "crucial role"],
                            "wrongIndex": 1,
                            "correction": "in which (또는 where)",
                            "explanation": "children grow up은 주어와 완전자가동사로 이루어진 '완전한 절'이므로 관계대명사 which가 아닌 in which 또는 관계부사 where가 와야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'The hypothesis ________ dinosaurs went extinct due to an asteroid impact is widely accepted.'", "options": ["which", "that", "what", "where", "whom"], "ans": 1, "exp": "선행사(The hypothesis) 뒤에 완전한 절(공룡이 운석 충돌로 멸종했다)이 이어지므로 동격의 접속사 that이 알맞습니다."},
                        {"q": "다음 중 밑줄 친 'which'의 쓰임이 어법상 틀린 것은?", "options": ["The hotel in which we stayed was luxurious.", "This is the question which nobody could solve.", "The box which he put his secret letters in was locked.", "The village which my grandfather was born is peaceful.", "The company for which she works manufactures medical equipment."], "ans": 3, "exp": "my grandfather was born은 완전한 수동태 절이므로 which가 아니라 in which 또는 where가 되어야 합니다."},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I know the girl ________ solved the puzzle. / I know ________ solved the puzzle.'", "options": ["who - what", "who - who", "that - that", "which - who", "whose - what"], "ans": 1, "exp": "첫 번째는 선행사 the girl을 수식하는 관계대명사 who, 두 번째는 의문대명사('누가 풀었는지') who가 알맞습니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 수 없는 것은?\n'The debate focused on ________ technology affects human relationships.'", "options": ["how", "whether", "that", "why", "when"], "ans": 2, "exp": "전치사 on의 목적어 자리이므로 명사절 접속사 that은 올 수 없습니다. (on whether/how/why 가능)"},
                        {"q": "다음 중 뒷문장이 '불완전'해야 하는 접속사/관계사는?", "options": ["동격의 that", "관계부사 where", "관계대명사 what", "명사절 접속사 whether", "이유의 접속사 because"], "ans": 2, "exp": "관계대명사 what은 선행사를 포함하며 주어나 목적어가 빠진 불완전한 문장을 이끕니다."}
                    ]
                },
                {
                    "unitNo": 36,
                    "title": "병렬 구조 (등위접속사와 상관접속사 병치)",
                    "part": "수능 킬러",
                    "targetGrade": "고2~고3 수능",
                    "summary": "and, but, or 및 not only A but also B, either A or B에서 A와 B의 문법적 형태 일치",
                    "formulaCards": [
                        {"name": "등위접속사의 병렬 구조 공식", "formula": "A and/but/or B ➔ A와 B는 문법적 품사와 형태(to V - to V, -ing - -ing, 절 - 절)가 반드시 같아야 함!", "example": "He likes swimming, hiking, and to run. (x) ➔ ... and running. (o)", "trap": "수능에서는 긴 문장 끝의 and 뒤에 밑줄을 그어 앞선 병렬 대상을 찾게 함!"},
                        {"name": "상관접속사의 병렬", "formula": "both A and B / not A but B / not only A but also B / either A or B / neither A nor B", "example": "Success requires not only working hard but also working smart.", "trap": "A가 전치사구면 B도 전치사구, A가 절이면 B도 절!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_36",
                            "sentence": "The program aims at improving students' reading skills, building vocabulary, and [to develop / developing] critical thinking.",
                            "underlined": ["aims at", "improving", "building", "to develop"],
                            "wrongIndex": 3,
                            "correction": "developing",
                            "explanation": "전치사 at 뒤의 동명사 improving, building과 등위접속사 and로 연결되므로 developing으로 병렬을 맞춰야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장의 빈칸에 들어갈 형태로 가장 적절한 것은?\n'She decided to quit her job, sell her apartment, and ________ around the world.'", "options": ["travel", "traveling", "traveled", "to traveling", "travels"], "ans": 0, "exp": "to부정사의 동사원형 quit, sell과 병렬을 이루므로 travel(to는 생략 가능)이 올바릅니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 어색한 것은?\n'The goal of education is not only [to provide] knowledge but also [inspiring] students to think critically.'", "options": ["is", "to provide", "but also", "inspiring", "to think"], "ans": 3, "exp": "not only to provide와 병렬을 이루어야 하므로 inspiring을 to inspire로 고쳐야 합니다."},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["He is good at both playing soccer and to swim.", "She wants either to study law or studying medicine.", "You can succeed by working diligently and plan carefully.", "The manager praised her for her dedication, creativity, and honesty.", "They were neither willing nor ability to help."], "ans": 3, "exp": "dedication(헌신), creativity(창의성), honesty(정직) 모두 명사로 깔끔하게 병렬을 이루고 있습니다."},
                        {"q": "빈칸에 들어갈 형태로 알맞은 것은?\n'Reading widely not only expands your worldview but also ________ your empathy.'", "options": ["enhance", "enhances", "enhancing", "to enhance", "enhanced"], "ans": 1, "exp": "주어가 동명사구 Reading widely(3인칭 단수)이므로 expands와 병렬을 이루는 단수 동사 enhances가 알맞습니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'The author spent his life observing nature, recording data, and ________ the environment.'", "options": ["protect", "protected", "protecting", "to protect", "protection"], "ans": 2, "exp": "spent의 목적어 뒤에 오는 동명사 observing, recording과 병렬을 이루는 protecting이 정답입니다."}
                    ]
                },
                {
                    "unitNo": 37,
                    "title": "형용사 vs 부사 (보어 자리와 수식 대상)",
                    "part": "수능 킬러",
                    "targetGrade": "고2~고3 수능",
                    "summary": "불완전자동사의 주격보어, 5형식 목적격보어 자리의 형용사 vs 수식어구 부사의 판정",
                    "formulaCards": [
                        {"name": "5형식 목적격보어 형용사 킬러 (수능 단골)", "formula": "make / find / keep / leave / consider + 목적어 + 형용사 (부사 절대 불가!)", "example": "The exercise made his muscles strong (o) / strongly (x).", "trap": "우리말로는 '강하게'로 해석되어 strongly를 고르고 싶지만 목적격보어 자리이므로 형용사 strong!"},
                        {"name": "형용사와 부사의 수식 대상", "formula": "형용사 ➔ 명사 수식 / 부사 ➔ 동사, 형용사, 다른 부사, 문장 전체 수식", "example": "a remarkably successful project (부사가 형용사 successful 수식)", "trap": "명사 바로 앞이어도 형용사를 수식할 때는 부사를 써야 함!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_37",
                            "sentence": "The new security system keeps our personal data [safely / safe] from cyberattacks.",
                            "underlined": ["security system", "keeps", "personal data", "safely"],
                            "wrongIndex": 3,
                            "correction": "safe",
                            "explanation": "동사 keep은 5형식에서 목적어(personal data)의 상태를 설명하는 목적격보어로 형용사 safe를 취해야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'Regular meditation can help keep your mind ________ and calm.'", "options": ["clear", "clearly", "clearness", "clarity", "clearing"], "ans": 0, "exp": "5형식 keep의 목적격보어 자리이며 and calm과 병렬을 이루므로 형용사 clear가 정답입니다."},
                        {"q": "다음 중 밑줄 친 부분의 어법이 틀린 것은?", "options": ["The soup tasted surprisingly good.", "She spoke English remarkably well.", "The medicine made the patient feel easily.", "He found the instructions easy to follow.", "The room remained silent throughout the night."], "ans": 2, "exp": "feel은 2형식 감각동사이므로 주격보어로 형용사 easy 또는 comfortable이 와야 하며 부사 easily는 틀립니다."},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'He is an ________ talented artist who works ________.'", "options": ["extreme - diligent", "extremely - diligently", "extreme - diligently", "extremely - diligent", "extremity - diligence"], "ans": 1, "exp": "형용사 talented를 수식하는 부사 extremely, 동사 works를 수식하는 부사 diligently가 알맞습니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 수 없는 것은?\n'We consider his proposal ________.'", "options": ["reasonable", "practical", "acceptable", "reasonably", "innovative"], "ans": 3, "exp": "consider의 목적격보어 자리이므로 부사 reasonably는 들어갈 수 없습니다."},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["Drive safe on the icy road.", "The flower smells sweetly in the morning.", "I find it impossible to finish this in one day.", "She looks like beautifully today.", "He acted cold toward his old friend."], "ans": 2, "exp": "'find + it(가목적어) + 형용사 보어(impossible) + to부정사(진목적어)' 구문이 완벽합니다. (1: safely, 2: sweet, 4: like 삭제, 5: coldly)"}
                    ]
                },
                {
                    "unitNo": 38,
                    "title": "대명사의 일치 (that vs those, 재귀대명사)",
                    "part": "수능 킬러",
                    "targetGrade": "고2~고3 수능",
                    "summary": "비교 대상의 대명사 수일치 that/those, 주어와 목적어가 같을 때의 재귀대명사(-self)",
                    "formulaCards": [
                        {"name": "비교 구문에서의 that of / those of", "formula": "단수 명사 대신 ➔ that of / 복수 명사 대신 ➔ those of", "example": "The ears of an elephant are larger than those of an ape.", "trap": "앞선 명사가 The ears(복수)이므로 that of an ape (x) -> those of an ape (o)!"},
                        {"name": "재귀대명사의 재귀용법 vs 강조용법", "formula": "주어와 목적어가 같으면 반드시 재귀대명사 사용 (생략 불가) / 강조용법은 생략 가능", "example": "He looked at himself in the mirror. (재귀) / He solved it himself. (강조)", "trap": "주어와 목적어가 같은 인물인데 him을 쓰면 다른 사람을 가리키게 됨!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_38",
                            "sentence": "The energy consumption of electric cars is much lower than [that / those] of traditional gasoline cars.",
                            "underlined": ["energy consumption", "is", "lower than", "those"],
                            "wrongIndex": 3,
                            "correction": "that",
                            "explanation": "비교 대상이 되는 앞선 명사가 셀 수 없는 단수 명사인 The energy consumption이므로 those가 아닌 that으로 받아야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 대명사로 알맞은 것은?\n'The eyes of a cat are more sensitive to light than ________ of a human.'", "options": ["that", "those", "this", "these", "it"], "ans": 1, "exp": "앞선 비교 대상 명사가 The eyes(복수)이므로 those가 알맞습니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 틀린 것은?", "options": ["She looked at herself in the glass.", "He introduced himself to the audience.", "They enjoyed themselves at the party.", "History often repeats it.", "You should take care of yourself."], "ans": 3, "exp": "역사는 '자기 자신'을 반복하는 것이므로 주어 History와 일치하는 재귀대명사 itself로 고쳐야 합니다."},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'The climate of Italy is similar to ________ of Spain. / The customs of Koreans are different from ________ of Americans.'", "options": ["that - that", "that - those", "those - that", "those - those", "it - them"], "ans": 1, "exp": "The climate(단수)은 that으로, The customs(복수)는 those로 받습니다."},
                        {"q": "다음 중 재귀대명사를 생략할 수 있는 문장은?", "options": ["He killed himself.", "She taught herself coding.", "I made this cake myself.", "Don't blame yourself for the mistake.", "We pride ourselves on customer service."], "ans": 2, "exp": "3번의 myself는 주어 I를 강조하기 위해 덧붙여진 강조용법이므로 생략해도 문장이 성립합니다. 나머지는 모두 필수 목적어입니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 대명사는?\n'Teachers should encourage students to think for ________.'", "options": ["them", "themselves", "himself", "herself", "itself"], "ans": 1, "exp": "to think의 의미상 주어인 students와 목적어가 일치하므로 복수 재귀대명사 themselves가 정답입니다."}
                    ]
                },
                {
                    "unitNo": 39,
                    "title": "전치사 vs 접속사 구별 (during vs while, because of vs because)",
                    "part": "수능 킬러",
                    "targetGrade": "고2~고3 수능",
                    "summary": "뒤에 명사(구)가 오는 전치사 vs 뒤에 주어+동사(절)가 오는 접속사의 절대 판별",
                    "formulaCards": [
                        {"name": "수능 빈출 전치사 vs 접속사 쌍", "formula": "전치사(+명사구) vs 접속사(+S+V)\n• during vs while\n• because of / due to / owing to vs because / as / since\n• despite / in spite of vs although / though / even though", "example": "during the summer vacation / while I was on vacation / despite the rain / although it rained", "trap": "despite of (x) ➔ despite는 전치사이므로 of를 붙이지 않음!"},
                        {"name": "for vs during", "formula": "for + 숫자 기간 (for three days) / during + 특정 기간 명사 (during the winter break)", "example": "I stayed in London for two weeks during the summer.", "trap": "for the vacation (x) -> during the vacation (o)"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_39",
                            "sentence": "[Despite / Although] the severe storm caused widespread damage, nobody was injured.",
                            "underlined": ["Despite", "severe storm", "caused", "nobody was"],
                            "wrongIndex": 0,
                            "correction": "Although (또는 Even though)",
                            "explanation": "뒤에 '주어(the severe storm) + 동사(caused)'의 완전한 절이 이어지므로 전치사 Despite 대신 접속사 Although를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'The flight was delayed ________ the heavy snowfall.'", "options": ["because", "since", "due to", "as", "although"], "ans": 2, "exp": "뒤에 명사구(the heavy snowfall)가 오므로 전치사구인 due to(또는 because of)가 정답입니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["I fell asleep during the movie.", "She stayed silent while he was explaining.", "Despite of the heavy rain, we enjoyed the trip.", "Because of his illness, he couldn't attend.", "Although it was cold, we swam."], "ans": 2, "exp": "despite는 그 자체로 전치사이므로 of를 붙이지 않습니다. Despite 또는 In spite of로 고쳐야 합니다."},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'He has lived here ________ five years. / She called me ________ the meeting.'", "options": ["for - during", "during - for", "for - while", "during - while", "since - during"], "ans": 0, "exp": "숫자 기간 앞에는 for, 특정 명사 행사 앞에는 during이 알맞습니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 접속사는?\n'Never give up ________ life gets tough.'", "options": ["even though", "in spite of", "despite", "because of", "during"], "ans": 0, "exp": "뒤에 'life(주어) + gets(동사)'의 절이 이어지므로 양보의 접속사 even though가 와야 합니다."},
                        {"q": "다음 중 빈칸에 'while'만 들어갈 수 있는 문장은?", "options": ["I met him ________ the winter holidays.", "He listened to music ________ exercising.", "She stayed there ________ three weeks.", "We were happy ________ the result.", "They arrived ________ the concert."], "ans": 1, "exp": "while exercising은 접속사 뒤에 주어+be동사가 생략된 형태(while he was exercising)이므로 while이 들어갑니다."}
                    ]
                },
                {
                    "unitNo": 40,
                    "title": "수능 29번 어법 10대 출제공식 총정리",
                    "part": "수능 킬러",
                    "targetGrade": "고2~고3 수능 파이널",
                    "summary": "역대 평가원 수능 29번 어법 문항 10개년 완벽 분석 및 1등급 판별 10대 골든 룰",
                    "formulaCards": [
                        {"name": "수능 29번 3대 킬러 유형", "formula": "1위: 동사 vs 준동사 (본동사 부재 낚시)\n2위: 관계사 vs 접속사 (what vs that, which vs in which)\n3위: 능동 vs 수동 (분사의 수식 대상 확인)", "example": "평가원은 복잡한 수식어구 사이에 진짜 본동사가 있는지를 가장 먼저 묻습니다.", "trap": "문장 구조 분석 없이 단어만 보고 해석으로 풀려고 하면 100% 함정에 빠짐!"},
                        {"name": "수능 어법 1등급 30초 검증 팁", "formula": "밑줄 친 단어의 앞뒤 3단어만 보지 말고, 반드시 문장 전체의 '주어'와 '본동사'를 먼저 찾아 괄호 묶기를 실행할 것!", "example": "[주어] + (수식어 거품...) + [본동사] + [목적어/보어]", "trap": "문장이 4~5줄로 길어질수록 접속사의 개수와 동사의 개수를 대조하는 것이 핵심!"}
                    ],
                    "spottingDrills": [
                        {
                            "id": "sp_40",
                            "sentence": "The assumption that human behavior is entirely rational [having / has] been challenged by modern psychologists.",
                            "underlined": ["assumption", "entirely rational", "having", "been challenged"],
                            "wrongIndex": 2,
                            "correction": "has",
                            "explanation": "문장의 주어는 The assumption이고, that~rational은 동격절입니다. 문장 전체의 본동사 자리이므로 having을 현재완료 본동사 has로 고쳐야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'Ancient Greek philosophers, ①[recognizing] the limitations of senses, ②[attempted] to explain natural phenomena through logic, ③[which] laid the foundation for modern science, ④[made] rational thinking central to Western thought.'", "options": ["① recognizing", "② attempted", "③ which", "④ made", "선택지 없음"], "ans": 3, "exp": "④번 자리 앞에는 등위접속사가 없으므로 동사 made를 쓸 수 없으며, 분사구문 making 또는 and made로 연결해야 합니다."},
                        {"q": "다음 글의 밑줄 친 부분 중 어법상 틀린 것은?\n'The brain's ability to reorganize ①[itself] by forming new neural connections throughout life ②[is] called neuroplasticity, ③[what] allows humans to learn new skills and recover from injuries.'", "options": ["① itself", "② is", "③ what", "forming", "allows"], "ans": 2, "exp": "③번 앞에 콤마가 있고 앞선 내용 전체를 선행사로 받는 계속적 용법이므로 what이 아닌 which가 와야 합니다."},
                        {"q": "다음 중 수능 어법상 올바른 문장은?", "options": ["He suggested that the committee postponed the decision.", "The number of endangered species are growing rapidly.", "Rarely we encounter such an extraordinary talent.", "She worked hard so that her children could receive a good education.", "He bought a car which engine was completely refurbished."], "ans": 3, "exp": "목적을 나타내는 'so that + 조동사' 구문이 완벽하게 쓰였습니다. (1: postpone, 2: is, 3: do we encounter, 5: whose)"},
                        {"q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'The economic impact of renewable energy sources [are] much greater than traditional fossil fuels [do].'", "options": ["impact", "are", "much", "greater", "do"], "ans": 1, "exp": "주어가 단수 명사인 The economic impact이므로 are가 아닌 is가 되어야 합니다."},
                        {"q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'The degree ________ individuals are influenced by social norms varies across cultures.'", "options": ["which", "to which", "what", "that of", "whose"], "ans": 1, "exp": "'individuals are influenced by social norms'는 완전한 수동태 절이며, the degree to which(~하는 정도)의 관용 표현이므로 to which가 정답입니다."}
                    ]
                }
            ]
        }
    ]
    return levels

if __name__ == '__main__':
    data = generate_grammar_data()
    js_content = "/**\n * Veritas English - 영문법 클리닉 5대 레벨 40단원 전체 데이터베이스\n * 5 Levels x 8 Units = 40 Units (200 Practice Questions + 40 Error Spotting Drills)\n */\n"
    js_content += "window.GRAMMAR_CLINIC_BANK = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    
    with open('data/grammar_clinic_data.js', 'w', encoding='utf-8') as f:
        f.write(js_content)
    print("Successfully built data/grammar_clinic_data.js with 5 levels and 40 units!")
