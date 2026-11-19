import { test, expect } from '@playwright/test';

const categories = ['backend', 'frontend', 'data', 'infra', 'tools'];

test('skills are grouped into the five categories, in order', async ({ page }) => {
  await page.goto('./');

  await expect(page.locator('#skills').getByRole('term')).toHaveText(categories);
});

test('every category lists its skills', async ({ page }) => {
  await page.goto('./');
  const skills = page.locator('#skills');

  for (const category of categories) {
    await expect(skills.getByRole('list', { name: `${category} skills` }).getByRole('listitem')).not.toHaveCount(0);
  }
});

test('github is not listed as a skill', async ({ page }) => {
  await page.goto('./');

  const allSkills = await page.locator('#skills').getByRole('listitem').allInnerTexts();
  expect(allSkills).not.toContain('github');
  expect(allSkills).toContain('github actions');
});

test('skills text is all lowercase', async ({ page }) => {
  await page.goto('./');

  const text = await page.locator('#skills').innerText();
  expect(text).toBe(text.toLowerCase());
});
