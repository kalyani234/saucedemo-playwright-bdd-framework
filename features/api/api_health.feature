# features/api/api_health.feature

Feature: SauceDemo API Health Checks

  As a tester
  I want to verify correct behavior of key endpoints
  So that I can ensure the application protects routes properly

  Scenario: Login page is publicly accessible
    When I send a GET request to "/"
    Then the response status should be 200
    And the response body should contain "Swag Labs"

  Scenario: Inventory page is protected (unauthenticated access denied)
    When I send a GET request to "/inventory.html"
    Then the response status should be 404

  Scenario: Cart page is protected (unauthenticated access denied)
    When I send a GET request to "/cart.html"
    Then the response status should be 404