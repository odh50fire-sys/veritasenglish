import json
import re

# Load current grammar_clinic_data.js
with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

s = text.find('window.GRAMMAR_CLINIC_BANK = [')
e = text.find(';\nwindow.GRAMMAR_SPECIAL_LECTURES')
if e == -1: e = text.rfind('];') + 1

data = json.loads(text[s+29:e])

# Define curated spotting drills for regular units 1~40
REGULAR_DRILLS = {
    1: {
        "sentence": "My uncle lives in London and he teach English at school.",
        "underlined": ["lives", "in London", "he", "teach"],
        "wrongIndex": 3,
        "correction": "teaches",
        "explanation": "주어 he가 3인칭 단수 현재이므로 일반동사 teach 뒤에 -es를 붙여 teaches로 고쳐야 합니다."
    },
    2: {
        "sentence": "The teacher gave him and I some books, but they were hers.",
        "underlined": ["gave", "him and I", "some books", "hers"],
        "wrongIndex": 1,
        "correction": "him and me",
        "explanation": "동사 gave의 간접목적어 자리이므로 주격 I가 아니라 목적격 me를 써서 'him and me'가 되어야 합니다."
    },
    3: {
        "sentence": "The train arrived very lately, so I could hardly catch the bus.",
        "underlined": ["train", "lately", "so", "hardly"],
        "wrongIndex": 1,
        "correction": "late",
        "explanation": "'늦게'라는 뜻의 부사는 late입니다. lately는 '최근에'라는 뜻이므로 문맥에 맞지 않습니다."
    },
    4: {
        "sentence": "What did you go to the museum yesterday? I took the subway.",
        "underlined": ["What", "did you go", "to the museum", "took"],
        "wrongIndex": 0,
        "correction": "How",
        "explanation": "지하철을 타고 갔다는 이동 수단/방법을 묻고 있으므로 의문사 How를 써야 합니다."
    },
    5: {
        "sentence": "Listen! The baby cries in the next room right now.",
        "underlined": ["Listen", "cries", "in the next room", "right now"],
        "wrongIndex": 1,
        "correction": "is crying",
        "explanation": "Listen!과 right now로 보아 지금 실시간으로 일어나는 동작이므로 현재진행형 is crying을 써야 합니다."
    },
    6: {
        "sentence": "You must not bring an umbrella. It is not going to rain today.",
        "underlined": ["must not", "bring", "is not going", "to rain"],
        "wrongIndex": 0,
        "correction": "don't have to (또는 don't need to)",
        "explanation": "비가 오지 않을 것이므로 우산을 가져올 '필요가 없다'는 의미의 don't have to가 적절합니다. (must not은 '가져오면 안 된다'는 금지)"
    },
    7: {
        "sentence": "The pizza smells deliciously and the music sounds good.",
        "underlined": ["smells", "deliciously", "music", "good"],
        "wrongIndex": 1,
        "correction": "delicious",
        "explanation": "감각동사 smell 뒤에는 부사가 아닌 형용사 보어(delicious)가 와야 합니다."
    },
    8: {
        "sentence": "How an amazing view this is! How beautiful the mountains are!",
        "underlined": ["How an", "amazing view", "How beautiful", "are"],
        "wrongIndex": 0,
        "correction": "What an",
        "explanation": "감탄 대상이 명사구(an amazing view)이므로 'What a(n) + 형용사 + 명사 + 주어 + 동사!' 공식을 적용하여 What an으로 고쳐야 합니다."
    },
    9: {
        "sentence": "He gave me a piece of paper to write on, but I had no pen to write on.",
        "underlined": ["gave me", "paper to write on", "had no", "pen to write on"],
        "wrongIndex": 3,
        "correction": "pen to write with",
        "explanation": "펜은 그것을 가지고 쓰는 도구이므로 전치사 with를 동반한 to write with가 되어야 올바릅니다."
    },
    10: {
        "sentence": "Don't forget locking the front door when you leave the house.",
        "underlined": ["Don't forget", "locking", "front door", "when you leave"],
        "wrongIndex": 1,
        "correction": "to lock",
        "explanation": "forget 뒤에 미래에 할 일을 잊지 말라고 당부할 때는 to부정사(to lock)를 써야 합니다. (-ing는 과거에 했던 일)"
    },
    11: {
        "sentence": "My uncle has moved to Canada two years ago and he still lives there.",
        "underlined": ["has moved", "to Canada", "two years ago", "still lives"],
        "wrongIndex": 0,
        "correction": "moved",
        "explanation": "two years ago처럼 명백한 과거 시점을 나타내는 부사구는 현재완료(has moved)와 함께 쓸 수 없으며 단순과거형 moved를 써야 합니다."
    },
    12: {
        "sentence": "My mom made a delicious birthday cake to me yesterday.",
        "underlined": ["made", "birthday cake", "to me", "yesterday"],
        "wrongIndex": 2,
        "correction": "for me",
        "explanation": "수여동사 make는 4형식을 3형식으로 전환할 때 간접목적어 앞에 전치사 for를 씁니다. (make/buy/cook/get -> for)"
    },
    13: {
        "sentence": "This puzzle is very more difficult than the one we solved yesterday.",
        "underlined": ["puzzle", "very", "more difficult", "than"],
        "wrongIndex": 1,
        "correction": "much (또는 even, still, far, a lot)",
        "explanation": "비교급(more difficult)을 수식·강조할 때는 very를 쓸 수 없고 much, even, still, far, a lot을 씁니다."
    },
    14: {
        "sentence": "There used to being a big bookstore on the corner of the street.",
        "underlined": ["There", "used to being", "bookstore", "on the corner"],
        "wrongIndex": 1,
        "correction": "used to be",
        "explanation": "'과거에 ~이 있었다(과거의 상태)'를 나타낼 때는 'used to + 동사원형(be)'을 써야 합니다."
    },
    15: {
        "sentence": "The tragic car accident was happened on the highway last night.",
        "underlined": ["accident", "was happened", "on the highway", "last night"],
        "wrongIndex": 1,
        "correction": "happened",
        "explanation": "happen, occur, appear, disappear 등 자동사는 목적어를 갖지 않으므로 수동태(be happened)로 쓸 수 없습니다."
    },
    16: {
        "sentence": "If it will rain tomorrow, the baseball game will be canceled.",
        "underlined": ["If it", "will rain", "tomorrow", "will be canceled"],
        "wrongIndex": 1,
        "correction": "rains",
        "explanation": "조건이나 시간을 나타내는 부사절(If절)에서는 미래의 일이라도 will을 쓰지 않고 현재시제(rains)가 미래를 대신합니다."
    },
    17: {
        "sentence": "The teacher made all students to write an essay, but she allowed us to take a break.",
        "underlined": ["made", "to write", "essay", "to take"],
        "wrongIndex": 1,
        "correction": "write",
        "explanation": "사역동사 make는 목적격 보어로 to부정사가 아닌 동사원형(write)을 취합니다."
    },
    18: {
        "sentence": "I met a boy who father is a famous astronaut in NASA.",
        "underlined": ["met", "who", "father is", "famous"],
        "wrongIndex": 1,
        "correction": "whose",
        "explanation": "선행사 a boy와 뒤 명사 father 사이에 소유 관계(~의 아버지)가 성립하므로 소유격 관계대명사 whose를 써야 합니다."
    },
    19: {
        "sentence": "This is that I have been looking for all day long.",
        "underlined": ["This is", "that", "looking for", "all day long"],
        "wrongIndex": 1,
        "correction": "what",
        "explanation": "선행사가 없고 for 뒤의 목적어가 비어 있는 불완전한 절을 이끌어 '~하는 것'의 의미를 나타내므로 관계대명사 what이 알맞습니다."
    },
    20: {
        "sentence": "Tell me the way how you managed to pass the difficult exam.",
        "underlined": ["Tell me", "the way how", "managed", "to pass"],
        "wrongIndex": 1,
        "correction": "the way 또는 how (둘 중 하나만)",
        "explanation": "관계부사 how는 선행사 the way와 절대로 함께 쓸 수 없으며 반드시 the way 또는 how 둘 중 하나만 써야 합니다."
    },
    21: {
        "sentence": "The news about the accident was deeply shocked to everyone.",
        "underlined": ["news", "accident", "deeply", "shocked"],
        "wrongIndex": 3,
        "correction": "shocking",
        "explanation": "사고 소식(The news)이 사람들에게 충격을 '주는' 능동의 주체이므로 현재분사 shocking을 써야 합니다."
    },
    22: {
        "sentence": "Knowing not what to say, she just remained silent.",
        "underlined": ["Knowing not", "what to say", "just", "remained"],
        "wrongIndex": 0,
        "correction": "Not knowing",
        "explanation": "분사구문의 부정은 부정어 not을 반드시 분사 바로 앞에 두어야 하므로 Not knowing이 올바릅니다."
    },
    23: {
        "sentence": "If I had known his phone number, I could call him yesterday.",
        "underlined": ["If I", "had known", "could call", "yesterday"],
        "wrongIndex": 2,
        "correction": "could have called",
        "explanation": "과거 사실에 대한 반대 가정이므로 가정법 과거완료 공식(If S had p.p. ~ S 조동사과거 have p.p.)에 따라 could have called가 되어야 합니다."
    },
    24: {
        "sentence": "Seldom she leaves the house without wearing her favorite sunglasses.",
        "underlined": ["Seldom", "she leaves", "without wearing", "favorite"],
        "wrongIndex": 1,
        "correction": "does she leave",
        "explanation": "부정어 Seldom이 문두에 오면 '조동사/do + 주어 + 동사원형'의 도치가 일어나므로 does she leave로 고쳐야 합니다."
    },
    25: {
        "sentence": "The discovery of new treatments for these rare diseases have saved many lives.",
        "underlined": ["discovery", "new treatments", "rare diseases", "have saved"],
        "wrongIndex": 3,
        "correction": "has saved",
        "explanation": "문장의 핵심 주어는 단수명사 The discovery이므로 복수 동사 have saved가 아닌 단수 동사 has saved를 써야 합니다."
    },
    26: {
        "sentence": "The committee recommended that the proposal is rejected immediately.",
        "underlined": ["committee", "recommended", "proposal", "is rejected"],
        "wrongIndex": 3,
        "correction": "(should) be rejected",
        "explanation": "제안/권고 동사 recommend 뒤의 that절에서 당위성(~해야 한다)을 나타낼 때는 '(should) + 동사원형'을 쓰므로 be rejected가 되어야 합니다."
    },
    27: {
        "sentence": "The manager was looking for a candidate which had extensive experience in software development.",
        "underlined": ["looking for", "candidate", "which had", "extensive experience"],
        "wrongIndex": 2,
        "correction": "who had (또는 that had)",
        "explanation": "선행사 a candidate는 사람이므로 관계대명사 which가 아닌 who 또는 that을 써야 합니다."
    },
    28: {
        "sentence": "She was listening to the teacher with her legs crossing and arms folded.",
        "underlined": ["was listening", "with her legs", "crossing", "folded"],
        "wrongIndex": 2,
        "correction": "crossed",
        "explanation": "다리는 사람에 의해 꼬여지는 수동의 관계이므로 'with + 목적어 + p.p.(crossed)' 구문이 되어야 합니다."
    },
    29: {
        "sentence": "Had you arrived five minutes earlier, you would see the famous singer.",
        "underlined": ["Had you arrived", "earlier", "would see", "famous singer"],
        "wrongIndex": 2,
        "correction": "would have seen",
        "explanation": "조건절이 If you had arrived의 도치형(Had you arrived)으로 과거 사실 가정이므로 주절도 would have seen이 되어야 합니다."
    },
    30: {
        "sentence": "Not only the students but also the teacher were excited about the upcoming field trip.",
        "underlined": ["Not only", "students", "teacher were", "excited about"],
        "wrongIndex": 2,
        "correction": "teacher was",
        "explanation": "'Not only A but also B' 구문은 B(the teacher)에 수일치하므로 단수 동사 was가 되어야 합니다."
    },
    31: {
        "sentence": "The heavy rain prevented us to go hiking in the mountains.",
        "underlined": ["heavy rain", "prevented us", "to go", "in the mountains"],
        "wrongIndex": 2,
        "correction": "from going",
        "explanation": "'prevent + 목적어 + from -ing' 구문은 목적어가 ~하는 것을 막다라는 뜻이므로 to go가 아닌 from going을 써야 합니다."
    },
    32: {
        "sentence": "He suggested that we took a short rest before climbing the steep hill.",
        "underlined": ["suggested", "that we", "took", "before climbing"],
        "wrongIndex": 2,
        "correction": "(should) take",
        "explanation": "제안 동사 suggest 뒤의 that절에서는 '(should) + 동사원형'을 쓰므로 took이 아닌 take가 올바릅니다."
    },
    33: {
        "sentence": "The museum which we visited it yesterday was truly magnificent.",
        "underlined": ["museum", "which we", "visited it", "truly magnificent"],
        "wrongIndex": 2,
        "correction": "visited",
        "explanation": "목적격 관계대명사 which가 이미 목적어 역할을 하므로 visited 뒤에 대명사 it을 중복해서 쓰면 안 됩니다."
    },
    34: {
        "sentence": "Standing on top of the hill, the entire city could be seen clearly.",
        "underlined": ["Standing on", "top of the hill", "entire city", "could be seen"],
        "wrongIndex": 0,
        "correction": "When we stood on (또는 주어를 사람으로 전환)",
        "explanation": "도시(the entire city)가 언덕 위에 서 있을 수 없으므로 현수분사구문 오류입니다. 주절의 주어와 분사의 의미상 주어가 일치해야 합니다."
    },
    35: {
        "sentence": "I would rather staying at home than go out in this freezing weather.",
        "underlined": ["would rather", "staying", "at home", "go out"],
        "wrongIndex": 1,
        "correction": "stay",
        "explanation": "'would rather + 동사원형 A than 동사원형 B' 구문이므로 staying이 아니라 동사원형 stay를 써야 합니다."
    },
    36: {
        "sentence": "Little she realized that her life was about to change completely.",
        "underlined": ["Little", "she realized", "that her life", "about to change"],
        "wrongIndex": 1,
        "correction": "did she realize",
        "explanation": "부정어 Little이 문두에 오면 'did + 주어 + 동사원형'으로 도치되므로 did she realize로 고쳐야 합니다."
    },
    37: {
        "sentence": "The price of organic vegetables are much higher than that of regular vegetables.",
        "underlined": ["price of", "organic vegetables", "are much higher", "that of"],
        "wrongIndex": 2,
        "correction": "is much higher",
        "explanation": "주어는 복수명사 vegetables가 아니라 단수명사 The price이므로 단수 동사 is가 되어야 합니다."
    },
    38: {
        "sentence": "It is essential that every student understands the safety guidelines thoroughly.",
        "underlined": ["essential", "every student", "understands", "safety guidelines"],
        "wrongIndex": 2,
        "correction": "(should) understand",
        "explanation": "이성적 판단/필수 형용사 essential 뒤의 that절에서는 '(should) + 동사원형'을 쓰므로 understand가 되어야 합니다."
    },
    39: {
        "sentence": "She bought a delicate antique vase, that was made in the eighteenth century.",
        "underlined": ["bought", "delicate antique vase", "that was made", "eighteenth century"],
        "wrongIndex": 2,
        "correction": "which was made",
        "explanation": "관계대명사 that은 콤마(,) 뒤의 계속적 용법으로 쓸 수 없으므로 which로 고쳐야 합니다."
    },
    40: {
        "sentence": "Seeing from a distance, the ancient rock resembles a giant sleeping turtle.",
        "underlined": ["Seeing from", "distance", "ancient rock", "resembles"],
        "wrongIndex": 0,
        "correction": "Seen from",
        "explanation": "바위(the ancient rock)는 멀리서 바라보아 '지는' 수동의 대상이므로 과거분사 Seen from이 되어야 합니다."
    }
}

