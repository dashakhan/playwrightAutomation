import {test as it} from '@playwright/test'

it.describe('FORM LAYOUTS', ()=>{
    it('Inline form', async ({page}) => {
        await page.goto('http://localhost:4200/pages/forms/layouts')
        await page.locator('[placeholder="Jane Doe"]').fill('Dasha')
        await page.locator('[placeholder="Jane Doe"] ~ input[placeholder="Email"]').fill('test@gmail.com')
        



    })
})
