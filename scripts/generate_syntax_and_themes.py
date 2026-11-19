# -*- coding: utf-8 -*-
"""
Generator for:
1. data/grammar_syntax_theme_data.js (60 Units Bank)
2. data/grammar_syntax_theme_ext_data.js (60 Units Extended Workbook)
"""

import json, os, re

CURRICULUM_DEFINITION = [
    {
        "level": 201,
        "levelCode": "syntax_p1",
        "levelName": "상관접속사 & 전치사적 관용구문",
        "category": "독해·영작 구문",
        "track": "syntax_theme",
        "isSpecial": True,
        "badge": "구문 1권",
        "color": "teal",
        "themeColor": "#0d9488",
        "targetGrade": "중3 ~ 고등 필수",
        "desc": "B as well as A, When it comes to 등 지문 전개와 서술형 영작의 뼈대를 이루는 필수 상관·관용 구문 (10단원)",
        "unitTitles": [
            ("B as well as A vs not only A but also B (상관접속사와 수일치)", "B as well as A = not only A but also B (동사는 앞의 B에 일치!)"),
            ("either A or B & neither A nor B (선택과 양자부정의 해석·수일치)", "either A or B / neither A nor B -> 동사는 가까운 B에 일치!"),
            ("both A and B & not A but B (병렬구조와 동사 일치 원칙)", "both A and B는 항상 복수 동사! / not A but B는 B에 수일치!"),
            ("When it comes to -ing/명사 (~에 관해서라면: 전치사 to의 함정)", "When it comes to + 명사/동명사(-ing) (to는 전치사이므로 동사원형 금지!)"),
            ("In terms of ~ & With regard to ~ (학술 지문 전개 필수 전치사구)", "In terms of + 명사 (~의 관점에서) & With regard to + 명사 (~에 관하여)"),
            ("In spite of / Despite vs Although / Even though (전치사 vs 접속사 3초 구분)", "Despite/In spite of + 명사구 vs Although/Even though + 절(S+V)"),
            ("On behalf of ~ & In favor of ~ (주제·요지 지문 빈출 표현)", "On behalf of + 명사 (~을 대표하여) & In favor of + 명사 (~에 찬성하여)"),
            ("Instead of -ing & Rather than -ing (~대신에: 대안과 대조의 영작)", "Instead of + 명사/동명사(-ing) vs Rather than + 동원/-ing"),
            ("Apart from / Aside from (~을 제외하고 / ~외에도 양방향 해석법)", "Apart from / Aside from + 명사/동명사 (1. 제외: except for / 2. 추가: in addition to)"),
            ("Due to / Owing to / Thanks to (다양한 이유와 원인 표현 총정리)", "Due to / Owing to / Thanks to / Because of + 명사구 (뒤에 S+V 절 금지!)")
        ]
    },
    {
        "level": 202,
        "levelCode": "syntax_p2",
        "levelName": "인과·결과·비교·정도 구문",
        "category": "독해·영작 구문",
        "track": "syntax_theme",
        "isSpecial": True,
        "badge": "구문 2권",
        "color": "indigo",
        "themeColor": "#4f46e5",
        "targetGrade": "중3 ~ 고등 심화",
        "desc": "so~that, too~to, the 비교급 the 비교급 등 수능 빈출 인과·비교 구문 총정리 (10단원)",
        "unitTitles": [
            ("so + 형/부 + that절 vs such + (a) + 형 + 명 + that절 (원인과 결과)", "so + 형/부 + that절 vs such + (a) + 형 + 명 + that절"),
            ("so that + can/may ~ (목적: ~하기 위하여) vs , so that ~ (결과)", "so that S can V (목적) vs , so that S V (결과)"),
            ("too + 형/부 + to-v (너무 ~해서 할 수 없다) & so~that~cannot 전환", "too + 형/부 + to-v = so + 형/부 + that + S + cannot + V"),
            ("형/부 + enough + to-v (~할 만큼 충분히 ~한) & so~that~can 전환", "형용사/부사 + enough + to-v = so + 형/부 + that + S + can + V"),
            ("The + 비교급 ~, the + 비교급 ... (~할수록 더욱 ...하다 서술형 작문)", "The + 비교급 + S + V ~, the + 비교급 + S + V ..."),
            ("as ~ as possible = as ~ as one can (가능한 한 ~하게)", "as + 원급 + as possible = as + 원급 + as S can/could"),
            ("cannot ~ too ... (아무리 ~해도 지나치지 않다: 강조 부정)", "cannot + 동사원형 + too + 형용사/부사 = 아무리 ~해도 지나치지 않다"),
            ("no sooner ~ than ... & hardly/scarcely ~ when/before ... (시간 도치)", "No sooner had S p.p. than S V = ~하자마자 ...했다"),
            ("비교급 and 비교급 & all the more + 이유 (점진 비교)", "비교급 and 비교급 (점점 더 ~한) & all the more + 이유 (더욱더 ~한)"),
            ("no more than vs no less than vs not more than vs not less than", "no more than (단지 only) vs no less than (무려 as much as)")
        ]
    },
    {
        "level": 203,
        "levelCode": "syntax_p3",
        "levelName": "가주어·가목적어 & 강조·도치 구문",
        "category": "독해·영작 구문",
        "track": "syntax_theme",
        "isSpecial": True,
        "badge": "구문 3권",
        "color": "rose",
        "themeColor": "#e11d48",
        "targetGrade": "고등 내신·수능 1등급",
        "desc": "It is ~ that 강조구문, 5형식 가목적어 it, 부정어 도치 등 고난도 문장 구조 완벽 분석 (10단원)",
        "unitTitles": [
            ("It is + 형용사 + for/of 목적격 + to-v (가주어-진주어 & 의미상 주어)", "It is + 형용사 + for/of 목적격 + to-v (사람 성격 형용사는 of!)"),
            ("It is + 형용사 + that절 vs It seems/happens that ~ (구문 전환)", "It is + 형용사 + that절 & It seems that S V = S seems to V"),
            ("find/make/think/believe + it + 형용사 + to-v (5형식 가목적어 it)", "S + make/find/think/consider/believe + it + 목적격보어(형용사) + to-v"),
            ("It takes + 사람 + 시간 + to-v & spend + 시간/돈 + -ing (시간·비용 표현)", "It takes + 목적어 + 시간 + to-v = spend + 시간 + (in) -ing"),
            ("It is ~ that 강조구문 (주어·목적어·부사구 강조 판별법)", "It is [강조 대상] that [나머지 문장] (강조 대상 제외 시 완전한 문장!)"),
            ("It is ~ that 강조구문 vs It ~ that 가주어-진주어 3초 구별법", "It is와 that을 지웠을 때 문장이 성립하면 강조, 불완전하면 가주어-진주어"),
            ("부정어 도치 (Never/Little/Seldom/Not until + 조동사 + S + V)", "부정어(Never/Little/Not only 등) 문두 위치 시: 의문문 어순 (조동사+S+V)"),
            ("장소·방향 부사구 도치 (Here/There/On the hill + V + S)", "장소 부사구 문두 위치 시: 동사 + 명사주어 (단, 대명사 주어는 도치 안 함!)"),
            ("Strictly speaking / Judging from / Considering that (독립분사구문)", "주어가 일반인일 때 생략되는 관용적 독립분사구문"),
            ("There is no -ing & It goes without saying that ~ (특수 관용 구문)", "There is no -ing = It is impossible to-v (~하는 것은 불가능하다)")
        ]
    },
    {
        "level": 204,
        "levelCode": "theme_t1",
        "levelName": "시제·조동사·가정법 뉘앙스 정복",
        "category": "핀포인트 테마",
        "track": "syntax_theme",
        "isSpecial": True,
        "badge": "테마 1권",
        "color": "amber",
        "themeColor": "#d97706",
        "targetGrade": "중2 ~ 수능 빈출",
        "desc": "현재완료 vs 과거 완벽구분, 조동사+have p.p. 5대 뉘앙스, 가정법 과거/과거완료/혼합가정법 집중 처방 (10단원)",
        "unitTitles": [
            ("단순과거 vs 현재완료 (명백한 과거시점 부사어 결합 금지 공식)", "yesterday, ago, in 1990 등 명백한 과거 부사는 현재완료와 결합 불가!"),
            ("현재완료 4대 용법 (완료·경험·계속·결과) 지문 속 직관적 판별", "just/already/yet(완료), ever/never(경험), for/since(계속), have lost/gone(결과)"),
            ("과거완료 (had p.p.)와 대과거 (타임라인 선후관계 판별)", "과거의 특정 시점보다 더 앞선 과거 동작은 반드시 had p.p. 대과거로 표현"),
            ("시간·조건 부사절의 현재시제 대용 규칙과 명사절 예외", "시간/조건 부사절에서는 미래 대신 현재시제 사용! (명사절 if/when은 will 허용)"),
            ("조동사 + have p.p. 5대 뉘앙스 (must/cannot/should/may/could have p.p.)", "must have p.p.(~했음에 틀림없다) vs should have p.p.(~했어야 했는데 안 했다)"),
            ("주장·제안·요구 동사 뒤 (should) + 동사원형 (당위성 vs 사실전달)", "demand/order/insist/suggest + that + S + (should) + 동사원형 (단, 사실 주장엔 시제일치)"),
            ("가정법 과거 vs 가정법 과거완료 (현재 사실 반대 vs 과거 사실 반대)", "If S 과거동사(were), S would 동원 (현재 반대) vs If S had p.p., S would have p.p. (과거 반대)"),
            ("혼합가정법 (과거의 일이 현재에 미치는 영향 킬러 어법)", "If S had p.p. (과거조건), S would 동원 + now/today (현재결과)"),
            ("I wish 가정법 & as if / as though 가정법", "I wish + S + 과거/had p.p. & as if + S + 과거/had p.p."),
            ("Without ~ / But for ~ = If it were not for ~ / If it had not been for ~", "Without/But for + 명사 = If it were not for (현재) / If it had not been for (과거)")
        ]
    },
    {
        "level": 205,
        "levelCode": "theme_t2",
        "levelName": "준동사 삼국지 & 능동·수동 판별",
        "category": "핀포인트 테마",
        "track": "syntax_theme",
        "isSpecial": True,
        "badge": "테마 2권",
        "color": "sky",
        "themeColor": "#0284c7",
        "targetGrade": "중3 ~ 고등 내신 마스터",
        "desc": "to-v vs -ing 목적어 구분, 현재분사 vs 과거분사 명사수식, 분사구문 능동/수동 3초 판별 공식 (10단원)",
        "unitTitles": [
            ("to부정사만을 목적어로 취하는 동사 vs 동명사만을 목적어로 취하는 동사", "want/hope/decide to-v (미래지향) vs enjoy/finish/mind/avoid -ing (과거/기정/부정)"),
            ("to-v / -ing 둘 다 취하지만 의미가 180도 바뀌는 동사 (remember/forget/stop/try)", "remember to-v (미래에 할 일) vs remember -ing (과거에 했던 일)"),
            ("to부정사의 부사적 용법 (목적, 결과, 감정원인, 판단근거) 3초 식별", "in order to-v (목적) / lived to be 90 (결과) / glad to meet you (감정원인)"),
            ("동명사 관용 표현 총정리 (feel like -ing, cannot help -ing, be busy -ing)", "cannot help -ing = cannot but 동사원형 / feel like -ing / spend 시간 -ing"),
            ("전치사 to vs to부정사 to의 함정 (look forward to -ing, be used to -ing)", "look forward to -ing, object to -ing, be used to -ing (전치사 to 뒤 동명사!)"),
            ("현재분사(-ing) vs 과거분사(p.p.)의 명사 수식 (능동/진행 vs 수동/완료)", "수식받는 명사와의 관계가 능동/진행이면 -ing, 수동/완료이면 p.p."),
            ("감정유발동사의 분사화 (interesting vs interested, tiring vs tired)", "사물 주어/원인이면 -ing, 사람/감정을 느끼는 대상이면 p.p."),
            ("분사구문의 능동 vs 수동 결정법 (생략된 주어와의 능수동 판별)", "생략된 주어를 찾아 주어가 직접 행하면 V-ing, 행위를 당하면 p.p."),
            ("with + 명사 + 분사 (부대상황: ~한 채로, ~하면서)", "with + 목적어 + -ing (능동) / with + 목적어 + p.p. (수동: 팔짱 낀 채로 등)"),
            ("3·4·5형식 수동태와 지각·사역동사 수동태 시 to부정사 부활 공식", "사역/지각동사의 능동태 목적격보어 동사원형은 수동태로 바뀔 때 to-v로 부활!")
        ]
    },
    {
        "level": 206,
        "levelCode": "theme_t3",
        "levelName": "관계사·접속사 & 수능 어법 킬러",
        "category": "핀포인트 테마",
        "track": "syntax_theme",
        "isSpecial": True,
        "badge": "테마 3권",
        "color": "purple",
        "themeColor": "#7c3aed",
        "targetGrade": "고1 ~ 수능 1등급 킬러",
        "desc": "that vs what 3초 판별, 관계대명사 vs 관계부사, 수일치 10대 공식 등 수능 29번 단골 출제 유형 (10단원)",
        "unitTitles": [
            ("관계대명사 vs 접속사 that (선행사 유무 + 뒷문장 완전성 판별)", "관계대명사 that: 선행사 있음 + 뒷문장 불완전 / 접속사 that: 선행사 없음 + 뒷문장 완전"),
            ("that vs what 3초 킬러 공식 (선행사 X, 뒷문장 불완전 = what)", "명사절 what은 선행사를 자체 포함하므로 선행사 없고 뒷문장이 불완전함!"),
            ("관계대명사의 계속적 용법 (, which / , who)과 that/what 사용 불가 규칙", "콤마 뒤 계속적 용법에는 that과 what을 결코 쓸 수 없음! (, which / , who만 가능)"),
            ("관계대명사 vs 관계부사 (완전문장 vs 불완전문장 구조 분석)", "관계대명사 뒤는 주어나 목적어 빠진 불완전문장 / 관계부사(where/when/why/how) 뒤는 완전문장"),
            ("전치사 + 관계대명사 (= 관계부사) 뒤 완전문장 공식", "전치사 + 관계대명사 뒤에는 필수 문장성분이 모두 갖추어진 완전한 절이 옴!"),
            ("복합관계사 (whoever, whatever, whenever, however + 형/부)", "however + 형용사/부사 + S + V (아무리 ~할지라도) 어순 주의!"),
            ("주어와 동사의 수일치 1 (수식어구로 멀어진 주어 핵 찾기)", "주어 [수식어구(전치사구/분사/관계사절)] + 본동사 -> 주어의 핵에 수일치"),
            ("주어와 동사의 수일치 2 (부분 표현 most/half/rest of, a number of vs the number of)", "a number of + 복수명사 -> 복수동사 / the number of + 복수명사 -> 단수동사"),
            ("병렬 구조 (등위접속사 and/but/or 뒤 형태의 대칭성)", "and/but/or/as well as 뒤의 형태는 앞의 병렬 요소와 문법적 품사·형태 일치"),
            ("대명사의 일치 (it/them vs that/those of ~ 비교 대상의 수일치)", "비교 구문에서 앞선 명사의 반복을 피할 때: 단수는 that of, 복수는 those of")
        ]
    }
]

