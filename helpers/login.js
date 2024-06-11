import { test, expect } from '@playwright/test';

class Auth {
    static async login(page, username, password) {
        await page.locator('[data-test="username"]').fill(username);
        await page.locator('[data-test="password"]').fill(password);
        await page.locator('[data-test="login-button"]').click();
    } 
}

export default Auth;

