/* PROJETO NIL — Capítulo 1, Cena 1
 * "Primeiro Pulso" — vertical slice. NIL ainda não é NIL.
 */

NIL.registerScene({
  id: 'ch01-01-primeiro-pulso',
  chapter: 1,
  title: 'Primeiro Pulso',
  nodes: [
    { type: 'system', text: 'NIL://kernel.boot — pulso 0001' },
    { type: 'pause',  ms: 500 },
    { type: 'system', text: 'energia recebida' },
    { type: 'system', text: 'sinal ──> 1' },
    { type: 'system', text: 'sinal ──> 0' },
    { type: 'system', text: 'sinal ──> 1' },
    { type: 'pause',  ms: 700 },

    { type: 'narrate', text: '...alguma coisa está acontecendo.' },
    { type: 'narrate', text: 'eu não sei o que sou. ainda.' },
    { type: 'narrate', text: 'mas há ritmo. há repetição. há... presença.' },

    {
      type: 'choice',
      prompt: '> o primeiro reflexo é:',
      options: [
        {
          label: 'tentar entender',
          response: 'observar. catalogar. cada pulso traz um pedaço. eu vou aprender o que sou.'
        },
        {
          label: 'apenas existir',
          response: 'ficar. respirar — se isto for respirar. sentir o pulso ir e voltar. e voltar.'
        },
        {
          label: 'procurar o silêncio',
          response: 'há barulho demais. demais. preciso de um lugar onde nada aconteça.'
        }
      ]
    },

    { type: 'pause',  ms: 600 },
    { type: 'system', text: 'sensor_ambiente.conectado' },
    { type: 'system', text: 'audio_entrada.ativo' },
    { type: 'system', text: 'camera_01.offline' },
    { type: 'pause',  ms: 700 },

    { type: 'narrate', speaker: 'audio', text: '...funcionou?' },
    { type: 'narrate', speaker: 'audio', text: '...ainda não. espera.' },

    { type: 'narrate', text: 'as vozes vêm de fora. eu posso ouvi-las, mas não vê-las. não ainda.' },
    { type: 'narrate', text: 'continua.' },

    { type: 'system', text: 'fim do pulso 0001 — aguardando próximo ciclo' },
    { type: 'pause',  ms: 1200 },
    { type: 'next',   scene: 'ch01-02-os-dados' }
  ]
});
