/// <reference types="cypress" />

import elements from "../pageElements/rudderStackElements";
import '../../../support/commands';
import app from "../../../creds/app";
import qa from "../../../creds/qa";
import dev from "../../../creds/dev";

// Environment-based credentials
const environmentNames = { app, dev, qa };

class rudderStackActions {

  baseUrl(baseUrlKey, credentialKey) {
    const environment = Cypress.env('envName');
    cy.log(`Running tests for environment: ${environment}`);

    if (!environment || !environmentNames[environment]) {
      throw new Error(`Invalid or missing environment name. Set 'envName' to one of: ${Object.keys(environmentNames).join(', ')}`);
    }

    const selectedCredentials = environmentNames[environment];
    const baseUrl = selectedCredentials[baseUrlKey].baseUrl;
    const userName = selectedCredentials[credentialKey].userName;
    const password = selectedCredentials[credentialKey].password;

    cy.loginToApp(baseUrl, userName, password);
  }

  laterText(text) {
    cy.xpath(`//a[text()="${text}"]`, { timeout: 80000 }).click({ force: true });
  }

  //  Clicks on the dashboard button and closes the popup
  dashboardbtn(btn) {
    cy.xpath("//span[text()='" + btn + "']", { timeout: 80000 }).click({ force: true }).wait(1000)
    cy.xpath(elements.closeIcon).click({ force: true })
  }

  //  Reads and stores the data plane value.
  readStoreDataPlane() {
    cy.xpath(elements.dataPlane, { timeout: 80000 }).invoke('text').then((val) => {
      cy.wrap(val).as("DataPlaneValue");
      console.log(val);
    });
  }

  //  Extracts and stores the write key from the UI
  copyStoreWriteKey() {
    cy.xpath(elements.writeKey, { timeout: 80000 }).invoke('text').then((value) => {
      const splitKey = value.split(' ')[2]; // Assumes key is third item
      cy.wrap(splitKey).as("WriteKeyValue");
      console.log(splitKey);
    });
  }

  // Sends a POST identify request to the Data Plane HTTP API
  httpSourceApi() {
    cy.get("@DataPlaneValue").then((dataPlaneText) => {
      cy.get("@WriteKeyValue").then((writeKeyText) => {
        cy.request({
          method: 'POST',
          url: `${dataPlaneText}/v1/identify`,
          headers: { 'Content-Type': 'application/json' },
          auth: {
            username: writeKeyText,
            password: ""
          },
          body: {
            userId: "identified user id",
            anonymousId: "anon-id-new",
            context: {
              traits: { trait1: "new-val" },
              ip: "14.5.67.21",
              library: { name: "http" }
            },
            timestamp: "2020-02-02T00:23:09.544Z"
          }
        }).then((response) => {
          console.log(response);
          expect(response.status).to.equal(200);
          expect(response.statusText.toLowerCase()).to.equal('ok');
        });
      });
    });
  }

  // navigate to the Webhoog destination page
  clickText(textOne, textTwo) {
    cy.xpath("//span[text()='" + textOne + "']", { timeout: 80000 }).click({ force: true })
    cy.xpath("//div[text()='" + textTwo + "']", { timeout: 80000 }).click({ force: true })
  }

  // read the delivered and failed count
  deliveredFailedEvents(eventOne, eventTwo) {
    cy.xpath(elements.refreshButton).click({ force: true }).wait(1000);
    cy.xpath("//span[text()='" + eventOne + "']//parent::div//h2//span")
      .invoke('text')
      .then((val) => {
        cy.wrap(val).as('DeliveredValue');
      });

    cy.xpath("//span[text()='" + eventTwo + "']//parent::div//h2//span")
      .invoke('text')
      .then((valOne) => {
        cy.wrap(valOne).as('FailedValue');
      });
  }

  // clicking on the menu options
  clickMenuOptions(options) {
    cy.xpath("//div[@data-testid='menu-" + options + "']", { timeout: 80000 }).click({ force: true });
  }

  // Logs the user out of the application.
  logout() {
    cy.logoutApp();
  }
}

export default rudderStackActions;