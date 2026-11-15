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
    print("=== Testing 3 Spotting Drills & Step 2/Step 3 Alignment ===")
    
    server_dir = os.path.abspath(os.getcwd())
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        port = s.getsockname()[1]
        
    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=server_dir, **kwargs)
        def log_message(self, format, *args):
            pass

    class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
        daemon_threads = True

    httpd = ThreadingTCPServer(('127.0.0.1', port), Handler)
    http_thread = threading.Thread(target=httpd.serve_forever, daemon=True)
    http_thread.start()
    print(f"HTTP Server started on port {port}")

    chrome_paths = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        os.path.expanduser(r"~\AppData\Local\Google\Chrome\Application\chrome.exe")
    ]
    chrome_bin = next((p for p in chrome_paths if os.path.exists(p)), None)
    if not chrome_bin:
        print("Chrome binary not found!")
        sys.exit(1)

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('127.0.0.1', 0))
        cdp_port = s.getsockname()[1]

    user_data_dir = tempfile.mkdtemp()
    cmd = [
        chrome_bin,
        "--headless=new",
        f"--remote-debugging-port={cdp_port}",
        f"--user-data-dir={user_data_dir}",
        "--no-first-run",
        "--no-default-browser-check",
        "--disable-gpu",
        "--allow-file-access-from-files",
        f"http://127.0.0.1:{port}/index.html"
    ]
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    time.sleep(2)

    async def cdp_session():
        url = f"http://127.0.0.1:{cdp_port}/json"
        req = urllib.request.urlopen(url)
        tabs = json.loads(req.read().decode('utf-8'))
        page_tab = [t for t in tabs if t.get('type') == 'page'][0]
        ws_url = page_tab['webSocketDebuggerUrl']

        async with websockets.connect(ws_url, max_size=20*1024*1024) as ws:
            msg_id = 0
            async def send_eval(expr):
                nonlocal msg_id
                msg_id += 1
                payload = {
                    "id": msg_id,
                    "method": "Runtime.evaluate",
                    "params": {
                        "expression": expr,
                        "returnByValue": True,
                        "awaitPromise": True
                    }
                }
                await ws.send(json.dumps(payload))
                while True:
                    resp = json.loads(await ws.recv())
                    if resp.get("id") == msg_id:
                        res = resp.get("result", {})
                        if "exceptionDetails" in res:
                            print(f"JS EXCEPTION in '{expr[:60]}...':", res["exceptionDetails"])
                        return res.get("result", {}).get("value")

            await send_eval("window.alert = function(m) { console.log('ALERT:', m); };")

            # Wait for ready
            for _ in range(40):
                ready = await send_eval("document.readyState === 'complete' && !!window.storage && !!window.app && !!window.grammarClinicEngine")
                if ready:
                    break
                await asyncio.sleep(0.3)

            # Test 1: Verify data bank and special lectures
            r1 = await send_eval("""
                (() => {
                    const bank = window.GRAMMAR_CLINIC_BANK || [];
                    let totalUnits = 0;
                    let validDrillUnits = 0;
                    let totalQuestions = 0;
                    let questionsWithConceptRef = 0;
                    
                    bank.forEach(lvl => {
                        (lvl.units || []).forEach(u => {
                            totalUnits++;
                            if (u.spottingDrills && u.spottingDrills.length === 3) {
                                validDrillUnits++;
                            }
                            (u.questions || []).forEach(q => {
                                totalQuestions++;
                                if (q.conceptRef && q.conceptRef.length > 5) {
                                    questionsWithConceptRef++;
                                }
                            });
                        });
                    });
                    
                    return {
                        totalLevels: bank.length,
                        totalUnits,
                        validDrillUnits,
                        totalQuestions,
                        questionsWithConceptRef
                    };
                })()
            """)
            print(f"Data Check: {r1}")
            assert r1.get("totalUnits") == 70, f"Expected 70 units, got {r1.get('totalUnits')}"
            assert r1.get("validDrillUnits") == 70, f"Expected 70 units with 3 drills, got {r1.get('validDrillUnits')}"
            assert r1.get("totalQuestions") == 350, f"Expected 350 questions, got {r1.get('totalQuestions')}"
            assert r1.get("questionsWithConceptRef") == 350, f"Expected 350 questions with conceptRef, got {r1.get('questionsWithConceptRef')}"
            print("Test 1 Passed: All 70 units have exactly 3 spotting drills and 5 concept-linked questions!")

            # Test 2: Open modal for lv1_u1 and test Step 2 3-Mission Flow
            r2 = await send_eval("""
                (() => {
                    window.grammarClinicEngine.openClinicModal('lv1_u1');
                    window.grammarClinicEngine.setStep(2);
                    
                    const unit = window.grammarClinicEngine.activeUnit;
                    const drills = unit.spottingDrills;
                    
                    // Check cards
                    const card0 = document.getElementById('drill-card-0');
                    const card1 = document.getElementById('drill-card-1');
                    const card2 = document.getElementById('drill-card-2');
                    
                    const progress = document.getElementById('spotting-progress-count').textContent.trim();
                    const nextBtn = document.getElementById('spotting-next-step-btn');
                    const isNextDisabled = nextBtn.classList.contains('cursor-not-allowed');
                    
                    return {
                        hasCards: !!(card0 && card1 && card2),
                        progress,
                        isNextDisabled,
                        wrongIdx0: drills[0].wrongIndex,
                        wrongIdx1: drills[1].wrongIndex,
                        wrongIdx2: drills[2].wrongIndex,
                        drill0Words: drills[0].underlined,
                        drill1Words: drills[1].underlined,
                        drill2Words: drills[2].underlined
                    };
                })()
            """)
            print(f"Step 2 Initial State: {r2}")
            assert r2.get("hasCards"), "Drill cards 0, 1, 2 must exist"
            assert r2.get("progress") == "0 / 3", f"Initial progress must be '0 / 3', got {r2.get('progress')}"
            assert r2.get("isNextDisabled"), "Next button must be disabled initially"
            print("Test 2 Passed: Step 2 renders 3 mission cards with 0/3 progress and disabled next button!")

            # Test 3: Click wrong answer on Mission 1, then correct answer
            r3 = await send_eval("""
                (() => {
                    const unit = window.grammarClinicEngine.activeUnit;
                    const wrongIdx = unit.spottingDrills[0].wrongIndex;
                    const wrongClickTarget = (wrongIdx === 0) ? 1 : 0;
                    
                    // Click incorrect option
                    window.grammarClinicEngine.checkSpotting(0, wrongClickTarget, wrongIdx);
                    const fb0 = document.getElementById('spotting-feedback-container').textContent;
                    const hasErrorMsg = fb0.includes('오답입니다');
                    
                    // Click correct option
                    window.grammarClinicEngine.checkSpotting(0, wrongIdx, wrongIdx);
                    const fb1 = document.getElementById('spotting-feedback-container').textContent;
                    const hasSuccessMsg = fb1.includes('정답입니다');
                    
                    const progressAfter1 = document.getElementById('spotting-progress-count').textContent.trim();
                    const nextBtn = document.getElementById('spotting-next-step-btn');
                    const isNextEnabled = !nextBtn.classList.contains('cursor-not-allowed');
                    
                    return {
                        hasErrorMsg,
                        hasSuccessMsg,
                        progressAfter1,
                        isNextEnabled
                    };
                })()
            """)
            print(f"Mission 1 Interaction: {r3}")
            assert r3.get("hasErrorMsg"), "Clicking wrong option must show error message"
            assert r3.get("hasSuccessMsg"), "Clicking correct option must show success message"
            assert r3.get("progressAfter1") == "1 / 3", f"Progress must be '1 / 3', got {r3.get('progressAfter1')}"
            assert r3.get("isNextEnabled"), "Next button should be enabled after 1 mission solved"
            print("Test 3 Passed: Mission 1 interactive checking works with instant diagnosis and feedback!")

            # Test 4: Solve Mission 2 and Mission 3
            r4 = await send_eval("""
                (() => {
                    const unit = window.grammarClinicEngine.activeUnit;
                    const w1 = unit.spottingDrills[1].wrongIndex;
                    const w2 = unit.spottingDrills[2].wrongIndex;
                    
                    window.grammarClinicEngine.checkSpotting(1, w1, w1);
                    const progressAfter2 = document.getElementById('spotting-progress-count').textContent.trim();
                    
                    window.grammarClinicEngine.checkSpotting(2, w2, w2);
                    const progressAfter3 = document.getElementById('spotting-progress-count').textContent.trim();
                    
                    const isFullySolved = window.grammarClinicEngine.spottingSolved;
                    
                    return {
                        progressAfter2,
                        progressAfter3,
                        isFullySolved
                    };
                })()
            """)
            print(f"Missions 2 & 3 Completion: {r4}")
            assert r4.get("progressAfter2") == "2 / 3"
            assert r4.get("progressAfter3") == "3 / 3"
            assert r4.get("isFullySolved") is True
            print("Test 4 Passed: All 3 missions solved successfully (3 / 3)!")

            # Test 5: Proceed to Step 3 and verify 5 practice questions
            r5 = await send_eval("""
                (() => {
                    window.grammarClinicEngine.setStep(3);
                    const step3Header = document.querySelector('#grammar-modal-body h4').textContent;
                    
                    // Count quiz questions rendered
                    const qOptions = document.querySelectorAll('button[onclick*=\"selectQuizOption\"]');
                    
                    return {
                        step3Header,
                        optionButtonCount: qOptions.length,
                        activeStep: window.grammarClinicEngine.activeStep
                    };
                })()
            """)
            print(f"Step 3 Verification: {r5}")
            assert r5.get("activeStep") == 3
            assert "단원 실전 5제 테스트" in r5.get("step3Header")
            assert r5.get("optionButtonCount") == 25, f"Expected 5 questions * 5 options = 25 buttons, got {r5.get('optionButtonCount')}"
            print("Test 5 Passed: Seamlessly transitioned to Step 3 practice quiz (5 questions, 25 options)!")

            # Test 6: Verify a Special Lecture unit (e.g. sp_csat_u1)
            r6 = await send_eval("""
                (() => {
                    window.grammarClinicEngine.openClinicModal('sp_csat_u1');
                    window.grammarClinicEngine.setStep(2);
                    
                    const card0 = document.getElementById('drill-card-0');
                    const card1 = document.getElementById('drill-card-1');
                    const card2 = document.getElementById('drill-card-2');
                    const progress = document.getElementById('spotting-progress-count').textContent.trim();
                    
                    return {
                        unitId: window.grammarClinicEngine.activeUnit.unitId,
                        unitTitle: window.grammarClinicEngine.activeUnit.title,
                        cardsPresent: !!(card0 && card1 && card2),
                        progress
                    };
                })()
            """)
            print(f"Special Lecture Unit Check: {r6}")
            assert r6.get("unitId") == "sp_csat_u1"
            assert r6.get("cardsPresent") is True
            assert r6.get("progress") == "0 / 3"
            print("Test 6 Passed: Special lecture unit SP-17 successfully renders all 3 spotting drills!")

            print("\n>>> ALL 6 TESTS FOR 3 SPOTTING DRILLS PASSED 100%! <<<")

    try:
        asyncio.run(cdp_session())
    finally:
        try:
            proc.terminate()
            proc.wait(timeout=3)
        except Exception:
            pass
        httpd.shutdown()

if __name__ == "__main__":
    run_test()
