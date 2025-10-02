import { test, expect } from '@playwright/test'

// Use BASE_URL if provided (e.g., PREVIEW URL), else default to local dev
const BASE_URL = process.env.BASE_URL || 'http://localhost:3001'

test.describe('Theme appearance', () => {
  test('body has creamy background and header is non-transparent', async ({ page }) => {
    await page.goto(BASE_URL)

    const bodyBg = await page.evaluate(() => {
      const el = document.querySelector('body') as HTMLElement
      return window.getComputedStyle(el).backgroundColor
    })

    // Expect creamy gold #F5F5DC => rgb(245, 245, 220)
    expect(bodyBg).toBe('rgb(245, 245, 220)')

    const headerBg = await page.evaluate(() => {
      const el = document.querySelector('header') as HTMLElement
      if (!el) return 'none'
      return window.getComputedStyle(el).backgroundColor
    })

    // Ensure header has some background (not fully transparent)
    expect(headerBg).not.toBe('rgba(0, 0, 0, 0)')
    expect(headerBg).not.toBe('transparent')
  })
})


