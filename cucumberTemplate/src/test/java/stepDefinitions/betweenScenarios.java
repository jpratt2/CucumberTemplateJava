package stepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

import static com.codeborne.selenide.Selenide.clearBrowserCookies;

public class betweenScenarios extends library {

    @Before
    public void beforeEachScenario(){
        //clearAllCookiesInChrome(); //it clears ALL BROWSER COOKIES using keystrokes
    }

    @After
    public void afterEachScenario(){
        clearBrowserCookies(); // clears cookies of the current domain only
    }

}
