const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      baseUrl: 'https://cake-la-coco-exchange.vercel.app/',
      viewportWidth: 1920,
      viewportHeight: 1080
    },
  },
);
