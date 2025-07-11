import { Page, expect } from "@playwright/test";
import  HomePage  from "./HomePage";

export default class LoginPage{

 private loginUsernameInput = "#username";
 private loginPwdInput="#password";
 private loginLoginBtn="#Login";

 constructor(private page:Page){
 }

 async navigatetoUrl(){
    await this.page.goto("/");
 }

 async fillCredentials(username :string, pwd:string){

    await this.page.locator(this.loginUsernameInput).fill(username);
    await this.page.locator(this.loginPwdInput).fill(pwd);
     await this.page
      .locator(this.loginLoginBtn)
      .click()
      .catch((error) => {
        console.error(`Error clicking login button: ${error}`);
        throw error; // rethrow the error if needed
      });

    const  homepage=new HomePage(this.page);
    return homepage;
}
}