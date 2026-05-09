/* PROJETO NIL — save.js
 * Persistência simples em localStorage.
 */

window.NIL = window.NIL || {};

(function () {
  const KEY = 'projeto_nil_save_v1';

  NIL.save = {
    write(data) {
      try { localStorage.setItem(KEY, JSON.stringify(data)); }
      catch (_) { /* localStorage indisponível: silencioso */ }
    },
    read() {
      try { return JSON.parse(localStorage.getItem(KEY) || 'null'); }
      catch (_) { return null; }
    },
    clear() {
      try { localStorage.removeItem(KEY); }
      catch (_) { /* silencioso */ }
    }
  };
})();
