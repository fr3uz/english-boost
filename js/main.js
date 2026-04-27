/* FNFIPF - JavaScript Simples */

// ===== DADOS =====
const idiomas = { en: 'English', fr: 'Français' };
const avatares = ['😀', '😎', '🤓', '🥳', '😇', '🤔', '😸', '😺', '🦊', '🐱', '🦁', '🐼'];
const nivelMap = { 'basico': 'Básico', 'intermediario': 'Intermediário', 'avancado': 'Avançado', 'Fluente': 'Fluente' };
const etapas = ['basico', 'intermediario', 'avancado'];

// Perguntas em INGLÊS
const perguntas = {
    basico: [
        { q: "Hello, my name ___ John.", a: "is", o: ["is", "are", "am", "be"] },
        { q: "How ___ you today?", a: "are", o: ["are", "is", "am", "be"] },
        { q: "I ___ a student.", a: "am", o: ["am", "is", "are", "be"] },
        { q: "She ___ from Brazil.", a: "is", o: ["is", "are", "am", "be"] },
        { q: "They ___ students.", a: "are", o: ["are", "is", "am", "be"] },
        { q: "We ___ friends.", a: "are", o: ["are", "is", "am", "be"] },
        { q: "It ___ a book.", a: "is", o: ["is", "are", "am", "be"] },
        { q: "You ___ my friend.", a: "are", o: ["are", "is", "am", "be"] },
        { q: "I live ___ Brazil.", a: "in", o: ["in", "on", "at", "to"] },
        { q: "___ is your name?", a: "What", o: ["What", "Who", "Where", "How"] }
    ],
    intermediario: [
        { q: "She ___ to the store every day.", a: "goes", o: ["goes", "go", "going", "gone"] },
        { q: "He ___ English very well.", a: "speaks", o: ["speaks", "speak", "speaking", "spoke"] },
        { q: "___ you speak English?", a: "Do", o: ["Do", "Does", "Is", "Are"] },
        { q: "I usually ___ coffee.", a: "drink", o: ["drink", "drinks", "drinking", "drank"] },
        { q: "The book ___ on the table.", a: "is", o: ["is", "are", "am", "be"] },
        { q: "I ___ a car.", a: "have", o: ["have", "has", "had", "having"] },
        { q: "She ___ two brothers.", a: "has", o: ["has", "have", "had", "having"] },
        { q: "I ___ to the park yesterday.", a: "went", o: ["went", "go", "gone", "going"] },
        { q: "She ___ the movie.", a: "watched", o: ["watched", "watch", "watching", "watches"] },
        { q: "They ___ in the US.", a: "studied", o: ["studied", "study", "studying", "studies"] }
    ],
    avancado: [
        { q: "If I ___ rich, I'd buy a house.", a: "were", o: ["were", "was", "am", "are"] },
        { q: "If she ___ here, she'd help.", a: "were", o: ["were", "was", "is", "are"] },
        { q: "I wish I ___ speak Spanish.", a: "could", o: ["could", "can", "will", "may"] },
        { q: "She said that she ___ tired.", a: "was", o: ["was", "is", "were", "am"] },
        { q: "The house ___ built.", a: "was", o: ["was", "is", "were", "are"] },
        { q: "If I ___ harder, I'd pass.", a: "had studied", o: ["had studied", "studied", "study", "studies"] },
        { q: "This time tomorrow, I ___ flying.", a: "will be flying", o: ["will be flying", "will fly", "am flying", "flying"] },
        { q: "It's essential that she ___ on time.", a: "arrives", o: ["arrives", "arrived", "arrive", "arriving"] },
        { q: "I demand that he ___ the truth.", a: "tell", o: ["tell", "tells", "told", "telling"] },
        { q: "You'd better ___ now.", a: "leave", o: ["leave", "to leave", "leaving", "left"] }
    ]
};

