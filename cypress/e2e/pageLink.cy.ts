describe("Page link from home", () => {
  beforeEach(() => {
    cy.visit("https://study-resource-catalog-c7c6.netlify.app/");
  });

  it("Redirects to login", () => {
    cy.contains("LOGIN").click();
    cy.location("pathname").should("eq", "/login");
  });
});
