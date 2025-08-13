const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    // This is set to include all `.feature` files (used with Cucumber).
    specPattern: '**/*.feature',
    excludeSpecPattern: [
      '**/stepDefinitions/*', // Avoid treating step definitions as specs
      '*.js',                 // Exclude root-level JS files
      '*.md'                  // Exclude root-level Markdown files (e.g., README)
    ],
  },
});
