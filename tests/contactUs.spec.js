const { test, expect } = require("@playwright/test");
const sections = require("../pageObjects/pageIndex");
const testData = require("../test_Data/testData.json");
const mail = require("../sendReportMail");

require("dotenv").config();
test.only("Verifying contact us page",async({page})=>{
    const contactUs = new sections.ContactUs(test,page);
    const loginPage=new sections.LoginPage(test,page);
    await loginPage.launchingApplication([process.env.BASE_URL]);
    await loginPage.logInWithValidCredentials(
        [process.env.USER_EMAILID],
        [process.env.PASSWORD]
    );
    await contactUs.clickOnForBusinessBtn();
    await contactUs.clickOnContactUsBtn();
    
});


