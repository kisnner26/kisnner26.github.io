/** Idioma de la página: español o inglés. Lo decide ?lang=, lo guardado o el idioma del navegador. */
const KEY = 'lang';
const SUPPORTED = ['es', 'en'];

function detect() {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (SUPPORTED.includes(q)) return q;
    const saved = localStorage.getItem(KEY);
    if (SUPPORTED.includes(saved)) return saved;
  } catch { /* sin acceso a localStorage: se usa el idioma del navegador */ }
  return (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
}

let current = detect();
if (typeof document !== 'undefined') document.documentElement.lang = current;

export const lang = () => current;

export function setLang(next) {
  if (!SUPPORTED.includes(next)) return;
  current = next;
  if (typeof document !== 'undefined') document.documentElement.lang = next;
  try { localStorage.setItem(KEY, next); } catch { /* da igual: solo se pierde la preferencia */ }
  // si la dirección trae ?lang=, se mantiene en sincronía para que recargar no devuelva el idioma anterior
  try {
    const url = new URL(location.href);
    if (url.searchParams.has(KEY)) { url.searchParams.set(KEY, next); history.replaceState(null, '', url); }
  } catch { /* sin history: no pasa nada */ }
}

/** Elige el texto del idioma actual. Acepta una cadena sola o { es, en }. */
export function t(value) {
  if (value && typeof value === 'object' && !Array.isArray(value) && ('es' in value || 'en' in value)) {
    return value[current] ?? value.en ?? value.es;
  }
  return value;
}

/** Sustituye {nombre} en una plantilla ya traducida. */
export const fill = (template, values) => String(t(template)).replace(/\{(\w+)\}/g, (_, k) => values[k] ?? '');

/** Textos de la interfaz. Los de los datos (proyectos, certificados...) viven junto a cada dato. */
export const UI = {
  nav: {
    inicio: { es: 'Inicio', en: 'Home' },
    destacado: { es: 'Destacado', en: 'Featured' },
    proyectos: { es: 'Proyectos', en: 'Projects' },
    oss: { es: 'Open source', en: 'Open source' },
    writeups: { es: 'Writeups', en: 'Writeups' },
    experiencia: { es: 'Experiencia', en: 'Experience' },
    certificados: { es: 'Certificados', en: 'Certificates' },
    contacto: { es: 'Contacto', en: 'Contact' },
  },
  sections: {
    destacado: {
      eyebrow: { es: 'caso destacado', en: 'featured case' },
      title: { es: 'AltServer en macOS 27', en: 'AltServer on macOS 27' },
      sub: { es: 'un problema real, medido, con un arreglo propuesto y los límites a la vista.', en: 'a real problem, measured, with a proposed fix and its limits in plain sight.' },
    },
    proyectos: {
      eyebrow: { es: 'cuaderno de trabajo', en: 'workbook' },
      title: { es: 'Proyectos', en: 'Projects' },
      sub: { es: 'cada tarjeta cuenta la decisión técnica que más define al proyecto.', en: 'each card tells the technical decision that most defines the project.' },
    },
    oss: {
      eyebrow: { es: 'open source', en: 'open source' },
      title: { es: 'Contribuciones', en: 'Contributions' },
      sub: { es: 'pull requests a proyectos que uso, con su estado real: mergeado, abierto o cerrado.', en: 'pull requests to projects I use, with their real status: merged, open or closed.' },
    },
    writeups: {
      eyebrow: { es: 'investigación', en: 'research' },
      title: { es: 'Writeups', en: 'Writeups' },
      sub: { es: 'problemas reales que resolví midiendo: logs, binarios y herramientas propias, con lo que no sé dicho en voz alta.', en: 'real problems I solved by measuring: logs, binaries and my own tools, saying out loud what I don\'t know.' },
    },
    experiencia: {
      eyebrow: { es: 'en el campo', en: 'in the field' },
      title: { es: 'Experiencia', en: 'Experience' },
      sub: { es: 'aprendo construyendo y resolviendo problemas reales.', en: 'I learn by building and solving real problems.' },
    },
    certificados: {
      eyebrow: { es: 'aprendizaje continuo', en: 'continuous learning' },
      title: { es: 'Certificados', en: 'Certificates' },
      sub: { es: 'cursos que terminé, con sus evidencias cuando están disponibles.', en: 'courses I finished, with their evidence when available.' },
    },
  },
  hero: {
    available: { es: 'Disponible para trabajo remoto', en: 'Available for remote work' },
    cv: { es: 'Descargar CV', en: 'Download CV' },
    contact: { es: 'Contactar', en: 'Get in touch' },
    projects: { es: 'Ver proyectos', en: 'See projects' },
  },
  common: {
    demo: { es: 'demo', en: 'demo' },
    code: { es: 'código', en: 'code' },
    swipe: { es: 'desliza para ver más →', en: 'swipe to see more →' },
    verify: { es: 'Verificar certificado →', en: 'Verify certificate →' },
    expand: { es: 'Ver los {n} certificados', en: 'Show all {n} certificates' },
    collapse: { es: 'Mostrar menos', en: 'Show fewer' },
    zoom: { es: 'Ampliar certificado: {title}', en: 'Enlarge certificate: {title}' },
    zoomed: { es: 'Vista ampliada: {title}', en: 'Enlarged view: {title}' },
    close: { es: 'Cerrar certificado', en: 'Close certificate' },
    theme: { es: 'Cambiar entre papel y noche', en: 'Switch between paper and night' },
    light: { es: '☀ Papel', en: '☀ Light' },
    night: { es: '☾ Noche', en: '☾ Night' },
    sections: { es: 'Secciones', en: 'Sections' },
    openSections: { es: 'Abrir secciones', en: 'Open sections' },
    language: { es: 'Cambiar idioma', en: 'Change language' },
  },
  status: { merged: { es: 'mergeado', en: 'merged' }, open: { es: 'abierto', en: 'open' }, closed: { es: 'cerrado', en: 'closed' } },
  ossMore: {
    es: 'ver los {total} pull requests en GitHub · {merged} mergeados, {open} abiertos, {closed} cerrados · actualizado el {updated}',
    en: 'see all {total} pull requests on GitHub · {merged} merged, {open} open, {closed} closed · updated {updated}',
  },
  footer: {
    signoff: { es: '¿Construimos algo útil?', en: 'Shall we build something useful?' },
    uptime: { es: 'freelance desde hace {time}', en: 'freelancing for {time}' },
    write: { es: 'Escríbeme', en: 'Email me' },
    cv: { es: 'Descargar CV', en: 'Download CV' },
  },
  time: {
    year: { es: 'año', en: 'year' }, years: { es: 'años', en: 'years' },
    month: { es: 'mes', en: 'month' }, months: { es: 'meses', en: 'months' },
  },
};

export const ui = (path) => t(path.split('.').reduce((node, key) => node?.[key], UI));
