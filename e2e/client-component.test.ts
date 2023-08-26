import { expect, test } from '@playwright/test';

test('client component', async ({ page }) => {
  await page.goto('/examples/client-component');

  await expect(page.getByText('health: ok')).toBeVisible();
});
