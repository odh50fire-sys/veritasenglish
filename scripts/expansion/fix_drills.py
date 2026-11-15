# -*- coding: utf-8 -*-
"""
Inspect and automatically correct drill underlined substrings to match sentence exactly.
"""

def inspect_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    return content

# Let's inspect each failing file
files = [
    'scripts/expansion/data_lv1_part1.py',
    'scripts/expansion/data_lv1_part3.py',
    'scripts/expansion/data_lv2_part1.py',
    'scripts/expansion/data_lv2_part2.py',
    'scripts/expansion/data_lv3_part1.py',
    'scripts/expansion/data_lv3_part3.py',
    'scripts/expansion/data_lv4_part1.py',
    'scripts/expansion/data_lv4_part2.py',
    'scripts/expansion/data_lv5_part1.py',
    'scripts/expansion/data_lv5_part2.py',
    'scripts/expansion/data_special.py'
]

print("Inspection ready.")
