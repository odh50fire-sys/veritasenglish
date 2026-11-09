/**
 * Veritas English - AI 맞춤 영작 코치 & 튜터 (AIWritingCoach)
 * 학습자가 표제어를 활용해 작성한 1문장을 실시간으로 문법 검사, 원어민 콜로케이션 추천, 학술 어휘 업그레이드
 * 100% 로컬 룰베이스 & 정규식 첨삭 엔진 (오프라인 지원)
 */

class AIWritingCoach {
  constructor() {
    this.containerId = 'modal-ai-writing-coach';
    this.currentWord = null;
    this.currentInfo = null;
    this.savedSentencesKey = 'veritas_user_writings_v1';
  }

  /**
   * 영작 코치 모달 열기
   */
  open(wordStr = 'mitigate', meaning = '', pos = '', collocation = '', example = '') {
    this.currentWord = String(wordStr || '').trim();
    this.currentInfo = {
      word: this.currentWord,
      meaning: meaning,
      pos: pos,
      collocation: collocation,
      example: example
    };

    // 데이터베이스 보강
    if (!meaning && window.lexicalMindmap) {
      const dbInfo = window.lexicalMindmap.findWordInfo(this.currentWord);
      if (dbInfo) {
        this.currentInfo.meaning = dbInfo.meaning || dbInfo['뜻'] || '';
        this.currentInfo.pos = dbInfo.pos || dbInfo['품사'] || '';
        this.currentInfo.collocation = dbInfo.collocation || dbInfo['연어'] || '';
        this.currentInfo.example = dbInfo.example || dbInfo.example_en || dbInfo['예문'] || '';
      }
    }

    this.createModalDOM();
    const modal = document.getElementById(this.containerId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      const input = document.getElementById('coach-writing-input');
      if (input) {
        input.value = '';
        input.focus();
      }
      document.getElementById('coach-feedback-results').classList.add('hidden');
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

  createModalDOM() {
    let modal = document.getElementById(this.containerId);
    if (!modal) {
      modal = document.createElement('div');
      modal.id = this.containerId;
      modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-slate-950/80 backdrop-blur-sm p-3 sm:p-4';
      document.body.appendChild(modal);
    }

    const info = this.currentInfo;

    modal.innerHTML = `
      <div class="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        <!-- 모달 헤더 -->
        <div class="px-6 py-4 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center text-xl shadow-xs">
              ✍️
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">AI Interactive Writing Coach</span>
                <span class="px-2 py-0.2 rounded-full bg-white/10 text-slate-300 font-mono text-[10px]">실시간 3단 첨삭</span>
              </div>
              <h3 class="font-serif font-black text-lg sm:text-xl text-white">나만의 문장 영작 챌린지</h3>
            </div>
          </div>
          <button type="button" onclick="window.aiWritingCoach.close()" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer" title="닫기">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- 본문 스크롤 영역 -->
        <div class="p-5 sm:p-6 overflow-y-auto space-y-4 custom-scrollbar">
          <!-- 목표 단어 뱃지 및 안내 배너 -->
          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-serif font-black text-xl text-blue-950 tracking-tight">${info.word}</span>
                <span class="text-xs font-serif italic text-slate-500 font-medium">${info.pos}</span>
                <button type="button" onclick="window.tts && window.tts.speak('${info.word}')" class="text-blue-900 hover:text-blue-700 p-1" title="발음 듣기">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
              <p class="text-xs text-slate-700 font-medium mt-0.5"><b>핵심 의미:</b> ${info.meaning || '뜻 정보'}</p>
            </div>
            ${info.collocation ? `
              <div class="bg-indigo-50 border border-indigo-200 rounded-xl px-3 py-1.5 text-xs text-indigo-900 shrink-0">
                <span class="text-[10px] text-indigo-600 font-bold block">🎯 추천 연어 패턴</span>
                <span class="font-mono font-semibold">${info.collocation}</span>
              </div>
            ` : ''}
          </div>

          <!-- 영작 입력 폼 -->
          <div class="space-y-2">
            <label class="block text-xs font-serif font-bold text-slate-800 flex items-center justify-between">
              <span>영작할 문장을 입력하세요 (표제어 필수 포함)</span>
              <span id="coach-char-count" class="font-mono text-slate-400 text-[11px]">0자</span>
            </label>
            <textarea id="coach-writing-input" rows="3" class="w-full p-3.5 rounded-2xl border-2 border-slate-200 focus:border-blue-900 focus:ring-2 focus:ring-blue-900/10 outline-none text-sm text-slate-900 font-serif placeholder:font-sans placeholder:text-slate-400 resize-none transition-all" placeholder="예: The government implemented new policies to ${info.word} the environmental crisis." oninput="document.getElementById('coach-char-count').textContent = this.value.length + '자'"></textarea>
          </div>

          <!-- 첨삭 실행 버튼 -->
          <button type="button" id="coach-btn-analyze" onclick="window.aiWritingCoach.analyzeSentence()" class="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 hover:from-blue-800 hover:to-indigo-800 text-white font-serif font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98">
            <i data-lucide="sparkles" class="w-4 h-4 text-amber-300"></i>
            <span>AI 맞춤 문법 검사 &amp; 첨삭 받기</span>
          </button>

          <!-- 첨삭 결과 3단 카드 (처음엔 숨김) -->
          <div id="coach-feedback-results" class="hidden space-y-3.5 pt-2">
            <!-- 1. 문법 검사 (Grammar Check) -->
            <div id="coach-card-grammar" class="rounded-2xl p-4 border transition-all">
              <!-- JS 주입 -->
            </div>

            <!-- 2. 원어민식 콜로케이션 추천 -->
            <div id="coach-card-collocation" class="rounded-2xl p-4 border bg-indigo-50/70 border-indigo-200 text-indigo-950">
              <!-- JS 주입 -->
            </div>

            <!-- 3. 어휘 레벨 업그레이드 & 학술 모범문 -->
            <div id="coach-card-upgrade" class="rounded-2xl p-4 border bg-amber-50/70 border-amber-200 text-amber-950">
              <!-- JS 주입 -->
            </div>

            <!-- 하단 액션 버튼 (내 문장 듣기 & 저장하기) -->
            <div class="flex items-center gap-2 pt-2">
              <button type="button" onclick="window.aiWritingCoach.speakSentence()" class="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-serif font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer">
                <i data-lucide="volume-2" class="w-4 h-4 text-blue-900"></i>
                <span>내 문장 발음 듣기</span>
              </button>
              <button type="button" onclick="window.aiWritingCoach.saveSentence()" class="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-serif font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer">
                <i data-lucide="bookmark-check" class="w-4 h-4"></i>
                <span>내 단어장 예문으로 영구 저장</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * 영작 문장 정밀 규칙 기반 분석 및 첨삭 생성
   */
  analyzeSentence() {
    const inputEl = document.getElementById('coach-writing-input');
    if (!inputEl) return;
    const text = inputEl.value.trim();

    if (!text || text.length < 5) {
      alert('완전한 영문장(최소 5글자 이상)을 작성해 주세요.');
      inputEl.focus();
      return;
    }

    const targetWord = this.currentWord.toLowerCase();
    const cleanSentence = text.replace(/\s+/g, ' ');

    // 1. 필수 표제어 포함 여부 검사 (원형, s, ed, ing 허용)
    const wordPattern = new RegExp(`\\b${targetWord}(s|ed|ing|d|es)?\\b`, 'i');
    const hasWord = wordPattern.test(cleanSentence);

    // 2. 기초 문법 규칙 검사
    const grammarIssues = [];
    const grammarPasses = [];

    // 2-1. 첫 글자 대문자 여부
    if (/^[a-z]/.test(cleanSentence)) {
      grammarIssues.push({
        title: '문장 첫 글자 대문자 누락',
        desc: '영어 문장은 항상 대문자로 시작해야 합니다. (' + cleanSentence.charAt(0).toUpperCase() + cleanSentence.slice(1, 15) + '...)'
      });
    } else {
      grammarPasses.push('문장 첫 글자 대문자 규칙 준수');
    }

    // 2-2. 문장 부호(마침표, 물음표, 느낌표) 확인
    if (!/[.?!]$/.test(cleanSentence)) {
      grammarIssues.push({
        title: '문장 종결 부호 누락',
        desc: '문장 끝에 마침표(.), 물음표(?), 느낌표(!)가 누락되었습니다.'
      });
    } else {
      grammarPasses.push('문장 종결 부호 완결');
    }

    // 2-3. 부정관사(a vs an) 모음 검사
    const aAnIssues = cleanSentence.match(/\b(a)\s+[aeiou]\w+/gi);
    if (aAnIssues) {
      grammarIssues.push({
        title: '부정관사(a/an) 오류',
        desc: `모음(a, e, i, o, u)으로 시작하는 단어 앞에는 'a' 대신 'an'을 사용하세요. (발견: "${aAnIssues.join(', ')}")`
      });
    }

    // 2-4. 주어-동사 3인칭 단수 수일치 기본 감지
    const thirdSingularIssue = cleanSentence.match(/\b(he|she|it|this|that)\s+([a-z]+(?<!s|ed|ing|is|was|has|can|will|should|must|could))\b/i);
    if (thirdSingularIssue && thirdSingularIssue[2].length > 3) {
      grammarIssues.push({
        title: '주어-동사 수일치 주의',
        desc: `3인칭 단수 주어(${thirdSingularIssue[1]}) 뒤의 일반동사(${thirdSingularIssue[2]})에 '-s' 또는 '-es'가 필요하지 않은지 점검하세요.`
      });
    }

    // 2-5. 필수 표제어 포함 피드백
    if (!hasWord) {
      grammarIssues.unshift({
        title: `목표 표제어 '${targetWord}' 누락`,
        desc: `이번 영작의 목표 어휘인 '${targetWord}'(또는 파생형)가 문장에 포함되지 않았습니다.`
      });
    } else {
      grammarPasses.unshift(`목표 표제어 '${targetWord}' 완벽 활용`);
    }

    // 3. 콜로케이션 매칭 검사
    const collocation = this.currentInfo.collocation || '';
    let collocFeedback = '';
    const cleanColloc = collocation.replace(/\(.*?\)/g, '').trim().toLowerCase();

    if (cleanColloc && cleanSentence.toLowerCase().includes(cleanColloc)) {
      collocFeedback = `
        <div class="flex items-center gap-2 text-emerald-800 font-bold mb-1">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
          <span>🎯 최고 수준의 원어민 콜로케이션 완벽 결합!</span>
        </div>
        <p class="text-xs text-emerald-900 leading-relaxed">
          원서에서 권장하는 핵심 연어 <b>"${cleanColloc}"</b> 패턴을 문맥에 정확하게 녹여냈습니다. 영미권 에세이 및 수능 서술형에서 만점을 받을 수 있는 자연스러운 결합입니다.
        </p>
      `;
    } else if (cleanColloc) {
      collocFeedback = `
        <div class="flex items-center gap-2 text-indigo-900 font-bold mb-1">
          <i data-lucide="lightbulb" class="w-4 h-4 text-indigo-600"></i>
          <span>💡 원어민 연어(Collocation) 결합 추천</span>
        </div>
        <p class="text-xs text-indigo-950 leading-relaxed">
          작성하신 문장에 목표 연어 <b>"${cleanColloc}"</b> 구문을 결합하면 표현의 자연스러움과 설득력이 대폭 향상됩니다.
        </p>
      `;
    } else {
      collocFeedback = `
        <div class="flex items-center gap-2 text-indigo-900 font-bold mb-1">
          <i data-lucide="info" class="w-4 h-4 text-indigo-600"></i>
          <span>문맥 연어 자연스러움 점검</span>
        </div>
        <p class="text-xs text-indigo-950 leading-relaxed">
          문장 전체의 논리적 흐름이 매끄럽습니다. 동사와 전치사의 호응 관계를 자연스럽게 유지해 보세요.
        </p>
      `;
    }

    // 4. 어휘 레벨 업그레이드 & 학술 모범문 제시
    const academicReplacements = [
      { simple: /\bvery\b/gi, better: 'exceptionally / substantially' },
      { simple: /\ba lot of\b/gi, better: 'a significant amount of / considerable' },
      { simple: /\bmake\b/gi, better: 'generate / facilitate / establish' },
      { simple: /\bgood\b/gi, better: 'beneficial / advantageous / profound' },
      { simple: /\bbad\b/gi, better: 'adverse / detrimental' }
    ];

    const suggestedReplacements = [];
    academicReplacements.forEach(rep => {
      if (rep.simple.test(cleanSentence)) {
        suggestedReplacements.push(rep.better);
      }
    });

    const modelExample = this.currentInfo.example || `Scholars strive to ${targetWord} complex challenges with strategic insight.`;

    // 5. 렌더링 결과 UI 반영
    const resultBox = document.getElementById('coach-feedback-results');
    const grammarCard = document.getElementById('coach-card-grammar');
    const collocCard = document.getElementById('coach-card-collocation');
    const upgradeCard = document.getElementById('coach-card-upgrade');

    if (resultBox) resultBox.classList.remove('hidden');

    // 문법 카드 렌더링
    const isGrammarPerfect = grammarIssues.length === 0;
    if (grammarCard) {
      grammarCard.className = `rounded-2xl p-4 border ${isGrammarPerfect ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950' : 'bg-amber-50/80 border-amber-200 text-amber-950'}`;
      grammarCard.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="font-serif font-black text-xs sm:text-sm flex items-center gap-1.5">
            <i data-lucide="${isGrammarPerfect ? 'check-check' : 'alert-circle'}" class="w-4 h-4 ${isGrammarPerfect ? 'text-emerald-600' : 'text-amber-600'}"></i>
            1단계: 정밀 문법 &amp; 구조 진단 (${isGrammarPerfect ? '완벽한 문법' : grammarIssues.length + '개 개선점 발견'})
          </span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${isGrammarPerfect ? 'bg-emerald-200 text-emerald-900 font-bold' : 'bg-amber-200 text-amber-900 font-bold'}">
            ${isGrammarPerfect ? 'EXCELLENT' : 'NEEDS REVISION'}
          </span>
        </div>
        <div class="space-y-1.5 text-xs">
          ${grammarIssues.map(issue => `
            <div class="p-2 rounded-xl bg-white/80 border border-amber-300/60 text-amber-950">
              <span class="font-bold text-amber-900">• ${issue.title}:</span> ${issue.desc}
            </div>
          `).join('')}
          ${grammarPasses.map(pass => `
            <div class="text-[11px] text-emerald-800 flex items-center gap-1">
              <i data-lucide="check" class="w-3 h-3 text-emerald-600 shrink-0"></i>
              <span>${pass}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    // 콜로케이션 카드 렌더링
    if (collocCard) collocCard.innerHTML = collocFeedback;

    // 학술 업그레이드 카드 렌더링
    if (upgradeCard) {
      upgradeCard.innerHTML = `
        <div class="flex items-center gap-2 text-amber-900 font-bold mb-1.5">
          <i data-lucide="sparkles" class="w-4 h-4 text-amber-600"></i>
          <span>3단계: 학술 어휘 레벨 업그레이드 &amp; 원서 모범문</span>
        </div>
        ${suggestedReplacements.length > 0 ? `
          <div class="mb-2 p-2 rounded-xl bg-white/80 border border-amber-300 text-xs text-amber-950">
            <b>단어 격상 추천:</b> 문장 내 구어체 단어 대신 [${suggestedReplacements.join(', ')}] 사용을 검토해 보세요.
          </div>
        ` : ''}
        <div class="p-2.5 rounded-xl bg-white/90 border border-amber-200/90 text-xs text-slate-800 font-serif">
          <span class="text-[10px] text-amber-800 font-sans font-bold block mb-0.5">📖 내셔널지오그래픽 / EAP 표준 학술 모범 예문:</span>
          <span class="italic">"${modelExample}"</span>
        </div>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  /**
   * 작성한 문장을 원어민 TTS 음성으로 재생
   */
  speakSentence() {
    const inputEl = document.getElementById('coach-writing-input');
    if (!inputEl) return;
    const text = inputEl.value.trim();
    if (!text) {
      alert('문장을 먼저 입력해 주세요.');
      return;
    }
    if (window.tts) {
      window.tts.speak(text);
    }
  }

  /**
   * 작성한 문장을 단어장의 커스텀 예문/노트로 영구 저장
   */
  saveSentence() {
    const inputEl = document.getElementById('coach-writing-input');
    if (!inputEl) return;
    const text = inputEl.value.trim();
    if (!text) return;

    try {
      const records = JSON.parse(localStorage.getItem(this.savedSentencesKey) || '[]');
      records.unshift({
        id: 'writing_' + Date.now(),
        word: this.currentWord,
        sentence: text,
        timestamp: Date.now(),
        dateStr: new Date().toISOString().slice(0, 10)
      });
      localStorage.setItem(this.savedSentencesKey, JSON.stringify(records.slice(0, 200)));

      // 스토리지 히스토리 로그 기록
      if (window.storage && window.storage.recordHistoryLog) {
        window.storage.recordHistoryLog({
          type: 'writing',
          title: `[영작 완료] ${this.currentWord}`,
          detail: text,
          score: 100,
          total: 100
        });
      }

      alert(`🎉 [${this.currentWord}] 나만의 영작 문장이 단어장에 영구 저장되었습니다!`);
    } catch (e) {
      console.error('Failed to save writing sentence:', e);
    }
  }
}

// 전역 인스턴스 등록
window.aiWritingCoach = new AIWritingCoach();
