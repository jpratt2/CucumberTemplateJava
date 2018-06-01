package stepDefinitions;
import com.codeborne.selenide.Configuration;
import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import java.awt.*;
import java.awt.event.KeyEvent;
import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import java.util.*;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;

public class library{
    public static Integer timeoutLimitSeconds = 10;
    public static Integer tabCountBeforeClick;
    public static WebDriver driver = getWebDriver();
    public static ArrayList<String> tabs = new ArrayList<String>(driver.getWindowHandles());



    //debugging/////////////////
    public void printVal(Object value,Integer itemNum){
        System.out.println("****print value**** item #:"+itemNum);
        System.out.println(value);
        System.out.println("****end of print value****");
    }

    public void printVal(Object value){
        System.out.println("****print value****");
        System.out.println(value);
        System.out.println("****end of print value****");
    }

    public void consoleLogVal(Object value){
        Configuration.holdBrowserOpen = true; //to prevent closing the browser so you can inspect the console
        executeJavaScript("console.log('console log value:'); console.log(arguments[0]);", value);
    }
    public void alertVal(Object value){
        executeJavaScript("alert(arguments[0]);", value);
        waitForAlertToBeAccepted();
    }

    public void highlightElement(SelenideElement element) {
        String currentBorderSetting = element.getCssValue("border");
        executeJavaScript("arguments[0].style.border='3px solid red'", element);
        sleep(2000);
        executeJavaScript("arguments[0].style.border='" + currentBorderSetting + "'", element);
        //source: https://stackoverflow.com/questions/10660291/highlight-elements-in-webdriver-during-runtime
    }

    public void highlightElement(String elementLocator) {
        SelenideElement element = getElement(elementLocator);
        highlightElement(element);
    }

    ////////////utilities///////////////

    public static HashMap<String, String> elementNameMap_Gherkin = new HashMap<String, String>();
    public String elementNameLookup_Gherkin(String name){
        return elementNameMap_Gherkin.get(name);
    }

    public static HashMap<String, SelenideElement> elementNameMap_Java = new HashMap<String, SelenideElement>();
    public SelenideElement elementNameLookup_Java(String name){
        return elementNameMap_Java.get(name);
    }

    public void putElementName(String name, SelenideElement elementLocatorCode){
        elementNameMap_Java.put(name, elementLocatorCode);
        //example:  putElementName("main button", $("#divMain").find("button"));
    }

    public SelenideElement getElement(String elementLocator){
        SelenideElement element;
        //check if the elementLocator is a name for a Java (code) locator
        if(elementNameLookup_Java(elementLocator) != null) {
            element = elementNameLookup_Java(elementLocator);
            return element;
        //////////////////////end of method for java locator///////////////
        }

        //check if the elementLocator is a name for a Gherkin locator
        if (elementNameLookup_Gherkin(elementLocator) != null){
            elementLocator = elementNameLookup_Gherkin(elementLocator);
        }
        //process the Gherkin (String) locator:
        String indexStr = StringUtils.substringAfterLast(elementLocator, "'");
        if (indexStr.equals("")) {
            indexStr = "0";
        }
        Integer index = Integer.parseInt(indexStr);
        elementLocator = StringUtils.removePattern(elementLocator, "'\\d+$");
        elementLocator = StringUtils.removePattern(elementLocator, "^'");
        if (elementLocator.matches("By[.].*")) {
            By byLocator = convertStringToByLocator(elementLocator);
            element = $(byLocator, index);
        } else {
            element = $(elementLocator, index);
        }
        return element;
    }

    public ElementsCollection getElementsCollection(String elementLocator){
        ElementsCollection collection;
        if(elementLocator.matches("By[.].*")){
            By byLocator = convertStringToByLocator(elementLocator);
            collection = $$(byLocator);
        }else{
            collection = $$(elementLocator);
        }
        return collection;
    }

    public By convertStringToByLocator(String ByText) {
    String byType = StringUtils.substringBetween(ByText,".","(");
    String byValue = StringUtils.substringBetween(ByText,"(\"","\")");
    By byLocator= byType.equalsIgnoreCase("className") ? By.className(byValue)
                : byType.equalsIgnoreCase("cssSelector") ? By.cssSelector(byValue)
                : byType.equalsIgnoreCase("id") ? By.id(byValue)
                : byType.equalsIgnoreCase("linkText") ? By.linkText(byValue)
                : byType.equalsIgnoreCase("name") ? By.name(byValue)
                : byType.equalsIgnoreCase("partialLinkText") ? By.partialLinkText(byValue)
                : byType.equalsIgnoreCase("tagName") ? By.tagName(byValue)
                : byType.equalsIgnoreCase("xpath") ? By.xpath(byValue)
                : By.tagName("Error -- the By locator has an error");
    return byLocator;
    }

