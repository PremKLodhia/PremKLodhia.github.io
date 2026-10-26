/**
 * Hero sequence and the Core stage.
 *
 * Scroll through the hero drives one progress value: the rings lock in turn
 * (each headline word draws its rule as its ring aligns), the intro hands over
 * to the profile, and the read-outs count up. The WebGL scene is loaded on
 * idle, renders only while the hero or contact section is on screen, and
 * falls back to a pre-rendered still when WebGL is unavailable.
 */
import { addFrameTask } from '../lib/frame.js';
import { clamp, finePointer, smoothstep, webglAvailable, whenIdle } from '../lib/env.js';
import { countUp } from './counters.js';
import { startCore } from '../core/client.js';

export function initHero({ motion }) {
  const hero = document.querySelector('[data-hero]');
  const contact = document.querySelector('[data-contact]');
  const stage = document.querySelector('.core');
  if (!hero || !stage) return;

  const intro = hero.querySelector('[data-hero-intro]');
  const profile = hero.querySelector('[data-hero-profile]');
  const words = [...hero.querySelectorAll('[data-hero-word]')];
  const readouts = [...hero.querySelectorAll('[data-count]')];
  let counted = false;
  let core = null;
  let progress = motion ? 0 : 1;

  const runCounters = () => {
    if (counted) return;
    counted = true;
    readouts.forEach((el, i) => countUp(el, { delay: i * 120 }));
  };

  if (!motion) {
    words.forEach((w) => w.style.setProperty('--lock', '1'));
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        runCounters();
        io.disconnect();
      }
    });
    if (profile) io.observe(profile);
  }

  addFrameTask({
    read() {
      const vh = window.innerHeight;
      const h = hero.getBoundingClientRect();
      const c = contact ? contact.getBoundingClientRect() : null;
      return {
        p: clamp(-h.top / Math.max(1, h.height - vh)),
        heroOn: h.bottom > 0,
        contactOn: !!c && c.top < vh && c.bottom > 0,
      };
    },
    write({ p, heroOn, contactOn }) {
      if (motion) {
        progress = p;
        const introOut = smoothstep(0.5, 0.68, p);
        const profileIn = smoothstep(0.66, 0.84, p);
        hero.style.setProperty('--p', p.toFixed(4));
        hero.style.setProperty('--gauge-o', (1 - smoothstep(0.8, 0.95, p)).toFixed(3));
        intro.style.setProperty('--intro-o', (1 - introOut).toFixed(3));
        intro.style.setProperty('--intro-y', `${(-introOut * 70).toFixed(1)}px`);
        profile.style.setProperty('--profile-o', profileIn.toFixed(3));
        profile.style.setProperty('--profile-y', `${((1 - profileIn) * 48).toFixed(1)}px`);
        intro.toggleAttribute('data-off', introOut > 0.98);
        profile.toggleAttribute('data-off', profileIn < 0.02);
        words.forEach((w, i) => w.style.setProperty('--lock', smoothstep(0.08 + i * 0.16, 0.26 + i * 0.16, p).toFixed(3)));
        if (profileIn > 0.5) runCounters();
      }

      const visible = heroOn || contactOn;
      stage.style.visibility = visible ? 'visible' : 'hidden';
      if (core) {
        core.setMode(contactOn && !heroOn ? 'contact' : 'hero');
        core.setProgress(progress);
        core.setActive(visible && !document.hidden);
      }
    },
  });

  // Pointer drives the camera and tilt; touch devices keep the ambient drift.
  if (finePointer()) {
    window.addEventListener(
      'pointermove',
      (e) => {
        if (core) core.setPointer((e.clientX / window.innerWidth) * 2 - 1, -((e.clientY / window.innerHeight) * 2 - 1));
      },
      { passive: true }
    );
    document.documentElement.addEventListener('pointerleave', () => core && core.setPointer(0, 0));
  }

  const canvas = stage.querySelector('canvas');
  const saveData = navigator.connection && navigator.connection.saveData;
  if (!canvas || saveData || !webglAvailable()) return;

  const boot = () => whenIdle(async () => {
    try {
      const coarse = window.matchMedia('(pointer: coarse)').matches;
      const lowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
      const narrow = window.innerWidth < 820;
      core = await startCore(canvas, {
        tier: coarse || lowMemory || narrow ? 'medium' : 'high',
        reducedMotion: !motion,
        onFirstFrame: () => stage.classList.add('is-live'),
        onTooSlow: () => stage.classList.remove('is-live'),
      });
      core.setProgress(progress);
      let resizeQueued = false;
      window.addEventListener('resize', () => {
        if (resizeQueued) return;
        resizeQueued = true;
        requestAnimationFrame(() => {
          resizeQueued = false;
          core.resize();
        });
      });
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) core.setActive(false);
        else window.dispatchEvent(new Event('scroll'));
      });
      window.dispatchEvent(new Event('scroll'));
    } catch (err) {
      // The still image stays in place; the page remains fully usable.
      stage.classList.remove('is-live');
      console.info('Core scene unavailable, showing the still:', err.message);
    }
  });

  // Let the page finish loading before spending time on the 3D scene.
  if (document.readyState === 'complete') boot();
  else window.addEventListener('load', boot, { once: true });
}
