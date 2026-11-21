/**
 * Veritas English - 중등 전용 내신 독해 & 비문학/소설 마스터 엔진 (Reading & Exam Engine)
 * 중1, 중2, 중3 학년별 20개 (학기별 10개씩) 총 6개 학기 단원, 60개 실전 지문 완비
 * 
 * 1. 단원(Semester Unit)별 선택 및 학년 필터 (중 1-1 ~ 중 3-2)
 * 2. 단원 전체(10지문) 학습 계획표 자동 배정 등록 / 일괄 삭제 연동
 * 3. 고난도 지문 뷰어 (문장 번호, TTS 발음, 한 줄 해석 토글, 읽기 타이머)
 * 4. 실전 중등 내신 4대 유형 문제 풀이 (어법 오류, 빈칸 추론, 내용 일치, 서술형 조건 영작)
 * 5. 지문 속 고난도 어휘 -> 단어장/사전 및 플래너 원클릭 연동
 * 6. 자동 채점, 서술형 키워드 판별 및 내신 출제 포인트 해설 리포트
 */

const POLYSEMY_MASTER_DICT = {
    'account': {
        pos: '[명·동]',
        meaning: '① [명] 계좌, 계정 ② [명] 설명, 이야기 ③ [명] 이유, 근거 ④ [동] (~의 비율을) 차지하다 ⑤ [동] (~의 이유를) 설명하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "계좌, 계정",
                "en": "You can access your online bank account using biometric authentication.",
                "ko": "생체 인증을 사용하여 온라인 은행 계좌에 접속할 수 있습니다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "설명, 이야기, 보고서",
                "en": "The detective asked the key witness for an honest account of events.",
                "ko": "형사는 핵심 목격자에게 사건에 대한 솔직한 진술을 요청했다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "이유, 근거",
                "en": "On no account should laboratory chemicals be left unattended.",
                "ko": "어떤 이유로도 실험실 화학 물질을 방치해서는 안 된다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "(비율·수치를) 차지하다",
                "en": "Solar and wind energy account for forty percent of total electricity generation.",
                "ko": "태양광과 풍력 에너지는 전체 발전량의 40%를 차지한다."
        },
        {
                "num": "⑤",
                "pos": "[동]",
                "def": "(이유·원인을) 설명하다",
                "en": "Heavy winter snowfall accounts for the unexpected school closures.",
                "ko": "폭설이 예상치 못한 휴교의 원인을 설명해 준다."
        }
]
    },
    'address': {
        pos: '[명·동]',
        meaning: '① [명] 주소 ② [명] 연설 ③ [동] (문제·현안을) 다루다, 고심하다 ④ [동] 연설하다, 말을 걸다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "주소",
                "en": "Please verify your current mailing address before placing the order.",
                "ko": "주문하기 전에 현재 우편 배송 주소를 확인해 주십시오."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "연설",
                "en": "The prime minister delivered a solemn televised address to the public.",
                "ko": "총리는 국민들에게 엄숙한 텔레비전 방송 연설을 했다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "(문제·현안을) 다루다, 고심하다, 해결하려 애쓰다",
                "en": "Our new environmental policy aims to address plastic pollution.",
                "ko": "우리의 새 환경 정책은 플라스틱 오염 문제를 해결하는 것을 목표로 한다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "연설하다, 말을 걸다",
                "en": "The guest speaker addressed hundreds of eager medical students.",
                "ko": "초청 연사는 수백 명의 열정적인 의대생들에게 강연했다."
        }
]
    },
    'arms': {
        pos: '[명]',
        meaning: '① [명] 무기, 병기 ② [명] 문장(紋章) ③ [명] (arm의 복수형) 팔들',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "무기, 병기",
                "en": "The soldiers agreed to lay down their arms after signing the peace treaty.",
                "ko": "군인들은 평화 조약에 서명한 후 무기를 내려놓기로 합의했다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "문장(紋章), 가문의 상징",
                "en": "The ancient royal coat of arms was carved into the stone archway.",
                "ko": "고대 왕실의 문장이 석조 아치문에 새겨져 있었다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "(arm의 복수형) 팔들",
                "en": "She held the sleeping baby tenderly in her arms.",
                "ko": "그녀는 잠든 아기를 팔에 안고 부드럽게 감싸 안았다."
        }
]
    },
    'article': {
        pos: '[명]',
        meaning: '① [명] 기사, 논설 ② [명] (계약·법률의) 조항 ③ [명] 물품, 품목 ④ [명] 관사',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "기사, 논설, 글",
                "en": "She published an insightful article on renewable energy in the science journal.",
                "ko": "그녀는 과학 저널에 신재생 에너지에 관한 통찰력 있는 기사를 게재했다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "(계약·법률의) 조항, 규정",
                "en": "Article 5 of the treaty protects fundamental human rights and freedoms.",
                "ko": "그 조약의 제5조는 기본적인 인권과 자유를 보호한다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "물품, 품목, 물건",
                "en": "Personal hygiene articles should be kept in a separate waterproof pouch.",
                "ko": "개인 위생 용품은 별도의 방수 파우치에 보관해야 한다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "(문법) 관사 (a, an, the)",
                "en": "In English grammar, the word \"the\" functions as the definite article.",
                "ko": "영어 문법에서 단어 \"the\"는 정관사로 기능한다."
        }
]
    },
    'balance': {
        pos: '[명·동]',
        meaning: '① [명] 균형, 평형 ② [명] 잔액, 잔고 ③ [명] 저울 ④ [동] 균형을 잡다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "균형, 평형 (work-life balance)",
                "en": "Maintaining a healthy balance between work and rest is crucial.",
                "ko": "일과 휴식 사이의 건강한 균형을 유지하는 것은 매우 중요하다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "잔액, 통장 잔고",
                "en": "You can check your remaining checking account balance online.",
                "ko": "온라인으로 당좌 예금 계좌의 남은 잔액을 확인할 수 있습니다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "저울",
                "en": "The pharmacist measured powder medication on a precision balance.",
                "ko": "약사는 정밀 저울 위에서 가루약을 계량했다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "균형을 잡다, 균형을 맞추다",
                "en": "Acrobats balanced gracefully on the narrow high-wire wire.",
                "ko": "곡예사들은 좁은 공중 외줄 위에서 우아하게 균형을 잡았다."
        }
]
    },
    'bear': {
        pos: '[동·명]',
        meaning: '① [동] 참다, 견디다 ② [동] (책임·비용을) 떠맡다 ③ [동] (아이를) 낳다, (열매를) 맺다 ④ [명] 곰',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "참다, 견디다",
                "en": "I can hardly bear the excruciating pain in my wisdom tooth.",
                "ko": "나는 사랑니의 극심한 통증을 거의 견딜 수가 없다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "(책임·비용을) 떠맡다, 부담하다",
                "en": "The shipping company promised to bear the total cost of damages.",
                "ko": "운송 회사는 피해에 대한 총비용을 부담하기로 약속했다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "(아이를) 낳다, (열매·꽃을) 맺다",
                "en": "These ancient orchard trees still bear abundant sweet fruit.",
                "ko": "이 오래된 과수원 나무들은 여전히 풍성하고 달콤한 열매를 맺는다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "곰",
                "en": "A large brown bear was catching salmon in the rushing stream.",
                "ko": "거대한 갈색 곰 한 마리가 세차게 흐르는 개울에서 연어를 잡고 있었다."
        }
]
    },
    'bill': {
        pos: '[명·동]',
        meaning: '① [명] 청구서, 계산서 ② [명] 지폐 ③ [명] 법안 ④ [명] (새의) 부리 ⑤ [동] 청구하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "청구서, 계산서, 고지서",
                "en": "Could we please have the bill for our dinner, waiter?",
                "ko": "웨이터님, 저녁 식사 계산서 좀 가져다주시겠습니까?"
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "지폐 (banknote)",
                "en": "He paid for the secondhand book with a crisp ten-dollar bill.",
                "ko": "그는 빳빳한 10달러짜리 지폐로 중고 책값을 지불했다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "법안, 의안",
                "en": "Congress passed a comprehensive bill to expand healthcare access.",
                "ko": "의회는 의료 접근성을 확대하기 위한 포괄적인 법안을 통과시켰다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "(새의 납작한) 부리",
                "en": "The toucan is instantly recognizable by its oversized colorful bill.",
                "ko": "투칸은 특유의 거대하고 화려한 부리 덕분에 즉시 알아볼 수 있다."
        },
        {
                "num": "⑤",
                "pos": "[동]",
                "def": "청구하다, 고지서를 보내다",
                "en": "The hospital billed the patient for emergency ambulance services.",
                "ko": "병원은 환자에게 응급 구급차 이용 비용을 청구했다."
        }
]
    },
    'board': {
        pos: '[명·동]',
        meaning: '① [명] 판자, 칠판 ② [명] 이사회, 위원회 ③ [동] 탑승하다, 승선하다 ④ [동] 하숙하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "판자, 칠판, 게시판",
                "en": "The physics professor wrote the key equations on the blackboard.",
                "ko": "물리학 교수가 칠판에 핵심 방정식을 적었다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "이사회, 위원회",
                "en": "The company board of directors unanimously approved the merger plan.",
                "ko": "회사 이사회는 합병 계획을 만장일치로 승인했다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "탑승하다, 승선하다",
                "en": "Passengers holding priority tickets were invited to board the airplane first.",
                "ko": "우선 탑승권을 소지한 승객들이 먼저 비행기에 탑승하도록 안내받았다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "하숙하다, 숙식을 제공하다",
                "en": "During his freshman year of college, he boarded with an elderly couple.",
                "ko": "대학 1학년 동안 그는 어느 노부부의 집에서 하숙을 했다."
        }
]
    },
    'charge': {
        pos: '[명·동]',
        meaning: '① [명] 요금 ② [명] 책임, 담당 ③ [명] 기소, 혐의 ④ [동] 청구하다 ⑤ [동] 충전하다 ⑥ [동] 고발하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "요금, 대금",
                "en": "There is no extra admission charge for visiting the special art exhibit.",
                "ko": "특별 미술 전시회를 관람하는 데 추가 입장 요금은 없습니다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "책임, 담당 (in charge of)",
                "en": "The senior manager was put in charge of the company redesign project.",
                "ko": "수석 팀장이 회사 리디자인 프로젝트의 책임을 맡게 되었다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "기소, 혐의",
                "en": "Prosecutors dropped all criminal charges against the wrongly accused man.",
                "ko": "검찰은 억울하게 기소된 남성에 대한 모든 형사 혐의를 취하했다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "(요금을) 청구하다",
                "en": "The luxury hotel charges fifty dollars per night for valet parking.",
                "ko": "그 고급 호텔은 발레파킹 요금으로 1박당 50달러를 청구한다."
        },
        {
                "num": "⑤",
                "pos": "[동]",
                "def": "(배터리를) 충전하다",
                "en": "Remember to plug in and charge your smartphone before traveling.",
                "ko": "여행을 떠나기 전에 스마트폰을 연결하여 충전하는 것을 잊지 마세요."
        },
        {
                "num": "⑥",
                "pos": "[동]",
                "def": "고발하다, 기소하다",
                "en": "Police charged the reckless driver with driving under the influence.",
                "ko": "경찰은 그 난폭 운전자를 음주 운전 혐의로 기소했다."
        }
]
    },
    'close': {
        pos: '[형·동·부]',
        meaning: '① [형] 가까운, 친밀한 ② [동] 닫다, 폐쇄하다 ③ [형] 철저한, 면밀한 ④ [부] 가까이',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "가까운, 친밀한",
                "en": "She has remained my closest and most trusted friend since childhood.",
                "ko": "그녀는 어린 시절부터 지금까지 나의 가장 가깝고 신뢰하는 친구로 남아 있다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "닫다, 폐쇄하다, 종결하다",
                "en": "Please remember to close all balcony doors before leaving the room.",
                "ko": "방을 떠나기 전에 발코니 문을 모두 닫는 것을 잊지 마세요."
        },
        {
                "num": "③",
                "pos": "[형]",
                "def": "철저한, 면밀한",
                "en": "The lab researchers kept a close watch on the chemical reaction.",
                "ko": "실험실 연구원들은 화학 반응을 면밀하게 관찰했다."
        },
        {
                "num": "④",
                "pos": "[부]",
                "def": "가까이, 바싹",
                "en": "Do not stand too close to the edge of the train platform.",
                "ko": "기차 승강장 가장자리에 너무 가까이 서 있지 마세요."
        }
]
    },
    'company': {
        pos: '[명]',
        meaning: '① [명] 회사 ② [명] 동료, 함께 있음 ③ [명] 손님, 방문객',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "회사, 기업체",
                "en": "The software company expanded into overseas Asian markets.",
                "ko": "그 소프트웨어 회사는 해외 아시아 시장으로 사업을 확장했다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "함께 있음, 동행, 동료 (keep company)",
                "en": "I truly enjoy her delightful company on long cross-country train rides.",
                "ko": "나는 장거리 횡단 열차 여행에서 그녀와 함께 있는 시간을 진심으로 즐긴다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "손님, 방문객 (have company)",
                "en": "We cleaned the living room thoroughly because we are having company tonight.",
                "ko": "우리는 오늘 밤 손님이 오시기 때문에 거실을 철저하게 청소했다."
        }
]
    },
    'content': {
        pos: '[명·형·동]',
        meaning: '① [명] 내용물, 목차 ② [명] 함유량 ③ [형] 만족하는 ④ [동] 만족시키다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "내용물, 목차, 디지털 콘텐츠",
                "en": "Creators post engaging educational content on social video platforms.",
                "ko": "창작자들은 소셜 비디오 플랫폼에 유익한 교육 콘텐츠를 게시한다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "함유량, 함량",
                "en": "Dark chocolate typically has a high natural cocoa content.",
                "ko": "다크 초콜릿은 일반적으로 천연 카카오 함유량이 높다."
        },
        {
                "num": "③",
                "pos": "[형]",
                "def": "만족하는",
                "en": "She is content with her simple and peaceful countryside life.",
                "ko": "그녀는 소박하고 평화로운 시골 생활에 만족하고 있다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "만족시키다",
                "en": "Nothing could content the spoiled child except expensive gifts.",
                "ko": "값비싼 선물을 제외하고는 어떤 것도 그 응석받이 아이를 만족시킬 수 없었다."
        }
]
    },
    'contract': {
        pos: '[명·동]',
        meaning: '① [명] 계약, 계약서 ② [동] 계약하다 ③ [동] 수축하다, 줄어들다 ④ [동] (병에) 걸리다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "계약, 계약서",
                "en": "Both executive parties signed a three-year international trade contract.",
                "ko": "양측 경영진은 3년 기간의 국제 무역 계약서에 서명했다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "계약하다, 도급 주다",
                "en": "The city contracted local engineering firms to repair aging bridges.",
                "ko": "시는 노후된 교량을 보수하기 위해 지역 엔지니어링 회사들과 계약을 맺었다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "수축하다, 오그라들다 (↔ expand)",
                "en": "Cold temperatures cause metal pipes to contract noticeably.",
                "ko": "차가운 온도는 금속 파이프를 눈에 띄게 수축시킨다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "(중병·감염증에) 걸리다",
                "en": "Travelers in tropical regions should take care not to contract malaria.",
                "ko": "열대 지역 여행자들은 말라리아에 걸리지 않도록 주의해야 한다."
        }
]
    },
    'court': {
        pos: '[명·동]',
        meaning: '① [명] 법원, 법정 ② [명] 코트(경기장) ③ [명] 궁궐, 왕실 ④ [동] 구애하다, 환심을 사려 하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "법원, 법정",
                "en": "The defense attorney presented key forensic evidence in open court.",
                "ko": "변호인은 공개 법정에서 결정적인 법의학 증거를 제시했다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "코트(테니스·농구 등의 경기장)",
                "en": "Rival tennis champions stepped onto the grass court for the final match.",
                "ko": "라이벌 테니스 챔피언들이 결승전을 위해 잔디 코트로 들어섰다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "궁궐, 왕실 조정",
                "en": "Foreign ambassadors were formally received at the royal palace court.",
                "ko": "외국 대사들은 왕실 궁궐에서 공식적으로 영접을 받았다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "구애하다, 환심을 사려 애쓰다",
                "en": "Tech startups courted venture capitalists to secure early funding.",
                "ko": "기술 스타트업들은 초기 투자를 유치하기 위해 벤처 투자자들의 환심을 사려 애썼다."
        }
]
    },
    'current': {
        pos: '[형·명]',
        meaning: '① [형] 현재의, 지금의 ② [형] 통용되는 ③ [명] (물·공기의) 흐름, 조류 ④ [명] 전류 ⑤ [명] 경향, 추세',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "현재의, 지금의",
                "en": "What is your current residential address and telephone number?",
                "ko": "현재 거주하시는 주소와 전화번호가 어떻게 되나요?"
        },
        {
                "num": "②",
                "pos": "[형]",
                "def": "통용되는, 유통 중인",
                "en": "That outdated scientific hypothesis is no longer current today.",
                "ko": "그 구식 과학 가설은 오늘날 더 이상 통용되지 않는다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "(물·공기의) 흐름, 조류, 기류",
                "en": "Strong ocean currents make swimming extremely hazardous here.",
                "ko": "강한 해류 때문에 이곳에서의 수영은 극도로 위험하다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "전류",
                "en": "A direct electrical current flows steadily through the copper wire.",
                "ko": "직류 전류가 구리 도선을 통해 일정하게 흐른다."
        },
        {
                "num": "⑤",
                "pos": "[명]",
                "def": "경향, 추세, 풍조",
                "en": "There is a strong current of public opinion demanding legal reform.",
                "ko": "법률 개혁을 요구하는 강력한 여론의 조류가 형성되어 있다."
        }
]
    },
    'custom': {
        pos: '[명·형]',
        meaning: '① [명] 관습, 풍습 ② [명] (복수형 customs) 세관, 관세 ③ [형] 맞춤의, 주문 제작의',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "관습, 사회적 풍습",
                "en": "It is an ancient local custom to exchange gifts on New Year Day.",
                "ko": "새해 첫날에 선물을 교환하는 것은 유서 깊은 지역 관습이다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "(복수형 customs) 세관, 관세",
                "en": "Travelers must declare all imported foreign goods at airport customs.",
                "ko": "여행객들은 공항 세관에서 수입한 외국 물품을 모두 신고해야 한다."
        },
        {
                "num": "③",
                "pos": "[형]",
                "def": "맞춤의, 주문 제작된",
                "en": "The carpenter handcrafted a beautiful custom wooden desk for the study.",
                "ko": "목수는 서재를 위해 아름다운 맞춤형 목제 책상을 직접 제작했다."
        }
]
    },
    'deal': {
        pos: '[동·명]',
        meaning: '① [동] 다루다, 처리하다 (deal with) ② [동] 거래하다 ③ [명] 거래, 합의 ④ [명] 대우, 취급',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "다루다, 처리하다 (deal with)",
                "en": "Experienced customer service staff deal calmly with difficult complaints.",
                "ko": "경험 많은 고객 서비스 직원은 까다로운 불만을 침착하게 처리한다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "거래하다, 장사하다 (deal in)",
                "en": "The antique gallery deals in rare eighteenth-century oil paintings.",
                "ko": "그 골동품 갤러리는 희귀한 18세기 유화를 전문으로 거래한다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "거래, 계약, 합의 (make a deal)",
                "en": "Tech conglomerates struck a multi-billion dollar acquisition deal.",
                "ko": "기술 대기업들이 수십억 달러 규모의 인수 거래 합의를 맺었다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "대우, 취급 (a fair deal)",
                "en": "Hardworking union members demanded a fair deal from the management.",
                "ko": "열심히 일하는 노조원들은 경영진에게 공정한 대우를 요구했다."
        }
]
    },
    'degree': {
        pos: '[명]',
        meaning: '① [명] 학위 ② [명] (온도·각도의) 도 ③ [명] 정도, 등급',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "학위",
                "en": "He earned a master degree in artificial intelligence from Stanford.",
                "ko": "그는 스탠퍼드 대학교에서 인공지능 석사 학위를 받았다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "(온도·각도의) 도 (degree Celsius / 90 degrees)",
                "en": "Pure water boils at one hundred degrees Celsius at sea level.",
                "ko": "순수한 물은 해수면 기압에서 섭씨 100도에 끓는다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "정도, 수준, 범위",
                "en": "To a certain degree, I agree with your innovative proposal.",
                "ko": "어느 정도는 당신의 혁신적인 제안에 동의합니다."
        }
]
    },
    'draw': {
        pos: '[동·명]',
        meaning: '① [동] 그리다 ② [동] 끌어당기다, 유치하다 ③ [동] (결론을) 도출하다 ④ [명] 무승부',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "그리다, 묘사하다",
                "en": "The talented artist drew a realistic charcoal portrait of the elderly man.",
                "ko": "재능 있는 화가는 노인의 사실적인 숯 초상화를 그렸다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "끌어당기다, 관심을 모으다, 유치하다",
                "en": "The annual cultural festival drew tens of thousands of international tourists.",
                "ko": "연례 문화 축제는 수만 명의 외국인 관광객들을 끌어모았다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "(결론·추론을) 도출하다, 이끌어내다",
                "en": "Scientists should not draw hasty conclusions without empirical data.",
                "ko": "과학자들은 경험적 데이터 없이 섣부른 결론을 도출해서는 안 된다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "무승부, 비김",
                "en": "The intense soccer final ended in a thrilling two-to-two draw.",
                "ko": "치열했던 축구 결승전은 2대 2 무승부로 끝났다."
        }
]
    },
    'drop': {
        pos: '[동·명]',
        meaning: '① [동] 떨어지다, 떨어뜨리다 ② [명] 방울 ③ [명] 하락, 감소 ④ [동] 중단하다',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "떨어지다, 떨어뜨리다",
                "en": "Be careful not to drop that fragile porcelain vase onto the tile floor.",
                "ko": "그 깨지기 쉬운 도자기 꽃병을 타일 바닥에 떨어뜨리지 않도록 조심하세요."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "(액체의) 방울",
                "en": "A cool drop of morning dew glistened on the rose petal.",
                "ko": "장미 꽃잎 위에 시원한 아침 이슬 한 방울이 반짝였다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "하락, 급락, 감소",
                "en": "There was a noticeable drop in consumer prices following the harvest.",
                "ko": "수확기 이후 소비자 물가에 눈에 띄는 하락이 있었다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "(과정·수업 등을) 중단하다, 그만두다",
                "en": "He decided to drop the advanced calculus course to focus on chemistry.",
                "ko": "그는 화학에 집중하기 위해 고급 미적분학 수강을 취소하기로 결정했다."
        }
]
    },
    'even': {
        pos: '[부·형]',
        meaning: '① [부] 심지어, ~조차 ② [부] 훨씬 (비교급 강조) ③ [형] 평평한 ④ [형] 균등한 ⑤ [형] 짝수의',
        senses: [
        {
                "num": "①",
                "pos": "[부]",
                "def": "심지어, ~조차도",
                "en": "Even seasoned computer experts could not decrypt the complex file.",
                "ko": "노련한 컴퓨터 전문가들조차도 그 복잡한 파일을 복호화하지 못했다."
        },
        {
                "num": "②",
                "pos": "[부]",
                "def": "훨씬 (비교급 강조)",
                "en": "Tomorrow temperatures are forecast to be even colder than today.",
                "ko": "내일 기온은 오늘보다 훨씬 더 추울 것으로 예보되어 있다."
        },
        {
                "num": "③",
                "pos": "[형]",
                "def": "평평한, 고른",
                "en": "Carpenters smoothed the wooden boards to make an even tabletop.",
                "ko": "목수들은 평평한 식탁 상판을 만들기 위해 나무판을 매끄럽게 다듬었다."
        },
        {
                "num": "④",
                "pos": "[형]",
                "def": "균등한, 대등한",
                "en": "Both political debate candidates stood an even chance of winning.",
                "ko": "양측 토론 후보 모두 승리할 대등한 기회를 가졌다."
        },
        {
                "num": "⑤",
                "pos": "[형]",
                "def": "짝수의 (↔ odd)",
                "en": "Two, four, six, and eight are well-known even numbers.",
                "ko": "2, 4, 6, 8은 잘 알려진 짝수이다."
        }
]
    },
    'fair': {
        pos: '[형·명]',
        meaning: '① [형] 공정한, 타당한 ② [형] (날씨가) 맑은 ③ [형] 꽤 많은, 상당한 ④ [형] 금발의, 흰 피부의 ⑤ [명] 박람회, 축제',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "공정한, 타당한",
                "en": "The neutral arbitrator delivered a fair verdict for both parties.",
                "ko": "중립적인 중재인은 양측 모두를 위해 공정한 판정을 내렸다."
        },
        {
                "num": "②",
                "pos": "[형]",
                "def": "(날씨가) 맑은",
                "en": "Fair weather is forecast across the entire peninsula this weekend.",
                "ko": "이번 주말에는 반도 전역에 맑은 날씨가 예보되어 있다."
        },
        {
                "num": "③",
                "pos": "[형]",
                "def": "꽤 많은, 상당한",
                "en": "A fair number of prospective students registered for the campus tour.",
                "ko": "상당한 수의 예비 신입생들이 캠퍼스 투어에 등록했다."
        },
        {
                "num": "④",
                "pos": "[형]",
                "def": "금발의, 밝은 피부의",
                "en": "The child has fair complexion and golden curls.",
                "ko": "그 아이는 밝은 안색과 금빛 곱슬머리를 지니고 있다."
        },
        {
                "num": "⑤",
                "pos": "[명]",
                "def": "박람회, 축제, 시장",
                "en": "Global tech leaders gathered at the international electronics fair.",
                "ko": "세계적인 기술 리더들이 국제 전자 박람회에 모였다."
        }
]
    },
    'fast': {
        pos: '[형·부·동]',
        meaning: '① [형] 빠른 ② [부] 빨리, 꽉 ③ [동] 단식하다, 금식하다 ④ [명] 단식',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "빠른, 신속한",
                "en": "The cheetah is celebrated as the fastest land mammal on the planet.",
                "ko": "치타는 지구상에서 가장 빠른 육상 포유류로 잘 알려져 있다."
        },
        {
                "num": "②",
                "pos": "[부]",
                "def": "단단히, 꽉 (hold fast)",
                "en": "Hold fast to the handrail while the train is decelerating.",
                "ko": "열차가 감속하는 동안에는 손잡이를 꽉 잡으세요."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "단식하다, 금식하다",
                "en": "Patients are required to fast for twelve hours before the blood test.",
                "ko": "환자들은 혈액 검사 전 12시간 동안 금식해야 한다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "단식, 금식 기간",
                "en": "She broke her twenty-four-hour fast with a warm bowl of soup.",
                "ko": "그녀는 따뜻한 수프 한 그릇으로 24시간의 단식을 마쳤다."
        }
]
    },
    'figure': {
        pos: '[명·동]',
        meaning: '① [명] 인물 ② [명] 수치, 숫자 ③ [명] 몸매, 형태 ④ [동] 이해하다, 알아내다 ⑤ [동] 생각하다, 판단하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "(역사적·사회적) 중요 인물",
                "en": "Albert Einstein remains an iconic figure in the history of theoretical physics.",
                "ko": "알베르트 아인슈타인은 이론 물리학 역사에서 상징적인 인물로 남아 있다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "수치, 숫자, 통계",
                "en": "Official government figures revealed a steady increase in employment rates.",
                "ko": "정부 공식 수치는 고용률의 꾸준한 증가를 보여주었다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "몸매, 실루엣, 형상",
                "en": "She exercises regularly and maintains an athletic figure.",
                "ko": "그녀는 규칙적으로 운동하여 탄탄한 몸매를 유지한다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "이해하다, 알아내다, 파악하다 (figure out)",
                "en": "The engineers tried to figure out why the backup power generator failed.",
                "ko": "엔지니어들은 왜 비상 발전기가 작동하지 않았는지 알아내려고 애썼다."
        },
        {
                "num": "⑤",
                "pos": "[동]",
                "def": "생각하다, 판단하다",
                "en": "I figured that you would prefer to finish the assignment tomorrow.",
                "ko": "나는 네가 과제를 내일 끝마치는 편을 더 선호할 것이라 생각했다."
        }
]
    },
    'fine': {
        pos: '[형·명·동]',
        meaning: '① [형] 좋은, 훌륭한, (날씨가) 맑은 ② [형] 미세한, 가는 ③ [명] 벌금 ④ [동] 벌금을 부과하다',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "좋은, 훌륭한, (날씨가) 맑은",
                "en": "We went for a relaxing walk in the park on a fine autumn day.",
                "ko": "우리는 맑은 가을날 공원으로 여유로운 산책을 나갔다."
        },
        {
                "num": "②",
                "pos": "[형]",
                "def": "미세한, 가는",
                "en": "The painter used a very fine brush to draw the delicate lines.",
                "ko": "화가는 섬세한 선을 그리기 위해 매우 가는 붓을 사용했다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "벌금",
                "en": "He had to pay a heavy fine for exceeding the speed limit.",
                "ko": "그는 속도 제한을 초과하여 무거운 벌금을 물어야 했다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "벌금을 부과하다",
                "en": "The municipal court fined the factory for dumping toxic waste.",
                "ko": "시 법원은 유독성 폐기물을 무단 투기한 공장에 벌금을 부과했다."
        }
]
    },
    'hard': {
        pos: '[형·부]',
        meaning: '① [형] 단단한, 딱딱한 ② [형] 어려운, 힘든 ③ [부] 열심히, 몹시',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "단단한, 딱딱한",
                "en": "Diamonds are ranked as the hardest naturally occurring mineral on Earth.",
                "ko": "다이아몬드는 지구상에서 자연적으로 발생하는 가장 단단한 광물로 분류된다."
        },
        {
                "num": "②",
                "pos": "[형]",
                "def": "어려운, 힘든, 고된",
                "en": "Solving complex differential equations can be extremely hard for beginners.",
                "ko": "복잡한 미분방정식을 푸는 것은 초심자에게 극도로 어려울 수 있다."
        },
        {
                "num": "③",
                "pos": "[부]",
                "def": "열심히, 온 힘을 다해, 몹시",
                "en": "She studied hard day and night to earn her medical license.",
                "ko": "그녀는 의사 면허를 취득하기 위해 밤낮으로 열심히 공부했다."
        }
]
    },
    'interest': {
        pos: '[명·동]',
        meaning: '① [명] 관심, 흥미 ② [명] 이자 ③ [명] 이익, 이해관계 ④ [동] 관심을 끌다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "관심, 흥미",
                "en": "The young student expressed a profound interest in astronomy and space exploration.",
                "ko": "그 어린 학생은 천문학과 우주 탐사에 깊은 관심을 표명했다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "(금융) 이자, 이율",
                "en": "The savings account pays four percent annual interest compounded monthly.",
                "ko": "그 저축 예금은 월 복리로 연 4%의 이자를 지급한다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "이익, 이해관계, 권익 (in one's best interest)",
                "en": "Diplomats worked tirelessly to safeguard their country's strategic economic interests.",
                "ko": "외교관들은 자국의 전략적 경제 이익을 지키기 위해 끊임없이 노력했다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "흥미를 유발하다, 관심을 끌다",
                "en": "Historical documentaries never fail to interest curious minds.",
                "ko": "역사 다큐멘터리는 호기심 많은 사람들의 흥미를 언제나 사로잡는다."
        }
]
    },
    'issue': {
        pos: '[명·동]',
        meaning: '① [명] 쟁점, 사안 ② [명] (잡지·간행물의) 호, 발행물 ③ [동] 발행하다, 발급하다 ④ [동] 발표하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "쟁점, 중대한 사안, 문제",
                "en": "Climate change is the most pressing global issue of our generation.",
                "ko": "기후 변화는 우리 세대의 가장 시급한 지구적 쟁점이다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "(정기간행물의) 호, 판",
                "en": "Her interview appeared on the cover of the March issue of Time magazine.",
                "ko": "그녀의 인터뷰는 타임지 3월호 표지에 실렸다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "발행하다, 발급하다",
                "en": "The embassy issued official tourist visas to the international group.",
                "ko": "대사관은 그 국제 단체에 공식 관광 비자를 발급해 주었다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "발표하다, 방출하다",
                "en": "The meteorological agency issued an urgent flood warning for coastal areas.",
                "ko": "기상청은 해안 지역에 긴급 홍수 경보를 발령했다."
        }
]
    },
    'last': {
        pos: '[형·동·명]',
        meaning: '① [형] 마지막의, 지난 ② [동] 지속되다, 견디다 ③ [명] 마지막 사람·것',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "마지막의, 지난",
                "en": "This is your very last chance to register for the entrance exam.",
                "ko": "이것이 입학시험에 등록할 수 있는 당신의 마지막 기회입니다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "지속되다, 오래가다",
                "en": "These durable hiking boots will easily last for five rugged years.",
                "ko": "이 내구성 좋은 등산화는 거친 환경에서도 5년 동안 거뜬히 지속될 것이다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "마지막 사람, 최종의 것",
                "en": "He was the very last of the runners to cross the marathon finish line.",
                "ko": "그는 마라톤 결승선을 통과한 주자들 중 가장 마지막 사람이었다."
        }
]
    },
    'leave': {
        pos: '[동·명]',
        meaning: '① [동] 떠나다, 출발하다 ② [동] 남기다, 두고 가다 ③ [명] 휴가',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "떠나다, 출발하다",
                "en": "The high-speed bullet train is scheduled to leave the platform at 9 a.m.",
                "ko": "고속 열차는 오전 9시에 플랫폼을 떠나 출발할 예정이다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "남기다, 두고 가다, 그대로 두다",
                "en": "Please leave your umbrella in the receptacle outside the classroom.",
                "ko": "교실 밖 보관함에 우산을 두고 들어오세요."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "휴가, 허가 (annual leave / sick leave)",
                "en": "He took two weeks of medical leave to recover from minor surgery.",
                "ko": "그는 간단한 수술 후 회복하기 위해 2주간의 병가를 냈다."
        }
]
    },
    'light': {
        pos: '[명·형·동]',
        meaning: '① [명] 빛, 광선, 전등 ② [형] 가벼운 ③ [형] 밝은 ④ [동] 불을 붙이다, 비추다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "빛, 광선, 조명",
                "en": "Gentle morning light streamed through the large east-facing window.",
                "ko": "은은한 아침 햇빛이 동쪽으로 난 큰 창문을 통해 흘러들어왔다."
        },
        {
                "num": "②",
                "pos": "[형]",
                "def": "가벼운, 부담 없는",
                "en": "This modern carbon-fiber bicycle is amazingly light and sturdy.",
                "ko": "이 최신 탄소섬유 자전거는 놀라울 정도로 가볍고 튼튼하다."
        },
        {
                "num": "③",
                "pos": "[형]",
                "def": "밝은, 옅은 색의",
                "en": "She wore a light blue linen dress suitable for warm summer afternoons.",
                "ko": "그녀는 따뜻한 여름 오후에 어울리는 밝은 하늘색 린넨 원피스를 입었다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "불을 켜다, 불을 붙이다, 비추다",
                "en": "They lit a few fragrant scented candles to brighten the cozy living room.",
                "ko": "그들은 아늑한 거실을 밝히기 위해 향기로운 향초 몇 개에 불을 켰다."
        }
]
    },
    'match': {
        pos: '[명·동]',
        meaning: '① [명] 경기, 시합 ② [명] 성냥 ③ [명] 어울리는 것, 호적수 ④ [동] 어울리다, 일치하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "경기, 시합",
                "en": "Thousands of enthusiastic fans attended the championship soccer match.",
                "ko": "수천 명의 열광적인 팬들이 축구 결승 경기를 관람했다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "성냥",
                "en": "He struck a small wooden match to light the scented candle.",
                "ko": "그는 향초에 불을 붙이기 위해 작은 나무 성냥을 켰다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "어울리는 짝, 호적수, 맞수",
                "en": "The young grandmaster proved to be an equal match for the champion.",
                "ko": "그 젊은 체스 그랜드마스터는 챔피언의 훌륭한 맞수임이 입증되었다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "어울리다, 일치하다, 맞추다",
                "en": "Her navy blue scarf matches her winter coat perfectly.",
                "ko": "그녀의 감청색 스카프는 겨울 코트와 완벽하게 어울린다."
        }
]
    },
    'matter': {
        pos: '[명·동]',
        meaning: '① [명] 문제, 일, 사안 ② [명] 물질 ③ [동] 중요하다, 문제가 되다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "문제, 사안, 일",
                "en": "Protecting user privacy is an urgent matter of public policy.",
                "ko": "사용자 개인정보 보호는 공공 정책의 시급한 사안이다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "(물리) 물질 (states of matter)",
                "en": "Solid, liquid, and gas represent the three familiar states of physical matter.",
                "ko": "고체, 액체, 기체는 물리적 물질의 세 가지 친숙한 상태를 나타낸다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "중요하다, 문제되다 (It doesn't matter)",
                "en": "Every single honest effort matters in achieving genuine teamwork.",
                "ko": "진정한 팀워크를 달성하는 데에는 모든 정직한 노력이 중요하다."
        }
]
    },
    'mean': {
        pos: '[동·형·명]',
        meaning: '① [동] 의미하다, 뜻하다 ② [동] 의도하다 ③ [형] 못된, 심술궂은, 비열한 ④ [형] 인색한 ⑤ [명] 평균, 중용',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "의미하다, 뜻하다",
                "en": "What does this rare archaeological symbol actually mean?",
                "ko": "이 희귀한 고고학 기호는 실제로 무엇을 의미하나요?"
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "의도하다, 작정하다",
                "en": "I sincerely apologize; I did not mean to offend your feelings.",
                "ko": "진심으로 사과드립니다; 기분을 상하게 하려던 의도는 아니었습니다."
        },
        {
                "num": "③",
                "pos": "[형]",
                "def": "못된, 심술궂은, 비열한",
                "en": "It was unkind and mean of him to tease his younger sister.",
                "ko": "여동생을 놀린 것은 그의 불친절하고 심술궂은 행동이었다."
        },
        {
                "num": "④",
                "pos": "[형]",
                "def": "인색한, 구두쇠의",
                "en": "Despite his immense wealth, the miser was notoriously mean with money.",
                "ko": "엄청난 재산에도 불구하고, 그 구두쇠는 돈에 악착같이 인색했다."
        },
        {
                "num": "⑤",
                "pos": "[명]",
                "def": "평균, 중용",
                "en": "The arithmetic mean score of the exam class was seventy-eight.",
                "ko": "그 시험 학급의 산술 평균 점수는 78점이었다."
        }
]
    },
    'mine': {
        pos: '[대·명·동]',
        meaning: '① [대명사] 나의 것 ② [명] 광산, 보고(寶庫) ③ [명] 지뢰 ④ [동] 채굴하다, 채광하다',
        senses: [
        {
                "num": "①",
                "pos": "[대명사]",
                "def": "나의 것",
                "en": "That navy leather backpack sitting on the table is mine.",
                "ko": "탁자 위에 놓여 있는 저 감청색 가죽 배낭은 제 것입니다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "광산, 보고(寶庫)",
                "en": "The deep underground diamond mine generates vast economic revenue.",
                "ko": "깊은 지하 다이아몬드 광산은 막대한 경제적 수익을 창출한다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "지뢰, 수뢰",
                "en": "Soldiers swept the demilitarized border area for hidden explosive mines.",
                "ko": "군인들은 숨겨진 폭발물 지뢰를 찾기 위해 비무장 지대 국경을 수색했다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "채굴하다, 캐내다",
                "en": "Miners have mined precious coal from this mountain for generations.",
                "ko": "광부들은 대대로 이 산에서 귀중한 석탄을 채굴해 왔다."
        }
]
    },
    'novel': {
        pos: '[명·형]',
        meaning: '① [명] 소설 ② [형] 참신한, 새로운, 신기한',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "소설, 장편 소설",
                "en": "She published a critically acclaimed historical fiction novel.",
                "ko": "그녀는 비평가들의 호평을 받은 역사 소설을 출간했다."
        },
        {
                "num": "②",
                "pos": "[형]",
                "def": "참신한, 새로운, 독창적인",
                "en": "The engineer proposed a novel approach to storing renewable energy.",
                "ko": "그 엔지니어는 재생 가능 에너지를 저장하는 참신한 접근법을 제안했다."
        }
]
    },
    'object': {
        pos: '[명·동]',
        meaning: '① [명] 물체, 사물 ② [명] 대상 ③ [명] 목표, 목적 ④ [동] 반대하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "물체, 사물",
                "en": "Astronomers discovered an unidentified glowing object in deep space.",
                "ko": "천문학자들은 심우주에서 정체불명의 빛나는 물체를 발견했다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "대상, 관심의 초점",
                "en": "The historic castle has long been an object of global fascination.",
                "ko": "그 역사적인 성은 오랫동안 전 세계적인 매료의 대상이었다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "목표, 목적",
                "en": "The primary object of this exercise is to boost cardiovascular health.",
                "ko": "이 운동의 주된 목적은 심혈관 건강을 증진하는 것이다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "반대하다, 이의를 제기하다",
                "en": "Local community residents objected strongly to the proposed landfill.",
                "ko": "지역 주민들은 제안된 쓰레기 매립지 계획에 강하게 반대했다."
        }
]
    },
    'order': {
        pos: '[명·동]',
        meaning: '① [명] 주문, 주문품 ② [명] 명령 ③ [명] 순서, 차례 ④ [명] 질서 ⑤ [동] 주문하다, 명령하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "주문, 주문 내역",
                "en": "Your online grocery order will be delivered within two hours.",
                "ko": "고객님의 온라인 식료품 주문은 2시간 이내에 배송될 것입니다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "명령, 훈령",
                "en": "The soldiers received a strict order to defend the perimeter.",
                "ko": "군인들은 외곽 경계선을 방어하라는 엄격한 명령을 받았다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "순서, 배열",
                "en": "Arrange the historical event index cards in chronological order.",
                "ko": "역사적 사건 카드들을 연대순으로 정리하세요."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "질서, 치안",
                "en": "Police officers worked tirelessly to restore public order in the square.",
                "ko": "경찰관들은 광장의 공공질서를 회복하기 위해 쉼 없이 일했다."
        },
        {
                "num": "⑤",
                "pos": "[동]",
                "def": "주문하다, 명령하다",
                "en": "We decided to order hot pizza and garlic bread for dinner.",
                "ko": "우리는 저녁으로 따뜻한 피자와 마늘빵을 주문하기로 했다."
        }
]
    },
    'patient': {
        pos: '[형·명]',
        meaning: '① [형] 참을성 있는, 끈기 있는 ② [명] 환자',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "참을성 있는, 끈기 있는",
                "en": "The teacher was extremely patient with beginners struggling with grammar.",
                "ko": "선생님은 문법으로 씨름하는 초보자들에게 극도로 인내심이 깊었다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "환자",
                "en": "The doctor visited each hospital patient during early morning rounds.",
                "ko": "의사는 이른 아침 회진 동안 각 병원 환자를 방문했다."
        }
]
    },
    'plant': {
        pos: '[명·동]',
        meaning: '① [명] 식물, 초목 ② [명] 공장, 발전소 ③ [동] 심다 ④ [동] (시설·생각을) 설치하다, 심어주다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "식물, 초목",
                "en": "Photosynthesis is the vital process by which green plants make food.",
                "ko": "광합성은 녹색 식물이 양분을 만드는 데 필수적인 과정이다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "공장, 제조 시설, 발전소",
                "en": "The automotive plant manufactures hundreds of electric vehicles daily.",
                "ko": "그 자동차 공장은 매일 수백 대의 전기차를 생산한다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "(씨앗·나무 등을) 심다",
                "en": "Students planted blooming flower seeds in the school garden.",
                "ko": "학생들은 학교 화단에 꽃씨를 심었다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "(아이디어·의심을) 심어주다, 설치하다",
                "en": "The mentor sought to plant seeds of curiosity in his apprentices.",
                "ko": "멘토는 제자들의 마음에 호기심의 씨앗을 심어주고자 했다."
        }
]
    },
    'point': {
        pos: '[명·동]',
        meaning: '① [명] 요점, 핵심 ② [명] 점, 점수 ③ [명] 시점, 단계 ④ [동] 가리키다, 향하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "요점, 핵심, 취지",
                "en": "I see your point clearly, but I respectfully disagree with the premise.",
                "ko": "당신의 요점을 명확히 알겠지만, 저는 정중하게 그 전제에 동의하지 않습니다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "점, 득점, 점수",
                "en": "Our basketball team won the final match by a margin of three points.",
                "ko": "우리 농구팀은 3점 차이로 결승 경기에서 승리했다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "시점, 단계",
                "en": "At this critical point in negotiations, compromises must be made.",
                "ko": "협상의 이 결정적인 시점에서는 타협이 이루어져야 한다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "손가락으로 가리키다, 향하다",
                "en": "The tour guide pointed to the historic clock tower across the street.",
                "ko": "관광 가이드는 길 건너편의 유서 깊은 시계탑을 가리켰다."
        }
]
    },
    'practice': {
        pos: '[명·동]',
        meaning: '① [명] 연습, 훈련 ② [명] 관행, 관습 ③ [명] 실행, 실천 ④ [동] 연습하다 ⑤ [동] (전문직을) 개업하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "연습, 훈련",
                "en": "Consistent daily practice is the only path to musical mastery.",
                "ko": "꾸준한 매일의 연습만이 음악적 숙달에 이르는 유일한 길이다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "관행, 관습",
                "en": "Working overtime without compensation is an illegal corporate practice.",
                "ko": "보상 없는 초과 근무는 불법적인 기업 관행이다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "실행, 실천 (put into practice)",
                "en": "It is time to put our ambitious architectural blueprints into practice.",
                "ko": "우리의 야심 찬 건축 청사진을 실천에 옮길 때이다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "연습하다, 숙련하다",
                "en": "The pianist practices Bach sonatas for four hours every afternoon.",
                "ko": "피아니스트는 매일 오후 바흐 소나타를 4시간 동안 연습한다."
        },
        {
                "num": "⑤",
                "pos": "[동]",
                "def": "(의사·변호사 등 전문직을) 개업하다, 일하다",
                "en": "After passing the bar exam, she practiced civil law in downtown Seoul.",
                "ko": "사법시험에 합격한 후, 그녀는 서울 도심에서 민법 전문 변호사로 일했다."
        }
]
    },
    'present': {
        pos: '[형·명·동]',
        meaning: '① [형] 현재의 ② [형] 참석한, 존재하는 ③ [명] 현재 ④ [명] 선물 ⑤ [동] 제시하다, 발표하다, 주다',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "현재의",
                "en": "Under the present economic conditions, caution is necessary.",
                "ko": "현재의 경제 상황에서는 신중함이 필수적이다."
        },
        {
                "num": "②",
                "pos": "[형]",
                "def": "참석한, 존재하는",
                "en": "All board members were present at the emergency morning session.",
                "ko": "모든 이사회 구성원들이 아침 긴급회의에 참석했다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "현재",
                "en": "Cherish the present moment rather than regretting the past.",
                "ko": "과거를 후회하기보다는 현재의 순간을 소중히 여겨라."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "선물",
                "en": "She opened the beautifully wrapped graduation present with a smile.",
                "ko": "그녀는 아름답게 포장된 졸업 선물을 미소 지으며 열었다."
        },
        {
                "num": "⑤",
                "pos": "[동]",
                "def": "제시하다, 발표하다, 주다",
                "en": "The lead scientist will present the latest medical findings tomorrow.",
                "ko": "수석 과학자는 내일 최신 의학 연구 결과를 발표할 예정이다."
        }
]
    },
    'race': {
        pos: '[명·동]',
        meaning: '① [명] 경주, 달리기, 경쟁 ② [명] 인종, 종족 ③ [동] 질주하다, 경쟁하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "경주, 레이스, 경쟁",
                "en": "The Olympic sprinter broke the world record in the 100-meter race.",
                "ko": "그 올림픽 단거리 육상 선수는 100m 경주에서 세계 신기록을 경신했다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "인종, 민족",
                "en": "All human beings are born equal regardless of race, creed, or nationality.",
                "ko": "모든 인간은 인종, 신념, 국적에 관계없이 평등하게 태어난다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "질주하다, 쏜살같이 달리다",
                "en": "The ambulance raced through the evening traffic with its siren blaring.",
                "ko": "구급차는 사이렌을 울리며 저녁 교통 체증을 뚫고 질주했다."
        }
]
    },
    'reserve': {
        pos: '[동·명]',
        meaning: '① [동] 예약하다 ② [동] (따로) 남겨두다, 보유하다 ③ [명] (동식물·자연) 보호구역, 보존구역 ④ [명] 비축(물), 매장량 ⑤ [명] 신중함, 내성적 태도',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "예약하다",
                "en": "I'd like to reserve a table for two at seven o'clock.",
                "ko": "저는 7시에 두 사람 자리를 예약하고 싶습니다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "(따로) 남겨두다, 보유하다",
                "en": "We should reserve these emergency funds for unforeseen crises.",
                "ko": "우리는 이 비상 자금을 예기치 못한 위기를 위해 남겨두어야 한다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "(동식물·자연) 보호구역, 보존구역",
                "en": "The park serves as a protected reserve for wild bison.",
                "ko": "그 공원은 야생 들소를 위한 보호구역 역할을 한다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "비축(물), 매장량",
                "en": "The country holds extensive underground oil reserves.",
                "ko": "그 나라는 방대한 지하 석유 비축량(매장량)을 보유하고 있다."
        },
        {
                "num": "⑤",
                "pos": "[명]",
                "def": "신중함, 내성적 태도, 과묵함",
                "en": "Behind her quiet reserve lies a sharp and humorous mind.",
                "ko": "그녀의 조용한 내성적 태도 뒤에는 예리하고 유머러스한 지성이 숨어 있다."
        }
]
    },
    'rest': {
        pos: '[명·동]',
        meaning: '① [명] 휴식, 안식 ② [명] (the rest) 나머지 ③ [동] 쉬다, 휴식을 취하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "휴식, 안식, 쉼",
                "en": "After hours of intense studying, take a short fifteen-minute rest.",
                "ko": "몇 시간 동안 집중해서 공부한 후에는 15분간의 짧은 휴식을 취하세요."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "(the rest) 나머지, 잔여물",
                "en": "I finished two chapters, and I will read the rest of the book tonight.",
                "ko": "나는 두 챕터를 끝냈고, 오늘 밤 그 책의 나머지를 읽을 것이다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "쉬다, 휴식을 취하다, 받치다",
                "en": "The tired hikers rested under the cool shade of a giant oak tree.",
                "ko": "지친 등산객들은 거대한 참나무의 시원한 그늘 아래에서 쉬었다."
        }
]
    },
    'right': {
        pos: '[형·명·부]',
        meaning: '① [형] 옳은, 맞는 ② [형] 오른쪽의 ③ [명] 권리 ④ [명] 오른쪽 ⑤ [부] 바로, 옳게',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "옳은, 정확한, 알맞은",
                "en": "You gave the right answer to that challenging quiz question.",
                "ko": "당신은 그 까다로운 퀴즈 질문에 정답을 맞혔습니다."
        },
        {
                "num": "②",
                "pos": "[형]",
                "def": "오른쪽의, 우측의",
                "en": "Raise your right hand if you wish to ask a question.",
                "ko": "질문하고 싶으시면 오른손을 들어 주세요."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "권리, 인권",
                "en": "Freedom of speech is recognized as a fundamental human right.",
                "ko": "표현의 자유는 기본적인 인권으로 인정받는다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "오른쪽",
                "en": "The library is located on the right just past the main intersection.",
                "ko": "도서관은 주요 교차로를 지나 바로 오른쪽에 위치해 있습니다."
        },
        {
                "num": "⑤",
                "pos": "[부]",
                "def": "바로, 똑바로, 곧장",
                "en": "Walk right through that corridor and enter the second doorway.",
                "ko": "그 복도를 곧장 지나서 두 번째 문으로 들어가세요."
        }
]
    },
    'room': {
        pos: '[명]',
        meaning: '① [명] 방, 침실 ② [명] (불가산) 여지, 공간, 기회',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "방, 침실, 실내 공간",
                "en": "He walked into his quiet hotel room and unpacked his luggage.",
                "ko": "그는 조용한 호텔 방으로 들어가 짐을 풀었다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "(불가산) 여지, 공간, 기회 (room for improvement)",
                "en": "There is always room for improvement in your writing skills.",
                "ko": "당신의 작문 실력에는 항상 발전의 여지가 있다."
        }
]
    },
    'row': {
        pos: '[명·동]',
        meaning: '① [명] 줄, 열 ② [동] (배의) 노를 젓다 ③ [명] 말다툼, 소동',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "줄, 열 (in a row)",
                "en": "We booked comfortable orchestra seats in the fifth row of the theater.",
                "ko": "우리는 극장 다섯 번째 줄의 편안한 오케스트라 좌석을 예매했다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "(배의) 노를 젓다",
                "en": "The rowers worked in perfect unison to row the boat across the wide river.",
                "ko": "노잡이들은 완벽한 호흡을 맞추며 넓은 강을 가로질러 배의 노를 저었다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "말다툼, 소동, 불화",
                "en": "The two business partners had a fierce row over company expenditure.",
                "ko": "두 사업 동업자는 회사 지출 문제를 두고 격렬한 말다툼을 벌였다."
        }
]
    },
    'safe': {
        pos: '[형·명]',
        meaning: '① [형] 안전한, 무사한 ② [명] 금고',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "안전한, 위험이 없는",
                "en": "Wear a reflective safety helmet to stay safe while cycling at night.",
                "ko": "밤에 자전거를 탈 때는 안전을 유지하기 위해 반사 안전 헬멧을 착용하세요."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "금고 (금고 상자)",
                "en": "Important corporate deeds and passports are locked inside the office safe.",
                "ko": "중요한 회사 증서와 여권은 사무실 금고 안에 안전하게 보관되어 있다."
        }
]
    },
    'scale': {
        pos: '[명·동]',
        meaning: '① [명] 규모, 범위 ② [명] 저울 ③ [명] (물고기 등의) 비늘 ④ [명] 음계 ⑤ [동] 오르다, 올라가다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "규모, 범위, 척도",
                "en": "The mega-infrastructure project was launched on a massive global scale.",
                "ko": "그 메가 인프라 프로젝트는 거대한 지구적 규모로 시작되었다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "저울",
                "en": "The baker weighed organic flour accurately on a digital kitchen scale.",
                "ko": "제빵사는 디지털 주방 저울 위에 유기농 밀가루를 정확하게 측정했다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "(물고기·파충류의) 비늘",
                "en": "Iridescent shiny scales protect the salmon as it swims upstream.",
                "ko": "무지갯빛으로 반짝이는 비늘이 연어가 강을 거슬러 올라갈 때 보호해 준다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "음계 (musical scale)",
                "en": "Young violin students practiced major and minor scales diligently.",
                "ko": "어린 바이올린 학생들은 장음계와 단음계를 부지런히 연습했다."
        },
        {
                "num": "⑤",
                "pos": "[동]",
                "def": "(가파른 절벽·벽을) 기어오르다",
                "en": "Brave mountaineers scaled the icy vertical rock wall without ropes.",
                "ko": "용감한 산악인들이 밧줄 없이 얼어붙은 수직 암벽을 기어올랐다."
        }
]
    },
    'second': {
        pos: '[형·명·동]',
        meaning: '① [형] 두 번째의 ② [명] 초(시간), 아주 짧은 순간 ③ [명] 보조자, 2등 ④ [동] 지지하다',
        senses: [
        {
                "num": "①",
                "pos": "[형]",
                "def": "두 번째의",
                "en": "Our company opened its second international branch office in Tokyo.",
                "ko": "우리 회사는 도쿄에 두 번째 국제 지사를 개설했다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "초(시간 단위), 찰나의 순간",
                "en": "Wait just one second while I print out your boarding confirmation.",
                "ko": "탑승 확인서를 출력하는 동안 딱 1초만 기다려 주세요."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "2등, 보조자",
                "en": "He finished a close second in the national swimming finals.",
                "ko": "그는 전국 수영 결승전에서 아쉽게 2위를 차지했다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "(제안·의안을) 정식으로 지지하다",
                "en": "I second the motion to approve the quarterly operating budget.",
                "ko": "분기별 운영 예산을 승인하자는 동의안에 정식으로 재청(지지)합니다."
        }
]
    },
    'sentence': {
        pos: '[명·동]',
        meaning: '① [명] 문장 ② [명] 형벌, 판결, 선고 ③ [동] 선고하다, 형을 내리다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "문장 (문법)",
                "en": "A complete English sentence requires at least a subject and a verb.",
                "ko": "완전한 영어 문장은 최소한 주어와 동사를 필요로 한다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "판결, 형벌, 선고형",
                "en": "The convicted criminal served a ten-year prison sentence.",
                "ko": "유죄 판결을 받은 범죄자는 10년의 징역형을 복역했다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "형을 선고하다, 판결을 내리다",
                "en": "The judge sentenced the embezzler to five years of community service.",
                "ko": "판사는 횡령범에게 5년의 사회봉사 명령을 선고했다."
        }
]
    },
    'share': {
        pos: '[동·명]',
        meaning: '① [동] 공유하다, 함께 쓰다 ② [동] 나누다 ③ [명] 몫, 지분 ④ [명] 주식',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "공유하다, 함께 쓰다",
                "en": "Roommates agreed to share kitchen chores and grocery expenses.",
                "ko": "룸메이트들은 주방 일과 식료품 비용을 함께 분담하기로 합의했다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "나누다, 분배하다",
                "en": "The generous baker shared freshly baked warm bread with needy neighbors.",
                "ko": "마음씨 좋은 제빵사는 갓 구운 따뜻한 빵을 가난한 이웃들과 나누었다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "몫, 지분, 기여분",
                "en": "Everyone must do their fair share of work to complete the project.",
                "ko": "프로젝트를 완료하려면 모두가 각자의 공평한 몫을 다해야 한다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "주식 (stock shares)",
                "en": "Tech company shares surged twenty percent following the product launch.",
                "ko": "기술 기업 주식이 신제품 출시 이후 20% 급등했다."
        }
]
    },
    'sound': {
        pos: '[명·동·형]',
        meaning: '① [명] 소리, 음향 ② [동] ~처럼 들리다 ③ [형] 건전한, 건강한, 타당한 ④ [형] (잠이) 깊은 ⑤ [명] 해협',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "소리, 음향",
                "en": "We were startled by the sudden loud sound of crashing thunder.",
                "ko": "우리는 갑작스러운 큰 천둥소리에 깜짝 놀랐다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "~처럼 들리다, 소리를 내다",
                "en": "Your creative startup proposal sounds extremely promising to investors.",
                "ko": "당신의 창의적인 스타트업 제안은 투자자들에게 매우 유망하게 들린다."
        },
        {
                "num": "③",
                "pos": "[형]",
                "def": "건전한, 건강한, 타당한",
                "en": "The financial advisor recommended a very sound investment strategy.",
                "ko": "재무 자문가는 매우 건전한 투자 전략을 추천했다."
        },
        {
                "num": "④",
                "pos": "[형]",
                "def": "(잠이) 깊은, 푹 든",
                "en": "Exhausted after hiking, the children fell into a sound sleep.",
                "ko": "하이킹 후 지친 아이들은 깊은 잠에 빠져들었다."
        },
        {
                "num": "⑤",
                "pos": "[명]",
                "def": "해협, 만",
                "en": "Ferries transport passengers across the narrow scenic sound.",
                "ko": "페리가 좁고 경치 좋은 해협을 가로질러 승객들을 수송한다."
        }
]
    },
    'spot': {
        pos: '[명·동]',
        meaning: '① [명] 장소, 지점 ② [명] 얼룩, 반점 ③ [동] 발견하다, 알아채다 ④ [동] 얼룩지게 하다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "장소, 명소, 지점",
                "en": "This tranquil grassy meadow is the perfect picnic spot.",
                "ko": "이 고요하고 풀이 무성한 목초지는 완벽한 소풍 장소이다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "얼룩, 반점, 점",
                "en": "He spilled hot coffee and left a dark stubborn spot on his white shirt.",
                "ko": "그는 뜨거운 커피를 쏟아서 흰 셔츠에 짙고 잘 지워지지 않는 얼룩을 남겼다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "발견하다, 분별해 내다, 알아채다",
                "en": "The keen ranger spotted an eagle perched atop the high pine branch.",
                "ko": "예리한 공원 경비원은 높은 소나무 가지 위에 앉아 있는 독수리를 발견했다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "얼룩지게 하다, 반점을 찍다",
                "en": "Heavy mud splashed up and spotted the shiny red car body.",
                "ko": "진흙이 튀어 반짝이는 빨간 자동차 차체를 얼룩지게 했다."
        }
]
    },
    'spring': {
        pos: '[명·동]',
        meaning: '① [명] 봄 ② [명] 용수철, 탄력 ③ [명] 샘, 온천 ④ [동] 튀어 오르다, 솟아나다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "봄",
                "en": "Cherry blossoms burst into full bloom throughout the park in spring.",
                "ko": "봄이 되면 공원 곳곳에 벚꽃이 만개한다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "용수철, 스프링, 탄력",
                "en": "The comfortable mattress contains hundreds of steel coil springs.",
                "ko": "그 편안한 매트리스에는 수백 개의 강철 코일 스프링이 들어 있다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "샘, 온천, 수원",
                "en": "Crystal clear mineral water gushes from the natural mountain spring.",
                "ko": "자연 산속 샘에서 수정처럼 맑은 미네랄 워터가 솟구쳐 나온다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "갑자기 튀어 오르다, 솟아나다",
                "en": "A frightened rabbit sprang out from behind the dense green bushes.",
                "ko": "깜짝 놀란 토끼 한 마리가 빽빽한 초록 덤불 뒤에서 불쑥 튀어나왔다."
        }
]
    },
    'state': {
        pos: '[명·동·형]',
        meaning: '① [명] 상태, 형편 ② [명] 국가, 주(州) ③ [동] 진술하다, 말하다 ④ [형] 국가의, 주(州)립의',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "상태, 형편, 심리 상태",
                "en": "The ancient historic manuscript was preserved in excellent state.",
                "ko": "그 고대 역사 필사본은 매우 훌륭한 상태로 보존되었다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "국가, 정부, 주(州)",
                "en": "California is the most populous state in the United States.",
                "ko": "캘리포니아는 미국에서 인구가 가장 많은 주이다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "명시하다, 분명히 진술하다",
                "en": "The official legal document clearly states the rules of confidentiality.",
                "ko": "공식 법률 문서는 비밀 유지 규정을 명확하게 명시하고 있다."
        },
        {
                "num": "④",
                "pos": "[형]",
                "def": "국가의, 주(州)립의",
                "en": "She graduated with honors from a renowned state university.",
                "ko": "그녀는 유명한 주립 대학교를 우수한 성적으로 졸업했다."
        }
]
    },
    'subject': {
        pos: '[명·형·동]',
        meaning: '① [명] 주제, 과목 ② [명] 피실험자, 대상자 ③ [명] 국민, 신하 ④ [형] ~에 종속된, ~받기 쉬운 ⑤ [동] 굴복시키다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "주제, 연구 대상, 학과목",
                "en": "Mathematics and physics are my favorite academic subjects.",
                "ko": "수학과 물리학은 내가 가장 좋아하는 학과목이다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "피실험자, 연구 참여자",
                "en": "Clinical test subjects were divided randomly into two trial groups.",
                "ko": "임상 시험 피실험자들은 무작위로 두 실험 집단으로 나뉘었다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "국민, 백성, 신하",
                "en": "The medieval king swore an oath to protect all his loyal subjects.",
                "ko": "중세의 왕은 자신의 모든 충성스러운 백성들을 보호하겠다고 맹세했다."
        },
        {
                "num": "④",
                "pos": "[형]",
                "def": "~에 종속된, ~의 영향을 받기 쉬운",
                "en": "All international flights are subject to sudden weather delays.",
                "ko": "모든 국제선 항공편은 기상으로 인한 급작스러운 지연의 영향을 받기 쉽다."
        },
        {
                "num": "⑤",
                "pos": "[동]",
                "def": "겪게 하다, 복종시키다",
                "en": "They subjected the new aerospace metal to extreme temperature tests.",
                "ko": "그들은 새 항공 우주용 금속을 극한의 온도 시험에 부쳤다."
        }
]
    },
    'tap': {
        pos: '[동·명]',
        meaning: '① [동] 톡톡 두드리다 ② [명] 수도꼭지 ③ [동] (자원·잠재력을) 활용하다, 개발하다',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "가볍게 톡톡 두드리다",
                "en": "She gently tapped on the wooden door before entering the quiet study.",
                "ko": "그녀는 조용한 서재에 들어가기 전에 나무 문을 가볍게 두드렸다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "수도꼭지 (water tap)",
                "en": "Turn off the water tap firmly while you brush your teeth to conserve water.",
                "ko": "물을 절약하기 위해 양치질을 하는 동안에는 수도꼭지를 꽉 잠그세요."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "(잠재력·자원을) 활용하다, 개척하다",
                "en": "The startup seeks to tap into renewable geothermal energy sources.",
                "ko": "그 스타트업은 신재생 지열 에너지원을 활용하고자 노력하고 있다."
        }
]
    },
    'term': {
        pos: '[명·동]',
        meaning: '① [명] 용어, 말 ② [명] 기간, 학기, 임기 ③ [명] 조건, 조항 ④ [명] 관계, 사이 ⑤ [동] 칭하다, 부르다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "용어, 학술 전문어",
                "en": "Quantum entanglement is a fundamental term in modern physics.",
                "ko": "양자 얽힘은 현대 물리학의 근본적인 용어이다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "학기, 기간, 임기",
                "en": "The spring academic term begins in the first week of March.",
                "ko": "봄 학기는 3월 첫째 주에 시작된다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "조건, 계약 조항",
                "en": "Both business partners negotiated mutually beneficial contract terms.",
                "ko": "두 사업 파트너는 상호 유익한 계약 조건을 협상했다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "관계, 사이 (on good terms with)",
                "en": "She has always remained on friendly terms with her former coworkers.",
                "ko": "그녀는 이전 직장 동료들과 항상 우호적인 관계를 유지해 왔다."
        },
        {
                "num": "⑤",
                "pos": "[동]",
                "def": "칭하다, 일컫다",
                "en": "Critics termed the innovative digital painting a modern masterpiece.",
                "ko": "평론가들은 그 혁신적인 디지털 그림을 현대의 걸작이라 칭했다."
        }
]
    },
    'toll': {
        pos: '[명]',
        meaning: '① [명] 통행료, 요금 ② [명] (사고·재난 등의) 사상자 수, 피해, 대가',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "통행료, 유료 도로 요금",
                "en": "Drivers must pay a five-dollar toll when crossing the suspension bridge.",
                "ko": "운전자들은 현수교를 건널 때 5달러의 통행료를 내야 한다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "(사고·질병의) 사상자 수, 대가, 큰 피해 (death toll / take a toll)",
                "en": "Heavy chronic stress takes a devastating toll on human heart health.",
                "ko": "극심한 만성 스트레스는 인간의 심장 건강에 치명적인 타격을 입힌다."
        }
]
    },
    'train': {
        pos: '[명·동]',
        meaning: '① [명] 기차, 열차 ② [명] 연속, 줄 ③ [동] 훈련하다, 교육받다 ④ [동] 길들이다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "기차, 열차",
                "en": "The high-speed electric bullet train arrived precisely on schedule.",
                "ko": "초고속 전기 고속열차는 정확히 예정된 시간에 도착했다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "연속, 일련의 생각 (train of thought)",
                "en": "A sudden loud phone ring interrupted my deep train of thought.",
                "ko": "갑작스러운 시끄러운 전화벨 소리가 나의 깊은 생각의 흐름을 끊었다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "훈련하다, 교육하다",
                "en": "Olympic marathon runners train rigorous hours in high altitude.",
                "ko": "올림픽 마라톤 주자들은 고지대에서 혹독한 시간 동안 훈련한다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "(동물을) 길들이다, 훈련시키다",
                "en": "Trainers trained guide dogs to assist visually impaired pedestrians safely.",
                "ko": "훈련사들은 시각 장애인 보행자를 안전하게 돕도록 안내견들을 훈련시켰다."
        }
]
    },
    'treat': {
        pos: '[동·명]',
        meaning: '① [동] 대하다, 다루다, 대우하다 ② [동] 치료하다 ③ [동] 대접하다, 한턱내다 ④ [명] 특별한 대접, 선물, 별미',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "대하다, 다루다, 대우하다",
                "en": "We should always treat colleagues with respect and genuine empathy.",
                "ko": "우리는 항상 동료들을 존중과 진정한 공감으로 대해야 한다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "치료하다, 처치하다",
                "en": "Doctors used innovative laser therapy to treat the patient burn wounds.",
                "ko": "의사들은 환자의 화상 상처를 치료하기 위해 혁신적인 레이저 치료법을 사용했다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "대접하다, 한턱내다",
                "en": "After winning the contest, he treated his close friends to a seafood dinner.",
                "ko": "대회에서 우승한 후, 그는 친한 친구들에게 해산물 저녁 식사를 한턱냈다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "특별한 대접, 선물, 별미",
                "en": "Grandmother baked homemade strawberry tarts as a weekend treat.",
                "ko": "할머니는 주말의 특별한 별미로 수제 딸기 타르트를 구워주셨다."
        }
]
    },
    'trip': {
        pos: '[명·동]',
        meaning: '① [명] 여행, 여정 ② [동] 발이 걸려 넘어지다, 헛디디다',
        senses: [
        {
                "num": "①",
                "pos": "[명]",
                "def": "여행, 여정",
                "en": "Our family took an unforgettable road trip along the coastal highway.",
                "ko": "우리 가족은 해안 도로를 따라 잊지 못할 자동차 여행을 다녀왔다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "발이 걸려 넘어지다, 헛디디다 (trip over)",
                "en": "He accidentally tripped over an exposed tree root while hiking the rocky trail.",
                "ko": "그는 바위투성이 산길을 걷다가 노출된 나무뿌리에 발이 걸려 넘어졌다."
        }
]
    },
    'watch': {
        pos: '[동·명]',
        meaning: '① [동] 보다, 지켜보다 ② [명] 손목시계 ③ [명] 감시, 경계',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "주의 깊게 보다, 지켜보다, 관찰하다",
                "en": "Ornithologists gathered along the wetland to watch migrating birds.",
                "ko": "조류학자들은 철새들을 관찰하기 위해 습지대를 따라 모였다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "손목시계 (wrist watch)",
                "en": "He glanced at his mechanical watch and realized the train would arrive shortly.",
                "ko": "그는 기계식 손목시계를 힐끗 보았고 기차가 곧 도착할 것임을 깨달았다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "감시, 경계 (keep watch)",
                "en": "Sentinels kept a sharp night watch over the perimeter of the military camp.",
                "ko": "보초병들은 군 야영지 주변을 삼엄하게 야간 경계했다."
        }
]
    },
    'well': {
        pos: '[부·명·형]',
        meaning: '① [부] 잘, 좋게 ② [명] 우물, 샘 ③ [형] 건강한, 좋은',
        senses: [
        {
                "num": "①",
                "pos": "[부]",
                "def": "잘, 훌륭하게",
                "en": "The student performed exceptionally well on the difficult science exam.",
                "ko": "그 학생은 어려운 과학 시험에서 대단히 훌륭하게 해냈다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "우물, 유정(油井)",
                "en": "Villagers dug a deep stone well to secure clean drinking water.",
                "ko": "마을 사람들은 깨끗한 식수를 확보하기 위해 깊은 돌 우물을 팠다."
        },
        {
                "num": "③",
                "pos": "[형]",
                "def": "건강한, 몸이 좋은",
                "en": "After taking the prescribed medicine, she feels completely well again.",
                "ko": "처방된 약을 복용한 후, 그녀는 다시 완전히 건강해진 기분이다."
        }
]
    },
    'will': {
        pos: '[조·명·동]',
        meaning: '① [조동사] ~할 것이다 ② [명] 의지, 결의 ③ [명] 유언장 ④ [동] 유증하다, 뜻대로 하다',
        senses: [
        {
                "num": "①",
                "pos": "[조동사]",
                "def": "~할 것이다 (미래 조동사)",
                "en": "The sun will rise at six in the morning over the horizon.",
                "ko": "해는 아침 6시에 지평선 위로 떠오를 것이다."
        },
        {
                "num": "②",
                "pos": "[명]",
                "def": "의지, 결의, 결단력",
                "en": "Her indomitable will to survive inspired everyone trapped in the snowstorm.",
                "ko": "살아남겠다는 그녀의 불굴의 의지는 눈보라 속에 갇힌 모든 이들에게 영감을 주었다."
        },
        {
                "num": "③",
                "pos": "[명]",
                "def": "유언장",
                "en": "The elderly billionaire left a legal will donating his fortune to charities.",
                "ko": "노령의 억만장자는 자신의 재산을 자선 단체에 기부한다는 법적 유언장을 남겼다."
        },
        {
                "num": "④",
                "pos": "[동]",
                "def": "유언으로 남기다(유증하다), 의지로 움직이다",
                "en": "He willed his entire private library of rare books to the university.",
                "ko": "그는 희귀 도서가 가득한 개인 서재 전체를 대학교에 유증했다."
        }
]
    },
    'yield': {
        pos: '[동·명]',
        meaning: '① [동] 산출하다, 생산하다 ② [동] 양보하다, 양도하다 ③ [동] 굴복하다 ④ [명] 산출량, 수확량',
        senses: [
        {
                "num": "①",
                "pos": "[동]",
                "def": "산출하다, 생산하다",
                "en": "Advanced organic farming techniques yield rich and nutritious crops.",
                "ko": "선진 유기농 농법은 풍성하고 영양가 높은 작물을 산출한다."
        },
        {
                "num": "②",
                "pos": "[동]",
                "def": "(권리·차례를) 양보하다",
                "en": "Drivers must yield right of way to crossing pedestrians at intersections.",
                "ko": "운전자들은 교차로에서 횡단하는 보행자들에게 통행 우선권을 양보해야 한다."
        },
        {
                "num": "③",
                "pos": "[동]",
                "def": "굴복하다, 굴복하여 따르다 (yield to)",
                "en": "The principled politician refused to yield to corrupt corporate pressure.",
                "ko": "원칙 있는 정치인은 부패한 기업의 압력에 굴복하기를 거부했다."
        },
        {
                "num": "④",
                "pos": "[명]",
                "def": "산출량, 수확량, 이자 수익률",
                "en": "This autumn harvest brought the highest grain yield in twenty years.",
                "ko": "이번 가을 수확은 20년 만에 가장 높은 곡물 산출량을 기록했다."
        }
]
    }
};


