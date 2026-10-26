/**
 * Homepage entry. Everything here is progressive enhancement: the page is
 * complete without JavaScript, and motion is only added when the visitor
 * has not asked for reduced motion.
 */
import { finePointer, prefersReducedMotion, whenIdle } from './lib/env.js';
import { initNav } from './ui/nav.js';
import { initReveal } from './ui/reveal.js';
import { initHero } from './ui/hero.js';
import { initDialogs } from './ui/dialogs.js';
import { initPointer } from './ui/pointer.js';
import { initDisclosures, initFilter, initPipeline, initRail, initTimeline } from './ui/widgets.js';
import { initForm } from './ui/form.js';
import { mountViz } from './viz/mount.js';
import { sentinelViz } from './viz/sentinel.js';
import { gatesViz } from './viz/gates.js';
import { networkViz } from './viz/network.js';

const motion = !prefersReducedMotion();
document.documentElement.classList.toggle('motion', motion);

// Above the fold, and anything a deep link may need immediately.
initNav();
initReveal({ motion });
initHero({ motion });
initDialogs();

// Everything below the fold waits for idle time.
whenIdle(() => {
  initDisclosures();
  initTimeline();
  initFilter();
  initRail();
  initPipeline();
  initForm();
  if (motion && finePointer()) initPointer();

  const VIZ = { sentinel: sentinelViz, gates: gatesViz, network: networkViz };
  document.querySelectorAll('[data-viz]').forEach((canvas) => {
    const factory = VIZ[canvas.dataset.viz];
    // The full-bleed network backdrop is large; render it at a lower resolution.
    if (factory) mountViz(canvas, factory, { motion, maxDpr: canvas.dataset.viz === 'network' ? 1 : 1.5 });
  });
}, 800);
