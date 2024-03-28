/// <reference types="cypress"/>

describe("Verify radio buttons via webdriveruni",() =>{

    beforeEach(function() {
    cy.visit("https://webdriveruniversity.com")
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
})
    it("Check specific radio buttons", () =>{ 
        cy.get("input[name='color']").first().check()
        cy.get("input[name='color']").eq(1).check()             // ikinci radio buttoni secmek icin
        
    })

    it("Validate the specific radio buttons", () =>{   
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')
        
        cy.get("[value='cabbage']").should("be.disabled")
    })
})