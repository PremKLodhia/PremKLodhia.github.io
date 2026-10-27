/**
 * Homepage entry. Everything here is progressive enhancement: the page is
 * complete without JavaScript, and motion is only added when the visitor
 * has not asked for reduced motion.
 */
import { finePointer, prefersReducedMotion, whenIdle } from './lib/env.js';
import { runLoader } from './ui/loader.js';
import { initAmbient } from './ui/ambient.js';
import { initNav } from './ui/nav.js';
import { initReveal } from './ui/reveal.js';
import { initHero } from './ui/hero.js';
import { initDialogs } from './ui/dialogs.js';
import { initPointer } from './ui/pointer.js';
import { initCredentials, initDisclosures, initPipeline, initRail, initTimeline } from './ui/widgets.js';
import { initForm } from './ui/form.js';
import { mountViz } from './viz/mount.js';
import { sentinelViz } from './viz/sentinel.js';
import { gatesViz } from './viz/gates.js';
import { networkViz } from './viz/network.js';
import { kinoraViz } from './viz/kinora.js';

const motion = !prefersReducedMotion();
document.documentElement.classList.toggle('motion', motion);

runLoader();

// Above the fold, and anything a deep link may need immediately.
let ambient = null;
let covered = true;
initNav();
initReveal({ motion });
initHero({
  motion,
  onCover: (value) => {
    covered = value;
    ambient?.setCovered(value);
  },
});
initDialogs();

// Everything below the fold waits for idle time.
whenIdle(() => {
  ambient = initAmbient({ motion });
  ambient?.setCovered(covered);
  initDisclosures();
  initTimeline({ motion });
  initCredentials({ motion });
  initRail({ motion });
  initPipeline();
  initForm();
  if (motion && finePointer()) initPointer();

  const VIZ = { sentinel: sentinelViz, gates: gatesViz, network: networkViz, kinora: kinoraViz };
  document.querySelectorAll('[data-viz]').forEach((canvas) => {
    const factory = VIZ[canvas.dataset.viz];
    // The full-bleed network backdrop is large; render it at a lower resolution.
    if (factory) mountViz(canvas, factory, { motion, maxDpr: canvas.dataset.viz === 'network' ? 1 : 1.5 });
  });
}, 800);
