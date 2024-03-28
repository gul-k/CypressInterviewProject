/// <reference types="cypress"/>

describe("Handle js alerts",() =>{
    it("Confirm js alert contains the correct text", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
        
        cy.get('#button1').click()            //cypress handless alerts itself

        cy.on('window:alert',(str) => {                    //in order to validate alert is handled 
            expect(str).to.equal('I am an alert box!')
        })
    })

    it("Validate js confirm alert box works correctly when clicking ok", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
        
        cy.get('#button4').click()            //this is js confirm alert box button

        cy.on('window:confirm',(str) => {                    // 
            return true;   //in order to click OK 

           // return false;   // in order to click Cancel button
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!');
       // cy.get('#confirm-alert-text').should('have.text','You pressed OK!')
    })

    it("Validate js confirm alert box works correctly when clicking cancel", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
        
        cy.get('#button4').click()            //this is js confirm alert box button

        cy.on('window:confirm',(str) => {                    // 
          return false;                        // in order to click Cancel button
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    })

    it("Validate js confirm alert box using a stub", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
        
        const stub =cy.stub()                         //altta cikan text leri kaydetmek icin const olusturyoruz stub ile
        cy.on('window:confirm',stub)           

        cy.get('#button4').click().then(() =>{
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(()=>{
            return true;
        }).then(() =>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })
})