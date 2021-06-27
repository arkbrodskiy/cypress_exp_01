/// <reference types="Cypress" />

describe('Vineti take home task', () => {
  const targetPhone = 'Samsung galaxy s6'
  var credentials = getCredentials()
  it('Creates a new account in demoblaze.com', () => {
    cy.visit('#')
    cy.get('#signin2').click()
    cy.get('#sign-username').clear().type(credentials['username'], { delay: 100 })
    cy.get('#sign-password').type(credentials['password'], { delay: 100 })
    cy.get('.modal-footer').contains('Sign up').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Sign up successful.')
    })
  })
  
  it('Logs in the created account', () => {
    cy.get('#login2').click()
    cy.get('#loginusername').clear().type(credentials['username'], { delay: 100 })
    cy.get('#loginpassword').type(credentials['password'], { delay: 100 })
    cy.get('.modal-footer').contains('Log in').click()
    cy.get('#nameofuser').should('have.text', 'Welcome ' + credentials['username'])
  })

  it('Adds Samsung Galaxy s6 to the cart', () => {
    cy.get('#tbodyid a').contains(targetPhone).click()
    cy.get('#tbodyid a').contains('Add to cart').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    })
    cy.get('#cartur').click()
    cy.get('#tbodyid .success td').contains(targetPhone).should('have.length', 1)
  })
})

function getCredentials() {
  const digitString = Date.now()
  return {
    username: 'Vineti' + digitString,
    password: 'QA-pro' + digitString
  }
}

