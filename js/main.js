import { profile } from './data/profile.js';
import { projects } from './data/projects.js';
import { contributions } from './data/oss.js';
import { writeups } from './data/writeups.js';
import { certificates, featuredCertificates } from './data/certificates.js';
import { experience } from './data/experience.js';
import { featured } from './data/featured.js';
import { mountLoader } from './components/loader.js';
import { renderNav } from './components/nav.js';
import { renderHero } from './components/hero.js';
import { renderStats } from './components/stats.js';
import { renderFeatured } from './components/featured.js';
import { renderProjects } from './components/projects.js';
import { renderOss } from './components/oss.js';
import { renderWriteups } from './components/writeups.js';
import { renderCertificates } from './components/certificates.js';
import { renderExperience } from './components/experience.js';
import { renderFooter } from './components/footer.js';
import { observeReveals } from './lib/reveal.js';
import { loadLiveStats, buildStats, mergeContributions } from './lib/liveStats.js';
import { setLang, t } from './lib/i18n.js';

const TITLE = { es: 'Kisnner Obando — Desarrollador de software', en: 'Kisnner Obando — Software developer' };

const app = document.getElementById('app');
const loading = document.getElementById('loading');
const hideLoader = mountLoader(loading);

let live = null;
let firstRender = true;

const stats = () => renderStats(buildStats({ live, fallback: profile.fallbackStats, writeups }));

function hMain(...children) {
  const main = document.createElement('main');
  main.append(...children);
  return main;
}

function build() {
  document.title = t(TITLE);
  return [
    renderNav({ onLang: switchLang }),
    renderHero(profile),
    stats(),
    hMain(
      renderFeatured(featured),
      renderProjects(projects),
      renderOss(mergeContributions(contributions, live), live),
      renderWriteups(writeups),
      renderExperience(experience),
      renderCertificates(certificates, featuredCertificates),
    ),
    renderFooter(profile),
  ];
}

function render() {
  app.replaceChildren(...build());
  observeReveals(app);
  // al cambiar de idioma no se vuelve a animar la entrada: todo queda a la vista
  if (!firstRender) app.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  firstRender = false;
}

function switchLang(next) {
  const y = window.scrollY;
  setLang(next);
  render();
  window.scrollTo(0, y);
}

render();

// cifras vivas: se pintan primero con el respaldo y se reemplazan cuando llega data/stats.json
loadLiveStats().then((data) => {
  if (!data) return;
  live = data;
  const strip = app.querySelector('.stats')?.closest('.wrap');
  if (strip) strip.replaceWith(stats());
  const oss = app.querySelector('#oss');
  if (oss) oss.replaceWith(renderOss(mergeContributions(contributions, live), live));
  observeReveals(app);
  app.querySelectorAll('.stats, #oss').forEach((el) => el.classList.add('in'));
});
requestAnimationFrame(() => requestAnimationFrame(hideLoader));
