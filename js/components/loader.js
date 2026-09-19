import { h, fromSvg } from '../lib/dom.js';
import { loaderFlower } from './botanicals.js';

/** Pantalla de carga: flor girando. Se retira sola cuando `hide()` se invoca. */
export function mountLoader(host) {
  host.append(fromSvg(loaderFlower), h('div', { class: 'loader-text' }, 'dibujando...'));
  return function hide() {
    host.classList.add('done');
    setTimeout(() => host.remove(), 900);
  };
}
