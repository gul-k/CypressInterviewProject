///<reference types ="cypress"/>

describe("HTTP Requests", () => {
  it("GET call", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
      .its("status")
      .should("equal", 200);
  });

  it("POST call", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts/",
      body: {
        title: "The post",
        body: "This is post call",
        userId: 1,
      },
    })
      .its("status")
      .should("equal", 201); // the response status should be 201 Created
  });

  it("PUT call", () => {
    cy.request({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      body: {
        title: "The post Updated",
        body: "This is put call",
        userId: 1,
        id: 1,
      },
    })
      .its("status")
      .should("equal", 200); // the response status should be 200
  });
  
  it("DELETE call", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    })
      .its("status")
      .should("equal", 200); // the response status should be 200
  });
});