    public String getBrowserName(){
        String browserName = executeJavaScript(
                "    var userAgent = navigator.userAgent;\n" +
                        "    var browserName =\n" +
                        "        (userAgent.match('Firefox')) ? 'firefox'\n" +
                        "            : (userAgent.match('OPR')) ? 'opera'\n" +
                        "            : (userAgent.match('Chrome')) ? 'chrome'\n" +
                        "            : (userAgent.match('Trident')) ? 'ie'\n" +
                        "            : (userAgent.match('Safari')) ? 'safari'\n" +
                        "            : 'browser-unknown' ;\n" +
                        "    return browserName;"
        );
        return browserName;
    }

    String parentWindowHandler;

    public void selectBrowserPopup() {
        WebDriver driver = getWebDriver();
        parentWindowHandler = driver.getWindowHandle();
        String subWindowHandler = null;
        Set<String> handles = driver.getWindowHandles(); // get all window handles
        Iterator<String> iterator = handles.iterator();
        while (iterator.hasNext()) {
            subWindowHandler = iterator.next();
        }
        driver.switchTo().window(subWindowHandler); // switch to popup window
    }

    public void deselectBrowserPopup() {
        WebDriver driver = getWebDriver();
        driver.switchTo().window(parentWindowHandler);
    }
    //source: https://stackoverflow.com/questions/19403949/how-to-handle-pop-up-in-selenium-webdriver-using-java/19409121#19409121

    public void waitPageLoad() {
        checkForDocumentReadyStateComplete();
        sleep(2000); //some time for javascript to load another http request
        checkForDocumentReadyStateComplete();
    }
    void checkForDocumentReadyStateComplete() {
        for (int i = 0; i < (timeoutLimitSeconds * 4); i++) { // check every quarter of a second (every 250 ms)
            sleep(250);
            //check if the javascript "ready state" is complete:
            try {
                if (executeJavaScript("return document.readyState").toString().equals("complete")) {
                    break;
                }
            } catch (Exception e) {
            }
        }//source: https://stackoverflow.com/questions/10720325/selenium-webdriver-wait-for-complex-page-with-javascriptjs-to-load/10726369#10726369
    }

    public String getComputedStyle(SelenideElement element, String propertyValue){
        //element must be in viewport for the element to be found
        scrollIntoView(element);
        String computedStyle = (String) executeJavaScript(
                "var element = arguments[0];"+
                        "var propertyValue = arguments[1];"+
                        "var computedStyle = window.getComputedStyle(element).getPropertyValue(propertyValue);"+
                        "return computedStyle;"
                , element,propertyValue);
        return computedStyle;
        //source: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
        // use this alternatively: element.getCssValue()
    }

    public void scrollIntoView(SelenideElement element){
        executeJavaScript("arguments[0].scrollIntoView(true);", element);
    }

    public void stopTest(){
        Configuration.holdBrowserOpen = true;
        System.exit(0);
    }

    public void pause(Integer milliseconds){
        sleep(milliseconds);
    }

    public void pressEnter(){
        try{
            Robot robot=new Robot();
            robot.keyPress(KeyEvent.VK_ENTER);
            sleep(500);
            robot.keyRelease(KeyEvent.VK_ENTER);
        }
        catch(Exception ex){
            System.out.println(ex.getMessage());
        }
    }

    public void pressTab(Integer amount){
        try{
            Robot robot=new Robot();
            for(Integer i=0; i<amount; i++) {
                robot.keyPress(KeyEvent.VK_TAB);
                sleep(500);
                robot.keyRelease(KeyEvent.VK_TAB);
            }
        }
        catch(Exception ex){
            System.out.println(ex.getMessage());
        }
    }

    public void pressCommandT(){
        try{
            Robot robot=new Robot();
            robot.keyPress(KeyEvent.VK_META);
            robot.keyPress(KeyEvent.VK_T);
            sleep(500);
            robot.keyRelease(KeyEvent.VK_META);
            robot.keyRelease(KeyEvent.VK_T);
        }
        catch(Exception ex){
            System.out.println(ex.getMessage());
        }
    }

    public void pressControlT(){
        try{
            Robot robot=new Robot();
            robot.keyPress(KeyEvent.VK_CONTROL);
            robot.keyPress(KeyEvent.VK_T);
            sleep(500);
            robot.keyRelease(KeyEvent.VK_CONTROL);
            robot.keyRelease(KeyEvent.VK_T);
        }
        catch(Exception ex){
            System.out.println(ex.getMessage());
        }
    }


    public Boolean alertExists(){
        Boolean alertExists;
        try{
            getWebDriver().switchTo().alert();
            alertExists = true;
        }catch(Exception ex){
            alertExists = false;
        }
        return alertExists;
    }

    public void waitForAlertToBeAccepted(){
        Boolean alertExists = true;
        while(alertExists == true){
            alertExists = alertExists();
            pause(500);
        }
    }

}
