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
import asyncio
import websockets

def run_test():
    print("=== Testing Separate Unit Numbering Per Course/Level ===")
    
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

        async def run_cdp():
            async with websockets.connect(ws_url, max_size=10*1024*1024) as ws:
                msg_id = 0
                async def send_eval(expr):
                    nonlocal msg_id
                    msg_id += 1
                    msg = {"id": msg_id, "method": "Runtime.evaluate", "params": {"expression": expr, "returnByValue": True, "awaitPromise": True}}
                    await ws.send(json.dumps(msg))
                    while True:
                        resp = json.loads(await ws.recv())
                        if resp.get('id') == msg_id:
                            res = resp.get('result', {})
                            if 'exceptionDetails' in res:
                                print(f"JS EXCEPTION in '{expr}':", res['exceptionDetails'])
                            return res.get('result', {}).get('value')

                await send_eval("window.alert = function(m) { console.log('ALERT:', m); };")

                for _ in range(30):
                    ready = await send_eval("document.readyState === 'complete' && !!window.storage && !!window.app && !!window.grammarClinicEngine")
                    if ready:
                        break
                    await asyncio.sleep(0.3)

                # Test 1: Check unitNo in bank for all levels
                levels_info = await send_eval("""
                    (window.GRAMMAR_CLINIC_BANK || []).map(lvl => ({
                        code: lvl.levelCode,
                        name: lvl.levelName,
                        unitNos: lvl.units.map(u => u.unitNo),
                        firstUnitTitle: lvl.units[0].title
                    }))
                """)
                print("Test 1 - Levels unitNos:")
                for li in levels_info:
                    print(f"  {li['code']} ({li['name']}): {li['unitNos']} [First: {li['firstUnitTitle']}]")
                    assert li['unitNos'][0] == 1, f"Level {li['code']} does not start at Unit 1!"
                    assert li['unitNos'] == list(range(1, len(li['unitNos']) + 1)), f"Level {li['code']} units are not sequential 1..N"

                # Specifically verify Middle School 2 (lv2) starts at Unit 1
                lv2 = [l for l in levels_info if l['code'] == 'lv2'][0]
                assert lv2['unitNos'] == [1, 2, 3, 4, 5, 6, 7, 8], f"Expected lv2 to be [1..8], got {lv2['unitNos']}"
                assert "to부정사" in lv2['firstUnitTitle'], f"Expected lv2 Unit 1 to be to부정사, got {lv2['firstUnitTitle']}"
                print("Test 1 Passed: Every level starts from Unit 1. Middle School 2 is Unit 1..8!")

                # Test 2: Switch to lv2 tab in UI and inspect rendered cards
                await send_eval("window.app.switchTab('grammar');")
                await send_eval("window.grammarClinicEngine.switchLevel('lv2');")
                await asyncio.sleep(0.3)

                cards_text = await send_eval("document.getElementById('grammar-unit-card-grid').innerText")
                print("DEBUG lv2 cards text snippet:\n", cards_text[:300])
                assert "Unit 1" in cards_text, "lv2 must render 'Unit 1'"
                assert "to부정사" in cards_text, "lv2 must render 'to부정사' under Unit 1"
                assert "Unit 9" not in cards_text, "lv2 must NEVER render 'Unit 9'!"
                print("Test 2 Passed: lv2 UI cleanly displays Unit 1..8 and never Unit 9!")

                # Test 3: Open lv2 Unit 1 modal
                await send_eval("window.grammarClinicEngine.openClinicModal('lv2_u1');")
                await asyncio.sleep(0.2)
                modal_title = await send_eval("document.getElementById('grammar-modal-title').innerText")
                print("DEBUG Modal Title for lv2 Unit 1:", modal_title)
                assert "Unit 1" in modal_title, f"Expected 'Unit 1' in modal title, got {modal_title}"
                assert "to부정사" in modal_title, f"Expected 'to부정사' in modal title, got {modal_title}"
                assert "중2" in modal_title or "Lv.2" in modal_title, f"Expected Level badge in modal title, got {modal_title}"
                print("Test 3 Passed: Modal title shows [Lv.2 중2 문법] Unit 1. to부정사...")

                # Test 4: Backward compatibility - calling openClinicModal(9) (legacy Unit 9)
                await send_eval("window.grammarClinicEngine.closeClinicModal();")
                await send_eval("window.grammarClinicEngine.openClinicModal(9);")
                await asyncio.sleep(0.2)
                modal_title_9 = await send_eval("document.getElementById('grammar-modal-title').innerText")
                print("DEBUG Modal Title for legacy 9:", modal_title_9)
                assert "Unit 1" in modal_title_9 and "to부정사" in modal_title_9
                print("Test 4 Passed: Backward compatibility legacyUnitNo: 9 resolves to lv2 Unit 1!")

                # Test 5: Register both lv1 Unit 1 and lv2 Unit 1 in planner without collision
                await send_eval("window.grammarClinicEngine.closeClinicModal();")
                await send_eval("window.storage.words = window.storage.words.filter(w => !w.isGrammarUnit);")
                today_str = await send_eval("window.storage.getTodayDateString()")
                
                # Register lv1 Unit 1
                res1 = await send_eval(f"window.storage.registerGrammarUnit('lv1_u1', '{today_str}');")
                print("Registered lv1:", res1)
                
                # Register lv2 Unit 1
                res2 = await send_eval(f"window.storage.registerGrammarUnit('lv2_u1', '{today_str}');")
                print("Registered lv2:", res2)

                grammar_tasks = await send_eval("window.storage.words.filter(w => w.isGrammarUnit).map(w => ({ id: w.id, word: w.word, level: w.grammarLevelCode, unitNo: w.grammarUnitNo }))")
                print("Scheduled grammar tasks in storage:", grammar_tasks)
                assert len(grammar_tasks) == 2, f"Expected 2 separate tasks, got {len(grammar_tasks)}"
                assert any(t['level'] == 'lv1' and t['unitNo'] == 1 for t in grammar_tasks)
                assert any(t['level'] == 'lv2' and t['unitNo'] == 1 for t in grammar_tasks)
                print("Test 5 Passed: lv1 Unit 1 and lv2 Unit 1 coexist without collision in planner!")

                # Test 6: Check Today's learning rendering
                await send_eval("window.app.switchTab('dashboard');")
                await send_eval("if (window.app.renderTodayLearningBox) window.app.renderTodayLearningBox();")
                await asyncio.sleep(0.3)
                dash_text = await send_eval("document.getElementById('dash-today-learning-container')?.innerText || ''")
                print("DEBUG Today's learning briefing snippet:\n", dash_text[:400])
                assert "오늘의 문법 클리닉" in dash_text
                assert "to부정사" in dash_text
                print("Test 6 Passed: Today's learning briefing displays separate level & unit clearly!")

        asyncio.run(run_cdp())
        print("\n>>> ALL SEPARATE UNIT NUMBERING TESTS PASSED PERFECTLY! <<<")

    finally:
        try:
            proc.kill()
        except:
            pass

if __name__ == '__main__':
    run_test()
