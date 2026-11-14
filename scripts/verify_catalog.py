import subprocess, time, urllib.request, json, os
from websockets.sync.client import connect

port = 9223
chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
user_data_dir = os.path.abspath('tmp_chrome_verify_catalog')

proc = subprocess.Popen([
    chrome_path,
    '--headless=new',
    f'--remote-debugging-port={port}',
    f'--user-data-dir={user_data_dir}',
    '--disable-gpu',
    '--no-sandbox',
    '--allow-file-access-from-files',
    '--disable-web-security',
    'about:blank'
])

msg_id = 1
def send_cmd(ws, method, params=None):
    global msg_id
    cid = msg_id
    msg_id += 1
    ws.send(json.dumps({'id': cid, 'method': method, 'params': params or {}}))
    while True:
        res = json.loads(ws.recv())
        if res.get('id') == cid:
            return res.get('result', {})

try:
    time.sleep(2)
    tabs = json.loads(urllib.request.urlopen(f'http://127.0.0.1:{port}/json').read().decode())
    ws_url = tabs[0]['webSocketDebuggerUrl']
    with connect(ws_url) as ws:
        file_url = 'file:///' + os.path.abspath('index.html').replace('\\', '/')
        print('Navigating to:', file_url)
        send_cmd(ws, 'Page.navigate', {'url': file_url})

        def eval_js(expr):
            r = send_cmd(ws, 'Runtime.evaluate', {'expression': expr, 'returnByValue': True})
            if 'exceptionDetails' in r:
                print('EXPR ERROR:', expr, r['exceptionDetails'])
            return r.get('result', {}).get('value')

        for _ in range(30):
            time.sleep(1)
            state = eval_js('document.readyState')
            has_engine = eval_js('typeof window.assistantEngine !== "undefined"')
            if has_engine:
                print('Engine ready!')
                break

        # Open modal
        eval_js('window.assistantEngine.openExternalStudyModal()')

        # Test 1: Search "리딩" (Korean)
        eval_js('window.assistantEngine.onBookSearchInput("리딩")')
        time.sleep(0.5)
        titles_korean = eval_js('''
            Array.from(document.querySelectorAll("#ext-book-search-results h5")).map(h => h.innerText)
        ''')
        print(f'Search "리딩" returned {len(titles_korean)} titles.')
        print('Sample titles for "리딩":', titles_korean[:5])
        
        # Check if English 'Reading' or 'reading' appears in results
        has_english_reading = any('reading' in t.lower() for t in titles_korean)
        print(f'Does search "리딩" contain English "Reading" books? -> {has_english_reading}')
        assert has_english_reading, "Search for '리딩' MUST include books containing English 'Reading'!"

        # Test 2: Search "reading" (English)
        eval_js('window.assistantEngine.onBookSearchInput("reading")')
        time.sleep(0.5)
        titles_english = eval_js('''
            Array.from(document.querySelectorAll("#ext-book-search-results h5")).map(h => h.innerText)
        ''')
        print(f'Search "reading" returned {len(titles_english)} titles.')
        has_korean_reading = any('리딩' in t for t in titles_english)
        print(f'Does search "reading" contain Korean "리딩" books? -> {has_korean_reading}')
        assert has_korean_reading, "Search for 'reading' MUST include books containing Korean '리딩'!"

        # Test 3: Search "해리포터" (Korean) -> Harry Potter
        eval_js('window.assistantEngine.onBookSearchInput("해리포터")')
        time.sleep(0.5)
        hp_titles = eval_js('''
            Array.from(document.querySelectorAll("#ext-book-search-results h5")).map(h => h.innerText)
        ''')
        print(f'Search "해리포터" returned {len(hp_titles)} titles. First: {hp_titles[0] if hp_titles else "none"}')
        assert any('Harry Potter' in t for t in hp_titles), "Search for '해리포터' should find Harry Potter books!"

        # Test 4: Search "그래머" (Korean) -> Grammar
        eval_js('window.assistantEngine.onBookSearchInput("그래머")')
        time.sleep(0.5)
        gram_titles = eval_js('''
            Array.from(document.querySelectorAll("#ext-book-search-results h5")).map(h => h.innerText)
        ''')
        print(f'Search "그래머" returned {len(gram_titles)} titles. Sample: {gram_titles[:3]}')
        assert any('grammar' in t.lower() for t in gram_titles), "Search for '그래머' should find Grammar books!"

        print('\n=== ALL BILINGUAL EXPANSION VERIFICATION TESTS PASSED SUCCESSFULLY! ===')
finally:
    proc.terminate()
    proc.wait()
