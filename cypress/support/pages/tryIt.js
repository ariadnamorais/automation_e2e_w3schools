class TryIt {

    firstName(firstName) {
        cy.iframe('[name="iframeResult"]')
            .as('iframe')
            .find('[name="fname"]')
            .type('{selectAll}{backspace}' + firstName)
    }

    lastName(lastName) {
        cy.iframe('[name="iframeResult"]')
            .as('iframe')
            .find('[name="lname"]')
            .type('{selectAll}{backspace}' + lastName)
    }

    submit() {
        cy.iframe('[name="iframeResult"]')
            .as('iframe')
            .find('[value="Submit"]')
            .click()
    }
}

export default new TryIt()