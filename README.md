# Rudderstack Assignment – Cypress + Cucumber + Page Object Model [POM] Automation

This project demonstrates the test plan and an indicative automation implementation using Cypress, Cucumber with Page Object Model [POM] for key user flows within [RudderStack](https://app.rudderstack.com/).

---
## Tech Stack
Node.js: 22.18.0  <br />
Cypress: 11.2.0  <br />
Cucumber Preprocessor: 4.3.1  <br />
cypress-xpath: 2.0.1 <br />
Test Runner: GitHub Actions  <br />

---
## Project Structure
RudderStack/<br />
├── .github/<br />
│   └── workflows/<br />
│       └── Rudderstack.yml &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            # CI workflow (daily execution)<br />
├── .gitignore<br />
├── README.md<br />
├── cypress.config.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;                   # Cypress configuration<br />
├── package.json<br />
├── package-lock.json<br />

├── cypress/<br />
│   ├── creds/ &nbsp;&nbsp; # Environment Credentials <br />
│   │   ├── app.js<br />
│   │   ├── dev.js<br />
│   │   └── qa.js<br />
│<br />
│   ├── e2e/<br />
│   │   ├── Feature/<br />
│   │   │   └── Assignment/<br />
│   │   │       └── rudderStack.feature &nbsp;&nbsp; # Gherkin feature file<br />
│   │   └── PageObjectModel/<br />
│   │       ├── pageActions/<br />
│   │       │   └── rudderStackActions.js &nbsp;&nbsp; # Cypress page actions<br />
│   │       └── pageElements/<br />
│   │           └── rudderStackElements.j &nbsp;&nbsp; # Page element selectors<br />
│
│   ├── fixtures/ &nbsp;&nbsp; # Test data (optional)<br />
│
│   ├── plugins/<br />
│   │   └── index.j &nbsp;&nbsp; # Cypress plugin configuration<br />
│
│   └── support/<br />
│       ├── step_definitions/<br />
│       │   └── RudderstackSteps/<br />
│       │       └── rudderStackSteps.js &nbsp;&nbsp; # Step definitions for feature file<br />
│       ├── commands.js &nbsp;&nbsp; # Custom Cypress commands<br />
│       └── e2e.j &nbsp;&nbsp; # Global test setup


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
For Testing purpose, added three environments **(app, dev, qa)** on the code
```
npx cypress open --env envName=ENVIRONMENT-NAME
```
Replace ENVIRONMENT-NAME with any of the environments **(app, dev, qa)** <br />
NOTE: If ENVIRONMENT-NAME value is anything other than **app**, **dev** or **qa**, then code will throw error saying **Invalid or missing environment name.**
EXAMPLE:
```
npx cypress open --env envName=app
```
```
npx cypress open --env envName=dev
```
```
npx cypress open --env envName=qa
```
## Continuous Integration (CI)
**Platform:** GitHub Actions<br />
**Config File:** .github/workflows/Rudderstack.yml<br />
**Triggers:** <br />
- On every commit on master branch
- On Manual Trigger
- Run daily via scheduled workflows at 6 AM IST<br />

**Cache:** Caches node_modules if package-lock.json is unchanged<br />

**Artifact:** <br />
- Each test run records a **video of the execution**
- Videos are uploaded as **artifacts**
- **Retention period:** 6 days

The test suite executes in a **headless mode** as part of the CI process to ensure consistent automation verification.
