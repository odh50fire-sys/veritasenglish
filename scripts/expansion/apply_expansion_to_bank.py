# -*- coding: utf-8 -*-
"""
Apply Expansion to Grammar Clinic Data Bank
- Merges Units 9-20 into lv0 ~ lv5 (Total 120 regular units)
- Merges Units into Special Lectures (Total 40 special units)
- Validates 0 Korean in 'en', 4 substrings in spotting drills, 5 options in questions
- Backs up existing data/grammar_clinic_data.js before applying
"""

import sys
import os
import json
import re
import shutil

# Import expansion datasets
sys.path.insert(0, os.path.dirname(__file__))
from data_lv0 import LV0_EXPANSION_12_UNITS
from data_lv1 import LV1_EXPANSION_12_UNITS
from data_lv2 import LV2_EXPANSION_12_UNITS
from data_lv3 import LV3_EXPANSION_12_UNITS
from data_lv4 import LV4_EXPANSION_12_UNITS
from data_lv5 import LV5_EXPANSION_12_UNITS
from data_special import SPECIAL_TERMS_NEW, SPECIAL_WRITING_NEW, SPECIAL_CSAT_NEW, SPECIAL_VS_NEW

HANGUL_RE = re.compile(r'[\uac00-\ud7a3\u1100-\u11ff\u3130-\u318f]')

def validate_units(unit_list, level_name):
    print(f"Validating {level_name} ({len(unit_list)} units)...")
    errors = []
    for u in unit_list:
        u_id = f"Unit {u.get('unitNo', '?')}: {u.get('title', '?')}"
        # 1. Formula cards
        fcs = u.get('formulaCards', [])
        if len(fcs) < 2:
            errors.append(f"[{u_id}] Has fewer than 2 formula cards ({len(fcs)})")
        for fc in fcs:
            en_text = fc.get('en', '')
            if HANGUL_RE.search(en_text):
                errors.append(f"[{u_id}] Korean character found in formulaCard 'en': {en_text}")
        
        # 2. Spotting drills
        drills = u.get('spottingDrills', [])
        if len(drills) < 3:
            errors.append(f"[{u_id}] Has fewer than 3 spotting drills ({len(drills)})")
        for d in drills:
            sentence = d.get('sentence', '')
            underlined = d.get('underlined', [])
            if len(underlined) != 4:
                errors.append(f"[{u_id}] Drill {d.get('drillId')} has {len(underlined)} underlined parts instead of 4")
            for part in underlined:
                if part not in sentence:
                    errors.append(f"[{u_id}] Drill {d.get('drillId')} underlined '{part}' not found in sentence '{sentence}'")
            w_idx = d.get('wrongIndex')
            if w_idx not in [0, 1, 2, 3]:
                errors.append(f"[{u_id}] Drill {d.get('drillId')} invalid wrongIndex: {w_idx}")
                
        # 3. Questions
        questions = u.get('questions', [])
        if len(questions) < 5:
            errors.append(f"[{u_id}] Has fewer than 5 questions ({len(questions)})")
        for q in questions:
            opts = q.get('options', [])
            if len(opts) != 5:
                errors.append(f"[{u_id}] Question {q.get('qId')} has {len(opts)} options instead of 5")
            ans = q.get('ans')
            if ans not in [1, 2, 3, 4, 5]:
                errors.append(f"[{u_id}] Question {q.get('qId')} invalid ans: {ans}")
                
    if errors:
        print(f"Validation FAILED for {level_name}:")
        for err in errors:
            print(f"  - {err}")
        return False
    print(f"Validation PASSED for {level_name} (All 0 Korean, 4 parts, 5 opts verified)!")
    return True

