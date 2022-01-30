export class Post {
    searchHandle(value) {
        const searchField = cy.get('[id=search-field]');
        searchField.clear();
        searchField.type(value);
        const btnHandle = cy.get('ul').children('#yui_3_16_0_1_1643439900801_1001');
        btnHandle.click();
    }
    likePhoto(){
        cy.get('[id=yui_3_16_0_1_1643439900801_9191]').click();
    }
}