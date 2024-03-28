///<reference types ="cypress"/>

describe("Gorest API chaining", () => {

    const auth_token='Bearer fd407f5bbf46b20652fa8200d519083e37c983f6ff35f00a4b375919adb4d7f7'
    
    it("Create, update, delete user in GorestAPI", () => {
      cy.request({
        method:'POST', 
        url: 'http://gorest.co.in/public/v2/users' ,
        body:{
            name:"Johnn2 Blogs",
            gender:"male",
            email:Math.random().toString(5).substring(2)+"@gmail.com",
            status:"inactive"
        },
        headers:{
            Authorization:auth_token
        }
      })
      .then((response)=>{
         expect(response.status).to.eq(200)
        const userId=response.body.id
         //update user name
         cy.request({
            method:'PUT',
            url: `http://gorest.co.in/public/v2/users/${userId}`,
            body:{
                name:"Jane Doe"
            },
            headers:{
                Authorization:auth_token
            }
         })
         .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.name).to.equal('Jane Doe')

            //delete resource
            cy.request({
                method:'DELETE',
                url:`http://gorest.co.in/public/v2/users/${userId}`,
                headers:{
                    Authorization:auth_token
                }
            })
            .then((response)=> {
               expect(response.status).to.eq(204)
         })
      })
    }) 
})  
})
