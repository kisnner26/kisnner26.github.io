import { profile } from './data/profile.js';
import { projects } from './data/projects.js';
import { contributions } from './data/oss.js';
import { writeups } from './data/writeups.js';
import { certificates } from './data/certificates.js';
import { experience } from './data/experience.js';
import { mountLoader } from './components/loader.js';
import { renderNav } from './components/nav.js';
import { renderHero } from './components/hero.js';
import { renderStats } from './components/stats.js';
import { renderProjects } from './components/projects.js';
import { renderOss } from './components/oss.js';
import { renderWriteups } from './components/writeups.js';
import { renderCertificates } from './components/certificates.js';
import { renderExperience } from './components/experience.js';
import { renderFooter } from './components/footer.js';
import { observeReveals } from './lib/reveal.js';
import { loadLiveStats, buildStats, mergeContributions } from './lib/liveStats.js';

const app = document.getElementById('app');
const loading = document.getElementById('loading');
const hideLoader = mountLoader(loading);

app.append(
  renderNav(),
  renderHero(profile),
  renderStats(buildStats({ live: null, fallback: profile.fallbackStats, certificates })),
  hMain(renderProjects(projects), renderWriteups(writeups), renderOss(contributions), renderCertificates(certificates), renderExperience(experience)),
  renderFooter(profile),
);

function hMain(...children) {
  const main = document.createElement('main');
  main.append(...children);
  return main;
}

observeReveals(app);

// cifras vivas: se pintan primero con el respaldo y se reemplazan cuando llega data/stats.json
loadLiveStats().then((live) => {
  if (!live) return;
  const stats = app.querySelector('.stats')?.closest('.wrap');
  if (stats) stats.replaceWith(renderStats(buildStats({ live, fallback: profile.fallbackStats, certificates })));
  const oss = app.querySelector('#oss');
  if (oss) oss.replaceWith(renderOss(mergeContributions(contributions, live), live));
  observeReveals(app);
  app.querySelectorAll('.stats, #oss').forEach((el) => el.classList.add('in'));
});
requestAnimationFrame(() => requestAnimationFrame(hideLoader));
