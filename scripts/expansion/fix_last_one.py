# -*- coding: utf-8 -*-
with open('scripts/expansion/data_lv1_part1.py', 'r', encoding='utf-8') as f:
    text = f.read()

target = '"underlined": ["May I ask", "a personal question", "to the new teacher?", "in the office"]'
repl = '"underlined": ["May I ask", "a personal question", "to the new teacher", "in the office?"]'
assert target in text
text = text.replace(target, repl)

with open('scripts/expansion/data_lv1_part1.py', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated data_lv1_part1.py successfully!")
