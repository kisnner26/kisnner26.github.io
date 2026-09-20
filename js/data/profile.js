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
  stats: [
    { value: '4', label: 'plataformas: macOS, iOS, watchOS y navegador' },
    // pruebas de los paquetes de Girasol (SunKit 35 + HealthCore 52 + GameCore 86), contadas con `swift test`
    { value: '173', label: 'pruebas automáticas en Girasol' },
    { value: String(certificates.length), label: 'certificaciones: Harvard, Cisco, Anthropic y más' },
  ],
};
