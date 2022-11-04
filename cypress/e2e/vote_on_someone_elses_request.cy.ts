
describe("given vote of 1 and vote button clicked", function () {
    beforeEach(() => {
        cy.request('POST', 'http://localhost:3000/api/flush_redis')
    })

    it("should increase vote to 2", function () {
        cy.request(
            {
                url: 'http://localhost:3000/api/create',
                method: 'POST',
                body: { title: 'something specific' },
                headers: { 'x-forwarded-for': '192.34.1.35' }
            });

        const voteIdentifier = '[aria-label="Feature score"]';

        cy.visit('http://localhost:3000')
        cy.get('#requestList').find('.listItem').should('contain.text', 'something specific');
        cy.get(voteIdentifier).first().should('have.text', '1');

        cy.get('#requestList').first().find('button').click();

        cy.get(voteIdentifier).first().should('have.text', '2');
        cy.get('#requestList').first().find('button').should('have.class', 'bg-green-100');
        cy.get('#requestList').first().find('button').should('have.class', 'ring-green-300');
    })
})