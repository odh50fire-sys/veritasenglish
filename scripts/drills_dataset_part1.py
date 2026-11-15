# Comprehensive Drills Dataset for 70 Units (Drill 2 and Drill 3)
# Validated strictly against sentence substrings

DRILLS_EXTRA = {
    # -------------------------------------------------------------
    # LEVEL 1: 중1 문법 (8 Units)
    # -------------------------------------------------------------
    "lv1_u1": [
        {
            "id": "drill_2",
            "sentence": "Yesterday afternoon, several students was studying quietly in the school library.",
            "underlined": ["Yesterday", "several students", "was", "quietly"],
            "wrongIndex": 2,
            "correction": "were",
            "explanation": "주어가 복수명사(several students)이고 시제가 과거이므로 was를 were로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 1: be동사의 현재형·과거형] 출제 연계",
            "korean": "어제 오후, 몇몇 학생들이 학교 도서관에서 조용히 공부하고 있었다."
        },
        {
            "id": "drill_3",
            "sentence": "Does the famous novelist writes fascinating stories about ancient civilizations every year?",
            "underlined": ["Does", "famous novelist", "writes", "every year"],
            "wrongIndex": 2,
            "correction": "write",
            "explanation": "의문문 조동사 Does 뒤에는 주어 다음 반드시 일반동사의 원형(write)을 써야 합니다.",
            "conceptRef": "1단계 [공식 2: 일반동사 의문문 동사원형 규칙] 출제 연계",
            "korean": "그 유명한 소설가는 매년 고대 문명에 관한 매혹적인 이야기를 쓰는가?"
        }
    ],
    "lv1_u2": [
        {
            "id": "drill_2",
            "sentence": "During the winter vacation, many childs visited the science museum with their parents.",
            "underlined": ["During", "many", "childs", "with their"],
            "wrongIndex": 2,
            "correction": "children",
            "explanation": "child의 복수형은 불규칙 변화하여 children이 되어야 하며 childs는 잘못된 형태입니다.",
            "conceptRef": "1단계 [공식 1: 명사의 불규칙 복수형] 출제 연계",
            "korean": "겨울방학 동안 많은 아이들이 부모님과 함께 과학 박물관을 방문했다."
        },
        {
            "id": "drill_3",
            "sentence": "This silver smartphone is mine, but that blue tablet on the desk is her.",
            "underlined": ["smartphone", "is mine", "on the desk", "her"],
            "wrongIndex": 3,
            "correction": "hers",
            "explanation": "'그녀의 것'이라는 소유대명사가 필요한 자리이므로 her(소유격/목적격)를 hers로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 2: 인칭대명사의 격변화와 소유대명사] 출제 연계",
            "korean": "이 은색 스마트폰은 내 것이지만 책상 위의 파란색 태블릿은 그녀의 것이다."
        }
    ],
    "lv1_u3": [
        {
            "id": "drill_2",
            "sentence": "The nervous actor looked calmly before the curtains opened on the stage.",
            "underlined": ["nervous actor", "looked", "calmly", "on the stage"],
            "wrongIndex": 2,
            "correction": "calm",
            "explanation": "감각동사 look 뒤에는 주어의 상태를 설명하는 주격보어로 형용사 calm을 써야 합니다.",
            "conceptRef": "1단계 [공식 1: 형용사의 쓰임과 감각동사 보어] 출제 연계",
            "korean": "긴장한 배우는 무대의 커튼이 열리기 전 침착해 보였다."
        },
        {
            "id": "drill_3",
            "sentence": "She solved the difficult math problem very quick without any help from others.",
            "underlined": ["solved", "difficult", "very quick", "without any help"],
            "wrongIndex": 2,
            "correction": "very quickly",
            "explanation": "동사 solved를 수식하는 자리이므로 형용사 quick이 아닌 부사 quickly를 써야 합니다.",
            "conceptRef": "1단계 [공식 2: 부사의 역할과 형성 규칙] 출제 연계",
            "korean": "그녀는 다른 사람의 도움 없이 그 어려운 수학 문제를 매우 빠르게 풀었다."
        }
    ],
    "lv1_u4": [
        {
            "id": "drill_2",
            "sentence": "Why did the young student left the classroom before the lecture ended?",
            "underlined": ["Why", "did", "the young student", "left"],
            "wrongIndex": 3,
            "correction": "leave",
            "explanation": "과거시제 의문문 조동사 did 뒤에서는 본동사 과거형(left)이 아닌 원형(leave)을 써야 합니다.",
            "conceptRef": "1단계 [공식 1: 과거 의문사 의문문 동사원형 규칙] 출제 연계",
            "korean": "그 어린 학생은 강의가 끝나기 전에 왜 교실을 떠났는가?"
        },
        {
            "id": "drill_3",
            "sentence": "Where does your grandparents lives during the cold winter months?",
            "underlined": ["Where", "does", "your grandparents", "lives"],
            "wrongIndex": 1,
            "correction": "do",
            "explanation": "주어가 복수명사(your grandparents)이므로 3인칭 단수 조동사 does 대신 do를 써야 합니다.",
            "conceptRef": "1단계 [공식 2: 복수 주어 일반동사 의문문] 출제 연계",
            "korean": "너의 조부모님께서는 추운 겨울 동안 어디에 사시니?"
        }
    ],
    "lv1_u5": [
        {
            "id": "drill_2",
            "sentence": "At eight o'clock yesterday evening, we was having dinner together at home.",
            "underlined": ["yesterday evening", "we", "was having", "together"],
            "wrongIndex": 2,
            "correction": "were having",
            "explanation": "주어가 복수대명사 we이므로 과거진행형 be동사는 was가 아니라 were가 되어야 합니다.",
            "conceptRef": "1단계 [공식 2: 과거진행형 공식] 출제 연계",
            "korean": "어제 저녁 8시에 우리는 집에서 함께 저녁을 먹고 있었다."
        },
        {
            "id": "drill_3",
            "sentence": "She is liking classical music very much because it relaxes her mind.",
            "underlined": ["is liking", "classical music", "because", "relaxes"],
            "wrongIndex": 0,
            "correction": "likes",
            "explanation": "취향이나 선호를 나타내는 상태동사 like는 원칙적으로 진행형을 쓰지 않고 단순 현재시제(likes)로 씁니다.",
            "conceptRef": "1단계 [공식 1: 상태동사 진행형 불가 규칙] 출제 연계",
            "korean": "그녀는 마음을 편안하게 해주기 때문에 클래식 음악을 매우 좋아한다."
        }
    ],
    "lv1_u6": [
        {
            "id": "drill_2",
            "sentence": "He was sick yesterday, so he cannot attend the team meeting this morning.",
            "underlined": ["was sick", "so", "cannot", "attend"],
            "wrongIndex": 2,
            "correction": "could not",
            "explanation": "어제(yesterday) 아팠다는 과거 상황과 연계된 과거의 불가능을 나타내므로 could not을 써야 합니다.",
            "conceptRef": "1단계 [공식 1: 조동사 can의 과거형 could] 출제 연계",
            "korean": "그는 어제 아팠기 때문에 오늘 아침 팀 회의에 참석할 수 없었다."
        },
        {
            "id": "drill_3",
            "sentence": "All drivers must follows traffic regulations to prevent severe accidents on the highway.",
            "underlined": ["All drivers", "must", "follows", "to prevent"],
            "wrongIndex": 2,
            "correction": "follow",
            "explanation": "조동사 must 뒤에는 주어의 수에 관계없이 반드시 동사원형(follow)을 써야 합니다.",
            "conceptRef": "1단계 [공식 2: 조동사 must 뒤 동사원형 원칙] 출제 연계",
            "korean": "모든 운전자는 고속도로에서 심각한 사고를 예방하기 위해 교통 법규를 따라야 한다."
        }
    ],
    "lv1_u7": [
        {
            "id": "drill_2",
            "sentence": "The warm soup tastes delightfully on this cold winter afternoon.",
            "underlined": ["warm soup", "tastes", "delightfully", "cold winter"],
            "wrongIndex": 2,
            "correction": "delightful",
            "explanation": "감각동사 taste는 2형식 동사로 주격보어 자리에 부사가 아닌 형용사(delightful)를 취합니다.",
            "conceptRef": "1단계 [공식 2: 2형식 감각동사와 형용사 보어] 출제 연계",
            "korean": "따뜻한 수프는 이 추운 겨울 오후에 정말 맛있다."
        },
        {
            "id": "drill_3",
            "sentence": "The exhausted hikers finally reached to the top of the mountain at sunset.",
            "underlined": ["exhausted hikers", "finally", "reached to", "at sunset"],
            "wrongIndex": 2,
            "correction": "reached",
            "explanation": "reach는 3형식 완전타동사이므로 목적어 앞에 불필요한 전치사 to를 쓰지 않습니다.",
            "conceptRef": "1단계 [공식 3: 3형식 타동사 전치사 불가 규칙] 출제 연계",
            "korean": "지친 등산객들은 일몰 무렵 마침내 산 정상에 도달했다."
        }
    ],
    "lv1_u8": [
        {
            "id": "drill_2",
            "sentence": "Please to be quiet in the hospital hallway because patients are resting.",
            "underlined": ["Please", "to be", "quiet", "are resting"],
            "wrongIndex": 1,
            "correction": "be",
            "explanation": "명령문은 동사원형으로 시작하므로 to be가 아니라 동사원형 be를 써야 합니다.",
            "conceptRef": "1단계 [공식 2: 명령문의 동사원형 시작 원칙] 출제 연계",
            "korean": "환자들이 쉬고 있으므로 병원 복도에서는 조용히 해주세요."
        },
        {
            "id": "drill_3",
            "sentence": "How a beautiful garden you have created in your backyard this spring!",
            "underlined": ["How", "beautiful garden", "you have created", "in your backyard"],
            "wrongIndex": 0,
            "correction": "What",
            "explanation": "[형용사+명사(beautiful garden)]를 강조하는 감탄문은 How가 아닌 What a(n) 형용사 명사 형태를 씁니다.",
            "conceptRef": "1단계 [공식 3: What vs How 감탄문 구별] 출제 연계",
            "korean": "이번 봄에 당신의 뒤뜰에 얼마나 아름다운 정원을 만들어 놓았는가!"
        }
    ],

    # -------------------------------------------------------------
    # LEVEL 2: 중2 핵심 문법 (8 Units)
    # -------------------------------------------------------------
    "lv2_u1": [
        {
            "id": "drill_2",
            "sentence": "To master a foreign language require patience, discipline, and daily practice.",
            "underlined": ["To master", "foreign language", "require", "daily practice"],
            "wrongIndex": 2,
            "correction": "requires",
            "explanation": "to부정사구가 문장의 주어일 때는 단수 취급하므로 require에 -s를 붙여 requires로 써야 합니다.",
            "conceptRef": "1단계 [공식 1: to부정사의 명사적 용법과 단수 취급] 출제 연계",
            "korean": "외국어를 마스터하는 것은 인내심, 규율, 그리고 매일의 연습을 필요로 한다."
        },
        {
            "id": "drill_3",
            "sentence": "In order to achieving academic excellence, the ambitious student studied diligently every night.",
            "underlined": ["In order to", "achieving", "academic excellence", "studied diligently"],
            "wrongIndex": 1,
            "correction": "achieve",
            "explanation": "목적을 나타내는 in order to 뒤에는 반드시 동사원형(achieve)을 써야 합니다.",
            "conceptRef": "1단계 [공식 2: to부정사의 부사적 용법(목적)] 출제 연계",
            "korean": "학업적 우수성을 성취하기 위해 그 야망 있는 학생은 매일 밤 성실히 공부했다."
        }
    ],
    "lv2_u2": [
        {
            "id": "drill_2",
            "sentence": "After a stressful week of exams, she enjoyed to watch classic movies with her family.",
            "underlined": ["After", "enjoyed", "to watch", "with her family"],
            "wrongIndex": 2,
            "correction": "watching",
            "explanation": "동사 enjoy는 to부정사를 목적어로 취할 수 없고 동명사(watching)만을 목적어로 취합니다.",
            "conceptRef": "1단계 [공식 1: 동명사만을 목적어로 취하는 동사] 출제 연계",
            "korean": "스트레스 많은 시험 주간이 끝난 후, 그녀는 가족과 함께 고전 영화를 보는 것을 즐겼다."
        },
        {
            "id": "drill_3",
            "sentence": "On his long way back home, the tired driver stopped buying some hot coffee.",
            "underlined": ["On his long way", "the tired driver", "stopped", "buying"],
            "wrongIndex": 3,
            "correction": "to buy",
            "explanation": "'커피를 사기 위해 멈추다'라는 목적을 나타내야 하므로 stopped buying이 아니라 stopped to buy를 써야 합니다.",
            "conceptRef": "1단계 [공식 2: stop to-V vs stop V-ing 의미 판별] 출제 연계",
            "korean": "집으로 돌아오는 먼 길에 지친 운전자는 따뜻한 커피를 사기 위해 차를 멈추었다."
        }
    ],
    "lv2_u3": [
        {
            "id": "drill_2",
            "sentence": "Dr. Kim has lived in this historic city since ten years and knows everyone.",
            "underlined": ["has lived", "historic city", "since", "ten years"],
            "wrongIndex": 2,
            "correction": "for",
            "explanation": "ten years는 구체적인 기간(숫자 단위)이므로 since가 아니라 전치사 for를 써야 합니다. (since는 특정 시작 시점)",
            "conceptRef": "1단계 [공식 1: 현재완료 계속 용법 for vs since] 출제 연계",
            "korean": "김 박사님은 10년 동안 이 유서 깊은 도시에 살아왔으며 모든 사람을 알고 있다."
        },
        {
            "id": "drill_3",
            "sentence": "The international research team has published the paper two months ago in a science journal.",
            "underlined": ["research team", "has published", "two months ago", "in a science journal"],
            "wrongIndex": 1,
            "correction": "published",
            "explanation": "명백한 과거 시점을 나타내는 부사구 two months ago는 현재완료와 함께 쓸 수 없으므로 과거동사 published로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 2: 현재완료와 특정 과거 부사 불가 원칙] 출제 연계",
            "korean": "그 국제 연구팀은 2달 전에 한 과학 학술지에 그 논문을 발표했다."
        }
    ],
    "lv2_u4": [
        {
            "id": "drill_2",
            "sentence": "The fresh roses in the glass vase smelled sweetly throughout the sunny room.",
            "underlined": ["fresh roses", "in the glass vase", "smelled", "sweetly"],
            "wrongIndex": 3,
            "correction": "sweet",
            "explanation": "감각동사 smell 뒤에는 주격보어로 부사 sweetly가 아닌 형용사 sweet를 써야 합니다.",
            "conceptRef": "1단계 [공식 1: 2형식 감각동사와 형용사 보어] 출제 연계",
            "korean": "유리 화병에 꽂힌 싱싱한 장미들은 햇살 가득한 방 전체에 향기로운 냄새를 풍겼다."
        },
        {
            "id": "drill_3",
            "sentence": "My grandmother kindly made a warm woolen sweater to me for this winter.",
            "underlined": ["grandmother", "made", "woolen sweater", "to me"],
            "wrongIndex": 3,
            "correction": "for me",
            "explanation": "make, buy, cook, build 등의 수여동사를 3형식으로 전환할 때 전치사는 to가 아니라 for를 씁니다.",
            "conceptRef": "1단계 [공식 2: 4형식 3형식 전환 전치사 for] 출제 연계",
            "korean": "할머니께서는 이번 겨울을 위해 친절하게도 나에게 따뜻한 털 스웨터를 만들어 주셨다."
        }
    ],
    "lv2_u5": [
        {
            "id": "drill_2",
            "sentence": "This modern smartphone is much more cheaper than the imported model in that store.",
            "underlined": ["modern smartphone", "much more", "cheaper", "than"],
            "wrongIndex": 1,
            "correction": "much",
            "explanation": "cheap의 비교급은 cheaper이므로 more cheaper라는 이중 비교급 표현은 틀리며 much cheaper로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 1: 비교급 강조 부사와 이중 비교 금지] 출제 연계",
            "korean": "이 최신 스마트폰은 저 가게에 있는 수입 모델보다 훨씬 더 저렴하다."
        },
        {
            "id": "drill_3",
            "sentence": "Mount Everest is higher than any other mountains in the entire world.",
            "underlined": ["is higher", "than", "any other", "mountains"],
            "wrongIndex": 3,
            "correction": "mountain",
            "explanation": "'비교급 than any other' 뒤에는 단수명사가 와야 하므로 mountains를 mountain으로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 2: 비교급을 이용한 최상급 표현 단수명사] 출제 연계",
            "korean": "에베레스트산은 전 세계의 그 어떤 다른 산보다 더 높다."
        }
    ],
    "lv2_u6": [
        {
            "id": "drill_2",
            "sentence": "When I was a primary school student, I used to playing soccer every weekend.",
            "underlined": ["When I was", "used to", "playing", "every weekend"],
            "wrongIndex": 2,
            "correction": "play",
            "explanation": "'과거에 ~하곤 했다'는 의미의 used to 뒤에는 동사원형 play를 써야 합니다. (be used to -ing와 혼동 주의)",
            "conceptRef": "1단계 [공식 1: used to + 동사원형의 과거 습관] 출제 연계",
            "korean": "내가 초등학생이었을 때, 나는 주말마다 축구를 하곤 했다."
        },
        {
            "id": "drill_3",
            "sentence": "We would like to reserving a quiet table near the window for four guests.",
            "underlined": ["would like", "to reserving", "quiet table", "for four guests"],
            "wrongIndex": 1,
            "correction": "to reserve",
            "explanation": "would like to 뒤에는 동사원형이 와야 하므로 to reserving을 to reserve로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 2: would like to + 동사원형] 출제 연계",
            "korean": "손님 네 명을 위해 창가 쪽 조용한 테이블을 예약하고 싶습니다."
        }
    ],
    "lv2_u7": [
        {
            "id": "drill_2",
            "sentence": "The classic mystery novel was wrote by the famous English author in 1890.",
            "underlined": ["classic mystery novel", "was", "wrote", "by the famous"],
            "wrongIndex": 2,
            "correction": "written",
            "explanation": "수동태는 [be동사 + 과거분사(p.p.)] 형태이므로 과거형 wrote를 과거분사 written으로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 1: 수동태의 기본형 be + p.p.] 출제 연계",
            "korean": "그 고전 추리 소설은 1890년에 유명한 영국 작가에 의해 쓰였다."
        },
        {
            "id": "drill_3",
            "sentence": "All the computers in this laboratory are inspect thoroughly every single month.",
            "underlined": ["computers", "in this laboratory", "are inspect", "thoroughly"],
            "wrongIndex": 2,
            "correction": "are inspected",
            "explanation": "컴퓨터가 철저히 '점검받는' 수동의 의미이므로 are inspect를 are inspected로 고쳐야 합니다.",
            "conceptRef": "1단계 [공식 2: 수동태 규칙 변화 p.p.] 출제 연계",
            "korean": "이 실험실의 모든 컴퓨터는 매달 철저하게 점검을 받는다."
        }
    ],
    "lv2_u8": [
        {
            "id": "drill_2",
            "sentence": "Although the heavy thunderstorm outside, the outdoor concert continued with immense energy.",
            "underlined": ["Although", "heavy thunderstorm", "outdoor concert", "continued"],
            "wrongIndex": 0,
            "correction": "Despite",
            "explanation": "뒤에 주어+동사의 절이 아닌 명사구(the heavy thunderstorm outside)가 오므로 접속사 Although 대신 전치사 Despite를 써야 합니다.",
            "conceptRef": "1단계 [공식 1: 양보 접속사 Although vs 전치사 Despite] 출제 연계",
            "korean": "바깥의 거센 뇌우에도 불구하고 야외 콘서트는 엄청난 열기 속에 계속되었다."
        },
        {
            "id": "drill_3",
            "sentence": "If it will rain heavily tomorrow, the baseball match will be cancelled.",
            "underlined": ["If it", "will rain", "heavily tomorrow", "will be cancelled"],
            "wrongIndex": 1,
            "correction": "rains",
            "explanation": "시간과 조건의 부사절에서는 미래의 일이라도 현재시제(rains)가 미래를 대신합니다.",
            "conceptRef": "1단계 [공식 2: 조건 부사절의 시제 원칙] 출제 연계",
            "korean": "만약 내일 비가 많이 오면, 야구 경기는 취소될 것이다."
        }
    ]
}
