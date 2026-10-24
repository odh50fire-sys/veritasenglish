/**
 * Veritas English - Text-to-Speech (TTS) 발음 엔진
 * Web Speech API 기반 고품질 원어민 음성 재생 (US / UK 선택 및 속도 조절 지원)
 */

class TTSEngine {
    constructor() {
        this.synth = window.speechSynthesis;
        this.voices = [];
        this.voiceLang = 'en-US'; // 'en-US' or 'en-GB'
        this.rate = 0.95; // 0.75 (초등/초급) ~ 1.25 (수능/실전)
        this.pitch = 1.0;
        this.isSpeaking = false;

        this.initVoices();
        if (this.synth && this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = () => this.initVoices();
        }
    }

    initVoices() {
        if (!this.synth) return;
        this.voices = this.synth.getVoices();
    }

    setLanguage(lang) {
        this.voiceLang = lang; // 'en-US' or 'en-GB'
    }

    setRate(rate) {
        this.rate = parseFloat(rate) || 1.0;
    }

    /**
     * 영어 텍스트 발음 재생
     * @param {string} text - 발음할 영어 단어 또는 문장
     * @param {Function} onStart - 재생 시작 콜백
     * @param {Function} onEnd - 재생 종료 콜백
     */
    speak(text, onStart, onEnd) {
        if (!this.synth) {
            console.warn('SpeechSynthesis is not supported in this browser.');
            return;
        }

        // 진행 중인 이전 음성 중단
        this.synth.cancel();

        if (!text || text.trim() === '') return;

        const cleanText = text.replace(/\[.*?\]/g, '').trim(); // 발음기호 대괄호 제거
        const utterance = new SpeechSynthesisUtterance(cleanText);

        // 보이스 검색 (Google US/UK, Microsoft Natural, Apple Samantha 등 우선)
        const targetVoice = this.findBestVoice(this.voiceLang);
        if (targetVoice) {
            utterance.voice = targetVoice;
            utterance.lang = targetVoice.lang;
        } else {
            utterance.lang = this.voiceLang;
        }

        utterance.rate = this.rate;
        utterance.pitch = this.pitch;

        utterance.onstart = () => {
            this.isSpeaking = true;
            if (typeof onStart === 'function') onStart();
        };

        utterance.onend = () => {
            this.isSpeaking = false;
            if (typeof onEnd === 'function') onEnd();
        };

        utterance.onerror = (e) => {
            console.error('TTS speech error:', e);
            this.isSpeaking = false;
            if (typeof onEnd === 'function') onEnd();
        };

        this.synth.speak(utterance);
    }

    findBestVoice(langPrefix) {
        if (!this.voices || this.voices.length === 0) {
            this.initVoices();
        }

        const filtered = this.voices.filter(v => v.lang.startsWith(langPrefix));
        if (filtered.length === 0) {
            // 영어 전체 보이스 중 fallback
            return this.voices.find(v => v.lang.startsWith('en')) || null;
        }

        // 고품질 Natural / Google / Premium 보이스 우선 순위
        const priorityPatterns = [/natural/i, /google/i, /samantha/i, /karen/i, /daniel/i];
        for (const pattern of priorityPatterns) {
            const found = filtered.find(v => pattern.test(v.name));
            if (found) return found;
        }

        return filtered[0];
    }

    stop() {
        if (this.synth) {
            this.synth.cancel();
            this.isSpeaking = false;
        }
    }
}

// 전역 인스턴스
window.tts = new TTSEngine();
