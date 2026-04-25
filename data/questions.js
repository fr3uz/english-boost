/*
 * EnglishBoost - Teste de Nívelamento Real
 * Baseado em CCAA, Wizard, Fisk - Questões Reais
 * Dificuldade CRESCENTE (A1 até C2)
 */

// ===== NÍVEIS (CEFR) =====
const levels = {
    1: { name: "A1 - Básico Iniciante", desc: "Hello, my name is..." },
    2: { name: "A2 - Básico Intermediário", desc: "Can you help me?" },
    3: { name: "B1 - Intermediário", desc: "I was working yesterday..." },
    4: { name: "B2 - Intermediário Avançado", desc: "If I had known..." },
    5: { name: "C1 - Avançado", desc: "Although she insisted..." },
    6: { name: "C2 - Domínio Pleno", desc: "Were she to arrive..." }
};

// ===== TESTE DE PLACEMENT (40 questões - dificuldade crescente A1→C2) =====
// Questões reais baseadas em testes de escolas
const placementTest = [
    // === A1 (Básico Iniciante) ===
    { q: "___ name is Maria.", o: ["My", "I", "Me", "Mine"], a: 0 },
    { q: "___ are you from?", o: ["Where", "What", "Who", "How"], a: 0 },
    { q: "I ___ a student.", o: ["am", "is", "are", "be"], a: 0 },
    { q: "She ___ from Brazil.", o: ["is", "are", "am", "be"], a: 0 },
    { q: "They ___ students.", o: ["are", "is", "am", "be"], a: 0 },
    { q: "How ___ you today?", o: ["are", "is", "am", "be"], a: 0 },
    { q: "___ time is it?", o: ["What", "When", "Where", "How"], a: 0 },
    { q: "I live ___ Brazil.", o: ["in", "on", "at", "to"], a: 0 },
    { q: "She works ___ a bank.", o: ["at", "in", "on", "to"], a: 0 },
    { q: "I need ___ apple.", o: ["an", "a", "the", "some"], a: 0 },
    
    // === A2 (Básico Intermediário) ===
    { q: "She ___ to the store every day.", o: ["goes", "go", "going", "gone"], a: 0 },
    { q: "He ___ English very well.", o: ["speaks", "speak", "speaking", "spoke"], a: 0 },
    { q: "___ you speak English?", o: ["Do", "Does", "Is", "Are"], a: 0 },
    { q: "I usually ___ coffee in the morning.", o: ["drink", "drinks", "drinking", "drank"], a: 0 },
    { q: "The book ___ on the table.", o: ["is", "are", "am", "be"], a: 0 },
    { q: "I ___ a car.", o: ["have", "has", "had", "having"], a: 0 },
    { q: "She ___ two brothers.", o: ["has", "have", "had", "having"], a: 0 },
    { q: "___ a cat in the garden.", o: ["There is", "There are", "There", "Is"], a: 0 },
    { q: "I ___ to the park yesterday.", o: ["went", "go", "gone", "going"], a: 0 },
    { q: "She ___ the movie last week.", o: ["watched", "watch", "watching", "watches"], a: 0 },
    
    // === B1 (Intermediário) ===
    { q: "They ___ English when they lived in the US.", o: ["studied", "study", "studying", "studies"], a: 0 },
    { q: "He ___ home at 6pm yesterday.", o: ["got", "get", "getting", "gets"], a: 0 },
    { q: "It ___ very cold last night.", o: ["was", "is", "were", "been"], a: 0 },
    { q: "I think she ___ come tomorrow.", o: ["will", "would", "can", "could"], a: 0 },
    { q: "You ___ speak English very well.", o: ["can", "could", "will", "would"], a: 0 },
    { q: "If I ___ rich, I'd buy a house.", o: ["were", "was", "am", "are"], a: 0 },
    { q: "I wish I ___ speak Spanish.", o: ["could", "can", "will", "may"], a: 0 },
    { q: "By next year, I ___ English for 3 years.", o: ["will have been studying", "will study", "study", "studied"], a: 0 },
    { q: "The book ___ I bought is interesting.", o: ["that", "which", "who", "what"], a: 0 },
    { q: "I recommend ___ the book first.", o: ["reading", "to read", "read", "to reading"], a: 0 },
    
    // === B2 (Intermediário Avançado) ===
    { q: "If she ___ here, she'd help us.", o: ["were", "was", "is", "are"], a: 0 },
    { q: "It's time we ___ a decision.", o: ["made", "make", "making", "makes"], a: 0 },
    { q: "I look forward ___ from you.", o: ["to hearing", "hear", "hearing", "to hear"], a: 0 },
    { q: "She said that she ___ tired.", o: ["was", "is", "were", "am"], a: 0 },
    { q: "The house ___ built last year.", o: ["was", "is", "were", "are"], a: 0 },
    { q: "If I ___ harder, I would have passed.", o: ["had studied", "studied", "study", "studies"], a: 0 },
    { q: "This time tomorrow, I ___ in London.", o: ["will be flying", "will fly", "am flying", "flying"], a: 0 },
    { q: "By next month, I ___ here for a year.", o: ["will have been", "will be", "am", "was"], a: 0 },
    { q: "The work ___ by tomorrow.", o: ["must be done", "must do", "must to do", "must done"], a: 0 },
    { q: "You ___ have studied more.", o: ["should", "must", "can", "could"], a: 0 },
    
    // === C1 (Avançado) ===
    { q: "It's essential that she ___ on time.", o: ["arrives", "arrived", "arrive", "arriving"], a: 0 },
    { q: "I demand that he ___ the truth.", o: ["tell", "tells", "told", "telling"], a: 0 },
    { q: "You'd better ___ now.", o: ["leave", "to leave", "leaving", "left"], a: 0 },
    { q: "She ___ be the manager; I'm not sure.", o: ["might", "can", "must", "will"], a: 0 },
    { q: "I wish I ___ that.", o: ["hadn't said", "didn't say", "don't say", "haven't said"], a: 0 },
    { q: "If only she ___ first.", o: ["had known", "knew", "know", "known"], a: 0 },
    { q: "She acts as if she ___ the owner.", o: ["was", "is", "were", "are"], a: 0 },
    { q: "I appreciate ___ this opportunity.", o: ["you giving", "you gave", "to give", "giving"], a: 0 },
    { q: "He regrets ___ that.", o: ["saying", "to say", "said", "say"], a: 0 },
    { q: "___ she is talented, she lacks experience.", o: ["Although", "Because", "If", "When"], a: 0 },
    
    // === C2 (Domínio Pleno) ===
    { q: "Had I ___ that, I would have acted differently.", o: ["known", "know", "knowing", "knew"], a: 0 },
    { q: "Were she ___ arrive, we would be ready.", o: ["to", "for", "in", "at"], a: 0 },
    { q: "I'll call you by the time ___ arrives.", o: ["she", "her", "his", "they"], a: 0 },
    { q: "The matter ___ having been discussed.", o: ["is", "was", "were", "be"], a: 1 },
    { q: "That's the very person ___ I was talking about.", o: ["whom", "who", "which", "what"], a: 0 },
    { q: "No sooner ___ arrived than she left.", o: ["had he", "he had", "has he", "he has"], a: 0 },
    { q: "It was not until ___ that I understood.", o: ["I read", "reading", "to read", "read"], a: 0 },
    { q: "She made ___ clear that she wouldn't agree.", o: ["it", "that", "this", "such"], a: 0 },
    { q: "Hardly ___ when the phone rang.", o: ["I had sat", "did I sit", "I sat", "had I sat"], a: 3 },
    { q: "Were it ___ that brings him, I'd be surprised.", o: ["who", "whom", "whose", "whoever"], a: 2 }
];

