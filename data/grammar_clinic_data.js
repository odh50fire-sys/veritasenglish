/**
 * Veritas English - 영문법 클리닉 정규 5대 레벨 40단원 + 테마별 4대 특강 30단원 (총 70단원)
 * 정규 과정: Lv.1 중1 ~ Lv.5 수능 킬러 (40단원, 200문항, 40 어법 클리닉)
 * 테마 특강: 용어 특강, 서술형 특강, 수능 29번 특강, 혼동 문법 VS 특강 (30단원, 150문항, 30 어법 클리닉)
 */
window.GRAMMAR_CLINIC_BANK = [
  {
    "level": 1,
    "levelCode": "lv1",
    "levelName": "중1 문법",
    "targetGrade": "중1 내신 & 기초 완성",
    "badge": "Lv.1 중1 문법",
    "color": "emerald",
    "themeColor": "#059669",
    "desc": "be동사와 일반동사, 시제, 명사·대명사의 격, 진행형, 조동사, 1·2·3형식 등 중1 내신 핵심 기초",
    "units": [
      {
        "unitNo": 1,
        "title": "be동사와 일반동사의 현재·과거형",
        "part": "동사의 기초",
        "targetGrade": "중1 기초",
        "summary": "be동사(am/are/is/was/were)와 일반동사의 3인칭 단수(-s/-es) 및 과거형 규칙",
        "formulaCards": [
          {
            "name": "be동사의 형태와 부정문",
            "formula": "주어 + be동사 (현재: am/are/is, 과거: was/were) + not",
            "example": "She was happy yesterday. They are not my classmates.",
            "trap": "be동사 문장에 don't/doesn't를 쓰거나, 일반동사 문장에 isn't를 쓰지 않도록 주의!"
          },
          {
            "name": "일반동사 3인칭 단수 현재형",
            "formula": "3인칭 단수 주어(He, She, It) + 동사원형-(e)s",
            "example": "My brother plays soccer every weekend.",
            "trap": "조동사 뒤나 부정문/의문문의 does 뒤에는 반드시 동사원형이 옴!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_01",
            "sentence": "My uncle lives in London and he teach English at school.",
            "underlined": [
              "lives",
              "in London",
              "he",
              "teach"
            ],
            "wrongIndex": 3,
            "correction": "teaches",
            "explanation": "주어 he가 3인칭 단수 현재이므로 일반동사 teach 뒤에 -es를 붙여 teaches로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 밑줄 친 동사의 쓰임이 어법상 올바른 것은?",
            "options": [
              "She don't like spicy food.",
              "My father watches TV every evening.",
              "They was very busy yesterday.",
              "He play baseball on Sundays.",
              "Does she has a bicycle?"
            ],
            "ans": 1,
            "exp": "3인칭 단수 주어 My father 뒤에 watches가 올바르게 쓰였습니다. (1: doesn't, 3: were, 4: plays, 5: have)"
          },
          {
            "q": "빈칸에 들어갈 말로 가장 적절한 것은?\n'Tom and Jerry ________ in the library two hours ago.'",
            "options": [
              "is",
              "are",
              "was",
              "were",
              "been"
            ],
            "ans": 3,
            "exp": "주어가 복수(Tom and Jerry)이고 과거 시점 부사구(two hours ago)가 있으므로 were가 정답입니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'My sister ________ her homework before dinner yesterday.'",
            "options": [
              "finish",
              "finishes",
              "finished",
              "is finishing",
              "will finish"
            ],
            "ans": 2,
            "exp": "yesterday는 명백한 과거 시점이므로 과거형 finished가 적절합니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "Are you ready for school?",
              "He didn't went to the park.",
              "They played tennis last Saturday.",
              "Where does your sister work?",
              "I am not tired right now."
            ],
            "ans": 1,
            "exp": "과거 부정문 did not(didn't) 뒤에는 동사원형이 와야 하므로 went -> go로 고쳐야 합니다."
          },
          {
            "q": "빈칸에 공통으로 들어갈 말은?\n'________ you see the doctor yesterday?' / '________ he play soccer last night?'",
            "options": [
              "Do",
              "Does",
              "Did",
              "Are",
              "Were"
            ],
            "ans": 2,
            "exp": "과거 시점의 일반동사 의문문이므로 조동사 Did가 공통으로 들어갑니다."
          }
        ]
      },
      {
        "unitNo": 2,
        "title": "명사의 복수형과 대명사의 격변화",
        "part": "명사와 대명사",
        "targetGrade": "중1 기초",
        "summary": "규칙·불규칙 명사 복수형과 인칭대명사의 주격, 소유격, 목적격, 소유대명사",
        "formulaCards": [
          {
            "name": "불규칙 명사 복수형",
            "formula": "man->men, child->children, tooth->teeth, foot->feet, mouse->mice",
            "example": "Three children are playing with their puppies.",
            "trap": "childs, feets처럼 불규칙 복수형에 다시 -s를 덧붙이는 오류 주의!"
          },
          {
            "name": "인칭대명사의 격변화",
            "formula": "주격(I) - 소유격(my) - 목적격(me) - 소유대명사(mine)",
            "example": "She gave me her book, but this pencil is mine.",
            "trap": "소유격(my, your) 뒤에는 명사가 필요하지만, 소유대명사(mine, yours)는 단독으로 쓰임!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_02",
            "sentence": "The teacher gave him and I some books, but they were hers.",
            "underlined": [
              "gave",
              "him and I",
              "some books",
              "hers"
            ],
            "wrongIndex": 1,
            "correction": "him and me",
            "explanation": "동사 gave의 간접목적어 자리이므로 주격 I가 아니라 목적격 me를 써서 'him and me'가 되어야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 명사의 복수형이 잘못 짝지어진 것은?",
            "options": [
              "box - boxes",
              "baby - babies",
              "leaf - leaves",
              "child - childs",
              "foot - feet"
            ],
            "ans": 3,
            "exp": "child의 복수형은 불규칙 변화인 children입니다."
          },
          {
            "q": "빈칸에 들어갈 대명사의 형태가 순서대로 알맞은 것은?\n'This camera is not ________. It is ________.'",
            "options": [
              "my - her",
              "mine - hers",
              "me - she",
              "mine - her",
              "my - hers"
            ],
            "ans": 1,
            "exp": "단독으로 쓰이는 소유대명사 mine(나의 것), hers(그녀의 것)가 와야 합니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 어색한 것은?",
            "options": [
              "Look at those beautiful birds.",
              "I brushed my tooths this morning.",
              "Three men entered the room.",
              "She bought two pairs of shoes.",
              "The leaves turn red in autumn."
            ],
            "ans": 1,
            "exp": "tooth의 복수형은 teeth입니다."
          },
          {
            "q": "빈칸에 들어갈 알맞은 말은?\n'Mr. Brown teaches ________ English at school.'",
            "options": [
              "we",
              "our",
              "us",
              "ours",
              "ourselves"
            ],
            "ans": 2,
            "exp": "수여동사 teaches 뒤의 간접목적어 자리이므로 목적격 us가 정답입니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'I love my dog, and its eyes ________ so bright.'",
            "options": [
              "is",
              "are",
              "was",
              "am",
              "be"
            ],
            "ans": 1,
            "exp": "주어 its eyes는 복수 명사이므로 복수 동사 are가 와야 합니다."
          }
        ]
      },
      {
        "unitNo": 3,
        "title": "형용사와 부사의 기본 쓰임",
        "part": "품사와 수식어",
        "targetGrade": "중1 기초",
        "summary": "명사를 수식·보충하는 형용사와 동사·문장을 꾸며주는 부사의 구별",
        "formulaCards": [
          {
            "name": "형용사의 한정과 서술",
            "formula": "명사 앞/뒤 수식 or be/감각동사 뒤 주격보어",
            "example": "a smart boy / The food tastes delicious.",
            "trap": "-thing 대명사(something, anything)는 형용사가 뒤에서 수식! (something cold)"
          },
          {
            "name": "형용사와 부사의 형태",
            "formula": "형용사 + -ly -> 부사 (slow -> slowly, easy -> easily)",
            "example": "He runs fast. She arrived late.",
            "trap": "fast, hard, late, early는 형용사와 부사의 형태가 같음! hardly는 '거의 ~않다'라는 부정 부사."
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_03",
            "sentence": "The train arrived very lately, so I could hardly catch the bus.",
            "underlined": [
              "train",
              "lately",
              "so",
              "hardly"
            ],
            "wrongIndex": 1,
            "correction": "late",
            "explanation": "'늦게'라는 뜻의 부사는 late입니다. lately는 '최근에'라는 뜻이므로 문맥에 맞지 않습니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'I want to drink something ________ because it is too hot.'",
            "options": [
              "cold",
              "coldly",
              "hot",
              "hotly",
              "warm"
            ],
            "ans": 0,
            "exp": "-thing으로 끝나는 명사는 형용사가 뒤에서 수식하므로 cold가 정답입니다."
          },
          {
            "q": "다음 중 밑줄 친 단어의 품사가 부사인 것은?",
            "options": [
              "He is a fast runner.",
              "She arrived early this morning.",
              "They live in a friendly neighborhood.",
              "It was a lovely day.",
              "He gave me a lonely look."
            ],
            "ans": 1,
            "exp": "2번의 early는 동사 arrived를 수식하는 부사입니다. (friendly, lovely, lonely는 명사+-ly로 형성된 형용사)"
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 알맞은 말은?\n'He worked ________, but he could ________ finish the task in time.'",
            "options": [
              "hard - hard",
              "hardly - hard",
              "hard - hardly",
              "hardly - hardly",
              "hardly - late"
            ],
            "ans": 2,
            "exp": "'열심히 일했다'는 worked hard, '거의 ~할 수 없었다'는 hardly finish가 적절합니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "She sings very good.",
              "The flowers smell sweetly.",
              "He speaks English fluent.",
              "Drive careful on the snow.",
              "They arrived safely at home."
            ],
            "ans": 4,
            "exp": "동사 arrived를 수식하는 부사 safely가 올바릅니다. (1: well, 2: sweet, 3: fluently, 4: carefully)"
          },
          {
            "q": "다음 빈칸에 공통으로 들어갈 수 있는 단어는?\n'He is a ________ learner.' / 'She runs ________.'",
            "options": [
              "fast",
              "quick",
              "deep",
              "hard",
              "early"
            ],
            "ans": 0,
            "exp": "형용사와 부사 형태가 동일한 fast가 명사 수식(fast learner)과 동사 수식(runs fast)에 모두 들어갑니다."
          }
        ]
      },
      {
        "unitNo": 4,
        "title": "의문사 의문문 (Who, What, When, Where, Why, How)",
        "part": "문장의 종류",
        "targetGrade": "중1 기초",
        "summary": "구체적인 정보를 묻는 의문사 의문문의 어순과 의문사가 주어인 특수 어순",
        "formulaCards": [
          {
            "name": "일반 의문사 의문문 어순",
            "formula": "의문사 + be동사/조동사/do(does/did) + 주어 + 동사원형...?",
            "example": "Where do you live? When did she arrive?",
            "trap": "Yes/No로 대답할 수 없으며, 시제에 맞게 do/does/did를 일치시켜야 함!"
          },
          {
            "name": "의문사가 주어인 경우",
            "formula": "의문사(주어) + 동사 + 목적어...?",
            "example": "Who broke the window? What happened yesterday?",
            "trap": "의문사 자체가 주어일 때는 do/does/did 조동사를 쓰지 않고 바로 동사가 옴!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_04",
            "sentence": "What did you go to the museum yesterday? I took the subway.",
            "underlined": [
              "What",
              "did you go",
              "to the museum",
              "took"
            ],
            "wrongIndex": 0,
            "correction": "How",
            "explanation": "지하철을 타고 갔다는 이동 수단/방법을 묻고 있으므로 의문사 How를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "대화의 빈칸에 알맞은 의문사는?\nA: '________ broke the flower vase?'\nB: 'My younger brother did.'",
            "options": [
              "What",
              "Who",
              "Where",
              "When",
              "Why"
            ],
            "ans": 1,
            "exp": "행위의 주체(사람)를 묻고 있으므로 주어 역할을 하는 의문대명사 Who가 알맞습니다."
          },
          {
            "q": "대화의 빈칸에 알맞은 말은?\nA: '________ is the library from here?'\nB: 'It takes about 10 minutes on foot.'",
            "options": [
              "How long",
              "How far",
              "How often",
              "How much",
              "How old"
            ],
            "ans": 1,
            "exp": "거리나 도보 소요 시간을 묻고 있으므로 How far가 적절합니다."
          },
          {
            "q": "다음 중 어법상 올바른 의문문은?",
            "options": [
              "Where did you went yesterday?",
              "What do you doing now?",
              "Why is she crying?",
              "When does they eat dinner?",
              "Who did break the chair?"
            ],
            "ans": 2,
            "exp": "현재진행형 의문사 의문문 Why is she crying?이 올바릅니다. (1: go, 2: are you doing, 4: do they, 5: Who broke)"
          },
          {
            "q": "대화의 빈칸에 가장 알맞은 것은?\nA: '________ do you take the bus to school?'\nB: 'Twice a week.'",
            "options": [
              "How often",
              "How long",
              "How much",
              "How far",
              "How many"
            ],
            "ans": 0,
            "exp": "빈도('일주일에 두 번')를 묻는 질문이므로 How often이 알맞습니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 전치사는?\n'What is this table made ________?'",
            "options": [
              "in",
              "of",
              "to",
              "for",
              "with"
            ],
            "ans": 1,
            "exp": "재료를 나타내는 be made of 구문이므로 of가 정답입니다."
          }
        ]
      },
      {
        "unitNo": 5,
        "title": "현재진행형과 과거진행형",
        "part": "시제",
        "targetGrade": "중1 기초",
        "summary": "지금 진행 중인 동작(be + -ing)과 진행형으로 쓸 수 없는 상태 동사",
        "formulaCards": [
          {
            "name": "진행형의 기본 형태",
            "formula": "am/are/is + 동사원형-ing (현재진행) / was/were + -ing (과거진행)",
            "example": "He is writing an email now. They were sleeping at midnight.",
            "trap": "단모음+단자음일 때 마지막 자음 중복! (run -> running, swim -> swimming)"
          },
          {
            "name": "진행형 불가 동사 (상태동사)",
            "formula": "소유(have, belong), 감정(like, love), 인지(know, understand), 감각(hear)",
            "example": "I have two dogs (o) / I am having two dogs (x)",
            "trap": "have가 '먹다, 시간을 보내다'의 동작 의미일 때는 진행형 가능! (I am having lunch)"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_05",
            "sentence": "Listen! The baby cries in the next room right now.",
            "underlined": [
              "Listen",
              "cries",
              "in the next room",
              "right now"
            ],
            "wrongIndex": 1,
            "correction": "is crying",
            "explanation": "Listen!과 right now로 보아 지금 실시간으로 일어나는 동작이므로 현재진행형 is crying을 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 동사의 -ing 형태가 잘못 연결된 것은?",
            "options": [
              "make - making",
              "run - running",
              "lie - lying",
              "stop - stoping",
              "study - studying"
            ],
            "ans": 3,
            "exp": "단모음+단자음으로 끝나는 1음절 단어 stop은 자음을 하나 더 쓰고 -ing를 붙여 stopping이 되어야 합니다."
          },
          {
            "q": "다음 중 어법상 어색한 문장은?",
            "options": [
              "I am listening to music.",
              "She is knowing the answer.",
              "They were playing soccer.",
              "We are having a good time.",
              "He was washing his car."
            ],
            "ans": 1,
            "exp": "know는 상태나 인지를 나타내는 동사로 진행형을 쓸 수 없으므로 She knows the answer가 되어야 합니다."
          },
          {
            "q": "빈칸에 들어갈 알맞은 시제는?\n'When I called him yesterday, he ________ dinner with his family.'",
            "options": [
              "is having",
              "was having",
              "has",
              "had have",
              "will have"
            ],
            "ans": 1,
            "exp": "과거 특정 시점(When I called him)에 진행 중이었던 동작이므로 과거진행형 was having이 정답입니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'Look at the birds! They ________ high in the sky.'",
            "options": [
              "fly",
              "are flying",
              "were flying",
              "is flying",
              "flew"
            ],
            "ans": 1,
            "exp": "Look!은 지금 눈앞에서 벌어지는 동작을 가리키며 복수 주어(They)이므로 are flying이 적절합니다."
          },
          {
            "q": "다음 중 'have'의 쓰임이 올바르지 않은 것은?",
            "options": [
              "I am having breakfast now.",
              "She has a lot of friends.",
              "He is having a big car.",
              "They are having fun.",
              "We have English class on Mondays."
            ],
            "ans": 2,
            "exp": "'소유하다'의 의미일 때는 진행형을 쓸 수 없으므로 He has a big car가 되어야 합니다."
          }
        ]
      },
      {
        "unitNo": 6,
        "title": "기본 조동사 (can, may, must, should)",
        "part": "조동사",
        "targetGrade": "중1 기초",
        "summary": "능력, 허가, 의무, 충고를 나타내는 기본 조동사의 쓰임과 동사원형 원칙",
        "formulaCards": [
          {
            "name": "조동사의 기본 원칙",
            "formula": "조동사 + 동사원형 (3인칭 단수 -s 불가, 조동사 연속 2개 사용 불가)",
            "example": "She can speak French. You must be quiet here.",
            "trap": "She can speaks (x) -> She can speak (o), will can (x) -> will be able to (o)"
          },
          {
            "name": "must vs must not vs don't have to",
            "formula": "must(강한 의무) / must not(금지: ~해선 안 된다) / don't have to(~할 필요가 없다)",
            "example": "You must not touch this. You don't have to hurry.",
            "trap": "must not은 금지, don't have to는 불필요로 의미가 완전히 다름!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_06",
            "sentence": "You must not bring an umbrella. It is not going to rain today.",
            "underlined": [
              "must not",
              "bring",
              "is not going",
              "to rain"
            ],
            "wrongIndex": 0,
            "correction": "don't have to (또는 don't need to)",
            "explanation": "비가 오지 않을 것이므로 우산을 가져올 '필요가 없다'는 의미의 don't have to가 적절합니다. (must not은 '가져오면 안 된다'는 금지)"
          }
        ],
        "questions": [
          {
            "q": "다음 중 밑줄 친 조동사의 의미가 '허가'를 나타내는 것은?",
            "options": [
              "You may borrow my pencil.",
              "It may rain this afternoon.",
              "She can play the violin very well.",
              "We must wear a seatbelt.",
              "You should see a dentist."
            ],
            "ans": 0,
            "exp": "1번의 may는 '~해도 좋다'라는 허가의 의미입니다. (2번은 약한 추측, 3번은 능력, 4번은 의무, 5번은 충고)"
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 형태는?\n'He ________ speak three languages when he was ten years old.'",
            "options": [
              "can",
              "could",
              "may",
              "must",
              "should"
            ],
            "ans": 1,
            "exp": "과거 시점(when he was ten)의 능력을 나타내므로 can의 과거형인 could가 알맞습니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "You should wash your hands.",
              "She will can swim next month.",
              "May I ask you a question?",
              "He doesn't have to get up early.",
              "Must I finish this homework today?"
            ],
            "ans": 1,
            "exp": "조동사는 연속해서 두 개를 쓸 수 없으므로 will can -> will be able to로 고쳐야 합니다."
          },
          {
            "q": "다음 빈칸에 알맞은 것은?\n'Museum rules say that visitors ________ touch the paintings.'",
            "options": [
              "don't have to",
              "must not",
              "should",
              "can",
              "might"
            ],
            "ans": 1,
            "exp": "박물관 규칙상 미술품을 만지는 것은 금지이므로 must not이 올바릅니다."
          },
          {
            "q": "밑줄 친 부분의 뜻이 '~할 필요가 없다'인 것은?",
            "options": [
              "You must not park here.",
              "He cannot be telling the truth.",
              "You don't have to do it alone.",
              "She should not eat too much salt.",
              "May not enter without permission."
            ],
            "ans": 2,
            "exp": "don't have to는 '~할 필요가 없다'는 불필요를 나타냅니다."
          }
        ]
      },
      {
        "unitNo": 7,
        "title": "문장의 기본 형태 (1·2·3형식 집중)",
        "part": "문장 구조",
        "targetGrade": "중1 기초",
        "summary": "주어(S), 동사(V), 목적어(O), 보어(C)의 개념과 1·2·3형식 문장 분석",
        "formulaCards": [
          {
            "name": "1·2·3형식의 구조",
            "formula": "1형식(S+V) / 2형식(S+V+SC: 주격보어) / 3형식(S+V+O: 목적어)",
            "example": "The sun rises. (1) / She became a doctor. (2) / I bought a bike. (3)",
            "trap": "전치사구는 수식어(M)이므로 문장 형식 성분에 포함되지 않음! (He lives in Seoul - 1형식)"
          },
          {
            "name": "2형식 감각동사",
            "formula": "look, sound, smell, taste, feel + 형용사",
            "example": "This soup tastes delicious. You look tired.",
            "trap": "우리말로는 '달콤하게'로 해석되어 sweetly를 쓰고 싶지만 보어 자리이므로 sweet(형용사)을 쓴다."
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_07",
            "sentence": "The pizza smells deliciously and the music sounds good.",
            "underlined": [
              "smells",
              "deliciously",
              "music",
              "good"
            ],
            "wrongIndex": 1,
            "correction": "delicious",
            "explanation": "감각동사 smell 뒤에는 부사가 아닌 형용사 보어(delicious)가 와야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 문장의 형식이 2형식인 것은?",
            "options": [
              "Birds fly in the sky.",
              "My sister became a lawyer.",
              "He read an interesting book.",
              "They arrived at the station.",
              "I sent an email."
            ],
            "ans": 1,
            "exp": "My sister(S) became(V) a lawyer(SC)는 주격보어를 가진 2형식 문장입니다."
          },
          {
            "q": "다음 빈칸에 들어갈 수 없는 단어는?\n'The coffee smells ________.'",
            "options": [
              "sweet",
              "nice",
              "fresh",
              "great",
              "strongly"
            ],
            "ans": 4,
            "exp": "감각동사 smells 뒤에는 형용사 보어가 와야 하므로 부사 strongly는 올 수 없습니다."
          },
          {
            "q": "다음 문장의 밑줄 친 부분의 문장 성분은?\n'We enjoyed [the delicious dinner] together.'",
            "options": [
              "주어(S)",
              "동사(V)",
              "목적어(O)",
              "주격보어(SC)",
              "목적격보어(OC)"
            ],
            "ans": 2,
            "exp": "동사 enjoyed의 대상을 나타내므로 목적어(O)입니다."
          },
          {
            "q": "다음 중 1형식 문장인 것은?",
            "options": [
              "She lives in New York.",
              "He made a wooden desk.",
              "My mom looks happy.",
              "They called him a hero.",
              "I like fresh fruit."
            ],
            "ans": 0,
            "exp": "She(S) lives(V) 뒤의 in New York은 전치사 수식어구(M)이므로 완전자동사를 사용한 1형식 문장입니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "Your voice sounds sweetly.",
              "He seems sadly today.",
              "The food tasted badly.",
              "She felt happy at the news.",
              "It looks like nicely."
            ],
            "ans": 3,
            "exp": "감각동사 felt 뒤에 형용사 보어 happy가 올바르게 쓰였습니다."
          }
        ]
      },
      {
        "unitNo": 8,
        "title": "기본 접속사와 명령문·감탄문",
        "part": "문장의 연결",
        "targetGrade": "중1 기초",
        "summary": "등위접속사(and, but, or, so), 명령문 + and/or, 감탄문(What a / How)",
        "formulaCards": [
          {
            "name": "명령문, and / or",
            "formula": "명령문, and ~ (~해라, 그러면 ...) / 명령문, or ~ (~해라, 그렇지 않으면 ...)",
            "example": "Hurry up, and you will catch the train. Hurry up, or you will be late.",
            "trap": "or는 '그렇지 않으면(otherwise)'의 경고 의미!"
          },
          {
            "name": "감탄문 공식",
            "formula": "What + a/an + 형용사 + 명사 (+ 주어 + 동사)! / How + 형용사/부사 (+ 주어 + 동사)!",
            "example": "What a pretty girl she is! / How fast he runs!",
            "trap": "명사가 있으면 What, 순수 형용사/부사만 있으면 How!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_08",
            "sentence": "How an amazing view this is! How beautiful the mountains are!",
            "underlined": [
              "How an",
              "amazing view",
              "How beautiful",
              "are"
            ],
            "wrongIndex": 0,
            "correction": "What an",
            "explanation": "감탄 대상이 명사구(an amazing view)이므로 'What a(n) + 형용사 + 명사 + 주어 + 동사!' 공식을 적용하여 What an으로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "빈칸에 들어갈 알맞은 접속사는?\n'Put on your coat, ________ you will catch a cold.'",
            "options": [
              "and",
              "or",
              "so",
              "but",
              "because"
            ],
            "ans": 1,
            "exp": "'코트를 입어라, 그렇지 않으면 감기에 걸릴 것이다'이므로 or가 알맞습니다."
          },
          {
            "q": "다음 중 감탄문의 형태가 어법상 올바른 것은?",
            "options": [
              "How a cute puppy it is!",
              "What fast he can run!",
              "What an exciting game it was!",
              "How tall boys they are!",
              "What beautifully she dances!"
            ],
            "ans": 2,
            "exp": "What + an + 형용사(exciting) + 명사(game) + 주어(it) + 동사(was)!가 완벽합니다."
          },
          {
            "q": "빈칸에 들어갈 말로 가장 적절한 것은?\n'________ delicious this cake is!'",
            "options": [
              "What",
              "How",
              "What a",
              "How a",
              "So"
            ],
            "ans": 1,
            "exp": "형용사(delicious) + 주어(this cake) + 동사(is) 어순이므로 How가 알맞습니다."
          },
          {
            "q": "대화의 빈칸에 알맞은 접속사는?\n'He was very tired, ________ he went to bed early.'",
            "options": [
              "and",
              "but",
              "so",
              "or",
              "for"
            ],
            "ans": 2,
            "exp": "원인과 결과를 연결하는 '그래서'의 의미이므로 so가 알맞습니다."
          },
          {
            "q": "다음 두 문장을 한 문장으로 바꿀 때 알맞은 것은?\n'Start now, and you will not miss the flight.'",
            "options": [
              "If you start now, you will miss the flight.",
              "If you don't start now, you will catch the flight.",
              "Unless you start now, you will not miss the flight.",
              "If you start now, you will catch the flight.",
              "Start now, or you will catch the flight."
            ],
            "ans": 3,
            "exp": "'지금 출발해라, 그러면 비행기를 놓치지 않을 것이다'는 '지금 출발하면 비행기를 탈 수 있을 것이다'와 같습니다."
          }
        ]
      }
    ]
  },
  {
    "level": 2,
    "levelCode": "lv2",
    "levelName": "중2 문법",
    "targetGrade": "중2 핵심 내신",
    "badge": "Lv.2 중2 문법",
    "color": "blue",
    "themeColor": "#2563eb",
    "desc": "to부정사 3대 용법, 동명사, 현재완료 4대 용법, 4형식 수여동사, 비교 구문, 수동태 기초 등 중2 핵심",
    "units": [
      {
        "unitNo": 9,
        "title": "to부정사의 명사적·형용사적·부사적 용법",
        "part": "준동사",
        "targetGrade": "중2 필수",
        "summary": "to부정사의 3대 용법 판별과 목적·결과·원인·형용사 수식의 다양한 부사적 쓰임",
        "formulaCards": [
          {
            "name": "to부정사의 3대 용법 판별",
            "formula": "명사적(~하기/것: 주·목·보) / 형용사적(~할: 명사수식) / 부사적(~하기 위해, 해서: 목적/감정원인)",
            "example": "To read books is fun. (명사) / I have no books to read. (형용사) / I went to buy books. (부사)",
            "trap": "형용사적 용법에서 전치사가 필요한 경우 주의! (a chair to sit on, a friend to talk with)"
          },
          {
            "name": "의문사 + to부정사",
            "formula": "what/how/where/when + to부정사 = 명사구",
            "example": "I don't know what to do next. (= what I should do)",
            "trap": "why + to부정사는 영어에 존재하지 않음!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_09",
            "sentence": "He gave me a piece of paper to write on, but I had no pen to write on.",
            "underlined": [
              "gave me",
              "paper to write on",
              "had no",
              "pen to write on"
            ],
            "wrongIndex": 3,
            "correction": "pen to write with",
            "explanation": "펜은 그것을 가지고 쓰는 도구이므로 전치사 with를 동반한 to write with가 되어야 올바릅니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 밑줄 친 to부정사의 용법이 나머지와 다른 것은?",
            "options": [
              "I want [to be] a scientist.",
              "She decided [to study] abroad.",
              "He has a lot of homework [to do].",
              "They promised [to help] us.",
              "[To learn] English is important."
            ],
            "ans": 2,
            "exp": "3번은 명사 homework를 뒤에서 수식하는 형용사적 용법입니다. 나머지는 모두 목적어나 주어로 쓰인 명사적 용법입니다."
          },
          {
            "q": "다음 밑줄 친 부분의 쓰임이 '목적(~하기 위해)'을 나타내는 것은?",
            "options": [
              "He grew up to be a famous doctor.",
              "I am glad to see you again.",
              "She went to the library to borrow books.",
              "He must be crazy to say such a thing.",
              "The book is easy to understand."
            ],
            "ans": 2,
            "exp": "3번은 도서관에 간 목적(~하기 위해)을 나타냅니다. (1번은 결과, 2번은 감정의 원인, 4번은 판단의 근거, 5번은 형용사 수식)"
          },
          {
            "q": "다음 중 전치사의 쓰임이 잘못된 문장은?",
            "options": [
              "I need a chair to sit on.",
              "She has no friends to talk with.",
              "He bought a house to live in.",
              "Give me a pen to write with.",
              "I want a piece of paper to write."
            ],
            "ans": 4,
            "exp": "종이 '위에' 쓰는 것이므로 to write on으로 전치사 on이 반드시 있어야 합니다."
          },
          {
            "q": "다음 문장과 의미가 같은 것은?\n'I don't know where I should go.'",
            "options": [
              "I don't know where to go.",
              "I don't know how to go.",
              "I don't know what to go.",
              "I don't know when to go.",
              "I don't know why to go."
            ],
            "ans": 0,
            "exp": "'where I should go'는 '의문사 + to부정사'인 'where to go'로 바꿔 쓸 수 있습니다."
          },
          {
            "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'My father promised ________ me a new bicycle.'",
            "options": [
              "buying",
              "to buy",
              "buy",
              "bought",
              "to buying"
            ],
            "ans": 1,
            "exp": "동사 promise는 미래 지향적 동사이므로 to부정사(to buy)만을 목적어로 취합니다."
          }
        ]
      },
      {
        "unitNo": 10,
        "title": "동명사의 역할과 to부정사 구별 동사",
        "part": "준동사",
        "targetGrade": "중2 필수",
        "summary": "동명사의 주·목·보 역할, 동명사만/to부정사만 취하는 동사, 둘 다 취하며 의미가 달라지는 동사",
        "formulaCards": [
          {
            "name": "목적어 취급 동사 공식",
            "formula": "to부정사만: want, hope, wish, decide, plan, promise / 동명사만: enjoy, finish, avoid, mind, practice, give up",
            "example": "I enjoy playing tennis. / I want to play tennis.",
            "trap": "enjoy to play (x), decide playing (x)"
          },
          {
            "name": "remember / forget / stop",
            "formula": "remember/forget + to부정사(미래: ~할 것을) / + -ing(과거: ~했던 것을) / stop to V(~하기 위해 멈추다) / stop -ing(~하던 것을 멈추다)",
            "example": "Remember to lock the door. / I remember meeting her.",
            "trap": "stop to smoke(담배를 피우기 위해 가던 길을 멈추다) vs stop smoking(금연하다)"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_10",
            "sentence": "Don't forget locking the front door when you leave the house.",
            "underlined": [
              "Don't forget",
              "locking",
              "front door",
              "when you leave"
            ],
            "wrongIndex": 1,
            "correction": "to lock",
            "explanation": "forget 뒤에 미래에 할 일을 잊지 말라고 당부할 때는 to부정사(to lock)를 써야 합니다. (-ing는 과거에 했던 일)"
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 동명사(-ing)만 들어갈 수 있는 동사는?",
            "options": [
              "hope",
              "decide",
              "finish",
              "promise",
              "plan"
            ],
            "ans": 2,
            "exp": "finish는 동명사만을 목적어로 취하는 대표적인 동사입니다. (hope, decide, promise, plan은 to부정사)"
          },
          {
            "q": "다음 두 문장의 의미가 서로 다른 것은?",
            "options": [
              "He stopped to smoke. / He stopped smoking.",
              "I started to cry. / I started crying.",
              "She likes to swim. / She likes swimming.",
              "They began to dance. / They began dancing.",
              "He continued to work. / He continued working."
            ],
            "ans": 0,
            "exp": "stop to smoke는 '담배를 피우기 위해 멈추다'이고, stop smoking은 '담배 피우기를 중단하다(금연하다)'이므로 의미가 완전히 다릅니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I remember ________ him last year, but I forgot ________ his name.'",
            "options": [
              "meeting - asking",
              "to meet - to ask",
              "meeting - to ask",
              "to meet - asking",
              "meet - ask"
            ],
            "ans": 2,
            "exp": "작년에 만났던 과거 사실은 meeting, 이름을 물어보는 것을 깜빡했다는 것은 to ask가 알맞습니다."
          },
          {
            "q": "다음 중 밑줄 친 부분의 쓰임이 어법상 어색한 것은?",
            "options": [
              "She enjoys listening to music.",
              "Would you mind closing the window?",
              "He gave up to solve the puzzle.",
              "I practiced speaking English.",
              "They avoided answering my question."
            ],
            "ans": 2,
            "exp": "give up은 동명사를 목적어로 취하므로 to solve -> solving으로 고쳐야 합니다."
          },
          {
            "q": "다음 중 밑줄 친 -ing가 '동명사'로 쓰인 것은?",
            "options": [
              "Look at the sleeping baby.",
              "She is reading a book now.",
              "My hobby is collecting coins.",
              "The crying child stopped.",
              "A rolling stone gathers no moss."
            ],
            "ans": 2,
            "exp": "3번의 collecting은 문장의 보어로 쓰인 동명사입니다. 나머지는 모두 명사를 수식하거나 진행형을 만드는 현재분사입니다."
          }
        ]
      },
      {
        "unitNo": 11,
        "title": "현재완료 시제 (완료, 경험, 계속, 결과)",
        "part": "시제",
        "targetGrade": "중2 필수",
        "summary": "have/has + p.p.의 구조와 4대 용법(완료·경험·계속·결과) 및 과거시점 부사 결합 금지 원칙",
        "formulaCards": [
          {
            "name": "현재완료 4대 용법 구별 짝꿍 부사",
            "formula": "완료(just, already, yet) / 경험(ever, never, before, once) / 계속(for + 기간, since + 시작시점) / 결과(have gone to: 가고 없다, have lost)",
            "example": "I have lived here for 5 years. She has gone to Paris.",
            "trap": "have been to(~에 가본 적 있다: 경험) vs have gone to(~에 가버렸다: 결과)"
          },
          {
            "name": "과거 특정 시점 부사 결합 금지",
            "formula": "yesterday, ago, last ~, in + 연도, when 의문문과는 현재완료 불가 (단순과거 사용)",
            "example": "I have met him yesterday. (x) -> I met him yesterday. (o)",
            "trap": "When have you arrived? (x) -> When did you arrive? (o)"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_11",
            "sentence": "My uncle has moved to Canada two years ago and he still lives there.",
            "underlined": [
              "has moved",
              "to Canada",
              "two years ago",
              "still lives"
            ],
            "wrongIndex": 0,
            "correction": "moved",
            "explanation": "two years ago처럼 명백한 과거 시점을 나타내는 부사구는 현재완료(has moved)와 함께 쓸 수 없으며 단순과거형 moved를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 밑줄 친 현재완료의 용법이 '경험'인 것은?",
            "options": [
              "I have just finished my lunch.",
              "She has lived in Seoul since 2015.",
              "Have you ever seen a kangaroo?",
              "He has lost his smartphone.",
              "They have already left for the airport."
            ],
            "ans": 2,
            "exp": "ever, never, before 등과 함께 쓰여 '~해본 적이 있다'를 나타내는 3번이 '경험'입니다. (1: 완료, 2: 계속, 4: 결과, 5: 완료)"
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "I have known her for ten years.",
              "She has gone to London yesterday.",
              "They have been to Japan twice.",
              "He hasn't done his homework yet.",
              "We have studied English since 2020."
            ],
            "ans": 1,
            "exp": "yesterday는 명백한 과거 시점이므로 현재완료 has gone과 함께 쓸 수 없고 went to London yesterday가 되어야 합니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞게 짝지어진 것은?\n'I have lived here ________ ten years, ________ my family moved from Busan.'",
            "options": [
              "for - since",
              "since - for",
              "for - for",
              "since - since",
              "during - since"
            ],
            "ans": 0,
            "exp": "숫자 기간(ten years) 앞에는 for, 과거 시점의 절 앞에는 since가 알맞습니다."
          },
          {
            "q": "대화의 밑줄 친 부분의 의미로 가장 적절한 것은?\nA: 'Where is Mike?'\nB: 'He [has gone to] the bookstore.'",
            "options": [
              "서점에 가본 적이 있다",
              "서점에 방금 도착했다",
              "서점에 가서 지금 여기에 없다",
              "서점에 가기를 좋아한다",
              "서점에서 돌아왔다"
            ],
            "ans": 2,
            "exp": "have/has gone to는 '결과' 용법으로 '~로 가버려서 지금 여기에 없다'는 뜻입니다."
          },
          {
            "q": "다음 중 어법상 올바른 의문문은?",
            "options": [
              "When have you bought this laptop?",
              "When did you buy this laptop?",
              "When have you buy this laptop?",
              "When do you bought this laptop?",
              "Since when did you buy this laptop?"
            ],
            "ans": 1,
            "exp": "When 의문문은 특정 시점을 묻기 때문에 현재완료와 함께 쓸 수 없으며 단순과거 When did you buy~가 올바릅니다."
          }
        ]
      },
      {
        "unitNo": 12,
        "title": "감각동사(2형식)와 수여동사(4형식 ➔ 3형식 전환)",
        "part": "문장 구조",
        "targetGrade": "중2 필수",
        "summary": "감각동사 뒤 형용사 보어, 4형식(S+V+IO+DO) 수여동사의 3형식 전치사(to, for, of) 전환",
        "formulaCards": [
          {
            "name": "수여동사 4형식 ➔ 3형식 전치사 분류",
            "formula": "to: give, send, tell, show, lend / for: make, buy, cook, get, find / of: ask",
            "example": "She made me a cake. -> She made a cake for me.",
            "trap": "make, buy, cook류는 정성이 들어가므로 전치사 for를 씀!"
          },
          {
            "name": "감각동사 + like + 명사",
            "formula": "look/sound/smell/taste/feel + 형용사 OR + like + 명사",
            "example": "It looks nice. (형용사) / It looks like a doll. (명사)",
            "trap": "looks like nice (x) -> look 뒤에 명사가 오려면 반드시 like 필요!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_12",
            "sentence": "My mom made a delicious birthday cake to me yesterday.",
            "underlined": [
              "made",
              "birthday cake",
              "to me",
              "yesterday"
            ],
            "wrongIndex": 2,
            "correction": "for me",
            "explanation": "수여동사 make는 4형식을 3형식으로 전환할 때 간접목적어 앞에 전치사 for를 씁니다. (make/buy/cook/get -> for)"
          }
        ],
        "questions": [
          {
            "q": "다음 문장을 3형식으로 바꿀 때 빈칸에 들어갈 전치사는?\n'My grandmother made me a warm sweater.'\n➔ 'My grandmother made a warm sweater ________ me.'",
            "options": [
              "to",
              "for",
              "of",
              "at",
              "with"
            ],
            "ans": 1,
            "exp": "make, buy, cook 등은 3형식 전환 시 전치사 for를 씁니다."
          },
          {
            "q": "다음 중 4형식을 3형식으로 전환할 때 전치사 'to'를 쓰는 동사는?",
            "options": [
              "buy",
              "make",
              "cook",
              "give",
              "get"
            ],
            "ans": 3,
            "exp": "give, send, tell, show 등은 전치사 to를 씁니다. (buy, make, cook, get은 for)"
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 전치사는?\n'May I ask a favor ________ you?'",
            "options": [
              "to",
              "for",
              "of",
              "from",
              "with"
            ],
            "ans": 2,
            "exp": "ask는 3형식 전환 시 간접목적어 앞에 전치사 of를 씁니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The baby looks like cute.",
              "He sounded very angrily.",
              "She felt sadly about the news.",
              "This song sounds like an old ballad.",
              "The medicine tasted sweetly."
            ],
            "ans": 3,
            "exp": "sound like 뒤에 명사구 an old ballad가 올바르게 연결되었습니다. (1: like 삭제, 2: angry, 3: sad, 5: sweet)"
          },
          {
            "q": "다음 두 문장의 의미가 같도록 빈칸에 알맞은 말을 쓰시오.\n'I sent him an email yesterday.'\n= 'I sent an email ________ ________ yesterday.'",
            "options": [
              "for him",
              "to him",
              "of him",
              "with him",
              "at him"
            ],
            "ans": 1,
            "exp": "동사 send는 3형식 전환 시 전치사 to를 취하므로 to him이 알맞습니다."
          }
        ]
      },
      {
        "unitNo": 13,
        "title": "비교 구문 (원급, 비교급, 최상급)",
        "part": "형용사와 부사",
        "targetGrade": "중2 필수",
        "summary": "as ~ as 원급 비교, 비교급 + than, the + 최상급 + in/of 및 불규칙 비교급 변화",
        "formulaCards": [
          {
            "name": "원급 비교와 부정",
            "formula": "as + 원급(형용사/부사) + as / not as[so] + 원급 + as",
            "example": "He is as tall as his father. She is not so old as I thought.",
            "trap": "as와 as 사이에는 반드시 '원급'만 와야 함! (as taller as - x)"
          },
          {
            "name": "비교급 강조 부사",
            "formula": "much, even, still, far, a lot + 비교급 (훨씬)",
            "example": "This phone is much better than that one.",
            "trap": "very는 비교급을 절대 수식할 수 없음! (very better - x)"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_13",
            "sentence": "This puzzle is very more difficult than the one we solved yesterday.",
            "underlined": [
              "puzzle",
              "very",
              "more difficult",
              "than"
            ],
            "wrongIndex": 1,
            "correction": "much (또는 even, still, far, a lot)",
            "explanation": "비교급(more difficult)을 수식·강조할 때는 very를 쓸 수 없고 much, even, still, far, a lot을 씁니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 비교급을 강조하는 말로 빈칸에 들어갈 수 없는 것은?\n'This movie is ________ more interesting than that one.'",
            "options": [
              "much",
              "even",
              "still",
              "very",
              "far"
            ],
            "ans": 3,
            "exp": "very는 원급만을 수식할 수 있으며 비교급을 수식할 수 없습니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'Tom runs as ________ as his coach.'",
            "options": [
              "faster",
              "fastest",
              "fast",
              "fastly",
              "more fast"
            ],
            "ans": 2,
            "exp": "as ~ as 사이에는 형용사나 부사의 '원급'이 와야 하므로 fast가 정답입니다."
          },
          {
            "q": "다음 중 형용사·부사의 비교급-최상급 변화가 잘못된 것은?",
            "options": [
              "good - better - best",
              "bad - worse - worst",
              "many - more - most",
              "little - less - least",
              "fast - more fast - fastest"
            ],
            "ans": 4,
            "exp": "fast의 비교급은 faster입니다."
          },
          {
            "q": "다음 문장과 의미가 같은 것은?\n'She is taller than any other girl in her class.'",
            "options": [
              "She is the tallest girl in her class.",
              "She is as tall as all girls in her class.",
              "Other girls are taller than her.",
              "She is not so tall as other girls.",
              "No other girl is shorter than her."
            ],
            "ans": 0,
            "exp": "'비교급 + than any other + 단수명사'는 '가장 ~하다'는 최상급의 의미를 나타냅니다."
          },
          {
            "q": "다음 빈칸에 알맞은 전치사는?\n'Mount Everest is the highest mountain ________ the world.'",
            "options": [
              "of",
              "in",
              "at",
              "on",
              "from"
            ],
            "ans": 1,
            "exp": "장소나 집단을 나타내는 단수명사 앞의 최상급 범위에는 전치사 in을 씁니다. (복수명사에는 of)"
          }
        ]
      },
      {
        "unitNo": 14,
        "title": "조동사 심화 (have to, used to, would like to)",
        "part": "조동사",
        "targetGrade": "중2 필수",
        "summary": "have to의 시제별 변화, used to(~하곤 했다 vs 과거의 상태), would like to 및 had better",
        "formulaCards": [
          {
            "name": "used to vs be used to",
            "formula": "used to + V원형(~하곤 했다) / be used to + V원형(~하는 데 사용되다) / be used to + -ing(~에 익숙하다)",
            "example": "I used to play the piano. / Wood is used to make paper. / I am used to getting up early.",
            "trap": "수능과 내신에서 가장 많이 출제되는 3대 used to 혼동 유형!"
          },
          {
            "name": "had better와 would rather",
            "formula": "had better + 동사원형 (~하는 게 낫다) / had better not + 동사원형",
            "example": "You had better leave now. You had better not stay up late.",
            "trap": "had better not의 위치! not had better (x)"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_14",
            "sentence": "There used to being a big bookstore on the corner of the street.",
            "underlined": [
              "There",
              "used to being",
              "bookstore",
              "on the corner"
            ],
            "wrongIndex": 1,
            "correction": "used to be",
            "explanation": "'과거에 ~이 있었다(과거의 상태)'를 나타낼 때는 'used to + 동사원형(be)'을 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 밑줄 친 부분의 의미는?\n'There [used to be] a large pine tree in front of my house.'",
            "options": [
              "큰 소나무가 있는 데 사용된다",
              "큰 소나무가 있는 것에 익숙하다",
              "과거에 큰 소나무가 있었다",
              "큰 소나무가 있어야만 한다",
              "큰 소나무가 있을지도 모른다"
            ],
            "ans": 2,
            "exp": "used to be는 '과거에 ~이 있었다(지금은 없다)'는 과거의 상태를 나타냅니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "You had not better go out in this storm.",
              "You had better not go out in this storm.",
              "You better had not go out in this storm.",
              "You not had better go out in this storm.",
              "You had better don't go out in this storm."
            ],
            "ans": 1,
            "exp": "had better의 부정형은 had better not + 동사원형입니다."
          },
          {
            "q": "빈칸에 들어갈 알맞은 형태는?\n'She is used to ________ in front of a large audience.'",
            "options": [
              "speak",
              "spoke",
              "speaking",
              "spoken",
              "be spoken"
            ],
            "ans": 2,
            "exp": "be used to -ing는 '~하는 것에 익숙하다'는 뜻이므로 동명사 speaking이 와야 합니다."
          },
          {
            "q": "대화의 빈칸에 알맞은 것은?\nA: 'Would you like ________ some coffee?'\nB: 'Yes, please.'",
            "options": [
              "drink",
              "to drink",
              "drinking",
              "drank",
              "drinks"
            ],
            "ans": 1,
            "exp": "would like to + 동사원형은 '~하고 싶다'라는 공손한 표현입니다."
          },
          {
            "q": "다음 두 문장이 같은 의미가 되도록 빈칸에 알맞은 말을 고르시오.\n'He must submit the report today.'\n= 'He ________ to submit the report today.'",
            "options": [
              "has",
              "have",
              "had",
              "will",
              "is"
            ],
            "ans": 0,
            "exp": "주어가 3인칭 단수(He)이므로 must의 대용 표현으로 has to가 알맞습니다."
          }
        ]
      },
      {
        "unitNo": 15,
        "title": "수동태의 기본 개념 (be + p.p. by ~)",
        "part": "태(Voice)",
        "targetGrade": "중2 필수",
        "summary": "능동태를 수동태로 전환하는 원리, 시제별 수동태, 행위자 by의 생략",
        "formulaCards": [
          {
            "name": "수동태 기본 공식",
            "formula": "주어 + be동사 + 과거분사(p.p.) + (by + 행위자)",
            "example": "The telephone was invented by Bell. (능동: Bell invented the telephone.)",
            "trap": "수동태의 시제와 수는 be동사(is, are, was, were)가 표현함!"
          },
          {
            "name": "수동태 불가 동사 (자동사)",
            "formula": "appear, disappear, happen, occur, consist of, belong to",
            "example": "The accident was happened. (x) -> The accident happened. (o)",
            "trap": "자동사는 목적어가 없으므로 수동태 자체가 불가능함!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_15",
            "sentence": "The tragic car accident was happened on the highway last night.",
            "underlined": [
              "accident",
              "was happened",
              "on the highway",
              "last night"
            ],
            "wrongIndex": 1,
            "correction": "happened",
            "explanation": "happen, occur, appear, disappear 등 자동사는 목적어를 갖지 않으므로 수동태(be happened)로 쓸 수 없습니다."
          }
        ],
        "questions": [
          {
            "q": "다음 능동태 문장을 수동태로 올바르게 바꾼 것은?\n'Shakespeare wrote Hamlet.'",
            "options": [
              "Hamlet is written by Shakespeare.",
              "Hamlet was wrote by Shakespeare.",
              "Hamlet was written by Shakespeare.",
              "Hamlet were written by Shakespeare.",
              "Hamlet wrote by Shakespeare."
            ],
            "ans": 2,
            "exp": "과거 시제이면서 단수 주어이므로 be동사 was + p.p. written by가 올바릅니다."
          },
          {
            "q": "다음 중 수동태로 바꿀 수 없는 동사는?",
            "options": [
              "build",
              "write",
              "disappear",
              "invent",
              "clean"
            ],
            "ans": 2,
            "exp": "disappear(사라지다)는 목적어가 없는 완전자동사이므로 수동태를 만들 수 없습니다."
          },
          {
            "q": "다음 빈칸에 들어갈 알맞은 말은?\n'Many bridges in this city ________ in the 1990s.'",
            "options": [
              "build",
              "built",
              "were built",
              "was built",
              "are built"
            ],
            "ans": 2,
            "exp": "주어 Many bridges는 복수이고 1990년대(과거)에 지어졌으므로 were built가 정답입니다."
          },
          {
            "q": "다음 중 by 이외의 전치사를 쓰는 수동태로 잘못 짝지어진 것은?",
            "options": [
              "be surprised at",
              "be interested in",
              "be covered with",
              "be satisfied of",
              "be filled with"
            ],
            "ans": 3,
            "exp": "'~에 만족하다'는 be satisfied with를 씁니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 전치사는?\n'The ground was covered ________ white snow.'",
            "options": [
              "at",
              "with",
              "in",
              "by",
              "of"
            ],
            "ans": 1,
            "exp": "'~로 덮여 있다'는 be covered with를 사용합니다."
          }
        ]
      },
      {
        "unitNo": 16,
        "title": "접속사 (시간, 이유, 조건 if, 양보 although)",
        "part": "문장의 연결",
        "targetGrade": "중2 필수",
        "summary": "부사절 접속사(when, while, because, if, although)와 시간·조건 부사절의 현재 시제 원칙",
        "formulaCards": [
          {
            "name": "시간·조건 부사절의 대원칙",
            "formula": "시간(when, while, after)이나 조건(if, unless) 부사절에서는 '미래시제 대신 현재시제' 사용!",
            "example": "If it rains tomorrow, we will stay home. (If it will rain - x)",
            "trap": "주절은 미래(will stay)를 쓰지만, if절 안에서는 반드시 현재형(rains)을 써야 함!"
          },
          {
            "name": "if vs unless",
            "formula": "unless = if ~ not (~하지 않는다면)",
            "example": "Unless you hurry, you will be late. (= If you don't hurry, ...)",
            "trap": "unless 절 안에는 이미 부정의 의미가 있으므로 not을 또 쓰면 안 됨!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_16",
            "sentence": "If it will rain tomorrow, the baseball game will be canceled.",
            "underlined": [
              "If it",
              "will rain",
              "tomorrow",
              "will be canceled"
            ],
            "wrongIndex": 1,
            "correction": "rains",
            "explanation": "조건이나 시간을 나타내는 부사절(If절)에서는 미래의 일이라도 will을 쓰지 않고 현재시제(rains)가 미래를 대신합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 동사의 형태로 올바른 것은?\n'We will go on a picnic if the weather ________ fine tomorrow.'",
            "options": [
              "will be",
              "is",
              "was",
              "be",
              "being"
            ],
            "ans": 1,
            "exp": "조건의 부사절에서는 내일(tomorrow)의 일이라도 현재시제 is를 써야 합니다."
          },
          {
            "q": "다음 두 문장을 한 문장으로 연결할 때 빈칸에 알맞은 접속사는?\n'It was raining heavily. He went out for a walk.'\n➔ '________ it was raining heavily, he went out for a walk.'",
            "options": [
              "Because",
              "Although",
              "Since",
              "If",
              "While"
            ],
            "ans": 1,
            "exp": "'비가 쏟아졌음에도 불구하고 산책을 나갔다'는 상반된 내용(양보)이므로 Although가 알맞습니다."
          },
          {
            "q": "다음 문장과 의미가 같은 것은?\n'Unless you study hard, you will not pass the exam.'",
            "options": [
              "If you study hard, you will not pass the exam.",
              "If you don't study hard, you will pass the exam.",
              "If you don't study hard, you will not pass the exam.",
              "If you study hard, you will pass the exam.",
              "When you study hard, you will not pass the exam."
            ],
            "ans": 2,
            "exp": "unless는 if ... not과 같으므로 'If you don't study hard, you will not pass the exam.'이 정답입니다."
          },
          {
            "q": "다음 중 어법상 어색한 문장은?",
            "options": [
              "I will call you when I arrive at the hotel.",
              "She was listening to music while she was jogging.",
              "Because he was sick, he couldn't take the test.",
              "Please wait here until he will come back.",
              "Although he is rich, he lives simply."
            ],
            "ans": 3,
            "exp": "시간의 부사절 until 뒤에는 미래시제 will come 대신 현재시제 comes를 써야 합니다."
          },
          {
            "q": "다음 빈칸에 공통으로 들어갈 수 있는 접속사는?\n'________ she was tired, she smiled.' / '________ it was cold, we swam.'",
            "options": [
              "Because",
              "Though",
              "Since",
              "If",
              "As"
            ],
            "ans": 1,
            "exp": "비록 ~일지라도의 양보를 나타내는 Though(Although)가 알맞습니다."
          }
        ]
      }
    ]
  },
  {
    "level": 3,
    "levelCode": "lv3",
    "levelName": "중3 문법",
    "targetGrade": "중3 내신 & 고등 선행",
    "badge": "Lv.3 중3 문법",
    "color": "indigo",
    "themeColor": "#4f46e5",
    "desc": "5형식 사역·지각동사, 관계대명사/관계부사, 분사구문, 가정법 과거, 간접의문문 등 중3 완성",
    "units": [
      {
        "unitNo": 17,
        "title": "5형식 목적격보어 (사역동사 & 지각동사)",
        "part": "문장 구조",
        "targetGrade": "중3 완성",
        "summary": "사역동사(make/have/let), 지각동사(see/hear/watch/feel), help/get의 목적격보어 형태 완벽 정리",
        "formulaCards": [
          {
            "name": "사역동사와 지각동사의 목적격보어",
            "formula": "사역동사(make, have, let) + 목적어 + 동사원형 / 지각동사(see, hear, feel) + 목적어 + 동사원형 or 현재분사(-ing)",
            "example": "She made him clean the room. / I heard someone singing.",
            "trap": "목적어와 보어의 관계가 수동이면 사역/지각 상관없이 무조건 과거분사(p.p.)! (I had my hair cut.)"
          },
          {
            "name": "to부정사를 목적격보어로 취하는 일반 5형식 동사",
            "formula": "want, tell, order, ask, allow, expect, advise + 목적어 + to부정사",
            "example": "My mom told me to clean my room. He asked me to help him.",
            "trap": "사역/지각동사가 아닌 일반 5형식 동사는 목적격보어 자리에 반드시 to부정사가 옴!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_17",
            "sentence": "The teacher made all students to write an essay, but she allowed us to take a break.",
            "underlined": [
              "made",
              "to write",
              "essay",
              "to take"
            ],
            "wrongIndex": 1,
            "correction": "write",
            "explanation": "사역동사 make는 목적격 보어로 to부정사가 아닌 동사원형(write)을 취합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 동사의 형태로 올바른 것은?\n'My father let me ________ his car yesterday.'",
            "options": [
              "drive",
              "to drive",
              "driving",
              "drove",
              "driven"
            ],
            "ans": 0,
            "exp": "사역동사 let 뒤의 목적격보어는 동사원형(drive)입니다."
          },
          {
            "q": "다음 중 밑줄 친 부분의 어법이 틀린 것은?",
            "options": [
              "I saw him crossing the street.",
              "She heard her name called from behind.",
              "My doctor advised me to eat less sugar.",
              "He helped me to carry the heavy box.",
              "The teacher made us to memorize the poem."
            ],
            "ans": 4,
            "exp": "사역동사 made 뒤의 목적격보어는 동사원형이므로 to memorize -> memorize로 고쳐야 합니다."
          },
          {
            "q": "빈칸에 들어갈 알맞은 형태는?\n'I had my smartphone ________ yesterday because the screen broke.'",
            "options": [
              "repair",
              "to repair",
              "repaired",
              "repairing",
              "repairs"
            ],
            "ans": 2,
            "exp": "스마트폰이 '수리되는' 수동 관계이므로 과거분사 repaired가 와야 합니다."
          },
          {
            "q": "다음 중 목적격보어로 to부정사만을 취하는 동사는?",
            "options": [
              "make",
              "have",
              "let",
              "see",
              "allow"
            ],
            "ans": 4,
            "exp": "allow는 목적격보어로 to부정사를 취합니다. (make, have, let은 동사원형, see는 동사원형/현재분사)"
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'We watched the sun ________ over the horizon.'",
            "options": [
              "rise",
              "rose",
              "to rise",
              "risen",
              "rises"
            ],
            "ans": 0,
            "exp": "지각동사 watch 뒤의 목적격보어는 동사원형(rise) 또는 현재분사(rising)입니다."
          }
        ]
      },
      {
        "unitNo": 18,
        "title": "관계대명사의 격 (주격, 목적격, 소유격 whose)",
        "part": "관계사",
        "targetGrade": "중3 완성",
        "summary": "선행사(사람/사물)에 따른 who, which, that의 격별 쓰임과 소유격 whose, 목적격 생략",
        "formulaCards": [
          {
            "name": "관계대명사의 격 판별",
            "formula": "주격: 선행사 + who/which/that + 동사 / 목적격: 선행사 + who(m)/which/that + S + V / 소유격: 선행사 + whose + 명사",
            "example": "The girl who won the race is Jane. / A dog whose tail is short.",
            "trap": "주격 관계대명사 뒤의 동사는 선행사의 인칭과 수에 일치시켜야 함!"
          },
          {
            "name": "목적격 관계대명사의 생략",
            "formula": "타동사의 목적어나 전치사의 목적어로 쓰인 관계대명사는 단독 생략 가능",
            "example": "The movie (which) I watched yesterday was exciting.",
            "trap": "전치사가 관계대명사 바로 앞에 있을 때는 생략 불가! (the house in which I live)"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_18",
            "sentence": "I met a boy who father is a famous astronaut in NASA.",
            "underlined": [
              "met",
              "who",
              "father is",
              "famous"
            ],
            "wrongIndex": 1,
            "correction": "whose",
            "explanation": "선행사 a boy와 뒤 명사 father 사이에 소유 관계(~의 아버지)가 성립하므로 소유격 관계대명사 whose를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 알맞은 관계대명사는?\n'The man ________ is talking to my father is our English teacher.'",
            "options": [
              "who",
              "which",
              "whose",
              "whom",
              "what"
            ],
            "ans": 0,
            "exp": "선행사가 사람(The man)이고 뒤에 동사 is가 이어지는 주어 자리이므로 주격 who가 정답입니다."
          },
          {
            "q": "다음 두 문장을 한 문장으로 알맞게 연결한 것은?\n'I have a friend. Her father is a pilot.'",
            "options": [
              "I have a friend who father is a pilot.",
              "I have a friend which father is a pilot.",
              "I have a friend whose father is a pilot.",
              "I have a friend whom father is a pilot.",
              "I have a friend that father is a pilot."
            ],
            "ans": 2,
            "exp": "소유격 Her를 대신하므로 소유격 관계대명사 whose가 쓰여야 합니다."
          },
          {
            "q": "다음 중 밑줄 친 관계대명사를 생략할 수 있는 것은?",
            "options": [
              "The student [who] answered the question was smart.",
              "The book [which] is on the desk is mine.",
              "The girl [whom] I met at the station was kind.",
              "He has a sister [who] plays the cello.",
              "This is the car [which] runs fastest."
            ],
            "ans": 2,
            "exp": "동사 met의 목적어로 쓰인 목적격 관계대명사 whom은 단독으로 생략할 수 있습니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "The cookies that my mom baked are sweet.",
              "Look at the boy and his dog that are running.",
              "I know the reason which he was absent.",
              "The house whose roof is red is mine.",
              "This is the phone which I lost yesterday."
            ],
            "ans": 2,
            "exp": "선행사가 이유(the reason)이므로 관계부사 why 또는 for which가 와야 합니다."
          },
          {
            "q": "빈칸에 들어갈 말로 알맞은 것은?\n'The books ________ are on the top shelf belong to my sister.'",
            "options": [
              "who",
              "which",
              "whose",
              "what",
              "whom"
            ],
            "ans": 1,
            "exp": "선행사가 사물(The books)이고 주격이므로 which 또는 that이 알맞습니다."
          }
        ]
      },
      {
        "unitNo": 19,
        "title": "관계대명사 that vs what 완벽 구별",
        "part": "관계사",
        "targetGrade": "중3 완성",
        "summary": "선행사를 포함하는 관계대명사 what(= the thing which)과 선행사가 필요한 that의 구조적 판별",
        "formulaCards": [
          {
            "name": "what vs that 구별 공식 (수능·내신 1위 빈출)",
            "formula": "what: 선행사 없음 + 뒷문장 불완전 (주어나 목적어 없음) / that: 선행사 명사 있음 + 뒷문장 불완전",
            "example": "Show me what you bought. (선행사x, 불완전) / Show me the book that you bought. (선행사o, 불완전)",
            "trap": "명사절 접속사 that은 선행사 없고 뒷문장이 '완전'함!"
          },
          {
            "name": "that만을 쓰는 경우",
            "formula": "최상급, 서수, the only, the very, -thing 대명사, 사람+동물이 선행사일 때",
            "example": "This is the only thing that I want.",
            "trap": "전치사 뒤나 계속적 용법(콤마 뒤)에는 that 사용 불가! (, that - x / in that은 '~라는 점에서'라는 부사절)"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_19",
            "sentence": "This is that I have been looking for all day long.",
            "underlined": [
              "This is",
              "that",
              "looking for",
              "all day long"
            ],
            "wrongIndex": 1,
            "correction": "what",
            "explanation": "선행사가 없고 for 뒤의 목적어가 비어 있는 불완전한 절을 이끌어 '~하는 것'의 의미를 나타내므로 관계대명사 what이 알맞습니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'I cannot understand ________ she is saying right now.'",
            "options": [
              "that",
              "what",
              "which",
              "who",
              "where"
            ],
            "ans": 1,
            "exp": "앞에 선행사 명사가 없고 saying의 목적어가 없는 불완전한 절이므로 what이 정답입니다."
          },
          {
            "q": "다음 중 밑줄 친 'that'의 쓰임이 나머지와 다른 것은?",
            "options": [
              "The fact [that] she survived is a miracle.",
              "I like the bag [that] you bought.",
              "The boy [that] is dancing is my cousin.",
              "This is the song [that] won first place.",
              "The movie [that] we watched was boring."
            ],
            "ans": 0,
            "exp": "1번은 완벽한 문장을 이끄는 동격의 접속사 that입니다. 나머지는 모두 불완전한 절을 이끄는 관계대명사 that입니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'Do you know the girl ________ is singing? / That is ________ I really want.'",
            "options": [
              "that - that",
              "that - what",
              "what - that",
              "what - what",
              "which - which"
            ],
            "ans": 1,
            "exp": "첫 번째는 선행사 the girl을 수식하는 주격 관계대명사 that, 두 번째는 선행사가 없는 목적격 what이 알맞습니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "This is what I learned today.",
              "What he said made me happy.",
              "The thing what I need is love.",
              "I told him that I was busy.",
              "All that glitters is not gold."
            ],
            "ans": 2,
            "exp": "what은 이미 the thing which를 포함하고 있으므로 The thing what은 중복 오류입니다. The thing that 또는 What으로 고쳐야 합니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'She gave me ________ little money she had.'",
            "options": [
              "what",
              "that",
              "which",
              "whom",
              "where"
            ],
            "ans": 0,
            "exp": "'what little + 명사'는 '비록 적지만 ~한 전부'를 뜻하는 관용적 관계형용사 표현입니다."
          }
        ]
      },
      {
        "unitNo": 20,
        "title": "관계부사 (where, when, why, how)",
        "part": "관계사",
        "targetGrade": "중3 완성",
        "summary": "장소, 시간, 이유, 방법의 관계부사와 '전치사 + 관계대명사' 전환, the way how의 병기 불가",
        "formulaCards": [
          {
            "name": "관계부사 = 전치사 + 관계대명사",
            "formula": "where (= in/at which) / when (= in/on/at which) / why (= for which) / how (= in which)",
            "example": "This is the house where I was born. (= in which I was born)",
            "trap": "관계대명사 뒤는 불완전한 문장이지만, 관계부사 뒤는 '완전한 문장'이 옴!"
          },
          {
            "name": "the way how의 병기 금지",
            "formula": "the way와 how는 절대로 나란히 쓸 수 없음! the way만 쓰거나, how만 쓰거나, the way in which/that으로 씀",
            "example": "This is the way how he solved it. (x) -> This is the way he solved it. (o)",
            "trap": "중·고등 내신 시험 단골 출제 1위 함정!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_20",
            "sentence": "Tell me the way how you managed to pass the difficult exam.",
            "underlined": [
              "Tell me",
              "the way how",
              "managed",
              "to pass"
            ],
            "wrongIndex": 1,
            "correction": "the way 또는 how (둘 중 하나만)",
            "explanation": "관계부사 how는 선행사 the way와 절대로 함께 쓸 수 없으며 반드시 the way 또는 how 둘 중 하나만 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "This is the village where my grandmother lives.",
              "I remember the day when we first met.",
              "Can you tell me the reason why you were late?",
              "Show me the way how you made this cake.",
              "I don't know the reason why she is crying."
            ],
            "ans": 3,
            "exp": "the way와 how는 함께 쓸 수 없으므로 Show me the way you made~ 또는 Show me how you made~로 써야 합니다."
          },
          {
            "q": "빈칸에 들어갈 알맞은 관계부사는?\n'Spring is the season ________ flowers bloom.'",
            "options": [
              "where",
              "when",
              "why",
              "how",
              "which"
            ],
            "ans": 1,
            "exp": "선행사가 시간(the season)이고 뒤에 완전한 절이 오므로 when이 정답입니다."
          },
          {
            "q": "다음 두 문장을 한 문장으로 바꿀 때 빈칸에 알맞은 것은?\n'This is the hotel. We stayed at the hotel last summer.'\n➔ 'This is the hotel ________ we stayed last summer.'",
            "options": [
              "which",
              "where",
              "when",
              "why",
              "whom"
            ],
            "ans": 1,
            "exp": "at the hotel은 장소 부사구이므로 관계부사 where 또는 at which로 바꿀 수 있습니다."
          },
          {
            "q": "다음 중 밑줄 친 부분의 쓰임이 어법상 올바른 것은?",
            "options": [
              "This is the hospital which I was born.",
              "Do you know the time where the train leaves?",
              "I like the way how she speaks.",
              "The reason for which he resigned is unknown.",
              "This is the park what we used to play."
            ],
            "ans": 3,
            "exp": "for which는 관계부사 why와 같으므로 완전한 문장을 이끌어 올바릅니다. (1: where/in which, 2: when, 3: how 삭제, 5: where)"
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'The city ________ he visited was big. / The city ________ he lived was big.'",
            "options": [
              "where - which",
              "which - where",
              "where - where",
              "which - which",
              "that - which"
            ],
            "ans": 1,
            "exp": "visited는 목적어가 필요한 타동사이므로 불완전한 절을 이끄는 which, lived는 완전한 절이므로 부사구 역할을 하는 where가 알맞습니다."
          }
        ]
      },
      {
        "unitNo": 21,
        "title": "현재분사와 과거분사 (감정동사의 분사)",
        "part": "준동사",
        "targetGrade": "중3 완성",
        "summary": "능동·진행의 현재분사(-ing) vs 수동·완료의 과거분사(p.p.), 감정을 유발하는 -ing vs 감정을 느끼는 p.p.",
        "formulaCards": [
          {
            "name": "분사의 형용사적 수식",
            "formula": "명사 앞/뒤에서 수식: 수식받는 명사와의 관계가 능동이면 -ing, 수동이면 p.p.",
            "example": "the sleeping baby / a broken window / the boy running in the park",
            "trap": "수식받는 명사가 챕터, 규칙 등 사물이면 p.p. 형태가 많음!"
          },
          {
            "name": "감정유발 동사의 분사 공식",
            "formula": "사물이 주어/수식대상이면 -ing (감정 유발) / 사람이 주어/수식대상이면 p.p. (감정 느낌)",
            "example": "The movie was boring. / I was bored with the movie.",
            "trap": "I am interesting in science. (x) -> I am interested in science. (o)"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_21",
            "sentence": "The news about the accident was deeply shocked to everyone.",
            "underlined": [
              "news",
              "accident",
              "deeply",
              "shocked"
            ],
            "wrongIndex": 3,
            "correction": "shocking",
            "explanation": "사고 소식(The news)이 사람들에게 충격을 '주는' 능동의 주체이므로 현재분사 shocking을 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'All the students were ________ by the ________ test results.'",
            "options": [
              "disappointing - disappointed",
              "disappointed - disappointing",
              "disappointed - disappointed",
              "disappointing - disappointing",
              "disappoint - disappointed"
            ],
            "ans": 1,
            "exp": "학생들은 실망을 느낀 것이므로 disappointed, 시험 결과는 실망을 주는 것이므로 disappointing입니다."
          },
          {
            "q": "다음 중 밑줄 친 분사의 쓰임이 어색한 것은?",
            "options": [
              "I heard someone knocking at the door.",
              "The girl standing by the window is Sue.",
              "He bought a used car yesterday.",
              "The fallen leaves covered the street.",
              "She was exciting about the trip."
            ],
            "ans": 4,
            "exp": "사람(She)이 흥분을 느낀 것이므로 excited가 되어야 합니다."
          },
          {
            "q": "빈칸에 들어갈 분사의 형태가 순서대로 알맞은 것은?\n'The dog ________ the ball is cute. / The window ________ by Tom was fixed.'",
            "options": [
              "chasing - broken",
              "chased - broken",
              "chasing - breaking",
              "chased - breaking",
              "chase - break"
            ],
            "ans": 0,
            "exp": "공을 쫓는 능동이므로 chasing, 톰에 의해 깨진 수동이므로 broken입니다."
          },
          {
            "q": "다음 중 짝지어진 두 단어의 관계가 어법상 어색한 것은?",
            "options": [
              "exciting game",
              "confused student",
              "surprising news",
              "bored movie",
              "tiring work"
            ],
            "ans": 3,
            "exp": "영화는 지루함을 느끼는 것이 아니라 지루하게 만드는 것이므로 boring movie가 되어야 합니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'He sat on the bench, ________ to music.'",
            "options": [
              "listen",
              "listened",
              "listening",
              "to listen",
              "listens"
            ],
            "ans": 2,
            "exp": "그가 음악을 '들으면서' 앉아 있는 능동의 동시동작 분사구문이므로 listening이 올바릅니다."
          }
        ]
      },
      {
        "unitNo": 22,
        "title": "분사구문의 기본과 전환",
        "part": "준동사",
        "targetGrade": "중3 완성",
        "summary": "부사절(접속사+S+V)을 분사구문(V-ing)으로 줄이는 공식과 부정형(not + V-ing)",
        "formulaCards": [
          {
            "name": "분사구문 만들기 3단계",
            "formula": "1) 접속사 생략 ➔ 2) 주절과 같은 주어 생략 ➔ 3) 동사원형에 -ing 붙이기",
            "example": "As I felt tired, I went to bed early. ➔ Feeling tired, I went to bed early.",
            "trap": "부사절의 주어와 주절의 주어가 다르면 분사 앞에 주어를 남겨둬야 함 (독립분사구문)!"
          },
          {
            "name": "분사구문의 부정",
            "formula": "Not[Never] + V-ing (분사 바로 앞에 not 배치)",
            "example": "As I didn't know his address, ... ➔ Not knowing his address, ...",
            "trap": "Knowing not his address (x) -> 반드시 분사 앞에 Not!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_22",
            "sentence": "Knowing not what to say, she just remained silent.",
            "underlined": [
              "Knowing not",
              "what to say",
              "just",
              "remained"
            ],
            "wrongIndex": 0,
            "correction": "Not knowing",
            "explanation": "분사구문의 부정은 부정어 not을 반드시 분사 바로 앞에 두어야 하므로 Not knowing이 올바릅니다."
          }
        ],
        "questions": [
          {
            "q": "다음 부사절을 분사구문으로 올바르게 바꾼 것은?\n'Because she felt hungry, she ordered a pizza.'",
            "options": [
              "Felt hungry, she ordered a pizza.",
              "Feeling hungry, she ordered a pizza.",
              "She feeling hungry, ordered a pizza.",
              "To feel hungry, she ordered a pizza.",
              "Having hungry, she ordered a pizza."
            ],
            "ans": 1,
            "exp": "접속사 Because 생략, 주어 she 생략, felt를 동사원형+ing인 Feeling으로 바꾼 2번이 올바릅니다."
          },
          {
            "q": "다음 분사구문이 나타내는 의미로 가장 적절한 것은?\n'Turning to the left, you will find the city hall.'",
            "options": [
              "시간 (~할 때)",
              "이유 (~때문에)",
              "조건 (만약 ~한다면)",
              "양보 (비록 ~일지라도)",
              "동시동작 (~하면서)"
            ],
            "ans": 2,
            "exp": "'왼쪽으로 돌면 시청을 발견할 것이다'라는 조건(If you turn to the left)을 나타냅니다."
          },
          {
            "q": "다음 중 분사구문의 부정형이 올바른 것은?",
            "options": [
              "Not having breakfast, I was very hungry.",
              "Having not breakfast, I was very hungry.",
              "Don't having breakfast, I was very hungry.",
              "Didn't have breakfast, I was very hungry.",
              "No having breakfast, I was very hungry."
            ],
            "ans": 0,
            "exp": "분사구문의 부정은 분사 바로 앞에 Not을 붙여 Not having...으로 씁니다."
          },
          {
            "q": "다음 중 어법상 어색한 분사구문은?",
            "options": [
              "Arriving at the station, he called his mom.",
              "Being sunny, we decided to go hiking.",
              "Seeing the police officer, the thief ran away.",
              "Opening the door, she found a gift box.",
              "Listening to the radio, he washed the dishes."
            ],
            "ans": 1,
            "exp": "날씨를 나타내는 비인칭 주어 it과 주절의 주어 we가 다르므로 It being sunny...로 주어 It을 남겨야 합니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'________ by the teacher, the boy stopped crying.'",
            "options": [
              "Praising",
              "Praised",
              "Praise",
              "To praise",
              "Having praised"
            ],
            "ans": 1,
            "exp": "선생님에 의해 칭찬을 '받은' 수동의 관계이므로 (Being) Praised가 올바릅니다."
          }
        ]
      },
      {
        "unitNo": 23,
        "title": "가정법 과거와 I wish / as if 가정법",
        "part": "가정법",
        "targetGrade": "중3 완성",
        "summary": "현재 사실의 반대를 상상하는 가정법 과거(If + 과거동사, S + would + 동원)와 직설법 전환",
        "formulaCards": [
          {
            "name": "가정법 과거 공식",
            "formula": "If + 주어 + 과거동사(be동사는 were), 주어 + would/could/should/might + 동사원형",
            "example": "If I had wings, I could fly to you. (지금 날개가 없어서 날아갈 수 없다)",
            "trap": "가정법 과거는 형태는 과거지만 해석은 '현재'로 함!"
          },
          {
            "name": "I wish / as if 가정법",
            "formula": "I wish + 주어 + 과거동사 (~라면 좋을 텐데) / as if + 주어 + 과거동사 (마치 ~인 것처럼)",
            "example": "I wish I were rich. / He talks as if he knew everything.",
            "trap": "as if 뒤에 과거동사가 오면 주절 시점과 같은 시점의 반대를 나타냄!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_23",
            "sentence": "If I had known his phone number, I could call him yesterday.",
            "underlined": [
              "If I",
              "had known",
              "could call",
              "yesterday"
            ],
            "wrongIndex": 2,
            "correction": "could have called",
            "explanation": "과거 사실에 대한 반대 가정이므로 가정법 과거완료 공식(If S had p.p. ~ S 조동사과거 have p.p.)에 따라 could have called가 되어야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 동사의 형태로 올바른 것은?\n'If I ________ enough time now, I would travel around Europe.'",
            "options": [
              "have",
              "had",
              "have had",
              "will have",
              "would have"
            ],
            "ans": 1,
            "exp": "현재 사실의 반대를 가정하는 가정법 과거이므로 If절의 동사는 과거형 had가 와야 합니다."
          },
          {
            "q": "다음 문장과 직설법 의미가 같은 것은?\n'If she studied hard, she could pass the test.'",
            "options": [
              "As she studies hard, she passes the test.",
              "As she doesn't study hard, she cannot pass the test.",
              "Because she studied hard, she could pass the test.",
              "If she doesn't study hard, she can pass the test.",
              "She studied hard, so she passed the test."
            ],
            "ans": 1,
            "exp": "가정법 과거는 현재 사실의 반대이므로 '현재 열심히 공부하지 않아서 합격할 수 없다'는 현재 직설법 2번이 알맞습니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I wish I ________ taller. / He acts as if he ________ my boss.'",
            "options": [
              "am - is",
              "was - was",
              "were - were",
              "have been - was",
              "will be - is"
            ],
            "ans": 2,
            "exp": "현재 사실의 유감이나 반대이므로 가정법 과거 were가 각각 들어갑니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "If I were a bird, I would fly.",
              "If he had money, he could buy the car.",
              "I wish it were sunny today.",
              "If she knew the truth, she will tell us.",
              "He talks as if he were a genius."
            ],
            "ans": 3,
            "exp": "가정법 과거 주절에는 조동사의 과거형(would/could)이 와야 하므로 will tell -> would tell로 고쳐야 합니다."
          },
          {
            "q": "다음 빈칸에 알맞은 조동사는?\n'If you helped me, I ________ finish the project on time.'",
            "options": [
              "will",
              "could",
              "can",
              "may",
              "must"
            ],
            "ans": 1,
            "exp": "가정법 과거 주절에는 would, could, might 등의 과거 조동사가 와야 하므로 could가 정답입니다."
          }
        ]
      },
      {
        "unitNo": 24,
        "title": "간접의문문과 일치·화법",
        "part": "문장의 결합",
        "targetGrade": "중3 완성",
        "summary": "의문사 + 주어 + 동사(의·주·동) 평서문 어순과 주절 동사가 think/believe일 때 의문사 전치",
        "formulaCards": [
          {
            "name": "간접의문문의 기본 어순",
            "formula": "의문사 + 주어 + 동사 (의문사가 없으면 if/whether + 주어 + 동사)",
            "example": "Do you know who she is? / I wonder if she is coming.",
            "trap": "Who is she?의 직접의문문 어순을 그대로 넣지 않도록 주의!"
          },
          {
            "name": "생각·추측 동사일 때 의문사 전치",
            "formula": "think, believe, guess, suppose, imagine이 주절 동사이면 의문사가 문장 맨 앞으로 이동!",
            "example": "Do you think who he is? (x) ➔ Who do you think he is? (o)",
            "trap": "Yes/No 대답이 불가능하기 때문에 의문사가 맨 앞으로 나감!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_24",
            "sentence": "Seldom she leaves the house without wearing her favorite sunglasses.",
            "underlined": [
              "Seldom",
              "she leaves",
              "without wearing",
              "favorite"
            ],
            "wrongIndex": 1,
            "correction": "does she leave",
            "explanation": "부정어 Seldom이 문두에 오면 '조동사/do + 주어 + 동사원형'의 도치가 일어나므로 does she leave로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 두 문장을 간접의문문으로 바르게 결합한 것은?\n'Can you tell me?' + 'Where does she live?'",
            "options": [
              "Can you tell me where does she live?",
              "Can you tell me where she lives?",
              "Can you tell me where she lived?",
              "Where can you tell me she lives?",
              "Can you tell me where did she live?"
            ],
            "ans": 1,
            "exp": "의문사(where) + 주어(she) + 동사(lives)의 평서문 어순이 올바릅니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "Do you think what he wants?",
              "What do you think he wants?",
              "What do you think does he want?",
              "Do you believe where is she?",
              "Where do you believe is she?"
            ],
            "ans": 1,
            "exp": "think 동사로 인해 의문사 What이 맨 앞으로 가고 뒤는 평서문 어순(he wants)이 된 2번이 완벽합니다."
          },
          {
            "q": "빈칸에 들어갈 말로 알맞은 것은?\n'I don't know ________ he will come to the party or not.'",
            "options": [
              "that",
              "whether",
              "what",
              "which",
              "where"
            ],
            "ans": 1,
            "exp": "or not과 호응하며 '~인지 아닌지'를 묻는 명사절 접속사는 whether가 알맞습니다."
          },
          {
            "q": "다음 중 어법상 어색한 문장은?",
            "options": [
              "Tell me what happened yesterday.",
              "I wonder how old she is.",
              "Do you know when the train arrives?",
              "Please ask him why was he late.",
              "I want to know if this seat is taken."
            ],
            "ans": 3,
            "exp": "간접의문문은 평서문 어순이므로 why was he late -> why he was late가 되어야 합니다."
          },
          {
            "q": "다음 두 문장을 합칠 때 빈칸에 알맞은 것은?\n'Do you know?' + 'Who is that boy?'\n➔ 'Do you know ________?'",
            "options": [
              "who that boy is",
              "who is that boy",
              "that boy is who",
              "whom is that boy",
              "who that boy was"
            ],
            "ans": 0,
            "exp": "의문사(who) + 주어(that boy) + 동사(is) 어순인 who that boy is가 정답입니다."
          }
        ]
      }
    ]
  },
  {
    "level": 4,
    "levelCode": "lv4",
    "levelName": "고교 내신",
    "targetGrade": "고1~고2 공통영어 & 서술형",
    "badge": "Lv.4 고교 내신",
    "color": "amber",
    "themeColor": "#d97706",
    "desc": "주어-동사 수일치, 4·5형식 심화 수동태, 완료·수동 분사구문, 명사절 접속사, 도치 구문 등 고교 서술형",
    "units": [
      {
        "unitNo": 25,
        "title": "주어-동사 수일치 (수식어구 거품 빼기)",
        "part": "일치(Agreement)",
        "targetGrade": "고1 필수",
        "summary": "전치사구, 분사구, 관계사절 등 주어와 동사 사이를 가로막는 수식어구를 발라내고 진짜 주어 찾기",
        "formulaCards": [
          {
            "name": "수식어구 거품 빼기 공식",
            "formula": "주어 + [전치사구 / 관계사절 / 분사구 / 형용사구] + 진짜 동사",
            "example": "The quality of these organic apples is (o) / are (x) very high.",
            "trap": "동사 바로 앞의 복수 명사(apples)에 현혹되지 말고 핵심 명사(The quality)를 볼 것!"
          },
          {
            "name": "부분 표현의 수일치",
            "formula": "most / some / half / the rest / 분수 / percent + of + 명사 ➔ of 뒤의 명사에 수일치",
            "example": "Most of the water is polluted. / Most of the students are diligent.",
            "trap": "부분 표현 자체는 단복수가 없으므로 of 뒤의 명사가 단수면 단수, 복수면 복수!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_25",
            "sentence": "The discovery of new treatments for these rare diseases have saved many lives.",
            "underlined": [
              "discovery",
              "new treatments",
              "rare diseases",
              "have saved"
            ],
            "wrongIndex": 3,
            "correction": "has saved",
            "explanation": "문장의 핵심 주어는 단수명사 The discovery이므로 복수 동사 have saved가 아닌 단수 동사 has saved를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 동사의 형태로 올바른 것은?\n'The number of students who attend the lecture ________ increasing.'",
            "options": [
              "is",
              "are",
              "were",
              "have been",
              "be"
            ],
            "ans": 0,
            "exp": "'The number of(~의 수)'는 단수 취급하므로 is가 정답입니다. ('A number of(많은)'는 복수 취급)"
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "Each of the members have a voting right.",
              "Every boy and girl were excited.",
              "One of the most famous painters were Van Gogh.",
              "Two-thirds of the Earth's surface is covered with water.",
              "A lot of trash were found on the beach."
            ],
            "ans": 3,
            "exp": "Two-thirds of 뒤의 the Earth's surface가 셀 수 없는 단수 명사이므로 is가 올바릅니다. (1: has, 2: was, 3: was, 5: was)"
          },
          {
            "q": "다음 문장의 밑줄 친 부분 중 어법상 틀린 것은?\n'The benefits of exercising regularly [outweighs] any potential risk.'",
            "options": [
              "benefits",
              "exercising regularly",
              "outweighs",
              "potential",
              "risk"
            ],
            "ans": 2,
            "exp": "주어가 복수 명사 The benefits이므로 3인칭 단수형 outweighs가 아닌 복수 동사 outweigh가 되어야 합니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'A number of books ________ donated. / The number of books ________ small.'",
            "options": [
              "was - was",
              "were - were",
              "were - was",
              "was - were",
              "are - are"
            ],
            "ans": 2,
            "exp": "A number of는 '많은(=many)' 뜻으로 복수 취급(were), The number of는 '~의 수'라는 단수 취급(was)입니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'Not only the students but also the teacher ________ delighted at the news.'",
            "options": [
              "was",
              "were",
              "are",
              "have been",
              "be"
            ],
            "ans": 0,
            "exp": "'Not only A but also B'는 B(the teacher: 3인칭 단수)에 수를 일치시키므로 was가 정답입니다."
          }
        ]
      },
      {
        "unitNo": 26,
        "title": "능동태 vs 수동태 심화 (4·5형식 수동태)",
        "part": "태(Voice)",
        "targetGrade": "고1 필수",
        "summary": "간접목적어와 직접목적어를 활용한 4형식 수동태, 지각/사역동사의 수동태 시 to부정사 부활",
        "formulaCards": [
          {
            "name": "사역·지각동사 수동태 시 to부정사 부활 공식",
            "formula": "능동: S + make/see + O + V원형 ➔ 수동: O + be made/seen + to V원형!",
            "example": "He made me study. ➔ I was made to study by him.",
            "trap": "능동태에서는 동사원형이었던 목적격보어가 수동태가 되면 반드시 to부정사로 바뀜!"
          },
          {
            "name": "수여동사 4형식 수동태",
            "formula": "직접목적어가 주어로 올 때: DO + be p.p. + to/for/of + IO",
            "example": "A prize was given to her. (for her - x)",
            "trap": "give류는 to, make/buy류는 수동태에서 직접목적어만 주어로 쓸 수 있음!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_26",
            "sentence": "The committee recommended that the proposal is rejected immediately.",
            "underlined": [
              "committee",
              "recommended",
              "proposal",
              "is rejected"
            ],
            "wrongIndex": 3,
            "correction": "(should) be rejected",
            "explanation": "제안/권고 동사 recommend 뒤의 that절에서 당위성(~해야 한다)을 나타낼 때는 '(should) + 동사원형'을 쓰므로 be rejected가 되어야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 능동태 문장을 수동태로 바르게 전환한 것은?\n'They made him confess the crime.'",
            "options": [
              "He was made confess the crime.",
              "He was made to confess the crime.",
              "He was made confessing the crime.",
              "He made to confess the crime.",
              "He was make to confess the crime."
            ],
            "ans": 1,
            "exp": "사역동사 make의 수동태는 be made to 동사원형이므로 He was made to confess~가 올바릅니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "She was given a beautiful necklace.",
              "The baby was named Oliver by his parents.",
              "He was elected president by the citizens.",
              "She was heard to sing a song.",
              "The thief was seen run away from the bank."
            ],
            "ans": 4,
            "exp": "지각동사의 수동태 뒤에는 to run 또는 running이 와야 합니다."
          },
          {
            "q": "빈칸에 들어갈 알맞은 형태는?\n'Children must be taught ________ respect for others.'",
            "options": [
              "show",
              "showing",
              "to show",
              "shown",
              "showed"
            ],
            "ans": 2,
            "exp": "teach의 수동태 뒤에 목적격보어로 to show가 올바르게 연결됩니다."
          },
          {
            "q": "다음 중 수동태 문장이 어색한 것은?",
            "options": [
              "The letter was sent to him.",
              "A new computer was bought for her.",
              "A difficult question was asked of him.",
              "A delicious cake was made to me.",
              "The secret was revealed to everyone."
            ],
            "ans": 3,
            "exp": "make는 3형식 및 수동태 전환 시 전치사 for를 쓰므로 for me가 되어야 합니다."
          },
          {
            "q": "다음 빈칸에 알맞은 전치사는?\n'The truth will be known ________ everybody soon.'",
            "options": [
              "to",
              "by",
              "for",
              "with",
              "at"
            ],
            "ans": 0,
            "exp": "'~에게 알려지다'는 be known to를 씁니다."
          }
        ]
      },
      {
        "unitNo": 27,
        "title": "준동사의 시제와 수동태 (완료부정사 & 완료동명사)",
        "part": "준동사",
        "targetGrade": "고1 필수",
        "summary": "주절 시점보다 앞선 때를 나타내는 to have p.p. / having p.p.와 준동사 수동태",
        "formulaCards": [
          {
            "name": "완료부정사와 완료동명사 공식",
            "formula": "to have p.p. / having p.p. = 주절의 시제보다 한 시제 앞선 사건",
            "example": "He seems to have been rich in the past. (= It seems that he was rich.)",
            "trap": "to be rich는 현재 부자인 것처럼 보이는 것이고, to have been rich는 과거에 부자였던 것!"
          },
          {
            "name": "준동사의 수동태",
            "formula": "to be p.p. / being p.p. (완료수동: to have been p.p. / having been p.p.)",
            "example": "I don't like being treated like a child.",
            "trap": "행위를 당하는 대상이면 준동사도 반드시 수동형을 써야 함!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_27",
            "sentence": "The manager was looking for a candidate which had extensive experience in software development.",
            "underlined": [
              "looking for",
              "candidate",
              "which had",
              "extensive experience"
            ],
            "wrongIndex": 2,
            "correction": "who had (또는 that had)",
            "explanation": "선행사 a candidate는 사람이므로 관계대명사 which가 아닌 who 또는 that을 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장과 의미가 같은 것은?\n'She seems to have lost her wallet.'",
            "options": [
              "It seems that she loses her wallet.",
              "It seems that she lost her wallet.",
              "It seemed that she lost her wallet.",
              "It seemed that she has lost her wallet.",
              "It seems that she will lose her wallet."
            ],
            "ans": 1,
            "exp": "주절의 시제가 현재(seems)이고 완료부정사(to have lost)가 쓰였으므로 종속절은 과거 시제(lost)가 됩니다."
          },
          {
            "q": "다음 빈칸에 들어갈 형태로 가장 적절한 것은?\n'He was ashamed of ________ foolish mistakes in public.'",
            "options": [
              "make",
              "making",
              "having made",
              "to make",
              "to have made"
            ],
            "ans": 2,
            "exp": "전치사 of 뒤이므로 동명사가 와야 하며, 부끄러워했던 시점(was)보다 실수를 저지른 것이 앞서므로 완료동명사 having made가 알맞습니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "No one likes being laughing at.",
              "No one likes being laughed at.",
              "No one likes to laugh at.",
              "No one likes laughing at.",
              "No one likes been laughed at."
            ],
            "ans": 1,
            "exp": "'놀림을 받는 것'이므로 수동형 동명사 being laughed at이 올바릅니다."
          },
          {
            "q": "다음 빈칸에 알맞은 형태는?\n'The ancient castle is said ________ built in the 14th century.'",
            "options": [
              "to be",
              "to have been",
              "being",
              "having been",
              "to had been"
            ],
            "ans": 1,
            "exp": "현재 전해지는 것(is said)보다 14세기에 지어진 것(과거)이 앞서고 수동이므로 완료수동부정사 to have been built가 정답입니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'I appreciate ________ invited to your wedding.'",
            "options": [
              "being",
              "having",
              "to be",
              "to have",
              "be"
            ],
            "ans": 0,
            "exp": "결혼식에 초대 '받은' 수동이므로 being invited가 알맞습니다."
          }
        ]
      },
      {
        "unitNo": 28,
        "title": "with 분사구문과 독립분사구문",
        "part": "준동사",
        "targetGrade": "고1 필수",
        "summary": "with + 명사 + 분사(동시동작/부대상황: ~한 채로)와 의미상 주어가 다른 독립분사구문",
        "formulaCards": [
          {
            "name": "with + 명사 + 분사(-ing / p.p.)",
            "formula": "명사와 분사의 관계가 능동이면 -ing, 수동이면 p.p.",
            "example": "with his arms folded (팔짱을 낀 채: 수동) / with tears running down (눈물을 흘리며: 능동)",
            "trap": "다리를 꼰 채(with his legs crossed), 입을 꽉 다문 채(with his mouth closed)는 모두 p.p.!"
          },
          {
            "name": "독립분사구문의 관용표현",
            "formula": "frankly speaking(솔직히 말해서), strictly speaking(엄격히 말해), judging from(~로 판단하건대)",
            "example": "Judging from his accent, he must be from Australia.",
            "trap": "인칭주어와 무관하게 독립적으로 쓰이는 비인칭 독립분사구문!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_28",
            "sentence": "She was listening to the teacher with her legs crossing and arms folded.",
            "underlined": [
              "was listening",
              "with her legs",
              "crossing",
              "folded"
            ],
            "wrongIndex": 2,
            "correction": "crossed",
            "explanation": "다리는 사람에 의해 꼬여지는 수동의 관계이므로 'with + 목적어 + p.p.(crossed)' 구문이 되어야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 형태로 알맞은 것은?\n'He sat on the sofa with his eyes ________.'",
            "options": [
              "close",
              "closed",
              "closing",
              "closely",
              "to close"
            ],
            "ans": 1,
            "exp": "눈은 감겨지는 대상이므로 수동의 과거분사 closed가 정답입니다."
          },
          {
            "q": "다음 중 밑줄 친 분사의 쓰임이 어색한 것은?",
            "options": [
              "She fell asleep with the radio turned on.",
              "He stood there with his arms folded.",
              "She was speaking with her heart beating fast.",
              "He walked along the street with his hands in his pockets.",
              "She was reading a book with the candle blowing out."
            ],
            "ans": 4,
            "exp": "촛불이 바람에 꺼진 것은 수동이므로 with the candle blown out이 되어야 합니다."
          },
          {
            "q": "다음 빈칸에 들어갈 알맞은 말은?\n'________ from his appearance, he seems to be an athlete.'",
            "options": [
              "Judge",
              "Judged",
              "Judging",
              "To judge",
              "Judgment"
            ],
            "ans": 2,
            "exp": "'~로 판단하건대'라는 관용적 독립분사구문은 Judging from을 씁니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'Weather ________, we will go on a picnic this Saturday.'",
            "options": [
              "permit",
              "permitting",
              "permitted",
              "to permit",
              "permission"
            ],
            "ans": 1,
            "exp": "'날씨가 허락한다면'이라는 관용적 독립분사구문은 Weather permitting입니다."
          },
          {
            "q": "밑줄 친 부분의 뜻으로 알맞은 것은?\n'[Strictly speaking], tomatoes are fruits, not vegetables.'",
            "options": [
              "솔직히 말해서",
              "엄격히 말해서",
              "일반적으로 말해서",
              "말할 필요도 없이",
              "간단히 말해서"
            ],
            "ans": 1,
            "exp": "Strictly speaking은 '엄격히 말해서'라는 뜻의 독립분사구문입니다."
          }
        ]
      },
      {
        "unitNo": 29,
        "title": "명사절 접속사 (that vs what vs if/whether)",
        "part": "절과 접속사",
        "targetGrade": "고1 필수",
        "summary": "확실한 사실(that) vs 불확실한 의문(if/whether) vs 불완전한 선행사포함(what)",
        "formulaCards": [
          {
            "name": "that vs what vs whether 명사절 3대 공식",
            "formula": "that: 완전한 절 + 확실한 사실 / what: 불완전한 절 + 선행사 없음 / whether: 완전한 절 + 불확실성(~인지 아닌지)",
            "example": "I know that he is honest. / I wonder whether he is honest. / This is what I want.",
            "trap": "doubt, wonder, not sure 뒤에는 that이 아니라 if/whether를 씀!"
          },
          {
            "name": "if절의 제약",
            "formula": "if는 오직 타동사의 목적어절로만 쓰이며, 주어나 전치사의 목적어, or not 직후에는 whether만 가능",
            "example": "Whether he comes or not is important. (If he comes or not - x)",
            "trap": "전치사 뒤: about whether (o) / about if (x)"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_29",
            "sentence": "Had you arrived five minutes earlier, you would see the famous singer.",
            "underlined": [
              "Had you arrived",
              "earlier",
              "would see",
              "famous singer"
            ],
            "wrongIndex": 2,
            "correction": "would have seen",
            "explanation": "조건절이 If you had arrived의 도치형(Had you arrived)으로 과거 사실 가정이므로 주절도 would have seen이 되어야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'The problem is ________ we don't have enough budget.'",
            "options": [
              "what",
              "that",
              "whether",
              "which",
              "if"
            ],
            "ans": 1,
            "exp": "뒤에 완벽한 3형식 문장이 이어지고 보어 역할을 하는 확실한 사실이므로 that이 알맞습니다."
          },
          {
            "q": "다음 중 if를 쓸 수 없고 'whether'만 써야 하는 자리는?",
            "options": [
              "I wonder ________ she likes flowers.",
              "He asked me ________ I had a car.",
              "It depends on ________ you will accept the offer.",
              "She doesn't know ________ he will come.",
              "Can you tell me ________ this is true?"
            ],
            "ans": 2,
            "exp": "전치사(on)의 목적어 자리에는 if를 쓸 수 없고 whether만 올 수 있습니다."
          },
          {
            "q": "다음 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I believe ________ he will succeed. / I don't know ________ he will succeed.'",
            "options": [
              "that - whether",
              "whether - that",
              "what - that",
              "that - what",
              "which - that"
            ],
            "ans": 0,
            "exp": "확신(believe)에는 that, 불확실(don't know)에는 whether가 적절합니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "Whether it rains or not doesn't matter.",
              "If he will come is uncertain.",
              "I have no doubt that he is innocent.",
              "She asked if I was ready.",
              "The question is whether we can trust him."
            ],
            "ans": 1,
            "exp": "문장의 주어 자리에는 if절을 쓸 수 없으며 반드시 Whether절을 써야 합니다."
          },
          {
            "q": "빈칸에 들어갈 말로 알맞은 것은?\n'Scientists discovered ________ causes the rare disease.'",
            "options": [
              "that",
              "what",
              "whether",
              "if",
              "where"
            ],
            "ans": 1,
            "exp": "causes의 주어가 빠진 불완전한 절이므로 관계대명사이자 의문대명사인 what이 적절합니다."
          }
        ]
      },
      {
        "unitNo": 30,
        "title": "복합관계사 (whatever, whenever, wherever, however)",
        "part": "관계사",
        "targetGrade": "고1 필수",
        "summary": "복합관계대명사의 명사절/양보부사절 쓰임과 복합관계부사의 시간/장소/양보(however + 형/부) 공식",
        "formulaCards": [
          {
            "name": "however + 형용사/부사 + 주어 + 동사",
            "formula": "however = no matter how (아무리 ~할지라도)",
            "example": "However hard you try, you cannot change the past.",
            "trap": "however 뒤에 형용사나 부사가 바로 붙어야 함! (However you try hard - x)"
          },
          {
            "name": "whatever / whoever",
            "formula": "명사절(anything that / anyone who) vs 양보부사절(no matter what / no matter who)",
            "example": "Whatever you do matters. (명사절) / Whatever happens, stay calm. (양보절)",
            "trap": "문장 내에서 주어/목적어로 쓰이면 명사절, 콤마로 분리되면 양보부사절!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_30",
            "sentence": "Not only the students but also the teacher were excited about the upcoming field trip.",
            "underlined": [
              "Not only",
              "students",
              "teacher were",
              "excited about"
            ],
            "wrongIndex": 2,
            "correction": "teacher was",
            "explanation": "'Not only A but also B' 구문은 B(the teacher)에 수일치하므로 단수 동사 was가 되어야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 빈칸에 들어갈 말로 가장 적절한 것은?\n'________ tired she was, she continued working on her paper.'",
            "options": [
              "Whatever",
              "Whenever",
              "However",
              "Wherever",
              "Whichever"
            ],
            "ans": 2,
            "exp": "형용사 tired를 수식하며 '아무리 피곤할지라도'라는 양보를 나타내므로 However(= No matter how)가 정답입니다."
          },
          {
            "q": "다음 문장과 의미가 같은 것은?\n'You may invite whoever you like to the party.'",
            "options": [
              "anyone who you like",
              "no matter who you like",
              "everyone who likes you",
              "someone whom you like",
              "nobody who you like"
            ],
            "ans": 0,
            "exp": "타동사 invite의 목적어로 쓰인 명사절 whoever는 anyone who(m)과 같습니다."
          },
          {
            "q": "다음 빈칸에 알맞은 것은?\n'You can sit ________ you want in this empty classroom.'",
            "options": [
              "wherever",
              "whatever",
              "however",
              "whichever",
              "whoever"
            ],
            "ans": 0,
            "exp": "'네가 원하는 어느 곳이든(= at any place where)'의 의미이므로 wherever가 알맞습니다."
          },
          {
            "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 것은?",
            "options": [
              "Whatever happens, I will support you.",
              "However rich he is, he is not happy.",
              "Whenever I see her, she is smiling.",
              "However he ran fast, he missed the bus.",
              "Whoever breaks the rule must be punished."
            ],
            "ans": 3,
            "exp": "however 뒤에는 형용사나 부사가 바로 붙어야 하므로 However fast he ran이 되어야 합니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'________ decision you make, I will respect it.'",
            "options": [
              "Whatever",
              "Whichever",
              "However",
              "Whenever",
              "Whoever"
            ],
            "ans": 0,
            "exp": "명사 decision을 수식하는 복합관계형용사 Whatever(또는 Whichever)가 알맞습니다."
          }
        ]
      },
      {
        "unitNo": 31,
        "title": "가정법 과거완료와 혼합가정법",
        "part": "가정법",
        "targetGrade": "고1 필수",
        "summary": "과거 사실의 반대(If + had p.p., S + would have p.p.)와 과거의 원인이 현재에 영향을 주는 혼합가정법",
        "formulaCards": [
          {
            "name": "가정법 과거완료 공식",
            "formula": "If + 주어 + had p.p., 주어 + would/could/should/might + have p.p.",
            "example": "If I had known your number, I would have called you. (번호를 몰라서 전화 못 했다)",
            "trap": "과거 사실을 반대로 가정하므로 해석은 '과거'로 함!"
          },
          {
            "name": "혼합가정법 (수능 단골 출제)",
            "formula": "If + had p.p. (과거에 ~했더라면), 주어 + would + 동사원형 + now (지금 ~할 텐데)",
            "example": "If he had taken my advice then, he would be successful now.",
            "trap": "주절 끝에 now, today 같은 '현재 시점 부사'가 힌트로 주어짐!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_31",
            "sentence": "The heavy rain prevented us to go hiking in the mountains.",
            "underlined": [
              "heavy rain",
              "prevented us",
              "to go",
              "in the mountains"
            ],
            "wrongIndex": 2,
            "correction": "from going",
            "explanation": "'prevent + 목적어 + from -ing' 구문은 목적어가 ~하는 것을 막다라는 뜻이므로 to go가 아닌 from going을 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 알맞은 형태는?\n'If we ________ an umbrella yesterday, we wouldn't have gotten wet.'",
            "options": [
              "bring",
              "brought",
              "had brought",
              "have brought",
              "would bring"
            ],
            "ans": 2,
            "exp": "주절이 wouldn't have gotten(가정법 과거완료)이고 어제(yesterday)의 일이므로 had brought가 정답입니다."
          },
          {
            "q": "다음 문장과 직설법 의미가 같은 것은?\n'If I had had breakfast this morning, I would not be hungry now.'",
            "options": [
              "As I had breakfast, I am not hungry now.",
              "As I didn't have breakfast, I am hungry now.",
              "Because I didn't have breakfast, I was hungry.",
              "I had breakfast, so I am hungry now.",
              "Unless I had breakfast, I would be hungry."
            ],
            "ans": 1,
            "exp": "혼합가정법이므로 '오늘 아침을 먹지 않아서(과거), 지금 배가 고프다(현재)'라는 2번이 알맞습니다."
          },
          {
            "q": "다음 중 어법상 올바른 가정법 문장은?",
            "options": [
              "If he had asked me, I would help him.",
              "If she took the train, she would have arrived earlier.",
              "If I had known the answer, I would have told you.",
              "If you were there, you could see the concert.",
              "If it hadn't rained, we would go hiking yesterday."
            ],
            "ans": 2,
            "exp": "If절의 had known과 주절의 would have told가 완벽하게 일치하는 가정법 과거완료입니다."
          },
          {
            "q": "다음 문장에서 If가 생략되었을 때의 올바른 어순은?\n'If I had realized the danger, I would have run away.'",
            "options": [
              "Had I realized the danger",
              "Did I realize the danger",
              "Have I realized the danger",
              "Were I realized the danger",
              "I had realized the danger"
            ],
            "ans": 0,
            "exp": "가정법에서 If가 생략되면 조동사 had가 주어 앞으로 도치되어 'Had I realized...'가 됩니다."
          },
          {
            "q": "빈칸에 들어갈 말로 알맞은 것은?\n'Without your help, I ________ failed in the exam.'",
            "options": [
              "will have",
              "would have",
              "would",
              "had",
              "have"
            ],
            "ans": 1,
            "exp": "'당신의 도움이 없었더라면 실패했을 것이다'라는 과거 사실 반대이므로 would have failed가 적절합니다."
          }
        ]
      },
      {
        "unitNo": 32,
        "title": "도치 구문 (부정어 도치 & 장소부사구 도치)",
        "part": "특수 구문",
        "targetGrade": "고1 필수",
        "summary": "부정어(Never, Seldom, Little, Hardly) 강조 시 의문문 어순 도치, 장소부사구 강조 시 V+S 도치",
        "formulaCards": [
          {
            "name": "부정어 도치 공식 (수능 1순위)",
            "formula": "부정어(Never, Hardly, Rarely, Seldom, Little, Not only) + 조동사/do/be + 주어 + 동사원형",
            "example": "Little did I dream that I would win. / Never have I seen such a sight.",
            "trap": "일반동사일 때는 반드시 do/does/did를 주어 앞으로 끄집어내야 함!"
          },
          {
            "name": "장소·방향 부사구 도치",
            "formula": "장소부사구 + 1형식 동사 + 명사 주어",
            "example": "Under the tree sat an old man. (대명사 주어일 때는 도치 안 됨: Under the tree he sat.)",
            "trap": "주어가 대명사(he, they)이면 어순이 바뀌지 않음!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_32",
            "sentence": "He suggested that we took a short rest before climbing the steep hill.",
            "underlined": [
              "suggested",
              "that we",
              "took",
              "before climbing"
            ],
            "wrongIndex": 2,
            "correction": "(should) take",
            "explanation": "제안 동사 suggest 뒤의 that절에서는 '(should) + 동사원형'을 쓰므로 took이 아닌 take가 올바릅니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 빈칸에 들어갈 형태로 올바른 것은?\n'Never ________ such a breathtaking sunset in my life.'",
            "options": [
              "I have seen",
              "have I seen",
              "did I saw",
              "I saw",
              "saw I"
            ],
            "ans": 1,
            "exp": "부정어 Never가 문두에 왔으므로 완료 조동사 have가 주어 앞으로 도치된 have I seen이 정답입니다."
          },
          {
            "q": "다음 중 어법상 어색한 문장은?",
            "options": [
              "Little did she know about the secret.",
              "Hardly had I arrived when the phone rang.",
              "Under the bridge a river flows.",
              "Seldom he visits his hometown.",
              "Only then did I understand his intention."
            ],
            "ans": 3,
            "exp": "부정부사 Seldom이 문두에 왔으므로 일반동사 visits의 조동사 does가 도치되어 Seldom does he visit~이 되어야 합니다."
          },
          {
            "q": "다음 문장을 도치 구문으로 바르게 고친 것은?\n'I little dreamed of meeting her here.'",
            "options": [
              "Little dreamed I of meeting her here.",
              "Little I dreamed of meeting her here.",
              "Little did I dream of meeting her here.",
              "Little was I dreaming of meeting her here.",
              "Little do I dream of meeting her here."
            ],
            "ans": 2,
            "exp": "Little + did + 주어(I) + 동사원형(dream)의 도치 어순이 정확합니다."
          },
          {
            "q": "다음 중 주어가 대명사일 때 도치가 일어나지 않는 규칙에 부합하는 것은?",
            "options": [
              "Here comes the bus.",
              "Here comes it.",
              "Here it comes.",
              "There goes the train.",
              "Down fell the leaves."
            ],
            "ans": 2,
            "exp": "주어가 대명사(it)일 때는 '부사 + 주어 + 동사' 어순을 유지하므로 Here it comes가 맞습니다. (Here comes it은 틀림)"
          },
          {
            "q": "빈칸에 들어갈 알맞은 형태는?\n'Not only ________ the guitar, but he also composes songs.'",
            "options": [
              "he plays",
              "does he play",
              "is he playing",
              "he is play",
              "did he played"
            ],
            "ans": 1,
            "exp": "Not only 부정어가 문두에 왔으므로 does he play로 도치되어야 합니다."
          }
        ]
      }
    ]
  },
  {
    "level": 5,
    "levelCode": "lv5",
    "levelName": "수능 킬러",
    "targetGrade": "수능 1등급 & 모의고사 어법",
    "badge": "Lv.5 수능 킬러",
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
          {
            "name": "본동사 찾기 3단계 검증법",
            "formula": "1) 문장 전체의 접속사/관계사 개수 세기 ➔ 2) 수식어구(괄호 묶기) ➔ 3) 진짜 동사 자리인지 준동사 자리인지 판별",
            "example": "The people [living in this area] are (o) / being (x) exposed to noise.",
            "trap": "문장에 본동사가 없는데 -ing나 to V를 밑줄 쳐놓고 낚는 것이 평가원 1위 패턴!"
          },
          {
            "name": "동사 수 = 접속사 수 + 1",
            "formula": "접속사가 없으면 문장에 본동사는 오직 1개만 허용!",
            "example": "He walked into the room and sat down. (접속사 1개 -> 동사 2개)",
            "trap": "분사(-ing, p.p.)는 동사가 아니라 형용사이므로 본동사 역할을 할 수 없음!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_33",
            "sentence": "The museum which we visited it yesterday was truly magnificent.",
            "underlined": [
              "museum",
              "which we",
              "visited it",
              "truly magnificent"
            ],
            "wrongIndex": 2,
            "correction": "visited",
            "explanation": "목적격 관계대명사 which가 이미 목적어 역할을 하므로 visited 뒤에 대명사 it을 중복해서 쓰면 안 됩니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 밑줄 친 부분이 어법상 올바른 것은?",
            "options": [
              "The man standing by the gate looking tired.",
              "Scientists studying deep sea creatures discovering new species.",
              "The evidence presented during the trial was convincing.",
              "Students participating in the competition to win awards.",
              "The factory producing electronic parts closed last year being repaired."
            ],
            "ans": 2,
            "exp": "3번은 주어 The evidence 뒤에 presented~ 수식어가 오고 본동사 was가 올바르게 위치합니다. (1: looking -> looked/was, 2: discovering -> discovered, 4: to win -> won, 5: being -> was)"
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'The traditional methods used by indigenous people ________ sustainable solutions today.'",
            "options": [
              "providing",
              "provide",
              "to provide",
              "being provided",
              "provided by"
            ],
            "ans": 1,
            "exp": "주어가 The traditional methods이고 used by~는 수식 분사이므로 문장의 본동사 자리(복수)인 provide가 와야 합니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'Plants [absorbing] sunlight through their leaves [convert] it into chemical energy, [storing] it in the form of sugars, which [fuels] their growth.'",
            "options": [
              "absorbing",
              "convert",
              "storing",
              "fuels",
              "sugars"
            ],
            "ans": 3,
            "exp": "선행사가 복수명사 sugars이므로 관계사절의 동사는 복수형 fuel이 되어야 합니다."
          },
          {
            "q": "빈칸에 들어갈 수 없는 것은?\n'The researcher found that the participants ________ more focused during morning hours.'",
            "options": [
              "were",
              "became",
              "appeared",
              "felt",
              "being"
            ],
            "ans": 4,
            "exp": "that 명사절 안의 주어 the participants 뒤에는 본동사가 와야 하므로 준동사 being은 들어갈 수 없습니다."
          },
          {
            "q": "다음 문장의 어법 오류를 바르게 고친 것은?\n'A system developed without user feedback failing to meet market demands.'",
            "options": [
              "developed -> developing",
              "without -> with",
              "failing -> fails",
              "meet -> meeting",
              "demands -> demanded"
            ],
            "ans": 2,
            "exp": "문장 전체에 본동사가 없으므로 failing을 3인칭 단수 본동사 fails로 고쳐야 합니다."
          }
        ]
      },
      {
        "unitNo": 34,
        "title": "수능 빈출: 대동사 (do vs be) 판정",
        "part": "수능 킬러",
        "targetGrade": "고2~고3 수능",
        "summary": "앞서 언급된 동사구를 대신 받는 do/does/did vs be동사(am/is/are/was/were)의 엄격한 판별",
        "formulaCards": [
          {
            "name": "대동사 판별 2단계 원칙",
            "formula": "1) 대신 받는 앞선 동사가 일반동사이면 ➔ do / does / did 사용\n2) 앞선 동사가 be동사/조동사이면 ➔ be / 조동사 그대로 사용",
            "example": "He runs faster than I do. (runs 대신) / She is happier than she was. (was happy 대신)",
            "trap": "as / than 뒤의 도치 구문에서 do vs be 밑줄 문제는 평가원 단골 킬러!"
          },
          {
            "name": "So + 동사 + 주어 / Neither + 동사 + 주어",
            "formula": "~도 또한 그렇다 / ~도 또한 그렇지 않다 (앞 문장의 동사 종류에 따라 do or be 결정)",
            "example": "I like jazz. - So do I. / I am tired. - So am I.",
            "trap": "Neither do I vs Neither am I!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_34",
            "sentence": "Standing on top of the hill, the entire city could be seen clearly.",
            "underlined": [
              "Standing on",
              "top of the hill",
              "entire city",
              "could be seen"
            ],
            "wrongIndex": 0,
            "correction": "When we stood on (또는 주어를 사람으로 전환)",
            "explanation": "도시(the entire city)가 언덕 위에 서 있을 수 없으므로 현수분사구문 오류입니다. 주절의 주어와 분사의 의미상 주어가 일치해야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 대동사로 가장 적절한 것은?\n'She understands quantum physics much better than her classmates ________.'",
            "options": [
              "are",
              "do",
              "did",
              "have",
              "were"
            ],
            "ans": 1,
            "exp": "일반동사 understands를 대신 받고 주어가 복수(her classmates)이므로 do가 정답입니다."
          },
          {
            "q": "다음 대화의 빈칸에 알맞은 것은?\nA: 'I was really impressed by the performance.'\nB: 'So ________ I.'",
            "options": [
              "did",
              "was",
              "am",
              "do",
              "have"
            ],
            "ans": 1,
            "exp": "앞 문장의 동사가 be동사(was)이므로 be동사를 받아 So was I가 알맞습니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 어색한 것은?",
            "options": [
              "He doesn't eat meat, and neither do I.",
              "She works harder than anyone else does.",
              "The climate here is much milder than it was in my hometown.",
              "They reacted more quickly than we were.",
              "Some students learned faster than others did."
            ],
            "ans": 3,
            "exp": "일반동사 reacted를 대신 받으므로 were가 아닌 did로 고쳐야 합니다."
          },
          {
            "q": "빈칸에 들어갈 말로 알맞은 것은?\n'Electric cars produce far fewer emissions than traditional gasoline vehicles ________.'",
            "options": [
              "do",
              "are",
              "have",
              "will",
              "did"
            ],
            "ans": 0,
            "exp": "일반동사 produce를 대신 받으며 현재 복수이므로 do가 알맞습니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 알맞은 말은?\n'If you believe in your dreams as passionately as they ________, you will succeed.'",
            "options": [
              "are",
              "do",
              "did",
              "were",
              "have"
            ],
            "ans": 1,
            "exp": "일반동사 believe in을 대신 받으므로 do가 정답입니다."
          }
        ]
      },
      {
        "unitNo": 35,
        "title": "관계사 vs 접속사 뒷문장 완전도 킬러",
        "part": "수능 킬러",
        "targetGrade": "고2~고3 수능",
        "summary": "that, which, what, where, whether의 뒷문장 완전/불완전 여부와 선행사 유무에 따른 수능 공식",
        "formulaCards": [
          {
            "name": "수능 어법 만점 완전도 매트릭스",
            "formula": "1) 선행사 O + 불완전 ➔ 관계대명사 (which, who, that)\n2) 선행사 O + 완전 ➔ 관계부사 (where, when, why) or 동격 that\n3) 선행사 X + 불완전 ➔ 관계대명사 what\n4) 선행사 X + 완전 ➔ 명사절 that or whether",
            "example": "The rumor that he resigned is true. (동격: 완전) / The rumor that I heard is true. (관계사: 불완전)",
            "trap": "동격의 that 뒤는 완전한 문장이 오므로 which로 절대 바꿀 수 없음!"
          },
          {
            "name": "자동사 + 전치사 주의",
            "formula": "listen to, rely on, wait for 등 전치사가 문장 끝에 남아있으면 불완전한 문장!",
            "example": "the music which I listened to (불완전) / the music to which I listened (완전)",
            "trap": "전치사가 뒤에 남아있으면 관계대명사, 전치사가 관계사 앞으로 이동하면 완전한 구조!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_35",
            "sentence": "I would rather staying at home than go out in this freezing weather.",
            "underlined": [
              "would rather",
              "staying",
              "at home",
              "go out"
            ],
            "wrongIndex": 1,
            "correction": "stay",
            "explanation": "'would rather + 동사원형 A than 동사원형 B' 구문이므로 staying이 아니라 동사원형 stay를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'The hypothesis ________ dinosaurs went extinct due to an asteroid impact is widely accepted.'",
            "options": [
              "which",
              "that",
              "what",
              "where",
              "whom"
            ],
            "ans": 1,
            "exp": "선행사(The hypothesis) 뒤에 완전한 절(공룡이 운석 충돌로 멸종했다)이 이어지므로 동격의 접속사 that이 알맞습니다."
          },
          {
            "q": "다음 중 밑줄 친 'which'의 쓰임이 어법상 틀린 것은?",
            "options": [
              "The hotel in which we stayed was luxurious.",
              "This is the question which nobody could solve.",
              "The box which he put his secret letters in was locked.",
              "The village which my grandfather was born is peaceful.",
              "The company for which she works manufactures medical equipment."
            ],
            "ans": 3,
            "exp": "my grandfather was born은 완전한 수동태 절이므로 which가 아니라 in which 또는 where가 되어야 합니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I know the girl ________ solved the puzzle. / I know ________ solved the puzzle.'",
            "options": [
              "who - what",
              "who - who",
              "that - that",
              "which - who",
              "whose - what"
            ],
            "ans": 1,
            "exp": "첫 번째는 선행사 the girl을 수식하는 관계대명사 who, 두 번째는 의문대명사('누가 풀었는지') who가 알맞습니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 수 없는 것은?\n'The debate focused on ________ technology affects human relationships.'",
            "options": [
              "how",
              "whether",
              "that",
              "why",
              "when"
            ],
            "ans": 2,
            "exp": "전치사 on의 목적어 자리이므로 명사절 접속사 that은 올 수 없습니다. (on whether/how/why 가능)"
          },
          {
            "q": "다음 중 뒷문장이 '불완전'해야 하는 접속사/관계사는?",
            "options": [
              "동격의 that",
              "관계부사 where",
              "관계대명사 what",
              "명사절 접속사 whether",
              "이유의 접속사 because"
            ],
            "ans": 2,
            "exp": "관계대명사 what은 선행사를 포함하며 주어나 목적어가 빠진 불완전한 문장을 이끕니다."
          }
        ]
      },
      {
        "unitNo": 36,
        "title": "병렬 구조 (등위접속사와 상관접속사 병치)",
        "part": "수능 킬러",
        "targetGrade": "고2~고3 수능",
        "summary": "and, but, or 및 not only A but also B, either A or B에서 A와 B의 문법적 형태 일치",
        "formulaCards": [
          {
            "name": "등위접속사의 병렬 구조 공식",
            "formula": "A and/but/or B ➔ A와 B는 문법적 품사와 형태(to V - to V, -ing - -ing, 절 - 절)가 반드시 같아야 함!",
            "example": "He likes swimming, hiking, and to run. (x) ➔ ... and running. (o)",
            "trap": "수능에서는 긴 문장 끝의 and 뒤에 밑줄을 그어 앞선 병렬 대상을 찾게 함!"
          },
          {
            "name": "상관접속사의 병렬",
            "formula": "both A and B / not A but B / not only A but also B / either A or B / neither A nor B",
            "example": "Success requires not only working hard but also working smart.",
            "trap": "A가 전치사구면 B도 전치사구, A가 절이면 B도 절!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_36",
            "sentence": "Little she realized that her life was about to change completely.",
            "underlined": [
              "Little",
              "she realized",
              "that her life",
              "about to change"
            ],
            "wrongIndex": 1,
            "correction": "did she realize",
            "explanation": "부정어 Little이 문두에 오면 'did + 주어 + 동사원형'으로 도치되므로 did she realize로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 빈칸에 들어갈 형태로 가장 적절한 것은?\n'She decided to quit her job, sell her apartment, and ________ around the world.'",
            "options": [
              "travel",
              "traveling",
              "traveled",
              "to traveling",
              "travels"
            ],
            "ans": 0,
            "exp": "to부정사의 동사원형 quit, sell과 병렬을 이루므로 travel(to는 생략 가능)이 올바릅니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 어색한 것은?\n'The goal of education is not only [to provide] knowledge but also [inspiring] students to think critically.'",
            "options": [
              "is",
              "to provide",
              "but also",
              "inspiring",
              "to think"
            ],
            "ans": 3,
            "exp": "not only to provide와 병렬을 이루어야 하므로 inspiring을 to inspire로 고쳐야 합니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "He is good at both playing soccer and to swim.",
              "She wants either to study law or studying medicine.",
              "You can succeed by working diligently and plan carefully.",
              "The manager praised her for her dedication, creativity, and honesty.",
              "They were neither willing nor ability to help."
            ],
            "ans": 3,
            "exp": "dedication(헌신), creativity(창의성), honesty(정직) 모두 명사로 깔끔하게 병렬을 이루고 있습니다."
          },
          {
            "q": "빈칸에 들어갈 형태로 알맞은 것은?\n'Reading widely not only expands your worldview but also ________ your empathy.'",
            "options": [
              "enhance",
              "enhances",
              "enhancing",
              "to enhance",
              "enhanced"
            ],
            "ans": 1,
            "exp": "주어가 동명사구 Reading widely(3인칭 단수)이므로 expands와 병렬을 이루는 단수 동사 enhances가 알맞습니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'The author spent his life observing nature, recording data, and ________ the environment.'",
            "options": [
              "protect",
              "protected",
              "protecting",
              "to protect",
              "protection"
            ],
            "ans": 2,
            "exp": "spent의 목적어 뒤에 오는 동명사 observing, recording과 병렬을 이루는 protecting이 정답입니다."
          }
        ]
      },
      {
        "unitNo": 37,
        "title": "형용사 vs 부사 (보어 자리와 수식 대상)",
        "part": "수능 킬러",
        "targetGrade": "고2~고3 수능",
        "summary": "불완전자동사의 주격보어, 5형식 목적격보어 자리의 형용사 vs 수식어구 부사의 판정",
        "formulaCards": [
          {
            "name": "5형식 목적격보어 형용사 킬러 (수능 단골)",
            "formula": "make / find / keep / leave / consider + 목적어 + 형용사 (부사 절대 불가!)",
            "example": "The exercise made his muscles strong (o) / strongly (x).",
            "trap": "우리말로는 '강하게'로 해석되어 strongly를 고르고 싶지만 목적격보어 자리이므로 형용사 strong!"
          },
          {
            "name": "형용사와 부사의 수식 대상",
            "formula": "형용사 ➔ 명사 수식 / 부사 ➔ 동사, 형용사, 다른 부사, 문장 전체 수식",
            "example": "a remarkably successful project (부사가 형용사 successful 수식)",
            "trap": "명사 바로 앞이어도 형용사를 수식할 때는 부사를 써야 함!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_37",
            "sentence": "The price of organic vegetables are much higher than that of regular vegetables.",
            "underlined": [
              "price of",
              "organic vegetables",
              "are much higher",
              "that of"
            ],
            "wrongIndex": 2,
            "correction": "is much higher",
            "explanation": "주어는 복수명사 vegetables가 아니라 단수명사 The price이므로 단수 동사 is가 되어야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'Regular meditation can help keep your mind ________ and calm.'",
            "options": [
              "clear",
              "clearly",
              "clearness",
              "clarity",
              "clearing"
            ],
            "ans": 0,
            "exp": "5형식 keep의 목적격보어 자리이며 and calm과 병렬을 이루므로 형용사 clear가 정답입니다."
          },
          {
            "q": "다음 중 밑줄 친 부분의 어법이 틀린 것은?",
            "options": [
              "The soup tasted surprisingly good.",
              "She spoke English remarkably well.",
              "The medicine made the patient feel easily.",
              "He found the instructions easy to follow.",
              "The room remained silent throughout the night."
            ],
            "ans": 2,
            "exp": "feel은 2형식 감각동사이므로 주격보어로 형용사 easy 또는 comfortable이 와야 하며 부사 easily는 틀립니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'He is an ________ talented artist who works ________.'",
            "options": [
              "extreme - diligent",
              "extremely - diligently",
              "extreme - diligently",
              "extremely - diligent",
              "extremity - diligence"
            ],
            "ans": 1,
            "exp": "형용사 talented를 수식하는 부사 extremely, 동사 works를 수식하는 부사 diligently가 알맞습니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 수 없는 것은?\n'We consider his proposal ________.'",
            "options": [
              "reasonable",
              "practical",
              "acceptable",
              "reasonably",
              "innovative"
            ],
            "ans": 3,
            "exp": "consider의 목적격보어 자리이므로 부사 reasonably는 들어갈 수 없습니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "Drive safe on the icy road.",
              "The flower smells sweetly in the morning.",
              "I find it impossible to finish this in one day.",
              "She looks like beautifully today.",
              "He acted cold toward his old friend."
            ],
            "ans": 2,
            "exp": "'find + it(가목적어) + 형용사 보어(impossible) + to부정사(진목적어)' 구문이 완벽합니다. (1: safely, 2: sweet, 4: like 삭제, 5: coldly)"
          }
        ]
      },
      {
        "unitNo": 38,
        "title": "대명사의 일치 (that vs those, 재귀대명사)",
        "part": "수능 킬러",
        "targetGrade": "고2~고3 수능",
        "summary": "비교 대상의 대명사 수일치 that/those, 주어와 목적어가 같을 때의 재귀대명사(-self)",
        "formulaCards": [
          {
            "name": "비교 구문에서의 that of / those of",
            "formula": "단수 명사 대신 ➔ that of / 복수 명사 대신 ➔ those of",
            "example": "The ears of an elephant are larger than those of an ape.",
            "trap": "앞선 명사가 The ears(복수)이므로 that of an ape (x) -> those of an ape (o)!"
          },
          {
            "name": "재귀대명사의 재귀용법 vs 강조용법",
            "formula": "주어와 목적어가 같으면 반드시 재귀대명사 사용 (생략 불가) / 강조용법은 생략 가능",
            "example": "He looked at himself in the mirror. (재귀) / He solved it himself. (강조)",
            "trap": "주어와 목적어가 같은 인물인데 him을 쓰면 다른 사람을 가리키게 됨!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_38",
            "sentence": "It is essential that every student understands the safety guidelines thoroughly.",
            "underlined": [
              "essential",
              "every student",
              "understands",
              "safety guidelines"
            ],
            "wrongIndex": 2,
            "correction": "(should) understand",
            "explanation": "이성적 판단/필수 형용사 essential 뒤의 that절에서는 '(should) + 동사원형'을 쓰므로 understand가 되어야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 대명사로 알맞은 것은?\n'The eyes of a cat are more sensitive to light than ________ of a human.'",
            "options": [
              "that",
              "those",
              "this",
              "these",
              "it"
            ],
            "ans": 1,
            "exp": "앞선 비교 대상 명사가 The eyes(복수)이므로 those가 알맞습니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?",
            "options": [
              "She looked at herself in the glass.",
              "He introduced himself to the audience.",
              "They enjoyed themselves at the party.",
              "History often repeats it.",
              "You should take care of yourself."
            ],
            "ans": 3,
            "exp": "역사는 '자기 자신'을 반복하는 것이므로 주어 History와 일치하는 재귀대명사 itself로 고쳐야 합니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'The climate of Italy is similar to ________ of Spain. / The customs of Koreans are different from ________ of Americans.'",
            "options": [
              "that - that",
              "that - those",
              "those - that",
              "those - those",
              "it - them"
            ],
            "ans": 1,
            "exp": "The climate(단수)은 that으로, The customs(복수)는 those로 받습니다."
          },
          {
            "q": "다음 중 재귀대명사를 생략할 수 있는 문장은?",
            "options": [
              "He killed himself.",
              "She taught herself coding.",
              "I made this cake myself.",
              "Don't blame yourself for the mistake.",
              "We pride ourselves on customer service."
            ],
            "ans": 2,
            "exp": "3번의 myself는 주어 I를 강조하기 위해 덧붙여진 강조용법이므로 생략해도 문장이 성립합니다. 나머지는 모두 필수 목적어입니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 대명사는?\n'Teachers should encourage students to think for ________.'",
            "options": [
              "them",
              "themselves",
              "himself",
              "herself",
              "itself"
            ],
            "ans": 1,
            "exp": "to think의 의미상 주어인 students와 목적어가 일치하므로 복수 재귀대명사 themselves가 정답입니다."
          }
        ]
      },
      {
        "unitNo": 39,
        "title": "전치사 vs 접속사 구별 (during vs while, because of vs because)",
        "part": "수능 킬러",
        "targetGrade": "고2~고3 수능",
        "summary": "뒤에 명사(구)가 오는 전치사 vs 뒤에 주어+동사(절)가 오는 접속사의 절대 판별",
        "formulaCards": [
          {
            "name": "수능 빈출 전치사 vs 접속사 쌍",
            "formula": "전치사(+명사구) vs 접속사(+S+V)\n• during vs while\n• because of / due to / owing to vs because / as / since\n• despite / in spite of vs although / though / even though",
            "example": "during the summer vacation / while I was on vacation / despite the rain / although it rained",
            "trap": "despite of (x) ➔ despite는 전치사이므로 of를 붙이지 않음!"
          },
          {
            "name": "for vs during",
            "formula": "for + 숫자 기간 (for three days) / during + 특정 기간 명사 (during the winter break)",
            "example": "I stayed in London for two weeks during the summer.",
            "trap": "for the vacation (x) -> during the vacation (o)"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_39",
            "sentence": "She bought a delicate antique vase, that was made in the eighteenth century.",
            "underlined": [
              "bought",
              "delicate antique vase",
              "that was made",
              "eighteenth century"
            ],
            "wrongIndex": 2,
            "correction": "which was made",
            "explanation": "관계대명사 that은 콤마(,) 뒤의 계속적 용법으로 쓸 수 없으므로 which로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'The flight was delayed ________ the heavy snowfall.'",
            "options": [
              "because",
              "since",
              "due to",
              "as",
              "although"
            ],
            "ans": 2,
            "exp": "뒤에 명사구(the heavy snowfall)가 오므로 전치사구인 due to(또는 because of)가 정답입니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "I fell asleep during the movie.",
              "She stayed silent while he was explaining.",
              "Despite of the heavy rain, we enjoyed the trip.",
              "Because of his illness, he couldn't attend.",
              "Although it was cold, we swam."
            ],
            "ans": 2,
            "exp": "despite는 그 자체로 전치사이므로 of를 붙이지 않습니다. Despite 또는 In spite of로 고쳐야 합니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'He has lived here ________ five years. / She called me ________ the meeting.'",
            "options": [
              "for - during",
              "during - for",
              "for - while",
              "during - while",
              "since - during"
            ],
            "ans": 0,
            "exp": "숫자 기간 앞에는 for, 특정 명사 행사 앞에는 during이 알맞습니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 접속사는?\n'Never give up ________ life gets tough.'",
            "options": [
              "even though",
              "in spite of",
              "despite",
              "because of",
              "during"
            ],
            "ans": 0,
            "exp": "뒤에 'life(주어) + gets(동사)'의 절이 이어지므로 양보의 접속사 even though가 와야 합니다."
          },
          {
            "q": "다음 중 빈칸에 'while'만 들어갈 수 있는 문장은?",
            "options": [
              "I met him ________ the winter holidays.",
              "He listened to music ________ exercising.",
              "She stayed there ________ three weeks.",
              "We were happy ________ the result.",
              "They arrived ________ the concert."
            ],
            "ans": 1,
            "exp": "while exercising은 접속사 뒤에 주어+be동사가 생략된 형태(while he was exercising)이므로 while이 들어갑니다."
          }
        ]
      },
      {
        "unitNo": 40,
        "title": "수능 29번 어법 10대 출제공식 총정리",
        "part": "수능 킬러",
        "targetGrade": "고2~고3 수능 파이널",
        "summary": "역대 평가원 수능 29번 어법 문항 10개년 완벽 분석 및 1등급 판별 10대 골든 룰",
        "formulaCards": [
          {
            "name": "수능 29번 3대 킬러 유형",
            "formula": "1위: 동사 vs 준동사 (본동사 부재 낚시)\n2위: 관계사 vs 접속사 (what vs that, which vs in which)\n3위: 능동 vs 수동 (분사의 수식 대상 확인)",
            "example": "평가원은 복잡한 수식어구 사이에 진짜 본동사가 있는지를 가장 먼저 묻습니다.",
            "trap": "문장 구조 분석 없이 단어만 보고 해석으로 풀려고 하면 100% 함정에 빠짐!"
          },
          {
            "name": "수능 어법 1등급 30초 검증 팁",
            "formula": "밑줄 친 단어의 앞뒤 3단어만 보지 말고, 반드시 문장 전체의 '주어'와 '본동사'를 먼저 찾아 괄호 묶기를 실행할 것!",
            "example": "[주어] + (수식어 거품...) + [본동사] + [목적어/보어]",
            "trap": "문장이 4~5줄로 길어질수록 접속사의 개수와 동사의 개수를 대조하는 것이 핵심!"
          }
        ],
        "spottingDrills": [
          {
            "id": "sp_40",
            "sentence": "Seeing from a distance, the ancient rock resembles a giant sleeping turtle.",
            "underlined": [
              "Seeing from",
              "distance",
              "ancient rock",
              "resembles"
            ],
            "wrongIndex": 0,
            "correction": "Seen from",
            "explanation": "바위(the ancient rock)는 멀리서 바라보아 '지는' 수동의 대상이므로 과거분사 Seen from이 되어야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'Ancient Greek philosophers, ①[recognizing] the limitations of senses, ②[attempted] to explain natural phenomena through logic, ③[which] laid the foundation for modern science, ④[made] rational thinking central to Western thought.'",
            "options": [
              "① recognizing",
              "② attempted",
              "③ which",
              "④ made",
              "선택지 없음"
            ],
            "ans": 3,
            "exp": "④번 자리 앞에는 등위접속사가 없으므로 동사 made를 쓸 수 없으며, 분사구문 making 또는 and made로 연결해야 합니다."
          },
          {
            "q": "다음 글의 밑줄 친 부분 중 어법상 틀린 것은?\n'The brain's ability to reorganize ①[itself] by forming new neural connections throughout life ②[is] called neuroplasticity, ③[what] allows humans to learn new skills and recover from injuries.'",
            "options": [
              "① itself",
              "② is",
              "③ what",
              "forming",
              "allows"
            ],
            "ans": 2,
            "exp": "③번 앞에 콤마가 있고 앞선 내용 전체를 선행사로 받는 계속적 용법이므로 what이 아닌 which가 와야 합니다."
          },
          {
            "q": "다음 중 수능 어법상 올바른 문장은?",
            "options": [
              "He suggested that the committee postponed the decision.",
              "The number of endangered species are growing rapidly.",
              "Rarely we encounter such an extraordinary talent.",
              "She worked hard so that her children could receive a good education.",
              "He bought a car which engine was completely refurbished."
            ],
            "ans": 3,
            "exp": "목적을 나타내는 'so that + 조동사' 구문이 완벽하게 쓰였습니다. (1: postpone, 2: is, 3: do we encounter, 5: whose)"
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'The economic impact of renewable energy sources [are] much greater than traditional fossil fuels [do].'",
            "options": [
              "impact",
              "are",
              "much",
              "greater",
              "do"
            ],
            "ans": 1,
            "exp": "주어가 단수 명사인 The economic impact이므로 are가 아닌 is가 되어야 합니다."
          },
          {
            "q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'The degree ________ individuals are influenced by social norms varies across cultures.'",
            "options": [
              "which",
              "to which",
              "what",
              "that of",
              "whose"
            ],
            "ans": 1,
            "exp": "'individuals are influenced by social norms'는 완전한 수동태 절이며, the degree to which(~하는 정도)의 관용 표현이므로 to which가 정답입니다."
          }
        ]
      }
    ]
  },
  {
    "level": 101,
    "levelCode": "sp_terms",
    "levelName": "문법 용어 특강",
    "targetGrade": "영포자 탈출 0순위",
    "badge": "용어 특강",
    "color": "amber",
    "themeColor": "#d97706",
    "isSpecial": true,
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
            "sentence": "The chef prepared careful a delicious meal for the hungry guests.",
            "underlined": [
              "The chef",
              "prepared careful",
              "a delicious meal",
              "hungry guests"
            ],
            "wrongIndex": 1,
            "correction": "prepared carefully",
            "explanation": "동사 prepared를 수식하는 자리이므로 형용사 careful이 아니라 부사 carefully가 와야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 '단어의 품사'와 '문장 성분'이 올바르게 짝지어진 것은?",
            "options": [
              "apple : 품사는 목적어, 문장성분은 명사",
              "beautiful : 품사는 형용사, 문장성분은 보어 또는 수식어",
              "slowly : 품사는 부사, 문장성분은 주어",
              "run : 품사는 주어, 문장성분은 동사",
              "under : 품사는 접속사, 문장성분은 보어"
            ],
            "ans": 1,
            "exp": "beautiful은 품사로는 형용사이며, 문장 내에서 명사를 수식하거나 보어 역할을 수행합니다."
          },
          {
            "q": "다음 문장에서 밑줄 친 단어의 '문장 성분'은?\n'My uncle bought [a new computer] yesterday.'",
            "options": [
              "주어 (Subject)",
              "동사 (Verb)",
              "목적어 (Object)",
              "보어 (Complement)",
              "수식어 (Modifier)"
            ],
            "ans": 2,
            "exp": "동사 bought의 동작 대상(~을/를)에 해당하므로 '목적어'입니다."
          },
          {
            "q": "다음 중 문장의 필수 뼈대 성분(주어, 동사, 목적어, 보어)이 아닌 것은?",
            "options": [
              "주어",
              "목적어",
              "보어",
              "부사적 수식어(Modifier)",
              "동사"
            ],
            "ans": 3,
            "exp": "부사나 전치사구 등 수식어(Modifier)는 문장의 부가적 성분으로 필수 뼈대에 포함되지 않습니다."
          },
          {
            "q": "다음 중 형용사(Adjective)가 문장 안에서 맡을 수 있는 역할로 올바른 것은?",
            "options": [
              "주어 자리 전담",
              "명사 수식 및 보어(주격/목적격 보어)",
              "동사 수식 및 목적어",
              "전치사의 목적어",
              "문장과 문장을 연결"
            ],
            "ans": 1,
            "exp": "형용사는 명사를 직접 꾸미거나(한정적), 주어나 목적어를 보충 설명하는 보어(서술적) 역할을 합니다."
          },
          {
            "q": "다음 문장에서 '보어(Complement)'에 해당하는 단어는?\n'The music sounds very sweet.'",
            "options": [
              "The",
              "music",
              "sounds",
              "very",
              "sweet"
            ],
            "ans": 4,
            "exp": "sounds 뒤에서 주어(The music)의 상태를 보충 설명하는 형용사 sweet가 주격 보어입니다."
          }
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
            "underlined": [
              "entered to",
              "the classroom",
              "looked at",
              "silently"
            ],
            "wrongIndex": 0,
            "correction": "entered",
            "explanation": "enter는 '~에 들어가다'라는 뜻의 완전타동사이므로 전치사 to 없이 바로 목적어 the classroom을 취해야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 목적어(~을/를) 없이 홀로 완전한 문장을 이룰 수 있는 '자동사'는?",
            "options": [
              "buy",
              "make",
              "sleep",
              "want",
              "catch"
            ],
            "ans": 2,
            "exp": "sleep(자다)은 목적어가 필요 없는 대표적인 자동사입니다."
          },
          {
            "q": "다음 문장의 형식은?\n'My grandmother gave me a beautiful watch on my birthday.'",
            "options": [
              "1형식 (S+V)",
              "2형식 (S+V+C)",
              "3형식 (S+V+O)",
              "4형식 (S+V+IO+DO)",
              "5형식 (S+V+O+OC)"
            ],
            "ans": 3,
            "exp": "주어(grandmother) + 동사(gave) + 간접목적어(me) + 직접목적어(a beautiful watch)의 4형식 수여동사 문장입니다."
          },
          {
            "q": "다음 중 전치사 없이 목적어를 바로 취해야 하는 '완전타동사'는?",
            "options": [
              "listen",
              "arrive",
              "discuss",
              "look",
              "wait"
            ],
            "ans": 2,
            "exp": "discuss는 타동사이므로 discuss about이 아니라 바로 discuss the problem처럼 목적어를 취합니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 말로 알맞은 것은?\n'The baby ________ softly in the cradle.'",
            "options": [
              "slept",
              "slept to",
              "slept at",
              "slept with",
              "was slept"
            ],
            "ans": 0,
            "exp": "sleep은 자동사이므로 전치사나 수동태 없이 단독으로 부사(softly)와 결합합니다."
          },
          {
            "q": "다음 문장에서 목적격 보어(OC)를 필요로 하는 5형식 문장은?",
            "options": [
              "He runs very fast.",
              "The sky turned dark.",
              "She bought a new dress.",
              "They made him the president.",
              "I sent a postcard to my friend."
            ],
            "ans": 3,
            "exp": "They(S) made(V) him(O) the president(OC) 구조로 5형식입니다."
          }
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
            "underlined": [
              "fresh bread",
              "smelled deliciously",
              "tasted",
              "sweet"
            ],
            "wrongIndex": 1,
            "correction": "smelled delicious",
            "explanation": "감각동사 smell 뒤에는 주어를 보충하는 주격 보어 자리가 오므로 부사 deliciously가 아니라 형용사 delicious를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 밑줄 친 부분이 '보어'인 문장은?",
            "options": [
              "She plays tennis well.",
              "My brother became an engineer.",
              "I read a book in the library.",
              "They arrived at the airport.",
              "He ran into the room."
            ],
            "ans": 1,
            "exp": "became an engineer에서 engineer는 주어(My brother)의 정체를 보충하는 주격 보어입니다."
          },
          {
            "q": "다음 빈칸에 어법상 들어갈 수 없는 단어는?\n'The music sounds ________.'",
            "options": [
              "wonderful",
              "great",
              "sweet",
              "beautifully",
              "pleasant"
            ],
            "ans": 3,
            "exp": "감각동사 sounds 뒤 보어 자리에는 부사 beautifully가 올 수 없습니다. 형용사 beautiful이어야 합니다."
          },
          {
            "q": "다음 5형식 문장에서 '목적격 보어'는?\n'Her kind words made him very happy.'",
            "options": [
              "kind",
              "words",
              "made",
              "him",
              "happy"
            ],
            "ans": 4,
            "exp": "목적어 him의 기분 상태를 보충 설명하는 happy가 목적격 보어입니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "This soup tastes badly.",
              "The flowers smell sweetly.",
              "He looked angrily at the referee.",
              "She seems happily today.",
              "The blanket feels softly."
            ],
            "ans": 2,
            "exp": "3번의 looked는 '바라보다'라는 일반 동작 동사로 쓰여 부사 angrily(화나서)의 수식을 받는 바른 문장입니다. (나머지는 감각동사 뒤 부사 사용 오류)"
          },
          {
            "q": "보어(Complement)에 대한 설명으로 옳지 않은 것은?",
            "options": [
              "주어나 목적어의 의미를 보충해 준다.",
              "명사와 형용사가 보어가 될 수 있다.",
              "감각동사 뒤에는 형용사 보어가 온다.",
              "우리말 해석이 '~하게'이면 부사를 보어로 쓴다.",
              "2형식과 5형식 문장에 등장한다."
            ],
            "ans": 3,
            "exp": "우리말 해석이 '~하게'로 되더라도 보어 자리에는 절대 부사를 쓸 수 없고 형용사를 써야 합니다."
          }
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
            "underlined": [
              "My dream",
              "is become",
              "an astrophysicist",
              "explore"
            ],
            "wrongIndex": 1,
            "correction": "is to become (또는 is becoming)",
            "explanation": "문장의 본동사 is가 있으므로 뒤에 동사원형 become을 바로 쓸 수 없으며, 명사적 보어 역할을 하는 to become 또는 becoming으로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "준동사(Verbal)가 만들어진 가장 근본적인 이유는?",
            "options": [
              "문장을 더 어렵게 만들기 위해",
              "한 문장에 접속사 없이 동사를 또 쓰기 위해 품사를 변신시킴",
              "동사의 개수를 무제한 늘리기 위해",
              "단어의 철자를 길게 만들기 위해",
              "주어를 강조하기 위해"
            ],
            "ans": 1,
            "exp": "한 문장에는 본동사가 1개만 올 수 있으므로, 추가적인 동작을 표현하기 위해 동사를 명사·형용사·부사로 변신시킨 것이 준동사입니다."
          },
          {
            "q": "다음 중 밑줄 친 V-ing가 '동명사'로 쓰인 것은?",
            "options": [
              "Look at the crying baby.",
              "She is reading a novel in her room.",
              "Swimming in the river is very dangerous.",
              "A barking dog seldom bites.",
              "The falling leaves look beautiful."
            ],
            "ans": 2,
            "exp": "3번의 Swimming은 문장의 '주어(~하는 것)' 역할을 하므로 동명사입니다. (나머지는 명사를 수식하는 현재분사 또는 진행형)"
          },
          {
            "q": "'to부정사(Infinitive)'에서 '부정(不定)'의 진짜 의미는?",
            "options": [
              "아니다(Not)라는 부정적인 뜻",
              "역할이 명사, 형용사, 부사로 정해져 있지 않고 문맥에 따라 결정됨",
              "문법적으로 정상이 아니라는 뜻",
              "아무도 정답을 알 수 없다는 뜻",
              "항상 부정문에만 쓰인다는 뜻"
            ],
            "ans": 1,
            "exp": "부정(不定, Non-finite)은 품사 역할이 하나로 정해져 있지 않다(Not fixed)는 뜻입니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 준동사의 형태로 알맞은 것은?\n'I bought a book ________ on the train.'",
            "options": [
              "read",
              "to read",
              "reads",
              "is reading",
              "was read"
            ],
            "ans": 1,
            "exp": "명사 a book을 뒤에서 수식하는 형용사적 용법의 to부정사 to read가 적절합니다."
          },
          {
            "q": "준동사가 원래 동사 출신이기 때문에 가지는 고유한 성질이 아닌 것은?",
            "options": [
              "자신만의 목적어나 보어를 취할 수 있다.",
              "부사의 수식을 받을 수 있다.",
              "단독으로 문장의 본동사 역할을 할 수 있다.",
              "의미상의 주어를 가질 수 있다.",
              "능동형과 수동형의 태를 가질 수 있다."
            ],
            "ans": 2,
            "exp": "준동사는 본동사가 아니므로 문장의 주어 바로 뒤에서 단독으로 문장의 본동사 역할을 할 수 없습니다."
          }
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
            "underlined": [
              "The girl",
              "who she",
              "won the science contest",
              "younger sister"
            ],
            "wrongIndex": 1,
            "correction": "who",
            "explanation": "주격 관계대명사 who가 이미 주어 역할을 하므로 인칭대명사 she를 중복해서 쓰면 안 됩니다."
          }
        ],
        "questions": [
          {
            "q": "'관계대명사'에서 '관계(Relational)'가 의미하는 문법적 기능은?",
            "options": [
              "친족 관계를 나타냄",
              "두 문장을 이어주는 '접속사' 기능",
              "남녀 간의 연애 관계",
              "상관관계 통계 분석",
              "인과 관계 도출"
            ],
            "ans": 1,
            "exp": "관계(Relative)는 두 문장을 연결해 주는 '접속사' 기능을 의미합니다."
          },
          {
            "q": "'선행사(Antecedent)'의 한자어 어원적 의미는?",
            "options": [
              "선한 행동을 하는 사람",
              "관계사 앞에 먼저(先) 나오는 명사",
              "선생님이 가르치는 단어",
              "앞으로 행해야 할 과제",
              "가장 우선시되는 동사"
            ],
            "ans": 1,
            "exp": "선행사(先行詞)는 관계대명사 앞에 먼저 위치하여 수식을 받는 명사를 뜻합니다."
          },
          {
            "q": "다음 두 문장을 관계대명사를 이용해 한 문장으로 바르게 합친 것은?\n'I have a friend. She lives in New York.'",
            "options": [
              "I have a friend which lives in New York.",
              "I have a friend who she lives in New York.",
              "I have a friend who lives in New York.",
              "I have a friend whom lives in New York.",
              "I have a friend whose lives in New York."
            ],
            "ans": 2,
            "exp": "선행사가 사람이고 주격이므로 who를 쓰며, 대명사 she는 생략되어야 합니다."
          },
          {
            "q": "관계대명사절 뒤의 문장 구조의 결정적인 특징은?",
            "options": [
              "항상 완전한 문장이 온다.",
              "주어나 목적어가 빠진 불완전한 문장이 온다.",
              "동사가 반드시 2개 연속 온다.",
              "접속사가 또 필요하다.",
              "부사가 맨 앞에 온다."
            ],
            "ans": 1,
            "exp": "관계대명사가 주어나 목적어를 대신하고 있으므로 뒤따르는 절은 반드시 주어나 목적어가 빠진 불완전한 구조입니다."
          },
          {
            "q": "관계대명사절 전체는 문장 안에서 어떤 품사 역할을 하는가?",
            "options": [
              "명사절 (주어 역할)",
              "형용사절 (선행사 명사 수식)",
              "부사절 (시간/이유 수식)",
              "동사구 (동작 서술)",
              "독립 감탄구"
            ],
            "ans": 1,
            "exp": "선행사(명사)를 꾸며주므로 형용사 역할을 하는 '형용사절'입니다."
          }
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
            "underlined": [
              "mysterious accident",
              "was happened",
              "on highway 65",
              "yesterday evening"
            ],
            "wrongIndex": 1,
            "correction": "happened",
            "explanation": "happen(일어나다, 발생하다)은 목적어가 없는 자동사이므로 수동태(was happened)로 쓸 수 없으며 능동형 happened로 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "영어에서 능동태 대신 수동태를 사용하는 대표적인 상황이 아닌 것은?",
            "options": [
              "행위자보다 행동을 당하는 대상이 더 중요할 때",
              "행위자가 누구인지 모르거나 밝힐 필요가 없을 때",
              "주어가 직접 자신의 의지로 동작을 적극 수행함을 강조할 때",
              "객관적인 사실이나 학술적 연구 결과를 진술할 때",
              "행위자가 불특정 다수(people)일 때"
            ],
            "ans": 2,
            "exp": "주어가 직접 동작을 적극 수행함을 강조할 때는 능동태(Active voice)를 씁니다."
          },
          {
            "q": "다음 중 수동태 문장으로 전환할 수 없는 동사는?",
            "options": [
              "build",
              "disappear",
              "write",
              "clean",
              "invent"
            ],
            "ans": 1,
            "exp": "disappear(사라지다)는 목적어를 가질 수 없는 자동사이므로 수동태가 불가능합니다."
          },
          {
            "q": "다음 능동태 문장을 수동태로 올바르게 전환한 것은?\n'Many tourists visit the palace every year.'",
            "options": [
              "The palace visited by many tourists every year.",
              "The palace is visited by many tourists every year.",
              "The palace was visited by many tourists every year.",
              "The palace visits many tourists every year.",
              "The palace has visited by many tourists."
            ],
            "ans": 1,
            "exp": "현재 시제이므로 be동사 현재형 is + visited + by many tourists가 맞습니다."
          },
          {
            "q": "수동태의 기본 공식으로 올바른 것은?",
            "options": [
              "have + p.p.",
              "be동사 + 동사원형",
              "be동사 + 과거분사(p.p.)",
              "do + 동사원형",
              "be동사 + 현재분사(V-ing)"
            ],
            "ans": 2,
            "exp": "수동태의 기본 형태는 'be동사 + 과거분사(p.p.)'입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?",
            "options": [
              "The window was broken by Tom.",
              "English is spoken in many countries.",
              "The castle was built in 1600.",
              "The car was disappeared last night.",
              "The letter was delivered on time."
            ],
            "ans": 3,
            "exp": "disappear는 자동사이므로 was disappeared라는 수동태 형태는 틀렸으며, disappeared로 써야 합니다."
          }
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
            "underlined": [
              "Despite",
              "it rained heavily",
              "continued",
              "baseball match"
            ],
            "wrongIndex": 0,
            "correction": "Although (또는 Even though)",
            "explanation": "뒤에 'it rained heavily'라는 주어+동사의 절이 이어지므로 전치사 Despite가 아니라 접속사 Although를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "'구(Phrase)'와 '절(Clause)'을 구별하는 가장 결정적인 기준은?",
            "options": [
              "글자 수의 길이",
              "단어 묶음 속에 [주어+동사]의 결합 관계가 있는가",
              "마침표가 찍혀 있는가",
              "대문자로 시작하는가",
              "전치사가 포함되어 있는가"
            ],
            "ans": 1,
            "exp": "구는 주어+동사가 없는 단어 뭉치이고, 절은 주어+동사를 갖춘 단어 뭉치입니다."
          },
          {
            "q": "다음 중 성격이 다른 하나는? (구 vs 절)",
            "options": [
              "under the big tree",
              "to solve the problem",
              "with my best friends",
              "when she arrived home",
              "in early morning"
            ],
            "ans": 3,
            "exp": "4번은 when 접속사 뒤에 'she(주어) + arrived(동사)'가 있으므로 '절'이고, 나머지는 '구'입니다."
          },
          {
            "q": "다음 빈칸에 'Because of'만 들어갈 수 있는 것은?",
            "options": [
              "________ the heavy snow",
              "________ it was snowing heavily",
              "________ he was absent",
              "________ she felt sick",
              "________ we missed the bus"
            ],
            "ans": 0,
            "exp": "Because of는 전치사이므로 주어+동사가 없는 명사구(the heavy snow) 앞에 와야 합니다."
          },
          {
            "q": "다음 문장에서 '종속절'에 해당하는 부분은?\n'We went outside when the rain stopped.'",
            "options": [
              "We went outside",
              "went outside",
              "when the rain stopped",
              "the rain stopped",
              "when the rain"
            ],
            "ans": 2,
            "exp": "접속사 when을 동반하여 주절에 시간 조건을 더해주는 'when the rain stopped'가 종속절(부사절)입니다."
          },
          {
            "q": "다음 중 명사구(Noun Phrase) 역할을 하는 것은?",
            "options": [
              "very softly",
              "in the garden",
              "To read good books",
              "if it is true",
              "quite happily"
            ],
            "ans": 2,
            "exp": "'To read good books'는 to부정사의 명사적 용법으로 주어 역할을 할 수 있는 명사구입니다."
          }
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
            "underlined": [
              "The mother",
              "looked at",
              "asleep child",
              "on her face"
            ],
            "wrongIndex": 2,
            "correction": "sleeping child",
            "explanation": "asleep은 서술적 용법(보어 자리)으로만 쓰이는 형용사이므로 명사 child를 앞에서 직접 수식할 수 없습니다. sleeping child로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "형용사의 '서술적 용법'에 대한 설명으로 옳은 것은?",
            "options": [
              "명사 바로 앞에서 명사를 직접 수식한다.",
              "문장의 보어(주격/목적격 보어) 자리에 쓰여 상태를 설명한다.",
              "항상 부사의 수식만 받는다.",
              "관계대명사 뒤에만 쓰인다.",
              "전치사 뒤에만 쓰인다."
            ],
            "ans": 1,
            "exp": "서술적 용법은 보어 자리에서 주어나 목적어의 상태를 설명하는 용법입니다."
          },
          {
            "q": "다음 중 명사 앞에서 직접 명사를 꾸밀 수 없는 '서술 전용 형용사'는?",
            "options": [
              "happy",
              "alive",
              "brave",
              "honest",
              "clever"
            ],
            "ans": 1,
            "exp": "alive는 an alive fish(X)처럼 쓸 수 없고, The fish is alive(O)처럼 서술적 보어로만 쓰입니다."
          },
          {
            "q": "관계대명사의 계속적 용법(, 콤마 뒤)에 절대 쓸 수 없는 관계대명사는?",
            "options": [
              "which",
              "who",
              "whom",
              "that",
              "whose"
            ],
            "ans": 3,
            "exp": "관계대명사 that과 what은 콤마 뒤 계속적 용법으로 쓸 수 없습니다."
          },
          {
            "q": "다음 두 문장의 의미 차이로 올바른 것은?\n(A) I met an old friend who told me the news.\n(B) I met an old friend, who told me the news.",
            "options": [
              "(A)와 (B)의 의미는 100% 동일하다.",
              "(A)는 그 소식을 전해준 옛 친구를 만난 것이고, (B)는 옛 친구를 만났는데 그 친구가 소식을 전해준 것이다.",
              "(A)는 가짜 뉴스이고 (B)는 진짜 뉴스이다.",
              "(A)는 친구가 여러 명이고 (B)는 친구가 없다.",
              "(B) 문장은 문법 오류 문장이다."
            ],
            "ans": 1,
            "exp": "(A)는 한정적 수식이며, (B)는 앞에서부터 순차적으로 정보를 덧붙이는 계속적 서술입니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "The baby was fast asleep.",
              "He is afraid of snakes.",
              "She bought an asleep puppy.",
              "The bird is still alive.",
              "He stayed alone in the house."
            ],
            "ans": 2,
            "exp": "asleep은 명사를 앞에서 직접 수식할 수 없으므로 an asleep puppy는 틀렸고, a sleeping puppy로 써야 합니다."
          }
        ]
      }
    ]
  },
  {
    "level": 102,
    "levelCode": "sp_writing",
    "levelName": "서술형 영작 특강",
    "targetGrade": "중·고등 내신 1등급",
    "badge": "서술형 특강",
    "color": "rose",
    "themeColor": "#e11d48",
    "isSpecial": true,
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
            "underlined": [
              "It was",
              "generous for him",
              "to donate",
              "to the charity"
            ],
            "wrongIndex": 1,
            "correction": "generous of him",
            "explanation": "generous(관대한)는 사람의 인품·성격을 나타내는 형용사이므로 to부정사의 의미상 주어 앞에 for가 아닌 of를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 우리말을 조건에 맞게 영작할 때 빈칸에 알맞은 것은?\n'그가 제시간에 도착하는 것은 불가능하다.' (It, possible 단어 변형 활용)",
            "options": [
              "It is impossible for him to arrive on time.",
              "It is impossible of him to arrive on time.",
              "It is impossible for he arriving on time.",
              "He is impossible to arrive on time.",
              "It is impossible that he arrive on time."
            ],
            "ans": 0,
            "exp": "가주어 it, 일반 형용사의 의미상 주어 for him, 진주어 to arrive 구문이 정확합니다."
          },
          {
            "q": "다음 문장과 의미가 같도록 빈칸을 채울 때 알맞은 것은?\n'The box was too heavy for her to lift.'\n= 'The box was so heavy that she ________ it.'",
            "options": [
              "cannot lift",
              "could not lift",
              "can lift",
              "could not lift it",
              "could lift"
            ],
            "ans": 3,
            "exp": "so ~ that 구문에서는 타동사 lift의 목적어 it을 반드시 써주어야 하며, 과거시제이므로 could not lift it이 정답입니다."
          },
          {
            "q": "다음 중 의미상 주어 앞에 'of'를 써야 하는 형용사는?",
            "options": [
              "easy",
              "difficult",
              "important",
              "foolish",
              "dangerous"
            ],
            "ans": 3,
            "exp": "foolish(어리석은)는 사람의 성품을 나타내는 형용사이므로 of를 씁니다."
          },
          {
            "q": "다음 영작 중 어법상 틀린 부분은?\n'It is necessary for us [learning] foreign languages.'",
            "options": [
              "is",
              "necessary",
              "for us",
              "learning",
              "foreign languages"
            ],
            "ans": 3,
            "exp": "가주어 it 구문에서 진주어로는 to부정사가 와야 하므로 learning을 to learn으로 고쳐야 합니다."
          },
          {
            "q": "다음 빈칸에 들어갈 전치사가 순서대로 알맞은 것은?\n'It is hard ________ her to wake up early.'\n'It is polite ________ you to say hello.'",
            "options": [
              "for - for",
              "of - for",
              "for - of",
              "of - of",
              "to - for"
            ],
            "ans": 2,
            "exp": "hard는 일반 난이도 형용사이므로 for, polite는 인품 형용사이므로 of입니다."
          }
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
            "underlined": [
              "never forget",
              "the restaurant",
              "where we had dinner in",
              "first anniversary"
            ],
            "wrongIndex": 2,
            "correction": "where we had dinner (또는 which we had dinner in)",
            "explanation": "관계부사 where 뒤에는 완전한 절이 와야 하므로 불필요한 전치사 in을 삭제하거나, in which로 바꾸어야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 두 문장을 한 문장으로 바르게 결합한 것은?\n'This is the laptop.' + 'I bought it last week.'",
            "options": [
              "This is the laptop which I bought it last week.",
              "This is the laptop where I bought last week.",
              "This is the laptop which I bought last week.",
              "This is the laptop whose I bought last week.",
              "This is the laptop whom I bought last week."
            ],
            "ans": 2,
            "exp": "사물 선행사이므로 which를 쓰며, 목적어 it은 관계대명사로 전환되었으므로 삭제해야 합니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "This is the way he solved the problem.",
              "This is how he solved the problem.",
              "This is the way how he solved the problem.",
              "This is the way in which he solved the problem.",
              "This is the reason why she left."
            ],
            "ans": 2,
            "exp": "the way와 how는 절대로 나란히 함께 쓸 수 없습니다."
          },
          {
            "q": "다음 빈칸에 들어갈 가장 적절한 관계부사는?\n'Friday is the day ________ I feel most relaxed.'",
            "options": [
              "where",
              "when",
              "why",
              "how",
              "which"
            ],
            "ans": 1,
            "exp": "시간 선행사 the day를 받고 뒤 문장이 완전하므로 when이 알맞습니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 어색한 것은?",
            "options": [
              "The hotel at which we stayed was cozy.",
              "The hotel where we stayed was cozy.",
              "The hotel which we stayed was cozy.",
              "The hotel which we stayed at was cozy.",
              "The hotel that we stayed at was cozy."
            ],
            "ans": 2,
            "exp": "stay는 자동사이므로 hotel을 받으려면 전치사 at이 필요합니다. which we stayed는 불완전합니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 말로 알맞은 것은?\n'I know the reason ________ he didn't attend the meeting.'",
            "options": [
              "which",
              "why",
              "where",
              "how",
              "what"
            ],
            "ans": 1,
            "exp": "이유 선행사 the reason 뒤에 완전한 절이 이어지므로 관계부사 why가 정답입니다."
          }
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
            "underlined": [
              "sat on the sofa",
              "listening to",
              "with his legs",
              "crossing comfortably"
            ],
            "wrongIndex": 3,
            "correction": "crossed comfortably",
            "explanation": "다리(legs)는 꼬아지는 수동의 대상이므로 crossing이 아닌 과거분사 crossed를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장을 분사구문으로 바르게 고친 것은?\n'Because I didn't have enough money, I couldn't buy the shoes.'",
            "options": [
              "Having not enough money, I couldn't buy the shoes.",
              "Not having enough money, I couldn't buy the shoes.",
              "Didn't have enough money, I couldn't buy the shoes.",
              "Not have enough money, I couldn't buy the shoes.",
              "Having enough money, I couldn't buy the shoes."
            ],
            "ans": 1,
            "exp": "분사구문의 부정은 Not을 분사 맨 앞에 붙이므로 Not having enough money가 맞습니다."
          },
          {
            "q": "빈칸에 들어갈 말로 가장 적절한 것은?\n'She fell asleep with the lights ________.'",
            "options": [
              "turn on",
              "turning on",
              "turned on",
              "turns on",
              "to turn on"
            ],
            "ans": 2,
            "exp": "전등(the lights)은 켜지는 수동의 관계이므로 과거분사 turned on이 적절합니다."
          },
          {
            "q": "다음 중 분사구문의 주어와 주절의 주어가 일치하지 않아 어법상 어색한 것은? (현수분사)",
            "options": [
              "Walking along the street, I met an old friend.",
              "Arriving at the station, the train had already left.",
              "Feeling hungry, he ate three sandwiches.",
              "Turning left at the corner, you will see the bank.",
              "Not knowing the answer, she remained silent."
            ],
            "ans": 1,
            "exp": "2번에서 기차역에 도착한 것은 the train이 아니라 사람이므로 주어 불일치 오류(현수분사)입니다."
          },
          {
            "q": "다음 문장의 밑줄 친 부분을 접속사가 있는 부사절로 바르게 고친 것은?\n'Weather permitting, we will go on a picnic.'",
            "options": [
              "If weather permits",
              "Because weather permits",
              "Although weather permitted",
              "When weather permitted",
              "Unless weather permits"
            ],
            "ans": 0,
            "exp": "'날씨가 허락한다면'의 조건 부사절 If weather permits의 독립분사구문 관용 표현입니다."
          },
          {
            "q": "빈칸에 들어갈 분사의 형태가 알맞은 것은?\n'He listened to the lecture with his eyes ________.'",
            "options": [
              "close",
              "closed",
              "closing",
              "to close",
              "closes"
            ],
            "ans": 1,
            "exp": "눈(eyes)은 감겨지는 수동 관계이므로 과거분사 closed가 맞습니다."
          }
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
            "sentence": "Had he listen to my advice, he would not have failed the driving test.",
            "underlined": [
              "Had he listen",
              "to my advice",
              "would not have",
              "failed"
            ],
            "wrongIndex": 0,
            "correction": "Had he listened",
            "explanation": "가정법 과거완료 If he had listened에서 If가 생략된 도치 구문이므로 had 뒤에 과거분사 listened가 와야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 밑줄 친 부분과 바꿔 쓸 수 없는 것은?\n'[Without] your support, I could not have completed the project.'",
            "options": [
              "But for",
              "If it had not been for",
              "Had it not been for",
              "If it were not for",
              "Were it not for"
            ],
            "ans": 3,
            "exp": "주절이 could not have completed(과거완료)이므로 과거 사실을 반대하는 If it had not been for / Had it not been for / Without / But for가 와야 하며, 현재 사실을 반대하는 If it were not for는 시제가 맞지 않습니다."
          },
          {
            "q": "다음 문장에서 if를 생략하고 바르게 도치한 것은?\n'If you should have any questions, please contact us.'",
            "options": [
              "Should you have any questions",
              "You should have any questions",
              "Did you have any questions",
              "Have you any questions",
              "Had you have any questions"
            ],
            "ans": 0,
            "exp": "조동사 should가 주어 앞으로 나가 Should you have any questions가 됩니다."
          },
          {
            "q": "다음 빈칸에 공통으로 들어갈 말은?\n'________ it not for your help, I would fail.'\n'________ he known the answer, he would have answered.'",
            "options": [
              "Was - Had",
              "Were - Had",
              "Were - Has",
              "Had - Were",
              "If - If"
            ],
            "ans": 1,
            "exp": "첫 번째는 Were it not for, 두 번째는 Had he known입니다."
          },
          {
            "q": "다음 우리말을 조건 영작할 때 알맞은 것은?\n'그녀의 조언이 없다면, 우리는 길을 잃을 것이다.'",
            "options": [
              "Were it not for her advice, we would get lost.",
              "Was it not for her advice, we would get lost.",
              "Had it not been for her advice, we will get lost.",
              "If it is not for her advice, we get lost.",
              "Without her advice, we got lost."
            ],
            "ans": 0,
            "exp": "현재 사실 반대이므로 Were it not for ~, we would get lost가 완벽합니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "Were I rich, I would travel around the world.",
              "Had we started earlier, we wouldn't have missed the flight.",
              "Should it rain tomorrow, the match will be cancelled.",
              "Did he know the secret, he would be shocked.",
              "Without air, no living thing could exist."
            ],
            "ans": 3,
            "exp": "일반동사 과거형의 if 생략 도치는 Did he know로 하지 않고, If he knew를 유지하거나 Were he to know 형태로 씁니다."
          }
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
            "underlined": [
              "The movie",
              "was such boring",
              "that half",
              "left before the end"
            ],
            "wrongIndex": 1,
            "correction": "was so boring",
            "explanation": "뒤에 단독 형용사 boring만 있으므로 such가 아닌 so를 써야 합니다. (such는 뒤에 명사가 필요)"
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'It was ________ cold that the lake froze.'\n'She is ________ a kind girl that everyone loves her.'",
            "options": [
              "so - such",
              "such - so",
              "so - so",
              "such - such",
              "too - so"
            ],
            "ans": 0,
            "exp": "첫 번째는 형용사 cold 앞이므로 so, 두 번째는 a kind girl 앞이므로 such입니다."
          },
          {
            "q": "다음 문장과 의미가 같은 것은?\n'He is too young to drive a car.'",
            "options": [
              "He is so young that he can drive a car.",
              "He is so young that he cannot drive a car.",
              "He is such young that he cannot drive a car.",
              "He is young enough to drive a car.",
              "He is so young to drive a car."
            ],
            "ans": 1,
            "exp": "too ~ to 구문은 so ~ that S cannot 구문과 같습니다."
          },
          {
            "q": "어순이 올바른 문장은?",
            "options": [
              "It was such nice a day that we went out.",
              "It was so a nice day that we went out.",
              "It was such a nice day that we went out.",
              "It was so nice day that we went out.",
              "It was too nice a day that we went out."
            ],
            "ans": 2,
            "exp": "such + a/an + 형용사 + 명사 어순인 such a nice day가 올바릅니다."
          },
          {
            "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'She turned on the subtitles ________ she could understand the French movie.'",
            "options": [
              "so that",
              "such that",
              "too that",
              "as that",
              "in that"
            ],
            "ans": 0,
            "exp": "~하기 위해서라는 목적을 나타내는 'so that + 주어 + 조동사'가 맞습니다."
          },
          {
            "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 것은?",
            "options": [
              "The problem was so difficult that I gave up.",
              "She spoke so fast that I couldn't understand.",
              "He made such a big mistake that he was fired.",
              "It was so delicious food that we ate it all.",
              "They walked so quietly that no one noticed."
            ],
            "ans": 3,
            "exp": "food는 셀 수 없는 명사이므로 such delicious food로 써야 합니다."
          }
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
            "underlined": [
              "The teacher",
              "made the students",
              "to write",
              "about environmental"
            ],
            "wrongIndex": 2,
            "correction": "write",
            "explanation": "사역동사 make의 목적격 보어로 능동 관계일 때는 to부정사가 아니라 동사원형 write를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 형태로 가장 알맞은 것은?\n'I had my smartphone ________ at the service center yesterday.'",
            "options": [
              "repair",
              "repairs",
              "repaired",
              "repairing",
              "to repair"
            ],
            "ans": 2,
            "exp": "스마트폰(목적어)은 수리되는 수동의 대상이므로 과거분사 repaired가 정답입니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "She let him drive her new car.",
              "I saw the boy steal the apple.",
              "My father helped me to wash the car.",
              "The police made the driver to stop.",
              "We felt the ground shake."
            ],
            "ans": 3,
            "exp": "사역동사 make 뒤의 목적격 보어는 to stop이 아닌 동사원형 stop이어야 합니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I heard someone ________ on the door.' / 'He watched the sun ________.'",
            "options": [
              "knock - rise",
              "to knock - to rise",
              "knocked - risen",
              "knocks - rises",
              "to knock - rising"
            ],
            "ans": 0,
            "exp": "지각동사 heard와 watched 뒤 능동 목적격 보어로 동사원형 knock과 rise가 적절합니다."
          },
          {
            "q": "준사역동사 help의 목적격 보어로 올 수 있는 형태 2가지는?",
            "options": [
              "동사원형, to부정사",
              "동사원형, 현재분사",
              "to부정사, 과거분사",
              "현재분사, 과거분사",
              "동사원형, 동명사"
            ],
            "ans": 0,
            "exp": "help는 목적격 보어로 동사원형과 to부정사를 모두 취할 수 있습니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'She heard her own name ________ on the radio.'",
            "options": [
              "mention",
              "mentioning",
              "mentioned",
              "to mention",
              "mentions"
            ],
            "ans": 2,
            "exp": "그녀의 이름이 라디오에서 언급되는 수동의 관계이므로 과거분사 mentioned가 맞습니다."
          }
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
            "underlined": [
              "Rarely",
              "she eats",
              "fast food",
              "cares about"
            ],
            "wrongIndex": 1,
            "correction": "does she eat",
            "explanation": "부정어 Rarely가 문두로 나갔으므로 의문문 어순으로 도치되어 does she eat으로 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장을 부정어 Never를 문두로 빼서 바르게 도치한 것은?\n'I have never heard such a beautiful melody.'",
            "options": [
              "Never I have heard such a beautiful melody.",
              "Never have I heard such a beautiful melody.",
              "Never heard I such a beautiful melody.",
              "Never did I have heard such a beautiful melody.",
              "Never I heard such a beautiful melody."
            ],
            "ans": 1,
            "exp": "부정어 + have(조동사) + I(주어) + heard 어순이 올바릅니다."
          },
          {
            "q": "다음 빈칸에 들어갈 어순으로 알맞은 것은?\n'Little ________ that his speech would inspire millions of people.'",
            "options": [
              "he knew",
              "did he know",
              "knew he",
              "he did know",
              "was he known"
            ],
            "ans": 1,
            "exp": "부정어 Little 뒤 일반동사 과거형이므로 did he know가 맞습니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "Under the tree sat an old gentleman.",
              "In the center of the town stands a monument.",
              "Here comes the bus.",
              "Here comes he.",
              "Down came the rain."
            ],
            "ans": 3,
            "exp": "주어가 대명사(he)일 때는 부사구 도치가 일어나지 않으므로 Here he comes가 맞습니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'Not only ________ fluent in English, but she also speaks German.'",
            "options": [
              "she is",
              "is she",
              "does she",
              "she does",
              "she has"
            ],
            "ans": 1,
            "exp": "Not only 부정어구 도치이므로 be동사가 주어 앞으로 나와 is she가 됩니다."
          },
          {
            "q": "다음 문장을 도치 구문으로 바르게 전환한 것은?\n'A huge oak tree stood in front of the house.'",
            "options": [
              "In front of the house a huge oak tree stood.",
              "In front of the house stood a huge oak tree.",
              "In front of the house did stand a huge oak tree.",
              "Stood a huge oak tree in front of the house.",
              "A huge oak tree in front of the house stood."
            ],
            "ans": 1,
            "exp": "장소 부사구(In front of the house) + 동사(stood) + 주어(a huge oak tree) 도치가 올바릅니다."
          }
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
            "underlined": [
              "Each of",
              "participants",
              "were asked",
              "to submit"
            ],
            "wrongIndex": 2,
            "correction": "was asked",
            "explanation": "문장의 주어는 Each(단수 취급)이므로 복수 동사 were가 아니라 단수 동사 was를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 서술형 답안에서 감점 처리를 당하지 않는 완벽한 문장은?",
            "options": [
              "She don't understand the reason.",
              "One of my best friends live in Paris.",
              "He bought an umbrella because it was raining.",
              "I have three brother and two sisters.",
              "She cutted the paper into small pieces."
            ],
            "ans": 2,
            "exp": "3번은 시제, 관사, 수일치 모두 완벽합니다. (1: doesn't, 2: lives, 4: brothers, 5: cut)"
          },
          {
            "q": "빈칸에 들어갈 말로 알맞은 것은?\n'Harvard University was ________ in 1636.'",
            "options": [
              "find",
              "found",
              "founded",
              "finding",
              "founding"
            ],
            "ans": 2,
            "exp": "'설립되다'는 뜻이므로 found(설립하다)의 과거분사 founded가 정답입니다."
          },
          {
            "q": "다음 중 주어와 동사의 수일치가 올바른 것은?",
            "options": [
              "Every student have a locker.",
              "The news are very shocking.",
              "Neither Tom nor his friends were present.",
              "Ten miles are a long distance to walk.",
              "Mathematics are my favorite subject."
            ],
            "ans": 2,
            "exp": "Neither A nor B는 B(his friends)에 수일치하므로 were가 올바릅니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 과거형 스펠링이 바른 것은?\n'She ________ a beautiful necklace for her mother yesterday.'",
            "options": [
              "chosed",
              "chose",
              "chosen",
              "choosed",
              "choose"
            ],
            "ans": 1,
            "exp": "choose의 과거형은 불규칙 변화 chose입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?",
            "options": [
              "A number of students are waiting outside.",
              "The number of cars is increasing.",
              "Physics is an interesting subject.",
              "Fifty dollars are too much for this shirt.",
              "Bread and butter is his favorite breakfast."
            ],
            "ans": 3,
            "exp": "Fifty dollars는 금액 전체를 하나의 단위로 보아 단수 동사 is로 받아야 합니다."
          }
        ]
      }
    ]
  },
  {
    "level": 103,
    "levelCode": "sp_csat",
    "levelName": "수능 29번 킬러 특강",
    "targetGrade": "수능 1등급 3초 컷",
    "badge": "수능 킬러",
    "color": "indigo",
    "themeColor": "#4f46e5",
    "isSpecial": true,
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
            "sentence": "The ability of humans to communicate complex abstract ideas through language distinguishing them from all other species.",
            "underlined": [
              "ability of humans",
              "to communicate",
              "distinguishing",
              "from all other"
            ],
            "wrongIndex": 2,
            "correction": "distinguishes",
            "explanation": "문장의 본동사 자리입니다. 주어 The ability에 호응하는 단수 본동사 distinguishes가 와야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'The ancient manuscripts, preserved in the monastery for centuries, ①[providing] valuable insights into medieval European history, ②[which] historians ③[continue] to study today.'",
            "options": [
              "① providing",
              "② which",
              "③ continue",
              "for centuries",
              "today"
            ],
            "ans": 0,
            "exp": "The ancient manuscripts가 주어이고, preserved~centuries는 분사구입니다. 주절의 본동사가 없으므로 providing을 본동사 provide로 고쳐야 합니다."
          },
          {
            "q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'Anyone ________ to apply for the international scholarship must submit two recommendation letters.'",
            "options": [
              "wishes",
              "wishing",
              "wished",
              "is wishing",
              "will wish"
            ],
            "ans": 1,
            "exp": "문장의 본동사 must submit이 이미 있으므로 빈칸은 Anyone을 수식하는 준동사(wishing) 자리입니다."
          },
          {
            "q": "다음 중 밑줄 친 부분이 어법상 올바른 것은?",
            "options": [
              "The man standing near the door [to be] my uncle.",
              "The proposal suggested by the committee [approved] yesterday.",
              "All students desiring to participate [must register] by Friday.",
              "The books ordered online last week [arriving] this morning.",
              "The sound of church bells [echoed] through the silent valley."
            ],
            "ans": 2,
            "exp": "All students(주어) + desiring to participate(수식어) + must register(본동사) 구조가 완벽합니다."
          },
          {
            "q": "다음 문장의 밑줄 친 부분 중 어법상 어색한 것은?\n'The government, after months of debate, ①[decided] to implement the new policy, ②[aiming] to reduce traffic congestion, ③[created] a major controversy among citizens.'",
            "options": [
              "① decided",
              "② aiming",
              "③ created",
              "after months of",
              "among citizens"
            ],
            "ans": 2,
            "exp": "③번 자리에 접속사 없이 과거동사 created가 올 수 없으므로, 분사구문 creating 또는 and created로 고쳐야 합니다."
          },
          {
            "q": "수능 어법에서 '본동사 자리'를 찾기 위한 황금 공식은?",
            "options": [
              "본동사 개수 = 접속사 개수 - 1",
              "본동사 개수 = 접속사 개수 + 1",
              "본동사는 항상 문장의 3번째 단어에 온다",
              "본동사는 수동태가 될 수 없다",
              "본동사 뒤에는 반드시 목적어가 온다"
            ],
            "ans": 1,
            "exp": "문장 내 본동사의 개수는 접속사/관계사 개수에 1을 더한 것과 일치합니다."
          }
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
            "underlined": [
              "have discovered",
              "what people",
              "who exercise",
              "less anxiety"
            ],
            "wrongIndex": 1,
            "correction": "that people",
            "explanation": "discovered 뒤에 이어지는 절(people who exercise regularly experience less anxiety...)이 완전한 문장이므로 what이 아닌 접속사 that을 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'This is ________ I have been looking for.'\n'I believe ________ everything happens for a reason.'",
            "options": [
              "what - that",
              "that - what",
              "which - what",
              "that - which",
              "what - which"
            ],
            "ans": 0,
            "exp": "첫 번째는 선행사 없고 looking for의 목적어가 빠졌으므로 what, 두 번째는 선행사 없고 뒤 문장이 완전하므로 접속사 that입니다."
          },
          {
            "q": "다음 중 밑줄 친 'that'의 성격이 '동격의 접속사'인 것은?",
            "options": [
              "The rumor [that] spread quickly was false.",
              "The fact [that] the earth is round is known to all.",
              "This is the phone [that] I wanted to buy.",
              "I know the girl [that] won first prize.",
              "The car [that] he drives is very old."
            ],
            "ans": 1,
            "exp": "the fact 뒤에 'the earth is round'라는 완전한 절이 이어지므로 동격의 that입니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 가장 적절한 것은?\n'Scientists are trying to understand ________ causes volcanic eruptions.'",
            "options": [
              "that",
              "what",
              "which",
              "whose",
              "where"
            ],
            "ans": 1,
            "exp": "선행사가 없고 causes의 주어가 빠진 불완전한 절을 이끌어 understand의 목적어가 되어야 하므로 what이 정답입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?",
            "options": [
              "He didn't remember what he had promised.",
              "She told me that she was leaving.",
              "The reason what he failed was laziness.",
              "The gift that she gave me was special.",
              "What surprised us was his sudden decision."
            ],
            "ans": 2,
            "exp": "선행사 The reason이 있으므로 what을 쓸 수 없으며, why 또는 that이어야 합니다."
          },
          {
            "q": "관계대명사 'what'에 대한 설명으로 옳지 않은 것은?",
            "options": [
              "the thing(s) which로 풀어서 쓸 수 있다.",
              "앞에 반드시 수식하는 선행사 명사가 있어야 한다.",
              "뒤에는 주어나 목적어가 빠진 불완전한 문장이 온다.",
              "what이 이끄는 절은 문장에서 주어, 목적어, 보어 역할을 한다.",
              "'~하는 것'으로 해석된다."
            ],
            "ans": 1,
            "exp": "what은 선행사를 자체에 포함하고 있으므로 앞에 선행사가 올 수 없습니다."
          }
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
            "underlined": [
              "The audience",
              "completely captivating",
              "throughout",
              "magic performance"
            ],
            "wrongIndex": 1,
            "correction": "captivated",
            "explanation": "관객(The audience)은 마술 공연에 의해 매료된 감정을 느끼는 주체이므로 현재분사 captivating이 아니라 과거분사 captivated를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'The news was so ________ that everyone was ________.'",
            "options": [
              "shocked - shocking",
              "shocking - shocked",
              "shocking - shocking",
              "shocked - shocked",
              "shock - shocking"
            ],
            "ans": 1,
            "exp": "뉴스(The news)는 충격을 유발하므로 shocking, 사람(everyone)은 충격을 받으므로 shocked입니다."
          },
          {
            "q": "다음 괄호 안에서 어법상 알맞은 것은?\n'We received an email [confirming / confirmed] our flight reservation.'",
            "options": [
              "confirming",
              "confirmed",
              "confirm",
              "confirms",
              "to be confirmed"
            ],
            "ans": 0,
            "exp": "이메일이 뒤의 목적어(our flight reservation)를 확인해 주는 능동 관계이므로 confirming이 정답입니다."
          },
          {
            "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 것은?",
            "options": [
              "an exciting soccer match",
              "a bored lecture",
              "a satisfying meal",
              "a confusing explanation",
              "a frightened child"
            ],
            "ans": 1,
            "exp": "강의(lecture)는 지루함을 유발하는 사물이므로 boring lecture여야 합니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'Many artifacts ①[discovered] in Egypt, ②[dating] back to 3000 BC, are ③[displaying] in the national museum today.'",
            "options": [
              "① discovered",
              "② dating",
              "③ displaying",
              "artifacts",
              "museum"
            ],
            "ans": 2,
            "exp": "유물(artifacts)은 박물관에 전시되는 수동의 대상이므로 displaying이 아닌 displayed가 되어야 합니다."
          },
          {
            "q": "타동사의 분사 뒤에 목적어가 존재할 때의 일반적인 규칙은?",
            "options": [
              "반드시 과거분사(p.p.)를 쓴다",
              "반드시 능동의 현재분사(V-ing)를 쓴다",
              "동사원형을 쓴다",
              "to부정사로 바꾼다",
              "전치사를 생략한다"
            ],
            "ans": 1,
            "exp": "타동사가 목적어를 거느리고 있을 때는 능동의 현재분사(V-ing) 형태가 옵니다."
          }
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
            "underlined": [
              "nocturnal animals",
              "significantly larger",
              "than that of",
              "diurnal animals"
            ],
            "wrongIndex": 2,
            "correction": "than those of",
            "explanation": "비교 대상이 복수 명사인 The eyes이므로 단수 대명사 that이 아니라 복수 대명사 those를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'The energy consumption of electric cars is lower than ________ of gasoline cars.'",
            "options": [
              "it",
              "that",
              "this",
              "those",
              "these"
            ],
            "ans": 1,
            "exp": "비교되는 대상이 단수 명사 The energy consumption이므로 that이 정답입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 가리키는 대상과의 수일치가 잘못된 것은?",
            "options": [
              "Each student brought their own laptop.",
              "The team celebrated its victory.",
              "Trees absorb carbon dioxide and release [it] as oxygen.",
              "The books were heavy, so I carried [them] in a backpack.",
              "A smartphone is useful, but [it] can be addictive."
            ],
            "ans": 2,
            "exp": "carbon dioxide는 기체(단수)이므로 it으로 받는 것이 맞지만, 문맥상 oxygen으로 방출되는 것이 아닌 산소를 방출하는 것이며, 만약 복수 명사를 대신할 땐 them이어야 합니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'The customs of ancient Greece were quite different from ________ of modern society.'",
            "options": [
              "that",
              "those",
              "it",
              "this",
              "them"
            ],
            "ans": 1,
            "exp": "복수 명사인 The customs를 대신하므로 those가 정답입니다."
          },
          {
            "q": "대명사 밑줄 어법 문제 풀이 시 가장 먼저 해야 할 행동은?",
            "options": [
              "단어의 철자 세기",
              "대명사가 대신 가리키는 앞선 명사를 찾아 단수/복수 확인",
              "문장을 수동태로 바꾸기",
              "대명사를 부사로 바꾸기",
              "마침표 위치 확인"
            ],
            "ans": 1,
            "exp": "대명사는 지칭 대상의 단수/복수 여부를 일치시키는 것이 핵심입니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The population of Seoul is larger than Tokyo.",
              "The population of Seoul is larger than that of Tokyo.",
              "The population of Seoul is larger than those of Tokyo.",
              "The population of Seoul is larger than this of Tokyo.",
              "The population of Seoul is larger than them of Tokyo."
            ],
            "ans": 1,
            "exp": "서울의 인구와 도쿄의 인구를 비교해야 하므로 단수 대명사 that of Tokyo가 정확합니다."
          }
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
            "underlined": [
              "Regular meditation",
              "keep their minds",
              "calmly",
              "during severe crises"
            ],
            "wrongIndex": 2,
            "correction": "calm",
            "explanation": "keep + 목적어(their minds) + 목적격 보어 자리이므로 부사 calmly가 아닌 형용사 calm이 와야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'I have been so busy ________ that I haven't had time to call you.'",
            "options": [
              "late",
              "lately",
              "latest",
              "later",
              "lateness"
            ],
            "ans": 1,
            "exp": "'최근에'라는 뜻의 부사는 lately입니다."
          },
          {
            "q": "다음 중 밑줄 친 부분의 쓰임이 어법상 올바른 것은?",
            "options": [
              "He tried hardly to pass the exam.",
              "The eagle flew highly in the sky.",
              "She arrived lately for the interview.",
              "I nearly missed the bus this morning.",
              "The movie was real interesting."
            ],
            "ans": 3,
            "exp": "nearly는 '거의'라는 뜻의 부사로 '거의 버스를 놓칠 뻔했다'는 문맥에 올바르게 쓰였습니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 형태로 적절한 것은?\n'Please keep the door ________.'",
            "options": [
              "lock",
              "locked",
              "locking",
              "to lock",
              "lockedly"
            ],
            "ans": 1,
            "exp": "문(door)이 잠겨진 상태로 유지되는 것이므로 과거분사 형용사 locked가 알맞습니다."
          },
          {
            "q": "다음 중 부사(-ly)가 들어갈 수 없는 자리는?",
            "options": [
              "일반동사를 수식하는 자리",
              "문장 전체를 수식하는 문두 자리",
              "다른 형용사나 부사를 수식하는 자리",
              "5형식 동사 make의 목적격 보어 자리",
              "분사를 수식하는 자리"
            ],
            "ans": 3,
            "exp": "목적격 보어 자리에는 명사나 형용사만 올 수 있으며 부사는 절대 불가합니다."
          },
          {
            "q": "다음 문장의 밑줄 친 부분 중 어색한 것은?\n'The food in this restaurant tastes ①[delicious] and looks ②[wonderfully], but the service is ③[terrible].'",
            "options": [
              "① delicious",
              "② wonderfully",
              "③ terrible",
              "restaurant",
              "service"
            ],
            "ans": 1,
            "exp": "감각동사 looks 뒤 주격 보어 자리이므로 부사 wonderfully가 아니라 형용사 wonderful이어야 합니다."
          }
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
            "underlined": [
              "The research",
              "collecting data",
              "analyzing trends",
              "to publish"
            ],
            "wrongIndex": 3,
            "correction": "publishing",
            "explanation": "동명사 목적어 collecting, analyzing과 병렬 구조를 이루어야 하므로 to publish를 publishing으로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 병렬 구조가 올바르게 이루어진 문장은?",
            "options": [
              "She likes swimming, dancing, and to sing.",
              "He was smart, handsome, and kindness.",
              "To know is one thing, and practicing is another.",
              "The manager asked us to finish the report and send it by noon.",
              "I enjoy reading books and watch movies."
            ],
            "ans": 3,
            "exp": "to finish와 (to) send가 to부정사 병렬 구조를 올바르게 이루고 있습니다."
          },
          {
            "q": "다음 빈칸에 들어갈 알맞은 형태는?\n'You can improve your English by reading newspapers, listening to podcasts, and ________ with native speakers.'",
            "options": [
              "talk",
              "talking",
              "talked",
              "to talk",
              "talks"
            ],
            "ans": 1,
            "exp": "전치사 by 뒤에 reading, listening과 병렬을 이루는 동명사 talking이 와야 합니다."
          },
          {
            "q": "다음 문장의 밑줄 친 부분 중 어법상 어색한 것은?\n'The athlete not only broke the world record ①[but] also ②[inspiring] millions of young sports fans ③[across] the globe.'",
            "options": [
              "① but",
              "② inspiring",
              "③ across",
              "broke",
              "millions of"
            ],
            "ans": 1,
            "exp": "과거동사 broke와 병렬 구조를 이루어야 하므로 inspiring이 아니라 과거동사 inspired여야 합니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "Either you or he is responsible for the mistake.",
              "Both my brother and my sister are doctors.",
              "She prefers walking to drive.",
              "Not only the students but also the teacher was excited.",
              "He taught us to think critically and to express ourselves clearly."
            ],
            "ans": 2,
            "exp": "prefer A to B에서 to는 전치사이므로 walking과 대등하게 driving이 와야 합니다."
          },
          {
            "q": "수능 어법에서 and/or/but 뒤에 밑줄이 있을 때 가장 먼저 취해야 할 문제 풀이 전략은?",
            "options": [
              "해석을 통해 밑줄 친 단어가 문장 내 어떤 어구와 짝을 이루는지 확인",
              "무조건 동명사(-ing)로 고치기",
              "문장의 주어를 찾아서 생략하기",
              "앞 단어의 품사만 기계적으로 복사하기",
              "접속사를 지우기"
            ],
            "ans": 0,
            "exp": "병렬 구조 문제는 기계적인 형태 복사가 아니라, 문맥상 무엇과 대등하게 연결되는지 짝꿍(A)을 찾는 것이 핵심입니다."
          }
        ]
      }
    ]
  },
  {
    "level": 104,
    "levelCode": "sp_vs",
    "levelName": "혼동 문법 VS 특강",
    "targetGrade": "오답률 70% 집중 클리닉",
    "badge": "VS 특강",
    "color": "teal",
    "themeColor": "#0d9488",
    "isSpecial": true,
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
            "underlined": [
              "Don't forget",
              "bringing",
              "your passport",
              "travel abroad"
            ],
            "wrongIndex": 1,
            "correction": "to bring",
            "explanation": "다음 주에 '앞으로 챙겨야 할 일'을 의미하므로 과거를 뜻하는 bringing이 아닌 미래의 to bring을 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 동명사(-ing)만을 목적어로 취하는 동사는?",
            "options": [
              "decide",
              "promise",
              "avoid",
              "hope",
              "agree"
            ],
            "ans": 2,
            "exp": "avoid(피하다)는 동명사만을 목적어로 취하는 동사입니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I stopped ________ lunch because I was hungry.'\n'He stopped ________ because it was harmful to his health.'",
            "options": [
              "to eat - smoking",
              "eating - to smoke",
              "to eat - to smoke",
              "eating - smoking",
              "to eat - smoke"
            ],
            "ans": 0,
            "exp": "점심을 먹기 위해 멈춘 것은 to eat, 담배 피우던 것을 중단한 것은 smoking입니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'I clearly remember ________ the keys on the kitchen table this morning.'",
            "options": [
              "to leave",
              "leaving",
              "left",
              "leave",
              "leaves"
            ],
            "ans": 1,
            "exp": "오늘 아침에 열쇠를 '놓아두었던 과거의 일'을 기억하는 것이므로 leaving이 맞습니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "She enjoys reading mystery novels.",
              "My father decided to buy an electric car.",
              "He gave up to learn the violin.",
              "Would you mind opening the window?",
              "They promised to arrive on time."
            ],
            "ans": 2,
            "exp": "give up은 동명사를 목적어로 취하므로 gave up learning이어야 합니다."
          },
          {
            "q": "다음 두 문장의 의미 차이로 올바른 것은?\n(A) I tried to move the heavy stone.\n(B) I tried moving the heavy stone.",
            "options": [
              "(A)와 (B)는 동일하다.",
              "(A)는 무거운 돌을 옮기려고 필사적으로 노력한 것이고, (B)는 시험 삼아 한번 옮겨본 것이다.",
              "(A)는 돌을 옮겼고 (B)는 못 옮겼다.",
              "(A)는 돌이 가볍고 (B)는 무겁다.",
              "(B)는 문법 오류다."
            ],
            "ans": 1,
            "exp": "try to V는 노력·애씀, try V-ing는 시험 삼아 시도해 봄을 뜻합니다."
          }
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
            "underlined": [
              "has bought",
              "sports car",
              "three years ago",
              "still drives"
            ],
            "wrongIndex": 0,
            "correction": "bought",
            "explanation": "three years ago라는 명백한 과거 시점 부사구가 있으므로 현재완료 has bought를 쓸 수 없으며 단순과거 bought로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 현재완료(have p.p.) 시제와 함께 쓸 수 없는 부사는?",
            "options": [
              "since last month",
              "for ten years",
              "already",
              "two days ago",
              "ever"
            ],
            "ans": 3,
            "exp": "two days ago처럼 ago가 붙은 표현은 명백한 과거 시점이므로 단순과거 시제와만 쓰입니다."
          },
          {
            "q": "빈칸에 들어갈 말로 가장 적절한 것은?\n'Where is Tom?' / 'He ________ to the supermarket to buy some milk.'",
            "options": [
              "has gone",
              "has been",
              "went ago",
              "goes",
              "have gone"
            ],
            "ans": 0,
            "exp": "지금 여기에 없고 가버렸다는 결과를 나타내므로 has gone이 맞습니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "When have you bought that computer?",
              "I have finished my homework ten minutes ago.",
              "She has lived in Seoul since she was a child.",
              "He has lost his phone yesterday.",
              "They have arrived in London last night."
            ],
            "ans": 2,
            "exp": "since + 과거 시점은 현재완료와 올바르게 결합합니다. (나머지는 when, ago, yesterday, last night으로 과거시제 오류)"
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 적절한 시제는?\n'World War II ________ in 1945.'",
            "options": [
              "has ended",
              "ended",
              "had ended",
              "ends",
              "was ended"
            ],
            "ans": 1,
            "exp": "in 1945는 명백한 역사적 과거 시점이므로 단순과거 ended가 정답입니다."
          },
          {
            "q": "'I have gone to London.' 문장이 어법상 어색한 이유는?",
            "options": [
              "London은 고유명사이기 때문",
              "have gone to는 1인칭 주어(I, We)와 결합할 수 없기 때문",
              "과거분사 형태가 틀렸기 때문",
              "to 대신에 at을 써야 하기 때문",
              "시제가 미래이기 때문"
            ],
            "ans": 1,
            "exp": "have gone to는 '가버려서 지금 여기에 없다'는 뜻이므로 화자 본인(I)을 주어로 쓸 수 없습니다."
          }
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
            "underlined": [
              "found",
              "conclusive evidence",
              "which the suspect",
              "had entered"
            ],
            "wrongIndex": 2,
            "correction": "that the suspect",
            "explanation": "evidence 뒤의 절이 완전한 문장(the suspect had entered the building)이므로 동격의 접속사 that을 써야 하며, which로 대체할 수 없습니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 밑줄 친 'that'의 용법이 나머지 넷과 다른 것은?",
            "options": [
              "I know [that] honesty is the best policy.",
              "She said [that] she was tired.",
              "The man [that] I saw yesterday was tall.",
              "We believe [that] peace is possible.",
              "He promised [that] he would come."
            ],
            "ans": 2,
            "exp": "3번은 목적격 관계대명사이고, 나머지는 모두 동사 뒤에 쓰인 명사절 접속사 that입니다."
          },
          {
            "q": "다음 문장의 밑줄 친 that의 정체는?\n'The news [that] the war had ended brought joy to everyone.'",
            "options": [
              "주격 관계대명사",
              "목적격 관계대명사",
              "동격의 접속사",
              "지시대명사",
              "관계부사 대용"
            ],
            "ans": 2,
            "exp": "The news라는 추상명사 뒤에 완전한 문장이 이어지므로 동격의 접속사입니다."
          },
          {
            "q": "다음 중 관계대명사 which로 바꿔 쓸 수 있는 that은?",
            "options": [
              "I heard the rumor that he got married.",
              "The fact that she failed surprised us.",
              "This is the camera that my uncle gave me.",
              "He told me that he was innocent.",
              "There is no proof that he was there."
            ],
            "ans": 2,
            "exp": "3번의 that은 목적격 관계대명사이므로 which로 바꿔 쓸 수 있습니다. (나머지는 동격 또는 명사절 접속사)"
          },
          {
            "q": "동격의 that 뒤에 이어지는 문장 구조의 특징은?",
            "options": [
              "주어가 없는 불완전한 문장",
              "목적어가 없는 불완전한 문장",
              "완전한 문장",
              "동사원형으로 시작하는 명령문",
              "전치사로 끝나는 문장"
            ],
            "ans": 2,
            "exp": "동격의 that은 접속사이므로 뒤에 완전한 문장이 이어집니다."
          },
          {
            "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'We must accept the truth ________ nobody is perfect.'",
            "options": [
              "which",
              "that",
              "what",
              "whom",
              "whose"
            ],
            "ans": 1,
            "exp": "the truth 뒤에 완전한 문장이 이어지므로 동격의 접속사 that이 알맞습니다."
          }
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
            "underlined": [
              "special tool",
              "is used to",
              "measuring",
              "precise depth"
            ],
            "wrongIndex": 2,
            "correction": "measure",
            "explanation": "도구(tool)가 깊이를 측정하는 데 '사용되다'라는 수동의 뜻이므로 to 뒤에 동사원형 measure를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 빈칸에 들어갈 알맞은 형태는?\n'She has lived in London for five years, so she is used to ________ on the left.'",
            "options": [
              "drive",
              "driving",
              "drove",
              "driven",
              "be drive"
            ],
            "ans": 1,
            "exp": "그녀가 운전하는 것에 '익숙하다'는 뜻이므로 be used to 뒤에 동명사 driving이 와야 합니다."
          },
          {
            "q": "다음 문장의 의미로 올바른 것은?\n'There used to be a large pond in front of my house.'",
            "options": [
              "우리 집 앞에 큰 연못이 지금도 있다.",
              "우리 집 앞에 큰 연못이 예전에는 있었으나 지금은 없다.",
              "우리 집 앞에 큰 연못을 만드는 데 사용된다.",
              "우리 집 앞에 큰 연못에 익숙하다.",
              "우리 집 앞에 큰 연못이 생길 예정이다."
            ],
            "ans": 1,
            "exp": "used to be는 '예전에는 ~가 있었다(지금은 없다)'는 과거의 상태를 나타냅니다."
          },
          {
            "q": "다음 빈칸에 공통으로 들어갈 단어는?\n'Solar energy is used to ________ electricity.'\n'I used to ________ him every Sunday.'",
            "options": [
              "generate - meet",
              "generating - meeting",
              "generated - met",
              "generate - meeting",
              "generating - meet"
            ],
            "ans": 0,
            "exp": "첫 번째는 '발전하는 데 사용되다(동사원형)', 두 번째는 '만나곤 했다(동사원형)'이므로 둘 다 동사원형입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 어색한 것은?",
            "options": [
              "He used to smoke a pack a day.",
              "Knives are used to cut meat.",
              "I am not used to speaking in public.",
              "The money was used to helping the poor.",
              "She used to be very shy as a child."
            ],
            "ans": 3,
            "exp": "돈이 가난한 사람들을 돕는 데 '사용되었다'는 뜻이므로 was used to help로 고쳐야 합니다."
          },
          {
            "q": "'be used to V-ing'와 의미가 가장 가까운 표현은?",
            "options": [
              "be afraid of",
              "be accustomed to",
              "look forward to",
              "be tired of",
              "be capable of"
            ],
            "ans": 1,
            "exp": "be used to -ing는 be accustomed to -ing(~에 익숙하다)와 동의어입니다."
          }
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
            "underlined": [
              "exhausted hiker",
              "laid down",
              "on the soft grass",
              "fell fast asleep"
            ],
            "wrongIndex": 1,
            "correction": "lay down",
            "explanation": "등산객이 스스로 누운 것이며 뒤에 목적어가 없는 자동사의 과거형이 필요하므로 laid(타동사 과거)가 아닌 lay(lie의 과거형)를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'Yesterday afternoon, I was so tired that I ________ down on the couch for an hour.'",
            "options": [
              "lay",
              "laid",
              "lied",
              "lain",
              "laying"
            ],
            "ans": 0,
            "exp": "눕다(lie)의 과거형은 lay입니다. (yesterday 과거 시점)"
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 알맞은 단어는?\n'Please ________ the books on the desk carefully.'",
            "options": [
              "lie",
              "lay",
              "laid",
              "lain",
              "lying"
            ],
            "ans": 1,
            "exp": "뒤에 목적어 the books가 있으므로 타동사 원형 lay(~을 놓다)가 정답입니다."
          },
          {
            "q": "다음 3단 변화가 잘못 짝지어진 것은?",
            "options": [
              "lie (눕다) - lay - lain",
              "lay (놓다) - laid - laid",
              "lie (거짓말하다) - lied - lied",
              "rise (오르다) - rose - risen",
              "raise (올리다) - rose - risen"
            ],
            "ans": 4,
            "exp": "raise(올리다)는 규칙 변화인 raise - raised - raised입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?",
            "options": [
              "The hen laid three eggs yesterday.",
              "He has lain in bed for three days.",
              "The dog laid on the floor all day.",
              "She laid her phone on the kitchen table.",
              "Dust lay thick on the old books."
            ],
            "ans": 2,
            "exp": "개가 바닥에 누워있었던 것이므로 자동사 과거형 lay를 써야 합니다. (laid는 타동사 과거)"
          },
          {
            "q": "자동사 lie(눕다)의 현재분사(-ing) 형태 스펠링으로 바른 것은?",
            "options": [
              "lieing",
              "lying",
              "laying",
              "laing",
              "lyeing"
            ],
            "ans": 1,
            "exp": "ie로 끝나는 동사는 ying으로 바뀌므로 lying이 맞습니다."
          }
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
            "underlined": [
              "smartphones",
              "make that possible",
              "for people",
              "to work from anywhere"
            ],
            "wrongIndex": 1,
            "correction": "make it possible",
            "explanation": "5형식 가목적어 자리에는 오직 대명사 it만 올 수 있으므로 that possible을 it possible로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 'It ~ that 강조 구문'인 문장은?",
            "options": [
              "It is clear that he is innocent.",
              "It was yesterday that I met him in the park.",
              "It is surprising that she won the race.",
              "It is important that you should be on time.",
              "It was obvious that they were lying."
            ],
            "ans": 1,
            "exp": "It was와 that을 지우면 'Yesterday I met him in the park'라는 완전한 문장이 되므로 강조 구문입니다. (나머지는 가주어/진주어)"
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 가목적어로 알맞은 것은?\n'The internet has made ________ easy to find information.'",
            "options": [
              "this",
              "that",
              "it",
              "them",
              "what"
            ],
            "ans": 2,
            "exp": "가목적어로는 오직 it만 사용 가능합니다."
          },
          {
            "q": "It ~ that 사이에 들어갈 수 없는 것은? (강조 구문 기준)",
            "options": [
              "부사구 (in the park)",
              "주어 명사 (Tom)",
              "목적어 명사 (the book)",
              "형용사 (clear, true)",
              "시간 부사 (yesterday)"
            ],
            "ans": 3,
            "exp": "형용사는 강조 구문의 강조 대상이 될 수 없으며, It is + 형용사 + that은 가주어/진주어 구문입니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "I found it hard to believe his story.",
              "She thought it strange that he was absent.",
              "He made this easy to learn English.",
              "We consider it an honor to be here.",
              "I take it for granted that you agree."
            ],
            "ans": 2,
            "exp": "가목적어 자리에는 this를 쓸 수 없으며 it을 써야 합니다 (made it easy)."
          },
          {
            "q": "It ~ that 강조 구문에서 강조 대상이 사람일 때 that 대신 쓸 수 있는 관계사는?",
            "options": [
              "who",
              "which",
              "where",
              "why",
              "what"
            ],
            "ans": 0,
            "exp": "강조하는 대상이 사람일 때는 that 대신 who를 쓸 수 있습니다."
          }
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
            "underlined": [
              "In spite of",
              "she practiced",
              "day and night",
              "win the gold medal"
            ],
            "wrongIndex": 0,
            "correction": "Although (또는 Even though)",
            "explanation": "뒤에 'she(주어) + practiced(동사)'의 절이 이어지므로 전치사 In spite of가 아니라 접속사 Although를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'We went hiking ________ the heavy rain.'\n'We went hiking ________ it rained heavily.'",
            "options": [
              "despite - although",
              "although - despite",
              "because - because of",
              "during - while",
              "despite - because of"
            ],
            "ans": 0,
            "exp": "첫 번째는 명사구(the heavy rain) 앞이므로 전치사 despite, 두 번째는 절(it rained) 앞이므로 접속사 although입니다."
          },
          {
            "q": "다음 중 전치사 'during'만 들어갈 수 있는 빈칸은?",
            "options": [
              "He stayed in Paris ________ three weeks.",
              "I met him ________ I was walking in the park.",
              "The fire broke out ________ the night.",
              "She worked ________ five years.",
              "We waited ________ thirty minutes."
            ],
            "ans": 2,
            "exp": "the night라는 특정 기간 명사 앞에는 during이 옵니다. (숫자 기간 앞에는 for, 절 앞에는 while)"
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "I couldn't sleep because of the noise.",
              "Despite of the cold weather, we went outside.",
              "Although he was poor, he was happy.",
              "While she was reading, her brother watched TV.",
              "Due to a sudden illness, he canceled the trip."
            ],
            "ans": 1,
            "exp": "despite는 of를 붙이지 않습니다. In spite of 또는 Despite로 써야 합니다."
          },
          {
            "q": "다음 빈칸에 들어갈 수 없는 것은?\n'________ the heavy traffic, we arrived late.'",
            "options": [
              "Because of",
              "Due to",
              "Owing to",
              "Because",
              "On account of"
            ],
            "ans": 3,
            "exp": "뒤에 명사구 the heavy traffic만 있으므로 접속사 Because는 올 수 없습니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'________ he is young, he is very wise.'",
            "options": [
              "Despite",
              "In spite of",
              "Although",
              "Because of",
              "During"
            ],
            "ans": 2,
            "exp": "뒤에 'he is young'이라는 절이 이어지므로 접속사 Although가 정답입니다."
          }
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
            "underlined": [
              "Neither of",
              "the two candidates",
              "were qualified",
              "executive position"
            ],
            "wrongIndex": 2,
            "correction": "was qualified",
            "explanation": "Neither of + 복수명사는 문법적으로 단수 취급하므로 복수 동사 were가 아니라 단수 동사 was를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 의미로 가장 올바른 것은?\n'Not all glittering things are gold.'",
            "options": [
              "반짝이는 것은 모두 금이다.",
              "반짝이는 것은 모두 금이 아니다.",
              "반짝이는 것이 다 금인 것은 아니다. (금인 것도 있고 아닌 것도 있다)",
              "금은 절대로 반짝이지 않는다.",
              "반짝이지 않는 것이 진짜 금이다."
            ],
            "ans": 2,
            "exp": "not all은 부분부정으로 '모두가 ~인 것은 아니다'를 의미합니다."
          },
          {
            "q": "다음 중 '완전부정(둘 다 아니다)'을 나타내는 문장은?",
            "options": [
              "I don't know both of them.",
              "Neither of them knows the answer.",
              "Not all of them agreed.",
              "He is not always kind.",
              "Rich people are not necessarily happy."
            ],
            "ans": 1,
            "exp": "Neither of them은 '둘 다 아니다'라는 완전부정입니다. (1, 3, 4, 5번은 모두 부분부정)"
          },
          {
            "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'Expensive clothes are not ________ better in quality.'",
            "options": [
              "necessarily",
              "none",
              "neither",
              "never",
              "no"
            ],
            "ans": 0,
            "exp": "not necessarily는 '반드시 ~인 것은 아니다'라는 부분부정 표현입니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 동사의 형태로 알맞은 것은?\n'Neither of my parents ________ English.'",
            "options": [
              "speak",
              "speaks",
              "are speaking",
              "were speak",
              "have spoken"
            ],
            "ans": 1,
            "exp": "Neither of + 복수명사는 단수 취급하므로 3인칭 단수 현재형 speaks가 알맞습니다."
          },
          {
            "q": "'그녀는 항상 늦는 것은 아니다 (가끔 제시간에 온다)'를 영작할 때 가장 알맞은 표현은?",
            "options": [
              "She is never late.",
              "She is always late.",
              "She is not always late.",
              "No one is late.",
              "Neither is late."
            ],
            "ans": 2,
            "exp": "not always가 '항상 ~인 것은 아니다'라는 부분부정 표현입니다."
          }
        ]
      }
    ]
  }
];
window.GRAMMAR_SPECIAL_LECTURES = [
  {
    "level": 101,
    "levelCode": "sp_terms",
    "levelName": "문법 용어 특강",
    "targetGrade": "영포자 탈출 0순위",
    "badge": "용어 특강",
    "color": "amber",
    "themeColor": "#d97706",
    "isSpecial": true,
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
            "sentence": "The chef prepared careful a delicious meal for the hungry guests.",
            "underlined": [
              "The chef",
              "prepared careful",
              "a delicious meal",
              "hungry guests"
            ],
            "wrongIndex": 1,
            "correction": "prepared carefully",
            "explanation": "동사 prepared를 수식하는 자리이므로 형용사 careful이 아니라 부사 carefully가 와야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 '단어의 품사'와 '문장 성분'이 올바르게 짝지어진 것은?",
            "options": [
              "apple : 품사는 목적어, 문장성분은 명사",
              "beautiful : 품사는 형용사, 문장성분은 보어 또는 수식어",
              "slowly : 품사는 부사, 문장성분은 주어",
              "run : 품사는 주어, 문장성분은 동사",
              "under : 품사는 접속사, 문장성분은 보어"
            ],
            "ans": 1,
            "exp": "beautiful은 품사로는 형용사이며, 문장 내에서 명사를 수식하거나 보어 역할을 수행합니다."
          },
          {
            "q": "다음 문장에서 밑줄 친 단어의 '문장 성분'은?\n'My uncle bought [a new computer] yesterday.'",
            "options": [
              "주어 (Subject)",
              "동사 (Verb)",
              "목적어 (Object)",
              "보어 (Complement)",
              "수식어 (Modifier)"
            ],
            "ans": 2,
            "exp": "동사 bought의 동작 대상(~을/를)에 해당하므로 '목적어'입니다."
          },
          {
            "q": "다음 중 문장의 필수 뼈대 성분(주어, 동사, 목적어, 보어)이 아닌 것은?",
            "options": [
              "주어",
              "목적어",
              "보어",
              "부사적 수식어(Modifier)",
              "동사"
            ],
            "ans": 3,
            "exp": "부사나 전치사구 등 수식어(Modifier)는 문장의 부가적 성분으로 필수 뼈대에 포함되지 않습니다."
          },
          {
            "q": "다음 중 형용사(Adjective)가 문장 안에서 맡을 수 있는 역할로 올바른 것은?",
            "options": [
              "주어 자리 전담",
              "명사 수식 및 보어(주격/목적격 보어)",
              "동사 수식 및 목적어",
              "전치사의 목적어",
              "문장과 문장을 연결"
            ],
            "ans": 1,
            "exp": "형용사는 명사를 직접 꾸미거나(한정적), 주어나 목적어를 보충 설명하는 보어(서술적) 역할을 합니다."
          },
          {
            "q": "다음 문장에서 '보어(Complement)'에 해당하는 단어는?\n'The music sounds very sweet.'",
            "options": [
              "The",
              "music",
              "sounds",
              "very",
              "sweet"
            ],
            "ans": 4,
            "exp": "sounds 뒤에서 주어(The music)의 상태를 보충 설명하는 형용사 sweet가 주격 보어입니다."
          }
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
            "underlined": [
              "entered to",
              "the classroom",
              "looked at",
              "silently"
            ],
            "wrongIndex": 0,
            "correction": "entered",
            "explanation": "enter는 '~에 들어가다'라는 뜻의 완전타동사이므로 전치사 to 없이 바로 목적어 the classroom을 취해야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 목적어(~을/를) 없이 홀로 완전한 문장을 이룰 수 있는 '자동사'는?",
            "options": [
              "buy",
              "make",
              "sleep",
              "want",
              "catch"
            ],
            "ans": 2,
            "exp": "sleep(자다)은 목적어가 필요 없는 대표적인 자동사입니다."
          },
          {
            "q": "다음 문장의 형식은?\n'My grandmother gave me a beautiful watch on my birthday.'",
            "options": [
              "1형식 (S+V)",
              "2형식 (S+V+C)",
              "3형식 (S+V+O)",
              "4형식 (S+V+IO+DO)",
              "5형식 (S+V+O+OC)"
            ],
            "ans": 3,
            "exp": "주어(grandmother) + 동사(gave) + 간접목적어(me) + 직접목적어(a beautiful watch)의 4형식 수여동사 문장입니다."
          },
          {
            "q": "다음 중 전치사 없이 목적어를 바로 취해야 하는 '완전타동사'는?",
            "options": [
              "listen",
              "arrive",
              "discuss",
              "look",
              "wait"
            ],
            "ans": 2,
            "exp": "discuss는 타동사이므로 discuss about이 아니라 바로 discuss the problem처럼 목적어를 취합니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 말로 알맞은 것은?\n'The baby ________ softly in the cradle.'",
            "options": [
              "slept",
              "slept to",
              "slept at",
              "slept with",
              "was slept"
            ],
            "ans": 0,
            "exp": "sleep은 자동사이므로 전치사나 수동태 없이 단독으로 부사(softly)와 결합합니다."
          },
          {
            "q": "다음 문장에서 목적격 보어(OC)를 필요로 하는 5형식 문장은?",
            "options": [
              "He runs very fast.",
              "The sky turned dark.",
              "She bought a new dress.",
              "They made him the president.",
              "I sent a postcard to my friend."
            ],
            "ans": 3,
            "exp": "They(S) made(V) him(O) the president(OC) 구조로 5형식입니다."
          }
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
            "underlined": [
              "fresh bread",
              "smelled deliciously",
              "tasted",
              "sweet"
            ],
            "wrongIndex": 1,
            "correction": "smelled delicious",
            "explanation": "감각동사 smell 뒤에는 주어를 보충하는 주격 보어 자리가 오므로 부사 deliciously가 아니라 형용사 delicious를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 밑줄 친 부분이 '보어'인 문장은?",
            "options": [
              "She plays tennis well.",
              "My brother became an engineer.",
              "I read a book in the library.",
              "They arrived at the airport.",
              "He ran into the room."
            ],
            "ans": 1,
            "exp": "became an engineer에서 engineer는 주어(My brother)의 정체를 보충하는 주격 보어입니다."
          },
          {
            "q": "다음 빈칸에 어법상 들어갈 수 없는 단어는?\n'The music sounds ________.'",
            "options": [
              "wonderful",
              "great",
              "sweet",
              "beautifully",
              "pleasant"
            ],
            "ans": 3,
            "exp": "감각동사 sounds 뒤 보어 자리에는 부사 beautifully가 올 수 없습니다. 형용사 beautiful이어야 합니다."
          },
          {
            "q": "다음 5형식 문장에서 '목적격 보어'는?\n'Her kind words made him very happy.'",
            "options": [
              "kind",
              "words",
              "made",
              "him",
              "happy"
            ],
            "ans": 4,
            "exp": "목적어 him의 기분 상태를 보충 설명하는 happy가 목적격 보어입니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "This soup tastes badly.",
              "The flowers smell sweetly.",
              "He looked angrily at the referee.",
              "She seems happily today.",
              "The blanket feels softly."
            ],
            "ans": 2,
            "exp": "3번의 looked는 '바라보다'라는 일반 동작 동사로 쓰여 부사 angrily(화나서)의 수식을 받는 바른 문장입니다. (나머지는 감각동사 뒤 부사 사용 오류)"
          },
          {
            "q": "보어(Complement)에 대한 설명으로 옳지 않은 것은?",
            "options": [
              "주어나 목적어의 의미를 보충해 준다.",
              "명사와 형용사가 보어가 될 수 있다.",
              "감각동사 뒤에는 형용사 보어가 온다.",
              "우리말 해석이 '~하게'이면 부사를 보어로 쓴다.",
              "2형식과 5형식 문장에 등장한다."
            ],
            "ans": 3,
            "exp": "우리말 해석이 '~하게'로 되더라도 보어 자리에는 절대 부사를 쓸 수 없고 형용사를 써야 합니다."
          }
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
            "underlined": [
              "My dream",
              "is become",
              "an astrophysicist",
              "explore"
            ],
            "wrongIndex": 1,
            "correction": "is to become (또는 is becoming)",
            "explanation": "문장의 본동사 is가 있으므로 뒤에 동사원형 become을 바로 쓸 수 없으며, 명사적 보어 역할을 하는 to become 또는 becoming으로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "준동사(Verbal)가 만들어진 가장 근본적인 이유는?",
            "options": [
              "문장을 더 어렵게 만들기 위해",
              "한 문장에 접속사 없이 동사를 또 쓰기 위해 품사를 변신시킴",
              "동사의 개수를 무제한 늘리기 위해",
              "단어의 철자를 길게 만들기 위해",
              "주어를 강조하기 위해"
            ],
            "ans": 1,
            "exp": "한 문장에는 본동사가 1개만 올 수 있으므로, 추가적인 동작을 표현하기 위해 동사를 명사·형용사·부사로 변신시킨 것이 준동사입니다."
          },
          {
            "q": "다음 중 밑줄 친 V-ing가 '동명사'로 쓰인 것은?",
            "options": [
              "Look at the crying baby.",
              "She is reading a novel in her room.",
              "Swimming in the river is very dangerous.",
              "A barking dog seldom bites.",
              "The falling leaves look beautiful."
            ],
            "ans": 2,
            "exp": "3번의 Swimming은 문장의 '주어(~하는 것)' 역할을 하므로 동명사입니다. (나머지는 명사를 수식하는 현재분사 또는 진행형)"
          },
          {
            "q": "'to부정사(Infinitive)'에서 '부정(不定)'의 진짜 의미는?",
            "options": [
              "아니다(Not)라는 부정적인 뜻",
              "역할이 명사, 형용사, 부사로 정해져 있지 않고 문맥에 따라 결정됨",
              "문법적으로 정상이 아니라는 뜻",
              "아무도 정답을 알 수 없다는 뜻",
              "항상 부정문에만 쓰인다는 뜻"
            ],
            "ans": 1,
            "exp": "부정(不定, Non-finite)은 품사 역할이 하나로 정해져 있지 않다(Not fixed)는 뜻입니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 준동사의 형태로 알맞은 것은?\n'I bought a book ________ on the train.'",
            "options": [
              "read",
              "to read",
              "reads",
              "is reading",
              "was read"
            ],
            "ans": 1,
            "exp": "명사 a book을 뒤에서 수식하는 형용사적 용법의 to부정사 to read가 적절합니다."
          },
          {
            "q": "준동사가 원래 동사 출신이기 때문에 가지는 고유한 성질이 아닌 것은?",
            "options": [
              "자신만의 목적어나 보어를 취할 수 있다.",
              "부사의 수식을 받을 수 있다.",
              "단독으로 문장의 본동사 역할을 할 수 있다.",
              "의미상의 주어를 가질 수 있다.",
              "능동형과 수동형의 태를 가질 수 있다."
            ],
            "ans": 2,
            "exp": "준동사는 본동사가 아니므로 문장의 주어 바로 뒤에서 단독으로 문장의 본동사 역할을 할 수 없습니다."
          }
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
            "underlined": [
              "The girl",
              "who she",
              "won the science contest",
              "younger sister"
            ],
            "wrongIndex": 1,
            "correction": "who",
            "explanation": "주격 관계대명사 who가 이미 주어 역할을 하므로 인칭대명사 she를 중복해서 쓰면 안 됩니다."
          }
        ],
        "questions": [
          {
            "q": "'관계대명사'에서 '관계(Relational)'가 의미하는 문법적 기능은?",
            "options": [
              "친족 관계를 나타냄",
              "두 문장을 이어주는 '접속사' 기능",
              "남녀 간의 연애 관계",
              "상관관계 통계 분석",
              "인과 관계 도출"
            ],
            "ans": 1,
            "exp": "관계(Relative)는 두 문장을 연결해 주는 '접속사' 기능을 의미합니다."
          },
          {
            "q": "'선행사(Antecedent)'의 한자어 어원적 의미는?",
            "options": [
              "선한 행동을 하는 사람",
              "관계사 앞에 먼저(先) 나오는 명사",
              "선생님이 가르치는 단어",
              "앞으로 행해야 할 과제",
              "가장 우선시되는 동사"
            ],
            "ans": 1,
            "exp": "선행사(先行詞)는 관계대명사 앞에 먼저 위치하여 수식을 받는 명사를 뜻합니다."
          },
          {
            "q": "다음 두 문장을 관계대명사를 이용해 한 문장으로 바르게 합친 것은?\n'I have a friend. She lives in New York.'",
            "options": [
              "I have a friend which lives in New York.",
              "I have a friend who she lives in New York.",
              "I have a friend who lives in New York.",
              "I have a friend whom lives in New York.",
              "I have a friend whose lives in New York."
            ],
            "ans": 2,
            "exp": "선행사가 사람이고 주격이므로 who를 쓰며, 대명사 she는 생략되어야 합니다."
          },
          {
            "q": "관계대명사절 뒤의 문장 구조의 결정적인 특징은?",
            "options": [
              "항상 완전한 문장이 온다.",
              "주어나 목적어가 빠진 불완전한 문장이 온다.",
              "동사가 반드시 2개 연속 온다.",
              "접속사가 또 필요하다.",
              "부사가 맨 앞에 온다."
            ],
            "ans": 1,
            "exp": "관계대명사가 주어나 목적어를 대신하고 있으므로 뒤따르는 절은 반드시 주어나 목적어가 빠진 불완전한 구조입니다."
          },
          {
            "q": "관계대명사절 전체는 문장 안에서 어떤 품사 역할을 하는가?",
            "options": [
              "명사절 (주어 역할)",
              "형용사절 (선행사 명사 수식)",
              "부사절 (시간/이유 수식)",
              "동사구 (동작 서술)",
              "독립 감탄구"
            ],
            "ans": 1,
            "exp": "선행사(명사)를 꾸며주므로 형용사 역할을 하는 '형용사절'입니다."
          }
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
            "underlined": [
              "mysterious accident",
              "was happened",
              "on highway 65",
              "yesterday evening"
            ],
            "wrongIndex": 1,
            "correction": "happened",
            "explanation": "happen(일어나다, 발생하다)은 목적어가 없는 자동사이므로 수동태(was happened)로 쓸 수 없으며 능동형 happened로 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "영어에서 능동태 대신 수동태를 사용하는 대표적인 상황이 아닌 것은?",
            "options": [
              "행위자보다 행동을 당하는 대상이 더 중요할 때",
              "행위자가 누구인지 모르거나 밝힐 필요가 없을 때",
              "주어가 직접 자신의 의지로 동작을 적극 수행함을 강조할 때",
              "객관적인 사실이나 학술적 연구 결과를 진술할 때",
              "행위자가 불특정 다수(people)일 때"
            ],
            "ans": 2,
            "exp": "주어가 직접 동작을 적극 수행함을 강조할 때는 능동태(Active voice)를 씁니다."
          },
          {
            "q": "다음 중 수동태 문장으로 전환할 수 없는 동사는?",
            "options": [
              "build",
              "disappear",
              "write",
              "clean",
              "invent"
            ],
            "ans": 1,
            "exp": "disappear(사라지다)는 목적어를 가질 수 없는 자동사이므로 수동태가 불가능합니다."
          },
          {
            "q": "다음 능동태 문장을 수동태로 올바르게 전환한 것은?\n'Many tourists visit the palace every year.'",
            "options": [
              "The palace visited by many tourists every year.",
              "The palace is visited by many tourists every year.",
              "The palace was visited by many tourists every year.",
              "The palace visits many tourists every year.",
              "The palace has visited by many tourists."
            ],
            "ans": 1,
            "exp": "현재 시제이므로 be동사 현재형 is + visited + by many tourists가 맞습니다."
          },
          {
            "q": "수동태의 기본 공식으로 올바른 것은?",
            "options": [
              "have + p.p.",
              "be동사 + 동사원형",
              "be동사 + 과거분사(p.p.)",
              "do + 동사원형",
              "be동사 + 현재분사(V-ing)"
            ],
            "ans": 2,
            "exp": "수동태의 기본 형태는 'be동사 + 과거분사(p.p.)'입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?",
            "options": [
              "The window was broken by Tom.",
              "English is spoken in many countries.",
              "The castle was built in 1600.",
              "The car was disappeared last night.",
              "The letter was delivered on time."
            ],
            "ans": 3,
            "exp": "disappear는 자동사이므로 was disappeared라는 수동태 형태는 틀렸으며, disappeared로 써야 합니다."
          }
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
            "underlined": [
              "Despite",
              "it rained heavily",
              "continued",
              "baseball match"
            ],
            "wrongIndex": 0,
            "correction": "Although (또는 Even though)",
            "explanation": "뒤에 'it rained heavily'라는 주어+동사의 절이 이어지므로 전치사 Despite가 아니라 접속사 Although를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "'구(Phrase)'와 '절(Clause)'을 구별하는 가장 결정적인 기준은?",
            "options": [
              "글자 수의 길이",
              "단어 묶음 속에 [주어+동사]의 결합 관계가 있는가",
              "마침표가 찍혀 있는가",
              "대문자로 시작하는가",
              "전치사가 포함되어 있는가"
            ],
            "ans": 1,
            "exp": "구는 주어+동사가 없는 단어 뭉치이고, 절은 주어+동사를 갖춘 단어 뭉치입니다."
          },
          {
            "q": "다음 중 성격이 다른 하나는? (구 vs 절)",
            "options": [
              "under the big tree",
              "to solve the problem",
              "with my best friends",
              "when she arrived home",
              "in early morning"
            ],
            "ans": 3,
            "exp": "4번은 when 접속사 뒤에 'she(주어) + arrived(동사)'가 있으므로 '절'이고, 나머지는 '구'입니다."
          },
          {
            "q": "다음 빈칸에 'Because of'만 들어갈 수 있는 것은?",
            "options": [
              "________ the heavy snow",
              "________ it was snowing heavily",
              "________ he was absent",
              "________ she felt sick",
              "________ we missed the bus"
            ],
            "ans": 0,
            "exp": "Because of는 전치사이므로 주어+동사가 없는 명사구(the heavy snow) 앞에 와야 합니다."
          },
          {
            "q": "다음 문장에서 '종속절'에 해당하는 부분은?\n'We went outside when the rain stopped.'",
            "options": [
              "We went outside",
              "went outside",
              "when the rain stopped",
              "the rain stopped",
              "when the rain"
            ],
            "ans": 2,
            "exp": "접속사 when을 동반하여 주절에 시간 조건을 더해주는 'when the rain stopped'가 종속절(부사절)입니다."
          },
          {
            "q": "다음 중 명사구(Noun Phrase) 역할을 하는 것은?",
            "options": [
              "very softly",
              "in the garden",
              "To read good books",
              "if it is true",
              "quite happily"
            ],
            "ans": 2,
            "exp": "'To read good books'는 to부정사의 명사적 용법으로 주어 역할을 할 수 있는 명사구입니다."
          }
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
            "underlined": [
              "The mother",
              "looked at",
              "asleep child",
              "on her face"
            ],
            "wrongIndex": 2,
            "correction": "sleeping child",
            "explanation": "asleep은 서술적 용법(보어 자리)으로만 쓰이는 형용사이므로 명사 child를 앞에서 직접 수식할 수 없습니다. sleeping child로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "형용사의 '서술적 용법'에 대한 설명으로 옳은 것은?",
            "options": [
              "명사 바로 앞에서 명사를 직접 수식한다.",
              "문장의 보어(주격/목적격 보어) 자리에 쓰여 상태를 설명한다.",
              "항상 부사의 수식만 받는다.",
              "관계대명사 뒤에만 쓰인다.",
              "전치사 뒤에만 쓰인다."
            ],
            "ans": 1,
            "exp": "서술적 용법은 보어 자리에서 주어나 목적어의 상태를 설명하는 용법입니다."
          },
          {
            "q": "다음 중 명사 앞에서 직접 명사를 꾸밀 수 없는 '서술 전용 형용사'는?",
            "options": [
              "happy",
              "alive",
              "brave",
              "honest",
              "clever"
            ],
            "ans": 1,
            "exp": "alive는 an alive fish(X)처럼 쓸 수 없고, The fish is alive(O)처럼 서술적 보어로만 쓰입니다."
          },
          {
            "q": "관계대명사의 계속적 용법(, 콤마 뒤)에 절대 쓸 수 없는 관계대명사는?",
            "options": [
              "which",
              "who",
              "whom",
              "that",
              "whose"
            ],
            "ans": 3,
            "exp": "관계대명사 that과 what은 콤마 뒤 계속적 용법으로 쓸 수 없습니다."
          },
          {
            "q": "다음 두 문장의 의미 차이로 올바른 것은?\n(A) I met an old friend who told me the news.\n(B) I met an old friend, who told me the news.",
            "options": [
              "(A)와 (B)의 의미는 100% 동일하다.",
              "(A)는 그 소식을 전해준 옛 친구를 만난 것이고, (B)는 옛 친구를 만났는데 그 친구가 소식을 전해준 것이다.",
              "(A)는 가짜 뉴스이고 (B)는 진짜 뉴스이다.",
              "(A)는 친구가 여러 명이고 (B)는 친구가 없다.",
              "(B) 문장은 문법 오류 문장이다."
            ],
            "ans": 1,
            "exp": "(A)는 한정적 수식이며, (B)는 앞에서부터 순차적으로 정보를 덧붙이는 계속적 서술입니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "The baby was fast asleep.",
              "He is afraid of snakes.",
              "She bought an asleep puppy.",
              "The bird is still alive.",
              "He stayed alone in the house."
            ],
            "ans": 2,
            "exp": "asleep은 명사를 앞에서 직접 수식할 수 없으므로 an asleep puppy는 틀렸고, a sleeping puppy로 써야 합니다."
          }
        ]
      }
    ]
  },
  {
    "level": 102,
    "levelCode": "sp_writing",
    "levelName": "서술형 영작 특강",
    "targetGrade": "중·고등 내신 1등급",
    "badge": "서술형 특강",
    "color": "rose",
    "themeColor": "#e11d48",
    "isSpecial": true,
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
            "underlined": [
              "It was",
              "generous for him",
              "to donate",
              "to the charity"
            ],
            "wrongIndex": 1,
            "correction": "generous of him",
            "explanation": "generous(관대한)는 사람의 인품·성격을 나타내는 형용사이므로 to부정사의 의미상 주어 앞에 for가 아닌 of를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 우리말을 조건에 맞게 영작할 때 빈칸에 알맞은 것은?\n'그가 제시간에 도착하는 것은 불가능하다.' (It, possible 단어 변형 활용)",
            "options": [
              "It is impossible for him to arrive on time.",
              "It is impossible of him to arrive on time.",
              "It is impossible for he arriving on time.",
              "He is impossible to arrive on time.",
              "It is impossible that he arrive on time."
            ],
            "ans": 0,
            "exp": "가주어 it, 일반 형용사의 의미상 주어 for him, 진주어 to arrive 구문이 정확합니다."
          },
          {
            "q": "다음 문장과 의미가 같도록 빈칸을 채울 때 알맞은 것은?\n'The box was too heavy for her to lift.'\n= 'The box was so heavy that she ________ it.'",
            "options": [
              "cannot lift",
              "could not lift",
              "can lift",
              "could not lift it",
              "could lift"
            ],
            "ans": 3,
            "exp": "so ~ that 구문에서는 타동사 lift의 목적어 it을 반드시 써주어야 하며, 과거시제이므로 could not lift it이 정답입니다."
          },
          {
            "q": "다음 중 의미상 주어 앞에 'of'를 써야 하는 형용사는?",
            "options": [
              "easy",
              "difficult",
              "important",
              "foolish",
              "dangerous"
            ],
            "ans": 3,
            "exp": "foolish(어리석은)는 사람의 성품을 나타내는 형용사이므로 of를 씁니다."
          },
          {
            "q": "다음 영작 중 어법상 틀린 부분은?\n'It is necessary for us [learning] foreign languages.'",
            "options": [
              "is",
              "necessary",
              "for us",
              "learning",
              "foreign languages"
            ],
            "ans": 3,
            "exp": "가주어 it 구문에서 진주어로는 to부정사가 와야 하므로 learning을 to learn으로 고쳐야 합니다."
          },
          {
            "q": "다음 빈칸에 들어갈 전치사가 순서대로 알맞은 것은?\n'It is hard ________ her to wake up early.'\n'It is polite ________ you to say hello.'",
            "options": [
              "for - for",
              "of - for",
              "for - of",
              "of - of",
              "to - for"
            ],
            "ans": 2,
            "exp": "hard는 일반 난이도 형용사이므로 for, polite는 인품 형용사이므로 of입니다."
          }
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
            "underlined": [
              "never forget",
              "the restaurant",
              "where we had dinner in",
              "first anniversary"
            ],
            "wrongIndex": 2,
            "correction": "where we had dinner (또는 which we had dinner in)",
            "explanation": "관계부사 where 뒤에는 완전한 절이 와야 하므로 불필요한 전치사 in을 삭제하거나, in which로 바꾸어야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 두 문장을 한 문장으로 바르게 결합한 것은?\n'This is the laptop.' + 'I bought it last week.'",
            "options": [
              "This is the laptop which I bought it last week.",
              "This is the laptop where I bought last week.",
              "This is the laptop which I bought last week.",
              "This is the laptop whose I bought last week.",
              "This is the laptop whom I bought last week."
            ],
            "ans": 2,
            "exp": "사물 선행사이므로 which를 쓰며, 목적어 it은 관계대명사로 전환되었으므로 삭제해야 합니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "This is the way he solved the problem.",
              "This is how he solved the problem.",
              "This is the way how he solved the problem.",
              "This is the way in which he solved the problem.",
              "This is the reason why she left."
            ],
            "ans": 2,
            "exp": "the way와 how는 절대로 나란히 함께 쓸 수 없습니다."
          },
          {
            "q": "다음 빈칸에 들어갈 가장 적절한 관계부사는?\n'Friday is the day ________ I feel most relaxed.'",
            "options": [
              "where",
              "when",
              "why",
              "how",
              "which"
            ],
            "ans": 1,
            "exp": "시간 선행사 the day를 받고 뒤 문장이 완전하므로 when이 알맞습니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 어색한 것은?",
            "options": [
              "The hotel at which we stayed was cozy.",
              "The hotel where we stayed was cozy.",
              "The hotel which we stayed was cozy.",
              "The hotel which we stayed at was cozy.",
              "The hotel that we stayed at was cozy."
            ],
            "ans": 2,
            "exp": "stay는 자동사이므로 hotel을 받으려면 전치사 at이 필요합니다. which we stayed는 불완전합니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 말로 알맞은 것은?\n'I know the reason ________ he didn't attend the meeting.'",
            "options": [
              "which",
              "why",
              "where",
              "how",
              "what"
            ],
            "ans": 1,
            "exp": "이유 선행사 the reason 뒤에 완전한 절이 이어지므로 관계부사 why가 정답입니다."
          }
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
            "underlined": [
              "sat on the sofa",
              "listening to",
              "with his legs",
              "crossing comfortably"
            ],
            "wrongIndex": 3,
            "correction": "crossed comfortably",
            "explanation": "다리(legs)는 꼬아지는 수동의 대상이므로 crossing이 아닌 과거분사 crossed를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장을 분사구문으로 바르게 고친 것은?\n'Because I didn't have enough money, I couldn't buy the shoes.'",
            "options": [
              "Having not enough money, I couldn't buy the shoes.",
              "Not having enough money, I couldn't buy the shoes.",
              "Didn't have enough money, I couldn't buy the shoes.",
              "Not have enough money, I couldn't buy the shoes.",
              "Having enough money, I couldn't buy the shoes."
            ],
            "ans": 1,
            "exp": "분사구문의 부정은 Not을 분사 맨 앞에 붙이므로 Not having enough money가 맞습니다."
          },
          {
            "q": "빈칸에 들어갈 말로 가장 적절한 것은?\n'She fell asleep with the lights ________.'",
            "options": [
              "turn on",
              "turning on",
              "turned on",
              "turns on",
              "to turn on"
            ],
            "ans": 2,
            "exp": "전등(the lights)은 켜지는 수동의 관계이므로 과거분사 turned on이 적절합니다."
          },
          {
            "q": "다음 중 분사구문의 주어와 주절의 주어가 일치하지 않아 어법상 어색한 것은? (현수분사)",
            "options": [
              "Walking along the street, I met an old friend.",
              "Arriving at the station, the train had already left.",
              "Feeling hungry, he ate three sandwiches.",
              "Turning left at the corner, you will see the bank.",
              "Not knowing the answer, she remained silent."
            ],
            "ans": 1,
            "exp": "2번에서 기차역에 도착한 것은 the train이 아니라 사람이므로 주어 불일치 오류(현수분사)입니다."
          },
          {
            "q": "다음 문장의 밑줄 친 부분을 접속사가 있는 부사절로 바르게 고친 것은?\n'Weather permitting, we will go on a picnic.'",
            "options": [
              "If weather permits",
              "Because weather permits",
              "Although weather permitted",
              "When weather permitted",
              "Unless weather permits"
            ],
            "ans": 0,
            "exp": "'날씨가 허락한다면'의 조건 부사절 If weather permits의 독립분사구문 관용 표현입니다."
          },
          {
            "q": "빈칸에 들어갈 분사의 형태가 알맞은 것은?\n'He listened to the lecture with his eyes ________.'",
            "options": [
              "close",
              "closed",
              "closing",
              "to close",
              "closes"
            ],
            "ans": 1,
            "exp": "눈(eyes)은 감겨지는 수동 관계이므로 과거분사 closed가 맞습니다."
          }
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
            "sentence": "Had he listen to my advice, he would not have failed the driving test.",
            "underlined": [
              "Had he listen",
              "to my advice",
              "would not have",
              "failed"
            ],
            "wrongIndex": 0,
            "correction": "Had he listened",
            "explanation": "가정법 과거완료 If he had listened에서 If가 생략된 도치 구문이므로 had 뒤에 과거분사 listened가 와야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 밑줄 친 부분과 바꿔 쓸 수 없는 것은?\n'[Without] your support, I could not have completed the project.'",
            "options": [
              "But for",
              "If it had not been for",
              "Had it not been for",
              "If it were not for",
              "Were it not for"
            ],
            "ans": 3,
            "exp": "주절이 could not have completed(과거완료)이므로 과거 사실을 반대하는 If it had not been for / Had it not been for / Without / But for가 와야 하며, 현재 사실을 반대하는 If it were not for는 시제가 맞지 않습니다."
          },
          {
            "q": "다음 문장에서 if를 생략하고 바르게 도치한 것은?\n'If you should have any questions, please contact us.'",
            "options": [
              "Should you have any questions",
              "You should have any questions",
              "Did you have any questions",
              "Have you any questions",
              "Had you have any questions"
            ],
            "ans": 0,
            "exp": "조동사 should가 주어 앞으로 나가 Should you have any questions가 됩니다."
          },
          {
            "q": "다음 빈칸에 공통으로 들어갈 말은?\n'________ it not for your help, I would fail.'\n'________ he known the answer, he would have answered.'",
            "options": [
              "Was - Had",
              "Were - Had",
              "Were - Has",
              "Had - Were",
              "If - If"
            ],
            "ans": 1,
            "exp": "첫 번째는 Were it not for, 두 번째는 Had he known입니다."
          },
          {
            "q": "다음 우리말을 조건 영작할 때 알맞은 것은?\n'그녀의 조언이 없다면, 우리는 길을 잃을 것이다.'",
            "options": [
              "Were it not for her advice, we would get lost.",
              "Was it not for her advice, we would get lost.",
              "Had it not been for her advice, we will get lost.",
              "If it is not for her advice, we get lost.",
              "Without her advice, we got lost."
            ],
            "ans": 0,
            "exp": "현재 사실 반대이므로 Were it not for ~, we would get lost가 완벽합니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "Were I rich, I would travel around the world.",
              "Had we started earlier, we wouldn't have missed the flight.",
              "Should it rain tomorrow, the match will be cancelled.",
              "Did he know the secret, he would be shocked.",
              "Without air, no living thing could exist."
            ],
            "ans": 3,
            "exp": "일반동사 과거형의 if 생략 도치는 Did he know로 하지 않고, If he knew를 유지하거나 Were he to know 형태로 씁니다."
          }
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
            "underlined": [
              "The movie",
              "was such boring",
              "that half",
              "left before the end"
            ],
            "wrongIndex": 1,
            "correction": "was so boring",
            "explanation": "뒤에 단독 형용사 boring만 있으므로 such가 아닌 so를 써야 합니다. (such는 뒤에 명사가 필요)"
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'It was ________ cold that the lake froze.'\n'She is ________ a kind girl that everyone loves her.'",
            "options": [
              "so - such",
              "such - so",
              "so - so",
              "such - such",
              "too - so"
            ],
            "ans": 0,
            "exp": "첫 번째는 형용사 cold 앞이므로 so, 두 번째는 a kind girl 앞이므로 such입니다."
          },
          {
            "q": "다음 문장과 의미가 같은 것은?\n'He is too young to drive a car.'",
            "options": [
              "He is so young that he can drive a car.",
              "He is so young that he cannot drive a car.",
              "He is such young that he cannot drive a car.",
              "He is young enough to drive a car.",
              "He is so young to drive a car."
            ],
            "ans": 1,
            "exp": "too ~ to 구문은 so ~ that S cannot 구문과 같습니다."
          },
          {
            "q": "어순이 올바른 문장은?",
            "options": [
              "It was such nice a day that we went out.",
              "It was so a nice day that we went out.",
              "It was such a nice day that we went out.",
              "It was so nice day that we went out.",
              "It was too nice a day that we went out."
            ],
            "ans": 2,
            "exp": "such + a/an + 형용사 + 명사 어순인 such a nice day가 올바릅니다."
          },
          {
            "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'She turned on the subtitles ________ she could understand the French movie.'",
            "options": [
              "so that",
              "such that",
              "too that",
              "as that",
              "in that"
            ],
            "ans": 0,
            "exp": "~하기 위해서라는 목적을 나타내는 'so that + 주어 + 조동사'가 맞습니다."
          },
          {
            "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 것은?",
            "options": [
              "The problem was so difficult that I gave up.",
              "She spoke so fast that I couldn't understand.",
              "He made such a big mistake that he was fired.",
              "It was so delicious food that we ate it all.",
              "They walked so quietly that no one noticed."
            ],
            "ans": 3,
            "exp": "food는 셀 수 없는 명사이므로 such delicious food로 써야 합니다."
          }
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
            "underlined": [
              "The teacher",
              "made the students",
              "to write",
              "about environmental"
            ],
            "wrongIndex": 2,
            "correction": "write",
            "explanation": "사역동사 make의 목적격 보어로 능동 관계일 때는 to부정사가 아니라 동사원형 write를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 형태로 가장 알맞은 것은?\n'I had my smartphone ________ at the service center yesterday.'",
            "options": [
              "repair",
              "repairs",
              "repaired",
              "repairing",
              "to repair"
            ],
            "ans": 2,
            "exp": "스마트폰(목적어)은 수리되는 수동의 대상이므로 과거분사 repaired가 정답입니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "She let him drive her new car.",
              "I saw the boy steal the apple.",
              "My father helped me to wash the car.",
              "The police made the driver to stop.",
              "We felt the ground shake."
            ],
            "ans": 3,
            "exp": "사역동사 make 뒤의 목적격 보어는 to stop이 아닌 동사원형 stop이어야 합니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I heard someone ________ on the door.' / 'He watched the sun ________.'",
            "options": [
              "knock - rise",
              "to knock - to rise",
              "knocked - risen",
              "knocks - rises",
              "to knock - rising"
            ],
            "ans": 0,
            "exp": "지각동사 heard와 watched 뒤 능동 목적격 보어로 동사원형 knock과 rise가 적절합니다."
          },
          {
            "q": "준사역동사 help의 목적격 보어로 올 수 있는 형태 2가지는?",
            "options": [
              "동사원형, to부정사",
              "동사원형, 현재분사",
              "to부정사, 과거분사",
              "현재분사, 과거분사",
              "동사원형, 동명사"
            ],
            "ans": 0,
            "exp": "help는 목적격 보어로 동사원형과 to부정사를 모두 취할 수 있습니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'She heard her own name ________ on the radio.'",
            "options": [
              "mention",
              "mentioning",
              "mentioned",
              "to mention",
              "mentions"
            ],
            "ans": 2,
            "exp": "그녀의 이름이 라디오에서 언급되는 수동의 관계이므로 과거분사 mentioned가 맞습니다."
          }
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
            "underlined": [
              "Rarely",
              "she eats",
              "fast food",
              "cares about"
            ],
            "wrongIndex": 1,
            "correction": "does she eat",
            "explanation": "부정어 Rarely가 문두로 나갔으므로 의문문 어순으로 도치되어 does she eat으로 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장을 부정어 Never를 문두로 빼서 바르게 도치한 것은?\n'I have never heard such a beautiful melody.'",
            "options": [
              "Never I have heard such a beautiful melody.",
              "Never have I heard such a beautiful melody.",
              "Never heard I such a beautiful melody.",
              "Never did I have heard such a beautiful melody.",
              "Never I heard such a beautiful melody."
            ],
            "ans": 1,
            "exp": "부정어 + have(조동사) + I(주어) + heard 어순이 올바릅니다."
          },
          {
            "q": "다음 빈칸에 들어갈 어순으로 알맞은 것은?\n'Little ________ that his speech would inspire millions of people.'",
            "options": [
              "he knew",
              "did he know",
              "knew he",
              "he did know",
              "was he known"
            ],
            "ans": 1,
            "exp": "부정어 Little 뒤 일반동사 과거형이므로 did he know가 맞습니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "Under the tree sat an old gentleman.",
              "In the center of the town stands a monument.",
              "Here comes the bus.",
              "Here comes he.",
              "Down came the rain."
            ],
            "ans": 3,
            "exp": "주어가 대명사(he)일 때는 부사구 도치가 일어나지 않으므로 Here he comes가 맞습니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'Not only ________ fluent in English, but she also speaks German.'",
            "options": [
              "she is",
              "is she",
              "does she",
              "she does",
              "she has"
            ],
            "ans": 1,
            "exp": "Not only 부정어구 도치이므로 be동사가 주어 앞으로 나와 is she가 됩니다."
          },
          {
            "q": "다음 문장을 도치 구문으로 바르게 전환한 것은?\n'A huge oak tree stood in front of the house.'",
            "options": [
              "In front of the house a huge oak tree stood.",
              "In front of the house stood a huge oak tree.",
              "In front of the house did stand a huge oak tree.",
              "Stood a huge oak tree in front of the house.",
              "A huge oak tree in front of the house stood."
            ],
            "ans": 1,
            "exp": "장소 부사구(In front of the house) + 동사(stood) + 주어(a huge oak tree) 도치가 올바릅니다."
          }
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
            "underlined": [
              "Each of",
              "participants",
              "were asked",
              "to submit"
            ],
            "wrongIndex": 2,
            "correction": "was asked",
            "explanation": "문장의 주어는 Each(단수 취급)이므로 복수 동사 were가 아니라 단수 동사 was를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 서술형 답안에서 감점 처리를 당하지 않는 완벽한 문장은?",
            "options": [
              "She don't understand the reason.",
              "One of my best friends live in Paris.",
              "He bought an umbrella because it was raining.",
              "I have three brother and two sisters.",
              "She cutted the paper into small pieces."
            ],
            "ans": 2,
            "exp": "3번은 시제, 관사, 수일치 모두 완벽합니다. (1: doesn't, 2: lives, 4: brothers, 5: cut)"
          },
          {
            "q": "빈칸에 들어갈 말로 알맞은 것은?\n'Harvard University was ________ in 1636.'",
            "options": [
              "find",
              "found",
              "founded",
              "finding",
              "founding"
            ],
            "ans": 2,
            "exp": "'설립되다'는 뜻이므로 found(설립하다)의 과거분사 founded가 정답입니다."
          },
          {
            "q": "다음 중 주어와 동사의 수일치가 올바른 것은?",
            "options": [
              "Every student have a locker.",
              "The news are very shocking.",
              "Neither Tom nor his friends were present.",
              "Ten miles are a long distance to walk.",
              "Mathematics are my favorite subject."
            ],
            "ans": 2,
            "exp": "Neither A nor B는 B(his friends)에 수일치하므로 were가 올바릅니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 과거형 스펠링이 바른 것은?\n'She ________ a beautiful necklace for her mother yesterday.'",
            "options": [
              "chosed",
              "chose",
              "chosen",
              "choosed",
              "choose"
            ],
            "ans": 1,
            "exp": "choose의 과거형은 불규칙 변화 chose입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?",
            "options": [
              "A number of students are waiting outside.",
              "The number of cars is increasing.",
              "Physics is an interesting subject.",
              "Fifty dollars are too much for this shirt.",
              "Bread and butter is his favorite breakfast."
            ],
            "ans": 3,
            "exp": "Fifty dollars는 금액 전체를 하나의 단위로 보아 단수 동사 is로 받아야 합니다."
          }
        ]
      }
    ]
  },
  {
    "level": 103,
    "levelCode": "sp_csat",
    "levelName": "수능 29번 킬러 특강",
    "targetGrade": "수능 1등급 3초 컷",
    "badge": "수능 킬러",
    "color": "indigo",
    "themeColor": "#4f46e5",
    "isSpecial": true,
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
            "sentence": "The ability of humans to communicate complex abstract ideas through language distinguishing them from all other species.",
            "underlined": [
              "ability of humans",
              "to communicate",
              "distinguishing",
              "from all other"
            ],
            "wrongIndex": 2,
            "correction": "distinguishes",
            "explanation": "문장의 본동사 자리입니다. 주어 The ability에 호응하는 단수 본동사 distinguishes가 와야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'The ancient manuscripts, preserved in the monastery for centuries, ①[providing] valuable insights into medieval European history, ②[which] historians ③[continue] to study today.'",
            "options": [
              "① providing",
              "② which",
              "③ continue",
              "for centuries",
              "today"
            ],
            "ans": 0,
            "exp": "The ancient manuscripts가 주어이고, preserved~centuries는 분사구입니다. 주절의 본동사가 없으므로 providing을 본동사 provide로 고쳐야 합니다."
          },
          {
            "q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'Anyone ________ to apply for the international scholarship must submit two recommendation letters.'",
            "options": [
              "wishes",
              "wishing",
              "wished",
              "is wishing",
              "will wish"
            ],
            "ans": 1,
            "exp": "문장의 본동사 must submit이 이미 있으므로 빈칸은 Anyone을 수식하는 준동사(wishing) 자리입니다."
          },
          {
            "q": "다음 중 밑줄 친 부분이 어법상 올바른 것은?",
            "options": [
              "The man standing near the door [to be] my uncle.",
              "The proposal suggested by the committee [approved] yesterday.",
              "All students desiring to participate [must register] by Friday.",
              "The books ordered online last week [arriving] this morning.",
              "The sound of church bells [echoed] through the silent valley."
            ],
            "ans": 2,
            "exp": "All students(주어) + desiring to participate(수식어) + must register(본동사) 구조가 완벽합니다."
          },
          {
            "q": "다음 문장의 밑줄 친 부분 중 어법상 어색한 것은?\n'The government, after months of debate, ①[decided] to implement the new policy, ②[aiming] to reduce traffic congestion, ③[created] a major controversy among citizens.'",
            "options": [
              "① decided",
              "② aiming",
              "③ created",
              "after months of",
              "among citizens"
            ],
            "ans": 2,
            "exp": "③번 자리에 접속사 없이 과거동사 created가 올 수 없으므로, 분사구문 creating 또는 and created로 고쳐야 합니다."
          },
          {
            "q": "수능 어법에서 '본동사 자리'를 찾기 위한 황금 공식은?",
            "options": [
              "본동사 개수 = 접속사 개수 - 1",
              "본동사 개수 = 접속사 개수 + 1",
              "본동사는 항상 문장의 3번째 단어에 온다",
              "본동사는 수동태가 될 수 없다",
              "본동사 뒤에는 반드시 목적어가 온다"
            ],
            "ans": 1,
            "exp": "문장 내 본동사의 개수는 접속사/관계사 개수에 1을 더한 것과 일치합니다."
          }
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
            "underlined": [
              "have discovered",
              "what people",
              "who exercise",
              "less anxiety"
            ],
            "wrongIndex": 1,
            "correction": "that people",
            "explanation": "discovered 뒤에 이어지는 절(people who exercise regularly experience less anxiety...)이 완전한 문장이므로 what이 아닌 접속사 that을 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'This is ________ I have been looking for.'\n'I believe ________ everything happens for a reason.'",
            "options": [
              "what - that",
              "that - what",
              "which - what",
              "that - which",
              "what - which"
            ],
            "ans": 0,
            "exp": "첫 번째는 선행사 없고 looking for의 목적어가 빠졌으므로 what, 두 번째는 선행사 없고 뒤 문장이 완전하므로 접속사 that입니다."
          },
          {
            "q": "다음 중 밑줄 친 'that'의 성격이 '동격의 접속사'인 것은?",
            "options": [
              "The rumor [that] spread quickly was false.",
              "The fact [that] the earth is round is known to all.",
              "This is the phone [that] I wanted to buy.",
              "I know the girl [that] won first prize.",
              "The car [that] he drives is very old."
            ],
            "ans": 1,
            "exp": "the fact 뒤에 'the earth is round'라는 완전한 절이 이어지므로 동격의 that입니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 가장 적절한 것은?\n'Scientists are trying to understand ________ causes volcanic eruptions.'",
            "options": [
              "that",
              "what",
              "which",
              "whose",
              "where"
            ],
            "ans": 1,
            "exp": "선행사가 없고 causes의 주어가 빠진 불완전한 절을 이끌어 understand의 목적어가 되어야 하므로 what이 정답입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?",
            "options": [
              "He didn't remember what he had promised.",
              "She told me that she was leaving.",
              "The reason what he failed was laziness.",
              "The gift that she gave me was special.",
              "What surprised us was his sudden decision."
            ],
            "ans": 2,
            "exp": "선행사 The reason이 있으므로 what을 쓸 수 없으며, why 또는 that이어야 합니다."
          },
          {
            "q": "관계대명사 'what'에 대한 설명으로 옳지 않은 것은?",
            "options": [
              "the thing(s) which로 풀어서 쓸 수 있다.",
              "앞에 반드시 수식하는 선행사 명사가 있어야 한다.",
              "뒤에는 주어나 목적어가 빠진 불완전한 문장이 온다.",
              "what이 이끄는 절은 문장에서 주어, 목적어, 보어 역할을 한다.",
              "'~하는 것'으로 해석된다."
            ],
            "ans": 1,
            "exp": "what은 선행사를 자체에 포함하고 있으므로 앞에 선행사가 올 수 없습니다."
          }
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
            "underlined": [
              "The audience",
              "completely captivating",
              "throughout",
              "magic performance"
            ],
            "wrongIndex": 1,
            "correction": "captivated",
            "explanation": "관객(The audience)은 마술 공연에 의해 매료된 감정을 느끼는 주체이므로 현재분사 captivating이 아니라 과거분사 captivated를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'The news was so ________ that everyone was ________.'",
            "options": [
              "shocked - shocking",
              "shocking - shocked",
              "shocking - shocking",
              "shocked - shocked",
              "shock - shocking"
            ],
            "ans": 1,
            "exp": "뉴스(The news)는 충격을 유발하므로 shocking, 사람(everyone)은 충격을 받으므로 shocked입니다."
          },
          {
            "q": "다음 괄호 안에서 어법상 알맞은 것은?\n'We received an email [confirming / confirmed] our flight reservation.'",
            "options": [
              "confirming",
              "confirmed",
              "confirm",
              "confirms",
              "to be confirmed"
            ],
            "ans": 0,
            "exp": "이메일이 뒤의 목적어(our flight reservation)를 확인해 주는 능동 관계이므로 confirming이 정답입니다."
          },
          {
            "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 것은?",
            "options": [
              "an exciting soccer match",
              "a bored lecture",
              "a satisfying meal",
              "a confusing explanation",
              "a frightened child"
            ],
            "ans": 1,
            "exp": "강의(lecture)는 지루함을 유발하는 사물이므로 boring lecture여야 합니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?\n'Many artifacts ①[discovered] in Egypt, ②[dating] back to 3000 BC, are ③[displaying] in the national museum today.'",
            "options": [
              "① discovered",
              "② dating",
              "③ displaying",
              "artifacts",
              "museum"
            ],
            "ans": 2,
            "exp": "유물(artifacts)은 박물관에 전시되는 수동의 대상이므로 displaying이 아닌 displayed가 되어야 합니다."
          },
          {
            "q": "타동사의 분사 뒤에 목적어가 존재할 때의 일반적인 규칙은?",
            "options": [
              "반드시 과거분사(p.p.)를 쓴다",
              "반드시 능동의 현재분사(V-ing)를 쓴다",
              "동사원형을 쓴다",
              "to부정사로 바꾼다",
              "전치사를 생략한다"
            ],
            "ans": 1,
            "exp": "타동사가 목적어를 거느리고 있을 때는 능동의 현재분사(V-ing) 형태가 옵니다."
          }
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
            "underlined": [
              "nocturnal animals",
              "significantly larger",
              "than that of",
              "diurnal animals"
            ],
            "wrongIndex": 2,
            "correction": "than those of",
            "explanation": "비교 대상이 복수 명사인 The eyes이므로 단수 대명사 that이 아니라 복수 대명사 those를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말로 가장 적절한 것은?\n'The energy consumption of electric cars is lower than ________ of gasoline cars.'",
            "options": [
              "it",
              "that",
              "this",
              "those",
              "these"
            ],
            "ans": 1,
            "exp": "비교되는 대상이 단수 명사 The energy consumption이므로 that이 정답입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 가리키는 대상과의 수일치가 잘못된 것은?",
            "options": [
              "Each student brought their own laptop.",
              "The team celebrated its victory.",
              "Trees absorb carbon dioxide and release [it] as oxygen.",
              "The books were heavy, so I carried [them] in a backpack.",
              "A smartphone is useful, but [it] can be addictive."
            ],
            "ans": 2,
            "exp": "carbon dioxide는 기체(단수)이므로 it으로 받는 것이 맞지만, 문맥상 oxygen으로 방출되는 것이 아닌 산소를 방출하는 것이며, 만약 복수 명사를 대신할 땐 them이어야 합니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'The customs of ancient Greece were quite different from ________ of modern society.'",
            "options": [
              "that",
              "those",
              "it",
              "this",
              "them"
            ],
            "ans": 1,
            "exp": "복수 명사인 The customs를 대신하므로 those가 정답입니다."
          },
          {
            "q": "대명사 밑줄 어법 문제 풀이 시 가장 먼저 해야 할 행동은?",
            "options": [
              "단어의 철자 세기",
              "대명사가 대신 가리키는 앞선 명사를 찾아 단수/복수 확인",
              "문장을 수동태로 바꾸기",
              "대명사를 부사로 바꾸기",
              "마침표 위치 확인"
            ],
            "ans": 1,
            "exp": "대명사는 지칭 대상의 단수/복수 여부를 일치시키는 것이 핵심입니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "The population of Seoul is larger than Tokyo.",
              "The population of Seoul is larger than that of Tokyo.",
              "The population of Seoul is larger than those of Tokyo.",
              "The population of Seoul is larger than this of Tokyo.",
              "The population of Seoul is larger than them of Tokyo."
            ],
            "ans": 1,
            "exp": "서울의 인구와 도쿄의 인구를 비교해야 하므로 단수 대명사 that of Tokyo가 정확합니다."
          }
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
            "underlined": [
              "Regular meditation",
              "keep their minds",
              "calmly",
              "during severe crises"
            ],
            "wrongIndex": 2,
            "correction": "calm",
            "explanation": "keep + 목적어(their minds) + 목적격 보어 자리이므로 부사 calmly가 아닌 형용사 calm이 와야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'I have been so busy ________ that I haven't had time to call you.'",
            "options": [
              "late",
              "lately",
              "latest",
              "later",
              "lateness"
            ],
            "ans": 1,
            "exp": "'최근에'라는 뜻의 부사는 lately입니다."
          },
          {
            "q": "다음 중 밑줄 친 부분의 쓰임이 어법상 올바른 것은?",
            "options": [
              "He tried hardly to pass the exam.",
              "The eagle flew highly in the sky.",
              "She arrived lately for the interview.",
              "I nearly missed the bus this morning.",
              "The movie was real interesting."
            ],
            "ans": 3,
            "exp": "nearly는 '거의'라는 뜻의 부사로 '거의 버스를 놓칠 뻔했다'는 문맥에 올바르게 쓰였습니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 형태로 적절한 것은?\n'Please keep the door ________.'",
            "options": [
              "lock",
              "locked",
              "locking",
              "to lock",
              "lockedly"
            ],
            "ans": 1,
            "exp": "문(door)이 잠겨진 상태로 유지되는 것이므로 과거분사 형용사 locked가 알맞습니다."
          },
          {
            "q": "다음 중 부사(-ly)가 들어갈 수 없는 자리는?",
            "options": [
              "일반동사를 수식하는 자리",
              "문장 전체를 수식하는 문두 자리",
              "다른 형용사나 부사를 수식하는 자리",
              "5형식 동사 make의 목적격 보어 자리",
              "분사를 수식하는 자리"
            ],
            "ans": 3,
            "exp": "목적격 보어 자리에는 명사나 형용사만 올 수 있으며 부사는 절대 불가합니다."
          },
          {
            "q": "다음 문장의 밑줄 친 부분 중 어색한 것은?\n'The food in this restaurant tastes ①[delicious] and looks ②[wonderfully], but the service is ③[terrible].'",
            "options": [
              "① delicious",
              "② wonderfully",
              "③ terrible",
              "restaurant",
              "service"
            ],
            "ans": 1,
            "exp": "감각동사 looks 뒤 주격 보어 자리이므로 부사 wonderfully가 아니라 형용사 wonderful이어야 합니다."
          }
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
            "underlined": [
              "The research",
              "collecting data",
              "analyzing trends",
              "to publish"
            ],
            "wrongIndex": 3,
            "correction": "publishing",
            "explanation": "동명사 목적어 collecting, analyzing과 병렬 구조를 이루어야 하므로 to publish를 publishing으로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 병렬 구조가 올바르게 이루어진 문장은?",
            "options": [
              "She likes swimming, dancing, and to sing.",
              "He was smart, handsome, and kindness.",
              "To know is one thing, and practicing is another.",
              "The manager asked us to finish the report and send it by noon.",
              "I enjoy reading books and watch movies."
            ],
            "ans": 3,
            "exp": "to finish와 (to) send가 to부정사 병렬 구조를 올바르게 이루고 있습니다."
          },
          {
            "q": "다음 빈칸에 들어갈 알맞은 형태는?\n'You can improve your English by reading newspapers, listening to podcasts, and ________ with native speakers.'",
            "options": [
              "talk",
              "talking",
              "talked",
              "to talk",
              "talks"
            ],
            "ans": 1,
            "exp": "전치사 by 뒤에 reading, listening과 병렬을 이루는 동명사 talking이 와야 합니다."
          },
          {
            "q": "다음 문장의 밑줄 친 부분 중 어법상 어색한 것은?\n'The athlete not only broke the world record ①[but] also ②[inspiring] millions of young sports fans ③[across] the globe.'",
            "options": [
              "① but",
              "② inspiring",
              "③ across",
              "broke",
              "millions of"
            ],
            "ans": 1,
            "exp": "과거동사 broke와 병렬 구조를 이루어야 하므로 inspiring이 아니라 과거동사 inspired여야 합니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "Either you or he is responsible for the mistake.",
              "Both my brother and my sister are doctors.",
              "She prefers walking to drive.",
              "Not only the students but also the teacher was excited.",
              "He taught us to think critically and to express ourselves clearly."
            ],
            "ans": 2,
            "exp": "prefer A to B에서 to는 전치사이므로 walking과 대등하게 driving이 와야 합니다."
          },
          {
            "q": "수능 어법에서 and/or/but 뒤에 밑줄이 있을 때 가장 먼저 취해야 할 문제 풀이 전략은?",
            "options": [
              "해석을 통해 밑줄 친 단어가 문장 내 어떤 어구와 짝을 이루는지 확인",
              "무조건 동명사(-ing)로 고치기",
              "문장의 주어를 찾아서 생략하기",
              "앞 단어의 품사만 기계적으로 복사하기",
              "접속사를 지우기"
            ],
            "ans": 0,
            "exp": "병렬 구조 문제는 기계적인 형태 복사가 아니라, 문맥상 무엇과 대등하게 연결되는지 짝꿍(A)을 찾는 것이 핵심입니다."
          }
        ]
      }
    ]
  },
  {
    "level": 104,
    "levelCode": "sp_vs",
    "levelName": "혼동 문법 VS 특강",
    "targetGrade": "오답률 70% 집중 클리닉",
    "badge": "VS 특강",
    "color": "teal",
    "themeColor": "#0d9488",
    "isSpecial": true,
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
            "underlined": [
              "Don't forget",
              "bringing",
              "your passport",
              "travel abroad"
            ],
            "wrongIndex": 1,
            "correction": "to bring",
            "explanation": "다음 주에 '앞으로 챙겨야 할 일'을 의미하므로 과거를 뜻하는 bringing이 아닌 미래의 to bring을 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 동명사(-ing)만을 목적어로 취하는 동사는?",
            "options": [
              "decide",
              "promise",
              "avoid",
              "hope",
              "agree"
            ],
            "ans": 2,
            "exp": "avoid(피하다)는 동명사만을 목적어로 취하는 동사입니다."
          },
          {
            "q": "빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'I stopped ________ lunch because I was hungry.'\n'He stopped ________ because it was harmful to his health.'",
            "options": [
              "to eat - smoking",
              "eating - to smoke",
              "to eat - to smoke",
              "eating - smoking",
              "to eat - smoke"
            ],
            "ans": 0,
            "exp": "점심을 먹기 위해 멈춘 것은 to eat, 담배 피우던 것을 중단한 것은 smoking입니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'I clearly remember ________ the keys on the kitchen table this morning.'",
            "options": [
              "to leave",
              "leaving",
              "left",
              "leave",
              "leaves"
            ],
            "ans": 1,
            "exp": "오늘 아침에 열쇠를 '놓아두었던 과거의 일'을 기억하는 것이므로 leaving이 맞습니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "She enjoys reading mystery novels.",
              "My father decided to buy an electric car.",
              "He gave up to learn the violin.",
              "Would you mind opening the window?",
              "They promised to arrive on time."
            ],
            "ans": 2,
            "exp": "give up은 동명사를 목적어로 취하므로 gave up learning이어야 합니다."
          },
          {
            "q": "다음 두 문장의 의미 차이로 올바른 것은?\n(A) I tried to move the heavy stone.\n(B) I tried moving the heavy stone.",
            "options": [
              "(A)와 (B)는 동일하다.",
              "(A)는 무거운 돌을 옮기려고 필사적으로 노력한 것이고, (B)는 시험 삼아 한번 옮겨본 것이다.",
              "(A)는 돌을 옮겼고 (B)는 못 옮겼다.",
              "(A)는 돌이 가볍고 (B)는 무겁다.",
              "(B)는 문법 오류다."
            ],
            "ans": 1,
            "exp": "try to V는 노력·애씀, try V-ing는 시험 삼아 시도해 봄을 뜻합니다."
          }
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
            "underlined": [
              "has bought",
              "sports car",
              "three years ago",
              "still drives"
            ],
            "wrongIndex": 0,
            "correction": "bought",
            "explanation": "three years ago라는 명백한 과거 시점 부사구가 있으므로 현재완료 has bought를 쓸 수 없으며 단순과거 bought로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 현재완료(have p.p.) 시제와 함께 쓸 수 없는 부사는?",
            "options": [
              "since last month",
              "for ten years",
              "already",
              "two days ago",
              "ever"
            ],
            "ans": 3,
            "exp": "two days ago처럼 ago가 붙은 표현은 명백한 과거 시점이므로 단순과거 시제와만 쓰입니다."
          },
          {
            "q": "빈칸에 들어갈 말로 가장 적절한 것은?\n'Where is Tom?' / 'He ________ to the supermarket to buy some milk.'",
            "options": [
              "has gone",
              "has been",
              "went ago",
              "goes",
              "have gone"
            ],
            "ans": 0,
            "exp": "지금 여기에 없고 가버렸다는 결과를 나타내므로 has gone이 맞습니다."
          },
          {
            "q": "다음 중 어법상 올바른 문장은?",
            "options": [
              "When have you bought that computer?",
              "I have finished my homework ten minutes ago.",
              "She has lived in Seoul since she was a child.",
              "He has lost his phone yesterday.",
              "They have arrived in London last night."
            ],
            "ans": 2,
            "exp": "since + 과거 시점은 현재완료와 올바르게 결합합니다. (나머지는 when, ago, yesterday, last night으로 과거시제 오류)"
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 적절한 시제는?\n'World War II ________ in 1945.'",
            "options": [
              "has ended",
              "ended",
              "had ended",
              "ends",
              "was ended"
            ],
            "ans": 1,
            "exp": "in 1945는 명백한 역사적 과거 시점이므로 단순과거 ended가 정답입니다."
          },
          {
            "q": "'I have gone to London.' 문장이 어법상 어색한 이유는?",
            "options": [
              "London은 고유명사이기 때문",
              "have gone to는 1인칭 주어(I, We)와 결합할 수 없기 때문",
              "과거분사 형태가 틀렸기 때문",
              "to 대신에 at을 써야 하기 때문",
              "시제가 미래이기 때문"
            ],
            "ans": 1,
            "exp": "have gone to는 '가버려서 지금 여기에 없다'는 뜻이므로 화자 본인(I)을 주어로 쓸 수 없습니다."
          }
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
            "underlined": [
              "found",
              "conclusive evidence",
              "which the suspect",
              "had entered"
            ],
            "wrongIndex": 2,
            "correction": "that the suspect",
            "explanation": "evidence 뒤의 절이 완전한 문장(the suspect had entered the building)이므로 동격의 접속사 that을 써야 하며, which로 대체할 수 없습니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 밑줄 친 'that'의 용법이 나머지 넷과 다른 것은?",
            "options": [
              "I know [that] honesty is the best policy.",
              "She said [that] she was tired.",
              "The man [that] I saw yesterday was tall.",
              "We believe [that] peace is possible.",
              "He promised [that] he would come."
            ],
            "ans": 2,
            "exp": "3번은 목적격 관계대명사이고, 나머지는 모두 동사 뒤에 쓰인 명사절 접속사 that입니다."
          },
          {
            "q": "다음 문장의 밑줄 친 that의 정체는?\n'The news [that] the war had ended brought joy to everyone.'",
            "options": [
              "주격 관계대명사",
              "목적격 관계대명사",
              "동격의 접속사",
              "지시대명사",
              "관계부사 대용"
            ],
            "ans": 2,
            "exp": "The news라는 추상명사 뒤에 완전한 문장이 이어지므로 동격의 접속사입니다."
          },
          {
            "q": "다음 중 관계대명사 which로 바꿔 쓸 수 있는 that은?",
            "options": [
              "I heard the rumor that he got married.",
              "The fact that she failed surprised us.",
              "This is the camera that my uncle gave me.",
              "He told me that he was innocent.",
              "There is no proof that he was there."
            ],
            "ans": 2,
            "exp": "3번의 that은 목적격 관계대명사이므로 which로 바꿔 쓸 수 있습니다. (나머지는 동격 또는 명사절 접속사)"
          },
          {
            "q": "동격의 that 뒤에 이어지는 문장 구조의 특징은?",
            "options": [
              "주어가 없는 불완전한 문장",
              "목적어가 없는 불완전한 문장",
              "완전한 문장",
              "동사원형으로 시작하는 명령문",
              "전치사로 끝나는 문장"
            ],
            "ans": 2,
            "exp": "동격의 that은 접속사이므로 뒤에 완전한 문장이 이어집니다."
          },
          {
            "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'We must accept the truth ________ nobody is perfect.'",
            "options": [
              "which",
              "that",
              "what",
              "whom",
              "whose"
            ],
            "ans": 1,
            "exp": "the truth 뒤에 완전한 문장이 이어지므로 동격의 접속사 that이 알맞습니다."
          }
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
            "underlined": [
              "special tool",
              "is used to",
              "measuring",
              "precise depth"
            ],
            "wrongIndex": 2,
            "correction": "measure",
            "explanation": "도구(tool)가 깊이를 측정하는 데 '사용되다'라는 수동의 뜻이므로 to 뒤에 동사원형 measure를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 빈칸에 들어갈 알맞은 형태는?\n'She has lived in London for five years, so she is used to ________ on the left.'",
            "options": [
              "drive",
              "driving",
              "drove",
              "driven",
              "be drive"
            ],
            "ans": 1,
            "exp": "그녀가 운전하는 것에 '익숙하다'는 뜻이므로 be used to 뒤에 동명사 driving이 와야 합니다."
          },
          {
            "q": "다음 문장의 의미로 올바른 것은?\n'There used to be a large pond in front of my house.'",
            "options": [
              "우리 집 앞에 큰 연못이 지금도 있다.",
              "우리 집 앞에 큰 연못이 예전에는 있었으나 지금은 없다.",
              "우리 집 앞에 큰 연못을 만드는 데 사용된다.",
              "우리 집 앞에 큰 연못에 익숙하다.",
              "우리 집 앞에 큰 연못이 생길 예정이다."
            ],
            "ans": 1,
            "exp": "used to be는 '예전에는 ~가 있었다(지금은 없다)'는 과거의 상태를 나타냅니다."
          },
          {
            "q": "다음 빈칸에 공통으로 들어갈 단어는?\n'Solar energy is used to ________ electricity.'\n'I used to ________ him every Sunday.'",
            "options": [
              "generate - meet",
              "generating - meeting",
              "generated - met",
              "generate - meeting",
              "generating - meet"
            ],
            "ans": 0,
            "exp": "첫 번째는 '발전하는 데 사용되다(동사원형)', 두 번째는 '만나곤 했다(동사원형)'이므로 둘 다 동사원형입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 어색한 것은?",
            "options": [
              "He used to smoke a pack a day.",
              "Knives are used to cut meat.",
              "I am not used to speaking in public.",
              "The money was used to helping the poor.",
              "She used to be very shy as a child."
            ],
            "ans": 3,
            "exp": "돈이 가난한 사람들을 돕는 데 '사용되었다'는 뜻이므로 was used to help로 고쳐야 합니다."
          },
          {
            "q": "'be used to V-ing'와 의미가 가장 가까운 표현은?",
            "options": [
              "be afraid of",
              "be accustomed to",
              "look forward to",
              "be tired of",
              "be capable of"
            ],
            "ans": 1,
            "exp": "be used to -ing는 be accustomed to -ing(~에 익숙하다)와 동의어입니다."
          }
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
            "underlined": [
              "exhausted hiker",
              "laid down",
              "on the soft grass",
              "fell fast asleep"
            ],
            "wrongIndex": 1,
            "correction": "lay down",
            "explanation": "등산객이 스스로 누운 것이며 뒤에 목적어가 없는 자동사의 과거형이 필요하므로 laid(타동사 과거)가 아닌 lay(lie의 과거형)를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 빈칸에 들어갈 형태로 알맞은 것은?\n'Yesterday afternoon, I was so tired that I ________ down on the couch for an hour.'",
            "options": [
              "lay",
              "laid",
              "lied",
              "lain",
              "laying"
            ],
            "ans": 0,
            "exp": "눕다(lie)의 과거형은 lay입니다. (yesterday 과거 시점)"
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 알맞은 단어는?\n'Please ________ the books on the desk carefully.'",
            "options": [
              "lie",
              "lay",
              "laid",
              "lain",
              "lying"
            ],
            "ans": 1,
            "exp": "뒤에 목적어 the books가 있으므로 타동사 원형 lay(~을 놓다)가 정답입니다."
          },
          {
            "q": "다음 3단 변화가 잘못 짝지어진 것은?",
            "options": [
              "lie (눕다) - lay - lain",
              "lay (놓다) - laid - laid",
              "lie (거짓말하다) - lied - lied",
              "rise (오르다) - rose - risen",
              "raise (올리다) - rose - risen"
            ],
            "ans": 4,
            "exp": "raise(올리다)는 규칙 변화인 raise - raised - raised입니다."
          },
          {
            "q": "다음 밑줄 친 부분 중 어법상 틀린 것은?",
            "options": [
              "The hen laid three eggs yesterday.",
              "He has lain in bed for three days.",
              "The dog laid on the floor all day.",
              "She laid her phone on the kitchen table.",
              "Dust lay thick on the old books."
            ],
            "ans": 2,
            "exp": "개가 바닥에 누워있었던 것이므로 자동사 과거형 lay를 써야 합니다. (laid는 타동사 과거)"
          },
          {
            "q": "자동사 lie(눕다)의 현재분사(-ing) 형태 스펠링으로 바른 것은?",
            "options": [
              "lieing",
              "lying",
              "laying",
              "laing",
              "lyeing"
            ],
            "ans": 1,
            "exp": "ie로 끝나는 동사는 ying으로 바뀌므로 lying이 맞습니다."
          }
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
            "underlined": [
              "smartphones",
              "make that possible",
              "for people",
              "to work from anywhere"
            ],
            "wrongIndex": 1,
            "correction": "make it possible",
            "explanation": "5형식 가목적어 자리에는 오직 대명사 it만 올 수 있으므로 that possible을 it possible로 고쳐야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 중 'It ~ that 강조 구문'인 문장은?",
            "options": [
              "It is clear that he is innocent.",
              "It was yesterday that I met him in the park.",
              "It is surprising that she won the race.",
              "It is important that you should be on time.",
              "It was obvious that they were lying."
            ],
            "ans": 1,
            "exp": "It was와 that을 지우면 'Yesterday I met him in the park'라는 완전한 문장이 되므로 강조 구문입니다. (나머지는 가주어/진주어)"
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 가목적어로 알맞은 것은?\n'The internet has made ________ easy to find information.'",
            "options": [
              "this",
              "that",
              "it",
              "them",
              "what"
            ],
            "ans": 2,
            "exp": "가목적어로는 오직 it만 사용 가능합니다."
          },
          {
            "q": "It ~ that 사이에 들어갈 수 없는 것은? (강조 구문 기준)",
            "options": [
              "부사구 (in the park)",
              "주어 명사 (Tom)",
              "목적어 명사 (the book)",
              "형용사 (clear, true)",
              "시간 부사 (yesterday)"
            ],
            "ans": 3,
            "exp": "형용사는 강조 구문의 강조 대상이 될 수 없으며, It is + 형용사 + that은 가주어/진주어 구문입니다."
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "I found it hard to believe his story.",
              "She thought it strange that he was absent.",
              "He made this easy to learn English.",
              "We consider it an honor to be here.",
              "I take it for granted that you agree."
            ],
            "ans": 2,
            "exp": "가목적어 자리에는 this를 쓸 수 없으며 it을 써야 합니다 (made it easy)."
          },
          {
            "q": "It ~ that 강조 구문에서 강조 대상이 사람일 때 that 대신 쓸 수 있는 관계사는?",
            "options": [
              "who",
              "which",
              "where",
              "why",
              "what"
            ],
            "ans": 0,
            "exp": "강조하는 대상이 사람일 때는 that 대신 who를 쓸 수 있습니다."
          }
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
            "underlined": [
              "In spite of",
              "she practiced",
              "day and night",
              "win the gold medal"
            ],
            "wrongIndex": 0,
            "correction": "Although (또는 Even though)",
            "explanation": "뒤에 'she(주어) + practiced(동사)'의 절이 이어지므로 전치사 In spite of가 아니라 접속사 Although를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 빈칸에 들어갈 말이 순서대로 알맞은 것은?\n'We went hiking ________ the heavy rain.'\n'We went hiking ________ it rained heavily.'",
            "options": [
              "despite - although",
              "although - despite",
              "because - because of",
              "during - while",
              "despite - because of"
            ],
            "ans": 0,
            "exp": "첫 번째는 명사구(the heavy rain) 앞이므로 전치사 despite, 두 번째는 절(it rained) 앞이므로 접속사 although입니다."
          },
          {
            "q": "다음 중 전치사 'during'만 들어갈 수 있는 빈칸은?",
            "options": [
              "He stayed in Paris ________ three weeks.",
              "I met him ________ I was walking in the park.",
              "The fire broke out ________ the night.",
              "She worked ________ five years.",
              "We waited ________ thirty minutes."
            ],
            "ans": 2,
            "exp": "the night라는 특정 기간 명사 앞에는 during이 옵니다. (숫자 기간 앞에는 for, 절 앞에는 while)"
          },
          {
            "q": "다음 중 어법상 틀린 문장은?",
            "options": [
              "I couldn't sleep because of the noise.",
              "Despite of the cold weather, we went outside.",
              "Although he was poor, he was happy.",
              "While she was reading, her brother watched TV.",
              "Due to a sudden illness, he canceled the trip."
            ],
            "ans": 1,
            "exp": "despite는 of를 붙이지 않습니다. In spite of 또는 Despite로 써야 합니다."
          },
          {
            "q": "다음 빈칸에 들어갈 수 없는 것은?\n'________ the heavy traffic, we arrived late.'",
            "options": [
              "Because of",
              "Due to",
              "Owing to",
              "Because",
              "On account of"
            ],
            "ans": 3,
            "exp": "뒤에 명사구 the heavy traffic만 있으므로 접속사 Because는 올 수 없습니다."
          },
          {
            "q": "다음 문장의 빈칸에 알맞은 것은?\n'________ he is young, he is very wise.'",
            "options": [
              "Despite",
              "In spite of",
              "Although",
              "Because of",
              "During"
            ],
            "ans": 2,
            "exp": "뒤에 'he is young'이라는 절이 이어지므로 접속사 Although가 정답입니다."
          }
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
            "underlined": [
              "Neither of",
              "the two candidates",
              "were qualified",
              "executive position"
            ],
            "wrongIndex": 2,
            "correction": "was qualified",
            "explanation": "Neither of + 복수명사는 문법적으로 단수 취급하므로 복수 동사 were가 아니라 단수 동사 was를 써야 합니다."
          }
        ],
        "questions": [
          {
            "q": "다음 문장의 의미로 가장 올바른 것은?\n'Not all glittering things are gold.'",
            "options": [
              "반짝이는 것은 모두 금이다.",
              "반짝이는 것은 모두 금이 아니다.",
              "반짝이는 것이 다 금인 것은 아니다. (금인 것도 있고 아닌 것도 있다)",
              "금은 절대로 반짝이지 않는다.",
              "반짝이지 않는 것이 진짜 금이다."
            ],
            "ans": 2,
            "exp": "not all은 부분부정으로 '모두가 ~인 것은 아니다'를 의미합니다."
          },
          {
            "q": "다음 중 '완전부정(둘 다 아니다)'을 나타내는 문장은?",
            "options": [
              "I don't know both of them.",
              "Neither of them knows the answer.",
              "Not all of them agreed.",
              "He is not always kind.",
              "Rich people are not necessarily happy."
            ],
            "ans": 1,
            "exp": "Neither of them은 '둘 다 아니다'라는 완전부정입니다. (1, 3, 4, 5번은 모두 부분부정)"
          },
          {
            "q": "다음 빈칸에 들어갈 말로 알맞은 것은?\n'Expensive clothes are not ________ better in quality.'",
            "options": [
              "necessarily",
              "none",
              "neither",
              "never",
              "no"
            ],
            "ans": 0,
            "exp": "not necessarily는 '반드시 ~인 것은 아니다'라는 부분부정 표현입니다."
          },
          {
            "q": "다음 문장의 빈칸에 들어갈 동사의 형태로 알맞은 것은?\n'Neither of my parents ________ English.'",
            "options": [
              "speak",
              "speaks",
              "are speaking",
              "were speak",
              "have spoken"
            ],
            "ans": 1,
            "exp": "Neither of + 복수명사는 단수 취급하므로 3인칭 단수 현재형 speaks가 알맞습니다."
          },
          {
            "q": "'그녀는 항상 늦는 것은 아니다 (가끔 제시간에 온다)'를 영작할 때 가장 알맞은 표현은?",
            "options": [
              "She is never late.",
              "She is always late.",
              "She is not always late.",
              "No one is late.",
              "Neither is late."
            ],
            "ans": 2,
            "exp": "not always가 '항상 ~인 것은 아니다'라는 부분부정 표현입니다."
          }
        ]
      }
    ]
  }
];
