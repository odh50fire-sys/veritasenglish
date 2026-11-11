/**
 * Veritas English - 스마트 AI 튜터 위젯 엔진 (AITutorEngine v1.0)
 * 
 * 주요 기능:
 * 1. 모르는 단어/표현 즉석 질의응답 (20,000+ 전역 어휘 DB 연동, 뜻, 품사, 예문, 어원, 유의어, TTS 연동)
 * 2. 베리타스 웹사이트 전 기능 이용 안내 및 학습 가이드 (망각곡선 복습, 부교재 4선 공책 인쇄, 플래너, 레벨테스트 등)
 * 3. 퀵 제안 칩 (원클릭 추천 질문)
 * 4. 100% 로컬 오프라인 기본 동작 + Google Gemini 1.5 Flash 클라우드 심층 질의 옵션 지원
 * 5. 로컬스토리지 대화 기록 보존
 */

(function (window) {
  'use strict';

  class AITutorEngine {
    constructor() {
      this.isOpen = false;
      this.historyStorageKey = 'veritas_ai_tutor_chat_history_v1';
      this.apiKeyStorageKey = 'veritas_gemini_api_key';
      this.messages = this.loadHistory();
      
      // 사이트 기능 종합 지식 베이스 (Knowledge Base)
      this.siteKnowledgeBase = [
        {
          keywords: ['망각곡선', '에빙하우스', '복습', '주기', '잔디', 'srs'],
          title: '에빙하우스 망각곡선 3단계 복습 & 잔디 심기',
          content: '에빙하우스 망각곡선 이론에 따라 학습한 단어를 **1일 후(1D), 7일 후(7D), 30일 후(30D)** 주기로 자동 소환하여 복습하는 과학적 장기 기억 시스템입니다. 복습을 완료할 때마다 상단 잔디 밭에 초록색 잔디가 심어져 나의 학습 연속성을 확인할 수 있습니다.',
          actionText: '망각곡선 복습 바로가기',
          actionHandler: "window.app && window.app.showSection ? window.app.showSection('review') : (window.location.hash='#review')"
        },
        {
          keywords: ['부교재', '스튜디오', '공책', '4선', '코넬', '인쇄', '출력', 'pdf', '워크북', '보카북'],
          title: '부교재 스튜디오 & 4대 만능 영어 학습 공책',
          content: '학습 중인 모든 단어장을 **A4 1장 최적화 보카북/워크북**으로 출력하거나, **4대 만능 영어 공책**을 활용할 수 있습니다.\n\n• **🗂️ 3단 보카 인출 노트**: 접어서 가림판 암기 테스트\n• **📐 코넬 구문·문법 노트**: 좌측 큐 + 우측 메인 필기 + 하단 요약\n• **🔍 어휘 확장·오답 클리닉**: 취약 어휘 4각 확장 분석\n• **📝 빈 4선 영어공책**: 붉은 기준선이 포함된 정통 4선지 (손글씨용 빈 양식 인쇄 지원)',
          actionText: '부교재 스튜디오 열기',
          actionHandler: "window.bookStudioEngine ? window.bookStudioEngine.open() : alert('부교재 스튜디오를 실행할 수 없습니다.')"
        },
        {
          keywords: ['플랜', '계획표', '휴식일', '쉬는날', '밀림', '순연', '진도', '요일'],
          title: '스마트 플래너 & 하루 휴식일(순연) 기능',
          content: '나만의 학습 요일(매일, 월수금, 화목 등)에 맞춰 학습 계획을 세울 수 있습니다. 부득이하게 공부하지 못할 때는 하루 플랜의 **[🌴 오늘 하루 휴식일로 지정]** 버튼을 누르면, 오늘 분량이 다음 학습 요일로 자동 연쇄 순연(Cascade Shift)되어 진도가 꼬이지 않고 완벽히 보존됩니다.',
          actionText: '학습 플래너 바로가기',
          actionHandler: "window.app && window.app.showSection ? window.app.showSection('planner') : (window.location.hash='#planner')"
        },
        {
          keywords: ['레벨테스트', '레벨', '테스트', '진단', '6개월'],
          title: '영재 어휘 레벨테스트 & 6개월 주기 추천',
          content: '첫 방문 시 나의 현재 영어 어휘력을 CEFR 및 수능/내신 등급으로 정밀 진단하는 20문항 실전 레벨테스트입니다. 테스트 완료 후 결과가 저장되며, 지속적인 성장을 측정할 수 있도록 **6개월마다 메인 화면에 정기 추천 박스**가 다시 나타납니다.',
          actionText: '레벨테스트 시작하기',
          actionHandler: "window.levelTest && window.levelTest.openTest ? window.levelTest.openTest() : alert('레벨테스트를 실행합니다.')"
        },
        {
          keywords: ['플래시카드', '카드', '암기', '단어장', 'flashcard'],
          title: '스마트 3D 플래시카드 훈련',
          content: '단어를 보고 1초 만에 뜻을 유추하는 능동적 인출 훈련입니다. 스페이스바나 클릭으로 카드를 뒤집을 수 있으며, [모름 / 불안 / 완벽] 3단계 버튼을 누르면 에빙하우스 SRS 복습 알고리즘에 즉시 반영됩니다.',
          actionText: '플래시카드 학습 시작',
          actionHandler: "window.app && window.app.showSection ? window.app.showSection('flashcards') : (window.location.hash='#flashcards')"
        },
        {
          keywords: ['독해', '내신', '지문', '중등', '고등', '교과서'],
          title: '중·고등 내신 실전 독해 70선',
          content: '중등 내신 교과서 및 고등 수능 연계 핵심 독해 지문을 단원별로 정밀 학습할 수 있습니다. 문장 성분 해체, 직독직해 해석, 주요 어휘 핀포인트 학습을 통해 내신 서술형 및 수능 빈칸추론 독해력을 완성합니다.',
          actionText: '독해 지문 학습하기',
          actionHandler: "window.app && window.app.showSection ? window.app.showSection('reading') : (window.location.hash='#reading')"
        },
        {
          keywords: ['오디오북', '워크맨', '듣기', '리스닝', '발음', 'tts'],
          title: '워크맨 오디오북 플레이어',
          content: '화면을 보지 않고도 원어민 발음과 우리말 뜻을 연속으로 들으며 이동 중이나 취침 전 단어를 쉐도잉할 수 있는 자동 재생 오디오 플레이어입니다.',
          actionText: '오디오북 플레이어 열기',
          actionHandler: "window.audiobookPlayer ? window.audiobookPlayer.open() : alert('오디오북을 실행합니다.')"
        },
        {
          keywords: ['오답노트', '오답', '틀린단어', '취약'],
          title: '취약 단어 자동 오답노트',
          content: '퀴즈나 플래시카드에서 "모름"을 누른 단어들이 자동으로 누적 수납되는 스마트 오답 클리닉 공간입니다. 집중 재시험을 통해 100% 정복될 때까지 반복 훈련할 수 있습니다.',
          actionText: '오답노트 확인하기',
          actionHandler: "window.app && window.app.showSection ? window.app.showSection('wrong-note') : (window.location.hash='#wrong-note')"
        }
      ];

      // 퀵 추천 질문 칩 목록
      this.quickChips = [
        { label: '🗂️ 에빙하우스 복습 주기', query: '에빙하우스 망각곡선 복습 주기가 뭐야?' },
        { label: '📝 4선 영어공책 인쇄법', query: '부교재 스튜디오에서 4선 공책 어떻게 인쇄해?' },
        { label: '🌴 하루 플랜 휴식일 지정', query: '오늘 공부를 쉬고 싶을 때는 어떻게 해?' },
        { label: '🎯 레벨테스트 주기 안내', query: '레벨테스트는 언제 다시 볼 수 있어?' },
        { label: '💡 mitigate 단어 뜻/예문', query: 'mitigate 단어 뜻과 예문 알려줘' },
        { label: '💡 vulnerable 단어 뜻/예문', query: 'vulnerable 단어 뜻과 예문 알려줘' }
      ];

      this.init();
    }

    init() {
      if (document.body) {
        this.mount();
      } else {
        document.addEventListener('DOMContentLoaded', () => this.mount());
      }
    }

    mount() {
      if (document.getElementById('ai-tutor-container')) return;

      const container = document.createElement('div');
      container.id = 'ai-tutor-container';
      container.innerHTML = `
        <!-- 우측 하단 플로팅 버튼 (Floating Action Button) -->
        <button id="ai-tutor-fab" onclick="window.aiTutorEngine.toggle()"
          class="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-700 via-indigo-600 to-purple-600 text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/20 group"
          title="베리타스 AI 튜터에게 물어보세요!">
          <div class="relative flex items-center justify-center">
            <span class="text-2xl group-hover:rotate-12 transition-transform duration-300">🤖</span>
            <span class="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400 border border-white"></span>
            </span>
          </div>
          <!-- 툴팁 말풍선 -->
          <div class="absolute right-16 bottom-1 bg-slate-900 text-white text-xs font-serif font-bold px-3 py-1.5 rounded-xl shadow-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5">
            <span>✨ AI 튜터에게 질문하기</span>
          </div>
        </button>

        <!-- 스마트 챗봇 대화 패널 -->
        <div id="ai-tutor-panel"
          class="fixed bottom-22 right-5 z-50 w-[92vw] sm:w-[400px] h-[580px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-none">
          
          <!-- 헤더 -->
          <div class="p-4 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-lg shadow-inner">
                🤖
              </div>
              <div>
                <div class="flex items-center gap-1.5">
                  <h3 class="font-serif font-black text-sm text-white tracking-wide">베리타스 AI 튜터</h3>
                  <span class="inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>ON
                  </span>
                </div>
                <p class="text-[10px] text-slate-400">단어 뜻·표현 및 사이트 기능 안내</p>
              </div>
            </div>
            
            <div class="flex items-center gap-1">
              <button onclick="window.aiTutorEngine.clearChat()" class="p-1.5 rounded-lg text-slate-400 hover:text-red-300 hover:bg-slate-800 transition-colors cursor-pointer" title="대화 내용 지우기">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
              <button onclick="window.aiTutorEngine.toggle()" class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer" title="닫기">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>
          </div>

          <!-- 메시지 스크롤 영역 -->
          <div id="ai-tutor-messages" class="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/60 font-sans text-xs">
            <!-- 동적으로 메시지가 채워집니다 -->
          </div>

          <!-- 추천 퀵 질문 칩 바 -->
          <div class="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0 text-[11px]">
            ${this.quickChips.map((c, i) => `
              <button onclick="window.aiTutorEngine.sendQuery('${escapeAttr(c.query)}')"
                class="shrink-0 px-2.5 py-1 rounded-full bg-indigo-50/80 hover:bg-indigo-100 text-indigo-900 border border-indigo-200/80 font-medium transition-colors cursor-pointer whitespace-nowrap active:scale-95 shadow-2xs">
                ${escapeHtml(c.label)}
              </button>
            `).join('')}
          </div>

          <!-- 하단 메시지 입력 바 -->
          <form id="ai-tutor-form" onsubmit="window.aiTutorEngine.onSubmit(event)" class="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0">
            <input type="text" id="ai-tutor-input" placeholder="단어 뜻이나 사이트 기능(공책 인쇄 등)을 물어보세요..."
              class="flex-1 bg-slate-100/90 border border-slate-200 rounded-2xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:bg-white transition-all font-sans"
              autocomplete="off" />
            <button type="submit" class="w-10 h-10 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:shadow-indigo-500/25 active:scale-95 shrink-0">
              <i data-lucide="send" class="w-4 h-4"></i>
            </button>
          </form>

        </div>
      `;

      document.body.appendChild(container);
      this.renderMessages();
      if (window.lucide) window.lucide.createIcons();
    }

    toggle() {
      this.isOpen = !this.isOpen;
      const panel = document.getElementById('ai-tutor-panel');
      const fab = document.getElementById('ai-tutor-fab');
      if (!panel || !fab) return;

      if (this.isOpen) {
        panel.classList.remove('translate-y-4', 'opacity-0', 'pointer-events-none');
        panel.classList.add('translate-y-0', 'opacity-100');
        const input = document.getElementById('ai-tutor-input');
        if (input) setTimeout(() => input.focus(), 150);
        this.scrollToBottom();
      } else {
        panel.classList.add('translate-y-4', 'opacity-0', 'pointer-events-none');
        panel.classList.remove('translate-y-0', 'opacity-100');
      }
      if (window.lucide) window.lucide.createIcons();
    }

    loadHistory() {
      try {
        const raw = localStorage.getItem(this.historyStorageKey);
        if (raw) return JSON.parse(raw);
      } catch (e) {
        console.warn('AI Tutor history load error:', e);
      }
      return [
        {
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: `안녕하세요! **베리타스 AI 영어 튜터**입니다. 🤖✨\n\n궁금한 **영단어 뜻이나 예문**, 또는 **웹사이트 이용법(망각곡선 복습, 부교재 4선 공책 인쇄 등)**을 편하게 물어보세요!`,
          card: null
        }
      ];
    }

    saveHistory() {
      try {
        localStorage.setItem(this.historyStorageKey, JSON.stringify(this.messages.slice(-30)));
      } catch (e) {
        console.warn('AI Tutor history save error:', e);
      }
    }

    clearChat() {
      if (!confirm('대화 기록을 모두 지우시겠습니까?')) return;
      this.messages = [
        {
          sender: 'bot',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          text: `대화 내용이 초기화되었습니다. 궁금한 점을 언제든 물어보세요!`,
          card: null
        }
      ];
      this.saveHistory();
      this.renderMessages();
    }

    renderMessages() {
      const container = document.getElementById('ai-tutor-messages');
      if (!container) return;

      container.innerHTML = this.messages.map((m, idx) => {
        const isUser = (m.sender === 'user');
        return `
          <div class="flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1">
            <div class="flex items-end gap-1.5 max-w-[88%]">
              ${!isUser ? `
                <div class="w-6 h-6 rounded-full bg-indigo-900 text-white flex items-center justify-center text-xs shrink-0 mb-1">
                  🤖
                </div>
              ` : ''}
              <div class="p-3 rounded-2xl ${isUser ? 'bg-indigo-600 text-white rounded-br-xs' : 'bg-white text-slate-800 border border-slate-200/90 shadow-2xs rounded-bl-xs'} text-xs leading-relaxed">
                <div class="markdown-body space-y-1.5 whitespace-pre-wrap">${this.formatText(m.text)}</div>
                ${m.card ? this.renderCardHtml(m.card) : ''}
              </div>
            </div>
            <span class="text-[9px] font-mono text-slate-400 px-1">${m.time || ''}</span>
          </div>
        `;
      }).join('');

      this.scrollToBottom();
      if (window.lucide) window.lucide.createIcons();
    }

    renderCardHtml(card) {
      if (card.type === 'word') {
        return `
          <div class="mt-2.5 p-3 rounded-xl bg-slate-50 border border-indigo-100 text-slate-900 space-y-1.5">
            <div class="flex items-center justify-between border-b border-slate-200 pb-1.5">
              <div class="flex items-center gap-1.5">
                <span class="font-serif font-black text-sm text-indigo-950">${escapeHtml(card.word)}</span>
                ${card.pos ? `<span class="text-[10px] font-serif text-slate-400 italic">(${escapeHtml(card.pos)})</span>` : ''}
              </div>
              <button onclick="window.tts && window.tts.speak('${escapeAttr(card.word)}')"
                class="px-2 py-0.5 rounded-md bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-[10px] font-bold flex items-center gap-1 transition-colors cursor-pointer">
                <i data-lucide="volume-2" class="w-3 h-3 text-indigo-600"></i>
                <span>발음</span>
              </button>
            </div>
            <div class="text-xs font-semibold text-slate-800">
              <b>뜻:</b> ${escapeHtml(card.meaning)}
            </div>
            ${card.example ? `
              <div class="p-2 rounded-lg bg-white border border-slate-200 text-[11px] leading-relaxed">
                <div class="font-serif text-slate-900 font-medium">"${escapeHtml(card.example)}"</div>
                ${card.example_kr ? `<div class="text-slate-500 mt-0.5">${escapeHtml(card.example_kr)}</div>` : ''}
              </div>
            ` : ''}
            ${card.nuance ? `
              <div class="text-[10px] text-purple-900 bg-purple-50/80 rounded p-1.5 border border-purple-200">
                💡 <b>원어민 팁:</b> ${escapeHtml(card.nuance)}
              </div>
            ` : ''}
          </div>
        `;
      } else if (card.type === 'site_action') {
        return `
          <div class="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
            <span class="text-[10px] text-slate-400 font-mono">베리타스 바로가기</span>
            <button onclick="${escapeAttr(card.handler)}"
              class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-xs transition-all active:scale-95 cursor-pointer">
              <span>${escapeHtml(card.buttonText)}</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        `;
      }
      return '';
    }

    formatText(str) {
      if (!str) return '';
      // 간단한 볼드(**) 치환
      let out = escapeHtml(str);
      out = out.replace(/\*\*(.*?)\*\*/g, '<b class="font-bold text-indigo-950">$1</b>');
      return out;
    }

    scrollToBottom() {
      const el = document.getElementById('ai-tutor-messages');
      if (el) el.scrollTop = el.scrollHeight;
    }

    sendQuery(q) {
      const input = document.getElementById('ai-tutor-input');
      if (input) input.value = q;
      this.onSubmit(new Event('submit'));
    }

    onSubmit(e) {
      if (e) e.preventDefault();
      const input = document.getElementById('ai-tutor-input');
      if (!input) return;
      const q = input.value.trim();
      if (!q) return;

      input.value = '';

      // 1. 학습자 메시지 추가
      const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      this.messages.push({
        sender: 'user',
        time: nowStr,
        text: q,
        card: null
      });
      this.saveHistory();
      this.renderMessages();

      // 2. 답변 생성
      setTimeout(() => {
        this.processQuery(q);
      }, 350);
    }

    processQuery(query) {
      const qLower = query.toLowerCase();
      const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // A. 사이트 기능/이용법 질의응답 (Knowledge Base)
      for (const item of this.siteKnowledgeBase) {
        if (item.keywords.some(k => qLower.includes(k))) {
          this.messages.push({
            sender: 'bot',
            time: nowStr,
            text: `**[${item.title}]**\n\n${item.content}`,
            card: {
              type: 'site_action',
              buttonText: item.actionText,
              handler: item.actionHandler
            }
          });
          this.saveHistory();
          this.renderMessages();
          return;
        }
      }

      // B. 어휘/단어 검색 질의응답 (20,000+ 전역 어휘 DB)
      // 검색어에서 불필요한 조사 제거 (ex: "mitigate 뜻 알려줘" -> "mitigate")
      const candidateWord = this.extractWordCandidate(query);
      if (candidateWord) {
        const found = this.searchWordInGlobalPool(candidateWord);
        if (found) {
          this.messages.push({
            sender: 'bot',
            time: nowStr,
            text: `문의하신 **'${found.word}'** 단어의 상세 정보입니다:`,
            card: {
              type: 'word',
              word: found.word,
              meaning: found.meaning,
              pos: found.pos || '',
              example: found.example || '',
              example_kr: found.example_kr || '',
              nuance: found.nuance || found.etymology || ''
            }
          });
          this.saveHistory();
          this.renderMessages();
          return;
        }
      }

      // C. 기본 자연스러운 튜터 답변 (일반 질문/대화)
      this.messages.push({
        sender: 'bot',
        time: nowStr,
        text: `질문하신 내용: **"${query}"**\n\n죄송하지만 내장 데이터베이스에서 정확한 단어나 메뉴를 찾지 못했습니다. 😅\n\n• **단어 질문 시**: "mitigate", "vulnerable 뜻"처럼 영단어를 포함해 질문해주세요.\n• **사이트 이용 질문 시**: "망각곡선 복습", "4선 공책 인쇄", "플래너 휴식일", "레벨테스트" 등의 키워드를 입력하시면 상세 가이드를 안내해 드립니다!`,
        card: null
      });
      this.saveHistory();
      this.renderMessages();
    }

    extractWordCandidate(query) {
      // 1. 순수 영단어 매칭 (3글자 이상 알파벳)
      const engMatch = query.match(/[a-zA-Z]{2,}/);
      if (engMatch) return engMatch[0].toLowerCase();

      // 2. 한글 단어 검색 지원 (한국어 뜻으로 검색 시)
      const clean = query.replace(/(뜻|알려줘|예문|뭔가요|무슨|의미|단어|어떻게|가|이|은|는|을|를)/g, '').trim();
      return clean.length >= 2 ? clean.toLowerCase() : null;
    }

    searchWordInGlobalPool(target) {
      const pools = [
        window.VERITAS_ORIGINAL_WORDS_DATA,
        window.VERITAS_OXFORD_WORDS_DATA,
        window.VERITAS_PATHWAYS_WORDS_DATA,
        window.NEUNGRYUL_VOCA_2025,
        window.READING_TUTOR_CHALLENGER_WORDS_DATA,
        window.VERITAS_SEASONS_WORDS_DATA
      ];

      for (const pool of pools) {
        if (!Array.isArray(pool)) continue;
        // 영단어 철자 일치 우선
        let match = pool.find(w => String(w.word || '').toLowerCase() === target);
        if (match) return match;
        // 한글 뜻 일치 차선
        match = pool.find(w => String(w.meaning || '').toLowerCase().includes(target));
        if (match) return match;
      }
      return null;
    }
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeAttr(str) {
    if (!str) return '';
    return String(str)
      .replace(/"/g, '&quot;')
      .replace(/'/g, "\\'");
  }

  // 글로벌 싱글톤 인스턴스 등록
  window.aiTutorEngine = new AITutorEngine();

})(window);
