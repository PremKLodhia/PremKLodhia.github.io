/**
 * Fine-pointer interactions: depth tilt with a moving specular sheen,
 * magnetic buttons, and a contextual cursor label. None of these replace
 * the system cursor, and none run on touch or with reduced motion.
 */

const MAX_TILT = 5; // degrees
const MAGNET = 0.22;
const MAGNET_LIMIT = 8; // px

function initTilt() {
  document.querySelectorAll('[data-tilt]').forEach((el) => {
    let rect = null;
    let raf = 0;
    let px = 0;
    let py = 0;

    const apply = () => {
      raf = 0;
      const x = (px - rect.left) / rect.width;
      const y = (py - rect.top) / rect.height;
      el.style.setProperty('--ry', `${((x - 0.5) * 2 * MAX_TILT).toFixed(2)}deg`);
      el.style.setProperty('--rx', `${((0.5 - y) * 2 * MAX_TILT).toFixed(2)}deg`);
      el.style.setProperty('--sx', `${(x * 100).toFixed(1)}%`);
      el.style.setProperty('--sy', `${(y * 100).toFixed(1)}%`);
    };

    el.addEventListener('pointerenter', () => {
      rect = el.getBoundingClientRect();
    });
    el.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      if (!rect) rect = el.getBoundingClientRect();
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    });
    el.addEventListener('pointerleave', () => {
      cancelAnimationFrame(raf);
      raf = 0;
      rect = null;
      ['--rx', '--ry', '--sx', '--sy'].forEach((p) => el.style.removeProperty(p));
    });
  });
}

function initMagnetic() {
  document.querySelectorAll('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const r = el.getBoundingClientRect();
      const dx = Math.max(-MAGNET_LIMIT, Math.min(MAGNET_LIMIT, (e.clientX - (r.left + r.width / 2)) * MAGNET));
      const dy = Math.max(-MAGNET_LIMIT, Math.min(MAGNET_LIMIT, (e.clientY - (r.top + r.height / 2)) * MAGNET));
      el.style.setProperty('--mx', `${dx.toFixed(1)}px`);
      el.style.setProperty('--my', `${dy.toFixed(1)}px`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.removeProperty('--mx');
      el.style.removeProperty('--my');
    });
  });
}

function initCursorLabel() {
  const label = document.querySelector('.cursor-label');
  if (!label) return;
  const text = label.querySelector('span');
  let x = -100;
  let y = -100;
  let tx = -100;
  let ty = -100;
  let raf = 0;
  let active = null;

  const follow = () => {
    // Exponential follow gives a soft trail without lagging behind the pointer.
    x += (tx - x) * 0.32;
    y += (ty - y) * 0.32;
    label.style.setProperty('--cx', `${x.toFixed(1)}px`);
    label.style.setProperty('--cy', `${y.toFixed(1)}px`);
    raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(follow) : 0;
  };

  document.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType !== 'mouse') return;
      tx = e.clientX;
      ty = e.clientY;
      const target = e.target.closest && e.target.closest('[data-cursor]');
      if (target !== active) {
        active = target;
        if (target) {
          text.textContent = target.dataset.cursor;
          if (!label.classList.contains('is-on')) {
            x = tx;
            y = ty;
          }
        }
        label.classList.toggle('is-on', !!target);
      }
      if (!raf && active) raf = requestAnimationFrame(follow);
    },
    { passive: true }
  );

  document.addEventListener('pointerleave', () => {
    active = null;
    label.classList.remove('is-on');
  });
}

/** A soft light that follows the pointer across [data-spot] surfaces. */
function initSpotlight() {
  document.querySelectorAll('[data-spot]').forEach((el) => {
    let raf = 0;
    let e = null;
    const apply = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--sx', `${(e.clientX - r.left).toFixed(0)}px`);
      el.style.setProperty('--sy', `${(e.clientY - r.top).toFixed(0)}px`);
    };
    el.addEventListener('pointermove', (ev) => {
      if (ev.pointerType !== 'mouse') return;
      e = ev;
      if (!raf) raf = requestAnimationFrame(apply);
    });
    el.addEventListener('pointerleave', () => {
      cancelAnimationFrame(raf);
      raf = 0;
      el.style.removeProperty('--sx');
      el.style.removeProperty('--sy');
    });
  });
}

export function initPointer() {
  initSpotlight();
  initTilt();
  initMagnetic();
  initCursorLabel();
}
