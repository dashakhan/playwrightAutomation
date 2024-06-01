// import { test as setup, expect } from '@playwright/test';

// const authFile = './.auth/user.json';


// setup('authenticate', async ({ page }) => {
//   // Perform authentication steps. Replace these actions with your own.
//   await page.goto('https://demoqa.com/login');
//   await page.getByPlaceholder('Username').fill('Dk');
//   await page.getByPlaceholder('Password').fill('Test123!');
//   await page.getByRole('button', { name: 'Login' }).click();
//   // Wait until the page receives the cookies.
//   //
//   // Sometimes login flow sets cookies in the process of several redirects.
//   // Wait for the final URL to ensure that the cookies are actually set.
//   await page.waitForURL('https://demoqa.com/profile');
//   await page.screenshot({path: 'scren/authenticate.png'})
//   // Alternatively, you can wait until the page reaches a state where all cookies are set.
//   await expect(page.locator('#userName-value')).toHaveText('Dk');

//   // End of authentication steps.

//   await page.context().storageState({ path: authFile });
// });

import { test as setup, expect } from '@playwright/test';

const authFile = './.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://coding.pasv.us/user/login');
  await page.getByPlaceholder('Email').fill('keshonti2016@gmail.com');
  await page.getByPlaceholder('password').fill('11725ECOYOTE!');
  await page.locator('[type="submit"]').click();
  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://coding.pasv.us/profile/61003da5224eb8003a068f95');
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
  await page.locator('[data-icon="down"]').nth(0).click();
  await expect(page.locator('[href="/profile/61003da5224eb8003a068f95"]', {hasText: "Profile"})).toBeVisible();

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});