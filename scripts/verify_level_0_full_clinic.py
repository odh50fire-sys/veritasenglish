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
    print("=== Testing Level 0: 초등 기초 품사 & 기본 문법 ===")
    
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
    time.sleep(2.5)

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
            for _ in range(50):
                ready = await send_eval("document.readyState === 'complete' && !!window.storage && !!window.app && !!window.grammarClinicEngine && !!window.GRAMMAR_CLINIC_BANK && window.GRAMMAR_CLINIC_BANK.length >= 10")
                if ready:
                    break
                await asyncio.sleep(0.3)

            # Test 1: Data bank Level 0 presence and structure
            r1 = await send_eval("""
                (() => {
                    const bank = window.GRAMMAR_CLINIC_BANK || [];
                    const lv0 = bank.find(l => l.levelCode === 'lv0');
                    if (!lv0) return { error: 'lv0 not found in bank' };
                    
                    const units = lv0.units || [];
                    let totalDrills = 0;
                    let totalQuestions = 0;
                    let totalFCs = 0;
                    let koreanInEnCount = 0;
                    
                    units.forEach(u => {
                        totalDrills += (u.spottingDrills || []).length;
                        totalQuestions += (u.questions || []).length;
                        (u.formulaCards || []).forEach(fc => {
                            totalFCs++;
                            (fc.examples || []).forEach(ex => {
                                for (let i = 0; i < ex.en.length; i++) {
                                    const code = ex.en.charCodeAt(i);
                                    if ((code >= 0xac00 && code <= 0xd7a3) || (code >= 0x3131 && code <= 0x318e)) {
                                        koreanInEnCount++;
                                    }
                                }
                            });
                        });
                    });
                    
                    return {
                        totalLevels: bank.length,
                        lv0Name: lv0.levelName,
                        lv0UnitsCount: units.length,
                        unitIds: units.map(u => u.unitId),
                        unitNos: units.map(u => u.unitNo),
                        totalDrills,
                        totalQuestions,
                        totalFCs,
                        koreanInEnCount
                    };
                })()
            """)
            print(f"Data Check Level 0: {r1}")
            assert r1.get("totalLevels") == 10, f"Expected 10 levels, got {r1.get('totalLevels')}"
            assert r1.get("lv0UnitsCount") == 8, f"Expected 8 units, got {r1.get('lv0UnitsCount')}"
            assert r1.get("totalDrills") == 24, f"Expected 24 drills, got {r1.get('totalDrills')}"
            assert r1.get("totalQuestions") == 40, f"Expected 40 questions, got {r1.get('totalQuestions')}"
            assert r1.get("totalFCs") == 16, f"Expected 16 formula cards, got {r1.get('totalFCs')}"
            assert r1.get("koreanInEnCount") == 0, f"Expected 0 Korean in 'en', got {r1.get('koreanInEnCount')}"
            assert r1.get("unitNos") == [1, 2, 3, 4, 5, 6, 7, 8], f"UnitNos must be 1..8"
            print("Test 1 Passed: Level 0 data structure is 100% compliant with clinic standards!")

            # Test 2: Level selector and unit cards rendering in UI
            r2 = await send_eval("""
                (() => {
                    window.app.switchTab('grammar');
                    window.grammarClinicEngine.switchLevel('lv0');
                    
                    const currentLvl = window.grammarClinicEngine.currentLevelCode;
                    const container = document.getElementById('grammar-unit-card-grid');
                    const cards = container ? container.querySelectorAll('[data-unit-id]') : [];
                    const unitCardIds = Array.from(cards).map(c => c.getAttribute('data-unit-id'));
                    
                    return {
                        currentLvl,
                        cardCount: cards.length,
                        unitCardIds
                    };
                })()
            """)
            print(f"UI Level Switch: {r2}")
            assert r2.get("currentLvl") == "lv0"
            assert r2.get("cardCount") == 8, f"Expected 8 cards rendered, got {r2.get('cardCount')}"
            assert r2.get("unitCardIds") == ['lv0_u1', 'lv0_u2', 'lv0_u3', 'lv0_u4', 'lv0_u5', 'lv0_u6', 'lv0_u7', 'lv0_u8']
            print("Test 2 Passed: Level 0 renders 8 clean unit cards in the grid!")

            # Test 3: Open Unit 1 modal and verify Step 1 Concept
            r3 = await send_eval("""
                (() => {
                    window.grammarClinicEngine.openClinicModal('lv0_u1');
                    
                    const modalTitle = document.getElementById('grammar-modal-title').textContent.trim();
                    const levelBadge = document.getElementById('grammar-modal-level-badge').textContent.trim();
                    const body = document.getElementById('grammar-modal-body');
                    const fcCards = body.querySelectorAll('.bg-white.rounded-2xl.border');
                    const ttsButtons = body.querySelectorAll('button[onclick*=\"ttsEngine.speak\"]');
                    
                    return {
                        modalTitle,
                        levelBadge,
                        fcCount: fcCards.length,
                        ttsButtonCount: ttsButtons.length,
                        activeStep: window.grammarClinicEngine.activeStep
                    };
                })()
            """)
            print(f"Modal Step 1: {r3}")
            assert r3.get("activeStep") == 1
            assert "Lv.0 초등 기초" in r3.get("levelBadge")
            assert "Unit 1. 명사와 관사" in r3.get("modalTitle")
            assert r3.get("ttsButtonCount") >= 4, "Must have TTS buttons for examples"
            print("Test 3 Passed: Step 1 renders Level 0 concept cards with TTS!")

            # Test 4: Step 2 3-Mission Flow for lv0_u1
            r4 = await send_eval("""
                (() => {
                    window.grammarClinicEngine.setStep(2);
                    
                    const unit = window.grammarClinicEngine.activeUnit;
                    const w0 = unit.spottingDrills[0].wrongIndex;
                    const w1 = unit.spottingDrills[1].wrongIndex;
                    const w2 = unit.spottingDrills[2].wrongIndex;
                    
                    // Initial check
                    const p0 = document.getElementById('spotting-progress-count').textContent.trim();
                    
                    // Solve mission 0
                    window.grammarClinicEngine.checkSpotting(0, w0, w0);
                    const p1 = document.getElementById('spotting-progress-count').textContent.trim();
                    
                    // Solve mission 1
                    window.grammarClinicEngine.checkSpotting(1, w1, w1);
                    const p2 = document.getElementById('spotting-progress-count').textContent.trim();
                    
                    // Solve mission 2
                    window.grammarClinicEngine.checkSpotting(2, w2, w2);
                    const p3 = document.getElementById('spotting-progress-count').textContent.trim();
                    
                    const isAllSolved = window.grammarClinicEngine.spottingSolved;
                    
                    return {
                        p0,
                        p1,
                        p2,
                        p3,
                        isAllSolved
                    };
                })()
            """)
            print(f"Step 2 3-Mission Flow: {r4}")
            assert r4.get("p0") == "0 / 3"
            assert r4.get("p1") == "1 / 3"
            assert r4.get("p2") == "2 / 3"
            assert r4.get("p3") == "3 / 3"
            assert r4.get("isAllSolved") is True
            print("Test 4 Passed: All 3 Level 0 spotting missions solved sequentially!")

            # Test 5: Step 3 Practice Quiz for lv0_u1
            r5 = await send_eval("""
                (() => {
                    window.grammarClinicEngine.setStep(3);
                    
                    const body = document.getElementById('grammar-modal-body');
                    const options = body.querySelectorAll('button[onclick*=\"selectQuizOption\"]');
                    
                    // Select answers for all 5 questions
                    for (let q = 0; q < 5; q++) {
                        window.grammarClinicEngine.selectQuizOption(q, 1);
                    }
                    
                    window.grammarClinicEngine.submitQuiz();
                    
                    const score = window.grammarClinicEngine.quizScore;
                    const isSubmitted = window.grammarClinicEngine.quizSubmitted;
                    
                    return {
                        optionCount: options.length,
                        isSubmitted,
                        score,
                        activeStep: window.grammarClinicEngine.activeStep
                    };
                })()
            """)
            print(f"Step 3 Practice Quiz: {r5}")
            assert r5.get("activeStep") == 3
            assert r5.get("optionCount") == 25, f"Expected 25 options, got {r5.get('optionCount')}"
            assert r5.get("isSubmitted") is True
            print("Test 5 Passed: Step 3 practice quiz answers submitted and scored successfully!")

            # Test 6: Planner Schedule Registration and Today's Learning Briefing
            r6 = await send_eval("""
                (() => {
                    window.grammarClinicEngine.closeClinicModal();
                    window.alert = (msg) => { console.log('ALERT:', msg); };
                    
                    const todayStr = window.storage.getTodayDateString();
                    window.grammarClinicEngine.openScheduleModal('lv0_u1', 'lv0');
                    
                    const dateInput = document.getElementById('grammar-sched-single-date');
                    if (dateInput) dateInput.value = todayStr;
                    
                    window.grammarClinicEngine.executeScheduleRegistration();
                    const lv0Task = window.storage.getScheduledGrammarUnit('lv0_u1', 'lv0');
                    
                    // Check dashboard briefing
                    window.app.switchTab('today');
                    const briefingBox = document.getElementById('dash-today-learning-container');
                    const briefingText = briefingBox ? briefingBox.textContent : '';
                    
                    return {
                        hasTask: !!lv0Task,
                        taskInfo: lv0Task ? { unitId: lv0Task.grammarUnitId, title: lv0Task.word } : null,
                        briefingIncludesLv0: briefingText.includes('Lv.0 초등 기초') || briefingText.includes('명사와 관사')
                    };
                })()
            """)
            print(f"Planner Integration: {r6}")
            assert r6.get("hasTask"), "Scheduled task for lv0_u1 must exist in storage"
            assert r6.get("briefingIncludesLv0"), "Today's learning briefing must include Level 0 unit"
            print("Test 6 Passed: Level 0 seamlessly scheduled into planner and rendered on dashboard!")

            print("\n>>> ALL 6 TESTS FOR LEVEL 0 GRAMMAR CLINIC PASSED 100%! <<<")

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