def build_unit_content(book_code, unit_no, title, formula, category):
    unit_id = f"{book_code}_u{unit_no}"
    kw = title.split('(')[0].strip()
    
    overview = (
        f"본 단원에서는 수능 독해와 내신 서술형의 핵심 뼈대를 이루는 [{kw}] 구문의 구조적 특징과 "
        f"출제 공식을 완벽하게 마스터합니다. 어법 오류를 3초 만에 진단하고 올바른 영작으로 연결할 수 있는 "
        f"실전 팁과 함정 탈출법을 단계별로 집중 훈련합니다."
    )
    
    takeaways = [
        f"[{kw}] 구문의 핵심 어순 및 구성 요소의 문법적 역할을 정확히 숙지합니다.",
        f"주어로 쓰일 때의 동사 수일치 및 수식어구와의 결합 원칙을 적용합니다.",
        f"수능 및 내신 기출에서 가장 자주 출제되는 빈출 어법 함정을 3초 만에 감별합니다."
    ]
    
    rules = [
        {"title": "구문의 기본 형태 및 품사적 특성", "detail": f"{formula}의 기본 구조를 바르게 이해하고 암기합니다."},
        {"title": "주어 위치 시 동사 일치 및 병렬 관계", "detail": "문장 속에서 대등한 문법적 요소(단어, 구, 절)가 연결되어야 하며, 주어 위치 시 진짜 주어의 핵에 동사의 수를 일치시킵니다."},
        {"title": "빈출 어법 함정 및 대조 판별", "detail": "유사해 보이지만 어법상 오답으로 자주 유도되는 혼동 표현과의 차이점을 명확히 구별합니다."}
    ]
    
    examples = [
        {
            "en": f"Mastering {kw} is essential for improving both your reading speed and writing precision.",
            "ko": f"[{kw}]을(를) 완벽히 익히는 것은 독해 속도와 영작의 정확성을 모두 향상시키는 데 필수적이다.",
            "point": f"{kw} 구문이 문장 속에서 주어나 핵심 구성 요소로 올바르게 사용된 예문"
        },
        {
            "en": f"The professor emphasized that understanding {kw} enables students to tackle complex academic texts.",
            "ko": f"교수님은 [{kw}]을(를) 이해하는 것이 학생들이 복잡한 학술 지문을 해결할 수 있게 해준다고 강조했다.",
            "point": f"학술 지문 및 수능 기출 지문에서 {kw}이 활용되는 전형적인 형태"
        }
    ]
    
    oxCompare = [
        {
            "correct": f"Strict application of {formula} leads to a natural, error-free sentence.",
            "wrong": f"Incorrect usage violating {kw} creates serious grammatical dissonance.",
            "reason": f"{kw}의 기본 원칙을 지키지 않고 형태나 수일치를 혼동하여 쓴 전형적인 오류입니다."
        },
        {
            "correct": "She demonstrated her thorough grasp of the grammatical rule in the essay.",
            "wrong": "She demonstrated her thorough grasp on the grammatical rule with incorrect syntax.",
            "reason": f"문법적 짝꿍과 전치사 결합 규칙을 정확하게 준수해야 합니다."
        }
    ]
    
    trap = f"{kw} 구문에서 겉보기에 가까운 단어에 현혹되거나 전치사/접속사의 품사를 혼동하여 오답을 선택하지 않도록 주의하세요!"
    
    spotting = {
        "title": f"밑줄 어법 3단계 진단 클리닉 [{kw}]",
        "question": f"다음 문장의 밑줄 친 ①~⑤ 중 어법상 틀린 것을 찾아 바르게 고치시오.",
        "underlines": [
            f"① Thorough understanding of",
            f"② the essential structure",
            f"③ which relates to {kw}",
            f"④ are considered essential",
            f"⑤ for competitive exams."
        ],
        "answerIndex": 3,
        "wrongPart": "are considered essential",
        "correction": "is considered essential",
        "reason": f"문장의 진짜 주어는 단수 명사인 'Thorough understanding'(단수)이므로 복수 동사 are가 아니라 단수 동사 is로 수일치해야 합니다."
    }
    
    quiz = [
        {
            "q": f"다음 중 [{kw}]의 올바른 어법적 적용으로 가장 적절한 것은?",
            "options": [
                f"The teacher emphasized the importance of {kw} in modern composition.",
                f"She insisted that {kw} are completely irrelevant to high school English.",
                f"They decided to ignore the core principle of {kw} despite warnings.",
                f"He failed to recognize how {kw} functions within a subordinate clause.",
                f"Neither the logic nor the grammar of the passage was acceptable."
            ],
            "ans": 0,
            "exp": f"[{kw}] 구문의 형태와 수일치가 가장 자연스럽고 정확하게 적용된 문장은 1번입니다."
        },
        {
            "q": f"다음 문장의 빈칸에 들어갈 가장 알맞은 표현은? [Understanding ________ helps learners write coherent essays.]",
            "options": [f"how {kw} works", f"that {kw} to work", f"why does {kw} work", f"what {kw} working", f"which {kw} work"],
            "ans": 0,
            "exp": f"간접의문문(의문사 + 주어 + 동사) 어순인 'how {kw} works'가 목적어로 가장 적합합니다."
        },
        {
            "q": f"다음 밑줄 친 부분 중 어법상 가장 어색한 것은?",
            "options": [
                f"She practiced {kw} diligently every single day.",
                f"The committee discussed {kw} with great enthusiasm.",
                f"He refused to apply {kw} because of it was difficult.",
                f"They were confident that {kw} would improve their test scores.",
                f"Knowing {kw} thoroughly provided a decisive advantage."
            ],
            "ans": 2,
            "exp": "because of 뒤에는 절(S+V)이 올 수 없으므로 접속사 because를 써야 합니다."
        },
        {
            "q": f"다음 우리말 영작으로 가장 올바른 것은? [그는 올바른 구문 규칙을 적용하는 것의 중요성을 잘 알고 있다.]",
            "options": [
                "He is well aware of the importance of applying correct syntax rules.",
                "He is well aware that the importance applying correct syntax rules.",
                "He knows well the importance of apply correct syntax rules.",
                "He aware well of the importance of applied correct syntax rules.",
                "He knows how importance it is applying correct syntax rules."
            ],
            "ans": 0,
            "exp": "전치사 of 뒤에 동명사 applying correct syntax rules가 이어진 1번이 정확합니다."
        },
        {
            "q": f"다음 문장의 빈칸에 알맞은 단어는? [Not only theoretical knowledge but also practical application ________ required.]",
            "options": ["is", "are", "were", "have been", "being"],
            "ans": 0,
            "exp": "not only A but also B에서 B(practical application, 단수)에 수일치하므로 단수 동사 is가 올바릅니다."
        }
    ]
    
    oxDrills = [
        {"no": 1, "sent": f"Applying {kw} correctly makes your sentences far clearer.", "ans": "O", "exp": f"동명사 주어 Applying에 단수 동사 makes가 올바르게 연결되었습니다."},
        {"no": 2, "sent": f"She insisted on use {kw} despite the teacher's contrary advice.", "ans": "X", "exp": f"전치사 on 뒤에는 동명사 using이 와야 합니다."},
        {"no": 3, "sent": f"The core rule of {kw} has been tested repeatedly in university entrance exams.", "ans": "O", "exp": f"단수 주어 The core rule에 현재완료 수동태 has been tested가 정확합니다."},
        {"no": 4, "sent": f"Neither the students nor the instructor were aware of the change.", "ans": "O", "exp": f"nor 뒤의 명사가 복수일 땐 were가 맞습니다."},
        {"no": 5, "sent": f"Understanding {kw} thoroughly enable students to interpret complex clauses.", "ans": "X", "exp": f"동명사 주어 Understanding은 단수 취급하므로 enables가 되어야 합니다."}
    ]
    
    transformDrills = [
        {"no": 6, "sent": f"She loves both reading novels and [write / writing] creative essays.", "ans": "writing", "exp": "reading과 병렬을 이루어 동명사 writing이 와야 합니다."},
        {"no": 7, "sent": f"He is accustomed to [speak / speaking] in front of large audiences.", "ans": "speaking", "exp": "be accustomed to에서 to는 전치사이므로 동명사 speaking이 옵니다."},
        {"no": 8, "sent": f"The results of the preliminary investigation [was / were] published yesterday.", "ans": "were", "exp": "주어의 핵이 복수명사 The results이므로 were가 올바릅니다."},
        {"no": 9, "sent": f"She succeeded [because / because of] her persistent dedication.", "ans": "because of", "exp": "뒤에 명사구 her persistent dedication이 오므로 전치사 because of가 맞습니다."},
        {"no": 10, "sent": f"He walked quietly so as not [to wake / waking] the sleeping baby.", "ans": "to wake", "exp": "so as not to-v (~하지 않도록) 구문이므로 to wake가 정답입니다."}
    ]
    
    questions = []
    types = ["Choice2", "Spotting", "Transform", "Choice5", "SentenceTransform", "Scramble"]
    for q_idx in range(1, 21):
        q_type = types[(q_idx - 1) % len(types)]
        questions.append({
            "no": q_idx,
            "type": q_type,
            "title": f"[{q_type}] {kw} 실전 문항 {q_idx}",
            "question": f"다음 문장에서 {kw}의 어법 원칙에 부합하도록 올바른 답을 고르거나 완성하시오.",
            "text": f"Accurate mastery of {kw} enables students to comprehend complex structures with ease.",
            "options": ["정확한 어법 형태", "틀린 어법 형태", "왜곡된 구조", "시제 불일치", "수일치 오류"] if "Choice" in q_type else None,
            "ans": 1 if "Choice" in q_type else "정답 및 해설 참조",
            "exp": f"{kw}의 핵심 원칙을 점검하는 {q_type} 실전 훈련 문항입니다."
        })
        
    descriptiveQuestions = [
        {
            "qNo": 1,
            "title": "[서술형 1] 조건 제시형 문장 완성 클리닉",
            "question": f"다음 조건에 맞추어 우리말과 일치하도록 [{kw}]을(를) 활용하여 영어로 완성하시오.\n[우리말: 그 규칙을 올바르게 이해하는 것은 학생들에게 큰 이점을 제공한다.]",
            "cond": f"1. {kw} 또는 관련 핵심 키워드를 반드시 포함할 것\n2. 주어와 동사의 수일치를 정확히 지킬 것\n3. 총 8~12단어로 구성할 것",
            "modelAns": f"Understanding the core syntax provides students with a decisive advantage.",
            "point": "동명사 주어의 단수 취급 및 적절한 목적어 수식 관계 확인"
        },
        {
            "qNo": 2,
            "title": "[서술형 2] 밑줄 어법 오류 수정 및 이유 서술",
            "question": f"다음 문장에서 어법상 틀린 부분을 찾아 밑줄을 긋고, 올바른 형태로 고친 뒤 그 문법적 이유를 서술하시오.\n[문장: Not only the teacher but also the students was excited about the science experiment.]",
            "cond": "1. 틀린 단어와 고친 단어를 명시할 것\n2. 수일치 원칙을 한 문장으로 명확히 설명할 것",
            "modelAns": f"was excited -> were excited / 이유: not only A but also B 구문이 주어로 쓰일 때 동사는 B(the students, 복수)에 수일치해야 하기 때문이다.",
            "point": "상관접속사의 동사 수일치 규칙 명확한 서술"
        },
        {
            "qNo": 3,
            "title": "[서술형 3] 문장 전환 및 고난도 영작",
            "question": f"다음 주어진 두 문장을 [{kw}] 구문의 형태를 활용하여 하나의 의미 있는 복합문으로 전환하시오.\n[문장 A: She can speak French fluently. / 문장 B: She can also write academic essays in French.]",
            "cond": "1. 대등한 병렬 구조를 완성할 것\n2. 문맥의 흐름이 자연스럽도록 단어를 배치할 것",
            "modelAns": "She can write academic essays as well as speak French fluently.",
            "point": "as well as 앞뒤의 동사구 병렬 연결 확인"
        }
    ]
    
    bank_unit = {
        "unitNo": unit_no,
        "unitId": unit_id,
        "title": title,
        "part": category,
        "targetGrade": "중3 ~ 고등 심화",
        "summary": f"{title}의 핵심 구조, 어순 원칙 및 실전 출제 포인트",
        "overview": overview,
        "keyTakeaways": takeaways,
        "formulaCards": [
            {
                "name": f"{kw} 핵심 공식 & 출제 포인트",
                "desc": f"{kw} 구문의 기본 성격과 해석 요령",
                "formula": formula,
                "rules": rules,
                "examples": examples,
                "oxCompare": oxCompare,
                "trap": trap,
                "quizLink": "3단계 실전 퀴즈 연동"
            }
        ],
        "spottingClinic": spotting,
        "quiz": quiz
    }
    
    ext_unit = {
        "unitNo": unit_no,
        "title": title,
        "section1": {
            "coreMap": {
                "overview": overview,
                "takeaways": takeaways,
                "formulaBoxes": [
                    {
                        "name": f"{kw} 핵심 공식",
                        "formula": formula,
                        "desc": f"{kw}의 기본 원리와 활용법",
                        "rules": rules
                    }
                ]
            },
            "dualExamples": [
                {
                    "title": f"{kw} 실전 대표 예문 & OX 비교",
                    "examples": examples,
                    "oxCompare": oxCompare
                }
            ]
        },
        "section2": {
            "oxDrills": oxDrills,
            "transformDrills": transformDrills
        },
        "section3": {
            "questions": questions
        },
        "section4": {
            "descriptiveQuestions": descriptiveQuestions
        },
        "section5": {
            "reviewTakeaway": f"{kw} 구문의 공식과 수일치 원칙을 완벽히 마스터하여 실전 독해 및 서술형 평가에서 만점을 달성하세요!"
        }
    }
    
    return bank_unit, ext_unit

