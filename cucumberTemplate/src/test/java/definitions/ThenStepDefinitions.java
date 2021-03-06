package definitions;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import cucumber.api.java.en.Then;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import java.util.ArrayList;
import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.*;
import static org.junit.Assert.*;
import static definitions.Library.*;


public class ThenStepDefinitions {

  @Then("the element (.*) should( not)* be visible")
  public static void checkElementVisible(String elementLocator, String not) throws Exception{
    SelenideElement element = getElement(elementLocator);
    if(not == null){
      element.shouldBe(visible);
    }else{
      element.shouldNotBe(visible);
    }
  }

  @Then("the element (.*) should( not)* be enabled")
  public static void checkElementEnabled(String elementLocator, String not) throws Exception {
    SelenideElement element = getElement(elementLocator);
    if(not == null){
      element.shouldBe(enabled);
    }else{
      element.shouldNotBe(enabled);
    }
  }

  @Then("the element (.*) should( not)* be selected")
  public static void checkElementSelected(String elementLocator, String not) throws Exception {
    SelenideElement element = getElement(elementLocator);
    if(not == null){
      element.shouldBe(selected);
    }else{
      element.shouldNotBe(selected);
    }
  }

  @Then("the checkbox (.*) should( not)* be checked")
  public static void checkElementChecked(String elementLocator, String not) throws Exception {
    SelenideElement element = getElement(elementLocator);
    if(not == null){
      element.shouldBe(checked);
    }else{
      element.shouldNotBe(checked);
    }
  }

  @Then("the element (.*) should( not)* exist")
  public static void checkElementExists(String elementLocator, String not) throws Exception {
    SelenideElement element = getElement(elementLocator);
    if(not == null){
      element.should(exist);
    }else{
      element.shouldNot(exist);
    }
  }

  public static String elementText(SelenideElement element) throws Exception{
    if(element.getTagName().equals("input")){
      return element.getValue();
    } else{
      return element.text();
    }
  }

  @Then("the element (.*) should( not)* have the same text as element (.*)")
  public static void checkElementTextCompare(String elementLocator, String not, String elementLocator2) throws Exception {
    SelenideElement element = getElement(elementLocator);
    SelenideElement element2 = getElement(elementLocator2);
    if(not == null){
      assertEquals(elementText(element), elementText(element2));
    }else{
      assertNotEquals(elementText(element), elementText(element2));
    }
  }

  @Then("the element (.*) should( not)* contain within it this text: (.*)")
  public static void checkElementContainsText(String elementLocator, String not, String expectedText) throws Exception {
    SelenideElement element = getElement(elementLocator);
    if (not == null) {
      assertTrue(elementText(element).contains(expectedText));
    } else {
      assertFalse(elementText(element).contains(expectedText));
    }
  }

  @Then("the element (.*) should( not)* have exactly this text: (.*)")
  public static void checkElementHasText(String elementLocator, String not, String expectedText) throws Exception {
    SelenideElement element = getElement(elementLocator);
    if (not == null) {
      assertEquals(expectedText, elementText(element));
    } else {
      assertNotEquals(expectedText, elementText(element));
    }
  }

  @Then("the element (.*) should( not)* have any text")
  public static void checkElementHaveText(String elementLocator, String not) throws Exception {
    SelenideElement element = getElement(elementLocator);
    if (not == null) {
      assertNotEquals("", elementText(element));
    } else {
      assertEquals("", elementText(element));
    }
  }

  @Then("the browser title should( not)* be (.*)")
  public static void checkTitle(String not, String expectedTitleTag) throws Exception {
    if(not == null){
      assertEquals(title(),expectedTitleTag);
    }else{
      assertNotEquals(title(),expectedTitleTag);
    }
  }

  @Then("the browser URL should( not)* be (.*)")
  public static void checkBrowserURL(String not, String expectedBrowserURL) throws Exception {
    String actualBrowserURL = getWebDriver().getCurrentUrl(); //alternate: executeJavaScript("return window.top.location.href");
    if (not == null) {
      assertEquals(expectedBrowserURL, actualBrowserURL);
    } else {
      assertNotEquals(expectedBrowserURL, actualBrowserURL);
    }
  }

  @Then("the browser URL path should( not)* be (.*)")
  public static void checkBrowserURLPath(String not, String expectedBrowserURL) throws Exception {
    String browserURLpath = executeJavaScript("return window.top.location.pathname");
    if (not == null) {
      assertEquals(expectedBrowserURL, browserURLpath);
    } else {
      assertNotEquals(expectedBrowserURL, browserURLpath);
    }
  }

  @Then("the browser URL should( not)* contain (.*)")
  public static void checkBrowserURLText(String not, String expectedBrowserURLText) throws Exception {
    String browserURL = executeJavaScript("return window.top.location.href");
    if (not == null) {
      assertTrue(browserURL.contains(expectedBrowserURLText));
    } else {
      assertFalse(browserURL.contains(expectedBrowserURLText));
    }
  }

  @Then("the css property (.*) of element (.*) should( not)* have the value (.*)")
  public static void checkCssPropertyValue(String property, String elementLocator, String not, String expectedCSSValue) throws Exception{
    SelenideElement element = getElement(elementLocator);
    if (not == null) {
      assertEquals(expectedCSSValue, element.getCssValue(property));
    } else {
      assertNotEquals(expectedCSSValue, element.getCssValue(property));
    }
  }

  @Then("the attribute (.*) of element (.*) should( not)* have the value (.*)")
  public static void checkAttributeValue(String attribute, String elementLocator, String not, String expectedAttributeValue) throws Exception{
    SelenideElement element = getElement(elementLocator);
    if (not == null) {
      assertEquals(expectedAttributeValue, element.getAttribute(attribute));
    } else {
      assertNotEquals(expectedAttributeValue, element.getAttribute(attribute));
    }
  }

