///<reference types ="cypress"/>

describe("Api testing", () => {
    it("Appraoch- Hard coded json object", () => {
      
        const requestBody={
            
                tourist_name:"Mike",
                tourist_email:"john12879@gmail.com",
                tourist_location:"Paris"          
               }
        cy.request({
            method:'POST',  
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body:requestBody
        })
        .then((response)=>{
            expect(response.status).to.equal(201) 
            expect(response.body.tourist_name).to.eq("Mike")
            expect(response.body.tourist_email).to.eq("john12879@gmail.com")
            expect(response.body.tourist_location).to.eq("Paris")
        })
    });

    it("Appraoch2- Dynamically generating json object", () => {
      
        const requestBody={
            
                tourist_name:Math.random().toString(5).substring(2),
                tourist_email:Math.random().toString(5).substring(2)+"@gmail.com",
                tourist_location:"Paris"          
               }
        cy.request({
            method:'POST',  
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body:requestBody
        })
        .then((response)=>{
            expect(response.status).to.equal(201) 
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
    });

    it("Appraoch3- using Fixture", () => {
      
        cy.fixture('tourist'.then((data)=>{                //cy.fixture('fixture filename' , callback function )
          const requestBody=data;

          cy.request({
            method:'POST',  
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body:requestBody
        })
        .then((response)=>{
            expect(response.status).to.equal(201) 
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
                    //this part coming from response      //this part coming from fixture file

            expect(response.body).has.property('tourist_email',requestBody.tourist_email)
            expect(response.body).not.have.property('tourist_email',requestBody.tourist_email)
        })
        })
        )
       
    });
});