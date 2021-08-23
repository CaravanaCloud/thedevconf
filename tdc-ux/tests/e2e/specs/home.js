describe("Visitors visit home and", () => {
  it("should be returns status code 200", () => {
    cy.visit("/");

    cy.request("/").should("have.property", "status", 200);
  });

  it("view basic pass form", () => {
    cy.visit("/");

    cy.contains("h2", "GARANTA SEU BASIC PASS FREE AQUI");
    cy.contains(
      "p",
      " Através do registro simplificado você consegue garantir as suas entradas em apenas alguns minutos e voltar depois para completar os seus dados. Aproveite! "
    );
  });
});
