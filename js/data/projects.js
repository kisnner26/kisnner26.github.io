/**
 * Proyectos. `media` es una captura ({ src, alt }) o un boceto de texto ({ sketch }).
 * `line` es la decisión técnica que más define al proyecto, no una lista de features.
 */
const gh = (repo) => ({ label: 'código', href: `https://github.com/kisnner26/${repo}` });

export const projects = [
  {
    id: 'umbra',
    title: 'umbra',
    line: 'cada bit va a una posición que solo conoce quien tiene la clave, y con ±1 para no dejar rastro en el histograma',
    tags: ['JavaScript', 'WebCrypto', 'Esteganografía'],
    media: { src: 'assets/img/projects/umbra.jpg', alt: 'Umbra con la cigarra verde: un reto de tres imágenes encadenadas con runas y la pantalla para resolver el primer nivel' },
    links: [{ label: 'demo', href: 'https://kisnner26.github.io/umbra/' }, gh('umbra')],
  },
  {
    id: 'girasol',
    title: 'Girasol',
    line: 'la calibración aprende los ejes del reloj con cuaterniones: no asume cuál es "izquierda" ni "arriba"',
    tags: ['SwiftUI', 'watchOS', 'HealthKit', 'CoreMotion'],
    media: { src: 'assets/img/projects/girasol.jpg', alt: 'Tres pantallas de Girasol en un Apple Watch: inicio con anillos, índice UV con pétalos y racha de siete días' },
    links: [gh('girasol')],
  },
  {
    id: 'wc26-studio',
    title: 'WC26 Studio',
    line: 'Monte Carlo con corrección Dixon–Coles, no el modelo Poisson ingenuo',
    tags: ['JavaScript', 'Web Worker'],
    media: { src: 'assets/img/projects/wc26-studio.jpg', alt: 'Panel principal de WC26 Studio con el resumen del Mundial 2026' },
    links: [{ label: 'demo', href: 'https://kisnner26.github.io/wc26-studio/' }, gh('wc26-studio')],
  },
  {
    id: '2-player-web',
    title: '2 Player Arcade',
    line: '520 juegos y cero backend: se sirven como archivos estáticos',
    tags: ['JavaScript', 'Three.js'],
    media: { src: 'assets/img/projects/2-player-web.jpg', alt: 'Menú principal de 2 Player Arcade con el juego Pong Neón' },
    links: [{ label: 'demo', href: 'https://kisnner26.github.io/2-player-web/' }, gh('2-player-web')],
  },
  {
    id: 'uam-class',
    title: 'UAM Class',
    line: 'token de sesión en Keychain: el PIN nunca se guarda en disco',
    tags: ['SwiftUI', 'macOS'],
    media: { sketch: ['UAM Class', 'token en Keychain', 'multi-cuenta simultánea', 'sin cookies, solo API'] },
    links: [gh('uam-class')],
  },
  {
    id: 'aula-abierta',
    title: 'Aula Abierta',
    line: 'currículo que se congela y se clona: se escribe una vez y se enseña muchas',
    tags: ['Laravel', 'React', 'PostgreSQL'],
    media: { sketch: ['Aula Abierta', 'plataforma open source', 'para academias de idiomas', 'roles · rúbricas · reportes'] },
    links: [gh('aula-abierta')],
  },
  {
    id: 'lidless',
    title: 'Lidless',
    line: 'mide bytes de red por proceso, no solo CPU: Claude Code pasa el tiempo esperando la red',
    tags: ['Swift', 'macOS', 'IOKit'],
    media: { sketch: ['Lidless', 'mac despierto con la tapa cerrada', 'solo mientras Claude Code trabaja', 'batería · temperatura · tope de 6 h'] },
    links: [gh('lidless')],
  },
  {
    id: 'tiktok-gesture-scroll',
    title: 'TikTok Gesture Scroll',
    line: 'MediaPipe corre dentro de la extensión: el modelo va incluido y no hace ninguna llamada de red',
    tags: ['JavaScript', 'MediaPipe', 'Chrome MV3'],
    media: { src: 'assets/img/projects/tiktok-gesture-scroll.jpg', alt: 'Popup de la extensión con la mano detectada por la webcam y los gestos de pulgar arriba y abajo' },
    links: [gh('tiktok-gesture-scroll')],
  },
];