# Special lectures corrections
SPECIAL_DRILLS = {
    101: {
        "sentence": "The chef prepared careful a delicious meal for the hungry guests.",
        "underlined": ["The chef", "prepared careful", "a delicious meal", "hungry guests"],
        "wrongIndex": 1,
        "correction": "prepared carefully",
        "explanation": "동사 prepared를 수식하는 자리이므로 형용사 careful이 아니라 부사 carefully가 와야 합니다."
    },
    105: {
        "sentence": "The girl who she won the science contest is my younger sister.",
        "underlined": ["The girl", "who she", "won the science contest", "younger sister"],
        "wrongIndex": 1,
        "correction": "who",
        "explanation": "주격 관계대명사 who가 이미 주어 역할을 하므로 인칭대명사 she를 중복해서 쓰면 안 됩니다."
    },
    107: {
        "sentence": "Despite it rained heavily all afternoon, they continued the baseball match.",
        "underlined": ["Despite", "it rained heavily", "continued", "baseball match"],
        "wrongIndex": 0,
        "correction": "Although (또는 Even though)",
        "explanation": "뒤에 'it rained heavily'라는 주어+동사의 절이 이어지므로 전치사 Despite가 아니라 접속사 Although를 써야 합니다."
    },
    112: {
        "sentence": "Had he listen to my advice, he would not have failed the driving test.",
        "underlined": ["Had he listen", "to my advice", "would not have", "failed"],
        "wrongIndex": 0,
        "correction": "Had he listened",
        "explanation": "가정법 과거완료 If he had listened에서 If가 생략된 도치 구문이므로 had 뒤에 과거분사 listened가 와야 합니다."
    },
    117: {
        "sentence": "The ability of humans to communicate complex abstract ideas through language distinguishing them from all other species.",
        "underlined": ["ability of humans", "to communicate", "distinguishing", "from all other"],
        "wrongIndex": 2,
        "correction": "distinguishes",
        "explanation": "문장의 본동사 자리입니다. 주어 The ability에 호응하는 단수 본동사 distinguishes가 와야 합니다."
    },
    121: {
        "sentence": "Regular meditation helps individuals keep their minds calmly even during severe crises.",
        "underlined": ["Regular meditation", "keep their minds", "calmly", "during severe crises"],
        "wrongIndex": 2,
        "correction": "calm",
        "explanation": "keep + 목적어(their minds) + 목적격 보어 자리이므로 부사 calmly가 아닌 형용사 calm이 와야 합니다."
    }
}

