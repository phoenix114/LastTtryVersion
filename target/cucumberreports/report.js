$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/munevver.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@brite"
    }
  ]
});
formatter.step({
  "name": "User on login to account with credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "munevver.user_on_login_to_account_with_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User press on expenses module",
  "keyword": "And "
});
formatter.match({
  "location": "munevver.user_press_on_expenses_module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on create button",
  "keyword": "And "
});
formatter.match({
  "location": "munevver.user_click_on_create_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User put customer name \"Munevver\"",
  "keyword": "And "
});
formatter.match({
  "location": "munevver.user_put_customer_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects other options",
  "keyword": "And "
});
formatter.match({
  "location": "munevver.user_selects_other_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User saves the expenses",
  "keyword": "When "
});
formatter.match({
  "location": "munevver.user_saves_the_expenses()"
});
formatter.result({
  "status": "passed"
});
});