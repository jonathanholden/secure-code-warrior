import {by, element} from "protractor";

export namespace MissionBriefing {
    export const enterGameMode = element(by.buttonText('Enter game mode')),
    userNameBox = element(by.model('profile.firstName')),
    saveButton = element(by.buttonText('Save'));
    }
