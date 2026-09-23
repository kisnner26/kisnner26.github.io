import { h } from '../lib/dom.js';
import { toggleTheme, currentTheme } from '../lib/theme.js';

const items = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'writeups', label: 'Writeups' },
  { id: 'oss', label: 'Open source' },
  { id: 'certificados', label: 'Certificados' },
  { id: 'contacto', label: 'Contacto' },
];

/** Barra inferior con botones de contorno. Marca la sección visible y alterna el tema. */
export function renderNav() {
  const links = items.map(({ id, label }) =>
    h('a', { class: 'nav-btn', href: `#${id}`, 'data-target': id }, h('span', {}, `✦ ${label}`)));

  const themeLabel = h('span', {}, '');
  const setLabel = () => { themeLabel.textContent = currentTheme() === 'night' ? '☀ Papel' : '☾ Noche'; };
  setLabel();
  const themeBtn = h('button', {
    class: 'nav-btn nav-btn--theme', type: 'button', 'aria-label': 'Cambiar entre papel y noche',
    onClick: () => { toggleTheme(); setLabel(); },
  }, themeLabel);

  const nav = h('nav', { class: 'nav-bar', 'aria-label': 'Secciones' }, ...links, themeBtn);

  // resalta el enlace de la sección que está en pantalla
  const byId = new Map(links.map((a) => [a.dataset.target, a]));
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach((a) => a.classList.remove('active-nav'));
      byId.get(entry.target.id)?.classList.add('active-nav');
    }
  }, { rootMargin: '-45% 0px -50% 0px' });
  queueMicrotask(() => items.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el); }));

  return nav;
}
