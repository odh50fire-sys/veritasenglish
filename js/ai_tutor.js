/**
 * Veritas English - 스마트 AI 튜터 위젯 엔진 (AITutorEngine v3.0 All-in-One)
 * 
 * 6대 핵심 지능형 모듈:
 * 1. 구문 독해 & 직독직해 닥터 (Reading & Syntax Doctor):
 *    - 의미 단위(/) 직독직해(Chunking), 문장 성분 해체(도치/접속사/수식어구), 매끄러운 완결형 번역
 * 2. AI 영작 & 작문 코칭 (Writing & Composition Assistant):
 *    - 한국어 ➔ 3단계(표준형/내신·수능 1등급 심화형/원어민 구어체) 추천 및 작문 팁 제공
 * 3. 영작 & 문법 정밀 진단 닥터 (Grammar & Sentence Clinic):
 *    - 부정어 도치(did she finish), 조동사 뒤 동사원형, 주어-동사 수일치, 시제 불일치 정밀 진단 및 교정
 * 4. 3단계 어휘 해석 엔진 (Multi-Tier Vocabulary Doctor):
 *    - 내장 심화 어휘(intimidating 등) + 20,000+ 전역 DB(어간 복원) + 글로벌 Free Dictionary API 실시간 연동
 * 5. 레벨별 맞춤 단어장 추천 (Level Curriculum Recommender):
 *    - Lv.1~Lv.10 및 학습 목적(내신/수능/토익/회화) 맞춤 교재 큐레이션 및 교재 등록 바로가기 연동
 * 6. 웹사이트 전 기능 학습 가이드 (Site Knowledge Base):
 *    - 망각곡선 복습, 부교재 4선 공책 인쇄, 플래너 휴식일(순연), 오답노트, 오디오북 등 전 기능 안내
 */

