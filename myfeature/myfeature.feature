Feature: my validation demo fro testMe in bdc

Scenario: User Access to guest registration
Given Applocation is launched by the guest user
When User clicks on sign in link available
And provides the required data on the form
Then user submits the data
And verifies for the account creation