// Perguntas em FRANCÊS
const perguntasFR = {
    basico: [
        { q: "Bonjour, je m'appelle ___.", a: "Jean", o: ["Jean", "Jea", "Jon", "Jan"] },
        { q: "Comment ___ tu?", a: "vas", o: ["vas", "es", "est", "allez"] },
        { q: "Je ___ étudiant.", a: "suis", o: ["suis", "es", "est", "êtes"] },
        { q: "Elle ___ du Brésil.", a: "vient", o: ["vient", "venons", "venez", "venez"] },
        { q: "Ils ___ étudiants.", a: "sont", o: ["sont", "es", "est", "êtes"] },
        { q: "Nous ___ amis.", a: "sommes", o: ["sommes", "suis", "êtes", "sont"] },
        { q: "C'est ___ livre.", a: "un", o: ["un", "une", "des", "les"] },
        { q: "Vous ___ mon ami.", a: "êtes", o: ["êtes", "es", "est", "sommes"] },
        { q: "J'habite ___ France.", a: "en", o: ["en", "à", "dans", "sur"] },
        { q: "___ est ton nom?", a: "Quel", o: ["Quel", "Qui", "Où", "Comment"] }
    ],
    intermediario: [
        { q: "Elle ___ au magasin chaque jour.", a: "va", o: ["va", "vas", "allait", "aller"] },
        { q: "Il ___ très bien l'anglais.", a: "parle", o: ["parle", "parles", "parlé", "parler"] },
        { q: "___ tu parles français?", a: "Parles", o: ["Parles", "Parle", "Parlons", "Parlent"] },
        { q: "Je ___ habituellement du café.", a: "bois", o: ["bois", "boit", "bu", "boire"] },
        { q: "Le livre ___ sur la table.", a: "est", o: ["est", "suis", "êtes", "sont"] },
        { q: "J'ai ___ voiture.", a: "une", o: ["une", "un", "des", "les"] },
        { q: "Elle ___ deux frères.", a: "a", o: ["a", "as", "ai", "avons"] },
        { q: "Je ___ au parc hier.", a: "suis allé", o: ["suis allé", "ai allé", "suis allée", "étais allé"] },
        { q: "Elle ___ le film.", a: "a regardé", o: ["a regardé", "regarde", "regardait", "regarder"] },
        { q: "Si j'___ riche, j'achèterais une maison.", a: "étais", o: ["étais", "était", "es", "suis"] }
    ],
    avancado: [
        { q: "Si elle ___ ici, elle nous aiderait.", a: "était", o: ["était", "soit", "est", "serait"] },
        { q: "Il est temps qu'on ___ une décision.", a: "prenne", o: ["prenne", "prends", "prenant", "pris"] },
        { q: "J'attends ___ de vous.", a: "de recevoir", o: ["de recevoir", "recevoir", "recevant", "reçu"] },
        { q: "Elle a dit qu'elle ___ fatiguée.", a: "était", o: ["était", "est", "été", "étant"] },
        { q: "La maison ___ l'année dernière.", a: "a été construite", o: ["a été construite", "été construite", "est construite", "construite"] },
        { q: "Si j'___ plus, j'aurais réussi.", a: "avais étudié", o: ["avais étudié", "��tudiais", "étudie", "étudiera"] },
        { q: "À cette heure demain, je ___ à Londres.", a: "serai en train de voler", o: ["serai en train de voler", "volerai", "serai volé", "vole"] },
        { q: "D'ici un mois, j'___ ici depuis un an.", a: "aurai été", o: ["aurai été", "serai", "étais", "fus"] },
        { q: "Il est essentiel qu'elle ___ à l'heure.", a: "arrive", o: ["arrive", "arrived", "arriver", "arrivant"] },
        { q: "Tu ___ mieux partir maintenant.", a: "ferais mieux de", o: ["ferais mieux de", "mieux de partir", "mieux partir", "mieux parti"] }
    ]
};

// ===== SOM =====
function som(tipo) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        if (ctx.state === 'suspended') ctx.resume();
        if (tipo === 'acerto') {
            const osc = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const gain = ctx.createGain();
            const gain2 = ctx.createGain();
            osc.connect(gain);
            osc2.connect(gain2);
            gain.connect(ctx.destination);
            gain2.connect(ctx.destination);
            osc.type = 'sine';
            osc2.type = 'sine';
            osc.frequency.setValueAtTime(523, ctx.currentTime);
            osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
            osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
            osc2.frequency.setValueAtTime(1047, ctx.currentTime + 0.25);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
            gain2.gain.setValueAtTime(0.1, ctx.currentTime + 0.25);
            gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
            osc.start();
            osc2.start(ctx.currentTime + 0.25);
            osc.stop(ctx.currentTime + 0.4);
            osc2.stop(ctx.currentTime + 0.6);
        } else if (tipo === 'erro') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
            osc.start();
            osc.stop(ctx.currentTime + 0.4);
        } else if (tipo === 'idioma') {
            const osc = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            osc2.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc2.type = 'sine';
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            osc.frequency.setValueAtTime(1100, ctx.currentTime + 0.08);
            osc2.frequency.setValueAtTime(1320, ctx.currentTime + 0.16);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
            osc.start();
            osc2.start(ctx.currentTime + 0.16);
            osc.stop(ctx.currentTime + 0.3);
            osc2.stop(ctx.currentTime + 0.3);
        } else if (tipo === 'clique') {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, ctx.currentTime);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        }
    } catch(e) {}
}

