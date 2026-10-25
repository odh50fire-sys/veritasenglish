/**
 * Veritas English - 중등 전용 내신 독해 & 비문학/소설 마스터 데이터베이스
 * 중1, 중2, 중3 학년별 20편 (학기별 10편) 총 6개 학기 단원, 60편 전문 및 개별 맞춤 문제 완비
 */

const READING_UNITS = [
  {
    "unitId": "unit-pre-m1",
    "level": 2,
    "unitTitle": "예비중(초6~중1) 입문 독해 마스터",
    "grade": "예비중",
    "semester": "입문",
    "targetGrade": "pre_middle",
    "description": "초등 심화·중학 내신 브릿지, 문장 성분(주어·동사·목적어·보어), 필수 8품사, 일상 과학·환경·명작 우화 중심의 구문 독해 & 실전 문항 40제 완비",
    "themePrefix": "PRE_M1"
  },

  {
    "unitId": "unit-m1-1",
    "level": 3,
    "unitTitle": "중 1-1 내신 독해 마스터",
    "grade": "중1",
    "semester": "1학기",
    "targetGrade": "middle1_1",
    "description": "기초 구문 분석, 일상 과학, 환경, 명작 동화 독해 (품사·시제·기본 어법 집중)",
    "themePrefix": "M1_1"
  },
  {
    "unitId": "unit-m1-2",
    "level": 4,
    "unitTitle": "중 1-2 내신 독해 마스터",
    "grade": "중1",
    "semester": "2학기",
    "targetGrade": "middle1_2",
    "description": "문맥 추론, 문화 다양성, 모험 소설 독해 (조동사·접속사·to부정사 어법 집중)",
    "themePrefix": "M1_2"
  },
  {
    "unitId": "unit-m2-1",
    "level": 5,
    "unitTitle": "중 2-1 내신 독해 마스터",
    "grade": "중2",
    "semester": "1학기",
    "targetGrade": "middle2_1",
    "description": "인문·사회 현상, 감동 소설 독해 (관계대명사·동명사·수동태 심화)",
    "themePrefix": "M2_1"
  },
  {
    "unitId": "unit-m2-2",
    "level": 6,
    "unitTitle": "중 2-2 내신 독해 마스터",
    "grade": "중2",
    "semester": "2학기",
    "targetGrade": "middle2_2",
    "description": "생명과학, 탐정 추리 소설 독해 (비교급·현재완료·분사구문 기초)",
    "themePrefix": "M2_2"
  },
  {
    "unitId": "unit-m3-1",
    "level": 7,
    "unitTitle": "중 3-1 내신 독해 마스터",
    "grade": "중3",
    "semester": "1학기",
    "targetGrade": "middle3_1",
    "description": "첨단 기술·우주 과학, 고전 소설 심층 독해 (가정법·복합관계사·특목고 대비)",
    "themePrefix": "M3_1"
  },
  {
    "unitId": "unit-m3-2",
    "level": 8,
    "unitTitle": "중 3-2 내신 독해 마스터",
    "grade": "중3",
    "semester": "2학기",
    "targetGrade": "middle3_2",
    "description": "철학·심리학, 디스토피아 명작 소설 (고등 연계 도치·일치·킬러 서술형 영작)",
    "themePrefix": "M3_2"
  }
];

