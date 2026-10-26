/**
 * Interaction checks for the homepage (dev server must be running).
 *   node scripts/interactions.mjs
 */
import { chromium } from 'playwright';

const base = 'http://localhost:8080/index.html';
const results = [];
const check = (name, ok, detail = '') => results.push({ name, ok, detail });

const browser = await chromium.launch();
const errors = [];

// Desktop
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(base, { waitUntil: 'networkidle' });

  await page.click('[data-modal="modal-sentinel"]');
  await page.waitForTimeout(500);
  check('Case study opens', await page.evaluate(() => document.getElementById('modal-sentinel').open));
  check('Scroll locked while open', await page.evaluate(() => document.body.classList.contains('is-locked')));
  await page.click('#modal-sentinel [data-modal="modal-invoiceops"]');
  await page.waitForTimeout(900);
  check('Next project chains dialogs', await page.evaluate(() => !document.getElementById('modal-sentinel').open && document.getElementById('modal-invoiceops').open));
  await page.keyboard.press('Escape');
  await page.waitForTimeout(600);
  check('Escape closes dialog and unlocks', await page.evaluate(() => !document.getElementById('modal-invoiceops').open && !document.body.classList.contains('is-locked')));

  await page.click('.plate--sentinel');
  await page.waitForTimeout(600);
  const lb = await page.evaluate(() => ({ open: document.getElementById('modal-lightbox').open, src: document.getElementById('lightbox-img').getAttribute('src'), title: document.getElementById('lightbox-title').textContent }));
  check('Lightbox opens with image', lb.open && lb.src.includes('project-sentinel'), lb.title);
  await page.mouse.click(10, 450);
  await page.waitForTimeout(600);
  check('Backdrop click closes lightbox', await page.evaluate(() => !document.getElementById('modal-lightbox').open));

  await page.evaluate(() => document.querySelector('#credentials').scrollIntoView());
  await page.click('.filter__btn[data-filter="awards"]');
  const shown = await page.evaluate(() => [...document.querySelectorAll('.entry')].filter((e) => !e.hidden).length);
  check('Credentials filter (awards = 3)', shown === 3, `shown ${shown}`);
  await page.click('.filter__btn[data-filter="all"]');

  await page.click('.role__head[aria-controls="role-1"]');
  await page.waitForTimeout(700);
  const h = await page.evaluate(() => document.getElementById('role-1').getBoundingClientRect().height);
  check('Experience accordion expands', h > 200, `height ${Math.round(h)}`);

  await page.click('.drawer__toggle');
  await page.waitForTimeout(800);
  check('Skills drawer expands', await page.evaluate(() => document.getElementById('more-skills').getBoundingClientRect().height > 100));

  await page.evaluate(() => document.querySelector('#contact').scrollIntoView());
  await page.click('[data-form] [type="submit"]');
  check('Form blocks empty submit with errors', await page.evaluate(() => document.getElementById('name_field').getAttribute('aria-invalid') === 'true' && document.getElementById('name_field-error').textContent.length > 0));

  await page.goto(base + '#kinora', { waitUntil: 'networkidle' });
  await page.waitForTimeout(700);
  check('Legacy hash #kinora opens case study', await page.evaluate(() => document.getElementById('modal-kinora').open));

  await page.goto(base + '#projects', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  check('Legacy hash #projects maps to #work', page.url().endsWith('#work'));

  const links = await page.evaluate(() => [...new Set([...document.querySelectorAll('a[href], [data-lightbox-src], object[data], img[src], source[srcset]')].map((el) => el.getAttribute('href') || el.dataset.lightboxSrc || el.getAttribute('data') || el.getAttribute('src') || el.getAttribute('srcset')))].filter((h) => h && !h.startsWith('#') && !h.startsWith('http') && !h.startsWith('mailto') && !h.startsWith('data:')));
  const missing = [];
  for (const l of links) {
    const r = await page.request.get(new URL(l, base).href);
    if (!r.ok()) missing.push(`${l} ${r.status()}`);
  }
  check(`Local links/assets resolve (${links.length})`, missing.length === 0, missing.join(', '));
  const anchors = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].map((a) => a.getAttribute('href')).filter((h) => h.length > 1 && !document.querySelector(h)));
  check('In-page anchors resolve', anchors.length === 0, anchors.join(', '));
  await page.close();
}

// Mobile menu
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.tap('.nav__toggle');
  await page.waitForTimeout(500);
  check('Mobile menu opens', await page.evaluate(() => !document.getElementById('menu').hidden && document.querySelector('.nav__toggle').getAttribute('aria-expanded') === 'true'));
  check('Background inert while menu open', await page.evaluate(() => document.querySelector('main').inert));
  await page.tap('.menu__links a[href="#skills"]');
  await page.waitForTimeout(1500);
  const st = await page.evaluate(() => ({ hidden: document.getElementById('menu').hidden, top: Math.round(document.getElementById('skills').getBoundingClientRect().top) }));
  check('Menu link closes menu and navigates', st.hidden && Math.abs(st.top) < 120, `skills top ${st.top}`);
  await ctx.close();
}

await browser.close();
results.forEach((r) => console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? `  (${r.detail})` : ''}`));
console.log(`Page errors: ${errors.length}`, errors.join(' | '));
process.exitCode = results.every((r) => r.ok) && !errors.length ? 0 : 1;
