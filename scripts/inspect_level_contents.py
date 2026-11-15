# -*- coding: utf-8 -*-
import json

with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx_bank = text.find('window.GRAMMAR_CLINIC_BANK = ')
idx_spec = text.find('window.GRAMMAR_SPECIAL_LECTURES = ')
bank_raw = text[idx_bank + len('window.GRAMMAR_CLINIC_BANK = '):idx_spec].strip()
idx_last_bracket = bank_raw.rfind(']')
bank = json.loads(bank_raw[:idx_last_bracket+1])

def inspect_level(code):
    lvl = [l for l in bank if l['levelCode'] == code][0]
    print(f"\n==================== {code}: {lvl['levelName']} ====================")
    for u in lvl['units']:
        print(f"\n[Unit {u['unitNo']}] {u['title']}")
        for i, fc in enumerate(u['formulaCards']):
            name = fc.get('name') or fc.get('tag')
            en = fc.get('en') or (fc.get('examples', [{}])[0].get('en') if fc.get('examples') else fc.get('example'))
            ko = fc.get('ko') or (fc.get('examples', [{}])[0].get('ko') if fc.get('examples') else '')
            ox = fc.get('oxCompare')
            point = fc.get('point') or fc.get('desc')
            trap = fc.get('trap')
            print(f"  FC {i+1}: {name}")
            print(f"    en: {en}")
            print(f"    ko: {ko}")
            print(f"    point: {point}")
            print(f"    trap: {trap}")
            print(f"    oxCompare: {ox}")

inspect_level('lv0')
