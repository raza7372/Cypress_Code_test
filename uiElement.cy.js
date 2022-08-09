describe('test suit', function()
{
    it('first test', function()
    {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //Check box
        cy.get("#checkBoxOption1").check().should("be.checked")

        cy.get("#checkBoxOption1").uncheck().should("not.be.checked")
        // Multiple check box selection
        cy.get('[type="checkbox"]').check(['option2','option3'])

        // Static drop down
        cy.get('Select').select("option2")

        //Dyanamic drop down
        cy.get("#autocomplete").type('ind')
        cy.get('.ui-menu-item div').each(($e, index, $list) =>{

            if($e.text()==='India')
            {

                $e.trigger('click')

            }
        })
        cy.get("#autocomplete").should('have.value', 'India')

        //Alerts
        cy.get('#alertbtn').click()
        cy.on("window:alert", (str) =>
        {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })
        
        
        

        cy.get('#confirmbtn').click()
        cy.on("window:confirm", (str) =>
        {
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

    })
})