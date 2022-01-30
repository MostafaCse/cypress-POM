export class SignUp {
    nav() {
        cy.visit('https://www.flickr.com/browser/upgrade/?ref=login&rid=60cfd9c0');
    }
    firstName(value){
        const first_name = cy.get('[id=sign-up-first-name]');
        first_name.clear();
        first_name.type(value);
    }
    lastName(value){
        const last_name = cy.get('[id=sign-up-last-name]');
        last_name.clear();
        last_name.type(value);
    }
    age(value){
        const Age = cy.get('[id=sign-up-age]');
        Age.clear();
        Age.type(value);
    }
    email(value){
        const Email = cy.get('[id=sign-up-email]');
        Email.clear();
        Email.type(value);
    }
    password(value){
        const Password = cy.get('[id=sign-up-password]');
        Password.clear();
        Password.type(value);
    }
    singUpButton() {
        cy.contains('button', 'Sign up').click();
    }
}