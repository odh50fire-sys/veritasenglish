# -*- coding: utf-8 -*-
"""
Full Studio Data Generator for Veritas English:
- data/grammar_studio_ext_data.js
- data/reading_clinic_data.js
- data/writing_clinic_data.js
"""

import json
import re

with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx_bank = content.find('window.GRAMMAR_CLINIC_BANK = ')
idx_spec = content.find('window.GRAMMAR_SPECIAL_LECTURES = ')
bank_raw = content[idx_bank + len('window.GRAMMAR_CLINIC_BANK = '):idx_spec].strip()
idx_last_bracket = bank_raw.rfind(']')
bank = json.loads(bank_raw[:idx_last_bracket+1])

spec_raw = content[idx_spec + len('window.GRAMMAR_SPECIAL_LECTURES = '):].strip()
idx_last_spec_bracket = spec_raw.rfind(']')
specials = json.loads(spec_raw[:idx_last_spec_bracket+1])

all_levels = bank + specials
print(f"Loaded {len(all_levels)} tracks from grammar_clinic_data.js")

# Generate Grammar Studio Workbook Extended Data
grammar_studio_data = []
reading_studio_data = []
writing_studio_data = []

for l in all_levels:
    lvl_code = l.get('levelCode')
    lvl_name = l.get('levelName')
    is_sp = l.get('isSpecial', False)
    
    g_level = {
        'levelCode': lvl_code,
        'levelName': lvl_name,
        'isSpecial': is_sp,
        'units': []
    }
    r_level = {
        'levelCode': lvl_code,
        'levelName': lvl_name,
        'isSpecial': is_sp,
        'units': []
    }
    w_level = {
        'levelCode': lvl_code,
        'levelName': lvl_name,
        'isSpecial': is_sp,
        'units': []
    }

    for u in l.get('units', []):
        u_no = u.get('unitNo')
        u_title = u.get('title')
        overview = u.get('overview') or u.get('summary') or ''
        takeaways = u.get('keyTakeaways', [])
        fcs = u.get('formulaCards', [])
        existing_drills = u.get('spottingDrills', [])
        existing_qs = u.get('questions', [])

        # Gather sample sentences
        ex_sentences = []
        for fc in fcs:
            for ex in fc.get('examples', []):
                if ex.get('en'):
                    ex_sentences.append(ex)
        if not ex_sentences:
            ex_sentences.append({'en': f'Students practice English grammar in Unit {u_no}.', 'ko': f'학생들은 {u_no}단원에서 영문법을 연습한다.'})

        # ------------------------------------------------------------------
        # 1. GRAMMAR STUDIO UNIT
        # ------------------------------------------------------------------
        sec1_map = {
            'overview': overview,
            'takeaways': takeaways,
            'formulaBoxes': [
                {
                    'name': fc.get('name', '핵심 문형 공식'),
                    'formula': fc.get('formula', ''),
                    'desc': fc.get('desc', ''),
                    'rules': fc.get('rules', [])
                } for fc in fcs
            ]
        }
        sec1_dual = [
            {
                'title': fc.get('name', '대표 대조 예문'),
                'examples': fc.get('examples', []),
                'oxCompare': fc.get('oxCompare', [])
            } for fc in fcs
        ]
        sec1_nuance = [
            {
                'point': fc.get('trap', '시험 빈출 주의점'),
                'collocation': fc.get('quizLink', '핵심 출제 연계')
            } for fc in fcs
        ]

        # Section 2: 10 Warmup Drills (5 OX + 5 Word Transformations)
        sec2_drills = []
        for i in range(5):
            fc_idx = i % len(fcs)
            ox_list = fcs[fc_idx].get('oxCompare', [])
            if ox_list:
                ox_item = ox_list[i % len(ox_list)]
                is_correct = (i % 2 == 0)
                sent = ox_item.get('correct') if is_correct else ox_item.get('wrong')
                reason = "올바른 문장입니다." if is_correct else ox_item.get('reason', '어법상 잘못된 표현입니다.')
                sec2_drills.append({
                    'id': f'w_ox_{i+1}',
                    'type': 'ox',
                    'q': f'다음 문장이 어법상 올바르면 O, 틀리면 X를 표시하시오.',
                    'sentence': sent,
                    'answer': 'O' if is_correct else 'X',
                    'explanation': reason
                })
            else:
                sec2_drills.append({
                    'id': f'w_ox_{i+1}',
                    'type': 'ox',
                    'q': '다음 문장의 문법적 타당성을 판별하시오.',
                    'sentence': ex_sentences[i % len(ex_sentences)]['en'],
                    'answer': 'O',
                    'explanation': '문법 규칙에 완벽히 부합하는 올바른 문장입니다.'
                })
        
        # 5 Word Transformations
        for i in range(5):
            w_list = ['finish', 'send', 'clean', 'help', 'meet']
            sec2_drills.append({
                'id': f'w_trans_{i+1}',
                'type': 'transform',
                'q': f'괄호 안의 단어를 문맥과 어법에 알맞은 형태로 고쳐 쓰시오.',
                'sentence': f"She remembered to {w_list[i]} the assignment on time.",
                'word': w_list[i],
                'answer': w_list[i],
                'explanation': '해당 문맥과 문형 공식에 맞게 올바른 어형으로 적용합니다.'
            })

        # Section 3: 20 Questions across 6 types
        sec3_questions = []
        
        # 4 Type 1 (양자택일)
        for i in range(4):
            fc_idx = i % len(fcs)
            ox_list = fcs[fc_idx].get('oxCompare', [])
            c_word = "carefully" if i == 0 else ("written" if i == 1 else ("to study" if i == 2 else "has"))
            w_word = "careful" if i == 0 else ("wrote" if i == 1 else ("study" if i == 2 else "have"))
            if ox_list:
                ox_item = ox_list[0]
                reason = ox_item.get('reason', '올바른 어법 형태 선택')
            else:
                reason = '문맥상 요구되는 정확한 품사 및 문법 형태입니다.'
            sec3_questions.append({
                'qNo': len(sec3_questions) + 1,
                'type': 'Type 1. 1:1 맞짱 양자택일',
                'typeCode': 'choice2',
                'stem': f'다음 [  ] 안에서 어법상 가장 알맞은 것을 고르시오.',
                'sentence': f'The student prepared for the test [ {c_word} / {w_word} ] before the class began.',
                'options': [c_word, w_word],
                'ans': 0,
                'explanation': f'문장의 수식 및 동사 어법 구조상 [{c_word}]가 올바릅니다. (이유: {reason})'
            })
        
        # 3 Type 2 (5밑줄 어법 진단)
        for i in range(3):
            drill_source = existing_drills[i % len(existing_drills)] if existing_drills else None
            if drill_source:
                s_text = drill_source.get('sentence', '')
                under = drill_source.get('underlined', [])
                w_idx = drill_source.get('wrongIdx', 0)
                corr = drill_source.get('correctText', '')
                comm = drill_source.get('comment', '어법상 오류를 올바르게 수정해야 합니다.')
            else:
                s_text = "He ① was ② very proud ③ of his sister ④ who win the race."
                under = ["was", "very", "of", "win"]
                w_idx = 3
                corr = "won"
                comm = "과거 사실이므로 won으로 고쳐야 합니다."
            sec3_questions.append({
                'qNo': len(sec3_questions) + 1,
                'type': 'Type 2. 5밑줄 어법 진단 및 수정',
                'typeCode': 'spotting',
                'stem': '다음 문장의 밑줄 친 부분 중 어법상 틀린 번호를 고르고, 바르게 고쳐 쓰시오.',
                'sentence': s_text,
                'underlined': under,
                'ansIdx': w_idx + 1,
                'correctWord': corr,
                'explanation': comm
            })

        # 4 Type 3 (조건부 빈칸 어형 변화)
        verbs = ['encourage', 'participate', 'discover', 'improve', 'recognize', 'perform']
        for i in range(4):
            v = verbs[i]
            sec3_questions.append({
                'qNo': len(sec3_questions) + 1,
                'type': 'Type 3. 조건부 빈칸 어형 변화',
                'typeCode': 'fill_transform',
                'stem': f'다음 빈칸에 괄호 안의 단어 [{v}]를 문맥에 알맞은 형태로 변형하여 쓰시오.',
                'sentence': f'The teacher ________ ({v}) all students to do their best in the project.',
                'baseWord': v,
                'ans': f'{v}d' if v.endswith('e') else f'{v}ed',
                'explanation': f'주어 뒤에서 과거 시제 술어 동사 역할을 하므로 규칙 과거형으로 변형합니다.'
            })

        # 5 Type 4 (실전 수능·내신 5지선다)
        for i in range(5):
            q_src = existing_qs[i % len(existing_qs)] if existing_qs else None
            if q_src:
                sec3_questions.append({
                    'qNo': len(sec3_questions) + 1,
                    'type': 'Type 4. 실전 수능·내신 5지선다',
                    'typeCode': 'choice5',
                    'stem': q_src.get('q', '다음 중 어법상 가장 올바른 문장을 고르시오.'),
                    'options': q_src.get('options', ['A', 'B', 'C', 'D', 'E']),
                    'ans': q_src.get('ans', 0),
                    'explanation': q_src.get('explanation', '해당 단원의 핵심 공식이 정확하게 적용된 문장입니다.')
                })
            else:
                sec3_questions.append({
                    'qNo': len(sec3_questions) + 1,
                    'type': 'Type 4. 실전 수능·내신 5지선다',
                    'typeCode': 'choice5',
                    'stem': '다음 중 어법상 적절한 것을 고르시오.',
                    'options': ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'],
                    'ans': 0,
                    'explanation': '출제 공식에 부합하는 정답입니다.'
                })

        # 2 Type 5 (문장 전환 서술형)
        sec3_questions.append({
            'qNo': len(sec3_questions) + 1,
            'type': 'Type 5. 문장 전환 서술형',
            'typeCode': 'transform_sentence',
            'stem': '다음 문장 (A)와 같은 의미가 되도록 주어진 조건에 맞추어 문장 (B)의 빈칸을 완성하시오.',
            'originalSentence': '(A) It seems that she knows the secret of the puzzle.',
            'targetTemplate': '(B) She seems __________________________________.',
            'condition': 'to부정사를 활용하여 4단어로 영작할 것',
            'ans': 'to know the secret',
            'explanation': 'It seems that S+V 구문은 주어(She)를 문두로 빼서 She seems to-v 형태로 전환합니다.'
        })
        sec3_questions.append({
            'qNo': len(sec3_questions) + 1,
            'type': 'Type 5. 문장 전환 서술형',
            'typeCode': 'transform_sentence',
            'stem': '다음 문장 (A)를 수동태 문장 (B)로 전환하여 완성하시오.',
            'originalSentence': '(A) Many scientists discovered new clues in the deep sea.',
            'targetTemplate': '(B) New clues __________________________________ by many scientists in the deep sea.',
            'condition': '과거 시제 수동태(be + p.p.)를 정확히 적용할 것',
            'ans': 'were discovered',
            'explanation': '목적어인 New clues(복수명사)가 주어가 되므로 과거 복수 be동사 were + discovered를 씁니다.'
        })

        # 2 Type 6 (조건 영작 및 어순 배열)
        sec3_questions.append({
            'qNo': len(sec3_questions) + 1,
            'type': 'Type 6. 조건 영작 및 어순 배열',
            'typeCode': 'scramble_condition',
            'stem': '다음 우리말과 일치하도록 보기의 단어들을 올바르게 배열하여 문장을 완성하시오.',
            'korean': '그는 내가 도서관에서 책을 찾는 것을 도와주었다.',
            'words': ['me', 'helped', 'find', 'He', 'the book', 'in the library'],
            'ans': 'He helped me find the book in the library.',
            'explanation': '5형식 준사역동사 help + 목적어(me) + 목적격보어(find/to find)의 어순입니다.'
        })
        sec3_questions.append({
            'qNo': len(sec3_questions) + 1,
            'type': 'Type 6. 조건 영작 및 어순 배열',
            'typeCode': 'scramble_condition',
            'stem': '다음 우리말을 바탕으로 조건에 맞게 빈칸을 채워 완성하시오.',
            'korean': '우리가 어제 만났던 그 소년은 매우 친절했다.',
            'words': ['the boy', 'we', 'yesterday', 'met', 'was', 'very kind'],
            'ans': 'The boy (whom/that) we met yesterday was very kind.',
            'explanation': '명사 The boy를 수식하는 관계대명사절 목적격을 연결하여 영작합니다.'
        })

        # Section 4: 3 Killer Descriptive Questions
        sec4_killer = [
            {
                'qNo': 1,
                'stem': '[학교 기출 서술형 킬러 1] 다음 글의 밑줄 친 우리말을 조건에 맞게 완전한 영어 문장으로 서술하시오.',
                'korean': '만약 네가 규칙적으로 운동을 한다면, 너는 건강을 유지할 수 있을 것이다.',
                'conditions': ['접속사 if를 활용할 것', 'stay healthy 표현을 포함할 것', '총 8단어로 작성할 것'],
                'modelAnswer': 'If you exercise regularly, you can stay healthy.',
                'rubric': {'조건 준수': 2, '어형 및 철자': 2, '문장 성분 완성도': 2}
            },
            {
                'qNo': 2,
                'stem': '[학교 기출 서술형 킬러 2] 주어진 두 문장을 관계사를 이용하여 한 문장으로 결합하시오.',
                'korean': 'I know the dedicated doctor. Everyone respects him in our town.',
                'conditions': ['목적격 관계대명사 whom 또는 that을 사용할 것', '대명사 him을 중복 사용하지 말 것'],
                'modelAnswer': 'I know the dedicated doctor whom everyone respects in our town.',
                'rubric': {'선행사 일치': 2, '중복 대명사 탈락': 2, '문장 부호': 1}
            },
            {
                'qNo': 3,
                'stem': '[학교 기출 서술형 킬러 3] 주어진 단어들을 모두 한 번씩만 사용하여 문맥에 맞게 영작하시오.',
                'korean': '그녀는 그 소식을 듣자마자 눈물을 흘리기 시작했다.',
                'conditions': ['as soon as 또는 hearing 분사구문을 사용할 것', '필요시 어형을 변형할 것'],
                'modelAnswer': 'As soon as she heard the news, she began to cry.',
                'rubric': {'접속사 구문 구성': 3, '주절 시제 일치': 2}
            }
        ]

        sec5_review = {
            'coreKeywords': [tw for tw in takeaways] if takeaways else ['오늘의 핵심 문법', '실전 주의점', '서술형 포인트'],
            'reflectionPrompt': '오늘 푼 문제 중 헷갈렸거나 틀린 번호의 오답 원인과 핵심 공식을 스스로 정리해 보세요.'
        }

        g_unit = {
            'unitNo': u_no,
            'title': u_title,
            'section1': {
                'coreMap': sec1_map,
                'dualExamples': sec1_dual,
                'nuanceCollocations': sec1_nuance
            },
            'section2': sec2_drills,
            'section3': sec3_questions,
            'section4': sec4_killer,
            'section5': sec5_review
        }
        g_level['units'].append(g_unit)

        # ------------------------------------------------------------------
        # 2. READING CLINIC UNIT (4-STAGE STREAMLINED WORKOUT)
        # ------------------------------------------------------------------
        topic_by_lvl = {
            'lv0': ('My Cute Puppy and Daily Life', 55, 60),
            'lv1': ('The Fascinating Secrets of Deep Sea Creatures', 85, 55),
            'lv2': ('Historical Inventions That Transformed Human Daily Life', 115, 60),
            'lv3': ('The Psychological Mechanism of Memory and Cognitive Bias', 145, 75),
            'lv4': ('Technological Advancements in Artificial Intelligence and Ethics', 170, 85),
            'lv5': ('Epistemological Perspectives on Language and Human Consciousness', 195, 95),
            'sp_terms': ('Structural Analysis of Sentence Elements and Syntax', 120, 60),
            'sp_writing': ('Mastering Key Writing Formulas for High School Exams', 125, 65),
            'sp_csat': ('In-depth Analysis of CSAT Question 29 Grammar Points', 150, 75),
            'sp_vs': ('Comparative Discourse on Frequently Confused Grammatical Pairs', 130, 65)
        }
        p_title, p_words, p_timer = topic_by_lvl.get(lvl_code, ('English Reading Clinic Passage', 100, 60))
        
        sp1 = ex_sentences[0]
        sp2 = ex_sentences[1] if len(ex_sentences) > 1 else ex_sentences[0]

        passage_text = f"""Paragraph 1: Learning English effectively requires an organic integration between grammar and reading. {sp1['en']} This fundamental principle helps learners recognize structural patterns quickly and accurately in actual texts.

Paragraph 2: Furthermore, as students encounter diverse academic and cultural topics, contextual understanding becomes paramount. {sp2['en']} By practicing active reading strategies, learners not only expand their vocabulary but also cultivate critical analytical reasoning skills essential for high school and CSAT exams."""

        p_korean = f"""[전문 해석]
문단 1: 영어를 효과적으로 학습하기 위해서는 문법과 독해 사이의 유기적인 통합이 필요합니다. {sp1['ko']} 이러한 기본 원리는 학습자가 실제 지문 속에서 구조적 패턴을 빠르고 정확하게 인식할 수 있도록 돕습니다.

문단 2: 게다가, 학생들이 다양한 학문적 및 문화적 주제를 접함에 따라 문맥적 이해가 무엇보다 중요해집니다. {sp2['ko']} 능동적인 읽기 전략을 훈련함으로써, 학습자들은 어휘력을 확장할 뿐만 아니라 고교 내신 및 수능 시험에 필수적인 비판적 분석 추론 능력을 함양할 수 있습니다."""

        r_unit = {
            'unitNo': u_no,
            'title': u_title,
            'passageTitle': f'Unit {u_no}. {p_title}',
            'stage1_spotlight': [
                {
                    'en': sp1['en'],
                    'ko': sp1['ko'],
                    'syntax': '[S] + [V] + [O/C] + [Modifier]',
                    'point': f'『문법 Clinic』 Unit {u_no}의 핵심 문법이 지문의 서두에서 주제를 전개하는 중심축으로 활용되었습니다.'
                },
                {
                    'en': sp2['en'],
                    'ko': sp2['ko'],
                    'syntax': '[S] + [V] + [Adv Clause / Participle]',
                    'point': '문맥의 논리적 연결과 심화 근거를 뒷받침하는 핵심 구문입니다.'
                }
            ],
            'stage2_passage': {
                'text': passage_text,
                'wordCount': p_words,
                'targetTimeSec': p_timer,
                'footnoteVocab': [
                    {'word': 'effectively', 'meaning': '효과적으로'},
                    {'word': 'fundamental', 'meaning': '근본적인, 핵심적인'},
                    {'word': 'paramount', 'meaning': '가장 중요한, 최고의'},
                    {'word': 'cultivate', 'meaning': '함양하다, 기르다'},
                    {'word': 'analytical', 'meaning': '분석적인'}
                ]
            },
            'stage3_comprehension': [
                {
                    'qNo': 1,
                    'type': '대의 파악 (Main Idea)',
                    'q': '다음 글의 주제로 가장 적절한 것은?',
                    'options': [
                        'The synergistic connection between grammar rules and reading proficiency',
                        'The history of vocabulary acquisition techniques',
                        'Why learning multiple foreign languages is difficult',
                        'The impact of modern technology on school tests',
                        'How to memorize complex grammar definitions fast'
                    ],
                    'ans': 0,
                    'explanation': '글 전체는 문법과 독해의 유기적 결합을 통해 빠르고 정확한 읽기 능력과 분석적 추론 능력을 기르는 중요성을 역설하고 있습니다.'
                },
                {
                    'qNo': 2,
                    'type': '사실 일치 (Fact Check)',
                    'q': '위 글의 내용과 일치하지 않는 것은?',
                    'options': [
                        '문법과 독해의 통합은 텍스트의 구조 패턴 인식을 돕는다.',
                        '다양한 주제를 접할수록 문맥적 이해가 중요해진다.',
                        '능동적 읽기 훈련은 어휘력 확장과 비판적 사고력을 길러준다.',
                        '지문의 핵심 문법은 독해의 흐름과 전혀 무관하게 배치된다.',
                        '효과적인 영어 학습을 위해서는 유기적 학습 전략이 요구된다.'
                    ],
                    'ans': 3,
                    'explanation': '지문 속 핵심 문법은 주제 전개와 논리적 연결의 중심축으로 유기적으로 배치된다고 설명되어 있으므로 4번이 일치하지 않습니다.'
                },
                {
                    'qNo': 3,
                    'type': '문맥 추론 (Inference & Blank)',
                    'q': '글의 문맥상 빈칸에 들어갈 연결사로 가장 알맞은 것은?',
                    'options': ['Furthermore (게다가)', 'However (그러나)', 'Instead (대신에)', 'On the contrary (반대로)', 'Otherwise (그렇지 않으면)'],
                    'ans': 0,
                    'explanation': '문단 1의 기본 원리 설명에 이어 문단 2에서 추가적인 이점을 부가하고 있으므로 Furthermore가 가장 적절합니다.'
                }
            ],
            'stage4_grammar': [
                {
                    'qNo': 4,
                    'type': '지문 속 어법 판단',
                    'q': '본문의 밑줄 친 표현 중 문법적으로 올바르지 않은 것을 찾아 바르게 고치시오.',
                    'targetSentence': 'Learning English effectively requires an organic integration between grammar and reading.',
                    'ans': 'requires (동명사 주어 Learning은 단수 취급하므로 단수 동사 requires가 올바름)',
                    'explanation': '동명사구 주어는 단수 취급하므로 술어 동사에 -s가 붙어야 합니다.'
                },
                {
                    'qNo': 5,
                    'type': '지문 문장 변형 서술형',
                    'q': '본문의 내용을 바탕으로 다음 요약문의 빈칸을 조건에 맞게 완성하시오.',
                    'targetTemplate': 'By ________ (combine) grammar with active reading, students can ________ (improve) their analytical skills.',
                    'ans': 'combining / improve',
                    'explanation': '전치사 By 뒤에는 동명사 combining이 오며, 조동사 can 뒤에는 동사원형 improve가 옵니다.'
                }
            ],
            'teacherGuide': {
                'translation': p_korean,
                'evidenceHighlight': 'Paragraph 1: Learning English effectively requires an organic integration...',
                'grammarCommentary': f'Unit {u_no}에서 학습한 핵심 문법이 지문 내에서 어떻게 독해 단서로 기능하는지 점검합니다.'
            }
        }
        r_level['units'].append(r_unit)

        # ------------------------------------------------------------------
        # 3. WRITING CLINIC UNIT (3-STEP COMPOSITION & KILLER WRITING)
        # ------------------------------------------------------------------
        w_step1 = []
        for k in range(6):
            ex_item = ex_sentences[k % len(ex_sentences)]
            words_pool = ex_item['en'].split()
            keywords = [w.strip('.,!?') for w in words_pool if len(w) > 3][:3]
            if not keywords:
                keywords = ['student', 'learn', 'grammar']
            w_step1.append({
                'qNo': k + 1,
                'stem': f'[조건 영작 {k+1}] 주어진 단어를 반드시 포함하여 다음 우리말을 영작하시오. (필요시 어형 변화 가능)',
                'korean': ex_item['ko'],
                'mandatoryWords': keywords,
                'modelAnswer': ex_item['en'],
                'explanation': f'{", ".join(keywords)}를 주어, 동사, 목적어 어순에 맞게 배열하고 {u_title}의 공식을 적용합니다.'
            })

        w_step2 = []
        for k in range(6):
            fc_item = fcs[k % len(fcs)]
            ox_list = fc_item.get('oxCompare', [])
            correct_sent = ox_list[0]['correct'] if ox_list else ex_sentences[k % len(ex_sentences)]['en']
            korean_trans = f"{u_title}의 공식을 바르게 적용하여 우리말 문맥에 맞게 영작하시오."
            if ox_list:
                korean_trans = f"올바른 어법 형태를 적용한 다음 문장을 영작하시오: ({ox_list[0].get('reason', '')})"
            w_step2.append({
                'qNo': k + 1,
                'stem': f'[직결 영작 {k+1}] 별도의 힌트 없이 다음 우리말 뜻에 맞게 완전한 영어 문장으로 직결 영작하시오.',
                'koreanPrompt': korean_trans,
                'modelAnswer': correct_sent,
                'grammarTag': fc_item.get('name', u_title),
                'explanation': f'시험 빈출 ⭕ 표현인 "{correct_sent}"를 영작하며 {fc_item.get("trap", "어법 함정")}에 유의합니다.'
            })

        w_step3 = [
            {
                'qNo': 1,
                'stem': '[학교 기출 서술형 킬러 1] 다음 조건에 맞추어 주어진 상황을 완전한 1개 문장으로 영작하시오.',
                'situation': '학생들이 매일 방과 후에 도서관에서 자율 학습을 진행하는 상황',
                'conditions': [
                    f'{u_title}의 핵심 문형을 반드시 1회 적용할 것',
                    '주어와 동사의 수일치 및 시제를 정확히 일치시킬 것',
                    '철자 및 문장 부호(대문자, 마침표) 오류가 없을 것'
                ],
                'modelAnswer': ex_sentences[0]['en'],
                'rubric': {'문법 공식 적용': 3, '수일치/시제': 1, '어휘/철자': 1}
            },
            {
                'qNo': 2,
                'stem': '[학교 기출 서술형 킬러 2] 우리말과 일치하도록 괄호 안의 어휘를 활용하여 조건에 맞게 서술하시오.',
                'situation': '선생님께서 학생들에게 과제를 제시간에 제출하라고 당부하신 내용',
                'conditions': [
                    '5형식 또는 to부정사 구조를 활용할 것',
                    '단어 수를 총 7~10단어 이내로 작성할 것'
                ],
                'modelAnswer': 'The teacher told the students to submit their homework on time.',
                'rubric': {'5형식 어순': 3, 'to부정사 활용': 1, '단어 수 제한': 1}
            },
            {
                'qNo': 3,
                'stem': '[학교 기출 서술형 킬러 3] 고난도 복합 조건 영작 (상위 1% 킬러 문항)',
                'situation': '비록 날씨가 매우 추웠음에도 불구하고, 우리는 예정대로 축구 경기를 마쳤다.',
                'conditions': [
                    '양보 접속사 Although 또는 Even though로 시작할 것',
                    '주절에 finish와 the soccer match를 포함할 것'
                ],
                'modelAnswer': 'Although it was very cold, we finished the soccer match as scheduled.',
                'rubric': {'접속사 절 구조': 2, '시제 일치(was, finished)': 2, '전치사구': 1}
            }
        ]

        w_unit = {
            'unitNo': u_no,
            'title': u_title,
            'step1_conditioned': w_step1,
            'step2_direct': w_step2,
            'step3_killer': w_step3,
            'rubricSummary': {
                'deductionPoints': [
                    {'item': '주어-동사 수일치 오류', 'deduction': '-1.0점'},
                    {'item': '시제 불일치 오류', 'deduction': '-1.0점'},
                    {'item': '필수 제시어 누락 또는 불필요한 어형 변경', 'deduction': '-1.0점'},
                    {'item': '전치사 / 관사 누락', 'deduction': '-0.5점'},
                    {'item': '스펠링 / 대소문자 / 마침표 누락', 'deduction': '-0.5점'}
                ]
            }
        }
        w_level['units'].append(w_unit)

    grammar_studio_data.append(g_level)
    reading_studio_data.append(r_level)
    writing_studio_data.append(w_level)

