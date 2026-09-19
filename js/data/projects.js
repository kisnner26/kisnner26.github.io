/**
 * Proyectos. `media` es una captura ({ src, alt }) o un boceto de texto ({ sketch }).
 * `line` es la decisión técnica que más define al proyecto, no una lista de features.
 */
const gh = (repo) => ({ label: 'código', href: `https://github.com/kisnner26/${repo}` });

export const projects = [
  {
    id: 'aula-abierta',
    title: 'Aula Abierta',
    line: 'currículo que se congela y se clona: se escribe una vez y se enseña muchas',
    tags: ['Laravel', 'React', 'PostgreSQL'],
    media: { sketch: ['Aula Abierta', 'plataforma open source', 'para academias de idiomas', 'roles · rúbricas · reportes'] },
    links: [gh('aula-abierta')],
  },
  {
    id: 'uam-schedule',
    title: 'UAM Schedule',
    line: 'widgets, Live Activity y Dynamic Island leen el mismo App Group que la app',
    tags: ['SwiftUI', 'WidgetKit', 'iOS'],
    media: { sketch: ['UAM Schedule', 'tu horario de clases', 'widgets · Dynamic Island', 'Siri · asistencia'] },
    links: [gh('uam-schedule')],
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
    id: 'uam-class-watch',
    title: 'UAM Class Watch',
    line: 'el reloj guarda el último horario y replanifica sus avisos sin el iPhone cerca',
    tags: ['SwiftUI', 'watchOS'],
    media: { sketch: ['UAM Class Watch', 'la próxima clase', 'en tu muñeca', 'avisos 1 h y 15 min antes'] },
    links: [gh('uam-class-watch')],
  },
  {
    id: 'creador-de-flores',
    title: 'Creador de Flores',
    line: 'una sola página: cada flor se dibuja en canvas a partir de unos pocos sliders',
    tags: ['JavaScript', 'Canvas', 'SVG'],
    media: { sketch: ['Creador de Flores', 'dibuja · juega · crea', 'un cuaderno de bocetos', 'en el navegador'] },
    links: [{ label: 'demo', href: 'https://kisnner26.github.io/creador-de-flores/' }, gh('creador-de-flores')],
  },
  {
    id: 'inventario-saas',
    title: 'Inventario SaaS',
    line: 'cada tenant vive en su propia base de datos, no en una columna tenant_id compartida',
    tags: ['Laravel', 'Next.js', 'MySQL'],
    media: { src: 'assets/img/projects/inventario-saas.jpg', alt: 'Pantalla de login de Inventario SaaS, estilo terminal POS' },
    links: [gh('inventario-saas')],
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
    id: 'wc26-studio',
    title: 'WC26 Studio',
    line: 'Monte Carlo con corrección Dixon–Coles, no el modelo Poisson ingenuo',
    tags: ['JavaScript', 'Web Worker'],
    media: { src: 'assets/img/projects/wc26-studio.jpg', alt: 'Panel principal de WC26 Studio con el resumen del Mundial 2026' },
    links: [{ label: 'demo', href: 'https://kisnner26.github.io/wc26-studio/' }, gh('wc26-studio')],
  },
  {
    id: 'physics2cinematic',
    title: 'physics2cinematic',
    line: 'colisión swept-sphere resolviendo la cuadrática, no distancia por frame',
    tags: ['Three.js', 'Web Audio'],
    media: { src: 'assets/img/projects/physics2cinematic.jpg', alt: 'Simulación 3D del experimento mono y proyectil' },
    links: [{ label: 'demo', href: 'https://physicsmonkeyproject.netlify.app' }, gh('physics2cinematic')],
  },
  {
    id: 'godsized',
    title: 'GOD-SIZED UNIVERSE',
    line: 'integra la ley de gravitación de Newton cuadro a cuadro, en vivo',
    tags: ['Three.js', 'Física'],
    media: { src: 'assets/img/projects/godsized.jpg', alt: 'Vista desde la cabina de la nave Orion-07 acercándose al sistema solar' },
    links: [{ label: 'demo', href: 'https://kisnner26.github.io/godsized-orbital-modular/' }, gh('godsized-orbital-modular')],
  },
  {
    id: 'music-visualizer',
    title: 'music-visualizer',
    line: 'arte y audio 100 % generados por código, cero archivos de assets',
    tags: ['Python', 'AppleScript', 'Web Audio'],
    media: { src: 'assets/img/projects/music-visualizer.jpg', alt: 'Visualizador de Apple Music en pantalla completa' },
    links: [gh('music-visualizer')],
  },
  {
    id: 'prelo',
    title: 'PRELO',
    line: 'cobra el saldo exacto que devuelve el backend, nunca un estimado',
    tags: ['SwiftUI', 'Node.js', 'watchOS'],
    media: { sketch: ['PRELO', 'pedidos de comida', 'en el campus de la UAM', 'saldo exacto del backend'] },
    links: [{ label: 'código', href: 'https://github.com/kisnner26/prelo-ios' }],
  },
];
