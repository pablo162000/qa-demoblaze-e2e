describe('Flujo de compra E2E - Demoblaze', () => {
  it('Agrega dos productos y finaliza la compra', () => {

    // Primer Producto
    cy.visit('https://www.demoblaze.com')

    cy.contains('a', 'Samsung galaxy s6').click()
    cy.contains('a', 'Add to cart').click()

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added')
    })

    cy.visit('https://www.demoblaze.com')


    // Segundo Producto
    // 3. Agregar segundo producto
    cy.contains('a', 'Nokia lumia 1520').click()

    cy.contains('Add to cart').click()

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added')
    })

    // Ver el carrito

    cy.contains('a', 'Cart').click()
    cy.contains('Samsung galaxy s6')
    cy.contains('Nokia lumia 1520')

    cy.contains('button', 'Place Order').click()
    cy.get('#name').type('Pablo S')
    cy.get('#country').type('Ecuador')
    cy.get('#city').type('Quito')
    cy.get('#card').type('4111111111111111')
    cy.get('#month').type('12')
    cy.get('#year').type('2025')

    // Comprar
    cy.contains('button', 'Purchase').click()
    cy.contains('Thank you for your purchase!')
    cy.contains('button', 'OK').click()

  })


})