@test
Feature: Test Expenses Module

  Background: User on the Login page
<<<<<<< HEAD
    Given User on the web page and login username "manager1Email" and password "manager1Password"
    When User in home page and clicking to Expense Product Button


  @test1
  Scenario: creatingNewExpenseProduct
    And click to ExpenseProductButton
    And click to creat Button
    And type product name in productNameBox
    And Select Consumable in productTypeDropDownButon
    When click to taxTypesDropDown
    Then click to salesTaxSelection
    And check the archiveButton, is it enabled or not



  @test2
  Scenario: Uploading attachment to the Expenses To Submit


=======
    Given User on the Login page

#  @test1
#  Scenario Outline: creatingNewExpenseProduct
#
#    When user logs in to the web page "<username>" and "<password>"
#    And click to home page
#    And click to ExpenseProductButton
#    And click to creat Button
#    And type product name in productNameBox
#    And Select Consumable in productTypeDropDownButon
#    When click to taxTypesDropDown
#    Then click to salesTaxSelection
#    And check the archiveButton, is it enabled or not
#
#    Examples:
#    |username     |password        |
#    |manager1Email|manager1Password|

  @test2
  Scenario Outline: Uploading attachment to the Expenses To Submit
    When  user log in the webpage "<username>" and  "<password>"
    And click to Expense Product Button
>>>>>>> delal
    Then click to create Button
    And user fills out all the mandatory fields
    And user clicks on Documents Button
    And user clicks on Import Button
    And user uploads the file
<<<<<<< HEAD

=======
    Examples:
      |username              |password        |
      |in_ex_manager@info.com|LLighg88        |
>>>>>>> delal

  @test3
  Scenario Outline:  totalAmountToSubmitHilal

<<<<<<< HEAD


=======
    When User Loggin username "<username>" and password "<password>"
    And User click to expenses link
>>>>>>> delal
    And user create Button click
    And user clicking on productDropDown button
    And user click on tshirt button
    And user type unitPrice "<unitPrice>"
    Then Then user type quantity "<quantity>"
    And user verifying actual title with expected title "<expectedTitle>"
    Examples:
<<<<<<< HEAD
      |unitPrice|quantity|expectedTitle|
      |5        |3       |$ 15.00      |

=======
      |username              |password        |unitPrice|quantity|expectedTitle|
      |in_ex_manager@info.com|LLighg88        |5        |3       |$ 15.00      |
>>>>>>> delal


  @test4
  Scenario Outline:  Choosing Item From Dropdown List on Expenses To Submit Page
<<<<<<< HEAD


=======
    And   user log in the webpage with "<username>" and "<password>"
    When user is clicking the  ExpenseProductButton
>>>>>>> delal
    Then user is clicking  the create Button
    And user selects the product from the Dropdown list
    And user writes the price "<unitPrice>" and quantity "<quantity>"
    And user selects the employee name
    And user clicks on the Submit button
    Examples:
<<<<<<< HEAD
         |unitPrice|quantity|
         |5.00       |3       |

  @test5
  Scenario: Choosing Employee Name From Dropdown List on Expenses To Submit Page

    Then user is clicking  on the create Button
    And user clicks on the Employee Dropdown list
    And user selects the Employee Name

=======
      |username              |password        |unitPrice|quantity|
      |in_ex_manager@info.com|LLighg88        |5.00       |3       |

  @test5
  Scenario Outline: Choosing Employee Name From Dropdown List on Expenses To Submit Page
    And user log in the webpage where username is "<username>" and "<password>"
    When user is clicking on the ExpenseProductButton
    Then user is clicking  on the create Button
    And user clicks on the Employee Dropdown list
    And user selects the Employee Name
    Examples:
      |username              |password        |
      |in_ex_manager@info.com|LLighg88        |

    @test9
    Scenario Outline: select Employee Name From Dropdown List on Expenses To Submit Page
      When user log on the webpage where username is "<username>" and "<password>"
      Then user should clicking on the ExpenseProductButton
      And user should be able  on the create Button
      Then user clicks on the Employee Dropdown listt
      And user selects the Employee Namee
      Then user should be able click on documents
      Then user should be able createAttachment
      Examples:
        |username              |password        |
        |in_ex_manager@info.com|LLighg88        |
>>>>>>> delal



