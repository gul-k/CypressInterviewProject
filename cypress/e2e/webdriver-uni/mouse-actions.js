/// <reference types="cypress"/>

describe("Test mouse actions",() =>{
    it("Scroll ellement into view", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around     
    })

    it("I should be able to drag and drop a draggable item", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})      
        cy.get('#draggable').trigger('mousedown',{which:1})                                  //this method click center of an element and hold left click on it

        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true});            //this method drag and drop it

    })

    
    it("I should be able to perform a double mouse click", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})  
       
        cy.get('#double-click').dblclick();
    })

    it.only("I should be able to hold down the left mouse click on a given element", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})  
       
        cy.get('#click-box').trigger('mousedown', {which:1}).then(($element =>{
            expect($element).to.have.css('background-color','rgb(0, 255, 0)')          //html de background yaziyor ama burda background-color yazinca test gecti
        }))
    })
})