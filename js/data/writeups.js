/** Investigaciones escritas. `line` resume el hallazgo, no el tema. */
export const writeups = [
  {
    id: 'watch-pairing',
    date: 'sep 2026',
    title: 'my apple watch paired fine. then it forgot.',
    line: 'watchOS 27: el emparejamiento con Device Hub sale bien, pero el reloj vuelve pidiendo uno nuevo en vez de verificarse. Lo acoté con logs de ambos lados, un listener propio y un host independiente. Sigue abierto (FB24924229)',
    tags: ['watchOS', 'CoreDevice', 'logs', 'protocolos'],
    lang: 'en',
    href: 'writeups/watch-pairing/',
  },
  {
    id: 'sidecar',
    date: 'sep 2026',
    title: "sidecar said my ipad's wi-fi was off. it was icloud.",
    line: 'SidecarErrorDomain -203 en macOS 27: el Mac decide con un bit de Bluetooth que el iPad deja de anunciar cuando su llavero de iCloud pierde la confianza',
    tags: ['macOS', 'iPadOS', 'ingeniería inversa', 'logs'],
    lang: 'en',
    href: 'writeups/sidecar/',
  },
  {
    id: 'altstore',
    date: 'sep 2026',
    title: "altstore couldn't sign in. apple was sending back an html page.",
    line: 'NSCocoaErrorDomain 3840: un 503 en HTML leído como plist. Capturé el tráfico GrandSlam y parcheé el User-Agent dentro de los binarios firmados de macOS y Windows',
    tags: ['AltServer', 'dylib injection', 'code signing', 'PE / Mach-O'],
    lang: 'en',
    href: 'writeups/altstore/',
  },
];
