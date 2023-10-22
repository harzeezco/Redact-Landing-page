const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  devServer: {
    contentBase: "./dist",
    hot: true, // Enables Hot Module Replacement
    overlay: true, // Shows a full-screen overlay in the browser when there are compiler errors or warnings
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};
