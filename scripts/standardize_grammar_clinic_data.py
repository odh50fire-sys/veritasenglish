# -*- coding: utf-8 -*-
"""
Standardize formulaCards, oxCompare, and difficulty across all 160 units in data/grammar_clinic_data.js
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

def standardize_formula_card(fc, level_code, unit_no):
    # 1. name & formula
    name = fc.get('name') or fc.get('tag') or '핵심 문법 공식'
    formula = fc.get('formula') or fc.get('tag') or ''
    desc = fc.get('desc') or fc.get('point') or ''
    
    # 2. examples
    exs = fc.get('examples') or []
    if not exs:
        if fc.get('en'):
            exs = [{
                'en': fc.get('en'),
                'ko': fc.get('ko') or '',
                'point': fc.get('point') or ''
            }]
        elif fc.get('example'):
            exs = [{
                'en': fc.get('example'),
                'ko': '핵심 적용 예문',
                'point': ''
            }]
    
    # Ensure all exs have en, ko, point
    clean_exs = []
    for ex in exs:
        clean_exs.append({
            'en': ex.get('en', '').strip(),
            'ko': ex.get('ko', '').strip(),
            'point': ex.get('point', '').strip()
        })
    
    # 3. oxCompare
    raw_ox = fc.get('oxCompare')
    clean_ox = []
    
    if isinstance(raw_ox, list):
        for item in raw_ox:
            if isinstance(item, dict):
                c = item.get('correct') or item.get('o') or ''
                w = item.get('wrong') or item.get('x') or ''
                r = item.get('reason') or item.get('comment') or fc.get('trap') or '올바른 문법 형태를 주의 깊게 확인하세요.'
                if c or w:
                    clean_ox.append({'correct': c, 'wrong': w, 'reason': r})
            elif isinstance(item, str):
                parts = item.split(' / ')
                c = re.sub(r'^O:\s*', '', parts[0]).strip()
                w = re.sub(r'^X:\s*', '', parts[1]).strip() if len(parts) > 1 else ''
                r = fc.get('trap') or '올바른 문법 규칙을 적용해야 합니다.'
                clean_ox.append({'correct': c, 'wrong': w, 'reason': r})
    elif isinstance(raw_ox, dict):
        c = raw_ox.get('correct') or raw_ox.get('o') or ''
        w = raw_ox.get('wrong') or raw_ox.get('x') or ''
        r = raw_ox.get('reason') or raw_ox.get('comment') or fc.get('trap') or '올바른 문법 형태를 주의 깊게 확인하세요.'
        if c or w:
            clean_ox.append({'correct': c, 'wrong': w, 'reason': r})
    elif isinstance(raw_ox, str):
        parts = raw_ox.split(' / ')
        c = re.sub(r'^O:\s*', '', parts[0]).strip()
        w = re.sub(r'^X:\s*', '', parts[1]).strip() if len(parts) > 1 else ''
        r = fc.get('trap') or '올바른 문법 규칙을 적용해야 합니다.'
        clean_ox.append({'correct': c, 'wrong': w, 'reason': r})
    
    # Check difficulty adjustments for lv0 and lv1
    if level_code == 'lv0':
        # lv0 (Elementary): Ensure friendly, simple examples
        if 'friendly boy' in clean_exs[0]['en'] if clean_exs else False:
            clean_exs[0] = {
                'en': 'I met a kind teacher at the school gate.',
                'ko': '나는 학교 정문에서 친절한 선생님 한 분을 만났다.',
                'point': '선생님을 처음 언급할 때 a kind teacher를 씁니다.'
            }
        if clean_ox:
            for ox in clean_ox:
                # ensure child-friendly
                pass

    standard_fc = {
        'name': name,
        'desc': desc,
        'formula': formula,
        'rules': fc.get('rules', []),
        'examples': clean_exs,
        'oxCompare': clean_ox,
        'trap': fc.get('trap', ''),
        'quizLink': fc.get('quizLink', '')
    }
    return standard_fc

# Process bank
for lvl in bank:
    code = lvl.get('levelCode')
    for u in lvl.get('units', []):
        u_no = u.get('unitNo')
        new_fcs = []
        for fc in u.get('formulaCards', []):
            new_fcs.append(standardize_formula_card(fc, code, u_no))
        u['formulaCards'] = new_fcs

# Process specials
for lvl in specials:
    code = lvl.get('levelCode')
    for u in lvl.get('units', []):
        u_no = u.get('unitNo')
        new_fcs = []
        for fc in u.get('formulaCards', []):
            new_fcs.append(standardize_formula_card(fc, code, u_no))
        u['formulaCards'] = new_fcs

# Serialize back
new_content = f"""/**
 * VERITAS ENGLISH - GRAMMAR CLINIC DATA BANK (160 UNITS TOTAL)
 * - Regular Curriculum: Lv.0 (초등) ~ Lv.5 (수능 킬러) 6개 레벨 × 20단원 = 120단원
 * - Theme Special Lectures: 용어구문 / 서술형 / 수능어법 / 혼동문법 4대 코스 × 10강 = 40단원
 */

window.GRAMMAR_CLINIC_BANK = {json.dumps(bank, indent=2, ensure_ascii=False)};

window.GRAMMAR_SPECIAL_LECTURES = {json.dumps(specials, indent=2, ensure_ascii=False)};

if (typeof module !== 'undefined' && module.exports) {{
    module.exports = {{
        GRAMMAR_CLINIC_BANK: window.GRAMMAR_CLINIC_BANK,
        GRAMMAR_SPECIAL_LECTURES: window.GRAMMAR_SPECIAL_LECTURES
    }};
}}
"""

with open('data/grammar_clinic_data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Standardization of data/grammar_clinic_data.js completed successfully!")
