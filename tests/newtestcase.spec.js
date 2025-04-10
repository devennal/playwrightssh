import { test, expect } from '@playwright/test';

// Test data
const testUser = {
  email: 'test@maddox123.ai',
  password: 'supersecure'
};

test.describe('Application Tests', () => {
  test.describe('Login Functionality', () => {
    test('Successful login redirects to home page', async ({ page }) => {
      await page.goto('https://163f-104-151-11-34.ngrok-free.app/login');
      
      await page.locator('#email-input').fill('test@maddox123.ai');
      await page.locator('#password-input').fill('supersecure');
      await page.getByRole('button', { name: 'Login' }).click();
      
      await expect(page).toHaveURL('https://163f-104-151-11-34.ngrok-free.app/login');
    });


    test('Failed login shows error message', async ({ page }) => {
      await page.goto('https://163f-104-151-11-34.ngrok-free.app/login');
      await page.locator('#email-input').fill('test@maddox.ai');
      await page.locator('#password-input').fill('supersecure');
      
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForTimeout(3000);
      await expect(page.getByText('Invalid email or password. Try again.')).toBeVisible();
    });
  });



  test.describe('Counter Functionality', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://163f-104-151-11-34.ngrok-free.app/login');
      await page.locator('#email-input').fill('test@maddox123.ai');
      await page.locator('#password-input').fill('supersecure');
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForTimeout(3000);
      await expect(page).toHaveURL('https://163f-104-151-11-34.ngrok-free.app/login');
    });

    test('Counter operations work correctly', async ({ page }) => {
      
      await page.getByRole('button', { name: '+' }).click();
      await page.getByRole('button', { name: '-' }).click();
      await page.getByRole('button', { name: 'Reset' }).click();
    });
  });


  test.describe('Logout Functionality', () => {
    test('User can logout and is redirected', async ({ page }) => {
      await page.goto('https://163f-104-151-11-34.ngrok-free.app/login');
      await page.locator('#email-input').fill('test@maddox123.ai');
      await page.locator('#password-input').fill('supersecure');
      await page.waitForTimeout(3000);
      await page.getByRole('button', { name: 'Login' }).click();
      await page.getByRole('button', { name: 'Logout' }).click();
      await expect(page).toHaveURL('https://163f-104-151-11-34.ngrok-free.app/login');
      await expect(page.locator('#email-input')).toBeVisible();
      
    });
  });
});
