const { defineConfig } = require("cypress");
// const fs = require("fs-extra");
// const path = require("path");
// const dotenv = require("dotenv");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
      // implement node event listeners here
    },
    specPattern: '**/*.feature',
    excludeSpecPattern: ['**/stepDefinitions/*', '*.js', '*.md'],
  },
});
