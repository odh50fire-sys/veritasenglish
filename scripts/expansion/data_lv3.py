# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from data_lv3_part1 import LV3_PART1
from data_lv3_part2 import LV3_PART2
from data_lv3_part3 import LV3_PART3

LV3_EXPANSION_12_UNITS = LV3_PART1 + LV3_PART2 + LV3_PART3

if __name__ == '__main__':
    print(f"LV3 Total Expansion Units: {len(LV3_EXPANSION_12_UNITS)}")
    for u in LV3_EXPANSION_12_UNITS:
        print(f"  Unit {u['unitNo']}: {u['title']} (Drills: {len(u['spottingDrills'])}, Qs: {len(u['questions'])}, FCs: {len(u['formulaCards'])})")
