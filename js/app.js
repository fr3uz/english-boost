/* EnglishBoost - Versão Profissional */
/* 40 questões placement test (A1→C2) */
/* 15 questões por nível */

const levels = {
    1: { name: "A1 - Básico Iniciante", desc: "Hello, my name is..." },
    2: { name: "A2 - Básico Intermediário", desc: "Can you help me?" },
    3: { name: "B1 - Intermediário", desc: "I was working yesterday..." },
    4: { name: "B2 - Intermediário Avançado", desc: "If I had known..." },
    5: { name: "C1 - Avançado", desc: "Although she insisted..." },
    6: { name: "C2 - Domínio Pleno", desc: "Were she to arrive..." }
};

// Placement Test (40 questões - dificuldade crescente)
const placementTest = [
    // A1
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
    // A2
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
    // B1
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
    // B2
    { q: "If she ___ here, she'd help us.", o: ["were", "was", "is", "are"], a: 0 },
    { q: "It's time we ___ a decision.", o: ["made", "make", "making", "makes"], a: 0 },
    { q: "I look forward ___ from you.", o: ["to hearing", "hear", "hearing", "to hear"], a: 0 },
    { q: "She said that she ___ tired.", o: ["was", "is", "were", "am"], a: 0 },
    { q: "The house ___ built last year.", o: ["was", "is", "were", "are"], a: 1 },
    { q: "If I ___ harder, I would have passed.", o: ["had studied", "studied", "study", "studies"], a: 0 },
    { q: "This time tomorrow, I ___ in London.", o: ["will be flying", "will fly", "am flying", "flying"], a: 0 },
    { q: "By next month, I ___ here for a year.", o: ["will have been", "will be", "am", "was"], a: 0 },
    { q: "The work ___ by tomorrow.", o: ["must be done", "must do", "must to do", "must done"], a: 0 },
    { q: "You ___ have studied more.", o: ["should", "must", "can", "could"], a: 0 },
    // C1
    { q: "It's essential that she ___ on time.", o: ["arrives", "arrived", "arrive", "arriving"], a: 0 },
    { q: "I demand that he ___ the truth.", o: ["tell", "tells", "told", "telling"], a: 0 },
    { q: "You'd better ___ now.", o: ["leave", "to leave", "leaving", "left"], a: 0 },
    { q: "She ___ be the manager; I'm not sure.", o: ["might", "can", "must", "will"], a: 0 },
    { q: "I wish I ___ that.", o: ["hadn't said", "didn't say", "don't say", "haven't said"], a: 0 },
    { q: "If only she ___ first.", o: ["had known", "knew", "know", "known"], a: 0 },
    { q: "She acts as if she ___ the owner.", o: ["was", "is", "were", "are"], a: 0 },
    { q: "I appreciate ___ this opportunity.", o: ["you giving", "you gave", "to give", "giving"], a: 0 },
    { q: "He regrets ___ that.", o: ["saying", "to say", "said", "say"], a: 0 },
    { q: "___ she is talented, she lacks experience.", o: ["Although", "Because", "If", "When"], a: 0 }
];

// Lições por níveis
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

// ===== USER =====
let user = {
    xp: 0,
    streak: 0,
    hearts: 5,
    level: 1,
    currentLevel: 1,
    lessonIndex: 0,
    dailyCompleted: false,
    questionsToday: 0,
    lastDate: new Date().toDateString(),
    placementDone: false,
    mistakes: [],
    testeScore: 0
};

let currentQ = null;
let placementIndex = 0;
let placementScore = 0;

// ===== FUNÇÕES =====
function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function loadUser() {
    const saved = localStorage.getItem('eb_user');
    if (saved) {
        try {
            user = JSON.parse(saved);
        } catch(e) {
            console.log('Erro ao carregar:', e);
        }
    }
    updateDisplay();
}

function saveUser() {
    localStorage.setItem('eb_user', JSON.stringify(user));
}

function updateDisplay() {
    document.getElementById('xp-count').textContent = user.xp;
    document.getElementById('streak-count').textContent = user.streak;
    document.getElementById('hearts-count').textContent = user.hearts;
    document.getElementById('level').textContent = levels[user.currentLevel] ? levels[user.currentLevel].name : 'Nenhum';
}

