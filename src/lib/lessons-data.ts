import { Lesson, OnboardingStep } from './types';

export const onboardingSteps: OnboardingStep[] = [
  {
    title: "Aprenda o que funciona",
    description: "Lições diretas de 3 minutos. Sem enrolação, só o essencial.",
    icon: "Zap"
  },
  {
    title: "Aplique no mesmo dia",
    description: "Cada lição tem uma ação prática. Você sai fazendo, não só lendo.",
    icon: "CheckCircle"
  },
  {
    title: "Evolua de verdade",
    description: "Acompanhe seu progresso real. Disciplina vira hábito.",
    icon: "Award"
  }
];

export const lessonsData: Lesson[] = [
  {
    id: "1",
    title: "Como Acordar Cedo (e não desistir no 2º dia)",
    category: "Disciplina",
    duration: 3,
    points: 50,
    content: `A maioria falha porque tenta mudar tudo de uma vez. Não faça isso.

SEMANA 1: Acorde 15 minutos mais cedo. Só isso. Não tente 5h da manhã logo de cara.

SEMANA 2: Mais 15 minutos. Agora você está 30 minutos mais cedo.

SEMANA 3: Continue. Seu corpo se adapta em 21 dias, não em 2.

REGRA DE OURO: Coloque o despertador longe da cama. Você precisa levantar pra desligar.

BÔNUS: Nos primeiros 5 minutos acordado, beba água gelada. Ativa o corpo instantaneamente.

Não é sobre motivação. É sobre repetição até virar automático.`,
    quiz: {
      question: "Qual o erro mais comum ao tentar acordar cedo?",
      options: [
        "Não beber café",
        "Tentar mudar tudo de uma vez",
        "Dormir muito cedo",
        "Usar dois despertadores"
      ],
      correctAnswer: 1
    },
    completed: false,
    isFree: true
  },
  {
    id: "2",
    title: "Técnica dos 2 Minutos (produtividade real)",
    category: "Produtividade",
    duration: 2,
    points: 40,
    content: `Se uma tarefa leva menos de 2 minutos, faça AGORA. Não anote, não deixe pra depois.

Responder email rápido? Faça agora.
Lavar a louça de 1 prato? Faça agora.
Agendar consulta? Faça agora.

POR QUÊ FUNCIONA: Você elimina 70% das "pequenas tarefas" que acumulam e viram bola de neve.

REGRA: Se vai demorar mais de 2 minutos, aí sim você anota na lista.

RESULTADO: Sua lista de tarefas fica só com o que importa. O resto você já resolveu.

Teste hoje: toda vez que pensar "vou fazer depois", pergunte "leva menos de 2 minutos?". Se sim, faça.`,
    quiz: {
      question: "Quando você deve aplicar a regra dos 2 minutos?",
      options: [
        "Apenas no trabalho",
        "Só para tarefas importantes",
        "Para qualquer tarefa que leve menos de 2 minutos",
        "Apenas uma vez por dia"
      ],
      correctAnswer: 2
    },
    completed: false,
    isFree: true
  },
  {
    id: "3",
    title: "Como Dizer Não (sem culpa)",
    category: "Soft Skills",
    duration: 3,
    points: 60,
    content: `Você não precisa justificar tudo. Sério.

FÓRMULA SIMPLES:
"Não vou conseguir dessa vez, mas obrigado por pensar em mim."

Pronto. Sem desculpas inventadas, sem mentiras sobre agenda lotada.

POR QUÊ FUNCIONA: Você mostra respeito (obrigado) + firmeza (não vou conseguir). As pessoas respeitam quem é direto.

ERRO COMUM: Inventar desculpas. A pessoa percebe e você perde credibilidade.

QUANDO USAR: Sempre que algo não se alinha com suas prioridades. Seu tempo é seu recurso mais valioso.

PRÁTICA: Hoje, se alguém pedir algo que você não quer/pode fazer, use a fórmula. Sem inventar desculpa.`,
    quiz: {
      question: "Qual a melhor forma de dizer não?",
      options: [
        "Inventar uma desculpa elaborada",
        "Ignorar a pessoa",
        "Ser direto e respeitoso sem justificativas excessivas",
        "Aceitar e depois cancelar"
      ],
      correctAnswer: 2
    },
    completed: false,
    isFree: false
  },
  {
    id: "4",
    title: "Foco Profundo: 90 minutos que valem por 8 horas",
    category: "Produtividade",
    duration: 4,
    points: 60,
    content: `Seu cérebro tem ciclos de 90 minutos de foco máximo. Use isso a seu favor.

MÉTODO:
1. Escolha UMA tarefa importante
2. Elimine TODAS as distrações (celular em outro cômodo, notificações OFF)
3. Trabalhe 90 minutos sem parar
4. Pare. Descanse 20 minutos.

RESULTADO: Você produz mais em 90 minutos focados do que em 8 horas com interrupções.

CIÊNCIA: Seu cérebro entra em "estado de fluxo" após 15-20 minutos de foco. É quando você fica "no piloto automático" produtivo.

REGRA: Faça isso 1x por dia. Escolha a tarefa mais importante do dia.

DICA: Melhor horário é de manhã, quando sua força de vontade está no máximo.`,
    quiz: {
      question: "Quanto tempo dura um ciclo de foco profundo?",
      options: [
        "30 minutos",
        "60 minutos",
        "90 minutos",
        "120 minutos"
      ],
      correctAnswer: 2
    },
    completed: false,
    isFree: false
  },
  {
    id: "5",
    title: "Mentalidade de Crescimento vs Mentalidade Fixa",
    category: "Mentalidade",
    duration: 4,
    points: 60,
    content: `Sua mentalidade determina seu teto.

MENTALIDADE FIXA: "Eu não sou bom nisso" / "Não tenho talento"
MENTALIDADE DE CRESCIMENTO: "Ainda não sou bom nisso" / "Posso melhorar com prática"

A diferença? Uma palavra: AINDA.

EXEMPLO REAL:
Fixa: "Não sei programar"
Crescimento: "Ainda não sei programar, mas posso aprender"

POR QUÊ IMPORTA: Pessoas com mentalidade de crescimento aprendem mais rápido porque veem erros como feedback, não como fracasso.

PRÁTICA: Toda vez que pensar "não consigo", adicione "ainda" no final.

RESULTADO: Seu cérebro para de ver limites e começa a ver possibilidades.`,
    quiz: {
      question: "Qual frase representa mentalidade de crescimento?",
      options: [
        "Eu não tenho talento para isso",
        "Ainda não sou bom nisso, mas posso melhorar",
        "Isso não é pra mim",
        "Algumas pessoas nascem com o dom"
      ],
      correctAnswer: 1
    },
    completed: false,
    isFree: false
  },
  {
    id: "6",
    title: "Sistema Anti-Procrastinação (funciona mesmo)",
    category: "Disciplina",
    duration: 3,
    points: 50,
    content: `Procrastinação não é preguiça. É medo disfarçado.

SOLUÇÃO: Reduza a tarefa até ela não dar mais medo.

EXEMPLO:
❌ "Vou escrever o relatório" (assustador)
✅ "Vou abrir o documento" (fácil)

Depois que abriu, o próximo passo fica óbvio: "Vou escrever o título". Depois: "Vou escrever a primeira frase".

REGRA DOS 5 MINUTOS: Comprometa-se com apenas 5 minutos. Depois de começar, 80% das vezes você continua.

POR QUÊ FUNCIONA: O difícil é começar, não continuar. Você engana o cérebro fazendo a tarefa parecer ridiculamente pequena.

TESTE HOJE: Pegue algo que você está adiando. Qual o menor passo possível? Faça só esse.`,
    quiz: {
      question: "Qual a causa real da procrastinação?",
      options: [
        "Preguiça pura",
        "Falta de tempo",
        "Medo disfarçado",
        "Falta de motivação"
      ],
      correctAnswer: 2
    },
    completed: false,
    isFree: false
  },
  {
    id: "7",
    title: "Como Negociar Salário (sem medo)",
    category: "Carreira",
    duration: 4,
    points: 70,
    content: `A maioria perde dinheiro por não saber negociar. Mude isso hoje.

REGRA 1: Nunca diga o número primeiro. Quem fala primeiro, perde.
Pergunta: "Qual sua pretensão salarial?"
Resposta: "Gostaria de entender melhor a posição primeiro. Qual a faixa que vocês trabalham?"

REGRA 2: Sempre peça 10-20% acima do que você quer. Eles vão negociar pra baixo.

REGRA 3: Use dados, não emoção.
❌ "Eu preciso de mais dinheiro"
✅ "Baseado no mercado e na minha experiência em X, Y e Z, o valor justo seria..."

REGRA 4: Silencie depois de dar seu número. Quem fala primeiro depois do silêncio, perde.

PRÁTICA: Pesquise salários da sua área no Glassdoor/Linkedin antes de qualquer entrevista.`,
    quiz: {
      question: "O que você deve fazer quando perguntam sua pretensão salarial?",
      options: [
        "Falar o menor valor possível",
        "Perguntar qual a faixa que eles trabalham",
        "Dizer que aceita qualquer valor",
        "Recusar responder"
      ],
      correctAnswer: 1
    },
    completed: false,
    isFree: false
  },
  {
    id: "8",
    title: "Networking que Funciona (sem ser chato)",
    category: "Soft Skills",
    duration: 3,
    points: 60,
    content: `Networking não é sobre coletar contatos. É sobre construir relações reais.

REGRA DE OURO: Dê antes de pedir.

COMO FAZER:
1. Encontre alguém que você admira
2. Ofereça algo de valor (artigo interessante, conexão útil, feedback genuíno)
3. Não peça nada em troca
4. Repita 3-5 vezes
5. Aí sim, quando precisar, a pessoa vai querer te ajudar

POR QUÊ FUNCIONA: Você cria reciprocidade genuína, não transacional.

ERRO COMUM: Mandar "vamos tomar um café?" pra alguém que você nunca ajudou. Isso é perda de tempo (pra ambos).

PRÁTICA: Escolha 1 pessoa hoje. Mande algo útil sem pedir nada. Veja a diferença.`,
    quiz: {
      question: "Qual a regra de ouro do networking eficaz?",
      options: [
        "Coletar o máximo de contatos possível",
        "Pedir favores rapidamente",
        "Dar valor antes de pedir algo",
        "Mandar mensagens genéricas"
      ],
      correctAnswer: 2
    },
    completed: false,
    isFree: false
  },
  {
    id: "9",
    title: "Hábitos Compostos: 1% melhor todo dia",
    category: "Mentalidade",
    duration: 4,
    points: 70,
    content: `Se você melhorar 1% por dia, em 1 ano você estará 37x melhor. Matemática simples.

O SEGREDO: Pequenas ações repetidas > grandes ações esporádicas

EXEMPLO PRÁTICO:
❌ "Vou ler 50 páginas hoje" (você desiste)
✅ "Vou ler 5 páginas todo dia" (você mantém)

Resultado: 5 páginas x 365 dias = 1.825 páginas = ~6 livros por ano

REGRA: Escolha 1 hábito pequeno. Tão pequeno que é impossível falhar.
- 5 flexões por dia
- 1 página de leitura
- 2 minutos de meditação

DEPOIS DE 30 DIAS: Aumente. Mas só depois que virou automático.

ERRO FATAL: Tentar mudar 10 coisas ao mesmo tempo. Você falha em todas.`,
    quiz: {
      question: "Quanto você melhora em 1 ano se melhorar 1% por dia?",
      options: [
        "365% melhor",
        "37x melhor",
        "100% melhor",
        "10x melhor"
      ],
      correctAnswer: 1
    },
    completed: false,
    isFree: false
  },
  {
    id: "10",
    title: "Gestão de Energia (não de tempo)",
    category: "Produtividade",
    duration: 4,
    points: 70,
    content: `Você não precisa de mais tempo. Você precisa de mais energia.

VERDADE: 1 hora com energia alta > 4 horas cansado

COMO GERENCIAR ENERGIA:

MANHÃ (energia máxima): Tarefas que exigem criatividade e decisões importantes
TARDE (energia média): Reuniões, emails, tarefas administrativas  
NOITE (energia baixa): Planejamento do dia seguinte, tarefas mecânicas

REGRA: Pare de agendar tarefas difíceis pra quando você está cansado. Você vai falhar.

HACKS DE ENERGIA:
- 20 min de sol pela manhã = +30% energia
- Caminhada de 10 min = reset mental
- Água gelada = ativação instantânea

PRÁTICA: Identifique seu pico de energia. Agende sua tarefa mais importante pra esse horário.`,
    quiz: {
      question: "Quando você deve fazer tarefas que exigem criatividade?",
      options: [
        "À noite, quando está calmo",
        "Pela manhã, no pico de energia",
        "Na hora do almoço",
        "Não importa o horário"
      ],
      correctAnswer: 1
    },
    completed: false,
    isFree: false
  }
];
