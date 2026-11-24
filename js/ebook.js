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
        this.readerSpreadMode = 'spread'; // 'spread' (양면 2-Page 펼침) | 'single' (단면 집중 모드)
        this.fontSize = 16; // px
        this.showSlash = true;
        this.showKorean = true;
        this.currentSpreadIndex = 0; // 0: page 1-2, 1: page 3-4, etc.
        this.paginatedPages = [];

        this.isPlayingAudio = false;
        this.currentAudioParagraphIndex = 0;
        this.userQuizAnswers = {};
        this.userScrambleAnswers = {};

        this.readingProgress = {}; // bookId -> { completed: boolean, lastStep: number, completedAt: number }
        this._hasBoundKeyboard = false;
    }

    init() {
        this.seriesList = window.EBOOK_SERIES_DATA || [];
        this.books = window.EBOOK_LIBRARY_DATA || window.EBOOK_BOOKS_DATA || [];
        this.loadProgress();
        this.renderLibrary();

        // 3D 책장 넘김 키보드 방향키 바인딩
        if (!this._hasBoundKeyboard) {
            document.addEventListener('keydown', (e) => {
                const modal = document.getElementById('modal-ebook-reader');
                if (modal && !modal.classList.contains('hidden') && this.currentStep === 3) {
                    if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        this.flipPage(-1);
                    } else if (e.key === 'ArrowRight') {
                        e.preventDefault();
                        this.flipPage(1);
                    }
                }
            });
            this._hasBoundKeyboard = true;
        }

        console.log('📖 EBookEngine V2 initialized with', this.books.length, 'books across', this.seriesList.length, 'series.');
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
                        <span>보유 장서: 총 ${this.books.length}권 (${this.seriesList.length}대 시리즈)</span>
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
        if (seriesSelect) {
            const availableSeries = this.currentCategoryFilter === 'all'
                ? this.seriesList
                : this.seriesList.filter(s => s.category === this.currentCategoryFilter);
            
            const currentSelected = this.currentSeriesFilter;
            let optionsHtml = `<option value="all">전체 시리즈 (${availableSeries.length}개 시리즈)</option>`;
            optionsHtml += availableSeries.map(s => `<option value="${s.id}">[${s.shortName}] ${s.name}</option>`).join('');
            
            if (seriesSelect.getAttribute('data-last-cat') !== this.currentCategoryFilter) {
                seriesSelect.innerHTML = optionsHtml;
                seriesSelect.setAttribute('data-last-cat', this.currentCategoryFilter);
                if (availableSeries.some(s => s.id === currentSelected)) {
                    seriesSelect.value = currentSelected;
                } else {
                    seriesSelect.value = 'all';
                    this.currentSeriesFilter = 'all';
                }
            }
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

        // 시리즈 헤더 배너 (특정 시리즈 필터링 시)
        let headerBannerHtml = '';
        if (this.currentSeriesFilter !== 'all') {
            const selectedSeries = this.seriesList.find(s => s.id === this.currentSeriesFilter);
            if (selectedSeries) {
                headerBannerHtml = `
                    <div class="col-span-full mb-3 p-5 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-50/70 to-blue-50/70 border border-amber-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div class="space-y-1.5">
                            <div class="flex items-center gap-2 flex-wrap">
                                <span class="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-amber-500 text-white shadow-2xs">
                                    ${selectedSeries.shortName}
                                </span>
                                <h3 class="font-serif font-black text-slate-900 text-base sm:text-lg">
                                    ${selectedSeries.name}
                                </h3>
                                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono bg-blue-100 text-blue-900 border border-blue-200">
                                    총 ${filtered.length}권 완비
                                </span>
                            </div>
                            <p class="text-xs text-slate-600 leading-relaxed font-sans">
                                ${selectedSeries.description}
                            </p>
                        </div>
                        <button type="button" onclick="window.ebookEngine.openSeriesPlannerModal('${selectedSeries.id}')" class="px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-98 text-white text-xs font-bold font-serif flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer shrink-0">
                            <i data-lucide="calendar-plus" class="w-4 h-4"></i>
                            <span>📅 이 시리즈 플래너에 배정하기</span>
                        </button>
                    </div>
                `;
            }
        }

        container.innerHTML = headerBannerHtml + filtered.map(book => {
            const series = this.seriesList.find(s => s.id === book.seriesId) || { name: '비문학 시리즈', badgeColor: 'blue', shortName: '시리즈' };
            const isCompleted = this.readingProgress[book.id]?.completed;
            const levelBadgeColor = book.level === 1 ? 'bg-emerald-100 text-emerald-900 border-emerald-300' :
                                    book.level === 2 ? 'bg-blue-100 text-blue-900 border-blue-300' :
                                    book.level === 3 ? 'bg-indigo-100 text-indigo-900 border-indigo-300' :
                                    book.level === 4 ? 'bg-purple-100 text-purple-900 border-purple-300' :
                                    'bg-rose-100 text-rose-900 border-rose-300';

            return `
                <div class="group bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden relative">
                    <!-- 상단 책 커버 미리보기 -->
                    <div class="relative h-44 overflow-hidden bg-slate-900">
                        <img src="${book.coverImage}" alt="${book.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90">
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
                        
                        <!-- 좌측 상단 시리즈 & 레벨 배지 -->
                        <div class="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold font-mono tracking-tight bg-slate-900/80 backdrop-blur-xs text-white border border-white/20">
                                ${series.shortName} Vol.${book.vol}
                            </span>
                            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold font-mono border ${levelBadgeColor}">
                                Level ${book.level}
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
                            ${book.subTitle || book.subtitle}
                        </p>

                        <!-- AR / Lexile / 권수 배지 -->
                        <div class="flex items-center gap-1.5 flex-wrap text-[10px] font-mono">
                            <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold border border-slate-200">
                                ${book.ar || 'AR -'}
                            </span>
                            <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-bold border border-slate-200">
                                ${book.lexile || 'Lexile -'}
                            </span>
                            <span class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium border border-slate-200">
                                ${(book.wordCount || (book.readingPassage?.paragraphs ? book.readingPassage.paragraphs.reduce((sum, p) => sum + (p.en ? p.en.split(/\s+/).length : 0), 0) : 480))} words
                            </span>
                        </div>

                        <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                            <span class="flex items-center gap-1 font-mono">
                                <i data-lucide="book" class="w-3.5 h-3.5 text-slate-400"></i>
                                <span>총 ${book.readingPassage ? book.readingPassage.totalParagraphs : 6}문단</span>
                            </span>
                            <span class="flex items-center gap-1 font-mono">
                                <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i>
                                <span>약 ${book.estimatedMinutes || book.readTimeMin || 15}분 소요</span>
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
        if (seriesSelect) {
            seriesSelect.removeAttribute('data-last-cat');
            seriesSelect.value = 'all';
        }
        const levelSelect = document.getElementById('ebook-filter-level-select');
        if (levelSelect) levelSelect.value = 'all';

        this.setCategoryFilter('all');
    }

    // ------------------------------------------------------------------------
    // 시리즈 플래너 모달 (Series Planner Modal)
    // ------------------------------------------------------------------------
    openSeriesPlannerModal(seriesId = null) {
        if (!seriesId) {
            if (this.currentSeriesFilter && this.currentSeriesFilter !== 'all') {
                seriesId = this.currentSeriesFilter;
            } else {
                seriesId = this.seriesList[0]?.id;
            }
        }
        this._plannerSeriesId = seriesId;

        const modal = document.getElementById('modal-ebook-series-planner');
        if (!modal) return;

        // 시리즈 셀렉트 드롭다운 채우기
        const select = document.getElementById('ebook-planner-series-select');
        if (select) {
            select.innerHTML = this.seriesList.map(s => {
                const bookCount = this.books.filter(b => b.seriesId === s.id).length;
                return `<option value="${s.id}" ${s.id === seriesId ? 'selected' : ''}>[${s.shortName}] ${s.name} (${bookCount}권)</option>`;
            }).join('');
        }

        this.syncPlannerSeriesInfo(seriesId);

        // 시작일 기본값 오늘
        const dateInput = document.getElementById('ebook-planner-start-date');
        const today = window.storage?.getTodayDateString ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
        if (dateInput) {
            dateInput.value = today;
            dateInput.min = today;
            dateInput.onchange = () => this.updateSeriesPlannerPreview();
        }

        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        this.updateSeriesPlannerPreview();
        if (window.lucide) window.lucide.createIcons();
    }

    onPlannerSeriesSelectChange(seriesId) {
        this._plannerSeriesId = seriesId;
        this.syncPlannerSeriesInfo(seriesId);
        this.updateSeriesPlannerPreview();
    }

    syncPlannerSeriesInfo(seriesId) {
        const series = this.seriesList.find(s => s.id === seriesId);
        if (!series) return;
        const seriesBooks = this.books.filter(b => b.seriesId === seriesId).sort((a, b) => a.vol - b.vol);

        const subtitleEl = document.getElementById('ebook-planner-series-subtitle');
        const badgeEl = document.getElementById('ebook-planner-series-badge');
        const countEl = document.getElementById('ebook-planner-series-count');
        const titleEl = document.getElementById('ebook-planner-series-title');
        const descEl = document.getElementById('ebook-planner-series-desc');

        if (subtitleEl) subtitleEl.textContent = `시리즈 전권(${seriesBooks.length}권)을 캘린더 플래너에 날짜별로 일괄 배정합니다.`;
        if (badgeEl) badgeEl.textContent = series.shortName;
        if (countEl) countEl.textContent = `총 ${seriesBooks.length}권 배정`;
        if (titleEl) titleEl.textContent = `[${series.shortName}] ${series.name}`;
        if (descEl) descEl.textContent = series.description || '';
    }

    closeSeriesPlannerModal() {
        const modal = document.getElementById('modal-ebook-series-planner');
        if (modal) modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }

    updateSeriesPlannerPreview() {
        if (!this._plannerSeriesId) return;
        const seriesId = this._plannerSeriesId;
        const seriesBooks = this.books.filter(b => b.seriesId === seriesId).sort((a, b) => a.vol - b.vol);
        const dateInput = document.getElementById('ebook-planner-start-date');
        const startDate = (dateInput && dateInput.value) ? dateInput.value : (window.storage?.getTodayDateString() || new Date().toISOString().slice(0, 10));

        const paceRadio = document.querySelector('input[name="ebook-planner-pace"]:checked');
        const pace = paceRadio ? paceRadio.value : 'daily';

        const dates = [];
        const [y, m, d] = startDate.split('-').map(Number);
        let cursor = new Date(y, m - 1, d);
        let safetyCounter = 0;
        while (dates.length < seriesBooks.length && safetyCounter < 1000) {
            safetyCounter++;
            const curYear = cursor.getFullYear();
            const curMonth = String(cursor.getMonth() + 1).padStart(2, '0');
            const curDate = String(cursor.getDate()).padStart(2, '0');
            const curStr = `${curYear}-${curMonth}-${curDate}`;
            const isRest = window.storage?.isRestDay ? window.storage.isRestDay(curStr) : false;

            if (!isRest) {
                dates.push(curStr);
                cursor.setDate(cursor.getDate() + (pace === 'alternate' ? 2 : 1));
            } else {
                cursor.setDate(cursor.getDate() + 1);
            }
        }

        const rangeEl = document.getElementById('ebook-planner-date-range');
        if (rangeEl && dates.length > 0) {
            rangeEl.textContent = `${dates[0]} ~ ${dates[dates.length - 1]} (${dates.length}회차)`;
        }

        const previewContainer = document.getElementById('ebook-planner-schedule-preview');
        if (previewContainer) {
            previewContainer.innerHTML = seriesBooks.map((book, idx) => {
                const planDate = dates[idx] || startDate;
                return `
                    <div class="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-200">
                        <div class="flex items-center gap-2 min-w-0">
                            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-900 shrink-0">
                                Vol.${book.vol}
                            </span>
                            <span class="font-bold text-slate-800 truncate text-xs">
                                ${book.title}
                            </span>
                        </div>
                        <span class="text-[11px] font-mono text-slate-500 shrink-0 ml-2">
                            📅 ${planDate}
                        </span>
                    </div>
                `;
            }).join('');
        }
    }

    submitSeriesPlanner() {
        if (!this._plannerSeriesId) return;
        const seriesId = this._plannerSeriesId;
        const series = this.seriesList.find(s => s.id === seriesId);
        const dateInput = document.getElementById('ebook-planner-start-date');
        const startDate = (dateInput && dateInput.value) ? dateInput.value : null;

        const paceRadio = document.querySelector('input[name="ebook-planner-pace"]:checked');
        const pace = paceRadio ? paceRadio.value : 'daily';

        if (!window.storage || !window.storage.registerEBookSeries) {
            alert('플래너 저장소 모듈을 찾을 수 없습니다.');
            return;
        }

        const res = window.storage.registerEBookSeries(seriesId, startDate, pace);
        this.closeSeriesPlannerModal();

        // 플래너 렌더링 갱신
        if (window.planner) {
            if (window.planner.renderActivePlans) window.planner.renderActivePlans();
            if (window.planner.renderCalendar) window.planner.renderCalendar();
            if (window.planner.renderMonthlyHeatmap) window.planner.renderMonthlyHeatmap();
        }

        // 축하 메시지
        alert(`🎉 [${series ? series.name : '시리즈'}] 전권(${res.addedBooks}권)이 플래너에 배정되었습니다!\n기간: ${res.startDate} ~ ${res.endDate}\n학습 캘린더에서 매일의 원서 학습 일정을 확인하세요.`);
    }

    // ------------------------------------------------------------------------
    // 실감형 e-Book 리더기 모달 열기 & 닫기
    // ------------------------------------------------------------------------
    openReader(bookId) {
        const book = this.books.find(b => b.id === bookId);
        if (!book) return;

        this.currentBook = book;
        this.currentStep = 1; // 1단계 30초 배경지식 & 탐구 화두부터 자연스럽게 시작
        this.currentSpreadIndex = 0;
        this.paginatedPages = this.paginateBook(book);
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
        const lvlCfg = window.EBOOK_LEVEL_CONFIG ? window.EBOOK_LEVEL_CONFIG[book.level] : null;

        if (titleEl) titleEl.textContent = book.title;
        if (seriesBadgeEl) {
            seriesBadgeEl.textContent = series ? series.name : '비문학 원서';
        }
        if (levelBadgeEl) {
            levelBadgeEl.textContent = lvlCfg ? `${lvlCfg.name} (${book.ar || ''})` : (book.levelName || `Level ${book.level}`);
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
                            ${book.subtitle || book.subTitle || (book.primer && book.primer.keyConcept) || ''}
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
                                    "${v.contextSentence || v.example || ''}"
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
    // STEP 3: 실감형 2-Page 책장 넘김 리더기 (Realistic Two-Page Book Flip Spread)
    // ------------------------------------------------------------------------
    paginateBook(book) {
        if (!book) return [];
        const chapters = book.chapters || book.content?.chapters || [];
        const pages = [];

        // 1페이지: 표지 및 인트로 페이지 (Title & Cover Page)
        pages.push({
            type: 'cover',
            pageNumber: 1,
            chapterNum: '',
            chapterTitle: 'Veritas Book Volume',
            book: book
        });

        // 챕터별 콘텐츠를 논리적 종이 책 페이지 크기로 분할
        chapters.forEach((chap, chapIdx) => {
            let currentBlocks = [];
            let currentWords = 0;
            const cNum = chap.chapterNum || chap.num || (chapIdx + 1);

            // 챕터 헤더 블록
            currentBlocks.push({
                type: 'chapter_header',
                chapterNum: cNum,
                title: chap.title
            });

            (chap.paragraphs || []).forEach(p => {
                if (p.isMedia) {
                    if (currentBlocks.length > 1) {
                        pages.push({
                            type: 'content',
                            chapterNum: chap.chapterNum,
                            chapterTitle: chap.title,
                            blocks: currentBlocks
                        });
                        currentBlocks = [];
                        currentWords = 0;
                    }
                    currentBlocks.push({
                        type: 'media',
                        ...p
                    });
                } else {
                    const wordCount = (p.en || '').split(/\s+/).length;
                    if (currentWords + wordCount > 130 && currentBlocks.length > 0) {
                        pages.push({
                            type: 'content',
                            chapterNum: chap.chapterNum,
                            chapterTitle: chap.title,
                            blocks: currentBlocks
                        });
                        currentBlocks = [];
                        currentWords = 0;
                    }
                    currentBlocks.push({
                        type: 'paragraph',
                        ...p
                    });
                    currentWords += wordCount;
                }
            });

            if (currentBlocks.length > 0) {
                pages.push({
                    type: 'content',
                    chapterNum: chap.chapterNum,
                    chapterTitle: chap.title,
                    blocks: currentBlocks
                });
            }
        });

        // 양면 펼침 시 짝수 페이지로 마감
        if (pages.length % 2 !== 0) {
            pages.push({
                type: 'colophon',
                chapterNum: '',
                chapterTitle: 'Synthesis & Reflection',
                book: book
            });
        }

        // 1-indexed 페이지 번호 부여
        pages.forEach((p, idx) => {
            p.pageNumber = idx + 1;
        });

        return pages;
    }

    flipPage(delta) {
        if (!this.paginatedPages || this.paginatedPages.length === 0) return;
        const totalSpreads = this.readerSpreadMode === 'spread' 
            ? Math.ceil(this.paginatedPages.length / 2) 
            : this.paginatedPages.length;

        const nextIndex = this.currentSpreadIndex + delta;

        if (nextIndex < 0) {
            this.goToStep(2);
            return;
        }

        if (nextIndex >= totalSpreads) {
            this.goToStep(4);
            return;
        }

        const stageEl = document.getElementById('ebook-spread-stage');
        if (stageEl) {
            stageEl.classList.remove('animate-page-turn-right', 'animate-page-turn-left');
            void stageEl.offsetWidth;
            stageEl.classList.add(delta > 0 ? 'animate-page-turn-right' : 'animate-page-turn-left');
        }

        this.currentSpreadIndex = nextIndex;
        this.renderStep3Reading();
    }

    jumpToSpread(idx) {
        if (idx < 0 || !this.paginatedPages) return;
        const totalSpreads = this.readerSpreadMode === 'spread' 
            ? Math.ceil(this.paginatedPages.length / 2) 
            : this.paginatedPages.length;
        if (idx >= totalSpreads) return;

        this.currentSpreadIndex = idx;
        this.renderStep3Reading();
    }

    toggleSpreadMode() {
        this.readerSpreadMode = this.readerSpreadMode === 'spread' ? 'single' : 'spread';
        this.currentSpreadIndex = 0;
        this.renderStep3Reading();
    }

    renderSinglePageHtml(page, isLeft) {
        if (!page) {
            return `
                <div class="p-6 md:p-8 flex flex-col justify-center items-center text-center opacity-40">
                    <i data-lucide="book" class="w-12 h-12 text-stone-400 mb-2"></i>
                    <p class="text-xs font-serif italic text-stone-500">End of Volume Spread</p>
                </div>
            `;
        }

        const isDark = this.readerTheme === 'dark';
        const titleColor = isDark ? 'text-amber-100' : 'text-stone-900';
        const bodyColor = isDark ? 'text-stone-200' : 'text-stone-800';
        const subColor = isDark ? 'text-stone-400' : 'text-stone-500';
        const footerBorder = isDark ? 'border-stone-800 text-stone-500' : 'border-stone-200/80 text-stone-400';

        let innerContent = '';

        if (page.type === 'cover') {
            const b = page.book;
            const lvlCfg = window.EBOOK_LEVEL_CONFIG ? window.EBOOK_LEVEL_CONFIG[b.level] : null;
            innerContent = `
                <div class="space-y-4 my-auto">
                    <div class="text-center space-y-2">
                        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold ${lvlCfg ? lvlCfg.badgeClass : 'bg-blue-100 text-blue-900'}">
                            <i data-lucide="award" class="w-3.5 h-3.5"></i>
                            <span>${lvlCfg ? lvlCfg.name : ('Level ' + b.level)} • ${b.ar || ''} • ${b.lexile || ''}</span>
                        </div>
                        <h2 class="font-serif font-black text-xl md:text-2xl ${titleColor} leading-tight">
                            ${b.title}
                        </h2>
                        <p class="text-xs ${subColor} font-sans leading-relaxed">
                            ${b.subTitle || b.subtitle || ''}
                        </p>
                    </div>

                    <div class="my-4 rounded-xl overflow-hidden shadow-md border border-stone-300/60 max-h-56">
                        <img src="${b.coverImage}" alt="${b.title}" class="w-full h-full object-cover">
                    </div>

                    <div class="p-3.5 rounded-xl bg-stone-500/10 border border-stone-300/40 text-xs ${bodyColor} leading-relaxed font-sans">
                        <span class="font-bold text-amber-900 block mb-1">📖 Volume Overview:</span>
                        ${b.summary || (b.primer && b.primer.context) || ''}
                    </div>

                    <div class="text-center pt-2">
                        <span class="text-[11px] font-mono text-stone-500 flex items-center justify-center gap-1">
                            <span>Chapter 1 시작하기</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </span>
                    </div>
                </div>
            `;
        } else if (page.type === 'colophon') {
            const b = page.book;
            innerContent = `
                <div class="space-y-5 my-auto">
                    <div class="text-center pb-2 border-b border-stone-200/80">
                        <span class="text-[10px] font-mono uppercase tracking-widest text-amber-700 font-bold">Veritas Non-Fiction Reader</span>
                        <h3 class="font-serif font-black text-lg ${titleColor}">Reading Synthesis</h3>
                    </div>

                    ${b.highlightQuote ? `
                        <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-300/50 space-y-2">
                            <span class="text-[10px] font-bold text-amber-800 uppercase flex items-center gap-1">
                                <i data-lucide="quote" class="w-3 h-3"></i> Core Takeaway Quote
                            </span>
                            <p class="font-serif italic font-bold text-sm ${titleColor} leading-relaxed">
                                "${b.highlightQuote.quote}"
                            </p>
                            <p class="text-xs ${subColor} font-sans">
                                ${b.highlightQuote.translation}
                            </p>
                        </div>
                    ` : ''}

                    <div class="p-4 rounded-xl bg-blue-500/10 border border-blue-300/50 space-y-2">
                        <h4 class="font-bold text-xs text-blue-900 flex items-center gap-1.5">
                            <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
                            <span>본문 독해 완료 (Next Step)</span>
                        </h4>
                        <p class="text-xs ${bodyColor} leading-relaxed font-sans">
                            본문 챕터 전체를 모두 완독하였습니다. 우측 화살표(→)를 누르시거나 아래 버튼을 클릭하여 4단계 콘셉트 맵 요약으로 이동하세요!
                        </p>
                    </div>

                    <button type="button" onclick="window.ebookEngine.goToStep(4)" class="w-full py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer">
                        <span>4단계: 콘셉트 맵 확인하기</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            `;
        } else {
            let blocksHtml = '';
            (page.blocks || []).forEach(b => {
                if (b.type === 'chapter_header') {
                    blocksHtml += `
                        <div class="border-b border-stone-300/70 pb-2 mb-3">
                            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500">
                                ${b.chapterNum ? `Chapter ${b.chapterNum}` : 'Chapter'}
                            </span>
                            <h4 class="font-serif font-black text-lg ${titleColor}">
                                ${b.title}
                            </h4>
                        </div>
                    `;
                } else if (b.type === 'media') {
                    blocksHtml += `
                        <div class="my-3 rounded-xl overflow-hidden border border-stone-300/80 shadow-xs bg-stone-900/5">
                            <img src="${b.url}" alt="${b.alt || 'Illustration'}" class="w-full max-h-52 object-cover hover:scale-101 transition-transform duration-300">
                            <div class="p-2 bg-stone-100/90 text-stone-600 text-[10px] font-serif italic text-center border-t border-stone-200">
                                ${b.caption}
                            </div>
                        </div>
                    `;
                } else if (b.type === 'paragraph') {
                    const interactiveEn = this.makeWordsClickable(b.en, b.en, b.ko);
                    const formattedChunks = Array.isArray(b.chunks)
                        ? b.chunks.map(c => typeof c === 'string' ? c : (c.en ? `${c.en} (${c.ko || ''})` : '')).filter(Boolean).join(' / ')
                        : '';
                    const chunksHtml = this.showSlash && formattedChunks ? `
                        <div class="text-[11px] font-mono text-stone-500 bg-stone-500/10 px-2 py-0.5 rounded border border-stone-300/40 my-1 leading-relaxed">
                            <span class="font-bold text-stone-700">구문 끊기:</span> ${formattedChunks}
                        </div>
                    ` : '';
                    const koHtml = this.showKorean ? `
                        <p class="text-xs ${subColor} leading-relaxed font-sans pt-0.5">
                            ${b.ko}
                        </p>
                    ` : '';

                    blocksHtml += `
                        <div class="space-y-1 p-1.5 rounded-lg transition-colors hover:bg-stone-500/5" data-paragraph-num="${b.num || 0}">
                            <p class="font-serif leading-relaxed ${bodyColor} selection:bg-amber-200" style="font-size: ${this.fontSize}px;">
                                ${interactiveEn}
                            </p>
                            ${chunksHtml}
                            ${koHtml}
                        </div>
                    `;
                }
            });
            innerContent = `<div class="space-y-3">${blocksHtml}</div>`;
        }

        return `
            <div class="flex flex-col justify-between h-full">
                <!-- 상단 러닝 헤더 -->
                <div class="flex items-center justify-between pb-2 border-b ${footerBorder} text-[10px] font-mono ${subColor} shrink-0 mb-3">
                    <span class="truncate max-w-[200px]">${page.chapterTitle || 'Veritas English'}</span>
                    <span class="tracking-widest uppercase">${isLeft ? 'Left Page' : 'Right Page'}</span>
                </div>

                <!-- 페이지 본문 -->
                <div class="grow flex flex-col justify-center overflow-y-auto pr-1">
                    ${innerContent}
                </div>

                <!-- 하단 러닝 푸터 (페이지 번호) -->
                <div class="pt-2 border-t ${footerBorder} text-center text-[11px] font-mono ${subColor} shrink-0 mt-3 flex items-center justify-between">
                    <span class="text-[10px] text-stone-400">Veritas e-Library</span>
                    <span class="font-bold text-stone-600">— ${page.pageNumber} —</span>
                    <span class="text-[10px] text-stone-400">${page.book?.title ? page.book.title.slice(0, 16) + '...' : ''}</span>
                </div>
            </div>
        `;
    }

    renderStep3Reading() {
        const container = document.getElementById('ebook-step-view-3');
        if (!container || !this.currentBook) return;
        const book = this.currentBook;

        if (!this.paginatedPages || this.paginatedPages.length === 0) {
            this.paginatedPages = this.paginateBook(book);
        }

        const isSpread = this.readerSpreadMode === 'spread';
        const totalSpreads = isSpread ? Math.ceil(this.paginatedPages.length / 2) : this.paginatedPages.length;
        const s = Math.min(Math.max(0, this.currentSpreadIndex), Math.max(0, totalSpreads - 1));
        this.currentSpreadIndex = s;

        let leftPage = null;
        let rightPage = null;

        if (isSpread) {
            leftPage = this.paginatedPages[s * 2];
            rightPage = this.paginatedPages[s * 2 + 1] || null;
        } else {
            leftPage = this.paginatedPages[s];
        }

        const themeStyles = {
            paper: {
                bg: 'bg-white',
                border: 'border-slate-300',
                text: 'text-slate-900',
                spine: 'bg-gradient-to-r from-stone-300 via-stone-100 to-stone-300'
            },
            sepia: {
                bg: 'bg-[#fbf7ee]',
                border: 'border-[#e4d8be]',
                text: 'text-stone-900',
                spine: 'bg-gradient-to-r from-[#d8caa8] via-[#ece2ca] to-[#d8caa8]'
            },
            dark: {
                bg: 'bg-slate-900',
                border: 'border-slate-800',
                text: 'text-stone-100',
                spine: 'bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950'
            }
        };
        const currentThemeStyle = themeStyles[this.readerTheme] || themeStyles.sepia;

        const startPageNum = isSpread ? (s * 2 + 1) : (s + 1);
        const endPageNum = isSpread ? Math.min(s * 2 + 2, this.paginatedPages.length) : (s + 1);
        const progressPct = this.paginatedPages.length > 0 ? Math.round((endPageNum / this.paginatedPages.length) * 100) : 0;

        container.innerHTML = `
            <div class="space-y-4 max-w-5xl mx-auto">
                <!-- 리더기 전용 조작 툴바 및 독서 진행률 인디케이터 -->
                <div class="p-3 rounded-2xl bg-stone-100 border border-stone-300/80 text-xs text-stone-700 space-y-2">
                    <div class="flex items-center justify-between flex-wrap gap-2">
                        <!-- 오디오북 재생 컨트롤 -->
                        <div class="flex items-center gap-2">
                            <button type="button" onclick="window.ebookEngine.toggleAudioPlay()" class="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer">
                                <i data-lucide="${this.isPlayingAudio ? 'pause' : 'volume-2'}" class="w-3.5 h-3.5"></i>
                                <span>${this.isPlayingAudio ? '오디오 일시정지' : '원어민 오디오북 재생'}</span>
                            </button>
                            <span class="text-[11px] text-stone-500 font-mono hidden sm:inline">
                                US 원어민 음성
                            </span>
                        </div>

                        <!-- 뷰어 옵션 (양면/단면, 테마, 폰트크기, 구문끊기, 해석) -->
                        <div class="flex items-center gap-2 flex-wrap">
                            <button type="button" onclick="window.ebookEngine.toggleSlash()" class="px-2.5 py-1 rounded-md border text-[11px] font-bold transition-all cursor-pointer ${this.showSlash ? 'bg-blue-100 border-blue-300 text-blue-900' : 'bg-white border-stone-200 text-stone-500'}">
                                직독직해(/) ${this.showSlash ? 'ON' : 'OFF'}
                            </button>

                            <button type="button" onclick="window.ebookEngine.toggleKorean()" class="px-2.5 py-1 rounded-md border text-[11px] font-bold transition-all cursor-pointer ${this.showKorean ? 'bg-emerald-100 border-emerald-300 text-emerald-900' : 'bg-white border-stone-200 text-stone-500'}">
                                해석 ${this.showKorean ? 'ON' : 'OFF'}
                            </button>

                            <button type="button" onclick="window.ebookEngine.toggleSpreadMode()" class="px-2.5 py-1 rounded-md border border-stone-300 bg-white hover:bg-stone-50 text-[11px] font-bold text-stone-700 flex items-center gap-1 cursor-pointer" title="양면 펼침 / 단면 스크롤 전환">
                                <i data-lucide="${this.readerSpreadMode === 'spread' ? 'book-open' : 'file-text'}" class="w-3 h-3"></i>
                                <span>${this.readerSpreadMode === 'spread' ? '📖 양면 책 모드' : '📄 단면 집중 모드'}</span>
                            </button>

                            <div class="flex items-center border border-stone-300 rounded-md bg-white overflow-hidden">
                                <button type="button" onclick="window.ebookEngine.changeFontSize(-1)" class="px-2 py-1 text-stone-600 hover:bg-stone-100 font-mono font-bold text-xs" title="글꼴 축소">A-</button>
                                <span class="px-1.5 text-[10px] font-mono text-stone-500">${this.fontSize}px</span>
                                <button type="button" onclick="window.ebookEngine.changeFontSize(1)" class="px-2 py-1 text-stone-600 hover:bg-stone-100 font-mono font-bold text-xs" title="글꼴 확대">A+</button>
                            </div>

                            <div class="flex items-center gap-1">
                                <button type="button" onclick="window.ebookEngine.applyTheme('paper')" class="w-5 h-5 rounded-full bg-white border-2 ${this.readerTheme === 'paper' ? 'border-blue-900 scale-110 shadow-xs' : 'border-stone-300'} cursor-pointer" title="페이퍼 화이트 테마"></button>
                                <button type="button" onclick="window.ebookEngine.applyTheme('sepia')" class="w-5 h-5 rounded-full bg-[#f4ecd8] border-2 ${this.readerTheme === 'sepia' ? 'border-blue-900 scale-110 shadow-xs' : 'border-stone-300'} cursor-pointer" title="세피아 북 테마"></button>
                                <button type="button" onclick="window.ebookEngine.applyTheme('dark')" class="w-5 h-5 rounded-full bg-slate-900 border-2 ${this.readerTheme === 'dark' ? 'border-blue-900 scale-110 shadow-xs' : 'border-stone-300'} cursor-pointer" title="나이트 다크 테마"></button>
                            </div>
                        </div>
                    </div>

                    <!-- 독서 진행률 인디케이터 바 -->
                    <div class="flex items-center gap-3 pt-1 border-t border-stone-200/80">
                        <div class="grow bg-stone-200 rounded-full h-1.5 overflow-hidden">
                            <div class="bg-blue-900 h-full rounded-full transition-all duration-300" style="width: ${progressPct}%;"></div>
                        </div>
                        <span class="text-[11px] font-mono font-bold text-stone-600 shrink-0">
                            Page ${startPageNum}${isSpread && endPageNum !== startPageNum ? ' - ' + endPageNum : ''} / ${this.paginatedPages.length} (${progressPct}%)
                        </span>
                    </div>
                </div>

                <!-- 3D 실감형 책 펼침 스테이지 (Book Spread Stage) -->
                <div class="relative ebook-book-stage py-2 px-5 md:px-7">
                    <!-- 좌측 이전 플로팅 버튼 -->
                    <button type="button" onclick="window.ebookEngine.flipPage(-1)" ${s === 0 ? 'title="2단계: 필수 어휘로 이동"' : 'title="이전 페이지 (키보드 ←)"'} class="absolute -left-1 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-slate-300 shadow-md text-slate-700 hover:text-blue-900 hover:scale-105 active:scale-95 flex items-center justify-center z-20 transition-all cursor-pointer">
                        <i data-lucide="chevron-left" class="w-5 h-5 md:w-6 md:h-6"></i>
                    </button>

                    <!-- 양면 양장본 책 본체 -->
                    <div id="ebook-spread-stage" class="ebook-spread-hardcover ${currentThemeStyle.bg} border ${currentThemeStyle.border} min-h-[560px] flex flex-col md:flex-row transition-all duration-300">
                        ${isSpread ? `
                            <!-- 좌측 페이지 (Left Page) -->
                            <div class="w-full md:w-1/2 p-5 md:p-7 ebook-page-left min-h-[540px] flex flex-col justify-between">
                                ${this.renderSinglePageHtml(leftPage, true)}
                            </div>

                            <!-- 중앙 제본선 (Book Spine / Gutter) -->
                            <div class="hidden md:block ebook-book-spine"></div>

                            <!-- 우측 페이지 (Right Page) -->
                            <div class="w-full md:w-1/2 p-5 md:p-7 ebook-page-right min-h-[540px] flex flex-col justify-between">
                                ${this.renderSinglePageHtml(rightPage, false)}
                            </div>
                        ` : `
                            <!-- 단면 모드 (Single Page) -->
                            <div class="w-full p-6 md:p-8 min-h-[540px] flex flex-col justify-between">
                                ${this.renderSinglePageHtml(leftPage, true)}
                            </div>
                        `}
                    </div>

                    <!-- 우측 다음 플로팅 버튼 -->
                    <button type="button" onclick="window.ebookEngine.flipPage(1)" ${s >= totalSpreads - 1 ? 'title="4단계: 콘셉트 맵으로 이동"' : 'title="다음 페이지 (키보드 →)"'} class="absolute -right-1 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-900 border border-blue-950 shadow-md text-white hover:bg-blue-800 hover:scale-105 active:scale-95 flex items-center justify-center z-20 transition-all cursor-pointer">
                        <i data-lucide="chevron-right" class="w-5 h-5 md:w-6 md:h-6"></i>
                    </button>
                </div>

                <!-- 하단 스프레드 점프 네비게이터 & 단계 이동 -->
                <div class="flex items-center justify-between pt-2 flex-wrap gap-2">
                    <button type="button" onclick="window.ebookEngine.goToStep(2)" class="px-4 py-2 rounded-xl border border-stone-300 text-xs font-bold text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer">
                        ← 이전: 필수 어휘
                    </button>

                    <!-- 페이지 스프레드 점프 바 -->
                    <div class="flex items-center gap-1.5 overflow-x-auto py-1 max-w-[500px]">
                        ${Array.from({ length: totalSpreads }).map((_, idx) => {
                            const pStart = isSpread ? (idx * 2 + 1) : (idx + 1);
                            const pEnd = isSpread ? Math.min(idx * 2 + 2, this.paginatedPages.length) : (idx + 1);
                            const isCurrent = idx === s;
                            return `
                                <button type="button" onclick="window.ebookEngine.jumpToSpread(${idx})" class="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all cursor-pointer ${isCurrent ? 'bg-blue-900 text-white shadow-xs' : 'bg-stone-100 text-stone-600 hover:bg-stone-200 border border-stone-200'}">
                                    ${pStart}${isSpread && pEnd !== pStart ? '-' + pEnd : ''}
                                </button>
                            `;
                        }).join('')}
                    </div>

                    <button type="button" onclick="window.ebookEngine.goToStep(4)" class="px-5 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs flex items-center gap-2 shadow-sm transition-all cursor-pointer">
                        <span>4단계: 콘셉트 맵</span>
                        <i data-lucide="arrow-right" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
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
                                <p class="text-xs text-slate-600 leading-relaxed font-sans">${node.desc || node.description || ''}</p>
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
        const quizzes = this.currentBook.quizzes || this.currentBook.quiz || [];

        container.innerHTML = `
            <div class="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-200">
                <div class="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div>
                        <h3 class="font-serif font-black text-xl text-slate-900">
                            🧠 원서형 심층 독해력 퀴즈
                        </h3>
                        <p class="text-xs text-slate-500 mt-0.5">
                            수능 킬러 & SAT/TOEFL 유형의 엄선된 핵심 독해력 퀴즈로 이해도를 정밀 검증합니다.
                        </p>
                    </div>
                    <span class="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-900 text-xs font-mono font-bold border border-indigo-200">
                        총 ${quizzes.length}문항
                    </span>
                </div>

                <!-- 퀴즈 리스트 -->
                <div class="space-y-6">
                    ${quizzes.map((q, idx) => {
                        const quizId = q.id !== undefined ? q.id : idx;
                        const userAns = this.userQuizAnswers[quizId];
                        const isSubmitted = userAns !== undefined;
                        const isCorrect = userAns === q.answer;
                        const qTypeLabel = (q.type || 'COMPREHENSION').replace('_', ' ').toUpperCase();

                        return `
                            <div class="p-5 rounded-2xl bg-white border ${isSubmitted ? (isCorrect ? 'border-emerald-300 bg-emerald-50/20' : 'border-red-300 bg-red-50/20') : 'border-slate-200'} shadow-xs space-y-3">
                                <div class="flex items-center justify-between">
                                    <span class="px-2 py-0.5 rounded text-[10px] font-bold font-mono ${isSubmitted ? (isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-red-100 text-red-900') : 'bg-slate-100 text-slate-600'}">
                                        Q${idx + 1} • ${qTypeLabel}
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
                                            <button type="button" onclick="window.ebookEngine.answerQuiz('${quizId}', ${optIdx})" class="w-full p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 cursor-pointer ${btnClass}" ${isSubmitted ? 'disabled' : ''}>
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
        
        let quotes = [];
        if (Array.isArray(book.keyQuotes) && book.keyQuotes.length > 0) {
            quotes = book.keyQuotes;
        } else if (Array.isArray(book.highlightQuote)) {
            quotes = book.highlightQuote;
        } else if (book.highlightQuote) {
            quotes = [book.highlightQuote];
        }
        quotes = quotes.map(q => ({
            en: q.en || q.quote || '',
            ko: q.ko || q.translation || '',
            author: q.author || ''
        }));

        let credits = [];
        if (Array.isArray(book.content?.photoCredits)) {
            credits = book.content.photoCredits;
        } else if (Array.isArray(book.photoCredits)) {
            credits = book.photoCredits;
        } else if (typeof book.photoCredits === 'string') {
            credits = [{ figureNum: 'Primary Plate', title: 'Archival & Curatorial Sources', license: 'Verified Source', source: book.photoCredits, description: 'Historical artifacts, architectural photographs and cultural illustrations.' }];
        }
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
                            ${q.author ? `<p class="text-[11px] font-mono text-amber-800 font-bold">— ${q.author}</p>` : ''}
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
                                    <span class="font-bold font-mono text-stone-800">${c.figureNum || 'Figure'}: ${c.title || 'Source'}</span>
                                    <span class="text-[10px] text-stone-500 font-mono">${c.license || 'License'}</span>
                                </div>
                                ${c.description ? `<p class="text-[11px] text-stone-600 font-sans leading-relaxed">${c.description}</p>` : ''}
                                <div class="text-[10px] text-blue-700 font-mono truncate">
                                    출처: ${c.source || ''}
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
