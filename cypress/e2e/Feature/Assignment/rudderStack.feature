# Feature: Describe what this file tests
# This feature is focused on validating the functionality of the RudderStack page via a sequence of user actions and data verification.
Feature: Website Functionality
        Validating on the Rudderstack page

# Scenario: High-level purpose description
Scenario: Validate the website page
Given I navigate to "RudderStackUrl" page with "RudderStackCred"
Then I click on "I'll do this later" text
And I click on the "Go to dashboard" button
And I read and store the data plane
And I copy and store the write key
And I send an HTTP source using api
And I click on "WebHook Automation" destination and "Events" in webhook page
And I count the "Delivered" and "Failed" events
And I click on "settings" option under menu options
And I logout from the application