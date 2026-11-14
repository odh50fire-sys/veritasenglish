import urllib.request
import ssl
import re
import json
import time
import html as html_lib

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def fetch_html(url, retries=3):
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
                raw = resp.read()
                try:
                    return raw.decode('utf-8')
                except UnicodeDecodeError:
                    return raw.decode('euc-kr', errors='replace')
        except Exception as e:
            if attempt == retries - 1:
                print(f"Error fetching {url}: {e}")
                return ""
            time.sleep(1)
    return ""

def clean_html_text(text):
    text = re.sub(r'<br\s*/?>', '\n', text, flags=re.I)
    text = re.sub(r'</p>', '\n', text, flags=re.I)
    text = re.sub(r'<[^>]+>', '', text)
    text = html_lib.unescape(text)
    lines = [line.strip() for line in text.split('\n') if line.strip()]
    return '\n'.join(lines)

def extract_toc_items(toc_raw):
    cleaned = clean_html_text(toc_raw)
    raw_lines = cleaned.split('\n')
    
    # Candidate lines for TOC
    items = []
    # Patterns for TOC: DAY, Chapter, Unit, Lesson, Part, 강, 과, STEP, Section
    toc_pattern = re.compile(r'^(DAY\s*\d+|Chapter\s*\d+|Unit\s*\d+|Lesson\s*\d+|Part\s*\d+|\d+강|\d+과|Step\s*\d+|Section\s*\d+|Theme\s*\d+)', re.I)
    
    for line in raw_lines:
        line_clean = line.strip(' -·\t\r')
        # Skip pure headers like 'PART 01' if followed by detailed units, or keep them if they describe content
        if toc_pattern.search(line_clean):
            # Clean trailing page numbers or dots
            line_clean = re.sub(r'[\.·]{2,}.*$', '', line_clean).strip()
            line_clean = re.sub(r'\s+\d+$', '', line_clean).strip()
            if len(line_clean) > 2 and line_clean not in items:
                items.append(line_clean)
                
    # If regex pattern didn't catch enough items, check line-by-line numbered items
    if len(items) < 3:
        for line in raw_lines:
            line_clean = line.strip(' -·\t\r')
            if re.match(r'^\d+[\.\)]\s+', line_clean):
                line_clean = re.sub(r'[\.·]{2,}.*$', '', line_clean).strip()
                if line_clean not in items:
                    items.append(line_clean)
                    
    return items

