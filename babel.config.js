const path = require("path");
const isProd = process.env.NODE_ENV === "production";

const options = {
  dev: !isProd,
  test: false,
  stylexSheetName: "<>",
  genConditionalClasses: true,
  unstable_moduleResolution: {
    type: "commonJS",
    rootDir: path.join(__dirname, "../.."),
  },
};

module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "defaults" }],
    ["@babel/preset-react", { runtime: "automatic" }], // Include this line if you're using React
    "@babel/preset-typescript", // Include this line if you're using TypeScript
  ],
  plugins: [["@stylexjs/babel-plugin", options]],
};
