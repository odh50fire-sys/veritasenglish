/**
 * Veritas English - 스마트 문맥 예문 및 Cloze 퀴즈 생성 헬퍼
 * 1. 능률 VOCA 2025 (중등 고난도 1,200단어) & 능률 VOCA 어원편 (765단어) 예문 자동 공급
 * 2. 모든 교재 및 커스텀 단어에 대한 실시간 품사(POS) 맞춤형 문맥 예문 생성
 * 3. 스마트 Cloze(문맥 빈칸) 매칭 및 정답 공개 시스템
 */

class ContextSentenceHelper {
    constructor() {
        this.cache = new Map();
        this.curatedIndex = new Map();
        this.initCuratedIndex();
    }

    /**
     * 큐레이티드 단어장(1,900단어) 및 테마 어휘 사전 사전 색인
     */
    initCuratedIndex() {
        try {
            if (typeof window !== 'undefined' && window.CURATED_WORDS_DATA && Array.isArray(window.CURATED_WORDS_DATA)) {
                window.CURATED_WORDS_DATA.forEach(item => {
                    const w = (item['단어'] || item['영단어'] || '').trim().toLowerCase();
                    const ex = (item['예문'] || '').trim();
                    const tr = (item['예문해석'] || item['해석'] || '').trim();
                    if (w && ex && !this.curatedIndex.has(w)) {
                        this.curatedIndex.set(w, {
                            sentence: ex,
                            translation: tr || `${w}: ${item['뜻'] || ''}`,
                            pos: item['품사'] || '',
                            meaning: item['뜻'] || ''
                        });
                    }
                });
            }

            if (typeof window !== 'undefined' && window.customVocaAI && window.customVocaAI.THEME_VOCABULARY_BASE) {
                const base = window.customVocaAI.THEME_VOCABULARY_BASE;
                Object.keys(base).forEach(k => {
                    if (Array.isArray(base[k])) {
                        base[k].forEach(item => {
                            const w = (item.w || '').trim().toLowerCase();
                            if (w && item.ex && !this.curatedIndex.has(w)) {
                                this.curatedIndex.set(w, {
                                    sentence: item.ex,
                                    translation: item.ko || `${w}: ${item.m || ''}`,
                                    pos: item.p || '',
                                    meaning: item.m || ''
                                });
                            }
                        });
                    }
                });
            }
        } catch (e) {
            console.warn('ContextSentenceHelper index error:', e);
        }
    }

    /**
     * 정규식 특수문자 이스케이프
     */
    escapeRegex(str) {
        return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    /**
     * 단어의 품사 및 어미 분석
     */
    detectPos(posStr, meaningStr) {
        const text = `${posStr || ''} ${meaningStr || ''}`.toLowerCase();
        if (text.includes('[동]') || text.includes('v.') || text.includes('verb') || text.includes('하다') || text.includes('되다')) {
            return 'verb';
        }
        if (text.includes('[형]') || text.includes('a.') || text.includes('adj') || text.includes('한') || text.includes('적인')) {
            return 'adj';
        }
        if (text.includes('[부]') || text.includes('ad.') || text.includes('adv') || text.includes('하게') || text.includes('히')) {
            return 'adv';
        }
        return 'noun';
    }

    /**
     * 단어 해시 함수 (일관된 템플릿 선정을 위해 사용)
     */
    hashWord(word) {
        let hash = 0;
        const str = String(word).toLowerCase();
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash);
    }

