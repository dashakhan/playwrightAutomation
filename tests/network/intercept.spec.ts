import { test } from "@playwright/test";

test("intercept", async ({ page }) => {
    await page.route('**\/*.{png,jpg,jpeg,svg}', (body) => {
        console.log(body)
    if(body.request().resourceType() === 'image'){
        console.log('++++++')
        body.abort()
        
    } else {
        console.log('--------0')
        body.continue()
    }
    })
    await page.pause()
    await page.goto('https://www.amazon.com/')
    await page.pause()
});
