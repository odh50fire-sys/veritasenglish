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
    'veritas-original-l10': 'original',
    // 베리타스 프리미엄 5대 시즌 단어장
    'season-netflix-slang': 'season_netflix_slang',
    'season-ted-news': 'season_ted_news',
    'season-academic-essay': 'season_academic_essay',
    'season-middle-starter': 'season_middle_starter',
    'season-toeic-rc1500': 'season_toeic_rc',
    'challenger-1': 'reading_tutor_challenger',
    'challenger-2': 'reading_tutor_challenger',
    'challenger-3': 'reading_tutor_challenger'
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
    },
    season_netflix_slang: {
      name: '넷플릭스·미드 구어 & SNS 슬랭',
      sub: '미드 대본 섀도잉 & Z세대 최신 SNS 슬랭·리얼 구어체 완성',
      icon: '🍿',
      accentColor: '#b91c1c',
      badgeClass: 'series-theme-season_netflix_slang'
    },
    season_ted_news: {
      name: 'TED & 글로벌 뉴스 시사 영단어',
      sub: 'BBC·CNN 뉴스 브리핑 & TED 명강연 시사 섀도잉 리더',
      icon: '🎙️',
      accentColor: '#991b1b',
      badgeClass: 'series-theme-season_ted_news'
    },
    season_academic_essay: {
      name: '영미권 대학 강의 & 학술 에세이',
      sub: 'Tier-2/3 학술 담화 표지 & 논문 패러프레이징·논증 라이팅',
      icon: '🏛️',
      accentColor: '#1e1b4b',
      badgeClass: 'series-theme-season_academic_essay'
    },
    season_middle_starter: {
      name: '중학 첫걸음 필수 기초 영단어',
      sub: '교육부 중학 기초 1,000 & 불규칙 동사 100선 3단 변화 완전 정복',
      icon: '🌱',
      accentColor: '#047857',
      badgeClass: 'series-theme-season_middle_starter'
    },
    reading_tutor_challenger: {
      name: '리딩튜터 챌린저 실전 독해 보카',
      sub: 'NE능률 2025 개정 최신판 지문 연동 고교 내신 1등급 & 수능 킬러 정복',
      icon: '📖',
      accentColor: '#4338ca',
      badgeClass: 'series-theme-reading_tutor'
    },
    season_toeic_rc: {
      name: '토익(TOEIC) 기출 RC 핵심 보카',
      sub: 'Part 5·6·7 실전 빈출 어휘 & 3초 컷 빈출 연어(Collocation) 클리닉',
      icon: '💼',
      accentColor: '#0369a1',
      badgeClass: 'series-theme-season_toeic_rc'
    }
  };

  const SPECIAL_MODES = {
    original: [
      { id: 'collocation', name: '🔗 핵심 콜로케이션', desc: '부교재 1: 전치사 & 연어 결합집 (Lv.3~10 전용)', minLevel: 3 },
      { id: 'writing_drill', name: '✍️ 서술형 패턴 드릴', desc: '부교재 2: 조건 영작 & 패턴 드릴 (Lv.3~10 전용)', minLevel: 3 },
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
    ],
    season_netflix_slang: [
      { id: 'script', name: '🎬 섀도잉 실전 대본집', desc: '부교재 1: 미드·유튜브 리얼 대화문 & 롤플레잉 드릴' },
      { id: 'slang_talk', name: '💬 Z세대 메신저(DM) 톡 드릴', desc: '부교재 2: SNS/문자 메시지 실전 슬랭 완성 노트' },
      { id: 'cram', name: '⚡ 10분 생존 슬랭 시트', desc: '부교재 3: A4 1장 초압축 생존 리액션 & 구어' }
    ],
    season_ted_news: [
      { id: 'ted_brief', name: '🎙️ TED 1분 시사 브리핑', desc: '부교재 1: 시사 헤드라인 & 1분 스피치 낭독 시트' },
      { id: 'cloze_sprint', name: '⚡ 5분 시사 빈칸 펑크', desc: '부교재 2: 글로벌 뉴스 필수 시사 어휘 고속 인출' },
      { id: 'writing', name: '✍️ 시사 이슈 서술형 노트', desc: '부교재 3: 뉴스 쟁점 핵심 문장 영작 완성' }
    ],
    season_academic_essay: [
      { id: 'academic_reader', name: '🏫 학술 담화 & 패러프레이징', desc: '부교재 1: 논문·원서 독해 & 동의어 치환 드릴' },
      { id: 'writing_drill', name: '✍️ 에세이 논증 패턴 드릴', desc: '부교재 2: 학술 담화 표지 & 조건 영작 노트' },
      { id: 'cloze_sprint', name: '⚡ 5분 학술 빈칸 펑크', desc: '부교재 3: 에세이 핵심 어휘 고속 인출 테스트' }
    ],
    season_middle_starter: [
      { id: 'irregular_verbs', name: '⚡ 불규칙 동사 100선 마스터', desc: '부교재 1: 원형-과거-과거분사 3단 변화 총정리 시트' },
      { id: 'writing', name: '✍️ 중학 첫걸음 영작 노트', desc: '부교재 2: 기초 어순 배열 & 기본 문장 쓰기' },
      { id: 'cram', name: '⚡ 10분 기초 보카 파이널', desc: '부교재 3: A4 1장 초압축 기초 어휘 정리' }
    ],
    reading_tutor_challenger: [
      { id: 'passage_cloze', name: '🎯 지문 문맥 빈칸 펑크', desc: '부교재 1: 지문 주제 기반 고교 내신 서술형 빈칸 인출 드릴' },
      { id: 'collocation_match', name: '⚡ 고교 빈출 연어 매칭', desc: '부교재 2: 수능 1등급 직결 필수 콜로케이션 클리닉' },
      { id: 'cram', name: '⚡ 지문 직전 초압축 족보', desc: '부교재 3: A4 1장 섹션별 표제어 초고속 복습 시트' }
    ],
    season_toeic_rc: [
      { id: 'toeic_collocation', name: '⏱️ 3초 컷 빈출 연어 클리닉', desc: '부교재 1: 파트 5 최다 빈출 전치사/명사 짝단어 족보' },
      { id: 'toeic_part5', name: '🎯 파트 5 실전 4지선다 모의', desc: '부교재 2: 토익 실전 시험지와 동일한 RC 4지선다 워크북' },
      { id: 'cram', name: '⚡ 시험장 직전 초압축 족보', desc: '부교재 3: A4 1장 토익 RC 빈출 어휘 총정리' }
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
          pronunciation: w.발음 || w.pronunciation || '',
          nuanceTip: w.nuanceTip || w.뉘앙스 || '',
          level: w.level || 1,
          badge: w.badge || ''
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

      const seriesOrder = [
        'season_netflix_slang',
        'season_ted_news',
        'season_academic_essay',
        'season_middle_starter',
        'season_toeic_rc',
        'original',
        'middle',
        'killer',
        'trend',
        'academic',
        'idioms',
        'travel',
        'literature'
      ];
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
      const bookLvl = (this.currentBookMeta && this.currentBookMeta.level) || 1;
      if (bookLvl < 3 && (this.currentMode === 'collocation' || this.currentMode === 'writing_drill')) {
        this.currentMode = 'voca';
      }
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
      const rawModes = SPECIAL_MODES[seriesKey] || [];
      const bookLvl = (this.currentBookMeta && this.currentBookMeta.level) || 1;
      const modes = rawModes.filter(m => !m.minLevel || bookLvl >= m.minLevel);
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
        if (this.currentMode === 'slang_talk') {
          html += this.renderSlangChatSheet(dayKey, words);
        }
        if (this.currentMode === 'ted_brief') {
          html += this.renderTedBriefSheet(dayKey, words);
        }
        if (this.currentMode === 'irregular_verbs') {
          html += this.renderIrregularVerbsSheet(dayKey, words);
        }
        if (this.currentMode === 'toeic_collocation') {
          html += this.renderToeicCollocationSheet(dayKey, words);
        }
        if (this.currentMode === 'toeic_part5') {
          html += this.renderToeicPart5Sheet(dayKey, words);
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
    
    /**
     * 표제어의 의미와 품사에 부합하는 100% 자연스러운 문맥형 대화문 생성기
     */
    buildContextualDialogue(w) {
      const ex = String(w.example || '').trim();
      const word = String(w.word || '').trim();
      const pos = String(w.pos || '').toLowerCase();
      const meaning = String(w.meaning || '').trim();

      // 예문에 이미 A/B 대화 따옴표가 있는 경우
      if (ex.includes('A:') && ex.includes('B:')) {
        const parts = ex.split(/B:/);
        return {
          speakerA: parts[0].replace(/A:/, '').trim().replace(/^["']|["']$/g, ''),
          speakerB: parts[1].trim().replace(/^["']|["']$/g, '')
        };
      }

      // 의미 및 품사 기반 문맥형 자연스러운 질문 도출
      let promptA = "What did the team conclude about this situation?";
      if (pos.includes('v') || meaning.includes('하다') || meaning.includes('되다')) {
        if (meaning.includes('취소') || meaning.includes('연기') || meaning.includes('중단')) {
          promptA = "Is the upcoming event still scheduled to take place as planned?";
        } else if (meaning.includes('동의') || meaning.includes('결정') || meaning.includes('해결')) {
          promptA = "Have they finally reached a consensus on the matter?";
        } else if (meaning.includes('구매') || meaning.includes('판매') || meaning.includes('비용')) {
          promptA = "How did the department handle the financial transaction?";
        } else if (meaning.includes('개선') || meaning.includes('증가') || meaning.includes('개발')) {
          promptA = "What progress has been made on the ongoing project?";
        } else {
          promptA = `How did they decide to handle the matter regarding ${word}?`;
        }
      } else if (pos.includes('a') || meaning.includes('한') || meaning.includes('적인')) {
        if (meaning.includes('중요') || meaning.includes('필수') || meaning.includes('심각')) {
          promptA = "Why is everyone paying so much attention to this issue?";
        } else if (meaning.includes('편리') || meaning.includes('효과') || meaning.includes('우수')) {
          promptA = "What makes this new approach so highly recommended?";
        } else {
          promptA = "How would you describe the overall condition of the project?";
        }
      } else if (meaning.includes('편견') || meaning.includes('갈등') || meaning.includes('어려움')) {
        promptA = "What was the main obstacle encountered during the discussion?";
      } else {
        promptA = "Could you explain the key takeaway from the recent report?";
      }

      return {
        speakerA: promptA,
        speakerB: ex || `We must make sure that we thoroughly understand ${word}.`
      };
    }

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
      const dayTip = this.selectDayNativeTip(words, seriesKey);

      // A4 높이(297mm) 초과 방지: 페이지당 정확히 10단어씩 분할 (5행 x 2열)
      const pageSize = 10;
      const totalPages = Math.ceil(words.length / pageSize) || 1;
      let pagesHtml = '';

      for (let pIdx = 0; pIdx < totalPages; pIdx++) {
        const pageWords = words.slice(pIdx * pageSize, (pIdx + 1) * pageSize);
        const isFirstPage = pIdx === 0;
        const isLastPage = pIdx === totalPages - 1;
        const pageLabel = totalPages > 1 ? ` (Page ${pIdx + 1} / ${totalPages})` : '';

        pagesHtml += `
          <div class="studio-a4-sheet">
            <div class="studio-day-header">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="studio-day-tag">${dayKey}${pageLabel}</span>
                  <span class="text-xs font-bold text-slate-700">${seriesInfo.name}</span>
                  <span class="text-slate-300">•</span>
                  <span class="text-xs font-medium text-slate-500 truncate max-w-[220px]">${meta.title}</span>
                </div>
                <div class="text-xs text-slate-500 font-medium">
                  단어 ${pIdx * pageSize + 1}~${Math.min((pIdx + 1) * pageSize, words.length)}번 (총 ${words.length}단어) | 3회독 누적 암기 트레이닝
                </div>
              </div>
              <div class="text-right text-[11px] text-slate-500">
                <div>학습일: ____년 __월 __일</div>
                <div class="font-bold text-slate-800 mt-0.5">암기 확인: [ &nbsp; / ${pageWords.length} ]</div>
              </div>
            </div>

            <!-- 어휘 카드 2단 그리드 (각 열 50% 엄격 유지, 박스 돌출 차단) -->
            <div class="studio-voca-grid">
              ${pageWords.map(w => this.renderWordCard(w, seriesKey)).join('')}
            </div>

            <!-- 마지막 페이지에만 원어민 꿀팁 배너 배치하여 A4 높이 무오류 보장 -->
            ${isLastPage && dayTip ? `
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
            ${totalPages === 1 && words.length <= 8 ? `
              <div class="studio-compact-day-notes mt-4 p-3 rounded-xl border border-slate-200 bg-slate-50/70">
                <div class="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
                  <span class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span>✍️ ${dayKey} 핵심 단어 활용 문장 작문 & 오답 정리 노트</span>
                  </span>
                  <span class="text-[10px] text-slate-500 font-medium">Daily Application Note</span>
                </div>
                <div class="space-y-1.5 text-xs text-slate-600">
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-800 shrink-0">1. 핵심 문장:</span>
                    <span class="flex-1 border-b border-slate-300 h-5"></span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-800 shrink-0">2. 핵심 문장:</span>
                    <span class="flex-1 border-b border-slate-300 h-5"></span>
                  </div>
                </div>
              </div>
            ` : ''}

            <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
              <span>VERITAS ENGLISH SCHOLARS' ACADEMY • SUPPLEMENTARY VOCA BOOK</span>
              <span>${dayKey} • PAGE ${pIdx + 1} OF ${totalPages}</span>
            </div>
          </div>
        `;
      }

      return pagesHtml;
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

      // 1) 넷플릭스·미드 구어 & SNS 슬랭 카드
      if (seriesKey === 'reading_tutor_challenger') {
        return `
          <div class="studio-word-card border-l-4 border-indigo-600 bg-indigo-50/10">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1.5 min-w-0">
                  <span class="studio-word-num text-indigo-700 font-bold shrink-0">#${String(w.num).padStart(2, '0')}</span>
                  <span class="studio-word-lemma text-indigo-950 font-serif font-black">${displayWord}</span>
                  ${w.pos ? `<span class="studio-word-pos bg-indigo-100 text-indigo-800 font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0">${w.pos}</span>` : ''}
                </div>
                <div class="studio-checks shrink-0">
                  <span>1<span class="studio-check-box ml-0.5"></span></span>
                  <span>2<span class="studio-check-box ml-0.5"></span></span>
                </div>
              </div>
              <div class="studio-word-meaning font-bold text-slate-900 mt-1">
                ${w.meaning}
              </div>
              ${w.pronunciation ? `<div class="text-[10px] text-indigo-600 font-mono mt-0.5">${w.pronunciation}</div>` : ''}
              ${w.example ? `
                <div class="studio-word-example text-slate-600 mt-1 pl-2 border-l border-indigo-200">
                  <div class="font-serif italic text-slate-700">${w.example}</div>
                  ${w.trans ? `<div class="text-[11px] text-slate-500 mt-0.5">${w.trans}</div>` : ''}
                </div>` : ''}
              ${w.collocation ? `<div class="text-[10px] text-indigo-700 mt-1 font-semibold">📌 ${w.collocation}</div>` : ''}
            </div>
          </div>
        `;
      }

      if (seriesKey === 'season_netflix_slang') {
        return `
          <div class="studio-word-card border-l-4 border-rose-600 bg-rose-50/10">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1.5 min-w-0">
                  <span class="studio-word-num text-rose-700 font-bold shrink-0">#${String(w.num).padStart(2, '0')}</span>
                  <span class="studio-word-lemma text-rose-950 font-serif font-black">${displayWord}</span>
                  ${w.pos ? `<span class="studio-word-pos bg-rose-100 text-rose-800 font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0">${w.pos}</span>` : ''}
                </div>
                <div class="studio-checks shrink-0">
                  <span>1<span class="studio-check-box ml-0.5"></span></span>
                  <span>2<span class="studio-check-box ml-0.5"></span></span>
                </div>
              </div>
              <div class="studio-word-meaning font-bold text-slate-900 mt-1">
                ${w.meaning}
              </div>
              ${w.nuanceTip ? `
                <div class="mt-1 text-[10.5px] bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200 flex items-center gap-1">
                  <span>💡 뉘앙스:</span>
                  <span class="font-medium">${w.nuanceTip}</span>
                </div>
              ` : ''}
            </div>
            ${w.example ? `
              <div class="studio-word-example border-rose-100 mt-1.5">
                <div class="font-sans text-slate-800 font-medium">🗣️ "${this.highlightWord(w.example, displayWord)}"</div>
                ${w.translation ? `<div class="studio-word-trans text-slate-500 mt-0.5">${w.translation}</div>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      }

      // 2) TED & 글로벌 뉴스 시사 영단어 카드
      if (seriesKey === 'season_ted_news') {
        return `
          <div class="studio-word-card border-l-4 border-teal-700 bg-teal-50/15">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1.5 min-w-0">
                  <span class="studio-word-num text-teal-800 font-bold shrink-0">${String(w.num).padStart(2, '0')}.</span>
                  <span class="studio-word-lemma text-teal-950 font-serif font-black">${displayWord}</span>
                  ${w.pos ? `<span class="studio-word-pos bg-teal-100 text-teal-900 font-mono px-1.5 py-0.5 rounded text-[10px] shrink-0">${w.pos}</span>` : ''}
                </div>
                <span class="text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded">TED/News</span>
              </div>
              <div class="studio-word-meaning font-bold text-slate-900 mt-1">
                ${w.meaning}
              </div>
              ${w.collocation ? `
                <div class="mt-1 text-[10.5px] bg-teal-50/80 text-teal-950 px-2 py-0.5 rounded border border-teal-200 flex items-center gap-1">
                  <span class="font-bold text-teal-800">🌐 연어:</span>
                  <span class="font-semibold">${w.collocation}</span>
                </div>
              ` : ''}
            </div>
            ${w.example ? `
              <div class="studio-word-example border-teal-100 mt-1.5">
                <div class="font-serif italic text-slate-900">${this.highlightWord(w.example, displayWord)}</div>
                ${w.translation ? `<div class="studio-word-trans text-slate-600 mt-0.5">${w.translation}</div>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      }

      // 3) 영미권 대학 강의 & 학술 에세이 카드
      if (seriesKey === 'season_academic_essay') {
        return `
          <div class="studio-word-card border-l-4 border-indigo-950 bg-slate-50/30">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1.5 min-w-0">
                  <span class="studio-word-num text-slate-800 font-bold shrink-0">${String(w.num).padStart(2, '0')}.</span>
                  <span class="studio-word-lemma text-indigo-950 font-serif font-black tracking-tight">${displayWord}</span>
                  ${w.pos ? `<span class="studio-word-pos bg-slate-200 text-slate-800 font-serif italic px-1.5 py-0.5 rounded text-[10px] shrink-0">${w.pos}</span>` : ''}
                </div>
                <span class="text-[10px] font-mono font-bold text-indigo-900 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded">Academic Lv.9</span>
              </div>
              <div class="studio-word-meaning font-bold text-slate-900 mt-1">
                ${w.meaning}
              </div>
              ${w.writingPattern ? `
                <div class="mt-1 text-[10.5px] bg-indigo-50 text-indigo-950 px-2 py-0.5 rounded border border-indigo-200 flex items-center gap-1">
                  <span class="font-bold text-indigo-800">✍️ 패턴:</span>
                  <span class="font-mono">${w.writingPattern}</span>
                </div>
              ` : ''}
            </div>
            ${w.example ? `
              <div class="studio-word-example border-slate-200 mt-1.5">
                <div class="font-serif text-slate-900 leading-snug">${this.highlightWord(w.example, displayWord)}</div>
                ${w.translation ? `<div class="studio-word-trans text-slate-600 mt-0.5">${w.translation}</div>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      }

      // 4) 중학 첫걸음 필수 기초 영단어 카드
      if (seriesKey === 'season_middle_starter') {
        return `
          <div class="studio-word-card border-l-4 border-emerald-600 bg-emerald-50/10">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1.5 min-w-0">
                  <span class="studio-word-num text-emerald-800 font-bold shrink-0">${String(w.num).padStart(2, '0')}.</span>
                  <span class="studio-word-lemma text-emerald-950 font-bold text-base">${displayWord}</span>
                  ${w.pos ? `<span class="studio-word-pos bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0">${w.pos}</span>` : ''}
                </div>
                <div class="studio-checks shrink-0">
                  <span>1<span class="studio-check-box ml-0.5"></span></span>
                  <span>2<span class="studio-check-box ml-0.5"></span></span>
                  <span>3<span class="studio-check-box ml-0.5"></span></span>
                </div>
              </div>
              <div class="studio-word-meaning font-bold text-slate-900 text-sm mt-1">
                ${w.meaning}
              </div>
              ${w.collocation ? `
                <div class="mt-1 text-[10.5px] bg-amber-50 text-amber-950 px-2 py-0.5 rounded border border-amber-300 font-medium">
                  ⚡ <strong>3단 변화/연어:</strong> ${w.collocation}
                </div>
              ` : ''}
            </div>
            ${w.example ? `
              <div class="studio-word-example border-emerald-100 mt-1.5">
                <div class="font-sans text-slate-900 font-medium">${this.highlightWord(w.example, displayWord)}</div>
                ${w.translation ? `<div class="studio-word-trans text-slate-600 mt-0.5">${w.translation}</div>` : ''}
              </div>
            ` : ''}
          </div>
        `;
      }

      // 5) 토익(TOEIC) 기출 RC 핵심 보카 카드
      if (seriesKey === 'season_toeic_rc') {
        return `
          <div class="studio-word-card border-l-4 border-blue-700 bg-blue-50/10">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-baseline gap-1.5 min-w-0">
                  <span class="studio-word-num text-blue-900 font-bold shrink-0">${String(w.num).padStart(2, '0')}.</span>
                  <span class="studio-word-lemma text-blue-950 font-bold text-base tracking-tight">${displayWord}</span>
                  ${w.pos ? `<span class="studio-word-pos bg-blue-100 text-blue-900 font-mono font-bold px-1.5 py-0.5 rounded text-[10px] shrink-0">${w.pos}</span>` : ''}
                </div>
                <span class="text-[10px] font-bold text-blue-900 bg-amber-100 border border-amber-300 px-1.5 py-0.5 rounded">TOEIC RC</span>
              </div>
              <div class="studio-word-meaning font-bold text-slate-900 text-xs mt-1">
                ${w.meaning}
              </div>
              ${w.collocation ? `
                <div class="mt-1 text-[10.5px] bg-sky-50 text-sky-950 px-2 py-0.5 rounded border border-sky-200">
                  ⏱️ <strong>3초 컷 짝단어:</strong> <span class="font-bold text-blue-900">${w.collocation}</span>
                </div>
              ` : ''}
              ${w.nuanceTip ? `
                <div class="mt-0.5 text-[10px] text-slate-500">
                  🎯 출제 팁: ${w.nuanceTip}
                </div>
              ` : ''}
            </div>
            ${w.example ? `
              <div class="studio-word-example border-blue-100 mt-1.5">
                <div class="font-sans text-slate-900 font-medium">${this.highlightWord(w.example, displayWord)}</div>
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

      // 워크북 문항 수에 따라 2페이지 분할하여 A4 높이 넘침 원천 차단
      const needsTwoPages = wb.total > 10;

      if (!needsTwoPages) {
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
                <div class="font-bold text-slate-800 mt-0.5">점수: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / ${wb.total}문항</div>
              </div>
            </div>

            ${this.renderWorkbookSection1(wb)}
            ${this.renderWorkbookSection2(wb)}
            ${this.renderWorkbookSection3(wb)}

            <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
              <span>VERITAS ENGLISH SUPPLEMENTARY SERIES • WORKBOOK</span>
              <span>${dayKey} • COMPLETE</span>
            </div>
          </div>
        `;
      }

      // 2페이지로 깔끔하게 분할 렌더링
      return `
        <!-- 워크북 Page 1: Section 1 & Section 2 -->
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-slate-900">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-slate-900">${dayKey} WORKBOOK (Part 1)</span>
                <span class="text-xs font-bold text-slate-700">${seriesInfo.name}</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                Section 1 (철자 인출) &amp; Section 2 (문맥 빈칸) • Page 1 of 2
              </div>
            </div>
            <div class="text-right text-[11px] text-slate-500">
              <div>학습자: _____________</div>
              <div class="font-bold text-slate-800 mt-0.5">확인: [ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</div>
            </div>
          </div>

          ${this.renderWorkbookSection1(wb)}
          ${this.renderWorkbookSection2(wb)}

          <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH SUPPLEMENTARY SERIES • WORKBOOK</span>
            <span>${dayKey} • PAGE 1 OF 2</span>
          </div>
        </div>

        <!-- 워크북 Page 2: Section 3 & 의미 연결 -->
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-slate-900">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-slate-900">${dayKey} WORKBOOK (Part 2)</span>
                <span class="text-xs font-bold text-slate-700">${seriesInfo.name}</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                Section 3 (의미 매칭) &amp; 실전 어휘 종합 점검 • Page 2 of 2
              </div>
            </div>
            <div class="text-right text-[11px] text-slate-500">
              <div>학습자: _____________</div>
              <div class="font-bold text-slate-800 mt-0.5">최종 점수: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / ${wb.total}</div>
            </div>
          </div>

          ${this.renderWorkbookSection3(wb)}

          <!-- 하단 오답 클리닉 노트 -->
          <div class="mt-6 p-3.5 rounded-xl border border-slate-200 bg-slate-50/70">
            <div class="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2 text-xs font-bold text-slate-900">
              <span>✍️ 틀린 단어 셀프 클리닉 &amp; 복습 작성란</span>
              <span class="text-[10px] text-slate-500">Mistake Review</span>
            </div>
            <div class="space-y-2 text-xs">
              <div class="flex items-center gap-2">
                <span class="w-16 font-bold text-slate-700">오답 1:</span>
                <span class="flex-1 border-b border-slate-300 h-5"></span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-16 font-bold text-slate-700">오답 2:</span>
                <span class="flex-1 border-b border-slate-300 h-5"></span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-16 font-bold text-slate-700">오답 3:</span>
                <span class="flex-1 border-b border-slate-300 h-5"></span>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH SUPPLEMENTARY SERIES • WORKBOOK</span>
            <span>${dayKey} • PAGE 2 OF 2</span>
          </div>
        </div>
      `;
    }

    renderWorkbookSection1(wb) {
      if (!wb.section1.length) return '';
      return `
        <div class="studio-wb-section-title">
          <span>Section 1. 우리말 뜻을 보고 알맞은 영단어를 철자로 완성하시오. (${this.rangeLabel(wb.section1)})</span>
          <span class="text-[10px] font-normal text-slate-500">Spelling &amp; Recall</span>
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
      `;
    }

    renderWorkbookSection2(wb) {
      if (!wb.section2.length) return '';
      return `
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
      `;
    }

    renderWorkbookSection3(wb) {
      if (!wb.section3.length) return '';
      return `
        <div class="studio-wb-section-title mt-2">
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
      `;
    }

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
      const isIdiomSeries = seriesKey === 'idioms';
      const isLongExpr = (w) => String(w.word || '').trim().split(/\s+/).length >= 3;

      // Section 1: 영작 문항 (예문 + 해석이 있는 단어 우선, 최대 6개)
      const targetWords = words.filter(w => w.example && w.translation).slice(0, 6);
      const section1Words = targetWords.length >= 4 ? targetWords : words.slice(0, 6);
      const usedIds = new Set(section1Words.map(w => w.word));

      // Section 2: Section 1과 "다른 문장"만 사용 (같은 예문이 반복되어 영작 정답이 노출되는 문제 방지)
      // + 예문 속 표제어가 실제로 빈칸 처리되는 문항만 출제 (정답 노출 방지)
      const gapHtml = '<span class="studio-cloze-gap font-mono text-slate-700 font-bold border-b border-slate-400 px-3 py-0.5 inline-block min-w-[70px] text-center">[ &nbsp;&nbsp;&nbsp;&nbsp; ]</span>';
      const section2Items = [];
      words.filter(w => !usedIds.has(w.word)).forEach(w => {
        if (section2Items.length >= 4) return;
        const sInfo = (window.contextSentenceHelper && typeof window.contextSentenceHelper.getOrGenerateSentence === 'function')
          ? window.contextSentenceHelper.getOrGenerateSentence(w)
          : null;
        const candidates = [w.example, sInfo ? sInfo.sentence : ''].filter(Boolean);
        for (const s of candidates) {
          const m = this.findClozeMatch(s, w.word, gapHtml);
          if (m) { section2Items.push({ w, html: m.html }); break; }
        }
      });

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-slate-900">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-blue-900">${dayKey} 서술형 영작 노트</span>
                <span class="text-xs font-bold text-slate-700">${seriesInfo.name}</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                학교 시험 서술형 만점 대비 • 조건부 문장 완성 &amp; 어형 변화 집중 클리닉
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
            ${section1Words.map((w, idx) => {
              const trans = w.translation || `그들은 ${w.meaning}에 대해 이야기하고 있었다.`;
              const long = isLongExpr(w);
              return `
                <div class="studio-writing-item">
                  <div class="studio-writing-head ${long ? 'is-stacked' : ''}">
                    <div class="studio-writing-prompt text-xs font-bold text-slate-900 leading-snug">
                      <span class="text-blue-900 font-black mr-1">[${idx + 1}번]</span>
                      <span>${trans}</span>
                    </div>
                    <div class="studio-writing-conds">
                      <span class="studio-writing-condition">제시어: <strong>${w.word}</strong></span>
                      <span class="studio-writing-condition">${isIdiomSeries ? '필요시 동사 시제 변형' : '어형 변형 가능'}</span>
                    </div>
                  </div>
                  <div class="text-[11px] text-slate-500 mb-1 studio-wrap-text">
                    [조건] ① 제시어를 반드시 활용할 것 &nbsp; ② 시제와 수일치에 주의하여 완전한 문장으로 쓸 것
                  </div>
                  <div class="pt-2">
                    <span class="text-xs font-bold text-slate-700">답안 작성:</span>
                    <span class="studio-writing-line"></span>
                    ${long ? '<span class="studio-writing-line"></span>' : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          ${section2Items.length ? `
          <!-- Section 2. 문맥 빈칸 완성 드릴 (Section 1과 다른 문장) -->
          <div class="studio-wb-section-title mt-4">
            <span>Section 2. ${isIdiomSeries ? '문맥을 읽고 빈칸에 들어갈 알맞은 표현을 우리말 뜻을 참고하여 쓰시오.' : '문맥을 읽고 괄호 안의 단어를 문법과 의미에 맞게 알맞은 형태로 고쳐 쓰시오.'}</span>
            <span class="text-[10px] font-normal text-slate-500">${isIdiomSeries ? 'Expression Cloze' : 'Form Transformation'}</span>
          </div>

          <div class="space-y-2">
            ${section2Items.map(({ w, html }, idx) => `
                <div class="studio-wb-qitem p-2.5 border border-slate-200">
                  <div class="text-xs text-slate-900 font-serif leading-relaxed studio-wrap-text">
                    <span class="studio-wb-qnum font-sans font-bold">${idx + 1}.</span>
                    <span>${html}</span>
                  </div>
                  <div class="mt-1 text-[11px] text-blue-900 font-bold studio-wrap-text">
                    ${isIdiomSeries ? `[ 뜻: ${w.meaning} ]` : `[ 제시어: ${w.word} ]`}
                  </div>
                  <div class="mt-2 text-[11px] font-bold text-slate-700">
                    정답: <span class="studio-writing-line inline-answer"></span>
                  </div>
                </div>
              `).join('')}
          </div>
          ` : ''}

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
      const scenes = words.slice(0, 6); // 6개 고품질 씬이 A4 1장에 완벽 피트

      return `
        <div class="studio-a4-sheet">
          <div class="studio-day-header border-b-2 border-teal-800">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="studio-day-tag bg-teal-800">${dayKey} 섀도잉 대본집</span>
                <span class="text-xs font-bold text-teal-950">미드·원어민 리얼 씬 스크립트</span>
              </div>
              <div class="text-xs text-slate-500 font-medium">
                질문과 답변이 100% 상호 호응하는 자연스러운 원어민 억양 및 감정 발화 트레이닝
              </div>
            </div>
            <div class="text-right text-[11px] text-teal-800 font-bold">
              SHADOWING SCRIPT
            </div>
          </div>

          <div class="space-y-3 mt-3">
            ${scenes.map((w, idx) => {
              const diag = this.buildContextualDialogue(w);
              return `
                <div class="studio-script-dialogue p-2.5 rounded-lg border border-teal-200 bg-white">
                  <div class="flex items-center justify-between border-b border-slate-200 pb-1 mb-2">
                    <div class="flex items-center gap-2 min-w-0">
                      <span class="text-xs font-black text-teal-900 shrink-0">Scene #${idx + 1}</span>
                      <span class="text-[11px] font-bold text-teal-950 bg-teal-100 px-2 py-0.5 rounded truncate">${w.word}</span>
                      <span class="text-[11px] text-slate-500 truncate">(${w.meaning})</span>
                    </div>
                    <div class="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 shrink-0">
                      <span>섀도잉:</span>
                      <span>1<span class="studio-check-box ml-0.5"></span></span>
                      <span>2<span class="studio-check-box ml-0.5"></span></span>
                      <span>3<span class="studio-check-box ml-0.5"></span></span>
                    </div>
                  </div>

                  <div class="space-y-1.5 text-xs text-slate-800 font-sans">
                    <div class="flex items-start gap-1.5">
                      <span class="studio-script-speaker text-slate-600 font-bold shrink-0">Speaker A:</span>
                      <span class="italic text-slate-700 font-medium leading-snug">"${diag.speakerA}"</span>
                    </div>
                    <div class="bg-teal-50/60 p-2 rounded border border-teal-100 mt-1">
                      <div class="flex items-start gap-1.5">
                        <span class="studio-script-speaker text-teal-900 font-black shrink-0">Speaker B:</span>
                        <span class="font-bold text-slate-950 leading-snug">"${this.highlightWord(diag.speakerB, w.word)}"</span>
                      </div>
                      <div class="text-[10.5px] text-slate-600 mt-1 pl-4 border-t border-teal-100 pt-1">
                        📌 <strong>해석:</strong> ${w.translation || w.meaning}
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-400">
            <span>VERITAS ENGLISH REAL DIALOGUE SERIES • SHADOWING PLAYBOOK</span>
            <span>${dayKey} • NATURAL CONTEXTUAL Q&amp;A</span>
          </div>
        </div>
      `;
    }

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

      // 숙어/구동사/속담: 고정 어구만 빈칸 처리하고, 목적어 자리(A, B, someone 등)와
      // 분리형 구동사 사이 삽입어(take [clean water] for granted)는 그대로 노출
      return this.findIdiomClozeMatch(sentence, w, blank);
    }

    findIdiomClozeMatch(sentence, phrase, blank) {
      const IRREGULAR = {
        be: ['be', 'is', 'are', 'was', 'were', 'been', 'being', 'am'],
        bite: ['bit', 'bitten'], give: ['gave', 'given'], bring: ['brought'], come: ['came'],
        take: ['took', 'taken'], make: ['made'], hold: ['held'], burn: ['burnt'], leave: ['left'],
        go: ['went', 'gone'], fall: ['fell', 'fallen'], see: ['saw', 'seen'], throw: ['threw', 'thrown'],
        steal: ['stole', 'stolen'], sit: ['sat'], sleep: ['slept'], speak: ['spoke', 'spoken'],
        lose: ['lost'], stand: ['stood'], bear: ['bore', 'borne'], pay: ['paid'], run: ['ran'],
        get: ['got', 'gotten'], catch: ['caught'], keep: ['kept'], find: ['found'], shed: ['shed'],
        wreak: ['wrought'], blow: ['blew', 'blown'], feel: ['felt'], break: ['broke', 'broken'],
        do: ['did', 'done', 'does'], have: ['has', 'had'], strike: ['struck']
      };
      const MULTI_WILD = /^(A|B|one|oneself|someone|somebody|something|sb|sth|it|~)$/;
      const SINGLE_WILD = /^(one's|someone's|your|my|his|her|their|our)$/i;
      const WILD_MULTI_RE = "([A-Za-z'\\-]+(?:\\s+[A-Za-z'\\-]+){0,3}?)";
      const WILD_SINGLE_RE = "([A-Za-z'\\-]+)";

      const clean = String(phrase).replace(/[.!?]+$/, '').trim();
      const tokens = clean.split(/\s+/);
      const kinds = tokens.map(t => (MULTI_WILD.test(t) ? 'wild' : SINGLE_WILD.test(t) ? 'wild1' : 'lit'));
      if (!kinds.includes('lit')) return null;

      let src = '';
      const groupKinds = []; // 'lit' = 빈칸 처리, 'keep' = 문장에 그대로 노출
      tokens.forEach((t, i) => {
        if (i > 0) {
          src += '\\s+';
          // 분리형 구동사: 첫 단어 뒤에 최대 4단어 삽입 허용 (take [clean water] for granted)
          if (i === 1 && kinds[0] === 'lit' && kinds[1] === 'lit') {
            src += "((?:[A-Za-z'\\-]+,?\\s+){0,4}?)";
            groupKinds.push('keep');
          }
        }
        if (kinds[i] === 'wild') { src += WILD_MULTI_RE; groupKinds.push('keep'); return; }
        if (kinds[i] === 'wild1') { src += WILD_SINGLE_RE; groupKinds.push('keep'); return; }

        const base = t.replace(/,$/, '');
        const lower = base.toLowerCase();
        let p = this.escapeRegex(base) + (t.endsWith(',') ? ',?' : '');
        if (i === 0) {
          if (lower === "don't") {
            p = "(?:don't|do\\s+not|never)";
          } else {
            const alts = (IRREGULAR[lower] || []).map(x => this.escapeRegex(x));
            const stem = (/e$/.test(lower) && lower.length >= 4) ? this.escapeRegex(base.slice(0, -1)) + '[a-z]{0,4}' : '';
            p = `(?:${[this.escapeRegex(base) + '[a-z]{0,4}', stem, ...alts].filter(Boolean).join('|')})`;
          }
        }
        src += `(${p})`;
        groupKinds.push('lit');
      });

      const re = new RegExp(`\\b${src}(?![A-Za-z])`, 'i');
      const m = sentence.match(re);
      if (!m) return null;

      // 결과 조립: 연속된 고정 어구는 하나의 빈칸으로 병합
      const pieces = [];
      let litBuf = [];
      const flush = () => {
        if (litBuf.length) {
          const litText = litBuf.join(' ');
          pieces.push(blank.replace(/\$&/g, litText));
          litBuf = [];
        }
      };
      groupKinds.forEach((k, gi) => {
        const val = (m[gi + 1] || '').trim();
        if (k === 'lit') { litBuf.push(val); return; }
        if (!val) return;
        flush();
        pieces.push(val);
      });
      flush();

      const html = sentence.slice(0, m.index) + pieces.join(' ') + sentence.slice(m.index + m[0].length);
      return { matched: m[0], html };
    }
    /**
     * 부교재 1: 핵심 콜로케이션 & 전치사 결합집 (A4 시트)
     */
    renderOriginalCollocationSheet(dayKey, words) {
      const meta = this.currentBookMeta;
      const seriesInfo = SERIES_INFO.original;
      let html = `
        <div class="studio-a4-sheet">
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
        <div class="studio-a4-sheet">
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
        <div class="studio-a4-sheet">
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


    /**
     * 신규 특화 부교재 1: 💬 Z세대 메신저(DM) & SNS 실전 대화 워크북 (넷플릭스·슬랭)
     */
    renderSlangChatSheet(dayKey, words) {
      const meta = this.currentBookMeta;
      const targetWords = words.slice(0, 8); // 8개 실전 대화 씬

      let html = `
        <div class="studio-a4-sheet">
          <div class="sheet-header border-b-2 border-rose-900 pb-3 mb-4 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-600 text-white">부교재 2</span>
                <span class="text-xs font-bold text-slate-500">${meta.title}</span>
              </div>
              <h2 class="text-xl font-black text-slate-900 mt-1">💬 ${dayKey} Z세대 메신저(DM) &amp; SNS 실전 대화 워크북</h2>
            </div>
            <div class="text-right text-xs text-slate-500">
              <div>학습일: _____년 ___월 ___일</div>
              <div class="font-bold text-rose-900 mt-1">진단: [ &nbsp; / 8 대화 완성 ]</div>
            </div>
          </div>

          <div class="sheet-body flex-1 space-y-3 text-xs">
      `;

      targetWords.forEach((w, idx) => {
        const gap = `<span class="border-b-2 border-rose-500 font-mono font-bold text-rose-900 px-3 py-0.5 inline-block min-w-[90px] text-center bg-rose-50/50">[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</span>`;
        let replacedEx = w.example;
        const m = this.findClozeMatch(w.example, w.word, gap);
        if (m) replacedEx = m.html;

        html += `
          <div class="p-3 rounded-xl border border-slate-200 bg-slate-50/60">
            <div class="flex items-center justify-between pb-1 mb-2 border-b border-slate-200/80">
              <span class="font-black text-rose-900">Chat #${idx + 1} • <strong class="text-slate-800">${w.word}</strong> <span class="font-normal text-slate-500">(${w.meaning})</span></span>
              <span class="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">힌트: ${w.clozeHint || w.word[0] + '___'}</span>
            </div>
            <div class="space-y-1.5">
              <div class="flex items-start gap-2">
                <span class="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-bold text-[10px] shrink-0 mt-0.5">Alex</span>
                <div class="bg-white p-2 rounded-lg border border-slate-200 text-slate-700 text-[11px] flex-1">
                  "${this.buildContextualDialogue(w).speakerA}"
                </div>
              </div>
              <div class="flex items-start gap-2">
                <span class="px-1.5 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] shrink-0 mt-0.5">You</span>
                <div class="bg-rose-50/80 p-2 rounded-lg border border-rose-200 text-slate-900 text-[11px] font-medium flex-1">
                  "${replacedEx}"
                  <div class="text-[10px] text-slate-500 mt-1">해석: ${w.translation}</div>
                </div>
              </div>
            </div>
            <div class="mt-2 pt-1.5 border-t border-dashed border-slate-200 flex items-center justify-between text-[11px]">
              <span class="text-slate-600 font-bold">✍️ 슬랭 답안:</span>
              <span class="border-b border-slate-400 w-3/4 h-5"></span>
            </div>
          </div>
        `;
      });

      html += `
          </div>
          <div class="sheet-footer pt-3 mt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
            <span>Veritas Netflix &amp; Native Slang Companion Series</span>
            <span>${dayKey} Real Messenger &amp; DM Workbook</span>
          </div>
        </div>
      `;
      return html;
    }

    /**
     * 신규 특화 부교재 2: 🎙️ TED 1분 시사 브리핑 & 섀도잉 스피치 노트 (TED & 뉴스)
     */
    renderTedBriefSheet(dayKey, words) {
      const meta = this.currentBookMeta;
      const targetWords = words.slice(0, 5); // 5개 심층 브리핑

      let html = `
        <div class="studio-a4-sheet">
          <div class="sheet-header border-b-2 border-teal-900 pb-3 mb-4 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-800 text-white">부교재 1</span>
                <span class="text-xs font-bold text-slate-500">${meta.title}</span>
              </div>
              <h2 class="text-xl font-black text-slate-900 mt-1">🎙️ ${dayKey} TED 1분 시사 브리핑 &amp; 섀도잉 스피치 노트</h2>
            </div>
            <div class="text-right text-xs text-slate-500">
              <div>목표: 1분 연속 스피치 낭독</div>
              <div class="font-bold text-teal-900 mt-1">학습일: _____년 ___월 ___일</div>
            </div>
          </div>

          <div class="sheet-body flex-1 space-y-3.5 text-xs">
      `;

      targetWords.forEach((w, idx) => {
        html += `
          <div class="p-3.5 rounded-xl border border-teal-200 bg-teal-50/20">
            <div class="flex items-center justify-between border-b border-teal-200/80 pb-1.5 mb-2">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded bg-teal-900 text-white font-mono font-bold text-[10.5px]">Brief #${idx + 1}</span>
                <span class="font-serif font-black text-sm text-teal-950">${w.word}</span>
                <span class="text-[11px] font-bold text-teal-800">(${w.pos} ${w.meaning})</span>
              </div>
              <div class="flex items-center gap-2 text-[10px] text-slate-500">
                <span>⏱️ 스피치: [ &nbsp;&nbsp;&nbsp;&nbsp;초 / 60초 ]</span>
                <span>체크: [ ] 1회 [ ] 2회 [ ] 3회</span>
              </div>
            </div>

            <div class="space-y-1.5">
              <div class="text-xs font-serif leading-relaxed text-slate-900 bg-white p-2.5 rounded-lg border border-teal-100">
                "Ladies and gentlemen, looking at the recent global developments, ${this.highlightWord(w.example, w.word)}"
              </div>
              <div class="text-[11px] text-slate-600 pl-1">
                📌 <strong>한국어 해석:</strong> "${w.translation}"
              </div>
              <div class="flex flex-wrap items-center gap-3 pt-1 text-[10.5px] text-slate-600">
                <span class="bg-teal-100 text-teal-950 px-2 py-0.5 rounded font-bold">🌐 핵심 연어: ${w.collocation || w.word}</span>
                <span class="text-slate-500">💡 <strong>시사 포인트:</strong> ${w.nuanceTip || '전문 보도 및 강연 빈출 담화 표현'}</span>
              </div>
            </div>
          </div>
        `;
      });

      html += `
          </div>
          <div class="sheet-footer pt-3 mt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
            <span>Veritas TED &amp; Global News Briefing Companion Series</span>
            <span>${dayKey} 1-Minute Speech &amp; Shadowing Playbook</span>
          </div>
        </div>
      `;
      return html;
    }

    /**
     * 신규 특화 부교재 3: ⚡ 불규칙 동사 100선 & 기초 어휘 3단 변화 마스터 시트 (중학 기초 1,000)
     */
    renderIrregularVerbsSheet(dayKey, words) {
      const meta = this.currentBookMeta;

      let html = `
        <div class="studio-a4-sheet">
          <div class="sheet-header border-b-2 border-emerald-900 pb-3 mb-4 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-700 text-white">부교재 1</span>
                <span class="text-xs font-bold text-slate-500">${meta.title}</span>
              </div>
              <h2 class="text-xl font-black text-slate-900 mt-1">⚡ ${dayKey} 중학 필수 불규칙 동사 &amp; 기초 어휘 3단 변화 마스터</h2>
            </div>
            <div class="text-right text-xs text-slate-500">
              <div>중학 내신 1등급 필수 기초</div>
              <div class="font-bold text-emerald-900 mt-1">점수: _____ / 100</div>
            </div>
          </div>

          <!-- Section 1. 3단 변화 & 의미 표 -->
          <div class="sheet-body flex-1 space-y-4 text-xs">
            <div class="studio-wb-section-title">
              <span>Section 1. 다음 표의 빈칸에 알맞은 과거형과 과거분사형(P.P.) 또는 우리말 뜻을 쓰시오.</span>
              <span class="text-[10px] font-normal text-slate-500">Base - Past - Past Participle</span>
            </div>

            <div class="overflow-hidden border border-slate-300 rounded-lg">
              <table class="w-full text-left text-xs border-collapse">
                <thead>
                  <tr class="bg-emerald-900 text-white font-bold text-[11px]">
                    <th class="p-2 border-r border-emerald-800 w-10 text-center">No.</th>
                    <th class="p-2 border-r border-emerald-800 w-28">원형 (Base Form)</th>
                    <th class="p-2 border-r border-emerald-800 w-28">과거형 (Past)</th>
                    <th class="p-2 border-r border-emerald-800 w-28">과거분사 (P.P.)</th>
                    <th class="p-2">대표 한국어 뜻</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200">
      `;

      words.slice(0, 15).forEach((w, idx) => {
        const isOdd = idx % 2 === 1;
        html += `
          <tr class="${isOdd ? 'bg-slate-50/60' : 'bg-white'}">
            <td class="p-1.5 border-r border-slate-200 text-center font-bold text-slate-500">${idx + 1}</td>
            <td class="p-1.5 border-r border-slate-200 font-bold text-emerald-950">${w.word}</td>
            <td class="p-1.5 border-r border-slate-200 font-mono text-slate-400">[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</td>
            <td class="p-1.5 border-r border-slate-200 font-mono text-slate-400">[ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ]</td>
            <td class="p-1.5 text-slate-700 font-medium">${w.meaning}</td>
          </tr>
        `;
      });

      html += `
                </tbody>
              </table>
            </div>

            <!-- Section 2. 기본 문장 완성 영작 -->
            <div class="studio-wb-section-title mt-4">
              <span>Section 2. 주어진 단어를 문맥의 알맞은 시제(현재/과거/완료)로 바꾸어 빈칸을 완성하시오.</span>
              <span class="text-[10px] font-normal text-slate-500">Sentence Completion</span>
            </div>

            <div class="grid grid-cols-2 gap-2.5">
              ${words.slice(0, 4).map((w, idx) => `
                <div class="p-2 rounded border border-slate-200 bg-white">
                  <div class="text-[11px] font-serif text-slate-900 leading-snug">
                    <span class="font-bold text-emerald-800">${idx + 1}.</span> ${this.highlightWord(w.example, w.word)}
                  </div>
                  <div class="mt-1 text-[10px] text-slate-500 flex justify-between">
                    <span>제시어: [ <strong>${w.word}</strong> ]</span>
                    <span>뜻: ${w.meaning}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="sheet-footer pt-3 mt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
            <span>Veritas Middle School Starter 1,000 Companion Series</span>
            <span>${dayKey} Irregular Verbs &amp; Basic Lexicon Matrix</span>
          </div>
        </div>
      `;
      return html;
    }

    /**
     * 신규 특화 부교재 4: ⏱️ 3초 컷 빈출 연어(Collocation) 클리닉 (토익 RC 1,500)
     */
    renderToeicCollocationSheet(dayKey, words) {
      const meta = this.currentBookMeta;

      let html = `
        <div class="studio-a4-sheet">
          <div class="sheet-header border-b-2 border-blue-900 pb-3 mb-4 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-800 text-white">부교재 1</span>
                <span class="text-xs font-bold text-slate-500">${meta.title}</span>
              </div>
              <h2 class="text-xl font-black text-slate-900 mt-1">⏱️ ${dayKey} 토익 RC Part 5 3초 컷 빈출 연어(Collocation) 클리닉</h2>
            </div>
            <div class="text-right text-xs text-slate-500">
              <div>정기토익 Part 5 만점 대비</div>
              <div class="font-bold text-blue-900 mt-1">학습일: _____년 ___월 ___일</div>
            </div>
          </div>

          <div class="sheet-body flex-1 grid grid-cols-2 gap-3 text-xs">
      `;

      words.slice(0, 16).forEach((w, idx) => {
        html += `
          <div class="p-2.5 rounded-lg border border-blue-200 bg-blue-50/20 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between border-b border-blue-200/70 pb-1 mb-1.5">
                <span class="font-bold text-blue-950">[${idx + 1}] ${w.word}</span>
                <span class="text-[10px] font-bold text-blue-700 bg-white px-1.5 py-0.5 rounded border border-blue-200">${w.pos} ${w.meaning}</span>
              </div>
              <div class="bg-white border border-blue-200 rounded p-1.5 mb-1.5">
                <div class="text-[10.5px] font-black text-blue-900 flex items-center gap-1">
                  <span>⏱️ 3초 컷 짝단어:</span>
                  <span class="font-mono text-slate-900">${w.collocation || w.word}</span>
                </div>
              </div>
              <div class="text-[11px] text-slate-800 font-sans leading-snug">
                "${this.highlightWord(w.example, w.word)}"
              </div>
              <div class="text-[10px] text-slate-500 mt-0.5">${w.translation}</div>
            </div>
            ${w.nuanceTip ? `
              <div class="mt-1 pt-1 border-t border-dashed border-blue-200 text-[10px] text-blue-800">
                🎯 <strong>출제 족보:</strong> ${w.nuanceTip}
              </div>
            ` : ''}
          </div>
        `;
      });

      html += `
          </div>
          <div class="sheet-footer pt-3 mt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
            <span>Veritas TOEIC RC 1,500 Companion Series</span>
            <span>${dayKey} Part 5 3-Second Speed Collocation Clinic</span>
          </div>
        </div>
      `;
      return html;
    }

    /**
     * 신규 특화 부교재 5: 🎯 파트 5 실전 4지선다 모의 워크북 (토익 RC 1,500)
     */
    renderToeicPart5Sheet(dayKey, words) {
      const meta = this.currentBookMeta;
      const targetQuestions = words.slice(0, 10); // 10문항 정통 토익 Part 5

      let html = `
        <div class="studio-a4-sheet">
          <div class="sheet-header border-b-2 border-slate-900 pb-3 mb-4 flex items-center justify-between">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-slate-950">부교재 2</span>
                <span class="text-xs font-bold text-slate-500">${meta.title}</span>
              </div>
              <h2 class="text-xl font-black text-slate-900 mt-1">🎯 ${dayKey} 토익 RC Part 5 실전 4지선다 모의 워크북</h2>
            </div>
            <div class="text-right text-xs text-slate-500">
              <div>제한 시간: 7분 (문항당 40초)</div>
              <div class="font-bold text-slate-900 mt-1">점수: _____ / 10</div>
            </div>
          </div>

          <div class="sheet-body flex-1 space-y-3.5 text-xs">
            <div class="text-[11px] text-slate-600 bg-slate-100 p-2 rounded font-sans">
              <strong>Directions:</strong> Select the best answer from choices (A), (B), (C), and (D) to complete each sentence.
            </div>
      `;

      targetQuestions.forEach((w, idx) => {
        // Create 4 choices using other words from words array
        const otherWords = words.filter(ow => ow.word !== w.word);
        const distractors = otherWords.slice(idx * 3, idx * 3 + 3).map(ow => ow.word);
        while (distractors.length < 3) distractors.push('require', 'provide', 'submit');

        const choices = [w.word, ...distractors.slice(0, 3)].sort();
        const letters = ['(A)', '(B)', '(C)', '(D)'];
        const blankSentence = w.example.replace(new RegExp(`\\b${w.word}\\b`, 'gi'), '____________');

        html += `
          <div class="p-2.5 rounded border border-slate-200 bg-white">
            <div class="font-serif text-slate-900 text-xs leading-relaxed mb-2">
              <span class="font-sans font-bold text-blue-900 mr-1.5">${101 + idx}.</span>
              <span>${blankSentence}</span>
            </div>
            <div class="grid grid-cols-4 gap-2 text-xs font-sans pl-5 text-slate-800">
              ${choices.map((c, cIdx) => `
                <div class="flex items-center gap-1">
                  <span class="font-bold text-slate-500">${letters[cIdx]}</span>
                  <span class="font-medium">${c}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      });

      html += `
          </div>
          <div class="sheet-footer pt-3 mt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
            <span>Veritas TOEIC RC 1,500 Companion Series</span>
            <span>${dayKey} Part 5 Mock Test Sheet</span>
          </div>
        </div>
      `;
      return html;
    }
  }

  // 글로벌 싱글톤 인스턴스 등록
  window.bookStudioEngine = new BookStudioEngine();

})(window);
