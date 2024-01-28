const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "defaults" }],
    ["@babel/preset-react", { runtime: "automatic" }], // Include this line if you're using React
    "@babel/preset-typescript", // Include this line if you're using TypeScript
  ],
  plugins: [],
};
