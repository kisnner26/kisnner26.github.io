/**
 * Certificaciones en orden cronológico.
 * `image` es la foto del certificado; si falta, se dibuja una tarjeta de texto.
 */
const img = (name) => `assets/img/certificates/${name}.webp`;

export const certificates = [
  {
    id: 'cisco-cybersecurity',
    title: 'Introduction to Cybersecurity',
    org: 'Cisco Networking Academy',
    date: { es: 'mayo 2022', en: 'May 2022' },
    image: 'assets/img/certificates/cisco-intro-cybersecurity.png',
    alt: 'Certificado de Cisco Networking Academy: Introduction to Cybersecurity, a nombre de Kisnner Obando',
  },
  {
    id: 'certiprof-scrum',
    title: 'Scrum Foundation Professional Certification (SFPC)',
    org: 'CertiProf',
    date: { es: 'septiembre 2024', en: 'September 2024' },
    detail: { es: 'ID 99676683, vigente hasta septiembre 2027', en: 'ID 99676683, valid until September 2027' },
    image: img('certiprof-scrum-foundation'),
    alt: 'Certificado de CertiProf: Scrum Foundation Professional Certification, a nombre de Kisnner Obando',
  },
  {
    id: 'certiprof-cybersecurity',
    title: 'Cybersecurity Awareness Professional Certification (CAPC)',
    org: 'CertiProf',
    date: { es: 'septiembre 2024', en: 'September 2024' },
    detail: { es: 'certificado 9c07e41b, vigente hasta septiembre 2027', en: 'certificate 9c07e41b, valid until September 2027' },
    image: img('certiprof-cybersecurity-awareness'),
    alt: 'Certificado de CertiProf: Cybersecurity Awareness Professional Certification, a nombre de Kisnner Varony Obando Manzanarez',
  },
  {
    id: 'certiprof-design-sprint',
    title: 'Design Sprint Professional Certification (DSPC)',
    org: 'CertiProf',
    date: { es: 'octubre 2024', en: 'October 2024' },
    detail: { es: 'ID 101187068, vigente hasta octubre 2027', en: 'ID 101187068, valid until October 2027' },
    image: img('certiprof-design-sprint'),
    alt: 'Certificado de CertiProf: Design Sprint Professional Certification, a nombre de Kisnner Varony Obando',
  },
  {
    id: 'cs50x',
    title: 'CS50x: Introduction to Computer Science',
    org: 'Harvard University · edX',
    date: { es: 'diciembre 2024', en: 'December 2024' },
    detail: { es: 'diez problem sets y proyecto final', en: 'ten problem sets and a final project' },
    image: img('cs50x'),
    alt: 'Certificado CS50x de Harvard a nombre de Kisnner Obando',
    verify: 'https://cs50.harvard.edu/certificates/5509672f-71d0-4789-ba00-1285b3db0ca1',
  },
  {
    id: 'consumidor-digital',
    title: 'El consumidor digital',
    org: 'TecdeMonterreyX · edX',
    date: { es: 'febrero 2025', en: 'February 2025' },
    detail: { es: '20 horas, certificado verificado', en: '20 hours, verified certificate' },
    image: img('consumidor-digital'),
    alt: 'Certificado verificado de edX y el Tecnológico de Monterrey: El consumidor digital',
    verify: 'https://courses.edx.org/certificates/b5ed0d99271b4475b70e285c5a28536f',
  },
  {
    id: 'cs50p',
    title: 'CS50P: Introduction to Programming with Python',
    org: 'Harvard University · edX',
    date: { es: 'febrero 2025', en: 'February 2025' },
    detail: { es: 'nueve problem sets y proyecto final', en: 'nine problem sets and a final project' },
    image: img('cs50p'),
    alt: 'Certificado CS50P de Harvard a nombre de Kisnner Varony Obando',
    verify: 'https://cs50.harvard.edu/certificates/6ad4caef-6ca8-4b26-acbe-a8423c146223',
  },
  {
    id: 'prompt-engineering',
    title: { es: 'Prompt Engineering: aprende a hablar con una IA generativa', en: 'Prompt Engineering: learn to talk to a generative AI' },
    org: 'LinkedIn Learning',
    date: { es: 'julio 2025', en: 'July 2025' },
    detail: { es: '54 minutos', en: '54 minutes' },
    image: img('prompt-engineering-linkedin'),
    alt: 'Certificado de LinkedIn Learning sobre Prompt Engineering',
  },
  {
    id: 'claude-code',
    title: 'Claude Code in Action',
    org: 'Anthropic',
    date: { es: 'febrero 2026', en: 'February 2026' },
    image: img('claude-code-in-action'),
    alt: 'Certificado de Anthropic: Claude Code in Action',
    verify: 'https://verify.skilljar.com/c/3ztgbe28zbg3',
  },
  {
    id: 'claude-api',
    title: 'Claude with the Anthropic API',
    org: 'Anthropic',
    date: { es: 'marzo 2026', en: 'March 2026' },
    image: img('claude-api'),
    alt: 'Certificado de Anthropic: Claude with the Anthropic API',
    verify: 'https://verify.skilljar.com/c/2uqnq82qydyf',
  },
  {
    id: 'claude-101',
    title: 'Claude 101',
    org: 'Anthropic',
    date: { es: 'marzo 2026', en: 'March 2026' },
    image: img('claude-101'),
    alt: 'Certificado de Anthropic: Claude 101',
  },
  {
    id: 'ai-fluency',
    title: 'AI Fluency: Framework & Foundations',
    org: 'Anthropic',
    date: { es: 'marzo 2026', en: 'March 2026' },
    image: img('ai-fluency'),
    alt: 'Certificado de Anthropic: AI Fluency, Framework & Foundations',
  },
];

/** Texto alternativo de cada foto, en los dos idiomas. */
const titleOf = (c) => (typeof c.title === 'string' ? c.title : c.title.en);
certificates.forEach((c) => {
  if (c.alt) c.alt = { es: c.alt, en: `Certificate from ${c.org}: ${titleOf(c)}, issued to Kisnner Obando` };
});

/** Los que se muestran de entrada; el resto queda detrás de "Ver todos". */
export const featuredCertificates = ['cs50x', 'cs50p', 'claude-api', 'claude-code', 'cisco-cybersecurity', 'certiprof-scrum'];
