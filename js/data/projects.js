/**
 * Proyectos. `media` es una captura ({ src, alt }) o un boceto de texto ({ sketch }).
 * `line` es la decisión técnica que más define al proyecto, no una lista de features.
 * Los textos son { es, en }; las etiquetas y los nombres propios van sin traducir.
 */
const gh = (repo) => ({ label: 'code', href: `https://github.com/kisnner26/${repo}` });
const demo = (url) => ({ label: 'demo', href: url });

export const projects = [
  {
    id: 'frutiger-aero-islands',
    title: 'Frutiger Aero Islands',
    line: {
      es: 'una isla decorable dibujada con PixiJS bajo ventanas de Windows Vista hechas en HTML, y un planeta en Three.js donde se ven las islas de otros jugadores; los datos viven en Supabase con seguridad por fila',
      en: 'a decorable island drawn with PixiJS under Windows Vista windows built in HTML, and a Three.js planet where you see other players\' islands; the data lives in Supabase with row-level security',
    },
    tags: ['React', 'TypeScript', 'PixiJS', 'Three.js', 'Supabase'],
    media: { src: 'assets/img/projects/frutiger-aero-islands.jpg', alt: { es: 'Frutiger Aero Islands: una isla verde con palmeras, fuente y pabellón de vidrio sobre un lago, con burbujas, peces y una ventana de decoraciones al estilo Windows Vista', en: 'Frutiger Aero Islands: a green island with palm trees, a fountain and a glass pavilion on a lake, with bubbles, fish and a Windows Vista style decorations window' } },
    links: [demo('https://kisnner26.github.io/frutiger-aero-islands/'), gh('frutiger-aero-islands')],
  },
  {
    id: 'relevo',
    title: 'relevo',
    line: {
      es: 'los trabajos pesados salen del hilo principal: un pool de worker threads, tres formas de pedirlos (REST, GraphQL y WebSocket) y un balanceador propio entre instancias',
      en: 'heavy jobs leave the main thread: a worker_threads pool, three ways to request them (REST, GraphQL and WebSocket) and my own load balancer across instances',
    },
    tags: ['Node.js', 'worker_threads', 'GraphQL', 'WebSocket'],
    media: { src: 'assets/img/projects/relevo.jpg', alt: { es: 'Panel en vivo de relevo con seis hilos ocupados, doce trabajos en cola y la lista de trabajos corriendo', en: 'relevo live dashboard with six busy threads, twelve queued jobs and the list of running jobs' } },
    links: [gh('relevo')],
  },
  {
    id: 'tonada',
    title: 'Tonada',
    line: {
      es: 'audio o video a piano dentro del navegador: un detector de tono corre cada 23 ms y nada sale de tu equipo',
      en: 'audio or video to piano inside the browser: a pitch detector runs every 23 ms and nothing leaves your machine',
    },
    tags: ['JavaScript', 'Web Audio', 'Web MIDI'],
    media: { src: 'assets/img/projects/tonada.jpg', alt: { es: 'Tonada en escritorio: la pantalla principal con el piano y las notas detectadas', en: 'Tonada on desktop: the main screen with the piano and the detected notes' } },
    links: [demo('https://kisnner26.github.io/tonada/'), gh('tonada')],
  },
  {
    id: 'lumora',
    title: 'lumora',
    line: {
      es: 'un director local escribe el guion de cada verso sin internet (Claude es opcional) y todo se dibuja con código en canvas, sin una sola imagen',
      en: 'a local director writes the script for each verse without the internet (Claude is optional) and everything is drawn with code on a canvas, without a single image',
    },
    tags: ['JavaScript', 'Canvas', 'Python', 'Spotify API'],
    media: { src: 'assets/img/projects/lumora.jpg', alt: { es: 'Lumora: toma de un videoclip en risografía con corazón, flor y reloj que se dibujan solos y la letra escrita a mano', en: 'Lumora: a risograph-style music video shot with a heart, a flower and a clock that draw themselves and hand-written lyrics' } },
    links: [demo('https://kisnner26.github.io/lumora/'), gh('lumora')],
  },
  {
    id: 'wc26-studio',
    title: 'WC26 Studio',
    line: {
      es: 'Monte Carlo con corrección Dixon–Coles, no el modelo Poisson ingenuo',
      en: 'Monte Carlo with a Dixon–Coles correction, not the naive Poisson model',
    },
    tags: ['JavaScript', 'Web Worker'],
    media: { src: 'assets/img/projects/wc26-studio.jpg', alt: { es: 'Panel principal de WC26 Studio con el resumen del Mundial 2026', en: 'WC26 Studio main dashboard with the 2026 World Cup summary' } },
    links: [demo('https://kisnner26.github.io/wc26-studio/'), gh('wc26-studio')],
  },
  {
    id: '2-player-web',
    title: '2 Player Arcade',
    line: {
      es: '520 juegos y cero backend: se sirven como archivos estáticos',
      en: '520 games and zero backend: they are served as static files',
    },
    tags: ['JavaScript', 'Three.js'],
    media: { src: 'assets/img/projects/2-player-web.jpg', alt: { es: 'Menú principal de 2 Player Arcade con el juego Pong Neón', en: '2 Player Arcade main menu with the Neon Pong game' } },
    links: [demo('https://kisnner26.github.io/2-player-web/'), gh('2-player-web')],
  },
  {
    id: 'nexo',
    title: 'Nexo',
    line: {
      es: 'un canal propio firmado con HMAC sobre Bonjour, sin servidores ni cuentas: el reloj llega a la Mac directo o a través del iPhone',
      en: 'a private channel signed with HMAC over Bonjour, with no servers or accounts: the watch reaches the Mac directly or through the iPhone',
    },
    tags: ['SwiftUI', 'watchOS', 'Network.framework', 'Liquid Glass'],
    media: { src: 'assets/img/projects/nexo.jpg', alt: { es: 'Tres pantallas de Nexo en un iPhone: estado de la Mac con batería y reproductor, trackpad táctil y lista de apps con sus iconos', en: 'Three Nexo screens on an iPhone: Mac status with battery and player, a touch trackpad and a list of apps with their icons' } },
    links: [gh('nexo')],
  },
  {
    id: 'geode-transfer',
    title: 'geode-transfer',
    line: {
      es: 'mueve los datos de Geode entre iPhones y iPads y verifica cada archivo; no copia el certificado de firma a menos que lo pidas',
      en: 'moves your Geode data between iPhones and iPads and verifies every file; it doesn\'t copy the signing certificate unless you ask',
    },
    tags: ['Python', 'devicectl', 'iOS'],
    media: { src: 'assets/img/projects/geode-transfer.jpg', alt: { es: 'Terminal con una simulación de transferencia de un iPad a un iPhone: qué se copiaría, cuántos archivos y megas', en: 'Terminal showing a dry run of a transfer from an iPad to an iPhone: what would be copied, how many files and megabytes' } },
    links: [gh('geode-transfer')],
  },
  {
    id: 'opti-hub',
    title: 'Opti Hub',
    line: {
      es: 'cada ajuste guarda su valor anterior y se deshace uno a uno; no toca Defender, UAC ni Windows Update',
      en: 'every tweak stores its previous value and can be undone one by one; it never touches Defender, UAC or Windows Update',
    },
    tags: ['C#', '.NET Framework', 'Windows 11'],
    media: { src: 'assets/img/projects/opti-hub.jpg', alt: { es: 'Icono de Opti Hub: un velocímetro en trazo grueso con una flor rosa en la esquina', en: 'Opti Hub icon: a thick-line speedometer with a pink flower in the corner' } },
    links: [gh('opti-hub')],
  },
  {
    id: 'uam-class-watch',
    title: 'UAM Class Watch',
    line: {
      es: 'login directo en el reloj con token de Moodle en el llavero: funciona sola, sin iPhone ni Mac cerca, y el PIN no se guarda',
      en: 'direct login on the watch with a Moodle token in the keychain: it works on its own, with no iPhone or Mac nearby, and the PIN is never stored',
    },
    tags: ['SwiftUI', 'watchOS', 'Moodle API'],
    media: { src: 'assets/img/projects/uam-class-watch.jpg', alt: { es: 'Tres pantallas de UAM Class Watch en un Apple Watch: inicio con el promedio en pétalos, contenido del curso y temporizador de estudio', en: 'Three UAM Class Watch screens on an Apple Watch: home with the average as petals, course content and a study timer' } },
    links: [gh('uam-class-watch-standalone')],
  },
  {
    id: 'umbra',
    title: 'umbra',
    line: {
      es: 'cada bit va a una posición que solo conoce quien tiene la clave, y con ±1 para no dejar rastro en el histograma',
      en: 'every bit goes to a position only the key holder knows, using ±1 so it leaves no trace in the histogram',
    },
    tags: ['JavaScript', 'WebCrypto', { es: 'Esteganografía', en: 'Steganography' }],
    media: { src: 'assets/img/projects/umbra.jpg', alt: { es: 'Umbra con la cigarra verde: un reto de tres imágenes encadenadas con runas y la pantalla para resolver el primer nivel', en: 'Umbra with the green cicada: a challenge of three chained images with runes and the screen to solve the first level' } },
    links: [demo('https://kisnner26.github.io/umbra/'), gh('umbra')],
  },
  {
    id: 'girasol',
    title: 'Girasol',
    line: {
      es: 'la calibración aprende los ejes del reloj con cuaterniones: no asume cuál es "izquierda" ni "arriba"',
      en: 'calibration learns the watch axes with quaternions: it doesn\'t assume which way is "left" or "up"',
    },
    tags: ['SwiftUI', 'watchOS', 'HealthKit', 'CoreMotion'],
    media: { src: 'assets/img/projects/girasol.jpg', alt: { es: 'Tres pantallas de Girasol en un Apple Watch: inicio con anillos, índice UV con pétalos y racha de siete días', en: 'Three Girasol screens on an Apple Watch: home with rings, UV index with petals and a seven-day streak' } },
    links: [gh('girasol')],
  },
  {
    id: 'tiktok-gesture-scroll',
    title: 'TikTok Gesture Scroll',
    line: {
      es: 'MediaPipe corre dentro de la extensión: el modelo va incluido y no hace ninguna llamada de red',
      en: 'MediaPipe runs inside the extension: the model ships with it and makes no network calls',
    },
    tags: ['JavaScript', 'MediaPipe', 'Chrome MV3'],
    media: { src: 'assets/img/projects/tiktok-gesture-scroll.jpg', alt: { es: 'Popup de la extensión con la mano detectada por la webcam y los gestos de pulgar arriba y abajo', en: 'Extension popup with the hand detected by the webcam and the thumbs up and down gestures' } },
    links: [gh('tiktok-gesture-scroll')],
  },
];
