import {Page,expect} from "@playwright/test";

export default class HomePage{

    private readonly serviceTitleLocator = "Service";
    private readonly serviceTitleOther = "span[title='Service']";

    constructor ( private page : Page){

    }

    async expectServiceTitleToBeVisible() {
    await expect(this.page.getByTitle(this.serviceTitleLocator)).toBeVisible({
      timeout: 15000,
    }).catch((error) => {
      console.error(`Error clicking login button: ${error}`);
      throw error; // rethrow the error if needed
    });

    }

     async expectServiveTitle() {
    await expect(this.page.locator(this.serviceTitleLocator)).toBeVisible({
      timeout: 15000,
    }).catch((error) => {
      console.error(`Error clicking login button: ${error}`);
      throw error; // rethrow the error if needed
    });

    }
}