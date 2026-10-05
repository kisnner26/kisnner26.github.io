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

/** Barra inferior. En pantallas anchas muestra todos los enlaces; en teléfonos queda colapsada
 *  en una pastilla con la sección actual y abre el resto como una hoja hacia arriba. */
export function renderNav() {
  const links = items.map(({ id, label }) =>
    h('a', { class: 'nav-btn', href: `#${id}`, 'data-target': id }, h('span', {}, h('i', { class: 'nav-glyph', 'aria-hidden': 'true' }, '✦ '), label)));

  const themeLabel = h('span', {}, '');
  const setLabel = () => { themeLabel.textContent = currentTheme() === 'night' ? '☀ Papel' : '☾ Noche'; };
  setLabel();
  const themeBtn = h('button', {
    class: 'nav-btn nav-btn--theme', type: 'button', 'aria-label': 'Cambiar entre papel y noche',
    onClick: () => { toggleTheme(); setLabel(); },
  }, themeLabel);

  const current = h('span', { class: 'nav-current' }, items[0].label);
  const menuBtn = h('button', {
    class: 'nav-menu', type: 'button', 'aria-expanded': 'false', 'aria-controls': 'nav-links',
    'aria-label': 'Abrir secciones',
  }, h('span', { class: 'nav-menu-glyph', 'aria-hidden': 'true' }, '✦'), current, h('span', { class: 'nav-chevron', 'aria-hidden': 'true' }, '▴'));

  const sheet = h('div', { class: 'nav-links', id: 'nav-links' }, ...links);
  const nav = h('nav', { class: 'nav-bar', 'aria-label': 'Secciones' }, menuBtn, sheet, themeBtn);

  const setOpen = (open) => {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  };
  menuBtn.addEventListener('click', () => setOpen(!nav.classList.contains('open')));
  sheet.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('click', (e) => { if (!nav.contains(e.target)) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });

  // resalta el enlace de la sección que está en pantalla y lo muestra en la pastilla
  const byId = new Map(links.map((a) => [a.dataset.target, a]));
  const labels = new Map(items.map(({ id, label }) => [id, label]));
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      links.forEach((a) => a.classList.remove('active-nav'));
      byId.get(entry.target.id)?.classList.add('active-nav');
      current.textContent = labels.get(entry.target.id) ?? current.textContent;
    }
  }, { rootMargin: '-45% 0px -50% 0px' });
  queueMicrotask(() => items.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el); }));

  return nav;
}
