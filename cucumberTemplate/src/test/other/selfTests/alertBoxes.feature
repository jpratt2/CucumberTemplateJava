Feature: test predefined steps in Cucumber Template for alert boxes

  Scenario: confirm box acceptance
    When  I open demo app
    And   I click #openConfirm
    Then  the confirmbox should be opened
    And   the confirmbox should contain the text I am a confirm box!
    And   I accept the confirmbox
    Then  the confirmbox should not be opened
    Then  the element #confirmResult should have exactly this text: true

  Scenario: confirm box dismissal
    And   I click #openConfirm
    And   I dismiss the confirmbox
    Then  the element #confirmResult should have exactly this text: false

  Scenario: alert box acceptance
    When  I click #openAlert
    Then  the alertbox should be opened
    Then  the alertbox should contain the text I am a alert box!
    And   I accept the alertbox
    Then  the alertbox should not be opened

  Scenario: alert box dismissal
    And   I click #openAlert
    And   I dismiss the alertbox
    Then  the alertbox should not be opened

  Scenario: enter text into prompt
    And   I click #openPrompt
    Then  the prompt should be opened
    Then  the prompt should contain the text I am a prompt!
    And   I enter the text this is a test into the prompt
    And   I accept the prompt
    Then  the element #promptResult should have exactly this text: this is a test

  Scenario: dismiss the prompt
    And   I click #openPrompt
    And   I dismiss the prompt
    Then  the element #promptResult should not have exactly this text: this is a test
