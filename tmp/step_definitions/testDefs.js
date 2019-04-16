Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
Given(/^I am on search page$/, async () => {
    // if (text === "google") {
    await expect(protractor_1.browser.getTitle()).to.eventually.equal("Secure Code Warrior");
    // } else if (text === "cucumber") {
    //     await expect(browser.getTitle()).to.eventually.equal(text + " - Google Search");
    // } else if (text === "protractor") {
    //     await expect(browser.getTitle()).to.eventually.equal(text + " - Google Search");
    // }
});
