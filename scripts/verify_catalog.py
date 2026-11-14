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

        total_catalog = eval_js('window.EXPANDED_BOOKS_CATALOG ? window.EXPANDED_BOOKS_CATALOG.length : 0')
        print(f'Catalog Count: {total_catalog}')
        assert total_catalog == 13984, f"Expected 13984, got {total_catalog}"

        # Test modal opening
        eval_js('window.assistantEngine.openExternalStudyModal()')
        modal_hidden = eval_js('document.getElementById("modal-external-study-register").classList.contains("hidden")')
        print(f'Modal opened: not hidden = {not modal_hidden}')

        # Test textbooks tab
        eval_js('window.assistantEngine.switchStudyRegisterTab("textbooks")')
        grid_cards_tb = eval_js('document.querySelectorAll("#bestseller-books-grid > div").length')
        print(f'Textbook Tab Grid Cards: {grid_cards_tb}')

        # Test NE Neungryul official filter chip
        eval_js('window.assistantEngine.filterBestsellers("neungryul")')
        ne_cards = eval_js('document.querySelectorAll("#bestseller-books-grid > div").length')
        first_ne_title = eval_js('document.querySelector("#bestseller-books-grid h5") ? document.querySelector("#bestseller-books-grid h5").innerText : ""')
        print(f'NE Neungryul filter cards: {ne_cards}, First book: {first_ne_title}')

        # Search test: 능률VOCA
        eval_js('window.assistantEngine.onBookSearchInput("능률VOCA")')
        voca_results = eval_js('document.querySelectorAll("#ext-book-search-results > div").length')
        first_voca = eval_js('document.querySelector("#ext-book-search-results h5") ? document.querySelector("#ext-book-search-results h5").innerText : ""')
        print(f'Search "능률VOCA": {voca_results} results, First: {first_voca}')

        # Select official book and verify TOC preview
        # Select first result
        eval_js('document.querySelector("#ext-book-search-results > div").click()')
        time.sleep(1)
        toc_visible = eval_js('!document.getElementById("ext-book-toc-preview-container").classList.contains("hidden")')
        toc_items_count = eval_js('document.querySelectorAll("#ext-book-toc-preview-container .font-mono > div").length')
        input_title = eval_js('document.getElementById("ext-study-title").value')
        print(f'Selected book title: {input_title}')
        print(f'TOC preview visible: {toc_visible}, Total Units in TOC: {toc_items_count}')
        assert toc_visible and toc_items_count > 0, "TOC should be visible with items!"

        # Search test: 김기택 (교과서 저자)
        eval_js('window.assistantEngine.onBookSearchInput("김기택")')
        kim_results = eval_js('document.querySelectorAll("#ext-book-search-results > div").length')
        print(f'Search "김기택": {kim_results} results')
        assert kim_results > 0, "김기택 교과서/문제집 should be found!"

        # Search test: 토마토 (토익)
        eval_js('window.assistantEngine.onBookSearchInput("토마토")')
        tomato_results = eval_js('document.querySelectorAll("#ext-book-search-results > div").length')
        print(f'Search "토마토": {tomato_results} results')
        assert tomato_results > 0, "토마토 토익 교재 should be found!"

        print('\n=== ALL E2E VERIFICATION CHECKS PASSED WITH FLYING COLORS! ===')
finally:
    proc.terminate()
    proc.wait()
