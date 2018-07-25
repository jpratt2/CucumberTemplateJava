package definitions;
import com.codeborne.selenide.Configuration;
import com.codeborne.selenide.ElementsCollection;
import com.codeborne.selenide.SelenideElement;
import java.awt.*;
import java.awt.event.KeyEvent;

import org.apache.commons.lang3.StringUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.remote.RemoteWebElement;

import java.lang.reflect.Field;
import java.util.*;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.WebDriverRunner.getWebDriver;
import static com.codeborne.selenide.WebDriverRunner.isChrome;


public class Library {
    //setting for "I wait for the page to load", or waitPageLoad();
    public static Integer timeoutLimitSeconds = 15;

    //other
    public static Integer tabCountBeforeClick;
    public static ArrayList<String> tabs = new ArrayList<String>(getWebDriver().getWindowHandles());


    //debugging/////////////////
    public static void printVal(Object value,Integer itemNum){
        System.out.println("****print value**** item #:"+itemNum);
        System.out.println(value);
        System.out.println("****end of print value****");
    }

    public static void printVal(Object value){
        System.out.println("****print value****");
        System.out.println(value);
        System.out.println("****end of print value****");
    }

    public static void consoleLogVal(Object value){
        Configuration.holdBrowserOpen = true; //to prevent closing the browser so you can inspect the console
        executeJavaScript("console.log('console log value:'); console.log(arguments[0]);", value);
    }
    public static void alertVal(Object value){
        executeJavaScript("alert(arguments[0]);", value);
        waitForAlertToBeAccepted();
    }

    public static void highlightElement(SelenideElement element) {
        String currentBorderSetting = element.getCssValue("border");
        executeJavaScript("arguments[0].style.border='3px solid red'", element);
        pause(2000);
        executeJavaScript("arguments[0].style.border='" + currentBorderSetting + "'", element);
        pause(500);
        //source: https://stackoverflow.com/questions/10660291/highlight-elements-in-webdriver-during-runtime
    }

    public static void highlightElement(String elementLocator) {
        SelenideElement element = getElement(elementLocator);
        highlightElement(element);
    }

    ////////////utilities///////////////

    public static HashMap<String, String> locatorNameMap_Gherkin = new HashMap<String, String>();

    public static HashMap<String, Object> locatorNameMap_e = new HashMap<String, Object>();

    public static void populateLocatorNameHashMap(){
        Locators locatorNamesObj = new Locators();
        Field[] names =  locatorNamesObj.getClass().getFields();
        Field name;
        String nameStr;
        for(int i = 0; i<names.length; i++){
            name = names[i];
            nameStr = name.toString();
            nameStr = StringUtils.substringAfterLast(nameStr, ".");
            name.setAccessible(true);//in case the variable is not declared "public"
            try {
                Object value = name.get(locatorNamesObj);
                locatorNameMap_e.put(nameStr,value);
            }catch(IllegalAccessException ex){
                System.out.println("***IllegalAccessException***"+ ex);
            }
        }
        //sources: http://www.avajava.com/tutorials/lessons/how-do-i-list-the-public-fields-of-a-class.html & https://stackoverflow.com/a/14114122
    }

