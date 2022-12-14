describe('user can subscribe to email updates', () => {
  it('notifies user and clears email input', () => {
    cy.visit('http://localhost:3000')
    const inputIdentifier = '[aria-label="Email for updates"]';
    cy.get(inputIdentifier).type('njdlams@gmail.com');

    cy.get('#subscribe').click();
    cy.get(inputIdentifier).should('have.value', '');
    cy.get('[role=status]').should('have.text', 'You are subscribed, stop joling around Njabz!');
  })
})