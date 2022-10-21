describe('max feature length', () => {
  it('shows a warning status when the feature input lenght is greater than 150 characters', () => {
    const inputIdentifier = '[aria-label="Suggest a feature for our roadmap"]'
    cy.visit('http://localhost:3000')
    cy.get(inputIdentifier).type('f'.repeat(150));
    cy.get('#request-button').click();

    cy.get('[role=status]')
      .should('have.text', 'Stop joling around Njabz, too many characters!')})
})