import os
import sys
import json
import time
import subprocess
import urllib.request
import http.server
import socketserver
import threading

def test_data_integrity():
    print("=== [1] Verifying data/grammar_clinic_data.js Integrity ===")
    with open('data/grammar_clinic_data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    start = content.find('window.GRAMMAR_CLINIC_BANK = [')
    sub = content[content.find('[', start):]
    end = sub.find(';\nwindow.GRAMMAR_SPECIAL_LECTURES')
    if end == -1:
        end = sub.rfind('];') + 1
    levels = json.loads(sub[:end])

    regular_levels = [l for l in levels if not l.get('isSpecial')]
    special_courses = [l for l in levels if l.get('isSpecial')]

    assert len(regular_levels) == 5, f"Expected 5 regular levels, got {len(regular_levels)}"
    assert len(special_courses) == 4, f"Expected 4 special courses, got {len(special_courses)}"
    assert len(levels) == 9, f"Expected 9 total categories, got {len(levels)}"

    total_units = 0
    total_questions = 0
    total_drills = 0

    for lvl in levels:
        units = lvl['units']
        assert len(units) in [6, 8], f"Level {lvl['levelCode']} has {len(units)} units, expected 6 or 8"
        total_units += len(units)
        for u in units:
            assert 'unitNo' in u and 'title' in u and 'part' in u
            assert len(u['formulaCards']) >= 2, f"Unit {u['unitNo']} missing formula cards"
            assert len(u['spottingDrills']) >= 1, f"Unit {u['unitNo']} missing spotting drills"
            drill = u['spottingDrills'][0]
            assert len(drill['underlined']) == 4
            assert 0 <= drill['wrongIndex'] <= 3
            assert drill['correction'] and drill['explanation']

            questions = u['questions']
            assert len(questions) == 5, f"Unit {u['unitNo']} has {len(questions)} questions, expected 5"
            total_questions += len(questions)
            for q in questions:
                assert 'q' in q and len(q['options']) == 5
                assert 0 <= q['ans'] <= 4
                assert 'exp' in q and len(q['exp']) > 5
        total_drills += sum(len(u['spottingDrills']) for u in units)

    assert total_units == 70, f"Expected 70 total units, got {total_units}"
    assert total_drills == 70, f"Expected 70 spotting drills, got {total_drills}"
    assert total_questions == 350, f"Expected 350 practice questions, got {total_questions}"

    print(f"Data verified successfully: {len(regular_levels)} Regular Levels, {len(special_courses)} Special Courses, {total_units} Units, {total_drills} Spotting Drills, {total_questions} Practice Questions.")

def run_headless_chrome_test():
    print("\n=== [2] Running Headless Chrome E2E Verification ===")
    import socket
    import tempfile
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
        # Check debugging JSON endpoint
        req = urllib.request.urlopen(f"http://127.0.0.1:{debug_port}/json")
        tabs = json.loads(req.read().decode('utf-8'))
        
        target_tab = None
        for t in tabs:
            if 'index.html' in t.get('url', ''):
                target_tab = t
                break
        if not target_tab:
            target_tab = tabs[0]

        ws_url = target_tab.get('webSocketDebuggerUrl')
        print(f"Chrome headless connected to tab: {target_tab.get('title', '')} ({target_tab.get('url', '')})")

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
                    if "exceptionDetails" in resp.get("result", {}):
                        print("EXCEPTION in", expression, resp.get("result", {}).get("exceptionDetails"))
                    if "value" in result:
                        return result["value"]
                    return resp.get("result", {})

        # Prevent modal alert from hanging
        eval_js("window.alert = function(msg) { console.log('ALERT:', msg); }")

        # Navigate if needed
        cur_url = eval_js("window.location.href")
        if 'index.html' not in cur_url:
            eval_js(f"window.location.href = 'http://127.0.0.1:{port}/index.html'")
            time.sleep(2.0)

        eval_js("window.alert = function(msg) { console.log('ALERT:', msg); }")

        # Wait for page to fully load
        for _ in range(30):
            ready = eval_js("document.readyState === 'complete' && !!window.GRAMMAR_CLINIC_BANK && !!window.app && window.GRAMMAR_CLINIC_BANK.length === 9")
            if ready is True:
                break
            time.sleep(0.3)
        print("DEBUG ready status:", ready)

        # Test 1: Data bank loaded
        bank_len = eval_js("window.GRAMMAR_CLINIC_BANK ? window.GRAMMAR_CLINIC_BANK.length : 0")
        print(f"Test 1 - GRAMMAR_CLINIC_BANK length: {bank_len}")
        assert bank_len == 9, f"Expected 9 categories (5 regular + 4 special), got {bank_len}"

        # Test 2: Switch to grammar tab
        eval_js("window.app.switchTab('grammar')")
        time.sleep(0.5)

        tab_active = eval_js("document.getElementById('tab-grammar').classList.contains('hidden')")
        print(f"Test 2 - tab-grammar is hidden: {tab_active} (Expected False)")
        assert tab_active == False, "tab-grammar should not be hidden"

        # Test 3: Check unit cards rendered
        unit_cards_count = eval_js("document.querySelectorAll('#grammar-unit-card-grid > div').length")
        print(f"Test 3 - Unit cards rendered count: {unit_cards_count}")
        assert unit_cards_count == 8, f"Expected 8 unit cards for current level, got {unit_cards_count}"

        # Test 4: Open Unit 1 modal
        eval_js("window.grammarClinicEngine.openClinicModal(1)")
        time.sleep(0.3)
        modal_hidden = eval_js("document.getElementById('modal-grammar-clinic').classList.contains('hidden')")
        print(f"Test 4 - modal-grammar-clinic hidden: {modal_hidden} (Expected False)")
        assert modal_hidden == False, "Clinic modal should be open"

        # Test 5: Verify Step 1 formulas
        fc_count = eval_js("window.grammarClinicEngine.activeUnit.formulaCards.length")
        print(f"Test 5 - Unit 1 Formula cards count: {fc_count}")
        assert fc_count >= 2

        # Test 6: Advance to Step 2 (Error Spotting)
        eval_js("window.grammarClinicEngine.setStep(2)")
        step2_active = eval_js("window.grammarClinicEngine.activeStep")
        print(f"Test 6 - Active step: {step2_active}")
        assert step2_active == 2

        # Test 7: Spotting drill check wrong answer then right answer
        drill_wrong_idx = eval_js("window.grammarClinicEngine.activeUnit.spottingDrills[0].wrongIndex")
        # Click wrong option first (not the error index)
        wrong_click_idx = (drill_wrong_idx + 1) % 4
        eval_js(f"window.grammarClinicEngine.checkSpotting({wrong_click_idx}, {drill_wrong_idx})")
        solved_first = eval_js("window.grammarClinicEngine.spottingSolved")
        assert solved_first == False, "Incorrect spot should not solve drill"

        # Click right error option
        eval_js(f"window.grammarClinicEngine.checkSpotting({drill_wrong_idx}, {drill_wrong_idx})")
        solved_second = eval_js("window.grammarClinicEngine.spottingSolved")
        print(f"Test 7 - Spotting solved after correct click: {solved_second}")
        assert solved_second == True, "Correct spot must solve drill"

        # Test 8: Advance to Step 3 (Practice Quiz)
        eval_js("window.grammarClinicEngine.setStep(3)")
        step3_active = eval_js("window.grammarClinicEngine.activeStep")
        print(f"Test 8 - Active step: {step3_active}")
        assert step3_active == 3

        # Test 9: Select 5 answers (4 correct, 1 intentional wrong to test wrong note recording)
        unit1_q_answers = eval_js("[window.grammarClinicEngine.activeUnit.questions[0].ans, window.grammarClinicEngine.activeUnit.questions[1].ans, window.grammarClinicEngine.activeUnit.questions[2].ans, window.grammarClinicEngine.activeUnit.questions[3].ans, window.grammarClinicEngine.activeUnit.questions[4].ans]")
        print(f"Correct answers for Unit 1: {unit1_q_answers}")
        
        # Select answers: Q0=correct, Q1=correct, Q2=correct, Q3=correct, Q4=intentionally wrong
        eval_js(f"window.grammarClinicEngine.selectQuizOption(0, {unit1_q_answers[0]})")
        eval_js(f"window.grammarClinicEngine.selectQuizOption(1, {unit1_q_answers[1]})")
        eval_js(f"window.grammarClinicEngine.selectQuizOption(2, {unit1_q_answers[2]})")
        eval_js(f"window.grammarClinicEngine.selectQuizOption(3, {unit1_q_answers[3]})")
        eval_js(f"window.grammarClinicEngine.selectQuizOption(4, {(unit1_q_answers[4] + 1) % 5})")

        eval_js("window.grammarClinicEngine.submitQuiz()")
        time.sleep(0.3)

        score = eval_js("window.grammarClinicEngine.quizScore")
        print(f"Test 9 - Quiz submitted score: {score} / 5 (Expected 4)")
        assert score == 4, f"Expected score 4, got {score}"

        # Test 10: Verify progress saved in localStorage
        prog = eval_js("window.grammarClinicEngine.getUnitProgress(1)")
        print(f"Test 10 - Unit 1 progress in localStorage: {prog}")
        assert prog and prog.get('completed') == True
        assert prog.get('score') == 4

        # Test 11: Verify wrong answer auto-saved to window.storage
        wrong_items = eval_js("window.storage.wrongAnswers.filter(w => w.sourceType === 'grammar')")
        print(f"Test 11 - Grammar wrong items recorded: {len(wrong_items)}")
        assert len(wrong_items) >= 1, "Grammar wrong answer must be recorded in storage"

        # Test 12: Search functionality across 40 units
        eval_js("window.grammarClinicEngine.closeClinicModal()")
        eval_js("window.grammarClinicEngine.handleSearch('관계대명사')")
        search_card_count = eval_js("document.querySelectorAll('#grammar-unit-card-grid > div').length")
        print(f"Test 12 - Search '관계대명사' results count: {search_card_count}")
        assert search_card_count >= 1, "Search for '관계대명사' should find matching units"

        # Clear search
        eval_js("window.grammarClinicEngine.handleSearch('')")

        # Test 13: Track switching to Special Lectures
        eval_js("window.grammarClinicEngine.switchTrack('special')")
        time.sleep(0.3)
        track = eval_js("window.grammarClinicEngine.currentTrack")
        print(f"Test 13 - Switched track: {track} (Expected 'special')")
        assert track == 'special'
        sp_unit_cards = eval_js("document.querySelectorAll('#grammar-unit-card-grid > div').length")
        print(f"Test 13 - Special course Unit cards count: {sp_unit_cards}")
        assert sp_unit_cards == 8, f"Expected 8 units for sp_terms, got {sp_unit_cards}"

        # Test 14: Open Special Unit 101 modal
        eval_js("window.grammarClinicEngine.openClinicModal(101)")
        time.sleep(0.3)
        sp_modal_title = eval_js("document.getElementById('grammar-modal-title').textContent")
        print(f"Test 14 - Special unit modal title: {sp_modal_title}")
        assert "SP-01" in sp_modal_title
        eval_js("window.grammarClinicEngine.closeClinicModal()")

        # Test 15: Register Special Unit 101 to planner via storage
        res_sp = eval_js("window.storage.registerGrammarUnit(101, '2026-11-20')")
        print(f"Test 15 - Register Special Unit 101: {res_sp}")
        assert res_sp and res_sp.get('unitNo') == 101

        ws.close()
        print("\n>>> ALL 15 E2E VERIFICATION TESTS PASSED SUCCESSFULLY! <<<")

    finally:
        proc.terminate()
        server.shutdown()

if __name__ == '__main__':
    test_data_integrity()
    run_headless_chrome_test()
