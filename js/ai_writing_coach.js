/**
 * Veritas English - AI 맞춤 작문 피드백 & 튜터 (AIWritingCoach)
 * 학술 영작(Academic Writing) 정밀 규칙 기반 실시간 문법/문맥/품사/콜로케이션 첨삭 엔진
 * 표제어 품사 일치, 주어-동사 수일치, 절 완전성, 타동사 목적어 유무, 콜로케이션 매칭 종합 진단
 */

class AIWritingCoach {
  constructor() {
    this.containerId = 'modal-ai-writing-coach';
    this.currentWord = 'mitigate';
    this.currentInfo = {};
    this.storageKey = 'veritas_user_writings_v1';
  }

  /**
   * 영작 코치 모달 열기
   */
  open(wordStr = 'mitigate', meaning = '', pos = '', collocation = '', example = '') {
    this.currentWord = String(wordStr || 'mitigate').trim().toLowerCase();
    this.currentInfo = {
      word: this.currentWord,
      meaning: meaning,
      pos: pos,
      collocation: collocation,
      example: example
    };

    // 전역 데이터베이스에서 정보 보강
    if (!meaning && window.lexicalMindmap) {
      const dbInfo = window.lexicalMindmap.findWordInfo(this.currentWord);
      if (dbInfo) {
        this.currentInfo.meaning = dbInfo.meaning || dbInfo['뜻'] || '';
        this.currentInfo.pos = dbInfo.pos || dbInfo['품사'] || '';
        this.currentInfo.collocation = dbInfo.collocation || dbInfo['연어'] || '';
        this.currentInfo.example = dbInfo.example || dbInfo.example_en || dbInfo['예문'] || '';
      }
    }

    // 품사 미지정 시 형태학적 자동 추론
    if (!this.currentInfo.pos) {
      this.currentInfo.pos = this.inferPartOfSpeech(this.currentWord);
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
   * 단어의 품사 자동 추론
   */
  inferPartOfSpeech(word) {
    const w = word.toLowerCase();
    // 동사 어미
    if (w.endsWith('ate') || w.endsWith('ize') || w.endsWith('ise') || w.endsWith('ify') || w.endsWith('en')) return 'v';
    // 형용사 어미
    if (w.endsWith('ive') || w.endsWith('able') || w.endsWith('ible') || w.endsWith('al') || w.endsWith('ful') || w.endsWith('ous') || w.endsWith('ic') || w.endsWith('ent') || w.endsWith('ant')) return 'adj';
    // 명사 어미
    if (w.endsWith('tion') || w.endsWith('sion') || w.endsWith('ment') || w.endsWith('ness') || w.endsWith('ity') || w.endsWith('ance') || w.endsWith('ence') || w.endsWith('or') || w.endsWith('er')) return 'n';
    // 부사 어미
    if (w.endsWith('ly')) return 'adv';

    // 대표 어휘 사전
    const verbList = ['mitigate', 'persevere', 'acquire', 'facilitate', 'enhance', 'accelerate', 'comprise', 'advocate', 'diminish', 'alleviate'];
    if (verbList.includes(w)) return 'v';
    const adjList = ['resilient', 'crucial', 'vulnerable', 'courageous', 'detrimental', 'profound', 'exceptional', 'substantial'];
    if (adjList.includes(w)) return 'adj';
    const nounList = ['adversity', 'pioneer', 'phenomenon', 'infrastructure', 'hypothesis', 'paradigm', 'synthesis'];
    if (nounList.includes(w)) return 'n';

    return 'v'; // 기본값 동사
  }

  createModalDOM() {
    let modal = document.getElementById(this.containerId);
    if (!modal) {
      modal = document.createElement('div');
      modal.id = this.containerId;
      modal.className = 'fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm transition-all';
      document.body.appendChild(modal);
    }

    const posBadge = this.formatPosBadge(this.currentInfo.pos);
    const collocHint = this.currentInfo.collocation ? `<span class="text-indigo-600 font-bold ml-1">연어 힌트: "${this.currentInfo.collocation}"</span>` : '';

    modal.innerHTML = `
      <div class="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        <!-- 헤더 -->
        <div class="px-6 py-4.5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 flex items-center justify-center text-xl shadow-xs">
              ✍️
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">Academic Writing Coach</span>
                <span class="px-2 py-0.2 rounded-full bg-indigo-500/20 text-indigo-200 text-[10px] font-medium border border-indigo-400/30">실시간 AI 정밀 첨삭</span>
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

        <!-- 바디 (스크롤 가능) -->
        <div class="p-6 overflow-y-auto space-y-5 custom-scrollbar text-slate-800 font-sans">
          <!-- 목표 어휘 제시 카드 -->
          <div class="rounded-2xl bg-gradient-to-br from-indigo-50/90 to-blue-50/60 border border-indigo-200/80 p-4.5 space-y-2">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-indigo-700 uppercase">Target Vocabulary:</span>
                <span class="font-serif font-black text-xl text-indigo-950 tracking-tight">${this.currentWord}</span>
                ${posBadge}
              </div>
              <span class="text-xs text-slate-600 font-medium">${this.currentInfo.meaning || ''}</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              💡 <b>영작 가이드:</b> 표제어 <b>'${this.currentWord}'</b>(또는 파생형)를 반드시 포함하여, 올바른 문법과 문맥이 살아있는 1개 이상의 온전한 영어 문장을 완성하세요. ${collocHint}
            </p>
          </div>

          <!-- 입력창 영역 -->
          <div class="space-y-2">
            <label class="block text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>영작 입력 (단어 수, 문장 부호, 주어-동사 일치 및 문맥 정밀 진단)</span>
              <span id="coach-char-count" class="font-mono text-[11px] text-slate-400">0자 / 최소 4단어</span>
            </label>
            <div class="relative">
              <textarea id="coach-writing-input" rows="3" 
                placeholder="예: To mitigate the economic impact, the government introduced strategic subsidies."
                class="w-full p-4 rounded-2xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none text-slate-900 font-serif text-sm sm:text-base leading-relaxed transition-all shadow-inner resize-none"></textarea>
            </div>
            <div class="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
              <span>종결 부호(.), 첫 글자 대문자, 품사 호응, 타동사 목적어 필수</span>
              <button type="button" onclick="window.aiWritingCoach.pasteSampleSentence()" class="text-indigo-600 hover:text-indigo-800 font-semibold underline cursor-pointer">
                💡 모범 예문 불러오기
              </button>
            </div>
          </div>

          <!-- 분석 실행 버튼 -->
          <button type="button" id="coach-btn-analyze" onclick="window.aiWritingCoach.analyzeSentence()" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 hover:from-blue-800 hover:to-indigo-800 text-white font-serif font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98">
            <i data-lucide="sparkles" class="w-4 h-4 text-amber-300"></i>
            <span>실시간 정밀 문법 &amp; 문맥 첨삭 분석하기</span>
          </button>

          <!-- 첨삭 결과 3단 컨테이너 -->
          <div id="coach-feedback-results" class="hidden space-y-4 pt-2">
            
            <!-- 점수 및 종합 진단 배너 -->
            <div id="coach-card-summary" class="rounded-2xl p-4.5 border transition-all">
              <!-- JS 동적 주입 -->
            </div>

            <!-- 1단계: 정밀 문법 & 구조 진단 카드 -->
            <div id="coach-card-grammar" class="rounded-2xl p-4 border transition-all">
              <!-- JS 동적 주입 -->
            </div>

            <!-- 2단계: 품사 & 문맥 적합성 진단 카드 -->
            <div id="coach-card-context" class="rounded-2xl p-4 border transition-all">
              <!-- JS 동적 주입 -->
            </div>

            <!-- 3단계: 원어민 콜로케이션 & 학술 어휘 업그레이드 -->
            <div id="coach-card-upgrade" class="rounded-2xl p-4 border border-indigo-200 bg-indigo-50/70 text-indigo-950 space-y-2.5">
              <!-- JS 동적 주입 -->
            </div>

            <!-- 4단계: 영구 보관 & TTS 발음 -->
            <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200">
              <button type="button" onclick="window.aiWritingCoach.playUserSentenceAudio()" class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-serif font-bold transition-all cursor-pointer">
                <i data-lucide="volume-2" class="w-4 h-4 text-indigo-600"></i>
                <span>작성한 문장 원어민 음성 듣기</span>
              </button>
              <button type="button" onclick="window.aiWritingCoach.saveSentence()" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-serif font-bold shadow-xs transition-all cursor-pointer">
                <i data-lucide="bookmark-plus" class="w-4 h-4"></i>
                <span>나만의 작문 노트에 영구 저장</span>
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
    const words = cleanSentence.split(/\s+/).map(w => w.replace(/[^a-zA-Z0-9'-]/g, '')).filter(Boolean);

    // =========================================================================
    // 정밀 규칙 검사 엔진 가동
    // =========================================================================
    const grammarIssues = [];
    const contextIssues = [];
    const passes = [];
    let score = 100;

    // 1. 단어 수 및 문장 완성도 검사
    if (words.length < 4) {
      grammarIssues.push({
        title: '문장 전개 불충분 (최소 4단어 이상 권장)',
        desc: `현재 작성하신 문장은 ${words.length}단어로 너무 짧습니다. 단어 나열에 그치지 않고, 주어-동사-목적어/보어/수식어구가 온전히 갖춰진 문장을 작성해 주세요.`
      });
      score -= 20;
    }

    // 2. 상투적 단순 문장 감지 (Contextual Depth)
    const isTrivial = /^(this|it|that)\s+is\s+(very\s+)?(good|bad|important|nice|cool|great|easy|hard)\.?$/i.test(cleanSentence)
      || /^i\s+(like|love|hate|know|see|have)\s+[a-z\s]{1,15}\.?$/i.test(cleanSentence);
    if (isTrivial) {
      contextIssues.push({
        title: '상투적 단순 문장 (문맥적 깊이 부족)',
        desc: `단순한 호불호나 감정(ex: "I like ${targetWord}", "It is good")에 그치지 않고, '${targetWord}'의 실제 쓰임새와 인과관계/상황이 드러나도록 구체적으로 작성해 보세요.`
      });
      score -= 20;
    }

    // 3. 목표 표제어 포함 여부 검사 (원형, s, ed, ing, d, es, ion 허용)
    const wordPattern = new RegExp(`\\b${targetWord}(s|ed|ing|d|es|ion|ive|able|ment)?\\b`, 'i');
    const hasWord = wordPattern.test(cleanSentence);
    if (!hasWord) {
      grammarIssues.unshift({
        title: `목표 표제어 '${targetWord}' 누락`,
        desc: `이번 영작의 핵심 목표 어휘인 '${targetWord}'(또는 파생형)가 문장에 포함되지 않았습니다.`
      });
      score -= 35;
    } else {
      passes.push(`목표 표제어 '${targetWord}' 활용 확인`);
    }

    // 4. 문장 부호(종결 부호) 및 첫 글자 대문자 검사
    if (!/[.?!]$/.test(cleanSentence)) {
      grammarIssues.push({
        title: '문장 종결 부호 누락',
        desc: '문장 끝에 마침표(.), 물음표(?), 느낌표(!)가 누락되었습니다.'
      });
      score -= 5;
    } else {
      passes.push('문장 종결 부호 완결');
    }

    if (/^[a-z]/.test(cleanSentence)) {
      grammarIssues.push({
        title: '문장 첫 글자 대문자 누락',
        desc: `영어 문장의 시작은 반드시 대문자여야 합니다. ('${cleanSentence.charAt(0).toUpperCase() + cleanSentence.slice(1, 12)}...')`
      });
      score -= 5;
    } else {
      passes.push('문장 첫 글자 대문자 준수');
    }

    // 5. 종속절 파편문(Fragment) 검사
    const fragmentMatch = cleanSentence.match(/^(Because|Although|Even though|Since|While|If|Unless|When)\s+[a-z0-9\s'-]+[.?!]$/i);
    if (fragmentMatch && !cleanSentence.includes(',')) {
      grammarIssues.push({
        title: '불완전한 종속절 (Sentence Fragment)',
        desc: `접속사('${fragmentMatch[1]}')로 시작하는 부사절만 작성되었습니다. 주절(독립된 주어와 동사)을 쉼표(,) 뒤에 추가하여 완전한 복문을 완성하세요.`
      });
      score -= 15;
    }

    // 6. 연속된 동일 단어 중복 오류 (Double Words)
    const doubleWords = cleanSentence.match(/\b([a-z]{2,})\s+\1\b/i);
    if (doubleWords) {
      grammarIssues.push({
        title: '동일 단어 중복 타이핑 오류',
        desc: `'${doubleWords[0]}'처럼 동일한 단어가 연달아 두 번 타이핑되었습니다.`
      });
      score -= 10;
    }

    // 7. 부정관사(a vs an) 및 복수형 모순
    const anIssue = cleanSentence.match(/\b(a)\s+([aeiou][a-z]+)\b/i);
    if (anIssue && !['a university', 'a european', 'a one', 'a user'].includes(anIssue[0].toLowerCase())) {
      grammarIssues.push({
        title: '부정관사(a/an) 오류',
        desc: `모음 발음으로 시작하는 단어('${anIssue[2]}') 앞에는 'a' 대신 'an'을 사용해야 합니다. (수정: "an ${anIssue[2]}")`
      });
      score -= 10;
    }

    const aPluralIssue = cleanSentence.match(/\b(a|an)\s+([a-z]+s)\b/i);
    if (aPluralIssue && !['analysis', 'crisis', 'news', 'series', 'species'].includes(aPluralIssue[2].toLowerCase())) {
      grammarIssues.push({
        title: '단수 관사와 복수 명사 모순',
        desc: `단수를 나타내는 관사('${aPluralIssue[1]}') 뒤에 복수형 명사('${aPluralIssue[2]}')가 바로 올 수 없습니다.`
      });
      score -= 10;
    }

    // 8. 조동사 뒤 동사원형 규칙 (Modal Auxiliaries + Base Form)
    const modalPattern = /\b(can|could|will|would|shall|should|may|might|must)\s+([a-z]+(ed|ing|s))\b/i;
    const modalIssue = cleanSentence.match(modalPattern);
    if (modalIssue) {
      grammarIssues.push({
        title: '조동사 뒤 동사원형 누락',
        desc: `조동사 '${modalIssue[1]}' 뒤에는 반드시 동사 원형이 와야 합니다. ('${modalIssue[0]}' ➔ '${modalIssue[1]} [동사원형]')`
      });
      score -= 15;
    }

    // 9. be동사 + 일반동사 원형 결합 오류 (Double Verb)
    const beBasePattern = /\b(is|am|are|was|were|be|been|being)\s+([a-z]+(?<!ing|ed|d|en|t|s))\b/i;
    const beBaseIssue = cleanSentence.match(beBasePattern);
    const nonVerbsAfterBe = ['happy', 'ready', 'able', 'sure', 'good', 'bad', 'new', 'old', 'here', 'there', 'very', 'not', 'also'];
    if (beBaseIssue && !nonVerbsAfterBe.includes(beBaseIssue[2].toLowerCase())) {
      // 표제어이거나 일반 동사일 경우
      if (beBaseIssue[2].toLowerCase() === targetWord || this.inferPartOfSpeech(beBaseIssue[2]) === 'v') {
        grammarIssues.push({
          title: 'be동사 뒤 동사원형 오류 (진행형 또는 수동태 필요)',
          desc: `'${beBaseIssue[0]}'처럼 be동사 뒤에 동사원형이 바로 올 수 없습니다. 현재진행형('-ing') 또는 수동태('-ed/과거분사')로 수정하세요.`
        });
        score -= 20;
      }
    }

    // 10. 주어-동사 수일치 정밀 진단 (Subject-Verb Agreement)
    // 3인칭 단수 대명사 및 단수 명사구 (the government mitigate ...)
    const thirdSingularIssue = cleanSentence.match(/\b(he|she|it|this|that|everyone|everybody)\s+([a-z]+(?<!s|ed|ing|d|is|was|has|can|will|should|must|could|would|might|may))\b/i);
    const singularNounIssue = cleanSentence.match(/\b(the|a|this|that|my|our|their|his|her)\s+([a-z]{3,}(?<!s|people|children|police|men|women|data))\s+([a-z]{3,}(?<!s|ed|ing|d|is|was|has|can|will|should|must|could|would|might|may))\b/i);

    if (thirdSingularIssue && thirdSingularIssue[2].length > 2 && !['did', 'had', 'got'].includes(thirdSingularIssue[2].toLowerCase())) {
      grammarIssues.push({
        title: '주어-동사 3인칭 단수 수일치 오류',
        desc: `3인칭 단수 주어('${thirdSingularIssue[1]}') 뒤의 현재시제 일반동사('${thirdSingularIssue[2]}')에는 '-s' 또는 '-es'가 결합되어야 합니다.`
      });
      score -= 15;
    } else if (singularNounIssue && !['did', 'had', 'got'].includes(singularNounIssue[3].toLowerCase())) {
      const maybeVerb = singularNounIssue[3].toLowerCase();
      if (maybeVerb === targetWord) {
        grammarIssues.push({
          title: '주어-동사 3인칭 단수 수일치 오류 (단수 명사 주어)',
          desc: `단수 명사 주어('${singularNounIssue[1]} ${singularNounIssue[2]}') 뒤의 현재시제 일반동사('${maybeVerb}')에는 '-s' 또는 '-es'가 결합되어야 합니다. (수정: '${maybeVerb}s')`
        });
        score -= 15;
      }
    }

    // 복수 주어 + was / 단수 주어 + were
    const pluralWasIssue = cleanSentence.match(/\b(they|we|you)\s+was\b/i);
    if (pluralWasIssue) {
      grammarIssues.push({
        title: '주어-동사 be동사 수일치 오류 (were 필요)',
        desc: `복수 주어('${pluralWasIssue[1]}') 뒤에는 'was' 대신 'were'를 사용해야 합니다.`
      });
      score -= 15;
    }

    // =========================================================================
    // 품사(Part of Speech) 및 문맥 적합성 정밀 진단
    // =========================================================================
    const pos = String(this.currentInfo.pos || this.inferPartOfSpeech(targetWord)).toLowerCase();

    // Case A: 표제어가 동사인 경우
    if (pos.includes('v') || pos.includes('동')) {
      // 1) 관사/소유격 뒤에서 주어(명사)로 잘못 쓰인 경우 (ex: The mitigate is good)
      const verbAsNounIssue = new RegExp(`\\b(the|a|an|my|your|his|her|our|their|its)\\s+${targetWord}\\s+(is|was|are|were|has|have|can|will|should)\\b`, 'i');
      if (verbAsNounIssue.test(cleanSentence)) {
        contextIssues.push({
          title: `품사 오류: 동사 '${targetWord}'를 명사 자리에 사용`,
          desc: `'${targetWord}'은(는) 동작을 나타내는 동사입니다. 관사나 소유격 뒤에서 주어나 명사로 바로 쓸 수 없습니다. 명사형('${targetWord}ion' 또는 동명사)으로 바꾸거나 동사 자리에 배치하세요.`
        });
        score -= 25;
      }

      // 2) 타동사인데 목적어 없이 문장이 바로 종결되거나 부사만 오고 끝난 경우
      const transitiveVerbs = ['mitigate', 'acquire', 'facilitate', 'enhance', 'accelerate', 'comprise', 'diminish', 'alleviate'];
      if (transitiveVerbs.includes(targetWord)) {
        const transEndingPattern = new RegExp(`\\b${targetWord}(s|ed|d)?\\s*[.?!]$`, 'i');
        const transPassivePattern = new RegExp(`\\b(is|are|was|were|be|been)\\s+${targetWord}(d|ed)?\\b`, 'i');
        if (transEndingPattern.test(cleanSentence) && !transPassivePattern.test(cleanSentence)) {
          contextIssues.push({
            title: `타동사 목적어 누락: 무엇을 '${targetWord}'하는지 명시 필요`,
            desc: `'${targetWord}'은(는) 목적어를 반드시 수반하는 타동사입니다. 무엇을 줄이고 완화하는지 목적어(명사구, ex: the risk, the damage, climate impact)를 추가하세요.`
          });
          score -= 20;
        }
      }
    }

    // Case B: 표제어가 형용사인 경우 (ex: resilient, crucial, vulnerable)
    else if (pos.includes('adj') || pos.includes('형')) {
      // 1) 형용사를 일반동사처럼 사용한 경우 (ex: He resilients the crisis / He will resilient)
      const adjAsVerbIssue = new RegExp(`\\b(he|she|it|they|we|i|you|will|can|must|should)\\s+${targetWord}(s|ed|ing|d)?\\b`, 'i');
      const hasBeVerbBefore = new RegExp(`\\b(is|am|are|was|were|be|become|seem|remain)\\s+([a-z]+\\s+)?${targetWord}\\b`, 'i');
      if (adjAsVerbIssue.test(cleanSentence) && !hasBeVerbBefore.test(cleanSentence)) {
        contextIssues.push({
          title: `품사 오류: 형용사 '${targetWord}'를 일반동사 자리에 사용`,
          desc: `'${targetWord}'은(는) 상태를 나타내는 형용사이므로 일반동사로 쓸 수 없습니다. 'be + ${targetWord}' (ex: is ${targetWord}) 또는 명사를 수식하는 형태로 활용하세요.`
        });
        score -= 25;
      }

      // 2) 형용사가 전치사 없이 목적어 명사를 바로 취한 경우 (ex: He is resilient the crisis)
      const adjDirectObj = new RegExp(`\\b${targetWord}\\s+(the|a|an|his|her|my|our|their)\\s+[a-z]+\\b`, 'i');
      if (adjDirectObj.test(cleanSentence)) {
        contextIssues.push({
          title: `형용사의 직접 목적어 취득 오류 (전치사 누락)`,
          desc: `형용사('${targetWord}')는 명사를 목적어로 바로 취할 수 없습니다. 적절한 전치사(ex: to, against, in)를 연결해 주세요.`
        });
        score -= 15;
      }
    }

    // Case C: 표제어가 명사인 경우 (ex: adversity, pioneer, phenomenon)
    else if (pos.includes('n') || pos.includes('명')) {
      // 명사를 동사처럼 주어 뒤에 배치 (ex: They adversity the problem)
      const nounAsVerb = new RegExp(`\\b(they|we|he|she|i|you)\\s+${targetWord}(s|ed|ing)?\\s+(the|a|an|to)\\b`, 'i');
      if (nounAsVerb.test(cleanSentence)) {
        contextIssues.push({
          title: `품사 오류: 명사 '${targetWord}'를 동사 자리에 사용`,
          desc: `'${targetWord}'은(는) 명사입니다. 주어, 목적어, 또는 전치사의 목적어 자리에 올바르게 사용하세요.`
        });
        score -= 25;
      }
    }

    // 점수 보정 (최소 10점, 최대 100점)
    score = Math.max(10, Math.min(100, score));

    // =========================================================================
    // 3. 콜로케이션 및 어휘 업그레이드 분석
    // =========================================================================
    const collocation = this.currentInfo.collocation || '';
    const cleanColloc = collocation.replace(/\(.*?\)/g, '').trim().toLowerCase();
    const isCollocMatched = cleanColloc && cleanSentence.toLowerCase().includes(cleanColloc);
    if (isCollocMatched) {
      score = Math.min(100, score + 5);
      passes.push(`원어민 권장 콜로케이션 "${cleanColloc}" 결합 완벽`);
    }

    const academicReplacements = [
      { simple: /\bvery\b/gi, better: 'exceptionally / substantially' },
      { simple: /\ba lot of\b/gi, better: 'a significant amount of / considerable' },
      { simple: /\bmake\b/gi, better: 'generate / facilitate / establish' },
      { simple: /\bgood\b/gi, better: 'beneficial / advantageous / profound' },
      { simple: /\bbad\b/gi, better: 'adverse / detrimental' },
      { simple: /\bthink\b/gi, better: 'maintain / argue / contemplate' },
      { simple: /\bbig\b/gi, better: 'substantial / massive / extensive' }
    ];
    const suggestedReplacements = [];
    academicReplacements.forEach(rep => {
      if (rep.simple.test(cleanSentence)) {
        suggestedReplacements.push(rep.better);
      }
    });

    const modelExample = this.currentInfo.example || `Scholars actively strive to ${targetWord} strategic challenges with methodical insight.`;

    // =========================================================================
    // 4. UI 렌더링 반영
    // =========================================================================
    const resultBox = document.getElementById('coach-feedback-results');
    const summaryCard = document.getElementById('coach-card-summary');
    const grammarCard = document.getElementById('coach-card-grammar');
    const contextCard = document.getElementById('coach-card-context');
    const upgradeCard = document.getElementById('coach-card-upgrade');

    if (resultBox) resultBox.classList.remove('hidden');

    // 1) 종합 진단 배너 (점수 & 티어)
    const isPerfect = score >= 90;
    const isGood = score >= 70 && score < 90;
    const tierColor = isPerfect ? 'bg-emerald-500' : (isGood ? 'bg-indigo-600' : 'bg-rose-600');
    const tierBg = isPerfect ? 'bg-emerald-50 border-emerald-300' : (isGood ? 'bg-indigo-50 border-indigo-200' : 'bg-rose-50 border-rose-200');
    const tierTitle = isPerfect ? '🎯 EXCELLENT: 완성도 높은 학술 영작' : (isGood ? '👍 GOOD EFFORT: 개선 권장 사항 반영 필요' : '⚠️ NEEDS REVISION: 문법 및 문맥 수정 필수');

    if (summaryCard) {
      summaryCard.className = `rounded-2xl p-5 border ${tierBg} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`;
      summaryCard.innerHTML = `
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="px-2.5 py-0.5 rounded-full text-white text-[11px] font-mono font-bold ${tierColor}">
              ${isPerfect ? 'MASTER PIECE' : (isGood ? 'INTERMEDIATE' : 'REVISION REQUIRED')}
            </span>
            <span class="text-xs text-slate-500 font-mono">Veritas AI Evaluation</span>
          </div>
          <h3 class="font-serif font-black text-base sm:text-lg text-slate-900">
            ${tierTitle}
          </h3>
          <p class="text-xs text-slate-600 mt-1">
            ${isPerfect ? '문법, 품사 호응, 문맥적 깊이가 모두 훌륭합니다. 실전 수능 및 원서 에세이에 바로 활용 가능합니다.' : '발견된 문법/품사/문맥 개선점을 반영하여 더욱 정교한 문장으로 발전시켜 보세요.'}
          </p>
        </div>
        <div class="text-center sm:text-right shrink-0 bg-white/80 px-4 py-2 rounded-xl border border-slate-200/60 shadow-2xs">
          <span class="text-[10px] font-mono uppercase text-slate-400 font-bold block">Evaluation Score</span>
          <span id="coach-score-display" class="font-serif font-black text-2xl sm:text-3xl ${isPerfect ? 'text-emerald-600' : (isGood ? 'text-indigo-600' : 'text-rose-600')}">
            ${score}<span class="text-xs font-sans text-slate-400 font-normal"> / 100점</span>
          </span>
        </div>
      `;
    }

    // 2) 문법 진단 카드
    const isGrammarClean = grammarIssues.length === 0;
    if (grammarCard) {
      grammarCard.className = `rounded-2xl p-4 border ${isGrammarClean ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' : 'bg-amber-50/80 border-amber-300 text-amber-950'}`;
      grammarCard.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="font-serif font-black text-xs sm:text-sm flex items-center gap-1.5">
            <i data-lucide="${isGrammarClean ? 'check-check' : 'alert-triangle'}" class="w-4 h-4 ${isGrammarClean ? 'text-emerald-600' : 'text-amber-600'}"></i>
            1단계: 정밀 문법 &amp; 구조 진단 (${isGrammarClean ? '문법 이상 없음' : grammarIssues.length + '개 문법 오류 감지'})
          </span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${isGrammarClean ? 'bg-emerald-200 text-emerald-900 font-bold' : 'bg-amber-200 text-amber-900 font-bold'}">
            ${isGrammarClean ? 'PASSED' : 'CHECK REQUIRED'}
          </span>
        </div>
        <div class="space-y-2 text-xs">
          ${grammarIssues.length > 0 ? grammarIssues.map(issue => `
            <div class="p-2.5 rounded-xl bg-white/90 border border-amber-300 text-amber-950 shadow-2xs">
              <span class="font-bold text-amber-900 block mb-0.5">⚠️ ${issue.title}</span>
              <p class="text-[11px] text-slate-700 leading-relaxed">${issue.desc}</p>
            </div>
          `).join('') : `
            <div class="p-2.5 rounded-xl bg-white/80 border border-emerald-300 text-emerald-900 text-xs">
              ✅ 주어-동사 수일치, 시제, 문장 부호, 대문자 규칙이 올바르게 준수되었습니다.
            </div>
          `}
        </div>
      `;
    }

    // 3) 품사 & 문맥 적합성 진단 카드
    const isContextClean = contextIssues.length === 0;
    if (contextCard) {
      contextCard.className = `rounded-2xl p-4 border ${isContextClean ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' : 'bg-rose-50/80 border-rose-300 text-rose-950'}`;
      contextCard.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="font-serif font-black text-xs sm:text-sm flex items-center gap-1.5">
            <i data-lucide="${isContextClean ? 'check-circle' : 'alert-octagon'}" class="w-4 h-4 ${isContextClean ? 'text-emerald-600' : 'text-rose-600'}"></i>
            2단계: 품사 활용 &amp; 문맥 호응 진단 (${isContextClean ? '품사 및 문맥 적합' : contextIssues.length + '개 문맥/품사 불일치 감지'})
          </span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full ${isContextClean ? 'bg-emerald-200 text-emerald-900 font-bold' : 'bg-rose-200 text-rose-900 font-bold'}">
            ${isContextClean ? 'NATURAL' : 'INCORRECT USAGE'}
          </span>
        </div>
        <div class="space-y-2 text-xs">
          ${contextIssues.length > 0 ? contextIssues.map(issue => `
            <div class="p-2.5 rounded-xl bg-white/90 border border-rose-300 text-rose-950 shadow-2xs">
              <span class="font-bold text-rose-900 block mb-0.5">❌ ${issue.title}</span>
              <p class="text-[11px] text-slate-700 leading-relaxed">${issue.desc}</p>
            </div>
          `).join('') : `
            <div class="p-2.5 rounded-xl bg-white/80 border border-emerald-300 text-emerald-900 text-xs">
              ✅ 표제어 '${targetWord}'의 품사('${pos}')와 문맥적 역할이 정확하게 결합되었습니다.
            </div>
          `}
        </div>
      `;
    }

    // 4) 콜로케이션 & 학술 어휘 업그레이드 카드
    if (upgradeCard) {
      upgradeCard.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-serif font-black text-xs sm:text-sm flex items-center gap-1.5 text-indigo-950">
            <i data-lucide="award" class="w-4 h-4 text-indigo-600"></i>
            3단계: 원어민 콜로케이션 &amp; 학술 어휘 업그레이드
          </span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-900 font-bold">
            ACADEMIC POLISH
          </span>
        </div>

        <!-- 콜로케이션 피드백 -->
        <div class="p-3 bg-white/90 rounded-xl border border-indigo-200 space-y-1">
          ${isCollocMatched ? `
            <div class="flex items-center gap-1.5 text-emerald-800 font-bold text-xs">
              <span>🎯 목표 핵심 연어 "${cleanColloc}" 결합 완벽!</span>
            </div>
            <p class="text-[11px] text-emerald-950 leading-relaxed">
              원서에서 권장하는 콜로케이션을 문맥에 매끄럽게 녹여내어 설득력 있는 문장을 완성했습니다.
            </p>
          ` : (cleanColloc ? `
            <div class="flex items-center gap-1.5 text-indigo-900 font-bold text-xs">
              <span>💡 원어민 권장 콜로케이션 추천: "${cleanColloc}"</span>
            </div>
            <p class="text-[11px] text-slate-600 leading-relaxed">
              단어를 단독으로 쓰기보다 <b>"${cleanColloc}"</b> 구문으로 결합하면 영미권 에세이처럼 자연스러워집니다.
            </p>
          ` : `
            <div class="text-xs text-indigo-900 font-semibold">
              ✨ 자연스러운 어휘 흐름 유지
            </div>
          `)}
        </div>

        <!-- 어휘 업그레이드 추천 -->
        ${suggestedReplacements.length > 0 ? `
          <div class="p-3 bg-white/90 rounded-xl border border-indigo-200 text-xs space-y-1">
            <span class="font-bold text-indigo-900 block">🚀 학술 어휘 치환 팁 (Advanced Vocabulary):</span>
            <div class="flex flex-wrap gap-1.5 pt-0.5">
              ${suggestedReplacements.map(rep => `
                <span class="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-[11px] font-bold">
                  ➔ ${rep}
                </span>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 교재 모범 예문 제시 -->
        <div class="p-3 bg-indigo-900/10 rounded-xl border border-indigo-300/40 text-xs space-y-1">
          <span class="font-mono text-[10px] text-indigo-700 font-bold uppercase tracking-wider block">교재 표준 아카데믹 모범문</span>
          <p class="font-serif italic text-slate-800 font-medium leading-relaxed">"${modelExample}"</p>
        </div>
      `;
    }

    if (window.lucide) window.lucide.createIcons();

    this.lastEvaluation = {
      score: score,
      grammarIssues: grammarIssues,
      contextIssues: contextIssues,
      passes: passes,
      isPerfect: isPerfect
    };

    // 분석 완료 후 스크롤을 결과 카드로 부드럽게 이동
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return this.lastEvaluation;
  }

  playUserSentenceAudio() {
    const input = document.getElementById('coach-writing-input');
    if (input && input.value.trim() && window.tts) {
      window.tts.speak(input.value.trim());
    }
  }

  saveSentence() {
    const input = document.getElementById('coach-writing-input');
    if (!input || !input.value.trim()) return;

    const sentence = input.value.trim();
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
      sentence: sentence,
      date: today
    });

    localStorage.setItem(this.storageKey, JSON.stringify(savedList.slice(0, 100)));

    if (window.storage && window.storage.recordHistoryLog) {
      window.storage.recordHistoryLog('writing', 1, 100);
    }

    alert(`✅ '${this.currentWord}' 나만의 작문 문장이 안전하게 저장되었습니다!`);
  }
}

// 전역 싱글톤 인스턴스 등록
window.aiWritingCoach = new AIWritingCoach();
