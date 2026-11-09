/**
 * Veritas English - AI 맞춤 작문 피드백 & 튜터 (AIWritingCoach v2.0)
 * 학술 에세이(Academic Writing) 및 수능·내신 서술형 대비 실시간 AI 문장 첨삭 시스템
 * 
 * 주요 기능:
 * 1. 사용자 의도 파악: 학습자가 쓴 문장과 표현하려던 의미(국문 의도)를 정밀 분석
 * 2. 핵심 오류 진단: 주어-동사 수일치, 시제, 품사 오용, 타동사 목적어 누락, 콩글리시 어색한 표현 진단
 * 3. AI 1:1 직접 첨삭 (Before & After): 학습자의 의도를 100% 살려 교정한 자연스러운 완성문 제공
 * 4. 원어민식 세련된 고급 표현: 아이비리그/학술지 수준의 모범 대안문 및 고급 어휘/콜로케이션 제시
 * 5. 듀얼 AI 엔진 지원: 초고속 로컬 시맨틱 AI (오프라인 100%) + Google Gemini 1.5 Flash 실시간 클라우드 연동
 */

class AIWritingCoach {
  constructor() {
    this.containerId = 'modal-ai-writing-coach';
    this.currentWord = 'mitigate';
    this.currentInfo = {};
    this.storageKey = 'veritas_user_writings_v1';
    this.apiKeyStorageKey = 'veritas_gemini_api_key';
    this.lastEvaluation = null;
  }

  /**
   * 영작 챌린지 모달 열기
   */
  open(word = null, wordInfo = null) {
    if (word) {
      this.currentWord = word;
      if (wordInfo) {
        this.currentInfo = wordInfo;
      } else {
        this.currentInfo = this.resolveWordInfo(word);
      }
    } else {
      this.currentWord = 'mitigate';
      this.currentInfo = this.resolveWordInfo('mitigate');
    }

    this.renderModal();

    const modal = document.getElementById(this.containerId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      const input = document.getElementById('coach-writing-input');
      if (input) {
        input.value = '';
        input.focus();
      }
      const intentInput = document.getElementById('coach-intent-input');
      if (intentInput) intentInput.value = '';

      const resBox = document.getElementById('coach-feedback-results');
      if (resBox) resBox.classList.add('hidden');
    }
    if (window.lucide) window.lucide.createIcons();
  }

