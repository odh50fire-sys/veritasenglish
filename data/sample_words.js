/**
 * Veritas English - 기본 제공 샘플 단어장 데이터
 * 초등 필수, 중학 핵심, 수능/고등, 토익/성인 실전 어휘
 */
const SAMPLE_WORDS = [
    // [초등/기초] Elementary Essentials
    {
        word: "curious",
        meaning: "호기심이 많은, 궁금한",
        partOfSpeech: "adj.",
        example: "Children are naturally curious about the world.",
        exampleMeaning: "아이들은 본래 세상에 대해 호기심이 많다.",
        level: "elementary",
        tag: "초등 필수",
        stage: 1,
        reviewCount: 0,
        correctCount: 0,
        wrongCount: 0,
        isWeak: false
    },
    {
        word: "courage",
        meaning: "용기, 담력",
        partOfSpeech: "n.",
        example: "She showed great courage during the difficult time.",
        exampleMeaning: "그녀는 힘든 시기에 큰 용기를 보여주었다.",
        level: "elementary",
        tag: "초등 필수",
        stage: 1,
        reviewCount: 0,
        correctCount: 0,
        wrongCount: 0,
        isWeak: false
    },
    {
        word: "discover",
        meaning: "발견하다, 알아내다",
        partOfSpeech: "v.",
        example: "Scientists discover new species in the ocean every year.",
        exampleMeaning: "과학자들은 매년 바다에서 새로운 종을 발견한다.",
        level: "elementary",
        tag: "초등 필수",
        stage: 2,
        reviewCount: 1,
        correctCount: 1,
        wrongCount: 0,
        isWeak: false
    },
    {
        word: "generous",
        meaning: "관대한, 아낌없는",
        partOfSpeech: "adj.",
        example: "Thank you for your generous gift and support.",
        exampleMeaning: "너그러운 선물과 응원에 감사드립니다.",
        level: "elementary",
        tag: "초등 필수",
        stage: 1,
        reviewCount: 0,
        correctCount: 0,
        wrongCount: 0,
        isWeak: false
    },

    // [중학/핵심] Middle School Core
    {
        word: "hesitate",
        meaning: "망설이다, 주저하다",
        partOfSpeech: "v.",
        example: "Do not hesitate to ask if you have any questions.",
        exampleMeaning: "질문이 있으시면 주저하지 말고 물어보세요.",
        level: "middle",
        tag: "중학 핵심",
        stage: 2,
        reviewCount: 2,
        correctCount: 1,
        wrongCount: 1,
        isWeak: true
    },
    {
        word: "influence",
        meaning: "영향, 영향을 미치다",
        partOfSpeech: "n./v.",
        example: "Her parents had a profound influence on her career choice.",
        exampleMeaning: "그녀의 부모님은 그녀의 진로 선택에 깊은 영향을 미쳤다.",
        level: "middle",
        tag: "중학 핵심",
        stage: 3,
        reviewCount: 3,
        correctCount: 3,
        wrongCount: 0,
        isWeak: false
    },
    {
        word: "precious",
        meaning: "귀중한, 값비싼",
        partOfSpeech: "adj.",
        example: "Time is the most precious resource we possess.",
        exampleMeaning: "시간은 우리가 가진 가장 귀중한 자원이다.",
        level: "middle",
        tag: "중학 핵심",
        stage: 1,
        reviewCount: 0,
        correctCount: 0,
        wrongCount: 0,
        isWeak: false
    },
    {
        word: "persevere",
        meaning: "인내하다, 굴하지 않고 계속하다",
        partOfSpeech: "v.",
        example: "Despite the hardships, she persevered and won the scholarship.",
        exampleMeaning: "고난에도 불구하고 그녀는 인내하여 장학금을 받았다.",
        level: "middle",
        tag: "중학 핵심",
        stage: 1,
        reviewCount: 1,
        correctCount: 0,
        wrongCount: 1,
        isWeak: true
    },

    // [수능/고등] High School / CSAT Academic
    {
        word: "ambiguous",
        meaning: "모호한, 두 가지 이상의 뜻으로 해석되는",
        partOfSpeech: "adj.",
        example: "His ambiguous response left everyone feeling perplexed.",
        exampleMeaning: "그의 모호한 답변은 모두를 당황스럽게 만들었다.",
        level: "high",
        tag: "수능 특강",
        stage: 2,
        reviewCount: 2,
        correctCount: 2,
        wrongCount: 0,
        isWeak: false
    },
    {
        word: "meticulous",
        meaning: "꼼꼼한, 세심한, 빈틈없는",
        partOfSpeech: "adj.",
        example: "She kept meticulous records of all the lab experiments.",
        exampleMeaning: "그녀는 모든 실험실 실험에 대한 꼼꼼한 기록을 남겼다.",
        level: "high",
        tag: "수능 특강",
        stage: 3,
        reviewCount: 3,
        correctCount: 3,
        wrongCount: 0,
        isWeak: false
    },
    {
        word: "comprehensive",
        meaning: "포괄적인, 종합적인",
        partOfSpeech: "adj.",
        example: "The academy provides a comprehensive curriculum for scholars.",
        exampleMeaning: "학당은 학자들을 위한 포괄적인 커리큘럼을 제공한다.",
        level: "high",
        tag: "수능 특강",
        stage: 1,
        reviewCount: 0,
        correctCount: 0,
        wrongCount: 0,
        isWeak: false
    },
    {
        word: "inevitable",
        meaning: "불가피한, 필연적인",
        partOfSpeech: "adj.",
        example: "Technological advancement brings inevitable changes to society.",
        exampleMeaning: "기술 발전은 사회에 불가피한 변화를 가져온다.",
        level: "high",
        tag: "수능 특강",
        stage: 2,
        reviewCount: 2,
        correctCount: 1,
        wrongCount: 1,
        isWeak: true
    },
    {
        word: "ephemeral",
        meaning: "순식간의, 덧없는, 수명이 짧은",
        partOfSpeech: "adj.",
        example: "Fame can be ephemeral, but genuine knowledge endures.",
        exampleMeaning: "명성은 덧없을 수 있지만 진정한 지식은 영원하다.",
        level: "high",
        tag: "수능 심화",
        stage: 1,
        reviewCount: 1,
        correctCount: 0,
        wrongCount: 1,
        isWeak: true
    },

    // [성인/토익] Practical & Business Vocab
    {
        word: "feasible",
        meaning: "실행 가능한, 타당한",
        partOfSpeech: "adj.",
        example: "The committee approved the plan as financially feasible.",
        exampleMeaning: "위원회는 그 계획이 재정적으로 실행 가능하다고 승인했다.",
        level: "adult",
        tag: "비즈니스 토익",
        stage: 2,
        reviewCount: 2,
        correctCount: 2,
        wrongCount: 0,
        isWeak: false
    },
    {
        word: "lucrative",
        meaning: "수익성이 좋은, 돈벌이가 되는",
        partOfSpeech: "adj.",
        example: "The tech startup secured a lucrative contract with global partners.",
        exampleMeaning: "그 테크 스타트업은 글로벌 파트너들과 수익성 높은 계약을 따냈다.",
        level: "adult",
        tag: "비즈니스 토익",
        stage: 1,
        reviewCount: 0,
        correctCount: 0,
        wrongCount: 0,
        isWeak: false
    },
    {
        word: "substantiate",
        meaning: "입증하다, 실체화하다",
        partOfSpeech: "v.",
        example: "You must substantiate your claims with empirical evidence.",
        exampleMeaning: "당신은 실증적 증거로 주장을 입증해야 한다.",
        level: "adult",
        tag: "아카데믹 라이팅",
        stage: 1,
        reviewCount: 0,
        correctCount: 0,
        wrongCount: 0,
        isWeak: false
    }
];

if (typeof module !== "undefined" && module.exports) {
    module.exports = { SAMPLE_WORDS };
}
