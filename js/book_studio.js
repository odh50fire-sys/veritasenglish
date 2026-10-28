/**
 * Veritas English - 부교재 전용 [보카북 & 워크북] 스튜디오 엔진 (BookStudioEngine)
 * 21개 큐레이션 부교재 + AI 맞춤 교재 전용
 * 8대 시리즈별 고유 비주얼 디자인 & 특화 학습·문제 구성 자동 합성 및 무오류 A4 인쇄
 */

(function (window) {
  'use strict';

  // 8대 시리즈 테마 맵핑
  const SERIES_MAP = {
    'curated-m1-1': 'middle',
    'curated-m1-2': 'middle',
    'curated-m2-1': 'middle',
    'curated-m2-2': 'middle',
    'curated-m3-1': 'middle',
    'curated-m3-2': 'middle',
    'curated-killer': 'killer',
    'curated-tech': 'trend',
    'curated-phrasal': 'trend',
    'curated-slang': 'trend',
    'curated-us-elem': 'academic',
    'curated-us-mid1': 'academic',
    'curated-us-mid2': 'academic',
    'curated-m-idioms': 'idioms',
    'curated-csat-idioms': 'idioms',
    'curated-native-proverbs': 'idioms',
    'curated-travel-air': 'travel',
    'curated-travel-hotel': 'travel',
    'curated-travel-dining': 'travel',
    'curated-travel-transit': 'travel',
    'curated-travel-emerge': 'travel',
    'curated-emotions': 'literature',
    'curated-literature': 'literature',
    'veritas-original-l1': 'original',
    'veritas-original-l2': 'original',
    'veritas-original-l3': 'original',
    'veritas-original-l4': 'original',
    'veritas-original-l5': 'original',
    'veritas-original-l6': 'original',
    'veritas-original-l7': 'original',
    'veritas-original-l8': 'original',
    'veritas-original-l9': 'original',
    'veritas-original-l10': 'original'
  };

  const SERIES_INFO = {
    original: {
      name: '베리타스 오리지널 마스터 보카',
      sub: 'Lv.1 스타터부터 Lv.10 엘리트까지 총 6,000단어 30일 완성 공식 기본서',
      icon: '👑',
      accentColor: '#0f172a',
      badgeClass: 'series-theme-original'
    },
    middle: {
      name: '중등 내신 어휘 마스터',
      sub: '교과서 단원별 빈출 어휘 & 서술형 완벽 대비',
      icon: '🎓',
      accentColor: '#1e3a8a',
      badgeClass: 'series-theme-middle'
    },
    killer: {
      name: '수능 1등급 킬러 보카',
      sub: '출제 1순위 다의어 & 혼동 어휘 정밀 분석',
      icon: '🎯',
      accentColor: '#881337',
      badgeClass: 'series-theme-killer'
    },
    trend: {
      name: '트렌드 & 실전 구어',
      sub: '테크·AI 뉴스 & 리얼 슬랭·핵심 구동사',
      icon: '⚡',
      accentColor: '#0f766e',
      badgeClass: 'series-theme-trend'
    },
    academic: {
      name: '미국 교과서 학술 어휘',
      sub: 'Tier 2 Academic Lexicon & 영영 풀이',
      icon: '🏫',
      accentColor: '#0f172a',
      badgeClass: 'series-theme-academic'
    },
    idioms: {
      name: '필수 숙어 & 관용구·속담',
      sub: '중학·고등 빈출 숙어 100 & 찐 원어민 관용구·속담',
      icon: '🧩',
      accentColor: '#047857',
      badgeClass: 'series-theme-idioms'
    },
    travel: {
      name: '글로벌 여행 서바이벌',
      sub: '공항·호텔·식당·교통 현장 직결 실전 영어',
      icon: '✈️',
      accentColor: '#0369a1',
      badgeClass: 'series-theme-travel'
    },
    literature: {
      name: '감정 묘사 & 클래식 문학',
      sub: '원어민 감정 스펙트럼 & 영미 명작 문학 어휘',
      icon: '📜',
      accentColor: '#701a75',
      badgeClass: 'series-theme-literature'
    },
    custom_ai: {
      name: 'AI 맞춤 생성 보카',
      sub: '학습자 목적 & 수준 기반 인공지능 맞춤 교재',
      icon: '✨',
      accentColor: '#4c1d95',
      badgeClass: 'series-theme-custom_ai'
    }
  };

  const SPECIAL_MODES = {
    original: [
      { id: 'collocation', name: '🔗 핵심 콜로케이션', desc: '부교재 1: 전치사 & 연어 결합집' },
      { id: 'writing_drill', name: '✍️ 서술형 패턴 드릴', desc: '부교재 2: 조건 영작 & 패턴 드릴' },
      { id: 'cloze_sprint', name: '⚡ 5분 스프린트 펑크', desc: '부교재 3: 5분 빈칸 펑크 테스트북' }
    ],
    middle: [
      { id: 'writing', name: '✍️ 서술형 영작 노트', desc: '내신 서술형 조건부 문장 완성' },
      { id: 'cram', name: '⚡ 10분 파이널 시트', desc: 'A4 1장 초압축 시험직전 암기' }
    ],
    killer: [
      { id: 'matrix', name: '🎯 혼동어휘 클리닉', desc: '수능 1:1 혼동어휘 정밀 대조' },
      { id: 'cram', name: '⚡ 10분 파이널 시트', desc: 'A4 1장 초압축 수능 보카' }
    ],
    travel: [
      { id: 'pocket', name: '✈️ 포켓 회화 핸드북', desc: '현장 실전 롤플레잉 포켓북' }
    ],
    trend: [
      { id: 'script', name: '🎬 섀도잉 실전 대본집', desc: '미드·유튜브 리얼 대화문' }
    ],
    academic: [
      { id: 'academic_reader', name: '🏫 학술 영영 리더', desc: 'Tier-2 영영정의 & 미니 지문' }
    ],
    idioms: [
      { id: 'writing', name: '✍️ 통문장 영작 완성', desc: '전치사 결합형 통문장 훈련' }
    ],
    literature: [
      { id: 'reader', name: '📜 명작 소설 원문 리더', desc: '고전 명작 발췌 & 감정 스펙트럼' }
    ],
    custom_ai: [
      { id: 'writing', name: '✍️ 서술형 영작 노트', desc: '맞춤 서술형 문장 완성' },
      { id: 'cram', name: '⚡ 10분 파이널 시트', desc: 'A4 1장 초압축 파이널' }
    ]
  };

  class BookStudioEngine {
    constructor() {
      this.currentBookId = null;
      this.currentMode = 'voca'; // 'voca' | 'workbook' | 'both'
      this.selectedDay = 'ALL';  // 'ALL' or 'DAY 01', 'DAY 02'
      this.blindMode = 'none';   // 'none' | 'meaning' | 'word'
      this.includeAnswers = true;
      this.shuffleSeed = 0;      // 워크북 문제 섞기 시드
      this.currentBookMeta = null;
      this.groupedDays = {};
    }

    /**
     * 사용 가능한 부교재 목록 반환 (능률 제외 21개 + AI 맞춤 단어장)
     */
    getAvailableBooks() {
      const list = [];

      // 0. 베리타스 오리지널 마스터 교재 10종
      const origList = (window.VERITAS_ORIGINAL_COLLECTIONS || []);
      origList.forEach(c => {
        list.push({
          id: c.id,
          title: c.title,
          badge: c.badge || '오리지널',
          totalDays: c.totalDays || 30,
          level: c.level || 1,
          category: c.category || 'original',
          series: 'original',
          isOriginalCurriculum: true,
          isCustom: false
        });
      });

      // 1. 21개 큐레이션 부교재
      const curList = (window.CURATED_COLLECTIONS || []).filter(c => 
        !c.id.includes('neungryul') && !c.id.startsWith('veritas-original-')
      );
      curList.forEach(c => {
        list.push({
          id: c.id,
          title: c.title,
          badge: c.badge || '부교재',
          totalDays: c.totalDays || 5,
          level: c.level || 3,
          category: c.category,
          series: SERIES_MAP[c.id] || 'middle',
          isCustom: false
        });
      });

      // 2. AI 맞춤 생성 교재
      if (window.storage && typeof window.storage.getCustomCollections === 'function') {
        const customColls = window.storage.getCustomCollections() || [];
        customColls.forEach(c => {
          list.push({
            id: c.id,
            title: c.title || 'AI 맞춤 생성 교재',
            badge: c.badge || 'AI 맞춤',
            totalDays: c.totalDays || c.days || 5,
            level: c.level || 5,
            category: 'custom',
            series: 'custom_ai',
            isCustom: true
          });
        });
      }

      return list;
    }

    /**
     * 교재 데이터 로드 및 Day별 그룹화 (다양한 데이터 필드명 완벽 정규화)
     */
    loadBookData(bookId) {
      this.currentBookId = bookId;
      const books = this.getAvailableBooks();
      this.currentBookMeta = books.find(b => b.id === bookId) || books[0];
      if (!this.currentBookMeta) return false;

      let rawWords = [];

      if (this.currentBookMeta.isCustom) {
        // AI 맞춤 단어장
        if (window.storage && typeof window.storage.getCustomWords === 'function') {
          const allCustom = window.storage.getCustomWords() || [];
          rawWords = allCustom.filter(w => w.collectionId === bookId);
        }
      } else if (this.currentBookMeta.isOriginalCurriculum || bookId.startsWith('veritas-original-')) {
        // 베리타스 오리지널 6,000 필수 영단어
        const allOrig = window.VERITAS_ORIGINAL_WORDS_DATA || [];
        rawWords = allOrig.filter(w => w.collectionId === bookId);
      } else {
        // 21개 큐레이션 단어장
        const allCurated = window.CURATED_WORDS_DATA || [];
        rawWords = allCurated.filter(w => w.collectionId === bookId);
      }

      // Day별 정렬 및 그룹화 (모든 키 완벽 대응)
      this.groupedDays = {};
      rawWords.forEach((w, idx) => {
        const dayKey = w.DAY || (w.day ? `DAY ${String(w.day).padStart(2, '0')}` : 'DAY 01');
        if (!this.groupedDays[dayKey]) {
          this.groupedDays[dayKey] = [];
        }

        const resolvedWord = String(
          w.영단어 || w.단어 || w.word || w.lemma || w.표제어 || w.어휘 || ''
        ).trim();

        const resolvedMeaning = String(
          w.뜻 || w.meaning || w.의미 || w.해설 || ''
        ).trim();

        const resolvedExample = String(
          w.예문 || w.example || w.sentence || w.문장 || ''
        ).trim();

        const resolvedTranslation = String(
          w.해석 || w.translation || w.예문해석 || ''
        ).trim();

        const resolvedPos = String(
          w.품사 || w.pos || ''
        ).trim();

        const resolvedNum = w.번호 || w.num || (this.groupedDays[dayKey].length + 1);

        this.groupedDays[dayKey].push({
          num: resolvedNum,
          word: resolvedWord,
          pos: resolvedPos,
          meaning: resolvedMeaning,
          example: resolvedExample,
          translation: resolvedTranslation,
          collocation: w.collocation || '',
          writingPattern: w.writingPattern || '',
          clozeHint: w.clozeHint || '',
          pronunciation: w.발음 || w.pronunciation || ''
        });
      });

      // 각 Day 내에서 번호순 정렬
      Object.keys(this.groupedDays).forEach(d => {
        this.groupedDays[d].sort((a, b) => a.num - b.num);
      });

      return true;
    }

    /**
     * 스튜디오 모달 열기
     */
    open(bookId = null, defaultMode = 'voca', filterDay = 'ALL') {
      const books = this.getAvailableBooks();
      if (books.length === 0) {
        alert('이용 가능한 부교재 데이터가 없습니다.');
        return;
      }

      const targetId = bookId || (books.some(b => b.id === this.currentBookId) ? this.currentBookId : books[0].id);
      this.currentMode = defaultMode;
      this.selectedDay = filterDay;
      this.blindMode = 'none';

      this.loadBookData(targetId);
      this.renderModal();
    }

    /**
     * 모달 렌더링
     */
    renderModal() {
      let modal = document.getElementById('book-studio-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'book-studio-modal';
        document.body.appendChild(modal);
      }

      modal.className = 'fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex flex-col overflow-hidden';

      const meta = this.currentBookMeta;
      const seriesKey = meta.series || 'middle';
      const seriesInfo = SERIES_INFO[seriesKey] || SERIES_INFO.middle;
      const days = Object.keys(this.groupedDays);

      modal.innerHTML = `
        <!-- 상단 고정 제어 툴바 (인쇄 시 완전 숨김) -->
        <div class="studio-toolbar no-print bg-slate-900 border-b border-slate-800 text-white px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 shadow-lg shrink-0">
          <div class="flex items-center gap-3">
            <span class="text-2xl">${seriesInfo.icon}</span>
            <div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-amber-400 text-slate-950">
                  ${seriesInfo.name}
                </span>
                <span class="text-xs text-slate-400 hidden sm:inline">Veritas 부교재 출판 스튜디오</span>
              </div>
              <h2 class="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>${meta.title}</span>
              </h2>
            </div>
          </div>

          <!-- 컨트롤러 버튼 그룹 -->
          <div class="flex flex-wrap items-center gap-2">
            <!-- 교재 변경 드롭다운 -->
            <select id="studio-book-select" class="bg-slate-800 text-white text-xs rounded-lg px-2.5 py-1.5 border border-slate-700 outline-none cursor-pointer max-w-[160px] sm:max-w-[210px] truncate" onchange="window.bookStudioEngine.onBookChange(this.value)">
              ${this.renderBookOptionsHtml()}
            </select>

            <!-- 단원 선택 (전체 vs 특정 Day) -->
            <select id="studio-day-select" class="bg-slate-800 text-amber-300 font-semibold text-xs rounded-lg px-2.5 py-1.5 border border-slate-700 outline-none cursor-pointer" onchange="window.bookStudioEngine.onDayChange(this.value)">
              <option value="ALL" ${this.selectedDay === 'ALL' ? 'selected' : ''}>전체 단원 (${days.length} Days)</option>
              ${days.map(d => `<option value="${d}" ${this.selectedDay === d ? 'selected' : ''}>${d} (${this.groupedDays[d].length}단어)</option>`).join('')}
            </select>

            <!-- 모드 전환 (기본 2종 + 특화 스페셜 부교재 동적 확장) -->
            <div class="inline-flex flex-wrap items-center rounded-lg bg-slate-800 p-0.5 border border-slate-700 text-xs font-semibold gap-0.5">
              <button onclick="window.bookStudioEngine.setMode('voca')" class="px-2.5 py-1 rounded-md transition-colors ${this.currentMode === 'voca' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
                📖 보카북
              </button>
              <button onclick="window.bookStudioEngine.setMode('workbook')" class="px-2.5 py-1 rounded-md transition-colors ${this.currentMode === 'workbook' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
                📝 워크북
              </button>
              <button onclick="window.bookStudioEngine.setMode('both')" class="px-2.5 py-1 rounded-md transition-colors ${this.currentMode === 'both' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
                📚 합본
              </button>
              ${this.renderSpecialModeButtons(seriesKey)}
            </div>

            <!-- 셀프 테스트 (블라인드 가리기) 토글 -->
            <select id="studio-blind-select" class="bg-slate-800 text-slate-200 text-xs rounded-lg px-2 py-1.5 border border-slate-700 outline-none cursor-pointer" onchange="window.bookStudioEngine.onBlindChange(this.value)">
              <option value="none" ${this.blindMode === 'none' ? 'selected' : ''}>👀 정상 보기</option>
              <option value="meaning" ${this.blindMode === 'meaning' ? 'selected' : ''}>🙈 뜻 가리기 (테스트)</option>
              <option value="word" ${this.blindMode === 'word' ? 'selected' : ''}>🤐 단어 가리기 (영작)</option>
            </select>

            <!-- 문제 새로 섞기 (워크북/합본 모드) -->
            ${this.currentMode !== 'voca' ? `
            <button onclick="window.bookStudioEngine.reshuffle()" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold border border-slate-700 cursor-pointer" title="단어 배분과 문제 순서를 새로 섞습니다 (정답지도 함께 바뀜)">
              🔀 문제 새로 섞기
            </button>` : ''}

            <!-- 인쇄 버튼 -->
            <button onclick="window.bookStudioEngine.print()" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-transform active:scale-95 cursor-pointer" title="A4 고품질 인쇄 또는 PDF 저장">
              <i data-lucide="printer" class="w-4 h-4"></i>
              <span>A4 인쇄 (PDF)</span>
            </button>

            <!-- 닫기 버튼 -->
            <button onclick="window.bookStudioEngine.close()" class="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer" title="창 닫기">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>
        </div>

        <!-- 메인 프리뷰 영역 (A4 용지 렌더링) -->
        <div id="studio-scroll-area" class="studio-paper-preview flex-1 overflow-y-auto ${seriesInfo.badgeClass} ${this.blindMode === 'meaning' ? 'blind-meanings' : (this.blindMode === 'word' ? 'blind-words' : '')}">
          <div id="studio-paper-container" class="w-full max-w-[210mm] mx-auto">
            ${this.buildPreviewHtml()}
          </div>
        </div>
      `;

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }

    /**
     * 교재 선택 드롭다운 옵션 HTML 생성
     */
    renderBookOptionsHtml() {
      const books = this.getAvailableBooks();
      let html = '';

      const customBooks = books.filter(b => b.isCustom);
      if (customBooks.length > 0) {
        html += `<optgroup label="✨ AI 맞춤 생성 교재">`;
        customBooks.forEach(b => {
          html += `<option value="${b.id}" ${b.id === this.currentBookId ? 'selected' : ''}>${b.title}</option>`;
        });
        html += `</optgroup>`;
      }

      const seriesOrder = ['original', 'middle', 'killer', 'trend', 'academic', 'idioms', 'travel', 'literature'];
      seriesOrder.forEach(sk => {
        const sInfo = SERIES_INFO[sk];
        const sBooks = books.filter(b => !b.isCustom && b.series === sk);
        if (sBooks.length > 0) {
          html += `<optgroup label="${sInfo.icon} ${sInfo.name}">`;
          sBooks.forEach(b => {
            html += `<option value="${b.id}" ${b.id === this.currentBookId ? 'selected' : ''}>${b.title}</option>`;
          });
          html += `</optgroup>`;
        }
      });

      return html;
    }

    onBookChange(bookId) {
      this.selectedDay = 'ALL';
      this.loadBookData(bookId);
      this.renderModal();
    }

    onDayChange(dayVal) {
      this.selectedDay = dayVal;
      this.refreshPaper();
    }

    setMode(mode) {
      this.currentMode = mode;
      this.renderModal();
    }

    onBlindChange(val) {
      this.blindMode = val;
      const scrollArea = document.getElementById('studio-scroll-area');
      if (scrollArea) {
        scrollArea.classList.remove('blind-meanings', 'blind-words');
        if (val === 'meaning') scrollArea.classList.add('blind-meanings');
        if (val === 'word') scrollArea.classList.add('blind-words');
      }
    }

    refreshPaper() {
      const container = document.getElementById('studio-paper-container');
      if (container) {
        container.innerHTML = this.buildPreviewHtml();
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      }
    }

    /**
     * 브라우저 인쇄 모드 전용 클래스 부착 후 print 실행
     */
    print() {
      document.body.classList.add('is-printing-book-studio');
      setTimeout(() => {
        window.print();
        setTimeout(() => {
          document.body.classList.remove('is-printing-book-studio');
        }, 500);
      }, 100);
    }

    close() {
      const modal = document.getElementById('book-studio-modal');
      if (modal) {
        modal.remove();
      }
      document.body.classList.remove('is-printing-book-studio');
    }

    // =========================================================================
    // 문서 렌더링 로직 (표지, 목차, 보카북, 워크북, 정답지)
    // =========================================================================


    renderSpecialModeButtons(seriesKey) {
      const modes = SPECIAL_MODES[seriesKey] || [];
      if (!modes.length) return '';
      return modes.map(m => `
        <button onclick="window.bookStudioEngine.setMode('${m.id}')" class="px-2.5 py-1 rounded-md transition-colors ${this.currentMode === m.id ? 'bg-amber-600 text-white font-bold shadow-xs' : 'text-amber-300 hover:text-white'}" title="${m.desc}">
          ${m.name}
        </button>
      `).join('');
    }

    buildPreviewHtml() {
      const meta = this.currentBookMeta;
      const days = this.selectedDay === 'ALL' ? Object.keys(this.groupedDays) : [this.selectedDay];
      let html = '';

      // [스페셜 부교재 모드 처리]
      if (this.currentMode === 'cram') {
        return this.renderCramSheet(days);
      }

      // 1. 전체 인쇄 모드일 경우: 표지(Cover) + 목차(TOC) 포함
      if (this.selectedDay === 'ALL') {
        html += this.renderCoverSheet();
        html += this.renderTOCSheet();
      }

      // 2. Day별 시트 렌더링
      days.forEach(dayKey => {
        const words = this.groupedDays[dayKey] || [];
        if (words.length === 0) return;

        if (this.currentMode === 'voca' || this.currentMode === 'both') {
          html += this.renderVocaDaySheet(dayKey, words);
        }
        if (this.currentMode === 'workbook' || this.currentMode === 'both') {
          html += this.renderWorkbookDaySheet(dayKey, words);
        }
        if (this.currentMode === 'writing') {
          html += this.renderWritingNoteSheet(dayKey, words);
        }
        if (this.currentMode === 'pocket') {
          html += this.renderPocketTravelSheet(dayKey, words);
        }
        if (this.currentMode === 'script') {
          html += this.renderShadowingScriptSheet(dayKey, words);
        }
        if (this.currentMode === 'academic_reader') {
          html += this.renderAcademicReaderSheet(dayKey, words);
        }
        if (this.currentMode === 'matrix') {
          html += this.renderMatrixSheet(dayKey, words);
        }
        if (this.currentMode === 'reader') {
          html += this.renderLiteratureReaderSheet(dayKey, words);
        }
        if (this.currentMode === 'collocation') {
          html += this.renderOriginalCollocationSheet(dayKey, words);
        }
        if (this.currentMode === 'writing_drill') {
          html += this.renderOriginalWritingDrillSheet(dayKey, words);
        }
        if (this.currentMode === 'cloze_sprint') {
          html += this.renderOriginalClozeSprintSheet(dayKey, words);
        }
      });

      // 3. 빠른 정답지 (워크북/합본/서술형 모드 지원)
      if ((this.currentMode === 'workbook' || this.currentMode === 'both') && this.includeAnswers) {
        html += this.renderAnswerKeySheet(days);
      }

      return html;
    }

    /**
     * 교재 표지 (Cover Page)
     */
    renderCoverSheet() {
      const meta = this.currentBookMeta;
      const seriesKey = meta.series || 'middle';
      const seriesInfo = SERIES_INFO[seriesKey] || SERIES_INFO.middle;
      const totalWords = Object.values(this.groupedDays).reduce((acc, cur) => acc + cur.length, 0);
      const totalDays = Object.keys(this.groupedDays).length;

      return `
        <div class="studio-a4-sheet studio-cover-sheet">
          <div>
            <div class="flex items-center justify-between border-b-2 border-slate-900 pb-4 mb-8">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-black tracking-widest text-slate-800">VERITAS ENGLISH</span>
                <span class="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">• Scholars' Academy</span>
              </div>
              <span class="text-xs font-serif font-bold text-slate-600">부교재 스페셜 에디션</span>
            </div>

            <div class="mb-6">
              <span class="studio-cover-badge">
                <span>${seriesInfo.icon}</span>
                <span>${seriesInfo.name}</span>
                <span class="text-slate-400">|</span>
                <span>${meta.badge || '특화 부교재'}</span>
              </span>
            </div>

            <h1 class="studio-cover-title text-3xl sm:text-4xl mb-3">
              ${meta.title}
            </h1>
            <p class="text-base text-slate-600 font-medium mb-6">
              ${seriesInfo.sub}
            </p>

            <div class="inline-flex items-center gap-4 px-4 py-2 bg-slate-100 rounded-lg text-xs font-bold text-slate-700">
              <span>📅 학습 분량: <strong>${totalDays} DAYs</strong></span>
              <span>•</span>
              <span>📚 총 수록 어휘: <strong>${totalWords}단어</strong></span>
              <span>•</span>
              <span>🎯 권장 레벨: <strong>Lv.${meta.level || 3}</strong></span>
            </div>
          </div>

          <div class="my-8 py-8 border-y border-dashed border-slate-300">
            <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">본 부교재의 구성과 학습법</h3>
            <div class="grid grid-cols-2 gap-4 text-xs text-slate-700">
              <div class="p-3.5 rounded-lg bg-white border border-slate-200">
                <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <span>📖 Part 1. 보카북 (Voca Book)</span>
                </div>
                <p class="text-[11.5px] text-slate-600 leading-relaxed">
                  표제어와 품사, 핵심 한국어 뜻, 실전 예문 및 고품질 해석을 통해 어휘를 체계적으로 인지하고 3회독 누적 암기를 완성합니다.
                </p>
              </div>
              <div class="p-3.5 rounded-lg bg-white border border-slate-200">
                <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <span>📝 Part 2. 워크북 (Workbook)</span>
                </div>
                <p class="text-[11.5px] text-slate-600 leading-relaxed">
                  단어 쓰기, 의미 매칭, 문맥 예문 빈칸 추론(Cloze) 등 다양한 능동적 인출 훈련으로 뇌에 장기 기억으로 고착화합니다.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-6 border-t-2 border-slate-900 flex items-end justify-between">
            <div class="space-y-1.5 text-xs text-slate-700">
              <div>학습자 성명: <span class="inline-block w-28 border-b border-slate-400"></span></div>
              <div>학습 시작일: <span class="inline-block w-28 border-b border-slate-400"></span></div>
              <div>담당 지도교사: <span class="inline-block w-28 border-b border-slate-400"></span></div>
            </div>
            <div class="text-right">
              <div class="text-[11px] font-bold text-slate-400">Veritas English Supplementary Series</div>
              <div class="text-xs font-mono font-black text-slate-900 tracking-wider">A4 PRINT EDITION</div>
            </div>
          </div>
        </div>
      `;
    }

    /**
     * 목차 시트 (Table of Contents)
     */
    renderTOCSheet() {
      const meta = this.currentBookMeta;
      const days = Object.keys(this.groupedDays);

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Table of Contents</span>
              <h2 class="text-xl font-black text-slate-900">학습 목차 & 진도 점검표</h2>
            </div>
            <span class="text-xs font-bold text-slate-500">${meta.title}</span>
          </div>

          <div class="studio-toc-grid mt-4">
            ${days.map(d => {
              const words = this.groupedDays[d] || [];
              const first3 = words.slice(0, 3).map(w => w.word || '어휘').join(', ');
              return `
                <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="studio-day-tag text-xs">${d}</span>
                    <span class="text-[11px] font-bold text-slate-500">${words.length} Words</span>
                  </div>
                  <div class="text-xs text-slate-600 truncate mb-2">
                    주요 어휘: <span class="font-serif italic font-bold text-slate-800">${first3}...</span>
                  </div>
                  <div class="flex items-center justify-between pt-2 border-t border-slate-200 text-[10px] text-slate-500">
                    <span>1회독 [ ]</span>
                    <span>2회독 [ ]</span>
                    <span>워크북 [ ]</span>
                    <span>확인: ___/___</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="mt-8 p-4 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-blue-900 leading-relaxed">
            <strong>💡 효율적인 부교재 학습 가이드:</strong>
            <p class="mt-1">
              1. <strong>보카북(Voca Book)</strong>으로 표제어와 예문을 소리 내어 2회 이상 정독합니다.<br/>
              2. 셀프 테스트(뜻 가리기 또는 단어 가리기)를 통해 헷갈리는 어휘를 1차 선별합니다.<br/>
              3. <strong>워크북(Workbook)</strong> 문제를 풀면서 문맥 속에서 단어를 직접 철자로 적어보며 완벽히 숙달합니다.
            </p>
          </div>
        </div>
      `;
    }

    /**
     * 보카북 단원(Day) 시트
     */

    /**
     * [Day당 최소 1개 100% 보장] 원래 단어장 밑에 배치할 대표 원어민 꿀팁 선별
     */
    selectDayNativeTip(words, seriesKey) {
      const db = window.NATIVE_TIPS_DATABASE || {};

      // 1. Day 내 단어 중 DB와 일치하는 단어 우선 탐색
      for (let i = 0; i < words.length; i++) {
        const w = words[i];
        const raw = (w.word || '').toLowerCase().trim();
        if (db[raw]) {
          return { ...db[raw], keyword: w.word };
        }
        // 숙어/구동사 부분 매칭
        const keys = Object.keys(db);
        for (let j = 0; j < keys.length; j++) {
          const k = keys[j];
          if (raw === k || raw.startsWith(k + ' ') || raw.endsWith(' ' + k)) {
            return { ...db[k], keyword: w.word };
          }
        }
      }

      // 2. 만약 DB에 직접 매칭이 없는 경우 (AI 커스텀 등): Day 대표 단어로 지능형 팁 생성
      const sample = words[0] || { word: 'Voca', meaning: '어휘' };
      return {
        tag: '원어민 뉘앙스 & 실전 팁',
        keyword: sample.word,
        title: `'${sample.word}' 원어민처럼 자연스럽게 활용하기`,
        tip: `<b>${sample.word}</b>(${sample.meaning})은(는) 개별 단어의 뜻뿐만 아니라 함께 어울리는 전치사나 짝꿍 표현(콜로케이션)과 통문장으로 입에 익힐 때 가장 자연스러운 원어민 영어가 완성됩니다.`
      };
    }

    renderVocaDaySheet(dayKey, words) {
      const meta = this.currentBookMeta;
      const seriesKey = meta.series || 'middle';
      const seriesInfo = SERIES_INFO[seriesKey] || SERIES_INFO.middle;
      const isCompactDay = words.length <= 10;
      const dayTip = this.selectDayNativeTip(words, seriesKey);

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag">${dayKey}</span>
                <span class="text-xs font-bold text-slate-700">${seriesInfo.name}</span>
                <span class="text-slate-300">•</span>
                <span class="text-xs font-medium text-slate-500">${meta.title}</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                총 ${words.length}단어 | 핵심 어휘 인지 및 3회독 누적 암기 트레이닝
              </div>
            </div>
            <div class="text-right text-[11px] text-slate-500">
              <div>학습일: ____년 __월 __일</div>
              <div class="font-bold text-slate-800 mt-0.5">암기 확인: [ &nbsp; / ${words.length} ]</div>
            </div>
          </div>

          <!-- 원래 단어장 어휘 카드 2단 그리드 (단정하고 일정한 카드 규격 유지) -->
          <div class="studio-voca-grid">
            ${words.map(w => this.renderWordCard(w, seriesKey)).join('')}
          </div>

          <!-- [원래 단어장 밑에 깔끔하게 배치된 원어민 꿀팁 배너 - 매 Day 100% 수록] -->
          ${dayTip ? `
            <div class="studio-day-native-tip-banner mt-3.5 p-3 rounded-xl border border-amber-300 bg-amber-50/70 shadow-2xs">
              <div class="flex items-center justify-between border-b border-amber-200/80 pb-1.5 mb-2">
                <div class="flex items-center gap-2">
                  <span class="text-sm">💡</span>
                  <span class="text-xs font-black text-amber-950 tracking-tight">Today's Native Speaker Tip • 원어민 꿀팁</span>
                  <span class="px-2 py-0.5 rounded-full bg-amber-200/90 text-amber-950 text-[10px] font-bold border border-amber-300">${dayTip.tag || '뉘앙스 & 실전 구어'}</span>
                </div>
                <span class="text-[11px] font-extrabold text-amber-900 bg-white/90 px-2 py-0.5 rounded border border-amber-200">#${dayTip.keyword}</span>
              </div>
              <div class="text-xs">
                <div class="font-bold text-amber-950 mb-1 flex items-center gap-1.5">
                  <span class="text-xs">📌</span>
                  <span class="text-[11.5px] font-black">${dayTip.title}</span>
                </div>
                <p class="text-[11px] text-slate-700 leading-relaxed pl-4 font-normal">${dayTip.tip}</p>
              </div>
            </div>
          ` : ''}

          <!-- 10단어 이하 교재를 위한 하단 특별 학습 노트 섹션 -->
          ${isCompactDay ? `
            <div class="studio-compact-day-notes mt-6 p-4 rounded-xl border border-slate-200 bg-slate-50/70">
              <div class="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                <span class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span>✍️ ${dayKey} 핵심 단어 활용 문장 작문 & 오답 정리 노트</span>
                </span>
                <span class="text-[10px] text-slate-500 font-medium">Daily Application Note</span>
              </div>
              <div class="space-y-2 text-xs text-slate-600">
                <div class="flex items-center gap-2">
                  <span class="font-bold text-slate-800 shrink-0">1. 핵심 문장:</span>
                  <span class="flex-1 border-b border-slate-300 h-5"></span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-slate-800 shrink-0">2. 핵심 문장:</span>
                  <span class="flex-1 border-b border-slate-300 h-5"></span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="font-bold text-slate-800 shrink-0">3. 복습 체크:</span>
                  <span class="flex-1 border-b border-slate-300 h-5"></span>
                </div>
              </div>
              <div class="mt-3 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                <span>학습 시간: [ &nbsp;&nbsp;&nbsp;&nbsp;분 ]</span>
                <span>자가 진단: [ &nbsp; ] 완벽 암기 &nbsp;&nbsp; [ &nbsp; ] 복습 필요</span>
                <span>확인 도장: ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</span>
              </div>
            </div>
          ` : ''}

          <div class="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH SUPPLEMENTARY SERIES • VOCABULARY BOOK</span>
            <span>${dayKey} • PAGE COMPLETE</span>
          </div>
        </div>
      `;
    }

    renderWordCard(w, seriesKey) {
      const displayWord = w.word || 'VOCA';

      if (seriesKey === 'killer') {
        const meanings = w.meaning.split(/[,;/]|\d+\.\s*/).map(s => s.trim()).filter(Boolean);
        const m1 = meanings[0] || w.meaning;
        const m2 = meanings.slice(1).join(', ') || '문맥상 파생 의미';

        return `
          <div class="studio-word-card">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1.5 min-w-0">
                  <span class="studio-word-num">${String(w.num).padStart(2, '0')}.</span>
                  <span class="studio-word-lemma">${displayWord}</span>
                  ${w.pos ? `<span class="studio-word-pos shrink-0">${w.pos}</span>` : ''}
                </div>
                <div class="studio-checks shrink-0">
                  <span>1<span class="studio-check-box ml-0.5"></span></span>
                  <span>2<span class="studio-check-box ml-0.5"></span></span>
                  <span>3<span class="studio-check-box ml-0.5"></span></span>
                </div>
              </div>

              <div class="mt-1 space-y-1">
                <div class="studio-word-meaning text-xs flex items-baseline gap-1">
                  <span class="text-[10px] font-bold text-rose-700 bg-rose-50 px-1 rounded shrink-0">① 기본</span>
                  <span>${m1}</span>
                </div>
                ${meanings.length > 1 ? `
                  <div class="studio-word-meaning text-xs flex items-baseline gap-1 text-indigo-900">
                    <span class="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1 rounded shrink-0">② 킬러</span>
                    <span>${m2}</span>
                  </div>
                ` : ''}
              </div>
            </div>

            ${w.example ? `
              <div class="studio-word-example">
                <div class="font-medium">${this.highlightWord(w.example, displayWord)}</div>
                ${w.translation ? `<div class="studio-word-trans mt-0.5">${w.translation}</div>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      }

      if (seriesKey === 'academic') {
        return `
          <div class="studio-word-card border-l-4 border-slate-900">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1.5 min-w-0">
                  <span class="studio-word-num">${String(w.num).padStart(2, '0')}.</span>
                  <span class="studio-word-lemma">${displayWord}</span>
                  ${w.pos ? `<span class="studio-word-pos font-serif shrink-0">${w.pos}</span>` : ''}
                </div>
                <div class="studio-checks shrink-0">
                  <span>1<span class="studio-check-box ml-0.5"></span></span>
                  <span>2<span class="studio-check-box ml-0.5"></span></span>
                </div>
              </div>

              <div class="studio-word-meaning">
                ${w.meaning}
              </div>
            </div>

            ${w.example ? `
              <div class="studio-word-example bg-slate-50/70 p-1.5 rounded mt-1.5">
                <div class="font-serif italic text-slate-800">${this.highlightWord(w.example, displayWord)}</div>
                ${w.translation ? `<div class="studio-word-trans mt-0.5">${w.translation}</div>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      }

      if (seriesKey === 'travel') {
        return `
          <div class="studio-word-card border-l-4 border-sky-600 bg-sky-50/20">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1.5 min-w-0">
                  <span class="studio-word-num text-sky-700 font-bold shrink-0">#${w.num}</span>
                  <span class="studio-word-lemma text-sky-900">${displayWord}</span>
                </div>
                <span class="text-[10px] font-bold text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded shrink-0">Travel</span>
              </div>
              <div class="studio-word-meaning text-slate-900">
                ${w.meaning}
              </div>
            </div>

            ${w.example ? `
              <div class="studio-word-example border-sky-100">
                <div class="font-semibold text-sky-950">🗣️ ${this.highlightWord(w.example, displayWord)}</div>
                ${w.translation ? `<div class="studio-word-trans text-slate-600 mt-0.5">${w.translation}</div>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      }

      return `
        <div class="studio-word-card">
          <div>
            <div class="flex items-center justify-between">
              <div class="flex items-baseline gap-1.5 min-w-0">
                <span class="studio-word-num">${String(w.num).padStart(2, '0')}.</span>
                <span class="studio-word-lemma">${displayWord}</span>
                ${w.pos ? `<span class="studio-word-pos shrink-0">${w.pos}</span>` : ''}
              </div>
              <div class="studio-checks shrink-0">
                <span>1<span class="studio-check-box ml-0.5"></span></span>
                <span>2<span class="studio-check-box ml-0.5"></span></span>
                <span>3<span class="studio-check-box ml-0.5"></span></span>
              </div>
            </div>
            <div class="studio-word-meaning">
              ${w.meaning}
            </div>
          </div>

          ${w.example ? `
            <div class="studio-word-example">
              <div>${this.highlightWord(w.example, displayWord)}</div>
              ${w.translation ? `<div class="studio-word-trans mt-0.5">${w.translation}</div>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }

    // =========================================================================
    // 워크북 문제 데이터 생성 (시드 고정 → 문제지와 정답지 100% 일치)
    // - 하루치 단어가 Section 1·2·3에 "겹치지 않게" 한 번씩만 배분됨
    // - 문항 번호는 1번부터 끝까지 연속 → 정답지 문항 수 = 문제지 문항 수
    // =========================================================================

    hashString(str) {
      let h = 2166136261;
      for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
      }
      return h >>> 0;
    }

    createRng(seed) {
      let a = seed >>> 0;
      return function () {
        a = (a + 0x6D2B79F5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    }

    seededShuffle(arr, rng) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    /**
     * [문제 새로 섞기] 시드 변경 → 단어 배분·순서·보기 순서가 새로 바뀜 (정답지도 함께 갱신)
     */
    reshuffle() {
      this.shuffleSeed = (this.shuffleSeed || 0) + 1;
      this.refreshPaper();
    }

    getWorkbookData(dayKey, words) {
      const seed = this.hashString(`${this.currentBookId}|${dayKey}|${this.shuffleSeed || 0}`);
      const rng = this.createRng(seed);
      const pool = this.seededShuffle(words, rng);

      // 1) 예문에서 실제로 빈칸 처리가 가능한 단어만 Section 2(문맥 빈칸) 후보로 선별
      const clozeCandidates = [];
      const others = [];
      pool.forEach(w => {
        const m = this.findClozeMatch(w.example, w.word);
        if (m) clozeCandidates.push({ w, m });
        else others.push(w);
      });

      const targetCloze = Math.max(1, Math.round(words.length * 0.25));
      const clozePicked = clozeCandidates.slice(0, targetCloze);
      const rest = this.seededShuffle(
        others.concat(clozeCandidates.slice(targetCloze).map(c => c.w)),
        rng
      );

      // 2) 나머지 단어를 Section 1(철자) / Section 3(의미 연결)로 반씩 배분 (중복 없음)
      const s1Count = Math.ceil(rest.length / 2);
      const s1Words = rest.slice(0, s1Count);
      const s3Words = rest.slice(s1Count);

      let no = 0;
      const section1 = s1Words.map(w => ({
        no: ++no,
        word: w.word,
        meaning: w.meaning,
        hint: this.makeSpellingHint(w.word)
      }));

      const section2 = clozePicked.map(c => ({
        no: ++no,
        word: c.w.word,
        matched: c.m.matched,
        sentenceHtml: c.m.html,
        translation: c.w.translation || c.w.meaning,
        meaning: c.w.meaning
      }));

      // 3) 의미 연결 보기(A, B, C...)는 별도로 섞고, 문항별 정답 기호를 기록
      const order = this.seededShuffle(s3Words.map((_, i) => i), rng);
      const labelByIdx = {};
      const s3Options = order.map((origIdx, pos) => {
        const label = String.fromCharCode(65 + pos);
        labelByIdx[origIdx] = label;
        return { label, meaning: s3Words[origIdx].meaning };
      });
      const section3 = s3Words.map((w, i) => ({
        no: ++no,
        word: w.word,
        meaning: w.meaning,
        answerLabel: labelByIdx[i]
      }));

      return { section1, section2, section3, s3Options, total: no };
    }

    rangeLabel(items) {
      if (!items.length) return '';
      const a = items[0].no;
      const b = items[items.length - 1].no;
      return a === b ? `${a}번` : `${a}~${b}번`;
    }

    /**
     * 워크북 단원(Day) 시트
     */
    renderWorkbookDaySheet(dayKey, words) {
      const meta = this.currentBookMeta;
      const seriesKey = meta.series || 'middle';
      const seriesInfo = SERIES_INFO[seriesKey] || SERIES_INFO.middle;
      const wb = this.getWorkbookData(dayKey, words);

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-slate-900">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-slate-900">${dayKey} WORKBOOK</span>
                <span class="text-xs font-bold text-slate-700">${seriesInfo.name}</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                총 ${wb.total}문항 · 하루치 ${words.length}단어를 중복 없이 모두 출제
              </div>
            </div>
            <div class="text-right text-[11px] text-slate-500">
              <div>학습자: _____________</div>
              <div class="font-bold text-slate-800 mt-0.5">맞은 개수: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / ${wb.total}문항</div>
            </div>
          </div>

          ${wb.section1.length ? `
            <div class="studio-wb-section-title">
              <span>Section 1. 우리말 뜻을 보고 알맞은 영단어를 철자로 완성하시오. (${this.rangeLabel(wb.section1)})</span>
              <span class="text-[10px] font-normal text-slate-500">Spelling & Recall</span>
            </div>
            <div class="grid grid-cols-2 gap-2.5">
              ${wb.section1.map(q => `
                <div class="studio-wb-qitem flex flex-col justify-between p-2 rounded border border-slate-200">
                  <div class="text-xs font-semibold text-slate-800 leading-snug mb-1.5 flex items-baseline gap-1">
                    <span class="studio-wb-qnum">${q.no}.</span>
                    <span class="break-words">${q.meaning}</span>
                  </div>
                  <div class="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
                    <span class="studio-wb-hint shrink-0">${q.hint}</span>
                    <span class="studio-wb-cloze-blank flex-1 max-w-[220px]"></span>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${wb.section2.length ? `
            <div class="studio-wb-section-title mt-4">
              <span>Section 2. 문맥을 읽고 빈칸에 들어갈 알맞은 어휘를 문장에 맞는 형태로 쓰시오. (${this.rangeLabel(wb.section2)})</span>
              <span class="text-[10px] font-normal text-slate-500">Context Cloze</span>
            </div>
            <div class="space-y-2">
              ${wb.section2.map(q => `
                <div class="studio-wb-qitem p-2.5 border border-slate-200">
                  <div class="text-xs text-slate-900 leading-relaxed font-serif">
                    <span class="studio-wb-qnum font-sans font-bold">${q.no}.</span>
                    <span>${q.sentenceHtml}</span>
                  </div>
                  <div class="text-[11px] text-slate-500 mt-2 pl-4 flex items-center justify-between flex-wrap gap-2">
                    <span class="max-w-[60%]">[해석] ${q.translation}</span>
                    <div class="flex items-center gap-1 font-bold text-slate-800 shrink-0">
                      <span>정답:</span>
                      <span class="inline-block w-40 sm:w-52 border-b-2 border-slate-700"></span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${wb.section3.length ? `
            <div class="studio-wb-section-title mt-4">
              <span>Section 3. 왼쪽의 영단어와 오른쪽의 알맞은 의미를 바르게 연결하시오. (${this.rangeLabel(wb.section3)})</span>
              <span class="text-[10px] font-normal text-slate-500">Meaning Match</span>
            </div>
            <div class="grid grid-cols-2 gap-4 p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <div class="space-y-2">
                ${wb.section3.map(q => `
                  <div class="flex items-center justify-between p-1.5 bg-white rounded border border-slate-200">
                    <span class="font-bold text-slate-900 break-words pr-2">
                      <strong class="text-blue-900 mr-1.5">${q.no}.</strong>${q.word || 'VOCA'}
                    </span>
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block shrink-0"></span>
                  </div>
                `).join('')}
              </div>
              <div class="space-y-2">
                ${wb.s3Options.map(o => `
                  <div class="flex items-center justify-between p-1.5 bg-white rounded border border-slate-200">
                    <span class="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block shrink-0"></span>
                    <span class="pl-2 text-slate-800 font-medium break-words">
                      <strong class="text-emerald-800 mr-1.5">(${o.label})</strong>${o.meaning}
                    </span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="mt-2 text-right text-[11px] text-slate-600 font-medium leading-relaxed">
              연결 정답: ${wb.section3.map(q => `${q.no}-[ &nbsp;&nbsp; ]`).join(' &nbsp; ')}
            </div>
          ` : ''}

          <div class="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH SUPPLEMENTARY SERIES • WORKBOOK</span>
            <span>${dayKey} • SOLVE & PRACTICE</span>
          </div>
        </div>
      `;
    }

    /**
     * 빠른 정답표 — 문제지와 동일한 데이터로 생성 (문항 번호·문항 수·유형별 정답 형식 일치)
     */
    renderAnswerKeySheet(days) {
      const meta = this.currentBookMeta;

      const sectionBlock = (title, items, renderItem) => items.length ? `
        <div class="mb-3">
          <div class="text-[11px] font-bold text-slate-700 mb-1.5">${title} <span class="text-slate-400 font-medium">(${this.rangeLabel(items)})</span></div>
          <div class="studio-answer-grid">
            ${items.map(renderItem).join('')}
          </div>
        </div>
      ` : '';

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-slate-900">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Answer Key</span>
              <h2 class="text-xl font-black text-slate-900">워크북 정답 및 해설</h2>
            </div>
            <span class="text-xs font-bold text-slate-500">${meta.title}</span>
          </div>

          <div class="space-y-5 mt-4">
            ${days.map(d => {
              const words = this.groupedDays[d] || [];
              if (!words.length) return '';
              const wb = this.getWorkbookData(d, words);
              return `
                <div class="studio-answer-day p-4 rounded-lg border border-slate-200 bg-slate-50/50">
                  <div class="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
                    <span class="font-bold text-xs text-slate-900 bg-slate-200 px-2.5 py-1 rounded">${d} 정답</span>
                    <span class="text-[11px] text-slate-500 font-semibold">총 ${wb.total}문항</span>
                  </div>

                  ${sectionBlock('Section 1. 철자 완성', wb.section1, q => `
                    <div class="studio-answer-item">
                      <div class="flex items-baseline gap-1.5">
                        <span class="font-bold text-slate-400 text-[11px] shrink-0">${q.no}.</span>
                        <span class="studio-answer-lemma">${q.word}</span>
                      </div>
                      <div class="studio-answer-meaning">${q.meaning}</div>
                    </div>
                  `)}

                  ${sectionBlock('Section 2. 문맥 빈칸', wb.section2, q => {
                    const diff = q.matched && q.matched.toLowerCase() !== q.word.toLowerCase();
                    return `
                      <div class="studio-answer-item">
                        <div class="flex items-baseline gap-1.5">
                          <span class="font-bold text-slate-400 text-[11px] shrink-0">${q.no}.</span>
                          <span class="studio-answer-lemma">${diff ? q.matched : q.word}</span>
                        </div>
                        <div class="studio-answer-meaning">${diff ? `원형: ${q.word} · ` : ''}${q.meaning}</div>
                      </div>
                    `;
                  })}

                  ${sectionBlock('Section 3. 의미 연결', wb.section3, q => `
                    <div class="studio-answer-item">
                      <div class="flex items-baseline gap-1.5">
                        <span class="font-bold text-slate-400 text-[11px] shrink-0">${q.no}.</span>
                        <span class="studio-answer-lemma">(${q.answerLabel})</span>
                      </div>
                      <div class="studio-answer-meaning">${q.word} = ${q.meaning}</div>
                    </div>
                  `)}
                </div>
              `;
            }).join('')}
          </div>

          <div class="mt-8 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400">
            © VERITAS ENGLISH SCHOLARS' ACADEMY • ALL RIGHTS RESERVED
          </div>
        </div>
      `;
    }


    // =========================================================================
    // 특화 스페셜 부교재 렌더러 (Specialized Supplementary Book Engines)
    // =========================================================================

    /**
     * 1) ✍️ [내신 서술형 영작 조건부 완성 노트] (중등 내신 & 숙어 & AI 맞춤)
     */
    renderWritingNoteSheet(dayKey, words) {
      const meta = this.currentBookMeta;
      const seriesKey = meta.series || 'middle';
      const seriesInfo = SERIES_INFO[seriesKey] || SERIES_INFO.middle;

      // 영작 문항으로 적합한 단어 5~6개 선별 (예문이 있는 단어 우선)
      const targetWords = words.filter(w => w.example && w.translation).slice(0, 6);
      const fallbackWords = targetWords.length >= 4 ? targetWords : words.slice(0, 6);

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-slate-900">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-blue-900">${dayKey} 서술형 영작 노트</span>
                <span class="text-xs font-bold text-slate-700">${seriesInfo.name}</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                학교 시험 서술형 만점 대비 • 조건부 문장 완성 & 어형 변화 집중 클리닉
              </div>
            </div>
            <div class="text-right text-[11px] text-slate-500">
              <div>학습자: _____________</div>
              <div class="font-bold text-slate-800 mt-0.5">점수: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 100점</div>
            </div>
          </div>

          <!-- Section 1. 조건부 문장 영작 드릴 -->
          <div class="studio-wb-section-title">
            <span>Section 1. 다음 우리말과 일치하도록 주어진 [조건]에 맞추어 완전한 영어 문장을 쓰시오.</span>
            <span class="text-[10px] font-normal text-slate-500">Conditional Writing</span>
          </div>

          <div class="space-y-3">
            ${fallbackWords.map((w, idx) => {
              const trans = w.translation || `그들은 ${w.meaning}에 대해 이야기하고 있었다.`;
              return `
                <div class="studio-writing-item">
                  <div class="flex items-start justify-between gap-2 mb-1.5">
                    <div class="text-xs font-bold text-slate-900 leading-snug">
                      <span class="text-blue-900 font-black mr-1">[${idx + 1}번]</span>
                      <span>${trans}</span>
                    </div>
                    <div class="flex items-center gap-1 shrink-0">
                      <span class="studio-writing-condition">제시어: <strong>${w.word}</strong></span>
                      <span class="studio-writing-condition">어형 변형 가능</span>
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-500 mb-1">
                    [조건] ① 제시어 '<strong>${w.word}</strong>'를 반드시 활용할 것 &nbsp; ② 시제와 수일치에 주의하여 완전한 문장으로 쓸 것
                  </div>
                  <div class="pt-2">
                    <span class="text-xs font-bold text-slate-700">답안 작성:</span>
                    <span class="studio-writing-line"></span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Section 2. 서술형 어형 변형 & 빈칸 완성 드릴 -->
          <div class="studio-wb-section-title mt-4">
            <span>Section 2. 문맥을 읽고 괄호 안의 단어를 문법과 의미에 맞게 알맞은 형태로 고쳐 쓰시오.</span>
            <span class="text-[10px] font-normal text-slate-500">Form Transformation</span>
          </div>

          <div class="space-y-2">
            ${words.slice(0, 4).map((w, idx) => {
              const sInfo = (window.contextSentenceHelper && typeof window.contextSentenceHelper.getOrGenerateSentence === 'function')
                ? window.contextSentenceHelper.getOrGenerateSentence(w)
                : null;
              const targetSentence = w.example || (sInfo ? sInfo.sentence : '');
              const hintSentence = targetSentence ? this.makeClozeSentence(targetSentence, w.word) : `The students practiced to understand ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ) in context.`;
              return `
                <div class="studio-wb-qitem p-2.5 border border-slate-200">
                  <div class="text-xs text-slate-900 font-serif leading-relaxed">
                    <span class="studio-wb-qnum font-sans font-bold">${idx + 1}.</span>
                    <span>${hintSentence}</span>
                    <span class="text-blue-900 font-bold ml-1">[ 제시어: ${w.word} ]</span>
                  </div>
                  <div class="mt-2 text-right text-[11px] font-bold text-slate-700">
                    변형 정답: ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- 하단 푸터 -->
          <div class="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH SUPPLEMENTARY SERIES • WRITING NOTEBOOK</span>
            <span>${dayKey} • DESCRIPTIVE ENGLISH PRACTICE</span>
          </div>
        </div>
      `;
    }

    /**
     * 2) ⚡ [시험 직전 10분 최종 파이널 체크 시트] (A4 1장 초압축 암기장)
     */
    renderCramSheet(days) {
      const meta = this.currentBookMeta;
      const allWords = [];
      days.forEach(d => {
        (this.groupedDays[d] || []).forEach(w => {
          allWords.push({ ...w, day: d });
        });
      });

      return `
        <div class="studio-a4-sheet" style="padding: 10mm 10mm;">
          <!-- 초압축 헤더 -->
          <div class="flex items-center justify-between border-b-2 border-slate-900 pb-2 mb-3">
            <div class="flex items-center gap-2">
              <span class="text-lg">⚡</span>
              <div>
                <h1 class="text-base font-black text-slate-900 tracking-tight leading-none">
                  ${meta.title} • 시험 직전 10분 초압축 파이널 치트시트
                </h1>
                <span class="text-[10px] text-slate-500 font-medium">전체 ${days.length} DAYs (${allWords.length}단어) 총정리 • 접이식 셀프 테스트선 탑재</span>
              </div>
            </div>
            <div class="text-right text-[10px] text-slate-600">
              <span class="font-bold bg-amber-200 text-amber-950 px-2 py-0.5 rounded">FINAL CRAM</span>
            </div>
          </div>

          <!-- 3열 초압축 테이블 (가운데 접이식 선) -->
          <div class="studio-cram-container">
            ${allWords.map((w, idx) => `
              <div class="studio-cram-row">
                <div class="flex items-baseline gap-1 truncate pr-1">
                  <span class="text-[9px] font-bold text-slate-400 font-mono">${String(idx + 1).padStart(3, '0')}</span>
                  <span class="font-bold text-slate-900 text-xs">${w.word || 'VOCA'}</span>
                  ${w.pos ? `<span class="text-[9px] text-slate-500">(${w.pos})</span>` : ''}
                </div>
                <div class="text-[10px] text-slate-700 font-medium truncate text-right max-w-[55%]">
                  ${w.meaning}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- 하단 접이식 셀프 테스트 안내선 -->
          <div class="mt-4 pt-2 border-t border-dashed border-amber-400 text-center text-[10px] text-amber-900 bg-amber-50/70 p-2 rounded">
            <strong>✂️ 시험 직전 10분 암기 팁:</strong> A4 종이를 세로로 3등분하여 오른편 뜻 부분을 손이나 책받침으로 가리면서 1초 만에 뜻이 튀어나오지 않는 단어에 형광펜을 치세요!
          </div>
        </div>
      `;
    }

    /**
     * 3) ✈️ [포켓 서바이벌 현장 회화 핸드북] (여행 영어 5종)
     */
    renderPocketTravelSheet(dayKey, words) {
      const meta = this.currentBookMeta;

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-sky-700">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-sky-700">${dayKey} 포켓 서바이벌</span>
                <span class="text-xs font-bold text-sky-950">글로벌 여행 현장 직결 회화</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                공항·호텔·식당 현장에서 1초 만에 펼쳐 손가락으로 짚거나 바로 말하는 실전 핸드북
              </div>
            </div>
            <div class="text-right text-[11px] text-sky-800 font-bold">
              POCKET SURVIVAL
            </div>
          </div>

          <!-- 상황별 롤플레잉 대화문 카드 2단 그리드 -->
          <div class="grid grid-cols-2 gap-3 mt-3">
            ${words.map((w, idx) => `
              <div class="p-3 rounded-lg border border-sky-200 bg-sky-50/30 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between border-b border-sky-100 pb-1.5 mb-2">
                    <span class="text-xs font-black text-sky-900 flex items-center gap-1">
                      <span>📍 Situational Key #${idx + 1}</span>
                    </span>
                    <span class="text-[10px] font-bold text-sky-700 bg-sky-100 px-1.5 py-0.2 rounded">${w.word}</span>
                  </div>
                  <div class="text-xs font-bold text-slate-900 mb-1">
                    🗣️ [현장 표현]: "${w.example || `Could you please check this ${w.word}?`}"
                  </div>
                  <div class="text-[11px] text-slate-600 mb-2">
                    [한국어 뜻]: ${w.translation || w.meaning}
                  </div>
                </div>
                <div class="pt-2 border-t border-dashed border-sky-200 text-[10.5px] text-sky-900 bg-white/70 p-1.5 rounded">
                  <strong>💡 현장 대처 팁:</strong> 상대방이 못 알아들으면 이 카드의 영어를 손가락으로 가리키며 <strong>"This one, please!"</strong>라고 말하세요.
                </div>
              </div>
            `).join('')}
          </div>

          <div class="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH TRAVEL COMPANION • POCKET SURVIVAL EDITION</span>
            <span>${dayKey} • INSTANT PHRASEBOOK</span>
          </div>
        </div>
      `;
    }

    /**
     * 4) 🎬 [미드 & 유튜브 섀도잉 실전 대본집] (구동사 & 슬랭)
     */
    renderShadowingScriptSheet(dayKey, words) {
      const meta = this.currentBookMeta;

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-teal-800">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-teal-800">${dayKey} 섀도잉 대본집</span>
                <span class="text-xs font-bold text-teal-950">미드·유튜브 리얼 씬 스크립트</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                눈으로만 외우지 않고 배우의 억양과 감정으로 3회 소리 내어 따라 읽는 실전 발화집
              </div>
            </div>
            <div class="text-right text-[11px] text-teal-800 font-bold">
              SHADOWING SCRIPT
            </div>
          </div>

          <div class="space-y-3 mt-3">
            ${words.map((w, idx) => `
              <div class="studio-script-dialogue">
                <div class="flex items-center justify-between border-b border-slate-200 pb-1 mb-2">
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-black text-teal-900">Scene #${idx + 1}</span>
                    <span class="text-[11px] font-bold text-slate-700 bg-teal-100 px-2 py-0.2 rounded">${w.word}</span>
                    <span class="text-[11px] text-slate-500">(${w.meaning})</span>
                  </div>
                  <div class="flex items-center gap-1.5 text-[10px] font-bold text-slate-500">
                    <span>섀도잉 체크:</span>
                    <span>1<span class="studio-check-box ml-0.5"></span></span>
                    <span>2<span class="studio-check-box ml-0.5"></span></span>
                    <span>3<span class="studio-check-box ml-0.5"></span></span>
                  </div>
                </div>

                <div class="space-y-1.5 text-xs text-slate-800 font-sans">
                  <div>
                    <span class="studio-script-speaker">A:</span>
                    <span>"Hey, did you hear about what happened yesterday?"</span>
                  </div>
                  <div class="bg-teal-50/50 p-1.5 rounded">
                    <span class="studio-script-speaker text-teal-900">B:</span>
                    <span class="font-bold text-slate-900">"${w.example || `Yeah, we definitely need to ${w.word} as soon as possible.`}"</span>
                    <div class="text-[10.5px] text-slate-600 mt-0.5 pl-5">(${w.translation || w.meaning})</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH REAL DIALOGUE SERIES • SHADOWING PLAYBOOK</span>
            <span>${dayKey} • SPOKEN FLUENCY</span>
          </div>
        </div>
      `;
    }

    /**
     * 5) 🎯 [수능 혼동어휘 1:1 클리닉 매트릭스] (수능 킬러 교재)
     */
    renderMatrixSheet(dayKey, words) {
      const meta = this.currentBookMeta;

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-rose-900">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-rose-900">${dayKey} 혼동어휘 클리닉</span>
                <span class="text-xs font-bold text-rose-950">수능 1등급 킬러 1:1 대조 매트릭스</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                철자·발음 혼동 및 다의어 킬러 의미 1:1 정밀 대조 분석표
              </div>
            </div>
            <div class="text-right text-[11px] text-rose-900 font-bold">
              CONFUSION MATRIX
            </div>
          </div>

          <div class="space-y-3 mt-3">
            ${words.map((w, idx) => `
              <div class="p-3 rounded-lg border border-rose-200 bg-rose-50/20">
                <div class="flex items-center justify-between border-b border-rose-100 pb-1 mb-2">
                  <span class="text-xs font-black text-rose-950">[킬러 문맥 #${idx + 1}]</span>
                  <span class="text-xs font-black text-rose-900">${w.word}</span>
                </div>
                <div class="grid grid-cols-2 gap-3 text-xs">
                  <div class="p-2 rounded bg-white border border-rose-200/70">
                    <div class="font-bold text-slate-800 mb-1">① 기본 의미:</div>
                    <div class="text-slate-700">${w.meaning}</div>
                  </div>
                  <div class="p-2 rounded bg-rose-100/40 border border-rose-300/80">
                    <div class="font-bold text-rose-950 mb-1">② 수능 킬러 문맥 의미:</div>
                    <div class="text-rose-900 font-medium">${w.translation || '지문 속 함정 의미 주의'}</div>
                  </div>
                </div>
                <div class="mt-2 text-[11px] text-slate-700 bg-white p-2 rounded border border-slate-200">
                  <strong>기출형 예문:</strong> ${this.highlightWord(w.example || '', w.word)}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH CSAT KILLER SERIES • CONFUSION MATRIX</span>
            <span>${dayKey} • ADVANCED DISTINCTION</span>
          </div>
        </div>
      `;
    }

    /**
     * 6) 🏫 [미국 교과서 학술 영영 리더 & 코퍼스 지문] (미국 교과서 학술 어휘)
     */
    renderAcademicReaderSheet(dayKey, words) {
      const meta = this.currentBookMeta;

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-slate-900">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-slate-900">${dayKey} Academic Reader</span>
                <span class="text-xs font-bold text-slate-700">Tier-2 Academic Corpus & English Definition</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                미국 교과서(과학/사회) 속 학술 영영 정의 및 코퍼스 지문 정밀 리딩
              </div>
            </div>
            <div class="text-right text-[11px] text-slate-600 font-bold">
              ACADEMIC READER
            </div>
          </div>

          <div class="space-y-3 mt-3">
            ${words.map((w, idx) => `
              <div class="p-3 rounded-lg border border-slate-300 bg-slate-50/60">
                <div class="flex items-baseline justify-between border-b border-slate-200 pb-1.5 mb-2">
                  <div class="flex items-baseline gap-2">
                    <span class="font-serif font-black text-sm text-slate-900">${w.word}</span>
                    <span class="font-serif italic text-xs text-slate-600">/${w.pos || 'acad.'}/</span>
                  </div>
                  <span class="text-xs font-bold text-blue-900">${w.meaning}</span>
                </div>
                <div class="text-xs font-serif text-slate-800 leading-relaxed bg-white p-2.5 rounded border border-slate-200">
                  <div class="text-[10px] uppercase font-mono font-bold text-slate-400 mb-1">Context Passage:</div>
                  ${this.highlightWord(w.example || '', w.word)}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH US ACADEMIC SERIES • CORPUS READER</span>
            <span>${dayKey} • SCHOLARLY READING</span>
          </div>
        </div>
      `;
    }

    /**
     * 7) 📜 [영미 명작 소설 원문 리더 & 감정 스펙트럼] (감정 & 문학)
     */
    renderLiteratureReaderSheet(dayKey, words) {
      const meta = this.currentBookMeta;

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-fuchsia-900">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-fuchsia-900">${dayKey} Literature Reader</span>
                <span class="text-xs font-bold text-fuchsia-950">영미 명작 원문 발췌 & 감정 스펙트럼</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                고전 문학 소설 속 원문 단락과 원어민 감정 강도 척도 분석
              </div>
            </div>
            <div class="text-right text-[11px] text-fuchsia-900 font-bold">
              CLASSIC LITERATURE
            </div>
          </div>

          <div class="space-y-3 mt-3">
            ${words.map((w, idx) => `
              <div class="p-3.5 rounded-lg border border-fuchsia-200 bg-fuchsia-50/20 font-serif">
                <div class="flex items-center justify-between border-b border-fuchsia-100 pb-1.5 mb-2 font-sans">
                  <div class="flex items-baseline gap-2">
                    <span class="text-sm font-black text-fuchsia-950">${w.word}</span>
                    <span class="text-xs text-fuchsia-800 font-medium">(${w.meaning})</span>
                  </div>
                  <span class="text-[10px] font-bold text-fuchsia-900 bg-fuchsia-100 px-2 py-0.5 rounded">Literature Note</span>
                </div>
                <div class="text-xs text-slate-800 italic leading-relaxed bg-white p-2.5 rounded border border-fuchsia-100">
                  "${this.highlightWord(w.example || '', w.word)}"
                </div>
                ${w.translation ? `<div class="text-[11px] font-sans text-slate-600 mt-1 pl-2">[해석] ${w.translation}</div>` : ''}
              </div>
            `).join('')}
          </div>

          <div class="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH LITERARY CLASSICS • FICTION READER</span>
            <span>${dayKey} • NOVEL EXCERPTS</span>
          </div>
        </div>
      `;
    }

    // =========================================================================
    // 헬퍼 유틸리티
    // =========================================================================

    escapeRegex(s) {
      return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    makeClozeSentence(sentence, targetWord) {
      if (!sentence || !targetWord) return sentence || '';
      const m = this.findClozeMatch(sentence, targetWord, '<span class="studio-cloze-gap font-mono text-slate-700 font-bold border-b border-slate-400 px-3 py-0.5 inline-block min-w-[70px] text-center">[ &nbsp;&nbsp;&nbsp;&nbsp; ]</span>');
      if (m) return m.html;
      const esc = this.escapeRegex(targetWord);
      return sentence.replace(new RegExp(esc, 'gi'), '<span class="studio-cloze-gap font-mono text-slate-700 font-bold border-b border-slate-400 px-3 py-0.5 inline-block min-w-[70px] text-center">[ &nbsp;&nbsp;&nbsp;&nbsp; ]</span>');
    }

    highlightWord(sentence, targetWord) {
      if (!sentence || !targetWord) return sentence || '';
      const m = this.findClozeMatch(sentence, targetWord, '<strong class="text-slate-900 underline decoration-slate-400">$&</strong>');
      return m ? m.html : sentence;
    }

    makeSpellingHint(word) {
      if (!word) return '______';
      const clean = word.trim();
      if (clean.includes(' ')) {
        const parts = clean.split(/\s+/);
        return parts.map(p => p.length <= 2 ? p : p.charAt(0) + '_'.repeat(p.length - 1)).join(' ');
      }
      if (clean.length <= 3) return clean.charAt(0) + ' ' + '_ '.repeat(clean.length - 1).trim();
      return clean.slice(0, 2) + ' ' + '_ '.repeat(clean.length - 2).trim();
    }

    /**
     * 예문 속 표제어(활용형 포함)를 찾아 치환.
     * 찾지 못하면 null → 해당 단어는 문맥 빈칸 문제로 출제하지 않음 (정답이 문장에 그대로 노출되는 문제 방지)
     */
    findClozeMatch(sentence, word, replacement) {
      if (!sentence || !word) return null;
      const w = String(word).trim();
      if (!w) return null;
      const blank = replacement ||
        '<span class="studio-cloze-gap">&nbsp;</span>';

      const tryRegex = (re) => {
        const m = sentence.match(re);
        if (!m) return null;
        // 문장 안에 같은 단어가 여러 번 나와도 모두 치환 (정답 노출 방지)
        return { matched: m[0], html: sentence.replace(new RegExp(re.source, 'gi'), blank) };
      };

      const suffix = "(?:s|es|ed|d|ing|er|est|ly|ies|ied)?";

      if (!/\s/.test(w)) {
        const e = this.escapeRegex(w);
        const last = this.escapeRegex(w.slice(-1));
        // 1) 원형 + 활용 어미 (stop → stopped 처럼 자음 중복 포함)
        let r = tryRegex(new RegExp(`\\b${e}(?:${last})?${suffix}\\b`, 'i'));
        if (r) return r;
        // 2) e/y 탈락형 (make → making, study → studied)
        if (/[ey]$/i.test(w) && w.length >= 5) {
          const stem = this.escapeRegex(w.slice(0, -1));
          r = tryRegex(new RegExp(`\\b${stem}(?:ing|ed|ies|ied|ier|iest|ily|ation)\\b`, 'i'));
          if (r) return r;
        }
        return null;
      }

      // 숙어/구동사: 첫 단어 활용형 허용, one's/someone 등은 임의 단어 허용
      const parts = w.split(/\s+/);
      const pat = parts.map((p, i) => {
        if (/^(one's|someone's|one|oneself|someone|somebody|something|sb|sth|~)$/i.test(p)) {
          return "[A-Za-z']+";
        }
        const e = this.escapeRegex(p);
        return i === 0 ? `${e}[a-z]{0,4}` : e;
      }).join('\\s+');
      return tryRegex(new RegExp(`\\b${pat}\\b`, 'i'));
    }
    /**
     * 부교재 1: 핵심 콜로케이션 & 전치사 결합집 (A4 시트)
     */
    renderOriginalCollocationSheet(dayKey, words) {
      const meta = this.currentBookMeta;
      const seriesInfo = SERIES_INFO.original;
      let html = `
        <div class="studio-paper a4-page flex flex-col justify-between p-8 bg-white text-slate-800 shadow-lg border border-slate-200 print:shadow-none print:border-none mb-6">
          <div class="sheet-header border-b-2 border-slate-900 pb-3 mb-4 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 text-white">부교재 1</span>
                <span class="text-xs font-bold text-slate-500">${meta.title}</span>
              </div>
              <h2 class="text-xl font-black text-slate-900 mt-1">🔗 ${dayKey} 핵심 콜로케이션 & 전치사 결합집</h2>
            </div>
            <div class="text-right text-xs text-slate-500">
              <div>학습일: _____년 ___월 ___일</div>
              <div class="font-bold text-slate-800 mt-1">이름: ____________</div>
            </div>
          </div>

          <div class="sheet-body flex-1 grid grid-cols-2 gap-3 text-xs">
      `;

      words.forEach((w, idx) => {
        html += `
          <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between border-b border-slate-200 pb-1 mb-1.5">
                <span class="font-black text-sm text-slate-900">${idx + 1}. ${w.word}</span>
                <span class="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">${w.pos} ${w.meaning}</span>
              </div>
              <div class="bg-amber-50 border border-amber-200 rounded px-2 py-1 text-amber-950 font-bold mb-1.5 flex items-center gap-1.5">
                <span class="text-amber-600">🔗</span>
                <span>${w.collocation || w.word}</span>
              </div>
              <p class="text-[11px] text-slate-700 leading-snug">${w.example}</p>
              <p class="text-[10px] text-slate-500 mt-0.5">${w.translation}</p>
            </div>
          </div>
        `;
      });

      html += `
          </div>
          <div class="sheet-footer pt-3 mt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
            <span>Veritas English Core 6,000 Master Companion Series</span>
            <span>${dayKey} Collocation & Preposition Workbook</span>
          </div>
        </div>
      `;
      return html;
    }

    /**
     * 부교재 2: 서술형 조건 영작 & 패턴 드릴 (A4 시트)
     */
    renderOriginalWritingDrillSheet(dayKey, words) {
      const meta = this.currentBookMeta;
      const drillWords = words.slice(0, 10); // 1일 10개 핵심 패턴 드릴

      let html = `
        <div class="studio-paper a4-page flex flex-col justify-between p-8 bg-white text-slate-800 shadow-lg border border-slate-200 print:shadow-none print:border-none mb-6">
          <div class="sheet-header border-b-2 border-slate-900 pb-3 mb-4 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-700 text-white">부교재 2</span>
                <span class="text-xs font-bold text-slate-500">${meta.title}</span>
              </div>
              <h2 class="text-xl font-black text-slate-900 mt-1">✍️ ${dayKey} 서술형 조건 영작 & 문장 패턴 드릴</h2>
            </div>
            <div class="text-right text-xs text-slate-500">
              <div>제한 시간: 15분</div>
              <div class="font-bold text-slate-800 mt-1">점수: _____ / 100</div>
            </div>
          </div>

          <div class="sheet-body flex-1 space-y-3 text-xs">
      `;

      drillWords.forEach((w, idx) => {
        html += `
          <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
            <div class="flex items-center justify-between mb-1">
              <span class="font-bold text-slate-900">[문항 ${idx + 1}] 조건 제시어: <strong class="text-blue-700">${w.word}</strong> (${w.pos} ${w.meaning})</span>
              <span class="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono font-bold">패턴: ${w.writingPattern || 'S + V + O'}</span>
            </div>
            <div class="text-[11px] text-slate-600 mb-1.5">
              <strong>[조건 해석]</strong> "${w.translation}"
            </div>
            <div class="border-b border-dashed border-slate-400 h-6 flex items-end text-[11px] font-mono text-slate-800">
              <span class="text-slate-400 mr-2">영작:</span>
            </div>
          </div>
        `;
      });

      html += `
          </div>
          <div class="sheet-footer pt-3 mt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
            <span>Veritas English Core 6,000 Master Companion Series</span>
            <span>${dayKey} Writing Pattern Drill Sheet</span>
          </div>
        </div>
      `;
      return html;
    }

    /**
     * 부교재 3: 5분 파이널 스프린트 빈칸 펑크 테스트 (A4 시트)
     */
    renderOriginalClozeSprintSheet(dayKey, words) {
      const meta = this.currentBookMeta;

      let html = `
        <div class="studio-paper a4-page flex flex-col justify-between p-8 bg-white text-slate-800 shadow-lg border border-slate-200 print:shadow-none print:border-none mb-6">
          <div class="sheet-header border-b-2 border-slate-900 pb-3 mb-4 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-700 text-white">부교재 3</span>
                <span class="text-xs font-bold text-slate-500">${meta.title}</span>
              </div>
              <h2 class="text-xl font-black text-slate-900 mt-1">⚡ ${dayKey} 5분 파이널 스프린트 빈칸 펑크 테스트</h2>
            </div>
            <div class="text-right text-xs text-slate-500">
              <div>시험 시간: 5분 (초스피드 셀프 체크)</div>
              <div class="font-bold text-slate-800 mt-1">이름: ____________ ( ___ / 20 )</div>
            </div>
          </div>

          <div class="sheet-body flex-1 grid grid-cols-2 gap-3 text-xs">
      `;

      words.forEach((w, idx) => {
        html += `
          <div class="p-2 border border-slate-200 rounded bg-white flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-5 text-slate-400 font-bold">${idx + 1}.</span>
              <span class="font-mono font-bold text-sm text-slate-900 tracking-wider">${w.clozeHint || w.word}</span>
            </div>
            <div class="w-24 border-b border-slate-400 text-right pr-1 text-slate-300 font-mono text-[10px]">
              ( 정답 기입 )
            </div>
          </div>
        `;
      });

      html += `
          </div>
          <div class="sheet-footer pt-3 mt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
            <span>Veritas English Core 6,000 Master Companion Series</span>
            <span>${dayKey} 5-Minute Final Sprint Cloze Testbook</span>
          </div>
        </div>
      `;
      return html;
    }

  }

  // 글로벌 싱글톤 인스턴스 등록
  window.bookStudioEngine = new BookStudioEngine();

})(window);
