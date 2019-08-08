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
  "name": "totalAmountToSubmitHilal",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@test"
    },
    {
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\".o_list_button_ad\"}\n  (Session info: chrome\u003d75.0.3770.142)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-2BLJEF3\u0027, ip: \u0027192.168.23.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.142, chrome: {chromedriverVersion: 75.0.3770.8 (681f24ea911fe7..., userDataDir: C:\\Users\\Customer\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58171}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 484643cf4af33a128ba5d4c5b23736fe\n*** Element info: {Using\u003dcss selector, value\u003d.o_list_button_ad}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat steps.HilalPD94_test3.user_create_Button_click(HilalPD94_test3.java:25)\r\n\tat ✽.user create Button click(src/test/resources/feature/expenses.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicking on productDropDown button",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD94_test3.user_clicking_on_productDropDown_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on tshirt button",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD94_test3.user_click_on_tshirt_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user type unitPrice \"5\"",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD94_test3.user_type_unitPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Then user type quantity \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HilalPD94_test3.then_user_type_quantity(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifying actual title with expected title \"$ 15.00\"",
  "keyword": "And "
});
formatter.match({
  "location": "HilalPD94_test3.user_verifying_actual_title_with_expected_title(String)"
});
formatter.result({
  "status": "skipped"
});
});