import { h } from '../lib/dom.js';

/** Contenedor de sección con encabezado: <section id> + eyebrow + título + subtítulo. */
export function section({ id, eyebrow, title, sub }, ...content) {
  return h('section', { id, class: 'section reveal', 'aria-labelledby': `${id}-title` },
    h('div', { class: 'wrap' },
      h('header', { class: 'sec-head' },
        eyebrow && h('span', { class: 'sec-eyebrow' }, eyebrow),
        h('h2', { class: 'sec-title', id: `${id}-title` }, title),
        sub && h('p', { class: 'sec-sub' }, sub),
      ),
      ...content,
    ),
  );
}
