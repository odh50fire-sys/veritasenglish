# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from data_lv4_part1 import LV4_PART1
from data_lv4_part2 import LV4_PART2

LV4_EXPANSION_12_UNITS = LV4_PART1 + LV4_PART2

if __name__ == '__main__':
    print(f"LV4 Total Expansion Units: {len(LV4_EXPANSION_12_UNITS)}")
    for u in LV4_EXPANSION_12_UNITS:
        print(f"  Unit {u['unitNo']}: {u['title']} (Drills: {len(u['spottingDrills'])}, Qs: {len(u['questions'])}, FCs: {len(u['formulaCards'])})")
