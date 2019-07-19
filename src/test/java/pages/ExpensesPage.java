package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
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
    @FindBy(xpath = "//div[@class='o_list_buttons']/button[1]")
    public WebElement creatButtonA;

    @FindBy(id = "o_field_input_36")
    public WebElement notesFieldA;

    @FindBy(xpath = "//div[@class='o_form_buttons_edit']/button[1]")
    public WebElement saveButtonA;

    @FindBy(xpath = "//div[@class='o_notification_manager']")
    public WebElement popUpRedWindowA;

    @FindBy(id = "o_field_input_19")
    public WebElement productWindowA;

    @FindBy(xpath = "//a[.='[///] iphone 8']")
    public WebElement iPhoneInProductA;

    @FindBy(xpath = "//div[@class='o_group']//table[2]//tr[4]//label")
    public WebElement employeeWindowA;

    @FindBy(xpath = "//a[.='Antoine Langlais']")
    public WebElement antonieInEmployeeA;

    @FindBy(xpath = "//button[@class='btn btn-sm oe_stat_button']")
    public WebElement documentsButtonA;

    @FindBy(xpath = "//div[@class='o_cp_buttons']/div/button[1]")
    public WebElement createButtonAfterclickDocumentsA;

    @FindBy(xpath = "//div[@class='o_form_buttons_edit']/button[2]")
    public WebElement discardButtonA;

    @FindBy (xpath = "//p")
    public WebElement expectedElementAfterDiscardA;

    public String expectedText = "Click here to attach a new document";
}
