import {BeforeAll, After, AfterAll, setDefaultTimeout} from 'cucumber';
import { browser } from 'protractor';
import { config } from '../config/protractor.conf';

setDefaultTimeout(300000);

BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.waitForAngularEnabled(false);

    await browser.get(config.baseUrl);
});

After(async function(scenario) {
    // if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    // }
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});
