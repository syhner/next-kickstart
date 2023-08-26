import { expect, test } from '@playwright/test';

test('server component', async ({ page }) => {
  await page.goto('/examples/server-component');

  await expect(page.getByText('health: ok')).toBeVisible();
});
