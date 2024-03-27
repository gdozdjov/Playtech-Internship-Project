const { defineConfig } = require("cypress");
module.exports = defineConfig({
  reporter: "junit",

  reporterOptions: {
    mochaFile: "results/test-results.xml",
    outputs: true,
    testCaseSwitchClassnameAndName: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
