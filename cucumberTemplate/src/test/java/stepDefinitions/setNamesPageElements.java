package stepDefinitions;

import cucumber.api.java.en.When;
import static com.codeborne.selenide.Selenide.$;

public class setNamesPageElements extends library {

    @When("I set names to page elements")
    public void putNamesToElementsJava(){
        //give names to chained or complicated Selenide locators
        //example:
        putElementName("DragNDrop Area", $(".container").$("div",1));
    }

}
