import { test, expect } from "@playwright/test";


test.describe("POP UP ELEMENT ", () => {
  test("popup window accept test", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
     page.on('dialog', dialog => dialog.accept())
     page.pause()
    await page.locator('[id="confirmbtn"]').click()
    page.pause()

  });

    test("popup window dismiss test", async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
         page.on('dialog', el => el.dismiss())
         page.pause()
        await page.locator('[id="confirmbtn"]').click()
        page.pause()
    
    });
});
