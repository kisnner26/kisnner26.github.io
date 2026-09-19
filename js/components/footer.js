import { h, extLink } from '../lib/dom.js';
import { since } from '../lib/uptime.js';

export function renderFooter(profile) {
  const years = new Date().getFullYear();
  return h('footer', { id: 'contacto' },
    h('div', { class: 'wrap footer-row' },
      h('div', {},
        h('p', { class: 'footer-signoff' }, '¿Construimos algo útil?'),
        h('p', { class: 'footer-uptime' }, `freelance desde hace ${since(profile.freelanceSince)}`),
      ),
      h('div', { class: 'footer-links' },
        extLink(profile.links.github, 'GitHub'),
        extLink(profile.links.linkedin, 'LinkedIn'),
        h('a', { href: `mailto:${profile.links.email}` }, 'Escríbeme'),
      ),
      h('small', { class: 'footer-copy' }, `© ${years} ${profile.name}`),
    ),
  );
}
