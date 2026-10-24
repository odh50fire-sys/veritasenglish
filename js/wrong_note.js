/**
 * Veritas English - 스마트 오답노트 & 자동 복습 시험지 (Wrong-Answer Clinic)
 * 퀴즈, 독해, 어순배열에서 틀린 문제를 실시간 수집 및 5/10제 미니 복습 재시험 출제
 */

class WrongNoteEngine {
    constructor() {
        this.activeFilter = 'all'; // 'all', 'reading', 'quiz', 'scramble'
        this.statusFilter = 'unresolved'; // 'unresolved', 'resolved', 'all'
        
        // 재시험 세션 상태
        this.retestQuestions = [];
        this.retestIndex = 0;
        this.retestScore = 0;
        this.retestUserAnswers = [];
    }

    render() {
        this.renderStats();
        this.renderList();
    }

    setFilter(sourceType) {
        this.activeFilter = sourceType;
        this.renderList();
    }

    setStatusFilter(status) {
        this.statusFilter = status;
        this.renderList();
    }

    getFilteredItems() {
        const list = window.storage?.wrongAnswers || [];
        return list.filter(item => {
            if (this.statusFilter === 'unresolved' && item.isResolved) return false;
            if (this.statusFilter === 'resolved' && !item.isResolved) return false;
            if (this.activeFilter !== 'all' && item.sourceType !== this.activeFilter) return false;
            return true;
        });
    }

    renderStats() {
        const list = window.storage?.wrongAnswers || [];
        const totalCount = list.length;
        const unresolvedCount = list.filter(i => !i.isResolved).length;
        const resolvedCount = list.filter(i => i.isResolved).length;

        const countBadge = document.getElementById('wrong-note-unresolved-count');
        const totalEl = document.getElementById('stat-wrong-total');
        const unresolvedEl = document.getElementById('stat-wrong-unresolved');
        const resolvedEl = document.getElementById('stat-wrong-resolved');
        const navBadge = document.getElementById('nav-wrong-badge');

        if (countBadge) countBadge.textContent = unresolvedCount;
        if (totalEl) totalEl.textContent = totalCount;
        if (unresolvedEl) unresolvedEl.textContent = unresolvedCount;
        if (resolvedEl) resolvedEl.textContent = resolvedCount;

        if (navBadge) {
            if (unresolvedCount > 0) {
                navBadge.textContent = unresolvedCount;
                navBadge.classList.remove('hidden');
            } else {
                navBadge.classList.add('hidden');
            }
        }
    }

