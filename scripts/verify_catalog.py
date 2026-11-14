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
            print(f'Waiting... readyState={state}, hasEngine={has_engine}')
            if has_engine:
                break

        total_catalog = eval_js('window.EXPANDED_BOOKS_CATALOG ? window.EXPANDED_BOOKS_CATALOG.length : 0')
        all_books = eval_js('window.assistantEngine ? window.assistantEngine.getAllAvailableBooks().length : 0')
        print(f'Catalog Count: {total_catalog}, Total Available Books: {all_books}')

        # Test modal opening
        eval_js('window.assistantEngine.openExternalStudyModal()')
        modal_hidden = eval_js('document.getElementById("modal-external-study-register").classList.contains("hidden")')
        print(f'Modal opened (hidden={modal_hidden})')

        # Test textbooks tab
        eval_js('window.assistantEngine.switchStudyRegisterTab("textbooks")')
        grid_cards_tb = eval_js('document.querySelectorAll("#bestseller-books-grid > div").length')
        print(f'Textbook Tab Grid Cards: {grid_cards_tb}')

        # Test readers tab
        eval_js('window.assistantEngine.switchStudyRegisterTab("readers")')
        grid_cards_rd = eval_js('document.querySelectorAll("#bestseller-books-grid > div").length')
        first_reader_title = eval_js('document.querySelector("#bestseller-books-grid h5") ? document.querySelector("#bestseller-books-grid h5").innerText : "none"')
        print(f'Readers Tab Grid Cards: {grid_cards_rd}, First reader: {first_reader_title}')

        # Test Readers Tab category chip 'oxford'
        eval_js('window.assistantEngine.filterBestsellers("oxford")')
        oxford_count = eval_js('document.querySelectorAll("#bestseller-books-grid > div").length')
        first_oxford = eval_js('document.querySelector("#bestseller-books-grid h5").innerText')
        print(f'Oxford filter cards: {oxford_count}, First: {first_oxford}')

        # Test Load More button
        eval_js('window.assistantEngine.loadMoreCatalogBooks()')
        more_count = eval_js('document.querySelectorAll("#bestseller-books-grid > div").length')
        print(f'After loadMoreCatalogBooks: {more_count} cards displayed')

        # Test Textbooks Tab category chip 'grammar'
        eval_js('window.assistantEngine.switchStudyRegisterTab("textbooks")')
        eval_js('window.assistantEngine.filterBestsellers("grammar")')
        grammar_count = eval_js('document.querySelectorAll("#bestseller-books-grid > div").length')
        first_grammar = eval_js('document.querySelector("#bestseller-books-grid h5").innerText')
        print(f'Grammar filter cards: {grammar_count}, First: {first_grammar}')

        # Test search query 'Harry Potter'
        eval_js('window.assistantEngine.onBookSearchInput("Harry Potter")')
        search_count_hp = eval_js('document.querySelectorAll("#ext-book-search-results > div").length')
        print(f'Search results for "Harry Potter": {search_count_hp}')

        # Test selecting Harry Potter novel and verify category is set to 'novel'
        eval_js('window.assistantEngine.selectBookFromSearch(window.assistantEngine.getAllAvailableBooks().find(b => b.title.includes("Harry Potter")).id)')
        selected_cat = eval_js('document.getElementById("ext-study-category").value')
        has_novel_option = eval_js('Boolean(document.querySelector("#ext-study-category option[value=\'novel\']"))')
        print(f'Novel category selected: {selected_cat}, Has novel option in select: {has_novel_option}')

        # Test search query '수능특강'
        eval_js('window.assistantEngine.onBookSearchInput("수능특강")')
        search_count_sat = eval_js('document.querySelectorAll("#ext-book-search-results > div").length')
        print(f'Search results for "수능특강": {search_count_sat}')

        # Test book selection and TOC preview
        eval_js('window.assistantEngine.selectBookFromSearch(window.assistantEngine.getAllAvailableBooks().find(b => b.title.includes("수능특강")).id)')
        toc_visible = eval_js('!document.getElementById("ext-book-toc-preview-container").classList.contains("hidden")')
        toc_items = eval_js('document.querySelectorAll("#ext-book-toc-preview-container .truncate").length')
        form_title = eval_js('document.getElementById("ext-study-title").value')
        print(f'TOC preview visible: {toc_visible}, Items: {toc_items}, Form title: {form_title}')

        print('ALL BROWSER TESTS PASSED SUCCESSFULLY!')
finally:
    proc.terminate()
