/** Datos personales. Edita aquí; ningún componente tiene texto escrito a mano. */
export const profile = {
  name: 'Kisnner Obando',
  kicker: { es: 'desarrollador full-stack JavaScript,', en: 'full-stack JavaScript developer,' },
  tagline: { es: 'código · diseño · open source', en: 'code · design · open source' },
  lede: {
    es:
      'Estudiante de <strong>Ingeniería en Sistemas de Información</strong> (UAM, Nicaragua) y freelancer desde 2025. ' +
      'Construyo apps full-stack con Node.js, React y TypeScript: backend transaccional, tiempo real y bases de datos con Supabase y PostgreSQL. Tengo pull requests mergeados en radare2, Node.js y Geode.',
    en:
      'Information systems engineering student (<strong>UAM, Nicaragua</strong>) and freelancer since 2025. ' +
      'I build full-stack apps with Node.js, React and TypeScript: transactional backends, real time and databases with Supabase and PostgreSQL. I have merged pull requests in radare2, Node.js and Geode.',
  },
  links: {
    github: 'https://github.com/kisnner26',
    linkedin: 'https://www.linkedin.com/in/kisnner-obando-16014029b/',
    email: 'kisnnerobando7@gmail.com',
    phone: '+505 8927 1455',
    cv: 'assets/cv/Kisnner_Obando_CV.pdf',
  },
  availability: {
    es: ['Remoto', 'UTC−6, sin cambio de hora', 'Español nativo', 'Inglés técnico escrito'],
    en: ['Remote', 'UTC−6, no daylight saving', 'Native Spanish', 'Written technical English'],
  },
  freelanceSince: '2025-01-01',
  // últimos valores conocidos (2026-10-20): solo se usan si data/stats.json no carga; lo normal es que mande js/lib/liveStats.js
  fallbackStats: {
    merged: { value: '9', label: { es: 'pull requests mergeados en proyectos ajenos: radare2, Node.js, Geode y más', en: 'pull requests merged into other people\'s projects: radare2, Node.js, Geode and more' } },
    prs: { value: '42', label: { es: 'pull requests enviados en total, 26 abiertos en revisión', en: 'pull requests sent in total, 26 open and under review' } },
  },
};
