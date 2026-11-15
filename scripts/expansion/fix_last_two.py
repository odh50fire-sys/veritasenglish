# -*- coding: utf-8 -*-
with open('scripts/expansion/data_lv5_part2.py', 'r', encoding='utf-8') as f:
    text = f.read()

s1 = '"sentence": "The professor lectured for two hours with his eyes closed and his voice trembling slightly."'
r1 = '"sentence": "The professor lectured for two hours with his eyes closing and his voice trembling slightly."'
if s1 in text:
    text = text.replace(s1, r1)
    with open('scripts/expansion/data_lv5_part2.py', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Fixed data_lv5_part2.py")
else:
    print("s1 not found in data_lv5_part2.py")

with open('scripts/expansion/data_special.py', 'r', encoding='utf-8') as f:
    text2 = f.read()

s2 = '"sentence": "If the government had not invested in research last decade, our nation would not be so competitive today."'
r2 = '"sentence": "If the government had not invested in research last decade, our nation would not have been competitive today."'
if s2 in text2:
    text2 = text2.replace(s2, r2)
    with open('scripts/expansion/data_special.py', 'w', encoding='utf-8') as f:
        f.write(text2)
    print("Fixed data_special.py")
else:
    print("s2 not found in data_special.py")
