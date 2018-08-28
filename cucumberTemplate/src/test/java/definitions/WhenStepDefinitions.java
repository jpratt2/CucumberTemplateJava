package definitions;

import com.codeborne.selenide.SelenideElement;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import java.util.ArrayList;
import java.util.Set;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;
import static definitions.Library.*;

public class WhenStepDefinitions {

  @When("I open (.*)")
  public static void openURL(String URL) throws Exception {
    if(URL.toLowerCase().matches(".*base url")){
      open("");
    } else if (URL.toLowerCase().matches(".*demo app")) {
      open("file:///" + System.getProperty("user.dir") + "/src/test/other/demo-app/index.html");
    } else {
      try {
        open(URL);
      } catch (Exception ex) {
        open("http://" + URL);
      }
    }
  }

  @When("I navigate to (.*)")
  public static void navigateTo(String URL) throws Exception{
    openURL(URL);
  }

  @When("I go to the base URL")
  public static void navigateToBaseURL() throws Exception{
    open("");
  }

  @When("in a new window or tab, I open (.*)")
  public static void openURLNewWindow(String URL)throws Exception{
    executeJavaScript("window.open()");
    WebDriver driver = getWebDriver();
    int tabCount = driver.getWindowHandles().size();
    tabs = new ArrayList<String>(driver.getWindowHandles());
    driver.switchTo().window(tabs.get(tabCount - 1));
    openURL(URL);
  }

