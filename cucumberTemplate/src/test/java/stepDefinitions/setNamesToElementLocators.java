package stepDefinitions;

import static com.codeborne.selenide.Selenide.*;
/*
give names to Selenide locators or to string/CSS locators
They are similar to page objects, but the same locator name can be used across multiple pages
example:
setName("DragNDrop Area", $(".container").$("div",1));
setName("2nd button", "'button'1");
*/
public class setNamesToElementLocators extends library {

    public static void setNamesToElementLocators(){

        setName("DragNDrop Area", $(".container").$("div",1));
        setName("2nd button", "'button'1");





    }
}
