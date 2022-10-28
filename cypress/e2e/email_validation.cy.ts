describe('email validation', () => {
  const emailInput = '[aria-label="Email for updates"]'

  it('shows a validation message when no email provided', () => {
    cy.visit('http://localhost:3000')
    cy.get('#subscribe').click()
    const emailInput = '[aria-label="Email for updates"]'
    cy.get(`${emailInput}:invalid`)
      .invoke('prop', 'validationMessage')
      .should('equal', 'Stop joling around Njabz, you were supposed to type in "njabulo.dlamini@chillisoft.co.za')
  })

  it('shows a validation message when value provided is not an email address', () => {
    cy.visit('http://localhost:3000')
    cy.get(emailInput).type('njabulo.dlamini')
    cy.get('#subscribe').click()
    cy.get(`${emailInput}:invalid`)
      .invoke('prop', 'validationMessage')
      .should('equal', 'Stop joling around Njabz, you were supposed to type in a proper email address')
  })
})