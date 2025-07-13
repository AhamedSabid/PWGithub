import {Page} from "@playwright/test";

export default class GooglePage{

    //private readonly const serachArea="";

    constructor(private page:Page){}

    async googleSearch(textis : string){

        await this.page.locator("textarea[name='q']").fill(textis);
    }
    


}