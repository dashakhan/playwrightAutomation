import { CheckBox } from './../../page_object/demoQA/CheckBox';
import { expect } from "@playwright/test";
import { test } from "./../../page_object/demoQA/checkBoxFixture";


test("checkox fixtr", async ({ page, checkBox }) => {
  await checkBox.checkAll();
  
  //await expect(page.getByRole('checkbox').first())
  await expect(page.locator(checkBox.checkedBox)).toBeChecked()


//   await page.pause();
});

