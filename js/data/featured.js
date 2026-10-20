/** Caso destacado: la historia de AltServer en macOS 27, con sus pruebas y sus límites. Solo hechos comprobables. */
export const featured = {
  facts: [
    {
      label: { es: 'el problema', en: 'the problem' },
      text: {
        es: 'Apple dejó de aceptar el inicio de sesión de AltServer en macOS 27 (error -80045 y, dos días después, un 503 en HTML). Quien usa AltStore no podía instalar ni renovar apps.',
        en: 'Apple stopped accepting AltServer\'s sign-in on macOS 27 (error -80045 and, two days later, an HTML 503). People using AltStore could not install or renew apps.',
      },
    },
    {
      label: { es: 'lo que hice', en: 'what I did' },
      text: {
        es: 'Medí cómo responde el borde de Apple sin credenciales, encontré la causa (la identidad del cliente y los datos de anisette no coincidían) y propuse el arreglo a AltStore y a AltSign.',
        en: 'I measured how Apple\'s edge answers without credentials, found the cause (the client identity and the anisette data did not match) and proposed the fix to AltStore and AltSign.',
      },
    },
    {
      label: { es: 'el resultado', en: 'the result' },
      text: {
        es: 'Una build no oficial con más de mil descargas; otros usuarios confirmaron en el hilo público que inician sesión, y un colaborador de AltStore construyó su propio PR sobre mi AltSign#61. Todavía no está fusionado y no funciona en todas las cuentas.',
        en: 'An unofficial build with over a thousand downloads; other users confirmed in the public thread that they can sign in, and an AltStore collaborator built his own PR on top of my AltSign#61. It is not merged yet and it doesn\'t work for every account.',
      },
    },
  ],
  links: [
    { label: { es: 'informe de campo', en: 'field report' }, href: 'https://kisnner26.github.io/altserver-80045/' },
    { label: { es: 'pull request en AltStore', en: 'pull request on AltStore' }, href: 'https://github.com/altstoreio/AltStore/pull/1834' },
    { label: { es: 'pull request en AltSign', en: 'pull request on AltSign' }, href: 'https://github.com/rileytestut/AltSign/pull/61' },
    { label: { es: 'build no oficial', en: 'unofficial build' }, href: 'https://github.com/kisnner26/AltStore/releases/tag/v1.8-windows-anisette-unofficial' },
  ],
};
