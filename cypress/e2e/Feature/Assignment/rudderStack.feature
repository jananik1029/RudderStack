Feature: Website Functionality
        Validating on the Rudderstack page

Scenario: Validate the website page
Given I navigate to the "RudderStack" page
And I click on "I'll do this later" text
And I click on the "Go to dashboard" button
And I read and store the data plane
And I copy and store the write key
And I send an HTTP source using api
And I click on "WebHook Automation" destination and "Events" in webhook page
And I count the "Delivered" and "Failed" events