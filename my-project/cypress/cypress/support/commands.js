 let data
  beforeEach(() => {
    cy.visit('https://cypress-course-apps-signup.vercel.app/');

    cy.fixture('example').then((selectorElement) => {
      data = selectorElement;
    });
  });

  Cypress.Commands.add('signup', (userData) => {
  cy.get('data.signup.emailFeild').should('exist').and('be.visible').type('sammybilex@gmail.com');
  cy.get('data.signup.passwordFeild').should('exist').and('be.visible').type('Tobilobab@95');
  cy.get('data.signup.userselectorFeild').should('exist').and('be.visible').select('admin');
  cy.get('data.signup.checkFeild').should('exist').and('be.visible').check();
  cy.get('data.signup.submitFeild').should('exist').and('be.visible').click();

  });