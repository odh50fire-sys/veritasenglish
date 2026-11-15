# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from data_lv0 import LV0_EXPANSION_12_UNITS
from data_lv1 import LV1_EXPANSION_12_UNITS
from data_lv2 import LV2_EXPANSION_12_UNITS
from data_lv3 import LV3_EXPANSION_12_UNITS
from data_lv4 import LV4_EXPANSION_12_UNITS
from data_lv5 import LV5_EXPANSION_12_UNITS
from data_special import SPECIAL_TERMS_NEW, SPECIAL_WRITING_NEW, SPECIAL_CSAT_NEW, SPECIAL_VS_NEW

datasets = [
    ("LV1", LV1_EXPANSION_12_UNITS),
    ("LV2", LV2_EXPANSION_12_UNITS),
    ("LV3", LV3_EXPANSION_12_UNITS),
    ("LV4", LV4_EXPANSION_12_UNITS),
    ("LV5", LV5_EXPANSION_12_UNITS),
    ("SPECIAL_TERMS", SPECIAL_TERMS_NEW),
    ("SPECIAL_WRITING", SPECIAL_WRITING_NEW),
    ("SPECIAL_CSAT", SPECIAL_CSAT_NEW),
    ("SPECIAL_VS", SPECIAL_VS_NEW),
]

for name, units in datasets:
    for u in units:
        for d in u.get('spottingDrills', []):
            sentence = d.get('sentence', '')
            underlined = d.get('underlined', [])
            mismatches = [part for part in underlined if part not in sentence]
            if mismatches:
                print(f"=== {name} Unit {u.get('unitNo')} ({u.get('title')}) ===")
                print(f"Sentence: {sentence}")
                print(f"Underlined: {underlined}")
                print(f"Mismatches: {mismatches}\n")
