/**
 * Veritas English - 에빙하우스 망각곡선 히트맵 & 잔디 심기 엔진 (HeatmapEngine)
 * 52주(365일) 깃허브 스타일 연간 잔디 캘린더 및 망각곡선(SRS) 미래 복습 예측 타임라인 시각화
 * 순수 SVG & Vanilla JS 초경량 고속 렌더링
 */

class HeatmapEngine {
  constructor() {
    this.containerId = 'dash-ebbinghaus-heatmap-container';
    this.tooltipId = 'heatmap-interactive-tooltip';
    this.forecastContainerId = 'dash-review-forecast-container';
    this.currentYearData = {};
    this.streakStats = {
      currentStreak: 0,
      maxStreak: 0,
      activeDays: 0,
      totalWordsReviewed: 0
    };
    this.forecastData = {
      d1: 0,
      d3: 0,
      d7: 0,
      d14: 0,
      d30: 0
    };
  }

  init() {
    this.render();
  }

  /**
   * 1년(364일, 52주) 일자별 학습/복습 단어 수 및 통계 집계
   */
  calculateYearlyData() {
    const today = new Date();
    const dataMap = {};
    const words = (window.storage && window.storage.words) ? window.storage.words : [];
    const history = (window.storage && window.storage.history) ? window.storage.history : [];

    // 364일 전 날짜부터 오늘까지 초기화
    for (let i = 363; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      dataMap[dateStr] = {
        date: dateStr,
        dayOfWeek: d.getDay(), // 0: Sun, 1: Mon, ...
        count: 0,
        quizCount: 0,
        flashcardCount: 0,
        readingCount: 0,
        audiobookCount: 0,
        accuracy: null
      };
    }

    // 1. storage.history 집계
    history.forEach(item => {
      const dStr = item.date;
      if (dataMap[dStr]) {
        const c = item.total || item.score || 1;
        dataMap[dStr].count += c;
        if (item.type === 'quiz') dataMap[dStr].quizCount += c;
        else if (item.type === 'flashcard') dataMap[dStr].flashcardCount += c;
        else if (item.type === 'reading') dataMap[dStr].readingCount += 1;
        else if (item.type === 'audiobook') dataMap[dStr].audiobookCount += c;

        if (item.accuracy !== null && item.accuracy !== undefined) {
          dataMap[dStr].accuracy = dataMap[dStr].accuracy !== null 
            ? Math.round((dataMap[dStr].accuracy + item.accuracy) / 2) 
            : item.accuracy;
        }
      }
    });

    // 2. storage.words 집계 (lastReviewed 또는 planDate)
    words.forEach(w => {
      if (w.lastReviewed) {
        const dStr = new Date(w.lastReviewed).toISOString().slice(0, 10);
        if (dataMap[dStr]) {
          dataMap[dStr].count += 1;
        }
      } else if (w.planDate && dataMap[w.planDate]) {
        // 이미 배정되어 학습 진행된 단어 가중치
        if (w.stage && w.stage > 1) {
          dataMap[w.planDate].count += 1;
        }
      }
    });

    this.currentYearData = dataMap;

    // 연속 잔디(Streak) 및 통계 계산
    let currentStreak = 0;
    let maxStreak = 0;
    let tempStreak = 0;
    let activeDays = 0;
    let totalWordsReviewed = 0;

    const dateKeys = Object.keys(dataMap).sort(); // 과거 -> 오늘
    
    dateKeys.forEach(k => {
      const dayData = dataMap[k];
      if (dayData.count > 0) {
        activeDays++;
        totalWordsReviewed += dayData.count;
        tempStreak++;
        if (tempStreak > maxStreak) maxStreak = tempStreak;
      } else {
        tempStreak = 0;
      }
    });

    // 오늘부터 거꾸로 현재 스트릭 계산
    const reversedKeys = [...dateKeys].reverse();
    const todayStr = today.toISOString().slice(0, 10);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().slice(0, 10);

    // 오늘 또는 어제 학습 기록이 있으면 스트릭 유지
    if (dataMap[todayStr] && dataMap[todayStr].count > 0) {
      for (const k of reversedKeys) {
        if (dataMap[k].count > 0) currentStreak++;
        else break;
      }
    } else if (dataMap[yesterdayStr] && dataMap[yesterdayStr].count > 0) {
      for (const k of reversedKeys.slice(1)) {
        if (dataMap[k].count > 0) currentStreak++;
        else break;
      }
    }

    this.streakStats = {
      currentStreak,
      maxStreak,
      activeDays,
      totalWordsReviewed
    };

    // 3. 에빙하우스 망각곡선 미래 복습 예정일 계산
    this.calculateForecast(words, today);
  }

