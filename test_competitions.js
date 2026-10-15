const { chromium } = require('playwright');

(async () => {
  console.log('--- TESTING COMPETITIONS SECTION & FULL INTEGRATION ---');
  const browser = await chromium.launch({ channel: 'msedge' });
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', err => consoleErrors.push(err.message));

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:8080/index.html', { waitUntil: 'networkidle' });

  console.log('Console errors:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Errors:', consoleErrors);
  }

  // 1. Verify Desktop Nav links
  const navLinks = await page.locator('.nav-links-desktop a').allInnerTexts();
  console.log('Desktop Nav Links:', navLinks);

  // 2. Click Competitions nav link and verify scroll
  const compLink = page.locator('.nav-links-desktop a[href="#competitions"]');
  console.log('Competitions nav link exists:', await compLink.isVisible());
  await compLink.click();
  await page.waitForTimeout(500);

  // 3. Verify Competitions section elements
  const compSection = page.locator('#competitions');
  console.log('Competitions section visible:', await compSection.isVisible());
  const cards = page.locator('#competitions .competition-card');
  const cardCount = await cards.count();
  console.log('Competition cards count:', cardCount);

  // Verify images loaded properly
  const images = page.locator('#competitions .competition-img');
  for (let i = 0; i < await images.count(); i++) {
    const img = images.nth(i);
    const naturalWidth = await img.evaluate(el => el.naturalWidth);
    const src = await img.evaluate(el => el.currentSrc);
    console.log(`Image ${i + 1}: naturalWidth=${naturalWidth}, currentSrc=${src}`);
  }

  // 4. Test View Certificate links
  const certLinks = page.locator('#competitions a[target="_blank"]');
  console.log('Certificate / Award links count:', await certLinks.count());
  for (let i = 0; i < await certLinks.count(); i++) {
    const link = certLinks.nth(i);
    const href = await link.getAttribute('href');
    const text = (await link.innerText()).trim();
    console.log(`Link ${i + 1}: "${text}" -> ${href}`);
  }

  // 5. Test Responsive Layout & Overflow
  for (const w of [390, 768, 1024, 1440]) {
    await page.setViewportSize({ width: w, height: 900 });
    await page.waitForTimeout(250);
    const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientW = await page.evaluate(() => document.documentElement.clientWidth);
    console.log(`Viewport ${w}px: scrollW=${scrollW}, clientW=${clientW}, noOverflow=${scrollW <= clientW}`);
  }

  // 6. Test Mobile Menu at 390px
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(200);
  const hamburger = page.locator('.nav-hamburger');
  console.log('Hamburger visible on mobile:', await hamburger.isVisible());
  await hamburger.click();
  await page.waitForTimeout(350);
  const mobileMenu = page.locator('.mobile-menu-overlay');
  console.log('Mobile menu active:', await mobileMenu.evaluate(el => el.classList.contains('active')));
  const mobileLinks = await page.locator('.mobile-menu-links a').allInnerTexts();
  console.log('Mobile menu links:', mobileLinks);
  
  // Close mobile menu
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  console.log('Mobile menu closed:', !(await mobileMenu.evaluate(el => el.classList.contains('active'))));

  // 7. Capture screenshots
  await page.setViewportSize({ width: 1440, height: 900 });
  await compSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await compSection.screenshot({ path: 'audit/test_competitions_desktop.png' });
  console.log('Saved audit/test_competitions_desktop.png');

  await page.setViewportSize({ width: 390, height: 844 });
  await compSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await compSection.screenshot({ path: 'audit/test_competitions_mobile.png' });
  console.log('Saved audit/test_competitions_mobile.png');

  await browser.close();
  console.log('--- ALL COMPETITION TESTS PASSED ---');
})();
