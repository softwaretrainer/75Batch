//All Re-usable functions / methods related to the entire project
import { global } from "./Global";
export class general extends global {
  //*************Reusable Functions / Methods ********************* */
  //user-defined methods
  //Open Application
  async openApplication() {
   await this.page.goto(this.url); 
   console.log("Application opened ");
  }
  //login to Application
    async login() {
    await this.page.locator(this.textbox_loginname).fill(this.username);
    await this.page.locator(this.textbox_password).fill(this.password);
    await this.page.locator(this.button_login).click();
    console.log("Login to Application");    
    }
    
  //logout from Application  
    async logout() {
    await this.page.locator(this.link_logout).click();
    console.log("Logout from Application");    
    }
    async waitStmt(){
     await this.page.waitForTimeout(3000);
     console.log("Wait Statement executed for 3 seconds");
    }
    async addNewEmployee(){
      let frame = this.page.frameLocator(this.frame_empInfo);
      await frame.locator(this.button_add).click();
      await frame.locator(this.textbox_empfirstname).fill(this.employeefirstname);
      await frame.locator(this.textbox_emplastname).fill(this.employeelastname);
      await frame.locator(this.button_save).click();
      console.log("New Employee Added");
    }
}