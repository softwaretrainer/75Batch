import {test} from "@playwright/test";
import {general} from "../lib/General";

test('@RegressionTest-TC002',async ({ page }) => {
    //Test Steps
let obj = new general(page);
await obj.openApplication();
await obj.waitStmt();
await obj.login();
await obj.waitStmt();
await obj.addNewEmployee();
await obj.waitStmt();
await obj.logout();
await obj.waitStmt();

});