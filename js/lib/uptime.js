import { ui } from './i18n.js';

/** Tiempo transcurrido desde una fecha, en texto corto: "1 año, 8 meses" (o "1 year, 8 months"). */
export function since(isoDate, now = new Date()) {
  const start = new Date(isoDate);
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  months = Math.max(months, 0);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} ${ui(years === 1 ? 'time.year' : 'time.years')}`);
  if (rest || !years) parts.push(`${rest} ${ui(rest === 1 ? 'time.month' : 'time.months')}`);
  return parts.join(', ');
}
