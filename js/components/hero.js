import { h, fromSvg } from '../lib/dom.js';
import { t, ui } from '../lib/i18n.js';
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
      h('p', { class: 'hero-status' }, h('span', { class: 'hero-dot', 'aria-hidden': 'true' }), ui('hero.available')),
      h('h1', { class: 'hero-title' }, h('span', { class: 'hero-kicker' }, t(kicker)), h('br'), name),
      h('div', { class: 'hero-rule' }),
      h('p', { class: 'hero-lede', html: t(lede) }),
      h('ul', { class: 'hero-facts', 'aria-label': ui('hero.factsLabel') }, t(profile.availability).map((f) => h('li', {}, f))),
      h('div', { class: 'btn-row' },
        h('a', { class: 'btn btn--solid', href: links.cv, download: 'Kisnner_Obando_CV.pdf' }, h('span', {}, ui('hero.cv'))),
        h('a', { class: 'btn', href: `mailto:${links.email}` }, h('span', {}, ui('hero.contact'))),
        h('a', { class: 'btn', href: '#proyectos' }, h('span', {}, ui('hero.projects'))),
      ),
      h('p', { class: 'hero-tagline' }, t(tagline)),
    ),
  );
}
