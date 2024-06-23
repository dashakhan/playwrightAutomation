import {test as it, expect} from '@playwright/test'

it.only('upload single file', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/upload')

    await page.setInputFiles('[id="file-upload"]', 'upload_data/1.png')
    await page.click('#file-submit')
    await expect(page.locator('#uploaded-files')).toContainText('1.png')
})

it('upload mult file', async ({page}) =>{
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/')

    await page.setInputFiles('input[type="file"]', ['upload_data/1.png','upload_data/2.PNG','upload_data/3.png' ])
    await expect(page.locator('p.name')).toContainText('1.png')
    await expect(page.locator('p.name')).toContainText('2.PNG')
    await expect(page.locator('p.name')).toContainText('3.png')
})










