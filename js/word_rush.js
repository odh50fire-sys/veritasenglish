/**
 * Veritas English - 워드 러시: 서바이벌 타임어택 (Word Rush: Active Recall)
 * 능동적 인출 훈련(Active Recall) & 콤보 피버 모드 & 4대 챌린지 모드
 * 에빙하우스 망각곡선(SRS), 취약 단어(Weak Words), 365일 잔디 심기 및 EXP 보상 실시간 연동 엔진
 */

class WordRushEngine {
  constructor() {
    this.modalId = 'modal-word-rush-game';
    this.soundEnabled = true;
    this.audioCtx = null;

    // 게임 상태 머신
    this.state = 'idle'; // 'idle' | 'ready' | 'playing' | 'fever' | 'gameover'
    this.mode = 'shuffle'; // 'en-to-ko' | 'ko-to-en' | 'cloze' | 'shuffle'
    this.baseDuration = 60; // 60초
    this.timeLeft = 60;
    this.timerInterval = null;

    // 점수 및 콤보 지표
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.feverGauge = 0; // 0 ~ 100%
    this.feverTimer = null;
    this.feverTimeLeft = 0;

    // 문제 데이터 풀
    this.deck = [];
    this.currentQuestionIndex = 0;
    this.currentQuestion = null;
    this.sessionResults = [];
    this.overcomeWeakIds = new Set();

    // 단축키 핸들러 바인딩
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  /**
   * Web Audio API 사운드 초기화 및 합성기 (외부 오디오 파일 불필요, 100% 오프라인 동작)
   */
  initAudio() {
    if (this.audioCtx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn('Web Audio API not supported:', e);
    }
  }

  playTone(freq, type = 'sine', duration = 0.12, gainVal = 0.15) {
    if (!this.soundEnabled) return;
    this.initAudio();
    if (!this.audioCtx) return;

    try {
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  playCorrectSound(combo = 1) {
    // 콤보가 높을수록 음정이 점진적으로 상승 (도-레-미-솔-라-도)
    const baseFreqs = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];
    const fIdx = Math.min(baseFreqs.length - 1, Math.floor(combo / 2));
    this.playTone(baseFreqs[fIdx], 'triangle', 0.14, 0.2);
  }

  playWrongSound() {
    this.playTone(180, 'sawtooth', 0.25, 0.2);
  }

  playFeverSound() {
    if (!this.soundEnabled) return;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.15, 0.22), idx * 80);
    });
  }

  playTimeUpSound() {
    if (!this.soundEnabled) return;
    [440, 370, 311, 261].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'sine', 0.2, 0.2), idx * 110);
    });
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    const btn = document.getElementById('wr-sound-toggle-btn');
    if (btn) {
      btn.innerHTML = this.soundEnabled
        ? `<i data-lucide="volume-2" class="w-4 h-4 text-emerald-400"></i><span>사운드 켜짐</span>`
        : `<i data-lucide="volume-x" class="w-4 h-4 text-slate-500"></i><span>음소거</span>`;
      if (window.lucide) window.lucide.createIcons();
    }
  }

  /**
   * 게임 모달 열기 및 초기 화면 준비
   */
  openGameModal(targetMode = 'shuffle') {
    this.mode = targetMode;
    this.initAudio();

    let modal = document.getElementById(this.modalId);
    if (!modal) {
      modal = document.createElement('div');
      modal.id = this.modalId;
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md transition-all select-none';
      document.body.appendChild(modal);
    }

    this.renderLobby();
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  closeGameModal() {
    this.stopGame();
    const modal = document.getElementById(this.modalId);
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  /**
   * 로비 화면 (모드 선택 및 플레이어 덱 준비)
   */
  renderLobby() {
    const modal = document.getElementById(this.modalId);
    if (!modal) return;

    // 플레이 가능한 어휘 풀 통계 확인
    const rawWords = (window.storage && Array.isArray(window.storage.words)) ? window.storage.words : [];
    const vocaWords = rawWords.filter(w => !w.isReadingPassage && !w.isGrammarUnit && !w.isEBookTask);
    const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);

    const dueWords = vocaWords.filter(w => w.nextReviewDate && w.nextReviewDate <= todayStr);
    const weakWords = vocaWords.filter(w => w.isWeak);
    const availableTotal = vocaWords.length;

    modal.innerHTML = `
      <div class="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200 text-white font-sans">
        <!-- 상단 헤더 -->
        <div class="px-6 py-4 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center text-xl shadow-xs">
              ⚡
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                  Active Recall Arena
                </span>
                <span class="text-xs text-slate-400">에빙하우스 망각곡선 서바이벌</span>
              </div>
              <h2 class="font-serif font-black text-lg sm:text-xl text-white">
                워드 러시 : 서바이벌 타임어택
              </h2>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <button type="button" id="wr-sound-toggle-btn" onclick="window.wordRushEngine.toggleSound()" class="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 flex items-center gap-1.5 transition-colors cursor-pointer" title="사운드 켜기/끄기">
              ${this.soundEnabled ? '<i data-lucide="volume-2" class="w-4 h-4 text-emerald-400"></i>' : '<i data-lucide="volume-x" class="w-4 h-4 text-slate-500"></i>'}
              <span>${this.soundEnabled ? '사운드 켜짐' : '음소거'}</span>
            </button>
            <button type="button" onclick="window.wordRushEngine.closeGameModal()" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer" title="닫기 (ESC)">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>
        </div>

        <!-- 바디 컨텐츠 -->
        <div class="p-6 space-y-6">
          <!-- 게임 소개 및 룰 카드 -->
          <div class="rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/30 p-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                <span>⏱️ 60초 서바이벌 인출 훈련</span>
              </span>
              <span class="text-[11px] font-mono text-emerald-400 font-semibold">정답 시 +1.5초 | 오답 시 -3초</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed">
              제한 시간 60초 동안 몰려오는 어휘를 <b>능동적으로 빠르게 인출</b>하세요! 연속 5콤보 달성 시 <b>🔥 골든 피버 모드(점수/EXP 2배)</b>가 발동되며, <b>🚨 긴급 취약 단어</b>를 맞히면 취약 상태가 즉시 해제됩니다.
            </p>
            <div class="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span class="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                📚 총 대상 어휘: <b>${availableTotal}</b>단어
              </span>
              <span class="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300">
                ⏳ 오늘 복습 도래: <b>${dueWords.length}</b>단어
              </span>
              <span class="px-2.5 py-1 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300">
                🚨 극복 취약 어휘: <b>${weakWords.length}</b>단어
              </span>
            </div>
          </div>

          <!-- 4대 인출 챌린지 모드 선택 탭 -->
          <div>
            <label class="block text-xs font-bold text-slate-300 mb-2.5">
              🎮 챌린지 인출 모드 선택 (원하는 출제 방식을 선택하세요)
            </label>
            <div class="grid grid-cols-2 gap-2.5">
              <!-- 모드 1: 영➔한 -->
              <button type="button" onclick="window.wordRushEngine.setMode('en-to-ko')" class="wr-mode-btn p-3 rounded-2xl border text-left transition-all cursor-pointer ${this.mode === 'en-to-ko' ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-md' : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'}">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold text-xs flex items-center gap-1.5">🔤 영단어 ➔ 한국어 뜻</span>
                  ${this.mode === 'en-to-ko' ? '<span class="w-2 h-2 rounded-full bg-indigo-400"></span>' : ''}
                </div>
                <p class="text-[11px] text-slate-400">영단어를 보고 올바른 뜻 선택 (독해 어휘 인출력)</p>
              </button>

              <!-- 모드 2: 한➔영 -->
              <button type="button" onclick="window.wordRushEngine.setMode('ko-to-en')" class="wr-mode-btn p-3 rounded-2xl border text-left transition-all cursor-pointer ${this.mode === 'ko-to-en' ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-md' : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'}">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold text-xs flex items-center gap-1.5">🇰🇷 한국어 뜻 ➔ 영단어</span>
                  ${this.mode === 'ko-to-en' ? '<span class="w-2 h-2 rounded-full bg-indigo-400"></span>' : ''}
                </div>
                <p class="text-[11px] text-slate-400">뜻을 보고 영단어 표기 선택 (서술형 영작 어휘력)</p>
              </button>

              <!-- 모드 3: 문맥 빈칸 완성 -->
              <button type="button" onclick="window.wordRushEngine.setMode('cloze')" class="wr-mode-btn p-3 rounded-2xl border text-left transition-all cursor-pointer ${this.mode === 'cloze' ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-md' : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'}">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold text-xs flex items-center gap-1.5">📖 문맥 예문 빈칸 완성</span>
                  ${this.mode === 'cloze' ? '<span class="w-2 h-2 rounded-full bg-indigo-400"></span>' : ''}
                </div>
                <p class="text-[11px] text-slate-400">예문 속 [ ? ]에 들어갈 단어 선택 (실전 수능 적응력)</p>
              </button>

              <!-- 모드 4: 올인원 셔플 믹스 -->
              <button type="button" onclick="window.wordRushEngine.setMode('shuffle')" class="wr-mode-btn p-3 rounded-2xl border text-left transition-all cursor-pointer ${this.mode === 'shuffle' ? 'bg-amber-600/30 border-amber-400 text-amber-200 shadow-md ring-1 ring-amber-400/40' : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'}">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-bold text-xs flex items-center gap-1.5 text-amber-300">🎲 올인원 셔플 믹스</span>
                  <span class="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold">추천!</span>
                </div>
                <p class="text-[11px] text-slate-400">3가지 문제 유형이 무작위 교차 출제 (뇌 자극 극대화)</p>
              </button>
            </div>
          </div>
        </div>

        <!-- 하단 시작 액션 바 -->
        <div class="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <div class="text-[11px] text-slate-400 flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-slate-800 font-mono text-slate-300">Space</span> 또는 버튼 클릭으로 즉시 시작
          </div>

          <div class="flex items-center gap-2">
            <button type="button" onclick="window.wordRushEngine.closeGameModal()" class="px-4 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 text-xs font-semibold transition-colors cursor-pointer">
              취소
            </button>
            <button type="button" onclick="window.wordRushEngine.startGame()" class="px-7 py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-serif font-black text-sm shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all cursor-pointer active:scale-95 group">
              <span>⚡ 서바이벌 시작</span>
              <i data-lucide="arrow-right" class="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  setMode(targetMode) {
    this.mode = targetMode;
    this.renderLobby();
  }

  /**
   * 단어 객체에서 표제어 및 한국어 의미를 안전하게 추출하는 헬퍼
   */
  getWordText(w) {
    if (!w) return '';
    return (w.word || w.title || w.titleEn || '').trim();
  }

  getMeaningText(w) {
    if (!w) return '';
    return (w.meaning || w.meaningKo || w.summary || w.titleKo || w.exampleMeaning || w.definition || '').trim();
  }

  /**
   * 4대 출제 모드 단어 풀 추출 및 셔플 덱 생성
   */
  prepareDeck() {
    const rawWords = (window.storage && Array.isArray(window.storage.words)) ? window.storage.words : [];
    // 유효한 표제어와 한국어 의미를 모두 갖춘 순수 어휘 필터링
    const vocaWords = rawWords.filter(w => 
      !w.isReadingPassage && !w.isGrammarUnit && !w.isEBookTask && 
      this.getWordText(w).length > 0 && this.getMeaningText(w).length > 0
    );
    const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);

    // 1순위: 오늘 복습 도래 단어 및 취약 단어
    let primaryPool = vocaWords.filter(w => (w.nextReviewDate && w.nextReviewDate <= todayStr) || w.isWeak);

    // 단어가 부족하면 전체 단어에서 추가 보충
    if (primaryPool.length < 25) {
      const otherWords = vocaWords.filter(w => !primaryPool.includes(w));
      const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());
      primaryPool = primaryPool.concat(shuffledOthers.slice(0, 35 - primaryPool.length));
    }

    // 기본 보정: 그래도 부족하면 기본 샘플 단어 활용
    if (primaryPool.length === 0 && typeof SAMPLE_WORDS !== 'undefined' && Array.isArray(SAMPLE_WORDS)) {
      primaryPool = SAMPLE_WORDS.map((s, idx) => ({
        id: `sample-${idx}`,
        word: s.word,
        meaning: s.meaning,
        partOfSpeech: s.partOfSpeech || 'n.',
        example: s.example || '',
        exampleMeaning: s.exampleMeaning || '',
        isWeak: false
      }));
    }

    // 덱 랜덤 셔플
    this.deck = [...primaryPool].sort(() => 0.5 - Math.random());
    this.currentQuestionIndex = 0;
    this.sessionResults = [];
    this.overcomeWeakIds.clear();
  }

  /**
   * 단일 문제 생성기 (선택된 모드에 따라 문제 유형 동적 생성)
   */
  generateQuestion() {
    if (this.currentQuestionIndex >= this.deck.length) {
      // 덱을 다 돌았으면 다시 셔플하여 순환 출제
      this.deck = [...this.deck].sort(() => 0.5 - Math.random());
      this.currentQuestionIndex = 0;
    }

    const currentWord = this.deck[this.currentQuestionIndex];
    if (!currentWord) return null;

    const wordText = this.getWordText(currentWord);
    const meaningText = this.getMeaningText(currentWord);

    // 문제 유형 결정 (shuffle 모드일 경우 무작위 선택)
    let qType = this.mode;
    if (qType === 'shuffle') {
      const candidates = ['en-to-ko', 'ko-to-en'];
      if (currentWord.example && currentWord.example.toLowerCase().includes(wordText.toLowerCase())) {
        candidates.push('cloze');
      }
      qType = candidates[Math.floor(Math.random() * candidates.length)];
    } else if (qType === 'cloze') {
      // 예문이 없거나 단어를 포함하지 않으면 en-to-ko로 안전 폴백
      if (!currentWord.example || !currentWord.example.toLowerCase().includes(wordText.toLowerCase())) {
        qType = 'en-to-ko';
      }
    }

    // 오답 선지 3개 추출 (품사 및 길이 유사도 고려)
    const rawWords = (window.storage && Array.isArray(window.storage.words)) ? window.storage.words : [];
    const distractorCandidates = rawWords.filter(w => 
      !w.isReadingPassage && !w.isGrammarUnit && !w.isEBookTask && 
      (w.id !== currentWord.id && this.getWordText(w) !== wordText) &&
      this.getWordText(w).length > 0 && this.getMeaningText(w).length > 0
    );

    const shuffledDistractors = [...distractorCandidates].sort(() => 0.5 - Math.random()).slice(0, 3);
    while (shuffledDistractors.length < 3) {
      const mockList = [
        { word: 'persevere', meaning: '인내하다, 굴하지 않다' },
        { word: 'innovate', meaning: '혁신하다, 쇄신하다' },
        { word: 'comprehend', meaning: '이해하다, 파악하다' },
        { word: 'distinguish', meaning: '구별하다, 식별하다' }
      ];
      shuffledDistractors.push(mockList[shuffledDistractors.length]);
    }

    // 문제 모드별 선지 구성
    let options = [];
    let promptTitle = '';
    let promptSub = '';
    let promptBadge = '';

    if (qType === 'en-to-ko') {
      promptTitle = wordText;
      promptSub = currentWord.partOfSpeech ? `[${currentWord.partOfSpeech}]` : '';
      promptBadge = '🔤 영➔한 의미 선택';

      options = [
        { text: meaningText, isCorrect: true },
        ...shuffledDistractors.map(d => ({ text: this.getMeaningText(d), isCorrect: false }))
      ];
    } else if (qType === 'ko-to-en') {
      promptTitle = meaningText;
      promptSub = currentWord.partOfSpeech ? `[${currentWord.partOfSpeech}]` : '';
      promptBadge = '🇰🇷 한➔영 단어 선택';

      options = [
        { text: wordText, isCorrect: true },
        ...shuffledDistractors.map(d => ({ text: this.getWordText(d), isCorrect: false }))
      ];
    } else if (qType === 'cloze') {
      // 예문에서 해당 단어를 [ ? ] 빈칸으로 마스킹
      const regex = new RegExp(`\\b${wordText}\\b`, 'gi');
      const clozeSentence = currentWord.example.replace(regex, '[  ?  ]');

      promptTitle = clozeSentence;
      promptSub = currentWord.exampleMeaning ? `💬 ${currentWord.exampleMeaning}` : `뜻: ${meaningText}`;
      promptBadge = '📖 문맥 예문 빈칸 완성';

      options = [
        { text: wordText, isCorrect: true },
        ...shuffledDistractors.map(d => ({ text: this.getWordText(d), isCorrect: false }))
      ];
    }

    // 선지 4개 랜덤 셔플
    options.sort(() => 0.5 - Math.random());

    this.currentQuestion = {
      word: currentWord,
      qType,
      promptTitle,
      promptSub,
      promptBadge,
      options,
      isWeakAlert: !!currentWord.isWeak
    };

    return this.currentQuestion;
  }

  /**
   * 실시간 인게임 화면 렌더링
   */
  renderInGame() {
    const modal = document.getElementById(this.modalId);
    if (!modal) return;

    const q = this.currentQuestion;
    if (!q) return;

    const timePct = Math.min(100, (this.timeLeft / this.baseDuration) * 100);
    const isFever = this.state === 'fever';

    modal.innerHTML = `
      <div class="relative w-full max-w-xl ${isFever ? 'bg-gradient-to-b from-amber-950 via-slate-900 to-amber-950 border-amber-400 ring-2 ring-amber-400/50 shadow-amber-500/30' : 'bg-slate-900 border-slate-700/80'} border rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white font-sans transition-all duration-300">
        
        <!-- 상단 게임 HUD (시간 바 & 콤보 & 점수) -->
        <div class="px-6 pt-4 pb-3 bg-slate-950/70 border-b border-slate-800 space-y-2.5">
          <div class="flex items-center justify-between">
            <!-- 남은 시간 & 피버 배지 -->
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-xl font-mono text-sm font-black flex items-center gap-1.5 ${this.timeLeft <= 10 ? 'bg-red-500/30 text-red-300 animate-pulse' : 'bg-slate-800 text-amber-300'}">
                <i data-lucide="timer" class="w-4 h-4"></i>
                <span id="wr-timer-display">${this.timeLeft.toFixed(1)}s</span>
              </span>
              ${isFever ? `
                <span class="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-serif font-black text-xs uppercase tracking-wider animate-bounce shadow-md">
                  🔥 FEVER 2X! (${this.feverTimeLeft}s)
                </span>
              ` : `
                <span class="px-2 py-0.5 rounded-lg bg-white/5 text-[10px] text-slate-400 font-mono">
                  ${q.promptBadge}
                </span>
              `}
            </div>

            <!-- 스코어 & 콤보 -->
            <div class="flex items-center gap-3">
              <div class="text-right">
                <span class="text-[10px] text-slate-400 block font-mono">SCORE</span>
                <span class="font-serif font-black text-base sm:text-lg text-amber-400 leading-none">${this.score.toLocaleString()}</span>
              </div>
              <div class="px-2.5 py-1 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-1">
                <span class="text-sm">🔥</span>
                <span class="font-serif font-black text-xs text-white">${this.combo}</span>
                <span class="text-[10px] text-slate-400">COMBO</span>
              </div>
            </div>
          </div>

          <!-- 타임어택 게이지 바 -->
          <div class="w-full bg-slate-800 rounded-full h-2 overflow-hidden shadow-inner">
            <div id="wr-progress-bar" class="h-full rounded-full transition-all duration-100 ${isFever ? 'bg-gradient-to-r from-amber-400 to-orange-500' : (this.timeLeft <= 10 ? 'bg-red-500' : 'bg-gradient-to-r from-emerald-400 to-teal-500')}" style="width: ${timePct}%"></div>
          </div>
        </div>

        <!-- 문제 제시 카드 영역 -->
        <div class="p-6 flex flex-col items-center justify-center min-h-[170px] sm:min-h-[190px] text-center space-y-2 relative overflow-hidden">
          ${q.isWeakAlert ? `
            <div class="absolute top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-red-500/20 border border-red-500/50 text-red-300 font-bold text-[10px] flex items-center gap-1 animate-pulse">
              <span>🚨 긴급 취약 단어 (정답 시 +5초 & 즉시 극복)</span>
            </div>
          ` : ''}

          <div class="pt-2">
            <h3 class="font-serif font-black text-2xl sm:text-3xl text-white tracking-wide leading-tight px-4 max-w-lg break-words">
              ${q.promptTitle}
            </h3>
            ${q.promptSub ? `
              <p class="text-xs sm:text-sm text-slate-300 mt-1.5 font-medium px-4">
                ${q.promptSub}
              </p>
            ` : ''}
          </div>
        </div>

        <!-- 4지선다 버튼 그리드 -->
        <div class="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5" id="wr-options-container">
          ${q.options.map((opt, idx) => `
            <button 
              type="button" 
              onclick="window.wordRushEngine.handleAnswer(${idx})" 
              data-idx="${idx}"
              class="wr-opt-btn p-3.5 sm:p-4 rounded-2xl bg-slate-800/80 hover:bg-slate-700/90 border border-slate-700/80 hover:border-slate-500 text-left transition-all cursor-pointer active:scale-95 group flex items-center justify-between text-slate-100"
            >
              <div class="flex items-center gap-3">
                <span class="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 group-hover:text-amber-400 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  ${idx + 1}
                </span>
                <span class="font-serif font-semibold text-xs sm:text-sm leading-snug">
                  ${opt.text}
                </span>
              </div>
              <span class="text-slate-500 group-hover:text-slate-300 transition-colors text-xs">➔</span>
            </button>
          `).join('')}
        </div>

        <!-- 하단 키보드 단축키 가이드 -->
        <div class="px-6 py-2.5 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
          <span>💡 키보드 숫자키 <b>[1] [2] [3] [4]</b> 지원</span>
          <span class="text-slate-500">ESC: 게임 중단</span>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }

  /**
   * 정답 및 오답 판정 처리
   */
  handleAnswer(optionIndex) {
    if (this.state !== 'playing' && this.state !== 'fever') return;
    if (!this.currentQuestion) return;

    const opt = this.currentQuestion.options[optionIndex];
    if (!opt) return;

    const currentWord = this.currentQuestion.word;
    const isCorrect = opt.isCorrect;
    const isFever = this.state === 'fever';

    const btn = document.querySelectorAll('.wr-opt-btn')[optionIndex];

    if (isCorrect) {
      // 1. 정답 처리
      this.combo++;
      if (this.combo > this.maxCombo) this.maxCombo = this.combo;

      // 점수 계산: (기본 100점 + 콤보 가산) * (피버 시 2배)
      const comboMult = Math.min(3, 1 + (this.combo * 0.1));
      const pointEarned = Math.round(100 * comboMult * (isFever ? 2 : 1));
      this.score += pointEarned;

      // 시간 보너스: 기본 +1.5초 (취약 어휘면 +5초)
      const timeBonus = this.currentQuestion.isWeakAlert ? 5.0 : 1.5;
      this.timeLeft = Math.min(this.baseDuration + 15, this.timeLeft + timeBonus);

      // 사운드
      this.playCorrectSound(this.combo);

      // 버튼 성공 피드백
      if (btn) {
        btn.classList.add('bg-emerald-600/80', 'border-emerald-400', 'text-white');
      }

      // 취약 단어 극복 기록
      if (currentWord.isWeak) {
        this.overcomeWeakIds.add(currentWord.id);
      }

      // 피버 게이지 증가
      if (!isFever) {
        this.feverGauge = Math.min(100, this.feverGauge + 20);
        if (this.combo >= 5 && this.feverGauge >= 100) {
          this.triggerFeverMode();
        }
      }

      this.sessionResults.push({
        word: currentWord,
        isCorrect: true,
        points: pointEarned
      });
    } else {
      // 2. 오답 처리
      this.combo = 0;
      this.feverGauge = Math.max(0, this.feverGauge - 30);
      this.timeLeft = Math.max(0, this.timeLeft - 3.0); // 3초 페널티

      this.playWrongSound();

      if (btn) {
        btn.classList.add('bg-red-600/80', 'border-red-400', 'text-white', 'animate-shake');
      }

      this.sessionResults.push({
        word: currentWord,
        isCorrect: false,
        points: 0
      });

      // 시간이 0 이하가 되면 즉시 게임오버
      if (this.timeLeft <= 0) {
        this.endGame();
        return;
      }
    }

    // 다음 문제로 전환 (0.15초 딜레이)
    this.currentQuestionIndex++;
    setTimeout(() => {
      if (this.state === 'playing' || this.state === 'fever') {
        this.generateQuestion();
        this.renderInGame();
      }
    }, 150);
  }

  /**
   * 🔥 골든 피버 모드 발동 (8초간 2배 부스터)
   */
  triggerFeverMode() {
    this.state = 'fever';
    this.feverTimeLeft = 8;
    this.playFeverSound();

    if (this.feverTimer) clearInterval(this.feverTimer);
    this.feverTimer = setInterval(() => {
      this.feverTimeLeft--;
      if (this.feverTimeLeft <= 0) {
        clearInterval(this.feverTimer);
        this.feverTimer = null;
        if (this.state === 'fever') {
          this.state = 'playing';
          this.feverGauge = 0;
          this.renderInGame();
        }
      } else {
        const timerEl = document.getElementById('wr-timer-display');
        if (timerEl) this.renderInGame();
      }
    }, 1000);
  }

  /**
   * 키보드 단축키 핸들러 (1~4 선택, Space 시작, ESC 종료)
   */
  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.closeGameModal();
      return;
    }

    if (this.state === 'idle') {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this.startGame();
      }
      return;
    }

    if (this.state === 'playing' || this.state === 'fever') {
      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3 };
      if (keyMap[e.key] !== undefined) {
        e.preventDefault();
        this.handleAnswer(keyMap[e.key]);
      }
    }

    if (this.state === 'gameover') {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        this.startGame();
      }
    }
  }

  /**
   * 게임 시작
   */
  startGame() {
    this.stopGame();
    this.initAudio();

    this.prepareDeck();
    if (this.deck.length === 0) {
      alert('학습 가능한 단어가 없습니다. 먼저 단어장을 등록해주세요.');
      return;
    }

    this.state = 'playing';
    this.timeLeft = this.baseDuration;
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.feverGauge = 0;

    this.generateQuestion();
    this.renderInGame();

    // 100ms 정밀 타이머 시작
    this.timerInterval = setInterval(() => {
      this.timeLeft = Math.max(0, this.timeLeft - 0.1);

      const timerEl = document.getElementById('wr-timer-display');
      const progressEl = document.getElementById('wr-progress-bar');

      if (timerEl) timerEl.textContent = `${this.timeLeft.toFixed(1)}s`;
      if (progressEl) {
        const pct = Math.min(100, (this.timeLeft / this.baseDuration) * 100);
        progressEl.style.width = `${pct}%`;
      }

      if (this.timeLeft <= 0) {
        this.endGame();
      }
    }, 100);
  }

  /**
   * 타이머 및 진행 상태 안전 중단
   */
  stopGame() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    if (this.feverTimer) {
      clearInterval(this.feverTimer);
      this.feverTimer = null;
    }
    this.state = 'idle';
  }

  /**
   * 게임 종료 및 베리타스 학습 생태계 원스톱 정산
   */
  endGame() {
    this.stopGame();
    this.state = 'gameover';
    this.playTimeUpSound();

    const totalAnswered = this.sessionResults.length;
    const correctItems = this.sessionResults.filter(r => r.isCorrect);
    const wrongItems = this.sessionResults.filter(r => !r.isCorrect);
    const accuracy = totalAnswered > 0 ? Math.round((correctItems.length / totalAnswered) * 100) : 0;

    // 랭크 산출 (S / A / B / C / D)
    let rank = 'B';
    let rankColor = 'text-amber-400';
    if (this.score >= 3500) { rank = 'S'; rankColor = 'text-amber-300'; }
    else if (this.score >= 2200) { rank = 'A'; rankColor = 'text-emerald-400'; }
    else if (this.score >= 1200) { rank = 'B'; rankColor = 'text-indigo-400'; }
    else if (this.score >= 500) { rank = 'C'; rankColor = 'text-slate-300'; }
    else { rank = 'D'; rankColor = 'text-red-400'; }

    // EXP 보상 계산 (기본 30 EXP + 정답당 2 EXP)
    const expGain = Math.max(15, 30 + correctItems.length * 2);

    // 1. 에빙하우스 SRS 복습 단계 갱신 및 취약 단어 동기화
    if (window.storage) {
      // 맞힌 단어 -> SRS Stage 승급 ('easy')
      correctItems.forEach(item => {
        if (item.word && item.word.id) {
          window.storage.recordReviewResult(item.word.id, 'easy');
        }
      });

      // 틀린 단어 -> SRS Stage 1 리셋 및 취약 단어 등록 ('hard')
      wrongItems.forEach(item => {
        if (item.word && item.word.id) {
          window.storage.recordReviewResult(item.word.id, 'hard');
        }
      });

      // 극복된 취약 단어 isWeak 플래그 완벽 해제
      this.overcomeWeakIds.forEach(id => {
        const w = window.storage.words.find(item => item.id === id);
        if (w) {
          w.isWeak = false;
          w.correctCount = (w.correctCount || 0) + 2;
        }
      });
      window.storage.saveWords();

      // 2. 학습 이력(History) 자동 기록
      const today = window.storage.getTodayDateString();
      const modeNames = {
        'en-to-ko': '영➔한 의미 선택',
        'ko-to-en': '한➔영 단어 선택',
        'cloze': '문맥 예문 빈칸 완성',
        'shuffle': '올인원 셔플 믹스'
      };

      window.storage.recordHistoryLog({
        type: 'quiz',
        title: `⚡ 워드 러시: 타임어택 (${modeNames[this.mode] || '타임어택'}) 완수`,
        detail: `최종 스코어 ${this.score.toLocaleString()}점 (${rank}랭크) • 총 ${correctItems.length}/${totalAnswered}단어 완수 (${accuracy}%) • 최대 ${this.maxCombo}콤보 달성`,
        score: this.score,
        total: Math.max(100, totalAnswered * 10),
        questionCount: totalAnswered,
        wordCount: correctItems.length,
        accuracy: accuracy,
        actionTab: 'review'
      });

      // 3. EXP 보상 지급
      if (typeof window.storage.addExp === 'function') {
        window.storage.addExp(expGain, `워드 러시 ${rank}랭크 달성 보상`);
      }

      // 4. 365일 에빙하우스 잔디 히트맵 실시간 동기화
      if (window.heatmapEngine && typeof window.heatmapEngine.render === 'function') {
        window.heatmapEngine.render();
      }

      // 5. 플래너 및 대시보드 새로고침
      if (window.app && typeof window.app.renderDashboard === 'function') {
        window.app.renderDashboard();
      }
    }

    // 결과 화면 렌더링
    this.renderResultScreen({
      rank,
      rankColor,
      totalAnswered,
      correctCount: correctItems.length,
      wrongCount: wrongItems.length,
      accuracy,
      expGain,
      wrongItems
    });
  }

  /**
   * 게임 결과 스코어보드 렌더링
   */
  renderResultScreen(stats) {
    const modal = document.getElementById(this.modalId);
    if (!modal) return;

    modal.innerHTML = `
      <div class="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white font-sans animate-in fade-in zoom-in-95 duration-200">
        <!-- 상단 헤더 -->
        <div class="px-6 py-4 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-xl">🏆</span>
            <h2 class="font-serif font-black text-lg text-white">워드 러시 결과 정산</h2>
          </div>
          <button type="button" onclick="window.wordRushEngine.closeGameModal()" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- 결과 본문 -->
        <div class="p-6 space-y-6">
          <!-- 랭크 & 스코어 대형 카드 -->
          <div class="rounded-3xl bg-gradient-to-br from-indigo-950/70 via-slate-900 to-amber-950/30 border border-indigo-500/30 p-6 flex items-center justify-between shadow-inner">
            <div>
              <span class="text-xs font-mono text-slate-400 block uppercase tracking-wider">Final Score</span>
              <div class="text-3xl sm:text-4xl font-serif font-black text-amber-400 mt-1">
                ${this.score.toLocaleString()} <span class="text-sm font-normal text-slate-400">PTS</span>
              </div>
              <div class="flex items-center gap-2 mt-2 text-xs text-slate-300">
                <span>🔥 최대 콤보: <b>${this.maxCombo}</b>연속</span>
                <span>•</span>
                <span class="text-amber-300">EXP +${stats.expGain} 획득</span>
              </div>
            </div>

            <div class="text-center bg-slate-950/60 border border-slate-800 rounded-2xl p-3.5 min-w-[85px]">
              <span class="text-[10px] font-mono text-slate-400 block uppercase">Rank</span>
              <span class="font-serif font-black text-4xl sm:text-5xl ${stats.rankColor} block">
                ${stats.rank}
              </span>
            </div>
          </div>

          <!-- 4대 학습 성과 지표 그리드 -->
          <div class="grid grid-cols-3 gap-2.5 text-center">
            <div class="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <span class="text-[10px] text-slate-400 block">정답 단어</span>
              <span class="font-serif font-black text-lg text-emerald-400">${stats.correctCount}개</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <span class="text-[10px] text-slate-400 block">오답 단어</span>
              <span class="font-serif font-black text-lg text-red-400">${stats.wrongCount}개</span>
            </div>
            <div class="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <span class="text-[10px] text-slate-400 block">정답률</span>
              <span class="font-serif font-black text-lg text-amber-300">${stats.accuracy}%</span>
            </div>
          </div>

          <!-- 오답 복습 리스트 (틀린 단어가 있을 경우) -->
          ${stats.wrongItems.length > 0 ? `
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-red-400 flex items-center gap-1">
                  <span>🚨 다시 확인할 오답 단어 (${stats.wrongItems.length}개)</span>
                </span>
                <span class="text-[11px] text-slate-400">오답노트에 자동 등록되었습니다</span>
              </div>
              <div class="max-h-32 overflow-y-auto space-y-1.5 custom-scrollbar pr-1">
                ${stats.wrongItems.map(item => `
                  <div class="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40 flex items-center justify-between text-xs">
                    <span class="font-bold text-white">${item.word.word}</span>
                    <span class="text-slate-300">${item.word.meaning}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : `
            <div class="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center text-xs text-emerald-300">
              🎉 완벽합니다! 오답 없이 모든 단어를 신속하게 인출 완료했습니다!
            </div>
          `}
        </div>

        <!-- 하단 액션 버튼 -->
        <div class="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3">
          <button type="button" onclick="window.wordRushEngine.closeGameModal()" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors cursor-pointer">
            학습 완료 (나가기)
          </button>

          <button type="button" onclick="window.wordRushEngine.startGame()" class="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-serif font-black text-xs shadow-md transition-all cursor-pointer active:scale-95 flex items-center gap-1.5">
            <i data-lucide="rotate-ccw" class="w-4 h-4 text-slate-950"></i>
            <span>한 번 더 도전 (Space)</span>
          </button>
        </div>
      </div>
    `;

    if (window.lucide) window.lucide.createIcons();
  }
}

// 전역 싱글톤 인스턴스 등록
window.wordRushEngine = new WordRushEngine();
