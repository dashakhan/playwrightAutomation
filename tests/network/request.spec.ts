import { test } from "@playwright/test";

test(" request failed ", async ({ page }) => {
    await page.route('**\/*.{png,jpg,jpeg,svg}', (body) => {
        //console.log(body)
    if(body.request().resourceType() === 'image'){
        body.abort()
    } else {
        body.continue()
    }
    })
page.on("requestfailed", async (req) =>{
    console.log(`error: ${req.url()}`)
})
    await page.pause()    
    await page.goto('https://demoqa.com')
    await page.pause()

});