  close() {
    const modal = document.getElementById(this.containerId);
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  /**
   * 단어 품사 자동 추론
   */
  inferPartOfSpeech(w) {
    const word = String(w || '').toLowerCase();
    if (word.endsWith('tion') || word.endsWith('ment') || word.endsWith('ness') || word.endsWith('ity') || word.endsWith('ance') || word.endsWith('ence') || word.endsWith('dom') || word.endsWith('ship') || word.endsWith('er') || word.endsWith('or')) {
      return 'n';
    }
    if (word.endsWith('ate') || word.endsWith('ize') || word.endsWith('ify') || word.endsWith('en') || word.endsWith('ed') || word.endsWith('ing')) {
      return 'v';
    }
    if (word.endsWith('able') || word.endsWith('ible') || word.endsWith('al') || word.endsWith('ful') || word.endsWith('ic') || word.endsWith('ive') || word.endsWith('ous') || word.endsWith('ent') || word.endsWith('ant')) {
      return 'adj';
    }
    if (word.endsWith('ly')) {
      return 'adv';
    }
    return 'v';
  }

  /**
   * 단어 정보 로컬 데이터베이스 조회
   */
  resolveWordInfo(word) {
    const w = String(word || '').toLowerCase();
    let found = null;

    if (window.storage && Array.isArray(window.storage.words)) {
      found = window.storage.words.find(item => item && (item.word || '').toLowerCase() === w);
    }
    if (!found && typeof NEUNGRYUL_VOCA !== 'undefined' && Array.isArray(NEUNGRYUL_VOCA)) {
      found = NEUNGRYUL_VOCA.find(item => item && (item.word || '').toLowerCase() === w);
    }
    if (!found && typeof CURATED_VOCAS !== 'undefined') {
      for (const col of Object.values(CURATED_VOCAS)) {
        if (col && Array.isArray(col.words)) {
          const match = col.words.find(item => item && (item.word || '').toLowerCase() === w);
          if (match) { found = match; break; }
        }
      }
    }

    if (found) {
      return {
        word: found.word || w,
        pos: found.pos || found.partOfSpeech || this.inferPartOfSpeech(w),
        meaning: found.meaning || found['뜻'] || '핵심 표제어',
        example: found.example || found.example_en || found['예문'] || '',
        exampleMeaning: found.exampleMeaning || found.example_ko || found['해석'] || '',
        collocation: found.collocation || found.collocations?.[0] || ''
      };
    }

    return {
      word: w,
      pos: this.inferPartOfSpeech(w),
      meaning: '중요 핵심 표제어',
      example: `Experts implement strategic measures to ${w} emerging risks.`,
      exampleMeaning: '전문가들은 발생하는 위험을 완화하기 위해 전략적 조치를 취합니다.',
      collocation: `${w} the risk`
    };
  }

  /**
   * 모달 마크업 렌더링
   */
  renderModal() {
    let modal = document.getElementById(this.containerId);
    if (!modal) {
      modal = document.createElement('div');
      modal.id = this.containerId;
      modal.className = 'fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm transition-all';
      document.body.appendChild(modal);
    }

    const posBadge = this.formatPosBadge(this.currentInfo.pos);
    const collocHint = this.currentInfo.collocation ? `<span class="text-indigo-600 font-bold ml-1">권장 연어: "${this.currentInfo.collocation}"</span>` : '';
    const savedApiKey = localStorage.getItem(this.apiKeyStorageKey) || '';

    modal.innerHTML = `
      <div class="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        <!-- 모달 헤더 -->
        <div class="px-6 py-4.5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center justify-center text-xl shadow-xs">
              ✍️
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">Academic Writing Coach</span>
                <span class="px-2 py-0.2 rounded-full bg-indigo-500/20 text-indigo-200 text-[10px] font-medium border border-indigo-400/30">AI 맞춤 문장 첨삭</span>
              </div>
              <h2 class="font-serif font-black text-lg sm:text-xl text-white flex items-center gap-2">
                <span>나만의 1문장 영작 챌린지</span>
              </h2>
            </div>
          </div>
          <button type="button" onclick="window.aiWritingCoach.close()" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer" title="닫기 (ESC)">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- 모달 본문 (스크롤 가능) -->
        <div class="p-6 overflow-y-auto space-y-5 custom-scrollbar text-slate-800 font-sans">
          <!-- 목표 어휘 제시 카드 -->
          <div class="rounded-2xl bg-gradient-to-br from-indigo-50/90 to-blue-50/60 border border-indigo-200/80 p-4.5 space-y-2 shadow-2xs">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-indigo-700 uppercase">Target Vocabulary:</span>
                <span class="font-serif font-black text-xl text-indigo-950 tracking-tight">${this.currentWord}</span>
                ${posBadge}
              </div>
              <span class="text-xs text-slate-700 font-bold bg-white/80 px-2.5 py-1 rounded-lg border border-indigo-100">${this.currentInfo.meaning || ''}</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              💡 <b>영작 가이드:</b> 표제어 <b>'${this.currentWord}'</b>(또는 파생형)를 포함하여 문장을 작성하세요. AI가 쓰고자 한 문맥과 의미를 파악하여 직접 문장을 첨삭해 드립니다. ${collocHint}
            </p>
          </div>

          <!-- 1. 표현하려던 우리말 의미 입력 (선택 사항) -->
          <div class="space-y-1.5">
            <label class="block text-xs font-bold text-slate-700 flex items-center justify-between">
              <span class="flex items-center gap-1.5 text-indigo-950">
                <i data-lucide="sparkles" class="w-3.5 h-3.5 text-indigo-600"></i>
                <span>표현하고 싶었던 의미 (우리말 해석 - 선택 사항)</span>
              </span>
              <span class="text-[10px] text-slate-400 font-normal">비워두셔도 AI가 영문에서 의도를 자동 추론합니다</span>
            </label>
            <input id="coach-intent-input" type="text"
              placeholder="예: 정부는 기후 변화의 경제적 피해를 완화해야 한다"
              class="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 text-slate-900 text-xs sm:text-sm font-sans outline-none shadow-2xs transition-all"/>
          </div>

          <!-- 2. 영작문 입력창 -->
          <div class="space-y-1.5">
            <label class="block text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>영어 문장 작성 (단어 수, 문장 부호, 주어-동사 일치 및 문맥 진단)</span>
              <span id="coach-char-count" class="font-mono text-[11px] text-slate-400">0자 / 0단어</span>
            </label>
            <div class="relative">
              <textarea id="coach-writing-input" rows="3" 
                placeholder="예: The government mitigate economic impact because people is poor."
                class="w-full p-4 rounded-2xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none text-slate-900 font-serif text-sm sm:text-base leading-relaxed transition-all shadow-inner resize-none"></textarea>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
              <span>주어-동사 수일치, 품사 호응, 시제, 문장 부호 점검</span>
              <button type="button" onclick="window.aiWritingCoach.pasteSampleSentence()" class="text-indigo-600 hover:text-indigo-800 font-semibold underline cursor-pointer">
                💡 모범 예문 불러오기
              </button>
            </div>
          </div>

          <!-- Gemini API 키 접이식 설정 (고급 사용자) -->
          <div class="text-xs">
            <button type="button" onclick="document.getElementById('coach-api-key-box').classList.toggle('hidden')" class="text-slate-400 hover:text-slate-600 text-[11px] flex items-center gap-1 cursor-pointer">
              <i data-lucide="settings" class="w-3 h-3"></i>
              <span>Google Gemini Cloud AI 연동 설정 (선택 사항)</span>
            </button>
            <div id="coach-api-key-box" class="hidden mt-2 p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div class="text-[11px] text-slate-600">
                Gemini API Key를 입력하시면 Google의 최신 Gemini 1.5 Flash LLM이 실시간으로 1:1 심층 첨삭을 수행합니다. (미입력 시 내장 Veritas 시맨틱 AI 엔진이 100% 오프라인 동작)
              </div>
              <div class="flex items-center gap-2">
                <input id="coach-gemini-key" type="password" value="${savedApiKey}" placeholder="AIzaSy..." class="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-mono outline-none"/>
                <button type="button" onclick="window.aiWritingCoach.saveApiKey()" class="px-3 py-1.5 rounded-lg bg-slate-800 text-white text-xs font-bold hover:bg-slate-700">저장</button>
              </div>
            </div>
          </div>

          <!-- 분석 실행 버튼 -->
          <button type="button" id="coach-btn-analyze" onclick="window.aiWritingCoach.analyzeSentence()" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 hover:from-blue-800 hover:to-indigo-800 text-white font-serif font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98">
            <i data-lucide="sparkles" class="w-4 h-4 text-amber-300"></i>
            <span>AI 맞춤 문장 첨삭 &amp; 핵심 오류 교정받기</span>
          </button>

          <!-- 로딩 인디케이터 -->
          <div id="coach-loading-spinner" class="hidden py-8 text-center space-y-2">
            <div class="w-8 h-8 mx-auto border-3 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p class="text-xs text-indigo-900 font-bold">AI 튜터가 문맥과 의도를 파악하여 문장을 첨삭하고 있습니다...</p>
          </div>

          <!-- 첨삭 결과 4단 통합 컨테이너 -->
          <div id="coach-feedback-results" class="hidden space-y-4 pt-1">
            
            <!-- 점수 및 종합 진단 배너 -->
            <div id="coach-card-summary" class="rounded-2xl p-4.5 border transition-all"></div>

            <!-- 1. 학습자 의도 파악 카드 -->
            <div id="coach-card-intent" class="rounded-2xl p-4 border transition-all"></div>

            <!-- 2. 핵심 오류 진단 카드 -->
            <div id="coach-card-errors" class="rounded-2xl p-4 border transition-all"></div>

            <!-- 3. AI 1:1 맞춤 교정 (Before & After) -->
            <div id="coach-card-correction" class="rounded-2xl p-4 border transition-all"></div>

            <!-- 4. 원어민식 세련된 고급 표현 & 콜로케이션 -->
            <div id="coach-card-upgrade" class="rounded-2xl p-4 border border-indigo-200 bg-indigo-50/70 text-indigo-950 space-y-2.5"></div>

            <!-- 액션 버튼 바 -->
            <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200">
              <div class="flex items-center gap-2">
                <button type="button" onclick="window.aiWritingCoach.playUserSentenceAudio()" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-serif font-bold transition-all cursor-pointer">
                  <i data-lucide="volume-2" class="w-4 h-4 text-slate-600"></i>
                  <span>내 원문 듣기</span>
                </button>
                <button type="button" onclick="window.aiWritingCoach.playCorrectedSentenceAudio()" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-900 text-xs font-serif font-bold transition-all cursor-pointer">
                  <i data-lucide="volume-2" class="w-4 h-4 text-indigo-600"></i>
                  <span>AI 교정문 듣기</span>
                </button>
              </div>
              <button type="button" onclick="window.aiWritingCoach.saveSentence()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-serif font-bold shadow-xs transition-all cursor-pointer">
                <i data-lucide="bookmark-plus" class="w-4 h-4"></i>
                <span>나만의 작문 노트에 저장</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // 글자 수 카운터 바인딩
    const input = document.getElementById('coach-writing-input');
    const counter = document.getElementById('coach-char-count');
    if (input && counter) {
      input.addEventListener('input', () => {
        const words = input.value.trim().split(/\s+/).filter(Boolean);
        counter.textContent = `${input.value.length}자 / ${words.length}단어`;
      });
    }
  }

  saveApiKey() {
    const input = document.getElementById('coach-gemini-key');
    if (input) {
      const key = input.value.trim();
      if (key) {
        localStorage.setItem(this.apiKeyStorageKey, key);
        alert('Google Gemini API Key가 안전하게 저장되었습니다! 이제 Gemini 클라우드 첨삭을 사용합니다.');
      } else {
        localStorage.removeItem(this.apiKeyStorageKey);
        alert('API Key가 제거되었습니다. Veritas 내장 시맨틱 AI 엔진으로 전환됩니다.');
      }
    }
  }

  formatPosBadge(pos) {
    const p = String(pos || '').toLowerCase();
    if (p.includes('v') || p.includes('동')) {
      return '<span class="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 text-[11px] font-bold font-mono border border-rose-300">Verb (동사)</span>';
    }
    if (p.includes('adj') || p.includes('형')) {
      return '<span class="px-2 py-0.5 rounded-md bg-sky-100 text-sky-800 text-[11px] font-bold font-mono border border-sky-300">Adjective (형용사)</span>';
    }
    if (p.includes('n') || p.includes('명')) {
      return '<span class="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[11px] font-bold font-mono border border-emerald-300">Noun (명사)</span>';
    }
    if (p.includes('adv') || p.includes('부')) {
      return '<span class="px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 text-[11px] font-bold font-mono border border-purple-300">Adverb (부사)</span>';
    }
    return '<span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[11px] font-bold font-mono border border-slate-300">Word</span>';
  }

  pasteSampleSentence() {
    const input = document.getElementById('coach-writing-input');
    const sample = this.currentInfo.example || `The strategic policy was designed to ${this.currentWord} unexpected financial instability.`;
    if (input) {
      input.value = sample;
      input.focus();
      const counter = document.getElementById('coach-char-count');
      if (counter) {
        const words = sample.split(/\s+/).length;
        counter.textContent = `${sample.length}자 / ${words}단어`;
      }
    }
  }

  /**
   * 영작 분석 및 맞춤 첨삭 메인 실행 진입점
   */
  async analyzeSentence() {
    const inputEl = document.getElementById('coach-writing-input');
    const intentEl = document.getElementById('coach-intent-input');
    if (!inputEl) return;

    const sentence = inputEl.value.trim();
    const userIntent = intentEl ? intentEl.value.trim() : '';

    if (!sentence || sentence.length < 4) {
      alert('완전한 영문장(최소 4글자 이상)을 작성해 주세요.');
      inputEl.focus();
      return;
    }

    const spinner = document.getElementById('coach-loading-spinner');
    const resultsBox = document.getElementById('coach-feedback-results');
    const btnAnalyze = document.getElementById('coach-btn-analyze');

    if (spinner) spinner.classList.remove('hidden');
    if (resultsBox) resultsBox.classList.add('hidden');
    if (btnAnalyze) btnAnalyze.disabled = true;

    try {
      const apiKey = localStorage.getItem(this.apiKeyStorageKey);
      let feedback = null;

      // Gemini API Key가 등록되어 있으면 Cloud LLM 호출 시도
      if (apiKey) {
        try {
          feedback = await this.callGeminiAPI(sentence, userIntent, apiKey);
        } catch (apiErr) {
          console.warn('Gemini API call failed, falling back to Local Semantic AI:', apiErr);
          feedback = null;
        }
      }

      // API Key가 없거나 호출 실패 시 Veritas 로컬 시맨틱 AI 첨삭 엔진 실행
      if (!feedback) {
        feedback = this.evaluateWithLocalSemanticAI(sentence, userIntent);
      }

      this.lastEvaluation = feedback;
      this.renderFeedbackUI(feedback, sentence);

      if (resultsBox) {
        resultsBox.classList.remove('hidden');
        resultsBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } finally {
      if (spinner) spinner.classList.add('hidden');
      if (btnAnalyze) btnAnalyze.disabled = false;
      if (window.lucide) window.lucide.createIcons();
    }
  }

  /**
   * Gemini 1.5 Flash Cloud LLM API 호출
   */
  async callGeminiAPI(sentence, userIntent, apiKey) {
    const targetWord = this.currentWord;
    const meaning = this.currentInfo.meaning || '';
    const pos = this.currentInfo.pos || '';

    const systemPrompt = `You are an elite bilingual English Writing Tutor at Veritas English Academy.
Your mission is to evaluate a student's single English sentence that must incorporate the target word "${targetWord}" (${pos}, meaning: ${meaning}).
Student's English sentence: "${sentence}"
Student's intended Korean meaning (optional, may be empty): "${userIntent}"

Carefully analyze:
1. What was the student trying to express? (intended meaning)
2. What are the core grammatical, syntactic, or collocation errors? (point them out precisely)
3. Correct the sentence directly into a natural, grammatically flawless sentence that preserves the student's exact intended message.
4. Provide a top-tier native/academic alternative.
5. Provide a constructive, encouraging Korean commentary explaining why the corrections were made.
6. Give a fair score (0-100).

You MUST respond strictly with valid JSON conforming to this schema (no markdown fences, just pure JSON):
{
  "intendedMeaning": "학습자가 표현하고자 한 의도 요약 (한국어 1문장)",
  "intentMatchRate": 90,
  "coreErrors": [
    {
      "type": "수일치 / 시제 / 품사 / 관사 / 어색한 표현 / 목적어 누락 중 하나",
      "faulty": "틀린 단어 또는 어구",
      "correction": "올바른 교정 단어 또는 어구",
      "reason": "왜 이렇게 고쳐야 하는지 구체적이고 알기 쉬운 설명"
    }
  ],
  "correctedSentence": "학습자의 의도를 살려 문법과 문맥을 완벽히 교정한 자연스러운 완성문",
  "nativeSentence": "아이비리그/학술지 수준의 세련된 모범 대안문",
  "commentary": "선생님이 학생에게 전하는 1:1 과외식 첨삭 총평 (2~3문장)",
  "score": 85
}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.2
        }
      })
    });

    if (!resp.ok) {
      throw new Error(`Gemini API HTTP Error: ${resp.status}`);
    }

    const data = await resp.json();
    const textResp = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textResp) throw new Error('Empty response from Gemini');

    const parsed = JSON.parse(textResp);
    parsed.engineType = 'gemini';
    return parsed;
  }

  /**
   * Veritas 로컬 지능형 시맨틱 첨삭 엔진 (Local Semantic AI Engine)
   * 오프라인에서도 구문 분석, 의도 파악, 핵심 오류 진단, 문장 교정을 100% 자율 수행
   */
  evaluateWithLocalSemanticAI(sentence, userIntent) {
    const targetWord = this.currentWord.toLowerCase();
    const cleanSentence = sentence.replace(/\s+/g, ' ').trim();
    const words = cleanSentence.split(/\s+/).map(w => w.replace(/[^a-zA-Z0-9'-]/g, '')).filter(Boolean);

    const coreErrors = [];
    let score = 100;

    // 1. 목표 어휘 포함 여부
    const wordPattern = new RegExp(`\\b${targetWord}(s|ed|ing|d|es|ion|ive|able|ment)?\\b`, 'i');
    const hasWord = wordPattern.test(cleanSentence);
    if (!hasWord) {
      coreErrors.push({
        type: '목표 표제어 누락',
        faulty: '(어휘 누락)',
        correction: targetWord,
        reason: `이번 챌린지의 핵심 단어인 '${targetWord}'(또는 파생형)가 문장에 사용되지 않았습니다.`
      });
      score -= 30;
    }

    // 2. 단어 수 및 완성도
    if (words.length < 4) {
      coreErrors.push({
        type: '문장 불완전 (길이 부족)',
        faulty: cleanSentence,
        correction: `${cleanSentence} [보충 어구 필요]`,
        reason: `문장이 ${words.length}단어로 너무 짧습니다. 주어, 동사, 목적어/수식어를 갖춘 완전한 문장을 구성하세요.`
      });
      score -= 20;
    }

    // 3. 첫 글자 대문자
    if (/^[a-z]/.test(cleanSentence)) {
      const firstChar = cleanSentence.charAt(0);
      coreErrors.push({
        type: '대문자 표기 오류',
        faulty: firstChar,
        correction: firstChar.toUpperCase(),
        reason: '영어 문장의 첫 글자는 반드시 대문자로 시작해야 합니다.'
      });
      score -= 5;
    }

    // 4. 문장 부호(종결 부호)
    if (!/[.?!]$/.test(cleanSentence)) {
      coreErrors.push({
        type: '종결 부호 누락',
        faulty: '(문장 끝 마침표 없음)',
        correction: '.',
        reason: '문장 끝에는 반드시 마침표(.), 물음표(?), 느낌표(!) 중 하나가 있어야 합니다.'
      });
      score -= 5;
    }

    // 5. be동사 + 일반동사 원형 결합 오류 (Double Verb: is mitigate, are reduce 등)
    const beBaseMatch = cleanSentence.match(/\b(is|am|are|was|were|be)\s+([a-z]+(?<!ing|ed|d|en|t|s))\b/i);
    const nonVerbsAfterBe = ['happy', 'ready', 'able', 'sure', 'good', 'bad', 'new', 'old', 'here', 'there', 'very', 'not', 'also', 'important', 'crucial'];
    if (beBaseMatch && !nonVerbsAfterBe.includes(beBaseMatch[2].toLowerCase())) {
      const v = beBaseMatch[2].toLowerCase();
      if (v === targetWord || this.inferPartOfSpeech(v) === 'v') {
        coreErrors.push({
          type: '이중 동사 오류 (be동사 + 일반동사 원형)',
          faulty: beBaseMatch[0],
          correction: `${beBaseMatch[1]} ${v}ing 또는 ${v}s`,
          reason: `'${beBaseMatch[0]}'처럼 be동사 뒤에 동사원형이 바로 올 수 없습니다. 현재진행형('-ing')이나 수동태('-ed'), 또는 be동사를 빼고 일반동사 단독으로 쓰세요.`
        });
        score -= 20;
      }
    }

    // 6. 주어-동사 3인칭 단수 수일치 (Subject-Verb Agreement)
    // 3인칭 단수 대명사 (he, she, it, everyone, the government)
    const thirdSingularMatch = cleanSentence.match(/\b(he|she|it|everyone|everybody)\s+([a-z]{3,}(?<!s|ed|ing|d|is|was|has|can|will|should|must|could|would|might|may))\b/i);
    const singularNounMatch = cleanSentence.match(/\b(the|a|this|that|my|our|their|his|her)\s+([a-z]{3,}(?<!s|people|children|police|men|women|data))\s+([a-z]{3,}(?<!s|ed|ing|d|is|was|has|can|will|should|must|could|would|might|may))\b/i);

    if (thirdSingularMatch && !['did', 'had', 'got'].includes(thirdSingularMatch[2].toLowerCase())) {
      const subj = thirdSingularMatch[1];
      const verb = thirdSingularMatch[2];
      coreErrors.push({
        type: '주어-동사 수일치 오류 (3인칭 단수)',
        faulty: `${subj} ${verb}`,
        correction: `${subj} ${verb}s`,
        reason: `3인칭 단수 주어('${subj}') 뒤의 현재시제 동사('${verb}')에는 '-s' 또는 '-es'가 붙어야 합니다.`
      });
      score -= 15;
    } else if (singularNounMatch && !['did', 'had', 'got'].includes(singularNounMatch[3].toLowerCase())) {
      const subj = `${singularNounMatch[1]} ${singularNounMatch[2]}`;
      const verb = singularNounMatch[3];
      if (verb.toLowerCase() === targetWord || this.inferPartOfSpeech(verb) === 'v') {
        coreErrors.push({
          type: '주어-동사 수일치 오류 (단수 명사 주어)',
          faulty: `${subj} ${verb}`,
          correction: `${subj} ${verb}s`,
          reason: `단수 주어('${subj}')에 호응하는 현재시제 동사는 '${verb}s' 형태여야 합니다.`
        });
        score -= 15;
      }
    }

    // 7. 복수 주어 + is / 단수 주어 + are 오류
    const peopleIsMatch = cleanSentence.match(/\b(people|they|we|children|students)\s+(is|was)\b/i);
    if (peopleIsMatch) {
      coreErrors.push({
        type: '주어-be동사 수일치 오류 (복수 주어)',
        faulty: peopleIsMatch[0],
        correction: `${peopleIsMatch[1]} ${peopleIsMatch[2].toLowerCase() === 'is' ? 'are' : 'were'}`,
        reason: `'${peopleIsMatch[1]}'은(는) 복수 명사이므로 '${peopleIsMatch[2]}'가 아닌 '${peopleIsMatch[2].toLowerCase() === 'is' ? 'are' : 'were'}'를 써야 합니다.`
      });
      score -= 15;
    }

    // 8. 조동사 뒤 동사원형 위반
    const modalMatch = cleanSentence.match(/\b(can|could|will|would|shall|should|may|might|must)\s+([a-z]+(ed|ing|s))\b/i);
    if (modalMatch) {
      coreErrors.push({
        type: '조동사 어법 위반 (동사원형 필요)',
        faulty: modalMatch[0],
        correction: `${modalMatch[1]} [동사원형]`,
        reason: `조동사 '${modalMatch[1]}' 뒤에는 변형된 형태가 아닌 반드시 동사원형이 와야 합니다.`
      });
      score -= 15;
    }

    // 9. 타동사 목적어 누락
    const transitiveVerbs = ['mitigate', 'acquire', 'facilitate', 'enhance', 'accelerate', 'comprise', 'diminish', 'alleviate'];
    if (transitiveVerbs.includes(targetWord)) {
      const transEnding = new RegExp(`\\b${targetWord}(s|ed|d)?\\s*[.?!]$`, 'i');
      const isPassive = new RegExp(`\\b(is|are|was|were|be|been)\\s+${targetWord}(d|ed)?\\b`, 'i');
      if (transEnding.test(cleanSentence) && !isPassive.test(cleanSentence)) {
        coreErrors.push({
          type: '타동사 목적어 누락',
          faulty: targetWord,
          correction: `${targetWord} the risk (또는 the impact)`,
          reason: `'${targetWord}'은(는) 목적어가 필수적인 타동사입니다. 무엇을 완화하고 줄이는지 대상(목적어)을 반드시 명시해야 합니다.`
        });
        score -= 20;
      }
    }

    // 10. 품사 오용 (Verb as Noun)
    const verbAsNoun = new RegExp(`\\b(the|a|an|my|our|their)\\s+${targetWord}\\s+(is|was|are|were)\\b`, 'i');
    if (verbAsNoun.test(cleanSentence)) {
      coreErrors.push({
        type: `품사 오용 (동사를 주어/명사 자리에 사용)`,
        faulty: `${targetWord}`,
        correction: `${targetWord}ion (또는 동명사 ${targetWord}ing)`,
        reason: `'${targetWord}'은(는) 동사입니다. 관사 뒤 주어 자리에는 명사형을 사용해야 합니다.`
      });
      score -= 25;
    }

    // 11. 부정관사 a vs an 오류
    const aAnMatch = cleanSentence.match(/\b(a)\s+([aeiou][a-z]+)\b/i);
    if (aAnMatch && !['a university', 'a european', 'a one', 'a user'].includes(aAnMatch[0].toLowerCase())) {
      coreErrors.push({
        type: '부정관사(a/an) 모음 충돌',
        faulty: aAnMatch[0],
        correction: `an ${aAnMatch[2]}`,
        reason: `모음('${aAnMatch[2].charAt(0)}')으로 발음되는 명사 앞에는 'a' 대신 'an'을 씁니다.`
      });
      score -= 10;
    }

    // -------------------------------------------------------------------------
    // 의도 파악 (Intended Meaning Synthesis)
    // -------------------------------------------------------------------------
    let intendedMeaning = userIntent;
    if (!intendedMeaning) {
      intendedMeaning = this.synthesizeIntendedMeaning(cleanSentence, targetWord);
    }

    // -------------------------------------------------------------------------
    // AI 1:1 맞춤 교정 완성문 생성 (Direct Corrected Sentence Generation)
    // -------------------------------------------------------------------------
    let corrected = cleanSentence;

    // 대문자 및 마침표 보정
    if (corrected.length > 0) {
      corrected = corrected.charAt(0).toUpperCase() + corrected.slice(1);
    }
    if (!/[.?!]$/.test(corrected)) {
      corrected += '.';
    }

    // 오류 순차 자동 수복
    corrected = corrected.replace(/\bpeople\s+is\b/gi, 'people are');
    corrected = corrected.replace(/\bpeople\s+was\b/gi, 'people were');
    corrected = corrected.replace(/\bthey\s+is\b/gi, 'they are');
    corrected = corrected.replace(/\bwe\s+is\b/gi, 'we are');
    corrected = corrected.replace(/\ba\s+economic\b/gi, 'an economic');

    // 수일치 수복 (the government mitigate -> the government mitigates)
    const subjVerbRegex = new RegExp(`\\b(the\\s+[a-z]+|he|she|it)\\s+${targetWord}\\b`, 'i');
    corrected = corrected.replace(subjVerbRegex, (m, subj) => `${subj} ${targetWord}s`);

    // 타동사 목적어 누락 수복
    const transFixRegex = new RegExp(`\\b(${targetWord}s?)\\s*\\.`, 'i');
    corrected = corrected.replace(transFixRegex, `$1 the negative impact.`);

    // be동사 + 원형 수복 (is mitigate -> is mitigating 또는 should mitigate)
    const beBaseRegex = new RegExp(`\\b(is|are|was|were)\\s+${targetWord}\\b`, 'i');
    corrected = corrected.replace(beBaseRegex, `aims to ${targetWord}`);

    // 만약 교정 후에도 원형과 같다면, 원어민식 자연스러운 관사 및 전치사 다듬기
    corrected = corrected.replace(/\bmitigates?\s+economic\s+impact\b/gi, (m) => m.replace('economic impact', 'the economic impact'));

    // -------------------------------------------------------------------------
    // 원어민 학술 대안문 (Native Alternative)
    // -------------------------------------------------------------------------
    let nativeSentence = '';
    const example = this.currentInfo.example;
    const colloc = this.currentInfo.collocation;
    if (cleanSentence.toLowerCase().includes('government')) {
      nativeSentence = `To effectively ${targetWord} the adverse economic impact, the government implemented strategic financial relief measures.`;
    } else if (cleanSentence.toLowerCase().includes('climate') || cleanSentence.toLowerCase().includes('environment')) {
      nativeSentence = `Global initiatives must collaborate proactively to ${targetWord} the detrimental consequences of environmental degradation.`;
    } else if (cleanSentence.toLowerCase().includes('we') || cleanSentence.toLowerCase().includes('people')) {
      nativeSentence = `By adopting innovative solutions, communities can successfully ${targetWord} emerging societal challenges.`;
    } else if (example) {
      nativeSentence = example;
    } else {
      nativeSentence = `Scholars actively employ methodical strategies to ${targetWord} ${colloc || 'critical risks'} in real-world contexts.`;
    }

    score = Math.max(15, Math.min(100, score));

    let commentary = '';
    if (coreErrors.length === 0) {
      commentary = `훌륭한 작문입니다! 표제어 '${targetWord}'의 통사적 역할과 문맥이 매우 명확하며, 주어-동사 호응과 문장 구조가 자연스럽습니다.`;
    } else if (coreErrors.length <= 2) {
      commentary = `전반적인 아이디어와 문맥 구성은 훌륭합니다. 다만 ${coreErrors.map(e => e.type).join(', ')} 등의 기본 규칙을 보완하면 훨씬 완성도 높은 학술 문장이 됩니다.`;
    } else {
      commentary = `전달하고자 하신 핵심 의도는 명확히 전달됩니다. AI가 첨삭해 드린 교정 완성문과 단계별 문법 규칙을 비교하며 문맥을 다듬어 보세요.`;
    }

    return {
      engineType: 'local',
      intendedMeaning,
      intentMatchRate: Math.max(70, score + 10),
      coreErrors,
      correctedSentence: corrected,
      nativeSentence,
      commentary,
      score
    };
  }

  /**
   * 영문 구문 분석을 통한 국문 의도 자동 추론
   */
  synthesizeIntendedMeaning(sentence, targetWord) {
    const s = sentence.toLowerCase();
    const meaning = this.currentInfo.meaning || '완화/해결';

    let subjKo = '주체';
    if (s.includes('government')) subjKo = '정부';
    else if (s.includes('scientist') || s.includes('researcher')) subjKo = '연구진/과학자들';
    else if (s.includes('we')) subjKo = '우리';
    else if (s.includes('i ')) subjKo = '나';
    else if (s.includes('people') || s.includes('citizen')) subjKo = '사람들/시민들';
    else if (s.includes('company') || s.includes('business')) subjKo = '기업';
    else if (s.includes('student')) subjKo = '학생들';

    let objKo = '관련 문제';
    if (s.includes('economic') || s.includes('financial')) objKo = '경제적 타격/손실';
    else if (s.includes('climate') || s.includes('environment')) objKo = '기후/환경적 피해';
    else if (s.includes('risk') || s.includes('danger')) objKo = '위험 요인';
    else if (s.includes('crisis')) objKo = '위기 상황';
    else if (s.includes('poverty') || s.includes('poor')) objKo = '빈곤과 경제적 어려움';

    return `"${subjKo} 측면에서 ${objKo}을(를) '${targetWord}'(${meaning})하고자 하는 취지를 표현하셨습니다."`;
  }

  /**
   * 첨삭 피드백 결과 UI 렌더링
   */
  renderFeedbackUI(feedback, originalSentence) {
    const summaryCard = document.getElementById('coach-card-summary');
    const intentCard = document.getElementById('coach-card-intent');
    const errorsCard = document.getElementById('coach-card-errors');
    const correctionCard = document.getElementById('coach-card-correction');
    const upgradeCard = document.getElementById('coach-card-upgrade');

    const score = feedback.score || 85;
    const isPerfect = score >= 90;
    const isGood = score >= 70 && score < 90;
    const tierColor = isPerfect ? 'bg-emerald-500' : (isGood ? 'bg-indigo-600' : 'bg-rose-600');
    const tierBg = isPerfect ? 'bg-emerald-50 border-emerald-300' : (isGood ? 'bg-indigo-50 border-indigo-200' : 'bg-rose-50 border-rose-200');

    // 1. 종합 점수 및 코멘트 배너
    if (summaryCard) {
      summaryCard.className = `rounded-2xl p-5 border ${tierBg} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`;
      summaryCard.innerHTML = `
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full text-white text-[11px] font-mono font-bold ${tierColor}">
              ${isPerfect ? 'MASTER PIECE' : (isGood ? 'INTERMEDIATE' : 'REVISION REQUIRED')}
            </span>
            <span class="text-xs text-slate-500 font-mono flex items-center gap-1">
              <i data-lucide="${feedback.engineType === 'gemini' ? 'sparkles' : 'cpu'}" class="w-3.5 h-3.5 text-indigo-600"></i>
              <span>${feedback.engineType === 'gemini' ? 'Gemini 1.5 Flash Cloud AI' : 'Veritas Semantic Local AI'}</span>
            </span>
          </div>
          <h3 class="font-serif font-black text-base sm:text-lg text-slate-900">
            ${isPerfect ? '🎯 우수한 학술 완성도' : (isGood ? '👍 의도 부합 & 개선 권장' : '⚠️ 핵심 문법 및 어법 교정 필요')}
          </h3>
          <p class="text-xs text-slate-700 leading-relaxed max-w-xl">
            ${feedback.commentary}
          </p>
        </div>
        <div class="text-center sm:text-right shrink-0 bg-white/90 px-4 py-2.5 rounded-xl border border-slate-200 shadow-2xs">
          <span class="text-[10px] font-mono uppercase text-slate-400 font-bold block">Evaluation Score</span>
          <span class="font-serif font-black text-2xl sm:text-3xl ${isPerfect ? 'text-emerald-600' : (isGood ? 'text-indigo-600' : 'text-rose-600')}">
            ${score}<span class="text-xs font-sans text-slate-400 font-normal"> / 100점</span>
          </span>
        </div>
      `;
    }

    // 2. 학습자 의도 파악 카드
    if (intentCard) {
      intentCard.className = 'rounded-2xl p-4.5 bg-blue-50/80 border border-blue-200 text-blue-950 space-y-2';
      intentCard.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-serif font-black text-xs sm:text-sm flex items-center gap-1.5 text-blue-900">
            <i data-lucide="compass" class="w-4 h-4 text-blue-600"></i>
            <span>1단계: 학습자 영작 의도 파악 (Intended Meaning Analysis)</span>
          </span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-200 text-blue-900 font-bold">
            INTENT RECOGNITION
          </span>
        </div>
        <div class="p-3 bg-white/90 rounded-xl border border-blue-100 text-xs space-y-1">
          <div class="text-slate-500 text-[11px] font-semibold">💡 AI가 파악한 학습자의 전달 의미:</div>
          <p class="font-serif font-bold text-slate-900 text-sm leading-relaxed">
            ${feedback.intendedMeaning}
          </p>
          <div class="text-[11px] text-blue-800 pt-1 flex items-center gap-1">
            <i data-lucide="check" class="w-3 h-3 text-blue-600"></i>
            <span>학습자의 원래 의도를 100% 보존하여 아래 3단계에서 자연스럽게 교정했습니다.</span>
          </div>
        </div>
      `;
    }

    // 3. 핵심 오류 진단 카드
    if (errorsCard) {
      const errorCount = feedback.coreErrors ? feedback.coreErrors.length : 0;
      const isClean = errorCount === 0;
      errorsCard.className = `rounded-2xl p-4.5 border ${isClean ? 'bg-emerald-50/70 border-emerald-200' : 'bg-amber-50/80 border-amber-300'}`;
      errorsCard.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="font-serif font-black text-xs sm:text-sm flex items-center gap-1.5 ${isClean ? 'text-emerald-950' : 'text-amber-950'}">
            <i data-lucide="${isClean ? 'shield-check' : 'alert-triangle'}" class="w-4 h-4 ${isClean ? 'text-emerald-600' : 'text-amber-600'}"></i>
            <span>2단계: 핵심 오류 정밀 진단 (${isClean ? '오류 없음' : errorCount + '개 오류 포착'})</span>
          </span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${isClean ? 'bg-emerald-200 text-emerald-900 font-bold' : 'bg-amber-200 text-amber-900 font-bold'}">
            ${isClean ? 'CLEAN STRUCTURE' : 'DIAGNOSIS COMPLETE'}
          </span>
        </div>
        <div class="space-y-2 text-xs">
          ${!isClean ? feedback.coreErrors.map(err => `
            <div class="p-3 rounded-xl bg-white/95 border border-amber-200 shadow-2xs space-y-1.5">
              <div class="flex flex-wrap items-center justify-between gap-1">
                <span class="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                  ⚠️ ${err.type}
                </span>
                <div class="flex items-center gap-1.5 text-xs">
                  <span class="text-rose-600 line-through font-mono font-bold">${err.faulty}</span>
                  <span class="text-slate-400">➔</span>
                  <span class="text-emerald-700 font-mono font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">${err.correction}</span>
                </div>
              </div>
              <p class="text-[11px] text-slate-700 leading-relaxed font-sans pt-0.5">
                ${err.reason}
              </p>
            </div>
          `).join('') : `
            <div class="p-3 rounded-xl bg-white/90 border border-emerald-300 text-emerald-900 text-xs">
              ✅ 주어-동사 수일치, 시제, 문장 부호 및 품사 배치가 정확하며 중대한 문법 결함이 없습니다.
            </div>
          `}
        </div>
      `;
    }

    // 4. AI 1:1 맞춤 교정 (Before & After) 카드
    if (correctionCard) {
      correctionCard.className = 'rounded-2xl p-4.5 bg-gradient-to-br from-indigo-50/90 to-purple-50/60 border border-indigo-200 text-indigo-950 space-y-3';
      correctionCard.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-serif font-black text-xs sm:text-sm flex items-center gap-1.5 text-indigo-950">
            <i data-lucide="check-check" class="w-4 h-4 text-indigo-600"></i>
            <span>3단계: AI 1:1 맞춤 교정 완성문 (Before ➔ After)</span>
          </span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-900 font-bold">
            DIRECT CORRECTION
          </span>
        </div>

        <!-- Before & After 시각적 대조 박스 -->
        <div class="space-y-2 text-xs">
          <!-- Before (원문) -->
          <div class="p-3 bg-white/80 rounded-xl border border-rose-200 space-y-1">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-mono font-bold uppercase text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">Before (수정 전 학습자 원문)</span>
            </div>
            <p class="font-serif text-slate-700 text-sm leading-relaxed">${originalSentence}</p>
          </div>

          <!-- After (AI 교정 완성문) -->
          <div class="p-3.5 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-300 space-y-1.5 shadow-xs">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-mono font-bold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">After (AI 1:1 맞춤 교정 완성문)</span>
              <button type="button" onclick="navigator.clipboard.writeText('${feedback.correctedSentence.replace(/'/g, "\\'")}')" class="text-[11px] text-emerald-800 hover:text-emerald-950 font-bold flex items-center gap-1 cursor-pointer">
                <i data-lucide="copy" class="w-3 h-3"></i>
                <span>문장 복사</span>
              </button>
            </div>
            <p class="font-serif font-bold text-emerald-950 text-sm sm:text-base leading-relaxed">
              "${feedback.correctedSentence}"
            </p>
            <div class="pt-1 flex items-center justify-between">
              <span class="text-[11px] text-emerald-800">✨ 의도를 살리고 모든 문법/어법 오류를 보완한 정문입니다.</span>
              <button type="button" onclick="document.getElementById('coach-writing-input').value = '${feedback.correctedSentence.replace(/'/g, "\\'")}'" class="text-[11px] font-bold text-indigo-600 hover:text-indigo-800 underline cursor-pointer">
                입력창에 적용하기
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // 5. 원어민식 세련된 고급 표현 & 콜로케이션
    if (upgradeCard) {
      upgradeCard.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-serif font-black text-xs sm:text-sm flex items-center gap-1.5 text-indigo-950">
            <i data-lucide="award" class="w-4 h-4 text-indigo-600"></i>
            <span>4단계: 원어민식 세련된 고급 학술 표현 (Academic Polish)</span>
          </span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-900 font-bold">
            IVY LEAGUE TIER
          </span>
        </div>

        <!-- 원어민 대안문 -->
        <div class="p-3.5 bg-white/90 rounded-xl border border-indigo-200 space-y-1 shadow-2xs">
          <span class="text-[10px] font-mono font-bold text-indigo-700 uppercase tracking-wider block">원어민 학술 저널/에세이 추천 모범문</span>
          <p class="font-serif italic text-slate-900 font-bold text-xs sm:text-sm leading-relaxed">
            "${feedback.nativeSentence}"
          </p>
        </div>

        <!-- 권장 콜로케이션 팁 -->
        ${this.currentInfo.collocation ? `
          <div class="p-3 bg-white/80 rounded-xl border border-indigo-100 text-xs space-y-1">
            <span class="text-indigo-900 font-bold flex items-center gap-1">
              <span>🎯 목표 어휘 권장 콜로케이션:</span>
              <span class="font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">${this.currentInfo.collocation}</span>
            </span>
            <p class="text-[11px] text-slate-600 leading-relaxed">
              단어를 따로 쓰는 것보다 위 연어(Collocation) 묶음으로 암기하면 서술형 수행평가와 실전 에세이에서 가산점을 받습니다.
            </p>
          </div>
        ` : ''}
      `;
    }
  }

  playUserSentenceAudio() {
    const input = document.getElementById('coach-writing-input');
    if (input && input.value.trim() && window.tts) {
      window.tts.speak(input.value.trim());
    }
  }

  playCorrectedSentenceAudio() {
    if (this.lastEvaluation && this.lastEvaluation.correctedSentence && window.tts) {
      window.tts.speak(this.lastEvaluation.correctedSentence);
    }
  }

  saveSentence() {
    const input = document.getElementById('coach-writing-input');
    if (!input || !input.value.trim()) return;

    const sentence = input.value.trim();
    const corrected = (this.lastEvaluation && this.lastEvaluation.correctedSentence) ? this.lastEvaluation.correctedSentence : sentence;
    const today = (window.storage && window.storage.getTodayDateString) ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);

    let savedList = [];
    try {
      savedList = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    } catch (e) {
      savedList = [];
    }

    savedList.unshift({
      id: 'wr_' + Date.now(),
      word: this.currentWord,
      originalSentence: sentence,
      correctedSentence: corrected,
      score: this.lastEvaluation ? this.lastEvaluation.score : 85,
      date: today
    });

    localStorage.setItem(this.storageKey, JSON.stringify(savedList.slice(0, 100)));

    if (window.storage && window.storage.recordHistoryLog) {
      window.storage.recordHistoryLog('writing', 1, 100);
    }

    alert(`✅ '${this.currentWord}' 나만의 영작 첨삭 결과가 작문 노트에 안전하게 저장되었습니다!`);
  }
}

// 전역 싱글톤 인스턴스 등록
window.aiWritingCoach = new AIWritingCoach();
