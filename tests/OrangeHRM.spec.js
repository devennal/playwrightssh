const {test,expect}=require('@playwright/test');

test('OrangeHRM',async ({page}) =>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');


// verify logo by using built in locator which is provided by playwright//

 const logo=await page.getByAltText('company-branding')
    
await expect (logo).toBeVisible();


 await page.getByPlaceholder('Username').fill("Admin")
 await page.getByPlaceholder('Password').fill("admin123")

 await page.getByRole('button',{type:'submit'}).click()



 const  name= await page.locator("//p[@class='oxd-userdropdown-name']").textContent()

 await expect(await page.getByText(name)).toBeVisible()


 await page.locator("//span[normalize-space()='Admin']").click()


 await page.locator("//span[@class='oxd-topbar-body-nav-tab-item' and contains(text(), 'Job')]").click()

 await page.locator("//a[@class='oxd-topbar-body-nav-tab-link' and contains(text(), 'Job Titles')]").click()

  await page.waitForTimeout(5000);


})