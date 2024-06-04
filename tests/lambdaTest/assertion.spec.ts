import { test, expect } from "@playwright/test";

//import { log } from "console";

test.describe("ASSERTION", () => {

  test.use({viewport: {width:500, height: 500}})
  //test.use({devices: ['iphone14']})
  //test.use({viewport: {iphone}})

  test("assertions", async ({ page }) => {
   
    await page.goto("https://www.lambdatest.com/");

    const title = await page.title();
    console.log(title);
    expect.soft(title).toContain("LambdaTest ++++++++++++");

    const header = page.locator("h1");
    expect(await header.textContent()).toContain("Next-Generation Mobile Apps and Cross Browser ");
    expect(await header.textContent()).toBe("Next-Generation Mobile Apps and Cross Browser Testing Cloud");

    await expect(page.locator('img[src$="Vimeo.svg"]')).toHaveAttribute("alt", "vimeo", { timeout: 1000 });



  });
});
