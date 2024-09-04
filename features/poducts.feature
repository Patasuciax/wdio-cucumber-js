Feature: Related to the inventory and product details

  Scenario Outline: Navigate to products page
    Given I am on the login page
    When I login with <username> and <password>
    Then I see the inventory page
    And The product <product_name> displays <product_price> with the description <product_description>

    Examples:
      | username      | password    | product_name            | product_price | product_description                                                                                                                                                   | 
      | standard_user | secret_sauce| Sauce Labs Backpack     | $29.99         | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.                                                     |
      | standard_user | secret_sauce| Sauce Labs Bike Light   | $9.99          | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.       |
      | standard_user | secret_sauce| Sauce Labs Bolt T-Shirt | $15.99         | Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.                       |
      | standard_user | secret_sauce| Sauce Labs Fleece Jacket| $49.99         | It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.|
      | standard_user | secret_sauce| Sauce Labs Onesie       | $7.99          | Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.       |
      | standard_user | secret_sauce| Test.allTheThings() T-Shirt (Red)           | $15.99         | This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.             |

  Scenario Outline: Add product to cart
    Given I am on the login page
    When I login with <username> and <password>
    And I add <quantity> to the shopping cart
    Then Shopping cart displays <quantity> products

    Examples:
    | username      | password    | quantity  |
    | standard_user | secret_sauce| 6         |
