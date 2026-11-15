# -*- coding: utf-8 -*-
import os, sys, time, json, socket, urllib.request, subprocess, http.server, socketserver, threading, websockets, asyncio

def find_chrome():
    for c in [r"C:\Program Files\Google\Chrome\Application\chrome.exe", r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"]:
        if os.path.exists(c): return c
    raise FileNotFoundError("Chrome not found")

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
    def log_message(self, format, *args): pass

class ThreadingTCPServer(socketserver.ThreadingMixIn, socketserver.TCPServer): daemon_threads = True
server = ThreadingTCPServer(("127.0.0.1", port), CustomHandler)
threading.Thread(target=server.serve_forever, daemon=True).start()

cmd = [
    chrome_path, "--headless=new", f"--remote-debugging-port={debug_port}",
    "--disable-gpu", "--no-sandbox",
    "--user-data-dir=" + os.path.join(os.environ.get('TEMP', '.'), f'chrome_test_{debug_port}'),
    f"http://127.0.0.1:{port}/index.html"
]
proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
time.sleep(3.0)

async def check_console():
    req = urllib.request.urlopen(f"http://127.0.0.1:{debug_port}/json")
    tabs = json.loads(req.read().decode('utf-8'))
    ws_url = [t for t in tabs if t.get('type') == 'page'][0]['webSocketDebuggerUrl']
    async with websockets.connect(ws_url) as ws:
        await ws.send(json.dumps({"id": 1, "method": "Runtime.enable"}))
        await ws.send(json.dumps({"id": 2, "method": "Log.enable"}))
        await ws.send(json.dumps({"id": 3, "method": "Page.enable"}))
        await ws.send(json.dumps({"id": 4, "method": "Page.reload"}))
        start_time = time.time()
        while time.time() - start_time < 5.0:
            msg = json.loads(await ws.recv())
            method = msg.get('method')
            if method in ['Runtime.exceptionThrown', 'Log.entryAdded', 'Runtime.consoleAPICalled']:
                print(f"CONSOLE EVENT [{method}]:", msg.get('params'))

try:
    asyncio.run(check_console())
finally:
    proc.terminate()
    server.shutdown()
