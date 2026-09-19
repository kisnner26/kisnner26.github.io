/** Crea un elemento: h('div', { class: 'x', onClick: fn }, hijo1, hijo2). */
export function h(tag, props = {}, ...children) {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(props ?? {})) {
    if (value == null || value === false) continue;
    if (key === 'class') el.className = value;
    else if (key === 'text') el.textContent = value;
    else if (key === 'html') el.innerHTML = value; // solo para cadenas estáticas y de confianza (SVG, datos propios)
    else if (key.startsWith('on') && typeof value === 'function') el.addEventListener(key.slice(2).toLowerCase(), value);
    else el.setAttribute(key, value === true ? '' : value);
  }
  for (const child of children.flat()) {
    if (child == null || child === false) continue;
    el.append(child.nodeType ? child : document.createTextNode(child));
  }
  return el;
}

/** Enlace externo seguro. */
export const extLink = (href, label, props = {}) =>
  h('a', { href, target: '_blank', rel: 'noopener noreferrer', ...props }, label);

/** Crea un elemento a partir de un fragmento SVG estático. */
export function fromSvg(markup, props = {}) {
  const wrap = document.createElement('div');
  wrap.innerHTML = markup.trim();
  const el = wrap.firstElementChild;
  for (const [k, v] of Object.entries(props)) el.setAttribute(k, v);
  return el;
}
