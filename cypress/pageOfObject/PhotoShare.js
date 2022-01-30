
export class PhotoShare{
    share(){
        cy.contains('a','You');
        cy.get('ul>li').eq(2);
        cy.contains('a','Go to Camera Roll');
        cy.get('div.height-controller').children().first().click();
        cy.contains('span','Share').click();

    }
}