Cypress.Commands.add('signUp', (username, password) => {
  cy.visit('#')
  cy.get('#signin2').click()
  cy.get('#sign-username').clear().type(username, { delay: 100 })
  cy.get('#sign-password').type(password, { delay: 100 })
  cy.get('.modal-footer').contains('Sign up').click()
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Sign up successful.')
    }) 
  })

Cypress.Commands.add('login', (username, password) => {
  cy.visit('#')
  cy.get('#login2').click()
  cy.get('#loginusername').clear().type(username, { delay: 100 })
  cy.get('#loginpassword').type(password, { delay: 100 })
  cy.get('.modal-footer').contains('Log in').click()
  cy.get('#nameofuser').should('have.text', 'Welcome ' + username)
  })

Cypress.Commands.add('addItemToCart', (item) => {
  cy.get('#tbodyid a').contains(item).click()
    cy.get('#tbodyid a').contains('Add to cart').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    })
    cy.get('#cartur').click()
    cy.get('#tbodyid .success td').contains(item).should('have.length', 1)
  })