def main():
    # 1. Validate all datasets
    validations = [
        validate_units(LV0_EXPANSION_12_UNITS, "Level 0 Expansion"),
        validate_units(LV1_EXPANSION_12_UNITS, "Level 1 Expansion"),
        validate_units(LV2_EXPANSION_12_UNITS, "Level 2 Expansion"),
        validate_units(LV3_EXPANSION_12_UNITS, "Level 3 Expansion"),
        validate_units(LV4_EXPANSION_12_UNITS, "Level 4 Expansion"),
        validate_units(LV5_EXPANSION_12_UNITS, "Level 5 Expansion"),
        validate_units(SPECIAL_TERMS_NEW, "Special Terms Expansion"),
        validate_units(SPECIAL_WRITING_NEW, "Special Writing Expansion"),
        validate_units(SPECIAL_CSAT_NEW, "Special CSAT Expansion"),
        validate_units(SPECIAL_VS_NEW, "Special VS Expansion")
    ]
    if not all(validations):
        print("Aborting expansion due to validation errors.")
        sys.exit(1)
        
    bank_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../data/grammar_clinic_data.js'))
    backup_path = bank_path + '.backup_before_expansion'
    shutil.copyfile(bank_path, backup_path)
    print(f"Backup created at: {backup_path}")
    
    with open(bank_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Split bank and special lectures by exact marker
    idx_bank = content.find('window.GRAMMAR_CLINIC_BANK = ')
    idx_spec = content.find('window.GRAMMAR_SPECIAL_LECTURES = ')
    if idx_bank == -1 or idx_spec == -1:
        print("Could not find variable declarations in grammar_clinic_data.js!")
        sys.exit(1)
        
    bank_raw = content[idx_bank + len('window.GRAMMAR_CLINIC_BANK = '):idx_spec].strip()
    idx_last_bracket = bank_raw.rfind(']')
    bank = json.loads(bank_raw[:idx_last_bracket+1])
    
    spec_raw = content[idx_spec + len('window.GRAMMAR_SPECIAL_LECTURES = '):].strip()
    idx_last_spec_bracket = spec_raw.rfind(']')
    specials = json.loads(spec_raw[:idx_last_spec_bracket+1])
    
    # 2. Expand Regular Levels & Specials in Bank
    exp_map = {
        'lv0': LV0_EXPANSION_12_UNITS,
        'lv1': LV1_EXPANSION_12_UNITS,
        'lv2': LV2_EXPANSION_12_UNITS,
        'lv3': LV3_EXPANSION_12_UNITS,
        'lv4': LV4_EXPANSION_12_UNITS,
        'lv5': LV5_EXPANSION_12_UNITS
    }
    spec_map = {
        'sp_terms': SPECIAL_TERMS_NEW,
        'sp_writing': SPECIAL_WRITING_NEW,
        'sp_csat': SPECIAL_CSAT_NEW,
        'sp_vs': SPECIAL_VS_NEW
    }
    
    for level_obj in bank:
        code = level_obj['levelCode']
        if code in exp_map:
            # Retain existing units 1-8
            existing_units = [u for u in level_obj['units'] if u['unitNo'] <= 8]
            new_units = exp_map[code]
            combined = existing_units + new_units
            level_obj['units'] = combined
            level_obj['desc'] = re.sub(r'\d+단원', f"{len(combined)}단원", level_obj.get('desc', ''))
            print(f"Updated Regular {code} ({level_obj['levelName']}): Total {len(combined)} units.")
        elif code in spec_map:
            base_count = 6 if code == 'sp_csat' else 8
            existing_units = [u for u in level_obj['units'] if u['unitNo'] <= base_count]
            new_units = spec_map[code]
            combined = existing_units + new_units
            level_obj['units'] = combined
            level_obj['desc'] = re.sub(r'\d+단원', f"{len(combined)}단원", level_obj.get('desc', ''))
            print(f"Updated Special in Bank {code} ({level_obj['levelName']}): Total {len(combined)} units.")
            
    # 3. Expand Special Lectures list
    
    for spec_obj in specials:
        code = spec_obj['levelCode']
        if code in spec_map:
            base_count = 6 if code == 'sp_csat' else 8
            existing_units = [u for u in spec_obj['units'] if u['unitNo'] <= base_count]
            new_units = spec_map[code]
            combined = existing_units + new_units
            spec_obj['units'] = combined
            spec_obj['desc'] = re.sub(r'\d+단원', f"{len(combined)}단원", spec_obj.get('desc', ''))
            print(f"Updated Special {code} ({spec_obj['levelName']}): Total {len(combined)} units.")
            
    # 4. Write back to grammar_clinic_data.js
    bank_json = json.dumps(bank, ensure_ascii=False, indent=2)
    specials_json = json.dumps(specials, ensure_ascii=False, indent=2)
    
    output_js = f"// Veritas English - Grammar Clinic Data Bank\nwindow.GRAMMAR_CLINIC_BANK = {bank_json};\n\n// Grammar Special Lectures\nwindow.GRAMMAR_SPECIAL_LECTURES = {specials_json};\n"
    
    with open(bank_path, 'w', encoding='utf-8') as f:
        f.write(output_js)
        
    print(f"\nSuccessfully wrote expanded data bank to: {bank_path}")
    
    # 5. Final Statistics
    total_reg = sum(len(l['units']) for l in bank)
    total_sp = sum(len(s['units']) for s in specials)
    print("=" * 60)
    print(f"FINAL TALLY:")
    print(f"  Regular Levels (lv0~lv5): {len(bank)} levels, {total_reg} total units (Goal: 120)")
    print(f"  Special Lectures: {len(specials)} tracks, {total_sp} total units (Goal: 40)")
    print(f"  GRAND TOTAL: {total_reg + total_sp} units across all courses (Goal: 160)")
    print("=" * 60)

if __name__ == '__main__':
    main()
