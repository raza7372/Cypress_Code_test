

describe('fixture', function()
{
   
    beforeEach(function() {     // Before hook will run once before all the it or test in the class
        cy.fixture("info").then(function(data) // fixture is use for data driven save in the fixture folder
      {                                         // fixture file is in Json format

        this.data=data                          // to use data in the test case / out of this loop
      })
       
      })

    it('Datadriven', function()
    {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get('Select').select(this.data.gender)

        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)

    })
// Custom command 
 it('CustomCommand', function()
    {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(2) > .nav-link').click()
        // Support has a file for custom command

        this.data.productName.forEach(function(element)
        {

                cy.ProductSelect(element)

            
        });
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        cy.get(':nth-child(5) > :nth-child(5) > .btn').click()

        cy.get('#country').type('pak')
       	
       // cypress.Config('defaultCommandTimeout', 8000)
       cy.get('.suggestions > ul > li > a', {timeout:8000}).click()
       // cy.get('.suggestions > ul > li > a').click()
       cy.get('#checkbox2').click({force: true})
       cy.get('.ng-untouched > .btn').click()
       cy.get('.alert').should('include.text', 'Success')
       
    /*   cy.get('.alert').then(function(element)
       {
      const exp=  element.text()
        expect(exp.includes("Success")).to.be.true

       }) */
       
    
})
})
