import {When} from "cucumber";
import {LocateVulnerability} from "../pages/LocateVulnerability";
import {browser, ExpectedConditions} from "protractor";
import {IdentifySolutions} from "../pages/IdentifySolution";

When(/^I View Solutions$/, async function () {
    await LocateVulnerability.continueButton.click();
    await browser.wait(ExpectedConditions.elementToBeClickable(IdentifySolutions.viewSolutionsButton), 10000, 'View Solutions Page not loaded');
    await IdentifySolutions.viewSolutionsButton.click();
    await browser.wait(ExpectedConditions.elementToBeClickable(IdentifySolutions.acceptButton), 10000, 'Accept button not loaded');
});

When(/^I choose Solution 3$/, async function() {
    await IdentifySolutions.selectDropDownOptionThree();
    await IdentifySolutions.acceptButton.click();
});
