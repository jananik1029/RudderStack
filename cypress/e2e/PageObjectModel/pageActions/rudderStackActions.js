/// <reference types="cypress" />

import elements from "../pageElements/rudderStackElements"
import appcred from "../../../creds/appCred";

class rudderStackActions {

  baseURl(cred) {
    let usernameFix = null
    let passwordFix = null

    cy.wait(2000)
    cy.visit("https://app.rudderstack.com/login", { timeout: 180000 }, { retryOnStatusCodeFailure: true })
    cy.wait(2000)

    var appUrl = "app";
    var qaUrl = "qa";


    var currentUrl = window.location.href;

    if ((currentUrl.includes(appUrl))) {
      usernameFix = appcred[cred].userName;
      passwordFix = appcred[cred].password;
    }
    cy.xpath(elements.userNameEle, { timeout: 80000 }).should("be.visible")
    cy.xpath(elements.userNameEle, { timeout: 80000 }).type(usernameFix)
    cy.xpath(elements.passwordEle, { timeout: 80000 }).type(passwordFix)
    cy.xpath(elements.submitButton, { timeout: 80000 }).click({ force: true })
  }

  laterText(text) {
    cy.wait(2000)
    cy.xpath(elements.latertextcall, { timeout: 80000 }).click({ force: true })
  }
  dashboardbtn(btn) {
    cy.xpath(elements.goDashboardBtn, { timeout: 80000 }).click({ force: true }).wait(1000)
    cy.xpath(elements.closeIcon).click({ force: true })
  }
  readStoreDataPlane() {
    cy.wait(2000)
    cy.xpath(elements.dataPlane, { timeout: 80000 }).invoke('text').then((val) => {
      cy.wrap(val).as("DataPlaneValue")
      console.log(val)
    })
  }
  copyStoreWriteKey() {
    cy.xpath(elements.writeKey, { timeout: 80000 }).invoke('text').then((valueOne) => {
      var splitStg = valueOne.split(' ')
      cy.wrap(splitStg[2]).as("WriteKeyValue")
      console.log(splitStg[2])
    })
  }

  httpSourceApi() {
    cy.get("@DataPlaneValue").then((dataPlaneText) => {
      cy.get("@WriteKeyValue").then((writeKeyText) => {
        cy.request({
          method: 'POST',
          url: dataPlaneText + '/v1/identify',
          headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          auth: {
            username: writeKeyText,
            password: ""
          },
          body:
          {
            "userId": "identified user id",
            "anonymousId": "anon-id-new",
            "context": {
              "traits": {
                "trait1": "new-val"
              },
              "ip": "14.5.67.21",
              "library": {
                "name": "http"
              }
            },
            "timestamp": "2020-02-02T00:23:09.544Z"
          }

        }).then(ResponseForSource => {
          console.log(ResponseForSource);
          expect(ResponseForSource.status).equal(200)
          expect(ResponseForSource.statusText.toLowerCase()).equal('ok')
        })
      })
    })
  }

  clickText(textOne, textTwo) {
    cy.xpath("//span[text()='" + textOne + "']", { timeout: 80000 }).click({ force: true })
    cy.xpath("//div[text()='" + textTwo + "']", { timeout: 80000 }).click({ force: true })
  }
  deliveredFailedEvents(eventOne, eventTwo) {
    cy.xpath(elements.refreshButton).click({ force: true }).wait(1000)
    cy.xpath("//span[text()='" + eventOne + "']//parent::div//h2//span").invoke('text').then(value => {
      cy.wrap(value).as('DeliveredValue')
      cy.log(value)
    })
    cy.xpath("//span[text()='" + eventTwo + "']//parent::div//h2//span").invoke('text').then(valueOne => {
      cy.wrap(valueOne).as('FailedValue')
      cy.log(valueOne)
    })
  }
}

export default rudderStackActions;