Feature: test predefined steps in Cucumber Template requiring a visual inspection

  Scenario: b01 test key press
    #visual inspection: in Chrome it works to "select all" in the body, but in Firefox it selects only the text in the form field.
    When I open bit.ly
    And  I type the keys type in here in element #shorten_url
    Then the element #shorten_url should have exactly this text: type in here
    And  I hold down the control key and type the key a in element body
    And  I pause 2000 ms

  Scenario: b02 scroll to element
    #visual inspection: the browser should scroll part-way down the screen
    When  I open acrobat.com
    Then  I scroll to element 'button'3
    Then  I pause 2000 ms

  Scenario: b03 test opening and closing a URL in a new tab
    #the browser should open a new tab and close it
    When  I open bit.ly
    And   in a new window or tab, I open acrobat.com
    And   I click 'button'3
    And   I close the last opened window or tab
    And   I click a
    And   I pause 2000 ms

  Scenario: b04 multi-tab focus
    #the first tab should show first.com
    When  I navigate to hp.com
    When  in a new tab using keystrokes, I open libreoffice.org
    And   in a new window or tab, I open mzl.la
    And   in a new window or tab, I open bing.com
    And   I focus on the first opened window or tab
    And   I open first.com
    And   I pause 2000 ms
    And   I focus on the last opened window or tab
    And   I open last.com
    And   I pause 2000 ms
    And   I close all browser tabs except the first tab

  Scenario: b05 test cookie values
    #visual inspection: the console should list out cookies just prior to the cucumber report
    When  I open apple.com
    And   I println the values of all cookies

