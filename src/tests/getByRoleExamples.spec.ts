import { Page,test,expect} from "@playwright/test";
import GooglePage from "../pages/GooglePage";


test.describe("getByRole examples",async()=>{

 test("getByRoleEx001 @smoke",async({page})=>{

    const gp=new GooglePage(page);
    await page.goto("https://www.google.com");
    gp.googleSearch("LInkedIn");


});
});