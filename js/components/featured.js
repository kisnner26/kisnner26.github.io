import { h, extLink } from '../lib/dom.js';
import { t } from '../lib/i18n.js';
import { section } from './section.js';

export function renderFeatured({ facts, links }) {
  return section('destacado',
    h('div', { class: 'featured' },
      h('dl', { class: 'featured-facts' },
        facts.map((f) => h('div', { class: 'featured-fact' }, h('dt', {}, t(f.label)), h('dd', {}, t(f.text))))),
      h('p', { class: 'featured-links' }, links.map((l) => extLink(l.href, `${t(l.label)} →`))),
    ),
  );
}
