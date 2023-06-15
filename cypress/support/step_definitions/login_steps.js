/// <reference types="cypress"/>
import home_page from "../pages/home_page";
import login_page from "../pages/login_page";
import { faker } from '@faker-js/faker';
import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"

const email = faker.internet.email();
const password = faker.internet.password()

Given("I am on login screen", () => {
home_page.acessLogin();
});

Given("I fill e-mail", () => {
login_page.fillEmail(email); 
});

Given("fill my credencials", () => {
    login_page.fillEmail(email); 
    login_page.fillPassword(password); 
    });

When("I click on login", () => {
login_page.cliclButtonLogin();
});

Then("I see the message {string}", (msg) => {
    login_page.checkErrorMessage(msg);
});

Then("I see success message",  () => {
 login_page.checkSuccessMessage(email);
});