import {test,expect} from '@playwright/test'

test('checkboxes',async ({page}) => {

await page.goto("https://www.qa-practice.com/elements/checkbox/single_checkbox")

// single checkbox//
   // await page.locator("//input[@id='id_checkbox_0']").check()

 
    await page.locator("//a[normalize-space()='Checkboxes']").click
// multiple checkbox//

  const checkboxlocator=[ "//input[@id='id_checkboxes_0'] " , "//input[@id='id_checkboxes_2']" ];

  for(const locator of checkboxlocator )
  {
    if(await page.locator(locator).isChecked())
    {
        await page.locator(locator).uncheck();
    }
     
  }

  await page.waitForTimeout(3000)
// 

})