/* FNFIPF - JavaScript Simples e Funcional */

// ===== SOM =====
function som(tipo) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        // Resume context se necessário (para browsers que bloqueiam autoplay)
        if (ctx.state === 'suspended') {
            ctx.resume();
        }
        
        if (tipo === 'acerto') {
            osc.frequency.setValueAtTime(523, ctx.currentTime);
            osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
            osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
            osc.start();
            osc.stop(ctx.currentTime + 0.4);
        } else {
            osc.frequency.setValueAtTime(200, ctx.currentTime);
            osc.frequency.setValueAtTime(150, ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.2, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
            osc.start();
            osc.stop(ctx.currentTime + 0.4);
        }
    } catch(e) {}
}

// Primeiro som executado precisa ativar o audio context
let audioAtivado = false;
function ativarAudio() {
    if (!audioAtivado) {
        audioAtivado = true;
        som('teste'); // Som de teste só pra ativar
    }
}

// ===== EXPLICAÇÕES DO PROFESSOR JAMES =====
const explicacoes = {
    is: "Use 'is' com he/she/it (ele/ela é/está)",
    are: "Use 'are' com you/we/they (você/nós/eles são/estão)",
    am: "Use 'am' com I (eu sou/estou)",
    in: "In = em (lugar fechado/país)",
    on: "On = em (superfície)",
    at: "At = em (lugar específico)",
    an: "An antes de vogal (a, e, i, o)",
    a: "A antes de consoante",
    What: "What = o que/qual",
    Where: "Where = onde (lugar)",
    goes: "Goes = 3ª pessoa de 'go' (ir)",
    speaks: "Speaks = 3ª pessoa de 'speak' (falar)",
    Do: "Do = auxiliar para perguntas",
    Does: "Does = 3ª pessoa de 'do'",
    drink: "Drink = beber (forma base)",
    have: "Have = ter (posses)",
    has: "Has = ele/ela tem",
    went: "Went = passado de 'go' (ir)",
    watched: "Watched = passado de 'watch' (assistir)",
    studied: "Studied = passado de 'study' (estudar)",
    was: "Was = passado de 'be' (he/she/it)",
    were: "Were = passado plural de 'be'",
    can: "Can = poder (habilidade presente)",
    will: "Will = futuro (vai/fará)",
    were: "Were = Condicional com 'if'"
};

function getExplicacao(resposta) {
    for (const [key, valor] of Object.entries(explicacoes)) {
        if (resposta.includes(key)) return valor;
    }
    return "Pratique esse padrão para fixar!";
}

function abrirExplicacao() {
    if (!currentQ) return;
    const exp = getExplicacao(currentQ.resposta);
    document.getElementById('result').innerHTML = `
        <div style="background:#252525; padding:12px; border-radius:10px; margin-top:12px; text-align:left;">
            <p><strong>💬 Professor James explica:</strong></p>
            <p style="margin-top:8px; color:var(--primary);">${exp}</p>
            <button onclick="loadQuestion()" style="background:var(--primary); color:#000; border:none; padding:8px 16px; border-radius:8px; margin-top:12px; cursor:pointer;">Próxima →</button>
        </div>
    `;
}

// ===== DADOS =====
const idiomas = {
    en: 'English',
    fr: 'Français'
};

const avatares = ['😀', '😎', '🤓', '🥳', '😇', '🤔', '😸', '😺', '🦊', '🐱', '🦁', '🐼'];

