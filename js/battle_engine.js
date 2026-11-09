/**
 * Veritas English - 단어 배틀 & 랭킹 리더보드 엔진 (BattleEngine)
 * 60초 스피드 1:1 타임어택 배틀, 콤보 승수(Combo Multiplier), AI 고스트 라이벌 및 주간 명예의 전당 티어 시스템
 * 오프라인 퍼스트 로컬 멀티 프로필 레지스트리 기반 게이미피케이션
 */

class BattleEngine {
  constructor() {
    this.containerId = 'modal-battle-engine';
    this.leaderboardContainerId = 'modal-battle-leaderboard';
    this.timerSeconds = 60;
    this.timerInterval = null;
    this.timeLeft = 60;
    this.currentScore = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.currentQuestion = null;
    this.questionPool = [];
    this.isBattleActive = false;

    // AI 고스트 라이벌 프로필
    this.rivalProfiles = [
      { id: 'rival_beast', name: '챌린저 헌터', title: '고교 실전 킬러', avatar: '🐺', tier: 'Gold', speedMs: 4200, accuracy: 0.82 },
      { id: 'rival_oxford', name: '옥스퍼드 펠로우', title: '영국 학술 연구원', avatar: '🏛️', tier: 'Platinum', speedMs: 3400, accuracy: 0.90 },
      { id: 'rival_master', name: '하버드 마스터', title: '수능 0.1% 괴물', avatar: '👑', tier: 'Master', speedMs: 2700, accuracy: 0.96 }
    ];
    this.currentRival = this.rivalProfiles[1];
    this.rivalScore = 0;
    this.rivalInterval = null;
  }