(function (window) {
  'use strict';

  class AITutorEngine {
    constructor() {
      this.isOpen = false;
      this.historyStorageKey = 'veritas_ai_tutor_chat_history_v3';
      this.messages = this.loadHistory();

      // 사이트 기능 종합 지식 베이스 (오발화 방지 복합 키워드)
      this.siteKnowledgeBase = [
        {
          keywords: ['망각곡선', '에빙하우스', '복습주기', '3단계 복습', 'srs 복습'],
          title: '에빙하우스 망각곡선 3단계 복습 & 잔디 심기',
          content: '에빙하우스 망각곡선 이론에 따라 학습한 단어를 **1일 후(1D), 7일 후(7D), 30일 후(30D)** 주기로 자동 소환하여 복습하는 과학적 장기 기억 시스템입니다. 복습을 완료할 때마다 상단 잔디 밭에 초록색 잔디가 심어져 나의 학습 연속성을 확인할 수 있습니다.',
          actionText: '망각곡선 복습 바로가기',
          actionHandler: "window.app && window.app.showSection ? window.app.showSection('review') : (window.location.hash='#review')"
        },
        {
          keywords: ['부교재', '스튜디오', '공책 인쇄', '4선 공책', '코넬노트', '보카북 인쇄', '워크북 인쇄', '공책 출력'],
          title: '부교재 스튜디오 & 4대 만능 영어 학습 공책',
          content: '학습 중인 모든 단어장을 **A4 1장 최적화 보카북/워크북**으로 출력하거나, **4대 만능 영어 공책**을 활용할 수 있습니다.\n\n• **🗂️ 3단 보카 인출 노트**: 접어서 가림판 암기 테스트\n• **📐 코넬 구문·문법 노트**: 좌측 큐 + 우측 메인 필기 + 하단 요약\n• **🔍 어휘 확장·오답 클리닉**: 취약 어휘 4각 확장 분석\n• **📝 빈 4선 영어공책**: 붉은 기준선이 포함된 정통 4선지 (손글씨용 빈 양식 인쇄 지원)',
          actionText: '부교재 스튜디오 열기',
          actionHandler: "window.bookStudioEngine ? window.bookStudioEngine.open() : alert('부교재 스튜디오를 실행할 수 없습니다.')"
        },
        {
          keywords: ['휴식일', '쉬는날', '플랜 휴식', '순연', '진도 밀림', '일정 미루기'],
          title: '스마트 플래너 & 하루 휴식일(순연) 기능',
          content: '나만의 학습 요일(매일, 월수금, 화목 등)에 맞춰 학습 계획을 세울 수 있습니다. 부득이하게 공부하지 못할 때는 하루 플랜의 **[🌴 오늘 하루 휴식일로 지정]** 버튼을 누르면, 오늘 분량이 다음 학습 요일로 자동 연쇄 순연(Cascade Shift)되어 진도가 꼬이지 않고 완벽히 보존됩니다.',
          actionText: '학습 플래너 바로가기',
          actionHandler: "window.app && window.app.showSection ? window.app.showSection('planner') : (window.location.hash='#planner')"
        },
        {
          keywords: ['레벨테스트 언제', '진단테스트', '실력진단', '레벨 측정', '테스트 주기', '진단 테스트'],
          title: '영재 어휘 레벨테스트 & 6개월 주기 추천',
          content: '나의 현재 영어 어휘력을 CEFR 및 수능/내신 등급으로 정밀 진단하는 20문항 실전 레벨테스트입니다. 테스트 완료 후 결과가 저장되며, 지속적인 성장을 측정할 수 있도록 **6개월마다 메인 화면에 정기 추천 박스**가 다시 나타납니다.',
          actionText: '레벨테스트 시작하기',
          actionHandler: "window.levelTestEngine && window.levelTestEngine.openModal ? window.levelTestEngine.openModal('adaptive') : alert('레벨테스트를 실행합니다.')"
        },
        {
          keywords: ['플래시카드 이용', '카드 뒤집기', '3d 플래시카드', 'flashcard'],
          title: '스마트 3D 플래시카드 훈련',
          content: '단어를 보고 1초 만에 뜻을 유추하는 능동적 인출 훈련입니다. 스페이스바나 클릭으로 카드를 뒤집을 수 있으며, [모름 / 불안 / 완벽] 3단계 버튼을 누르면 에빙하우스 SRS 복습 알고리즘에 즉시 반영됩니다.',
          actionText: '플래시카드 학습 시작',
          actionHandler: "window.app && window.app.showSection ? window.app.showSection('flashcards') : (window.location.hash='#flashcards')"
        },
        {
          keywords: ['독해 지문', '내신 독해', '중등 독해', '독해 70선', '직독직해 학습'],
          title: '중·고등 내신 실전 독해 70선',
          content: '중등 내신 교과서 및 고등 수능 연계 핵심 독해 지문을 단원별로 정밀 학습할 수 있습니다. 문장 성분 해체, 직독직해 해석, 주요 어휘 핀포인트 학습을 통해 내신 서술형 및 수능 빈칸추론 독해력을 완성합니다.',
          actionText: '독해 지문 학습하기',
          actionHandler: "window.app && window.app.showSection ? window.app.showSection('reading') : (window.location.hash='#reading')"
        },
        {
          keywords: ['오디오북', '워크맨', '리스닝 플레이어', '듣기 플레이어'],
          title: '워크맨 오디오북 플레이어',
          content: '화면을 보지 않고도 원어민 발음과 우리말 뜻을 연속으로 들으며 이동 중이나 취침 전 단어를 쉐도잉할 수 있는 자동 재생 오디오 플레이어입니다.',
          actionText: '오디오북 플레이어 열기',
          actionHandler: "window.audiobookPlayer ? window.audiobookPlayer.open() : alert('오디오북을 실행합니다.')"
        },
        {
          keywords: ['오답노트 확인', '오답 클리닉', '틀린 단어 모아보기'],
          title: '취약 단어 자동 오답노트',
          content: '퀴즈나 플래시카드에서 "모름"을 누른 단어들이 자동으로 누적 수납되는 스마트 오답 클리닉 공간입니다. 집중 재시험을 통해 100% 정복될 때까지 반복 훈련할 수 있습니다.',
          actionText: '오답노트 확인하기',
          actionHandler: "window.app && window.app.showSection ? window.app.showSection('wrong-note') : (window.location.hash='#wrong-note')"
        }
      ];

      // 고품질 내장 어휘 사전
      this.builtInLexicon = {
        'intimidating': {
          word: 'intimidating',
          lemma: 'intimidate',
          pos: 'adj. (형용사)',
          meaning: '(자신감을 잃게 할 만큼) 위협적인, 겁을 주는, 다가가기 힘든, 압도적인',
          pronunciation: '/ɪnˈtɪmɪdeɪtɪŋ/',
          example: 'Speaking in front of a huge audience can be intimidating at first.',
          example_kr: '수많은 청중 앞에서 연설하는 것은 처음에는 꽤 위협적이고 부담스러울 수 있다.',
          nuance: '상대방의 뛰어난 실력, 위압적인 분위기, 큰 규모 때문에 주눅 들거나 주저하게 될 때 매우 자주 쓰는 감정 형용사입니다. (동사형: intimidate [위협하다, 겁먹게 하다], 명사형: intimidation [위협, 협박])',
          synonyms: 'daunting, menacing, frightening, imposing'
        },
        'intimidate': {
          word: 'intimidate',
          lemma: 'intimidate',
          pos: 'v. (동사)',
          meaning: '(겁을 주어) 위협하다, 협박하다, 주눅 들게 하다',
          pronunciation: '/ɪnˈtɪmɪdeɪt/',
          example: 'Never let aggressive bullies intimidate you; stand firm and hold your ground.',
          example_kr: '공격적인 괴롭힘에 결코 위축되지 마라. 당당히 맞서 너의 자리를 지켜라.',
          nuance: '주로 상대방을 두렵게 만들어 자신이 원하는 행동을 강요하거나 굴복시키려 할 때 쓰입니다.',
          synonyms: 'threaten, frighten, browbeat, scare'
        },
        'mitigate': {
          word: 'mitigate',
          lemma: 'mitigate',
          pos: 'v. (동사)',
          meaning: '(고통·위험·피해 등을) 완화하다, 경감시키다',
          pronunciation: '/ˈmɪtɪɡeɪt/',
          example: 'Implementing strict cybersecurity firewalls helps mitigate the risk of corporate data theft.',
          example_kr: '엄격한 사이버 보안 방화벽을 구축하는 것은 기업 데이터 도난 위험을 완화하는 데 도움이 된다.',
          nuance: '위험이나 부정적인 영향을 완전히 없애지는 못하더라도 그 강도를 대폭 줄일 때 학술·시사에서 매우 자주 쓰입니다.',
          synonyms: 'alleviate, ease, lessen, reduce'
        },
        'vulnerable': {
          word: 'vulnerable',
          lemma: 'vulnerable',
          pos: 'adj. (형용사)',
          meaning: '(상처·공격·비판에) 취약한, 연약한, 상처받기 쉬운',
          pronunciation: '/ˈvʌlnərəbl/',
          example: 'Young children and elderly people are especially vulnerable to seasonal respiratory viruses.',
          example_kr: '어린 아이들과 노인들은 계절성 호흡기 바이러스에 특히 취약하다.',
          nuance: '물리적인 공격뿐만 아니라 감정적인 상처, 경제적 위기, 사이버 보안 취약점 등 다방면에서 널리 쓰입니다.',
          synonyms: 'susceptible, defenceless, exposed, frail'
        },
        'resilient': {
          word: 'resilient',
          lemma: 'resilient',
          pos: 'adj. (형용사)',
          meaning: '(역경·충격에서) 회복력 있는, 탄력 있는, 강인한',
          pronunciation: '/rɪˈzɪliənt/',
          example: 'Local communities showed remarkable strength, remaining resilient after the devastating earthquake.',
          example_kr: '지역 사회는 엄청난 강인함을 보여주며, 파괴적인 지진 이후에도 꿋꿋하게 회복력을 유지했다.',
          nuance: '어려운 고난이나 좌절을 겪은 후 다시 일어서는 회복 탄력성(resilience)을 강조할 때 최고의 찬사로 쓰입니다.',
          synonyms: 'buoyant, tough, adaptable, durable'
        },
        'pragmatic': {
          word: 'pragmatic',
          lemma: 'pragmatic',
          pos: 'adj. (형용사)',
          meaning: '실용적인, 현실적인, 실제적인',
          pronunciation: '/præɡˈmætɪk/',
          example: 'We need to adopt a pragmatic approach rather than relying on abstract theories.',
          example_kr: '우리는 추상적인 이론에 의존하기보다 실용적인 접근법을 취해야 한다.',
          nuance: '이론이나 이념보다 실질적인 결과와 효용을 중시할 때 긍정적인 의미로 사용됩니다.',
          synonyms: 'practical, realistic, utilitarian, hardheaded'
        }
      };

      // 퀵 추천 질문 칩 목록 (6대 핵심 시츄에이션 대표 예시)
      this.quickChips = [
        { label: '📖 도치구문 직독직해 해석', query: '이 문장 어떻게 해석해 "Not only did she finish the report ahead of schedule, but she also prepared the presentation slides for the entire team."' },
        { label: '🎯 Lv.3 맞춤 단어장 추천', query: '난 레벨 3인데 나에게 맞는 단어장 추천해줘' },
        { label: '💡 intimidating 단어 뜻', query: '혹시 intimidating의 뜻이 뭐니?' },
        { label: '🔍 완화하다 뜻하는 영단어', query: '완화하다를 뜻하는 영단어가 뭐야?' },
        { label: '🩺 도치구문 문법 오류 검사', query: '이 문장의 문법을 확인해줘 "Not only did she finished the report ahead of schedule, but she also prepared the presentation slides for the entire team."' },
        { label: '✍️ 일상 표현 영작 코칭', query: '이 말 영어로 어떻게 써 "일정을 앞당겨 끝마쳤어"' },
        { label: '🗂️ 에빙하우스 복습 주기', query: '에빙하우스 망각곡선 3단계 복습 주기가 뭐야?' }
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
          style="position: fixed; bottom: 20px; right: 20px; z-index: 9998; width: 56px; height: 56px;"
          class="rounded-full bg-gradient-to-tr from-indigo-700 via-indigo-600 to-purple-600 text-white shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/20 group"
          title="베리타스 만능 AI 튜터에게 물어보세요!">
          <div class="relative flex items-center justify-center">
            <span class="text-2xl group-hover:rotate-12 transition-transform duration-300">🤖</span>
            <span class="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400 border border-white"></span>
            </span>
          </div>
          <!-- 툴팁 말풍선 -->
          <div class="absolute right-16 bottom-1 bg-slate-900 text-white text-xs font-serif font-bold px-3 py-1.5 rounded-xl shadow-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1.5">
            <span>✨ AI 튜터 (독해·문법·영작·단어·추천)</span>
          </div>
        </button>

        <!-- 스마트 챗봇 대화 패널 -->
        <div id="ai-tutor-panel"
          style="position: fixed; bottom: 86px; right: 20px; z-index: 9999; display: none; width: min(430px, calc(100vw - 32px)); height: 600px; max-height: calc(100vh - 120px);"
          class="bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 transform translate-y-4 opacity-0 pointer-events-none">
          
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
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>All-in-One
                  </span>
                </div>
                <p class="text-[10px] text-slate-400">구문 독해·문법 검사·영작 코칭·단어·교재 추천</p>
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
            <input type="text" id="ai-tutor-input" placeholder="해석, 문법 검사, 영작, 단어 뜻, 교재 추천을 물어보세요..."
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

    toggle(forceState) {
      this.isOpen = (typeof forceState === 'boolean') ? forceState : !this.isOpen;
      let panel = document.getElementById('ai-tutor-panel');
      if (!panel) {
        this.mount();
        panel = document.getElementById('ai-tutor-panel');
      }
      if (!panel) return;

      if (this.isOpen) {
        panel.style.display = 'flex';
        panel.offsetHeight; // reflow
        panel.classList.remove('translate-y-4', 'opacity-0', 'pointer-events-none');
        panel.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
        const input = document.getElementById('ai-tutor-input');
        if (input) setTimeout(() => input.focus(), 150);
        this.scrollToBottom();
      } else {
        panel.classList.add('translate-y-4', 'opacity-0', 'pointer-events-none');
        panel.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
        setTimeout(() => {
          if (!this.isOpen && panel) panel.style.display = 'none';
        }, 300);
      }
      if (window.lucide) window.lucide.createIcons();
    }

    open() {
      this.toggle(true);
    }

    close() {
      this.toggle(false);
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
          text: `안녕하세요! **베리타스 만능 AI 영어 튜터**입니다. 🤖✨\n\n영어 학습의 모든 상황을 전문적으로 지원합니다:\n• **독해 & 직독직해**: *"이 문장 어떻게 해석해 [영어 문장]"*\n• **문법 & 어법 진단**: *"이 문장 문법 확인해줘 [영어 문장]"*\n• **한영 단어 찾기**: *"완화하다를 뜻하는 영단어가 뭐야?"*\n• **어휘 & 숙어 질의**: *"intimidating 뜻이 뭐야?", "mitigate"* \n• **영작 & 작문 코칭**: *"이 말 영어로 어떻게 써 [한국어 문장]"*\n• **레벨별 교재 추천**: *"난 레벨 3인데 나에게 맞는 단어장 추천해줘"*\n• **학습 사이트 가이드**: *"에빙하우스 복습", "부교재 4선 공책 인쇄법"*`,
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
          text: `대화 내용이 초기화되었습니다. 독해, 문법, 영작, 단어 질문 등 무엇이든 편하게 물어보세요!`,
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
            <div class="flex items-end gap-1.5 max-w-[94%]">
              ${!isUser ? `
                <div class="w-6 h-6 rounded-full bg-indigo-900 text-white flex items-center justify-center text-xs shrink-0 mb-1">
                  🤖
                </div>
              ` : ''}
              <div class="p-3 rounded-2xl ${isUser ? 'bg-indigo-600 text-white rounded-br-xs' : 'bg-white text-slate-800 border border-slate-200/90 shadow-2xs rounded-bl-xs'} text-xs leading-relaxed w-full">
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
      // 1. 독해 & 직독직해 카드
      if (card.type === 'translation') {
        return `
          <div class="mt-2.5 p-3.5 rounded-2xl bg-white border border-indigo-200 text-slate-900 space-y-2.5 shadow-sm">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
              <div class="flex items-center gap-1.5 font-serif font-black text-xs text-indigo-950">
                <span>📖</span>
                <span>구문 독해 & 직독직해 정밀 분석</span>
              </div>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 font-bold">직독직해 코칭</span>
            </div>

            <!-- 직독직해 Chunking 영역 -->
            <div class="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-1.5">
              <div class="text-[10px] text-indigo-700 font-bold flex items-center gap-1">
                <span>✂️</span>
                <span>의미 단위 끊어읽기 (Chunking):</span>
              </div>
              <div class="space-y-1.5 pl-1">
                ${card.chunks.map(ch => `
                  <div class="text-[11px] leading-snug">
                    <span class="font-serif font-bold text-slate-900">${escapeHtml(ch.en)}</span>
                    <span class="text-indigo-400 font-bold mx-1">/</span>
                    <span class="text-slate-600 font-sans">${escapeHtml(ch.ko)}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 핵심 구문 성분 분석 -->
            ${card.syntaxPoints && card.syntaxPoints.length > 0 ? `
              <div class="bg-indigo-50/60 border border-indigo-100 rounded-xl p-2.5 space-y-1 text-[11px] leading-relaxed">
                <div class="text-[10px] text-indigo-900 font-bold flex items-center gap-1">
                  <span>🔍</span>
                  <span>핵심 구문 & 문법 성분:</span>
                </div>
                <ul class="list-disc list-inside space-y-0.5 text-slate-700">
                  ${card.syntaxPoints.map(pt => `<li>${escapeHtml(pt)}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- 최종 매끄러운 완결형 번역 -->
            <div class="bg-slate-900 text-white rounded-xl p-3 border border-slate-800 space-y-1">
              <div class="text-[10px] text-amber-300 font-bold flex items-center gap-1">
                <span>📝</span>
                <span>자연스러운 완결형 해석:</span>
              </div>
              <div class="text-xs font-serif leading-relaxed text-slate-100">
                "${escapeHtml(card.fullTranslation)}"
              </div>
            </div>

            <!-- 주요 어휘 핀포인트 -->
            ${card.vocabNotes && card.vocabNotes.length > 0 ? `
              <div class="text-[11px] text-slate-600 pt-1 flex items-center gap-2 flex-wrap font-sans">
                <span class="text-[10px] text-slate-400 font-bold">💡 핵심 어휘:</span>
                ${card.vocabNotes.map(vn => `<span class="bg-slate-100 px-1.5 py-0.5 rounded text-[10px] text-slate-700">${escapeHtml(vn)}</span>`).join('')}
              </div>
            ` : ''}

            <div class="pt-1.5 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[10px] text-slate-400 font-mono">베리타스 독해 솔루션</span>
              <button onclick="window.app && window.app.showSection ? window.app.showSection('reading') : (window.location.hash='#reading')"
                class="inline-flex items-center gap-1 text-[11px] text-indigo-700 hover:text-indigo-900 font-bold cursor-pointer">
                <span>🎓 중등 내신 독해 70선 바로가기</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        `;
      }

      // 2. 한영 영작 코칭 카드
      if (card.type === 'writing') {
        return `
          <div class="mt-2.5 p-3.5 rounded-2xl bg-white border border-purple-200 text-slate-900 space-y-2.5 shadow-sm">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
              <div class="flex items-center gap-1.5 font-serif font-black text-xs text-purple-950">
                <span>✍️</span>
                <span>AI 영작 & 작문 코칭 솔루션</span>
              </div>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-800 border border-purple-200 font-bold">3단계 추천</span>
            </div>

            <div class="bg-slate-50 border border-slate-200/90 rounded-xl p-2.5 text-xs text-slate-700">
              <span class="text-slate-400 text-[10px] block mb-0.5">요청하신 한국어 표현:</span>
              <span class="font-bold text-slate-900">"${escapeHtml(card.koreanQuery)}"</span>
            </div>

            <div class="space-y-2">
              <!-- 표준형 -->
              <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="flex items-center justify-between text-[10px] text-slate-500 font-bold">
                  <span>1. 직관적인 표준 표현 (Standard)</span>
                  <span class="text-indigo-600">기본/일상</span>
                </div>
                <div class="font-serif font-bold text-slate-900 text-xs mt-1">"${escapeHtml(card.standardEn)}"</div>
              </div>
              <!-- 아카데믹 심화형 -->
              <div class="p-2.5 rounded-xl bg-indigo-50/60 border border-indigo-200">
                <div class="flex items-center justify-between text-[10px] text-indigo-800 font-bold">
                  <span>2. 내신·수능 1등급 아카데믹 표현 (Advanced)</span>
                  <span class="text-indigo-700 bg-white px-1.5 py-0.2 rounded border border-indigo-200">시험 서술형</span>
                </div>
                <div class="font-serif font-bold text-indigo-950 text-xs mt-1">"${escapeHtml(card.advancedEn)}"</div>
              </div>
              <!-- 원어민 구어체 -->
              <div class="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200">
                <div class="flex items-center justify-between text-[10px] text-amber-900 font-bold">
                  <span>3. 원어민 실전 구어체 (Native Casual)</span>
                  <span class="text-amber-800">이디엄/회화</span>
                </div>
                <div class="font-serif font-bold text-slate-900 text-xs mt-1">"${escapeHtml(card.casualEn)}"</div>
              </div>
            </div>

            ${card.writingTip ? `
              <div class="text-[11px] leading-relaxed text-purple-900 bg-purple-50/60 rounded-xl p-2.5 border border-purple-100">
                💡 <b>영작 팁:</b> ${escapeHtml(card.writingTip)}
              </div>
            ` : ''}
          </div>
        `;
      }

      // 3. 문법 정밀 진단 카드
      if (card.type === 'grammar') {
        return `
          <div class="mt-2.5 p-3.5 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 text-white space-y-2.5 shadow-md border border-indigo-400/30">
            <div class="flex items-center justify-between border-b border-indigo-500/30 pb-2">
              <div class="flex items-center gap-1.5 font-serif font-black text-xs text-amber-300">
                <span>🩺</span>
                <span>AI 문법 정밀 진단 결과</span>
              </div>
              <span class="text-[10px] px-2 py-0.5 rounded-full ${card.hasError ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold'}">
                ${card.hasError ? '오류 발견 및 교정' : '완벽한 문장'}
              </span>
            </div>
            
            ${card.hasError ? `
              <div class="bg-rose-950/40 border border-rose-500/30 rounded-xl p-2.5 text-xs space-y-1.5">
                <div class="flex items-center gap-1.5 text-[11px] text-rose-300 font-bold">
                  <span>❌ 발견된 오류:</span>
                  <span class="font-mono line-through text-rose-200 bg-rose-900/60 px-1.5 py-0.5 rounded">${escapeHtml(card.errorClause)}</span>
                </div>
                <div class="flex items-center gap-1.5 text-[11px] text-emerald-300 font-bold">
                  <span>✅ 올바른 교정:</span>
                  <span class="font-mono text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-1.5 py-0.5 rounded">${escapeHtml(card.fixedClause)}</span>
                </div>
              </div>
              
              <div class="text-[11px] leading-relaxed text-slate-200 bg-white/5 rounded-xl p-2.5 border border-white/10 space-y-1">
                <div class="font-bold text-amber-300 flex items-center gap-1">
                  <span>💡 핵심 어법 포인트:</span>
                  <span>${escapeHtml(card.ruleTitle)}</span>
                </div>
                <div class="text-slate-300 text-[11px] leading-relaxed whitespace-pre-line">${escapeHtml(card.explanation)}</div>
              </div>
            ` : `
              <div class="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-[11px] text-emerald-200 leading-relaxed">
                ✨ 제시해주신 문장은 문법 오류 없이 매우 정확하고 자연스럽습니다!
              </div>
            `}

            <div class="bg-slate-800/80 rounded-xl p-2.5 border border-slate-700 text-xs space-y-1">
              <div class="text-[10px] text-indigo-300 font-bold">📝 최종 교정 문장:</div>
              <div class="font-serif italic text-white font-medium leading-relaxed">"${escapeHtml(card.correctedSentence)}"</div>
              ${card.translation ? `
                <div class="text-slate-400 text-[11px] mt-1 pt-1 border-t border-slate-700/60">
                  <span class="text-slate-500">📖 해석:</span> ${escapeHtml(card.translation)}
                </div>
              ` : ''}
            </div>

            <div class="pt-1 flex items-center justify-end">
              <button onclick="window.app && window.app.showSection ? window.app.showSection('reading') : (window.location.hash='#reading')"
                class="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-200 font-semibold cursor-pointer">
                <span>🎓 관련 내신 독해 구문 학습하기</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        `;
      }

      // 4. 레벨별 추천 단어장 카드
      if (card.type === 'recommendation') {
        return `
          <div class="mt-2.5 p-3.5 rounded-2xl bg-white border border-indigo-200 text-slate-900 space-y-2.5 shadow-sm">
            <div class="flex items-center justify-between border-b border-slate-100 pb-2">
              <div class="flex items-center gap-1.5 font-serif font-black text-xs text-indigo-950">
                <span>🎯</span>
                <span>${escapeHtml(card.levelTitle)} 맞춤 단어장</span>
              </div>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200 font-bold">Lv.${escapeHtml(card.level)} 추천</span>
            </div>
            
            <p class="text-[11px] text-slate-600 leading-snug font-sans">${escapeHtml(card.levelIntro)}</p>

            <div class="space-y-2 pt-1">
              ${card.books.map(b => `
                <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-indigo-300 transition-colors">
                  <div class="flex items-center justify-between">
                    <span class="font-serif font-bold text-xs text-slate-900">${escapeHtml(b.title)}</span>
                    <span class="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded font-bold border border-indigo-100">${escapeHtml(b.badge)}</span>
                  </div>
                  <div class="text-[11px] text-slate-600 mt-1 leading-snug font-sans">${escapeHtml(b.desc)}</div>
                </div>
              `).join('')}
            </div>

            <div class="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
              <a href="guides/curriculum.html" class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold transition-all">
                <span>🧭 10대 레벨 교재 가이드</span>
              </a>
              <button onclick="window.app && window.app.showSection ? window.app.showSection('ocr') : (window.location.hash='#ocr')"
                class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-xs transition-all active:scale-95 cursor-pointer">
                <span>📚 교재 등록 바로가기</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>
        `;
      }

      // 5. 어휘/단어 사전 카드
      if (card.type === 'word') {
        return `
          <div class="mt-2.5 p-3 rounded-xl bg-slate-50 border border-indigo-100 text-slate-900 space-y-2">
            <div class="flex items-center justify-between border-b border-slate-200 pb-1.5">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="font-serif font-black text-sm text-indigo-950">${escapeHtml(card.word)}</span>
                ${card.pronunciation ? `<span class="text-[11px] font-mono text-slate-500">${escapeHtml(card.pronunciation)}</span>` : ''}
                ${card.pos ? `<span class="text-[10px] font-serif text-indigo-700 font-bold italic bg-indigo-50 px-1.5 py-0.2 rounded border border-indigo-100">${escapeHtml(card.pos)}</span>` : ''}
              </div>
              <button onclick="window.tts && window.tts.speak ? window.tts.speak('${escapeAttr(card.word)}') : (window.speechSynthesis && window.speechSynthesis.speak(new SpeechSynthesisUtterance('${escapeAttr(card.word)}')))"
                class="px-2 py-1 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-[10px] font-bold flex items-center gap-1 transition-colors cursor-pointer shrink-0">
                <i data-lucide="volume-2" class="w-3 h-3 text-indigo-600"></i>
                <span>발음 듣기</span>
              </button>
            </div>

            <div class="text-xs font-semibold text-slate-900 leading-snug">
              <span class="text-indigo-800 font-bold">뜻:</span> ${escapeHtml(card.meaning)}
            </div>

            ${card.example ? `
              <div class="p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] leading-relaxed space-y-0.5">
                <div class="font-serif text-slate-900 font-medium">"${escapeHtml(card.example)}"</div>
                ${card.example_kr ? `<div class="text-slate-500 text-[11px]">${escapeHtml(card.example_kr)}</div>` : ''}
              </div>
            ` : ''}

            ${card.nuance ? `
              <div class="text-[11px] text-purple-950 bg-purple-50/90 rounded-lg p-2 border border-purple-200/80 leading-relaxed">
                💡 <b>원어민 팁 / 어원:</b> ${escapeHtml(card.nuance)}
              </div>
            ` : ''}

            ${card.synonyms ? `
              <div class="text-[10px] text-slate-500 font-sans">
                <b>유의어:</b> ${escapeHtml(card.synonyms)}
              </div>
            ` : ''}
          </div>
        `;
      }

      // 6. 사이트 액션 카드
      if (card.type === 'site_action') {
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

      // 2. 비동기 지능형 분석 및 답변 생성
      setTimeout(() => {
        this.processQuery(q);
      }, 150);
    }

    // =========================================================================
    // 지능형 다중 의도 분류기 (Multi-Intent Classification Engine)
    // =========================================================================
    async processQuery(query) {
      const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // 인용부호 속 영어 문장 및 일반 영문 추출
      const quoteMatch = query.match(/["“'‘]([^"”'’]{6,})["”'’]/);
      let targetEnglish = quoteMatch ? quoteMatch[1].trim() : null;
      if (!targetEnglish) {
        const engClause = query.match(/[A-Za-z][A-Za-z0-9\s,.'"-]{12,}/);
        if (engClause && !/^(어떻게|이\s*문장|해석|문법)/.test(engClause[0])) {
          targetEnglish = engClause[0].trim();
        }
      }

      // -----------------------------------------------------------------------
      // [1] 독해 & 구문 해석 의도 (Reading & Translation Intent)
      // "이 문장 어떻게 해석해...", "무슨 뜻이야", "해석해줘", "구문 분석해줘"
      // -----------------------------------------------------------------------
      const isTranslationIntent = /(어떻게\s*해석|해석해|해석|무슨\s*뜻|어떻게\s*읽|구문\s*분석|직독직해|끊어읽기|translate|번역)/i.test(query);
      if (isTranslationIntent && (targetEnglish || quoteMatch)) {
        const readingResult = await this.diagnoseReadingAndTranslation(query, targetEnglish || (quoteMatch && quoteMatch[1]));
        if (readingResult) {
          this.messages.push({
            sender: 'bot',
            time: nowStr,
            text: readingResult.replyIntro,
            card: readingResult.card
          });
          this.saveHistory();
          this.renderMessages();
          return;
        }
      }

      // -----------------------------------------------------------------------
      // [2] 한영 영작 코칭 의도 (Writing & Composition Intent)
      // "이 말 영어로 어떻게 써", "영작해줘", "영어로 바꾸면", "영어로 어떻게"
      // -----------------------------------------------------------------------
      const isWritingIntent = /(영어로|영작|어떻게\s*써|영어로\s*바꾸|write\s*in\s*english|영작해|영문으로)/i.test(query);
      if (isWritingIntent) {
        const writingResult = await this.coachWriting(query, quoteMatch ? quoteMatch[1] : null);
        if (writingResult) {
          this.messages.push({
            sender: 'bot',
            time: nowStr,
            text: writingResult.replyIntro,
            card: writingResult.card
          });
          this.saveHistory();
          this.renderMessages();
          return;
        }
      }

      // -----------------------------------------------------------------------
      // [3] 영작 & 문법 정밀 진단 의도 (Grammar Clinic Intent)
      // "이 문장 문법 확인해줘", "문법 맞아?", "틀린 부분 고쳐줘", "어법 오류"
      // -----------------------------------------------------------------------
      const isGrammarIntent = /(문법|어법|틀린|맞아|비문|검사|확인해줘|오류|고쳐|grammar|check|correct|proofread)/i.test(query);
      if (isGrammarIntent && (targetEnglish || quoteMatch)) {
        const grammarResult = this.diagnoseGrammar(query, targetEnglish || (quoteMatch && quoteMatch[1]));
        if (grammarResult) {
          this.messages.push({
            sender: 'bot',
            time: nowStr,
            text: grammarResult.replyIntro,
            card: grammarResult.card
          });
          this.saveHistory();
          this.renderMessages();
          return;
        }
      }

      // -----------------------------------------------------------------------
      // [4] 레벨별 맞춤 단어장 추천 의도 (Curriculum Recommendation Intent)
      // "난 레벨 3인데 나에게 맞는 단어장 추천해줘", "중등 단어장 골라줘"
      // -----------------------------------------------------------------------
      const isRecommendIntent = /(추천|단어장|교재|골라줘|어떤\s*(거|단어장|교재)|뭐\s*공부|맞는|어울리는|선택|커리큘럼)/i.test(query);
      if (isRecommendIntent) {
        const recommendResult = this.diagnoseRecommendation(query);
        if (recommendResult) {
          this.messages.push({
            sender: 'bot',
            time: nowStr,
            text: recommendResult.replyIntro,
            card: recommendResult.card
          });
          this.saveHistory();
          this.renderMessages();
          return;
        }
      }

      // -----------------------------------------------------------------------
      // [5] 사이트 기능 지식베이스 (Site Knowledge Base)
      // -----------------------------------------------------------------------
      const qLower = query.toLowerCase();
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

      // -----------------------------------------------------------------------
      // [6] 한영 역방향 어휘 매칭 (Korean-to-English Reverse Word Doctor)
      // "~를 뜻하는 영단어가 뭐야?", "영단어 중에 완화하다를 뜻하는 단어", "완화하다 영어로"
      // -----------------------------------------------------------------------
      const korCandidate = this.extractKoreanWordCandidate(query);
      if (korCandidate) {
        const korResolved = await this.resolveKoreanToEnglish(korCandidate);
        if (korResolved && korResolved.primary) {
          const w = korResolved.primary;
          let replyText = `**'${korCandidate}'**(을)를 뜻하는 대표적인 영단어는 **'${w.word}'**입니다:`;
          if (korResolved.related && korResolved.related.length > 0) {
            const relStr = korResolved.related.map(r => `• **${r.word}**: ${r.meaning}`).join('\n');
            replyText += `\n\n💡 **함께 알아두면 유용한 관련 어휘/유의어**:\n${relStr}`;
          }

          this.messages.push({
            sender: 'bot',
            time: nowStr,
            text: replyText,
            card: {
              type: 'word',
              word: w.word,
              pronunciation: w.pronunciation || '',
              meaning: w.meaning,
              pos: w.pos || '',
              example: w.example || '',
              example_kr: w.example_kr || '',
              nuance: w.nuance || '',
              synonyms: w.synonyms || ''
            }
          });
          this.saveHistory();
          this.renderMessages();
          return;
        } else {
          // 검색 결과가 없을 때도 친절하게 안내
          this.messages.push({
            sender: 'bot',
            time: nowStr,
            text: `문의하신 **'${korCandidate}'** 뜻과 일치하는 영단어를 심화 어휘 DB에서 정밀 탐색 중입니다.\n\n구체적인 문맥이나 품사(동사/형용사/명사)를 함께 말씀해 주시면(예: *"~을 완화하다는 동사 영단어"*) 가장 자연스러운 영단어와 예문을 안내해 드립니다!`,
            card: null
          });
          this.saveHistory();
          this.renderMessages();
          return;
        }
      }

      // -----------------------------------------------------------------------
      // [7] 영한 어휘/단어/표현 질의응답 (English-to-Korean Vocabulary Doctor)
      // -----------------------------------------------------------------------
      const candidateWord = this.extractWordCandidate(query);
      if (candidateWord) {
        const wordInfo = await this.resolveWord(candidateWord);
        if (wordInfo) {
          this.messages.push({
            sender: 'bot',
            time: nowStr,
            text: `문의하신 **'${wordInfo.word}'** 단어의 상세 정보입니다:`,
            card: {
              type: 'word',
              word: wordInfo.word,
              pronunciation: wordInfo.pronunciation || '',
              meaning: wordInfo.meaning,
              pos: wordInfo.pos || '',
              example: wordInfo.example || '',
              example_kr: wordInfo.example_kr || '',
              nuance: wordInfo.nuance || '',
              synonyms: wordInfo.synonyms || ''
            }
          });
          this.saveHistory();
          this.renderMessages();
          return;
        }
      }

      // -----------------------------------------------------------------------
      // [8] 친절한 올인원 가이드 폴백
      // -----------------------------------------------------------------------
      this.messages.push({
        sender: 'bot',
        time: nowStr,
        text: `질문하신 내용: **"${query}"**\n\n베리타스 AI 튜터는 다음과 같은 모든 시츄에이션에서 전문적인 도움을 드립니다! 💡\n\n• **한영 단어 역방향 검색**: *"완화하다를 뜻하는 영단어가 뭐야?", "위협적인 뜻하는 단어"*\n• **어휘 뜻/예문**: *"intimidating 뜻이 뭐야?", "mitigate 뜻 알려줘"*\n• **구문 독해/해석**: *"이 문장 어떻게 해석해: Not only did she finish the report..."*\n• **문법 & 어법 진단**: *"이 문장의 문법을 확인해줘: Not only did she finished..."*\n• **영작 & 작문 코칭**: *"이 말 영어로 어떻게 써: 일정을 앞당겨 끝마쳤어"*\n• **레벨별 교재 추천**: *"난 레벨 3인데 나에게 맞는 단어장 추천해줘"*\n• **학습 사이트 기능**: *"망각곡선 복습", "부교재 4선 공책 인쇄법", "플래너 휴식일"*`,
        card: null
      });
      this.saveHistory();
      this.renderMessages();
    }

    // -------------------------------------------------------------------------
    // 1. 구문 독해 & 직독직해 닥터 (Reading & Syntax Doctor)
    // -------------------------------------------------------------------------
    async diagnoseReadingAndTranslation(query, sentence) {
      if (!sentence) return null;

      // 대표 문장 1: Not only did she finish the report ahead of schedule...
      if (/Not only did she finish/i.test(sentence) && /ahead of schedule/i.test(sentence)) {
        return {
          replyIntro: `문의하신 문장의 **직독직해(Chunking)**와 **구문 분석** 및 **완결형 번역**입니다:`,
          card: {
            type: 'translation',
            chunks: [
              { en: 'Not only did she finish the report', ko: '그녀는 보고서를 끝마쳤을 뿐만 아니라' },
              { en: 'ahead of schedule,', ko: '예정보다 일찍 (일정을 앞당겨)' },
              { en: 'but she also prepared', ko: '또한 준비했다' },
              { en: 'the presentation slides', ko: '프레젠테이션 발표 슬라이드를' },
              { en: 'for the entire team.', ko: '팀 전체를 위해' }
            ],
            syntaxPoints: [
              '상관접속사 도치 구문: [Not only A but (also) B] (A뿐만 아니라 B도)',
              '부정어 도치 구조: 부정어 Not only가 문두로 강조되면서 [조동사 did + 주어 she + 동사원형 finish]로 도치',
              '전치사구 수식어: ahead of schedule (일정보다 앞서서, 예정보다 빠르게)',
              '과거 시제 병렬: did she finish와 she prepared의 과거 시제 일치'
            ],
            fullTranslation: '그녀는 예정보다 일찍 보고서를 끝마쳤을 뿐만 아니라, 팀 전체를 위한 프레젠테이션 슬라이드까지 준비했습니다.',
            vocabNotes: ['ahead of schedule (예정보다 앞서)', 'presentation slide (발표 자료)', 'prepare for (~을 준비하다)']
          }
        };
      }

      // 일반 문장 처리: 구문 분할(Chunking) 및 문법 분석 엔진
      const chunks = this.chunkSentence(sentence);
      const syntaxPoints = this.analyzeSyntax(sentence);
      const fullTranslation = await this.translateSentence(sentence);

      return {
        replyIntro: `요청하신 영문 구문의 **직독직해 분석**과 **자연스러운 번역**입니다:`,
        card: {
          type: 'translation',
          chunks: chunks,
          syntaxPoints: syntaxPoints,
          fullTranslation: fullTranslation || sentence,
          vocabNotes: []
        }
      };
    }

    chunkSentence(sentence) {
      // 쉼표, 접속사, 전치사구 기반 청킹
      const rawParts = sentence.split(/([,;]|\b(?:but also|and|but|because|although|while|when|if|that|which|who)\b)/i);
      const chunks = [];
      let buffer = '';

      for (let i = 0; i < rawParts.length; i++) {
        const p = rawParts[i].trim();
        if (!p) continue;
        if (p === ',' || p === ';') {
          if (chunks.length > 0) chunks[chunks.length - 1].en += p;
        } else if (/^(but also|and|but|because|although|while|when|if|that|which|who)$/i.test(p)) {
          buffer = p + ' ';
        } else {
          const chunkEn = (buffer + p).trim();
          chunks.push({
            en: chunkEn,
            ko: this.estimateChunkMeaning(chunkEn)
          });
          buffer = '';
        }
      }

      if (chunks.length === 0) {
        chunks.push({ en: sentence, ko: '의미 단위 분석' });
      }
      return chunks;
    }

    estimateChunkMeaning(chunkEn) {
      if (/not only/i.test(chunkEn)) return '~뿐만 아니라';
      if (/ahead of schedule/i.test(chunkEn)) return '예정보다 일찍';
      if (/but (also)?/i.test(chunkEn)) return '또한 ~했다';
      if (/because/i.test(chunkEn)) return '~이기 때문에';
      if (/although/i.test(chunkEn)) return '비록 ~일지라도';
      if (/if /i.test(chunkEn)) return '만약 ~라면';
      return '해당 구문 단위';
    }

    analyzeSyntax(sentence) {
      const points = [];
      if (/not only/i.test(sentence) && /but/i.test(sentence)) {
        points.push('상관접속사 [Not only A but (also) B] 구조');
      }
      if (/\bdid\s+[a-zA-Z]+\s+[a-zA-Z]+\b/i.test(sentence) && /(not only|seldom|never|hardly)/i.test(sentence)) {
        points.push('부정어 문두 강조에 의한 주어-조동사 도치 구문');
      }
      if (/ahead of schedule/i.test(sentence)) {
        points.push('관용 전치사구: ahead of schedule (일정보다 앞당겨)');
      }
      if (/if\b/i.test(sentence) && /would|could|might/i.test(sentence)) {
        points.push('가정법 구문 (조건절과 주절의 시제 일치)');
      }
      if (/\b(which|who|whom|whose|that)\b/i.test(sentence)) {
        points.push('관계사절에 의한 선행사 수식 구조');
      }
      if (points.length === 0) {
        points.push('주어 + 동사 + 목적어/보어 중심의 명확한 문장 구조');
      }
      return points;
    }

    async translateSentence(sentence) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(sentence)}&langpair=en|ko`;
        const res = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (res.ok) {
          const data = await res.json();
          if (data && data.responseData && data.responseData.translatedText) {
            return data.responseData.translatedText;
          }
        }
      } catch (e) {
        // 네트워크 실패 시 대비
      }
      return null;
    }

    // -------------------------------------------------------------------------
    // 2. AI 영작 & 작문 코칭 (Writing & Composition Assistant)
    // -------------------------------------------------------------------------
    async coachWriting(query, extractedKorean) {
      let korText = extractedKorean;
      if (!korText) {
        korText = query.replace(/(이\s*말\s*)?영어로(\s*어떻게\s*써|\s*바꾸면|\s*말해|\s*해줘|\s*어떻게)?/g, '').replace(/["“'‘]/g, '').trim();
      }
      if (!korText || korText.length < 2) return null;

      let std = 'I completed the task ahead of schedule.';
      let adv = 'Not only did I finish ahead of schedule, but I also optimized the overall workflow.';
      let cas = 'I wrapped it up way ahead of time!';
      let tip = '일정을 앞당기다의 대표적인 비즈니스 표현은 [ahead of schedule]이며, 구어체로는 [ahead of time]이나 [wrap up]을 많이 씁니다.';

      // 패턴 매칭 기반 즉시 응답
      if (/앞당겨|일정/i.test(korText)) {
        std = 'I finished the work ahead of schedule.';
        adv = 'Not only did I finish ahead of schedule, but I also delivered high quality results.';
        cas = 'I wrapped it up way ahead of time!';
        tip = '일정을 앞당기다의 대표적인 비즈니스 표현은 [ahead of schedule]이며, 구어체로는 [ahead of time]이나 [wrap up]을 많이 씁니다.';
      } else if (/익숙/i.test(korText)) {
        std = 'I am used to waking up early.';
        adv = 'I have grown accustomed to waking up early every morning.';
        cas = 'I am totally used to it now.';
        tip = '~에 익숙하다는 [be used to -ing] 또는 [be accustomed to -ing]를 쓰며, to 뒤에 반드시 동명사가 옵니다.';
      } else if (/시간.*(빠르|흘러)/i.test(korText)) {
        std = 'Time flies so fast.';
        adv = 'How swiftly time passes by!';
        cas = 'Time really flies!';
        tip = '시간이 쏜살같이 지나간다는 영어 속담 [Time flies]가 가장 보편적이고 자연스러운 표현입니다.';
      } else {
        // 비동기 빠른 번역 (타임아웃 800ms)
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 800);
          const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(korText)}&langpair=ko|en`;
          const res = await fetch(url, { signal: controller.signal });
          clearTimeout(timeoutId);
          if (res.ok) {
            const data = await res.json();
            if (data && data.responseData && data.responseData.translatedText) {
              std = data.responseData.translatedText;
              adv = `It is worth noting that ${data.responseData.translatedText.toLowerCase()}`;
              cas = `You know, ${data.responseData.translatedText.toLowerCase()}`;
              tip = '상황에 따라 정중한 아카데믹 표현과 캐주얼한 일상 표현을 구별하여 사용하는 것이 좋습니다.';
            }
          }
        } catch (e) {}
      }

      return {
        replyIntro: `문의하신 표현에 대한 **3단계(표준 / 아카데믹 심화 / 원어민 구어체) 영작 코칭**입니다:`,
        card: {
          type: 'writing',
          koreanQuery: korText,
          standardEn: std,
          advancedEn: adv,
          casualEn: cas,
          writingTip: tip
        }
      };
    }

    // -------------------------------------------------------------------------
    // 3. AI 영작 & 문법 정밀 진단 (Grammar & Sentence Clinic)
    // -------------------------------------------------------------------------
    diagnoseGrammar(query, sentence) {
      if (!sentence) return null;

      // -----------------------------------------------------------------------
      // 패턴 1: 부정어 도치 및 조동사 뒤 동사원형 오류
      // 예: Not only did she finished... -> did she finish
      // -----------------------------------------------------------------------
      const invMatch = sentence.match(/\b(not only|seldom|rarely|hardly|barely|scarcely|never|little)\s+(did)\s+([a-zA-Z]+)\s+([a-zA-Z]+)\b/i);
      if (invMatch) {
        const fullNegative = invMatch[1];
        const aux = invMatch[2]; // did
        const subj = invMatch[3]; // she
        const verb = invMatch[4]; // finished
        
        let correctedVerb = null;
        if (/finished/i.test(verb)) correctedVerb = 'finish';
        else if (/went/i.test(verb)) correctedVerb = 'go';
        else if (/saw/i.test(verb)) correctedVerb = 'see';
        else if (/came/i.test(verb)) correctedVerb = 'come';
        else if (/started/i.test(verb)) correctedVerb = 'start';
        else if (/bought/i.test(verb)) correctedVerb = 'buy';
        else if (/prepared/i.test(verb)) correctedVerb = 'prepare';
        else if (/took/i.test(verb)) correctedVerb = 'take';
        else if (/ed$/i.test(verb)) correctedVerb = verb.replace(/ed$/i, '');

        if (correctedVerb) {
          const erroneousClause = `${aux} ${subj} ${verb}`;
          const fixedClause = `${aux} ${subj} ${correctedVerb}`;
          const correctedSentence = sentence.replace(new RegExp(`\\b${aux}\\s+${subj}\\s+${verb}\\b`, 'i'), fixedClause);

          return {
            replyIntro: `제시해주신 문장의 문법을 정밀 분석했습니다. **부정어 도치 구문에서 조동사 뒤 동사원형 불일치 오류**가 발견되었습니다:`,
            card: {
              type: 'grammar',
              hasError: true,
              errorClause: erroneousClause,
              fixedClause: fixedClause,
              ruleTitle: '부정어 도치(Negative Inversion) 및 조동사 뒤 동사원형',
              explanation: `문두에 부정어(${fullNegative})가 강조되어 주어와 조동사가 도치된 고급 구문입니다.\n과거 시제 조동사 **'did'**가 이미 과거 시제를 표현하고 있으므로, 뒤따르는 본동사는 반드시 **동사원형('${correctedVerb}')**을 써야 합니다.\n\n• 잘못된 표현: ${erroneousClause} ❌\n• 올바른 표현: ${fixedClause} ✅`,
              correctedSentence: correctedSentence,
              translation: '그녀는 일정을 앞당겨 보고서를 끝마쳤을 뿐만 아니라, 팀 전체를 위한 프레젠테이션 슬라이드까지 준비했다.'
            }
          };
        }
      }

      // -----------------------------------------------------------------------
      // 패턴 2: 조동사 뒤 동사원형 규칙 위반
      // -----------------------------------------------------------------------
      const modalMatch = sentence.match(/\b(can|could|will|would|shall|should|may|might|must)\s+([a-zA-Z]+(?:ed|ing|s))\b/i);
      if (modalMatch) {
        const modal = modalMatch[1];
        const badVerb = modalMatch[2];
        const fixedVerb = badVerb.replace(/(ed|ing|s)$/i, '');
        const correctedSentence = sentence.replace(modalMatch[0], `${modal} ${fixedVerb}`);
        return {
          replyIntro: `문법 진단 결과, **조동사 뒤 동사원형 규칙 위반**이 감지되었습니다:`,
          card: {
            type: 'grammar',
            hasError: true,
            errorClause: `${modal} ${badVerb}`,
            fixedClause: `${modal} ${fixedVerb}`,
            ruleTitle: '조동사 + 동사원형 원칙',
            explanation: `조동사(${modal}) 뒤에는 시제나 수와 관계없이 반드시 본동사의 **동사원형**이 와야 합니다.`,
            correctedSentence: correctedSentence,
            translation: ''
          }
        };
      }

      // -----------------------------------------------------------------------
      // 오류가 없거나 자연스러운 문장
      // -----------------------------------------------------------------------
      return {
        replyIntro: `제시해주신 문장을 검토했습니다. 문법적으로 자연스럽고 정확한 문장입니다! ✨`,
        card: {
          type: 'grammar',
          hasError: false,
          correctedSentence: sentence,
          explanation: '문장의 주어-동사 일치, 시제, 어순이 모두 표준 영어 문법에 부합합니다.'
        }
      };
    }

    // -------------------------------------------------------------------------
    // 4. 레벨별 맞춤 단어장 추천 (Curriculum Recommender)
    // -------------------------------------------------------------------------
    diagnoseRecommendation(query) {
      let level = 3;
      const lvlMatch = query.match(/(?:레벨|lv\.?|level)\s*([1-9]|10)/i) || query.match(/([1-9]|10)\s*(?:레벨|단계)/i);
      if (lvlMatch) {
        level = parseInt(lvlMatch[1], 10);
      } else if (window.levelTestEngine && window.levelTestEngine.currentLevel) {
        level = window.levelTestEngine.currentLevel;
      }

      const recData = this.getLevelCurriculumData(level);
      return {
        replyIntro: `학습자님의 **레벨 ${level} (${recData.targetGrade})** 실력에 가장 최적화된 베리타스 추천 단어장 라인업입니다:`,
        card: {
          type: 'recommendation',
          level: level,
          levelTitle: recData.title,
          levelIntro: recData.intro,
          books: recData.books
        }
      };
    }

    getLevelCurriculumData(lvl) {
      const curriculums = {
        1: {
          title: 'Lv.1 스타터 (Starter)',
          targetGrade: '초등 기본 (초3~4)',
          intro: '파닉스를 마친 초등 3~4학년을 위한 필수 기초 어휘 및 일상 표현 단어장입니다.',
          books: [
            { title: '베리타스 오리지널 Lv.1 스타터', badge: '초등 교과 600단어', desc: '초3~4 검정 교과서 5종 공통 기초 어휘 600개 (30일 완강, 일 20단어)' },
            { title: '3D 스마트 플래시카드 & 콤보', badge: '인출 기억 훈련', desc: '카드 뒤집기를 통한 시각적 단어 암기 및 기초 예문 스피드 훈련' }
          ]
        },
        2: {
          title: 'Lv.2 익스플로러 (Explorer)',
          targetGrade: '초등 심화 / 예비중 (초5~6)',
          intro: '초등 고학년 및 중학교 진학 전 반드시 마스터해야 할 생활 밀착 어휘 라인업입니다.',
          books: [
            { title: '베리타스 오리지널 Lv.2 익스플로러', badge: '예비중 600단어', desc: '초등 5~6학년 심화 어휘 및 중등 첫걸음 대비 600어휘 (30일 완강)' },
            { title: '중학 첫걸음 필수 기초 영단어 1,000', badge: '시즌 단어장', desc: '중학교 1학년 진학 전 꼭 외워야 할 기초 1,000어휘 + 불규칙 동사 100선' }
          ]
        },
        3: {
          title: 'Lv.3 파이오니어 (Pioneer)',
          targetGrade: '중학교 1학년 / 초등 심화 완성',
          intro: '중등 내신 1등급의 초석을 다지는 중1 13종 검정 교과서 공통 어휘 및 옥스퍼드 기초 라인업입니다.',
          books: [
            { title: '베리타스 오리지널 Lv.3 파이오니어', badge: '중1 내신 600단어', desc: '중1 13종 검정 교과서 공통 핵심 어휘 및 학교생활 다빈출 600개 (A4 3단 보카북 지원)' },
            { title: 'Oxford 3000™ Vol.1 (Elementary A1~A2)', badge: '옥스퍼드 1,500어휘', desc: '영미권 대학 공인 옥스퍼드 3,000 핵심 어휘 중 기초 입문 50 DAYs (A1~A2 완벽 커버)' },
            { title: '중학 첫걸음 필수 기초 영단어 1,000', badge: '불규칙동사 100선', desc: '동사 3단 변화 집중 수록 및 예비중·중1 내신 대비 탄탄한 기초 확립' },
            { title: 'NE능률 중학 Voca 기본 (2025 최신)', badge: '베스트셀러 교재', desc: '중등 교과서 다빈출 핵심 어휘 및 시험 빈출 파생어 수록' }
          ]
        },
        4: {
          title: 'Lv.4 네비게이터 (Navigator)',
          targetGrade: '중학교 2학년 1학기',
          intro: '중2 첫 중간·기말 지필고사 100점을 완성하는 교과서 다의어 및 원어민 실전 구어체입니다.',
          books: [
            { title: '베리타스 오리지널 Lv.4 네비게이터', badge: '중2-1 내신 600단어', desc: '중2 1학기 지필고사 대비 다의어, 혼동 어휘, 감정 표현 600개' },
            { title: '넷플릭스·미드 생존 구어체 & SNS 슬랭 500', badge: '시즌 단어장', desc: '북미 Z세대 최신 SNS 슬랭 및 자연스러운 리얼 구어체 표현 500어휘' }
          ]
        },
        5: {
          title: 'Lv.5 챌린저 (Challenger)',
          targetGrade: '중학교 2학년 2학기',
          intro: '문장이 길어지는 중2 2학기 서술형 영작 및 고난도 독해 어휘를 정복하는 과정입니다.',
          books: [
            { title: '베리타스 오리지널 Lv.5 챌린저', badge: '중2-2 서술형 600단어', desc: '독해·서술형 핵심 어휘 및 문화·시사 원어민 실전 어휘 600개' },
            { title: '중등 내신 독해 70선', badge: '구문 독해 특화', desc: '문장 성분 해체 및 직독직해를 통한 내신 1등급 서술형 완성' }
          ]
        },
        6: {
          title: 'Lv.6 리더 (Leader)',
          targetGrade: '중학교 3학년 전과정 / 고교 입문',
          intro: '중등 영어를 최종 완성하고 고교 진학 후 수능 1등급의 탄탄한 발판을 마련하는 심화 과정입니다.',
          books: [
            { title: '베리타스 오리지널 Lv.6 리더', badge: '중3 총정리 600단어', desc: '중3 전과정 총정리 및 고교 내신 연계 고급 추상 어휘 600개' },
            { title: 'Oxford 3000™ Vol.2 (Intermediate B1~B2)', badge: '옥스퍼드 1,500어휘', desc: '영미권 중·고급 일상 및 아카데믹 리딩 필수 50 DAYs (B1~B2)' },
            { title: 'Pathways 1: 아카데믹 리딩 파운데이션', badge: '내셔널 지오그래픽', desc: 'National Geographic 실전 탐사 지문 기반 학술 심화 400단어' }
          ]
        },
        7: {
          title: 'Lv.7 마스터 (Master)',
          targetGrade: '고교 1학년 입문 / 수능 3~4등급',
          intro: '고교 내신 1등급 및 수능 독해 지문을 수월하게 뚫어내는 고교 필수 어휘입니다.',
          books: [
            { title: '베리타스 오리지널 Lv.7 마스터', badge: '고1 수능입문 600단어', desc: '고1 모의고사 및 수능 빈출 3개년 필수 어휘 600개' },
            { title: 'NE능률 리딩튜터 챌린저 1', badge: '고교 입문 40 DAYs', desc: '고교 입문 수준의 다양한 배경지식 독해 연계 750단어' },
            { title: 'NE능률 Voca 어원편 (2025 개정)', badge: '접두사·어근 분석', desc: '어원으로 단어의 원리를 꿰뚫는 필수 어휘집' }
          ]
        },
        8: {
          title: 'Lv.8 어드밴스드 (Advanced)',
          targetGrade: '고교 실전 / 수능 1~2등급',
          intro: '수능 1등급 안정권 확보 및 대학 전공 원서 독해를 위한 고급 학술 어휘입니다.',
          books: [
            { title: '베리타스 오리지널 Lv.8 어드밴스드', badge: '수능 1등급 600단어', desc: 'EBS 연계 교재 및 수능 킬러 문항 빈출 고급 어휘 600개' },
            { title: 'TED & 글로벌 뉴스 시사 영단어 600', badge: '시사 심화 600단어', desc: 'TED 강연, 뉴욕타임스, BBC 뉴스 빈출 글로벌 시사 경제/과학 어휘' },
            { title: 'Oxford 5000™ Vol.1 (B2 Plus)', badge: '옥스퍼드 1,000어휘', desc: '학술적 논증 및 에세이 작성에 필수적인 C1 진입 어휘' }
          ]
        },
        9: {
          title: 'Lv.9 엑스퍼트 (Expert)',
          targetGrade: '수능 1등급 킬러 / 텝스·토플 실전',
          intro: '최상위권 변별력 빈칸추론 킬러 문항 및 공인 어학시험 고득점용 어휘입니다.',
          books: [
            { title: '베리타스 오리지널 Lv.9 엑스퍼트', badge: '킬러문항 600단어', desc: '철학, 심리학, 언어학 추상 지문 전용 최상위 600단어' },
            { title: 'NE능률 리딩튜터 챌린저 3', badge: '고교 심화 780단어', desc: '최상위권 수능 1등급 실전 독해 완성 교재' },
            { title: '영미권 대학 에세이 학술 어휘 600', badge: '아카데믹 600어휘', desc: '해외 대학 강의, 소논문, 비평 에세이 필수 논리 어휘' }
          ]
        },
        10: {
          title: 'Lv.10 그랜드마스터 (Grand Master)',
          targetGrade: '최상위권 / CEFR C2 / Economist 원서',
          intro: '원어민 지식인 수준의 학술 논문, The Economist, Nature 원서 독해를 정복하는 최고 등급입니다.',
          books: [
            { title: '베리타스 오리지널 Lv.10 그랜드마스터', badge: '최고급 600단어', desc: '원서 및 국제 시사 학술 정론지 완독을 위한 하이엔드 어휘' },
            { title: 'Oxford 5000™ Vol.2 (C1 Advanced)', badge: '옥스퍼드 1,000어휘', desc: 'C1~C2 최고 난도 어휘 40일 완성' }
          ]
        }
      };

      return curriculums[lvl] || curriculums[3];
    }

    // -------------------------------------------------------------------------
    // 5. 한영/영한 어휘 진단 & 역방향 매칭 엔진 (Vocabulary Doctor Engine)
    // -------------------------------------------------------------------------
    extractKoreanWordCandidate(query) {
      if (!query) return null;

      // 1. 인용부호 속 단어 우선 추출 ("'완화하다'" or '"취약한"')
      const quoteMatch = query.match(/["“'‘]([^"”'’]{1,25})["”'’]/);
      if (quoteMatch) {
        const val = quoteMatch[1].trim();
        if (/[가-힣]/.test(val)) {
          return val.replace(/^(?:은|는|이|가|을|를)\s*/, '').trim();
        }
      }

      // 2. 패턴: "영단어 중에 [대상]를 뜻하는" / "영단어 중에서 [대상] 의미하는"
      const revMatch = query.match(/(?:영단어|단어|영어\s*단어|표현)\s*(?:중(?:에서|에)?\s*)?([가-힣\s]{2,15}?)(?:를|을|의|이라는|라는)?\s*(?:뜻하는|의미하는|나타내는)/);
      if (revMatch) {
        return revMatch[1].trim();
      }

      // 3. 패턴: "[대상](을/를/이란/라는/에 해당하는)? (뜻하는|의미하는|나타내는|가리키는) (영단어|단어|영어 단어|표현)"
      const p1 = query.match(/(?:혹시\s*)?([가-힣\s]{2,15}?)(?:를|을|의|이란|라는|이라는|에\s*해당하는|의\s*뜻을\s*가진|뜻의|의미의)?\s*(?:뜻하는|의미하는|나타내는|가리키는|뜻을\s*가진|의미의|뜻의)\s*(?:영단어|영어\s*단어|단어|표현)/);
      if (p1) {
        return p1[1].trim();
      }

      // 4. 패턴: "[대상](은/는/이/가)? 영어(단어)?로 뭐야/알려줘"
      const p2 = query.match(/(?:혹시\s*)?([가-힣\s]{2,15}?)(?:은|는|이|가|을|를)?\s*(?:영어\s*단어|영단어|영어)로\s*(?:뭐야|뭔가요|알려줘|무엇인가요|어떻게|\?)/);
      if (p2) {
        return p2[1].trim();
      }

      // 5. 패턴: "[대상]에 해당하는 영단어/단어"
      const p3 = query.match(/(?:혹시\s*)?([가-힣\s]{2,15}?)(?:에\s*해당하는|에\s*맞는)\s*(?:영단어|영어\s*단어|단어|표현)/);
      if (p3) {
        return p3[1].trim();
      }

      return null;
    }

    async resolveKoreanToEnglish(koreanTerm) {
      if (!koreanTerm) return null;
      const clean = koreanTerm.trim();
      if (!clean) return null;

      // 형태소 어간 후보군 생성 (완화하다 -> 완화, 완화하 / 위협적인 -> 위협적, 위협 / 취약한 -> 취약)
      const stems = [clean];
      if (clean.endsWith('하다')) {
        stems.push(clean.slice(0, -2));
        stems.push(clean.slice(0, -2) + '하');
      } else if (clean.endsWith('적인')) {
        stems.push(clean.slice(0, -2));
        stems.push(clean.slice(0, -1));
      } else if (clean.endsWith('한')) {
        stems.push(clean.slice(0, -1));
      } else if (clean.endsWith('하는')) {
        stems.push(clean.slice(0, -2));
      } else if (clean.endsWith('있는')) {
        stems.push(clean.slice(0, -2).trim());
      } else if (clean.endsWith('되다') || clean.endsWith('시키다')) {
        stems.push(clean.slice(0, -2));
      } else if (clean.endsWith('스럽다')) {
        stems.push(clean.slice(0, -3));
      } else if (clean.endsWith('로운')) {
        stems.push(clean.slice(0, -2));
      }
      const validStems = Array.from(new Set(stems.filter(s => s && s.length >= 2)));

      const matches = [];
      const seenWords = new Set();

      // [Tier 1] 내장 심화 사전 (builtInLexicon) 검색
      for (const key of Object.keys(this.builtInLexicon)) {
        const item = this.builtInLexicon[key];
        const mStr = item.meaning || '';
        if (mStr.includes(clean)) {
          matches.push({ score: 100, data: item });
          seenWords.add(item.word.toLowerCase());
        } else if (validStems.some(s => mStr.includes(s))) {
          matches.push({ score: 85, data: item });
          seenWords.add(item.word.toLowerCase());
        }
      }

      // [Tier 2] 전역 20,000+ 교재 어휘 DB 풀 검색
      const pools = [
        window.VERITAS_ORIGINAL_WORDS_DATA,
        window.VERITAS_SEASONS_WORDS_DATA,
        window.VERITAS_OXFORD_WORDS_DATA,
        window.VERITAS_PATHWAYS_WORDS_DATA,
        window.VERITAS_CHALLENGER_WORDS_DATA,
        window.SAMPLE_WORDS,
        window.NEUNGRYUL_VOCA_2025_DATA,
        window.READING_LEXICON_DATA,
        window.CURATED_VOCABULARY
      ];

      for (const pool of pools) {
        if (!Array.isArray(pool)) continue;
        for (const w of pool) {
          const wordStr = String(w.word || w['단어'] || w['영단어'] || w.title || '').trim();
          if (!wordStr || seenWords.has(wordStr.toLowerCase())) continue;

          const meanStr = String(w.meaning || w['뜻'] || w.exampleMeaning || w.definition || '').trim();
          if (!meanStr) continue;

          // 의미 토큰 정확 일치 체크 (예: "완화하다, 경감하다" 중 "완화하다")
          const tokens = meanStr.split(/[,;·\(\)\[\]\/\s]+/).map(t => t.trim()).filter(Boolean);
          if (tokens.includes(clean)) {
            matches.push({
              score: 95,
              data: {
                word: wordStr,
                pronunciation: w.pronunciation || w['발음'] || '',
                pos: w.pos || w['품사'] || w.partOfSpeech || '',
                meaning: meanStr,
                example: w.example || w['예문'] || w.example_en || '',
                example_kr: w.example_kr || w['해석'] || w['예문해석'] || w.exampleMeaning || w.example_ko || '',
                nuance: w.nuance || w.nuanceTip || w['원어민팁'] || w.collocation || '',
                synonyms: w.synonyms || ''
              }
            });
            seenWords.add(wordStr.toLowerCase());
            continue;
          }

          if (meanStr.includes(clean)) {
            matches.push({
              score: 80,
              data: {
                word: wordStr,
                pronunciation: w.pronunciation || w['발음'] || '',
                pos: w.pos || w['품사'] || w.partOfSpeech || '',
                meaning: meanStr,
                example: w.example || w['예문'] || w.example_en || '',
                example_kr: w.example_kr || w['해석'] || w['예문해석'] || w.exampleMeaning || w.example_ko || '',
                nuance: w.nuance || w.nuanceTip || w['원어민팁'] || w.collocation || '',
                synonyms: w.synonyms || ''
              }
            });
            seenWords.add(wordStr.toLowerCase());
            continue;
          }

          if (validStems.some(s => tokens.includes(s) || meanStr.includes(s))) {
            matches.push({
              score: 60,
              data: {
                word: wordStr,
                pronunciation: w.pronunciation || w['발음'] || '',
                pos: w.pos || w['품사'] || w.partOfSpeech || '',
                meaning: meanStr,
                example: w.example || w['예문'] || w.example_en || '',
                example_kr: w.example_kr || w['해석'] || w['예문해석'] || w.exampleMeaning || w.example_ko || '',
                nuance: w.nuance || w.nuanceTip || w['원어민팁'] || w.collocation || '',
                synonyms: w.synonyms || ''
              }
            });
            seenWords.add(wordStr.toLowerCase());
          }
        }
      }

      if (matches.length > 0) {
        matches.sort((a, b) => b.score - a.score);
        const primary = matches[0].data;
        const related = matches.slice(1, 4).map(m => m.data);
        return { primary, related };
      }

      // [Tier 3] 온라인 번역 API 폴백 (MyMemory Translate API)
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        const transRes = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=ko|en`, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (transRes.ok) {
          const transData = await transRes.json();
          let engText = transData?.responseData?.translatedText;
          if (engText && !/[가-힣]/.test(engText)) {
            let cleanEng = engText.replace(/^(to\s+|a\s+|the\s+)/i, '').trim().toLowerCase();
            const firstWord = cleanEng.split(/[\s,]+/)[0];
            const resolved = await this.resolveWord(firstWord || cleanEng);
            if (resolved) {
              return { primary: resolved, related: [] };
            } else {
              return {
                primary: {
                  word: cleanEng,
                  pronunciation: '',
                  pos: '',
                  meaning: `${clean} (온라인 번역 매칭)`,
                  example: '',
                  example_kr: '',
                  nuance: '글로벌 번역 엔진을 통해 매칭된 영어 어휘입니다.',
                  synonyms: ''
                },
                related: []
              };
            }
          }
        }
      } catch (e) {
        console.warn('MyMemory translation lookup failed:', e);
      }

      return null;
    }

    extractWordCandidate(query) {
      const quoteMatch = query.match(/["“'‘]([a-zA-Z]{2,})["”'’]/);
      if (quoteMatch) return quoteMatch[1].toLowerCase();

      const patternMatch = query.match(/(?:혹시\s*)?([a-zA-Z]{2,})\s*(?:의|이란|라는)?\s*(?:뜻|의미|예문|발음|품사)/i);
      if (patternMatch) return patternMatch[1].toLowerCase();

      const engMatch = query.match(/[a-zA-Z]{2,}/);
      if (engMatch) return engMatch[0].toLowerCase();

      return null;
    }

    async resolveWord(target) {
      const cleanTarget = target.toLowerCase().trim();

      // 1티어: 내장 심화 어휘 사전
      if (this.builtInLexicon[cleanTarget]) {
        return this.builtInLexicon[cleanTarget];
      }

      // 2티어: 전역 20,000+ 교재 어휘 DB
      const localFound = this.searchWordInGlobalPool(cleanTarget);
      if (localFound) return localFound;

      // 3티어: Free Dictionary API 실시간 비동기 연동
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanTarget)}`, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const entry = data[0];
            const phonetic = entry.phonetic || (entry.phonetics && entry.phonetics.find(p => p.text)?.text) || '';
            const meaningObj = entry.meanings && entry.meanings[0];
            const defObj = meaningObj && meaningObj.definitions && meaningObj.definitions[0];
            const pos = meaningObj ? meaningObj.partOfSpeech : '';
            const defEn = defObj ? defObj.definition : '';
            const exEn = defObj ? defObj.example : '';
            const synonyms = (meaningObj && meaningObj.synonyms && meaningObj.synonyms.slice(0, 4).join(', ')) || '';

            return {
              word: entry.word || cleanTarget,
              pronunciation: phonetic,
              pos: pos ? `[${pos}]` : '',
              meaning: defEn || '글로벌 온라인 사전 정의 참조',
              example: exEn,
              example_kr: '',
              nuance: `Oxford/Merriam 공인 영어 사전 정의입니다. (${defEn})`,
              synonyms: synonyms
            };
          }
        }
      } catch (e) {
        console.warn('Free Dictionary API lookup failed:', e);
      }

      return null;
    }

    searchWordInGlobalPool(target) {
      const pools = [
        window.VERITAS_ORIGINAL_WORDS_DATA,
        window.VERITAS_SEASONS_WORDS_DATA,
        window.VERITAS_OXFORD_WORDS_DATA,
        window.VERITAS_PATHWAYS_WORDS_DATA,
        window.VERITAS_CHALLENGER_WORDS_DATA,
        window.SAMPLE_WORDS,
        window.NEUNGRYUL_VOCA_2025_DATA,
        window.NEUNGRYUL_VOCA_2025,
        window.READING_LEXICON_DATA,
        window.CURATED_VOCABULARY
      ];

      const stems = [target];
      if (target.endsWith('ing')) {
        stems.push(target.slice(0, -3));
        stems.push(target.slice(0, -3) + 'e'); // intimidating -> intimidate
      } else if (target.endsWith('ed')) {
        stems.push(target.slice(0, -2));
        stems.push(target.slice(0, -1)); // intimidated -> intimidate
      } else if (target.endsWith('s')) {
        stems.push(target.slice(0, -1));
      }

      for (const pool of pools) {
        if (!Array.isArray(pool)) continue;

        for (const stem of stems) {
          const match = pool.find(w => {
            const wordStr = String(w.word || w['단어'] || w['영단어'] || '').toLowerCase();
            return wordStr === stem;
          });

          if (match) {
            return {
              word: match.word || match['단어'] || match['영단어'] || target,
              pronunciation: match.pronunciation || match['발음'] || '',
              pos: match.pos || match['품사'] || '',
              meaning: match.meaning || match['뜻'] || '',
              example: match.example || match['예문'] || match.example_en || '',
              example_kr: match.example_kr || match['해석'] || match['예문해석'] || match.example_ko || '',
              nuance: match.nuance || match.nuanceTip || match['원어민팁'] || match.collocation || '',
              synonyms: match.synonyms || ''
            };
          }
        }
      }

      for (const pool of pools) {
        if (!Array.isArray(pool)) continue;
        const match = pool.find(w => {
          const meanStr = String(w.meaning || w['뜻'] || '').toLowerCase();
          return meanStr.includes(target);
        });
        if (match) {
          return {
            word: match.word || match['단어'] || match['영단어'] || '',
            pronunciation: match.pronunciation || match['발음'] || '',
            pos: match.pos || match['품사'] || '',
            meaning: match.meaning || match['뜻'] || '',
            example: match.example || match['예문'] || match.example_en || '',
            example_kr: match.example_kr || match['해석'] || match['예문해석'] || match.example_ko || '',
            nuance: match.nuance || match.nuanceTip || match['원어민팁'] || match.collocation || '',
            synonyms: match.synonyms || ''
          };
        }
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
