/// <reference types="cypress"/>

describe("Validate webdriweruni homepage links",() =>{
    it("Confirm links redirect to the correct pages", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
        cy.url().should('include','contactus')

        cy.go('back')         //navigate back
        cy.reload()
        cy.url().should('include', 'https://webdriveruniversity.com')

        cy.go('forward')      //navigate forward
        cy.url().should('include', 'contactus')

        cy.go('back')

        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
        cy.url().should('include','Login-Portal')

        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
        cy.url().should('include','To-Do-List')

        cy.go('back')
        cy.url().should('equal','https://webdriveruniversity.com/')  


    })

})