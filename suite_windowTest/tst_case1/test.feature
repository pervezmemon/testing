
Feature: Testing CA:Gen application



    Scenario: A user click on create button

        Given 'LJTESTW' application is loaded
        When user clicks on 'Create' 'Button'
        Then A user sees 'UPDATE' on message text

    Scenario: A user click on delete button
        Given 'LJTESTW' application is loaded
        When user clicks on 'Delete' 'Button'
        Then A user sees 'DELETE' on message text

    Scenario: A user Click on dropdown list
        Given 'LJTESTW' application is loaded
        When user clicks on 'DropList1' 'ComboBox'
        Then A user sees 4 options on list

#    Scenario: A user click on menu item open
  #      Given 'LJTESTW' application is loaded
  #      When user clicks on 'File' 'MenuBar'
   #     And user clicks on 'Open' 'MenuItem'
   #     Then A user sees 'FILE OPEN' on message text

