# CucumberTemplateJava
Cucumber Template for Java

This Cucumber template is designed for use with Java, Maven, IntelliJ, and the Gherkin plugin for IntelliJ (https://plugins.jetbrains.com/plugin/9164-gherkin).

It is not necessary to use quotation marks in these Gherkin statements.

The template uses the benefits of the Selenide framework to solve some of the problems in Selenium including 
1) automatic waits, 2) additional locator options, and 3) browser drivers.

Two options are available for locators:

a) By. selenium locators.

    And I click on By.tagname("button")
    
	By.className("value")
	By.cssSelector("value")
	By.id("value")
	By.linkText("value")
	By.name("value")
	By.partialLinkText("value")
	By.tagName("value")
	By.xpath("value")

b) CSS selectors

    And I click on #buttonId

In addition, it is possible to put these locators within single quotes and follow them by a number to obtain an element with that INDEX value.

    And I click on 'By.tagname("button")'3
    And I click on '.button'1

See demo.feature for a working example. Additional tests are in src/other/selfTest.

Selenide offers additional and compound locators such as  

    $("#divMain").$("button")

This code represents the first button in #divMain. 

Standard By. Selenium selectors can also be used:

    $(By.className("class"), 2);

In this case, the 2 represents the index value.

Selenide also offers additional selectors such as

    $$("#multirowTable tr").filterBy(text("Norris"))

Two $$ will return a collection of elements, and a single $ returns a single element.

Learn more: 
http://selenide.org/documentation.html
https://selenide.gitbooks.io/user-guide/content/en/selenide-api/elements-collection.html
https://selenide.gitbooks.io/user-guide/content/en/selenide-api/selectors.html


To use a compound selector such as the above, you can use this Gherkin statement or your own statement:

    I set names to page elements
    
Within the Java code, set the name of the compound locator using the putElementName method.

     putElementName("main button", $("#divMain").$("button") )

A Gherkin statement will then recognize main button.

     I click on main button     

There are 2 categories of statements:
When statements are for setting up the test. (Cucumber doesn't distinguish any difference between the keywords.) Then statements are for assertions. 

When statements

    I open (.*)
    I wait for the page to load  
    I pause (\\d+) ms
    I clear cookies for the current domain
    I delete the cookie named (.*)
    I click on (.*)
    I double-click on (.*)
    I set the browser size to (\\d+) by (\\d+) pixels
    I close all browser tabs except the first tab
    I add (.*) to the inputfield (.*)
    I clear the inputfield (.*)
    I drag element (.*) to element (.*)
    I submit the form (.*)
    I set a cookie (.*) with the value (.*)
    I delete the cookie (.*)
    I type the keys (.*) in element (.*)
    I hold down the (control|shift|alt|command) key and type the key (.*) in element (.*)
    I (accept|dismiss) the (alertbox|confirmbox|prompt)
    I enter the text (.*) into the prompt
    I hover over element (.*)
    I focus on element (.*)
    I move the mouse to element (\\S+) with an offset of (\\d+),(\\d+)
    I move the mouse to element (\\S+)$
    I exit the test
    I test the test
    I highlight the element (.*)
    I println the value (.*)
    I scroll to element (.*)
    I close the last opened (window|tab)
    I focus on the last opened (window|tab)
    I log in with username (.*) and password (.*)
    I select option # (\\d+) in the dropdown element (.*)
    I select the option with the text (.*) in the dropdown element (.*)
    I set the name (.*) to the element (.*)
    I set names to page elements

Then statements

    the element (.*) should( not)* be visible
    the element (.*) should( not)* be enabled
    the element (.*) should( not)* be selected
    the checkbox (.*) should( not)* be checked
    the element (.*) should( not)* exist
    the element (.*) should( not)* have the same text as element (.*)
    the element (.*) should( not)* contain within it this text: (.*)
    the element (.*) should( not)* have exactly this text: (.*)
    the element (.*) should( not)* have any text
    the element (.*) should( not)* be empty
    the browser title should( not)* be (.*)
    the browser URL should( not)* be (.*)
    the browser URL path should( not)* be (.*)
    the browser URL should( not)* contain (.*)
    the css property (.*) of element (.*) should( not)* have the value (.*)
    the attribute (.*) of element (.*) should( not)* have the value (.*)
    the cookie (.*) should( not)* contain the value (.*)
    the cookie (.*) should( not)* exist
    the element (.*) should( not)* be (\\d+)px (wide|tall)
    the element (.*) should( not)* be positioned at (\\d+)px on the (x|y) axis
    (an alertbox|a confirmbox|a prompt) should( not)* be opened
    (an alertbox|a confirmbox|a prompt) should( not)* contain the text (.*)

This project is adapted from the Cucumber boilerplate from Christian Bromann for webdriver.io at https://github.com/webdriverio/cucumber-boilerplate

