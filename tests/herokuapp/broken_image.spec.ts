import {test as it} from '@playwright/test'

it('testing broken images', async({page}) =>{

    await page.goto('https://the-internet.herokuapp.com/broken_images')
    await page.route('**/*', route =>{
        route.continue().catch(() => {})
    })

    const image = await page.evaluate(async() =>{
        const brokenImages = Array.from(document.querySelectorAll('img'))
        const arrOfImages = []
        for(const img of brokenImages){
            const response = await fetch(img.src).catch(() => null)
            if(!response || response.status !== 200 || img.naturalHeight === 0 || img.naturalHeight === 0){
                arrOfImages.push(img.src)
            }
        }
        return arrOfImages
       // throw new Error()
    })
    console.log(image.length)
    for(const src of image){
        console.log(src)
    }
})