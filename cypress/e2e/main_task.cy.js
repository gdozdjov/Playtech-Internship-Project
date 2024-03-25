describe('Main Task', () => {
  it('passes', () => {
    cy.visit('https://www.playtech.ee')
    cy.url().should('eq', 'https://www.playtech.ee/')
  })
})