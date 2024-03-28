/// <reference types="cypress"/>

describe("Cypress web security",() =>{
    it.skip("Validate visiting two different domains", () =>{
        cy.visit("https://webdriveruniversity.com")         // if you attemt to visit 2 different super domains you are going to face security restriction issue
        cy.visit('https://automationteststore.com/')
    })

    it("Validate visiting two different domains via user actions", () =>{
        cy.visit('https://webdriveruniversity.com')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();  
        
    })

    // it('Origin command', () =>{
    //     cy.origin('webdriveruniversity.com', () => {
    //         cy.visit('/');

    // })
    //     cy.origin('automationteststore.com', () =>{
    //         cy.visit('/');
    //     })
    // }) 
 })