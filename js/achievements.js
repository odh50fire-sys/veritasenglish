/**
 * Veritas English - 학습 업적 & 티어 칭호 시스템 (Achievements & Tier Engine)
 * 6단계 학도 티어, 16종 명예의 뱃지 및 실시간 헤더 캡슐 / 명예의 전당 도감
 */

class AchievementsEngine {
    constructor() {
        this.badgesCatalog = [
            // 1. 출석 부문
            { id: 'streak_3', name: '작심삼일 탈출', category: 'streak', icon: 'flame', desc: '3일 연속 매일 학습 달성', exp: 100 },
            { id: 'streak_7', name: '성실의 미덕', category: 'streak', icon: 'zap', desc: '7일 연속 매일 학습 달성', exp: 150 },
            { id: 'streak_30', name: '불굴의 학도', category: 'streak', icon: 'crown', desc: '30일 연속 매일 학습 달성', exp: 300 },

            // 2. 어휘 부문
            { id: 'voca_50', name: '어휘 탐험가', category: 'voca', icon: 'compass', desc: '단어 50개 마스터 (플래시카드+퀴즈)', exp: 100 },
            { id: 'voca_200', name: '보카 마스터', category: 'voca', icon: 'book-open', desc: '단어 200개 마스터', exp: 200 },
            { id: 'voca_500', name: '걸어다니는 사전', category: 'voca', icon: 'library', desc: '단어 500개 마스터', exp: 300 },

            // 3. 독해 부문
            { id: 'reading_100_1', name: '첫 만점의 기쁨', category: 'reading', icon: 'sparkles', desc: '내신 독해 100점 1회 달성', exp: 100 },
            { id: 'reading_100_5', name: '독해 우등생', category: 'reading', icon: 'award', desc: '내신 독해 100점 5회 달성', exp: 200 },
            { id: 'reading_100_20', name: '독해 지존', category: 'reading', icon: 'trophy', desc: '내신 독해 100점 20회 달성', exp: 300 },

            // 4. 서술형 어순배열 부문
            { id: 'scramble_5', name: '구문의 시작', category: 'scramble', icon: 'puzzle', desc: '서술형 어순배열 5문장 성공', exp: 100 },
            { id: 'scramble_20', name: '서술형 마스터', category: 'scramble', icon: 'split', desc: '서술형 어순배열 20문장 성공', exp: 200 },

            // 5. 오답 극복 부문
            { id: 'wrong_5', name: '오답 청소기', category: 'wrong', icon: 'check-check', desc: '오답노트 5문제 극복 완료', exp: 100 },
            { id: 'wrong_20', name: '약점 제로', category: 'wrong', icon: 'shield-check', desc: '오답노트 20문제 극복 완료', exp: 200 },

            // 6. 실전 시험 & 승급 부문
            { id: 'exam_1', name: '실전 첫걸음', category: 'exam', icon: 'clipboard-check', desc: '내신 모의고사 1회 완주', exp: 100 },
            { id: 'exam_5', name: '시험의 고수', category: 'exam', icon: 'medal', desc: '내신 모의고사 5회 완주', exp: 200 },
            { id: 'tier_silver', name: '정진하는 학도', category: 'tier', icon: 'star', desc: '실버 학도(500 EXP) 등극', exp: 150 }
        ];

        this.init();
    }

    init() {
        this.renderHeaderCapsule();
    }

