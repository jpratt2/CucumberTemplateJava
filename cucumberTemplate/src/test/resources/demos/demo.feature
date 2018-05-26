Feature: bitly.com provides shortened URLs

  Scenario: a shortened URL is obtained by entering a final URL on the home page
    When  I open the URL demo app
    #And   I click on the element #openAlert
    Then  an alertbox|a confirmbox|a prompt should not* be opened
