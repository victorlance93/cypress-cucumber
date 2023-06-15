Feature: Login
    Me as a customer
    I want to log in to the application
    To place a purchase order

Background: Access login screen 
     Given I am on login screen 

Scenario: Login with empty email field
    When I click on login
    Then I see the message "E-mail inválido."

Scenario: Login with success
    And I fill e-mail
    When I click on login
    Then I see the message "Senha inválida."

 Scenario: Login with empty password field
    And fill my credencials
    When I click on login
    Then I see success message 

