import {browser, by, element} from "protractor";

export namespace IdentifySolutions {
    export const viewSolutionsButton = element.all(by.buttonText('View Solutions')).first(),
        acceptButton = element.all(by.buttonText('Accept')).first(),
        solutionDropDown = element.all(by.className('select2-arrow')).last(),
        solutionThree = element.all(by.cssContainingText('.select2-result-label', 'Solution 3')).last();

    export async function selectDropDownOptionThree() {
        await solutionDropDown.click();

        //TODO (better solution) - enforced wait to ensure dropdown is visible to the browser
        await browser.sleep(1000);

        await solutionThree.click();
        //TODO (better solution) - enforced wait to ensure dropdown selection is made
        await browser.sleep(1000);
    }
}
