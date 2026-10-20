import { h, extLink } from '../lib/dom.js';
import { t, ui } from '../lib/i18n.js';
import { section } from './section.js';

function media(m) {
  if (m.src) return h('div', { class: 'card-media' }, h('img', { src: m.src, alt: t(m.alt), loading: 'lazy', decoding: 'async', width: 1280, height: 800 }));
  const [title, ...lines] = m.sketch;
  return h('div', { class: 'card-media card-media--sketch', 'aria-hidden': 'true' },
    h('pre', {}, h('b', {}, title), lines.join('\n')));
}

function card(p) {
  return h('article', { class: 'card' },
    media(p.media),
    h('div', { class: 'card-body' },
      h('h3', { class: 'card-title' }, p.title),
      h('p', { class: 'card-line' }, t(p.line)),
      h('div', { class: 'tags' }, p.tags.map((tag) => h('span', { class: 'tag' }, t(tag)))),
      h('div', { class: 'card-links' }, p.links.map((l) => extLink(l.href, `${ui(`common.${l.label}`)} →`))),
    ),
  );
}

export function renderProjects(projects) {
  return section('proyectos',
    h('p', { class: 'rail-hint', 'aria-hidden': 'true' }, ui('common.swipe')),
    h('div', { class: 'grid rail' }, projects.map(card)),
  );
}
