/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
    it("children() to get the children of DOM elements", () => {

      cy.get('.traversal-breadcrumb').children('.active').should('contain','Contact Us')  //active olan child elementi bulduk
    });
  
    it("closest() to validate the closest ancestor DOM element", () => {
      cy.get('.traversal-badge').closest('ul').should('have.class','list-group')
    });
  
    it("eq() to retrieve a specific element based on index", () => {           //drink list ten index olarak 3. icecegi validate etmek icin
      cy.get('.traversal-drinks-list > *').eq(2).should('contain','Milk')
    });
  
    it("filter() to retrieve DOM elements that match a specific selector", () => {     //butun button class olanlari filter edip classinda active olani seciyor 
	    cy.get('.btn-group-toggle >*').filter('.active').should('contain','Button-1')
    });
  
    it("find() to retrieve DOM elements of a given selector", () => {                       //total number of links bulmk icin ul takip eden li atrubutesleri ve onu da takip eden a
        cy.get('.traversal-pagination').find('li').find('a').should('have.length',7)        //tag leri bulup kac tane oldugunu assert ediyoruz. a tag lerde text var 1,2,3...diye giden

    });
  
    it("first() to retrieve the first DOM element within elements ", () => {
      cy.get('.traversal-table > tbody > tr > td').first().should('contain','Andy')          //table daki ilk isim
    });
  
    it("last() to retrieve the last DOM element within elements", () => {               //table daki son isim
      cy.get('.traversal-table > tbody > tr > td').last().should('contain','Scott')
    });
  
    it("nextAll() to get all of the next sibling DOM elements within elements", () => {
       cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length',3)            //listede Tea den sonra 3 tane icecek var
    });
  
    it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
      cy.get('#coffee').nextUntil('#milk')
    });
  
    it("not() to remove DOM element(s) from the set of elements", () => {
      cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class','disabled')
    });
  
    it("parent() To get parent DOM element of elements", () => {
      cy.get('.traversal-mark').parent().should('contain','Lorem ipsum dolor sit amet')
    });
  
    it("parents() to get parents DOM element of elements", () => {
      cy.get('.traversal-cite').parents().should('match','blockquote')                  //siblings diyince page deki butun parents lari aliyor biz sadece text in parents ini istedigimiz icin
                                                                                        //ve onun ki de blockquote atrribute oldugu icin onunla match olmasini verify ediyoruz
    });
  
    it("prev() to get the previous sibling DOM element within elements", () => {
      cy.get('#sugar').prev().contains('Espresso')
    });
  
    it("prevAll() to get all previous sibling DOM elements within elements", () => {
      cy.get('.sales').prevAll().should('have.length',2)
    });
  
    it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
      cy.get('#veggie').prevUntil('#fruits').should('have.length',5)
    });
  
    it.only("siblings() To get all sibling DOM elements of elements", () => {
      cy.get('.btn-group-toggle .active').siblings().should('have.length',3)
    });
 });
  