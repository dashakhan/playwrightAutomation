import { CheckBox } from './../../page_object/demoQA/CheckBox';
import { expect } from "@playwright/test";
import { test } from "./../../page_object/demoQA/checkBoxFixture";


test("checkox fixtr", async ({ page, checkBox }) => {

  await checkBox.checkAll();
  await expect(page.locator(checkBox.checkedBox).nth(0)).toBeChecked()


  //expect(await page.isChecked('[class="rct-icon rct-icon-check"]')).toBeTruthy()
 //await expect(page.getByRole('checkbox').first()).toBeChecked()
 //   await page.pause();
});

