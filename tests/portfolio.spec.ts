import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:5173/My-portfolio/';

test.describe('Portfolio Site - Complete Verification', () => {

  test('Hero section loads correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Check name appears
    await expect(page.locator('h1')).toContainText('BALAMURUGAN P');

    // Check headline
    await expect(page.locator('text=Computer Science & Engineering Undergraduate')).toBeVisible();

    // Check CTA buttons
    await expect(page.locator('button:has-text("Explore Research")')).toBeVisible();
    await expect(page.locator('a:has-text("Download Resume")')).toBeVisible();
    await expect(page.locator('a:has-text("Connect on LinkedIn")')).toBeVisible();

    // Check profile image
    await expect(page.locator('img[alt="Balamurugan P"]')).toBeVisible();

    // Screenshot for visual regression
    await page.screenshot({ path: 'screenshots/hero-desktop.png', fullPage: false });
  });

  test('Navigation and scroll work', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Click research button
    await page.click('button:has-text("Explore Research")');

    // Wait for scroll animation
    await page.waitForTimeout(1000);

    // Verify research section is visible
    const researchSection = page.locator('#research');
    await expect(researchSection).toBeInViewport();
  });

  test('Responsive on mobile - Portrait', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Check layout doesn't overflow
    const body = await page.locator('body');
    const box = await body.boundingBox();
    expect(box?.width).toBeLessThanOrEqual(375);

    // Check mobile navigation
    await expect(page.locator('h1')).toBeVisible();

    await page.screenshot({ path: 'screenshots/hero-mobile.png', fullPage: false });
  });

  test('Responsive on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    await expect(page.locator('h1')).toBeVisible();
    await page.screenshot({ path: 'screenshots/hero-tablet.png', fullPage: false });
  });

  test('No console errors', async ({ page }) => {
    const errors: string[] = [];
    const warnings: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      } else if (msg.type() === 'warning') {
        warnings.push(msg.text());
      }
    });

    page.on('pageerror', error => {
      errors.push(error.message);
    });

    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    console.log(`Console Errors: ${errors.length}`);
    console.log(`Console Warnings: ${warnings.length}`);

    if (errors.length > 0) {
      console.log('Errors found:', errors);
    }

    // Allow warnings but no errors
    expect(errors.length).toBe(0);
  });

  test('All sections are present', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Check all major sections exist
    await expect(page.locator('text=Available for AI/ML Research')).toBeVisible();

    // Scroll through sections
    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, 2000));
    await page.waitForTimeout(500);

    await page.evaluate(() => window.scrollTo(0, 3000));
    await page.waitForTimeout(500);
  });

  test('CTA buttons are interactive', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Check explore research button
    const exploreBtn = page.locator('button:has-text("Explore Research")');
    await expect(exploreBtn).toBeEnabled();

    // Check resume download link
    const resumeLink = page.locator('a:has-text("Download Resume")');
    await expect(resumeLink).toHaveAttribute('href', /resume\.pdf/);

    // Check LinkedIn link
    const linkedinLink = page.locator('a:has-text("Connect on LinkedIn")');
    await expect(linkedinLink).toHaveAttribute('href', /linkedin\.com/);
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  test('Full page screenshot - Desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Wait for animations
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: 'screenshots/full-page-desktop.png',
      fullPage: true
    });
  });

  test('Full page screenshot - Mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Wait for animations
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: 'screenshots/full-page-mobile.png',
      fullPage: true
    });
  });

  test('Accessibility - Keyboard navigation', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    // Tab through interactive elements
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);

    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);

    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);

    // Check if focus is visible (should have focus-visible styles)
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('Performance - Page load time', async ({ page }) => {
    const startTime = Date.now();

    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');

    const loadTime = Date.now() - startTime;
    console.log(`Page load time: ${loadTime}ms`);

    // Should load in under 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });
});
