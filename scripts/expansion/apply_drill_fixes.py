# -*- coding: utf-8 -*-
"""
Applies exact string replacements to fix drill sentence-underlined mismatches.
"""
import os

fixes = [
    # (filepath, search_str, replace_str)
    (
        'scripts/expansion/data_lv1_part1.py',
        '"That barking dog over there looks a wolf."',
        '"That barking dog over there looks a wolf in the dark."'
    ),
    (
        'scripts/expansion/data_lv1_part1.py',
        '"May I ask a personal question to the new teacher?"',
        '"May I ask a personal question to the new teacher in the office?"'
    ),
    (
        'scripts/expansion/data_lv1_part1.py',
        '"The silver watch is not as more expensive as the gold one."',
        '"The silver watch is not as more expensive as the gold one in the store."'
    ),
    (
        'scripts/expansion/data_lv1_part3.py',
        '"The students cleaned the entire classroom by theirself."',
        '"The students cleaned the entire classroom by theirself yesterday afternoon."'
    ),
    (
        'scripts/expansion/data_lv2_part1.py',
        '"When have you arrived at the airport last night?"',
        '"Tell me, when have you arrived at the airport last night?"'
    ),
    (
        'scripts/expansion/data_lv2_part1.py',
        '["When have you arrived", "at the airport", "last night?", "tell me"]',
        '["Tell me,", "when have you arrived", "at the airport", "last night?"]'
    ),
    (
        'scripts/expansion/data_lv2_part1.py',
        '"The funny movie made all the audience to laugh aloud."',
        '"The funny movie made all the audience to laugh aloud in the theater."'
    ),
    (
        'scripts/expansion/data_lv2_part2.py',
        '"Look at the brave police officer and his horse which are patrolling."',
        '"Look at the brave police officer and his horse which are patrolling the street."'
    ),
    (
        'scripts/expansion/data_lv3_part1.py',
        '"When we reached the airport, the flight has already departed."',
        '"When we reached the airport, the flight has already departed ten minutes ago."'
    ),
    (
        'scripts/expansion/data_lv3_part1.py',
        '"Can you tell me the reason where you were absent yesterday?"',
        '"Can you tell me the reason where you were absent yesterday afternoon?"'
    ),
    (
        'scripts/expansion/data_lv3_part1.py',
        '"I bought a vintage leather jacket in London, that was very expensive."',
        '"I bought a vintage leather jacket in London, that was very expensive and rare."'
    ),
    (
        'scripts/expansion/data_lv3_part1.py',
        '"She could not believe that her best friend told her yesterday."',
        '"She could not believe that her best friend told her yesterday afternoon."'
    ),
    (
        'scripts/expansion/data_lv3_part3.py',
        '"When the teacher asked for the textbook, here gave he it to her."',
        '"When the teacher asked for the textbook, here gave he it to her politely."'
    ),
    (
        'scripts/expansion/data_lv4_part1.py',
        '"The tragic car accident was happened on the rainy highway yesterday."',
        '"The tragic car accident was happened on the rainy highway yesterday afternoon."'
    ),
    (
        'scripts/expansion/data_lv4_part1.py',
        '"Despite the weather was extremely harsh, the climbers reached the peak."',
        '"Despite the weather was extremely harsh, the climbers reached the peak safely."'
    ),
    (
        'scripts/expansion/data_lv4_part2.py',
        '"Seldom they realized the severe consequences of their reckless decision."',
        '"Seldom they realized the severe consequences of their reckless decision until it was too late."'
    ),
    (
        'scripts/expansion/data_lv5_part1.py',
        '"frantic protecting"',
        '"frantically protecting"'
    ),
    (
        'scripts/expansion/data_lv5_part2.py',
        '"with his eyes closed and his voice trembling slightly."',
        '"with his eyes closing and his voice trembling slightly."'
    ),
    (
        'scripts/expansion/data_special.py',
        '"into the elite institute"',
        '"into the elite research institute"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"the prestigious scholarship"',
        '"the prestigious academic scholarship"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"coastal area"',
        '"coastal metropolitan area"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"escaped the building"',
        '"escaped the burning building"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"our nation would not be so competitive today."',
        '"our nation would not have been competitive today."'
    ),
    (
        'scripts/expansion/data_special.py',
        '"most of his assistants"',
        '"most of his research assistants"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"is equipped with sensors"',
        '"is equipped with cutting-edge sensors"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"discovered in the monastery"',
        '"discovered in the hidden monastery"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"insights into philosophy"',
        '"insights into medieval philosophy"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"across fiber-optic networks"',
        '"across global fiber-optic networks"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"enables transactions"',
        '"enables instantaneous international transactions"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"the economic concept"',
        '"the abstract economic concept"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"an astonishing product"',
        '"an astonishing technological product"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"She held a suitcase"',
        '"She held a heavy suitcase"'
    ),
    (
        'scripts/expansion/data_special.py',
        '"solving math puzzles"',
        '"solving mathematics puzzles"'
    )
]

for filepath, search_str, replace_str in fixes:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    if search_str not in content:
        print(f"WARNING: '{search_str}' not found in {filepath}")
    else:
        content = content.replace(search_str, replace_str)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}: replaced '{search_str[:30]}...'")

print("All fixes applied!")
