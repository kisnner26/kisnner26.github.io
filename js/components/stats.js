import { h } from '../lib/dom.js';
import { t } from '../lib/i18n.js';

/** Franja de cifras. Recibe la lista ya calculada para no acoplarse a los datos. */
export function renderStats(stats) {
  return h('div', { class: 'wrap' },
    h('div', { class: 'stats reveal', role: 'list' },
      stats.map(({ value, label }) => h('div', { class: 'stat', role: 'listitem' }, h('b', {}, value), h('span', {}, t(label))))));
}
