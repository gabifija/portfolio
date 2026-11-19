import { test, expect } from '@playwright/test';

test('home links to github and linkedin with accessible names', async ({ page }) => {
  await page.goto('./');
  const home = page.locator('#home');

  await expect(home.getByRole('link', { name: 'github' })).toHaveAttribute('href', 'https://github.com/gabifija');
  await expect(home.getByRole('link', { name: 'linkedin' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/gabifija/'
  );
});

for (const id of ['home', 'work', 'about']) {
  test(`${id} text is all lowercase`, async ({ page }) => {
    await page.goto('./');

    const text = await page.locator(`#${id}`).innerText();
    expect(text).toBe(text.toLowerCase());
  });
}

test('work marks the current role as current', async ({ page }) => {
  await page.goto('./');

  const current = page.locator('#work article').filter({ hasText: 'trueloyal' });
  await expect(current).toContainText('current');
});

test('about has no greeting filler', async ({ page }) => {
  await page.goto('./');
  const about = page.locator('#about');

  await expect(about).not.toContainText('bonjour le monde');
  await expect(about).not.toContainText('nice to meet you');
  await expect(about).not.toContainText('please take a look around');
});
