import {Then} from "cucumber";
import {ChallengeComplete} from "../pages/ChallengeComplete";
import {browser, ExpectedConditions} from "protractor";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Then(/^Challenge Complete$/, async function() {
    await browser.wait(ExpectedConditions.presenceOf(ChallengeComplete.challengeCompletedText), 10000, 'Challenge Completed Text not present');
    await expect(ChallengeComplete.challengeCompletedText.getText()).to.eventually.equal("Stage Completed");
});

