Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var IdentifySolutions;
(function (IdentifySolutions) {
    IdentifySolutions.viewSolutionsButton = protractor_1.element.all(protractor_1.by.buttonText('View Solutions')).first(), IdentifySolutions.acceptButton = protractor_1.element.all(protractor_1.by.buttonText('Accept')).first(), IdentifySolutions.solutionDropDown = protractor_1.element.all(protractor_1.by.className('select2-arrow')).last(), IdentifySolutions.solutionThree = protractor_1.element.all(protractor_1.by.cssContainingText('.select2-result-label', 'Solution 3')).last();
    async function selectDropDownOptionThree() {
        await IdentifySolutions.solutionDropDown.click();
        //TODO (better solution) - enforced wait to ensure dropdown is visible to the browser
        await protractor_1.browser.sleep(1000);
        await IdentifySolutions.solutionThree.click();
        //TODO (better solution) - enforced wait to ensure dropdown selection is made
        await protractor_1.browser.sleep(1000);
    }
    IdentifySolutions.selectDropDownOptionThree = selectDropDownOptionThree;
})(IdentifySolutions = exports.IdentifySolutions || (exports.IdentifySolutions = {}));
