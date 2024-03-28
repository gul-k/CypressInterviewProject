/// <reference types="cypress"/>

describe("Verify auto complete dropdown", () => {
  it("Validate selected checkbox is selected", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("input[value='option-2']").check().should("be.checked");
    cy.get("input[value='option-1']").should("not.be.checked");
  });

  it("Validate multiple selection selected from checkbox menu", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("input[type='checkbox']").check(['option-1','option-2','option-3','option-4']).should('be.checked');   
  });

  it.only("Validate selected radio button is selected", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
     //one way
    cy.get("input[type='radio']").check('purple').should('be.checked');
     
    //second way
    cy.get('#radio-buttons').find("[type='radio']").first().check();
    cy.get('#radio-buttons').find("[type='radio']").eq(2).check();

    //check is selected or not selected or disabled
    cy.get("input[value='pumpkin']").should('be.checked');
    cy.get("input[value='lettuce']").check().should('be.checked');
    cy.get("input[value='cabbage']").should("be.disabled");
  });
});
