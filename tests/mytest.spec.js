import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'username' }).click();
  await page.getByRole('textbox', { name: 'username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('option', { name: 'ESS' }).click();
  
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByText('Timothy Amiano').click();
  
  await page.getByRole('option', { name: 'Enabled' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('row', { name: ' chipa ESS Timothy Amiano' }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Save' }).click();
});