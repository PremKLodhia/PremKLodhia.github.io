import { chromium } from 'playwright';
for (const dpr of [1, 1.5]) {
  const browser = await chromium.launch({ args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: dpr });
  const logs = [];
  page.on('console', (m) => m.text().startsWith('[core]') && logs.push(m.text()));
  await page.goto('http://localhost:8080/index.html?perf', { waitUntil: 'load' });
  await page.waitForTimeout(9000);
  console.log(`DPR ${dpr} hero:`, logs.slice(-3).join(' | '));
  await page.evaluate(() => window.scrollTo(0, document.querySelector('#contact').offsetTop));
  logs.length = 0;
  await page.waitForTimeout(5000);
  console.log(`DPR ${dpr} contact:`, logs.slice(-2).join(' | '));
  await browser.close();
}