CATEGORIES = [
    # 초/중등 (BB)
    {"catName": "초중등-중학내신", "code": "BB02", "mainCat": "school_task", "grade": "중1~3", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BB02&isSell=1"},
    {"catName": "초중등-고등선행", "code": "BB03", "mainCat": "reading", "grade": "예비고1", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BB03&isSell=1"},
    {"catName": "초중등-어휘", "code": "BB04", "mainCat": "voca", "grade": "중1~3", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BB04&isSell=1"},
    {"catName": "초중등-쓰기", "code": "BB05", "mainCat": "writing", "grade": "중1~3", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BB05&isSell=1"},
    {"catName": "초중등-독해", "code": "BB07", "mainCat": "reading", "grade": "중1~3", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BB07&isSell=1"},
    {"catName": "초중등-문법구문", "code": "BB09", "mainCat": "grammar", "grade": "중1~3", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BB09&isSell=1"},
    # 고등 (BD)
    {"catName": "고등-어휘", "code": "BD01", "mainCat": "voca", "grade": "고1~3·수능", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BD01&isSell=1"},
    {"catName": "고등-독해", "code": "BD02", "mainCat": "reading", "grade": "고1~3·수능", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BD02&isSell=1"},
    {"catName": "고등-듣기", "code": "BD03", "mainCat": "listening", "grade": "고1~3·수능", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BD03&isSell=1"},
    {"catName": "고등-문법구문", "code": "BD04", "mainCat": "grammar", "grade": "고1~3", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BD04&isSell=1"},
    {"catName": "고등-수능대비", "code": "BD05", "mainCat": "sat", "grade": "고3·수능", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BD05&isSell=1"},
    {"catName": "고등-고교내신", "code": "BD06", "mainCat": "school_task", "grade": "고1~2", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BD06&isSell=1"},
    {"catName": "고등-단기특강", "code": "BD07", "mainCat": "sat", "grade": "고등전학년", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BD07&isSell=1"},
    # 교과서 (BE)
    {"catName": "교과서-중학영어", "code": "BE02", "mainCat": "school_task", "grade": "중1~3", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BE02&isSell=1"},
    {"catName": "교과서-고등영어", "code": "BE03", "mainCat": "school_task", "grade": "고1~2", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BE03&isSell=1"},
    # TOEIC (BF01)
    {"catName": "수험일반-TOEIC", "code": "BF01", "mainCat": "toeic", "grade": "대학·성인", "url": "https://www.nebooks.co.kr/pages/book/category.asp?c=BF01&sc=date&isSell=1&v=list"}
]

def crawl_all_nebooks():
    books_dict = {}
    print("=== STARTING OFFICIAL NE BOOKS CRAWLER ===")
    
    for cat in CATEGORIES:
        code = cat['code']
        cat_name = cat['catName']
        base_url = cat['url']
        print(f"\nScanning Category: [{cat_name}] (c={code})...")
        
        # 1. Fetch page 1 to discover pagination
        p1_html = fetch_html(base_url)
        if not p1_html:
            print(f"Failed to fetch {base_url}")
            continue
            
        # Discover all page numbers
        pages_found = set(re.findall(rf'p=(\d+)&amp;c={code}', p1_html) + re.findall(rf'p=(\d+)&c={code}', p1_html))
        max_p = max([int(p) for p in pages_found]) if pages_found else 1
        print(f"  Found {max_p} pages for [{cat_name}]")
        
        # Process each page
        for p in range(1, max_p + 1):
            if p == 1:
                cur_html = p1_html
            else:
                p_url = f"https://www.nebooks.co.kr/pages/book/category.asp?p={p}&c={code}&isSell=1"
                if code == 'BF01':
                    p_url += "&sc=date&v=list"
                cur_html = fetch_html(p_url)
                
            # Extract book items from the list
            # Find all view.asp links and their containing block
            # Look for <li> blocks containing view.asp
            li_blocks = re.findall(r'<li[^>]*>(.*?)</li>', cur_html, re.DOTALL)
            book_lis = [li for li in li_blocks if 'view.asp?c=' in li]
            
            for li in book_lis:
                # Check for out of print
                if '절판' in li or '품절' in li or 'soldout' in li.lower():
                    continue
                    
                match_id = re.search(r'view\.asp\?c=([^&"\']+)', li)
                if not match_id:
                    continue
                book_code = match_id.group(1).strip()
                
                # Check if already collected
                if book_code in books_dict:
                    # Append secondary category or tags if relevant
                    books_dict[book_code]['categories'].append(cat_name)
                    continue
                    
                # Fetch Book Detail Page
                detail_url = f"https://www.nebooks.co.kr/pages/book/view.asp?c={book_code}&ct={code}"
                detail_html = fetch_html(detail_url)
                if not detail_html:
                    continue
                    
                # Double-check out of print on detail page
                if '절판' in detail_html and ('판매상태' in detail_html or '상태' in detail_html):
                    # Check if specifically marked as 절판
                    if re.search(r'판매상태[^<]*<[^>]+>[^<]*절판', detail_html):
                        continue
                        
                # Extract title
                title_match = re.search(r'<meta\s+property=["\']og:title["\']\s+content=["\']([^"\']+)["\']', detail_html, re.I)
                if title_match:
                    raw_title = title_match.group(1).strip()
                    title = re.sub(r'-NE Books.*$', '', raw_title).strip()
                else:
                    t_m = re.search(r'<h[23][^>]*class=["\'][^"\']*tit[^"\']*["\'][^>]*>(.*?)</h[23]>', detail_html, re.I)
                    title = clean_html_text(t_m.group(1)) if t_m else f"NE능률 교재 ({book_code})"
                
                title = html_lib.unescape(title)
                
                # Extract cover image
                img_match = re.search(r'<meta\s+property=["\']og:image["\']\s+content=["\']([^"\']+)["\']', detail_html, re.I)
                cover_img = img_match.group(1).strip() if img_match else ""
                
                # Extract description
                desc_match = re.search(r'<meta\s+property=["\']og:description["\']\s+content=["\']([^"\']+)["\']', detail_html, re.I)
                desc = desc_match.group(1).strip() if desc_match else ""
                
                # Extract Table of Contents (목차)
                toc_match = re.search(r'<th[^>]*>\s*<span[^>]*>목차</span>\s*</th>\s*<td[^>]*>(.*?)</td>', detail_html, re.DOTALL | re.I)
                toc_items = []
                if toc_match:
                    toc_raw = toc_match.group(1)
                    toc_items = extract_toc_items(toc_raw)
                    
                # Determine gradeTag
                grade = cat['grade']
                if '중학' in title or '중등' in title:
                    if '1' in title: grade = '중1'
                    elif '2' in title: grade = '중2'
                    elif '3' in title: grade = '중3'
                    else: grade = '중학'
                elif '고등' in title or '수능' in title:
                    if '수능' in title: grade = '고3·수능'
                    elif '1' in title: grade = '고1'
                    elif '2' in title: grade = '고2'
                    else: grade = '고등'
                elif '초등' in title:
                    grade = '초등'
                elif '토익' in title or 'TOEIC' in title:
                    grade = '대학·성인'
                    
                # Determine unit type
                unit_type = "강"
                if any('DAY' in item for item in toc_items):
                    unit_type = "Day"
                elif any('Chapter' in item for item in toc_items):
                    unit_type = "Chapter"
                elif any('Unit' in item for item in toc_items):
                    unit_type = "Unit"
                elif any('Lesson' in item for item in toc_items):
                    unit_type = "Lesson"
                    
                total_units = len(toc_items) if len(toc_items) >= 4 else 24
                
                # Determine emoji
                if cat['mainCat'] == 'voca': emoji = "📘"
                elif cat['mainCat'] == 'reading': emoji = "📖"
                elif cat['mainCat'] == 'grammar': emoji = "📗"
                elif cat['mainCat'] == 'sat': emoji = "🎯"
                elif cat['mainCat'] == 'school_task': emoji = "🏫"
                elif cat['mainCat'] == 'toeic': emoji = "💼"
                else: emoji = "📚"
                
                # Extract tags
                tags = ['NE능률', '능률', cat['catName']]
                if '어원' in title: tags.extend(['어원편', '보카', 'VOCA'])
                if '빠바' in title or '빠른독해' in title: tags.extend(['빠바', '빠른독해 바른독해'])
                if '리딩튜터' in title: tags.extend(['리딩튜터', 'Reading Tutor'])
                if '1316' in title: tags.extend(['1316', '팬클럽'])
                if '그래머존' in title: tags.extend(['그래머존', 'Grammar Zone'])
                if '토마토' in title: tags.extend(['토마토', 'TOMATO', '토익'])
                if '김성곤' in title or '김기택' in title or '민찬규' in title:
                    tags.extend(['교과서', '내신'])
                    
                book_entry = {
                    'id': f"ne_{book_code}",
                    'bookCode': book_code,
                    'title': title,
                    'publisher': 'NE능률',
                    'category': cat['mainCat'],
                    'gradeTag': grade,
                    'totalUnits': total_units,
                    'unitType': unit_type,
                    'defaultDaily': 1,
                    'coverEmoji': emoji,
                    'coverImg': cover_img,
                    'desc': desc,
                    'isOriginalReader': False,
                    'tags': list(set(tags)),
                    'toc': toc_items,
                    'detailUrl': detail_url,
                    'categories': [cat_name]
                }
                
                books_dict[book_code] = book_entry
                print(f"  [+] {title} ({book_code}) - TOC: {len(toc_items)} units")
                
    print(f"\n=== CRAWLING COMPLETE: {len(books_dict)} OFFICIAL BOOKS COLLECTED ===")
    
    with open('data/nebooks_official_crawled.json', 'w', encoding='utf-8') as f:
        json.dump(list(books_dict.values()), f, ensure_ascii=False, indent=2)
        
    print("Saved to data/nebooks_official_crawled.json")
    return list(books_dict.values())

if __name__ == '__main__':
    crawl_all_nebooks()
