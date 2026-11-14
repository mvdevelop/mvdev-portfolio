import { test, expect } from '@playwright/test';

test.describe('MvDev Portfolio - Contact Section', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/#contact');
  });

  test('should display contact form', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
  });

  test('should have all form fields', async ({ page }) => {
    // Check for form inputs
    const firstNameInput = page.getByLabel(/first name/i);
    await expect(firstNameInput).toBeVisible();

    const lastNameInput = page.getByLabel(/last name/i);
    await expect(lastNameInput).toBeVisible();

    const emailInput = page.getByLabel(/email address/i);
    await expect(emailInput).toBeVisible();

    const phoneInput = page.getByLabel(/phone number/i);
    await expect(phoneInput).toBeVisible();

    const messageInput = page.locator('textarea[name="message"]');
    await expect(messageInput).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    // Try to submit without filling any fields
    const sendButton = page.getByRole('button', { name: /send message/i });
    await sendButton.click();

    // Check for validation messages
    const firstNameError = page.getByText(/please enter your first name/i);
    await expect(firstNameError).toBeVisible();

    const emailError = page.getByText(/please enter your email/i);
    await expect(emailError).toBeVisible();

    const messageError = page.getByText(/please enter a message/i);
    await expect(messageError).toBeVisible();
  });

  test('should show success message after submission', async ({ page }) => {
    // Fill in the form
    await page.getByLabel(/first name/i).fill('John');
    await page.getByLabel(/last name/i).fill('Doe');
    await page.getByLabel(/email address/i).fill('john@example.com');
    await page.getByLabel(/phone number/i).fill('+1234567890');
    await page.getByRole('combobox').selectOption('Frontend');
    await page.locator('textarea[name="message"]').fill('Hello, I would like to discuss a project.');

    // Submit the form
    const sendButton = page.getByRole('button', { name: /send message/i });
    await sendButton.click();

    // Wait for success message (the button text changes to "Opening your email client...")
    await expect(sendButton).toHaveText(/opening your email client/i, { timeout: 5000 });
  });
});
