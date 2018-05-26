Feature: Test the Cucumber framework

  Scenario: test highlight and locator function
    When I open demo app
    And I highlight the element 'By.tagname("button")'1
    And I highlight the element By.tagname("button")
    And I highlight the element button
    And I highlight the element 'button'1
    And I pause 2000 ms


