describe('empty spec', () => {
  it('passes', () => {
    const inputIdentifier = '[aria-label="Suggest a feature for our roadmap"]'
    cy.visit('http://localhost:3000')
    cy.get(inputIdentifier).should('be.empty');
  })
})