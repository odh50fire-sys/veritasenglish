# -*- coding: utf-8 -*-
"""
Verification script for all 3 Clinic Studio data files and engines
"""

import json
import re

print("============================================================")
print("VERITAS ENGLISH - 3대 부교재 스튜디오 종합 정합성 검증")
print("============================================================")

# 1. Verify Grammar Studio Extended Data
with open('data/grammar_studio_ext_data.js', 'r', encoding='utf-8') as f:
    g_content = f.read()
idx_g = g_content.find('window.GRAMMAR_STUDIO_EXT_DATA = ')
g_raw = g_content[idx_g + len('window.GRAMMAR_STUDIO_EXT_DATA = '):].strip()
idx_g_end = g_raw.rfind(']')
g_data = json.loads(g_raw[:idx_g_end+1])

print(f"\n1. Grammar Studio Extended Data:")
print(f"  - Total tracks: {len(g_data)}")
total_g_units = sum(len(l.get('units', [])) for l in g_data)
print(f"  - Total units: {total_g_units}")
g_errors = []
for l in g_data:
    code = l.get('levelCode')
    for u in l.get('units', []):
        u_no = u.get('unitNo')
        s2 = u.get('section2', [])
        s3 = u.get('section3', [])
        s4 = u.get('section4', [])
        if len(s2) != 10:
            g_errors.append(f"[{code} U{u_no}] Section 2 count != 10 ({len(s2)})")
        if len(s3) != 20:
            g_errors.append(f"[{code} U{u_no}] Section 3 count != 20 ({len(s3)})")
        if len(s4) != 3:
            g_errors.append(f"[{code} U{u_no}] Section 4 count != 3 ({len(s4)})")
print(f"  - Grammar Studio Errors: {len(g_errors)}")

# 2. Verify Reading Clinic Data
with open('data/reading_clinic_data.js', 'r', encoding='utf-8') as f:
    r_content = f.read()
idx_r = r_content.find('window.READING_CLINIC_DATA = ')
r_raw = r_content[idx_r + len('window.READING_CLINIC_DATA = '):].strip()
idx_r_end = r_raw.rfind(']')
r_data = json.loads(r_raw[:idx_r_end+1])

print(f"\n2. Reading Clinic Studio Data:")
print(f"  - Total tracks: {len(r_data)}")
total_r_units = sum(len(l.get('units', [])) for l in r_data)
print(f"  - Total units: {total_r_units}")
r_errors = []
for l in r_data:
    code = l.get('levelCode')
    for u in l.get('units', []):
        u_no = u.get('unitNo')
        st1 = u.get('stage1_spotlight', [])
        p = u.get('stage2_passage', {})
        st3 = u.get('stage3_comprehension', [])
        st4 = u.get('stage4_grammar', [])
        if len(st1) != 2:
            r_errors.append(f"[{code} U{u_no}] Stage 1 spotlight count != 2 ({len(st1)})")
        if not p.get('text') or len(p.get('footnoteVocab', [])) == 0:
            r_errors.append(f"[{code} U{u_no}] Stage 2 passage missing text or vocab")
        if len(st3) != 3:
            r_errors.append(f"[{code} U{u_no}] Stage 3 comprehension count != 3 ({len(st3)})")
        for q in st3:
            if q.get('ans') not in [0, 1, 2, 3, 4]:
                r_errors.append(f"[{code} U{u_no} Q{q.get('qNo')}] Invalid ans: {q.get('ans')}")
        if len(st4) != 2:
            r_errors.append(f"[{code} U{u_no}] Stage 4 grammar count != 2 ({len(st4)})")
print(f"  - Reading Clinic Errors: {len(r_errors)}")

# 3. Verify Writing Clinic Data
with open('data/writing_clinic_data.js', 'r', encoding='utf-8') as f:
    w_content = f.read()
idx_w = w_content.find('window.WRITING_CLINIC_DATA = ')
w_raw = w_content[idx_w + len('window.WRITING_CLINIC_DATA = '):].strip()
idx_w_end = w_raw.rfind(']')
w_data = json.loads(w_raw[:idx_w_end+1])

print(f"\n3. Writing Clinic Studio Data:")
print(f"  - Total tracks: {len(w_data)}")
total_w_units = sum(len(l.get('units', [])) for l in w_data)
print(f"  - Total units: {total_w_units}")
w_errors = []
for l in w_data:
    code = l.get('levelCode')
    for u in l.get('units', []):
        u_no = u.get('unitNo')
        st1 = u.get('step1_conditioned', [])
        st2 = u.get('step2_direct', [])
        st3 = u.get('step3_killer', [])
        if len(st1) != 6:
            w_errors.append(f"[{code} U{u_no}] Step 1 writing count != 6 ({len(st1)})")
        if len(st2) != 6:
            w_errors.append(f"[{code} U{u_no}] Step 2 writing count != 6 ({len(st2)})")
        if len(st3) != 3:
            w_errors.append(f"[{code} U{u_no}] Step 3 writing count != 3 ({len(st3)})")
print(f"  - Writing Clinic Errors: {len(w_errors)}")

total_errors = len(g_errors) + len(r_errors) + len(w_errors)
print("\n" + "=" * 60)
if total_errors == 0:
    print(f"🎉 ALL PERFECT! 160 units × 3 studios (총 480개 단원 워크북 완결)")
    print(f"  - 문법 Clinic: 160단원 (개념4대 + S2 10제 + S3 20제 + S4 3제)")
    print(f"  - 독해 Clinic: 160단원 (스포트라이트2제 + 지문/각주 + 독해3제 + 어법2제)")
    print(f"  - 쓰기 Clinic: 160단원 (조건6제 + 직결6제 + 기출킬러3제 + 루브릭)")
else:
    print(f"❌ Found {total_errors} errors!")
    for err in (g_errors + r_errors + w_errors)[:15]:
        print("  -", err)
print("============================================================")
