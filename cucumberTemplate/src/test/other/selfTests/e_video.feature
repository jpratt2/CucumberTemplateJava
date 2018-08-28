Feature: Use the HYFY.io plugin to record video
  Scenario: start and stop video
    Given I launch Chrome to record video
    And   I start recording video
    When  I open apple.com
    And   I open libreoffice.org
    And   I open https://www.inspyder.com/products/InSite
    Given I stop recording video


