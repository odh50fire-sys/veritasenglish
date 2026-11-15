# -*- coding: utf-8 -*-
"""
Inject clean, 100% English examples into all formula cards across all 70 units
in data/grammar_clinic_data.js.
"""

import sys
import os
import json
import re

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from scripts.fc_examples_part1 import FC_EXAMPLES_PART1
from scripts.fc_examples_part2 import FC_EXAMPLES_PART2
from scripts.fc_examples_part3 import FC_EXAMPLES_PART3
from scripts.fc_examples_part4 import FC_EXAMPLES_PART4

ALL_FC_EXAMPLES = {}
ALL_FC_EXAMPLES.update(FC_EXAMPLES_PART1)
ALL_FC_EXAMPLES.update(FC_EXAMPLES_PART2)
ALL_FC_EXAMPLES.update(FC_EXAMPLES_PART3)
ALL_FC_EXAMPLES.update(FC_EXAMPLES_PART4)

print(f"Total units in curated FC examples: {len(ALL_FC_EXAMPLES)}")

# Validate each example
errors = []
for uid, fc_list in ALL_FC_EXAMPLES.items():
    if len(fc_list) < 2:
        errors.append(f"{uid} has fewer than 2 formula cards in curated dataset")
    for fc_idx, ex_list in enumerate(fc_list):
        if not ex_list:
            errors.append(f"{uid} FC{fc_idx} has no examples")
        for ex_idx, ex in enumerate(ex_list):
            en = ex.get('en', '')
            ko = ex.get('ko', '')
            pt = ex.get('point', '')
            
            # Check for Korean characters in 'en'
            for ch in en:
                code = ord(ch)
                if (0xac00 <= code <= 0xd7a3) or (0x3131 <= code <= 0x318e):
                    errors.append(f"[{uid} FC{fc_idx} Ex{ex_idx}] Korean character '{ch}' in 'en': '{en}'")
                    break
                    
            if '[' in en or ']' in en:
                errors.append(f"[{uid} FC{fc_idx} Ex{ex_idx}] Brackets in 'en': '{en}'")
                
            if not en or len(en) < 10:
                errors.append(f"[{uid} FC{fc_idx} Ex{ex_idx}] 'en' too short: '{en}'")
                
            if not ko or len(ko) < 5 or '대표 적용 예문입니다' in ko:
                errors.append(f"[{uid} FC{fc_idx} Ex{ex_idx}] invalid 'ko': '{ko}'")
                
            if not pt or len(pt) < 5:
                errors.append(f"[{uid} FC{fc_idx} Ex{ex_idx}] invalid 'point': '{pt}'")

if errors:
    print(f"Validation failed with {len(errors)} errors:")
    for e in errors[:25]:
        print("  -", e)
    sys.exit(1)

print("All curated formula card examples validated 100% cleanly!")

# Now load and update data/grammar_clinic_data.js
with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

s_idx = text.find('window.GRAMMAR_CLINIC_BANK = [') + len('window.GRAMMAR_CLINIC_BANK = ')
e_idx = text.find(';\n\n// Grammar Special Lectures')
bank = json.loads(text[s_idx:e_idx])

m2_start = text.find('window.GRAMMAR_SPECIAL_LECTURES = [') + len('window.GRAMMAR_SPECIAL_LECTURES = ')
m2_end = text.rfind('];') + 1
spec = json.loads(text[m2_start:m2_end])

updated_units = 0
updated_fcs = 0

for lvl in bank:
    for u in lvl['units']:
        uid = u['unitId']
        if uid in ALL_FC_EXAMPLES:
            curated_fcs = ALL_FC_EXAMPLES[uid]
            fcs = u.get('formulaCards', [])
            for idx, fc in enumerate(fcs):
                if idx < len(curated_fcs):
                    fc['examples'] = curated_fcs[idx]
                    updated_fcs += 1
            updated_units += 1
        else:
            print(f"Warning: {uid} not in curated examples!")

for c in spec:
    for u in c['units']:
        uid = u['unitId']
        if uid in ALL_FC_EXAMPLES:
            curated_fcs = ALL_FC_EXAMPLES[uid]
            fcs = u.get('formulaCards', [])
            for idx, fc in enumerate(fcs):
                if idx < len(curated_fcs):
                    fc['examples'] = curated_fcs[idx]

print(f"Updated {updated_fcs} formula cards across {updated_units} units in data.")

bank_json = json.dumps(bank, ensure_ascii=False, indent=2)
spec_json = json.dumps(spec, ensure_ascii=False, indent=2)

new_content = f"// Veritas English - Grammar Clinic Data Bank\nwindow.GRAMMAR_CLINIC_BANK = {bank_json};\n\n// Grammar Special Lectures (문법 특강 별도 단원 데이터)\nwindow.GRAMMAR_SPECIAL_LECTURES = {spec_json};\n"

with open('data/grammar_clinic_data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully written back to data/grammar_clinic_data.js!")
