Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const ChallengeComplete_1 = require("../pages/ChallengeComplete");
const protractor_1 = require("protractor");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
cucumber_1.Then(/^Challenge Complete$/, async function () {
    await protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(ChallengeComplete_1.ChallengeComplete.challengeCompletedText), 10000, 'Challenge Completed Text not present');
    await expect(ChallengeComplete_1.ChallengeComplete.challengeCompletedText.getText()).to.eventually.equal("Stage Completed");
});
