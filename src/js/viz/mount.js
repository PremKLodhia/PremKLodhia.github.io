/**
 * Shared lifecycle for the 2D canvas visualisations: DPR-capped sizing,
 * running only while on screen and the tab is visible, and a single settled
 * frame when motion is reduced.
 */

export function mountViz(canvas, factory, { motion, maxDpr = 1.5 }) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const viz = factory(ctx);
  let width = 0;
  let height = 0;
  let raf = 0;
  let last = 0;
  let visible = false;
  let settled = false;

  const draw = () => viz.draw(ctx, width, height);

  const size = () => {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    viz.resize(width, height);
    // Pre-fill once so the visual arrives mid-stream rather than empty.
    if (!settled) {
      viz.settle();
      settled = true;
    }
    if (!raf) draw();
  };

  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - (last || now)) / 1000, 1 / 20);
    last = now;
    viz.step(dt);
    draw();
  };

  const start = () => {
    if (raf || !motion || !visible || document.hidden) return;
    last = 0;
    raf = requestAnimationFrame(frame);
  };

  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  new ResizeObserver(size).observe(canvas);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
    else stop();
  }, { rootMargin: '100px 0px' }).observe(canvas);
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
}

/** Seeded PRNG so stylised data looks the same on every load. */
export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const COLORS = {
  ion: '#7fe7ff',
  frost: '#e9eff4',
  alloy: '#93a1ae',
  dim: '#7d8995',
  line: 'rgba(233, 239, 244, 0.08)',
  lineStrong: 'rgba(233, 239, 244, 0.16)',
  amber: '#f2b766',
  cobalt: '#5b86ff',
  danger: '#ff7a7a',
};

export const FONT = (size, weight = 500) => `${weight} ${size}px 'Mona Sans', system-ui, sans-serif`;
export const MONO = (size) => `500 ${size}px 'JetBrains Mono', ui-monospace, monospace`;
