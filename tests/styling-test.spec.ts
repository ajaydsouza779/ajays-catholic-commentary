import { test, expect } from '@playwright/test'

test.describe('Styling Validation Tests', () => {
  test('Test styling page shows proper colors and layout', async ({ page }) => {
    await page.goto('http://localhost:3001/test-styling')
    await page.waitForLoadState('networkidle')
    
    // Take screenshot for visual validation
    await page.screenshot({ path: 'screenshots/styling-test.png', fullPage: true })
    
    // Check if the page loads
    await expect(page.locator('h1')).toContainText('Styling Test Page')
    
    // Check if custom colors are applied
    const goldCard = page.locator('.bg-primary-gold')
    await expect(goldCard).toBeVisible()
    
    const navyCard = page.locator('.bg-primary-navy')
    await expect(navyCard).toBeVisible()
    
    // Check if the background is applied
    const body = page.locator('body')
    const backgroundColor = await body.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor
    })
    
    console.log('Background color:', backgroundColor)
    
    // The background should be the cream color (#F5F5DC)
    expect(backgroundColor).toBe('rgb(245, 245, 220)')
  })
  
  test('Homepage styling validation', async ({ page }) => {
    await page.goto('http://localhost:3001')
    await page.waitForLoadState('networkidle')
    
    // Check if the header is visible and styled
    const header = page.locator('header')
    await expect(header).toBeVisible()
    
    // Check if navigation links are visible
    const navLinks = page.locator('nav a')
    await expect(navLinks.first()).toBeVisible()
    
    // Check if the main content area is visible
    const mainContent = page.locator('main, .max-w-7xl')
    await expect(mainContent.first()).toBeVisible()
    
    // Take screenshot
    await page.screenshot({ path: 'screenshots/homepage-styling.png', fullPage: true })
  })
  
  test('Papal timeline page styling validation', async ({ page }) => {
    await page.goto('http://localhost:3001/history/papal-timeline')
    await page.waitForLoadState('networkidle')
    
    // Check if the page loads with proper styling
    await expect(page.locator('h1')).toContainText('History of the Chair of St. Peter')
    
    // Check if the pope list is visible
    const popeList = page.locator('.bg-white.rounded-lg.shadow-lg')
    await expect(popeList.first()).toBeVisible()
    
    // Take screenshot
    await page.screenshot({ path: 'screenshots/papal-timeline-styling.png', fullPage: true })
  })
})
