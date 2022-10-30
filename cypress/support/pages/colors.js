class Colors {

    colorsGroups() {
        cy.get('[href="colors_groups.asp"]')
            .click()
    }

    url() {
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/colors/colors_groups.asp')
    }
}

export default new Colors()