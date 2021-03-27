  module.exports = {
    settings: {
      algolia: {
        enabled: true,
        applicationId: "ABAI9XLKZH",
        apiKey: process.env.ALGOLIA_KEY,
        // debug: true,              // default: false
        // prefix: 'my_own_prefix'   // default: Strapi environment (strapi.config.environment)
      },
    },
  };