    /**
     * 고빈도 능률 VOCA 필수 단어 전용 고품질 문맥 문장 사전
     */
    getDedicatedNeungryulSentence(wordLower) {
        const dict = {
            // Day 01 ~ 고빈도 주요 어휘
            "jealous": {
                sentence: "She felt jealous of her friend who won the first prize in the speech contest.",
                translation: "그녀는 웅변대회에서 1등상을 탄 친구를 질투했다."
            },
            "nearby": {
                sentence: "We walked to a nearby convenience store to buy some warm drinks.",
                translation: "우리는 따뜻한 음료를 사기 위해 근처의 편의점으로 걸어갔다."
            },
            "overseas": {
                sentence: "Many university students hope to travel overseas to experience different cultures.",
                translation: "많은 대학생들은 다양한 문화를 경험하기 위해 해외로 여행을 가길 희망한다."
            },
            "inform": {
                sentence: "Please inform the teacher immediately if any student feels sick during class.",
                translation: "수업 중 아픈 학생이 생기면 즉시 선생님께 알려주세요."
            },
            "historical": {
                sentence: "The museum preserves numerous historical artifacts from the Joseon Dynasty.",
                translation: "그 박물관은 조선 시대의 수많은 역사적 유물들을 보존하고 있다."
            },
            "screen": {
                sentence: "Staring at a computer screen for hours can cause severe eye fatigue.",
                translation: "컴퓨터 화면을 몇 시간 동안 응시하는 것은 심한 눈의 피로를 유발할 수 있다."
            },
            "concept": {
                sentence: "The math professor explained the difficult concept using simple geometric diagrams.",
                translation: "수학 교수님은 단순한 기하학적 도형을 사용하여 어려운 개념을 설명하셨다."
            },
            "employ": {
                sentence: "The startup company plans to employ creative designers to build their new application.",
                translation: "그 스타트업 회사는 새로운 어플리케이션을 구축하기 위해 창의적인 디자이너들을 고용할 계획이다."
            },
            "broad": {
                sentence: "Reading diverse literature gives students a broad perspective on the world.",
                translation: "다양한 문학 작품을 읽는 것은 학생들에게 세상에 대한 넓은 관점을 제공한다."
            },
            "unusual": {
                sentence: "It is quite unusual for heavy snow to fall in this southern coastal city.",
                translation: "이 남쪽 해안 도시에 폭설이 내리는 것은 대단히 특이한 일이다."
            },
            "remain": {
                sentence: "Students should remain seated quietly until the examination bell rings.",
                translation: "학생들은 시험 종료 벨이 울릴 때까지 조용히 자리에 앉아 있어야 한다."
            },
            "lecture": {
                sentence: "The guest speaker delivered an inspiring lecture on environmental conservation.",
                translation: "초청 연사는 환경 보존에 관한 영감을 주는 강연을 했다."
            },
            "league": {
                sentence: "Our school soccer team achieved first place in the regional youth league.",
                translation: "우리 학교 축구팀은 지역 청소년 리그에서 1위를 차지했다."
            },
            "reality": {
                sentence: "We must face the harsh reality that resources on Earth are strictly limited.",
                translation: "우리는 지구의 자원이 엄격히 한정되어 있다는 가혹한 현실을 직시해야 한다."
            },
            "relief": {
                sentence: "She let out a deep sigh of relief after completing her final interview.",
                translation: "그녀는 마지막 면접을 마친 후 안도의 깊은 한숨을 내쉬었다."
            },
            "eager": {
                sentence: "The young pupils were eager to answer every question the science teacher asked.",
                translation: "어린 학생들은 과학 선생님이 질문한 모든 질문에 열망하며 답하고자 했다."
            },
            "state": {
                sentence: "The president announced a state of emergency to protect citizens from the storm.",
                translation: "대통령은 폭풍으로부터 시민들을 보호하기 위해 비상사태를 선포했다."
            },
            "complex": {
                sentence: "The human brain is an extraordinarily complex organ that controls all bodily functions.",
                translation: "인간의 뇌는 모든 신체 기능을 조절하는 놀랍도록 복잡한 기관이다."
            },
            "curve": {
                sentence: "Drivers should reduce their speed when approaching a sharp curve on the mountain road.",
                translation: "운전자들은 산길에서 급한 곡선 도로에 접근할 때 속도를 줄여야 한다."
            },
            "criticize": {
                sentence: "It is much more productive to offer helpful feedback than to criticize others.",
                translation: "남을 비판하기보다는 유익한 피드백을 제공하는 것이 훨씬 생산적이다."
            },
            // 어원편 및 주요 학술 어휘
            "predict": {
                sentence: "Meteorologists use advanced satellite radar to predict tomorrow's weather.",
                translation: "기상학자들은 내일의 날씨를 예측하기 위해 첨단 위성 레이더를 사용한다."
            },
            "predictable": {
                sentence: "The ending of the mystery novel was completely predictable from the first chapter.",
                translation: "그 미스터리 소설의 결말은 첫 장부터 완전히 예측 가능한 것이었다."
            },
            "prediction": {
                sentence: "His prediction about the technological breakthrough turned out to be accurate.",
                translation: "기술 혁신에 관한 그의 예측은 정확한 것으로 밝혀졌다."
            },
            "prefer": {
                sentence: "Most teenagers prefer studying in quiet coffee shops rather than noisy rooms.",
                translation: "대부분의 십 대들은 시끄러운 방보다 조용한 카페에서 공부하는 것을 선호한다."
            },
            "preference": {
                sentence: "Customers showed a strong preference for eco-friendly packaged products.",
                translation: "고객들은 친환경 포장 제품에 대해 강한 선호도를 보였다."
            },
            "prejudice": {
                sentence: "Education helps people eliminate racial prejudice and promote social equality.",
                translation: "교육은 사람들이 인종적 편견을 없애고 사회적 평등을 증진하도록 돕는다."
            },
            "prepare": {
                sentence: "Students should prepare thoroughly for the upcoming semester exams.",
                translation: "학생들은 다가오는 학기 시험에 철저히 대비해야 한다."
            },
            "precaution": {
                sentence: "Wearing a safety helmet is an essential precaution when riding a bicycle.",
                translation: "자전거를 탈 때 안전 헬멧을 착용하는 것은 필수적인 예방 조치이다."
            },
            "premature": {
                sentence: "It is premature to judge the success of the new project before reviewing the data.",
                translation: "데이터를 검토하기 전에 새 프로젝트의 성공을 판단하는 것은 시기상조이다."
            },
            "preview": {
                sentence: "The cinema showed an exclusive preview of the blockbuster film before its release.",
                translation: "극장은 블록버스터 영화의 개봉 전에 독점 시사회를 상영했다."
            },
            "prolong": {
                sentence: "Doctors advised the patient to exercise regularly to prolong his healthy life.",
                translation: "의사들은 환자에게 건강한 수명을 연장하기 위해 규칙적으로 운동하라고 조언했다."
            },
            "progress": {
                sentence: "Significant progress has been made in renewable energy technology over recent years.",
                translation: "최근 몇 년 동안 재생 에너지 기술 분야에서 상당한 진전이 이루어졌다."
            },
            "produce": {
                sentence: "The local factory can produce thousands of electric vehicles each month.",
                translation: "그 지역 공장은 매달 수천 대의 전기 자동차를 생산할 수 있다."
            },
            "protect": {
                sentence: "National parks are established to protect endangered wildlife and natural habitats.",
                translation: "국립공원은 멸종 위기 야생동물과 자연 서식지를 보호하기 위해 조성된다."
            },
            "purchase": {
                sentence: "Consumers often compare online prices before deciding to purchase an item.",
                translation: "소비자들은 물건을 구매하기로 결정하기 전에 온라인 가격을 자주 비교한다."
            },
            "purpose": {
                sentence: "The main purpose of the scientific experiment is to test the new hypothesis.",
                translation: "그 과학 실험의 주요 목적은 새로운 가설을 검증하는 것이다."
            },
            "pursue": {
                sentence: "She worked diligently day and night to pursue her lifelong dream of becoming an astronomer.",
                translation: "그녀는 천문학자가 되겠다는 평생의 꿈을 추구하기 위해 밤낮으로 성실히 노력했다."
            },
            "postpone": {
                sentence: "The committee decided to postpone the outdoor sports festival due to the thunderstorm.",
                translation: "위원회는 뇌우로 인해 야외 스포츠 축제를 연기하기로 결정했다."
            },
            "postscript": {
                sentence: "He added a brief postscript at the bottom of the handwritten letter.",
                translation: "그는 손으로 쓴 편지 하단에 짧은 추신을 덧붙였다."
            }
        };

        return dict[wordLower] || null;
    }

