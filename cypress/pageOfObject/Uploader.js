export class Uploader{
    uploadHandle(){
        const catchIcon =cy.get('[id=yui_3_16_0_1_1643442714799_1025]').click();
        cy.contains('div','Choose photos and videos to upload').click();
        //cannot select photo yet.but i am trying to do it.and i hope i can.
        cy.get('[id=action-publish]').click();
        cy.get('[id=confirm-publish]').click();

    }
}