  @Then("the cookie (.*) should( not)* contain the value (.*)")
  public static void checkCookieValue(String cookieName, String not, String expectedCookieValue) throws Exception{
    sleep(1000);//wait for cookie
    Cookie cookie = getWebDriver().manage().getCookieNamed(cookieName);
    if (not == null) {
      assertEquals(expectedCookieValue, cookie.getValue());
    } else {
      assertNotEquals(expectedCookieValue, cookie.getValue());
    }
  }

  @Then("the cookie (.*) should( not)* exist")
  public static void checkCookieNotExist(String cookieName, String not){
    sleep(1000);//wait for cookie
    Cookie cookie = getWebDriver().manage().getCookieNamed(cookieName);
    if (not == null){
      assertNotNull(cookie);
    }else{
      assertNull(cookie);
    }
  }

  @Then("the element (.*) should( not)* be (\\d+)px (wide|tall)")
  public static void checkElementDimensions(String elementLocator, String not, Integer expectedDimensions, String wideOrTall) throws Exception{
    SelenideElement element = getElement(elementLocator);
    Integer dimensions;
    if(wideOrTall.equals("wide")) {
      dimensions = element.getSize().getWidth();
    }else{
      dimensions = element.getSize().getHeight();
    }
    if (not == null){
      assertEquals(expectedDimensions,dimensions);
    } else {
      assertNotEquals(expectedDimensions, dimensions);
    }
  }

  @Then("the element (.*) should( not)* be positioned at (\\d+)px on the (x|y) axis")
  public static void checkXYposition(String elementLocator, String not, Integer expectedMeasurement, String axis) throws Exception{
    SelenideElement element = getElement(elementLocator);
    Integer measurement;
    if(axis.equals("x")) {
      measurement = element.getLocation().getX();
    } else {
      measurement = element.getLocation().getY();
    }
    if (not == null){
      assertEquals(expectedMeasurement,measurement);
    } else {
      assertNotEquals(expectedMeasurement,measurement);
    }
  }

  @Then("the (alertbox|confirmbox|prompt) should( not)* be opened")
  public static void checkAlertExists(String skip, String not) throws Exception{
    Boolean alertExists = alertExists();
    if (not == null){
      assertTrue(alertExists);
    }else{
      assertFalse(alertExists);
    }
  }

  @Then("the (alertbox|confirmbox|prompt) should( not)* contain the text (.*)")
  public static void checkAlertText(String skip, String not, String expectedText) throws Exception{
    String alertText = getWebDriver().switchTo().alert().getText();
    if (not == null){
      assertEquals(expectedText, alertText);
    }else{
      assertNotEquals(expectedText, alertText);
    }
  }

  @Then("the element (.*) should( not)* appear exactly (\\d+) times")
  public static void checkNumberTimesElementAppears(String elementLocator, String not, Integer expectedAmount) throws Exception{
    ElementsCollection collection = getElementsCollection(elementLocator);
    Integer observedAmount = collection.size();
    if (not == null){
      assertEquals(expectedAmount, observedAmount);
    }else{
      assertNotEquals(expectedAmount, observedAmount);
    }
  }

  @Then("the element (.*) should( not)* contain the class (.*)")
  public static void checkForClass(String elementLocator, String not, String className) throws Exception{
    SelenideElement element = getElement(elementLocator);
    Boolean containsClass = executeJavaScript("return arguments[0].classList.contains(arguments[1])", element, className);
    if (not == null){
      assertTrue(containsClass);
    }else{
      assertFalse(containsClass);
    }
  }

  @Then("the element (.*) should( not)* be focused")
  public static void checkElementFocus(String elementLocator, String not) throws Exception{
    SelenideElement element = getElement(elementLocator);
    Boolean isFocused = element.equals(getWebDriver().switchTo().activeElement());
    //source: https://stackoverflow.com/a/17026711
    if (not == null){
      assertTrue(isFocused);
    }else{
      assertFalse(isFocused);
    }
  }

  @Then("the URL (.*) should( not)* open in a new tab")
  public static void checkURLOpenedNewTab(String expectedURL, String not) throws Exception{
      Boolean isNewTabOpened = isNewTabOpened();
      WebDriver driver = getWebDriver();
      tabs = new ArrayList<String>(driver.getWindowHandles());
      Integer mostRecentTabIndex = tabs.size() - 1;
      driver.switchTo().window(tabs.get(mostRecentTabIndex));
      if (not == null){
          assertEquals(expectedURL, driver.getCurrentUrl());
          assertTrue(isNewTabOpened);
      }else{
          assertEquals(expectedURL, driver.getCurrentUrl());
          assertFalse(isNewTabOpened);
      }
  }

  @Then("a new browser tab should be opened")
  public static void checkNewTabOpened() throws Exception{
    assertTrue(isNewTabOpened());
  }

  public static Boolean isNewTabOpened(){
    sleep(750);//wait for new tab
    Integer tabCountAfterClick = getWebDriver().getWindowHandles().size();
    if(tabCountAfterClick - tabCountBeforeClick >= 1){
        return true;
    }else {
        return false;
    }
  }

  @Then("the browser width should be (\\d+) pixels")
  public static void browserWidth(long expectedWidth) throws Exception{
    int adjustment = isFirefox() ? 14
                    :isIE() ? 16
                    :isChrome() ? 16
                    :16;
    //Some browsers need an adjustment because their innerWidth measurement is incorrect when compared to the dimensions obtained from a browser plugin. This issue occurs when Selenium sets the width.
    long observedWidth = executeJavaScript("return window.innerWidth;");
    observedWidth = observedWidth + adjustment;
    assertEquals(expectedWidth, observedWidth);
  }



}



