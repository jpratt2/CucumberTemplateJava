package definitions;

import com.codeborne.selenide.SelenideElement;
import static com.codeborne.selenide.Selenide.*;
import com.codeborne.selenide.WebDriverRunner;
import org.openqa.selenium.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import java.io.File;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.open;
import static definitions.Library.*;
import static definitions.WhenStepDefinitions.closeAllTabsExceptFirst;

public class HYFYvideo{

    private static String HFYYusername = "username@email.com"; //***get username using "sign up with email" option at app.hyfy.io/accounts/login/***
    private static String HYFYpassword = "password";           //***password***
    private static int secondsForUpload = 15;                  //**seconds to wait for upload of video at completion of test
    /////////////////////////////////
    private static WebDriver driver;

    public static void loginHYFY(){
        open("https://app.hyfy.io/accounts/login/");
        SelenideElement username = $(By.id("js-user-email"));
        SelenideElement password = $("#js-user-password");
        SelenideElement loginBtn = $(By.className("login-btn"));
        username.setValue(HFYYusername);
        password.setValue(HYFYpassword);
        loginBtn.click();
        waitPageLoad();
    }

    public static void closeBrowser(){
        //necessary when a new browser is launched
        try {
            WebDriver driverCurrent = WebDriverRunner.getWebDriver();
            driverCurrent.quit();
        }catch (Exception ex){}
    }

    public static void startChromeWithHYFY() throws Exception{
        closeBrowser();//close the default browser
        ChromeOptions options = new ChromeOptions()
                //add this folder as a Chrome extension:   chromeExtensions\HYFY.io\kfhkikpdmehlpkaiplafjkaicdljldcf\3.26.0_0
                .addArguments("load-extension=" + System.getProperty("user.dir") + File.separator + "chromeExtensions" + File.separator + "HYFY.io" + File.separator + "kfhkikpdmehlpkaiplafjkaicdljldcf" + File.separator + "3.26.0_0")
                .addArguments("--whitelisted-extension-id=kfhkikpdmehlpkaiplafjkaicdljldcf");
        driver = new ChromeDriver(options);
        WebDriverRunner.setWebDriver(driver);
        sleep(500);//give time for extra tab to open about Microphone permissions
        closeAllTabsExceptFirst();
        loginHYFY();
    }

    public static void startRecorder() {
        driver.get("chrome-extension://kfhkikpdmehlpkaiplafjkaicdljldcf/index.html#/start-recording");
        WebElement firstButton = driver.findElement(By.tagName("button"));
        firstButton.click();
        sleep(5000); //there is a delay before the video starts
    }

    public static void stopRecorder() {
        driver.get("chrome-extension://kfhkikpdmehlpkaiplafjkaicdljldcf/index.html#/stop-recording");
        WebElement firstButton = driver.findElement(By.tagName("button"));
        firstButton.click();
        sleep(secondsForUpload*1000);
    }

}
