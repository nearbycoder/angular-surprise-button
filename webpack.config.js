var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(path.join(__dirname, "dist"));
var APP_DIR = path.resolve(path.join(__dirname, "src", "js"));
var config = {
  devtool: "source-map",
  entry: path.join(APP_DIR + "/surprise-button.module.js"),
  output: {
    path: BUILD_DIR,
    filename: "angular-surprise-button.js",
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      angular: path.resolve(path.join(__dirname, "node_modules", "angular"))
    }
  }
};

module.exports = config;
