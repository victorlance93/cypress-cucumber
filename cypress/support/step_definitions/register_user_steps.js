/// <reference types="cypress"/>
import home_page from "../pages/home_page";
import { faker } from '@faker-js/faker';
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import register_user_page from "../pages/register_user_page";

const name = faker.person.fullName();
const invalidEmail = faker.animal.horse();
const email = faker.internet.email();

Given("I am on register screen", () => {
    home_page.acessRegister();
}) 

Given("I fill name", () => {
    register_user_page.fillName(name);
}) 

Given("I fill e-mail invalid", () => {
    register_user_page.fillEmail(invalidEmail);
}) 

Given("I fill e-mail valid", () => {
    register_user_page.fillEmail(email);
})

Given("I fill password {string}", () => {
    register_user_page.fillPassword('12345');
}) 

Given("I fill my datas of register", () => {
    register_user_page.fillName(name);
    register_user_page.fillEmail(email);
    register_user_page.fillPassword('123456');
}) 

When('I click on register', () => {
    register_user_page.clickButtonRegister();
}) 

Then('I see the error message {string}', (msg) => {
    register_user_page.checkErrorMessage(msg);
})

Then('I see success message on register', () => {
    register_user_page.checkSuccessMessage(name);
})