    public static SelenideElement getElement(String elementLocator) {
        SelenideElement element;

        //check if the elementLocator is a name specified in class "Locators"
        if (locatorNameMap_e.get(elementLocator) != null) {
            Object locatorCodeObj = locatorNameMap_e.get(elementLocator);
            element = (SelenideElement) locatorCodeObj;

        } else {

            //check if the elementLocator is a name defined in Gherkin; if found, replace it with its locator code.
            if (locatorNameMap_Gherkin.get(elementLocator) != null) {
                elementLocator = locatorNameMap_Gherkin.get(elementLocator);
            }
            //check if the elementLocator is written in jQuery
            if (elementLocator.matches("\\$\\(.*")){
                element = getElementByJQueryLocator(elementLocator);
            } else {
                //process the Gherkin string locator
                //strip off single quotes, get the locator code and the index value
                String indexStr = StringUtils.substringAfterLast(elementLocator, "'");
                if (indexStr.equals("")) {
                    indexStr = "0";
                }
                Integer index = Integer.parseInt(indexStr);
                elementLocator = StringUtils.removePattern(elementLocator, "'\\d+$");
                elementLocator = StringUtils.removePattern(elementLocator, "^'");

                //check if it is a By. selenium locator
                if (elementLocator.matches("By[.].*")) {
                    By byLocator = convertStringToByLocator(elementLocator);
                    element = $(byLocator, index);
                } else {
                    element = $(elementLocator, index);
                }
            }
        }
        return element;
    }

    public static SelenideElement getElementByJQueryLocator(String jQueryLocator){
        RemoteWebElement elementRWE = (RemoteWebElement) executeJavaScript("return eval(arguments[0]);", jQueryLocator);
        SelenideElement element = $(elementRWE);
        return element;
    }

    public static ElementsCollection getElementsCollection(String elementLocator){
        ElementsCollection collection;
        //check if the elementLocator is a name defined in the "Locators" class
        if (locatorNameMap_e.get(elementLocator) != null){
            Object locatorCodeObj = locatorNameMap_e.get(elementLocator);
            collection = (ElementsCollection) locatorCodeObj;
        }else if (elementLocator.matches("By[.].*")){
            By byLocator = convertStringToByLocator(elementLocator);
            collection = $$(byLocator);
        }else{
            collection = $$(elementLocator);
        }
        return collection;
    }

    public static By convertStringToByLocator(String ByText) {
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

    public static String parentWindowHandler;

    public static void selectBrowserPopup() {
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

    public static void deselectBrowserPopup() {
        WebDriver driver = getWebDriver();
        driver.switchTo().window(parentWindowHandler);
    }
    //source: https://stackoverflow.com/questions/19403949/how-to-handle-pop-up-in-selenium-webdriver-using-java/19409121#19409121

    public static void waitPageLoad() {
        checkForDocumentReadyStateComplete();
        sleep(2000); //some time for javascript to load another http request
        checkForDocumentReadyStateComplete();
    }
    public static void checkForDocumentReadyStateComplete() {
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

    public static void stopTest(){
        Configuration.holdBrowserOpen = true;
        System.exit(0);
    }

    public static void pause(Integer milliseconds){
        sleep(milliseconds);
    }

    public static void pressEnter(){
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

    public static void pressTab(Integer amount){
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

    public static void pressCommandT(){
        //note: this doesn't work //\\
        try{
            Robot robot=new Robot();
            robot.keyPress(KeyEvent.VK_META);
            pause(250);
            robot.keyPress(KeyEvent.VK_T);
            sleep(500);
            robot.keyRelease(KeyEvent.VK_META);
            robot.keyRelease(KeyEvent.VK_T);
        }
        catch(Exception ex){
            System.out.println(ex.getMessage());
        }
    }

    public static void pressControlT(){
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

    public static Boolean alertExists(){
        Boolean alertExists;
        try{
            getWebDriver().switchTo().alert();
            alertExists = true;
        }catch(Exception ex){
            alertExists = false;
        }
        return alertExists;
    }

    public static void waitForAlertToBeAccepted(){
        Boolean alertExists = true;
        while(alertExists == true){
            alertExists = alertExists();
            pause(500);
        }
    }

    public static void clearAllCookiesInChrome(){
        if(isChrome()){
            getWebDriver().get("chrome://settings/siteData?search=cookies");
            //special Robots-class keystrokes are needed when on a chrome:// page
            pressTab(4);
            pressEnter();
            pressEnter();
        }else{
            System.out.println("***error - cookies were not cleared; This is not a Chrome browser.***");
        }
    }

}
