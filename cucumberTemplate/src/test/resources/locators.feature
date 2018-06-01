Feature: test predefined steps in the Cucumber Template 
#more steps are located in the src\test\other folder

  Scenario: demonstrate locator code examples
    When I open demo app
    # first button
    And I highlight the element By.tagname("button")
    # second button
    And I highlight the element 'By.tagname("button")'1

    # first button via cssSelector
    And I highlight the element button
    # second button
    And I highlight the element 'button'1

    #set custom names
    And I set the name main button to the element By.tagname("button")
    And I highlight the element main button

    And I set names to page elements
    And I highlight the element DragNDrop Area
    And I pause 2000 ms


