/// <reference types="cypress"/>

describe("Handling data via webdriveruni", () => {
    
    it("Calculate and assert the total age of all users from datatable", () => {
      cy.visit("https://webdriveruniversity.com/");

      cy.get('#data-table').invoke('removeAttr','target').click({force:true})

      var cellData=[];
      let numb=0;
      cy.get('#thumbnail-1 tr td').each(($el, index, $list)=>{
         cellData[index]=$el.text()
      }).then(()=>{
        var i;
        for(i=1; i<cellData.length; i++){
           if(Number(cellData[i])){
              numb += Number(cellData[i])
           }
        }
        cy.log(numb)
        expect(numb).to.eq(322)
      })
    })

    it("Calculate and assert the age of a given user based on last name", () => {
        cy.visit("https://webdriveruniversity.com/");
  
        cy.get('#data-table').invoke('removeAttr','target').click({force:true})
  
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el,index,$list)=>{
            const lastName=$el.text()
            if(lastName.includes('Woods')){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age){
                     const userAge=age.text()
                     expect(userAge).eq('80')
                })
            }
        })
      })
})
          
