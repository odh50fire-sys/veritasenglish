/**
 * Veritas Non-Fiction e-Library Engine (베리타스 비문학 원서 e-Book 도서관 엔진)
 * 12대 시리즈 서재 탐색, 양면/단면 실감형 e-Book 리더기, 3대 테마,
 * 삽화 렌더러, 6단계 원서 학습 파이프라인(배경-어휘-독해-구조맵-퀴즈-명문장/출처)
 */

class EBookEngine {
    constructor() {
        this.books = [];
        this.seriesList = [];
        this.currentCategoryFilter = 'all'; // 'all', 'history', 'society', 'science'
        this.currentSeriesFilter = 'all';
        this.currentLevelFilter = 'all';
        this.searchQuery = '';

        this.currentBook = null;
        this.currentStep = 3; // 1: 배경, 2: 어휘, 3: e-Book독해, 4: 요약맵, 5: 퀴즈, 6: 명문장&출처
        this.readerTheme = 'sepia'; // 'paper', 'sepia', 'dark'
        this.readerSpreadMode = 'spread'; // 'spread' (양면 펼침) | 'single' (단면 스크롤)
        this.fontSize = 17; // px
        this.showSlash = true;
        this.showKorean = true;

        this.isPlayingAudio = false;
        this.currentAudioParagraphIndex = 0;
        this.userQuizAnswers = {};
        this.userScrambleAnswers = {};

        this.readingProgress = {}; // bookId -> { completed: boolean, lastStep: number, completedAt: number }
    }

