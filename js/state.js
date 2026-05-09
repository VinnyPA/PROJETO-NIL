/* PROJETO NIL — state.js
 * Estado global do jogo. Tudo pendurado em window.NIL.
 */

window.NIL = window.NIL || {};

NIL.state = {
  currentScene: null,
  scenes: {},
  history: [],
  chapter: 1,
  phase: 1
};

NIL.registerScene = function (scene) {
  NIL.state.scenes[scene.id] = scene;
};
