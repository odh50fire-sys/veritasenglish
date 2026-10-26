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
    'curated-travel-air': 'travel',
    'curated-travel-hotel': 'travel',
    'curated-travel-dining': 'travel',
    'curated-travel-transit': 'travel',
    'curated-travel-emerge': 'travel',
    'curated-emotions': 'literature',
    'curated-literature': 'literature'
  };

  const SERIES_INFO = {
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
      name: '중학 교과서 필수 숙어',
      sub: '내신 서술형 필수 숙어 50 & 전치사 블록',
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

      // 1. 21개 큐레이션 부교재
      const curList = (window.CURATED_COLLECTIONS || []).filter(c => 
        !c.id.includes('neungryul')
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
        // AI 생성 단어장 데이터
        if (window.storage && typeof window.storage.getCustomWords === 'function') {
          const allCustom = window.storage.getCustomWords() || [];
          rawWords = allCustom.filter(w => w.collectionId === bookId);
        }
      } else {
        // 21개 큐레이션 단어 데이터
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

            <!-- 모드 전환 (보카북 / 워크북 / 합본) -->
            <div class="inline-flex rounded-lg bg-slate-800 p-0.5 border border-slate-700 text-xs font-semibold">
              <button onclick="window.bookStudioEngine.setMode('voca')" class="px-2.5 py-1 rounded-md transition-colors ${this.currentMode === 'voca' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
                📖 보카북
              </button>
              <button onclick="window.bookStudioEngine.setMode('workbook')" class="px-2.5 py-1 rounded-md transition-colors ${this.currentMode === 'workbook' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
                📝 워크북
              </button>
              <button onclick="window.bookStudioEngine.setMode('both')" class="px-2.5 py-1 rounded-md transition-colors ${this.currentMode === 'both' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'}">
                📚 합본
              </button>
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

      const seriesOrder = ['middle', 'killer', 'trend', 'academic', 'idioms', 'travel', 'literature'];
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

    buildPreviewHtml() {
      const meta = this.currentBookMeta;
      const days = this.selectedDay === 'ALL' ? Object.keys(this.groupedDays) : [this.selectedDay];
      let html = '';

      // 1. 전체 인쇄 모드일 경우: 표지(Cover) + 목차(TOC) 포함
      if (this.selectedDay === 'ALL') {
        html += this.renderCoverSheet();
        html += this.renderTOCSheet();
      }

      // 2. Day별 시트 렌더링
      days.forEach(dayKey => {
        const words = this.groupedDays[dayKey] || [];
        if (words.length === 0) return;

        // 보카북 렌더링
        if (this.currentMode === 'voca' || this.currentMode === 'both') {
          html += this.renderVocaDaySheet(dayKey, words);
        }

        // 워크북 렌더링
        if (this.currentMode === 'workbook' || this.currentMode === 'both') {
          html += this.renderWorkbookDaySheet(dayKey, words);
        }
      });

      // 3. 워크북 또는 합본 모드이고 전체 인쇄일 때: 빠른 정답지(Answer Key) 추가
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
    renderVocaDaySheet(dayKey, words) {
      const meta = this.currentBookMeta;
      const seriesKey = meta.series || 'middle';
      const seriesInfo = SERIES_INFO[seriesKey] || SERIES_INFO.middle;
      const isCompactDay = words.length <= 10;

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

          <div class="studio-voca-grid">
            ${words.map(w => this.renderWordCard(w, seriesKey)).join('')}
          </div>

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
    // 헬퍼 유틸리티
    // =========================================================================

    escapeRegex(s) {
      return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
  }

  // 글로벌 싱글톤 인스턴스 등록
  window.bookStudioEngine = new BookStudioEngine();

})(window);
