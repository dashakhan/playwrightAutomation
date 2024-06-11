import { test } from "@playwright/test";

test("intercept", async ({ page }) => {
    await page.route('**\/*.{png, jpg, jpeg, svg}', (body) => {
        //console.log(body, 'request')
    if(body.request().resourceType() === 'image'){
        body.abort()
    } else {
        body.continue()
    }
    })
    await page.pause()
    await page.goto('https://coding.pasv.us/')
    await page.pause()
});
