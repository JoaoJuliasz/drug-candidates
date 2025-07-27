describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("displays drug cards from the mock API", () => {
    cy.contains("Neurodexin").should("be.visible");
    cy.contains("Cardiostat").should("be.visible");
  });

  it("filters drugs by exact name", () => {
    cy.get('[data-testid="drug-filter"]').type("neurodexin");
    cy.get('[data-testid="drug-card"]').should("have.length", 1);
  });

  it("filters drugs (case insensitive)", () => {
    cy.get('[data-testid="drug-filter"]').type("NEURO");
    cy.get('[data-testid="drug-card"]').should("have.length", 1);
  });

  it("filters drugs (trims whitespace)", () => {
    cy.get('[data-testid="drug-filter"]').type("  neuro  ");
    cy.get('[data-testid="drug-card"]').should("have.length", 1);
  });

  it("filters drugs by non existing drug", () => {
    cy.get('[data-testid="drug-filter"]').type("non-existing-drug");
    cy.get('[data-testid="list-not-found"]').should("be.visible");
  });

  it("should clear search filter on not found button click", () => {
    cy.get('[data-testid="drug-filter"]').type("non-existing-drug");

    cy.get('[data-testid="list-not-found-btn"]').click();
    cy.get('[data-testid="drug-filter"]').should("have.value", "");
  });
});
export {};
