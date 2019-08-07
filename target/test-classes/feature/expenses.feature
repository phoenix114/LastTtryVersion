@test
Feature: Test Expenses Module

  Background: User on the Login page
    Given User on the web page and login username "manager1Email" and password "manager1Password"


  @test1
  Scenario: creatingNewExpenseProduct


    And click to home page
    And click to ExpenseProductButton
    And click to creat Button
    And type product name in productNameBox
    And Select Consumable in productTypeDropDownButon
    When click to taxTypesDropDown
    Then click to salesTaxSelection
    And check the archiveButton, is it enabled or not



  @test2
  Scenario: Uploading attachment to the Expenses To Submit

    And click to Expense Product Button
    Then click to create Button
    And user fills out all the mandatory fields
    And user clicks on Documents Button
    And user clicks on Import Button
    And user uploads the file


  @test3
  Scenario Outline:  totalAmountToSubmitHilal


    And User click to expenses link
    And user create Button click
    And user clicking on productDropDown button
    And user click on tshirt button
    And user type unitPrice "<unitPrice>"
    Then Then user type quantity "<quantity>"
    And user verifying actual title with expected title "<expectedTitle>"
    Examples:
      |unitPrice|quantity|expectedTitle|
      |5        |3       |$ 15.00      |



  @test4
  Scenario Outline:  Choosing Item From Dropdown List on Expenses To Submit Page

    When user is clicking the  ExpenseProductButton
    Then user is clicking  the create Button
    And user selects the product from the Dropdown list
    And user writes the price "<unitPrice>" and quantity "<quantity>"
    And user selects the employee name
    And user clicks on the Submit button
    Examples:
         |unitPrice|quantity|
         |5.00       |3       |

  @test5
  Scenario: Choosing Employee Name From Dropdown List on Expenses To Submit Page

    When user is clicking on the ExpenseProductButton
    Then user is clicking  on the create Button
    And user clicks on the Employee Dropdown list
    And user selects the Employee Name




