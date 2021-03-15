const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
      new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        inject: 'body'
      })
  ]
};
