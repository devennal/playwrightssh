import { test, expect } from '@playwright/test';

test('Loginpage', async ({ page }) => { 

    
    await page.goto("http://localhost:3000/")
    await page.locator("#email-input").fill("test@maddox123.ai");
   await page.locator("#password-input").fill("supersecure");
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL('http://localhost:3000/');
   await page.locator("//button[normalize-space()='Logout']").click();
   
    await page.goto("http://localhost:3000/")
    await page.waitForTimeout(3000);
    await page.locator("#email-input").fill("test@maddox.ai");
    await page.locator("#password-input").fill("supersecure");
  
    await page.locator("button[type='submit']").click();
    
    await expect(page.getByText('Invalid email or password')).toBeVisible();
    






     await page.waitForTimeout(3000); // Waits for 3 seconds
     await page.locator("//button[normalize-space()='+']").click();

   await page.waitForTimeout(3000); // Waits for 3 seconds
    await page.locator("//button[normalize-space()='-']").click();

    //await page.locator("//button[normalize-space()='Reset']").click();
    //await page.waitForTimeout(3000); // Waits for 3 seconds
    //await page.locator("//button[normalize-space()='Logout']").click();
    //await page.waitForTimeout(3000); // Waits for 3 seconds
    //await expect(page).toHaveURL('http://localhost:3000/');








})