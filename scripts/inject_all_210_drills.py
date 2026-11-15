# -*- coding: utf-8 -*-
"""
Inject all 210 drills (3 per unit * 70 units) into data/grammar_clinic_data.js.
Ensures full validation and integrity checks.
"""

import sys
import os
import json
import re

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import scripts.drills_dataset_part1 as d1
import scripts.drills_dataset_part2 as d2
import scripts.drills_dataset_part3 as d3
import scripts.drills_dataset_part4 as d4

# Combine extra drills (drill_2 and drill_3)
EXTRA_DRILLS = {}
EXTRA_DRILLS.update(d1.DRILLS_EXTRA)
EXTRA_DRILLS.update(d2.DRILLS_EXTRA_PART2)
EXTRA_DRILLS.update(d3.DRILLS_EXTRA_PART3)
EXTRA_DRILLS.update(d4.DRILLS_EXTRA_PART4)

# Korean translations for the 70 Drill 1 sentences
DRILL1_KOREAN = {
    'lv1_u1': '나의 삼촌은 런던에 살고 계시며 학교에서 영어를 가르치신다.',
    'lv1_u2': '선생님께서는 그와 나에게 책 몇 권을 주셨지만, 그것들은 그녀의 것이었다.',
    'lv1_u3': '기차가 매우 늦게 도착해서 나는 버스를 거의 탈 수 없었다.',
    'lv1_u4': '너는 어제 어떻게 박물관에 갔니? 나는 지하철을 탔어.',
    'lv1_u5': '들어봐! 아기가 지금 바로 옆방에서 울고 있어.',
    'lv1_u6': '너는 우산을 가져올 필요가 없다. 오늘은 비가 오지 않을 것이다.',
    'lv1_u7': '피자에서 맛있는 냄새가 나고 음악은 좋게 들린다.',
    'lv1_u8': '이것은 정말 놀라운 경치로구나! 산들이 정말 아름답다!',
    'lv2_u1': '그는 나에게 쓸 종이 한 장을 주었지만, 나는 가지고 쓸 펜이 없었다.',
    'lv2_u2': '집을 나설 때 현관문 잠그는 것을 잊지 마라.',
    'lv2_u3': '나의 삼촌은 2년 전에 캐나다로 이사하셨고 여전히 그곳에 살고 계신다.',
    'lv2_u4': '어머니께서는 어제 나를 위해 맛있는 생일 케이크를 만들어 주셨다.',
    'lv2_u5': '이 퍼즐은 우리가 어제 풀었던 퍼즐보다 훨씬 더 어렵다.',
    'lv2_u6': '거리 모퉁이에 큰 서점이 하나 있곤 했다.',
    'lv2_u7': '그 비극적인 자동차 사고는 어젯밤 고속도로에서 일어났다.',
    'lv2_u8': '만약 내일 비가 온다면 야구 경기는 취소될 것이다.',
    'lv3_u1': '선생님께서는 모든 학생들에게 에세이를 쓰게 하셨지만, 우리에게 휴식을 취하는 것은 허락하셨다.',
    'lv3_u2': '나는 아버지가 NASA의 유명한 우주비행사인 한 소년을 만났다.',
    'lv3_u3': '이것이 바로 내가 하루 종일 찾고 있었던 것이다.',
    'lv3_u4': '네가 그 어려운 시험에 어떻게 합격했는지 그 방법을 내게 말해줘.',
    'lv3_u5': '그 사고에 관한 소식은 모든 사람들에게 깊은 충격을 주었다.',
    'lv3_u6': '무슨 말을 해야 할지 몰라서 그녀는 그저 침묵을 지켰다.',
    'lv3_u7': '내가 그의 전화번호를 알았더라면 어제 그에게 전화를 걸 수 있었을 텐데.',
    'lv3_u8': '그녀는 자신이 가장 좋아하는 선글라스를 쓰지 않고 집을 나서는 법이 거의 없다.',
    'lv4_u1': '이 희귀 질환들에 대한 새로운 치료법의 발견은 많은 생명을 구했다.',
    'lv4_u2': '위원회는 그 제안이 즉시 거부되어야 한다고 권고했다.',
    'lv4_u3': '관리자는 소프트웨어 개발 분야에서 폭넓은 경험을 가진 후보자를 찾고 있었다.',
    'lv4_u4': '그녀는 다리를 꼬고 팔짱을 낀 채 선생님의 말씀을 듣고 있었다.',
    'lv4_u5': '네가 5분만 더 일찍 도착했더라면 그 유명한 가수를 볼 수 있었을 텐데.',
    'lv4_u6': '학생들뿐만 아니라 선생님께서도 다가오는 현장학습에 매우 신이 나셨다.',
    'lv4_u7': '폭우로 인해 우리는 산으로 하이킹을 가지 못했다.',
    'lv4_u8': '그는 가파른 언덕을 오르기 전에 우리가 잠깐 휴식을 취할 것을 제안했다.',
    'lv5_u1': '우리가 어제 방문했던 그 박물관은 참으로 웅장했다.',
    'lv5_u2': '언덕 꼭대기에 서니 도시 전체가 한눈에 또렷하게 내려다보였다.',
    'lv5_u3': '이 매서운 추위 속에 밖으로 나가느니 차라리 집에 머물겠다.',
    'lv5_u4': '그녀는 자신의 인생이 완전히 바뀌려 하고 있다는 사실을 거의 깨닫지 못했다.',
    'lv5_u5': '유기농 채소의 가격은 일반 채소의 가격보다 훨씬 더 비싸다.',
    'lv5_u6': '모든 학생이 안전 수칙을 철저하게 이해하는 것이 필수적이다.',
    'lv5_u7': '그녀는 18세기에 만들어진 우아한 골동품 도자기 화병을 샀다.',
    'lv5_u8': '멀리서 바라보면 그 고대 바위는 거대한 잠자는 거북이를 닮았다.',
    'sp_terms_u1': '요리사는 배고픈 손님들을 위해 신중하게 맛있는 식사를 준비했다.',
    'sp_terms_u2': '그녀가 교실로 들어섰을 때 모든 학생들이 조용히 그녀를 쳐다보았다.',
    'sp_terms_u3': '갓 구운 빵은 맛있는 냄새가 났고 우리 모두에게 달콤한 맛이 났다.',
    'sp_terms_u4': '나의 꿈은 천체물리학자가 되어 깊은 우주를 탐험하는 것이다.',
    'sp_terms_u5': '과학 경시대회에서 우승한 그 소녀는 나의 여동생이다.',
    'sp_terms_u6': '어제 저녁 65번 고속도로에서 의문의 사고가 일어났다.',
    'sp_terms_u7': '오후 내내 비가 많이 내렸음에도 불구하고 그들은 야구 경기를 계속했다.',
    'sp_terms_u8': '어머니는 얼굴에 따뜻한 미소를 띤 채 잠든 아이를 바라보았다.',
    'sp_writing_u1': '자신의 전 재산을 자선단체에 기부하다니 그는 참으로 관대했다.',
    'sp_writing_u2': '나는 우리의 첫 번째 기념일에 저녁 식사를 했던 그 레스토랑을 결코 잊지 못할 것이다.',
    'sp_writing_u3': '그는 편안하게 다리를 꼰 채 소파에 앉아 음악을 듣고 있었다.',
    'sp_writing_u4': '그가 나의 조언을 들었더라면 운전면허 시험에서 떨어지지 않았을 텐데.',
    'sp_writing_u5': '그 영화는 너무 지루해서 관객의 절반이 끝나기도 전에 자리를 떴다.',
    'sp_writing_u6': '선생님께서는 학생들에게 환경 보호에 관한 에세이를 작성하도록 시키셨다.',
    'sp_writing_u7': '그녀는 건강을 신경 쓰기 때문에 패스트푸드를 먹는 일이 거의 없다.',
    'sp_writing_u8': '참가자들 각각은 내일까지 피드백을 제출하도록 요청받았다.',
    'sp_csat_u1': '언어를 통해 복잡하고 추상적인 개념을 소통하는 인간의 능력은 인간을 다른 모든 종들과 구별 짓는다.',
    'sp_csat_u2': '심리학자들은 규칙적으로 운동하는 사람들이 활동적이지 않은 사람들보다 불안을 덜 겪는다는 것을 발견했다.',
    'sp_csat_u3': '청중들은 그 놀라운 마술 공연 내내 완전히 매료된 채로 머물렀다.',
    'sp_csat_u4': '야행성 동물의 눈은 주행성 동물의 눈보다 훨씬 더 크다.',
    'sp_csat_u5': '규칙적인 명상은 사람들이 심각한 위기 상황에서도 마음을 차분하게 유지할 수 있도록 도와준다.',
    'sp_csat_u6': '그 연구는 데이터 수집, 동향 분석, 그리고 최종 보고서 출판을 포함했다.',
    'sp_vs_u1': '다음 주에 해외여행을 갈 때 여권을 챙기는 것을 잊지 마라.',
    'sp_vs_u2': '나의 삼촌은 3년 전에 이 스포츠카를 구입하셨고 지금도 운전하고 계신다.',
    'sp_vs_u3': '경찰은 그 용의자가 건물 안으로 침입했다는 결정적인 증거를 발견했다.',
    'sp_vs_u4': '이 특수 도구는 해저의 정밀한 수심을 측정하는 데 사용된다.',
    'sp_vs_u5': '지친 등산객은 푹신한 잔디밭 위에 누워 깊은 잠에 빠져들었다.',
    'sp_vs_u6': '현대 스마트폰은 사람들이 세상 어디에서나 일하는 것을 가능하게 만들어 준다.',
    'sp_vs_u7': '그녀가 밤낮으로 연습했음에도 불구하고 금메달을 따지는 못했다.',
    'sp_vs_u8': '두 명의 지원자 중 어느 누구도 그 임원직에 적합한 자격을 갖추지 못했다.'
}

