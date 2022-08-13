// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('swap', () => {
    cy.get('[data-cy="swap-input"]')
      .type('1')
  })


  Cypress.Commands.add('receive', () => {
    cy.get('[data-cy="want-input"]')
      .type('1')

  })

  Cypress.Commands.add('bitcoinswap',() => {
    cy.get('[data-cy="swap-dropdown"]').click()
    cy.get('[data-cy="bitcoin-list"] > .flex').click()
      .should('have.text', 'Bitcoin');
  })

  Cypress.Commands.add('ethereumswap',() => {
    cy.get('[data-cy="swap-dropdown"]').click()
    cy.get('[data-cy="ethereum-list"] > .flex').click()
      .should('have.text', 'Ethereum');
  })

  Cypress.Commands.add('tetherswap',() => {
    cy.get('[data-cy="swap-dropdown"]').click()
    cy.get('[data-cy="tether-list"] > .flex').click()
      .should('have.text', 'Tether');
  })

  Cypress.Commands.add('cardanoswap',() => {
    cy.get('[data-cy="swap-dropdown"]').click()
    cy.get('[data-cy="cardano-list"] > .flex').click()
      .should('have.text', 'Cardano');
  })

  Cypress.Commands.add('solanaswap',() => {
    cy.get('[data-cy="swap-dropdown"]').click()
    cy.get('[data-cy="solana-list"] > .flex').click()
      .should('have.text', 'Solana');
  })

  Cypress.Commands.add('dogecoinswap',() => {
    cy.get('[data-cy="swap-dropdown"]').click()
    cy.get('[data-cy="dogecoin-list"] > .flex').click()
      .should('have.text', 'Dogecoin');
  })

  Cypress.Commands.add('bitcoinreceive',() => {
    cy.get('[data-cy="want-dropdown"]').click()
    cy.get('[data-cy="bitcoin-list"] > .flex').click()
      .should('have.text', 'Bitcoin');
  })

  Cypress.Commands.add('ethereumreceive',() => {
    cy.get('[data-cy="want-dropdown"]').click()
    cy.get('[data-cy="ethereum-list"] > .flex').click()
      .should('have.text', 'Ethereum');
  })

  Cypress.Commands.add('tetherreceive',() => {
    cy.get('[data-cy="want-dropdown"]').click()
    cy.get('[data-cy="tether-list"] > .flex').click()
      .should('have.text', 'Tether');
  })

  Cypress.Commands.add('cardanoreceive',() => {
    cy.get('[data-cy="want-dropdown"]').click()
    cy.get('[data-cy="cardano-list"] > .flex').click()
      .should('have.text', 'Cardano');
  })

  Cypress.Commands.add('solanareceive',() => {
    cy.get('[data-cy="want-dropdown"]').click()
    cy.get('[data-cy="solana-list"] > .flex').click()
      .should('have.text', 'Solana');
  })

  Cypress.Commands.add('dogecoinreceive',() => {
    cy.get('[data-cy="want-dropdown"]').click()
    cy.get('[data-cy="dogecoin-list"] > .flex').click()
      .should('have.text', 'Dogecoin');
  })