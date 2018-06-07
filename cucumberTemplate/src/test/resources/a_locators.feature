Feature: test predefined steps in the Cucumber Template 
#more steps are located in the src\test\other folder

  Scenario: d01 locator code examples
    When I open demo app

      # Various locator examples
    And I highlight the element By.tagname("button")
    And I highlight the element #btnMakeVisible

      # A cssSelector or By locator can use single quotes to add an index value
    And I highlight the element 'By.tagname("button")'1

      #jQuery
    And I highlight the element $('#btnMakeVisible')[0]

      #give names to locators
    And I set the name main button to the element By.tagname("button")
    And I highlight the element main button
    And I set names to page elements
      # for this to work, this code should be in setNamesPageElements.java:
      #    putElementName("DragNDrop Area", $(".container").$("div",1));
    And I highlight the element DragNDrop Area
    And I pause 2000 ms


