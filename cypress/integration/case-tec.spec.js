// case-tec.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('QA challenge MeuTudo', () => {
        it('entre na pagina', () => {
                cy.visit('https://the-internet.herokuapp.com/challenging_dom')
            })
        it('verifica o título da pagina', function() {
                cy.get('h3').should('be.visible', 'Challenging DOM')
          
            })

        it('clique nos botoes', () => {
            cy.get('.large-2').click()
        })

        it('clique no btn edit 1', () => {
            cy.get(':nth-child(1) > :nth-child(7) > [href="#edit"]').click()
            
        });

        it('clique no btn edit 2', () => {
            cy.get(':nth-child(2) > :nth-child(7) > [href="#edit"]').click()
            
        });

        it('clique no btn edit 3', () => {
            cy.get(':nth-child(3) > :nth-child(7) > [href="#edit"]').click()
            
        });

        it('clique no btn edit 4', () => {
            cy.get(':nth-child(4) > :nth-child(7) > [href="#edit"]').click()
            
        });

        it('clique no btn edit 5', () => {
            cy.get(':nth-child(5) > :nth-child(7) > [href="#edit"]').click()
            
        });

        it('clique no btn edit 6', () => {
            cy.get(':nth-child(6) > :nth-child(7) > [href="#edit"]').click()
            
        });

        it('clique no btn edit 7', () => {
            cy.get(':nth-child(7) > :nth-child(7) > [href="#edit"]').click()
            
        });

        it('clique no btn edit 8', () => {
            cy.get(':nth-child(8) > :nth-child(7) > [href="#edit"]').click()
            
        });

        it('clique no btn edit 9', () => {
            cy.get(':nth-child(9) > :nth-child(7) > [href="#edit"]').click()
            
        });

        it('clique no btn edit 10', () => {
            cy.get(':nth-child(10) > :nth-child(7) > [href="#edit"]').click()
            
        });

        it('clique no btn delete 1', () => {
            cy.get(':nth-child(1) > :nth-child(7) > [href="#delete"]').click()
            
        });

        it('clique no btn delete 2', () => {
            cy.get(':nth-child(2) > :nth-child(7) > [href="#delete"]').click()
            
        });

        it('clique no btn delete 3', () => {
            cy.get(':nth-child(3) > :nth-child(7) > [href="#delete"]').click()
            
        });

        it('clique no btn delete 4', () => {
            cy.get(':nth-child(4) > :nth-child(7) > [href="#delete"]').click()
            
        });

        it('clique no btn delete 5', () => {
            cy.get(':nth-child(5) > :nth-child(7) > [href="#delete"]').click()
            
        });

        it('clique no btn delete 6', () => {
            cy.get(':nth-child(6) > :nth-child(7) > [href="#delete"]').click()
            
        });

        it('clique no btn delete 7', () => {
            cy.get(':nth-child(7) > :nth-child(7) > [href="#delete"]').click()
            
        });

        it('clique no btn delete 8', () => {
            cy.get(':nth-child(8) > :nth-child(7) > [href="#delete"]').click()
            
        });

        it('clique no btn delete 9', () => {
            cy.get(':nth-child(9) > :nth-child(7) > [href="#delete"]').click()
            
        });

        it('clique no btn delete 10', () => {
            cy.get(':nth-child(10) > :nth-child(7) > [href="#delete"]').click()
            
        });

    })