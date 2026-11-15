# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from data_lv5_part1 import LV5_PART1
from data_lv5_part2 import LV5_PART2

LV5_EXPANSION_12_UNITS = LV5_PART1 + LV5_PART2

if __name__ == '__main__':
    print(f"LV5 Total Expansion Units: {len(LV5_EXPANSION_12_UNITS)}")
    for u in LV5_EXPANSION_12_UNITS:
        print(f"  Unit {u['unitNo']}: {u['title']} (Drills: {len(u['spottingDrills'])}, Qs: {len(u['questions'])}, FCs: {len(u['formulaCards'])})")
