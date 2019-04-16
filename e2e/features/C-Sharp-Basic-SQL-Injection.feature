Feature: C Sharp Basic SQL Injection

  @SCW
  Scenario: Happy Path
    Given I am on Mission Briefing
      And I Enter Warrior name Bob
      And I Enter Game Mode
    When I Locate Vulnerability
    When I click Next
    Then Stage Completed
      And I View Solutions
    #TODO don't always choose solution 3!
      And I choose Solution 3
    Then Challenge Complete
