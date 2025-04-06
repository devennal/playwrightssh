const {test,expect} = require('@playwright/test');

test('locators', async ({ page }) => {

 await page.goto('https://www.demoblaze.com/index.html')

 await page.locator("#login2").click();

 await page.locator("//input[@id='loginusername']").fill("devennal");
 await page.locator("//input[@id='loginpassword']").fill("Deva@306")

page.waitForSelector("//button[normalize-space()='Log in']")

    await page.click("//button[normalize-space()='Log in']")

 const logbutton = await page.locator("//a[@id='logout2']")
    await expect(logbutton).toBeVisible();

})