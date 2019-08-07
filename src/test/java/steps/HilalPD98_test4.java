package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pages.LoginPage;
import utilities.Driver;

public class HilalPD98_test4 {




    @When("user is clicking the  ExpenseProductButton")
    public void user_is_clicking_the_ExpenseProductButton() {
        WebElement expensesLink = Driver.getDriver().findElement(By.xpath("//*[@id=\"oe_main_menu_navbar\"]/div[2]/ul[1]/li[9]/a/span"));
        expensesLink.click();

    }

    @Then("user is clicking  the create Button")
    public void user_is_clicking_the_create_Button() throws InterruptedException {
        Thread.sleep(2000);
        WebElement createButton = Driver.getDriver().findElement(By.cssSelector(".o_list_button_add"));
        createButton.click();
        Thread.sleep(1000);
    }

    @Then("user selects the product from the Dropdown list")
    public void user_selects_the_product_from_the_Dropdown_list() {
        WebElement productDropdown = Driver.getDriver().findElement(By.id("o_field_input_19"));
        productDropdown.click();
        WebElement tshirt = Driver.getDriver().findElement(By.xpath("//a[.='[253] Tshirt']"));
        tshirt.click();
    }
    @Then("user writes the price {string} and quantity {string}")
    public void user_writes_the_price_and_quantity(String string, String string2) throws InterruptedException {
        Thread.sleep(2000);
        WebElement unitPriceInput = Driver.getDriver().findElement(By.id("o_field_input_20"));
        unitPriceInput.clear();
        unitPriceInput.sendKeys(string);
        Thread.sleep(2000);
        WebElement quantityInput = Driver.getDriver().findElement(By.id("o_field_input_21"));
        quantityInput.clear();
        quantityInput.sendKeys(string2+ Keys.ENTER);
        Thread.sleep(2000);
    }


    @Then("user selects the employee name")
    public void user_selects_the_employee_name() {
        WebElement employeeDropdown = Driver.getDriver().findElement(By.id("o_field_input_27"));
        employeeDropdown.click();
        WebElement selectEmployee = Driver.getDriver().findElement(By.xpath("//a[.='Demo User']"));
        selectEmployee.click();
    }

    @Then("user clicks on the Submit button")
    public void user_clicks_on_the_Submit_button() throws InterruptedException {
        WebElement submitButton = Driver.getDriver().findElement(By.xpath("/html/body/div[1]/div[2]/div[2]/div/div/div/div[1]/div[1]/div[1]/button[1]"));
        submitButton.click();

        WebElement expectedText = Driver.getDriver().findElement(By.xpath("/html/body/div[1]/div[2]/div[2]/div/div/div/div[1]/div[2]/div[4]/ul/li[1]/a"));
        Assert.assertTrue(expectedText.isDisplayed());
       // Driver.getDriver().close();
        Thread.sleep(2000);
    }

}
