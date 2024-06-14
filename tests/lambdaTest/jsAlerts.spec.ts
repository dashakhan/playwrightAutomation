import { test, expect } from "@playwright/test";


test.describe('ALERTS', () =>{

    // let page
    
    // test.beforeAll(async ({ browser })=>{
    //     page = await browser.newPage();
    //     await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
    // })
    
    

    test('JavaScript ALerts', async({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
        page.on('dialog', el => el.accept())
        page.pause()
        await page.locator('[class="btn btn-dark my-30 mx-10 hover:bg-lambda-900 hover:border-lambda-900"]').click()
        page.pause()
    })


    test('Confirm box accept', async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
        page.on('dialog', el => el.accept())
        page.pause()
        await page.getByRole('button', {name: 'Click Me'}).nth(1).click()
        page.pause()
        await expect(page.locator('[id="confirm-demo"]')).toContainText('You pressed OK!')
        page.pause()
    })

    test('Confirm box cancel', async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
        page.on('dialog', el => el.dismiss())
        page.pause()
        await page.getByRole('button', {name: 'Click Me'}).nth(1).click()
        page.pause()
        await expect(page.locator('[id="confirm-demo"]')).toContainText('You pressed Cancel!')
    })

    test('prompt box accept', async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
        page.on('dialog', el => el.accept('Dasha'))
        await page.getByRole('button', {name: 'Click Me'}).nth(2).click()
        page.pause()
        await expect(page.locator('[id="prompt-demo"]')).toContainText("You have entered 'Dasha' !")
    })


    test('prompt box cancel', async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
        page.on('dialog', el => el.dismiss())
        await page.getByRole('button', {name: 'Click Me'}).nth(2).click()
        
    })
})