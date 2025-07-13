import {expect} from "@playwright/test";
import {test} from "@playwright/test";  

test('PopUp Windows @smoke', async ({context}) => {
//const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto('https://vinothqaacademy.com/multiple-windows/');
    await page.waitForTimeout(5000);

     const[newPage]=await Promise.all([
     context.waitForEvent("page"),
     page.locator('//button[text()="New Browser Tab"]').click(),
     page.waitForTimeout(5000)
    ])

    expect(newPage.locator('button#addBtn').isVisible());
    await context.close();
    await newPage.close();
    await page.close();
});