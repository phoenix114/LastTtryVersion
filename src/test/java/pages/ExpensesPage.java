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

    @FindBy (linkText = "Expenses")
    public  WebElement expenses;

    @FindBy (xpath = "//button[@class='btn btn-primary btn-sm o_list_button_add']")
    public WebElement createButton;

    @FindBy (id = "o_field_input_18")
    public WebElement customer;

    @FindBy(xpath ="//input[@class='o_input ui-autocomplete-input']")
    public WebElement product;

    @FindBy (xpath = "//ul[@class='ui-autocomplete ui-front ui-menu ui-widget ui-widget-content']/li[2]")
    public WebElement chooseProduct;

    @FindBy(xpath ="//input[@class='o_datepicker_input o_input']")
    public WebElement dateInput;

    @FindBy(xpath ="//table[@class='table-condensed']/tbody/tr[4]/td[3]")
    public WebElement datebox;

    @FindBy(xpath ="(//input[@class='o_input ui-autocomplete-input'])[4]")
    public WebElement employeeInput;

    @FindBy(xpath ="//a[.='Ashley Presley']")
    public WebElement employeeName;

    @FindBy(xpath = "(//input[@class='o_input ui-autocomplete-input'])[4]")
    public WebElement employeeInputText;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm o_form_button_save']")
    public WebElement clickSave;

    @FindBy(xpath = "//span[@name='date']")
    public WebElement actualDate;

    @FindBy(id = "o_field_input_27")
    public WebElement actualEmployeeName;

    @FindBy(xpath = "(//div[@class='oe_secondary_menu'])[9]/ul/li[2]/a/span")
    public WebElement actualRefusedReports;

    @FindBy(xpath = "(//div[@class='oe_secondary_menu'])[9]/ul[3]/li")
    public WebElement actualExpenseAnalysis;

    @FindBy(xpath = "//button[@name='action_get_attachment_view']")
    public WebElement document;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm o-kanban-button-new btn-default']")
    public WebElement createAttachment;

    @FindBy(id = "o_field_input_54")
    public  WebElement typeAttachment;

    @FindBy(id = "o_field_input_55")
    public  WebElement type;

    @FindBy(id = "o_field_input_58")
    public  WebElement url;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm o_form_button_save']")
    public WebElement save;

    @FindBy(xpath = "//a[@class='o_field_url o_field_widget o_form_uri o_text_overflow']")
    public WebElement actualUrl;

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


    @Test
    public void totalAmountToSubmitHilal() throws InterruptedException {
    /*
PD-94 / As user i would like to be able to see total amount be for submit
1 - Go to the Brite ERP Website-->the user should be able to open the website
2 - select the expenses button-->the user should be able to open the website
3 - Click on the create button-->The user should be able to click the button and see the all the functionality
4 - Click on the Product button -->User should be able to choose item from the list as they wish
5 - Click on the unit price button-->the user should be able to select the unit price
6 - Click on the quantity button-->The user should be able to select the quantity
7 - Total amount-->The user should be able to see Total amount before submitting

     */

        Driver.getDriver().get("http://54.148.96.210/web/login");

        Thread.sleep(1000);
        WebElement email  = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-login']//input"));
        WebElement password = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-password']/input"));
        email.sendKeys("in_ex_manager@info.com");
        password.sendKeys("LLighg88");
        Thread.sleep(1000);
        WebElement logInButton = Driver.getDriver().findElement(By.xpath("//div[@class='clearfix oe_login_buttons']/button"));
        logInButton.click();
        WebElement expensesLink = Driver.getDriver().findElement(By.xpath("//*[@id=\"oe_main_menu_navbar\"]/div[2]/ul[1]/li[9]/a/span"));
        expensesLink.click();
        Thread.sleep(1000);
        WebElement createButton = Driver.getDriver().findElement(By.cssSelector(".o_list_button_add"));
        createButton.click();
        WebElement productDropdown = Driver.getDriver().findElement(By.id("o_field_input_19"));
        productDropdown.click();
        WebElement tshirt = Driver.getDriver().findElement(By.xpath("//a[.='[253] Tshirt']"));
        tshirt.click();
        Thread.sleep(1000);
        WebElement unitPriceInput = Driver.getDriver().findElement(By.id("o_field_input_20"));
        unitPriceInput.clear();
        unitPriceInput.sendKeys("5.00");
        WebElement quantityInput = Driver.getDriver().findElement(By.id("o_field_input_21"));
        quantityInput.clear();
        quantityInput.sendKeys("3"+ Keys.ENTER);
        Thread.sleep(1000);
        WebElement totalAmount = Driver.getDriver().findElement(By.xpath("//span[@name='total_amount']"));
        String actualtitle = totalAmount.getText();
        String expecttitle = "$ 15.00";
        Assert.assertEquals(actualtitle,expecttitle);

    }
    @Test
    public void dropDownListHilal() throws InterruptedException {
     /*
PD-98 / As user i would like to be able to choose the item products on the drop down list
1 - Go to the Brite ERP Website-->the user should be able to open the website
2 - select the  expenses button-->the user should be able to open the website
3 - Click on the create button-->The user should be able to click the button and see the all the functionality
4 - Click on the Product button -->User should be able to choose item from the list as they wish
5 - Click on the unit price button-->the user should be able to select the unit price
6 - Click on item--> The user should be able to click on the item and select
7 - Click on submit button--> The user should be able to click and save the file the functionality meets the requirements
      */
        Driver.getDriver().get("http://54.148.96.210/web/login");
        Thread.sleep(1000);
        WebElement email  = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-login']//input"));
        WebElement password = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-password']/input"));
        email.sendKeys("in_ex_manager@info.com");
        password.sendKeys("LLighg88");
        Thread.sleep(1000);
        WebElement logInButton = Driver.getDriver().findElement(By.xpath("//div[@class='clearfix oe_login_buttons']/button"));
        logInButton.click();
        Thread.sleep(1000);
        WebElement expensesLink = Driver.getDriver().findElement(By.xpath("//*[@id=\"oe_main_menu_navbar\"]/div[2]/ul[1]/li[9]/a/span"));
        expensesLink.click();
        Thread.sleep(2000);
        WebElement createButton = Driver.getDriver().findElement(By.cssSelector(".o_list_button_add"));
        createButton.click();
        Thread.sleep(1000);
        WebElement productDropdown = Driver.getDriver().findElement(By.id("o_field_input_19"));
        productDropdown.click();
        WebElement tshirt = Driver.getDriver().findElement(By.xpath("//a[.='[253] Tshirt']"));
        tshirt.click();
        WebElement unitPriceInput = Driver.getDriver().findElement(By.id("o_field_input_20"));
        unitPriceInput.clear();
        unitPriceInput.sendKeys("5.00");
        WebElement quantityInput = Driver.getDriver().findElement(By.id("o_field_input_21"));
        quantityInput.clear();
        quantityInput.sendKeys("3"+ Keys.ENTER);
        WebElement employeeDropdown = Driver.getDriver().findElement(By.id("o_field_input_27"));
        employeeDropdown.click();
        WebElement selectEmployee = Driver.getDriver().findElement(By.xpath("//a[.='Demo User']"));
        selectEmployee.click();
        WebElement submitButton = Driver.getDriver().findElement(By.xpath("/html/body/div[1]/div[2]/div[2]/div/div/div/div[1]/div[1]/div[1]/button[1]"));
        submitButton.click();

        WebElement expectedText = Driver.getDriver().findElement(By.xpath("/html/body/div[1]/div[2]/div[2]/div/div/div/div[1]/div[2]/div[4]/ul/li[1]/a"));
        Assert.assertTrue(expectedText.isDisplayed());

    }
    @Test
    public void selectEmployeeHilal() throws InterruptedException {
        /*
 PD-99 / As user i would like to be able to select my name
1 - Go to the Brite ERP Website-->the user should be able to open the website
2 - select the expenses button-->the user should be able to open the website
3 - Click on the create button-->The user should be able to click the button and see the all the functionality
4 - Click on Employee tab-->The user should be able to click on the button and should be able to see the names in dropdown list
5 - Select the employee name-->The user should be able to select their name under the Employees dropdown list
         */
        Driver.getDriver().get("http://54.148.96.210/web/login");
        Thread.sleep(1000);
        WebElement email  = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-login']//input"));
        WebElement password = Driver.getDriver().findElement(By.xpath("//div[@class='form-group field-password']/input"));
        email.sendKeys("in_ex_manager@info.com");
        password.sendKeys("LLighg88");
        Thread.sleep(1000);
        WebElement logInButton = Driver.getDriver().findElement(By.xpath("//div[@class='clearfix oe_login_buttons']/button"));
        logInButton.click();
        Thread.sleep(2000);
        WebElement expensesLink = Driver.getDriver().findElement(By.xpath("//*[@id=\"oe_main_menu_navbar\"]/div[2]/ul[1]/li[9]/a/span"));
        expensesLink.click();
        Thread.sleep(2000);
        WebElement createButton = Driver.getDriver().findElement(By.cssSelector(".o_list_button_add"));
        createButton.click();
        WebElement employeeDropdown = Driver.getDriver().findElement(By.id("o_field_input_27"));
        employeeDropdown.click();
        WebElement selectEmployee = Driver.getDriver().findElement(By.xpath("//a[.='David Samson']"));
        selectEmployee.click();
        Thread.sleep(1000);
        Assert.assertTrue(!selectEmployee.isDisplayed());

    }

}
