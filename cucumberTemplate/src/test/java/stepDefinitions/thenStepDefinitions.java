package stepDefinitions;

import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import cucumber.api.java.en.Then;
import org.openqa.selenium.Cookie;

import java.util.ArrayList;

import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.*;
import static org.junit.Assert.*;

public class thenStepDefinitions extends library {

  @Then("the element (.*) should( not)* be visible")
  public void checkElementVisible(String elementLocator, String not) {
    SelenideElement element = getElement(elementLocator);
    if(not == null){
      element.shouldBe(visible);
    }else{
      element.shouldNotBe(visible);
    }
  }

  @Then("the element (.*) should( not)* be enabled")
  public void checkElementEnabled(String elementLocator, String not) {
    SelenideElement element = getElement(elementLocator);
    if(not == null){
      element.shouldBe(enabled);
    }else{
      element.shouldNotBe(enabled);
    }
  }

  @Then("the element (.*) should( not)* be selected")
  public void checkElementSelected(String elementLocator, String not) {
    SelenideElement element = getElement(elementLocator);
    if(not == null){
      element.shouldBe(selected);
    }else{
      element.shouldNotBe(selected);
    }
  }

  @Then("the checkbox (.*) should( not)* be checked")
  public void checkElementChecked(String elementLocator, String not) {
    SelenideElement element = getElement(elementLocator);
    if(not == null){
      element.shouldBe(checked);
    }else{
      element.shouldNotBe(checked);
    }
  }

  @Then("the element (.*) should( not)* exist")
  public void checkElementExists(String elementLocator, String not) {
    SelenideElement element = getElement(elementLocator);
    if(not == null){
      element.should(exist);
    }else{
      element.shouldNot(exist);
    }
  }

  public String elementText(SelenideElement element){
    if(element.getTagName().equals("input")){
      return element.getValue();
    } else{
      return element.text();
    }
  }

  @Then("the element (.*) should( not)* have the same text as element (.*)")
  public void checkElementTextCompare(String elementLocator, String not, String elementLocator2) {
    SelenideElement element = getElement(elementLocator);
    SelenideElement element2 = getElement(elementLocator2);
    if(not == null){
      assertEquals(elementText(element), elementText(element2));
    }else{
      assertNotEquals(elementText(element), elementText(element2));
    }
  }

  @Then("the element (.*) should( not)* contain within it this text: (.*)")
  public void checkElementContainsText(String elementLocator, String not, String expectedText) {
    SelenideElement element = getElement(elementLocator);
    if (not == null) {
      assertTrue(elementText(element).contains(expectedText));
    } else {
      assertFalse(elementText(element).contains(expectedText));
    }
  }

  @Then("the element (.*) should( not)* have exactly this text: (.*)")
  public void checkElementHasText(String elementLocator, String not, String expectedText) {
    SelenideElement element = getElement(elementLocator);
    if (not == null) {
      assertEquals(expectedText, elementText(element));
    } else {
      assertNotEquals(expectedText, elementText(element));
    }
  }

  @Then("the element (.*) should( not)* have any text")
  public void checkElementHaveText(String elementLocator, String not) {
    SelenideElement element = getElement(elementLocator);
    if (not == null) {
      assertNotEquals("", elementText(element));
    } else {
      assertEquals("", elementText(element));
    }
  }

  @Then("the browser title should( not)* be (.*)")
  public void checkTitle(String not, String expectedTitleTag) {
    if(not == null){
      assertEquals(title(),expectedTitleTag);
    }else{
      assertNotEquals(title(),expectedTitleTag);
    }
  }

  @Then("the browser URL should( not)* be (.*)")
  public void checkBrowserURL(String not, String expectedBrowserURL) {
    String actualBrowserURL = executeJavaScript("return window.top.location.href");
    if (not == null) {
      assertEquals(expectedBrowserURL, actualBrowserURL);
    } else {
      assertNotEquals(expectedBrowserURL, actualBrowserURL);
    }
  }

  @Then("the browser URL path should( not)* be (.*)")
  public void checkBrowserURLPath(String not, String expectedBrowserURL) {
    String browserURLpath = executeJavaScript("return window.top.location.pathname");
    if (not == null) {
      assertEquals(expectedBrowserURL, browserURLpath);
    } else {
      assertNotEquals(expectedBrowserURL, browserURLpath);
    }
  }