def validate_drill(d, uid, d_idx):
    s = d['sentence']
    u = d['underlined']
    w = d['wrongIndex']
    c = d['correction']
    
    assert len(u) == 4, f"[{uid} drill {d_idx}] underlined must have 4 items, got {len(u)}"
    assert 0 <= w <= 3, f"[{uid} drill {d_idx}] wrongIndex out of range: {w}"
    assert '[' not in s and ']' not in s, f"[{uid} drill {d_idx}] sentence has brackets: {s}"
    
    cur = 0
    for i, word in enumerate(u):
        pos = s.find(word, cur)
        assert pos != -1, f"[{uid} drill {d_idx}] word #{i} '{word}' not found in sentence after pos {cur}: '{s}'"
        cur = pos + len(word)
        
    assert u[w] != c, f"[{uid} drill {d_idx}] wrong word equals correction '{c}'"
    assert 'conceptRef' in d and len(d['conceptRef']) > 5, f"[{uid} drill {d_idx}] missing conceptRef"
    assert 'explanation' in d and len(d['explanation']) > 10, f"[{uid} drill {d_idx}] missing explanation"
    assert 'korean' in d and len(d['korean']) > 5, f"[{uid} drill {d_idx}] missing korean translation"

# Read data/grammar_clinic_data.js
with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
    text = f.read()

