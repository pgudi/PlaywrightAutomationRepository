const {test, expect} = require('@playwright/test')

test('Navigate W3School application URL', async({page})=>{
    await page.goto('https://www.w3schools.com/')

    const title=await page.title()
    console.log("title :"+title);

    const url = await page.url()
    console.log("Application URL :"+url);
    
    await expect(page).toHaveTitle('W3Schools Online Web Tutorials')
    await expect(page).toHaveURL('https://www.w3schools.com/')
    
})