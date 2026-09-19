import { h, extLink } from '../lib/dom.js';
import { section } from './section.js';

function certificate(c) {
  const content = [
    h('div', { class: 'certificate-date' }, c.date),
    h('div', { class: 'certificate-copy' },
      h('h3', { class: 'certificate-title' }, c.title),
      h('p', { class: 'certificate-org' }, c.org),
      c.detail && h('p', { class: 'certificate-detail' }, c.detail),
    ),
    c.verify && extLink(c.verify, 'Verificar certificado →', { class: 'certificate-verify' }),
  ];

  if (!c.image) return h('article', { class: 'certificate certificate--text' }, ...content);

  const dialog = h('dialog', { class: 'certificate-dialog', 'aria-label': `Vista ampliada: ${c.title}` },
    h('button', { class: 'dialog-close', type: 'button', 'aria-label': 'Cerrar certificado', onClick: () => dialog.close() }, '×'),
    h('img', { src: c.image, alt: c.alt }),
  );
  const preview = h('button', {
    class: 'certificate-preview', type: 'button', 'aria-label': `Ampliar certificado: ${c.title}`,
    onClick: () => dialog.showModal(),
  }, h('img', { src: c.image, alt: '' }));
  return h('article', { class: 'certificate certificate--image' }, preview, ...content, dialog);
}

export function renderCertificates(certificates) {
  return section(
    { id: 'certificados', eyebrow: 'aprendizaje continuo', title: 'Certificados', sub: 'cursos que terminé, con sus evidencias cuando están disponibles.' },
    h('div', { class: 'certificates' }, certificates.map(certificate)),
  );
}