// ===== EXPLICAÇÕES PROFESSOR JAMES (INGLÊS) =====
const explicacoesEN = {
    is: "🔹 BE (ser/estar) - Usa-se com he/she/it. Ex: 'She is a teacher' (Ela é professora). 'It is hot' (Está quente).",
    are: "🔹 BE - Usa-se com you/we/they. Ex: 'You are right' (Você está certo). 'They are students' (Eles são estudantes).",
    am: "🔹 BE - Usa-se APENAS com I. Ex: 'I am happy' (Eu estou feliz). Nunca use 'am' com outros pronomes!",
    in: "🔹 PREPOSITION 'In' = em (lugar). Usado para cidades, países, ambientes fechados. Ex: 'I live in Brazil' (Eu moro no Brasil).",
    on: "🔹 PREPOSITION 'On' = em (superfície). Ex: 'The book is on the table' (O livro está na mesa).",
    at: "🔹 PREPOSITION 'At' = em (lugar específico). Ex: 'at home' (em casa), 'at school' (na escola).",
    an: "🔹 ARTICLE 'An' = um/uma. Usa-se antes de vogal (sons vocálicos). Ex: 'an apple' (uma maçã), 'an hour' (uma hora).",
    a: "🔹 ARTICLE 'A' = um/uma. Usa-se antes de consoante. Ex: 'a book' (um livro), 'a car' (um carro).",
    What: "🔹 QUESTION WORD 'What' = o que/qual. Pergunta sobre coisas. 'What is your name?' (Qual é o seu nome?)",
    Where: "🔹 QUESTION WORD 'Where' = onde. Pergunta sobre lugar. 'Where do you live?' (Onde você mora?)",
    How: "🔹 QUESTION WORD 'How' = como. Pergunta sobre modo/condição. 'How are you?' (Como você está?)",
    goes: "🔹 GO (3ª pessoa) - 'goes'. Usado com he/she/it. Ex: 'She goes to school' (Ela vai para escola).",
    speaks: "🔹 SPEAK (3ª pessoa) - 'speaks'. Ex: 'He speaks English' (Ele fala inglês).",
    Do: "🔹 AUXILIAR 'Do' - Forma perguntas e negativas. CUIDADO: não é a resposta! 'Do you speak English?' (Você fala inglês?)",
    Does: "🔹 AUXILIAR 'Does' - Versão de Do para 3ª pessoa. 'Does she speak Portuguese?' (Ela fala português?)",
    drink: "🔹 VERB 'drink' - Beber. Presente: 'I drink coffee'. Passado: 'drank'. Ex: 'I drank water yesterday'.",
    have: "🔹 VERB 'have' - Ter (possession). Ex: 'I have a car' (Eu tenho um carro).",
    has: "🔹 VERB 'have' (3ª pessoa) - Tem. 'She has two brothers' (Ela tem dois irmãos).",
    went: "🔹 GO (passado) - 'went'. É IRREGULAR! Não é 'goed'! Ex: 'I went to the park yesterday'.",
    watched: "🔹 WATCH (passado) - 'watched'. watching = assistindo. Ex: 'I watched the movie' (Eu assisti o filme).",
    studied: "🔹 STUDY (passado) - 'studied'. studying = estudando. Ex: 'She studied in the US' (Ela estudou nos EUA).",
    was: "🔹 BE (passado) - 'was' para he/she/it. 'He was happy' (Ele estava feliz). 'She was at home'.",
    were: "🔹 BE (passado plural) - 'were' para you/we/they. 'We were in Brazil'. 'They were happy'.",
    could: "🔹 MODAL 'could' - Poder (possibilidade passada). 'I could go' (Eu poderia ir).",
    can: "🔹 MODAL 'can' - Poder/habilidade. 'I can speak English' (Eu sei falar inglês).",
    will: "🔹 MODAL 'will' - Futuro. 'I will go' (Eu vou ir). También: 'I'll help you'.",
    tell: "🔹 VERB 'tell' (3ª pessoa imperative). 'Tell the truth' (Diga a verdade). Pouco usado 'tells'.",
    arrives: "🔹 VERB 'arrive' (subjuntivo) - 'arrives'. Usado após expressões como 'it's essential that'. 'She arrives on time'.",
    leave: "🔹 VERB 'leave' - Sair/partir. 'You'd better leave now' (Você melhor ir agora).",
    had: "🔹 HAVE (passado) - 'had'. 'I had a car' (Eu tinha um carro). Passado de have.",
    were: "🔹 CONDITIONAL - 'If I were rich...' (Se eu fosse rico...). Usa 'were' não 'was' no if!",
    arrived: "🔹 ARRIVE (passado) - 'arrived'. 'He arrived late' (Ele chegou tarde)."
};

