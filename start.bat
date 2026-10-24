@echo off
chcp 65001 > nul
title Veritas English - 영재 아카데믹 영어 학습 플랫폼
echo ========================================================
echo   VERITAS ENGLISH (베리타스 잉글리시) 실행 중...
echo ========================================================
echo.

where python >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo Python 웹 서버로 실행합니다...
    python app.py
) else (
    echo Python이 감지되지 않아 기본 브라우저로 직접 index.html을 엽니다...
    start "" "index.html"
)
pause