// Níveis baseados no progresso do teste
const nivelMap = {
    'basico': 'Básico',
    'intermediario': 'Intermediário',
    'avancado': 'Avançado',
    'Fluente': 'Fluente'
};

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
        { q: "He ___ a teacher.", a: "is", o: ["is", "are", "am", "be"] },
        { q: "I live ___ Brazil.", a: "in", o: ["in", "on", "at", "to"] },
        { q: "___ is your name?", a: "What", o: ["What", "Who", "Where", "How"] },
        { q: "___ are you from?", a: "Where", o: ["Where", "What", "Who", "How"] },
        { q: "I ___ 25 years old.", a: "am", o: ["am", "is", "are", "be"] },
        { q: "She works ___ a bank.", a: "at", o: ["at", "in", "on", "to"] },
        { q: "I need ___ apple.", a: "an", o: ["an", "a", "the", "some"] }
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
        { q: "They ___ in the US.", a: "studied", o: ["studied", "study", "studying", "studies"] },
        { q: "It ___ very cold.", a: "was", o: ["was", "is", "were", "been"] },
        { q: "She ___ tired.", a: "was", o: ["was", "is", "were", "am"] },
        { q: "You ___ speak well.", a: "can", o: ["can", "could", "will", "would"] },
        { q: "I think she ___ come.", a: "will", o: ["will", "would", "can", "could"] },
        { q: "I ___ to Brazil.", a: "went", o: ["went", "have been", "been", "was"] }
    ],
    avancado: [
        { q: "If I ___ rich, I'd buy a house.", a: "were", o: ["were", "was", "am", "are"] },
        { q: "If she ___ here, she'd help.", a: "were", o: ["were", "was", "is", "are"] },
        { q: "I wish I ___ speak Spanish.", a: "could", o: ["could", "can", "will", "may"] },
        { q: "She said that she ___ tired.", a: "was", o: ["was", "is", "were", "am"] },
        { q: "The house ___ built.", a: "was", o: ["was", "is", "were", "are"] },
        { q: "If I ___ harder, I'd pass.", a: "had studied", o: ["had studied", "studied", "study", "studies"] },
        { q: "This time tomorrow, I ___ flying.", a: "will be flying", o: ["will be flying", "will fly", "am flying", "flying"] },
        { q: "By next month, I ___ here.", a: "will have been", o: ["will have been", "will be", "am", "was"] },
        { q: "It's essential that she ___ on time.", a: "arrives", o: ["arrives", "arrived", "arrive", "arriving"] },
        { q: "I demand that he ___ the truth.", a: "tell", o: ["tell", "tells", "told", "telling"] },
        { q: "You'd better ___ now.", a: "leave", o: ["leave", "to leave", "leaving", "left"] },
        { q: "She ___ be the manager.", a: "might", o: ["might", "can", "must", "will"] },
        { q: "I wish I ___ that.", a: "hadn't said", o: ["hadn't said", "didn't say", "don't say", "haven't said"] },
        { q: "If only she ___ first.", a: "had known", o: ["had known", "knew", "know", "known"] },
        { q: "She acts as if she ___ the owner.", a: "was", o: ["was", "is", "were", "are"] }
    ]
};

const etapas = ['basico', 'intermediario', 'avancado'];
const acertosNecessarios = 10;

// ===== ESTADO =====
let user = {
    nome: '',
    avatar: '😀',
    xp: 0,
    streak: 0,
    hearts: 5,
    nivel: '-',
    testFeito: false,
    testeEtapa: 0,
    testeAcertos: 0,
    testeIndex: 0
};

let currentLang = 'en';
let currentQ = null;

// ===== INICIALIZAÇÃO =====
function init() {
    loadUser();
    updateDisplay();
    
    // Configura home baseado no teste
    if (!user.testFeito) {
        document.getElementById('no-test-msg').style.display = 'block';
        document.getElementById('lesson-content').style.display = 'none';
    } else {
        document.getElementById('no-test-msg').style.display = 'none';
        document.getElementById('lesson-content').style.display = 'block';
        loadQuestion();
    }
    
    // Configura avatar e nome no perfil
    document.getElementById('avatar-display').textContent = user.avatar;
    document.getElementById('nome-input').value = user.nome || '';
    
    mostrar('home');
}

// ===== STORAGE =====
function loadUser() {
    const saved = localStorage.getItem('fnfipf_user');
    if (saved) {
        try {
            user = JSON.parse(saved);
        } catch(e) {
            console.log('Erro ao carregar:', e);
        }
    }
    
    // Carrega idioma
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
    event.target.closest('.nav-btn')?.classList.add('active');
}

// ===== trocarIdioma =====
function trocarIdioma(lang) {
    currentLang = lang;
    saveLang();
    updateDisplay();
}

