// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/",
    // Mount "public" to the root URL path ("/*") and serve files with zero transformations:
    public: { url: "/", static: true, resolve: false },
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    source: "remote",
    /* ... */
    types: true,
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
