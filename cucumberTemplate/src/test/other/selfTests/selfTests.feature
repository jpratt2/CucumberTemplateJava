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
    Then  the css property background-color of element #toggleBackground should not have the value rgb(0, 0, 255)
    And   I double-click #toggleBackground
    Then  the css property background-color of element #toggleBackground should have the value rgb(0, 0, 255)
      #blue

  Scenario: Test browser width
    When  I open bit.ly
    And   I set the browser size to 1024 by 768 pixels
    Then  the browser width should be 1024 pixels

  Scenario: test opening and closing a URL in a new tab
    When  I open bit.ly
    And   in a new window or tab, I open acrobat.com
    And   I click 'button'3
    And   I close the last opened window or tab
    And   I click a
    And   I pause 2000 ms

  Scenario: add some text to an input field
    When  I open demo app
    And   I add 123 test to the inputfield #textinput
    Then  the element #textinput should have exactly this text: 123 test
    And   I pause 2000 ms

  Scenario: add and clear some text in an input field
    When  I open demo app
    Then  the element #textinput should not have any text
    And   I add 123 test to the inputfield #textinput
    Then  the element #textinput should have exactly this text: 123 test
    And   I pause 2000 ms
    And   I clear the inputfield #textinput
    Then  the element #textinput should not have any text
    And   I pause 2000 ms

  Scenario: drag and drop
    When  I open demo app
    Then  the element #droppable should not have exactly this text: Dropped!
    And   I drag element #draggable to element #droppable
    Then  the element #droppable should have exactly this text: Dropped!

  Scenario: submit form and element class
    When  I open demo app
    And   I set the name hiddenMessage to the element By.xpath("//*[@id="formSubmitTest"]/div")
    Then  the element hiddenMessage should have the class hidden
    And   I submit the form #formSubmitTest
    Then  the element hiddenMessage should not have the class hidden

  Scenario: test key press
    When I open bit.ly
    And  I type the keys type in here in element #shorten_url
    Then the element #shorten_url should have exactly this text: type in here
    And  I hold down the control key and type the key a in element body
      #visual inspection: in Chrome it works to "select all" in the body, but in Firefox it selects only the text in the form field.
    And  I pause 3000 ms