    init() {
        this.seriesList = window.EBOOK_SERIES_DATA || [];
        this.books = window.EBOOK_LIBRARY_DATA || [];
        this.loadProgress();
        this.renderLibrary();
        console.log('📖 EBookEngine initialized with', this.books.length, 'books across', this.seriesList.length, 'series.');
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('veritas_ebook_progress');
            if (saved) {
                this.readingProgress = JSON.parse(saved);
            }
        } catch (e) {
            this.readingProgress = {};
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('veritas_ebook_progress', JSON.stringify(this.readingProgress));
        } catch (e) {
            console.error('Failed to save ebook progress:', e);
        }
    }

    // ------------------------------------------------------------------------
    // 서재 (Library Shelf) 렌더링
    // ------------------------------------------------------------------------
    renderLibrary() {
        const container = document.getElementById('ebook-library-shelf-container');
        if (!container) return;

        // 필터링 적용
        let filtered = this.books.filter(book => {
            const series = this.seriesList.find(s => s.id === book.seriesId);
            if (this.currentCategoryFilter !== 'all') {
                if (!series || series.category !== this.currentCategoryFilter) return false;
            }
            if (this.currentSeriesFilter !== 'all' && book.seriesId !== this.currentSeriesFilter) {
                return false;
            }
            if (this.currentLevelFilter !== 'all' && book.level !== parseInt(this.currentLevelFilter)) {
                return false;
            }
            if (this.searchQuery) {
                const q = this.searchQuery.toLowerCase();
                const titleMatch = book.title.toLowerCase().includes(q);
                const subtitleMatch = book.subtitle.toLowerCase().includes(q);
                const seriesMatch = series && series.name.toLowerCase().includes(q);
                if (!titleMatch && !subtitleMatch && !seriesMatch) return false;
            }
            return true;
        });

        // 통계 계산
        const completedCount = Object.values(this.readingProgress).filter(p => p.completed).length;

        // 통계 헤더 업데이트
        const statsEl = document.getElementById('ebook-shelf-stats');
        if (statsEl) {
            statsEl.innerHTML = `
                <div class="flex items-center gap-2 flex-wrap">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold font-mono">
                        <i data-lucide="book-marked" class="w-3.5 h-3.5 text-blue-700"></i>
                        <span>보유 장서: 총 ${this.books.length}권 (12대 시리즈)</span>
                    </span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold font-mono">
                        <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-700"></i>
                        <span>완독 도서: ${completedCount}권</span>
                    </span>
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-900 border border-purple-200 text-xs font-bold font-mono">
                        <i data-lucide="sparkles" class="w-3.5 h-3.5 text-purple-700"></i>
                        <span>필터 검색 결과: ${filtered.length}권</span>
                    </span>
                </div>
            `;
        }

        // 시리즈 셀렉트 드롭다운 동기화
        const seriesSelect = document.getElementById('ebook-filter-series-select');
        if (seriesSelect && seriesSelect.options.length <= 1) {
            seriesSelect.innerHTML = `<option value="all">전체 시리즈 (12대 시리즈)</option>` +
                this.seriesList.map(s => `<option value="${s.id}">[${s.shortName}] ${s.name}</option>`).join('');
        }

        // 도서 카드 그리드 렌더링
        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="col-span-full py-16 text-center space-y-3 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <div class="w-12 h-12 rounded-full bg-slate-200 text-slate-500 mx-auto flex items-center justify-center">
                        <i data-lucide="search-x" class="w-6 h-6"></i>
                    </div>
                    <p class="text-sm font-bold text-slate-700">선택한 조건에 일치하는 도서가 없습니다.</p>
                    <p class="text-xs text-slate-500">필터 조건을 재설정하거나 검색어를 변경해 보세요.</p>
                    <button type="button" onclick="window.ebookEngine.resetFilters()" class="px-3.5 py-1.5 rounded-lg bg-blue-900 text-white text-xs font-bold hover:bg-blue-800 transition-colors cursor-pointer">
                        필터 초기화
                    </button>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        container.innerHTML = filtered.map(book => {
            const series = this.seriesList.find(s => s.id === book.seriesId) || { name: '비문학 시리즈', badgeColor: 'blue', shortName: '시리즈' };
            const isCompleted = this.readingProgress[book.id]?.completed;
            const levelBadgeColor = book.level === 1 ? 'bg-emerald-100 text-emerald-900 border-emerald-300' :
                                    book.level === 2 ? 'bg-blue-100 text-blue-900 border-blue-300' :
                                    book.level === 3 ? 'bg-purple-100 text-purple-900 border-purple-300' :
                                    'bg-amber-100 text-amber-900 border-amber-300';

            return `
                <div class="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
                    <!-- 상단 책 커버 미리보기 -->
                    <div class="relative h-44 overflow-hidden bg-slate-900">
                        <img src="${book.coverImage}" alt="${book.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
                        
                        <!-- 좌측 상단 시리즈 & 레벨 배지 -->
                        <div class="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold font-mono tracking-tight bg-slate-900/80 backdrop-blur-xs text-white border border-white/20">
                                ${series.shortName}
                            </span>
                            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold font-mono border ${levelBadgeColor}">
                                ${book.levelName.split(' ')[0]}
                            </span>
                        </div>

                        <!-- 완독 배지 -->
                        ${isCompleted ? `
                            <div class="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center gap-1 shadow-sm">
                                <i data-lucide="check-circle" class="w-3 h-3"></i>
                                <span>완독 완료</span>
                            </div>
                        ` : ''}

                        <!-- 커버 하단 제목 오버레이 -->
                        <div class="absolute bottom-3 left-3 right-3 text-white space-y-1">
                            <h4 class="font-serif font-black text-base leading-tight drop-shadow-sm line-clamp-2">
                                ${book.title}
                            </h4>
                        </div>
                    </div>

                    <!-- 도서 본문 설명 및 메타 정보 -->
                    <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                        <p class="text-xs text-slate-600 line-clamp-2 font-medium leading-relaxed">
                            ${book.subtitle}
                        </p>

                        <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                            <span class="flex items-center gap-1 font-mono">
                                <i data-lucide="file-text" class="w-3.5 h-3.5 text-slate-400"></i>
                                <span>${book.wordCount} words</span>
                            </span>
                            <span class="flex items-center gap-1 font-mono">
                                <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
                                <span>약 ${book.estimatedMinutes}분 소요</span>
                            </span>
                        </div>

                        <!-- 액션 버튼 -->
                        <div class="pt-1">
                            <button type="button" onclick="window.ebookEngine.openReader('${book.id}')" class="w-full py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 active:scale-98 text-white font-serif font-bold text-xs shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                                <i data-lucide="book-open" class="w-4 h-4 text-blue-200"></i>
                                <span>${isCompleted ? '다시 읽기 (e-Book 열기)' : 'e-Book 도서 열기'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        if (window.lucide) window.lucide.createIcons();
    }

    setCategoryFilter(category) {
        this.currentCategoryFilter = category;
        this.currentSeriesFilter = 'all';
        const select = document.getElementById('ebook-filter-series-select');
        if (select) select.value = 'all';

        // 탭 버튼 active 클래스 토글
        document.querySelectorAll('.ebook-cat-btn').forEach(btn => {
            const isMatch = btn.getAttribute('data-cat') === category;
            btn.classList.toggle('bg-blue-900', isMatch);
            btn.classList.toggle('text-white', isMatch);
            btn.classList.toggle('bg-slate-100', !isMatch);
            btn.classList.toggle('text-slate-700', !isMatch);
        });

        this.renderLibrary();
    }

    setSeriesFilter(seriesId) {
        this.currentSeriesFilter = seriesId;
        this.renderLibrary();
    }

    setLevelFilter(level) {
        this.currentLevelFilter = level;
        this.renderLibrary();
    }

    setSearchQuery(query) {
        this.searchQuery = query.trim();
        this.renderLibrary();
    }

    resetFilters() {
        this.currentCategoryFilter = 'all';
        this.currentSeriesFilter = 'all';
        this.currentLevelFilter = 'all';
        this.searchQuery = '';
        const searchInput = document.getElementById('ebook-shelf-search');
        if (searchInput) searchInput.value = '';
        const seriesSelect = document.getElementById('ebook-filter-series-select');
        if (seriesSelect) seriesSelect.value = 'all';
        const levelSelect = document.getElementById('ebook-filter-level-select');
        if (levelSelect) levelSelect.value = 'all';

        this.setCategoryFilter('all');
    }

    // ------------------------------------------------------------------------
    // 실감형 e-Book 리더기 모달 열기 & 닫기
    // ------------------------------------------------------------------------
    openReader(bookId) {
        const book = this.books.find(b => b.id === bookId);
        if (!book) return;

        this.currentBook = book;
        this.currentStep = 3; // 기본은 실감형 e-Book 본문 독해로 오픈
        this.currentAudioParagraphIndex = 0;
        this.isPlayingAudio = false;

        const modal = document.getElementById('modal-ebook-reader');
        if (!modal) return;

        // 리더기 테마 적용
        this.applyTheme(this.readerTheme);

        // 헤더 메타정보 주입
        const titleEl = document.getElementById('ebook-reader-title');
        const seriesBadgeEl = document.getElementById('ebook-reader-series-badge');
        const levelBadgeEl = document.getElementById('ebook-reader-level-badge');
        const series = this.seriesList.find(s => s.id === book.seriesId);

        if (titleEl) titleEl.textContent = book.title;
        if (seriesBadgeEl) {
            seriesBadgeEl.textContent = series ? series.name : '비문학 원서';
        }
        if (levelBadgeEl) {
            levelBadgeEl.textContent = book.levelName;
        }

        // 스텝 바 동기화 및 스텝 콘텐츠 렌더링
        this.goToStep(this.currentStep);

        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');

        if (window.lucide) window.lucide.createIcons();
    }

    closeReader() {
        this.stopAudio();
        const modal = document.getElementById('modal-ebook-reader');
        if (modal) modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    // ------------------------------------------------------------------------
    // 6단계 학습 플로우 네비게이션
    // ------------------------------------------------------------------------
    goToStep(stepNum) {
        this.currentStep = stepNum;
        this.stopAudio();

        // 상단 스텝퍼 버튼 액티브 상태 토글
        document.querySelectorAll('.ebook-step-btn').forEach(btn => {
            const step = parseInt(btn.getAttribute('data-step'));
            const isActive = (step === stepNum);
            btn.classList.toggle('bg-blue-900', isActive);
            btn.classList.toggle('text-white', isActive);
            btn.classList.toggle('border-blue-900', isActive);
            btn.classList.toggle('bg-white/80', !isActive);
            btn.classList.toggle('text-slate-600', !isActive);
            btn.classList.toggle('border-slate-200', !isActive);
        });

        // 각 스텝 뷰 컨테이너 토글
        for (let i = 1; i <= 6; i++) {
            const stepEl = document.getElementById(`ebook-step-view-${i}`);
            if (stepEl) {
                stepEl.classList.toggle('hidden', i !== stepNum);
            }
        }

        // 스텝별 콘텐츠 렌더링
        switch (stepNum) {
            case 1: this.renderStep1Primer(); break;
            case 2: this.renderStep2Vocabulary(); break;
            case 3: this.renderStep3Reading(); break;
            case 4: this.renderStep4ConceptMap(); break;
            case 5: this.renderStep5Quizzes(); break;
            case 6: this.renderStep6QuotesAndCredits(); break;
        }

        // 스크롤 상단으로
        const contentBox = document.getElementById('ebook-reader-content-scroll');
        if (contentBox) contentBox.scrollTop = 0;

        if (window.lucide) window.lucide.createIcons();
    }

    // ------------------------------------------------------------------------
    // STEP 1: 30초 배경지식 & 탐구 화두 (Primer)
    // ------------------------------------------------------------------------
    renderStep1Primer() {
        const container = document.getElementById('ebook-step-view-1');
        if (!container || !this.currentBook) return;
        const book = this.currentBook;
        const primer = book.primer || { keyConcept: '핵심 배경지식', context: '배경 설명', bigQuestion: '탐구 화두' };

        container.innerHTML = `
            <div class="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
                <!-- 상단 비주얼 히어로 카드 -->
                <div class="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <img src="${book.coverImage}" alt="${book.title}" class="w-full h-56 object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex flex-col justify-end p-6 text-white space-y-2">
                        <span class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/30 text-amber-300 border border-amber-400/40 w-fit">
                            STEP 1 • PRE-READING ACTIVATION
                        </span>
                        <h3 class="font-serif font-black text-2xl leading-tight">
                            ${book.title}
                        </h3>
                        <p class="text-xs text-slate-300">
                            ${book.subtitle}
                        </p>
                    </div>
                </div>

                <!-- 핵심 탐구 화두 (Big Question) -->
                <div class="p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 space-y-2">
                    <div class="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                        <i data-lucide="help-circle" class="w-4 h-4 text-amber-700"></i>
                        <span>오늘의 핵심 탐구 화두 (The Big Question)</span>
                    </div>
                    <p class="font-serif font-black text-base text-amber-950 leading-relaxed italic">
                        "${primer.bigQuestion}"
                    </p>
                </div>

                <!-- 시대적/학술적 맥락 3줄 브리핑 -->
                <div class="p-5 rounded-2xl bg-white/95 border border-slate-200 shadow-xs space-y-3">
                    <div class="flex items-center gap-2 text-blue-900 font-bold text-xs">
                        <i data-lucide="compass" class="w-4 h-4 text-blue-700"></i>
                        <span>배경지식 핵심 개념: ${primer.keyConcept}</span>
                    </div>
                    <p class="text-sm text-slate-700 leading-relaxed font-sans">
                        ${primer.context}
                    </p>
                </div>

                <!-- 다음 단계 유도 버튼 -->
                <div class="pt-2 flex justify-end">
                    <button type="button" onclick="window.ebookEngine.goToStep(2)" class="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer">
                        <span>2단계: 필수 원서 어휘 미리보기</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // ------------------------------------------------------------------------
    // STEP 2: 원서 필수 어휘 & 콜로케이션 (Vocabulary)
    // ------------------------------------------------------------------------
    renderStep2Vocabulary() {
        const container = document.getElementById('ebook-step-view-2');
        if (!container || !this.currentBook) return;
        const vocaList = this.currentBook.vocabulary || [];

        container.innerHTML = `
            <div class="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div>
                        <h3 class="font-serif font-black text-xl text-slate-900">
                            🔑 원서 필수 어휘 & 콜로케이션
                        </h3>
                        <p class="text-xs text-slate-500 mt-0.5">
                            본문에 등장할 핵심 학술·주제 어휘 ${vocaList.length}개를 먼저 익혀 원서 독해 속도를 2배 높입니다.
                        </p>
                    </div>
                    <span class="px-2.5 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-mono font-bold">
                        총 ${vocaList.length}개 어휘
                    </span>
                </div>

                <!-- 어휘 카드 그리드 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    ${vocaList.map(v => {
                        const safeWord = (v.word || '').replace(/'/g, "\\'");
                        return `
                            <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2 hover:border-blue-400 transition-all">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-1.5">
                                        <span class="font-serif font-black text-base text-slate-900">${v.word}</span>
                                        <span class="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-800 border border-blue-200 font-mono">${v.pos}</span>
                                    </div>
                                    <button type="button" onclick="if(window.tts) window.tts.speak('${safeWord}', 'en-US')" class="p-1 rounded-md text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer" title="발음 듣기">
                                        <i data-lucide="volume-2" class="w-4 h-4"></i>
                                    </button>
                                </div>
                                <p class="text-xs font-bold text-emerald-800">
                                    ${v.meaning}
                                </p>
                                <p class="text-[11px] font-serif italic text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100">
                                    "${v.contextSentence}"
                                </p>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- 다음 단계 유도 버튼 -->
                <div class="pt-2 flex items-center justify-between">
                    <button type="button" onclick="window.ebookEngine.goToStep(1)" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">
                        ← 이전: 배경지식
                    </button>
                    <button type="button" onclick="window.ebookEngine.goToStep(3)" class="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer">
                        <span>3단계: 실감형 e-Book 본문 읽기</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // ------------------------------------------------------------------------
    // STEP 3: 실감형 e-Book 본문 독해 (Reading with Photos & Audio)
    // ------------------------------------------------------------------------
    renderStep3Reading() {
        const container = document.getElementById('ebook-step-view-3');
        if (!container || !this.currentBook) return;
        const book = this.currentBook;
        const chapters = book.content?.chapters || [];

        // 뷰어 모드(양면 펼침 vs 단면)
        const layoutClass = this.readerSpreadMode === 'spread' ?
            'grid grid-cols-1 md:grid-cols-2 gap-8 md:divide-x md:divide-stone-300/60' :
            'max-w-2xl mx-auto space-y-6';

        // 챕터 내용 렌더링
        let chaptersHtml = '';
        chapters.forEach(chap => {
            let paragraphsHtml = '';
            chap.paragraphs.forEach(p => {
                if (p.isMedia) {
                    // 시각 자료(사진/삽화) 블록 렌더링
                    paragraphsHtml += `
                        <div class="my-5 rounded-2xl overflow-hidden border border-stone-300/80 shadow-md bg-stone-900/5 transition-all">
                            <img src="${p.url}" alt="${p.alt || 'Illustration'}" class="w-full max-h-80 object-cover hover:scale-101 transition-transform duration-300">
                            <div class="p-2.5 bg-stone-100/90 text-stone-600 text-[11px] font-serif italic text-center border-t border-stone-200">
                                ${p.caption}
                            </div>
                        </div>
                    `;
                } else {
                    // 텍스트 문단 렌더링 (단어 터치 사전 + 직독직해 구문 + 한국어 해석)
                    const interactiveEn = this.makeWordsClickable(p.en, p.en, p.ko);
                    const chunksHtml = this.showSlash && p.chunks ? `
                        <div class="text-[11px] font-mono text-stone-500 bg-stone-200/40 px-2.5 py-1 rounded border border-stone-300/50 my-1 leading-relaxed">
                            <span class="font-bold text-stone-700">구문 끊기:</span> ${p.chunks.join(' ')}
                        </div>
                    ` : '';
                    const koHtml = this.showKorean ? `
                        <p class="text-xs text-stone-600 leading-relaxed font-sans pt-0.5">
                            ${p.ko}
                        </p>
                    ` : '';

                    paragraphsHtml += `
                        <div class="space-y-1.5 p-2 rounded-xl transition-colors hover:bg-stone-500/5" data-paragraph-num="${p.num}">
                            <p class="font-serif leading-relaxed text-stone-900 selection:bg-amber-200" style="font-size: ${this.fontSize}px;">
                                ${interactiveEn}
                            </p>
                            ${chunksHtml}
                            ${koHtml}
                        </div>
                    `;
                }
            });

            chaptersHtml += `
                <div class="space-y-4">
                    <div class="border-b border-stone-300/80 pb-2 mb-3">
                        <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500">
                            Chapter ${chap.chapterNum}
                        </span>
                        <h4 class="font-serif font-black text-xl text-stone-900">
                            ${chap.title}
                        </h4>
                    </div>
                    ${paragraphsHtml}
                </div>
            `;
        });

        container.innerHTML = `
            <div class="space-y-6">
                <!-- 리더기 전용 조작 툴바 -->
                <div class="flex items-center justify-between p-3 rounded-xl bg-stone-100 border border-stone-300/80 text-xs text-stone-700 flex-wrap gap-2">
                    <!-- 오디오북 재생 컨트롤 -->
                    <div class="flex items-center gap-2">
                        <button type="button" onclick="window.ebookEngine.toggleAudioPlay()" class="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer">
                            <i data-lucide="${this.isPlayingAudio ? 'pause' : 'volume-2'}" class="w-3.5 h-3.5"></i>
                            <span>${this.isPlayingAudio ? '오디오 일시정지' : '원어민 오디오북 재생'}</span>
                        </button>
                        <span class="text-[11px] text-stone-500 font-mono hidden sm:inline">
                            US 여성 원어민 음성
                        </span>
                    </div>

                    <!-- 뷰어 옵션 (양면/단면, 테마, 폰트크기, 구문끊기, 해석) -->
                    <div class="flex items-center gap-2 flex-wrap">
                        <!-- 구문 끊기 스위치 -->
                        <button type="button" onclick="window.ebookEngine.toggleSlash()" class="px-2.5 py-1 rounded-md border text-[11px] font-bold transition-all cursor-pointer ${this.showSlash ? 'bg-blue-100 border-blue-300 text-blue-900' : 'bg-white border-stone-200 text-stone-500'}">
                            직독직해(/) ${this.showSlash ? 'ON' : 'OFF'}
                        </button>

                        <!-- 한글 해석 스위치 -->
                        <button type="button" onclick="window.ebookEngine.toggleKorean()" class="px-2.5 py-1 rounded-md border text-[11px] font-bold transition-all cursor-pointer ${this.showKorean ? 'bg-emerald-100 border-emerald-300 text-emerald-900' : 'bg-white border-stone-200 text-stone-500'}">
                            해석 ${this.showKorean ? 'ON' : 'OFF'}
                        </button>

                        <!-- 양면 / 단면 전환 -->
                        <button type="button" onclick="window.ebookEngine.toggleSpreadMode()" class="px-2.5 py-1 rounded-md border border-stone-300 bg-white hover:bg-stone-50 text-[11px] font-bold text-stone-700 flex items-center gap-1 cursor-pointer" title="양면 펼침 / 단면 스크롤 전환">
                            <i data-lucide="${this.readerSpreadMode === 'spread' ? 'book-open' : 'file-text'}" class="w-3 h-3"></i>
                            <span>${this.readerSpreadMode === 'spread' ? '양면 책' : '단면 스크롤'}</span>
                        </button>

                        <!-- 폰트 크기 조절 -->
                        <div class="flex items-center border border-stone-300 rounded-md bg-white overflow-hidden">
                            <button type="button" onclick="window.ebookEngine.changeFontSize(-1)" class="px-2 py-1 text-stone-600 hover:bg-stone-100 font-mono font-bold text-xs" title="글꼴 축소">A-</button>
                            <span class="px-1.5 text-[10px] font-mono text-stone-500">${this.fontSize}px</span>
                            <button type="button" onclick="window.ebookEngine.changeFontSize(1)" class="px-2 py-1 text-stone-600 hover:bg-stone-100 font-mono font-bold text-xs" title="글꼴 확대">A+</button>
                        </div>

                        <!-- 3대 컬러 테마 -->
                        <div class="flex items-center gap-1">
                            <button type="button" onclick="window.ebookEngine.applyTheme('paper')" class="w-5 h-5 rounded-full bg-white border-2 ${this.readerTheme === 'paper' ? 'border-blue-900 scale-110 shadow-xs' : 'border-stone-300'} cursor-pointer" title="페이퍼 화이트 테마"></button>
                            <button type="button" onclick="window.ebookEngine.applyTheme('sepia')" class="w-5 h-5 rounded-full bg-[#f4ecd8] border-2 ${this.readerTheme === 'sepia' ? 'border-blue-900 scale-110 shadow-xs' : 'border-stone-300'} cursor-pointer" title="세피아 북 테마"></button>
                            <button type="button" onclick="window.ebookEngine.applyTheme('dark')" class="w-5 h-5 rounded-full bg-slate-900 border-2 ${this.readerTheme === 'dark' ? 'border-blue-900 scale-110 shadow-xs' : 'border-stone-300'} cursor-pointer" title="나이트 다크 테마"></button>
                        </div>
                    </div>
                </div>

                <!-- e-Book 펼침 본문 영역 -->
                <div class="${layoutClass} p-4 md:p-6 rounded-2xl border border-stone-200/90 shadow-inner min-h-[500px]">
                    ${chaptersHtml}
                </div>

                <!-- 하단 네비게이션 -->
                <div class="pt-2 flex items-center justify-between">
                    <button type="button" onclick="window.ebookEngine.goToStep(2)" class="px-4 py-2 rounded-xl border border-stone-300 text-xs font-bold text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer">
                        ← 이전: 필수 어휘
                    </button>
                    <button type="button" onclick="window.ebookEngine.goToStep(4)" class="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer">
                        <span>4단계: 챕터 구조화 & 콘셉트 맵</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // ------------------------------------------------------------------------
    // STEP 4: 챕터 구조화 & 콘셉트 맵 (Concept Map)
    // ------------------------------------------------------------------------
    renderStep4ConceptMap() {
        const container = document.getElementById('ebook-step-view-4');
        if (!container || !this.currentBook) return;
        const conceptMap = this.currentBook.conceptMap || { title: '챕터 핵심 요약', nodes: [], summary: '요약 내용' };

        container.innerHTML = `
            <div class="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
                <div class="border-b border-slate-200 pb-3">
                    <span class="text-[10px] font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 uppercase">
                        STEP 4 • CONCEPT SYNTHESIS
                    </span>
                    <h3 class="font-serif font-black text-xl text-slate-900 mt-1">
                        🗺️ ${conceptMap.title}
                    </h3>
                </div>

                <!-- 구조화된 노드 카드 리스트 -->
                <div class="space-y-3">
                    ${conceptMap.nodes.map((node, idx) => `
                        <div class="p-4 rounded-xl bg-white border border-purple-200/90 shadow-2xs space-y-1 hover:border-purple-400 transition-all flex items-start gap-3">
                            <span class="w-6 h-6 rounded-full bg-purple-100 text-purple-900 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                                ${idx + 1}
                            </span>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm">${node.label}</h4>
                                <p class="text-xs text-slate-600 leading-relaxed font-sans">${node.desc}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- 3문장 총평 요약 박스 -->
                <div class="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-2">
                    <div class="flex items-center gap-2 text-purple-900 font-bold text-xs">
                        <i data-lucide="check-check" class="w-4 h-4 text-purple-700"></i>
                        <span>Executive Summary (원서 핵심 메시지)</span>
                    </div>
                    <p class="text-sm font-serif italic text-purple-950 leading-relaxed">
                        "${conceptMap.summary}"
                    </p>
                </div>

                <!-- 하단 네비게이션 -->
                <div class="pt-2 flex items-center justify-between">
                    <button type="button" onclick="window.ebookEngine.goToStep(3)" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">
                        ← 이전: e-Book 독해
                    </button>
                    <button type="button" onclick="window.ebookEngine.goToStep(5)" class="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer">
                        <span>5단계: 원서 심층 퀴즈 풀기</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;
    }

    // ------------------------------------------------------------------------
    // STEP 5: 원서형 심층 독해력 퀴즈 (Quizzes)
    // ------------------------------------------------------------------------
    renderStep5Quizzes() {
        const container = document.getElementById('ebook-step-view-5');
        if (!container || !this.currentBook) return;
        const quizzes = this.currentBook.quizzes || [];

        container.innerHTML = `
            <div class="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div>
                        <h3 class="font-serif font-black text-xl text-slate-900">
                            🧠 원서형 심층 독해력 퀴즈
                        </h3>
                        <p class="text-xs text-slate-500 mt-0.5">
                            수능 킬러 & SAT/TOEFL 유형의 5문항 다각도 퀴즈로 이해도를 정밀 검증합니다.
                        </p>
                    </div>
                    <span class="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-900 text-xs font-mono font-bold border border-indigo-200">
                        총 ${quizzes.length}문항
                    </span>
                </div>

                <!-- 퀴즈 리스트 -->
                <div class="space-y-6">
                    ${quizzes.map((q, idx) => {
                        const userAns = this.userQuizAnswers[q.id];
                        const isSubmitted = userAns !== undefined;
                        const isCorrect = userAns === q.answer;

                        return `
                            <div class="p-5 rounded-2xl bg-white border ${isSubmitted ? (isCorrect ? 'border-emerald-300 bg-emerald-50/20' : 'border-red-300 bg-red-50/20') : 'border-slate-200'} shadow-xs space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold font-mono ${isSubmitted ? (isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-red-100 text-red-900') : 'bg-slate-100 text-slate-600'}">
                                        Q${idx + 1} • ${q.type.replace('_', ' ').toUpperCase()}
                                    </span>
                                    ${isSubmitted ? `
                                        <span class="text-xs font-bold ${isCorrect ? 'text-emerald-700' : 'text-red-700'}">
                                            ${isCorrect ? '✓ 정답입니다!' : '✕ 오답 (해설 확인)'}
                                        </span>
                                    ` : ''}
                                </div>

                                <p class="font-serif font-bold text-sm text-slate-900 leading-snug">
                                    ${q.question}
                                </p>

                                <!-- 보기 4지선다 -->
                                <div class="space-y-2 pt-1">
                                    ${q.options.map((opt, optIdx) => {
                                        let btnClass = 'bg-slate-50 border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50/50';
                                        if (isSubmitted) {
                                            if (optIdx === q.answer) {
                                                btnClass = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold';
                                            } else if (optIdx === userAns) {
                                                btnClass = 'bg-red-100 border-red-400 text-red-950 font-bold';
                                            } else {
                                                btnClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                                            }
                                        }

                                        return `
                                            <button type="button" onclick="window.ebookEngine.answerQuiz('${q.id}', ${optIdx})" class="w-full p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 cursor-pointer ${btnClass}" ${isSubmitted ? 'disabled' : ''}>
                                                <span class="w-5 h-5 rounded-full border border-current font-mono font-bold flex items-center justify-center shrink-0 text-[10px]">
                                                    ${['A', 'B', 'C', 'D'][optIdx]}
                                                </span>
                                                <span class="leading-relaxed flex-1">${opt}</span>
                                            </button>
                                        `;
                                    }).join('')}
                                </div>

                                <!-- 해설 박스 (제출 후 노출) -->
                                ${isSubmitted ? `
                                    <div class="mt-3 p-3.5 rounded-xl bg-slate-100/80 border border-slate-200 text-xs text-slate-700 space-y-1 animate-in fade-in duration-150">
                                        <span class="font-bold text-blue-900 block">💡 상세 해설:</span>
                                        <p class="leading-relaxed font-sans">${q.explanation}</p>
                                    </div>
                                ` : ''}
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- 하단 네비게이션 -->
                <div class="pt-2 flex items-center justify-between">
                    <button type="button" onclick="window.ebookEngine.goToStep(4)" class="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer">
                        ← 이전: 구조 요약맵
                    </button>
                    <button type="button" onclick="window.ebookEngine.goToStep(6)" class="px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer">
                        <span>6단계: 명문장 영작 & 사진 출처</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;
    }

    answerQuiz(questionId, selectedIdx) {
        this.userQuizAnswers[questionId] = selectedIdx;
        this.renderStep5Quizzes();
    }

    // ------------------------------------------------------------------------
    // STEP 6: 명문장 스튜디오 & 사진 출처 & 완독 인증
    // ------------------------------------------------------------------------
    renderStep6QuotesAndCredits() {
        const container = document.getElementById('ebook-step-view-6');
        if (!container || !this.currentBook) return;
        const book = this.currentBook;
        const quotes = book.keyQuotes || [];
        const credits = book.content?.photoCredits || [];
        const isCompleted = this.readingProgress[book.id]?.completed;

        container.innerHTML = `
            <div class="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-200">
                <!-- 1. 원서 명문장 스튜디오 -->
                <div class="space-y-4">
                    <div class="border-b border-slate-200 pb-2">
                        <span class="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 uppercase">
                            KEY QUOTE STUDIO
                        </span>
                        <h3 class="font-serif font-black text-xl text-slate-900 mt-1">
                            ✍️ 원서 명문장 기억 스튜디오
                        </h3>
                        <p class="text-xs text-slate-500 mt-0.5">
                            도서의 가장 통찰력 있는 핵심 문장을 직접 낭독하고 마음에 새겨봅니다.
                        </p>
                    </div>

                    ${quotes.map(q => `
                        <div class="p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 space-y-3">
                            <p class="font-serif font-black text-lg text-amber-950 leading-relaxed italic">
                                "${q.en}"
                            </p>
                            <p class="text-xs text-amber-900 font-sans leading-relaxed">
                                해석: ${q.ko}
                            </p>
                            <div class="pt-2 flex items-center gap-2">
                                <button type="button" onclick="if(window.tts) window.tts.speak('${q.en.replace(/'/g, "\\'")}', 'en-US')" class="px-3 py-1.5 rounded-lg bg-amber-900 text-white font-serif font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer hover:bg-amber-800 transition-colors">
                                    <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                                    <span>명문장 원어민 낭독 듣기</span>
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- 2. 완독 인증 & 뱃지 축하 카드 -->
                <div class="p-6 rounded-2xl bg-gradient-to-br from-emerald-900 to-teal-950 text-white shadow-xl space-y-4 text-center">
                    <div class="w-12 h-12 rounded-full bg-emerald-500/30 border border-emerald-400 text-emerald-300 mx-auto flex items-center justify-center">
                        <i data-lucide="award" class="w-6 h-6"></i>
                    </div>
                    <div class="space-y-1">
                        <h4 class="font-serif font-black text-xl">
                            ${isCompleted ? '🎉 이미 완독 인증된 도서입니다!' : '축하합니다! 이 도서를 완독하셨나요?'}
                        </h4>
                        <p class="text-xs text-emerald-200/90 max-w-md mx-auto">
                            ${isCompleted ? '독서 기록이 안전하게 저장되어 있습니다.' : '완독 인증 버튼을 누르면 독서 통계에 기록되고 완독 뱃지가 수여됩니다.'}
                        </p>
                    </div>
                    <div>
                        <button type="button" onclick="window.ebookEngine.completeBook('${book.id}')" class="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-serif font-black text-sm shadow-lg transition-transform active:scale-95 cursor-pointer">
                            ${isCompleted ? '✓ 완독 상태 유지 (다시 축하하기)' : '🏆 이 책 완독 인증하기'}
                        </button>
                    </div>
                </div>

                <!-- 3. 맨 뒤 페이지: 사진 및 사료 출처 (Photo Credits & Citations) -->
                <div class="p-5 rounded-2xl bg-stone-100 border border-stone-300/80 space-y-3 text-stone-700">
                    <div class="flex items-center justify-between pb-2 border-b border-stone-300">
                        <div class="flex items-center gap-2 font-bold text-xs">
                            <i data-lucide="camera" class="w-4 h-4 text-stone-600"></i>
                            <span>Photo Credits & Citations (사진 및 사료 출처)</span>
                        </div>
                        <span class="text-[10px] font-mono text-stone-500">End Matter</span>
                    </div>

                    <div class="space-y-2.5 text-xs">
                        ${credits.map(c => `
                            <div class="p-2.5 rounded-lg bg-white/80 border border-stone-200/80 space-y-1">
                                <div class="flex items-center justify-between">
                                    <span class="font-bold font-mono text-stone-800">${c.figureNum}: ${c.title}</span>
                                    <span class="text-[10px] text-stone-500 font-mono">${c.license}</span>
                                </div>
                                <p class="text-[11px] text-stone-600 font-sans leading-relaxed">${c.description || ''}</p>
                                <div class="text-[10px] text-blue-700 font-mono truncate">
                                    출처: ${c.source} (${c.originalUrl || 'Public Archive'})
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- 닫기 버튼 -->
                <div class="pt-2 flex justify-center">
                    <button type="button" onclick="window.ebookEngine.closeReader()" class="px-6 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer">
                        e-Book 뷰어 닫고 서재로 돌아가기
                    </button>
                </div>
            </div>
        `;
    }

    completeBook(bookId) {
        this.readingProgress[bookId] = {
            completed: true,
            completedAt: Date.now()
        };
        this.saveProgress();

        // 업적 시스템 연동 (있는 경우)
        if (window.achievements && typeof window.achievements.checkBadgeProgress === 'function') {
            window.achievements.checkBadgeProgress();
        }

        alert(`🎉 축하합니다!\n\n'${this.currentBook.title}' 도서를 성공적으로 완독하셨습니다.\n독서 기록이 저장되었습니다.`);
        this.renderStep6QuotesAndCredits();
        this.renderLibrary();
    }

    // ------------------------------------------------------------------------
    // 유틸리티: 단어 클릭 인스펙터 연동 & 테마 제어
    // ------------------------------------------------------------------------
    makeWordsClickable(text, fullSentenceEn = '', fullSentenceKo = '') {
        if (!text) return '';
        const safeEn = (fullSentenceEn || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
        const safeKo = (fullSentenceKo || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
        // 단어 단위로 쪼개어 span으로 감싸기
        const tokens = text.split(/(\s+|[.,!?;:"'()\[\]{}]+)/);
        return tokens.map(token => {
            const clean = token.replace(/[^a-zA-Z'-]/g, '').trim();
            if (clean && clean.length > 1) {
                const safeWord = clean.replace(/'/g, "\\'");
                return `<span class="cursor-pointer hover:text-blue-600 hover:underline transition-colors active:scale-95" onclick="event.stopPropagation(); window.readingEngine && window.readingEngine.openWordInspector('${safeWord}', '${safeEn}', '${safeKo}')">${token}</span>`;
            }
            return token;
        }).join('');
    }

    applyTheme(theme) {
        this.readerTheme = theme;
        const box = document.getElementById('ebook-reader-content-scroll');
        if (!box) return;

        box.classList.remove('bg-white', 'text-slate-900', 'bg-[#fbf0d9]', 'text-[#433422]', 'bg-slate-900', 'text-slate-100');

        if (theme === 'paper') {
            box.classList.add('bg-white', 'text-slate-900');
        } else if (theme === 'dark') {
            box.classList.add('bg-slate-900', 'text-slate-100');
        } else {
            // sepia
            box.classList.add('bg-[#fbf0d9]', 'text-[#433422]');
        }
    }

    toggleSpreadMode() {
        this.readerSpreadMode = (this.readerSpreadMode === 'spread') ? 'single' : 'spread';
        if (this.currentStep === 3) {
            this.renderStep3Reading();
        }
    }

    changeFontSize(delta) {
        this.fontSize = Math.max(14, Math.min(26, this.fontSize + delta));
        if (this.currentStep === 3) {
            this.renderStep3Reading();
        }
    }

    toggleSlash() {
        this.showSlash = !this.showSlash;
        if (this.currentStep === 3) {
            this.renderStep3Reading();
        }
    }

    toggleKorean() {
        this.showKorean = !this.showKorean;
        if (this.currentStep === 3) {
            this.renderStep3Reading();
        }
    }

    // ------------------------------------------------------------------------
    // 오디오북 재생 제어 (문단별 순차 TTS)
    // ------------------------------------------------------------------------
    toggleAudioPlay() {
        if (this.isPlayingAudio) {
            this.stopAudio();
        } else {
            this.startAudio();
        }
    }

    startAudio() {
        if (!this.currentBook || !window.tts) return;
        const chapters = this.currentBook.content?.chapters || [];
        const allTextParagraphs = [];
        chapters.forEach(c => {
            c.paragraphs.forEach(p => {
                if (!p.isMedia && p.en) {
                    allTextParagraphs.push(p);
                }
            });
        });

        if (allTextParagraphs.length === 0) return;

        this.isPlayingAudio = true;
        this.playParagraphAudioRecursive(allTextParagraphs, this.currentAudioParagraphIndex);
        if (this.currentStep === 3) this.renderStep3Reading();
    }

    playParagraphAudioRecursive(paragraphs, index) {
        if (!this.isPlayingAudio || index >= paragraphs.length) {
            this.stopAudio();
            return;
        }

        this.currentAudioParagraphIndex = index;
        const p = paragraphs[index];

        // 문단 하이라이트
        document.querySelectorAll('[data-paragraph-num]').forEach(el => {
            el.classList.remove('ring-2', 'ring-blue-500', 'bg-blue-50/40');
        });
        const currentEl = document.querySelector(`[data-paragraph-num="${p.num}"]`);
        if (currentEl) {
            currentEl.classList.add('ring-2', 'ring-blue-500', 'bg-blue-50/40');
            currentEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        if (window.tts) {
            window.tts.speak(p.en, 'en-US');
            // 대략적인 소요 시간 계산 후 다음 문단 (1초당 약 2.5단어)
            const wordCount = p.en.split(/\s+/).length;
            const durationMs = Math.max(3000, (wordCount / 2.5) * 1000);

            this.audioTimeout = setTimeout(() => {
                this.playParagraphAudioRecursive(paragraphs, index + 1);
            }, durationMs);
        }
    }

    stopAudio() {
        this.isPlayingAudio = false;
        if (this.audioTimeout) {
            clearTimeout(this.audioTimeout);
            this.audioTimeout = null;
        }
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        document.querySelectorAll('[data-paragraph-num]').forEach(el => {
            el.classList.remove('ring-2', 'ring-blue-500', 'bg-blue-50/40');
        });
        if (this.currentStep === 3) this.renderStep3Reading();
    }
}

// 인스턴스 등록
window.ebookEngine = new EBookEngine();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (window.ebookEngine) window.ebookEngine.init();
    });
} else {
    setTimeout(() => {
        if (window.ebookEngine) window.ebookEngine.init();
    }, 100);
}
