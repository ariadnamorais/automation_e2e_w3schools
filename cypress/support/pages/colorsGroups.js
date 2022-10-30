class ColorsGroups {

    black() {
        cy.get(':nth-child(163)')
            .should('contain.text', 'Black')
            .and('contain.text', '#000000')
        cy.get('[bgcolor="#000000"]')
            .should('have.attr', 'bgcolor', '#000000')
    }

    maroon() {
        cy.get(':nth-child(132)')
            .should('contain.text', 'Maroon')
            .and('contain.text', '#800000')
        cy.get('[bgcolor="#800000"]')
            .should('have.attr', 'bgcolor', '#800000')
    }

    gold() {
        cy.get(':nth-child(50)')
            .should('contain.text', 'Gold')
            .and('contain.text', '#FFD700')
        cy.get('[bgcolor="#FFD700"]')
            .should('have.attr', 'bgcolor', '#FFD700')
    }

    cyan() {
        cy.get(':nth-child(88)')
            .should('contain.text', 'Cyan')
            .and('contain.text', '#00FFFF')
        cy.get('[bgcolor="#00FFFF"]')
            .should('have.attr', 'bgcolor', '#00FFFF')
    }

    blue() {
        cy.get(':nth-child(108)')
            .should('contain.text', 'Blue')
            .and('contain.text', '#0000FF')
        cy.get('[bgcolor="#0000FF"]')
            .should('have.attr', 'bgcolor', '#0000FF')
    }

    silver() {
        cy.get(':nth-child(156)')
            .should('contain.text', 'Silver')
            .and('contain.text', '#C0C0C0')
        cy.get('[bgcolor="#C0C0C0"]')
            .should('have.attr', 'bgcolor', '#C0C0C0')
    }

    blueViolet() {
        cy.get(':nth-child(21)')
            .should('contain.text', 'BlueViolet')
            .and('contain.text', '#8A2BE2')
        cy.get('[bgcolor="#8A2BE2"]')
            .should('have.attr', 'bgcolor', '#8A2BE2')
    }
}

export default new ColorsGroups()