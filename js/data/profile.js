/** Datos personales. Edita aquí; ningún componente tiene texto escrito a mano. */
export const profile = {
  name: 'Kisnner Obando',
  kicker: { es: 'desarrollador de software,', en: 'software developer,' },
  tagline: { es: 'código · diseño · open source', en: 'code · design · open source' },
  lede: {
    es:
      'Estudiante de <strong>Ingeniería en Sistemas de Información</strong> (UAM, Nicaragua) y freelancer desde 2025. ' +
      'Construyo backend transaccional y apps nativas para Apple, y tengo pull requests mergeados en radare2, Node.js y Geode.',
    en:
      'Information systems engineering student (<strong>UAM, Nicaragua</strong>) and freelancer since 2025. ' +
      'I build transactional backends and native Apple apps, and I have merged pull requests in radare2, Node.js and Geode.',
  },
  links: {
    github: 'https://github.com/kisnner26',
    linkedin: 'https://www.linkedin.com/in/kisnner-obando-16014029b/',
    email: 'kisnnerobando7@gmail.com',
    phone: '+505 8927 1455',
    cv: 'assets/cv/Kisnner_Obando_CV.pdf',
  },
  freelanceSince: '2025-01-01',
  // últimos valores conocidos (2026-10-20): solo se usan si data/stats.json no carga; lo normal es que mande js/lib/liveStats.js
  fallbackStats: {
    merged: { value: '9', label: { es: 'pull requests mergeados en proyectos ajenos: radare2, Node.js, Geode y más', en: 'pull requests merged into other people\'s projects: radare2, Node.js, Geode and more' } },
    prs: { value: '42', label: { es: 'pull requests enviados en total, 26 abiertos en revisión', en: 'pull requests sent in total, 26 open and under review' } },
  },
};
