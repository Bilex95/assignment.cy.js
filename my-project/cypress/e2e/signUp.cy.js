// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
describe('signUp',()=> {
    beforeEach(()=> {
        cy.visit('https://cypress-course-apps-signup.vercel.app/');
        

    });
    it('should successfully sign up with valid credential',()=> {
        cy.get('#email-id').type('sammybilex@gmail.com');
       cy.get('#password-id').type('Tobilobab@95');
       cy.get('#select-user-id').select('admin');
       cy.get('#check-me').check();
       cy.get('#btn-submit-id').click();

    })
    
    

}

)