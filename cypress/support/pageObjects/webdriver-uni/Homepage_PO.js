class HomePage_PO {
    visitHomepage(){
        cy.visit(Cypress.env("webdriveruni_homepage"), {timeout:60000})      //expilcit time out for specific function 
    }
    clickOn_ContactUs_Button(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}, {timeout:8000})
    }
}
export default HomePage_PO;
