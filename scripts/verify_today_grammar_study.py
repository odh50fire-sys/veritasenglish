import os
import sys
import json
import time
import socket
import tempfile
import threading
import subprocess
import urllib.request
import http.server
import socketserver

def run_test():
    print("=== Testing Today's Learning Box Grammar Clinic Integration & Planner Cleanup ===")
    
    server_dir = os.path.abspath(os.getcwd())
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        port = s.getsockname()[1]

    class CustomHandler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=server_dir, **kwargs)
        def log_message(self, format, *args):
            pass

    class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
        daemon_threads = True

    server = ThreadingTCPServer(("127.0.0.1", port), CustomHandler)
    server_thread = threading.Thread(target=server.serve_forever)
    server_thread.daemon = True
    server_thread.start()

    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        debug_port = s.getsockname()[1]
    temp_profile = tempfile.mkdtemp()

    chrome_cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        f"--user-data-dir={temp_profile}",
        f"--remote-debugging-port={debug_port}",
        f"http://127.0.0.1:{port}/index.html"
    ]

    proc = subprocess.Popen(chrome_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(2.5)

    try:
        targets_url = f"http://127.0.0.1:{debug_port}/json"
        req = urllib.request.urlopen(targets_url)
        tabs = json.loads(req.read().decode('utf-8'))
        page_tab = [t for t in tabs if t.get('type') == 'page'][0]
        ws_url = page_tab['webSocketDebuggerUrl']

        import websockets
        import asyncio

        async def run_cdp():
            async with websockets.connect(ws_url, max_size=10*1024*1024) as ws:
                msg_id = 0
                await ws.send(json.dumps({"id": 9991, "method": "Runtime.enable"}))
                await ws.send(json.dumps({"id": 9992, "method": "Log.enable"}))
                await ws.send(json.dumps({"id": 9993, "method": "Page.reload"}))
                await asyncio.sleep(1.0)

                async def send_eval(expr):
                    nonlocal msg_id
                    msg_id += 1
                    msg = {"id": msg_id, "method": "Runtime.evaluate", "params": {"expression": expr, "returnByValue": True, "awaitPromise": True}}
                    await ws.send(json.dumps(msg))
                    while True:
                        resp = json.loads(await ws.recv())
                        method = resp.get('method', '')
                        if method == 'Runtime.exceptionThrown':
                            print("RUNTIME EXCEPTION THROWN:", resp.get('params', {}).get('exceptionDetails', {}).get('text'), resp.get('params', {}).get('exceptionDetails', {}).get('exception', {}).get('description'))
                        if resp.get('id') == msg_id:
                            res = resp.get('result', {})
                            if 'exceptionDetails' in res:
                                print(f"JS EXCEPTION in '{expr}':", res['exceptionDetails'])
                            val = res.get('result', {}).get('value')
                            return val

                # Suppress alert prompts
                await send_eval("window.alert = function(m) { console.log('ALERT:', m); };")

                # Wait for app and storage to be initialized
                for _ in range(30):
                    ready = await send_eval("document.readyState === 'complete' && !!window.storage && !!window.app && !!window.grammarClinicEngine")
                    if ready:
                        break
                    await asyncio.sleep(0.3)

                # 1. Check btn-plan-grammar-clinic is removed from DOM
                btn_exists = await send_eval("!!document.getElementById('btn-plan-grammar-clinic')")
                print("Test 1 - btn-plan-grammar-clinic removed from DOM:", btn_exists is False)
                assert btn_exists is False, "btn-plan-grammar-clinic should be removed from DOM"

                # 2. Register Unit 1 for today and check Today's Learning box
                today_str = await send_eval("window.storage.getTodayDateString()")
                # Clear existing words to have a clean slate
                await send_eval("window.storage.words = []; window.storage.saveWords();")
                await send_eval(f"window.storage.registerGrammarUnit(1, '{today_str}');")
                await send_eval("window.app.renderDashboard();")
                
                # Check rendered cards in today's learning box
                box_html = await send_eval("document.getElementById('dash-today-learning-container').innerHTML")
                print("DEBUG box_html:", box_html[:300] if box_html else "EMPTY")
                words_today = await send_eval(f"window.storage.getWordsByDate('{today_str}')")
                print("DEBUG words_today:", words_today)
                has_grammar_card = "오늘의 문법 클리닉" in box_html
                has_voca_card = "오늘의 단어장" in box_html
                print("Test 2 - Has '오늘의 문법 클리닉' card:", has_grammar_card)
                print("Test 2 - Does NOT have '오늘의 단어장' card:", not has_voca_card)
                assert has_grammar_card, "Today's learning box must have '오늘의 문법 클리닉' card"
                assert not has_voca_card, "Today's learning box must NOT treat grammar unit as '오늘의 단어장'"

                # 3. Test startGrammarUnitStudy(1)
                await send_eval("window.app.startGrammarUnitStudy(1)")
                await asyncio.sleep(0.3)
                
                # Check active tab is 'grammar' and modal-grammar-clinic is visible
                active_tab = await send_eval("document.getElementById('tab-grammar').classList.contains('hidden')")
                modal_hidden = await send_eval("document.getElementById('modal-grammar-clinic').classList.contains('hidden')")
                modal_title = await send_eval("document.getElementById('grammar-modal-title').textContent")
                fc_hidden = await send_eval("document.getElementById('tab-flashcards').classList.contains('hidden')")

                print("Test 3 - Active tab is grammar (hidden=False):", active_tab is False)
                print("Test 3 - Modal grammar clinic is open (hidden=False):", modal_hidden is False)
                print("Test 3 - Modal title is Unit 1:", "Unit 1" in modal_title)
                print("Test 3 - Flashcards tab remains hidden:", fc_hidden is True)

                assert active_tab is False, "Active tab must be grammar"
                assert modal_hidden is False, "Modal grammar clinic must be open"
                assert "Unit 1" in modal_title, f"Modal title should mention Unit 1, got {modal_title}"
                assert fc_hidden is True, "Flashcards tab must remain hidden"

                # 4. Test Flashcards loadDeck('today') does not load grammar unit
                await send_eval("window.flashcardEngine.loadDeck('today');")
                fc_deck_len = await send_eval("window.flashcardEngine.deck.length")
                fc_has_grammar = await send_eval("window.flashcardEngine.deck.some(w => w.isGrammarUnit)")
                print("Test 4 - Flashcard deck has no grammar units:", fc_has_grammar is False)
                assert fc_has_grammar is False, "Flashcard deck must not contain grammar units"

                # 5. Test Special Lecture Unit 101 in Today's Learning box
                await send_eval("window.grammarClinicEngine.closeClinicModal();")
                await send_eval(f"window.storage.registerGrammarUnit(101, '{today_str}');")
                await send_eval("window.app.renderDashboard();")
                box_html2 = await send_eval("document.getElementById('dash-today-learning-container').innerHTML")
                has_special_card = "SP-01. 품사 vs 문장 성분 구별법" in box_html2
                print("Test 5 - Special Lecture card rendered in today's box:", has_special_card)
                assert has_special_card, "Special Lecture unit should be rendered in today's learning box"

                # 6. Click Special unit study
                await send_eval("window.app.startGrammarUnitStudy(101)")
                await asyncio.sleep(0.3)
                modal_title2 = await send_eval("document.getElementById('grammar-modal-title').textContent")
                print("Test 6 - Special Unit modal open title:", modal_title2)
                assert "SP-01" in modal_title2, f"Special unit modal should open with SP-01, got {modal_title2}"

                print("\n>>> ALL TODAY LEARNING & PLANNER CLEANUP TESTS PASSED! <<<")

        asyncio.run(run_cdp())

    finally:
        try:
            proc.terminate()
            proc.wait(timeout=3)
        except Exception:
            pass
        server.shutdown()

if __name__ == '__main__':
    run_test()
