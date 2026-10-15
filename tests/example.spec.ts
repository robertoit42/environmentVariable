import { test, expect } from '@playwright/test';


test('Login', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Sign in' }).click()
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.TEST_USER_EMAIL!)
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.TEST_USER_PASSWORD!)


})