m1 = re.search(r'window\.GRAMMAR_CLINIC_BANK\s*=\s*(\[[\s\S]*?\]);\s*(window\.GRAMMAR_SPECIAL_LECTURES|$)', text)
if not m1:
    print("Could not find window.GRAMMAR_CLINIC_BANK!")
    sys.exit(1)

bank = json.loads(m1.group(1))

total_drills = 0
for lvl in bank:
    lvl_num = lvl['level']
    for u in lvl['units']:
        uid = u['unitId']
        # Drill 1 update
        d1_item = u['spottingDrills'][0]
        d1_item['id'] = 'drill_1'
        if not d1_item.get('conceptRef'):
            fc_name = u['formulaCards'][0]['name'] if u.get('formulaCards') else u['title']
            d1_item['conceptRef'] = f"1단계 [공식 1: {fc_name}] 출제 연계"
        if not d1_item.get('korean'):
            d1_item['korean'] = DRILL1_KOREAN.get(uid, u['title'] + " 예문 해석")
            
        validate_drill(d1_item, uid, 1)
        
        # Attach Drill 2 and Drill 3
        extras = EXTRA_DRILLS.get(uid)
        if not extras or len(extras) != 2:
            print(f"Missing extra drills for {uid}!")
            sys.exit(1)
            
        validate_drill(extras[0], uid, 2)
        validate_drill(extras[1], uid, 3)
        
        u['spottingDrills'] = [d1_item, extras[0], extras[1]]
        assert len(u['spottingDrills']) == 3
        total_drills += 3

print(f"Successfully validated all {total_drills} spotting drills across {len(EXTRA_DRILLS)} units!")

# Also sync window.GRAMMAR_SPECIAL_LECTURES if present
m2 = re.search(r'window\.GRAMMAR_SPECIAL_LECTURES\s*=\s*(\[[\s\S]*?\]);\s*$', text)
if m2:
    spec = json.loads(m2.group(1))
    for c in spec:
        for u in c['units']:
            uid = u['unitId']
            # Find in bank
            matching = None
            for b_lvl in bank:
                for b_u in b_lvl['units']:
                    if b_u['unitId'] == uid:
                        matching = b_u
                        break
                if matching:
                    break
            if matching:
                u['spottingDrills'] = matching['spottingDrills']
    spec_json = json.dumps(spec, ensure_ascii=False, indent=2)
else:
    spec_json = None

bank_json = json.dumps(bank, ensure_ascii=False, indent=2)

new_content = f"// Veritas English - Grammar Clinic Data Bank\nwindow.GRAMMAR_CLINIC_BANK = {bank_json};\n"
if spec_json:
    new_content += f"\n// Grammar Special Lectures (문법 특강 별도 단원 데이터)\nwindow.GRAMMAR_SPECIAL_LECTURES = {spec_json};\n"

with open('data/grammar_clinic_data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully updated data/grammar_clinic_data.js! Total drills: {total_drills}")
