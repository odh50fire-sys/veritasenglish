# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from data_lv1_part1 import LV1_PART1
from data_lv1_part2 import LV1_PART2
from data_lv1_part3 import LV1_PART3

LV1_EXPANSION_12_UNITS = LV1_PART1 + LV1_PART2 + LV1_PART3

if __name__ == '__main__':
    print(f"LV1 Total Expansion Units: {len(LV1_EXPANSION_12_UNITS)}")
    for u in LV1_EXPANSION_12_UNITS:
        print(f"  Unit {u['unitNo']}: {u['title']} (Drills: {len(u['spottingDrills'])}, Qs: {len(u['questions'])}, FCs: {len(u['formulaCards'])})")
