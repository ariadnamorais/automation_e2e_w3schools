class HowTo {

    modalBoxes() {
        cy.get('#leftmenuinnerinner > [href="howto_css_modals.asp"]')
            .click()
    }
}

export default new HowTo()