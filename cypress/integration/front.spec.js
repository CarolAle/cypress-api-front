/// <reference types="cypress" />

it('Deve realizar Login com sucesso', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('peron@grunderoakley.com')
    cy.get('#passwd').type('teste')
    cy.get('#SubmitLogin > span').click()
    cy.get('.lnk_wishlist > a > span').should('exist')
})

it('Adicionar produto no carrinho', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    cy.get(':nth-child(1) > .subcategory-image > .img').click()
    cy.get('.left-block > .product-image-container').click()
    cy.get('h1').should('have.text', 'Printed Dress')
    cy.get('.exclusive > span').click()
    cy.get('.layer_cart_product > h2').should('have.text', '\n\t\t\t\t\tProduct successfully added to your shopping cart\n\t\t\t\t')
})