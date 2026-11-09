/**
 * Veritas English - 핸즈프리 워크맨 오디오북 플레이어 (AudiobookPlayer)
 * 스마트폰 화면 꺼짐 상태(백그라운드) 및 이어폰 터치 제어 지원 (W3C MediaSession API 연동)
 * 3대 스마트 재생 시퀀스(표준 종합, 스피드 연상, 수면 ASMR) & Web Speech TTS 엔진 결합
 */

class AudiobookPlayer {
  constructor() {
    this.playlist = [];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.isPaused = false;
    this.mode = 'A'; // 'A': 표준 종합, 'B': 스피드 연상, 'C': 수면 ASMR
    this.speed = 1.0; // 0.8, 1.0, 1.2, 1.5
    this.repeatMode = 'all'; // 'all', 'one', 'none'
    this.sleepTimerMinutes = 0; // 0: 꺼짐, 15, 30, 45, -1: 단원 끝
    this.sleepTimerDeadline = null;
    this.sleepTimerInterval = null;
    this.isExpanded = false;
    this.currentBookTitle = '베리타스 핵심 영단어';
    this.silentAudio = null;
    this.ambientContext = null;
    this.ambientGain = null;
    this.stepTimeout = null;

    this.initAudioSession();
  }

  /**
   * 모바일 백그라운드 재생 유지를 위한 무음 오디오 및 MediaSession 초기화
   */
  initAudioSession() {
    // 1초 무음 WAV Data URI (화면 꺼짐 시 브라우저 오디오 스레드 보존용)
    const silentWavBase64 = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
    try {
      this.silentAudio = new Audio(silentWavBase64);
      this.silentAudio.loop = true;
    } catch (e) {
      console.warn('Audio element init error:', e);
    }

    // MediaSession API 핸들러 등록
    if (typeof navigator !== 'undefined' && 'mediaSession' in navigator) {
      navigator.mediaSession.setActionHandler('play', () => this.resume());
      navigator.mediaSession.setActionHandler('pause', () => this.pause());
      navigator.mediaSession.setActionHandler('previoustrack', () => this.prevWord());
      navigator.mediaSession.setActionHandler('nexttrack', () => this.nextWord());
    }
  }