function loadQuestion() {
    if (!user.placementDone) {
        showNoTest();
        return;
    }
    
    const list = lessons[user.currentLevel] || nivel1;
    const raw = list[user.lessonIndex % list.length];
    
    const opts = shuffle(raw.o);
    const correta = raw.o[raw.a];
    
    currentQ = { q: raw.q, opts: opts, resposta: correta };
    
    document.getElementById('lesson-prompt').innerHTML = `
        <p>Nível: ${levels[user.currentLevel].name}</p>
        <p style="margin-top:10px">${raw.q}</p>
    `;
    document.getElementById('lesson-result').textContent = '';
    
    const btns = document.querySelectorAll('#lesson-options .option');
    btns.forEach((btn, i) => {
        btn.textContent = opts[i];
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });
}

function showNoTest() {
    document.getElementById('lesson-prompt').innerHTML = `
        <h2>⚠️ Teste Obrigatório</h2>
        <p>Você ainda não fez o teste de nivelamento.</p>
        <p style="margin-top:15px">Vá no seu perfil e faça o teste.</p>
    `;
    document.getElementById('lesson-options').style.display = 'none';
}

// === CHECK ANSWER (corrigido) ===
function checkAnswer(btn) {
    if (!currentQ) return;
    
    // Bloqueia todas as opções após clicar
    const btns = document.querySelectorAll('#lesson-options .option');
    btns.forEach(b => b.disabled = true);
    
    const texto = btn.textContent;
    const respostaCerta = currentQ.resposta;
    
    if (texto === respostaCerta) {
        btn.classList.add('correct');
        user.xp += 10;
        user.questionsToday++;
        document.getElementById('lesson-result').innerHTML = `✅ Correto! <strong>${respostaCerta}</strong>`;
        
        setTimeout(() => {
            user.lessonIndex++;
            if (user.questionsToday >= 10) {
                user.dailyCompleted = true;
                user.streak++;
                user.questionsToday = 0;
                showComplete();
            } else {
                loadQuestion();
            }
            saveUser();
        }, 1500);
    } else {
        btn.classList.add('wrong');
        user.hearts--;
        if (user.hearts <= 0) user.hearts = 5;
        
        btns.forEach(b => {
            if (b.textContent === respostaCerta) b.classList.add('correct');
        });
        
        user.mistakes.push(currentQ.q);
        
        // Mostra resposta + botão de entender
        document.getElementById('lesson-result').innerHTML = `
            <p>❌ Errado!</p>
            <p><strong>Resposta correta: ${respostaCerta}</strong></p>
            <p style="margin-top:10px; font-size:0.9em; color:#666;">
                ${getExplicacao(currentQ.q, respostaCerta)}
            </p>
            <button class="btn-help" onclick="perguntarEspecialista()" style="margin-top:10px;">
                ❓ Entender melhor
            </button>
        `;
        
        setTimeout(() => {
            user.lessonIndex++;
            saveUser();
            loadQuestion();
        }, 4000);
    }
    updateDisplay();
}

function getExplicacao(pergunta, resposta) {
    // Explicações básicas por tipo de pergunta
    const explicacoes = {
        "am": "Use 'am' com I (eu sou / eu estou)",
        "is": "Use 'is' com he/she/it (ele/ela é / está)",
        "are": "Use 'are' com you/we/they (você/nós/eles são ou estão)",
        "My": "My é possessivo - use para indicar posse",
        "I": "I é sujeito -.Use no início da frase",
        "Where": "Where significa 'onde' - pergunta lugar",
        "What": "What significa 'o que / qual' - pergunta informação",
        "have": "Have =ter (posse), Has = ele/ela tem",
        "has": "Has = ele/ela tem, Have = eu/temos/eles têm",
        "went": "Went é passado de 'go' (ir)",
        "watched": "Watched é passado de 'watch' (assistir)",
        "studied": "Studied é passado de 'study' (estudar)",
        "was": "Was é passado de 'be' para he/she/it",
        "were": "Were é passado de 'be' para plural/you",
        "can": "Can = poder (habilidade presente)",
        "could": "Could = poder (passado ou chance)",
        "will": "Will = futuro (vai/fará)",
        "would": "Would = condicional (se/faria)",
        "should": "Should = deveria (conselho)",
        "were": "Were = se (condicional com if)",
        "that": "That = que/qual (relativo para coisas)",
        "which": "Which = qual/o qual (relativo para escolhas)",
        "who": "Who = quem (relativo para pessoas)",
        "to": "To indica direção ou infinitivo",
        "in": "In = em (lugar fechado)",
        "on": "On = em (superfície)",
        "an": "An antes de vogal (a, e, i, o)",
        "a": "A antes de consoante"
    };
    
    for (const [palavra, explicacao] of Object.entries(explicacoes)) {
        if (pergunta.includes(palavra) || resposta.includes(palavra)) {
            return explicacao;
        }
    }
    return "Pratique esse padrão para fixar!";
}

