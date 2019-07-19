package smokeSuite;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.annotations.Test;
import pages.ExpensesPage;
import pages.HomePage;
import pages.LoginPage;
import utilities.Config;
import utilities.Driver;

public class ExpensesModule {


    @Test
    public void creatingNewExpenseProduct(){


        LoginPage lp = new LoginPage();

        lp.briteERPLogin(Config.getProperty("manager1Email"), Config.getProperty("manager1Password"));

        HomePage hp = new HomePage();
        hp.clickingOnExpensesButton();

        ExpensesPage ep = new ExpensesPage();
        ep.clickingExpenseProductsButton();

        WebElement createButton = Driver.getDriver().findElement(By.cssSelector("button.btn.btn-primary.btn-sm.o-kanban-button-new.btn-default"));
        createButton.click();

        WebElement productNameBox = Driver.getDriver().findElement(By.cssSelector("input#o_field_input_95"));
        productNameBox.sendKeys(Config.getProperty("productName1"));

        WebElement productTypeDropdown = Driver.getDriver().findElement(By.id("o_field_input_97"));
        Select select = new Select(productTypeDropdown);
        select.selectByVisibleText("Consumable");

        WebElement taxTypesDropdown = Driver.getDriver().findElement(By.id("o_field_input_104"));
        taxTypesDropdown.click();

        WebElement salesTaxSelection = Driver.getDriver().findElement(By.xpath("//a[.='sales']"));
        salesTaxSelection.click();

        WebElement archiveButton = Driver.getDriver().findElement(By.cssSelector("button.btn.btn-sm.oe_stat_button"));
        boolean check = archiveButton.isEnabled();

        Assert.assertTrue(check, "Verification of archieving new expense product is FAILED");

    }

    @Test
    public void uploadDc()throws InterruptedException{
        Driver.getDriver().get(Config.getProperty("url"));
        Thread.sleep(1000);
        WebElement email  = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-login']//input"));
        WebElement password = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-password']/input"));
        email.sendKeys("in_ex_manager@info.com");
        password.sendKeys("LLighg88");
        Thread.sleep(1000);
        WebElement logInButton = Driver.getDriver().findElement(By.xpath("//div[@class='clearfix oe_login_buttons']/button"));
        logInButton.click();
        WebElement Expenses = Driver.getDriver().findElement(By.xpath("//*[@id=\"oe_main_menu_navbar\"]/div[2]/ul[1]/li[9]/a/span"));
        Expenses.click();
        WebElement createButton = Driver.getDriver().findElement(By.xpath("//button[@class='btn btn-primary btn-sm o_list_button_add']"));
        createButton.click();
        Driver.getDriver().findElement(By.id("o_field_input_19")).click();
        Driver.getDriver().findElement(By.xpath("//a[.='[253] Tshirt']")).click();
        Driver.getDriver().findElement(By.id("o_field_input_27")).click();
        Driver.getDriver().findElement(By.xpath("//a[.='Ashley Presley']")).click();
        Driver.getDriver().findElement(By.xpath("//button[@class='btn btn-sm oe_stat_button']")).click();
        Driver.getDriver().findElement(By.xpath("//button[@class='btn btn-sm btn-default o_button_import']")).click();
        WebElement chooseFile = Driver.getDriver().findElement(By.xpath("//input[@class='oe_import_file_show form-control']"));
        // chooseFile.click();
        Thread.sleep(2000);

        chooseFile.sendKeys("C:\\Users\\delal\\Desktop\\mavenb11\\briteERP.txt"+ Keys.ENTER);
        Thread.sleep(2000);

    }
}