    /**
     * 문맥형 동적 템플릿 생성기 (사전에 없는 단어를 위한 품사별 고품질 문장 생성)
     */
    generateDynamicTemplate(word, meaning, pos) {
        const detected = this.detectPos(pos, meaning);
        const cleanMeaning = String(meaning || '').replace(/\[[^\]]+\]/g, '').trim().split(/[,;/]/)[0].trim() || word;
        const hash = this.hashWord(word);

        if (detected === 'verb') {
            const verbTemplates = [
                {
                    en: `The research team decided to ${word} the experimental results before drawing a final conclusion.`,
                    ko: `연구팀은 최종 결론을 내리기 전에 실험 결과를 ${cleanMeaning}하기로 결정했다.`
                },
                {
                    en: `Students are strongly encouraged to ${word} challenging concepts through regular practice.`,
                    ko: `학생들은 규칙적인 연습을 통해 도전적인 개념을 ${cleanMeaning}하도록 적극 권장된다.`
                },
                {
                    en: `It is essential that modern citizens carefully ${word} the facts before sharing news online.`,
                    ko: `현대 시민들은 온라인에서 뉴스를 공유하기 전에 사실을 신중히 ${cleanMeaning}하는 것이 필수적이다.`
                },
                {
                    en: `Scientists developed a novel method to ${word} environmental pollution in metropolitan areas.`,
                    ko: `과학자들은 대도시 지역의 환경 오염을 ${cleanMeaning}하기 위한 새로운 방법을 개발했다.`
                },
                {
                    en: `She made a dedicated effort to ${word} her daily habits and improve her academic focus.`,
                    ko: `그녀는 일상 습관을 ${cleanMeaning}하고 학업 집중력을 향상하기 위해 헌신적인 노력을 기울였다.`
                },
                {
                    en: `The international committee gathered to ${word} critical strategies for global sustainability.`,
                    ko: `국제 위원회는 지구 지속 가능성을 위한 중요한 전략을 ${cleanMeaning}하기 위해 모였다.`
                },
                {
                    en: `You must learn how to ${word} unexpected difficulties when working on team projects.`,
                    ko: `팀 프로젝트를 수행할 때는 예상치 못한 어려움을 어떻게 ${cleanMeaning}할지 배워야 한다.`
                },
                {
                    en: `Effective communication allows leaders to ${word} trust and cooperation among members.`,
                    ko: `효과적인 소통은 리더가 구성원들 사이의 신뢰와 협력을 ${cleanMeaning}할 수 있게 해준다.`
                }
            ];
            return verbTemplates[hash % verbTemplates.length];
        }

