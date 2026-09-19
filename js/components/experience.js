import { h } from '../lib/dom.js';
import { section } from './section.js';

function item(x) {
  return h('article', { class: 'experience-item' },
    h('div', {}, h('h3', { class: 'experience-role' }, x.role), h('p', { class: 'experience-org' }, x.org)),
    h('time', { class: 'experience-date' }, x.date),
  );
}

export function renderExperience(experience) {
  return section(
    { id: 'experiencia', eyebrow: 'en el campo', title: 'Experiencia', sub: 'aprendo construyendo y resolviendo problemas reales.' },
    h('div', { class: 'experience-list' }, experience.map(item)),
  );
}
