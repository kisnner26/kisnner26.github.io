import { h, fromSvg } from '../lib/dom.js';
import { plantLeft, plantRight, petal } from './botanicals.js';

function petals(count = 10) {
  const layer = h('div', { class: 'petals', 'aria-hidden': 'true' });
  for (let i = 0; i < count; i++) {
    const p = fromSvg(petal, { class: 'petal' });
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${9 + Math.random() * 10}s`;
    p.style.animationDelay = `${Math.random() * 9}s`;
    layer.append(p);
  }
  return layer;
}

export function renderHero(profile) {
  const { name, kicker, tagline, lede, links } = profile;
  return h('header', { id: 'inicio', class: 'hero' },
    fromSvg(plantLeft, { class: 'hero-plant hero-plant--left', 'aria-hidden': 'true' }),
    fromSvg(plantRight, { class: 'hero-plant hero-plant--right', 'aria-hidden': 'true' }),
    petals(),
    h('div', { class: 'hero-center' },
      h('h1', { class: 'hero-title' }, h('span', { class: 'hero-kicker' }, kicker), h('br'), name),
      h('div', { class: 'hero-rule' }),
      h('p', { class: 'hero-lede', html: lede }),
      h('div', { class: 'btn-row' },
        h('a', { class: 'btn btn--solid', href: '#proyectos' }, h('span', {}, 'Ver proyectos')),
        h('a', { class: 'btn', href: links.github, target: '_blank', rel: 'noopener noreferrer' }, h('span', {}, 'GitHub')),
      ),
      h('p', { class: 'hero-tagline' }, tagline),
    ),
  );
}
