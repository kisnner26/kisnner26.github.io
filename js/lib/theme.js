/** Tema claro (papel) y oscuro (noche). Guarda la preferencia si el navegador lo permite. */
const KEY = 'theme';

export const currentTheme = () => document.documentElement.dataset.theme === 'night' ? 'night' : 'paper';

export function toggleTheme() {
  const next = currentTheme() === 'night' ? 'paper' : 'night';
  if (next === 'night') document.documentElement.dataset.theme = 'night';
  else delete document.documentElement.dataset.theme;
  try { localStorage.setItem(KEY, next === 'night' ? 'night' : ''); } catch { /* sin almacenamiento */ }
  return next;
}
