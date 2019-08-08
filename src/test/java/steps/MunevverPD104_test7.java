package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.ExpensesPage;
import pages.LoginPage;
import utilities.Config;

public class MunevverPD104_test7 {

    LoginPage loginPage = new LoginPage();
    ExpensesPage expensesPage = new ExpensesPage();

    @Given("user log in the webpage  with {string} and  {string}")
    public void user_log_in_the_webpage_with_and(String username, String password) {

        loginPage.briteERPLogin(username, password);
    }

    @Given("User press on expenses module")
    public void user_press_on_expenses_module() {

        expensesPage.expenses.click();
    }

    @Given("User click on create button")
    public void user_click_on_create_button() {

        expensesPage.createButton.click();
    }

    @Given("User put customer name {string}")
    public void user_put_customer_name(String name) {

        expensesPage.customer.sendKeys(name);
    }

    @Given("User selects other options")
    public void user_selects_other_options() {

        expensesPage.product.click();

        expensesPage.chooseProduct.click();

        expensesPage.dateInput.click();

        expensesPage.datebox.click();

        expensesPage.employeeInput.click();

        expensesPage.employeeName.click();
    }

    @When("User saves the expenses")
    public void user_saves_the_expenses() {

        expensesPage.clickSave.click();

    }

    @Then("Verify the employee name")
    public void verify_the_employee_name() {

        String expectedEmployeeName = "Ashley Presley";

        Assert.assertTrue("Failed because it if not displaed!", expensesPage.actualEmployeeName.isDisplayed());
    }

}
