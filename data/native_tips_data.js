/**
 * Veritas English - 보카북 전용 [원어민 꿀팁 (Native Speaker's Secret Tip)] 데이터베이스
 * 1. 뉘앙스 차이 (Nuance Distinction: 같은 뜻, 다른 상황)
 * 2. 원어민 실전 구어 (Real Native English: 교과서 단어 대신 현지인이 입에 달고 사는 표현)
 * 3. 자연스러운 콜로케이션 & 콩글리시 탈출 (Natural Collocation & Pitfalls)
 * 4. 상황별 실전 스피킹 한마디 (Situational Speaking Tips)
 */

const NATIVE_TIPS_DATABASE = {
  // =========================================================================
  // 1. 중등 내신 & 수능 기본 빈출 어휘 꿀팁 (Nuance & Real Spoken)
  // =========================================================================
  "curious": {
    type: "nuance",
    tag: "뉘앙스 차이",
    title: "curious vs. nosy",
    tip: "<b>curious</b>는 순수한 '지적 호기심'을 뜻하지만, 남의 사생활을 캐묻는 건 부정적인 <b>nosy</b>(참견하기 좋아하는)를 씁니다. (예: Don't be so nosy!)"
  },
  "invent": {
    type: "nuance",
    tag: "뉘앙스 차이",
    title: "invent vs. discover",
    tip: "<b>invent</b>는 세상에 없던 새로운 기계나 기술을 '발명'하는 것이고, <b>discover</b>는 이미 존재하던 대륙·행성·원리 등을 '발견'하는 것입니다."
  },
  "discover": {
    type: "real_native",
    tag: "원어민 실전 표현",
    title: "알아내다 = find out",
    tip: "원어민들은 일상 회화에서 격식 있는 discover 대신 <b>find out</b>이나 <b>figure out</b>을 훨씬 자주 씁니다. (예: I finally figured it out!)"
  },
  "friendly": {
    type: "collocation",
    tag: "전치사 짝꿍",
    title: "friendly to vs. with",
    tip: "누구에게 '친절하게 대하다'는 <b>friendly to</b>, 누구와 '두루 친하게 지내다'는 <b>friendly with</b>를 씁니다. (예: She is friendly with everyone.)"
  },
  "culture": {
    type: "nuance",
    tag: "문화적 뉘앙스",
    title: "culture shock & pop culture",
    tip: "원어민들은 새로운 환경에서 겪는 멘붕을 <b>culture shock</b>이라 하고, 대중가요·영화·트렌드를 통틀어 <b>pop culture</b>라고 부릅니다."
  },
  "creative": {
    type: "real_native",
    tag: "원어민 실전 구어",
    title: "창의적이다 = think outside the box",
    tip: "원어민들은 틀에 박히지 않고 창의적으로 생각할 때 <b>think outside the box</b>라는 관용구를 입에 달고 삽니다."
  },
  "protect": {
    type: "nuance",
    tag: "뉘앙스 차이",
    title: "protect vs. defend",
    tip: "<b>protect</b>는 위험으로부터 미리 '보호·예방'하는 뉘앙스이고, <b>defend</b>는 이미 닥친 공격이나 비판에 '맞서 방어'하는 뉘앙스입니다."
  },
  "prepare": {
    type: "collocation",
    tag: "전치사 주의",
    title: "prepare vs. prepare for",
    tip: "<b>prepare dinner</b>는 음식을 '직접 만들다'이고, <b>prepare for the exam</b>은 시험을 위해 '대비/공부하다'입니다. for의 유무로 뜻이 완전히 바뀝니다!"
  },
  "improve": {
    type: "real_native",
    tag: "원어민 실전 구어",
    title: "실력이 늘다 = level up / step up",
    tip: "일상에서 영어 실력이나 능력이 부쩍 늘었을 때 원어민들은 <b>level up my English</b> 또는 <b>step up my game</b>을 즐겨 씁니다."
  },
  "challenge": {
    type: "nuance",
    tag: "뉘앙스 주의",
    title: "challenge는 '도전'보다 '난관·어려움'!",
    tip: "한국어로는 긍정적인 '새로운 도전'으로 쓰이지만, 영어 <b>challenge</b>는 종종 '해결하기 힘든 까다로운 난관(tough problem)'을 완곡하게 부르는 말입니다."
  },
  "habit": {
    type: "nuance",
    tag: "뉘앙스 차이",
    title: "habit vs. routine vs. custom",
    tip: "개인의 무의식적 버릇은 <b>habit</b>, 의식적으로 지키는 일과는 <b>routine</b>, 사회나 국가의 오랜 관습은 <b>custom</b>입니다."
  },
  "practice": {
    type: "real_native",
    tag: "원어민 명언",
    title: "Practice makes perfect!",
    tip: "원어민들이 연습의 중요성을 강조할 때 가장 애용하는 불멸의 속담입니다. '연습이 완벽을 만든다!'"
  },
  "express": {
    type: "real_native",
    tag: "감정 표현 구어",
    title: "속마음을 털어놓다 = open up",
    tip: "친구에게 감정을 진솔하게 표현하고 털어놓을 때는 express feelings 대신 <b>open up to someone</b>을 많이 씁니다."
  },
  "ordinary": {
    type: "real_native",
    tag: "원어민 실전 구어",
    title: "평범한 사람 = average Joe",
    tip: "원어민들은 평범한 일반인을 가리킬 때 친근하게 <b>average Joe</b>(남성) 또는 <b>plain Jane</b>(여성)이라고 부릅니다."
  },
  "volunteer": {
    type: "collocation",
    tag: "전치사 & 품사",
    title: "volunteer for vs. to",
    tip: "명사가 올 땐 <b>volunteer for</b> (the event), 동사가 올 땐 <b>volunteer to</b> (help)를 씁니다. 명사/동사 모두 가능한 핵심 어휘입니다."
  },
  "celebrate": {
    type: "real_native",
    tag: "원어민 파티 구어",
    title: "한턱 쏘며 축하하다 = throw a party",
    tip: "원어민들은 축하 파티를 열 때 hold a party보다 <b>throw a party</b>를 압도적으로 많이 씁니다."
  },

  // =========================================================================
  // 2. 수능 킬러 & 고난도 어휘 꿀팁 (Killer Nuance & Polysemy)
  // =========================================================================
  "address": {
    type: "nuance",
    tag: "수능 킬러 다의어",
    title: "address = 주소? NO! '해결하다'",
    tip: "수능 독해에서 address가 동사로 쓰이면 90% 확률로 <b>'문제를 다루다, 해결하다(solve, tackle)'</b> 또는 '연설하다'라는 뜻입니다!"
  },
  "appreciate": {
    type: "nuance",
    tag: "수능 킬러 3대 뜻",
    title: "감사하다 / 감상하다 / 진가를 인정하다",
    tip: "① I appreciate your help (감사) / ② appreciate art (예술 감상) / ③ appreciate one's effort (노력의 가치를 제대로 알아주다). 문맥을 꼭 확인하세요!"
  },
  "compromise": {
    type: "nuance",
    tag: "수능 킬러 뉘앙스",
    title: "타협하다 vs. (원칙·안전을) 훼손하다",
    tip: "명사로는 '타협'이지만, 동사로 <b>compromise security/health</b>가 나오면 '안전/건강을 위태롭게 하다, 손상시키다'라는 킬러 의미로 출제됩니다."
  },
  "observe": {
    type: "nuance",
    tag: "혼동 다의어",
    title: "관찰하다 vs. (법·규칙을) 준수하다",
    tip: "<b>observe birds</b>는 관찰하는 것이지만, <b>observe the law / rule</b>은 법과 규칙을 철저히 '지키다(obey)'는 뜻입니다."
  },
  "critical": {
    type: "nuance",
    tag: "문맥 판단",
    title: "비판적인 vs. 극도로 중요한(치명적인)",
    tip: "critical thinking은 '비판적 사고'이지만, a critical factor는 '결정적으로 중요한 요인'입니다. 문맥에 따라 180도 다릅니다."
  },
  "subject": {
    type: "nuance",
    tag: "수능 빈출",
    title: "be subject to = ~의 영향을 받기 쉽다",
    tip: "과목, 주제 외에도 <b>Prices are subject to change</b>처럼 쓰이면 '가격이 변동될 수 있다'는 비즈니스/수능 단골 숙어입니다."
  },
  "account": {
    type: "collocation",
    tag: "필수 숙어",
    title: "account for = 설명하다 & (비율을) 차지하다",
    tip: "수능 도표 문제에서 '전체의 40%를 차지하다'는 <b>account for 40%</b>로 무조건 출제되는 최빈출 표현입니다."
  },
  "charge": {
    type: "collocation",
    tag: "핵심 구문",
    title: "in charge of = ~을 책임지는/담당하는",
    tip: "요금 청구, 충전 외에도 <b>Who is in charge of this project?</b>처럼 '총책임자'를 물을 때 원어민이 매일 쓰는 표현입니다."
  },

  // =========================================================================
  // 3. 트렌드 & 실전 구어 (Tech, Slang, Phrasal Verbs)
  // =========================================================================
  "algorithm": {
    type: "real_native",
    tag: "유튜브·SNS 신조어",
    title: "알고리즘의 간택을 받다 = blessed by the algorithm",
    tip: "유튜브나 틱톡에서 조회수가 폭발했을 때 원어민 크리에이터들은 <b>The algorithm blessed me!</b>라고 유쾌하게 표현합니다."
  },
  "innovative": {
    type: "real_native",
    tag: "테크 스타트업 구어",
    title: "혁신적이다 = game-changer / groundbreaking",
    tip: "실리콘밸리에서는 innovative 대신 <b>This AI tool is a total game-changer!</b>(완전히 판도를 바꾸는 것)라는 표현을 입에 달고 삽니다."
  },
  "call it a day": {
    type: "real_native",
    tag: "퇴근 필수 표현",
    title: "오늘은 여기까지 하고 퇴근합시다!",
    tip: "직장이나 스터디에서 하루 일과를 끝마칠 때 미국인들이 100% 쓰는 표현: <b>Let's call it a day!</b>"
  },
  "hang out": {
    type: "nuance",
    tag: "play와의 차이",
    title: "어른은 play 대신 hang out!",
    tip: "성인이 친구와 놀 때 'play with friends'라고 하면 장난감 갖고 노는 느낌입니다. 원어민은 무조건 <b>hang out with friends</b>를 씁니다."
  },
  "chill": {
    type: "real_native",
    tag: "원어민 만능 슬랭",
    title: "chill의 3가지 얼굴",
    tip: "① 쉬다(Let's chill) / ② 성격이 쿨하다(He is so chill) / ③ 진정해(Chill out!). 미국 10대~30대의 최애 단어입니다."
  },
  "hit the nail on the head": {
    type: "real_native",
    tag: "원어민 관용구",
    title: "정곡을 찌르다 / 딱 맞추다",
    tip: "상대방의 말이 소름 돋게 정확할 때: <b>You hit the nail on the head!</b> (완전 정곡을 찔렀어!)"
  },
  "under the weather": {
    type: "real_native",
    tag: "컨디션 표현",
    title: "몸이 찌뿌둥하고 감기 기운이 있을 때",
    tip: "원어민들은 아파서 끙끙 앓기 직전 컨디션 난조일 때 I am sick보다 <b>I'm feeling a bit under the weather</b>를 세련되게 씁니다."
  },
  "ghost": {
    type: "real_native",
    tag: "최신 SNS 슬랭",
    title: "ghosting = 갑자기 연락 두절(잠수 타기)",
    tip: "메시지를 읽고 답장 없이 잠수를 타는 행위를 동사로 <b>He ghosted me!</b>(그 사람 나한테 잠수 탔어)라고 합니다."
  },

  // =========================================================================
  // 4. 미국 교과서 학술 어휘 (Tier 2 Academic Nuance)
  // =========================================================================
  "hypothesis": {
    type: "nuance",
    tag: "학술 영영 뉘앙스",
    title: "hypothesis vs. theory",
    tip: "<b>hypothesis</b>는 실험 전 세우는 '잠정적인 가설'이고, 수많은 실험을 통해 증명된 확립된 체계는 <b>theory</b>(이론)입니다."
  },
  "analyze": {
    type: "collocation",
    tag: "학술 논문 빈출",
    title: "analyze data in depth",
    tip: "학술 에세이에서는 단순히 analyze만 쓰기보다 <b>analyze the findings in detail</b>(심층 분석하다)처럼 부사와 짝지어 씁니다."
  },
  "evidence": {
    type: "nuance",
    tag: "문법 주의 (셀 수 없음)",
    title: "an evidence는 틀린 영어!",
    tip: "evidence는 셀 수 없는 불가산 명사입니다. <b>an evidence (X)</b> → <b>a piece of evidence (O)</b> 또는 그냥 <b>evidence</b>로 써야 감점을 피합니다."
  },
  "consequence": {
    type: "nuance",
    tag: "뉘앙스 차이",
    title: "result vs. consequence",
    tip: "result는 중립적인 결과지만, <b>consequence</b>는 주로 행동에 따른 '부정적인 여파나 대가'를 암시합니다. (예: face the consequences)"
  },
  "factor": {
    type: "collocation",
    tag: "학술 콜로케이션",
    title: "decisive factor = 결정적 요인",
    tip: "시험이나 에세이에서 성공/실패의 가장 큰 이유를 밝힐 때 <b>a key factor</b> 또는 <b>a decisive factor</b>를 즐겨 사용합니다."
  },

  // =========================================================================
  // 5. 실전 여행 영어 꿀팁 (Global Travel Survival)
  // =========================================================================
  "boarding": {
    type: "situational",
    tag: "공항 실전 팁",
    title: "탑승 시작 = Now boarding",
    tip: "게이트 앞에서 <b>Now boarding Group 1</b> 방송이 나오면 해당 그룹부터 탑승하라는 안내입니다. 보딩패스의 Zone 번호를 확인하세요!"
  },
  "reservation": {
    type: "situational",
    tag: "호텔/식당 체크인",
    title: "예약 확인: I have a reservation under [이름]",
    tip: "호텔이나 레스토랑 프론트에서 예약자명을 댈 때는 <b>I have a reservation under Minsoo Kim</b>이라고 말하는 것이 가장 자연스럽습니다."
  },
  "transit": {
    type: "situational",
    tag: "환승 주의사항",
    title: "Transfer vs. Transit vs. Layover",
    tip: "비행기를 갈아타는 것은 <b>Transfer</b>, 같은 비행기가 기름 넣느라 잠시 머무는 건 <b>Transit</b>, 경유지에서 반나절 머무는 건 <b>Layover</b>입니다."
  },
  "baggage": {
    type: "situational",
    tag: "수하물 분실 신고",
    title: "수하물 찾는 곳 = Baggage Claim",
    tip: "공항 표지판의 <b>Baggage Claim</b>을 따라가면 짐을 찾을 수 있습니다. 짐이 안 나왔다면 <b>Lost & Found</b> 데스크로 직행하세요!"
  },
  "check-out": {
    type: "situational",
    tag: "호텔 체크아웃 꿀팁",
    title: "짐 좀 맡아주실 수 있나요? = Can you hold my bags?",
    tip: "체크아웃 후 비행기 시간까지 호텔에 짐을 맡길 때: <b>Could you hold my luggage until 4 PM?</b>"
  },
  "receipt": {
    type: "nuance",
    tag: "발음 주의!",
    title: "receipt에서 p는 묵음 [ri-seet]!",
    tip: "영수증 <b>receipt</b>의 'p'는 발음하지 않습니다! '리셉트'가 아니라 <b>'리시-트'</b>로 발음해야 원어민이 찰떡같이 알아듣습니다."
  },
  "bill": {
    type: "situational",
    tag: "식당 계산 매너",
    title: "계산서 주세요 = Check, please!",
    tip: "미국 식당에서는 자리에서 손을 살짝 들고 <b>Check, please!</b> 또는 <b>Could we get the bill?</b>이라고 부르면 웨이터가 영수증을 가져다줍니다."
  },

  // =========================================================================
  // 6. 감정 묘사 & 영미 문학 어휘 꿀팁 (Literary & Emotions)
  // =========================================================================
  "furious": {
    type: "nuance",
    tag: "감정 강도 스펙트럼",
    title: "angry < furious < livid",
    tip: "화난 정도: <b>annoyed</b>(짜증남) → <b>angry</b>(화남) → <b>furious</b>(격노함) → <b>livid</b>(얼굴이 창백해질 정도로 극대노함) 순으로 강해집니다."
  },
  "anxious": {
    type: "nuance",
    tag: "전치사로 바뀌는 뜻",
    title: "anxious about (불안) vs. anxious to (열망)",
    tip: "<b>anxious about</b>은 '불안하고 걱정되는' 것이지만, <b>anxious to do</b>는 '~하기를 몹시 열망하는(eager to)' 긍정적 간절함이 됩니다!"
  },
  "nostalgia": {
    type: "nuance",
    tag: "문학적 뉘앙스",
    title: "달콤씁쓸한 옛 추억의 그리움",
    tip: "단순히 옛날을 그리워하는 것이 아니라, 돌아갈 수 없는 시절에 대한 아련하고 애틋한 감정을 담은 고급 문학 어휘입니다."
  },
  "sympathy": {
    type: "nuance",
    tag: "혼동 어휘",
    title: "sympathy vs. empathy",
    tip: "<b>sympathy</b>는 상대방의 처지를 안타깝게 여기는 '동정/연민'이고, <b>empathy</b>는 상대의 감정에 온전히 빙의하여 느끼는 '깊은 공감'입니다."
  },
  "bittersweet": {
    type: "real_native",
    tag: "인생 명언 표현",
    title: "달콤하면서도 씁쓸한 순간",
    tip: "졸업식이나 이별처럼 기쁘면서도 슬픈 복합적인 감정을 미국인들은 <b>It's such a bittersweet moment</b>라고 표현합니다."
  },

  // =========================================================================
  // 7. 심화 내신 & 테크 & 구동사 & 응급 실전 꿀팁
  // =========================================================================
  "anticipate": {
    type: "nuance",
    tag: "수능/고등 뉘앙스",
    title: "expect vs. anticipate",
    tip: "<b>expect</b>는 단순히 '일어날 거라고 예상'하는 것이고, <b>anticipate</b>는 예상하고 '미리 준비/대비책을 세우다'라는 뉘앙스가 포함됩니다."
  },
  "accommodate": {
    type: "nuance",
    tag: "고난도 다의어",
    title: "숙박시키다 vs. 요구를 들어주다",
    tip: "호텔에서 손님을 묵게 하는 것 외에도 <b>accommodate your request</b>처럼 쓰이면 '당신의 특별한 요구/부탁을 맞춰주다'라는 뜻입니다."
  },
  "prompt": {
    type: "real_native",
    tag: "테크·AI 필수 어휘",
    title: "신속한 vs. AI 입력 프롬프트",
    tip: "형용사로는 <b>prompt reply</b>(빠른 답변)이지만, 생성형 AI 시대에는 ChatGPT 등에 입력하는 '명령어/지시문'을 뜻합니다."
  },
  "hallucination": {
    type: "real_native",
    tag: "최신 AI 트렌드",
    title: "AI의 '그럴듯한 거짓말(환각)'",
    tip: "의학적으로는 환각이지만, 테크 업계에서는 AI가 사실이 아닌 가짜 정보를 그럴싸하게 지어내는 치명적 오류를 뜻합니다."
  },
  "figure out": {
    type: "nuance",
    tag: "구동사 뉘앙스",
    title: "find out vs. figure out",
    tip: "<b>find out</b>은 우연히 듣거나 알아낸 사실이지만, <b>figure out</b>은 머리를 굴리고 고민해서 '방법/원인을 알아내다'라는 뉘앙스입니다."
  },
  "work out": {
    type: "real_native",
    tag: "원어민 만능 구동사",
    title: "운동하다 vs. 일이 잘 풀리다",
    tip: "헬스장에서 운동할 때도 쓰지만, 문제가 잘 해결되었을 때 <b>Everything will work out!</b>(다 잘 풀릴 거야!)라고 위로할 때 매일 씁니다."
  },
  "kick off": {
    type: "real_native",
    tag: "원어민 회의/행사 구어",
    title: "시작하다 = kick off",
    tip: "축구 킥오프에서 유래하여, 중요한 프로젝트나 파티, 콘서트를 시작할 때 start 대신 <b>Let's kick off the meeting!</b>을 즐겨 씁니다."
  },
  "urgent care": {
    type: "situational",
    tag: "미국 병원 서바이벌 팁",
    title: "ER(응급실) vs. Urgent Care",
    tip: "미국에서 밤이나 주말에 가벼운 골절/열/감기는 수백만 원 나오는 <b>ER</b> 대신 <b>Urgent Care</b>(당일 진료 클리닉)로 가야 비용을 10분의 1로 아낍니다!"
  },
  "pain": {
    type: "nuance",
    tag: "통증 표현 구별법",
    title: "pain vs. ache vs. sore",
    tip: "날카로운 통증은 <b>sharp pain</b>, 둔하게 지속되는 통증은 <b>headache/stomachache</b>, 근육이 뻐근하거나 목이 칼칼할 땐 <b>sore throat/sore muscles</b>를 씁니다."
  }
};

// 글로벌 객체 등록
if (typeof window !== 'undefined') {
  window.NATIVE_TIPS_DATABASE = NATIVE_TIPS_DATABASE;
}
