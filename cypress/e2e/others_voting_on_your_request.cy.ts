describe('given someone else voted for your request', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3000/api/flush_redis')
  })

  it('should increase the vote on your request to 2', () => {
    cy.visit('http://localhost:3000');
    const inputIdentifier = '[aria-label="Suggest a feature for our roadmap"]';
    cy.get(inputIdentifier).type('this is amazing');
    cy.get('#request-button').click();

    cy.request('http://localhost:3000/api/features')
    .then(response => {
      console.log(response)
      return response.body.features
    })
    .then(features => {
      console.log(features)
      cy.request(
      {
        url: 'http://localhost:3000/api/vote',
        method: 'POST',
        body: { id: features[0].id, title: features[0].title },
        headers: { 'x-forwarded-for': '192.168.0.1' }
      })
      .then(response => {
        console.log(response)
        cy.visit('http://localhost:3000');
        cy.get('[aria-label="Feature score"]').should('have.text', '2');
      })
    })
  })
})