const path = require("node:path");
const { icestackPlugin } = require("@icestack/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    icestackPlugin({
      // Absolute path to the loading directory
      loadDirectory: path.resolve(__dirname, "my-ui"),
      // Whether to inject tailwindcss theme config
      // When true, the generator's primary success warning colors will enter the tailwindcss.theme.extend configuration
      //You can only use bg-primary / text-success
      //Default value: false
      loadConfig: true,
      // ...
    }),
  ],
  important: true,
};
