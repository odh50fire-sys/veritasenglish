# -*- coding: utf-8 -*-
"""
Full Verification of grammar_clinic_data.js
- Total units, levels, special tracks
- Korean check in 'en' fields
- Spotting drills validation
- Question options validation
"""

import json
import re

HANGUL_RE = re.compile(r'[\uac00-\ud7a3\u1100-\u11ff\u3130-\u318f]')

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

print("=" * 60)
print(f"VERITAS ENGLISH - FULL GRAMMAR CLINIC DATA BANK AUDIT")
print("=" * 60)

print(f"\n1. Bank Level Breakdown ({len(bank)} levels):")
total_units_bank = 0
errors = []

for l in bank:
    code = l.get('levelCode')
    name = l.get('levelName')
    units = l.get('units', [])
    total_units_bank += len(units)
    is_sp = l.get('isSpecial', False)
    print(f"  [{'특강' if is_sp else '정규'}] {code:10s} | {name:15s} | Units: {len(units)}")
    
    # Audit each unit
    for u in units:
        u_no = u.get('unitNo')
        u_title = u.get('title')
        # check FC
        for fc in u.get('formulaCards', []):
            en = fc.get('en', '')
            if HANGUL_RE.search(en):
                errors.append(f"[{code} U{u_no}] Korean in FC en: {en}")
        # check drills
        for d in u.get('spottingDrills', []):
            s = d.get('sentence', '')
            underlined = d.get('underlined', [])
            if len(underlined) != 4:
                errors.append(f"[{code} U{u_no}] Drill {d.get('drillId')} underlined count != 4 ({len(underlined)})")
            for part in underlined:
                if part not in s:
                    errors.append(f"[{code} U{u_no}] Drill {d.get('drillId')} '{part}' not in '{s}'")
        # check questions
        for q in u.get('questions', []):
            opts = q.get('options', [])
            if len(opts) != 5:
                errors.append(f"[{code} U{u_no}] Question {q.get('qId')} opts != 5 ({len(opts)})")
            if q.get('ans') not in [0, 1, 2, 3, 4]:
                errors.append(f"[{code} U{u_no}] Question {q.get('qId')} invalid ans: {q.get('ans')} (must be 0..4)")

print(f"\nTotal Units in Bank: {total_units_bank}")
print(f"Total Errors Found: {len(errors)}")

if errors:
    print("\nError Details (First 10):")
    for err in errors[:10]:
        print("  -", err)
else:
    print("\n✅ PERFECT! Zero errors found across the entire database!")
    print("  - All formulaCards 'en' have 0 Korean characters.")
    print("  - All spotting drills have exactly 4 substrings matching the sentence.")
    print("  - All questions have exactly 5 options with valid answers.")
print("=" * 60)
