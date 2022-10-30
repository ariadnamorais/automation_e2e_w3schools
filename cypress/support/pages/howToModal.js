class HowToModal {

    modalBoxes() {
        cy.get('#leftmenuinnerinner > [href="howto_css_modals.asp"]')
            .click()
    }
}

export default new HowToModal()