import { SignIn } from '../../pageOfObject/SignIn';
import { ProfilePerson } from '../../pageOfObject/ProfilePerson';

const singIn = new SignIn();
const profilePerson = new ProfilePerson();

describe('Profile testing', () => {
  beforeEach(() => {
    singIn.nav();
    cy.contains('a', 'Log In').click();
    singIn.fillEmail('mostafaiiuccse14@gmail.com');
    singIn.NextButton();
    singIn.fillPassword('161114Mostafa');
    singIn.SignInButton();

  })
  it('Flickr mail page', () => {
    profilePerson.profileButton();
    profilePerson.flickrMsg();
  })
  it('setting page ', () => {
    profilePerson.profileButton();
    profilePerson.settingPage();
  })
  it('Help page', () => {
    profilePerson.profileButton();
    profilePerson.helpPage();
  })
  it('Log out testing', () => {
    profilePerson.profileButton();
    profilePerson.logOut();
  })
  //still working with it
 //it('upload your photo',()=>{
   //profilePerson.profileButton();
   //profilePerson.upload();
 //})
})