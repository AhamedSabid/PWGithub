import { expect, test } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test("simple login test with self heal", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigatetoUrl();
  const homePage=await loginPage.fillCredentials(" ahamedsabid652@agentforce.com","Ahamed@123");
  page.close();
});