const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    app: "./src/index.js",
  },
  resolve: {
    extensions: ['.css', '.js']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: ["babel-loader"]
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      inject: "body",
    }),
  ],
};
