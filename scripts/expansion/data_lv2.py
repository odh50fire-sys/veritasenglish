# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from data_lv2_part1 import LV2_PART1
from data_lv2_part2 import LV2_PART2

LV2_EXPANSION_12_UNITS = LV2_PART1 + LV2_PART2

if __name__ == '__main__':
    print(f"LV2 Total Expansion Units: {len(LV2_EXPANSION_12_UNITS)}")
    for u in LV2_EXPANSION_12_UNITS:
        print(f"  Unit {u['unitNo']}: {u['title']} (Drills: {len(u['spottingDrills'])}, Qs: {len(u['questions'])}, FCs: {len(u['formulaCards'])})")