    renderHeaderCapsule() {
        const capsule = document.getElementById('user-tier-header-capsule');
        if (!capsule || !window.storage) return;

        const profile = window.storage.userProfile || {};
        const tier = window.storage.getCurrentTier();
        const exp = profile.exp || 0;
        const badgesCount = (profile.badges || []).length;

        // 다음 승급까지 진척도
        let progressPercent = 100;
        let progressText = 'MAX';
        if (tier.next) {
            const range = tier.next - tier.min;
            const current = exp - tier.min;
            progressPercent = Math.min(100, Math.max(0, Math.round((current / range) * 100)));
            progressText = `${exp} / ${tier.next} EXP`;
        }

        const tierIcons = {
            bronze: '🌱',
            silver: '🥉',
            gold: '🥈',
            platinum: '🥇',
            diamond: '💎',
            master: '👑'
        };

        capsule.innerHTML = `
            <div onclick="window.achievements.openModal()" 
                class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 shadow-xs cursor-pointer transition-all active:scale-95 group">
                <span class="text-base">${tierIcons[tier.key] || '🏅'}</span>
                <div class="text-left hidden sm:block">
                    <div class="flex items-center gap-1.5 leading-none">
                        <span class="text-xs font-serif font-bold ${tier.color}">${tier.name}</span>
                        <span class="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-400/20 text-amber-300 font-mono font-semibold">🏅 ${badgesCount}</span>
                    </div>
                    <div class="w-24 bg-slate-700 h-1 rounded-full mt-1 overflow-hidden">
                        <div class="${tier.bg} h-full rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
                    </div>
                </div>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors"></i>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }

    renderDashboardCard() {
        const container = document.getElementById('dash-tier-rank-card') || document.getElementById('dash-welcome-tier-box');
        if (!container || !window.storage) return;

        const profile = window.storage.userProfile || {};
        const tier = window.storage.getCurrentTier();
        const exp = profile.exp || 0;
        const myBadges = profile.badges || [];
        const badgesCount = myBadges.length;

        let nextExpText = '최고 등급에 도달했습니다!';
        let progressPercent = 100;
        if (tier.next) {
            const diff = tier.next - exp;
            const range = tier.next - tier.min;
            progressPercent = Math.min(100, Math.max(0, Math.round(((exp - tier.min) / range) * 100)));
            nextExpText = `다음 승급까지 ${diff} EXP`;
        }

        const tierIcons = {
            bronze: '🌱',
            silver: '🥉',
            gold: '🥈',
            platinum: '🥇',
            diamond: '💎',
            master: '👑'
        };

        container.innerHTML = `
            <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6">
                <!-- 좌측: 티어 엠블럼 & 티어 정보 & 진척도 바 -->
                <div class="flex items-center gap-4 flex-1 min-w-0">
                    <div class="w-16 h-16 rounded-2xl ${tier.bg} text-white flex items-center justify-center text-3xl shadow-sm border border-slate-200 shrink-0">
                        ${tierIcons[tier.key] || '🏅'}
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2">
                            <span class="text-xs font-mono font-bold uppercase tracking-wider text-blue-900">Veritas Scholar Rank</span>
                            <span class="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-mono font-bold">🔥 ${profile.streak || 1}일 연속 출석</span>
                        </div>
                        <h3 class="font-serif font-black text-xl text-slate-900 mt-0.5 flex items-center gap-2">
                            <span>${tier.name}</span>
                            <span class="text-xs font-mono font-normal text-slate-500">(${exp} EXP)</span>
                        </h3>
                        
                        <!-- EXP 진척도 게이지 바 -->
                        <div class="mt-2 max-w-lg">
                            <div class="flex items-center justify-between text-xs font-mono text-slate-500 mb-1">
                                <span>다음 승급: <strong class="text-slate-800 font-bold">${nextExpText}</strong></span>
                                <span class="text-blue-900 font-bold">${progressPercent}%</span>
                            </div>
                            <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                <div class="${tier.bg} h-full rounded-full transition-all duration-700" style="width: ${progressPercent}%"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 우측: 뱃지 현황 & 명예의 전당 바로가기 액션 버튼군 -->
                <div class="flex flex-wrap items-center gap-3 shrink-0 justify-start lg:justify-end pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                    <div class="px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center min-w-28">
                        <div class="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">획득한 업적 뱃지</div>
                        <div class="font-mono font-black text-lg text-amber-600 mt-0.5">🏅 ${badgesCount} / 16</div>
                    </div>
                    <button type="button" onclick="window.achievements.openModal()" 
                        class="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-serif font-bold shadow-xs flex items-center gap-2 transition-all cursor-pointer group active:scale-95">
                        <i data-lucide="trophy" class="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform"></i>
                        <span>명예의 전당 & 업적 도감</span>
                        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform"></i>
                    </button>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
    }

    toggleExpGuide() {
        const box = document.getElementById('achievements-exp-guide-box');
        if (!box) return;
        if (box.classList.contains('hidden')) {
            box.classList.remove('hidden');
        }
        box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        // 반짝임 효과
        box.classList.add('ring-2', 'ring-amber-400');
        setTimeout(() => box.classList.remove('ring-2', 'ring-amber-400'), 1500);
    }

    openModal() {
        const modal = document.getElementById('modal-achievements');
        if (!modal) return;
        this.renderModalContent();
        modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
    }

