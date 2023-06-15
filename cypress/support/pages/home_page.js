/// <reference types="cypress"/>

export default{
    acessLogin(){
        cy.visit('/')
            .get('#top_header')
        cy.get('.fa-user')
            .click()    
    },

    acessRegister(){
        cy.visit('/')
            .get('#top_header')
        cy.get('.fa-lock') 
            .click()    
    }
}