/** Cifras vivas de GitHub: las genera `scripts/update-stats.sh` (action programada) en data/stats.json. */
export async function loadLiveStats() {
  try {
    const res = await fetch('data/stats.json', { cache: 'no-cache' });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

/** Las tres cifras de la franja. Sin datos vivos usa los últimos valores conocidos (`fallback`). */
export function buildStats({ live, fallback, writeups }) {
  const reports = {
    value: String(writeups.length),
    label: { es: 'informes técnicos, con lo que probé y lo que no', en: 'technical write-ups, with what I tested and what I didn\'t' },
  };
  if (!live) return [fallback.merged, fallback.prs, reports];
  const { prs } = live;
  return [
    {
      value: String(prs.merged),
      label: { es: 'pull requests mergeados en proyectos ajenos: radare2, Node.js, Geode y más', en: 'pull requests merged into other people\'s projects: radare2, Node.js, Geode and more' },
    },
    {
      value: String(prs.total),
      label: { es: `pull requests enviados en total, ${prs.open} abiertos en revisión`, en: `pull requests sent in total, ${prs.open} open and under review` },
    },
    reports,
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
