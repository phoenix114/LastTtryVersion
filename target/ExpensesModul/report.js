$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/expenses.feature");
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
  "name": "Accessing to Expenses to Submit",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    },
    {
      "name": "@test7"
    }
  ]
});
formatter.step({
  "name": "User click on create button",
  "keyword": "And "
});
formatter.match({
  "location": "MunevverPD104_test7.user_click_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User put customer name \"Munevver\"",
  "keyword": "And "
});
formatter.match({
  "location": "MunevverPD104_test7.user_put_customer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects other options",
  "keyword": "And "
});
formatter.match({
  "location": "MunevverPD104_test7.user_selects_other_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User saves the expenses",
  "keyword": "When "
});
formatter.match({
  "location": "MunevverPD104_test7.user_saves_the_expenses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the employee name",
  "keyword": "Then "
});
formatter.match({
  "location": "MunevverPD104_test7.verify_the_employee_name()"
});
formatter.result({
  "status": "passed"
});
});