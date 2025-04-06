import { test, expect } from '@playwright/test';

test('handle inputcheckbox', async ({ page }) => { 


await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

// input checkbox-handles//
  await expect(await page.locator("//input[@id='FirstName']")).toBeVisible();
  await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty();
  await expect (await page.locator("//input[@id='FirstName']")).toBeEditable();
  await expect(await page.locator("//input[@id='FirstName']")).toBeEnabled();



   await page.locator("//input[@id='FirstName']").fill("Devendra")

   //page.fill("//input[@id='FirstName']",'Nallapothu');  -- approach-2//

// radio button handle//
   await (page.locator("//input[@id='gender-male']")).check();
 await expect (await page.locator("//input[@id='gender-male']")).toBeChecked();
 await expect (await page.locator("//input[@id='gender-male']").isChecked()).toBeTruthy();


 await expect (await page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy();



 await page.waitForTimeout(3000);
})