class HowTo {

    modalBoxes() {
        cy.get('#leftmenuinnerinner > [href="howto_css_modals.asp"]')
            .click({force: true})
    }
}

export default new HowTo()