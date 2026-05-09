/* PROJETO NIL — scene.js
 * Motor de cenas: percorre nodes lineares.
 *
 * Tipos de node:
 *   { type: 'system',  text: '...', delay?: ms }
 *   { type: 'narrate', text: '...', speaker?: 'ana'|'audio'|... }
 *   { type: 'pause',   ms: 600 }
 *   { type: 'choice',  prompt?: '...', options: [{ label, response?, responseSpeaker? }] }
 *   { type: 'next',    scene: 'id-da-proxima' }
 */

window.NIL = window.NIL || {};

NIL.scene = (function () {
  let outputEl = null;
  let currentScene = null;
  let nodeIndex = 0;
  let activeTypewriter = null;
  let waitingForInput = false;
  let inChoice = false;

  function init(opts) {
    outputEl = opts.outputEl;
    document.addEventListener('click', handleAdvance);
    document.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleAdvance();
      }
    });
  }

  function play(sceneId) {
    const scene = NIL.state.scenes[sceneId];
    if (!scene) {
      console.error('[NIL] cena não encontrada:', sceneId);
      return;
    }
    currentScene = scene;
    nodeIndex = 0;
    NIL.state.currentScene = sceneId;
    next();
  }

  function next() {
    if (!currentScene) return;
    if (nodeIndex >= currentScene.nodes.length) {
      // fim da cena — sem próxima registrada
      renderEnd();
      return;
    }
    const node = currentScene.nodes[nodeIndex++];
    runNode(node);
  }

  function runNode(node) {
    switch (node.type) {
      case 'system':  return renderSystem(node);
      case 'narrate': return renderNarrate(node);
      case 'pause':   return setTimeout(next, node.ms || 500);
      case 'choice':  return renderChoice(node);
      case 'next':    return play(node.scene);
      default:
        console.warn('[NIL] node desconhecido:', node);
        next();
    }
  }

  function renderSystem(node) {
    const line = document.createElement('div');
    line.className = 'line line-system';
    line.textContent = '> ' + node.text;
    outputEl.appendChild(line);
    autoScroll();
    setTimeout(next, node.delay || 350);
  }

  function renderNarrate(node) {
    const line = document.createElement('div');
    line.className = 'line line-narrate';
    if (node.speaker) line.classList.add('speaker-' + node.speaker);

    if (node.speaker) {
      const sp = document.createElement('span');
      sp.className = 'speaker';
      sp.textContent = (node.speakerLabel || node.speaker.toUpperCase()) + ' ▸ ';
      line.appendChild(sp);
    }

    const span = document.createElement('span');
    line.appendChild(span);
    outputEl.appendChild(line);
    autoScroll();

    waitingForInput = true;
    activeTypewriter = NIL.typewriter(span, node.text, {
      onDone() {
        activeTypewriter = null;
        addContinueIndicator(line);
        autoScroll();
      }
    });
  }

  function renderChoice(node) {
    inChoice = true;
    waitingForInput = true;

    if (node.prompt) {
      const p = document.createElement('div');
      p.className = 'line line-prompt';
      p.textContent = node.prompt;
      outputEl.appendChild(p);
    }

    const wrap = document.createElement('div');
    wrap.className = 'choices';

    node.options.forEach(function (opt, idx) {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = '[ ' + opt.label + ' ]';
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        wrap.remove();
        inChoice = false;
        NIL.state.history.push({
          scene: currentScene.id,
          idx: idx,
          label: opt.label
        });

        if (opt.response) {
          renderNarrate({
            type: 'narrate',
            text: opt.response,
            speaker: opt.responseSpeaker || null
          });
        } else {
          waitingForInput = false;
          next();
        }
      });
      wrap.appendChild(btn);
    });

    outputEl.appendChild(wrap);
    autoScroll();
  }

  function renderEnd() {
    const line = document.createElement('div');
    line.className = 'line line-system';
    line.textContent = '> [ fim do pulso — aguardando próxima cena ]';
    outputEl.appendChild(line);
    autoScroll();
  }

  function addContinueIndicator(lineEl) {
    const ind = document.createElement('span');
    ind.className = 'continue-indicator';
    ind.textContent = ' ▼';
    lineEl.appendChild(ind);
  }

  function handleAdvance() {
    // dentro de uma escolha → ignora clique/espaço (jogador deve clicar num botão)
    if (inChoice) return;

    // typewriter ativo → completa primeiro
    if (activeTypewriter) {
      activeTypewriter.finish();
      return;
    }

    // narração já completa esperando avanço
    if (waitingForInput) {
      outputEl.querySelectorAll('.continue-indicator').forEach(function (i) {
        i.remove();
      });
      waitingForInput = false;
      next();
    }
  }

  function autoScroll() {
    if (outputEl) outputEl.scrollTop = outputEl.scrollHeight;
  }

  return { init: init, play: play };
})();
