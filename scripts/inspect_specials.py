# -*- coding: utf-8 -*-
import json
import re

with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'window\.GRAMMAR_SPECIAL_LECTURES\s*=\s*(\[.*?\]);?\s*$', text, re.DOTALL)
if m:
    specials = json.loads(m.group(1))
    print(f"Total Special Lecture tracks: {len(specials)}")
    for s in specials:
        print("Keys:", s.keys())
        print(f"  id: {s.get('id')}, name: {s.get('name')}, title: {s.get('title')}, trackTitle: {s.get('trackTitle')}, units: {len(s.get('units', []))}")
        for u in s.get('units', []):
            print(f"    U{u['unitNo']}: {u['title']}")
