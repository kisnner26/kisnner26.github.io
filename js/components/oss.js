import { h, extLink } from '../lib/dom.js';
import { section } from './section.js';

const STATUS = { merged: 'mergeado', open: 'abierto' };

function row(c) {
  return h('div', { class: 'oss-row' },
    h('span', { class: 'oss-repo' }, c.repo),
    h('div', {},
      h('div', { class: 'oss-title' }, extLink(c.url, c.title)),
      h('div', { class: 'oss-meta' }, `#${c.number} · ${c.meta}`),
    ),
    h('span', { class: `oss-badge oss-badge--${c.status}` }, STATUS[c.status] ?? c.status),
  );
}

export function renderOss(contributions) {
  return section(
    { id: 'oss', eyebrow: 'open source', title: 'Contribuciones', sub: 'pull requests a herramientas que uso, probados contra binarios y tests reales antes de enviarlos.' },
    h('div', { class: 'oss-list' }, contributions.map(row)),
  );
}
