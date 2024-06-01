// import { test, expect } from "@playwright/test"


// test.beforeEach(async ({page}) => {
//     await page.goto('https://demoqa.com/login')
// })

// test('authentication through UI', async ({page, browserName}) =>{
//     const name = page.locator('#submit');
//     await expect(name).toHaveText('Log out')
//     await page.screenshot({path: `screenShot/${browserName}.png`})

// })

import { test, expect } from "@playwright/test"


test.beforeEach(async ({page}) => {
    await page.goto('https://coding.pasv.us/profile/61003da5224eb8003a068f95')
})

test('authentication through UI', async ({page, browserName}) =>{
    await page.locator('[data-icon="down"]').nth(0).click();
    const name = page.locator('[data-qa="logout"]');
    await expect(name).toHaveText('Logout')
    await page.screenshot({path: `screenShot/${browserName}.png`})

})














