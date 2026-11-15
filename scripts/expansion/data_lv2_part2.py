# -*- coding: utf-8 -*-
"""
Level 2 (중2 문법) Units 15 ~ 20.
Unit 15: by 이외의 전치사를 쓰는 관용적 수동태
Unit 16: 주격 관계대명사 (who, which, that)와 수일치
Unit 17: 목적격 관계대명사의 생략과 전치사 동반
Unit 18: 소유격 관계대명사 whose와 that의 특별용법
Unit 19: 부사절 접속사 (because, if, although, unless)
Unit 20: to-V vs V-ing 의미 변화 동사 (remember, forget, stop, try)
"""

LV2_PART2 = [
    # Unit 15: by 이외의 전치사를 쓰는 수동태
    {
        "unitNo": 15,
        "unitId": "lv2_u15",
        "legacyUnitNo": 27,
        "title": "by 이외의 전치사를 쓰는 관용적 수동태",
        "part": "태의 심화",
        "targetGrade": "중2 내신 대비",
        "summary": "행위자 by 대신 at, with, in, of, to 등의 전치사를 쓰는 필수 관용 수동태 표현 총정리",
        "overview": "수동태라고 해서 무조건 by만 쓰는 게 아니에요! 'be surprised at(~에 놀라다)', 'be covered with(~로 덮이다)'처럼 특정 전치사와 단짝을 이루어 마치 하나의 숙어처럼 굳어진 표현들이 있어요. 중2 내신 단골 암기 1순위 관용 수동태를 완벽히 정복해 봅시다!",
        "keyTakeaways": [
            "감정/놀람: be surprised at (~에 놀라다), be pleased with (~에 기뻐하다)",
            "재료/상태: be covered with (~로 덮이다), be filled with (~로 가득 차다), be made of/from (~로 만들어지다)",
            "흥미/인지: be interested in (~에 관심이 있다), be known to (~에게 알려지다) / for (~로 유명하다)"
        ],
        "formulaCards": [
            {
                "name": "감정과 상태를 나타내는 관용 수동태",
                "formula": "be surprised at | be satisfied with | be covered with | be filled with",
                "examples": [
                    {
                        "en": "The high mountain peak is covered with pure white snow.",
                        "ko": "높은 산봉우리는 순백의 눈으로 덮여 있다.",
                        "point": "눈으로 덮여 있는 상태에는 전치사 with를 씁니다."
                    },
                    {
                        "en": "We were very surprised at the sudden bad news yesterday.",
                        "ko": "우리는 어제 그 갑작스러운 나쁜 소식에 몹시 놀랐다.",
                        "point": "원인에 대한 놀람에는 전치사 at을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "The room was filled with colorful balloons.",
                    "x": "The room was filled by colorful balloons.",
                    "comment": "풍선으로 가득 찬 상태를 나타낼 때는 by가 아니라 with를 씁니다."
                },
                "trap": "be made of (물리적 변화: 나무 책상) vs be made from (화학적 변화: 포도주) 구별!",
                "quizLink": "관용 수동태는 중학교 내신 빈칸 채우기 단골 킬러 문제입니다."
            },
            {
                "name": "인지와 명성을 나타내는 관용 수동태",
                "formula": "be interested in | be known to(대상) | be known for(이유)",
                "examples": [
                    {
                        "en": "She is deeply interested in studying modern history.",
                        "ko": "그녀는 현대사를 공부하는 데 깊은 관심을 가지고 있다.",
                        "point": "관심이나 흥미에는 전치사 in을 씁니다."
                    },
                    {
                        "en": "The small island is known for its beautiful coral reefs.",
                        "ko": "그 작은 섬은 아름다운 산호초로 유명하다.",
                        "point": "유명한 이유나 특산물 앞에는 전치사 for를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He is known to everyone in the neighborhood.",
                    "x": "He is known with everyone in the neighborhood.",
                    "comment": "~에게 알려져 있다는 대상에는 전치사 to를 씁니다."
                },
                "trap": "be tired of (~에 실증나다) vs be tired from (~로 피곤하다) 뉘앙스 차이 주의!",
                "quizLink": "전치사 in, at, with, of, to를 정확한 짝꿍끼리 연결하는 것이 핵심입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u15_d1",
                "missionTitle": "미션 1: be covered with 전치사 by 오용 수정",
                "sentence": "The old stone wall was completely covered by green leaves.",
                "korean": "그 오래된 돌담은 초록색 담쟁이 잎들로 완전히 덮여 있었다.",
                "underlined": ["The old stone wall", "was completely", "covered by", "green leaves"],
                "wrongIndex": 2,
                "correction": "covered with",
                "explanation": "~로 덮여 있다는 관용 수동태는 covered by가 아니라 covered with를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 감정과 상태의 관용 수동태] 출제 연계"
            },
            {
                "id": "lv2_u15_d2",
                "missionTitle": "미션 2: be interested in 전치사 at 오용 수정",
                "sentence": "Many young students are interested at science experiments.",
                "korean": "많은 어린 학생들은 과학 실험에 관심이 있다.",
                "underlined": ["Many young students", "are interested at", "science", "experiments"],
                "wrongIndex": 1,
                "correction": "are interested in",
                "explanation": "~에 관심이 있다는 표현은 be interested in이 올바른 짝꿍 전치사입니다.",
                "conceptRef": "1단계 [공식 2: 인지와 명성의 관용 수동태] 출제 연계"
            },
            {
                "id": "lv2_u15_d3",
                "missionTitle": "미션 3: be surprised at 전치사 with 오용 수정",
                "sentence": "We were all surprised with the shocking ending of the movie.",
                "korean": "우리 모두는 그 영화의 충격적인 결말에 놀랐다.",
                "underlined": ["We were all", "surprised with", "the shocking ending", "of the movie"],
                "wrongIndex": 1,
                "correction": "surprised at",
                "explanation": "소식이나 결말에 놀랄 때는 surprised with가 아니라 surprised at을 씁니다.",
                "conceptRef": "1단계 [공식 1: 감정과 상태의 관용 수동태] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 전치사로 알맞은 것은?\n\n'The ground was covered ______ white snow.'",
                "options": ["by", "with", "at", "in", "to"],
                "ans": 2,
                "exp": "be covered with가 '~로 덮이다'의 올바른 관용 표현입니다.",
                "conceptRef": "1단계 [공식 1: 감정과 상태의 관용 수동태]"
            },
            {
                "q": "다음 빈칸에 들어갈 말이 바르게 짝지어진 것은?\n\n- 'She is interested ______ Korean food.'\n- 'I was surprised ______ his sudden visit.'",
                "options": ["in - at", "at - in", "with - at", "in - with", "of - at"],
                "ans": 1,
                "exp": "interested in, surprised at이 올바른 짝꿍입니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            },
            {
                "q": "다음 중 밑줄 친 전치사의 쓰임이 어색한 문장은?",
                "options": [
                    "The basket was filled with apples.",
                    "He is known to everyone.",
                    "Jeju Island is known for its hallabong.",
                    "I was satisfied at the result.",
                    "Wine is made from grapes."
                ],
                "ans": 4,
                "exp": "satisfied는 at이 아니라 with와 어울려 be satisfied with(~에 만족하다)로 씁니다.",
                "conceptRef": "1단계 [공식 1: 감정과 상태의 관용 수동태]"
            },
            {
                "q": "'이 탁자는 나무로 만들어졌다.'를 영작할 때 빈칸에 알맞은 전치사는?\n\n'This table is made ______ wood.'",
                "options": ["from", "of", "with", "by", "in"],
                "ans": 2,
                "exp": "재료의 성질이 그대로 남아있는 물리적 변화에는 be made of를 씁니다.",
                "conceptRef": "1단계 [공식 1: 감정과 상태의 관용 수동태]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 말로 알맞은 것은?\n\n'He is tired ______ doing the same boring work every day.'",
                "options": ["at", "with", "of", "to", "for"],
                "ans": 3,
                "exp": "be tired of는 '~에 실증나다, 질리다'라는 숙어입니다.",
                "conceptRef": "1단계 [공식 2: 인지와 명성의 관용 수동태]"
            }
        ]
    },

    # Unit 16: 주격 관계대명사 (who, which, that)
    {
        "unitNo": 16,
        "unitId": "lv2_u16",
        "legacyUnitNo": 28,
        "title": "주격 관계대명사 (who, which, that)와 수일치",
        "part": "관계사의 기초",
        "targetGrade": "중2 내신 대비",
        "summary": "접속사 + 대명사 역할을 하여 명사(선행사)를 수식하는 주격 관계대명사의 선택과 관계사절 동사의 수일치 공식",
        "overview": "두 문장을 합치면서 앞의 명사(선행사)를 친절하게 설명해 주는 문법의 꽃, '관계대명사'예요! 사람이면 who, 사물이면 which, 둘 다 되는 that! 그리고 관계대명사 바로 뒤에 나오는 동사는 선행사의 단수/복수에 맞춘다는 내신 킬러 공식을 파헤쳐 봅시다!",
        "keyTakeaways": [
            "주격 관계대명사: 관계사절 안에서 '주어' 역할 (뒤에 바로 동사가 옴)",
            "선행사에 따른 구분: 사람 ➔ who / 사물·동물 ➔ which / 사람·사물 공통 ➔ that",
            "★선행사-동사 수일치: 관계대명사절의 동사는 앞의 '선행사'의 수와 일치시킨다!"
        ],
        "formulaCards": [
            {
                "name": "주격 관계대명사의 선택과 기본 어순",
                "formula": "선행사(사람) + who/that + 동사 | 선행사(사물) + which/that + 동사",
                "examples": [
                    {
                        "en": "I know a talented boy who plays the guitar brilliantly.",
                        "ko": "나는 기타를 아주 훌륭하게 연주하는 재능 있는 소년 하나를 알고 있다.",
                        "point": "선행사 a boy(사람, 단수) 뒤에 who + 3인칭 단수동사 plays가 왔습니다."
                    },
                    {
                        "en": "Look at the pretty cat which is sitting on the garden wall.",
                        "ko": "정원 담장 위에 앉아 있는 저 예쁜 고양이를 보아라.",
                        "point": "선행사 the pretty cat(동물, 단수) 뒤에 which is가 왔습니다."
                    }
                ],
                "oxCompare": {
                    "o": "The girl who lives next door is very kind.",
                    "x": "The girl which lives next door is very kind.",
                    "comment": "The girl은 사람이므로 사물에 쓰는 which가 아니라 who나 that을 써야 합니다."
                },
                "trap": "주격 관계대명사 뒤에 다시 주어 대명사(who he lives)를 쓰면 절대 안 됩니다!",
                "quizLink": "주격 관계대명사는 생략할 수 없지만, '주격관대 + be동사'는 통째로 생략 가능합니다."
            },
            {
                "name": "관계사절 동사의 선행사 수일치 공식",
                "formula": "단수 선행사 ➔ 단수동사(is, -s) | 복수 선행사 ➔ 복수동사(are, 원형)",
                "examples": [
                    {
                        "en": "I like stories that have happy endings.",
                        "ko": "나는 행복한 결말을 가진 이야기들을 좋아한다.",
                        "point": "선행사 stories가 복수이므로 that 뒤의 동사도 복수형 have를 씁니다."
                    },
                    {
                        "en": "She has a friendly uncle who lives in New York.",
                        "ko": "그녀는 뉴욕에 살고 계시는 다정한 삼촌 한 분이 있다.",
                        "point": "선행사 an uncle이 단수이므로 who 뒤에 단수동사 lives가 옵니다."
                    }
                ],
                "oxCompare": {
                    "o": "Students who study hard will succeed.",
                    "x": "Students who studies hard will succeed.",
                    "comment": "선행사 Students가 복수이므로 who 뒤의 동사는 studies가 아니라 study입니다."
                },
                "trap": "who 자체는 단수/복수 표시가 없으므로 무조건 앞의 '선행사'를 확인해야 합니다.",
                "quizLink": "중2 내신 객관식에서 관계사절 동사의 -s 누락/오용은 매년 100% 출제됩니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u16_d1",
                "missionTitle": "미션 1: 관계사절 동사의 선행사 수일치 오류",
                "sentence": "I have two close friends who lives in the same apartment building.",
                "korean": "나는 같은 아파트 동에 살고 있는 두 명의 친한 친구가 있다.",
                "underlined": ["I have", "two close friends", "who lives in", "the same apartment building"],
                "wrongIndex": 2,
                "correction": "who live in",
                "explanation": "선행사 two close friends가 복수이므로 who 뒤의 동사도 단수가 아닌 복수형 live가 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: 선행사 수일치 공식] 출제 연계"
            },
            {
                "id": "lv2_u16_d2",
                "missionTitle": "미션 2: 사람 선행사 앞 which 오용 수정",
                "sentence": "The friendly doctor which treated my arm was very kind.",
                "korean": "내 팔을 치료해 주신 그 친절한 의사 선생님은 매우 다정하셨다.",
                "underlined": ["The friendly doctor", "which treated", "my arm", "was very kind"],
                "wrongIndex": 1,
                "correction": "who treated (or that treated)",
                "explanation": "선행사가 The friendly doctor(사람)이므로 사물에 쓰는 which 대신 who나 that을 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 주격 관계대명사 선택] 출제 연계"
            },
            {
                "id": "lv2_u16_d3",
                "missionTitle": "미션 3: 주격 관계사절 내 중복 대명사 오류",
                "sentence": "She loves the puppy that it has big brown eyes.",
                "korean": "그녀는 크고 갈색인 눈을 가진 그 강아지를 아주 사랑한다.",
                "underlined": ["She loves", "the puppy", "that it has", "big brown eyes"],
                "wrongIndex": 2,
                "correction": "that has",
                "explanation": "that이 이미 주어 역할을 하므로 뒤에 대명사 it을 중복해서 쓰면 안 됩니다.",
                "conceptRef": "1단계 [공식 1: 주격 관계대명사 선택] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 공통으로 들어갈 수 있는 관계대명사는?\n\n- 'The boy ______ is singing is my brother.'\n- 'The book ______ is on the desk is mine.'",
                "options": ["who", "which", "that", "whom", "whose"],
                "ans": 3,
                "exp": "사람 선행사와 사물 선행사에 모두 쓸 수 있는 주격 관계대명사는 that입니다.",
                "conceptRef": "1단계 [공식 1: 주격 관계대명사 선택]"
            },
            {
                "q": "다음 두 문장을 한 문장으로 바르게 합친 것은?\n\n'I know a girl.' + 'She speaks four languages.'",
                "options": [
                    "I know a girl which speaks four languages.",
                    "I know a girl who speaks four languages.",
                    "I know a girl whom speaks four languages.",
                    "I know a girl who she speaks four languages.",
                    "I know a girl whose speaks four languages."
                ],
                "ans": 2,
                "exp": "선행사가 a girl(사람)이고 주어 역할을 하므로 who speaks가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 주격 관계대명사 선택]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "The dog that barked was mine.",
                    "I met a woman who lives next door.",
                    "He bought a watch who is very expensive.",
                    "Look at the birds that are flying.",
                    "The car which stopped was black."
                ],
                "ans": 3,
                "exp": "a watch는 사물이므로 who가 아니라 which나 that을 써야 합니다.",
                "conceptRef": "1단계 [공식 1: 주격 관계대명사 선택]"
            },
            {
                "q": "다음 빈칸에 들어갈 동사의 형태가 알맞은 것은?\n\n'The flowers that ______ on the hill are beautiful.'",
                "options": ["grow", "grows", "growing", "grown", "to grow"],
                "ans": 1,
                "exp": "선행사 The flowers가 복수이므로 복수동사 grow가 정답입니다.",
                "conceptRef": "1단계 [공식 2: 선행사 수일치 공식]"
            },
            {
                "q": "'내 방을 청소한 소년은 내 동생이다.'를 바르게 영작한 것은?",
                "options": [
                    "The boy which cleaned my room is my brother.",
                    "The boy who cleaned my room is my brother.",
                    "The boy who he cleaned my room is my brother.",
                    "The boy whom cleaned my room is my brother.",
                    "The boy whose cleaned my room is my brother."
                ],
                "ans": 2,
                "exp": "The boy who cleaned my room is my brother가 올바른 영작입니다.",
                "conceptRef": "1단계 [공식 1: 주격 관계대명사 선택]"
            }
        ]
    },

    # Unit 17: 목적격 관계대명사와 생략
    {
        "unitNo": 17,
        "unitId": "lv2_u17",
        "legacyUnitNo": 29,
        "title": "목적격 관계대명사의 생략과 전치사 동반",
        "part": "관계사의 기초",
        "targetGrade": "중2 내신 대비",
        "summary": "관계사절 내에서 목적어 역할을 하는 whom/which/that과 목적격 관계대명사의 단독 생략 및 전치사의 위치 이동",
        "overview": "'내가 어제 만났던 그 사람'처럼 관계사절 안에서 목적어 자리가 비어있을 때 목적격 관계대명사를 써요! 목적격 관계대명사는 언제든지 쿨하게 생략할 수 있다는 점과, 절 끝의 전치사가 관계대명사 바로 앞으로 이사 오는 고난도 규칙을 배워봅시다!",
        "keyTakeaways": [
            "목적격 관계대명사: 선행사 뒤에서 목적어 역할 (whom/who, which, that)",
            "★단독 생략 가능: The movie (that) I watched was fun.",
            "전치사 동반: 전치사가 앞으로 오면 that 사용 불가! (to whom, with which)"
        ],
        "formulaCards": [
            {
                "name": "목적격 관계대명사의 역할과 생략",
                "formula": "선행사 + (whom/which/that) + 주어 + 타동사 (목적어 자리 비어있음)",
                "examples": [
                    {
                        "en": "The delicious cake that my mother baked was so sweet.",
                        "ko": "어머니께서 구워주신 그 맛있는 케이크는 정말 달콤했다.",
                        "point": "baked 뒤의 목적어가 빠져 있으므로 that은 목적격 관계대명사이며 생략 가능합니다."
                    },
                    {
                        "en": "The man whom I met at the station was a famous singer.",
                        "ko": "내가 역에서 만났던 그 남자는 유명한 가수였다.",
                        "point": "사람 목적격 선행사에 whom(또는 who/that)을 썼습니다."
                    }
                ],
                "oxCompare": {
                    "o": "This is the book I wanted to read.",
                    "x": "This is the book which I wanted to read it.",
                    "comment": "which가 목적어 역할을 하므로 뒤에 중복 대명사 it을 남겨두면 비문이 됩니다."
                },
                "trap": "관계사절 끝에 목적어 대명사(it, them, him)를 그대로 남겨두는 실수가 가장 많습니다.",
                "quizLink": "'명사 + 주어 + 동사' 어순이 나오면 목적격 관계대명사가 생략된 구조입니다."
            },
            {
                "name": "전치사가 관계대명사 앞으로 올 때의 규칙",
                "formula": "전치사 + whom / which (전치사 + that은 절대 불가!)",
                "examples": [
                    {
                        "en": "This is the comfortable chair on which I sat yesterday.",
                        "ko": "이것은 내가 어제 앉았던 편안한 의자이다.",
                        "point": "sat on의 전치사 on이 관계대명사 앞으로 이동한 on which 구조입니다."
                    },
                    {
                        "en": "The girl with whom I studied was very smart.",
                        "ko": "내가 함께 공부했던 그 소녀는 매우 영리했다.",
                        "point": "전치사 with 뒤에는 목적격 형태인 whom을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "This is the house in which he lives.",
                    "x": "This is the house in that he lives.",
                    "comment": "전치사 바로 뒤에는 관계대명사 that을 절대 쓸 수 없습니다."
                },
                "trap": "전치사가 관계대명사 바로 앞에 있을 때는 관계대명사를 생략할 수 없습니다!",
                "quizLink": "전치사 + which/whom은 시험에서 100% 빈출되는 수능 연계 핵심 어법입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u17_d1",
                "missionTitle": "미션 1: 목적격 관계사절 내 중복 목적어 오류",
                "sentence": "This is the brand-new bicycle that my father bought it for me.",
                "korean": "이것은 우리 아버지께서 나를 위해 사주신 바로 그 새 자전거이다.",
                "underlined": ["This is", "the brand-new bicycle", "that my father bought it", "for me"],
                "wrongIndex": 2,
                "correction": "that my father bought",
                "explanation": "that이 이미 목적어 역할을 하므로 동사 bought 뒤의 대명사 it을 삭제해야 합니다.",
                "conceptRef": "1단계 [공식 1: 목적격 관계대명사의 역할] 출제 연계"
            },
            {
                "id": "lv2_u17_d2",
                "missionTitle": "미션 2: 전치사 바로 뒤 관계대명사 that 오용 수정",
                "sentence": "This is the cozy hotel in that we stayed during our trip.",
                "korean": "이곳은 우리가 여행 동안 머물렀던 아늑한 호텔이다.",
                "underlined": ["This is", "the cozy hotel", "in that we stayed", "during our trip"],
                "wrongIndex": 2,
                "correction": "in which we stayed",
                "explanation": "전치사 in 바로 뒤에는 관계대명사 that을 쓸 수 없으므로 in which로 고쳐야 합니다.",
                "conceptRef": "1단계 [공식 2: 전치사 동반 규칙] 출제 연계"
            },
            {
                "id": "lv2_u17_d3",
                "missionTitle": "미션 3: 전치사 뒤 목적격 whom 대신 주격 who 오용",
                "sentence": "The kind lady to who I spoke on the train was a doctor.",
                "korean": "기차에서 내가 이야기를 나누었던 그 친절한 여성은 의사였다.",
                "underlined": ["The kind lady", "to who I spoke", "on the train", "was a doctor"],
                "wrongIndex": 1,
                "correction": "to whom I spoke",
                "explanation": "전치사 to 뒤에 올 때는 who가 아니라 목적격인 to whom을 써야 합니다.",
                "conceptRef": "1단계 [공식 2: 전치사 동반 규칙] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 문장에서 생략할 수 있는 단어는?\n\n'The watch which my grandfather gave me was very old.'",
                "options": ["The", "which", "my", "was", "very"],
                "ans": 2,
                "exp": "which는 목적격 관계대명사이므로 단독으로 생략할 수 있습니다.",
                "conceptRef": "1단계 [공식 1: 목적격 관계대명사의 역할]"
            },
            {
                "q": "다음 빈칸에 들어갈 수 없는 것은?\n\n'The house in ______ he lives is very big.'",
                "options": ["which", "that", "whom", "where", "what"],
                "ans": 2,
                "exp": "전치사(in) 바로 뒤에는 관계대명사 that을 절대 쓸 수 없습니다.",
                "conceptRef": "1단계 [공식 2: 전치사 동반 규칙]"
            },
            {
                "q": "다음 두 문장을 한 문장으로 바르게 합친 것은?\n\n'I lost the umbrella.' + 'My mother bought it yesterday.'",
                "options": [
                    "I lost the umbrella which my mother bought it yesterday.",
                    "I lost the umbrella which my mother bought yesterday.",
                    "I lost the umbrella who my mother bought yesterday.",
                    "I lost the umbrella what my mother bought yesterday.",
                    "I lost the umbrella in which my mother bought yesterday."
                ],
                "ans": 2,
                "exp": "목적어 it을 생략하고 which my mother bought yesterday로 연결한 2번이 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 목적격 관계대명사의 역할]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "The book I read was exciting.",
                    "The girl whom I met was kind.",
                    "This is the town where I was born.",
                    "The music that I listened to it was great.",
                    "The friend with whom I traveled was Tom."
                ],
                "ans": 4,
                "exp": "listened to 뒤의 it이 삭제되어야 올바른 목적격 관계대명사절이 됩니다.",
                "conceptRef": "1단계 [공식 1: 목적격 관계대명사의 역할]"
            },
            {
                "q": "'이것은 내가 찾고 있던 펜이다.'를 바르게 영작한 것은?",
                "options": [
                    "This is the pen which I was looking for it.",
                    "This is the pen for that I was looking.",
                    "This is the pen which I was looking for.",
                    "This is the pen who I was looking for.",
                    "This is the pen I was looking it."
                ],
                "ans": 3,
                "exp": "look for의 목적어가 빠진 which I was looking for가 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 목적격 관계대명사의 역할]"
            }
        ]
    },

    # Unit 18: 소유격 관계대명사 whose와 that의 특별용법
    {
        "unitNo": 18,
        "unitId": "lv2_u18",
        "legacyUnitNo": 30,
        "title": "소유격 관계대명사 whose와 that의 특별용법",
        "part": "관계사의 심화",
        "targetGrade": "중2 내신 대비",
        "summary": "선행사의 소유(~의)를 나타내는 whose + 명사 구조와 최상급/서수/all 등이 선행사일 때 that을 주로 쓰는 규정",
        "overview": "'지붕이 빨간 저 집을 봐', '개가 아픈 소년'처럼 앞 명사의 소유물이나 특징을 설명할 때는 소유격 관계대명사 whose를 써요! whose 뒤에는 관사(a/the) 없는 순수 명사가 온다는 비밀과, 관계대명사 that만을 써야 하는 특별한 경우를 정복해 봅시다!",
        "keyTakeaways": [
            "소유격 관계대명사 whose: 사람·사물 공통으로 '~의'의 뜻 (선행사 + whose + 무관사 명사)",
            "whose 뒤의 문장 구조: 겉보기에는 완전한 문장처럼 보임 (whose roof is red)",
            "that을 주로 쓰는 선행사: 사람+사물, 최상급, 서수(first), all, every, no, -thing, the only, the very"
        ],
        "formulaCards": [
            {
                "name": "소유격 관계대명사 whose의 쓰임",
                "formula": "선행사 + whose + 명사 + 동사 (선행사의 ~가 …하다)",
                "examples": [
                    {
                        "en": "I helped a crying boy whose bicycle was broken.",
                        "ko": "나는 자전거가 고장 나서 울고 있는 한 소년을 도와주었다.",
                        "point": "소년의 자전거(his bicycle)이므로 whose bicycle로 연결했습니다."
                    },
                    {
                        "en": "Look at the pretty house whose roof is bright red.",
                        "ko": "지붕이 밝은 빨간색인 저 예쁜 집을 보아라.",
                        "point": "사물(house)의 소유격에도 whose를 쓸 수 있습니다."
                    }
                ],
                "oxCompare": {
                    "o": "She has a cat whose eyes are blue.",
                    "x": "She has a cat whose the eyes are blue.",
                    "comment": "whose 뒤의 명사 앞에는 정관사 the나 관사 a를 절대 붙이지 않습니다."
                },
                "trap": "whose 뒤에 the를 붙여놓은 보기는 대표적인 중2 어법 오답 트랩입니다.",
                "quizLink": "whose 뒤에는 주격/목적격과 달리 완전한 절의 형태가 이어지는 것이 특징입니다."
            },
            {
                "name": "관계대명사 that을 주로 쓰는 선행사",
                "formula": "최상급 / 서수 / all / every / the only / 사람+동물 ➔ that 선호",
                "examples": [
                    {
                        "en": "Look at the cheerful boy and his dog that are running.",
                        "ko": "달리고 있는 유쾌한 소년과 그의 개를 보아라.",
                        "point": "사람(boy)과 동물(dog)이 함께 선행사이므로 who나 which 대신 that을 씁니다."
                    },
                    {
                        "en": "This is the most exciting movie that I have ever watched.",
                        "ko": "이것은 내가 여태까지 보았던 가장 흥미진진한 영화이다.",
                        "point": "최상급 the most exciting이 선행사를 꾸밀 때는 that을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He gave me all that he had.",
                    "x": "He gave me all which he had.",
                    "comment": "선행사가 all일 때는 which보다 that을 쓰는 것이 규정입니다."
                },
                "trap": "that 앞에는 콤마(,)와 전치사를 절대 쓸 수 없다는 예외를 기억하세요!",
                "quizLink": "the only(유일한), the very(바로 그), all, -thing 뒤에는 that이 정답입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u18_d1",
                "missionTitle": "미션 1: whose 뒤 불필요한 관사 the 오류 수정",
                "sentence": "I met an old man whose the hair was completely white.",
                "korean": "나는 머리카락이 온통 하얀 한 노인을 만났다.",
                "underlined": ["I met", "an old man", "whose the hair was", "completely white"],
                "wrongIndex": 2,
                "correction": "whose hair was",
                "explanation": "소유격 관계대명사 whose 뒤의 명사 앞에는 관사 the를 붙이지 않으므로 whose hair가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 소유격 whose의 쓰임] 출제 연계"
            },
            {
                "id": "lv2_u18_d2",
                "missionTitle": "미션 2: 사람+동물 혼합 선행사 관계사 오류",
                "sentence": "Look at the brave police officer and his horse which are patrolling the street.",
                "korean": "순찰하고 있는 용감한 경찰관과 그의 말을 보아라.",
                "underlined": ["Look at", "the brave police officer and his horse", "which are patrolling", "the street"],
                "wrongIndex": 2,
                "correction": "that are patrolling",
                "explanation": "선행사에 사람(police officer)과 동물(horse)이 함께 있으므로 which 대신 that을 써야 합니다.",
                "conceptRef": "1단계 [공식 2: that의 특별용법] 출제 연계"
            },
            {
                "id": "lv2_u18_d3",
                "missionTitle": "미션 3: 소유격 관계대명사 자리 who 오용 수정",
                "sentence": "She has a rich uncle who house has a huge swimming pool.",
                "korean": "그녀는 집(그 삼촌의 집)에 거대한 수영장이 딸린 부유한 삼촌이 있다.",
                "underlined": ["She has", "a rich uncle", "who house has", "a huge swimming pool"],
                "wrongIndex": 2,
                "correction": "whose house has",
                "explanation": "삼촌의 집(his house)을 대신하는 자리이므로 주격 who가 아니라 소유격 whose가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 소유격 whose의 쓰임] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 두 문장을 한 문장으로 바르게 합친 것은?\n\n'I know a girl.' + 'Her dog is very smart.'",
                "options": [
                    "I know a girl who dog is very smart.",
                    "I know a girl whose dog is very smart.",
                    "I know a girl whom dog is very smart.",
                    "I know a girl which dog is very smart.",
                    "I know a girl whose the dog is very smart."
                ],
                "ans": 2,
                "exp": "소유격 her dog를 대신하여 whose dog로 연결한 2번이 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 소유격 whose의 쓰임]"
            },
            {
                "q": "다음 빈칸에 들어갈 가장 알맞은 관계대명사는?\n\n'Look at the boy and the dog ______ are playing in the park.'",
                "options": ["who", "which", "that", "whose", "whom"],
                "ans": 3,
                "exp": "사람과 동물이 함께 선행사일 때는 관계대명사 that을 씁니다.",
                "conceptRef": "1단계 [공식 2: that의 특별용법]"
            },
            {
                "q": "다음 중 관계대명사 that을 쓰는 것이 가장 자연스러운 문장은?",
                "options": [
                    "This is the first book ______ I read.",
                    "The boy ______ lives here is Tom.",
                    "The apple ______ is on the plate is sweet.",
                    "I met a friend ______ speaks French.",
                    "She lost the ring ______ was silver."
                ],
                "ans": 1,
                "exp": "선행사에 서수 the first가 포함되어 있으므로 that을 쓰는 것이 원칙입니다.",
                "conceptRef": "1단계 [공식 2: that의 특별용법]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "I have a friend whose father is a pilot.",
                    "This is the only thing that I want.",
                    "She is the tallest girl who lives in this town.",
                    "He is a boy whose eyes are blue.",
                    "All that glitters is not gold."
                ],
                "ans": 3,
                "exp": "최상급 the tallest가 선행사를 꾸밀 때는 who보다 that을 쓰는 것이 자연스럽습니다.",
                "conceptRef": "1단계 [공식 2: that의 특별용법]"
            },
            {
                "q": "'나는 지붕이 파란 집을 보았다.'를 바르게 영작한 것은?",
                "options": [
                    "I saw a house which roof was blue.",
                    "I saw a house whose roof was blue.",
                    "I saw a house whose the roof was blue.",
                    "I saw a house who roof was blue.",
                    "I saw a house that roof was blue."
                ],
                "ans": 2,
                "exp": "whose roof was blue가 올바른 소유격 관계대명사 구문입니다.",
                "conceptRef": "1단계 [공식 1: 소유격 whose의 쓰임]"
            }
        ]
    },

    # Unit 19: 부사절 접속사 (because, if, although, unless)
    {
        "unitNo": 19,
        "unitId": "lv2_u19",
        "legacyUnitNo": 31,
        "title": "부사절 접속사 (because, if, although, unless)",
        "part": "접속사의 심화",
        "targetGrade": "중2 내신 대비",
        "summary": "원인(because), 조건(if / unless = if not), 양보(although/even though)의 부사절과 '시간·조건 부사절에서는 현재가 미래를 대신한다'는 절대 시험 공식",
        "overview": "'비록 비가 올지라도(양보)', '만약 내일 비가 온다면(조건)'처럼 문장의 의미를 입체적으로 만들어 주는 부사절 접속사들이에요! 특히 조건절 If/Unless 안에서는 will을 쓰지 않고 현재시제를 쓴다는 중·고등 영어 1등 킬러 문법을 마스터해 봅시다!",
        "keyTakeaways": [
            "조건: if (만약 ~라면) vs unless (만약 ~하지 않는다면 = if ... not)",
            "양보: although / though / even though (비록 ~일지라도, 그럼에도 불구하고)",
            "★시간·조건 부사절의 미래대용: If/When 절 안에서는 will 대신 '현재시제'를 쓴다!"
        ],
        "formulaCards": [
            {
                "name": "시간·조건 부사절의 미래시제 대용 법칙",
                "formula": "If / When + S + 현재동사 (will 사용 금지!), S + will + 동원",
                "examples": [
                    {
                        "en": "If it rains tomorrow morning, we will stay at home.",
                        "ko": "만약 내일 아침에 비가 온다면, 우리는 집에 머무를 것이다.",
                        "point": "내일 비가 오는 미래의 일이지만 if절 안에는 will rain 대신 현재시제 rains를 씁니다."
                    },
                    {
                        "en": "We will start the meeting when the teacher arrives here.",
                        "ko": "선생님께서 여기에 도착하시면 우리는 회의를 시작할 것이다.",
                        "point": "when 부사절 안에서도 will arrive가 아닌 현재시제 arrives를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "If you don't hurry, you will miss the train.",
                    "x": "If you won't hurry, you will miss the train.",
                    "comment": "조건의 부사절 if 안에는 미래 조동사 will(won't)을 쓸 수 없습니다."
                },
                "trap": "주절에는 will을 정상적으로 쓰되, 'If 절/When 절 내부'에서만 will을 뺍니다!",
                "quizLink": "수능과 내신 전 학년 시험에서 1순위로 출제되는 시제 일치 예외 규정입니다."
            },
            {
                "name": "unless와 although의 문맥 공식",
                "formula": "unless = if ~ not (~하지 않는다면) | although / though + S + V (비록 ~이지만)",
                "examples": [
                    {
                        "en": "Unless you leave right now, you will be late for the movie.",
                        "ko": "네가 지금 당장 떠나지 않는다면, 너는 영화에 늦을 것이다.",
                        "point": "Unless 자체가 부정을 포함하므로 Unless you don't leave처럼 이중부정을 쓰면 안 됩니다."
                    },
                    {
                        "en": "Although it was very cold outside, they played soccer happily.",
                        "ko": "비록 밖이 매우 추웠지만, 그들은 즐겁게 축구를 했다.",
                        "point": "날씨가 추웠음에도 축구를 했다는 상반된 양보의 의미에 Although를 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "Unless it rains, we will play outside.",
                    "x": "Unless it doesn't rain, we will play outside.",
                    "comment": "unless 안에 not을 또 넣으면 이중부정의 오류가 발생합니다."
                },
                "trap": "although는 접속사이므로 뒤에 '주어+동사', despite는 전치사이므로 뒤에 '명사'가 옵니다.",
                "quizLink": "Unless you try = If you don't try는 중2 내신 주관식 단골 전환 문제입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u19_d1",
                "missionTitle": "미션 1: 조건 부사절 if 내 will 사용 오류 수정",
                "sentence": "If it will snow tomorrow, we will make a huge snowman in the park.",
                "korean": "만약 내일 눈이 내린다면, 우리는 공원에서 거대한 눈사람을 만들 것이다.",
                "underlined": ["If it will snow", "tomorrow, we will", "make a huge snowman", "in the park"],
                "wrongIndex": 0,
                "correction": "If it snows",
                "explanation": "조건의 부사절 If 안에서는 미래 시제 대신 현재시제를 써야 하므로 If it snows가 되어야 합니다.",
                "conceptRef": "1단계 [공식 1: 시간·조건 부사절 미래대용] 출제 연계"
            },
            {
                "id": "lv2_u19_d2",
                "missionTitle": "미션 2: unless 절 내 불필요한 부정어 오류 수정",
                "sentence": "Unless you don't study hard, you will fail the final exam.",
                "korean": "열심히 공부하지 않는다면, 너는 기말고사에서 떨어질 것이다.",
                "underlined": ["Unless you", "don't study hard,", "you will fail", "the final exam"],
                "wrongIndex": 1,
                "correction": "study hard,",
                "explanation": "Unless 자체에 부정(if not)이 포함되어 있으므로 don't study가 아니라 긍정형 study hard로 써야 합니다.",
                "conceptRef": "1단계 [공식 2: unless와 although 문맥] 출제 연계"
            },
            {
                "id": "lv2_u19_d3",
                "missionTitle": "미션 3: 양보 접속사 although vs despite 혼동",
                "sentence": "Despite she was very tired from the long trip, she helped her mother.",
                "korean": "그녀는 긴 여행으로 매우 피곤했음에도 불구하고 어머니를 도와드렸다.",
                "underlined": ["Despite she was", "very tired", "from the long trip,", "she helped her mother"],
                "wrongIndex": 0,
                "correction": "Although she was (or Even though she was)",
                "explanation": "뒤에 주어+동사(she was)를 갖춘 절이 오므로 전치사 Despite 대신 접속사 Although를 써야 합니다.",
                "conceptRef": "1단계 [공식 2: unless와 although 문맥] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 동사의 형태가 알맞은 것은?\n\n'We will go on a picnic if it ______ fine tomorrow.'",
                "options": ["will be", "is", "was", "be", "being"],
                "ans": 2,
                "exp": "조건의 부사절 if 안에서는 미래 대신 현재시제를 쓰므로 is가 정답입니다.",
                "conceptRef": "1단계 [공식 1: 시간·조건 부사절 미래대용]"
            },
            {
                "q": "다음 문장의 빈칸에 들어갈 접속사로 가장 알맞은 것은?\n\n'______ he was very hungry, he gave his bread to the crying boy.'",
                "options": ["Because", "If", "Although", "Unless", "Since"],
                "ans": 3,
                "exp": "배가 고팠음에도 불구하고 빵을 주었다는 양보의 내용이므로 Although(비록 ~일지라도)가 알맞습니다.",
                "conceptRef": "1단계 [공식 2: unless와 although 문맥]"
            },
            {
                "q": "'Unless you hurry, you will miss the school bus.'와 같은 의미의 문장은?",
                "options": [
                    "If you hurry, you will miss the school bus.",
                    "If you don't hurry, you will miss the school bus.",
                    "If you hurry, you won't miss the school bus.",
                    "Although you hurry, you will miss the school bus.",
                    "When you hurry, you will miss the school bus."
                ],
                "ans": 2,
                "exp": "Unless = If ... not이므로 'If you don't hurry'와 같은 의미입니다.",
                "conceptRef": "1단계 [공식 2: unless와 although 문맥]"
            },
            {
                "q": "다음 중 어법상 어색한 문장은?",
                "options": [
                    "I will call you when I arrive at the station.",
                    "If it will rain tomorrow, the game will be canceled.",
                    "Although she is young, she is very wise.",
                    "We can't win unless we practice together.",
                    "He went to bed because he was exhausted."
                ],
                "ans": 2,
                "exp": "If it will rain이 아니라 If it rains로 현재시제를 써야 올바릅니다.",
                "conceptRef": "1단계 [공식 1: 시간·조건 부사절 미래대용]"
            },
            {
                "q": "다음 괄호 안에서 알맞은 말이 바르게 짝지어진 것은?\n\n- 'I will wait here until you (will come / come).' \n- '(Although / Because) he had no money, he was happy.'",
                "options": [
                    "will come - Although",
                    "come - Although",
                    "come - Because",
                    "will come - Because",
                    "comes - Although"
                ],
                "ans": 2,
                "exp": "시간 부사절 until 안에서는 현재형 come, 돈이 없었지만 행복했다는 것은 양보이므로 Although입니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    },

    # Unit 20: to-V vs V-ing 의미 변화 동사
    {
        "unitNo": 20,
        "unitId": "lv2_u20",
        "legacyUnitNo": 32,
        "title": "to부정사와 동명사 둘 다 취하며 의미가 달라지는 동사",
        "part": "준동사의 심화",
        "targetGrade": "중2 내신 대비",
        "summary": "remember, forget, stop, try 뒤에 to부정사(미래·목적)가 오느냐 동명사(과거·행동)가 오느냐에 따라 180도 달라지는 의미 구별",
        "overview": "'약 먹는 걸 잊지 마(to)'와 '약 먹었던 걸 잊었어(-ing)'는 의미가 완전히 달라요! remember, forget, stop, try는 뒤에 to부정사가 오면 '앞으로 할 일(미래)', 동명사가 오면 '이미 했던 일(과거)'을 나타내요. 중2 시험에서 변별력을 가르는 최고난도 핵심 문법을 정복해 봅시다!",
        "keyTakeaways": [
            "remember / forget + to-V: (앞으로) ~할 것을 기억하다/잊다 (미래)",
            "remember / forget + V-ing: (과거에) ~했던 것을 기억하다/잊다 (과거)",
            "stop + to-V (~하기 위해 멈추다: 부사적 목적) vs stop + V-ing (~하던 것을 멈추다: 동명사 목적어)"
        ],
        "formulaCards": [
            {
                "name": "remember / forget의 미래(to) vs 과거(-ing)",
                "formula": "remember/forget + to-V (미래에 할 일) vs + V-ing (과거에 한 일)",
                "examples": [
                    {
                        "en": "Remember to turn off the lights before you go to sleep.",
                        "ko": "잠자리에 들기 전에 불을 끌 것을 기억해라(잊지 말고 꺼라).",
                        "point": "앞으로 불을 꺼야 할 미래의 일이므로 to turn off를 씁니다."
                    },
                    {
                        "en": "I still remember seeing the beautiful aurora in Canada.",
                        "ko": "나는 캐나다에서 그 아름다운 오로라를 보았던 것을 여전히 기억한다.",
                        "point": "과거에 이미 보았던 경험이므로 seeing을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "Don't forget to lock the door.",
                    "x": "Don't forget locking the door.",
                    "comment": "문 잠그는 것을 잊지 말라는 미래의 당부이므로 to lock을 써야 합니다."
                },
                "trap": "I forgot meeting him은 '만났던 사실을 잊었다'이고, I forgot to meet him은 '만나기로 했는데 까먹고 안 만났다'입니다.",
                "quizLink": "Don't forget to-V는 '~하는 것을 잊지 마라(= 꼭 해라)'라는 숙어로 외워두세요."
            },
            {
                "name": "stop과 try의 목적어 구별 공식",
                "formula": "stop to-V (~하기 위해 멈추다) vs stop V-ing (~하던 것을 그만두다) | try to-V vs try V-ing",
                "examples": [
                    {
                        "en": "The tired driver stopped to take a short rest at the gas station.",
                        "ko": "피곤한 운전자는 주유소에서 잠깐 휴식을 취하기 위해 멈춰 섰다.",
                        "point": "휴식을 취하기 위한 목적이므로 to부정사 to take를 씁니다."
                    },
                    {
                        "en": "Please stop making loud noise in this quiet study room.",
                        "ko": "이 조용한 독서실에서 큰 소음을 내는 것을 그만두세요.",
                        "point": "하던 행동을 멈추고 중단하는 것이므로 동명사 making을 씁니다."
                    }
                ],
                "oxCompare": {
                    "o": "He stopped smoking for his health.",
                    "x": "He stopped to smoke for his health.",
                    "comment": "건강을 위해 담배를 끊은 것이므로 동명사 smoking을 써야 합니다. (stopped to smoke는 담배 피우려고 멈췄다는 뜻!)"
                },
                "trap": "try to-V는 '~하려고 애쓰다/노력하다'이고, try V-ing는 '시험 삼아 한번 해보다'입니다.",
                "quizLink": "stop to-V의 to부정사는 목적어가 아니라 부사적 용법의 '목적(~하기 위해)'입니다."
            }
        ],
        "spottingDrills": [
            {
                "id": "lv2_u20_d1",
                "missionTitle": "미션 1: 금연 문맥에서 stop to-V 오용 수정",
                "sentence": "My grandfather finally stopped to smoke after fifty years.",
                "korean": "우리 할아버지는 50년 만에 마침내 담배를 끊으셨다.",
                "underlined": ["My grandfather", "finally stopped to smoke", "after", "fifty years"],
                "wrongIndex": 1,
                "correction": "finally stopped smoking",
                "explanation": "흡연을 중단하고 끊으신 것이므로 to smoke(피우기 위해 멈추다) 대신 동명사 smoking을 써야 합니다.",
                "conceptRef": "1단계 [공식 2: stop과 try의 목적어 구별] 출제 연계"
            },
            {
                "id": "lv2_u20_d2",
                "missionTitle": "미션 2: 미래 당부에서 forget -ing 오용 수정",
                "sentence": "Don't forget posting this important letter on your way home.",
                "korean": "집에 가는 길에 이 중요한 편지를 부치는 것을 잊지 마라.",
                "underlined": ["Don't forget", "posting this important letter", "on your way", "home"],
                "wrongIndex": 1,
                "correction": "to post this important letter",
                "explanation": "앞으로 편지를 부쳐야 하는 미래의 일이므로 posting 대신 to post를 써야 합니다.",
                "conceptRef": "1단계 [공식 1: remember/forget 미래 vs 과거] 출제 연계"
            },
            {
                "id": "lv2_u20_d3",
                "missionTitle": "미션 3: 과거 기억 문맥에서 remember to-V 오류",
                "sentence": "I clearly remember to meet her in Paris five years ago.",
                "korean": "나는 5년 전 파리에서 그녀를 만났던 것을 생생하게 기억한다.",
                "underlined": ["I clearly remember", "to meet her", "in Paris", "five years ago"],
                "wrongIndex": 1,
                "correction": "meeting her",
                "explanation": "5년 전 과거에 만났던 경험의 일이므로 to meet 대신 동명사 meeting을 써야 합니다.",
                "conceptRef": "1단계 [공식 1: remember/forget 미래 vs 과거] 출제 연계"
            }
        ],
        "questions": [
            {
                "q": "다음 빈칸에 들어갈 말로 가장 알맞은 것은?\n\n'Please remember ______ your umbrella when you leave.'",
                "options": ["bring", "bringing", "to bring", "brought", "brings"],
                "ans": 3,
                "exp": "떠날 때 앞으로 우산을 챙겨야 한다는 미래의 일이므로 to bring이 알맞습니다.",
                "conceptRef": "1단계 [공식 1: remember/forget 미래 vs 과거]"
            },
            {
                "q": "다음 두 문장의 빈칸에 들어갈 말이 바르게 짝지어진 것은?\n\n- 'He stopped ______ a cigarette.' (그는 담배를 피우기 위해 멈췄다)\n- 'He stopped ______ .' (그는 담배를 끊었다)",
                "options": [
                    "to smoke - smoking",
                    "smoking - to smoke",
                    "to smoke - to smoke",
                    "smoking - smoking",
                    "smoked - smoking"
                ],
                "ans": 1,
                "exp": "~하기 위해 멈추다는 stop to smoke, 하던 일을 끊다는 stop smoking입니다.",
                "conceptRef": "1단계 [공식 2: stop과 try의 목적어 구별]"
            },
            {
                "q": "'나는 그에게 그 비밀을 말했던 것을 후회한다.'를 바르게 영작한 것은?",
                "options": [
                    "I regret to tell him the secret.",
                    "I regret telling him the secret.",
                    "I regret tell him the secret.",
                    "I regret told him the secret.",
                    "I regret for tell him the secret."
                ],
                "ans": 2,
                "exp": "과거에 말했던 행동을 후회하는 것이므로 동명사 telling을 씁니다. (regret to-V는 유감스럽게도 ~하다)",
                "conceptRef": "1단계 [공식 1: remember/forget 미래 vs 과거]"
            },
            {
                "q": "다음 중 밑줄 친 부분의 쓰임이 어색한 문장은?",
                "options": [
                    "Don't forget to do your homework.",
                    "I remember locking the door before leaving.",
                    "He tried to open the jammed window.",
                    "She stopped to crying and looked at me.",
                    "I will never forget meeting you."
                ],
                "ans": 4,
                "exp": "울음을 그쳤다는 뜻이므로 to crying이라는 형태는 틀렸고 stopped crying이 되어야 합니다.",
                "conceptRef": "1단계 [공식 2: stop과 try의 목적어 구별]"
            },
            {
                "q": "다음 괄호 안에서 알맞은 말이 바르게 짝지어진 것은?\n\n- 'Remember (to lock / locking) the door tonight.'\n- 'He tried (to solve / solving) the hard problem with all his might.'",
                "options": [
                    "to lock - to solve",
                    "locking - to solve",
                    "to lock - solving",
                    "locking - solving",
                    "to lock - solve"
                ],
                "ans": 1,
                "exp": "오늘 밤 잠글 것을 기억하라는 to lock, 온 힘을 다해 풀려고 노력했다는 to solve가 알맞습니다.",
                "conceptRef": "1단계 [공식 1 & 2 종합]"
            }
        ]
    }
]

print("LV2 part2 loaded: Units 15 to 20")
