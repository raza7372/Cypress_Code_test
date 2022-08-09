/// <reference types='Cypress' />

describe('test suit', function()
{
    it('first test', function()
    {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)

        
    })

    it('Second test', function()
    {
        // parent child chaining
        //cy.get('.products').find('.product').should('have.length', 4)
        // eq for index and contains for text
        //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("ca")
        cy.wait(2000)
        cy.get('.products').find('.product').each(($el, index, $list) => {

       const textveg= $el.find('h4.product-name').text()
       //cy.log(textveg.includes('Carrot'))
       if(textveg.includes('Carrot'))
       {
        $el.find('button').trigger('click') 


       }

        })
    })    
})