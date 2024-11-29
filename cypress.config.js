const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.handoff.ai/", // URL base da aplicação
    setupNodeEvents(on, config) {
      // Implementa event listeners aqui
    },
  },
});
