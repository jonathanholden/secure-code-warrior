import {browser, ExpectedConditions} from "protractor";
import {MissionBriefing} from "../pages/MissionBriefing";
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

Given(/^I am on Mission Briefing$/, async function() {
        await expect(browser.getTitle()).to.eventually.equal("Secure Code Warrior");
});

Given(/^I Enter Warrior name (.*)$/, async function(name: string) {
        await browser.wait(ExpectedConditions.elementToBeClickable(MissionBriefing.userNameBox), 20000, 'Failed to load Mission Briefing page');

        await MissionBriefing.userNameBox.sendKeys(name);
        await MissionBriefing.saveButton.click();
});

Given(/^I Enter Game Mode$/, async function() {
        await browser.wait(ExpectedConditions.elementToBeClickable(MissionBriefing.enterGameMode), 20000, 'Failed to Enter Username');

        await MissionBriefing.enterGameMode.click();
});
