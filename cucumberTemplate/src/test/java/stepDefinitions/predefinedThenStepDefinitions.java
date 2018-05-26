package stepDefinitions;

import com.codeborne.selenide.SelenideElement;
import cucumber.api.java.en.Then;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Cookie;

import static com.codeborne.selenide.Condition.*;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;
import static org.junit.Assert.*;

public class predefinedThenStepDefinitions {
  //assertions

  @Then("the element (.*) should( not)* be visible")
  public void elementVisible(String cssSelector, String not) {
    SelenideElement element = $(cssSelector);
    if(not == null){
      element.shouldBe(visible);
    }else{
      element.shouldNotBe(visible);
    }
  }

  @Then("the element (.*) should( not)* be enabled")
  public void elementEnabled(String cssSelector, String not) {
    SelenideElement element = $(cssSelector);
    if(not == null){
      element.shouldBe(enabled);
    }else{
      element.shouldNotBe(enabled);
    }
  }

  @Then("the element (.*) should( not)* be selected")
  public void elementSelected(String cssSelector, String not) {
    SelenideElement element = $(cssSelector);
    if(not == null){
      element.shouldBe(selected);
    }else{
      element.shouldNotBe(selected);
    }
  }

  @Then("the checkbox (.*) should( not)* be checked")
  public void elementChecked(String cssSelector, String not) {
    SelenideElement element = $(cssSelector);
    if(not == null){
      element.shouldBe(checked);
    }else{
      element.shouldNotBe(checked);
    }
  }

  @Then("the element (.*) should( not)* exist")
  public void elementExists(String cssSelector, String not) {
    SelenideElement element = $(cssSelector);
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
    //note to self: if selenide.org implements code request 739 then replace elementText(element) with element.text() https://github.com/codeborne/selenide/issues/739
  }

  @Then("the element (.*) should( not)* have the same text as element (.*)")
  public void elementTextCompare(String cssSelector, String not, String cssSelector2) {
    SelenideElement element = $(cssSelector);
    SelenideElement element2 = $(cssSelector2);
    if(not == null){
      assertEquals(elementText(element), elementText(element2));
    }else{
      assertNotEquals(elementText(element), elementText(element2));
    }
  }

  @Then("the element (.*) should( not)* contain within it this text: (.*)")
  public void elementContainsText(String cssSelector, String not, String expectedText) {
    SelenideElement element = $(cssSelector);
    if (not == null) {
      assertTrue(elementText(element).contains(expectedText));
    } else {
      assertFalse(elementText(element).contains(expectedText));
    }
  }

  @Then("the element (.*) should( not)* have exactly this text: (.*)")
  public void elementHasText(String cssSelector, String not, String expectedText) {
    SelenideElement element = $(cssSelector);
    if (not == null) {
      assertEquals(expectedText, elementText(element));
    } else {
      assertNotEquals(expectedText, elementText(element));
    }
  }

  @Then("the element (.*) text should( not)* be empty")
  public void elementEmpty(String cssSelector, String not) {
    SelenideElement element = $(cssSelector);
    if (not == null) {
      assertNotEquals("", elementText(element));
    } else {
      assertEquals("", elementText(element));
    }
  }

  @Then("the browser title should be (.*)")
  public void assertTitle(String expectedTitleTag) {
    assertEquals(title(),expectedTitleTag);
  }

  @Then("the browser URL should( not)* be (.*)")
  public void assertBrowserURL(String not, String expectedBrowserURL) {
    String actualBrowserURL = executeJavaScript("return window.top.location.href");
    if (not == null) {
      assertEquals(expectedBrowserURL, actualBrowserURL);
    } else {
      assertNotEquals(expectedBrowserURL, actualBrowserURL);
    }
  }

  @Then("the css property (.*) of element (.*) should( not) have the value (.*)")
  public void cssPropertyValue(String property, String cssSelector, String not, String expectedCSSValue){
    SelenideElement element = $(cssSelector);
        if (not == null) {
      assertEquals(expectedCSSValue, element.getCssValue(property));
    } else {
      assertNotEquals(expectedCSSValue, element.getCssValue(property));
    }
  }

  @Then("the attribute (.*) of element (.*) should( not) have the value (.*)")
  public void attributeValue(String attribute, String cssSelector, String not, String expectedAttributeValue){
    SelenideElement element = $(cssSelector);
    if (not == null) {
      assertEquals(expectedAttributeValue, element.getAttribute(attribute));
    } else {
      assertNotEquals(expectedAttributeValue, element.getAttribute(attribute));
    }
  }

  @Then("the cookie (.*) should( not)* contain the value (.*)")
  public void cookieValue(String cookieName, String not, String expectedCookieValue){
    sleep(750);//wait for cookie
    Cookie cookie = getWebDriver().manage().getCookieNamed(cookieName);
    if (not == null) {
      assertEquals(expectedCookieValue, cookie.getValue());
    } else {
      assertNotEquals(expectedCookieValue, cookie.getValue());
    }
  }

  @Then("the cookie (.*) should( not)* exist")
  public void assertCookieNotExist(String cookieName, String not){
    sleep(750);//wait for cookie
    Cookie cookie = getWebDriver().manage().getCookieNamed(cookieName);
    if (not == null){
      assertNotNull(cookie);
    }else{
      assertNull(cookie);
    }

  }

  //@Then("the element (.*) should be (.*)px (wide|tall)

  @Then("(an alertbox|a confirmbox|a prompt) should( not)* be opened")
  public void checkAlert(String skip, String not){
    Boolean alertExists;
    try{
      getWebDriver().switchTo().alert();
      alertExists = true;
    }catch(Exception ex){
      alertExists = false;
    }
    if (not == null){
      assertTrue(alertExists);
    }else{
      assertFalse(alertExists);
    }
  }
  
  public void printVal(Object val, Integer itemNum){
    System.out.println("****print value**** item #:" + itemNum);
    System.out.println(val);
    System.out.println("****end of print value****");
  }
  public void printVal(Object val) {
    System.out.println("****print value****");
    System.out.println(val);
    System.out.println("****end of print value****");
  }

}
