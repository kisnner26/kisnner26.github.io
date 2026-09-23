/** Investigaciones escritas. `line` resume el hallazgo, no el tema. */
export const writeups = [
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
