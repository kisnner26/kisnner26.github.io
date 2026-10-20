import { h, extLink } from '../lib/dom.js';
import { ui, fill, UI } from '../lib/i18n.js';
import { since } from '../lib/uptime.js';

export function renderFooter(profile) {
  const years = new Date().getFullYear();
  return h('footer', { id: 'contacto' },
    h('div', { class: 'wrap footer-row' },
      h('div', {},
        h('p', { class: 'footer-signoff' }, ui('footer.signoff')),
        h('p', { class: 'footer-uptime' }, fill(UI.footer.uptime, { time: since(profile.freelanceSince) })),
      ),
      h('div', { class: 'footer-links' },
        h('a', { href: `mailto:${profile.links.email}` }, ui('footer.write')),
        h('a', { href: profile.links.cv, download: 'Kisnner_Obando_CV.pdf' }, ui('footer.cv')),
        extLink(profile.links.github, 'GitHub'),
        extLink(profile.links.linkedin, 'LinkedIn'),
      ),
      h('small', { class: 'footer-copy' }, `© ${years} ${profile.name}`),
    ),
  );
}
