Feature: Login for saucedemo.com

  @regression
  Scenario Outline: Successful login with valid credentials

    Given I am on the login page
    When I login with <username> and <password>
    Then I see the inventory page

    Examples:
      | username      | password    |
      | standard_user | secret_sauce|


  Scenario Outline: Unsuccessful login with invalid credentials

    Given I am on the login page
    When I login with <username> and <password>
    Then I see the error: <message>

    Examples:
      | username      | password        | message                                                                   |
      | standard_user | wrong_password  | Epic sadface: Username and password do not match any user in this service |