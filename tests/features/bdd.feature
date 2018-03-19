Feature: Hello, World!

Scenario: Greet
    Given the service is up
    When a user gets "/index.html"
    Then they should see "Hello, World!"
