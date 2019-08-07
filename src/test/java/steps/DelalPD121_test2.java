package steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import utilities.Driver;

public class DelalPD121_test2 {

    @When("user log in the webpage {string} and  {string}")
    public void user_log_in_the_webpage_and(String string, String string2) throws InterruptedException {
        //Driver.getDriver().get(Config.getProperty("url"));
        Thread.sleep(1000);//Given website url
        WebElement email  = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-login']//input"));
        WebElement password = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-password']/input"));
        email.sendKeys(string);
        password.sendKeys(string2);
        Thread.sleep(1000);
        WebElement logInButton = Driver.getDriver().findElement(By.xpath("//div[@class='clearfix oe_login_buttons']/button"));
        logInButton.click(); // When sign in to website
    }





    @When("click to Expense Product Button")
    public void click_to_Expense_Product_Button() {
        WebElement Expenses = Driver.getDriver().findElement(By.xpath("//*[@id=\"oe_main_menu_navbar\"]/div[2]/ul[1]/li[9]/a/span"));
        Expenses.click();// Then click to expenses button
    }

    @Then("click to create Button")
    public void click_to_create_Button() throws InterruptedException {
        WebElement createButton = Driver.getDriver().findElement(By.xpath("//button[@class='btn btn-primary btn-sm o_list_button_add']"));
        createButton.click();// And click to creat button
        Thread.sleep(2000);
    }

    @Then("user fills out all the mandatory fields")
    public void user_fills_out_all_the_mandatory_fields() throws InterruptedException {
        Driver.getDriver().findElement(By.id("o_field_input_19")).click();
        Thread.sleep(2000);
        Driver.getDriver().findElement(By.xpath("//a[.='[253] Tshirt']")).click();
        Thread.sleep(2000);
        Driver.getDriver().findElement(By.id("o_field_input_27")).click();
        Thread.sleep(2000);
        Driver.getDriver().findElement(By.xpath("//a[.='Ashley Presley']")).click();
        Thread.sleep(2000);

    }

    @Then("user clicks on Documents Button")
    public void user_clicks_on_Documents_Button() throws InterruptedException {
        Driver.getDriver().findElement(By.xpath("//button[@class='btn btn-sm oe_stat_button']")).click();
        Thread.sleep(2000);

    }

    @Then("user clicks on Import Button")
    public void user_clicks_on_Import_Button() {
        Driver.getDriver().findElement(By.xpath("//button[@class='btn btn-sm btn-default o_button_import']")).click();
    }

    @Then("user uploads the file")
    public void user_uploads_the_file() throws InterruptedException {
        WebElement chooseFile = Driver.getDriver().findElement(By.xpath("//input[@class='oe_import_file_show form-control']"));
        // chooseFile.click();
        chooseFile.sendKeys("C:\\Users\\delal\\Desktop\\mavenb11\\briteERP.txt"+ Keys.ENTER);
        Thread.sleep(2000);//And uplaod the file

    }


}
