import { test as base } from "@playwright/test";
import { ToDoPage } from "./ToDoPage";
export {expect } from '@playwright/test'

type Fixture = {
  todoPage: ToDoPage;
};

export const test = base.extend<Fixture>({
  todoPage: async ({ page }, use) => {
    const todoPage = new ToDoPage(page);
    await todoPage.goto();
    await todoPage.addTodo("Test Todo");
    await todoPage.addTodo("Test Todo2");
    await todoPage.addTodo("Test Todo3");
    await use(todoPage);
    await todoPage.removeAll();
  },
});
