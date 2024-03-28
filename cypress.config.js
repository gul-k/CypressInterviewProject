const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/e2e/**/*.{js,jsx.ts.tsx,feature}",
    projectId: "4765cz",
    //excludeSpecPattern: "cypress/e2e/other/*js",
    baseUrl:"https://webdriveruniversity.com",
    chromeWebSecurity: false,
    //experimentalOriginDependencies: true
    defaultCommandTimeout: 5000,
    watchForFileChanges: false,
    pageLoadTimeout: 200000,
    screenshotOnRunFailure:true,
    trashAssetsBeforeRuns:true,
    video:false,
    env:{
      first_name:'Sarah',
      webdriveruni_homepage:"https://webdriveruniversity.com"
    }
  },
});
