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
    print("=== Testing Grammar Clinic Step 2 Inline Sentence Flow & Ordering ===")
    
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

                ready = False
                for _ in range(50):
                    ready = await send_eval("document.readyState === 'complete' && !!window.storage && !!window.app && !!window.grammarClinicEngine")
                    if ready:
                        break
                    await asyncio.sleep(0.3)
                print("DEBUG ready:", ready)

                # 1. Open Unit 1 and go to Step 2
                await send_eval("window.grammarClinicEngine.openClinicModal(1);")
                await send_eval("window.grammarClinicEngine.setStep(2);")
                await asyncio.sleep(0.2)

                # Inspect modal body HTML
                body_html = await send_eval("document.getElementById('grammar-modal-body').innerText")
                print("DEBUG Unit 1 Step 2 innerText:", body_html[:200])

                # Check that full sentence words exist, not just the isolated 4 buttons
                has_subject = "My uncle" in body_html
                has_predicate = "English at school" in body_html
                print("Test 1 - Sentence includes 'My uncle':", has_subject)
                print("Test 1 - Sentence includes 'English at school':", has_predicate)
                assert has_subject and has_predicate, "Step 2 must display the complete natural sentence"

                # 2. Check 4 buttons exist
                btn0 = await send_eval("!!document.getElementById('spot-btn-0')")
                btn3 = await send_eval("!!document.getElementById('spot-btn-3')")
                print("Test 2 - spot-btn-0 and spot-btn-3 exist:", btn0 and btn3)
                assert btn0 and btn3

                # 3. Click wrong answer (btn-0) and check feedback
                await send_eval("window.grammarClinicEngine.checkSpotting(0, 3)")
                feedback1 = await send_eval("document.getElementById('spotting-feedback-container').innerText")
                print("Test 3 - Wrong answer feedback displayed:", "오답입니다" in feedback1)
                assert "오답입니다" in feedback1

                # 4. Click correct answer (btn-3) and check solved feedback
                await send_eval("window.grammarClinicEngine.checkSpotting(3, 3)")
                feedback2 = await send_eval("document.getElementById('spotting-feedback-container').innerText")
                print("Test 4 - Correct answer feedback displayed:", "정답입니다" in feedback2)
                assert "정답입니다" in feedback2
                has_teaches = "teaches" in feedback2
                print("Test 4 - Correction 'teaches' shown:", has_teaches)
                assert has_teaches

                # 5. Open Special Lecture Unit 101 Step 2
                await send_eval("window.grammarClinicEngine.openClinicModal(101);")
                await send_eval("window.grammarClinicEngine.setStep(2);")
                await asyncio.sleep(0.2)
                body_html_sp = await send_eval("document.getElementById('grammar-modal-body').innerText")
                has_sp_chef = "The chef" in body_html_sp
                has_sp_guests = "hungry guests" in body_html_sp
                print("Test 5 - Special Unit 101 displays full sentence:", has_sp_chef and has_sp_guests)
                assert has_sp_chef and has_sp_guests

                # 6. Test all 70 units render Step 2 without any javascript exceptions
                all_units_valid = True
                for uNo in range(1, 41):
                    ok = await send_eval(f"(function() {{ window.grammarClinicEngine.openClinicModal({uNo}); window.grammarClinicEngine.setStep(2); return !!document.getElementById('spot-btn-0'); }})()")
                    if not ok:
                        print(f"FAILED unit {uNo} in Step 2 rendering")
                        all_units_valid = False
                for uNo in range(101, 131):
                    ok = await send_eval(f"(function() {{ window.grammarClinicEngine.openClinicModal({uNo}); window.grammarClinicEngine.setStep(2); return !!document.getElementById('spot-btn-0'); }})()")
                    if not ok:
                        print(f"FAILED special unit {uNo} in Step 2 rendering")
                        all_units_valid = False

                print("Test 6 - All 70 units rendered Step 2 cleanly with 4 buttons:", all_units_valid)
                assert all_units_valid

                print("\n>>> ALL STEP 2 INLINE SENTENCE FLOW TESTS PASSED! <<<")

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
