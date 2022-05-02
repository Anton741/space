const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SvgSpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: ['svg-sprite-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'assets',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new SvgSpriteLoaderPlugin()
  ]
};