// ===== EXPLICAÇÕES PROFESSOR CROISSANT (FRANCÊS) =====
const explicacoesFR = {
    suis: "🔹 ÊTRE (sou/estou) - Usa-se com Je. Ex: 'Je suis français' (Eu sou francês). Apenas com je!",
    es: "🔹 ÊTRE (és/estás) - Usa-se com tu. Ex: 'Tu es grand' (Você é grande). Apenas com tu!",
    est: "🔹 ÊTRE (é/está) - Usa-se com il/elle. Ex: 'Il est ici' (Ele está aqui).",
    sommes: "🔹 ÊTRE (somos/estamos) - Usa-se com nous. 'Nous sommes prêts' (Estamos prontos).",
    êtes: "🔹 ÊTRE (são/estão) - Usa-se com vous/ils/elles. 'Vous êtes cool'.",
    suisAllé: "🔹 ALLER (passado) - 'suis allé(e)' = fui/fui. Verbo IRREGULAR! Ex: 'Je suis allé au parc'.",
    aiAllé: "🔹 ALLER (passado) - 'ai allé(e)' = fui/fui. Use com Je. 'Je suis allé' ou 'Je suis allée'.",
    aRegardé: "🔹 REGARDER (passado) - 'a regardé' = assistiu. Passé composé. 'Elle a regardé le film'.",
    vient: "🔹 VENIR (3ª pessoa) - 'vient' = vem/vem de. 'Elle vient du Brésil' (Ela vem do Brasil).",
    vas: "🔹 ALLER (presente) - 'vas' = vai (tu). 'Comment vas-tu?' (Como você está?). Formal!",
    va: "🔹 ALLER (presente) - 'va' = vai (il/elle). 'Il va bien' (Ele vai bem).",
    allons: "🔹 ALLER (presente) - 'allons' = vamos (nous). 'Nous allons diner' (Vamos jantar).",
    allez: "🔹 ALLER (presente) - 'allez' = vão/vão. 'Vous allez bien?' (Vocês vão bem?).",
    parle: "🔹 PARLER (presente) - 'parle' = fala (je/tu/il/elle). 'Il parle français' (Ele fala francês).",
    parles: "🔹 PARLER (presente tu) - 'parles' = fala (tu). 'Tu parles portugais?' (Você fala português?).",
    parlons: "🔹 PARLER (presente nous) - 'parlons' = falamos. 'Nous parlons anglais'.",
    parlent: "🔹 PARLER (presente ils/elles) - 'parlent' = falam. 'Ils parlent espagnol'.",
    bois: "🔹 BOIRE (presente) - 'bois' = bebo/bebe/tu. 'Je bois du café' (Eu bebo café).",
    boi: "🔹 BOIRE (passado) - 'bû' = bebido. Passé composé. 'J'ai bu' (Eu bebi).",
    ai: "🔹 AVOIR (presente) - 'ai' = tenho (je). 'J'ai une voiture' (Eu tenho um carro).",
    as: "🔹 AVOIR (presente) - 'as' = tens (tu). 'Tu as un chien?' (Você tem um cachorro?).",
    a: "🔹 AVOIR (presente) - 'a' = tem (il/elle). 'Elle a trois frères'.",
    avons: "🔹 AVOIR (presente) - 'avons' = temos (nous). 'Nous avons fini'.",
    avez: "🔹 AVOIR (presente) - 'avez' = têm (vous). 'Vous avez raison'.",
    ont: "🔹 AVOIR (presente) - 'ont' = têm (ils/elles). 'Ils ont faim'.",
    étais: "🔹 ÊTRE (passado) - 'étais' = era/estava (je/tu). 'J'étais fatigué'.",
    était: "🔹 ÊTRE (passado) - 'était' = era/estava (il/elle). 'Elle était contente'.",
    était: "🔹 CONDITIONNEL - 'si + imparfait': 'Si j'étais riche...' (Se eu fosse rico...).",
    serait: "🔹 CONDITIONNEL - 'serait' = seria. 'Il serait content'. Para hipótese.",
    était: "🔹 PASSIF COMPOSÉ - usa-se avoir. 'Elle a été' (Ela foi/foi stata).",
    pris: "🔹 PRENDRE (passado) - 'pris' = tomei/tirei. 'J'ai pris le petit-déjeuner'.",
    prise: "🔹 PRENDRE (passado fem) - 'prise'. 'La décision a été prise' (A decisão foi tomada).",
    pris: "🔹 APPRENDRE (passado) - 'appris' = aprendi. 'J'ai appris le français'.",
    comprise: "🔹 COMPRENDRE (passado) - 'compris(e)' = entendi. 'J'ai compris!' (Entendi!).",
    faite: "🔹 FAIRE (passado) - 'fait(e)' = fatto. 'Le travail est fait' (O trabalho está fatto).",
    allais: "🔹 ALLER (imparfait) - 'allais' = ia. 'Je allais à l'école' (Eu ia para a escola).",
    irais: "🔹 CONDITIONNEL - 'irais' =aria. 'J'irais au Japon' (Euaria ao Japão)."
};

