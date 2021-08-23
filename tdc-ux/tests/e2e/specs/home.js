describe('Visitors visit home and', () => {
  it('should be returns status code 200', () => {
    cy.visit('/')

    cy.request('/').should('have.property', 'status', 200)
  })

  it('view basic pass form', () => {
    cy.visit('/')

    cy.request('/').should('have.property', 'status', 200)
    cy.contains('h2', 'GARANTA SEU BASIC PASS FREE AQUI')
  })
})
