Feature:
@brite
  Scenario:
    Given User on login to account with credentials
    And User press on expenses module
    And User click on create button
    And User put customer name "Munevver"
    And User selects other options
    When User saves the expenses
    //Then Verify the employee name