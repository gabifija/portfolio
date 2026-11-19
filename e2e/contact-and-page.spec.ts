import { test, expect } from '@playwright/test';

test('contact offers email, linkedin and github links', async ({ page }) => {
  await page.goto('./');
  const contact = page.locator('#contact');

  await expect(contact).toContainText('get in touch');

  const expectedHrefs = [
    'mailto:gabrielafijalkowska@gmail.com',
    'https://www.linkedin.com/in/gabifija/',
    'https://github.com/gabifija',
  ];
  for (const href of expectedHrefs) {
    const link = contact.locator(`a[href="${href}"]`);
    await expect(link).toHaveCount(1);
    await expect(link).toHaveAccessibleName(/\S/);
  }
});

test('the page has no form', async ({ page }) => {
  await page.goto('./');

  await expect(page.locator('form')).toHaveCount(0);
});

test('all visible page text is lowercase', async ({ page }) => {
  await page.goto('./');

  const text = await page.locator('body').innerText();
  expect(text).toBe(text.toLowerCase());
});

test('retired colours (green, sage) are not used anywhere', async ({ page }) => {
  await page.goto('./');
  // #327364 and #9fb9ac (ADR 0002)
  const retired = ['rgb(50, 115, 100)', 'rgb(159, 185, 172)'];

  // Hover every link and button too, since hover colours are where retired hues hid.
  const offenders: string[] = [];
  const check = async () => {
    const found = await page.evaluate((retiredColours) => {
      const props = ['color', 'background-color', 'border-top-color', 'outline-color'] as const;
      return [...document.querySelectorAll('body *')].flatMap((el) => {
        const style = getComputedStyle(el);
        return props
          .filter((prop) => retiredColours.includes(style.getPropertyValue(prop)))
          .map((prop) => `${el.tagName.toLowerCase()} ${prop}`);
      });
    }, retired);
    offenders.push(...found);
  };

  await check();
  for (const target of await page.locator('a:visible, button:visible').all()) {
    await target.hover();
    await check();
  }
  expect(offenders).toEqual([]);
});
