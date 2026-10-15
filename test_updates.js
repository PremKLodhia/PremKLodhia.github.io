const { chromium } = require('playwright');

(async () => {
  console.log('--- TESTING NEW UPDATES ---');
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
  if (consoleErrors.length > 0) console.error('Errors:', consoleErrors);

  // 1. Test More Skills Toggle
  const toggleBtn = page.locator('#toggle-more-skills');
  const drawer = page.locator('#more-skills-drawer');
  
  console.log('Drawer visible initially:', await drawer.isVisible());
  await toggleBtn.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await toggleBtn.click();
  await page.waitForTimeout(200);
  console.log('Drawer visible after click:', await drawer.isVisible());
  console.log('Button text after open:', (await toggleBtn.innerText()).trim());
  
  await toggleBtn.click();
  await page.waitForTimeout(200);
  console.log('Drawer visible after 2nd click:', await drawer.isVisible());

  // 2. Test Philosophy Modal
  const philBtn = page.locator('button[data-modal="modal-philosophy"]');
  await philBtn.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await philBtn.click();
  await page.waitForTimeout(400);

  const modalTitle = await page.locator('#modal-philosophy-title').innerText();
  console.log('Philosophy Modal Title:', modalTitle);
  const modalText = await page.locator('#modal-philosophy .modal-scroll-area p').first().innerText();
  console.log('Philosophy Modal First Paragraph:', modalText.substring(0, 100) + '...');

  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  console.log('Philosophy Modal closed after ESC:', !(await page.locator('#modal-philosophy').evaluate(el => el.classList.contains('open'))));

  // 3. Test Contact Availability Text
  const contactText = await page.locator('#contact .lead-text').innerText();
  console.log('Contact Availability Text:', contactText);

  // 4. Check horizontal scroll
  for (const w of [390, 768, 1024, 1440]) {
    await page.setViewportSize({ width: w, height: 900 });
    await page.waitForTimeout(200);
    const scrollW = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientW = await page.evaluate(() => document.documentElement.clientWidth);
    console.log(`Viewport ${w}px: scrollW=${scrollW}, clientW=${clientW}, noOverflow=${scrollW <= clientW}`);
  }

  // 5. Screenshot the Skills section with drawer open
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.locator('#skills').scrollIntoViewIfNeeded();
  await toggleBtn.click();
  await page.waitForTimeout(300);
  await page.locator('#skills').screenshot({ path: 'audit/test_skills_section_updated.png' });
  console.log('Saved skills screenshot to audit/test_skills_section_updated.png');

  // Screenshot Philosophy Modal
  await page.locator('button[data-modal="modal-philosophy"]').click();
  await page.waitForTimeout(400);
  await page.locator('#modal-philosophy .modal-panel').screenshot({ path: 'audit/test_philosophy_modal_updated.png' });
  console.log('Saved philosophy modal screenshot to audit/test_philosophy_modal_updated.png');

  await browser.close();
  console.log('--- ALL UPDATE TESTS COMPLETED SUCCESSFULLY ---');
})();
