/**
 * Puppeteer setup script for Lighthouse CI
 * This runs before Lighthouse collects metrics
 */
module.exports = async (page, url) => {
  // Wait for page to fully load
  await page.goto(url, { waitUntil: 'networkidle0' });

  // Wait for fonts to be loaded
  await page.waitForFunction(() => document.fonts.ready).catch(() => {});

  // Ensure images are loaded
  await page.waitForLoadState('networkidle');
};
