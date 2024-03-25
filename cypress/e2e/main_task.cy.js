describe('Main Task', () => {

  beforeEach(() => {
    cy.viewport(1280, 800)
  });

  it('Main Task 1-4', () => {
    cy.visit('https://www.playtech.ee')
    cy.get('a[href="/who-we-are"]').first().click()
    cy.get('h2').contains('Global presence')
      .should('exist')
      .and('be.visble')
  })

  it.only('Bonus Task 1', () => {
    cy.visit('https://www.playtech.ee')
    cy.get('a[href="/who-we-are"]').first()
      .click(93, 80, { force: true })
    cy.url().should('eq', 'https://www.playtech.ee/who-we-are')
  })

  it('Bonus Task 2', () => {
    
  });
})
