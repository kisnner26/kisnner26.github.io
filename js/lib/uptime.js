/** Tiempo transcurrido desde una fecha, en texto corto: "1 año, 8 meses". */
export function since(isoDate, now = new Date()) {
  const start = new Date(isoDate);
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;
  months = Math.max(months, 0);
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? 'año' : 'años'}`);
  if (rest || !years) parts.push(`${rest} ${rest === 1 ? 'mes' : 'meses'}`);
  return parts.join(', ');
}
