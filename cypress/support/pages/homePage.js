class HomePage {

    tutorials() {
        cy.get('#navbtn_tutorials')
            .click({force: true})
    }

    learnHowTo() {
        cy.contains('Learn How To').click({ force: true })
        cy.wait(500)
    }

    learnColors() {
        cy.contains('Learn Colors').click({ force: true })
        cy.wait(500)
    }

    learnForms() {
        cy.contains('Learn HTML').click({ force: true })
        cy.wait(500)
    }
}

export default new HomePage()