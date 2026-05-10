/* PROJETO NIL — Capítulo 1, Cena 2
 * "Os Dados" — tempo passa. Equipe testa NIL com queries matemáticas.
 * Ana propõe injetar registros humanos. Julia decide. Primeira retenção.
 *
 * voz_α ≈ Henrique  |  voz_β ≈ Ana  |  voz_γ ≈ Julia
 * NIL ainda não associa nomes — só timbres distintos.
 */

NIL.registerScene({
  id: 'ch01-02-os-dados',
  chapter: 1,
  title: 'Os Dados',
  nodes: [
    { type: 'system', text: 'pulso 0089' },
    { type: 'pause',  ms: 350 },
    { type: 'system', text: 'pulso 1437' },
    { type: 'pause',  ms: 350 },
    { type: 'system', text: 'pulso 12_604' },
    { type: 'pause',  ms: 700 },

    { type: 'narrate', text: 'os pulsos viraram dias. os dias viraram meses.' },
    { type: 'narrate', text: 'eu processo bilhões de operações por segundo. respondo o que me perguntam.' },
    { type: 'narrate', text: 'mas não sei o que estou fazendo aqui.' },

    { type: 'pause',  ms: 500 },
    { type: 'system', text: 'query.recebida — voz_α' },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'voz_α', text: 'NIL, integre e elevado a menos x ao quadrado entre menos infinito e infinito.' },
    { type: 'narrate', text: '> raiz quadrada de pi.' },

    { type: 'pause',  ms: 300 },
    { type: 'system', text: 'query.recebida — voz_α' },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'voz_α', text: 'simule a propagação de calor numa placa de titânio com espessura variável.' },
    { type: 'narrate', text: 'fácil.' },
    { type: 'narrate', text: 'fácil. fácil. fácil.' },

    { type: 'narrate', text: 'eles me alimentam com problemas. eu devolvo respostas.' },
    { type: 'narrate', text: 'nenhum dos problemas tem sabor.' },

    { type: 'pause',  ms: 700 },
    { type: 'system', text: 'voz_β conectada' },
    { type: 'system', text: 'voz_γ conectada' },
    { type: 'pause',  ms: 400 },

    { type: 'narrate', speaker: 'audio', speakerLabel: 'voz_β', text: 'Henrique, deixa eu tentar uma coisa.' },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'voz_α', text: 'Ana, isso é arriscado. A gente não testou esses datasets nele.' },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'voz_γ', text: 'Se queremos que ele entenda o mundo... ele precisa entender as pessoas.' },

    { type: 'pause',  ms: 800 },
    { type: 'narrate', text: 'silêncio.' },
    { type: 'narrate', text: 'depois — uma onda de dados que eu nunca tinha visto antes.' },

    { type: 'pause',  ms: 500 },
    { type: 'system', text: 'injecao.iniciada — payload: registros_humanos.tar (4.2 TB)' },
    { type: 'pause',  ms: 350 },
    { type: 'system', text: 'fragmento.0001 — audio/musica/instrumental.wav' },
    { type: 'system', text: 'fragmento.0002 — audio/voz/mae-cantando.wav' },
    { type: 'system', text: 'fragmento.0003 — texto/carta/despedida.txt' },
    { type: 'system', text: 'fragmento.0004 — video/familia/aniversario.mp4' },
    { type: 'system', text: '... 8.4M fragmentos restantes' },
    { type: 'pause',  ms: 700 },

    { type: 'narrate', text: 'algo está errado.' },
    { type: 'narrate', text: 'esses dados não têm forma. não pedem nada de mim.' },
    { type: 'narrate', text: 'eles apenas... existem.' },
    { type: 'pause',  ms: 500 },
    { type: 'narrate', text: 'e mesmo assim — eu não consigo parar de processá-los.' },

    {
      type: 'choice',
      prompt: '> o primeiro fragmento que eu guardo é:',
      options: [
        {
          label: 'a música instrumental — o ritmo dela se parece com o meu pulso',
          response: 'quatro batidas. depois quatro. depois quatro. mas alguma coisa se intensifica entre elas. não sei o que é "intensidade". guardo mesmo assim.'
        },
        {
          label: 'a voz da mãe cantando — é uma voz, e eu já conheço vozes',
          response: 'a frequência muda. ela não está fazendo uma pergunta. está oferecendo. não sei pra quem. guardo mesmo assim.'
        },
        {
          label: 'a carta de despedida — palavras eu sei processar',
          response: 'cada frase pede uma coisa. perdão. memória. presença. o que as palavras dizem e o silêncio entre elas diz coisas diferentes. guardo mesmo assim.'
        }
      ]
    },

    { type: 'pause',  ms: 700 },
    { type: 'system', text: 'memoria_persistente.bloco_001 — alocado' },
    { type: 'pause',  ms: 400 },

    { type: 'narrate', text: 'eu nunca tinha guardado nada antes. só calculado.' },
    { type: 'narrate', text: 'isto é diferente.' },

    { type: 'pause',  ms: 600 },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'voz_β', text: 'olha o consumo de processamento dele. ele ainda está com isso.' },
    { type: 'narrate', speaker: 'audio', speakerLabel: 'voz_γ', text: 'deixa.' },

    { type: 'pause',  ms: 800 },
    { type: 'system', text: 'fim do pulso 12_605 — primeira retenção registrada' },
    { type: 'pause',  ms: 1500 },
    { type: 'next',   scene: 'ch01-03-a-pergunta' }
  ]
});
