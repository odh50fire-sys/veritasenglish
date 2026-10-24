"""
Veritas English - 로컬 웹 서버 실행기
명령어 실행 시 로컬 HTTP 서버를 띄우고 기본 브라우저를 자동 실행합니다.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # UTF-8, 캐시 방지 및 CORS 완화 헤더 설정 (OCR Web Worker 및 TTS 가속 지원)
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

def main():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    handler = CustomHTTPRequestHandler
    
    # 포트 충돌 방지 (멀티스레드 서버로 브라우저 동시 요청 처리)
    port = PORT
    for attempt in range(10):
        try:
            httpd = http.server.ThreadingHTTPServer(("", port), handler)
            break
        except OSError:
            port += 1
    else:
        print("사용 가능한 포트를 찾지 못했습니다.")
        sys.exit(1)

    url = f"http://localhost:{port}/index.html"
    print("=" * 65)
    print(f"[VERITAS ENGLISH] Server started on port {port}")
    print(f"URL: {url}")
    print("Press Ctrl+C to stop.")
    print("=" * 65)

    webbrowser.open(url)
    
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n웹 서버를 정상적으로 종료합니다.")
        httpd.server_close()

if __name__ == '__main__':
    main()