// ===== LIÇÕES POR NÍVEL (15+ questões cada) =====

// NÍVEL 1 - A1
const nivel1 = [
    { q: "Hello, my name ___ John.", o: ["is", "are", "am", "be"], a: 0 },
    { q: "How ___ you today?", o: ["are", "is", "am", "be"], a: 0 },
    { q: "I ___ a student.", o: ["am", "is", "are", "be"], a: 0 },
    { q: "She ___ from Brazil.", o: ["is", "are", "am", "be"], a: 0 },
    { q: "They ___ students.", o: ["are", "is", "am", "be"], a: 0 },
    { q: "We ___ friends.", o: ["are", "is", "am", "be"], a: 0 },
    { q: "It ___ a book.", o: ["is", "are", "am", "be"], a: 0 },
    { q: "You ___ my friend.", o: ["are", "is", "am", "be"], a: 0 },
    { q: "He ___ a teacher.", o: ["is", "are", "am", "be"], a: 0 },
    { q: "I ___ 25 years old.", o: ["am", "is", "are", "be"], a: 0 },
    { q: "___ is your name?", o: ["What", "Who", "Where", "How"], a: 0 },
    { q: "___ are you from?", o: ["Where", "What", "Who", "How"], a: 0 },
    { q: "___ time is it?", o: ["What", "When", "Where", "How"], a: 0 },
    { q: "___ is this?", o: ["What", "Who", "Where", "How"], a: 0 },
    { q: "I live ___ Brazil.", o: ["in", "on", "at", "to"], a: 0 }
];

