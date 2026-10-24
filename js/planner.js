/**
 * Veritas English - 영재학교 스타일 학습 플래너 & 캘린더 일정 편집기
 * 날짜별 배정 단어 조회, 일정 재배치(Rescheduling), 일일 목표 설정, 휴식일(Rest day) 지정, DAY별 계획 삭제
 */

class PlannerEngine {
    constructor() {
        const now = new Date();
        this.currentYear = now.getFullYear();
        this.currentMonth = now.getMonth(); // 0-indexed
        this.selectedDateStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);

        this.initEventListeners();
    }

    initEventListeners() {
        // 일일 목표 단어 수 설정 변경
        const targetInput = document.getElementById('planner-target-input');
        if (targetInput) {
            targetInput.value = window.storage.settings.dailyTarget || 15;
            targetInput.addEventListener('change', (e) => {
                const val = parseInt(e.target.value) || 15;
                window.storage.settings.dailyTarget = val;
                window.storage.saveSettings();
                this.render();
            });
        }
    }

    render() {
        this.renderCalendar();
        this.renderSelectedDateDetail();
        this.renderOverviewStats();
    }

    changeMonth(delta) {
        this.currentMonth += delta;
        if (this.currentMonth < 0) {
            this.currentMonth = 11;
            this.currentYear -= 1;
        } else if (this.currentMonth > 11) {
            this.currentMonth = 0;
            this.currentYear += 1;
        }
        this.renderCalendar();
    }

    renderCalendar() {
        const titleEl = document.getElementById('planner-month-title');
        const gridEl = document.getElementById('planner-calendar-grid');
        if (!gridEl) return;

        const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
        if (titleEl) {
            titleEl.textContent = `${this.currentYear}년 ${monthNames[this.currentMonth]}`;
        }

        gridEl.innerHTML = '';

        const firstDayIndex = new Date(this.currentYear, this.currentMonth, 1).getDay(); // 0 is Sun
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        const prevMonthDays = new Date(this.currentYear, this.currentMonth, 0).getDate();

        const todayStr = window.storage.getTodayDateString();

        // 1. 이전 달 잔여 일자
        for (let i = firstDayIndex - 1; i >= 0; i--) {
            const dayNum = prevMonthDays - i;
            const cell = document.createElement('div');
            cell.className = 'min-h-[90px] p-2 bg-slate-50/50 border border-slate-100 rounded-lg text-slate-300 text-xs';
            cell.innerHTML = `<span>${dayNum}</span>`;
            gridEl.appendChild(cell);
        }

        // 2. 이번 달 일자
        for (let day = 1; day <= daysInMonth; day++) {
            const monthStr = String(this.currentMonth + 1).padStart(2, '0');
            const dayStr = String(day).padStart(2, '0');
            const dateStr = `${this.currentYear}-${monthStr}-${dayStr}`;

            const isToday = (dateStr === todayStr);
            const isSelected = (dateStr === this.selectedDateStr);
            const isRest = window.storage.isRestDay(dateStr);
            const wordsOnDate = window.storage.getWordsByDate(dateStr);
            const wordCount = wordsOnDate.length;

            const cell = document.createElement('div');
            cell.className = `min-h-[90px] p-2 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected ? 'ring-2 ring-blue-900 border-blue-900 bg-blue-50/20 shadow-sm' :
                isToday ? 'border-amber-400 bg-amber-50/30' :
                isRest ? 'border-slate-200 bg-slate-100/70' :
                'border-slate-200 bg-white hover:border-slate-400'
            }`;

            cell.onclick = () => {
                this.selectedDateStr = dateStr;
                this.render();
            };

            const vocabWords = wordsOnDate.filter(w => !w.isReadingPassage);
            const readingPassages = wordsOnDate.filter(w => w.isReadingPassage);
            const planInfo = window.storage.plans[dateStr] || {};
            const isWordsCompleted = vocabWords.length === 0 || vocabWords.every(w => (w.flashcardDone && w.quizDone) || w.studyCompleted);
            const isPassagesCompleted = readingPassages.length === 0 || readingPassages.every(p => {
                const r = window.storage.readingRecords && window.storage.readingRecords[p.readingPassageId];
                return (r && typeof r.score === 'number') || p.studyCompleted;
            });
            const isDayCompleted = planInfo.isDone === true || ((vocabWords.length > 0 || readingPassages.length > 0) && isWordsCompleted && isPassagesCompleted);

            let badgesHtml = '';
            if (isDayCompleted) {
                badgesHtml += `<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-bold shadow-2xs"><i data-lucide="check-circle-2" class="w-3 h-3 text-emerald-600"></i> ✓ 완수</span>`;
            }
            if (isRest) {
                badgesHtml += `<span class="inline-block px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] font-mono">휴식일</span>`;
            } else {
                if (readingPassages.length > 0) {
                    badgesHtml += `
                        <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900 text-[10px] font-bold">
                            <i data-lucide="graduation-cap" class="w-3 h-3"></i> 독해 ${readingPassages.length}편
                        </span>
                    `;
                }
                if (vocabWords.length > 0) {
                    badgesHtml += `
                        <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full ${
                            vocabWords.length >= window.storage.settings.dailyTarget ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-900'
                        } text-[10px] font-bold">
                            <i data-lucide="book-open" class="w-3 h-3"></i> ${vocabWords.length} 단어
                        </span>
                    `;
                }
            }

            cell.innerHTML = `
                <div class="flex items-center justify-between">
                    <span class="text-xs font-semibold ${isToday ? 'text-amber-800 font-bold underline' : 'text-slate-700'}">${day}</span>
                    ${isToday ? '<span class="text-[9px] bg-amber-400 text-slate-900 px-1 py-0.2 rounded font-bold">TODAY</span>' : ''}
                </div>
                <div class="mt-1 flex flex-col gap-1">
                    ${badgesHtml}
                </div>
            `;

            gridEl.appendChild(cell);
        }

        // 3. 다음 달 빈칸 채우기
        const totalRendered = firstDayIndex + daysInMonth;
        const remaining = (7 - (totalRendered % 7)) % 7;
        for (let i = 1; i <= remaining; i++) {
            const cell = document.createElement('div');
            cell.className = 'min-h-[90px] p-2 bg-slate-50/50 border border-slate-100 rounded-lg text-slate-300 text-xs';
            cell.innerHTML = `<span>${i}</span>`;
            gridEl.appendChild(cell);
        }

        if (window.lucide) window.lucide.createIcons();
    }

    renderSelectedDateDetail() {
        const titleEl = document.getElementById('planner-detail-date');
        const container = document.getElementById('planner-date-words-list');
        const restToggleBtn = document.getElementById('btn-toggle-rest-day');
        if (!titleEl || !container) return;

        titleEl.textContent = this.selectedDateStr;
        const isRest = window.storage.isRestDay(this.selectedDateStr);
        if (restToggleBtn) {
            restToggleBtn.textContent = isRest ? '휴식일 해제하기' : '이 날을 휴식일로 지정';
            restToggleBtn.className = `px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                isRest ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
            }`;
            restToggleBtn.onclick = () => {
                window.storage.setRestDay(this.selectedDateStr, !isRest);
                this.render();
            };
        }

        const words = window.storage.getWordsByDate(this.selectedDateStr);
        container.innerHTML = '';

        // 이 날짜에 포함된 능률 VOCA DAY, 테마 단어장 및 중등 독해 단원 일괄 삭제 바 렌더링
        const dayBatchBar = document.getElementById('planner-day-batch-bar');
        const dayBatchChips = document.getElementById('planner-day-batch-chips');
        const uniqueDaysOnDate = Array.from(new Set(words.map(w => w.neungryulDay).filter(Boolean))).sort();
        
        // 테마 단어장 컬렉션/DAY 중복 제거 목록
        const curatedDaysOnDate = [];
        words.forEach(w => {
            if (w.isCuratedVoca && w.curatedCollectionId && w.curatedDay) {
                const key = `${w.curatedCollectionId}:${w.curatedDay}`;
                if (!curatedDaysOnDate.some(x => x.key === key)) {
                    curatedDaysOnDate.push({
                        key,
                        colId: w.curatedCollectionId,
                        colTitle: w.curatedCollectionTitle || w.tag,
                        day: w.curatedDay
                    });
                }
            }
        });

        // 독해 단원 중복 제거 목록
        const readingUnitsOnDateMap = {};
        words.forEach(w => {
            if (w.readingUnitId) {
                readingUnitsOnDateMap[w.readingUnitId] = w.tag ? w.tag.replace(' [어휘]', '') : '중등 내신 독해';
            }
        });
        const readingUnitEntries = Object.entries(readingUnitsOnDateMap);

        if (dayBatchBar && dayBatchChips) {
            if (uniqueDaysOnDate.length > 0 || readingUnitEntries.length > 0 || curatedDaysOnDate.length > 0) {
                dayBatchBar.classList.remove('hidden');
                
                let chipsHtml = '';
                uniqueDaysOnDate.forEach(d => {
                    chipsHtml += `
                        <button class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-100/80 hover:bg-red-200 border border-red-300 text-red-800 text-xs font-mono font-bold transition-all cursor-pointer" onclick="window.plannerEngine.deleteNeungryulDayFromPlanner('${d}')">
                            <i data-lucide="trash-2" class="w-3.5 h-3.5 text-red-600"></i>
                            <span>${d} 계획 일괄 삭제</span>
                        </button>
                    `;
                });

                readingUnitEntries.forEach(([uId, uTitle]) => {
                    chipsHtml += `
                        <button class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-100 hover:bg-indigo-200 border border-indigo-300 text-indigo-900 text-xs font-serif font-bold transition-all cursor-pointer" onclick="window.plannerEngine.deleteReadingUnitFromPlanner('${uId}', '${uTitle}')">
                            <i data-lucide="trash-2" class="w-3.5 h-3.5 text-indigo-700"></i>
                            <span>${uTitle} 단원 전체 삭제</span>
                        </button>
                    `;
                });

                curatedDaysOnDate.forEach(item => {
                    chipsHtml += `
                        <button class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-900 text-xs font-mono font-bold transition-all cursor-pointer" onclick="window.plannerEngine.deleteCuratedDayFromPlanner('${item.colId}', '${item.day}', '${item.colTitle}')">
                            <i data-lucide="trash-2" class="w-3.5 h-3.5 text-amber-700"></i>
                            <span>${item.colTitle} ${item.day} 삭제</span>
                        </button>
                    `;
                });

                dayBatchChips.innerHTML = chipsHtml;
            } else {
                dayBatchBar.classList.add('hidden');
            }
        }

        if (words.length === 0) {
            container.innerHTML = `
                <div class="py-8 text-center text-slate-400 border border-dashed border-slate-200 rounded-xl">
                    <p class="text-sm font-medium">이 날짜에 배정된 학습 과제가 없습니다.</p>
                    <p class="text-xs text-slate-400 mt-1">교재 사진을 캡처하거나 중등 독해 단원을 계획표에 추가해 보세요.</p>
                </div>
            `;
            return;
        }

        const dayPlan = window.storage.plans[this.selectedDateStr] || {};
        const vocabOnDate = words.filter(w => !w.isReadingPassage);
        const readingOnDate = words.filter(w => w.isReadingPassage);
        const isVocabDone = vocabOnDate.length === 0 || vocabOnDate.every(w => (w.flashcardDone && w.quizDone) || w.studyCompleted);
        const isReadingDone = readingOnDate.length === 0 || readingOnDate.every(p => {
            const r = window.storage.readingRecords && window.storage.readingRecords[p.readingPassageId];
            return (r && typeof r.score === 'number') || p.studyCompleted;
        });
        const isDayAllDone = dayPlan.isDone === true || ((vocabOnDate.length > 0 || readingOnDate.length > 0) && isVocabDone && isReadingDone);

        if (isDayAllDone) {
            const banner = document.createElement('div');
            banner.className = 'mb-3 p-3 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center justify-between text-xs font-bold text-emerald-950 shadow-2xs';
            banner.innerHTML = `
                <div class="flex items-center gap-2">
                    <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
                    <span>🎉 이 날짜의 배정 단어 플래시카드 & 스마트 퀴즈 학습이 모두 완료되었습니다!</span>
                </div>
                <span class="px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-mono text-[10px]">✓ 학습 완료</span>
            `;
            container.appendChild(banner);
        }

        words.forEach(w => {
            const row = document.createElement('div');
            
            // 1. 중등 내신 독해 지문 과제인 경우
            if (w.isReadingPassage) {
                row.className = 'p-3 bg-indigo-50/50 border border-indigo-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:border-indigo-400 transition-all';
                row.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-900 flex items-center justify-center shrink-0 border border-indigo-200">
                            <i data-lucide="graduation-cap" class="w-4 h-4 text-indigo-800"></i>
                        </div>
                        <div>
                            <div class="flex flex-wrap items-center gap-1.5">
                                <span class="font-serif font-bold text-slate-900 text-sm">${w.word}</span>
                                <span class="text-[10px] font-mono bg-indigo-100 text-indigo-900 px-2 py-0.5 rounded font-bold">${w.tag || '중등내신독해'}</span>
                                ${window.storage.readingRecords && window.storage.readingRecords[w.readingPassageId]?.score !== undefined ? `<span class="text-[10px] font-mono bg-emerald-100 text-emerald-900 border border-emerald-300 px-2 py-0.5 rounded font-bold flex items-center gap-1"><i data-lucide="check" class="w-3 h-3 text-emerald-700"></i> ✓ 시험 완료 (${window.storage.readingRecords[w.readingPassageId].score}점)</span>` : ''}
                            </div>
                            <div class="text-xs text-slate-600 mt-0.5">${w.meaning}</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 self-end sm:self-auto shrink-0">
                        <button class="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-serif font-bold text-xs flex items-center gap-1 shadow-2xs transition-all cursor-pointer" onclick="window.readingEngine.selectPassage('${w.readingPassageId}'); window.app.switchTab('reading');">
                            <span>지문 읽기 & 시험 풀기</span>
                            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                        </button>
                        <button class="btn-reschedule-single text-xs text-slate-500 hover:text-blue-900 hover:bg-white px-2 py-1 rounded transition-colors cursor-pointer" data-id="${w.id}">
                            날짜 변경
                        </button>
                        <button class="btn-delete-single text-slate-400 hover:text-red-700 p-1 rounded cursor-pointer" data-id="${w.id}">
                            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                `;
            } 
            // 2. 일반 영단어 또는 지문 어휘인 경우
            else {
                row.className = 'p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between hover:border-slate-300 transition-all';
                row.innerHTML = `
                    <div class="flex items-center gap-3">
                        <button class="speak-item-btn text-slate-400 hover:text-blue-900" data-word="${w.word}">
                            <i data-lucide="volume-2" class="w-4 h-4"></i>
                        </button>
                        <div>
                            <div class="flex items-center gap-1.5">
                                <span class="font-serif font-bold text-slate-900 text-sm">${w.word}</span>
                                <span class="text-[11px] font-mono text-slate-500">${w.partOfSpeech || 'n.'}</span>
                                ${(w.flashcardDone && w.quizDone) || w.studyCompleted ? '<span class="text-[10px] font-mono bg-emerald-100 text-emerald-900 border border-emerald-200 px-1.5 py-0.2 rounded font-bold flex items-center gap-0.5"><i data-lucide="check" class="w-3 h-3 text-emerald-700"></i> ✓ 마스터</span>' : (w.flashcardDone ? '<span class="text-[10px] font-mono bg-blue-100 text-blue-900 border border-blue-200 px-1.5 py-0.2 rounded font-bold">플래시카드완료</span>' : '')}
                                ${w.neungryulDay ? `<span class="text-[10px] font-mono bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded font-bold">${w.neungryulDay} #${w.neungryulNum || ''}</span>` : ''}
                                ${w.isCuratedVoca ? `<span class="text-[10px] font-mono bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-bold">${w.curatedCollectionTitle || w.tag} ${w.curatedDay} #${w.curatedNum || ''}</span>` : ''}
                                ${w.isReadingVocab ? `<span class="text-[10px] font-mono bg-indigo-50 text-indigo-800 px-1.5 py-0.2 rounded font-bold">${w.tag}</span>` : ''}
                            </div>
                            <div class="text-xs text-slate-600">${w.meaning}</div>
                        </div>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <button class="btn-reschedule-single text-xs text-blue-900 hover:bg-blue-50 px-2 py-1 rounded transition-colors cursor-pointer" data-id="${w.id}">
                            날짜 변경
                        </button>
                        <button class="btn-delete-single text-slate-400 hover:text-red-700 p-1 rounded cursor-pointer" data-id="${w.id}">
                            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                `;
            }
            container.appendChild(row);
        });

        // 음성 및 편집 바인딩
        container.querySelectorAll('.speak-item-btn').forEach(btn => {
            btn.onclick = () => window.tts && window.tts.speak(btn.dataset.word);
        });

        container.querySelectorAll('.btn-reschedule-single').forEach(btn => {
            btn.onclick = () => this.promptReschedule([btn.dataset.id]);
        });

        container.querySelectorAll('.btn-delete-single').forEach(btn => {
            btn.onclick = () => {
                if (confirm('이 단어를 삭제하시겠습니까?')) {
                    window.storage.deleteWord(btn.dataset.id);
                    this.render();
                }
            };
        });

        if (window.lucide) window.lucide.createIcons();
    }

    renderOverviewStats() {
        const stats = window.storage.getStatistics();
        const totalWords = stats.total;
        const dailyTarget = window.storage.settings.dailyTarget || 15;
        const todayAllWords = window.storage.getWordsByDate(window.storage.getTodayDateString()).filter(w => !w.isReadingPassage);
        const completedCount = todayAllWords.filter(w => (w.flashcardDone && w.quizDone) || w.studyCompleted).length;

        const progressPercent = Math.min(100, Math.round((completedCount / dailyTarget) * 100));

        const todayProgEl = document.getElementById("planner-today-progress-bar");
        const todayTextEl = document.getElementById("planner-today-progress-text");
        if (todayProgEl) todayProgEl.style.width = `${progressPercent}%`;
        if (todayTextEl) todayTextEl.textContent = `${completedCount} / ${dailyTarget} 단어 마스터 (${progressPercent}%)`;
    }

    /**
     * 선택 날짜의 전체 단어 일괄 날짜 이동 (Reschedule All)
     */
    rescheduleCurrentDateWords() {
        const words = window.storage.getWordsByDate(this.selectedDateStr);
        if (words.length === 0) {
            alert('이동할 단어가 없습니다.');
            return;
        }
        this.promptReschedule(words.map(w => w.id));
    }

    promptReschedule(wordIds) {
        const targetDate = prompt('단어를 이동할 날짜를 입력하세요 (예: 2026-10-25):', window.storage.addDays(this.selectedDateStr, 1));
        if (targetDate && /^\d{4}-\d{2}-\d{2}$/.test(targetDate.trim())) {
            const moved = window.storage.moveWordsToDate(wordIds, targetDate.trim());
            alert(`${moved}개의 단어가 [${targetDate.trim()}] 일정으로 성공적으로 이동되었습니다.`);
            this.selectedDateStr = targetDate.trim();
            this.render();
            if (window.ocrEngine && window.ocrEngine.renderNeungryulVocaSection) {
                window.ocrEngine.renderNeungryulVocaSection();
            }
        } else if (targetDate) {
            alert('올바른 날짜 형식 (YYYY-MM-DD)으로 입력해 주세요.');
        }
    }

    /**
     * 선택 날짜의 전체 단어 일괄 삭제
     */
    deleteCurrentDateWords() {
        const words = window.storage.getWordsByDate(this.selectedDateStr);
        if (words.length === 0) {
            alert('삭제할 단어가 없습니다.');
            return;
        }

        if (!confirm(`[${this.selectedDateStr}]에 배정된 총 ${words.length}개 단어의 학습 계획을 모두 삭제하시겠습니까?`)) {
            return;
        }

        words.forEach(w => window.storage.deleteWord(w.id));
        this.render();

        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
        if (window.ocrEngine && window.ocrEngine.renderNeungryulVocaSection) {
            window.ocrEngine.renderNeungryulVocaSection();
        }

        alert(`🗑️ [${this.selectedDateStr}]의 모든 학습 계획이 삭제되었습니다.`);
    }

    /**
     * 플래너에서 특정 능률 VOCA DAY 계획 한꺼번에 삭제
     */
    deleteNeungryulDayFromPlanner(dayStr) {
        if (!confirm(`[${dayStr}] 배정 계획을 삭제하시겠습니까?\n해당 DAY의 모든 배정 단어가 계획표에서 한꺼번에 삭제됩니다.`)) {
            return;
        }

        const deleted = window.storage.deleteNeungryulByDay(dayStr);
        this.render();

        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
        if (window.ocrEngine && window.ocrEngine.renderNeungryulVocaSection) {
            window.ocrEngine.renderNeungryulVocaSection();
        }

        alert(`🗑️ [${dayStr}] 총 ${deleted}단어의 학습 계획이 한꺼번에 삭제되었습니다.`);
    }

    /**
     * 플래너에서 중등 내신 독해 단원 계획 일괄 삭제
     */
    /**
     * 플래너에서 테마 단어장 특정 DAY 계획 삭제
     */
    deleteCuratedDayFromPlanner(colId, dayStr, colTitle) {
        if (!confirm(`[${colTitle} ${dayStr}] 계획을 삭제하시겠습니까?\n해당 DAY의 모든 배정 단어가 계획표에서 삭제됩니다.`)) {
            return;
        }

        const deleted = window.storage.deleteCuratedByDay(colId, dayStr);
        this.render();

        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
        if (window.ocrEngine && window.ocrEngine.renderNeungryulVocaSection) {
            window.ocrEngine.renderNeungryulVocaSection();
        }

        alert(`🗑️ [${colTitle} ${dayStr}] 총 ${deleted}단어의 학습 계획이 삭제되었습니다.`);
    }

    deleteReadingUnitFromPlanner(unitId, unitTitle) {
        if (!confirm(`[${unitTitle}] 단원의 모든 학습 과제를 계획표에서 일괄 삭제하시겠습니까?`)) {
            return;
        }

        const deleted = window.storage.deleteReadingUnit(unitId);
        this.render();

        if (window.readingEngine) {
            window.readingEngine.renderUnitBanner();
        }
        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }

        alert(`🗑️ [${unitTitle}] 관련 학습 과제 총 ${deleted}건이 계획표에서 삭제되었습니다.`);
    }

    /**
     * 요구사항 2: 학습 플래너 내 학습 이력 모달 제어
     */
    openLearningHistoryModal() {
        const modal = document.getElementById('modal-learning-history');
        if (!modal) return;
        modal.classList.remove('hidden');
        this.currentHistoryFilter = 'all';
        this.renderLearningHistoryModal();
    }

    closeLearningHistoryModal() {
        const modal = document.getElementById('modal-learning-history');
        if (modal) modal.classList.add('hidden');
    }

    filterLearningHistory(filterType) {
        this.currentHistoryFilter = filterType;
        document.querySelectorAll('.hist-filter-btn').forEach(btn => {
            btn.classList.toggle('active-subtab', btn.dataset.filter === filterType);
        });
        this.renderLearningHistoryModal();
    }

    renderLearningHistoryModal() {
        const listEl = document.getElementById('learning-history-list');
        const wordsStatEl = document.getElementById('hist-stat-words');
        const quizAccStatEl = document.getElementById('hist-stat-quiz-acc');
        const readingStatEl = document.getElementById('hist-stat-reading');

        if (!listEl) return;

        // KPI 통계 산출
        const allWords = window.storage.words || [];
        const masteredWords = allWords.filter(w => !w.isReadingPassage && ((w.flashcardDone && w.quizDone) || w.studyCompleted || (w.stage && w.stage >= 2))).length;
        
        const historyLogs = window.storage.getHistoryLogs('all') || [];
        const quizLogs = historyLogs.filter(h => h.type === 'quiz' && typeof h.accuracy === 'number');
        const avgAcc = quizLogs.length > 0 ? Math.round(quizLogs.reduce((acc, cur) => acc + cur.accuracy, 0) / quizLogs.length) : 0;
        
        const readingRecords = window.storage.readingRecords || {};
        const readingCount = Object.keys(readingRecords).length;

        if (wordsStatEl) wordsStatEl.textContent = masteredWords;
        if (quizAccStatEl) quizAccStatEl.textContent = avgAcc > 0 ? `${avgAcc}%` : '100%';
        if (readingStatEl) readingStatEl.textContent = readingCount;

        // 필터링된 로그 목록
        const filterType = this.currentHistoryFilter || 'all';
        const logs = window.storage.getHistoryLogs(filterType);

        if (logs.length === 0) {
            listEl.innerHTML = `
                <div class="py-12 text-center text-slate-400 bg-slate-50/70 rounded-2xl border border-dashed border-slate-200">
                    <i data-lucide="inbox" class="w-10 h-10 mx-auto text-slate-300 mb-2"></i>
                    <p class="font-serif font-bold text-slate-700 text-sm">아직 기록된 학습 이력이 없습니다.</p>
                    <p class="text-xs text-slate-400 mt-1">플래시카드나 스마트 퀴즈, 독해 지문을 학습하면 자동으로 이력이 누적됩니다.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        listEl.innerHTML = logs.map(item => {
            let typeBadge = '';
            let iconName = 'book-open';
            if (item.type === 'flashcard') {
                typeBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-900 border border-blue-200">플래시카드</span>';
                iconName = 'layers';
            } else if (item.type === 'quiz') {
                typeBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">스마트 퀴즈</span>';
                iconName = 'check-square';
            } else if (item.type === 'reading') {
                typeBadge = '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-900 border border-indigo-200">내신 독해</span>';
                iconName = 'graduation-cap';
            }

            let scoreBadge = '';
            if (typeof item.accuracy === 'number') {
                scoreBadge = `<span class="text-xs font-mono font-bold ${item.accuracy >= 80 ? 'text-emerald-700' : 'text-blue-900'}">${item.accuracy}% 정답</span>`;
            } else if (item.score !== null) {
                scoreBadge = `<span class="text-xs font-mono font-bold text-blue-900">${item.score}점</span>`;
            }

            return `
                <div class="p-3.5 bg-white border border-slate-200 hover:border-slate-300 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs transition-all">
                    <div class="flex items-start gap-3">
                        <div class="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                            <i data-lucide="${iconName}" class="w-4 h-4 text-blue-900"></i>
                        </div>
                        <div>
                            <div class="flex flex-wrap items-center gap-2">
                                ${typeBadge}
                                <span class="font-serif font-bold text-slate-900 text-sm">${item.title}</span>
                            </div>
                            <p class="text-xs text-slate-600 mt-1">${item.detail}</p>
                        </div>
                    </div>
                    <div class="flex sm:flex-col items-center sm:items-end justify-between shrink-0 text-right">
                        <div class="text-[11px] font-mono text-slate-400">${item.date} ${item.timeStr || ''}</div>
                        <div class="mt-0.5">${scoreBadge}</div>
                    </div>
                </div>
            `;
        }).join('');

        if (window.lucide) window.lucide.createIcons();
    }
}

// 전역 인스턴스
window.plannerEngine = new PlannerEngine();