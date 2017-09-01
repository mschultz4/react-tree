const path = require("path");
const fs = require("fs");

module.exports = {
  entry: [path.resolve(__dirname, "lib/index.js")],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  }
};