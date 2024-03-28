/// <reference types="cypress"/>

describe("Handle alerts manually", () => {

    it("Click 'Cancel' button on confim alert box manually", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get("#popup-alerts")
          .invoke("removeAttr", "target")
          .click({ force: true });
  
          cy.get('#button1').click();
  
          cy.on('window:alert',(str) => {                   
            expect(str).to.equal('I am an alert box!')               
            })
      });

    it("Click 'Cancel' button on confim alert box manually", () => {
      cy.visit("https://webdriveruniversity.com/");
      cy.get("#popup-alerts")
        .invoke("removeAttr", "target")
        .click({ force: true });

        cy.get('#button4').click();

        cy.on('window:confirm',(str) => {                   
            return false;                        
          })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    });

    it("Click 'OK' button on confim alert box manually", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get("#popup-alerts")
          .invoke("removeAttr", "target")
          .click({ force: true });
  
          cy.get('#button4').click();
  
          cy.on('window:confirm',(str) => {                   
              return true;                        
            })
          cy.get('#confirm-alert-text').contains('You pressed OK!');
      });

      it("Click 'x' button on pop up modal", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get("#popup-alerts")
          .invoke("removeAttr", "target")
          .click({ force: true });
  
          cy.get('#button2').click();
          
          cy.get('.btn.btn-default').contains('Close').click();
          
      });

      it.only("Create a stub for confim alert box", () => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get("#popup-alerts")
          .invoke("removeAttr", "target")
          .click({ force: true });
  
          const stub=cy.stub()
          cy.on('window:confirm',stub)

          cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
          }).then(()=>{
            return true;
          }).then(()=>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
          })       
      });

})