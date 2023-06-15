/// <reference types="cypress"/>

export default{
    clickButtonRegister(){
        cy.get('#btnRegister')
            .click();
    },

    checkErrorMessage(msg){
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', msg)
    },

    checkSuccessMessage(name) {
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
        cy.get('#swal2-html-container')   
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    },

    fillName(name){
        cy.get('#user')
            .type(name)
    },

    fillEmail(email){
        cy.get('#email')
            .type(email)
    },

    fillPassword(password){
        cy.get('#password')
            .type(password)
    }
}