function showComplete() {
    document.getElementById('lesson-prompt').innerHTML = `
        <h2>🎉 Parabéns!</h2>
        <p>Você completou as lições de hoje!</p>
        <p>Streak: ${user.streak} dias</p>
    `;
    document.getElementById('lesson-options').style.display = 'none';
}

// Teste de nivelamento
function startPlacement() {
    document.getElementById('daily-lesson').style.display = 'none';
    document.getElementById('profile-section').style.display = 'none';
    document.getElementById('placement-section').style.display = 'block';
    
    placementIndex = 0;
    placementScore = 0;
    
    loadPlacementQ();
}

function loadPlacementQ() {
    if (placementIndex >= placementTest.length) {
        finishPlacementTest();
        return;
    }
    
    const raw = placementTest[placementIndex];
    const opts = shuffle(raw.o);
    const correta = raw.o[raw.a];
    
    currentQ = { q: raw.q, opts: opts, resposta: correta };
    
    document.getElementById('placement-question').textContent = raw.q;
    document.getElementById('placement-progress').textContent = `Questão: ${placementIndex + 1}/40`;
    document.getElementById('placement-result').textContent = '';
    
    const btns = document.querySelectorAll('#placement-options .option');
    btns.forEach((btn, i) => {
        btn.textContent = opts[i];
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });
}

function checkPlacement(btn) {
    if (!currentQ) return;
    
    const btns = document.querySelectorAll('#placement-options .option');
    btns.forEach(b => b.disabled = true);
    
    if (btn.textContent === currentQ.resposta) {
        btn.classList.add('correct');
        placementScore++;
        document.getElementById('placement-result').textContent = '✅ Correto!';
    } else {
        btn.classList.add('wrong');
        btns.forEach(b => {
            if (b.textContent === currentQ.resposta) b.classList.add('correct');
        });
        document.getElementById('placement-result').textContent = '❌ ' + currentQ.resposta;
    }
    
    setTimeout(() => {
        placementIndex++;
        loadPlacementQ();
    }, 1000);
}

function finishPlacementTest() {
    let nivel = 1;
    
    // Lógica similar CCAA/Wizard: acertos em cada bloco
    const acertos = placementScore;
    
    if (acertos >= 35) nivel = 6;      // C2
    else if (acertos >= 28) nivel = 5; // C1
    else if (acertos >= 21) nivel = 4; // B2
    else if (acertos >= 14) nivel = 3; // B1
    else if (acertos >= 7) nivel = 2;   // A2
    else nivel = 1;                     // A1
    
    user.placementDone = true;
    user.currentLevel = nivel;
    user.xp += placementScore * 10;
    saveUser();
    
    document.getElementById('placement-section').style.display = 'none';
    document.getElementById('daily-lesson').style.display = 'block';
    document.getElementById('lesson-options').style.display = 'grid';
    
    document.getElementById('lesson-prompt').innerHTML = `
        <h2>📊 Teste Concluído!</h2>
        <p>Pontuação: ${placementScore}/40</p>
        <p>Seu nível: <strong>${levels[nivel].name}</strong></p>
    `;
    
    setTimeout(() => loadQuestion(), 2000);
}

