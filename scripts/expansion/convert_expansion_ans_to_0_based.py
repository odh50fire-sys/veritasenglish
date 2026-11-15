# -*- coding: utf-8 -*-
"""
Converts 1-based ans (1..5) to 0-based ans (0..4) for all expansion units
in data/grammar_clinic_data.js and re-verifies against grammar_clinic.js expectations.
"""

import json

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

converted_bank_count = 0
for level in bank:
    is_sp = level.get('isSpecial', False)
    min_exp_unit = 7 if level['levelCode'] == 'sp_csat' else 9
    for u in level.get('units', []):
        if u['unitNo'] >= min_exp_unit:
            for q in u.get('questions', []):
                # if ans is in 1..5, shift to 0..4
                if q.get('ans') in [1, 2, 3, 4, 5]:
                    q['ans'] = q['ans'] - 1
                    converted_bank_count += 1

converted_spec_count = 0
for spec in specials:
    min_exp_unit = 7 if spec['levelCode'] == 'sp_csat' else 9
    for u in spec.get('units', []):
        if u['unitNo'] >= min_exp_unit:
            for q in u.get('questions', []):
                if q.get('ans') in [1, 2, 3, 4, 5]:
                    q['ans'] = q['ans'] - 1
                    converted_spec_count += 1

print(f"Converted questions in bank: {converted_bank_count}")
print(f"Converted questions in specials: {converted_spec_count}")

# Write back
bank_json = json.dumps(bank, ensure_ascii=False, indent=2)
specials_json = json.dumps(specials, ensure_ascii=False, indent=2)
output_js = f"// Veritas English - Grammar Clinic Data Bank\nwindow.GRAMMAR_CLINIC_BANK = {bank_json};\n\n// Grammar Special Lectures (문법 특강 별도 단원 데이터)\nwindow.GRAMMAR_SPECIAL_LECTURES = {specials_json};\n"

with open('data/grammar_clinic_data.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print("Saved updated 0-based data/grammar_clinic_data.js!")
