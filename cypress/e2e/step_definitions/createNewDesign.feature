Feature: Design Creation

Background: Login to DesignCrowd
    Given User is at the home page
    When User clicks my account
    And User enters email and password
    And User clicks on login button
    And User is able to successfully login to the account

Scenario: Verify design Category size
    When User clicks on the Create New Design
    And Verifies the design Category list size

Scenario Outline: Verify design Category list names
    When User clicks on the Create New Design
    And Verifies list name
        | Popular  | Social Media Covers | Social Media Posts | Profile Pictures | Brand Identity | Videos | Custom Design |

@smoke
Scenario: Template Search
    When User clicks on the Create New Design
    And Type Food in the Search box
    And Click on Search button
    Then User shoud see Food templates
    When User click on Back To All templates
    Then It navigates back to Create New Design page


Scenario: Custom Design
    When User clicks on the Create New Design
    And  Clicks on the CUSTOm DIMENSION button
    Then A pop up to capture custom dimension appears
    When User enters width and height and clicks CREATE A DESIGN button
    Then A design page with custom width and height appears


Scenario: Design Templates
    When User clicks on the Create New Design
    And the user clicks Valentines Day template button
    Then user lands in Valentines Day Templates page
    When User click on Back To All templates
    Then It navigates back to Create New Design page

@only
Scenario: Social Media Templates
    When User clicks on the Create New Design
    And the user clicks Instagram Story template button
    Then user lands in Templates page
    And the user Verifies check box is selected for Instagram Story filter
    When User click on Back To All templates
    Then It navigates back to Create New Design page

Scenario: Load More Designs
    When User clicks on the Create New Design
    And the user clicks Valentines Day template button
    Then user shoud see 16 images
    When the user scroll down and clicks LOAD MORE DESIGNS button
    Then user should see 32 images
    When the user scroll down and clicks LOAD MORE DESIGNS button
    Then user should see 48 images




