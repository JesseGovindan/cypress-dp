describe('empty spec', () => {
  it('shows a validation message when request left blank', () => {
    const inputIdentifier = '[aria-label="Suggest a feature for our roadmap"]'
    cy.visit('http://localhost:3000')
    cy.get(inputIdentifier).clear();
    cy.get('#request-button').click();
    cy.get(`${inputIdentifier}:invalid`)
      .invoke('prop', 'validationMessage')
      .should('equal', 'Stop joling around Njabz, fill in the field!')
  })

  it('does not show a validation message when request is then filled in', () => {
    const inputIdentifier = '[aria-label="Suggest a feature for our roadmap"]'
    cy.visit('http://localhost:3000')
    cy.get(inputIdentifier).clear();
    cy.get('#request-button').click();
    cy.get(inputIdentifier).type('My feature');
    cy.get(`${inputIdentifier}:invalid`).should('not.exist')
  })
})