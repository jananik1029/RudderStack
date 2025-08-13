# Feature: Describe what this file tests
# This feature is focused on validating the functionality of the RudderStack page via a sequence of user actions and data verification.
Feature: Website Functionality
        Validating on the Rudderstack page

# Scenario: High-level purpose description
# This scenario walks through navigation, UI interaction, data extraction, API actions, and event delivery verification.
Scenario: Validate the website page

# Initial navigation step
Given I navigate to the "RudderStack" page

# Dismiss prompt by choosing to do it later
And I click on "I'll do this later" text

# Proceed to the dashboard
And I click on the "Go to dashboard" button

# Extract and store key details from the page
And I read and store the data plane
And I copy and store the write key

# Send data via HTTP API to the source
And I send an HTTP source using api

# Find the destination and access its events page
And I click on "WebHook Automation" destination and "Events" in webhook page

# Verify event delivery status counts
And I count the "Delivered" and "Failed" events
