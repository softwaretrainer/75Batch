//Actual automation test scripts
import { test } from "@playwright/test";
import { general } from "../lib/General";

test('@SmokeTest-TC001',async ({ page }) => {
    //Test Steps
 let obj = new general(page);
 await obj.openApplication();
 await obj.login();
 await obj.logout();
});