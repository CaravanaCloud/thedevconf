describe('Visitors visit home', () => {
  it('and view title and subtitle', () => {
    cy.visit('/')

    cy.request('/').should('have.property', 'status', 200)
    cy.contains('h1', 'Garanta já o seu TDC')
    cy.contains('h1', 'Some representative placeholder content for the second slide of the carousel.')
  })
})
