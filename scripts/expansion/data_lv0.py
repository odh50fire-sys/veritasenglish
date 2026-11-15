# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from data_lv0_part1 import LV0_EXPANSION_UNITS as P1
from data_lv0_part2 import LV0_PART2 as P2
from data_lv0_part3 import LV0_PART3 as P3

LV0_EXPANSION_12_UNITS = P1 + P2 + P3

if __name__ == '__main__':
    print(f"LV0 Total Expansion Units: {len(LV0_EXPANSION_12_UNITS)}")
    for u in LV0_EXPANSION_12_UNITS:
        print(f"  Unit {u['unitNo']}: {u['title']} (Drills: {len(u['spottingDrills'])}, Qs: {len(u['questions'])}, FCs: {len(u['formulaCards'])})")
