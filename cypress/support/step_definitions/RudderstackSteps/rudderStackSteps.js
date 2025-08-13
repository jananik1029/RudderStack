import { Before, Given, When, Then, After, And } from "cypress-cucumber-preprocessor/steps"
import rudderStackActions from "../../../e2e/PageObjectModel/pageActions/rudderStackActions";

const webPageCall = new rudderStackActions();

Given('I navigate to the {string} page', (cred) => {
    webPageCall.baseURl(cred);
});

And('I click on {string} text', (text) => {
    webPageCall.laterText(text);
});

And('I click on the {string} button', (btn) => {
    webPageCall.dashboardbtn(btn);
});

And('I read and store the data plane', () => {
    webPageCall.readStoreDataPlane();
});

And('I copy and store the write key', () => {
    webPageCall.copyStoreWriteKey();
});

And('I send an HTTP source using api', () => {
    webPageCall.httpSourceApi();
});

And('I click on {string} destination and {string} in webhook page', (textOne,textTwo) => {
    webPageCall.clickText(textOne,textTwo);
});

And('I count the {string} and {string} events', (eventOne,eventTwo) => {
    webPageCall.deliveredFailedEvents(eventOne,eventTwo);
});

And('I click on {string} option under menu options', (options) => {
    webPageCall.clickMenuOptions(options);
});

And('I logout from the application', () => {
    webPageCall.logout();
});


