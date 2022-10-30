class HowToModal {

    modalBoxes() {
        cy.get('#leftmenuinnerinner > [href="howto_css_modals.asp"]')
            .click({force: true})
    }
}

export default new HowToModal()