// NÍVEL 2 - A2
const nivel2 = [
    { q: "She ___ to the store every day.", o: ["goes", "go", "going", "gone"], a: 0 },
    { q: "He ___ English very well.", o: ["speaks", "speak", "speaking", "spoke"], a: 0 },
    { q: "She ___ coffee.", o: ["likes", "like", "liked", "liking"], a: 0 },
    { q: "The child ___ fast.", o: ["runs", "run", "running", "ran"], a: 0 },
    { q: "It ___ a lot here.", o: ["rains", "rain", "raining", "rained"], a: 0 },
    { q: "___ you speak English?", o: ["Do", "Does", "Is", "Are"], a: 0 },
    { q: "___ she like coffee?", o: ["Does", "Do", "Is", "Are"], a: 0 },
    { q: "I need ___ apple.", o: ["an", "a", "the", "some"], a: 0 },
    { q: "She's ___ engineer.", o: ["an", "a", "the", "some"], a: 0 },
    { q: "I have ___ idea.", o: ["an", "a", "the", "some"], a: 0 },
    { q: "The book is ___ the table.", o: ["on", "in", "at", "to"], a: 0 },
    { q: "I ___ a car.", o: ["have", "has", "had", "having"], a: 0 },
    { q: "She ___ two brothers.", o: ["has", "have", "had", "having"], a: 0 },
    { q: "They ___ a house.", o: ["have", "has", "had", "having"], a: 0 },
    { q: "___ a cat in the garden.", o: ["There is", "There are", "There", "Is"], a: 0 }
];

// NÍVEL 3 - B1
const nivel3 = [
    { q: "I ___ to the beach yesterday.", o: ["went", "go", "gone", "going"], a: 0 },
    { q: "She ___ the book yesterday.", o: ["finished", "finish", "finishing", "finishes"], a: 0 },
    { q: "They ___ the movie.", o: ["watched", "watch", "watching", "watches"], a: 0 },
    { q: "He ___ English last year.", o: ["studied", "study", "studying", "studies"], a: 0 },
    { q: "We ___ dinner at home.", o: ["had", "have", "having", "has"], a: 0 },
    { q: "___ you see the movie?", o: ["Did", "Do", "Does", "Does"], a: 0 },
    { q: "Where ___ she go?", o: ["did", "do", "does", "does"], a: 0 },
    { q: "I ___ now.", o: ["am eating", "eating", "eat", "eats"], a: 0 },
    { q: "She ___ English now.", o: ["is learning", "learning", "learns", "learn"], a: 0 },
    { q: "I ___ English for 5 years.", o: ["have studied", "studied", "study", "studies"], a: 0 },
    { q: "She ___ here before.", o: ["has been", "been", "is", "was"], a: 0 },
    { q: "Have you finished ___?", o: ["yet", "already", "just", "ever"], a: 0 },
    { q: "I ___ to Brazil last year.", o: ["went", "have been", "been", "was"], a: 0 },
    { q: "___ I help you?", o: ["Can", "Could", "May", "Will"], a: 0 },
    { q: "I ___ understand.", o: ["can't", "cannot", "don't", "doesn't"], a: 0 }
];

// NÍVEL 4 - B2
const nivel4 = [
    { q: "If I ___ rich, I'd buy a house.", o: ["were", "was", "am", "are"], a: 0 },
    { q: "If she ___ here, she'd help us.", o: ["were", "was", "is", "are"], a: 0 },
    { q: "I wish I ___ speak Spanish.", o: ["could", "can", "will", "may"], a: 0 },
    { q: "I wish I ___ more money.", o: ["had", "have", "having", "has"], a: 0 },
    { q: "She wishes she ___ younger.", o: ["were", "was", "is", "are"], a: 1 },
    { q: "By the time I ___ home, she had left.", o: ["got", "get", "getting", "gets"], a: 0 },
    { q: "She said that she ___ tired.", o: ["was", "is", "were", "am"], a: 0 },
    { q: "He told me that he ___ coming.", o: ["was", "is", "were", "are"], a: 0 },
    { q: "The house ___ last year.", o: ["was built", "built", "was building", "builds"], a: 0 },
    { q: "The person ___ called me is here.", o: ["who", "that", "which", "what"], a: 0 },
    { q: "The book ___ I bought is interesting.", o: ["that", "which", "who", "what"], a: 0 },
    { q: "You ___ have studied more.", o: ["should", "must", "can", "could"], a: 0 },
    { q: "I'll call you ___ I arrive.", o: ["when", "while", "before", "after"], a: 0 },
    { q: "Call me ___ you need help.", o: ["if", "when", "while", "before"], a: 0 },
    { q: "I enjoy ___ English.", o: ["learning", "learn", "learned", "learns"], a: 0 }
];

