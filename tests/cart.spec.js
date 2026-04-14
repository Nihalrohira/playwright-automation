// @ts-check
import { test, expect } from '@playwright/test';

test('adds a product to the cart successfully', async ({ page }) => {
  // Step 1: Open the Sauce Demo website.
  await page.goto('https://www.saucedemo.com/');

  // Step 2: Enter the username into the username field.
  await page.locator('[data-test="username"]').fill('standard_user');

  // Step 3: Enter the password into the password field.
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // Step 4: Click the login button.
  await page.locator('[data-test="login-button"]').click();

  // Step 5: Add one product to the cart.
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // Step 6: Click the cart icon to open the cart page.
  await page.locator('[data-test="shopping-cart-link"]').click();

  // Step 7: Verify the selected product is visible in the cart.
  await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');
});
