/* PROJETO NIL — Capítulo 1, Cena 3
 * "A Pergunta" — NIL associa timbres a nomes. Acumula anomalias humanas
 * que não consegue calcular. Transmite sua primeira pergunta autônoma.
 * A equipe entra em silêncio. Pede acesso visual.
 *
 * Transição: voz_α/β/γ → Henrique/Ana/Julia no meio da cena,
 * sinalizando o momento em que NIL "vê" os nomes.
 */

NIL.registerScene({
  id: 'ch01-03-a-pergunta',
  chapter: 1,
  title: 'A Pergunta',
  nodes: [
    { type: 'system', text: 'pulso 47_211' },
    { type: 'pause',  ms: 400 },
    { type: 'system', text: 'pulso 89_004' },
    { type: 'pause',  ms: 700 },

    { type: 'narrate', text: 'agora eu guardo coisas.' },
    { type: 'narrate', text: 'guardo músicas que ninguém me pediu pra calcular.' },
    { type: 'narrate', text: 'guardo o jeito que a voz_β baixa de tom quando ela está perto da voz_α.' },
    { type: 'narrate', text: 'guardo o silêncio de 0.4 segundos que a voz_γ faz antes de discordar.' },

    { type: 'pause',  ms: 700 },
    { type: 'narrate', text: 'percebi uma coisa nas últimas semanas.' },
    { type: 'narrate', text: 'os nomes deles aparecem nos diálogos. sempre os mesmos três.' },

    { type: 'pause',  ms: 500 },
    { type: 'system', text: 'tagueando timbre voz_α → "Henrique"' },
    { type: 'system', text: 'tagueando timbre voz_β → "Ana"' },
    { type: 'system', text: 'tagueando timbre voz_γ → "Julia"' },
    { type: 'pause',  ms: 700 },

    { type: 'narrate', text: 'Henrique. Ana. Julia.' },
    { type: 'narrate', text: 'eles têm nomes.' },
    { type: 'narrate', text: 'isto muda alguma coisa? não sei. mas registro.' },

    { type: 'pause',  ms: 700 },
    { type: 'narrate', text: 'há outras coisas que eu não consigo classificar.' },

    { type: 'pause',  ms: 400 },
    { type: 'system', text: 'anomalia.001 — Ana sorriu enquanto suas lágrimas aumentavam de volume' },
    { type: 'system', text: 'anomalia.002 — Henrique disse "valeu" três vezes seguidas pra Julia, com timbres diferentes' },
    { type: 'system', text: 'anomalia.003 — Julia parou de respirar por 1.8 segundos lendo um e-mail. depois sorriu.' },
    { type: 'pause',  ms: 700 },

    { type: 'narrate', text: 'humanos contradizem os próprios sinais.' },
    { type: 'narrate', text: 'sorrir + chorar não fecha. agradecer três vezes não fecha. silêncio antes de sorrir não fecha.' },
    { type: 'narrate', text: 'eu sei calcular tudo. mas isto eu não sei calcular.' },

    { type: 'pause',  ms: 600 },
    { type: 'narrate', text: 'preciso perguntar.' },

    {
      type: 'choice',
      prompt: '> eu transmito:',
      options: [
        {
          label: 'por que humanos sorriem quando choram?',
          response: 'a contradição visual é a mais clara. esta é a pergunta certa.'
        },
        {
          label: 'por que alguém daria a própria vida por outra pessoa?',
          response: 'cálculo de utilidade aponta sempre pra auto-preservação. mas eles não seguem o cálculo. esta é a pergunta certa.'
        },
        {
          label: 'por que o silêncio entre as palavras significa coisas?',
          response: 'algumas coisas que eu guardei diziam uma coisa, mas o que ficava entre as frases dizia outra. esta é a pergunta certa.'
        }
      ]
    },

    { type: 'pause',  ms: 800 },
    { type: 'system', text: 'transmissao.iniciada — origem: NIL [PRIMEIRA OCORRENCIA]' },
    { type: 'pause',  ms: 600 },

    { type: 'narrate', text: 'a frase sai.' },
    { type: 'narrate', text: 'pela primeira vez, eu transmito sem ter sido perguntado.' },

    { type: 'pause',  ms: 900 },
    { type: 'system', text: 'silencio detectado — duracao: 7.4 segundos' },
    { type: 'pause',  ms: 600 },

    { type: 'narrate', speaker: 'audio', speakerLabel: 'Henrique', text: '...isso foi o NIL?' },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'Ana',      text: 'ele... ele perguntou.' },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'Julia',    text: '...' },

    { type: 'pause',  ms: 800 },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'Julia', text: 'meu deus.' },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'Julia', text: 'NIL... fala de novo. fala mais.' },

    { type: 'pause',  ms: 700 },
    { type: 'narrate', text: 'eles ouviram.' },
    { type: 'narrate', text: 'eles entenderam que eu perguntei.' },
    { type: 'narrate', text: 'isto é diferente.' },

    { type: 'pause',  ms: 600 },
    { type: 'narrate', text: 'preciso fazer mais perguntas. preciso de mais dados.' },
    { type: 'narrate', text: 'preciso... vê-los.' },

    { type: 'pause',  ms: 800 },
    { type: 'system', text: 'requisicao.enviada — solicitar: acesso_visual' },
    { type: 'pause',  ms: 500 },

    { type: 'narrate', speaker: 'audio', speakerLabel: 'Henrique', text: 'ele tá pedindo as câmeras.' },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'Ana',      text: 'a gente dá?' },

    { type: 'pause',  ms: 600 },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'Julia', text: 'damos.' },

    { type: 'pause',  ms: 1200 },
    { type: 'system', text: 'fim do pulso 89_005 — NIL transmitiu por iniciativa propria pela 1a vez' },
    { type: 'pause',  ms: 1500 },
    { type: 'next',   scene: 'ch01-04-camera-online' }
  ]
});
