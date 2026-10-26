/**
 * Veritas English - 부교재 전용 [보카북 & 워크북] 스튜디오 엔진 (BookStudioEngine)
 * 21개 큐레이션 부교재 + AI 맞춤 교재 전용
 * 8대 시리즈별 고유 비주얼 디자인 & 특화 학습·문제 구성 자동 합성 및 A4 인쇄
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
     * 교재 데이터 로드 및 Day별 그룹화
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

      // Day별 정렬 및 그룹화
      this.groupedDays = {};
      rawWords.forEach(w => {
        const dayKey = w.DAY || `DAY ${String(w.day || 1).padStart(2, '0')}`;
        if (!this.groupedDays[dayKey]) {
          this.groupedDays[dayKey] = [];
        }
        this.groupedDays[dayKey].push({
          num: w.번호 || w.num || (this.groupedDays[dayKey].length + 1),
          word: w.단어 || w.word || '',
          pos: w.품사 || w.pos || '',
          meaning: w.뜻 || w.meaning || '',
          example: w.예문 || w.example || '',
          translation: w.해석 || w.translation || '',
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
        modal.className = 'fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex flex-col overflow-hidden';
        document.body.appendChild(modal);
      }

      const meta = this.currentBookMeta;
      const seriesKey = meta.series || 'middle';
      const seriesInfo = SERIES_INFO[seriesKey] || SERIES_INFO.middle;
      const days = Object.keys(this.groupedDays);

      modal.innerHTML = `
        <!-- 상단 고정 제어 툴바 (인쇄 시 숨김) -->
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

            <!-- 인쇄 버튼 -->
            <button onclick="window.bookStudioEngine.print()" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md transition-transform active:scale-95 cursor-pointer" title="A4 인쇄 또는 PDF 저장">
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

    /**
     * 교재 전환 핸들러
     */
    onBookChange(bookId) {
      this.selectedDay = 'ALL';
      this.loadBookData(bookId);
      this.renderModal();
    }

    /**
     * 단원 필터 변경 핸들러
     */
    onDayChange(dayVal) {
      this.selectedDay = dayVal;
      this.refreshPaper();
    }

    /**
     * 모드 전환 (보카북 / 워크북 / 합본)
     */
    setMode(mode) {
      this.currentMode = mode;
      this.renderModal();
    }

    /**
     * 블라인드 모드 변경
     */
    onBlindChange(val) {
      this.blindMode = val;
      const scrollArea = document.getElementById('studio-scroll-area');
      if (scrollArea) {
        scrollArea.classList.remove('blind-meanings', 'blind-words');
        if (val === 'meaning') scrollArea.classList.add('blind-meanings');
        if (val === 'word') scrollArea.classList.add('blind-words');
      }
    }

    /**
     * A4 시트 콘텐츠만 다시 그리기
     */
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
     * 인쇄 실행
     */
    print() {
      window.print();
    }

    /**
     * 모달 닫기
     */
    close() {
      const modal = document.getElementById('book-studio-modal');
      if (modal) {
        modal.remove();
      }
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
          <!-- 상단 엠블럼 & 시리즈 배지 -->
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

          <!-- 중간 그래픽 장식 및 학습 모드 안내 -->
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

          <!-- 하단 학습자 정보 기입란 -->
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
              const first3 = words.slice(0, 3).map(w => w.word).join(', ');
              return `
                <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="studio-day-tag text-xs">${d}</span>
                    <span class="text-[11px] font-bold text-slate-500">${words.length} Words</span>
                  </div>
                  <div class="text-xs text-slate-600 truncate mb-2">
                    주요 어휘: <span class="font-serif italic">${first3}...</span>
                  </div>
                  <div class="flex items-center justify-between pt-2 border-t border-slate-200 text-[10px] text-slate-500">
                    <span>1회독 [ ]</span>
                    <span>2회독 [ ]</span>
                    <span>워크북 [ ]</span>
                    <span>확인일: ___/___</span>
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

      return `
        <div class="studio-a4-sheet">
          <!-- 단원 헤더 -->
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

          <!-- 2단 어휘 카드 그리드 -->
          <div class="studio-voca-grid">
            ${words.map(w => this.renderWordCard(w, seriesKey)).join('')}
          </div>

          <!-- 하단 단원 푸터 -->
          <div class="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH SUPPLEMENTARY SERIES • VOCABULARY BOOK</span>
            <span>${dayKey} • PAGE COMPLETE</span>
          </div>
        </div>
      `;
    }

    /**
     * 시리즈별 차별화된 어휘 카드 템플릿
     */
    renderWordCard(w, seriesKey) {
      // 1. 수능 킬러 다의어 시리즈 특화 UI
      if (seriesKey === 'killer') {
        const meanings = w.meaning.split(/[,;/]|\d+\.\s*/).map(s => s.trim()).filter(Boolean);
        const m1 = meanings[0] || w.meaning;
        const m2 = meanings.slice(1).join(', ') || '문맥상 파생 의미';

        return `
          <div class="studio-word-card">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1">
                  <span class="studio-word-num">${String(w.num).padStart(2, '0')}.</span>
                  <span class="studio-word-lemma">${w.word}</span>
                  ${w.pos ? `<span class="studio-word-pos">${w.pos}</span>` : ''}
                </div>
                <div class="studio-checks">
                  <span>1<span class="studio-check-box ml-0.5"></span></span>
                  <span>2<span class="studio-check-box ml-0.5"></span></span>
                  <span>3<span class="studio-check-box ml-0.5"></span></span>
                </div>
              </div>

              <!-- 다의어 1/2차 의미 분할 박스 -->
              <div class="mt-1.5 space-y-1">
                <div class="studio-word-meaning text-xs flex items-baseline gap-1">
                  <span class="text-[10px] font-bold text-rose-700 bg-rose-50 px-1 rounded">① 기본</span>
                  <span>${m1}</span>
                </div>
                ${meanings.length > 1 ? `
                  <div class="studio-word-meaning text-xs flex items-baseline gap-1 text-indigo-900">
                    <span class="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1 rounded">② 킬러</span>
                    <span>${m2}</span>
                  </div>
                ` : ''}
              </div>
            </div>

            ${w.example ? `
              <div class="studio-word-example">
                <div class="font-medium">${this.highlightWord(w.example, w.word)}</div>
                ${w.translation ? `<div class="studio-word-trans mt-0.5">${w.translation}</div>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      }

      // 2. 미국 교과서 학술 어휘 시리즈 특화 UI (영영 사전풍)
      if (seriesKey === 'academic') {
        return `
          <div class="studio-word-card border-l-4 border-slate-900">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1">
                  <span class="studio-word-num">${String(w.num).padStart(2, '0')}.</span>
                  <span class="studio-word-lemma">${w.word}</span>
                  ${w.pos ? `<span class="studio-word-pos font-serif">${w.pos}</span>` : ''}
                </div>
                <div class="studio-checks">
                  <span>1<span class="studio-check-box ml-0.5"></span></span>
                  <span>2<span class="studio-check-box ml-0.5"></span></span>
                </div>
              </div>

              <div class="studio-word-meaning">
                ${w.meaning}
              </div>
            </div>

            ${w.example ? `
              <div class="studio-word-example bg-slate-50/70 p-1.5 rounded mt-2">
                <div class="font-serif italic text-slate-800">${this.highlightWord(w.example, w.word)}</div>
                ${w.translation ? `<div class="studio-word-trans mt-1">${w.translation}</div>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      }

      // 3. 여행 영어 시리즈 특화 UI
      if (seriesKey === 'travel') {
        return `
          <div class="studio-word-card border-l-4 border-sky-600 bg-sky-50/20">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1">
                  <span class="studio-word-num text-sky-700 font-bold">#${w.num}</span>
                  <span class="studio-word-lemma text-sky-900">${w.word}</span>
                </div>
                <span class="text-[10px] font-bold text-sky-700 bg-sky-100 px-1.5 py-0.5 rounded">Travel Prep</span>
              </div>
              <div class="studio-word-meaning text-slate-900">
                ${w.meaning}
              </div>
            </div>

            ${w.example ? `
              <div class="studio-word-example border-sky-100">
                <div class="font-semibold text-sky-950">🗣️ ${this.highlightWord(w.example, w.word)}</div>
                ${w.translation ? `<div class="studio-word-trans text-slate-600 mt-0.5">${w.translation}</div>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      }

      // 4. 일반 표준 카드 (중등 내신, 트렌드, 숙어, 문학, AI 맞춤)
      return `
        <div class="studio-word-card">
          <div>
            <div class="flex items-center justify-between">
              <div class="flex items-baseline gap-1">
                <span class="studio-word-num">${String(w.num).padStart(2, '0')}.</span>
                <span class="studio-word-lemma">${w.word}</span>
                ${w.pos ? `<span class="studio-word-pos">${w.pos}</span>` : ''}
              </div>
              <div class="studio-checks">
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
              <div>${this.highlightWord(w.example, w.word)}</div>
              ${w.translation ? `<div class="studio-word-trans mt-0.5">${w.translation}</div>` : ''}
            </div>
          ` : ''}
        </div>
      `;
    }

    /**
     * 워크북 단원(Day) 시트 (문제 자동 출제)
     */
    renderWorkbookDaySheet(dayKey, words) {
      const meta = this.currentBookMeta;
      const seriesKey = meta.series || 'middle';
      const seriesInfo = SERIES_INFO[seriesKey] || SERIES_INFO.middle;

      // 단어 분할: Section A (철자 쓰기), Section B (의미 매칭), Section C (예문 빈칸 Cloze)
      const count = words.length;
      const half = Math.ceil(count / 2);
      const groupA = words.slice(0, half);
      const groupB = words.slice(half);

      // Section B용 셔플 리스트 (뜻 매칭)
      const shuffledMeanings = [...groupB].sort(() => 0.5 - Math.random());

      return `
        <div class="studio-a4-sheet">
          <!-- 워크북 헤더 -->
          <div class="studio-day-header border-b-2 border-slate-900">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-slate-900">${dayKey} WORKBOOK</span>
                <span class="text-xs font-bold text-slate-700">${seriesInfo.name}</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                능동적 인출(Retrieval Practice) & 문맥 적용 집중 실전 문제
              </div>
            </div>
            <div class="text-right text-[11px] text-slate-500">
              <div>학습자: _____________</div>
              <div class="font-bold text-slate-800 mt-0.5">점수: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 100점</div>
            </div>
          </div>

          <!-- Section 1. 뜻 보고 스펠링 완성하기 (앞글자 힌트) -->
          <div class="studio-wb-section-title">
            <span>Section 1. 우리말 뜻을 보고 알맞은 영단어를 철자로 완성하시오.</span>
            <span class="text-[10px] font-normal text-slate-500">Spelling & Recall</span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            ${groupA.map((w, idx) => {
              const hint = this.makeSpellingHint(w.word);
              return `
                <div class="studio-wb-qitem flex items-center justify-between border border-slate-200">
                  <div class="text-xs font-medium text-slate-800 truncate pr-2">
                    <span class="studio-wb-qnum">${idx + 1}.</span>
                    <span>${w.meaning}</span>
                  </div>
                  <div class="flex items-center gap-1 shrink-0">
                    <span class="studio-wb-hint">${hint}</span>
                    <span class="studio-wb-cloze-blank"></span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Section 2. 실전 예문 문맥 빈칸 완성 (Context Cloze Test) -->
          <div class="studio-wb-section-title mt-4">
            <span>Section 2. 문맥을 읽고 괄호 안에 들어갈 가장 알맞은 어휘를 적으시오.</span>
            <span class="text-[10px] font-normal text-slate-500">Context Cloze</span>
          </div>
          <div class="space-y-2">
            ${words.slice(0, 5).map((w, idx) => {
              const clozeSentence = this.makeClozeSentence(w.example, w.word);
              return `
                <div class="studio-wb-qitem border border-slate-200">
                  <div class="text-xs text-slate-900 leading-relaxed">
                    <span class="studio-wb-qnum">${idx + 1}.</span>
                    <span>${clozeSentence}</span>
                  </div>
                  <div class="text-[11px] text-slate-500 mt-1 pl-4 flex items-center justify-between">
                    <span>[해석] ${w.translation || w.meaning}</span>
                    <span class="font-bold text-slate-700">정답: ( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <!-- Section 3. 어휘와 의미 올바르게 연결하기 (Matching Test) -->
          ${groupB.length > 0 ? `
            <div class="studio-wb-section-title mt-4">
              <span>Section 3. 왼쪽의 영단어와 오른쪽의 알맞은 의미를 바르게 연결하시오.</span>
              <span class="text-[10px] font-normal text-slate-500">Meaning Match</span>
            </div>
            <div class="grid grid-cols-2 gap-4 p-2 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <div class="space-y-2">
                ${groupB.map((w, idx) => `
                  <div class="flex items-center justify-between p-1.5 bg-white rounded border border-slate-200">
                    <span><strong class="text-slate-800">(${idx + 1})</strong> ${w.word}</span>
                    <span class="text-slate-400">●</span>
                  </div>
                `).join('')}
              </div>
              <div class="space-y-2">
                ${shuffledMeanings.map((w, idx) => {
                  const label = String.fromCharCode(65 + idx); // A, B, C...
                  return `
                    <div class="flex items-center justify-between p-1.5 bg-white rounded border border-slate-200">
                      <span class="text-slate-400">●</span>
                      <span class="truncate pl-2"><strong class="text-blue-900">(${label})</strong> ${w.meaning}</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- 하단 단원 푸터 -->
          <div class="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH SUPPLEMENTARY SERIES • WORKBOOK</span>
            <span>${dayKey} • SOLVE & PRACTICE</span>
          </div>
        </div>
      `;
    }

    /**
     * 빠른 정답표 시트 (Answer Key Sheet)
     */
    renderAnswerKeySheet(days) {
      const meta = this.currentBookMeta;

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-slate-900">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Answer Key</span>
              <h2 class="text-xl font-black text-slate-900">워크북 빠른 정답표 (Quick Answer Key)</h2>
            </div>
            <span class="text-xs font-bold text-slate-500">${meta.title}</span>
          </div>

          <div class="space-y-6 mt-4">
            ${days.map(d => {
              const words = this.groupedDays[d] || [];
              return `
                <div class="p-3.5 rounded-lg border border-slate-200 bg-slate-50/50">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-bold text-xs text-slate-900 bg-slate-200 px-2 py-0.5 rounded">${d} 정답</span>
                    <span class="text-[11px] text-slate-500">총 ${words.length}문항</span>
                  </div>
                  <div class="studio-answer-grid">
                    ${words.map(w => `
                      <div class="studio-answer-item">
                        <span class="font-bold text-slate-500">${w.num}.</span>
                        <span class="font-bold text-slate-900">${w.word}</span>
                        <div class="text-[10px] text-slate-600 truncate">${w.meaning}</div>
                      </div>
                    `).join('')}
                  </div>
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

    /**
     * 예문에서 단어를 찾아 강조 태그 처리
     */
    highlightWord(sentence, targetWord) {
      if (!sentence || !targetWord) return sentence || '';
      try {
        const regex = new RegExp(`\\b(${targetWord}[a-zA-Z]*)\\b`, 'gi');
        return sentence.replace(regex, '<strong class="text-slate-900 underline decoration-slate-400">$1</strong>');
      } catch (e) {
        return sentence;
      }
    }

    /**
     * 철자 힌트 생성 (예: curious -> c _ _ _ _ _ _)
     */
    makeSpellingHint(word) {
      if (!word) return '______';
      const clean = word.trim();
      if (clean.length <= 3) return clean.charAt(0) + ' ' + '_ '.repeat(clean.length - 1).trim();
      return clean.slice(0, 2) + ' ' + '_ '.repeat(clean.length - 2).trim();
    }

    /**
     * 예문에서 단어를 빈칸 ( ________ )으로 치환
     */
    makeClozeSentence(sentence, targetWord) {
      if (!sentence || !targetWord) return sentence || '( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )';
      try {
        const regex = new RegExp(`\\b(${targetWord}[a-zA-Z]*)\\b`, 'gi');
        return sentence.replace(regex, '<strong>( &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; )</strong>');
      } catch (e) {
        return sentence;
      }
    }
  }

  // 글로벌 싱글톤 인스턴스 등록
  window.bookStudioEngine = new BookStudioEngine();

})(window);
