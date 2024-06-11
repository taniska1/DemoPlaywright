import { test, expect } from '@playwright/test';
import Auth from '../helpers/login';


test('user should be able to login', async ({ page }) => {
    var url = 'https://www.saucedemo.com/'
    await page.goto(url);
    await Auth.login(page, 'standard_user', 'secret_sauce');
    await expect(page.locator('[data-test="title"]')).toBeVisible();
});

test("user should not be able to login", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await Auth.login(page, 'locked_out_user', 'secret_sauce')
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been looked out.');
});