function getExplicacao(resposta) {
    const isFr = currentLang === 'fr';
    const explicacoes = isFr ? explicacoesFR : explicacoesEN;
    const resp = resposta.toLowerCase().trim();
    
    // Verifica match exato primeiro
    if (explicacoes[resp]) return explicacoes[resp];
    
    // Para respostas com espaços (like "will be flying", "had studied"), procura cada palavra
    const palavras = resp.split(' ');
    for (const palavra of palavras) {
        if (explicacoes[palavra]) return explicacoes[palavra];
    }
    
    // Fallback: mostra dicinha genérica baseada no padrão
    if (resp.includes('ed') && !isFr) {
        return "🔹 PASSADO - Verbos em '-ed' são passado simples! Ex: 'walked', 'talked', 'played'.";
    }
    if (resp.includes('ing') && !isFr) {
        return "🔹 ING - Pode ser gerúndio ou adjetivo. 'I am walking' (andando) vs 'interesting' (interessante).";
    }
    if (resp.includes('s') && resp.length > 2 && !isFr) {
        return "🔹 3ª PESSOA - Verbos com 's' no final são 3ª pessoa (he/she/it).";
    }
    
    // Fallback genérico
    return isFr 
        ? "📚 Dica: Estude este padrão gramática! Continue praticando."
        : "📚 Tip: Study this grammar pattern! Keep practicing.";
}

function abrirExplicacao() {
    if (!currentQ) return;
    const isFr = currentLang === 'fr';
    const professor = isFr ? '🥐 Professor Croissant' : '🧑‍🏫 Professor James';
    const exp = getExplicacao(currentQ.resposta);
    document.getElementById('result').innerHTML = `
        <div style="background:#252525; padding:12px; border-radius:10px; margin-top:12px;">
            <p><strong>${professor}:</strong></p>
            <p style="margin-top:8px; color:var(--primary);">${exp}</p>
            <button onclick="loadQuestion()" style="background:var(--primary); color:#000; border:none; padding:8px 16px; border-radius:8px; margin-top:12px; cursor:pointer;">Próxima →</button>
        </div>
    `;
}

let audioAtivado = false;
function ativarAudio() {
    if (!audioAtivado) { audioAtivado = true; som('teste'); }
}

// ===== ESTADO =====
let user = { 
    nome: '', avatar: '😀', xp: 0, streak: 0, hearts: 5, 
    nivelEn: '-', nivelFr: '-',
    testeFeitoEn: false, testeFeitoFr: false,
    testeEtapaEn: 0, testeEtapaFr: 0,
    testeAcertosEn: 0, testeAcertosFr: 0,
    testeIndexEn: 0, testeIndexFr: 0
};
let currentLang = 'en';
let currentQ = null;

// ===== INIT =====
function init() {
    // Reset se dados estiverem corrompidos
    try {
        const saved = localStorage.getItem('fnfipf_user');
        if (saved) JSON.parse(saved);
    } catch(e) {
        localStorage.removeItem('fnfipf_user');
    }
    
    loadUser();
    updateDisplay();
    
    const testFeito = currentLang === 'fr' ? user.testeFeitoFr : user.testeFeitoEn;
    if (!testFeito) {
        document.getElementById('no-test-msg').style.display = 'block';
        document.getElementById('lesson-content').style.display = 'none';
    } else {
        document.getElementById('no-test-msg').style.display = 'none';
        document.getElementById('lesson-content').style.display = 'block';
        loadQuestion();
    }
    document.getElementById('avatar-display').textContent = user.avatar;
    document.getElementById('nome-input').value = user.nome || '';
    document.getElementById('home').style.display = 'block';
    
    // Aplica traduções do idioma atual
    trocarIdioma(currentLang);
}

// ===== STORAGE =====
function loadUser() {
    const saved = localStorage.getItem('fnfipf_user');
    if (saved) { try { user = JSON.parse(saved); } catch(e) {} }
    const lang = localStorage.getItem('fnfipf_lang');
    if (lang) currentLang = lang;
}

function saveUser() {
    localStorage.setItem('fnfipf_user', JSON.stringify(user));
}

function saveLang() {
    localStorage.setItem('fnfipf_lang', currentLang);
}

