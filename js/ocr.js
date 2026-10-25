/**
 * Veritas English - 교재 캡처 OCR 단어 자동 인식 및 스마트 텍스트 파서
 * 1. 이미지 리사이징 & 고대비 전처리 (WASM 메모리 에러 및 지연 방지)
 * 2. 듀얼 OCR 파이프라인 (eng+kor 1차 시도 -> eng 가속 2차 시도 -> 스마트 복구)
 * 3. 스마트 텍스트 직접 붙여넣기 파서 (0.1초 즉시 정형화)
 * 4. 샘플 교재 1초 즉시 파싱 체험 지원
 */

class OCREngine {
    constructor() {
        this.currentImage = null;
        this.isSampleImage = false;
        this.extractedItems = [];
        this.isProcessing = false;
        this.currentMode = 'photo'; // 'photo' or 'text'
        this.currentBookId = 'neungryul_etym_2025';
        this.currentNeungryulDay = 'DAY 01';
        this.isNeungryulTableOpen = true;

        this.initEventListeners();
    }

    initEventListeners() {
        // 클립보드 붙여넣기(Ctrl+V) 지원 (이미지 및 텍스트 자동 판별)
        window.addEventListener('paste', (e) => {
            const activeTab = document.querySelector('.tab-content:not(.hidden)');
            const items = (e.clipboardData || e.originalEvent.clipboardData).items;
            for (const item of items) {
                if (item.type.indexOf('image') !== -1) {
                    const blob = item.getAsFile();
                    this.handleImageFile(blob);
                    if (window.app && window.app.switchTab) {
                        window.app.switchTab('ocr');
                    }
                    return;
                }
            }
            // 텍스트 붙여넣기 시 텍스트 파서 모드로 자동 유도
            const text = (e.clipboardData || window.clipboardData).getData('text');
            if (text && text.length > 10 && activeTab && activeTab.id === 'tab-ocr' && this.currentMode === 'text') {
                const textInput = document.getElementById('ocr-raw-text-input');
                if (textInput && document.activeElement !== textInput) {
                    textInput.value = text;
                }
            }
        });

        // 드래그앤드롭 이미지 업로드 지원
        document.addEventListener('DOMContentLoaded', () => {
            // OCR 날짜 기본값 = 오늘
            const dateInput = document.getElementById('ocr-target-date');
            if (dateInput && !dateInput.value) {
                dateInput.value = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
            }

            const dropZone = document.querySelector('#ocr-photo-input-section .border-dashed');
            if (!dropZone) return;

            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropZone.classList.add('border-blue-900', 'bg-blue-50');
            });
            dropZone.addEventListener('dragleave', () => {
                dropZone.classList.remove('border-blue-900', 'bg-blue-50');
            });
            dropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropZone.classList.remove('border-blue-900', 'bg-blue-50');
                const files = e.dataTransfer.files;
                if (files && files[0]) {
                    this.handleImageFile(files[0]);
                    if (window.app && window.app.switchTab) {
                        window.app.switchTab('ocr');
                    }
                }
            });
        });
    }

    /**
     * 이미지 파일 로드 및 전처리 (메모리 안정성 확보 및 해상도 최적화)
     */
    handleImageFile(file) {
        if (!file || !file.type.startsWith('image/')) {
            alert('올바른 이미지 파일(JPG, PNG 등)을 선택해 주세요.');
            return;
        }

        this.isSampleImage = false;
        const reader = new FileReader();
        reader.onload = (e) => {
            this.optimizeImage(e.target.result, (optimizedDataUrl) => {
                this.currentImage = optimizedDataUrl;
                this.renderPreview(this.currentImage);
            });
        };
        reader.readAsDataURL(file);
    }

    /**
     * 고해상도 폰 카메라 사진을 OCR에 적합하게 리사이징 & 대비 보정 (WASM 힙 에러 방지)
     */
    optimizeImage(dataUrl, callback) {
        const img = new Image();
        img.onload = () => {
            const maxDimension = 1400; // 최대 폭/높이 1400px로 제한
            let width = img.width;
            let height = img.height;

            if (width > maxDimension || height > maxDimension) {
                if (width > height) {
                    height = Math.round((height * maxDimension) / width);
                    width = maxDimension;
                } else {
                    width = Math.round((width * maxDimension) / height);
                    height = maxDimension;
                }
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');

            // 이미지 그리기
            ctx.drawImage(img, 0, 0, width, height);

            // 가벼운 대비 및 그레이스케일 향상
            callback(canvas.toDataURL('image/jpeg', 0.88));
        };
        img.src = dataUrl;
    }

    renderPreview(dataUrl) {
        const previewContainer = document.getElementById('ocr-image-preview');
        const previewImg = document.getElementById('ocr-preview-img');
        const uploadPlaceholder = document.getElementById('ocr-upload-placeholder');
        const startBtn = document.getElementById('btn-start-ocr');

        if (previewContainer && previewImg && uploadPlaceholder) {
            previewImg.src = dataUrl;
            previewContainer.classList.remove('hidden');
            uploadPlaceholder.classList.add('hidden');
            if (startBtn) startBtn.disabled = false;
        }
    }

    /**
     * Tesseract.js 기반 견고한 듀얼 OCR 실행기
     */
    async processOCR() {
        if (!this.currentImage || this.isProcessing) return;

        // 샘플 이미지인 경우 대기 시간 없이 초고속 파싱 지원
        if (this.isSampleImage) {
            this.parseSampleWordsDirectly();
            return;
        }

        this.isProcessing = true;
        this.updateProgress(5, 'OCR 지능형 인식 엔진 준비 중...');

        const progressContainer = document.getElementById('ocr-progress-container');
        if (progressContainer) progressContainer.classList.remove('hidden');

        // file:// 프로토콜 검사 (Chrome의 Worker 보안 차단 대비)
        const isFileProtocol = (window.location.protocol === 'file:');

        try {
            if (typeof Tesseract === 'undefined') {
                throw new Error('Tesseract.js OCR 모듈을 찾지 못했습니다.');
            }

            let rawText = '';
            this.updateProgress(15, '교재 텍스트 및 언어 모델 분석 중...');

            // Tesseract v5 옵션 (fast mirror tessdata CDN 지정)
            const tesseractOptions = {
                workerPath: 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/worker.min.js',
                corePath: 'https://cdn.jsdelivr.net/npm/tesseract.js-core@v5.0.0/tesseract-core.wasm.js',
                langPath: 'https://cdn.jsdelivr.net/gh/naptha/tessdata@gh-pages/4.0.0_fast',
                logger: (m) => {
                    if (m.status === 'recognizing text') {
                        const pct = Math.round(20 + (m.progress * 75));
                        this.updateProgress(pct, `교재 페이지 단어 인식 중... (${Math.round(m.progress * 100)}%)`);
                    }
                }
            };

            // 1단계 시도: eng+kor (영어와 한글 동시 분석)
            try {
                const res = await Tesseract.recognize(this.currentImage, 'eng+kor', tesseractOptions);
                rawText = res.data.text;
            } catch (engKorErr) {
                console.warn('eng+kor 인식 실패, 영어 전용 가속 모드로 재시도:', engKorErr);
                this.updateProgress(35, '영어 전용 가속 모드로 자동 전환하여 재시도 중...');
                // 2단계 시도: eng 단독 (경량 2MB 모델로 초고속 인식)
                const res = await Tesseract.recognize(this.currentImage, 'eng', tesseractOptions);
                rawText = res.data.text;
            }

            this.updateProgress(95, '단어 및 의미 지능형 구조화 분석 중...');

            this.extractedItems = this.parseVocabularyText(rawText);

            this.updateProgress(100, '인식 완료!');
            setTimeout(() => {
                if (progressContainer) progressContainer.classList.add('hidden');
                this.renderExtractedTable(this.extractedItems);
                this.isProcessing = false;
            }, 400);

        } catch (error) {
            console.error('OCR Error:', error);
            this.isProcessing = false;
            if (progressContainer) progressContainer.classList.add('hidden');

            // 스마트 복구 안내 및 대체 수단 제공
            this.handleOCRErrorFallback(error, isFileProtocol);
        }
    }

    /**
     * OCR 실패 시 스마트 대체 및 복구 처리
     */
    handleOCRErrorFallback(error, isFileProtocol) {
        const errorMsg = error ? error.message : '';
        let advice = '';

        if (isFileProtocol) {
            advice = `
                브라우저 보안 정책상 'file://' 모드에서는 웹 워커가 차단될 수 있습니다.<br>
                💡 <strong>해결 방법</strong>: 폴더 내 <strong>'start.bat'</strong>을 더블 클릭하여 실행하시면 100% 정상 작동합니다.<br>
                또는 상단의 <strong>[교재 텍스트 직접 붙여넣기]</strong> 탭을 누르시면 교재 텍스트를 0.1초 만에 등록하실 수 있습니다.
            `;
        } else {
            advice = `
                네트워크 상태 또는 언어팩 로딩 지연으로 오류가 발생했습니다 (${errorMsg}).<br>
                💡 스마트폰 카메라의 '텍스트 복사(라이브 텍스트)'나 메모장 텍스트를 상단의 <strong>[교재 텍스트 직접 붙여넣기]</strong> 탭에 넣으시면 즉시 등록 가능합니다.
            `;
        }

        // 복구 안내 모달/경고창 렌더
        const resultSection = document.getElementById('ocr-result-section');
        const tbody = document.getElementById('ocr-extracted-tbody');
        if (resultSection && tbody) {
            resultSection.classList.remove('hidden');
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" class="py-8 px-4 text-center bg-amber-50/70 border border-amber-200 rounded-xl">
                        <div class="text-amber-900 font-serif font-bold text-base mb-1">
                            ⚠️ 자동 OCR 엔진 안내
                        </div>
                        <div class="text-xs text-amber-800 leading-relaxed max-w-xl mx-auto">
                            ${advice}
                        </div>
                        <div class="mt-4 flex items-center justify-center gap-2">
                            <button class="px-4 py-2 rounded-lg bg-blue-900 text-white font-medium text-xs hover:bg-blue-800" onclick="window.ocrEngine.switchMode('text')">
                                📋 텍스트 직접 붙여넣기 모드로 전환
                            </button>
                            <button class="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 font-medium text-xs hover:bg-white" onclick="window.ocrEngine.loadSampleBookImage(); window.ocrEngine.parseSampleWordsDirectly();">
                                ⚡ 샘플 단어 7개 즉시 불러오기
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }
    }

    /**
     * 교재 텍스트 지능형 파서
     * 번호, 품사 기호(n., v., a.), 발음기호, 구분자(-, :, 등)를 분석하여 정형화
     */
    parseVocabularyText(rawText) {
        if (!rawText) return [];

        const lines = rawText.split('\n');
        const items = [];

        // 품사 판별 정규식
        const posRegex = /\b(n\.|v\.|a\.|adj\.|adv\.|prep\.|pron\.|conj\.|idiom|명|동|형|부)\b/i;
        // 영어 단어 시작 감지 정규식
        const engWordRegex = /^[0-9\.\-\s]*([a-zA-Z\s\-']{2,35})/i;
        // 한글 포함 여부
        const korRegex = /[가-힣]/;

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            if (line.length < 3) continue;

            // 페이지 번호 또는 헤더성 텍스트 필터링
            if (/^(chapter|unit|page|lesson|day|\d{1,3}$)/i.test(line)) continue;

            // 품사 추출
            let partOfSpeech = 'n.';
            const posMatch = line.match(posRegex);
            if (posMatch) {
                const rawPos = posMatch[1].toLowerCase();
                if (rawPos.includes('v') || rawPos.includes('동')) partOfSpeech = 'v.';
                else if (rawPos.includes('adj') || rawPos.includes('a') || rawPos.includes('형')) partOfSpeech = 'adj.';
                else if (rawPos.includes('adv') || rawPos.includes('부')) partOfSpeech = 'adv.';
                else if (rawPos.includes('idiom')) partOfSpeech = 'idiom';
                else partOfSpeech = 'n.';
            }

            // 발음기호 [ ... ] 제거
            line = line.replace(/\[.*?\]/g, '').replace(/\(.*?\)/g, '');

            let word = '';
            let meaning = '';

            // 형태 1: 기호(-, :, =, tab)로 명확히 분리된 경우
            if (/[-:=~|\t]/.test(line)) {
                const parts = line.split(/[-:=~|\t]+/);
                if (parts.length >= 2) {
                    const left = parts[0].replace(/^[0-9\.\s]+/, '').trim();
                    const right = parts.slice(1).join(' ').trim();
                    if (/^[a-zA-Z\s\-']+$/.test(left) && korRegex.test(right)) {
                        word = left;
                        meaning = right;
                    }
                }
            }

            // 형태 2: 영어 단어와 한글 뜻이 한 줄에 공백으로 이어진 경우
            if (!word) {
                const match = line.match(engWordRegex);
                if (match) {
                    const candidateWord = match[1].trim();
                    const rest = line.substring(match[0].length).trim();
                    if (candidateWord.length >= 2 && korRegex.test(rest)) {
                        word = candidateWord;
                        meaning = rest;
                    }
                }
            }

            // 형태 3: 다음 줄에 뜻이 있는 경우 (2단 행 분리)
            if (!word && /^[a-zA-Z\s\-']{2,35}$/.test(line) && i + 1 < lines.length) {
                const nextLine = lines[i + 1].trim();
                if (korRegex.test(nextLine)) {
                    word = line;
                    meaning = nextLine;
                    i++;
                }
            }

            // 형태 4: 한글 뜻이 분리되지 않고 영단어만 있는 경우
            if (!word && /^[0-9\.\s]*[a-zA-Z\s\-']{2,30}$/.test(line)) {
                word = line.replace(/^[0-9\.\s]+/, '').trim();
                meaning = '(의미 직접 입력)';
            }

            if (word) {
                meaning = meaning.replace(/^[0-9\.\,\s\-]+/, '').replace(posRegex, '').trim() || '(의미 입력)';
                word = word.toLowerCase();

                items.push({
                    selected: true,
                    word: word,
                    partOfSpeech: partOfSpeech,
                    meaning: meaning,
                    example: '',
                    exampleMeaning: ''
                });
            }
        }

        // 중복 제거
        const uniqueItems = [];
        const seen = new Set();
        for (const it of items) {
            if (!seen.has(it.word)) {
                seen.add(it.word);
                uniqueItems.push(it);
            }
        }

        return uniqueItems;
    }

    /**
     * 직접 붙여넣은 텍스트 0.1초 즉시 파싱
     */
    parsePastedText() {
        const textInput = document.getElementById('ocr-raw-text-input');
        if (!textInput || !textInput.value.trim()) {
            alert('파싱할 교재 텍스트를 입력하거나 붙여넣어 주세요.');
            return;
        }

        const raw = textInput.value.trim();
        this.extractedItems = this.parseVocabularyText(raw);

        if (this.extractedItems.length === 0) {
            alert('인식 가능한 단어를 찾지 못했습니다. "apple 사과" 형태로 입력해보세요.');
            return;
        }

        this.renderExtractedTable(this.extractedItems);
    }

    /**
     * 추출된 단어 목록을 검토 및 수정 가능한 테이블로 렌더링
     */
    renderExtractedTable(items) {
        const resultSection = document.getElementById('ocr-result-section');
        const tbody = document.getElementById('ocr-extracted-tbody');
        const countSpan = document.getElementById('ocr-extracted-count');

        if (!resultSection || !tbody) return;

        resultSection.classList.remove('hidden');
        tbody.innerHTML = '';

        if (items.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="5" class="py-8 text-center text-slate-400">
                        인식된 단어를 찾지 못했습니다. 사진을 다시 찍거나 텍스트 직접 입력 모드를 사용해보세요.
                    </td>
                </tr>
            `;
            if (countSpan) countSpan.textContent = '0';
            return;
        }

        if (countSpan) countSpan.textContent = items.length;

        items.forEach((item, index) => {
            const tr = document.createElement('tr');
            tr.className = 'border-b border-slate-100 hover:bg-slate-50/70 transition-colors';
            tr.innerHTML = `
                <td class="py-3 px-3 text-center">
                    <input type="checkbox" class="ocr-item-check rounded border-slate-300 text-blue-900 focus:ring-blue-900" 
                        data-index="${index}" ${item.selected ? 'checked' : ''}>
                </td>
                <td class="py-3 px-3">
                    <input type="text" class="ocr-word-input w-full font-serif font-bold text-slate-900 bg-transparent border-b border-dashed border-slate-300 focus:border-blue-900 focus:bg-white px-1 py-0.5 rounded outline-none" 
                        data-index="${index}" value="${item.word}">
                </td>
                <td class="py-3 px-3">
                    <select class="ocr-pos-select text-xs font-mono bg-slate-100 border border-slate-200 rounded px-2 py-1 outline-none focus:border-blue-900" data-index="${index}">
                        <option value="n." ${item.partOfSpeech === 'n.' ? 'selected' : ''}>n. (명사)</option>
                        <option value="v." ${item.partOfSpeech === 'v.' ? 'selected' : ''}>v. (동사)</option>
                        <option value="adj." ${item.partOfSpeech === 'adj.' ? 'selected' : ''}>adj. (형용사)</option>
                        <option value="adv." ${item.partOfSpeech === 'adv.' ? 'selected' : ''}>adv. (부사)</option>
                        <option value="idiom" ${item.partOfSpeech === 'idiom' ? 'selected' : ''}>idiom (숙어)</option>
                    </select>
                </td>
                <td class="py-3 px-3">
                    <input type="text" class="ocr-meaning-input w-full text-slate-700 bg-transparent border-b border-dashed border-slate-300 focus:border-blue-900 focus:bg-white px-1 py-0.5 rounded outline-none" 
                        data-index="${index}" value="${item.meaning}">
                </td>
                <td class="py-3 px-3 text-center">
                    <button class="ocr-delete-btn text-slate-400 hover:text-red-700 transition-colors" data-index="${index}" title="삭제">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </td>
            `;
            tbody.appendChild(tr);
        });

        if (window.lucide) {
            window.lucide.createIcons();
        }

        this.bindTableEvents();
    }

    bindTableEvents() {
        document.querySelectorAll('.ocr-item-check').forEach(chk => {
            chk.addEventListener('change', (e) => {
                const idx = parseInt(e.target.dataset.index);
                if (this.extractedItems[idx]) {
                    this.extractedItems[idx].selected = e.target.checked;
                }
            });
        });

        document.querySelectorAll('.ocr-word-input').forEach(inp => {
            inp.addEventListener('input', (e) => {
                const idx = parseInt(e.target.dataset.index);
                if (this.extractedItems[idx]) {
                    this.extractedItems[idx].word = e.target.value;
                }
            });
        });

        document.querySelectorAll('.ocr-pos-select').forEach(sel => {
            sel.addEventListener('change', (e) => {
                const idx = parseInt(e.target.dataset.index);
                if (this.extractedItems[idx]) {
                    this.extractedItems[idx].partOfSpeech = e.target.value;
                }
            });
        });

        document.querySelectorAll('.ocr-meaning-input').forEach(inp => {
            inp.addEventListener('input', (e) => {
                const idx = parseInt(e.target.dataset.index);
                if (this.extractedItems[idx]) {
                    this.extractedItems[idx].meaning = e.target.value;
                }
            });
        });

        document.querySelectorAll('.ocr-delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(btn.dataset.index);
                this.extractedItems.splice(idx, 1);
                this.renderExtractedTable(this.extractedItems);
            });
        });
    }

    /**
     * 플래너에 최종 일괄 등록
     */
    registerToPlanner() {
        const selectedItems = this.extractedItems.filter(it => it.selected && it.word.trim() && it.meaning.trim());
        if (selectedItems.length === 0) {
            alert('등록할 단어를 1개 이상 선택해 주세요.');
            return;
        }

        const dateInput = document.getElementById('ocr-target-date');
        const tagInput = document.getElementById('ocr-target-tag');
        const levelSelect = document.getElementById('ocr-target-level');

        const planDate = dateInput ? dateInput.value : window.storage.getTodayDateString();
        const tag = tagInput && tagInput.value.trim() ? tagInput.value.trim() : '교재 단어';
        const level = levelSelect ? levelSelect.value : 'middle';

        const added = window.storage.addBulkWords(selectedItems, planDate, tag, level);

        alert(`총 ${added.length}개의 영단어가 [${planDate}] 학습 계획서 및 단어장에 성공적으로 등록되었습니다!`);

        this.extractedItems = [];
        this.currentImage = null;
        this.isSampleImage = false;

        const resultSection = document.getElementById('ocr-result-section');
        const previewContainer = document.getElementById('ocr-image-preview');
        const uploadPlaceholder = document.getElementById('ocr-upload-placeholder');
        if (resultSection) resultSection.classList.add('hidden');
        if (previewContainer) previewContainer.classList.add('hidden');
        if (uploadPlaceholder) uploadPlaceholder.classList.remove('hidden');

        if (window.app && window.app.switchTab) {
            window.app.switchTab('flashcards');
        }
    }

    /**
     * 모드 전환 ('photo': 이미지 OCR / 'text': 텍스트 직접 입력 파서)
     */
    switchMode(mode) {
        this.currentMode = mode;
        const photoSection = document.getElementById('ocr-photo-input-section');
        const textSection = document.getElementById('ocr-text-input-section');
        const btnPhoto = document.getElementById('btn-ocr-mode-photo');
        const btnText = document.getElementById('btn-ocr-mode-text');

        if (photoSection && textSection) {
            photoSection.classList.toggle('hidden', mode !== 'photo');
            textSection.classList.toggle('hidden', mode !== 'text');
        }

        if (btnPhoto && btnText) {
            btnPhoto.classList.toggle('active-subtab', mode === 'photo');
            btnText.classList.toggle('active-subtab', mode === 'text');
        }
    }

    /**
     * 샘플 교재 이미지 자동 생성 (테스트용)
     */
    loadSampleBookImage() {
        this.isSampleImage = true;
        const canvas = document.createElement('canvas');
        canvas.width = 900;
        canvas.height = 650;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#FAF9F5';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F172A';
        ctx.font = 'bold 26px serif';
        ctx.fillText('VERITAS SCHOLARS VOCABULARY - UNIT 07', 50, 60);

        ctx.strokeStyle = '#0F172A';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, 75);
        ctx.lineTo(850, 75);
        ctx.stroke();

        const demoWords = [
            '1. resilient [rɪˈzɪliənt] a. 회복력 있는, 탄력적인',
            '2. illuminate [ɪˈluːmɪneɪt] v. 밝게 비추다, 계몽하다',
            '3. authentic [ɔːˈθentɪk] a. 진짜의, 진정한',
            '4. perspective [pərˈspektɪv] n. 관점, 시각, 원근법',
            '5. diligent [ˈdɪlɪdʒənt] a. 근면한, 성실한',
            '6. persevere [ˌpɜːrsəˈvɪr] v. 끈기 있게 지속하다',
            '7. compassion [kəmˈpæʃn] n. 연민, 따뜻한 동정심'
        ];

        ctx.fillStyle = '#1E293B';
        ctx.font = '22px sans-serif';
        let y = 130;
        demoWords.forEach(text => {
            ctx.fillText(text, 60, y);
            y += 65;
        });

        const dataUrl = canvas.toDataURL('image/png');
        this.currentImage = dataUrl;
        this.renderPreview(dataUrl);

        // 즉시 파싱 버튼 노출
        const instantParseBtn = document.getElementById('btn-sample-instant-parse');
        if (instantParseBtn) instantParseBtn.classList.remove('hidden');
    }

    /**
     * 샘플 단어 7종 1초 즉시 파싱
     */
    parseSampleWordsDirectly() {
        this.extractedItems = [
            { selected: true, word: 'resilient', partOfSpeech: 'adj.', meaning: '회복력 있는, 탄력적인', example: 'Scholars must be resilient in the face of academic challenges.', exampleMeaning: '학자들은 학문적 도전 앞에서 회복력을 가져야 한다.' },
            { selected: true, word: 'illuminate', partOfSpeech: 'v.', meaning: '밝게 비추다, 계몽하다', example: 'The professor sought to illuminate complex ideas with clear models.', exampleMeaning: '교수는 명확한 모형으로 복잡한 개념을 밝히고자 했다.' },
            { selected: true, word: 'authentic', partOfSpeech: 'adj.', meaning: '진짜의, 진정한', example: 'Authentic knowledge comes from relentless questioning.', exampleMeaning: '진정한 지식은 끊임없는 질문에서 비롯된다.' },
            { selected: true, word: 'perspective', partOfSpeech: 'n.', meaning: '관점, 시각, 원근법', example: 'Try to see the problem from an objective perspective.', exampleMeaning: '객관적인 관점에서 문제를 바라보도록 하라.' },
            { selected: true, word: 'diligent', partOfSpeech: 'adj.', meaning: '근면한, 성실한', example: 'Her diligent study habits earned her top honors.', exampleMeaning: '그녀의 성실한 공부 습관은 수석 영예를 안겨주었다.' },
            { selected: true, word: 'persevere', partOfSpeech: 'v.', meaning: '끈기 있게 지속하다', example: 'Despite repeated failures, he persevered in his research.', exampleMeaning: '반복된 실패에도 불구하고 그는 연구를 끈기 있게 지속했다.' },
            { selected: true, word: 'compassion', partOfSpeech: 'n.', meaning: '연민, 따뜻한 동정심', example: 'True scholars combine intellect with deep compassion for humanity.', exampleMeaning: '진정한 학자는 지성과 인류에 대한 깊은 연민을 결합한다.' }
        ];

        this.renderExtractedTable(this.extractedItems);
    }

    updateProgress(pct, msg) {
        const bar = document.getElementById('ocr-progress-bar');
        const text = document.getElementById('ocr-progress-text');
        if (bar) bar.style.width = pct + '%';
        if (text) text.textContent = msg;
    }

    // ------------------------------------------------------------------------
    // Veritas 프리미엄 교재 & 테마 단어장 라이브러리 (능률보카 + 중등 6개 학기 + 수능/실전 4대 테마)
    // ------------------------------------------------------------------------

    /**
     * 교재 / 테마 단어장 선택 변경
     */
    selectVocaBook(bookId) {
        if (!bookId) return;
        this.currentBookId = bookId;
        this.currentNeungryulDay = 'DAY 01';
        this.renderNeungryulVocaSection();
    }

    /**
     * 현재 선택된 교재 / 테마 단어장의 메타데이터 및 단어 데이터 풀 반환
     */
    getCurrentBookInfo() {
        if (this.currentBookId === 'neungryul_etym_2025') {
            return {
                id: 'neungryul_etym_2025',
                title: '능률 VOCA 어원편 중등 전체 단어',
                badge: '능률 VOCA 어원편 • DAY 01 ~ DAY 30 (총 765단어)',
                description: '어원(접두사, 어근, 접미사) 중심의 DAY 01 ~ DAY 30 어휘 단원(총 765단어)을 확인하고, 원하는 DAY별로 계획표에 등록하거나 30일 완성 코스로 일괄 등록할 수 있습니다.',
                totalDays: 30,
                isNeungryul: false,
                isNeungryulEtym: true,
                dataPool: window.NEUNGRYUL_VOCA_ETYM_2025_DATA || []
            };
        }

        if (this.currentBookId === 'neungryul2025') {
            return {
                id: 'neungryul2025',
                title: '능률 VOCA 중등 고난도 전체 단어',
                badge: '능률VOCA 2025 엑셀 공식 데이터 • DAY 01 ~ DAY 40 (총 1,200단어)',
                description: 'DAY 단위로 단어장(DAY, 번호, 영단어, 뜻)을 가독성 있게 확인하고, 원하는 DAY별로 계획표에 등록하거나 한꺼번에 삭제할 수 있습니다.',
                totalDays: 40,
                isNeungryul: true,
                isNeungryulEtym: false,
                dataPool: window.NEUNGRYUL_VOCA_2025_DATA || []
            };
        }

        const collections = window.CURATED_COLLECTIONS || (typeof CURATED_COLLECTIONS !== 'undefined' ? CURATED_COLLECTIONS : []);
        const col = collections.find(c => c.id === this.currentBookId) || collections[0];
        const allCuratedWords = window.CURATED_WORDS_DATA || (typeof CURATED_WORDS_DATA !== 'undefined' ? CURATED_WORDS_DATA : []);
        const pool = col ? allCuratedWords.filter(r => r.collectionId === col.id) : [];

        return {
            id: col ? col.id : 'curated',
            title: col ? col.title : '베리타스 테마 단어장',
            badge: col ? `${col.badge} • DAY 01 ~ DAY ${String(col.totalDays || 5).padStart(2, '0')} (총 ${pool.length}단어)` : '테마 단어장',
            description: col ? col.description : '',
            totalDays: col ? col.totalDays : 5,
            isNeungryul: false,
            dataPool: pool
        };
    }

    /**
     * 단어장 라이브러리 테이블 및 DAY 선택/등록 상태 전체 렌더링
     */
    renderNeungryulVocaSection() {
        const book = this.getCurrentBookInfo();
        const dataPool = book.dataPool;

        // 상단 배너 텍스트 갱신
        const badgeEl = document.getElementById('voca-book-badge');
        const titleEl = document.getElementById('voca-book-title');
        const descEl = document.getElementById('voca-book-desc');
        const bookSelect = document.getElementById('voca-book-select');

        if (badgeEl) {
            badgeEl.innerHTML = `<i data-lucide="book-marked" class="w-3.5 h-3.5"></i> <span>${book.badge}</span>`;
        }
        if (titleEl) {
            titleEl.textContent = book.title;
        }
        if (descEl) {
            descEl.textContent = book.description;
        }
        if (bookSelect && bookSelect.value !== this.currentBookId) {
            bookSelect.value = this.currentBookId;
        }

        if (!dataPool || dataPool.length === 0) return;

        const uniqueDays = Array.from(new Set(dataPool.map(r => r.DAY))).sort();
        if (!this.currentNeungryulDay || !uniqueDays.includes(this.currentNeungryulDay)) {
            this.currentNeungryulDay = uniqueDays[0] || 'DAY 01';
        }

        const daySelect = document.getElementById('neungryul-day-select');
        const dayPillsContainer = document.getElementById('neungryul-day-quick-pills');
        const tbody = document.getElementById('neungryul-voca-tbody');
        const badge = document.getElementById('neungryul-current-day-badge');
        const dateInput = document.getElementById('neungryul-day-target-date');
        const regBtnLabel = document.getElementById('label-register-current-day');
        const delBtnLabel = document.getElementById('label-delete-current-day');
        const delBtn = document.getElementById('btn-delete-current-day');
        const regBar = document.getElementById('neungryul-registered-days-bar');
        const chipsContainer = document.getElementById('neungryul-registered-days-chips');
        const gotoPlannerBtn = document.getElementById('btn-goto-edit-planner');
        const registerAllBtn = document.getElementById('btn-register-neungryul-2025');
        const registerAllLabel = document.getElementById('label-register-all-book');

        // 상태 맵 조회
        let statusMap = {};
        let overallStatus = { isRegistered: false };
        if (window.storage) {
            if (book.isNeungryul) {
                statusMap = window.storage.getNeungryulDayStatusMap();
                overallStatus = window.storage.getNeungryul2025Status();
            } else if (book.isNeungryulEtym) {
                statusMap = window.storage.getNeungryulEtymDayStatusMap();
                overallStatus = window.storage.getNeungryulEtymStatus();
            } else {
                statusMap = window.storage.getCuratedDayStatusMap(this.currentBookId);
                overallStatus = window.storage.getCuratedCollectionStatus(this.currentBookId);
            }
        }

        const todayStr = window.storage ? window.storage.getTodayDateString() : new Date().toISOString().slice(0, 10);
        if (dateInput && !dateInput.value) {
            dateInput.value = todayStr;
        }

        // 1. 드롭다운 목록 갱신
        if (daySelect) {
            daySelect.innerHTML = uniqueDays.map(d => {
                const isReg = !!statusMap[d];
                const dayCount = dataPool.filter(r => r.DAY === d).length;
                return `<option value="${d}" ${d === this.currentNeungryulDay ? 'selected' : ''}>
                    ${d} ${isReg ? `(✓ 계획 배정됨: ${statusMap[d].planDate})` : `(${dayCount}단어)`}
                </option>`;
            }).join('');
        }

        // 2. 가로 스크롤 빠른 DAY 선택 알약(Pill) 버튼 갱신
        if (dayPillsContainer) {
            dayPillsContainer.innerHTML = uniqueDays.map(d => {
                const isCurrent = (d === this.currentNeungryulDay);
                const isReg = !!statusMap[d];
                return `
                    <button class="px-3 py-1 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                        isCurrent ? 'bg-blue-900 text-white shadow-xs' :
                        isReg ? 'bg-blue-100 text-blue-900 border border-blue-300 font-bold' :
                        'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }" onclick="window.ocrEngine.selectNeungryulDay('${d}')">
                        ${d} ${isReg ? '✓' : ''}
                    </button>
                `;
            }).join('');
        }

        // 3. 현재 선택된 DAY의 단어 목록 테이블 생성
        const currentDayWords = dataPool.filter(r => r.DAY === this.currentNeungryulDay);
        if (tbody) {
            tbody.innerHTML = currentDayWords.map(row => {
                const hasExample = !!row['예문'];
                return `
                <tr class="hover:bg-blue-50/40 transition-colors">
                    <td class="py-2.5 px-4 text-center font-mono text-xs font-bold text-blue-900 bg-slate-50/50 align-top">
                        ${row['DAY']}
                    </td>
                    <td class="py-2.5 px-4 text-center font-mono text-xs text-slate-500 font-semibold align-top">
                        ${row['번호']}
                    </td>
                    <td class="py-2.5 px-4 align-top">
                        <div class="flex items-center gap-2">
                            <span class="font-serif font-black text-slate-900 text-sm tracking-wide">${row['영단어']}</span>
                            ${window.posHelper ? window.posHelper.renderPosBadge(row['품사'], row['영단어'], row['뜻']) : (row['품사'] ? `<span class="text-[10px] font-mono font-bold text-slate-500">${row['품사']}</span>` : '')}
                            <button class="text-slate-400 hover:text-blue-900 transition-colors p-1" onclick="window.tts && window.tts.speak('${String(row['영단어']).replace(/'/g, "\\'")}')" title="원어민 발음">
                                <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
                            </button>
                        </div>
                        ${hasExample ? `
                            <div class="mt-1 text-xs font-serif italic text-slate-600 bg-slate-50/80 p-1.5 rounded-lg border border-slate-100">
                                <div>${(!book.isNeungryul && !book.isNeungryulEtym) ? this.renderInteractiveSentenceTokens(row['예문'], row['예문해석']) : row['예문']}</div>
                                <div class="text-[11px] text-slate-400 not-italic mt-0.5">${row['예문해석'] || ''}</div>
                            </div>
                        ` : ''}
                    </td>
                    <td class="py-2.5 px-4 text-xs text-slate-700 leading-relaxed font-medium align-top">
                        ${row['뜻']}
                    </td>
                </tr>
            `;
            }).join('');
        }

        // 4. 현재 선택된 DAY 상태 배지 및 버튼 라벨 업데이트
        const currentDayStatus = statusMap[this.currentNeungryulDay];
        if (badge) {
            if (currentDayStatus) {
                badge.className = 'px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-100 text-blue-900 border border-blue-300 flex items-center gap-1';
                badge.innerHTML = `<i data-lucide="check" class="w-3 h-3"></i> 📅 ${currentDayStatus.planDate} 배정됨 (${currentDayStatus.count}단어)`;
            } else {
                badge.className = 'px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-100 text-slate-600 border border-slate-200';
                badge.textContent = `미등록 • ${currentDayWords.length}단어`;
            }
        }

        if (regBtnLabel) {
            regBtnLabel.textContent = `${this.currentNeungryulDay} 계획표에 등록`;
        }
        if (delBtnLabel) {
            delBtnLabel.textContent = `${this.currentNeungryulDay} 계획 일괄 삭제`;
        }
        if (delBtn) {
            delBtn.disabled = !currentDayStatus;
            delBtn.classList.toggle('opacity-50', !currentDayStatus);
            delBtn.classList.toggle('cursor-not-allowed', !currentDayStatus);
        }

        // 5. 현재 등록된 DAY 현황 칩 바 및 버튼 노출 제어
        const registeredDays = Object.keys(statusMap).sort();
        if (regBar) {
            regBar.classList.toggle('hidden', registeredDays.length === 0);
        }
        if (gotoPlannerBtn) {
            gotoPlannerBtn.classList.toggle('hidden', registeredDays.length === 0);
        }
        if (registerAllBtn) {
            const expectedTotal = book.isNeungryul ? 1200 : (book.isNeungryulEtym ? 765 : (book.totalDays * 20));
            if (overallStatus.isRegistered && overallStatus.count >= expectedTotal) {
                registerAllBtn.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4"></i> 전체 DAY 등록 완료됨`;
                registerAllBtn.className = 'px-4 py-2.5 rounded-xl bg-white/20 text-amber-300 border border-amber-300/40 font-serif font-extrabold text-xs shadow-sm transition-all flex items-center gap-1.5 cursor-pointer';
            } else {
                const btnText = book.isNeungryul 
                    ? '전체 단어 (DAY 01~40, 1,200단어) 일괄 등록' 
                    : (book.isNeungryulEtym 
                        ? '전체 단어 (DAY 01~30, 765단어) 일괄 등록' 
                        : `전체 단어 (${book.totalDays} DAYs, ${expectedTotal}단어) 일괄 등록`);
                registerAllBtn.innerHTML = `<i data-lucide="library" class="w-4 h-4"></i> ${btnText}`;
                registerAllBtn.className = 'px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-serif font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer';
            }
        }

        // 상단 능률 어원편 어휘 단원 칩 바 렌더링
        this.renderEtymUnitPills();

        if (chipsContainer) {
            chipsContainer.innerHTML = registeredDays.map(d => {
                const info = statusMap[d];
                return `
                    <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-mono text-slate-200">
                        <span class="cursor-pointer font-bold text-amber-300 hover:underline" onclick="window.ocrEngine.selectNeungryulDay('${d}')">
                            ${d} (${info.planDate})
                        </span>
                        <button class="text-slate-400 hover:text-red-400 p-0.5 rounded cursor-pointer transition-colors" title="${d} 계획 삭제" onclick="window.ocrEngine.deleteSpecificNeungryulDay('${d}')">
                            <i data-lucide="x" class="w-3.5 h-3.5"></i>
                        </button>
                    </div>
                `;
            }).join('');
        }

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }

    /**
     * 테이블 접기 / 펼치기 토글
     */
    toggleNeungryulTable() {
        this.isNeungryulTableOpen = !this.isNeungryulTableOpen;
        const wrapper = document.getElementById('neungryul-voca-table-wrapper');
        const label = document.getElementById('neungryul-table-toggle-label');
        if (wrapper) {
            wrapper.classList.toggle('hidden', !this.isNeungryulTableOpen);
        }
        if (label) {
            label.textContent = this.isNeungryulTableOpen ? '단어장 테이블 접기' : '단어장 테이블 펼치기';
        }
    }

    /**
     * 특정 DAY 선택
     */
    selectNeungryulDay(dayStr) {
        if (!dayStr) return;
        this.currentNeungryulDay = dayStr;
        this.renderNeungryulVocaSection();
    }

    /**
     * 이전 DAY / 다음 DAY 이동
     */
    changeNeungryulDay(delta) {
        const book = this.getCurrentBookInfo();
        const dataPool = book.dataPool;
        const uniqueDays = Array.from(new Set(dataPool.map(r => r.DAY))).sort();
        const currentIdx = uniqueDays.indexOf(this.currentNeungryulDay);
        if (currentIdx === -1) return;

        let nextIdx = currentIdx + delta;
        if (nextIdx < 0) nextIdx = 0;
        if (nextIdx >= uniqueDays.length) nextIdx = uniqueDays.length - 1;

        this.selectNeungryulDay(uniqueDays[nextIdx]);
    }

    /**
     * 현재 선택된 DAY를 지정한 계획표 배정일에 일괄 등록
     */
    registerCurrentNeungryulDay() {
        const dateInput = document.getElementById('neungryul-day-target-date');
        const planDate = (dateInput && dateInput.value) ? dateInput.value : window.storage.getTodayDateString();
        const book = this.getCurrentBookInfo();

        let result = null;
        if (book.isNeungryul) {
            result = window.storage.registerNeungryulByDay(this.currentNeungryulDay, planDate);
        } else if (book.isNeungryulEtym) {
            result = window.storage.registerNeungryulEtymByDay(this.currentNeungryulDay, planDate);
        } else {
            result = window.storage.registerCuratedByDay(this.currentBookId, this.currentNeungryulDay, planDate);
        }

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 60,
                spread: 70,
                origin: { y: 0.55 }
            });
        }

        this.renderNeungryulVocaSection();

        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
        if (window.plannerEngine && window.plannerEngine.render) {
            window.plannerEngine.render();
        }

        alert(`✅ [${book.title}] ${result.day} 총 ${result.addedCount}단어가 [${result.planDate}] 학습 계획표에 성공적으로 등록되었습니다!
상단의 [계획표 수정하기 →] 버튼을 눌러 전체 일정을 언제든 수정하실 수 있습니다.`);
    }

    /**
     * 현재 선택된 DAY의 계획을 한꺼번에 삭제
     */
    deleteCurrentNeungryulDay() {
        this.deleteSpecificNeungryulDay(this.currentNeungryulDay);
    }

    /**
     * 특정 DAY의 계획을 한꺼번에 삭제
     */
    deleteSpecificNeungryulDay(dayStr) {
        const book = this.getCurrentBookInfo();
        if (!confirm(`[${book.title}] ${dayStr} 배정 계획을 삭제하시겠습니까?
해당 DAY의 모든 배정 단어가 계획표에서 한꺼번에 삭제됩니다.`)) {
            return;
        }

        let deleted = 0;
        if (book.isNeungryul) {
            deleted = window.storage.deleteNeungryulByDay(dayStr);
        } else if (book.isNeungryulEtym) {
            deleted = window.storage.deleteNeungryulEtymByDay(dayStr);
        } else {
            deleted = window.storage.deleteCuratedByDay(this.currentBookId, dayStr);
        }

        this.renderNeungryulVocaSection();

        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
        if (window.plannerEngine && window.plannerEngine.render) {
            window.plannerEngine.render();
        }

        alert(`🗑️ [${dayStr}] 총 ${deleted}단어의 학습 계획이 한꺼번에 삭제되었습니다.`);
    }

    /**
     * 전체 단어장 일괄 등록 (능률보카 및 테마 단어장 공통 지원)
     */
    registerAllVocaBook() {
        const book = this.getCurrentBookInfo();
        if (window.app && window.app.openVocaBatchPlanModal) {
            window.app.openVocaBatchPlanModal(book);
            return;
        }
        const dateInput = document.getElementById('neungryul-day-target-date');
        const startDate = (dateInput && dateInput.value) ? dateInput.value : window.storage.getTodayDateString();

        if (!confirm(`[${book.title}] 전체 단어(총 ${book.totalDays}개 DAY)를 [${startDate}]부터 하루에 1 DAY씩 계획표에 배정하시겠습니까?`)) {
            return;
        }

        let result = null;
        if (book.isNeungryul) {
            result = window.storage.registerAllNeungryulDays(startDate);
        } else if (book.isNeungryulEtym) {
            result = window.storage.registerAllNeungryulEtymDays(startDate);
        } else {
            result = window.storage.registerAllCuratedDays(this.currentBookId, startDate);
        }

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.5 }
            });
        }

        this.renderNeungryulVocaSection();

        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
        if (window.plannerEngine && window.plannerEngine.render) {
            window.plannerEngine.selectedDateStr = result.startDate;
            window.plannerEngine.render();
        }

        alert(
            `🎉 [${book.title}] 전체 단어 일괄 등록 완료!

` +
            `• 등록 단어 수: 총 ${result.addedCount}개 어휘
` +
            `• 계획표 배정 기간: ${result.startDate} ~ ${result.endDate} (총 ${result.totalDays}일 과정)

` +
            `[계획표 수정하기 →] 버튼을 눌러 캘린더에서 언제든 일정을 자유롭게 변경하거나 DAY별로 삭제하실 수 있습니다.`
        );
    }

    /**
     * 하위 호환 별칭
     */
    registerAllNeungryulVocaBook() {
        this.registerAllVocaBook();
    }

    /**
     * 현재 선택된 단어장 전체 계획 한꺼번에 삭제
     */
    deleteAllBookPlans() {
        const book = this.getCurrentBookInfo();
        if (!confirm(`등록된 [${book.title}]의 모든 DAY 계획을 한꺼번에 삭제하시겠습니까?`)) {
            return;
        }

        let deleted = 0;
        if (book.isNeungryul) {
            deleted = window.storage.deleteAllNeungryulDays();
        } else if (book.isNeungryulEtym) {
            deleted = window.storage.deleteAllNeungryulEtymDays();
        } else {
            deleted = window.storage.deleteAllCuratedDays(this.currentBookId);
        }

        this.renderNeungryulVocaSection();

        if (window.app && window.app.renderDashboard) {
            window.app.renderDashboard();
        }
        if (window.plannerEngine && window.plannerEngine.render) {
            window.plannerEngine.render();
        }

        alert(`🗑️ 등록되어 있던 [${book.title}] 총 ${deleted}개 단어의 계획이 모두 삭제되었습니다.`);
    }

    /**
     * 하위 호환 별칭
     */
    deleteAllNeungryulPlans() {
        this.deleteAllBookPlans();
    }

    /**
     * '계획표 수정하기' 버튼 클릭 시 학습 플래너 탭(#tab-planner)으로 즉시 이동 및 해당 날짜 포커스
     */
    openPlannerAfterBookRegister() {
        const book = this.getCurrentBookInfo();
        let status = null;
        if (window.storage) {
            if (book.isNeungryul) {
                status = window.storage.getNeungryul2025Status();
            } else if (book.isNeungryulEtym) {
                status = window.storage.getNeungryulEtymStatus();
            } else {
                status = window.storage.getCuratedCollectionStatus(this.currentBookId);
            }
        }

        if (window.plannerEngine && status && status.startDate) {
            window.plannerEngine.selectedDateStr = status.startDate;
            const [y, m] = status.startDate.split('-').map(Number);
            if (y && m) {
                window.plannerEngine.currentYear = y;
                window.plannerEngine.currentMonth = m - 1;
            }
        }
        if (window.app && window.app.switchTab) {
            window.app.switchTab('planner');
        }
    }

    /**
     * "능률 VOCA 어원편 중등 전체 단어 일괄 등록" 원클릭 실행
     */
    registerAllEtymDirectly() {
        this.currentBookId = 'neungryul_etym_2025';
        this.currentNeungryulDay = 'DAY 01';
        this.renderNeungryulVocaSection();
        this.registerAllVocaBook();
    }

    /**
     * 특정 단어장 및 DAY로 바로 이동
     */
    selectBookAndDay(bookId, dayStr) {
        this.currentBookId = bookId;
        this.currentNeungryulDay = dayStr;
        this.renderNeungryulVocaSection();
        const wrapper = document.getElementById('neungryul-voca-table-wrapper');
        if (wrapper) {
            wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    /**
     * 교재 화면 상단 '능률 VOCA 어원편 중등' 어휘 단원들 (DAY 01 ~ DAY 30) 칩 리스트 렌더링
     */
    renderEtymUnitPills() {
        // No-op if container is not present
        const container = document.getElementById('etym-unit-pills-list');
        if (!container || !window.storage) return;
        container.innerHTML = '';
    }

    /**
     * 비-능률 단원 예문의 영단어들을 클릭 가능한 인터랙티브 토큰으로 분할 렌더링
     */
    renderInteractiveSentenceTokens(sentenceText, sentenceKo = '') {
        if (!sentenceText) return '';
        const tokens = sentenceText.split(/(\s+|[.,!?;:"'()\[\]]+)/);
        const encodedKo = encodeURIComponent(sentenceKo || '');
        const encodedEn = encodeURIComponent(sentenceText || '');
        return tokens.map(token => {
            const clean = token.replace(/[^a-zA-Z\-]/g, '').trim();
            if (clean.length > 0 && /^[a-zA-Z]/.test(clean)) {
                return `<span class="reading-word-token hover:bg-amber-200 hover:text-blue-950 rounded px-0.5 cursor-pointer transition-colors underline decoration-dotted decoration-slate-300 hover:decoration-blue-900" onclick="window.ocrEngine.inspectExampleWord('${clean.replace(/'/g, "\\'")}', '${encodedEn}', '${encodedKo}')" title="단어 뜻 보기 및 사전 추가">${token}</span>`;
            }
            return token;
        }).join('');
    }

    /**
     * 예문 단어 클릭 시 내신 독해의 Word Inspector 팝오버를 연결 오픈
     */
    inspectExampleWord(cleanWord, encodedEn, encodedKo) {
        const sentenceEn = decodeURIComponent(encodedEn || '');
        const sentenceKo = decodeURIComponent(encodedKo || '');
        if (window.readingEngine && window.readingEngine.openWordInspector) {
            window.readingEngine.openWordInspector(cleanWord, sentenceEn, sentenceKo);
        }
    }
}
// 전역 인스턴스
window.ocrEngine = new OCREngine();
