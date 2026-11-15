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
    print("=== Testing Deep Grammar Explanations & Step 3 Quiz Alignment ===")
    
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

                # 1. Open Unit 1 Step 1 and inspect rich concept elements
                await send_eval("window.grammarClinicEngine.openClinicModal(1);")
                await send_eval("window.grammarClinicEngine.setStep(1);")
                await asyncio.sleep(0.2)

                body_text = await send_eval("document.getElementById('grammar-modal-body').innerText")
                print("DEBUG Step 1 innerText snippet:\n", body_text[:300])

                # Check for 3 Key Takeaways
                has_takeaways = "오늘 반드시 잡아야 할 3대 절대 법칙" in body_text
                print("Test 1 - Has 3 Key Takeaways banner:", has_takeaways)
                assert has_takeaways

                # Check for Concept Principle (개념 원리 이해하기)
                has_principle = "개념 원리 이해하기" in body_text
                print("Test 2 - Has Concept Principle section:", has_principle)
                assert has_principle

                # Check for Inflection/Rule Table (형태 변화 및 세부 적용 규칙)
                has_rules = "형태 변화 및 세부 적용 규칙" in body_text
                print("Test 3 - Has Inflection/Rule Table:", has_rules)
                assert has_rules

                # Check for Representative Examples & Translations (대표 실전 예문 & 해석)
                has_examples = "대표 실전 예문 & 해석" in body_text
                has_korean_trans = "그녀는 어제 매우 행복했지만" in body_text
                print("Test 4 - Has Examples & Korean Translations:", has_examples and has_korean_trans)
                assert has_examples and has_korean_trans

                # Check for O vs X Comparison Clinic (시험 단골 ⭕ vs ❌ 실전 비교 클리닉)
                has_ox = "시험 단골 ⭕ vs ❌ 실전 비교 클리닉" in body_text
                print("Test 5 - Has O/X Comparison Clinic:", has_ox)
                assert has_ox

                # Check for Exam Trap Alert
                has_trap = "내신·수능 출제자의 함정" in body_text
                print("Test 6 - Has Exam Trap Alert:", has_trap)
                assert has_trap

                # 2. Check Step 3 Quiz Alignment
                await send_eval("window.grammarClinicEngine.setStep(3);")
                await asyncio.sleep(0.2)
                quiz_body_text = await send_eval("document.getElementById('grammar-modal-body').innerText")
                print("DEBUG Step 3 innerText snippet:\n", quiz_body_text[:300])

                # Check that questions have conceptRef badge
                has_concept_ref = "출제 연계" in quiz_body_text
                print("Test 7 - Step 3 Quiz questions display conceptRef badge:", has_concept_ref)
                assert has_concept_ref

                # 3. Test Special Course Unit 101 Step 1 and Step 3
                await send_eval("window.grammarClinicEngine.openClinicModal(101);")
                await send_eval("window.grammarClinicEngine.setStep(1);")
                await asyncio.sleep(0.2)
                sp_body_text = await send_eval("document.getElementById('grammar-modal-body').innerText")
                has_sp_takeaway = "오늘 반드시 잡아야 할 3대 절대 법칙" in sp_body_text
                has_sp_principle = "개념 원리 이해하기" in sp_body_text
                print("Test 8 - Special Unit 101 has deep concept explanations:", has_sp_takeaway and has_sp_principle)
                assert has_sp_takeaway and has_sp_principle

                # 4. Check Unit 101 Step 3 Quiz
                await send_eval("window.grammarClinicEngine.setStep(3);")
                await asyncio.sleep(0.2)
                sp_quiz_text = await send_eval("document.getElementById('grammar-modal-body').innerText")
                has_sp_ref = "출제 연계" in sp_quiz_text
                print("Test 9 - Special Unit 101 Step 3 has conceptRef badge:", has_sp_ref)
                assert has_sp_ref

                print("\n>>> ALL DEEP GRAMMAR CONCEPT & QUIZ ALIGNMENT TESTS PASSED! <<<")

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