    closeModal() {
        const modal = document.getElementById('modal-achievements');
        if (modal) modal.classList.add('hidden');
    }

    renderModalContent() {
        const profile = window.storage.userProfile || {};
        const tier = window.storage.getCurrentTier();
        const exp = profile.exp || 0;
        const myBadgeSet = new Set(profile.badges || []);

        const gridEl = document.getElementById('achievements-badges-grid');
        const summaryEl = document.getElementById('achievements-summary-banner');

        if (summaryEl) {
            summaryEl.innerHTML = `
                <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white shadow-md border border-slate-800">
                    <div class="flex items-center gap-4 text-center sm:text-left">
                        <div class="w-16 h-16 rounded-2xl ${tier.bg} text-white flex items-center justify-center text-3xl shadow-lg border-2 border-white/20">
                            ${tier.key === 'master' ? '👑' : tier.key === 'diamond' ? '💎' : tier.key === 'platinum' ? '🥇' : tier.key === 'gold' ? '🥈' : tier.key === 'silver' ? '🥉' : '🌱'}
                        </div>
                        <div>
                            <div class="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-300">
                                <span>Veritas Hall of Fame</span>
                            </div>
                            <h2 class="font-serif font-black text-2xl text-white mt-0.5">${tier.name}</h2>
                            <p class="text-xs text-slate-300 mt-1">총 획득 경험치: <strong>${exp} EXP</strong> • 연속 출석: <strong>${profile.streak || 1}일</strong></p>
                        </div>
                    </div>
                    <div class="bg-white/10 px-4 py-3 rounded-xl border border-white/15 text-center min-w-32">
                        <div class="text-[10px] font-mono uppercase tracking-wider text-slate-300">획득한 업적 뱃지</div>
                        <div class="font-mono font-black text-2xl text-amber-400 mt-0.5">${myBadgeSet.size} / 16</div>
                    </div>
                </div>
            `;
        }

        const guideEl = document.getElementById('achievements-exp-guide-box');
        if (guideEl) {
            guideEl.innerHTML = `
                <div class="p-5 rounded-2xl bg-gradient-to-br from-amber-50/70 via-slate-50 to-blue-50/50 border border-amber-200/90 shadow-2xs space-y-4 transition-all">
                    <div class="flex items-center justify-between pb-3 border-b border-amber-200/60">
                        <div class="flex items-center gap-2">
                            <div class="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-sm shadow-xs font-bold">
                                💡
                            </div>
                            <div>
                                <h4 class="font-serif font-black text-sm text-slate-900">EXP 획득 공식 & 베리타스 티어 승급 룰북</h4>
                                <p class="text-[11px] text-slate-500">모든 학습 활동마다 즉시 EXP가 누적되며 티어 칭호가 자동으로 승급됩니다.</p>
                            </div>
                        </div>
                        <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold border border-amber-300">Real-time Sync</span>
                    </div>

                    <!-- 5대 EXP 획득 경로 카드 그리드 -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        <div class="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                            <div class="flex items-center justify-between mb-1">
                                <span class="font-serif font-bold text-xs text-slate-900 flex items-center gap-1.5">
                                    <span>📅</span> 출석 체크
                                </span>
                                <span class="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">+20 EXP</span>
                            </div>
                            <p class="text-[11px] text-slate-500">매일 첫 학습 시 자동 지급 및 연속 출석(Streak) 갱신</p>
                        </div>

                        <div class="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                            <div class="flex items-center justify-between mb-1">
                                <span class="font-serif font-bold text-xs text-slate-900 flex items-center gap-1.5">
                                    <span>🔤</span> 서술형 어순배열
                                </span>
                                <span class="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">+15~20 EXP</span>
                            </div>
                            <p class="text-[11px] text-slate-500">문장 완성 시 +15 EXP (노미스 원샷 통과 시 +5 EXP 보너스)</p>
                        </div>

                        <div class="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                            <div class="flex items-center justify-between mb-1">
                                <span class="font-serif font-bold text-xs text-slate-900 flex items-center gap-1.5">
                                    <span>📝</span> 오답노트 극복
                                </span>
                                <span class="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">+15 EXP</span>
                            </div>
                            <p class="text-[11px] text-slate-500">취약 오답 재도전 성공 시 문제당 즉시 지급</p>
                        </div>

                        <div class="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                            <div class="flex items-center justify-between mb-1">
                                <span class="font-serif font-bold text-xs text-slate-900 flex items-center gap-1.5">
                                    <span>🎓</span> 내신 실전 모의고사
                                </span>
                                <span class="font-mono text-xs font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">+80~150 EXP</span>
                            </div>
                            <p class="text-[11px] text-slate-500">시험 득점 점수 비례 지급 (20문항 이상 완주 시 1.5배 보너스)</p>
                        </div>

                        <div class="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs sm:col-span-2">
                            <div class="flex items-center justify-between mb-1">
                                <span class="font-serif font-bold text-xs text-slate-900 flex items-center gap-1.5">
                                    <span>🏅</span> 16종 명예 뱃지 수집
                                </span>
                                <span class="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">+100~300 EXP</span>
                            </div>
                            <p class="text-[11px] text-slate-500">출석·어휘·독해·구문 등 각 마일스톤 달성 시 대량 경험치 보너스</p>
                        </div>
                    </div>

                    <!-- 6단계 티어 승급 기준 바 -->
                    <div class="pt-2">
                        <div class="text-[11px] font-serif font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                            <i data-lucide="award" class="w-3.5 h-3.5 text-amber-500"></i>
                            <span>6단계 베리타스 티어 승급 기준표</span>
                        </div>
                        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 text-center text-[10px] font-mono">
                            <div class="p-2 rounded-lg bg-amber-50 border border-amber-200">
                                <div class="font-bold text-amber-900">🌱 Bronze</div>
                                <div class="text-slate-500 mt-0.5">0 ~ 499</div>
                            </div>
                            <div class="p-2 rounded-lg bg-slate-100 border border-slate-300">
                                <div class="font-bold text-slate-800">🥉 Silver</div>
                                <div class="text-slate-500 mt-0.5">500 ~ 999</div>
                            </div>
                            <div class="p-2 rounded-lg bg-yellow-50 border border-yellow-300">
                                <div class="font-bold text-yellow-800">🥈 Gold</div>
                                <div class="text-slate-500 mt-0.5">1,000 ~ 1,999</div>
                            </div>
                            <div class="p-2 rounded-lg bg-teal-50 border border-teal-200">
                                <div class="font-bold text-teal-800">🥇 Platinum</div>
                                <div class="text-slate-500 mt-0.5">2,000 ~ 3,499</div>
                            </div>
                            <div class="p-2 rounded-lg bg-cyan-50 border border-cyan-200">
                                <div class="font-bold text-cyan-800">💎 Diamond</div>
                                <div class="text-slate-500 mt-0.5">3,500 ~ 4,999</div>
                            </div>
                            <div class="p-2 rounded-lg bg-purple-50 border border-purple-200">
                                <div class="font-bold text-purple-900">👑 Master</div>
                                <div class="text-slate-500 mt-0.5">5,000+ EXP</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        if (gridEl) {
            gridEl.innerHTML = this.badgesCatalog.map(b => {
                const isUnlocked = myBadgeSet.has(b.id);
                return `
                    <div class="p-4 rounded-xl border transition-all ${isUnlocked ? 'bg-amber-50/40 border-amber-200 shadow-xs' : 'bg-slate-50 border-slate-200/80 opacity-60'}">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${isUnlocked ? 'bg-amber-500 text-white shadow-sm' : 'bg-slate-200 text-slate-400'}">
                                <i data-lucide="${isUnlocked ? b.icon : 'lock'}" class="w-5 h-5"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between gap-1">
                                    <h4 class="font-serif font-bold text-sm text-slate-900 truncate">${b.name}</h4>
                                    <span class="text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${isUnlocked ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'}">
                                        ${isUnlocked ? '✓ 획득' : `+${b.exp} EXP`}
                                    </span>
                                </div>
                                <p class="text-xs text-slate-600 mt-1 leading-snug">${b.desc}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    triggerBadgeCelebration(badge) {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 80,
                origin: { y: 0.5 }
            });
        }
        if (window.readingEngine && typeof window.readingEngine.showToast === 'function') {
            window.readingEngine.showToast(`🏆 신규 업적 달성! [${badge.name}] (+${badge.exp} EXP)`);
        }
        this.renderHeaderCapsule();
        this.renderDashboardCard();
    }
}

// 전역 인스턴스
window.achievements = new AchievementsEngine();
