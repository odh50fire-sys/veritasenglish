/**
 * Veritas English - Text-to-Speech (TTS) 발음 엔진
 * Web Speech API 기반 고품질 원어민 여성 음성 재생 (US vs UK 명확한 억양 구별 지원)
 */

class TTSEngine {
    constructor() {
        this.synth = window.speechSynthesis;
        this.voices = [];
        this.voiceLang = 'en-US'; // 'en-US' (미국 여성) or 'en-GB' (영국 여성)
        this.rate = 0.95;
        this.pitch = 1.05; // 맑고 또렷한 여성 원어민 톤
        this.isSpeaking = false;

        this.initVoices();
        if (this.synth && this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = () => this.initVoices();
        }
    }

    initVoices() {
        if (!this.synth) return;
        this.voices = this.synth.getVoices() || [];
    }

    setLanguage(lang) {
        this.voiceLang = (lang === 'en-GB' || lang === 'UK') ? 'en-GB' : 'en-US';
    }

    setRate(rate) {
        this.rate = parseFloat(rate) || 0.95;
    }

    /**
     * 영어 텍스트 발음 재생
     * @param {string} text - 발음할 영어 단어 또는 문장
     * @param {string|Function} accentOrOnStart - 'en-US' | 'en-GB' 또는 onStart 콜백
     * @param {Function} onStart - 재생 시작 콜백
     * @param {Function} onEnd - 재생 종료 콜백
     */
    speak(text, accentOrOnStart = null, onStart = null, onEnd = null) {
        if (!this.synth) {
            console.warn('SpeechSynthesis is not supported in this browser.');
            return;
        }

        let explicitAccent = null;
        let actualOnStart = onStart;
        let actualOnEnd = onEnd;

        if (typeof accentOrOnStart === 'string') {
            explicitAccent = accentOrOnStart;
        } else if (typeof accentOrOnStart === 'function') {
            actualOnStart = accentOrOnStart;
        }

        // 진행 중인 이전 음성 중단
        this.synth.cancel();

        if (!text || text.trim() === '') return;

        const cleanText = text.replace(/\[.*?\]/g, '').trim(); // 발음기호 대괄호 제거
        const utterance = new SpeechSynthesisUtterance(cleanText);

        const targetLang = explicitAccent || this.voiceLang || 'en-US';
        const targetVoice = this.findBestFemaleVoice(targetLang);

        if (targetVoice) {
            utterance.voice = targetVoice;
            utterance.lang = targetVoice.lang;
        } else {
            utterance.lang = targetLang;
        }

        // 미국식 vs 영국식 억양 특성에 따른 속도/피치 미세 튜닝 (영국식의 정통 억양 살리기)
        if (targetLang.toLowerCase().includes('gb')) {
            utterance.rate = this.rate * 0.96;
            utterance.pitch = 1.03;
        } else {
            utterance.rate = this.rate;
            utterance.pitch = 1.06;
        }

        utterance.onstart = () => {
            this.isSpeaking = true;
            if (typeof actualOnStart === 'function') actualOnStart();
        };

        utterance.onend = () => {
            this.isSpeaking = false;
            if (typeof actualOnEnd === 'function') actualOnEnd();
        };

        utterance.onerror = (e) => {
            console.error('TTS speech error:', e);
            this.isSpeaking = false;
            if (typeof actualOnEnd === 'function') actualOnEnd();
        };

        this.synth.speak(utterance);
    }

    /**
     * 미국식(en-US) vs 영국식(en-GB) 고품질 여성 보이스 전용 탐색기
     */
    findBestFemaleVoice(langCode) {
        if (!this.voices || this.voices.length === 0) {
            this.initVoices();
        }

        const isUK = langCode.toLowerCase().includes('gb') || langCode.toLowerCase().includes('uk');
        const prefix = isUK ? 'en-GB' : 'en-US';

        const langVoices = this.voices.filter(v => v.lang.replace('_', '-').toLowerCase().startsWith(prefix.toLowerCase()));

        // 남성 음성 배제 키워드
        const malePatterns = /male|daniel|ryan|thomas|george|oliver|andrew|brian|guy|christopher|eric|roger|steffan|david/i;

        // 여성 우선 순위 목록
        let femalePatterns = [];
        if (isUK) {
            // 영국식 여성 원어민 보이스 (Sonia, Libby, Maisie, Google UK Female 등)
            femalePatterns = [
                /sonia/i,
                /libby/i,
                /maisie/i,
                /google.*uk.*female/i,
                /hazel/i,
                /stephanie/i,
                /fiona/i,
                /natural.*gb.*female/i,
                /female/i
            ];
        } else {
            // 미국식 여성 원어민 보이스 (Jenny, Aria, Emma, Ava, Samantha, Google US Female 등)
            femalePatterns = [
                /jenny/i,
                /aria/i,
                /emma/i,
                /ava/i,
                /samantha/i,
                /google.*us.*female/i,
                /zira/i,
                /karen/i,
                /victoria/i,
                /michelle/i,
                /natural.*us.*female/i,
                /female/i
            ];
        }

        // 1순위: 해당 국가 언어 중 여성 전용 패턴 매칭
        for (const pattern of femalePatterns) {
            const found = langVoices.find(v => pattern.test(v.name) && !malePatterns.test(v.name));
            if (found) return found;
        }

        // 2순위: 남성 패턴이 아닌 해당 언어 보이스
        const nonMaleVoice = langVoices.find(v => !malePatterns.test(v.name));
        if (nonMaleVoice) return nonMaleVoice;

        // 3순위: 해당 언어 아무 보이스
        if (langVoices.length > 0) return langVoices[0];

        // 4순위 fallback: 전체 영어 보이스 중 여성 패턴 매칭
        for (const pattern of femalePatterns) {
            const found = this.voices.find(v => v.lang.startsWith('en') && pattern.test(v.name) && !malePatterns.test(v.name));
            if (found) return found;
        }

        return this.voices.find(v => v.lang.startsWith('en')) || null;
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
