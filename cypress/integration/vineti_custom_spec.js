/// <reference types="Cypress" />

describe('Vineti take home task implemented using customized commands', () => {
  
  it('Creates a new account in demoblaze.com, logs in and adds Samsung galaxy s6 to the cart', () => {
    const credentials = generateCredentials()
    cy.signUp(credentials['username'], credentials['password'])
    cy.login(credentials['username'], credentials['password'])
    cy.addItemToCart('Samsung galaxy s6')
  })
  
  
function generateCredentials() {
  const digitString = Date.now()
  return {
    username: 'Vineti' + digitString,
    password: 'QA-pro' + digitString
    }
  }
})
