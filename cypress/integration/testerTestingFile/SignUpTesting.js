
import { SignUp } from '../../pageOfObject/SingUp';
const singUp = new SignUp();
describe('Sign up testing', () => {
    beforeEach(() => {
        singUp.nav();
    })
    it('test sing up', () => {
        cy.contains('a', 'Sign Up').click();
        singUp.firstName('mohammad');
        singUp.lastName('eshan');
        singUp.age('20');
        singUp.email('mdmostafaiiuc@gmail.com');
        singUp.password('108541Mohammad')
      //  singUp.singUpFillUp('mohammad', 'Eshan', '11', 'mdmostafaiiuc@gmail.com', '108541Mohammad');
        singUp.singUpButton();
    })
})