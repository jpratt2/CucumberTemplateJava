import com.codeborne.selenide.Configuration;
import cucumber.api.junit.Cucumber;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
public class runTest {

    @BeforeClass
    public static void setup() {
        Configuration.baseUrl = "";
        //Configuration.browserSize = "1024x1024";
        if(System.getProperty("selenide.browser") == null){//this value is passed in via command line
            Configuration.browser = "chrome";   //set default browser
            // options include chrome firefox ie edge htmlunit phantomjs safari
        }
    }

}


