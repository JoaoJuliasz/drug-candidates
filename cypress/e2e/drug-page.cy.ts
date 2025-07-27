describe("Drug page", () => {
  it("displays drug page from the first drug on the mock API", () => {
    cy.visit("/dc-001");
    cy.contains("Neurodexin").should("be.visible");
    cy.contains("Mechanism Of Action").should("exist");
    cy.contains("Side Effects").should("exist");
  });

  it("should go back to list page on 'Back to list' click", () => {
    cy.visit("/dc-001");
    cy.get('[data-testid="back-btn"]').click();
    cy.get('[data-testid="drug-filter"]').should("be.visible");
  });

  it("should go back to list page on with search value when it has query params", () => {
    cy.visit("/dc-001?q=neurodexin");
    cy.get('[data-testid="back-btn"]').click();
    cy.get('[data-testid="drug-filter"]').should("have.value", "neurodexin");
    cy.contains("Neurodexin").should("be.visible");
  });

  it("should display not found page", () => {
    cy.visit("/not-id");
    cy.get('[data-testid="drug-not-found"]').should("be.visible");
  });

  it("should navigate back to list on not found button click", () => {
    cy.visit("/not-id");
    cy.get('[data-testid="drug-not-found"]').should("be.visible");
    cy.get('[data-testid="drug-not-found-btn"]').click();
    cy.get('[data-testid="drug-filter"]').should("be.visible");
  });
});

export {};
