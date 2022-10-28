describe('when a request is added', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3000/api/flush_redis')
  })

  it('clears the input adds new feature to feature list', () => {
    cy.visit('http://localhost:3000')
    const inputIdentifier = '[aria-label="Suggest a feature for our roadmap"]'
    const inputField = cy.get(inputIdentifier)
    inputField.type('Dislike count back on YouTube')
    
    cy.get('#request-button').click()
    cy.get(inputIdentifier).should('be.empty')
    cy.get('#requestList').should('have.length', 1);
    cy.get('[aria-label="Feature score"]').should('have.text', 1);
  })
})