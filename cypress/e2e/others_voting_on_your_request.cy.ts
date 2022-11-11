describe('given someone else voted for your request', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3000/api/flush_redis')
  })

  it('should increase the vote on your request to 2', () => {
    cy.visit('http://localhost:3000');
    const inputIdentifier = '[aria-label="Suggest a feature for our roadmap"]';
    cy.get(inputIdentifier).type('this is amazing');
    cy.get('#request-button').click();

    cy.request(
    {
      url: 'http://localhost:3000/api/vote',
      method: 'POST',
      body: { id: '77a98fe8-bb65-44ec-8f6b-1f818fe02c1d', title: 'this is amazing' },
      headers: { 'x-forwarded-for': '192.168.0.1' }
    });
  })
})