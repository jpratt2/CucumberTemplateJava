import com.codeborne.selenide.Configuration;
import cucumber.api.junit.Cucumber;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
public class runTest {

    @BeforeClass
    public static void setup() {
        Configuration.baseUrl = "";
        if(System.getProperty("selenide.browser") == null){//this is passed via command line
            Configuration.browser = "chrome";   //set default browser
        }
    }

}


