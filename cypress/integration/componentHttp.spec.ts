it('Visits checks if home page is rendered correctly', () => {
  cy.visit('localhost:3000')
  cy.contains('Http Component')
})
