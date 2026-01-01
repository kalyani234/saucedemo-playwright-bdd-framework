Feature: Complete Purchase on SauceDemo

  As a standard user
  I want to log in, add a product to cart, and complete checkout
  So that I can verify the full end-to-end e-commerce flow

  Scenario: User logs in, adds backpack to cart, and completes checkout
    Given I am on the SauceDemo login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be on the inventory page

    When I add "Sauce Labs Backpack" to cart
    And I go to the cart
    Then the cart should contain "Sauce Labs Backpack"

    When I click checkout
    And I fill checkout information with first name "Test", last name "Demo", and postal code "123456"
    And I click continue
    Then I should be on the checkout overview page

    When I click finish
    Then I should see the checkout complete message "Checkout: Complete!"