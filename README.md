# Cucumber Template for Java
	
This Cucumber template is designed for use with Java, Maven, IntelliJ, and the Gherkin plugin for IntelliJ (https://plugins.jetbrains.com/plugin/9164-gherkin). It has over 50 predefined statements so you can immediately start writing tests.

The template uses the benefits of the Selenide framework to solve some of the problems in Selenium including 
1) automatic waits, 2) additional locator options, and 3) browser drivers.

# Locators
Three options are available for locators in the Gherkin syntax:

a) By. selenium locators.

    And I click By.tagname("button")
 
 Additional options:
 
		By.className("value")
		By.cssSelector("value")
		By.id("value")
		By.linkText("value")
		By.name("value")
		By.partialLinkText("value")
		By.tagName("value")
		By.xpath("value")     Example: By.xpath("//*[@id="formSubmitTest"]/div")  Note that internal quotes are not escaped.

b) CSS selectors

    And I click #buttonId
    And I click body > div > div:nth-child(4)
    
c) jQuery locators
    
    And I click $('#btnMakeVisible')[0]
    
Note the [0] at the end for the index value; jQuery returns a collection of elements.

The automatic wait occurs only for By selectors and CSS selectors, but not for jQuery selectors.

It is possible to put By locator and cssSelectors within single quotes and follow them by a number to obtain an element with that INDEX value.

    And I click 'By.tagname("button")'3
    And I click '.button'1

It is not necessary to use quotation marks to denote strings in these Gherkin statements.

See src/test/resources/locators.feature for a working example. Additional tests are in src/other/selfTest.

Selenide offers the ability to chain locator code. For example:  

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
    
Within the Java code for @When("I set names to page elements"), you can set the name of compound locators using the putElementName method.

     putElementName("main button", $("#divMain").$("button") )

A Gherkin statement will then recognize main button.

     I click main button     

# Predefined Statements
There are 2 categories of statements. When statements are for setting up the test. Then statements are for assertions. (However, this is for readability only; Cucumber doesn't distinguish between them.)

When statements

    I open (.*)
    I navigate to (.*)
    in a new window or tab, I open (.*)
    in a new tab using keystrokes, I open (.*)
    I go to the base URL
    I wait for the page to load  
    I pause (\\d+) ms
    I clear cookies for the current domain
    I clear all cookies in Chrome
    I delete the cookie named (.*)
    I click (.*)
    I double-click (.*)
    I set the browser size to (\\d+) by (\\d+) pixels
    I set the browser width to (\\d+)px
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
    I hover over element (.*)       (Note: this requires the element to be visible on the page for CSS to update.)
    I focus on element (.*)
    I move the mouse to element (\\S+) with an offset of (\\d+),(\\d+)
    I move the mouse to element (\\S+)$
    I scroll to element (.*)
    I scroll (\d+) pixels on the (x|y) axis
    I scroll to the top
    I scroll to the x,y value (\d+),(\d+)
    I close the browser
    I close the last opened window or tab
    I focus on the first opened window or tab
    I focus on the last opened window or tab
    I log in with username (.*) and password (.*)
    I select option # (\\d+) in the dropdown element (.*)
    I select the option with the text (.*) in the dropdown element (.*)
    I set the name (.*) to the element (.*)
    I set names to page elements
    I refresh the page
    I test some code
    I stop the test
    I highlight the element (.*)
    I println the values of all cookies
    I send the alert (.*)

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
    the (alertbox|confirmbox|prompt) should( not)* be opened
    the (alertbox|confirmbox|prompt) should( not)* contain the text (.*)
    the browser width should be (\\d+) pixels
    the element (.*) should( not)* contain the class (.*)

# Miscellaneous

This project is adapted from the Cucumber boilerplate from Christian Bromann for webdriver.io at https://github.com/webdriverio/cucumber-boilerplate

----

Default settings such as browser and base URL are set in the src/test/java/runTest.java file.

----
For these steps

    I clear all cookies in Chrome
    in a new tab using keystrokes, I open (.*)

There are some special requirements:
1) Only one instance of the browser can be running at a time.
2) It uses the robots class to send keystrokes, so it is necessary to let the browser window remain selected.
		
----

For an installable version of Maven on Windows, consider https://installmaven.weebly.com/

----

Command line switches to launch browsers in Selenide:

    mvn clean test -P chrome
    mvn clean test -P firefox
    mvn clean test -P ie
    mvn clean test -P edge
    mvn clean test -P phantomjs
    mvn clean test -P htmlunit
    mvn clean test -P safari

----    

To run a single scenario from the command line, add a tag such as @this before the Scenario.

    mvn test -Dcucumber.options="--tags @this"
    
Or you may use the scenario name:

    mvn test -Dcucumber.options="--name 'Test browser width'"

In Windows powershell, it is necessary to escape the -D with a backtick.

    mvn test `-Dcucumber.options="--tags @this"  
    
----
A suggestion for naming scenarios:

*You may want to prefix the names of files with letters such as a_filename, b_file, etc.
*The scenarios can also be named and numbered to match this prefix.

For example:

    Scenario: a01 test details here
    
To launch the test by id #:

    mvn test -Dcucumber.options="--name 'a01'"  
    
No wildcard character is required.
Similarly, to launch all scenarios that start with the letter 'a':

     mvn test -Dcucumber.options="--name 'a'"  

Again, a backtick is required before the -D if you use Powershell.

----

For debugging, these methods are available:

    printVal(value)
    alertVal(value)
    consoleLogVal(value)
    highlight(locator)
    stopTest()
    
----

You can use "base url" or "demo app" in any of the open URL statements

    I open base url
    I open demo app
    
It is not required to have the http:// in every URL. A domain name is enough.

----
A typical Cucumber setup:
The step statements should be in src/test/java
The .feature files should be in src/test/resources
