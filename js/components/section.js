import { h } from '../lib/dom.js';
import { ui } from '../lib/i18n.js';

/** Contenedor de sección con encabezado: <section id> + eyebrow + título + subtítulo.
 *  Los textos del encabezado salen de UI.sections[id] en el idioma activo. */
export function section(id, ...content) {
  const eyebrow = ui(`sections.${id}.eyebrow`);
  const sub = ui(`sections.${id}.sub`);
  return h('section', { id, class: 'section reveal', 'aria-labelledby': `${id}-title` },
    h('div', { class: 'wrap' },
      h('header', { class: 'sec-head' },
        eyebrow && h('span', { class: 'sec-eyebrow' }, eyebrow),
        h('h2', { class: 'sec-title', id: `${id}-title` }, ui(`sections.${id}.title`)),
        sub && h('p', { class: 'sec-sub' }, sub),
      ),
      ...content,
    ),
  );
}