  @Then("the browser URL should( not)* contain (.*)")
  public void checkBrowserURLText(String not, String expectedBrowserURLText) {
    String browserURL = executeJavaScript("return window.top.location.href");
    if (not == null) {
      assertTrue(browserURL.contains(expectedBrowserURLText));
    } else {
      assertFalse(browserURL.contains(expectedBrowserURLText));
    }
  }

  @Then("the css property (.*) of element (.*) should( not)* have the value (.*)")
  public void checkCssPropertyValue(String property, String elementLocator, String not, String expectedCSSValue){
    SelenideElement element = getElement(elementLocator);
    if (not == null) {
      assertEquals(expectedCSSValue, element.getCssValue(property));
    } else {
      assertNotEquals(expectedCSSValue, element.getCssValue(property));
    }
  }

  @Then("the attribute (.*) of element (.*) should( not)* have the value (.*)")
  public void checkAttributeValue(String attribute, String elementLocator, String not, String expectedAttributeValue){
    SelenideElement element = getElement(elementLocator);
    if (not == null) {
      assertEquals(expectedAttributeValue, element.getAttribute(attribute));
    } else {
      assertNotEquals(expectedAttributeValue, element.getAttribute(attribute));
    }
  }

  @Then("the cookie (.*) should( not)* contain the value (.*)")
  public void checkCookieValue(String cookieName, String not, String expectedCookieValue){
    sleep(750);//wait for cookie
    Cookie cookie = getWebDriver().manage().getCookieNamed(cookieName);
    if (not == null) {
      assertEquals(expectedCookieValue, cookie.getValue());
    } else {
      assertNotEquals(expectedCookieValue, cookie.getValue());
    }
  }

  @Then("the cookie (.*) should( not)* exist")
  public void checkCookieNotExist(String cookieName, String not){
    sleep(1750);//wait for cookie
    Cookie cookie = getWebDriver().manage().getCookieNamed(cookieName);
    if (not == null){
      assertNotNull(cookie);
    }else{
      assertNull(cookie);
    }
  }

  @Then("the element (.*) should( not)* be (\\d+)px (wide|tall)")
  public void checkElementDimensions(String elementLocator, String not, Integer expectedDimensions, String wideOrTall){
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
  public void checkXYposition(String elementLocator, String not, Integer expectedMeasurement, String axis){
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
  public void checkAlertExists(String skip, String not){
    Boolean alertExists = alertExists();
    if (not == null){
      assertTrue(alertExists);
    }else{
      assertFalse(alertExists);
    }
  }

  @Then("the (alertbox|confirmbox|prompt) should( not)* contain the text (.*)")
  public void checkAlertText(String skip, String not, String expectedText){
    String alertText = getWebDriver().switchTo().alert().getText();
    if (not == null){
      assertEquals(expectedText, alertText);
    }else{
      assertNotEquals(expectedText, alertText);
    }
  }

  @Then("the element (.*) should( not)* appear exactly (\\d+) times")
  public void checkNumberTimesElementAppears(String elementLocator, String not, Integer expectedAmount){
    ElementsCollection collection = getElementsCollection(elementLocator);
    Integer observedAmount = collection.size();
    if (not == null){
      assertEquals(expectedAmount, observedAmount);
    }else{
      assertNotEquals(expectedAmount, observedAmount);
    }
  }

  @Then("the element (.*) should( not)* contain the class (.*)")
  public void checkForClass(String elementLocator, String not, String className){
    SelenideElement element = getElement(elementLocator);
    Boolean containsClass = executeJavaScript("return arguments[0].classList.contains(arguments[1])", element, className);
    if (not == null){
      assertTrue(containsClass);
    }else{
      assertFalse(containsClass);
    }
  }

  @Then("the element (.*) should( not)* be focused")
  public void checkElementFocus(String elementLocator, String not){
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
  public void checkURLOpenedNewTab(String expectedURL, String not){
      Boolean isNewTabOpened = isNewTabOpened();
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
  public void checkNewTabOpened(){
    assertTrue(isNewTabOpened());
  }

  public Boolean isNewTabOpened(){
    sleep(750);//wait for new tab
    Integer tabCountAfterClick = getWebDriver().getWindowHandles().size();
    if(tabCountAfterClick - tabCountBeforeClick >= 1){
        return true;
    }else {
        return false;
    }
  }

  @Then("the browser width should be (\\d+) pixels")
  public void browserWidth(long expectedWidth){
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



