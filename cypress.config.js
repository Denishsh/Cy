module.exports = {
  retries: 1,
  watchForFileChanges: false,
  
  e2e: {
    baseUrl: "https://www.litres.ru/",
    setupNodeEvents(on, config) {
      mobileViewportWidthBreakpoint: 414
    },
  },
};
