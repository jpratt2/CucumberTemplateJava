package definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import static com.codeborne.selenide.Selenide.clearBrowserCookies;

public class BetweenScenarios extends Library {

    @Before
    public void beforeEachScenario(){
        //clearAllCookiesInChrome(); //clears all browser cookies
    }

    @After
    public void afterEachScenario(){
        clearBrowserCookies(); // clears cookies of the current domain
    }

}
