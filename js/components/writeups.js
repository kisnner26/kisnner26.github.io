import { h } from '../lib/dom.js';
import { section } from './section.js';

function row(w) {
  return h('article', { class: 'wu-row' },
    h('span', { class: 'wu-row-date' }, w.date),
    h('div', {},
      h('h3', { class: 'wu-row-title' }, h('a', { href: w.href }, w.title)),
      h('p', { class: 'wu-row-line' }, w.line),
      h('p', { class: 'wu-row-tags' }, w.tags.join(' · ')),
    ),
    h('span', { class: 'wu-row-lang' }, w.lang),
  );
}

export function renderWriteups(writeups) {
  return section(
    { id: 'writeups', eyebrow: 'investigación', title: 'Writeups', sub: 'problemas reales que resolví midiendo: logs, binarios y herramientas propias, con lo que no sé dicho en voz alta.' },
    h('div', { class: 'wu-list' }, writeups.map(row)),
  );
}
