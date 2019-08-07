package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.ExpensesPage;
import pages.LoginPage;
import utilities.Config;

public class munevver {

    ExpensesPage expensesPage = new ExpensesPage();

    @Given("User on login to account with credentials")
    public void user_on_login_to_account_with_credentials() {

        LoginPage loginPage = new LoginPage();

        loginPage.briteERPLogin(Config.getProperty("manager1Email"), Config.getProperty("manager1Password"));

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
    public void user_put_customer_name(String string) {

        expensesPage.customer.sendKeys(string);
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

        //String expectedDate ="07/22/2019";

        String expectedEmployeeName = "Ashley Presley";

        //Assert.assertEquals(expensesPage.actualDate.getText(), expectedDate);

        Assert.assertTrue(expensesPage.actualEmployeeName.getText().equals(expectedEmployeeName));

    }

}
