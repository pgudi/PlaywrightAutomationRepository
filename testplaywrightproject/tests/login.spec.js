const {test, expect} = require('@playwright/test')

test('Login into OrangeHrm Application', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    await expect(page).toHaveTitle('OrangeHRM')

    await page.locator("//input[@placeholder='Username']").fill("Admin")

    await page.locator("input[placeholder='Password']").fill("admin123")

    await page.locator("//button[normalize-space()='Login']").click()

    await page.waitForTimeout(4000)
})