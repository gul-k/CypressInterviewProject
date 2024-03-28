/// <reference types="cypress"/>

describe("Test Contact Us form via Automation Test Store",() =>{
    before(function(){
        cy.fixture("userDetails").as("user")
    })
    it("Should be able to submit a succesful submission via contact us form", () =>{
        cy.visit("https://automationteststore.com/");
        cy.get("a[href$='contact']").click().then(function (textOfTheLink) {
            cy.log('Text of the link is '+ textOfTheLink.text())
        }); 
            
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name);
            cy.get('#ContactUsFrm_email').type(user.email);
        })
       
        cy.get('#ContactUsFrm_first_name').should('have.attr','name','first_name'); 
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk oreders?");
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!');

    })

})