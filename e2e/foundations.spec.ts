import { test, expect } from '@playwright/test';

const fullTitle = 'gabriela fijałkowska-papier | full-stack engineer';

test('page metadata shows the full name', async ({ page }) => {
  await page.goto('./');

  await expect(page).toHaveTitle(fullTitle);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', fullTitle);
});

test('fonts are self-hosted, not loaded from google fonts', async ({ page }) => {
  const googleFontRequests: string[] = [];
  page.on('request', (request) => {
    const { hostname } = new URL(request.url());
    if (hostname === 'fonts.googleapis.com' || hostname === 'fonts.gstatic.com') {
      googleFontRequests.push(request.url());
    }
  });

  await page.goto('./');
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);

  expect(googleFontRequests).toEqual([]);
  const loadedFamilies = await page.evaluate(() =>
    [...document.fonts].filter((face) => face.status === 'loaded').map((face) => face.family.replace(/["']/g, ''))
  );
  expect(loadedFamilies).toContain('Inter');
});
