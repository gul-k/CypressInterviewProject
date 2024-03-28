/// <reference types="cypress"/>

describe("Select date from date picker", () => {
    it("Select specific  via select dropdown lists", () => {
      cy.visit("https://webdriveruniversity.com/");
      cy.get("#datepicker")
        .invoke("removeAttr", "target")
        .click({ force: true });
      
        var targetDay='30'
        var targetMonth='June'
        var targetYear='2024'
       cy.get('.input-group.date').click()
        function selectMonthAndYear(){
             cy.get('.datepicker-switch').first().then(currentDate =>{
                if(!currentDate.text().includes(targetYear)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            
             }).then(() =>{
                cy.get('.datepicker-switch').first().then(currentDate =>{
                    if(!currentDate.text().includes(targetMonth)){
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                }
                
        });
    })
}
    function selectDay(){
        cy.get("td[class='day']").contains(targetDay).click()
    }

    selectMonthAndYear()
    selectDay()
})
})