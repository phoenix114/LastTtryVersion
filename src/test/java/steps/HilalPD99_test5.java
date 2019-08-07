package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pages.LoginPage;
import utilities.Driver;

public class HilalPD99_test5 {


    @When("user is clicking on the ExpenseProductButton")
    public void user_is_clicking_on_the_ExpenseProductButton() throws InterruptedException {
        WebElement expensesLink = Driver.getDriver().findElement(By.xpath("//*[@id=\"oe_main_menu_navbar\"]/div[2]/ul[1]/li[9]/a/span"));
        expensesLink.click();
        Thread.sleep(2000);
    }

    @Then("user is clicking  on the create Button")
    public void user_is_clicking_on_the_create_Button() {
        WebElement createButton = Driver.getDriver().findElement(By.cssSelector(".o_list_button_add"));
        createButton.click();
    }

    @Then("user clicks on the Employee Dropdown list")
    public void user_clicks_on_the_Employee_Dropdown_list() {
        WebElement employeeDropdown = Driver.getDriver().findElement(By.id("o_field_input_27"));
        employeeDropdown.click();
    }

    @Then("user selects the Employee Name")
    public void user_selects_the_Employee_Name() throws InterruptedException {
        WebElement selectEmployee = Driver.getDriver().findElement(By.xpath("//a[.='David Samson']"));
        selectEmployee.click();
        Thread.sleep(1000);
        Assert.assertTrue(!selectEmployee.isDisplayed());
        Driver.getDriver().close();

    }
}
