$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Customer/IdeaProjects/phoenixmonjuly15updated/src/test/resources/features/expenses.feature");
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
formatter.scenario({
  "name": "Choosing Employee Name From Dropdown List on Expenses To Submit Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@tHilal_3"
    }
  ]
});
formatter.step({
  "name": "user is clicking  on the create Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ExpensesModuleCucumberJenkins_steps.user_is_clicking_on_the_create_Button()"
});
formatter.result({
  "status": "passed"
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
});