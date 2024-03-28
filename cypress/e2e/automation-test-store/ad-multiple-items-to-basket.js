import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
/// <reference types="cypress"/>

describe("Add multiple items to basket", () => {
    const autoStore_Homepage_PO =new AutoStore_Homepage_PO();
    const autoStore_Haircare_PO =new AutoStore_HairCare_PO();
    before(function(){
      cy.fixture("products").then(function(data){
        globalThis.data=data;
      })
    })
  beforeEach(function () {
    autoStore_Homepage_PO.accessHomepage();
    autoStore_Homepage_PO.clickOn_HairCare_Link();
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category']").contains("Hair Care").click();
  });
  it("Add specific items to basket", () => {
    autoStore_Haircare_PO.addHairCareProductsToBasket();
//     globalThis.data.productName.forEach(function(element){
//         cy.addProductToBasket(element)
//     })
//     cy.get('.dropdown-toggle > .fa').click()
   });
});
