// @ts-check
import { test, expect } from '@playwright/test';

test('logs in to Sauce Demo successfully', async ({ page }) => {
  // Step 1: Open the Sauce Demo website.
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter the username into the username field.
  await page.locator('[data-test="username"]').fill('standard_user');

  // Step 3: Enter the password into the password field.
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Step 4: Click the login button.
  await page.locator('[data-test="login-button"]').click();

  // Step 5: Verify login worked by checking the URL contains "inventory".
  await expect(page).toHaveURL(/inventory/);
});

test('shows an error for invalid login', async ({ page }) => {
  // Step 1: Open the Sauce Demo website.
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter a locked out username into the username field.
  await page.locator('[data-test="username"]').fill('locked_out_user');

  // Step 3: Enter the password into the password field.
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Step 4: Click the login button.
  await page.locator('[data-test="login-button"]').click();

  // Step 5: Verify that the error message is visible.
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