// ===== LIÇÃO DIÁRIA =====
function loadQuestion() {
    if (!user.testFeito) {
        document.getElementById('question').innerHTML = '<strong>⚠️ Faça o teste primeiro!</strong><p>Vá na aba Teste</p>';
        document.getElementById('options').style.display = 'none';
        return;
    }
    
    // Escolhe nível baseado no teste (não no XP)
    // 0 = básico, 1 = intermediário, 2 = avançado, 3 = fluente
    const nivelKeys = ['basico', 'intermediario', 'avancado'];
    const nivelIndex = user.testeEtapa || 0;
    const nivel = nivelKeys[nivelIndex] || 'basico';
    const lista = perguntas[nivel];
    
    // Escolhe pergunta aleatória
    const randomQ = Math.floor(Math.random() * lista.length);
    const p = lista[randomQ];
    
    // Embaralha opções
    const opts = [...p.o].sort(() => Math.random() - 0.5);
    
    currentQ = { resposta: p.a, nivel: nivel };
    
    document.getElementById('question').innerHTML = `<p>${p.q}</p><small style="color:var(--primary)">${nivelMap[nivel] || nivel}</small>`;
    document.getElementById('options').style.display = 'grid';
    
    const btns = document.querySelectorAll('#options button');
    btns.forEach((btn, i) => {
        btn.textContent = opts[i];
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
});
     
    document.getElementById('result').textContent = '';
}

// ===== RESPONDER =====
function responder(btn) {
    if (!currentQ) return;
    
    const btns = document.querySelectorAll('#options button');
    btns.forEach(b => b.disabled = true);
    
    if (btn.textContent === currentQ.resposta) {
        btn.classList.add('correct');
        user.xp += 10;
        som('acerto');
        const msgDiv = document.getElementById('result');
        if (msgDiv) {
            msgDiv.innerHTML = `
                <div style="background:var(--primary); color:#000; padding:12px; border-radius:10px; margin-top:12px;">
                    <strong>🎉 Você acertou!</strong>
                </div>
                <button onclick="loadQuestion()" style="background:#333; color:#fff; border:none; padding:10px 16px; border-radius:8px; margin-top:12px; cursor:pointer;">Próxima →</button>
            `;
        }
    } else {
        btn.classList.add('wrong');
        som('erro');
        btns.forEach(b => {
            if (b.textContent === currentQ.resposta) b.classList.add('correct');
        });
        const msgDiv = document.getElementById('result');
        if (msgDiv) {
            const exp = getExplicacao(currentQ.resposta);
            msgDiv.innerHTML = `
                <div style="background:#ef4444; color:#fff; padding:12px; border-radius:10px; margin-top:12px; text-align:left;">
                    <strong>❌ Você errou!</strong>
                    <p style="margin-top:8px;">Resposta correta: <strong>${currentQ.resposta}</strong></p>
                </div>
                <button onclick="abrirExplicacao()" style="background:var(--secondary); color:#fff; border:none; padding:10px 16px; border-radius:8px; margin-top:12px; cursor:pointer;">💬 Entender</button>
            `;
        }
    }
    
    saveUser();
    updateDisplay();
}

// ===== TESTE DE NIVELAMENTO =====
function iniciarTeste() {
    user.testeEtapa = 0;
    user.testeAcertos = 0;
    user.testeIndex = 0;
    
    document.getElementById('test').style.display = 'block';
    document.getElementById('home').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
    
    loadPerguntaTeste();
}

