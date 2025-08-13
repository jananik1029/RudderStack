import elements from "../e2e/PageObjectModel/pageElements/rudderStackElements";

Cypress.Commands.add('loginToApp', (baseUrl, username, password) => {
  cy.visit(baseUrl, { timeout: 180000, retryOnStatusCodeFailure: true });
  cy.xpath(elements.userNameEle, { timeout: 80000 }).should('be.visible').type(username);
  cy.xpath(elements.passwordEle, { timeout: 80000 }).type(password);
  cy.xpath(elements.submitButton, { timeout: 80000 }).click({ force: true });
});

Cypress.Commands.add('logoutApp', () => {
  cy.wait(1000);
  cy.xpath(elements.logoutIcon).click({ force: true });
  cy.xpath(elements.logoutButton).click({ force: true });
});