/// <reference types="cypress"/>

describe("Verify auto complete dropdown", () => {
    
    it("Select specific text via dropdown lists", () => {
      cy.visit("https://webdriveruniversity.com/");

      cy.get('#iframe').invoke('removeAttr','target').click({force:true})

      cy.get('#frame').then($iframe=>{
        const body=$iframe.contents().find('body')
        cy.wrap(body).as('iframe')
      })

     cy.get('@iframe').find('#button-find-out-more').click();

     cy.get('@iframe').find('.modal-body').contains('Welcome to webdriveruniversity.com we sell a wide range of')
     cy.get('@iframe').find('.btn.btn-default').contains('Find Out More').click()
    });  
    })
 