/// <reference types="cypress" />
import HomePage from '../support/pages/homePage'
import HtmlForms from '../support/pages/htmlForms'
import Html from '../support/pages/html'
import TryIt from '../support/pages/tryIt'

describe('Cenário 03 - HTML Forms', () => {

    context('Dado que estou no site w3schools', () => {

        beforeEach(function () {
            cy.visit('')
        })

        context('Quando eu clicar em Tutorials -> Learn HTML -> HTML Forms', () => {
            beforeEach(function () {
                HomePage.tutorials()
                HomePage.learnForms()
                Html.htmlForms()
            })

            it('Então devo ser direcionado para HTML Forms', () => {
                Html.url()
            })
        })
    })

    context('Dado que estou na tela HTML Forms', () => {

        before(function () {
            cy.visit('')
            HomePage.tutorials()
            HomePage.learnForms()
            Html.htmlForms()
        })

        context('Quando eu clicar em "Try it yourself" no primeiro exercício', () => {

            const firstName = 'Antonio'
            const lastName = 'Santos'

            it('E quando eu inserir nome, sobrenome e clicar em "Submit"', () => {

                HtmlForms.tryItYourSelf()
                TryIt.firstName(firstName)
                TryIt.lastName(lastName)
                TryIt.submit()
            })

            it('Então a aplicação deve gravar os dados corretamente', () => {
                cy.iframe('[name="iframeResult"]')
                    .as('iframe')
                    .find('[class="w3-container w3-large w3-border"]')
                    .should('contain.text', firstName)
                    .should('contain.text', lastName)
            })
        })
    })
})