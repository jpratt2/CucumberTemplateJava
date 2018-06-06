Feature: test predefined steps in Cucumber Template

  Scenario: Test open and browser URL
    When  I open mzl.la
    Then  the browser URL should contain https://www.mozilla.org/

  Scenario: Test clear cookies for current domain
    When  I open adobe.com
    Then  the cookie check should contain the value true
    And   I clear cookies for the current domain
    Then  the cookie check should not exist

  Scenario: Test delete cookie and cookie should exist
    When  I open adobe.com
    Then  the cookie check should contain the value true
    And   I delete the cookie check
    Then  the cookie check should not exist

  Scenario: set cookie
    When  I open http://seleniumhq.com
    And   I set a cookie test with the value 123test
    Then  the cookie test should exist
    Then  the cookie test should contain the value 123test
    Then  the cookie test should not contain the value test

  Scenario: Test click, pause, visible
    When  I open demo app
      #demo app is in the src/test/other folder
    And   I click #btnMakeVisible
    Then  the element #makeVisible should not be visible
    And   I pause 2500 ms
    Then  the element #makeVisible should be visible

  Scenario: Test double-click, css property
    When  I open demo app
    Then  the css property background-color of element #toggleBackground should not have the value rgba(0, 0, 255, 1)
    And   I double-click #toggleBackground
    Then  the css property background-color of element #toggleBackground should have the value rgba(0, 0, 255, 1)
      #blue

  Scenario: Test browser width
    When  I open bit.ly
    And   I set the browser size to 1024 by 768 px
    Then  the browser width should be 1024 pixels

  Scenario: add some text to an input field
    When  I open demo app
    And   I add 123 test to the inputfield #textinput
    Then  the element #textinput should have exactly this text: 123 test

  Scenario: add and clear some text in an input field
    When  I open demo app
    Then  the element #textinput should not have any text
    And   I add 123 test to the inputfield #textinput
    Then  the element #textinput should have exactly this text: 123 test
    And   I pause 2000 ms
    And   I clear the inputfield #textinput
    Then  the element #textinput should not have any text

  Scenario: drag and drop
    When  I open demo app
    Then  the element #droppable should not have exactly this text: Dropped!
    And   I drag element #draggable to element #droppable
    Then  the element #droppable should have exactly this text: Dropped!

  Scenario: submit form and element class
    When  I open demo app
    And   I set the name hiddenMessage to the element By.xpath("//*[@id="formSubmitTest"]/div")
    Then  the element hiddenMessage should contain the class hidden
    And   I submit the form #formSubmitTest
    Then  the element hiddenMessage should not contain the class hidden

  Scenario: hover effect
    When I open hp.com
    Then the css property color of element #shop_widget should not have the value rgba(0, 125, 186, 1)
    And I hover over element #shop_widget
    Then the css property color of element #shop_widget should have the value rgba(0, 125, 186, 1)

  Scenario: element focus
    When  I open acrobat.com
    And   I focus on element 'button'2
    Then  the css property background-color of element 'button'2 should have the value rgba(0, 90, 190, 1)

  Scenario: select option by order
    When  I open demo app
    And   I pause 2000 ms
    And   I select option # 2 in the dropdown element #selectElementTest
    Then  the element By.name("secondOption") should be selected

  Scenario: select option by text
    When  I open demo app
    And   I select the option with the text Option #3 in the dropdown element #selectElementTest
    Then  the element By.name("thirdOption") should be selected

  Scenario: element visibility
    When  I open demo app
    Then  the element #makeVisible should not be visible
    And   I click #btnMakeVisible
    And   I pause 2500 ms
    Then  the element #makeVisible should be visible

  Scenario: enablement
    When  I open demo app
    Then  the element #waitForEnabledElement should not be enabled
    And   I click #waitForEnabledBtn
    Then  the element #waitForEnabledBtn should be enabled

  Scenario: checkboxes
    When  I open demo app
    Then  the checkbox #waitForCheckedElement should not be checked
    And   I click #waitForCheckedBtn
    Then  the checkbox #waitForCheckedElement should be checked

  Scenario: element existence
    When  I open demo app
    Then  the element #toggleMessage should exist
    Then  the element #doesntExist should not exist

  Scenario: comparing text
    When  I open demo app
    Then  the element #textComparison3 should have the same text as element #textComparison1
    Then  the element #valueDoesContainCucumber should contain within it this text: contains cucumber
    Then  the element #textDoesContainCucumber should have exactly this text: This element contains cucumber
    Then  the element #waitForContainsValueElement should not have any text

  Scenario: browser title
    When  I open demo app
    Then  the browser title should not be DEMO APP1
    And   the browser title should be DEMO APP

  Scenario: browser URLs
    When  I open acrobat.com
    Then  the browser URL should be https://acrobat.adobe.com/us/en/acrobat.html
    And   the browser URL path should be /us/en/acrobat.html
    And   the browser URL should contain us/en
    And   the browser URL should not contain us/en1

  Scenario: test attribute and css property
    When  I open demo app
    Then  the attribute role of element #attributeComparison should have the value note
    And   the css property color of element #cssAttributeComparison should have the value rgba(255, 0, 0, 1)
    And   the css property color of element #cssAttributeComparison should not have the value rgba(255, 0, 255, 1)

  Scenario: element dimensions and position
    When  I open demo app
    Then  the element #droppable should be positioned at 765px on the x axis
    And  the element #droppable should be positioned at 130px on the y axis
    And  the element #droppable should be 200px wide
    And  the element #droppable should be 200px tall
    And  the element #droppable should not be 260px tall

  Scenario: detect element class
    When  I open demo app
    Then  the element #classTest should contain the class class1
    And   the element #classTest should not contain the class class3