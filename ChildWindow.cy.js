describe('test suit', function()
{
    it('Child Window', function()
    {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // cypress do not work on seperate child window, child wndow should open in the same tab.
        cy.get("#opentab").invoke("removeAttr", "target").click()

        // For URL 
        cy.url().should('include','rahulshettyacademy')

        // for window navigation
        cy.go('back')

        



        })

    })
        