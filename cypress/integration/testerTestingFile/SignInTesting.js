
import { SignIn } from "../../pageOfObject/SignIn";
const singIn = new SignIn();

describe('Sign in ', () => {
    beforeEach(() => {
        singIn.nav();
    })
    it('click login btn', () => {
       
        cy.contains('a', 'Log In').click();
        if(cy.get('[id=login-email]').length<=0)
        {
            singIn.emailSelect();
            singIn.fillPassword('161114Mostafa');
            singIn.SignInButton();
        }
        else {
            singIn.fillEmail('mostafaiiuccse14@gmail.com');
            singIn.NextButton();
            singIn.fillPassword('161114Mostafa')
            singIn.SignInButton();
        }
    })
})

