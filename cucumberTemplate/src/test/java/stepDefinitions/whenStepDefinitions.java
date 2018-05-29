package stepDefinitions;

import com.codeborne.selenide.SelenideElement;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;

public class whenStepDefinitions extends library {
  //"When" statements are for test set up

  @When("I open (.*)")
  public void openURL(String URL) {
    if (URL.equals("demo app")) {
      open("file:///" + System.getProperty("user.dir") + "/src/test/other/demo-app/index.html");
    } else {
      try {
        open(URL);
      } catch (Exception ex) {
        open("http://" + URL);
      }
    }
  }

  @When("I wait for the page to load")
  public void pageFinishLoad() {
    waitPageLoad();
  }

  @When("I pause (\\d+) ms")
  public void pause(Integer milliseconds) {
    sleep(milliseconds);
  }

  @When("I clear cookies for the current domain")
  public void clearCookiesCurrentDomain() {
    clearBrowserCookies();
  }

  @When("I delete the cookie named (.*)")
  public void cookieValue(String cookieName) {
    getWebDriver().manage().deleteCookieNamed(cookieName);
  }

  @When("I click on (.*)")
  public void clickElement(String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    tabCountBeforeClick = getWebDriver().getWindowHandles().size();
    executeJavaScript("arguments[0].click();", element);//sometimes Chrome requires this for the "element not clickable" error
  }

  @When("I double-click on (.*)")
  public void doubleClickElement(String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    tabCountBeforeClick = getWebDriver().getWindowHandles().size();
    element.doubleClick();
  }

  @When("I set the browser size to (\\d+) by (\\d+) pixels")
  public void setBrowserSize(Integer xValue, Integer yValue) {
    Dimension dimensions = new Dimension(420, 600);
    getWebDriver().manage().window().setSize(dimensions);
  }

  @When("I close all browser tabs except the first tab")
  public void closeAllTabsExceptFirst() {
    Integer tabCount = driver.getWindowHandles().size();
    ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
    for (Integer i = 1; i < tabCount; i++) {
      try {
        driver.switchTo().window(tabs.get(i)).close();
      } catch (Exception ex) {
      }//in case there is only one tab open
    }
    driver.switchTo().window(tabs.get(0));
  }

  @When("I add (.*) to the inputfield (.*)")
  public void addToInputField(String textToAdd, String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    element.setValue(textToAdd);
  }

  @When("I clear the inputfield (.*)")
  public void clearInputField(String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    element.setValue("");
  }

  @When("I drag element (.*) to element (.*)")
  public void dragElementToElement(String elementLocator1, String elementLocator2) {
    SelenideElement element1 = getElement(elementLocator1);
    SelenideElement element2 = getElement(elementLocator2);
    Actions act = new Actions(driver);
    act.dragAndDrop(element1, element2);
  }

  @When("I submit the form (.*)")
  public void submitForm(String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    element.submit();
  }

  @When("I set a cookie (.*) with the value (.*)")
  public void setCookie(String cookieName, String cookieValue) {
    driver.manage().addCookie(new Cookie(cookieName, cookieValue)); //potential additional values to set: (name, value, domain, path, expiry)
  }

  @When("I delete the cookie (.*)")
  public void deleteCookie(String cookieName) {
    driver.manage().deleteCookieNamed(cookieName);
  }

  @When("I type the keys (.*) in element (.*)")
  public void keyPress(String keyValue, String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    element.sendKeys(keyValue);
  }

  @When("I hold down the (control|shift|alt|command) key and type the key (.*) in element (.*)")
  public void keyPressHold(String keyValueHoldInput, String keyValueType, String elementLocator) {
    Keys keyValueHoldActual = keyValueHoldInput.equals("control") ? Keys.CONTROL
            : keyValueHoldInput.equals("shift") ? Keys.SHIFT
            : keyValueHoldInput.equals("command") ? Keys.COMMAND
            : Keys.ALT;
    String keyChord = Keys.chord(keyValueHoldActual, keyValueType);
    keyPress(keyChord, elementLocator);
    //resource: https://stackoverflow.com/a/11509778
    //Note: for Alt to work, you should use the robots class, running one browser at a time: import java.awt.*;
  }

