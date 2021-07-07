describe('The Home Page', () => {
  it('Load page successfully', () => {
    cy.visit('/')
  })

  it('Open menu', () => {
    cy.get('.dropbtn').click()
    cy.get('.dropdown-content').find('a').should('have.length', 3)  })

  it('Close menu', () => {
    cy.get('.dropbtn').click()
    cy.get('.dropdown-content').find('a').should('have.length', 0)
  })

  it('Check table title', () => {
    cy.get('[data-testid="title"]').should('contain', 'This is a title')
  })

  it('Increase number', () => {
    cy.get('[data-testid="increase"]').click()
    cy.get('[data-testid="increase"]').should('contain', 'Increase Number')
    cy.get('[data-testid="increase"]').find('span').should('contain', '1')
    cy.get('[data-testid="increase"]').click()
    cy.get('[data-testid="increase"]').find('span').should('contain', '2')
  })

  it('Find the number of elements in the table', () => {
    cy.get('tbody').should('have.length', 1)

    cy.get('thead').within(() => {
      cy.get('tr').should('have.length', 1)
      cy.get('th').should('have.length', 6)
    })

    cy.get('tbody').within(() => {
      cy.get('tr').should('have.length', 3)
    })
  })

})



// describe('My First test', () => {
//   it('visits and clicks', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     cy.url().should('include', '/commands/actions')

//     cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com')
//   })
// })