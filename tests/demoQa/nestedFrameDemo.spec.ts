import { test, expect } from "@playwright/test";


test("nested Frames", async ({ page }) => {
    await page.goto("https://demoqa.com/nestedframes");
    const parentFrame = page.frameLocator('[id="frame1"]')
    //.getByText('Parent frame');not necsesery
    const childFrame = parentFrame.frameLocator("iframe")
    .locator('p')
    await expect(childFrame).toContainText('Child Iframe');
  });


  
//OR
//  test('nested Frames', async({page}) =>{
//     await page.goto('https://demoqa.com/nestedframes')
//     const parentFrame = await page.frame({ url: /\/sampleiframe/ });
//     const childFrame = await parentFrame.frameLocator('iframe');
//     await expect(childFrame.locator('p')).toHaveText('Child Iframe');
// })
