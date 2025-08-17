const {test, expect} = require('@playwright/test')

test('first Assertion Test', async({page})=>{
    expect(125).toBe(125)
})

test('second Assertion Test', async({page})=>{
    expect(10.175).toBe(10.175)
})

test('third Assertion Test', async({page})=>{
    expect(250).toBeGreaterThan(150)
})

test('fourth Assertion Test', async({page})=>{
    expect('S G Software Testing').toContain('Software')
})

test('fifth Assertion Test', async({page})=>{
    expect('S G Software Testing'.includes('Software')).toBeTruthy()
})

