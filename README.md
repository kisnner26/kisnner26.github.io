# kisnner26.github.io

Portafolio personal de [Kisnner Obando](https://kisnner26.github.io), con proyectos,
contribuciones open source, experiencia y certificaciones.

Está construido con HTML, CSS y JavaScript nativos: no requiere framework ni paso de
compilación. El contenido vive en `js/data/` y la interfaz se organiza en componentes
pequeños dentro de `js/components/`.

## Cifras en vivo

La franja de estadísticas (contribuciones, pull requests y certificaciones) y el estado de cada
contribución se actualizan solos:

- `scripts/update-stats.sh` consulta la API de GitHub y escribe `data/stats.json`.
- `.github/workflows/stats.yml` lo ejecuta cada 6 horas y guarda el resultado solo si cambió algo.
- `js/lib/liveStats.js` lee ese archivo al cargar la página; si no está disponible, usa los últimos
  valores conocidos de `js/data/profile.js`.
- Las certificaciones se cuentan desde `js/data/certificates.js`: al añadir una, la cifra y la lista de
  organizaciones cambian sin tocar nada más.

Para contar también las contribuciones privadas, crea el secreto `STATS_TOKEN` (token personal de solo lectura).

## Desarrollo local

```bash
python3 -m http.server 8080
```

Después abre `http://localhost:8080`.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
