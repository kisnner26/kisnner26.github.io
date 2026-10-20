import { h, extLink } from '../lib/dom.js';
import { t, ui, fill, UI } from '../lib/i18n.js';
import { section } from './section.js';

function certificate(c, extra) {
  const title = t(c.title);
  const content = [
    h('div', { class: 'certificate-date' }, t(c.date)),
    h('div', { class: 'certificate-copy' },
      h('h3', { class: 'certificate-title' }, title),
      h('p', { class: 'certificate-org' }, c.org),
      c.detail && h('p', { class: 'certificate-detail' }, t(c.detail)),
    ),
    c.verify && extLink(c.verify, ui('common.verify'), { class: 'certificate-verify' }),
  ];
  const cls = (base) => (extra ? `${base} certificate--extra` : base);

  if (!c.image) return h('article', { class: cls('certificate certificate--text') }, ...content);

  const dialog = h('dialog', { class: 'certificate-dialog', 'aria-label': fill(UI.common.zoomed, { title }) },
    h('button', { class: 'dialog-close', type: 'button', 'aria-label': ui('common.close'), onClick: () => dialog.close() }, '×'),
    h('img', { src: c.image, alt: t(c.alt) }),
  );
  const preview = h('button', {
    class: 'certificate-preview', type: 'button', 'aria-label': fill(UI.common.zoom, { title }),
    onClick: () => dialog.showModal(),
  }, h('img', { src: c.image, alt: '', loading: 'lazy', decoding: 'async' }));
  return h('article', { class: cls('certificate certificate--image') }, preview, ...content, dialog);
}

/** Muestra primero los destacados; el resto queda plegado detrás de un botón. */
export function renderCertificates(certificates, featured = []) {
  const shown = new Set(featured);
  const main = certificates.filter((c) => shown.has(c.id));
  const rest = certificates.filter((c) => !shown.has(c.id));
  const list = h('div', { class: 'certificates rail' }, main.map((c) => certificate(c, false)), rest.map((c) => certificate(c, true)));

  const toggle = rest.length && h('button', { class: 'btn certificates-toggle', type: 'button', 'aria-expanded': 'false' }, '');
  if (toggle) {
    const label = () => {
      const open = list.classList.contains('expanded');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? ui('common.collapse') : fill(UI.common.expand, { n: certificates.length });
    };
    toggle.addEventListener('click', () => { list.classList.toggle('expanded'); label(); });
    label();
  }

  return section('certificados',
    h('p', { class: 'rail-hint', 'aria-hidden': 'true' }, ui('common.swipe')),
    list,
    toggle && h('div', { class: 'btn-row' }, toggle),
  );
}
