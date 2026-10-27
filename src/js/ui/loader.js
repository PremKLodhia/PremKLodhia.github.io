/**
 * Intro loader. Three gimbal rings spool up while the page loads; progress
 * follows real milestones (fonts, then the window load event) with a floor
 * on duration so the sequence reads. When ready the rings spring into the
 * site mark, the core flashes, and an iris opens onto the hero.
 *
 * Resolves as soon as the iris starts opening so the hero can enter beneath
 * it. Always resolves, whatever goes wrong.
 */

const MIN_MS = 2300;
const MIN_QUICK_MS = 900;
const MAX_MS = 5200;

// Each ring spins on its own axis, inside a slowly tilting outer axis.
const RINGS = {
  a: { axis: 'X', speed: 150, lock: 0, tilt: 18 },
  b: { axis: 'X', speed: -205, lock: 68, tilt: -34 },
  c: { axis: 'Y', speed: 240, lock: 68, tilt: 26 },
};

const easeOutBack = (t) => {
  const c = 1.9;
  return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2);
};
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

export function runLoader() {
  const root = document.documentElement;
  const el = document.querySelector('[data-loader]');
  const ready = () => root.classList.add('is-ready');

  if (!el || root.classList.contains('loader-skip')) {
    el?.remove();
    requestAnimationFrame(ready);
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      ready();
      resolve();
    };

    try {
      play(el, root, done);
    } catch (err) {
      el.remove();
      done();
    }
  });
}

function play(el, root, done) {
  const quick = root.classList.contains('loader-quick');
  const minMs = quick ? MIN_QUICK_MS : MIN_MS;
  const pct = el.querySelector('[data-loader-pct]');
  const bar = el.querySelector('[data-loader-bar]');
  const label = el.querySelector('[data-loader-label]');
  const log = el.querySelector('[data-loader-log]');
  const rings = [...el.querySelectorAll('[data-ring]')].map((node) => ({ node, ...RINGS[node.dataset.ring], angle: Math.random() * 360 }));

  const prevOverflow = root.style.overflow;
  root.style.overflow = 'hidden';

  const line = (name, detail) => {
    const li = document.createElement('li');
    li.className = 'is-ok';
    li.innerHTML = `&rsaquo; ${name} <span></span>`;
    li.querySelector('span').textContent = detail;
    log.appendChild(li);
  };

  // Milestones that move the bar.
  let fontsDone = false;
  let loadDone = document.readyState === 'complete';
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
    fontsDone = true;
    line('fonts', 'mona sans · jetbrains mono');
  });
  const onLoad = () => {
    loadDone = true;
    line('assets', 'ready');
  };
  if (loadDone) setTimeout(onLoad, 300);
  else window.addEventListener('load', onLoad, { once: true });

  const t0 = performance.now();
  let last = t0;
  let shown = 0;
  let locking = null;
  let raf = 0;

  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const elapsed = now - t0;

    // Target: time floor plus real milestones; capped so a slow network never traps anyone.
    const timeFrac = Math.min(1, elapsed / minMs);
    const milestones = 0.25 + (fontsDone ? 0.3 : 0) + (loadDone ? 0.45 : 0);
    let target = Math.min(timeFrac, milestones, 0.97);
    if ((timeFrac >= 1 && milestones >= 1) || elapsed > MAX_MS) target = 1;
    shown += (target - shown) * Math.min(1, dt * (target === 1 ? 7 : 3.2));
    if (target === 1 && shown > 0.996) shown = 1;

    const p = Math.round(shown * 100);
    pct.textContent = String(p).padStart(3, '0');
    bar.style.setProperty('--load', shown.toFixed(4));

    if (!locking) {
      // Spin faster as loading progresses.
      const spool = 0.55 + shown * 0.9;
      rings.forEach((r) => {
        r.angle += r.speed * spool * dt;
        r.tiltNow = r.tilt * Math.sin(elapsed / 900 + r.speed);
        apply(r, r.angle, r.tiltNow);
      });
      if (shown === 1) {
        locking = { at: now };
        label.textContent = 'Core aligned';
        line('core', 'aligned');
        rings.forEach((r) => {
          // Lock on the next equivalent angle in the direction of travel, plus a half turn.
          const dir = Math.sign(r.speed);
          const from = r.angle;
          let to = r.lock;
          while (dir > 0 ? to < from + 180 : to > from - 180) to += dir * 180;
          r.from = from;
          r.to = to;
          r.tiltFrom = r.tiltNow;
        });
      }
    } else {
      const t = Math.min(1, (now - locking.at) / 950);
      rings.forEach((r) => apply(r, r.from + (r.to - r.from) * easeOutBack(t), r.tiltFrom * (1 - easeOut(t))));
      if (t >= 0.62 && !el.classList.contains('is-locked')) el.classList.add('is-locked');
      if (t >= 1) {
        cancelAnimationFrame(raf);
        exit();
      }
    }
  };

  const exit = () => {
    setTimeout(() => {
      // Open the iris from the centre of the rings.
      const g = el.querySelector('.loader__gimbal')?.getBoundingClientRect();
      if (g) {
        el.style.setProperty('--ix', `${(g.left + g.width / 2).toFixed(0)}px`);
        el.style.setProperty('--iy', `${(g.top + g.height / 2).toFixed(0)}px`);
      }
      el.classList.add('is-done');
      root.style.overflow = prevOverflow;
      // Let the iris open a touch before the hero starts to rise.
      setTimeout(done, 260);
      setTimeout(() => el.remove(), 1300);
    }, quick ? 120 : 260);
  };

  raf = requestAnimationFrame(frame);

  // Hidden tabs throttle rAF; never leave the page covered.
  setTimeout(() => {
    if (!el.classList.contains('is-done')) {
      cancelAnimationFrame(raf);
      el.classList.add('is-done');
      root.style.overflow = prevOverflow;
      done();
      setTimeout(() => el.remove(), 1300);
    }
  }, MAX_MS + 2500);
}

function apply(r, angle, tilt) {
  r.node.style.transform = `rotateZ(${tilt.toFixed(2)}deg) rotate${r.axis}(${angle.toFixed(2)}deg)`;
}
