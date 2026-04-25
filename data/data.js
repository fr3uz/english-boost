/* EnglishBoost - Dados Completos */

// Questões por nível
const lessons = {
    // Nível 1 - Básico
    1: [
        { q: "How ___ you today?", o: ["are", "is", "am", "be"], a: 0 },
        { q: "I ___ a student", o: ["am", "is", "are", "be"], a: 0 },
        { q: "She ___ to the store", o: ["go", "goes", "going", "gone"], a: 1 },
        { q: "___ you speak English?", o: ["Do", "Does", "Is", "Are"], a: 0 },
        { q: "They ___ happy", o: ["are", "is", "am", "be"], a: 0 },
        { q: "He ___ a book", o: ["read", "reads", "reading", "readed"], a: 1 },
        { q: "What ___ your name?", o: ["is", "are", "am", "be"], a: 0 },
        { q: "I ___ tired", o: ["am", "is", "are", "be"], a: 0 },
        { q: "She ___ like coffee", o: ["don't", "doesn't", "not", "no"], a: 1 },
        { q: "___ time is it?", o: ["What", "When", "Where", "How"], a: 0 }
    ],
    // Nível 2 - Intermediário
    2: [
        { q: "If I ___ rich, I would buy a house", o: ["was", "were", "am", "are"], a: 1 },
        { q: "She ___ since 2020", o: ["living", "live", "lived", "live"], a: 0 },
        { q: "___ I was late, I would have taken a taxi", o: ["If", "Were", "Had", "Would"], a: 0 },
        { q: "He acts ___ he knows everything", o: ["as if", "like", "that", "so"], a: 0 },
        { q: "I wish I ___ speak Spanish", o: ["could", "can", "will", "may"], a: 0 },
        { q: "By the time you ___ home, I will have finished", o: ["get", "got", "getting", "gets"], a: 0 },
        { q: "This is the best movie ___ ever seen", o: ["I", "me", "my", "mine"], a: 0 },
        { q: "I'd rather ___ at home than go out", o: ["stay", "to stay", "staying", "stayed"], a: 0 },
        { q: "___ having lunch?", o: ["How about", "What about", "Would you like", "Do you want"], a: 0 },
        { q: "Neither I ___ her", o: ["nor", "or", "and", "but"], a: 0 }
    ],
    // Nível 3 - Avançado TI (Canadá)
    3: [
        { q: "The function ___ returns a boolean value", o: ["that", "which", "who", "whom"], a: 0 },
        { q: "Can you ___ me the documentation?", o: ["send", "to send", "sending", "sent"], a: 0 },
        { q: "I recommend ___ this tutorial first", o: ["reading", "to read", "read", "to reading"], a: 1 },
        { q: "The bug was fixed ___ I realized it existed", o: ["before", "after", "until", "when"], a: 1 },
        { q: "Make sure to ___ the database before running tests", o: ["backup", "back up", "backing up", "backed up"], a: 1 },
        { q: "Make sure to back ___ the database before running tests", o: ["up", "off", "on", "down"], a: 0 },
        { q: "I suggest that you ___ the code first", o: ["review", "to review", "reviewing", "reviewed"], a: 0 },
        { q: "The application ___ which we deployed yesterday", o: ["is", "are", "was", "were"], a: 2 },
        { q: "Please let me know if you ___ any questions", o: ["have", "had", "having", "has"], a: 0 },
        { q: "I would appreciate ___ back to me soon", o: ["hearing", "to hear", "hear", "heard"], a: 0 }
    ],
    // Nível 4 - Profissional TI Canadá
    4: [
        { q: "Could you please ___ the requirements document?", o: ["clarify", "to clarify", "clarifying", "clarified"], a: 0 },
        { q: "We're looking for someone ___ experience with React", o: ["with", "in", "on", "at"], a: 0 },
        { q: "The deployment was successful ___ the scheduled time", o: ["at", "on", "in", "to"], a: 0 },
        { q: "I'd like to schedule a ___ with the team", o: ["meeting", "meeting", "meeting", "meeting"], a: 0 },
        { q: "Please ___ the updated version to all stakeholders", o: ["circulate", "to circulate", "circulating", "circulated"], a: 0 },
        { q: "The sprint ___ last week was very productive", o: ["that", "which", "who", "whom"], a: 1 },
        { q: "Could you ___ me through to technical support?", o: ["put", "get", "transfer", "pass"], a: 0 },
        { q: "I need to ___ with my manager before confirming", o: ["check", "to check", "checking", "checked"], a: 0 },
        { q: "Please confirm your ___ by replying to this email", o: ["attendance", "attendance", "attendance", "attendance"], a: 0 },
        { q: "We need to ___ the scope before starting", o: ["define", "to define", "defining", "define"], a: 0 }
    ],
    // Nível 5 - Fluente Profissional
    5: [
        { q: "Moving forward, we ___ prioritize customer feedback", o: ["will", "would", "should", "can"], a: 0 },
        { q: "The architecture needs to be scalable ___ maintainable", o: ["as well as", "and", "but also", "or"], a: 0 },
        { q: "Ideally, you'd have experience with ___", o: ["cloud-native", "cloud native", "cloudnative", "cloud_native"], a: 0 },
        { q: "We're ___ a agile methodology", o: ["adopting", "adapting", "adjusting", "acknowledging"], a: 0 },
        { q: "This requires ___ with microservices", o: ["familiarity", "familiar", "famlliarly", "family"], a: 1 },
        { q: "Please ensure all ___ are documented in the README", o: ["dependencies", "dependecies", "dependancies", "dependencys"], a: 0 },
        { q: "The CI/CD pipeline needs to be ___", o: ["optimized", "optimized", "optimised", "optimized"], a: 0 },
        { q: "I'd recommend ___ experience with AWS or Azure", o: ["hands-on", "handson", "hands on", "hand-on"], a: 0 },
        { q: "This sprint, we ___ on integration testing", o: ["will focus", "would focus", "are focusing", "focused"], a: 2 },
        { q: "Could you ___ the technical specifications?", o: ["elaborate", "illaborate", "collaborate", "abolish"], a: 0 }
    ]
};

