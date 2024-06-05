import { Page } from "@playwright/test";

export class CheckBox {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  get expandToggle() {
    return '[class="rct-icon rct-icon-expand-close"]';
  }
  get subDirectoryCBox() {
    return '[class="rct-icon rct-icon-uncheck"]';
  }
  get checkedBox(){
      return '[class="rct-icon rct-icon-check"]'
  }

  async goto() {
    await this.page.goto("https://demoqa.com/checkbox");
  }

  async expandOptions(): Promise<void> {
    while ((await this.page.locator(this.expandToggle).count()) > 0) {
        await this.page.locator(this.expandToggle).first().click()
    }
  }

  async checkAll(){
    await this.page.locator(this.subDirectoryCBox)
    .first()
    .click()
    //.nth(0)
    //.check()
    // await this.page.locator('input[type=checkbox]').first().check()
  }

  }
