import sys
import os
import json
import re

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from scripts.build_level_0_full_data import LEVEL_0_DATA

with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

s_idx = text.find('window.GRAMMAR_CLINIC_BANK = [') + len('window.GRAMMAR_CLINIC_BANK = ')
e_idx = text.find(';\n\n// Grammar Special Lectures')
bank = json.loads(text[s_idx:e_idx])

m2_start = text.find('window.GRAMMAR_SPECIAL_LECTURES = [') + len('window.GRAMMAR_SPECIAL_LECTURES = ')
m2_end = text.rfind('];') + 1
spec = json.loads(text[m2_start:m2_end])

# Check if Level 0 is already in bank
existing_lv0 = next((lvl for lvl in bank if lvl.get('levelCode') == 'lv0'), None)
if existing_lv0:
    print("Level 0 already in bank, updating it...")
    bank[bank.index(existing_lv0)] = LEVEL_0_DATA
else:
    print("Inserting Level 0 as first level in bank...")
    bank.insert(0, LEVEL_0_DATA)

print(f"Total levels in bank: {len(bank)}")
print("Level codes:", [l.get('levelCode') for l in bank])
print(f"Total units in bank: {sum(len(l.get('units', [])) for l in bank)}")

bank_json = json.dumps(bank, ensure_ascii=False, indent=2)
spec_json = json.dumps(spec, ensure_ascii=False, indent=2)

new_content = f"// Veritas English - Grammar Clinic Data Bank\nwindow.GRAMMAR_CLINIC_BANK = {bank_json};\n\n// Grammar Special Lectures (문법 특강 별도 단원 데이터)\nwindow.GRAMMAR_SPECIAL_LECTURES = {spec_json};\n"

with open('data/grammar_clinic_data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated data/grammar_clinic_data.js with Level 0!")
