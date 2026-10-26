/**
 * Frame-time probe: scrolls through key parts of the page with the mouse
 * wheel on the real GPU and reports main-thread frame intervals.
 *   node scripts/perf.mjs [--mobile]
 */
import { chromium } from 'playwright';
const mobile = process.argv.includes('--mobile');
const browser = await chromium.launch({ args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await browser.newContext(mobile ? { viewport: { width: 412, height: 860 }, deviceScaleFactor: 2.6, isMobile: true, hasTouch: true } : { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 });
const page = await ctx.newPage();
await page.goto('http://localhost:8080/index.html', { waitUntil: 'load' });
await page.waitForFunction(() => document.querySelector('.core').classList.contains('is-live'), null, { timeout: 20000 }).catch(() => {});
await page.waitForTimeout(1500);
await page.mouse.move(700, 450);

const measure = async (label, scrollTo, wheel) => {
  await page.evaluate((y) => window.scrollTo(0, y), scrollTo);
  await page.waitForTimeout(800);
  await page.evaluate(() => {
    window.__f = [];
    let last = performance.now();
    const tick = (t) => { window.__f.push(t - last); last = t; if (window.__f.length < 400) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });
  const t0 = Date.now();
  while (Date.now() - t0 < 3000) {
    if (wheel) await page.mouse.wheel(0, wheel);
    else await page.mouse.move(500 + Math.random() * 600, 300 + Math.random() * 300);
    await page.waitForTimeout(50);
  }
  const f = (await page.evaluate(() => window.__f)).slice(5).sort((a, b) => a - b);
  const pct = (p) => f[Math.floor(f.length * p)].toFixed(1);
  const fps = (1000 / (f.reduce((a, b) => a + b, 0) / f.length)).toFixed(0);
  console.log(`${label.padEnd(22)} fps ${fps.padStart(3)}  p50 ${pct(0.5)}ms  p95 ${pct(0.95)}ms  >33ms ${(f.filter((x) => x > 33).length / f.length * 100).toFixed(0)}%`);
};

const pos = await page.evaluate(() => ({
  hero: 0,
  ndr: document.querySelector('#chapter-ndr').offsetTop,
  sentinel: document.querySelector('#chapter-sentinel').offsetTop,
  contact: document.querySelector('#contact').offsetTop,
  heroH: document.querySelector('#hero').offsetHeight,
}));
await measure('hero idle + pointer', 0, 0);
await measure('hero scrolling', 0, 60);
await measure('sentinel scrolling', pos.sentinel - 200, 40);
await measure('ndr scrolling', pos.ndr - 200, 40);
await measure('contact + pointer', pos.contact, 0);
await browser.close();