        if (detected === 'adj') {
            const adjTemplates = [
                {
                    en: `The committee proposed a remarkably ${word} solution to address the complicated situation.`,
                    ko: `위원회는 복잡한 상황을 해결하기 위해 현저하게 ${cleanMeaning}한 해결책을 제안했다.`
                },
                {
                    en: `Maintaining a ${word} attitude is fundamental to achieving long-term personal success.`,
                    ko: `${cleanMeaning}한 태도를 유지하는 것은 장기적인 개인적 성공을 이루는 데 기본이 된다.`
                },
                {
                    en: `The professor provided a clear and ${word} explanation of the scientific phenomenon.`,
                    ko: `교수님은 해당 과학 현상에 대해 명확하고 ${cleanMeaning}한 설명을 제공하셨다.`
                },
                {
                    en: `It is becoming increasingly ${word} for students to balance their study and rest effectively.`,
                    ko: `학생들이 학업과 휴식을 효과적으로 균형 잡는 것이 점점 더 ${cleanMeaning}해지고 있다.`
                },
                {
                    en: `Researchers observed a very ${word} change in the ecosystem following the temperature rise.`,
                    ko: `연구원들은 기온 상승 이후 생태계에서 매우 ${cleanMeaning}한 변화를 관찰했다.`
                },
                {
                    en: `The author created a deeply ${word} story that resonated with readers of all generations.`,
                    ko: `작가는 모든 세대의 독자들에게 깊은 울림을 준 진정으로 ${cleanMeaning}한 이야기를 창작했다.`
                },
                {
                    en: `A quiet and ${word} environment allows learners to concentrate on solving tough problems.`,
                    ko: `조용하고 ${cleanMeaning}한 환경은 학습자가 어려운 문제를 푸는 데 집중할 수 있도록 돕는다.`
                },
                {
                    en: `Taking ${word} measures is urgent to prevent further damage to our local heritage.`,
                    ko: `우리 지역 유산의 추가 피해를 막기 위해 ${cleanMeaning}한 조치를 취하는 것이 시급하다.`
                }
            ];
            return adjTemplates[hash % adjTemplates.length];
        }

