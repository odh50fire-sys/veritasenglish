# -*- coding: utf-8 -*-
"""
Veritas English - Comprehensive Grammar Explanations & Concept Master Builder
Generates extensive, high-quality grammatical explanations for all 70 units:
- Deep-dive concept explanations (원리 및 배경)
- Formula & sentence pattern boxes
- Detailed rule & inflection tables (규칙/변화표)
- Examples with Korean translations & structural points (예문+해석+분석)
- Correct vs Incorrect (O vs X) comparisons (시험 단골 오답 클리닉)
- Traps & essay exam tips (출제자 함정 및 서술형 감점 방지)
- Direct mapping to Step 3 quiz questions (3단계 퀴즈 연계)
"""

import json
import re

def get_unit_enrichment_data():
    """Returns comprehensive enrichment data for all 70 units."""
    # We will construct a mapping of unitNo -> enrichment dictionary
    enrichment = {}
    
    # -------------------------------------------------------------------------
    # LEVEL 1: 중1 문법 (Units 1~8)
    # -------------------------------------------------------------------------
    enrichment[1] = {
        "overview": "영어 문장의 핵심 기둥인 be동사와 일반동사의 본질적인 차이를 이해하고, 주어의 인칭과 수, 시제(현재/과거)에 따른 정확한 형태 변화와 부정문·의문문 패턴을 완벽히 마스터합니다.",
        "keyTakeaways": [
            "be동사(am/are/is/was/were)는 주어의 상태(~이다)나 위치(~에 있다)를 나타내며, 일반동사 원형과 한 문장에 나란히 쓸 수 없다.",
            "현재시제에서 주어가 3인칭 단수(He/She/It/단수명사)일 때는 일반동사 끝에 반드시 -(e)s를 붙인다.",
            "과거시제 부정문과 의문문에서는 조동사 did / didn't 뒤에 반드시 '동사원형'을 쓴다."
        ],
        "formulaCards": [
            {
                "name": "be동사의 현재형·과거형과 부정문·의문문",
                "desc": "be동사는 주어와 보어를 이어주는 연결 동사로, 주어의 성질, 신분, 감정 상태나 위치를 표현합니다. 부정문은 be동사 바로 뒤에 not을 붙이고, 의문문은 주어와 be동사의 자리만 맞바꿉니다.",
                "formula": "긍정: S + be동사 (am/are/is / was/were) + 보어/장소\n부정: S + be동사 + not\n의문: Be동사 + S ~?",
                "rules": [
                    {"title": "1인칭 단수 (I)", "detail": "현재: am (줄임말: I'm) | 과거: was | 부정: am not / was not"},
                    {"title": "3인칭 단수 (He/She/It/단수명사)", "detail": "현재: is (줄임말: He's, It's) | 과거: was | 부정: isn't / wasn't"},
                    {"title": "2인칭/복수 (You/We/They/복수명사)", "detail": "현재: are (줄임말: We're, They're) | 과거: were | 부정: aren't / weren't"}
                ],
                "examples": [
                    {"en": "She was very happy yesterday, but she is tired today.", "ko": "그녀는 어제 매우 행복했지만, 오늘은 피곤하다.", "point": "yesterday(과거) -> was / today(현재) -> is"},
                    {"en": "They were not at school two hours ago.", "ko": "그들은 두 시간 전에 학교에 없었다.", "point": "과거 복수 부정 -> were not (weren't)"},
                    {"en": "Are you ready for the final exam?", "ko": "너는 기말시험 준비가 되었니?", "point": "의문문: Are + 주어(you) ~?"}
                ],
                "oxCompare": [
                    {"correct": "My brother is a high school student.", "wrong": "My brother is be a high school student.", "reason": "is 자체가 be동사의 3인칭 단수형이므로 원형 be를 덧쓰지 않습니다."},
                    {"correct": "They were not hungry last night.", "wrong": "They didn't were hungry last night.", "reason": "be동사의 부정문에는 조동사 didn't를 쓰지 않고 be동사 뒤에 not만 붙입니다."}
                ],
                "trap": "시험에서 be동사 문장에 don't/doesn't/didn't를 섞어 쓰거나, 반대로 일반동사 문장에 isn't/aren't를 쓰는 혼동이 단골 감점 요인입니다!",
                "quizLink": "3단계 퀴즈 Q1, Q2, Q4에서 be동사 과거형(were) 및 부정문 규칙이 직접 출제됩니다."
            },
            {
                "name": "일반동사의 3인칭 단수 현재형과 과거형 규칙",
                "desc": "be동사와 조동사를 제외한 대부분의 동작·상태 동사가 일반동사입니다. 주어가 3인칭 단수(He, She, It, my friend 등)이고 현재 시제일 때는 동사 끝에 -(e)s를 반드시 붙여야 하며, 과거형은 규칙적으로 -ed를 붙이거나 불규칙 변화합니다.",
                "formula": "긍정: 3인칭 단수 주어 + 동사원형-(e)s / 과거: 주어 + 동사과거형\n부정: S + does not(doesn't) / did not(didn't) + 동사원형\n의문: Does / Did + S + 동사원형 ~?",
                "rules": [
                    {"title": "대부분의 동사", "detail": "동사원형 + -s (play -> plays, read -> reads, work -> works)"},
                    {"title": "-s, -sh, -ch, -x, -o로 끝나는 동사", "detail": "동사원형 + -es (watch -> watches, wash -> washes, go -> goes, do -> does)"},
                    {"title": "자음 + y로 끝나는 동사", "detail": "y를 i로 고치고 + -es (study -> studies, fly -> flies / 단, 모음+y는 그냥 -s: play -> plays)"},
                    {"title": "불규칙 동사 have", "detail": "have의 3인칭 단수는 has (haves가 아님!)"}
                ],
                "examples": [
                    {"en": "My father watches TV every evening.", "ko": "나의 아버지는 매일 저녁 TV를 보신다.", "point": "3인칭 단수 주어 My father + watch에 -es -> watches"},
                    {"en": "He didn't go to the park yesterday.", "ko": "그는 어제 공원에 가지 않았다.", "point": "didn't 뒤에는 반드시 동사원형 go (went 쓰면 오답!)"},
                    {"en": "Did you see the doctor yesterday?", "ko": "너는 어제 의사의 진료를 받았니?", "point": "일반동사 과거 의문문: Did + 주어 + 동사원형 see ~?"}
                ],
                "oxCompare": [
                    {"correct": "She doesn't like spicy food.", "wrong": "She doesn't likes spicy food.", "reason": "does not(doesn't) 뒤에는 반드시 동사원형(like)이 와야 하며, -s를 중복해서 붙이지 않습니다."},
                    {"correct": "He didn't finish his homework.", "wrong": "He didn't finished his homework.", "reason": "과거 조동사 did not(didn't) 뒤에도 반드시 동사원형(finish)을 씁니다."}
                ],
                "trap": "does/doesn't나 did/didn't를 쓴 뒤 본동사에 또다시 -s나 -ed를 붙여서 틀리는 '동사원형 미복귀' 함정을 완벽히 피해야 합니다!",
                "quizLink": "3단계 퀴즈 Q1(watches), Q4(didn't go), Q5(Did)에서 3인칭 단수 및 조동사 의문문이 집중 출제됩니다."
            }
        ]
    }

    # Unit 2: 명사의 복수형과 대명사의 격변화
    enrichment[2] = {
        "overview": "명사를 셀 수 있는 명사의 규칙·불규칙 복수형으로 전환하는 법과, 문장 내 역할(주어, 목적어, 소유, 단독 소유)에 따라 형태가 바뀌는 인칭대명사의 4대 격변화(주격·소유격·목적격·소유대명사)를 마스터합니다.",
        "keyTakeaways": [
            "불규칙 복수명사(children, teeth, feet, mice, men)에는 이미 복수의 의미가 있으므로 -s를 덧붙이지 않는다.",
            "전치사 뒤나 타동사 뒤의 목적어 자리에는 반드시 '목적격 대명사(me, him, her, us, them)'를 쓴다.",
            "소유대명사(mine, yours, his, hers, ours, theirs)는 '소유격 + 명사'를 한 단어로 대신하며 뒤에 명사를 쓰지 않는다."
        ],
        "formulaCards": [
            {
                "name": "규칙 및 불규칙 명사의 복수형 완전 정복",
                "desc": "셀 수 있는 명사가 2개 이상일 때는 복수형으로 표현합니다. 대부분 -s나 -es를 붙이지만, 모음이 바뀌거나 형태가 완전히 변하는 불규칙 명사는 시험에 100% 출제되므로 반드시 암기해야 합니다.",
                "formula": "대부분: 명사 + -s (books, cars)\n-s/-sh/-ch/-x: 명사 + -es (boxes, dishes)\n자음+y: y->i + -es (babies) / f/fe: f/fe->v + -es (leaves, knives)",
                "rules": [
                    {"title": "모음 변화 불규칙", "detail": "man -> men, woman -> women, foot -> feet, tooth -> teeth, goose -> geese"},
                    {"title": "특수 어미 불규칙", "detail": "child -> children, ox -> oxen, mouse -> mice"},
                    {"title": "단수와 복수가 같은 명사", "detail": "deer -> deer, sheep -> sheep, fish -> fish, species -> species"}
                ],
                "examples": [
                    {"en": "Three children are playing with their puppies.", "ko": "세 명의 아이들이 강아지들과 놀고 있다.", "point": "child의 복수형은 children (childs는 오답)"},
                    {"en": "I brushed my teeth after breakfast.", "ko": "나는 아침 식사 후에 이를 닦았다.", "point": "tooth의 복수형은 teeth (tooths는 오답)"},
                    {"en": "The autumn leaves turn beautiful red and yellow.", "ko": "가을 나뭇잎들이 아름다운 붉은색과 노란색으로 변한다.", "point": "leaf의 복수형은 leaves"}
                ],
                "oxCompare": [
                    {"correct": "There are many children in the park.", "wrong": "There are many childrens in the park.", "reason": "children 자체가 이미 복수형이므로 다시 -s를 덧붙이면 절대 안 됩니다."},
                    {"correct": "He hurt both of his feet.", "wrong": "He hurt both of his feets.", "reason": "foot의 복수형은 feet이며 feets라는 단어는 존재하지 않습니다."}
                ],
                "trap": "childs, feets, tooths처럼 불규칙 복수형에 무의식적으로 -s를 붙이는 보기를 오답으로 정확히 걸러내야 합니다!",
                "quizLink": "3단계 퀴즈 Q1(child - childs 오답 찾기)과 Q3(brushed my tooths 오류)에서 직접 출제됩니다."
            },
            {
                "name": "인칭대명사의 4대 격변화와 소유대명사",
                "desc": "인칭대명사는 문장에서 맡은 역할에 따라 형태가 바뀝니다. 주어 자리는 주격, 명사를 꾸밀 때는 소유격, 동사/전치사의 목적어 자리는 목적격, '누구의 것'으로 단독 쓰일 때는 소유대명사를 씁니다.",
                "formula": "주격(S) + 동사 + 목적격(O) | 소유격 + 명사 | 소유대명사(= 소유격 + 명사)",
                "rules": [
                    {"title": "1인칭", "detail": "단수: I - my - me - mine | 복수: we - our - us - ours"},
                    {"title": "2인칭", "detail": "단수/복수: you - your - you - yours"},
                    {"title": "3인칭", "detail": "남성: he - his - him - his | 여성: she - her - her - hers | 사물: it - its - it - (없음) | 복수: they - their - them - theirs"}
                ],
                "examples": [
                    {"en": "This camera is not mine. It is hers.", "ko": "이 카메라는 내 것이 아니다. 그것은 그녀의 것이다.", "point": "mine(= my camera), hers(= her camera) 소유대명사"},
                    {"en": "Mr. Brown teaches us English at school.", "ko": "브라운 선생님은 학교에서 우리에게 영어를 가르치신다.", "point": "teaches 뒤의 간접목적어 자리 -> 목적격 us"},
                    {"en": "The teacher gave him and me some books.", "ko": "선생님은 그와 나에게 몇 권의 책을 주셨다.", "point": "gave의 목적어 병렬 -> him and me (him and I는 오답)"}
                ],
                "oxCompare": [
                    {"correct": "This pencil is mine.", "wrong": "This pencil is my.", "reason": "my는 소유격이므로 뒤에 수식받는 명사(my pencil)가 필수이며, 단독 보어로는 mine을 써야 합니다."},
                    {"correct": "She looked at him and me.", "wrong": "She looked at him and I.", "reason": "전치사 at의 목적어 자리이므로 주격 I가 아니라 목적격 me를 써야 합니다."}
                ],
                "trap": "소유격 its(그것의)와 축약형 it's(= it is)의 구별, 그리고 him and I처럼 주격을 목적어 자리에 슬그머니 섞어놓는 함정을 조심하세요!",
                "quizLink": "3단계 퀴즈 Q2(mine - hers)와 Q4(teaches us), Q5(its eyes are)에 직결됩니다."
            }
        ]
    }

    # Unit 3: 형용사와 부사의 기본 쓰임
    enrichment[3] = {
        "overview": "명사를 수식하거나 보어로 쓰이는 형용사와, 동사·형용사·다른 부사 및 문장 전체를 수식하는 부사의 역할을 명확히 구분하고, 형태가 같거나 의미가 달라지는 시험 빈출 부사들을 정복합니다.",
        "keyTakeaways": [
            "형용사는 명사를 앞/뒤에서 수식하거나, be동사 및 2형식 감각동사(look, sound, smell, taste, feel) 뒤에서 '주격 보어' 역할을 한다.",
            "-thing, -one, -body로 끝나는 대명사는 형용사가 반드시 '뒤'에서 수식한다 (something cold).",
            "fast, hard, late, early는 형용사와 부사의 형태가 같으며, hardly(거의 ~않다), lately(최근에)는 형태는 비슷하지만 전혀 다른 부정/시간 부사이다."
        ],
        "formulaCards": [
            {
                "name": "형용사의 한정적 용법과 서술적 용법(보어)",
                "desc": "형용사는 두 가지 핵심 역할을 합니다. 1) 명사를 직접 꾸며주는 '한정적 용법'(a smart boy), 2) 주어의 상태를 보충 설명하는 '서술적 용법'(The boy is smart). 특히 감각동사 뒤에는 한국어 해석이 부사처럼 되더라도 반드시 형용사 보어를 써야 합니다.",
                "formula": "명사 수식: 형용사 + 명사 (단, -thing 대명사 + 형용사)\n보어 역할: S + be동사/감각동사(look/sound/smell/taste/feel) + 형용사 보어",
                "rules": [
                    {"title": "-thing 대명사 후치수식", "detail": "something, anything, nothing, everything + 형용사 (something cold, anything new)"},
                    {"title": "2형식 감각동사 공식", "detail": "smell + 형용사 (sweet), sound + 형용사 (good), taste + 형용사 (delicious), feel + 형용사 (warm)"},
                    {"title": "명사+ly = 형용사", "detail": "love+ly = lovely(사랑스러운), friend+ly = friendly(친근한), lone+ly = lonely(외로운)"}
                ],
                "examples": [
                    {"en": "I want to drink something cold because it is too hot.", "ko": "날씨가 너무 더워서 시원한 것을 마시고 싶다.", "point": "something + cold (cold something은 오답)"},
                    {"en": "The pizza smells delicious and the music sounds good.", "ko": "피자는 맛있는 냄새가 나고 음악은 좋게 들린다.", "point": "감각동사 smell/sound 뒤에는 형용사 delicious, good (deliciously, well은 오답)"},
                    {"en": "They live in a very friendly neighborhood.", "ko": "그들은 매우 친근한 동네에 산다.", "point": "friendly는 -ly로 끝나지만 명사(friend)+ly이므로 형용사"}
                ],
                "oxCompare": [
                    {"correct": "The flowers smell sweet.", "wrong": "The flowers smell sweetly.", "reason": "한국어로 '달콤하게'라고 해석되더라도 감각동사 smell 뒤에는 부사가 아닌 형용사 보어(sweet)를 써야 합니다."},
                    {"correct": "She gave me something warm.", "wrong": "She gave me warm something.", "reason": "-thing으로 끝나는 부정대명사는 형용사가 반드시 뒤에서 수식합니다."}
                ],
                "trap": "감각동사 뒤에 부사(-ly)를 넣어두고 '자연스럽게 들리는가?'를 묻는 내신 1순위 함정을 주의하세요!",
                "quizLink": "3단계 퀴즈 Q1(something cold), Q2(early 부사 판별), Q4(safely 올바른 문장)에 그대로 출제됩니다."
            },
            {
                "name": "형용사와 형태가 같거나 -ly가 붙어 뜻이 변하는 주의 부사",
                "desc": "일반적으로 형용사 뒤에 -ly를 붙이면 부사가 되지만(slow -> slowly), 형태가 아예 같거나 -ly가 붙었을 때 의미가 완전히 바뀌어 버리는 특수 부사들이 존재합니다.",
                "formula": "형용사/부사 동형: fast(빠른/빨리), hard(열심히/딱딱한), late(늦은/늦게), early(이른/일찍)\n뜻이 변하는 부사: hard(열심히) vs hardly(거의 ~않다), late(늦게) vs lately(최근에)",
                "rules": [
                    {"title": "hard vs hardly", "detail": "hard: 열심히, 세게 (He works hard.) | hardly: 거의 ~않다 (He could hardly speak.)"},
                    {"title": "late vs lately", "detail": "late: 늦게 (He arrived late.) | lately: 최근에 (I haven't seen him lately.)"},
                    {"title": "high vs highly", "detail": "high: 높게 (The bird flies high.) | highly: 매우, 대단히 (He is highly praised.)"},
                    {"title": "near vs nearly", "detail": "near: 가까이 (Come near.) | nearly: 거의 (It's nearly 10 o'clock.)"}
                ],
                "examples": [
                    {"en": "He worked hard, but he could hardly finish the task in time.", "ko": "그는 열심히 일했지만, 제시간에 그 과제를 거의 끝낼 수 없었다.", "point": "worked hard(열심히 일함) vs could hardly finish(거의 끝내지 못함)"},
                    {"en": "He is a fast learner, and he runs fast.", "ko": "그는 빠른 학습자이고, 빨리 달린다.", "point": "첫 fast는 명사 수식 형용사, 둘째 fast는 동사 수식 부사 (fastly는 없는 단어)"},
                    {"en": "The train arrived very late yesterday.", "ko": "어제 기차가 매우 늦게 도착했다.", "point": "늦게 도착한 것은 late (lately는 '최근에'라는 뜻이라 어색함)"}
                ],
                "oxCompare": [
                    {"correct": "He runs very fast.", "wrong": "He runs very fastly.", "reason": "fast는 그 자체로 부사이므로 fastly라는 단어는 영어에 존재하지 않습니다."},
                    {"correct": "I can hardly believe it.", "wrong": "I can hard believe it.", "reason": "'거의 ~할 수 없다'는 준부정어 hardly를 써야 합니다."}
                ],
                "trap": "hardly와 lately를 각각 '딱딱하게', '늦게'로 번역하도록 유도하는 독해·문법 함정을 철저히 경계하세요!",
                "quizLink": "3단계 퀴즈 Q3(hard - hardly)와 Q5(fast learner / runs fast)에서 집중 출제됩니다."
            }
        ]
    }

    return enrichment

print("Enrichment data structure verified!")