  @When("I (accept|dismiss) the (alertbox|confirmbox|prompt)")
  public void acceptPrompt(String isAccept, String Ignore) {
    if (isAccept.equals("accept")) {
      driver.switchTo().alert().accept();
    } else {
      driver.switchTo().alert().dismiss();
    }
    driver.switchTo().defaultContent();
    //resource:  https://www.guru99.com/alert-popup-handling-selenium.html
  }

  @When("I enter the text (.*) into the prompt")
  public void enterTextForPromptAlert(String textForPrompt) {
    driver.switchTo().alert().sendKeys(textForPrompt);
    driver.switchTo().defaultContent();
  }

  @When("I hover over element (.*)")
  public void hover(String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    element.hover();
  }

  @When("I focus on element (.*)")
  public void focusOnElement(String elementLocator){
    SelenideElement element = getElement(elementLocator);
    new Actions(driver).moveToElement(element).perform();
  }

  @When("I move the mouse to element (\\S+) with an offset of (\\d+),(\\d+)")
  public void moveMouseToElementOffset(String elementLocator, Integer xOffset, Integer yOffset) {
    SelenideElement element = getElement(elementLocator);
    Actions act = new Actions(driver);
    act.moveToElement(element, xOffset, yOffset).perform();
  }

  @When("I move the mouse to element (\\S+)$")
  public void moveMouseToElement(String elementLocator) {
    moveMouseToElementOffset(elementLocator, 0, 0);
  }

  @When("I exit the test")
  public void exitTest() {
    //for debugging
    System.exit(0);
  }

  @When("I test the test")
  public void testTheTest(){
  //for debugging, as needed
  openURL("demo app");
  // test code
  }

  @When("I highlight the element (.*)")
  public void whenHighlightElement(String elementLocator) {
    highlightElement(elementLocator);
  }

  @When("I println the value (.*)")
  public void whenPrintVal(String value) {
    System.out.println("****print value****");
    System.out.println(value);
    System.out.println("****end of print value****");
  }

  @When("I scroll to element (.*)")
  public void scrollIntoView(String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    executeJavaScript("arguments[0].scrollIntoView(true);", element);
    sleep(500);
    //source: https://stackoverflow.com/a/20487332
  }

  @When("I close the last opened (window|tab)")
  public void closeLastOpenedTab(String ignore) {
    Integer size = driver.getWindowHandles().size();
    ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
    driver.switchTo().window(tabs.get(size - 1)).close();
    driver.switchTo().window(tabs.get(size - 2));
  }

  @When("I focus on the last opened (window|tab)")
  public void switchToLastOpenedTab(String ignore) {
    Integer size = driver.getWindowHandles().size();
    ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());
    driver.switchTo().window(tabs.get(size - 1));
  }

  @When("I log in with username (.*) and password (.*)")
    public void logIn(String user, String password){
    SelenideElement usernameField = $("[type=text]");
    SelenideElement passwordField = $("[type=password]");
    SelenideElement submitButton  = $(By.tagName("button"));
    usernameField.sendKeys(user);
    passwordField.sendKeys(password);
    submitButton.click();
  }

  @When("I select option # (\\d+) in the dropdown element (.*)")
  public void selectOptionNumber(Integer optionNumber, String elementLocator){
    SelenideElement element = getElement(elementLocator);
    Select dropdown = new Select(element);
    dropdown.selectByIndex(optionNumber + 1);
  }

  @When("I select the option with the text (.*) in the dropdown element (.*)")
  public void selectOptionText(String optionText, String elementLocator){
    SelenideElement element = getElement(elementLocator);
    Select dropdown = new Select(element);
    dropdown.selectByVisibleText(optionText);
  }

  @When("I set the name (.*) to the element (.*)")
  public void declareElementName(String name, String elementLocator){
    elementNameMap_Gherkin.put(name,elementLocator);
  }

  @When("I set names to page elements")
  public void putNamesToElementsJava(){
    //compound locators can help locate page elements more easily. For example, here is code for the first button in the div with #divID:
    //putElementName("main button", $("#divID").find(By.tagName("button")));
    //for use in "demo app", this finds the div that contains the "Dropzone" without any id:
    putElementName("DragNDrop Area", $(".container").$("div",1));
    //it can now be used as "main button" in Gherkin syntax.
  }

}