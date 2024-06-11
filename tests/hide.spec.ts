import { test, expect } from "@playwright/test";


test.describe("HIDDEN ELEMENTS ", () => {
  test("hidden el test", async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

    await expect(page.locator('[id="displayed-text"]')).toBeVisible()
    await page.locator('[id="hide-textbox"]').click()
    await expect(page.locator('[id="displayed-text"]')).toBeHidden()


  });
});
