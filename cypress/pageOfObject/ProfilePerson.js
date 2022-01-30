//import {profilePhoto} from '../img/doctorPortal.PNG';
export class ProfilePerson {
    profileButton() {
        const P_button = cy.get('#yui_3_16_0_1_1643421950597_959').find('div');
        P_button.click();
    }
    upload() {
        cy.contains('a', 'Upload your photos').click();
        const photo = cy.contains('div', 'Choose photos and videos to upload').click();
        photo.clear();
        photo.type('mostafa');
        cy.get('#action-publish').find('input').click();
    }
    flickrMsg() {
        cy.contains('a', 'FlickrMail').click();
    }
    settingPage() {
        cy.contains('a', 'Settings').click();
    }
    helpPage() {
        cy.contains('a', 'Help').click();
    }
    logOut() {
        cy.contains('a', 'Log out').click();
    }
}