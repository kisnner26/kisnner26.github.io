import { h, extLink } from '../lib/dom.js';
import { section } from './section.js';

function media(m) {
  if (m.src) return h('div', { class: 'card-media' }, h('img', { src: m.src, alt: m.alt, loading: 'lazy', decoding: 'async' }));
  const [title, ...lines] = m.sketch;
  return h('div', { class: 'card-media card-media--sketch', 'aria-hidden': 'true' },
    h('pre', {}, h('b', {}, title), lines.join('\n')));
}

function card(p) {
  return h('article', { class: 'card' },
    media(p.media),
    h('div', { class: 'card-body' },
      h('h3', { class: 'card-title' }, p.title),
      h('p', { class: 'card-line' }, p.line),
      h('div', { class: 'tags' }, p.tags.map((t) => h('span', { class: 'tag' }, t))),
      h('div', { class: 'card-links' }, p.links.map((l) => extLink(l.href, `${l.label} →`))),
    ),
  );
}

export function renderProjects(projects) {
  return section(
    { id: 'proyectos', eyebrow: 'cuaderno de trabajo', title: 'Proyectos', sub: 'cada tarjeta cuenta la decisión técnica que más define al proyecto.' },
    h('div', { class: 'grid' }, projects.map(card)),
  );
}
