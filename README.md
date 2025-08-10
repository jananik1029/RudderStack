# 🚀 Rudderstack Assignment – Cypress + Cucumber Automation

This project demonstrates the test plan and an indicative automation implementation using Cypress and Cucumber for key user flows within [RudderStack](https://app.rudderstack.com/).

---
## Tech Stack
Node.js: 16.14.0  <br />
Cypress: 11.2.0  <br />
Cucumber Preprocessor: 4.3.1  <br />
cypress-xpath: 2.0.1 <br />
Test Runner: GitHub Actions (Daily Scheduled Workflow)  <br />

---
## Project Structure
RudderStack/<br />
├── .github/<br />
│   └── workflows/<br />
│       └── Rudderstack.yml &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            # CI workflow (daily execution)<br />
├── .env.app &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                           # App environment config (local)<br />
├── .gitignore<br />
├── README.md<br />
├── cypress.config.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   # Cypress configuration<br />
├── package.json<br />
├── package-lock.json<br />

├── cypress/<br />
│   ├── creds/<br />
│   │   ├── appCred.js<br />
│   │   └── qaCred.js<br />
│<br />
│   ├── e2e/<br />
│   │   ├── Feature/<br />
│   │   │   └── Assignment/<br />
│   │   │       └── rudderStack.feature &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  # Gherkin feature file<br />
│   │   └── PageObjectModel/<br />
│   │       ├── pageActions/<br />
│   │       │   └── rudderStackActions.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    # Cypress page actions<br />
│   │       └── pageElements/<br />
│   │           └── rudderStackElements.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   # Page element selectors<br />
│
│   ├── fixtures/ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                            # Test data (optional)<br />
│
│   ├── plugins/<br />
│   │   └── index.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                          # Cypress plugin configuration<br />
│
│   └── support/<br />
│       ├── step_definitions/<br />
│       │   └── RudderstackSteps/<br />
│       │       └── rudderStackSteps.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                 # Step definitions for feature file<br />
│       ├── commands.js  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                                # Custom Cypress commands<br />
│       └── e2e.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   # Global test setup


---
## Setup Instructions
### 1. Clone the repository
```
git clone https://github.com/jananik1029/RudderStack.git  <br />
cd RudderStack
```
### 2. Install Dependencies
```
npm install
```
### 3. Run tests locally
```
npx cypress open --env cypressbaseurl=https://app.rudderstack.com <br />
```
_Replace the base URL as needed via environment variable._

## Continuous Integration (CI)
**Platform:** GitHub Actions<br />
**Frequency:** Tests run daily via scheduled workflows at 6 AM IST<br />
**Config File:** .github/workflows/Rudderstack.yml<br />
The test suite executes in a headless mode as part of the CI process to ensure consistent automation verification.