class ReadingEngine {
    constructor() {
        this.units = typeof READING_UNITS !== 'undefined' ? READING_UNITS : [];
        this.passages = typeof READING_PASSAGES !== 'undefined' ? READING_PASSAGES : [];
        
        this.currentGradeFilter = 'all'; // 'all', '중1', '중2', '중3'
        this.currentUnitId = this.units[0]?.unitId || 'unit-m1-1';
        this.currentPassageId = null;
        this.categoryFilter = 'all'; // 'all', 'nonfiction', 'fiction'

        // 리더 상태
        this.showTranslation = false;
        this.showChunking = false;
        this.readingTimerSeconds = 0;
        this.timerInterval = null;
        this.isTimerRunning = false;
        this.wpmScore = null;

        // 시험 상태
        this.userAnswers = {}; // { [questionId]: optionIndex or text }
        this.examSubmitted = false;
        this.examScore = 0;
        this.totalPoints = 0;

        // 초기 지문 설정
        const initialUnitPassages = this.passages.filter(p => p.unitId === this.currentUnitId);
        if (initialUnitPassages.length > 0) {
            this.currentPassageId = initialUnitPassages[0].id;
        }

        this.initEventListeners();
    }

    initEventListeners() {
        document.addEventListener('click', (e) => {
            const tooltip = document.getElementById('reading-floating-word-tooltip');
            if (tooltip && !tooltip.classList.contains('hidden')) {
                if (!tooltip.contains(e.target) && !e.target.classList.contains('reading-word-token')) {
                    this.hideFloatingTooltip();
                }
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideFloatingTooltip();
            }
        });
        // 단축키 또는 이벤트 바인딩
    }

