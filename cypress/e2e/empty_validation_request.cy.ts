describe('empty spec', () => {
  it('passes', () => {
    const inputIdentifier = '[aria-label="Suggest a feature for our roadmap"]'
    cy.visit('https://example.cypress.io')
    cy.get(inputIdentifier).should('be.empty');
  })
})