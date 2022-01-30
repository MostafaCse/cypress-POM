import { SignIn } from "../../pageOfObject/SignIn";

const singIn = new SignIn();

describe('uploader testing ',()=>{
    beforeEach(()=>{
        singIn.nav();
        cy.contains('a', 'Log In').click();
        singIn.fillEmail('mostafaiiuccse14@gmail.com');
        singIn.NextButton();
        singIn.fillPassword('161114Mostafa');
        singIn.SignInButton();
    })
    it('upload photo',()=>{
        
    })
})