    render() {
        this.renderUnitSelector();
        this.renderUnitBanner();
        this.renderPassageSelector();
        this.renderActivePassage();
    }

    getCurrentUnit() {
        return this.units.find(u => u.unitId === this.currentUnitId) || this.units[0];
    }

    getCurrentPassage() {
        let p = this.passages.find(item => item.id === this.currentPassageId);
        if (!p) {
            const unitPassages = this.passages.filter(item => item.unitId === this.currentUnitId);
            p = unitPassages[0] || this.passages[0];
            if (p) this.currentPassageId = p.id;
        }
        return p;
    }

    /**
     * 상단 학년 필터 및 단원(Unit) 선택 드롭다운 렌더링
     */
    renderUnitSelector() {
        const selectEl = document.getElementById('reading-unit-select');
        if (!selectEl) return;

        const filteredUnits = this.units.filter(u => {
            if (this.currentGradeFilter === 'all') return true;
            if (this.currentGradeFilter === '중등') return u.grade.startsWith('중') || u.grade === '예비중';
            if (this.currentGradeFilter === '고등') return u.grade === '고등' || u.grade.startsWith('고');
            if (this.currentGradeFilter === '수능') return u.grade === '수능';
            return u.grade === this.currentGradeFilter;
        });

        selectEl.innerHTML = filteredUnits.map(u => `
            <option value="${u.unitId}" ${u.unitId === this.currentUnitId ? 'selected' : ''}>
                ${u.unitTitle} (${u.grade} ${u.semester} • 10지문)
            </option>
        `).join('');

        // 만약 필터로 인해 현재 단원이 목록에 없으면 첫 단원으로 변경
        if (filteredUnits.length > 0 && !filteredUnits.some(u => u.unitId === this.currentUnitId)) {
            this.selectUnit(filteredUnits[0].unitId);
        }
    }

