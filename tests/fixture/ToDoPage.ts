import { Page } from "@playwright/test";

export class ToDoPage {
  readonly page: Page;

  /**
   *
   * @param page {import('@playwright/test).Page} page
   */

  constructor(page: Page) {
    this.page = page;
  }

  get input() {
    return '[class="new-todo"]';
  }
  get toDoItem() {
    return "todo-item";
  }

  async goto() {
    await this.page.goto("https://demo.playwright.dev/todomvc");
  }

  /**
   * 
   * @param {string} text any text for the input field 
   */
  async addTodo(text: string): Promise<void> {
    await this.page.locator(this.input).fill(text);
    await this.page.keyboard.press("Enter");
  }
  async remove(text: string): Promise<void> {
    const todo = this.page.getByTestId(this.toDoItem).filter({hasText: text})
    await todo.hover()
    await todo.getByLabel('Delete').click()

  }
  /**
   * 
   * @param {string} text  any text for the input field 
   */
  async removeAll(): Promise<void> {
   while(await this.page.getByTestId(this.toDoItem).count() > 0){
       await this.page.getByTestId(this.toDoItem).first().hover()
       await this.page.getByTestId(this.toDoItem).first().getByLabel('Delete').click()

   }

  }




}
