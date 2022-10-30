class Html {

    htmlForms() {
        cy.get('#leftmenuinnerinner').scrollTo(0, 4000)
        cy.get('[href="html_forms.asp"]')
            .click()
    }

    url() {
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/html/html_forms.asp')
    }
}

export default new Html()