function loadPerguntaTeste() {
    const etapa = etapas[user.testeEtapa];
    const lista = perguntas[etapa];
    
    if (user.testeIndex >= lista.length) {
        // Verifica se passou
        if (user.testeAcertos >= 10) {
            if (user.testeEtapa < 2) {
                // Passou - mostra transição
                const nextEtapa = etapas[user.testeEtapa + 1];
                document.getElementById('test-question').innerHTML = `<h3>🎉 Avanzou!</h3><p>Próxima: ${nextEtapa}</p>`;
                document.getElementById('test-options').style.display = 'none';
                document.getElementById('start-test-btn').style.display = 'none';
                document.getElementById('next-test-btn').style.display = 'block';
            } else {
                // Final!
                finalizouTeste();
            }
        } else {
            // Não passou - define o nível atual e salva
            const nivelKeys = ['basico', 'intermediario', 'avancado'];
            user.testFeito = true;
            user.nivel = nivelMap[nivelKeys[user.testeEtapa]] || 'Básico';
            user.testeEtapa = user.testeEtapa; // Mantém o nível atual
            saveUser();
            
            document.getElementById('test-question').innerHTML = `<h3>🏆 Teste Concluído!</h3><p style="font-size:1.2rem; margin:12px 0;">Seu nível de inglês é <strong style="color:var(--primary)">${user.nivel}</strong></p>`;
            document.getElementById('test-options').style.display = 'none';
            document.getElementById('test-progress').style.width = '100%';
            
            setTimeout(() => {
                // Volta para home com perguntas do nível correto
                document.getElementById('no-test-msg').style.display = 'none';
                document.getElementById('lesson-content').style.display = 'block';
                loadQuestion();
                mostrar('home');
            }, 2500);
        }
        return;
    }
    
    const p = lista[user.testeIndex];
    const opts = [...p.o].sort(() => Math.random() - 0.5);
    
    currentQ = { resposta: p.a };
    
    // Progresso
    const progresso = (user.testeIndex / lista.length) * 100;
    document.getElementById('test-progress').style.width = progresso + '%';
    
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
        document.getElementById('test-result').innerHTML = '✅ Correto!';
    } else {
        btn.classList.add('wrong');
        btns.forEach(b => {
            if (b.textContent === currentQ.resposta) b.classList.add('correct');
        });
        document.getElementById('test-result').innerHTML = '❌ ' + currentQ.resposta;
    }
    
    user.testeIndex++;
    
    setTimeout(loadPerguntaTeste, 1200);
}

function proximaEtapa() {
    user.testeEtapa++;
    user.testeIndex = 0;
    user.testeAcertos = 0;
    
    // Atualiza o nível baseado em qual etapa passou
    const nivelKeys = ['basico', 'intermediario', 'avancado'];
    if (user.testeEtapa < 3) {
        user.nivel = nivelMap[nivelKeys[user.testeEtapa]];
    }
    
    document.getElementById('next-test-btn').style.display = 'none';
    loadPerguntaTeste();
}

function finalizouTeste() {
    user.testFeito = true;
    user.nivel = 'Fluente';
    user.testeEtapa = 3; // Nível máximo
    saveUser();
    updateDisplay();
    
    document.getElementById('test-question').innerHTML = '<h3>🏆 Teste Concluído!</h3><p>Nível: Fluente</p>';
    document.getElementById('test-options').style.display = 'none';
    document.getElementById('test-progress').style.width = '100%';
    
    setTimeout(() => {
        // Recarrega a página inicial com as perguntas do nível correto
        document.getElementById('no-test-msg').style.display = 'none';
        document.getElementById('lesson-content').style.display = 'block';
        loadQuestion();
        mostrar('home');
    }, 2000);
}

// ===== RESETAR =====
function resetar() {
    if (confirm('Tem certeza? Todo progresso será perdido.')) {
        user = { nome: '', avatar: '😀', xp: 0, streak: 0, hearts: 5, nivel: '-', testFeito: false, testeEtapa: 0, testeAcertos: 0, testeIndex: 0 };
        saveUser();
        updateDisplay();
        location.reload();
    }
}

// ===== EDITAR AVATAR =====
function editarAvatar() {
    let msg = 'Escolha seu avatar:\n\n';
    avatares.forEach((a, i) => {
        msg += a + ' ';
        if ((i + 1) % 4 === 0) msg += '\n';
    });
    
    const escolha = prompt(msg + '\n\nDigite o número (0-' + (avatares.length - 1) + '):');
    const idx = parseInt(escolha);
    
    if (idx >= 0 && idx < avatares.length) {
        user.avatar = avatares[idx];
        saveUser();
        document.getElementById('avatar-display').textContent = user.avatar;
    }
}

// ===== SALVAR NOME =====
function salvarNome() {
    const nome = document.getElementById('nome-input').value.trim();
    user.nome = nome;
    saveUser();
}

// ===== INICIA =====
init();