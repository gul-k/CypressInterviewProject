/// <reference types="cypress"/>

describe("Test Datepicker via webdriveruni",() =>{
    it("Select date from the date picker", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around

        cy.get('#datepicker').click()
        
        // let date =new Date();
        // date.setDate(date.getDate())
        // cy.log(date.getDate()) //get current day i. e. 22

        // let date2 = new Date();
        // date2.setDate(date.getDate()+5)
        // cy.log(date2.getDate())  //get current day i.e. 22 + 5 = 27

        var date3= new Date();
        date3.setDate(date3.getDate()+ 3);

        var futureYear=date3.getFullYear();
        var futureMonth= date3.toLocaleString("default", {month: "long"});
        var futureDay=date3.getDate();

        cy.log("Future year to select:"+ futureYear)
        cy.log("Future month to select:"+ futureMonth)          //buraya kadar bugunku tarihten sonra +kac gun dediysek ona gore 
        cy.log("Future day to select:"+ futureDay)              //date picker dan secmesi icin olan methodlardi

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {      //find('.datepicker-switch') 3 tane element buluyor ilkini secmek icin first()
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click();                                                     //ayni sekilde 3 tane elemnt buluyor o yuzden first()
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }
        
        function selectFutureDay(){
            cy.get('[class="day"]').contains(futureDay).click()
        }
        selectMonthAndYear();
        selectFutureDay();
    })
})