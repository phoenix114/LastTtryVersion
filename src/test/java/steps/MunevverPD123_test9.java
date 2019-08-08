package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.ui.Select;
import pages.ExpensesPage;
import pages.LoginPage;
import utilities.Config;
import utilities.Driver;

public class MunevverPD123_test9 {
    ExpensesPage ep = new ExpensesPage();



    @When("user log on the webpage where username is {string} and {string}")
    public void user_log_on_the_webpage_where_username_is_and(String string, String string2) {
        Driver.getDriver().get(Config.getProperty("url"));
        LoginPage lg = new LoginPage();
        lg.emailBox.sendKeys("in_ex_officer2@info.com");
        lg.passwordBox.sendKeys("LLighg94");
        lg.loginButton.click();
    }

    @Then("user should clicking on the ExpenseProductButton")
    public void user_should_clicking_on_the_ExpenseProductButton() {
        ep.expenses.click();

    }

    @Then("user should be able  on the create Button")
    public void user_should_be_able_on_the_create_Button() {
      ep.createButton.click();
      ep.customer.sendKeys("munevver");
      ep.product.click();
      ep.chooseProduct.click();
      ep.dateInput.click();
      ep.datebox.click();
    }

    @Then("user clicks on the Employee Dropdown listt")
    public void user_clicks_on_the_Employee_Dropdown_listt() {
       ep.employeeInput.click();


    }

    @Then("user selects the Employee Namee")
    public void user_selects_the_Employee_Namee() {
       ep.employeeName.click();
       ep.clickSave.click();
    }

    @Then("user should be able click on documents")
    public void user_should_be_able_click_on_documents() {
        ep.document.click();
    }

    @Then("user should be able createAttachment")
    public void user_should_be_able_createAttachment() {
     ep.createAttachment.click();
     ep.typeAttachment.sendKeys("munever");
        Select select = new Select(ep.type);
        select.selectByIndex(1);
        ep.url.sendKeys("https://www.google.com/");
        ep.save.click();


    }



}