// ===== DISPLAY =====
function updateDisplay() {
    document.getElementById('xp').textContent = user.xp;
    document.getElementById('streak').textContent = user.streak;
    document.getElementById('hearts').textContent = user.hearts;
    document.getElementById('xp-bar').style.width = (user.xp % 1000) / 10 + '%';
    document.getElementById('profile-xp').textContent = user.xp;
    document.getElementById('profile-streak').textContent = user.streak;
    document.getElementById('profile-hearts').textContent = user.hearts;
    const nivel = currentLang === 'fr' ? user.nivelFr : user.nivelEn;
    const testFeito = currentLang === 'fr' ? user.testeFeitoFr : user.testeFeitoEn;
    document.getElementById('profile-level').textContent = nivel || '-';
    document.getElementById('profile-test').textContent = testFeito ? 'Concluído' : 'Não feito';
    
    // Updates language buttons
    document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
    document.getElementById('lang-fr').classList.toggle('active', currentLang === 'fr');
    document.getElementById('lang-en').setAttribute('aria-pressed', currentLang === 'en');
    document.getElementById('lang-fr').setAttribute('aria-pressed', currentLang === 'fr');
}

// ===== NAVEGAÇÃO =====
function mostrar(id) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('test').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    document.getElementById(id).style.display = 'block';
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    // Atualiza botão ativo se existir event
    if (typeof event !== 'undefined' && event.target) {
        const btn = event.target.closest('.nav-btn');
        if (btn) btn.classList.add('active');
    }
}

// ===== IDIOMA =====
function trocarIdioma(lang) {
    const langChanged = currentLang !== lang;
    currentLang = lang;
    saveLang();
    updateDisplay();
    if (langChanged) som('idioma');
    const isFr = lang === 'fr';
    if (user.testFeito) loadQuestion();
    document.getElementById('lesson-title').textContent = isFr ? 'Leçon du Jour' : 'Daily Lesson';
    document.getElementById('profile-title').textContent = isFr ? 'Mon Profil' : 'My Profile';
    document.getElementById('test-title').innerHTML = isFr ? '📋 Test de Positionnement' : '📋 Placement Test';
    document.getElementById('no-test-text').textContent = isFr ? "⚠️ Vous n'avez pas encore passé le test." : "⚠️ You haven't taken the test yet.";
    document.getElementById('no-test-btn').textContent = isFr ? '📋 Passer le Test' : '📋 Take Test';
    document.getElementById('test-desc').innerHTML = isFr
        ? 'Répondez à 10 questions.<br>Pour passer: au moins 7 bonnes.<br>3 étapes: Basique → Intermédiaire → Avancé'
        : 'Answer 10 questions.<br>To pass: at least 7 correct.<br>3 stages: Basic → Intermediate → Advanced';
    document.getElementById('avatar-hint').textContent = isFr ? 'Cliquez sur avatar pour changer' : 'Click avatar to change';
    document.getElementById('nome-input').placeholder = isFr ? 'Votre nom' : 'Your name';
    document.getElementById('profile-xp-label').textContent = isFr ? 'XP:' : 'XP:';
    document.getElementById('profile-streak-label').textContent = isFr ? 'Série:' : 'Streak:';
    document.getElementById('profile-streak-days').textContent = isFr ? 'jours' : 'days';
    document.getElementById('profile-hearts-label').textContent = isFr ? 'Vies:' : 'Hearts:';
    document.getElementById('profile-level-label').textContent = isFr ? 'Niveau:' : 'Level:';
    document.getElementById('profile-test-label').textContent = isFr ? 'Test:' : 'Test:';
    document.getElementById('profile-test-btn').textContent = isFr ? '📋 Passer le Test' : '📋 Take Test';
    document.getElementById('profile-reset-btn').textContent = isFr ? '🔄 Réinitialiser' : '🔄 Reset';
    const testFeito = isFr ? user.testeFeitoFr : user.testeFeitoEn;
    const nivel = isFr ? user.nivelFr : user.nivelEn;
    document.getElementById('profile-level').textContent = nivel || '-';
    document.getElementById('profile-test').textContent = testFeito ? (isFr ? 'Terminé' : 'Done') : (isFr ? 'Non fait' : 'Not done');
    document.getElementById('avatar-selector-title').textContent = isFr ? 'Choisissez Avatar' : 'Choose Avatar';
    document.getElementById('avatar-selector-cancel').textContent = isFr ? 'Annuler' : 'Cancel';
    if (document.getElementById('test').style.display !== 'none') {
        loadPerguntaTeste();
    }
}

// ===== PERFIL =====
function mostrarAvatarSelector() {
    const grid = document.getElementById('avatar-grid');
    grid.innerHTML = '';
    avatares.forEach((avatar, idx) => {
        const btn = document.createElement('button');
        btn.textContent = avatar;
        btn.style.cssText = 'font-size:2rem; background:var(--bg); border:2px solid var(--border); border-radius:8px; padding:8px; cursor:pointer;';
        btn.onclick = () => { selecionarAvatar(idx); };
        grid.appendChild(btn);
    });
    document.getElementById('avatar-selector').style.display = 'flex';
}

