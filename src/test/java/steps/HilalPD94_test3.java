package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import pages.LoginPage;
import utilities.Driver;

public class HilalPD94_test3 {
    @When("User Loggin username {string} and password {string}")
    public void user_Loggin_username_and_password(String string, String string2) throws InterruptedException {
        Thread.sleep(1000);
//        WebElement email  = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-login']//input"));
//        WebElement password = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-password']/input"));
//        email.sendKeys("in_ex_manager@info.com");
//        password.sendKeys("LLighg88");

        LoginPage lg= new LoginPage();
        lg.briteERPLogin(string,string2);
        Thread.sleep(1000);// When User Loggin and Password in
    }



    @When("User click to expenses link")
    public void user_click_to_expenses_link() {
        WebElement expensesLink = Driver.getDriver().findElement(By.xpath("//*[@id=\"oe_main_menu_navbar\"]/div[2]/ul[1]/li[9]/a/span"));
        expensesLink.click();// And User click to expenses link
    }

    @When("user create Button click")
    public void user_create_Button_click() throws InterruptedException {
        Thread.sleep(1000);
        WebElement createButton = Driver.getDriver().findElement(By.cssSelector(".o_list_button_add"));
        createButton.click();//And user create Button click
    }

    @When("user clicking on productDropDown button")
    public void user_clicking_on_productDropDown_button() {
        WebElement productDropdown = Driver.getDriver().findElement(By.id("o_field_input_19"));
        productDropdown.click();// And user clicking on productDropDown button
    }

    @When("user click on tshirt button")
    public void user_click_on_tshirt_button() throws InterruptedException {
        WebElement tshirt = Driver.getDriver().findElement(By.xpath("//a[.='[253] Tshirt']"));
        tshirt.click();
        Thread.sleep(1000);// And user click on tshirt button
    }

    @When("user type unitPrice {string}")
    public void user_type_unitPrice(String string) {
        WebElement unitPriceInput = Driver.getDriver().findElement(By.id("o_field_input_20"));
        unitPriceInput.clear();
        unitPriceInput.sendKeys(string);// Then user type unitPrice "5"
    }

    @Then("Then user type quantity {string}")
    public void then_user_type_quantity(String string) throws InterruptedException {
        WebElement quantityInput = Driver.getDriver().findElement(By.id("o_field_input_21"));
        quantityInput.clear();
        quantityInput.sendKeys(string+ Keys.ENTER);
        Thread.sleep(1000);// Then user type quantity "3"
    }



    @Then("user verifying actual title with expected title {string}")
    public void user_verifying_actual_title_with_expected_title(String string) {
        WebElement totalAmount = Driver.getDriver().findElement(By.xpath("//span[@name='total_amount']"));
        String actualtitle = totalAmount.getText();
        String expecttitle = string;
        Assert.assertEquals(actualtitle,expecttitle);//And user verifying actual title with expected title
    }

}