    /**
     * 선택된 단원 상세 정보 배너 및 계획표 등록 상태 렌더링
     */
    renderUnitBanner() {
        const unit = this.getCurrentUnit();
        if (!unit) return;

        const titleEl = document.getElementById('reading-unit-banner-title');
        const descEl = document.getElementById('reading-unit-banner-desc');
        const statusBadgeEl = document.getElementById('reading-unit-status-badge');
        const deleteBtn = document.getElementById('btn-delete-reading-unit-plan');

        if (titleEl) titleEl.textContent = unit.unitTitle;
        if (descEl) descEl.textContent = `${unit.description} (총 10개 지문, 실전 내신 40문항)`;

        // 계획표 등록 여부 확인
        if (window.storage && statusBadgeEl) {
            const statusMap = window.storage.getReadingUnitStatusMap();
            const status = statusMap[unit.unitId];

            if (status && status.isRegistered) {
                statusBadgeEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-100 text-emerald-900 border border-emerald-300';
                statusBadgeEl.innerHTML = `
                    <i data-lucide="calendar-check" class="w-3.5 h-3.5 text-emerald-700"></i>
                    <span>계획표 배정 완료: ${status.startDate} ~ ${status.endDate} (${status.passageCount}편 배정)</span>
                `;
                if (deleteBtn) deleteBtn.classList.remove('hidden');
            } else {
                statusBadgeEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-200 text-slate-700 border border-slate-300';
                statusBadgeEl.innerHTML = `
                    <i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-500"></i>
                    <span>계획표 미배정 (원클릭 단원 등록 가능)</span>
                `;
                if (deleteBtn) deleteBtn.classList.add('hidden');
            }
        }

        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 단원 내 지문 선택기 렌더링
     */
    renderPassageSelector() {
        const selectEl = document.getElementById('reading-passage-select');
        if (!selectEl) return;

        // 현재 단원에 속한 지문들
        let unitPassages = this.passages.filter(p => p.unitId === this.currentUnitId);

        if (this.categoryFilter !== 'all') {
            unitPassages = unitPassages.filter(p => p.category === this.categoryFilter);
        }

        selectEl.innerHTML = unitPassages.map((p, idx) => `
            <option value="${p.id}" ${p.id === this.currentPassageId ? 'selected' : ''}>
                [${p.category === 'fiction' ? '📖 소설' : '🔬 비문학'}] ${idx + 1}. ${p.title} (${p.koreanTitle})
            </option>
        `).join('');

        if (unitPassages.length > 0 && !unitPassages.some(p => p.id === this.currentPassageId)) {
            this.currentPassageId = unitPassages[0].id;
        }
    }

    selectUnit(unitId) {
        if (!unitId) return;
        this.currentUnitId = unitId;
        const unitPassages = this.passages.filter(p => p.unitId === unitId);
        if (unitPassages.length > 0) {
            this.currentPassageId = unitPassages[0].id;
        }
        this.resetExamState();
        this.renderUnitBanner();
        this.renderPassageSelector();
        this.renderActivePassage();
    }

    setGradeFilter(grade) {
        this.currentGradeFilter = grade;
        document.querySelectorAll('.reading-grade-btn').forEach(btn => {
            btn.classList.toggle('active-subtab', btn.dataset.grade === grade);
        });
        this.renderUnitSelector();
        this.renderUnitBanner();
        this.renderPassageSelector();
        this.renderActivePassage();
    }

    selectPassage(passageId) {
        if (!passageId) return;
        this.currentPassageId = passageId;
        const p = this.passages.find(item => item.id === passageId);
        if (p && p.unitId !== this.currentUnitId) {
            this.currentUnitId = p.unitId;
            const unitSelect = document.getElementById('reading-unit-select');
            if (unitSelect) unitSelect.value = p.unitId;
            this.renderUnitBanner();
        }
        this.resetExamState();
        this.renderPassageSelector();
        this.renderActivePassage();
    }

    setCategoryFilter(category) {
        this.categoryFilter = category;
        document.querySelectorAll('.reading-cat-btn').forEach(btn => {
            btn.classList.toggle('active-subtab', btn.dataset.category === category);
        });
        this.renderPassageSelector();
        this.renderActivePassage();
    }

    /**
     * 현재 선택된 지문 본문(좌측) 및 실전 내신 시험(우측) 렌더링
     */
    renderActivePassage() {
        const passage = this.getCurrentPassage();
        if (!passage) return;

        // 메타 정보 렌더링
        const badgeEl = document.getElementById('reading-meta-badge');
        const titleEl = document.getElementById('reading-meta-title');
        const koTitleEl = document.getElementById('reading-meta-kotitle');
        const wordCountEl = document.getElementById('reading-meta-words');
        const estTimeEl = document.getElementById('reading-meta-esttime');
        const summaryEl = document.getElementById('reading-meta-summary');

        if (badgeEl) badgeEl.textContent = `${passage.unitTitle} • ${passage.categoryLabel.split('•')[0].trim()} • ${passage.levelLabel}`;
        if (titleEl) titleEl.textContent = passage.title;
        if (koTitleEl) koTitleEl.textContent = passage.koreanTitle;
        if (wordCountEl) wordCountEl.textContent = `${passage.wordCount}단어`;
        if (estTimeEl) estTimeEl.textContent = `권장 ${passage.estimatedTime}`;
        if (summaryEl) summaryEl.textContent = passage.summary;

        // 좌측 지문 문장별 렌더링
        const textContainer = document.getElementById('reading-passage-text-container');
        if (textContainer) {
            textContainer.innerHTML = passage.sentences.map(s => `
                <div class="reading-sentence-row group p-2.5 rounded-xl transition-colors hover:bg-blue-50/50">
                    <div class="flex items-start gap-2.5">
                        <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-200 text-slate-700 font-mono text-[11px] font-bold shrink-0 mt-0.5 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                            ${s.num}
                        </span>
                        <div class="flex-1 space-y-1">
                            <p class="font-serif text-slate-900 text-sm sm:text-base leading-relaxed tracking-wide select-text">
                                ${this.renderInteractiveSentence(s, s.num)}
                            </p>
                            <p class="reading-ko-text text-xs text-slate-500 font-medium ${this.showTranslation ? '' : 'hidden'}">
                                ${s.ko}
                            </p>
                        </div>
                        <button class="opacity-0 group-hover:opacity-100 p-1 text-slate-400 hover:text-blue-900 transition-opacity cursor-pointer shrink-0" onclick="window.tts && window.tts.speak('${s.en.replace(/'/g, "\\'")}')" title="이 문장만 듣기">
                            <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // 지문 속 핵심 어휘 목록 렌더링
        const vocabContainer = document.getElementById('reading-passage-key-vocab');
        if (vocabContainer && passage.keyVocabulary) {
            vocabContainer.innerHTML = passage.keyVocabulary.map(v => `
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs cursor-pointer" onclick="window.tts && window.tts.speak('${v.word.replace(/'/g, "\\'")}')" title="클릭하여 발음 청취">
                    <span class="font-serif font-black text-slate-900">${v.word}</span>
                    <span class="text-[10px] font-mono text-slate-500 font-bold">${v.partOfSpeech}</span>
                    <span class="text-slate-700 text-[11px]">${v.meaning}</span>
                </div>
            `).join('');
        }

        // 우측 실전 내신 문제 및 수능 40번 요약문 클리닉 렌더링
        this.renderQuestions(passage);
        this.renderSummaryBlankClinic(passage);

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    /**
     * 우측 내신 문제 목록 렌더링
     */
    renderQuestions(passage) {
        const container = document.getElementById('reading-questions-container');
        if (!container) return;

        const questions = passage.questions || [];

        container.innerHTML = questions.map((q, idx) => {
            const userAnswer = this.userAnswers[q.id];
            const isSubmitted = this.examSubmitted;
            const isCorrect = isSubmitted ? this.checkAnswer(q, userAnswer) : null;

            let questionBodyHtml = '';

            // 서술형 문제인 경우
            if (q.type === 'subjective' || q.type === 'writing') {
                questionBodyHtml = `
                    <div class="space-y-3 mt-3">
                        <textarea id="ans-input-${q.id}" rows="3" class="w-full p-3 text-xs sm:text-sm font-serif bg-slate-50 border ${
                            isSubmitted ? (isCorrect ? 'border-emerald-500 bg-emerald-50/20' : 'border-red-400 bg-red-50/20') : 'border-slate-200'
                        } rounded-xl outline-none focus:border-blue-900 focus:bg-white transition-all" placeholder="조건에 맞추어 영문장을 완성하여 입력하세요..." ${isSubmitted ? 'disabled' : ''} oninput="window.readingEngine.setUserAnswer('${q.id}', this.value)">${userAnswer || ''}</textarea>
                        
                        ${isSubmitted ? `
                            <div class="p-3.5 rounded-xl ${isCorrect ? 'bg-emerald-50/80 border border-emerald-300' : 'bg-amber-50/80 border border-amber-300'} text-xs space-y-2">
                                <div class="flex items-center justify-between">
                                    <span class="font-bold flex items-center gap-1 ${isCorrect ? 'text-emerald-900' : 'text-amber-900'}">
                                        <i data-lucide="${isCorrect ? 'check-circle' : 'alert-circle'}" class="w-4 h-4 ${isCorrect ? 'text-emerald-600' : 'text-amber-600'}"></i>
                                        <span>서술형 첨삭 클리닉: ${isCorrect ? '만점 (조건 완벽 충족 ✓)' : '부분 점수 / 감점 요인 점검'}</span>
                                    </span>
                                    ${q.keywords ? `<span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/80 border ${isCorrect ? 'text-emerald-800 border-emerald-200' : 'text-amber-800 border-amber-200'}">필수 키워드 ${(q.keywords.filter(kw => (userAnswer || '').toLowerCase().includes(kw.toLowerCase())).length)}/${q.keywords.length} 적중</span>` : ''}
                                </div>
                                <div class="p-2.5 rounded-lg bg-white/90 border border-slate-200/80 space-y-1">
                                    <div class="font-bold text-slate-800 text-[11px] flex items-center gap-1">
                                        <i data-lucide="award" class="w-3.5 h-3.5 text-blue-900"></i>
                                        <span>내신 1등급 표준 모범 답안:</span>
                                    </div>
                                    <div class="font-serif italic text-blue-950 font-bold select-text">${q.sampleAnswer || q.expectedAnswer || ""}</div>
                                </div>
                                <div class="text-slate-600 text-[11px] leading-relaxed pt-0.5">${q.explanation}</div>
                            </div>
                        ` : ''}
                    </div>
                `;
            } 
            // 객관식 문제인 경우
            else {
                questionBodyHtml = `
                    <div class="space-y-2 mt-3">
                        ${(q.options || []).map((opt, optIdx) => {
                            const isSelected = (userAnswer === optIdx);
                            const isAnswer = (optIdx === q.correctIndex);
                            let optClass = 'border-slate-200 bg-white hover:border-slate-300';

                            if (isSubmitted) {
                                if (isAnswer) {
                                    optClass = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-1 ring-emerald-500';
                                } else if (isSelected && !isAnswer) {
                                    optClass = 'border-red-400 bg-red-50 text-red-900 line-through';
                                }
                            } else if (isSelected) {
                                optClass = 'border-blue-900 bg-blue-50/60 text-blue-950 font-bold ring-1 ring-blue-900';
                            }

                            return `
                                <button class="w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 cursor-pointer ${optClass}" onclick="window.readingEngine.setUserAnswer('${q.id}', ${optIdx})" ${isSubmitted ? 'disabled' : ''}>
                                    <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-mono text-xs font-bold shrink-0 mt-0.5">
                                        ${optIdx + 1}
                                    </span>
                                    <span class="leading-relaxed">${opt}</span>
                                </button>
                            `;
                        }).join('')}

                        ${isSubmitted ? `
                            <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-1 mt-2">
                                <strong class="text-blue-900 font-bold">💡 내신 출제 포인트 & 정답 해설:</strong>
                                <div>${q.explanation}</div>
                            </div>
                        ` : ''}
                    </div>
                `;
            }

            return `
                <div class="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <div class="flex items-center justify-between gap-2 pb-2 border-b border-slate-100">
                        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                            q.type === 'grammar' ? 'bg-indigo-100 text-indigo-900' :
                            q.type === 'blank' ? 'bg-amber-100 text-amber-900' :
                            q.type === 'subjective' ? 'bg-red-100 text-red-900' :
                            'bg-emerald-100 text-emerald-900'
                        }">
                            Question ${idx + 1} • ${q.typeLabel}
                        </span>

                        ${isSubmitted ? `
                            <span class="text-xs font-bold font-mono px-2 py-0.5 rounded ${
                                isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                            }">
                                ${isCorrect ? '✓ 정답' : '✗ 오답'}
                            </span>
                        ` : ''}
                    </div>

                    <h4 class="font-bold text-slate-900 text-sm sm:text-base whitespace-pre-line leading-relaxed">
                        ${q.questionText}
                    </h4>

                    ${q.passageWithUnderline ? `
                        <div class="p-3 rounded-xl bg-slate-50 text-xs font-serif leading-relaxed text-slate-800 border border-slate-200 my-2">
                            ${q.passageWithUnderline}
                        </div>
                    ` : ''}

                    ${q.passageWithBlank ? `
                        <div class="p-3 rounded-xl bg-slate-50 text-xs font-serif leading-relaxed text-slate-800 border border-slate-200 my-2">
                            ${q.passageWithBlank}
                        </div>
                    ` : ''}

                    ${questionBodyHtml}
                </div>
            `;
        }).join('');

        // 하단 시험 제출 / 다시 풀기 버튼 제어
        const submitBtn = document.getElementById('btn-submit-reading-exam');
        const retakeBtn = document.getElementById('btn-retake-reading-exam');
        const scoreBanner = document.getElementById('reading-exam-score-banner');

        if (submitBtn) submitBtn.classList.toggle('hidden', this.examSubmitted);
        if (retakeBtn) retakeBtn.classList.toggle('hidden', !this.examSubmitted);
        if (scoreBanner) {
            scoreBanner.classList.toggle('hidden', !this.examSubmitted);
            if (this.examSubmitted) {
                const scoreText = document.getElementById('reading-score-text');
                const scoreFeedback = document.getElementById('reading-score-feedback');
                if (scoreText) scoreText.textContent = `${this.examScore} / 100점`;
                if (scoreFeedback) {
                    if (this.examScore >= 90) {
                        scoreFeedback.textContent = '🎉 중등 내신 1등급 최상위권 완성! 완벽한 구문 독해력입니다.';
                    } else if (this.examScore >= 70) {
                        scoreFeedback.textContent = '👍 우수합니다! 어법 및 서술형 해설을 다시 한번 복습하세요.';
                    } else {
                        scoreFeedback.textContent = '💡 지문의 핵심 어법과 주제문을 다시 정독하고 오답을 복습해 보세요.';
                    }
                }
            }
        }
    }

    /**
     * 답안 선택 및 입력 처리
     */
    setUserAnswer(questionId, answer) {
        if (this.examSubmitted) return;
        this.userAnswers[questionId] = answer;
        const passage = this.getCurrentPassage();
        this.renderQuestions(passage);
    }

    /**
     * 정답 채점 로직
     */
    checkAnswer(question, userAnswer) {
        if (question.type === 'subjective' || question.type === 'writing') {
            if (!userAnswer || typeof userAnswer !== 'string') return false;
            const cleanUser = userAnswer.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
            const keywords = question.keywords || question.requiredKeywords || [];
            const matched = keywords.filter(kw => cleanUser.includes(kw.toLowerCase()));
            return matched.length >= Math.ceil(keywords.length * 0.7);
        } else {
            return userAnswer === question.correctIndex;
        }
    }

    /**
     * 시험 제출 및 채점 실행
     */
    submitExam() {
        const passage = this.getCurrentPassage();
        const questions = passage.questions || [];

        const answeredCount = Object.keys(this.userAnswers).length;
        if (answeredCount < questions.length) {
            if (!confirm(`아직 풀지 않은 문항이 있습니다 (${answeredCount}/${questions.length} 완료). 그대로 제출하시겠습니까?`)) {
                return;
            }
        }

        let correctCount = 0;
        questions.forEach(q => {
            const ans = this.userAnswers[q.id];
            if (this.checkAnswer(q, ans)) {
                correctCount++;
            }
        });

        this.examSubmitted = true;
        this.examScore = Math.round((correctCount / questions.length) * 100);

        // 학습 기록 영구 저장 (학업 목표 트래커 연동)
        if (window.storage && window.storage.recordReadingPassageResult && passage) {
            window.storage.recordReadingPassageResult(passage.id, this.examScore, passage.title);
            if (window.app && window.app.renderDashboard) window.app.renderDashboard();
            if (window.plannerEngine && window.plannerEngine.render) window.plannerEngine.render();
        }
        // 온보딩: 독해 지문 풀기 퀘스트 완료
        if (window.onboardingEngine) window.onboardingEngine.completeQuestStep('readingSolved');

        this.renderActivePassage();

        if (this.examScore >= 70 && typeof confetti === 'function') {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
            });
        }

        const scoreBanner = document.getElementById('reading-exam-score-banner');
        if (scoreBanner) {
            scoreBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    /**
     * 시험 다시 풀기 초기화
     */
    resetExamState() {
        this.userAnswers = {};
        this.examSubmitted = false;
        this.examScore = 0;
    }

    /**
     * 직독직해(Chunking) 모드 토글
     */
    toggleChunking() {
        this.showChunking = !this.showChunking;
        const btn = document.getElementById('btn-toggle-reading-chunks');
        if (btn) {
            btn.className = this.showChunking ?
                'px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold flex items-center gap-1 transition-all cursor-pointer shadow-2xs' :
                'px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-indigo-600 text-slate-700 hover:text-indigo-900 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-2xs';
            btn.innerHTML = this.showChunking ?
                '<i data-lucide="scissors" class="w-3.5 h-3.5"></i> 직독직해 ON' :
                '<i data-lucide="scissors" class="w-3.5 h-3.5"></i> 직독직해(Chunking)';
        }
        this.renderActivePassage();
        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * WPM 실전 독해 타이머 시작/종료 토글
     */
    toggleWPMTimer() {
        if (this.isTimerRunning) {
            this.stopReadingTimer();
        } else {
            this.startReadingTimer();
        }
    }

    startReadingTimer() {
        this.isTimerRunning = true;
        this.readingTimerSeconds = 0;
        this.wpmScore = null;
        this.updateWPMDisplay();

        if (this.timerInterval) clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            this.readingTimerSeconds++;
            this.updateWPMDisplay();
        }, 1000);
    }

    stopReadingTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
        this.isTimerRunning = false;

        const passage = this.getCurrentPassage();
        if (passage && this.readingTimerSeconds > 0) {
            const minutes = this.readingTimerSeconds / 60;
            this.wpmScore = Math.round(passage.wordCount / minutes);
        }
        this.updateWPMDisplay();
    }

    updateWPMDisplay() {
        const timerBtn = document.getElementById('btn-reading-wpm-timer');
        const wpmBadge = document.getElementById('reading-meta-wpm-badge');

        const mins = String(Math.floor(this.readingTimerSeconds / 60)).padStart(2, '0');
        const secs = String(this.readingTimerSeconds % 60).padStart(2, '0');

        if (timerBtn) {
            if (this.isTimerRunning) {
                timerBtn.className = 'px-3 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-bold flex items-center gap-1 animate-pulse transition-all cursor-pointer shadow-2xs';
                timerBtn.innerHTML = `<i data-lucide="timer" class="w-3.5 h-3.5"></i> 측정 중 (${mins}:${secs}) - 클릭 시 완료`;
            } else {
                timerBtn.className = 'px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-amber-500 text-slate-700 hover:text-amber-800 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer shadow-2xs';
                timerBtn.innerHTML = `<i data-lucide="clock" class="w-3.5 h-3.5"></i> 실전 WPM 타이머`;
            }
        }

        if (wpmBadge) {
            if (this.wpmScore) {
                let badgeClass = 'bg-blue-100 text-blue-900 border-blue-200';
                let label = '정독 페이스';
                if (this.wpmScore >= 150) {
                    badgeClass = 'bg-emerald-100 text-emerald-900 border-emerald-300';
                    label = '수능 1등급 안정 속도 🚀';
                } else if (this.wpmScore >= 120) {
                    badgeClass = 'bg-indigo-100 text-indigo-900 border-indigo-200';
                    label = '고등 내신 1등급 속도 🎯';
                }
                wpmBadge.className = `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeClass}`;
                wpmBadge.innerHTML = `<i data-lucide="zap" class="w-3 h-3"></i> ${this.wpmScore} WPM (${label})`;
                wpmBadge.classList.remove('hidden');
            } else if (this.isTimerRunning) {
                wpmBadge.className = 'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-900 border border-amber-200';
                wpmBadge.innerHTML = `<i data-lucide="timer" class="w-3 h-3 animate-spin"></i> 독해 중 ${mins}:${secs}`;
                wpmBadge.classList.remove('hidden');
            } else {
                wpmBadge.classList.add('hidden');
            }
        }
        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 문장 단위 렌더링 (직독직해 청크 모드 지원)
     */
    renderInteractiveSentence(sentence, sentenceNum) {
        if (this.showChunking && sentence.chunks && Array.isArray(sentence.chunks) && sentence.chunks.length > 0) {
            return sentence.chunks.map(chunk => {
                const innerHtml = this.renderInteractiveEnglishText(chunk, sentenceNum);
                return `<span class="inline-block bg-indigo-50/70 border-b-2 border-indigo-300 rounded px-1.5 py-0.5 mr-1.5 my-0.5 text-blue-950 font-serif font-medium tracking-wide transition-colors hover:bg-indigo-100/90">${innerHtml}</span>`;
            }).join(' ');
        }
        return this.renderInteractiveEnglishText(sentence.en, sentenceNum);
    }

    /**
     * 한 줄 해석 전체 토글
     */
    toggleTranslation() {
        this.showTranslation = !this.showTranslation;
        const btn = document.getElementById('btn-toggle-reading-ko');
        if (btn) {
            btn.innerHTML = this.showTranslation ? 
                '<i data-lucide="eye-off" class="w-3.5 h-3.5"></i> 한 줄 해석 숨기기' : 
                '<i data-lucide="eye" class="w-3.5 h-3.5"></i> 한 줄 해석 전체 보기';
        }
        document.querySelectorAll('.reading-ko-text').forEach(el => {
            el.classList.toggle('hidden', !this.showTranslation);
        });
        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 전체 지문 원어민 TTS 낭독
     */
    speakEntirePassage() {
        const passage = this.getCurrentPassage();
        if (!passage || !window.tts) return;
        const fullText = passage.sentences.map(s => s.en).join(' ');
        window.tts.speak(fullText);
    }

    /**
     * 지문 속 고난도 어휘 전체를 단어장/사전 및 플래너에 원클릭 등록
     */
    registerPassageWordsToVocab() {
        const passage = this.getCurrentPassage();
        if (!passage || !passage.keyVocabulary || passage.keyVocabulary.length === 0) return;

        const todayStr = window.storage.getTodayDateString();
        const items = passage.keyVocabulary.map(v => ({
            word: v.word,
            partOfSpeech: v.partOfSpeech,
            meaning: v.meaning,
            example: passage.sentences[0]?.en || '',
            exampleMeaning: passage.sentences[0]?.ko || ''
        }));

        const added = window.storage.addBulkWords(items, todayStr, `${passage.unitTitle} [${passage.title.slice(0, 12)}...]`, 'middle');

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.6 }
            });
        }

        alert(`📚 [${passage.title}] 지문 속 핵심 어휘 ${added.length}개가 단어장과 사전, 오늘의 플래너에 성공적으로 등록되었습니다!`);

        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }

    /**
     * 현재 선택된 단원 전체(10개 지문)를 학습 계획표에 배정 등록
     */
    registerCurrentUnitToPlanner() {
        const unit = this.getCurrentUnit();
        if (!unit || !window.storage) return;

        // 스마트 일괄 계획 배정 모달 오픈 (요일 선택 및 시작 소단원 지정 지원)
        if (window.app && window.app.openReadingBatchPlanModal) {
            window.app.openReadingBatchPlanModal(unit);
            return;
        }

        const today = window.storage.getTodayDateString();
        const dateInput = prompt(
            `[${unit.unitTitle}] 10개 지문을 매일 1지문씩 학습 계획표에 배정합니다.\n\n학습 시작일을 입력하세요 (YYYY-MM-DD):`,
            today
        );

        if (!dateInput) return;

        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateRegex.test(dateInput.trim())) {
            alert('날짜 형식이 올바르지 않습니다. YYYY-MM-DD 형식으로 입력해주세요.');
            return;
        }

        const res = window.storage.registerReadingUnit(unit.unitId, dateInput.trim());

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 70,
                spread: 60,
                origin: { y: 0.6 }
            });
        }

        alert(`🎉 [${res.unitTitle}] 단원이 학습 계획표에 성공적으로 등록되었습니다!\n\n• 배정 지문: ${res.addedPassages}개 지문\n• 배정 기간: ${res.startDate} ~ ${res.endDate} (1일 1지문)\n• 학습 플래너 캘린더에서 매일의 독해 과제를 확인하세요!`);

        this.renderUnitBanner();

        if (window.plannerEngine) {
            window.plannerEngine.render();
        }
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }

    /**
     * 현재 선택된 단원 전체 계획 삭제
     */
    deleteCurrentUnitFromPlanner() {
        const unit = this.getCurrentUnit();
        if (!unit || !window.storage) return;

        if (!confirm(`정말로 [${unit.unitTitle}]의 학습 계획을 플래너에서 일괄 삭제하시겠습니까?`)) {
            return;
        }

        const deleted = window.storage.deleteReadingUnit(unit.unitId);
        alert(`🗑️ [${unit.unitTitle}] 관련 학습 과제 총 ${deleted}건이 플래너에서 삭제되었습니다.`);

        this.renderUnitBanner();

        if (window.plannerEngine) {
            window.plannerEngine.render();
        }
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }

    /**
     * 영문장을 클릭 가능한 인터랙티브 단어 토큰 단위로 변환 렌더링
     */
    renderInteractiveEnglishText(sentenceText, sentenceNum) {
        if (!sentenceText) return '';
        // 단어 토큰과 공백/구두점 분리
        const tokens = sentenceText.split(/(\s+|[.,!?;:"'()\[\]]+)/);
        return tokens.map(token => {
            const clean = token.replace(/[^a-zA-Z\-]/g, '').trim();
            if (clean.length > 0 && /^[a-zA-Z]/.test(clean)) {
                return `<span class="reading-word-token hover:bg-amber-200 hover:text-blue-950 rounded px-0.5 cursor-pointer transition-colors underline decoration-dotted decoration-slate-300 hover:decoration-blue-900" onclick="window.readingEngine.showFloatingWordTooltip(event, '${clean.replace(/'/g, "\\'")}', ${sentenceNum})" title="클릭하여 실전 툴팁 & 단어장 수납">${token}</span>`;
            }
            return token;
        }).join('');
    }

    /**
     * 사전 데이터베이스 전수 직통 단어 검색 (원형이나 어근 변형 없이 단어 그대로 검색)
     */
    rawLookupWord(word) {
        if (!word) return null;
        const clean = String(word).trim();
        const lower = clean.toLowerCase();

        // 0. 수능·내신 핵심 70대 다의어(Polysemy) 마스터 사전 우선 조회 (예약하다 vs 보호구역 등 다의어 뜻 전수 포괄)
        if (typeof POLYSEMY_MASTER_DICT !== 'undefined' && POLYSEMY_MASTER_DICT[lower]) {
            const poly = POLYSEMY_MASTER_DICT[lower];
            return { word: clean, pos: poly.pos, meaning: poly.meaning, isPolysemy: true, senses: poly.senses || null };
        }

        // 1. 현재 지문 Key Vocabulary 검색
        const passage = this.getCurrentPassage();
        if (passage && passage.keyVocabulary && Array.isArray(passage.keyVocabulary)) {
            const found = passage.keyVocabulary.find(v => v.word && v.word.toLowerCase() === lower);
            if (found) {
                const stdPos = window.posHelper ? window.posHelper.standardizePos(found.partOfSpeech, found.word, found.meaning) : (found.partOfSpeech || '[명]');
                return { word: found.word, pos: stdPos, meaning: found.meaning };
            }
        }

        // 1.5. 전체 지문 Key Vocabulary 교차 검색
        if (Array.isArray(this.passages)) {
            for (const p of this.passages) {
                if (p.keyVocabulary && Array.isArray(p.keyVocabulary)) {
                    const found = p.keyVocabulary.find(v => v.word && v.word.toLowerCase() === lower);
                    if (found) {
                        const stdPos = window.posHelper ? window.posHelper.standardizePos(found.partOfSpeech, found.word, found.meaning) : (found.partOfSpeech || '[명]');
                        return { word: found.word, pos: stdPos, meaning: found.meaning };
                    }
                }
            }
        }

        // 2. window.storage.words 검색 (단, storage 단어 뜻이 단일 뜻에 불과하고 렉시콘에 ① 번호 매겨진 다의어 뜻이 있으면 풍부한 뜻 우선 채택)
        if (window.storage && window.storage.words && Array.isArray(window.storage.words)) {
            const found = window.storage.words.find(w => w.word && w.word.toLowerCase() === lower);
            if (found) {
                const lex = window.READING_LEXICON_DATA || (typeof READING_LEXICON_DATA !== 'undefined' ? READING_LEXICON_DATA : null);
                if (lex && lex[lower] && lex[lower].meaning && lex[lower].meaning.includes('①') && !found.meaning.includes('①')) {
                    const stdPos = window.posHelper ? window.posHelper.standardizePos(lex[lower].pos, clean, lex[lower].meaning) : (lex[lower].pos || '[명]');
                    return { word: found.word, pos: stdPos, meaning: lex[lower].meaning, isPolysemy: true };
                }
                const stdPos = window.posHelper ? window.posHelper.standardizePos(found.partOfSpeech, found.word, found.meaning) : (found.partOfSpeech || '[명]');
                return { word: found.word, pos: stdPos, meaning: found.meaning };
            }
        }

        // 2.5. READING_LEXICON_DATA (전수 렉시콘) 검색
        const lexicon = window.READING_LEXICON_DATA || (typeof READING_LEXICON_DATA !== 'undefined' ? READING_LEXICON_DATA : null);
        if (lexicon && lexicon[lower]) {
            const entry = lexicon[lower];
            const stdPos = window.posHelper ? window.posHelper.standardizePos(entry.pos, clean, entry.meaning) : (entry.pos || '[명]');
            return { word: clean, pos: stdPos, meaning: entry.meaning, isPolysemy: entry.meaning && entry.meaning.includes('①') };
        }

        // 3. CURATED_WORDS_DATA 검색
        const curatedList = window.CURATED_WORDS_DATA || (typeof CURATED_WORDS_DATA !== 'undefined' ? CURATED_WORDS_DATA : []);
        if (Array.isArray(curatedList)) {
            const found = curatedList.find(w => (w['영단어'] && w['영단어'].toLowerCase() === lower));
            if (found) {
                const stdPos = window.posHelper ? window.posHelper.standardizePos(found['품사'], found['영단어'], found['뜻']) : (found['품사'] || '[명]');
                return { word: found['영단어'], pos: stdPos, meaning: found['뜻'] };
            }
        }

        // 4.5. VERITAS_NEUNGRYUL_HIGH_WORDS_DATA (능률 고등·수능 마스터 5,200단어)
        const neungryulHigh = window.VERITAS_NEUNGRYUL_HIGH_WORDS_DATA || (typeof VERITAS_NEUNGRYUL_HIGH_WORDS_DATA !== 'undefined' ? VERITAS_NEUNGRYUL_HIGH_WORDS_DATA : []);
        if (Array.isArray(neungryulHigh)) {
            const found = neungryulHigh.find(w => w.word && w.word.toLowerCase() === lower);
            if (found) {
                const stdPos = window.posHelper ? window.posHelper.standardizePos(found.pos, found.word, found.meaning) : (found.pos || '[명]');
                return { word: found.word, pos: stdPos, meaning: found.meaning, example_en: found.example_en, example_ko: found.example_ko };
            }
        }

        // 4. NEUNGRYUL_VOCA_2025_DATA 검색
        const neungryulList = window.NEUNGRYUL_VOCA_2025_DATA || (typeof NEUNGRYUL_VOCA_2025_DATA !== 'undefined' ? NEUNGRYUL_VOCA_2025_DATA : []);
        if (Array.isArray(neungryulList)) {
            const found = neungryulList.find(w => (w['영단어'] && w['영단어'].toLowerCase() === lower));
            if (found) {
                const stdPos = window.posHelper ? window.posHelper.standardizePos('', found['영단어'], found['뜻']) : '[명]';
                return { word: found['영단어'], pos: stdPos, meaning: found['뜻'] };
            }
        }

        // 5. NEUNGRYUL_VOCA_ETYM_2025_DATA 검색
        const etymList = window.NEUNGRYUL_VOCA_ETYM_2025_DATA || (typeof NEUNGRYUL_VOCA_ETYM_2025_DATA !== 'undefined' ? NEUNGRYUL_VOCA_ETYM_2025_DATA : []);
        if (Array.isArray(etymList)) {
            const found = etymList.find(w => (w['영단어'] && w['영단어'].toLowerCase() === lower));
            if (found) {
                const stdPos = window.posHelper ? window.posHelper.standardizePos('', found['영단어'], found['뜻']) : '[명]';
                return { word: found['영단어'], pos: stdPos, meaning: found['뜻'] };
            }
        }

        // 6. NATIVE_EXPRESSIONS_DATA (원어민 표현 및 숙어 풀) 검색
        const nativeList = window.NATIVE_EXPRESSIONS_DATA || (typeof NATIVE_EXPRESSIONS_DATA !== 'undefined' ? NATIVE_EXPRESSIONS_DATA : []);
        if (Array.isArray(nativeList)) {
            const found = nativeList.find(w => (w.expression && w.expression.toLowerCase() === lower));
            if (found) {
                return { word: found.expression, pos: '[숙]', meaning: found.meaning };
            }
        }

        // 7. SAMPLE_WORDS 검색
        const sampleList = window.SAMPLE_WORDS || (typeof SAMPLE_WORDS !== 'undefined' ? SAMPLE_WORDS : []);
        if (Array.isArray(sampleList)) {
            const found = sampleList.find(w => (w.word && w.word.toLowerCase() === lower));
            if (found) {
                const stdPos = window.posHelper ? window.posHelper.standardizePos(found.partOfSpeech, found.word, found.meaning) : (found.partOfSpeech || '[명]');
                return { word: found.word, pos: stdPos, meaning: found.meaning };
            }
        }

        return null;
    }

    /**
     * 동사+ing 또는 과거/과거분사형(-ed, 불규칙) 단어를 동사 원형으로 정밀 매핑 (Lemmatization)
     */
    resolveVerbRoot(word) {
        if (!word) return null;
        const lower = String(word).trim().toLowerCase();

        // 1. 주요 불규칙 동사 과거형 및 과거분사 매핑 테이블 (170여 개)
        const IRREGULAR_VERBS = {
            'won': 'win', 'made': 'make', 'went': 'go', 'gone': 'go', 'took': 'take', 'taken': 'take',
            'saw': 'see', 'seen': 'see', 'came': 'come', 'gave': 'give', 'given': 'give',
            'felt': 'feel', 'found': 'find', 'held': 'hold', 'stood': 'stand', 'kept': 'keep',
            'left': 'leave', 'lost': 'lose', 'paid': 'pay', 'ran': 'run', 'thought': 'think',
            'told': 'tell', 'wrote': 'write', 'written': 'write', 'broke': 'break', 'broken': 'break',
            'built': 'build', 'caught': 'catch', 'taught': 'teach', 'bought': 'buy', 'brought': 'bring',
            'chosen': 'choose', 'chose': 'choose', 'driven': 'drive', 'drove': 'drive',
            'eaten': 'eat', 'ate': 'eat', 'fallen': 'fall', 'fell': 'fall', 'frozen': 'freeze', 'froze': 'freeze',
            'grown': 'grow', 'grew': 'grow', 'hidden': 'hide', 'hid': 'hide', 'known': 'know', 'knew': 'know',
            'risen': 'rise', 'rose': 'rise', 'shaken': 'shake', 'shook': 'shake', 'spoken': 'speak', 'spoke': 'speak',
            'stolen': 'steal', 'stole': 'steal', 'thrown': 'throw', 'threw': 'throw', 'worn': 'wear', 'wore': 'wear',
            'understood': 'understand', 'slept': 'sleep', 'swum': 'swim', 'swam': 'swim', 'flown': 'fly', 'flew': 'fly',
            'drawn': 'draw', 'drew': 'draw', 'borne': 'bear', 'born': 'bear', 'bore': 'bear',
            'arisen': 'arise', 'arose': 'arise', 'begun': 'begin', 'began': 'begin', 'blown': 'blow', 'blew': 'blow',
            'hung': 'hang', 'led': 'lead', 'lent': 'lend', 'meant': 'mean', 'met': 'meet',
            'ridden': 'ride', 'rode': 'ride', 'rung': 'ring', 'rang': 'ring', 'shone': 'shine',
            'shot': 'shoot', 'shown': 'show', 'sung': 'sing', 'sang': 'sing', 'sunk': 'sink', 'sank': 'sink',
            'sat': 'sit', 'spent': 'spend', 'spun': 'spin', 'stuck': 'stick', 'stung': 'sting',
            'sworn': 'swear', 'swore': 'swear', 'swept': 'sweep', 'torn': 'tear', 'tore': 'tear',
            'woken': 'wake', 'woke': 'wake', 'wound': 'wind', 'bent': 'bend', 'bound': 'bind',
            'bled': 'bleed', 'bred': 'breed', 'crept': 'creep', 'dealt': 'deal', 'dug': 'dig',
            'fed': 'feed', 'fled': 'flee', 'forgiven': 'forgive', 'forgave': 'forgive',
            'forgotten': 'forget', 'forgot': 'forget', 'ground': 'grind', 'laid': 'lay',
            'proven': 'prove', 'shrunk': 'shrink', 'shrank': 'shrink', 'slid': 'slide',
            'struck': 'strike', 'swung': 'swing', 'wept': 'weep', 'withdrawn': 'withdraw', 'withdrew': 'withdraw',
            'bitten': 'bite', 'bit': 'bite', 'gotten': 'get', 'got': 'get', 'been': 'be', 'was': 'be', 'were': 'be',
            'overcame': 'overcome', 'undergone': 'undergo', 'underwent': 'undergo', 'undertaken': 'undertake', 'undertook': 'undertake',
            'upheld': 'uphold', 'overheard': 'overhear', 'became': 'become'
        };

        if (IRREGULAR_VERBS[lower]) {
            return IRREGULAR_VERBS[lower];
        }

        const candidates = [];

        // 2. 동사 + ing 형태 규칙
        if (lower.endsWith('ing') && lower.length > 4) {
            if (lower === 'lying') candidates.push('lie');
            else if (lower === 'dying') candidates.push('die');
            else if (lower === 'tying') candidates.push('tie');
            else {
                const base = lower.slice(0, -3);
                // 자음 중복 (running -> run, stopping -> stop, swimming -> swim 등)
                if (base.length >= 2 && base[base.length - 1] === base[base.length - 2] && 'bcdfghjklmnpqrstvwxyz'.includes(base[base.length - 1])) {
                    candidates.push(base.slice(0, -1));
                }
                // -e 탈락형 (agonizing -> agonize, making -> make, persevering -> persevere 등)
                candidates.push(base + 'e');
                // 단순 -ing 탈락형 (working -> work, disrupting -> disrupt 등)
                candidates.push(base);
            }
        }
        // 3. 동사 과거형 및 과거분사 (-ed, -d, -ied) 규칙
        else if (lower.endsWith('ed') && lower.length > 3) {
            if (lower.endsWith('ied') && lower.length > 4) {
                candidates.push(lower.slice(0, -3) + 'y');
            }
            const base = lower.slice(0, -2);
            // 자음 중복 (stopped -> stop, occurred -> occur 등)
            if (base.length >= 2 && base[base.length - 1] === base[base.length - 2] && 'bcdfghjklmnpqrstvwxyz'.includes(base[base.length - 1])) {
                candidates.push(base.slice(0, -1));
            }
            // -e로 끝나는 동사의 -d 탈락 (persevered -> persevere, agonized -> agonize, collapsed -> collapse 등)
            if (lower.endsWith('d')) {
                candidates.push(lower.slice(0, -1));
            }
            // 단순 -ed 탈락형 (amassed -> amass, deciphered -> decipher, worked -> work 등)
            candidates.push(base);
        }
        // 4. -en 분사형 규칙
        else if (lower.endsWith('en') && lower.length > 4) {
            if (IRREGULAR_VERBS[lower]) candidates.push(IRREGULAR_VERBS[lower]);
        }

        for (const cand of candidates) {
            if (cand && cand !== lower) {
                const match = this.rawLookupWord(cand);
                if (match) {
                    return cand;
                }
            }
        }

        return null;
    }

    /**
     * 전체 어휘 데이터베이스에서 단어 뜻 및 품사 검색
     * 동사+ing 형태나 과거분사는 사용자의 요청에 따라 반드시 '동사 원형'으로 표기하여 반환
     */
    findWordMeaning(word) {
        if (!word) return null;
        const clean = String(word).trim();
        const lower = clean.toLowerCase();

        // 1. [사용자 요청 1순위] 동사+ing 또는 과거/과거분사형인 경우 동사 원형(Root Verb) 탐색
        const rootVerb = this.resolveVerbRoot(clean);
        if (rootVerb && rootVerb !== lower) {
            const rootEntry = this.rawLookupWord(rootVerb);
            const originalEntry = this.rawLookupWord(lower);
            const polySenses = (rootEntry && rootEntry.senses) || (originalEntry && originalEntry.senses) || null;

            let combinedMeaning = rootEntry ? rootEntry.meaning : '';
            if (originalEntry && originalEntry.meaning && !combinedMeaning.includes(originalEntry.meaning)) {
                const cleanOriginalMeaning = originalEntry.meaning.replace(/\s*\(원형:.*?\)/, '').trim();
                if (cleanOriginalMeaning && cleanOriginalMeaning !== combinedMeaning) {
                    combinedMeaning = `${combinedMeaning} (형/분사: ${clean} ${cleanOriginalMeaning})`;
                }
            } else if (!combinedMeaning.includes(`(${clean}`)) {
                combinedMeaning = `${combinedMeaning} (본문: ${clean})`;
            }

            return {
                word: rootVerb, // ★ 동사 원형 표기 (persevere, agonize, win 등)
                originalWord: clean, // 본문 표기 원문 (persevered, agonizing, won 등)
                isInflected: true,
                inflectionType: lower.endsWith('ing') ? '동사+ing' : '과거/과거분사',
                pos: rootEntry ? rootEntry.pos : '[동]',
                meaning: combinedMeaning,
                isPolysemy: !!polySenses || (rootEntry && rootEntry.isPolysemy) || false,
                senses: polySenses
            };
        }

        // 2. 단어 자체 직접 직통 검색
        const directMatch = this.rawLookupWord(lower);
        if (directMatch) {
            return {
                word: directMatch.word || clean,
                originalWord: clean,
                isInflected: false,
                pos: directMatch.pos || '[명]',
                meaning: directMatch.meaning || '',
                isPolysemy: directMatch.isPolysemy || false,
                senses: directMatch.senses || null
            };
        }

        // 3. 복수형(Plural) 등 명사 굴절형 단수 환원 검색
        const nounStemCandidates = [];
        if (lower.endsWith('ies') && lower.length > 4) nounStemCandidates.push(lower.slice(0, -3) + 'y');
        if (lower.endsWith('ves') && lower.length > 4) nounStemCandidates.push(lower.slice(0, -3) + 'f', lower.slice(0, -3) + 'fe');
        if (lower.endsWith('es') && lower.length > 3) nounStemCandidates.push(lower.slice(0, -2));
        if (lower.endsWith('s') && lower.length > 3) nounStemCandidates.push(lower.slice(0, -1));

        for (const candidate of nounStemCandidates) {
            const match = this.rawLookupWord(candidate);
            if (match) {
                return {
                    word: match.word || candidate,
                    originalWord: clean,
                    isInflected: true,
                    inflectionType: '복수형',
                    pos: match.pos || '[명]',
                    meaning: `${match.meaning} (${clean}의 단수형)`,
                    isPolysemy: match.isPolysemy || false,
                    senses: match.senses || null
                };
            }
        }

        // 4. 형태소 및 품사 도우미 기반 기본 추정
        const fallbackPos = window.posHelper ? window.posHelper.standardizePos('', clean, '') : '[명]';
        return {
            word: clean,
            originalWord: clean,
            isInflected: false,
            pos: fallbackPos,
            meaning: ''
        };
    }

    /**
     * 지문 속 단어 또는 교재 예문 속 단어 클릭 시 인스펙터 팝오버 오픈
     */
    openWordInspector(cleanWord, sentenceNumOrEn, customSentenceKo = '') {
        if (!cleanWord) return;
        const foundInfo = this.findWordMeaning(cleanWord);
        const displayWord = (foundInfo && foundInfo.word) ? foundInfo.word : cleanWord;
        this.inspectingWord = displayWord;
        this.inspectingOriginalWord = cleanWord;

        let sentenceEn = '';
        let sentenceKo = '';

        if (typeof sentenceNumOrEn === 'number') {
            this.inspectingSentenceNum = sentenceNumOrEn;
            const passage = this.getCurrentPassage();
            const sentenceObj = passage?.sentences?.find(s => s.num === sentenceNumOrEn);
            sentenceEn = sentenceObj ? sentenceObj.en : '';
            sentenceKo = sentenceObj ? sentenceObj.ko : '';
        } else {
            this.inspectingSentenceNum = null;
            sentenceEn = typeof sentenceNumOrEn === 'string' ? sentenceNumOrEn : '';
            sentenceKo = customSentenceKo || '';
        }

        this.inspectingSentenceEn = sentenceEn;
        this.inspectingSentenceKo = sentenceKo;

        const meaning = foundInfo ? foundInfo.meaning : '';
        const pos = foundInfo ? foundInfo.pos : (window.posHelper ? window.posHelper.standardizePos('', displayWord, '') : '[명]');

        const modal = document.getElementById('modal-reading-word-inspector');
        const wordEl = document.getElementById('inspector-word');
        const contextHint = document.getElementById('inspector-context-hint');
        const meaningInput = document.getElementById('inspector-meaning-input');
        const sentenceEnEl = document.getElementById('inspector-sentence-en');
        const sentenceKoEl = document.getElementById('inspector-sentence-ko');
        const saveText = document.getElementById('btn-inspector-save-text');

        if (wordEl) wordEl.textContent = displayWord;
        if (contextHint) {
            if (foundInfo && foundInfo.isInflected && foundInfo.word !== cleanWord) {
                contextHint.innerHTML = `<span class="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">💡 동사 원형 표기 (본문 형태: ${cleanWord})</span>`;
            } else if (foundInfo && (foundInfo.isPolysemy || foundInfo.meaning?.includes('①'))) {
                contextHint.innerHTML = `<span class="inline-flex items-center gap-1 text-[11px] font-sans font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md">🌟 다의어 (Polysemy) 상세 정의 완비</span>`;
            } else {
                contextHint.textContent = '지문/예문 문맥 단어 클릭 • 원클릭 영단어 사전 연동';
            }
        }
        this.setInspectorPos(pos);

        if (meaningInput) {
            meaningInput.value = meaning;
            if (!meaning) {
                meaningInput.placeholder = `'${displayWord}'의 한글 뜻을 직접 입력하세요...`;
            }
        }
        if (sentenceEnEl) sentenceEnEl.textContent = sentenceEn ? `"${sentenceEn}"` : '';
        if (sentenceKoEl) sentenceKoEl.textContent = sentenceKo ? `해석: ${sentenceKo}` : '';

        // 다의어(Polysemy) 뜻별 1:1 맞춤 실전 예문 및 해석 카드 동적 렌더링
        const polyWrap = document.getElementById('inspector-polysemy-examples-wrap');
        const polyList = document.getElementById('inspector-polysemy-examples-list');
        const polyCount = document.getElementById('inspector-polysemy-count');

        const polySenses = (foundInfo && foundInfo.senses) || (typeof POLYSEMY_MASTER_DICT !== 'undefined' && POLYSEMY_MASTER_DICT[displayWord.toLowerCase()]?.senses) || null;

        if (polyWrap && polyList) {
            if (polySenses && Array.isArray(polySenses) && polySenses.length > 0) {
                if (polyCount) polyCount.textContent = `총 ${polySenses.length}개 뜻별 예문`;
                polyList.innerHTML = polySenses.map((s) => {
                    const badgeClass = s.pos.includes('동') ? 'bg-emerald-100 text-emerald-800 border-emerald-200' :
                                       s.pos.includes('형') ? 'bg-amber-100 text-amber-800 border-amber-200' :
                                       s.pos.includes('부') ? 'bg-slate-100 text-slate-700 border-slate-200' :
                                       s.pos.includes('숙') ? 'bg-purple-100 text-purple-800 border-purple-200' :
                                       'bg-blue-100 text-blue-800 border-blue-200';
                    const safeEn = (s.en || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
                    return `
                        <div class="p-2.5 rounded-xl bg-white border border-purple-200/90 shadow-2xs space-y-1.5 hover:border-purple-400 hover:shadow-xs transition-all">
                            <div class="flex items-center justify-between gap-1.5">
                                <div class="flex items-center gap-1.5 flex-wrap">
                                    <span class="font-bold text-purple-800 font-mono text-xs">${s.num}</span>
                                    <span class="px-1.5 py-0.5 rounded text-[10px] font-bold border ${badgeClass}">${s.pos}</span>
                                    <span class="font-bold text-slate-900 text-xs">${s.def}</span>
                                </div>
                                <button type="button" class="p-1 rounded-md text-purple-600 hover:text-purple-900 hover:bg-purple-100 transition-colors cursor-pointer shrink-0" title="이 예문 원어민 발음 듣기" onclick="event.stopPropagation(); window.readingEngine.playSentenceAudio('${safeEn}')">
                                    <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                                </button>
                            </div>
                            <div class="pl-2 border-l-2 border-purple-400 space-y-0.5">
                                <p class="font-serif italic text-slate-800 text-xs leading-relaxed">"${s.en}"</p>
                                <p class="text-[11px] text-slate-600 font-sans leading-tight">${s.ko}</p>
                            </div>
                        </div>
                    `;
                }).join('');
                polyWrap.classList.remove('hidden');
            } else {
                polyWrap.classList.add('hidden');
                polyList.innerHTML = '';
            }
        }

        // 이미 단어장에 보관 중인지 확인
        const isAlreadySaved = window.storage && window.storage.words && window.storage.words.some(w => w.word && w.word.toLowerCase() === displayWord.toLowerCase());
        if (saveText) {
            if (isAlreadySaved) {
                saveText.textContent = '✓ 이미 단어 사전에 보관 중 (다시 저장 가능)';
            } else {
                saveText.textContent = '단어 사전에 추가하기';
            }
        }

        if (modal) modal.classList.remove('hidden');

        // 여성 원어민 미국식 발음 자동 청취
        if (window.tts) {
            window.tts.speak(displayWord, 'en-US');
        }

        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 인스펙터 품사 직접 변경 및 UI 뱃지/버튼 활성화 동기화
     */
    setInspectorPos(pos) {
        this.inspectingPos = pos || '[명]';
        const posEl = document.getElementById('inspector-pos');
        if (posEl) {
            posEl.textContent = this.inspectingPos;
            const badgeColor = window.posHelper ? window.posHelper.getBadgeColor(this.inspectingPos) : 'bg-blue-100 text-blue-900 border-blue-200';
            posEl.className = `px-2 py-0.5 rounded-md font-mono text-xs font-bold border transition-all ${badgeColor}`;
        }
        document.querySelectorAll('.inspector-pos-btn').forEach(btn => {
            const btnPos = btn.getAttribute('data-pos');
            if (btnPos === this.inspectingPos) {
                btn.classList.add('ring-2', 'ring-indigo-600', 'font-black', 'scale-105', 'shadow-xs');
            } else {
                btn.classList.remove('ring-2', 'ring-indigo-600', 'font-black', 'scale-105', 'shadow-xs');
            }
        });
    }

    closeWordInspector() {
        const modal = document.getElementById('modal-reading-word-inspector');
        if (modal) modal.classList.add('hidden');
    }

    playInspectorAudio(accent = 'en-US') {
        if (!this.inspectingWord || !window.tts) return;
        window.tts.speak(this.inspectingWord, accent);
    }

    playSentenceAudio(sentence, accent = 'en-US') {
        if (!sentence || !window.tts) return;
        window.tts.speak(sentence, accent);
    }

    saveInspectorWordToDictionary() {
        if (!this.inspectingWord || !window.storage) return;

        const meaningInput = document.getElementById('inspector-meaning-input');
        const meaningVal = meaningInput ? meaningInput.value.trim() : '';
        const passage = this.getCurrentPassage();
        const sentenceObj = this.inspectingSentenceNum ? passage?.sentences?.find(s => s.num === this.inspectingSentenceNum) : null;

        const exampleEn = sentenceObj ? sentenceObj.en : (this.inspectingSentenceEn || (passage ? passage.sentences[0]?.en || '' : ''));
        const exampleKo = sentenceObj ? sentenceObj.ko : (this.inspectingSentenceKo || (passage ? passage.sentences[0]?.ko || '' : ''));

        const newWord = {
            id: 'reading_vocab_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
            word: this.inspectingWord,
            meaning: meaningVal || (passage ? `지문 [${passage.title}] 문맥 어휘` : '문맥 어휘'),
            partOfSpeech: this.inspectingPos || (window.posHelper ? window.posHelper.standardizePos('', this.inspectingWord, meaningVal) : '[명]'),
            example: exampleEn,
            exampleMeaning: exampleKo,
            level: (passage?.grade === '예비중' || passage?.grade === '중1' || passage?.grade === '중2') ? 'middle' : 'high',
            tag: passage ? `[독해 추가] ${passage.title}` : '[문맥 어휘 추가]',
            planDate: window.storage.getTodayDateString(),
            nextReviewDate: window.storage.getTodayDateString(),
            createdAt: Date.now(),
            stage: 1,
            reviewCount: 0,
            correctCount: 0,
            wrongCount: 0,
            isWeak: false,
            isCustomWord: true
        };

        window.storage.words = [newWord, ...window.storage.words];
        window.storage.saveWords();

        if (window.dictionaryEngine && window.dictionaryEngine.render) {
            window.dictionaryEngine.render();
        }
        if (window.plannerEngine && window.plannerEngine.render) {
            window.plannerEngine.render();
        }

        const saveText = document.getElementById('btn-inspector-save-text');
        if (saveText) saveText.textContent = '✓ 단어 사전에 추가 완료!';

        this.showToast(`'${this.inspectingWord}' 단어가 단어 사전에 성공적으로 추가되었습니다!`);

        setTimeout(() => {
            this.closeWordInspector();
        }, 700);
    }

    /**
     * 본문 단어 실시간 플로팅 툴팁 (Floating Popover) 노출
     */
    showFloatingWordTooltip(e, cleanWord, sentenceNumOrEn, customSentenceKo = '') {
        if (!cleanWord) return;
        if (e && e.stopPropagation) e.stopPropagation();

        const tooltip = document.getElementById('reading-floating-word-tooltip');
        if (!tooltip) return;

        const foundInfo = this.findWordMeaning(cleanWord);
        const displayWord = (foundInfo && foundInfo.word) ? foundInfo.word : cleanWord;
        const wordEl = document.getElementById('rf-tooltip-word');
        const posEl = document.getElementById('rf-tooltip-pos');
        const meaningEl = document.getElementById('rf-tooltip-meaning');
        const ttsBtn = document.getElementById('rf-tooltip-tts-btn');
        const addBtn = document.getElementById('rf-tooltip-add-btn');
        const detailBtn = document.getElementById('rf-tooltip-detail-btn');

        if (wordEl) {
            if (foundInfo && foundInfo.isInflected && foundInfo.word !== cleanWord) {
                wordEl.innerHTML = `<span>${foundInfo.word}</span> <span class="text-[10px] text-amber-200/90 font-sans font-normal ml-1">(${cleanWord}의 원형)</span>`;
            } else {
                wordEl.textContent = displayWord;
            }
        }
        if (posEl) {
            posEl.textContent = foundInfo ? foundInfo.pos : '[단어]';
            if (foundInfo && (foundInfo.isPolysemy || foundInfo.meaning?.includes('①'))) {
                posEl.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-900/90 text-purple-200 border border-purple-500/60';
            } else {
                posEl.className = 'px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-900/80 text-blue-200 border border-blue-700/60';
            }
        }
        if (meaningEl) {
            if (foundInfo && foundInfo.meaning && foundInfo.meaning.includes('①')) {
                const items = foundInfo.meaning.split(/(?=[①②③④⑤⑥])/g).map(s => s.trim()).filter(Boolean);
                meaningEl.innerHTML = `<div class="space-y-1">${items.map(it => `<div class="leading-snug text-slate-100">${it}</div>`).join('')}</div>`;
            } else {
                meaningEl.textContent = foundInfo ? foundInfo.meaning : '사전 정의 탐색 중...';
            }
        }

        if (ttsBtn) {
            ttsBtn.onclick = (ev) => {
                ev.stopPropagation();
                if (window.tts) window.tts.speak(displayWord);
            };
        }

        const sentenceEn = typeof sentenceNumOrEn === 'string' ? sentenceNumOrEn : (typeof sentenceNumOrEn === 'number' ? (this.getCurrentPassage()?.sentences?.find(s => s.num === sentenceNumOrEn)?.en || '') : '');
        const sentenceKo = customSentenceKo || (typeof sentenceNumOrEn === 'number' ? (this.getCurrentPassage()?.sentences?.find(s => s.num === sentenceNumOrEn)?.ko || '') : '');

        if (addBtn) {
            addBtn.innerHTML = '<i data-lucide="bookmark-plus" class="w-3.5 h-3.5"></i> <span>내 단어장에 담기</span>';
            addBtn.className = 'flex-1 py-1.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer';
            addBtn.onclick = (ev) => {
                ev.stopPropagation();
                this.quickAddWordToVoca(cleanWord, foundInfo, sentenceEn, sentenceKo);
            };
        }

        if (detailBtn) {
            detailBtn.onclick = (ev) => {
                ev.stopPropagation();
                this.hideFloatingTooltip();
                this.openWordInspector(cleanWord, sentenceNumOrEn, customSentenceKo);
            };
        }

        tooltip.classList.remove('hidden');

        // 위치 계산
        const rect = e.currentTarget.getBoundingClientRect();
        const tooltipWidth = 320;
        const tooltipHeight = 140;

        let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
        if (left < 10) left = 10;
        if (left + tooltipWidth > window.innerWidth - 10) {
            left = window.innerWidth - tooltipWidth - 10;
        }

        let top = rect.top - tooltipHeight - 12;
        if (top < 10) {
            top = rect.bottom + 12;
        }

        tooltip.style.left = `${Math.round(left)}px`;
        tooltip.style.top = `${Math.round(top)}px`;

        if (window.lucide) window.lucide.createIcons();
    }

    hideFloatingTooltip() {
        const tooltip = document.getElementById('reading-floating-word-tooltip');
        if (tooltip) tooltip.classList.add('hidden');
    }

    quickAddWordToVoca(cleanWord, foundInfo, customSentenceEn = '', customSentenceKo = '') {
        const word = (foundInfo && foundInfo.word) ? foundInfo.word : cleanWord;
        const pos = foundInfo ? foundInfo.pos : '[명]';
        const meaning = foundInfo ? foundInfo.meaning : '';
        const currentPassage = this.getCurrentPassage();
        const sentenceObj = currentPassage?.sentences?.[0];
        const exEn = customSentenceEn || foundInfo?.example_en || sentenceObj?.en || '';
        const exKo = customSentenceKo || foundInfo?.example_ko || sentenceObj?.ko || '';

        if (window.storage && window.storage.addWord) {
            window.storage.addWord({
                word: word,
                partOfSpeech: pos,
                meaning: meaning,
                example: exEn,
                exampleMeaning: exKo,
                tag: customSentenceEn ? '플래시카드 예문 어휘' : '독해 본문 어휘'
            });
        }

        const addBtn = document.getElementById('rf-tooltip-add-btn');
        if (addBtn) {
            addBtn.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-white"></i> <span>수납 완료!</span>';
            addBtn.className = 'flex-1 py-1.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all';
        }

        this.showToast(`✨ '${word}' 단어가 내 단어장에 추가되었습니다!`);

        if (window.lucide) window.lucide.createIcons();
    }

    /**
     * 수능 40번 문단 요약 빈칸 완성 위젯 렌더링
     */
    renderSummaryBlankClinic(passage) {
        const container = document.getElementById('reading-summary-blank-container');
        if (!container) return;

        const clinic = passage?.summaryBlankClinic;
        if (!clinic) {
            container.classList.add('hidden');
            return;
        }
        container.classList.remove('hidden');

        const optAHtml = clinic.blankA.options.map(opt => `<option value="${opt}">${opt}</option>`).join('');
        const optBHtml = clinic.blankB.options.map(opt => `<option value="${opt}">${opt}</option>`).join('');

        let renderedSummary = clinic.summaryText
            .replace('(A)________', `<select id="sb-select-a" class="mx-1 px-2.5 py-1 rounded-lg bg-white border border-indigo-300 text-indigo-950 font-bold text-xs outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs">${optAHtml}</select>`)
            .replace('(B)________', `<select id="sb-select-b" class="mx-1 px-2.5 py-1 rounded-lg bg-white border border-indigo-300 text-indigo-950 font-bold text-xs outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs">${optBHtml}</select>`);

        container.innerHTML = `
            <div class="flex items-center justify-between pb-2 border-b border-indigo-200/80">
                <div class="flex items-center gap-2">
                    <span class="p-1 rounded-lg bg-indigo-600 text-white"><i data-lucide="file-check" class="w-4 h-4"></i></span>
                    <h4 class="font-serif font-black text-sm text-indigo-950">수능 40번 문단 요약 빈칸 완성 클리닉</h4>
                </div>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-100 text-indigo-900 border border-indigo-300">1등급 요약 추론</span>
            </div>
            <p class="font-serif text-slate-800 text-xs sm:text-sm leading-relaxed py-1">
                ${renderedSummary}
            </p>
            <div id="sb-feedback-box" class="hidden p-3 rounded-xl text-xs space-y-1"></div>
            <div class="pt-1 flex flex-wrap items-center justify-between gap-2">
                <span class="text-[11px] text-slate-400 font-mono">본문 핵심 논지를 1문장으로 압축하는 수능 핵심 유형</span>
                <button type="button" id="btn-check-summary-blank" onclick="window.readingEngine.checkSummaryBlankAnswer()" class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer">
                    <i data-lucide="check" class="w-3.5 h-3.5"></i>
                    <span>요약문 정답 확인</span>
                </button>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
    }

    checkSummaryBlankAnswer() {
        const passage = this.getCurrentPassage();
        const clinic = passage?.summaryBlankClinic;
        if (!clinic) return;

        const selA = document.getElementById('sb-select-a')?.value;
        const selB = document.getElementById('sb-select-b')?.value;
        const isCorrect = (selA === clinic.blankA.correct && selB === clinic.blankB.correct);

        const fbBox = document.getElementById('sb-feedback-box');
        if (!fbBox) return;

        fbBox.classList.remove('hidden');
        if (isCorrect) {
            fbBox.className = 'p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs space-y-1.5 text-emerald-950 animate-fadeIn';
            fbBox.innerHTML = `
                <div class="font-bold flex items-center gap-1 text-emerald-900">
                    <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
                    <span>완벽합니다! 1등급 요약문 정답 (A: ${clinic.blankA.correct}, B: ${clinic.blankB.correct})</span>
                </div>
                <p class="text-slate-700 text-[11px] leading-relaxed">${clinic.koreanSummary}</p>
                <p class="text-slate-500 text-[11px]">${clinic.explanation}</p>
            `;
        } else {
            fbBox.className = 'p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-xs space-y-1.5 text-rose-950 animate-fadeIn';
            fbBox.innerHTML = `
                <div class="font-bold flex items-center gap-1 text-rose-900">
                    <i data-lucide="alert-circle" class="w-4 h-4 text-rose-600"></i>
                    <span>다시 검토해 보세요! 정답은 (A: <strong>${clinic.blankA.correct}</strong>, B: <strong>${clinic.blankB.correct}</strong>) 입니다.</span>
                </div>
                <p class="text-slate-700 text-[11px] leading-relaxed">${clinic.koreanSummary}</p>
                <p class="text-slate-500 text-[11px]">${clinic.explanation}</p>
            `;
        }
        if (window.lucide) window.lucide.createIcons();
    }

    showToast(message) {
        const container = document.getElementById('global-toast-container') || document.body;
        const toast = document.createElement('div');
        toast.className = 'px-4 py-3 rounded-2xl bg-slate-900/95 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 border border-slate-700 pointer-events-auto animate-in slide-in-from-bottom-5 duration-200';
        toast.innerHTML = `
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-400 shrink-0"></i>
            <span>${message}</span>
        `;
        container.appendChild(toast);
        if (window.lucide) window.lucide.createIcons();

        setTimeout(() => {
            toast.classList.add('opacity-0', 'transition-opacity', 'duration-300');
            setTimeout(() => toast.remove(), 350);
        }, 2500);
    }

}


// 전역 인스턴스
window.readingEngine = new ReadingEngine();
