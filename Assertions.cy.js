describe('test suit', function()
{
    it('Assetions', function()
    {

        cy.visit('https://example.cypress.io/').contains('get').click()
        // Implicit Assertion : SHould() Contain
        cy.get('#query-btn').should('contain', 'Button' )

        // Should() Have 
        cy.get('#query-btn').should('have.class', 'query-btn' )

        // Should  be
        cy.get('#query-btn').should('be.visible')
        .should('be.enabled')
       
        // Chaining assertion Should with And

        cy.get('#query-btn').should('be.visible').and('have.class', 'query-btn')

        // Explicit Assertions
        //expect
        expect(true).to.be.true

        let name='eliha'
        expect(name).to.be.equal('eliha')

        // Assert
        assert.equal(4, 4, 'it is equal')


    })


})
