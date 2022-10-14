describe('empty spec', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3000/api/flush_redis')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000')
    const inputIdentifier = '[aria-label="Suggest a feature for our roadmap"]'
    const inputField = cy.get(inputIdentifier)
    inputField.type('Dislike count back on YouTube')
    cy.get('#request-button').click()

    // - The request should appear in the request list
    // - The request should automatically have your vote 👍
    // - The vote count on the request should be 1

    // - The input box text should be cleared
    cy.get(inputIdentifier).should('be.empty')
  })
})