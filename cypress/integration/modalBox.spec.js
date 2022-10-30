/// <reference types="cypress" />
import HomePage from '../support/pages/homePage'
import HowTo from '../support/pages/howTo'
import ModalBoxes from '../support/pages/modalBoxes'

describe('Cenário 01 - Modal Box', () => {

    context('Dado que estou no site w3schools', () => {

        beforeEach(function () {
            cy.visit('')
        })

        context('Quando eu clicar em Tutorials -> Learn How To -> Modal Boxes', () => {

            beforeEach(function () {
                HomePage.tutorials()
                HomePage.learnHowTo()
                HowTo.modalBoxes()
            })

            it('Então devo ser direcionado para How TO - CSS/JS Modal', () => {
                ModalBoxes.url()
            })
        })
    })

    context('Dado que estou na tela How TO - CSS/JS Modal', () => {

        before(function () {
            cy.visit('')
            HomePage.tutorials()
            HomePage.learnHowTo()
            HowTo.modalBoxes()
            ModalBoxes.url()
        })

        context('Quando eu clicar no botão Open Modal', () => {

            before(function () {
                HomePage.tutorials()
                HomePage.learnHowTo()
                HowTo.modalBoxes()
            })

            it('Então o modal deve ser exibido', () => {
                ModalBoxes.openModal()
            })
            it('E no corpo deve conter: "Hello World! Modals are awesome!"', () => {
                cy.get('.w3-modal-content > div.w3-container')
                    .should('have.text', '\n      Hello World!\n      Modals are awesome!\n    ')
            })
        })
    })

    context('Dado que estou visualizando o modal header', () => {

        before(function () {
            cy.visit('')
            HomePage.tutorials()
            HomePage.learnHowTo()
            HowTo.modalBoxes()
            ModalBoxes.url()
            HomePage.tutorials()
            HomePage.learnHowTo()
            cy.get('#leftmenuinnerinner').scrollTo(0, 4000)
            HowTo.modalBoxes()
            ModalBoxes.openModal()
        })

        context('Quando eu clicar no botão [X]', () => {
            before(function () {
                ModalBoxes.closeModal()
            })

            it('Então o modal deve sumir', () => {
                cy.get('.w3-display-container')
                    .should('not.be.visible')
            })
            it('E devo continuar visualizando a tela How TO - CSS/JS Modal', () => {
                ModalBoxes.url()
            })
        })
    })
})