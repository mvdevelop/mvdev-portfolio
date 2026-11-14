import { test, expect } from '@playwright/test';

test.describe('MvDev Portfolio - Projects Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#work');
  });

  test('should display all project cards', async ({ page }) => {
    // Check for at least 4 projects
    const projectCards = page.locator('#work article.group');
    await expect(projectCards).toHaveCount(4);
  });

  test('should show Macaw English School project', async ({ page }) => {
    const macawEnglishProject = page.locator('h2:has-text("Macaw English School")').first();
    await expect(macawEnglishProject).toBeVisible();
  });

  test('should show Macaw Social Media project', async ({ page }) => {
    const macawSocialProject = page.locator('h2:has-text("Macaw")').first();
    await expect(macawSocialProject).toBeVisible();
  });

  test('should show Snake Game project', async ({ page }) => {
    const snakeGameProject = page.locator('h2').filter({ hasText: 'Snake' }).first();
    await expect(snakeGameProject).toBeVisible();
  });

  test('should show Blushify E-commerce project', async ({ page }) => {
    const blushifyProject = page.locator('h2:has-text("Blushify")').first();
    await expect(blushifyProject).toBeVisible();
  });

  test('should navigate to project detail pages', async ({ page }) => {
    // Click on first project's "View Case Study" link
    const viewCaseStudyLinks = page.locator('a:has-text("View Case Study")');
    await expect(viewCaseStudyLinks).toHaveCount(4);

    // Click the first one
    await viewCaseStudyLinks.first().click();

    // Should navigate to /projects/[slug]
    await expect(page).toHaveURL(/\/projects\//);
  });

  test('should load project detail page with correct content', async ({ page }) => {
    // Navigate directly to a project
    await page.goto('/projects/macaw-english-school');

    // Check page title
    await expect(page).toHaveTitle(/Macaw English School/i);

    // Check for key sections
    const challengeSection = page.locator('h2:has-text("Challenge & Solution")');
    await expect(challengeSection).toBeVisible();

    const featuresSection = page.locator('h2:has-text("Key Features")');
    await expect(featuresSection).toBeVisible();

    const techSection = page.locator('h3:has-text("Technologies Used")');
    await expect(techSection).toBeVisible();

    // Check for demo and repo links
    const demoLink = page.locator('a:has-text("Live Demo")');
    await expect(demoLink).toBeVisible();

    const repoLink = page.locator('a:has-text("GitHub Repository")');
    await expect(repoLink).toBeVisible();
  });

  test('should have working back navigation from project detail', async ({ page }) => {
    await page.goto('/projects/snake-game');

    // Click back button
    const backButton = page.locator('a:has-text("Back to Projects")');
    await backButton.click();

    // Should return to homepage with #work anchor
    await expect(page).toHaveURL('/#work');
  });
});
