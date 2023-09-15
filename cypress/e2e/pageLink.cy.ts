describe("Page link from home", () => {
  beforeEach(() => {
    cy.visit("https://study-resource-catalog-c7c6.netlify.app/");
    // cy.visit("http://localhost:3000/");
  });

  it("Fetched the users, and logged in as Henry", () => {
    cy.get("select").select("Henry");
    cy.contains("LOGOUT");
  });
});