# Apply to data
for lvl in data:
    for u in lvl['units']:
        uNo = u['unitNo']
        if uNo in REGULAR_DRILLS:
            u['spottingDrills'][0] = {
                "id": f"sp_{uNo:02d}",
                **REGULAR_DRILLS[uNo]
            }
        elif uNo in SPECIAL_DRILLS:
            u['spottingDrills'][0] = {
                "id": f"drill_sp_{uNo-100:02d}",
                **SPECIAL_DRILLS[uNo]
            }

# Verify ALL 70 units pass test_inline_split
def test_inline_split(sentence, underlined):
    parts = []
    cur = 0
    for i, target in enumerate(underlined):
        pos = sentence.find(target, cur)
        if pos == -1:
            return False, f"Target '{target}' not found starting at {cur} in '{sentence}'"
        parts.append(sentence[cur:pos])
        parts.append(f"[{i+1}: {target}]")
        cur = pos + len(target)
    parts.append(sentence[cur:])
    return True, "".join(parts)

all_ok = True
for lvl in data:
    for u in lvl['units']:
        d = u['spottingDrills'][0]
        ok, res = test_inline_split(d['sentence'], d['underlined'])
        if not ok:
            print(f"FAILED Unit {u['unitNo']}: {res}")
            all_ok = False
        # Also ensure wrongIndex is valid and correction != wrong word
        wi = d['wrongIndex']
        wrong_word = d['underlined'][wi]
        if wrong_word == d['correction']:
            print(f"FAILED Unit {u['unitNo']}: wrong word equals correction '{wrong_word}'")
            all_ok = False

if all_ok:
    print("SUCCESS! All 70 units' spotting drills passed test_inline_split with 100% precision!")

    # Write back to data/grammar_clinic_data.js
    regular_levels = [l for l in data if not l.get('isSpecial')]
    special_courses = [l for l in data if l.get('isSpecial')]

    js_code = "/**\n"
    js_code += " * Veritas English - 영문법 클리닉 정규 5대 레벨 40단원 + 테마별 4대 특강 30단원 (총 70단원)\n"
    js_code += " * 정규 과정: Lv.1 중1 ~ Lv.5 수능 킬러 (40단원, 200문항, 40 어법 클리닉)\n"
    js_code += " * 테마 특강: 용어 특강, 서술형 특강, 수능 29번 특강, 혼동 문법 VS 특강 (30단원, 150문항, 30 어법 클리닉)\n"
    js_code += " */\n"
    js_code += "window.GRAMMAR_CLINIC_BANK = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    js_code += "window.GRAMMAR_SPECIAL_LECTURES = " + json.dumps(special_courses, ensure_ascii=False, indent=2) + ";\n"

    with open('data/grammar_clinic_data.js', 'w', encoding='utf-8') as f:
        f.write(js_code)
    print("Updated data/grammar_clinic_data.js successfully!")
