import {test} from "@playwright/test";
import regsterData from "../data/registerData.json";



  test("should register a new user", async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.getByPlaceholder("First Name").fill(regsterData.firstName);
    await page.getByPlaceholder("Last Name").fill(regsterData.lastName);
    await page.locator("textarea[ng-model='Adress']").fill(regsterData.address);
    await page.locator("//input[@type='email']").fill(regsterData.email);
    await page.locator("input[ng-model='Phone']").fill(regsterData.phone);
    await page.locator("input[value='Male']").check();
    await page.locator("#msdd").click();
    await page.locator("//a[text()='Arabic']").click();
    await page.locator("#Skills").selectOption(regsterData.skills);
    await page.close();

  });


 
