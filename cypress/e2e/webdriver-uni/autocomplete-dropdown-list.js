/// <reference types="cypress"/>

describe("Verify auto complete dropdown list via webdriveruni",() =>{
    it("Select specific values via dropdown lists", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
        
        cy.get('#myInput').type('A');
        cy.get('#myInputautocomplete-list > *').each(($el,index,$list)=>{
            const prod =$el.text();
            const productToSelect = 'Avacado';

            if(prod === productToSelect){
               // $el.click()              //it is deprecated
                $el.trigger("click");      //trigger("click") => click "" icinde dikkat et typing de

                cy.get('#submit-button').click();
                cy.url().should('include',productToSelect)
            }
        }).then(()=>{
            cy.get('#myInput').type('G');
            cy.get('#myInputautocomplete-list > *').each(($el,index,$list)=>{
                const prod =$el.text();
                const productToSelect = 'Grapes';
    
                if(prod === productToSelect){
                    //$el.click();
                    $el.trigger("click");
                    cy.get('#submit-button').click();
                    cy.url().should('include',productToSelect)
                }
        })
    })

})
})