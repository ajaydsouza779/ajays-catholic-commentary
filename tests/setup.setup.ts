import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('/auth/signin');
  await page.locator('input[type="email"]').first().fill('ajay@example.com');
  await page.locator('input[type="password"]').first().fill('admin123');
  await page.locator('button[type="submit"], button:has-text("Sign In")').first().click();
  // Consider login successful once we navigate away from the signin page
  await page.waitForURL(/^(?!.*auth\/signin).*/);
  await page.context().storageState({ path: authFile });
});


