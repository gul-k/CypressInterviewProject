/// <reference types="cypress"/>

describe('Test File Upload via webdriveruni', () => {
    it('Upload a file', () => {
        cy.visit('https://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr','target').click({force: true});

        cy.get('#myFile').selectFile("cypress/fixtures/activity.jpg")
        cy.get('#submit-button').click()
        
    });
});