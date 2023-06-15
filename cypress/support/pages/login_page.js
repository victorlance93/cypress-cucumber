/// <reference types="cypress"/>

export default{
    cliclButtonLogin(){
        cy.get('#btnLogin')
            .click();
    },

    checkErrorMessage(msg){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', msg)
    },

    fillEmail(email){
        cy.get('#user')
            .type(email)
    },

    fillPassword(password){
        cy.get('#password')
            .type(password)
    },

    checkSuccessMessage(email){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Login realizado')
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)
    }
}