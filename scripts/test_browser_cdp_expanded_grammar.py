# -*- coding: utf-8 -*-
"""
Quick Browser CDP test for Grammar Clinic
"""
import os
import sys
import time
import json
import socket
import urllib.request
import subprocess
import http.server
import socketserver
import threading
import websockets
import asyncio

def find_chrome():
    candidates = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Users\odhch\AppData\Local\Google\Chrome\Application\chrome.exe"
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    raise FileNotFoundError("Chrome not found")

def main():
    chrome_path = find_chrome()
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        port = s.getsockname()[1]
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        debug_port = s.getsockname()[1]

    server_dir = os.path.abspath(os.getcwd())
    class CustomHandler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=server_dir, **kwargs)
        def log_message(self, format, *args):
            pass

    class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
        daemon_threads = True

    server = ThreadingTCPServer(("127.0.0.1", port), CustomHandler)
    server_thread = threading.Thread(target=server.serve_forever, daemon=True)
    server_thread.start()

    url = f"http://127.0.0.1:{port}/index.html"
    cmd = [
        chrome_path,
        "--headless=new",
        f"--remote-debugging-port={debug_port}",
        "--disable-gpu",
        "--no-sandbox",
        "--user-data-dir=" + os.path.join(os.environ.get('TEMP', '.'), f'chrome_test_{debug_port}'),
        url
    ]
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(3.0)

    try:
        tabs_url = f"http://127.0.0.1:{debug_port}/json"
        req = urllib.request.urlopen(tabs_url)
        tabs = json.loads(req.read().decode('utf-8'))
        print("Detected tabs:", [(t.get('type'), t.get('url')) for t in tabs])
        index_tabs = [t for t in tabs if t.get('type') == 'page' and 'index.html' in t.get('url', '')]
        page_tab = index_tabs[0] if index_tabs else [t for t in tabs if t.get('type') == 'page'][0]
        ws_url = page_tab['webSocketDebuggerUrl']

        async def run_test():
            async with websockets.connect(ws_url) as ws:
                msg_id = 0
                async def eval_js(code):
                    nonlocal msg_id
                    msg_id += 1
                    msg = {"id": msg_id, "method": "Runtime.evaluate", "params": {"expression": code, "returnByValue": True}}
                    await ws.send(json.dumps(msg))
                    while True:
                        resp = json.loads(await ws.recv())
                        if resp.get('id') == msg_id:
                            if 'exceptionDetails' in resp.get('result', {}):
                                print(f"CDP JS ERROR for '{code}':", resp['result']['exceptionDetails'])
                            return resp.get('result', {}).get('result', {}).get('value')

                # Wait for page ready
                for _ in range(40):
                    val = await eval_js("document.readyState === 'complete' && !!window.GRAMMAR_CLINIC_BANK && !!window.grammarClinicEngine")
                    if val is True:
                        break
                    await asyncio.sleep(0.3)

                bank_len = await eval_js("window.GRAMMAR_CLINIC_BANK.length")
                print(f"[CDP] window.GRAMMAR_CLINIC_BANK.length: {bank_len}")

                # Switch to grammar tab
                await eval_js("window.app.switchTab('grammar')")
                await asyncio.sleep(0.5)

                # Check unit cards
                cards = await eval_js("document.querySelectorAll('#grammar-unit-card-grid > div').length")
                print(f"[CDP] Unit cards rendered for current level: {cards}")

                # Check active level badge
                badge = await eval_js("window.grammarClinicEngine.currentLevelObj.badge")
                print(f"[CDP] Active level badge: {badge}")

                # Switch to Lv.4 (고교 내신)
                await eval_js("window.grammarClinicEngine.switchLevel('lv4')")
                await asyncio.sleep(0.5)
                lv4_cards = await eval_js("document.querySelectorAll('#grammar-unit-card-grid > div').length")
                print(f"[CDP] Lv.4 unit cards count: {lv4_cards}")

                # Switch to Lv.5 (수능 킬러)
                await eval_js("window.grammarClinicEngine.switchLevel('lv5')")
                await asyncio.sleep(0.5)
                lv5_cards = await eval_js("document.querySelectorAll('#grammar-unit-card-grid > div').length")
                print(f"[CDP] Lv.5 unit cards count: {lv5_cards}")

                # Switch to Special Track
                await eval_js("window.grammarClinicEngine.switchTrack('special')")
                await asyncio.sleep(0.5)
                sp_cards = await eval_js("document.querySelectorAll('#grammar-unit-card-grid > div').length")
                print(f"[CDP] Special Track unit cards count: {sp_cards}")

                # Open Unit 20 of Lv.5 modal test
                await eval_js("window.grammarClinicEngine.switchTrack('regular')")
                await eval_js("window.grammarClinicEngine.switchLevel('lv5')")
                await eval_js("window.grammarClinicEngine.openClinicModal(20)")
                await asyncio.sleep(0.5)

                modal_title = await eval_js("document.getElementById('grammar-modal-title').textContent")
                print(f"[CDP] Opened Modal for Unit 20 Title: {modal_title}")

                step1_fc_count = await eval_js("window.grammarClinicEngine.activeUnit.formulaCards.length")
                print(f"[CDP] Unit 20 Formula cards: {step1_fc_count}")

                await eval_js("window.grammarClinicEngine.setStep(2)")
                await asyncio.sleep(0.3)
                drills_count = await eval_js("window.grammarClinicEngine.activeUnit.spottingDrills.length")
                print(f"[CDP] Unit 20 Spotting drills: {drills_count}")

                await eval_js("window.grammarClinicEngine.setStep(3)")
                await asyncio.sleep(0.3)
                q_count = await eval_js("window.grammarClinicEngine.activeUnit.questions.length")
                print(f"[CDP] Unit 20 Quiz questions: {q_count}")

                assert bank_len == 10, f"Expected 10 bank categories, got {bank_len}"
                assert cards == 20, f"Expected 20 initial cards, got {cards}"
                assert lv4_cards == 20, f"Expected 20 lv4 cards, got {lv4_cards}"
                assert lv5_cards == 20, f"Expected 20 lv5 cards, got {lv5_cards}"
                assert sp_cards == 10, f"Expected 10 sp cards, got {sp_cards}"
                assert step1_fc_count == 2
                assert drills_count == 3
                assert q_count == 5

                print("\n>>> ALL CDP BROWSER TESTS PASSED FLAWLESSLY! <<<")

        asyncio.run(run_test())

    finally:
        proc.terminate()
        server.shutdown()

if __name__ == '__main__':
    main()
