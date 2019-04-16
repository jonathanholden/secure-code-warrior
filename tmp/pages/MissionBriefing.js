Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var MissionBriefing;
(function (MissionBriefing) {
    MissionBriefing.enterGameMode = protractor_1.element(protractor_1.by.buttonText('Enter game mode')), MissionBriefing.userNameBox = protractor_1.element(protractor_1.by.model('profile.firstName')), MissionBriefing.saveButton = protractor_1.element(protractor_1.by.buttonText('Save'));
})(MissionBriefing = exports.MissionBriefing || (exports.MissionBriefing = {}));
