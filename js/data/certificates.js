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
    date: 'mayo 2022',
    image: 'assets/img/certificates/cisco-intro-cybersecurity.png',
    alt: 'Certificado de Cisco Networking Academy: Introduction to Cybersecurity, a nombre de Kisnner Obando',
  },
  {
    id: 'cs50x',
    title: 'CS50x: Introduction to Computer Science',
    org: 'Harvard University · edX',
    date: 'diciembre 2024',
    detail: 'diez problem sets y proyecto final',
    image: img('cs50x'),
    alt: 'Certificado CS50x de Harvard a nombre de Kisnner Obando',
    verify: 'https://cs50.harvard.edu/certificates/5509672f-71d0-4789-ba00-1285b3db0ca1',
  },
  {
    id: 'consumidor-digital',
    title: 'El consumidor digital',
    org: 'TecdeMonterreyX · edX',
    date: 'febrero 2025',
    detail: '20 horas, certificado verificado',
    image: img('consumidor-digital'),
    alt: 'Certificado verificado de edX y el Tecnológico de Monterrey: El consumidor digital',
    verify: 'https://courses.edx.org/certificates/b5ed0d99271b4475b70e285c5a28536f',
  },
  {
    id: 'cs50p',
    title: 'CS50P: Introduction to Programming with Python',
    org: 'Harvard University · edX',
    date: 'febrero 2025',
    detail: 'nueve problem sets y proyecto final',
    image: img('cs50p'),
    alt: 'Certificado CS50P de Harvard a nombre de Kisnner Varony Obando',
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering: aprende a hablar con una IA generativa',
    org: 'LinkedIn Learning',
    date: 'julio 2025',
    detail: '54 minutos',
    image: img('prompt-engineering-linkedin'),
    alt: 'Certificado de LinkedIn Learning sobre Prompt Engineering',
  },
  {
    id: 'claude-code',
    title: 'Claude Code in Action',
    org: 'Anthropic',
    date: 'febrero 2026',
    image: img('claude-code-in-action'),
    alt: 'Certificado de Anthropic: Claude Code in Action',
    verify: 'https://verify.skilljar.com/c/3ztgbe28zbg3',
  },
  {
    id: 'claude-api',
    title: 'Claude with the Anthropic API',
    org: 'Anthropic',
    date: 'marzo 2026',
    image: img('claude-api'),
    alt: 'Certificado de Anthropic: Claude with the Anthropic API',
    verify: 'https://verify.skilljar.com/c/2uqnq82qydyf',
  },
  {
    id: 'claude-101',
    title: 'Claude 101',
    org: 'Anthropic',
    date: 'marzo 2026',
    image: img('claude-101'),
    alt: 'Certificado de Anthropic: Claude 101',
  },
  {
    id: 'ai-fluency',
    title: 'AI Fluency: Framework & Foundations',
    org: 'Anthropic',
    date: 'marzo 2026',
    image: img('ai-fluency'),
    alt: 'Certificado de Anthropic: AI Fluency, Framework & Foundations',
  },
];
