# -*- coding: utf-8 -*-
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

for l in bank + specials:
    code = l.get('levelCode')
    name = l.get('levelName')
    units = l.get('units', [])
    print(f"=== {code}: {name} ({len(units)} units) ===")
    for u in units:
        print(f"  U{u.get('unitNo')}: {u.get('title')}")
