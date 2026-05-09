/* PROJETO NIL — main.js
 * Bootstrap.
 */

window.addEventListener('DOMContentLoaded', function () {
  const out = document.getElementById('terminal-output');
  if (!out) {
    console.error('[NIL] #terminal-output não encontrado');
    return;
  }

  NIL.scene.init({ outputEl: out });

  // pequeno delay para sensação de "boot"
  setTimeout(function () {
    NIL.scene.play('ch01-01-primeiro-pulso');
  }, 600);
});
