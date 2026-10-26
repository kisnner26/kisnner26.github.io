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
        es: 'Medí cómo responde el borde de Apple sin credenciales, encontré la causa (la identidad del cliente y los datos de anisette no coincidían) y propuse el arreglo a AltStore y a AltSign, y el mantenedor lo integró.',
        en: 'I measured how Apple\'s edge answers without credentials, found the cause (the client identity and the anisette data did not match) and proposed the fix to AltStore and AltSign, and the maintainer merged it.',
      },
    },
    {
      label: { es: 'el resultado', en: 'the result' },
      text: {
        es: 'Una build no oficial con más de mil quinientas descargas; otros usuarios confirmaron en el hilo público que inician sesión, y un colaborador de AltStore construyó su propio PR sobre mi AltSign#61. El 21 de octubre el mantenedor de AltStore integró los dos pull requests y los usó como base para arreglar AltStore Classic, y la cuenta oficial del proyecto me agradeció el arreglo en público; ese mismo día salieron AltStore Classic 2.3.1 y AltServer 1.8.2 con el arreglo, y algunas cuentas siguen viendo otros errores de inicio de sesión.',
        en: 'An unofficial build with over 1,500 downloads; other users confirmed in the public thread that they can sign in, and an AltStore collaborator built his own PR on top of my AltSign#61. On 21 October the AltStore maintainer merged both pull requests and used them as the basis to fix AltStore Classic, and the project\'s official account thanked me for the fix in public; the same day AltStore Classic 2.3.1 and AltServer 1.8.2 shipped with the fix, and some accounts still hit other sign-in errors.',
      },
    },
  ],
  links: [
    { label: { es: 'informe de campo', en: 'field report' }, href: 'https://kisnner26.github.io/altserver-80045/' },
    { label: { es: 'pull request en AltStore (integrado)', en: 'pull request on AltStore (merged)' }, href: 'https://github.com/altstoreio/AltStore/pull/1834' },
    { label: { es: 'pull request en AltSign (integrado)', en: 'pull request on AltSign (merged)' }, href: 'https://github.com/rileytestut/AltSign/pull/61' },
    { label: { es: 'agradecimiento de AltStore (Threads)', en: 'thanks from AltStore (Threads)' }, href: 'https://www.threads.com/@altstoreio/post/Dew01EMGsz8' },
    { label: { es: 'build no oficial', en: 'unofficial build' }, href: 'https://github.com/kisnner26/AltStore/releases/tag/v1.8-windows-anisette-unofficial' },
  ],
};
