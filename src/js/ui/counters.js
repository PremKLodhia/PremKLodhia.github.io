/**
 * Count a read-out up to its target, keeping any prefix or suffix
 * ("<10ms", "88%", "1st"). Runs once; final text always equals the source.
 */
export function countUp(el, { duration = 1300, delay = 0 } = {}) {
  const target = el.dataset.count || el.textContent;
  const match = target.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
  if (!match) return;
  const [, prefix, num, suffix] = match;
  const value = parseFloat(num);
  if (value < 2) return; // nothing meaningful to count ("1st")
  const decimals = num.includes('.') ? num.split('.')[1].length : 0;
  let start = 0;

  const tick = (now) => {
    if (!start) start = now;
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = `${prefix}${(value * eased).toFixed(decimals)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };

  window.setTimeout(() => requestAnimationFrame(tick), delay);
}
