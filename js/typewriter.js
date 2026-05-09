/* PROJETO NIL — typewriter.js
 * Efeito de digitação com pausas em pontuação.
 * Retorna { finish() } para permitir skip via clique/tecla.
 */

window.NIL = window.NIL || {};

NIL.typewriter = function (el, text, opts) {
  opts = opts || {};
  const speed = opts.speed || 26;
  const onDone = opts.onDone || function () {};

  let i = 0;
  let timer = null;
  let cancelled = false;

  el.textContent = '';

  function step() {
    if (cancelled) return;
    if (i >= text.length) { onDone(); return; }

    const ch = text[i++];
    el.textContent += ch;

    let delay = speed;
    if (ch === '.' || ch === '!' || ch === '?') delay = speed * 12;
    else if (ch === ',' || ch === ';' || ch === ':') delay = speed * 5;
    else if (ch === '\n') delay = speed * 4;

    timer = setTimeout(step, delay);
  }

  step();

  return {
    finish() {
      if (cancelled) return;
      cancelled = true;
      if (timer) clearTimeout(timer);
      el.textContent = text;
      onDone();
    }
  };
};
