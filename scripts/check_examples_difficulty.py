# -*- coding: utf-8 -*-
import json

with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

idx_bank = content.find('window.GRAMMAR_CLINIC_BANK = ')
idx_spec = content.find('window.GRAMMAR_SPECIAL_LECTURES = ')
bank_raw = content[idx_bank + len('window.GRAMMAR_CLINIC_BANK = '):idx_spec].strip()
idx_last_bracket = bank_raw.rfind(']')
bank = json.loads(bank_raw[:idx_last_bracket+1])

for l in bank:
    code = l.get('levelCode')
    if code in ['lv0', 'lv1']:
        print(f"=== {code}: {l.get('levelName')} ===")
        for u in l.get('units', []):
            u_no = u.get('unitNo')
            u_title = u.get('title')
            fcs = u.get('formulaCards', [])
            for i, fc in enumerate(fcs):
                name = fc.get('name') or fc.get('tag')
                exs = fc.get('examples', [])
                if not exs and fc.get('en'):
                    exs = [{'en': fc.get('en'), 'ko': fc.get('ko')}]
                for ex in exs:
                    en = ex.get('en', '')
                    ko = ex.get('ko', '')
                    words = en.split()
                    # elementary (lv0) should have simple vocabulary and moderate length (<= 10 words)
                    if code == 'lv0' and (len(words) > 10 or any(w.lower().rstrip('.,!?') in ['participate', 'magnificent', 'investigate', 'circumstances', 'philosophy', 'atmosphere', 'architecture', 'fascinating', 'significantly', 'recommendation', 'environmental'] for w in words)):
                        print(f"[{code} U{u_no} {u_title} | {name}] Hard: '{en}' -> '{ko}'")
