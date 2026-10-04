/** Cifras vivas de GitHub: las genera `scripts/update-stats.sh` (action programada) en data/stats.json. */
export async function loadLiveStats() {
  try {
    const res = await fetch('data/stats.json', { cache: 'no-cache' });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

/** Nombre corto de cada dueño de repo, en el orden en que se muestran. */
const OWNER_NAMES = { radareorg: 'radare2', rizinorg: 'rizin', apple: 'Apple' };
const OWNER_PRIORITY = Object.keys(OWNER_NAMES);

function listEs(items) {
  return items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} y ${items.at(-1)}`;
}

/** Une los dueños conocidos con otros hasta 3 nombres; si sobran, termina en "y más". */
function ownersLabel(owners) {
  const known = OWNER_PRIORITY.filter((o) => owners.includes(o));
  const rest = owners.filter((o) => !OWNER_PRIORITY.includes(o));
  const names = [...known, ...rest].map((o) => OWNER_NAMES[o] ?? o);
  return names.length > 3 ? `${names.slice(0, 3).join(', ')} y más` : listEs(names);
}

/** Orgs de las certificaciones: primero las de más renombre, luego por frecuencia. */
const CERT_PRESTIGE = ['Harvard', 'Cisco', 'Anthropic'];
const shortOrg = (org) => org.split(' · ')[0].replace(/ (University|Networking Academy|Learning)$/, '');

export function certificatesLabel(certificates) {
  const counts = new Map();
  certificates.forEach((c) => counts.set(shortOrg(c.org), (counts.get(shortOrg(c.org)) ?? 0) + 1));
  const orgs = [...counts.keys()];
  const ordered = [
    ...CERT_PRESTIGE.filter((o) => counts.has(o)),
    ...orgs.filter((o) => !CERT_PRESTIGE.includes(o)).sort((a, b) => counts.get(b) - counts.get(a)),
  ];
  const shown = ordered.slice(0, 3);
  const n = certificates.length;
  return `${n === 1 ? 'certificación' : 'certificaciones'}: ${shown.join(', ')}${ordered.length > 3 ? ' y más' : ''}`;
}

/** Las tres cifras de la franja. Sin datos vivos usa los últimos valores conocidos (`fallback`). */
export function buildStats({ live, fallback, certificates }) {
  const certs = { value: String(certificates.length), label: certificatesLabel(certificates) };
  if (!live) return [fallback.contributions, fallback.prs, certs];
  const { prs } = live;
  const merged = `${prs.merged} ya mergeado${prs.merged === 1 ? '' : 's'}`;
  return [
    { value: String(live.contributions), label: 'contribuciones en GitHub en los últimos 12 meses' },
    { value: String(prs.total), label: `pull requests a proyectos ajenos: ${ownersLabel(prs.owners)}; ${merged}` },
    certs,
  ];
}

/** Actualiza estado y título de las contribuciones destacadas con lo que dice GitHub. */
export function mergeContributions(curated, live) {
  if (!live) return curated;
  const byUrl = new Map(live.prs.items.map((p) => [p.url, p]));
  return curated.map((c) => {
    const p = byUrl.get(c.url);
    return p ? { ...c, title: p.title, status: p.status } : c;
  });
}
