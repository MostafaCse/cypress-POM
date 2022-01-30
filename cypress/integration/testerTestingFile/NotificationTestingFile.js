import { SignIn } from '../../pageOfObject/SignIn';
import { Notification } from '../../pageOfObject/Notification';
const singIn = new SignIn();
const nfn = new Notification();

describe('notification testing', () => {
    beforeEach(() => {
        singIn.nav();
        cy.contains('a', 'Log In').click();
        singIn.fillEmail('mostafaiiuccse14@gmail.com');
        singIn.NextButton();
        singIn.fillPassword('161114Mostafa');
        singIn.SignInButton();
    })
    it('notification page', () => {
        nfn.notificationClick();
    })
})