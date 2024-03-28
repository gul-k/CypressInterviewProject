/// <reference types="cypress"/>

describe("Itearte over elements",() =>{

    beforeEach(function(){
      cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category']").contains('Hair Care').click()

    })
    it("Log information of all haircare products", () =>{
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log('Index: '+ index + ':' + $el.text())
          })

    });

    it("Add specific product to basket", () =>{
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if ($el.text().includes('Curls to straight Shampoo')) {
        //         // wrap this element so we can
        //        // use cypress commands on it
        //         cy.wrap($el).click()
        //       } 
        //     })
        cy.selectProduct('Curls to straight Shampoo');     //custom command
          });     
   
    it("Add specific product to basket", () =>{
        cy.selectProduct('Seaweed Conditioner');     //custom command
          }); 
          
     it("Add specific product to basket", () =>{
        cy.selectProduct('Pantene Pro-V Conditioner');     //custom command
          }); 
})