  @When("in a new tab using keystrokes, I open (.*)")
  public static void openURLUsingControlT(String URL)throws Exception{
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
  public static void pageFinishLoad() throws Exception {
    waitPageLoad();
  }

  @When("I pause (\\d+) ms")
  public static void whenPause(Integer milliseconds) throws Exception {
    sleep(milliseconds);
  }

  @When("I clear cookies for the current domain")
  public static void clearCookiesCurrentDomain() throws Exception {
    clearBrowserCookies();
  }

  @When("I clear all cookies in Chrome")
  public static void whenClearCookiesInChrome() throws Exception{
    //send keystrokes to the OS to clear all cookies
    clearAllCookiesInChrome();
  }

  @When("I set a cookie (.*) with the value (.*)")
  public static void setCookie(String cookieName, String cookieValue) throws Exception {
    WebDriver driver = getWebDriver();
    driver.manage().addCookie(new Cookie(cookieName, cookieValue)); //potential additional values to set: (name, value, domain, path, expiry)
  }

  @When("I delete the cookie (.*)")
  public static void deleteCookie(String cookieName) {
    WebDriver driver = getWebDriver();
    driver.manage().deleteCookieNamed(cookieName);
  }

  @When("I println the values of all cookies")
  public static void whenPrintValAllCookies(){
    WebDriver driver = getWebDriver();
    Set<Cookie> cookies = driver.manage().getCookies();
    int i = 1;
    for (Cookie cookie : cookies) {
      printVal(cookie, i++);
      //source: https://rajeevprabhakaran.wordpress.com/2014/05/07/get-all-cookies-from-a-website-and-print-selenium-webdriver-getcookies/
    }
  }

  @When("I click (.*)")
  public static void clickElement(String elementLocator) throws Exception {
    WebElement element = getElement(elementLocator);
    tabCountBeforeClick = getWebDriver().getWindowHandles().size();
    executeJavaScript("arguments[0].click();", element);//sometimes Chrome requires this for the "element not clickable" error
  }

  @When("I double-click (.*)")
  public static void doubleClickElement(String elementLocator)  throws Exception {
    SelenideElement element = getElement(elementLocator);
    tabCountBeforeClick = getWebDriver().getWindowHandles().size();
    element.doubleClick();
  }

  @When("I set the browser size to (\\d+) by (\\d+) px")
  public static void setBrowserSize(Integer xValue, Integer yValue) throws Exception {
    Dimension dimensions = new Dimension(xValue, yValue);
    getWebDriver().manage().window().setSize(dimensions);
  }

  @When("I set the browser width to (\\d+)px")
  public static void setBrowserSize(Integer xValue) throws Exception {
    WebDriver driver = getWebDriver();
    Dimension initialSize = driver.manage().window().getSize();
    Integer yValue = initialSize.getWidth();
    Dimension dimensions = new Dimension(xValue, yValue);
    getWebDriver().manage().window().setSize(dimensions);
  }

  @When("I set the browser size to desktop 1366 x 768")
  public static void setBrowserSizeDesktop() throws Exception{
    setBrowserSize(1366, 768);
  }

  @When("I set the browser size to mobile 360 x 640")
  public static void setBrowserSizeMobile() throws Exception{
    setBrowserSize(360,640);
    //common sizes: http://gs.statcounter.com/screen-resolution-stats#monthly-201803-201803-bar
    //common viewports: http://mediag.com/news/popular-screen-resolutions-designing-for-all/
  }

  @When("I close all browser tabs except the first tab")
  public static void closeAllTabsExceptFirst() throws Exception {
    WebDriver driver = getWebDriver();
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
  public static void addToInputField(String textToAdd, String elementLocator) throws Exception {
    SelenideElement element = getElement(elementLocator);
    element.setValue(textToAdd);
  }

  @When("I clear the inputfield (.*)")
  public static void clearInputField(String elementLocator) throws Exception {
    SelenideElement element = getElement(elementLocator);
    element.setValue("");
  }

  @When("I drag element (.*) to element (.*)")
  public static void dragElementToElement(String elementLocator1, String elementLocator2) throws Exception {
    WebDriver driver = getWebDriver();
    SelenideElement element1 = getElement(elementLocator1);
    SelenideElement element2 = getElement(elementLocator2);
    Actions act = new Actions(driver);
    act.dragAndDrop(element1, element2).perform();
  }

  @When("I submit the form (.*)")
  public static void submitForm(String elementLocator) throws Exception {
    SelenideElement element = getElement(elementLocator);
    element.submit();
  }

  @When("I type the keys (.*) in element (.*)")
  public static void keyPress(String keyValue, String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    element.sendKeys(keyValue);
  }

  @When("I press Enter in element (.*)")
  public static void pressEnter (String elementLocator) {
    SelenideElement element = getElement(elementLocator);
    element.pressEnter();
  }

  @When("I hold down the (control|shift|alt|command) key and type the key (.*) in element (.*)")
  public static void keyPressHold(String keyValueHoldInput, String keyValueType, String elementLocator) throws Exception {
    Keys keyValueHoldActual = keyValueHoldInput.equals("control") ? Keys.CONTROL
            : keyValueHoldInput.equals("shift") ? Keys.SHIFT
            : keyValueHoldInput.equals("command") ? Keys.COMMAND
            : Keys.ALT;
    keyValueType = keyValueType.toLowerCase();
    String keyChord = Keys.chord(keyValueHoldActual, keyValueType);
    keyPress(keyChord, elementLocator);
    //resource: https://stackoverflow.com/a/11509778
    //Note: for Alt to work, you should use the robots class: import java.awt.*;
  }

  @When("I (accept|dismiss) the (alertbox|confirmbox|prompt)")
  public static void acceptPrompt(String isAccept, String Ignore) throws Exception {
    WebDriver driver = getWebDriver();
    if (isAccept.equals("accept")) {
      driver.switchTo().alert().accept();
    } else {
      driver.switchTo().alert().dismiss();
    }
    //resource:  https://www.guru99.com/alert-popup-handling-selenium.html
  }

  @When("I enter the text (.*) into the prompt")
  public static void enterTextForPromptAlert(String textForPrompt) {
    WebDriver driver = getWebDriver();
    driver.switchTo().alert().sendKeys(textForPrompt);
  }

  @When("I hover over element (.*)")
  public static void hover(String elementLocator) throws Exception {
    SelenideElement element = getElement(elementLocator);
    scrollIntoView(elementLocator);
    element.hover();
    pause(1000); //give time for the CSS to update
  }

  @When("I focus on element (.*)")
  public static void focusOnElement(String elementLocator) throws Exception{
    SelenideElement element = getElement(elementLocator);
    element.sendKeys(Keys.SHIFT);//works even when the window isn't actively selected
    executeJavaScript("arguments[0].focus();", element);
    pause(1000); //wait for CSS to update
    //https://stackoverflow.com/a/14560324
  }

  @When("with an offset of (\\d+),(\\d+), I move the mouse to element (.*)")
  public static void moveMouseToElementOffset(String elementLocator, Integer xOffset, Integer yOffset) throws Exception {
    SelenideElement element = getElement(elementLocator);
    Actions act = new Actions(getWebDriver());
    act.moveToElement(element, xOffset, yOffset).perform();
  }

  @When("I move the mouse to element (.*)")
  public static void moveMouseToElement(String elementLocator) throws Exception {
    moveMouseToElementOffset(elementLocator, 0, 0);
  }

  @When("I scroll to element (.*)")
  public static void scrollIntoView(String elementLocator) throws Exception {
    SelenideElement element = getElement(elementLocator);
    executeJavaScript("arguments[0].scrollIntoView(true);", element);
  }

  @When("I close the last opened window or tab")
  public static void closeLastOpenedTab() throws Exception {
    WebDriver driver = getWebDriver();
    Integer size = driver.getWindowHandles().size();
    tabs = new ArrayList<String>(driver.getWindowHandles());
    driver.switchTo().window(tabs.get(size - 1)).close();
    driver.switchTo().window(tabs.get(size - 2));
  }

  @When("I focus on the last opened window or tab")
  public static void focusOnLastOpenedTab() throws Exception {
    WebDriver driver = getWebDriver();
    Integer size = driver.getWindowHandles().size();
    tabs = new ArrayList<String>(driver.getWindowHandles());
    driver.switchTo().window(tabs.get(size - 1));
  }

  @When("I focus on the first opened window or tab")
  public static void switchToFirstOpenedTab() throws Exception {
    WebDriver driver = getWebDriver();
    tabs = new ArrayList<String>(driver.getWindowHandles());
    driver.switchTo().window(tabs.get(0));
  }

  @When("I log in with username (.*) and password (.*)")
    public static void logIn(String user, String password) throws Exception{
    SelenideElement usernameField = $("[type=text]");
    SelenideElement passwordField = $("[type=password]");
    SelenideElement submitButton  = $(By.tagName("button"));
    usernameField.sendKeys(user);
    passwordField.sendKeys(password);
    submitButton.click();
  }

  @When("I select option # (\\d+) in the dropdown element (.*)")
  public static void selectOptionNumber(Integer optionNumber, String elementLocator) throws Exception{
    SelenideElement element = getElement(elementLocator);
    Select dropdown = new Select(element);
    dropdown.selectByIndex(optionNumber-1);//adjust for index value
  }

  @When("I select the option with the text (.*) in the dropdown element (.*)")
  public static void selectOptionText(String optionText, String elementLocator) throws Exception{
    SelenideElement element = getElement(elementLocator);
    Select dropdown = new Select(element);
    dropdown.selectByVisibleText(optionText);
  }

  @When("I scroll (-?\\d+) px on the (x|y) axis")
  public static void scrollMorePixels(Integer pixels, String xOrYaxis) throws Exception{
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
    public static void scrollToTop() throws Exception{
      executeJavaScript(
              "var currentXAxis = window.scrollX;"+
                      "window.scroll(currentXAxis,0)");
  }

  @When("I scroll to the bottom")
  public static void scrollToBottom() throws Exception{
    executeJavaScript(
            "var currentXAxis = window.scrollX;"+
                    "window.scroll(currentXAxis,1000000000)");
  }

  @When("I scroll to the x,y value (\\d+),(\\d+)")
    public static void scrollToXYValue(Integer xValue, Integer yValue) throws Exception{
      executeJavaScript("window.scroll(arguments[0], arguments[1]);",xValue,yValue);
  }

  @When("I refresh the page")
    public static void refreshBrowser() throws Exception{
      executeJavaScript("window.location.reload(true);");
    }

  @When("I send the alert (.*)")
  public static void sendAlert(String text){
    alertVal(text);
  }

  @When("I stop the test")
  public static void whenStopTest(){
    stopTest();
  }

  @When("I highlight the element (.*)")
  public static void whenHighlightElement(String elementLocator) {
    highlightElement(elementLocator);
  }

  @When("I test some code")
  public static void testSomeCode()throws Exception{
    //openURL("demo app");
    //


    //stopTest();
  }

}