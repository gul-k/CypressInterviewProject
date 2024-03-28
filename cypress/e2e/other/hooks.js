describe("Hooks", () => {
  before(() => {
    cy.log('runs once before all tests in the block')
  });

  beforeEach(() => {
    cy.log('runs before each test in the block')
     
  });

  afterEach(() => {
    cy.log('runs after each test in the block')
  //   cy.clearCookies();           Cyprees automatically manages the  cookies, so you don't need to do anything manually close 
  // cy.clearLocalStorage();        browser or clear cookies.
  // cy.screenshot('custom-screenshot-name', { capture: 'fullPage', blackout: ['.some-element'] });  take screenshot with custom file name and directory
  });

  after(() => {
    cy.log('runs once after all tests in the block')
    
  });

  it("Example test1", () => {
    cy.log("Example test1!")
  })

  it("Example test2", () => {
    cy.log("Example test2!")
  })
});
