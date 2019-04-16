Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const LocateVulnerability_1 = require("../pages/LocateVulnerability");
const protractor_1 = require("protractor");
const IdentifySolution_1 = require("../pages/IdentifySolution");
cucumber_1.When(/^I View Solutions$/, async function () {
    await LocateVulnerability_1.LocateVulnerability.continueButton.click();
    await protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(IdentifySolution_1.IdentifySolutions.viewSolutionsButton), 10000, 'View Solutions Page not loaded');
    await IdentifySolution_1.IdentifySolutions.viewSolutionsButton.click();
    await protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(IdentifySolution_1.IdentifySolutions.acceptButton), 10000, 'Accept button not loaded');
});
cucumber_1.When(/^I choose Solution 3$/, async function () {
    await IdentifySolution_1.IdentifySolutions.selectDropDownOptionThree();
    await IdentifySolution_1.IdentifySolutions.acceptButton.click();
});
