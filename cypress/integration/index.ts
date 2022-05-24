describe('example test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('shows an empty list', () => {
      cy.get('.test').should('exist')
    })
})
