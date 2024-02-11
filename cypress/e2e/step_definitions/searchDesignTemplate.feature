Feature: Search Design Templates


Scenario: Search by Category
    Given User is on Test Template search page
    When User select Instagram Category
    Then All the sub-Categories of Instagram should be selected
    And Result template names should match Instagram sub-Category names
    And Result template count should be 16

Scenario: Search by multiple Category
    Given User is on Test Template search page
    When User select Instagram Category
    Then All the sub-Categories of Instagram should be selected
    When User select Facebook Category
    Then All the sub-Categories of Facebook should be selected
    And Result template names should match both Instagram and Facebook sub-Category names
    And Result template count should be 16

Scenario: Filter by a Sub-Category within a Category search
    Given User is on Test Template search page
    When User select Instagram Category
    Then All the sub-Categories of Instagram should be selected
    And User unselects Instagram Post sub-category in Instagram Category
    Then Result template name should not have the Instagram Post sub-Category

Scenario: Load More Design
    Given User is on Test Template search page
    When User select Instagram Category
    Then All the sub-Categories of Instagram should be selected
    And Result template names should match Instagram sub-Category names
    And Result template count should be 16
    And Click on Load More Design
    And Result template count should be 32
    And Result template names should match Instagram sub-Category names

Scenario: Clear All
    Given User is on Test Template search page
    When User select Instagram Category
    Then All the sub-Categories of Instagram should be selected
    When User select Facebook Category
    Then All the sub-Categories of Facebook should be selected
    And Result template names should match both Instagram and Facebook sub-Category names
    And Result template count should be 16
    And Click Clear All
    Then No Checkbox should be selected on Category

Scenario: Edit Template
    Given User is on Test Template search page
    And Click on Edit button
    Then It should navigate to template edit page

Scenario: View Collection Template
    Given User is on Test Template search page
    And Click on View Collection
    Then Select a design type popup should appear

Scenario: View more Category
    Given User is on Test Template search page
    Then It should show only first 6 category
    When User click on View more
    Then User should see more than 6 Categories
    




