import {Page,test} from "@playwright/test";

test('Select dynamic dropdown demo', async ({ page }) => {
await page.goto('https://www.abhibus.com/');
const departfrom = page.getByPlaceholder("Leaving From");
await departfrom.clear();
await departfrom. pressSequentially( 'Kerala', {delay:1000});
await page.locator(".source-stations-panel ")
.getByText("Kerala")
.click()
});