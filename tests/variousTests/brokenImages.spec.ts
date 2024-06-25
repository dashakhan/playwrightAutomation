import { test as it, expect } from "@playwright/test";

it.describe("broken image and upload for lambdatest", () => {
  it("broken image", async ({ page }) => {
    await page.goto(
      "https://www.lambdatest.com/selenium-playground/broken-image"
    );
    await page.route("**/*", (route) => {
      route.continue().catch(() => {});
    });
    const image = await page.evaluate(async () => {
      const allImages = Array.from(document.querySelectorAll("img"));
      const brokenImg : string[] = [];

      for (const img of allImages) {
        await fetch(img.src).catch(() => null);
        if (img.src.includes('.jpg') && (img.naturalHeight === 0 || img.naturalHeight === 0 )) {
          brokenImg.push(img.src);
        }
      }
      return brokenImg;
    });
    console.log(image.length)
    for(const el of image){
      console.log(el)
    }
  });


  it('upload image', async ({page}) =>{
    await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo')
    await page.setInputFiles('[id="file"]', 'upload_data/D1.jpeg')
    //await page.click('[id="file"]')
    await expect(page.locator('[id="error"]')).toContainText('File Successfully Uploaded')
  })

});


it.describe('broken image and upload for demoqa', () =>{
  it('broken image', async ({page}) => {
    await page.goto('https://demoqa.com/broken#google_vignette')


    const image = await page.evaluate(async () =>{
    const allImages = Array.from(document.querySelectorAll('img'))
    const brokenImg = []

    for(const img of allImages){
      await fetch(img.src).catch(() => null)
      if(img.naturalHeight === 0 || img.naturalHeight === 0){
        brokenImg.push(img.src)
      }
    }
    return brokenImg
  }) 
  console.log(image.length)
  for(const el of image){
    console.log(el)
  }
  })

it.describe.only('broken image and upload for practice', () =>{
  it('broken image', async ({page}) => { 
    await page.goto('https://practice.expandtesting.com/broken-images')
    const image = await page.evaluate(async () =>{
    const allImages = Array.from(document.querySelectorAll('img'))
    const brokenImg = []
    for(const img of allImages){
      const resp = await fetch(img.src).catch(() => null)
      if(resp !== 200 && (img.naturalHeight === 0 || img.naturalHeight === 0)){
        brokenImg.push(img.src)
      }
    }
    return brokenImg
    })
    console.log(image.length)
    for(const el of image){
      console.log(el)
    }
  })

})
})