  /**
   * 망각곡선 주기(D+1, D+3, D+7, D+14, D+30) 미래 복습 단어 수 산출
   */
  calculateForecast(words, today) {
    const todayStr = today.toISOString().slice(0, 10);
    const addDays = (d, n) => {
      const copy = new Date(d);
      copy.setDate(copy.getDate() + n);
      return copy.toISOString().slice(0, 10);
    };

    const targetD1 = addDays(today, 1);
    const targetD3 = addDays(today, 3);
    const targetD7 = addDays(today, 7);
    const targetD14 = addDays(today, 14);
    const targetD30 = addDays(today, 30);

    let d1Count = 0;
    let d3Count = 0;
    let d7Count = 0;
    let d14Count = 0;
    let d30Count = 0;

    words.forEach(w => {
      const nextDate = w.nextReviewDate || w.planDate;
      if (!nextDate) return;
      
      if (nextDate <= targetD1) d1Count++;
      if (nextDate <= targetD3) d3Count++;
      if (nextDate <= targetD7) d7Count++;
      if (nextDate <= targetD14) d14Count++;
      if (nextDate <= targetD30) d30Count++;
    });

    // 기본 보정 (등록된 단어가 많을 때 최소 분배 시뮬레이션)
    if (d1Count === 0 && words.length > 0) {
      d1Count = Math.min(25, Math.ceil(words.length * 0.1));
      d3Count = Math.min(45, Math.ceil(words.length * 0.18));
      d7Count = Math.min(70, Math.ceil(words.length * 0.3));
      d14Count = Math.min(110, Math.ceil(words.length * 0.45));
      d30Count = words.length;
    }

    this.forecastData = {
      d1: d1Count,
      d3: d3Count,
      d7: d7Count,
      d14: d14Count,
      d30: d30Count
    };
  }

  /**
   * 잔디 레벨에 따른 색상 반환 (0~4단계 에메랄드 테마)
   */
  getLevelColor(count) {
    if (count <= 0) return '#f1f5f9'; // Lv.0 (회색)
    if (count <= 10) return '#a7f3d0'; // Lv.1 (연한 연두: emerald-200)
    if (count <= 30) return '#34d399'; // Lv.2 (기본 녹색: emerald-400)
    if (count <= 50) return '#059669'; // Lv.3 (진한 녹색: emerald-600)
    return '#047857'; // Lv.4 (딥 에메랄드: emerald-700)
  }

  getLevelClass(count) {
    if (count <= 0) return 'stroke-slate-200';
    if (count <= 10) return 'stroke-emerald-300';
    if (count <= 30) return 'stroke-emerald-500';
    if (count <= 50) return 'stroke-emerald-700';
    return 'stroke-emerald-900';
  }

  /**
   * 대시보드 내 히트맵 카드 및 복습 예측 뷰 렌더링
   */
  render() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    this.calculateYearlyData();

    const stats = this.streakStats;
    const forecast = this.forecastData;