function showTab(tab) {
    document.getElementById('daily-lesson').style.display = 'none';
    document.getElementById('practice-hub').style.display = 'none';
    document.getElementById('profile-section').style.display = 'none';
    document.getElementById('placement-section').style.display = 'none';
    document.getElementById('especialista-section').style.display = 'none';
    document.getElementById('simulado-section').style.display = 'none';
    
    if (tab === 'home') {
        document.getElementById('daily-lesson').style.display = 'block';
        if (user.placementDone) loadQuestion();
        else showNoTest();
    } else if (tab === 'practice') {
        document.getElementById('practice-hub').style.display = 'block';
    } else if (tab === 'profile') {
        document.getElementById('profile-section').style.display = 'block';
        showProfile();
    }
}

function showProfile() {
    document.getElementById('profile-level').textContent = user.placementDone ? levels[user.currentLevel].name : 'Não definido';
    document.getElementById('profile-xp').textContent = user.xp;
    document.getElementById('profile-streak').textContent = user.streak + ' dias';
    document.getElementById('profile-placement').textContent = user.placementDone ? 'Concluído' : 'Não feito';
    document.getElementById('profile-mistakes').textContent = user.mistakes.length;
}

function resetAll() {
    if (confirm('Resetar tudo?')) {
        localStorage.removeItem('eb_user');
        location.reload();
    }
}

function perguntarEspecialista() {
    // Explicação local funcionando - usa o dicionário de explicações
    if (!currentQ) return;
    
    const resultado = document.getElementById('lesson-result');
    
    resultado.innerHTML = `
        <div style="margin-top:10px; padding:10px; background:#f0f0f0; border-radius:8px;">
            <p><strong>💬 Explicação:</strong></p>
            <p style="margin-top:5px;">${getExplicacao(currentQ.q, currentQ.resposta)}</p>
        </div>
    `;
}

// Init
loadUser();
if (user.placementDone) {
    loadQuestion();
} else {
    showNoTest();
}

// ===== SIMULADO CELPIP =====
function startSimulado() {
    document.getElementById('practice-hub').style.display = 'none';
    document.getElementById('simulado-section').style.display = 'block';
    showSimuladoTab('reading');
}

function showSimuladoTab(tab) {
    document.getElementById('simulado-reading').style.display = 'none';
    document.getElementById('simulado-writing').style.display = 'none';
    document.getElementById('simulado-listening').style.display = 'none';
    document.getElementById('simulado-speaking').style.display = 'none';
    
    document.getElementById('simulado-' + tab).style.display = 'block';
    
    // Update tab styling
    document.querySelectorAll('.simulado-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
}

function checkSimulado(btn, correto) {
    // Bloqueia todas as opções
    const allBtns = btn.parentElement.querySelectorAll('.option');
    allBtns.forEach(b => b.disabled = true);
    
    if (correto) {
        btn.classList.add('correct');
        document.getElementById('simulado-result').textContent = '✅ Correto!';
    } else {
        btn.classList.add('wrong');
        allBtns.forEach(b => {
            if (b.getAttribute('onclick').includes('true')) b.classList.add('correct');
        });
        document.getElementById('simulado-result').textContent = '❌ Errado!';
    }
    
    // Avança para próxima questão após 1.5s
    setTimeout(() => {
        document.getElementById('simulado-result').textContent = '';
        allBtns.forEach(b => b.disabled = false);
        // Aqui você pode adicionar lógica para próxima pergunta do simulado
    }, 1500);
}

function submitWriting() {
    const texto = document.getElementById('writing-input').value;
    if (texto.length < 50) {
        alert('Escreva pelo menos 50 palavras!');
        return;
    }
    document.getElementById('simulado-result').innerHTML = `✅ Submetido! Palavras: ${texto.split(' ').length}<br><p>Na prova real, seria corrigido por avaliador.</p>`;
}

function submitSpeaking() {
    const texto = document.getElementById('speaking-input').value;
    if (texto.length < 30) {
        alert('Escreva pelo menos 30 palavras!');
        return;
    }
    document.getElementById('simulado-result').innerHTML = `✅ Submetido! Palavras: ${texto.split(' ').length}<br><p>Na prova real, seria avaliado por um examinador.</p>`;
}

function startPractice(type) {
    alert("Em breve: prática " + type);
}