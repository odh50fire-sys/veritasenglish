/**
 * Veritas Non-Fiction e-Library Data (베리타스 비문학 원서 e-Book 도서관 데이터셋)
 * 12대 메이저 비문학 시리즈 및 스타터 도서 12권 풀 데이터셋
 * (어휘, 배경지식, 챕터 본문, 시각자료 삽화, 콘셉트맵, 5제 심층 퀴즈, 명문장 영작, 사진 출처)
 */

window.EBOOK_SERIES_DATA = [
  {
    "id": "history_ancient",
    "category": "history",
    "name": "Ancient World: 고대 문명과 제국의 여명",
    "shortName": "고대 문명",
    "badgeColor": "amber",
    "icon": "landmark",
    "description": "메소포타미아 수메르부터 로마 제국까지, 인류 최초의 문명과 제국의 형성사"
  },
  {
    "id": "history_medieval",
    "category": "history",
    "name": "Medieval Epoch: 중세와 격변의 세계사",
    "shortName": "중세 세계사",
    "badgeColor": "yellow",
    "icon": "shield",
    "description": "비잔틴, 이슬람 황금기, 십자군과 르네상스 태동에 이르는 문화적 격변기"
  },
  {
    "id": "history_revolutions",
    "category": "history",
    "name": "Age of Revolutions: 근대와 혁명의 시대",
    "shortName": "근대 혁명",
    "badgeColor": "orange",
    "icon": "flame",
    "description": "과학 혁명, 증기기관 산업 혁명, 시민 혁명이 빚어낸 근대 세계의 탄생"
  },
  {
    "id": "history_contemporary",
    "category": "history",
    "name": "Contemporary Currents: 현대와 냉전·세계화",
    "shortName": "현대·세계화",
    "badgeColor": "rose",
    "icon": "globe-2",
    "description": "2차 대전 이후 냉전 대립, 우주 경쟁, 베를린 장벽 붕괴와 디지털 정보화 사회"
  },
  {
    "id": "history_turning_points",
    "category": "history",
    "name": "Crucial Turning Points: 인류사의 대사건 (전쟁·재해·테러)",
    "shortName": "대사건·위기",
    "badgeColor": "red",
    "icon": "alert-triangle",
    "description": "폼페이 화산, 흑사병, 노르망디 상륙작전, 9·11 테러 등 역사를 뒤흔든 순간들"
  },
  {
    "id": "history_giants",
    "category": "history",
    "name": "Giants of History: 시대를 바꾼 거인들 (위인전)",
    "shortName": "역사적 거인",
    "badgeColor": "purple",
    "icon": "crown",
    "description": "레오나르도 다빈치, 마리 퀴리, 링컨, 처칠 등 역사에 거대한 족적을 남긴 위인 평전"
  },
  {
    "id": "society_economics",
    "category": "society",
    "name": "Modern Economics: 현대 경제와 글로벌 금융",
    "shortName": "경제·금융",
    "badgeColor": "emerald",
    "icon": "trending-up",
    "description": "화폐의 기원, 대공황, 자본주의 메커니즘과 암호화폐에 이르는 경제 교양"
  },
  {
    "id": "society_global_citizens",
    "category": "society",
    "name": "Global Citizens: 세계 시민과 인권·정치",
    "shortName": "인권·정치",
    "badgeColor": "blue",
    "icon": "users",
    "description": "세계인권선언, 난민 문제, 감시사회 알고리즘과 현대 민주주의의 위기"
  },
  {
    "id": "society_geography",
    "category": "society",
    "name": "Wonders of the Earth: 세계 지리와 경이로운 명소",
    "shortName": "지리·명소",
    "badgeColor": "teal",
    "icon": "compass",
    "description": "그랜드 캐니언, 아마존, 마추픽추, 세렝게티 등 대자연의 경관과 불가사의한 유적"
  },
  {
    "id": "society_culture",
    "category": "society",
    "name": "Cultural Tapestry: 세계의 문화와 인류 유산",
    "shortName": "문화·인류",
    "badgeColor": "violet",
    "icon": "palette",
    "description": "세계의 전통 축제, 향신료 실크로드, 소멸 위기 언어와 인류의 삶의 양식"
  },
  {
    "id": "science_cosmos",
    "category": "science",
    "name": "Cosmos & Physics: 우주와 천체물리학",
    "shortName": "우주·물리",
    "badgeColor": "indigo",
    "icon": "sparkles",
    "description": "빅뱅과 시공간의 왜곡, 블랙홀과 양자역학, 제임스 웹 우주망원경의 관측"
  },
  {
    "id": "science_life",
    "category": "science",
    "name": "Life & Frontiers: 생명과학과 미래 테크놀로지",
    "shortName": "생명·기술",
    "badgeColor": "cyan",
    "icon": "dna",
    "description": "DNA 이중나선, 뇌 신경망, 크리스퍼 유전자 가위와 미래 합성생물학"
  }
];

