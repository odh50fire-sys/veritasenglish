import os
import sys
import json
import time
import subprocess
import urllib.request
import http.server
import socketserver
import threading

import socket

def run_grammar_planner_test():
    print("=== Testing Grammar Clinic Planner Scheduling Integration ===")
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        port = s.getsockname()[1]
    server_dir = os.path.abspath(os.getcwd())

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

    import tempfile
    temp_dir = tempfile.mkdtemp()

    chrome_cmd = [
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        f"--user-data-dir={temp_dir}",
        f"--remote-debugging-port={debug_port}",
        f"http://127.0.0.1:{port}/index.html"
    ]

    proc = subprocess.Popen(chrome_cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(2.5)

    try:
        req = urllib.request.urlopen(f"http://127.0.0.1:{debug_port}/json")
        tabs = json.loads(req.read().decode('utf-8'))
        tab = next((t for t in tabs if t.get('type') == 'page' and 'index.html' in t.get('url', '')), tabs[0])
        ws_url = tab.get('webSocketDebuggerUrl')
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

        cur_url = eval_js("window.location.href")
        if 'index.html' not in str(cur_url):
            eval_js(f"window.location.href = 'http://127.0.0.1:{port}/index.html'")
            time.sleep(2.0)

        eval_js("window.alert = function(msg) { console.log('ALERT:', msg); }")

        for _ in range(30):
            ready = eval_js("document.readyState === 'complete' && !!window.storage && !!window.plannerEngine && !!window.app")
            if ready:
                break
            time.sleep(0.3)

        # Test 1: Register single grammar unit via storage
        res = eval_js("window.storage.registerGrammarUnit(1, '2026-11-15')")
        print(f"Test 1 - Register Unit 1 result: {res}")
        assert res and res.get('unitNo') == 1

        # Test 2: Switch to planner tab and check rendering
        eval_js("window.app.switchTab('planner')")
        time.sleep(0.4)
        eval_js("window.plannerEngine.selectedDateStr = '2026-11-15'; window.plannerEngine.render();")
        time.sleep(0.3)

        grammar_items_on_date = eval_js("(window.storage.words || []).filter(w => w.isGrammarUnit && w.planDate === '2026-11-15').length")
        print(f"Test 2 - Grammar items on 2026-11-15: {grammar_items_on_date}")
        assert grammar_items_on_date == 1

        # Test 3: Check rendered task row in planner
        detail_html = eval_js("document.getElementById('planner-date-words-list').innerHTML")
        assert "Unit 1." in detail_html, "Unit 1 should be displayed in the planner list"
        assert "문법클리닉" in detail_html or "클리닉 학습하기" in detail_html

        # Test 4: Open schedule modal directly from GrammarClinicEngine
        eval_js("window.grammarClinicEngine.openScheduleModal(5)")
        time.sleep(0.3)
        modal_hidden = eval_js("document.getElementById('modal-grammar-schedule').classList.contains('hidden')")
        print(f"Test 4 - Schedule modal hidden: {modal_hidden} (Expected False)")
        assert modal_hidden == False

        # Test 5: Register Unit 5 for tomorrow
        eval_js("window.grammarClinicEngine.setQuickDate(1)")
        eval_js("window.grammarClinicEngine.executeScheduleRegistration()")
        time.sleep(0.3)
        unit5_registered = eval_js("(window.storage.words || []).some(w => w.isGrammarUnit && w.grammarUnitNo === 5)")
        print(f"Test 5 - Unit 5 registered: {unit5_registered}")
        assert unit5_registered == True

        # Test 6: Batch schedule Level 2 (8 units)
        eval_js("window.grammarClinicEngine.openLevelBatchScheduleModal('lv2')")
        time.sleep(0.2)
        batch_mode = eval_js("window.grammarClinicEngine.scheduleMode")
        print(f"Test 6 - Schedule mode is batch: {batch_mode == 'batch'}")
        assert batch_mode == 'batch'

        eval_js("window.grammarClinicEngine.setBatchScheduleDaysPreset('mwf')")
        eval_js("window.grammarClinicEngine.executeScheduleRegistration()")
        time.sleep(0.4)

        lv2_units_count = eval_js("(window.storage.words || []).filter(w => w.isGrammarUnit && w.grammarLevelCode === 'lv2').length")
        print(f"Test 6 - Lv.2 registered units count: {lv2_units_count} (Expected 8)")
        assert lv2_units_count == 8

        # Test 7: Active grammar banner in planner
        eval_js("window.app.switchTab('planner')")
        time.sleep(0.3)
        banner_hidden = eval_js("document.getElementById('planner-active-grammar-bar').classList.contains('hidden')")
        print(f"Test 7 - Active grammar banner hidden: {banner_hidden} (Expected False)")
        assert banner_hidden == False

        # Test 8: Delete all grammar units from planner
        eval_js("window.storage.deleteAllGrammarUnits()")
        eval_js("window.plannerEngine.render()")
        time.sleep(0.3)
        remaining_grammar = eval_js("(window.storage.words || []).filter(w => w.isGrammarUnit).length")
        print(f"Test 8 - Remaining grammar units after delete all: {remaining_grammar} (Expected 0)")
        assert remaining_grammar == 0

        banner_after_delete = eval_js("document.getElementById('planner-active-grammar-bar').classList.contains('hidden')")
        print(f"Test 8 - Banner hidden after delete: {banner_after_delete} (Expected True)")
        assert banner_after_delete == True

        ws.close()
        print("\n>>> ALL GRAMMAR CLINIC PLANNER INTEGRATION TESTS PASSED! <<<")

    finally:
        proc.terminate()
        server.shutdown()

if __name__ == '__main__':
    run_grammar_planner_test()
