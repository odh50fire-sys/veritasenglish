import os
import sys
import json
import time
import subprocess
import urllib.request
import http.server
import socketserver
import threading

def run_nav_test():
    print("=== Testing Header Navigation & Dashboard Logo Redirection ===")
    port = 8766
    server_dir = os.path.abspath(os.getcwd())

    class CustomHandler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=server_dir, **kwargs)
        def log_message(self, format, *args):
            pass

    server = socketserver.TCPServer(("127.0.0.1", port), CustomHandler)
    server_thread = threading.Thread(target=server.serve_forever)
    server_thread.daemon = True
    server_thread.start()

    chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    debug_port = 9223

    chrome_cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        f"--remote-debugging-port={debug_port}",
        f"http://127.0.0.1:{port}/index.html"
    ]

    proc = subprocess.Popen(chrome_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(2.5)

    try:
        req = urllib.request.urlopen(f"http://127.0.0.1:{debug_port}/json")
        tabs = json.loads(req.read().decode('utf-8'))
        ws_url = tabs[0].get('webSocketDebuggerUrl')
        import websocket

        ws = websocket.create_connection(ws_url)

        def eval_js(expression):
            msg_id = int(time.time() * 1000) % 1000000
            msg = json.dumps({
                "id": msg_id,
                "method": "Runtime.evaluate",
                "params": {"expression": expression, "returnByValue": True}
            })
            ws.send(msg)
            while True:
                resp = json.loads(ws.recv())
                if resp.get("id") == msg_id:
                    result = resp.get("result", {}).get("result", {})
                    if "value" in result:
                        return result["value"]
                    return resp.get("result", {})

        # 1. Check desktop nav items and order
        expected_tabs = ['ocr', 'flashcards', 'quiz', 'review', 'grammar', 'reading', 'expressions', 'dictionary', 'planner']
        desktop_tabs = eval_js("Array.from(document.querySelectorAll('nav .nav-tab-btn')).map(b => b.dataset.tab)")
        desktop_texts = eval_js("Array.from(document.querySelectorAll('nav .nav-tab-btn')).map(b => b.textContent.trim())")
        print(f"Desktop tabs found: {desktop_tabs}")
        print(f"Desktop tab texts: {desktop_texts}")
        assert desktop_tabs == expected_tabs, f"Expected tabs {expected_tabs}, but got {desktop_tabs}"
        assert "대시보드" not in desktop_texts, "Dashboard button should not be present in nav"
        assert "단어장 등록" in desktop_texts[0], f"Expected '단어장 등록', got {desktop_texts[0]}"

        # 2. Check mobile nav items and order
        mobile_tabs = eval_js("Array.from(document.querySelectorAll('header > div.md\\\\:hidden .nav-tab-btn')).map(b => b.dataset.tab)")
        mobile_texts = eval_js("Array.from(document.querySelectorAll('header > div.md\\\\:hidden .nav-tab-btn')).map(b => b.textContent.trim())")
        print(f"Mobile tabs found: {mobile_tabs}")
        print(f"Mobile tab texts: {mobile_texts}")
        assert mobile_tabs == expected_tabs, f"Expected mobile tabs {expected_tabs}, but got {mobile_tabs}"
        assert not any("대시보드" in t for t in mobile_texts), "Dashboard button should not be present in mobile nav"
        assert "단어장등록" in mobile_texts[0], f"Expected '단어장등록', got {mobile_texts[0]}"

        # 3. Check Logo click redirects to dashboard
        # Switch to reading first
        eval_js("window.app.switchTab('reading')")
        time.sleep(0.3)
        reading_visible = not eval_js("document.getElementById('tab-reading').classList.contains('hidden')")
        dash_hidden = eval_js("document.getElementById('tab-dashboard').classList.contains('hidden')")
        assert reading_visible and dash_hidden, "Reading tab should be active"

        # Click the logo
        eval_js("document.querySelector('header div[data-goto-tab=\"dashboard\"]').click()")
        time.sleep(0.3)
        dash_visible = not eval_js("document.getElementById('tab-dashboard').classList.contains('hidden')")
        reading_hidden = eval_js("document.getElementById('tab-reading').classList.contains('hidden')")
        print(f"After logo click - dashboard visible: {dash_visible}, reading hidden: {reading_hidden}")
        assert dash_visible and reading_hidden, "Dashboard must be visible after clicking logo!"

        ws.close()
        print("\n>>> ALL NAVBAR AND DASHBOARD LOGO REDIRECTION TESTS PASSED! <<<")

    finally:
        proc.terminate()
        server.shutdown()

if __name__ == '__main__':
    run_nav_test()
