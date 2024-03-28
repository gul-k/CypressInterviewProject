/// <reference types="cypress"/>

describe("Verify checkboxes via webdriveruni",() =>{

    beforeEach(function(){
        cy.navigateTo_WebdriverUni_Checkboxespage();
       // cy.visit("/")
       // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })
    it("Check and validate checkbox", () =>{
       
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')  //assertion it is checked or (not.be.checked)
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
       // cy.get('@option-1').check()                                     //check checkbox element
        cy.get('@option-1').check().should('be.checked')                //check()yapilip ayni anda assert yapiliabilir bu sekilde chain olarak
    })

    it("UnCheck checkbox and validate it is unchecked", () =>{
        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
        
    })

    it("Check multiple checkboxes", () =>{                      //butun check box lari sirasiyla secmek icin  type ve value dan faydalaniyoruz
        cy.get("input[type='checkbox']").check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')  
        
    })
})