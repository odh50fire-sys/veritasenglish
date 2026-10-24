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
        const container = document.getElementById('dash-achievement-card');
        if (!container || !window.storage) return;

        const profile = window.storage.userProfile || {};
        const tier = window.storage.getCurrentTier();
        const exp = profile.exp || 0;
        const myBadges = profile.badges || [];

        let nextExpText = '최고 등급에 도달했습니다!';
        let progressPercent = 100;
        if (tier.next) {
            const diff = tier.next - exp;
            const range = tier.next - tier.min;
            progressPercent = Math.min(100, Math.max(0, Math.round(((exp - tier.min) / range) * 100)));
            nextExpText = `다음 등급까지 <strong class="text-blue-900">${diff} EXP</strong> 남았습니다`;
        }

        container.innerHTML = `
            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs relative overflow-hidden">
                <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 rounded-2xl ${tier.bg} text-white flex items-center justify-center text-2xl shadow-md border-2 border-white">
                            ${tier.key === 'master' ? '👑' : tier.key === 'diamond' ? '💎' : tier.key === 'platinum' ? '🥇' : tier.key === 'gold' ? '🥈' : tier.key === 'silver' ? '🥉' : '🌱'}
                        </div>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">Veritas Scholar Rank</span>
                                <span class="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[11px] font-bold">연속 ${profile.streak || 1}일 출석 🔥</span>
                            </div>
                            <h3 class="font-serif font-black text-xl text-slate-900 mt-0.5">${tier.name}</h3>
                            <p class="text-xs text-slate-500 mt-0.5">${nextExpText}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 self-stretch sm:self-auto justify-end">
                        <button type="button" onclick="window.achievements.openModal()" 
                            class="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-serif font-semibold shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer">
                            <i data-lucide="trophy" class="w-4 h-4 text-amber-400"></i>
                            <span>명예의 전당 & 뱃지 도감 (${myBadges.length}/16)</span>
                        </button>
                    </div>
                </div>

                <!-- 진척도 바 -->
                <div class="mt-4 pt-4 border-t border-slate-100">
                    <div class="flex items-center justify-between text-xs font-mono text-slate-500 mb-1.5">
                        <span>현재 보유 EXP: <strong class="text-slate-900 font-bold">${exp} EXP</strong></span>
                        <span>${progressPercent}% 달성</span>
                    </div>
                    <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div class="${tier.bg} h-full rounded-full transition-all duration-700" style="width: ${progressPercent}%"></div>
                    </div>
                </div>
            </div>
        `;

        if (window.lucide) window.lucide.createIcons();
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
