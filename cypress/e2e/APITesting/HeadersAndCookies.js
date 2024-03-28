///<reference types ="cypress"/>

describe("API testing", () => {

    let authToken=null;

    before("Creating accses token",()=>{                             //before
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers:{
                'Content-Type':'application/json'
            },
            body:{
                clientName: 'ABC',
                clientEmail:Math.random().toString(10).substring(2) +'@gmail.com',   //herdefasinda farkli bir email gerekiyor token generate etmek icin bu nedenle auto generate data
            }
        }).then((response) => {
            authToken=response.body.accessToken;
    });
});

    it("POST call for creating new order", () => {                   //before
        cy.request({
            method:'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                'Content-Type':'application/json'
                ,"Authorization":'Bearer '+authToken,
            },
            body:{  
                    "bookId":1,
                    "customerName":"xyzabc"
            }
        }).then((response) => {
            expect(response.body.created).to.be.true;
            expect(response.status).to.eq(201);

    });    
})  

     it("Fetching teh orders",()=>{
        cy.request({
            method:"GET",
            url:"https://simple-books-api.glitch.me/orders/",
            headers:{
                'Content-Type':'application/json'
                ,"Authorization":'Bearer '+authToken,
            },
            cookies:{
                'cookieName':'mycookie'
            }
        }).then((response)=>{
           expect(response.status).to.eq(200); 
           expect(response.body).has.length(1);      //kac tane object oldugu array in icinde
     })
})
})