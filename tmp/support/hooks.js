Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const protractor_conf_1 = require("../config/protractor.conf");
cucumber_1.setDefaultTimeout(300000);
cucumber_1.BeforeAll({ timeout: 100 * 1000 }, async () => {
    await protractor_1.browser.waitForAngularEnabled(false);
    await protractor_1.browser.get(protractor_conf_1.config.baseUrl);
});
cucumber_1.After(async function (scenario) {
    // if (scenario.result.status === Status.FAILED) {
    // screenShot is a base-64 encoded PNG
    const screenShot = await protractor_1.browser.takeScreenshot();
    this.attach(screenShot, "image/png");
    // }
});
cucumber_1.AfterAll({ timeout: 100 * 1000 }, async () => {
    await protractor_1.browser.quit();
});
