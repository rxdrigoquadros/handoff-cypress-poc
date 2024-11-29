const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.handoff.ai/login',
    setupNodeEvents(on, config) {
      config.viewportWidth = 1920;
      config.viewportHeight = 1080;
    },
  },
});
