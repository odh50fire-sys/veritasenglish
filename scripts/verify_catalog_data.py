import json

content = open('data/books_catalog.js', 'r', encoding='utf-8').read()
json_str = content[content.find('['):content.rfind(']')+1]
books = json.loads(json_str)

print('Total books in catalog:', len(books))
ids = set()
for b in books:
    assert b['id'] not in ids, f"Duplicate ID found: {b['id']}"
    ids.add(b['id'])
print('All IDs are 100% unique!')

ne_books = [b for b in books if b.get('publisher') == 'NE능률' or '능률' in b.get('title','') or any('NE' in t or '능률' in t for t in b.get('tags', []))]
print(f'NE Books count: {len(ne_books)}')

textbooks = [b for b in books if not b.get('isOriginalReader')]
novels = [b for b in books if b.get('isOriginalReader')]
print(f'Textbooks: {len(textbooks)}, Novels/Readers: {len(novels)}')

print('\nSample NE Books:')
for b in ne_books[:5]:
    print(f"  [{b['id']}] {b['title']} (Units: {b.get('totalUnits', 0)}, Type: {b.get('unitType')}, TOC: {len(b.get('toc', []))})")

print('\nCheck specific user-requested search keywords:')
keywords = ['능률VOCA', '중등', '고난도', '빠바', '리딩튜터', '1316', '그래머존', '토마토', '김기택', '김성곤', '내신백신']
for kw in keywords:
    matches = [b for b in books if kw in b.get('title', '') or any(kw in t for t in b.get('tags', []))]
    print(f"  Keyword '{kw}': {len(matches)} matches (First: {matches[0]['title'] if matches else 'NONE'})")
