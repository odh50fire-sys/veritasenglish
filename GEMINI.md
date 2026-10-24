# Veritas English 프로젝트 룰 (Project Rules)

## 1. 작업 산출물 Git 자동 백업 필수 규칙 (Automated Git Backup)
- **규칙**: 사용자의 요청으로 코드, 데이터, UI 또는 설정이 추가/수정/업데이트될 때마다, 산출물을 반드시 원격 GitHub 저장소(`https://github.com/odh50fire-sys/veritasenglish.git`)에 백업(커밋 및 푸시)해야 합니다.
- **Git 커밋 메시지 작성 원칙**:
  - 간결하고 명확한 **한글**로 작성합니다.
  - 예시:
    - `feat: PWA 모바일 어플리케이션 설치 및 전체화면 지원 추가`
    - `fix: 중등 내신 독해 문제 소단원별 개별 연동 버그 수정`
    - `docs: 프로젝트 규칙 및 가이드라인 갱신`
- **실행 절차**:
  1. 작업 완료 및 검증 수행
  2. `git add .` (불필요한 임시 파일은 `.gitignore`로 제외)
  3. `git commit -m "<한글 커밋 요약>"`
  4. `git push origin main`
  5. 사용자에게 커밋 내역 및 깃허브 반영 결과 보고

## 2. 코드 및 아키텍처 원칙
- **바닐라 웹 표준 유지**: 빌드 도구(webpack/vite 등) 없이 브라우저에서 즉시 실행되는 HTML5, Tailwind CSS CDN, Vanilla ES6+ JS 구조를 엄격히 유지합니다.
- **상대 경로 준수**: GitHub Pages 배포 환경(`https://odh50fire-sys.github.io/veritasenglish/`)에서 404가 발생하지 않도록 모든 파일 경로는 상대 경로(예: `js/app.js`, `data/...`)를 준수합니다.
- **문서 무결성**: 기존 주석, 데이터 스키마 및 검증된 로직을 임의로 훼손하지 않습니다.