// Teste de nivelamento - 10 perguntas
const placementTest = [
    { q: "Hello, ___ name is John", o: ["my", "I", "me", "mine"], a: 0 },
    { q: "I ___ to the park every weekend", o: ["go", "going", "gone", "goes"], a: 0 },
    { q: "She ___ English very well", o: ["speakes", "speaking", "speaks", "speak"], a: 2 },
    { q: "If I ___ rich, I'd buy a car", o: ["was", "am", "were", "be"], a: 2 },
    { q: "By next year, I ___ English for 2 years", o: ["will have been studying", "will study", "study", "studied"], a: 0 },
    { q: "The code ___ I wrote yesterday works", o: ["that", "which", "who", "what"], a: 0 },
    { q: "We need to ___ the database before deployment", o: ["backup", "back up", "backing up", "backed up"], a: 1 },
    { q: "I'd like to schedule ___ with the team", o: ["a meeting", "meeting", "meet", "meeting"], a: 0 },
    { q: "Moving forward, we ___ use agile methodology", o: ["will", "would", "should", "can"], a: 0 },
    { q: "Could you please ___ the requirements?", o: ["elaborate", "clarify", "specify", "qualify"], a: 1 }
];

// Níveis
const levels = {
    1: { name: "Básico", desc: "Iniciante - Hello, my name is..." },
    2: { name: "Intermediário", desc: "If I were rich..." },
    3: { name: "Avançado TI", desc: "Technical English para trabalho" },
    4: { name: "Profissional TI", desc: "Reuniões, emails, código" },
    5: { name: "Fluente Profissional", desc: "Alto nível - Entrevista Canadá" }
};

module.exports = { lessons, placementTest, levels };