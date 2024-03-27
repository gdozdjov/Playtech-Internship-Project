describe('Main Task', () => {

  const playtechWeb = 'https://www.playtech.ee/'
  const playtechWebEt = 'https://www.playtech.ee/et'
  const playtechWebWhoWeAre = 'https://www.playtech.ee/who-we-are'
  const globalPresence = 'Global presence'
  const globalPresenceEt = 'Meie asukohad'


  beforeEach(() => {
    cy.viewport(1280, 800)
    cy.visit(playtechWeb)
  });

  it('Main Task 1-4', () => {
    cy.get('a[href="/who-we-are"]').first().click()
    verifyGlobalPresence()
  });

  it('Bonus Task 1', () => {
    cy.get('a[href="/who-we-are"]').first()
      .click(93, 80, { force: true })
    cy.url().should('eq', playtechWebWhoWeAre)
  });

  it('Bonus Task 4', () => {
    cy.get('.language-select').trigger('mouseover')
    cy.get('a[href="/et"]').click({ force: true })
    cy.url().should('eq', playtechWebEt)
    cy.get('a[href="/meist"]').eq(0).click()
    verifyGlobalPresenceEt()
  });

  function verifyGlobalPresence() {
    cy.get('h2').contains(globalPresence)
      .scrollIntoView() //changes css to opacity: 1
      .should('exist')
      .and('be.visible')
  };

  function verifyGlobalPresenceEt() {
    cy.get('h2').contains(globalPresenceEt)
      .scrollIntoView() //changes to opacity: 1
      .should('exist')
      .and('be.visible')
  };
});



