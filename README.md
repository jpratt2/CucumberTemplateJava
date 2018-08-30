# Cucumber Template for Java
	
This Cucumber template is designed for use with Java, Maven, IntelliJ, and the Gherkin plugin for IntelliJ (https://plugins.jetbrains.com/plugin/9164-gherkin). It has over 50 predefined statements so you can immediately start writing tests. 

The template uses the benefits of the Selenide framework to solve some of the problems in Selenium including (1) automatic waits, (2) additional locator options, and (3) browser drivers. It also offers the ability of recording video of the test using the HYFY.io plugin for Chrome.

# Locators
Four options are available for locators in the Gherkin syntax:

a) Selenide locators declared in Locators.java. 

b) By. selenium locators.

    And I click By.tagname("button")
 
   Additional options:
 
		By.className("value")
		By.cssSelector("value")
		By.id("value")
		By.linkText("value")
		By.name("value")
		By.partialLinkText("value")
		By.tagName("value")
		By.xpath("value")     Example: And I click By.xpath("//*[@id="formSubmitTest"]/div")  
		                      Internal quotes are not escaped when used in a Gherkin statement.

c) CSS selectors

    And I click #buttonId
    And I click body > div > div:nth-child(4)
    
d) jQuery locators
    
    And I click $('#btnMakeVisible')[0]      
    
Note the [0] at the end for the index value because jQuery returns a collection of elements. Also note that single quotes are used.
The automatic wait occurs only for By selectors and CSS selectors, but not for jQuery selectors.

To get an element that isn't first, it is possible to put a By locator or a cssSelector within single quotes and follow it by a number to obtain the element with that INDEX value.

    And I click 'By.tagname("button")'3
    And I click '.button'1

It is not necessary to use quotation marks to denote strings in these Gherkin statements.

See src/test/resources/a_locators.feature for a working example. Additional tests are in src/other/selfTest.

# Selenide locators in Java 

Selenide offers the ability to chain locator code. For example:  

    $("#divMain").$("button", 3)

This code represents the fourth button in #divMain. 

Selenide also offers additional selectors such as

    $$("#multirowTable tr").filterBy(text("Norris"))

Two $$ will return a collection of elements, and a single $ returns a single element.

Learn more: 
http://selenide.org/documentation.html
https://selenide.gitbooks.io/user-guide/content/en/selenide-api/elements-collection.html
https://selenide.gitbooks.io/user-guide/content/en/selenide-api/selectors.html
  
# Declared Locators

