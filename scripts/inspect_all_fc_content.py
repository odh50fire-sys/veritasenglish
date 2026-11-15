# -*- coding: utf-8 -*-
"""
Inspect all formula card examples across all levels to find difficulty mismatches and content errors.
"""
import json

with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx_bank = text.find('window.GRAMMAR_CLINIC_BANK = ')
idx_spec = text.find('window.GRAMMAR_SPECIAL_LECTURES = ')
bank_raw = text[idx_bank + len('window.GRAMMAR_CLINIC_BANK = '):idx_spec].strip()
idx_last_bracket = bank_raw.rfind(']')
bank = json.loads(bank_raw[:idx_last_bracket+1])

for level in bank:
    code = level['levelCode']
    name = level['levelName']
    print(f"\n==================== {code}: {name} ====================")
    for u in level['units']:
        u_no = u['unitNo']
        for fc in u.get('formulaCards', []):
            tag = fc.get('name') or fc.get('tag')
            en = fc.get('en') or (fc.get('examples', [{}])[0].get('en') if fc.get('examples') else fc.get('example'))
            ko = fc.get('ko') or (fc.get('examples', [{}])[0].get('ko') if fc.get('examples') else '')
            ox = fc.get('oxCompare')
            # Check if ox is string or array
            ox_type = "array" if isinstance(ox, list) else "string"
            print(f"  [U{u_no}] {tag}")
            print(f"    en: {en}")
            print(f"    ko: {ko}")
            print(f"    ox ({ox_type}): {ox}")
