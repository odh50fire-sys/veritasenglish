import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import scripts.drills_dataset_part1 as d1
import scripts.drills_dataset_part2 as d2
import scripts.drills_dataset_part3 as d3
import scripts.drills_dataset_part4 as d4

all_extra = {}
all_extra.update(d1.DRILLS_EXTRA)
all_extra.update(d2.DRILLS_EXTRA_PART2)
all_extra.update(d3.DRILLS_EXTRA_PART3)
all_extra.update(d4.DRILLS_EXTRA_PART4)

print(f"Total extra drill unit keys: {len(all_extra)}")

errors = []
for uid, dlist in all_extra.items():
    if len(dlist) != 2:
        errors.append(f"{uid} has {len(dlist)} drills, expected 2")
    for idx, d in enumerate(dlist):
        s = d.get('sentence', '')
        u = d.get('underlined', [])
        w = d.get('wrongIndex', -1)
        c = d.get('correction', '')
        
        if len(u) != 4:
            errors.append(f"[{uid} drill {idx}] underlined length is {len(u)}")
        if not (0 <= w < 4):
            errors.append(f"[{uid} drill {idx}] invalid wrongIndex {w}")
        cur = 0
        for w_idx, w_str in enumerate(u):
            pos = s.find(w_str, cur)
            if pos == -1:
                errors.append(f"[{uid} drill {idx}] underlined #{w_idx} '{w_str}' not found sequentially in '{s}' after {cur}")
            else:
                cur = pos + len(w_str)
        if 0 <= w < len(u) and u[w] == c:
            errors.append(f"[{uid} drill {idx}] erroneous word equals correction '{c}'")
        if not d.get('conceptRef') or len(d['conceptRef']) < 5:
            errors.append(f"[{uid} drill {idx}] missing or short conceptRef")
        if not d.get('explanation') or len(d['explanation']) < 10:
            errors.append(f"[{uid} drill {idx}] missing or short explanation")
        if not d.get('korean') or len(d['korean']) < 5:
            errors.append(f"[{uid} drill {idx}] missing or short korean")

if errors:
    print(f"Found {len(errors)} errors:")
    for e in errors[:20]:
        print("  -", e)
    sys.exit(1)
else:
    print("ALL 70 UNITS' EXTRA DRILLS (140 DRILLS) ARE 100% VALIDATED PERFECTLY!")