function selecionarAvatar(idx) {
    user.avatar = avatares[idx];
    saveUser();
    document.getElementById('avatar-display').textContent = user.avatar;
    fecharAvatarSelector();
}

function fecharAvatarSelector() {
    document.getElementById('avatar-selector').style.display = 'none';
}

function salvarNome() {
    const nome = document.getElementById('nome-input').value.trim().toLowerCase();
    user.nome = nome;
    saveUser();
    
    // easter eggs
    if (nome === 'victor frois') {
        user.avatar = '😈';
        saveUser();
        document.getElementById('avatar-display').textContent = user.avatar;
        document.getElementById('result').innerHTML = '<div style="background:var(--success-bg); color:var(--success); padding:12px; border-radius:10px; text-align:center;">😈 emo mode activated</div>';
    }
    else if (nome === 'stezinha gameplays') {
        user.avatar = '💗';
        saveUser();
        document.getElementById('avatar-display').textContent = user.avatar;
        som('acerto');
        setTimeout(() => {
            alert('vc é linda 💗');
        }, 300);
    }
}

function resetar() {
    if (confirm('Tem certeza? Tudo será perdido.')) {
        user = { 
            nome: '', avatar: '😀', xp: 0, streak: 0, hearts: 5,
            nivelEn: '-', nivelFr: '-',
            testeFeitoEn: false, testeFeitoFr: false,
            testeEtapaEn: 0, testeEtapaFr: 0,
            testeAcertosEn: 0, testeAcertosFr: 0,
            testeIndexEn: 0, testeIndexFr: 0
        };
        saveUser();
        location.reload();
    }
}

// ===== PERGUNTAS =====
function loadQuestion() {
    const testFeito = currentLang === 'fr' ? user.testeFeitoFr : user.testeFeitoEn;
    if (!testFeito) {
        document.getElementById('question').innerHTML = '<strong>⚠️ Faça o teste primeiro!</strong>';
        document.getElementById('question').innerHTML += '<button class="btn" onclick="mostrar(\'test\')">📋 Fazer Teste</button>';
        document.getElementById('options').style.display = 'none';
        return;
    }
    const nivelKeys = ['basico', 'intermediario', 'avancado'];
    const testeEtapa = currentLang === 'fr' ? user.testeEtapaFr : user.testeEtapaEn;
    const nivelIndex = testeEtapa || 0;
    const nivel = nivelKeys[nivelIndex] || 'basico';
    const nivelLabel = currentLang === 'fr' ? user.nivelFr : user.nivelEn;
    const lista = currentLang === 'fr' ? perguntasFR[nivel] : perguntas[nivel];
    const randomQ = Math.floor(Math.random() * lista.length);
    const p = lista[randomQ];
    const opts = [...p.o].sort(() => Math.random() - 0.5);
    currentQ = { resposta: p.a, nivel: nivel, lang: currentLang };
    document.getElementById('question').innerHTML = `<p>${p.q}</p><small style="color:var(--primary)">${nivelLabel}</small>`;
    document.getElementById('options').style.display = 'grid';
    const btns = document.querySelectorAll('#options button');
    btns.forEach((btn, i) => {
        btn.textContent = opts[i];
        btn.classList.remove('correct', 'wrong');
        btn.classList.add('option');
        btn.disabled = false;
    });
    document.getElementById('result').textContent = '';
}

function responder(btn) {
    if (!currentQ) return;
    const btns = document.querySelectorAll('#options button');
    btns.forEach(b => b.disabled = true);
    if (btn.textContent === currentQ.resposta) {
        btn.classList.add('correct');
        user.xp += 10;
        som('acerto');
        document.getElementById('result').innerHTML = `
            <div style="background:var(--primary); color:#000; padding:12px; border-radius:10px; margin-top:12px;">
                <strong>🎉 Você acertou!</strong>
            </div>
            <button onclick="loadQuestion()" style="background:#333; color:#fff; border:none; padding:10px 16px; border-radius:8px; margin-top:12px; cursor:pointer;">Próxima →</button>
        `;
    } else {
        btn.classList.add('wrong');
        som('erro');
        btns.forEach(b => { if (b.textContent === currentQ.resposta) b.classList.add('correct'); });
        document.getElementById('result').innerHTML = `
            <div style="background:#ef4444; color:#fff; padding:12px; border-radius:10px; margin-top:12px;">
                <strong>❌ Você errou!</strong>
                <p style="margin-top:8px;">Resposta: <strong>${currentQ.resposta}</strong></p>
            </div>
            <button onclick="abrirExplicacao()" style="background:var(--secondary); color:#fff; border:none; padding:10px 16px; border-radius:8px; margin-top:12px; cursor:pointer;">💬 Entender</button>
        `;
    }
    saveUser();
    updateDisplay();
}

