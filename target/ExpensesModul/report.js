$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/schoolFeatures/studentDelete.feature");
formatter.feature({
  "name": "Deleting Student to the School database",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bea1"
    }
  ]
});
formatter.background({
  "name": "User in on the School Login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User1 on the web page and login username \"SchoolLogIn\" and password \"SchoolPassword\"",
  "keyword": "Given "
});
formatter.match({
  "location": "SchoolStudentDelete_steps.user_on_the_web_page_and_login_username_and_password(Integer,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User1 is clicking on LogIn Button",
  "keyword": "When "
});
formatter.match({
  "location": "SchoolStudentDelete_steps.user_is_clicking_on_LogIn_Button(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deleting a Student",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Bea1"
    },
    {
      "name": "@Munevver\u0026Bilal"
    }
  ]
});
formatter.step({
  "name": "User clicks on the Students dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "SchoolStudentDelete_steps.user_clicks_on_the_Students_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on All Students",
  "keyword": "And "
});
formatter.match({
  "location": "SchoolStudentDelete_steps.user_clicks_on_All_Students()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click on dropdown toggle next to the students name",
  "keyword": "And "
});
formatter.match({
  "location": "SchoolStudentDelete_steps.user_will_click_on_dropdown_toggle_next_to_the_students_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will click on Delete button",
  "keyword": "And "
});
formatter.match({
  "location": "SchoolStudentDelete_steps.user_will_click_on_Delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Tester verifies that Students name nolonger is in DataBase",
  "keyword": "Then "
});
formatter.match({
  "location": "SchoolStudentDelete_steps.tester_verifies_that_Students_name_nolonger_is_in_DataBase()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});