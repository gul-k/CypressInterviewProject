/// <reference types="cypress"/>

describe("Interact with dropdown lists via webdriveruni",() =>{
    it("Select specific values via dropdown lists", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
        
        cy.get("#dropdowm-menu-1").select('c#')                     //select(value) icinde value neyse o yaziyor
        cy.get("#dropdowm-menu-2").select('testng').should('have.value','testng')
        cy.get("#dropdowm-menu-3").select("JQuery").contains('JQuery')                 //select(text) option daki text i yazarak da secebilirsin
        
        cy.get("#dropdowm-menu-2").select('maven').should('have.value','maven')
        cy.get("#dropdowm-menu-2").select('TestNG').contains('TestNG')

    })

})