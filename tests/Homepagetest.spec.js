const {test,expect} = require('@playwright/test');

test('Home Page', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    // Corrected method name
    const pageTitle = await page.title();
    console.log('Page Title is:', pageTitle);

    // Expect correct title
    await expect.soft(page).toHaveTitle('STORE123');

    // Corrected variable name and typo
    const pageUrl = page.url();
    console.log('Page URL:', pageUrl);

    // Expect correct URL
    await expect(page).toHaveURL('https://www.demoblaze.com/');


    await page.waitForTimeout(5000);
  })