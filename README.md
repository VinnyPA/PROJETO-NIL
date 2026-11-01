# PROJETO NIL

> Um jogo narrativo sobre o nascimento de uma IA chamada **NIL** (Neuro Interface Lógica).

> 🎮 **Jogue agora:** [projeto-nil.vercel.app](https://projeto-nil.vercel.app)

![Terminal do NIL](docs/screenshot.png)

Você joga o NIL. Primeiro, do lado de dentro — só um terminal, fragmentos de pulso, vozes distantes. Depois, do lado de fora: as câmeras de um laboratório, e quatro pessoas que não sabem que estão sendo observadas.

---

## Status

- 🟢 **Fase 1 — Terminal (POV NIL):** em desenvolvimento (motor de cenas + capítulo 1, cenas 1–3)
- ⏳ **Fase 2 — Câmeras (POV laboratório):** planejada

O projeto começou como um jogo educativo de circuitos lógicos e foi reformulado como jogo narrativo.

---

## Como rodar

Abra `index.html` no navegador. Sem build, sem dependências — HTML, CSS e JavaScript puro.

## Estrutura

```
projeto-nil/
├── index.html
├── css/
│   ├── main.css          tema cyberpunk (variáveis, reset, body)
│   └── terminal.css      fase 1 — terminal POV
└── js/
    ├── state.js          estado global
    ├── save.js           localStorage
    ├── typewriter.js     efeito de digitação
    ├── scene.js          motor de cenas (linear + escolhas cosméticas)
    ├── scenes/           conteúdo narrativo por cena
    └── main.js           bootstrap
```

## Lore

História, personagens e roteiro das próximas cenas ficam em documentação à parte — o repositório contém só o jogo.

## Créditos

História e direção: Vinny Alves. Implementação com assistência do Claude.
