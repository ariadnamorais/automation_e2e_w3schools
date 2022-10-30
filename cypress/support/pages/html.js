class Html {

    htmlForms() {
        cy.get('[href="html_forms.asp"]')
            .click()
    }

    url() {
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/html/html_forms.asp')
    }
}

export default new Html()