/** Environment queries and small math helpers shared by every module. */

const reducedQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

export const prefersReducedMotion = () => reducedQuery.matches;
export const onReducedMotionChange = (fn) => reducedQuery.addEventListener('change', fn);

export const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};

/**
 * Cheap capability check that avoids creating a context on the main thread.
 * The scene itself rejects software rasterisers once its renderer exists.
 */
export const webglAvailable = () => 'WebGL2RenderingContext' in window;

/** Run `fn` when the main thread is idle, or after `timeout` ms at the latest. */
export function whenIdle(fn, timeout = 1500) {
  if ('requestIdleCallback' in window) window.requestIdleCallback(fn, { timeout });
  else window.setTimeout(fn, 200);
}
