package definitions;

import com.codeborne.selenide.*;
import cucumber.api.java.en.Given;
import org.openqa.selenium.*;
import static com.codeborne.selenide.Selenide.*;
import static definitions.Library.*;
import static definitions.HYFYvideo.*;

public class GivenStepDefinitions{

    @Given("I give the name (.*) to the locator (.*)")
    public static void declareElementName(String name, String elementLocator) throws Exception{
        locatorNameMap_Gherkin.put(name,elementLocator);
    }

    @Given("I launch Chrome to record video")
    public static void launchChromeHYFY() throws Exception{
        startChromeWithHYFY();
    }

    @Given("I start recording video")
    public static void startVideo() throws Exception{
        startRecorder();
    }

    @Given("I stop recording video")
    public static void stopVideo() throws Exception{
        stopRecorder();
    }

}