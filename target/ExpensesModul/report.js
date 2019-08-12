$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/expenses.feature");
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
  "location": "ExpensesModuleCucumberJenkins_steps.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_in_home_page_and_clicking_to_Expense_Product_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on create button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_click_on_create_button()"
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
      "name": "@Delal"
    }
  ]
});
formatter.step({
  "name": "user fills out all the mandatory fields",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_fills_out_all_the_mandatory_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Documents Button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_clicks_on_Documents_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Import Button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_clicks_on_Import_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user uploads the file",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_uploads_the_file()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "totalAmountToSubmitHilal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Hilal_1"
    }
  ]
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
        "quantity",
        "expectedTitle"
      ]
    },
    {
      "cells": [
        "5",
        "3",
        "$ 15.00"
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
  "location": "ExpensesModuleCucumberJenkins_steps.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_in_home_page_and_clicking_to_Expense_Product_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on create button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_click_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "totalAmountToSubmitHilal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@Hilal_1"
    }
  ]
});
formatter.step({
  "name": "user clicking on productDropDown button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_clicking_on_productDropDown_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on tshirt button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_click_on_tshirt_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user type unitPrice \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_type_unitPrice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then user type quantity \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.then_user_type_quantity(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifying actual title with expected title \"$ 15.00\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_verifying_actual_title_with_expected_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Choosing Item From Dropdown List on Expenses To Submit Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Hilal_2"
    }
  ]
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
  "location": "ExpensesModuleCucumberJenkins_steps.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_in_home_page_and_clicking_to_Expense_Product_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on create button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_click_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Choosing Item From Dropdown List on Expenses To Submit Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@Hilal_2"
    }
  ]
});
formatter.step({
  "name": "user selects the product from the Dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_selects_the_product_from_the_Dropdown_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user writes the price \"5.00\" and quantity \"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_writes_the_price_and_quantity(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the employee name",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_selects_the_employee_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_clicks_on_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
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
  "location": "ExpensesModuleCucumberJenkins_steps.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_in_home_page_and_clicking_to_Expense_Product_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on create button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_click_on_create_button()"
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
      "name": "@Hilal_3"
    }
  ]
});
formatter.step({
  "name": "user clicks on the Employee Dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_clicks_on_the_Employee_Dropdown_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the Employee Name",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_selects_the_Employee_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "select Employee Name From Dropdown List on Expenses To Submit Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Munnever_2"
    }
  ]
});
formatter.step({
  "name": "user should be able  on the create Button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the Employee Dropdown listt",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects the Employee Namee",
  "keyword": "And "
});
formatter.step({
  "name": "user should be able click on documents",
  "keyword": "Then "
});
formatter.step({
  "name": "user should be able createAttachment",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "in_ex_manager@info.com",
        "LLighg88"
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
  "location": "ExpensesModuleCucumberJenkins_steps.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_in_home_page_and_clicking_to_Expense_Product_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on create button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_click_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "select Employee Name From Dropdown List on Expenses To Submit Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@Munnever_2"
    }
  ]
});
formatter.step({
  "name": "user should be able  on the create Button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_should_be_able_on_the_create_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Employee Dropdown listt",
  "keyword": "Then "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_clicks_on_the_Employee_Dropdown_listt()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the Employee Namee",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_selects_the_Employee_Namee()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able click on documents",
  "keyword": "Then "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_should_be_able_click_on_documents()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able createAttachment",
  "keyword": "Then "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_should_be_able_createAttachment()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
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
  "location": "ExpensesModuleCucumberJenkins_steps.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_in_home_page_and_clicking_to_Expense_Product_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on create button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_click_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Accessing to Expenses to Submit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@Munnever_1"
    }
  ]
});
formatter.step({
  "name": "User put customer name \"Munevver\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_put_customer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects other options",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_selects_other_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User saves the expenses",
  "keyword": "When "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_saves_the_expenses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the employee name",
  "keyword": "Then "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.verify_the_employee_name()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
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
  "location": "ExpensesModuleCucumberJenkins_steps.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_in_home_page_and_clicking_to_Expense_Product_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on create button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_click_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Expense Reports Verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@Test6Diana"
    }
  ]
});
formatter.step({
  "name": "user D selects the product from the Dropdown list",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_D_selects_the_product_from_the_Dropdown_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "userD writes the price \"\u003cunitPrice\u003e\" and quantity \"\u003cquantity\u003e\"",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.userd_writes_the_price_and_quantity(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user D selects the employee name",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_D_selects_the_employee_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user D clicks on the Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_D_clicks_on_the_Submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user D clicks on the Approve button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_D_clicks_on_the_Approve_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user D clicks on the expensesReportAnalysisButton",
  "keyword": "Then "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_D_clicks_on_the_expensesReportAnalysisButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/expensesProduct.feature");
formatter.feature({
  "name": "Test Expenses Module_1",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@test"
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
  "location": "ExpensesModuleCucumberJenkins_steps.user_on_the_web_page_and_login_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User in home page and clicking to Expense Product Button",
  "keyword": "When "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_in_home_page_and_clicking_to_Expense_Product_Button()"
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
      "name": "@Bilal"
    }
  ]
});
formatter.step({
  "name": "click to ExpenseProductButton",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.click_to_ExpenseProductButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to creat Button",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.click_to_creat_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type product name in productNameBox",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.type_product_name_in_productNameBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Select Consumable in productTypeDropDownButon",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.select_Consumable_in_productTypeDropDownButon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to taxTypesDropDown",
  "keyword": "When "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.click_to_taxTypesDropDown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to salesTaxSelection",
  "keyword": "Then "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.click_to_salesTaxSelection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the archiveButton, is it enabled or not",
  "keyword": "And "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.check_the_archiveButton_is_it_enabled_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});