def main():
    print("Building 6 Books, 60 Units for Syntax & Themes...")
    
    all_bank_levels = []
    all_ext_levels = []
    
    for book in CURRICULUM_DEFINITION:
        b_code = book["levelCode"]
        b_name = book["levelName"]
        b_cat = book["category"]
        
        bank_level = {
            "level": book["level"],
            "levelCode": b_code,
            "levelName": b_name,
            "category": b_cat,
            "track": book["track"],
            "isSpecial": True,
            "badge": book["badge"],
            "color": book["color"],
            "themeColor": book["themeColor"],
            "targetGrade": book["targetGrade"],
            "desc": book["desc"],
            "units": []
        }
        
        ext_level = {
            "levelCode": b_code,
            "levelName": b_name,
            "isSpecial": True,
            "units": []
        }
        
        for idx, (u_title, u_formula) in enumerate(book["unitTitles"], start=1):
            b_unit, e_unit = build_unit_content(b_code, idx, u_title, u_formula, b_cat)
            bank_level["units"].append(b_unit)
            ext_level["units"].append(e_unit)
            
        all_bank_levels.append(bank_level)
        all_ext_levels.append(ext_level)
        print(f"  - Generated Book: {b_code} ({b_name}) with {len(bank_level['units'])} units")
        
    bank_file = "data/grammar_syntax_theme_data.js"
    with open(bank_file, "w", encoding="utf-8") as f:
        f.write("/**\n * VERITAS ENGLISH - GRAMMAR SYNTAX & THEME DATA BANK (60 UNITS)\n")
        f.write(" * - Series 1: Syntax Clinic (syntax_p1, syntax_p2, syntax_p3) 30 Units\n")
        f.write(" * - Series 2: Pinpoint Theme Clinic (theme_t1, theme_t2, theme_t3) 30 Units\n */\n\n")
        f.write("window.GRAMMAR_SYNTAX_THEME_BANK = ")
        json.dump(all_bank_levels, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    print(f"Wrote {bank_file} ({os.path.getsize(bank_file)} bytes)")
    
    ext_file = "data/grammar_syntax_theme_ext_data.js"
    with open(ext_file, "w", encoding="utf-8") as f:
        f.write("/**\n * VERITAS ENGLISH - GRAMMAR SYNTAX & THEME EXTENDED WORKBOOK DATA (60 UNITS)\n")
        f.write(" * - Section 1: Core Map & Dual Examples\n")
        f.write(" * - Section 2: 10 Warmup Drills (5 OX + 5 Word Transformations)\n")
        f.write(" * - Section 3: 20 Practice Questions across 6 Types\n")
        f.write(" * - Section 4: 3 Killer Descriptive Questions\n")
        f.write(" * - Section 5: Review Reflection Takeaways\n */\n\n")
        f.write("window.GRAMMAR_SYNTAX_THEME_EXT_DATA = ")
        json.dump(all_ext_levels, f, ensure_ascii=False, indent=2)
        f.write(";\n")
        
    print(f"Wrote {ext_file} ({os.path.getsize(ext_file)} bytes)")
    print("Generation completed successfully!")

if __name__ == "__main__":
    main()
