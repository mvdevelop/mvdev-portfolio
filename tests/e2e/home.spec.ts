import { test, expect } from '@playwright/test';

test.describe('MvDev Portfolio - Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/MvDev/i);
  });

  test('should display hero section with name and role', async ({ page }) => {
    // Check for the main heading with the developer's name
    const heroSection = page.locator('#hero');
    await expect(heroSection).toBeVisible();

    // Check for role text
    const roleText = heroSection.locator('text=/Full Stack Developer.*Backend Engineering/i');
    await expect(roleText).toBeVisible();

    // Check for name
    const nameText = heroSection.locator('text=/Vinicius Dilly/i');
    await expect(nameText).toBeVisible();
  });

  test('should have navigation menu', async ({ page }) => {
    const nav = page.locator('nav[role="navigation"]');
    await expect(nav).toBeVisible();

    // Check for main navigation links
    const homeLink = nav.locator('a[href="#hero"]');
    await expect(homeLink).toBeVisible();

    const servicesLink = nav.locator('a[href="#services"]');
    await expect(servicesLink).toBeVisible();

    const resumeLink = nav.locator('a[href="#resume"]');
    await expect(resumeLink).toBeVisible();

    const workLink = nav.locator('a[href="#work"]');
    await expect(workLink).toBeVisible();

    const contactLink = nav.locator('a[href="#contact"]');
    await expect(contactLink).toBeVisible();
  });

  test('should switch between English and Portuguese languages', async ({ page }) => {
    // Initially should be in English
    const homeLinkEn = page.locator('nav').getByText('Home');
    await expect(homeLinkEn).toBeVisible();

    // Click on Portuguese button
    const ptButton = page.locator('button[aria-label="Switch to Portuguese"]');
    await ptButton.click();

    // Should change to Portuguese
    const homeLinkPt = page.locator('nav').getByText('Início');
    await expect(homeLinkPt).toBeVisible();

    // Switch back to English
    const enButton = page.locator('button[aria-label="Switch to English"]');
    await enButton.click();

    const homeLinkEnBack = page.locator('nav').getByText('Home');
    await expect(homeLinkEnBack).toBeVisible();
  });

  test('should have working social media links', async ({ page }) => {
    const githubLink = page.locator('a[aria-label="GitHub profile"]');
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/mvdevelop');

    const linkedinLink = page.locator('a[aria-label="LinkedIn profile"]');
    await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/vinicius-dilly');

    const instagramLink = page.locator('a[aria-label="Instagram profile"]');
    await expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/mvdevelop');
  });

  test('should have CV download buttons', async ({ page }) => {
    // Check for download CV button in hero
    const downloadBtn = page.locator('[href$=".pdf"]');
    await expect(downloadBtn).toHaveCount(1); // At least one PDF link
  });

  test('should scroll to sections when clicking navigation links', async ({ page }) => {
    // Click on Services link
    const servicesLink = page.locator('nav a[href="#services"]');
    await servicesLink.click();

    // Wait for smooth scroll and check if services section is visible
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeInViewport();
  });

  test('should have all major sections', async ({ page }) => {
    const sections = ['#hero', '#services', '#resume', '#work', '#contact'];

    for (const section of sections) {
      const element = page.locator(section);
      await expect(element).toBeAttached();
    }
  });
});
