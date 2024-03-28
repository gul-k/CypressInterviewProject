/// <reference types="cypress"/>

describe("Verify dropdown", () => {
  it("Select specific values via select dropdown lists", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#dropdowm-menu-1").select("python");
    cy.get("#dropdowm-menu-2").select("testng").should("have.value", "testng"); //select value
    cy.get("#dropdowm-menu-3").select("JQuery").contains("JQuery"); //select text

    cy.get("#dropdowm-menu-2").select("maven").should("have.value", "maven");
    cy.get("#dropdowm-menu-2").select("TestNG").contains("TestNG");
  });

  it("Select specific product via auto complite  dropdown", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list  > div")
      .each(($el, index, $list) => {
        const prod = $el.text();
        const prodAsparagus = "Asparagus";

        if (prod === prodAsparagus) {
          $el.trigger("click");
          cy.get("#submit-button").click();
        }
        cy.url().should("include", prodAsparagus);
      })
      .then(() => {
        cy.get("#myInput").type("g");
        cy.get("#myInputautocomplete-list  > div").each(($el, index, $list) => {
          const prod = $el.text();
          const prodGrapes = "Grapes";

          if (prod === prodGrapes) {
            $el.trigger("click");
            cy.get("#submit-button").click();
            cy.url().should("include", prodGrapes);
          }
        });
      });
  });

  it("Scroll element into view with mouse actions", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView() //scroll until element
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("Drag and drop element with mouse actions", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView() //scroll until element
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#draggable").trigger("mousedown", { which: 1 });
    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  it("Double click on element with mouse actions", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView() //scroll until element
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#double-click").dblclick();
  });

  it("Validate while holding left click element's color is changed", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#actions")
      .scrollIntoView() //scroll until element
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#click-box")
      .trigger("mousedown", { force: true })
      .then(($element) => {
        expect($element).to.have.css("background-color", "rgb(0, 255, 0)"); //html de background yaziyor ama burda background-color yazinca test gecti
      });
    });
  it.only("Select hidden list item after hover over element", () => {
      cy.visit("https://webdriveruniversity.com/");
      cy.get("#actions")
        .scrollIntoView() //scroll until element
        .invoke("removeAttr", "target")
        .click({ force: true });

      cy.get(".dropbtn")
        .contains("Hover Over Me Second!")
        .trigger('mouseover', { which: 1 }).then(()=>{
          cy.get('.dropdown-content').eq(0).trigger('mouseover',{force: true})  //bu sekilde click'lemeyi basardim ve alert cikti
        })
    });
  })