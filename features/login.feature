Feature: Login for saucedemo.com

  Scenario Outline: Successful login with valid credentials

    Given I am on the login page
    When I login with <username> and <password>
    Then I see the products page

    Examples:
      | username      | password    |
      | standard_user | secret_sauce|

