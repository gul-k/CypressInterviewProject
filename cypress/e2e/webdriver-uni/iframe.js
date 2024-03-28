/// <reference types="cypress"/>

describe("Handling IFrame & Modals",() =>{
    it("Handle webdriveruni iframe and modal", () =>{
        cy.visit("https://webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})  //bir baska tab e gecmek icin uygulanan work around
        
        cy.get('#frame').then($iframe => {                     // Test runner iframe le interact olmaya izin vermiyor sadece css i veriyor
            const body =$iframe.contents().find('body')        //Bu css in body si icerisndeki diger elementlerle etkilesim yapabilmek icin bu methodu kullaniyoruz
            cy.wrap(body).as('iframe')                         //en sonunda wrap yapiyoruz ki bir sonraki adimlarda cypress command lari kullanabilelim body icin
        })
         
        //iframe icindeki button a basabilmek icin yine cypress runner dan inspect yapilamiyor

        cy.get('@iframe').find('#button-find-out-more').click()     //button a click yapmak icin

        //iframe in icindeki button a bastiktan sonra bir window aciliyor bunun la da interact olmaya izin vermiyor
        //acilan window daki text i verify etmek icin

        cy.get('@iframe').find('#myModal').as('modal')             //her defasinda bir iframe icindeki bir baska elementle etkilesim icin once yine cy.get('@iframe') ve sonra find()

        cy.get('@modal').should(($expectedText) =>{
            const text =$expectedText.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
            
        })
        cy.get('@modal').contains('Close').click()    //acilan window daki Close a basmak icin
    })
})