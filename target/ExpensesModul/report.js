$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Customer/IdeaProjects/phoenixmonjuly15updated/src/test/resources/feature/expenses.feature");
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
formatter.scenarioOutline({
  "name": "Choosing Item From Dropdown List on Expenses To Submit Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test4"
    }
  ]
});
formatter.step({
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
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "unitPrice",
        "quantity"
      ]
    },
    {
      "cells": [
        "in_ex_manager@info.com",
        "LLighg88",
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
  "name": "User on the Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "BilalPD116_test1.user_on_the_Login_page()"
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
      "name": "@test4"
    }
  ]
});
formatter.step({
  "name": "user log in the webpage with \"in_ex_manager@info.com\" and \"LLighg88\"",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD98_test4.user_log_in_the_webpage_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is clicking the  ExpenseProductButton",
  "keyword": "When "
});
formatter.match({
  "location": "HilalPD98_test4.user_is_clicking_the_ExpenseProductButton()"
});
formatter.result({
  "status": "passed"
});
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#o_field_input_1\"}\n  (Session info: chrome\u003d75.0.3770.142)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2BLJEF3\u0027, ip: \u0027192.168.23.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.8 (681f24ea911fe7..., userDataDir: C:\\Users\\Customer\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:63554}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 38ad2e53fb7c43265d741e4e5ff80c10\n*** Element info: {Using\u003did, value\u003do_field_input_1}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.HilalPD98_test4.user_selects_the_product_from_the_Dropdown_list(HilalPD98_test4.java:62)\r\n\tat ✽.user selects the product from the Dropdown list(C:/Users/Customer/IdeaProjects/phoenixmonjuly15updated/src/test/resources/feature/expenses.feature:58)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user writes the price \"5.00\" and quantity \"3\"",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD98_test4.user_writes_the_price_and_quantity(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects the employee name",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD98_test4.user_selects_the_employee_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD98_test4.user_clicks_on_the_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
});