/// <reference types="cypress" />
import{ TheInternetPage } from "../../page-objects/the-internet-page"

describe('the-internet test suite', () => {
    const theinternetPage = new TheInternetPage()

    beforeEach(() => {
        theinternetPage.navigate()
    })

    it('navigate to the home page', () => {
        cy.contains('Welcome to the-internet').should('be.visible')
    })

    it('navigate to A/B Testing page', () => {
        cy.contains('A/B Testing').click()
        cy.get('.example h3').should('contain.text', 'A/B Test')
    })

    it.skip('navigate to Basic Auth page', () => {
        cy.request({
            method: 'POST',
            url: 'http://the-internet.herokuapp.com/basic_auth', // baseUrl is prepended to url
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
              Username: 'admin',
              Password: 'admin',
            },
          })
        // cy.contains('Basic Auth').click()
        // cy.on('window:prompt', (str) => {
        //     expect(str).to.equal(`Sign in`)
        // })
         
        // cy.on('window:confirm', (str) => {
        //     expect(str).to.equal(`Sign in`)
        // })
        // cy.on('window:confirm', () => true);
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('prompt')
            cy.contains('Basic Auth').click()
        })
        cy.window().its('prompt').should('be.called') 
    })

    it('broken images', () => {
        cy.contains('Broken Images').click()
        cy.get('div.example [src="asdf.jpg"]').should('be.visible').and(($img) => {
            // "naturalWidth" and "naturalHeight" are set when the image loads
            expect($img[0].naturalWidth).to.be.equal(0)
          })
    })

    it('javascript alerts', () => {
        cy.contains('JavaScript Alerts').click()

        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal(`I am a JS Confirm`)
        })

        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('This is a test text')
            cy.contains('Click for JS Prompt').click()
        })
    })
})