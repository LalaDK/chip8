import Renderer from './renderer.js';

window.addEventListener('load', () => {
  const renderer = new Renderer(15);
  renderer.render();
});
