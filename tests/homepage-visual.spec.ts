import { test, expect } from '@playwright/test'

test.describe('Homepage Visual Validation', () => {
  test('should render homepage snapshot and theme', async ({ page }) => {
    await page.goto('http://localhost:3001/', { waitUntil: 'networkidle' })
    await page.waitForSelector('body', { state: 'visible' })
    // Check computed background colors for quick theme validation
    const headerBg = await page.locator('header').evaluate((el) => getComputedStyle(el).backgroundColor).catch(() => null)
    const bodyBg = await page.locator('body').evaluate((el) => getComputedStyle(el).backgroundColor)
    const footerBg = await page.locator('footer').evaluate((el) => getComputedStyle(el).backgroundColor).catch(() => null)

    // Body should not be pure white; ensures a neutral background is applied
    expect(bodyBg).not.toBe('rgb(255, 255, 255)')
    // If header/footer exist, they should be white-ish
    if (headerBg && headerBg !== 'rgba(0, 0, 0, 0)') expect(headerBg).toMatch(/rgb\(255,\s*255,\s*255\)|rgba\(255,\s*255,\s*255,\s*0\.?\d*\)/)
    if (footerBg && footerBg !== 'rgba(0, 0, 0, 0)') expect(footerBg).toMatch(/rgb\(255,\s*255,\s*255\)|rgba\(255,\s*255,\s*255,\s*0\.?\d*\)/)
    await expect(page).toHaveScreenshot('homepage.png', { fullPage: true })
  })
})


