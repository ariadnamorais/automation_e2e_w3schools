class ModalBoxes {

    url() {
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/howto/howto_css_modals.asp')
    }

    openModal() {
        cy.get('.w3-dark-grey')
            .click()
    }

    closeModal() {
        cy.get('.w3-display-container > .w3-button')
            .click()
    }
}

export default new ModalBoxes()