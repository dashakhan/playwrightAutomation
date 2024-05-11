import {test as it} from '@playwright/test'

// it.describe('FORM PAGE', () => {
//     it.beforeAll(() =>{
//         console.log('BEFORE ALL')
//     })
//     it.beforeEach(() =>{
//         console.log('BEFORE EACH')
//     })
//     it.afterEach(()=>{
//         console.log('AFTER EACH')
//     })
//     it.afterAll(()=>{
//         console.log('AFTER ALL')
//     })

//     it('Test1', () =>{
//         console.log('TEST 1')
//     })

//     it('Test2', () =>{
//         console.log('TEST 2')
//     })
// })


it.describe('FORM PAGE TYPE', () => {
    it('fill all fields', async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo')
        await page.locator('#name').fill('Dasha')
        await page.locator('[class="w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"][type="email"]').pressSequentially('testExample@gmail.com', {delay: 100})
        //await page.pause()
        await page.locator('[placeholder="Password"]').fill('testpassword')
        //await page.pause()
        await page.locator('[for="companyname"]~input[placeholder="Company"]').fill('LLC Happy')
        await page.selectOption('select[name="country"]', {label: 'United States'} )
        await page.locator('label:has-text("City*") ~input#inputCity').fill('Orlando')
        await page.getByPlaceholder('Address 1').fill('Orlando')
        await page.getByRole('textbox', {name: "Address 2"}).fill('Orlando street')
        await page.getByRole('textbox', {name: "Zip code"}).fill('11204')
    })
});




