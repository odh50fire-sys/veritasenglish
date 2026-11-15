import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from scripts.build_level_0_full_data import LEVEL_0_DATA

data = LEVEL_0_DATA
units = data['units']
print(f"Total Level 0 units: {len(units)}")
assert len(units) == 8

errors = []

for u in units:
    uid = u['unitId']
    if not u.get('overview') or len(u['overview']) < 10:
        errors.append(f"{uid} missing overview")
    if len(u.get('keyTakeaways', [])) != 3:
        errors.append(f"{uid} keyTakeaways != 3")
        
    fcs = u.get('formulaCards', [])
    if len(fcs) != 2:
        errors.append(f"{uid} formulaCards != 2")
    for fc_idx, fc in enumerate(fcs):
        for ex_idx, ex in enumerate(fc.get('examples', [])):
            en = ex.get('en', '')
            ko = ex.get('ko', '')
            pt = ex.get('point', '')
            for ch in en:
                code = ord(ch)
                if (0xac00 <= code <= 0xd7a3) or (0x3131 <= code <= 0x318e):
                    errors.append(f"[{uid} FC{fc_idx} Ex{ex_idx}] Korean in 'en': '{en}'")
                    break
            if '[' in en or ']' in en:
                errors.append(f"[{uid} FC{fc_idx} Ex{ex_idx}] Brackets in 'en': '{en}'")
            if not en or len(en) < 10:
                errors.append(f"[{uid} FC{fc_idx} Ex{ex_idx}] Short 'en': '{en}'")
            if not ko or len(ko) < 5 or '대표 적용 예문입니다' in ko:
                errors.append(f"[{uid} FC{fc_idx} Ex{ex_idx}] Invalid 'ko': '{ko}'")
            if not pt or len(pt) < 5:
                errors.append(f"[{uid} FC{fc_idx} Ex{ex_idx}] Invalid 'point': '{pt}'")
                
    drills = u.get('spottingDrills', [])
    if len(drills) != 3:
        errors.append(f"{uid} spottingDrills != 3")
    for d_idx, d in enumerate(drills):
        s = d.get('sentence', '')
        ul = d.get('underlined', [])
        w = d.get('wrongIndex', -1)
        c = d.get('correction', '')
        if len(ul) != 4:
            errors.append(f"[{uid} drill {d_idx}] underlined len != 4")
        if not (0 <= w <= 3):
            errors.append(f"[{uid} drill {d_idx}] wrongIndex out of range: {w}")
        cur = 0
        for w_idx, w_str in enumerate(ul):
            pos = s.find(w_str, cur)
            if pos == -1:
                errors.append(f"[{uid} drill {d_idx}] '{w_str}' not in '{s}' after {cur}")
            else:
                cur = pos + len(w_str)
        if 0 <= w < len(ul) and ul[w] == c:
            errors.append(f"[{uid} drill {d_idx}] ul[w] == c ('{c}')")
        if not d.get('conceptRef') or len(d['conceptRef']) < 5:
            errors.append(f"[{uid} drill {d_idx}] missing conceptRef")
        if not d.get('explanation') or len(d['explanation']) < 10:
            errors.append(f"[{uid} drill {d_idx}] missing explanation")
        if not d.get('korean') or len(d['korean']) < 5:
            errors.append(f"[{uid} drill {d_idx}] missing korean")
            
    qs = u.get('questions', [])
    if len(qs) != 5:
        errors.append(f"{uid} questions != 5")
    for q_idx, q in enumerate(qs):
        if not q.get('q'):
            errors.append(f"[{uid} q {q_idx}] missing question")
        if len(q.get('options', [])) != 5:
            errors.append(f"[{uid} q {q_idx}] options != 5")
        if not (0 <= q.get('ans', -1) <= 4):
            errors.append(f"[{uid} q {q_idx}] invalid ans {q.get('ans')}")
        if not q.get('exp') or len(q['exp']) < 5:
            errors.append(f"[{uid} q {q_idx}] missing exp")
        if not q.get('conceptRef') or len(q['conceptRef']) < 5:
            errors.append(f"[{uid} q {q_idx}] missing conceptRef")

if errors:
    print(f"Validation failed with {len(errors)} errors:")
    for e in errors:
        print(" -", e)
    sys.exit(1)
else:
    print(">>> ALL 8 UNITS OF LEVEL 0 (16 FCS, 24 DRILLS, 40 QUIZZES) VALIDATED 100% PERFECTLY! <<<")
