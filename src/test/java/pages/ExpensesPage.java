package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.annotations.Test;
import pages.LoginPage;
import utilities.Driver;

public class ExpensesPage {


    WebDriver driver;
    public ExpensesPage(){
        driver = Driver.getDriver();
        PageFactory.initElements(driver, this);
    }

    @FindBy (xpath = "(//span[@class='oe_menu_text'])[28]")
    public WebElement expenseProductsButton;

    public void clickingExpenseProductsButton(){

        expenseProductsButton.click();
    }




}
