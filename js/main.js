import { profile } from './data/profile.js';
import { projects } from './data/projects.js';
import { contributions } from './data/oss.js';
import { certificates } from './data/certificates.js';
import { experience } from './data/experience.js';
import { mountLoader } from './components/loader.js';
import { renderNav } from './components/nav.js';
import { renderHero } from './components/hero.js';
import { renderStats } from './components/stats.js';
import { renderProjects } from './components/projects.js';
import { renderOss } from './components/oss.js';
import { renderCertificates } from './components/certificates.js';
import { renderExperience } from './components/experience.js';
import { renderFooter } from './components/footer.js';
import { observeReveals } from './lib/reveal.js';

const app = document.getElementById('app');
const loading = document.getElementById('loading');
const hideLoader = mountLoader(loading);

app.append(
  renderNav(),
  renderHero(profile),
  renderStats(profile.stats),
  hMain(renderProjects(projects), renderOss(contributions), renderCertificates(certificates), renderExperience(experience)),
  renderFooter(profile),
);

function hMain(...children) {
  const main = document.createElement('main');
  main.append(...children);
  return main;
}

observeReveals(app);
requestAnimationFrame(() => requestAnimationFrame(hideLoader));
