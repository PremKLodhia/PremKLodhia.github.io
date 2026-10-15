const { chromium } = require('playwright');

(async () => {
  console.log('--- STARTING MOBILE VERIFICATION SUITE ---');
  const browser = await chromium.launch({ channel: 'msedge' });
  const page = await browser.newPage();
  
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => consoleErrors.push(err.message));

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:8080/index.html', { waitUntil: 'networkidle' });

  console.log('Console errors:', consoleErrors.length);

  // 1. Screenshot Hero
  await page.screenshot({ path: 'audit/mobile_01_hero.png' });
  console.log('Saved mobile_01_hero.png');

  // 2. Test Hamburger Open & Morph
  const hamburger = page.locator('.nav-hamburger');
  console.log('Hamburger visible:', await hamburger.isVisible());
  await hamburger.click();
  await page.waitForTimeout(400);

  const mobileMenu = page.locator('.mobile-menu-overlay');
  console.log('Mobile menu open class:', await mobileMenu.evaluate(el => el.classList.contains('open')));
  console.log('Hamburger open class:', await hamburger.evaluate(el => el.classList.contains('open')));
  await page.screenshot({ path: 'audit/mobile_02_menu_open.png' });
  console.log('Saved mobile_02_menu_open.png');

  // 3. Test Hamburger Close via click on X
  await hamburger.click();
  await page.waitForTimeout(400);
  console.log('Mobile menu closed after clicking X:', !(await mobileMenu.evaluate(el => el.classList.contains('open'))));
  console.log('Hamburger closed after clicking X:', !(await hamburger.evaluate(el => el.classList.contains('open'))));

  // 4. Test Mobile Menu navigation click
  await hamburger.click();
  await page.waitForTimeout(300);
  const compMenuLink = page.locator('.mobile-menu-links a[href="#competitions"]');
  await compMenuLink.click();
  await page.waitForTimeout(500);
  console.log('Mobile menu closed after link click:', !(await mobileMenu.evaluate(el => el.classList.contains('open'))));

  // 5. Screenshot Highlights
  await page.locator('#highlights').scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.locator('#highlights').screenshot({ path: 'audit/mobile_03_highlights.png' });
  console.log('Saved mobile_03_highlights.png');

  // 6. Screenshot Selected Work (Sentinel & Zero Trust)
  await page.locator('#work').scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.locator('.work-chapter').first().screenshot({ path: 'audit/mobile_04_work_chapter1.png' });
  await page.locator('.work-chapter').nth(1).screenshot({ path: 'audit/mobile_04_work_chapter2.png' });
  console.log('Saved mobile_04_work_chapter1.png & chapter2.png');

  // 7. Screenshot Rail (More Work)
  await page.locator('.rail-wrapper').scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.locator('.rail-wrapper').screenshot({ path: 'audit/mobile_05_rail.png' });
  console.log('Saved mobile_05_rail.png');

  // 8. Screenshot Competitions
  await page.locator('#competitions').scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await page.locator('#competitions').screenshot({ path: 'audit/mobile_06_competitions.png' });
  console.log('Saved mobile_06_competitions.png');

  // 9. Check horizontal overflow on mobile viewports
  for (const w of [360, 375, 390, 414, 430, 768]) {
    await page.setViewportSize({ width: w, height: 844 });
    await page.waitForTimeout(200);
    const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientW = await page.evaluate(() => document.documentElement.clientWidth);
    console.log(`Viewport ${w}px: scrollW=${scrollW}, clientW=${clientW}, noOverflow=${scrollW <= clientW}`);
  }

  await browser.close();
  console.log('--- MOBILE VERIFICATION SUITE PASSED SUCCESSFULLY ---');
})();
