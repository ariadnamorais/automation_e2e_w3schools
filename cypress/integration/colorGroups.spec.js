/// <reference types="cypress" />
import HomePage from '../support/pages/homePage'
import ColorsGroups from '../support/pages/colorsGroups'
import Colors from '../support/pages/colors'

describe('Cenário 02 - Color Groups', () => {

    context('Dado que estou no site w3schools', () => {

        beforeEach(function () {
            cy.visit('')
        })

        context('Quando eu clicar em Tutorials -> Learn Colors -> Color Groups', () => {
            beforeEach(function () {
                HomePage.tutorials()
                HomePage.learnColors()
                Colors.colorsGroups()
            })

            it('Então devo ser direcionado para HTML Color Groups', () => {
                Colors.url()
            })
        })
    })

    context('Dado que estou na tela HTML Color Groups', () => {

        before(function () {
            cy.visit('')
            HomePage.tutorials()
            HomePage.learnColors()
            Colors.colorsGroups()
            Colors.url()
        })

        context('Quando eu visualizar as tabelas de cores', () => {

            it('Então a cor "Black", o hexa deve ser igual a #000000', () => {
                ColorsGroups.black()
            })
            it('E a cor "Maroon", o hexa deve ser igual a #800000', () => {
                ColorsGroups.maroon()
            })
            it('E a cor "Gold", o hexa deve ser igual a #FFD700', () => {
                ColorsGroups.gold()
            })
            it('E a cor "Cyan", o hexa deve ser igual a #00FFFF', () => {
                ColorsGroups.cyan()
            })
            it('E a cor "Blue", o hexa deve ser igual a #0000FF', () => {
                ColorsGroups.blue()
            })
            it('E a cor "Silver", o hexa deve ser igual a #C0C0C0', () => {
                ColorsGroups.silver()
            })
            it('E a cor "BlueViolet", o hexa deve ser igual a #8A2BE2', () => {
                ColorsGroups.blueViolet()
            })
        })
    })
})