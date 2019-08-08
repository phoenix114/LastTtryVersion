<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Customer/IdeaProjects/phoenixmonjuly15updated/src/test/resources/feature/expenses.feature");
=======
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/expenses.feature");
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
formatter.feature({
  "name": "Test Expenses Module",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
<<<<<<< HEAD
formatter.scenarioOutline({
  "name": "Choosing Item From Dropdown List on Expenses To Submit Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test4"
=======
formatter.background({
  "name": "User on the Login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User on the web page and login username \"manager1Email\" and password \"manager1Password\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BilalPD116_test1.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "BilalPD116_test1.user_in_home_page_and_clicking_to_Expense_Product_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "creatingNewExpenseProduct",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test1"
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "user log in the webpage with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user is clicking the  ExpenseProductButton",
  "keyword": "When "
});
formatter.step({
  "name": "user is clicking  the create Button",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects the product from the Dropdown list",
  "keyword": "And "
});
formatter.step({
  "name": "user writes the price \"\u003cunitPrice\u003e\" and quantity \"\u003cquantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects the employee name",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the Submit button",
=======
  "name": "click to ExpenseProductButton",
  "keyword": "And "
});
formatter.match({
  "location": "BilalPD116_test1.click_to_ExpenseProductButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to creat Button",
  "keyword": "And "
});
formatter.match({
  "location": "BilalPD116_test1.click_to_creat_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type product name in productNameBox",
  "keyword": "And "
});
formatter.match({
  "location": "BilalPD116_test1.type_product_name_in_productNameBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Consumable in productTypeDropDownButon",
  "keyword": "And "
});
formatter.match({
  "location": "BilalPD116_test1.select_Consumable_in_productTypeDropDownButon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to taxTypesDropDown",
  "keyword": "When "
});
formatter.match({
  "location": "BilalPD116_test1.click_to_taxTypesDropDown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to salesTaxSelection",
  "keyword": "Then "
});
formatter.match({
  "location": "BilalPD116_test1.click_to_salesTaxSelection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the archiveButton, is it enabled or not",
  "keyword": "And "
});
formatter.match({
  "location": "BilalPD116_test1.check_the_archiveButton_is_it_enabled_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User on the Login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User on the web page and login username \"manager1Email\" and password \"manager1Password\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BilalPD116_test1.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "BilalPD116_test1.user_in_home_page_and_clicking_to_Expense_Product_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Uploading attachment to the Expenses To Submit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test2"
    }
  ]
});
formatter.step({
  "name": "click to create Button",
  "keyword": "Then "
});
formatter.match({
  "location": "DelalPD121_test2.click_to_create_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills out all the mandatory fields",
  "keyword": "And "
});
formatter.match({
  "location": "DelalPD121_test2.user_fills_out_all_the_mandatory_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Documents Button",
  "keyword": "And "
});
formatter.match({
  "location": "DelalPD121_test2.user_clicks_on_Documents_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Import Button",
  "keyword": "And "
});
formatter.match({
  "location": "DelalPD121_test2.user_clicks_on_Import_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user uploads the file",
  "keyword": "And "
});
formatter.match({
  "location": "DelalPD121_test2.user_uploads_the_file()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "totalAmountToSubmitHilal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "user create Button click",
  "keyword": "And "
});
formatter.step({
  "name": "user clicking on productDropDown button",
  "keyword": "And "
});
formatter.step({
  "name": "user click on tshirt button",
  "keyword": "And "
});
formatter.step({
  "name": "user type unitPrice \"\u003cunitPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Then user type quantity \"\u003cquantity\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user verifying actual title with expected title \"\u003cexpectedTitle\u003e\"",
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
<<<<<<< HEAD
        "username",
        "password",
        "unitPrice",
        "quantity"
=======
        "unitPrice",
        "quantity",
        "expectedTitle"
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
      ]
    },
    {
      "cells": [
<<<<<<< HEAD
        "in_ex_manager@info.com",
        "LLighg88",
        "5.00",
        "3"
=======
        "5",
        "3",
        "$ 15.00"
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
      ]
    }
  ]
});
formatter.background({
  "name": "User on the Login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
<<<<<<< HEAD
  "name": "User on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "BilalPD116_test1.user_on_the_Login_page()"
=======
  "name": "User on the web page and login username \"manager1Email\" and password \"manager1Password\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BilalPD116_test1.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "BilalPD116_test1.user_in_home_page_and_clicking_to_Expense_Product_Button()"
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
<<<<<<< HEAD
  "name": "Choosing Item From Dropdown List on Expenses To Submit Page",
=======
  "name": "totalAmountToSubmitHilal",
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
<<<<<<< HEAD
=======
      "name": "@test3"
    }
  ]
});
formatter.step({
  "name": "user create Button click",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD94_test3.user_create_Button_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicking on productDropDown button",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD94_test3.user_clicking_on_productDropDown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on tshirt button",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD94_test3.user_click_on_tshirt_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user type unitPrice \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD94_test3.user_type_unitPrice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then user type quantity \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HilalPD94_test3.then_user_type_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifying actual title with expected title \"$ 15.00\"",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD94_test3.user_verifying_actual_title_with_expected_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Choosing Item From Dropdown List on Expenses To Submit Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
      "name": "@test4"
    }
  ]
});
formatter.step({
<<<<<<< HEAD
  "name": "user log in the webpage with \"in_ex_manager@info.com\" and \"LLighg88\"",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD98_test4.user_log_in_the_webpage_with_and(String,String)"
=======
  "name": "user is clicking  the create Button",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects the product from the Dropdown list",
  "keyword": "And "
});
formatter.step({
  "name": "user writes the price \"\u003cunitPrice\u003e\" and quantity \"\u003cquantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user selects the employee name",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the Submit button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "unitPrice",
        "quantity"
      ]
    },
    {
      "cells": [
        "5.00",
        "3"
      ]
    }
  ]
});
formatter.background({
  "name": "User on the Login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User on the web page and login username \"manager1Email\" and password \"manager1Password\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BilalPD116_test1.user_on_the_web_page_and_login_username_and_password(String,String)"
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
});
formatter.result({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "user is clicking the  ExpenseProductButton",
  "keyword": "When "
});
formatter.match({
  "location": "HilalPD98_test4.user_is_clicking_the_ExpenseProductButton()"
=======
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "BilalPD116_test1.user_in_home_page_and_clicking_to_Expense_Product_Button()"
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
=======
formatter.scenario({
  "name": "Choosing Item From Dropdown List on Expenses To Submit Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test4"
    }
  ]
});
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
formatter.step({
  "name": "user is clicking  the create Button",
  "keyword": "Then "
});
formatter.match({
  "location": "HilalPD98_test4.user_is_clicking_the_create_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the product from the Dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD98_test4.user_selects_the_product_from_the_Dropdown_list()"
});
formatter.result({
<<<<<<< HEAD
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#o_field_input_1\"}\n  (Session info: chrome\u003d75.0.3770.142)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2BLJEF3\u0027, ip: \u0027192.168.23.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.8 (681f24ea911fe7..., userDataDir: C:\\Users\\Customer\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63554}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 38ad2e53fb7c43265d741e4e5ff80c10\n*** Element info: {Using\u003did, value\u003do_field_input_1}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.HilalPD98_test4.user_selects_the_product_from_the_Dropdown_list(HilalPD98_test4.java:62)\r\n\tat ✽.user selects the product from the Dropdown list(C:/Users/Customer/IdeaProjects/phoenixmonjuly15updated/src/test/resources/feature/expenses.feature:58)\r\n",
  "status": "failed"
=======
  "status": "passed"
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
});
formatter.step({
  "name": "user writes the price \"5.00\" and quantity \"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD98_test4.user_writes_the_price_and_quantity(String,String)"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "status": "passed"
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
});
formatter.step({
  "name": "user selects the employee name",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD98_test4.user_selects_the_employee_name()"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "status": "passed"
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
});
formatter.step({
  "name": "user clicks on the Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD98_test4.user_clicks_on_the_Submit_button()"
});
formatter.result({
<<<<<<< HEAD
  "status": "skipped"
=======
  "status": "passed"
});
formatter.background({
  "name": "User on the Login page",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User on the web page and login username \"manager1Email\" and password \"manager1Password\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BilalPD116_test1.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "BilalPD116_test1.user_in_home_page_and_clicking_to_Expense_Product_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Choosing Employee Name From Dropdown List on Expenses To Submit Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test5"
    }
  ]
});
formatter.step({
  "name": "user is clicking  on the create Button",
  "keyword": "Then "
});
formatter.match({
  "location": "HilalPD99_test5.user_is_clicking_on_the_create_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Employee Dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD99_test5.user_clicks_on_the_Employee_Dropdown_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the Employee Name",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD99_test5.user_selects_the_Employee_Name()"
});
formatter.result({
  "status": "passed"
>>>>>>> 55015f0dab23aae1030f6e9ae5485c2273e92286
});
});