package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import pages.ExpensesPage;
import pages.HomePage;
import pages.LoginPage;
import utilities.Config;
import utilities.Driver;

public class BilalPD116_test1 {
    @Given("User on the Login page")
    public void user_on_the_Login_page() {
        Driver.getDriver().get(Config.getProperty("url"));
    }
    @When("user logs in to the web page {string} and {string}")
    public void user_logs_in_to_the_web_page_and(String string, String string2) {
        LoginPage lp = new LoginPage();

        lp.briteERPLogin(Config.getProperty(string), Config.getProperty(string2));// Given website url
    }




    @Given("click to home page")
    public void click_to_home_page() {
        HomePage hp = new HomePage();
        hp.clickingOnExpensesButton();   // Then click to home page;
    }

    @Given("click to ExpenseProductButton")
    public void click_to_ExpenseProductButton() {
        ExpensesPage ep = new ExpensesPage();
        ep.clickingExpenseProductsButton(); // And click to ExpenseProductButton;
    }

    @Given("click to creat Button")
    public void click_to_creat_Button() {
        WebElement createButton = Driver.getDriver().findElement(By.cssSelector("button.btn.btn-primary.btn-sm.o-kanban-button-new.btn-default"));
        createButton.click();//when click to creat Button;
    }

    @Given("type product name in productNameBox")
    public void type_product_name_in_productNameBox() {
        WebElement productNameBox = Driver.getDriver().findElement(By.cssSelector("input#o_field_input_95"));
        productNameBox.sendKeys(Config.getProperty("productName1"));// Then type product name in productNameBox;
    }

    @Given("Select Consumable in productTypeDropDownButon")
    public void select_Consumable_in_productTypeDropDownButon() {
        WebElement productTypeDropdown = Driver.getDriver().findElement(By.id("o_field_input_97"));
        Select select = new Select(productTypeDropdown);
        select.selectByVisibleText("Consumable");// And Select Consumable in productTypeDropDownButon;
    }

    @When("click to taxTypesDropDown")
    public void click_to_taxTypesDropDown() {
        WebElement taxTypesDropdown = Driver.getDriver().findElement(By.id("o_field_input_104"));
        taxTypesDropdown.click();// When click to taxTypesDropDown;
    }

    @Then("click to salesTaxSelection")
    public void click_to_salesTaxSelection() {
        WebElement salesTaxSelection = Driver.getDriver().findElement(By.xpath("//a[.='sales']"));
        salesTaxSelection.click();//Then click to salesTaxSelection;
    }

    @Then("check the archiveButton, is it enabled or not")
    public void check_the_archiveButton_is_it_enabled_or_not() {
        WebElement archiveButton = Driver.getDriver().findElement(By.cssSelector("button.btn.btn-sm.oe_stat_button"));
        boolean check = archiveButton.isEnabled();

        Assert.assertTrue(check, "Verification of archieving new expense product is FAILED");// And check the archiveButton, is it enabled or not;
        Driver.getDriver().close();
    }
}