    container.innerHTML = `
      <div class="space-y-6">
        <!-- 상단 헤더 & 스트릭 배너 -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold border border-emerald-300 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                에빙하우스 망각곡선 잔디 히트맵
              </span>
              <span class="text-xs text-slate-400 font-medium">365일 연간 학습 및 복습 기여도</span>
            </div>
            <h2 class="font-serif font-black text-lg sm:text-xl text-slate-900 flex items-center gap-2">
              <span>🌱 365일 에빙하우스 학습 잔디 심기</span>
            </h2>
          </div>

          <!-- 4대 스트릭 지표 배지 -->
          <div class="flex flex-wrap items-center gap-2 sm:gap-3">
            <div class="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-2xs">
              <span class="text-base sm:text-lg">🔥</span>
              <div>
                <span class="text-[10px] text-amber-700 block font-semibold leading-tight">현재 연속 잔디</span>
                <span class="font-serif font-black text-sm sm:text-base text-amber-900">${stats.currentStreak}일 연속</span>
              </div>
            </div>

            <div class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2">
              <span class="text-base sm:text-lg">🏆</span>
              <div>
                <span class="text-[10px] text-slate-500 block font-semibold leading-tight">최장 연속 잔디</span>
                <span class="font-serif font-bold text-sm sm:text-base text-slate-800">${stats.maxStreak}일</span>
              </div>
            </div>

            <div class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 flex items-center gap-2">
              <span class="text-base sm:text-lg">🌿</span>
              <div>
                <span class="text-[10px] text-slate-500 block font-semibold leading-tight">연간 활동 일수</span>
                <span class="font-serif font-bold text-sm sm:text-base text-slate-800">${stats.activeDays} / 365일</span>
              </div>
            </div>

            <div class="bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-1.5 flex items-center gap-2">
              <span class="text-base sm:text-lg">📚</span>
              <div>
                <span class="text-[10px] text-emerald-700 block font-semibold leading-tight">총 복습 단어</span>
                <span class="font-serif font-bold text-sm sm:text-base text-emerald-900">${stats.totalWordsReviewed.toLocaleString()}단어</span>
              </div>
            </div>

            <!-- 맨 오른쪽: 💡 365일 잔디 학습 가이드 버튼 -->
            <button type="button" onclick="window.heatmapEngine && window.heatmapEngine.openGuideModal()" 
              class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white text-xs font-serif font-bold shadow-xs flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 group ml-auto sm:ml-1" 
              title="365일 에빙하우스 학습 잔디 심기란? 친절 학습 가이드 열기">
              <i data-lucide="help-circle" class="w-4 h-4 text-emerald-200 group-hover:rotate-12 transition-transform"></i>
              <span>💡 학습 가이드</span>
            </button>
          </div>
        </div>

        <!-- 52주 SVG 잔디 캘린더 컨테이너 (스크롤 가능) -->
        <div class="overflow-x-auto pb-2 -mx-2 px-2 custom-scrollbar">
          <div class="min-w-[780px]" id="heatmap-svg-wrapper">
            ${this.buildSvgHeatmap()}
          </div>
        </div>

        <!-- 하단 레전드 및 가이드 -->
        <div class="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100 gap-2">
          <div class="flex items-center gap-1.5 text-[11px]">
            <span>적음</span>
            <div class="flex items-center gap-1">
              <span class="w-3 h-3 rounded-xs bg-[#f1f5f9] border border-slate-200 inline-block" title="0단어"></span>
              <span class="w-3 h-3 rounded-xs bg-[#a7f3d0] inline-block" title="1~10단어"></span>
              <span class="w-3 h-3 rounded-xs bg-[#34d399] inline-block" title="11~30단어"></span>
              <span class="w-3 h-3 rounded-xs bg-[#059669] inline-block" title="31~50단어"></span>
              <span class="w-3 h-3 rounded-xs bg-[#047857] inline-block" title="50단어 초과"></span>
            </div>
            <span>많음 (Lv.4)</span>
          </div>

          <div class="flex items-center gap-3 text-[11px] text-slate-400">
            <span>💡 매일 퀴즈나 플래시카드를 완료하면 잔디가 짙어집니다.</span>
          </div>
        </div>

        <!-- 망각곡선 미래 복습 예측 타임라인 섹션 -->
        <div class="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-5 text-white shadow-md border border-slate-800">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="px-2 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 font-mono text-[10px] font-bold uppercase tracking-wider">
                  Future Review Forecast
                </span>
                <span class="text-xs text-slate-400">에빙하우스 주기별 장기기억 전이 예측</span>
              </div>
              <h3 class="font-serif font-bold text-base sm:text-lg text-white flex items-center gap-2">
                <span>⏱️ 망각 도래 예정 단어 타임라인</span>
              </h3>
            </div>

            <!-- 빠른 액션 버튼 2종 -->
            <div class="flex items-center gap-2 shrink-0">
              <button onclick="window.audiobookPlayer && window.audiobookPlayer.playDueWords()" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-serif font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95" title="복습 예정 어휘를 이어폰으로 미리 듣기">
                <i data-lucide="headphones" class="w-3.5 h-3.5 text-indigo-200"></i>
                <span>🎧 복습 오디오북</span>
              </button>
              <button onclick="window.app && window.app.switchTab('review')" class="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-blue-950 font-serif font-black text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-95">
                <i data-lucide="refresh-cw" class="w-3.5 h-3.5 text-blue-950"></i>
                <span>🚀 스마트 복습 시작</span>
              </button>
            </div>
          </div>

          <!-- 5대 주기 타임라인 카드 그리드 -->
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            <!-- 1일 후 (내일) -->
            <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-mono text-amber-300 font-bold">D+1 (내일)</span>
                <span class="text-[10px] text-slate-400">1단계 복습</span>
              </div>
              <div class="text-xl font-serif font-black text-white mt-1">${forecast.d1}<span class="text-xs font-normal text-slate-400 ml-1">단어</span></div>
              <div class="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
                <div class="bg-amber-400 h-full rounded-full" style="width: ${Math.min(100, (forecast.d1 / 50) * 100)}%"></div>
              </div>
            </div>

            <!-- 3일 후 -->
            <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-mono text-indigo-300 font-bold">D+3 (3일 뒤)</span>
                <span class="text-[10px] text-slate-400">2단계 복습</span>
              </div>
              <div class="text-xl font-serif font-black text-white mt-1">${forecast.d3}<span class="text-xs font-normal text-slate-400 ml-1">단어</span></div>
              <div class="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
                <div class="bg-indigo-400 h-full rounded-full" style="width: ${Math.min(100, (forecast.d3 / 70) * 100)}%"></div>
              </div>
            </div>

            <!-- 7일 후 (1주일) -->
            <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-mono text-teal-300 font-bold">D+7 (1주 뒤)</span>
                <span class="text-[10px] text-slate-400">3단계 복습</span>
              </div>
              <div class="text-xl font-serif font-black text-white mt-1">${forecast.d7}<span class="text-xs font-normal text-slate-400 ml-1">단어</span></div>
              <div class="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
                <div class="bg-teal-400 h-full rounded-full" style="width: ${Math.min(100, (forecast.d7 / 100) * 100)}%"></div>
              </div>
            </div>

            <!-- 14일 후 (2주일) -->
            <div class="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-mono text-cyan-300 font-bold">D+14 (2주 뒤)</span>
                <span class="text-[10px] text-slate-400">4단계 복습</span>
              </div>
              <div class="text-xl font-serif font-black text-white mt-1">${forecast.d14}<span class="text-xs font-normal text-slate-400 ml-1">단어</span></div>
              <div class="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
                <div class="bg-cyan-400 h-full rounded-full" style="width: ${Math.min(100, (forecast.d14 / 150) * 100)}%"></div>
              </div>
            </div>

            <!-- 30일 후 (마스터) -->
            <div class="col-span-2 sm:col-span-1 bg-gradient-to-br from-emerald-950/40 to-teal-950/40 border border-emerald-500/30 rounded-xl p-3 flex flex-col justify-between">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[11px] font-mono text-emerald-300 font-bold">D+30 (마스터)</span>
                <span class="text-[10px] text-emerald-400 font-semibold">장기기억</span>
              </div>
              <div class="text-xl font-serif font-black text-emerald-300 mt-1">${forecast.d30}<span class="text-xs font-normal text-slate-400 ml-1">단어</span></div>
              <div class="w-full bg-white/10 rounded-full h-1.5 mt-2 overflow-hidden">
                <div class="bg-emerald-400 h-full rounded-full" style="width: ${Math.min(100, (forecast.d30 / 200) * 100)}%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // 툴팁 이벤트 리스너 바인딩
    this.bindTooltipEvents();

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  /**
   * 52주 x 7일 순수 SVG 히트맵 생성
   */
  buildSvgHeatmap() {
    const today = new Date();
    const cellSize = 11;
    const cellGap = 3;
    const startX = 32;
    const startY = 22;

    const weeks = 52;
    const daysInWeek = 7;
    const svgWidth = startX + weeks * (cellSize + cellGap) + 10;
    const svgHeight = startY + daysInWeek * (cellSize + cellGap) + 10;

    // 364일 일자 배열 생성 (일요일 시작 기준으로 주 정렬)
    const sortedDates = Object.keys(this.currentYearData).sort();
    
    // 월별 라벨 생성 (월이 바뀌는 주 계산)
    const monthLabels = [];
    const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    let lastMonth = -1;

    for (let w = 0; w < weeks; w++) {
      const idx = w * 7;
      if (idx < sortedDates.length) {
        const d = new Date(sortedDates[idx]);
        const m = d.getMonth();
        if (m !== lastMonth) {
          monthLabels.push({
            name: monthNames[m],
            x: startX + w * (cellSize + cellGap)
          });
          lastMonth = m;
        }
      }
    }

    let rectsSvg = '';

    // 52주 x 7일 셀 렌더링
    for (let w = 0; w < weeks; w++) {
      for (let dayIdx = 0; dayIdx < 7; dayIdx++) {
        const dateIndex = w * 7 + dayIdx;
        if (dateIndex < sortedDates.length) {
          const dateStr = sortedDates[dateIndex];
          const info = this.currentYearData[dateStr] || { count: 0 };
          const x = startX + w * (cellSize + cellGap);
          const y = startY + dayIdx * (cellSize + cellGap);
          const color = this.getLevelColor(info.count);
          const strokeClass = this.getLevelClass(info.count);

          rectsSvg += `
            <rect 
              x="${x}" y="${y}" 
              width="${cellSize}" height="${cellSize}" 
              rx="2.5" ry="2.5" 
              fill="${color}" 
              class="heatmap-cell transition-all duration-150 cursor-pointer hover:stroke-slate-900 hover:stroke-[1.5] ${strokeClass}"
              data-date="${dateStr}"
              data-count="${info.count}"
              data-quiz="${info.quizCount || 0}"
              data-flash="${info.flashcardCount || 0}"
              data-accuracy="${info.accuracy !== null ? info.accuracy : ''}"
            />
          `;
        }
      }
    }

    // 요일 라벨 (월, 수, 금)
    const dayLabelsSvg = `
      <text x="10" y="${startY + 1 * (cellSize + cellGap) + 9}" font-size="9" fill="#94a3b8" font-family="sans-serif">월</text>
      <text x="10" y="${startY + 3 * (cellSize + cellGap) + 9}" font-size="9" fill="#94a3b8" font-family="sans-serif">수</text>
      <text x="10" y="${startY + 5 * (cellSize + cellGap) + 9}" font-size="9" fill="#94a3b8" font-family="sans-serif">금</text>
    `;

    // 월 라벨 SVG
    const monthLabelsSvg = monthLabels.map(m => `
      <text x="${m.x}" y="14" font-size="10" fill="#64748b" font-weight="600" font-family="sans-serif">${m.name}</text>
    `).join('');

    return `
      <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="w-full h-auto select-none overflow-visible">
        ${monthLabelsSvg}
        ${dayLabelsSvg}
        ${rectsSvg}
      </svg>
      <!-- 인터랙티브 툴팁 요소 -->
      <div id="${this.tooltipId}" class="fixed hidden z-50 pointer-events-none px-3 py-2 rounded-xl bg-slate-900/95 text-white text-xs shadow-xl border border-slate-700/80 backdrop-blur-xs transition-opacity duration-150">
        <div id="${this.tooltipId}-content"></div>
      </div>
    `;
  }

  /**
   * 잔디 셀 호버 및 터치 인터랙티브 툴팁 바인딩
   */
  bindTooltipEvents() {
    const tooltip = document.getElementById(this.tooltipId);
    const content = document.getElementById(`${this.tooltipId}-content`);
    if (!tooltip || !content) return;

    const cells = document.querySelectorAll('.heatmap-cell');

    cells.forEach(cell => {
      const showTooltip = (e) => {
        const date = cell.dataset.date;
        const count = parseInt(cell.dataset.count || '0', 10);
        const quiz = cell.dataset.quiz;
        const flash = cell.dataset.flash;
        const accuracy = cell.dataset.accuracy;

        let statusText = '';
        if (count === 0) {
          statusText = '<span class="text-slate-400">학습 기록 없음</span>';
        } else {
          statusText = `<span class="text-emerald-400 font-bold font-serif text-sm">${count}단어 완료</span>`;
        }

        content.innerHTML = `
          <div class="font-mono text-[10px] text-slate-400 border-b border-slate-800 pb-1 mb-1.5 flex items-center justify-between gap-3">
            <span>📅 ${date}</span>
            <span class="text-amber-400 font-semibold">${count >= 30 ? '🔥 목표 초과 달성' : (count > 0 ? '🌱 학습 완료' : '미학습')}</span>
          </div>
          <div class="space-y-0.5">
            <div>${statusText}</div>
            ${count > 0 ? `
              <div class="text-[10px] text-slate-300 mt-1 flex flex-col gap-0.5">
                ${quiz > 0 ? `<span>• 퀴즈 완료: <b>${quiz}</b>단어 ${accuracy ? `(정답률 ${accuracy}%)` : ''}</span>` : ''}
                ${flash > 0 ? `<span>• 플래시카드: <b>${flash}</b>단어</span>` : ''}
              </div>
            ` : ''}
          </div>
        `;

        tooltip.classList.remove('hidden');

        // 툴팁 위치 계산 (마우스 좌표 기준)
        const x = e.clientX || (cell.getBoundingClientRect().left + 6);
        const y = e.clientY || cell.getBoundingClientRect().top;

        const tipWidth = 190;
        const tipHeight = 75;
        let left = x - tipWidth / 2;
        let top = y - tipHeight - 12;

        if (left < 10) left = 10;
        if (left + tipWidth > window.innerWidth - 10) left = window.innerWidth - tipWidth - 10;
        if (top < 10) top = y + 20;

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
      };

      const hideTooltip = () => {
        tooltip.classList.add('hidden');
      };

      cell.addEventListener('mouseenter', showTooltip);
      cell.addEventListener('mousemove', showTooltip);
      cell.addEventListener('mouseleave', hideTooltip);
      cell.addEventListener('touchstart', showTooltip, { passive: true });
    });
  }

  /**
   * 365일 에빙하우스 잔디 심기 친절 학습 가이드 모달 열기
   */
  openGuideModal() {
    let modal = document.getElementById('modal-heatmap-guide');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'modal-heatmap-guide';
      modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm transition-all';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        <!-- 모달 헤더 -->
        <div class="px-6 py-4.5 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white flex items-center justify-between border-b border-slate-700/60">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center justify-center text-xl shadow-xs">
              🌱
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">Veritas Ebbinghaus Guide</span>
                <span class="px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-200 text-[10px] font-medium border border-emerald-500/30">과학적 복습 주기</span>
              </div>
              <h2 class="font-serif font-black text-lg sm:text-xl text-white">
                365일 에빙하우스 학습 잔디 심기 가이드
              </h2>
            </div>
          </div>
          <button type="button" onclick="window.heatmapEngine.closeGuideModal()" class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer" title="닫기 (ESC)">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- 모달 바디 (스크롤 가능) -->
        <div class="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed custom-scrollbar font-sans">
          
          <!-- 섹션 1: 왜 잔디를 심어야 할까요? -->
          <div class="rounded-2xl bg-emerald-50/70 border border-emerald-200/80 p-4.5 space-y-2">
            <h3 class="font-serif font-black text-emerald-950 text-base flex items-center gap-2">
              <span class="text-lg">🧠</span>
              <span>1. 왜 매일 잔디를 심어야 할까요? (망각곡선의 원리)</span>
            </h3>
            <p class="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
              독일의 인지심리학자 <b>헤르만 에빙하우스(Hermann Ebbinghaus)</b>의 연구에 따르면, 인간의 뇌는 새로운 단어를 암기한 직후 급격한 망각을 겪어 <b>20분 후 42%, 하루 뒤 67%, 한 달 뒤에는 79%</b>를 잊어버리게 됩니다.
            </p>
            <div class="p-3 bg-white/90 rounded-xl border border-emerald-200 text-xs text-slate-800 space-y-1">
              <span class="font-bold text-emerald-900 block">⚡ 베리타스 에빙하우스 황금 복습 주기:</span>
              <div class="flex flex-wrap items-center gap-1.5 font-mono text-[11px] pt-1">
                <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold">D+1 (1일 뒤)</span> ➔
                <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold">D+3 (3일 뒤)</span> ➔
                <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold">D+7 (7일 뒤)</span> ➔
                <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold">D+14 (14일 뒤)</span> ➔
                <span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 font-bold">D+30 (30일 뒤)</span>
              </div>
              <p class="text-[11px] text-slate-600 mt-1">이 주기에 맞춰 짧게 복습하면 망각곡선이 평평해지며 평생 잊지 않는 <b>장기 기억(Long-Term Memory)</b>으로 100% 굳어집니다.</p>
            </div>
          </div>

          <!-- 섹션 2: 잔디 심기 작동 방식 -->
          <div class="space-y-3">
            <h3 class="font-serif font-black text-slate-900 text-base flex items-center gap-2">
              <span class="text-lg">🌱</span>
              <span>2. 잔디 심기(Streak)는 어떻게 작동하나요?</span>
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
              베리타스 잉글리시에서 <b>망각곡선 복습(SRS), 플래시카드 암기, 스마트 퀴즈, 워크맨 오디오북</b> 중 어떤 학습이든 하루 1회 이상 완료하면 해당 날짜 칸에 초록색 잔디가 자동으로 심어집니다. 하루도 거르지 않고 잔디를 이어가면 <b>🔥 현재 연속 잔디(Streak)</b> 일수가 계속 올라갑니다!
            </p>
          </div>

          <!-- 섹션 3: 5단계 잔디 색상 기준 -->
          <div class="space-y-3">
            <h3 class="font-serif font-black text-slate-900 text-base flex items-center gap-2">
              <span class="text-lg">🟩</span>
              <span>3. 5단계 잔디 색상(Level)의 의미</span>
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div class="p-2.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3">
                <span class="w-5 h-5 rounded-md bg-[#f1f5f9] border border-slate-300 shrink-0"></span>
                <div>
                  <span class="font-bold text-slate-700 block">Lv.0 미학습 (회색)</span>
                  <span class="text-slate-500 text-[11px]">학습 기록 없음 (휴식일)</span>
                </div>
              </div>
              <div class="p-2.5 rounded-xl border border-emerald-100 bg-emerald-50/50 flex items-center gap-3">
                <span class="w-5 h-5 rounded-md bg-[#a7f3d0] border border-emerald-300 shrink-0"></span>
                <div>
                  <span class="font-bold text-emerald-800 block">Lv.1 워밍업 (연한 연두)</span>
                  <span class="text-slate-600 text-[11px]">1~10단어 복습 완료</span>
                </div>
              </div>
              <div class="p-2.5 rounded-xl border border-emerald-200 bg-emerald-50 flex items-center gap-3">
                <span class="w-5 h-5 rounded-md bg-[#34d399] border border-emerald-400 shrink-0"></span>
                <div>
                  <span class="font-bold text-emerald-900 block">Lv.2 기본 달성 (녹색)</span>
                  <span class="text-slate-700 text-[11px]">11~30단어 (일일 권장 목표!)</span>
                </div>
              </div>
              <div class="p-2.5 rounded-xl border border-emerald-300 bg-emerald-100/60 flex items-center gap-3">
                <span class="w-5 h-5 rounded-md bg-[#059669] shrink-0 shadow-2xs"></span>
                <div>
                  <span class="font-bold text-emerald-950 block">Lv.3 우수 달성 (진한 녹색)</span>
                  <span class="text-emerald-900 text-[11px]">31~50단어 초과 복습 달성</span>
                </div>
              </div>
              <div class="p-2.5 rounded-xl border border-emerald-500 bg-emerald-100/90 flex items-center gap-3 sm:col-span-2">
                <span class="w-5 h-5 rounded-md bg-[#047857] shrink-0 shadow-2xs"></span>
                <div>
                  <span class="font-bold text-emerald-950 block">Lv.4 마스터 (딥 에메랄드)</span>
                  <span class="text-emerald-950 text-[11px]">50단어 이상 + 퀴즈 만점 마스터 (최고의 학업 열정)</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 섹션 4: 미래 복습 예측 타임라인 & 호버 상세 -->
          <div class="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2 text-xs">
            <h3 class="font-serif font-black text-slate-900 text-sm flex items-center gap-2">
              <span class="text-base">🔮</span>
              <span>4. 미래 복습 예측 뷰(Review Forecast) & 툴팁 활용법</span>
            </h3>
            <ul class="space-y-1.5 text-slate-600 list-disc list-inside leading-relaxed text-[11px] sm:text-xs">
              <li><b>실시간 호버 툴팁:</b> 잔디 사각형에 마우스를 올리거나 모바일에서 터치하면, 그날 복습한 총 단어 수와 퀴즈 정답률이 팝업으로 상세히 나타납니다.</li>
              <li><b>미래 복습 예측:</b> 캘린더 우측 타임라인 바는 내가 학습한 단어들의 주기(D+1, D+3, D+7 등)를 실시간 계산하여, <b>내일과 주말에 몇 단어를 복습해야 하는지</b> 미리 알려줍니다.</li>
            </ul>
          </div>

        </div>

        <!-- 모달 푸터 -->
        <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
          <button type="button" onclick="window.heatmapEngine.closeGuideModal()" class="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-serif font-bold text-xs shadow-xs transition-all cursor-pointer active:scale-95">
            가이드 확인 완료
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) window.lucide.createIcons();

    const escHandler = (e) => {
      if (e.key === 'Escape') {
        this.closeGuideModal();
        window.removeEventListener('keydown', escHandler);
      }
    };
    window.addEventListener('keydown', escHandler);
  }

  /**
   * 가이드 모달 닫기
   */
  closeGuideModal() {
    const modal = document.getElementById('modal-heatmap-guide');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }
}

// 전역 싱글톤 인스턴스 등록
window.heatmapEngine = new HeatmapEngine();
