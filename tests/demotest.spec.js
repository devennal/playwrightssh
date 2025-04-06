import {test,expect} from '@playwright/test';

test('demotest',async ({page})=>{


await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

   await expect(page).toHaveTitle('nopCommerce demo store. Register')

   const logo= await page.locator("//img[@alt='nopCommerce demo store']")
    await expect(logo).toBeVisible()

     const inputbox=await page.locator("//input[@id='FirstName']")
     await expect(inputbox).toBeEnabled()

     const checkbox= await page.locator("//input[@id='gender-male']")
     checkbox.click();
     await expect(checkbox).toBeChecked();

     const regbutton= await page.locator('#register-button')
     await expect(regbutton).toHaveAttribute('type','submit')

   await expect (await page.locator("div[class='page-title'] h1")).toHaveText('Register')

   await expect (await page.locator("div[class='page-title'] h1")).toContainText('Reg')

 const emailbox=await page.locator('#Email')
 await emailbox.fill('devendranaidu306@gmail.com')
 await expect(emailbox).toHaveValue('devendranaidu306@gmail.com')


 


})


