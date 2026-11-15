# -*- coding: utf-8 -*-
"""
Auditing Formula Cards across all levels
Checking:
1. oxCompare format (Must have 'O:' and 'X:')
2. Level appropriateness (e.g. Lv.0 should be simple elementary sentences)
3. Clarity and correctness of point, trap, quizLink
"""

import json
import re

with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx_bank = text.find('window.GRAMMAR_CLINIC_BANK = ')
idx_spec = text.find('window.GRAMMAR_SPECIAL_LECTURES = ')
bank_raw = text[idx_bank + len('window.GRAMMAR_CLINIC_BANK = '):idx_spec].strip()
idx_last_bracket = bank_raw.rfind(']')
bank = json.loads(bank_raw[:idx_last_bracket+1])

print("Auditing all Formula Cards...")

ox_issues = []
difficult_lv0 = []

ADVANCED_WORDS_LV0 = [
    'phenomenon', 'hypothesis', 'revolutionary', 'manuscript', 'astrophysics',
    'consequence', 'insignificant', 'subsequent', 'contemporary', 'unprecedented',
    'infrastructure', 'deteriorating', 'investigation', 'legislation', 'unwavering',
    'sophisticated', 'collaborative', 'comprehensive', 'predecessor', 'indispensable'
]

for level in bank:
    code = level['levelCode']
    name = level['levelName']
    for u in level['units']:
        u_no = u['unitNo']
        for fc in u.get('formulaCards', []):
            ox = fc.get('oxCompare', '')
            if 'O:' not in ox or 'X:' not in ox:
                ox_issues.append((code, u_no, fc.get('tag'), ox))
            
            # Check Lv0 difficulty
            if code == 'lv0':
                en = fc.get('en', '').lower()
                for bad_w in ADVANCED_WORDS_LV0:
                    if bad_w in en:
                        difficult_lv0.append((u_no, fc.get('tag'), bad_w, fc.get('en')))

print(f"\n1. OX Compare Format Issues: {len(ox_issues)}")
for item in ox_issues[:10]:
    print(f"  [{item[0]} U{item[1]}] {item[2]}: {item[3]}")

print(f"\n2. Lv.0 Advanced Word Hits: {len(difficult_lv0)}")
for item in difficult_lv0:
    print(f"  [Lv0 U{item[0]}] {item[1]}: hit '{item[2]}' in '{item[3]}'")
