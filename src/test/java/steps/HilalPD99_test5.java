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

    @Given("user log in the webpage where username is {string} and {string}")
    public void user_log_in_the_webpage_where_username_is_and(String string, String string2) throws InterruptedException {
           /*
 PD-99 / As user i would like to be able to select my name
1 - Go to the Brite ERP Website-->the user should be able to open the website
2 - select the expenses button-->the user should be able to open the website
3 - Click on the create button-->The user should be able to click the button and see the all the functionality
4 - Click on Employee tab-->The user should be able to click on the button and should be able to see the names in dropdown list
5 - Select the employee name-->The user should be able to select their name under the Employees dropdown list
         */
        // Driver.getDriver().get("http://54.148.96.210/web/login");
        Thread.sleep(1000);
//        WebElement email  = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-login']//input"));
//        WebElement password = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-password']/input"));
//        email.sendKeys("in_ex_manager@info.com");
//        password.sendKeys("LLighg88");

        LoginPage lg= new LoginPage();
        lg.briteERPLogin(string,string2);

        Thread.sleep(1000);
//        WebElement logInButton = Driver.getDriver().findElement(By.xpath("//div[@class='clearfix oe_login_buttons']/button"));
//        logInButton.click();
//        Thread.sleep(2000);
    }


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
