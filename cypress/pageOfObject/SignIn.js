export class SignIn {
  nav() {
    cy.visit('https://www.flickr.com/');
  }
  fillEmail(value) {
    const field = cy.get('[id=login-email]');
    field.clear();
    field.type(value);
    //return this;
  }
  fillPassword(value) {
    const field = cy.get('[id=login-password');
    field.clear();
    field.type(value);
   // return this;
  }
  NextButton(){
  const button = cy.contains('button','Next');
  button.click();
  }
  SignInButton(){
    const button = cy.contains('button','Sign in');
  button.click();
  }
  emailSelect(){
   cy.contains('div','m').click();
  }
}