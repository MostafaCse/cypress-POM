import { SignIn } from '../../pageOfObject/SignIn';
import { Search } from '../../pageOfObject/Search';

const singIn = new SignIn();
const search = new Search();
describe('Search testing',()=>{
    beforeEach(()=>{
        singIn.nav();
        cy.contains('a', 'Log In').click();
        singIn.fillEmail('mostafaiiuccse14@gmail.com');
        singIn.NextButton();
        singIn.fillPassword('161114Mostafa');
        singIn.SignInButton();
    })
    it('search field ',()=>{
       search.searchHandle('programming');
    })
})