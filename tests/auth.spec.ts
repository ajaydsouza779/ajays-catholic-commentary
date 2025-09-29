import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should display sign in page', async ({ page }) => {
    await page.goto('/auth/signin');
    
    // Check page elements
    await expect(page.getByRole('heading', { name: /Sign In/i })).toBeVisible();
    await expect(page.getByLabel(/Email/i)).toBeVisible();
    await expect(page.getByLabel(/Password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Sign In/i })).toBeVisible();
    
    // Check sign up link
    await expect(page.getByRole('link', { name: /Don't have an account/i })).toBeVisible();
  });

  test('should display sign up page', async ({ page }) => {
    await page.goto('/auth/signup');
    
    // Check page elements
    await expect(page.getByRole('heading', { name: /Create Account/i })).toBeVisible();
    await expect(page.getByLabel(/Name/i)).toBeVisible();
    await expect(page.getByLabel(/Email/i)).toBeVisible();
    await expect(page.getByLabel(/Password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Create Account/i })).toBeVisible();
    
    // Check sign in link
    await expect(page.getByRole('link', { name: /Already have an account/i })).toBeVisible();
  });

  test('should sign in with valid credentials', async ({ page }) => {
    await page.goto('/auth/signin');
    
    // Fill in credentials
    await page.getByLabel(/Email/i).fill('ajay@example.com');
    await page.getByLabel(/Password/i).fill('admin123');
    
    // Submit form
    await page.getByRole('button', { name: /Sign In/i }).click();
    
    // Should redirect to homepage or admin dashboard
    await expect(page).toHaveURL(/.*\/(admin|$)/);
    
    // Should show user menu or sign out option
    await expect(page.getByText(/Sign Out|Dashboard|Admin/i)).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/auth/signin');
    
    // Fill in invalid credentials
    await page.getByLabel(/Email/i).fill('invalid@example.com');
    await page.getByLabel(/Password/i).fill('wrongpassword');
    
    // Submit form
    await page.getByRole('button', { name: /Sign In/i }).click();
    
    // Should show error message
    await expect(page.getByText(/Invalid credentials|Error/i)).toBeVisible();
  });

  test('should sign out successfully', async ({ page }) => {
    // First sign in
    await page.goto('/auth/signin');
    await page.getByLabel(/Email/i).fill('ajay@example.com');
    await page.getByLabel(/Password/i).fill('admin123');
    await page.getByRole('button', { name: /Sign In/i }).click();
    
    // Wait for redirect
    await page.waitForURL(/.*\/(admin|$)/);
    
    // Look for sign out button/link
    const signOutButton = page.getByText(/Sign Out/i).first();
    if (await signOutButton.isVisible()) {
      await signOutButton.click();
      
      // Should redirect to homepage
      await expect(page).toHaveURL(/.*\/$/);
      
      // Should show sign in button again
      await expect(page.getByRole('link', { name: /Sign In/i })).toBeVisible();
    }
  });
});
