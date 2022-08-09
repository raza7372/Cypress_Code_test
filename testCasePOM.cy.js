
import HomePage from "../PageObject/HomePgae.cy";


describe('fixture', function () {

    beforeEach(function () {
        cy.fixture("info").then(function (data) {

            this.data = data
        })

    })

    it('POM', function () {
        const homePage = new HomePage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        homePage.getName().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        homePage.getTwoWayData().should('have.value', this.data.name)
        homePage.getShopTab().click()



    })

})