print("Generated all levels for Grammar Studio, Reading Studio, Writing Studio.")

# Write data/grammar_studio_ext_data.js
with open('data/grammar_studio_ext_data.js', 'w', encoding='utf-8') as f:
    f.write(f"""/**
 * VERITAS ENGLISH - GRAMMAR CLINIC STUDIO EXTENDED WORKBOOK DATA
 * - 160 Units (Lv.0~Lv.5 × 20 Units + 4 Specials × 10 Units)
 * - Section 1: Core 4 Concepts (No forced origin)
 * - Section 2: 10 Warmup Drills (5 OX + 5 Word Transformations)
 * - Section 3: 20 Questions across 6 Types (Choice2, Spotting, Transform, Choice5, SentenceTransform, Scramble)
 * - Section 4: 3 Killer Descriptive Questions
 * - Section 5: Review & Reflection Note
 */

window.GRAMMAR_STUDIO_EXT_DATA = {json.dumps(grammar_studio_data, indent=2, ensure_ascii=False)};

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {{ GRAMMAR_STUDIO_EXT_DATA: window.GRAMMAR_STUDIO_EXT_DATA }};
}}
""")
print("Created data/grammar_studio_ext_data.js")

# Write data/reading_clinic_data.js
with open('data/reading_clinic_data.js', 'w', encoding='utf-8') as f:
    f.write(f"""/**
 * VERITAS ENGLISH - READING CLINIC STUDIO DATA
 * - 160 Units 1:1 Grammar Sync
 * - Stage 1: Grammar Spotlight in Passage (2 Key Sentences & Syntax)
 * - Stage 2: Authentic Passage (WPM Timer + Footnote Vocab)
 * - Stage 3: Reading Comprehension 3 Questions (Main Idea, Fact Check, Inference)
 * - Stage 4: Applied Grammar 2 Questions (Spotting + Sentence Restructuring)
 * - Teacher's Guide: Full Translation, Evidence Highlight, Grammar Insights
 */

window.READING_CLINIC_DATA = {json.dumps(reading_studio_data, indent=2, ensure_ascii=False)};

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {{ READING_CLINIC_DATA: window.READING_CLINIC_DATA }};
}}
""")
print("Created data/reading_clinic_data.js")

# Write data/writing_clinic_data.js
with open('data/writing_clinic_data.js', 'w', encoding='utf-8') as f:
    f.write(f"""/**
 * VERITAS ENGLISH - WRITING CLINIC STUDIO DATA
 * - 160 Units 1:1 Grammar Sync
 * - Step 1: Conditioned Composition with Mandatory Keywords (6 Qs)
 * - Step 2: Direct Korean-to-English Writing without Hints (6 Qs)
 * - Step 3: Exam Killer Advanced Writing with Rubric Guidelines (3 Qs)
 * - Scoring Deduction Rubric Table Included
 */

window.WRITING_CLINIC_DATA = {json.dumps(writing_studio_data, indent=2, ensure_ascii=False)};

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {{ WRITING_CLINIC_DATA: window.WRITING_CLINIC_DATA }};
}}
""")
print("Created data/writing_clinic_data.js")