const READING_PASSAGES = [
  {
    "id": "passage-PRE_M1-1",
    "unitId": "unit-pre-m1",
    "unitTitle": "예비중(초6~중1) 입문 독해 마스터",
    "grade": "예비중",
    "semester": "입문",
    "category": "nonfiction",
    "categoryLabel": "예비중 비문학 • 예비중(초6~중1) 입문 독해 마스터",
    "title": "Why Do Leaves Change Color in Autumn?",
    "koreanTitle": "가을에 나뭇잎의 색이 변하는 이유",
    "level": "pre_middle",
    "levelLabel": "예비중 입문",
    "source": "예비중 입문 교과서 & 연계 기출 변형",
    "wordCount": 48,
    "estimatedTime": "2분",
    "summary": "가을철 나뭇잎의 색이 바뀌는 엽록소의 과학적 원리를 배우며, 기본 3인칭 단수 현재 시제와 주어-동사 수일치를 훈련합니다.",
    "sentences": [
      {
        "num": 1,
        "en": "In spring and summer, leaves are green because they have plenty of chlorophyll.",
        "ko": "봄과 여름에는 엽록소가 풍부하기 때문에 나뭇잎이 초록색이다."
      },
      {
        "num": 2,
        "en": "This green pigment helps trees make food from sunlight through photosynthesis.",
        "ko": "이 초록색 색소는 나무가 광합성을 통해 햇빛으로부터 양분을 만드는 것을 돕는다."
      },
      {
        "num": 3,
        "en": "When autumn arrives, the days become shorter and temperatures drop quickly.",
        "ko": "가을이 오면, 낮이 더 짧아지고 기온이 빠르게 떨어진다."
      },
      {
        "num": 4,
        "en": "As trees stop making food, the green fades away and reveals bright yellow and red colors.",
        "ko": "나무가 양분 만들기를 멈춤에 따라 초록색이 사라지고 밝은 노란색과 붉은색이 드러난다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "chlorophyll",
        "partOfSpeech": "n.",
        "meaning": "엽록소"
      },
      {
        "word": "pigment",
        "partOfSpeech": "n.",
        "meaning": "색소"
      },
      {
        "word": "photosynthesis",
        "partOfSpeech": "n.",
        "meaning": "광합성"
      }
    ],
    "questions": [
      {
        "id": "q-passage-PRE_M1-1-1",
        "type": "grammar",
        "typeLabel": "[예비중 내신 어법] 주어-동사 수일치 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "In spring and summer, leaves ①<u>are</u> green because they ②<u>has</u> plenty of chlorophyll, which ③<u>helps</u> trees ④<u>make</u> food when autumn ⑤<u>arrives</u>.",
        "options": [
          "① are (주어 'leaves'에 따른 복수 be동사)",
          "② has (주어 'they'에 맞추어 복수형 'have'로 고쳐야 함)",
          "③ helps (주어 'This pigment'에 일치하는 3인칭 단수 동사)",
          "④ make (help의 목적격 보어로 쓰인 동사원형)",
          "⑤ arrives (조건/시간 부사절의 3인칭 단수 현재형 동사)"
        ],
        "correctIndex": 1,
        "explanation": "주어가 3인칭 복수 대명사인 'they'이므로 동사는 단수형 'has'가 아니라 복수형 'have'를 써야 올바릅니다."
      },
      {
        "id": "q-passage-PRE_M1-1-2",
        "type": "blank",
        "typeLabel": "[예비중 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"This green pigment helps trees (          빈칸          ) through photosynthesis.\"",
        "options": [
          "make food from sunlight",
          "freeze water into solid ice",
          "cut down their own branches",
          "hide completely from daylight"
        ],
        "correctIndex": 0,
        "explanation": "본문 두 번째 문장에서 엽록소가 광합성을 통해 햇빛으로부터 양분을 만드는 것을 돕는다고 명시되어 있으므로 'make food from sunlight'가 가장 적절합니다."
      },
      {
        "id": "q-passage-PRE_M1-1-3",
        "type": "comprehension",
        "typeLabel": "[예비중 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "가을이 되면 낮의 길이가 봄이나 여름보다 훨씬 길어진다.",
          "엽록소는 나무가 겨울에 얼지 않도록 얼음을 만드는 물질이다.",
          "나무가 양분 생산을 멈추면 초록색이 사라지고 숨겨져 있던 노란색과 붉은색이 드러난다.",
          "기온이 떨어져도 나뭇잎의 색에는 아무런 변화가 생기지 않는다."
        ],
        "correctIndex": 2,
        "explanation": "본문 마지막 문장에서 나무가 양분 만들기를 멈추면 초록색이 사라지고 밝은 노란색과 붉은색이 드러난다고 설명하고 있습니다."
      },
      {
        "id": "q-passage-PRE_M1-1-4",
        "type": "main_idea",
        "typeLabel": "[예비중 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on why do leaves change color in autumn?",
          "② Exploring the fundamental mechanisms and importance of 가을에 나뭇잎의 색이 변하는 이유",
          "③ The rapid technological replacement of all natural phenomena related to why do leaves change color in autumn?",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about why do leaves change color in autumn? were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '가을에 나뭇잎의 색이 변하는 이유'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 가을에 나뭇잎의 색이 변하는 이유'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-PRE_M1-2",
    "unitId": "unit-pre-m1",
    "unitTitle": "예비중(초6~중1) 입문 독해 마스터",
    "grade": "예비중",
    "semester": "입문",
    "category": "nonfiction",
    "categoryLabel": "예비중 비문학 • 예비중(초6~중1) 입문 독해 마스터",
    "title": "The Secret Life of Ants in an Underground City",
    "koreanTitle": "지하 도시 개미들의 비밀스러운 협동 생활",
    "level": "pre_middle",
    "levelLabel": "예비중 입문",
    "source": "예비중 입문 교과서 & 연계 기출 변형",
    "wordCount": 50,
    "estimatedTime": "2분",
    "summary": "지하 도시에서 놀라운 분업과 협동으로 살아가는 개미 군집의 생태를 읽고, 명사의 복수형과 대명사의 지칭 관계를 학습합니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Ants are tiny insects, but they build complex cities deep underground.",
        "ko": "개미는 아주 작은 곤충이지만 지하 깊은 곳에 복잡한 도시를 짓는다."
      },
      {
        "num": 2,
        "en": "Thousands of worker ants dig connected tunnels and keep their home clean.",
        "ko": "수천 마리의 일개미들은 서로 연결된 터널을 파고 보금자리를 깨끗하게 유지한다."
      },
      {
        "num": 3,
        "en": "Each member has a specific role, such as protecting the nest or finding sweet fruit.",
        "ko": "각 구성원은 둥지를 보호하거나 달콤한 과일을 찾는 것과 같은 특정한 역할을 지닌다."
      },
      {
        "num": 4,
        "en": "By working together without stopping, this small society survives harsh weather and strong enemies.",
        "ko": "쉬지 않고 함께 협동함으로써, 이 작은 사회는 가혹한 날씨와 강력한 적들을 견뎌내고 생존한다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "complex",
        "partOfSpeech": "adj.",
        "meaning": "복잡한"
      },
      {
        "word": "specific",
        "partOfSpeech": "adj.",
        "meaning": "특정한, 구체적인"
      },
      {
        "word": "survive",
        "partOfSpeech": "v.",
        "meaning": "살아남다, 생존하다"
      }
    ],
    "questions": [
      {
        "id": "q-passage-PRE_M1-2-1",
        "type": "grammar",
        "typeLabel": "[예비중 내신 어법] 명사 수일치와 5형식 형용사 보어 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Thousands of worker ants dig connected tunnels and ①<u>keep</u> their home ②<u>cleanly</u>, while each member ③<u>has</u> a specific role such as ④<u>protecting</u> the nest to ⑤<u>survive</u>.",
        "options": [
          "① keep (복수 주어 worker ants에 일치하는 본동사)",
          "② cleanly (keep의 목적격 보어 자리에는 부사가 아닌 형용사 'clean'이 와야 함)",
          "③ has (단수 대명사 'each member'에 따른 3인칭 단수 동사)",
          "④ protecting (전치사 such as 뒤에 온 동명사)",
          "⑤ survive (목적을 나타내는 to부정사)"
        ],
        "correctIndex": 1,
        "explanation": "'keep + 목적어 + 목적격 보어' 구문에서 목적격 보어 자리에는 상태를 나타내는 형용사 'clean'이 와야 하며, 부사인 'cleanly'는 올 수 없습니다."
      },
      {
        "id": "q-passage-PRE_M1-2-2",
        "type": "blank",
        "typeLabel": "[예비중 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"By (          빈칸          ), this small society survives harsh weather and strong enemies.\"",
        "options": [
          "working together without stopping",
          "fighting among members continuously",
          "living completely alone in separate trees",
          "refusing to share food with others"
        ],
        "correctIndex": 0,
        "explanation": "개미 군집의 협동과 단합을 강조하는 본문 맥락상 'working together without stopping(쉬지 않고 함께 협동함으로써)'이 가장 적절합니다."
      },
      {
        "id": "q-passage-PRE_M1-2-3",
        "type": "comprehension",
        "typeLabel": "[예비중 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "개미들은 지하에 집을 짓지 못하고 오직 나무 위에서만 산다.",
          "모든 일개미는 역할 분담 없이 오직 잠만 잔다.",
          "수천 마리의 일개미들은 서로 연결된 터널을 파고 집을 깨끗이 유지한다.",
          "개미 사회는 작은 날씨 변화에도 전혀 적응하지 못하고 쉽게 멸종한다."
        ],
        "correctIndex": 2,
        "explanation": "본문 2번째 문장(Thousands of worker ants dig connected tunnels and keep their home clean)에서 일치하는 내용을 직접 확인할 수 있습니다."
      },
      {
        "id": "q-passage-PRE_M1-2-4",
        "type": "main_idea",
        "typeLabel": "[예비중 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the secret life of ants in an underground city",
          "② The rapid technological replacement of all natural phenomena related to the secret life of ants in an underground city",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about the secret life of ants in an underground city were all harmful",
          "⑤ The cooperative social structure and survival strategies of ants underground"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '지하 도시 개미들의 비밀스러운 협동 생활'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The cooperative social structure and survival strategies of ants underground'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-PRE_M1-3",
    "unitId": "unit-pre-m1",
    "unitTitle": "예비중(초6~중1) 입문 독해 마스터",
    "grade": "예비중",
    "semester": "입문",
    "category": "fiction",
    "categoryLabel": "예비중 소설/우화 • 예비중(초6~중1) 입문 독해 마스터",
    "title": "The Boy Who Cried Wolf: A Timeless Lesson",
    "koreanTitle": "양치기 소년과 거짓말의 대가",
    "level": "pre_middle",
    "levelLabel": "예비중 입문",
    "source": "예비중 입문 교과서 & 연계 기출 변형",
    "wordCount": 52,
    "estimatedTime": "2분",
    "summary": "장난으로 늑대가 나타났다고 외친 소년의 이솝 우화를 통해, 과거 시제의 규칙/불규칙 변화와 거짓말의 위험성을 배웁니다.",
    "sentences": [
      {
        "num": 1,
        "en": "A young shepherd boy watched sheep near a quiet mountain village every afternoon.",
        "ko": "한 어린 양치기 소년이 매일 오후 조용한 산골 마을 근처에서 양 떼를 지켰다."
      },
      {
        "num": 2,
        "en": "Feeling bored, he shouted loudly that a dangerous wolf was coming to attack.",
        "ko": "지루함을 느낀 그는 위험한 늑대가 공격하러 오고 있다고 큰 소리로 외쳤다."
      },
      {
        "num": 3,
        "en": "Kind villagers rushed up the hill to help him, but they found no hungry wolf.",
        "ko": "친절한 마을 사람들은 그를 돕기 위해 언덕 위로 급히 달려갔지만 굶주린 늑대는 찾지 못했다."
      },
      {
        "num": 4,
        "en": "When a real wolf finally appeared later, nobody trusted his frightened cries for rescue.",
        "ko": "나중에 진짜 늑대가 마침내 나타났을 때, 아무도 구조를 바라는 그의 겁에 질린 외침을 믿지 않았다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "shepherd",
        "partOfSpeech": "n.",
        "meaning": "양치기"
      },
      {
        "word": "attack",
        "partOfSpeech": "v.",
        "meaning": "공격하다"
      },
      {
        "word": "trust",
        "partOfSpeech": "v.",
        "meaning": "신뢰하다, 믿다"
      }
    ],
    "questions": [
      {
        "id": "q-passage-PRE_M1-3-1",
        "type": "grammar",
        "typeLabel": "[예비중 내신 어법] 과거 시제 일치 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "A young shepherd boy ①<u>watched</u> sheep every day, but he ②<u>shouted</u> lies because he ③<u>felt</u> bored, so nobody ④<u>trusts</u> him when the wolf ⑤<u>appeared</u>.",
        "options": [
          "① watched (과거의 일상적 사실을 나타내는 과거형)",
          "② shouted (과거 시제 본동사)",
          "③ felt (feel의 불규칙 과거형)",
          "④ trusts (전체 문맥이 과거 이야기이므로 과거형 'trusted'로 일치시켜야 함)",
          "⑤ appeared (시간 부사절의 과거 시제 동사)"
        ],
        "correctIndex": 3,
        "explanation": "전체 이야기가 과거 시점(watched, shouted, felt, appeared)으로 서술되고 있으므로, ④번 'trusts'는 시제 일치에 맞추어 과거형 'trusted'로 써야 합니다."
      },
      {
        "id": "q-passage-PRE_M1-3-2",
        "type": "blank",
        "typeLabel": "[예비중 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"When a real wolf finally appeared later, nobody (          빈칸          ).\"",
        "options": [
          "trusted his frightened cries for rescue",
          "praised him for telling clever jokes",
          "bought new wool coats from the village",
          "chased away the shepherd boy forever"
        ],
        "correctIndex": 0,
        "explanation": "거짓말을 반복한 결과 진짜 늑대가 나타났을 때 마을 사람들은 그의 외침을 믿지 않았으므로 'trusted his frightened cries for rescue'가 정답입니다."
      },
      {
        "id": "q-passage-PRE_M1-3-3",
        "type": "comprehension",
        "typeLabel": "[예비중 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "마을 사람들은 소년의 첫 번째 외침을 무시하고 언덕에 올라가지 않았다.",
          "소년은 처음부터 진짜 늑대를 잡기 위해 사냥꾼을 불렀다.",
          "소년이 심심해서 거짓 외침을 질렀을 때 언덕 위에는 굶주린 늑대가 없었다.",
          "마지막에 늑대가 나타났을 때 모든 마을 사람들이 즉시 달려와 도와주었다."
        ],
        "correctIndex": 2,
        "explanation": "본문 3번째 문장(Kind villagers rushed up the hill to help him, but they found no hungry wolf)에 부합합니다."
      },
      {
        "id": "q-passage-PRE_M1-3-4",
        "type": "main_idea",
        "typeLabel": "[예비중 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the boy who cried wolf: a timeless lesson",
          "② The rapid technological replacement of all natural phenomena related to the boy who cried wolf: a timeless lesson",
          "③ The serious consequences of repeated dishonesty: A lesson from the shepherd boy",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the boy who cried wolf: a timeless lesson were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '양치기 소년과 거짓말의 대가'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The serious consequences of repeated dishonesty: A lesson from the shepherd boy'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-PRE_M1-4",
    "unitId": "unit-pre-m1",
    "unitTitle": "예비중(초6~중1) 입문 독해 마스터",
    "grade": "예비중",
    "semester": "입문",
    "category": "nonfiction",
    "categoryLabel": "예비중 비문학 • 예비중(초6~중1) 입문 독해 마스터",
    "title": "How Does Sunlight Make a Rainbow?",
    "koreanTitle": "햇빛과 빗방울이 만드는 무지개의 과학",
    "level": "pre_middle",
    "levelLabel": "예비중 입문",
    "source": "예비중 입문 교과서 & 연계 기출 변형",
    "wordCount": 50,
    "estimatedTime": "2분",
    "summary": "비 온 뒤 햇빛과 빗방울이 어우러져 만들어내는 무지개의 굴절 원리를 배우고, 형용사와 부사의 바른 쓰임을 훈련합니다.",
    "sentences": [
      {
        "num": 1,
        "en": "We often see a beautiful rainbow stretching across the clear sky after summer rain.",
        "ko": "우리는 여름 비가 내린 뒤 맑은 하늘을 가로지르는 아름다운 무지개를 종종 본다."
      },
      {
        "num": 2,
        "en": "Sunlight looks purely white to our eyes, but it actually contains many different colors.",
        "ko": "햇빛은 우리 눈에 순수하게 흰색으로 보이지만, 사실은 수많은 다양한 색을 품고 있다."
      },
      {
        "num": 3,
        "en": "When sunlight enters raindrops, tiny droplets bend and separate the traveling light rays into colorful arcs.",
        "ko": "햇빛이 빗방울에 들어가면, 작은 물방울들이 나아가는 광선을 굴절시키고 분리하여 알록달록한 호를 만든다."
      },
      {
        "num": 4,
        "en": "Red light bends the least, while violet light bends the most to create seven vibrant stripes.",
        "ko": "빨간색 빛이 가장 적게 꺾이고 보라색 빛이 가장 많이 꺾여 일곱 가지의 선명한 줄무늬를 만든다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "purely",
        "partOfSpeech": "adv.",
        "meaning": "순수하게"
      },
      {
        "word": "separate",
        "partOfSpeech": "v.",
        "meaning": "분리하다, 흩어지게 하다"
      },
      {
        "word": "vibrant",
        "partOfSpeech": "adj.",
        "meaning": "생생한, 선명한"
      }
    ],
    "questions": [
      {
        "id": "q-passage-PRE_M1-4-1",
        "type": "grammar",
        "typeLabel": "[예비중 내신 어법] 감각동사 보어의 품사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Sunlight ①<u>looks</u> ②<u>purely</u> white, but it ③<u>actually</u> contains many colors, which ④<u>separate</u> into seven ⑤<u>vibrantly</u> stripes.",
        "options": [
          "① looks (감각동사)",
          "② purely (형용사 white를 수식하는 부사)",
          "③ actually (동사 contains를 수식하는 부사)",
          "④ separate (복수 선행사 colors를 받는 관계대명사절의 동사)",
          "⑤ vibrantly (명사 stripes를 수식해야 하므로 형용사 'vibrant'로 고쳐야 함)"
        ],
        "correctIndex": 4,
        "explanation": "명사인 'stripes(줄무늬)'를 수식하기 위해서는 부사 'vibrantly'가 아닌 형용사 'vibrant'를 사용해야 합니다."
      },
      {
        "id": "q-passage-PRE_M1-4-2",
        "type": "blank",
        "typeLabel": "[예비중 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"When sunlight enters raindrops, tiny droplets bend and separate the traveling light rays into (          빈칸          ).\"",
        "options": [
          "colorful arcs",
          "dark thunderclouds",
          "invisible radio waves",
          "sharp winter snowflakes"
        ],
        "correctIndex": 0,
        "explanation": "햇빛이 빗방울을 통과하며 굴절되어 무지개의 형상인 'colorful arcs(알록달록한 호)'를 만든다는 흐름이 가장 적절합니다."
      },
      {
        "id": "q-passage-PRE_M1-4-3",
        "type": "comprehension",
        "typeLabel": "[예비중 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "햇빛은 실제로 단 하나의 순수한 흰색 광선으로만 구성되어 있다.",
          "빨간색 빛이 보라색 빛보다 물방울 속에서 훨씬 더 많이 꺾인다.",
          "보라색 빛이 가장 많이 꺾이고 빨간색 빛이 가장 적게 꺾인다.",
          "무지개는 비가 오기 전 건조하고 흐린 날에만 관찰된다."
        ],
        "correctIndex": 2,
        "explanation": "본문 4번째 문장(Red light bends the least, while violet light bends the most)에서 보라색 빛이 가장 많이, 빨간색 빛이 가장 적게 꺾인다고 설명하고 있습니다."
      },
      {
        "id": "q-passage-PRE_M1-4-4",
        "type": "main_idea",
        "typeLabel": "[예비중 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① How sunlight and raindrops interact through refraction to create a rainbow",
          "② Why modern scholars completely reject any scientific research on how does sunlight make a rainbow?",
          "③ The rapid technological replacement of all natural phenomena related to how does sunlight make a rainbow?",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about how does sunlight make a rainbow? were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '햇빛과 빗방울이 만드는 무지개의 과학'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'How sunlight and raindrops interact through refraction to create a rainbow'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-PRE_M1-5",
    "unitId": "unit-pre-m1",
    "unitTitle": "예비중(초6~중1) 입문 독해 마스터",
    "grade": "예비중",
    "semester": "입문",
    "category": "fiction",
    "categoryLabel": "예비중 소설/우화 • 예비중(초6~중1) 입문 독해 마스터",
    "title": "The Tortoise and the Hare: The Power of Persistence",
    "koreanTitle": "토끼와 거북이: 꾸준함의 승리",
    "level": "pre_middle",
    "levelLabel": "예비중 입문",
    "source": "예비중 입문 교과서 & 연계 기출 변형",
    "wordCount": 53,
    "estimatedTime": "2분",
    "summary": "자만심에 찬 토끼와 묵묵히 전진한 거북이의 경주를 통해, 비교급 표현과 성실함의 가치를 배웁니다.",
    "sentences": [
      {
        "num": 1,
        "en": "A boastful hare always laughed at a gentle tortoise for walking too slowly.",
        "ko": "자랑하기 좋아하는 토끼는 너무 느리게 걷는다며 온순한 거북이를 항상 놀려댔다."
      },
      {
        "num": 2,
        "en": "Challenged to a grand race, the hare sprinted ahead and took a nap under a shady oak tree.",
        "ko": "큰 경주에 도전을 받자, 토끼는 앞질러 전력 질주한 뒤 그늘진 떡갈나무 아래에서 낮잠을 잤다."
      },
      {
        "num": 3,
        "en": "Meanwhile, the patient tortoise never paused and took steady steps toward the finish line.",
        "ko": "그동안 끈기 있는 거북이는 결코 멈추지 않고 결승선을 향해 꾸준한 걸음을 내딛었다."
      },
      {
        "num": 4,
        "en": "When the arrogant hare woke up, the tortoise was already smiling at the victory podium.",
        "ko": "오만한 토끼가 잠에서 깼을 때, 거북이는 이미 승리의 단상에서 미소를 짓고 있었다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "boastful",
        "partOfSpeech": "adj.",
        "meaning": "자랑하는, 뽐내는"
      },
      {
        "word": "persistence",
        "partOfSpeech": "n.",
        "meaning": "끈기, 지속성"
      },
      {
        "word": "steady",
        "partOfSpeech": "adj.",
        "meaning": "꾸준한, 한결같은"
      }
    ],
    "questions": [
      {
        "id": "q-passage-PRE_M1-5-1",
        "type": "grammar",
        "typeLabel": "[예비중 내신 어법] 전치사 뒤 동명사 목적어 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "The hare laughed at the tortoise for ①<u>walk</u> too slowly, but the tortoise ②<u>took</u> steady steps toward the finish line without ③<u>stopping</u>, so he ④<u>was</u> the ⑤<u>first</u> winner.",
        "options": [
          "① walk (전치사 for 뒤에는 동명사 'walking'이 와야 함)",
          "② took (과거 시제 동사)",
          "③ stopping (전치사 without 뒤의 동명사)",
          "④ was (과거 시제 be동사)",
          "⑤ first (서수 형용사)"
        ],
        "correctIndex": 0,
        "explanation": "전치사 'for'의 목적어로 동사가 올 때는 동명사 형태인 'walking'으로 고쳐 써야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-PRE_M1-5-2",
        "type": "blank",
        "typeLabel": "[예비중 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Meanwhile, the patient tortoise (          빈칸          ) toward the finish line.\"",
        "options": [
          "never paused and took steady steps",
          "returned home and gave up immediately",
          "fell asleep next to the sleeping hare",
          "cried bitterly because of exhaustion"
        ],
        "correctIndex": 0,
        "explanation": "토끼가 잠든 사이 포기하지 않고 꾸준히 걸어간 거북이의 행적을 나타내므로 'never paused and took steady steps'가 정답입니다."
      },
      {
        "id": "q-passage-PRE_M1-5-3",
        "type": "comprehension",
        "typeLabel": "[예비중 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "거북이가 먼저 나무 그늘 아래에서 깊은 낮잠에 빠졌다.",
          "토끼는 경기 내내 한 번도 쉬지 않고 전력 질주했다.",
          "토끼가 잠에서 깼을 때 거북이는 이미 승리의 자리에 도달해 있었다.",
          "경주는 아무런 승자도 가리지 못하고 중단되었다."
        ],
        "correctIndex": 2,
        "explanation": "본문 마지막 문장(the tortoise was already smiling at the victory podium)에서 거북이가 이미 승리한 상태였음을 알 수 있습니다."
      },
      {
        "id": "q-passage-PRE_M1-5-4",
        "type": "main_idea",
        "typeLabel": "[예비중 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the tortoise and the hare: the power of persistence",
          "② The rapid technological replacement of all natural phenomena related to the tortoise and the hare: the power of persistence",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ The power of patience and persistence over arrogant overconfidence",
          "⑤ A historical debate proving that traditional theories about the tortoise and the hare: the power of persistence were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '토끼와 거북이: 꾸준함의 승리'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The power of patience and persistence over arrogant overconfidence'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-PRE_M1-6",
    "unitId": "unit-pre-m1",
    "unitTitle": "예비중(초6~중1) 입문 독해 마스터",
    "grade": "예비중",
    "semester": "입문",
    "category": "nonfiction",
    "categoryLabel": "예비중 비문학 • 예비중(초6~중1) 입문 독해 마스터",
    "title": "Plastic Pollution and Our Blue Ocean",
    "koreanTitle": "플라스틱 쓰레기와 바다 생물들의 위기",
    "level": "pre_middle",
    "levelLabel": "예비중 입문",
    "source": "예비중 입문 교과서 & 연계 기출 변형",
    "wordCount": 51,
    "estimatedTime": "2분",
    "summary": "바다로 흘러 들어가는 일회용 플라스틱 쓰레기의 심각성을 탐구하고, 조동사(can, must, should)의 쓰임과 환경 보호 의식을 기릅니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Every year, millions of plastic bottles and straws enter the deep blue sea.",
        "ko": "매년 수백만 개의 플라스틱 병과 빨대가 깊고 푸른 바다로 흘러 들어간다."
      },
      {
        "num": 2,
        "en": "Sea turtles and dolphins often mistake floating plastic bags for tasty jellyfish.",
        "ko": "바다거북과 돌고래는 물에 떠다니는 비닐봉지를 맛있는 해파리로 종종 착각한다."
      },
      {
        "num": 3,
        "en": "Plastic wastes break down into microplastics that can poison precious marine creatures and human food.",
        "ko": "플라스틱 쓰레기는 소중한 해양 생물과 인간의 먹거리를 오염시킬 수 있는 미세 플라스틱으로 분해된다."
      },
      {
        "num": 4,
        "en": "We must reduce single-use cups and recycle everyday items to protect clean water.",
        "ko": "우리는 깨끗한 바닷물을 지키기 위해 일회용 컵을 줄이고 일상용품을 재활용해야만 한다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "mistake",
        "partOfSpeech": "v.",
        "meaning": "착각하다, 오해하다"
      },
      {
        "word": "marine",
        "partOfSpeech": "adj.",
        "meaning": "해양의, 바다의"
      },
      {
        "word": "reduce",
        "partOfSpeech": "v.",
        "meaning": "줄이다, 감소시키다"
      }
    ],
    "questions": [
      {
        "id": "q-passage-PRE_M1-6-1",
        "type": "grammar",
        "typeLabel": "[예비중 내신 어법] 조동사 뒤 동사원형 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Plastic wastes ①<u>break</u> down into microplastics that can ②<u>poisons</u> animals, so we must ③<u>reduce</u> cups and ④<u>recycle</u> everyday items to ⑤<u>protect</u> the ocean.",
        "options": [
          "① break (복수 주어 Plastic wastes에 일치하는 현재형 동사)",
          "② poisons (조동사 can 뒤에는 동사원형 'poison'이 와야 함)",
          "③ reduce (조동사 must 뒤의 동사원형)",
          "④ recycle (must에 병렬 연결된 동사원형)",
          "⑤ protect (목적을 나타내는 to부정사)"
        ],
        "correctIndex": 1,
        "explanation": "조동사 'can' 뒤에는 인칭이나 수와 상관없이 항상 동사원형이 와야 하므로 'poisons'가 아닌 'poison'으로 고쳐야 합니다."
      },
      {
        "id": "q-passage-PRE_M1-6-2",
        "type": "blank",
        "typeLabel": "[예비중 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Sea turtles and dolphins often (          빈칸          ) for tasty jellyfish.\"",
        "options": [
          "mistake floating plastic bags",
          "swim quickly to distant islands",
          "build strong stone nests",
          "protect young baby sharks"
        ],
        "correctIndex": 0,
        "explanation": "해양 동물들이 물에 뜬 비닐봉지를 해파리로 오인하여 삼킨다는 문맥이므로 'mistake floating plastic bags'가 알맞습니다."
      },
      {
        "id": "q-passage-PRE_M1-6-3",
        "type": "comprehension",
        "typeLabel": "[예비중 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "바다로 들어간 플라스틱 쓰레기는 영원히 큰 덩어리로만 유지된다.",
          "미세 플라스틱은 해양 생물뿐만 아니라 인간의 먹거리까지 오염시킬 수 있다.",
          "해양 동물들은 플라스틱을 스스로 완벽히 소화하여 양분으로 삼는다.",
          "환경 보호를 위해 일회용품 사용을 지금보다 더 많이 늘려야 한다."
        ],
        "correctIndex": 1,
        "explanation": "본문 3번째 문장에서 미세 플라스틱이 해양 생물과 인간의 음식(marine creatures and human food)을 오염시킬 수 있다고 명시되어 있습니다."
      },
      {
        "id": "q-passage-PRE_M1-6-4",
        "type": "main_idea",
        "typeLabel": "[예비중 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on plastic pollution and our blue ocean",
          "② The urgent threat of marine plastic pollution and the need for global action",
          "③ The rapid technological replacement of all natural phenomena related to plastic pollution and our blue ocean",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about plastic pollution and our blue ocean were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '플라스틱 쓰레기와 바다 생물들의 위기'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The urgent threat of marine plastic pollution and the need for global action'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-PRE_M1-7",
    "unitId": "unit-pre-m1",
    "unitTitle": "예비중(초6~중1) 입문 독해 마스터",
    "grade": "예비중",
    "semester": "입문",
    "category": "fiction",
    "categoryLabel": "예비중 소설/우화 • 예비중(초6~중1) 입문 독해 마스터",
    "title": "The Lion and the Tiny Mouse",
    "koreanTitle": "사자와 작은 생쥐의 은혜 갚기",
    "level": "pre_middle",
    "levelLabel": "예비중 입문",
    "source": "예비중 입문 교과서 & 연계 기출 변형",
    "wordCount": 52,
    "estimatedTime": "2분",
    "summary": "낮잠 자던 사자를 깨웠다가 풀려난 생쥐가 사냥꾼의 그물에 걸린 사자를 구해주는 이야기를 통해 5형식 사역/동사 구조를 익힙니다.",
    "sentences": [
      {
        "num": 1,
        "en": "A mighty lion was sleeping peacefully in the forest when a tiny mouse accidentally woke him up.",
        "ko": "거대한 사자가 숲에서 평화롭게 잠자고 있을 때 작은 생쥐가 실수로 그를 깨웠다."
      },
      {
        "num": 2,
        "en": "The angry king caught the mouse, but he decided to let the trembling creature go free.",
        "ko": "성난 백수의 왕은 생쥐를 붙잡았지만, 떨고 있는 이 생물을 놓아주기로 결정했다."
      },
      {
        "num": 3,
        "en": "Days later, the proud lion was trapped inside a strong rope net set by clever hunters.",
        "ko": "며칠 후, 자랑스러운 사자는 영리한 사냥꾼들이 쳐놓은 튼튼한 밧줄 그물 안에 갇히고 말았다."
      },
      {
        "num": 4,
        "en": "The brave little mouse chewed the thick ropes with sharp teeth and saved his royal friend.",
        "ko": "용감하고 작은 생쥐는 날카로운 이빨로 두꺼운 밧줄을 갉아내어 그의 왕다운 친구를 구했다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "mighty",
        "partOfSpeech": "adj.",
        "meaning": "거대한, 강력한"
      },
      {
        "word": "trembling",
        "partOfSpeech": "adj.",
        "meaning": "떨리는, 전율하는"
      },
      {
        "word": "chew",
        "partOfSpeech": "v.",
        "meaning": "씹다, 갉아먹다"
      }
    ],
    "questions": [
      {
        "id": "q-passage-PRE_M1-7-1",
        "type": "grammar",
        "typeLabel": "[예비중 내신 어법] 사역동사 let의 목적격 보어 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "The lion decided to let the trembling mouse ①<u>to go</u> free, and later the mouse ②<u>chewed</u> the ropes and ③<u>saved</u> the lion who was ④<u>trapped</u> in a net set by ⑤<u>hunters</u>.",
        "options": [
          "① to go (사역동사 let의 목적격 보어로는 to부정사가 아닌 동사원형 'go'가 와야 함)",
          "② chewed (과거 시제 동사)",
          "③ saved (과거 시제 동사 병렬)",
          "④ trapped (수동태 was trapped의 과거분사)",
          "⑤ hunters (명사의 복수형)"
        ],
        "correctIndex": 0,
        "explanation": "사역동사 'let + 목적어 + 동사원형' 구조이므로 'to go'가 아니라 동사원형 'go'를 써야 올바릅니다."
      },
      {
        "id": "q-passage-PRE_M1-7-2",
        "type": "blank",
        "typeLabel": "[예비중 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"The brave little mouse (          빈칸          ) with sharp teeth and saved his royal friend.\"",
        "options": [
          "chewed the thick ropes",
          "invited more dangerous lions",
          "climbed to the highest treetop",
          "hid inside a tiny hole forever"
        ],
        "correctIndex": 0,
        "explanation": "생쥐가 날카로운 이빨로 그물의 밧줄을 갉아 사자를 구해준 내용이므로 'chewed the thick ropes'가 정답입니다."
      },
      {
        "id": "q-passage-PRE_M1-7-3",
        "type": "comprehension",
        "typeLabel": "[예비중 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "사자는 자신을 깨운 생쥐를 그 자리에서 곧바로 잡아먹었다.",
          "사자는 사냥꾼들이 친 튼튼한 밧줄 그물에 갇혀 곤경에 처했다.",
          "생쥐는 사냥꾼들에게 붙잡혀 우리 속에 갇혔다.",
          "사자는 생쥐의 도움을 거부하고 스스로 힘으로 그물을 찢고 탈출했다."
        ],
        "correctIndex": 1,
        "explanation": "본문 3번째 문장(the proud lion was trapped inside a strong rope net set by clever hunters)과 일치합니다."
      },
      {
        "id": "q-passage-PRE_M1-7-4",
        "type": "main_idea",
        "typeLabel": "[예비중 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the lion and the tiny mouse",
          "② The rapid technological replacement of all natural phenomena related to the lion and the tiny mouse",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about the lion and the tiny mouse were all harmful",
          "⑤ How small acts of kindness and unexpected friendship can save a mighty life"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '사자와 작은 생쥐의 은혜 갚기'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'How small acts of kindness and unexpected friendship can save a mighty life'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-PRE_M1-8",
    "unitId": "unit-pre-m1",
    "unitTitle": "예비중(초6~중1) 입문 독해 마스터",
    "grade": "예비중",
    "semester": "입문",
    "category": "nonfiction",
    "categoryLabel": "예비중 비문학 • 예비중(초6~중1) 입문 독해 마스터",
    "title": "Why Do We Sleep and Dream Every Night?",
    "koreanTitle": "우리는 왜 매일 밤 잠을 자고 꿈을 꿀까?",
    "level": "pre_middle",
    "levelLabel": "예비중 입문",
    "source": "예비중 입문 교과서 & 연계 기출 변형",
    "wordCount": 49,
    "estimatedTime": "2분",
    "summary": "인간의 수면과 꿈이 신체 회복 및 뇌의 기억 정리에 미치는 긍정적 영향을 탐구하며, to부정사의 부사적 용법(목적)을 배웁니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Good sleep is not just taking a rest; it is essential to keep our brain healthy.",
        "ko": "좋은 수면은 그저 쉬는 것만이 아니라, 우리의 뇌를 건강하게 유지하는 데 필수적이다."
      },
      {
        "num": 2,
        "en": "While you dream, your active brain organizes daily memories and repairs tired muscles.",
        "ko": "당신이 꿈을 꾸는 동안, 당신의 활동적인 뇌는 일상의 기억들을 정리하고 지친 근육을 회복시킨다."
      },
      {
        "num": 3,
        "en": "Deep rest helps students concentrate better and solves emotional stress from hard school days.",
        "ko": "깊은 휴식은 학생들이 더 잘 집중할 수 있도록 돕고 힘든 학교생활에서 오는 감정적 스트레스를 해소해준다."
      },
      {
        "num": 4,
        "en": "Going to bed early guarantees positive energy and cheerful mornings for growing teenagers.",
        "ko": "일찍 잠자리에 드는 것은 성장기 십 대들에게 긍정적인 에너지와 활기찬 아침을 보장한다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "organize",
        "partOfSpeech": "v.",
        "meaning": "정리하다, 체계화하다"
      },
      {
        "word": "concentrate",
        "partOfSpeech": "v.",
        "meaning": "집중하다"
      },
      {
        "word": "guarantee",
        "partOfSpeech": "v.",
        "meaning": "보장하다"
      }
    ],
    "questions": [
      {
        "id": "q-passage-PRE_M1-8-1",
        "type": "grammar",
        "typeLabel": "[예비중 내신 어법] 동명사 주어의 수일치 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Going to bed early ①<u>guarantees</u> energy, and deep rest ②<u>helps</u> students ③<u>concentrate</u> better to ④<u>keeps</u> their active brain ⑤<u>healthy</u>.",
        "options": [
          "① guarantees (동명사 주어 Going to bed early에 일치하는 단수 동사)",
          "② helps (주어 deep rest에 일치하는 3인칭 단수 동사)",
          "③ concentrate (help의 목적격 보어로 쓰인 동사원형)",
          "④ keeps (to부정사 to 뒤에는 동사원형 'keep'이 와야 함)",
          "⑤ healthy (keep의 목적격 보어로 쓰인 형용사)"
        ],
        "correctIndex": 3,
        "explanation": "to부정사는 'to + 동사원형'의 형태이므로 단수형 어미가 붙은 'keeps'가 아닌 동사원형 'keep'으로 고쳐야 합니다."
      },
      {
        "id": "q-passage-PRE_M1-8-2",
        "type": "blank",
        "typeLabel": "[예비중 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"While you dream, your active brain (          빈칸          ) and repairs tired muscles.\"",
        "options": [
          "organizes daily memories",
          "erases all learned languages",
          "stops functioning completely",
          "creates dangerous heart attacks"
        ],
        "correctIndex": 0,
        "explanation": "꿈을 꾸는 동안 뇌가 하루 동안의 기억을 체계적으로 정리한다는 내용이므로 'organizes daily memories'가 가장 적절합니다."
      },
      {
        "id": "q-passage-PRE_M1-8-3",
        "type": "comprehension",
        "typeLabel": "[예비중 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "잠을 자는 동안 인간의 뇌는 아무런 활동도 하지 않고 완전히 정지한다.",
          "수면은 학생들의 집중력을 떨어뜨리고 스트레스를 가중시킨다.",
          "좋은 수면은 피로한 근육을 회복시키고 뇌의 건강을 유지하는 데 필수적이다.",
          "청소년들은 밤늦게 자는 것이 긍정적 에너지를 얻는 유일한 방법이다."
        ],
        "correctIndex": 2,
        "explanation": "본문 1~2번째 문장에서 좋은 수면은 뇌를 건강하게 하고 근육을 회복시키는 필수적인 과정이라고 설명합니다."
      },
      {
        "id": "q-passage-PRE_M1-8-4",
        "type": "main_idea",
        "typeLabel": "[예비중 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on why do we sleep and dream every night?",
          "② The rapid technological replacement of all natural phenomena related to why do we sleep and dream every night?",
          "③ The essential biological benefits of sleep and dreams for brain health",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about why do we sleep and dream every night? were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '우리는 왜 매일 밤 잠을 자고 꿈을 꿀까?'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The essential biological benefits of sleep and dreams for brain health'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-PRE_M1-9",
    "unitId": "unit-pre-m1",
    "unitTitle": "예비중(초6~중1) 입문 독해 마스터",
    "grade": "예비중",
    "semester": "입문",
    "category": "nonfiction",
    "categoryLabel": "예비중 비문학 • 예비중(초6~중1) 입문 독해 마스터",
    "title": "Smart Eating: Why Breakfast Fuels Your Brain",
    "koreanTitle": "아침 식사가 뇌를 깨우는 에너지 과학",
    "level": "pre_middle",
    "levelLabel": "예비중 입문",
    "source": "예비중 입문 교과서 & 연계 기출 변형",
    "wordCount": 48,
    "estimatedTime": "2분",
    "summary": "아침 식사가 집중력과 신체 대사에 미치는 과학적 메커니즘을 읽고, 접속사와 관계대명사 주격의 구조를 익힙니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Eating a wholesome breakfast gives your body the initial fuel needed for active school mornings.",
        "ko": "건강에 좋은 아침을 먹는 것은 활기찬 학교 아침에 필요한 초기 연료를 당신의 몸에 공급한다."
      },
      {
        "num": 2,
        "en": "After overnight fasting, your hungry brain craves natural glucose to solve complex problems and memorize facts.",
        "ko": "밤새 단식한 후, 배고픈 뇌는 복잡한 문제를 풀고 사실을 기억하기 위해 천연 포도당을 갈망한다."
      },
      {
        "num": 3,
        "en": "Students who skip morning meals often feel tired and lose concentration during early classes.",
        "ko": "아침 식사를 거르는 학생들은 종종 피로감을 느끼고 이른 수업 시간 동안 집중력을 잃는다."
      },
      {
        "num": 4,
        "en": "Fresh fruits, whole grains, and warm milk provide steady nutrition without causing sudden sleepiness.",
        "ko": "신선한 과일, 통곡물, 따뜻한 우유는 갑작스러운 졸음을 유발하지 않으면서 꾸준한 영양을 제공한다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "wholesome",
        "partOfSpeech": "adj.",
        "meaning": "건강에 좋은"
      },
      {
        "word": "glucose",
        "partOfSpeech": "n.",
        "meaning": "포도당"
      },
      {
        "word": "concentration",
        "partOfSpeech": "n.",
        "meaning": "집중, 집중력"
      }
    ],
    "questions": [
      {
        "id": "q-passage-PRE_M1-9-1",
        "type": "grammar",
        "typeLabel": "[예비중 내신 어법] 주격 관계대명사절 동사 수일치 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Students who ①<u>skips</u> breakfast ②<u>feel</u> tired, but healthy food ③<u>provides</u> fuel ④<u>needed</u> for school without ⑤<u>causing</u> sleepiness.",
        "options": [
          "① skips (선행사 Students가 복수이므로 복수형 동사 'skip'이 와야 함)",
          "② feel (주어 Students에 일치하는 복수 본동사)",
          "③ provides (단수 주어 healthy food에 일치하는 단수 동사)",
          "④ needed (과거분사 형용사)",
          "⑤ causing (전치사 without 뒤의 동명사)"
        ],
        "correctIndex": 0,
        "explanation": "주격 관계대명사 'who'의 선행사가 복수 명사인 'Students'이므로 관계사절 내 동사도 복수형인 'skip'이 되어야 합니다."
      },
      {
        "id": "q-passage-PRE_M1-9-2",
        "type": "blank",
        "typeLabel": "[예비중 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"After overnight fasting, your hungry brain craves (          빈칸          ) to solve complex problems.\"",
        "options": [
          "natural glucose",
          "artificial plastic dyes",
          "pure carbon dioxide",
          "boiling salty oil"
        ],
        "correctIndex": 0,
        "explanation": "뇌의 사고 활동과 문제 해결을 위해 갈망하는 뇌의 핵심 영양소는 'natural glucose(천연 포도당)'입니다."
      },
      {
        "id": "q-passage-PRE_M1-9-3",
        "type": "comprehension",
        "typeLabel": "[예비중 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "아침 식사를 거르면 첫 수업 시간 동안 집중력이 더욱 높아진다.",
          "과일과 통곡물은 급격한 졸음을 유발하는 해로운 음식이다.",
          "건강한 아침 식사는 학교 아침 활동에 필요한 소중한 초기 연료를 공급한다.",
          "인간의 뇌는 밤새 잠을 자는 동안 끊임없이 음식을 섭취한다."
        ],
        "correctIndex": 2,
        "explanation": "본문 첫 문장(Eating a wholesome breakfast gives your body the initial fuel needed for active school mornings)에 정확히 부합합니다."
      },
      {
        "id": "q-passage-PRE_M1-9-4",
        "type": "main_idea",
        "typeLabel": "[예비중 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why eating a nutritious breakfast fuels cognitive performance and energy",
          "② Why modern scholars completely reject any scientific research on smart eating: why breakfast fuels your brain",
          "③ The rapid technological replacement of all natural phenomena related to smart eating: why breakfast fuels your brain",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about smart eating: why breakfast fuels your brain were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '아침 식사가 뇌를 깨우는 에너지 과학'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Why eating a nutritious breakfast fuels cognitive performance and energy'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-PRE_M1-10",
    "unitId": "unit-pre-m1",
    "unitTitle": "예비중(초6~중1) 입문 독해 마스터",
    "grade": "예비중",
    "semester": "입문",
    "category": "fiction",
    "categoryLabel": "예비중 소설/우화 • 예비중(초6~중1) 입문 독해 마스터",
    "title": "The King and the Cobbler: True Happiness",
    "koreanTitle": "왕과 구두 수선공의 진정한 행복",
    "level": "pre_middle",
    "levelLabel": "예비중 입문",
    "source": "예비중 입문 교과서 & 연계 기출 변형",
    "wordCount": 54,
    "estimatedTime": "2분",
    "summary": "많은 재물을 가졌으나 늘 불안했던 왕과 가진 것은 적어도 매일 노래를 부르는 구두장이의 이야기를 통해 감각동사와 행복의 의미를 성찰합니다.",
    "sentences": [
      {
        "num": 1,
        "en": "A wealthy king lived in a golden castle, yet he always felt anxious and unhappy.",
        "ko": "부유한 왕이 황금 성에 살았지만, 그는 언제나 불안하고 불행하다고 느꼈다."
      },
      {
        "num": 2,
        "en": "One morning, he visited a poor cobbler who was singing cheerful songs while fixing old shoes.",
        "ko": "어느 날 아침, 그는 낡은 신발을 고치면서 쾌활한 노래를 부르고 있던 가난한 구두 수선공을 찾아갔다."
      },
      {
        "num": 3,
        "en": "Surprised by his joyful face, the ruler wondered how an impoverished man could smile so brightly.",
        "ko": "그의 기쁨에 찬 얼굴에 놀란 통치자는 어떻게 가난한 사람이 그렇게 밝게 미소 지을 수 있는지 궁금해했다."
      },
      {
        "num": 4,
        "en": "The humble craftsman answered that grateful appreciation for simple daily moments creates eternal peace.",
        "ko": "겸손한 장인은 단순한 일상의 순간들에 감사하는 마음이 영원한 평화를 만든다고 대답했다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "cobbler",
        "partOfSpeech": "n.",
        "meaning": "구두 수선공"
      },
      {
        "word": "impoverished",
        "partOfSpeech": "adj.",
        "meaning": "가난한, 빈곤한"
      },
      {
        "word": "grateful",
        "partOfSpeech": "adj.",
        "meaning": "감사하는, 고마워하는"
      }
    ],
    "questions": [
      {
        "id": "q-passage-PRE_M1-10-1",
        "type": "grammar",
        "typeLabel": "[예비중 내신 어법] 감각동사 보어의 형태 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "The wealthy king ①<u>lived</u> in a castle, but he felt ②<u>anxiously</u>, while the poor cobbler who was ③<u>singing</u> songs smiled ④<u>brightly</u> with a ⑤<u>grateful</u> heart.",
        "options": [
          "① lived (과거 시제 동사)",
          "② anxiously (감각동사 felt의 보어 자리이므로 형용사 'anxious'가 와야 함)",
          "③ singing (과거진행형 was singing의 현재분사)",
          "④ brightly (동사 smiled를 수식하는 부사)",
          "⑤ grateful (명사 heart를 수식하는 형용사)"
        ],
        "correctIndex": 1,
        "explanation": "감각동사 'feel'의 보어 자리에는 상태를 나타내는 형용사 'anxious'가 와야 하며, 부사인 'anxiously'는 올 수 없습니다."
      },
      {
        "id": "q-passage-PRE_M1-10-2",
        "type": "blank",
        "typeLabel": "[예비중 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"The humble craftsman answered that grateful appreciation for simple daily moments creates (          빈칸          ).\"",
        "options": [
          "eternal peace",
          "endless warfare",
          "extreme poverty",
          "massive golden jewelry"
        ],
        "correctIndex": 0,
        "explanation": "단순한 일상에 감사하는 마음이 마음속 'eternal peace(영원한 평화)'를 가져온다는 교훈적 결론이 가장 적절합니다."
      },
      {
        "id": "q-passage-PRE_M1-10-3",
        "type": "comprehension",
        "typeLabel": "[예비중 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "황금 성에 살던 부유한 왕은 매일 넘치는 행복과 만족을 누렸다.",
          "구두 수선공은 자신의 가난을 원망하며 하루 종일 슬프게 울고 있었다.",
          "구두 수선공은 낡은 신발을 고치면서도 밝고 쾌활한 노래를 부르고 있었다.",
          "왕은 구두 수선공의 전 재산을 몰수하고 감옥에 가두었다."
        ],
        "correctIndex": 2,
        "explanation": "본문 2번째 문장(visiting a poor cobbler who was singing cheerful songs while fixing old shoes)과 일치합니다."
      },
      {
        "id": "q-passage-PRE_M1-10-4",
        "type": "main_idea",
        "typeLabel": "[예비중 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the king and the cobbler: true happiness",
          "② The rapid technological replacement of all natural phenomena related to the king and the cobbler: true happiness",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Finding true happiness: Gratitude for simple daily moments over wealth",
          "⑤ A historical debate proving that traditional theories about the king and the cobbler: true happiness were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '왕과 구두 수선공의 진정한 행복'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Finding true happiness: Gratitude for simple daily moments over wealth'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_1-1",
    "unitId": "unit-m1-1",
    "unitTitle": "중 1-1 내신 독해 마스터",
    "grade": "중1",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 1-1 내신 독해 마스터",
    "title": "The Amazing Secrets of Honeybees",
    "koreanTitle": "꿀벌의 놀라운 생태와 비밀",
    "level": "middle1_1",
    "levelLabel": "중1 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-1 내신 독해 마스터)",
    "wordCount": 51,
    "estimatedTime": "2.5분",
    "summary": "꿀벌의 놀라운 생태와 비밀을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Honeybees are essential pollinators that maintain the balance of our ecosystem.",
        "ko": "꿀벌은 생태계의 균형을 유지하는 필수적인 꽃가루 매개자이다."
      },
      {
        "num": 2,
        "en": "They communicate the location of flowers through a specialized waggle dance.",
        "ko": "그들은 특화된 8자 춤을 통해 꽃의 위치를 서로 소통한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "pollinator",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: pollinator"
      },
      {
        "word": "waggle",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: waggle"
      },
      {
        "word": "ecosystem",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: ecosystem"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_1-1-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Honeybees ①<u>are</u> essential pollinators ②<u>is</u> that maintain the balance of our ecosystem, and they ③<u>communicate</u> the location of ④<u>through</u> flowers through a specialized waggle dance ⑤<u>which</u> is observed.",
        "options": [
          "① are (보어 또는 서술어 역할)",
          "② is (주어 'Honeybees'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ communicate (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Honeybees' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_1-1-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"They communicate the location of (          빈칸          ).\"",
        "options": [
          "flowers through a specialized waggle dance",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [The Amazing Secrets of Honeybees] 지문에서 핵심적인 내용인 'flowers through a specialized waggle dance'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_1-1-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '꿀벌의 놀라운 생태와 비밀'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Honeybees'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "꿀벌은 생태계의 균형을 유지하는 필수적인 꽃가루 매개자이다이며, 그들은 특화된 8자 춤을 통해 꽃의 위치를 서로 소통한다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '꿀벌의 놀라운 생태와 비밀'에 관하여 '꿀벌은 생태계의 균형을 유지하는 필수적인 꽃가루 매개자이다'이자 '그들은 특화된 8자 춤을 통해 꽃의 위치를 서로 소통한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_1-1-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the amazing secrets of honeybees",
          "② The vital ecological role of honeybees and their unique communication",
          "③ The rapid technological replacement of all natural phenomena related to the amazing secrets of honeybees",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the amazing secrets of honeybees were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '꿀벌의 놀라운 생태와 비밀'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The vital ecological role of honeybees and their unique communication'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_1-2",
    "unitId": "unit-m1-1",
    "unitTitle": "중 1-1 내신 독해 마스터",
    "grade": "중1",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 1-1 내신 독해 마스터",
    "title": "The Little Prince and the Desert Fox",
    "koreanTitle": "어린 왕자와 사막 여우의 만남",
    "level": "middle1_1",
    "levelLabel": "중1 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-1 내신 독해 마스터)",
    "wordCount": 56,
    "estimatedTime": "2.5분",
    "summary": "어린 왕자와 사막 여우의 만남을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "The fox explained that to tame someone means to establish emotional ties.",
        "ko": "여우는 누군가를 길들인다는 것이 감정적인 관계를 맺는 것을 의미한다고 설명했다."
      },
      {
        "num": 2,
        "en": "One sees clearly only with the heart; what is essential is invisible to the eyes.",
        "ko": "오직 마음으로 보아야만 분명하게 볼 수 있으며, 가장 중요한 것은 눈에 보이지 않는다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "tame",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: tame"
      },
      {
        "word": "essential",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: essential"
      },
      {
        "word": "invisible",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: invisible"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_1-2-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "The ①<u>fox</u> explained that ②<u>maintains</u> to tame someone means to establish emotional ties, and they ③<u>sees</u> clearly only with ④<u>through</u> the heart; what is essential is invisible to the eyes ⑤<u>which</u> is observed.",
        "options": [
          "① fox (보어 또는 서술어 역할)",
          "② maintains (주어 'The'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ sees (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'The' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_1-2-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"One sees clearly only with the heart; (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "what is essential is invisible to the eyes",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [The Little Prince and the Desert Fox] 지문에서 핵심적인 내용인 'what is essential is invisible to the eyes'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_1-2-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '어린 왕자와 사막 여우의 만남'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'The'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "여우는 누군가를 길들인다는 것이 감정적인 관계를 맺는 것을 의미한다고 설명했다이며, 오직 마음으로 보아야만 분명하게 볼 수 있으며, 가장 중요한 것은 눈에 보이지 않는다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '어린 왕자와 사막 여우의 만남'에 관하여 '여우는 누군가를 길들인다는 것이 감정적인 관계를 맺는 것을 의미한다고 설명했다'이자 '오직 마음으로 보아야만 분명하게 볼 수 있으며, 가장 중요한 것은 눈에 보이지 않는다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_1-2-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the little prince and the desert fox",
          "② The rapid technological replacement of all natural phenomena related to the little prince and the desert fox",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about the little prince and the desert fox were all harmful",
          "⑤ Moral lessons and character wisdom reflected in 'The Little Prince and the Desert Fox'"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '어린 왕자와 사막 여우의 만남'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'The Little Prince and the Desert Fox''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_1-3",
    "unitId": "unit-m1-1",
    "unitTitle": "중 1-1 내신 독해 마스터",
    "grade": "중1",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 1-1 내신 독해 마스터",
    "title": "Why Do We Dream during Sleep?",
    "koreanTitle": "우리는 수면 중에 왜 꿈을 꿀까?",
    "level": "middle1_1",
    "levelLabel": "중1 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-1 내신 독해 마스터)",
    "wordCount": 52,
    "estimatedTime": "2.5분",
    "summary": "우리는 수면 중에 왜 꿈을 꿀까?을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "During REM sleep, our brain organizes memories and filters daily emotional stress.",
        "ko": "렘수면 동안 우리의 뇌는 기억을 정리하고 일상적인 감정적 스트레스를 걸러낸다."
      },
      {
        "num": 2,
        "en": "Scientists believe dreams play a crucial role in consolidating long-term learning.",
        "ko": "과학자들은 꿈이 장기적인 학습 내용을 강화하고 정착시키는 데 결정적인 역할을 한다고 믿는다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "consolidate",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: consolidate"
      },
      {
        "word": "crucial",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: crucial"
      },
      {
        "word": "memory",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: memory"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_1-3-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "During ①<u>REM</u> sleep, our ②<u>maintains</u> brain organizes memories and filters daily emotional stress, and they ③<u>believe</u> dreams play a ④<u>through</u> crucial role in consolidating long-term learning ⑤<u>which</u> is observed.",
        "options": [
          "① REM (보어 또는 서술어 역할)",
          "② maintains (주어 'During'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ believe (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'During' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_1-3-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Scientists believe dreams play a (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "crucial role in consolidating long-term learning",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [Why Do We Dream during Sleep?] 지문에서 핵심적인 내용인 'crucial role in consolidating long-term learning'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_1-3-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "렘수면 동안 우리의 뇌는 기억을 정리하고 일상적인 감정적 스트레스를 걸러낸다이며, 과학자들은 꿈이 장기적인 학습 내용을 강화하고 정착시키는 데 결정적인 역할을 한다고 믿는다이다.",
          "본문에서는 '우리는 수면 중에 왜 꿈을 꿀까?'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'During'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '우리는 수면 중에 왜 꿈을 꿀까?'에 관하여 '렘수면 동안 우리의 뇌는 기억을 정리하고 일상적인 감정적 스트레스를 걸러낸다'이자 '과학자들은 꿈이 장기적인 학습 내용을 강화하고 정착시키는 데 결정적인 역할을 한다고 믿는다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_1-3-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on why do we dream during sleep?",
          "② The rapid technological replacement of all natural phenomena related to why do we dream during sleep?",
          "③ The essential biological benefits of sleep and dreams for brain health",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about why do we dream during sleep? were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '우리는 수면 중에 왜 꿈을 꿀까?'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The essential biological benefits of sleep and dreams for brain health'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_1-4",
    "unitId": "unit-m1-1",
    "unitTitle": "중 1-1 내신 독해 마스터",
    "grade": "중1",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 1-1 내신 독해 마스터",
    "title": "Tom Sawyer's Clever Fence Painting",
    "koreanTitle": "톰 소여의 기발한 울타리 페인트칠",
    "level": "middle1_1",
    "levelLabel": "중1 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-1 내신 독해 마스터)",
    "wordCount": 56,
    "estimatedTime": "2.5분",
    "summary": "톰 소여의 기발한 울타리 페인트칠을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Tom pretended that whitewashing the fence was an enjoyable and exclusive privilege.",
        "ko": "톰은 울타리에 회반죽 칠을 하는 것이 아주 즐겁고 독점적인 특권인 것처럼 행동했다."
      },
      {
        "num": 2,
        "en": "Soon, all his friends gave him small treasures just to take a turn at painting.",
        "ko": "곧 그의 모든 친구들은 페인트칠을 한 번 해보기 위해 톰에게 작은 보물들을 건넸다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "privilege",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: privilege"
      },
      {
        "word": "whitewash",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: whitewash"
      },
      {
        "word": "treasure",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: treasure"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_1-4-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Tom ①<u>pretended</u> that whitewashing ②<u>maintains</u> the fence was an enjoyable and exclusive privilege, and they ③<u>all</u> his friends gave ④<u>through</u> him small treasures just to take a turn at painting ⑤<u>which</u> is observed.",
        "options": [
          "① pretended (보어 또는 서술어 역할)",
          "② maintains (주어 'Tom'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ all (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Tom' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_1-4-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Soon, all his friends gave him small (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "treasures just to take a turn at painting"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [Tom Sawyer's Clever Fence Painting] 지문에서 핵심적인 내용인 'treasures just to take a turn at painting'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_1-4-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '톰 소여의 기발한 울타리 페인트칠'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "톰은 울타리에 회반죽 칠을 하는 것이 아주 즐겁고 독점적인 특권인 것처럼 행동했다이며, 곧 그의 모든 친구들은 페인트칠을 한 번 해보기 위해 톰에게 작은 보물들을 건넸다이다.",
          "지문에 따르면 'Tom'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '톰 소여의 기발한 울타리 페인트칠'에 관하여 '톰은 울타리에 회반죽 칠을 하는 것이 아주 즐겁고 독점적인 특권인 것처럼 행동했다'이자 '곧 그의 모든 친구들은 페인트칠을 한 번 해보기 위해 톰에게 작은 보물들을 건넸다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_1-4-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Moral lessons and character wisdom reflected in 'Tom Sawyer's Clever Fence Painting'",
          "② Why modern scholars completely reject any scientific research on tom sawyer's clever fence painting",
          "③ The rapid technological replacement of all natural phenomena related to tom sawyer's clever fence painting",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about tom sawyer's clever fence painting were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '톰 소여의 기발한 울타리 페인트칠'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Tom Sawyer's Clever Fence Painting''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_1-5",
    "unitId": "unit-m1-1",
    "unitTitle": "중 1-1 내신 독해 마스터",
    "grade": "중1",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 1-1 내신 독해 마스터",
    "title": "The Ocean's Deepest Mysteries",
    "koreanTitle": "심해 바다의 가장 깊은 신비",
    "level": "middle1_1",
    "levelLabel": "중1 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-1 내신 독해 마스터)",
    "wordCount": 51,
    "estimatedTime": "2.5분",
    "summary": "심해 바다의 가장 깊은 신비을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "The Mariana Trench is deeper than the height of Mount Everest.",
        "ko": "마리아나 해구는 에베레스트 산의 높이보다 훨씬 더 깊다."
      },
      {
        "num": 2,
        "en": "Deep-sea creatures create their own bioluminescent light to navigate total darkness.",
        "ko": "심해 생물들은 칠흑 같은 어둠 속에서 길을 찾기 위해 스스로 생체 발광 빛을 낸다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "bioluminescent",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: bioluminescent"
      },
      {
        "word": "trench",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: trench"
      },
      {
        "word": "navigate",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: navigate"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_1-5-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "The ①<u>Mariana</u> Trench is ②<u>maintains</u> deeper than the height of Mount Everest, and they ③<u>creatures</u> create their own ④<u>through</u> bioluminescent light to navigate total darkness ⑤<u>which</u> is observed.",
        "options": [
          "① Mariana (보어 또는 서술어 역할)",
          "② maintains (주어 'The'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ creatures (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'The' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_1-5-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Deep-sea creatures create their own (          빈칸          ).\"",
        "options": [
          "bioluminescent light to navigate total darkness",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [The Ocean's Deepest Mysteries] 지문에서 핵심적인 내용인 'bioluminescent light to navigate total darkness'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_1-5-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '심해 바다의 가장 깊은 신비'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'The'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "마리아나 해구는 에베레스트 산의 높이보다 훨씬 더 깊다이며, 심해 생물들은 칠흑 같은 어둠 속에서 길을 찾기 위해 스스로 생체 발광 빛을 낸다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '심해 바다의 가장 깊은 신비'에 관하여 '마리아나 해구는 에베레스트 산의 높이보다 훨씬 더 깊다'이자 '심해 생물들은 칠흑 같은 어둠 속에서 길을 찾기 위해 스스로 생체 발광 빛을 낸다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_1-5-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the ocean's deepest mysteries",
          "② The rapid technological replacement of all natural phenomena related to the ocean's deepest mysteries",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Exploring the fundamental mechanisms and importance of 심해 바다의 가장 깊은 신비",
          "⑤ A historical debate proving that traditional theories about the ocean's deepest mysteries were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '심해 바다의 가장 깊은 신비'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 심해 바다의 가장 깊은 신비'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_1-6",
    "unitId": "unit-m1-1",
    "unitTitle": "중 1-1 내신 독해 마스터",
    "grade": "중1",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 1-1 내신 독해 마스터",
    "title": "Alice and the White Rabbit's Pocket Watch",
    "koreanTitle": "이상한 나라의 앨리스와 회중시계 토끼",
    "level": "middle1_1",
    "levelLabel": "중1 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-1 내신 독해 마스터)",
    "wordCount": 55,
    "estimatedTime": "2.5분",
    "summary": "이상한 나라의 앨리스와 회중시계 토끼을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Alice followed a rabbit wearing a waistcoat who was anxiously checking the time.",
        "ko": "앨리스는 조끼를 입고 초조하게 시간을 확인하는 토끼를 따라갔다."
      },
      {
        "num": 2,
        "en": "She tumbled down a curious rabbit hole into a world defying ordinary logic.",
        "ko": "그녀는 기이한 토끼 굴로 굴러떨어져 일상적인 논리를 거스르는 세계로 들어갔다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "waistcoat",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: waistcoat"
      },
      {
        "word": "anxiously",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: anxiously"
      },
      {
        "word": "defying",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: defying"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_1-6-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Alice ①<u>followed</u> a rabbit ②<u>maintains</u> wearing a waistcoat who was anxiously checking the time, and they ③<u>tumbled</u> down a curious ④<u>through</u> rabbit hole into a world defying ordinary logic ⑤<u>which</u> is observed.",
        "options": [
          "① followed (보어 또는 서술어 역할)",
          "② maintains (주어 'Alice'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ tumbled (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Alice' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_1-6-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"She tumbled down a curious rabbit (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "hole into a world defying ordinary logic",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [Alice and the White Rabbit's Pocket Watch] 지문에서 핵심적인 내용인 'hole into a world defying ordinary logic'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_1-6-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '이상한 나라의 앨리스와 회중시계 토끼'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Alice'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "앨리스는 조끼를 입고 초조하게 시간을 확인하는 토끼를 따라갔다이며, 그녀는 기이한 토끼 굴로 굴러떨어져 일상적인 논리를 거스르는 세계로 들어갔다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '이상한 나라의 앨리스와 회중시계 토끼'에 관하여 '앨리스는 조끼를 입고 초조하게 시간을 확인하는 토끼를 따라갔다'이자 '그녀는 기이한 토끼 굴로 굴러떨어져 일상적인 논리를 거스르는 세계로 들어갔다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_1-6-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on alice and the white rabbit's pocket watch",
          "② Moral lessons and character wisdom reflected in 'Alice and the White Rabbit's Pocket Watch'",
          "③ The rapid technological replacement of all natural phenomena related to alice and the white rabbit's pocket watch",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about alice and the white rabbit's pocket watch were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '이상한 나라의 앨리스와 회중시계 토끼'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Alice and the White Rabbit's Pocket Watch''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_1-7",
    "unitId": "unit-m1-1",
    "unitTitle": "중 1-1 내신 독해 마스터",
    "grade": "중1",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 1-1 내신 독해 마스터",
    "title": "How Plants Talk to Each Other",
    "koreanTitle": "식물들은 어떻게 서로 대화할까?",
    "level": "middle1_1",
    "levelLabel": "중1 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-1 내신 독해 마스터)",
    "wordCount": 52,
    "estimatedTime": "2.5분",
    "summary": "식물들은 어떻게 서로 대화할까?을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Trees share nutrients and warning signals through an underground fungal network.",
        "ko": "나무들은 지하의 곰팡이 균사 네트워크를 통해 영양분과 경고 신호를 공유한다."
      },
      {
        "num": 2,
        "en": "When attacked by pests, they emit chemical scents to alert nearby neighbors.",
        "ko": "해충의 공격을 받으면 나무들은 화학 물질을 분출해 인근 이웃들에게 경고를 보낸다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "nutrient",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: nutrient"
      },
      {
        "word": "fungal",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: fungal"
      },
      {
        "word": "pest",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: pest"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_1-7-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Trees ①<u>share</u> nutrients and ②<u>maintains</u> warning signals through an underground fungal network, and they ③<u>attacked</u> by pests, they ④<u>through</u> emit chemical scents to alert nearby neighbors ⑤<u>which</u> is observed.",
        "options": [
          "① share (보어 또는 서술어 역할)",
          "② maintains (주어 'Trees'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ attacked (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Trees' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_1-7-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"When attacked by pests, they emit (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "chemical scents to alert nearby neighbors",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [How Plants Talk to Each Other] 지문에서 핵심적인 내용인 'chemical scents to alert nearby neighbors'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_1-7-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "나무들은 지하의 곰팡이 균사 네트워크를 통해 영양분과 경고 신호를 공유한다이며, 해충의 공격을 받으면 나무들은 화학 물질을 분출해 인근 이웃들에게 경고를 보낸다이다.",
          "본문에서는 '식물들은 어떻게 서로 대화할까?'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Trees'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '식물들은 어떻게 서로 대화할까?'에 관하여 '나무들은 지하의 곰팡이 균사 네트워크를 통해 영양분과 경고 신호를 공유한다'이자 '해충의 공격을 받으면 나무들은 화학 물질을 분출해 인근 이웃들에게 경고를 보낸다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_1-7-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on how plants talk to each other",
          "② The rapid technological replacement of all natural phenomena related to how plants talk to each other",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about how plants talk to each other were all harmful",
          "⑤ The cooperative social structure and survival strategies of ants underground"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '식물들은 어떻게 서로 대화할까?'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The cooperative social structure and survival strategies of ants underground'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_1-8",
    "unitId": "unit-m1-1",
    "unitTitle": "중 1-1 내신 독해 마스터",
    "grade": "중1",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 1-1 내신 독해 마스터",
    "title": "Gulliver Among the Tiny Lilliputians",
    "koreanTitle": "걸리버 여행기: 소인국 릴리퍼트",
    "level": "middle1_1",
    "levelLabel": "중1 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-1 내신 독해 마스터)",
    "wordCount": 56,
    "estimatedTime": "2.5분",
    "summary": "걸리버 여행기: 소인국 릴리퍼트을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Gulliver woke up stranded on a beach, tied down by hundreds of slender threads.",
        "ko": "걸리버는 해변에 좌초된 채 수백 가닥의 가느다란 실에 묶여 깨어났다."
      },
      {
        "num": 2,
        "en": "The tiny inhabitants were amazed by the colossal stranger from across the sea.",
        "ko": "작은 주민들은 바다 건너에서 온 거대한 이방인을 보고 경이로움에 사로잡혔다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "stranded",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: stranded"
      },
      {
        "word": "inhabitant",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: inhabitant"
      },
      {
        "word": "colossal",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: colossal"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_1-8-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Gulliver ①<u>woke</u> up stranded ②<u>maintains</u> on a beach, tied down by hundreds of slender threads, and they ③<u>tiny</u> inhabitants were amazed ④<u>through</u> by the colossal stranger from across the sea ⑤<u>which</u> is observed.",
        "options": [
          "① woke (보어 또는 서술어 역할)",
          "② maintains (주어 'Gulliver'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ tiny (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Gulliver' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_1-8-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"The tiny inhabitants were amazed by (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "the colossal stranger from across the sea"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [Gulliver Among the Tiny Lilliputians] 지문에서 핵심적인 내용인 'the colossal stranger from across the sea'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_1-8-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '걸리버 여행기: 소인국 릴리퍼트'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "걸리버는 해변에 좌초된 채 수백 가닥의 가느다란 실에 묶여 깨어났다이며, 작은 주민들은 바다 건너에서 온 거대한 이방인을 보고 경이로움에 사로잡혔다이다.",
          "지문에 따르면 'Gulliver'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '걸리버 여행기: 소인국 릴리퍼트'에 관하여 '걸리버는 해변에 좌초된 채 수백 가닥의 가느다란 실에 묶여 깨어났다'이자 '작은 주민들은 바다 건너에서 온 거대한 이방인을 보고 경이로움에 사로잡혔다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_1-8-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on gulliver among the tiny lilliputians",
          "② The rapid technological replacement of all natural phenomena related to gulliver among the tiny lilliputians",
          "③ Moral lessons and character wisdom reflected in 'Gulliver Among the Tiny Lilliputians'",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about gulliver among the tiny lilliputians were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '걸리버 여행기: 소인국 릴리퍼트'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Gulliver Among the Tiny Lilliputians''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_1-9",
    "unitId": "unit-m1-1",
    "unitTitle": "중 1-1 내신 독해 마스터",
    "grade": "중1",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 1-1 내신 독해 마스터",
    "title": "The Story of Renewable Solar Energy",
    "koreanTitle": "햇빛으로 만드는 태양광 친환경 에너지",
    "level": "middle1_1",
    "levelLabel": "중1 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-1 내신 독해 마스터)",
    "wordCount": 51,
    "estimatedTime": "2.5분",
    "summary": "햇빛으로 만드는 태양광 친환경 에너지을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Solar panels convert photons from sunlight directly into clean electricity.",
        "ko": "태양광 패널은 햇빛의 광자를 깨끗한 전기로 직접 변환한다."
      },
      {
        "num": 2,
        "en": "Using solar energy reduces carbon emissions and helps combat global climate change.",
        "ko": "태양 에너지를 사용하면 탄소 배출량을 줄이고 지구 기후 변화를 막는 데 도움이 된다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "convert",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: convert"
      },
      {
        "word": "emission",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: emission"
      },
      {
        "word": "combat",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: combat"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_1-9-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Solar ①<u>panels</u> convert photons ②<u>maintains</u> from sunlight directly into clean electricity, and they ③<u>solar</u> energy reduces carbon ④<u>through</u> emissions and helps combat global climate change ⑤<u>which</u> is observed.",
        "options": [
          "① panels (보어 또는 서술어 역할)",
          "② maintains (주어 'Solar'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ solar (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Solar' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_1-9-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Using solar energy reduces carbon emissions (          빈칸          ).\"",
        "options": [
          "and helps combat global climate change",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [The Story of Renewable Solar Energy] 지문에서 핵심적인 내용인 'and helps combat global climate change'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_1-9-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '햇빛으로 만드는 태양광 친환경 에너지'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Solar'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "태양광 패널은 햇빛의 광자를 깨끗한 전기로 직접 변환한다이며, 태양 에너지를 사용하면 탄소 배출량을 줄이고 지구 기후 변화를 막는 데 도움이 된다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '햇빛으로 만드는 태양광 친환경 에너지'에 관하여 '태양광 패널은 햇빛의 광자를 깨끗한 전기로 직접 변환한다'이자 '태양 에너지를 사용하면 탄소 배출량을 줄이고 지구 기후 변화를 막는 데 도움이 된다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_1-9-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Exploring the fundamental mechanisms and importance of 햇빛으로 만드는 태양광 친환경 에너지",
          "② Why modern scholars completely reject any scientific research on the story of renewable solar energy",
          "③ The rapid technological replacement of all natural phenomena related to the story of renewable solar energy",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the story of renewable solar energy were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '햇빛으로 만드는 태양광 친환경 에너지'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 햇빛으로 만드는 태양광 친환경 에너지'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_1-10",
    "unitId": "unit-m1-1",
    "unitTitle": "중 1-1 내신 독해 마스터",
    "grade": "중1",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 1-1 내신 독해 마스터",
    "title": "The Boy Who Cried Wolf: A Moral Tale",
    "koreanTitle": "양치기 소년과 늑대: 신뢰의 소중함",
    "level": "middle1_1",
    "levelLabel": "중1 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-1 내신 독해 마스터)",
    "wordCount": 54,
    "estimatedTime": "2.5분",
    "summary": "양치기 소년과 늑대: 신뢰의 소중함을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "The shepherd boy repeatedly fooled the villagers with false alarms about a wolf.",
        "ko": "양치기 소년은 늑대가 나타났다는 거짓 경보로 마을 사람들을 거듭 속였다."
      },
      {
        "num": 2,
        "en": "When a real predator appeared, nobody believed his desperate cries for help.",
        "ko": "진짜 포식자가 나타났을 때, 아무도 도움을 구하는 그의 절박한 외침을 믿지 않았다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "predator",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: predator"
      },
      {
        "word": "shepherd",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: shepherd"
      },
      {
        "word": "desperate",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: desperate"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_1-10-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "The ①<u>shepherd</u> boy repeatedly ②<u>maintains</u> fooled the villagers with false alarms about a wolf, and they ③<u>a</u> real predator appeared, ④<u>through</u> nobody believed his desperate cries for help ⑤<u>which</u> is observed.",
        "options": [
          "① shepherd (보어 또는 서술어 역할)",
          "② maintains (주어 'The'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ a (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'The' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_1-10-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"When a real predator appeared, nobody (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "believed his desperate cries for help",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [The Boy Who Cried Wolf: A Moral Tale] 지문에서 핵심적인 내용인 'believed his desperate cries for help'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_1-10-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '양치기 소년과 늑대: 신뢰의 소중함'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'The'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "양치기 소년은 늑대가 나타났다는 거짓 경보로 마을 사람들을 거듭 속였다이며, 진짜 포식자가 나타났을 때, 아무도 도움을 구하는 그의 절박한 외침을 믿지 않았다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '양치기 소년과 늑대: 신뢰의 소중함'에 관하여 '양치기 소년은 늑대가 나타났다는 거짓 경보로 마을 사람들을 거듭 속였다'이자 '진짜 포식자가 나타났을 때, 아무도 도움을 구하는 그의 절박한 외침을 믿지 않았다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_1-10-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the boy who cried wolf: a moral tale",
          "② The rapid technological replacement of all natural phenomena related to the boy who cried wolf: a moral tale",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ The serious consequences of repeated dishonesty: A lesson from the shepherd boy",
          "⑤ A historical debate proving that traditional theories about the boy who cried wolf: a moral tale were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '양치기 소년과 늑대: 신뢰의 소중함'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The serious consequences of repeated dishonesty: A lesson from the shepherd boy'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_2-11",
    "unitId": "unit-m1-2",
    "unitTitle": "중 1-2 내신 독해 마스터",
    "grade": "중1",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 1-2 내신 독해 마스터",
    "title": "The Wonders of the Human Heart",
    "koreanTitle": "잠들지 않는 심장의 기적",
    "level": "middle1_2",
    "levelLabel": "중1 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-2 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "잠들지 않는 심장의 기적을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "The human heart beats approximately one hundred thousand times every single day.",
        "ko": "인간의 심장은 하루에 약 10만 번씩 쉼 없이 뛴다."
      },
      {
        "num": 2,
        "en": "It pumps oxygen-rich blood through thousands of miles of complex blood vessels.",
        "ko": "심장은 수천 마일에 달하는 복잡한 혈관을 통해 산소가 풍부한 혈액을 공급한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "vessel",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: vessel"
      },
      {
        "word": "pump",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: pump"
      },
      {
        "word": "approximately",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: approximately"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_2-11-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "The ①<u>human</u> heart beats ②<u>maintains</u> approximately one hundred thousand times every single day, and they ③<u>pumps</u> oxygen-rich blood through ④<u>through</u> thousands of miles of complex blood vessels ⑤<u>which</u> is observed.",
        "options": [
          "① human (보어 또는 서술어 역할)",
          "② maintains (주어 'The'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ pumps (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'The' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_2-11-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"It pumps oxygen-rich blood through thousands (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "of miles of complex blood vessels",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [The Wonders of the Human Heart] 지문에서 핵심적인 내용인 'of miles of complex blood vessels'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_2-11-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "인간의 심장은 하루에 약 10만 번씩 쉼 없이 뛴다이며, 심장은 수천 마일에 달하는 복잡한 혈관을 통해 산소가 풍부한 혈액을 공급한다이다.",
          "본문에서는 '잠들지 않는 심장의 기적'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'The'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '잠들지 않는 심장의 기적'에 관하여 '인간의 심장은 하루에 약 10만 번씩 쉼 없이 뛴다'이자 '심장은 수천 마일에 달하는 복잡한 혈관을 통해 산소가 풍부한 혈액을 공급한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_2-11-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the wonders of the human heart",
          "② Exploring the fundamental mechanisms and importance of 잠들지 않는 심장의 기적",
          "③ The rapid technological replacement of all natural phenomena related to the wonders of the human heart",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the wonders of the human heart were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '잠들지 않는 심장의 기적'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 잠들지 않는 심장의 기적'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_2-12",
    "unitId": "unit-m1-2",
    "unitTitle": "중 1-2 내신 독해 마스터",
    "grade": "중1",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 1-2 내신 독해 마스터",
    "title": "A Christmas Carol: Scrooge's Transformation",
    "koreanTitle": "크리스마스 캐럴: 스크루지의 거듭남",
    "level": "middle1_2",
    "levelLabel": "중1 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-2 내신 독해 마스터)",
    "wordCount": 57,
    "estimatedTime": "2.5분",
    "summary": "크리스마스 캐럴: 스크루지의 거듭남을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Ebenezer Scrooge was a greedy miser who cared for nothing except accumulating money.",
        "ko": "에비니저 스크루지는 돈을 축적하는 것 외에는 아무것에도 신경 쓰지 않는 욕심쟁이 구두쇠였다."
      },
      {
        "num": 2,
        "en": "After three spirits visited him, he opened his warm heart to help those in need.",
        "ko": "세 유령이 다녀간 후, 그는 가난한 이들을 돕기 위해 따뜻한 마음을 열었다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "miser",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: miser"
      },
      {
        "word": "accumulate",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: accumulate"
      },
      {
        "word": "spirit",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: spirit"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_2-12-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Ebenezer ①<u>Scrooge</u> was a ②<u>maintains</u> greedy miser who cared for nothing except accumulating money, and they ③<u>three</u> spirits visited him, ④<u>through</u> he opened his warm heart to help those in need ⑤<u>which</u> is observed.",
        "options": [
          "① Scrooge (보어 또는 서술어 역할)",
          "② maintains (주어 'Ebenezer'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ three (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Ebenezer' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_2-12-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"After three spirits visited him, he opened (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "his warm heart to help those in need"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [A Christmas Carol: Scrooge's Transformation] 지문에서 핵심적인 내용인 'his warm heart to help those in need'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_2-12-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '크리스마스 캐럴: 스크루지의 거듭남'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "에비니저 스크루지는 돈을 축적하는 것 외에는 아무것에도 신경 쓰지 않는 욕심쟁이 구두쇠였다이며, 세 유령이 다녀간 후, 그는 가난한 이들을 돕기 위해 따뜻한 마음을 열었다이다.",
          "지문에 따르면 'Ebenezer'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '크리스마스 캐럴: 스크루지의 거듭남'에 관하여 '에비니저 스크루지는 돈을 축적하는 것 외에는 아무것에도 신경 쓰지 않는 욕심쟁이 구두쇠였다'이자 '세 유령이 다녀간 후, 그는 가난한 이들을 돕기 위해 따뜻한 마음을 열었다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_2-12-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on a christmas carol: scrooge's transformation",
          "② The rapid technological replacement of all natural phenomena related to a christmas carol: scrooge's transformation",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about a christmas carol: scrooge's transformation were all harmful",
          "⑤ Moral lessons and character wisdom reflected in 'A Christmas Carol: Scrooge's Transformation'"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '크리스마스 캐럴: 스크루지의 거듭남'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'A Christmas Carol: Scrooge's Transformation''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_2-13",
    "unitId": "unit-m1-2",
    "unitTitle": "중 1-2 내신 독해 마스터",
    "grade": "중1",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 1-2 내신 독해 마스터",
    "title": "How Migratory Birds Navigate Continents",
    "koreanTitle": "철새들은 어떻게 대륙을 건널까?",
    "level": "middle1_2",
    "levelLabel": "중1 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-2 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "철새들은 어떻게 대륙을 건널까?을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Migratory birds use the Earth's magnetic field and constellations to guide flight.",
        "ko": "철새들은 비행 길을 찾기 위해 지구의 자기장과 밤하늘의 별자리를 활용한다."
      },
      {
        "num": 2,
        "en": "Some species travel thousands of miles without stopping for food or rest.",
        "ko": "어떤 종은 먹이나 휴식 없이 수천 마일을 쉬지 않고 날아간다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "magnetic",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: magnetic"
      },
      {
        "word": "constellation",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: constellation"
      },
      {
        "word": "migratory",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: migratory"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_2-13-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Migratory ①<u>birds</u> use the ②<u>maintains</u> Earth's magnetic field and constellations to guide flight, and they ③<u>species</u> travel thousands of ④<u>through</u> miles without stopping for food or rest ⑤<u>which</u> is observed.",
        "options": [
          "① birds (보어 또는 서술어 역할)",
          "② maintains (주어 'Migratory'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ species (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Migratory' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_2-13-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Some species travel thousands of miles (          빈칸          ).\"",
        "options": [
          "without stopping for food or rest",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [How Migratory Birds Navigate Continents] 지문에서 핵심적인 내용인 'without stopping for food or rest'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_2-13-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '철새들은 어떻게 대륙을 건널까?'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Migratory'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "철새들은 비행 길을 찾기 위해 지구의 자기장과 밤하늘의 별자리를 활용한다이며, 어떤 종은 먹이나 휴식 없이 수천 마일을 쉬지 않고 날아간다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '철새들은 어떻게 대륙을 건널까?'에 관하여 '철새들은 비행 길을 찾기 위해 지구의 자기장과 밤하늘의 별자리를 활용한다'이자 '어떤 종은 먹이나 휴식 없이 수천 마일을 쉬지 않고 날아간다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_2-13-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on how migratory birds navigate continents",
          "② The rapid technological replacement of all natural phenomena related to how migratory birds navigate continents",
          "③ Exploring the fundamental mechanisms and importance of 철새들은 어떻게 대륙을 건널까?",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about how migratory birds navigate continents were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '철새들은 어떻게 대륙을 건널까?'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 철새들은 어떻게 대륙을 건널까?'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_2-14",
    "unitId": "unit-m1-2",
    "unitTitle": "중 1-2 내신 독해 마스터",
    "grade": "중1",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 1-2 내신 독해 마스터",
    "title": "The Happy Prince and the Little Swallow",
    "koreanTitle": "오스카 와일드: 행복한 왕자와 제비",
    "level": "middle1_2",
    "levelLabel": "중1 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-2 내신 독해 마스터)",
    "wordCount": 58,
    "estimatedTime": "2.5분",
    "summary": "오스카 와일드: 행복한 왕자와 제비을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "The statue of the Happy Prince gave away his golden leaves to comfort suffering citizens.",
        "ko": "행복한 왕자 동상은 고통받는 시민들을 위로하기 위해 자신의 금박을 모두 나누어 주었다."
      },
      {
        "num": 2,
        "en": "The devoted swallow stayed by his side until the winter cold claimed his life.",
        "ko": "헌신적인 제비는 겨울 추위가 목숨을 앗아갈 때까지 왕자의 곁을 지켰다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "statue",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: statue"
      },
      {
        "word": "devoted",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: devoted"
      },
      {
        "word": "comfort",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: comfort"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_2-14-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "The ①<u>statue</u> of the ②<u>maintains</u> Happy Prince gave away his golden leaves to comfort suffering citizens, and they ③<u>devoted</u> swallow stayed by ④<u>through</u> his side until the winter cold claimed his life ⑤<u>which</u> is observed.",
        "options": [
          "① statue (보어 또는 서술어 역할)",
          "② maintains (주어 'The'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ devoted (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'The' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_2-14-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"The devoted swallow stayed by his side (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "until the winter cold claimed his life",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [The Happy Prince and the Little Swallow] 지문에서 핵심적인 내용인 'until the winter cold claimed his life'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_2-14-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '오스카 와일드: 행복한 왕자와 제비'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'The'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "행복한 왕자 동상은 고통받는 시민들을 위로하기 위해 자신의 금박을 모두 나누어 주었다이며, 헌신적인 제비는 겨울 추위가 목숨을 앗아갈 때까지 왕자의 곁을 지켰다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '오스카 와일드: 행복한 왕자와 제비'에 관하여 '행복한 왕자 동상은 고통받는 시민들을 위로하기 위해 자신의 금박을 모두 나누어 주었다'이자 '헌신적인 제비는 겨울 추위가 목숨을 앗아갈 때까지 왕자의 곁을 지켰다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_2-14-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Moral lessons and character wisdom reflected in 'The Happy Prince and the Little Swallow'",
          "② Why modern scholars completely reject any scientific research on the happy prince and the little swallow",
          "③ The rapid technological replacement of all natural phenomena related to the happy prince and the little swallow",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the happy prince and the little swallow were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '오스카 와일드: 행복한 왕자와 제비'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'The Happy Prince and the Little Swallow''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_2-15",
    "unitId": "unit-m1-2",
    "unitTitle": "중 1-2 내신 독해 마스터",
    "grade": "중1",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 1-2 내신 독해 마스터",
    "title": "The Science Behind Color Perception",
    "koreanTitle": "인간은 색을 어떻게 인지하는가?",
    "level": "middle1_2",
    "levelLabel": "중1 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-2 내신 독해 마스터)",
    "wordCount": 50,
    "estimatedTime": "2.5분",
    "summary": "인간은 색을 어떻게 인지하는가?을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Human eyes detect visible light through specialized photoreceptor cone cells.",
        "ko": "인간의 눈은 특화된 원추세포 광수용기를 통해 가시광선을 감지한다."
      },
      {
        "num": 2,
        "en": "Different wavelengths trigger electrochemical signals that the brain translates into colors.",
        "ko": "서로 다른 파장이 전기화학 신호를 일으키고, 뇌는 이를 다양한 색으로 해석한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "wavelength",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: wavelength"
      },
      {
        "word": "photoreceptor",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: photoreceptor"
      },
      {
        "word": "translate",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: translate"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_2-15-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Human ①<u>eyes</u> detect visible ②<u>maintains</u> light through specialized photoreceptor cone cells, and they ③<u>wavelengths</u> trigger electrochemical signals ④<u>through</u> that the brain translates into colors ⑤<u>which</u> is observed.",
        "options": [
          "① eyes (보어 또는 서술어 역할)",
          "② maintains (주어 'Human'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ wavelengths (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Human' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_2-15-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Different wavelengths trigger electrochemical signals (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "that the brain translates into colors",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [The Science Behind Color Perception] 지문에서 핵심적인 내용인 'that the brain translates into colors'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_2-15-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "인간의 눈은 특화된 원추세포 광수용기를 통해 가시광선을 감지한다이며, 서로 다른 파장이 전기화학 신호를 일으키고, 뇌는 이를 다양한 색으로 해석한다이다.",
          "본문에서는 '인간은 색을 어떻게 인지하는가?'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Human'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '인간은 색을 어떻게 인지하는가?'에 관하여 '인간의 눈은 특화된 원추세포 광수용기를 통해 가시광선을 감지한다'이자 '서로 다른 파장이 전기화학 신호를 일으키고, 뇌는 이를 다양한 색으로 해석한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_2-15-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the science behind color perception",
          "② The rapid technological replacement of all natural phenomena related to the science behind color perception",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Exploring the fundamental mechanisms and importance of 인간은 색을 어떻게 인지하는가?",
          "⑤ A historical debate proving that traditional theories about the science behind color perception were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '인간은 색을 어떻게 인지하는가?'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 인간은 색을 어떻게 인지하는가?'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_2-16",
    "unitId": "unit-m1-2",
    "unitTitle": "중 1-2 내신 독해 마스터",
    "grade": "중1",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 1-2 내신 독해 마스터",
    "title": "Treasure Island: Jim Hawkins and the Map",
    "koreanTitle": "보물섬: 짐 호킨스와 비밀 지도",
    "level": "middle1_2",
    "levelLabel": "중1 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-2 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "보물섬: 짐 호킨스와 비밀 지도을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Young Jim found a yellowed parchment revealing the hidden treasure of Captain Flint.",
        "ko": "어린 짐은 플린트 선장의 숨겨진 보물을 보여주는 누렇게 바랜 양피지 지도를 발견했다."
      },
      {
        "num": 2,
        "en": "He boarded the schooner Hispaniola, unaware that pirate mutineers were aboard.",
        "ko": "그는 해적 반란군이 탑승하고 있다는 사실을 모른 채 히스파니올라호에 올랐다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "parchment",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: parchment"
      },
      {
        "word": "mutineer",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: mutineer"
      },
      {
        "word": "schooner",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: schooner"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_2-16-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Young ①<u>Jim</u> found a ②<u>maintains</u> yellowed parchment revealing the hidden treasure of Captain Flint, and they ③<u>boarded</u> the schooner Hispaniola, ④<u>through</u> unaware that pirate mutineers were aboard ⑤<u>which</u> is observed.",
        "options": [
          "① Jim (보어 또는 서술어 역할)",
          "② maintains (주어 'Young'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ boarded (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Young' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_2-16-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"He boarded the schooner Hispaniola, (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "unaware that pirate mutineers were aboard"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [Treasure Island: Jim Hawkins and the Map] 지문에서 핵심적인 내용인 'unaware that pirate mutineers were aboard'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_2-16-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '보물섬: 짐 호킨스와 비밀 지도'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "어린 짐은 플린트 선장의 숨겨진 보물을 보여주는 누렇게 바랜 양피지 지도를 발견했다이며, 그는 해적 반란군이 탑승하고 있다는 사실을 모른 채 히스파니올라호에 올랐다이다.",
          "지문에 따르면 'Young'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '보물섬: 짐 호킨스와 비밀 지도'에 관하여 '어린 짐은 플린트 선장의 숨겨진 보물을 보여주는 누렇게 바랜 양피지 지도를 발견했다'이자 '그는 해적 반란군이 탑승하고 있다는 사실을 모른 채 히스파니올라호에 올랐다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_2-16-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on treasure island: jim hawkins and the map",
          "② Moral lessons and character wisdom reflected in 'Treasure Island: Jim Hawkins and the Map'",
          "③ The rapid technological replacement of all natural phenomena related to treasure island: jim hawkins and the map",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about treasure island: jim hawkins and the map were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '보물섬: 짐 호킨스와 비밀 지도'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Treasure Island: Jim Hawkins and the Map''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_2-17",
    "unitId": "unit-m1-2",
    "unitTitle": "중 1-2 내신 독해 마스터",
    "grade": "중1",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 1-2 내신 독해 마스터",
    "title": "The Global Challenge of Plastic Waste",
    "koreanTitle": "플라스틱 쓰레기와 해양 오염 문제",
    "level": "middle1_2",
    "levelLabel": "중1 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-2 내신 독해 마스터)",
    "wordCount": 51,
    "estimatedTime": "2.5분",
    "summary": "플라스틱 쓰레기와 해양 오염 문제을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Millions of tons of non-biodegradable plastics enter the oceans every year.",
        "ko": "수백만 톤의 분해되지 않는 플라스틱이 매년 바다로 유입되고 있다."
      },
      {
        "num": 2,
        "en": "Microplastics are ingested by marine life, eventually disrupting global food chains.",
        "ko": "미세플라스틱은 해양 생물에 의해 섭취되어 결국 지구 먹이사슬을 교란한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "biodegradable",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: biodegradable"
      },
      {
        "word": "ingest",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: ingest"
      },
      {
        "word": "disrupt",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: disrupt"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_2-17-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Millions ①<u>of</u> tons of ②<u>maintains</u> non-biodegradable plastics enter the oceans every year, and they ③<u>are</u> ingested by marine ④<u>through</u> life, eventually disrupting global food chains ⑤<u>which</u> is observed.",
        "options": [
          "① of (보어 또는 서술어 역할)",
          "② maintains (주어 'Millions'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ are (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Millions' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_2-17-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Microplastics are ingested by marine (          빈칸          ).\"",
        "options": [
          "life, eventually disrupting global food chains",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [The Global Challenge of Plastic Waste] 지문에서 핵심적인 내용인 'life, eventually disrupting global food chains'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_2-17-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '플라스틱 쓰레기와 해양 오염 문제'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Millions'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "수백만 톤의 분해되지 않는 플라스틱이 매년 바다로 유입되고 있다이며, 미세플라스틱은 해양 생물에 의해 섭취되어 결국 지구 먹이사슬을 교란한다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '플라스틱 쓰레기와 해양 오염 문제'에 관하여 '수백만 톤의 분해되지 않는 플라스틱이 매년 바다로 유입되고 있다'이자 '미세플라스틱은 해양 생물에 의해 섭취되어 결국 지구 먹이사슬을 교란한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_2-17-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the global challenge of plastic waste",
          "② The rapid technological replacement of all natural phenomena related to the global challenge of plastic waste",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about the global challenge of plastic waste were all harmful",
          "⑤ The urgent threat of marine plastic pollution and the need for global action"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '플라스틱 쓰레기와 해양 오염 문제'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The urgent threat of marine plastic pollution and the need for global action'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_2-18",
    "unitId": "unit-m1-2",
    "unitTitle": "중 1-2 내신 독해 마스터",
    "grade": "중1",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 1-2 내신 독해 마스터",
    "title": "Pinocchio: The Value of Truth and Honesty",
    "koreanTitle": "피노키오: 진실과 정직의 가치",
    "level": "middle1_2",
    "levelLabel": "중1 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-2 내신 독해 마스터)",
    "wordCount": 55,
    "estimatedTime": "2.5분",
    "summary": "피노키오: 진실과 정직의 가치을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Whenever the wooden puppet told a deliberate lie, his long nose grew longer.",
        "ko": "나무 인형 피노키오가 고의로 거짓말을 할 때마다 그의 긴 코는 더욱 길어졌다."
      },
      {
        "num": 2,
        "en": "Only through selflessness, bravery, and honest labor did he become a real boy.",
        "ko": "오직 이타심과 용기, 정직한 노동을 통해서만 그는 진짜 인간 소년이 될 수 있었다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "puppet",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: puppet"
      },
      {
        "word": "deliberate",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: deliberate"
      },
      {
        "word": "selflessness",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: selflessness"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_2-18-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Whenever ①<u>the</u> wooden puppet ②<u>maintains</u> told a deliberate lie, his long nose grew longer, and they ③<u>through</u> selflessness, bravery, and ④<u>through</u> honest labor did he become a real boy ⑤<u>which</u> is observed.",
        "options": [
          "① the (보어 또는 서술어 역할)",
          "② maintains (주어 'Whenever'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ through (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Whenever' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_2-18-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Only through selflessness, bravery, and honest (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "labor did he become a real boy",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [Pinocchio: The Value of Truth and Honesty] 지문에서 핵심적인 내용인 'labor did he become a real boy'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_2-18-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '피노키오: 진실과 정직의 가치'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Whenever'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "나무 인형 피노키오가 고의로 거짓말을 할 때마다 그의 긴 코는 더욱 길어졌다이며, 오직 이타심과 용기, 정직한 노동을 통해서만 그는 진짜 인간 소년이 될 수 있었다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '피노키오: 진실과 정직의 가치'에 관하여 '나무 인형 피노키오가 고의로 거짓말을 할 때마다 그의 긴 코는 더욱 길어졌다'이자 '오직 이타심과 용기, 정직한 노동을 통해서만 그는 진짜 인간 소년이 될 수 있었다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_2-18-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on pinocchio: the value of truth and honesty",
          "② The rapid technological replacement of all natural phenomena related to pinocchio: the value of truth and honesty",
          "③ Moral lessons and character wisdom reflected in 'Pinocchio: The Value of Truth and Honesty'",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about pinocchio: the value of truth and honesty were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '피노키오: 진실과 정직의 가치'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Pinocchio: The Value of Truth and Honesty''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_2-19",
    "unitId": "unit-m1-2",
    "unitTitle": "중 1-2 내신 독해 마스터",
    "grade": "중1",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 1-2 내신 독해 마스터",
    "title": "The Inventions of Leonardo da Vinci",
    "koreanTitle": "레오나르도 다빈치의 시대를 앞선 발명",
    "level": "middle1_2",
    "levelLabel": "중1 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-2 내신 독해 마스터)",
    "wordCount": 52,
    "estimatedTime": "2.5분",
    "summary": "레오나르도 다빈치의 시대를 앞선 발명을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Da Vinci sketched flying machines and parachutes centuries before modern aviation.",
        "ko": "다빈치는 현대 항공 기술이 등장하기 수세기 전에 이미 비행 기계와 낙하산을 스케치했다."
      },
      {
        "num": 2,
        "en": "His notebooks reveal an insatiable curiosity that united art with scientific inquiry.",
        "ko": "그의 노트는 예술과 과학적 탐구를 하나로 결합한 끝없는 호기심을 보여준다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "aviation",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: aviation"
      },
      {
        "word": "insatiable",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: insatiable"
      },
      {
        "word": "inquiry",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: inquiry"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_2-19-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Da ①<u>Vinci</u> sketched flying ②<u>maintains</u> machines and parachutes centuries before modern aviation, and they ③<u>notebooks</u> reveal an insatiable ④<u>through</u> curiosity that united art with scientific inquiry ⑤<u>which</u> is observed.",
        "options": [
          "① Vinci (보어 또는 서술어 역할)",
          "② maintains (주어 'Da'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ notebooks (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Da' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_2-19-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"His notebooks reveal an insatiable curiosity (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "that united art with scientific inquiry",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [The Inventions of Leonardo da Vinci] 지문에서 핵심적인 내용인 'that united art with scientific inquiry'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_2-19-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "다빈치는 현대 항공 기술이 등장하기 수세기 전에 이미 비행 기계와 낙하산을 스케치했다이며, 그의 노트는 예술과 과학적 탐구를 하나로 결합한 끝없는 호기심을 보여준다이다.",
          "본문에서는 '레오나르도 다빈치의 시대를 앞선 발명'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Da'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '레오나르도 다빈치의 시대를 앞선 발명'에 관하여 '다빈치는 현대 항공 기술이 등장하기 수세기 전에 이미 비행 기계와 낙하산을 스케치했다'이자 '그의 노트는 예술과 과학적 탐구를 하나로 결합한 끝없는 호기심을 보여준다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_2-19-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Exploring the fundamental mechanisms and importance of 레오나르도 다빈치의 시대를 앞선 발명",
          "② Why modern scholars completely reject any scientific research on the inventions of leonardo da vinci",
          "③ The rapid technological replacement of all natural phenomena related to the inventions of leonardo da vinci",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the inventions of leonardo da vinci were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '레오나르도 다빈치의 시대를 앞선 발명'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 레오나르도 다빈치의 시대를 앞선 발명'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M1_2-20",
    "unitId": "unit-m1-2",
    "unitTitle": "중 1-2 내신 독해 마스터",
    "grade": "중1",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 1-2 내신 독해 마스터",
    "title": "Beauty and the Beast: Seeing Inward Virtue",
    "koreanTitle": "미녀와 야수: 내면의 진정한 아름다움",
    "level": "middle1_2",
    "levelLabel": "중1 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 1-2 내신 독해 마스터)",
    "wordCount": 56,
    "estimatedTime": "2.5분",
    "summary": "미녀와 야수: 내면의 진정한 아름다움을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Belle recognized that true nobility lies not in appearance, but in kindness and integrity.",
        "ko": "벨은 진정한 고귀함이 외모가 아니라 친절함과 진실된 성품에 있음을 깨달았다."
      },
      {
        "num": 2,
        "en": "Her unconditional love broke the ancient curse, restoring the prince to human form.",
        "ko": "그녀의 조건 없는 사랑은 고대의 저주를 풀고 왕자를 인간의 모습으로 되돌려 놓았다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "nobility",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: nobility"
      },
      {
        "word": "integrity",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: integrity"
      },
      {
        "word": "curse",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: curse"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M1_2-20-1",
        "type": "grammar",
        "typeLabel": "[중1 내신 어법] 주어-동사 수일치 및 관계사 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Belle ①<u>recognized</u> that true ②<u>maintains</u> nobility lies not in appearance, but in kindness and integrity, and they ③<u>unconditional</u> love broke the ④<u>through</u> ancient curse, restoring the prince to human form ⑤<u>which</u> is observed.",
        "options": [
          "① recognized (보어 또는 서술어 역할)",
          "② maintains (주어 'Belle'의 수에 맞추어 복수형/원형으로 일치시켜야 함)",
          "③ unconditional (현재 시제 본동사)",
          "④ through (수단·방식을 나타내는 전치사)",
          "⑤ which (주격 관계대명사)"
        ],
        "correctIndex": 1,
        "explanation": "주어인 'Belle' 및 선행사의 수일치를 고려할 때, ②번 밑줄 어휘는 단수형이 아닌 주어의 인칭과 수에 부합하도록 복수형/원형으로 올바르게 수일치되어야 합니다."
      },
      {
        "id": "q-passage-M1_2-20-2",
        "type": "blank",
        "typeLabel": "[중1 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Her unconditional love broke the ancient (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "curse, restoring the prince to human form"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [Beauty and the Beast: Seeing Inward Virtue] 지문에서 핵심적인 내용인 'curse, restoring the prince to human form'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M1_2-20-3",
        "type": "comprehension",
        "typeLabel": "[중1 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '미녀와 야수: 내면의 진정한 아름다움'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "벨은 진정한 고귀함이 외모가 아니라 친절함과 진실된 성품에 있음을 깨달았다이며, 그녀의 조건 없는 사랑은 고대의 저주를 풀고 왕자를 인간의 모습으로 되돌려 놓았다이다.",
          "지문에 따르면 'Belle'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '미녀와 야수: 내면의 진정한 아름다움'에 관하여 '벨은 진정한 고귀함이 외모가 아니라 친절함과 진실된 성품에 있음을 깨달았다'이자 '그녀의 조건 없는 사랑은 고대의 저주를 풀고 왕자를 인간의 모습으로 되돌려 놓았다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M1_2-20-4",
        "type": "main_idea",
        "typeLabel": "[중1 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on beauty and the beast: seeing inward virtue",
          "② The rapid technological replacement of all natural phenomena related to beauty and the beast: seeing inward virtue",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Moral lessons and character wisdom reflected in 'Beauty and the Beast: Seeing Inward Virtue'",
          "⑤ A historical debate proving that traditional theories about beauty and the beast: seeing inward virtue were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '미녀와 야수: 내면의 진정한 아름다움'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Beauty and the Beast: Seeing Inward Virtue''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_1-21",
    "unitId": "unit-m2-1",
    "unitTitle": "중 2-1 내신 독해 마스터",
    "grade": "중2",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 2-1 내신 독해 마스터",
    "title": "How the Internet Transformed Human Culture",
    "koreanTitle": "인터넷이 인류 문화를 바꾼 방식",
    "level": "middle2_1",
    "levelLabel": "중2 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-1 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "인터넷이 인류 문화를 바꾼 방식을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "The creation of the World Wide Web decentralized information across the globe.",
        "ko": "월드와이드웹의 탄생은 전 세계에 걸쳐 정보를 탈중앙화시켰다."
      },
      {
        "num": 2,
        "en": "However, algorithmic echo chambers can polarize public opinion and hinder objective dialogue.",
        "ko": "그러나 알고리즘 기반의 반향실 효과는 여론을 양극화하고 객관적인 대화를 저해할 수 있다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "decentralize",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: decentralize"
      },
      {
        "word": "polarize",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: polarize"
      },
      {
        "word": "objective",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: objective"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_1-21-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When the creation of the world wide web decentralized information across the globe, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> However, algorithmic echo chambers ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_1-21-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"However, algorithmic echo chambers can polarize (          빈칸          ).\"",
        "options": [
          "public opinion and hinder objective dialogue",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [How the Internet Transformed Human Culture] 지문에서 핵심적인 내용인 'public opinion and hinder objective dialogue'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_1-21-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '인터넷이 인류 문화를 바꾼 방식'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'The'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "월드와이드웹의 탄생은 전 세계에 걸쳐 정보를 탈중앙화시켰다이며, 그러나 알고리즘 기반의 반향실 효과는 여론을 양극화하고 객관적인 대화를 저해할 수 있다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '인터넷이 인류 문화를 바꾼 방식'에 관하여 '월드와이드웹의 탄생은 전 세계에 걸쳐 정보를 탈중앙화시켰다'이자 '그러나 알고리즘 기반의 반향실 효과는 여론을 양극화하고 객관적인 대화를 저해할 수 있다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_1-21-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on how the internet transformed human culture",
          "② Exploring the fundamental mechanisms and importance of 인터넷이 인류 문화를 바꾼 방식",
          "③ The rapid technological replacement of all natural phenomena related to how the internet transformed human culture",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about how the internet transformed human culture were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '인터넷이 인류 문화를 바꾼 방식'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 인터넷이 인류 문화를 바꾼 방식'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_1-22",
    "unitId": "unit-m2-1",
    "unitTitle": "중 2-1 내신 독해 마스터",
    "grade": "중2",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 2-1 내신 독해 마스터",
    "title": "The Gift of the Magi: Priceless Sacrifice",
    "koreanTitle": "오 헨리: 크리스마스 선물 (현자의 선물)",
    "level": "middle2_1",
    "levelLabel": "중2 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-1 내신 독해 마스터)",
    "wordCount": 54,
    "estimatedTime": "2.5분",
    "summary": "오 헨리: 크리스마스 선물 (현자의 선물)을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Della sold her beautiful hair to purchase a platinum watch chain for Jim.",
        "ko": "델라는 짐을 위한 백금 시곗줄을 사기 위해 자신의 아름다운 머리카락을 팔았다."
      },
      {
        "num": 2,
        "en": "Though their mutual gifts became temporarily useless, their sacrificial love was supreme.",
        "ko": "비록 서로의 선물이 당장은 쓸모없어졌지만, 그들의 희생적인 사랑은 그 무엇보다 숭고했다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "sacrificial",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: sacrificial"
      },
      {
        "word": "mutual",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: mutual"
      },
      {
        "word": "platinum",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: platinum"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_1-22-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When della sold her beautiful hair to purchase a platinum watch chain for jim, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> Though their mutual gifts ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_1-22-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Though their mutual gifts became temporarily (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "useless, their sacrificial love was supreme",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [The Gift of the Magi: Priceless Sacrifice] 지문에서 핵심적인 내용인 'useless, their sacrificial love was supreme'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_1-22-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '오 헨리: 크리스마스 선물 (현자의 선물)'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Della'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "델라는 짐을 위한 백금 시곗줄을 사기 위해 자신의 아름다운 머리카락을 팔았다이며, 비록 서로의 선물이 당장은 쓸모없어졌지만, 그들의 희생적인 사랑은 그 무엇보다 숭고했다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '오 헨리: 크리스마스 선물 (현자의 선물)'에 관하여 '델라는 짐을 위한 백금 시곗줄을 사기 위해 자신의 아름다운 머리카락을 팔았다'이자 '비록 서로의 선물이 당장은 쓸모없어졌지만, 그들의 희생적인 사랑은 그 무엇보다 숭고했다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_1-22-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the gift of the magi: priceless sacrifice",
          "② The rapid technological replacement of all natural phenomena related to the gift of the magi: priceless sacrifice",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about the gift of the magi: priceless sacrifice were all harmful",
          "⑤ Moral lessons and character wisdom reflected in 'The Gift of the Magi: Priceless Sacrifice'"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '오 헨리: 크리스마스 선물 (현자의 선물)'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'The Gift of the Magi: Priceless Sacrifice''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_1-23",
    "unitId": "unit-m2-1",
    "unitTitle": "중 2-1 내신 독해 마스터",
    "grade": "중2",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 2-1 내신 독해 마스터",
    "title": "The Mysteries of the Human Immune System",
    "koreanTitle": "인간 면역 체계의 정교한 방어선",
    "level": "middle2_1",
    "levelLabel": "중2 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-1 내신 독해 마스터)",
    "wordCount": 51,
    "estimatedTime": "2.5분",
    "summary": "인간 면역 체계의 정교한 방어선을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "White blood cells produce specific antibodies to neutralize invading pathogens.",
        "ko": "백혈구는 침입한 병원균을 무력화하기 위해 특정한 항체를 생성한다."
      },
      {
        "num": 2,
        "en": "Vaccines train memory T-cells to mount a rapid defense upon subsequent exposures.",
        "ko": "백신은 이후의 노출에 신속하게 방어할 수 있도록 기억 T세포를 훈련시킨다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "pathogen",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: pathogen"
      },
      {
        "word": "antibody",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: antibody"
      },
      {
        "word": "neutralize",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: neutralize"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_1-23-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When white blood cells produce specific antibodies to neutralize invading pathogens, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> Vaccines train memory T-cells ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_1-23-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Vaccines train memory T-cells to mount (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "a rapid defense upon subsequent exposures",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [The Mysteries of the Human Immune System] 지문에서 핵심적인 내용인 'a rapid defense upon subsequent exposures'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_1-23-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "백혈구는 침입한 병원균을 무력화하기 위해 특정한 항체를 생성한다이며, 백신은 이후의 노출에 신속하게 방어할 수 있도록 기억 T세포를 훈련시킨다이다.",
          "본문에서는 '인간 면역 체계의 정교한 방어선'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'White'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '인간 면역 체계의 정교한 방어선'에 관하여 '백혈구는 침입한 병원균을 무력화하기 위해 특정한 항체를 생성한다'이자 '백신은 이후의 노출에 신속하게 방어할 수 있도록 기억 T세포를 훈련시킨다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_1-23-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the mysteries of the human immune system",
          "② The rapid technological replacement of all natural phenomena related to the mysteries of the human immune system",
          "③ Exploring the fundamental mechanisms and importance of 인간 면역 체계의 정교한 방어선",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the mysteries of the human immune system were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '인간 면역 체계의 정교한 방어선'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 인간 면역 체계의 정교한 방어선'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_1-24",
    "unitId": "unit-m2-1",
    "unitTitle": "중 2-1 내신 독해 마스터",
    "grade": "중2",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 2-1 내신 독해 마스터",
    "title": "Sherlock Holmes and the Red-Headed League",
    "koreanTitle": "셜록 홈즈: 붉은 머리 연맹의 비밀",
    "level": "middle2_1",
    "levelLabel": "중2 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-1 내신 독해 마스터)",
    "wordCount": 55,
    "estimatedTime": "2.5분",
    "summary": "셜록 홈즈: 붉은 머리 연맹의 비밀을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Holmes deduced that the absurd club was merely a distraction to dig an underground tunnel.",
        "ko": "홈즈는 그 황당한 클럽이 지하 터널을 파기 위한 연막에 불과하다는 점을 추리해 냈다."
      },
      {
        "num": 2,
        "en": "His keen observation of minute details thwarted a major bank robbery.",
        "ko": "미세한 세부 사항에 대한 그의 날카로운 관찰력이 대형 은행 강도 사건을 저지했다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "deduce",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: deduce"
      },
      {
        "word": "distraction",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: distraction"
      },
      {
        "word": "thwart",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: thwart"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_1-24-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When holmes deduced that the absurd club was merely a distraction to dig an underground tunnel, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> His keen observation of ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_1-24-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"His keen observation of minute (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "details thwarted a major bank robbery"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [Sherlock Holmes and the Red-Headed League] 지문에서 핵심적인 내용인 'details thwarted a major bank robbery'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_1-24-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '셜록 홈즈: 붉은 머리 연맹의 비밀'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "홈즈는 그 황당한 클럽이 지하 터널을 파기 위한 연막에 불과하다는 점을 추리해 냈다이며, 미세한 세부 사항에 대한 그의 날카로운 관찰력이 대형 은행 강도 사건을 저지했다이다.",
          "지문에 따르면 'Holmes'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '셜록 홈즈: 붉은 머리 연맹의 비밀'에 관하여 '홈즈는 그 황당한 클럽이 지하 터널을 파기 위한 연막에 불과하다는 점을 추리해 냈다'이자 '미세한 세부 사항에 대한 그의 날카로운 관찰력이 대형 은행 강도 사건을 저지했다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_1-24-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Moral lessons and character wisdom reflected in 'Sherlock Holmes and the Red-Headed League'",
          "② Why modern scholars completely reject any scientific research on sherlock holmes and the red-headed league",
          "③ The rapid technological replacement of all natural phenomena related to sherlock holmes and the red-headed league",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about sherlock holmes and the red-headed league were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '셜록 홈즈: 붉은 머리 연맹의 비밀'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Sherlock Holmes and the Red-Headed League''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_1-25",
    "unitId": "unit-m2-1",
    "unitTitle": "중 2-1 내신 독해 마스터",
    "grade": "중2",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 2-1 내신 독해 마스터",
    "title": "Artificial Coral Reefs and Marine Conservation",
    "koreanTitle": "인공 산호초와 해양 생태계 복원",
    "level": "middle2_1",
    "levelLabel": "중2 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-1 내신 독해 마스터)",
    "wordCount": 50,
    "estimatedTime": "2.5분",
    "summary": "인공 산호초와 해양 생태계 복원을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Marine biologists submerge porous concrete structures to foster coral restoration.",
        "ko": "해양 생물학자들은 산호 복원을 촉진하기 위해 다공성 콘크리트 구조물을 바닷속에 가라앉힌다."
      },
      {
        "num": 2,
        "en": "These artificial habitats provide safe shelter for diverse endangered aquatic species.",
        "ko": "이러한 인공 서식지는 멸종 위기에 처한 다양한 수생 생물들에게 안전한 피난처를 제공한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "porous",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: porous"
      },
      {
        "word": "aquatic",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: aquatic"
      },
      {
        "word": "conservation",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: conservation"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_1-25-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When marine biologists submerge porous concrete structures to foster coral restoration, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> These artificial habitats provide ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_1-25-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"These artificial habitats provide safe (          빈칸          ).\"",
        "options": [
          "shelter for diverse endangered aquatic species",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [Artificial Coral Reefs and Marine Conservation] 지문에서 핵심적인 내용인 'shelter for diverse endangered aquatic species'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_1-25-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '인공 산호초와 해양 생태계 복원'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Marine'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "해양 생물학자들은 산호 복원을 촉진하기 위해 다공성 콘크리트 구조물을 바닷속에 가라앉힌다이며, 이러한 인공 서식지는 멸종 위기에 처한 다양한 수생 생물들에게 안전한 피난처를 제공한다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '인공 산호초와 해양 생태계 복원'에 관하여 '해양 생물학자들은 산호 복원을 촉진하기 위해 다공성 콘크리트 구조물을 바닷속에 가라앉힌다'이자 '이러한 인공 서식지는 멸종 위기에 처한 다양한 수생 생물들에게 안전한 피난처를 제공한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_1-25-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on artificial coral reefs and marine conservation",
          "② The rapid technological replacement of all natural phenomena related to artificial coral reefs and marine conservation",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Exploring the fundamental mechanisms and importance of 인공 산호초와 해양 생태계 복원",
          "⑤ A historical debate proving that traditional theories about artificial coral reefs and marine conservation were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '인공 산호초와 해양 생태계 복원'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 인공 산호초와 해양 생태계 복원'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_1-26",
    "unitId": "unit-m2-1",
    "unitTitle": "중 2-1 내신 독해 마스터",
    "grade": "중2",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 2-1 내신 독해 마스터",
    "title": "Frankenstein: The Burden of Creation",
    "koreanTitle": "메리 셸리: 프랑켄슈타인의 고뇌",
    "level": "middle2_1",
    "levelLabel": "중2 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-1 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "메리 셸리: 프랑켄슈타인의 고뇌을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Victor Frankenstein animated lifeless matter, only to flee in horror from his creation.",
        "ko": "빅터 프랑켄슈타인은 생명 없는 물질에 생기를 불어넣었으나, 자신의 피조물을 보고 공포에 질려 도망쳤다."
      },
      {
        "num": 2,
        "en": "The abandoned creature suffered profound isolation, yearning for companionship and acceptance.",
        "ko": "버림받은 피조물은 동반자와 포용을 갈망하며 깊은 고립감 속에 고통받았다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "animate",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: animate"
      },
      {
        "word": "yearn",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: yearn"
      },
      {
        "word": "isolation",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: isolation"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_1-26-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When victor frankenstein animated lifeless matter, only to flee in horror from his creation, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> The abandoned creature suffered ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_1-26-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"The abandoned creature suffered profound (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "isolation, yearning for companionship and acceptance",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [Frankenstein: The Burden of Creation] 지문에서 핵심적인 내용인 'isolation, yearning for companionship and acceptance'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_1-26-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '메리 셸리: 프랑켄슈타인의 고뇌'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Victor'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "빅터 프랑켄슈타인은 생명 없는 물질에 생기를 불어넣었으나, 자신의 피조물을 보고 공포에 질려 도망쳤다이며, 버림받은 피조물은 동반자와 포용을 갈망하며 깊은 고립감 속에 고통받았다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '메리 셸리: 프랑켄슈타인의 고뇌'에 관하여 '빅터 프랑켄슈타인은 생명 없는 물질에 생기를 불어넣었으나, 자신의 피조물을 보고 공포에 질려 도망쳤다'이자 '버림받은 피조물은 동반자와 포용을 갈망하며 깊은 고립감 속에 고통받았다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_1-26-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on frankenstein: the burden of creation",
          "② Moral lessons and character wisdom reflected in 'Frankenstein: The Burden of Creation'",
          "③ The rapid technological replacement of all natural phenomena related to frankenstein: the burden of creation",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about frankenstein: the burden of creation were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '메리 셸리: 프랑켄슈타인의 고뇌'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Frankenstein: The Burden of Creation''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_1-27",
    "unitId": "unit-m2-1",
    "unitTitle": "중 2-1 내신 독해 마스터",
    "grade": "중2",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 2-1 내신 독해 마스터",
    "title": "The Psychology Behind Procrastination",
    "koreanTitle": "미루는 습관(Procrastination)의 심리학",
    "level": "middle2_1",
    "levelLabel": "중2 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-1 내신 독해 마스터)",
    "wordCount": 50,
    "estimatedTime": "2.5분",
    "summary": "미루는 습관(Procrastination)의 심리학을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Procrastination stems not from laziness, but from emotional aversion to failure.",
        "ko": "일을 미루는 습관은 게으름에서 비롯되는 것이 아니라, 실패에 대한 감정적 거부감에서 출발한다."
      },
      {
        "num": 2,
        "en": "Breaking daunting tasks into micro-steps alleviates anxiety and fosters momentum.",
        "ko": "벅찬 과제를 아주 작은 단계로 쪼개는 것은 불안감을 완화하고 행동의 탄력을 촉진한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "procrastination",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: procrastination"
      },
      {
        "word": "aversion",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: aversion"
      },
      {
        "word": "daunting",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: daunting"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_1-27-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When procrastination stems not from laziness, but from emotional aversion to failure, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> Breaking daunting tasks into ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_1-27-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Breaking daunting tasks into micro-steps (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "alleviates anxiety and fosters momentum",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [The Psychology Behind Procrastination] 지문에서 핵심적인 내용인 'alleviates anxiety and fosters momentum'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_1-27-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "일을 미루는 습관은 게으름에서 비롯되는 것이 아니라, 실패에 대한 감정적 거부감에서 출발한다이며, 벅찬 과제를 아주 작은 단계로 쪼개는 것은 불안감을 완화하고 행동의 탄력을 촉진한다이다.",
          "본문에서는 '미루는 습관(Procrastination)의 심리학'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Procrastination'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '미루는 습관(Procrastination)의 심리학'에 관하여 '일을 미루는 습관은 게으름에서 비롯되는 것이 아니라, 실패에 대한 감정적 거부감에서 출발한다'이자 '벅찬 과제를 아주 작은 단계로 쪼개는 것은 불안감을 완화하고 행동의 탄력을 촉진한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_1-27-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the psychology behind procrastination",
          "② The rapid technological replacement of all natural phenomena related to the psychology behind procrastination",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about the psychology behind procrastination were all harmful",
          "⑤ Exploring the fundamental mechanisms and importance of 미루는 습관(Procrastination)의 심리학"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '미루는 습관(Procrastination)의 심리학'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 미루는 습관(Procrastination)의 심리학'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_1-28",
    "unitId": "unit-m2-1",
    "unitTitle": "중 2-1 내신 독해 마스터",
    "grade": "중2",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 2-1 내신 독해 마스터",
    "title": "The Secret Garden: Healing Power of Nature",
    "koreanTitle": "비밀의 화원: 자연이 주는 치유의 기적",
    "level": "middle2_1",
    "levelLabel": "중2 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-1 내신 독해 마스터)",
    "wordCount": 54,
    "estimatedTime": "2.5분",
    "summary": "비밀의 화원: 자연이 주는 치유의 기적을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Mary discovered a locked garden neglected for a decade behind ivy-covered stone walls.",
        "ko": "메리는 담쟁이덩굴로 뒤덮인 석벽 뒤에 10년 동안 방치되어 있던 잠긴 화원을 발견했다."
      },
      {
        "num": 2,
        "en": "Cultivating the dormant plants restored health and happiness to both troubled children.",
        "ko": "휴면 상태의 식물들을 가꾸면서 상처받았던 두 아이는 건강과 행복을 되찾았다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "dormant",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: dormant"
      },
      {
        "word": "cultivate",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: cultivate"
      },
      {
        "word": "neglected",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: neglected"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_1-28-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When mary discovered a locked garden neglected for a decade behind ivy-covered stone walls, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> Cultivating the dormant plants ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_1-28-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Cultivating the dormant plants restored health (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "and happiness to both troubled children"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [The Secret Garden: Healing Power of Nature] 지문에서 핵심적인 내용인 'and happiness to both troubled children'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_1-28-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '비밀의 화원: 자연이 주는 치유의 기적'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "메리는 담쟁이덩굴로 뒤덮인 석벽 뒤에 10년 동안 방치되어 있던 잠긴 화원을 발견했다이며, 휴면 상태의 식물들을 가꾸면서 상처받았던 두 아이는 건강과 행복을 되찾았다이다.",
          "지문에 따르면 'Mary'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '비밀의 화원: 자연이 주는 치유의 기적'에 관하여 '메리는 담쟁이덩굴로 뒤덮인 석벽 뒤에 10년 동안 방치되어 있던 잠긴 화원을 발견했다'이자 '휴면 상태의 식물들을 가꾸면서 상처받았던 두 아이는 건강과 행복을 되찾았다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_1-28-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the secret garden: healing power of nature",
          "② The rapid technological replacement of all natural phenomena related to the secret garden: healing power of nature",
          "③ Moral lessons and character wisdom reflected in 'The Secret Garden: Healing Power of Nature'",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the secret garden: healing power of nature were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '비밀의 화원: 자연이 주는 치유의 기적'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'The Secret Garden: Healing Power of Nature''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_1-29",
    "unitId": "unit-m2-1",
    "unitTitle": "중 2-1 내신 독해 마스터",
    "grade": "중2",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 2-1 내신 독해 마스터",
    "title": "Why Space Exploration Matters for Earth",
    "koreanTitle": "우주 탐사가 지구에 가져다주는 혜택",
    "level": "middle2_1",
    "levelLabel": "중2 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-1 내신 독해 마스터)",
    "wordCount": 51,
    "estimatedTime": "2.5분",
    "summary": "우주 탐사가 지구에 가져다주는 혜택을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Space missions have yielded transformative spin-off technologies like GPS and solar cells.",
        "ko": "우주 탐사 임무는 GPS와 태양전지 같은 혁신적인 파생 기술들을 탄생시켰다."
      },
      {
        "num": 2,
        "en": "Studying barren planets helps scientists comprehend Earth's delicate climate dynamics.",
        "ko": "황량한 다른 행성들을 연구하는 것은 과학자들이 지구의 정교한 기후 역학을 이해하는 데 도움을 준다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "transformative",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: transformative"
      },
      {
        "word": "comprehend",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: comprehend"
      },
      {
        "word": "spin-off",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: spin-off"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_1-29-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When space missions have yielded transformative spin-off technologies like gps and solar cells, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> Studying barren planets helps ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_1-29-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Studying barren planets helps scientists (          빈칸          ).\"",
        "options": [
          "comprehend Earth's delicate climate dynamics",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [Why Space Exploration Matters for Earth] 지문에서 핵심적인 내용인 'comprehend Earth's delicate climate dynamics'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_1-29-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '우주 탐사가 지구에 가져다주는 혜택'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Space'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "우주 탐사 임무는 GPS와 태양전지 같은 혁신적인 파생 기술들을 탄생시켰다이며, 황량한 다른 행성들을 연구하는 것은 과학자들이 지구의 정교한 기후 역학을 이해하는 데 도움을 준다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '우주 탐사가 지구에 가져다주는 혜택'에 관하여 '우주 탐사 임무는 GPS와 태양전지 같은 혁신적인 파생 기술들을 탄생시켰다'이자 '황량한 다른 행성들을 연구하는 것은 과학자들이 지구의 정교한 기후 역학을 이해하는 데 도움을 준다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_1-29-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Exploring the fundamental mechanisms and importance of 우주 탐사가 지구에 가져다주는 혜택",
          "② Why modern scholars completely reject any scientific research on why space exploration matters for earth",
          "③ The rapid technological replacement of all natural phenomena related to why space exploration matters for earth",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about why space exploration matters for earth were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '우주 탐사가 지구에 가져다주는 혜택'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 우주 탐사가 지구에 가져다주는 혜택'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_1-30",
    "unitId": "unit-m2-1",
    "unitTitle": "중 2-1 내신 독해 마스터",
    "grade": "중2",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 2-1 내신 독해 마스터",
    "title": "Robin Hood: Champion of Justice",
    "koreanTitle": "로빈 후드: 부조리에 맞선 셔우드의 의적",
    "level": "middle2_1",
    "levelLabel": "중2 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-1 내신 독해 마스터)",
    "wordCount": 51,
    "estimatedTime": "2.5분",
    "summary": "로빈 후드: 부조리에 맞선 셔우드의 의적을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Robin Hood resisted the corrupt Sheriff of Nottingham by redistributing ill-gotten wealth.",
        "ko": "로빈 후드는 부당하게 취득한 부를 재분배함으로써 노팅엄의 부패한 집정관에 저항했다."
      },
      {
        "num": 2,
        "en": "His merry men exemplified loyalty, defending the vulnerable against tyranny.",
        "ko": "그의 부하들은 충성심을 발휘하며 폭정에 맞서 힘없는 약자들을 지켜냈다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "corrupt",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: corrupt"
      },
      {
        "word": "redistribute",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: redistribute"
      },
      {
        "word": "tyranny",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: tyranny"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_1-30-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When robin hood resisted the corrupt sheriff of nottingham by redistributing ill-gotten wealth, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> His merry men exemplified ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_1-30-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"His merry men exemplified loyalty, (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "defending the vulnerable against tyranny",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [Robin Hood: Champion of Justice] 지문에서 핵심적인 내용인 'defending the vulnerable against tyranny'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_1-30-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '로빈 후드: 부조리에 맞선 셔우드의 의적'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Robin'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "로빈 후드는 부당하게 취득한 부를 재분배함으로써 노팅엄의 부패한 집정관에 저항했다이며, 그의 부하들은 충성심을 발휘하며 폭정에 맞서 힘없는 약자들을 지켜냈다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '로빈 후드: 부조리에 맞선 셔우드의 의적'에 관하여 '로빈 후드는 부당하게 취득한 부를 재분배함으로써 노팅엄의 부패한 집정관에 저항했다'이자 '그의 부하들은 충성심을 발휘하며 폭정에 맞서 힘없는 약자들을 지켜냈다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_1-30-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on robin hood: champion of justice",
          "② The rapid technological replacement of all natural phenomena related to robin hood: champion of justice",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Moral lessons and character wisdom reflected in 'Robin Hood: Champion of Justice'",
          "⑤ A historical debate proving that traditional theories about robin hood: champion of justice were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '로빈 후드: 부조리에 맞선 셔우드의 의적'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Robin Hood: Champion of Justice''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_2-31",
    "unitId": "unit-m2-2",
    "unitTitle": "중 2-2 내신 독해 마스터",
    "grade": "중2",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 2-2 내신 독해 마스터",
    "title": "The Power of Habit: Neural Loops in Action",
    "koreanTitle": "습관의 힘: 뇌 속의 신경 루프",
    "level": "middle2_2",
    "levelLabel": "중2 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-2 내신 독해 마스터)",
    "wordCount": 56,
    "estimatedTime": "2.5분",
    "summary": "습관의 힘: 뇌 속의 신경 루프을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Every habit consists of a cue, a routine, and a neurological reward.",
        "ko": "모든 습관은 신호(cue), 반복 행동(routine), 그리고 신경학적 보상(reward)으로 구성된다."
      },
      {
        "num": 2,
        "en": "By retaining the same cue and reward, scholars can substitute destructive habits with productive ones.",
        "ko": "같은 신호와 보상을 유지하면서, 학습자는 파괴적인 습관을 생산적인 습관으로 대체할 수 있다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "neurological",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: neurological"
      },
      {
        "word": "substitute",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: substitute"
      },
      {
        "word": "destructive",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: destructive"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_2-31-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When every habit consists of a cue, a routine, and a neurological reward, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> By retaining the same ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_2-31-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"By retaining the same cue and reward, (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "scholars can substitute destructive habits with productive ones",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [The Power of Habit: Neural Loops in Action] 지문에서 핵심적인 내용인 'scholars can substitute destructive habits with productive ones'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_2-31-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "모든 습관은 신호(cue), 반복 행동(routine), 그리고 신경학적 보상(reward)으로 구성된다이며, 같은 신호와 보상을 유지하면서, 학습자는 파괴적인 습관을 생산적인 습관으로 대체할 수 있다이다.",
          "본문에서는 '습관의 힘: 뇌 속의 신경 루프'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Every'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '습관의 힘: 뇌 속의 신경 루프'에 관하여 '모든 습관은 신호(cue), 반복 행동(routine), 그리고 신경학적 보상(reward)으로 구성된다'이자 '같은 신호와 보상을 유지하면서, 학습자는 파괴적인 습관을 생산적인 습관으로 대체할 수 있다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_2-31-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the power of habit: neural loops in action",
          "② Exploring the fundamental mechanisms and importance of 습관의 힘: 뇌 속의 신경 루프",
          "③ The rapid technological replacement of all natural phenomena related to the power of habit: neural loops in action",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the power of habit: neural loops in action were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '습관의 힘: 뇌 속의 신경 루프'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 습관의 힘: 뇌 속의 신경 루프'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_2-32",
    "unitId": "unit-m2-2",
    "unitTitle": "중 2-2 내신 독해 마스터",
    "grade": "중2",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 2-2 내신 독해 마스터",
    "title": "The Picture of Dorian Gray: Youth and Conscience",
    "koreanTitle": "도리안 그레이의 초상: 양심과 예술",
    "level": "middle2_2",
    "levelLabel": "중2 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-2 내신 독해 마스터)",
    "wordCount": 52,
    "estimatedTime": "2.5분",
    "summary": "도리안 그레이의 초상: 양심과 예술을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Dorian remained unblemished while his hidden portrait recorded every moral corruption.",
        "ko": "도리안은 결점 없이 젊음을 유지했으나, 숨겨진 초상화는 그의 모든 도덕적 타락을 기록했다."
      },
      {
        "num": 2,
        "en": "He learned too late that aesthetic perfection cannot substitute for spiritual virtue.",
        "ko": "그는 심미적 완벽함이 결코 영적인 미덕을 대체할 수 없다는 사실을 너무 늦게 깨달았다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "unblemished",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: unblemished"
      },
      {
        "word": "corruption",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: corruption"
      },
      {
        "word": "virtue",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: virtue"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_2-32-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When dorian remained unblemished while his hidden portrait recorded every moral corruption, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> He learned too late ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_2-32-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"He learned too late that aesthetic (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "perfection cannot substitute for spiritual virtue"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [The Picture of Dorian Gray: Youth and Conscience] 지문에서 핵심적인 내용인 'perfection cannot substitute for spiritual virtue'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_2-32-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '도리안 그레이의 초상: 양심과 예술'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "도리안은 결점 없이 젊음을 유지했으나, 숨겨진 초상화는 그의 모든 도덕적 타락을 기록했다이며, 그는 심미적 완벽함이 결코 영적인 미덕을 대체할 수 없다는 사실을 너무 늦게 깨달았다이다.",
          "지문에 따르면 'Dorian'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '도리안 그레이의 초상: 양심과 예술'에 관하여 '도리안은 결점 없이 젊음을 유지했으나, 숨겨진 초상화는 그의 모든 도덕적 타락을 기록했다'이자 '그는 심미적 완벽함이 결코 영적인 미덕을 대체할 수 없다는 사실을 너무 늦게 깨달았다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_2-32-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the picture of dorian gray: youth and conscience",
          "② The rapid technological replacement of all natural phenomena related to the picture of dorian gray: youth and conscience",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about the picture of dorian gray: youth and conscience were all harmful",
          "⑤ Moral lessons and character wisdom reflected in 'The Picture of Dorian Gray: Youth and Conscience'"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '도리안 그레이의 초상: 양심과 예술'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'The Picture of Dorian Gray: Youth and Conscience''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_2-33",
    "unitId": "unit-m2-2",
    "unitTitle": "중 2-2 내신 독해 마스터",
    "grade": "중2",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 2-2 내신 독해 마스터",
    "title": "The Science of Earthquakes and Plate Tectonics",
    "koreanTitle": "지진과 판구조론: 지구의 꿈틀거림",
    "level": "middle2_2",
    "levelLabel": "중2 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-2 내신 독해 마스터)",
    "wordCount": 52,
    "estimatedTime": "2.5분",
    "summary": "지진과 판구조론: 지구의 꿈틀거림을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Tectonic plates float on the semi-molten mantle, colliding and grinding at fault boundaries.",
        "ko": "지각판은 반용융 상태의 맨틀 위에 떠서 단층 경계면에서 충돌하고 마찰을 일으킨다."
      },
      {
        "num": 2,
        "en": "Sudden releases of seismic stress generate destructive shockwaves across continents.",
        "ko": "지진 응력의 갑작스러운 방출은 대륙을 가로지르는 파괴적인 충격파를 발생시킨다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "tectonic",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: tectonic"
      },
      {
        "word": "seismic",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: seismic"
      },
      {
        "word": "semi-molten",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: semi-molten"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_2-33-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When tectonic plates float on the semi-molten mantle, colliding and grinding at fault boundaries, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> Sudden releases of seismic ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_2-33-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Sudden releases of seismic stress (          빈칸          ).\"",
        "options": [
          "generate destructive shockwaves across continents",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [The Science of Earthquakes and Plate Tectonics] 지문에서 핵심적인 내용인 'generate destructive shockwaves across continents'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_2-33-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '지진과 판구조론: 지구의 꿈틀거림'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Tectonic'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "지각판은 반용융 상태의 맨틀 위에 떠서 단층 경계면에서 충돌하고 마찰을 일으킨다이며, 지진 응력의 갑작스러운 방출은 대륙을 가로지르는 파괴적인 충격파를 발생시킨다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '지진과 판구조론: 지구의 꿈틀거림'에 관하여 '지각판은 반용융 상태의 맨틀 위에 떠서 단층 경계면에서 충돌하고 마찰을 일으킨다'이자 '지진 응력의 갑작스러운 방출은 대륙을 가로지르는 파괴적인 충격파를 발생시킨다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_2-33-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the science of earthquakes and plate tectonics",
          "② The rapid technological replacement of all natural phenomena related to the science of earthquakes and plate tectonics",
          "③ Exploring the fundamental mechanisms and importance of 지진과 판구조론: 지구의 꿈틀거림",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the science of earthquakes and plate tectonics were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '지진과 판구조론: 지구의 꿈틀거림'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 지진과 판구조론: 지구의 꿈틀거림'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_2-34",
    "unitId": "unit-m2-2",
    "unitTitle": "중 2-2 내신 독해 마스터",
    "grade": "중2",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 2-2 내신 독해 마스터",
    "title": "Around the World in Eighty Days: Precision and Grit",
    "koreanTitle": "80일간의 세계 일주: 정확성과 끈기",
    "level": "middle2_2",
    "levelLabel": "중2 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-2 내신 독해 마스터)",
    "wordCount": 58,
    "estimatedTime": "2.5분",
    "summary": "80일간의 세계 일주: 정확성과 끈기을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Phileas Fogg wagered his entire fortune that he could circumnavigate the globe in eighty days.",
        "ko": "필리어스 포그는 80일 만에 세계를 일주할 수 있다는 데 전 재산을 걸었다."
      },
      {
        "num": 2,
        "en": "Crossing the international date line granted him an extra day to claim ultimate victory.",
        "ko": "날짜변경선을 동쪽으로 통과한 덕분에 그는 하루의 여유를 얻어 최종 승리를 거두었다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "wager",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: wager"
      },
      {
        "word": "circumnavigate",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: circumnavigate"
      },
      {
        "word": "precision",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: precision"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_2-34-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When phileas fogg wagered his entire fortune that he could circumnavigate the globe in eighty days, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> Crossing the international date ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_2-34-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Crossing the international date line granted him (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "an extra day to claim ultimate victory",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [Around the World in Eighty Days: Precision and Grit] 지문에서 핵심적인 내용인 'an extra day to claim ultimate victory'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_2-34-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '80일간의 세계 일주: 정확성과 끈기'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Phileas'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "필리어스 포그는 80일 만에 세계를 일주할 수 있다는 데 전 재산을 걸었다이며, 날짜변경선을 동쪽으로 통과한 덕분에 그는 하루의 여유를 얻어 최종 승리를 거두었다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '80일간의 세계 일주: 정확성과 끈기'에 관하여 '필리어스 포그는 80일 만에 세계를 일주할 수 있다는 데 전 재산을 걸었다'이자 '날짜변경선을 동쪽으로 통과한 덕분에 그는 하루의 여유를 얻어 최종 승리를 거두었다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_2-34-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Moral lessons and character wisdom reflected in 'Around the World in Eighty Days: Precision and Grit'",
          "② Why modern scholars completely reject any scientific research on around the world in eighty days: precision and grit",
          "③ The rapid technological replacement of all natural phenomena related to around the world in eighty days: precision and grit",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about around the world in eighty days: precision and grit were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '80일간의 세계 일주: 정확성과 끈기'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Around the World in Eighty Days: Precision and Grit''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_2-35",
    "unitId": "unit-m2-2",
    "unitTitle": "중 2-2 내신 독해 마스터",
    "grade": "중2",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 2-2 내신 독해 마스터",
    "title": "Bioluminescence: Cold Light in Living Organisms",
    "koreanTitle": "생체 발광: 차가운 생명의 빛",
    "level": "middle2_2",
    "levelLabel": "중2 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-2 내신 독해 마스터)",
    "wordCount": 50,
    "estimatedTime": "2.5분",
    "summary": "생체 발광: 차가운 생명의 빛을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Fireflies produce luminous glows without emitting heat through the luciferase reaction.",
        "ko": "반딧불이는 루시페레이스 반응을 통해 열을 방출하지 않고 차가운 빛을 발산한다."
      },
      {
        "num": 2,
        "en": "Medical researchers apply bioluminescent markers to monitor cancer cell progression.",
        "ko": "의학 연구자들은 암세포의 진행을 추적 관찰하기 위해 생체 발광 표지자를 활용한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "luminescence",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: luminescence"
      },
      {
        "word": "progression",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: progression"
      },
      {
        "word": "marker",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: marker"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_2-35-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When fireflies produce luminous glows without emitting heat through the luciferase reaction, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> Medical researchers apply bioluminescent ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_2-35-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Medical researchers apply bioluminescent markers (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "to monitor cancer cell progression",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [Bioluminescence: Cold Light in Living Organisms] 지문에서 핵심적인 내용인 'to monitor cancer cell progression'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_2-35-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "반딧불이는 루시페레이스 반응을 통해 열을 방출하지 않고 차가운 빛을 발산한다이며, 의학 연구자들은 암세포의 진행을 추적 관찰하기 위해 생체 발광 표지자를 활용한다이다.",
          "본문에서는 '생체 발광: 차가운 생명의 빛'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Fireflies'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '생체 발광: 차가운 생명의 빛'에 관하여 '반딧불이는 루시페레이스 반응을 통해 열을 방출하지 않고 차가운 빛을 발산한다'이자 '의학 연구자들은 암세포의 진행을 추적 관찰하기 위해 생체 발광 표지자를 활용한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_2-35-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on bioluminescence: cold light in living organisms",
          "② The rapid technological replacement of all natural phenomena related to bioluminescence: cold light in living organisms",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Exploring the fundamental mechanisms and importance of 생체 발광: 차가운 생명의 빛",
          "⑤ A historical debate proving that traditional theories about bioluminescence: cold light in living organisms were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '생체 발광: 차가운 생명의 빛'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 생체 발광: 차가운 생명의 빛'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_2-36",
    "unitId": "unit-m2-2",
    "unitTitle": "중 2-2 내신 독해 마스터",
    "grade": "중2",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 2-2 내신 독해 마스터",
    "title": "Don Quixote: The Noble Pursuit of Ideals",
    "koreanTitle": "돈키호테: 불가능한 꿈을 향한 기사",
    "level": "middle2_2",
    "levelLabel": "중2 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-2 내신 독해 마스터)",
    "wordCount": 56,
    "estimatedTime": "2.5분",
    "summary": "돈키호테: 불가능한 꿈을 향한 기사을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Don Quixote charged at windmills, mistaking them for monstrous giants threatening the world.",
        "ko": "돈키호테는 풍차를 세상을 위협하는 괴물 거인으로 착각하고 돌진했다."
      },
      {
        "num": 2,
        "en": "His romantic devotion reminds us of the noble pursuit of ideals amidst mundane reality.",
        "ko": "그의 낭만적인 헌신은 세속적인 현실 속에서도 이상을 추구하는 숭고함을 우리에게 일깨워 준다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "monstrous",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: monstrous"
      },
      {
        "word": "mundane",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: mundane"
      },
      {
        "word": "pursuit",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: pursuit"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_2-36-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When don quixote charged at windmills, mistaking them for monstrous giants threatening the world, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> His romantic devotion reminds ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_2-36-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"His romantic devotion reminds us of the (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "noble pursuit of ideals amidst mundane reality"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [Don Quixote: The Noble Pursuit of Ideals] 지문에서 핵심적인 내용인 'noble pursuit of ideals amidst mundane reality'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_2-36-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '돈키호테: 불가능한 꿈을 향한 기사'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "돈키호테는 풍차를 세상을 위협하는 괴물 거인으로 착각하고 돌진했다이며, 그의 낭만적인 헌신은 세속적인 현실 속에서도 이상을 추구하는 숭고함을 우리에게 일깨워 준다이다.",
          "지문에 따르면 'Don'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '돈키호테: 불가능한 꿈을 향한 기사'에 관하여 '돈키호테는 풍차를 세상을 위협하는 괴물 거인으로 착각하고 돌진했다'이자 '그의 낭만적인 헌신은 세속적인 현실 속에서도 이상을 추구하는 숭고함을 우리에게 일깨워 준다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_2-36-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on don quixote: the noble pursuit of ideals",
          "② Moral lessons and character wisdom reflected in 'Don Quixote: The Noble Pursuit of Ideals'",
          "③ The rapid technological replacement of all natural phenomena related to don quixote: the noble pursuit of ideals",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about don quixote: the noble pursuit of ideals were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '돈키호테: 불가능한 꿈을 향한 기사'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Don Quixote: The Noble Pursuit of Ideals''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_2-37",
    "unitId": "unit-m2-2",
    "unitTitle": "중 2-2 내신 독해 마스터",
    "grade": "중2",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 2-2 내신 독해 마스터",
    "title": "The Architecture of Bridges: Suspension and Arch",
    "koreanTitle": "현수교와 아치교의 공학 역학",
    "level": "middle2_2",
    "levelLabel": "중2 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-2 내신 독해 마스터)",
    "wordCount": 52,
    "estimatedTime": "2.5분",
    "summary": "현수교와 아치교의 공학 역학을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Suspension bridges distribute tension through steel cables anchored to massive towers.",
        "ko": "현수교는 거대한 주탑에 고정된 강철 케이블을 통해 인장력을 효과적으로 분산시킨다."
      },
      {
        "num": 2,
        "en": "Arch bridges transform vertical loads into horizontal compression forces along curved masonry.",
        "ko": "아치교는 곡선형 석조 구조를 따라 수직 하중을 수평 압축력으로 전환한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "suspension",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: suspension"
      },
      {
        "word": "compression",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: compression"
      },
      {
        "word": "horizontal",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: horizontal"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_2-37-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When suspension bridges distribute tension through steel cables anchored to massive towers, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> Arch bridges transform vertical ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_2-37-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Arch bridges transform vertical loads into (          빈칸          ).\"",
        "options": [
          "horizontal compression forces along curved masonry",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [The Architecture of Bridges: Suspension and Arch] 지문에서 핵심적인 내용인 'horizontal compression forces along curved masonry'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_2-37-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '현수교와 아치교의 공학 역학'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Suspension'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "현수교는 거대한 주탑에 고정된 강철 케이블을 통해 인장력을 효과적으로 분산시킨다이며, 아치교는 곡선형 석조 구조를 따라 수직 하중을 수평 압축력으로 전환한다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '현수교와 아치교의 공학 역학'에 관하여 '현수교는 거대한 주탑에 고정된 강철 케이블을 통해 인장력을 효과적으로 분산시킨다'이자 '아치교는 곡선형 석조 구조를 따라 수직 하중을 수평 압축력으로 전환한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_2-37-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the architecture of bridges: suspension and arch",
          "② The rapid technological replacement of all natural phenomena related to the architecture of bridges: suspension and arch",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about the architecture of bridges: suspension and arch were all harmful",
          "⑤ Exploring the fundamental mechanisms and importance of 현수교와 아치교의 공학 역학"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '현수교와 아치교의 공학 역학'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 현수교와 아치교의 공학 역학'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_2-38",
    "unitId": "unit-m2-2",
    "unitTitle": "중 2-2 내신 독해 마스터",
    "grade": "중2",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 2-2 내신 독해 마스터",
    "title": "The Call of the Wild: Returning to Nature",
    "koreanTitle": "잭 런던: 야성의 부름",
    "level": "middle2_2",
    "levelLabel": "중2 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-2 내신 독해 마스터)",
    "wordCount": 58,
    "estimatedTime": "2.5분",
    "summary": "잭 런던: 야성의 부름을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Buck adapted from a pampered domestic pet into the formidable leader of a sled-dog pack.",
        "ko": "벅은 안락한 가정견에서 눈썰매 개 무리의 강력한 우두머리로 적응해 나갔다."
      },
      {
        "num": 2,
        "en": "Ancient instincts awakened in the frozen Yukon wilderness, drawing him toward the wolf pack.",
        "ko": "얼어붙은 유콘의 황야에서 원초적 본능이 깨어나며 그는 늑대 무리를 향해 발걸음을 옮겼다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "formidable",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: formidable"
      },
      {
        "word": "instinct",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: instinct"
      },
      {
        "word": "pampered",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: pampered"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_2-38-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When buck adapted from a pampered domestic pet into the formidable leader of a sled-dog pack, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> Ancient instincts awakened in ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_2-38-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Ancient instincts awakened in the frozen Yukon (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "wilderness, drawing him toward the wolf pack",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [The Call of the Wild: Returning to Nature] 지문에서 핵심적인 내용인 'wilderness, drawing him toward the wolf pack'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_2-38-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '잭 런던: 야성의 부름'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Buck'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "벅은 안락한 가정견에서 눈썰매 개 무리의 강력한 우두머리로 적응해 나갔다이며, 얼어붙은 유콘의 황야에서 원초적 본능이 깨어나며 그는 늑대 무리를 향해 발걸음을 옮겼다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '잭 런던: 야성의 부름'에 관하여 '벅은 안락한 가정견에서 눈썰매 개 무리의 강력한 우두머리로 적응해 나갔다'이자 '얼어붙은 유콘의 황야에서 원초적 본능이 깨어나며 그는 늑대 무리를 향해 발걸음을 옮겼다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_2-38-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the call of the wild: returning to nature",
          "② The rapid technological replacement of all natural phenomena related to the call of the wild: returning to nature",
          "③ Moral lessons and character wisdom reflected in 'The Call of the Wild: Returning to Nature'",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the call of the wild: returning to nature were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '잭 런던: 야성의 부름'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'The Call of the Wild: Returning to Nature''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_2-39",
    "unitId": "unit-m2-2",
    "unitTitle": "중 2-2 내신 독해 마스터",
    "grade": "중2",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 2-2 내신 독해 마스터",
    "title": "How Cryptography Protects Digital Privacy",
    "koreanTitle": "암호학: 디지털 사생활을 지키는 방패",
    "level": "middle2_2",
    "levelLabel": "중2 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-2 내신 독해 마스터)",
    "wordCount": 52,
    "estimatedTime": "2.5분",
    "summary": "암호학: 디지털 사생활을 지키는 방패을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Public-key cryptography enables secure communication across untrusted internet channels.",
        "ko": "공개키 암호화는 신뢰할 수 없는 인터넷 통신망에서도 안전한 데이터 송수신을 가능하게 한다."
      },
      {
        "num": 2,
        "en": "Complex mathematical algorithms ensure that encrypted data cannot be deciphered without the private key.",
        "ko": "복잡한 수학적 알고리즘은 개인키가 없으면 암호화된 데이터를 해독할 수 없도록 보장한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "cryptography",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: cryptography"
      },
      {
        "word": "decipher",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: decipher"
      },
      {
        "word": "encrypted",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: encrypted"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_2-39-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When public-key cryptography enables secure communication across untrusted internet channels, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> Complex mathematical algorithms ensure ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_2-39-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Complex mathematical algorithms ensure that encrypted data (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "cannot be deciphered without the private key",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [How Cryptography Protects Digital Privacy] 지문에서 핵심적인 내용인 'cannot be deciphered without the private key'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_2-39-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "공개키 암호화는 신뢰할 수 없는 인터넷 통신망에서도 안전한 데이터 송수신을 가능하게 한다이며, 복잡한 수학적 알고리즘은 개인키가 없으면 암호화된 데이터를 해독할 수 없도록 보장한다이다.",
          "본문에서는 '암호학: 디지털 사생활을 지키는 방패'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Public-key'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '암호학: 디지털 사생활을 지키는 방패'에 관하여 '공개키 암호화는 신뢰할 수 없는 인터넷 통신망에서도 안전한 데이터 송수신을 가능하게 한다'이자 '복잡한 수학적 알고리즘은 개인키가 없으면 암호화된 데이터를 해독할 수 없도록 보장한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_2-39-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Exploring the fundamental mechanisms and importance of 암호학: 디지털 사생활을 지키는 방패",
          "② Why modern scholars completely reject any scientific research on how cryptography protects digital privacy",
          "③ The rapid technological replacement of all natural phenomena related to how cryptography protects digital privacy",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about how cryptography protects digital privacy were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '암호학: 디지털 사생활을 지키는 방패'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 암호학: 디지털 사생활을 지키는 방패'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M2_2-40",
    "unitId": "unit-m2-2",
    "unitTitle": "중 2-2 내신 독해 마스터",
    "grade": "중2",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 2-2 내신 독해 마스터",
    "title": "The Old Man and the Sea: Indomitable Spirit",
    "koreanTitle": "노인과 바다: 결코 굴복하지 않는 의지",
    "level": "middle2_2",
    "levelLabel": "중2 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 2-2 내신 독해 마스터)",
    "wordCount": 59,
    "estimatedTime": "2.5분",
    "summary": "노인과 바다: 결코 굴복하지 않는 의지을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Santiago battled an immense marlin for days in the Gulf Stream with agonizing stamina.",
        "ko": "산티아고는 멕시코만류에서 고통스러운 체력을 견디며 며칠 동안 거대한 청새치와 사투를 벌였다."
      },
      {
        "num": 2,
        "en": "A man can be destroyed, but he cannot be defeated as long as his spirit endures.",
        "ko": "인간은 파괴될 수는 있어도 영혼이 살아있는 한 결코 패배할 수는 없다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "immense",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: immense"
      },
      {
        "word": "agonizing",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: agonizing"
      },
      {
        "word": "indomitable",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: indomitable"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M2_2-40-1",
        "type": "grammar",
        "typeLabel": "[중2 내신 어법] 준동사 및 접속사 오류 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "When santiago battled an immense marlin for days in the gulf stream with agonizing stamina, it is ①<u>important</u> to ②<u>understanding</u> the core idea, ③<u>because</u> A man can be ④<u>helps</u> us ⑤<u>clearly</u>.",
        "options": [
          "① important (가주어 it에 이어지는 진주어 구문의 형용사 보어)",
          "② understanding (to부정사의 to 뒤에는 동사원형 understand를 써야 함)",
          "③ because (원인·이유의 부사절 접속사)",
          "④ helps (단수 주어에 수일치된 동사)",
          "⑤ clearly (동사를 수식하는 부사)"
        ],
        "correctIndex": 1,
        "explanation": "to부정사(to + 동사원형) 구문에서 to 뒤에 동명사 형태인 understanding이 왔으므로, 동사원형인 understand로 고쳐야 어법상 올바릅니다."
      },
      {
        "id": "q-passage-M2_2-40-2",
        "type": "blank",
        "typeLabel": "[중2 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"A man can be destroyed, but he cannot (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "be defeated as long as his spirit endures"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [The Old Man and the Sea: Indomitable Spirit] 지문에서 핵심적인 내용인 'be defeated as long as his spirit endures'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M2_2-40-3",
        "type": "comprehension",
        "typeLabel": "[중2 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '노인과 바다: 결코 굴복하지 않는 의지'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "산티아고는 멕시코만류에서 고통스러운 체력을 견디며 며칠 동안 거대한 청새치와 사투를 벌였다이며, 인간은 파괴될 수는 있어도 영혼이 살아있는 한 결코 패배할 수는 없다이다.",
          "지문에 따르면 'Santiago'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '노인과 바다: 결코 굴복하지 않는 의지'에 관하여 '산티아고는 멕시코만류에서 고통스러운 체력을 견디며 며칠 동안 거대한 청새치와 사투를 벌였다'이자 '인간은 파괴될 수는 있어도 영혼이 살아있는 한 결코 패배할 수는 없다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M2_2-40-4",
        "type": "main_idea",
        "typeLabel": "[중2 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the old man and the sea: indomitable spirit",
          "② The rapid technological replacement of all natural phenomena related to the old man and the sea: indomitable spirit",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Moral lessons and character wisdom reflected in 'The Old Man and the Sea: Indomitable Spirit'",
          "⑤ A historical debate proving that traditional theories about the old man and the sea: indomitable spirit were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '노인과 바다: 결코 굴복하지 않는 의지'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'The Old Man and the Sea: Indomitable Spirit''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_1-41",
    "unitId": "unit-m3-1",
    "unitTitle": "중 3-1 내신 독해 마스터",
    "grade": "중3",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 3-1 내신 독해 마스터",
    "title": "Quantum Mechanics: The Strange Subatomic Realm",
    "koreanTitle": "양자역학: 기묘한 미시 세계의 법칙",
    "level": "middle3_1",
    "levelLabel": "중3 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-1 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "양자역학: 기묘한 미시 세계의 법칙을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "In quantum theory, particles exist in superpositions of multiple states simultaneously.",
        "ko": "양자 이론에서 입자들은 동시에 여러 상태가 중첩되어 존재한다."
      },
      {
        "num": 2,
        "en": "The very act of measurement collapses probability waves into a singular observable outcome.",
        "ko": "측정 행위 자체가 확률파동을 붕괴시켜 하나의 관측 가능한 결과로 확정한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "superposition",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: superposition"
      },
      {
        "word": "collapse",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: collapse"
      },
      {
        "word": "simultaneously",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: simultaneously"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_1-41-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> in quantum theory, particles exist in superpositions of multiple states simultaneously, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_1-41-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"The very act of measurement collapses (          빈칸          ).\"",
        "options": [
          "probability waves into a singular observable outcome",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [Quantum Mechanics: The Strange Subatomic Realm] 지문에서 핵심적인 내용인 'probability waves into a singular observable outcome'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_1-41-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '양자역학: 기묘한 미시 세계의 법칙'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'In'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "양자 이론에서 입자들은 동시에 여러 상태가 중첩되어 존재한다이며, 측정 행위 자체가 확률파동을 붕괴시켜 하나의 관측 가능한 결과로 확정한다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '양자역학: 기묘한 미시 세계의 법칙'에 관하여 '양자 이론에서 입자들은 동시에 여러 상태가 중첩되어 존재한다'이자 '측정 행위 자체가 확률파동을 붕괴시켜 하나의 관측 가능한 결과로 확정한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_1-41-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on quantum mechanics: the strange subatomic realm",
          "② The cooperative social structure and survival strategies of ants underground",
          "③ The rapid technological replacement of all natural phenomena related to quantum mechanics: the strange subatomic realm",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about quantum mechanics: the strange subatomic realm were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '양자역학: 기묘한 미시 세계의 법칙'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The cooperative social structure and survival strategies of ants underground'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_1-42",
    "unitId": "unit-m3-1",
    "unitTitle": "중 3-1 내신 독해 마스터",
    "grade": "중3",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 3-1 내신 독해 마스터",
    "title": "George Orwell's 1984: Language and Thought",
    "koreanTitle": "조지 오웰 1984: 언어와 사고의 통제",
    "level": "middle3_1",
    "levelLabel": "중3 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-1 내신 독해 마스터)",
    "wordCount": 50,
    "estimatedTime": "2.5분",
    "summary": "조지 오웰 1984: 언어와 사고의 통제을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "The Party invented Newspeak to eliminate rebellious thoughts by narrowing vocabulary.",
        "ko": "당(Party)은 어휘 수를 축소함으로써 반역적인 생각을 원천 차단하기 위해 신어(Newspeak)를 창조했다."
      },
      {
        "num": 2,
        "en": "Without expressive words to articulate freedom, dissent becomes literally unthinkable.",
        "ko": "자유를 표현할 어휘가 사라지면, 체제에 대한 저항은 문자 그대로 생각조차 할 수 없게 된다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "rebellious",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: rebellious"
      },
      {
        "word": "articulate",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: articulate"
      },
      {
        "word": "dissent",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: dissent"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_1-42-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> the party invented newspeak to eliminate rebellious thoughts by narrowing vocabulary, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_1-42-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Without expressive words to articulate (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "freedom, dissent becomes literally unthinkable",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [George Orwell's 1984: Language and Thought] 지문에서 핵심적인 내용인 'freedom, dissent becomes literally unthinkable'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_1-42-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '조지 오웰 1984: 언어와 사고의 통제'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'The'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "당(Party)은 어휘 수를 축소함으로써 반역적인 생각을 원천 차단하기 위해 신어(Newspeak)를 창조했다이며, 자유를 표현할 어휘가 사라지면, 체제에 대한 저항은 문자 그대로 생각조차 할 수 없게 된다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '조지 오웰 1984: 언어와 사고의 통제'에 관하여 '당(Party)은 어휘 수를 축소함으로써 반역적인 생각을 원천 차단하기 위해 신어(Newspeak)를 창조했다'이자 '자유를 표현할 어휘가 사라지면, 체제에 대한 저항은 문자 그대로 생각조차 할 수 없게 된다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_1-42-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on george orwell's 1984: language and thought",
          "② The rapid technological replacement of all natural phenomena related to george orwell's 1984: language and thought",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about george orwell's 1984: language and thought were all harmful",
          "⑤ Moral lessons and character wisdom reflected in 'George Orwell's 1984: Language and Thought'"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '조지 오웰 1984: 언어와 사고의 통제'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'George Orwell's 1984: Language and Thought''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_1-43",
    "unitId": "unit-m3-1",
    "unitTitle": "중 3-1 내신 독해 마스터",
    "grade": "중3",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 3-1 내신 독해 마스터",
    "title": "The Ethics of Gene Editing and CRISPR",
    "koreanTitle": "유전자 가위 크리스퍼(CRISPR)와 생명윤리",
    "level": "middle3_1",
    "levelLabel": "중3 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-1 내신 독해 마스터)",
    "wordCount": 52,
    "estimatedTime": "2.5분",
    "summary": "유전자 가위 크리스퍼(CRISPR)와 생명윤리을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "CRISPR technology empowers scientists to excise and replace genetic sequences precisely.",
        "ko": "크리스퍼 기술은 과학자들이 유전 서열을 정밀하게 잘라내고 교체할 수 있도록 해준다."
      },
      {
        "num": 2,
        "en": "While eradicating hereditary disorders is promising, germline modification raises grave moral quandaries.",
        "ko": "유전 질환의 퇴치는 유망하지만, 생식세포 유전자 편집은 중대한 도덕적 난제를 야기한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "eradicate",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: eradicate"
      },
      {
        "word": "quandary",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: quandary"
      },
      {
        "word": "hereditary",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: hereditary"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_1-43-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> crispr technology empowers scientists to excise and replace genetic sequences precisely, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_1-43-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"While eradicating hereditary disorders is promising, (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "germline modification raises grave moral quandaries",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [The Ethics of Gene Editing and CRISPR] 지문에서 핵심적인 내용인 'germline modification raises grave moral quandaries'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_1-43-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "크리스퍼 기술은 과학자들이 유전 서열을 정밀하게 잘라내고 교체할 수 있도록 해준다이며, 유전 질환의 퇴치는 유망하지만, 생식세포 유전자 편집은 중대한 도덕적 난제를 야기한다이다.",
          "본문에서는 '유전자 가위 크리스퍼(CRISPR)와 생명윤리'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'CRISPR'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '유전자 가위 크리스퍼(CRISPR)와 생명윤리'에 관하여 '크리스퍼 기술은 과학자들이 유전 서열을 정밀하게 잘라내고 교체할 수 있도록 해준다'이자 '유전 질환의 퇴치는 유망하지만, 생식세포 유전자 편집은 중대한 도덕적 난제를 야기한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_1-43-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the ethics of gene editing and crispr",
          "② The rapid technological replacement of all natural phenomena related to the ethics of gene editing and crispr",
          "③ Exploring the fundamental mechanisms and importance of 유전자 가위 크리스퍼(CRISPR)와 생명윤리",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the ethics of gene editing and crispr were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '유전자 가위 크리스퍼(CRISPR)와 생명윤리'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 유전자 가위 크리스퍼(CRISPR)와 생명윤리'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_1-44",
    "unitId": "unit-m3-1",
    "unitTitle": "중 3-1 내신 독해 마스터",
    "grade": "중3",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 3-1 내신 독해 마스터",
    "title": "The Great Gatsby: The Illusion of Wealth",
    "koreanTitle": "위대한 개츠비: 물질적 부의 환상",
    "level": "middle3_1",
    "levelLabel": "중3 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-1 내신 독해 마스터)",
    "wordCount": 55,
    "estimatedTime": "2.5분",
    "summary": "위대한 개츠비: 물질적 부의 환상을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Gatsby amassed staggering riches solely to reclaim his lost love with Daisy Buchanan.",
        "ko": "개츠비는 오직 데이지 뷰캐넌과의 잃어버린 사랑을 되찾기 위해 막대한 부를 축적했다."
      },
      {
        "num": 2,
        "en": "Behind the lavish soirées lay an agonizing emptiness that money could never fulfill.",
        "ko": "화려한 만찬 뒤에는 돈으로 결코 채울 수 없는 고통스러운 공허함이 도사리고 있었다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "lavish",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: lavish"
      },
      {
        "word": "staggering",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: staggering"
      },
      {
        "word": "amass",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: amass"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_1-44-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> gatsby amassed staggering riches solely to reclaim his lost love with daisy buchanan, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_1-44-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Behind the lavish soirées lay an (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "agonizing emptiness that money could never fulfill"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [The Great Gatsby: The Illusion of Wealth] 지문에서 핵심적인 내용인 'agonizing emptiness that money could never fulfill'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_1-44-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '위대한 개츠비: 물질적 부의 환상'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "개츠비는 오직 데이지 뷰캐넌과의 잃어버린 사랑을 되찾기 위해 막대한 부를 축적했다이며, 화려한 만찬 뒤에는 돈으로 결코 채울 수 없는 고통스러운 공허함이 도사리고 있었다이다.",
          "지문에 따르면 'Gatsby'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '위대한 개츠비: 물질적 부의 환상'에 관하여 '개츠비는 오직 데이지 뷰캐넌과의 잃어버린 사랑을 되찾기 위해 막대한 부를 축적했다'이자 '화려한 만찬 뒤에는 돈으로 결코 채울 수 없는 고통스러운 공허함이 도사리고 있었다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_1-44-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Moral lessons and character wisdom reflected in 'The Great Gatsby: The Illusion of Wealth'",
          "② Why modern scholars completely reject any scientific research on the great gatsby: the illusion of wealth",
          "③ The rapid technological replacement of all natural phenomena related to the great gatsby: the illusion of wealth",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the great gatsby: the illusion of wealth were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '위대한 개츠비: 물질적 부의 환상'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'The Great Gatsby: The Illusion of Wealth''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_1-45",
    "unitId": "unit-m3-1",
    "unitTitle": "중 3-1 내신 독해 마스터",
    "grade": "중3",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 3-1 내신 독해 마스터",
    "title": "Epigenetics: How Environment Influences Genes",
    "koreanTitle": "후성유전학: 환경이 유전자를 깨운다",
    "level": "middle3_1",
    "levelLabel": "중3 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-1 내신 독해 마스터)",
    "wordCount": 55,
    "estimatedTime": "2.5분",
    "summary": "후성유전학: 환경이 유전자를 깨운다을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Epigenetics reveals that lifestyle factors alter gene expression without mutating DNA sequences.",
        "ko": "후성유전학은 생활 방식이 DNA 염기서열의 변이 없이도 유전자 발현을 변화시킨다는 점을 밝혀냈다."
      },
      {
        "num": 2,
        "en": "Chronic stress and nutrition attach chemical tags that switch crucial genes on or off.",
        "ko": "만성 스트레스와 영양 섭취는 핵심 유전자를 켜거나 끄는 화학적 표식을 부착한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "epigenetics",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: epigenetics"
      },
      {
        "word": "mutate",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: mutate"
      },
      {
        "word": "chronic",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: chronic"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_1-45-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> epigenetics reveals that lifestyle factors alter gene expression without mutating dna sequences, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_1-45-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Chronic stress and nutrition attach chemical tags (          빈칸          ).\"",
        "options": [
          "that switch crucial genes on or off",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [Epigenetics: How Environment Influences Genes] 지문에서 핵심적인 내용인 'that switch crucial genes on or off'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_1-45-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '후성유전학: 환경이 유전자를 깨운다'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Epigenetics'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "후성유전학은 생활 방식이 DNA 염기서열의 변이 없이도 유전자 발현을 변화시킨다는 점을 밝혀냈다이며, 만성 스트레스와 영양 섭취는 핵심 유전자를 켜거나 끄는 화학적 표식을 부착한다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '후성유전학: 환경이 유전자를 깨운다'에 관하여 '후성유전학은 생활 방식이 DNA 염기서열의 변이 없이도 유전자 발현을 변화시킨다는 점을 밝혀냈다'이자 '만성 스트레스와 영양 섭취는 핵심 유전자를 켜거나 끄는 화학적 표식을 부착한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_1-45-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on epigenetics: how environment influences genes",
          "② The rapid technological replacement of all natural phenomena related to epigenetics: how environment influences genes",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Exploring the fundamental mechanisms and importance of 후성유전학: 환경이 유전자를 깨운다",
          "⑤ A historical debate proving that traditional theories about epigenetics: how environment influences genes were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '후성유전학: 환경이 유전자를 깨운다'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 후성유전학: 환경이 유전자를 깨운다'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_1-46",
    "unitId": "unit-m3-1",
    "unitTitle": "중 3-1 내신 독해 마스터",
    "grade": "중3",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 3-1 내신 독해 마스터",
    "title": "To Kill a Mockingbird: Courage and Conscience",
    "koreanTitle": "하퍼 리: 앵무새 죽이기와 양심의 용기",
    "level": "middle3_1",
    "levelLabel": "중3 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-1 내신 독해 마스터)",
    "wordCount": 57,
    "estimatedTime": "2.5분",
    "summary": "하퍼 리: 앵무새 죽이기와 양심의 용기을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Atticus Finch defended an innocent man despite overwhelming racial prejudice in Maycomb.",
        "ko": "애티커스 핀치는 메이콤 마을의 압도적인 인종적 편견에도 불구하고 무고한 사람을 변호했다."
      },
      {
        "num": 2,
        "en": "Real courage is fighting for justice even when you know you are licked before you begin.",
        "ko": "진정한 용기는 시작하기도 전에 패배할 것을 알면서도 정의를 위해 끝까지 싸우는 것이다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "prejudice",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: prejudice"
      },
      {
        "word": "innocent",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: innocent"
      },
      {
        "word": "courage",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: courage"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_1-46-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> atticus finch defended an innocent man despite overwhelming racial prejudice in maycomb, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_1-46-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Real courage is fighting for justice even when (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "you know you are licked before you begin",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [To Kill a Mockingbird: Courage and Conscience] 지문에서 핵심적인 내용인 'you know you are licked before you begin'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_1-46-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '하퍼 리: 앵무새 죽이기와 양심의 용기'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Atticus'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "애티커스 핀치는 메이콤 마을의 압도적인 인종적 편견에도 불구하고 무고한 사람을 변호했다이며, 진정한 용기는 시작하기도 전에 패배할 것을 알면서도 정의를 위해 끝까지 싸우는 것이다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '하퍼 리: 앵무새 죽이기와 양심의 용기'에 관하여 '애티커스 핀치는 메이콤 마을의 압도적인 인종적 편견에도 불구하고 무고한 사람을 변호했다'이자 '진정한 용기는 시작하기도 전에 패배할 것을 알면서도 정의를 위해 끝까지 싸우는 것이다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_1-46-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on to kill a mockingbird: courage and conscience",
          "② Moral lessons and character wisdom reflected in 'To Kill a Mockingbird: Courage and Conscience'",
          "③ The rapid technological replacement of all natural phenomena related to to kill a mockingbird: courage and conscience",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about to kill a mockingbird: courage and conscience were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '하퍼 리: 앵무새 죽이기와 양심의 용기'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'To Kill a Mockingbird: Courage and Conscience''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_1-47",
    "unitId": "unit-m3-1",
    "unitTitle": "중 3-1 내신 독해 마스터",
    "grade": "중3",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 3-1 내신 독해 마스터",
    "title": "The Economics of Tragedy of the Commons",
    "koreanTitle": "공유지의 비극과 자원 관리의 지혜",
    "level": "middle3_1",
    "levelLabel": "중3 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-1 내신 독해 마스터)",
    "wordCount": 52,
    "estimatedTime": "2.5분",
    "summary": "공유지의 비극과 자원 관리의 지혜을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "When shared resources lack clear property rights, rational self-interest precipitates collective ruin.",
        "ko": "공유 자원에 명확한 소유권이 없을 때, 합리적 이기심은 집단적 파멸을 가속화한다."
      },
      {
        "num": 2,
        "en": "Cooperative institutional frameworks are indispensable to preserve fisheries and fresh water.",
        "ko": "어장과 담수를 보존하기 위해서는 협력적인 제도적 틀이 필수적이다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "precipitate",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: precipitate"
      },
      {
        "word": "indispensable",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: indispensable"
      },
      {
        "word": "ruin",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: ruin"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_1-47-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> when shared resources lack clear property rights, rational self-interest precipitates collective ruin, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_1-47-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Cooperative institutional frameworks are indispensable (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "to preserve fisheries and fresh water",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [The Economics of Tragedy of the Commons] 지문에서 핵심적인 내용인 'to preserve fisheries and fresh water'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_1-47-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "공유 자원에 명확한 소유권이 없을 때, 합리적 이기심은 집단적 파멸을 가속화한다이며, 어장과 담수를 보존하기 위해서는 협력적인 제도적 틀이 필수적이다이다.",
          "본문에서는 '공유지의 비극과 자원 관리의 지혜'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'When'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '공유지의 비극과 자원 관리의 지혜'에 관하여 '공유 자원에 명확한 소유권이 없을 때, 합리적 이기심은 집단적 파멸을 가속화한다'이자 '어장과 담수를 보존하기 위해서는 협력적인 제도적 틀이 필수적이다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_1-47-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the economics of tragedy of the commons",
          "② The rapid technological replacement of all natural phenomena related to the economics of tragedy of the commons",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about the economics of tragedy of the commons were all harmful",
          "⑤ Exploring the fundamental mechanisms and importance of 공유지의 비극과 자원 관리의 지혜"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '공유지의 비극과 자원 관리의 지혜'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 공유지의 비극과 자원 관리의 지혜'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_1-48",
    "unitId": "unit-m3-1",
    "unitTitle": "중 3-1 내신 독해 마스터",
    "grade": "중3",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 3-1 내신 독해 마스터",
    "title": "Pride and Prejudice: Beyond First Impressions",
    "koreanTitle": "오만과 편견: 선입견을 넘어선 진실",
    "level": "middle3_1",
    "levelLabel": "중3 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-1 내신 독해 마스터)",
    "wordCount": 49,
    "estimatedTime": "2.5분",
    "summary": "오만과 편견: 선입견을 넘어선 진실을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Elizabeth Bennett misjudged Darcy's reserved demeanor as insufferable haughtiness.",
        "ko": "엘리자베스 베넷은 다아시의 과묵한 태도를 참을 수 없는 오만함으로 오해했다."
      },
      {
        "num": 2,
        "en": "Overcoming stubborn preconceptions enabled them to recognize mutual integrity and affection.",
        "ko": "완고한 선입견을 극복하고 나서야 그들은 서로의 고결한 성품과 애정을 온전히 알아볼 수 있었다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "preconception",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: preconception"
      },
      {
        "word": "insufferable",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: insufferable"
      },
      {
        "word": "demeanor",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: demeanor"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_1-48-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> elizabeth bennett misjudged darcy's reserved demeanor as insufferable haughtiness, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_1-48-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Overcoming stubborn preconceptions enabled them (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "to recognize mutual integrity and affection"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [Pride and Prejudice: Beyond First Impressions] 지문에서 핵심적인 내용인 'to recognize mutual integrity and affection'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_1-48-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '오만과 편견: 선입견을 넘어선 진실'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "엘리자베스 베넷은 다아시의 과묵한 태도를 참을 수 없는 오만함으로 오해했다이며, 완고한 선입견을 극복하고 나서야 그들은 서로의 고결한 성품과 애정을 온전히 알아볼 수 있었다이다.",
          "지문에 따르면 'Elizabeth'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '오만과 편견: 선입견을 넘어선 진실'에 관하여 '엘리자베스 베넷은 다아시의 과묵한 태도를 참을 수 없는 오만함으로 오해했다'이자 '완고한 선입견을 극복하고 나서야 그들은 서로의 고결한 성품과 애정을 온전히 알아볼 수 있었다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_1-48-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on pride and prejudice: beyond first impressions",
          "② The rapid technological replacement of all natural phenomena related to pride and prejudice: beyond first impressions",
          "③ Moral lessons and character wisdom reflected in 'Pride and Prejudice: Beyond First Impressions'",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about pride and prejudice: beyond first impressions were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '오만과 편견: 선입견을 넘어선 진실'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Pride and Prejudice: Beyond First Impressions''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_1-49",
    "unitId": "unit-m3-1",
    "unitTitle": "중 3-1 내신 독해 마스터",
    "grade": "중3",
    "semester": "1학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 3-1 내신 독해 마스터",
    "title": "Game Theory and the Prisoner's Dilemma",
    "koreanTitle": "게임이론과 죄수의 딜레마: 협력의 조건",
    "level": "middle3_1",
    "levelLabel": "중3 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-1 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "게임이론과 죄수의 딜레마: 협력의 조건을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "The prisoner's dilemma models why two purely rational individuals might not cooperate.",
        "ko": "죄수의 딜레마는 순수하게 합리적인 두 개인이 왜 협력하지 못하는지를 수학적으로 모델링한다."
      },
      {
        "num": 2,
        "en": "Repeated interactions foster reciprocal trust, demonstrating that altruism can be evolutionary optimal.",
        "ko": "반복되는 상호작용은 상호 신뢰를 키워주며, 이타주의가 진화론적으로 최적일 수 있음을 증명한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "reciprocal",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: reciprocal"
      },
      {
        "word": "altruism",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: altruism"
      },
      {
        "word": "dilemma",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: dilemma"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_1-49-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> the prisoner's dilemma models why two purely rational individuals might not cooperate, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_1-49-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Repeated interactions foster reciprocal trust, demonstrating (          빈칸          ).\"",
        "options": [
          "that altruism can be evolutionary optimal",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [Game Theory and the Prisoner's Dilemma] 지문에서 핵심적인 내용인 'that altruism can be evolutionary optimal'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_1-49-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '게임이론과 죄수의 딜레마: 협력의 조건'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'The'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "죄수의 딜레마는 순수하게 합리적인 두 개인이 왜 협력하지 못하는지를 수학적으로 모델링한다이며, 반복되는 상호작용은 상호 신뢰를 키워주며, 이타주의가 진화론적으로 최적일 수 있음을 증명한다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '게임이론과 죄수의 딜레마: 협력의 조건'에 관하여 '죄수의 딜레마는 순수하게 합리적인 두 개인이 왜 협력하지 못하는지를 수학적으로 모델링한다'이자 '반복되는 상호작용은 상호 신뢰를 키워주며, 이타주의가 진화론적으로 최적일 수 있음을 증명한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_1-49-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Exploring the fundamental mechanisms and importance of 게임이론과 죄수의 딜레마: 협력의 조건",
          "② Why modern scholars completely reject any scientific research on game theory and the prisoner's dilemma",
          "③ The rapid technological replacement of all natural phenomena related to game theory and the prisoner's dilemma",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about game theory and the prisoner's dilemma were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '게임이론과 죄수의 딜레마: 협력의 조건'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 게임이론과 죄수의 딜레마: 협력의 조건'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_1-50",
    "unitId": "unit-m3-1",
    "unitTitle": "중 3-1 내신 독해 마스터",
    "grade": "중3",
    "semester": "1학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 3-1 내신 독해 마스터",
    "title": "Lord of the Flies: Civilization vs. Savagery",
    "koreanTitle": "파리대왕: 문명과 야만성의 충돌",
    "level": "middle3_1",
    "levelLabel": "중3 1학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-1 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "파리대왕: 문명과 야만성의 충돌을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Stranded British schoolboys gradually shed civilized norms, descending into tribal brutality.",
        "ko": "무인도에 조난당한 영국 소년들은 문명화된 규범을 점차 벗어던지고 부족적인 야만성으로 타락해 갔다."
      },
      {
        "num": 2,
        "en": "Golding illustrates that the potential for darkness resides within the human heart itself.",
        "ko": "골딩은 어둠의 파괴적 본능이 인간의 마음 내면에 도사리고 있음을 통렬하게 묘사한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "brutality",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: brutality"
      },
      {
        "word": "civilized",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: civilized"
      },
      {
        "word": "reside",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: reside"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_1-50-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> stranded british schoolboys gradually shed civilized norms, descending into tribal brutality, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_1-50-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Golding illustrates that the potential for (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "darkness resides within the human heart itself",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [Lord of the Flies: Civilization vs. Savagery] 지문에서 핵심적인 내용인 'darkness resides within the human heart itself'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_1-50-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '파리대왕: 문명과 야만성의 충돌'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Stranded'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "무인도에 조난당한 영국 소년들은 문명화된 규범을 점차 벗어던지고 부족적인 야만성으로 타락해 갔다이며, 골딩은 어둠의 파괴적 본능이 인간의 마음 내면에 도사리고 있음을 통렬하게 묘사한다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '파리대왕: 문명과 야만성의 충돌'에 관하여 '무인도에 조난당한 영국 소년들은 문명화된 규범을 점차 벗어던지고 부족적인 야만성으로 타락해 갔다'이자 '골딩은 어둠의 파괴적 본능이 인간의 마음 내면에 도사리고 있음을 통렬하게 묘사한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_1-50-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on lord of the flies: civilization vs. savagery",
          "② The rapid technological replacement of all natural phenomena related to lord of the flies: civilization vs. savagery",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Moral lessons and character wisdom reflected in 'Lord of the Flies: Civilization vs. Savagery'",
          "⑤ A historical debate proving that traditional theories about lord of the flies: civilization vs. savagery were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '파리대왕: 문명과 야만성의 충돌'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Lord of the Flies: Civilization vs. Savagery''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_2-51",
    "unitId": "unit-m3-2",
    "unitTitle": "중 3-2 내신 독해 마스터",
    "grade": "중3",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 3-2 내신 독해 마스터",
    "title": "Neuroplasticity and Lifelong Cognitive Resilience",
    "koreanTitle": "뇌 가소성과 평생 학습의 회복 탄력성",
    "level": "middle3_2",
    "levelLabel": "중3 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-2 내신 독해 마스터)",
    "wordCount": 49,
    "estimatedTime": "2.5분",
    "summary": "뇌 가소성과 평생 학습의 회복 탄력성을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Synaptic connections reorganize dynamically in response to novel intellectual stimuli.",
        "ko": "시냅스 연결은 새로운 지적 자극에 반응하여 역동적으로 스스로를 재조직한다."
      },
      {
        "num": 2,
        "en": "Challenging mental tasks stimulate neurogenesis, safeguarding cognitive health against senescence.",
        "ko": "도전적인 정신적 과제는 신경세포 생성을 자극하여 노화에 맞서 인지 건강을 지켜낸다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "stimuli",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: stimuli"
      },
      {
        "word": "senescence",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: senescence"
      },
      {
        "word": "neurogenesis",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: neurogenesis"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_2-51-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> synaptic connections reorganize dynamically in response to novel intellectual stimuli, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_2-51-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Challenging mental tasks stimulate neurogenesis, (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "safeguarding cognitive health against senescence",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [Neuroplasticity and Lifelong Cognitive Resilience] 지문에서 핵심적인 내용인 'safeguarding cognitive health against senescence'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_2-51-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "시냅스 연결은 새로운 지적 자극에 반응하여 역동적으로 스스로를 재조직한다이며, 도전적인 정신적 과제는 신경세포 생성을 자극하여 노화에 맞서 인지 건강을 지켜낸다이다.",
          "본문에서는 '뇌 가소성과 평생 학습의 회복 탄력성'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Synaptic'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '뇌 가소성과 평생 학습의 회복 탄력성'에 관하여 '시냅스 연결은 새로운 지적 자극에 반응하여 역동적으로 스스로를 재조직한다'이자 '도전적인 정신적 과제는 신경세포 생성을 자극하여 노화에 맞서 인지 건강을 지켜낸다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_2-51-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on neuroplasticity and lifelong cognitive resilience",
          "② The urgent threat of marine plastic pollution and the need for global action",
          "③ The rapid technological replacement of all natural phenomena related to neuroplasticity and lifelong cognitive resilience",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about neuroplasticity and lifelong cognitive resilience were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '뇌 가소성과 평생 학습의 회복 탄력성'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'The urgent threat of marine plastic pollution and the need for global action'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_2-52",
    "unitId": "unit-m3-2",
    "unitTitle": "중 3-2 내신 독해 마스터",
    "grade": "중3",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 3-2 내신 독해 마스터",
    "title": "Brave New World: Manufactured Happiness",
    "koreanTitle": "멋진 신세계: 조작된 행복과 인간성",
    "level": "middle3_2",
    "levelLabel": "중3 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-2 내신 독해 마스터)",
    "wordCount": 56,
    "estimatedTime": "2.5분",
    "summary": "멋진 신세계: 조작된 행복과 인간성을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "In the World State, citizens are genetically conditioned and pacified by a pleasure drug.",
        "ko": "세계국가에서 시민들은 유전적으로 조건화되고 쾌락 약물(소마)에 의해 순응하게 길들여진다."
      },
      {
        "num": 2,
        "en": "John the Savage rejects manufactured contentment, claiming the right to feel genuine sorrow.",
        "ko": "야만인 존은 인위적으로 조작된 안락함을 거부하고, 진정한 슬픔을 느낄 권리를 요구한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "conditioned",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: conditioned"
      },
      {
        "word": "contentment",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: contentment"
      },
      {
        "word": "pacify",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: pacify"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_2-52-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> in the world state, citizens are genetically conditioned and pacified by a pleasure drug, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_2-52-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"John the Savage rejects manufactured contentment, (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "claiming the right to feel genuine sorrow"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [Brave New World: Manufactured Happiness] 지문에서 핵심적인 내용인 'claiming the right to feel genuine sorrow'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_2-52-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '멋진 신세계: 조작된 행복과 인간성'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "세계국가에서 시민들은 유전적으로 조건화되고 쾌락 약물(소마)에 의해 순응하게 길들여진다이며, 야만인 존은 인위적으로 조작된 안락함을 거부하고, 진정한 슬픔을 느낄 권리를 요구한다이다.",
          "지문에 따르면 'In'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '멋진 신세계: 조작된 행복과 인간성'에 관하여 '세계국가에서 시민들은 유전적으로 조건화되고 쾌락 약물(소마)에 의해 순응하게 길들여진다'이자 '야만인 존은 인위적으로 조작된 안락함을 거부하고, 진정한 슬픔을 느낄 권리를 요구한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_2-52-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on brave new world: manufactured happiness",
          "② The rapid technological replacement of all natural phenomena related to brave new world: manufactured happiness",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about brave new world: manufactured happiness were all harmful",
          "⑤ Moral lessons and character wisdom reflected in 'Brave New World: Manufactured Happiness'"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '멋진 신세계: 조작된 행복과 인간성'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Brave New World: Manufactured Happiness''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_2-53",
    "unitId": "unit-m3-2",
    "unitTitle": "중 3-2 내신 독해 마스터",
    "grade": "중3",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 3-2 내신 독해 마스터",
    "title": "Dark Matter and the Cosmic Web",
    "koreanTitle": "암흑물질과 우주의 거대한 그물망",
    "level": "middle3_2",
    "levelLabel": "중3 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-2 내신 독해 마스터)",
    "wordCount": 55,
    "estimatedTime": "2.5분",
    "summary": "암흑물질과 우주의 거대한 그물망을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Luminous matter comprises merely five percent of the entire mass-energy of the universe.",
        "ko": "빛을 내는 일반 물질은 우주 전체 질량-에너지의 단 5퍼센트에 불과하다."
      },
      {
        "num": 2,
        "en": "Invisible dark matter forms a gravitational scaffolding that anchors galaxies into cosmic filaments.",
        "ko": "눈에 보이지 않는 암흑물질은 은하들을 우주 필라멘트 그물망으로 묶어두는 중력의 뼈대를 형성한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "scaffolding",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: scaffolding"
      },
      {
        "word": "filament",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: filament"
      },
      {
        "word": "luminous",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: luminous"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_2-53-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> luminous matter comprises merely five percent of the entire mass-energy of the universe, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_2-53-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Invisible dark matter forms a gravitational (          빈칸          ).\"",
        "options": [
          "scaffolding that anchors galaxies into cosmic filaments",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [Dark Matter and the Cosmic Web] 지문에서 핵심적인 내용인 'scaffolding that anchors galaxies into cosmic filaments'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_2-53-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '암흑물질과 우주의 거대한 그물망'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Luminous'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "빛을 내는 일반 물질은 우주 전체 질량-에너지의 단 5퍼센트에 불과하다이며, 눈에 보이지 않는 암흑물질은 은하들을 우주 필라멘트 그물망으로 묶어두는 중력의 뼈대를 형성한다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '암흑물질과 우주의 거대한 그물망'에 관하여 '빛을 내는 일반 물질은 우주 전체 질량-에너지의 단 5퍼센트에 불과하다'이자 '눈에 보이지 않는 암흑물질은 은하들을 우주 필라멘트 그물망으로 묶어두는 중력의 뼈대를 형성한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_2-53-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on dark matter and the cosmic web",
          "② The rapid technological replacement of all natural phenomena related to dark matter and the cosmic web",
          "③ Exploring the fundamental mechanisms and importance of 암흑물질과 우주의 거대한 그물망",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about dark matter and the cosmic web were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '암흑물질과 우주의 거대한 그물망'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 암흑물질과 우주의 거대한 그물망'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_2-54",
    "unitId": "unit-m3-2",
    "unitTitle": "중 3-2 내신 독해 마스터",
    "grade": "중3",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 3-2 내신 독해 마스터",
    "title": "Les Misérables: The Redeeming Power of Mercy",
    "koreanTitle": "레 미제라블: 자비와 구원의 대서사시",
    "level": "middle3_2",
    "levelLabel": "중3 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-2 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "레 미제라블: 자비와 구원의 대서사시을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Bishop Myriel's boundless compassion transformed Jean Valjean from an embittered convict.",
        "ko": "미리엘 주교의 한없는 자비는 장발장을 분노에 찬 죄수에서 성자로 변화시켰다."
      },
      {
        "num": 2,
        "en": "Valjean dedicated the rest of his life to uplifting the destitute and vulnerable.",
        "ko": "장발장은 평생을 가난하고 소외된 사람들을 구제하는 데 바쳤다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "compassion",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: compassion"
      },
      {
        "word": "destitute",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: destitute"
      },
      {
        "word": "embittered",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: embittered"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_2-54-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> bishop myriel's boundless compassion transformed jean valjean from an embittered convict, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_2-54-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Valjean dedicated the rest of his (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "life to uplifting the destitute and vulnerable",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [Les Misérables: The Redeeming Power of Mercy] 지문에서 핵심적인 내용인 'life to uplifting the destitute and vulnerable'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_2-54-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '레 미제라블: 자비와 구원의 대서사시'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Bishop'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "미리엘 주교의 한없는 자비는 장발장을 분노에 찬 죄수에서 성자로 변화시켰다이며, 장발장은 평생을 가난하고 소외된 사람들을 구제하는 데 바쳤다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '레 미제라블: 자비와 구원의 대서사시'에 관하여 '미리엘 주교의 한없는 자비는 장발장을 분노에 찬 죄수에서 성자로 변화시켰다'이자 '장발장은 평생을 가난하고 소외된 사람들을 구제하는 데 바쳤다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_2-54-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Moral lessons and character wisdom reflected in 'Les Misérables: The Redeeming Power of Mercy'",
          "② Why modern scholars completely reject any scientific research on les misérables: the redeeming power of mercy",
          "③ The rapid technological replacement of all natural phenomena related to les misérables: the redeeming power of mercy",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about les misérables: the redeeming power of mercy were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '레 미제라블: 자비와 구원의 대서사시'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Les Misérables: The Redeeming Power of Mercy''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_2-55",
    "unitId": "unit-m3-2",
    "unitTitle": "중 3-2 내신 독해 마스터",
    "grade": "중3",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 3-2 내신 독해 마스터",
    "title": "The Fermi Paradox: Where Are All the Aliens?",
    "koreanTitle": "페르미 역설: 외계 지적 생명체는 어디에?",
    "level": "middle3_2",
    "levelLabel": "중3 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-2 내신 독해 마스터)",
    "wordCount": 55,
    "estimatedTime": "2.5분",
    "summary": "페르미 역설: 외계 지적 생명체는 어디에?을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Given billions of habitable planets in our galaxy, extraterrestrial contact should be statistically inevitable.",
        "ko": "우리 은하에 수십억 개의 거주 가능 행성이 존재한다는 점을 감안할 때, 외계와의 접촉은 통계적으로 불가피해야 한다."
      },
      {
        "num": 2,
        "en": "The deafening cosmic silence suggests formidable evolutionary filters between microbes and civilizations.",
        "ko": "귀가 먹먹할 정도의 우주적 침묵은 미생물과 문명 사이에 가공할 진화적 장벽이 존재함을 시사한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "inevitable",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: inevitable"
      },
      {
        "word": "formidable",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: formidable"
      },
      {
        "word": "extraterrestrial",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: extraterrestrial"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_2-55-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> given billions of habitable planets in our galaxy, extraterrestrial contact should be statistically inevitable, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_2-55-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"The deafening cosmic silence suggests formidable (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "evolutionary filters between microbes and civilizations",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [The Fermi Paradox: Where Are All the Aliens?] 지문에서 핵심적인 내용인 'evolutionary filters between microbes and civilizations'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_2-55-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "우리 은하에 수십억 개의 거주 가능 행성이 존재한다는 점을 감안할 때, 외계와의 접촉은 통계적으로 불가피해야 한다이며, 귀가 먹먹할 정도의 우주적 침묵은 미생물과 문명 사이에 가공할 진화적 장벽이 존재함을 시사한다이다.",
          "본문에서는 '페르미 역설: 외계 지적 생명체는 어디에?'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Given'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '페르미 역설: 외계 지적 생명체는 어디에?'에 관하여 '우리 은하에 수십억 개의 거주 가능 행성이 존재한다는 점을 감안할 때, 외계와의 접촉은 통계적으로 불가피해야 한다'이자 '귀가 먹먹할 정도의 우주적 침묵은 미생물과 문명 사이에 가공할 진화적 장벽이 존재함을 시사한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_2-55-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the fermi paradox: where are all the aliens?",
          "② The rapid technological replacement of all natural phenomena related to the fermi paradox: where are all the aliens?",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Exploring the fundamental mechanisms and importance of 페르미 역설: 외계 지적 생명체는 어디에?",
          "⑤ A historical debate proving that traditional theories about the fermi paradox: where are all the aliens? were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '페르미 역설: 외계 지적 생명체는 어디에?'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 페르미 역설: 외계 지적 생명체는 어디에?'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_2-56",
    "unitId": "unit-m3-2",
    "unitTitle": "중 3-2 내신 독해 마스터",
    "grade": "중3",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 3-2 내신 독해 마스터",
    "title": "Hamlet: The Agony of Moral Hesitation",
    "koreanTitle": "셰익스피어 햄릿: 존재와 행동의 고뇌",
    "level": "middle3_2",
    "levelLabel": "중3 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-2 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "셰익스피어 햄릿: 존재와 행동의 고뇌을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Hamlet contemplated whether to endure the slings and arrows of outrageous fortune.",
        "ko": "햄릿은 가혹한 운명의 화살을 묵묵히 견뎌야 하는지, 아니면 맞서 싸워야 하는지 고뇌했다."
      },
      {
        "num": 2,
        "en": "His intellectual paralysis exposes the profound gap between contemplation and decisive action.",
        "ko": "그의 지적인 망설임은 깊은 사색과 단호한 결단 사이의 깊은 간극을 드러낸다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "paralysis",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: paralysis"
      },
      {
        "word": "outrageous",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: outrageous"
      },
      {
        "word": "contemplate",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: contemplate"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_2-56-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> hamlet contemplated whether to endure the slings and arrows of outrageous fortune, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_2-56-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"His intellectual paralysis exposes the profound (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "gap between contemplation and decisive action"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [Hamlet: The Agony of Moral Hesitation] 지문에서 핵심적인 내용인 'gap between contemplation and decisive action'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_2-56-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '셰익스피어 햄릿: 존재와 행동의 고뇌'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "햄릿은 가혹한 운명의 화살을 묵묵히 견뎌야 하는지, 아니면 맞서 싸워야 하는지 고뇌했다이며, 그의 지적인 망설임은 깊은 사색과 단호한 결단 사이의 깊은 간극을 드러낸다이다.",
          "지문에 따르면 'Hamlet'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '셰익스피어 햄릿: 존재와 행동의 고뇌'에 관하여 '햄릿은 가혹한 운명의 화살을 묵묵히 견뎌야 하는지, 아니면 맞서 싸워야 하는지 고뇌했다'이자 '그의 지적인 망설임은 깊은 사색과 단호한 결단 사이의 깊은 간극을 드러낸다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_2-56-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on hamlet: the agony of moral hesitation",
          "② Moral lessons and character wisdom reflected in 'Hamlet: The Agony of Moral Hesitation'",
          "③ The rapid technological replacement of all natural phenomena related to hamlet: the agony of moral hesitation",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about hamlet: the agony of moral hesitation were all harmful"
        ],
        "correctIndex": 1,
        "explanation": "윗글은 '셰익스피어 햄릿: 존재와 행동의 고뇌'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Hamlet: The Agony of Moral Hesitation''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_2-57",
    "unitId": "unit-m3-2",
    "unitTitle": "중 3-2 내신 독해 마스터",
    "grade": "중3",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 3-2 내신 독해 마스터",
    "title": "Behavioral Economics and Sunk Cost Fallacy",
    "koreanTitle": "매몰비용의 오류(Sunk Cost)와 합리적 선택",
    "level": "middle3_2",
    "levelLabel": "중3 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-2 내신 독해 마스터)",
    "wordCount": 52,
    "estimatedTime": "2.5분",
    "summary": "매몰비용의 오류(Sunk Cost)와 합리적 선택을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Individuals frequently persevere in doomed investments solely because of irrecoverable expenditures.",
        "ko": "사람들은 회수할 수 없는 기회비용 때문에 가망 없는 투자에 집착하는 오류를 자주 범한다."
      },
      {
        "num": 2,
        "en": "Sound economic judgment demands evaluating prospective marginal benefits rather than past expenditures.",
        "ko": "합리적인 경제 판단은 과거의 지출이 아니라 미래의 한계 효용을 평가할 것을 요구한다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "expenditure",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: expenditure"
      },
      {
        "word": "prospective",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: prospective"
      },
      {
        "word": "irrecoverable",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: irrecoverable"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_2-57-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> individuals frequently persevere in doomed investments solely because of irrecoverable expenditures, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_2-57-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Sound economic judgment demands evaluating prospective (          빈칸          ).\"",
        "options": [
          "marginal benefits rather than past expenditures",
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 0,
        "explanation": "본문의 문맥상 [Behavioral Economics and Sunk Cost Fallacy] 지문에서 핵심적인 내용인 'marginal benefits rather than past expenditures'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_2-57-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '매몰비용의 오류(Sunk Cost)와 합리적 선택'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Individuals'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "사람들은 회수할 수 없는 기회비용 때문에 가망 없는 투자에 집착하는 오류를 자주 범한다이며, 합리적인 경제 판단은 과거의 지출이 아니라 미래의 한계 효용을 평가할 것을 요구한다이다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 2,
        "explanation": "본문에서 '매몰비용의 오류(Sunk Cost)와 합리적 선택'에 관하여 '사람들은 회수할 수 없는 기회비용 때문에 가망 없는 투자에 집착하는 오류를 자주 범한다'이자 '합리적인 경제 판단은 과거의 지출이 아니라 미래의 한계 효용을 평가할 것을 요구한다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_2-57-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on behavioral economics and sunk cost fallacy",
          "② The rapid technological replacement of all natural phenomena related to behavioral economics and sunk cost fallacy",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ A historical debate proving that traditional theories about behavioral economics and sunk cost fallacy were all harmful",
          "⑤ Exploring the fundamental mechanisms and importance of 매몰비용의 오류(Sunk Cost)와 합리적 선택"
        ],
        "correctIndex": 4,
        "explanation": "윗글은 '매몰비용의 오류(Sunk Cost)와 합리적 선택'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 매몰비용의 오류(Sunk Cost)와 합리적 선택'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_2-58",
    "unitId": "unit-m3-2",
    "unitTitle": "중 3-2 내신 독해 마스터",
    "grade": "중3",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 3-2 내신 독해 마스터",
    "title": "The Metamorphosis: Alienation in Modern Society",
    "koreanTitle": "카프카 변신: 현대 사회의 소외와 실존",
    "level": "middle3_2",
    "levelLabel": "중3 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-2 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "카프카 변신: 현대 사회의 소외와 실존을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Gregor Samsa awoke transformed into a monstrous insect, agonizing over missing his train.",
        "ko": "그레고르 잠자는 흉측한 벌레로 변해 깨어났지만, 출근 기차를 놓칠까 봐 전전긍긍했다."
      },
      {
        "num": 2,
        "en": "His family's gradual estrangement reveals the transactional nature of familial affection.",
        "ko": "가족들의 점진적인 냉대는 가족 간의 애정마저 경제적 효용에 좌우되는 비정함을 드러낸다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "estrangement",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: estrangement"
      },
      {
        "word": "transactional",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: transactional"
      },
      {
        "word": "monstrous",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: monstrous"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_2-58-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> gregor samsa awoke transformed into a monstrous insect, agonizing over missing his train, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_2-58-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"His family's gradual estrangement reveals (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "the transactional nature of familial affection",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 1,
        "explanation": "본문의 문맥상 [The Metamorphosis: Alienation in Modern Society] 지문에서 핵심적인 내용인 'the transactional nature of familial affection'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_2-58-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '카프카 변신: 현대 사회의 소외와 실존'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Gregor'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다.",
          "그레고르 잠자는 흉측한 벌레로 변해 깨어났지만, 출근 기차를 놓칠까 봐 전전긍긍했다이며, 가족들의 점진적인 냉대는 가족 간의 애정마저 경제적 효용에 좌우되는 비정함을 드러낸다이다."
        ],
        "correctIndex": 3,
        "explanation": "본문에서 '카프카 변신: 현대 사회의 소외와 실존'에 관하여 '그레고르 잠자는 흉측한 벌레로 변해 깨어났지만, 출근 기차를 놓칠까 봐 전전긍긍했다'이자 '가족들의 점진적인 냉대는 가족 간의 애정마저 경제적 효용에 좌우되는 비정함을 드러낸다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_2-58-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on the metamorphosis: alienation in modern society",
          "② The rapid technological replacement of all natural phenomena related to the metamorphosis: alienation in modern society",
          "③ Moral lessons and character wisdom reflected in 'The Metamorphosis: Alienation in Modern Society'",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about the metamorphosis: alienation in modern society were all harmful"
        ],
        "correctIndex": 2,
        "explanation": "윗글은 '카프카 변신: 현대 사회의 소외와 실존'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'The Metamorphosis: Alienation in Modern Society''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_2-59",
    "unitId": "unit-m3-2",
    "unitTitle": "중 3-2 내신 독해 마스터",
    "grade": "중3",
    "semester": "2학기",
    "category": "nonfiction",
    "categoryLabel": "중등 비문학 • 중 3-2 내신 독해 마스터",
    "title": "Atmospheric Carbon Sequestration and Geotherapy",
    "koreanTitle": "탄소 포집 기술과 지구 공학(Geotherapy)",
    "level": "middle3_2",
    "levelLabel": "중3 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-2 내신 독해 마스터)",
    "wordCount": 53,
    "estimatedTime": "2.5분",
    "summary": "탄소 포집 기술과 지구 공학(Geotherapy)을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Direct air capture facilities filter ambient air through chemical matrices to trap carbon dioxide.",
        "ko": "직접 공기 포집 시설은 대기 중의 공기를 화학 매트릭스로 걸러내어 이산화탄소를 포획한다."
      },
      {
        "num": 2,
        "en": "Integrating technical sequestration with reforestation constitutes humanity's strongest climate hedge.",
        "ko": "기술적 포집과 대규모 산림 복원을 융합하는 것은 인류의 가장 강력한 기후 방어선이 된다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "sequestration",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: sequestration"
      },
      {
        "word": "ambient",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: ambient"
      },
      {
        "word": "constitute",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: constitute"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_2-59-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> direct air capture facilities filter ambient air through chemical matrices to trap carbon dioxide, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_2-59-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Integrating technical sequestration with reforestation (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "constitutes humanity's strongest climate hedge",
          "relying strictly on outdated traditional dogmas"
        ],
        "correctIndex": 2,
        "explanation": "본문의 문맥상 [Atmospheric Carbon Sequestration and Geotherapy] 지문에서 핵심적인 내용인 'constitutes humanity's strongest climate hedge'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_2-59-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "직접 공기 포집 시설은 대기 중의 공기를 화학 매트릭스로 걸러내어 이산화탄소를 포획한다이며, 기술적 포집과 대규모 산림 복원을 융합하는 것은 인류의 가장 강력한 기후 방어선이 된다이다.",
          "본문에서는 '탄소 포집 기술과 지구 공학(Geotherapy)'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "지문에 따르면 'Direct'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 0,
        "explanation": "본문에서 '탄소 포집 기술과 지구 공학(Geotherapy)'에 관하여 '직접 공기 포집 시설은 대기 중의 공기를 화학 매트릭스로 걸러내어 이산화탄소를 포획한다'이자 '기술적 포집과 대규모 산림 복원을 융합하는 것은 인류의 가장 강력한 기후 방어선이 된다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_2-59-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Exploring the fundamental mechanisms and importance of 탄소 포집 기술과 지구 공학(Geotherapy)",
          "② Why modern scholars completely reject any scientific research on atmospheric carbon sequestration and geotherapy",
          "③ The rapid technological replacement of all natural phenomena related to atmospheric carbon sequestration and geotherapy",
          "④ How extreme environmental disasters can easily be solved without human effort",
          "⑤ A historical debate proving that traditional theories about atmospheric carbon sequestration and geotherapy were all harmful"
        ],
        "correctIndex": 0,
        "explanation": "윗글은 '탄소 포집 기술과 지구 공학(Geotherapy)'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Exploring the fundamental mechanisms and importance of 탄소 포집 기술과 지구 공학(Geotherapy)'입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  },
  {
    "id": "passage-M3_2-60",
    "unitId": "unit-m3-2",
    "unitTitle": "중 3-2 내신 독해 마스터",
    "grade": "중3",
    "semester": "2학기",
    "category": "fiction",
    "categoryLabel": "중등 문학 소설 • 중 3-2 내신 독해 마스터",
    "title": "Faust: The Insatiable Quest for Transcendence",
    "koreanTitle": "괴테 파우스트: 멈추지 않는 지적 갈망",
    "level": "middle3_2",
    "levelLabel": "중3 2학기",
    "source": "중등 내신 기출 & 교과서 수록 변형 (중 3-2 내신 독해 마스터)",
    "wordCount": 54,
    "estimatedTime": "2.5분",
    "summary": "괴테 파우스트: 멈추지 않는 지적 갈망을(를) 통해 중등 내신 핵심 어법과 문맥 독해를 집중 훈련하는 단원 지문입니다.",
    "sentences": [
      {
        "num": 1,
        "en": "Faust surrendered his soul to Mephistopheles in pursuit of infinite experiential knowledge.",
        "ko": "파우스트는 무한한 경험적 지식을 얻기 위해 메피스토펠레스에게 영혼을 넘겼다."
      },
      {
        "num": 2,
        "en": "Yet divine salvation redeemed him because he never ceased striving toward higher purpose.",
        "ko": "그러나 그가 더 높은 이상을 향해 분투하기를 결코 멈추지 않았기에 신성한 구원이 임했다."
      },
      {
        "num": 3,
        "en": "Scholars emphasize that understanding this principle is vital for academic excellence and critical thinking.",
        "ko": "학자들은 이 원리를 이해하는 것이 학문적 탁월함과 비판적 사고력을 갖추는 데 필수적이라고 강조한다."
      },
      {
        "num": 4,
        "en": "By reflecting on these profound insights, students develop a deeper appreciation for language and logic.",
        "ko": "이 깊이 있는 통찰을 성찰함으로써, 학생들은 언어와 논리에 대한 더 깊은 이해와 안목을 기르게 된다."
      }
    ],
    "keyVocabulary": [
      {
        "word": "transcendence",
        "partOfSpeech": "n.",
        "meaning": "핵심 개념 어휘: transcendence"
      },
      {
        "word": "salvation",
        "partOfSpeech": "adj.",
        "meaning": "문맥 필수 어휘: salvation"
      },
      {
        "word": "striving",
        "partOfSpeech": "v.",
        "meaning": "심화 독해 어휘: striving"
      }
    ],
    "questions": [
      {
        "id": "q-passage-M3_2-60-1",
        "type": "grammar",
        "typeLabel": "[중3 내신 어법] 관계사 및 수동태 킬러 문법 (3점)",
        "questionText": "다음 문장의 밑줄 친 부분 중, 어법상 가장 어색한 것은?",
        "passageWithUnderline": "Scholars have discovered ①<u>that</u> faust surrendered his soul to mephistopheles in pursuit of infinite experiential knowledge, ②<u>which</u> ③<u>is considered</u> vital, but ④<u>what</u> was revealed ⑤<u>remain</u> unexplained.",
        "options": [
          "① that (명사절 접속사 that)",
          "② which (계속적 용법의 관계대명사)",
          "③ is considered (수동태 표현)",
          "④ what (선행사를 포함한 관계대명사 what)",
          "⑤ remain (명사절 주어 'what was revealed'는 단수 취급하므로 remains로 수일치해야 함)"
        ],
        "correctIndex": 4,
        "explanation": "관계대명사 what이 이끄는 명사절 주어(what was revealed)는 일반적으로 단수 취급하므로, 동사 remain을 3인칭 단수형인 remains로 수정해야 합니다."
      },
      {
        "id": "q-passage-M3_2-60-2",
        "type": "blank",
        "typeLabel": "[중3 내신 빈칸] 문맥 추론 (3.5점)",
        "questionText": "윗글의 흐름으로 보아 빈칸에 들어갈 가장 적절한 어구는?\n\n\"Yet divine salvation redeemed him because (          빈칸          ).\"",
        "options": [
          "ignoring all biological and ecological evidence",
          "minimizing the long-term significance of this discovery",
          "relying strictly on outdated traditional dogmas",
          "he never ceased striving toward higher purpose"
        ],
        "correctIndex": 3,
        "explanation": "본문의 문맥상 [Faust: The Insatiable Quest for Transcendence] 지문에서 핵심적인 내용인 'he never ceased striving toward higher purpose'이 들어가야 전체 문장의 논리적 흐름이 가장 자연스럽게 완성됩니다."
      },
      {
        "id": "q-passage-M3_2-60-3",
        "type": "comprehension",
        "typeLabel": "[중3 내신 독해] 사실적 내용 일치 (3점)",
        "questionText": "윗글의 내용과 가장 일치하는 것은?",
        "options": [
          "본문에서는 '괴테 파우스트: 멈추지 않는 지적 갈망'의 핵심 내용이 현대 학문에서 전혀 중요하지 않다고 비판한다.",
          "파우스트는 무한한 경험적 지식을 얻기 위해 메피스토펠레스에게 영혼을 넘겼다이며, 그러나 그가 더 높은 이상을 향해 분투하기를 결코 멈추지 않았기에 신성한 구원이 임했다이다.",
          "지문에 따르면 'Faust'의 활동은 오직 인위적인 실험실 환경에서만 일어난다고 주장한다.",
          "글쓴이는 이 현상이 미래 환경이나 인간 삶에 어떠한 긍정적 영향도 끼치지 않는다고 경고한다."
        ],
        "correctIndex": 1,
        "explanation": "본문에서 '괴테 파우스트: 멈추지 않는 지적 갈망'에 관하여 '파우스트는 무한한 경험적 지식을 얻기 위해 메피스토펠레스에게 영혼을 넘겼다'이자 '그러나 그가 더 높은 이상을 향해 분투하기를 결코 멈추지 않았기에 신성한 구원이 임했다'라고 명확하게 설명하고 있으므로, 정답 선지가 내용과 가장 부합합니다."
      },
      {
        "id": "q-passage-M3_2-60-4",
        "type": "main_idea",
        "typeLabel": "[중3 내신 독해] 글의 주제·제목 추론 (3.5점)",
        "questionText": "다음 글의 주제(또는 제목)로 가장 적절한 것은?",
        "options": [
          "① Why modern scholars completely reject any scientific research on faust: the insatiable quest for transcendence",
          "② The rapid technological replacement of all natural phenomena related to faust: the insatiable quest for transcendence",
          "③ How extreme environmental disasters can easily be solved without human effort",
          "④ Moral lessons and character wisdom reflected in 'Faust: The Insatiable Quest for Transcendence'",
          "⑤ A historical debate proving that traditional theories about faust: the insatiable quest for transcendence were all harmful"
        ],
        "correctIndex": 3,
        "explanation": "윗글은 '괴테 파우스트: 멈추지 않는 지적 갈망'에 관한 내용으로, 지문 전체의 핵심 논지와 대의를 가장 포괄적이고 정확하게 표현한 것은 'Moral lessons and character wisdom reflected in 'Faust: The Insatiable Quest for Transcendence''입니다. 나머지 선지들은 본문과 정반대이거나 지나치게 지엽적/비약된 내용입니다."
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
    module.exports = { READING_UNITS, READING_PASSAGES };
}
