class HtmlForms {

    tryItYourSelf() {
        cy.get('#main > :nth-child(7) > .w3-btn')
            .invoke('removeAttr', 'target')
            .click()
    }
}

export default new HtmlForms()