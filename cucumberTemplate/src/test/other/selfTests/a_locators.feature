Feature: test predefined steps in the Cucumber Template 
#This demo can be placed in the src\test\other\selfTests folder

  Scenario: a01 locator code examples
    When I open demo app
      # Various locator examples
    And I highlight the element By.tagname("button")
    And I highlight the element #btnMakeVisible

      # A cssSelector or By locator can use single quotes to add an index value
    And I highlight the element 'By.tagname("button")'1

  Scenario: a02 give names to locators
    When I open demo app
      #give names to locators
    When I give the name main button to the locator By.tagname("button")
    And I highlight the element main button
      # This code should be in class e:
      # public static SelenideElement DragNDropArea = $(".container").$("div",1));
    And I highlight the element DragNDropArea
    And I pause 2000 ms


