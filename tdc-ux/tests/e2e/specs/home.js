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

  it("email cannot be blank", () => {
    cy.visit("/");

    cy.get("input[name=name]").type("marcus", { force: true });
    cy.contains("GARANTIR").click({ force: true });
    
    cy.contains("Email é obrigatório.");
  });

  it("email is not valid", () => {
    cy.visit("/");

    cy.get("input[name=name]").type("marcus", { force: true });
    cy.get("input[name=email]").type("marcuspereira", { force: true });
    cy.get("input[name=email_confirm]").type("marcuspereira", { force: true });
    
    cy.contains("GARANTIR").click({ force: true });

    cy.contains("“marcuspereira” não é um e-mail válido.");
  });

  it("email must be longer than 7 characters. ", () => {
    cy.visit("/");

    cy.get("input[name=name]").type("marcus", { force: true });
    cy.get("input[name=email]").type("m@m.me", { force: true });

    cy.get("input[name=email_confirm]").type("m@m.me", { force: true });

    cy.contains("GARANTIR").click({ force: true });

    cy.contains("Email deve ter mais de 7 caracteres.");
  });


});
