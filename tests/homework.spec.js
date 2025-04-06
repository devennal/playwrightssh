  import { test, expect } from '@playwright/test';

    test('testnew', async ({ page }) => {
       
          await page.goto('http://localhost:3000/login');
          await page.locator('#email-input').click();
          await page.locator('#email-input').fill('test@maddox123.ai');
          await page.locator('#password-input').click();
          await page.locator('#password-input').fill('supersecure');
          await page.getByRole('button', { name: 'Login' }).click();
          await expect(page).toHaveURL('http://localhost:3000/');
          await page.getByRole('button', { name: 'Logout' }).click();
          await page.locator('#email-input').click();
          await page.locator('#email-input').click();
          await page.locator('#email-input').fill('test@maddox.ai');
          await page.locator('#password-input').click();
          await page.locator('#password-input').fill('supersecure');
          await page.getByRole('button', { name: 'Login' }).click();
         
          await page.locator('#email-input').fill('test@maddox123.ai');
          await page.getByRole('button', { name: 'Login' }).click();
          await page.getByRole('button', { name: '+' }).click();
          await page.getByRole('button', { name: '-' }).click();
          await page.getByRole('button', { name: 'Reset' }).click();
          await page.getByRole('button', { name: 'Logout' }).click();
        });


    






















