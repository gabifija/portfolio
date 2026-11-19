import { test, expect, type Page } from '@playwright/test';

const sectionOrder = ['home', 'work', 'about', 'skills', 'contact'];

const sectionIds = (page: Page) =>
  page.locator('main > section').evaluateAll((sections) => sections.map((section) => section.id));

test.describe('wide viewport', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('sections appear in page order', async ({ page }) => {
    await page.goto('./');

    expect(await sectionIds(page)).toEqual(sectionOrder);
  });

  test('navbar links follow page order', async ({ page }) => {
    await page.goto('./');

    const nav = page.getByRole('navigation', { name: 'main' });
    await expect(nav.getByRole('link')).toHaveText(sectionOrder);
  });

  test('each navbar link brings its section into view', async ({ page }) => {
    await page.goto('./');
    const nav = page.getByRole('navigation', { name: 'main' });

    for (const id of [...sectionOrder].reverse()) {
      await nav.getByRole('link', { name: id, exact: true }).click();
      await expect(page.locator(`#${id}`)).toBeInViewport();
    }
  });

  test('no social sidebar: the header is the only fixed element', async ({ page }) => {
    await page.goto('./');

    const fixedElements = await page.evaluate(() =>
      [...document.querySelectorAll('body *')]
        .filter((el) => getComputedStyle(el).position === 'fixed' && el.getClientRects().length > 0)
        .map((el) => el.tagName.toLowerCase())
    );
    expect(fixedElements).toEqual(['header']);
  });
});

test.describe('narrow viewport', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile menu opens, lists sections in order, and closes', async ({ page }) => {
    await page.goto('./');
    const menu = page.getByRole('navigation', { name: 'menu' });

    await expect(page.getByRole('navigation', { name: 'main' })).toBeHidden();
    await expect(menu).toBeHidden();

    await page.getByRole('button', { name: 'open menu' }).click();
    await expect(menu.getByRole('link')).toHaveText(sectionOrder);

    await page.getByRole('button', { name: 'close menu' }).click();
    await expect(menu).toBeHidden();
  });

  test('choosing a section from the mobile menu closes it and shows the section', async ({ page }) => {
    await page.goto('./');

    await page.getByRole('button', { name: 'open menu' }).click();
    await page.getByRole('navigation', { name: 'menu' }).getByRole('link', { name: 'skills' }).click();

    await expect(page.getByRole('navigation', { name: 'menu' })).toBeHidden();
    await expect(page.locator('#skills')).toBeInViewport();
  });
});
