describe('empty spec', () => {
  it('passes', () => {
    const inputIdentifier = '[aria-label="Suggest a feature for our roadmap"]'
    cy.visit('http://localhost:3000')
    cy.get(inputIdentifier).clear();
    cy.get('#request-button').click();
    cy.get(`${inputIdentifier}:invalid`)
    .invoke('prop', 'validationMessage')
    .should('equal', 'Please fill out this field.')
  })
})