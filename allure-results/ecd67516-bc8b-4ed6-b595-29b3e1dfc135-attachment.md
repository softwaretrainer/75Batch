# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TC001.spec.ts >> @SmokeTest-TC001
- Location: tests\TC001.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://sureshitacademy.in/hrms/login.php", waiting until "load"

```

# Test source

```ts
  1  | //All Re-usable functions / methods related to the entire project
  2  | import { global } from "./Global";
  3  | export class general extends global {
  4  |   //*************Reusable Functions / Methods ********************* */
  5  |   //user-defined methods
  6  |   //Open Application
  7  |   async openApplication() {
> 8  |    await this.page.goto(this.url); 
     |                    ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  9  |    console.log("Application opened ");
  10 |   }
  11 |   //login to Application
  12 |     async login() {
  13 |     await this.page.locator(this.textbox_loginname).fill(this.username);
  14 |     await this.page.locator(this.textbox_password).fill(this.password);
  15 |     await this.page.locator(this.button_login).click();
  16 |     console.log("Login to Application");    
  17 |     }
  18 |     
  19 |   //logout from Application  
  20 |     async logout() {
  21 |     await this.page.locator(this.link_logout).click();
  22 |     console.log("Logout from Application");    
  23 |     }
  24 |     async waitStmt(){
  25 |      await this.page.waitForTimeout(3000);
  26 |      console.log("Wait Statement executed for 3 seconds");
  27 |     }
  28 |     async addNewEmployee(){
  29 |       let frame = this.page.frameLocator(this.frame_empInfo);
  30 |       await frame.locator(this.button_add).click();
  31 |       await frame.locator(this.textbox_empfirstname).fill(this.employeefirstname);
  32 |       await frame.locator(this.textbox_emplastname).fill(this.employeelastname);
  33 |       await frame.locator(this.button_save).click();
  34 |       console.log("New Employee Added");
  35 |     }
  36 | }
```