  /**
   * 60초 배틀 모달 열기 및 시작
   */
  openBattle(rivalId = 'rival_oxford') {
    this.currentRival = this.rivalProfiles.find(r => r.id === rivalId) || this.rivalProfiles[1];
    this.createBattleModalDOM();

    const modal = document.getElementById(this.containerId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
    if (window.lucide) window.lucide.createIcons();

    this.startBattle();
  }

  closeBattle() {
    this.stopBattleTimer();
    const modal = document.getElementById(this.containerId);
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  /**
   * 주간 명예의 전당 리더보드 모달 열기
   */
  openLeaderboard() {
    this.createLeaderboardModalDOM();
    const modal = document.getElementById(this.leaderboardContainerId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
    if (window.lucide) window.lucide.createIcons();
  }

  closeLeaderboard() {
    const modal = document.getElementById(this.leaderboardContainerId);
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  /**
   * 배틀 단어 문제 풀 생성
   */
  initQuestionPool() {
    let pool = [];

    // Pathways, Oxford, 스토리지 단어 종합
    if (window.VERITAS_PATHWAYS_WORDS_DATA) pool.push(...window.VERITAS_PATHWAYS_WORDS_DATA);
    if (window.VERITAS_OXFORD_WORDS_DATA) pool.push(...window.VERITAS_OXFORD_WORDS_DATA);
    if (window.storage && window.storage.words) pool.push(...window.storage.words);
    if (window.SAMPLE_WORDS) pool.push(...window.SAMPLE_WORDS);

    // 중복 제거 및 유효 단어 필터
    const uniqueMap = new Map();
    pool.forEach(item => {
      const w = item.word || item['영단어'] || item['단어'] || '';
      const m = item.meaning || item['뜻'] || '';
      if (w && m && !uniqueMap.has(w.toLowerCase())) {
        uniqueMap.set(w.toLowerCase(), { word: w, meaning: m, pos: item.pos || item['품사'] || '' });
      }
    });

    this.questionPool = Array.from(uniqueMap.values());
    if (this.questionPool.length < 10) {
      this.questionPool = [
        { word: 'accelerate', meaning: '가속화하다, 속도를 높이다', pos: 'v.' },
        { word: 'resilient', meaning: '회복력 있는, 탄력적인', pos: 'adj.' },
        { word: 'mitigate', meaning: '완화하다, 경감시키다', pos: 'v.' },
        { word: 'authentic', meaning: '진짜의, 진정한', pos: 'adj.' },
        { word: 'diligent', meaning: '성실한, 근면한', pos: 'adj.' },
        { word: 'persevere', meaning: '끈기 있게 버티다', pos: 'v.' },
        { word: 'collaborate', meaning: '협력하다, 공동 작업하다', pos: 'v.' },
        { word: 'innovative', meaning: '혁신적인, 창의적인', pos: 'adj.' },
        { word: 'comprehensive', meaning: '포괄적인, 종합적인', pos: 'adj.' },
        { word: 'profound', meaning: '심오한, 깊은', pos: 'adj.' }
      ];
    }
  }

  /**
   * 배틀 시작
   */
  startBattle() {
    this.initQuestionPool();
    this.timeLeft = this.timerSeconds;
    this.currentScore = 0;
    this.rivalScore = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.correctCount = 0;
    this.wrongCount = 0;
    this.isBattleActive = true;

    this.updateBattleUI();
    this.nextQuestion();
    this.startTimers();
  }

  startTimers() {
    this.stopBattleTimer();

    // 1. 유저 60초 카운트다운 타이머
    this.timerInterval = setInterval(() => {
      this.timeLeft--;
      const timerBar = document.getElementById('battle-timer-bar');
      const timerText = document.getElementById('battle-timer-text');
      if (timerBar) {
        const pct = (this.timeLeft / this.timerSeconds) * 100;
        timerBar.style.width = `${pct}%`;
        timerBar.className = pct > 20 
          ? 'h-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all duration-1000' 
          : 'h-full bg-red-500 animate-pulse transition-all duration-1000';
      }
      if (timerText) timerText.textContent = `${this.timeLeft}초`;

      if (this.timeLeft <= 0) {
        this.finishBattle();
      }
    }, 1000);

    // 2. AI 고스트 라이벌 점수 획득 시뮬레이션
    const rival = this.currentRival;
    this.rivalInterval = setInterval(() => {
      if (!this.isBattleActive) return;
      if (Math.random() <= rival.accuracy) {
        this.rivalScore += 100;
        this.updateRivalBar();
      }
    }, rival.speedMs);
  }

  stopBattleTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    if (this.rivalInterval) clearInterval(this.rivalInterval);
    this.timerInterval = null;
    this.rivalInterval = null;
  }

  /**
   * 다음 4지선다 문제 생성
   */
  nextQuestion() {
    if (!this.isBattleActive) return;

    // 랜덤 정답 단어 추출
    const pool = this.questionPool;
    const targetIdx = Math.floor(Math.random() * pool.length);
    const target = pool[targetIdx];

    // 오답 보기 3개 추출
    const distractors = [];
    while (distractors.length < 3) {
      const rand = pool[Math.floor(Math.random() * pool.length)];
      if (rand.word !== target.word && !distractors.includes(rand.meaning)) {
        distractors.push(rand.meaning);
      }
    }

    // 4지선다 셔플
    const choices = [target.meaning, ...distractors].sort(() => Math.random() - 0.5);

    this.currentQuestion = {
      target,
      choices,
      answered: false
    };

    // UI 렌더링
    const wordEl = document.getElementById('battle-question-word');
    const posEl = document.getElementById('battle-question-pos');
    const choicesContainer = document.getElementById('battle-choices-container');

    if (wordEl) wordEl.textContent = target.word;
    if (posEl) posEl.textContent = target.pos || '';

    if (choicesContainer) {
      choicesContainer.innerHTML = choices.map((c, idx) => `
        <button type="button" onclick="window.battleEngine.answerQuestion(${idx})" class="battle-choice-btn w-full p-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border-2 border-slate-700/80 hover:border-amber-400 text-left text-white text-sm font-semibold transition-all transform active:scale-98 shadow-sm flex items-center justify-between group cursor-pointer">
          <div class="flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-white/10 text-amber-300 font-mono text-xs flex items-center justify-center font-bold group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">${idx + 1}</span>
            <span>${c}</span>
          </div>
          <span class="text-xs text-slate-500 group-hover:text-amber-300 transition-colors">선택 →</span>
        </button>
      `).join('');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  /**
   * 보기 선택 정답 체크
   */
  answerQuestion(choiceIdx) {
    if (!this.isBattleActive || !this.currentQuestion || this.currentQuestion.answered) return;
    this.currentQuestion.answered = true;

    const selectedMeaning = this.currentQuestion.choices[choiceIdx];
    const isCorrect = (selectedMeaning === this.currentQuestion.target.meaning);
    const buttons = document.querySelectorAll('.battle-choice-btn');

    if (isCorrect) {
      // 정답 처리
      this.combo++;
      if (this.combo > this.maxCombo) this.maxCombo = this.combo;
      this.correctCount++;

      // 콤보 승수 배점 (1x ➔ 2x ➔ 3x ➔ 5x 광폭화)
      let multiplier = 1;
      if (this.combo >= 10) multiplier = 5;
      else if (this.combo >= 7) multiplier = 3;
      else if (this.combo >= 4) multiplier = 2;

      const earned = 100 * multiplier;
      this.currentScore += earned;

      if (buttons[choiceIdx]) {
        buttons[choiceIdx].classList.remove('bg-slate-900/90', 'border-slate-700/80');
        buttons[choiceIdx].classList.add('bg-emerald-600', 'border-emerald-400', 'text-white');
      }

      // 콤보 애니메이션 트리거
      this.triggerComboEffect(multiplier);
    } else {
      // 오답 처리
      this.combo = 0;
      this.wrongCount++;

      if (buttons[choiceIdx]) {
        buttons[choiceIdx].classList.remove('bg-slate-900/90', 'border-slate-700/80');
        buttons[choiceIdx].classList.add('bg-red-600', 'border-red-400', 'text-white');
      }

      // 정답 보기 녹색 표시
      buttons.forEach(btn => {
        if (btn.textContent.includes(this.currentQuestion.target.meaning)) {
          btn.classList.add('border-emerald-400', 'bg-emerald-950/60');
        }
      });
    }

    this.updateBattleUI();

    // 다음 문제로 0.35초 후 전환
    setTimeout(() => {
      this.nextQuestion();
    }, 350);
  }

  triggerComboEffect(multiplier) {
    const comboEl = document.getElementById('battle-combo-badge');
    if (!comboEl) return;

    if (this.combo >= 2) {
      comboEl.classList.remove('hidden');
      comboEl.innerHTML = `🔥 ${this.combo} COMBO! <span class="text-amber-300 font-black">(${multiplier}x 배점)</span>`;
      comboEl.classList.add('animate-bounce');
      setTimeout(() => comboEl.classList.remove('animate-bounce'), 400);
    } else {
      comboEl.classList.add('hidden');
    }
  }

  updateBattleUI() {
    const scoreEl = document.getElementById('battle-user-score');
    const rivalScoreEl = document.getElementById('battle-rival-score');
    if (scoreEl) scoreEl.textContent = this.currentScore.toLocaleString();
    if (rivalScoreEl) rivalScoreEl.textContent = this.rivalScore.toLocaleString();
    this.updateRivalBar();
  }

  updateRivalBar() {
    const userBar = document.getElementById('battle-user-progress-bar');
    const rivalBar = document.getElementById('battle-rival-progress-bar');
    const total = Math.max(1, this.currentScore + this.rivalScore);
    const userPct = Math.min(100, (this.currentScore / total) * 100);
    const rivalPct = Math.min(100, (this.rivalScore / total) * 100);

    if (userBar) userBar.style.width = `${userPct}%`;
    if (rivalBar) rivalBar.style.width = `${rivalPct}%`;
  }

  /**
   * 60초 배틀 종료 및 결과 화면
   */
  finishBattle() {
    this.isBattleActive = false;
    this.stopBattleTimer();

    const isWin = this.currentScore >= this.rivalScore;
    const earnedRP = Math.round(this.currentScore / 10) + (isWin ? 150 : 30);

    // 로컬 스토리지에 배틀 결과 및 RP 누적
    this.recordBattleResult(isWin, earnedRP);

    const container = document.getElementById('battle-body-container');
    if (container) {
      container.innerHTML = `
        <div class="p-6 sm:p-8 text-center space-y-6 max-w-lg mx-auto">
          <div class="text-6xl animate-bounce">
            ${isWin ? '🏆' : '🔥'}
          </div>

          <div>
            <span class="px-3 py-1 rounded-full ${isWin ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30' : 'bg-slate-800 text-slate-300'} font-mono text-xs font-bold uppercase tracking-wider">
              ${isWin ? 'VICTORY • 승리!' : 'GOOD FIGHT • 접전'}
            </span>
            <h3 class="font-serif font-black text-2xl sm:text-3xl text-white mt-2">
              ${isWin ? 'AI 라이벌을 격파했습니다!' : '치열한 접전이었습니다!'}
            </h3>
            <p class="text-xs text-slate-400 mt-1">60초 스피드 어휘 타임어택 결투가 완료되었습니다.</p>
          </div>

          <!-- 점수 비교 스코어보드 -->
          <div class="grid grid-cols-2 gap-3 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-left">
            <div class="border-r border-slate-800 pr-3">
              <span class="text-[11px] text-slate-400 block">내 최종 점수</span>
              <span class="text-2xl font-serif font-black text-amber-400">${this.currentScore.toLocaleString()}</span>
              <span class="text-[10px] text-slate-500 block mt-0.5">정답: ${this.correctCount} / 오답: ${this.wrongCount} (최대 ${this.maxCombo}연속)</span>
            </div>
            <div class="pl-3">
              <span class="text-[11px] text-slate-400 block">${this.currentRival.name}</span>
              <span class="text-2xl font-serif font-black text-slate-300">${this.rivalScore.toLocaleString()}</span>
              <span class="text-[10px] text-slate-500 block mt-0.5">정확도: ${Math.round(this.currentRival.accuracy * 100)}%</span>
            </div>
          </div>

          <!-- 획득 보상 배지 -->
          <div class="bg-gradient-to-r from-amber-400/10 via-yellow-400/15 to-amber-400/10 border border-amber-400/30 rounded-2xl p-3 text-xs text-amber-300 font-bold flex items-center justify-center gap-2">
            <span>✨ 랭킹 포인트(RP) +${earnedRP} RP 획득! (주간 명예의 전당 즉시 반영)</span>
          </div>

          <!-- 하단 버튼군 -->
          <div class="flex items-center gap-3 pt-2">
            <button onclick="window.battleEngine.startBattle()" class="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-serif font-black text-sm shadow-md transition-all cursor-pointer active:scale-95">
              🔄 다시 배틀하기
            </button>
            <button onclick="window.battleEngine.closeBattle(); window.battleEngine.openLeaderboard();" class="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-serif font-bold text-sm border border-slate-700 transition-colors cursor-pointer">
              🏆 명예의 전당 보기
            </button>
          </div>
        </div>
      `;
    }

    if (window.lucide) window.lucide.createIcons();
  }

  recordBattleResult(isWin, earnedRP) {
    try {
      const stats = JSON.parse(localStorage.getItem('veritas_battle_stats_v1') || '{"wins":0,"totalBattles":0,"rp":0}');
      stats.totalBattles++;
      if (isWin) stats.wins++;
      stats.rp = (stats.rp || 0) + earnedRP;
      localStorage.setItem('veritas_battle_stats_v1', JSON.stringify(stats));

      // 스토리지 히스토리 연동
      if (window.storage && window.storage.recordHistoryLog) {
        window.storage.recordHistoryLog({
          type: 'battle',
          title: `[스피드 배틀] ${isWin ? '승리' : '참여'} vs ${this.currentRival.name}`,
          detail: `점수: ${this.currentScore}점 (최대 ${this.maxCombo}콤보)`,
          score: this.currentScore,
          total: this.currentScore + this.rivalScore
        });
      }
    } catch (e) {
      console.warn('Battle record save error:', e);
    }
  }

  createBattleModalDOM() {
    let modal = document.getElementById(this.containerId);
    if (!modal) {
      modal = document.createElement('div');
      modal.id = this.containerId;
      modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-slate-950/90 backdrop-blur-md p-2 sm:p-4';
      document.body.appendChild(modal);
    }

    const rival = this.currentRival;

    modal.innerHTML = `
      <div class="relative w-full max-w-2xl bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">
        <!-- 모달 헤더 & 타이머 바 -->
        <div class="bg-slate-900 border-b border-slate-800 p-4">
          <div class="flex items-center justify-between text-white mb-2.5">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center font-black">⚔️</span>
              <div>
                <h3 class="font-serif font-black text-base sm:text-lg text-white">60초 스피드 1:1 어휘 배틀</h3>
                <span class="text-[10px] text-slate-400 font-mono">VS ${rival.name} (${rival.title})</span>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="text-right">
                <span class="text-[10px] text-slate-400 block font-mono">남은 시간</span>
                <span id="battle-timer-text" class="font-mono font-black text-lg text-amber-400">60초</span>
              </div>
              <button onclick="window.battleEngine.closeBattle()" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>
          </div>

          <!-- 타임 게이지 -->
          <div class="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div id="battle-timer-bar" class="h-full bg-gradient-to-r from-amber-400 to-emerald-400 w-full transition-all duration-1000"></div>
          </div>
        </div>

        <!-- 스코어 비교 스플릿 바 -->
        <div class="bg-slate-900/60 px-5 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
          <div class="flex items-center gap-2">
            <span class="text-amber-400 font-bold">ME:</span>
            <span id="battle-user-score" class="font-black text-white text-sm">0</span>
          </div>
          <div class="flex-1 mx-4 bg-slate-800 rounded-full h-2 overflow-hidden flex">
            <div id="battle-user-progress-bar" class="bg-amber-400 h-full transition-all duration-300" style="width: 50%"></div>
            <div id="battle-rival-progress-bar" class="bg-indigo-500 h-full transition-all duration-300" style="width: 50%"></div>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-slate-400">RIVAL:</span>
            <span id="battle-rival-score" class="font-black text-indigo-300 text-sm">0</span>
          </div>
        </div>

        <!-- 배틀 퀴즈 메인 컨테이너 -->
        <div id="battle-body-container" class="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 custom-scrollbar">
          <!-- 콤보 알림 배지 (처음엔 숨김) -->
          <div class="text-center h-6">
            <span id="battle-combo-badge" class="hidden inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-serif font-black text-xs shadow-md">
              🔥 2 COMBO!
            </span>
          </div>

          <!-- 표제어 문제 카드 -->
          <div class="text-center py-4 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 shadow-inner">
            <span id="battle-question-pos" class="text-xs font-serif italic text-slate-400 block mb-1"></span>
            <h2 id="battle-question-word" class="font-serif font-black text-3xl sm:text-4xl text-amber-300 tracking-tight"></h2>
          </div>

          <!-- 4지선다 버튼 컨테이너 -->
          <div id="battle-choices-container" class="space-y-2.5"></div>
        </div>
      </div>
    `;
  }

  /**
   * 주간 명예의 전당 리더보드 모달 생성 및 데이터 집계
   */
  createLeaderboardModalDOM() {
    let modal = document.getElementById(this.leaderboardContainerId);
    if (!modal) {
      modal = document.createElement('div');
      modal.id = this.leaderboardContainerId;
      modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-slate-950/90 backdrop-blur-md p-2 sm:p-4';
      document.body.appendChild(modal);
    }

    // 로컬 멀티 프로필 목록 가져오기
    const profiles = (window.storage && window.storage.getUserProfiles) ? window.storage.getUserProfiles() : [];
    const battleStats = JSON.parse(localStorage.getItem('veritas_battle_stats_v1') || '{"wins":3,"totalBattles":5,"rp":380}');
    const currentName = (window.storage && window.storage.settings && window.storage.settings.studentName) || '영재 학도';

    // 랭킹 리스트 데이터 종합
    const rankingList = [
      { rank: 1, name: '하버드 마스터', avatar: '👑', tier: 'Master', rp: 2450 + battleStats.rp, winRate: '98%', streak: 45, isAI: true },
      { rank: 2, name: currentName + ' (나)', avatar: '🎓', tier: 'Diamond', rp: 1850 + (battleStats.rp || 0), winRate: `${Math.round(((battleStats.wins || 1) / Math.max(1, battleStats.totalBattles || 1)) * 100)}%`, streak: (window.heatmapEngine ? window.heatmapEngine.streakStats.currentStreak : 12), isMe: true },
      { rank: 3, name: '옥스퍼드 펠로우', avatar: '🏛️', tier: 'Platinum', rp: 1620, winRate: '88%', streak: 28, isAI: true },
      { rank: 4, name: '챌린저 헌터', avatar: '🐺', tier: 'Gold', rp: 1140, winRate: '75%', streak: 15, isAI: true },
      { rank: 5, name: '영재 주니어', avatar: '🌱', tier: 'Silver', rp: 820, winRate: '68%', streak: 8, isAI: true }
    ];

    modal.innerHTML = `
      <div class="relative w-full max-w-3xl bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        <!-- 헤더 -->
        <div class="px-6 py-4 bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border-b border-slate-800 flex items-center justify-between text-white">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center text-xl shadow-xs">
              🏆
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider">Veritas Hall of Fame</span>
                <span class="px-2 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono text-[10px]">주간 시즌 42차</span>
              </div>
              <h2 class="font-serif font-black text-xl text-white">주간 명예의 전당 &amp; 티어 랭킹</h2>
            </div>
          </div>
          <button onclick="window.battleEngine.closeLeaderboard()" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- 본문 -->
        <div class="p-5 sm:p-6 overflow-y-auto space-y-5 custom-scrollbar text-white">
          <!-- 상위 3인 포디엄 (Podium) -->
          <div class="grid grid-cols-3 gap-2.5 sm:gap-4 items-end pt-4 pb-2">
            <!-- 2위 -->
            <div class="bg-gradient-to-t from-slate-900 to-slate-800/80 border border-slate-700/80 rounded-2xl p-3 text-center space-y-1.5 shadow-md order-1">
              <span class="text-2xl">🥈</span>
              <div class="font-serif font-bold text-xs sm:text-sm text-slate-200 truncate">${rankingList[1].name}</div>
              <div class="text-[10px] font-mono font-bold text-amber-400">${rankingList[1].rp.toLocaleString()} RP</div>
              <div class="px-2 py-0.5 rounded-full bg-slate-800 text-[9px] text-slate-300 font-semibold inline-block">${rankingList[1].tier}</div>
            </div>

            <!-- 1위 (챔피언) -->
            <div class="bg-gradient-to-t from-amber-950/60 to-slate-900 border-2 border-amber-400/60 rounded-2xl p-4 text-center space-y-2 shadow-xl order-2 transform -translate-y-2">
              <span class="text-3xl animate-bounce">👑</span>
              <div class="font-serif font-black text-sm sm:text-base text-amber-300 truncate">${rankingList[0].name}</div>
              <div class="text-xs font-mono font-black text-amber-400">${rankingList[0].rp.toLocaleString()} RP</div>
              <div class="px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-[10px] text-amber-300 font-bold inline-block">Grand Master</div>
            </div>

            <!-- 3위 -->
            <div class="bg-gradient-to-t from-slate-900 to-slate-800/80 border border-slate-700/80 rounded-2xl p-3 text-center space-y-1.5 shadow-md order-3">
              <span class="text-2xl">🥉</span>
              <div class="font-serif font-bold text-xs sm:text-sm text-slate-200 truncate">${rankingList[2].name}</div>
              <div class="text-[10px] font-mono font-bold text-slate-400">${rankingList[2].rp.toLocaleString()} RP</div>
              <div class="px-2 py-0.5 rounded-full bg-slate-800 text-[9px] text-slate-300 font-semibold inline-block">${rankingList[2].tier}</div>
            </div>
          </div>

          <!-- 전체 랭킹 테이블 -->
          <div class="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-sm">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-900 text-slate-400 border-b border-slate-800 font-mono text-[10px] uppercase">
                <tr>
                  <th class="py-2.5 px-4 w-12 text-center">순위</th>
                  <th class="py-2.5 px-4">학습자 (프로필)</th>
                  <th class="py-2.5 px-4">티어 등급</th>
                  <th class="py-2.5 px-4">연속 잔디</th>
                  <th class="py-2.5 px-4 text-right">랭킹 포인트 (RP)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/60 font-sans">
                ${rankingList.map(item => `
                  <tr class="${item.isMe ? 'bg-amber-400/10 font-bold' : 'hover:bg-slate-800/50'} transition-colors">
                    <td class="py-3 px-4 text-center font-serif font-black ${item.rank <= 3 ? 'text-amber-400' : 'text-slate-500'}">
                      ${item.rank === 1 ? '🥇' : (item.rank === 2 ? '🥈' : (item.rank === 3 ? '🥉' : item.rank))}
                    </td>
                    <td class="py-3 px-4">
                      <div class="flex items-center gap-2">
                        <span>${item.avatar}</span>
                        <span class="text-white">${item.name}</span>
                        ${item.isMe ? '<span class="px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-bold text-[9px]">MY</span>' : ''}
                      </div>
                    </td>
                    <td class="py-3 px-4">
                      <span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-800 text-slate-300 border border-slate-700">${item.tier}</span>
                    </td>
                    <td class="py-3 px-4 font-mono text-emerald-400">🔥 ${item.streak}일</td>
                    <td class="py-3 px-4 text-right font-mono font-bold text-amber-300">${item.rp.toLocaleString()} RP</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <!-- 하단 액션 버튼: 1:1 배틀 바로 도전하기 -->
          <div class="pt-2">
            <button onclick="window.battleEngine.closeLeaderboard(); window.battleEngine.openBattle('rival_oxford');" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-red-600 via-amber-600 to-red-600 hover:from-red-500 hover:to-amber-500 text-white font-serif font-black text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98">
              <span>⚔️ 60초 스피드 1:1 배틀 도전하기</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

// 전역 인스턴스 등록
window.battleEngine = new BattleEngine();
