import { certificates } from './certificates.js';

/** Datos personales. Edita aquí; ningún componente tiene texto escrito a mano. */
export const profile = {
  name: 'Kisnner Obando',
  kicker: 'ingeniero en sistemas de información,',
  tagline: 'código · diseño · open source',
  lede:
    'Estudiante de <strong>Ingeniería en Sistemas de Información Computacionales</strong> (UAM, Nicaragua) ' +
    'y freelancer desde 2025. Backend transaccional, apps nativas de macOS e iOS y contribuciones ' +
    'reales a proyectos open source, incluido el ecosistema de Apple.',
  links: {
    github: 'https://github.com/kisnner26',
    linkedin: 'https://www.linkedin.com/in/kisnner-obando-16014029b/',
    email: 'kisnnerobando7@gmail.com',
  },
  freelanceSince: '2025-01-01',
  // cifras de GitHub a 2026-09-20 (api graphql y `gh search prs`); los PRs cuentan los enviados a repos de otros, en cualquier estado
  stats: [
    { value: '289', label: 'contribuciones en GitHub en los últimos 12 meses' },
    { value: '13', label: 'pull requests a proyectos ajenos: radare2, rizin y Apple; 2 ya mergeados' },
    { value: String(certificates.length), label: 'certificaciones: Harvard, Cisco, Anthropic y más' },
  ],
};
