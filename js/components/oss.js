import { h, extLink } from '../lib/dom.js';
import { t, ui, fill, UI } from '../lib/i18n.js';
import { section } from './section.js';

function row(c) {
  return h('div', { class: 'oss-row' },
    h('span', { class: 'oss-repo' }, c.repo),
    h('div', {},
      h('div', { class: 'oss-title' }, extLink(c.url, c.title)),
      h('div', { class: 'oss-meta' }, `#${c.number} · ${t(c.meta)}`),
    ),
    h('span', { class: `oss-badge oss-badge--${c.status}` }, t(UI.status[c.status]) ?? c.status),
  );
}

export function renderOss(contributions, live = null) {
  return section('oss',
    h('div', { class: 'oss-list' }, contributions.map(row)),
    live && live.prs.total > contributions.length && h('p', { class: 'oss-more' },
      extLink(`https://github.com/pulls?q=author%3A${live.login}+-user%3A${live.login}+is%3Apr`,
        fill(UI.ossMore, { total: live.prs.total, merged: live.prs.merged, open: live.prs.open, closed: live.prs.closed, updated: live.updated }))),
  );
}
