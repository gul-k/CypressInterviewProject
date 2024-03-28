import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO";

/// <reference types="cypress"/>

describe("Test Contact Us form via WebdriverUni",() =>{
    Cypress.config('defaultCommandTimeout',20000)
    const homePage_Po =new HomePage_PO();
    const contact_Us_Po =new Contact_Us_PO();

    before(function(){
        cy.fixture('example').then(function(data){    //Loading data from example.json  file
           // this.data=data;
            globalThis.data = data;
        })
    })
    beforeEach(function(){
        //cy.visit(Cypress.env("webdriveruni_homepage")+"/Contact-Us/contactus.html")
       // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
             
       homePage_Po.visitHomepage();
       cy.wait(3000);
       homePage_Po.clickOn_ContactUs_Button()
    })

    it("Should be able to submit a succesful submission via contact us form", () =>{
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type("Her first form")
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text','Thank You for your Message!');
        //cy.webdriverUni_ContactForm_Submission(Cypress.env('first_name'),data.last_name,data.email,"Her first form",'h1','Thank You for your Message!');  //custom command ustteki stepsler icin
        
        
        contact_Us_Po.contactForm_Submission(Cypress.env('first_name'),data.last_name,data.email,"Her first form",'h1','Thank You for your Message!555');
    })

    it.skip("Should not be able to submit a succesful submission via contact us form as all fields are required", () =>{
        // cy.get('[name="first_name"]').type("Tom")
        // cy.get('[name="last_name"]').type("Black")
        // cy.get('textarea.feedback-input').type("His first form")
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')
        //cy.webdriverUni_ContactForm_Submission(data.first_name,data.last_name," ",'His first form','body','Error: Invalid email adress');  //custom command ustteki stepsler icin
                                                                                                                                           //selector da sorun var kabul etmiyor
        // const contact_Us_Po =new Contact_Us_PO();
        // contact_Us_Po.contactForm_Submission(data.first_name,data.last_name," ",'His first form','body','Error: Invalid email adress');
    })
})