const {test}=require("@playwright/test")
const {excuteSteps}=require("../utilites/actions")
const {sendmail} = require("../sendReportMail")
exports.ContactUs = class ContactUs{
constructor(test,page){
this.test=test;
this.page=page;
this.forBussiness=page.locator("//a[text()='For Business']");
this.contactUs=page.locator("(//button[text()='Contact Us'])[1]");
this.firstName=page.locator("//input[@name='firstName']");
this.lastName=page.locator("//input[@name='lastName']");
this.jobTitle=page.locator("//input[@name='jobTitle']");
this.companyName=page.locator("//input[@name='companyName']");
this.email=page.locator("//input[@name='email']");
this.messageBody=page.locator("//textarea[@name='message']");
this.captcha=page.locator("(//div[@role='presentation'])[1]");
this.submit=page.locator("//button[text()='Submit']");
}

clickOnForBusinessBtn = async()=>{
   await excuteSteps(
        this.test=test,
        this.forBussiness,
        "click",
        'Click on for business button'
    );
    }

clickOnContactUsBtn = async()=>{
   await excuteSteps(
        this.test=test,
        this.contactUs,
        "click",
        'Click on contact us button'
    );
    }

}
