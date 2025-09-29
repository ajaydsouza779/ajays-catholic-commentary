import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps
  await page.goto('/auth/signin');
  await page.getByLabel(/Email/i).fill('ajay@example.com');
  await page.getByLabel(/Password/i).fill('admin123');
  await page.getByRole('button', { name: /Sign In/i }).click();
  
  // Wait for redirect after successful login
  await page.waitForURL(/.*\/(admin|$)/);
  
  // Verify we're logged in
  await expect(page.getByText(/Sign Out|Dashboard|Admin/i)).toBeVisible();
  
  // End of authentication steps.
  await page.context().storageState({ path: authFile });
});