        if (detected === 'adv') {
            const advTemplates = [
                {
                    en: `The speaker explained the intricate historical facts ${word} to the attentive audience.`,
                    ko: `연사는 귀 기울이는 청중에게 복잡한 역사적 사실들을 ${cleanMeaning}하게 설명했다.`
                },
                {
                    en: `The new technological software operates ${word} without causing system interruptions.`,
                    ko: `새로운 기술 소프트웨어는 시스템 중단 없이 ${cleanMeaning}하게 작동한다.`
                },
                {
                    en: `She finished the demanding evaluation ${word} thanks to months of disciplined preparation.`,
                    ko: `그녀는 수개월의 절제된 준비 덕분에 고된 평가를 ${cleanMeaning}하게 마쳤다.`
                },
                {
                    en: `Society has been evolving ${word} under the widespread influence of digital technology.`,
                    ko: `사회는 디지털 기술의 광범위한 영향 아래에서 ${cleanMeaning}하게 발전해 오고 있다.`
                }
            ];
            return advTemplates[hash % advTemplates.length];
        }

        // 기본: 명사(noun)
        const nounTemplates = [
            {
                en: `A comprehensive understanding of ${word} is essential for solving modern academic problems.`,
                ko: `${cleanMeaning}에 대한 포괄적인 이해는 현대의 학술적 문제를 해결하는 데 필수적이다.`
            },
            {
                en: `The international conference focused on the vital role of ${word} in sustainable development.`,
                ko: `국제 회의는 지속 가능한 발전에서 ${cleanMeaning}의 중요한 역할에 초점을 맞추었다.`
            },
            {
                en: `Students actively discussed how ${word} shapes cultural identity across different societies.`,
                ko: `학생들은 ${cleanMeaning}이 서로 다른 사회 전반에서 문화적 정체성을 어떻게 형성하는지 활발히 토론했다.`
            },
            {
                en: `Recent scientific discoveries have shed new light on the true nature of ${word}.`,
                ko: `최근의 과학적 발견들은 ${cleanMeaning}의 진정한 본질에 대해 새로운 빛을 비추어 주었다.`
            },
            {
                en: `Developing skills in ${word} helps young professionals adapt to the fast-changing world.`,
                ko: `${cleanMeaning} 분야의 역량을 기르는 것은 젊은 전문가들이 급변하는 세상에 적응하도록 돕는다.`
            },
            {
                en: `The historic library provides valuable resources detailing the evolutionary history of ${word}.`,
                ko: `그 역사적인 도서관은 ${cleanMeaning}의 진화 역사를 상세히 보여주는 귀중한 자료들을 제공한다.`
            },
            {
                en: `Our team analyzed the practical impact of ${word} on community well-being and daily life.`,
                ko: `우리 팀은 ${cleanMeaning}이 지역사회의 복지와 일상생활에 미치는 실질적인 영향을 분석했다.`
            },
            {
                en: `Cultivating a genuine passion for ${word} leads to continuous intellectual and personal growth.`,
                ko: `${cleanMeaning}에 대한 진정한 열정을 기르는 것은 지속적인 지적, 개인적 성장으로 이어진다.`
            }
        ];
        return nounTemplates[hash % nounTemplates.length];
    }

    /**
     * 문장 내에서 대상 단어(또는 굴절형)를 찾아 Cloze 빈칸(【 ____________ 】)으로 치환
     */
    findClozeMatch(sentence, targetWord, blankPlaceholder = '【 ____________ 】') {
        if (!sentence || !targetWord) {
            return null;
        }

        const raw = String(sentence).trim();
        const word = String(targetWord).trim();
        if (!raw || !word) return null;

        const wEsc = this.escapeRegex(word);

        // 정규식 매칭 후보군 (원형 -> 복수/과거/진행/형용사형 등 순차 시도)
        const regexes = [
            new RegExp(`\\b${wEsc}\\b`, 'i'),                       // 1. 완전 일치 원형
            new RegExp(`\\b${wEsc}(s|es|ed|ing|d|ly|er|est)?\\b`, 'i'), // 2. 표준 굴절형
        ];

        // e로 끝나는 경우 e 탈락형 매칭 (예: employ -> employed, create -> creating)
        if (word.endsWith('e') && word.length > 2) {
            const stem = this.escapeRegex(word.slice(0, -1));
            regexes.push(new RegExp(`\\b${stem}(ing|ed|es|er|est)\\b`, 'i'));
        }

        // y로 끝나는 경우 i로 변환 매칭 (예: rely -> relied)
        if (word.endsWith('y') && word.length > 2) {
            const stem = this.escapeRegex(word.slice(0, -1));
            regexes.push(new RegExp(`\\b${stem}(ied|ies|ying)\\b`, 'i'));
        }

        // 전체 단어 바운더리 매칭 (접두/접미사 포함)
        regexes.push(new RegExp(`\\b${wEsc}\\w*\\b`, 'i'));

        for (const re of regexes) {
            const match = raw.match(re);
            if (match) {
                const matchedWord = match[0];
                const clozeSentence = raw.replace(re, blankPlaceholder);
                return {
                    matched: true,
                    matchedWord: matchedWord,
                    clozeSentence: clozeSentence,
                    originalSentence: raw
                };
            }
        }

        return null;
    }

    /**
     * 단어 객체 또는 원시 단어명으로부터 최적의 문맥 문장 및 Cloze 데이터 획득
     * (절대로 정적 문장이나 빈칸 없는 문장을 반환하지 않음)
     */
    getOrGenerateSentence(wordInput, meaningInput = '', posInput = '') {
        let word = '';
        let meaning = '';
        let pos = '';
        let existingExample = '';
        let existingTranslation = '';

        if (typeof wordInput === 'object' && wordInput !== null) {
            word = (wordInput.word || wordInput['단어'] || wordInput['영단어'] || '').trim();
            meaning = (wordInput.meaning || wordInput['뜻'] || '').trim();
            pos = (wordInput.partOfSpeech || wordInput.pos || wordInput['품사'] || '').trim();
            existingExample = (wordInput.example || wordInput['예문'] || '').trim();
            existingTranslation = (wordInput.exampleMeaning || wordInput['예문해석'] || wordInput['해석'] || '').trim();
        } else {
            word = String(wordInput || '').trim();
            meaning = String(meaningInput || '').trim();
            pos = String(posInput || '').trim();
        }

        if (!word) {
            return {
                sentence: '',
                translation: '',
                clozeSentence: '【 ____________ 】',
                matchedWord: ''
            };
        }

        const wordLower = word.toLowerCase();

        // 1. 단어 객체에 기존 예문이 있고, 그 예문 안에 실제 대상 단어가 온전히 존재하는 경우 사용
        if (existingExample && !existingExample.includes('meaning of ______ clearly')) {
            const matchResult = this.findClozeMatch(existingExample, word);
            if (matchResult) {
                return {
                    sentence: existingExample,
                    translation: existingTranslation || `${word}: ${meaning}`,
                    clozeSentence: matchResult.clozeSentence,
                    matchedWord: matchResult.matchedWord,
                    source: 'direct'
                };
            }
        }

        // 2. 고빈도 능률 VOCA 공식 전용 예문 사전 조회
        const dedicated = this.getDedicatedNeungryulSentence(wordLower);
        if (dedicated) {
            const matchResult = this.findClozeMatch(dedicated.sentence, word);
            if (matchResult) {
                return {
                    sentence: dedicated.sentence,
                    translation: dedicated.translation,
                    clozeSentence: matchResult.clozeSentence,
                    matchedWord: matchResult.matchedWord,
                    source: 'dedicated'
                };
            }
        }

        // 3. 큐레이티드 사전(1,900단어) 및 테마 어휘 베이스 색인 조회
        if (this.curatedIndex.has(wordLower)) {
            const curItem = this.curatedIndex.get(wordLower);
            const matchResult = this.findClozeMatch(curItem.sentence, word);
            if (matchResult) {
                return {
                    sentence: curItem.sentence,
                    translation: curItem.translation,
                    clozeSentence: matchResult.clozeSentence,
                    matchedWord: matchResult.matchedWord,
                    source: 'curated'
                };
            }
        }

        // 4. 품사 및 의미 기반의 스마트 동적 문맥 문장 생성 (절대 불발되지 않음)
        const template = this.generateDynamicTemplate(word, meaning, pos);
        const matchResult = this.findClozeMatch(template.en, word);

        if (matchResult) {
            return {
                sentence: template.en,
                translation: template.ko,
                clozeSentence: matchResult.clozeSentence,
                matchedWord: matchResult.matchedWord,
                source: 'dynamic'
            };
        }

        // 5. 궁극의 비상 보호망: 단어를 100% 품고 있는 자연스러운 학술 예문
        const fallbackEn = `It is important for every student to understand the word "${word}" in this academic context.`;
        const fallbackKo = `모든 학생이 이 학술적 문맥에서 "${word}"(${meaning || '단어'})라는 어휘를 이해하는 것이 중요하다.`;
        const fallbackMatch = this.findClozeMatch(fallbackEn, word) || {
            clozeSentence: `It is important for every student to understand the word 【 ____________ 】 in this academic context.`,
            matchedWord: word
        };

        return {
            sentence: fallbackEn,
            translation: fallbackKo,
            clozeSentence: fallbackMatch.clozeSentence,
            matchedWord: fallbackMatch.matchedWord,
            source: 'safe_fallback'
        };
    }

    /**
     * 오답 선지 보충용 무작위 어휘 반환
     */
    getDistractors(excludeWord, count = 3) {
        const pool = [
            'achieve', 'benefit', 'challenge', 'discover', 'encourage',
            'feature', 'generate', 'indicate', 'maintain', 'observe',
            'predict', 'require', 'support', 'transform', 'undertake',
            'attitude', 'concept', 'decision', 'evidence', 'factor',
            'impact', 'method', 'perspective', 'resource', 'strategy',
            'complex', 'essential', 'fundamental', 'historical', 'logical',
            'positive', 'remarkable', 'significant', 'traditional', 'unusual'
        ];
        const exclude = String(excludeWord || '').toLowerCase();
        const filtered = pool.filter(w => w !== exclude);
        return filtered.sort(() => Math.random() - 0.5).slice(0, count);
    }
}

// 전역 싱글톤 인스턴스 생성
if (typeof window !== 'undefined') {
    window.contextSentenceHelper = new ContextSentenceHelper();
}