  /**
   * MediaSession 메타데이터 갱신 (스마트폰 잠금화면 & 블루투스 이어폰 디스플레이)
   */
  updateMediaSession(wordObj) {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator) || !wordObj) return;

    try {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `${wordObj.word || ''} [${wordObj.pos || ''}]`,
        artist: wordObj.meaning || 'Veritas English',
        album: `🎧 Veritas Walkman • ${this.currentBookTitle} (${this.currentIndex + 1}/${this.playlist.length})`,
        artwork: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      });
      navigator.mediaSession.playbackState = this.isPlaying ? 'playing' : 'paused';
    } catch (e) {
      console.warn('MediaSession update error:', e);
    }
  }

  /**
   * 재생 목록 설정 및 즉시 재생 시작
   */
  setPlaylist(items, bookTitle = '베리타스 추천 단어', startIndex = 0) {
    if (!items || items.length === 0) {
      alert('재생할 단어 데이터가 없습니다.');
      return;
    }

    this.playlist = items.map(item => ({
      word: item.word || item['영단어'] || item['단어'] || item['표제어'] || '',
      pos: item.pos || item['품사'] || '',
      meaning: item.meaning || item['뜻'] || '',
      example: item.example || item.example_en || item['예문'] || '',
      exampleMeaning: item.exampleMeaning || item.example_ko || item['해석'] || item['예문해석'] || '',
      pronunciation: item.pronunciation || item['발음'] || '',
      collocation: item.collocation || item['연어'] || ''
    })).filter(w => w.word);

    this.currentBookTitle = bookTitle;
    this.currentIndex = Math.max(0, Math.min(startIndex, this.playlist.length - 1));

    this.showWidget();
    this.playCurrentWord();
  }

  /**
   * 오늘 학습할 신규 단어(복습 제외)만 워크맨 오디오북으로 재생
   */
  playTodayNewWords() {
    const words = (window.storage && window.storage.words) ? window.storage.words : [];
    const today = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
    
    // 복습 단어(stage >= 1 또는 isReadingPassage)를 제외하고 오늘 학습 배정된 신규 단어(stage === 0 or undefined) 추출
    let newWords = words.filter(w => !w.isReadingPassage && w.planDate === today && (!w.stage || w.stage === 0));
    if (newWords.length === 0) {
      newWords = words.filter(w => !w.isReadingPassage && w.planDate === today);
    }

    if (newWords.length > 0) {
      this.setPlaylist(newWords, `오늘 학습 단어 (${newWords.length}개)`);
    } else {
      alert('오늘 계획에 배정된 단어가 없습니다. 학습 플래너에서 일정을 등록해 보세요!');
    }
  }

  playTodayWords() {
    const words = (window.storage && window.storage.words) ? window.storage.words : [];
    const today = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
    const todayWords = words.filter(w => w.planDate === today);

    if (todayWords.length > 0) {
      this.setPlaylist(todayWords, `오늘의 단어 (${today})`);
    } else {
      // 복습 예정 단어 또는 등록 단어에서 상위 20개
      const dueWords = (window.storage && window.storage.getDueReviewWords) ? window.storage.getDueReviewWords() : words.slice(0, 20);
      this.setPlaylist(dueWords.length > 0 ? dueWords : words.slice(0, 20), '오늘의 추천 복습 단어');
    }
  }

  /**
   * 복습 예정 단어 오디오북 재생
   */
  playDueWords() {
    const dueWords = (window.storage && window.storage.getDueReviewWords) ? window.storage.getDueReviewWords() : [];
    if (dueWords.length > 0) {
      this.setPlaylist(dueWords, '에빙하우스 망각 도래 복습 단어');
    } else {
      const words = (window.storage && window.storage.words) ? window.storage.words.slice(0, 20) : [];
      this.setPlaylist(words, '망각곡선 정밀 예습 단어');
    }
  }

  /**
   * 취약 오답 단어 오디오북 재생
   */
  playWeakWords() {
    const words = (window.storage && window.storage.words) ? window.storage.words.filter(w => w.isWeak || (w.wrongCount && w.wrongCount > 0)) : [];
    if (words.length > 0) {
      this.setPlaylist(words, '취약 오답 집중 클리닉');
    } else {
      alert('현재 등록된 취약 오답 단어가 없습니다!');
    }
  }

  /**
   * 현재 교재/DAY 단어 오디오북 재생
   */
  playCurrentBook(bookId, dayStr = null) {
    let pool = [];
    let title = '선택 교재';

    // 1. Pathways 확인
    if (bookId && bookId.startsWith('pathways-')) {
      const pwWords = window.VERITAS_PATHWAYS_WORDS_DATA || [];
      pool = pwWords.filter(w => w.collectionId === bookId);
      title = `Pathways ${bookId.replace('pathways-', 'Level ')}`;
    }
    // 2. Oxford 확인
    else if (bookId && bookId.startsWith('oxford-')) {
      const oxWords = window.VERITAS_OXFORD_WORDS_DATA || [];
      pool = oxWords.filter(w => w.collectionId === bookId);
      title = 'Oxford 3000™ & 5000™';
    }
    // 3. 리딩튜터 확인
    else if (bookId && bookId.startsWith('challenger-')) {
      const rtWords = window.READING_TUTOR_CHALLENGER_WORDS_DATA || [];
      pool = rtWords.filter(w => w.collectionId === bookId);
      title = '리딩튜터 챌린저';
    }
    // 4. 스토리지 단어 검색
    else {
      const allWords = (window.storage && window.storage.words) ? window.storage.words : [];
      pool = allWords.filter(w => w.curatedCollectionId === bookId || w.collectionId === bookId);
      title = pool[0]?.curatedCollectionTitle || pool[0]?.collectionTitle || '베리타스 단어장';
    }

    if (dayStr && dayStr !== 'ALL') {
      pool = pool.filter(w => (w.DAY === dayStr || w.day === dayStr || w.curatedDay === dayStr));
      title += ` • ${dayStr}`;
    }

    if (pool.length === 0) {
      alert(`[${title}] 단어 목록을 찾을 수 없습니다.`);
      return;
    }

    this.setPlaylist(pool, title);
  }

  /**
   * 현재 단어 재생 시퀀스 구동
   */
  playCurrentWord() {
    this.clearStepTimeout();

    if (this.playlist.length === 0) return;
    if (this.currentIndex >= this.playlist.length) {
      if (this.repeatMode === 'all') {
        this.currentIndex = 0;
      } else {
        this.pause();
        return;
      }
    }

    const currentWord = this.playlist[this.currentIndex];
    this.isPlaying = true;
    this.isPaused = false;

    // 무음 오디오 재생 트리거 (백그라운드 오디오 세션 활성화)
    if (this.silentAudio && this.silentAudio.paused) {
      this.silentAudio.play().catch(() => {});
    }

    // MediaSession 갱신
    this.updateMediaSession(currentWord);

    // UI 갱신
    this.updateUI();

    // 슬립 타이머 점검
    if (this.checkSleepTimer()) return;

    // 모드 C인 경우 부드러운 수면 배경음 앰비언트 가동
    if (this.mode === 'C') {
      this.startAmbientSound();
    } else {
      this.stopAmbientSound();
    }

    // TTS 속도 설정
    if (window.tts) {
      window.tts.setRate(this.mode === 'C' ? 0.88 : this.speed);
    }

    // 3대 시퀀스 분기 실행
    if (this.mode === 'A') {
      this.executeSequenceA(currentWord);
    } else if (this.mode === 'B') {
      this.executeSequenceB(currentWord);
    } else {
      this.executeSequenceC(currentWord);
    }
  }

  /**
   * [모드 A: 표준 종합형]
   * [영단어 1회] ➔ 1초 정적 ➔ [한국어 뜻] ➔ [영어 예문] ➔ [예문 해석] ➔ 다음 단어
   */
  executeSequenceA(w) {
    if (!this.isPlaying) return;

    // 1. 영어 단어 발음
    window.tts.speak(w.word, () => {}, () => {
      if (!this.isPlaying) return;

      // 2. 1.0초 정적 후 한국어 뜻
      this.stepTimeout = setTimeout(() => {
        if (!this.isPlaying) return;

        window.tts.speakKorean(w.meaning, () => {}, () => {
          if (!this.isPlaying) return;

          // 3. 예문이 있는 경우 예문(영) ➔ 해석(한)
          if (w.example && w.example.trim()) {
            this.stepTimeout = setTimeout(() => {
              if (!this.isPlaying) return;

              window.tts.speak(w.example, () => {}, () => {
                if (!this.isPlaying) return;

                if (w.exampleMeaning && w.exampleMeaning.trim()) {
                  this.stepTimeout = setTimeout(() => {
                    if (!this.isPlaying) return;

                    window.tts.speakKorean(w.exampleMeaning, () => {}, () => {
                      this.scheduleNextWord(1200);
                    });
                  }, 600);
                } else {
                  this.scheduleNextWord(1200);
                }
              });
            }, 800);
          } else {
            this.scheduleNextWord(1200);
          }
        });
      }, 900);
    });
  }

  /**
   * [모드 B: 스피드 집중 연상형]
   * [영단어 1회] ➔ 0.4초 ➔ [영단어 2회] ➔ 1.5초 무음 연상 ➔ [한국어 뜻] ➔ 다음 단어
   */
  executeSequenceB(w) {
    if (!this.isPlaying) return;

    // 1차 단어
    window.tts.speak(w.word, () => {}, () => {
      if (!this.isPlaying) return;

      this.stepTimeout = setTimeout(() => {
        if (!this.isPlaying) return;

        // 2차 단어 반복
        window.tts.speak(w.word, () => {}, () => {
          if (!this.isPlaying) return;

          // 1.5초 자가 연상 대기 시간
          this.stepTimeout = setTimeout(() => {
            if (!this.isPlaying) return;

            // 뜻 발음
            window.tts.speakKorean(w.meaning, () => {}, () => {
              this.scheduleNextWord(1000);
            });
          }, 1500);
        });
      }, 400);
    });
  }

  /**
   * [모드 C: 수면 전 연상 & ASMR]
   * 차분한 나지막한 톤 + 2초 여유 + 슬립 타이머
   */
  executeSequenceC(w) {
    if (!this.isPlaying) return;

    window.tts.speak(w.word, () => {}, () => {
      if (!this.isPlaying) return;

      this.stepTimeout = setTimeout(() => {
        if (!this.isPlaying) return;

        window.tts.speakKorean(w.meaning, () => {}, () => {
          this.scheduleNextWord(2200);
        });
      }, 1800);
    });
  }

  scheduleNextWord(delayMs = 1000) {
    if (!this.isPlaying) return;

    this.stepTimeout = setTimeout(() => {
      if (!this.isPlaying) return;

      if (this.repeatMode === 'one') {
        this.playCurrentWord();
      } else {
        this.currentIndex++;
        this.playCurrentWord();
      }
    }, delayMs);
  }

  clearStepTimeout() {
    if (this.stepTimeout) {
      clearTimeout(this.stepTimeout);
      this.stepTimeout = null;
    }
  }

  pause() {
    this.isPlaying = false;
    this.isPaused = true;
    this.clearStepTimeout();
    if (window.tts) window.tts.stop();
    if (this.silentAudio) this.silentAudio.pause();
    this.stopAmbientSound();
    if (typeof navigator !== 'undefined' && 'mediaSession' in navigator) {
      navigator.mediaSession.playbackState = 'paused';
    }
    this.updateUI();
  }

  resume() {
    if (this.playlist.length === 0) return;
    this.isPlaying = true;
    this.isPaused = false;
    this.playCurrentWord();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.resume();
    }
  }

  nextWord() {
    this.clearStepTimeout();
    if (window.tts) window.tts.stop();
    if (this.currentIndex < this.playlist.length - 1) {
      this.currentIndex++;
      this.playCurrentWord();
    } else if (this.repeatMode === 'all') {
      this.currentIndex = 0;
      this.playCurrentWord();
    } else {
      this.pause();
    }
  }

  prevWord() {
    this.clearStepTimeout();
    if (window.tts) window.tts.stop();
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.playCurrentWord();
    } else {
      this.currentIndex = 0;
      this.playCurrentWord();
    }
  }

  setMode(modeKey) {
    this.mode = modeKey;
    if (this.isPlaying) {
      this.playCurrentWord();
    } else {
      this.updateUI();
    }
  }

  setSpeed(speedVal) {
    this.speed = parseFloat(speedVal) || 1.0;
    if (window.tts) window.tts.setRate(this.speed);
    this.updateUI();
  }

  setRepeat(repeatVal) {
    this.repeatMode = repeatVal;
    this.updateUI();
  }

  setSleepTimer(minutes) {
    this.sleepTimerMinutes = parseInt(minutes, 10);
    if (this.sleepTimerInterval) clearInterval(this.sleepTimerInterval);

    if (this.sleepTimerMinutes > 0) {
      this.sleepTimerDeadline = Date.now() + this.sleepTimerMinutes * 60 * 1000;
      this.sleepTimerInterval = setInterval(() => {
        this.checkSleepTimer();
      }, 1000);
    } else {
      this.sleepTimerDeadline = null;
    }
    this.updateUI();
  }

  checkSleepTimer() {
    if (this.sleepTimerDeadline && Date.now() >= this.sleepTimerDeadline) {
      this.pause();
      this.sleepTimerDeadline = null;
      if (this.sleepTimerInterval) clearInterval(this.sleepTimerInterval);
      alert('🌙 슬립 타이머가 완료되어 오디오북 재생이 안전하게 종료되었습니다.');
      return true;
    }
    return false;
  }

  /**
   * Web Audio API 기반 부드러운 핑크 노이즈/수면 앰비언트 사운드 합성 (외부 오디오 파일 없이 순수 코드 합성)
   */
  startAmbientSound() {
    try {
      if (this.ambientContext) return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      this.ambientContext = new AudioCtx();
      const bufferSize = this.ambientContext.sampleRate * 2;
      const noiseBuffer = this.ambientContext.createBuffer(1, bufferSize, this.ambientContext.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;

      // 핑크 노이즈 필터링
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        output[i] = (b0 + b1 + b2 + white * 0.5362) * 0.04;
      }

      const whiteNoise = this.ambientContext.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      this.ambientGain = this.ambientContext.createGain();
      this.ambientGain.gain.setValueAtTime(0.08, this.ambientContext.currentTime);

      whiteNoise.connect(this.ambientGain);
      this.ambientGain.connect(this.ambientContext.destination);
      whiteNoise.start(0);
    } catch (e) {
      console.warn('Ambient sound synthesis error:', e);
    }
  }

  stopAmbientSound() {
    try {
      if (this.ambientContext) {
        this.ambientContext.close();
        this.ambientContext = null;
        this.ambientGain = null;
      }
    } catch (e) {}
  }

  showWidget() {
    const widget = document.getElementById('audiobook-player-widget');
    if (widget) {
      widget.classList.remove('translate-y-full');
      widget.classList.remove('hidden');
    }
  }

  closeWidget() {
    this.pause();
    const widget = document.getElementById('audiobook-player-widget');
    if (widget) {
      widget.classList.add('translate-y-full');
    }
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
    this.updateUI();
  }

  updateUI() {
    const current = this.playlist[this.currentIndex] || {
      word: '재생 대기 중',
      meaning: '단어를 선택해 주세요',
      pos: '',
      example: '',
      exampleMeaning: '',
      collocation: ''
    };

    const countText = this.playlist.length > 0 ? `${this.currentIndex + 1} / ${this.playlist.length}` : '0 / 0';
    const pct = this.playlist.length > 0 ? Math.round(((this.currentIndex + 1) / this.playlist.length) * 100) : 0;

    // 미니 플레이어 엘리먼트 갱신
    const wordEl = document.getElementById('audiobook-word-text');
    const meaningEl = document.getElementById('audiobook-meaning-text');
    const posEl = document.getElementById('audiobook-pos-badge');
    const countEl = document.getElementById('audiobook-count-text');
    const bookTitleEl = document.getElementById('audiobook-book-title');
    const progressBar = document.getElementById('audiobook-progress-fill');
    const playBtn = document.getElementById('audiobook-btn-play');
    const visualizer = document.getElementById('audiobook-soundwave-visualizer');

    if (wordEl) wordEl.textContent = current.word;
    if (meaningEl) meaningEl.textContent = current.meaning;
    if (posEl) posEl.textContent = current.pos || '';
    if (countEl) countEl.textContent = countText;
    if (bookTitleEl) bookTitleEl.textContent = this.currentBookTitle;
    if (progressBar) progressBar.style.width = `${pct}%`;

    if (playBtn) {
      playBtn.innerHTML = this.isPlaying 
        ? `<i data-lucide="pause" class="w-5 h-5 text-slate-950"></i>`
        : `<i data-lucide="play" class="w-5 h-5 text-slate-950 ml-0.5"></i>`;
    }

    if (visualizer) {
      visualizer.classList.toggle('opacity-100', this.isPlaying);
      visualizer.classList.toggle('opacity-30', !this.isPlaying);
    }

    // 모드 뱃지 액티브 스타일
    ['A', 'B', 'C'].forEach(mKey => {
      const btn = document.getElementById(`audiobook-mode-btn-${mKey}`);
      if (btn) {
        const isActive = this.mode === mKey;
        btn.classList.toggle('bg-amber-400', isActive);
        btn.classList.toggle('text-slate-950', isActive);
        btn.classList.toggle('font-bold', isActive);
        btn.classList.toggle('bg-white/10', !isActive);
        btn.classList.toggle('text-slate-300', !isActive);
      }
    });

    // 배속 뱃지 스타일
    const speedSelect = document.getElementById('audiobook-speed-select');
    if (speedSelect) speedSelect.value = String(this.speed);

    // 확장 서랍(Drawer) 뷰 갱신
    const drawer = document.getElementById('audiobook-expanded-drawer');
    const expandBtnIcon = document.getElementById('audiobook-expand-icon');
    if (drawer) {
      drawer.classList.toggle('hidden', !this.isExpanded);
    }
    if (expandBtnIcon) {
      expandBtnIcon.setAttribute('data-lucide', this.isExpanded ? 'chevron-down' : 'chevron-up');
    }

    // 서랍 내부 상세 내용
    const drawerExample = document.getElementById('audiobook-drawer-example');
    const drawerExMeaning = document.getElementById('audiobook-drawer-example-meaning');
    const drawerColloc = document.getElementById('audiobook-drawer-colloc');

    if (drawerExample) drawerExample.textContent = current.example ? `"${current.example}"` : '예문 정보 없음';
    if (drawerExMeaning) drawerExMeaning.textContent = current.exampleMeaning || '';
    if (drawerColloc) {
      drawerColloc.textContent = current.collocation ? `🔗 연어: ${current.collocation}` : '';
      drawerColloc.classList.toggle('hidden', !current.collocation);
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
}

// 전역 싱글톤 인스턴스 등록
window.audiobookPlayer = new AudiobookPlayer();
