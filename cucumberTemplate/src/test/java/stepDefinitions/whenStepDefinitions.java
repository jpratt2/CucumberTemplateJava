package stepDefinitions;

import com.codeborne.selenide.SelenideElement;
import com.codeborne.selenide.WebDriverRunner;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.Select;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;
import static com.codeborne.selenide.WebDriverRunner.isChrome;

public class whenStepDefinitions extends library {

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

  @When("in a new window or tab, I open (.*)")
  public void openURLNewWindow(String URL){
    executeJavaScript("window.open()");
    int tabCount = driver.getWindowHandles().size();
    tabs = new ArrayList<String>(driver.getWindowHandles());
    driver.switchTo().window(tabs.get(tabCount - 1));
    openURL(URL);
  }

  @When("in a new tab using keystrokes, I open (.*)")
  public void openURLUsingControlT(String URL){
      //Use the robots class to send Control+T or Command+T, depending on OS
      if(System.getProperty("os.name").contains("Mac")){
          pressCommandT();
          //\\note: I'll have to fix this later, it doesn't work in Mac
      }else{
          pressControlT();
      }
      focusOnLastOpenedTab();
      openURL(URL);
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

  @When("I clear all cookies in Chrome")
  public void clearAllCookiesInChrome(){
    //send keystrokes to the OS to clear all cookies
    if(isChrome()){
      driver.get("chrome://settings/siteData?search=cookies");
      sendKeystrokesToClearCookiesInChrome();
    }else{
      printVal("notice - cookies were not cleared; This is not a Chrome browser");
    }
  }
  public void sendKeystrokesToClearCookiesInChrome(){
    //special Robots-class keystrokes are needed when on a chrome:// page
    pressTab(4);
    pressEnter();
    pressEnter();
  }

  @When("I set a cookie (.*) with the value (.*)")
  public void setCookie(String cookieName, String cookieValue) {
    driver.manage().addCookie(new Cookie(cookieName, cookieValue)); //potential additional values to set: (name, value, domain, path, expiry)
  }

  @When("I delete the cookie (.*)")
  public void deleteCookie(String cookieName) {
    driver.manage().deleteCookieNamed(cookieName);
  }

  @When("I click (.*)")
  public void clickElement(String elementLocator) {
    WebElement element = getElement(elementLocator);
    tabCountBeforeClick = getWebDriver().getWindowHandles().size();
    executeJavaScript("arguments[0].click();", element);//sometimes Chrome requires this for the "element not clickable" error
  }

  @When("I double-click (.*)")
  public void doubleClickElement(String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    tabCountBeforeClick = getWebDriver().getWindowHandles().size();
    element.doubleClick();
  }

  @When("I set the browser size to (\\d+) by (\\d+) px")
  public void setBrowserSize(Integer xValue, Integer yValue) {
    Dimension dimensions = new Dimension(xValue, yValue);
    getWebDriver().manage().window().setSize(dimensions);
  }

  @When("I set the browser width to (\\d+)px")
  public void setBrowserSize(Integer xValue) {
    Dimension initialSize = driver.manage().window().getSize();
    Integer yValue = initialSize.getWidth();
    Dimension dimensions = new Dimension(xValue, yValue);
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
    act.dragAndDrop(element1, element2).perform();
  }

  @When("I submit the form (.*)")
  public void submitForm(String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    element.submit();
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
    keyValueType = keyValueType.toLowerCase();
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
    //resource:  https://www.guru99.com/alert-popup-handling-selenium.html
  }

  @When("I enter the text (.*) into the prompt")
  public void enterTextForPromptAlert(String textForPrompt) {
    driver.switchTo().alert().sendKeys(textForPrompt);
  }

  @When("I hover over element (.*)")
  public void hover(String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    //scrollIntoView(elementLocator);
    element.hover();
    pause(750); //give time for the CSS to update
  }

  @When("I focus on element (.*)")
  public void focusOnElement(String elementLocator){
    SelenideElement element = getElement(elementLocator);
    element.sendKeys(Keys.SHIFT);//works even when the window isn't actively selected
    executeJavaScript("arguments[0].focus();", element);
    pause(750); //wait for CSS to update
    //https://stackoverflow.com/a/14560324
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

  @When("I stop the test")
  public void whenStopTest(){
    stopTest();
  }

  @When("I highlight the element (.*)")
  public void whenHighlightElement(String elementLocator) {
    highlightElement(elementLocator);
  }

  @When("I println the values of all cookies")
  public void whenPrintValAllCookies(){
    Set<Cookie> cookies = driver.manage().getCookies();
    int i = 1;
    for (Cookie cookie : cookies) {
      printVal(cookie, i++);
    //source: https://rajeevprabhakaran.wordpress.com/2014/05/07/get-all-cookies-from-a-website-and-print-selenium-webdriver-getcookies/
    }
  }

  @When("I scroll to element (.*)")
  public void scrollIntoView(String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    executeJavaScript("arguments[0].scrollIntoView(true);", element);
  }

  @When("I close the last opened window or tab")
  public void closeLastOpenedTab() {
    Integer size = driver.getWindowHandles().size();
    tabs = new ArrayList<String>(driver.getWindowHandles());
    driver.switchTo().window(tabs.get(size - 1)).close();
    driver.switchTo().window(tabs.get(size - 2));
  }

  @When("I focus on the last opened window or tab")
  public void focusOnLastOpenedTab() {
    Integer size = driver.getWindowHandles().size();
    tabs = new ArrayList<String>(driver.getWindowHandles());
    driver.switchTo().window(tabs.get(size - 1));
  }

  @When("I focus on the first opened window or tab")
  public void switchToFirstOpenedTab() {
    tabs = new ArrayList<String>(driver.getWindowHandles());
    driver.switchTo().window(tabs.get(0));
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
    dropdown.selectByIndex(optionNumber-1);//adjust for index value
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

  @When("I scroll (-?\\d+) px on the (x|y) axis")
  public void scrollMorePixels(Integer pixels, String xOrYaxis){
     executeJavaScript(
             "var currentXAxis = window.scrollX;"+
                     "var currentYAxis = window.scrollY;" +
                     "if(arguments[1] === 'x'){" +
                     "window.scroll(currentXAxis + arguments[0], currentYAxis);" +
                     "} else {" +
                     "window.scroll(currentXAxis, currentYAxis + arguments[0]);" +
                    "}", pixels, xOrYaxis);
  }

  @When("I scroll to the top")
    public void scrollToTop(){
      executeJavaScript("window.scroll(0,0)");
  }

  @When("I scroll to the x,y value (\\d+),(\\d+)")
    public void scrollToXYValue(Integer xValue, Integer yValue){
      executeJavaScript("window.scroll(arguments[0], arguments[1]);",xValue,yValue);
  }

  @When("I refresh the page")
    public void refreshBroswer(){
      executeJavaScript("window.location.reload(true);");
    }

  @When("I send the alert (.*)")
  public void whenSendAlert(String text){
    alertVal(text);
  }

}