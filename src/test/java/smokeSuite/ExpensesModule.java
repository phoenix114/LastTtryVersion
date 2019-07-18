package smokeSuite;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.Test;
import pages.ExpensesPage;
import pages.HomePage;
import pages.LoginPage;
import utilities.Config;
import utilities.Driver;

public class ExpensesModule {


    @Test
    public void creatingNewExpenseProduct(){

        Driver.getDriver().get(Config.getProperty("url"));
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
    }
}
