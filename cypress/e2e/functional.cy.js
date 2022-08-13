context("La Coco Crypto Exchange", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should('include', 'cake-la-coco-exchange')
    });

    it("Verify store name and current date/time", () => {
        cy.get('.font-extrabold')
          .should('have.text', 'La Coco Exchange')
          .clock();

    });

    it("Verify user can choose these cryptocurrencies BTC, ETH, USDT, DFI, DOGE in swap field", () => {
        cy.get('[data-cy="swap-dropdown"]').click()
          .get('[data-cy="tether-list"] > .flex').click()
          .should('have.text', 'Tether');

    });

    it("Verify user can choose these cryptocurrencies BTC, ETH, USDT, DFI, DOGE in buy field", () => {
        cy.get('[data-cy="want-dropdown"]').click()
          .get('[data-cy="solana-list"] > .flex').click()
          .should('have.text', 'Solana');

    });

    it("User can type in token to swap field", () => {
        cy.swap()
    });

    it("User can type in token to buy field", () => {
        cy.receive()
    });

    it("User can change number in to swap field, and to buy field will adjust", () => {
        cy.swap().clear()
          .get('[data-cy="swap-input"]')
          .type('5')
    });

    it("User can change number in to buy field, and to swap field will adjust", () => {
        cy.receive().clear()
          .get('[data-cy="want-input"]')
          .type('5')
    });

    it("User can switch cryptocurrency using swap button", () =>{
        cy.swap()
          .get('[data-cy="swap-button"]').click()
          .get('[data-cy="swap-button"]').click()
    });

    it("User cannot select same currecy for both fields", () => {
        cy.bitcoinswap()
          .get('[data-cy="want-dropdown"]').click()
          .should('not.have.text', 'bitcoin');
    });

    it("User e2e journey", () => {
        cy.solanaswap()
        cy.dogecoinreceive()
          .get('[data-cy="swap-input"]')
          .type('5')
          .get('[data-cy="want-input"]').clear()
          .type('12');
  });

  })