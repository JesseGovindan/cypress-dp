describe('when no email provided', () => {
  it('shows a email validation message', () => {
    cy.visit('http://localhost:3000')
    cy.get('#subscribe').click()
    const emailInput = '[aria-label="Email for updates"]'
    cy.get(`${emailInput}:invalid`)
      .invoke('prop', 'validationMessage')
      .should('equal', 'Stop joling around Njabz, you were supposed to type in "njabulo.dlamini@chillisoft.co.za')
  })
})