import { h } from '../lib/dom.js';
import { t } from '../lib/i18n.js';
import { section } from './section.js';

function row(w) {
  return h('article', { class: 'wu-row' },
    h('span', { class: 'wu-row-date' }, t(w.date)),
    h('div', {},
      h('h3', { class: 'wu-row-title' }, h('a', { href: w.href }, w.title)),
      h('p', { class: 'wu-row-line' }, t(w.line)),
      h('p', { class: 'wu-row-tags' }, w.tags.map(t).join(' · ')),
    ),
    h('span', { class: 'wu-row-lang' }, w.lang),
  );
}

export function renderWriteups(writeups) {
  return section('writeups', h('div', { class: 'wu-list' }, writeups.map(row)));
}
