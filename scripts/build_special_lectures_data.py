# -*- coding: utf-8 -*-
"""
Veritas English - 영문법 4대 테마 특강 데이터베이스 빌더
Course 1: 📖 문법 용어 완전 정복 특강 (SP-01 ~ SP-08, Unit 101~108)
Course 2: ✍️ 내신 서술형 감점 제로 특강 (SP-09 ~ SP-16, Unit 109~116)
Course 3: 🎯 수능 29번 3초 컷 킬러 특강 (SP-17 ~ SP-22, Unit 117~122)
Course 4: ⚖️ 시험 단골 헷갈리는 문법 VS 특강 (SP-23 ~ SP-30, Unit 123~130)
총 30개 특강 단원, 60개 공식 카드, 30개 어법 클리닉, 150개 실전 퀴즈
"""

def get_special_lectures_courses():
    courses = [
        # =====================================================================
        # Course 1: 📖 문법 용어 완전 정복 특강 (Terminology Master • 8단원)
        # =====================================================================
        {
            "level": 101,
            "levelCode": "sp_terms",
            "levelName": "문법 용어 특강",
            "targetGrade": "영포자 탈출 0순위",
            "badge": "용어 특강",
            "color": "amber",
            "themeColor": "#d97706",
            "isSpecial": True,
            "courseCategory": "terms",
            "desc": "어려운 한자어 문법 용어를 쉬운 비유와 일상 예시로 완벽 정복하는 기초 필수 특강 (8단원)",
            "units": [
                {
                    "unitNo": 101,
                    "title": "SP-01. 품사 vs 문장 성분 구별법",
                    "part": "문법 용어",
                    "targetGrade": "초·중등 전학년 & 영포자",
                    "summary": "단어의 태생적 성질인 8품사(배우)와 문장에서의 역할인 문장 성분(배역)의 결정적 차이",
                    "formulaCards": [
                        {
                            "name": "품사(8품사)는 '배우', 문장 성분은 '배역'",
                            "formula": "품사 = 단어 자체의 태생 (명사, 대명사, 동사, 형용사, 부사, 전치사, 접속사, 감탄사)\n문장 성분 = 문장에서 맡은 역할 (주어, 동사, 목적어, 보어, 수식어)",
                            "example": "'Tom Cruise'라는 배우(명사)가 영화에서 '탐정'(주어) 역할을 맡을 수도 있고, '범인'(목적어) 역할을 맡을 수도 있습니다.",
                            "trap": "'형용사가 목적어가 될 수 있나요?' ➔ 절대 불가! 목적어 배역은 오직 '명사/대명사' 배우만 맡을 수 있습니다."
                        },
                        {
                            "name": "문장 성분의 4대 뼈대 (주/동/목/보)",
                            "formula": "주어(Subject: 은/는/이/가) + 동사(Verb: ~하다/이다) + 목적어(Object: ~을/를/에게) + 보어(Complement: 보충 설명)",
                            "example": "She(주어-대명사) made(동사) him(목적어-대명사) happy(보어-형용사).",
                            "trap": "부사(Adverb)는 문장의 뼈대(주·동·목·보)가 아니라 장식품(수식어)이므로 생략해도 문장이 성립합니다."
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_01",
                            "sentence": "The chef prepared [careful / carefully] a delicious meal for the hungry guests.",
                            "underlined": ["The chef", "prepared careful", "a delicious meal", "hungry guests"],
                            "wrongIndex": 1,
                            "correction": "prepared carefully",
                            "explanation": "동사 prepared를 수식하는 자리이므로 형용사 careful이 아니라 부사 carefully가 와야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 '단어의 품사'와 '문장 성분'이 올바르게 짝지어진 것은?", "options": ["apple : 품사는 목적어, 문장성분은 명사", "beautiful : 품사는 형용사, 문장성분은 보어 또는 수식어", "slowly : 품사는 부사, 문장성분은 주어", "run : 품사는 주어, 문장성분은 동사", "under : 품사는 접속사, 문장성분은 보어"], "ans": 1, "exp": "beautiful은 품사로는 형용사이며, 문장 내에서 명사를 수식하거나 보어 역할을 수행합니다."},
                        {"q": "다음 문장에서 밑줄 친 단어의 '문장 성분'은?\n'My uncle bought [a new computer] yesterday.'", "options": ["주어 (Subject)", "동사 (Verb)", "목적어 (Object)", "보어 (Complement)", "수식어 (Modifier)"], "ans": 2, "exp": "동사 bought의 동작 대상(~을/를)에 해당하므로 '목적어'입니다."},
                        {"q": "다음 중 문장의 필수 뼈대 성분(주어, 동사, 목적어, 보어)이 아닌 것은?", "options": ["주어", "목적어", "보어", "부사적 수식어(Modifier)", "동사"], "ans": 3, "exp": "부사나 전치사구 등 수식어(Modifier)는 문장의 부가적 성분으로 필수 뼈대에 포함되지 않습니다."},
                        {"q": "다음 중 형용사(Adjective)가 문장 안에서 맡을 수 있는 역할로 올바른 것은?", "options": ["주어 자리 전담", "명사 수식 및 보어(주격/목적격 보어)", "동사 수식 및 목적어", "전치사의 목적어", "문장과 문장을 연결"], "ans": 1, "exp": "형용사는 명사를 직접 꾸미거나(한정적), 주어나 목적어를 보충 설명하는 보어(서술적) 역할을 합니다."},
                        {"q": "다음 문장에서 '보어(Complement)'에 해당하는 단어는?\n'The music sounds very sweet.'", "options": ["The", "music", "sounds", "very", "sweet"], "ans": 4, "exp": "sounds 뒤에서 주어(The music)의 상태를 보충 설명하는 형용사 sweet가 주격 보어입니다."}
                    ]
                },
                {
                    "unitNo": 102,
                    "title": "SP-02. 동사의 종류와 자동사 vs 타동사",
                    "part": "문법 용어",
                    "targetGrade": "초·중등 전학년 & 영포자",
                    "summary": "동작의 대상(목적어)이 필요한가(타동사) 아니면 스스로 일어나는가(자동사)의 원리와 1~5형식 뼈대",
                    "formulaCards": [
                        {
                            "name": "자동사(Vi) vs 타동사(Vt)의 판별법",
                            "formula": "자동사 (Intransitive) : 주어 혼자 행동 완료! 뒤에 목적어(~을/를) 불필요! (sleep, cry, smile, arrive)\n타동사 (Transitive) : 동작을 받는 대상(목적어)이 반드시 필요! (like, make, buy, visit)",
                            "example": "Birds fly. (새가 난다 - 자동사, 목적어 없음)\nI love you. (나는 너를 사랑한다 - 타동사, you가 목적어)",
                            "trap": "자동사가 목적어를 취하고 싶을 때는 반드시 '전치사'라는 징검다리를 놓아야 함! (listen to, look at, arrive at)"
                        },
                        {
                            "name": "1~5형식의 탄생 비밀",
                            "formula": "1형식: S + V (완전자동사)\n2형식: S + V + C (불완전자동사: 보어 필요)\n3형식: S + V + O (완전타동사: 목적어 1개)\n4형식: S + V + IO + DO (수여동사: 목적어 2개)\n5형식: S + V + O + OC (불완전타동사: 목적어+보어)",
                            "example": "동사가 어떤 친구(목적어, 보어)를 필요로 하느냐에 따라 5가지 형식이 결정됩니다.",
                            "trap": "동사 하나가 무조건 한 가지 형식만 취하는 것이 아니라, 문맥에 따라 자동사/타동사로 모두 쓰일 수 있음!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_02",
                            "sentence": "When she entered to the classroom, all students looked at her silently.",
                            "underlined": ["entered to", "the classroom", "looked at", "silently"],
                            "wrongIndex": 0,
                            "correction": "entered",
                            "explanation": "enter는 '~에 들어가다'라는 뜻의 완전타동사이므로 전치사 to 없이 바로 목적어 the classroom을 취해야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 목적어(~을/를) 없이 홀로 완전한 문장을 이룰 수 있는 '자동사'는?", "options": ["buy", "make", "sleep", "want", "catch"], "ans": 2, "exp": "sleep(자다)은 목적어가 필요 없는 대표적인 자동사입니다."},
                        {"q": "다음 문장의 형식은?\n'My grandmother gave me a beautiful watch on my birthday.'", "options": ["1형식 (S+V)", "2형식 (S+V+C)", "3형식 (S+V+O)", "4형식 (S+V+IO+DO)", "5형식 (S+V+O+OC)"], "ans": 3, "exp": "주어(grandmother) + 동사(gave) + 간접목적어(me) + 직접목적어(a beautiful watch)의 4형식 수여동사 문장입니다."},
                        {"q": "다음 중 전치사 없이 목적어를 바로 취해야 하는 '완전타동사'는?", "options": ["listen", "arrive", "discuss", "look", "wait"], "ans": 2, "exp": "discuss는 타동사이므로 discuss about이 아니라 바로 discuss the problem처럼 목적어를 취합니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 말로 알맞은 것은?\n'The baby ________ softly in the cradle.'", "options": ["slept", "slept to", "slept at", "slept with", "was slept"], "ans": 0, "exp": "sleep은 자동사이므로 전치사나 수동태 없이 단독으로 부사(softly)와 결합합니다."},
                        {"q": "다음 문장에서 목적격 보어(OC)를 필요로 하는 5형식 문장은?", "options": ["He runs very fast.", "The sky turned dark.", "She bought a new dress.", "They made him the president.", "I sent a postcard to my friend."], "ans": 3, "exp": "They(S) made(V) him(O) the president(OC) 구조로 5형식입니다."}
                    ]
                },
                {
                    "unitNo": 103,
                    "title": "SP-03. 보어(Complement)의 진짜 의미",
                    "part": "문법 용어",
                    "targetGrade": "초·중등 전학년 & 영포자",
                    "summary": "'도대체 무엇을 보충해 주길래 보어인가?' 주격 보어(S=C)와 목적격 보어(O➔OC)의 본질",
                    "formulaCards": [
                        {
                            "name": "보어(Complement) = '보충 설명해 주는 말'",
                            "formula": "주격 보어 (Subject Complement) : 주어의 정체(명사)나 상태(형용사)를 보충 ➔ [주어 = 보어]\n목적격 보어 (Object Complement) : 목적어의 정체나 상태·동작을 보충 ➔ [목적어 = 보어]",
                            "example": "He is a doctor. (He = doctor, 주격보어-명사)\nShe feels tired. (She = tired 상태, 주격보어-형용사)\nWe painted the wall blue. (wall = blue 상태, 목적격보어)",
                            "trap": "보어 자리에는 '명사'와 '형용사'만 올 수 있습니다. '부사(~ly)'는 절대로 보어가 될 수 없습니다!"
                        },
                        {
                            "name": "감각동사 뒤에는 반드시 형용사 보어!",
                            "formula": "look, smell, taste, sound, feel + 형용사 (O) / + 부사 (X)",
                            "example": "It smells deliciously. (X) ➔ It smells delicious. (O: 맛있게 냄새난다)",
                            "trap": "우리말 해석이 '~하게'로 부사처럼 되더라도 영어에서는 주어를 보충하므로 형용사를 써야 함!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_03",
                            "sentence": "The fresh bread smelled deliciously and tasted sweet to all of us.",
                            "underlined": ["fresh bread", "smelled deliciously", "tasted", "sweet"],
                            "wrongIndex": 1,
                            "correction": "smelled delicious",
                            "explanation": "감각동사 smell 뒤에는 주어를 보충하는 주격 보어 자리가 오므로 부사 deliciously가 아니라 형용사 delicious를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 밑줄 친 부분이 '보어'인 문장은?", "options": ["She plays tennis well.", "My brother became an engineer.", "I read a book in the library.", "They arrived at the airport.", "He ran into the room."], "ans": 1, "exp": "became an engineer에서 engineer는 주어(My brother)의 정체를 보충하는 주격 보어입니다."},
                        {"q": "다음 빈칸에 어법상 들어갈 수 없는 단어는?\n'The music sounds ________.'", "options": ["wonderful", "great", "sweet", "beautifully", "pleasant"], "ans": 3, "exp": "감각동사 sounds 뒤 보어 자리에는 부사 beautifully가 올 수 없습니다. 형용사 beautiful이어야 합니다."},
                        {"q": "다음 5형식 문장에서 '목적격 보어'는?\n'Her kind words made him very happy.'", "options": ["kind", "words", "made", "him", "happy"], "ans": 4, "exp": "목적어 him의 기분 상태를 보충 설명하는 happy가 목적격 보어입니다."},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["This soup tastes badly.", "The flowers smell sweetly.", "He looked angrily at the referee.", "She seems happily today.", "The blanket feels softly."], "ans": 2, "exp": "3번의 looked는 '바라보다'라는 일반 동작 동사로 쓰여 부사 angrily(화나서)의 수식을 받는 바른 문장입니다. (나머지는 감각동사 뒤 부사 사용 오류)"},
                        {"q": "보어(Complement)에 대한 설명으로 옳지 않은 것은?", "options": ["주어나 목적어의 의미를 보충해 준다.", "명사와 형용사가 보어가 될 수 있다.", "감각동사 뒤에는 형용사 보어가 온다.", "우리말 해석이 '~하게'이면 부사를 보어로 쓴다.", "2형식과 5형식 문장에 등장한다."], "ans": 3, "exp": "우리말 해석이 '~하게'로 되더라도 보어 자리에는 절대 부사를 쓸 수 없고 형용사를 써야 합니다."}
                    ]
                },
                {
                    "unitNo": 104,
                    "title": "SP-04. 준동사의 탄생 비밀",
                    "part": "문법 용어",
                    "targetGrade": "초·중등 전학년 & 영포자",
                    "summary": "동사였던 녀석이 왜 옷을 갈아입었을까? to부정사(미정품사), 동명사(명사화), 분사(형용사화)의 원리",
                    "formulaCards": [
                        {
                            "name": "준동사(Verbal) = '동사에 준하지만 다른 품사로 변신한 것'",
                            "formula": "한 문장에 본동사는 오직 1개! 다른 동사를 또 쓰려면 준동사로 변신시켜야 함!\n1. to부정사 (to + V) : 명사, 형용사, 부사 중 역할이 '아직 정해지지 않음(不定)'\n2. 동명사 (V-ing) : 동사를 '명사(~하기, ~하는 것)'로 변신\n3. 분사 (V-ing / p.p.) : 동사를 '형용사(~하는, ~된)'로 변신",
                            "example": "I like play soccer. (X: 본동사 2개 충돌)\nI like to play soccer. (O: to부정사)\nI like playing soccer. (O: 동명사)",
                            "trap": "준동사는 품사가 바뀌었지만, 원래 동사였던 성질(목적어·보어를 가짐, 부사의 수식을 받음, 시제와 태를 가짐)을 그대로 간직합니다."
                        },
                        {
                            "name": "준동사 3형제의 품사 요약표",
                            "formula": "• to부정사 ➔ 명사적, 형용사적, 부사적 용법\n• 동명사 ➔ 주어, 목적어, 보어 (명사 역할만)\n• 분사 ➔ 명사 수식, 주격/목적격 보어 (형용사 역할만)",
                            "example": "Smoking is bad. (동명사 주어) / a sleeping dog (분사 수식)",
                            "trap": "같은 V-ing 형태라도 '명사'로 쓰이면 동명사, '형용사'로 쓰이면 현재분사입니다."
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_04",
                            "sentence": "My dream is become an astrophysicist and explore deep space.",
                            "underlined": ["My dream", "is become", "an astrophysicist", "explore"],
                            "wrongIndex": 1,
                            "correction": "is to become (또는 is becoming)",
                            "explanation": "문장의 본동사 is가 있으므로 뒤에 동사원형 become을 바로 쓸 수 없으며, 명사적 보어 역할을 하는 to become 또는 becoming으로 고쳐야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "준동사(Verbal)가 만들어진 가장 근본적인 이유는?", "options": ["문장을 더 어렵게 만들기 위해", "한 문장에 접속사 없이 동사를 또 쓰기 위해 품사를 변신시킴", "동사의 개수를 무제한 늘리기 위해", "단어의 철자를 길게 만들기 위해", "주어를 강조하기 위해"], "ans": 1, "exp": "한 문장에는 본동사가 1개만 올 수 있으므로, 추가적인 동작을 표현하기 위해 동사를 명사·형용사·부사로 변신시킨 것이 준동사입니다."},
                        {"q": "다음 중 밑줄 친 V-ing가 '동명사'로 쓰인 것은?", "options": ["Look at the crying baby.", "She is reading a novel in her room.", "Swimming in the river is very dangerous.", "A barking dog seldom bites.", "The falling leaves look beautiful."], "ans": 2, "exp": "3번의 Swimming은 문장의 '주어(~하는 것)' 역할을 하므로 동명사입니다. (나머지는 명사를 수식하는 현재분사 또는 진행형)"},
                        {"q": "'to부정사(Infinitive)'에서 '부정(不定)'의 진짜 의미는?", "options": ["아니다(Not)라는 부정적인 뜻", "역할이 명사, 형용사, 부사로 정해져 있지 않고 문맥에 따라 결정됨", "문법적으로 정상이 아니라는 뜻", "아무도 정답을 알 수 없다는 뜻", "항상 부정문에만 쓰인다는 뜻"], "ans": 1, "exp": "부정(不定, Non-finite)은 품사 역할이 하나로 정해져 있지 않다(Not fixed)는 뜻입니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 준동사의 형태로 알맞은 것은?\n'I bought a book ________ on the train.'", "options": ["read", "to read", "reads", "is reading", "was read"], "ans": 1, "exp": "명사 a book을 뒤에서 수식하는 형용사적 용법의 to부정사 to read가 적절합니다."},
                        {"q": "준동사가 원래 동사 출신이기 때문에 가지는 고유한 성질이 아닌 것은?", "options": ["자신만의 목적어나 보어를 취할 수 있다.", "부사의 수식을 받을 수 있다.", "단독으로 문장의 본동사 역할을 할 수 있다.", "의미상의 주어를 가질 수 있다.", "능동형과 수동형의 태를 가질 수 있다."], "ans": 2, "exp": "준동사는 본동사가 아니므로 문장의 주어 바로 뒤에서 단독으로 문장의 본동사 역할을 할 수 없습니다."}
                    ]
                },
                {
                    "unitNo": 105,
                    "title": "SP-05. '관계'대명사에서 '관계'의 뜻",
                    "part": "문법 용어",
                    "targetGrade": "초·중등 전학년 & 영포자",
                    "summary": "관계(Relation)는 문장을 이어주는 '접속사'의 뜻! '선행사(先行詞)'의 어원과 원리",
                    "formulaCards": [
                        {
                            "name": "'관계대명사' = 접속사(문장 연결) + 대명사(명사 대신)",
                            "formula": "관계대명사 = 문장과 문장을 연결하는 '접속사' + 겹치는 명사를 대신하는 '대명사'\n선행사(先行詞) = '앞에(先) 먼저 걸어간(行) 단어(詞)' ➔ 관계대명사 바로 앞에 있는 꾸밈받는 명사!",
                            "example": "I know a boy. + He speaks four languages.\n➔ I know a boy [who speaks four languages]. (a boy = 선행사, who = 관계대명사)",
                            "trap": "관계대명사 뒤에는 겹치는 명사가 1개 빠져있으므로 반드시 '불완전한 문장(주어나 목적어 결손)'이 옵니다!"
                        },
                        {
                            "name": "관계대명사절은 형용사절이다!",
                            "formula": "관계대명사 덩어리 전체는 선행사(명사)를 꾸며주는 '형용사' 역할을 합니다.",
                            "example": "the car [which was made in Korea] ➔ 한국에서 만들어진(형용사처럼 수식) 자동차",
                            "trap": "who, which, that을 '누구, 어느 것, 저것'으로 해석하지 말고, 앞 명사를 꾸며주는 풀칠로 이해할 것!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_05",
                            "sentence": "The girl who she won the science contest is my younger sister.",
                            "underlined": ["The girl", "who she", "won the science contest", "is my sister"],
                            "wrongIndex": 1,
                            "correction": "who",
                            "explanation": "관계대명사 who가 이미 주어 역할을 하고 있으므로 중복된 대명사 she를 반드시 삭제해야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "'관계대명사'에서 '관계(Relational)'가 의미하는 문법적 기능은?", "options": ["친족 관계를 나타냄", "두 문장을 이어주는 '접속사' 기능", "남녀 간의 연애 관계", "상관관계 통계 분석", "인과 관계 도출"], "ans": 1, "exp": "관계(Relative)는 두 문장을 연결해 주는 '접속사' 기능을 의미합니다."},
                        {"q": "'선행사(Antecedent)'의 한자어 어원적 의미는?", "options": ["선한 행동을 하는 사람", "관계사 앞에 먼저(先) 나오는 명사", "선생님이 가르치는 단어", "앞으로 행해야 할 과제", "가장 우선시되는 동사"], "ans": 1, "exp": "선행사(先行詞)는 관계대명사 앞에 먼저 위치하여 수식을 받는 명사를 뜻합니다."},
                        {"q": "다음 두 문장을 관계대명사를 이용해 한 문장으로 바르게 합친 것은?\n'I have a friend. She lives in New York.'", "options": ["I have a friend which lives in New York.", "I have a friend who she lives in New York.", "I have a friend who lives in New York.", "I have a friend whom lives in New York.", "I have a friend whose lives in New York."], "ans": 2, "exp": "선행사가 사람이고 주격이므로 who를 쓰며, 대명사 she는 생략되어야 합니다."},
                        {"q": "관계대명사절 뒤의 문장 구조의 결정적인 특징은?", "options": ["항상 완전한 문장이 온다.", "주어나 목적어가 빠진 불완전한 문장이 온다.", "동사가 반드시 2개 연속 온다.", "접속사가 또 필요하다.", "부사가 맨 앞에 온다."], "ans": 1, "exp": "관계대명사가 주어나 목적어를 대신하고 있으므로 뒤따르는 절은 반드시 주어나 목적어가 빠진 불완전한 구조입니다."},
                        {"q": "관계대명사절 전체는 문장 안에서 어떤 품사 역할을 하는가?", "options": ["명사절 (주어 역할)", "형용사절 (선행사 명사 수식)", "부사절 (시간/이유 수식)", "동사구 (동작 서술)", "독립 감탄구"], "ans": 1, "exp": "선행사(명사)를 꾸며주므로 형용사 역할을 하는 '형용사절'입니다."}
                    ]
                },
                {
                    "unitNo": 106,
                    "title": "SP-06. 능동태 vs 수동태의 원리",
                    "part": "문법 용어",
                    "targetGrade": "초·중등 전학년 & 영포자",
                    "summary": "행동을 하는가(Active) vs 당하는가(Passive)? 수동태(be+p.p.)의 탄생 배경과 목적어의 이동",
                    "formulaCards": [
                        {
                            "name": "수동태는 '당하는 녀석'을 주인공으로 세우는 문법",
                            "formula": "능동태 : [주어]가 [목적어]를 ~하다.\n수동태 : [목적어]가 [be + 과거분사(p.p.)] 당하다 + (by 행위자)",
                            "example": "Shakespeare wrote Hamlet. (능동태: 셰익스피어가 햄릿을 썼다)\n➔ Hamlet was written by Shakespeare. (수동태: 햄릿이 쓰여졌다)",
                            "trap": "목적어(~을/를)가 없는 자동사(1, 2형식: happen, appear, disappear)는 수동태로 전환이 절대 불가!"
                        },
                        {
                            "name": "왜 be동사 + p.p. 형태일까?",
                            "formula": "be동사(~인 상태이다) + p.p.(완료·수동 의미의 형용사) = '~되어진 상태로 존재하다'",
                            "example": "The door is locked. (문이 잠겨진 상태이다)",
                            "trap": "수동태로 바뀔 때 시제(현재/과거)는 반드시 be동사에 반영해야 합니다! (is/are vs was/were)"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_06",
                            "sentence": "A mysterious accident was happened on highway 65 yesterday evening.",
                            "underlined": ["mysterious accident", "was happened", "on highway 65", "yesterday evening"],
                            "wrongIndex": 1,
                            "correction": "happened",
                            "explanation": "happen(일어나다, 발생하다)은 목적어가 없는 자동사이므로 수동태(was happened)로 쓸 수 없으며 능동형 happened로 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "영어에서 능동태 대신 수동태를 사용하는 대표적인 상황이 아닌 것은?", "options": ["행위자보다 행동을 당하는 대상이 더 중요할 때", "행위자가 누구인지 모르거나 밝힐 필요가 없을 때", "주어가 직접 자신의 의지로 동작을 적극 수행함을 강조할 때", "객관적인 사실이나 학술적 연구 결과를 진술할 때", "행위자가 불특정 다수(people)일 때"], "ans": 2, "exp": "주어가 직접 동작을 적극 수행함을 강조할 때는 능동태(Active voice)를 씁니다."},
                        {"q": "다음 중 수동태 문장으로 전환할 수 없는 동사는?", "options": ["build", "disappear", "write", "clean", "invent"], "ans": 1, "exp": "disappear(사라지다)는 목적어를 가질 수 없는 자동사이므로 수동태가 불가능합니다."},
                        {"q": "다음 능동태 문장을 수동태로 올바르게 전환한 것은?\n'Many tourists visit the palace every year.'", "options": ["The palace visited by many tourists every year.", "The palace is visited by many tourists every year.", "The palace was visited by many tourists every year.", "The palace visits many tourists every year.", "The palace has visited by many tourists."], "ans": 1, "exp": "현재 시제이므로 be동사 현재형 is + visited + by many tourists가 맞습니다."},
                        {"q": "수동태의 기본 공식으로 올바른 것은?", "options": ["have + p.p.", "be동사 + 동사원형", "be동사 + 과거분사(p.p.)", "do + 동사원형", "be동사 + 현재분사(V-ing)"], "ans": 2, "exp": "수동태의 기본 형태는 'be동사 + 과거분사(p.p.)'입니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 틀린 것은?", "options": ["The window was broken by Tom.", "English is spoken in many countries.", "The castle was built in 1600.", "The car was disappeared last night.", "The letter was delivered on time."], "ans": 3, "exp": "disappear는 자동사이므로 was disappeared라는 수동태 형태는 틀렸으며, disappeared로 써야 합니다."}
                    ]
                },
                {
                    "unitNo": 107,
                    "title": "SP-07. 구(Phrase) vs 절(Clause)",
                    "part": "문법 용어",
                    "targetGrade": "초·중등 전학년 & 영포자",
                    "summary": "단어 뭉치 속에 주어+동사가 있는가 없는가? 긴 영어 문장을 의미 덩어리(청크)로 쪼개는 비법",
                    "formulaCards": [
                        {
                            "name": "구(Phrase) vs 절(Clause)의 결정적 차이",
                            "formula": "구 (Phrase) : 2개 이상의 단어가 모였지만 [주어 + 동사]가 없음! (in the morning, to play soccer, very quickly)\n절 (Clause) : 2개 이상의 단어가 모여 [주어 + 동사] 관계를 이룸! (because he was tired, that she loved me)",
                            "example": "because of the rain (구: 주어+동사 없음) vs because it rained (절: it 주어 + rained 동사)",
                            "trap": "구 앞에는 전치사(because of, despite, during)를 쓰고, 절 앞에는 접속사(because, although, while)를 씁니다!"
                        },
                        {
                            "name": "주절(Independent) vs 종속절(Dependent)",
                            "formula": "주절 = 문장의 주인! 혼자서도 문장 성립 (I stayed at home)\n종속절 = 접속사를 달고 주절에 딸려 붙은 보조 절 (because it was raining)",
                            "example": "접속사가 붙어있는 쪽이 종속절(부사절/명사절/형용사절)입니다.",
                            "trap": "종속절만 덩그러니 마침표를 찍고 단독 문장으로 존재할 수 없습니다."
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_07",
                            "sentence": "Despite it rained heavily all afternoon, they continued the baseball match.",
                            "underlined": ["Despite", "it rained heavily", "continued", "the match"],
                            "wrongIndex": 0,
                            "correction": "Although (또는 Even though)",
                            "explanation": "뒤에 'it(주어) + rained(동사)'의 절(Clause)이 이어지므로 전치사 Despite가 아니라 접속사 Although를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "'구(Phrase)'와 '절(Clause)'을 구별하는 가장 결정적인 기준은?", "options": ["글자 수의 길이", "단어 묶음 속에 [주어+동사]의 결합 관계가 있는가", "마침표가 찍혀 있는가", "대문자로 시작하는가", "전치사가 포함되어 있는가"], "ans": 1, "exp": "구는 주어+동사가 없는 단어 뭉치이고, 절은 주어+동사를 갖춘 단어 뭉치입니다."},
                        {"q": "다음 중 성격이 다른 하나는? (구 vs 절)", "options": ["under the big tree", "to solve the problem", "with my best friends", "when she arrived home", "in early morning"], "ans": 3, "exp": "4번은 when 접속사 뒤에 'she(주어) + arrived(동사)'가 있으므로 '절'이고, 나머지는 '구'입니다."},
                        {"q": "다음 빈칸에 'Because of'만 들어갈 수 있는 것은?", "options": ["________ the heavy snow", "________ it was snowing heavily", "________ he was absent", "________ she felt sick", "________ we missed the bus"], "ans": 0, "exp": "Because of는 전치사이므로 주어+동사가 없는 명사구(the heavy snow) 앞에 와야 합니다."},
                        {"q": "다음 문장에서 '종속절'에 해당하는 부분은?\n'We went outside when the rain stopped.'", "options": ["We went outside", "went outside", "when the rain stopped", "the rain stopped", "when the rain"], "ans": 2, "exp": "접속사 when을 동반하여 주절에 시간 조건을 더해주는 'when the rain stopped'가 종속절(부사절)입니다."},
                        {"q": "다음 중 명사구(Noun Phrase) 역할을 하는 것은?", "options": ["very softly", "in the garden", "To read good books", "if it is true", "quite happily"], "ans": 2, "exp": "'To read good books'는 to부정사의 명사적 용법으로 주어 역할을 할 수 있는 명사구입니다."}
                    ]
                },
                {
                    "unitNo": 108,
                    "title": "SP-08. 한정적 용법 vs 서술적 용법",
                    "part": "문법 용어",
                    "targetGrade": "초·중등 전학년 & 영포자",
                    "summary": "명사를 직접 수식(한정)하는가 vs 주어를 서술(보어)하는가? 관계대명사 계속적 용법(콤마) 쉬운 해설",
                    "formulaCards": [
                        {
                            "name": "한정적(Attributive) vs 서술적(Predicative)의 어원",
                            "formula": "한정적 용법 : 명사의 범위를 좁혀서(한정하여) 직접 꾸밈 ➔ [형용사 + 명사]\n서술적 용법 : 주어의 상태를 동사와 함께 서술(설명)함 ➔ [주어 + be동사 + 형용사(보어)]",
                            "example": "a sleeping baby (자고 있는 아기 - 아기의 범위를 한정)\nThe baby is sleeping. (아기가 자고 있다 - 아기의 상태를 서술)",
                            "trap": "afraid, alive, asleep, awake, alone 등 a-로 시작하는 형용사는 '서술적 용법(보어)'으로만 쓰입니다!"
                        },
                        {
                            "name": "관계대명사의 한정용법 vs 계속적 용법(콤마)",
                            "formula": "한정용법 (콤마 없음) : 뒤에서 명사를 수식 (~하는 선행사)\n계속적 용법 (콤마 있음) : 앞에서부터 순서대로 보충 설명 (그런데 그 사람은/그것은 ~하다)",
                            "example": "He has two sons who became doctors. (의사가 된 아들이 2명 있다 - 아들이 더 있을 수 있음)\nHe has two sons, who became doctors. (아들이 딱 2명 있는데, 둘 다 의사가 되었다)",
                            "trap": "계속적 용법(, 뒤)에는 관계대명사 that과 what을 절대로 쓸 수 없습니다!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_08",
                            "sentence": "The mother looked at the asleep child with a warm smile on her face.",
                            "underlined": ["The mother", "looked at", "asleep child", "on her face"],
                            "wrongIndex": 2,
                            "correction": "sleeping child",
                            "explanation": "asleep은 서술적 용법(보어 자리)으로만 쓰이는 형용사이므로 명사 child를 앞에서 직접 수식할 수 없습니다. sleeping child로 고쳐야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "형용사의 '서술적 용법'에 대한 설명으로 옳은 것은?", "options": ["명사 바로 앞에서 명사를 직접 수식한다.", "문장의 보어(주격/목적격 보어) 자리에 쓰여 상태를 설명한다.", "항상 부사의 수식만 받는다.", "관계대명사 뒤에만 쓰인다.", "전치사 뒤에만 쓰인다."], "ans": 1, "exp": "서술적 용법은 보어 자리에서 주어나 목적어의 상태를 설명하는 용법입니다."},
                        {"q": "다음 중 명사 앞에서 직접 명사를 꾸밀 수 없는 '서술 전용 형용사'는?", "options": ["happy", "alive", "brave", "honest", "clever"], "ans": 1, "exp": "alive는 an alive fish(X)처럼 쓸 수 없고, The fish is alive(O)처럼 서술적 보어로만 쓰입니다."},
                        {"q": "관계대명사의 계속적 용법(, 콤마 뒤)에 절대 쓸 수 없는 관계대명사는?", "options": ["which", "who", "whom", "that", "whose"], "ans": 3, "exp": "관계대명사 that과 what은 콤마 뒤 계속적 용법으로 쓸 수 없습니다."},
                        {"q": "다음 두 문장의 의미 차이로 올바른 것은?\n(A) I met an old friend who told me the news.\n(B) I met an old friend, who told me the news.", "options": ["(A)와 (B)의 의미는 100% 동일하다.", "(A)는 그 소식을 전해준 옛 친구를 만난 것이고, (B)는 옛 친구를 만났는데 그 친구가 소식을 전해준 것이다.", "(A)는 가짜 뉴스이고 (B)는 진짜 뉴스이다.", "(A)는 친구가 여러 명이고 (B)는 친구가 없다.", "(B) 문장은 문법 오류 문장이다."], "ans": 1, "exp": "(A)는 한정적 수식이며, (B)는 앞에서부터 순차적으로 정보를 덧붙이는 계속적 서술입니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["The baby was fast asleep.", "He is afraid of snakes.", "She bought an asleep puppy.", "The bird is still alive.", "He stayed alone in the house."], "ans": 2, "exp": "asleep은 명사를 앞에서 직접 수식할 수 없으므로 an asleep puppy는 틀렸고, a sleeping puppy로 써야 합니다."}
                    ]
                }
            ]
        },

        # =====================================================================
        # Course 2: ✍️ 내신 서술형 감점 제로 특강 (Writing Master • 8단원)
        # =====================================================================
        {
            "level": 102,
            "levelCode": "sp_writing",
            "levelName": "서술형 영작 특강",
            "targetGrade": "중·고등 내신 1등급",
            "badge": "서술형 특강",
            "color": "rose",
            "themeColor": "#e11d48",
            "isSpecial": True,
            "courseCategory": "writing",
            "desc": "조건 영작, 어순 배열, 감점 방어 공식으로 중·고교 서술형 30~40점 배점 완벽 방어 (8단원)",
            "units": [
                {
                    "unitNo": 109,
                    "title": "SP-09. 조건 영작 1순위: to부정사 & 동명사 구문",
                    "part": "서술형 영작",
                    "targetGrade": "중2~고1 내신",
                    "summary": "가주어/진주어 it ~ for/of ~ to, too ~ to 구문 변환, 조건 영작 감점 방지 팁",
                    "formulaCards": [
                        {
                            "name": "It (가주어) ~ for/of (의미상 주어) + to V (진주어)",
                            "formula": "It is [형용사] + for + [목적격] + to [동사원형] ...\n(단, 사람의 성품 형용사 kind, rude, polite, foolish 뒤에는 of + 목적격)",
                            "example": "It is difficult for me to solve this puzzle. / It was very kind of you to invite us.",
                            "trap": "for me 자리에 of me를 쓰거나, to 뒤에 동사원형이 아닌 -ing를 쓰는 감점 실수 주의!"
                        },
                        {
                            "name": "too ~ to V ➔ so ~ that ... can't 변환 공식",
                            "formula": "too [형용사/부사] to V = so [형용사/부사] that + 주어 + cannot/could not + V",
                            "example": "He was too tired to walk. = He was so tired that he could not walk.",
                            "trap": "과거 시제일 때 can't가 아니라 could not(couldn't)을 써야 함! 주절 시제 불일치로 감점 1위!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_09",
                            "sentence": "It was very generous for him to donate all his fortune to the charity.",
                            "underlined": ["It was", "generous for him", "to donate", "to the charity"],
                            "wrongIndex": 1,
                            "correction": "generous of him",
                            "explanation": "generous(관대한)는 사람의 인품·성격을 나타내는 형용사이므로 to부정사의 의미상 주어 앞에 for가 아닌 of를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 우리말을 조건에 맞게 영작할 때 빈칸에 알맞은 것은?\n'그가 제시간에 도착하는 것은 불가능하다.' (It, possible 단어 변형 활용)", "options": ["It is impossible for him to arrive on time.", "It is impossible of him to arrive on time.", "It is impossible for he arriving on time.", "He is impossible to arrive on time.", "It is impossible that he arrive on time."], "ans": 0, "exp": "가주어 it, 일반 형용사의 의미상 주어 for him, 진주어 to arrive 구문이 정확합니다."},
                        {"q": "다음 문장과 의미가 같도록 빈칸을 채울 때 알맞은 것은?\n'The box was too heavy for her to lift.'\n= 'The box was so heavy that she ________ it.'", "options": ["cannot lift", "could not lift", "can lift", "could not lift it", "could lift"], "ans": 3, "exp": "so ~ that 구문에서는 타동사 lift의 목적어 it을 반드시 써주어야 하며, 과거시제이므로 could not lift it이 정답입니다."},
                        {"q": "다음 중 의미상 주어 앞에 'of'를 써야 하는 형용사는?", "options": ["easy", "difficult", "important", "foolish", "dangerous"], "ans": 3, "exp": "foolish(어리석은)는 사람의 성품을 나타내는 형용사이므로 of를 씁니다."},
                        {"q": "다음 영작 중 어법상 틀린 부분은?\n'It is necessary for us [learning] foreign languages.'", "options": ["is", "necessary", "for us", "learning", "foreign languages"], "ans": 3, "exp": "가주어 it 구문에서 진주어로는 to부정사가 와야 하므로 learning을 to learn으로 고쳐야 합니다."},
                        {"q": "다음 빈칸에 들어갈 전치사가 순서대로 알맞은 것은?\n'It is hard ________ her to wake up early.'\n'It is polite ________ you to say hello.'", "options": ["for - for", "of - for", "for - of", "of - of", "to - for"], "ans": 2, "exp": "hard는 일반 난이도 형용사이므로 for, polite는 인품 형용사이므로 of입니다."}
                    ]
                },
                {
                    "unitNo": 110,
                    "title": "SP-10. 조건 영작 2순위: 관계대명사 & 관계부사 영작",
                    "part": "서술형 영작",
                    "targetGrade": "중2~고1 내신",
                    "summary": "두 문장 결합 서술형, 전치사+관계대명사(in which 등), 관계부사(where/when/why) 조건 영작",
                    "formulaCards": [
                        {
                            "name": "전치사 + 관계대명사 ➔ 관계부사 치환",
                            "formula": "in/at/on + which = where (장소) / in/on/at + which = when (시간)\nfor + which = why (이유) / in which = how (방법)",
                            "example": "This is the house in which I was born. = This is the house where I was born.",
                            "trap": "관계부사 뒤에는 '완전한 문장'이 오며, how와 the way는 절대 나란히 쓰지 못함 (the way만 쓰거나 how만 씀)!"
                        },
                        {
                            "name": "서술형 관계사 영작 3단계 공식",
                            "formula": "1단계: 공통 명사(선행사) 찾기\n2단계: 뒷문장 겹치는 대명사 지우고 알맞은 관계사(who/which/whose) 선택\n3단계: 선행사 바로 뒤에 관계사절 통째로 삽입하기",
                            "example": "The boy is my brother. + You met him yesterday.\n➔ The boy [whom you met yesterday] is my brother.",
                            "trap": "관계사절을 선행사 바로 뒤가 아니라 문장 맨 끝에 붙여버리는 오류 주의!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_10",
                            "sentence": "I will never forget the restaurant where we had dinner in on our first anniversary.",
                            "underlined": ["never forget", "the restaurant", "where we had dinner in", "first anniversary"],
                            "wrongIndex": 2,
                            "correction": "where we had dinner (또는 which we had dinner in)",
                            "explanation": "관계부사 where 뒤에는 완전한 절이 와야 하므로 불필요한 전치사 in을 삭제하거나, in which로 바꾸어야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 두 문장을 한 문장으로 바르게 결합한 것은?\n'This is the laptop.' + 'I bought it last week.'", "options": ["This is the laptop which I bought it last week.", "This is the laptop where I bought last week.", "This is the laptop which I bought last week.", "This is the laptop whose I bought last week.", "This is the laptop whom I bought last week."], "ans": 2, "exp": "사물 선행사이므로 which를 쓰며, 목적어 it은 관계대명사로 전환되었으므로 삭제해야 합니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["This is the way he solved the problem.", "This is how he solved the problem.", "This is the way how he solved the problem.", "This is the way in which he solved the problem.", "This is the reason why she left."], "ans": 2, "exp": "the way와 how는 절대로 나란히 함께 쓸 수 없습니다."},
                        {"q": "다음 빈칸에 들어갈 가장 적절한 관계부사는?\n'Friday is the day ________ I feel most relaxed.'", "options": ["where", "when", "why", "how", "which"], "ans": 1, "exp": "시간 선행사 the day를 받고 뒤 문장이 완전하므로 when이 알맞습니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 어색한 것은?", "options": ["The hotel at which we stayed was cozy.", "The hotel where we stayed was cozy.", "The hotel which we stayed was cozy.", "The hotel which we stayed at was cozy.", "The hotel that we stayed at was cozy."], "ans": 2, "exp": "stay는 자동사이므로 hotel을 받으려면 전치사 at이 필요합니다. which we stayed는 불완전합니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 말로 알맞은 것은?\n'I know the reason ________ he didn't attend the meeting.'", "options": ["which", "why", "where", "how", "what"], "ans": 1, "exp": "이유 선행사 the reason 뒤에 완전한 절이 이어지므로 관계부사 why가 정답입니다."}
                    ]
                },
                {
                    "unitNo": 111,
                    "title": "SP-11. 서술형 단골: 분사구문 전환 및 영작",
                    "part": "서술형 영작",
                    "targetGrade": "중3~고2 내신",
                    "summary": "접속사+주어+동사 ➔ V-ing 변환, With + 목적어 + 분사 부대상황 서술형",
                    "formulaCards": [
                        {
                            "name": "부사절 ➔ 분사구문 3단계 변환 공식",
                            "formula": "1단계: 접속사 생략 (의미 강조 시 남겨둘 수 있음)\n2단계: 주절 주어와 같으면 부사절 주어 생략\n3단계: 동사를 현재분사(V-ing)로 변환 (시제가 앞서면 having p.p.)",
                            "example": "As he felt tired, he went to bed early. ➔ Feeling tired, he went to bed early.",
                            "trap": "부정문일 때 Not/Never는 반드시 분사 맨 앞에 위치! (Not knowing what to do)"
                        },
                        {
                            "name": "with + 목적어 + 분사 (부대상황 서술형)",
                            "formula": "with + [목적어] + [V-ing(능동)] / [p.p.(수동)] : ~한 채로, ~하면서",
                            "example": "with his arms crossed (팔짱을 낀 채로 - 팔은 꼬아진 것이므로 p.p.)\nwith the dog following her (개가 그녀를 따라오면서 - 개가 능동적으로 따르므로 V-ing)",
                            "trap": "신체 부위(눈, 다리, 팔)가 동작을 당하는 관계일 때는 반드시 과거분사(p.p.)를 사용!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_11",
                            "sentence": "He sat on the sofa listening to music with his legs crossing comfortably.",
                            "underlined": ["sat on the sofa", "listening to", "with his legs", "crossing comfortably"],
                            "wrongIndex": 3,
                            "correction": "crossed comfortably",
                            "explanation": "다리(legs)는 꼬아지는 수동의 대상이므로 crossing이 아닌 과거분사 crossed를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장을 분사구문으로 바르게 고친 것은?\n'Because I didn't have enough money, I couldn't buy the shoes.'", "options": ["Having not enough money, I couldn't buy the shoes.", "Not having enough money, I couldn't buy the shoes.", "Didn't have enough money, I couldn't buy the shoes.", "Not have enough money, I couldn't buy the shoes.", "Having enough money, I couldn't buy the shoes."], "ans": 1, "exp": "분사구문의 부정은 Not을 분사 맨 앞에 붙이므로 Not having enough money가 맞습니다."},
                        {"q": "빈칸에 들어갈 말로 가장 적절한 것은?\n'She fell asleep with the lights ________.'", "options": ["turn on", "turning on", "turned on", "turns on", "to turn on"], "ans": 2, "exp": "전등(the lights)은 켜지는 수동의 관계이므로 과거분사 turned on이 적절합니다."},
                        {"q": "다음 중 분사구문의 주어와 주절의 주어가 일치하지 않아 어법상 어색한 것은? (현수분사)", "options": ["Walking along the street, I met an old friend.", "Arriving at the station, the train had already left.", "Feeling hungry, he ate three sandwiches.", "Turning left at the corner, you will see the bank.", "Not knowing the answer, she remained silent."], "ans": 1, "exp": "2번에서 기차역에 도착한 것은 the train이 아니라 사람이므로 주어 불일치 오류(현수분사)입니다."},
                        {"q": "다음 문장의 밑줄 친 부분을 접속사가 있는 부사절로 바르게 고친 것은?\n'Weather permitting, we will go on a picnic.'", "options": ["If weather permits", "Because weather permits", "Although weather permitted", "When weather permitted", "Unless weather permits"], "ans": 0, "exp": "'날씨가 허락한다면'의 조건 부사절 If weather permits의 독립분사구문 관용 표현입니다."},
                        {"q": "빈칸에 들어갈 분사의 형태가 알맞은 것은?\n'He listened to the lecture with his eyes ________.'", "options": ["close", "closed", "closing", "to close", "closes"], "ans": 1, "exp": "눈(eyes)은 감겨지는 수동 관계이므로 과거분사 closed가 맞습니다."}
                    ]
                },
                {
                    "unitNo": 112,
                    "title": "SP-12. 서술형 킬러: 가정법 if 생략 및 도치 영작",
                    "part": "서술형 영작",
                    "targetGrade": "고1~고2 내신 킬러",
                    "summary": "If it were not for ~ ➔ Were it not for / Without / But for 영작 공식 완벽 마스터",
                    "formulaCards": [
                        {
                            "name": "'~이 없다면' 4대 동의어 영작 공식",
                            "formula": "1. If it were not for [명사]\n2. Were it not for [명사] (if 생략 도치)\n3. Without [명사]\n4. But for [명사]",
                            "example": "If it were not for water, we could not survive.\n= Were it not for water, we could not survive.\n= Without water, we could not survive.",
                            "trap": "과거 사실 반대(~이 없었더라면)는 'If it had not been for' ➔ 'Had it not been for'로 시제 변화!"
                        },
                        {
                            "name": "가정법 if 생략 시 도치 규칙",
                            "formula": "if가 생략되면 주어와 조동사/be동사의 위치가 뒤바뀜!\n• If I were you ➔ Were I you\n• If he had studied ➔ Had he studied\n• If you should need help ➔ Should you need help",
                            "example": "Had I known the truth, I would have told you.",
                            "trap": "도치되었을 때 의문문이 아니므로 문장 끝에 물음표(?)를 붙이지 않도록 주의!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_12",
                            "sentence": "Had he listened to my advice, he would not have failed the driving test.",
                            "underlined": ["Had he listened", "to my advice", "would not have", "failed"],
                            "wrongIndex": 0,
                            "correction": "Had he listened",
                            "explanation": "If he had listened에서 if가 생략되어 Had he listened로 완벽하게 도치된 올바른 문장입니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장의 밑줄 친 부분과 바꿔 쓸 수 없는 것은?\n'[Without] your support, I could not have completed the project.'", "options": ["But for", "If it had not been for", "Had it not been for", "If it were not for", "Were it not for"], "ans": 3, "exp": "주절이 could not have completed(과거완료)이므로 과거 사실을 반대하는 If it had not been for / Had it not been for / Without / But for가 와야 하며, 현재 사실을 반대하는 If it were not for는 시제가 맞지 않습니다."},
                        {"q": "다음 문장에서 if를 생략하고 바르게 도치한 것은?\n'If you should have any questions, please contact us.'", "options": ["Should you have any questions", "You should have any questions", "Did you have any questions", "Have you any questions", "Had you have any questions"], "ans": 0, "exp": "조동사 should가 주어 앞으로 나가 Should you have any questions가 됩니다."},
                        {"q": "다음 빈칸에 공통으로 들어갈 말은?\n'________ it not for your help, I would fail.'\n'________ he known the answer, he would have answered.'", "options": ["Was - Had", "Were - Had", "Were - Has", "Had - Were", "If - If"], "ans": 1, "exp": "첫 번째는 Were it not for, 두 번째는 Had he known입니다."},
                        {"q": "다음 우리말을 조건 영작할 때 알맞은 것은?\n'그녀의 조언이 없다면, 우리는 길을 잃을 것이다.'", "options": ["Were it not for her advice, we would get lost.", "Was it not for her advice, we would get lost.", "Had it not been for her advice, we will get lost.", "If it is not for her advice, we get lost.", "Without her advice, we got lost."], "ans": 0, "exp": "현재 사실 반대이므로 Were it not for ~, we would get lost가 완벽합니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["Were I rich, I would travel around the world.", "Had we started earlier, we wouldn't have missed the flight.", "Should it rain tomorrow, the match will be cancelled.", "Did he know the secret, he would be shocked.", "Without air, no living thing could exist."], "ans": 3, "exp": "일반동사 과거형의 if 생략 도치는 Did he know로 하지 않고, If he knew를 유지하거나 Were he to know 형태로 씁니다."}
                    ]
                },
                {
                    "unitNo": 113,
                    "title": "SP-13. 서술형 빈출: so ~ that ... can't 구문",
                    "part": "서술형 영작",
                    "targetGrade": "중2~고1 내신",
                    "summary": "원인과 결과 구문 서술형, such ~ that 명사 어순 변환 및 서술형 영작",
                    "formulaCards": [
                        {
                            "name": "so + 형용사/부사 + that vs such + a + 형용사 + 명사 + that",
                            "formula": "• so + [형용사/부사] + that + S + V : 너무 ~해서 ...하다\n• such + a/an + [형용사] + [명사] + that + S + V : 대단히 ~한 명사여서 ...하다",
                            "example": "He ran so fast that nobody could catch him.\nIt was such a hot day that we went swimming.",
                            "trap": "so a hot day (X) ➔ so hot a day (O) / such hot a day (X) ➔ such a hot day (O) 어순 낚시 주의!"
                        },
                        {
                            "name": "so that 붙어있을 때 (목적: ~하기 위하여)",
                            "formula": "S + V + so that + S + can/may + V : ~하기 위해서 (= in order that)",
                            "example": "I woke up early so that I could catch the first train.",
                            "trap": "so와 that이 떨어져 있으면 '원인/결과(너무~해서)', 붙어있으면 '목적(~하기 위해')!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_13",
                            "sentence": "The movie was such boring that half of the audience left before the end.",
                            "underlined": ["The movie", "was such boring", "that half", "left before the end"],
                            "wrongIndex": 1,
                            "correction": "was so boring",
                            "explanation": "뒤에 단독 형용사 boring만 있으므로 such가 아닌 so를 써야 합니다. (such는 뒤에 명사가 필요)"
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장의 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'It was ________ cold that the lake froze.'\n'She is ________ a kind girl that everyone loves her.'", "options": ["so - such", "such - so", "so - so", "such - such", "too - so"], "ans": 0, "exp": "첫 번째는 형용사 cold 앞이므로 so, 두 번째는 a kind girl 앞이므로 such입니다."},
                        {"q": "다음 문장과 의미가 같은 것은?\n'He is too young to drive a car.'", "options": ["He is so young that he can drive a car.", "He is so young that he cannot drive a car.", "He is such young that he cannot drive a car.", "He is young enough to drive a car.", "He is so young to drive a car."], "ans": 1, "exp": "too ~ to 구문은 so ~ that S cannot 구문과 같습니다."},
                        {"q": "어순이 올바른 문장은?", "options": ["It was such nice a day that we went out.", "It was so a nice day that we went out.", "It was such a nice day that we went out.", "It was so nice day that we went out.", "It was too nice a day that we went out."], "ans": 2, "exp": "such + a/an + 형용사 + 명사 어순인 such a nice day가 올바릅니다."},
                        {"q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'She turned on the subtitles ________ she could understand the French movie.'", "options": ["so that", "such that", "too that", "as that", "in that"], "ans": 0, "exp": "~하기 위해서라는 목적을 나타내는 'so that + 주어 + 조동사'가 맞습니다."},
                        {"q": "다음 중 밑줄 친 부분의 쓰임이 어색한 것은?", "options": ["The problem was so difficult that I gave up.", "She spoke so fast that I couldn't understand.", "He made such a big mistake that he was fired.", "It was so delicious food that we ate it all.", "They walked so quietly that no one noticed."], "ans": 3, "exp": "food는 셀 수 없는 명사이므로 such delicious food로 써야 합니다."}
                    ]
                },
                {
                    "unitNo": 114,
                    "title": "SP-14. 서술형 복병: 5형식 사역/지각동사 목적격 보어",
                    "part": "서술형 영작",
                    "targetGrade": "중2~고1 내신",
                    "summary": "make/have/let + O + 동사원형, see/hear/feel + O + V-ing/p.p. 서술형 조건 영작",
                    "formulaCards": [
                        {
                            "name": "사역동사(make, have, let)의 목적격 보어",
                            "formula": "• 목적어와 능동 관계 ➔ [동사원형 (Root)]\n• 목적어와 수동 관계 ➔ [과거분사 (p.p.)]",
                            "example": "My mom made me clean my room. (능동: clean)\nI had my bicycle repaired yesterday. (수동: repaired - 자전거는 수리당함)",
                            "trap": "사역동사라고 무조건 동사원형을 쓰면 100% 감점! 목적어가 동작을 당하면 무조건 p.p.!"
                        },
                        {
                            "name": "지각동사(see, watch, hear, feel, notice)의 목적격 보어",
                            "formula": "• 능동 동작 진행 중 ➔ [현재분사 (V-ing)] 또는 [동사원형]\n• 수동 동작 ➔ [과거분사 (p.p.)]",
                            "example": "I heard someone calling my name. (calling / call)\nI heard my name called in the crowd. (called - 내 이름은 불려짐)",
                            "trap": "지각동사 목적격 보어 자리에는 절대로 to부정사를 쓸 수 없습니다!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_14",
                            "sentence": "The teacher made the students to write an essay about environmental protection.",
                            "underlined": ["The teacher", "made the students", "to write", "about environmental"],
                            "wrongIndex": 2,
                            "correction": "write",
                            "explanation": "사역동사 make의 목적격 보어로 능동 관계일 때는 to부정사가 아니라 동사원형 write를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 형태로 가장 알맞은 것은?\n'I had my smartphone ________ at the service center yesterday.'", "options": ["repair", "repairs", "repaired", "repairing", "to repair"], "ans": 2, "exp": "스마트폰(목적어)은 수리되는 수동의 대상이므로 과거분사 repaired가 정답입니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["She let him drive her new car.", "I saw the boy steal the apple.", "My father helped me to wash the car.", "The police made the driver to stop.", "We felt the ground shake."], "ans": 3, "exp": "사역동사 make 뒤의 목적격 보어는 to stop이 아닌 동사원형 stop이어야 합니다."},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I heard someone ________ on the door.' / 'He watched the sun ________.'", "options": ["knock - rise", "to knock - to rise", "knocked - risen", "knocks - rises", "to knock - rising"], "ans": 0, "exp": "지각동사 heard와 watched 뒤 능동 목적격 보어로 동사원형 knock과 rise가 적절합니다."},
                        {"q": "준사역동사 help의 목적격 보어로 올 수 있는 형태 2가지는?", "options": ["동사원형, to부정사", "동사원형, 현재분사", "to부정사, 과거분사", "현재분사, 과거분사", "동사원형, 동명사"], "ans": 0, "exp": "help는 목적격 보어로 동사원형과 to부정사를 모두 취할 수 있습니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'She heard her own name ________ on the radio.'", "options": ["mention", "mentioning", "mentioned", "to mention", "mentions"], "ans": 2, "exp": "그녀의 이름이 라디오에서 언급되는 수동의 관계이므로 과거분사 mentioned가 맞습니다."}
                    ]
                },
                {
                    "unitNo": 115,
                    "title": "SP-15. 서술형 도치: 부정어구 & 장소부사구 도치 영작",
                    "part": "서술형 영작",
                    "targetGrade": "고1~고2 내신 킬러",
                    "summary": "Never/Hardly/Little + 조동사/be/do + S + V 도치 영작 서술형 완벽 대비",
                    "formulaCards": [
                        {
                            "name": "부정어구 도치 공식 (의문문 어순과 100% 동일)",
                            "formula": "부정어 (Never, Rarely, Seldom, Little, Hardly, Scarcely, Not only) + [조동사/be/do] + [주어] + [동사원형] ...",
                            "example": "I have never seen such a sunset. ➔ Never have I seen such a sunset.\nHe little dreamed that he would win. ➔ Little did he dream that he would win.",
                            "trap": "일반동사일 때 do/does/did를 주어 앞으로 보내야 하는데, 동사 자체를 앞으로 보내는 실수 주의!"
                        },
                        {
                            "name": "장소 부사구 도치 공식",
                            "formula": "장소 부사구 + [동사] + [주어] (단, 주어가 대명사이면 도치 안 됨: 부사구 + 대명사주어 + 동사)",
                            "example": "On the hill stands a white castle. (명사 주어 ➔ 도치)\nHere comes the bus. (명사 주어) vs Here it comes. (대명사 주어 it ➔ 도치 안 됨)",
                            "trap": "주어가 대명사일 때 Here comes it(X)이라고 도치하는 실수 주의!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_15",
                            "sentence": "Rarely she eats fast food because she cares about her health.",
                            "underlined": ["Rarely", "she eats", "fast food", "cares about"],
                            "wrongIndex": 1,
                            "correction": "does she eat",
                            "explanation": "부정어 Rarely가 문두로 나갔으므로 의문문 어순으로 도치되어 does she eat으로 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장을 부정어 Never를 문두로 빼서 바르게 도치한 것은?\n'I have never heard such a beautiful melody.'", "options": ["Never I have heard such a beautiful melody.", "Never have I heard such a beautiful melody.", "Never heard I such a beautiful melody.", "Never did I have heard such a beautiful melody.", "Never I heard such a beautiful melody."], "ans": 1, "exp": "부정어 + have(조동사) + I(주어) + heard 어순이 올바릅니다."},
                        {"q": "다음 빈칸에 들어갈 어순으로 알맞은 것은?\n'Little ________ that his speech would inspire millions of people.'", "options": ["he knew", "did he know", "knew he", "he did know", "was he known"], "ans": 1, "exp": "부정어 Little 뒤 일반동사 과거형이므로 did he know가 맞습니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["Under the tree sat an old gentleman.", "In the center of the town stands a monument.", "Here comes the bus.", "Here comes he.", "Down came the rain."], "ans": 3, "exp": "주어가 대명사(he)일 때는 부사구 도치가 일어나지 않으므로 Here he comes가 맞습니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'Not only ________ fluent in English, but she also speaks German.'", "options": ["she is", "is she", "does she", "she does", "she has"], "ans": 1, "exp": "Not only 부정어구 도치이므로 be동사가 주어 앞으로 나와 is she가 됩니다."},
                        {"q": "다음 문장을 도치 구문으로 바르게 전환한 것은?\n'A huge oak tree stood in front of the house.'", "options": ["In front of the house a huge oak tree stood.", "In front of the house stood a huge oak tree.", "In front of the house did stand a huge oak tree.", "Stood a huge oak tree in front of the house.", "A huge oak tree in front of the house stood."], "ans": 1, "exp": "장소 부사구(In front of the house) + 동사(stood) + 주어(a huge oak tree) 도치가 올바릅니다."}
                    ]
                },
                {
                    "unitNo": 116,
                    "title": "SP-16. 서술형 감점 방어: 3대 실수 클리닉",
                    "part": "서술형 영작",
                    "targetGrade": "중·고등 내신 공통",
                    "summary": "3인칭 단수 -s 누락, 과거시제 불규칙 철자 변형, 관사 a/an 누락 등 단골 감점 요인 완벽 방어",
                    "formulaCards": [
                        {
                            "name": "서술형 0점 방지 3대 셀프 검독 체크리스트",
                            "formula": "1. [수일치]: 주어가 3인칭 단수인데 동사에 -s/-es를 빠뜨리지 않았는가?\n2. [시제일치]: 주절이 과거인데 종속절에 현재를 쓰거나, 불규칙 과거형 스펠링을 틀리지 않았는가?\n3. [관사 및 명사 수]: 셀 수 있는 단수 명사 앞에 a/an을 빠뜨리거나 복수 -s를 누락하지 않았는가?",
                            "example": "He write a letter yesterday. (X: 시제·철자 오류)\n➔ He wrote a letter yesterday. (O)",
                            "trap": "서술형 문제 풀이 후 마지막 10초 동안 반드시 '수·시제·관사' 3가지만 확인해도 5점 이상 방어!"
                        },
                        {
                            "name": "혼동되는 불규칙 동사 3단 변화 주의보",
                            "formula": "• find - found - found (찾다) vs found - founded - founded (설립하다)\n• fall - fell - fallen (떨어지다) vs fell - felled - felled (쓰러뜨리다)\n• choose - chose - chosen / lose - lost - lost",
                            "example": "The company was founded in 1995.",
                            "trap": "과거형 철자 혼동으로 인한 서술형 감점 빈출!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_16",
                            "sentence": "Each of the participants were asked to submit their feedback by tomorrow.",
                            "underlined": ["Each of", "participants", "were asked", "to submit"],
                            "wrongIndex": 2,
                            "correction": "was asked",
                            "explanation": "문장의 주어는 Each(단수 취급)이므로 복수 동사 were가 아니라 단수 동사 was를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 서술형 답안에서 감점 처리를 당하지 않는 완벽한 문장은?", "options": ["She don't understand the reason.", "One of my best friends live in Paris.", "He bought an umbrella because it was raining.", "I have three brother and two sisters.", "She cutted the paper into small pieces."], "ans": 2, "exp": "3번은 시제, 관사, 수일치 모두 완벽합니다. (1: doesn't, 2: lives, 4: brothers, 5: cut)"},
                        {"q": "빈칸에 들어갈 말로 알맞은 것은?\n'Harvard University was ________ in 1636.'", "options": ["find", "found", "founded", "finding", "founding"], "ans": 2, "exp": "'설립되다'는 뜻이므로 found(설립하다)의 과거분사 founded가 정답입니다."},
                        {"q": "다음 중 주어와 동사의 수일치가 올바른 것은?", "options": ["Every student have a locker.", "The news are very shocking.", "Neither Tom nor his friends were present.", "Ten miles are a long distance to walk.", "Mathematics are my favorite subject."], "ans": 2, "exp": "Neither A nor B는 B(his friends)에 수일치하므로 were가 올바릅니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 과거형 스펠링이 바른 것은?\n'She ________ a beautiful necklace for her mother yesterday.'", "options": ["chosed", "chose", "chosen", "choosed", "choose"], "ans": 1, "exp": "choose의 과거형은 불규칙 변화 chose입니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 틀린 것은?", "options": ["A number of students are waiting outside.", "The number of cars is increasing.", "Physics is an interesting subject.", "Fifty dollars are too much for this shirt.", "Bread and butter is his favorite breakfast."], "ans": 3, "exp": "Fifty dollars는 금액 전체를 하나의 단위로 보아 단수 동사 is로 받아야 합니다."}
                    ]
                }
            ]
        },

        # =====================================================================
        # Course 3: 🎯 수능 29번 3초 컷 킬러 특강 (CSAT Master • 6단원)
        # =====================================================================
        {
            "level": 103,
            "levelCode": "sp_csat",
            "levelName": "수능 29번 킬러 특강",
            "targetGrade": "수능 1등급 3초 컷",
            "badge": "수능 킬러",
            "color": "indigo",
            "themeColor": "#4f46e5",
            "isSpecial": True,
            "courseCategory": "csat",
            "desc": "역대 수능·평가원 29번 어법 빈출 6대 출제 공식 및 3초 판별법 마스터 (6단원)",
            "units": [
                {
                    "unitNo": 117,
                    "title": "SP-17. [공식 1] 동사 vs 준동사 (문장 구조 분석)",
                    "part": "수능 킬러",
                    "targetGrade": "수능 1등급",
                    "summary": "역대 수능 29번 출제 1위! 한 문장에 접속사 없이 본동사는 오직 1개! 진짜 동사 자리 찾기",
                    "formulaCards": [
                        {
                            "name": "수능 29번 1순위: '동사 자리 vs 준동사 자리'",
                            "formula": "문장의 본동사 개수 = [접속사/관계사의 개수 + 1]\n접속사가 없으면 문장에 본동사는 무조건 1개여야 함!",
                            "example": "The scientist, along with his assistants, [discovering / discovered] a new vaccine. (본동사가 없으므로 discovered가 정답)",
                            "trap": "주어와 동사 사이에 긴 수식어구(전치사구, 분사구, 관계사절)를 넣어 본동사를 V-ing로 위장하는 출제 함정 1위!"
                        },
                        {
                            "name": "3초 컷 판별 프로세스",
                            "formula": "1. 밑줄 친 단어가 동사/준동사 형태인지 확인\n2. 문장 맨 앞부터 주어를 찾고 수식어구 괄호 묶기 ( ) \n3. 문장에 진짜 본동사가 이미 존재하는지 확인",
                            "example": "The books (written by the famous author) [was / were] translated into 20 languages.",
                            "trap": "해석으로 풀려고 하지 말고, 문장 구조에서 동사의 존재 여부를 구조적으로 판별할 것!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_17",
                            "sentence": "The ability of humans to communicate complex abstract ideas through language [distinguishing / distinguishes] them from all other species.",
                            "underlined": ["ability of humans", "to communicate", "distinguishing", "from all other"],
                            "wrongIndex": 2,
                            "correction": "distinguishes",
                            "explanation": "문장의 주어는 The ability이고, to communicate~language는 수식어구입니다. 문장 전체의 본동사가 없으므로 distinguishing을 본동사 distinguishes로 고쳐야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'The ancient manuscripts, preserved in the monastery for centuries, ①[providing] valuable insights into medieval European history, ②[which] historians ③[continue] to study today.'", "options": ["① providing", "② which", "③ continue", "for centuries", "today"], "ans": 0, "exp": "The ancient manuscripts가 주어이고, preserved~centuries는 분사구입니다. 주절의 본동사가 없으므로 providing을 본동사 provide로 고쳐야 합니다."},
                        {"q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'Anyone ________ to apply for the international scholarship must submit two recommendation letters.'", "options": ["wishes", "wishing", "wished", "is wishing", "will wish"], "ans": 1, "exp": "문장의 본동사 must submit이 이미 있으므로 빈칸은 Anyone을 수식하는 준동사(wishing) 자리입니다."},
                        {"q": "다음 중 밑줄 친 부분이 어법상 올바른 것은?", "options": ["The man standing near the door [to be] my uncle.", "The proposal suggested by the committee [approved] yesterday.", "All students desiring to participate [must register] by Friday.", "The books ordered online last week [arriving] this morning.", "The sound of church bells [echoed] through the silent valley."], "ans": 2, "exp": "All students(주어) + desiring to participate(수식어) + must register(본동사) 구조가 완벽합니다."},
                        {"q": "다음 문장의 밑줄 친 부분 중 어법상 어색한 것은?\n'The government, after months of debate, ①[decided] to implement the new policy, ②[aiming] to reduce traffic congestion, ③[created] a major controversy among citizens.'", "options": ["① decided", "② aiming", "③ created", "after months of", "among citizens"], "ans": 2, "exp": "③번 자리에 접속사 없이 과거동사 created가 올 수 없으므로, 분사구문 creating 또는 and created로 고쳐야 합니다."},
                        {"q": "수능 어법에서 '본동사 자리'를 찾기 위한 황금 공식은?", "options": ["본동사 개수 = 접속사 개수 - 1", "본동사 개수 = 접속사 개수 + 1", "본동사는 항상 문장의 3번째 단어에 온다", "본동사는 수동태가 될 수 없다", "본동사 뒤에는 반드시 목적어가 온다"], "ans": 1, "exp": "문장 내 본동사의 개수는 접속사/관계사 개수에 1을 더한 것과 일치합니다."}
                    ]
                },
                {
                    "unitNo": 118,
                    "title": "SP-18. [공식 2] that vs what vs which 끝장 판별법",
                    "part": "수능 킬러",
                    "targetGrade": "수능 1등급",
                    "summary": "뒤 문장의 완전/불완전 여부와 선행사 유무로 3초 만에 답 고르는 수능 29번 단골 킬러",
                    "formulaCards": [
                        {
                            "name": "that vs what 3초 판별 알고리즘",
                            "formula": "1단계: 앞을 본다 (선행사 명사가 있는가?)\n  • 선행사 있음 ➔ [that 또는 which]\n  • 선행사 없음 ➔ 2단계로 이동\n2단계: 뒤를 본다 (문장이 완전한가?)\n  • 뒤가 완전 ➔ 접속사 [that]\n  • 뒤가 불완전 ➔ 관계대명사 [what] (~하는 것)",
                            "example": "I know [that] she is honest. (선행사X, 뒤 완전 ➔ 접속사 that)\nI know [what] she likes. (선행사X, likes의 목적어 빠짐 ➔ what)",
                            "trap": "what 앞에는 절대 선행사(명사)가 올 수 없음! (what 자체가 the thing which를 포함하기 때문)"
                        },
                        {
                            "name": "동격의 that vs 관계대명사 that",
                            "formula": "• 동격 that : 앞 명사(fact, idea, news, evidence) + 뒤 [완전한 문장]\n• 관대 that : 앞 명사(선행사) + 뒤 [주어나 목적어 빠진 불완전한 문장]",
                            "example": "the news that he died (동격 that: 뒤 완전)\nthe news that he heard (관계대명사 that: heard의 목적어 빠짐)",
                            "trap": "추상명사 뒤의 that이 동격인지 관계사인지 뒤 문장의 완전성으로 판별할 것!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_18",
                            "sentence": "Psychologists have discovered what people who exercise regularly experience less anxiety than those who are inactive.",
                            "underlined": ["have discovered", "what people", "who exercise", "less anxiety"],
                            "wrongIndex": 1,
                            "correction": "that people",
                            "explanation": "discovered 뒤에 이어지는 절(people who exercise regularly experience less anxiety...)이 완전한 문장이므로 what이 아닌 접속사 that을 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'This is ________ I have been looking for.'\n'I believe ________ everything happens for a reason.'", "options": ["what - that", "that - what", "which - what", "that - which", "what - which"], "ans": 0, "exp": "첫 번째는 선행사 없고 looking for의 목적어가 빠졌으므로 what, 두 번째는 선행사 없고 뒤 문장이 완전하므로 접속사 that입니다."},
                        {"q": "다음 중 밑줄 친 'that'의 성격이 '동격의 접속사'인 것은?", "options": ["The rumor [that] spread quickly was false.", "The fact [that] the earth is round is known to all.", "This is the phone [that] I wanted to buy.", "I know the girl [that] won first prize.", "The car [that] he drives is very old."], "ans": 1, "exp": "the fact 뒤에 'the earth is round'라는 완전한 절이 이어지므로 동격의 that입니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 가장 적절한 것은?\n'Scientists are trying to understand ________ causes volcanic eruptions.'", "options": ["that", "what", "which", "whose", "where"], "ans": 1, "exp": "선행사가 없고 causes의 주어가 빠진 불완전한 절을 이끌어 understand의 목적어가 되어야 하므로 what이 정답입니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 틀린 것은?", "options": ["He didn't remember what he had promised.", "She told me that she was leaving.", "The reason what he failed was laziness.", "The gift that she gave me was special.", "What surprised us was his sudden decision."], "ans": 2, "exp": "선행사 The reason이 있으므로 what을 쓸 수 없으며, why 또는 that이어야 합니다."},
                        {"q": "관계대명사 'what'에 대한 설명으로 옳지 않은 것은?", "options": ["the thing(s) which로 풀어서 쓸 수 있다.", "앞에 반드시 수식하는 선행사 명사가 있어야 한다.", "뒤에는 주어나 목적어가 빠진 불완전한 문장이 온다.", "what이 이끄는 절은 문장에서 주어, 목적어, 보어 역할을 한다.", "'~하는 것'으로 해석된다."], "ans": 1, "exp": "what은 선행사를 자체에 포함하고 있으므로 앞에 선행사가 올 수 없습니다."}
                    ]
                },
                {
                    "unitNo": 119,
                    "title": "SP-19. [공식 3] 능동(V-ing) vs 수동(p.p.) 태 판별",
                    "part": "수능 킬러",
                    "targetGrade": "수능 1등급",
                    "summary": "수식받는 명사/주어와의 의미상 관계 및 뒤따르는 목적어 유무로 태를 초고속 판별하는 비법",
                    "formulaCards": [
                        {
                            "name": "분사의 능동 vs 수동 3초 판별 공식",
                            "formula": "1. 수식받는 [명사]를 찾는다.\n2. 그 명사가 직접 행동을 하는 주체인가? ➔ [V-ing (현재분사)]\n3. 그 명사가 행동을 당하는 대상인가? ➔ [p.p. (과거분사)]",
                            "example": "falling leaves (떨어지고 있는 나뭇잎 - 능동·진행)\nfallen leaves (이미 다 떨어진 나뭇잎 - 완료·수동)\nthe boy (inviting / invited) to the party ➔ 초대받은 소년이므로 invited!",
                            "trap": "타동사의 분사 뒤에 목적어가 남아있으면 능동(V-ing), 목적어가 없으면 수동(p.p.)!"
                        },
                        {
                            "name": "감정 유발 분사 킬러 공식",
                            "formula": "• 사람 주어/명사 ➔ 감정을 느낌 ➔ [-ed (p.p.)] (I am interested, bored, excited)\n• 사물 주어/명사 ➔ 감정을 유발함 ➔ [-ing] (The movie is interesting, boring, exciting)",
                            "example": "He was disappointing with the result. (X) ➔ He was disappointed with the result. (O)",
                            "trap": "사물이 주어일 때 -ed를 쓰거나, 사람이 감정을 느낄 때 -ing를 쓰는 감정 분사 낚시 주의!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_19",
                            "sentence": "The audience remained completely captivating throughout the astonishing magic performance.",
                            "underlined": ["The audience", "completely captivating", "throughout", "magic performance"],
                            "wrongIndex": 1,
                            "correction": "captivated",
                            "explanation": "관객(The audience)은 마술 공연에 의해 매료된 감정을 느끼는 주체이므로 현재분사 captivating이 아니라 과거분사 captivated를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'The news was so ________ that everyone was ________.'", "options": ["shocked - shocking", "shocking - shocked", "shocking - shocking", "shocked - shocked", "shock - shocking"], "ans": 1, "exp": "뉴스(The news)는 충격을 유발하므로 shocking, 사람(everyone)은 충격을 받으므로 shocked입니다."},
                        {"q": "다음 괄호 안에서 어법상 알맞은 것은?\n'We received an email [confirming / confirmed] our flight reservation.'", "options": ["confirming", "confirmed", "confirm", "confirms", "to be confirmed"], "ans": 0, "exp": "이메일이 뒤의 목적어(our flight reservation)를 확인해 주는 능동 관계이므로 confirming이 정답입니다."},
                        {"q": "다음 중 밑줄 친 부분의 쓰임이 어색한 것은?", "options": ["an exciting soccer match", "a bored lecture", "a satisfying meal", "a confusing explanation", "a frightened child"], "ans": 1, "exp": "강의(lecture)는 지루함을 유발하는 사물이므로 boring lecture여야 합니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'Many artifacts ①[discovered] in Egypt, ②[dating] back to 3000 BC, are ③[displaying] in the national museum today.'", "options": ["① discovered", "② dating", "③ displaying", "artifacts", "museum"], "ans": 2, "exp": "유물(artifacts)은 박물관에 전시되는 수동의 대상이므로 displaying이 아닌 displayed가 되어야 합니다."},
                        {"q": "타동사의 분사 뒤에 목적어가 존재할 때의 일반적인 규칙은?", "options": ["반드시 과거분사(p.p.)를 쓴다", "반드시 능동의 현재분사(V-ing)를 쓴다", "동사원형을 쓴다", "to부정사로 바꾼다", "전치사를 생략한다"], "ans": 1, "exp": "타동사가 목적어를 거느리고 있을 때는 능동의 현재분사(V-ing) 형태가 옵니다."}
                    ]
                },
                {
                    "unitNo": 120,
                    "title": "SP-20. [공식 4] 대명사 수일치 (it vs them / that vs those)",
                    "part": "수능 킬러",
                    "targetGrade": "수능 1등급",
                    "summary": "대명사가 대신 가리키는 대상(단수 vs 복수)을 정확히 추적하여 1초 만에 일치시키는 공식",
                    "formulaCards": [
                        {
                            "name": "수능 단골 대명사 비교: that vs those",
                            "formula": "비교 대상의 반복을 피하기 위한 대명사:\n• 앞 명사가 단수 명사 ➔ [that of ...]\n• 앞 명사가 복수 명사 ➔ [those of ...]",
                            "example": "The climate of Korea is milder than [that] of Russia. (that = the climate 단수)\nThe ears of rabbits are longer than [those] of cats. (those = the ears 복수)",
                            "trap": "비교 구문에서 that 자리에 this를 쓰거나, those 자리에 these를 쓰면 무조건 오답!"
                        },
                        {
                            "name": "대명사 it vs them 추적법",
                            "formula": "대명사에 밑줄이 그어져 있으면 반드시 해석을 통해 '그것이 가리키는 진짜 명사'를 앞 문장에서 찾아 단/복수를 대조할 것!",
                            "example": "Companies must listen to their customers and satisfy [their / its] needs.",
                            "trap": "소유격 대명사 its(단수) vs their(복수) 수일치도 수능 단골 킬러!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_20",
                            "sentence": "The eyes of nocturnal animals are significantly larger than that of diurnal animals.",
                            "underlined": ["nocturnal animals", "significantly larger", "than that of", "diurnal animals"],
                            "wrongIndex": 2,
                            "correction": "than those of",
                            "explanation": "비교 대상이 복수 명사인 The eyes이므로 단수 대명사 that이 아니라 복수 대명사 those를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'The energy consumption of electric cars is lower than ________ of gasoline cars.'", "options": ["it", "that", "this", "those", "these"], "ans": 1, "exp": "비교되는 대상이 단수 명사 The energy consumption이므로 that이 정답입니다."},
                        {"q": "다음 밑줄 친 부분 중 가리키는 대상과의 수일치가 잘못된 것은?", "options": ["Each student brought their own laptop.", "The team celebrated its victory.", "Trees absorb carbon dioxide and release [it] as oxygen.", "The books were heavy, so I carried [them] in a backpack.", "A smartphone is useful, but [it] can be addictive."], "ans": 2, "exp": "carbon dioxide는 기체(단수)이므로 it으로 받는 것이 맞지만, 문맥상 oxygen으로 방출되는 것이 아닌 산소를 방출하는 것이며, 만약 복수 명사를 대신할 땐 them이어야 합니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'The customs of ancient Greece were quite different from ________ of modern society.'", "options": ["that", "those", "it", "this", "them"], "ans": 1, "exp": "복수 명사인 The customs를 대신하므로 those가 정답입니다."},
                        {"q": "대명사 밑줄 어법 문제 풀이 시 가장 먼저 해야 할 행동은?", "options": ["단어의 철자 세기", "대명사가 대신 가리키는 앞선 명사를 찾아 단수/복수 확인", "문장을 수동태로 바꾸기", "대명사를 부사로 바꾸기", "마침표 위치 확인"], "ans": 1, "exp": "대명사는 지칭 대상의 단수/복수 여부를 일치시키는 것이 핵심입니다."},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["The population of Seoul is larger than Tokyo.", "The population of Seoul is larger than that of Tokyo.", "The population of Seoul is larger than those of Tokyo.", "The population of Seoul is larger than this of Tokyo.", "The population of Seoul is larger than them of Tokyo."], "ans": 1, "exp": "서울의 인구와 도쿄의 인구를 비교해야 하므로 단수 대명사 that of Tokyo가 정확합니다."}
                    ]
                },
                {
                    "unitNo": 121,
                    "title": "SP-21. [공식 5] 형용사 vs 부사 자리 판별법",
                    "part": "수능 킬러",
                    "targetGrade": "수능 1등급",
                    "summary": "2형식/5형식 보어 자리에는 절대 부사가 올 수 없다! 형용사 vs 부사 판별법",
                    "formulaCards": [
                        {
                            "name": "보어 자리는 형용사, 수식어 자리는 부사!",
                            "formula": "• 주어 + 불완전동사(remain, stay, keep, look, feel) + [형용사 보어]\n• 주어 + 동사 + 목적어 + [형용사 목적격보어] (make, keep, leave, find)",
                            "example": "He kept the room warm. (O: 방을 따뜻하게 유지했다)\nHe kept the room warmly. (X: 우리말 해석이 '~하게'여도 부사 불가!)",
                            "trap": "우리말 해석으로 풀면 '~하게'로 번역되어 부사(-ly)를 고르기 쉬우므로, 문장 성분이 '보어'인지 확인 필수!"
                        },
                        {
                            "name": "형용사와 부사 형태가 같거나 뜻이 달라지는 어휘",
                            "formula": "• hard (열심히, 단단한) vs hardly (거의 ~않다)\n• late (늦게, 늦은) vs lately (최근에)\n• high (높게, 높은) vs highly (매우, 대단히)\n• near (가까이) vs nearly (거의)",
                            "example": "He worked hardly. (X: 그는 거의 일하지 않았다) ➔ He worked hard. (O: 열심히 일했다)",
                            "trap": "형태에 -ly가 붙어 뜻이 완전히 달라지는 특수 부사 4총사 낚시 빈출!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_21",
                            "sentence": "Regular meditation helps individuals keep their minds calmly even during severe crises.",
                            "underlined": ["Regular meditation", "keep their minds", "calmly", "during crises"],
                            "wrongIndex": 2,
                            "correction": "calm",
                            "explanation": "keep + 목적어(their minds) + 목적격 보어 자리이므로 부사 calmly가 아닌 형용사 calm을 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'I have been so busy ________ that I haven't had time to call you.'", "options": ["late", "lately", "latest", "later", "lateness"], "ans": 1, "exp": "'최근에'라는 뜻의 부사는 lately입니다."},
                        {"q": "다음 중 밑줄 친 부분의 쓰임이 어법상 올바른 것은?", "options": ["He tried hardly to pass the exam.", "The eagle flew highly in the sky.", "She arrived lately for the interview.", "I nearly missed the bus this morning.", "The movie was real interesting."], "ans": 3, "exp": "nearly는 '거의'라는 뜻의 부사로 '거의 버스를 놓칠 뻔했다'는 문맥에 올바르게 쓰였습니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 형태로 적절한 것은?\n'Please keep the door ________.'", "options": ["lock", "locked", "locking", "to lock", "lockedly"], "ans": 1, "exp": "문(door)이 잠겨진 상태로 유지되는 것이므로 과거분사 형용사 locked가 알맞습니다."},
                        {"q": "다음 중 부사(-ly)가 들어갈 수 없는 자리는?", "options": ["일반동사를 수식하는 자리", "문장 전체를 수식하는 문두 자리", "다른 형용사나 부사를 수식하는 자리", "5형식 동사 make의 목적격 보어 자리", "분사를 수식하는 자리"], "ans": 3, "exp": "목적격 보어 자리에는 명사나 형용사만 올 수 있으며 부사는 절대 불가합니다."},
                        {"q": "다음 문장의 밑줄 친 부분 중 어색한 것은?\n'The food in this restaurant tastes ①[delicious] and looks ②[wonderfully], but the service is ③[terrible].'", "options": ["① delicious", "② wonderfully", "③ terrible", "restaurant", "service"], "ans": 1, "exp": "감각동사 looks 뒤 주격 보어 자리이므로 부사 wonderfully가 아니라 형용사 wonderful이어야 합니다."}
                    ]
                },
                {
                    "unitNo": 122,
                    "title": "SP-22. [공식 6] 병렬 구조 (Parallelism) 낚시 탈출",
                    "part": "수능 킬러",
                    "targetGrade": "수능 1등급",
                    "summary": "and/but/or 뒤의 형태는 해석상 짝을 이루는 어구와 문법적 형태 일치! 수능 29번 단골",
                    "formulaCards": [
                        {
                            "name": "등위접속사(and/but/or)의 저울 원리",
                            "formula": "A and B 구조에서 A와 B는 문법적으로 대등한 형태여야 함!\n• to V and (to) V\n• V-ing and V-ing\n• 형용사 and 형용사 / 명사 and 명사",
                            "example": "He likes swimming, hiking, and to run. (X) ➔ swimming, hiking, and running. (O)",
                            "trap": "and 뒤에 있는 단어의 형태만 보지 말고, 해석을 통해 '누구와 짝을 이루는지' 짝꿍(A)을 반드시 찾을 것!"
                        },
                        {
                            "name": "상관접속사의 병렬 구조",
                            "formula": "• not only A but also B\n• either A or B / neither A nor B\n• both A and B\n• not A but B",
                            "example": "She decided not only to study abroad but also to learn a new language.",
                            "trap": "A 자리에 to부정사가 오면 B 자리에도 to부정사(또는 동사원형)가 와야 함!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_22",
                            "sentence": "The research involved collecting data, analyzing trends, and to publish the final report.",
                            "underlined": ["The research", "collecting data", "analyzing trends", "to publish"],
                            "wrongIndex": 3,
                            "correction": "publishing",
                            "explanation": "동명사 목적어 collecting, analyzing과 병렬 구조를 이루어야 하므로 to publish를 publishing으로 고쳐야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 병렬 구조가 올바르게 이루어진 문장은?", "options": ["She likes swimming, dancing, and to sing.", "He was smart, handsome, and kindness.", "To know is one thing, and practicing is another.", "The manager asked us to finish the report and send it by noon.", "I enjoy reading books and watch movies."], "ans": 3, "exp": "to finish와 (to) send가 to부정사 병렬 구조를 올바르게 이루고 있습니다."},
                        {"q": "다음 빈칸에 들어갈 알맞은 형태는?\n'You can improve your English by reading newspapers, listening to podcasts, and ________ with native speakers.'", "options": ["talk", "talking", "talked", "to talk", "talks"], "ans": 1, "exp": "전치사 by 뒤에 reading, listening과 병렬을 이루는 동명사 talking이 와야 합니다."},
                        {"q": "다음 문장의 밑줄 친 부분 중 어법상 어색한 것은?\n'The athlete not only broke the world record ①[but] also ②[inspiring] millions of young sports fans ③[across] the globe.'", "options": ["① but", "② inspiring", "③ across", "broke", "millions of"], "ans": 1, "exp": "과거동사 broke와 병렬 구조를 이루어야 하므로 inspiring이 아니라 과거동사 inspired여야 합니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["Either you or he is responsible for the mistake.", "Both my brother and my sister are doctors.", "She prefers walking to drive.", "Not only the students but also the teacher was excited.", "He taught us to think critically and to express ourselves clearly."], "ans": 2, "exp": "prefer A to B에서 to는 전치사이므로 walking과 대등하게 driving이 와야 합니다."},
                        {"q": "수능 어법에서 and/or/but 뒤에 밑줄이 있을 때 가장 먼저 취해야 할 문제 풀이 전략은?", "options": ["해석을 통해 밑줄 친 단어가 문장 내 어떤 어구와 짝을 이루는지 확인", "무조건 동명사(-ing)로 고치기", "문장의 주어를 찾아서 생략하기", "앞 단어의 품사만 기계적으로 복사하기", "접속사를 지우기"], "ans": 0, "exp": "병렬 구조 문제는 기계적인 형태 복사가 아니라, 문맥상 무엇과 대등하게 연결되는지 짝꿍(A)을 찾는 것이 핵심입니다."}
                    ]
                }
            ]
        },

        # =====================================================================
        # Course 4: ⚖️ 시험 단골 헷갈리는 문법 VS 특강 (Confusion Resolvers • 8단원)
        # =====================================================================
        {
            "level": 104,
            "levelCode": "sp_vs",
            "levelName": "혼동 문법 VS 특강",
            "targetGrade": "오답률 70% 집중 클리닉",
            "badge": "VS 특강",
            "color": "teal",
            "themeColor": "#0d9488",
            "isSpecial": True,
            "courseCategory": "vs",
            "desc": "학생들이 가장 많이 틀리는 헷갈리는 문법 개념 쌍 1:1 비교 및 판별 비법 (8단원)",
            "units": [
                {
                    "unitNo": 123,
                    "title": "SP-23. to부정사 VS 동명사 (목적어 취하는 동사)",
                    "part": "혼동 문법 VS",
                    "targetGrade": "중·고등 공통",
                    "summary": "미래·지향적(want/hope to) vs 과거·경험적(enjoy/finish -ing) & 둘 다 취할 때 뜻이 달라지는 동사",
                    "formulaCards": [
                        {
                            "name": "to부정사 vs 동명사 목적어 암기 공식",
                            "formula": "• to부정사만 취함 (미래/계획/소망) : want, hope, wish, decide, plan, promise, refuse\n• 동명사만 취함 (과거/경험/중단/회피) : enjoy, finish, give up, avoid, mind, postpone, practice",
                            "example": "I decided to study harder. / She finished doing her homework.",
                            "trap": "enjoy to swim (X) ➔ enjoy swimming (O) / refuse helping (X) ➔ refuse to help (O)"
                        },
                        {
                            "name": "둘 다 취하지만 의미가 180도 달라지는 동사 4총사",
                            "formula": "• remember/forget + to V (미래: ~할 것을 기억/잊다)\n• remember/forget + V-ing (과거: ~했던 것을 기억/잊다)\n• stop + to V (~하기 위해 멈추다) vs stop + V-ing (~하던 것을 그만두다)\n• try + to V (~하려고 애쓰다/노력하다) vs try + V-ing (시험 삼아 한번 해보다)",
                            "example": "Remember to lock the door. (문 잠글 것을 기억해라)\nI remember locking the door. (문 잠갔던 것을 기억한다)",
                            "trap": "stop to smoke(담배 피우려고 멈추다) vs stop smoking(금연하다) 해석 혼동 주의!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_23",
                            "sentence": "Don't forget bringing your passport when you travel abroad next week.",
                            "underlined": ["Don't forget", "bringing", "your passport", "travel abroad"],
                            "wrongIndex": 1,
                            "correction": "to bring",
                            "explanation": "다음 주에 '앞으로 챙겨야 할 일'을 의미하므로 과거를 뜻하는 bringing이 아닌 미래의 to bring을 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 동명사(-ing)만을 목적어로 취하는 동사는?", "options": ["decide", "promise", "avoid", "hope", "agree"], "ans": 2, "exp": "avoid(피하다)는 동명사만을 목적어로 취하는 동사입니다."},
                        {"q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I stopped ________ lunch because I was hungry.'\n'He stopped ________ because it was harmful to his health.'", "options": ["to eat - smoking", "eating - to smoke", "to eat - to smoke", "eating - smoking", "to eat - smoke"], "ans": 0, "exp": "점심을 먹기 위해 멈춘 것은 to eat, 담배 피우던 것을 중단한 것은 smoking입니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'I clearly remember ________ the keys on the kitchen table this morning.'", "options": ["to leave", "leaving", "left", "leave", "leaves"], "ans": 1, "exp": "오늘 아침에 열쇠를 '놓아두었던 과거의 일'을 기억하는 것이므로 leaving이 맞습니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["She enjoys reading mystery novels.", "My father decided to buy an electric car.", "He gave up to learn the violin.", "Would you mind opening the window?", "They promised to arrive on time."], "ans": 2, "exp": "give up은 동명사를 목적어로 취하므로 gave up learning이어야 합니다."},
                        {"q": "다음 두 문장의 의미 차이로 올바른 것은?\n(A) I tried to move the heavy stone.\n(B) I tried moving the heavy stone.", "options": ["(A)와 (B)는 동일하다.", "(A)는 무거운 돌을 옮기려고 필사적으로 노력한 것이고, (B)는 시험 삼아 한번 옮겨본 것이다.", "(A)는 돌을 옮겼고 (B)는 못 옮겼다.", "(A)는 돌이 가볍고 (B)는 무겁다.", "(B)는 문법 오류다."], "ans": 1, "exp": "try to V는 노력·애씀, try V-ing는 시험 삼아 시도해 봄을 뜻합니다."}
                    ]
                },
                {
                    "unitNo": 124,
                    "title": "SP-24. 현재완료 VS 단순과거",
                    "part": "혼동 문법 VS",
                    "targetGrade": "중·고등 공통",
                    "summary": "과거의 일이 현재까지 영향(have p.p.) vs 명백한 과거 시점 부사(yesterday/ago/in 2020)의 절대 규칙",
                    "formulaCards": [
                        {
                            "name": "단순과거 시제와만 어울리는 '명백한 과거 시점 부사'",
                            "formula": "yesterday, ~ ago, in + 과거 연도(in 2015), last ~, when (의문사) 뒤에는\n절대로 현재완료(have p.p.)를 쓸 수 없고, 오직 [단순과거 시제]만 사용 가능!",
                            "example": "I have met him yesterday. (X) ➔ I met him yesterday. (O)\nWhen have you arrived? (X) ➔ When did you arrive? (O)",
                            "trap": "since(~이래로)는 현재완료와 찰떡궁합이지만, ago나 yesterday는 현재완료의 천적!"
                        },
                        {
                            "name": "have been to vs have gone to",
                            "formula": "• have been to [장소] : ~에 가본 적이 있다 (경험) / ~에 다녀왔다\n• have gone to [장소] : ~로 가버렸다 (결과: 지금 여기 없음)",
                            "example": "He has gone to Paris. (그는 파리로 가버려서 지금 여기에 없다)\nI have been to Paris twice. (나는 파리에 두 번 가본 적이 있다)",
                            "trap": "1인칭(I/We)이나 2인칭(You) 주어에는 have gone to를 쓸 수 없음! (내가 가버리고 여기 없다는 모순 발생)"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_24",
                            "sentence": "My uncle has bought this sports car three years ago and still drives it.",
                            "underlined": ["has bought", "sports car", "three years ago", "still drives"],
                            "wrongIndex": 0,
                            "correction": "bought",
                            "explanation": "three years ago라는 명백한 과거 시점 부사구가 있으므로 현재완료 has bought를 쓸 수 없으며 단순과거 bought로 고쳐야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 현재완료(have p.p.) 시제와 함께 쓸 수 없는 부사는?", "options": ["since last month", "for ten years", "already", "two days ago", "ever"], "ans": 3, "exp": "two days ago처럼 ago가 붙은 표현은 명백한 과거 시점이므로 단순과거 시제와만 쓰입니다."},
                        {"q": "빈칸에 들어갈 말로 가장 적절한 것은?\n'Where is Tom?' / 'He ________ to the supermarket to buy some milk.'", "options": ["has gone", "has been", "went ago", "goes", "have gone"], "ans": 0, "exp": "지금 여기에 없고 가버렸다는 결과를 나타내므로 has gone이 맞습니다."},
                        {"q": "다음 중 어법상 올바른 문장은?", "options": ["When have you bought that computer?", "I have finished my homework ten minutes ago.", "She has lived in Seoul since she was a child.", "He has lost his phone yesterday.", "They have arrived in London last night."], "ans": 2, "exp": "since + 과거 시점은 현재완료와 올바르게 결합합니다. (나머지는 when, ago, yesterday, last night으로 과거시제 오류)"},
                        {"q": "다음 문장의 빈칸에 들어갈 적절한 시제는?\n'World War II ________ in 1945.'", "options": ["has ended", "ended", "had ended", "ends", "was ended"], "ans": 1, "exp": "in 1945는 명백한 역사적 과거 시점이므로 단순과거 ended가 정답입니다."},
                        {"q": "'I have gone to London.' 문장이 어법상 어색한 이유는?", "options": ["London은 고유명사이기 때문", "have gone to는 1인칭 주어(I, We)와 결합할 수 없기 때문", "과거분사 형태가 틀렸기 때문", "to 대신에 at을 써야 하기 때문", "시제가 미래이기 때문"], "ans": 1, "exp": "have gone to는 '가버려서 지금 여기에 없다'는 뜻이므로 화자 본인(I)을 주어로 쓸 수 없습니다."}
                    ]
                },
                {
                    "unitNo": 125,
                    "title": "SP-25. 관계대명사 that VS 접속사 that VS 동격 that",
                    "part": "혼동 문법 VS",
                    "targetGrade": "중·고등 공통",
                    "summary": "불완전 문장(관대) vs 완전 문장(접속사) vs 추상명사 뒤 완전 문장(동격) 완벽 구별",
                    "formulaCards": [
                        {
                            "name": "that의 3대 정체성 판별 공식",
                            "formula": "1. [관계대명사 that] : 앞 선행사 있음 + 뒤 [불완전한 문장] (주어나 목적어 빠짐)\n2. [명사절 접속사 that] : 앞 선행사 없음(동사 뒤) + 뒤 [완전한 문장] (~라는 것을)\n3. [동격의 접속사 that] : 앞 추상명사 있음 + 뒤 [완전한 문장] (~라는 내용의)",
                            "example": "• The book [that I bought] is good. (관대: bought의 목적어 없음)\n• I know [that she is kind]. (명사절 접속사: 뒤 완전)\n• The idea [that we should help others] is noble. (동격: 뒤 완전)",
                            "trap": "앞에 명사가 있다고 무조건 관계대명사라고 생각하지 말고, 뒤 문장의 완전성 확인 필수!"
                        },
                        {
                            "name": "동격 that과 자주 결합하는 대표 추상명사",
                            "formula": "fact(사실), news(소식), idea(생각), belief(믿음), rumor(소문), evidence(증거), hope(희망)",
                            "example": "There is no evidence that he committed the crime.",
                            "trap": "동격의 that은 which로 대체할 수 없습니다!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_25",
                            "sentence": "The police found conclusive evidence which the suspect had entered the building.",
                            "underlined": ["found", "conclusive evidence", "which the suspect", "had entered"],
                            "wrongIndex": 2,
                            "correction": "that the suspect",
                            "explanation": "evidence 뒤의 절이 완전한 문장(the suspect had entered the building)이므로 동격의 접속사 that을 써야 하며, which로 대체할 수 없습니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 밑줄 친 'that'의 용법이 나머지 넷과 다른 것은?", "options": ["I know [that] honesty is the best policy.", "She said [that] she was tired.", "The man [that] I saw yesterday was tall.", "We believe [that] peace is possible.", "He promised [that] he would come."], "ans": 2, "exp": "3번은 목적격 관계대명사이고, 나머지는 모두 동사 뒤에 쓰인 명사절 접속사 that입니다."},
                        {"q": "다음 문장의 밑줄 친 that의 정체는?\n'The news [that] the war had ended brought joy to everyone.'", "options": ["주격 관계대명사", "목적격 관계대명사", "동격의 접속사", "지시대명사", "관계부사 대용"], "ans": 2, "exp": "The news라는 추상명사 뒤에 완전한 문장이 이어지므로 동격의 접속사입니다."},
                        {"q": "다음 중 관계대명사 which로 바꿔 쓸 수 있는 that은?", "options": ["I heard the rumor that he got married.", "The fact that she failed surprised us.", "This is the camera that my uncle gave me.", "He told me that he was innocent.", "There is no proof that he was there."], "ans": 2, "exp": "3번의 that은 목적격 관계대명사이므로 which로 바꿔 쓸 수 있습니다. (나머지는 동격 또는 명사절 접속사)"},
                        {"q": "동격의 that 뒤에 이어지는 문장 구조의 특징은?", "options": ["주어가 없는 불완전한 문장", "목적어가 없는 불완전한 문장", "완전한 문장", "동사원형으로 시작하는 명령문", "전치사로 끝나는 문장"], "ans": 2, "exp": "동격의 that은 접속사이므로 뒤에 완전한 문장이 이어집니다."},
                        {"q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'We must accept the truth ________ nobody is perfect.'", "options": ["which", "that", "what", "whom", "whose"], "ans": 1, "exp": "the truth 뒤에 완전한 문장이 이어지므로 동격의 접속사 that이 알맞습니다."}
                    ]
                },
                {
                    "unitNo": 126,
                    "title": "SP-26. used to VS be used to V VS be used to V-ing",
                    "part": "혼동 문법 VS",
                    "targetGrade": "중·고등 공통",
                    "summary": "~하곤 했다(used to) vs ~하는 데 사용되다(be used to V) vs ~에 익숙하다(be used to -ing)",
                    "formulaCards": [
                        {
                            "name": "used to 3총사 완전 정복 공식",
                            "formula": "1. used to + [동사원형] : (과거에) ~하곤 했다 / ~이었다 (지금은 아님)\n2. be used to + [동사원형] : ~하는 데 '사용되다' (use의 수동태! 주어는 보통 사물)\n3. be used to + [V-ing / 명사] : ~에 '익숙하다' (= be accustomed to, 주어는 보통 사람)",
                            "example": "• I used to play soccer. (축구하곤 했다)\n• Wood is used to make paper. (종이를 만드는 데 사용된다)\n• I am used to waking up early. (일찍 일어나는 데 익숙하다)",
                            "trap": "be used to 뒤에 V-ing가 오는지 동사원형이 오는지 주어의 성격(사람 vs 사물)과 의미로 판별할 것!"
                        },
                        {
                            "name": "3초 컷 판별 요령",
                            "formula": "• 앞에 be동사가 없는가? ➔ 무조건 [used to + V] (~하곤 했다)\n• 앞에 be동사가 있고 주어가 사물인가? ➔ [be used to + V] (사용되다)\n• 앞에 be동사가 있고 주어가 사람인가? ➔ [be used to + -ing] (익숙하다)",
                            "example": "He is used to spicy food.",
                            "trap": "get used to + V-ing는 '~에 익숙해지다'라는 변화의 의미!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_26",
                            "sentence": "This special tool is used to measuring the precise depth of the ocean floor.",
                            "underlined": ["special tool", "is used to", "measuring", "precise depth"],
                            "wrongIndex": 2,
                            "correction": "measure",
                            "explanation": "도구(tool)가 깊이를 측정하는 데 '사용되다'라는 수동의 뜻이므로 to 뒤에 동사원형 measure를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장의 빈칸에 들어갈 알맞은 형태는?\n'She has lived in London for five years, so she is used to ________ on the left.'", "options": ["drive", "driving", "drove", "driven", "be drive"], "ans": 1, "exp": "그녀가 운전하는 것에 '익숙하다'는 뜻이므로 be used to 뒤에 동명사 driving이 와야 합니다."},
                        {"q": "다음 문장의 의미로 올바른 것은?\n'There used to be a large pond in front of my house.'", "options": ["우리 집 앞에 큰 연못이 지금도 있다.", "우리 집 앞에 큰 연못이 예전에는 있었으나 지금은 없다.", "우리 집 앞에 큰 연못을 만드는 데 사용된다.", "우리 집 앞에 큰 연못에 익숙하다.", "우리 집 앞에 큰 연못이 생길 예정이다."], "ans": 1, "exp": "used to be는 '예전에는 ~가 있었다(지금은 없다)'는 과거의 상태를 나타냅니다."},
                        {"q": "다음 빈칸에 공통으로 들어갈 단어는?\n'Solar energy is used to ________ electricity.'\n'I used to ________ him every Sunday.'", "options": ["generate - meet", "generating - meeting", "generated - met", "generate - meeting", "generating - meet"], "ans": 0, "exp": "첫 번째는 '발전하는 데 사용되다(동사원형)', 두 번째는 '만나곤 했다(동사원형)'이므로 둘 다 동사원형입니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 어색한 것은?", "options": ["He used to smoke a pack a day.", "Knives are used to cut meat.", "I am not used to speaking in public.", "The money was used to helping the poor.", "She used to be very shy as a child."], "ans": 3, "exp": "돈이 가난한 사람들을 돕는 데 '사용되었다'는 뜻이므로 was used to help로 고쳐야 합니다."},
                        {"q": "'be used to V-ing'와 의미가 가장 가까운 표현은?", "options": ["be afraid of", "be accustomed to", "look forward to", "be tired of", "be capable of"], "ans": 1, "exp": "be used to -ing는 be accustomed to -ing(~에 익숙하다)와 동의어입니다."}
                    ]
                },
                {
                    "unitNo": 127,
                    "title": "SP-27. 타동사 lay VS 자동사 lie 3단 변화",
                    "part": "혼동 문법 VS",
                    "targetGrade": "중·고등 공통",
                    "summary": "lie-lay-lain (눕다/놓여있다) vs lay-laid-laid (놓다/낳다) vs lie-lied-lied (거짓말하다)",
                    "formulaCards": [
                        {
                            "name": "lie vs lay 3단 변화 끝장 비교표",
                            "formula": "1. lie - lay - lain - lying (자동사: 눕다, 놓여있다) ➔ 뒤에 목적어 없음!\n2. lay - laid - laid - laying (타동사: 놓다, 두다, 알을 낳다) ➔ 뒤에 목적어(~을/를) 필수!\n3. lie - lied - lied - lying (자동사: 거짓말하다)",
                            "example": "• He lay on the grass yesterday. (눕다 lie의 과거형 lay)\n• She laid the baby on the bed. (눕히다 lay의 과거형 laid)\n• Don't lie to me. (거짓말하다)",
                            "trap": "자동사 lie의 '과거형'이 타동사의 '원형(lay)'과 똑같이 생겨서 시험에 단골 1위로 출제됨!"
                        },
                        {
                            "name": "3초 컷 판별 공식",
                            "formula": "빈칸 바로 뒤를 본다!\n• 뒤에 목적어(~을/를)가 있는가? ➔ [lay 계열 (lay/laid)]\n• 뒤에 전치사구(on, in, down)나 부사가 오는가? ➔ [lie 계열 (lie/lay/lain)]",
                            "example": "He [laid] his hand on my shoulder. (목적어 hand가 있으므로 laid)",
                            "trap": "rise(자동사: 오르다) vs raise(타동사: 올리다)도 동일한 자/타동사 원리!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_27",
                            "sentence": "The exhausted hiker laid down on the soft grass and fell fast asleep.",
                            "underlined": ["exhausted hiker", "laid down", "on the soft grass", "fell fast asleep"],
                            "wrongIndex": 1,
                            "correction": "lay down",
                            "explanation": "등산객이 스스로 누운 것이며 뒤에 목적어가 없는 자동사의 과거형이 필요하므로 laid(타동사 과거)가 아닌 lay(lie의 과거형)를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'Yesterday afternoon, I was so tired that I ________ down on the couch for an hour.'", "options": ["lay", "laid", "lied", "lain", "laying"], "ans": 0, "exp": "눕다(lie)의 과거형은 lay입니다. (yesterday 과거 시점)"},
                        {"q": "다음 문장의 빈칸에 들어갈 알맞은 단어는?\n'Please ________ the books on the desk carefully.'", "options": ["lie", "lay", "laid", "lain", "lying"], "ans": 1, "exp": "뒤에 목적어 the books가 있으므로 타동사 원형 lay(~을 놓다)가 정답입니다."},
                        {"q": "다음 3단 변화가 잘못 짝지어진 것은?", "options": ["lie (눕다) - lay - lain", "lay (놓다) - laid - laid", "lie (거짓말하다) - lied - lied", "rise (오르다) - rose - risen", "raise (올리다) - rose - risen"], "ans": 4, "exp": "raise(올리다)는 규칙 변화인 raise - raised - raised입니다."},
                        {"q": "다음 밑줄 친 부분 중 어법상 틀린 것은?", "options": ["The hen laid three eggs yesterday.", "He has lain in bed for three days.", "The dog laid on the floor all day.", "She laid her phone on the kitchen table.", "Dust lay thick on the old books."], "ans": 2, "exp": "개가 바닥에 누워있었던 것이므로 자동사 과거형 lay를 써야 합니다. (laid는 타동사 과거)"},
                        {"q": "자동사 lie(눕다)의 현재분사(-ing) 형태 스펠링으로 바른 것은?", "options": ["lieing", "lying", "laying", "laing", "lyeing"], "ans": 1, "exp": "ie로 끝나는 동사는 ying으로 바뀌므로 lying이 맞습니다."}
                    ]
                },
                {
                    "unitNo": 128,
                    "title": "SP-28. 가주어/가목적어 VS it ~ that 강조구문",
                    "part": "혼동 문법 VS",
                    "targetGrade": "중·고등 공통",
                    "summary": "it과 that을 지웠을 때 문장이 완전하면 '강조구문', 불완전하면 '가주어/진주어' 판별법",
                    "formulaCards": [
                        {
                            "name": "It ~ that 강조구문 vs 가주어/진주어 3초 판별 공식",
                            "formula": "문장에서 [It is/was]와 [that]을 손으로 가려본다!\n• 가렸을 때 남은 단어들로 문장이 완벽하게 성립하면? ➔ [강조 구문]\n• 가렸을 때 문장이 말이 안 되고 불완전하면? ➔ [가주어 / 진주어]",
                            "example": "It was [Tom] that broke the window. ➔ Tom broke the window. (완전 성립 ➔ 강조구문)\nIt is [true] that he broke the window. ➔ True he broke the window. (불성립 ➔ 가주어/진주어)",
                            "trap": "It is 뒤에 형용사(true, natural, certain, important)가 오면 100% 가주어/진주어!"
                        },
                        {
                            "name": "가목적어 it 구문 (MBCDF 공식)",
                            "formula": "make, believe, consider, deem, find + it(가목적어) + [형용사 목적격보어] + to V / that절(진목적어)",
                            "example": "I found it difficult to solve the problem.",
                            "trap": "가목적어 자리에 this나 that을 쓰거나, to부정사를 목적어 자리에 그대로 길게 두는 오류 주의!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_28",
                            "sentence": "Modern smartphones make that possible for people to work from anywhere in the world.",
                            "underlined": ["smartphones", "make that possible", "for people", "to work from anywhere"],
                            "wrongIndex": 1,
                            "correction": "make it possible",
                            "explanation": "5형식 가목적어 자리에는 오직 대명사 it만 올 수 있으므로 that possible을 it possible로 고쳐야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 중 'It ~ that 강조 구문'인 문장은?", "options": ["It is clear that he is innocent.", "It was yesterday that I met him in the park.", "It is surprising that she won the race.", "It is important that you should be on time.", "It was obvious that they were lying."], "ans": 1, "exp": "It was와 that을 지우면 'Yesterday I met him in the park'라는 완전한 문장이 되므로 강조 구문입니다. (나머지는 가주어/진주어)"},
                        {"q": "다음 문장의 빈칸에 들어갈 가목적어로 알맞은 것은?\n'The internet has made ________ easy to find information.'", "options": ["this", "that", "it", "them", "what"], "ans": 2, "exp": "가목적어로는 오직 it만 사용 가능합니다."},
                        {"q": "It ~ that 사이에 들어갈 수 없는 것은? (강조 구문 기준)", "options": ["부사구 (in the park)", "주어 명사 (Tom)", "목적어 명사 (the book)", "형용사 (clear, true)", "시간 부사 (yesterday)"], "ans": 3, "exp": "형용사는 강조 구문의 강조 대상이 될 수 없으며, It is + 형용사 + that은 가주어/진주어 구문입니다."},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["I found it hard to believe his story.", "She thought it strange that he was absent.", "He made this easy to learn English.", "We consider it an honor to be here.", "I take it for granted that you agree."], "ans": 2, "exp": "가목적어 자리에는 this를 쓸 수 없으며 it을 써야 합니다 (made it easy)."},
                        {"q": "It ~ that 강조 구문에서 강조 대상이 사람일 때 that 대신 쓸 수 있는 관계사는?", "options": ["who", "which", "where", "why", "what"], "ans": 0, "exp": "강조하는 대상이 사람일 때는 that 대신 who를 쓸 수 있습니다."}
                    ]
                },
                {
                    "unitNo": 129,
                    "title": "SP-29. 접속사 VS 전치사 (의미는 같지만 뒤가 다르다)",
                    "part": "혼동 문법 VS",
                    "targetGrade": "중·고등 공통",
                    "summary": "although vs despite / because vs because of / while vs during 완벽 구별",
                    "formulaCards": [
                        {
                            "name": "접속사 vs 전치사 대표 맞수 3대장",
                            "formula": "1. [비록 ~일지라도] : 접속사 [although / even though] + S + V vs 전치사 [despite / in spite of] + 명사(구)\n2. [~때문에] : 접속사 [because / as / since] + S + V vs 전치사 [because of / due to / owing to] + 명사(구)\n3. [~동안에] : 접속사 [while] + S + V vs 전치사 [during] + 특정 기간 명사 vs 전치사 [for] + 숫자 기간",
                            "example": "• Although it was raining (접속사)\n• Despite the rain (전치사)\n• while I was sleeping vs during the summer vacation vs for two hours",
                            "trap": "despite 뒤에 of를 붙여 despite of라고 쓰면 100% 오답!"
                        },
                        {
                            "name": "3초 컷 판별법",
                            "formula": "빈칸 뒤에 '동사'가 있는지만 확인하라!\n• 주어 + 동사가 있으면 ➔ 무조건 [접속사]\n• 동사 없이 명사 덩어리만 있으면 ➔ 무조건 [전치사]",
                            "example": "Because of he was ill (X) ➔ Because he was ill (O)",
                            "trap": "명사 뒤에 관계사절이 붙어있더라도 빈칸의 주어+동사가 아니라면 전치사를 써야 함에 주의!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_29",
                            "sentence": "In spite of she practiced day and night, she couldn't win the gold medal.",
                            "underlined": ["In spite of", "she practiced", "day and night", "win the gold medal"],
                            "wrongIndex": 0,
                            "correction": "Although (또는 Even though)",
                            "explanation": "뒤에 'she(주어) + practiced(동사)'의 절이 이어지므로 전치사 In spite of가 아니라 접속사 Although를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'We went hiking ________ the heavy rain.'\n'We went hiking ________ it rained heavily.'", "options": ["despite - although", "although - despite", "because - because of", "during - while", "despite - because of"], "ans": 0, "exp": "첫 번째는 명사구(the heavy rain) 앞이므로 전치사 despite, 두 번째는 절(it rained) 앞이므로 접속사 although입니다."},
                        {"q": "다음 중 전치사 'during'만 들어갈 수 있는 빈칸은?", "options": ["He stayed in Paris ________ three weeks.", "I met him ________ I was walking in the park.", "The fire broke out ________ the night.", "She worked ________ five years.", "We waited ________ thirty minutes."], "ans": 2, "exp": "the night라는 특정 기간 명사 앞에는 during이 옵니다. (숫자 기간 앞에는 for, 절 앞에는 while)"},
                        {"q": "다음 중 어법상 틀린 문장은?", "options": ["I couldn't sleep because of the noise.", "Despite of the cold weather, we went outside.", "Although he was poor, he was happy.", "While she was reading, her brother watched TV.", "Due to a sudden illness, he canceled the trip."], "ans": 1, "exp": "despite는 of를 붙이지 않습니다. In spite of 또는 Despite로 써야 합니다."},
                        {"q": "다음 빈칸에 들어갈 수 없는 것은?\n'________ the heavy traffic, we arrived late.'", "options": ["Because of", "Due to", "Owing to", "Because", "On account of"], "ans": 3, "exp": "뒤에 명사구 the heavy traffic만 있으므로 접속사 Because는 올 수 없습니다."},
                        {"q": "다음 문장의 빈칸에 알맞은 것은?\n'________ he is young, he is very wise.'", "options": ["Despite", "In spite of", "Although", "Because of", "During"], "ans": 2, "exp": "뒤에 'he is young'이라는 절이 이어지므로 접속사 Although가 정답입니다."}
                    ]
                },
                {
                    "unitNo": 130,
                    "title": "SP-30. 부분부정 VS 완전부정",
                    "part": "혼동 문법 VS",
                    "targetGrade": "중·고등 공통",
                    "summary": "not all / not every (모두가 그런 것은 아니다) vs none / neither (아무도 아니다) 해석과 수일치",
                    "formulaCards": [
                        {
                            "name": "부분부정 vs 완전부정 공식 비교",
                            "formula": "1. [부분부정] : not + 전체를 나타내는 말 (all, every, both, always, completely)\n  ➔ '모두가 ~인 것은 아니다 (일부는 그렇고 일부는 아니다)'\n2. [완전부정] : none, neither, no one, never\n  ➔ '아무도/전혀 ~가 아니다 (100% 전면 부정)'",
                            "example": "• Not all birds can fly. (모든 새가 날 수 있는 것은 아니다 - 펭귄은 못 낢: 부분부정)\n• No birds can fly. (어떤 새도 날 수 없다: 완전부정)\n• I don't like both of them. (둘 다 좋아하는 건 아냐 - 한 명만 좋아함: 부분부정)\n• I like neither of them. (둘 다 안 좋아함: 완전부정)",
                            "trap": "not both(둘 다 ~인 것은 아니다)를 neither(둘 다 아니다)로 오역하지 않도록 주의!"
                        },
                        {
                            "name": "부분부정 주요 관용 표현",
                            "formula": "• not always : 항상 ~인 것은 아니다\n• not necessarily : 반드시 ~인 것은 아니다\n• not entirely : 전적으로 ~인 것은 아니다",
                            "example": "Rich people are not always happy. (부자라고 항상 행복한 것은 아니다)",
                            "trap": "독해 지문에서 필자의 양면적 견해나 반전을 나타낼 때 빈출되는 핵심 표현!"
                        }
                    ],
                    "spottingDrills": [
                        {
                            "id": "drill_sp_30",
                            "sentence": "Neither of the two candidates were qualified for the executive position.",
                            "underlined": ["Neither of", "the two candidates", "were qualified", "executive position"],
                            "wrongIndex": 2,
                            "correction": "was qualified",
                            "explanation": "Neither of + 복수명사는 문법적으로 단수 취급하므로 복수 동사 were가 아니라 단수 동사 was를 써야 합니다."
                        }
                    ],
                    "questions": [
                        {"q": "다음 문장의 의미로 가장 올바른 것은?\n'Not all glittering things are gold.'", "options": ["반짝이는 것은 모두 금이다.", "반짝이는 것은 모두 금이 아니다.", "반짝이는 것이 다 금인 것은 아니다. (금인 것도 있고 아닌 것도 있다)", "금은 절대로 반짝이지 않는다.", "반짝이지 않는 것이 진짜 금이다."], "ans": 2, "exp": "not all은 부분부정으로 '모두가 ~인 것은 아니다'를 의미합니다."},
                        {"q": "다음 중 '완전부정(둘 다 아니다)'을 나타내는 문장은?", "options": ["I don't know both of them.", "Neither of them knows the answer.", "Not all of them agreed.", "He is not always kind.", "Rich people are not necessarily happy."], "ans": 1, "exp": "Neither of them은 '둘 다 아니다'라는 완전부정입니다. (1, 3, 4, 5번은 모두 부분부정)"},
                        {"q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'Expensive clothes are not ________ better in quality.'", "options": ["necessarily", "none", "neither", "never", "no"], "ans": 0, "exp": "not necessarily는 '반드시 ~인 것은 아니다'라는 부분부정 표현입니다."},
                        {"q": "다음 문장의 빈칸에 들어갈 동사의 형태로 알맞은 것은?\n'Neither of my parents ________ English.'", "options": ["speak", "speaks", "are speaking", "were speak", "have spoken"], "ans": 1, "exp": "Neither of + 복수명사는 단수 취급하므로 3인칭 단수 현재형 speaks가 알맞습니다."},
                        {"q": "'그녀는 항상 늦는 것은 아니다 (가끔 제시간에 온다)'를 영작할 때 가장 알맞은 표현은?", "options": ["She is never late.", "She is always late.", "She is not always late.", "No one is late.", "Neither is late."], "ans": 2, "exp": "not always가 '항상 ~인 것은 아니다'라는 부분부정 표현입니다."}
                    ]
                }
            ]
        }
    ]
    return courses
