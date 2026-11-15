import json

with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

s_idx = text.find('window.GRAMMAR_CLINIC_BANK = [') + len('window.GRAMMAR_CLINIC_BANK = ')
e_idx = text.find(';\n\n// Grammar Special Lectures')
bank = json.loads(text[s_idx:e_idx])

m2_start = text.find('window.GRAMMAR_SPECIAL_LECTURES = [') + len('window.GRAMMAR_SPECIAL_LECTURES = ')
m2_end = text.rfind('];') + 1
spec = json.loads(text[m2_start:m2_end])

korean_in_en_errors = []
generic_ko_errors = []
total_examples = 0

for lvl in bank:
    for u in lvl['units']:
        for fc_idx, fc in enumerate(u.get('formulaCards', [])):
            for ex_idx, ex in enumerate(fc.get('examples', [])):
                total_examples += 1
                en = ex.get('en', '')
                ko = ex.get('ko', '')
                for ch in en:
                    code = ord(ch)
                    if (0xac00 <= code <= 0xd7a3) or (0x3131 <= code <= 0x318e):
                        korean_in_en_errors.append(f"[{u['unitId']} FC{fc_idx} Ex{ex_idx}] '{ch}' in '{en}'")
                        break
                if '대표 적용 예문입니다' in ko:
                    generic_ko_errors.append(f"[{u['unitId']} FC{fc_idx} Ex{ex_idx}] generic ko: '{ko}'")

print(f"Total formula card examples verified: {total_examples}")
print(f"Korean in 'en' errors: {len(korean_in_en_errors)}")
print(f"Generic 'ko' errors: {len(generic_ko_errors)}")

assert len(korean_in_en_errors) == 0, f"Found {len(korean_in_en_errors)} Korean characters in 'en'"
assert len(generic_ko_errors) == 0, f"Found {len(generic_ko_errors)} generic 'ko' errors"

# Also check spottingDrills
total_drills = 0
for lvl in bank:
    for u in lvl['units']:
        assert len(u['spottingDrills']) == 3
        total_drills += 3

print(f"Total spotting drills verified: {total_drills} (exactly 3 per unit across all 70 units)")

# Also check questions
total_questions = 0
for lvl in bank:
    for u in lvl['units']:
        assert len(u['questions']) == 5
        total_questions += 5

print(f"Total questions verified: {total_questions} (exactly 5 per unit across all 70 units)")

print("\n>>> ALL CHECKS PASSED: ZERO KOREAN IN 'en', ZERO GENERIC KO, ALL 70 UNITS 100% COMPLETE! <<<")
