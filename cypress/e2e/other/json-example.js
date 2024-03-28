/// <reference types="cypress"/>

describe("JSON Object Examples", () => {
    
  it("Json Object Examples", () => {
       const exampleObject ={ "key":"Tim", "key2":"Jones"}
       const exampleArrayOfValues = ["Sophie","Rose","Hovard"]
       const exampleArrayOfObjects=[{"key":"Luke"},{"key2":"Sam"},{"key3":"22"}]
       const users ={
           "firstName":"Joe",
           "lastName":"Blogs",
           'Age':30,
           "Students":[
            {
                "firstName":"Jim",
                "lastName":"Blogs2",
            },
            {
                "firstName":"Sarah",
                "lastName":"Parker",
            }
           ]
       }

       cy.log(exampleObject["key"]) //Tim
       cy.log(exampleObject["key2"]) //Jones
       cy.log(exampleObject.key2); //Jones

       cy.log(exampleArrayOfValues[0])
       cy.log(exampleArrayOfValues[1])

       cy.log(users.lastName)//
       cy.log(users.Students[0].lastName)//Blogs2

       cy.log(exampleArrayOfObjects[0].key)
       cy.log(exampleArrayOfObjects[1].key2)
       cy.log(exampleArrayOfObjects[2].key3)
   });
});
