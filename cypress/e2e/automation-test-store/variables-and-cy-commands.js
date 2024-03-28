/// <reference types="cypress"/>

describe("Verifying variables, cypress commands and jquery commands",() =>{
    it("Navigating to specific product pages", () =>{
        cy.visit('https://automationteststore.com/')
        //The following will fail
        // const makeUpLink=cy.get("a[href*='product/category']").contains('Makeup')
        // const skinCareLink=cy.get("a[href*='product/category']").contains('Skincare')
        // makeUpLink.click();
        // skinCareLink.click();

        //The following will pass
        // const makeUpLink=cy.get("a[href*='product/category']").contains('Makeup')
        // makeUpLink.click();
        // const skinCareLink=cy.get("a[href*='product/category']").contains('Skincare')
        // skinCareLink.click();

        //Recomended approach
        cy.get("a[href*='product/category']").contains('Makeup').click()
        cy.get("a[href*='product/category']").contains('Skincare').click()

        //Following code will fail
        // const header =cy.get("h1 .maintext");
        // cy.log(header.text())

        // cy.get("h1 .maintext").then(($headerText) => {   // Fail oluyor 88. class i bir daha izle
        //     const headerText=$headerText.text()
        //     cy.log("Found header text: "+headerText)
        //     expect(headerText).is.eq('Makeup');
        // })
    });

    it("Validate properities of the contact us page", () =>{
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')

        //JQuery Approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text =>{
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

        //Embeded commands (Closure)
        cy.get('field_11').then(fnText => {
            cy.log(fnText.text())
        })
        })

        
        
        
    });

})