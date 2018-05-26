package stepDefinitions;

import com.codeborne.selenide.Selenide;
import com.codeborne.selenide.SelenideElement;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.Cookie;

import static com.codeborne.selenide.Condition.text;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

public class predefinedWhenStepDefinitions {
  //actions

  @When("I open the URL (.*)")
  public void openURL(String URL) {
    if(URL.equals("demo app")){
      open("file:///" + System.getProperty("user.dir") + "/src/test/resources/testTheTest/demo-app/index.html");
    } else {
      open(URL);
    }
  }

  @When("I pause (\\d+) ms")
  public void pause(Integer milliseconds) {
    sleep(milliseconds);
  }

  @When("I clear cookies for the current domain")
  public void clearCookiesCurrentDomain(){
    clearBrowserCookies();
  }

  @When("I delete the cookie named (.*)")
  public void cookieValue(String cookieName){
    getWebDriver().manage().deleteCookieNamed(cookieName);
  }

  @When("I (click|doubleclick) on the element (.*)")
  public void clickElement(String click, String cssSelector){
    SelenideElement element = $(cssSelector);
    if(click.equals("click")){
      element.click();
    }else{
      element.doubleClick();
    }
  }
}