// NÍVEL 5 - C1
const nivel5 = [
    { q: "If I ___ harder, I would have passed.", o: ["had studied", "studied", "study", "studies"], a: 0 },
    { q: "If she ___, she would have come.", o: ["had known", "knew", "know", "knows"], a: 0 },
    { q: "This time tomorrow, I ___ in London.", o: ["will be flying", "will fly", "am flying", "flying"], a: 0 },
    { q: "By next month, I ___ here for a year.", o: ["will have been", "will be", "am", "was"], a: 0 },
    { q: "The work ___ by tomorrow.", o: ["must be done", "must do", "must to do", "must done"], a: 0 },
    { q: "The rules ___ by everyone.", o: ["should be followed", "should follow", "should to follow", "should followed"], a: 0 },
    { q: "___ had I arrived when the phone rang.", o: ["Hardly", "When", "Then", "So"], a: 0 },
    { q: "The person ___ called you is here.", o: ["who", "whom", "which", "what"], a: 0 },
    { q: "I wonder ___ she is.", o: ["who", "whom", "which", "what"], a: 0 },
    { q: "Can you tell me ___ the station is?", o: ["where", "that", "which", "what"], a: 0 },
    { q: "The work ___ by the team.", o: ["was being done", "was done", "is done", "has been done"], a: 0 },
    { q: "The results were good; ___, we're happy.", o: ["therefore", "however", "although", "but"], a: 0 },
    { q: "She was tired; ___, she kept working.", o: ["however", "therefore", "because", "when"], a: 0 },
    { q: "The project is late; ___, we need to work faster.", o: ["therefore", "however", "although", "but"], a: 0 },
    { q: "It was yesterday ___ we met.", o: ["that", "when", "where", "which"], a: 0 }
];

// NÍVEL 6 - C2
const nivel6 = [
    { q: "It's essential that she ___ on time.", o: ["arrives", "arrived", "arrive", "arriving"], a: 0 },
    { q: "I demand that he ___ the truth.", o: ["tell", "tells", "told", "telling"], a: 0 },
    { q: "It's important that everyone ___ prepared.", o: ["be", "is", "are", "was"], a: 0 },
    { q: "You'd better ___ now.", o: ["leave", "to leave", "leaving", "left"], a: 0 },
    { q: "She'd rather ___ at home.", o: ["stay", "to stay", "staying", "stayed"], a: 0 },
    { q: "She ___ be the manager; I'm not sure.", o: ["might", "can", "must", "will"], a: 0 },
    { q: "You ___ have told me about the problem.", o: ["should", "must", "can", "will"], a: 0 },
    { q: "It ___ be the right decision.", o: ["could", "can", "must", "will"], a: 0 },
    { q: "I wish I ___ that.", o: ["hadn't said", "didn't say", "don't say", "haven't said"], a: 0 },
    { q: "If only she ___ first.", o: ["had known", "knew", "know", "known"], a: 0 },
    { q: "She acts as if she ___ the owner.", o: ["was", "is", "were", "are"], a: 0 },
    { q: "I appreciate ___ this opportunity.", o: ["you giving", "you gave", "to give", "giving"], a: 0 },
    { q: "He regrets ___ that.", o: ["saying", "to say", "said", "say"], a: 0 },
    { q: "I can't stand ___ here.", o: ["waiting", "wait", "waited", "to wait"], a: 0 },
    { q: "___ she is talented, she lacks experience.", o: ["Although", "Because", "If", "When"], a: 0 }
];

const lessons = {
    1: nivel1, 2: nivel2, 3: nivel3, 4: nivel4, 5: nivel5, 6: nivel6
};

module.exports = { levels, lessons, placementTest };