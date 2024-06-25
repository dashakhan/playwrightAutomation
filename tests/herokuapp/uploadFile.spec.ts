import {test as it, expect} from '@playwright/test'

it('upload single file', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/upload')

    await page.setInputFiles('[id="file-upload"]', 'upload_data/1.png')
    await page.click('#file-submit')
    await expect(page.locator('#uploaded-files')).toContainText('1.png')
})

it('upload mult file', async ({page}) =>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/')

    await page.setInputFiles('input[type="file"]', ['upload_data/D1.jpeg','upload_data/D2.jpeg','upload_data/D3.jpeg' ])
    await expect(page.locator('p.name')).toContainText(['D1.jpeg', 'D2.jpeg', 'D3.jpeg'])

})










