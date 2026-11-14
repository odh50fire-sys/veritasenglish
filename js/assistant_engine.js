/**
 * Veritas English - 스마트 올인원 영어 학습 어시스턴트 (Study Copilot Engine)
 * 1. 전국 중·고등학교 등록 및 채택 교과서 / 내신 지필평가 D-Day 관리
 * 2. 외부 시중 교재(마더텅, 자이스토리, EBS, 쎄듀, 능률 등) 메타데이터 연동 및 스케줄 배정
 * 3. 홈 대시보드 실시간 원클릭 완료 체크 및 진도율 동기화
 */

class AssistantEngine {
    constructor() {
        this.selectedBookPreset = null;
        this.activeCatalogTab = 'textbooks';
        this.activeCategoryFilter = 'all';
        this.catalogDisplayLimit = 24;
        this.init();
    }

    init() {
        // 전역 바인딩
        window.assistantEngine = this;
    }

    // ------------------------------------------------------------------------
    // 1. 학교 프로필 & 내신 지필평가 D-Day 관리
    // ------------------------------------------------------------------------

    openSchoolProfileModal() {
        const modal = document.getElementById('modal-school-profile');
        if (!modal) return;

        const profile = window.storage ? window.storage.getSchoolProfile() : {};
        const schoolInput = document.getElementById('school-search-input');
        const schoolTypeSelect = document.getElementById('school-type-select');
        const gradeSelect = document.getElementById('school-grade-select');
        const semesterSelect = document.getElementById('school-semester-select');
        const textbookSelect = document.getElementById('school-textbook-select');
        const subTextbookInput = document.getElementById('school-subtextbook-input');
        const examTitleInput = document.getElementById('school-exam-title');
        const examDateInput = document.getElementById('school-exam-date');
        const examScopeInput = document.getElementById('school-exam-scope');

        if (schoolInput) schoolInput.value = profile.schoolName || '';
        if (schoolTypeSelect) schoolTypeSelect.value = profile.schoolType || 'middle';
        if (gradeSelect) gradeSelect.value = profile.grade || 2;
        if (semesterSelect) semesterSelect.value = profile.semester || 1;
        if (subTextbookInput) subTextbookInput.value = profile.subTextbook || '';

        this.updateTextbookOptions(profile.schoolType || 'middle');
        if (textbookSelect && profile.textbook) {
            textbookSelect.value = profile.textbook.id || '';
        }

        if (profile.examDDay) {
            if (examTitleInput) examTitleInput.value = profile.examDDay.title || '';
            if (examDateInput) examDateInput.value = profile.examDDay.targetDate || '';
            if (examScopeInput) examScopeInput.value = profile.examDDay.examScope || '';
        } else {
            if (examTitleInput) examTitleInput.value = '1학기 중간고사';
            if (examDateInput) examDateInput.value = '';
            if (examScopeInput) examScopeInput.value = '';
        }

        modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    closeSchoolProfileModal() {
        const modal = document.getElementById('modal-school-profile');
        if (modal) modal.classList.add('hidden');
    }

    onSchoolTypeChanged(newType) {
        this.updateTextbookOptions(newType);
    }

    updateTextbookOptions(schoolType = 'middle') {
        const select = document.getElementById('school-textbook-select');
        if (!select) return;

        const tbList = (window.KOREAN_TEXTBOOK_PUBLISHERS && window.KOREAN_TEXTBOOK_PUBLISHERS[schoolType]) || [];
        select.innerHTML = `
            <option value="">-- 채택 영어 교과서 선택 --</option>
            ${tbList.map(tb => `
                <option value="${tb.id}">${tb.publisher} - ${tb.title} (${tb.author})</option>
            `).join('')}
            <option value="custom">기타 / 학교 자체 제작 교재</option>
        `;
    }

    onSchoolSearchInput(query) {
        const dropdown = document.getElementById('school-search-results');
        if (!dropdown) return;

        const cleanQ = String(query || '').trim().toLowerCase();
        if (cleanQ.length < 1) {
            dropdown.classList.add('hidden');
            dropdown.innerHTML = '';
            return;
        }

        const db = window.KOREAN_SCHOOLS_DATABASE || [];
        const matches = db.filter(s => s.name.toLowerCase().includes(cleanQ) || s.region.toLowerCase().includes(cleanQ)).slice(0, 8);

        if (matches.length === 0) {
            dropdown.innerHTML = `
                <div class="px-3 py-2.5 text-xs text-slate-500 flex items-center justify-between">
                    <span>직접 입력: "<strong>${query}</strong>"</span>
                    <button type="button" class="text-blue-900 font-bold hover:underline" onclick="window.assistantEngine.selectSchoolDirect('${query.replace(/'/g, "\\'")}')">선택</button>
                </div>
            `;
            dropdown.classList.remove('hidden');
            return;
        }

        dropdown.innerHTML = matches.map(s => `
            <div class="px-3 py-2 hover:bg-indigo-50/80 cursor-pointer flex items-center justify-between border-b border-slate-100 last:border-b-0 transition-colors" onclick="window.assistantEngine.selectSchool('${s.name}', '${s.type}')">
                <div class="flex items-center gap-2">
                    <span class="w-6 h-6 rounded-lg ${s.type === 'middle' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-900'} flex items-center justify-center text-[10px] font-bold">
                        ${s.type === 'middle' ? '중' : '고'}
                    </span>
                    <span class="text-xs font-bold text-slate-800">${s.name}</span>
                </div>
                <span class="text-[11px] font-sans text-slate-400">${s.region}</span>
            </div>
        `).join('');

        dropdown.classList.remove('hidden');
    }

    selectSchool(name, type) {
        const input = document.getElementById('school-search-input');
        const typeSelect = document.getElementById('school-type-select');
        const dropdown = document.getElementById('school-search-results');

        if (input) input.value = name;
        if (typeSelect) {
            typeSelect.value = type;
            this.updateTextbookOptions(type);
        }
        if (dropdown) dropdown.classList.add('hidden');
    }

    selectSchoolDirect(name) {
        const input = document.getElementById('school-search-input');
        const dropdown = document.getElementById('school-search-results');
        if (input) input.value = name;
        if (dropdown) dropdown.classList.add('hidden');
    }

    saveSchoolProfile() {
        const schoolInput = document.getElementById('school-search-input');
        const schoolTypeSelect = document.getElementById('school-type-select');
        const gradeSelect = document.getElementById('school-grade-select');
        const semesterSelect = document.getElementById('school-semester-select');
        const textbookSelect = document.getElementById('school-textbook-select');
        const subTextbookInput = document.getElementById('school-subtextbook-input');
        const examTitleInput = document.getElementById('school-exam-title');
        const examDateInput = document.getElementById('school-exam-date');
        const examScopeInput = document.getElementById('school-exam-scope');

        const schoolType = schoolTypeSelect ? schoolTypeSelect.value : 'middle';
        const tbList = (window.KOREAN_TEXTBOOK_PUBLISHERS && window.KOREAN_TEXTBOOK_PUBLISHERS[schoolType]) || [];
        const selectedTb = tbList.find(t => t.id === (textbookSelect ? textbookSelect.value : '')) || null;

        let examDDay = null;
        if (examDateInput && examDateInput.value) {
            examDDay = {
                title: examTitleInput ? examTitleInput.value.trim() || '지필평가' : '지필평가',
                targetDate: examDateInput.value,
                examScope: examScopeInput ? examScopeInput.value.trim() : ''
            };
        }

        const newProfile = {
            schoolName: schoolInput ? schoolInput.value.trim() : '',
            schoolType,
            grade: gradeSelect ? Number(gradeSelect.value) : 2,
            semester: semesterSelect ? Number(semesterSelect.value) : 1,
            textbook: selectedTb,
            subTextbook: subTextbookInput ? subTextbookInput.value.trim() : '',
            examDDay
        };

        if (window.storage) {
            window.storage.saveSchoolProfile(newProfile);
        }

        this.closeSchoolProfileModal();

        if (typeof confetti === 'function') {
            confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
        }

        alert(`🏫 내 학교 & 내신 시험 정보가 성공적으로 등록되었습니다!\n\n• 학교: ${newProfile.schoolName || '미등록'} (${newProfile.schoolType === 'middle' ? '중학교' : '고등학교'} ${newProfile.grade}학년)\n• 채택 교과서: ${selectedTb ? selectedTb.title : '자유 설정'}\n${examDDay ? `• 목표 시험: ${examDDay.title} (${examDDay.targetDate})` : ''}`);

        this.renderSchoolDDayBanner();
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }

    renderSchoolDDayBanner() {
        const container = document.getElementById('dash-school-dday-banner');
        if (!container || !window.storage) return;

        const profile = window.storage.getSchoolProfile();
        if (!profile || (!profile.schoolName && !profile.examDDay)) {
            container.classList.add('hidden');
            return;
        }

        const todayStr = window.storage.getTodayDateString();
        let dDayText = '';
        let dDayBadgeClass = 'bg-indigo-100 text-indigo-900 border-indigo-200';
        let daysDiff = 0;

        if (profile.examDDay && profile.examDDay.targetDate) {
            const todayD = new Date(todayStr);
            const targetD = new Date(profile.examDDay.targetDate);
            daysDiff = Math.ceil((targetD - todayD) / (1000 * 60 * 60 * 24));

            if (daysDiff > 0) {
                dDayText = `D-${daysDiff}`;
                if (daysDiff <= 7) {
                    dDayBadgeClass = 'bg-rose-100 text-rose-900 border-rose-300 animate-pulse';
                } else if (daysDiff <= 14) {
                    dDayBadgeClass = 'bg-amber-100 text-amber-900 border-amber-300';
                }
            } else if (daysDiff === 0) {
                dDayText = 'D-DAY 오늘!';
                dDayBadgeClass = 'bg-rose-500 text-white border-rose-600 animate-bounce';
            } else {
                dDayText = `D+${Math.abs(daysDiff)} 종료`;
                dDayBadgeClass = 'bg-slate-100 text-slate-600 border-slate-200';
            }
        }

        const schoolLabel = profile.schoolName ? `${profile.schoolName} ${profile.grade}학년` : '내 학교 등록하기';
        const textbookLabel = profile.textbook ? profile.textbook.title : (profile.subTextbook || '교과서 미선택');
        const examLabel = profile.examDDay ? profile.examDDay.title : '시험일 등록';

        container.classList.remove('hidden');
        container.innerHTML = `
            <div class="p-4 rounded-2xl bg-gradient-to-r from-indigo-900 via-blue-900 to-slate-900 text-white shadow-sm flex flex-wrap items-center justify-between gap-4 border border-indigo-800">
                <div class="flex items-center gap-3">
                    <div class="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-xl shrink-0">
                        🏫
                    </div>
                    <div>
                        <div class="flex items-center gap-2 mb-0.5">
                            <span class="px-2 py-0.5 rounded-md bg-white/20 text-white text-[10px] font-mono font-bold">MY SCHOOL COPILOT</span>
                            <span class="text-xs text-indigo-200 font-bold">${schoolLabel}</span>
                        </div>
                        <h4 class="font-serif font-black text-sm sm:text-base text-white flex items-center gap-2">
                            <span>${examLabel}</span>
                            ${dDayText ? `<span class="px-2.5 py-0.5 rounded-full font-mono text-xs font-bold border ${dDayBadgeClass}">${dDayText}</span>` : ''}
                        </h4>
                        <p class="text-[11px] text-slate-300 font-sans mt-0.5">
                            📚 채택 교과서: <span class="text-amber-300 font-semibold">${textbookLabel}</span>
                            ${profile.examDDay && profile.examDDay.examScope ? ` • 범위: <span class="text-slate-200">${profile.examDDay.examScope}</span>` : ''}
                        </p>
                    </div>
                </div>

                <div class="flex items-center gap-2">
                    <button type="button" onclick="window.assistantEngine.openSchoolProfileModal()" class="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-serif font-bold border border-white/20 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs">
                        <i data-lucide="edit-3" class="w-3.5 h-3.5 text-amber-300"></i>
                        <span>내신 정보 수정</span>
                    </button>
                    <button type="button" onclick="window.app && window.app.switchTab('reading')" class="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-serif font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95">
                        <i data-lucide="graduation-cap" class="w-3.5 h-3.5"></i>
                        <span>내신 대비 지문 풀기</span>
                    </button>
                </div>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
    }

    // ------------------------------------------------------------------------
    // 2. 외부 시중 교재 & 학원 과제 등록 모달
    // ------------------------------------------------------------------------

    openExternalStudyModal() {
        const modal = document.getElementById('modal-external-study-register');
        if (!modal) return;

        this.selectedBookPreset = null;
        this.clearBookSearch();
        this.renderTocPreview(null);
        this.catalogDisplayLimit = 24;
        this.switchStudyRegisterTab('textbooks');

        const startDateInput = document.getElementById('ext-study-start-date');
        const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
        if (startDateInput) startDateInput.value = todayStr;

        this.updateSchedulePreview();

        modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    closeExternalStudyModal() {
        const modal = document.getElementById('modal-external-study-register');
        if (modal) modal.classList.add('hidden');
    }

    // ------------------------------------------------------------------------
    // 시중 교재 & 영어 원서 실시간 검색 & 정규 목차(TOC) 연동 메서드
    // ------------------------------------------------------------------------

    getAllAvailableBooks() {
        const popular = window.POPULAR_ENGLISH_TEXTBOOKS || [];
        const expanded = window.EXPANDED_BOOKS_CATALOG || [];
        const map = new Map();
        popular.forEach(b => map.set(b.id, b));
        expanded.forEach(b => {
            if (!map.has(b.id)) map.set(b.id, b);
        });
        return Array.from(map.values());
    }

    ensureBookTableOfContents(book) {
        if (!book) return [];
        if (Array.isArray(book.tableOfContents) && book.tableOfContents.length > 0) {
            return book.tableOfContents;
        }

        const total = Math.max(1, Number(book.totalUnits) || 15);
        const ut = book.unitType || 'chapter';
        const isNovel = book.isOriginalReader || book.category === 'novel' || book.category === 'reader';
        const toc = [];

        for (let i = 1; i <= total; i++) {
            if (isNovel) {
                toc.push(`Chapter ${i}`);
            } else if (ut === '강') {
                toc.push(`${i}강`);
            } else if (ut === 'day' || ut === 'DAY') {
                toc.push(`DAY ${i}`);
            } else if (ut === '회차') {
                toc.push(`제${i}회 실전 모의고사`);
            } else if (ut === 'unit' || ut === '단원') {
                toc.push(`Unit ${i}`);
            } else {
                toc.push(`Chapter ${i}`);
            }
        }
        book.tableOfContents = toc;
        return toc;
    }

    onBookSearchInput(query) {
        const dropdown = document.getElementById('ext-book-search-results');
        const clearBtn = document.getElementById('ext-book-search-clear');
        if (!dropdown) return;

        const cleanQ = String(query || '').trim().toLowerCase();
        if (clearBtn) clearBtn.classList.toggle('hidden', cleanQ.length === 0);

        if (cleanQ.length < 1) {
            dropdown.classList.add('hidden');
            dropdown.innerHTML = '';
            return;
        }

        const books = this.getAllAvailableBooks();
        const matches = [];
        for (let i = 0; i < books.length; i++) {
            const b = books[i];
            const titleL = (b.title || '').toLowerCase();
            const pubL = (b.publisher || '').toLowerCase();
            const catL = (b.category || '').toLowerCase();
            const grL = (b.gradeTag || '').toLowerCase();
            const tagMatch = Array.isArray(b.tags) && b.tags.some(t => t.toLowerCase().includes(cleanQ));

            if (titleL.includes(cleanQ) || pubL.includes(cleanQ) || catL.includes(cleanQ) || grL.includes(cleanQ) || tagMatch) {
                matches.push(b);
                if (matches.length >= 15) break;
            }
        }

        if (matches.length === 0) {
            dropdown.innerHTML = `
                <div class="px-4 py-3 text-xs text-slate-500 flex items-center justify-between">
                    <span>일치하는 등록 교재/원서가 없습니다: "<strong>${query}</strong>"</span>
                    <button type="button" class="text-indigo-900 font-bold hover:underline cursor-pointer" onclick="window.assistantEngine.selectCustomBookDirect('${query.replace(/'/g, "\\'")}')">
                        직접 도서명으로 등록 →
                    </button>
                </div>
            `;
            dropdown.classList.remove('hidden');
            return;
        }

        dropdown.innerHTML = matches.map(b => {
            const isOriginal = b.isOriginalReader || b.category === 'novel' || b.category === 'reader';
            return `
                <div class="px-4 py-3 hover:bg-indigo-50/70 cursor-pointer flex items-center justify-between gap-3 transition-colors" onclick="window.assistantEngine.selectBookFromSearch('${b.id}')">
                    <div class="flex items-center gap-3">
                        <span class="text-2xl shrink-0">${b.coverEmoji || (isOriginal ? '📖' : '📘')}</span>
                        <div>
                            <div class="flex items-center gap-1.5 flex-wrap">
                                <span class="px-1.5 py-0.2 rounded ${isOriginal ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'} text-[10px] font-mono font-bold">${isOriginal ? '원서' : '교재'}</span>
                                <span class="px-1.5 py-0.2 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-bold">${b.gradeTag}</span>
                                <span class="text-[11px] font-bold text-slate-500">${b.publisher}</span>
                                <span class="px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">목차 연동 (${b.totalUnits}${b.unitType})</span>
                            </div>
                            <h5 class="font-serif font-bold text-xs text-slate-900 line-clamp-1 mt-0.5">${b.title}</h5>
                        </div>
                    </div>
                    <span class="text-indigo-700 text-xs font-bold shrink-0">선택 →</span>
                </div>
            `;
        }).join('');
        dropdown.classList.remove('hidden');
    }

    clearBookSearch() {
        const input = document.getElementById('ext-book-search-input');
        const dropdown = document.getElementById('ext-book-search-results');
        const clearBtn = document.getElementById('ext-book-search-clear');
        if (input) input.value = '';
        if (dropdown) {
            dropdown.innerHTML = '';
            dropdown.classList.add('hidden');
        }
        if (clearBtn) clearBtn.classList.add('hidden');
    }

    selectBookFromSearch(bookId) {
        const books = this.getAllAvailableBooks();
        const book = books.find(b => b.id === bookId);
        if (!book) return;

        const input = document.getElementById('ext-book-search-input');
        const dropdown = document.getElementById('ext-book-search-results');
        const clearBtn = document.getElementById('ext-book-search-clear');
        if (input) input.value = book.title;
        if (dropdown) dropdown.classList.add('hidden');
        if (clearBtn) clearBtn.classList.remove('hidden');

        this.selectBestsellerBook(bookId);
    }

    selectCustomBookDirect(title) {
        const input = document.getElementById('ext-book-search-input');
        const dropdown = document.getElementById('ext-book-search-results');
        if (input) input.value = title;
        if (dropdown) dropdown.classList.add('hidden');

        const titleInput = document.getElementById('ext-study-title');
        if (titleInput) titleInput.value = title;
        this.selectedBookPreset = null;
        this.renderTocPreview(null);
        this.updateSchedulePreview();
    }

    renderTocPreview(book) {
        const container = document.getElementById('ext-book-toc-preview-container');
        if (!container) return;

        if (!book || !Array.isArray(book.tableOfContents) || book.tableOfContents.length === 0) {
            container.classList.add('hidden');
            container.innerHTML = '';
            return;
        }

        const toc = book.tableOfContents;
        container.classList.remove('hidden');
        container.innerHTML = `
            <div class="flex items-center justify-between pb-1.5 border-b border-indigo-200/60">
                <div class="flex items-center gap-1.5 font-serif font-bold text-xs text-indigo-950">
                    <span class="text-base">${book.coverEmoji || '📖'}</span>
                    <span>정규 목차 연동 완료 (${toc.length}단원 완비)</span>
                </div>
                <span class="text-[10px] text-indigo-700 font-mono font-medium">플래너 배정 시 일자별 목차가 자동 매칭됩니다</span>
            </div>
            <div class="max-h-36 overflow-y-auto space-y-1 font-mono text-[11px] text-slate-700 bg-white/90 p-2.5 rounded-xl border border-indigo-100">
                ${toc.map((chap, idx) => `
                    <div class="flex items-center gap-2 py-0.5 border-b border-slate-50 last:border-0">
                        <span class="w-8 text-center px-1 py-0.2 rounded bg-indigo-50 text-indigo-800 text-[10px] font-bold shrink-0">#${idx + 1}</span>
                        <span class="truncate text-slate-800">${chap}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    switchStudyRegisterTab(tabName) {
        if (tabName === 'popular') tabName = 'textbooks';
        this.activeCatalogTab = tabName;

        document.querySelectorAll('.ext-register-tab-btn').forEach(btn => {
            const isMatch = (btn.dataset.tab === tabName);
            btn.className = `ext-register-tab-btn px-4 py-2.5 font-serif font-bold text-xs border-b-2 transition-all cursor-pointer whitespace-nowrap ${
                isMatch ? 'text-indigo-900 border-indigo-900' : 'text-slate-500 border-transparent hover:text-slate-800'
            }`;
        });

        const catalogSec = document.getElementById('ext-tab-popular');
        const customSec = document.getElementById('ext-tab-custom');

        if (tabName === 'custom') {
            if (catalogSec) catalogSec.classList.add('hidden');
            if (customSec) customSec.classList.remove('hidden');
        } else {
            if (catalogSec) catalogSec.classList.remove('hidden');
            if (customSec) customSec.classList.add('hidden');

            const labelEl = document.getElementById('catalog-section-label');
            if (labelEl) {
                labelEl.textContent = (tabName === 'textbooks') ? '대표 시중 교재 (708권):' : '영어 원서 & 리더스 (7,452권):';
            }

            this.activeCategoryFilter = 'all';
            this.catalogDisplayLimit = 24;
            this.renderCatalogFilterChips();
            this.renderBestsellerGrid('all');
        }
    }

    renderCatalogFilterChips() {
        const container = document.getElementById('catalog-filter-chips-container');
        if (!container) return;

        let chips = [];
        if (this.activeCatalogTab === 'textbooks') {
            chips = [
                { id: 'all', label: '전체 (708)' },
                { id: 'grammar', label: '문법/어법' },
                { id: 'reading', label: '독해/구문' },
                { id: 'sat', label: '수능/EBS' },
                { id: 'school_task', label: '내신/기출' },
                { id: 'academy', label: '대치동 인강' }
            ];
        } else {
            chips = [
                { id: 'all', label: '전체 (7,452)' },
                { id: 'oxford', label: 'Oxford (1,339)' },
                { id: 'penguin', label: 'Penguin (1,300)' },
                { id: 'cambridge', label: 'Cambridge & Mac' },
                { id: 'chapter', label: '챕터북/판타지' },
                { id: 'newbery', label: '뉴베리 수상작' },
                { id: 'classics', label: '세계 명작/고전' },
                { id: 'bestseller', label: '현대 베스트셀러' }
            ];
        }

        container.innerHTML = chips.map(c => {
            const isMatch = (this.activeCategoryFilter === c.id);
            return `
                <button type="button" data-cat="${c.id}" onclick="window.assistantEngine.filterBestsellers('${c.id}')" class="bestseller-filter-chip px-2.5 py-0.5 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                    isMatch ? 'bg-indigo-900 text-white border-indigo-900' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }">${c.label}</button>
            `;
        }).join('');
    }

    filterBestsellers(category) {
        this.activeCategoryFilter = category;
        this.catalogDisplayLimit = 24;
        this.renderCatalogFilterChips();
        this.renderBestsellerGrid(category);
    }

    loadMoreCatalogBooks() {
        this.catalogDisplayLimit += 24;
        this.renderBestsellerGrid(this.activeCategoryFilter);
    }

    renderBestsellerGrid(categoryFilter = this.activeCategoryFilter || 'all') {
        const container = document.getElementById('bestseller-books-grid');
        const moreContainer = document.getElementById('catalog-more-btn-container');
        if (!container) return;

        const allBooks = this.getAllAvailableBooks();
        let filtered = [];

        if (this.activeCatalogTab === 'textbooks') {
            const textbooks = allBooks.filter(b => !b.isOriginalReader && b.category !== 'novel' && b.category !== 'reader');
            if (categoryFilter === 'all') {
                const popularIds = new Set((window.POPULAR_ENGLISH_TEXTBOOKS || []).map(b => b.id));
                const populars = textbooks.filter(b => popularIds.has(b.id));
                const others = textbooks.filter(b => !popularIds.has(b.id));
                filtered = [...populars, ...others];
            } else {
                filtered = textbooks.filter(b => b.category === categoryFilter);
            }
        } else {
            const readers = allBooks.filter(b => b.isOriginalReader || b.category === 'novel' || b.category === 'reader');
            if (categoryFilter === 'all') {
                filtered = readers;
            } else if (categoryFilter === 'oxford') {
                filtered = readers.filter(b => (b.publisher || '').toLowerCase().includes('oxford') || (b.tags || []).some(t => /oxford/i.test(t)));
            } else if (categoryFilter === 'penguin') {
                filtered = readers.filter(b => (b.publisher || '').toLowerCase().includes('penguin') || (b.tags || []).some(t => /penguin/i.test(t)));
            } else if (categoryFilter === 'cambridge') {
                filtered = readers.filter(b => (b.publisher || '').toLowerCase().includes('cambridge') || (b.publisher || '').toLowerCase().includes('macmillan'));
            } else if (categoryFilter === 'chapter') {
                filtered = readers.filter(b => (b.publisher || '').toLowerCase().includes('scholastic') || (b.tags || []).some(t => /harry|wimpy|narnia|tree|fantasy|chapter/i.test(t)));
            } else if (categoryFilter === 'newbery') {
                filtered = readers.filter(b => (b.publisher || '').toLowerCase().includes('newbery') || (b.tags || []).some(t => /newbery/i.test(t)));
            } else if (categoryFilter === 'classics') {
                filtered = readers.filter(b => (b.publisher || '').toLowerCase().includes('gutenberg') || (b.tags || []).some(t => /classic|heritage|gutenberg/i.test(t)));
            } else if (categoryFilter === 'bestseller') {
                filtered = readers.filter(b => (b.publisher || '').toLowerCase().includes('bestseller') || (b.tags || []).some(t => /bestseller/i.test(t)));
            } else {
                filtered = readers;
            }
        }

        const sliced = filtered.slice(0, this.catalogDisplayLimit);

        if (sliced.length === 0) {
            container.innerHTML = `
                <div class="col-span-full py-8 text-center text-xs text-slate-400">
                    해당 분류의 도서가 없습니다.
                </div>
            `;
            if (moreContainer) moreContainer.innerHTML = '';
            return;
        }

        container.innerHTML = sliced.map(b => {
            const isSelected = (this.selectedBookPreset && this.selectedBookPreset.id === b.id);
            const isOriginal = b.isOriginalReader || b.category === 'novel' || b.category === 'reader';
            return `
                <div class="p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected 
                        ? 'border-indigo-600 bg-indigo-50/70 shadow-sm ring-2 ring-indigo-500/20' 
                        : 'border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xs'
                }" onclick="window.assistantEngine.selectBestsellerBook('${b.id}')">
                    <div>
                        <div class="flex items-start justify-between gap-2 mb-2">
                            <span class="text-2xl">${b.coverEmoji || (isOriginal ? '📖' : '📘')}</span>
                            <span class="px-2 py-0.5 rounded-md ${isOriginal ? 'bg-purple-100 text-purple-800' : 'bg-slate-100 text-slate-700'} text-[10px] font-mono font-bold">${b.gradeTag}</span>
                        </div>
                        <h5 class="font-serif font-bold text-xs text-slate-900 line-clamp-1" title="${b.title}">${b.title}</h5>
                        <p class="text-[11px] text-slate-500 font-sans mt-0.5 line-clamp-1">${b.publisher} • 총 ${b.totalUnits}${b.unitType}</p>
                    </div>
                    <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <span class="text-indigo-700 font-bold">권장: 하루 1${b.unitType}</span>
                        <span class="text-slate-400 font-bold">${isSelected ? '✓ 선택됨' : '선택 →'}</span>
                    </div>
                </div>
            `;
        }).join('');

        if (moreContainer) {
            if (sliced.length < filtered.length) {
                moreContainer.innerHTML = `
                    <button type="button" onclick="window.assistantEngine.loadMoreCatalogBooks()" class="px-4 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-bold text-indigo-900 shadow-2xs cursor-pointer transition-all active:scale-95">
                        ➕ 더 보기 (현재 ${sliced.length} / 총 ${filtered.length.toLocaleString()}권)
                    </button>
                `;
            } else {
                moreContainer.innerHTML = `
                    <span class="text-[10px] text-slate-400 font-mono">전체 ${filtered.length.toLocaleString()}권 표시 완료</span>
                `;
            }
        }
    }

    selectBestsellerBook(bookId) {
        const books = this.getAllAvailableBooks();
        const book = books.find(b => b.id === bookId);
        if (!book) return;

        this.ensureBookTableOfContents(book);
        this.selectedBookPreset = book;

        // 폼 입력란 자동 채우기
        const titleInput = document.getElementById('ext-study-title');
        const publisherInput = document.getElementById('ext-study-publisher');
        const categorySelect = document.getElementById('ext-study-category');
        const totalUnitsInput = document.getElementById('ext-study-total-units');
        const unitTypeSelect = document.getElementById('ext-study-unit-type');
        const dailyAmountInput = document.getElementById('ext-study-daily-amount');

        if (titleInput) titleInput.value = book.title;
        if (publisherInput) publisherInput.value = book.publisher;
        if (categorySelect) categorySelect.value = book.category;
        if (totalUnitsInput) totalUnitsInput.value = book.totalUnits;
        if (unitTypeSelect) unitTypeSelect.value = book.unitType;
        if (dailyAmountInput) dailyAmountInput.value = book.defaultDaily || 1;

        this.renderTocPreview(book);
        this.renderBestsellerGrid();
        this.updateSchedulePreview();
    }

    onExtFormChanged() {
        this.updateSchedulePreview();
    }

    getSelectedDays() {
        const checked = [];
        document.querySelectorAll('.ext-day-check:checked').forEach(cb => {
            checked.push(Number(cb.value));
        });
        return checked;
    }

    setDaysPreset(preset) {
        const daysMap = {
            all: [1, 2, 3, 4, 5, 6, 0],
            weekdays: [1, 2, 3, 4, 5],
            mwf: [1, 3, 5],
            tt: [2, 4],
            tts: [2, 4, 6]
        };
        const targets = daysMap[preset] || [1, 2, 3, 4, 5, 6, 0];
        document.querySelectorAll('.ext-day-check').forEach(cb => {
            cb.checked = targets.includes(Number(cb.value));
        });
        this.updateSchedulePreview();
    }

    updateSchedulePreview() {
        if (!window.storage) return;

        const totalUnitsInput = document.getElementById('ext-study-total-units');
        const dailyAmountInput = document.getElementById('ext-study-daily-amount');
        const unitTypeSelect = document.getElementById('ext-study-unit-type');
        const startDateInput = document.getElementById('ext-study-start-date');

        const totalUnits = Number(totalUnitsInput ? totalUnitsInput.value : 30) || 30;
        const dailyAmount = Math.max(1, Number(dailyAmountInput ? dailyAmountInput.value : 1) || 1);
        const unitType = unitTypeSelect ? unitTypeSelect.value : 'page';
        const startDate = (startDateInput && startDateInput.value) ? startDateInput.value : window.storage.getTodayDateString();
        const selectedDays = this.getSelectedDays();

        const previewSessionsEl = document.getElementById('ext-preview-sessions');
        const previewDatesEl = document.getElementById('ext-preview-dates');
        const previewSummaryEl = document.getElementById('ext-preview-summary');

        if (selectedDays.length === 0) {
            if (previewSessionsEl) previewSessionsEl.textContent = '0회차 (요일 선택 필요)';
            if (previewDatesEl) previewDatesEl.textContent = '학습을 진행할 요일을 1개 이상 선택해 주세요.';
            return;
        }

        const totalSessions = Math.ceil(totalUnits / dailyAmount);
        const scheduledDates = window.storage.calculateScheduledDates(startDate, totalSessions, selectedDays);

        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
        const startD = new Date(scheduledDates[0] || startDate);
        const endD = new Date(scheduledDates[scheduledDates.length - 1] || startDate);
        const startDayStr = `${scheduledDates[0]} (${dayNames[startD.getDay()]})`;
        const endDayStr = `${scheduledDates[scheduledDates.length - 1]} (${dayNames[endD.getDay()]})`;

        if (previewSessionsEl) {
            previewSessionsEl.textContent = `총 ${totalSessions}회차 완성 코스 (1회당 ${dailyAmount}${unitType}씩)`;
        }
        if (previewDatesEl) {
            previewDatesEl.textContent = `${startDayStr} ~ ${endDayStr}`;
        }
        if (previewSummaryEl) {
            previewSummaryEl.textContent = `선택한 요일에 맞추어 매회 ${dailyAmount}${unitType}씩 플래너에 자동 배치되며, 총 ${totalUnits}${unitType}를 완전 정복합니다.`;
        }
    }

    executeExternalStudyRegistration() {
        if (!window.storage) return;

        const titleInput = document.getElementById('ext-study-title');
        const publisherInput = document.getElementById('ext-study-publisher');
        const categorySelect = document.getElementById('ext-study-category');
        const totalUnitsInput = document.getElementById('ext-study-total-units');
        const unitTypeSelect = document.getElementById('ext-study-unit-type');
        const dailyAmountInput = document.getElementById('ext-study-daily-amount');
        const startDateInput = document.getElementById('ext-study-start-date');

        const title = titleInput ? titleInput.value.trim() : '';
        if (!title) {
            alert('교재명 또는 학습 활동명을 입력해 주세요.');
            return;
        }

        const selectedDays = this.getSelectedDays();
        if (selectedDays.length === 0) {
            alert('학습을 진행할 요일을 최소 1개 이상 선택해 주세요.');
            return;
        }

        const totalUnits = Number(totalUnitsInput ? totalUnitsInput.value : 30) || 30;
        const dailyAmount = Math.max(1, Number(dailyAmountInput ? dailyAmountInput.value : 1) || 1);
        const unitType = unitTypeSelect ? unitTypeSelect.value : 'page';
        const startDate = (startDateInput && startDateInput.value) ? startDateInput.value : window.storage.getTodayDateString();

        let coverEmoji = '📖';
        const cat = categorySelect ? categorySelect.value : 'book';
        if (cat === 'grammar') coverEmoji = '📘';
        else if (cat === 'reading') coverEmoji = '📕';
        else if (cat === 'sat') coverEmoji = '🎓';
        else if (cat === 'school_task') coverEmoji = '📝';
        else if (cat === 'academy') coverEmoji = '🏫';

        const newStudy = window.storage.addExternalStudy({
            title,
            publisher: publisherInput ? publisherInput.value.trim() : '시중 교재',
            category: cat,
            coverEmoji,
            totalUnits,
            unitType,
            dailyAmount,
            scheduledDays: selectedDays,
            startDate,
            tableOfContents: (this.selectedBookPreset && Array.isArray(this.selectedBookPreset.tableOfContents))
                ? this.selectedBookPreset.tableOfContents
                : null
        });

        this.closeExternalStudyModal();

        if (typeof confetti === 'function') {
            confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
        }

        alert(`🎉 [${newStudy.title}] 학습 계획이 성공적으로 플래너에 배정되었습니다!\n\n• 총 분량: ${newStudy.totalUnits}${newStudy.unitType} (하루 ${newStudy.dailyAmount}${newStudy.unitType}씩, 총 ${newStudy.totalSessions}회차)\n• 배정 기간: ${newStudy.startDate} ~ ${newStudy.endDate}\n• 오늘부터 대시보드와 플래너에서 1클릭으로 간편하게 완료를 체크할 수 있습니다.`);

        // 대시보드 및 플래너 갱신
        if (window.plannerEngine) {
            window.plannerEngine.render();
        }
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
    }

    // ------------------------------------------------------------------------
    // 외부 교재 및 학습 과제 원클릭 전체 삭제 (대시보드 / 플래너 연동)
    // ------------------------------------------------------------------------

    deleteExternalStudy(studyId, title) {
        if (!window.storage) return;
        const bookTitle = title || '선택한 교재/과제';
        if (!confirm(`[${bookTitle}] 학습 계획 및 모든 배정 일정을 전체 삭제하시겠습니까?\n삭제된 일정은 복구할 수 없습니다.`)) {
            return;
        }

        const success = window.storage.deleteExternalStudy(studyId);
        if (success) {
            // 대시보드 및 플래너 즉각 갱신
            if (window.plannerEngine) {
                window.plannerEngine.render();
            }
            if (window.app && window.app.renderDashboard) {
                window.app.renderDashboard();
            }
            alert(`🗑️ [${bookTitle}] 학습 계획이 전체 삭제되었습니다.`);
        }
    }

    // ------------------------------------------------------------------------
    // 3. 홈 대시보드 원클릭 완료 토글 처리
    // ------------------------------------------------------------------------

    toggleTodayTask(studyId, dateStr = null) {
        if (!window.storage) return;
        dateStr = dateStr || window.storage.getTodayDateString();

        const res = window.storage.toggleExternalStudyDayDone(studyId, dateStr);
        if (!res) return;

        if (res.isDone && typeof confetti === 'function') {
            confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });
        }

        // 대시보드 및 플래너 즉각 갱신
        if (window.app && window.app.renderTodayLearningBox) {
            window.app.renderTodayLearningBox(dateStr);
        }
        if (window.plannerEngine) {
            window.plannerEngine.render();
        }
    }
}

// 인스턴스 전역 생성
if (typeof window !== 'undefined') {
    window.assistantEngine = new AssistantEngine();
}
