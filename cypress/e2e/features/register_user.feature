Feature: Register User 
    Me as a customer
    I want to register to the application
    To place a purchase order

Background: Access register screen
    Given I am on register screen 

Scenario: Field name empty
    When I click on register
    Then I see the error message "O campo nome deve ser prenchido"

Scenario: Field e-mail empty
    And I fill name
    When I click on register
    Then I see the error message "O campo e-mail deve ser prenchido corretamente"

Scenario: Field e-mail invalid
    And I fill name
    And I fill e-mail invalid
    When I click on register
    Then I see the error message "O campo e-mail deve ser prenchido corretamente"
Scenario: Field password empty
    And I fill name
    And I fill e-mail valid
    When I click on register
    Then I see the error message "O campo senha deve ter pelo menos 6 dígitos"
Scenario: Field password invalid
    And I fill name
    And I fill e-mail valid
    And I fill password "1234"
    When I click on register
    Then I see the error message "O campo senha deve ter pelo menos 6 dígitos"
Scenario: Register user successfully
    And I fill my datas of register 
    When I click on register
    Then I see success message on register 