You can declare public static variables in the Locators class for Selenide locators. Superior to page objects, named locators can be used across multiple pages. (In Selenide, the actual web element isn't obtained until an action is performed on the locator, such as a click().)

    public static mainButton = $("#divMain").$("button") 
 
Then, in your Gherkin statements, you can refer to this variable name.

    I click mainButton  

In java code, the variable will be a property of the Locators class.

    Locators.mainButton.click();
    
You can also use Gherkin statements to set names to string selectors.

    I give the name main button to the locator By.tagname("button")    

A Gherkin statement will then recognize main button.

    And I highlight the element main button

# Predefined Statements
There are 3 main categories of statements. When statements are for setting up the test. Then statements are for assertions. Given statements prepare the test environment. (However, this is for readability only; Cucumber doesn't distinguish between them.)

When statements

    I open (.*)
    I navigate to (.*)
    in a new window or tab, I open (.*)
    in a new tab using keystrokes, I open (.*)
    I go to the base URL                  Note: all of the "open" statements can use this term: base url.
    I wait for the page to load  
    I pause (\\d+) ms
    I clear cookies for the current domain
    I clear all cookies in Chrome
    I set a cookie (.*) with the value (.*)
    I delete the cookie (.*)
    I println the values of all cookies
    I click (.*)
    I double-click (.*)
    I set the browser size to (\\d+) by (\\d+) pixels
    I set the browser width to (\\d+)px
    I set the browser size to desktop 1366 x 768
    I set the browser size to mobile 360 x 640
    I close all browser tabs except the first tab
    I add (.*) to the inputfield (.*)
    I clear the inputfield (.*)
    I drag element (.*) to element (.*)
    I submit the form (.*)
    I type the keys (.*) in element (.*)
    I press Enter in element (.*)
    I hold down the (control|shift|alt|command) key and type the key (.*) in element (.*)
    I (accept|dismiss) the (alertbox|confirmbox|prompt)
    I enter the text (.*) into the prompt
    I hover over element (.*)         Note: this requires the element to be visible.
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
    I refresh the page
    I test some code
    I stop the test
    I highlight the element (.*)
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
    the element (.*) should( not)* contain the class (.*)
    the element (.*) should( not)* be (\\d+)px (wide|tall)
    the element (.*) should( not)* be positioned at (\\d+)px on the (x|y) axis
    the css property (.*) of element (.*) should( not)* have the value (.*)
    the attribute (.*) of element (.*) should( not)* have the value (.*)
    the browser title should( not)* be (.*)
    the browser URL should( not)* be (.*)
    the browser URL path should( not)* be (.*)
    the browser URL should( not)* contain (.*)
    the browser width should be (\\d+) pixels
    the cookie (.*) should( not)* contain the value (.*)
    the cookie (.*) should( not)* exist
    the (alertbox|confirmbox|prompt) should( not)* be opened
    the (alertbox|confirmbox|prompt) should( not)* contain the text (.*)
    
Given statements

    I give the name (.*) to the locator (.*)
    I launch Chrome to record video
    I start recording video
    I stop recording video

# Miscellaneous

This project is adapted from the Cucumber boilerplate from Christian Bromann for webdriver.io at https://github.com/webdriverio/cucumber-boilerplate

----

Default settings such as browser and base URL are set in the src/test/java/RunTest.java file.

----

To record tests on video, the HYFY.io plugin is used in Chrome.
This Given statement is designed to be the first statement of the test:

    I launch Chrome to record video
    
These statements then can be used:

    I start recording video
    I stop recording video
    
The HYFYvideo class has an upload time-limit setting with a default value of 15 seconds.  It also needs the username and password entered which can be obtained at https://app.hyfy.io/accounts/login/ with "Sign up using email".

More details are available at http://hyfy.io/automate

----
For these steps

    I clear all cookies in Chrome
    in a new tab using keystrokes, I open (.*)

there are some special requirements:
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

To run a special list of scenarios from the command line, add a @tag before the Scenario.

    @special
    Scenario: test
    
Maven command line to run this list:

    mvn test -Dcucumber.options="--tags @special"
    
In Windows powershell, it is necessary to escape the -D with a backtick `.

    mvn test `-Dcucumber.options="--tags @special"  

read more: https://github.com/cucumber/cucumber/wiki/Tags

----

To run a single test by name:

   mvn test -Dcucumber.options="--name 'Test browser width'"

----

A potential naming convention:

    Prefix the names of files with letters such as a_filename, b_file, etc.
    The scenarios can also be numbered to match this prefix.

For example:

    Scenario: a01 test name
    Scenario: a02 test name2
    
To launch the test, you need only to use the name of the ID:

    mvn test -Dcucumber.options="--name 'a01'"  
    
No wildcard character is required.
Similarly, to launch all scenarios starting with "a":

     mvn test `-Dcucumber.options="--name '^a'"  

NOTE: there is a ^ before the "a". This syntax of ^ only works in Windows if you are using Powershell. Again, a backtick is required before the -D if you use Powershell.

----

For debugging, these methods are available:

    printVal(value)
    alertVal(value)
    consoleLogVal(value)
    highlight(locator)
    stopTest()
    
----

You can use "base url" or "demo app" in any of the "open URL" statements

    I open base url
    I open demo app
    
It is not necessary to have the http:// in the URL.

----

This template uses a typical Cucumber folder structure.
The step statements are located in src/test/java.
The .feature files are located in src/test/resources.
Cucumber tutorial: https://github.com/machzqcq/cucumber-jvm-template.

----

If you want to use a jQuery locator in your java code, you can use it in getElement() as a string. Any of the Gherkin string locators can be passed in this way:

    SelenideElement element = getElement("$('btnMakeVisible')[0]");
    


