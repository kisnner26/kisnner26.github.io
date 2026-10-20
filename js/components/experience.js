import { h } from '../lib/dom.js';
import { t } from '../lib/i18n.js';
import { section } from './section.js';

function item(x) {
  return h('article', { class: 'experience-item' },
    h('div', {}, h('h3', { class: 'experience-role' }, t(x.role)), h('p', { class: 'experience-org' }, t(x.org))),
    h('time', { class: 'experience-date' }, t(x.date)),
  );
}

export function renderExperience(experience) {
  return section('experiencia', h('div', { class: 'experience-list' }, experience.map(item)));
}
