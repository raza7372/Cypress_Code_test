

describe('test suit', function()
{
    it('first test', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // Invoke('show') is jquery method to show the hidden element or used as mouse hover
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
       
        cy.url().should('include','top')

         // cypress also click forcefully on hidden element 
        cy.contains('Reload').click({force:true})

  
   
   
   
   
   
    })



})