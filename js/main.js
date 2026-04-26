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

// ===== EXPLICAÇÕES =====
const explicacoes = {
    is: "Use 'is' com he/she/it", are: "Use 'are' com you/we/they", am: "Use 'am' com I",
    in: "In = em (lugar)", on: "On = em (superfície)", at: "At = em (lugar específico)",
    an: "An antes de vogal", a: "A antes de consoante", What: "What = o que/qual",
    Where: "Where = onde", goes: "Goes = 3ª pessoa de go", speaks: "Speaks = 3ª pessoa de speak",
    Do: "Do = auxiliar", drink: "Drink = beber", have: "Have = ter", has: "Has = ele/ela tem",
    went: "Went = passado de go", watched: "Watched = passado de watch",
    studied: "Studied = passado de study", was: "Was = passado de be (he/she/it)",
    were: "Were = passado plural de be", can: "Can = poder", will: "Will = futuro",
    were: "Were = Condicional com if"
};

function getExplicacao(resposta) {
    for (const [key, valor] of Object.entries(explicacoes)) {
        if (resposta.includes(key)) return valor;
    }
    return "Pratique esse padrão!";
}

function abrirExplicacao() {
    if (!currentQ) return;
    const exp = getExplicacao(currentQ.resposta);
    document.getElementById('result').innerHTML = `
        <div style="background:#252525; padding:12px; border-radius:10px; margin-top:12px;">
            <p><strong>💬 Professor James:</strong></p>
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
let user = { nome: '', avatar: '😀', xp: 0, streak: 0, hearts: 5, nivel: '-', testFeito: false, testeEtapa: 0, testeAcertos: 0, testeIndex: 0 };
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
    if (!user.testFeito) {
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
    document.getElementById('profile-level').textContent = user.nivel;
    document.getElementById('profile-test').textContent = user.testFeito ? 'Concluído' : 'Não feito';
    document.getElementById('lang').value = currentLang;
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
    document.getElementById('lesson-title').textContent = isFr ? 'Leçon du Jour' : 'Lição do Dia';
    document.getElementById('profile-title').textContent = isFr ? 'Mon Profil' : 'Meu Perfil';
    document.getElementById('test-title').innerHTML = isFr ? '📋 Test de Positionnement' : '📋 Teste de Nivelamento';
    document.getElementById('test-desc').innerHTML = isFr
        ? 'Responda 10 perguntas.<br>Para passar: pelo menos 7 acertos.<br>3 etapas: Básico → Intermediário → Avançado'
        : 'Responda 10 perguntas.<br>Para passar: pelo menos 7 acertos.<br>3 etapas: Básico → Intermediário → Avançado';
    if (document.getElementById('test').style.display !== 'none') {
        loadPerguntaTeste();
    }
}

// ===== PERFIL =====
function editarAvatar() {
    const escolha = prompt('Escolha (0-' + (avatares.length-1) + '):\n' + avatares.map((a,i) => i + ' ' + a).join('\n'));
    const idx = parseInt(escolha);
    if (idx >= 0 && idx < avatares.length) {
        user.avatar = avatares[idx];
        saveUser();
        document.getElementById('avatar-display').textContent = user.avatar;
    }
}

function salvarNome() {
    user.nome = document.getElementById('nome-input').value.trim();
    saveUser();
}

function resetar() {
    if (confirm('Tem certeza? Tudo será perdido.')) {
        user = { nome: '', avatar: '😀', xp: 0, streak: 0, hearts: 5, nivel: '-', testFeito: false, testeEtapa: 0, testeAcertos: 0, testeIndex: 0 };
        saveUser();
        location.reload();
    }
}

// ===== PERGUNTAS =====
function loadQuestion() {
    if (!user.testFeito) {
        document.getElementById('question').innerHTML = '<strong>⚠️ Faça o teste primeiro!</strong>';
        document.getElementById('question').innerHTML += '<button class="btn" onclick="mostrar(\'test\')">📋 Fazer Teste</button>';
        document.getElementById('options').style.display = 'none';
        return;
    }
    const nivelKeys = ['basico', 'intermediario', 'avancado'];
    const nivelIndex = user.testeEtapa || 0;
    const nivel = nivelKeys[nivelIndex] || 'basico';
    const lista = currentLang === 'fr' ? perguntasFR[nivel] : perguntas[nivel];
    const randomQ = Math.floor(Math.random() * lista.length);
    const p = lista[randomQ];
    const opts = [...p.o].sort(() => Math.random() - 0.5);
    currentQ = { resposta: p.a, nivel: nivel };
    document.getElementById('question').innerHTML = `<p>${p.q}</p><small style="color:var(--primary)">${nivelMap[nivel]}</small>`;
    document.getElementById('options').style.display = 'grid';
    const btns = document.querySelectorAll('#options button');
    btns.forEach((btn, i) => {
        btn.textContent = opts[i];
        btn.classList.remove('correct', 'wrong');
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
    user.testeEtapa = 0;
    user.testeAcertos = 0;
    user.testeIndex = 0;
    document.getElementById('test').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    document.getElementById('test-question').textContent = '';
    document.getElementById('test-options').style.display = 'none';
    document.getElementById('test-progress').style.width = '0%';
    loadPerguntaTeste();
}

function loadPerguntaTeste() {
    const etapa = etapas[user.testeEtapa];
    const lista = currentLang === 'fr' ? perguntasFR[etapa] : perguntas[etapa];
    if (user.testeIndex >= lista.length) {
        if (user.testeAcertos >= 7) {
            if (user.testeEtapa < 2) {
                const nextEtapa = etapas[user.testeEtapa + 1];
                document.getElementById('test-question').innerHTML = `<h3>🎉 Passou de Fase!</h3><p>Próxima: ${nextEtapa}</p>`;
                document.getElementById('test-options').style.display = 'none';
                document.getElementById('next-test-btn').style.display = 'block';
            } else {
                user.testFeito = true;
                user.nivel = 'Fluente';
                user.testeEtapa = 3;
                saveUser();
                document.getElementById('test-question').innerHTML = '<h3>🏆 Teste Concluído!</h3><p>Nível: Fluente</p>';
                setTimeout(() => { location.reload(); }, 2000);
            }
        } else {
            user.testFeito = true;
            user.nivel = nivelMap[etapa] || 'Básico';
            saveUser();
            document.getElementById('test-question').innerHTML = `<h3>🏆 Teste Concluído!</h3><p>Seu nível: <strong>${user.nivel}</strong></p>`;
            setTimeout(() => { location.reload(); }, 2500);
        }
        return;
    }
    const p = lista[user.testeIndex];
    const opts = [...p.o].sort(() => Math.random() - 0.5);
    currentQ = { resposta: p.a };
    document.getElementById('test-progress').style.width = (user.testeIndex / lista.length * 100) + '%';
    document.getElementById('test-question').innerHTML = `<p>${p.q}</p><small>${etapa} • ${user.testeIndex + 1}/${lista.length}</small>`;
    document.getElementById('test-options').style.display = 'grid';
    const btns = document.querySelectorAll('#test-options button');
    btns.forEach((btn, i) => {
        btn.textContent = opts[i];
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });
    document.getElementById('test-result').textContent = '';
    document.getElementById('start-test-btn').style.display = 'none';
}

function responderTeste(btn) {
    if (!currentQ) return;
    const btns = document.querySelectorAll('#test-options button');
    btns.forEach(b => b.disabled = true);
    if (btn.textContent === currentQ.resposta) {
        btn.classList.add('correct');
        user.testeAcertos++;
        som('acerto');
        document.getElementById('test-result').innerHTML = '✅ Correto!';
    } else {
        btn.classList.add('wrong');
        som('erro');
        btns.forEach(b => { if (b.textContent === currentQ.resposta) b.classList.add('correct'); });
        document.getElementById('test-result').innerHTML = '❌ ' + currentQ.resposta;
    }
    user.testeIndex++;
    setTimeout(loadPerguntaTeste, 1200);
}

function proximaEtapa() {
    user.testeEtapa++;
    user.testeIndex = 0;
    user.testeAcertos = 0;
    const nivelKeys = ['basico', 'intermediario', 'avancado'];
    if (user.testeEtapa < 3) user.nivel = nivelMap[nivelKeys[user.testeEtapa]];
    document.getElementById('next-test-btn').style.display = 'none';
    loadPerguntaTeste();
}

// ===== INICIA =====
init();