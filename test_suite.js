const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('--- STARTING COMPREHENSIVE QA TEST SUITE ---');
  const browser = await chromium.launch({ channel: 'msedge' });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.message);
  });

  // Navigate to local site
  await page.goto('http://localhost:8080/index.html', { waitUntil: 'networkidle' });
  console.log('Loaded index.html successfully.');

  // 1. Console Errors Check
  console.log('Console errors count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.error('Errors found:', consoleErrors);
  }

  // 2. Horizontal Scroll Check across viewports
  const viewports = [
    { width: 390, height: 844 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 }
  ];

  for (const vp of viewports) {
    await page.setViewportSize(vp);
    await page.waitForTimeout(300);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    const hasHorizontalScroll = scrollWidth > clientWidth;
    console.log(`Viewport ${vp.width}x${vp.height}: scrollWidth=${scrollWidth}, clientWidth=${clientWidth}, hasHorizontalScroll=${hasHorizontalScroll}`);
  }

  // 3. Viewport Heights Check at 1440x900
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(500);

  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const totalVH = (totalHeight / 900).toFixed(2);
  console.log(`Total Home Page Height at 1440x900: ${totalHeight}px (${totalVH} viewports) — Target: < 14 viewports`);

  const sectionHeights = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('header#hero, section'));
    return sections.map(s => {
      const id = s.id || s.className;
      const height = s.offsetHeight;
      const vh = (height / 900).toFixed(2);
      return { id, height, vh };
    });
  });

  console.log('Section Heights:');
  for (const s of sectionHeights) {
    const isExempt = s.id === 'work';
    const passes = isExempt || parseFloat(s.vh) <= 1.55;
    console.log(` - Section #${s.id}: ${s.height}px (${s.vh} VH) -> ${passes ? 'PASS' : 'EXCEEDS'}`);
  }

  // 4. Capture section screenshots at 1440 and 390
  const sectionsToCapture = [
    { id: 'hero', name: '01-hero' },
    { id: 'highlights', name: '02-highlights' },
    { id: 'work', name: '03-selected-work' },
    { selector: '.section.section-alt:has(.rail-wrapper)', name: '04-more-work' },
    { id: 'principles', name: '05-principles' },
    { id: 'experience', name: '06-experience' },
    { id: 'skills', name: '07-skills' },
    { id: 'credentials', name: '08-credentials' },
    { id: 'endorsements', name: '09-endorsements' },
    { selector: '.cyber-band', name: '10-cyber-band' },
    { id: 'contact', name: '11-contact' }
  ];

  fs.mkdirSync('audit/screenshots/1440', { recursive: true });
  fs.mkdirSync('audit/screenshots/390', { recursive: true });

  // 1440 screenshots
  await page.setViewportSize({ width: 1440, height: 900 });
  for (const item of sectionsToCapture) {
    const loc = item.id ? page.locator(`#${item.id}`) : page.locator(item.selector);
    if (await loc.count() > 0) {
      await loc.scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
      await loc.screenshot({ path: `audit/screenshots/1440/${item.name}.png` });
    }
  }

  // 390 screenshots
  await page.setViewportSize({ width: 390, height: 844 });
  for (const item of sectionsToCapture) {
    const loc = item.id ? page.locator(`#${item.id}`) : page.locator(item.selector);
    if (await loc.count() > 0) {
      await loc.scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
      await loc.screenshot({ path: `audit/screenshots/390/${item.name}.png` });
    }
  }
  console.log('Captured section screenshots at 1440px and 390px.');

  // 5. Test Keyboard Navigation & Modal Sheet Interactions
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:8080/index.html');
  await page.keyboard.press('Tab'); // Skip link
  const skipLinkFocused = await page.evaluate(() => document.activeElement.classList.contains('skip-link'));
  console.log('Skip link accessible on first Tab:', skipLinkFocused);

  // Click Sentinel Case Study button
  const sentinelBtn = page.locator('button[data-modal="modal-sentinel"]').first();
  await sentinelBtn.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await sentinelBtn.click();
  await page.waitForTimeout(450);
  const isSentinelModalOpen = await page.evaluate(() => document.getElementById('modal-sentinel').classList.contains('open'));
  console.log('Sentinel Case Study modal open after click:', isSentinelModalOpen);

  // Press Escape to close
  await page.keyboard.press('Escape');
  await page.waitForTimeout(450);
  const isSentinelModalClosed = await page.evaluate(() => !document.getElementById('modal-sentinel').classList.contains('open'));
  console.log('Sentinel Case Study modal closed after ESC:', isSentinelModalClosed);

  // 6. Test Accordion Expand
  const accordionHeader = page.locator('.timeline-header').first();
  await accordionHeader.click();
  await page.waitForTimeout(450);
  const isExpanded = await page.evaluate(() => document.querySelector('.timeline-item').classList.contains('expanded'));
  console.log('Experience timeline accordion expands on click:', isExpanded);

  // 7. Verify uses.html and cyber-interview-ai.html
  await page.goto('http://localhost:8080/uses.html');
  console.log('uses.html title:', await page.title());

  await page.goto('http://localhost:8080/cyber-interview-ai.html');
  console.log('cyber-interview-ai.html title:', await page.title());

  await browser.close();
  console.log('--- QA TEST SUITE COMPLETED SUCCESSFULLY ---');
})();
