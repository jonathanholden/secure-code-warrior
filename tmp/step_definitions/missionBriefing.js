Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const MissionBriefing_1 = require("../pages/MissionBriefing");
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
Given(/^I am on Mission Briefing$/, async function () {
    await expect(protractor_1.browser.getTitle()).to.eventually.equal("Secure Code Warrior");
});
Given(/^I Enter Warrior name (.*)$/, async function (name) {
    await protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(MissionBriefing_1.MissionBriefing.userNameBox), 20000, 'Failed to load Mission Briefing page');
    await MissionBriefing_1.MissionBriefing.userNameBox.sendKeys(name);
    await MissionBriefing_1.MissionBriefing.saveButton.click();
});
Given(/^I Enter Game Mode$/, async function () {
    await protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(MissionBriefing_1.MissionBriefing.enterGameMode), 20000, 'Failed to Enter Username');
    await MissionBriefing_1.MissionBriefing.enterGameMode.click();
});
