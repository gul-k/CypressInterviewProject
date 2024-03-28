/// <reference types="cypress"/>

describe("Alias and invoke",() =>{
    it("Valide a spesific hair care product", () =>{
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category']").contains('Hair Care').click()

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail') //aliasas create a variable in order to use it next time
        cy.get('@productThumbnail').should('include','Seaweed Conditioner')
    });
    
    it("Validate product thumbnail", () =>{
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length',16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include','Add to Cart')  //find bir elementin bir ya da bir kac altindaki elementi bulmak icin kullanilir
                                                                                                                 //invoke cagirdigimiz elementin icindeki atribute u cagirmak icin kullanildi
          });


    it("Calculate total of normal and sale products", () =>{
        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal=0;
        cy.get('@itemPrice').then($linkText => {

            var itemsPriceTotal=0;
            var itemPrice= $linkText.split('$');
            cy.log(itemPrice);
            var i;
            for(i= 0; i<itemPrice.length; i++){
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal
            cy.log("Non sale price items total: "+ itemsPriceTotal)
        })
         
        cy.get('@saleItemPrice').then($saleLinkText => {
            var saleItemsPriceTotal=0;
            var saleItemPrice= $saleLinkText.split('$');
            cy.log(saleItemPrice);
            var i;
            for(i= 0; i<saleItemPrice.length; i++){
                cy.log(saleItemPrice[i])
                saleItemsPriceTotal += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPriceTotal
            cy.log("Sale price items total: "+ saleItemsPriceTotal)
        })
        .then(() =>{
            cy.log('Sale and non sale items price total: ' +itemsTotal)
            expect(itemsTotal).to.equal(660.5)
        })
    });
})