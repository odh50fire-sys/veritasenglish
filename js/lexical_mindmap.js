/**
 * Veritas English - 인터랙티브 어휘 지식 그래프 (LexicalMindmap)
 * HTML5 Canvas 기반 스프링 물리 시뮬레이션(Hooke + Coulomb) 순수 바닐라 JS 구현
 * 표제어-유의어-반의어-파생어-핵심연어-어원을 연결하는 3차원 유기적 마인드맵 어휘 탐색기
 */

class LexicalMindmap {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.containerId = 'modal-lexical-mindmap';
    this.currentWord = 'resilient';
    this.nodes = [];
    this.edges = [];
    this.animId = null;
    this.draggedNode = null;
    this.hoveredNode = null;
    this.zoom = 1.0;
    this.panX = 0;
    this.panY = 0;
    this.isPanning = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;

    // 물리 상수
    this.repulsionK = 4200;
    this.springK = 0.055;
    this.springLength = 150;
    this.damping = 0.82;

    this.typeColors = {
      center: { fill: '#f59e0b', stroke: '#fbbf24', text: '#0f172a', label: '중심 표제어' },
      synonym: { fill: '#0284c7', stroke: '#38bdf8', text: '#ffffff', label: '유의어' },
      antonym: { fill: '#ea580c', stroke: '#fb923c', text: '#ffffff', label: '반의어' },
      derivative: { fill: '#9333ea', stroke: '#c084fc', text: '#ffffff', label: '파생어' },
      collocation: { fill: '#059669', stroke: '#34d399', text: '#ffffff', label: '핵심 연어' },
      etymology: { fill: '#0d9488', stroke: '#2dd4bf', text: '#ffffff', label: '어원/뿌리' }
    };
  }

  /**
   * 단어 지식 그래프 열기 (외부 호출 진입점)
   */
  open(targetWord = 'resilient') {
    this.currentWord = String(targetWord || 'resilient').trim().toLowerCase();
    this.createModalDOM();

    // 1. 모달 먼저 가시화하여 브라우저 DOM 렌더 트리 및 실제 치수 확보
    const modal = document.getElementById(this.containerId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    // 2. 캔버스 초기화 및 치수 동기화
    this.initCanvas();
    this.buildGraphForWord(this.currentWord);
    this.startSimulation();

    // 3. 브라우저 렌더링 파이프라인 안정화 후 캔버스 리사이즈 & 중앙 정렬 보정
    requestAnimationFrame(() => {
      this.resizeCanvas();
      this.recenterGraph();
    });

    if (window.lucide) window.lucide.createIcons();
  }

  close() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
    const modal = document.getElementById(this.containerId);
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  createModalDOM() {
    let modal = document.getElementById(this.containerId);
    if (!modal) {
      modal = document.createElement('div');
      modal.id = this.containerId;
      modal.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-slate-950/90 backdrop-blur-md p-2 sm:p-4';
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="relative w-full h-full max-w-7xl max-h-[94vh] bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        <!-- 상단 헤더 툴바 -->
        <div class="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between text-white z-10 shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 flex items-center justify-center text-lg">
              🕸️
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">Lexical Mindmap Explorer</span>
                <span class="px-2 py-0.2 rounded-full bg-slate-800 text-slate-300 font-mono text-[10px]">HTML5 Physics Simulation</span>
              </div>
              <h2 class="font-serif font-black text-lg text-white flex items-center gap-2">
                <span>시각적 어휘 지식 그래프</span>
                <span id="mindmap-title-word" class="text-amber-300 font-sans text-sm font-bold bg-amber-400/10 px-2.5 py-0.5 rounded-lg border border-amber-400/20"></span>
              </h2>
            </div>
          </div>

          <!-- 컨트롤러 버튼군 -->
          <div class="flex items-center gap-2">
            <!-- 줌 인/아웃 -->
            <div class="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700 text-xs">
              <button onclick="window.lexicalMindmap.adjustZoom(0.15)" class="px-2.5 py-1 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors font-bold cursor-pointer" title="확대">+</button>
              <button onclick="window.lexicalMindmap.resetZoom()" class="px-2.5 py-1 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors text-[10px] font-mono cursor-pointer">100%</button>
              <button onclick="window.lexicalMindmap.adjustZoom(-0.15)" class="px-2.5 py-1 text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors font-bold cursor-pointer" title="축소">-</button>
            </div>

            <!-- 발음 듣기 -->
            <button onclick="window.tts && window.tts.speak(window.lexicalMindmap.currentWord)" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 transition-colors cursor-pointer" title="현재 표제어 발음 듣기">
              <i data-lucide="volume-2" class="w-4 h-4"></i>
            </button>

            <!-- 1문장 영작 코치로 바로가기 -->
            <button onclick="window.lexicalMindmap.openCoachWithCurrent()" class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition-all cursor-pointer" title="이 단어로 1문장 영작하기">
              <span>✍️ 영작 튜터</span>
            </button>

            <!-- 닫기 -->
            <button onclick="window.lexicalMindmap.close()" class="p-2 rounded-xl bg-slate-800 hover:bg-red-950 hover:text-red-300 text-slate-400 transition-colors cursor-pointer" title="닫기 (ESC)">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>
        </div>

        <!-- 캔버스 영역 -->
        <div class="relative flex-1 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 overflow-hidden cursor-grab active:cursor-grabbing w-full h-full min-h-[400px]" id="mindmap-canvas-container">
          <canvas id="mindmap-canvas" class="w-full h-full block"></canvas>

          <!-- 좌측 하단 범례 (Legend) -->
          <div class="absolute bottom-4 left-4 z-10 bg-slate-900/85 backdrop-blur-md border border-slate-800 rounded-2xl p-3 text-[11px] text-slate-300 space-y-1.5 shadow-xl pointer-events-none hidden sm:block">
            <span class="text-slate-400 font-bold block text-[10px] uppercase tracking-wider mb-1">노드 범례 (클릭 시 중심어 전환)</span>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
              <span class="font-bold text-amber-300">중심 표제어 (Core)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#0284c7]"></span>
              <span>유의어 (Synonyms)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#ea580c]"></span>
              <span>반의어 (Antonyms)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#9333ea]"></span>
              <span>파생어 (Derivatives)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#059669]"></span>
              <span>핵심 연어 (Collocations)</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#0d9488]"></span>
              <span>어원/뉘앙스 (Etymology)</span>
            </div>
          </div>

          <!-- 우측 하단 도움말 -->
          <div class="absolute bottom-4 right-4 z-10 bg-slate-900/80 backdrop-blur-xs border border-slate-800 rounded-xl px-3 py-2 text-[10px] text-slate-400 pointer-events-none text-right">
            <span>🖱️ <b>드래그:</b> 화면 이동 & 노드 당기기 | <b>휠:</b> 줌 확대/축소 | <b>노드 클릭:</b> 새로운 중심어로 연쇄 탐색</span>
          </div>
        </div>
      </div>
    `;
  }

  openCoachWithCurrent() {
    const word = this.currentWord;
    this.close();
    if (window.aiWritingCoach) {
      window.aiWritingCoach.open(word);
    }
  }

  initCanvas() {
    this.canvas = document.getElementById('mindmap-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.resizeCanvas();
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.recenterGraph();
    });

    this.bindCanvasEvents();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const container = document.getElementById('mindmap-canvas-container');
    const w = (container && container.clientWidth > 100) ? container.clientWidth : Math.min(window.innerWidth - 32, 1200);
    const h = (container && container.clientHeight > 100) ? container.clientHeight : Math.max(480, window.innerHeight - 180);
    
    if (this.canvas.width !== w || this.canvas.height !== h) {
      this.canvas.width = w;
      this.canvas.height = h;
    }
  }

  recenterGraph() {
    if (!this.canvas || this.nodes.length === 0) return;
    const centerNode = this.nodes.find(n => n.isCenter);
    if (!centerNode) return;
    const targetX = this.canvas.width / 2;
    const targetY = this.canvas.height / 2;
    const dx = targetX - centerNode.x;
    const dy = targetY - centerNode.y;
    for (const n of this.nodes) {
      n.x += dx;
      n.y += dy;
    }
  }

  /**
   * 전역 어휘 데이터베이스 전체에서 단어 정보 정밀 검색
   */
  findWordInfo(queryWord) {
    const q = String(queryWord || '').trim().toLowerCase();
    if (!q) return null;

    // 1. Veritas Original 6,000 어휘 검색
    const origPool = window.VERITAS_ORIGINAL_WORDS_DATA || [];
    let found = origPool.find(w => String(w.word || '').toLowerCase() === q);
    if (found) return found;

    // 2. Pathways 1,600 어휘 검색
    const pwPool = window.VERITAS_PATHWAYS_WORDS_DATA || [];
    found = pwPool.find(w => String(w.word || '').toLowerCase() === q);
    if (found) return found;

    // 3. Oxford 3000/5000 어휘 검색
    const oxPool = window.VERITAS_OXFORD_WORDS_DATA || [];
    found = oxPool.find(w => String(w.word || '').toLowerCase() === q);
    if (found) return found;

    // 4. 리딩튜터 챌린저 어휘 검색
    const rtPool = window.READING_TUTOR_CHALLENGER_WORDS_DATA || [];
    found = rtPool.find(w => String(w.word || '').toLowerCase() === q);
    if (found) return found;

    // 5. Veritas Curated Words 검색
    const curPool = window.VERITAS_CURATED_WORDS || [];
    found = curPool.find(w => String(w.word || '').toLowerCase() === q);
    if (found) return found;

    // 6. 독해 지문 어휘 검색
    const lexPool = window.READING_LEXICON_WORDS || [];
    found = lexPool.find(w => String(w.word || '').toLowerCase() === q);
    if (found) return found;

    // 7. 로컬 스토리지 단어 검색
    const stPool = (window.storage && window.storage.words) ? window.storage.words : [];
    found = stPool.find(w => String(w.word || '').toLowerCase() === q);
    if (found) return found;

    // 8. 샘플 단어 풀 검색
    const samplePool = window.SAMPLE_WORDS || [];
    found = samplePool.find(w => String(w.word || '').toLowerCase() === q);
    if (found) return found;

    return null;
  }

  /**
   * 형태학/어휘론적 지능형 유의어/반의어/파생어/연어 자동 추론 보강
   */
  enrichRelationships(wordStr, rawInfo = {}) {
    const w = wordStr.toLowerCase();
    const meaning = rawInfo.meaning || rawInfo['뜻'] || '';
    const pos = (rawInfo.pos || rawInfo['품사'] || '').toLowerCase();

    // 1. 유의어 자동 보강
    let syns = [];
    const rawSyn = rawInfo.synonyms || rawInfo['유의어'] || '';
    if (typeof rawSyn === 'string' && rawSyn.trim()) {
      syns = rawSyn.split(/[,;/]/).map(s => s.trim()).filter(s => s && s.toLowerCase() !== w);
    }
    if (syns.length === 0) {
      // 일반 어휘 유의어 매핑
      const semanticSynonymMap = {
        mitigate: ['alleviate', 'lessen', 'relieve', 'diminish'],
        persevere: ['persist', 'endure', 'continue', 'prevail'],
        resilient: ['adaptable', 'durable', 'buoyant', 'strong'],
        adversity: ['hardship', 'misfortune', 'difficulty', 'trial'],
        acquire: ['obtain', 'gain', 'attain', 'master'],
        facilitate: ['expedite', 'assist', 'promote', 'enable'],
        crucial: ['vital', 'essential', 'pivotal', 'critical'],
        enhance: ['improve', 'boost', 'upgrade', 'enrich'],
        pioneer: ['innovator', 'trailblazer', 'founder', 'groundbreaker'],
        phenomenon: ['occurrence', 'event', 'marvel', 'manifestation'],
        vulnerable: ['susceptible', 'exposed', 'fragile', 'defenseless'],
        courageous: ['brave', 'valiant', 'fearless', 'heroic']
      };
      if (semanticSynonymMap[w]) {
        syns = semanticSynonymMap[w];
      } else {
        // 공통 학술 유사 표현 기본 추천
        syns = ['comprehend', 'incorporate', 'demonstrate'];
      }
    }

    // 2. 반의어 자동 보강
    let ants = [];
    const rawAnt = rawInfo.antonyms || rawInfo['반의어'] || '';
    if (typeof rawAnt === 'string' && rawAnt.trim()) {
      ants = rawAnt.split(/[,;/]/).map(s => s.trim()).filter(s => s && s.toLowerCase() !== w);
    }
    if (ants.length === 0) {
      const semanticAntonymMap = {
        mitigate: ['aggravate', 'worsen', 'exacerbate'],
        persevere: ['give up', 'surrender', 'relinquish'],
        resilient: ['fragile', 'vulnerable', 'weak'],
        adversity: ['prosperity', 'fortune', 'luck'],
        acquire: ['lose', 'forfeit', 'relinquish'],
        facilitate: ['hinder', 'impede', 'obstruct'],
        crucial: ['trivial', 'minor', 'insignificant'],
        enhance: ['degrade', 'diminish', 'impair'],
        vulnerable: ['invulnerable', 'protected', 'secure'],
        courageous: ['timid', 'cowardly', 'fearful']
      };
      if (semanticAntonymMap[w]) {
        ants = semanticAntonymMap[w];
      } else if (w.startsWith('un')) {
        ants = [w.slice(2)];
      } else if (w.startsWith('in') || w.startsWith('im')) {
        ants = [w.slice(2)];
      } else {
        ants = [`non-${w}`, `in-${w}`];
      }
    }

    // 3. 파생어 자동 생성
    let derivs = [];
    const rawDeriv = rawInfo.derivative || rawInfo['파생어'] || '';
    if (typeof rawDeriv === 'string' && rawDeriv.trim()) {
      derivs = rawDeriv.split(/[,;/]/).map(s => s.trim()).filter(Boolean);
    }
    if (derivs.length === 0) {
      if (w.endsWith('e')) {
        derivs = [`${w.slice(0, -1)}ing (adj)`, `${w.slice(0, -1)}ion (n)`, `${w}d (v)`];
      } else if (w.endsWith('ate')) {
        derivs = [`${w.slice(0, -1)}ion (n)`, `${w.slice(0, -1)}ive (adj)`, `${w}d (v)`];
      } else if (w.endsWith('ent') || w.endsWith('ant')) {
        derivs = [`${w.slice(0, -1)}ce (n)`, `${w}ly (adv)`];
      } else if (w.endsWith('ive')) {
        derivs = [`${w}ly (adv)`, `${w}ness (n)`];
      } else {
        derivs = [`${w}ly (adv)`, `${w}ness (n)`, `${w}able (adj)`];
      }
    }

    // 4. 핵심 연어 자동 보강
    let collocs = [];
    const rawColloc = rawInfo.collocation || rawInfo['연어'] || '';
    if (typeof rawColloc === 'string' && rawColloc.trim()) {
      collocs = rawColloc.split(/[,;/]/).map(s => s.trim()).filter(Boolean);
    }
    if (collocs.length === 0) {
      const collocMap = {
        mitigate: ['mitigate the risk', 'mitigate climate change', 'mitigate the impact'],
        persevere: ['persevere in hardships', 'persevere with determination', 'persevere to the end'],
        resilient: ['resilient economy', 'resilient infrastructure', 'psychologically resilient'],
        adversity: ['overcome adversity', 'face severe adversity', 'triumph over adversity'],
        acquire: ['acquire knowledge', 'acquire new skills', 'acquire a reputation'],
        facilitate: ['facilitate communication', 'facilitate the process', 'facilitate learning'],
        crucial: ['play a crucial role', 'crucial factor', 'crucial turning point'],
        enhance: ['enhance the quality', 'enhance performance', 'enhance security']
      };
      if (collocMap[w]) {
        collocs = collocMap[w];
      } else {
        collocs = [`effectively ${w}`, `profound ${w}`, `aim to ${w}`];
      }
    }

    // 5. 어원/뉘앙스 팁 보강
    let etym = rawInfo.etymology || rawInfo['어원'] || rawInfo.nuanceTip || '';
    if (!etym) {
      if (w.startsWith('con') || w.startsWith('com')) etym = '라틴어 con- (함께, 완전히)';
      else if (w.startsWith('per')) etym = '라틴어 per- (철저히, 끝까지)';
      else if (w.startsWith('re')) etym = '라틴어 re- (다시, 되돌려)';
      else if (w.startsWith('pro')) etym = '라틴어 pro- (앞으로, 향하여)';
      else if (w.startsWith('dis') || w.startsWith('de')) etym = '라틴어 dis-/de- (분리, 감소)';
      else etym = `${w}의 학술 원서 핵심 어근`;
    }

    return {
      word: w,
      meaning: meaning,
      pos: pos,
      synonyms: syns.slice(0, 4),
      antonyms: ants.slice(0, 3),
      derivatives: derivs.slice(0, 3),
      collocations: collocs.slice(0, 3),
      etymology: etym
    };
  }

  /**
   * 단어를 기반으로 1차/2차 노드 및 엣지 그래프 구성
   */
  buildGraphForWord(wordStr) {
    const rawInfo = this.findWordInfo(wordStr) || {};
    const info = this.enrichRelationships(wordStr, rawInfo);

    const titleEl = document.getElementById('mindmap-title-word');
    if (titleEl) {
      titleEl.textContent = `${wordStr} ${info.meaning ? `(${info.meaning})` : ''}`;
    }

    this.resizeCanvas();
    const width = this.canvas && this.canvas.width > 100 ? this.canvas.width : 900;
    const height = this.canvas && this.canvas.height > 100 ? this.canvas.height : 600;
    const cx = width / 2;
    const cy = height / 2;

    this.nodes = [];
    this.edges = [];

    // 1. 중심 노드 생성
    const centerNode = {
      id: 'center_' + wordStr,
      word: wordStr,
      label: wordStr,
      subLabel: info.meaning || 'Core',
      type: 'center',
      x: cx,
      y: cy,
      vx: 0,
      vy: 0,
      radius: 36,
      isCenter: true
    };
    this.nodes.push(centerNode);

    // 2. 유의어 (Synonyms) 노드
    const synList = info.synonyms || [];
    synList.forEach((syn, i) => {
      const angle = (i / Math.max(1, synList.length)) * Math.PI * 0.9 - Math.PI * 0.45;
      const n = {
        id: 'syn_' + syn,
        word: syn,
        label: syn,
        subLabel: '유의어',
        type: 'synonym',
        x: cx + Math.cos(angle) * this.springLength + (Math.random() - 0.5) * 15,
        y: cy + Math.sin(angle) * this.springLength + (Math.random() - 0.5) * 15,
        vx: 0,
        vy: 0,
        radius: 25
      };
      this.nodes.push(n);
      this.edges.push({ source: centerNode, target: n, length: this.springLength });
    });

    // 3. 반의어 (Antonyms) 노드
    const antList = info.antonyms || [];
    antList.forEach((ant, i) => {
      const angle = Math.PI + (i / Math.max(1, antList.length)) * Math.PI * 0.7 - Math.PI * 0.35;
      const n = {
        id: 'ant_' + ant,
        word: ant,
        label: ant,
        subLabel: '반의어',
        type: 'antonym',
        x: cx + Math.cos(angle) * this.springLength,
        y: cy + Math.sin(angle) * this.springLength,
        vx: 0,
        vy: 0,
        radius: 24
      };
      this.nodes.push(n);
      this.edges.push({ source: centerNode, target: n, length: this.springLength });
    });

    // 4. 파생어 (Derivatives) 노드
    const derivList = info.derivatives || [];
    derivList.forEach((deriv, i) => {
      const angle = Math.PI * 0.55 + (i * 0.5) - 0.5;
      const n = {
        id: 'der_' + deriv,
        word: deriv.split(' ')[0],
        label: deriv,
        subLabel: '파생어',
        type: 'derivative',
        x: cx + Math.cos(angle) * (this.springLength * 1.15),
        y: cy + Math.sin(angle) * (this.springLength * 1.15),
        vx: 0,
        vy: 0,
        radius: 25
      };
      this.nodes.push(n);
      this.edges.push({ source: centerNode, target: n, length: this.springLength * 1.15 });
    });

    // 5. 핵심 연어 (Collocations) 노드
    const collocList = info.collocations || [];
    collocList.forEach((colloc, i) => {
      const angle = -Math.PI * 0.55 + (i * 0.6) - 0.6;
      const n = {
        id: 'col_' + colloc,
        word: colloc.replace(/\(.*?\)/g, '').trim(),
        label: colloc.length > 20 ? colloc.slice(0, 18) + '...' : colloc,
        subLabel: '학술 연어',
        type: 'collocation',
        x: cx + Math.cos(angle) * (this.springLength * 1.3),
        y: cy + Math.sin(angle) * (this.springLength * 1.3),
        vx: 0,
        vy: 0,
        radius: 28
      };
      this.nodes.push(n);
      this.edges.push({ source: centerNode, target: n, length: this.springLength * 1.3 });
    });

    // 6. 어원 (Etymology) 노드
    if (info.etymology) {
      const etym = info.etymology;
      const n = {
        id: 'etym_' + wordStr,
        word: wordStr,
        label: etym.length > 22 ? etym.slice(0, 20) + '...' : etym,
        subLabel: '어원/뿌리',
        type: 'etymology',
        x: cx - 120,
        y: cy + 130,
        vx: 0,
        vy: 0,
        radius: 26
      };
      this.nodes.push(n);
      this.edges.push({ source: centerNode, target: n, length: this.springLength * 1.2 });
    }
  }

  /**
   * 캔버스 이벤트 바인딩 (드래그, 줌, 노드 선택)
   */
  bindCanvasEvents() {
    if (!this.canvas) return;

    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const clientY = e.clientY || (e.touches && e.touches[0] ? e.touches[0].clientY : 0);
      return {
        x: (clientX - rect.left - this.panX) / this.zoom,
        y: (clientY - rect.top - this.panY) / this.zoom,
        rawX: clientX,
        rawY: clientY
      };
    };

    const findNodeAt = (pos) => {
      for (let i = this.nodes.length - 1; i >= 0; i--) {
        const n = this.nodes[i];
        const dx = n.x - pos.x;
        const dy = n.y - pos.y;
        if (dx * dx + dy * dy <= (n.radius + 8) * (n.radius + 8)) {
          return n;
        }
      }
      return null;
    };

    this.canvas.addEventListener('mousedown', (e) => {
      const pos = getPos(e);
      const hit = findNodeAt(pos);
      if (hit) {
        this.draggedNode = hit;
        hit.vx = 0;
        hit.vy = 0;
      } else {
        this.isPanning = true;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
      }
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const pos = getPos(e);
      this.hoveredNode = findNodeAt(pos);

      if (this.draggedNode) {
        this.draggedNode.x = pos.x;
        this.draggedNode.y = pos.y;
        this.draggedNode.vx = 0;
        this.draggedNode.vy = 0;
      } else if (this.isPanning) {
        const dx = e.clientX - this.lastMouseX;
        const dy = e.clientY - this.lastMouseY;
        this.panX += dx;
        this.panY += dy;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
      }

      this.canvas.style.cursor = this.hoveredNode ? 'pointer' : (this.isPanning ? 'grabbing' : 'grab');
    });

    window.addEventListener('mouseup', () => {
      this.draggedNode = null;
      this.isPanning = false;
    });

    // 노드 클릭 시 새로운 중심어로 전환 & 확장 탐색
    this.canvas.addEventListener('click', (e) => {
      const pos = getPos(e);
      const hit = findNodeAt(pos);
      if (hit && !hit.isCenter && hit.word) {
        const cleanWord = hit.word.replace(/[^a-zA-Z]/g, '').toLowerCase();
        if (cleanWord && cleanWord.length > 1) {
          if (window.tts) window.tts.speak(cleanWord);
          this.currentWord = cleanWord;
          this.buildGraphForWord(cleanWord);
          this.recenterGraph();
        }
      }
    });

    // 마우스 휠 줌
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
      this.adjustZoom(zoomFactor - 1);
    }, { passive: false });
  }

  adjustZoom(delta) {
    this.zoom = Math.max(0.4, Math.min(2.5, this.zoom + delta));
  }

  resetZoom() {
    this.zoom = 1.0;
    this.panX = 0;
    this.panY = 0;
  }

  /**
   * 스프링 물리 시뮬레이션 루프
   */
  startSimulation() {
    const step = () => {
      this.updatePhysics();
      this.draw();
      this.animId = requestAnimationFrame(step);
    };
    if (this.animId) cancelAnimationFrame(this.animId);
    this.animId = requestAnimationFrame(step);
  }

  updatePhysics() {
    const nodes = this.nodes;
    const edges = this.edges;
    if (nodes.length === 0) return;

    const width = this.canvas ? this.canvas.width : 800;
    const height = this.canvas ? this.canvas.height : 600;
    const cx = width / 2;
    const cy = height / 2;

    // 1. 노드 간 반발력 (Coulomb Repulsion)
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const distSq = dx * dx + dy * dy + 1;
        const dist = Math.sqrt(distSq);

        if (dist < 400) {
          const force = this.repulsionK / distSq;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;

          if (a !== this.draggedNode) {
            a.vx -= fx;
            a.vy -= fy;
          }
          if (b !== this.draggedNode) {
            b.vx += fx;
            b.vy += fy;
          }
        }
      }
    }

    // 2. 엣지 스프링 복원력 (Hooke's Law)
    for (const e of edges) {
      const src = e.source;
      const tgt = e.target;
      const dx = tgt.x - src.x;
      const dy = tgt.y - src.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 0.1;
      const displacement = dist - e.length;
      const force = displacement * this.springK;

      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;

      if (src !== this.draggedNode) {
        src.vx += fx;
        src.vy += fy;
      }
      if (tgt !== this.draggedNode) {
        tgt.vx -= fx;
        tgt.vy -= fy;
      }
    }

    // 3. 중심 인력 및 속도 업데이트
    for (const n of nodes) {
      if (n === this.draggedNode) continue;

      // 중심부 약한 중력
      const cdx = cx - n.x;
      const cdy = cy - n.y;
      n.vx += cdx * 0.003;
      n.vy += cdy * 0.003;

      // 감속 마찰
      n.vx *= this.damping;
      n.vy *= this.damping;

      n.x += n.vx;
      n.y += n.vy;
    }
  }

  /**
   * Canvas 렌더링
   */
  draw() {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;

    // 만약 캔버스 치수가 비정상적이면 즉시 자동 복원
    if (width < 100 || height < 100) {
      this.resizeCanvas();
    }

    ctx.clearRect(0, 0, width, height);

    ctx.save();
    ctx.translate(this.panX, this.panY);
    ctx.scale(this.zoom, this.zoom);

    // 1. 엣지 연결선 렌더링
    for (const e of this.edges) {
      ctx.beginPath();
      ctx.moveTo(e.source.x, e.source.y);
      ctx.lineTo(e.target.x, e.target.y);
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)';
      ctx.lineWidth = 2.0;
      ctx.stroke();

      // 스프링 선 중간 점선 효과
      ctx.beginPath();
      ctx.moveTo(e.source.x, e.source.y);
      ctx.lineTo(e.target.x, e.target.y);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 2. 노드 렌더링
    for (const n of this.nodes) {
      const colors = this.typeColors[n.type] || this.typeColors.synonym;
      const isHovered = (this.hoveredNode === n);

      ctx.save();

      // 글로우 발광 효과
      if (n.isCenter || isHovered) {
        ctx.shadowColor = colors.stroke;
        ctx.shadowBlur = n.isCenter ? 26 : 18;
      }

      // 노드 원형 배경
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
      ctx.fillStyle = colors.fill;
      ctx.fill();

      // 테두리
      ctx.lineWidth = isHovered ? 3.5 : (n.isCenter ? 3.0 : 2.0);
      ctx.strokeStyle = isHovered ? '#ffffff' : colors.stroke;
      ctx.stroke();

      ctx.restore();

      // 3. 노드 텍스트 렌더링
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      if (n.isCenter) {
        // 중심 표제어 텍스트
        ctx.font = 'bold 14px "Merriweather", "Noto Serif KR", serif';
        ctx.fillStyle = '#0f172a';
        ctx.fillText(n.label, n.x, n.y - 4);

        ctx.font = 'bold 10px sans-serif';
        ctx.fillStyle = '#451a03';
        const sub = n.subLabel && n.subLabel.length > 8 ? n.subLabel.slice(0, 7) + '..' : (n.subLabel || '');
        ctx.fillText(sub, n.x, n.y + 11);
      } else {
        // 궤도 노드 텍스트
        ctx.font = 'bold 11px sans-serif';
        ctx.fillStyle = colors.text;
        ctx.fillText(n.label, n.x, n.y - (n.subLabel ? 3 : 0));

        if (n.subLabel) {
          ctx.font = '9px sans-serif';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.78)';
          ctx.fillText(n.subLabel, n.x, n.y + 10);
        }
      }

      ctx.restore();
    }

    ctx.restore();
  }
}

// 전역 싱글톤 인스턴스 등록
window.lexicalMindmap = new LexicalMindmap();
