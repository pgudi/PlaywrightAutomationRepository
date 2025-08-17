const {test, expect} = require('@playwright/test')

test('First Playwright Test', async function display({page}){
    console.log("Running First Playwright Test using Traditional Function");
    
})

test('Second Playwright Test', async function({page}){
    console.log("running Second Playwright Test using anonymous Function");
    
})

test('Third Playwright Test', async ({page})=>{
    console.log("Running Third Playwright Test using Arrow Function");
    
})


