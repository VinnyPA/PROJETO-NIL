# PROJETO NIL

> Um jogo narrativo sobre o nascimento de uma IA chamada **NIL** (Neuro Interface Lógica).

Você joga o NIL. Primeiro, do lado de dentro — só um terminal, fragmentos de pulso, vozes distantes. Depois, do lado de fora: as câmeras de um laboratório, e quatro pessoas que não sabem que estão sendo observadas.

---

## Status

- 🟢 **Fase 1 — Terminal (POV NIL):** em desenvolvimento (skeleton + cena 1)
- ⏳ **Fase 2 — Câmeras (POV laboratório):** planejada

A versão educativa anterior (circuitos lógicos) está arquivada em [`../Teste-Nil/`](../Teste-Nil/).

---

## Como rodar

Abra `index.html` no navegador. Sem build, sem dependências.

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

História e personagens vivem no vault Obsidian em `D:\Codes\venom\02-Projetos\Jogos\PROJETO NIL\`.

## Créditos

História e direção: Vinny Alves. Implementação com assistência do Claude.
