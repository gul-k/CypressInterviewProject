/// <reference types="cypress"/>

describe("Navigate to face items page", () => {
  it("Validate face items page lists all face product items", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category']").contains("Skincare").click();
    cy.get(":nth-child(2) > .mt10 > a").click();
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().includes("Body Cream by Bulgari")) {
        cy.wrap($el).click();
      }
    });
    cy.get(".bgnone").should("have.text", "Body Cream by Bulgari");
  });

  it.only("Validate special offers have on sale items", () => {
    cy.visit("https://automationteststore.com/");
    
    cy.get(".active.menu_home").contains('Home')
      .trigger("mouseover", {which:1}).then(()=>{
        cy.get('#main_menu').trigger('mouseover', {force: true})
      }).then(()=>{
        cy.get('#main_menu > li').contains('Specials').click({force: true});
      })

    // describe('Hidden Element Test', () => {
    //   it('Should get a hidden element', () => {
    //     // Visit your page
    //     cy.visit('your_page_url');
    
    //     // Find the hidden element using cy.get() with { includeHidden: true }
    //     cy.get('your_hidden_element_selector', { includeHidden: true }).then($el => {
    //       // Now you have the hidden element and can perform actions on it
    //       // For example, you can assert its existence or visibility
    //       expect($el).to.exist;
    //       expect($el).to.be.visible; // This may seem contradictory, but in Cypress, you can still interact with hidden elements
    //     });
    //   });
    // });
    //cy.get("li[class='dropdown open']").find('.top.menu_specials').find('text').should("have.text",'Specials');
  });

  it("Validate selected hair care product added to card succesfully", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category']").contains("Hair Care").click();
    cy.get(".prdocutname").each(($el, index, $list) => {
      if ($el.text() === "Curls to straight Shampoo") {
        cy.get(".productcart").eq(index).click();
        cy.log(index);
      }
    });
    cy.get("a[title='Added to cart']").click();
    cy.get(
      ".product-list > .table > tbody > :nth-child(2) > :nth-child(2)"
    ).contains("Curls to straight Shampoo");
  });

  it("Validate searchable items displayed on the page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("#filter_keyword").type("Shampoo {enter}");
    cy.get(".fixed_wrapper .prdocutname").contains("Shampoo");
    cy.get(".input-group #keyword").should("have.value", "Shampoo ");
  });

  it("Calculate total of sale and normal products  ", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.pricetag.jumbotron .price .oneprice').invoke('text').as('onePrice');
    cy.get('.pricetag.jumbotron .price .pricenew').invoke('text').as('salePrice');


    var itemsTotal=0;
        cy.get('@onePrice').then($linkText => {

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

        cy.get('@salePrice').then($saleLinkText =>{
            var saleItemsTotal=0;
            var saleItemPrice=$saleLinkText.split('$');
            cy.log(saleItemPrice);
            var i;
            for(i=0; i<saleItemPrice.length; i++){
                cy.log(saleItemPrice[i])
                saleItemsTotal += Number(saleItemPrice[i])
                
            }
            cy.log("Sale items total price is" +saleItemsTotal)
            itemsTotal += saleItemsTotal
            cy.log("All items total price is" +itemsTotal)
        })

    
  });
});
