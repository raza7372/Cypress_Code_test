describe('test suit', function()
{
    it('first test', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[name="courses"] tr td:nth-child(2)').each(($e, index, $list) =>{
        const txt=$e.text()
        if(txt.includes('Jenkins'))
        {
            //to move to the next sibling next() is used, and it works with get method only.
            // text() is Jquery so it can not be directly used with cyprss, then funstion is used to send promise.
            cy.get('[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price)
            
            {
               const textprice= price.text()
               expect(textprice).to.equal('20')

            })



        }



        })
        
        




    
    
    
    
    
    
    
    
    })






})