// ===== TESTE =====
function iniciarTeste() {
    if (currentLang === 'fr') {
        user.testeEtapaFr = 0;
        user.testeAcertosFr = 0;
        user.testeIndexFr = 0;
    } else {
        user.testeEtapaEn = 0;
        user.testeAcertosEn = 0;
        user.testeIndexEn = 0;
    }
    document.getElementById('test').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    document.getElementById('test-question').textContent = '';
    document.getElementById('test-options').style.display = 'none';
    document.getElementById('test-progress').style.width = '0%';
    loadPerguntaTeste();
}

function loadPerguntaTeste() {
    const isFr = currentLang === 'fr';
    const testeEtapa = isFr ? user.testeEtapaFr : user.testeEtapaEn;
    const testeIndex = isFr ? user.testeIndexFr : user.testeIndexEn;
    const testeAcertos = isFr ? user.testeAcertosFr : user.testeAcertosEn;
    
    const etapa = etapas[testeEtapa];
    const lista = isFr ? perguntasFR[etapa] : perguntas[etapa];
    if (testeIndex >= lista.length) {
        if (testeAcertos >= 7) {
            if (testeEtapa < 2) {
                const nextEtapa = etapas[testeEtapa + 1];
                document.getElementById('test-question').innerHTML = `<h3>🎉 Passou de Fase!</h3><p>Próxima: ${nextEtapa}</p>`;
                document.getElementById('test-options').style.display = 'none';
                document.getElementById('next-test-btn').style.display = 'block';
            } else {
                if (isFr) {
                    user.testeFeitoFr = true;
                    user.nivelFr = 'Fluente';
                    user.testeEtapaFr = 3;
                } else {
                    user.testeFeitoEn = true;
                    user.nivelEn = 'Fluente';
                    user.testeEtapaEn = 3;
                }
                saveUser();
                document.getElementById('test-question').innerHTML = '<h3>🏆 Teste Concluído!</h3><p>Nível: Fluente</p>';
                setTimeout(() => { location.reload(); }, 2000);
            }
        } else {
            const nivelFinal = nivelMap[etapa] || 'Básico';
            if (isFr) {
                user.testeFeitoFr = true;
                user.nivelFr = nivelFinal;
            } else {
                user.testeFeitoEn = true;
                user.nivelEn = nivelFinal;
            }
            saveUser();
            document.getElementById('test-question').innerHTML = `<h3>🏆 Teste Concluído!</h3><p>Seu nível: <strong>${nivelFinal}</strong></p>`;
            setTimeout(() => { location.reload(); }, 2500);
        }
        return;
    }
    const p = lista[testeIndex];
    const opts = [...p.o].sort(() => Math.random() - 0.5);
    currentQ = { resposta: p.a, lang: currentLang };
    document.getElementById('test-progress').style.width = (testeIndex / lista.length * 100) + '%';
    document.getElementById('test-question').innerHTML = `<p>${p.q}</p><small>${etapa} • ${testeIndex + 1}/${lista.length}</small>`;
    document.getElementById('test-options').style.display = 'grid';
    const btns = document.querySelectorAll('#test-options button');
    btns.forEach((btn, i) => {
        btn.textContent = opts[i];
        btn.classList.remove('correct', 'wrong');
        btn.classList.add('option');
        btn.disabled = false;
    });
    document.getElementById('test-result').textContent = '';
    document.getElementById('start-test-btn').style.display = 'none';
}

function responderTeste(btn) {
    if (!currentQ) return;
    const btns = document.querySelectorAll('#test-options button');
    btns.forEach(b => b.disabled = true);
    const isFr = currentLang === 'fr';
    if (btn.textContent === currentQ.resposta) {
        btn.classList.add('correct');
        if (isFr) user.testeAcertosFr++; else user.testeAcertosEn++;
        som('acerto');
        document.getElementById('test-result').innerHTML = '✅ Correto!';
    } else {
        btn.classList.add('wrong');
        som('erro');
        btns.forEach(b => { if (b.textContent === currentQ.resposta) b.classList.add('correct'); });
        document.getElementById('test-result').innerHTML = '❌ ' + currentQ.resposta;
    }
    if (isFr) user.testeIndexFr++; else user.testeIndexEn++;
    saveUser();
    setTimeout(loadPerguntaTeste, 1200);
}

function proximaEtapa() {
    const isFr = currentLang === 'fr';
    if (isFr) {
        user.testeEtapaFr++;
        user.testeIndexFr = 0;
        user.testeAcertosFr = 0;
    } else {
        user.testeEtapaEn++;
        user.testeIndexEn = 0;
        user.testeAcertosEn = 0;
    }
    document.getElementById('next-test-btn').style.display = 'none';
    saveUser();
    loadPerguntaTeste();
}

// ===== INICIA =====
init();