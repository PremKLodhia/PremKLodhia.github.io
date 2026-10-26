/**
 * Browser QA for the homepage. Requires the dev server (node scripts/serve.mjs).
 *
 *   node scripts/qa.mjs [--out audit/redesign] [--only 1440] [--reduced] [--nowebgl]
 *
 * Captures each section at desktop and mobile sizes, and reports console
 * errors, failed requests and horizontal overflow.
 */
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : fallback;
};
const out = opt('--out', 'audit/redesign');
const only = opt('--only', null);
const reduced = args.includes('--reduced');
const noWebgl = args.includes('--nowebgl');
const base = opt('--url', 'http://localhost:8080/index.html');

const viewports = [
  { name: '1440', width: 1440, height: 900 },
  { name: '390', width: 390, height: 844, mobile: true },
].filter((v) => !only || v.name === only);

const shots = [
  { name: '01-hero', at: (p) => p.evaluate(() => window.scrollTo(0, 0)) },
  { name: '02-hero-align', at: (p) => p.evaluate(() => { const h = document.querySelector('#hero'); window.scrollTo(0, (h.offsetHeight - innerHeight) * 0.4); }) },
  { name: '03-profile', at: (p) => p.evaluate(() => { const h = document.querySelector('#hero'); window.scrollTo(0, (h.offsetHeight - innerHeight) * 0.95); }) },
  ...[
    ['04-work', '#work'],
    ['05-sentinel', '#chapter-sentinel'],
    ['06-invoiceops', '#chapter-invoiceops'],
    ['07-zerotrust', '#chapter-zero-trust'],
    ['08-ndr', '#chapter-ndr'],
    ['09-kinora', '#chapter-kinora'],
    ['10-archive', '.archive'],
    ['11-principles', '#principles'],
    ['12-experience', '#experience'],
    ['13-skills', '#skills'],
    ['14-competitions', '#competitions'],
    ['15-credentials', '#credentials'],
    ['16-endorsements', '#endorsements'],
    ['17-venture', '#business'],
    ['18-contact', '#contact'],
  ].map(([name, sel]) => ({
    name,
    at: (p) => p.evaluate((s) => {
      const el = document.querySelector(s);
      window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - (s === '#contact' ? 0 : 40));
    }, sel),
  })),
];

const browser = await chromium.launch({
  args: noWebgl ? ['--disable-webgl', '--disable-3d-apis'] : ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'],
});

let failures = 0;
for (const vp of viewports) {
  const dir = `${out}/${vp.name}${reduced ? '-reduced' : ''}${noWebgl ? '-nowebgl' : ''}`;
  mkdirSync(dir, { recursive: true });
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
    isMobile: !!vp.mobile,
    hasTouch: !!vp.mobile,
    reducedMotion: reduced ? 'reduce' : 'no-preference',
  });
  const page = await context.newPage();
  const problems = [];
  page.on('console', (m) => {
    if (m.type() === 'error' || (m.type() === 'warning' && !/X4122|GPU stall/.test(m.text()))) problems.push(`${m.type()}: ${m.text().slice(0, 300)}`);
  });
  page.on('pageerror', (e) => problems.push(`pageerror: ${e.message}`));
  page.on('requestfailed', (r) => problems.push(`requestfailed: ${r.url()} ${r.failure()?.errorText}`));
  page.on('response', (r) => r.status() >= 400 && problems.push(`HTTP ${r.status()}: ${r.url()}`));

  await page.goto(base, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);

  for (const s of shots) {
    await s.at(page);
    await page.waitForTimeout(1600);
    await page.screenshot({ path: `${dir}/${s.name}.png`, timeout: 60000 });
  }

  const overflow = await page.evaluate(() => {
    const w = document.documentElement.clientWidth;
    const offenders = [...document.querySelectorAll('body *')]
      .filter((el) => {
        const r = el.getBoundingClientRect();
        return r.right > w + 1 && getComputedStyle(el).position !== 'fixed' && !el.closest('.rail, .table-wrap, .diagram, .case__backdrop');
      })
      .slice(0, 8)
      .map((el) => `${el.tagName.toLowerCase()}.${[...el.classList].join('.')} right=${Math.round(el.getBoundingClientRect().right)}`);
    return { scrollWidth: document.documentElement.scrollWidth, clientWidth: w, offenders };
  });
  const live = await page.evaluate(() => document.querySelector('.core').classList.contains('is-live'));

  console.log(`\n== ${vp.name}${reduced ? ' reduced' : ''}${noWebgl ? ' no-webgl' : ''}`);
  console.log(`WebGL core live: ${live}`);
  console.log(`Horizontal overflow: ${overflow.scrollWidth > overflow.clientWidth ? 'YES' : 'no'} (${overflow.scrollWidth}/${overflow.clientWidth})`);
  if (overflow.offenders.length) console.log('  offenders:', overflow.offenders.join('\n    '));
  console.log(`Console/network problems: ${problems.length}`);
  problems.slice(0, 20).forEach((p) => console.log('  ' + p));
  failures += problems.length + (overflow.scrollWidth > overflow.clientWidth ? 1 : 0);
  await context.close();
}

await browser.close();
process.exitCode = failures ? 1 : 0;
