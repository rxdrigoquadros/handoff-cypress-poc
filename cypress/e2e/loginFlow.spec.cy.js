describe('Login Test', () => {
  let login_phone;
  let sms_validation_code;

  beforeEach(() => {
    // Atribuindo variáveis de ambiente a variáveis locais
    login_phone = Cypress.env('login_phone');
    sms_validation_code = Cypress.env('sms_validation_code');
  });

  it('should login successfully with valid credentials', () => {

    cy.viewport(1920, 1080);

    cy.visit(Cypress.env('baseUrl'));

    //cy.contains('div', 'phone').click();

    cy.get('input[placeholder="Phone"]')
      .type(login_phone);

    cy.contains('button', 'Continue').click();

    cy.url().should('include', '/verify-phone');

    cy.get('input:first')
      .type(sms_validation_code);
    
    cy.contains('button', 'Verify').click();


  });
});
