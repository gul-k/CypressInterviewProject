///<reference types ="cypress"/>

describe("Authentications", () => {

    it("Basic Authentication", () => {
      cy.request({
        method:'GET',
        url:'https://postman-echo.com/basic-auth',
        auth:{
            user:"postman",
            pass:"password"
        }
      })
      .then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body).property('authenticated').to.be.true;
      })
    });

    it("Digest Authentication", () => {
        cy.request({
          method:'GET',
          url:'https://postman-echo.com/basic-auth',    
          auth:{
              username:"postman",
              password:"password",
              method:'digest'
          }
        })
        .then((response)=>{
          expect(response.status).to.equal(200)
          expect(response.body).property('authenticated').to.be.true;
        })
      });
        
      const token='d2750de0ec540ccd2517547e0324ccbeb850f9233d7a74c0401776e111a975e9'
      it("BarerToken Authentication", () => {
        cy.request({
          method:'GET',
          url:'https://api.github.com/user/repos',    //this url wrong
          headers:{
              Authorization:'Bearer '+token
          }
        })
        .then((response)=>{
          expect(response.status).to.equal(200)
          
        })
      });
});