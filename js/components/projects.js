import { h, extLink } from '../lib/dom.js';
import { t, ui, fill, UI } from '../lib/i18n.js';
import { section } from './section.js';

function media(m) {
  if (m.src) return h('div', { class: 'card-media' }, h('img', { src: m.src, alt: t(m.alt), loading: 'lazy', decoding: 'async', width: 1280, height: 800 }));
  const [title, ...lines] = m.sketch;
  return h('div', { class: 'card-media card-media--sketch', 'aria-hidden': 'true' },
    h('pre', {}, h('b', {}, title), lines.join('\n')));
}

function card(p, extra = false) {
  return h('article', { class: extra ? 'card card--extra' : 'card' },
    media(p.media),
    h('div', { class: 'card-body' },
      h('h3', { class: 'card-title' }, p.title),
      h('p', { class: 'card-line' }, t(p.line)),
      h('div', { class: 'tags' }, p.tags.map((tag) => h('span', { class: 'tag' }, t(tag)))),
      h('div', { class: 'card-links' }, p.links.map((l) => extLink(l.href, `${ui(`common.${l.label}`)} →`))),
    ),
  );
}

const VISIBLE = 6;

/** Los primeros proyectos van siempre a la vista; el resto queda plegado detrás de un botón. */
export function renderProjects(projects) {
  const grid = h('div', { class: 'grid rail' }, projects.map((p, i) => card(p, i >= VISIBLE)));
  const toggle = projects.length > VISIBLE && h('button', { class: 'btn projects-toggle', type: 'button', 'aria-expanded': 'false' }, '');
  if (toggle) {
    const label = () => {
      const open = grid.classList.contains('expanded');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? ui('common.collapse') : fill(UI.common.expandProjects, { n: projects.length });
    };
    toggle.addEventListener('click', () => { grid.classList.toggle('expanded'); label(); });
    label();
  }
  return section('proyectos',
    h('p', { class: 'rail-hint', 'aria-hidden': 'true' }, ui('common.swipe')),
    grid,
    toggle && h('div', { class: 'btn-row' }, toggle),
  );
}