window.EBOOK_LIBRARY_DATA = [
  {
    "id": "book_ancient_colosseum",
    "seriesId": "history_ancient",
    "level": 2,
    "levelName": "Level 2 (Intermediate)",
    "title": "The Roman Colosseum: Architecture of Spectacle and Power",
    "subtitle": "검투사의 피와 황제의 권력이 교차하던 거대 원형극장의 비밀",
    "author": "Veritas Classical Antiquity Society",
    "estimatedMinutes": 5,
    "wordCount": 420,
    "coverImage": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-amber-950 via-stone-900 to-amber-900",
      "accentColor": "#f59e0b",
      "badgeClass": "bg-amber-500/20 text-amber-300 border-amber-500/40"
    },
    "primer": {
      "keyConcept": "플라비우스 원형극장과 로마 제국의 '빵과 서커스(Panem et Circenses)' 통치술",
      "context": "서기 80년 완공된 콜로세움은 단순한 오락 경기장이 아니었습니다. 제국 각지에서 끌고 온 맹수와 검투사 경기를 통해 황제의 절대 권력을 과시하고 민중의 불만을 잠재우던 거대한 정치 무대였습니다.",
      "bigQuestion": "거대한 오락과 스펙터클은 어떻게 시민들의 정치적 비판 의식을 무디게 만들었을까?"
    },
    "vocabulary": [
      {
        "word": "spectacle",
        "pos": "[명]",
        "meaning": "장관, 구경거리, 대규모 쇼",
        "contextSentence": "The imperial games were an elaborate spectacle designed to awe the public."
      },
      {
        "word": "travertine",
        "pos": "[명]",
        "meaning": "석회화 (로마 대표 건축 석재)",
        "contextSentence": "Quarried stone made of durable travertine formed the massive outer tiers."
      },
      {
        "word": "hypogeum",
        "pos": "[명]",
        "meaning": "지하 미로 구조 (경기장 하부 시설)",
        "contextSentence": "Beneath the arena floor lay the dark hypogeum where gladiators waited."
      },
      {
        "word": "inaugural",
        "pos": "[형]",
        "meaning": "개장의, 취임의, 시작의",
        "contextSentence": "During the inaugural games, hundred days of uninterrupted contests were held."
      },
      {
        "word": "evacuation",
        "pos": "[명]",
        "meaning": "대피, 퇴장",
        "contextSentence": "Ingenious vaulted staircases allowed seamless evacuation within minutes."
      },
      {
        "word": "patronage",
        "pos": "[명]",
        "meaning": "후원, 배려, 은혜",
        "contextSentence": "Citizens looked upon the emperor with gratitude for his lavish patronage."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "Engineering the Monumental Oval",
          "paragraphs": [
            {
              "num": 1,
              "en": "Rising proudly in the fertile basin between Rome’s historic hills, the Flavian Amphitheatre stood as an astonishing triumph of imperial Roman engineering. Begun under Emperor Vespasian and dedicated in 80 AD by his son Titus, the colossal monument could effortlessly accommodate over fifty thousand enthusiastic spectators.",
              "ko": "로마의 유서 깊은 언덕 사이 비옥한 분지에 당당히 솟아오른 플라비우스 원형극장은 로마 제국 공학의 경이로운 승리였습니다. 베스파시아누스 황제 시절 착공되어 서기 80년 아들 티투스 황제에 의해 봉헌된 이 거대한 기념물은 5만 명이 넘는 열광적인 관중을 손쉽게 수용할 수 있었습니다.",
              "chunks": [
                "Rising proudly / in the fertile basin between Rome’s historic hills, / the Flavian Amphitheatre stood / as an astonishing triumph of Roman engineering."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 1.1. The towering travertine limestone arches of the Roman Colosseum.",
              "alt": "Outer facade of the Roman Colosseum with Roman arches"
            },
            {
              "num": 2,
              "en": "To support such extraordinary weight, master Roman architects combined volcanic pozzolana concrete with arches carved from golden travertine stone. Eighty numbered ground-level arches, known as vomitoria, channeled crowds into designated tiers according to strict social hierarchy, enabling the entire arena to empty within twenty minutes.",
              "ko": "이처럼 엄청난 무게를 지탱하기 위해, 로마의 거장 건축가들은 화산재 콘크리트(포촐라나)와 황금빛 석회화로 조각된 아치를 결합했습니다. 보미토리움이라 불리는 80개의 번호 매겨진 지상 아치는 엄격한 사회적 위계에 따라 군중을 지정된 구역으로 안내하여 경기장 전체가 20분 만에 완전히 비워질 수 있었습니다.",
              "chunks": [
                "To support such extraordinary weight, / architects combined volcanic concrete / with arches carved from travertine stone."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "The Theater of Blood and Imperial Legitimacy",
          "paragraphs": [
            {
              "num": 3,
              "en": "Beneath the sand-dusted wooden arena floor hummed the hypogeum—a complex two-level subterranean network of stone tunnels, iron cages, and counterweight elevators. Stagehands used pulleys to thrust exotic lions, rhinos, and armored gladiators through concealed trapdoors directly into the blinding Mediterranean sunlight.",
              "ko": "모래가 뿌려진 목재 경기장 바닥 아래에는 석조 터널, 철제 우리, 도르래 승강기로 이루어진 복잡한 2층 지하 네트워크인 '히포게움'이 숨 가쁘게 돌아갔습니다. 무대 일꾼들은 도르래 장치를 사용하여 이국적인 사자, 코뿔소, 무장한 검투사들을 비밀 덧문을 통해 눈부신 지중해 햇살 속으로 순식간에 쏘아 올렸습니다.",
              "chunks": [
                "Beneath the sand-dusted wooden arena floor / hummed the hypogeum, / a complex subterranean network / of tunnels and elevators."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 1.2. The exposed subterranean hypogeum maze beneath the Colosseum floor.",
              "alt": "Subterranean hypogeum structures inside Colosseum"
            },
            {
              "num": 4,
              "en": "These mortal combats were far more than bloodlust. In an empire where popular voting had vanished, the games provided a rare forum where commoners could petition their ruler face-to-face. By distributing free wheat and funding breathtaking violence, Roman emperors reinforced civic loyalty and cemented their divine right to rule.",
              "ko": "이러한 치명적인 전투는 단순한 피의 갈증 이상이었습니다. 민중 투표가 사라진 제국에서, 이 경기들은 서민들이 통치자에게 직접 탄원할 수 있는 드문 소통의 장을 제공했습니다. 무료 밀을 배급하고 숨 막히는 폭력적 유희를 후원함으로써, 로마 황제들은 시민들의 충성심을 다지고 자신의 신성한 통치권을 공고히 했습니다.",
              "chunks": [
                "By distributing free wheat / and funding breathtaking violence, / Roman emperors reinforced civic loyalty / and cemented their right to rule."
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 1.1",
          "title": "Roman Colosseum Travertine Facade at Dusk",
          "source": "Unsplash Architectural Heritage Archive",
          "license": "Unsplash Free License (Commercial & Non-commercial)",
          "originalUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
          "description": "Outer arcades of the Flavian Amphitheatre photographed in central Rome."
        },
        {
          "figureNum": "Figure 1.2",
          "title": "Internal Hypogeum Maze of the Colosseum",
          "source": "Unsplash Classical Archaeology Collection",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1509356843151-3e7d96241e11",
          "description": "The underground masonry ruins where wild beasts and gladiators were staged."
        }
      ]
    },
    "conceptMap": {
      "type": "cause_and_effect",
      "title": "콜로세움의 3대 다차원적 기능과 사회적 메커니즘",
      "nodes": [
        {
          "label": "1. 건축 공학의 정점",
          "desc": "포촐라나 콘크리트 + 80개 분산 출구(Vomitoria)로 5만 명 20분 내 완벽 퇴장"
        },
        {
          "label": "2. 최첨단 무대 연출",
          "desc": "지하 히포게움(Hypogeum)과 도르래 승강기로 맹수·검투사 기습 등장 연출"
        },
        {
          "label": "3. 고도의 정치 통치술",
          "desc": "무료 빵과 스펙터클을 제공하여 시민 불만을 잠재우고 황제 권위 극대화"
        }
      ],
      "summary": "콜로세움은 당대 최첨단 공학 기술과 건축술이 집약된 건축물인 동시에, '빵과 서커스'를 통해 민중의 충성을 얻어낸 로마 제국의 가장 강력한 정치적 도구였습니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "What is the primary thesis of this reading regarding the Roman Colosseum?",
        "options": [
          "The Colosseum was built solely as an athletic track for Olympic chariot races.",
          "The Colosseum served as both an engineering triumph and a calculated political instrument of imperial control.",
          "The amphitheater caused immediate economic bankruptcy and the sudden downfall of Rome.",
          "The structure was designed primarily to shelter Roman citizens during barbarian invasions."
        ],
        "answer": 1,
        "explanation": "본문은 콜로세움이 5만 명을 수용하는 공학적 위업인 동시에, 황제가 민중을 통제하고 권력을 유지하기 위해 기획된 정교한 정치적 무대였음을 핵심 논지로 다룹니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "According to the passage, what architectural feature enabled 50,000 spectators to evacuate within twenty minutes?",
        "options": [
          "Suspension bridges connecting the upper rim to nearby residential hills",
          "Eighty numbered ground-level arched passages known as vomitoria",
          "Mechanical wooden escalators powered by underground river aqueducts",
          "A single colossal marble gate through which all citizens exited together"
        ],
        "answer": 1,
        "explanation": "본문 2문단에 'Eighty numbered ground-level arches, known as vomitoria... enabling the entire arena to empty within twenty minutes'라고 명시되어 있습니다."
      },
      {
        "id": "q3",
        "type": "inference",
        "question": "Why did Roman emperors continue to invest immense wealth in free games and grain distribution?",
        "options": [
          "To generate substantial ticket revenue from foreign travelers",
          "To replace private military contractors with gladiator mercenaries",
          "To quell civil unrest and establish perceived legitimacy in the absence of democratic voting",
          "To fulfill international trade agreements signed with North African allies"
        ],
        "answer": 2,
        "explanation": "본문 4문단에서 민주적 투표가 사라진 제국 체제에서 시민들에게 빵과 유혈극을 제공하여 불만을 잠재우고 권력의 정당성을 확보하려는 목적이었음을 추론할 수 있습니다."
      },
      {
        "id": "q4",
        "type": "vocabulary",
        "question": "In Paragraph 1, the word 'colossal' is closest in meaning to which of the following?",
        "options": [
          "Gigantic and awe-inspiring",
          "Delicate and fragile",
          "Unfinished and temporary",
          "Dangerous and forbidden"
        ],
        "answer": 0,
        "explanation": "'colossal'은 '거대한, 웅장한'의 뜻으로 'Gigantic and awe-inspiring'과 가장 가깝습니다."
      },
      {
        "id": "q5",
        "type": "author_tone",
        "question": "Which best describes the author's tone toward Roman engineering throughout Chapter 1?",
        "options": [
          "Scornful and dismissive",
          "Analytical and respectful of ancient ingenuity",
          "Indifferent and detached",
          "Baffled by architectural incompetence"
        ],
        "answer": 1,
        "explanation": "저자는 1장에서 로마 건축가들의 콘크리트 조합과 관중 분산 동선 설계를 'astonishing triumph', 'ingenious' 등의 표현을 통해 분석적이고 경의를 담은 어조로 서술하고 있습니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "The Colosseum was an astonishing triumph of Roman engineering and a lethal theater of imperial power.",
        "ko": "콜로세움은 로마 공학의 경이로운 승리이자 제국 권력의 치명적인 극장이었다.",
        "scrambleWords": [
          "The Colosseum",
          "was an astonishing",
          "triumph of",
          "Roman engineering",
          "and a lethal",
          "theater of",
          "imperial power."
        ]
      }
    ]
  },
  {
    "id": "book_medieval_byzantine",
    "seriesId": "history_medieval",
    "level": 2,
    "levelName": "Level 2 (Intermediate)",
    "title": "The Byzantine Bastion: Constantinople and the Theodosian Walls",
    "subtitle": "천 년 동안 동서양 문명의 방파제가 되어준 철옹성 콘스탄티노플",
    "author": "Veritas Medieval Studies Consortium",
    "estimatedMinutes": 5,
    "wordCount": 435,
    "coverImage": "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-yellow-950 via-stone-900 to-amber-950",
      "accentColor": "#eab308",
      "badgeClass": "bg-yellow-500/20 text-yellow-300 border-yellow-500/40"
    },
    "primer": {
      "keyConcept": "동로마 제국의 1,123년 생존 비결: 3중 방어 성벽과 그리스의 불(Greek Fire)",
      "context": "서로마 제국이 게르만족의 침입으로 허망하게 멸망한 후에도, 수도 콘스탄티노플은 훈족, 아랍 제국, 루스족의 맹공을 막아내며 천 년간 찬란한 기독교 문명을 지켜냈습니다.",
      "bigQuestion": "지리적 요충지에 자리한 도시는 어떻게 지형과 공학을 결합해 난공불락의 요새가 되었을까?"
    },
    "vocabulary": [
      {
        "word": "bastion",
        "pos": "[명]",
        "meaning": "수호자, 요새, 보루",
        "contextSentence": "Constantinople stood as a steadfast bastion protecting European culture."
      },
      {
        "word": "impregnable",
        "pos": "[형]",
        "meaning": "난공불락의, 깰 수 없는",
        "contextSentence": "The triple-tiered ramparts made the city practically impregnable."
      },
      {
        "word": "incendiary",
        "pos": "[형]",
        "meaning": "방화의, 불붙는",
        "contextSentence": "Byzantine ships hurled an incendiary liquid known as Greek Fire."
      },
      {
        "word": "concentric",
        "pos": "[형]",
        "meaning": "동심원의, 겹겹이 둘러싼",
        "contextSentence": "The concentric design of defensive walls trapped invaders in crossfire."
      },
      {
        "word": "siphon",
        "pos": "[명]",
        "meaning": "사이펀 (액체 분출 장치)",
        "contextSentence": "Bronze siphons sprayed burning petroleum onto enemy wooden hulls."
      },
      {
        "word": "crossroads",
        "pos": "[명]",
        "meaning": "교차로, 요충지",
        "contextSentence": "Located at the strategic crossroads of Europe and Asia, trade flourished."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "The Triple Shield of Theodosius",
          "paragraphs": [
            {
              "num": 1,
              "en": "Perched on a triangular peninsula bounded by the Golden Horn, the Bosporus, and the Sea of Marmara, Constantinople possessed the finest defensive geography in the medieval Mediterranean. Yet its supreme security rested upon the Theodosian Walls, built in the early fifth century under Emperor Theodosius II.",
              "ko": "골든 혼, 보스포루스 해협, 마르마라해로 둘러싸인 삼각형 반도에 자리 잡은 콘스탄티노플은 중세 지중해에서 가장 뛰어난 방어 지형을 지니고 있었습니다. 그러나 도시 최고의 안보는 5세기 초 테오도시우스 2세 황제 치하에 건설된 테오도시우스 성벽 덕분이었습니다.",
              "chunks": [
                "Perched on a triangular peninsula / bounded by strategic waterways, / Constantinople possessed / the finest defensive geography in Europe."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 2.1. The surviving stone ramparts and towers of the fifth-century Theodosian Walls in Istanbul.",
              "alt": "Ancient Theodosian Walls of Constantinople"
            },
            {
              "num": 2,
              "en": "Rather than relying on a single fortification, Byzantine engineers designed a concentric defense system spanning four miles. An attacking army first encountered a deep water-filled moat, followed by a low breastwork, an outer wall with sixty-foot towers, and finally an inner citadel wall towering forty feet tall with walls fifteen feet thick.",
              "ko": "단 하나의 성벽에 의존하는 대신, 비잔틴 기술자들은 4마일에 걸쳐 겹겹이 둘러싼 동심원 방어 시스템을 설계했습니다. 침략군은 먼저 깊은 물이 채워진 해자를 마주했고, 그 뒤로 낮은 흉벽, 60피트 높이의 탑이 있는 외벽, 그리고 마지막으로 두께 15피트, 높이 40피트에 달하는 내벽 요새와 맞닥뜨려야 했습니다.",
              "chunks": [
                "Byzantine engineers designed / a concentric defense system / spanning four miles of mainland."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "Greek Fire and the Maritime Defense",
          "paragraphs": [
            {
              "num": 3,
              "en": "Equally lethal was the empire’s state-guarded military secret: Greek Fire. Discovered by the Syrian refugee chemist Callinicus, this mysterious incendiary mixture ignited spontaneously upon contact with water and clung tenaciously to wooden warships, defying all medieval fire-fighting methods.",
              "ko": "성벽 못지않게 치명적이었던 것은 제국이 철저히 비밀로 유지한 국가 군사 기밀, 바로 '그리스의 불'이었습니다. 시리아 출신 피란민 화학자 칼리니쿠스가 발견한 이 신비로운 가연성 혼합물은 물에 닿아도 저절로 타올랐으며 목조 군함에 끈질기게 달라붙어 중세의 그 어떤 소화 방법도 무력화시켰습니다.",
              "chunks": [
                "Equally lethal was / the state-guarded military secret: / Greek Fire, / a mysterious incendiary mixture."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 2.2. The golden dome and minarets of Hagia Sophia, the heart of Byzantine cultural resilience.",
              "alt": "Hagia Sophia historic landmark in Istanbul"
            },
            {
              "num": 4,
              "en": "For over a thousand years, against Arab sieges in 674 and 717, as well as assaults by Bulgars and Crusaders, this combination of impenetrable stone and naval fire preserved Greek-Roman science, law, and philosophy until the dawn of the Italian Renaissance.",
              "ko": "674년과 717년의 아랍 포위 공격과 불가르족, 십자군의 맹공에 맞서 1,000년이 넘는 세월 동안 난공불락의 석조 성벽과 해상 화염의 결합은 이탈리아 르네상스가 움틀 때까지 그리스-로마의 과학, 법률, 철학 유산을 온전히 보존해 냈습니다.",
              "chunks": [
                "For over a thousand years, / this combination of stone and naval fire / preserved Greek-Roman science and philosophy."
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 2.1",
          "title": "Ruins of the Theodosian Land Walls",
          "source": "Wikimedia Commons Historical Architecture Archive",
          "license": "Creative Commons Attribution-ShareAlike 4.0",
          "originalUrl": "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b",
          "description": "Surviving limestone towers built by Emperor Theodosius II."
        },
        {
          "figureNum": "Figure 2.2",
          "title": "Hagia Sophia Basilica at Sunrise",
          "source": "Unsplash World Heritage Collection",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
          "description": "Architectural masterpiece of Byzantine Emperor Justinian I."
        }
      ]
    },
    "conceptMap": {
      "type": "cause_and_effect",
      "title": "콘스탄티노플의 천 년 수호 3대 핵심 기둥",
      "nodes": [
        {
          "label": "1. 3면이 바다인 반도 지형",
          "desc": "골든 혼과 마르마라해로 둘러싸여 육상 공격 통로를 단 4마일로 제한"
        },
        {
          "label": "2. 테오도시우스 3중 성벽",
          "desc": "깊은 해자 + 전방 흉벽 + 외벽(60피트 탑) + 내벽(두께 15피트)의 입체 방어"
        },
        {
          "label": "3. 비밀 병기 '그리스의 불'",
          "desc": "물 위에서도 타오르는 화학 화염으로 해상 포위 함대를 전멸시킴"
        }
      ],
      "summary": "자연 지형과 첨단 축성술, 그리고 비밀 화학 무기의 결합은 콘스탄티노플이 중세의 수많은 외침 속에서도 고대 문명의 지적 자산을 지켜낼 수 있었던 결정적 토대였습니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "What is the central subject analyzed in the reading text?",
        "options": [
          "The theological disputes of the early Christian church councils",
          "The technological and defensive systems that protected Constantinople for over a millennium",
          "The agricultural techniques of medieval peasant villages in Anatolia",
          "The maritime trade routes between Venice and the Black Sea ports"
        ],
        "answer": 1,
        "explanation": "글의 중심 내용은 콘스탄티노플이 테오도시우스 3중 성벽과 그리스의 불 등 공학적·군사적 방어 시스템을 통해 천 년 이상 문명을 지켜낸 역사적 원인 분석입니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "What unique physical property made Greek Fire terrifying to medieval navies?",
        "options": [
          "It generated dense poisonous smoke that froze sailors' eyes instantly",
          "It was an incendiary mixture that continued burning and ignited upon contact with water",
          "It dissolved iron anchor chains within seconds using sulfuric acid",
          "It caused sudden whirlpools in narrow oceanic channels"
        ],
        "answer": 1,
        "explanation": "3문단에 'ignited spontaneously upon contact with water and clung tenaciously to wooden warships'라고 설명되어 있습니다."
      },
      {
        "id": "q3",
        "type": "inference",
        "question": "What broader historical significance did Constantinople's long survival hold for Western Europe?",
        "options": [
          "It completely prevented the emergence of independent Italian city-states",
          "It preserved classical Greco-Roman manuscripts and knowledge until the dawn of the Renaissance",
          "It forced all European nations to adopt a standardized monetary currency",
          "It permanently eliminated the threat of maritime piracy in the Mediterranean"
        ],
        "answer": 1,
        "explanation": "4문단 마지막에 비잔틴의 저항이 고대 그리스-로마의 과학, 법률, 철학 유산을 르네상스 시기까지 보존해 주었음이 명시되어 있습니다."
      },
      {
        "id": "q4",
        "type": "vocabulary",
        "question": "The word 'impregnable' in Paragraph 2 is closest in meaning to:",
        "options": [
          "Vulnerable and easily infiltrated",
          "Incapable of being captured or broken",
          "Temporary and rapidly constructed",
          "Inexpensive and economical"
        ],
        "answer": 1,
        "explanation": "'impregnable'은 난공불락의, 함락될 수 없는의 뜻으로 'Incapable of being captured or broken'과 동의어입니다."
      },
      {
        "id": "q5",
        "type": "author_tone",
        "question": "How does the author view the Byzantine defensive architecture?",
        "options": [
          "As an admirable synthesis of geographic insight and military engineering",
          "As a wasteful expenditure of precious civic revenues",
          "As an uninspired copy of ancient Persian palatial designs",
          "As a fragile structure that collapsed at the slightest siege"
        ],
        "answer": 0,
        "explanation": "저자는 지리적 이점을 살린 3중 동심원 성벽과 공학적 성취를 'astonishing triumph', 'finest defensive geography' 등으로 높이 평가하고 있습니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "For over a thousand years, the stone ramparts of Constantinople shielded the intellectual treasures of the ancient world.",
        "ko": "천 년이 넘는 세월 동안, 콘스탄티노플의 석조 성벽은 고대 세계의 지적 보물들을 굳건히 지켜냈다.",
        "scrambleWords": [
          "For over a thousand years,",
          "the stone ramparts",
          "of Constantinople",
          "shielded the intellectual",
          "treasures of the",
          "ancient world."
        ]
      }
    ]
  },
  {
    "id": "book_revolutions_steam_engine",
    "seriesId": "history_revolutions",
    "level": 2,
    "levelName": "Level 2 (Intermediate)",
    "title": "The Steam Engine and the Industrial Metamorphosis",
    "subtitle": "증기기관의 고동소리가 바꾼 인류의 노동, 도시, 그리고 문명",
    "author": "Veritas Industrial Heritage Council",
    "estimatedMinutes": 5,
    "wordCount": 440,
    "coverImage": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-orange-950 via-stone-900 to-amber-950",
      "accentColor": "#f97316",
      "badgeClass": "bg-orange-500/20 text-orange-300 border-orange-500/40"
    },
    "primer": {
      "keyConcept": "근육과 바람의 시대에서 화석 연료와 기계 동력의 시대로",
      "context": "인류는 수만 년 동안 가축의 힘, 인간의 근육, 바람과 물의 흐름에 의존해 일했습니다. 18세기 제임스 와트의 개량 증기기관은 열에너지를 회전운동으로 바꾸어 공장제 대량생산과 철도 교통 혁명을 촉발했습니다.",
      "bigQuestion": "동력원의 근본적인 전환은 인간의 일상과 지구 환경을 어떻게 영구적으로 바꾸어 놓았을까?"
    },
    "vocabulary": [
      {
        "word": "metamorphosis",
        "pos": "[명]",
        "meaning": "탈바꿈, 대변혁",
        "contextSentence": "The coal-powered engine sparked an irreversible economic metamorphosis."
      },
      {
        "word": "condenser",
        "pos": "[명]",
        "meaning": "응축기 (증기를 물로 식히는 장치)",
        "contextSentence": "James Watt invented the separate condenser to prevent loss of heat."
      },
      {
        "word": "mechanization",
        "pos": "[명]",
        "meaning": "기계화",
        "contextSentence": "Rapid mechanization replaced traditional hand looms in cotton mills."
      },
      {
        "word": "locomotive",
        "pos": "[명]",
        "meaning": "기관차",
        "contextSentence": "The steam locomotive shrank travel times across vast continents."
      },
      {
        "word": "unprecedented",
        "pos": "[형]",
        "meaning": "전례 없는",
        "contextSentence": "Factories generated wealth at an unprecedented historical scale."
      },
      {
        "word": "urbanization",
        "pos": "[명]",
        "meaning": "도시화",
        "contextSentence": "Massive urbanization drew rural farm workers into crowded factory towns."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "Taming the Power of Expanding Steam",
          "paragraphs": [
            {
              "num": 1,
              "en": "Before the middle of the eighteenth century, all mechanical work performed by human civilization was bounded by natural limits: the muscles of draught animals, the variable flow of river mills, and the fickle whims of seasonal winds. Thomas Newcomen’s atmospheric pump was an early breakthrough, but it wasted immense coal heating and cooling a single cylinder.",
              "ko": "18세기 중반 이전까지 인류 문명이 수행한 모든 기계적 노동은 자연적 한계에 갇혀 있었습니다. 가축의 근육, 강의 불규칙한 물살, 계절풍의 변덕스러운 바람이 전부였습니다. 토머스 뉴커먼의 대기압 펌프가 초기 혁신을 열었지만, 단일 실린더를 계속 데우고 식히느라 막대한 석탄을 낭비했습니다.",
              "chunks": [
                "Before the eighteenth century, / human civilization was bounded / by the muscles of animals / and seasonal winds."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 3.1. Industrial gears, pistons, and steam machinery that ignited modern manufacturing.",
              "alt": "Heavy industrial steam machinery and gears"
            },
            {
              "num": 2,
              "en": "In 1765, Scottish instrument maker James Watt conceived a transformative breakthrough: the separate condenser. By keeping the main cylinder continuously hot while condensing steam in an auxiliary chamber, Watt reduced fuel consumption by seventy-five percent and transformed an inefficient mine pump into a universal rotary motor.",
              "ko": "1765년 스코틀랜드의 기구 제작자 제임스 와트는 혁명적인 돌파구를 고안해 냈습니다. 바로 '별도 응축기'였습니다. 보조 챔버에서 증기를 응축하는 동안 주 실린더를 지속적으로 뜨겁게 유지함으로써, 와트는 연료 소비를 75%나 줄였고 비효율적인 광산 배수 펌프를 만능 회전 모터로 탈바꿈시켰습니다.",
              "chunks": [
                "James Watt conceived / a transformative breakthrough: / the separate condenser, / saving seventy-five percent of fuel."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "Iron Rails and the Redefinition of Time",
          "paragraphs": [
            {
              "num": 3,
              "en": "The liberation of factories from riverside valleys enabled manufacturers to concentrate production inside emerging industrial cities like Manchester and Birmingham. Powered looms wove textiles day and night, producing affordable clothing for millions while fundamentally altering the rhythm of human labor according to factory clocks.",
              "ko": "강변 계곡으로부터 공장이 해방되자 제조업자들은 맨체스터와 버밍엄 같은 신흥 산업 도시 내에 생산을 집중시킬 수 있었습니다. 동력 직조기는 밤낮으로 직물을 짜내 수백만 명에게 저렴한 의류를 공급하는 동시에 공장 시계에 맞춰 인간 노동의 리듬을 근본적으로 바꾸어 놓았습니다.",
              "chunks": [
                "The liberation of factories / from riverside valleys / enabled manufacturers to concentrate / inside industrial cities."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1515260268569-9271009adfdb?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 3.2. A classic steam train billowing white steam across historical railway viaducts.",
              "alt": "Vintage steam locomotive on railway track"
            },
            {
              "num": 4,
              "en": "When George Stephenson adapted the steam engine into iron locomotives running on steel rails, geographical distance collapsed. Journeys that previously consumed weeks by horse carriage were accomplished in mere hours, unifying national markets and laying the physical foundations of our modern interconnected world.",
              "ko": "조지 스티븐슨이 증기기관을 개량해 강철 레일 위를 달리는 철도 기관차를 탄생시켰을 때, 지리적 거리는 마법처럼 단축되었습니다. 과거 마차로 수주일이 걸리던 여정이 불과 몇 시간 만에 주파되었고, 전국 단일 시장이 형성되며 현대의 초연결 세계를 향한 물리적 기초가 놓였습니다.",
              "chunks": [
                "Journeys that consumed weeks / were accomplished in mere hours, / unifying national markets."
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 3.1",
          "title": "Industrial Gears and Steam Mechanical Assemblage",
          "source": "Unsplash Industrial History Collection",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
          "description": "Heavy machinery components reminiscent of the Industrial Revolution."
        },
        {
          "figureNum": "Figure 3.2",
          "title": "Steam Locomotive on Rural Viaduct",
          "source": "Unsplash Rail Transport Archive",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1515260268569-9271009adfdb",
          "description": "Preserved steam locomotive engine operating on heritage railways."
        }
      ]
    },
    "conceptMap": {
      "type": "cause_and_effect",
      "title": "증기기관이 촉발한 3대 문명사적 파급 효과",
      "nodes": [
        {
          "label": "1. 제임스 와트의 별도 응축기",
          "desc": "열효율 4배 향상으로 광산 펌프에서 공장용 만능 회전 모터로 진화"
        },
        {
          "label": "2. 지리적 입지 해방 & 도시화",
          "desc": "강가 수차에 얽매이지 않고 석탄 산지 및 교통 중심지에 거대 공장 단지 형성"
        },
        {
          "label": "3. 증기 기관차와 시공간 압축",
          "desc": "스티븐슨의 철도 혁명으로 대륙 간 물류 수송 시간 수주일 ➔ 수시간으로 단축"
        }
      ],
      "summary": "증기기관은 자연의 힘에 속박되어 있던 인류를 기계 동력의 시대로 이끌며 대량 생산, 도시화, 철도 교통망이라는 현대 문명의 골격을 완성했습니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "Which statement best summarizes the central theme of the passage?",
        "options": [
          "Watt's steam engine liberated production from natural limits and reshaped human civilization and transportation.",
          "Steam engines were quickly abandoned due to the superior efficiency of traditional water wheels.",
          "The primary purpose of steam engines was to generate clean electricity for rural farms.",
          "Industrial progress was strictly confined to small artisanal craft workshops in Scotland."
        ],
        "answer": 0,
        "explanation": "글의 핵심은 제임스 와트의 증기기관 혁신이 생산을 자연의 한계에서 해방시키고 도시화와 철도 교통을 통해 문명 전체를 탈바꿈시켰다는 점입니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "What engineering innovation did James Watt introduce to drastically reduce coal consumption?",
        "options": [
          "Replacing iron pistons with lightweight aluminum gears",
          "A separate condenser to maintain continuous heat in the main cylinder",
          "Utilizing pressurized petroleum gas instead of water vapor",
          "Connecting windmills directly to locomotive driving wheels"
        ],
        "answer": 1,
        "explanation": "2문단에서 와트가 'separate condenser(별도 응축기)'를 고안하여 주 실린더를 뜨겁게 유지하고 연료를 75% 절감했다고 기술되어 있습니다."
      },
      {
        "id": "q3",
        "type": "inference",
        "question": "How did the development of steam-powered locomotives influence national commerce?",
        "options": [
          "It forced merchants to trade solely through coastal sailboats",
          "It integrated regional fragmented economies into cohesive national markets",
          "It caused manufacturing centers to relocate back to rural agricultural riverbanks",
          "It eliminated the necessity of standardization in clock times"
        ],
        "answer": 1,
        "explanation": "4문단에 'Journeys that previously consumed weeks... accomplished in hours, unifying national markets'라고 설명되어 있어 통합된 전국 시장 형성을 이끌었음을 알 수 있습니다."
      },
      {
        "id": "q4",
        "type": "vocabulary",
        "question": "The word 'unprecedented' in Paragraph 2/3 is closest in meaning to:",
        "options": [
          "Never having happened or existed before",
          "Strictly monitored by regulatory authorities",
          "Dangerous and harmful to public health",
          "Ancient and customary"
        ],
        "answer": 0,
        "explanation": "'unprecedented'는 '전례 없는, 유례없는'의 뜻으로 'Never having happened or existed before'가 정답입니다."
      },
      {
        "id": "q5",
        "type": "author_purpose",
        "question": "What is the author's primary purpose in writing Paragraph 3?",
        "options": [
          "To explain how steam power shifted the geographical location of factories and changed daily labor routines",
          "To complain about the poor quality of nineteenth-century woolen garments",
          "To praise rivers as the most reliable power source for textile mills",
          "To argue that factory work was entirely peaceful and stress-free"
        ],
        "answer": 0,
        "explanation": "3문단은 공장이 강변에서 도시로 이동하고, 노동자들의 삶이 공장 시계의 리듬으로 재편된 사회적 변화를 설명하는 데 목적이 있습니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "The steam engine transformed heat into mechanical motion, shattering the ancient physical limits of human labor.",
        "ko": "증기기관은 열을 기계적 운동으로 변환하여 인류 노동의 태고적 물리적 한계를 완전히 깨뜨렸다.",
        "scrambleWords": [
          "The steam engine",
          "transformed heat",
          "into mechanical motion,",
          "shattering the ancient",
          "physical limits of",
          "human labor."
        ]
      }
    ]
  },
  {
    "id": "book_contemporary_apollo11",
    "seriesId": "history_contemporary",
    "level": 3,
    "levelName": "Level 3 (Advanced)",
    "title": "One Giant Leap: The Apollo 11 Mission and the Space Race",
    "subtitle": "냉전의 대립 속에서 달 표면에 인류 최초의 발자국을 남긴 역사적 드라마",
    "author": "Veritas Aerospace History Institute",
    "estimatedMinutes": 5,
    "wordCount": 460,
    "coverImage": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-slate-950 via-slate-900 to-indigo-950",
      "accentColor": "#6366f1",
      "badgeClass": "bg-indigo-500/20 text-indigo-300 border-indigo-500/40"
    },
    "primer": {
      "keyConcept": "새턴 V(Saturn V) 로켓과 인류 최초의 외계 천체 유인 착륙",
      "context": "1960년대 미·소 냉전은 단순한 군비 경쟁을 넘어 우주라는 미지의 개척지를 둘러싼 체제 경쟁이었습니다. 1969년 7월 20일, 아폴로 11호의 착륙선 '이글'호가 달 표면에 안착하며 인류 역사의 신기원이 열렸습니다.",
      "bigQuestion": "국가 간의 극단적인 지정학적 경쟁은 어떻게 과학 기술의 기적적인 도약을 이끌어냈을까?"
    },
    "vocabulary": [
      {
        "word": "lunar",
        "pos": "[형]",
        "meaning": "달의",
        "contextSentence": "The lunar module descended cautiously toward the basalt plains."
      },
      {
        "word": "trajectory",
        "pos": "[명]",
        "meaning": "궤적, 궤도",
        "contextSentence": "Computers calculated the trans-lunar injection trajectory flawlessly."
      },
      {
        "word": "geopolitical",
        "pos": "[형]",
        "meaning": "지정학적인",
        "contextSentence": "The space race was driven by intense geopolitical rivalry."
      },
      {
        "word": "desolation",
        "pos": "[명]",
        "meaning": "황량함, 적막",
        "contextSentence": "Aldrin described the gray moonscape as 'magnificent desolation'."
      },
      {
        "word": "module",
        "pos": "[명]",
        "meaning": "우주선 분리 캡슐, 모듈",
        "contextSentence": "The service module provided oxygen and electrical power."
      },
      {
        "word": "quarantine",
        "pos": "[명]",
        "meaning": "격리, 검역",
        "contextSentence": "Astronauts underwent strict biological quarantine upon return."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "The Cold War Stakes and Saturn V",
          "paragraphs": [
            {
              "num": 1,
              "en": "On the sunlit morning of July 16, 1969, the towering 363-foot Saturn V rocket stood upon Launch Complex 39A at Kennedy Space Center, vibrating with 7.5 million pounds of thrust. Inside the command module Columbia sat astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins, carrying the technological aspirations of half a billion viewers worldwide.",
              "ko": "1969년 7월 16일 화창한 아침, 363피트 높이의 거대한 새턴 V 로켓이 케네디 우주센터 39A 발사대에 서서 750만 파운드의 추력으로 대지를 진동시켰습니다. 사령선 '컬럼비아' 안에는 우주비행사 닐 암스트롱, 버즈 올드린, 마이클 콜린스가 탑승해 전 세계 5억 시청자들의 기술적 염원을 품고 있었습니다.",
              "chunks": [
                "On the morning of July 16, 1969, / the 363-foot Saturn V rocket stood / vibrating with immense thrust."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 4.1. The pale blue Earth glowing above the dark expanse of cosmic space.",
              "alt": "Earth seen from outer space"
            },
            {
              "num": 2,
              "en": "The voyage was fundamentally rooted in geopolitical competition. After the Soviet Union stunned the Western world by orbiting Sputnik in 1957 and launching Yuri Gagarin into space in 1961, President John F. Kennedy committed the United States to landing a human on the Moon before the decade concluded.",
              "ko": "이 우주 비행은 근본적으로 지정학적 경쟁에 뿌리를 두고 있었습니다. 1957년 소비에트 연방이 스푸트니크호를 궤도에 올리고 1961년 유리 가가린을 우주로 쏘아 올리며 서방 세계에 충격을 주자, 존 F. 케네디 대통령은 10년이 지나기 전 미국이 인류를 달에 착륙시키겠다고 선언했습니다.",
              "chunks": [
                "The voyage was rooted / in geopolitical competition between superpowers."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "Magnificent Desolation on the Sea of Tranquility",
          "paragraphs": [
            {
              "num": 3,
              "en": "Four days later, as the lunar module Eagle hovered above boulders on the Sea of Tranquility, Armstrong assumed manual control with barely forty seconds of descent propellant remaining. At 20:17 UTC, his crackling radio voice announced: 'Houston, Tranquility Base here. The Eagle has landed.'",
              "ko": "나흘 뒤, 달 착륙선 '이글'호가 '고요의 바다' 암석 지대 위를 맴돌 때, 강하 연료가 불과 40초분밖에 남지 않은 상황에서 암스트롱은 수동 조종으로 전환했습니다. 협정 세계시 20시 17분, 지지직거리는 그의 무전 음성이 울려 퍼졌습니다. '휴스턴, 여기는 고요의 기지. 이글호가 착륙했다.'",
              "chunks": [
                "At 20:17 UTC, / his crackling radio voice announced: / 'Houston, Tranquility Base here. / The Eagle has landed.'"
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 4.2. Astronaut bootprint immortalized in fine powdery lunar regolith.",
              "alt": "Lunar bootprint in the moon dust"
            },
            {
              "num": 4,
              "en": "Stepping backward down the ladder into the powdery gray regolith, Armstrong uttered words etched into eternity: 'That's one small step for man, one giant leap for mankind.' The Apollo mission proved that through unified scientific determination, humanity could reach beyond its terrestrial cradle.",
              "ko": "사다리를 등지고 내려와 고운 잿빛 월면토를 밟으며, 암스트롱은 영원히 기록될 말을 남겼습니다. '이것은 한 인간에게는 작은 한 걸음이지만, 인류 전체에게는 위대한 도약입니다.' 아폴로 임무는 결집된 과학적 의지를 통해 인류가 자신의 지구라는 요람을 넘어설 수 있음을 증명했습니다.",
              "chunks": [
                "Armstrong uttered words etched into eternity: / 'That's one small step for man, / one giant leap for mankind.'"
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 4.1",
          "title": "Earth from Deep Space Horizon",
          "source": "NASA Space Flight Imagery Archive / Unsplash",
          "license": "Public Domain (NASA Guidelines)",
          "originalUrl": "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
          "description": "Satellite perspective of Earth illuminated in the cosmic void."
        },
        {
          "figureNum": "Figure 4.2",
          "title": "Apollo Astronaut Footprint on Lunar Surface",
          "source": "NASA Apollo Photographic Archive",
          "license": "Public Domain",
          "originalUrl": "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9",
          "description": "Tread mark preserved permanently in the vacuum of the Moon."
        }
      ]
    },
    "conceptMap": {
      "type": "timeline",
      "title": "아폴로 11호 달 착륙의 4대 역사적 마일스톤",
      "nodes": [
        {
          "label": "1. 1957~61 냉전 우주 경쟁",
          "desc": "소련의 스푸트니크호 및 가가린 우주비행에 대응해 케네디 대통령의 달 착륙 공약"
        },
        {
          "label": "2. 새턴 V 로켓 발사",
          "desc": "1969년 7월 16일 363피트 초대형 3단 로켓으로 지구 중력권 탈출"
        },
        {
          "label": "3. 고요의 바다 수동 착륙",
          "desc": "연료 40초 남은 극한 상황에서 암스트롱의 침착한 암석 지대 회피 및 안전 착륙"
        },
        {
          "label": "4. 인류의 위대한 도약",
          "desc": "월면 보행, 성조기 게양, 21.5kg의 월석 채취 및 지구 무사 귀환 달성"
        }
      ],
      "summary": "아폴로 11호는 냉전의 이념 대립에서 출발했으나, 과학 공학과 인류의 모험심이 결합하여 이룩한 역사상 가장 위대한 단일 성취였습니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "What is the primary focus of this non-fiction passage?",
        "options": [
          "The botanical experiments conducted inside the Apollo command module",
          "The geopolitical motivations and historic triumph of the Apollo 11 lunar landing",
          "The mining profits generated from selling lunar titanium to private corporations",
          "The technical disputes over designing spacesuit zippers in the 1970s"
        ],
        "answer": 1,
        "explanation": "글의 핵심은 냉전기 미·소 지정학적 경쟁 배경과 아폴로 11호 달 착륙의 역사적 성취를 종합적으로 조명하는 것입니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "Why did Neil Armstrong take manual control of the lunar module during final descent?",
        "options": [
          "The automated radar had shut down completely due to solar flare interference",
          "The computer was guiding the lander directly into a hazardous boulder field",
          "Buzz Aldrin insisted on photographing the lunar horizon from the cockpit window",
          "Houston ground control ordered an immediate abort maneuver"
        ],
        "answer": 1,
        "explanation": "3문단에 'hovered above boulders on the Sea of Tranquility, Armstrong assumed manual control'라고 설명되어 있어 바위 지대를 피하기 위해 수동 전환했음을 알 수 있습니다."
      },
      {
        "id": "q3",
        "type": "inference",
        "question": "What can be inferred regarding the speed of technological progress in the 1960s?",
        "options": [
          "Intense national competition accelerated engineering breakthroughs in less than a decade",
          "Space exploration remained stagnant until private venture capital emerged in 2000",
          "The Soviet Union completely ceased manufacturing rockets after 1961",
          "Public enthusiasm diminished immediately after Kennedy's congressional speech"
        ],
        "answer": 0,
        "explanation": "2문단에서 케네디의 1961년 선언 이후 10년이 채 되지 않아 1969년에 달 착륙을 성공시켰으므로 국가 간 경쟁이 초고속 기술 혁신을 이끌었음을 추론할 수 있습니다."
      },
      {
        "id": "q4",
        "type": "vocabulary",
        "question": "In Paragraph 4, the word 'terrestrial' is closest in meaning to:",
        "options": [
          "Relating to the Earth",
          "Unusually aggressive",
          "Completely automated",
          "Extremely luxurious"
        ],
        "answer": 0,
        "explanation": "'terrestrial'은 '지구의, 지상의' 뜻으로 'Relating to the Earth'와 일치합니다."
      },
      {
        "id": "q5",
        "type": "author_purpose",
        "question": "The phrase 'One giant leap for mankind' is emphasized in the text primarily to:",
        "options": [
          "Highlight the philosophical and universal human significance of reaching the Moon",
          "Mock the physical effort required to jump on low-gravity lunar soil",
          "Criticize the enormous financial budget allocated to NASA engineers",
          "Demonstrate that only American athletes could qualify for astronaut training"
        ],
        "answer": 0,
        "explanation": "암스트롱의 명언은 달 착륙이 일개 국가의 승리를 넘어 전 인류의 지적·물리적 도약이었음을 상징하기 위해 강조되었습니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "That's one small step for man, one giant leap for mankind.",
        "ko": "이것은 한 사람에게는 작은 한 걸음이지만, 인류에게는 위대한 도약이다.",
        "scrambleWords": [
          "That's one",
          "small step for man,",
          "one giant",
          "leap for mankind."
        ]
      }
    ]
  },
  {
    "id": "book_turning_vesuvius",
    "seriesId": "history_turning_points",
    "level": 2,
    "levelName": "Level 2 (Intermediate)",
    "title": "The Wrath of Vesuvius: The Doomsday of Pompeii",
    "subtitle": "서기 79년 화산재 아래 영원히 박제된 로마 도시 폼페이의 비극",
    "author": "Veritas Classical Disaster Archive",
    "estimatedMinutes": 5,
    "wordCount": 425,
    "coverImage": "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-red-950 via-stone-900 to-amber-950",
      "accentColor": "#ef4444",
      "badgeClass": "bg-red-500/20 text-red-300 border-red-500/40"
    },
    "primer": {
      "keyConcept": "화산 쇄설류(Pyroclastic Surge)와 화산재가 보존한 고대 로마의 생생한 타임캡슐",
      "context": "서기 79년 8월, 나폴리 만의 평화로운 휴양 도시 폼페이는 베수비오 화산의 대폭발로 단 하루 만에 수 미터 두께의 화산재 속에 파묻혔습니다. 그 비극은 역설적으로 2,000년 전 로마인들의 벽화, 빵, 일상을 그대로 보존했습니다.",
      "bigQuestion": "자연재해는 어떻게 한 문명의 찬란한 순간을 영원한 비극이자 사료로 남겼을까?"
    },
    "vocabulary": [
      {
        "word": "cataclysm",
        "pos": "[명]",
        "meaning": "대재앙, 대변동",
        "contextSentence": "The cataclysm obliterated entire seaside Roman communities."
      },
      {
        "word": "pyroclastic",
        "pos": "[형]",
        "meaning": "화산 쇄설성의",
        "contextSentence": "Superheated pyroclastic surges raced down the volcanic slopes."
      },
      {
        "word": "pumice",
        "pos": "[명]",
        "meaning": "경석, 부석 (구멍 뚫린 가벼운 화산석)",
        "contextSentence": "Pumice stones rained down upon the rooftops of Pompeii."
      },
      {
        "word": "fresco",
        "pos": "[명]",
        "meaning": "프레스코화 (벽화)",
        "contextSentence": "Brilliant colored frescoes remained preserved under volcanic dust."
      },
      {
        "word": "suffocate",
        "pos": "[동]",
        "meaning": "질식시키다",
        "contextSentence": "Toxic sulfur vapors suffocated residents trapped indoors."
      },
      {
        "word": "excavation",
        "pos": "[명]",
        "meaning": "발굴 작업",
        "contextSentence": "Modern archaeological excavation revealed intact Roman bakeries."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "The Awakening of the Sleeping Mountain",
          "paragraphs": [
            {
              "num": 1,
              "en": "On the morning of August 24, 79 AD, the prosperous resort town of Pompeii was bustling with trade, banquets, and political elections. Looming silently above the picturesque Bay of Naples, Mount Vesuvius had slept undisturbed for eight centuries, its gentle green slopes draped with olive groves and vineyards.",
              "ko": "서기 79년 8월 24일 아침, 번영하던 휴양 도시 폼페이는 상업과 연회, 정치 선거 열기로 분주했습니다. 그림 같은 나폴리 만 위로 고요히 솟아 있던 베수비오산은 8세기 동안 평온하게 잠들어 있었고, 완만한 푸른 비탈길은 올리브 숲과 포도밭으로 뒤덮여 있었습니다.",
              "chunks": [
                "On the morning of August 24, 79 AD, / Pompeii was bustling with trade and elections."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 5.1. The ruins of ancient Pompeii looking toward the ominous cone of Mount Vesuvius.",
              "alt": "Ruins of Pompeii with volcano in background"
            },
            {
              "num": 2,
              "en": "Shortly after midday, an ear-splitting detonation shattered the mountain peak. A towering black column of ash and pumice shot twenty miles into the stratosphere, resembling an umbrella pine tree described by eyewitness Pliny the Younger. Within hours, volcanic debris rained relentlessly, collapsing rooftops under crushing weight.",
              "ko": "정오가 막 지났을 무렵, 고막을 찢는 듯한 폭음이 산 정상을 산산조각 냈습니다. 목격자 소(小)플리니우스가 묘사했듯 우산소나무를 닮은 화산재와 부석의 거대한 검은 기둥이 성층권 20마일까지 치솟았습니다. 몇 시간 만에 엄청난 화산 파편이 쉼 없이 쏟아져 내리며 엄청난 무게로 지붕들을 무너뜨렸습니다.",
              "chunks": [
                "A towering column of ash / shot twenty miles into the stratosphere."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "The Pyroclastic Wave and Frozen Time",
          "paragraphs": [
            {
              "num": 3,
              "en": "During the early hours of the following morning, the suspended eruptive column collapsed under its own mass. A horrifying thermal avalanche—a pyroclastic surge traveling over one hundred miles per hour at temperatures exceeding 300 degrees Celsius—swept through the stone streets, ending all human life in a fraction of a second.",
              "ko": "다음 날 이른 새벽, 공중에 떠 있던 분출 기둥이 자체 무게를 이기지 못하고 무너져 내렸습니다. 시속 100마일이 넘는 속도와 섭씨 300도가 넘는 온도로 밀어닥친 끔찍한 열적 눈사태, 즉 화산 쇄설류가 돌로 포장된 거리를 덮쳤고, 찰나의 순간에 모든 인간의 생명을 앗아갔습니다.",
              "chunks": [
                "A pyroclastic surge / traveling over one hundred miles per hour / ended all human life in a second."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 5.2. Preserved Roman stone streets and deep cart ruts surviving beneath volcanic strata.",
              "alt": "Stone paved street in Pompeii archaeological park"
            },
            {
              "num": 4,
              "en": "Encased beneath six meters of pumice and ash, Pompeii was sealed from oxygen and biological decay for seventeen centuries. When rediscovered in 1748, archaeologists uncovered an astonishingly preserved world: carbonized loaves of bread, graffiti mocking politicians, and poignant plaster casts preserving the final defensive postures of victims.",
              "ko": "6미터 두께의 부석과 화산재 아래 갇힌 폼페이는 17세기 동안 산소와 생물학적 부패로부터 완벽히 차단되었습니다. 1748년 재발견되었을 때 고고학자들은 경이롭게 보존된 세계를 발굴했습니다. 탄화된 빵 덩어리, 정치인을 조롱하는 낙서, 희생자들의 마지막 방어 자세를 그대로 간직한 가슴 뭉클한 석고 본이 세상에 모습을 드러냈습니다.",
              "chunks": [
                "Encased beneath volcanic ash, / Pompeii was sealed from biological decay / for seventeen centuries."
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 5.1",
          "title": "Ruins of the Forum in Pompeii with Vesuvius",
          "source": "Unsplash Archaeological Parks Archive",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1555993539-1732b0258235",
          "description": "Remains of the ancient basilica in Pompeii facing the dormant volcano."
        },
        {
          "figureNum": "Figure 5.2",
          "title": "Paved Roman Street with Stepping Stones",
          "source": "Unsplash Mediterranean Heritage Collection",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1590496793929-36417d3117de",
          "description": "Original basalt stone street showing ancient wagon wheel grooves."
        }
      ]
    },
    "conceptMap": {
      "type": "cause_and_effect",
      "title": "베수비오 분화의 단계별 비극과 고고학적 보존",
      "nodes": [
        {
          "label": "1. 800년의 휴면과 방심",
          "desc": "화산의 위험성을 모른 채 비옥한 경사면에서 올리브와 포도 농경 영위"
        },
        {
          "label": "2. 플리니우스식 분출 (Plinian Column)",
          "desc": "성층권 20마일로 솟구친 화산재와 부석 비로 지붕 붕괴 및 피난로 차단"
        },
        {
          "label": "3. 300도 초고온 화산 쇄설류",
          "desc": "시속 100마일의 열풍과 독성 가스로 수초 만에 도시 생명체 완전 박제"
        }
      ],
      "summary": "자연의 파괴적 분노는 폼페이 시민들에게 비극적 최후를 안겼지만, 공기를 차단한 두터운 화산재는 2,000년 전 로마 제국의 일상 문화를 고스란히 인류에게 물려주었습니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "What is the central focus of the reading regarding Mount Vesuvius and Pompeii?",
        "options": [
          "How a sudden catastrophic eruption buried Pompeii and paradoxically preserved Roman daily life",
          "Why modern residents of Naples refuse to evacuate seismic hazard zones",
          "The botanical classification of umbrella pine trees found in Italian vineyards",
          "The construction of early stone aqueducts across Southern Italy"
        ],
        "answer": 0,
        "explanation": "글의 주제는 베수비오 화산 폭발의 파괴적 비극과, 그로 인해 역설적으로 2,000년 전 로마의 일상이 완벽하게 보존된 고고학적 가치를 다룹니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "According to Chapter 2, what phenomenon was primarily responsible for ending human life within seconds?",
        "options": [
          "A massive tsunami wave flooding the port harbor",
          "A superheated pyroclastic surge of gas and ash exceeding 300 degrees Celsius",
          "Severe sub-zero blizzards descending from the upper atmosphere",
          "An infectious airborne bacterium released from underground caverns"
        ],
        "answer": 1,
        "explanation": "3문단에 'A horrifying thermal avalanche—a pyroclastic surge... exceeding 300 degrees Celsius... ending all human life in a fraction of a second'라고 명시되어 있습니다."
      },
      {
        "id": "q3",
        "type": "inference",
        "question": "Why did organic materials like bread and wooden furniture survive for over 1,700 years?",
        "options": [
          "They were coated in artificial chemical preservatives by Roman priests",
          "The thick layer of volcanic ash sealed them completely from oxygen and bacterial decay",
          "The local groundwater turned all organic matter into solid granite stone",
          "Early treasure hunters constantly replaced deteriorating artifacts"
        ],
        "answer": 1,
        "explanation": "4문단에 'Encased beneath six meters of pumice and ash, Pompeii was sealed from oxygen and biological decay'라고 설명되어 있습니다."
      },
      {
        "id": "q4",
        "type": "vocabulary",
        "question": "The word 'poignant' in Paragraph 4 is closest in meaning to:",
        "options": [
          "Deeply touching and emotionally moving",
          "Extremely wealthy and ostentatious",
          "Unreliable and deceptive",
          "Rapid and instantaneous"
        ],
        "answer": 0,
        "explanation": "'poignant'는 '가슴 뭉클한, 애절한' 뜻으로 'Deeply touching and emotionally moving'과 동의어입니다."
      },
      {
        "id": "q5",
        "type": "author_attitude",
        "question": "Which phrase reflects the author's viewpoint on the archaeological rediscovery of Pompeii?",
        "options": [
          "A trivial discovery of little cultural consequence",
          "A tragic human catastrophe that became an extraordinary historical time capsule",
          "An irresponsible excavation that damaged geological research",
          "A fabricated myth with no physical evidence"
        ],
        "answer": 1,
        "explanation": "저자는 폼페이를 '비극적인 참사'인 동시에 '경이롭게 보존된 고대 세계의 타임캡슐'로 통찰하고 있습니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "Sealed beneath volcanic ash for centuries, Pompeii became a tragic yet immortal time capsule of the Roman world.",
        "ko": "수세기 동안 화산재 아래 봉인된 폼페이는 로마 세계의 비극적이면서도 불멸의 타임캡슐이 되었다.",
        "scrambleWords": [
          "Sealed beneath volcanic ash",
          "for centuries,",
          "Pompeii became a tragic",
          "yet immortal time capsule",
          "of the Roman world."
        ]
      }
    ]
  },
  {
    "id": "book_giants_davinci",
    "seriesId": "history_giants",
    "level": 3,
    "levelName": "Level 3 (Advanced)",
    "title": "Leonardo da Vinci: The Polymath of Unquenchable Curiosity",
    "subtitle": "예술과 과학, 해부학과 공학의 경계를 허문 르네상스 만능인의 뇌",
    "author": "Veritas Renaissance Biography Center",
    "estimatedMinutes": 5,
    "wordCount": 450,
    "coverImage": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-purple-950 via-stone-900 to-indigo-950",
      "accentColor": "#a855f7",
      "badgeClass": "bg-purple-500/20 text-purple-300 border-purple-500/40"
    },
    "primer": {
      "keyConcept": "스푸마토(Sfumato) 기법과 거울 문자 노트에 담긴 융합적 지성",
      "context": "1452년 피렌체 근교 빈치 마을에서 태어난 레오나르도는 화가에 머무르지 않았습니다. 그는 새의 비행, 인체 근육과 심장의 판막 구조, 유체역학과 전쟁 기계까지 스케치북에 기록하며 예술과 과학을 하나의 탐구로 엮어냈습니다.",
      "bigQuestion": "호기심을 특정 학문 분야에 가두지 않았을 때 인간의 통찰력은 어디까지 확장될 수 있을까?"
    },
    "vocabulary": [
      {
        "word": "polymath",
        "pos": "[명]",
        "meaning": "박학다식한 사람, 만능인",
        "contextSentence": "Da Vinci exemplified the ideal Renaissance polymath."
      },
      {
        "word": "sfumato",
        "pos": "[명]",
        "meaning": "스푸마토 (경계선을 부드럽게 흐리는 회화 기법)",
        "contextSentence": "He utilized delicate sfumato to render Mona Lisa's enigmatic smile."
      },
      {
        "word": "dissection",
        "pos": "[명]",
        "meaning": "해부, 절개",
        "contextSentence": "Meticulous human dissection informed his realistic anatomical drawings."
      },
      {
        "word": "unquenchable",
        "pos": "[형]",
        "meaning": "채울 수 없는, 억누를 수 없는",
        "contextSentence": "His unquenchable curiosity drove him to question everything."
      },
      {
        "word": "hydrodynamics",
        "pos": "[명]",
        "meaning": "유체역학",
        "contextSentence": "Leonardo observed swirling river currents to deduce laws of hydrodynamics."
      },
      {
        "word": "synthesis",
        "pos": "[명]",
        "meaning": "종합, 융합",
        "contextSentence": "His masterworks represent an unparalleled synthesis of art and science."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "The Eye as the Window to Truth",
          "paragraphs": [
            {
              "num": 1,
              "en": "Born in 1452 in the Tuscan hillside town of Vinci, Leonardo possessed a mind propelled by insatiable wonder. Unlike university-trained scholastic philosophers who debated abstract Latin texts, Leonardo called himself a 'disciple of experience' (discepolo de la sperientia), insisting that direct empirical observation was the sole foundation of true wisdom.",
              "ko": "1452년 토스카나 산골 마을 빈치에서 태어난 레오나르도는 주체할 수 없는 호기심에 이끌리는 정신을 지니고 있었습니다. 추상적인 라틴어 텍스트로 논쟁하던 대학 교육 출신의 스콜라 철학자들과 달리, 레오나르도는 스스로를 '경험의 제자'라 칭하며 직접적인 경험적 관찰만이 진정한 지혜의 유일한 토대라고 주장했습니다.",
              "chunks": [
                "Leonardo called himself / a 'disciple of experience', / insisting empirical observation / was the foundation of wisdom."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 6.1. Classical Renaissance fine art and portraiture exploring human anatomy and light.",
              "alt": "Renaissance art and painting"
            },
            {
              "num": 2,
              "en": "In his legendary mirror-script notebooks spanning thousands of pages, Leonardo made no distinction between artistic beauty and mechanical precision. Sketches of graceful angelic smiles were juxtaposed with hydraulic pumps, multi-barrel cannons, and flying ornithopters inspired by the wing kinetics of bats and swifts.",
              "ko": "수천 페이지에 달하는 그의 전설적인 거울 문자 노트에서 레오나르도는 예술적 아름다움과 기계적 정밀함 사이에 아무런 경계를 두지 않았습니다. 우아한 천사의 미소 스케치 옆에는 유압 펌프, 다연장 대포, 박쥐와 칼새의 날개 운동역학에서 영감을 얻은 오니솝터(날개짓 비행기)가 나란히 그려져 있었습니다.",
              "chunks": [
                "Sketches of angelic smiles / were juxtaposed with hydraulic pumps / and flying machines."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "Anatomy and the Enigma of the Soul",
          "paragraphs": [
            {
              "num": 3,
              "en": "To paint the human body with authentic vitality, Leonardo spent nights dissecting cadavers by candlelight in hospital mortuaries. He accurately mapped the four chambers of the human heart centuries ahead of medical science and traced the precise facial musculature responsible for conveying fleeting psychological emotions.",
              "ko": "살아 숨 쉬는 생명력으로 인체를 그리기 위해, 레오나르도는 병원 시체 안치소에서 촛불을 켠 채 밤을 지새우며 사체를 해부했습니다. 그는 근대의학보다 수세기 앞서 인간 심장의 4개 방 구조를 정확히 도해했고, 스쳐 지나가는 미묘한 심리적 감정을 전달하는 안면 근육의 정밀한 경로를 추적했습니다.",
              "chunks": [
                "Leonardo spent nights dissecting cadavers / to map the chambers of the human heart."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 6.2. Intricate geometric sketches and anatomical proportions reminiscent of the Vitruvian Man.",
              "alt": "Classical anatomical drawing sketch"
            },
            {
              "num": 4,
              "en": "This deep anatomical mastery culminated in the Mona Lisa, where layers of translucent oil glazes mimicked living human flesh. By viewing the universe as an interconnected living organism, Leonardo demonstrated that art and science are not rival domains, but complementary lenses revealing the poetry of creation.",
              "ko": "이러한 깊은 해부학적 숙달은 모나리자에서 절정에 달했는데, 수십 겹의 반투명 유화 글레이즈는 살아있는 인간의 피부 질감을 그대로 모사했습니다. 우주를 상호 연결된 살아있는 유기체로 바라봄으로써, 레오나르도는 예술과 과학이 대립하는 영역이 아니라 창조의 시적 아름다움을 밝혀내는 상호 보완적인 렌즈임을 증명했습니다.",
              "chunks": [
                "Leonardo demonstrated that / art and science are complementary lenses / revealing the poetry of creation."
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 6.1",
          "title": "Renaissance Artistic Masterpiece Gallery",
          "source": "Unsplash Classical Portraiture Archive",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119",
          "description": "Oil painting technique and sfumato atmospheric shading."
        },
        {
          "figureNum": "Figure 6.2",
          "title": "Anatomical Sketch of Human Musculature",
          "source": "Unsplash Historical Science Archive",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1576086213369-97a306d36557",
          "description": "Hand-drawn scientific illustration of skeletal and muscular proportions."
        }
      ]
    },
    "conceptMap": {
      "type": "cause_and_effect",
      "title": "레오나르도 다빈치의 융합적 사고 메커니즘",
      "nodes": [
        {
          "label": "1. 경험의 제자 (직접 관찰)",
          "desc": "교조적 텍스트 대신 자연 현상, 소용돌이치는 물, 새의 날개짓을 정밀 사생"
        },
        {
          "label": "2. 야간 사체 해부학 연구",
          "desc": "병원 안치소에서 인체 해부를 감행하여 심장 판막과 안면 미세 근육 규명"
        },
        {
          "label": "3. 예술과 과학의 궁극적 융합",
          "desc": "해부학과 광학 원리를 스푸마토 기법으로 승화시켜 불멸의 모나리자 완성"
        }
      ],
      "summary": "다빈치에게 과학은 예술의 정밀한 토대였고, 예술은 과학적 진리를 가시화하는 궁극의 수단이었습니다. 그는 두 영역의 경계를 허문 인류 최고의 융합 천재였습니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "What is the primary argument presented in this biography of Leonardo da Vinci?",
        "options": [
          "Leonardo was primarily a military commander who dabbled casually in landscape painting.",
          "Leonardo's greatness stemmed from his seamless integration of empirical science and exquisite art.",
          "Leonardo's notebook sketches were entirely plagiarized from ancient Roman medical textbooks.",
          "Leonardo believed that university scholastic degrees were essential for true innovation."
        ],
        "answer": 1,
        "explanation": "글의 핵심 논지는 다빈치의 위대함이 과학적 경험 관찰과 예술적 창작을 하나의 통합된 탐구로 결합한 데서 비롯되었다는 점입니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "How did Leonardo gather firsthand knowledge regarding human facial muscles and heart chambers?",
        "options": [
          "By interviewing veteran battlefield surgeons in Rome",
          "By conducting nocturnal dissections of human cadavers in mortuaries",
          "By translating Arabic veterinary manuscripts in the Florentine library",
          "By experimenting with mechanical wax mannequins"
        ],
        "answer": 1,
        "explanation": "3문단에 'Leonardo spent nights dissecting cadavers by candlelight in hospital mortuaries'라고 명시되어 있습니다."
      },
      {
        "id": "q3",
        "type": "inference",
        "question": "Why did Leonardo refer to himself as a 'disciple of experience'?",
        "options": [
          "To express his reliance on direct empirical observation rather than scholastic book learning",
          "To admit that he had failed all formal university entrance examinations",
          "To boast of his extensive international diplomatic travels across Europe",
          "To prove that artistic intuition is completely superior to mathematical calculation"
        ],
        "answer": 0,
        "explanation": "1문단에서 다빈치는 추상적 라틴어 문헌에만 매달리는 학자들과 달리 직접 보고 만지는 경험적 관찰을 최고의 스승으로 여겼음을 알 수 있습니다."
      },
      {
        "id": "q4",
        "type": "vocabulary",
        "question": "The word 'juxtaposed' in Paragraph 2 is closest in meaning to:",
        "options": [
          "Placed side by side for comparison or contrast",
          "Completely erased and painted over",
          "Categorized as inferior and discarded",
          "Sold secretly to overseas art collectors"
        ],
        "answer": 0,
        "explanation": "'juxtapose'는 '나란히 놓다, 병치하다'의 뜻으로 'Placed side by side for comparison or contrast'가 일치합니다."
      },
      {
        "id": "q5",
        "type": "author_conclusion",
        "question": "According to the final paragraph, how should modern thinkers view art and science?",
        "options": [
          "As fundamentally hostile and contradictory disciplines",
          "As complementary lenses that together reveal the deeper beauty of the universe",
          "As outdated historical relics destined to be replaced by machines",
          "As fields that only eccentric hermits should investigate"
        ],
        "answer": 1,
        "explanation": "마지막 문단에서 예술과 과학은 대립하는 것이 아니라 창조의 시적 아름다움을 드러내는 '상호 보완적인 렌즈'라고 결론짓고 있습니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "Art and science are not rival domains, but complementary lenses revealing the poetry of creation.",
        "ko": "예술과 과학은 대립하는 영역이 아니라, 창조의 시적 아름다움을 밝혀내는 상호 보완적인 렌즈이다.",
        "scrambleWords": [
          "Art and science",
          "are not rival domains,",
          "but complementary lenses",
          "revealing the poetry",
          "of creation."
        ]
      }
    ]
  },
  {
    "id": "book_econ_anatomy_money",
    "seriesId": "society_economics",
    "level": 2,
    "levelName": "Level 2 (Intermediate)",
    "title": "The Anatomy of Money: From Cowrie Shells to Digital Ledgers",
    "subtitle": "조개껍데기에서 금화, 지폐, 암호화폐 원장까지 이어지는 신뢰의 역사",
    "author": "Veritas Economic History Institute",
    "estimatedMinutes": 5,
    "wordCount": 430,
    "coverImage": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-emerald-950 via-stone-900 to-teal-950",
      "accentColor": "#10b981",
      "badgeClass": "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
    },
    "primer": {
      "keyConcept": "화폐의 본질은 물질이 아니라 인간 집단 간의 '상호 신뢰(Mutual Trust)'",
      "context": "인류는 왜 반짝이는 금속이나 종이 쪼가리, 심지어 컴퓨터 화면의 숫자를 믿고 자신의 소중한 노동과 재화를 맞바꿀까요? 화폐는 물물교환의 한계를 극복하기 위해 인류가 발명한 가장 강력하고 정교한 사회적 약속입니다.",
      "bigQuestion": "모두가 가치를 인정하는 '신뢰'가 무너졌을 때 화폐와 사회는 어떻게 붕괴하는가?"
    },
    "vocabulary": [
      {
        "word": "commodity",
        "pos": "[명]",
        "meaning": "상품, 원자재, 물품",
        "contextSentence": "In ancient markets, salt and barley served as durable commodity money."
      },
      {
        "word": "fiat",
        "pos": "[형]",
        "meaning": "명목의, 법정의 (정부 신용에 기초한)",
        "contextSentence": "Modern paper banknotes operate entirely as fiat currency."
      },
      {
        "word": "barter",
        "pos": "[명·동]",
        "meaning": "물물교환(하다)",
        "contextSentence": "The barter economy suffered from the double coincidence of wants."
      },
      {
        "word": "ledger",
        "pos": "[명]",
        "meaning": "원장, 회계 장부",
        "contextSentence": "Blockchain functions as a decentralized, tamper-proof digital ledger."
      },
      {
        "word": "devaluation",
        "pos": "[명]",
        "meaning": "가치 절하, 평가절하",
        "contextSentence": "Excessive printing of currency triggers catastrophic devaluation."
      },
      {
        "word": "liquidity",
        "pos": "[명]",
        "meaning": "유동성, 현금화 가능성",
        "contextSentence": "Gold provided high liquidity across international borders."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "The Evolution from Shells to Minted Metal",
          "paragraphs": [
            {
              "num": 1,
              "en": "At its philosophical core, money is not an object; it is an enduring network of collective trust. In ancient societies, direct barter required an improbable 'double coincidence of wants'—a shoemaker needing wheat had to find a farmer simultaneously seeking sandals. To overcome this friction, cultures adopted commodity currencies like cowrie shells, salt bars, and cocoa beans.",
              "ko": "철학적 본질에서 화폐는 물질이 아니라 지속적인 집단적 신뢰의 네트워크입니다. 고대 사회에서 직접 물물교환은 '욕망의 이중적 일치'라는 비현실적인 우연을 필요로 했습니다. 밀이 필요한 제화공은 샌들을 원하는 농부를 동시에 찾아야만 했습니다. 이러한 거래의 마찰을 극복하기 위해 인류는 조개껍데기, 소금 덩어리, 카카오 열매와 같은 상품 화폐를 채택했습니다.",
              "chunks": [
                "At its core, / money is not an object; / it is an enduring network / of collective trust."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 7.1. Ancient hammered coins evolving into modern digital monetary representations.",
              "alt": "Gold coins and digital currency concept"
            },
            {
              "num": 2,
              "en": "Around 600 BC, the kingdom of Lydia in modern Turkey revolutionized commerce by stamping standardized electrum coins with royal lion seals. Standard weight and purity guaranteed by state authority meant merchants no longer needed to weigh raw bullion at every transaction, sparking a rapid expansion of Mediterranean trade.",
              "ko": "기원전 600년경 현대 터키 영토의 리디아 왕국은 표준화된 호박금 주화에 사자 왕실 인장을 찍어 상업의 혁명을 일으켰습니다. 국가 권력이 보증하는 일정한 무게와 순도는 상인들이 거래마다 원자재 금속 덩어리의 무게를 잴 필요가 없음을 의미했고, 지중해 무역의 비약적인 팽창을 촉발했습니다.",
              "chunks": [
                "Standard weight guaranteed by the state / meant merchants no longer needed / to weigh raw bullion."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "Paper Promises and the Cryptographic Future",
          "paragraphs": [
            {
              "num": 3,
              "en": "Transporting heavy chests of metal over bandit-infested roads led Song Dynasty China in the eleventh century to issue the world's first paper money: the jiaozi. European goldsmiths followed suit centuries later, discovering that paper receipts for stored gold could circulate freely as cash, planting the seeds of modern fractional-reserve banking.",
              "ko": "도적이 들끓는 길 위로 무거운 금속 궤짝을 운반하는 위험 때문에, 11세기 중국 송나라는 세계 최초의 지폐인 '교자(jiaozi)'를 발행했습니다. 수세기 후 유럽의 금세공업자들도 이를 모방하여, 보관된 금의 종이 영수증이 현금처럼 자유롭게 유통될 수 있음을 발견했고 이는 현대 부분지급준비제도의 씨앗이 되었습니다.",
              "chunks": [
                "Song Dynasty China / issued the world's first paper money: / the jiaozi."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 7.2. Global stock exchange tickers and real-time electronic currency transactions.",
              "alt": "Financial stock market board and currency indicators"
            },
            {
              "num": 4,
              "en": "Today, over ninety percent of global money exists solely as digital ledger entries on centralized bank servers. The twenty-first century has introduced cryptocurrencies—decentralized networks powered by mathematical cryptography rather than government decree. Yet whether recorded in cowrie shells or distributed blockchains, the magic of money still depends on one unchanged ingredient: human consensus.",
              "ko": "오늘날 전 세계 화폐의 90% 이상은 중앙은행 서버의 디지털 원장 항목으로만 존재합니다. 21세기는 정부의 명령 대신 수학적 암호화 기술로 구동되는 탈중앙화 네트워크인 암호화폐를 탄생시켰습니다. 그러나 조개껍데기에 기록되든 분산 블록체인에 기록되든, 화폐의 마법은 여전히 변하지 않는 단 하나의 요소, 즉 '인간의 합의'에 달려 있습니다.",
              "chunks": [
                "Whether recorded in shells or blockchains, / money depends on one ingredient: / human consensus."
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 7.1",
          "title": "Gold Coins and Cryptocurrency Hybrid Still Life",
          "source": "Unsplash Financial History Collection",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1621416894569-0f39ed31d247",
          "description": "Artistic juxtaposition of ancient precious metal bullion and modern tokens."
        },
        {
          "figureNum": "Figure 7.2",
          "title": "Electronic Stock Exchange Display",
          "source": "Unsplash Global Markets Archive",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
          "description": "Real-time algorithmic trading screens displaying fluctuating exchange values."
        }
      ]
    },
    "conceptMap": {
      "type": "timeline",
      "title": "화폐의 4단계 진화 계보와 신뢰 메커니즘",
      "nodes": [
        {
          "label": "1. 상품 화폐 (조개·소금)",
          "desc": "자체적인 사용 가치(내재 가치)를 지닌 물품으로 물물교환의 마찰 해소"
        },
        {
          "label": "2. 주조 주화 (리디아 금화)",
          "desc": "기원전 600년 국가 권력이 무게와 순도를 보증하여 계량 비용 절감"
        },
        {
          "label": "3. 지폐 & 법정 화폐 (Fiat)",
          "desc": "송나라 교자에서 현대 중앙은행 지폐까지, 정부 신용에 기반한 종이 약속"
        },
        {
          "label": "4. 디지털 원장 & 암호화폐",
          "desc": "중앙 서버의 전자 잔고 및 수학적 분산 장부(블록체인)를 통한 신뢰 구현"
        }
      ],
      "summary": "화폐는 무거운 실물 금속에서 가벼운 종이로, 그리고 보이지 않는 디지털 데이터로 변천해 왔지만 그 근본은 언제나 '사회 구성원 간의 합의와 신뢰'였습니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "What is the primary thesis argued by the author about the nature of money?",
        "options": [
          "Money must be made of rare physical gold to maintain real purchasing power.",
          "Money is fundamentally a shared social system of collective trust rather than an intrinsic object.",
          "Barter systems were vastly superior to modern paper currencies.",
          "Paper money was invented primarily to promote the printing press industry in Europe."
        ],
        "answer": 1,
        "explanation": "글의 첫 문장과 결론에서 강조하듯 화폐는 물질 그 자체가 아니라 사회 구성원들이 가치를 인정하는 '집단적 상호 신뢰의 네트워크'라는 것이 핵심 주제입니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "According to the text, why was the invention of stamped coins in Lydia so significant?",
        "options": [
          "It allowed merchants to avoid manually weighing raw metal bullion during each transaction.",
          "It caused all agricultural trade to cease across the Mediterranean region.",
          "It made iron swords completely obsolete in classical armies.",
          "It restricted commerce exclusively to royal family members."
        ],
        "answer": 0,
        "explanation": "2문단에서 리디아 주화의 표준 순도와 무게 덕분에 'merchants no longer needed to weigh raw bullion at every transaction'이라고 명시되어 있습니다."
      },
      {
        "id": "q3",
        "type": "inference",
        "question": "What problem of direct barter did early commodity money solve?",
        "options": [
          "The high shipping tariffs imposed by pirate fleets",
          "The double coincidence of wants, where trading partners need exactly what the other offers",
          "The lack of standardized measuring rulers in open markets",
          "The sudden depletion of agricultural river water"
        ],
        "answer": 1,
        "explanation": "1문단에서 물물교환의 '욕망의 이중적 일치(double coincidence of wants)'라는 까다로운 조건을 상품 화폐가 해결해 주었음을 알 수 있습니다."
      },
      {
        "id": "q4",
        "type": "vocabulary",
        "question": "The word 'fiat' in the context of currency refers to money that:",
        "options": [
          "Is strictly made of pure silver or copper alloys",
          "Derives its legal value from government decree and public trust rather than backing by physical gold",
          "Can only be used during religious festivals",
          "Cannot be deposited into commercial bank vaults"
        ],
        "answer": 1,
        "explanation": "'fiat currency(명목화폐/법정화폐)'는 금·은과의 태환 보증 없이 정부의 법령과 대중의 신용에 의해 통용되는 화폐를 의미합니다."
      },
      {
        "id": "q5",
        "type": "author_conclusion",
        "question": "What common foundation unites ancient cowrie shells and contemporary digital cryptocurrencies?",
        "options": [
          "They both require physical mining in ocean trenches.",
          "Their transactional value depends entirely on human agreement and consensus.",
          "They are both strictly managed by European central bankers.",
          "They automatically lose all value when electricity is disconnected."
        ],
        "answer": 1,
        "explanation": "마지막 문단에 'whether recorded in cowrie shells or distributed blockchains, the magic of money still depends on... human consensus'라고 결론짓고 있습니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "Money is not an object; it is an enduring network of collective human trust.",
        "ko": "화폐는 물질이 아니다. 그것은 인류의 집단적인 상호 신뢰가 빚어낸 지속적인 네트워크이다.",
        "scrambleWords": [
          "Money is not",
          "an object; it is",
          "an enduring network",
          "of collective",
          "human trust."
        ]
      }
    ]
  },
  {
    "id": "book_society_human_rights",
    "seriesId": "society_global_citizens",
    "level": 3,
    "levelName": "Level 3 (Advanced)",
    "title": "The Universal Declaration of Human Rights: A Shield for Humanity",
    "subtitle": "전쟁의 폐허 위에서 모든 인간의 존엄을 선언한 국제적 약속",
    "author": "Veritas Global Justice Forum",
    "estimatedMinutes": 5,
    "wordCount": 445,
    "coverImage": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-blue-950 via-slate-900 to-indigo-950",
      "accentColor": "#3b82f6",
      "badgeClass": "bg-blue-500/20 text-blue-300 border-blue-500/40"
    },
    "primer": {
      "keyConcept": "1948년 유엔 세계인권선언(UDHR)과 불가양의 기본권(Inalienable Rights)",
      "context": "제2차 세계대전의 홀로코스트와 잔혹 행위를 목도한 인류는 '다시는 인간의 존엄성을 짓밟게 둘 수 없다'는 뼈아픈 반성을 했습니다. 엘리너 루스벨트가 이끈 위원회는 국경, 인종, 종교를 초월한 30개 조항의 인권선언을 완성했습니다.",
      "bigQuestion": "국가 주권(State Sovereignty)과 보편적 인권(Universal Human Rights)이 충돌할 때 국제사회는 어떻게 행동해야 하는가?"
    },
    "vocabulary": [
      {
        "word": "inalienable",
        "pos": "[형]",
        "meaning": "빼앗을 수 없는, 양도할 수 없는",
        "contextSentence": "All human beings are born with inalienable rights to dignity."
      },
      {
        "word": "sovereignty",
        "pos": "[명]",
        "meaning": "주권, 통치권",
        "contextSentence": "Tyrants often weaponize state sovereignty to deflect human rights criticism."
      },
      {
        "word": "atrocity",
        "pos": "[명]",
        "meaning": "잔혹 행위, 만행",
        "contextSentence": "The atrocities of World War II shocked the conscience of humankind."
      },
      {
        "word": "consensus",
        "pos": "[명]",
        "meaning": "합의, 일치된 의견",
        "contextSentence": "Drafting the declaration required fragile ideological consensus."
      },
      {
        "word": "discrimination",
        "pos": "[명]",
        "meaning": "차별",
        "contextSentence": "Article 2 forbids discrimination based on race, sex, or nationality."
      },
      {
        "word": "tribunal",
        "pos": "[명]",
        "meaning": "재판소, 특별 법정",
        "contextSentence": "International tribunals prosecute leaders guilty of war crimes."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "Born from the Ashes of Total War",
          "paragraphs": [
            {
              "num": 1,
              "en": "In the catastrophic aftermath of the Second World War, the global community stared into an abyss of unprecedented moral ruin. The horrors of the Holocaust, the devastation of atomic bombings, and the displacement of tens of millions of refugees shattered the complacent belief that sovereign governments could be trusted unconditionally with the lives of their subjects.",
              "ko": "제2차 세계대전의 파멸적인 후폭풍 속에서 국제사회는 전례 없는 도덕적 파탄의 심연을 마주했습니다. 홀로코스트의 공포, 원자폭탄의 참상, 수천만 피란민의 발생은 주권 국가가 자국민의 생명을 무조건적으로 책임질 것이라는 안일한 믿음을 산산조각 냈습니다.",
              "chunks": [
                "In the aftermath of the Second World War, / the global community stared / into an abyss of moral ruin."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 8.1. The United Nations General Assembly hall in New York, where global human rights resolutions are debated.",
              "alt": "United Nations General Assembly interior hall"
            },
            {
              "num": 2,
              "en": "Convening in 1946 under the resolute chairmanship of former US First Lady Eleanor Roosevelt, a diverse drafting committee composed of scholars and diplomats from China, Lebanon, France, and Chile worked across ideological chasms. They sought to forge a common moral horizon that transcended specific cultural dogmas and national boundaries.",
              "ko": "1946년 전 미국 영부인 엘리너 루스벨트의 확고한 의장 지휘 아래 소집된 중국, 레바논, 프랑스, 칠레 출신의 학자와 외교관들로 구성된 초안 위원회는 이념적 간극을 넘어 작업에 착수했습니다. 그들은 특정 문화적 교리와 국경을 초월하는 공통의 도덕적 지평을 구축하고자 노력했습니다.",
              "chunks": [
                "Under the chairmanship of Eleanor Roosevelt, / a diverse drafting committee worked / across ideological chasms."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "Thirty Articles of Universal Dignity",
          "paragraphs": [
            {
              "num": 3,
              "en": "On December 10, 1948, in Paris, the United Nations General Assembly adopted the Universal Declaration of Human Rights without a single dissenting vote. Opening with the resonant proclamation that 'all human beings are born free and equal in dignity and rights,' the document established thirty foundational articles protecting freedom of speech, fair trial, asylum, and protection against torture.",
              "ko": "1948년 12월 10일 파리에서 유엔 총회는 단 한 표의 반대표도 없이 '세계인권선언'을 채택했습니다. '모든 인간은 태어날 때부터 자유로우며 존엄과 권리에 있어 평등하다'는 울림 있는 선언으로 시작된 이 문서는 표현의 자유, 공정한 재판, 망명권, 고문으로부터의 보호를 규정하는 30개의 기본 조항을 확립했습니다.",
              "chunks": [
                "On December 10, 1948, / the United Nations General Assembly adopted / the Universal Declaration of Human Rights."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 8.2. Scales of justice symbolizing international law, human dignity, and constitutional protections.",
              "alt": "Scales of justice symbol on wooden table"
            },
            {
              "num": 4,
              "en": "While the Declaration was not a legally binding treaty at its inception, its moral gravitas has permanently altered international jurisprudence. It inspired over seventy national constitutions and serves as the benchmark against which oppressive regimes are judged. The struggle for human rights remains ongoing, but the Declaration established that every individual possesses a dignity that no state can legitimately strip away.",
              "ko": "선언문은 채택 당시 법적 구속력을 지닌 조약은 아니었지만, 그 도덕적 무게감은 국제 법학을 영구적으로 바꾸어 놓았습니다. 70개 이상의 국가 헌법에 영감을 주었으며 독재 정권의 폭정을 심판하는 보편적 잣대 역할을 하고 있습니다. 인권을 향한 투쟁은 여전히 현재진행형이지만, 이 선언은 그 어떤 국가도 개인의 존엄성을 정당하게 박탈할 수 없음을 명백히 못 박았습니다.",
              "chunks": [
                "Every individual possesses a dignity / that no state can legitimately strip away."
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 8.1",
          "title": "United Nations General Assembly Hall",
          "source": "Unsplash Diplomatic Archives",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1541872703-74c5e44368f9",
          "description": "The historic assembly room where the Universal Declaration of Human Rights was deliberated."
        },
        {
          "figureNum": "Figure 8.2",
          "title": "Bronze Scales of Justice in Legal Chamber",
          "source": "Unsplash Legal Heritage Collection",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
          "description": "Universal legal iconography representing impartial fairness and fundamental human rights."
        }
      ]
    },
    "conceptMap": {
      "type": "cause_and_effect",
      "title": "세계인권선언(UDHR)의 탄생 배경과 현대적 의의",
      "nodes": [
        {
          "label": "1. 2차 대전 참화와 반성",
          "desc": "홀로코스트 등 국가 폭력에 맞서 인간의 존엄을 지킬 국제 규범의 절실함 대두"
        },
        {
          "label": "2. 엘리너 루스벨트와 다국적 초안",
          "desc": "동서양 문화와 다양한 철학적 배경을 아우르는 30개 기본 권리 합의 도출"
        },
        {
          "label": "3. 1948년 12월 10일 만장일치 채택",
          "desc": "70개국 이상 헌법의 토대가 되고 국제인권법의 불멸의 나침반으로 정착"
        }
      ],
      "summary": "세계인권선언은 전쟁의 잿더미 속에서 인류가 피로 쓴 약속이며, 어떤 국가 권력도 침해할 수 없는 개인의 천부적 존엄성을 천명한 인류 최고의 양심 선언입니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "What is the primary message conveyed in this historical overview of the UDHR?",
        "options": [
          "The Universal Declaration emerged from the trauma of WWII to establish inalienable dignity beyond national sovereignty.",
          "The declaration was primarily an economic pact aimed at regulating international trade tariffs.",
          "Human rights should be determined strictly by local regional military tribunals.",
          "Eleanor Roosevelt opposed the adoption of the declaration due to diplomatic disagreements."
        ],
        "answer": 0,
        "explanation": "글의 주제는 2차 대전의 참극을 겪은 인류가 국가 주권을 넘어 모든 인간의 빼앗길 수 없는 존엄성을 확립하기 위해 세계인권선언을 탄생시켰다는 점입니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "When and where was the Universal Declaration of Human Rights formally adopted?",
        "options": [
          "July 4, 1776, in Philadelphia",
          "December 10, 1948, in Paris",
          "October 24, 1945, in San Francisco",
          "November 9, 1989, in Berlin"
        ],
        "answer": 1,
        "explanation": "3문단 첫 문장에 'On December 10, 1948, in Paris, the United Nations General Assembly adopted...'라고 명시되어 있습니다."
      },
      {
        "id": "q3",
        "type": "inference",
        "question": "Although the Declaration was not initially a binding legal contract, what real-world impact did it produce?",
        "options": [
          "It resulted in the immediate dissolution of all sovereign standing armies.",
          "It served as a moral blueprint that influenced over seventy national constitutions and international courts.",
          "It banned all private commercial trade between European states.",
          "It was promptly forgotten until the 1990s."
        ],
        "answer": 1,
        "explanation": "4문단에 'inspired over seventy national constitutions and serves as the benchmark against which oppressive regimes are judged'라고 서술되어 있습니다."
      },
      {
        "id": "q4",
        "type": "vocabulary",
        "question": "The word 'inalienable' in the context of human rights means rights that:",
        "options": [
          "Cannot be taken away, revoked, or transferred",
          "Must be purchased through governmental taxation",
          "Are granted exclusively to certified legal attorneys",
          "Expire after fifty years of adult citizenship"
        ],
        "answer": 0,
        "explanation": "'inalienable'은 '빼앗을 수 없는, 양도할 수 없는' 뜻으로 'Cannot be taken away, revoked, or transferred'가 정답입니다."
      },
      {
        "id": "q5",
        "type": "author_attitude",
        "question": "The author's perspective toward the Universal Declaration of Human Rights is best described as:",
        "options": [
          "Profoundly appreciative of its moral milestone in human civilizational history",
          "Cynical regarding its complete lack of influence in modern geopolitics",
          "Hostile to international institutions intervening in sovereign border disputes",
          "Bored by bureaucratic diplomatic phrasing"
        ],
        "answer": 0,
        "explanation": "저자는 선언을 '인류를 위한 방패', '공통의 도덕적 지평', '어떤 국가도 박탈할 수 없는 존엄성' 등으로 묘사하며 깊은 경의와 긍정적 평가를 보내고 있습니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "All human beings are born free and equal in dignity and rights.",
        "ko": "모든 인간은 태어날 때부터 자유로우며, 존엄과 권리에 있어 평등하다.",
        "scrambleWords": [
          "All human beings",
          "are born free",
          "and equal",
          "in dignity and rights."
        ]
      }
    ]
  },
  {
    "id": "book_geography_grand_canyon",
    "seriesId": "society_geography",
    "level": 1,
    "levelName": "Level 1 (Foundation)",
    "title": "The Grand Canyon: Millions of Years Carved in Stone",
    "subtitle": "콜로라도강과 대자연이 20억 년의 지구 지층 위에 빚어낸 경이로운 파노라마",
    "author": "Veritas Geographic Exploration Society",
    "estimatedMinutes": 4,
    "wordCount": 380,
    "coverImage": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-teal-950 via-stone-900 to-amber-950",
      "accentColor": "#14b8a6",
      "badgeClass": "bg-teal-500/20 text-teal-300 border-teal-500/40"
    },
    "primer": {
      "keyConcept": "지질학적 융기(Tectonic Uplift)와 콜로라도 강의 하방 침식(Downcutting)",
      "context": "미국 애리조나주 북부에 펼쳐진 그랜드 캐니언은 길이 446km, 최대 깊이 1.8km에 달하는 지구상 가장 웅장한 협곡입니다. 붉은 절벽 단면에는 20억 년 전의 원생대 암석부터 고생대 해양 화석까지 지구의 연대기가 책장처럼 펼쳐져 있습니다.",
      "bigQuestion": "흐르는 물이라는 부드러운 힘은 어떻게 단단한 대륙 암반을 깎아 거대한 계곡을 만들었을까?"
    },
    "vocabulary": [
      {
        "word": "gorge",
        "pos": "[명]",
        "meaning": "협곡",
        "contextSentence": "The raging river carved a mile-deep gorge through solid rock."
      },
      {
        "word": "erosion",
        "pos": "[명]",
        "meaning": "침식 작용",
        "contextSentence": "Water and wind erosion sculpted stunning rock formations."
      },
      {
        "word": "strata",
        "pos": "[명]",
        "meaning": "지층, 단층",
        "contextSentence": "Colorful horizontal strata reveal billions of years of history."
      },
      {
        "word": "sedimentary",
        "pos": "[형]",
        "meaning": "퇴적의",
        "contextSentence": "Sedimentary limestone contains fossils of ancient sea creatures."
      },
      {
        "word": "plateau",
        "pos": "[명]",
        "meaning": "고원",
        "contextSentence": "The Colorado Plateau rose thousands of feet due to tectonic forces."
      },
      {
        "word": "panorama",
        "pos": "[명]",
        "meaning": "파노라마, 전경",
        "contextSentence": "From the canyon rim, visitors gaze at a breathtaking panorama."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "A Mile-Deep Window into Earth's History",
          "paragraphs": [
            {
              "num": 1,
              "en": "Stretching across 277 miles of northern Arizona, the Grand Canyon is one of the most sublime spectacles on our planet. Standing along its windswept rim, one looks down into a labyrinth of towering buttes, scarlet temples, and sheer cliffs plunging over a mile deep into the silent desert earth.",
              "ko": "애리조나주 북부 277마일에 걸쳐 뻗어 있는 그랜드 캐니언은 우리 행성에서 가장 숭고한 장관 중 하나입니다. 바람이 부는 협곡 가장자리에 서면 1마일 깊이의 고요한 사막 대지로 깎아지른 붉은 절벽, 솟아오른 뷰트, 미로 같은 협곡이 한눈에 내려다보입니다.",
              "chunks": [
                "Stretching across 277 miles of northern Arizona, / the Grand Canyon is / one of the most sublime spectacles / on our planet."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 9.1. Sunlight illuminating the vast multi-layered red rock cliffs of the Grand Canyon.",
              "alt": "Panoramic sunset over the Grand Canyon cliffs"
            },
            {
              "num": 2,
              "en": "What makes this natural cathedral truly extraordinary is the geological story exposed along its multicolored rock walls. Nearly forty distinct sedimentary rock layers resemble pages in a colossal stone book, spanning almost two billion years—nearly half the age of the Earth itself.",
              "ko": "이 자연의 성소를 진정 경이롭게 만드는 것은 다채로운 색상의 암벽을 따라 노출된 지질학적 이야기입니다. 40여 개의 뚜렷한 퇴적암 지층은 지구 나이의 거의 절반에 달하는 약 20억 년의 세월을 담아낸 거대한 돌 책의 페이지를 닮아 있습니다.",
              "chunks": [
                "Forty distinct rock layers / resemble pages in a colossal stone book, / spanning two billion years."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "The Relentless Power of Water and Uplift",
          "paragraphs": [
            {
              "num": 3,
              "en": "The creation of this marvel required a rare convergence of geological forces. Around seventy million years ago, tectonic collisions lifted the Colorado Plateau thousands of feet above sea level. This steep elevation increased the gradient and energetic cutting power of the Colorado River, turning it into a watery saw carrying millions of tons of abrasive sand and gravel.",
              "ko": "이 경이로운 지형이 만들어지기 위해서는 드문 지질학적 힘들의 만남이 필요했습니다. 약 7천만 년 전, 판 구조 충돌로 인해 콜로라도 고원이 해수면 수천 피트 위로 솟아올랐습니다. 이 가파른 고도 상승은 콜로라도강의 경사도와 침식력을 극대화하여 수백만 톤의 모래와 자갈을 실은 거대한 물 톱으로 탈바꿈시켰습니다.",
              "chunks": [
                "Tectonic collisions lifted the Colorado Plateau, / increasing the energetic cutting power / of the Colorado River."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 9.2. The winding emerald ribbon of the Colorado River cutting through towering canyon walls.",
              "alt": "Colorado River winding through canyon floor"
            },
            {
              "num": 4,
              "en": "Aided by tributary flash floods and winter freeze-thaw cycles that crack brittle cliff faces, the river sliced relentlessly through limestone, shale, and ancient metamorphic schist. Today, the Grand Canyon stands as humbling proof that patient water, given millions of years, can carve through the hardest stone on Earth.",
              "ko": "지류의 돌발 홍수와 부서지기 쉬운 절벽 틈을 얼렸다 녹이는 겨울철 동결-융해 작용의 도움을 받아, 강물은 석회암, 셰일, 고대 변성 편암을 쉼 없이 깎아냈습니다. 오늘날 그랜드 캐니언은 인내심 있는 물이 수백만 년의 시간을 만나면 지구상 가장 단단한 바위도 깎아낼 수 있음을 보여주는 경이로운 증거로 우뚝 서 있습니다.",
              "chunks": [
                "Patient water, given millions of years, / can carve through the hardest stone on Earth."
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 9.1",
          "title": "Grand Canyon South Rim Sunset Panorama",
          "source": "Unsplash National Parks Collection",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722",
          "description": "Golden hour glow revealing deep horizontal strata of the canyon rim."
        },
        {
          "figureNum": "Figure 9.2",
          "title": "Horseshoe Curve of Colorado River",
          "source": "Unsplash Landscape Photography Archive",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          "description": "Aerial view of river erosion sculpting deep red sandstone meanders."
        }
      ]
    },
    "conceptMap": {
      "type": "cause_and_effect",
      "title": "그랜드 캐니언을 탄생시킨 3단계 지질학적 메커니즘",
      "nodes": [
        {
          "label": "1. 20억 년의 해저 퇴적",
          "desc": "고대 바다와 사막 환경에서 석회암, 사암, 셰일 지층이 샌드위치처럼 차곡차곡 퇴적"
        },
        {
          "label": "2. 콜로라도 고원의 지각 융기",
          "desc": "판 구조 충돌로 인해 지층이 깨지지 않고 수천 피트 높은 고원으로 통째로 상승"
        },
        {
          "label": "3. 콜로라도 강의 하방 침식",
          "desc": "급경사를 흐르는 강물이 모래 자갈을 연마재 삼아 1마일 깊이의 암반을 수직 절삭"
        }
      ],
      "summary": "지층의 평탄한 융기와 물의 끈질긴 하방 침식이라는 두 가지 자연의 조건이 완벽히 맞아떨어졌기에 그랜드 캐니언이라는 지구 최고의 지질학 박물관이 완성되었습니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "What is the primary natural process explained in this passage?",
        "options": [
          "How the Colorado River and geological uplift carved the Grand Canyon over millions of years",
          "Why gold prospectors abandoned subterranean mine shafts in Arizona",
          "The atmospheric moisture patterns that cause seasonal monsoons in the Sahara Desert",
          "The volcanic eruptions that constructed the Hawaiian island chain"
        ],
        "answer": 0,
        "explanation": "글의 중심 내용은 판 구조적 고원 융기와 콜로라도 강의 끈질긴 침식 작용이 어떻게 20억 년 지층을 깎아 그랜드 캐니언을 빚어냈는지를 설명하는 것입니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "Approximately how much of Earth's total geological history is exposed in the canyon walls?",
        "options": [
          "Less than one percent",
          "Nearly two billion years, or almost half of Earth's age",
          "Exactly fifty thousand years",
          "Only the modern Holocene period"
        ],
        "answer": 1,
        "explanation": "2문단에 'Nearly forty distinct sedimentary rock layers... spanning almost two billion years—nearly half the age of the Earth itself'라고 명시되어 있습니다."
      },
      {
        "id": "q3",
        "type": "inference",
        "question": "Why did the uplift of the Colorado Plateau increase the river's erosion speed?",
        "options": [
          "It made the water boil due to subterranean geothermal magma chambers",
          "It created a steeper elevation gradient, significantly accelerating the water's flow and kinetic energy",
          "It completely dried up the river bed for centuries",
          "It transformed all aquatic plants into poisonous algae"
        ],
        "answer": 1,
        "explanation": "3문단에 'This steep elevation increased the gradient and energetic cutting power of the Colorado River'라고 서술되어 있어 고도가 높아짐에 따라 유속과 침식 에너지가 급증했음을 알 수 있습니다."
      },
      {
        "id": "q4",
        "type": "vocabulary",
        "question": "The word 'abrasive' in Paragraph 3 describes sand and gravel that:",
        "options": [
          "Scrapes and wears away rock surfaces through friction",
          "Dissolves instantly upon contact with moisture",
          "Glows brightly in dark subterranean caverns",
          "Acts as a biological fertilizer for canyon pine trees"
        ],
        "answer": 0,
        "explanation": "'abrasive'는 '마모시키는, 연마하는'의 뜻으로 강물이 모래 자갈을 이용해 암반을 갈아내듯 깎았음을 뜻합니다."
      },
      {
        "id": "q5",
        "type": "author_conclusion",
        "question": "What philosophical reflection does the author offer at the end of the text?",
        "options": [
          "Nature must be controlled and dammed by concrete engineers immediately.",
          "Patient water, given enough time, can triumph over the hardest obstacles on Earth.",
          "Desert landscapes are barren and devoid of any educational value.",
          "The canyon will likely disappear completely within the next five decades."
        ],
        "answer": 1,
        "explanation": "마지막 문단에서 'patient water, given millions of years, can carve through the hardest stone on Earth'라며 인내심 있는 부드러운 힘의 위대함을 강조합니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "Patient water, given millions of years, can carve through the hardest stone on Earth.",
        "ko": "인내심 있는 물은 수백만 년의 시간이 주어지면 지구상 가장 단단한 바위도 깎아낼 수 있다.",
        "scrambleWords": [
          "Patient water,",
          "given millions of years,",
          "can carve through",
          "the hardest stone",
          "on Earth."
        ]
      }
    ]
  },
  {
    "id": "book_culture_spice_routes",
    "seriesId": "society_culture",
    "level": 2,
    "levelName": "Level 2 (Intermediate)",
    "title": "The Culinary Silk Road: How Spices Shaped Global Civilization",
    "subtitle": "후추, 정향, 육두구 한 줌이 촉발한 대항해 시대와 세계 식문화의 융합",
    "author": "Veritas Global Culinary & Anthropology Center",
    "estimatedMinutes": 5,
    "wordCount": 420,
    "coverImage": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-violet-950 via-stone-900 to-amber-950",
      "accentColor": "#8b5cf6",
      "badgeClass": "bg-violet-500/20 text-violet-300 border-violet-500/40"
    },
    "primer": {
      "keyConcept": "향신료(Spices)가 촉발한 지정학적 탐험과 동서양 맛의 대융합",
      "context": "오늘날 주방 찬장에 흔히 놓여 있는 후추, 계피, 육두구는 중세 유럽에서 같은 무게의 금보다 비싸게 거래되던 귀중품이었습니다. 아랍 상인들의 무역 독점을 깨고 향신료의 원산지 인도와 몰루카 제도로 향하려는 열망이 바닷길을 열었습니다.",
      "bigQuestion": "인간의 미각을 자극하는 작은 식물 열매는 어떻게 세계 지도를 다시 그리게 만들었을까?"
    },
    "vocabulary": [
      {
        "word": "culinary",
        "pos": "[형]",
        "meaning": "요리의, 음식의",
        "contextSentence": "Exotic spices transformed European culinary traditions."
      },
      {
        "word": "fragrant",
        "pos": "[형]",
        "meaning": "향기로운",
        "contextSentence": "Fragrant sacks of cloves and cinnamon were loaded onto caravels."
      },
      {
        "word": "monopoly",
        "pos": "[명]",
        "meaning": "독점, 전매권",
        "contextSentence": "Venetian merchants held a lucrative monopoly over spice imports."
      },
      {
        "word": "preservative",
        "pos": "[명]",
        "meaning": "방부제, 보존제",
        "contextSentence": "Spices acted as natural preservatives before modern refrigeration."
      },
      {
        "word": "archipelago",
        "pos": "[명]",
        "meaning": "군도, 열도 (섬들의 무리)",
        "contextSentence": "European navies fought fiercely to control the Spice Archipelago."
      },
      {
        "word": "infusion",
        "pos": "[명]",
        "meaning": "주입, 불어넣음, 우려냄",
        "contextSentence": "The infusion of chili peppers revolutionized Asian cooking."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "Gold in Grains of Black Pepper",
          "paragraphs": [
            {
              "num": 1,
              "en": "Today, black pepper sits ubiquitously upon dining tables around the globe, an everyday staple taken completely for granted. Yet during the European Middle Ages, dried peppercorns harvested from the Malabar Coast of southern India were so extraordinarily prized that landlords accepted them as rent, and armies demanded them as ransom payments.",
              "ko": "오늘날 후추는 전 세계 식탁 위에 흔하게 놓여 있으며 누구나 당연하게 여기는 일상의 조미료입니다. 그러나 유럽 중세 시대에 인도 남부 말라바르 해안에서 수확된 말린 후추 열매는 너무나 귀해서 지주들이 임대료로 받았고, 군대가 몸값으로 요구할 정도였습니다.",
              "chunks": [
                "Today, black pepper sits upon tables / an everyday staple taken for granted, / but once was prized like gold."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 10.1. A vibrant marketplace display of aromatic turmeric, chili powders, and whole spices.",
              "alt": "Colorful spice market bowls"
            },
            {
              "num": 2,
              "en": "Spices served essential multiple functions in pre-modern life. In a world devoid of refrigeration, peppercorns, cloves, and nutmeg disguised the foul odor of spoiling meats, while their natural antimicrobial oils prevented bacterial proliferation. Moreover, displaying dishes scented with exotic cinnamon and saffron signaled peerless aristocratic wealth.",
              "ko": "향신료는 전근대 삶에서 필수적인 다중 기능을 수행했습니다. 냉장 시설이 전무하던 세계에서 후추, 정향, 육두구는 상해가는 고기의 불쾌한 냄새를 감추어 주었고, 천연 항균 에센셜 오일은 세균의 번식을 억제했습니다. 더욱이 이국적인 계피와 사프란 향을 풍기는 요리를 내놓는 것은 귀족의 독보적인 부를 과시하는 수단이었습니다.",
              "chunks": [
                "Spices disguised spoiling meats, / prevented bacterial proliferation, / and signaled aristocratic wealth."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "Maritime Fleets and the Columbian Exchange",
          "paragraphs": [
            {
              "num": 3,
              "en": "For centuries, the spice trade flowed along grueling overland routes across Central Asia and the Indian Ocean, heavily taxed by Arab middlemen and the Republic of Venice. Desperate to shatter this lucrative monopoly, Iberian monarchs funded daring maritime expeditions, launching Vasco da Gama around Africa to India and sending Columbus westward across the Atlantic.",
              "ko": "수세기 동안 향신료 무역은 아랍 중개 상인들과 베네치아 공화국의 막대한 통행세를 거치며 중앙아시아와 인도양을 잇는 고단한 육상 경로를 따라 흘렀습니다. 이 수익성 높은 독점을 깨기 위해 혈안이 된 이베리아 반도의 군주들은 대담한 해양 원정에 자금을 지원했고, 바스코 다가마를 아프리카를 돌아 인도로 보내고 콜럼버스를 대서양 너머 서쪽으로 파견했습니다.",
              "chunks": [
                "Desperate to shatter this monopoly, / monarchs funded maritime expeditions / launching the Age of Discovery."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 10.2. A wooden merchant caravel sailing across uncharted ocean trade winds.",
              "alt": "Wooden sailing vessel on the open ocean"
            },
            {
              "num": 4,
              "en": "The resulting Columbian Exchange reshaped global gastronomy forever. European traders brought American chili peppers to India, Thailand, and Korea, where they became foundational to kimchi, curry, and tom yum. What began as a quest for pepper grains evolved into the first truly global economic web, demonstrating that human appetite has always been an engine of world history.",
              "ko": "그 결과로 일어난 '콜럼버스의 교환'은 전 세계 음식 문화를 영원히 바꾸어 놓았습니다. 유럽 상인들은 아메리카 대륙의 고추를 인도, 태국, 한국으로 가져왔고, 고추는 김치, 카레, 똠얌꿍의 근본적인 식재료가 되었습니다. 후추 열매를 향한 열망에서 시작된 여정은 최초의 진정한 글로벌 경제망으로 발전하며, 인간의 미각이 언제나 세계사를 움직인 강력한 엔진이었음을 증명했습니다.",
              "chunks": [
                "What began as a quest for pepper / evolved into the first global economic web, / driven by human appetite."
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 10.1",
          "title": "Bazaar Spice Stalls in South Asia",
          "source": "Unsplash Food Heritage Archive",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
          "description": "Vibrant heaps of turmeric, star anise, cardamom, and ground chilies."
        },
        {
          "figureNum": "Figure 10.2",
          "title": "Historic Wooden Sailing Ship on Open Seas",
          "source": "Unsplash Maritime History Collection",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1509358271058-acd22cc93898",
          "description": "Reconstruction of a Renaissance exploration caravel harnessing trade winds."
        }
      ]
    },
    "conceptMap": {
      "type": "cause_and_effect",
      "title": "향신료 무역이 이끌어낸 3대 세계사적 대변혁",
      "nodes": [
        {
          "label": "1. 향신료의 다중 가치",
          "desc": "부패 방지(항균), 육류 잡내 제거, 귀족의 부 과시용 사치재로서 금값에 거래"
        },
        {
          "label": "2. 베네치아·아랍 독점 타파",
          "desc": "육상 실크로드의 높은 관세를 피하기 위해 포르투갈과 스페인의 대항해 개척"
        },
        {
          "label": "3. 식문화의 콜럼버스 교환",
          "desc": "아메리카 고추가 아시아로 유입되어 한국의 김치, 인도의 커리 등 현대 요리 탄생"
        }
      ],
      "summary": "향신료를 찾아 바다로 나선 인류의 모험은 동서양 대륙을 하나로 엮는 최초의 글로벌 무역망을 건설했고, 오늘날 우리가 즐기는 다채로운 글로벌 식탁을 빚어냈습니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "What is the central focus of this cultural history text?",
        "options": [
          "How the pursuit of valuable spices drove global exploration and transformed world cuisine",
          "The chemical molecular breakdown of black pepper active compounds",
          "The botanical life cycle of vanilla orchids in Madagascar greenhouses",
          "The decline of modern restaurants due to processed fast food"
        ],
        "answer": 0,
        "explanation": "글의 주제는 향신료를 차지하려는 욕망이 대항해 시대를 열고, 콜럼버스의 교환을 통해 전 세계 음식 문화를 혁신적으로 융합시켰다는 역사적 과정입니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "Why were spices essential in pre-modern European domestic kitchens?",
        "options": [
          "They were the only source of pure drinking water",
          "They acted as natural preservatives and masked the odor of spoiling meat in the absence of refrigeration",
          "They were legally required for building masonry fireplaces",
          "They prevented iron cooking pans from rusting"
        ],
        "answer": 1,
        "explanation": "2문단에 'In a world devoid of refrigeration, peppercorns... disguised the foul odor of spoiling meats, while their natural antimicrobial oils prevented bacterial proliferation'라고 설명되어 있습니다."
      },
      {
        "id": "q3",
        "type": "inference",
        "question": "What motivated Portuguese and Spanish monarchs to finance perilous ocean expeditions?",
        "options": [
          "To circumnavigate the globe strictly for astronomical research",
          "To bypass the expensive monopoly held by Arab middlemen and Venetian merchants on overland routes",
          "To escape severe earthquakes in Western Europe",
          "To search for undiscovered cold-climate wheat varieties"
        ],
        "answer": 1,
        "explanation": "3문단에서 아랍 중개상과 베네치아의 독점을 깨고 막대한 수익을 직접 확보하기 위해 바닷길 개척에 나섰음을 알 수 있습니다."
      },
      {
        "id": "q4",
        "type": "vocabulary",
        "question": "The word 'ubiquitously' in Paragraph 1 means:",
        "options": [
          "Appearing or found everywhere simultaneously",
          "Dangerously and unpredictably",
          "In extremely limited quantities",
          "Strictly under armed guard"
        ],
        "answer": 0,
        "explanation": "'ubiquitous'는 '어디에나 존재하는, 흔한'의 뜻으로 'Appearing or found everywhere simultaneously'와 일치합니다."
      },
      {
        "id": "q5",
        "type": "detail_fact",
        "question": "According to the passage, where did chili peppers originate before spreading to Korea and India?",
        "options": [
          "The Malabar Coast of Southern India",
          "The Americas, transported via the Columbian Exchange",
          "The northern mountains of Scandinavia",
          "The spice islands of Eastern Indonesia"
        ],
        "answer": 1,
        "explanation": "4문단에 'European traders brought American chili peppers to India, Thailand, and Korea'라고 명시되어 있습니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "What began as a quest for pepper grains evolved into the first truly global economic web.",
        "ko": "작은 후추 알갱이를 향한 탐구로 시작된 여정은 최초의 진정한 글로벌 경제망으로 발전했다.",
        "scrambleWords": [
          "What began as",
          "a quest for pepper grains",
          "evolved into the first",
          "truly global",
          "economic web."
        ]
      }
    ]
  },
  {
    "id": "book_cosmos_black_holes",
    "seriesId": "science_cosmos",
    "level": 3,
    "levelName": "Level 3 (Advanced)",
    "title": "Inside the Event Horizon: The Mystery of Supermassive Black Holes",
    "subtitle": "빛조차 탈출할 수 없는 시공간의 무덤, 우주에서 가장 극단적인 천체의 비밀",
    "author": "Veritas Astrophysical Research Group",
    "estimatedMinutes": 5,
    "wordCount": 460,
    "coverImage": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-indigo-950 via-slate-950 to-purple-950",
      "accentColor": "#6366f1",
      "badgeClass": "bg-indigo-500/20 text-indigo-300 border-indigo-500/40"
    },
    "primer": {
      "keyConcept": "사건의 지평선(Event Horizon)과 중력 시간 지연(Gravitational Time Dilation)",
      "context": "알베르트 아인슈타인의 일반상대성이론이 예측한 블랙홀은 질량이 무한대에 가까운 밀도로 압축되어 시공간을 극단적으로 왜곡시키는 천체입니다. 사건의 지평선을 넘어서면 우주의 최고 속도인 빛조차 영원히 빠져나올 수 없습니다.",
      "bigQuestion": "시간과 공간의 법칙이 붕괴하는 블랙홀의 특이점(Singularity) 너머에는 무엇이 존재할까?"
    },
    "vocabulary": [
      {
        "word": "singularity",
        "pos": "[명]",
        "meaning": "특이점 (밀도와 중력이 무한대가 되는 지점)",
        "contextSentence": "At the black hole's center lies a point of infinite density known as a singularity."
      },
      {
        "word": "horizon",
        "pos": "[명]",
        "meaning": "지평선, 경계 (사건의 지평선)",
        "contextSentence": "Nothing, not even light, can escape once crossing the event horizon."
      },
      {
        "word": "spaghettification",
        "pos": "[명]",
        "meaning": "스파게티화 (극단적 조석력으로 물체가 국수처럼 늘어나는 현상)",
        "contextSentence": "Extreme tidal forces cause an astronaut to undergo spaghettification."
      },
      {
        "word": "accretion",
        "pos": "[명]",
        "meaning": "강착 (중력으로 물질이 끌려 모여드는 현상)",
        "contextSentence": "Superheated plasma swirls furiously within the glowing accretion disk."
      },
      {
        "word": "relativity",
        "pos": "[명]",
        "meaning": "상대성이론",
        "contextSentence": "Einstein's general relativity accurately predicted the existence of black holes."
      },
      {
        "word": "interferometry",
        "pos": "[명]",
        "meaning": "간섭계 관측술",
        "contextSentence": "The Event Horizon Telescope used global radio interferometry."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "Where Gravity Crushes Spacetime",
          "paragraphs": [
            {
              "num": 1,
              "en": "In the vast theater of the cosmos, no object challenges our comprehension of reality more profoundly than a black hole. When a massive star twenty times the mass of our Sun exhausts its nuclear fuel, its core can no longer resist its own gravitational attraction. In a catastrophic fraction of a second, the core implodes, crushing stellar matter down to an infinitesimal point of infinite density: a gravitational singularity.",
              "ko": "광활한 우주의 무대에서 블랙홀만큼 우리의 현실 이해에 깊은 도전을 던지는 천체는 없습니다. 태양 질량의 20배가 넘는 거대한 별이 핵연료를 모두 소진하면, 그 중심핵은 더 이상 자신의 무시무시한 중력 수축을 견뎌낼 수 없습니다. 찰나의 순간에 중심핵은 안으로 붕괴하며 항성의 물질을 무한한 밀도를 지닌 극미의 한 점, 즉 '중력 특이점'으로 압축해 버립니다.",
              "chunks": [
                "In the vast cosmos, / no object challenges reality more / than a black hole, / crushing matter into a singularity."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 11.1. Artist rendering of an accretion disk swirling around the shadow of a supermassive black hole.",
              "alt": "Glowing accretion disk around black hole center"
            },
            {
              "num": 2,
              "en": "Surrounding this invisible abyss is the event horizon—the ultimate cosmic point of no return. Within this mathematical boundary, the escape velocity demanded to break free exceeds the universal speed limit of light (300,000 kilometers per second). Because not even photons can emerge, the interior remains forever veiled in absolute darkness.",
              "ko": "이 보이지 않는 심연을 둘러싸고 있는 것이 바로 '사건의 지평선', 즉 우주 궁극의 불가역적 경계선입니다. 이 수학적 경계 안쪽에서는 탈출에 필요한 속도가 우주의 최고 속도인 빛의 속도(초속 30만 킬로미터)를 초과합니다. 광자(빛)조차 빠져나올 수 없기 때문에, 그 내부는 영원히 완전한 암흑 속에 감추어져 있습니다.",
              "chunks": [
                "Within the event horizon, / the escape velocity exceeds the speed of light, / leaving the interior in darkness."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "Bending Time and Capturing the Shadow",
          "paragraphs": [
            {
              "num": 3,
              "en": "According to Einstein’s general theory of relativity, gravity is not an invisible pulling force, but the warping of spacetime caused by mass. Near an event horizon, this curvature is so intense that time itself dramatically slows down relative to distant observers—a phenomenon known as gravitational time dilation. To an outside watcher, an object falling into a black hole appears to slow and freeze forever at the threshold.",
              "ko": "아인슈타인의 일반상대성이론에 따르면, 중력은 눈에 보이지 않는 당기는 힘이 아니라 질량에 의해 시공간이 휘어지는 현상입니다. 사건의 지평선 근처에서 이 곡률은 너무나 극심해서 먼 관찰자에 비해 시간 자체가 극적으로 느려지는데, 이를 '중력 시간 지연'이라 부릅니다. 외부 관찰자에게는 블랙홀로 떨어지는 물체가 점점 느려지다 결국 경계선에 영원히 멈춰 선 것처럼 보입니다.",
              "chunks": [
                "Gravity is the warping of spacetime; / near an event horizon, / time itself dramatically slows down."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 11.2. Billions of distant galaxies and stellar nebulae captured across the deep cosmic web.",
              "alt": "Deep space galaxies and glowing nebulae"
            },
            {
              "num": 4,
              "en": "In April 2019, the international Event Horizon Telescope collaboration achieved the unthinkable: capturing the first direct visual image of the supermassive black hole at the center of galaxy M87, 55 million light-years away. By linking radio dishes across four continents, astronomers revealed a glowing golden ring of superheated plasma framing a dark central silhouette, confirming Einstein’s centurylong theoretical vision.",
              "ko": "2019년 4월, 국제 공동 연구진인 '사건지평선망원경(EHT)' 팀은 상상할 수 없었던 위업을 달성했습니다. 5,500만 광년 떨어진 M87 은하 중심의 초대질량 블랙홀의 사상 첫 직접 시각 이미지를 포착한 것입니다. 4개 대륙의 전파 망원경을 결합함으로써 천문학자들은 어두운 중심부 실루엣을 둘러싼 초고온 플라즈마의 빛나는 황금빛 고리를 드러냈고, 100년에 걸친 아인슈타인의 이론적 예측을 입증했습니다.",
              "chunks": [
                "In April 2019, / the Event Horizon Telescope captured / the first direct image of a black hole, / confirming Einstein's vision."
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 11.1",
          "title": "Superheated Accretion Disk Simulation",
          "source": "NASA Goddard Space Flight Center / Unsplash",
          "license": "Public Domain (NASA)",
          "originalUrl": "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86",
          "description": "Relativistic gravitational lensing simulation around a rotating Kerr black hole."
        },
        {
          "figureNum": "Figure 11.2",
          "title": "Hubble Ultra Deep Field Galaxies",
          "source": "NASA & ESA Space Telescope Science Institute",
          "license": "Public Domain",
          "originalUrl": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
          "description": "Deep space survey showing thousands of evolving galaxies in the early cosmos."
        }
      ]
    },
    "conceptMap": {
      "type": "cause_and_effect",
      "title": "블랙홀의 3대 구조적 핵심 특성과 상대론적 물리",
      "nodes": [
        {
          "label": "1. 중력 특이점 (Singularity)",
          "desc": "항성 붕괴로 모든 질량이 부피 0, 밀도 무한대의 극미한 한 점에 압축"
        },
        {
          "label": "2. 사건의 지평선 (Event Horizon)",
          "desc": "탈출 속도가 빛의 속도를 초과하여 어떤 정보나 입자도 영구 탈출 불가"
        },
        {
          "label": "3. 시공간 왜곡 & 시간 지연",
          "desc": "극단적 질량이 공간과 시간을 휘게 만들어 지평선 인근에서 시간의 흐름 정지"
        }
      ],
      "summary": "블랙홀은 빛조차 삼키는 우주의 무덤인 동시에, 일반상대성이론과 양자역학이 충돌하며 현대 물리학의 새로운 지평을 열어주는 가장 매혹적인 자연의 실험실입니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "What is the primary scientific subject explored in this text?",
        "options": [
          "The chemical composition of planetary atmospheres in our solar system",
          "The physics, structure, and groundbreaking visual confirmation of black holes",
          "The mining procedures for harvesting minerals from asteroids",
          "The manufacturing of optical glass lenses for amateur backyard telescopes"
        ],
        "answer": 1,
        "explanation": "글의 주제는 블랙홀의 탄생 원리, 사건의 지평선과 시공간 왜곡의 물리적 법칙, 그리고 EHT에 의한 사상 최초 직접 촬영 성공입니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "Why is it physically impossible for anything inside an event horizon to escape?",
        "options": [
          "The interior temperature freezes all atomic motion completely",
          "The escape velocity required exceeds the universal speed of light (300,000 km/s)",
          "Subatomic particles are converted instantly into pure oxygen gas",
          "Magnetic repulsion pushes all approaching matter backward"
        ],
        "answer": 1,
        "explanation": "2문단에 'the escape velocity demanded to break free exceeds the universal speed limit of light'라고 명시되어 있습니다."
      },
      {
        "id": "q3",
        "type": "inference",
        "question": "According to gravitational time dilation, what does a distant observer see as a clock falls toward a black hole?",
        "options": [
          "The clock ticks progressively faster until it explodes",
          "The clock appears to slow down continuously and virtually freeze at the event horizon",
          "The clock turns counterclockwise and reverses historical events",
          "The clock displays no change in its mechanical rhythm"
        ],
        "answer": 1,
        "explanation": "3문단에서 극단적인 시공간 곡률로 인해 외부 관찰자에게는 물체와 시간이 점점 느려지다 지평선 문턱에서 영원히 멈춰 선 것처럼 보인다고 설명합니다."
      },
      {
        "id": "q4",
        "type": "vocabulary",
        "question": "The word 'infinitesimal' in Paragraph 1 is closest in meaning to:",
        "options": [
          "Extremely, immeasurably small",
          "Brightly illuminated",
          "Easily visible to the naked human eye",
          "Unstable and chemically explosive"
        ],
        "answer": 0,
        "explanation": "'infinitesimal'은 '극미한, 무한소의' 뜻으로 'Extremely, immeasurably small'과 동의어입니다."
      },
      {
        "id": "q5",
        "type": "detail_fact",
        "question": "How did astronomers successfully capture the image of the M87 black hole in 2019?",
        "options": [
          "By flying a camera probe directly past Jupiter's magnetosphere",
          "By combining radio telescopes across four continents into a synchronized Earth-sized virtual aperture",
          "By using high-powered ultraviolet lasers fired from the International Space Station",
          "By relying on theoretical computer game graphics"
        ],
        "answer": 1,
        "explanation": "4문단에 'By linking radio dishes across four continents, astronomers revealed a glowing golden ring...'이라고 설명되어 있습니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "At the threshold of a black hole, time dramatically slows and space bends into an inescapable cosmic abyss.",
        "ko": "블랙홀의 문턱에서 시간은 극적으로 느려지고 공간은 탈출할 수 없는 우주의 심연으로 휘어진다.",
        "scrambleWords": [
          "At the threshold",
          "of a black hole,",
          "time dramatically slows",
          "and space bends into",
          "an inescapable cosmic abyss."
        ]
      }
    ]
  },
  {
    "id": "book_life_double_helix",
    "seriesId": "science_life",
    "level": 3,
    "levelName": "Level 3 (Advanced)",
    "title": "The Double Helix: The Discovery That Unlocked the Code of Life",
    "subtitle": "A-T, G-C 4개 염기의 나선 사다리가 밝혀낸 생명 복제의 신비",
    "author": "Veritas Molecular Biology Society",
    "estimatedMinutes": 5,
    "wordCount": 450,
    "coverImage": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
    "coverTheme": {
      "bgGradient": "from-cyan-950 via-slate-900 to-teal-950",
      "accentColor": "#06b6d4",
      "badgeClass": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40"
    },
    "primer": {
      "keyConcept": "DNA 이중나선(Double Helix) 구조와 상보적 염기쌍(Complementary Base Pairing)",
      "context": "1953년 영국 케임브리지 대학의 제임스 왓슨과 프랜시스 크릭, 그리고 로절린드 프랭클린의 X선 회절 사진(Photo 51)은 생명체가 어떻게 부모의 유전 정보를 자손에게 복제하고 전달하는지 그 분자적 비밀을 최초로 밝혀냈습니다.",
      "bigQuestion": "단 4개의 염기(A, T, G, C)라는 단순한 알파벳이 어떻게 지구상 수천만 생물종의 다양성을 창조했을까?"
    },
    "vocabulary": [
      {
        "word": "helix",
        "pos": "[명]",
        "meaning": "나선, 나선형 구조",
        "contextSentence": "DNA is wound into an elegant double helix."
      },
      {
        "word": "nucleotide",
        "pos": "[명]",
        "meaning": "뉴클레오타이드 (DNA의 기본 구성 단위)",
        "contextSentence": "Chains of nucleotides form the backbones of genetic code."
      },
      {
        "word": "complementary",
        "pos": "[형]",
        "meaning": "상보적인, 상호 보완적인",
        "contextSentence": "Adenine bonds exclusively with its complementary base thymine."
      },
      {
        "word": "diffraction",
        "pos": "[명]",
        "meaning": "회절",
        "contextSentence": "X-ray diffraction patterns revealed the helical symmetry."
      },
      {
        "word": "replication",
        "pos": "[명]",
        "meaning": "복제",
        "contextSentence": "The double strands unzip to enable flawless DNA replication."
      },
      {
        "word": "heredity",
        "pos": "[명]",
        "meaning": "유전, 유전적 형질",
        "contextSentence": "DNA is the fundamental chemical blueprint of biological heredity."
      }
    ],
    "content": {
      "chapters": [
        {
          "chapterNum": 1,
          "title": "Photo 51 and the Molecular Riddle",
          "paragraphs": [
            {
              "num": 1,
              "en": "In the early 1950s, biology stood before its greatest unresolved riddle: what was the physical chemical structure of the gene? Scientists understood that deoxyribonucleic acid (DNA) carried hereditary instructions inside cell nuclei, but no one could explain how a chemical molecule could store vast encyclopedias of biological data and replicate them without error.",
              "ko": "1950년대 초, 생물학은 가장 거대한 미해결 수수께끼 앞에 서 있었습니다. 유전자의 물리적·화학적 구조는 과연 무엇일까? 과학자들은 디옥시리보핵산(DNA)이 세포핵 안에서 유전적 명령을 전달한다는 점은 이해하고 있었지만, 어떻게 화학 분자가 방대한 생물학적 백과사전을 저장하고 오류 없이 복제할 수 있는지는 아무도 설명하지 못했습니다.",
              "chunks": [
                "In the 1950s, / biology stood before its greatest riddle: / what was the chemical structure of the gene?"
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 12.1. Glowing molecular model representing the twisted double helix strand of DNA.",
              "alt": "Glowing 3D DNA double helix molecular model"
            },
            {
              "num": 2,
              "en": "The critical breakthrough came through the meticulous laboratory craft of physical chemist Rosalind Franklin at King's College London. Using high-resolution X-ray crystallography, Franklin captured 'Photo 51'—an iconic cross-shaped diffraction pattern that conclusively proved DNA possessed a helical architecture with phosphate backbones on the exterior.",
              "ko": "결정적인 돌파구는 런던 킹스 칼리지의 물리화학자 로절린드 프랭클린의 치밀한 실험실 장인정신에서 비롯되었습니다. 고해상도 X선 결정학을 활용하여 프랭클린은 '사진 51(Photo 51)'을 촬영했는데, 이 상징적인 X자형 회절 패턴은 DNA가 외부에 인산염 골격을 지닌 나선형 구조임을 명백히 입증해 주었습니다.",
              "chunks": [
                "Rosalind Franklin captured Photo 51, / proving DNA possessed a helical architecture."
              ]
            }
          ]
        },
        {
          "chapterNum": 2,
          "title": "The Pairing Mechanism of Life",
          "paragraphs": [
            {
              "num": 3,
              "en": "Armed with Franklin’s experimental data, young American biologist James Watson and British physicist Francis Crick constructed cardboard and wire molecular models at Cambridge University. In February 1953, they experienced their eureka moment: adenine (A) paired exclusively with thymine (T), and guanine (G) bonded uniquely with cytosine (C) across hydrogen rungs.",
              "ko": "프랭클린의 실험 데이터를 확인한 케임브리지 대학의 젊은 미국인 생물학자 제임스 왓슨과 영국인 물리학자 프랜시스 크릭은 판지와 철사로 분자 모델을 조립했습니다. 1953년 2월, 그들은 유레카의 순간을 맞이했습니다. 아데닌(A)은 티민(T)과만 결합하고, 구아닌(G)은 사이토신(C)과만 수소결합을 통해 사다리 발판처럼 짝을 이룬다는 사실이었습니다.",
              "chunks": [
                "Adenine paired exclusively with thymine, / and guanine bonded uniquely with cytosine."
              ]
            },
            {
              "isMedia": true,
              "mediaType": "image",
              "url": "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
              "caption": "Figure 12.2. Scientific biotechnology laboratory researching gene sequences and pharmaceutical therapies.",
              "alt": "Biotechnology laboratory pipette and test tubes"
            },
            {
              "num": 4,
              "en": "This complementary base pairing immediately revealed the mechanism of biological reproduction. As Watson and Crick famously wrote in their concise Nature paper: 'It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material.' Unzipping the two strands provided the exact template to synthesize two identical daughter helices, unlocking the foundational secret of earthly life.",
              "ko": "이 상보적 염기쌍은 생물학적 생식과 복제의 메커니즘을 즉각적으로 드러냈습니다. 왓슨과 크릭이 간결한 네이처 논문에 남긴 유명한 문장처럼 말입니다. '우리가 가정한 특이적 짝짓기가 유전 물질의 복제 메커니즘을 즉각 암시한다는 점을 우리는 결코 놓치지 않았다.' 두 가닥의 지퍼를 열면 동일한 두 개의 딸 나선을 합성할 완벽한 주형이 제공되어, 지구상 생명의 가장 근본적인 비밀이 밝혀졌습니다.",
              "chunks": [
                "Unzipping the two strands / provided the exact template / to synthesize identical daughter helices."
              ]
            }
          ]
        }
      ],
      "photoCredits": [
        {
          "figureNum": "Figure 12.1",
          "title": "Molecular DNA Structure Visualization",
          "source": "Unsplash Biomedical Science Archive",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28",
          "description": "3D computational rendering of double-stranded deoxyribonucleic acid."
        },
        {
          "figureNum": "Figure 12.2",
          "title": "Molecular Biology Genetics Laboratory",
          "source": "Unsplash Medical Technology Collection",
          "license": "Unsplash Free License",
          "originalUrl": "https://images.unsplash.com/photo-1579154204601-01588f351e67",
          "description": "Modern laboratory micropipette and gene sequencing microplate assay."
        }
      ]
    },
    "conceptMap": {
      "type": "cause_and_effect",
      "title": "DNA 이중나선 발견의 3대 핵심 분자적 발견",
      "nodes": [
        {
          "label": "1. 로절린드 프랭클린의 Photo 51",
          "desc": "X선 결정학 회절 사진으로 DNA가 꼬인 나선형 대칭 구조임을 시각적으로 증명"
        },
        {
          "label": "2. 상보적 염기쌍 (A-T / G-C)",
          "desc": "화학적 결합 규칙에 의해 항상 마주 보는 짝이 정해져 있어 완벽한 정보 보존"
        },
        {
          "label": "3. 반보존적 자기 복제 메커니즘",
          "desc": "지퍼가 열리듯 분리된 단일 가닥이 각각 거푸집(주형)이 되어 동일한 DNA 2벌 합성"
        }
      ],
      "summary": "DNA 이중나선의 규명은 생물학을 단순한 관찰 학문에서 정밀한 분자 공학으로 탈바꿈시켰으며, 현대 유전공학, 분자의학, 크리스퍼 유전자 가위의 출발점이 되었습니다."
    },
    "quizzes": [
      {
        "id": "q1",
        "type": "main_idea",
        "question": "What is the central achievement highlighted in this non-fiction passage?",
        "options": [
          "The synthesis of artificial petroleum using modified marine bacteria",
          "The discovery of DNA's double-helix structure and its complementary replication mechanism",
          "The invention of automated robotic surgery techniques in London",
          "The discovery that protein molecules determine all human hereditary diseases"
        ],
        "answer": 1,
        "explanation": "글의 주제는 1953년 DNA의 이중나선 구조 규명과 상보적 염기쌍을 통한 유전 정보 복제 메커니즘의 발견입니다."
      },
      {
        "id": "q2",
        "type": "detail_fact",
        "question": "Whose high-resolution X-ray crystallography photograph ('Photo 51') provided crucial evidence of DNA's helical shape?",
        "options": [
          "Marie Curie",
          "Rosalind Franklin",
          "Barbara McClintock",
          "Jane Goodall"
        ],
        "answer": 1,
        "explanation": "2문단에서 런던 킹스 칼리지의 물리화학자 로절린드 프랭클린(Rosalind Franklin)이 촬영한 'Photo 51'이 결정적 증거가 되었다고 명시되어 있습니다."
      },
      {
        "id": "q3",
        "type": "detail_fact",
        "question": "Which specific complementary base pairing rule did Watson and Crick deduce?",
        "options": [
          "Adenine pairs with Guanine, and Thymine pairs with Cytosine",
          "Adenine pairs exclusively with Thymine, and Guanine bonds uniquely with Cytosine",
          "All four bases bind randomly without any fixed molecular pairing",
          "Uracil replaces all phosphate groups along the outer ladder"
        ],
        "answer": 1,
        "explanation": "3문단에 'adenine (A) paired exclusively with thymine (T), and guanine (G) bonded uniquely with cytosine (C)'라고 설명되어 있습니다."
      },
      {
        "id": "q4",
        "type": "inference",
        "question": "How does DNA's two-stranded structure allow cells to pass genetic information to new generations?",
        "options": [
          "Each strand burns up to generate thermal electrical pulses",
          "The strands unzip, and each single strand acts as an exact template to assemble a new complementary strand",
          "The cell merges its chromosomes with foreign environmental dust",
          "Proteins spontaneously assemble DNA without requiring any preexisting pattern"
        ],
        "answer": 1,
        "explanation": "4문단에 'Unzipping the two strands provided the exact template to synthesize two identical daughter helices'라고 서술되어 있습니다."
      },
      {
        "id": "q5",
        "type": "vocabulary",
        "question": "The word 'meticulous' in Paragraph 2 describes laboratory work that is:",
        "options": [
          "Extremely careful, precise, and attentive to detail",
          "Careless and rushed due to financial pressure",
          "Accidental and unintentional",
          "Unpopular and broadly ignored by colleagues"
        ],
        "answer": 0,
        "explanation": "'meticulous'는 '치밀한, 꼼꼼한'의 뜻으로 'Extremely careful, precise, and attentive to detail'과 동의어입니다."
      }
    ],
    "keyQuotes": [
      {
        "en": "Unzipping the double helix revealed the exact template for replicating the code of life.",
        "ko": "이중나선의 지퍼를 열자 생명의 암호를 복제하는 완벽한 주형이 그 모습을 드러냈다.",
        "scrambleWords": [
          "Unzipping the double helix",
          "revealed the exact",
          "template for replicating",
          "the code of life."
        ]
      }
    ]
  }
];

console.log('📚 Veritas e-Library Data loaded:', window.EBOOK_SERIES_DATA.length, 'Series,', window.EBOOK_LIBRARY_DATA.length, 'Books.');
