# kisnner26.github.io

mi portfolio. vive en [kisnner26.github.io](https://kisnner26.github.io) — sin
framework, sin build step: un solo `index.html` con todo adentro.

## por qué así

nada de plantilla genérica: la home está escrita como un mensaje de commit,
la navegación como un prompt de shell, y las certificaciones como un
`CHANGELOG.md` versionado cronológicamente. cada proyecto muestra la decisión
técnica que más lo define en una línea estilo `git diff`, no una lista
genérica de features.

## stack

HTML + CSS + JS vanilla. tipografías: Instrument Sans (títulos), IBM Plex Sans
(cuerpo), JetBrains Mono (todo lo demás). tema claro/oscuro automático según
el sistema.

## correr localmente

```bash
git clone https://github.com/kisnner26/kisnner26.github.io.git
cd kisnner26.github.io
python3 -m http.server 8080
```

## licencia

MIT — ver [`LICENSE`](LICENSE).