    renderList() {
        const container = document.getElementById('wrong-note-list-container');
        if (!container) return;

        const items = this.getFilteredItems();

        if (items.length === 0) {
            container.innerHTML = `
                <div class="py-16 text-center bg-white rounded-2xl border border-slate-200">
                    <div class="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-3">
                        <i data-lucide="shield-check" class="w-8 h-8"></i>
                    </div>
                    <h3 class="font-serif font-bold text-lg text-slate-800">오답이 없습니다!</h3>
                    <p class="text-xs text-slate-500 mt-1">
                        ${this.statusFilter === 'unresolved' ? '모든 오답을 성공적으로 극복했습니다. 훌륭합니다!' : '해당 필터 조건의 오답 기록이 없습니다.'}
                    </p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        const sourceLabels = {
            reading: { text: '내신 독해', bg: 'bg-indigo-100 text-indigo-800' },
            quiz: { text: '단어 퀴즈', bg: 'bg-amber-100 text-amber-800' },
            scramble: { text: '서술형 어순배열', bg: 'bg-rose-100 text-rose-800' },
            exam: { text: '실전 모의고사', bg: 'bg-blue-100 text-blue-800' }
        };

        container.innerHTML = items.map(item => {
            const badge = sourceLabels[item.sourceType] || { text: item.sourceType, bg: 'bg-slate-100 text-slate-700' };
            const isResolved = item.isResolved;

            return `
                <div class="p-5 rounded-2xl bg-white border transition-all ${isResolved ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200 shadow-xs'}">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div class="flex items-center gap-2">
                            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${badge.bg}">
                                ${badge.text}
                            </span>
                            ${item.passageTitle ? `<span class="text-xs text-slate-500 font-serif font-medium truncate max-w-xs">[${item.passageTitle}]</span>` : ''}
                            <span class="text-xs font-mono text-slate-400">• ${item.date || ''}</span>
                        </div>
                        <div class="flex items-center gap-2">
                            ${item.wrongCount > 1 ? `<span class="px-2 py-0.5 rounded bg-rose-100 text-rose-700 font-mono text-[10px] font-bold">누적 ${item.wrongCount}회 오답</span>` : ''}
                            ${isResolved 
                                ? `<span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
                                    <i data-lucide="check" class="w-3.5 h-3.5"></i> 극복 완료
                                   </span>`
                                : `<button type="button" onclick="window.wrongNote.resolveItem('${item.id}')" 
                                    class="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-800 text-xs font-medium transition-colors flex items-center gap-1">
                                    <i data-lucide="check" class="w-3.5 h-3.5"></i> 극복 완료로 표시
                                   </button>`
                            }
                        </div>
                    </div>

                    <!-- 문제 텍스트 -->
                    <h4 class="font-serif font-bold text-base text-slate-900 leading-snug mb-3">
                        ${item.questionText}
                    </h4>

                    <!-- 오답 vs 정답 박스 -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs mb-3">
                        <div class="flex items-start gap-2 text-rose-900">
                            <span class="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center font-bold text-[11px] shrink-0">✕</span>
                            <div>
                                <span class="font-bold text-rose-700">내가 선택한 오답:</span>
                                <div class="mt-0.5 font-medium">${item.userChoice || '오답'}</div>
                            </div>
                        </div>
                        <div class="flex items-start gap-2 text-emerald-950">
                            <span class="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center font-bold text-[11px] shrink-0">✓</span>
                            <div>
                                <span class="font-bold text-emerald-700">올바른 정답:</span>
                                <div class="mt-0.5 font-bold">${item.correctChoice || '정답'}</div>
                            </div>
                        </div>
                    </div>

                    <!-- 상세 해설 -->
                    ${item.explanation ? `
                        <div class="p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-950 flex items-start gap-2">
                            <i data-lucide="info" class="w-4 h-4 text-blue-600 shrink-0 mt-0.5"></i>
                            <div class="leading-relaxed">
                                <strong class="text-blue-900 font-semibold">정답 해설 & 핵심 분석:</strong><br>
                                ${item.explanation}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');

        if (window.lucide) window.lucide.createIcons();
    }

    resolveItem(id) {
        if (!window.storage) return;
        const res = window.storage.resolveWrongAnswer(id);
        if (res) {
            this.render();
            if (window.readingEngine?.showToast) {
                window.readingEngine.showToast('🎉 오답을 극복했습니다! (+15 EXP)');
            }
        }
    }

    // ------------------------------------------------------------------------
    // 자동 복습 미니 재시험 (Retest Generator)
    // ------------------------------------------------------------------------
    startRetest(questionCount = 5) {
        const unresolved = window.storage?.getUnresolvedWrongAnswers() || [];
        if (unresolved.length === 0) {
            alert('현재 해결되지 않은 오답이 없습니다. 모든 약점을 극복했습니다!');
            return;
        }

        // 셔플 후 N개 추출
        const shuffled = [...unresolved].sort(() => Math.random() - 0.5);
        this.retestQuestions = shuffled.slice(0, questionCount);
        this.retestIndex = 0;
        this.retestScore = 0;
        this.retestUserAnswers = [];

        const modal = document.getElementById('modal-wrong-retest');
        if (modal) modal.classList.remove('hidden');

        this.renderRetestStep();
    }

    closeRetestModal() {
        const modal = document.getElementById('modal-wrong-retest');
        if (modal) modal.classList.add('hidden');
        this.render();
    }

    renderRetestStep() {
        const modalBody = document.getElementById('wrong-retest-body');
        if (!modalBody) return;

        if (this.retestIndex >= this.retestQuestions.length) {
            this.renderRetestSummary();
            return;
        }

        const q = this.retestQuestions[this.retestIndex];
        const num = this.retestIndex + 1;
        const total = this.retestQuestions.length;

        modalBody.innerHTML = `
            <div class="space-y-4">
                <div class="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-100">
                    <span class="font-bold text-blue-900">오답 극복 미니 테스트 • 문제 ${num} / ${total}</span>
                    <span>현재 점수: <strong>${this.retestScore}</strong>점</span>
                </div>

                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold uppercase mb-2 inline-block">
                        ${q.sourceType}
                    </span>
                    <h3 class="font-serif font-bold text-base text-slate-900 leading-snug">
                        ${q.questionText}
                    </h3>
                </div>

                <div class="space-y-2">
                    ${q.options && q.options.length > 0 ? `
                        <div class="grid grid-cols-1 gap-2">
                            ${q.options.map((opt, idx) => `
                                <button type="button" onclick="window.wrongNote.submitRetestAnswer(${idx})" 
                                    class="w-full text-left p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-800 font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2.5">
                                    <span class="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-mono text-xs flex items-center justify-center font-bold">
                                        ${idx + 1}
                                    </span>
                                    <span>${opt}</span>
                                </button>
                            `).join('')}
                        </div>
                    ` : `
                        <div class="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                            <p class="font-bold mb-2">💡 정답을 기억하고 계신가요?</p>
                            <p>정답: <strong>${q.correctChoice}</strong></p>
                            <div class="mt-4 flex gap-2">
                                <button type="button" onclick="window.wrongNote.submitRetestAnswer(true)" class="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700">
                                    ✓ 확실히 외웠습니다 (극복 인정)
                                </button>
                                <button type="button" onclick="window.wrongNote.submitRetestAnswer(false)" class="flex-1 py-2.5 rounded-xl bg-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-300">
                                    ✕ 아직 헷갈립니다 (오답 유지)
                                </button>
                            </div>
                        </div>
                    `}
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }

    submitRetestAnswer(answer) {
        const q = this.retestQuestions[this.retestIndex];
        let isCorrect = false;

        if (typeof answer === 'boolean') {
            isCorrect = answer;
        } else if (typeof answer === 'number') {
            isCorrect = (answer === q.correctIndex);
        }

        if (isCorrect) {
            this.retestScore += 20;
            // 오답 극복 처리
            window.storage?.resolveWrongAnswer(q.id);
        }

        this.retestUserAnswers.push({ q, isCorrect });
        this.retestIndex++;
        this.renderRetestStep();
    }

    renderRetestSummary() {
        const modalBody = document.getElementById('wrong-retest-body');
        if (!modalBody) return;

        const total = this.retestQuestions.length;
        const correctCount = this.retestUserAnswers.filter(a => a.isCorrect).length;
        const passPercent = Math.round((correctCount / total) * 100);

        if (passPercent >= 70 && typeof confetti === 'function') {
            confetti({ particleCount: 80, spread: 70, origin: { y: 0.5 } });
        }

        modalBody.innerHTML = `
            <div class="text-center py-6 space-y-4">
                <div class="w-16 h-16 mx-auto rounded-2xl ${passPercent >= 80 ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'} flex items-center justify-center text-3xl shadow-xs">
                    ${passPercent >= 80 ? '🏆' : '💪'}
                </div>
                <div>
                    <h3 class="font-serif font-black text-2xl text-slate-900">
                        오답 복습 완료!
                    </h3>
                    <p class="text-xs text-slate-500 mt-1">
                        총 ${total}문제 중 <strong class="text-emerald-600 font-bold">${correctCount}문제</strong>를 성공적으로 극복했습니다.
                    </p>
                </div>

                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-sm mx-auto">
                    <div class="text-xs font-mono text-slate-500">극복 성취도</div>
                    <div class="font-mono font-black text-3xl text-blue-900 mt-0.5">${passPercent}%</div>
                </div>

                <div class="pt-2">
                    <button type="button" onclick="window.wrongNote.closeRetestModal()" 
                        class="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-xs shadow-md">
                        오답노트로 돌아가기
                    </button>
                </div>
            </div>
        `;
    }
}

// 전역 인스턴스
window.wrongNote = new WrongNoteEngine();
